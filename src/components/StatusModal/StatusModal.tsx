import { darken, Typography, useTheme } from '@mui/material';
import { FC } from 'react';

import { CheckCircleIcon } from '../../icons';
import { chirpPalette, ChirpPalette } from '../../theme/palette';
import { Button } from '../Button';

import * as S from './style';
import { StatusModalProps, StatusModalType } from './types';

const getStatusColor = (type: StatusModalType, palette: ChirpPalette): string => {
    switch (type) {
        case 'success':
            return palette.alerts.success;
        case 'alert':
            return palette.alerts.alert;
        default:
            return palette.primaryColors.accent;
    }
};

export const StatusModal: FC<StatusModalProps> = ({
    open,
    title,
    description,
    primaryButtonText,
    onPrimaryAction,
    type = 'accent',
    icon,
    secondaryButtonText,
    onSecondaryAction,
    onClose,
}) => {
    const theme = useTheme();
    const palette = chirpPalette(theme);

    const statusColor = getStatusColor(type, palette);

    // The kit Button has no destructive variant, so the alert flavor recolors the primary action locally.
    const alertButtonSx =
        type === 'alert'
            ? {
                  backgroundColor: palette.alerts.alert,
                  '&:hover': { backgroundColor: darken(palette.alerts.alert, 0.15) },
              }
            : undefined;

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

            <S.ButtonsRow>
                {onSecondaryAction && (
                    <Button size="medium" variant="secondary" onClick={onSecondaryAction}>
                        {secondaryButtonText}
                    </Button>
                )}
                <Button size="medium" variant="primary" onClick={onPrimaryAction} sx={alertButtonSx}>
                    {primaryButtonText}
                </Button>
            </S.ButtonsRow>
        </S.Dialog>
    );
};
