import { PropsWithChildren } from 'react';
import { IBaseWidgetProps } from '../base-widget';
export interface IVerticalBarsChartWidgetProps<T> extends IBaseWidgetProps {
    collection: T[];
    valueKey: keyof T;
    nameKey: keyof T;
    unit?: string;
    listLabel?: string;
    chartStyles?: React.CSSProperties;
    maxItems?: number;
}
export declare const VerticalBarsChartWidget: <T>(props: PropsWithChildren<IVerticalBarsChartWidgetProps<T>>) => import("react/jsx-runtime").JSX.Element;
