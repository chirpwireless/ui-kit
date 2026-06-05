import { jsxRuntimeExports as t } from "../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as Z, Stack as c, Box as m } from "@mui/material";
import { lodashExports as $ } from "../../../lodash-DMsYbvmB.js";
import { useState as tt, useMemo as j } from "react";
import { CurrentValue as et } from "../current-value/index.es.js";
import { calculateValues as ot } from "../helpers/index.es.js";
import { SwitchViewButton as rt } from "../switch-view-button/index.es.js";
import { WidgetTypes as T } from "../types.es.js";
import { Legend as it } from "./components/legend/index.es.js";
import { LoadingState as nt } from "./components/loading-state/index.es.js";
import { Settings as st } from "./components/settings/index.es.js";
import { graphTimeFormat as at } from "./helpers/index.es.js";
import { LinearGradientHelper as lt } from "./helpers/linear-gradient-helper.es.js";
import { ICONS_DICTIONARY as ct } from "./icons/dictionary.es.js";
import { Card as pt } from "./style.es.js";
import { useWidgetSettings as mt } from "./use-widget-settings.es.js";
import { CurrentTheme as xt } from "../../../styles/constants.es.js";
import { FlatLinearGraph as dt } from "../flat-linear-graph/index.es.js";
import { ProgressBar as ut } from "../progress-bar/progress-bar.es.js";
import { FooterGradient as ft } from "../footer-gradient/footer-gradient.es.js";
import { Typography as x } from "../../typogrpahy/index.es.js";
import { useTranslation as ht } from "react-i18next";
const Ot = (H) => {
  const {
    id: M,
    timequant: w,
    date: C,
    isLoading: A,
    isError: W,
    config: e,
    chartData: d,
    isInteractive: u,
    attributeName: f,
    value: n,
    postfix: y,
    period: v,
    onUnitsChange: E,
    switchView: G,
    onSettingsChange: N
  } = H, { t: D } = ht("uiKit", { keyPrefix: "widgets" }), [F, b] = tt(!1), { palette: s } = Z(), {
    showGraph: l,
    unitsOfMeasurement: O,
    showAlert: S,
    toggleAlertVisibility: _,
    toggleGraphVisibility: k,
    setUnitsOfMeasurement: z,
    setValueBoundaries: P,
    isBoundariesLoading: R
  } = mt(M, f, e, N), I = e.title || f, U = !!e.sensor_type && e.sensor_type !== "none", h = S && e.type === T.Boolean && n === !0, q = (s.mode === xt.Dark, e.color), p = h ? e.alertColor : q, r = e.type === T.Graphic, L = r && l, g = j(
    () => new lt([
      [s.additionalColors.blue, 0],
      [s.additionalColors.yellow, 0.49],
      [s.alerts.alert, 1]
    ]),
    [s]
  ), o = (typeof n == "number" || typeof n == "string") && !isNaN(+n) ? +n : 0, V = j(() => ot(d), [d]), { min: i, max: a, avg: K } = V, B = j(() => {
    if (i === null || a === null)
      return "";
    const J = a - i, Q = (o - i) * 100 / J;
    return g.getColor($.clamp(Q || 0, 0, 100)) ?? "";
  }, [i, a, o, g]), X = () => {
    u && b(!0);
  }, Y = () => {
    u && b(!1);
  };
  return A ? /* @__PURE__ */ t.jsx(nt, { withSensor: U, showGraph: l, isGraphicWidget: r }) : W ? null : /* @__PURE__ */ t.jsxs(
    pt,
    {
      sx: { borderColor: h ? p : void 0 },
      onMouseEnter: X,
      onMouseLeave: Y,
      children: [
        /* @__PURE__ */ t.jsxs(c, { px: "20px", direction: "row", alignItems: "flex-start", justifyContent: "space-between", children: [
          /* @__PURE__ */ t.jsxs(c, { maxWidth: "50%", minHeight: "40px", justifyContent: "space-around", children: [
            /* @__PURE__ */ t.jsxs(c, { alignItems: "center", direction: "row", spacing: "8px", children: [
              e.icon && e.icon !== "none" && ct[e.icon],
              /* @__PURE__ */ t.jsx(
                x,
                {
                  noWrap: !0,
                  title: I,
                  variant: "caption12",
                  textTransform: "capitalize",
                  color: "text.text4",
                  children: I
                }
              )
            ] }),
            C && /* @__PURE__ */ t.jsxs(m, { children: [
              /* @__PURE__ */ t.jsx(x, { component: "span", variant: "overline", color: "text.text8", children: D("Last update") }),
              /* @__PURE__ */ t.jsx(x, { component: "span", variant: "caption12", ml: 1, color: "text.text4", children: C })
            ] })
          ] }),
          /* @__PURE__ */ t.jsxs(c, { flexDirection: "row", alignItems: "center", gap: "10px", children: [
            r && /* @__PURE__ */ t.jsx(
              st,
              {
                units: O,
                showGraph: l,
                config: e,
                showAlert: S,
                isBoundariesLoading: R,
                toggleAlertVisibility: _,
                toggleGraphVisibility: k,
                setUnitsOfMeasurement: z,
                onUnitsChange: E,
                setValueBoundaries: P
              }
            ),
            G && /* @__PURE__ */ t.jsx(
              rt,
              {
                attributeName: f,
                isAccent: !0,
                switchView: G
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ t.jsx(m, { sx: { position: "absolute", top: "44px", right: "20px" }, children: L && /* @__PURE__ */ t.jsx(it, { color: p }) }),
        /* @__PURE__ */ t.jsx(
          c,
          {
            direction: "row",
            justifyContent: r ? "space-between" : "center",
            alignItems: "center",
            flexGrow: r ? "unset" : 1,
            minHeight: "80px",
            px: "20px",
            children: /* @__PURE__ */ t.jsx(
              et,
              {
                value: n,
                postfix: y,
                color: r && !l ? B : p
              }
            )
          }
        ),
        r && !l && /* @__PURE__ */ t.jsxs(m, { width: "100%", paddingX: "20px", children: [
          v && /* @__PURE__ */ t.jsx(x, { mb: "4px", fontSize: "10px", lineHeight: "16px", color: "text.text8", children: v }),
          /* @__PURE__ */ t.jsx(
            ut,
            {
              current: o,
              min: i === null || i > o ? o : i,
              max: a === null || a < o ? o : a,
              avg: K ?? o,
              gradientColors: g.getGradientColors(),
              currentColor: B,
              postfix: ""
            }
          )
        ] }),
        L ? /* @__PURE__ */ t.jsx(m, { height: "50px", flexGrow: 1, maxHeight: "50%", children: /* @__PURE__ */ t.jsx(
          dt,
          {
            timeFormat: at[w],
            chartData: d,
            calculatedValues: V,
            color: F || h ? p : s.text.text8,
            withAxis: !0,
            isInteractive: u,
            config: e,
            postfix: y,
            curve: e.display_value === "delta" ? "step" : "linear",
            timequant: w
          }
        ) }) : /* @__PURE__ */ t.jsx(ft, {})
      ]
    }
  );
};
export {
  Ot as WidgetBase
};
