import { PropsWithChildren } from 'react';
export interface IDropdownMenuProps<T> {
    items: T[];
    isOpened?: boolean;
    gap?: string;
    onOpen: () => void;
    onClose: () => void;
    onSelect?: (val: T) => void;
    resolveTitle: (val: T) => string;
}
export declare const DropdownMenu: <T>({ children, isOpened, onClose, items, resolveTitle, gap, }: PropsWithChildren<IDropdownMenuProps<T>>) => import("react/jsx-runtime").JSX.Element;
