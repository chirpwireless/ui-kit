import { SelectProps } from '@mui/material';
import { FC } from 'react';
export type SelectWithSearchOptionType = {
    value: string | number;
    name: string | number;
    badge?: string;
};
export type SelectWithSearchPropsType = Omit<SelectProps, 'onClose' | 'variant' | 'collection'> & {
    isLoading?: boolean;
    onClear?: () => void;
    searchPlaceholder?: string;
    collection: SelectWithSearchOptionType[];
};
export declare const SelectWithSearch: FC<SelectWithSearchPropsType>;
