import { Box, styled } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Badge = styled(Box)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        borderRadius: '12px',
        padding: '4px 12px',
        background: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
        border: `1px solid ${palette.borders.primary}`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
        width: 'min-content',
        color: palette.neutral.primary,
    };
});

export const SimpleBadge = styled(Box)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        borderRadius: '12px',
        padding: '4px 12px',
        background: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
        border: `1px solid ${palette.borders.primary}`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
        width: 'min-content',
        color: palette.neutral.primary,
        float: 'left',
        margin: '2px',
    };
});
