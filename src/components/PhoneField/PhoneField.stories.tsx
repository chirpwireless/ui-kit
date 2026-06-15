import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { TextField } from '@chirp/ui/components/TextField';

import { PhoneField } from './PhoneField';

const meta: Meta<typeof PhoneField> = {
    title: 'UI/PhoneField',
    component: PhoneField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PhoneField>;

export const Default: Story = {
    render: () => {
        const [value, setValue] = useState<string>('+491512125694');

        return (
            <PhoneField
                onlyCountries={['US', 'DE', 'PT', 'ES', 'RU', 'FR']}
                defaultCountry="US"
                value={value}
                onChange={setValue}
                label="Phone number"
                placeholder="Phone number"
                sx={{ width: '257px' }}
            />
        );
    },
};

export const Disabled: Story = {
    render: () => {
        const [value, setValue] = useState<string>('+491512125694');

        return (
            <PhoneField
                disabled
                onlyCountries={['US', 'DE', 'PT', 'ES', 'RU', 'FR']}
                defaultCountry="US"
                value={value}
                onChange={setValue}
                label="Phone number"
                placeholder="Phone number"
                sx={{ width: '257px' }}
            />
        );
    },
};

export const Error: Story = {
    render: () => {
        const [value, setValue] = useState<string>('+491512125694');

        return (
            <PhoneField
                error
                onlyCountries={['US', 'DE', 'PT', 'ES', 'RU', 'FR']}
                defaultCountry="US"
                value={value}
                onChange={setValue}
                label="Phone number"
                placeholder="Phone number"
                sx={{ width: '257px' }}
            />
        );
    },
};

export const Empty: Story = {
    render: () => {
        const [value, setValue] = useState<string>('');

        return (
            <>
                <TextField fullWidth label="Last name" placeholder="Last name" />
                <TextField fullWidth label="First name" placeholder="First name" />
                <PhoneField
                    onlyCountries={['US', 'DE', 'PT', 'ES', 'RU', 'FR']}
                    defaultCountry="US"
                    label="Phone number"
                    value={value}
                    onChange={setValue}
                    placeholder="Phone number"
                    sx={{ width: '257px' }}
                />
            </>
        );
    },
};
