import { Box, Stack } from '@mui/material';
import { BaseWidget, IBaseWidgetProps } from '../base-widget';
import * as S from './style';
import { PercentLabels } from './percent-labels/percent-labels';
import { Labels } from './labels/labels';

export interface IProgressSegment {
    label: string;
    value: number;
    color: string;
}

interface IProgressWidgetProps extends IBaseWidgetProps {
    data: IProgressSegment[];
}

export const ProgressWidget: React.FC<React.PropsWithChildren<IProgressWidgetProps>> = (props) => {
    const { data, ...baseWidgetProps } = props;

    const total = data.reduce((sum, item) => sum + item.value, 0);

    const progressBar = (
        <Stack gap="4px">
            <Box position="relative" height="16px">
                <PercentLabels data={data} total={total} />
            </Box>
            <S.ProgressContainer>
                {
                    data.reduce(
                        (acc, item) => {
                            const percent = (item.value / total) * 100;
                            const left = acc.currentLeft;
                            acc.currentLeft += percent;

                            acc.segments.push(
                                <S.ProgressSegment
                                    key={item.label}
                                    widthPercent={percent}
                                    color={item.color}
                                    style={{ left: `${left}%` }}
                                />,
                            );

                            return acc;
                        },
                        { currentLeft: 0, segments: [] as React.ReactElement[] },
                    ).segments
                }
            </S.ProgressContainer>
        </Stack>
    );

    return (
        <BaseWidget
            {...baseWidgetProps}
            mainContainerSx={{ gap: '32px', ...baseWidgetProps.mainContainerSx }}
            renderSubHeader={<Labels data={data} />}
            renderMainContent={progressBar}
        />
    );
};
