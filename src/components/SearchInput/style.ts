import { styled, TextField, TextFieldProps } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

type SearchProps = TextFieldProps & { size?: 'small' | 'medium' };

export const Search = styled(TextField)<SearchProps>(({ theme, size }) => {
    const palette = chirpPalette(theme);

    return {
        width: '400px',

        '&.MuiTextField-root': {
            padding: 0,
        },
        '& .MuiOutlinedInput-root': {
            height: size === 'small' ? '32px' : '36px',
            minHeight: size === 'small' ? '32px' : '36px',
            boxSizing: 'border-box',
            borderRadius: '8px',
            backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
            '& fieldset': {
                borderColor: palette.borders.primary,
                top: 0,
                '& legend': {
                    display: 'none',
                },
            },
            '&:hover fieldset': {
                borderColor: palette.primaryColors.accent,
            },
            '&.Mui-focused fieldset': {
                borderColor: palette.primaryColors.accent,
                borderWidth: '1px',
            },
        },
        '& .MuiOutlinedInput-input': {
            fontSize: '14px',
            padding: '7px 8px 7px 0',
            color: palette.neutral.primary,
            '&::placeholder': {
                color: palette.neutral.grey4,
                opacity: 1,
            },
        },
        '& .MuiInputAdornment-root': {
            marginRight: '4px',
        },
    };
});
