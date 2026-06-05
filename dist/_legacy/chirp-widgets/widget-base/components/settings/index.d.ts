import { FC } from 'react';
import { AttributeConfig, ValueBoundaries } from '../../../types';
type SettingsProps = {
    units: string;
    config: AttributeConfig;
    showGraph: boolean;
    showAlert: boolean;
    isBoundariesLoading: boolean;
    setValueBoundaries: (boundaries: ValueBoundaries) => void;
    setUnitsOfMeasurement: (value: string) => void;
    toggleAlertVisibility: () => void;
    toggleGraphVisibility?: () => void;
    onUnitsChange?: (shouldBeConverted: boolean) => void;
};
export declare const Settings: FC<SettingsProps>;
export {};
