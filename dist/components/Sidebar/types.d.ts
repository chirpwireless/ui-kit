import { ComponentType, MouseEvent, ReactNode } from 'react';
export interface SidebarItem {
    id?: string;
    name: string;
    href?: string;
    icon?: ReactNode;
    match?: RegExp | null;
    isExternal?: boolean;
    disabled?: boolean;
    hasDivider?: boolean;
    onClick?: () => void;
    children?: SidebarItem[];
    defaultExpanded?: boolean;
    /**
     * Extra content rendered right after this top-level item (e.g. a "manage" row).
     * Receives the item's current expanded state. App-specific; kept generic via a render fn.
     */
    appendSlot?: (isExpanded: boolean) => ReactNode;
}
export interface SidebarLinkComponentProps {
    href: string;
    isExternal?: boolean;
    isActive?: boolean;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    children: ReactNode;
    className?: string;
}
export type SidebarLinkComponent = ComponentType<SidebarLinkComponentProps>;
export interface SidebarProps {
    /** Groups of sidebar items. A divider is rendered between groups. */
    groups: SidebarItem[][];
    /** Whether the drawer is open (visible). Controlled. */
    isOpen: boolean;
    /** Whether the sidebar is collapsed (narrow rail). Controlled. */
    isCollapsed: boolean;
    /** Called when the user clicks the collapse/expand toggle. */
    onCollapseToggle: () => void;
    /** Called when a leaf item is clicked. */
    onItemClick?: (item: SidebarItem, event: MouseEvent<HTMLAnchorElement>) => void;
    /** Called when a collapsible parent item is clicked (e.g. to lazily load its children). */
    onParentClick?: (item: SidebarItem) => void;
    /** Active pathname used to highlight matching items via `item.match`. */
    activePathname?: string;
    /** Logo node rendered when the sidebar is expanded. */
    logo?: ReactNode;
    /** Logo node rendered when the sidebar is collapsed. Falls back to `logo`. */
    logoCollapsed?: ReactNode;
    /** Anchor URL for the logo. Defaults to `/`. */
    logoHref?: string;
    /** Footer node — typically a `<UserMenu />`. */
    footerSlot?: ReactNode;
    /** Bottom-of-list block (language selector, theme switch, ...). */
    bottomSlot?: ReactNode;
    /** Optional top block, used on mobile to render a Header above the menu. */
    topSlot?: ReactNode;
    /** Mobile layout. Defaults to detecting via `useBreakpoints` in the consumer. */
    isMobile?: boolean;
    /**
     * Component used to render each menu link. Receives href and a click handler.
     * Defaults to a plain anchor. Pass `Link` from react-router-dom or your own wrapper
     * to enable SPA navigation.
     */
    linkComponent?: SidebarLinkComponent;
}
