import type { CSSProperties, FC } from 'react';

import { Stack, type StackProps, styled } from '@mui/material';

type StackLayoutProps = StackProps & {
    gap?: number;
    width?: CSSProperties['width'];
    minWidth?: CSSProperties['minWidth'];
    maxWidth?: CSSProperties['maxWidth'];
    flex?: CSSProperties['flex'];
    overflow?: CSSProperties['overflow'];
};

const LAYOUT_PROPS = ['gap', 'width', 'minWidth', 'maxWidth', 'flex', 'overflow'];
const shouldForwardProp = (prop: PropertyKey) => !LAYOUT_PROPS.includes(prop as string);

export const StackRow = styled(Stack, { shouldForwardProp })<StackLayoutProps>(
    ({ theme, gap, width, minWidth, maxWidth, flex, overflow }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: gap ? theme.spacing(gap) : theme.spacing(2),
        ...(width !== undefined && { width }),
        ...(minWidth !== undefined && { minWidth }),
        ...(maxWidth !== undefined && { maxWidth }),
        ...(flex !== undefined && { flex }),
        ...(overflow !== undefined && { overflow }),
    }),
) as FC<StackLayoutProps>;

export const StackRowJC = styled(StackRow)(() => ({
    justifyContent: 'center',
})) as FC<StackLayoutProps>;

export const StackRowJB = styled(StackRow)(() => ({
    justifyContent: 'space-between',
})) as FC<StackLayoutProps>;

export const StackColumn = styled(Stack, { shouldForwardProp })<StackLayoutProps>(
    ({ theme, gap, width, minWidth, maxWidth, flex, overflow }) => ({
        flexDirection: 'column',
        alignItems: 'center',
        gap: gap ? theme.spacing(gap) : theme.spacing(2),
        ...(width !== undefined && { width }),
        ...(minWidth !== undefined && { minWidth }),
        ...(maxWidth !== undefined && { maxWidth }),
        ...(flex !== undefined && { flex }),
        ...(overflow !== undefined && { overflow }),
    }),
) as FC<StackLayoutProps>;

export const StackColumnS = styled(Stack, { shouldForwardProp })<StackLayoutProps>(
    ({ theme, gap, width, minWidth, maxWidth, flex, overflow }) => ({
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: gap ? theme.spacing(gap) : theme.spacing(2),
        ...(width !== undefined && { width }),
        ...(minWidth !== undefined && { minWidth }),
        ...(maxWidth !== undefined && { maxWidth }),
        ...(flex !== undefined && { flex }),
        ...(overflow !== undefined && { overflow }),
    }),
) as FC<StackLayoutProps>;
