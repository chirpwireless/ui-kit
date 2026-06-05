import { SxProps } from '@mui/material';
import { IBaseWidgetProps } from '../base-widget';
interface IListWithIconsWidgetProps extends IBaseWidgetProps {
    rowsData: {
        id: number | string;
        image: string | React.ReactNode;
        renderDescription: React.ReactNode;
        time?: string;
        isAlert?: boolean;
        isUnread?: boolean;
    }[];
    iconSx?: SxProps;
    rowSx?: SxProps;
    dividerSx?: SxProps;
    descriptionContainerSx?: SxProps;
    onRowClick?: (id: number | string) => void;
    emptyFallbackMsg: string;
    isDivider?: boolean;
}
export declare const ListWithIconsWidget: React.FC<React.PropsWithChildren<IListWithIconsWidgetProps>>;
export {};
