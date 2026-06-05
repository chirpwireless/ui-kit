import { IBaseWidgetProps } from '../base-widget';
export interface IProgressSegment {
    label: string;
    value: number;
    color: string;
}
interface IProgressWidgetProps extends IBaseWidgetProps {
    data: IProgressSegment[];
}
export declare const ProgressWidget: React.FC<React.PropsWithChildren<IProgressWidgetProps>>;
export {};
