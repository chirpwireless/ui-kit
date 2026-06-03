import type { PaletteOptions } from '@mui/material/styles';

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
