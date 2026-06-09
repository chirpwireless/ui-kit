import { styled, Drawer, drawerClasses } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Overlay = styled(Drawer)<{ gutters: boolean }>(({ theme, gutters }) => {
    const palette = chirpPalette(theme);

    return {
        [`& .${drawerClasses.paper}`]: {
            background: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
            width: '460px',
            borderLeft: `1px solid ${palette.borders.primary}`,
            boxShadow: `-8px 0 32px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
            padding: gutters ? '24px' : 0,

            [theme.breakpoints.down('lg')]: {
                width: 'auto',
            },

            [theme.breakpoints.down('md')]: {
                width: '100%',
                maxWidth: '100%',
                padding: gutters ? '16px' : 0,
            },
        },
    };
});
