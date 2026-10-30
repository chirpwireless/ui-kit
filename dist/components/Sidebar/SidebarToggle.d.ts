interface SidebarToggleProps {
    isSidebarHovered: boolean;
    isSidebarCollapsed: boolean;
    onToggle: () => void;
}
export declare const SidebarToggle: ({ isSidebarHovered, isSidebarCollapsed, onToggle }: SidebarToggleProps) => import('react').JSX.Element;
export {};
