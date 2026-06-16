import { Stack, Divider, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { FC, ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button';

import * as S from './style';

interface Props {
    isOpen: boolean;
    subTitle: string;
    onCancel(): void;
    onConfirm(value: boolean): void;
    icon?: ReactNode;
    title: string;
    confirmText: string;
    cancelText: string;
    confirmButtonText?: string;
    cancelButtonText?: string;
    buttonDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const QuestionPromptModal: FC<Props> = ({
    isOpen,
    title,
    subTitle,
    icon,
    confirmText,
    cancelText,
    confirmButtonText,
    cancelButtonText,
    onCancel,
    onConfirm,
    buttonDirection,
}) => {
    const { t } = useTranslation('uiKit');
    const [answer, setAnswer] = useState<boolean | undefined>(undefined);

    const toggleAnswer = (value: boolean) => {
        setAnswer(value);
    };

    return (
        <S.Dialog
            open={isOpen}
            slotProps={{
                backdrop: {
                    sx: { backdropFilter: 'blur(5px)', background: 'rgba(0, 0, 0, 0.12)' },
                },
            }}
        >
            <S.Wrapper>
                {icon}
                <Stack
                    sx={{
                        gap: 3,
                    }}
                >
                    <Typography variant="caption" color="neutral.grey4">
                        {subTitle}
                    </Typography>
                    <Typography variant="h4">{title}</Typography>
                </Stack>

                <Divider sx={{ borderColor: 'borders.primary', width: '100%' }} />

                <S.TextWrapper>
                    <RadioGroup>
                        <FormControlLabel
                            sx={{ gap: 2, alignItems: 'start' }}
                            control={<Radio checked={answer === true} onClick={() => toggleAnswer(true)} />}
                            label={
                                <S.Text>
                                    <Typography component="span" color="primaryColors.accent">
                                        {t('Yes')}
                                        {', '}
                                    </Typography>
                                    {confirmText}
                                </S.Text>
                            }
                        />
                    </RadioGroup>
                    <RadioGroup>
                        <FormControlLabel
                            sx={{ gap: 2, alignItems: 'start' }}
                            control={<Radio checked={answer === false} onClick={() => toggleAnswer(false)} />}
                            label={
                                <S.Text>
                                    <Typography component="span" color="primaryColors.accent">
                                        {t('No')}
                                        {', '}
                                    </Typography>
                                    {cancelText}
                                </S.Text>
                            }
                        />
                    </RadioGroup>
                </S.TextWrapper>

                <S.ButtonGroup direction={buttonDirection}>
                    <Button variant="secondary" size="medium" fullWidth onClick={onCancel}>
                        {cancelButtonText || t('Back')}
                    </Button>
                    <Button
                        variant="primary"
                        size="medium"
                        fullWidth
                        onClick={() => onConfirm(answer as boolean)}
                        disabled={answer === undefined}
                    >
                        {confirmButtonText || t('Continue')}
                    </Button>
                </S.ButtonGroup>
            </S.Wrapper>
        </S.Dialog>
    );
};
