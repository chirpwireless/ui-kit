import { Stack, styled } from '@mui/material';

export const StackRow = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'gap',
})(({ theme, gap }) => ({
    flexDirection: 'row',
    gap: gap ? theme.spacing(gap as number) : theme.spacing(2),
    alignItems: 'center',
}));

export const StackRowJC = styled(StackRow)(() => ({
    justifyContent: 'center',
}));

export const StackRowJB = styled(StackRow)(() => ({
    justifyContent: 'space-between',
}));

export const StackColumn = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'gap',
})(({ theme, gap }) => ({
    flexDirection: 'column',
    gap: gap ? theme.spacing(gap as number) : theme.spacing(2),
    alignItems: 'center',
}));

export const StackColumnS = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'gap',
})(({ theme, gap }) => ({
    flexDirection: 'column',
    gap: gap ? theme.spacing(gap as number) : theme.spacing(2),
    alignItems: 'flex-start',
}));
