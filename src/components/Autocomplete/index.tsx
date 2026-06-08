import { Autocomplete as MuiAutocomplete, AutocompleteProps, styled } from '@mui/material';
import React from 'react';

import { SelectIcon } from '../../icons';

// Используем any для обхода бага TS 'Debug Failure. No error for last overload signature'
// Мы возвращаем типизацию пропсов через AutocompleteProps, но сам компонент остаётся any для компилятора
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const StyledAutocomplete = styled(MuiAutocomplete)(({ theme }) => ({
    borderRadius: '8px',
    border: 'none',
    fontFamily: theme?.typography.fontFamily,

    '.MuiInputBase-root': {
        height: '36px',
        minHeight: '36px',
        padding: 0,

        '&.MuiOutlinedInput-root.MuiAutocomplete-inputRoot': {
            paddingRight: '65px',
        },

        'input.MuiInputBase-input': {
            padding: '8px 16px',
        },

        '.MuiAutocomplete-endAdornment': {
            minHeight: '36px',
            right: '23px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            button: {
                height: '20px',
                width: '20px',
                padding: 0,
            },
        },

        '.MuiAutocomplete-clearIndicator': {
            marginTop: 0,

            '.MuiSvgIcon-root': {
                width: '18px',
                height: '18px',
            },
        },

        '.MuiAutocomplete-popupIndicator': {
            marginTop: 0,

            '.MuiSvgIcon-root': {
                width: '18px',
                height: '18px',
            },
        },
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
})) as any;

const AutocompleteWithIcon = <
    T,
    Multiple extends boolean | undefined = undefined,
    DisableClearable extends boolean | undefined = undefined,
    FreeSolo extends boolean | undefined = undefined,
>(
    props: AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
) => {
    return <StyledAutocomplete {...props} popupIcon={props.popupIcon ?? <SelectIcon />} />;
};

export const Autocomplete = AutocompleteWithIcon;
