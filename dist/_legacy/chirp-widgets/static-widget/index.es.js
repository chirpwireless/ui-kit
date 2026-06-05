import { jsxRuntimeExports as g } from "../../../jsx-runtime-BgepH7Pb.js";
import { useState as e, useEffect as s } from "react";
import { getValueString as j, getTimeString as B } from "../helpers/index.es.js";
import { WidgetBase as C } from "../widget-base/index.es.js";
import { graphEmptyStateValue as D } from "../helpers/empty-state-value.es.js";
const b = ({
  deviceId: o,
  config: t,
  lastSeen: u,
  attributeName: l,
  currentValue: i,
  isLoading: r,
  isError: m,
  timequant: n,
  switchView: p
}) => {
  const [c, f] = e(null), [S, d] = e(), [a, v] = e(null), [x, h] = e(!1), E = t.units && t.units !== "none" ? t.units : "";
  return s(() => {
    r || f(D);
  }, [r]), s(() => {
    const V = j({ value: i, config: t, shouldBeConverted: !1 });
    d(V);
  }, [t, i]), s(() => {
    v(B(u || 0));
  }, [u]), s(() => {
    a !== null && h(!0);
  }, [a]), /* @__PURE__ */ g.jsx(
    C,
    {
      id: o,
      attributeName: l,
      chartData: c,
      timequant: n,
      postfix: E,
      date: a ?? "",
      isLoading: r || !x,
      isError: m,
      isInteractive: !1,
      config: t,
      value: S,
      switchView: p
    }
  );
};
export {
  b as StaticWidget
};
