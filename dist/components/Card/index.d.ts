import { SxProps } from '@mui/material';
import { PropsWithChildren } from 'react';
export type CardProps = {
    icon?: React.ReactNode;
    title?: string;
    isClickable?: boolean;
    actions?: React.ReactNode[];
    fullContent?: boolean;
    size?: 'small' | 'large';
    className?: string;
    sx?: SxProps;
    onClick?(): void;
} & PropsWithChildren;
export declare const Card: React.FC<CardProps>;
