import type { Meta, StoryObj } from '@storybook/react';
import { TrashIcon } from '@chirp/ui/assets/new-icons';
import { FleetSuccessIcon } from '@chirp/ui/assets/fleet-icons';

import { TextField } from '../TextField';
import { ConfirmationDialog } from './ConfirmationDialog';

const meta: Meta<typeof ConfirmationDialog> = {
    title: 'UI/ConfirmationDialog',
    component: ConfirmationDialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ConfirmationDialog>;

export const Success: Story = {
    render: () => (
        <ConfirmationDialog
            isOpen
            title="Title"
            subTitle="Description"
            onConfirm={() => {}}
            onCancel={() => {}}
            icon={<FleetSuccessIcon />}
        >
            <TextField label="Label" defaultValue="12" />
        </ConfirmationDialog>
    ),
};

export const DeleteModal: Story = {
    render: () => (
        <ConfirmationDialog
            isOpen
            title="Delete calendar?"
            subTitle="Upon pushing the Delete button your calendar will be permanently deleted"
            icon={<TrashIcon />}
            onConfirm={() => {}}
            confirmButtonText="Delete"
            onCancel={() => {}}
        />
    ),
};
