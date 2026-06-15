import { FilterItemProps } from '.';
export declare const Label: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>, import('react').DetailedHTMLProps<import('react').LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare const HiddenInput: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme>, import('react').DetailedHTMLProps<import('react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {}>;
export declare const Checkmark: import('@emotion/styled').StyledComponent<import('@mui/system').BoxOwnProps<import('@mui/material').Theme> & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('@mui/system').BoxOwnProps<import('@mui/material').Theme>> & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme> & {
    hasAdornment: boolean;
    component: React.ElementType;
} & Pick<FilterItemProps, "size" | "variant" | "checked">, {}, {}>;
export declare const Adornment: import('@emotion/styled').StyledComponent<import('@mui/system').BoxOwnProps<import('@mui/material').Theme> & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('@mui/system').BoxOwnProps<import('@mui/material').Theme>> & import('@mui/system').MUIStyledCommonProps<import('@mui/material').Theme> & Pick<FilterItemProps, "checked">, {}, {}>;
