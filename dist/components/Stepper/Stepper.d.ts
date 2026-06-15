import { SxProps } from '@mui/material';
import { FC } from 'react';
interface StepperProps {
    activeStep: number;
    handleSetStep?: (step: number) => void;
    steps: number[];
    sx?: SxProps;
}
export declare const Stepper: FC<StepperProps>;
export {};
