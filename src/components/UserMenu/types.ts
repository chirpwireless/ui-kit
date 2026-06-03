import type { ReactNode } from 'react';

export interface UserMenuUser {
    avatar?: string;
    name: string;
    subtitle?: string;
}

export interface UserMenuItem {
    id: string;
    label: string;
    icon?: ReactNode;
    onClick: () => void;
    hidden?: boolean;
}

export interface UserMenuOrganization {
    id: string;
    name: string;
    badge?: ReactNode;
}

export interface UserMenuProps {
    user: UserMenuUser;
    isMobile?: boolean;
    isCollapsed?: boolean;

    /** Top section items: Users, Subscription, Organization Settings, etc. */
    menuItems?: UserMenuItem[];

    /** Optional "My organizations" block. */
    organizations?: UserMenuOrganization[];
    currentOrganizationId?: string;
    onSelectOrganization?: (id: string) => void;
    organizationsLabel?: string;

    /** Notifications bell node — rendered in the avatar row (desktop). */
    notificationsSlot?: ReactNode;

    /** Optional banners rendered above the dropdown anchor (wallet, etc.). */
    bannerSlot?: ReactNode;

    onLogout: () => void;
    logoutLabel?: string;
}
