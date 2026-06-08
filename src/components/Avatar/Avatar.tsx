import { SxProps, Avatar as MuiAvatar } from '@mui/material';
import { FC, useState, useEffect, useCallback } from 'react';

// First-letter avatar fallback (kept identical to the app's previous getStringAvatar helper).
const getStringAvatar = (name: string) => (name ? name[0] : '');

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

export const Avatar: FC<AvatarProps> = ({ avatar, avatarFile, sx, userName, loader }) => {
    const [avatarURL, setAvatarURL] = useState('');
    const firstFile = avatarFile?.[0];

    const setAvatarByUrl = useCallback(
        async (url: string) => {
            if (!loader) {
                setAvatarURL(url);

                return;
            }

            const imageBlob = await loader(url);

            if (imageBlob) {
                setAvatarURL(URL.createObjectURL(imageBlob));
            }
        },
        [loader],
    );

    useEffect(() => {
        if (avatar) {
            void setAvatarByUrl(avatar);
        }
    }, [avatar, setAvatarByUrl]);

    useEffect(() => {
        return () => {
            if (avatarURL && avatarURL.startsWith('blob:')) {
                URL.revokeObjectURL(avatarURL);
            }
        };
    });

    if (firstFile) {
        return <MuiAvatar src={URL.createObjectURL(firstFile)} sx={sx} />;
    }

    if (avatarURL) {
        return <MuiAvatar src={avatarURL} sx={sx} />;
    }

    return <MuiAvatar sx={sx}>{userName ? getStringAvatar(userName) : ''}</MuiAvatar>;
};
