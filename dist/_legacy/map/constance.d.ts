import { Palette } from '@mui/material';
import { GeodesicDrawType } from './map.types';
export declare const customDrawStyles: (theme: Palette) => ({
    id: string;
    type: string;
    filter: (string | string[])[];
    paint: {
        'line-color': string;
        'line-width': number;
        'fill-color'?: undefined;
        'fill-opacity'?: undefined;
        'circle-radius'?: undefined;
        'circle-color'?: undefined;
    };
} | {
    id: string;
    type: string;
    filter: (string | string[])[];
    paint: {
        'fill-color': string;
        'fill-opacity': number;
        'line-color'?: undefined;
        'line-width'?: undefined;
        'circle-radius'?: undefined;
        'circle-color'?: undefined;
    };
} | {
    id: string;
    type: string;
    filter: (string | string[])[];
    paint: {
        'circle-radius': number;
        'circle-color': string;
        'line-color'?: undefined;
        'line-width'?: undefined;
        'fill-color'?: undefined;
        'fill-opacity'?: undefined;
    };
})[];
export declare const typedGeodesicDraw: GeodesicDrawType;
