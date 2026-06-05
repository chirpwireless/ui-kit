import { jsxRuntimeExports as e } from "../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as i } from "@mui/material";
import { CurrentTheme as h } from "../../../styles/constants.es.js";
const p = ({ color: r, width: n, height: s }) => {
  const { palette: t } = i(), o = r ?? (t.mode === h.Light, t.text.text1);
  return /* @__PURE__ */ e.jsxs(
    "svg",
    {
      width: n ?? "20",
      height: s ?? "20",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ e.jsx("path", { d: "M6 12H18", stroke: o, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ e.jsx("path", { d: "M12 18V6", stroke: o, strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
      ]
    }
  );
};
export {
  p as PlusIcon
};
