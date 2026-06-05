import { FC } from 'react';
export interface IColorListItemProps {
    color: string;
    name: string;
    value: number | null;
    onClick?: () => void;
}
export declare const ColorListItem: FC<IColorListItemProps>;
