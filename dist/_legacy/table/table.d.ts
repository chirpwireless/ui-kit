import { SxProps } from '@mui/material';
import { SortingState } from '@tanstack/react-table';
import { ReactElement } from 'react';
import { TableColumnDef } from './types';
export interface ITableContainerProps<T> {
    data: T[];
    columns: TableColumnDef<T>[];
    sx?: SxProps;
    isLoading?: boolean;
    enableSorting?: boolean;
    defaultSorting?: SortingState;
    expandedRowIndex?: number;
    page?: number;
    onRowClick?(row: T): void;
    onRowDoubleClick?(row: T): void;
    renderEmptyBlock?(): ReactElement;
    renderExpandableBlock?(row: T): ReactElement;
}
export declare const Table: <T>({ data, columns, sx, isLoading, enableSorting, defaultSorting, expandedRowIndex, onRowClick, onRowDoubleClick, renderExpandableBlock, renderEmptyBlock, page, }: ITableContainerProps<T>) => import("react/jsx-runtime").JSX.Element;
