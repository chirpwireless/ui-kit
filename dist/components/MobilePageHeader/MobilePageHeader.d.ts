import { SxProps, Theme } from '@mui/material';
import { FC, ReactNode } from 'react';
interface MobilePageHeaderProps {
    children?: ReactNode | ReactNode[];
    text: string | ReactNode | ReactNode[];
    subText?: string | ReactNode | ReactNode[];
    sx?: SxProps<Theme>;
}
export declare const MobilePageHeader: FC<MobilePageHeaderProps>;
export {};
