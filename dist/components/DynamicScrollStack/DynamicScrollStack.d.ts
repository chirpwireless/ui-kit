import { SxProps } from '@mui/material';
import { ReactNode, RefObject } from 'react';
interface DynamicScrollStackProps {
    children: ReactNode;
    sx?: SxProps;
    onScroll?(): void;
    scrollRef?: RefObject<HTMLDivElement | null>;
}
export declare const DynamicScrollStack: ({ children, sx, onScroll, scrollRef }: DynamicScrollStackProps) => import("react/jsx-runtime").JSX.Element;
export {};
