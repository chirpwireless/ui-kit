import { Theme as MuiTheme } from '../../node_modules/@mui/material/styles';
interface BarChartTheme {
    crosshair: {
        line: {
            stroke: string;
            strokeDasharray: string;
            strokeOpacity: number;
        };
    };
    tooltip: {
        table: {
            marginTop: string;
            padding: number;
        };
        tableCell: {
            padding: string;
            color: string;
        };
        tableCellValue: {
            color: string;
            marginLeft: string;
        };
        container: {
            background: string;
            backdropFilter: string;
            borderRadius: number;
            border: string;
            fontFamily: string | undefined;
            padding: string;
            fontSize: string;
            lineHeight: string;
            color: string;
        };
        chip: {
            width: string;
            height: string;
            borderRadius: number;
        };
    };
    legends: {
        text: {
            fontSize: string;
        };
    };
    axis: {
        ticks: {
            text: {
                fill: string;
                fontSize: string;
                shapeRendering: string;
                textShadow: string;
            };
        };
    };
}
export declare const createBarTheme: (themeInput: MuiTheme) => BarChartTheme;
export {};
