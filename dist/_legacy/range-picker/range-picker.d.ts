import { FC } from 'react';
import { QUICK_SELECT_OPTIONS } from './constants';
export interface RangePickerProps {
    initialStartDate?: Date;
    initialEndDate?: Date;
    withQuickSelect?: boolean;
    activeQuickSelectState?: keyof typeof QUICK_SELECT_OPTIONS | null;
    setActiveQuickSelectState?: (state: keyof typeof QUICK_SELECT_OPTIONS | null) => void;
    onClearDate: () => void;
    onDateChange: (after: string, before: string) => void;
    handleCloseCalendar: () => void;
}
export declare const RangePicker: FC<RangePickerProps>;
