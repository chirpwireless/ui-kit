import { Snackbar, SxProps, Theme } from '@mui/material';
import { FC, ReactNode } from 'react';

type Props = {
    open: boolean;
    message: string;
    actionComponent: ReactNode;
    sx?: SxProps<Theme>;
};

export const Notification: FC<Props> = ({ open, message, actionComponent, sx }) => {
    return (
        <Snackbar
            open={open}
            message={message}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            sx={{
                position: 'absolute',
                bottom: { xs: '2px' },
                right: { xs: '2px' },
                left: { xs: '2px' },
                zIndex: 100,
                ...sx,
            }}
            action={actionComponent}
            slotProps={{
                content: {
                    sx: {
                        color: 'neutral.white',
                    },
                },
            }}
        />
    );
};
