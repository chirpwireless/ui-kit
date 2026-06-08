import { LinkProps as MuiLinkProps } from '@mui/material';
import { FC } from 'react';
import { LinkProps as RouterLinkProps } from 'react-router-dom';
type CustomLinkProps = Omit<MuiLinkProps, 'href'> & RouterLinkProps & {
    href?: string;
};
export declare const RouterLink: FC<CustomLinkProps>;
export {};
