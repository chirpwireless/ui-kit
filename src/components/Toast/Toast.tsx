import { Box, useTheme } from '@mui/material';
import { FC, ReactNode, SVGProps } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { CloseIcon, ErrorSolidIcon, SuccessSolidIcon, WarningSolidIcon } from '../../icons';
import { chirpPalette } from '../../theme/palette';

import * as S from './style';

export type ToastStatus = 'error' | 'warning' | 'success';

type Props = {
    id: string;
    status: ToastStatus;
    message: ReactNode;
};

const toastStatusToIconMap: Record<ToastStatus, FC<SVGProps<SVGSVGElement>>> = {
    error: ErrorSolidIcon,
    warning: WarningSolidIcon,
    success: SuccessSolidIcon,
};

export const Toast: FC<Props> = ({ id, status, message }) => {
    const theme = useTheme();
    const { t } = useTranslation('uiKit');

    const Icon = toastStatusToIconMap[status];
    const bgColor = status === 'error' ? 'alert' : status;

    const handleCloseClick = () => toast.dismiss(id);

    return (
        <S.Root direction="row" gap={2} sx={{ backgroundColor: chirpPalette(theme).alerts[bgColor] }}>
            <S.IconWrap>
                <Icon />
            </S.IconWrap>
            <Box>
                <S.Title variant="h5" mb={0.5}>
                    {t(status)}
                </S.Title>
                <S.Text variant="body2">{message}</S.Text>
            </Box>
            <S.CloseButton onClick={handleCloseClick} size="small">
                <CloseIcon />
            </S.CloseButton>
        </S.Root>
    );
};
