import { PropsWithChildren, JSX } from 'react';
import { IBaseWidgetProps } from '../base-widget';
import { DonutChartDataType } from '../../charts/donut-chart/donut-chart';
export interface IDonutWidgetProps extends IBaseWidgetProps {
    data: DonutChartDataType[];
    colors: string[];
    centerText?: string;
    renderSelectedContent: (item: DonutChartDataType) => JSX.Element;
}
export declare const DonutWidget: (props: PropsWithChildren<IDonutWidgetProps>) => import("react/jsx-runtime").JSX.Element;
