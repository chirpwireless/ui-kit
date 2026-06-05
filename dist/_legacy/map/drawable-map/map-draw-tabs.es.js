import { jsxRuntimeExports as t } from "../../../jsx-runtime-BgepH7Pb.js";
import { MapDrawModeTabsWrapper as n } from "../style.es.js";
import { Tabs as m } from "../../tabs/index.es.js";
import { useTranslation as p } from "react-i18next";
import { useMemo as d } from "react";
const o = [
  { key: "draw_polygon", title: "Polygon" },
  { key: "draw_circle", title: "Circle" },
  { key: "draw_line_string", title: "Line" }
], T = ({ activeMode: r, onChangeMode: i }) => {
  const { t: s } = p("uiKit", { keyPrefix: "map" }), a = d(() => {
    var e;
    return (e = o.find((l) => l.key === r)) == null ? void 0 : e.key;
  }, [r]);
  return /* @__PURE__ */ t.jsx(n, { children: /* @__PURE__ */ t.jsx(
    m,
    {
      items: o,
      resolvedTitle: (e) => s(e.title),
      resolvedValue: (e) => e.key,
      activeTab: a || !1,
      setActiveTab: i
    }
  ) });
};
export {
  T as MapDrawModeTabs
};
