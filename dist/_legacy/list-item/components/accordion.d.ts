import { AccordionProps, ListItemProps as MUIListItemProps } from '@mui/material';
import { FC } from 'react';
import { ICheckboxProps } from '../../checkbox';
interface IAccordionProps extends MUIListItemProps {
    title: string;
    key: string | number;
    accordionProps?: Omit<AccordionProps, 'children'>;
    checkboxProps?: Omit<ICheckboxProps, 'label'>;
}
export declare const AccordionItem: FC<IAccordionProps>;
export {};
