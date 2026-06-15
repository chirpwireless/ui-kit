import { SxProps } from '@mui/material';
import { ChangeEvent } from 'react';
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
declare const Toggle: ({ name, label, checked, isLoading, disabled, onChange, sx, labelSx }: Props) => import("react/jsx-runtime").JSX.Element;
declare const MobileToggle: ({ name, label, checked, isLoading, disabled, onChange, sx, labelSx }: Props) => import("react/jsx-runtime").JSX.Element;
export { Toggle, MobileToggle };
