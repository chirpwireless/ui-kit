import { PopoverOrigin } from '@mui/material';
import { FC, ReactElement, ReactNode } from 'react';
export interface MenuAction {
    icon: ReactNode;
    label: string;
    onClick: () => void;
    disabled?: boolean;
}
interface ActionsMenuProps {
    actions: MenuAction[];
    children: ReactElement;
    transformOrigin?: PopoverOrigin;
}
export declare const ActionsMenu: FC<ActionsMenuProps>;
export {};
