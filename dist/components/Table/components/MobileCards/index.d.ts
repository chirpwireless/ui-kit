import { Row } from '@tanstack/react-table';
import { ReactElement } from 'react';
type Props<TData> = {
    rows: Row<TData>[];
    isLoading?: boolean;
    onRowClick?(row: TData): void;
    renderMobileCard?(row: TData): ReactElement;
    renderEmptyBlock?(): ReactElement;
};
export declare const MobileCards: <TData>({ rows, isLoading, onRowClick, renderMobileCard, renderEmptyBlock, }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
