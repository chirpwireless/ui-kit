import type { Preview } from '@storybook/react-vite';
import MuiDecorator from './mui-decorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        backgrounds: {
            options: {
                light: { name: 'light', value: '#ffffff' },
                dark: { name: 'dark', value: '#232323' },
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            toolbar: {
                icon: 'circlehollow',
                items: [
                    { value: 'light', icon: 'circlehollow', title: 'light' },
                    { value: 'dark', icon: 'circle', title: 'dark' },
                ],
                dynamicTitle: true,
            },
        },
        language: {
            name: 'Language',
            description: 'Global language for components',
            toolbar: {
                icon: 'globe',
                items: ['en', 'ru', 'es', 'fr', 'de'],
                dynamicTitle: true,
            },
        },
    },
    initialGlobals: {
        theme: 'dark',
        language: 'en',
        backgrounds: { value: 'dark' },
    },
    decorators: [MuiDecorator],
};

export default preview;
