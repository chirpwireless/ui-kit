import { Box, styled } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

const MEDIA_SIZE = 112;

export const Banner = styled(Box)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        borderRadius: '12px',
        overflow: 'hidden',
        // PageWrapper is grey1 in both modes, so the card surface takes the opposite end of the neutral scale
        background: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.black : palette.neutral.white,

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    };
});

export const Media = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: `${MEDIA_SIZE}px`,
    height: `${MEDIA_SIZE}px`,
    borderRadius: '8px',
    overflow: 'hidden',
}));
