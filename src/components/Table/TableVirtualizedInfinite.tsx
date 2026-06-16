import { Box, SxProps } from '@mui/material';
import { Row } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useEffect, useMemo, useRef } from 'react';

import { useDebounceCallback } from '../../hooks/use-debounce-callback';

import { Table } from './components/Table';
import { useReactTable } from './hooks/useReactTable';
import { Props as TableProps } from './Table';

export const DEFAULT_ESTIMATE_SIZE = 60;
const HEADER_SIZE = 50;

type Props<TData> = Omit<TableProps<TData>, 'page'> & {
    hasNextPage: boolean;
    estimateSize?: number;
    onBottomReached?(): void;
    rowSx?: (row: Row<TData>) => SxProps | undefined;
};

export const TableVirtualizedInfinite = <TData,>({
    data,
    columns,
    sx = {},
    isLoading,
    enableSorting,
    defaultSorting,
    expandedRowIndex,
    hasNextPage,
    estimateSize = DEFAULT_ESTIMATE_SIZE,
    onBottomReached,
    onRowClick,
    renderEmptyBlock,
    renderExpandableBlock,
    rowSx,
}: Props<TData>) => {
    const virtualizedRef = useRef<HTMLDivElement>(null);
    const debouncedOnBottomReached = useDebounceCallback(onBottomReached, 300);

    const { table, rows: allRows } = useReactTable({
        data,
        columns,
        enableSorting,
        defaultSorting,
    });

    const rowVirtualizer = useVirtualizer({
        count: allRows.length,
        estimateSize: () => estimateSize,
        getScrollElement: () => virtualizedRef?.current ?? null,
        overscan: 5,
    });

    const virtualRows = rowVirtualizer.getVirtualItems();
    const tableSize = rowVirtualizer.getTotalSize() + HEADER_SIZE * 2 + estimateSize * 2;

    const rows = useMemo(
        () =>
            virtualRows.map((virtualRow, index) => {
                const row = allRows[virtualRow.index] as Row<TData>;
                const sxProps = {
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`,
                } as SxProps;

                const customRowSx = rowSx?.(row);

                return { ...row, sx: { ...sxProps, ...(customRowSx || {}) } };
            }),
        [virtualRows, allRows, rowSx],
    );

    const checkAndLoadMore = useCallback(
        (containerRefElement?: HTMLDivElement | null) => {
            if (!containerRefElement || isLoading || !hasNextPage) return;

            const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
            const shouldLoadMore =
                scrollHeight - scrollTop - clientHeight < clientHeight * 0.3 || scrollHeight <= clientHeight;

            if (shouldLoadMore) {
                debouncedOnBottomReached?.();
            }
        },
        [debouncedOnBottomReached, isLoading, hasNextPage],
    );

    useEffect(() => {
        checkAndLoadMore(virtualizedRef.current);
    }, [checkAndLoadMore]);

    const handleScroll = useCallback(
        (e: React.UIEvent<HTMLDivElement>) => {
            checkAndLoadMore(e.target as HTMLDivElement);
        },
        [checkAndLoadMore],
    );

    return (
        <Box
            ref={virtualizedRef}
            onScroll={handleScroll}
            sx={{
                height: '100%',
                overflow: 'auto',
                position: 'relative',
                borderRadius: '12px',
                width: '100%',
                overflowX: 'hidden',

                '::-webkit-scrollbar': {
                    width: '3px',
                },

                '::-webkit-scrollbar-thumb': {
                    borderRadius: '4px',
                },

                '&:hover': {
                    '::-webkit-scrollbar-thumb': {
                        backgroundColor: 'neutral.grey4',
                    },
                },
            }}
        >
            <Table
                table={table}
                rows={rows}
                sx={{
                    ...sx,
                    height: rows.length ? `${tableSize}px` : '100%',
                    overflowY: 'hidden',
                    cursor: onRowClick ? 'pointer' : 'default',
                }}
                isLoading={isLoading}
                enableSorting={enableSorting}
                expandedRowIndex={expandedRowIndex}
                onRowClick={onRowClick}
                renderEmptyBlock={renderEmptyBlock}
                renderExpandableBlock={renderExpandableBlock}
            />
        </Box>
    );
};
