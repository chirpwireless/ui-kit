import mapboxgl from 'mapbox-gl';
import { useCallback, useEffect, useRef, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import bboxTurf from '@turf/bbox';
import distance from '@turf/distance';
import { point } from '@turf/helpers';
import bearing from '@turf/bearing';
import 'mapbox-gl/dist/mapbox-gl.css';

import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { Coordinates } from '../map.types';
import { mapMarkerArrowSvgString } from '../mp-marker-string';
import { BaseMap, IBaseMapProps } from '../base-map';
import { customDrawStyles, typedGeodesicDraw } from '../constance';
import { debounce, useTheme } from '@mui/material';
import { createPopupsForLineString, renderLineStringPoints, ZOOM_BREAKPOINTS } from '../helpers/utils';

mapboxgl.accessToken = (import.meta.env.VITE_UI_MAPBOX_TOKEN || '') as string;

interface IFeatureMapProps extends Omit<IBaseMapProps, 'mapRef' | 'onMapLoad'> {
    data?: GeoJSON.GeoJSON | null; // only one feature, if you want provide feature collection - develop it
    isLineMarkersNeeded?: boolean;
    accessToken?: string;
    centeringCoordinates?: Coordinates;
    animateLineId?: number; // id по которому запускается анимация
    animationDuration?: number;
    isPaused: boolean;

    setAnimateLineId: (id?: number) => void;
}

type DataType = GeoJSON.GeoJSON<GeoJSON.Geometry, GeoJSON.GeoJsonProperties> | null;

export const TripMap: React.FC<IFeatureMapProps> = ({
    data,
    centeringCoordinates, // Координаты, по которым происходит центрирование
    isLineMarkersNeeded = true, // Флаг на отображение точек между стартовой и конечной на LineString
    animateLineId,
    isPaused,
    animationDuration = 3000,
    setAnimateLineId,
    ...baseProps
}) => {
    const theme = useTheme();
    const [animating, setIsAnimating] = useState<number | null>(null);
    const [zoomState, setZoomState] = useState(ZOOM_BREAKPOINTS.MEDIUM);

    const animationPauseRef = useRef<{ coordinates: [number, number][]; elapsedTime: number } | boolean | null>(null);
    const arrowRef = useRef<HTMLDivElement>(undefined);
    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const map = useRef<mapboxgl.Map>(null);
    const animationMarkerRef = useRef<mapboxgl.Marker | null>(null);
    const drawRef = useRef<MapboxDraw | null>(null);

    const onMapLoad = (localData?: DataType) => {
        if (!map.current) return;

        arrowRef.current = document.createElement('div');
        arrowRef.current.innerHTML = mapMarkerArrowSvgString(theme.palette);
        arrowRef.current.style.width = '20px';
        arrowRef.current.style.height = '16px';
        arrowRef.current.style.transformOrigin = 'center'; // Устанавливаем центр как точку вращения

        // Для работы с источником mapbox-gl-draw-cold
        let modes = MapboxDraw.modes;
        modes = typedGeodesicDraw.enable(modes);
        const draw = new MapboxDraw({
            displayControlsDefault: false,
            modes: {
                ...modes,
            },
            styles: customDrawStyles(theme.palette),
        });

        drawRef.current = draw;
        // https://github.com/mapbox/mapbox-gl-draw/issues/1257
        map.current.addControl(draw);

        addDataToMap(localData);
    };

    const clearObjects = useCallback(() => {
        setIsAnimating(null);
        animationMarkerRef.current?.remove();
        animationPauseRef.current = false;
        setAnimateLineId(undefined);
    }, [setAnimateLineId]);

    const clearMap = useCallback(() => {
        if (!map.current) return;

        // Удаление всех маркеров
        markersRef.current.forEach((marker) => marker.remove());
        markersRef.current = []; // Очистка массива маркеров после их удаления

        clearObjects();

        drawRef.current && drawRef.current.deleteAll();
    }, [clearObjects]);

    const addDataToMap = useCallback(
        (localData?: DataType) => {
            if (!map.current) return;

            clearMap();

            if (!localData) {
                (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData({
                    type: 'FeatureCollection',
                    features: [],
                });

                return;
            }

            if (localData.type === 'FeatureCollection') {
                for (const feature of localData.features) {
                    const geometry = feature.geometry;

                    if (geometry.type === 'LineString') {
                        renderLineStringPoints({
                            geometry,
                            map,
                            markersRef,
                            isLineMarkersNeeded,
                            theme,
                        });
                    }
                }
                (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData({
                    type: 'FeatureCollection',
                    features: localData.features,
                });
            } else {
                (map.current?.getSource('mapbox-gl-draw-cold') as mapboxgl.GeoJSONSource)?.setData(localData);
            }

            // bbox logic
            const bbox = bboxTurf(localData, { recompute: true });
            const [west, south, east, north] = bbox;
            map.current.fitBounds([west, south, east, north], { padding: 50 });
        },
        [clearMap, isLineMarkersNeeded, theme],
    );

    const animate = useCallback(
        (coordinates: [number, number][], startTime: number) => {
            if (!coordinates.length) return;

            const now = performance.now();

            // Длины сегментов
            const segmentLengths = coordinates.map((coord, i) =>
                i === 0 ? 0 : distance(point(coordinates[i - 1]), point(coord)),
            );
            // Общая длина пути
            const totalLength = segmentLengths.reduce((sum, len) => sum + len, 0);
            const accumulatedLengths = segmentLengths.reduce<number[]>((acc, len, i) => {
                acc.push((acc[i - 1] || 0) + len);

                return acc;
            }, []);

            if (animationPauseRef.current === true) {
                animationPauseRef.current = {
                    elapsedTime: now - startTime,
                    coordinates,
                };

                return;
            }

            if (animationPauseRef.current === false) {
                return;
            }

            const elapsed = now - startTime;
            const progress = Math.min(elapsed / animationDuration, 1);
            const traveledDistance = progress * totalLength;

            // Два ближайших сегмента
            let segmentIndex = accumulatedLengths.findIndex((d) => d >= traveledDistance);

            if (segmentIndex === -1) segmentIndex = coordinates.length - 1;

            const [prevLng, prevLat] = coordinates[segmentIndex - 1] || coordinates[0];
            const [nextLng, nextLat] = coordinates[segmentIndex] || coordinates[coordinates.length - 1];

            const segmentStart = accumulatedLengths[segmentIndex - 1] || 0;
            const segmentEnd = accumulatedLengths[segmentIndex] || totalLength;
            const segmentProgress = (traveledDistance - segmentStart) / (segmentEnd - segmentStart);

            // Интерполяция координат
            const currentLng = prevLng + (nextLng - prevLng) * segmentProgress;
            const currentLat = prevLat + (nextLat - prevLat) * segmentProgress;

            animationMarkerRef.current?.setLngLat([currentLng, currentLat]);

            // Расчет угла направления движения
            const angle = bearing([prevLng, prevLat], [nextLng, nextLat]) + 60; // 60 - значение для корректировки
            const svgElement = arrowRef.current?.querySelector('svg');

            if (svgElement) svgElement.style.transform = `rotate(${angle}deg)`;

            if (progress < 1) {
                requestAnimationFrame(() => animate(coordinates, startTime));
            } else {
                clearObjects();
            }
        },
        [animationDuration, clearObjects],
    );

    // Функция для запуска анимации
    const startAnimation = useCallback(
        (lineId: number) => {
            if (!map.current || !data || (animating === lineId && animating) || lineId == null) return;

            animationMarkerRef.current?.remove();
            animationPauseRef.current = false;

            if (data.type === 'FeatureCollection') {
                const lineFeature = data.features.find(
                    (feature) => feature.geometry.type === 'LineString' && feature.properties?.lineId === lineId,
                );

                if (!lineFeature) {
                    console.warn(`No LineString found in data with lineId ${lineId} for animation.`);
                    setIsAnimating(null);

                    return;
                }

                setIsAnimating(lineId);

                const coordinates =
                    lineFeature.geometry.type === 'LineString'
                        ? (lineFeature.geometry.coordinates as [number, number][])
                        : [];

                // Создаем кастомный HTML-элемент для маркера со стрелкой
                if (animationMarkerRef.current) {
                    animationMarkerRef.current.remove();
                }

                // Создаём маркер с кастомной иконкой
                animationMarkerRef.current = new mapboxgl.Marker({
                    element: arrowRef.current,
                    anchor: 'center',
                })
                    .setLngLat(coordinates[0])
                    .addTo(map.current);

                animationPauseRef.current = null;
                animate(coordinates, performance.now());
            } else {
                console.warn('Data is not a valid FeatureCollection with a LineString for animation.');
            }
        },
        [data, animating, animate],
    );

    const updatePopups = useCallback(() => {
        if (!data) {
            createPopupsForLineString();
        }
        const zoom = map.current?.getZoom();

        if (data && data.type === 'FeatureCollection') {
            data.features.forEach((feature) => {
                if (feature.geometry.type === 'LineString') {
                    const { coordinates } = feature.geometry;
                    const { speeds, time } = feature.properties as {
                        speeds: (number | null)[];
                        time: (string | null)[];
                    };

                    if (speeds && time) {
                        createPopupsForLineString(map.current!, coordinates as [number, number][], speeds, time, zoom);
                    }
                }
            });
        }
    }, [data]);

    const handleZoomChange = () => {
        const zoom = map.current?.getZoom();

        if (zoom)
            if (zoom < ZOOM_BREAKPOINTS.NONE) setZoomState(ZOOM_BREAKPOINTS.NONE);
            else if (zoom < ZOOM_BREAKPOINTS.LOW) setZoomState(ZOOM_BREAKPOINTS.LOW);
            else if (zoom < ZOOM_BREAKPOINTS.MEDIUM) setZoomState(ZOOM_BREAKPOINTS.MEDIUM);
            else if (zoom < ZOOM_BREAKPOINTS.HIGH) setZoomState(ZOOM_BREAKPOINTS.HIGH);
    };

    useEffect(() => {
        const mapCurrent = map.current;

        if (!mapCurrent) return;

        if (mapCurrent?.isStyleLoaded()) {
            addDataToMap(data);
        }

        const debouncedUpdate = debounce(() => {
            addDataToMap(data);
        }, 100);

        mapCurrent.on('style.load', debouncedUpdate);

        return () => {
            debouncedUpdate.clear();
            mapCurrent.off('style.load', debouncedUpdate);

            if (mapCurrent) mapCurrent.stop();
        };
    }, [addDataToMap, data]);

    // Вызов анимации при изменении shouldAnimate
    useEffect(() => {
        if (animateLineId && startAnimation) {
            startAnimation(animateLineId);
        }
    }, [animateLineId, startAnimation]);

    useEffect(() => updatePopups(), [zoomState, data, updatePopups]);

    useEffect(() => {
        if (isPaused) {
            animationPauseRef.current = true;
        } else if (typeof animationPauseRef.current !== 'boolean' && animationPauseRef.current) {
            animate(animationPauseRef.current.coordinates, performance.now() - animationPauseRef.current.elapsedTime);
        }
    }, [isPaused, data, animate]);

    // Центрирование карты по координатам centeringCoordinates
    useEffect(() => {
        if (map.current && centeringCoordinates?.lat && centeringCoordinates?.lon) {
            map.current.flyTo({ center: [centeringCoordinates?.lon, centeringCoordinates?.lat], essential: true });
        }
    }, [centeringCoordinates]);

    useEffect(() => {
        const mapCurrent = map.current;

        if (!mapCurrent) return;

        mapCurrent.on('zoom', handleZoomChange);
        mapCurrent.on('move', updatePopups);

        return () => {
            mapCurrent?.off('zoom', handleZoomChange);
            mapCurrent?.off('move', updatePopups);
        };
    }, [data, updatePopups]);

    return <BaseMap {...baseProps} mapRef={map} onMapLoad={() => onMapLoad(data)} />;
};
