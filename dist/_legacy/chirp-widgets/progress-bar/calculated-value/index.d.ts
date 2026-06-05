import { default as React } from 'react';
type Props = {
    value: number;
    postfix: string;
    label: 'min' | 'max' | 'avg';
    color: string;
};
export declare const CalculatedValue: React.FC<Props>;
export {};
