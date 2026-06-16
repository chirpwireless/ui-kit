import type { FC } from 'react';

import { styled, Box, type BoxProps } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const SimpleCard = styled(Box)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.black : palette.neutral.white,
        border: `none`,
        borderRadius: '12px',
        padding: '24px',
        overflowX: 'hidden',
        overflowY: 'auto',

        '::-webkit-scrollbar': {
            display: 'none',
        },
    };
}) as FC<BoxProps>;

export const SimpleSmallCard = styled(Box)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.black : palette.neutral.white,
        border: `none`,
        borderRadius: '8px',
        padding: '11px',
        alignItems: 'center',
        justifyContent: 'center',
    };
}) as FC<BoxProps>;
