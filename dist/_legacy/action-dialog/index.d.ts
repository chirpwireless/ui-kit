import { default as React } from 'react';
type Props = {
    isOpen: boolean;
    title: string;
    description: string;
    buttonText: string;
    onApply(): void;
    state?: 'success' | 'error';
    subTitleWidth?: string;
};
export declare const ActionDialog: React.FC<Props>;
export {};
