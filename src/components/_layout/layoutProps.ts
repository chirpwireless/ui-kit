import type { CSSProperties } from 'react';

import type { CSSObject, Theme } from '@mui/material/styles';

export type LayoutProps = {
    gap?: number;
    p?: number;
    mb?: number;
    width?: CSSProperties['width'];
    minWidth?: CSSProperties['minWidth'];
    maxWidth?: CSSProperties['maxWidth'];
    height?: CSSProperties['height'];
    flex?: CSSProperties['flex'];
    flexGrow?: CSSProperties['flexGrow'];
    alignItems?: CSSProperties['alignItems'];
    justifyContent?: CSSProperties['justifyContent'];
    alignSelf?: CSSProperties['alignSelf'];
    position?: CSSProperties['position'];
    overflow?: CSSProperties['overflow'];
};

const LAYOUT_PROP_KEYS = Object.keys({
    gap: 0,
    p: 0,
    mb: 0,
    width: 0,
    minWidth: 0,
    maxWidth: 0,
    height: 0,
    flex: 0,
    flexGrow: 0,
    alignItems: 0,
    justifyContent: 0,
    alignSelf: 0,
    position: 0,
    overflow: 0,
} satisfies Record<keyof LayoutProps, unknown>);

export const shouldForwardLayoutProp = (prop: PropertyKey) => !LAYOUT_PROP_KEYS.includes(prop as string);

// gap/p/mb resolve through the theme spacing scale; the rest are raw CSS values.
export const layoutStyles = (theme: Theme, props: LayoutProps): CSSObject => ({
    ...(props.gap !== undefined && { gap: theme.spacing(props.gap) }),
    ...(props.p !== undefined && { padding: theme.spacing(props.p) }),
    ...(props.mb !== undefined && { marginBottom: theme.spacing(props.mb) }),
    ...(props.width !== undefined && { width: props.width }),
    ...(props.minWidth !== undefined && { minWidth: props.minWidth }),
    ...(props.maxWidth !== undefined && { maxWidth: props.maxWidth }),
    ...(props.height !== undefined && { height: props.height }),
    ...(props.flex !== undefined && { flex: props.flex }),
    ...(props.flexGrow !== undefined && { flexGrow: props.flexGrow }),
    ...(props.alignItems !== undefined && { alignItems: props.alignItems }),
    ...(props.justifyContent !== undefined && { justifyContent: props.justifyContent }),
    ...(props.alignSelf !== undefined && { alignSelf: props.alignSelf }),
    ...(props.position !== undefined && { position: props.position }),
    ...(props.overflow !== undefined && { overflow: props.overflow }),
});
