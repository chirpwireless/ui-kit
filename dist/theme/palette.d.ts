import { Palette, PaletteOptions } from '../../node_modules/@mui/material/styles';
import { PaletteAdditionalColors, PaletteAlerts, PaletteBorders, PaletteFraming, PaletteNeutral, PalettePrimaryColors, PaletteWidgets } from './augmentation';
export type ChirpPaletteOptions = PaletteOptions & {
    neutral?: PaletteNeutral;
    primaryColors?: PalettePrimaryColors;
    borders?: PaletteBorders;
    alerts?: PaletteAlerts;
    framing?: PaletteFraming;
    additionalColors?: PaletteAdditionalColors;
    widgets?: PaletteWidgets;
    shadow?: string;
};
export interface ChirpPalette {
    neutral: PaletteNeutral;
    primaryColors: PalettePrimaryColors;
    borders: PaletteBorders;
    alerts: PaletteAlerts;
    framing: PaletteFraming;
    additionalColors: PaletteAdditionalColors;
    widgets: PaletteWidgets;
    shadow: string;
}
export declare const chirpPalette: (theme: {
    palette: Palette;
}) => ChirpPalette;
