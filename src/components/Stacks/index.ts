import type { FC } from 'react';

import { Stack, styled, type StackProps } from '@mui/material';

import { type LayoutProps, layoutStyles, shouldForwardLayoutProp } from '../_layout/layoutProps';

type StackLayoutProps = StackProps & LayoutProps;

export const StackRow = styled(Stack, { shouldForwardProp: shouldForwardLayoutProp })<StackLayoutProps>(
    ({ theme, ...props }) => ({
        flexDirection: 'row',
        alignItems: 'center',
        gap: theme.spacing(2),
        ...layoutStyles(theme, props),
    }),
) as FC<StackLayoutProps>;

export const StackRowJC = styled(StackRow)({ justifyContent: 'center' }) as FC<StackLayoutProps>;

export const StackRowJB = styled(StackRow)({ justifyContent: 'space-between' }) as FC<StackLayoutProps>;

export const StackColumn = styled(Stack, { shouldForwardProp: shouldForwardLayoutProp })<StackLayoutProps>(
    ({ theme, ...props }) => ({
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(2),
        ...layoutStyles(theme, props),
    }),
) as FC<StackLayoutProps>;

export const StackColumnS = styled(Stack, { shouldForwardProp: shouldForwardLayoutProp })<StackLayoutProps>(
    ({ theme, ...props }) => ({
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: theme.spacing(2),
        ...layoutStyles(theme, props),
    }),
) as FC<StackLayoutProps>;
