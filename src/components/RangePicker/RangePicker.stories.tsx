import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateRange, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';

import { RangePickerWrapper } from './RangePickerWrapper';
import { MAX_DATE_OF_DATE_FILTER, MIN_DATE_OF_DATE_FILTER } from './constants';

const meta: Meta<typeof RangePickerWrapper> = {
    title: 'UI/RangePicker',
    component: RangePickerWrapper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RangePickerWrapper>;

const INITIAL_RANGE: Range = {
    startDate: MIN_DATE_OF_DATE_FILTER,
    endDate: MAX_DATE_OF_DATE_FILTER,
    key: 'selection',
};

export const Default: Story = {
    render: () => {
        const [range, setRange] = useState<Range>(INITIAL_RANGE);

        return (
            <RangePickerWrapper>
                <DateRange
                    ranges={[range]}
                    onChange={({ selection }) => setRange(selection)}
                    minDate={MIN_DATE_OF_DATE_FILTER}
                    maxDate={MAX_DATE_OF_DATE_FILTER}
                    months={2}
                    direction="horizontal"
                    moveRangeOnFirstSelection={false}
                />
            </RangePickerWrapper>
        );
    },
};
