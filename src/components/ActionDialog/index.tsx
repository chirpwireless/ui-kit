import { SxProps, Typography, useTheme } from '@mui/material';
import { ReactNode } from 'react';

import { CheckCircleIcon, CloseIcon } from '../../icons';
import { Button } from '../Button';
import { Loader } from '../Loader';

import * as S from './style';

type Props = {
    isOpen: boolean;
    title: string;
    description?: string;
    nodeDescription?: ReactNode | ReactNode[];
    buttonText: string;
    sx?: SxProps;
    icon?: ReactNode;
    onApply(): void;
    onClose?(): void;
    isLoading?: boolean;
};

export const ActionDialog: React.FC<Props> = ({
    isOpen,
    title,
    description,
    nodeDescription,
    buttonText,
    sx,
    icon,
    onApply,
    onClose,
    isLoading,
}) => {
    const { palette } = useTheme();

    return (
        <S.Dialog open={isOpen} sx={sx}>
            {onClose && (
                <S.CloseIconButton onClick={onClose}>
                    <CloseIcon />
                </S.CloseIconButton>
            )}
            <S.Card>
                <S.IconWrapper>{icon ?? <CheckCircleIcon color={palette.primary.main} />}</S.IconWrapper>
                <Typography
                    mt="24px"
                    fontSize="16px"
                    lineHeight="20px"
                    fontWeight={500}
                    textAlign="center"
                    color="neutral.primary"
                >
                    {title}
                </Typography>
                {nodeDescription ? nodeDescription : null}
                {description ? (
                    <Typography mt={3} fontSize="13px" lineHeight="20px" textAlign="center" color="neutral.grey4">
                        {description}
                    </Typography>
                ) : null}
                <Button
                    size="medium"
                    sx={{ marginTop: 6 }}
                    variant="primary"
                    fullWidth
                    onClick={onApply}
                    disabled={isLoading}
                >
                    {isLoading ? <Loader color="inherit" size={18} /> : buttonText}
                </Button>
            </S.Card>
        </S.Dialog>
    );
};
