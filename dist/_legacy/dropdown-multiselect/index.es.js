import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as h, useEffect as L, useMemo as P } from "react";
import { Box as S, Paper as T, Stack as j } from "@mui/material";
import { Dropdown as A } from "../dropdown/index.es.js";
import { MultiselectDropdownButton as B } from "./dropdown-button/dropdown-button.es.js";
import { Checkbox as $ } from "../checkbox/index.es.js";
import { DropdownFooter as F } from "./dropdown-content/footer.es.js";
import { SearchInput as R } from "../search-input/index.es.js";
import { useDebounce as V } from "../../hooks/use-debounce.es.js";
import { useTranslation as _ } from "react-i18next";
const W = ({
  title: k = "",
  width: i = "230px",
  selectedOptions: n = [],
  options: f = [],
  idKey: t,
  nameKey: s,
  onAccept: g,
  onClear: b
}) => {
  var C;
  const { t: w } = _("uiKit", { keyPrefix: "DropdownMultiselect" }), [u, c] = h(!1), [x, D] = h(""), [l, p] = h({
    array: [],
    map: {}
  }), d = V(x);
  L(() => {
    if (!n) return;
    const r = n.reduce(
      (a, o) => ({ ...a, [o[t]]: !0 }),
      {}
    );
    p({ array: n, map: r });
  }, [t, n]);
  const y = (r, a) => {
    p(a ? (o) => ({
      array: [...o.array, r],
      map: { ...o.map, [r[t]]: !0 }
    }) : (o) => ({
      array: o.array.filter((m) => m[t] !== r[t]),
      map: { ...o.map, [r[t]]: !1 }
    }));
  }, I = () => {
    g(l.array), c(!1);
  }, M = () => {
    b(), c(!1);
  }, E = P(
    () => f.filter(
      (r) => String(r[s]).toString().toLowerCase().includes(d.toLowerCase())
    ),
    [f, s, d]
  );
  return /* @__PURE__ */ e.jsx(S, { width: i, children: /* @__PURE__ */ e.jsx(
    A,
    {
      isOpened: u,
      anchorEl: /* @__PURE__ */ e.jsx(B, { title: k, onClick: () => c(!u) }),
      children: /* @__PURE__ */ e.jsx(T, { children: /* @__PURE__ */ e.jsxs(j, { width: i, children: [
        /* @__PURE__ */ e.jsx(S, { p: 4, children: /* @__PURE__ */ e.jsxs(j, { gap: 4, children: [
          /* @__PURE__ */ e.jsx(
            R,
            {
              value: x,
              onChange: D,
              placeholder: w("Search by name")
            }
          ),
          E.map((r, a) => /* @__PURE__ */ e.jsx(
            $,
            {
              variant: "check",
              label: r[s],
              checked: !!l.map[r[t]],
              onChange: (o, m) => y(r, m),
              labelTypographyVariant: "body1",
              formControlLabelProps: {
                sx: {
                  color: "text.text4"
                }
              },
              sx: {
                height: "26px"
              }
            },
            `${a}-${r[t]}`
          ))
        ] }) }),
        /* @__PURE__ */ e.jsx(
          F,
          {
            selectedCount: (C = l.array) == null ? void 0 : C.length,
            onAccept: I,
            onClear: M
          }
        )
      ] }) })
    }
  ) });
};
export {
  W as DropdownMultiselect
};
