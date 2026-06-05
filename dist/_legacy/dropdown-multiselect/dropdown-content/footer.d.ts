import { FC } from 'react';
interface IDropdownFooterProps {
    selectedCount?: number;
    onAccept: () => void;
    onClear: () => void;
}
export declare const DropdownFooter: FC<IDropdownFooterProps>;
export {};
