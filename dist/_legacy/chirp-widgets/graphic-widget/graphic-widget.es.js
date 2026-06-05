import { jsxRuntimeExports as T } from "../../../jsx-runtime-BgepH7Pb.js";
import { useState as r, useEffect as n } from "react";
import { getChartData as U, getTimeString as W, getValueString as g } from "../helpers/index.es.js";
import { WidgetBase as k } from "../widget-base/index.es.js";
import { converter as G } from "./converter.es.js";
import { graphEmptyStateValue as O } from "../helpers/empty-state-value.es.js";
const F = ({
  config: t,
  lastSeen: o,
  graphValues: i,
  currentValue: m,
  attributeName: a,
  deviceId: v,
  isLoading: p,
  isError: f,
  timequant: h,
  period: C,
  switchView: S,
  onSettingsChange: x
}) => {
  const [j, l] = r(null), [c, B] = r(), [u, D] = r(null), [e, E] = r(!1), [y, I] = r(!1), s = G[t.units], L = t.units && t.units !== "none" ? e ? s.alternativeUnits : t.units : "";
  return n(() => {
    if (!i) return;
    Object.keys(i).length > 0 ? l(
      U({
        attribute: a,
        config: t,
        metrics: i,
        shouldBeConverted: e,
        unitsConverter: s
      })
    ) : l(O);
  }, [i, a, t, e, s]), n(() => {
    D(o ? W(o) : "");
  }, [o]), n(() => {
    const d = g({ value: m, config: t, unitsConverter: s, shouldBeConverted: e });
    B(d);
  }, [t, m, e, s]), n(() => {
    u !== null && I(!0);
  }, [u]), /* @__PURE__ */ T.jsx(
    k,
    {
      id: v,
      attributeName: a,
      chartData: j,
      timequant: h,
      postfix: L,
      date: u ?? "",
      isLoading: p || !y,
      isError: f,
      isInteractive: c !== void 0,
      config: t,
      onUnitsChange: E,
      value: c,
      period: C,
      switchView: S,
      onSettingsChange: x
    }
  );
};
export {
  F as GraphicWidget
};
