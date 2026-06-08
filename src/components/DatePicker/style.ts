import { Stack, styled } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Trigger = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '36px',
        padding: '8px 16px',
        marginTop: '16px',
        backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
        border: `1px solid ${palette.borders.primary}`,
        borderRadius: '8px',
        cursor: 'pointer',
        boxSizing: 'border-box',

        '&:hover': {
            borderColor: palette.primaryColors.accent,
        },
    };
});
