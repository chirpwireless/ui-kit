import { CSSProperties, FC } from 'react';
export type VerticalBarsChartDataType = string | number;
export interface IVerticalBarsChartProps {
    data: VerticalBarsChartDataType[];
    style?: CSSProperties;
    color?: string;
    unit?: string;
}
declare const VerticalBarChart: FC<IVerticalBarsChartProps>;
export default VerticalBarChart;
