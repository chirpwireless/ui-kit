import { useMemo, useState } from 'react';
import type { MouseEvent } from 'react';

import { Avatar as MuiAvatar, Box, ClickAwayListener, Divider, Stack, Typography, useTheme } from '@mui/material';

import { Checkmark, DropdownIcon, LogoutIcon } from '../../icons';
import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';
import { Avatar } from '../../ui/Avatar';
import * as S from './styles';
import type { UserMenuProps } from './types';

export const UserMenu = ({
    user,
    isMobile,
    isCollapsed,
    menuItems = [],
    organizations,
    currentOrganizationId,
    onSelectOrganization,
    organizationsLabel = 'My organizations',
    notificationsSlot,
    bannerSlot,
    onLogout,
    logoutLabel = 'Log out',
}: UserMenuProps) => {
    const theme = useTheme();
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);

    const visibleMenuItems = useMemo(() => menuItems.filter((item) => !item.hidden), [menuItems]);
    const open = Boolean(anchor);

    const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setAnchor(anchor ? null : event.currentTarget);
    };

    const handleClose = () => setAnchor(null);

    const handleClickAway = (event: globalThis.MouseEvent | globalThis.TouchEvent) => {
        const target = event.target as HTMLElement | null;

        if (target?.localName === 'body') return;

        setAnchor(null);
    };

    const handleSelectOrganization = (id: string) => {
        onSelectOrganization?.(id);
        setAnchor(null);
    };

    const handleMenuItemClick = (onClick: () => void) => {
        setAnchor(null);
        onClick();
    };

    const handleLogout = () => {
        setAnchor(null);
        onLogout();
    };

    return (
        <>
            {bannerSlot}

            <ClickAwayListener onClickAway={handleClickAway}>
                <Box>
                    {!isMobile ? (
                        <S.AvatarContainer>
                            {isCollapsed ? (
                                <Stack direction="row" alignItems="center" justifyContent="center" width="100%">
                                    <Avatar avatar={user.avatar} userName={user.name} sx={{ width: 32, height: 32 }} />
                                </Stack>
                            ) : (
                                <>
                                    <S.UserMenuWrap onClick={handleMenuClick}>
                                        <S.IconButton>
                                            <Avatar avatar={user.avatar} userName={user.name} />
                                        </S.IconButton>
                                        <Stack
                                            direction="column"
                                            alignItems="flex-start"
                                            justifyContent="center"
                                            width="44px"
                                            flexGrow={1}
                                            overflow="hidden"
                                        >
                                            <Typography
                                                color="currentColor"
                                                sx={{
                                                    maxWidth: '100%',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap',
                                                }}
                                            >
                                                {user.name}
                                            </Typography>
                                            {user.subtitle ? (
                                                <Typography
                                                    variant="caption"
                                                    color="neutral.grey4"
                                                    sx={{
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap',
                                                        maxWidth: '100%',
                                                    }}
                                                >
                                                    {user.subtitle}
                                                </Typography>
                                            ) : null}
                                        </Stack>
                                    </S.UserMenuWrap>

                                    {notificationsSlot ? (
                                        <S.IconButton className="notifications">
                                            <S.AlertsIcon>{notificationsSlot}</S.AlertsIcon>
                                        </S.IconButton>
                                    ) : null}
                                </>
                            )}
                        </S.AvatarContainer>
                    ) : (
                        <S.AvatarContainer>
                            <S.IconButton onClick={handleMenuClick}>
                                <Stack direction="row" gap="8px" alignItems="center" sx={{ cursor: 'pointer' }}>
                                    <Avatar avatar={user.avatar} userName={user.name} />
                                    <Typography fontSize="16px" lineHeight="16px" color="neutral.primary">
                                        {user.name}
                                    </Typography>
                                </Stack>
                            </S.IconButton>
                            {user.subtitle ? (
                                <Typography variant="caption" color="neutral.grey4">
                                    {user.subtitle}
                                </Typography>
                            ) : null}
                        </S.AvatarContainer>
                    )}

                    {open ? (
                        <S.Menu
                            anchorEl={anchor}
                            open
                            onClose={handleClose}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        >
                            <S.MenuItem>
                                <Stack direction="row" width="100%" justifyContent="space-between" alignItems="center">
                                    <S.IconButton onClick={handleMenuClick}>
                                        <Stack direction="row" gap="8px" alignItems="center" sx={{ cursor: 'pointer' }}>
                                            <Avatar
                                                sx={{ width: 40, height: 40 }}
                                                avatar={user.avatar}
                                                userName={user.name}
                                            />
                                            <Typography fontSize="16px" lineHeight="16px" color="neutral.primary">
                                                {user.name}
                                            </Typography>
                                        </Stack>
                                    </S.IconButton>
                                    <Stack
                                        width={20}
                                        height={20}
                                        alignItems="center"
                                        justifyContent="center"
                                        onClick={handleClose}
                                    >
                                        <DropdownIcon />
                                    </Stack>
                                </Stack>
                            </S.MenuItem>

                            {visibleMenuItems.map((item) => (
                                <S.MenuItem key={item.id} onClick={() => handleMenuItemClick(item.onClick)}>
                                    <Stack direction="row" alignItems="center" gap={2}>
                                        {item.icon ? (
                                            <Stack width={20} height={20} alignItems="center">
                                                {item.icon}
                                            </Stack>
                                        ) : null}
                                        <Typography variant="body1">{item.label}</Typography>
                                    </Stack>
                                </S.MenuItem>
                            ))}

                            {organizations && organizations.length > 0 ? (
                                <>
                                    <Divider />
                                    <S.MenuItem
                                        color="neutral.grey4"
                                        sx={{
                                            cursor: 'default',
                                            '&:hover': {
                                                backgroundColor:
                                                    theme.palette.mode === CurrentTheme.Dark
                                                        ? chirpPalette(theme).neutral.grey1
                                                        : chirpPalette(theme).neutral.white,
                                            },
                                        }}
                                    >
                                        {organizationsLabel}
                                    </S.MenuItem>
                                    {organizations.map((org) => {
                                        const isCurrent = currentOrganizationId === org.id;

                                        return (
                                            <S.MenuItem key={org.id} onClick={() => handleSelectOrganization(org.id)}>
                                                <Stack
                                                    direction="row"
                                                    alignItems="center"
                                                    justifyContent="space-between"
                                                    width="100%"
                                                >
                                                    <Stack direction="row" alignItems="center" gap={2}>
                                                        <MuiAvatar sx={{ width: 24, height: 24 }}>
                                                            {org.name?.[0] ?? ''}
                                                        </MuiAvatar>
                                                        <Typography
                                                            variant="body1"
                                                            title={org.name}
                                                            sx={{
                                                                width: org.badge ? '100px' : '165px',
                                                                overflow: 'hidden',
                                                                textOverflow: 'ellipsis',
                                                                whiteSpace: 'nowrap',
                                                            }}
                                                        >
                                                            {org.name}
                                                        </Typography>
                                                        {org.badge}
                                                    </Stack>
                                                    {isCurrent ? (
                                                        <Stack
                                                            width={24}
                                                            height={24}
                                                            alignItems="center"
                                                            justifyContent="center"
                                                            color="primaryColors.accent"
                                                        >
                                                            <Checkmark />
                                                        </Stack>
                                                    ) : null}
                                                </Stack>
                                            </S.MenuItem>
                                        );
                                    })}
                                </>
                            ) : null}

                            <Divider />
                            <S.MenuItem onClick={handleLogout}>
                                <Stack direction="row" alignItems="center" gap={2}>
                                    <Stack width={20} height={20} alignItems="center">
                                        <LogoutIcon />
                                    </Stack>
                                    <Typography variant="body1">{logoutLabel}</Typography>
                                </Stack>
                            </S.MenuItem>
                        </S.Menu>
                    ) : null}
                </Box>
            </ClickAwayListener>
        </>
    );
};
