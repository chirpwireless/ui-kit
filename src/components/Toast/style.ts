import { styled, IconButton, Stack, Typography } from '@mui/material';

import { chirpPalette } from '../../theme/palette';

export const Root = styled(Stack)(({ theme }) => ({
    gap: theme.spacing(3),
    color: chirpPalette(theme).neutral.primary,
    padding: theme.spacing(3),
    width: '100%',
}));

export const IconWrap = styled('span')({
    minWidth: 32,
    display: 'flex',
});

export const Title = styled(Typography)(({ theme }) => ({
    color: chirpPalette(theme).neutral.primary,
    lineHeight: 1.2,
    textTransform: 'capitalize',
}));

export const Text = styled(Typography)(({ theme }) => ({
    color: chirpPalette(theme).neutral.primary,
    lineHeight: 1.15,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
    width: 24,
    height: 24,
    padding: 2,
    color: chirpPalette(theme).neutral.primary,
    marginLeft: 'auto',
}));
