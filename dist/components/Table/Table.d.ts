import { Breakpoint, SxProps } from '@mui/material';
import { SortingState } from '@tanstack/react-table';
import { ReactElement } from 'react';
import { TableColumnDef } from './types';
export type Props<TData> = {
    data: TData[];
    columns: TableColumnDef<TData>[];
    sx?: SxProps;
    isLoading?: boolean;
    enableSorting?: boolean;
    defaultSorting?: SortingState;
    expandedRowIndex?: number;
    onRowClick?(row: TData): void;
    renderEmptyBlock?(): ReactElement;
    renderExpandableBlock?(row: TData): ReactElement;
    getRowDisableHover?(row: TData): boolean;
    getCanExpand?(row: TData): boolean;
    page?: number;
    /**
     * Opt-in: below `mobileBreakpoint` render rows as a stacked card list instead of a table.
     * Cards are built from the column defs (`meta.mobileLabel` / `meta.mobileHidden` tune them),
     * or fully custom via `renderMobileCard`. Sorting UI, expandable rows and cell-targeting `sx`
     * do not apply in cards mode. Without this flag the component behavior is unchanged.
     */
    mobileCards?: boolean;
    /** Breakpoint below which cards replace the table (default `sm`). */
    mobileBreakpoint?: Breakpoint;
    /** Custom card body for mobile-cards mode; receives the row data. */
    renderMobileCard?(row: TData): ReactElement;
};
declare const TableContainer: <TData>(props: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export { TableContainer as Table };
