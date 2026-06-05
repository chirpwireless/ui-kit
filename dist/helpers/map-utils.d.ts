import { PaletteMode } from '@mui/material';
export type MapPoint = {
    lat: number;
    lon: number;
    [key: string]: number | string;
};
type Coordinates = [number, number];
export declare const addSource: (map: mapboxgl.Map, id: string, source: mapboxgl.AnySourceData) => void;
export declare const addLayer: (map: mapboxgl.Map, id: string, layer: mapboxgl.AnyLayer, before?: string) => void;
export declare const setPointerOnHover: (map: mapboxgl.Map, layerId: string) => void;
export declare const getSWCoordinates: (coordinatesCollection: Array<MapPoint>) => Coordinates;
export declare const getNECoordinates: (coordinatesCollection: Array<MapPoint>) => Coordinates;
export declare const calcBoundsFromCoordinates: (coordinatesCollection: Array<MapPoint>) => Coordinates[];
export declare const getCoverageZoomLvl: (zoom: number) => 0 | 2 | 3;
export declare const getUiKitMapStyleId: (themeMode: PaletteMode) => string;
export declare const removeMapLayer: (map: mapboxgl.Map, name: string) => void;
export declare const removeMapSource: (map: mapboxgl.Map, name: string) => void;
export declare const checkCirclePolygon: (data: GeoJSON.GeoJSON) => boolean;
export declare const getCircleGeometryFromPolygon: (data: GeoJSON.GeoJSON) => {
    center: import('geojson').Position;
    radius: number;
} | undefined;
export {};
