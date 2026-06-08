import { Box, Stack, Typography } from '@mui/material';
import * as React from 'react';

import { Button } from '../Button';
import { StackRowJB } from '../Stacks';

export interface DialogFormProps {
    children: React.ReactNode | React.ReactNode[];
    cancelText: string;
    onCancel(): void;
    onSubmit(): void;
    isLoading?: boolean;
    title: string;
    submitText: string;
    subtitle?: string;
    maxWidth?: string;
}

export const DialogForm = ({
    cancelText,
    children,
    onCancel,
    onSubmit,
    isLoading,
    title,
    subtitle,
    submitText,
    maxWidth,
}: DialogFormProps) => {
    return (
        <Box
            component="form"
            minWidth={{ xs: '100%', sm: '350px', md: 'auto' }}
            maxWidth={maxWidth}
            onSubmit={onSubmit}
        >
            <Stack textAlign="center" gap={2} mb={3}>
                <Typography variant="subtitle1" color="neutral.primary">
                    {title}
                </Typography>
                {subtitle && (
                    <Typography variant="body1" color="neutral.grey4">
                        {subtitle}
                    </Typography>
                )}
            </Stack>
            <Stack gap="16px" mb="24px">
                {children}
            </Stack>
            <StackRowJB width="100%">
                <Button variant="secondary" type="button" size="medium" onClick={onCancel} sx={{ width: '50%' }}>
                    {cancelText}
                </Button>
                <Button variant="primary" type="submit" size="medium" disabled={isLoading} sx={{ width: '50%' }}>
                    {submitText}
                </Button>
            </StackRowJB>
        </Box>
    );
};
