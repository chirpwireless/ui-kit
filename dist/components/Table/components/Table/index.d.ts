import { SxProps } from '@mui/material';
import { Row as RowType, Table as TableType } from '@tanstack/react-table';
import { ReactElement } from 'react';
type Row<TData> = RowType<TData> & {
    isExpanded?: boolean;
    sx?: SxProps;
};
type Props<TData> = {
    table: TableType<TData>;
    rows: Row<TData>[];
    sx?: SxProps;
    page?: number;
    isLoading?: boolean;
    enableSorting?: boolean;
    expandedRowIndex?: number;
    onRowClick?(row: TData): void;
    renderExpandableBlock?(row: TData): ReactElement;
    renderEmptyBlock?(): ReactElement;
    getRowDisableHover?(row: TData): boolean;
    getCanExpand?(row: TData): boolean;
};
export declare const Table: <TData>({ table, rows: allRows, sx, page, isLoading, enableSorting, expandedRowIndex: defaultExpandedRowIndex, onRowClick, renderExpandableBlock, renderEmptyBlock, getRowDisableHover, getCanExpand, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
