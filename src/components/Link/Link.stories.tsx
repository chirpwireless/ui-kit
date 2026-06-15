import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Link } from './index';

const meta: Meta<typeof Link> = {
    title: 'UI/Link',
    component: Link,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const DefaultLink: Story = {
    render: () => (
        <Link to="/">
            <Typography>some</Typography>
        </Link>
    ),
};
