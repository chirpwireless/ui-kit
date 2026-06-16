import { FC } from 'react';
import { StackProps } from '@mui/material';
type StackWrapperProps = StackProps & {
    gap?: number | string;
};
export declare const StackRow: FC<StackWrapperProps>;
export declare const StackRowJC: FC<StackWrapperProps>;
export declare const StackRowJB: FC<StackWrapperProps>;
export declare const StackColumn: FC<StackWrapperProps>;
export declare const StackColumnS: FC<StackWrapperProps>;
export {};
