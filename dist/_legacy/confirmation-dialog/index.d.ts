import { PropsWithChildren, ReactNode } from 'react';
import { SxProps } from '@mui/material';
type Props = {
    isOpen: boolean;
    title: string;
    subTitle?: string;
    icon?: ReactNode;
    isConfirmBtnDisabled?: boolean;
    isCancelBtnDisabled?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onConfirm(): void;
    onCancel(): void;
    contentSx?: SxProps;
    dialogSx?: SxProps;
} & PropsWithChildren;
export declare const ConfirmationDialog: React.FC<Props>;
export {};
