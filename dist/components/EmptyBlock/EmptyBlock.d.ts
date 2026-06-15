import { SxProps } from '@mui/material';
import { FC, ReactNode } from 'react';
interface EmptyBlockProps {
    title?: string;
    children?: string | ReactNode;
    icon?: ReactNode;
    textColor?: string;
    sx?: SxProps;
}
export declare const EmptyBlock: FC<EmptyBlockProps>;
export {};
