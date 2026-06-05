import { jsxRuntimeExports as i } from "../../jsx-runtime-BgepH7Pb.js";
import { GraphicWidget as e } from "./graphic-widget/graphic-widget.es.js";
import { StaticWidget as m } from "./static-widget/index.es.js";
import { WidgetTypes as o } from "./types.es.js";
const W = ({ config: t, ...r }) => t.type === o.Graphic ? /* @__PURE__ */ i.jsx(e, { config: t, ...r }) : /* @__PURE__ */ i.jsx(m, { config: t, ...r });
export {
  W as Widget
};
