import { AttributeConfig, Settings, ValueBoundaries } from '../types';
export declare const useWidgetSettings: (id: string, attr: string, config: AttributeConfig, onSettingsChange?: (settings: Settings) => void) => {
    showGraph: boolean;
    showAlert: boolean;
    unitsOfMeasurement: string;
    toggleAlertVisibility: () => void;
    toggleGraphVisibility: (() => void) | undefined;
    setUnitsOfMeasurement: (units: string) => void;
    setValueBoundaries: ({ from, to }: ValueBoundaries) => Promise<void>;
    isBoundariesLoading: boolean;
};
