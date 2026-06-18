import type { Meta, StoryObj } from '@storybook/react';
import Typography from '@mui/material/Typography';

import { UserIcon } from '../../icons';
import { SimpleCard, SimpleSmallCard } from '../SimpleCard';
import { GradientCard } from '../GradientCard';
import { Card } from './index';

const meta: Meta<typeof Card> = {
    title: 'UI/Cards',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

const sample = (
    <Typography variant="body2" sx={{ opacity: 0.7 }}>
        Card content goes here.
    </Typography>
);

export const Default: Story = {
    name: 'Card (large)',
    args: {
        title: 'Card title',
        icon: <UserIcon />,
        size: 'large',
        sx: { width: 320 },
        children: sample,
    },
};

export const Small: Story = {
    name: 'Card (small)',
    args: {
        title: 'Card title',
        icon: <UserIcon />,
        size: 'small',
        sx: { width: 320 },
        children: sample,
    },
};

export const Clickable: Story = {
    name: 'Card (clickable)',
    args: {
        title: 'Clickable card',
        isClickable: true,
        sx: { width: 320 },
        children: sample,
        onClick: () => {},
    },
};

export const Simple: StoryObj<typeof SimpleCard> = {
    name: 'SimpleCard',
    render: () => (
        <SimpleCard sx={{ width: 320 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
                SimpleCard
            </Typography>
            {sample}
        </SimpleCard>
    ),
};

export const SimpleSmall: StoryObj<typeof SimpleSmallCard> = {
    name: 'SimpleSmallCard',
    render: () => (
        <SimpleSmallCard sx={{ width: 180, height: 80 }}>
            <Typography variant="body2">SimpleSmallCard</Typography>
        </SimpleSmallCard>
    ),
};

export const Gradient: StoryObj<typeof GradientCard> = {
    name: 'GradientCard',
    render: () => (
        <GradientCard sx={{ width: 320 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
                GradientCard
            </Typography>
            {sample}
        </GradientCard>
    ),
};
