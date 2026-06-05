import { ListItemProps as MUIListItemProps } from '@mui/material';
import { FC } from 'react';
import { ICheckboxProps } from '../../checkbox';
interface IListItemProps extends MUIListItemProps {
    title: string;
    subTitle?: string;
    checkboxProps?: Omit<ICheckboxProps, 'label'>;
}
export declare const BaseListItem: FC<IListItemProps>;
export {};
