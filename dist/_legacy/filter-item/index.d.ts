export type FilterItemProps = {
    size?: 'small' | 'big';
    variant?: 'primary' | 'secondary';
    label: string;
    checked?: boolean;
    endAdornmentText?: string;
    onChange: () => void;
};
export declare const FilterItem: React.FC<FilterItemProps>;
