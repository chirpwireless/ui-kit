import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
    title: 'UI/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
    render: () => {
        const [activeTab, setActiveTab] = useState('One');

        return <Tabs items={['One', 'Two', 'Three']} activeTab={activeTab} setActiveTab={setActiveTab} />;
    },
};

export const WithCounts: Story = {
    render: () => {
        const [activeTab, setActiveTab] = useState('One');

        return (
            <Tabs
                items={['One', 'Two', 'Three']}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                counts={{ One: 3, Two: 12 }}
            />
        );
    },
};
