import { SxProps } from '@mui/material';
import { FC } from 'react';
interface AvatarProps {
    avatar?: string;
    avatarFile?: Array<File>;
    sx?: SxProps;
    userName?: string;
    /**
     * Optional async loader for protected avatar URLs (e.g. signed/auth-gated).
     * Receives the `avatar` URL, returns a Blob to display via createObjectURL.
     * If omitted, the `avatar` URL is used directly.
     */
    loader?: (url: string) => Promise<Blob | null | undefined>;
}
export declare const Avatar: FC<AvatarProps>;
export {};
