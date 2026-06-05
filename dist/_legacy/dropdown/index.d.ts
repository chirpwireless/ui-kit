import { FC, ReactNode, PropsWithChildren } from 'react';
interface IDropdownProps {
    isOpened?: boolean;
    anchorEl?: ReactNode;
}
export declare const Dropdown: FC<PropsWithChildren<IDropdownProps>>;
export {};
