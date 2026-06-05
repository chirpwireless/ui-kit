import { Palette } from '@mui/material';
export declare const getFlatChartDefs: (color: string, shadowColor: string, palette: Palette) => ({
    id: string;
    type: string;
    spacing: number;
    rotation: number;
    lineWidth: number;
    background: string;
    color: string;
    colors?: undefined;
} | {
    id: string;
    type: string;
    colors: {
        offset: number;
        color: string;
        opacity: number;
    }[];
    spacing?: undefined;
    rotation?: undefined;
    lineWidth?: undefined;
    background?: undefined;
    color?: undefined;
})[];
