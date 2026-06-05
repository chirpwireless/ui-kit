import { StandardTextFieldProps } from '@mui/material';
interface ISearchInputProps extends Omit<StandardTextFieldProps, 'onChange'> {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    isLoading?: boolean;
}
export declare const SearchInput: React.FC<ISearchInputProps>;
export {};
