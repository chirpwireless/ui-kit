import type { FC } from 'react';

import {
    Dialog as MuiDialog,
    DialogContent as MuiDialogContent,
    dialogClasses,
    dialogContentClasses,
    IconButton as MuiIconButton,
    type IconButtonProps,
    styled,
} from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Dialog = styled(MuiDialog)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        backdropFilter: 'blur(4px)',

        [`& .${dialogClasses.paper}`]: {
            background: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
            borderRadius: '12px',
            border: `1px solid ${palette.borders.primary}`,
            boxShadow: `0 8px 32px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
            padding: '20px',
            minWidth: 'unset',

            [`${theme.breakpoints.down('md')}`]: {
                width: '100%',
                margin: '0 12px',
                maxWidth: 'unset',
                maxHeight: 'unset',
                alignItems: 'center',
            },
        },
    };
});

// TODO - use styles like <Stack minWidth='...' maxWidth='...' gap='...' alignItems='..'> instead
export const DialogContent = styled(MuiDialogContent)(() => ({
    textTransform: 'none',

    [`&.${dialogContentClasses.root}`]: {
        margin: 0,
        padding: 0,
        width: '100%',
        boxSizing: 'border-box',
    },
}));

// Annotated as FC<IconButtonProps> — vite-plugin-dts emits a broken OverridableComponent path
// for exported styled(MuiIconButton), collapsing the consumer type to `any`.
export const CloseButton = styled(MuiIconButton)(() => ({
    marginTop: '-12px',
    marginRight: '-12px',
})) as FC<IconButtonProps>;
