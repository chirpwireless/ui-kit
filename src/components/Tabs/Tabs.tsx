import { Stack, SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react';

import * as S from './style';

type Props<T extends string> = {
    items: T[];
    activeTab: T;
    setActiveTab(tab: T): void;
    sx?: SxProps<Theme>;
    tabSx?: SxProps<Theme>;
    variant?: 'fullWidth' | 'standard' | 'scrollable';
    counts?: Partial<Record<T, number>>;
    // i18n-agnostic: the consumer maps a tab key to its rendered label (e.g. via t()).
    // Defaults to rendering the tab key as-is.
    renderLabel?: (tab: T) => ReactNode;
};

export function Tabs<T extends string>({
    items,
    activeTab,
    setActiveTab,
    sx,
    tabSx,
    variant,
    counts,
    renderLabel,
}: Props<T>) {
    return (
        <S.Tabs
            className="tabs"
            value={activeTab}
            onChange={(_, tabName: T) => setActiveTab(tabName)}
            sx={sx}
            variant={variant}
        >
            {items.map((tab) => {
                const count = counts?.[tab];
                const hasCount = count !== undefined && count !== null;
                const text = renderLabel ? renderLabel(tab) : tab;

                const label = hasCount ? (
                    <Stack direction="row" alignItems="center" gap="4px">
                        <Typography variant="caption">{text}</Typography>
                        <S.TabBadge>{count}</S.TabBadge>
                    </Stack>
                ) : (
                    <Typography variant="caption">{text}</Typography>
                );

                return <S.Tab key={tab} label={label} value={tab} sx={tabSx} />;
            })}
        </S.Tabs>
    );
}
