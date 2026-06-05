import { ThemeProviderProps } from '@emotion/react';
import { PaletteMode, PaletteOptions } from '@mui/material';
import { FC } from 'react';
interface IThemeProviderProps extends Omit<ThemeProviderProps, 'theme'> {
    mode: PaletteMode;
    customPalette?: PaletteOptions;
}
export declare const ThemeProvider: FC<IThemeProviderProps>;
export {};
