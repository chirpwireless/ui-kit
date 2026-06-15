import type { Meta, StoryObj } from '@storybook/react';
import { DcIcon } from '@chirp/ui/assets/new-icons';
import Stack from '@mui/material/Stack';

import { IconButton } from './index';

const meta: Meta<typeof IconButton> = {
    title: 'UI/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton>
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};

export const Small: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton size="small">
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};

export const Large: Story = {
    render: () => (
        <Stack gap={1}>
            <IconButton size="large">
                <DcIcon />
            </IconButton>
        </Stack>
    ),
};
