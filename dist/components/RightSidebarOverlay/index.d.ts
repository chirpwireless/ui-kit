import { FC, PropsWithChildren } from 'react';
type Props = {
    isOpen: boolean;
    gutters?: boolean;
    onClose: () => void;
} & PropsWithChildren;
export declare const RightSidebarOverlay: FC<Props>;
export {};
