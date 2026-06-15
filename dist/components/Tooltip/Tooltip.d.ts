import { SxProps, TooltipProps } from '@mui/material';
type Props = TooltipProps & {
    tooltipProps?: SxProps;
    childrenProps?: SxProps;
};
export declare const Tooltip: React.FC<Props>;
export {};
