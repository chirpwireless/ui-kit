import { Box, CircularProgress, SxProps, Theme, Typography, Stack } from '@mui/material';
import type { SystemStyleObject } from '@mui/system';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { CloseIcon } from '../../icons';
import { Button } from '../Button';

import * as S from './style';

interface Props extends PropsWithChildren {
    isOpen: boolean;
    subTitle: string;
    onCancel(): void;
    onConfirm(): void;
    // When provided, renders a close (X) button in the top-right corner
    onClose?(): void;
    icon?: ReactNode;
    title: string | ReactNode;
    confirmButtonText?: string;
    cancelButtonText?: string;
    buttonDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    cancelButtonVariant?: 'primary' | 'secondary';
    confirmButtonVariant?: 'primary' | 'secondary';
    isLoading?: boolean;
    sx?: SxProps;
    'data-automationid'?: string;
    confirmAutomationId?: string;
    cancelAutomationId?: string;
}

export const ActionConfirmDialog: FC<Props> = ({
    isOpen,
    title,
    subTitle,
    icon,
    confirmButtonText,
    cancelButtonText,
    onCancel,
    onConfirm,
    onClose,
    buttonDirection = 'row',
    cancelButtonVariant = 'secondary',
    confirmButtonVariant = 'primary',
    isLoading,
    sx,
    children,
    'data-automationid': automationId,
    confirmAutomationId,
    cancelAutomationId,
}) => {
    const { t } = useTranslation('uiKit');

    return (
        <S.Dialog
            open={isOpen}
            {...(automationId ? { 'data-automationid': automationId } : {})}
            slotProps={{
                backdrop: {
                    sx: { backdropFilter: 'blur(5px)', background: 'rgba(0, 0, 0, 0.12)' },
                },
            }}
            sx={sx ? { '& .MuiDialog-paper': sx as SystemStyleObject<Theme> } : undefined}
        >
            <S.Wrapper>
                {onClose ? (
                    <S.CloseButton type="button" onClick={onClose} aria-label={t('Close')}>
                        <CloseIcon />
                    </S.CloseButton>
                ) : null}
                {icon}
                <Stack gap={2}>
                    <Typography variant="subtitle1">{title}</Typography>
                    <Typography variant="body1" color="neutral.grey4" padding="0px 26px">
                        {subTitle}
                    </Typography>
                </Stack>
                {children}
                <S.ButtonGroup direction={buttonDirection}>
                    {cancelButtonText ? (
                        <Button
                            variant={cancelButtonVariant}
                            size="medium"
                            fullWidth
                            onClick={onCancel}
                            data-automationid={cancelAutomationId}
                        >
                            {cancelButtonText}
                        </Button>
                    ) : null}
                    {confirmButtonText ? (
                        <Button
                            variant={confirmButtonVariant}
                            size="medium"
                            fullWidth
                            onClick={onConfirm}
                            disabled={isLoading}
                            data-automationid={confirmAutomationId}
                        >
                            {isLoading && (
                                <Box sx={{ width: '12px', marginLeft: '-12px', marginRight: '6px' }}>
                                    <CircularProgress
                                        size={12}
                                        sx={{
                                            color: 'neutral.white',
                                        }}
                                    />
                                </Box>
                            )}
                            {confirmButtonText || t('I agree')}
                        </Button>
                    ) : null}
                </S.ButtonGroup>
            </S.Wrapper>
        </S.Dialog>
    );
};
