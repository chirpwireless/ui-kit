import {
    Box,
    Drawer,
    drawerClasses,
    List as MuiList,
    ListItem as MuiListItem,
    Stack,
    styled,
    Typography,
    type CSSObject,
    type Theme,
} from '@mui/material';

import { CLOSED_SIDEBAR_WIDTH, CurrentTheme, SIDEBAR_COLLAPSED_WIDTH, SIDEBAR_WIDTH } from '../../styles/constants';
import '../../theme/augmentation';
import { chirpPalette } from '../../theme/palette';

interface DrawerProps {
    isOpen?: boolean;
    isCollapsed?: boolean;
}

const openedMixin = (theme: Theme, isCollapsed?: boolean): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    background:
        theme.palette.mode === CurrentTheme.Dark
            ? chirpPalette(theme).neutral.black
            : chirpPalette(theme).neutral.white,
    borderRight: `1px solid ${theme.palette.borders.primary}`,
    border: 'none',
    overflow: 'visible',
    marginTop: 0,
    zIndex: 1000,
    position: 'fixed',
    width: isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,

    [theme.breakpoints.between('md', 'lg')]: {
        width: '100%',
        height: '100%',
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        height: '100%',
    },
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflow: 'hidden',
    width: 0,
    background:
        theme.palette.mode === CurrentTheme.Dark
            ? chirpPalette(theme).neutral.black
            : chirpPalette(theme).neutral.white,
    zIndex: 2000,

    [theme.breakpoints.up('lg')]: {
        overflow: 'visible',
        position: 'fixed',
        width: CLOSED_SIDEBAR_WIDTH,
        zIndex: 100,
    },
});

export const SidebarDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'isCollapsed',
})<DrawerProps>(({ theme, open, isCollapsed }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: isCollapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    position: 'absolute',
    boxSizing: 'border-box',

    [`.${drawerClasses.paper}`]: {
        padding: 0,
    },

    [theme.breakpoints.up('lg')]: {
        [`.${drawerClasses.paper}`]: {
            padding: isCollapsed ? '16px 0px' : '16px 4px',
        },
    },

    ...(open && {
        ...openedMixin(theme, isCollapsed),
        [`& .${drawerClasses.paper}`]: {
            ...openedMixin(theme, isCollapsed),
        },
    }),

    ...(!open && {
        ...closedMixin(theme),
        [`& .${drawerClasses.paper}`]: {
            ...closedMixin(theme),
        },
    }),
}));

export const AppLogo = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    padding: 0,
    height: 60,
});

export const LogoWrap = styled('div')({
    display: 'inline-flex',
    minWidth: 145,
    overflow: 'hidden',
    position: 'relative',
    textDecoration: 'none',
    padding: '0px 10px',
});

export const LogoCollapsedWrap = styled(Stack)(({ theme }) => ({
    height: 60,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'start',
    justifyContent: 'center',
    padding: '10px 0px',
    color: chirpPalette(theme).neutral.primary,
}));

export const SideBarToggledWrap = styled(Box)(({ theme }) => ({
    height: 60,
    padding: '10px 0',
    color: chirpPalette(theme).neutral.grey4,
}));

export const SidebarItemBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive?: boolean }>(({ isActive, theme }) => ({
    color: isActive ? chirpPalette(theme).primaryColors.accent : chirpPalette(theme).neutral.grey4,
    background: isActive ? chirpPalette(theme).primaryColors.accentLight : 'transparent',
    width: '100%',
    padding: 0,
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: 6,

    '&:hover': {
        background: isActive
            ? chirpPalette(theme).primaryColors.accentLight
            : (chirpPalette(theme).primaryColors.accentLight2 ?? chirpPalette(theme).primaryColors.accentLight),
    },
}));

export const List = styled(MuiList)({
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    flex: 1,
    gap: '16px',
    padding: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
});

export const ListItem = styled(MuiListItem)({
    padding: 0,
    '& + &': {
        marginTop: 4,
    },
});

export const ListChildItem = styled(MuiListItem, {
    shouldForwardProp: (prop) => prop !== 'noPadding',
})<{ noPadding?: boolean }>(({ noPadding }) => ({
    padding: 0,
    marginTop: 4,
    '&& > *': {
        paddingLeft: noPadding ? 0 : 8,
    },
}));

interface LinkBoxProps {
    isSidebarCollapsed?: boolean;
    disabled?: boolean;
}

export const LinkBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isSidebarCollapsed' && prop !== 'disabled',
})<LinkBoxProps>(({ disabled, isSidebarCollapsed }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: isSidebarCollapsed ? 'center' : 'space-between',
    borderRadius: 4,
    padding: 6,
    flexGrow: 1,
    minHeight: 32,
    color: 'currentColor',
    textDecoration: 'none',
    opacity: disabled ? 0.7 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    pointerEvents: disabled ? 'none' : 'auto',
}));

export const MenuParentItem = styled(Stack)({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 4,
    padding: 6,
    minHeight: 32,
    flexGrow: 1,
    color: 'currentcolor',
    cursor: 'pointer',
});

export const DropdownIconWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen?: boolean }>(({ isOpen }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.2s ease',
}));

export const LinkText = styled(Typography)({
    marginLeft: 8,
    fontSize: 12,
    lineHeight: '18px',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
});

export const Footer = styled('footer')(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === CurrentTheme.Dark
            ? chirpPalette(theme).neutral.black
            : chirpPalette(theme).neutral.white,
    marginTop: 'auto',
    overflow: 'hidden',
    color: chirpPalette(theme).neutral.primary,
    textAlign: 'center',

    [theme.breakpoints.down('lg')]: {
        padding: '8px 16px',
    },
}));
