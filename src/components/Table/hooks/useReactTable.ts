import {
    ColumnDef,
    SortingState,
    getCoreRowModel,
    getGroupedRowModel,
    getSortedRowModel,
    useReactTable as useTable,
} from '@tanstack/react-table';
import { useState } from 'react';

import { TableColumnDef } from '../types';

type Props<TData> = {
    data: TData[];
    columns: TableColumnDef<TData>[];
    enableSorting?: boolean;
    defaultSorting?: SortingState;
};

const getColumnId = <TData>(column: TableColumnDef<TData>) => {
    if ('accessorKey' in column && column.accessorKey) return column.accessorKey;

    // header may now be a ReactNode (e.g. label + tooltip); only a plain string can serve as a column id
    return typeof column.header === 'string' ? column.header : column.id;
};

const getRowId = <TData>(row: TData, index: number) =>
    // @ts-expect-error runtime rows carry id/timestamp keys that the generic TData type cannot express
    'id' in row ? (row.id as string) : 'timestamp' in row ? (row.timestamp as string) : index.toString();

export const useReactTable = <TData>({ data, columns, enableSorting = false, defaultSorting = [] }: Props<TData>) => {
    const [sorting, setSorting] = useState<SortingState>(defaultSorting);

    const table = useTable({
        data,
        // header may be a ReactNode for our tables (rendered directly in TableHead), which is wider than ColumnDef's header
        columns: columns as ColumnDef<TData>[],
        state: {
            sorting,
        },
        initialState: {
            columnVisibility: columns.reduce((acc, col) => {
                const columnId = getColumnId(col);

                return col.meta?.isVisible === false && columnId ? { ...acc, [columnId]: false } : acc;
            }, {}),
            grouping: columns.filter((col) => col.meta?.isGrouping).map((col) => (getColumnId(col) as string) ?? ''),
        },
        enableSorting,
        autoResetPageIndex: false,
        getRowId,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getGroupedRowModel: getGroupedRowModel(),
    });

    return {
        table,
        rows: table.getRowModel().rows,
    };
};
