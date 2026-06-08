import { Box, Typography, styled } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

import { CardProps } from '.';

export const Card = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'fullContent' && prop !== 'isClickable',
})<{ fullContent?: boolean; isClickable?: boolean }>(({ theme, fullContent, isClickable }) => {
    const palette = chirpPalette(theme);
    const { breakpoints } = theme;

    return {
        background: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
        border: `1px solid ${palette.borders.primary}`,
        padding: fullContent ? 0 : '20px',
        borderRadius: '12px',
        height: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',

        ...(isClickable && {
            '&:hover': {
                background: palette.primaryColors.accentLight2 ?? palette.primaryColors.accentLight,
                border: `1px solid ${palette.primaryColors.accent}`,
                boxShadow: `0 8px 32px ${palette.shadow}`,
            },
        }),

        [breakpoints.between('md', 'lg')]: {
            overflow: 'auto',

            '&.non-scrollable': {
                overflow: 'hidden',
            },
        },

        [breakpoints.down('md')]: {
            padding: fullContent ? 0 : '24px 12px',
            overflow: 'auto',

            '&.non-scrollable': {
                overflow: 'hidden',
            },
        },
    };
});

export const Title = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'size',
})<Pick<CardProps, 'size'>>(({ theme, size }) => ({
    ...(size === 'large' && {
        fontSize: '20px',
        lineHeight: '24px',
        color: chirpPalette(theme).neutral.primary,
    }),

    ...(size === 'small' && {
        fontSize: '12px',
        lineHeight: '20px',
        color: chirpPalette(theme).neutral.primary,
    }),
}));
