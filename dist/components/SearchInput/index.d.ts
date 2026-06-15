import { SxProps } from '@mui/material';
type Props = {
    value: string;
    sx?: SxProps;
    placeholder?: string;
    onChange(name: string): void;
    size?: 'small' | 'medium';
};
export declare const SearchInput: React.FC<Props>;
export {};
