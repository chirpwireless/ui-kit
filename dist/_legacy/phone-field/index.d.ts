import { FC } from 'react';
import { PaperProps, TextFieldProps } from '@mui/material';
type PhoneFieldProps = Omit<TextFieldProps, 'onChange' | 'variant'> & {
    value: string;
    onChange: (value: string) => void;
    countries: string[];
    defaultCountry: string;
    PaperPropsSx?: PaperProps;
    isDisabled?: boolean;
};
export declare const PhoneField: FC<PhoneFieldProps>;
export {};
