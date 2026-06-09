import { Dialog as MuiDialog, dialogClasses, Stack, styled } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Dialog = styled(MuiDialog)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: 'auto',
        },

        [`.${dialogClasses.paper}`]: {
            alignItems: 'center',
            minWidth: '360px',
            width: '100%',
            maxWidth: '360px',
            overflow: 'hidden',
            margin: '0px',
            padding: '36px 20px 30px',
            borderRadius: '12px',
            backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
            border: `1px solid ${palette.borders.primary}`,
            boxShadow: `0 8px 32px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
        },

        '& .MuiDialog-container': {
            [theme.breakpoints.down('sm')]: {
                alignItems: 'flex-end',
            },
        },

        '& .MuiDialog-paper': {
            [theme.breakpoints.down('sm')]: {
                margin: '0px',
                minWidth: '100%',
                padding: '40px 20px',
                borderRadius: '12px 12px 0 0',
            },
        },
    };
});

export const CloseButton = styled('button')(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        position: 'absolute',
        top: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 0,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: palette.neutral.grey4,

        '&:hover': { color: palette.neutral.primary },
    };
});

export const Wrapper = styled(Stack)(() => ({
    position: 'relative',
    flexDirection: 'column',
    gap: '24px',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
}));

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export const ButtonGroup = styled(Stack)<{ direction?: Direction }>(({ theme, direction = 'row' }) => ({
    flexDirection: direction,
    gap: 12,
    width: '100%',

    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column-reverse',
    },
}));
