import { Stack, IconButton, useTheme, SxProps } from '@mui/material';
import { FC } from 'react';

import { StepIcon } from '../../icons';
import { chirpPalette } from '../../theme/palette';

interface StepperProps {
    activeStep: number;
    handleSetStep?: (step: number) => void;
    steps: number[];
    sx?: SxProps;
}

export const Stepper: FC<StepperProps> = ({ activeStep, handleSetStep, steps, sx }) => {
    const theme = useTheme();
    const palette = chirpPalette(theme);
    const hoverColor = palette.primaryColors.accentLight2 ?? palette.primaryColors.accentLight;

    if (!steps?.length) {
        return null;
    }

    return (
        <Stack direction="row" gap="8px" height="24px" alignItems="center" justifyContent="center" mb="32px" sx={sx}>
            {steps.map((step) => (
                <IconButton
                    key={step}
                    sx={{
                        color: activeStep === step ? palette.primaryColors.accent : palette.neutral.grey4,
                        width: '6px',
                        minWidth: '24px',
                        height: '24px',
                        borderRadius: '8px',
                        padding: '0',
                        cursor: handleSetStep ? 'pointer' : 'default',
                        '&:hover': handleSetStep ? { backgroundColor: hoverColor } : undefined,
                    }}
                    onClick={() => handleSetStep?.(step)}
                >
                    <StepIcon />
                </IconButton>
            ))}
        </Stack>
    );
};
