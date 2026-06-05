import { SxProps } from '@mui/material';
import { FC } from 'react';
export interface AvatarProps {
    avatarUrl?: string;
    userName?: string;
    sx?: SxProps;
}
export declare const Avatar: FC<AvatarProps>;
