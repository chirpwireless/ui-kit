import { CSSProperties, FC } from 'react';
type DataType = (string | number)[];
export interface ILineChartProps {
    data: DataType[];
    xAxisName: string;
    yAxisName: string;
    style?: CSSProperties;
    resolvedTooltipTitle: (data: DataType) => string;
    resolvedTooltipSubtitle: (data: DataType) => string;
}
declare const LineChart: FC<ILineChartProps>;
export default LineChart;
