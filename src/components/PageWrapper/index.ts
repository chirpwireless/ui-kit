import { Box, styled } from '@mui/material';

import { chirpPalette } from '../../theme/palette';

export const PageWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: chirpPalette(theme).neutral.grey1,
    margin: 0,
    padding: '24px',
    borderRadius: '12px',
    border: 'none',
    height: '100%',
    minHeight: 'calc(100vh - 8px)',

    [theme.breakpoints.down('sm')]: {
        borderRadius: 0,
        padding: '16px',
    },

    [theme.breakpoints.down('lg')]: {
        height: `auto`,
        overflow: 'auto',
    },
}));
