import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { DashboardIcon, Settings, UserIcon } from '../../icons';
import { Sidebar } from './Sidebar';
import type { SidebarItem } from './types';

const sampleGroups: SidebarItem[][] = [
    [
        { name: 'Overview', href: '/overview', icon: <DashboardIcon />, match: /\/overview/ },
        { name: 'Users', href: '/users', icon: <UserIcon />, match: /\/users/ },
    ],
    [
        {
            name: 'Settings',
            href: '',
            icon: <Settings />,
            match: /\/settings/,
            children: [
                { name: 'Profile', href: '/settings/profile', match: /\/settings\/profile/ },
                { name: 'API Keys', href: '/settings/api-keys', match: /\/settings\/api-keys/ },
            ],
        },
    ],
];

const meta: Meta<typeof Sidebar> = {
    title: 'Shell/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

const Demo = ({ initialCollapsed = false }: { initialCollapsed?: boolean }) => {
    const [isCollapsed, setIsCollapsed] = useState(initialCollapsed);

    return (
        <div style={{ minHeight: '100vh', background: '#fbfbfb' }}>
            <Sidebar
                groups={sampleGroups}
                isOpen
                isCollapsed={isCollapsed}
                onCollapseToggle={() => setIsCollapsed((v) => !v)}
                activePathname="/overview"
                logo={<strong>UI-Kit</strong>}
                logoCollapsed={<strong>UK</strong>}
            />
        </div>
    );
};

export const Expanded: Story = {
    render: () => <Demo />,
};

export const Collapsed: Story = {
    render: () => <Demo initialCollapsed />,
};
