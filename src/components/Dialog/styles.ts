import type { FC } from 'react';

import {
    Dialog as MuiDialog,
    dialogClasses,
    IconButton as MuiIconButton,
    type IconButtonProps,
    styled,
} from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

// Annotated as FC<IconButtonProps> — see Dialog.ts note on the vite-plugin-dts gotcha.
export const DialogIconButton = styled(MuiIconButton)(({ theme }) => ({
    position: 'absolute',
    top: '12px',
    right: '12px',
    color: chirpPalette(theme).neutral.primary,

    '&:hover': { backgroundColor: 'transparent' },
})) as FC<IconButtonProps>;

export const DeviceDialog = styled(MuiDialog)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: 'auto',
        },

        [`.${dialogClasses.paper}`]: {
            alignItems: 'center',
            minWidth: '1200px',
            width: '100%',
            maxWidth: '1200px',
            overflow: 'hidden',
            margin: '0px',
            padding: '20px',
            borderRadius: '12px',
            backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
            border: `1px solid ${palette.borders.primary}`,
            boxShadow: `0 8px 32px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
        },

        '& .MuiDialog-container': {
            [theme.breakpoints.down('sm')]: {
                alignItems: 'stretch',
            },
        },

        '& .MuiDialog-paper': {
            [theme.breakpoints.down('sm')]: {
                margin: '0px',
                minWidth: '100%',
                maxHeight: '100vh',
                height: '100vh',
                padding: '40px 16px 16px',
                borderRadius: '0',
                display: 'flex',
                flexDirection: 'column',
            },
        },
    };
});
