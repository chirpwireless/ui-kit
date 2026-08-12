import {
    alpha,
    IconButton as MuiIconButton,
    Menu as MuiMenu,
    MenuItem as MuiMenuItem,
    Stack,
    styled,
} from '@mui/material';

import { CurrentTheme, SIDEBAR_WIDTH } from '../../styles/constants';
import '../../theme/augmentation';
import { chirpPalette } from '../../theme/palette';

// Localized labels (de/es/pt) are much longer than the sidebar, so the menu grows up to this cap
const MENU_MAX_WIDTH = 340;

export const AvatarContainer = styled(Stack)({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    marginTop: 24,
    gap: 8,
});

export const IconButton = styled(MuiIconButton)(({ theme }) => ({
    color: chirpPalette(theme).neutral.primary,
    flexShrink: 0,
    transition: 'all 0.25s',
    padding: 0,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    borderRadius: 0,
    textAlign: 'left',
    whiteSpace: 'normal',
    wordBreak: 'break-all',
    maxWidth: 'calc(100% - 70px)',

    '&:hover': {
        background: 'none',
    },

    '&.notifications': {
        whiteSpace: 'nowrap',
        padding: '0 6px',
        marginRight: 10,
    },
}));

export const AlertsIcon = styled(Stack)({
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 40,
    minWidth: 32,
});

export const Menu = styled(MuiMenu)(({ theme }) => ({
    padding: 0,

    '.MuiList-root': {
        paddingTop: 0,
        paddingBottom: 0,
        backgroundColor:
            theme.palette.mode === CurrentTheme.Dark
                ? chirpPalette(theme).neutral.grey1
                : chirpPalette(theme).neutral.white,

        '.MuiDivider-root': {
            marginTop: 0,
            marginBottom: 0,
        },
    },

    '& .MuiPaper-root': {
        width: 'max-content',
        maxWidth: MENU_MAX_WIDTH,
        minWidth: SIDEBAR_WIDTH,
        left: '0 !important',
        right: 'auto !important',
        borderRadius: 12,
        marginTop: 8,
        backgroundColor:
            theme.palette.mode === CurrentTheme.Dark
                ? chirpPalette(theme).neutral.grey1
                : chirpPalette(theme).neutral.white,
        boxShadow: `0 8px 24px ${chirpPalette(theme).shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
        border: `1px solid ${alpha(
            theme.palette.borders.primary,
            theme.palette.mode === CurrentTheme.Dark ? 0.1 : 0.6,
        )}`,
        backdropFilter: 'blur(10px)',
        backgroundImage: 'none',

        [theme.breakpoints.down('md')]: {
            width: '100% !important',
            maxWidth: '100% !important',
            minWidth: '100% !important',
            left: '0 !important',
            right: '0 !important',
            position: 'fixed',
        },
    },
}));

export const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
    padding: 12,
    border: 'none',
    fontSize: 12,
    lineHeight: '18px',
    color: chirpPalette(theme).neutral.primary,
    cursor: 'pointer',
    minWidth: `calc(${SIDEBAR_WIDTH}px - 2px)`,
    maxWidth: '100%',
    whiteSpace: 'normal',
    overflowWrap: 'anywhere',

    '&:first-of-type': {
        borderTop: 'none',
    },

    '&:hover': {
        backgroundColor:
            theme.palette.mode === CurrentTheme.Dark
                ? chirpPalette(theme).neutral.grey1
                : chirpPalette(theme).neutral.white,
    },
}));

export const UserMenuWrap = styled(Stack)({
    cursor: 'pointer',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
});
