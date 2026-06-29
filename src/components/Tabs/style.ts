import { Box, Tab as MuiTab, Tabs as MuiTabs, styled } from '@mui/material';

import { chirpPalette } from '../../theme/palette';

export const TabBadge = styled('span')(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 16,
        height: 15,
        borderRadius: '3px',
        padding: '1px 4px',
        fontSize: '10px',
        lineHeight: '12px',
        fontWeight: 400,
        letterSpacing: '0.5px',
        backgroundColor: palette.neutral.white,
        color: palette.neutral.grey5,

        '.Mui-selected &': {
            backgroundColor: palette.neutral.white,
            color: palette.primaryColors.accent,
        },
    };
});

export const TabsContainer = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.background.primary,
    borderRadius: '6px',
    gap: '4px',
    width: 'fit-content',
    border: `1px solid ${chirpPalette(theme).borders.primary}`,
    boxSizing: 'border-box',
    height: '36px',
    display: 'flex',
    alignItems: 'center',

    '& .MuiTabs-root': {
        padding: '0 4px',
        minHeight: 'auto',
    },
    '& .MuiTab-root': {
        padding: '4px 12px',
        height: '26px',
        maxHeight: '26px',
    },

    [theme.breakpoints.down('md')]: {
        overflow: 'hidden',
        maxWidth: '100%',

        '& .MuiTab-root': {
            minWidth: '58px',
            width: 'fit-content',
        },
    },
}));

export const Tabs = styled(MuiTabs)(({ theme }) => ({
    minWidth: 'min-content',
    minHeight: 'auto',

    '.MuiTabs-flexContainer': {
        columnGap: '4px',
        justifyContent: 'center',

        [theme.breakpoints.down('sm')]: {
            overflowX: 'auto',
            justifyContent: 'space-evenly',
        },
    },

    '.MuiTabs-indicator': {
        display: 'none',
    },
}));

export const Tab = styled(MuiTab)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        minWidth: 'auto',
        minHeight: 'auto',
        height: '26px',
        maxHeight: '26px',
        padding: '4px 12px',
        borderRadius: '3px',
        fontFamily: theme.typography.fontFamily,
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '0.4px',
        color: palette.neutral.grey5,
        backgroundColor: palette.neutral.grey1,

        '&.Mui-selected': {
            color: palette.neutral.white,
            backgroundColor: palette.primaryColors.accent,
        },
    };
});
