import { StoryContext } from '@storybook/react';

import '@chirp/ui/styles/style.scss';
import { ThemeProvider } from '@chirp/ui/styles/theme/theme-provider';
import i18n from '../src/locales/i18n';
import { useEffect } from 'react';
import { changeLanguage } from '../src/locales/i18n';
import { I18nextProvider } from 'react-i18next';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material/index';

const MuiDecorator = (Story: React.ComponentType, context: StoryContext) => {
    const theme = String(context.parameters.theme || context.globals.theme || 'light') as PaletteMode;
    const lang: string = String(context.parameters.language || context.globals.language || 'en');

    useEffect(() => {
        changeLanguage(lang);
    }, [lang]);

    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider mode={theme}>
                <CssBaseline />
                <Story />
            </ThemeProvider>
        </I18nextProvider>
    );
};

export default MuiDecorator;
