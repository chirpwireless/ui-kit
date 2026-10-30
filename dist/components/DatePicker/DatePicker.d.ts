type Props = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    minDate?: Date;
};
export declare const DatePicker: ({ label, value, onChange, minDate }: Props) => import('react').JSX.Element;
export {};
