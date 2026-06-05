import type { FC } from 'react';

import { ButtonBaseProps } from '@mui/material';

import * as S from './style';

export type ButtonProps = {
    size: 'small' | 'medium' | 'big';
    variant: 'primary' | 'secondary' | 'tertiary' | 'icon' | 'text' | 'outlined' | 'sidebar' | 'grouped';
    fullWidth?: boolean;
    hasIcon?: boolean;
} & ButtonBaseProps;

export const Button: FC<ButtonProps> = ({ children, ...props }) => (
    <S.Button {...props} disableRipple>
        {children}
    </S.Button>
);
