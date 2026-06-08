import { Column, SortingState } from '@tanstack/react-table';
type Props<TData> = {
    columns: Column<TData, unknown>[];
    enableSorting: boolean;
    sortingState: SortingState;
};
export declare const TableHead: <TData>({ columns, enableSorting, sortingState }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
