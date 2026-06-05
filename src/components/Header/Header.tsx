import type { ReactNode } from 'react';

import { IconButton, Stack, styled } from '@mui/material';

import { ToggleSidebarIcon } from '../../icons';
import { CurrentTheme, HEADER_HEIGHT } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export interface HeaderProps {
    logo?: ReactNode;
    rightSlot?: ReactNode;
    onMenuOpen?: () => void;
    showMenuButton?: boolean;
}

const HeaderRoot = styled('header')(({ theme }) => ({
    width: '100%',
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 16px',
    backgroundColor:
        theme.palette.mode === CurrentTheme.Dark
            ? chirpPalette(theme).neutral.black
            : chirpPalette(theme).neutral.white,
    borderBottom: `1px solid ${theme.palette.borders.primary}`,
    color: chirpPalette(theme).neutral.primary,
}));

export const Header = ({ logo, rightSlot, onMenuOpen, showMenuButton = true }: HeaderProps) => (
    <HeaderRoot>
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
