import { SxProps } from '@mui/material';
import * as React from 'react';
interface GeneralInfoCardProps {
    customAction?: React.ReactElement;
    disabled?: boolean;
    header: React.ReactNode;
    headerActionContent?: React.ReactNode | string;
    headerAction?(): void;
    isLoading?: boolean;
    footer: React.ReactNode;
    sx?: SxProps;
    link?: string | undefined;
}
export declare const GeneralInfoCard: React.FC<GeneralInfoCardProps>;
export {};
