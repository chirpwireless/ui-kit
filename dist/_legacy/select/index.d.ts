import { SelectProps } from '@mui/material';
import { FC } from 'react';
export type SelectPropsType = SelectProps & {
    onClear?: () => void;
};
export declare const Select: FC<SelectPropsType>;
