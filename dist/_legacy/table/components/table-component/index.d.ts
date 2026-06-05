import { ReactElement } from 'react';
import { Row as RowType, Table as TableType } from '@tanstack/react-table';
import { SxProps } from '@mui/material';
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
    isVirtualized?: boolean;
    tableSx?: SxProps;
    headerSx?: SxProps;
    columnWidths?: string[];
    onRowClick?(row: TData): void;
    onRowDoubleClick?(row: TData): void;
    renderExpandableBlock?(row: TData): ReactElement;
    renderEmptyBlock?(): ReactElement;
    onScroll?: (e: React.UIEvent<HTMLDivElement, UIEvent>) => void;
    ref?: React.RefObject<HTMLDivElement | null>;
};
export declare const TableComponent: <TData>({ table, rows: allRows, sx, page, isLoading, headerSx, enableSorting, expandedRowIndex: defaultExpandedRowIndex, onRowClick, columnWidths, onRowDoubleClick, tableSx, renderExpandableBlock, renderEmptyBlock, onScroll, ref, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
