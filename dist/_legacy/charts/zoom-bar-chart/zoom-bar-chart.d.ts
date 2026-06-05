import { CSSProperties, FC } from 'react';
import { TopLevelFormatterParams } from 'echarts/types/dist/shared';
type TSeriesData = number[][];
export interface IZoomBarChartProps {
    categories: string[];
    seriesData: TSeriesData;
    legendItems: {
        id: number;
        label: string;
        color: string;
    }[];
    style?: CSSProperties;
    tooltipFormatter?: (params: TopLevelFormatterParams | TopLevelFormatterParams[]) => string;
}
declare const ZoomBarChart: FC<IZoomBarChartProps>;
export default ZoomBarChart;
