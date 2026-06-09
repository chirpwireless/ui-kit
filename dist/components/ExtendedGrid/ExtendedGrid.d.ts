import { GridProps } from '@mui/material';
import { FC } from 'react';
type GridSize = number | 'auto';
interface ExtendedGridSize {
    xs?: GridSize | null;
    sm?: GridSize | null;
    md?: GridSize | null;
    lg?: GridSize | null;
    xl?: GridSize | null;
    xm?: GridSize | null;
    xxl?: GridSize | null;
}
interface ExtendedGridProps extends Omit<GridProps, 'size'> {
    size?: ExtendedGridSize;
}
export declare const ExtendedGrid: FC<ExtendedGridProps>;
export {};
