import { FC, ReactNode } from 'react';
interface IColorPickerProps {
    color: string;
    onChange: (value: string) => void;
    label?: ReactNode;
    previousColors?: string[];
    isError?: boolean;
    setError?: (value: boolean) => void;
}
export declare const ColorPicker: FC<IColorPickerProps>;
export {};
