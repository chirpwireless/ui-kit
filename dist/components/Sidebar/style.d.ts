import { Theme } from '@mui/material';
import { ElementType } from 'react';
interface DrawerProps {
    isOpen?: boolean;
    isCollapsed?: boolean;
}
export declare const SidebarDrawer: import('@emotion/styled').StyledComponent<import('@mui/material').DrawerProps & import('@mui/system').MUIStyledCommonProps<Theme> & DrawerProps, {}, {}>;
export declare const AppLogo: import('@emotion/styled').StyledComponent<import('@mui/system').BoxOwnProps<Theme> & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('@mui/system').BoxOwnProps<Theme>> & import('@mui/system').MUIStyledCommonProps<Theme>, {}, {}>;
export declare const LogoWrap: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<Theme>, import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const LogoCollapsedWrap: import('@emotion/styled').StyledComponent<import('@mui/material').StackOwnProps & import('../../../node_modules/@mui/material/OverridableComponent').CommonProps & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('../../../node_modules/@mui/material/OverridableComponent').CommonProps | keyof import('@mui/material').StackOwnProps> & import('@mui/system').MUIStyledCommonProps<Theme>, {}, {}>;
export declare const SideBarToggledWrap: import('@emotion/styled').StyledComponent<import('@mui/system').BoxOwnProps<Theme> & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('@mui/system').BoxOwnProps<Theme>> & import('@mui/system').MUIStyledCommonProps<Theme>, {}, {}>;
export declare const SidebarItemBox: import('@emotion/styled').StyledComponent<import('@mui/system').BoxOwnProps<Theme> & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('@mui/system').BoxOwnProps<Theme>> & import('@mui/system').MUIStyledCommonProps<Theme> & {
    isActive?: boolean;
}, {}, {}>;
export declare const List: import('@emotion/styled').StyledComponent<import('@mui/material').ListOwnProps & Omit<import('@mui/material').ListOwnProps, keyof import('@mui/material').ListOwnProps> & import('../../../node_modules/@mui/material/OverridableComponent').CommonProps & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "className" | "style" | "classes" | "children" | "sx" | "subheader" | "dense" | "disablePadding"> & import('@mui/system').MUIStyledCommonProps<Theme>, {}, {}>;
export declare const ListItem: import('@emotion/styled').StyledComponent<import('@mui/material').ListItemOwnProps & import('../../../node_modules/@mui/material/OverridableComponent').CommonProps & Omit<import('react').DetailedHTMLProps<import('react').LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "alignItems" | "className" | "style" | "classes" | "children" | "sx" | "slots" | "slotProps" | "disableGutters" | "dense" | "disablePadding" | "divider" | "secondaryAction"> & import('@mui/system').MUIStyledCommonProps<Theme>, {}, {}>;
export declare const ListChildItem: import('@emotion/styled').StyledComponent<import('@mui/material').ListItemOwnProps & import('../../../node_modules/@mui/material/OverridableComponent').CommonProps & Omit<import('react').DetailedHTMLProps<import('react').LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, "alignItems" | "className" | "style" | "classes" | "children" | "sx" | "slots" | "slotProps" | "disableGutters" | "dense" | "disablePadding" | "divider" | "secondaryAction"> & import('@mui/system').MUIStyledCommonProps<Theme> & {
    noPadding?: boolean;
}, {}, {}>;
interface LinkBoxProps {
    isSidebarCollapsed?: boolean;
    disabled?: boolean;
    component?: ElementType;
    href?: string;
    target?: string;
    rel?: string;
}
export declare const LinkBox: import('@emotion/styled').StyledComponent<import('@mui/system').BoxOwnProps<Theme> & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('@mui/system').BoxOwnProps<Theme>> & import('@mui/system').MUIStyledCommonProps<Theme> & LinkBoxProps, {}, {}>;
export declare const MenuParentItem: import('@emotion/styled').StyledComponent<import('@mui/material').StackOwnProps & import('../../../node_modules/@mui/material/OverridableComponent').CommonProps & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('../../../node_modules/@mui/material/OverridableComponent').CommonProps | keyof import('@mui/material').StackOwnProps> & import('@mui/system').MUIStyledCommonProps<Theme>, {}, {}>;
export declare const DropdownIconWrapper: import('@emotion/styled').StyledComponent<import('@mui/system').BoxOwnProps<Theme> & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof import('@mui/system').BoxOwnProps<Theme>> & import('@mui/system').MUIStyledCommonProps<Theme> & {
    isOpen?: boolean;
}, {}, {}>;
export declare const LinkText: import('@emotion/styled').StyledComponent<import('@mui/material').TypographyOwnProps & import('../../../node_modules/@mui/material/OverridableComponent').CommonProps & Omit<import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, "color" | "className" | "style" | "classes" | "children" | "sx" | "variant" | "align" | "gutterBottom" | "noWrap" | "variantMapping"> & import('@mui/system').MUIStyledCommonProps<Theme>, {}, {}>;
export declare const Footer: import('@emotion/styled').StyledComponent<import('@mui/system').MUIStyledCommonProps<Theme>, import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
export {};
