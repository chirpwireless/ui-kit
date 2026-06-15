import type { Meta, StoryObj } from '@storybook/react';

import { ActionDialog } from './index';

const meta: Meta<typeof ActionDialog> = {
    title: 'UI/ActionDialog',
    component: ActionDialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ActionDialog>;

export const Default: Story = {
    render: () => (
        <ActionDialog isOpen title="Title" description="Description" buttonText="Confirm" onApply={() => {}} />
    ),
};

export const Closable: Story = {
    render: () => (
        <ActionDialog
            isOpen
            title="Title"
            description="Description"
            buttonText="Confirm"
            onApply={() => {}}
            onClose={() => {}}
        />
    ),
};
