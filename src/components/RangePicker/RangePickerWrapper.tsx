import { styled, Stack } from '@mui/material';
import 'react-date-range/dist/styles.css';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';

const replaceRgbaOpacity = (rgba: string, opacity: number): string => {
    const match = rgba.match(/^rgba?\(([^)]+)\)$/);

    if (!match) return rgba;

    const [r, g, b] = match[1].split(',').map((part) => part.trim());

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const RangePickerWrapper = styled(Stack)(({ theme }) => {
    const palette = chirpPalette(theme);
    const surface = theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white;

    return {
        '.rdrCalendarWrapper': {
            color: palette.neutral.primary,
            background: 'transparent',
            fontSize: '12px',
            width: '100%',
            maxWidth: '264px',
        },
        '.rdrDateDisplayWrapper': {
            background: 'transparent',
        },
        '.rdrDateRangeWrapper': {
            background: 'transparent',
        },
        '.rdrDateInput': {
            width: '132px',
        },
        '.rdrDateDisplay': {
            margin: '0',
            display: 'flex',
            gap: '16px',
            justifyContent: 'flex-start',
        },
        '.rdrDateDisplayItem': {
            borderRadius: '4px',
            backgroundColor: 'transparent',
            boxShadow: '0 1px 2px 0 rgba(35, 57, 66, 0.21)',
            border: '1px solid transparent',
            flexGrow: 'unset',
            minWidth: '100px',
        },
        '.rdrDateDisplayItem + .rdrDateDisplayItem': {
            margin: '0',
        },
        '.rdrDateDisplayItem input': {
            cursor: 'pointer',
            height: '36px',
            lineHeight: '20px',
            border: 'none',
            fontSize: '13px',
            borderRadius: '8px',
            backgroundColor: surface,
            width: '100%',
            color: palette.neutral.primary,
            fontFamily: theme.typography.fontFamily,
        },
        '.rdrMonthAndYearWrapper': {
            alignItems: 'center',
            paddingTop: '0',
            marginTop: '28px',
            marginBottom: '12px',
        },
        '.rdrMonthAndYearPickers': {
            display: 'none',
        },
        '.rdrMonthAndYearPickers select': {
            MozAppearance: 'none',
            appearance: 'none',
            WebkitAppearance: 'none',
            border: '0',
            background: 'transparent',
            padding: '10px 30px 10px 10px',
            borderRadius: '4px',
            outline: '0',
            color: palette.neutral.primary,
            backgroundPosition: 'right 8px center',
            cursor: 'pointer',
            textAlign: 'center',
        },
        '.rdrMonthAndYearPickers select:hover': {
            backgroundColor: palette.primaryColors.accentLight2,
        },
        '.rdrMonthPicker, .rdrYearPicker': {
            margin: '0 5px',
        },
        '.rdrNextPrevButton': {
            display: 'block',
            width: '28px',
            height: '28px',
            margin: '0',
            padding: '0',
            border: '0',
            borderRadius: '5px',
            background: surface,

            i: {
                display: 'block',
                width: '0',
                height: '0',
                padding: '0',
                textAlign: 'center',
                margin: 'auto',
                transform: 'translate(-3px, 0px)',
                position: 'relative',
            },
        },
        '.rdrNextPrevButton:hover': {
            backgroundColor: palette.primaryColors.accentLight2,

            i: {
                border: 'none',
            },
        },
        '.rdrPprevButton i': {
            '&:after': {
                content: '""',
                position: 'absolute',
                top: '-3px',
                left: '-1px',
                width: '5px',
                height: '5px',
                border: `solid ${palette.neutral.primary}`,
                borderWidth: '0 2px 2px 0',
                transform: 'rotate(135deg)',
            },
        },
        '.rdrNextButton i': {
            '&:after': {
                content: '" "',
                position: 'absolute',
                top: '-3px',
                left: '0',
                width: '5px',
                height: '5px',
                border: `solid ${palette.neutral.primary}`,
                borderWidth: '0 2px 2px 0',
                transform: 'rotate(-45deg)',
            },
        },
        '.rdrWeekDays': {
            marginBottom: '8px',

            '.rdrWeekDay': {
                color: palette.neutral.grey4,
            },
        },
        '.rdrMonth': {
            padding: '0',
            position: 'relative',

            '&:first-of-type': {
                '.rdrMonthName': {
                    position: 'absolute',
                    width: '176px',
                    left: '41px',
                    top: '-35px !important',
                    color: palette.neutral.primary,
                    textAlign: 'center',
                },
            },
            '&:last-of-type': {
                '.rdrMonthName': {
                    position: 'absolute',
                    width: '176px',
                    right: '50px',
                    top: '-35px',
                    color: palette.neutral.primary,
                    textAlign: 'center',
                },
            },
        },
        '.rdrMonth .rdrWeekDays': {
            padding: '0',
        },
        '.rdrMonths.rdrMonthsHorizontal': {
            gap: '16px',
        },
        '.rdrDays': {
            gap: '2px',
        },
        '.rdrDay': {
            background: surface,
            boxSizing: 'inherit',
            width: 'calc((100% / 7) - 2px)',
            height: '28px',
            position: 'relative',
            font: 'inherit',
            cursor: 'pointer',
            borderRadius: '3px',
            border: `1px solid ${surface}`,

            '&.rdrDayPassive': {
                opacity: '0',
            },

            '&.rdrDayHovered': {
                border: `1px solid ${palette.primaryColors.accent}`,
            },

            '.rdrDayNumber span': {
                color: palette.neutral.primary,
            },

            '&.rdrDayDisabled:not(.rdrDayToday)': {
                cursor: 'not-allowed',
                background: replaceRgbaOpacity(surface, 0.3),
                borderColor: 'transparent',
                '.rdrDayNumber span': {
                    color: replaceRgbaOpacity(palette.neutral.primary, 0.3),
                },
            },

            '&.rdrDayDisabled': {
                backgroundColor: 'transparent',
            },
        },

        '.rdrDayToday .rdrDayNumber span::after': {
            background: `${palette.primaryColors.accent} !important`,
        },

        '.rdrDayPassive .rdrDayNumber span': {
            color: palette.neutral.grey4,
        },

        '.rdrMonthName': {
            color: palette.neutral.primary,
        },

        // Override default hover effect for Calendar (non-range) mode
        '.rdrCalendarWrapper:not(.rdrDateRangeWrapper) .rdrDayHovered .rdrDayNumber::after': {
            borderColor: palette.primaryColors.accent,
        },

        '.rdrDayStartPreview, .rdrDayInPreview, .rdrDayEndPreview': {
            background: replaceRgbaOpacity(palette.primaryColors.accent, 0.2),
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: 'none',
            zIndex: 1,
            borderRadius: '3px',
        },

        '.rdrSelected, .rdrInRange': {
            background: replaceRgbaOpacity(palette.primaryColors.accent, 0.2),
            position: 'absolute',
            top: '0',
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '3px',
        },
        '.rdrStartEdge, .rdrEndEdge': {
            background: palette.primaryColors.accent,
            position: 'absolute',
            top: '0',
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '3px',
        },
    };
});

export const MobileDateInput = styled('input')(({ theme }) => {
    const palette = chirpPalette(theme);

    return {
        padding: '8px 16px',
        cursor: 'pointer',
        height: '36px',
        lineHeight: '20px',
        border: 'none',
        fontSize: '13px',
        borderRadius: '8px',
        backgroundColor: theme.palette.mode === CurrentTheme.Dark ? palette.neutral.grey1 : palette.neutral.white,
        width: '100%',
        color: palette.neutral.primary,
        fontFamily: theme.typography.fontFamily,
        '&::-webkit-calendar-picker-indicator': {
            filter: theme.palette.mode === CurrentTheme.Dark ? 'invert(0.7)' : 'none',
        },
    };
});
