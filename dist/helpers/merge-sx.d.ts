import { SxProps, Theme } from '@mui/material';
/**
 * Merge a component's base styles with an optional consumer `sx` (object, array, callback or none).
 * Consumer styles come last so they take precedence over the base.
 */
export declare const mergeSx: (base: SxProps<Theme>, sx?: SxProps<Theme>) => SxProps<Theme>;
