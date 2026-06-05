import { IProgressSegment } from '..';
interface IPercentLabels {
    data: IProgressSegment[];
    total: number;
}
export declare const PercentLabels: React.FC<IPercentLabels>;
export {};
