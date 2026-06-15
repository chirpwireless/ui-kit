import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Toggle } from './index';

const meta: Meta<typeof Toggle> = {
    title: 'UI/Toggle',
    component: Toggle,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
    render: () => {
        const [checkedState, setCheckedState] = useState(false);

        return (
            <Toggle
                name="toggle"
                label="Toggle"
                isLoading={false}
                checked={checkedState}
                onChange={() => setCheckedState(!checkedState)}
            />
        );
    },
};
