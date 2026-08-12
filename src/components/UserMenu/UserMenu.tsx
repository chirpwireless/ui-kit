import { useMemo, useState } from 'react';
import type { MouseEvent } from 'react';

import { Avatar as MuiAvatar, Box, ClickAwayListener, Divider, Stack, Typography, useTheme } from '@mui/material';

import { Checkmark, DropdownIcon, LogoutIcon } from '../../icons';
import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';
import { Avatar } from '../../ui/Avatar';
import * as S from './styles';
import type { UserMenuProps } from './types';

// Organization names are ellipsised, so they must not stretch the menu — its width is set by the item labels
const ORGANIZATION_NAME_MAX_WIDTH = 165;

export const UserMenu = ({
    user,
    isMobile,
    isCollapsed,
    avatarLoader,
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
                                <Stack
                                    direction="row"
                                    sx={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                    }}
                                >
                                    <Avatar
                                        avatar={user.avatar}
                                        userName={user.name}
                                        loader={avatarLoader}
                                        sx={{ width: 32, height: 32 }}
                                    />
                                </Stack>
                            ) : (
                                <>
                                    <S.UserMenuWrap onClick={handleMenuClick}>
                                        <S.IconButton>
                                            <Avatar avatar={user.avatar} userName={user.name} loader={avatarLoader} />
                                        </S.IconButton>
                                        <Stack
                                            direction="column"
                                            sx={{
                                                alignItems: 'flex-start',
                                                justifyContent: 'center',
                                                width: '44px',
                                                flexGrow: 1,
                                                overflow: 'hidden',
                                            }}
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
                                <Stack
                                    direction="row"
                                    sx={{
                                        gap: '8px',
                                        alignItems: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Avatar avatar={user.avatar} userName={user.name} loader={avatarLoader} />
                                    <Typography
                                        color="neutral.primary"
                                        sx={{
                                            fontSize: '16px',
                                            lineHeight: '16px',
                                        }}
                                    >
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
                                <Stack
                                    direction="row"
                                    sx={{
                                        width: '100%',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <S.IconButton onClick={handleMenuClick}>
                                        <Stack
                                            direction="row"
                                            sx={{
                                                gap: '8px',
                                                alignItems: 'center',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <Avatar
                                                sx={{ width: 40, height: 40 }}
                                                avatar={user.avatar}
                                                userName={user.name}
                                                loader={avatarLoader}
                                            />
                                            <Typography
                                                color="neutral.primary"
                                                sx={{
                                                    fontSize: '16px',
                                                    lineHeight: '16px',
                                                }}
                                            >
                                                {user.name}
                                            </Typography>
                                        </Stack>
                                    </S.IconButton>
                                    <Stack
                                        onClick={handleClose}
                                        sx={{
                                            width: 20,
                                            height: 20,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <DropdownIcon />
                                    </Stack>
                                </Stack>
                            </S.MenuItem>

                            {visibleMenuItems.map((item) => (
                                <S.MenuItem key={item.id} onClick={() => handleMenuItemClick(item.onClick)}>
                                    <Stack
                                        direction="row"
                                        sx={{
                                            alignItems: 'center',
                                            gap: 2,
                                        }}
                                    >
                                        {item.icon ? (
                                            <Stack
                                                sx={{
                                                    width: 20,
                                                    height: 20,
                                                    alignItems: 'center',
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {item.icon}
                                            </Stack>
                                        ) : null}
                                        <Typography variant="body1">{item.label}</Typography>
                                    </Stack>
                                </S.MenuItem>
                            ))}

                            {/* MUI Menu clones its children to inject props — pass a flat array, never a Fragment. */}
                            {organizations && organizations.length > 0
                                ? [
                                      <Divider key="org-divider" />,
                                      <S.MenuItem
                                          key="org-label"
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
                                      </S.MenuItem>,
                                      ...organizations.map((org) => {
                                          const isCurrent = currentOrganizationId === org.id;

                                          return (
                                              <S.MenuItem key={org.id} onClick={() => handleSelectOrganization(org.id)}>
                                                  <Stack
                                                      direction="row"
                                                      sx={{
                                                          alignItems: 'center',
                                                          justifyContent: 'space-between',
                                                          width: '100%',
                                                      }}
                                                  >
                                                      <Stack
                                                          direction="row"
                                                          sx={{
                                                              alignItems: 'center',
                                                              gap: 2,
                                                              minWidth: 0,
                                                              flexGrow: 1,
                                                          }}
                                                      >
                                                          <MuiAvatar sx={{ width: 24, height: 24, flexShrink: 0 }}>
                                                              {org.name?.[0] ?? ''}
                                                          </MuiAvatar>
                                                          <Typography
                                                              variant="body1"
                                                              title={org.name}
                                                              sx={{
                                                                  minWidth: 0,
                                                                  maxWidth: ORGANIZATION_NAME_MAX_WIDTH,
                                                                  overflow: 'hidden',
                                                                  textOverflow: 'ellipsis',
                                                                  whiteSpace: 'nowrap',
                                                              }}
                                                          >
                                                              {org.name}
                                                          </Typography>
                                                          {org.badge ? (
                                                              <Box sx={{ flexShrink: 0, display: 'flex' }}>
                                                                  {org.badge}
                                                              </Box>
                                                          ) : null}
                                                      </Stack>
                                                      {isCurrent ? (
                                                          <Stack
                                                              color="primaryColors.accent"
                                                              sx={{
                                                                  width: 24,
                                                                  height: 24,
                                                                  alignItems: 'center',
                                                                  justifyContent: 'center',
                                                                  flexShrink: 0,
                                                              }}
                                                          >
                                                              <Checkmark />
                                                          </Stack>
                                                      ) : null}
                                                  </Stack>
                                              </S.MenuItem>
                                          );
                                      }),
                                  ]
                                : null}

                            <Divider />
                            <S.MenuItem onClick={handleLogout}>
                                <Stack
                                    direction="row"
                                    sx={{
                                        alignItems: 'center',
                                        gap: 2,
                                    }}
                                >
                                    <Stack
                                        sx={{
                                            width: 20,
                                            height: 20,
                                            alignItems: 'center',
                                        }}
                                    >
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
