import { SxProps } from '@mui/material';
import { Row, Table, flexRender } from '@tanstack/react-table';
import { ReactElement } from 'react';

import * as S from '../style';

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

export const TableRow = <TData,>({
    row,
    table,
    sx,
    isExpanded = false,
    disableHover = false,
    virtualIndex,
    measureRef,
    onClick,
    renderExpandableBlock,
}: Props<TData>) => {
    return (
        <>
            <S.Row
                ref={measureRef}
                data-index={virtualIndex}
                sx={sx}
                onClick={() => onClick?.(row)}
                disableHover={disableHover}
            >
                {row.getVisibleCells().map((cell) => (
                    <S.Cell
                        key={cell.id}
                        sx={{
                            width: cell.column.getSize(),
                        }}
                    >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </S.Cell>
                ))}
            </S.Row>
            {isExpanded && renderExpandableBlock ? (
                <S.Row sx={{ ...sx, height: 'max-content' }}>
                    <S.Cell colSpan={table.getVisibleFlatColumns().length} sx={{ padding: 0 }}>
                        {renderExpandableBlock(row.original)}
                    </S.Cell>
                </S.Row>
            ) : null}
        </>
    );
};
