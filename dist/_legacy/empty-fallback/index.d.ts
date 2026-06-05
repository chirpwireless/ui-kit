import { SxProps } from '@mui/material';
import { default as React, FC } from 'react';
interface IEmptyFallbackProps {
    title?: string;
    subTitle?: string;
    withBackground?: boolean;
    action?: React.ReactNode;
    containerSx?: SxProps;
}
export declare const EmptyFallback: FC<IEmptyFallbackProps>;
export {};
