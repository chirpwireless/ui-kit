import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { CalendarToday as y } from "@mui/icons-material";
import { useTheme as T, FormControl as C, Typography as S, Popover as j } from "@mui/material";
import { fr as D, es as b, de as k, enUS as m } from "date-fns/locale";
import { useState as w } from "react";
import { Calendar as z } from "react-date-range";
import { RangePickerWrapper as O } from "../RangePicker/RangePickerWrapper.es.js";
import { useTranslation as P } from "react-i18next";
import { CurrentTheme as $ } from "../../styles/constants.es.js";
import { chirpPalette as M } from "../../theme/palette.es.js";
import { InputLabel as A } from "../Select/components/InputLabel/index.es.js";
import "../Select/style.es.js";
import "../RangePicker/style.es.js";
import "../RangePicker/constants.es.js";
import { Trigger as E } from "./style.es.js";
const F = z, I = { en: m, de: k, es: b, fr: D }, X = ({ label: a, value: o, onChange: c, minDate: d }) => {
  const { i18n: h } = P(), n = T(), e = M(n), [i, l] = w(null), p = o ? (/* @__PURE__ */ new Date(`${o}T00:00:00`)).toLocaleDateString() : "", x = o ? /* @__PURE__ */ new Date(`${o}T00:00:00`) : void 0, f = (t) => {
    l(t.currentTarget);
  }, s = () => {
    l(null);
  }, g = (t) => {
    const u = new Date(t.getTime() - t.getTimezoneOffset() * 6e4);
    c(u.toISOString().split("T")[0]), s();
  };
  return /* @__PURE__ */ r.jsxs(C, { fullWidth: !0, children: [
    a ? /* @__PURE__ */ r.jsx(
      A,
      {
        label: a,
        sx: {
          "&.MuiInputLabel-shrink": {
            fontSize: "14px",
            lineHeight: "20px",
            top: "8px",
            left: "-12px"
          }
        }
      }
    ) : null,
    /* @__PURE__ */ r.jsxs(E, { onClick: f, children: [
      /* @__PURE__ */ r.jsx(
        S,
        {
          sx: {
            fontSize: "13px",
            lineHeight: "20px",
            fontFamily: n.typography.fontFamily,
            color: p ? e.neutral.primary : e.neutral.grey4
          },
          children: p
        }
      ),
      /* @__PURE__ */ r.jsx(y, { sx: { fontSize: 16, color: e.neutral.grey4 } })
    ] }),
    /* @__PURE__ */ r.jsx(
      j,
      {
        open: !!i,
        anchorEl: i,
        onClose: s,
        anchorOrigin: { vertical: "bottom", horizontal: "left" },
        transformOrigin: { vertical: "top", horizontal: "left" },
        slotProps: {
          paper: {
            sx: {
              mt: "4px",
              backgroundColor: n.palette.mode === $.Dark ? e.neutral.grey1 : e.neutral.white,
              border: `1px solid ${e.borders.primary}`,
              borderRadius: "12px",
              boxShadow: `0 8px 32px ${e.shadow ?? "rgba(0,0,0,0.14)"}`
            }
          }
        },
        children: /* @__PURE__ */ r.jsx(
          O,
          {
            sx: {
              p: "16px",
              ".rdrMonthAndYearPickers": { display: "flex" },
              ".rdrMonthAndYearWrapper": { marginTop: 0 }
            },
            children: /* @__PURE__ */ r.jsx(
              F,
              {
                date: x,
                onChange: g,
                minDate: d,
                locale: I[h.language] ?? m,
                weekStartsOn: 1
              }
            )
          }
        )
      }
    )
  ] });
};
export {
  X as DatePicker
};
