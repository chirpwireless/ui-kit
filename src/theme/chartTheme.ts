import type { Theme as MuiTheme } from '@mui/material/styles';

import { CurrentTheme } from '../styles/constants';
import type { ChirpPaletteOptions } from './palette';
import './augmentation';

type ChirpTheme = Omit<MuiTheme, 'palette'> & { palette: ChirpPaletteOptions };

// Explicit return type: without it TS infers a shape that references react/node_modules/csstype
// (via CSS-like keys such as shapeRendering), which is not portable and breaks the lib build (TS2742).
interface BarChartTheme {
    crosshair: { line: { stroke: string; strokeDasharray: string; strokeOpacity: number } };
    tooltip: {
        table: { marginTop: string; padding: number };
        tableCell: { padding: string; color: string };
        tableCellValue: { color: string; marginLeft: string };
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
        chip: { width: string; height: string; borderRadius: number };
    };
    legends: { text: { fontSize: string } };
    axis: { ticks: { text: { fill: string; fontSize: string; shapeRendering: string; textShadow: string } } };
}

// Replaces the alpha channel of an `rgba(r, g, b, a)` string with the provided opacity.
const replaceRgbaOpacity = (rgba: string, opacity: number): string => {
    const match = rgba.match(/^rgba?\(([^)]+)\)$/);

    if (!match) return rgba;

    const parts = match[1].split(',').map((part) => part.trim());
    const [r, g, b] = parts;

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const createBarTheme = (themeInput: MuiTheme): BarChartTheme => {
    const theme = themeInput as unknown as ChirpTheme;
    const neutralPrimary = theme.palette.neutral?.primary ?? '';
    const neutralGrey1 = theme.palette.neutral?.grey1 ?? '';
    const neutralGrey4 = theme.palette.neutral?.grey4 ?? '';
    const neutralWhite = theme.palette.neutral?.white ?? '';
    const bordersPrimary = theme.palette.borders?.primary ?? '';

    return {
        crosshair: {
            line: {
                stroke: neutralPrimary,
                strokeDasharray: '3 3',
                strokeOpacity: 1,
            },
        },
        tooltip: {
            table: { marginTop: '8px', padding: 0 },
            tableCell: {
                padding: '4px 0',
                color: replaceRgbaOpacity(neutralPrimary, 0.4),
            },
            tableCellValue: {
                color: replaceRgbaOpacity(neutralPrimary, 0.6),
                marginLeft: '16px',
            },
            container: {
                background: replaceRgbaOpacity(
                    theme.palette.mode === CurrentTheme.Dark ? neutralGrey1 : neutralWhite,
                    theme.palette.mode === CurrentTheme.Dark ? 0.5 : 0.92,
                ),
                backdropFilter: 'blur(4px)',
                borderRadius: 12,
                border: `1px solid ${bordersPrimary}`,
                fontFamily: theme.typography.fontFamily,
                padding: '8px 12px',
                fontSize: '12px',
                lineHeight: '14px',
                color: neutralPrimary,
            },
            chip: { width: '8px', height: '8px', borderRadius: 1 },
        },
        legends: {
            text: { fontSize: '12px' },
        },
        axis: {
            ticks: {
                text: {
                    fill: neutralGrey4,
                    fontSize: '10px',
                    shapeRendering: 'crispEdges',
                    textShadow: `${theme.palette.mode === CurrentTheme.Dark ? neutralGrey1 : neutralWhite} 0 0 5px`,
                },
            },
        },
    };
};
