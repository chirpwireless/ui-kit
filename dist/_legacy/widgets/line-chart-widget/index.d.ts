import { StackedLineChartDataType } from '../../charts/stacked-chart/stacked-line-chart';
import { IBaseWidgetProps } from '../base-widget';
type TOptionType = {
    id: number;
    label: string;
    color: string;
};
interface ILineChartWidgetProps extends IBaseWidgetProps {
    chartData: StackedLineChartDataType[];
    selectedItems: TOptionType[];
    colors: string[];
    chartStyles?: React.CSSProperties;
    emptyFallbackMsg: string;
    xAxisData?: string[];
}
export declare const LineChartWidget: React.FC<React.PropsWithChildren<ILineChartWidgetProps>>;
export {};
