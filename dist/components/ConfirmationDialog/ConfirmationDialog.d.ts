import { SxProps } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';
type Props = {
    isOpen: boolean;
    title?: string;
    subTitle?: string;
    icon?: ReactNode;
    disabled?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onConfirm(): void;
    onCancel(): void;
    isLoading?: boolean;
    hideCancelButton?: boolean;
    sx?: SxProps;
} & PropsWithChildren;
export declare const ConfirmationDialog: React.FC<Props>;
export {};
