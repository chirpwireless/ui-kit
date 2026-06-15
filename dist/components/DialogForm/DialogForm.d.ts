import * as React from 'react';
export interface DialogFormProps {
    children: React.ReactNode | React.ReactNode[];
    cancelText: string;
    onCancel(): void;
    onSubmit(): void;
    isLoading?: boolean;
    title: string;
    submitText: string;
    subtitle?: string;
    maxWidth?: string;
}
export declare const DialogForm: ({ cancelText, children, onCancel, onSubmit, isLoading, title, subtitle, submitText, maxWidth, }: DialogFormProps) => import("react/jsx-runtime").JSX.Element;
