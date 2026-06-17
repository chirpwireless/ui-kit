import { CalendarToday as CalendarTodayIcon } from '@mui/icons-material';
import { FormControl, Popover, Typography, useTheme } from '@mui/material';
import type { Locale } from 'date-fns';
import { de, es, enUS, fr } from 'date-fns/locale';
import { ComponentProps, FC, MouseEvent, useState } from 'react';
import { Calendar as CalendarBase } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import { useTranslation } from 'react-i18next';

import { CurrentTheme } from '../../styles/constants';
import { chirpPalette } from '../../theme/palette';
import { InputLabel } from '../Select';
import { RangePickerWrapper } from '../RangePicker';

import * as S from './style';

// react-date-range ships a nested @types/react whose ReactNode is incompatible with this project's
// React types, so Calendar fails as a JSX element (TS2786). Re-type it against the project's React.
const Calendar = CalendarBase as unknown as FC<ComponentProps<typeof CalendarBase>>;

const localesMap: Record<string, Locale> = { en: enUS, de, es, fr };

type Props = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    minDate?: Date;
};

export const DatePicker = ({ label, value, onChange, minDate }: Props) => {
    const { i18n } = useTranslation();
    const theme = useTheme();
    const palette = chirpPalette(theme);
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const displayValue = value ? new Date(`${value}T00:00:00`).toLocaleDateString() : '';
    const calendarDate = value ? new Date(`${value}T00:00:00`) : undefined;

    const handleOpen = (e: MouseEvent<HTMLElement>) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDateChange = (date: Date) => {
        // Adjust for local timezone to avoid off-by-one day from UTC conversion
        const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
        onChange(localDate.toISOString().split('T')[0]);
        handleClose();
    };

    return (
        <FormControl fullWidth>
            {label ? (
                <InputLabel
                    label={label}
                    sx={{
                        '&.MuiInputLabel-shrink': {
                            fontSize: '14px',
                            lineHeight: '20px',
                            top: '8px',
                            left: '-12px',
                        },
                    }}
                />
            ) : null}

            <S.Trigger onClick={handleOpen}>
                <Typography
                    sx={{
                        fontSize: '13px',
                        lineHeight: '20px',
                        fontFamily: theme.typography.fontFamily,
                        color: displayValue ? palette.neutral.primary : palette.neutral.grey4,
                    }}
                >
                    {displayValue}
                </Typography>
                <CalendarTodayIcon sx={{ fontSize: 16, color: palette.neutral.grey4 }} />
            </S.Trigger>

            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                slotProps={{
                    paper: {
                        sx: {
                            mt: '4px',
                            backgroundColor:
                                theme.palette.mode === CurrentTheme.Dark
                                    ? palette.neutral.grey1
                                    : palette.neutral.white,
                            border: `1px solid ${palette.borders.primary}`,
                            borderRadius: '12px',
                            boxShadow: `0 8px 32px ${palette.shadow ?? 'rgba(0,0,0,0.14)'}`,
                        },
                    },
                }}
            >
                <RangePickerWrapper
                    sx={{
                        p: '16px',
                        '.rdrMonthAndYearPickers': { display: 'flex' },
                        '.rdrMonthAndYearWrapper': { marginTop: 0 },
                    }}
                >
                    <Calendar
                        date={calendarDate}
                        onChange={handleDateChange}
                        minDate={minDate}
                        locale={localesMap[i18n.language] ?? enUS}
                        weekStartsOn={1}
                    />
                </RangePickerWrapper>
            </Popover>
        </FormControl>
    );
};
