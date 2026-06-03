import type { CSSObject } from '@mui/material/styles';

// New v1.0 theme augmentation. Kept intentionally narrow to avoid clashing with the
// legacy augmentation in `src/styles/theme.d.ts`. Palette extensions exported here
// as standalone types and applied to the literal palette objects via `as PaletteOptions`
// inside `src/theme/{light,dark,chirp/*}.ts` rather than via module augmentation.

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        xm: true;
        lg: true;
        xl: true;
        xxl: true;
    }

    interface Mixins {
        linearBackground?: CSSObject;
    }
}

export interface PaletteNeutral {
    primary: string;
    white: string;
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
    grey5: string;
    black: string;
    contrast: string;
}

export interface PalettePrimaryColors {
    accent: string;
    accentHover: string;
    accentLight: string;
    accentLightHover: string;
    accentLight2: string;
}

export interface PaletteBorders {
    primary: string;
    secondary: string;
    ternary: string;
}

export interface PaletteAlerts {
    success: string;
    warning: string;
    alert: string;
    successLight: string;
    warningLight: string;
    alertLight: string;
}

export interface PaletteFraming {
    grayGradient: string;
    opacityGradient: string;
}

export interface PaletteAdditionalColors {
    blue: string;
    lightYellow: string;
    yellow: string;
    lightBlue: string;
    air: string;
    purple: string;
    pink: string;
}

export interface PaletteWidgets {
    text: string;
    values: {
        min: string;
        avg: string;
        max: string;
    };
    gradientPoints: {
        min: string;
        avg: string;
        max: string;
    };
}

export type ThemeVariant = 'default' | 'chirp';
