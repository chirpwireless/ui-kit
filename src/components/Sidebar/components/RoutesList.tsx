import type { FC, MouseEvent } from 'react';
import { useCallback, useMemo } from 'react';

import { Divider, Stack, useTheme } from '@mui/material';

import { DropdownIcon } from '../../../icons';
import type { SidebarItem, SidebarLinkComponent } from '../types';
import * as S from '../style';

interface RoutesListProps {
    item: SidebarItem;
    activePathname?: string;
    isSidebarCollapsed: boolean;
    menuParentIsOpen: Record<string, boolean>;
    linkComponent: SidebarLinkComponent;
    onParentClick: (item: SidebarItem) => void;
    onItemClick: (item: SidebarItem, event: MouseEvent<HTMLAnchorElement>) => void;
}

const ICON_SIZE = 20;
const MENU_ITEM_HEIGHT = 36;
const MENU_ITEM_MARGIN = 4;

const calculateChildrenHeight = (
    children: SidebarItem[] | undefined,
    menuParentIsOpen: Record<string, boolean>,
): number => {
    if (!children?.length) return 0;

    return children.reduce((totalHeight, child) => {
        let height = MENU_ITEM_HEIGHT + MENU_ITEM_MARGIN;

        if (child.children?.length && menuParentIsOpen[child.name]) {
            height += child.children.length * (MENU_ITEM_HEIGHT + MENU_ITEM_MARGIN);
        }

        return totalHeight + height;
    }, 0);
};

const isParent = (item: SidebarItem) => Boolean(item.children?.length) || !item.href;

const matchesPath = (item: SidebarItem, pathname?: string) =>
    Boolean(pathname && item.match && item.match.test(pathname));

export const RoutesList: FC<RoutesListProps> = ({
    item,
    activePathname,
    isSidebarCollapsed,
    menuParentIsOpen,
    linkComponent: LinkComponent,
    onParentClick,
    onItemClick,
}) => {
    const theme = useTheme();

    const getCollapseStyles = useCallback(
        (isOpen: boolean, height: number) => ({
            transition: theme.transitions.create('height', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            height: isOpen ? `${height}px` : 0,
            overflow: 'hidden',
        }),
        [theme.transitions],
    );

    const childRoutesStyles = useMemo(() => {
        const isOpen = Boolean(menuParentIsOpen[item.name]);
        const totalHeight = calculateChildrenHeight(item.children, menuParentIsOpen);

        return getCollapseStyles(isOpen, totalHeight);
    }, [item.children, item.name, menuParentIsOpen, getCollapseStyles]);

    const handleLeafClick = (target: SidebarItem) => (event: MouseEvent<HTMLAnchorElement>) => {
        if (target.disabled) {
            event.preventDefault();

            return;
        }

        target.onClick?.();
        onItemClick(target, event);
    };

    return (
        <>
            <S.ListItem>
                <S.SidebarItemBox isActive={matchesPath(item, activePathname)}>
                    {!isParent(item) && item.href ? (
                        <LinkComponent
                            href={item.href}
                            isExternal={item.isExternal}
                            isActive={matchesPath(item, activePathname)}
                            disabled={item.disabled}
                            onClick={handleLeafClick(item)}
                        >
                            <Stack direction="row" alignItems="center">
                                <Stack width={ICON_SIZE} height={ICON_SIZE} alignItems="center">
                                    {item.icon}
                                </Stack>
                                {!isSidebarCollapsed && <S.LinkText variant="body1">{item.name}</S.LinkText>}
                            </Stack>
                        </LinkComponent>
                    ) : (
                        <S.MenuParentItem onClick={() => onParentClick(item)}>
                            <Stack direction="row">
                                <Stack width={ICON_SIZE} height={ICON_SIZE} alignItems="center">
                                    {item.icon}
                                </Stack>
                                {!isSidebarCollapsed && <S.LinkText variant="body1">{item.name}</S.LinkText>}
                            </Stack>
                            {!isSidebarCollapsed && (
                                <S.DropdownIconWrapper isOpen={Boolean(menuParentIsOpen[item.name])}>
                                    <DropdownIcon />
                                </S.DropdownIconWrapper>
                            )}
                        </S.MenuParentItem>
                    )}
                </S.SidebarItemBox>
            </S.ListItem>

            <Stack sx={childRoutesStyles} direction="column" justifyContent="flex-start" width="100%">
                {item.children?.map((child) => {
                    const childIsFolder = isParent(child);

                    if (!childIsFolder && child.href) {
                        return (
                            <Stack width="100%" key={child.id ?? child.name}>
                                <S.ListChildItem>
                                    <S.SidebarItemBox isActive={matchesPath(child, activePathname)}>
                                        <LinkComponent
                                            href={child.href}
                                            isExternal={child.isExternal}
                                            isActive={matchesPath(child, activePathname)}
                                            disabled={child.disabled}
                                            onClick={handleLeafClick(child)}
                                        >
                                            <Stack direction="row" alignItems="center">
                                                {child.icon && (
                                                    <Stack width={ICON_SIZE} height={ICON_SIZE} alignItems="center">
                                                        {child.icon}
                                                    </Stack>
                                                )}
                                                {!isSidebarCollapsed && (
                                                    <S.LinkText variant="body1">{child.name}</S.LinkText>
                                                )}
                                            </Stack>
                                        </LinkComponent>
                                    </S.SidebarItemBox>
                                </S.ListChildItem>
                                {child.hasDivider ? <Divider sx={{ marginTop: 1 }} /> : null}
                            </Stack>
                        );
                    }

                    return (
                        <Stack width="100%" key={child.id ?? child.name}>
                            <S.ListChildItem>
                                <S.SidebarItemBox>
                                    <S.MenuParentItem onClick={() => onParentClick(child)} sx={{ paddingLeft: 0 }}>
                                        <Stack
                                            direction="row"
                                            alignItems="center"
                                            sx={{ overflow: 'hidden', minWidth: 0 }}
                                        >
                                            <S.DropdownIconWrapper isOpen={Boolean(menuParentIsOpen[child.name])}>
                                                <DropdownIcon />
                                            </S.DropdownIconWrapper>
                                            {!isSidebarCollapsed && (
                                                <S.LinkText variant="body1" sx={{ marginLeft: 0 }} title={child.name}>
                                                    {child.name}
                                                </S.LinkText>
                                            )}
                                        </Stack>
                                    </S.MenuParentItem>
                                </S.SidebarItemBox>
                            </S.ListChildItem>
                            <Stack
                                direction="column"
                                justifyContent="flex-start"
                                width="100%"
                                sx={getCollapseStyles(
                                    Boolean(menuParentIsOpen[child.name]),
                                    (child.children?.length ?? 0) * (MENU_ITEM_HEIGHT + MENU_ITEM_MARGIN),
                                )}
                            >
                                {child.children?.map((grandChild) => (
                                    <S.ListChildItem key={grandChild.id ?? grandChild.name}>
                                        <S.SidebarItemBox isActive={matchesPath(grandChild, activePathname)}>
                                            <LinkComponent
                                                href={grandChild.href ?? '#'}
                                                isExternal={grandChild.isExternal}
                                                isActive={matchesPath(grandChild, activePathname)}
                                                disabled={grandChild.disabled}
                                                onClick={handleLeafClick(grandChild)}
                                            >
                                                <Stack
                                                    direction="row"
                                                    alignItems="center"
                                                    sx={{ paddingLeft: '22px', overflow: 'hidden', minWidth: 0 }}
                                                >
                                                    {grandChild.icon && (
                                                        <Stack width={ICON_SIZE} height={ICON_SIZE} alignItems="center">
                                                            {grandChild.icon}
                                                        </Stack>
                                                    )}
                                                    {!isSidebarCollapsed && (
                                                        <S.LinkText variant="body1" title={grandChild.name}>
                                                            {grandChild.name}
                                                        </S.LinkText>
                                                    )}
                                                </Stack>
                                            </LinkComponent>
                                        </S.SidebarItemBox>
                                    </S.ListChildItem>
                                ))}
                            </Stack>
                        </Stack>
                    );
                })}
            </Stack>

            {item.appendSlot?.(Boolean(menuParentIsOpen[item.name]))}
        </>
    );
};
