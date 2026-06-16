import { CircularProgress, Stack, CircularProgressProps } from '@mui/material';

export const Loader = (props: CircularProgressProps) => {
    return (
        <Stack
            sx={{
                width: '100%',
                height: '100%',
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <CircularProgress size={props.size ?? 40} color={props.color ?? 'primary'} {...props} />
        </Stack>
    );
};
