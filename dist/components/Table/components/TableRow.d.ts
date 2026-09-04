import { SxProps } from '@mui/material';
import { Row, Table } from '@tanstack/react-table';
import { ReactElement } from 'react';
type Props<TData> = {
    row: Row<TData>;
    table: Table<TData>;
    sx?: SxProps;
    isExpanded?: boolean;
    disableHover?: boolean;
    virtualIndex?: number;
    measureRef?: (node: HTMLTableRowElement | null) => void;
    onClick?(row: Row<TData>): void;
    renderExpandableBlock?(row: TData): ReactElement;
};
export declare const TableRow: <TData>({ row, table, sx, isExpanded, disableHover, virtualIndex, measureRef, onClick, renderExpandableBlock, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
