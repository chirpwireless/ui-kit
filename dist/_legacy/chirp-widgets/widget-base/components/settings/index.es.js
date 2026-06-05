import { jsxRuntimeExports as e } from "../../../../../jsx-runtime-BgepH7Pb.js";
import { ClickAwayListener as S, Stack as T } from "@mui/material";
import { useState as I, useEffect as b } from "react";
import { converter as C } from "../../../graphic-widget/converter.es.js";
import { SettingsItem as a, UnitsOfMeasurementWrapper as w } from "../../style.es.js";
import { ValueBoundariesForm as L } from "./value-boundaries-form/index.es.js";
import { ManageIcon as F } from "../../../../../assets/icons/ManageIcon/index.es.js";
import { WidgetToggle as h } from "../../../../widget-toggle/index.es.js";
import { FilterItem as f } from "../../../../filter-item/index.es.js";
import { IconButton as W } from "../../../../icon-button/index.es.js";
import { Tooltip as z } from "../../../../tooltip/index.es.js";
import { Typography as s } from "../../../../typogrpahy/index.es.js";
import { useTranslation as B } from "react-i18next";
const V = ({
  showGraph: l,
  showAlert: m,
  isBoundariesLoading: u,
  units: n,
  config: t,
  setValueBoundaries: j,
  setUnitsOfMeasurement: v,
  toggleAlertVisibility: y,
  toggleGraphVisibility: p,
  onUnitsChange: i
}) => {
  const { t: o } = B("uiKit", { keyPrefix: "widgets" }), [k, x] = I(!1), r = C[t.units], g = () => {
    x(!1);
  }, O = () => {
    x(!0);
  }, c = (d) => {
    i && i(r && d !== t.units), v(d);
  };
  return b(() => {
    i && i(r && n !== t.units);
  }, [t.units, i, n, r]), /* @__PURE__ */ e.jsx(
    z,
    {
      disableHoverListener: !0,
      open: k,
      placement: "bottom-end",
      sx: { display: "inline-flex" },
      title: /* @__PURE__ */ e.jsx(S, { onClickAway: g, children: /* @__PURE__ */ e.jsxs(T, { minWidth: "240px", py: "10px", children: [
        r && /* @__PURE__ */ e.jsxs(a, { children: [
          /* @__PURE__ */ e.jsx(s, { color: "text.text3", variant: "caption12", children: o("Units of measurement") }),
          /* @__PURE__ */ e.jsxs(
            w,
            {
              direction: "row",
              spacing: "4px",
              alignItems: "center",
              ml: "16px",
              children: [
                /* @__PURE__ */ e.jsx(
                  f,
                  {
                    onChange: () => c(t.units),
                    label: t.units,
                    checked: n === t.units,
                    variant: "primary"
                  }
                ),
                /* @__PURE__ */ e.jsx(
                  f,
                  {
                    checked: n === r.alternativeUnits,
                    onChange: () => c(r.alternativeUnits),
                    label: r.alternativeUnits,
                    variant: "primary"
                  }
                )
              ]
            }
          )
        ] }),
        p && /* @__PURE__ */ e.jsxs(a, { children: [
          /* @__PURE__ */ e.jsx(s, { color: "text.text3", variant: "caption12", children: o("Show graph") }),
          /* @__PURE__ */ e.jsx(
            h,
            {
              name: "show-graph",
              label: o(l ? "On" : "Off"),
              checked: l,
              isLoading: !1,
              onChange: p
            }
          )
        ] }),
        /* @__PURE__ */ e.jsx(a, { children: /* @__PURE__ */ e.jsx(
          L,
          {
            isLoading: u,
            valueFrom: t.valueFrom,
            valueTo: t.valueTo,
            onSave: j,
            units: n
          }
        ) }),
        t.type === "boolean" && /* @__PURE__ */ e.jsxs(a, { children: [
          /* @__PURE__ */ e.jsx(s, { color: "text.text3", variant: "caption12", children: "Show alert" }),
          /* @__PURE__ */ e.jsx(
            h,
            {
              name: "show-alert",
              label: o(m ? "On" : "Off"),
              checked: m,
              isLoading: !1,
              onChange: y
            }
          )
        ] })
      ] }) }),
      children: /* @__PURE__ */ e.jsx(
        W,
        {
          size: "small",
          variant: "gray",
          sx: {
            alignSelf: "flex-start",
            zIndex: 10,
            "&:hover": { color: "text.text4" },
            padding: 0
          },
          onClick: O,
          children: /* @__PURE__ */ e.jsx(F, {})
        }
      )
    }
  );
};
export {
  V as Settings
};
