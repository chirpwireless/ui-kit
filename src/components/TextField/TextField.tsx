import { FormControl, StandardTextFieldProps } from '@mui/material';
import { forwardRef } from 'react';

import * as S from './style';

export const TextField = forwardRef<HTMLInputElement, StandardTextFieldProps>((props, ref) => {
    return (
        <FormControl fullWidth>
            <S.TextField
                {...props}
                inputRef={ref}
                slotProps={{
                    inputLabel: { shrink: true },
                }}
            />
        </FormControl>
    );
});

TextField.displayName = 'TextField';
