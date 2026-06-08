import { Stack, SxProps } from '@mui/material';
import { PropsWithChildren } from 'react';

import * as S from './style';

export type CardProps = {
    icon?: React.ReactNode;
    title?: string;
    isClickable?: boolean;
    actions?: React.ReactNode[];
    fullContent?: boolean;
    size?: 'small' | 'large';
    className?: string;
    sx?: SxProps;
    onClick?(): void;
} & PropsWithChildren;

export const Card: React.FC<CardProps> = ({
    icon,
    title,
    actions,
    children,
    fullContent,
    isClickable,
    size = 'large',
    className,
    sx,
    onClick,
}) => {
    return (
        <S.Card className={className} sx={sx} fullContent={fullContent} isClickable={isClickable} onClick={onClick}>
            {(actions || title || icon) && (
                <Stack direction="row" alignItems="center" gap="12px" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" gap="12px">
                        {icon && (
                            <Stack alignItems="center" justifyContent="center" width="24px" height="24px">
                                {icon}
                            </Stack>
                        )}
                        {title && <S.Title size={size}>{title}</S.Title>}
                    </Stack>
                    {actions && (
                        <Stack direction="row" alignItems="center" gap="12px">
                            {actions.map((action) => action)}
                        </Stack>
                    )}
                </Stack>
            )}

            {children}
        </S.Card>
    );
};
