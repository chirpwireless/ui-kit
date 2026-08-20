import { Breakpoint, SxProps, useMediaQuery, useTheme } from '@mui/material';
import { SortingState } from '@tanstack/react-table';
import { ReactElement } from 'react';

import { MobileCards } from './components/MobileCards';
import { Table } from './components/Table';
import { useReactTable } from './hooks/useReactTable';
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

// Flag-off path: identical to the pre-mobileCards implementation — no media-query
// subscription is ever created for the existing consumers.
const StandardTable = <TData,>({
    data,
    columns,
    sx = {},
    isLoading,
    enableSorting,
    defaultSorting,
    expandedRowIndex,
    onRowClick,
    renderExpandableBlock,
    renderEmptyBlock,
    getRowDisableHover,
    getCanExpand,
    page,
}: Props<TData>) => {
    const { table, rows } = useReactTable({
        data,
        columns,
        enableSorting,
        defaultSorting,
    });

    // With no rows the empty block fills the wrapper, and there is nothing there to click
    const isRowClickable = rows.length > 0 && Boolean(onRowClick || renderExpandableBlock);

    return (
        <Table
            table={table}
            rows={rows}
            sx={{ ...sx, cursor: isRowClickable ? 'pointer' : 'default' }}
            isLoading={isLoading}
            enableSorting={enableSorting}
            page={page}
            expandedRowIndex={expandedRowIndex}
            onRowClick={onRowClick}
            renderExpandableBlock={renderExpandableBlock}
            renderEmptyBlock={renderEmptyBlock}
            getRowDisableHover={getRowDisableHover}
            getCanExpand={getCanExpand}
        />
    );
};

const MobileCardsTable = <TData,>({
    data,
    columns,
    isLoading,
    enableSorting,
    defaultSorting,
    onRowClick,
    renderEmptyBlock,
    renderMobileCard,
}: Props<TData>) => {
    const { rows } = useReactTable({
        data,
        columns,
        enableSorting,
        defaultSorting,
    });

    return (
        <MobileCards
            rows={rows}
            isLoading={isLoading}
            onRowClick={onRowClick}
            renderMobileCard={renderMobileCard}
            renderEmptyBlock={renderEmptyBlock}
        />
    );
};

const ResponsiveTable = <TData,>(props: Props<TData>) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down(props.mobileBreakpoint ?? 'sm'));

    return isMobile ? <MobileCardsTable {...props} /> : <StandardTable {...props} />;
};

const TableContainer = <TData,>(props: Props<TData>) => {
    if (props.mobileCards) {
        return <ResponsiveTable {...props} />;
    }

    return <StandardTable {...props} />;
};

export { TableContainer as Table };
