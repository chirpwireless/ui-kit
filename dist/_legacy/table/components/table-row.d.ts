import { SxProps } from '@mui/material';
import { Row, Table } from '@tanstack/react-table';
import { ReactElement } from 'react';
import { TableColumn } from '../types';
type Props<TData> = {
    row: Row<TData>;
    table: Table<TData>;
    columns?: TableColumn<TData>[];
    sx?: SxProps;
    isExpanded?: boolean;
    onClick?(row: Row<TData>): void;
    onDoubleClick?(row: Row<TData>): void;
    renderExpandableBlock?(row: TData): ReactElement;
};
export declare const TableRow: <TData>({ row, table, sx, isExpanded, onClick, onDoubleClick, renderExpandableBlock, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
