import { Skeleton } from '@mui/material';
import { flexRender, Row } from '@tanstack/react-table';
import { Fragment, ReactElement } from 'react';

import { EmptyBlock } from '../../../EmptyBlock';

import { TableColumn } from '../../types';
import * as S from './style';

type Props<TData> = {
    rows: Row<TData>[];
    isLoading?: boolean;
    onRowClick?(row: TData): void;
    renderMobileCard?(row: TData): ReactElement;
    renderEmptyBlock?(): ReactElement;
};

const SKELETON_CARDS_COUNT = 3;

const CardContent = <TData,>({ row }: { row: Row<TData> }) => (
    <>
        {row.getVisibleCells().map((cell) => {
            const column = cell.column as TableColumn<TData>;
            const meta = column.columnDef.meta;

            if (meta?.mobileHidden) return null;

            const label = meta?.mobileLabel ?? column.columnDef.header;

            return (
                <S.CardField key={cell.id}>
                    {label ? <S.FieldLabel>{label}</S.FieldLabel> : null}
                    <S.FieldValue>{flexRender(cell.column.columnDef.cell, cell.getContext())}</S.FieldValue>
                </S.CardField>
            );
        })}
    </>
);

export const MobileCards = <TData,>({
    rows,
    isLoading,
    onRowClick,
    renderMobileCard,
    renderEmptyBlock,
}: Props<TData>) => {
    if (isLoading) {
        return (
            <S.CardsList>
                {Array.from({ length: SKELETON_CARDS_COUNT }, (_, index) => (
                    <Skeleton key={index} variant="rounded" height={96} sx={{ borderRadius: '12px' }} />
                ))}
            </S.CardsList>
        );
    }

    if (rows.length === 0) {
        return renderEmptyBlock ? renderEmptyBlock() : <EmptyBlock />;
    }

    const renderCard = (row: Row<TData>) => (
        <S.Card
            key={`${row.id}_${row.index}`}
            clickable={Boolean(onRowClick)}
            onClick={onRowClick ? () => onRowClick(row.original) : undefined}
        >
            {renderMobileCard ? renderMobileCard(row.original) : <CardContent row={row} />}
        </S.Card>
    );

    return (
        <S.CardsList>
            {rows.map((row) =>
                row.subRows.length ? (
                    <Fragment key={`${row.id}_${row.index}`}>
                        <S.GroupLabel>{row.groupingValue as string}</S.GroupLabel>
                        {row.subRows.map(renderCard)}
                    </Fragment>
                ) : (
                    renderCard(row)
                ),
            )}
        </S.CardsList>
    );
};
