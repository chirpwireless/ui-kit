import { alpha, Box, Stack, styled } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const SettingsCard = styled(Box)(({ theme }) => ({
    width: '100%',
    border: `1px solid ${chirpPalette(theme).borders.primary}`,
    padding: '40px',
    borderRadius: '12px',
    height: '100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: 'auto',

    [theme.breakpoints.down('lg')]: {
        marginTop: '8px',
        '&.non-scrollable': {
            overflow: 'hidden',
        },
    },

    [theme.breakpoints.down('md')]: {
        padding: '24px 16px',
    },
}));

export const SettingsContainer = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);
    const surface = theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white;

    return {
        background: `linear-gradient(180deg, ${surface} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
        width: '100%',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: `inset 0px 0px 0px 1px ${palette.borders.primary}`,
        border: `1px solid ${palette.borders.primary}`,

        [theme.breakpoints.down('sm')]: {
            padding: '12px',
        },
    };
});
