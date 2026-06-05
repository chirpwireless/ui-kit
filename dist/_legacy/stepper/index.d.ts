import { FC } from 'react';
export interface StepperProps {
    activeStep: number;
    handleSetStep?: (step: number) => void;
    steps: number[];
}
export declare const Stepper: FC<StepperProps>;
