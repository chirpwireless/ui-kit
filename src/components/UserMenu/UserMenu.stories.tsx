import type { Meta, StoryObj } from '@storybook/react';

import { MoneyIcon, NotificationIcon, Settings, UserIcon } from '../../icons';
import { UserMenu } from './UserMenu';

const meta: Meta<typeof UserMenu> = {
    title: 'Shell/UserMenu',
    component: UserMenu,
    parameters: {
        layout: 'padded',
    },
};

export default meta;

type Story = StoryObj<typeof UserMenu>;

const baseUser = {
    name: 'J.D.',
    subtitle: 'Acme Inc.',
};

export const Default: Story = {
    render: () => (
        <div style={{ width: 280 }}>
            <UserMenu
                user={baseUser}
                onLogout={() => {
                    /* logout handler */
                }}
                menuItems={[
                    { id: 'users', label: 'Users', icon: <UserIcon />, onClick: () => {} },
                    { id: 'subscription', label: 'Subscription', icon: <MoneyIcon />, onClick: () => {} },
                    { id: 'settings', label: 'Organization settings', icon: <Settings />, onClick: () => {} },
                ]}
            />
        </div>
    ),
};

export const WithOrganizations: Story = {
    render: () => (
        <div style={{ width: 280 }}>
            <UserMenu
                user={baseUser}
                onLogout={() => {}}
                menuItems={[{ id: 'users', label: 'Users', icon: <UserIcon />, onClick: () => {} }]}
                organizations={[
                    { id: 'a', name: 'Acme Inc.' },
                    { id: 'b', name: 'Beta Co.' },
                ]}
                currentOrganizationId="a"
                onSelectOrganization={() => {}}
            />
        </div>
    ),
};

export const WithNotifications: Story = {
    render: () => (
        <div style={{ width: 280 }}>
            <UserMenu user={baseUser} onLogout={() => {}} notificationsSlot={<NotificationIcon />} menuItems={[]} />
        </div>
    ),
};

export const Collapsed: Story = {
    render: () => (
        <div style={{ width: 70 }}>
            <UserMenu user={baseUser} onLogout={() => {}} isCollapsed />
        </div>
    ),
};
