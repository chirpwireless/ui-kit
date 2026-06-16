import { SxProps } from '@mui/material';
import { ChangeEvent } from 'react';

import { mergeSx } from '../../helpers/merge-sx';
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
        <S.Toggle sx={mergeSx({ cursor: disabled ? 'initial' : 'pointer' }, sx)}>
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
    <S.MobileToggle sx={mergeSx({ cursor: disabled ? 'initial' : 'pointer' }, sx)}>
        <S.HiddenInput
            type="checkbox"
            checked={checked}
            onChange={onChange}
            name={name}
            disabled={disabled || isLoading}
        />
        {label && (
            <S.Label
                component="span"
                checked={checked}
                disabled={disabled}
                sx={mergeSx({ mr: '0 !important' }, labelSx)}
            >
                {label}
            </S.Label>
        )}
        <S.Checkmark disabled={disabled} checked={checked} isLoading={isLoading}>
            <S.CheckmarkPin disabled={disabled} checked={checked} isLoading={isLoading} />
        </S.Checkmark>
    </S.MobileToggle>
);

export { Toggle, MobileToggle };
