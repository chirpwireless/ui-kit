import { Stack, styled } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Wrapper = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.black : palette.neutral.white,
        borderRadius: '12px',
        padding: '14px 12px 20px 20px',
        height: '124px',
        minWidth: '292px',
        justifyContent: 'space-between',

        [theme.breakpoints.down('sm')]: {
            minWidth: 0,
            width: '100%',
        },
    };
});
