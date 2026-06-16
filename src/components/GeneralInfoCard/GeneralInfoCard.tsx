import { SxProps } from '@mui/material';
import * as React from 'react';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { Loader } from '../Loader';
import { StackRow, StackRowJB } from '../Stacks';

import * as S from './styles';

interface GeneralInfoCardProps {
    customAction?: React.ReactElement;
    disabled?: boolean;
    header: React.ReactNode;
    headerActionContent?: React.ReactNode | string;
    headerAction?(): void;
    isLoading?: boolean;
    footer: React.ReactNode;
    sx?: SxProps;
    link?: string | undefined;
}

export const GeneralInfoCard: React.FC<GeneralInfoCardProps> = ({
    customAction,
    disabled,
    header,
    headerAction,
    headerActionContent,
    isLoading,
    footer,
    sx,
    link,
}) => {
    const navigate = useNavigate();

    const handleNavigate = useCallback(() => {
        if (!link) return;

        navigate(link);
    }, [link, navigate]);

    return (
        <S.Wrapper sx={sx} onClick={handleNavigate}>
            {isLoading ? (
                <Loader size={48} sx={{ color: 'neutral.primary' }} />
            ) : (
                <>
                    <StackRowJB sx={{ alignItems: 'flex-start' }}>
                        {header}
                        {customAction ? (
                            customAction
                        ) : headerAction && headerActionContent ? (
                            <Button
                                disabled={disabled}
                                onClick={headerAction}
                                color="primary"
                                size="small"
                                variant="secondary"
                            >
                                {headerActionContent}
                            </Button>
                        ) : null}
                    </StackRowJB>
                    <StackRow overflow="hidden">{footer}</StackRow>
                </>
            )}
        </S.Wrapper>
    );
};
