import { styled } from '@mui/material';
import { ToastContainer } from 'react-toastify';

export const Container = styled(ToastContainer)(({ theme }) => ({
    '&&&.Toastify__toast-container': {
        width: 'min(460px, calc(100% - 2rem))',
        padding: 0,
        bottom: '16px',
        right: '32px',

        [theme.breakpoints.down('md')]: {
            right: '16px',
            left: 'unset',
        },

        [theme.breakpoints.down('sm')]: {
            top: 'unset',
            bottom: '16px',
            right: '16px',
            left: '16px',
            width: 'calc(100% - 32px)',
        },
    },
    '.Toastify__toast': {
        padding: 0,
        borderRadius: '8px',
    },
    '.Toastify__toast-body': {
        padding: 0,
    },
}));
