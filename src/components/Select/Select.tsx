import { FormControl, SelectProps } from '@mui/material';
import { FC } from 'react';

import { SelectIcon } from '../../icons';

import { InputLabel } from './components/InputLabel';
import * as S from './style';

export const Select: FC<SelectProps> = ({ label, labelId, ...props }) => {
    const hasLabel = Boolean(label);

    return (
        <FormControl fullWidth>
            {hasLabel ? (
                <InputLabel
                    labelId={labelId}
                    label={label}
                    className={props.error ? 'Mui-error' : undefined}
                    sx={{
                        '&.MuiInputLabel-shrink': {
                            fontSize: '14px',
                            lineHeight: '20px',
                            left: '-12px',
                            top: '8px',
                        },
                    }}
                />
            ) : null}
            <S.Select IconComponent={SelectIcon} {...props} />
        </FormControl>
    );
};
