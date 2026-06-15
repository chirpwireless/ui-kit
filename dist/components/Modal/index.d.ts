import { FC, ReactNode } from 'react';
type Props = {
    title: string;
    description: string;
    actionComponent: ReactNode;
    /** Brand/visual icon shown at the top. App supplies the variant (ChirpModalIcon / KiloModalIcon / custom). */
    icon?: ReactNode;
};
export declare const Modal: FC<Props>;
export {};
