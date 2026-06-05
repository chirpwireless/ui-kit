import { FC } from 'react';
type ValueType = number | string | boolean | null;
type Props = {
    attributeName: string;
    title: string;
    value: ValueType | string[];
    units: string | null;
    date: number;
    switchView?(attributeName: string): void;
};
export declare const SystemWidget: FC<Props>;
export {};
