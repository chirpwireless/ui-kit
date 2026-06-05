import { CustomLayerProps } from '@nivo/line';
import { Scale } from '@nivo/scales';
import * as React from 'react';
type Props = Pick<CustomLayerProps, 'innerWidth' | 'innerHeight' | 'lineGenerator' | 'points' | 'series'> & {
    chartData: CustomLayerProps['data'];
    xScale: Scale<unknown, number>;
    yScale: Scale<unknown, number>;
    maxY: number | null;
    minY: number | null;
    avgY: number | null;
};
export declare const CustomRangeLayer: React.FC<Props>;
export {};
