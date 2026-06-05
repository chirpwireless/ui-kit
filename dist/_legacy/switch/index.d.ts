import { FC } from 'react';
interface ISwitchProps {
    width?: string;
    activeText?: string;
    inactiveText?: string;
    checked?: boolean;
    onChange?: (val: boolean) => void;
}
export declare const Switch: FC<ISwitchProps>;
export {};
