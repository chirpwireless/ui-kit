import { TableColumn } from '../types';
type Props<TData> = {
    columns: TableColumn<TData>[];
};
export declare const SkeletonRows: <TData>({ columns }: Props<TData>) => import("react/jsx-runtime").JSX.Element;
export {};
