import { Box, SxProps } from '@mui/material';
import { Row } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useEffect, useMemo, useRef } from 'react';

import { useDebounceCallback } from '../../hooks/use-debounce-callback';

import { Table } from './components/Table';
import { useReactTable } from './hooks/useReactTable';
import { Props as TableProps } from './Table';

export const DEFAULT_ESTIMATE_SIZE = 60;

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

    const { measureElement } = rowVirtualizer;

    const virtualRows = rowVirtualizer.getVirtualItems();
    // Rows out of the DOM still need their room, otherwise the last ones end up below the scroll range
    const renderedSize = virtualRows.length ? virtualRows[virtualRows.length - 1].end - virtualRows[0].start : 0;
    const spacerSize = Math.max(rowVirtualizer.getTotalSize() - renderedSize, 0);

    const rows = useMemo(() => {
        // Rendered rows keep their place in the table flow, so the whole window shares one offset
        const windowOffset = virtualRows[0]?.start ?? 0;

        return virtualRows.map((virtualRow) => {
            const row = allRows[virtualRow.index] as Row<TData>;
            const sxProps = {
                height: `${estimateSize}px`,
                transform: `translateY(${windowOffset}px)`,
            } as SxProps;

            const customRowSx = rowSx?.(row);

            return {
                ...row,
                sx: { ...sxProps, ...(customRowSx || {}) },
                virtualIndex: virtualRow.index,
                measureRef: measureElement,
            };
        });
    }, [virtualRows, allRows, rowSx, estimateSize, measureElement]);

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

    // With no rows the empty block fills the wrapper, and there is nothing there to click
    const isRowClickable = rows.length > 0 && Boolean(onRowClick);

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
                spacerSize={rows.length ? spacerSize : undefined}
                sx={{
                    ...sx,
                    height: rows.length ? 'auto' : '100%',
                    cursor: isRowClickable ? 'pointer' : 'default',
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
