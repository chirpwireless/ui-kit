import { ReactNode } from 'react';
export type StatusModalType = 'accent' | 'success' | 'alert';
export interface StatusModalProps {
    open: boolean;
    title: string;
    primaryButtonText: string;
    onPrimaryAction(): void;
    description?: string;
    type?: StatusModalType;
    /** Overrides the default check-circle icon inside the tinted circle. */
    icon?: ReactNode;
    /** When provided together with onSecondaryAction, renders a secondary button before the primary one. */
    secondaryButtonText?: string;
    onSecondaryAction?(): void;
    onClose?(): void;
}
