import { Box, Stack } from '@mui/material';
import { useRef } from 'react';

import { CurrentValue } from '../CurrentValue';
import * as S from './style';

type Props = {
    current: number;
    min: number;
    max: number;
    avg: number;
    gradientColors: string;
    currentColor: string;
};

export const ProgressBar: React.FC<Props> = ({ current, min, max, avg, gradientColors, currentColor }) => {
    const sliderRef = useRef<HTMLElement>(null);

    const items = [
        {
            value: min,
            label: 'min',
        },
        {
            value: avg,
            label: 'avg',
        },
        {
            value: max,
            label: 'max',
        },
    ] as const;

    return (
        <Box>
            <Stack direction="row" justifyContent="space-between" width="100%">
                {items.map(({ value, label }) => (
                    <CurrentValue
                        key={label}
                        value={value}
                        label="Label"
                        color="red"
                        // color={palette.widgets.values[label]}
                        size="small"
                    />
                ))}
            </Stack>
            <S.Slider
                ref={sliderRef}
                value={current}
                min={Math.min(min, current)}
                max={Math.max(max, current) || 100}
                track={false}
                disabled
                sx={{
                    '--gradient': `linear-gradient(90deg, ${gradientColors}`,
                    '& .MuiSlider-thumb': { backgroundColor: currentColor },
                }}
            />
        </Box>
    );
};
