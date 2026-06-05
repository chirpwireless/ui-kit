import type { Palette, PaletteOptions } from '@mui/material/styles';

import type {
    PaletteAdditionalColors,
    PaletteAlerts,
    PaletteBorders,
    PaletteFraming,
    PaletteNeutral,
    PalettePrimaryColors,
    PaletteWidgets,
} from './augmentation';

// Local intersection type used inside the new theme module. We avoid module-augmenting MUI's
// Palette/PaletteOptions here because the legacy theme (`src/styles/theme/*`) already augments
// them with a different design system. Instead we cast at function signature boundaries.
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

// Non-optional view of the v1 palette extensions for use inside styled() callbacks.
// At runtime the v1 theme always carries these keys; we cast here instead of module-augmenting
// MUI's global Palette, which the legacy theme (`src/styles/theme.d.ts`) already augments with a
// different design system. This is the "cast at function-signature boundaries" approach.
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

export const chirpPalette = (theme: { palette: Palette }): ChirpPalette => theme.palette as unknown as ChirpPalette;
