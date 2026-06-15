import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    title: 'UI/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => <Checkbox />,
};

export const Checked: Story = {
    render: () => <Checkbox defaultChecked />,
};

export const Disabled: Story = {
    render: () => <Checkbox disabled defaultChecked />,
};
