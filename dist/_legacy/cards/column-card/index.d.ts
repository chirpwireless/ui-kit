import { SxProps } from '@mui/material';
interface IColumnData {
    title: string;
    data: string[];
}
interface IColumnCardProps {
    containerSx?: SxProps;
    headerSx?: SxProps;
    contentSx?: SxProps;
    title: string;
    columns: IColumnData[];
    tooltipColumnIndex?: number;
}
export declare const ColumnCard: React.FC<IColumnCardProps>;
export {};
