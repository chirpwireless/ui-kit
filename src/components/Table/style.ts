import { styled, TableCell, TableRow, alpha } from '@mui/material';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

export const Row = styled(TableRow, {
    shouldForwardProp: (prop) => prop !== 'disableHover',
})<{ disableHover?: boolean }>(({ theme, disableHover }) => {
    const palette = chirpPalette(theme);

    return {
        position: 'relative',

        ...(!disableHover && {
            '&:hover': {
                '& td': {
                    position: 'relative',
                    backgroundColor:
                        theme.palette.mode === CurrentTheme.Dark ? palette.neutral.black : palette.neutral.white,
                    boxShadow: `inset 0 4px 0 ${palette.neutral.grey1}, inset 0 -4px 0 ${palette.neutral.grey1}`,
                    '&:first-of-type': {
                        borderTopLeftRadius: 8,
                        borderBottomLeftRadius: 8,
                        boxShadow: `inset 4px 4px 0 ${palette.neutral.grey1}, inset 0 -4px 0 ${palette.neutral.grey1}`,
                    },
                    '&:last-of-type': {
                        borderTopRightRadius: 8,
                        borderBottomRightRadius: 8,
                        boxShadow: `inset -4px 4px 0 ${palette.neutral.grey1}, inset 0 -4px 0 ${palette.neutral.grey1}`,
                    },
                },
            },
        }),
    };
});

export const Cell = styled(TableCell)(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        height: theme.spacing(5),
        padding: '12px',
        border: 'none',
        borderBottom: `1px solid ${alpha(palette.borders.primary, 0.3)}`,
        fontFamily: theme.typography.fontFamily,
        opacity: 1,
        fontSize: '14px',
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: palette.neutral.primary,

        [theme.breakpoints.down('lg')]: {
            padding: '8px 6px',
        },
    };
});

export const TableWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
}));

export const HeaderWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
}));
