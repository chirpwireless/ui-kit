import { SortingState } from '@tanstack/react-table';
import { TableColumnDef } from '../types';
type Props<TData> = {
    data: TData[];
    columns: TableColumnDef<TData>[];
    enableSorting?: boolean;
    defaultSorting?: SortingState;
};
export declare const useReactTable: <TData>({ data, columns, enableSorting, defaultSorting }: Props<TData>) => {
    table: import('@tanstack/react-table').Table<TData>;
    rows: import('@tanstack/react-table').Row<TData>[];
};
export {};
