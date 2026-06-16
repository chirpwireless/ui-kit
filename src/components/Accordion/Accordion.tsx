import { Box, Collapse, Stack, SxProps, Theme } from '@mui/material';
import * as React from 'react';

import { ChevronDownIcon } from '../../icons';

interface AccordionProps {
    expanded: boolean;
    onChange: () => void;
    summary: React.ReactNode;
    endContent?: React.ReactNode;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
}

export const Accordion: React.FC<AccordionProps> = ({ expanded, onChange, summary, endContent, children, sx }) => {
    return (
        <Stack sx={sx}>
            <Stack
                direction="row"
                onClick={onChange}
                sx={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                }}
            >
                {summary}
                <Stack
                    direction="row"
                    sx={{
                        gap: '8px',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        minWidth: 56,
                    }}
                >
                    {endContent}
                    <Box
                        sx={{
                            display: 'flex',
                            transition: 'transform 0.2s',
                            transform: expanded ? 'rotate(180deg)' : 'none',
                        }}
                    >
                        <ChevronDownIcon />
                    </Box>
                </Stack>
            </Stack>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </Stack>
    );
};
