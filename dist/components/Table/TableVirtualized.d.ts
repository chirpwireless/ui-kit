import { Props as TableProps } from './Table';
type Props<TData> = Omit<TableProps<TData>, 'page'> & {
    hasNextPage: boolean;
    estimateSize?: number;
    onBottomReached?(): void;
};
export declare const TableVirtualized: <TData>({ data, columns, sx, isLoading, enableSorting, defaultSorting, expandedRowIndex, hasNextPage, estimateSize, onBottomReached, onRowClick, renderEmptyBlock, renderExpandableBlock, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
