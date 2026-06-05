import { IBaseWidgetProps } from '../base-widget';
import { SxProps } from '@mui/material';
type TOptionType = {
    id: number;
    label: string;
    color: string;
};
interface IBarChartWidgetProps extends IBaseWidgetProps {
    legendItems: TOptionType[];
    data: {
        categories: string[];
        series: number[][];
    };
    legendContainerSx?: SxProps;
    emptyFallbackMsg: string;
}
export interface ITooltipParams {
    seriesName: string;
    value: number;
    name: string;
    color: string;
}
export declare const BarChartWidget: React.FC<IBarChartWidgetProps>;
export {};
