import { SxProps } from '@mui/material';
import { Typography } from '../typogrpahy/index.tsx';
import * as S from './style.ts';

type Props = {
    message: React.ReactNode;
    sx?: SxProps;
};

export const Toast: React.FC<Props> = ({ message, sx }) => {
    return (
        <S.Root direction="row" gap={2} sx={{ ...sx }}>
            <Typography variant="body1" component="span" color="text.textInput60">
                {message}
            </Typography>
        </S.Root>
    );
};
