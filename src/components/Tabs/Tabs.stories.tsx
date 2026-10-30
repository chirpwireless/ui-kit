import type { Meta, StoryObj } from '@storybook/react-vite';
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
    render: function Render() {
        const [activeTab, setActiveTab] = useState('One');

        return <Tabs items={['One', 'Two', 'Three']} activeTab={activeTab} setActiveTab={setActiveTab} />;
    },
};

export const WithCounts: Story = {
    render: function Render() {
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
