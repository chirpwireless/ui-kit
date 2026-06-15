import { TextFieldProps } from '@mui/material';
type SearchProps = TextFieldProps & {
    size?: 'small' | 'medium';
};
export declare const Search: import('@emotion/styled').StyledComponent<{
    variant?: import('@mui/material').TextFieldVariants | undefined;
} & Omit<import('@mui/material').OutlinedTextFieldProps | import('@mui/material').FilledTextFieldProps | import('@mui/material').StandardTextFieldProps, "variant"> & (import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme> & SearchProps), {}, {}>;
export {};
