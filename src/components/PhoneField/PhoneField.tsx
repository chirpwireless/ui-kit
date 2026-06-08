import { FormControl } from '@mui/material';
import { MuiTelInputProps } from 'mui-tel-input';
import { FC } from 'react';

import * as S from './styles';

export const PhoneField: FC<MuiTelInputProps> = (props) => (
    <FormControl fullWidth>
        <S.PhoneField {...props} InputLabelProps={{ shrink: true }} />
    </FormControl>
);
