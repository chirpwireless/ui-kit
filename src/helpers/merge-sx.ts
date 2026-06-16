import type { SxProps, Theme } from '@mui/material';

type SxArray = Extract<SxProps<Theme>, readonly unknown[]>;

// Typed guard so the array branch narrows to the proper sx array type instead of `any[]`
// (plain Array.isArray widens to any[], which trips no-unsafe-* lint rules on spread).
const isSxArray = (sx?: SxProps<Theme>): sx is SxArray => Array.isArray(sx);

/**
 * Merge a component's base styles with an optional consumer `sx` (object, array, callback or none).
 * Consumer styles come last so they take precedence over the base.
 */
export const mergeSx = (base: SxProps<Theme>, sx?: SxProps<Theme>): SxProps<Theme> => [
    ...(isSxArray(base) ? base : [base]),
    ...(isSxArray(sx) ? sx : sx ? [sx] : []),
];
