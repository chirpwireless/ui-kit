import { Stack } from '@mui/material';
import { FC } from 'react';

import { Loader } from '../Loader';

export const PageLoader: FC = () => (
    <Stack width="100%" height="100vh">
        <Loader />
    </Stack>
);
