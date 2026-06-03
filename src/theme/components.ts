import type { Components, Theme } from '@mui/material/styles';

import { CurrentTheme } from '../styles/constants';
import type { ChirpPaletteOptions } from './palette';
import './augmentation';

type ComponentCreator = (palette: ChirpPaletteOptions | undefined) => Components<Theme>;

export const createComponents: ComponentCreator = (palette) => ({
    MuiCssBaseline: {
        styleOverrides: {
            'html, body, #root': {
                height: '100%',
                backgroundColor:
                    palette?.mode === CurrentTheme.Dark ? palette?.neutral?.black : palette?.neutral?.grey1,
                color: palette?.text?.primary,
                '& ::-webkit-scrollbar': {
                    width: '4px',
                },
                '& ::-webkit-scrollbar-track': {
                    backgroundColor:
                        palette?.mode === CurrentTheme.Dark ? palette?.neutral?.grey1 : palette?.neutral?.grey2,
                },
                '& ::-webkit-scrollbar-thumb': {
                    backgroundColor: palette?.text?.secondary,
                },
                '& ::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: palette?.text?.secondary,
                },
            },
            body: {
                backgroundColor:
                    palette?.mode === CurrentTheme.Dark ? palette?.neutral?.black : palette?.neutral?.grey1,
                color: palette?.text?.primary,
            },
            a: {
                color: 'inherit',
            },
        },
    },
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: '8px',
                textTransform: 'none',
                padding: '8px 16px',
                minHeight: '36px',
                boxShadow: 'none',
                fontFamily: '"Alliance No.2", Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '20px',
                fontWeight: 500,
                letterSpacing: '0.5px',
                '&:hover': {
                    boxShadow: 'none',
                },
            },
            containedPrimary: {
                color: palette?.neutral?.white,
                backgroundColor: palette?.primaryColors?.accent,
                '&:hover': {
                    backgroundColor: palette?.primaryColors?.accentHover,
                },
                '&.Mui-disabled': {
                    color: palette?.text?.secondary,
                    backgroundColor: palette?.primaryColors?.accentLight,
                },
            },
            outlined: {
                borderColor: palette?.borders?.primary,
                color: palette?.text?.primary,
                '&:hover': {
                    borderColor: palette?.primaryColors?.accent,
                    backgroundColor: palette?.primaryColors?.accentLight,
                },
            },
            text: {
                color: palette?.primaryColors?.accent,
                '&:hover': {
                    backgroundColor: palette?.primaryColors?.accentLight,
                },
            },
        },
    },
    MuiSelect: {
        styleOverrides: {
            icon: {
                top: 'calc(50% - 12px)',
                transition: 'transform 200ms',
                color: palette?.text?.secondary,
            },
        },
    },
    MuiDialog: {
        styleOverrides: {
            paper: {
                borderRadius: '12px',
                backgroundImage: 'none',
                minWidth: '544px',
                padding: '32px',
                backgroundColor:
                    palette?.mode === CurrentTheme.Dark ? palette?.neutral?.grey1 : palette?.neutral?.white,
                border: `1px solid ${palette?.borders?.primary ?? 'transparent'}`,
                boxShadow: `0 8px 32px ${palette?.shadow ?? 'rgba(0,0,0,0.2)'}`,
            },
        },
    },
    MuiDialogTitle: {
        styleOverrides: {
            root: {
                fontSize: '24px',
                lineHeight: '29px',
                letterSpacing: '0.3px',
                padding: 0,
                marginBottom: '12px',
            },
        },
    },
    MuiDialogContent: {
        styleOverrides: {
            root: {
                fontFamily: '"Alliance No.2", Arial, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.2px',
                maxWidth: '330px',
                textAlign: 'center',
                padding: 0,
                marginBottom: '40px',
            },
        },
    },
    MuiDialogContentText: {
        styleOverrides: {
            root: {
                fontFamily: '"Alliance No.2", Arial, sans-serif',
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.2px',
            },
        },
    },
    MuiDialogActions: {
        styleOverrides: {
            root: {
                flexDirection: 'column',
                padding: 0,
                gap: '16px',
                width: '75%',
            },
        },
    },
    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                borderRadius: '8px',
                background: palette?.mode === CurrentTheme.Dark ? palette?.neutral?.grey1 : palette?.neutral?.white,
                border: `1px solid ${palette?.borders?.primary ?? 'transparent'}`,
                padding: '8px 16px',
                fontSize: '14px',
                lineHeight: '20px',
                color: palette?.text?.primary,
            },
            arrow: {
                color: palette?.mode === CurrentTheme.Dark ? palette?.neutral?.grey1 : palette?.neutral?.white,
            },
        },
    },
    MuiDivider: {
        styleOverrides: {
            root: {
                borderColor: palette?.borders?.primary,
            },
        },
    },
    MuiSnackbarContent: {
        styleOverrides: {
            root: {
                background: palette?.primaryColors?.accent,
                borderRadius: '12px',
                color: palette?.neutral?.white,
                fontFamily: '"Alliance No.2", Arial, sans-serif',
                fontSize: '13px',
                lineHeight: '20px',
                padding: '6px 8px 6px 20px',
                width: '100%',
                minHeight: '48px',
            },
            message: {
                padding: 0,
            },
            action: {
                marginRight: 0,
            },
        },
    },
    MuiAutocomplete: {
        defaultProps: {
            slotProps: {
                paper: {
                    sx: {
                        backgroundColor:
                            palette?.mode === CurrentTheme.Dark ? palette?.neutral?.grey1 : palette?.neutral?.white,
                        border: `1px solid ${palette?.borders?.primary ?? 'transparent'}`,
                        boxShadow: `0 8px 32px ${palette?.shadow ?? 'rgba(0,0,0,0.2)'}`,
                    },
                },
            },
        },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                backgroundColor:
                    palette?.mode === CurrentTheme.Dark ? palette?.neutral?.grey1 : palette?.neutral?.white,
                borderRadius: '12px',
                border: `1px solid ${palette?.borders?.primary ?? 'transparent'}`,
                boxShadow: 'none',
                backgroundImage: 'none',
            },
        },
    },
    MuiTableCell: {
        styleOverrides: {
            root: {
                borderColor: palette?.borders?.primary,
                color: palette?.text?.primary,
                fontSize: '14px',
                lineHeight: '20px',
                letterSpacing: '0.2px',
            },
            head: {
                color: palette?.text?.secondary,
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '0.4px',
                fontWeight: 400,
                backgroundColor:
                    palette?.mode === CurrentTheme.Dark ? palette?.neutral?.grey1 : palette?.neutral?.white,
            },
        },
    },
    MuiTableRow: {
        styleOverrides: {
            root: {
                '&:hover': {
                    backgroundColor: palette?.primaryColors?.accentLight,
                },
            },
        },
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                borderRadius: '8px',
                backgroundColor:
                    palette?.mode === CurrentTheme.Dark ? palette?.neutral?.grey1 : palette?.neutral?.white,
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: palette?.borders?.primary,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: palette?.primaryColors?.accent,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: palette?.primaryColors?.accent,
                },
            },
            input: {
                color: palette?.text?.primary,
            },
        },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundColor:
                    palette?.mode === CurrentTheme.Dark ? palette?.neutral?.grey1 : palette?.neutral?.white,
                backgroundImage: 'none',
            },
        },
    },
});
