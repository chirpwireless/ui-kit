import type { Meta, StoryObj } from '@storybook/react';
import { AlertsCount } from '@chirp/ui/lib';
import {
    DeviceIcon,
    EnergyIcon,
    LoRaDeviceIcon,
    LoRaDeviceIconBig,
    SimCardIcon,
    SimDeviceBigIcon,
    WiFiIcon,
} from '@chirp/ui/assets/icons';
import { useTheme } from '@emotion/react';
import { SimCardsIcon } from '@chirp/ui/assets/fleet-icons';

const meta: Meta<typeof AlertsCount> = {
    title: 'UI/AlertsCount',
    component: AlertsCount,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AlertsCount>;

export const Default: Story = {
    render: () => <AlertsCount>2</AlertsCount>,
};

export const Icons: Story = {
    render: () => {
        const theme = useTheme();
        return <LoRaDeviceIcon theme={theme} />;
    },
};

export const IconsBig: Story = {
    render: () => {
        const theme = useTheme();
        return <LoRaDeviceIconBig theme={theme} />;
    },
};

export const GPSIcon: Story = {
    render: () => {
        const theme = useTheme();
        return <EnergyIcon color={'green'} />;
    },
};

export const GPSIcon2: Story = {
    render: () => {
        const theme = useTheme();
        return <SimDeviceBigIcon />;
    },
};
