import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { SearchInput } from './index';

const meta: Meta<typeof SearchInput> = {
    title: 'UI/SearchInput',
    component: SearchInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState('');

        return <SearchInput value={value} onChange={setValue} />;
    },
};

export const WithCustomPlaceholder: Story = {
    render: () => {
        const [value, setValue] = useState('');

        return <SearchInput placeholder="Search by name" value={value} onChange={setValue} />;
    },
};

export const Small: Story = {
    render: () => {
        const [value, setValue] = useState('');

        return <SearchInput size="small" placeholder="Search by name" value={value} onChange={setValue} />;
    },
};
