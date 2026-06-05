import { FC } from 'react';
import { ButtonBaseProps } from '@mui/material';
export type ButtonProps = {
    size: 'small' | 'medium' | 'big';
    variant: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'text' | 'outlined' | 'sidebar' | 'grouped';
    fullWidth?: boolean;
    hasIcon?: boolean;
} & ButtonBaseProps;
export declare const Button: FC<ButtonProps>;
