import { default as React } from 'react';
import { ValueBoundaries } from '../../../../types';
type Props = {
    isLoading: boolean;
    valueFrom?: number;
    valueTo?: number;
    onSave(boundaries: ValueBoundaries): void;
    units: string;
};
export declare const ValueBoundariesForm: React.FC<Props>;
export {};
