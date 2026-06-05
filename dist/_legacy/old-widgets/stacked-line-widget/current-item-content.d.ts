import { PropsWithChildren } from 'react';
import { StackedLineChartDataType } from '../../charts/stacked-chart/stacked-line-chart';
export interface ICurrentItemContentProps {
    itemName: string;
    chartStyles?: React.CSSProperties;
    data: StackedLineChartDataType[];
    color: string;
}
export declare const CurrentItemContent: (props: PropsWithChildren<ICurrentItemContentProps>) => import("react/jsx-runtime").JSX.Element;
