import { SxProps } from '@mui/material';
import { ChangeEvent } from 'react';

import * as S from './style';

type Props = {
    name: string;
    label?: string;
    isLoading: boolean;
    checked: boolean;
    disabled?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    sx?: SxProps;
    labelSx?: SxProps;
};

const Toggle = ({ name, label, checked, isLoading, disabled = false, onChange, sx, labelSx }: Props) => {
    return (
        <S.Toggle sx={{ cursor: disabled ? 'initial' : 'pointer', ...(sx ? { sx } : {}) }}>
            <S.HiddenInput
                type="checkbox"
                checked={checked}
                onChange={onChange}
                name={name}
                disabled={disabled || isLoading}
            />
            {label && (
                <S.Label component="span" checked={checked} disabled={disabled} sx={labelSx}>
                    {label}
                </S.Label>
            )}
            <S.Checkmark disabled={disabled} checked={checked} isLoading={isLoading}>
                <S.CheckmarkPin disabled={disabled} checked={checked} isLoading={isLoading} />
            </S.Checkmark>
        </S.Toggle>
    );
};

const MobileToggle = ({ name, label, checked, isLoading, disabled = false, onChange, sx, labelSx }: Props) => (
    <S.MobileToggle sx={{ cursor: disabled ? 'initial' : 'pointer', ...(sx ? { sx } : {}) }}>
        <S.HiddenInput
            type="checkbox"
            checked={checked}
            onChange={onChange}
            name={name}
            disabled={disabled || isLoading}
        />
        {label && (
            <S.Label component="span" checked={checked} disabled={disabled} mr="0 !important" sx={labelSx}>
                {label}
            </S.Label>
        )}
        <S.Checkmark disabled={disabled} checked={checked} isLoading={isLoading}>
            <S.CheckmarkPin disabled={disabled} checked={checked} isLoading={isLoading} />
        </S.Checkmark>
    </S.MobileToggle>
);

export { Toggle, MobileToggle };
