import { Stack, styled } from '@mui/material';

export const MobileWrapper = styled(Stack)(({ theme }) => ({
    width: '100%',
    overflow: 'hidden',
    padding: '4px',

    [theme.breakpoints.down('md')]: {
        height: `auto`,
    },
    [theme.breakpoints.between('md', 'lg')]: {
        height: `auto`,
    },
}));
