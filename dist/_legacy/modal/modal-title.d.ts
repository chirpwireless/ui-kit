import { FC } from 'react';
interface IModalTitleProps {
    title: string;
    subTitle?: string;
    margin?: string;
    size?: 'mini' | 'big';
    subTitleWidth?: string;
}
export declare const ModalTitle: FC<IModalTitleProps>;
export {};
