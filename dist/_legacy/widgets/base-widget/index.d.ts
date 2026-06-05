import { SxProps } from '@mui/material';
export interface IBaseWidgetProps {
    isLoading: boolean;
    mainContainerSx?: SxProps;
    headerSx?: SxProps;
    leftHeaderContentSx?: SxProps;
    rightHeaderContentSx?: SxProps;
    headerSubheaderContainerSx?: SxProps;
    renderLeftHeaderContent?: React.ReactNode;
    renderRightHeaderContent?: React.ReactNode;
    renderMainContent?: React.ReactNode;
    renderSubHeader?: React.ReactNode;
    onContainerClick?: () => void;
}
export declare const BaseWidget: React.FC<IBaseWidgetProps>;
