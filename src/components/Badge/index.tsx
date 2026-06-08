import { SxProps, Typography } from '@mui/material';
import { forwardRef, ReactNode } from 'react';

import * as S from './style';

interface BadgeProps {
    index?: number;
    text: string;
    sx?: SxProps;
    getRef?: (index: number) => React.RefObject<HTMLElement>;
}

export const Badge = forwardRef(({ index, text, sx, getRef }: BadgeProps, ref) => {
    if (!text) return null;

    return (
        <S.Badge ref={getRef ? getRef(index ?? 0) : ref} sx={sx}>
            <Typography noWrap fontSize="12px" lineHeight="16px">
                {text}
            </Typography>
        </S.Badge>
    );
});

interface SimpleBadgeProps {
    text: string | ReactNode;
}

export const SimpleBadge = ({ text }: SimpleBadgeProps) => (
    <S.SimpleBadge>
        <Typography noWrap fontSize="12px" lineHeight="16px">
            {text}
        </Typography>
    </S.SimpleBadge>
);

Badge.displayName = 'Badge';
