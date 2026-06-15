import { SxProps } from '@mui/material';
import { Row } from '@tanstack/react-table';
import { Props as TableProps } from './Table';
export declare const DEFAULT_ESTIMATE_SIZE = 60;
type Props<TData> = Omit<TableProps<TData>, 'page'> & {
    hasNextPage: boolean;
    estimateSize?: number;
    onBottomReached?(): void;
    rowSx?: (row: Row<TData>) => SxProps | undefined;
};
export declare const TableVirtualizedInfinite: <TData>({ data, columns, sx, isLoading, enableSorting, defaultSorting, expandedRowIndex, hasNextPage, estimateSize, onBottomReached, onRowClick, renderEmptyBlock, renderExpandableBlock, rowSx, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
