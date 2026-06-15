import { MouseEvent, ReactNode } from 'react';
interface DefaultLinkProps {
    href: string;
    isExternal?: boolean;
    isActive?: boolean;
    isSidebarCollapsed?: boolean;
    disabled?: boolean;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    children: ReactNode;
    className?: string;
}
export declare const DefaultLink: ({ href, isExternal, disabled, isSidebarCollapsed, onClick, children, className, }: DefaultLinkProps) => import("react/jsx-runtime").JSX.Element;
export {};
