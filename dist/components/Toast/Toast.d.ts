import { FC, ReactNode } from 'react';
export type ToastStatus = 'error' | 'warning' | 'success';
type Props = {
    id: string;
    status: ToastStatus;
    message: ReactNode;
};
export declare const Toast: FC<Props>;
export {};
