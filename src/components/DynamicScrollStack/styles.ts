import { Stack, styled } from '@mui/material';

export const ScrollContainer = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'isScrolling',
})(({ isScrolling }: { isScrolling?: boolean }) => ({
    overflowX: 'hidden',
    overflowY: 'auto',

    '&::-webkit-scrollbar-track': {
        backgroundColor: isScrolling ? 'inherit' : 'transparent !important',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: isScrolling ? 'inherit' : 'transparent !important',
        transition: 'background-color 0.2s',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        backgroundColor: isScrolling ? 'inherit' : 'transparent !important',
    },
}));
