import { FC } from 'react';
import { SxProps } from '@mui/material';
export interface AvatarProps {
    avatar?: string;
    userName?: string;
    sx?: SxProps;
}
export declare const Avatar: FC<AvatarProps>;
