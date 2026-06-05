import { ButtonBase, styled } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';
import { ButtonProps } from './Button';

export const Button = styled(ButtonBase, { shouldForwardProp: (prop) => prop !== 'fullWidth' })<
    Pick<ButtonProps, 'fullWidth' | 'size' | 'variant' | 'hasIcon'>
>(({ fullWidth, theme, size, variant, hasIcon }) => ({
    boxSizing: 'border-box',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    fontFamily: theme.typography.button.fontFamily,
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '20px',
    letterSpacing: '0.4px',
    transition: 'all 0.125s',
    gap: '4px',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : '',

    ...(size === 'big' && {
        padding: hasIcon ? '14px 24px 14px 20px' : '14px 24px',
        minHeight: '48px',
        height: '48px',
    }),

    ...(size === 'medium' && {
        padding: hasIcon ? '8px 20px 8px 16px' : '8px 16px',
        minHeight: '36px',
        height: '36px',
    }),

    ...(size === 'small' && {
        padding: hasIcon ? '4px 16px 4px 12px' : '4px 12px',
        minHeight: '28px',
        height: '28px',
    }),

    ...(variant === 'primary' && {
        background: chirpPalette(theme).primaryColors.accent,
        color: theme.palette.secondary.main,
        border: `1px solid ${chirpPalette(theme).primaryColors.accent}`,

        '&:hover, &:active': {
            background: chirpPalette(theme).primaryColors.accentHover,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: chirpPalette(theme).borders.secondary,
        },
    }),

    ...(variant === 'secondary' && {
        background: chirpPalette(theme).primaryColors.accentLight,
        color: chirpPalette(theme).primaryColors.accent,
        borderColor: `none`,

        '&:hover, &:active': {
            background: chirpPalette(theme).primaryColors.accentLightHover,
            color: chirpPalette(theme).primaryColors.accentHover,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: chirpPalette(theme).borders.secondary,
        },
    }),

    ...(variant === 'sidebar' && {
        background: 'transparent',
        color: chirpPalette(theme).neutral.primary,
        border: `1px solid transparent`,

        '&:hover, &:active': {
            background: chirpPalette(theme).primaryColors.accentLight2,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: chirpPalette(theme).borders.secondary,
        },
    }),

    ...(variant === 'tertiary' && {
        background:
            theme.palette.mode === CurrentTheme.Dark
                ? chirpPalette(theme).neutral.grey1
                : chirpPalette(theme).neutral.white,
        color: chirpPalette(theme).neutral.primary,
        border: `1px solid ${chirpPalette(theme).borders.primary}`,

        '&:hover, &:active': {
            background: chirpPalette(theme).primaryColors.accentLight,
            color: chirpPalette(theme).primaryColors.accentHover,
            borderColor: chirpPalette(theme).primaryColors.accent,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: chirpPalette(theme).borders.secondary,
        },
    }),

    ...(variant === 'icon' && {
        background:
            theme.palette.mode === CurrentTheme.Dark
                ? chirpPalette(theme).neutral.black
                : chirpPalette(theme).neutral.white,
        color: chirpPalette(theme).neutral.primary,
        border: 'none',

        ...(size === 'small' && {
            padding: '5px',
            minWidth: fullWidth ? '100%' : '28px',
            width: fullWidth ? '100%' : '28px',
            height: '28px',
        }),

        ...(size === 'medium' && {
            padding: '9px',
            minWidth: fullWidth ? '100%' : '36px',
            width: fullWidth ? '100%' : '36px',
            height: '36px',
        }),

        ...(size === 'big' && {
            padding: '15px',
            minWidth: fullWidth ? '100%' : '48px',
            width: fullWidth ? '100%' : '48px',
            height: '48px',
        }),

        '&:hover, &:active': {
            background: chirpPalette(theme).primaryColors.accentLightHover,
            color: chirpPalette(theme).primaryColors.accent,
        },

        '&:focus-visible': {
            borderColor: 'none',
        },
    }),

    ...(variant === 'text' && {
        padding: 0,
        minHeight: '20px',
        height: '20px',
        borderRadius: 0,
        color: chirpPalette(theme).primaryColors.accent,

        '&:hover, &:active': {
            color: chirpPalette(theme).primaryColors.accentHover,
            textDecoration: 'underline',
        },

        '&:disabled': {
            opacity: '0.3',
        },
    }),

    ...(variant === 'outlined' && {
        background: 'transparent',
        color: chirpPalette(theme).primaryColors.accent,
        border: `1px solid ${chirpPalette(theme).primaryColors.accent}`,

        '&:hover, &:active': {
            background: chirpPalette(theme).primaryColors.accentLight2,
            color: chirpPalette(theme).primaryColors.accentHover,
            borderColor: chirpPalette(theme).primaryColors.accentHover,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: chirpPalette(theme).borders.secondary,
        },
    }),

    ...(variant === 'grouped' && {
        background: chirpPalette(theme).primaryColors.accent,
        color: chirpPalette(theme).neutral.primary,
        border: `1px solid ${chirpPalette(theme).primaryColors.accent}`,

        '&:hover, &:active': {
            background: chirpPalette(theme).primaryColors.accentHover,
        },

        '&:disabled': {
            opacity: '0.3',
        },

        '&:focus-visible': {
            borderColor: chirpPalette(theme).borders.secondary,
        },
    }),
}));
