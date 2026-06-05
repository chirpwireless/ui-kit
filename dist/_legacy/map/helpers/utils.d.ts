import { LineString, Point } from 'geojson';
import { RefObject } from 'react';
import { Palette, Theme } from '@mui/material';
import { IFeatureMapVariants } from '../map.types';
interface IRenderPoints {
    geometry: Point;
    popupNode: Node;
    map: RefObject<mapboxgl.Map | null>;
    markersRef: RefObject<mapboxgl.Marker[]>;
    theme: Theme;
    specificMarkerIcon?: (theme: Palette) => string;
    variant: IFeatureMapVariants;
}
interface IRenderLineStringPoints {
    geometry: LineString;
    map: RefObject<mapboxgl.Map | null>;
    markersRef: RefObject<mapboxgl.Marker[]>;
    isLineMarkersNeeded: boolean;
    theme: Theme;
}
export declare const ZOOM_BREAKPOINTS: {
    HIGH: number;
    MEDIUM: number;
    LOW: number;
    NONE: number;
};
/**
 * Создает попапы с данными о скорости и времени для каждой точки маршрута в зависимости от уровня зума.
 * @param map - объект карты Mapbox.
 * @param coordinates - массив координат [долгота, широта] для LineString.
 * @param speeds - массив скоростей для каждой точки.
 * @param time - массив времени сервера для каждой точки.
 * @param zoom - текущий уровень зума.
 */
export declare const createPopupsForLineString: (map?: mapboxgl.Map, coordinates?: [number, number][], speeds?: (number | null)[], time?: (string | null)[], zoom?: number) => void;
/** Рендеринг элементов типа "Point" */
export declare const renderPoints: ({ geometry, popupNode, map, markersRef, theme, specificMarkerIcon, variant, }: IRenderPoints) => void;
/** Рендеринг маркеров при типе "LineString" */
export declare const renderLineStringPoints: ({ geometry, map, markersRef, isLineMarkersNeeded, theme, }: IRenderLineStringPoints) => void;
export {};
