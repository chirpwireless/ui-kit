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
        <Stack
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                ...sx,
                width: '100%',
                height: '100%',
            }}
        >
            {icon}
            <Stack
                direction="column"
                color={textColor ?? 'neutral.grey4'}
                sx={{
                    gap: '8px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <Typography
                    color="inherit"
                    sx={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    component="div"
                    color="inherit"
                    sx={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        letterSpacing: '0.1px',
                        small: { color: 'neutral.primary' },
                    }}
                >
                    {children}
                </Typography>
            </Stack>
        </Stack>
    );
};
