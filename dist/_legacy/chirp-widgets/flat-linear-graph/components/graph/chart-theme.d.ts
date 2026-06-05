import { Theme as MuiTheme } from '@mui/material';
import { Theme as ChartTheme } from '@nivo/core';
export declare const DEFAULT_COLORS: string[];
export declare const DEFAULT_DEFS: ({
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
} | {
    id: string;
    type: string;
    spacing: number;
    rotation: number;
    lineWidth: number;
    background: string;
    color: string;
    colors?: undefined;
})[];
export declare const createFlatChartTheme: (theme: MuiTheme) => ChartTheme;
