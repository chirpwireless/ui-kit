import { SxProps, Theme } from '@mui/material';
type Props<T> = {
    items: T[];
    activeTab?: string | false;
    setActiveTab(tab: string): void;
    resolvedTitle?: (tab: T, index: number) => string | React.ReactNode;
    resolvedValue?(tab: T): string;
    sx?: SxProps<Theme>;
    variant?: 'fullWidth' | 'standard' | 'scrollable';
    extraContent?: React.ReactNode;
};
export declare const Tabs: <T>({ items, activeTab, setActiveTab, sx, extraContent, variant, resolvedTitle, resolvedValue, }: Props<T>) => import("react/jsx-runtime").JSX.Element;
export {};
