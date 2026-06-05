import { useState as a, useEffect as F } from "react";
import { widgetAttributeNameConfig as M } from "../widget-attribute-name-config.es.js";
import { getObjectFromStorage as U, setObjectIntoStorage as I } from "./helpers/index.es.js";
const E = (s, r, o, g) => {
  var w;
  const [v, d] = a(!0), [y, h] = a(!0), [A, p] = a(o == null ? void 0 : o.units), [G, S] = a(!1), i = U("widgetsSettings"), l = (w = M[r]) == null ? void 0 : w.onlyGraphView, u = (t, e) => {
    const n = i || {}, m = n[s] || {}, f = m[r] || {};
    let c;
    t === "valueBoundaries" && typeof e == "object" ? c = { ...f, ...e } : c = { ...f, [t]: e };
    const b = { ...m, [r]: c };
    g && g({ ...n, [s]: b }), I("widgetsSettings", { ...n, [s]: b });
  }, V = () => {
    d((t) => (u("showGraph", !t), !t));
  }, B = () => {
    h((t) => (u("showAlert", !t), !t));
  }, O = (t) => {
    p(() => (u("units", t), t));
  }, j = async ({ from: t, to: e }) => {
    S(!0);
    try {
      u("valueBoundaries", { valueFrom: t ?? void 0, valueTo: e ?? void 0 });
    } catch (n) {
      console.error("Failed to set value boundaries:", n);
    } finally {
      S(!1);
    }
  };
  return F(() => {
    if (!i) return;
    const t = i[s], e = t && t[r];
    e && (d(l ?? e.showGraph ?? !0), p(e.units || o.units), h(e.showAlert ?? !0));
  }, [r, s, i, o, l]), {
    showGraph: v,
    showAlert: y,
    unitsOfMeasurement: A,
    toggleAlertVisibility: B,
    toggleGraphVisibility: l ? void 0 : V,
    setUnitsOfMeasurement: O,
    setValueBoundaries: j,
    isBoundariesLoading: G
  };
};
export {
  E as useWidgetSettings
};
