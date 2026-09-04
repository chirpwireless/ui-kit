import { Row } from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { useCallback, useEffect, useMemo, useRef } from 'react';

import { TableComponent } from './components/table-component';
import { useReactTable } from './hooks/use-react-table';
import { ITableContainerProps as TableProps } from './table';

const DEFAULT_ESTIMATE_SIZE = 40;

type Props<TData> = Omit<TableProps<TData>, 'page'> & {
    hasNextPage: boolean;
    estimateSize?: number;
    onBottomReached?(): void;
    columnWidths?: string[];
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
    onRowDoubleClick,
    columnWidths,
}: Props<TData>) => {
    const virtualizedRef = useRef<HTMLDivElement | null>(null);

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
    // The window is offset by marginTop, so only the rows after it still need their room reserved
    const renderedEnd = virtualRows.length ? virtualRows[virtualRows.length - 1].end : 0;
    const spacerSize = Math.max(rowVirtualizer.getTotalSize() - renderedEnd, 0);

    const rows = useMemo(
        () =>
            virtualRows.map((virtualRow) => {
                const row = allRows[virtualRow.index] as Row<TData>;
                const sxProps = {
                    height: `${estimateSize}px`,
                };

                return { ...row, sx: sxProps, virtualIndex: virtualRow.index, measureRef: measureElement };
            }),
        [virtualRows, allRows, estimateSize, measureElement],
    );

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

    useEffect(() => {
        fetchMoreOnBottomReached(virtualizedRef.current);
    }, [fetchMoreOnBottomReached]);

    const tableSx = (() => {
        return { marginTop: `${virtualRows?.[0]?.start}px` };
    })();

    return (
        <TableComponent
            isVirtualized
            table={table}
            columnWidths={columnWidths}
            rows={rows}
            spacerSize={rows.length ? spacerSize : undefined}
            sx={{
                ...sx,
                cursor: onRowClick ? 'pointer' : 'default',
                overflowY: 'initial',
            }}
            isLoading={isLoading}
            enableSorting={enableSorting}
            tableSx={tableSx}
            expandedRowIndex={expandedRowIndex}
            onRowClick={onRowClick}
            onRowDoubleClick={onRowDoubleClick}
            renderEmptyBlock={renderEmptyBlock}
            renderExpandableBlock={renderExpandableBlock}
            onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
            ref={virtualizedRef}
        />
    );
};
