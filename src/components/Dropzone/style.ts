import { Stack, styled } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const DragBox = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        padding: '24px',
        backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
        borderRadius: '8px',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '168px',
        border: '1px solid',
        borderColor: palette.borders.primary,
        cursor: 'pointer',
        transition: 'all 0.125s',

        '&:hover, &:focus-visible': {
            borderColor: palette.borders.secondary,
        },
    };
});
