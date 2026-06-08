import { Stack, StackProps, styled } from '@mui/material';
import { FC } from 'react';

import { chirpPalette } from '../../theme/palette';

export const GradientCard = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        padding: '16px',
        background:
            palette.framing?.opacityGradient ??
            `linear-gradient(180deg, transparent 0%, ${palette.primaryColors.accentLight} 100%)`,
        border: `1px solid ${palette.borders.primary}`,
        borderRadius: '12px',
        boxShadow: `0 8px 24px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
        textAlign: 'center',
    };
}) as FC<StackProps>;
