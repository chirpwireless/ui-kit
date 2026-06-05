import { ReactNode } from 'react';
type BadgeVariant = 'primary' | 'danger' | 'success';
interface BadgeProps {
    index?: number;
    text: string;
    getRef?: (index: number) => React.RefObject<HTMLElement | null>;
    variant?: BadgeVariant;
}
export declare const Badge: import('react').ForwardRefExoticComponent<BadgeProps & import('react').RefAttributes<unknown>>;
interface SimpleBadgeProps {
    text: string | ReactNode;
    variant?: BadgeVariant;
}
export declare const SimpleBadge: ({ text, variant }: SimpleBadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
