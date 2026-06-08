import { CircularProgress, Typography, Box, SxProps } from '@mui/material';
import { PropsWithChildren, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { CloseIcon } from '../../icons';
import { Button } from '../Button';
import { StackRowJB } from '../Stacks';

import * as S from './style';

type Props = {
    isOpen: boolean;
    title?: string;
    subTitle?: string;
    icon?: ReactNode;
    disabled?: boolean;
    confirmButtonText?: string;
    cancelButtonText?: string;
    onConfirm(): void;
    onCancel(): void;
    isLoading?: boolean;
    hideCancelButton?: boolean;
    sx?: SxProps;
} & PropsWithChildren;

export const ConfirmationDialog: React.FC<Props> = ({
    isOpen,
    title,
    subTitle,
    icon,
    disabled = false,
    confirmButtonText,
    cancelButtonText,
    children,
    onConfirm,
    onCancel,
    isLoading,
    hideCancelButton,
    sx,
}) => {
    const { t } = useTranslation('uiKit');

    return (
        <S.Dialog open={isOpen} sx={sx}>
            <S.CloseIconButton onClick={onCancel}>
                <CloseIcon />
            </S.CloseIconButton>
            {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
            <S.Content>
                {title ? (
                    <Typography fontSize="16px" lineHeight="20px">
                        {title}
                    </Typography>
                ) : null}
                {subTitle ? (
                    <Typography fontSize="12px" lineHeight="16px" color="neutral.grey4">
                        {subTitle}
                    </Typography>
                ) : null}
                {children}
            </S.Content>
            {!hideCancelButton ? (
                <StackRowJB width="100%">
                    <Button
                        variant="secondary"
                        size="medium"
                        disabled={disabled}
                        onClick={onCancel}
                        sx={{ width: '50%' }}
                    >
                        {cancelButtonText || t('Cancel')}
                    </Button>
                    <Button
                        variant="primary"
                        size="medium"
                        disabled={disabled || isLoading}
                        onClick={onConfirm}
                        sx={{
                            width: '50%',
                        }}
                    >
                        <S.LoaderWrapper>
                            {isLoading ? (
                                <CircularProgress
                                    size={12}
                                    sx={{
                                        color: 'neutral.white',
                                    }}
                                />
                            ) : (
                                <Box sx={{ width: '12px' }} />
                            )}
                            {confirmButtonText || t('Confirm')}
                        </S.LoaderWrapper>
                    </Button>
                </StackRowJB>
            ) : (
                <Button
                    className="confirmation-button"
                    variant="primary"
                    size="medium"
                    disabled={disabled || isLoading}
                    onClick={onConfirm}
                    sx={{
                        width: '50%',
                    }}
                >
                    <S.LoaderWrapper>
                        {isLoading ? (
                            <CircularProgress
                                size={12}
                                sx={{
                                    color: 'neutral.white',
                                }}
                            />
                        ) : (
                            <Box sx={{ width: '12px' }} />
                        )}
                        {confirmButtonText || t('Confirm')}
                    </S.LoaderWrapper>
                </Button>
            )}
        </S.Dialog>
    );
};
