import { ReactNode } from 'react';
interface SidebarLogoProps {
    isSidebarCollapsed: boolean;
    isSidebarHovered: boolean;
    onToggle: () => void;
    logo?: ReactNode;
    logoCollapsed?: ReactNode;
    logoHref?: string;
}
export declare const SidebarLogo: ({ isSidebarCollapsed, isSidebarHovered, onToggle, logo, logoCollapsed, }: SidebarLogoProps) => import("react/jsx-runtime").JSX.Element;
export {};
