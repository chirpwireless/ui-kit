import { default as React } from 'react';
type Props = {
    current: number;
    min: number;
    max: number;
    avg: number;
    postfix: string;
    gradientColors: string;
    currentColor: string;
};
export declare const ProgressBar: React.FC<Props>;
export {};
