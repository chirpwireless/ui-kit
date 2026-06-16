import { FormControl, StandardTextFieldProps } from '@mui/material';
import { forwardRef } from 'react';

import * as S from './style';

export const TextField = forwardRef<HTMLInputElement, StandardTextFieldProps>(({ slotProps, ...props }, ref) => {
    return (
        <FormControl fullWidth>
            <S.TextField
                {...props}
                inputRef={ref}
                slotProps={{
                    ...slotProps,
                    inputLabel: { shrink: true, ...slotProps?.inputLabel },
                }}
            />
        </FormControl>
    );
});

TextField.displayName = 'TextField';
