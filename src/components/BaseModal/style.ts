import { Box, Dialog as MuiDialog, IconButton, Stack, styled } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const StyledDialog = styled(MuiDialog, {
    shouldForwardProp: (prop) => prop !== 'customWidth',
})<{ customWidth?: string | number }>(({ theme, customWidth }) => {
    const palette = chirpPalette(theme);

    return {
        '& .MuiDialog-container': {
            [theme.breakpoints.down('sm')]: {
                alignItems: 'flex-end',
            },
        },

        '& .MuiDialog-paper': {
            minWidth: customWidth,
            maxWidth: customWidth,
            borderRadius: '12px',
            backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.black : palette.neutral.white,
            border: `none`,
            boxShadow: `0 8px 32px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,

            [theme.breakpoints.down('md')]: {
                margin: '0px',
                minWidth: '100%',
                maxHeight: '100dvh',
                overflowY: 'auto',
                padding: '40px 20px',
                borderRadius: '12px 12px 0 0',
            },
        },
    };
});

export const Wrapper = styled(Box)(() => ({
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    justifyContent: 'space-between',
}));

export const Title = styled(Stack)(() => ({
    textAlign: 'center',
    gap: 4,
}));

export const Action = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '12px',

    '& > button': {
        width: '100%',
    },

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
    },
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

export const BackIconButton = styled(CloseIconButton)(() => ({
    right: 'unset',
    left: '12px',
}));
