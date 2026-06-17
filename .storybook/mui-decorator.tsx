import { StoryContext } from '@storybook/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { PaletteMode } from '@mui/material/index';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import '@chirp/ui/styles/style.scss';
import { getTheme } from '@chirp/ui/theme';
import i18n, { changeLanguage } from '../src/locales/i18n';

const MuiDecorator = (Story: React.ComponentType, context: StoryContext) => {
    const mode = String(context.parameters.theme || context.globals.theme || 'light') as PaletteMode;
    const lang: string = String(context.parameters.language || context.globals.language || 'en');

    const theme = getTheme({ mode });

    useEffect(() => {
        changeLanguage(lang);
    }, [lang]);

    return (
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Story />
            </ThemeProvider>
        </I18nextProvider>
    );
};

export default MuiDecorator;
