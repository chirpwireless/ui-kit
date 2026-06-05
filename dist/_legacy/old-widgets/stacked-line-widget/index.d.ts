import { PropsWithChildren } from 'react';
import { IBaseWidgetProps } from '../base-widget';
type OptionType = {
    value: number;
    label: string;
};
export interface IStackedLineChartWidgetProps<T> extends IBaseWidgetProps {
    collection: T[];
    dataKey: keyof T;
    idKey: keyof T;
    chartStyles?: React.CSSProperties;
    selectOptions: OptionType[];
    maxItems?: number;
    colors: string[];
}
export declare const StackedLineChartWidget: <T>(props: PropsWithChildren<IStackedLineChartWidgetProps<T>>) => import("react/jsx-runtime").JSX.Element;
export {};
