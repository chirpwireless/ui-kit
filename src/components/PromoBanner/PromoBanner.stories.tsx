import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { AerialIcon } from '../../icons';
import { PromoBanner } from './PromoBanner';

const meta: Meta<typeof PromoBanner> = {
    title: 'UI/PromoBanner',
    component: PromoBanner,
    parameters: {
        layout: 'padded',
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

type Story = StoryObj<typeof PromoBanner>;

const placeholderImage =
    "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='112'%3E%3Crect width='112' height='112' rx='8' fill='%23e4e4e4'/%3E%3C/svg%3E";

export const ExternalLink: Story = {
    args: {
        title: 'Need a gateway?',
        subtitle: 'Get a Kilo-ready LoRaWAN gateway to connect your devices and start sending data.',
        imageSrc: placeholderImage,
        imageAlt: 'LoRaWAN gateway',
        linkLabel: 'Shop gateways',
        linkHref: 'https://example.com/gateways',
        isExternalLink: true,
    },
};

export const WithIconMedia: Story = {
    args: {
        title: 'Need a gateway?',
        subtitle: 'Get a Kilo-ready LoRaWAN gateway to connect your devices and start sending data.',
        imageSlot: <AerialIcon width={64} height={64} />,
        linkLabel: 'Shop gateways',
        linkHref: 'https://example.com/gateways',
        isExternalLink: true,
    },
};

export const TitleAndLinkOnly: Story = {
    args: {
        title: 'No devices yet',
        linkLabel: 'Add device',
        linkHref: '/devices/new',
    },
};
