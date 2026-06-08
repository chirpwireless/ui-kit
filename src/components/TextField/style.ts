import { styled, TextField as MuiTextField, TextFieldProps } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const TextField = styled(MuiTextField)<TextFieldProps>(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        borderRadius: '8px',
        border: 'none',
        fontFamily: theme?.typography.fontFamily,
        marginTop: '16px',

        // Background must sit on the input box only — applying it to the root paints the
        // label/helper-text area too, which shows as a light patch over the card in light theme.
        '& .MuiInputBase-root': {
            backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
            height: '36px',
            minHeight: '36px',
            boxSizing: 'border-box',
            border: `1px solid ${palette.borders.primary}`,
            borderRadius: '8px',

            '&.MuiInputBase-sizeSmall': {
                height: '32px',
                minHeight: '32px',
            },

            '&:hover': {
                borderColor: palette.primaryColors.accent,
            },

            '&.Mui-focused': {
                borderColor: palette.primaryColors.accent,
            },

            '&.Mui-error': {
                border: `1px solid ${palette.alerts.alert}`,
                borderRadius: '8px',
            },
        },

        '& .MuiInputBase-root.MuiInputBase-multiline': {
            height: 'auto',
            minHeight: 'unset',
        },

        '.MuiFormControl-root.MuiTextField-root': {
            borderRadius: '8px',
        },

        '.MuiSelect-select': {
            paddingTop: '12px',
            paddingLeft: '16px',
            paddingBottom: '10px',
            fontFamily: theme?.typography.fontFamily,

            '&.MuiInputBase-input': {
                paddingTop: '12px',
                paddingLeft: '16px',
                paddingBottom: '10px',
            },
        },

        '.MuiSelect-icon': {
            right: '16px',
        },

        '.MuiInputBase-adornedEnd': {
            paddingRight: '20px',
        },
        '.MuiAutocomplete-clearIndicator': {
            marginTop: '8px',
        },

        'input:-webkit-autofill': {
            borderTopLeftRadius: '8px',
            borderBottomLeftRadius: '8px',
            border: 'none',
            borderRadius: '8px',
            boxShadow: `0 0 0 100px ${theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white} inset!important`,
            transitionDelay: '9999s',
            transitionProperty: 'background-color, color',
        },

        input: {
            padding: '8px 16px',
            fontSize: '13px',
            lineHeight: '20px',
            fontFamily: theme?.typography.fontFamily,
            color: palette.neutral.primary,
            backgroundColor: 'transparent',
        },

        fieldset: {
            border: 'none',
            top: 0,
        },
        legend: {
            fontFamily: theme?.typography.fontFamily,
            backgroundColor: 'transparent',
            span: {
                padding: 0,
            },
        },
        label: {
            padding: 0,
            left: '-12px',
            backgroundColor: 'transparent',
            color: palette.neutral.primary,

            '&.MuiInputLabel-shrink': {
                fontSize: '14px',
                lineHeight: '20px',
                top: '-8px',
                left: '-12px',
            },

            '&.Mui-focused': {
                color: palette.primaryColors.accent,
            },

            '&.Mui-error': {
                color: palette.alerts.alert,
            },
        },

        '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none',
        },
        '& input[type=number]': {
            MozAppearance: 'textfield',
        },
    };
});
