import type { FC } from 'react';

import { Stack, styled, type StackProps } from '@mui/material';

type StackWrapperProps = StackProps & { gap?: number | string };

const resolveGap = (theme: import('@mui/material').Theme, gap?: number | string) =>
    typeof gap === 'number' ? theme.spacing(gap) : (gap ?? theme.spacing(2));

export const StackRow = styled(Stack, { shouldForwardProp: (prop) => prop !== 'gap' })<StackWrapperProps>(
    ({ theme, gap }) => ({ flexDirection: 'row', alignItems: 'center', gap: resolveGap(theme, gap) }),
) as FC<StackWrapperProps>;

export const StackRowJC = styled(StackRow)({ justifyContent: 'center' }) as FC<StackWrapperProps>;

export const StackRowJB = styled(StackRow)({ justifyContent: 'space-between' }) as FC<StackWrapperProps>;

export const StackColumn = styled(Stack, { shouldForwardProp: (prop) => prop !== 'gap' })<StackWrapperProps>(
    ({ theme, gap }) => ({ flexDirection: 'column', alignItems: 'center', gap: resolveGap(theme, gap) }),
) as FC<StackWrapperProps>;

export const StackColumnS = styled(Stack, { shouldForwardProp: (prop) => prop !== 'gap' })<StackWrapperProps>(
    ({ theme, gap }) => ({ flexDirection: 'column', alignItems: 'flex-start', gap: resolveGap(theme, gap) }),
) as FC<StackWrapperProps>;
