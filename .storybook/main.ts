import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/*.mdx', '../src/**/*.mdx', '../src/*.stories.tsx', '../src/**/*.stories.tsx'],
    addons: ['@storybook/addon-links', '@storybook/addon-onboarding', '@storybook/addon-docs'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
};

export default config;
