import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '@chirp/ui/lib';

const meta: Meta<typeof Stepper> = {
    title: 'UI/Stepper',
    component: Stepper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
    render: () => <Stepper steps={[1, 2, 3, 4, 5, 6, 7]} activeStep={4} />,
};
