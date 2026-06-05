interface IDropdownMultiselectProps<T> {
    title: string;
    width: string;
    options: T[];
    idKey: keyof T;
    nameKey: keyof T;
    selectedOptions: T[];
    onAccept: (arr: T[]) => void;
    onClear: () => void;
}
export declare const DropdownMultiselect: <T extends Record<keyof T, unknown>>({ title, width, selectedOptions, options, idKey, nameKey, onAccept, onClear, }: IDropdownMultiselectProps<T>) => import("react/jsx-runtime").JSX.Element;
export {};
