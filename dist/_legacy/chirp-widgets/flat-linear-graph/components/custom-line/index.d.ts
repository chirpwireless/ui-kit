import { CustomLayerProps } from '@nivo/line';
import { Scale } from '@nivo/scales';
import { default as React } from 'react';
type Props = Pick<CustomLayerProps, 'series' | 'lineGenerator'> & {
    chartData: CustomLayerProps['data'];
    minY: number | null;
    maxY: number | null;
    xScale: Scale<number, number>;
    yScale: Scale<number, number>;
};
export declare const CustomLine: React.FC<Props>;
export {};
