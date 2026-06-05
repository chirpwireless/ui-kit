import type { MouseEvent } from 'react';
import { useCallback, useState } from 'react';

import { Stack } from '@mui/material';

import { DefaultLink } from './components/DefaultLink';
import { RoutesList } from './components/RoutesList';
import { SidebarLogo } from './SidebarLogo';
import * as S from './style';
import type { SidebarItem, SidebarLinkComponentProps, SidebarProps } from './types';

const defaultLinkComponent = (props: SidebarLinkComponentProps) => <DefaultLink {...props} />;

export const Sidebar = ({
    groups,
    isOpen,
    isCollapsed,
    onCollapseToggle,
    onItemClick,
    onParentClick,
    activePathname,
    logo,
    logoCollapsed,
    logoHref,
    footerSlot,
    bottomSlot,
    topSlot,
    isMobile,
    linkComponent = defaultLinkComponent,
}: SidebarProps) => {
    const [menuParentIsOpen, setMenuParentIsOpen] = useState<Record<string, boolean>>({});
    const [isSidebarHovered, setIsSidebarHovered] = useState(false);

    const handleParentClick = useCallback(
        (item: SidebarItem) => {
            onParentClick?.(item);

            if (isCollapsed) {
                onCollapseToggle();
            }

            setMenuParentIsOpen((prev) => ({ ...prev, [item.name]: !prev[item.name] }));
        },
        [isCollapsed, onCollapseToggle, onParentClick],
    );

    const handleItemClick = useCallback(
        (item: SidebarItem, event: MouseEvent<HTMLAnchorElement>) => {
            onItemClick?.(item, event);
        },
        [onItemClick],
    );

    const handleToggleCollapsed = useCallback(() => {
        setMenuParentIsOpen({});
        onCollapseToggle();
    }, [onCollapseToggle]);

    return (
        <S.SidebarDrawer
            className="sidebar"
            variant="permanent"
            anchor="left"
            open={isOpen}
            isCollapsed={isCollapsed}
            onMouseEnter={() => setIsSidebarHovered(true)}
            onMouseLeave={() => setIsSidebarHovered(false)}
        >
            {!isMobile ? (
                <SidebarLogo
                    isSidebarCollapsed={isCollapsed}
                    isSidebarHovered={isSidebarHovered}
                    onToggle={handleToggleCollapsed}
                    logo={logo}
                    logoCollapsed={logoCollapsed}
                    logoHref={logoHref}
                />
            ) : (
                topSlot
            )}

            <S.List>
                {groups.map((group, index) => (
                    <Stack width="100%" key={group[0]?.id ?? group[0]?.name ?? `routes-group-${index}`}>
                        {group.map((item) => (
                            <Stack key={item.id ?? item.name} width="100%">
                                <RoutesList
                                    item={item}
                                    activePathname={activePathname}
                                    isSidebarCollapsed={isCollapsed}
                                    menuParentIsOpen={menuParentIsOpen}
                                    linkComponent={linkComponent}
                                    onParentClick={handleParentClick}
                                    onItemClick={handleItemClick}
                                />
                            </Stack>
                        ))}
                        {index === groups.length - 1 && bottomSlot ? (
                            <Stack width="100%" mt="12px" gap={3} alignItems="center">
                                {bottomSlot}
                            </Stack>
                        ) : null}
                        <br />
                    </Stack>
                ))}
            </S.List>

            {footerSlot ? <S.Footer>{footerSlot}</S.Footer> : null}
        </S.SidebarDrawer>
    );
};
