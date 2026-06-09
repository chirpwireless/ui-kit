import { styled, Box, Stack } from '@mui/material';

interface ArrowProps {
    open: boolean;
}

interface BoxWrapperProps extends ArrowProps {
    height: number;
    heightFull: number;
}

export const Mark = styled(Box)(() => ({
    float: 'left',
}));

export const Arrow = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'open',
})<ArrowProps>(({ open }) => ({
    height: 26,
    width: 30,
    alignItems: 'center',
    position: 'absolute',
    right: '0',

    svg: {
        transition: 'transform 0.2s ease',
        transform: open ? 'rotate(-180deg)' : 'rotate(0deg)',
    },
}));

export const BoxWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'open' && prop !== 'heightFull',
})<BoxWrapperProps>(({ open, height, heightFull }) => ({
    transition: 'all 0.3s ease',
    height: open ? heightFull : height,
    overflow: 'hidden',
    paddingRight: '30px',
}));

export const Wrapper = styled(Stack)(() => ({
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    padding: 2,
}));
