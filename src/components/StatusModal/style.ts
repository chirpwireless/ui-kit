import { alpha, Dialog as MuiDialog, dialogClasses, Stack, styled } from '@mui/material';

import { chirpPalette } from '../../theme/palette';

export const Dialog = styled(MuiDialog)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        [`& .${dialogClasses.paper}`]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            width: '320px',
            maxWidth: '320px',
            margin: '0px',
            padding: '24px',
            borderRadius: '12px',
            backgroundColor: palette.neutral.grey1,
            border: `1px solid ${palette.borders.primary}`,
            boxShadow: `0 8px 32px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
        },
    };
});

export const IconCircle = styled(Stack, {
    shouldForwardProp: (prop) => prop !== 'statusColor',
})<{ statusColor: string }>(({ statusColor }) => ({
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    flexShrink: 0,
    alignItems: 'center',
    justifyContent: 'center',
    color: statusColor,
    background: `radial-gradient(circle at 50% 30%, ${alpha(statusColor, 0.2)} 0%, ${alpha(statusColor, 0)} 75%)`,
}));

export const TextWrapper = styled(Stack)(() => ({
    gap: '12px',
    width: '100%',
    textAlign: 'center',
}));

export const ButtonsRow = styled(Stack)(() => ({
    flexDirection: 'row',
    gap: '12px',
    width: '100%',

    '& > *': {
        flex: 1,
    },
}));
