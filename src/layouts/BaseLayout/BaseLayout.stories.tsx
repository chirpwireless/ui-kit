import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Sidebar } from '../../components/Sidebar';
import type { SidebarItem } from '../../components/Sidebar';
import { UserMenu } from '../../components/UserMenu';
import { DashboardIcon, Settings, UserIcon } from '../../icons';
import { BaseLayout } from './BaseLayout';

const groups: SidebarItem[][] = [
    [
        { name: 'Overview', href: '/overview', icon: <DashboardIcon />, match: /\/overview/ },
        { name: 'Users', href: '/users', icon: <UserIcon />, match: /\/users/ },
        { name: 'Settings', href: '/settings', icon: <Settings />, match: /\/settings/ },
    ],
];

const meta: Meta<typeof BaseLayout> = {
    title: 'Shell/BaseLayout',
    component: BaseLayout,
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

type Story = StoryObj<typeof BaseLayout>;

export const Default: Story = {
    render: () => {
        const [isCollapsed, setIsCollapsed] = useState(false);

        const sidebar = (
            <Sidebar
                groups={groups}
                isOpen
                isCollapsed={isCollapsed}
                onCollapseToggle={() => setIsCollapsed((v) => !v)}
                activePathname="/overview"
                logo={<strong>UI-Kit</strong>}
                logoCollapsed={<strong>UK</strong>}
                footerSlot={
                    <UserMenu
                        user={{ name: 'J.D.', subtitle: 'Acme Inc.' }}
                        isCollapsed={isCollapsed}
                        onLogout={() => {}}
                        menuItems={[{ id: 'profile', label: 'Profile', icon: <UserIcon />, onClick: () => {} }]}
                    />
                }
            />
        );

        return (
            <BaseLayout sidebar={sidebar} isSidebarOpen isSidebarCollapsed={isCollapsed}>
                <div style={{ padding: 24 }}>
                    <h1>Hello from your app content</h1>
                    <p>
                        Side menu, user menu и layout приходят из <code>@chirpwireless/ui-kit</code>; только этот блок
                        меняется от приложения к приложению.
                    </p>
                </div>
            </BaseLayout>
        );
    },
};
