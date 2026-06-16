import { Box, SxProps, Stack, useTheme, Theme, FormControl, Popover } from '@mui/material';
import { useState, MouseEvent } from 'react';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';
import { StackRow } from '../Stacks';
import { InputLabel } from '../Select';

const isDefinedColor = (color: string | undefined): color is string => Boolean(color);

interface Props {
    value: string;
    onChange: (value: string) => void;
    title?: string;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    hideTitle?: boolean;
    sx?: SxProps;
}

type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';

type VerticalType = 'top' | 'center' | 'bottom';

const ANCHOR_ORIGIN: Record<PopoverPlacement, { vertical: VerticalType; horizontal: 'left' | 'center' | 'right' }> = {
    top: { vertical: 'top', horizontal: 'center' },
    bottom: { vertical: 'bottom', horizontal: 'center' },
    left: { vertical: 'center', horizontal: 'left' },
    right: { vertical: 'center', horizontal: 'right' },
};

const TRANSFORM_ORIGIN: Record<PopoverPlacement, { vertical: VerticalType; horizontal: 'left' | 'center' | 'right' }> =
    {
        top: { vertical: 'bottom', horizontal: 'center' },
        bottom: { vertical: 'top', horizontal: 'center' },
        left: { vertical: 'center', horizontal: 'right' },
        right: { vertical: 'center', horizontal: 'left' },
    };

const getColors = (theme: Theme) => {
    const palette = chirpPalette(theme);

    return [
        theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
        theme.palette.primary.main,
        palette.neutral.primary,
        palette.neutral.grey4,
        palette.alerts.success,
        palette.alerts.alert,
        palette.alerts.warning,
        palette.additionalColors.blue,
        palette.additionalColors.lightBlue,
        palette.additionalColors.purple,
        palette.additionalColors.pink,
    ].filter(isDefinedColor);
};

export const ColorPicker = ({ value, onChange, title = 'Color', placement = 'top', hideTitle = false, sx }: Props) => {
    const theme = useTheme();
    const palette = chirpPalette(theme);
    const colors = getColors(theme);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handleClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleColorSelect = (color: string) => {
        onChange(color);
        handleClose();
    };

    const open = Boolean(anchorEl);
    const surface = theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white;

    return (
        <FormControl fullWidth>
            <InputLabel
                label={hideTitle ? '' : title}
                sx={{
                    '&.MuiInputLabel-shrink': {
                        fontSize: '14px',
                        lineHeight: '20px',
                        top: '8px',
                        left: '-12px',
                    },
                }}
            />
            <Stack
                direction="row"
                onClick={handleClick}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    minWidth: '40px',
                    height: '36px',
                    backgroundColor: surface,
                    border: `1px solid ${palette.borders.primary}`,
                    borderRadius: '8px',
                    cursor: 'pointer',
                    marginTop: hideTitle ? 0 : '16px',
                    boxSizing: 'border-box',

                    '&:hover': {
                        borderColor: palette.primaryColors.accent,
                    },

                    ...sx,
                }}
            >
                <Box
                    sx={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: value,
                    }}
                />
            </Stack>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={ANCHOR_ORIGIN[placement]}
                transformOrigin={TRANSFORM_ORIGIN[placement]}
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: surface,
                            borderRadius: '8px',
                            padding: '8px',
                            boxShadow: theme.shadows[8],
                        },
                    },
                }}
            >
                <StackRow gap={2}>
                    {colors.map((color) => (
                        <Box
                            key={color}
                            sx={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                backgroundColor: color,
                                cursor: 'pointer',
                                transition: 'transform 0.15s ease',
                                '&:hover': {
                                    transform: 'scale(1.15)',
                                },
                            }}
                            onClick={() => handleColorSelect(color)}
                        />
                    ))}
                </StackRow>
            </Popover>
        </FormControl>
    );
};
