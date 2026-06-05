import { ReactNode } from 'react';
export interface BaseLayoutProps {
    sidebar: ReactNode;
    header?: ReactNode;
    children?: ReactNode;
    isSidebarOpen: boolean;
    isSidebarCollapsed: boolean;
    toastContainer?: ReactNode;
    overlaySlot?: ReactNode;
}
export declare const BaseLayout: ({ sidebar, header, children, isSidebarOpen, isSidebarCollapsed, toastContainer, overlaySlot, }: BaseLayoutProps) => import("react/jsx-runtime").JSX.Element;
