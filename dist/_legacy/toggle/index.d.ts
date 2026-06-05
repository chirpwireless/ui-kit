import { ChangeEvent } from 'react';
type Props = {
    name: string;
    label?: string;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export declare const Toggle: ({ name, label, checked, onChange }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
