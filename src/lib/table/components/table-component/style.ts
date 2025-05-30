import { styled, TableContainer } from '@mui/material';
import { TableRow } from '@mui/material';

export { Cell } from '../../style';

export const TableWrapper = styled(TableContainer)(({ theme }) => ({
    width: '100%',
    // overflowX: 'hidden',
    backgroundColor: 'transparent',
    td: {
        color: theme.palette.text.text4,
        padding: '18px 12px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:first-of-type': {
            paddingLeft: '0',
        },
    },

    [theme.breakpoints.between('md', 'lg')]: {
        overflowX: 'visible',
    },
    [theme.breakpoints.down('lg')]: {
        overflowX: 'visible',
    },
}));

export const GroupedRow = styled(TableRow)(({ theme }) => ({
    td: {
        padding: '24px 0 12px',
        border: 'none',
        letterSpacing: '0.06px',
        color: theme.palette.text.text4,
        width: '50px',
    },

    '&:first-of-type': {
        td: {
            paddingTop: 0,
        },
    },
}));
