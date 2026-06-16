import { styled as e, Stack as d } from "@mui/material";
const p = ["gap", "width", "minWidth", "maxWidth", "flex", "overflow"], v = (o) => !p.includes(o), r = e(d, { shouldForwardProp: v })(
  ({ theme: o, gap: n, width: c, minWidth: i, maxWidth: t, flex: s, overflow: a }) => ({
    flexDirection: "row",
    alignItems: "center",
    gap: n ? o.spacing(n) : o.spacing(2),
    ...c !== void 0 && { width: c },
    ...i !== void 0 && { minWidth: i },
    ...t !== void 0 && { maxWidth: t },
    ...s !== void 0 && { flex: s },
    ...a !== void 0 && { overflow: a }
  })
), l = e(r)(() => ({
  justifyContent: "center"
})), u = e(r)(() => ({
  justifyContent: "space-between"
})), S = e(d, { shouldForwardProp: v })(
  ({ theme: o, gap: n, width: c, minWidth: i, maxWidth: t, flex: s, overflow: a }) => ({
    flexDirection: "column",
    alignItems: "center",
    gap: n ? o.spacing(n) : o.spacing(2),
    ...c !== void 0 && { width: c },
    ...i !== void 0 && { minWidth: i },
    ...t !== void 0 && { maxWidth: t },
    ...s !== void 0 && { flex: s },
    ...a !== void 0 && { overflow: a }
  })
), k = e(d, { shouldForwardProp: v })(
  ({ theme: o, gap: n, width: c, minWidth: i, maxWidth: t, flex: s, overflow: a }) => ({
    flexDirection: "column",
    alignItems: "flex-start",
    gap: n ? o.spacing(n) : o.spacing(2),
    ...c !== void 0 && { width: c },
    ...i !== void 0 && { minWidth: i },
    ...t !== void 0 && { maxWidth: t },
    ...s !== void 0 && { flex: s },
    ...a !== void 0 && { overflow: a }
  })
);
export {
  S as StackColumn,
  k as StackColumnS,
  r as StackRow,
  u as StackRowJB,
  l as StackRowJC
};
