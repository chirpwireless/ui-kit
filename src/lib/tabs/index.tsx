import { SxProps, Theme } from '@mui/material';

import * as S from './style';

type Props<T> = {
    items: T[];
    activeTab?: string | false;
    setActiveTab(tab: string): void;
    resolvedTitle?(tab: T): string;
    resolvedValue?(tab: T): string;
    sx?: SxProps<Theme>;
    variant?: 'fullWidth' | 'standard' | 'scrollable';
};

export const Tabs = <T,>({
    items,
    activeTab,
    setActiveTab,
    sx,
    variant,
    resolvedTitle = (tab) => tab as string,
    resolvedValue = (tab) => tab as string,
}: Props<T>) => {
    return (
        <S.Tabs
            className="tabs"
            value={activeTab}
            onChange={(_, tabName: string) => setActiveTab(tabName)}
            sx={sx}
            variant={variant}
        >
            {items.map((tab, index) => (
                <S.Tab key={`${resolvedTitle(tab)}-${index}}`} label={resolvedTitle(tab)} value={resolvedValue(tab)} />
            ))}
        </S.Tabs>
    );
};
