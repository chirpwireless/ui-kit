import type { FC } from 'react';

import { Box, type BoxProps, styled } from '@mui/material';

// Layout wrappers built on Box (not Stack). MUI v9 dropped system props from Stack but kept them on
// Box, so consumers can pass gap/width/alignItems/justifyContent/p/m/position/... directly. These
// wrappers never used Stack's spacing/divider (gap is plain CSS gap), so Box + explicit flex is
// behaviourally identical to the old Stack version and needs no per-prop allowlist.
export const StackRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(2),
})) as FC<BoxProps>;

export const StackRowJC = styled(StackRow)({
    justifyContent: 'center',
}) as FC<BoxProps>;

export const StackRowJB = styled(StackRow)({
    justifyContent: 'space-between',
}) as FC<BoxProps>;

export const StackColumn = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2),
})) as FC<BoxProps>;

export const StackColumnS = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: theme.spacing(2),
})) as FC<BoxProps>;
