import { LineSvgProps, Serie } from '@nivo/line';
import { AttributeConfig, CalculatedValues, Timequant } from '../../../types';
export type GraphProps = {
    chartData: Array<Serie> | null;
    calculatedValues: CalculatedValues;
    color: string;
    withAxis?: boolean;
    isLoading?: boolean;
    isInteractive?: boolean;
    timeFormat?: string;
    config?: AttributeConfig;
    postfix?: string;
    timequant?: Timequant;
} & Pick<LineSvgProps, 'curve'>;
declare const Graph: React.FC<GraphProps>;
export default Graph;
