import { styled, TableCell as MuiTableCell, TableRow } from '@mui/material';

import { CurrentTheme } from '../../../../styles/constants';
import { chirpPalette } from '../../../../theme/palette';

export const Row = styled(TableRow)`
    &:hover,
    &.MuiTableRow-hover:hover {
        background-color: transparent !important;
        td,
        th {
            background-color: transparent !important;
        }
    }
`;

export const HeadCell = styled(MuiTableCell)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        padding: '18px 12px 12px',
        backgroundColor: 'transparent !important',
        borderBottom: `1px solid ${
            theme.palette.mode === CurrentTheme.Dark ? palette.borders.primary : palette.borders.primary
        }`,
        fontSize: '14px',
        lineHeight: '20px',
        fontFamily: theme.typography.fontFamily,
        color: palette.neutral.grey3,
        whiteSpace: 'nowrap',
        cursor: 'auto',
        letterSpacing: '0.2px',

        [theme.breakpoints.down('lg')]: {
            padding: '8px 6px',
        },
    };
});
