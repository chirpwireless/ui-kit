import { createTheme, type PaletteMode, type Theme } from '@mui/material/styles';

import { chirpDarkTheme } from './chirp/dark';
import { chirpLightTheme } from './chirp/light';
import { createComponents } from './components';
import { darkTheme } from './dark';
import { lightTheme } from './light';
import { themeMixins } from './mixins';
import type { ChirpPaletteOptions } from './palette';
import { themeTemplate } from './template';

import './augmentation';

export type { ThemeVariant } from './augmentation';

export type {
    PaletteNeutral,
    PalettePrimaryColors,
    PaletteBorders,
    PaletteAlerts,
    PaletteFraming,
    PaletteAdditionalColors,
    PaletteWidgets,
} from './augmentation';

export type { ChirpPaletteOptions };

export { lightTheme, darkTheme, chirpLightTheme, chirpDarkTheme, themeTemplate, themeMixins, createComponents };

export { createBarTheme } from './chartTheme';

export interface GetThemeOptions {
    mode?: PaletteMode;
    variant?: import('./augmentation').ThemeVariant;
}

const pickPalette = (mode: PaletteMode, variant: 'default' | 'chirp'): ChirpPaletteOptions => {
    if (variant === 'chirp') {
        return (mode === 'light' ? chirpLightTheme : chirpDarkTheme).palette as ChirpPaletteOptions;
    }

    return (mode === 'light' ? lightTheme : darkTheme).palette as ChirpPaletteOptions;
};

export const getTheme = ({ mode = 'light', variant = 'default' }: GetThemeOptions = {}): Theme => {
    const palette = pickPalette(mode, variant);

    return createTheme({
        ...themeTemplate,
        ...themeMixins,
        palette,
        components: createComponents(palette),
    });
};
