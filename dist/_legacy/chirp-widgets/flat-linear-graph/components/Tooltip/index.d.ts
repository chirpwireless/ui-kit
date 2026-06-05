import { SliceTooltipProps } from '@nivo/line';
import { AttributeConfig } from '../../../types';
export declare const Tooltip: ({ slice, config, postfix, minY, maxY, }: SliceTooltipProps & {
    config?: AttributeConfig;
    postfix?: string;
    minY: number | null;
    maxY: number | null;
}) => import("react/jsx-runtime").JSX.Element;
