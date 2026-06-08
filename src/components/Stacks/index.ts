import type { FC } from 'react';

import { Stack, type StackProps, styled } from '@mui/material';

// Annotated as FC<StackProps> — Stack is an MUI OverridableComponent, so vite-plugin-dts emits a
// broken deep path for exported styled(Stack), collapsing the type to `any` in consumers (which
// breaks the `sx`/`theme` callback typing at call sites). See Button/IconButton for the same fix.
export const StackRow = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'gap',
})(({ theme, gap }) => ({
    flexDirection: 'row',
    gap: gap ? theme.spacing(gap as number) : theme.spacing(2),
    alignItems: 'center',
})) as FC<StackProps>;

export const StackRowJC = styled(StackRow)(() => ({
    justifyContent: 'center',
})) as FC<StackProps>;

export const StackRowJB = styled(StackRow)(() => ({
    justifyContent: 'space-between',
})) as FC<StackProps>;

export const StackColumn = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'gap',
})(({ theme, gap }) => ({
    flexDirection: 'column',
    gap: gap ? theme.spacing(gap as number) : theme.spacing(2),
    alignItems: 'center',
})) as FC<StackProps>;

export const StackColumnS = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'gap',
})(({ theme, gap }) => ({
    flexDirection: 'column',
    gap: gap ? theme.spacing(gap as number) : theme.spacing(2),
    alignItems: 'flex-start',
})) as FC<StackProps>;
