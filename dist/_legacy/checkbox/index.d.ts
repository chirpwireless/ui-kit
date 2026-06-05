import { CheckboxProps, FormControlLabelProps } from '@mui/material';
import { FC, ReactNode } from 'react';
import { CustomTypographyVariant } from '../../styles/theme/template';
export type CheckoxVariantType = 'check' | 'visible';
export interface ICheckboxProps extends CheckboxProps {
    label?: ReactNode;
    variant?: CheckoxVariantType;
    labelTypographyVariant?: CustomTypographyVariant;
    formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
}
export declare const Checkbox: FC<ICheckboxProps>;
