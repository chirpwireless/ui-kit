import { alpha, Dialog as MuiDialog, dialogClasses, Stack, styled, IconButton, Box } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Dialog = styled(MuiDialog)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            maxWidth: '360px',
            margin: 'auto',
        },

        [`& .${dialogClasses.paper}`]: {
            alignItems: 'center',
            width: '100%',
            minWidth: '360px',
            maxWidth: '450px',
            overflow: 'hidden',
            margin: '0px',
            padding: '20px',
            borderRadius: '12px',
            backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
            border: `1px solid ${palette.borders.primary}`,
            boxShadow: `0 8px 32px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
        },
    };
});

export const CloseIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '12px',
    right: '12px',
    color: chirpPalette(theme).neutral.primary,

    '&:hover': {
        backgroundColor: 'transparent',
    },
}));

export const IconWrapper = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        justifyContent: 'center',
        alignItems: 'center',
        width: '72px',
        height: '72px',
        borderRadius: '50%',
        color: palette.primaryColors.accent,
        backgroundImage: `linear-gradient(180deg,
    ${alpha(palette.primaryColors.accent, 0.2)} 0%,
    ${alpha(palette.primaryColors.accent, 0)} 100%)`,
    };
});

export const Content = styled(Stack)(() => ({
    gap: '24px',
    padding: '24px',
    whiteSpace: 'break-spaces',
    textAlign: 'center',
}));

export const LoaderWrapper = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    position: 'relative',
    left: '-12px',
}));
