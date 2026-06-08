import { SxProps } from '@mui/material';
interface Props {
    value: string;
    onChange: (value: string) => void;
    title?: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    hideTitle?: boolean;
    sx?: SxProps;
}
export declare const ColorPicker: ({ value, onChange, title, placement, hideTitle, sx }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
