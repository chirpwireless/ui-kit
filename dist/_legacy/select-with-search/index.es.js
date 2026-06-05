import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as w, FormControl as M, InputAdornment as l, MenuItem as k } from "@mui/material";
import { useState as T, useMemo as W } from "react";
import { InputLabel as z } from "../input-label/index.es.js";
import { Select as A, ListSubheader as E, MenuItemWrapper as b } from "./style.es.js";
import { SvgCloseIcon as F } from "../../close-icon-EPoneKrB.js";
import { IconButton as N } from "../icon-button/index.es.js";
import { TextField as R } from "../text-field/index.es.js";
import { SvgSearch as $ } from "../../search-C-ltufG_.js";
import { Loader as B } from "../loader/index.es.js";
const X = ({
  label: I,
  labelId: L,
  disabled: c,
  value: m,
  isLoading: C,
  onClear: p,
  collection: h = [],
  searchPlaceholder: v,
  endAdornment: u,
  MenuProps: o,
  ...x
}) => {
  var j;
  const d = w(), [i, f] = T(""), y = {
    ...o,
    MenuListProps: {
      ...o == null ? void 0 : o.MenuListProps,
      sx: {
        padding: 0,
        ...(j = o == null ? void 0 : o.MenuListProps) == null ? void 0 : j.sx
      }
    }
  }, g = W(() => {
    const { fullMatch: e, prefixMatch: r, partialMatch: S } = {
      fullMatch: [],
      prefixMatch: [],
      partialMatch: []
    };
    return h.forEach((n) => {
      const a = i.toLocaleLowerCase(), s = String(n.name).toLocaleLowerCase();
      a === s ? e.push(n) : s.startsWith(a) ? r.push(n) : s.includes(a) && S.push(n);
    }), [...e, ...r, ...S];
  }, [i, h]);
  return /* @__PURE__ */ t.jsxs(M, { fullWidth: !0, children: [
    /* @__PURE__ */ t.jsx(
      z,
      {
        labelId: L,
        label: I,
        className: x.error ? "Mui-error" : void 0,
        sx: {
          opacity: c ? 0.3 : 1,
          "&.MuiInputLabel-shrink": {
            transform: "none",
            left: 0,
            color: d.palette.text.titleInput,
            ...d.typography.caption12
          }
        }
      }
    ),
    /* @__PURE__ */ t.jsxs(
      A,
      {
        ...x,
        value: m,
        disabled: c,
        MenuProps: y,
        onClose: () => f(""),
        endAdornment: u || (p && m ? /* @__PURE__ */ t.jsx(l, { sx: { marginRight: "12px" }, position: "end", children: /* @__PURE__ */ t.jsx(N, { variant: "gray", onClick: p, children: /* @__PURE__ */ t.jsx(F, {}) }) }) : null),
        children: [
          /* @__PURE__ */ t.jsx(E, { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ t.jsx(
            R,
            {
              size: "small",
              value: i,
              placeholder: v,
              fullWidth: !0,
              onClick: (e) => e.stopPropagation(),
              InputProps: {
                startAdornment: /* @__PURE__ */ t.jsx(l, { position: "start", children: /* @__PURE__ */ t.jsx($, {}) }),
                endAdornment: C ? /* @__PURE__ */ t.jsx(l, { position: "end", children: /* @__PURE__ */ t.jsx(B, {}) }) : null
              },
              onChange: (e) => f(e.target.value),
              onKeyDown: (e) => {
                e.key !== "Escape" && e.stopPropagation();
              }
            }
          ) }),
          g.length ? g.map(({ badge: e, ...r }) => /* @__PURE__ */ t.jsx(k, { value: String(r.value), children: /* @__PURE__ */ t.jsxs(
            b,
            {
              width: "100%",
              direction: "row",
              justifyContent: "space-between",
              alignItems: "center",
              children: [
                String(r.name),
                e ? /* @__PURE__ */ t.jsx("span", { children: e }) : null
              ]
            }
          ) }, `${r.name}-${r.value}`)) : null
        ]
      }
    )
  ] });
};
export {
  X as SelectWithSearch
};
