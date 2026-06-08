import { DialogProps } from '@mui/material';
import { ReactNode } from 'react';

export interface BaseModalProps extends Omit<DialogProps, 'title'> {
    title: string;
    subtitle?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    onPrimaryAction?: () => void;
    onSecondaryAction?: () => void;
    children?: ReactNode;
    customMaxWidth?: string | number;
    disabledPrimaryButton?: boolean;
    isLoading?: boolean;
    activeStep?: number;
    steps?: number[];
    onClose?: () => void;
    onBack?: () => void;
}
