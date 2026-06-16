import type { FC } from 'react';

import { styled, Stack, type StackProps } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const SimpleCard = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.black : palette.neutral.white,
        border: 'none',
        borderRadius: '12px',
        padding: '24px',
        overflowX: 'hidden',
        overflowY: 'auto',
        '::-webkit-scrollbar': {
            display: 'none',
        },
    };
}) as FC<StackProps>;

export const SimpleSmallCard = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.black : palette.neutral.white,
        border: 'none',
        borderRadius: '8px',
        padding: '11px',
        alignItems: 'center',
        justifyContent: 'center',
    };
}) as FC<StackProps>;
