import { IconButton as MuiIconButton, styled } from '@mui/material';

import { chirpPalette } from '../../theme/palette';

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
    color: chirpPalette(theme).neutral.primary,
    padding: 0,

    '&:hover': { backgroundColor: 'transparent' },
}));
