import type { FC } from 'react';

import { Avatar as MuiAvatar, type SxProps } from '@mui/material';

import { getUserInitials } from '../../helpers/userName';

export interface AvatarProps {
    avatar?: string;
    userName?: string;
    sx?: SxProps;
}

export const Avatar: FC<AvatarProps> = ({ avatar, userName, sx }) => {
    if (avatar) {
        return <MuiAvatar src={avatar} sx={sx} alt={userName} />;
    }

    return <MuiAvatar sx={sx}>{userName ? getUserInitials(userName) : ''}</MuiAvatar>;
};
