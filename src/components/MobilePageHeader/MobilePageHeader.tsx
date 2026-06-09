import { Stack, SxProps, Theme, Typography, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';

import { chirpPalette } from '../../theme/palette';

interface MobilePageHeaderProps {
    children?: ReactNode | ReactNode[];
    text: string | ReactNode | ReactNode[];
    subText?: string | ReactNode | ReactNode[];
    sx?: SxProps<Theme>;
}

export const MobilePageHeader: FC<MobilePageHeaderProps> = ({ children, text, subText, sx }) => {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={4}
            justifyContent="space-between"
            width="auto"
            px={5}
            minHeight="64px"
            borderBottom={`1px solid ${chirpPalette(theme).borders.primary}`}
            sx={sx}
        >
            <Stack mb={4} mt={4}>
                <Typography color="neutral.primary" lineHeight="28px" variant="h3" mb="4px">
                    {text}
                </Typography>
                {subText ? (
                    <Typography color="neutral.grey4" variant="body2">
                        {subText}
                    </Typography>
                ) : null}
            </Stack>
            {children}
        </Stack>
    );
};
