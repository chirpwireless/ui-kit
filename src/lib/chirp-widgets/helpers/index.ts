import { Serie } from '@nivo/line';
import moment from 'moment';

import { Metrics, Timequant, AttributeConfig, CalculatedValues, WidgetTypes } from '../types';
import { AttributeConverter } from './unitConverter';
import { isTodayDate } from '@chirp/ui/helpers/date';

export * from './emptyStateValue';

export * from './unitConverter';

export const getChartData = ({
    attribute,
    config,
    metrics,
    unitsConverter,
    shouldBeConverted,
}: {
    attribute: string;
    config: AttributeConfig;
    metrics: Metrics;
    unitsConverter: AttributeConverter;
    shouldBeConverted: boolean;
}): Serie[] => {
    const chartData = [];
    const filteredData = [];

    const getValue = (attributeValue: string | number) => {
        let graphValue = 0;

        if (config.type !== 'text' && typeof attributeValue === 'number') {
            graphValue = shouldBeConverted ? unitsConverter.convert(attributeValue) : attributeValue;
        }

        return Number(graphValue.toFixed(2));
    };

    for (const property in metrics) {
        const dateTime = moment.unix(Number(property)).toDate();

        const metric = metrics[property];
        const graphValue = getValue(metric[config.display_value ?? 'avg']);

        const item = {
            x: dateTime,
            y: graphValue,
            min: getValue(metric.min),
            max: getValue(metric.max),
        };
        chartData.push(item);

        // skip empty values on the graph for cases when the timequant is less
        // than the device sends values, so that the graph is smoother
        if (graphValue || metric.lastDate) {
            filteredData.push(item);
        }
    }

    return [{ id: attribute, data: filteredData.length > 1 ? filteredData.reverse() : chartData.reverse() }];
};

export const calculateValues = (chartData: Serie[] | null): CalculatedValues => {
    let min: number | null = null;
    let max: number | null = null;
    let avg: number | null = null;
    let sum = 0;
    let count = 0;

    chartData?.forEach(({ data }) => {
        data.forEach(({ y }) => {
            if (typeof y === 'number') {
                if (typeof min !== 'number' || y < min) min = y;
                if (typeof max !== 'number' || y > max) max = y;
                sum += y;
                count++;
            }
        });
    });

    if (count > 0) {
        avg = sum / count;
    }

    return { min, max, avg };
};

export const getTimequant = (after: number, before: number): Timequant => {
    const endDate = moment(before);

    if (endDate.isAfter(moment(after).add(6, 'month'))) {
        return 'month';
    } else if (endDate.isAfter(moment(after).add(1, 'month'))) {
        return 'week';
    } else if (endDate.isAfter(moment(after).add(48, 'hours'))) {
        return 'day';
    } else {
        return 'hour';
    }
};

export const getTimeString = (timestamp: number) => {
    const timeInMilliseconds = timestamp * 1000;
    const isToday = isTodayDate(new Date(timeInMilliseconds));

    const dateString = isToday
        ? moment(timeInMilliseconds).local().format('HH:mm')
        : moment(timeInMilliseconds).local().format('DD.MM, HH:mm');

    return dateString;
};

export const getValueString = ({
    value,
    config,
    unitsConverter,
    shouldBeConverted,
}: {
    value?: number | string | boolean;
    config: AttributeConfig;
    unitsConverter?: AttributeConverter;
    shouldBeConverted: boolean;
}) => {
    if (config.type === 'boolean' && typeof value !== 'undefined') {
        try {
            const valueMapObj = JSON.parse(config.value_map.replace(/'/g, '"'));

            return valueMapObj[value ? '1' : '0'] ?? value;
        } catch (e) {
            console.error('getValueString error', e);
        }
    }

    if (typeof value === 'number' && config.type === WidgetTypes.Graphic && unitsConverter) {
        return shouldBeConverted ? unitsConverter.convert(value) : value;
    }

    return value;
};
