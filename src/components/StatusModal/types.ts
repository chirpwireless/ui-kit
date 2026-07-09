import { ReactNode } from 'react';

export type StatusModalType = 'accent' | 'success';

export interface StatusModalProps {
    open: boolean;
    title: string;
    primaryButtonText: string;
    onPrimaryAction(): void;
    description?: string;
    type?: StatusModalType;
    /** Overrides the default check-circle icon inside the tinted circle. */
    icon?: ReactNode;
    onClose?(): void;
}
