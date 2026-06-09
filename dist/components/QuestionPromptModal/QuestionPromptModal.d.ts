import { FC, ReactNode } from 'react';
interface Props {
    isOpen: boolean;
    subTitle: string;
    onCancel(): void;
    onConfirm(value: boolean): void;
    icon?: ReactNode;
    title: string;
    confirmText: string;
    cancelText: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    buttonDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}
export declare const QuestionPromptModal: FC<Props>;
export {};
