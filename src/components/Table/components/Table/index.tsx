import { SxProps, Table as MuiTable, TableBody } from '@mui/material';
import { Row as RowType, Table as TableType } from '@tanstack/react-table';
import { Fragment, ReactElement, useEffect, useMemo, useState } from 'react';

import { EmptyBlock } from '../../../EmptyBlock';

import { TableColumn } from '../../types';
import { SkeletonRows } from '../SkeletonRows';
import { TableHead } from '../TableHead';
import { TableRow } from '../TableRow';
import * as S from './style';

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
    onRowClick?(row: TData): void;
    renderExpandableBlock?(row: TData): ReactElement;
    renderEmptyBlock?(): ReactElement;
    getRowDisableHover?(row: TData): boolean;
    getCanExpand?(row: TData): boolean;
};

export const Table = <TData,>({
    table,
    rows: allRows,
    sx = {},
    page,
    isLoading,
    enableSorting = false,
    expandedRowIndex: defaultExpandedRowIndex,
    onRowClick,
    renderExpandableBlock,
    renderEmptyBlock = () => <EmptyBlock />,
    getRowDisableHover,
    getCanExpand,
}: Props<TData>) => {
    const columns = table.getVisibleFlatColumns() as TableColumn<TData>[];

    const [expandedRowIndex, setExpandedRowIndex] = useState<number | null>(defaultExpandedRowIndex ?? null);

    const rows = useMemo(
        () =>
            allRows.map((row) => ({
                ...row,
                isExpanded: expandedRowIndex === row.index,
                subRows: row.subRows.map((subRow) => ({ ...subRow, isExpanded: expandedRowIndex === subRow.index })),
            })),
        [allRows, expandedRowIndex],
    );

    const handleRowClick = (row: Row<TData>) => {
        onRowClick?.(row.original);

        if (getCanExpand && !getCanExpand(row.original)) return;
        setExpandedRowIndex(expandedRowIndex === row.index ? null : row.index);
    };

    useEffect(() => {
        setExpandedRowIndex(null);
    }, [page]);

    useEffect(() => {
        if (defaultExpandedRowIndex !== undefined) {
            setExpandedRowIndex(defaultExpandedRowIndex);
        }
    }, [defaultExpandedRowIndex]);

    return (
        <S.TableWrapper sx={{ height: '100%', overflowY: 'auto', ...sx }}>
            {rows.length === 0 && isLoading === false && renderEmptyBlock ? (
                renderEmptyBlock()
            ) : (
                <MuiTable stickyHeader>
                    {isLoading ? (
                        <SkeletonRows columns={columns} />
                    ) : (
                        <>
                            <TableHead
                                columns={columns}
                                enableSorting={enableSorting}
                                sortingState={table.getState().sorting}
                            />
                            <TableBody>
                                {rows.map((row) =>
                                    row.subRows.length ? (
                                        <Fragment key={`${row.id}_${row.index}`}>
                                            <S.GroupedRow>
                                                <S.Cell>{row.groupingValue as string}</S.Cell>
                                            </S.GroupedRow>
                                            {row.subRows.map((subRow: Row<TData>) => (
                                                <TableRow
                                                    key={`${subRow.id}_${subRow.index}`}
                                                    row={subRow}
                                                    table={table}
                                                    isExpanded={subRow.isExpanded}
                                                    disableHover={getRowDisableHover?.(subRow.original)}
                                                    onClick={handleRowClick}
                                                    renderExpandableBlock={renderExpandableBlock}
                                                />
                                            ))}
                                        </Fragment>
                                    ) : (
                                        <TableRow
                                            key={`${row.id}_${row.index}`}
                                            sx={row.sx}
                                            row={row}
                                            table={table}
                                            isExpanded={row.isExpanded}
                                            disableHover={getRowDisableHover?.(row.original)}
                                            onClick={handleRowClick}
                                            renderExpandableBlock={renderExpandableBlock}
                                        />
                                    ),
                                )}
                            </TableBody>
                        </>
                    )}
                </MuiTable>
            )}
        </S.TableWrapper>
    );
};
