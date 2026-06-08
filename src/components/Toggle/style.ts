import { styled, Box, Typography } from '@mui/material';

import { chirpPalette } from '../../theme/palette';

// Replaces the alpha channel of an `rgba(r, g, b, a)` string with the provided opacity.
const replaceRgbaOpacity = (rgba: string, opacity: number): string => {
    const match = rgba.match(/^rgba?\(([^)]+)\)$/);

    if (!match) return rgba;

    const [r, g, b] = match[1].split(',').map((part) => part.trim());

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const Toggle = styled('label')`
    display: flex;
    width: max-content;
    align-items: center;
`;

export const MobileToggle = styled('label')`
    display: flex;
    width: max-content;
    align-items: flex-start;
    flex-direction: column;
`;

export const HiddenInput = styled('input')`
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
`;

export const Checkmark = styled('span', {
    shouldForwardProp: (prop) => prop !== 'isLoading' && prop !== 'checked' && prop !== 'disabled',
})<{ checked: boolean; isLoading: boolean; disabled?: boolean }>(({ theme, isLoading, checked, disabled }) => {
    const palette = chirpPalette(theme);

    return {
        width: '32px',
        height: '18px',
        position: 'relative',
        borderRadius: '20px',
        border: `1px solid`,
        borderColor: isLoading
            ? `${replaceRgbaOpacity(palette.neutral.primary, 0.5)}`
            : disabled
              ? palette.borders.primary
              : checked
                ? palette.primaryColors.accent
                : palette.borders.primary,
    };
});

export const CheckmarkPin = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'isLoading' && prop !== 'disabled',
})<{ checked: boolean; isLoading: boolean; disabled?: boolean }>(({ checked, isLoading, disabled, theme }) => {
    const palette = chirpPalette(theme);

    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        height: '12px',
        width: isLoading ? '16px' : '12px',
        left: checked ? '15px' : '3px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: isLoading
            ? palette.neutral.primary
            : disabled
              ? palette.neutral.grey4
              : checked
                ? palette.primaryColors.accent
                : palette.neutral.grey4,
        borderRadius: '17px',
        transition: '0.4s',
    };
});

export const Label = styled(Typography, { shouldForwardProp: (prop) => prop !== 'checked' && prop !== 'disabled' })<{
    component: string;
    checked: boolean;
    disabled: boolean;
}>(({ theme, checked, disabled }) => {
    const palette = chirpPalette(theme);

    return {
        marginRight: '12px',
        userSelect: 'none',
        fontSize: '12px',
        minWidth: '60px',
        color: disabled ? palette.neutral.grey4 : checked ? palette.neutral.primary : palette.neutral.grey4,
    };
});
