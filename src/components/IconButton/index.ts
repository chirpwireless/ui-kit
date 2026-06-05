import type { FC } from 'react';

import { IconButton as MuiIconButton, styled, type IconButtonProps } from '@mui/material';

import { chirpPalette } from '../../theme/palette';

// Annotate the export with a clean MUI type. Without it, vite-plugin-dts emits a deep relative
// path into `node_modules/@mui/material/OverridableComponent` that doesn't resolve in consumers,
// collapsing the type to `any` (breaking `sx`/`onClick` callback typing at call sites).
export const IconButton = styled(MuiIconButton)(({ theme }) => ({
    color: chirpPalette(theme).neutral.primary,
    padding: 0,

    '&:hover': { backgroundColor: 'transparent' },
})) as FC<IconButtonProps>;
