import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { LineChart as EChartsLineChart } from 'echarts/charts';
import { GridComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { CSSProperties, FC, memo } from 'react';
import { useTheme } from '@mui/material';
import { EChartsOption } from 'echarts';

echarts.use([TitleComponent, GridComponent, EChartsLineChart, CanvasRenderer]);

type DataType = Record<string, number>;

export interface IStackedChartProps {
    data: DataType[];
    xAxisData?: string[];
    colors: string[];
    style: CSSProperties;
}

const StackedChart: FC<IStackedChartProps> = memo(({ data = [], xAxisData, style, colors }) => {
    const theme = useTheme();

    const seriesKeys = Object.keys(data?.[0]);

    const seriesData: EChartsOption['series'] = data.map((elem, idx) => ({
        type: 'line',
        data: Object.keys(elem).map((key) => elem[key]),
        lineStyle: {
            width: 2,
            color: colors ? colors[idx % colors.length] : theme.palette.text.tertiary,
        },
        showSymbol: false,
    }));

    const option: EChartsOption = {
        backgroundColor: 'transparent',
        textStyle: {
            color: theme.palette.text.tertiary,
            fontFamily: 'Alliance No.2',
            fontSize: 10,
            fontWeight: 500,
        },
        xAxis: {
            type: 'category',
            nameLocation: 'start',
            axisLabel: {
                show: true,
                fontFamily: 'Alliance No.2',
                fontWeight: 500,
                color: theme.palette.text.primary,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: theme.palette.border.secondary,
                    type: 'solid',
                },
            },
            data: xAxisData ?? seriesKeys, // используем кастомные значения или значения по умолчанию
        },

        yAxis: {
            type: 'value',
            nameLocation: 'end',
            axisLabel: {
                show: true,
            },
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        series: seriesData,
    };

    return (
        <>
            <ReactEChartsCore lazyUpdate={true} echarts={echarts} option={option} style={style} />
        </>
    );
});

export default StackedChart;
