import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Modal } from './index';

const meta: Meta<typeof Modal> = {
    title: 'UI/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    render: () => (
        <Modal title="Title" description="Description" actionComponent={<Button variant="primary">Confirm</Button>} />
    ),
};
