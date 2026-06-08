import { styled } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const PhoneField = styled(MuiTelInput)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
        borderRadius: '8px',
        border: 'none',
        fontFamily: theme?.typography.fontFamily,
        marginTop: '16px',

        '& svg': { height: '20px' },

        '& .MuiInputBase-root': {
            height: 'auto',

            '&.MuiInput-root': {
                marginTop: '0',

                '&:before, &:after': {
                    display: 'none',
                    borderBottom: 'none',
                },
            },
        },

        '.MuiFormLabel-root': {
            '&.Mui-focused': {},
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
            padding: '12px 16px 10px 16px',
            fontSize: '13px',
            lineHeight: '20px',
            fontFamily: theme?.typography.fontFamily,
            color: palette.neutral.primary,
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
        },
    };
});
