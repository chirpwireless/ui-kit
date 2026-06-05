import { Serie } from '@nivo/line';
import { AttributeConverter } from './unit-converter';
import { AttributeConfig, CalculatedValues, Metrics, Timequant } from '../types';
export declare const toValidTimeString: (property: string) => string;
export declare const getChartData: ({ attribute, config, metrics, unitsConverter, shouldBeConverted, }: {
    attribute: string;
    config: AttributeConfig;
    metrics: Metrics;
    unitsConverter: AttributeConverter;
    shouldBeConverted: boolean;
}) => Serie[];
export declare const calculateValues: (chartData: Serie[] | null) => CalculatedValues;
export declare const getTimequant: (after: number, before: number) => Timequant;
export declare const getTimeString: (timestamp: number) => string;
export declare const getValueString: ({ value, config, unitsConverter, shouldBeConverted, }: {
    value?: number | string | boolean;
    config: AttributeConfig;
    unitsConverter?: AttributeConverter;
    shouldBeConverted: boolean;
}) => boolean | number | string | undefined;
