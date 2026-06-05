import { FC, ReactNode } from 'react';
import { FormControlLabelProps, RadioProps } from '@mui/material';
import { CustomTypographyVariant } from '../../styles/theme/template';
export type RadioVariantType = 'check' | 'visible';
export interface IRadioProps extends RadioProps {
    label?: ReactNode;
    variant?: RadioVariantType;
    labelTypographyVariant?: CustomTypographyVariant;
    formControlLabelProps?: Omit<FormControlLabelProps, 'label' | 'control'>;
}
export declare const Radio: FC<IRadioProps>;
