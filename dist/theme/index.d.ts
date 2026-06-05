import { PaletteMode, Theme } from '../../node_modules/@mui/material/styles';
import { chirpDarkTheme } from './chirp/dark';
import { chirpLightTheme } from './chirp/light';
import { createComponents } from './components';
import { darkTheme } from './dark';
import { lightTheme } from './light';
import { themeMixins } from './mixins';
import { ChirpPaletteOptions } from './palette';
import { themeTemplate } from './template';
export type { ThemeVariant } from './augmentation';
export type { PaletteNeutral, PalettePrimaryColors, PaletteBorders, PaletteAlerts, PaletteFraming, PaletteAdditionalColors, PaletteWidgets, } from './augmentation';
export type { ChirpPaletteOptions };
export { lightTheme, darkTheme, chirpLightTheme, chirpDarkTheme, themeTemplate, themeMixins, createComponents };
export { createBarTheme } from './chartTheme';
export interface GetThemeOptions {
    mode?: PaletteMode;
    variant?: import('./augmentation').ThemeVariant;
}
export declare const getTheme: ({ mode, variant }?: GetThemeOptions) => Theme;
