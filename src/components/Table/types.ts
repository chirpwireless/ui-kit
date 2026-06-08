import { ColumnDef, Column, CellContext } from '@tanstack/react-table';
import { ReactNode } from 'react';

export type TableMeta = {
    width?: string;
    isVisible?: boolean;
    isGrouping?: boolean;
    align?: 'left' | 'center' | 'right';
};

// Distribute the override across the ColumnDef union so each variant keeps its
// accessorKey/accessorFn/cell typing while `header` accepts a ReactNode (e.g. label + tooltip)
type WithNodeHeader<T> = T extends unknown ? Omit<T, 'header'> & { header: ReactNode } : never;

export type TableColumnDef<TData> = WithNodeHeader<ColumnDef<TData>> & {
    meta?: TableMeta;
};

export type TableColumn<TData> = Column<TData, unknown> & {
    columnDef: TableColumnDef<TData>;
};

type ExtendedColumnDefBase<TData, TValue> = {
    id: string;
    header: ReactNode | (() => ReactNode);
    meta?: TableMeta;
    enableSorting?: boolean;
    cell?: (props: CellContext<TData, TValue>) => ReactNode;
};

type AccessorKeyDef<TData, TValue = unknown> = ExtendedColumnDefBase<TData, TValue> & {
    accessorKey: keyof TData;
    accessorFn?: never;
};

type AccessorFnDef<TData, TValue> = ExtendedColumnDefBase<TData, TValue> & {
    accessorKey?: never;
    accessorFn: (row: TData) => TValue;
};

export type ExtendedTableColumnDef<TData, TValue = unknown> =
    | AccessorKeyDef<TData, TValue>
    | AccessorFnDef<TData, TValue>;
