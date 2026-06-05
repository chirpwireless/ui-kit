import { SxProps, Theme } from '@mui/material';
import { ReactNode } from 'react';
type Props = {
    label: ReactNode;
    labelId?: string;
    className?: string;
    sx?: SxProps<Theme>;
};
export declare const InputLabel: React.FC<Props>;
export {};
