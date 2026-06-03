import { Box, styled } from '@mui/material';

import { CLOSED_SIDEBAR_WIDTH, CurrentTheme, SIDEBAR_COLLAPSED_WIDTH, SIDEBAR_WIDTH } from '../../styles/constants';
import '../../theme/augmentation';

interface AppContainerProps {
    isOpen?: boolean;
    isSidebarCollapsed?: boolean;
}

export const AppContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isOpen' && prop !== 'isSidebarCollapsed',
})<AppContainerProps>(({ theme, isOpen, isSidebarCollapsed }) => ({
    backgroundColor:
        theme.palette.mode === CurrentTheme.Dark ? theme.palette.neutral.black : theme.palette.neutral.white,
    display: 'flex',
    flexFlow: 'row nowrap',
    minHeight: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: '100%',
    flexGrow: 1,
    padding: 4,

    [theme.breakpoints.between('md', 'lg')]: {
        overflow: isOpen ? 'hidden' : 'auto',
        padding: 0,
    },

    [theme.breakpoints.up('lg')]: {
        marginLeft: isSidebarCollapsed ? SIDEBAR_COLLAPSED_WIDTH : CLOSED_SIDEBAR_WIDTH,
        width: `calc(100% - ${isSidebarCollapsed ? SIDEBAR_COLLAPSED_WIDTH : CLOSED_SIDEBAR_WIDTH}px)`,
    },

    [theme.breakpoints.down('md')]: {
        overflow: isOpen ? 'hidden' : 'auto',
        padding: 0,
    },

    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
    },

    ...(isOpen && {
        [theme.breakpoints.up('md')]: {
            marginLeft: isSidebarCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
            width: `calc(100% - ${isSidebarCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
    }),
}));

export const LayoutRoot = styled(Box)({
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
});
