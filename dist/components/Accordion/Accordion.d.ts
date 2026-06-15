import { SxProps, Theme } from '@mui/material';
import * as React from 'react';
interface AccordionProps {
    expanded: boolean;
    onChange: () => void;
    summary: React.ReactNode;
    endContent?: React.ReactNode;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
}
export declare const Accordion: React.FC<AccordionProps>;
export {};
