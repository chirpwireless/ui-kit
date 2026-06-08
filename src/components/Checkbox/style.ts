import { styled } from '@mui/material';

import { chirpPalette } from '../../theme/palette';

export const CheckboxIcon = styled('span')(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        borderRadius: 4,
        width: 18,
        height: 18,
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: palette.borders.secondary,
        'input:hover ~ &': {
            borderColor: palette.primaryColors.accent,
        },
        'input:disabled ~ &': {
            borderColor: palette.borders.secondary,
        },
    };
});

export const CheckboxCheckedIcon = styled(CheckboxIcon)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        backgroundColor: palette.primaryColors.accent,
        borderColor: palette.primaryColors.accent,
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundPosition: 'center',

            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M5.8125 9.5625L7.5 11.4375L12.1875 6.5625' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
            content: '""',
        },
    };
});
