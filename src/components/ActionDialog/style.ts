import { styled, Dialog as MuiDialog, Stack, IconButton } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Dialog = styled(MuiDialog)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        backdropFilter: 'blur(4px)',

        '.MuiPaper-root': {
            width: '360px',
            minWidth: '360px',
            padding: '40px',
            borderRadius: '12px',
            background: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
            border: `1px solid ${palette.borders.primary}`,
            boxShadow: `0 8px 32px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,

            [theme.breakpoints.down('sm')]: {
                width: '100%',
                minWidth: 'auto',
                margin: '8px',
                padding: '20px',
            },
        },

        '& .MuiDialog-container': {
            [theme.breakpoints.down('sm')]: {
                alignItems: 'flex-end',
            },
        },
    };
});

export const Card = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        alignItems: 'center',
        maxWidth: '360px',
        width: '100%',
        background: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,

        [theme.breakpoints.down('sm')]: {
            margin: 'auto',
        },
    };
});

export const IconWrapper = styled(Stack)(() => ({
    justifyContent: 'center',
    alignItems: 'center',
    width: '72px',
    height: '72px',
    borderRadius: '50%',
}));

export const CloseIconButton = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    top: '12px',
    right: '12px',
    color: chirpPalette(theme).neutral.primary,

    '&:hover': {
        backgroundColor: 'transparent',
    },
}));
