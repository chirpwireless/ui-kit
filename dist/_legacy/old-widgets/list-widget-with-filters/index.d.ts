import { PropsWithChildren, JSX } from 'react';
import { IBaseWidgetProps } from '../base-widget';
export interface IListWidgetProps<T> extends IBaseWidgetProps {
    data: T[];
    nameKey: keyof T;
    valueKey: keyof T;
    renderFilters?: JSX.Element;
    renderSelectedContent: (item: T) => JSX.Element;
}
export declare const ListWidgetWithFilters: <T>(props: PropsWithChildren<IListWidgetProps<T>>) => import("react/jsx-runtime").JSX.Element;
