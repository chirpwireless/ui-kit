import type { FC } from 'react';

import { styled, Stack, type StackProps } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';
import { type LayoutProps, layoutStyles, shouldForwardLayoutProp } from '../_layout/layoutProps';

type CardProps = StackProps & LayoutProps;

export const SimpleCard = styled(Stack, { shouldForwardProp: shouldForwardLayoutProp })<CardProps>(
    ({ theme, ...props }) => {
        const palette = chirpPalette(theme);

        return {
            backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.black : palette.neutral.white,
            border: 'none',
            borderRadius: '12px',
            padding: '24px',
            overflowX: 'hidden',
            overflowY: 'auto',
            '::-webkit-scrollbar': { display: 'none' },
            ...layoutStyles(theme, props),
        };
    },
) as FC<CardProps>;

export const SimpleSmallCard = styled(Stack, { shouldForwardProp: shouldForwardLayoutProp })<CardProps>(
    ({ theme, ...props }) => {
        const palette = chirpPalette(theme);

        return {
            backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.black : palette.neutral.white,
            border: 'none',
            borderRadius: '8px',
            padding: '11px',
            alignItems: 'center',
            justifyContent: 'center',
            ...layoutStyles(theme, props),
        };
    },
) as FC<CardProps>;
