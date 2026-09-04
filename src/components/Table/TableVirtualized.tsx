import { Box } from '@mui/material';
import { Row } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useEffect, useMemo, useRef } from 'react';

import { Table } from './components/Table';
import { useReactTable } from './hooks/useReactTable';
import { Props as TableProps } from './Table';

const DEFAULT_ESTIMATE_SIZE = 40;

type Props<TData> = Omit<TableProps<TData>, 'page'> & {
    hasNextPage: boolean;
    estimateSize?: number;
    onBottomReached?(): void;
};

export const TableVirtualized = <TData,>({
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
}: Props<TData>) => {
    const virtualizedRef = useRef<HTMLDivElement>(null);

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
            };

            return { ...row, sx: sxProps, virtualIndex: virtualRow.index, measureRef: measureElement };
        });
    }, [virtualRows, allRows, estimateSize, measureElement]);

    const fetchMoreOnBottomReached = useCallback(
        (containerRefElement?: HTMLDivElement | null) => {
            if (containerRefElement) {
                const { scrollHeight, scrollTop, clientHeight } = containerRefElement;

                if (scrollHeight - scrollTop - clientHeight < clientHeight - 100 && !isLoading && hasNextPage) {
                    onBottomReached?.();
                }
            }
        },
        [onBottomReached, isLoading, hasNextPage],
    );

    // With no rows the empty block fills the wrapper, and there is nothing there to click
    const isRowClickable = rows.length > 0 && Boolean(onRowClick);

    useEffect(() => {
        fetchMoreOnBottomReached(virtualizedRef.current);
    }, [fetchMoreOnBottomReached]);

    return (
        <Box
            ref={virtualizedRef}
            onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
            sx={{
                height: '100%',
                overflow: 'auto',
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
