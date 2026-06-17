import { TableHead as MuiTableHead, TableSortLabel } from '@mui/material';
import { Column, SortingState } from '@tanstack/react-table';
import { ReactNode } from 'react';

import { CaretDownIcon, CaretUpIcon, SortIcon } from '../../../../icons';

import * as S from './style';
import { TableMeta } from '../../types';

type Props<TData> = {
    columns: Column<TData, unknown>[];
    enableSorting: boolean;
    sortingState: SortingState;
};

export const TableHead = <TData,>({ columns, enableSorting, sortingState }: Props<TData>) => {
    return (
        <MuiTableHead>
            <S.Row>
                {columns.map(({ id, columnDef, getCanSort, getToggleSortingHandler }) => {
                    const { meta, maxSize: maxWidth, header } = columnDef;
                    const tableMeta = meta as TableMeta | undefined;
                    const needSorting = enableSorting && getCanSort();
                    const containedSort = sortingState.find((item) => item.id?.toLowerCase() === id?.toLowerCase());
                    let IconComponent = SortIcon;

                    if (containedSort) {
                        IconComponent = containedSort?.desc ? CaretDownIcon : CaretUpIcon;
                    }

                    return (
                        <S.HeadCell
                            key={id}
                            sx={{
                                width: tableMeta?.width,
                                maxWidth,
                                textAlign: tableMeta?.align,
                            }}
                        >
                            {needSorting ? (
                                <TableSortLabel IconComponent={IconComponent} onClick={getToggleSortingHandler()}>
                                    {header as ReactNode}
                                </TableSortLabel>
                            ) : (
                                (header as ReactNode)
                            )}
                        </S.HeadCell>
                    );
                })}
            </S.Row>
        </MuiTableHead>
    );
};
