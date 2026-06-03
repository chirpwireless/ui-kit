import type { ThemeOptions } from '@mui/material/styles';

import './augmentation';

export const themeMixins: ThemeOptions = {
    mixins: {
        linearBackground: {
            background: `repeating-linear-gradient(
                106deg,
                rgba(166, 166, 166, 0.2),
                rgba(166, 166, 166, 0.2) 2px,
                transparent 2px,
                transparent 6px
            )`,
        },
    },
};
