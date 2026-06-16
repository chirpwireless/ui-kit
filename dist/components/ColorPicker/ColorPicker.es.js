import { jsxRuntimeExports as e } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as v, FormControl as R, Stack as w, Box as h, Popover as z } from "@mui/material";
import { useState as j } from "react";
import { CurrentTheme as u } from "../../styles/constants.es.js";
import { chirpPalette as m } from "../../theme/palette.es.js";
import { StackRow as y } from "../Stacks/index.es.js";
import { InputLabel as S } from "../Select/components/InputLabel/index.es.js";
import "../Select/style.es.js";
const I = (o) => !!o, O = {
  top: { vertical: "top", horizontal: "center" },
  bottom: { vertical: "bottom", horizontal: "center" },
  left: { vertical: "center", horizontal: "left" },
  right: { vertical: "center", horizontal: "right" }
}, B = {
  top: { vertical: "bottom", horizontal: "center" },
  bottom: { vertical: "top", horizontal: "center" },
  left: { vertical: "center", horizontal: "right" },
  right: { vertical: "center", horizontal: "left" }
}, N = (o) => {
  const r = m(o);
  return [
    o.palette.mode === u.Dark ? r.neutral.grey1 : r.neutral.white,
    o.palette.primary.main,
    r.neutral.primary,
    r.neutral.grey4,
    r.alerts.success,
    r.alerts.alert,
    r.alerts.warning,
    r.additionalColors.blue,
    r.additionalColors.lightBlue,
    r.additionalColors.purple,
    r.additionalColors.pink
  ].filter(I);
}, L = ({ value: o, onChange: r, title: x = "Color", placement: l = "top", hideTitle: a = !1, sx: g }) => {
  const n = v(), i = m(n), C = N(n), [s, c] = j(null), b = (t) => {
    c(t.currentTarget);
  }, p = () => {
    c(null);
  }, f = (t) => {
    r(t), p();
  }, k = !!s, d = n.palette.mode === u.Dark ? i.neutral.grey1 : i.neutral.white;
  return /* @__PURE__ */ e.jsxs(R, { fullWidth: !0, children: [
    /* @__PURE__ */ e.jsx(
      S,
      {
        label: a ? "" : x,
        sx: {
          "&.MuiInputLabel-shrink": {
            fontSize: "14px",
            lineHeight: "20px",
            top: "8px",
            left: "-12px"
          }
        }
      }
    ),
    /* @__PURE__ */ e.jsx(
      w,
      {
        direction: "row",
        onClick: b,
        sx: {
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          minWidth: "40px",
          height: "36px",
          backgroundColor: d,
          border: `1px solid ${i.borders.primary}`,
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: a ? 0 : "16px",
          boxSizing: "border-box",
          "&:hover": {
            borderColor: i.primaryColors.accent
          },
          ...g
        },
        children: /* @__PURE__ */ e.jsx(
          h,
          {
            sx: {
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              backgroundColor: o
            }
          }
        )
      }
    ),
    /* @__PURE__ */ e.jsx(
      z,
      {
        open: k,
        anchorEl: s,
        onClose: p,
        anchorOrigin: O[l],
        transformOrigin: B[l],
        slotProps: {
          paper: {
            sx: {
              backgroundColor: d,
              borderRadius: "8px",
              padding: "8px",
              boxShadow: n.shadows[8]
            }
          }
        },
        children: /* @__PURE__ */ e.jsx(y, { gap: 2, children: C.map((t) => /* @__PURE__ */ e.jsx(
          h,
          {
            sx: {
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              backgroundColor: t,
              cursor: "pointer",
              transition: "transform 0.15s ease",
              "&:hover": {
                transform: "scale(1.15)"
              }
            },
            onClick: () => f(t)
          },
          t
        )) })
      }
    )
  ] });
};
export {
  L as ColorPicker
};
