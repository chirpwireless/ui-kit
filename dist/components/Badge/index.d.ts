import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
interface BadgeProps {
    index?: number;
    text: string;
    sx?: SxProps;
    getRef?: (index: number) => React.RefObject<HTMLElement>;
}
export declare const Badge: import('react').ForwardRefExoticComponent<BadgeProps & import('react').RefAttributes<unknown>>;
interface SimpleBadgeProps {
    text: string | ReactNode;
}
export declare const SimpleBadge: ({ text }: SimpleBadgeProps) => import("react/jsx-runtime").JSX.Element;
export {};
