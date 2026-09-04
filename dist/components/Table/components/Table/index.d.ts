import { SxProps } from '@mui/material';
import { Row as RowType, Table as TableType } from '@tanstack/react-table';
import { ReactElement } from 'react';
type Row<TData> = RowType<TData> & {
    isExpanded?: boolean;
    sx?: SxProps;
    virtualIndex?: number;
    measureRef?: (node: HTMLTableRowElement | null) => void;
};
type Props<TData> = {
    table: TableType<TData>;
    rows: Row<TData>[];
    sx?: SxProps;
    page?: number;
    isLoading?: boolean;
    enableSorting?: boolean;
    expandedRowIndex?: number;
    /** Virtualization only: flow space reserved for the rows kept out of the DOM. */
    spacerSize?: number;
    onRowClick?(row: TData): void;
    renderExpandableBlock?(row: TData): ReactElement;
    renderEmptyBlock?(): ReactElement;
    getRowDisableHover?(row: TData): boolean;
    getCanExpand?(row: TData): boolean;
};
export declare const Table: <TData>({ table, rows: allRows, sx, page, isLoading, enableSorting, expandedRowIndex: defaultExpandedRowIndex, spacerSize, onRowClick, renderExpandableBlock, renderEmptyBlock, getRowDisableHover, getCanExpand, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
