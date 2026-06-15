import type { Meta, StoryObj } from '@storybook/react';
import { Box, Stack } from '@mui/material';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const SmallSize: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="small" variant="primary">
                test
            </Button>
        </Stack>
    ),
};

export const BigSize: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="big" variant="primary">
                test
            </Button>
        </Stack>
    ),
};

export const PrimaryVariant: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="primary">
                test
            </Button>
        </Stack>
    ),
};

export const OutlinedVariant: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="outlined">
                test
            </Button>
        </Stack>
    ),
};

export const SecondaryVariant: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="secondary">
                test
            </Button>
        </Stack>
    ),
};

export const TertiaryVariant: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="tertiary">
                test
            </Button>
        </Stack>
    ),
};

export const TextVariant: Story = {
    render: () => (
        <Stack gap={1}>
            <Button size="medium" variant="text">
                test
            </Button>
        </Stack>
    ),
};

export const FullWidth: Story = {
    render: () => (
        <Box width="400px" bgcolor="gray" p={2}>
            <Stack gap={1}>
                <Button size="medium" variant="primary" fullWidth>
                    test
                </Button>
            </Stack>
        </Box>
    ),
};
