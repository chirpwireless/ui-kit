import { PropsWithChildren, JSX } from 'react';
import { IBaseWidgetProps } from '../base-widget';
export interface IListWidgetProps<T> extends IBaseWidgetProps {
    data: T[];
    nameKey: keyof T;
    valueKey: keyof T;
    columnNames: string[];
    renderSelectedContent?: (item: T) => JSX.Element;
}
export declare const ListWidget: <T>(props: PropsWithChildren<IListWidgetProps<T>>) => import("react/jsx-runtime").JSX.Element;
