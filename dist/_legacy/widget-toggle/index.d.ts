import { ChangeEvent } from 'react';
type Props = {
    name: string;
    label?: string;
    isLoading: boolean;
    checked: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
declare const WidgetToggle: ({ name, label, checked, isLoading, onChange }: Props) => import("react/jsx-runtime").JSX.Element;
declare const WidgetMobileToggle: ({ name, label, checked, isLoading, onChange }: Props) => import("react/jsx-runtime").JSX.Element;
export { WidgetToggle, WidgetMobileToggle };
