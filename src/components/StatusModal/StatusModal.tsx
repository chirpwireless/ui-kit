import { Typography, useTheme } from '@mui/material';
import { FC } from 'react';

import { CheckCircleIcon } from '../../icons';
import { chirpPalette } from '../../theme/palette';
import { Button } from '../Button';

import * as S from './style';
import { StatusModalProps } from './types';

export const StatusModal: FC<StatusModalProps> = ({
    open,
    title,
    description,
    primaryButtonText,
    onPrimaryAction,
    type = 'accent',
    icon,
    onClose,
}) => {
    const theme = useTheme();
    const palette = chirpPalette(theme);

    const statusColor = type === 'success' ? palette.alerts.success : palette.primaryColors.accent;

    return (
        <S.Dialog
            open={open}
            onClose={onClose}
            slotProps={{
                backdrop: {
                    sx: { backdropFilter: 'blur(5px)', background: 'rgba(0, 0, 0, 0.12)' },
                },
            }}
        >
            <S.IconCircle statusColor={statusColor}>{icon ?? <CheckCircleIcon width={40} height={40} />}</S.IconCircle>

            <S.TextWrapper>
                <Typography variant="subtitle1" color="neutral.primary">
                    {title}
                </Typography>
                {description && (
                    <Typography variant="body2" color="neutral.grey5">
                        {description}
                    </Typography>
                )}
            </S.TextWrapper>

            <Button size="medium" variant="primary" fullWidth onClick={onPrimaryAction}>
                {primaryButtonText}
            </Button>
        </S.Dialog>
    );
};
