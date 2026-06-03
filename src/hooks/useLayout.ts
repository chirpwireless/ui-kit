import { useCallback, useState } from 'react';

export interface UseLayoutOptions {
    defaultOpen?: boolean;
    defaultCollapsed?: boolean;
}

export interface UseLayoutResult {
    isSidebarOpen: boolean;
    isSidebarCollapsed: boolean;
    openSidebar: () => void;
    closeSidebar: () => void;
    toggleSidebar: () => void;
    toggleSidebarCollapsed: () => void;
}

// Uncontrolled layout helper for consumers that do not want to wire up their own context.
// Returns sidebar open/collapsed state plus convenience setters.
export const useLayout = ({ defaultOpen = true, defaultCollapsed = false }: UseLayoutOptions = {}): UseLayoutResult => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(defaultOpen);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(defaultCollapsed);

    const openSidebar = useCallback(() => setIsSidebarOpen(true), []);
    const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);
    const toggleSidebar = useCallback(() => setIsSidebarOpen((prev) => !prev), []);
    const toggleSidebarCollapsed = useCallback(() => setIsSidebarCollapsed((prev) => !prev), []);

    return {
        isSidebarOpen,
        isSidebarCollapsed,
        openSidebar,
        closeSidebar,
        toggleSidebar,
        toggleSidebarCollapsed,
    };
};
