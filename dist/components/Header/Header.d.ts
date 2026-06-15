import { ReactNode } from 'react';
export interface HeaderProps {
    logo?: ReactNode;
    rightSlot?: ReactNode;
    onMenuOpen?: () => void;
    showMenuButton?: boolean;
    transparent?: boolean;
}
export declare const Header: ({ logo, rightSlot, onMenuOpen, showMenuButton, transparent }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
