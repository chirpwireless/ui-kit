import { FC, MouseEvent } from 'react';
import { SidebarItem, SidebarLinkComponent } from '../types';
interface RoutesListProps {
    item: SidebarItem;
    activePathname?: string;
    isSidebarCollapsed: boolean;
    menuParentIsOpen: Record<string, boolean>;
    linkComponent: SidebarLinkComponent;
    onParentClick: (item: SidebarItem) => void;
    onItemClick: (item: SidebarItem, event: MouseEvent<HTMLAnchorElement>) => void;
}
export declare const RoutesList: FC<RoutesListProps>;
export {};
