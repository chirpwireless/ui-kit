import type { ReactNode } from 'react';

import { IconButton, Stack, styled, type Theme } from '@mui/material';

import { ToggleSidebarIcon } from '../../icons';
import { CurrentTheme, HEADER_HEIGHT } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

const getSolidBackground = (theme: Theme): string =>
    theme.palette.mode === CurrentTheme.Dark ? chirpPalette(theme).neutral.black : chirpPalette(theme).neutral.white;

export interface HeaderProps {
    logo?: ReactNode;
    rightSlot?: ReactNode;
    onMenuOpen?: () => void;
    showMenuButton?: boolean;
    // When true the bar has no background/border — consumer controls the chrome (e.g. wraps in a sticky/scroll container).
    transparent?: boolean;
}

const HeaderRoot = styled('header', {
    shouldForwardProp: (prop) => prop !== 'transparent',
})<{ transparent?: boolean }>(({ theme, transparent }) => ({
    width: '100%',
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    backgroundColor: transparent ? 'transparent' : getSolidBackground(theme),
    borderBottom: transparent ? 'none' : `1px solid ${theme.palette.borders.primary}`,
    color: chirpPalette(theme).neutral.primary,
}));

export const Header = ({ logo, rightSlot, onMenuOpen, showMenuButton = true, transparent }: HeaderProps) => (
    <HeaderRoot transparent={transparent}>
        <Stack direction="row" alignItems="center" gap={2}>
            {showMenuButton && onMenuOpen ? (
                <IconButton onClick={onMenuOpen} size="small" edge="start" color="inherit">
                    <ToggleSidebarIcon />
                </IconButton>
            ) : null}
            {logo}
        </Stack>
        {rightSlot}
    </HeaderRoot>
);
