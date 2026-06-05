import { FC } from 'react';
export type DonutChartDataType = {
    name: string;
    value: number;
};
export interface IDonutChartProps {
    data: DonutChartDataType[];
    colors: string[];
    centerText?: React.ReactNode;
}
declare const DonutChart: FC<IDonutChartProps>;
export default DonutChart;
