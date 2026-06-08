import { SxProps } from '@mui/material';
import { ReactNode } from 'react';
type Props = {
    isOpen: boolean;
    title: string;
    description?: string;
    nodeDescription?: ReactNode | ReactNode[];
    buttonText: string;
    sx?: SxProps;
    icon?: ReactNode;
    onApply(): void;
    onClose?(): void;
    isLoading?: boolean;
};
export declare const ActionDialog: React.FC<Props>;
export {};
