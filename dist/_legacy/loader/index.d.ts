import { TLoaderSize } from './types';
export interface ILoaderProps {
    text?: string;
    size?: TLoaderSize;
    color?: string;
}
export declare const Loader: React.FC<ILoaderProps>;
