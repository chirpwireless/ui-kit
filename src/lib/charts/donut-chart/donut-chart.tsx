import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { PieChart as EChartsPieChart } from 'echarts/charts';
import { TitleComponent } from 'echarts/components';
import { SVGRenderer } from 'echarts/renderers';
import { FC, memo } from 'react';
import { Box } from '@mui/material';
import { EChartsOption } from 'echarts';
import { default as CenterSubstract } from './center-substract.svg?react';
import * as S from './style';

echarts.use([TitleComponent, EChartsPieChart, SVGRenderer]);

export type DataType = {
    name: string;
    value: number;
};

export interface ILineChartProps {
    data: DataType[];
    colors?: string[];
    centerText?: React.ReactNode;
}

const DonutChart: FC<ILineChartProps> = memo(({ colors, centerText, data }) => {
    const option: EChartsOption = {
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['0%', '100%'],
                avoidLabelOverlap: false,
                cursor: 'default',
                color: colors,
                label: {
                    show: false,
                    position: 'center',
                },
                labelLine: {
                    show: false,
                },
                emphasis: { focus: 'none', scale: false },
                data,
            },
        ],
    };

    return (
        <Box position="relative">
            <S.Text
                variant="subtitle1"
                sx={{
                    color: colors?.length ? colors[0] : 'text.primary',
                }}
            >
                {centerText}
            </S.Text>
            <CenterSubstract
                style={{
                    position: 'absolute',
                    zIndex: 3,
                    top: '-3px',
                    left: '-3px',
                }}
            />
            <ReactEChartsCore
                lazyUpdate={true}
                echarts={echarts}
                option={option}
                style={{ width: '88px', height: '88px' }}
            />
        </Box>
    );
});

export default DonutChart;
