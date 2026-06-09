import { SxProps } from '@mui/material';
import { FC, PropsWithChildren, ReactNode } from 'react';
interface Props extends PropsWithChildren {
    isOpen: boolean;
    subTitle: string;
    onCancel(): void;
    onConfirm(): void;
    onClose?(): void;
    icon?: ReactNode;
    title: string | ReactNode;
    confirmButtonText?: string;
    cancelButtonText?: string;
    buttonDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    cancelButtonVariant?: 'primary' | 'secondary';
    confirmButtonVariant?: 'primary' | 'secondary';
    isLoading?: boolean;
    sx?: SxProps;
    'data-automationid'?: string;
    confirmAutomationId?: string;
    cancelAutomationId?: string;
}
export declare const ActionConfirmDialog: FC<Props>;
export {};
