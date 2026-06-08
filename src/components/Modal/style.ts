import { styled, Box, Typography } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

// Replaces the alpha channel of an `rgba(r, g, b, a)` string with the provided opacity.
const replaceRgbaOpacity = (rgba: string, opacity: number): string => {
    const match = rgba.match(/^rgba?\(([^)]+)\)$/);

    if (!match) return rgba;

    const [r, g, b] = match[1].split(',').map((part) => part.trim());

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const Container = styled(Box)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        background: replaceRgbaOpacity(
            theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
            0.5,
        ),
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: theme.zIndex.modal,
    };
});

export const Modal = styled(Box)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        background: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
        borderRadius: '12px',
        border: `1px solid ${palette.borders.primary}`,
        boxShadow: `0 8px 32px ${palette.shadow ?? 'rgba(0, 0, 0, 0.14)'}`,
        padding: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',

        [theme.breakpoints.up('md')]: {
            minWidth: '460px',
        },
    };
});

export const Title = styled(Typography)(({ theme }) => ({
    color: chirpPalette(theme).neutral.primary,
    fontSize: '16px',
    textAlign: 'center',
}));

export const Description = styled(Typography)(({ theme }) => ({
    color: chirpPalette(theme).neutral.grey4,
    fontSize: '12px',
    textAlign: 'center',
}));
