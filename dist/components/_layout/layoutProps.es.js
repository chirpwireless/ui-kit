const n = Object.keys({
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
  overflow: 0
}), d = (t) => !n.includes(t), e = (t, i) => ({
  ...i.gap !== void 0 && { gap: t.spacing(i.gap) },
  ...i.p !== void 0 && { padding: t.spacing(i.p) },
  ...i.mb !== void 0 && { marginBottom: t.spacing(i.mb) },
  ...i.width !== void 0 && { width: i.width },
  ...i.minWidth !== void 0 && { minWidth: i.minWidth },
  ...i.maxWidth !== void 0 && { maxWidth: i.maxWidth },
  ...i.height !== void 0 && { height: i.height },
  ...i.flex !== void 0 && { flex: i.flex },
  ...i.flexGrow !== void 0 && { flexGrow: i.flexGrow },
  ...i.alignItems !== void 0 && { alignItems: i.alignItems },
  ...i.justifyContent !== void 0 && { justifyContent: i.justifyContent },
  ...i.alignSelf !== void 0 && { alignSelf: i.alignSelf },
  ...i.position !== void 0 && { position: i.position },
  ...i.overflow !== void 0 && { overflow: i.overflow }
});
export {
  e as layoutStyles,
  d as shouldForwardLayoutProp
};
