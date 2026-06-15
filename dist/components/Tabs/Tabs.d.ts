import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
type Props<T extends string> = {
    items: T[];
    activeTab: T;
    setActiveTab(tab: T): void;
    sx?: SxProps<Theme>;
    tabSx?: SxProps<Theme>;
    variant?: 'fullWidth' | 'standard' | 'scrollable';
    counts?: Partial<Record<T, number>>;
    renderLabel?: (tab: T) => ReactNode;
};
export declare function Tabs<T extends string>({ items, activeTab, setActiveTab, sx, tabSx, variant, counts, renderLabel, }: Props<T>): import("react/jsx-runtime").JSX.Element;
export {};
