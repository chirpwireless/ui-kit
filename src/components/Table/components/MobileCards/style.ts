import { Stack, styled } from '@mui/material';

import { chirpPalette } from '../../../../theme/palette';

export const CardsList = styled(Stack)(() => ({
    gap: '8px',
    width: '100%',
}));

export const Card = styled(Stack)<{ clickable?: boolean }>(({ theme, clickable }) => {
    const palette = chirpPalette(theme);

    return {
        gap: '8px',
        padding: '12px 16px',
        borderRadius: '12px',
        border: `1px solid ${palette.borders.primary}`,
        backgroundColor: theme.palette.background.paper,
        cursor: clickable ? 'pointer' : 'default',
    };
});

export const CardField = styled(Stack)(() => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: '12px',
}));

export const GroupLabel = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        padding: '8px 4px 0',
        color: palette.neutral.grey5,
    };
});
