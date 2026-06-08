import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { BackIcon, CloseIcon } from '../../icons';
import { chirpPalette } from '../../theme/palette';
import { Button } from '../Button';
import { Stepper } from '../Stepper';

import * as S from './style';
import { BaseModalProps } from './types';

export const BaseModal: React.FC<BaseModalProps> = ({
    title,
    subtitle,
    primaryButtonText,
    secondaryButtonText,
    onPrimaryAction,
    onSecondaryAction,
    children,
    customMaxWidth = '650px',
    disabledPrimaryButton = false,
    isLoading,
    activeStep,
    steps,
    onClose,
    onBack,
    ...dialogProps
}) => {
    const { t } = useTranslation('uiKit');
    const theme = useTheme();
    const palette = chirpPalette(theme);

    return (
        <S.StyledDialog
            customWidth={customMaxWidth}
            slotProps={{
                backdrop: {
                    sx: { backdropFilter: 'blur(8px)', background: `${palette.borders.primary}` },
                },
            }}
            {...dialogProps}
        >
            {onBack && steps?.length && activeStep !== steps[0] && (
                <S.BackIconButton onClick={onBack}>
                    <BackIcon />
                </S.BackIconButton>
            )}

            {onClose && (
                <S.CloseIconButton onClick={onClose}>
                    <CloseIcon />
                </S.CloseIconButton>
            )}
            <S.Wrapper>
                <S.Title>
                    {activeStep && steps && <Stepper activeStep={activeStep} steps={steps} sx={{ marginBottom: 2 }} />}
                    <Typography variant="subtitle1" color="neutral.primary">
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography variant="caption" color="neutral.grey4">
                            {subtitle}
                        </Typography>
                    )}
                </S.Title>

                {children}

                <S.Action>
                    {onSecondaryAction && (
                        <Button size="medium" variant="secondary" onClick={onSecondaryAction}>
                            {secondaryButtonText || t('Cancel')}
                        </Button>
                    )}
                    <Button
                        size="medium"
                        variant="primary"
                        fullWidth
                        onClick={onPrimaryAction}
                        disabled={disabledPrimaryButton || isLoading}
                    >
                        <Box sx={{ width: '12px', marginLeft: '-12px', marginRight: '6px' }}>
                            {isLoading && (
                                <CircularProgress
                                    size={12}
                                    sx={{
                                        color: 'neutral.white',
                                    }}
                                />
                            )}
                        </Box>

                        {primaryButtonText || t('Confirm')}
                    </Button>
                </S.Action>
            </S.Wrapper>
        </S.StyledDialog>
    );
};
