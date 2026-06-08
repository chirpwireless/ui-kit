import { forwardRef } from 'react';
import { IMaskInput, IMaskInputProps } from 'react-imask';

// Wrapper that forwards MUI's ref as inputRef for IMaskInput
export const MaskedInput = forwardRef<HTMLInputElement, IMaskInputProps<HTMLInputElement>>((props, ref) => (
    <IMaskInput {...props} inputRef={ref} />
));

MaskedInput.displayName = 'MaskedInput';
