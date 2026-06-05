import { FC } from 'react';
import { SxProps } from '@mui/material';
export interface AvatarProps {
    avatar?: string;
    userName?: string;
    sx?: SxProps;
    /**
     * Optional async loader for protected avatar URLs (e.g. signed/auth-gated).
     * Receives the `avatar` URL, returns a Blob displayed via createObjectURL.
     * If omitted, the `avatar` URL is used directly.
     */
    loader?: (url: string) => Promise<Blob | null | undefined>;
}
export declare const Avatar: FC<AvatarProps>;
