import { SxProps } from '@mui/material';
import { SortingState } from '@tanstack/react-table';
import { TableColumn } from '../../types';
type Props<TData> = {
    columns: TableColumn<TData>[];
    enableSorting: boolean;
    sortingState: SortingState;
    headerSx?: SxProps;
};
export declare const TableHead: <TData>({ columns, enableSorting, sortingState, headerSx }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
