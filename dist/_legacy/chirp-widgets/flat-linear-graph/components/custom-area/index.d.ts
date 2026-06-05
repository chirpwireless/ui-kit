import { FC } from 'react';
import { CustomLayerProps } from '@nivo/line';
import { Scale } from '@nivo/scales';
interface IAreaLayerProps extends Pick<CustomLayerProps, 'series' | 'innerHeight' | 'curve' | 'colors'> {
    xScale: Scale<number, number>;
    yScale: Scale<number, number>;
    colors: string[];
}
export declare const AreaLayer: FC<IAreaLayerProps>;
export {};
