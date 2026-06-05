import { ReactNode } from 'react';
export interface HeaderProps {
    logo?: ReactNode;
    rightSlot?: ReactNode;
    onMenuOpen?: () => void;
    showMenuButton?: boolean;
}
export declare const Header: ({ logo, rightSlot, onMenuOpen, showMenuButton }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
