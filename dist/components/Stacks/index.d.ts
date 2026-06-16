import { CSSProperties, FC } from 'react';
import { StackProps } from '@mui/material';
type StackLayoutProps = StackProps & {
    gap?: number;
    width?: CSSProperties['width'];
    minWidth?: CSSProperties['minWidth'];
    maxWidth?: CSSProperties['maxWidth'];
    flex?: CSSProperties['flex'];
    overflow?: CSSProperties['overflow'];
};
export declare const StackRow: FC<StackLayoutProps>;
export declare const StackRowJC: FC<StackLayoutProps>;
export declare const StackRowJB: FC<StackLayoutProps>;
export declare const StackColumn: FC<StackLayoutProps>;
export declare const StackColumnS: FC<StackLayoutProps>;
export {};
