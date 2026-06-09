import { Dialog as MuiDialog, dialogClasses, Stack, styled, Typography } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Dialog = styled(MuiDialog)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: 'auto',
        },

        [`& .${dialogClasses.paper}`]: {
            alignItems: 'start',
            minWidth: 'auto',
            maxWidth: '396px',
            overflow: 'hidden',
            margin: '0px',
            padding: '36px 30px 30px',
            borderRadius: '12px',
            backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
            border: `1px solid ${palette.borders.primary}`,
            boxShadow: `0 8px 32px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
        },
    };
});

export const Wrapper = styled(Stack)(() => ({
    flexDirection: 'column',
    gap: '24px',
    justifyContent: 'space-between',
    alignItems: 'start',
}));

export const TextWrapper = styled(Wrapper)(() => ({
    gap: '24px',
}));

type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export const ButtonGroup = styled(Stack)<{ direction?: Direction }>(({ direction = 'row' }) => ({
    flexDirection: direction,
    gap: 12,
    width: '100%',
}));

export const Text = styled(Typography)(({ theme }) => ({
    color: chirpPalette(theme).neutral.primary,
    fontSize: '13px',
    fontWeight: 400,
}));
