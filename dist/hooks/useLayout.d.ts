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
export declare const useLayout: ({ defaultOpen, defaultCollapsed }?: UseLayoutOptions) => UseLayoutResult;
