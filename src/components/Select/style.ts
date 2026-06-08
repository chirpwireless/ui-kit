import { styled, Select as MuiSelect } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Select = styled(MuiSelect)<{ size?: 'small' | 'medium' }>(({ theme, size }) => {
    const palette = chirpPalette(theme);

    return {
        backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
        borderRadius: '8px',
        border: 'none',
        fontFamily: theme.typography.fontFamily,
        marginTop: '16px',
        boxSizing: 'border-box',

        '&.MuiInputBase-root': {
            height: '36px',
            minHeight: '36px',
            boxSizing: 'border-box',
            border: `1px solid ${palette.borders.primary}`,
            gap: '8px',

            ...(size === 'small' && {
                height: '32px',
                minHeight: '32px',
            }),

            '&:hover:not(.Mui-disabled)': {
                borderColor: palette.primaryColors.accent,
            },
            '&.Mui-focused': {
                borderColor: palette.primaryColors.accent,
            },
            '&.Mui-error': {
                borderColor: palette.alerts.alert,
            },
        },

        '.MuiSelect-select': {
            padding: '8px 44px 8px 16px',
            fontFamily: theme.typography.fontFamily,
            display: 'block',
            alignItems: 'center',
            minHeight: 'unset',
            height: '20px',
            boxSizing: 'border-box',
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.2px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',

            ...(size === 'small' && {
                padding: '6px 44px 6px 12px',
            }),

            '&.MuiInputBase-input': {
                padding: '0px 44px 8px 16px',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.2px',
                minHeight: 'unset',
                height: '20px',
                boxSizing: 'border-box',

                ...(size === 'small' && {
                    padding: '0px 44px 6px 12px',
                }),
            },
        },

        '.MuiSelect-icon': {
            right: '16px',
            top: 'calc(50% - 10px)',
            width: '20px',
            height: '20px',
        },

        '.MuiInputBase-adornedEnd': {
            paddingRight: '20px',
        },

        input: {
            padding: '8px 16px',
            fontSize: '14px',
            lineHeight: '20px',
            letterSpacing: '0.2px',
            fontFamily: theme.typography.fontFamily,
            boxSizing: 'border-box',
        },
        '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
            display: 'none',
        },

        label: {
            padding: 0,
            left: '-12px',
            backgroundColor: 'transparent',
            color: palette.neutral.primary,

            '&.MuiInputLabel-shrink': {
                fontSize: '14px',
                lineHeight: '20px',
                top: '4px',
                left: '-12px',
            },

            '&.Mui-focused': {
                color: palette.primaryColors.accent,
            },

            '&.Mui-error': {
                color: palette.alerts.alert,
            },
        },
    };
});
