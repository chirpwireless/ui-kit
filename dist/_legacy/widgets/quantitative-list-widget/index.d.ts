import { SxProps } from '@mui/material';
import { IBaseWidgetProps } from '../base-widget';
interface IListItem {
    value: number;
    status: string;
    color: string;
    label: string;
}
interface IQuantitativeListWidgetProps extends IBaseWidgetProps {
    data: IListItem[];
    listContainerSx?: SxProps;
    listItemSx?: SxProps;
    onItemClick?: (item: string) => void;
}
export declare const QuantitativeListWidget: React.FC<React.PropsWithChildren<IQuantitativeListWidgetProps>>;
export {};
