import { CSSProperties, FC } from 'react';
export type StackedLineChartDataType = Record<string, number>;
export interface IStackedChartProps {
    data: StackedLineChartDataType[];
    xAxisData?: string[];
    colors: string[];
    style: CSSProperties;
}
declare const StackedChart: FC<IStackedChartProps>;
export default StackedChart;
