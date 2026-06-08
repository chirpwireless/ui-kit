import { Stack, SxProps, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';

interface EmptyBlockProps {
    title?: string;
    children?: string | ReactNode;
    icon?: ReactNode;
    textColor?: string;
    sx?: SxProps;
}

export const EmptyBlock: FC<EmptyBlockProps> = ({ title, children, icon, textColor, sx = {} }) => {
    return (
        <Stack alignItems="center" justifyContent="center" gap="16px" sx={{ ...sx, width: '100%', height: '100%' }}>
            {icon}
            <Stack
                direction="column"
                gap="8px"
                alignItems="center"
                justifyContent="center"
                width="100%"
                color={textColor ?? 'neutral.grey4'}
            >
                <Typography
                    fontSize="12px"
                    lineHeight="16px"
                    color="inherit"
                    textTransform="uppercase"
                    textAlign="center"
                >
                    {title}
                </Typography>
                <Typography
                    component="div"
                    fontSize="12px"
                    lineHeight="16px"
                    color="inherit"
                    letterSpacing="0.1px"
                    sx={{
                        small: { color: 'neutral.primary' },
                    }}
                >
                    {children}
                </Typography>
            </Stack>
        </Stack>
    );
};
