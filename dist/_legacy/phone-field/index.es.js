import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { useMemo as g, useState as y, useEffect as E } from "react";
import { Select as z } from "../select/index.es.js";
import { useTheme as O, FormControl as $, alpha as d, InputAdornment as k, MenuItem as A, Box as B, Typography as I } from "@mui/material";
import { PhoneField as R } from "./styles.es.js";
import { applyMask as j, stripDialCode as W, getMaxLength as K } from "./helpers.es.js";
import { COUNTRIES as N } from "./constants.es.js";
import { SelectIndicator as U } from "../select-indicator/index.es.js";
import { useTranslation as q } from "react-i18next";
const b = ({
  value: c,
  onChange: m,
  countries: p,
  defaultCountry: P,
  PaperPropsSx: M,
  isDisabled: i = !1,
  ...v
}) => {
  const n = O(), { t: x } = q("uiKit", { keyPrefix: "PhoneField.countries" }), s = g(() => N(x), [x]), u = g(
    () => p.map((t) => ({ code: t, ...s[t] })),
    [p, s]
  ), L = (t) => {
    for (const e of u) {
      const { dialCode: l, code: w } = e, C = l.replace("+", "");
      if (t.startsWith(C))
        return {
          initialCountry: w,
          initialLocalValue: W(t, C)
        };
    }
    return {
      initialCountry: P || p[0],
      initialLocalValue: t
    };
  }, { initialCountry: h, initialLocalValue: S } = L(c), [a, V] = y(h), [r, f] = y(j(S, h)), F = (t) => {
    const e = t.target.value;
    V(e), f("");
  }, T = (t) => {
    const e = t.target.value.replace(/\D/g, ""), l = K(a);
    e.length <= l && f(j(e, a));
  };
  return E(() => {
    const e = `${s[a].dialCode.replace("+", "")}${r}`;
    e !== c && m(e);
  }, [a, r, m, s, c]), /* @__PURE__ */ o.jsx($, { fullWidth: !0, children: /* @__PURE__ */ o.jsx(
    R,
    {
      ...v,
      value: r,
      isDisabled: i,
      onChange: T,
      InputProps: {
        startAdornment: /* @__PURE__ */ o.jsx(k, { position: "start", children: /* @__PURE__ */ o.jsx(
          z,
          {
            value: a,
            onChange: F,
            displayEmpty: !0,
            renderValue: (t) => {
              const e = u.find((l) => l.code === t);
              return e ? e.dialCode : "";
            },
            IconComponent: U,
            MenuProps: {
              PaperProps: {
                ...M
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left"
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left"
              }
            },
            sx: {
              "& .MuiSelect-select": {
                color: r && !i ? n.palette.text.text1 : d(n.palette.text.textInput60, 0.6)
              },
              ".MuiSelect-icon": {
                color: r && !i ? n.palette.text.text1 + "!important" : d(n.palette.text.textInput60, 0.6) + "!important"
              }
            },
            children: u.map((t) => /* @__PURE__ */ o.jsx(A, { value: t.code, sx: { width: "100%" }, children: /* @__PURE__ */ o.jsxs(B, { display: "flex", alignItems: "center", gap: 1, children: [
              /* @__PURE__ */ o.jsx(I, { variant: "text13", children: t.name }),
              /* @__PURE__ */ o.jsx(I, { variant: "text13", style: { width: 40 }, children: t.dialCode })
            ] }) }, t.code))
          }
        ) }),
        sx: {
          "& .MuiInputBase-input": {
            color: r && !i ? n.palette.text.text1 : d(n.palette.text.textInput60, 0.6)
          }
        }
      }
    }
  ) });
};
export {
  b as PhoneField
};
