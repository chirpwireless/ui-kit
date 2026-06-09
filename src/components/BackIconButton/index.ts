import { IconButton as MuiIconButton, IconButtonProps, styled } from '@mui/material';
import { FC } from 'react';

import { chirpPalette } from '../../theme/palette';

export const BackIconButton = styled(MuiIconButton)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        position: 'absolute',
        left: '16px',
        top: '16px',
        color: palette.neutral.grey4,
        borderRadius: '8px',

        '&:hover': {
            backgroundColor: palette.primaryColors.accentLight2 ?? palette.primaryColors.accentLight,
            color: palette.neutral.primary,
        },
    };
}) as FC<IconButtonProps>;
