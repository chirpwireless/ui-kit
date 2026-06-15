import { SxProps, Theme } from '@mui/material';
import { FC, ReactNode } from 'react';
type Props = {
    open: boolean;
    message: string;
    actionComponent: ReactNode;
    sx?: SxProps<Theme>;
};
export declare const Notification: FC<Props>;
export {};
