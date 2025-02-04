import { StoryContext } from '@storybook/react';

import '@chirp/ui/styles/style.scss';
import { ThemeProvider } from '@chirp/ui/styles/theme/theme-provider';
import { CssBaseline } from '@mui/material';

const MuiDecorator = (Story: React.ComponentType, context: StoryContext) => {
    const theme = context.parameters.theme || context.globals.theme;

    return (
        <ThemeProvider mode={theme}>
            <CssBaseline />
            <Story />
        </ThemeProvider>
    );
};

export default MuiDecorator;
