import { ITableContainerProps as TableProps } from './table';
type Props<TData> = Omit<TableProps<TData>, 'page'> & {
    hasNextPage: boolean;
    estimateSize?: number;
    onBottomReached?(): void;
    columnWidths?: string[];
};
export declare const TableVirtualized: <TData>({ data, columns, sx, isLoading, enableSorting, defaultSorting, expandedRowIndex, hasNextPage, estimateSize, onBottomReached, onRowClick, renderEmptyBlock, renderExpandableBlock, onRowDoubleClick, columnWidths, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
