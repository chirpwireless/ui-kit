import { SxProps, Theme } from '@mui/material';
export declare const SkeletonContainer: import('@emotion/styled').StyledComponent<import('@mui/system').BoxOwnProps<Theme> & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('@mui/system').BoxOwnProps<Theme>> & import('@mui/system').MUIStyledCommonProps<Theme>, {}, {}>;
export declare const SkeletonDiagonalStripe: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<Theme>, import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export interface SkeletonProps {
    sx?: SxProps<Theme>;
}
export declare const Skeleton: ({ sx }: SkeletonProps) => import("react/jsx-runtime").JSX.Element;
