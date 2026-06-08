import { styled, Box, TableRow } from '@mui/material';

import { chirpPalette } from '../../../../theme/palette';

export { Cell } from '../../style';

export const TableWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    overflowX: 'hidden',
    backgroundColor: 'transparent',

    [theme.breakpoints.between('md', 'lg')]: {
        overflowX: 'visible',
    },
    [theme.breakpoints.down('lg')]: {
        overflowX: 'visible',
        padding: '16px',
    },
    [theme.breakpoints.down('md')]: {
        padding: '8px',
    },
}));

export const GroupedRow = styled(TableRow)(({ theme }) => ({
    td: {
        padding: '24px 0 12px',
        border: 'none',
        letterSpacing: '0.06px',
        color: chirpPalette(theme).primaryColors.accent,
        width: '50px',
    },

    '&:first-of-type': {
        td: {
            paddingTop: '16px',
        },
    },
}));
