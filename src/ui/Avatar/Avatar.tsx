import type { FC } from 'react';
import { useCallback, useEffect, useState } from 'react';

import { Avatar as MuiAvatar, type SxProps } from '@mui/material';

import { getUserInitials } from '../../helpers/userName';

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

export const Avatar: FC<AvatarProps> = ({ avatar, userName, sx, loader }) => {
    const [avatarURL, setAvatarURL] = useState('');

    const resolveAvatar = useCallback(
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
            void resolveAvatar(avatar);
        }
    }, [avatar, resolveAvatar]);

    useEffect(
        () => () => {
            if (avatarURL.startsWith('blob:')) {
                URL.revokeObjectURL(avatarURL);
            }
        },
        [avatarURL],
    );

    if (avatarURL) {
        return <MuiAvatar src={avatarURL} sx={sx} alt={userName} />;
    }

    return <MuiAvatar sx={sx}>{userName ? getUserInitials(userName) : ''}</MuiAvatar>;
};
