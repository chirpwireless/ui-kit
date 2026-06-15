import { jsxRuntimeExports as t } from "../../jsx-runtime-BgepH7Pb.js";
import { useTheme as i } from "@mui/material";
import { chirpPalette as s } from "../../theme/palette.es.js";
const c = ({ isFilled: r, size: L }) => {
  const o = s(i()), e = r ? o.primaryColors.accent : o.neutral.grey4, n = r ? o.primaryColors.accent : "none";
  return L === "medium" ? /* @__PURE__ */ t.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M9.99967 3.95834L11.458 8.54167H16.0413L12.2913 11.4583L13.5413 16.0417L9.99967 13.125L6.45801 16.0417L7.70801 11.4583L3.95801 8.54167H8.54134L9.99967 3.95834Z",
      stroke: e,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      fill: n
    }
  ) }) : /* @__PURE__ */ t.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ t.jsx(
    "path",
    {
      d: "M12 4.3304L13.8867 9.8807L14.0595 10.3893H14.5967H20.6052L15.7738 13.7447L15.3097 14.067L15.4915 14.6021L17.3551 20.0846L12.4278 16.6626L12 16.3655L11.5722 16.6626L6.64486 20.0846L8.50847 14.6021L8.69034 14.067L8.22619 13.7447L3.39477 10.3893H9.40325H9.94046L10.1133 9.8807L12 4.3304Z",
      stroke: e,
      strokeWidth: "1.5",
      fill: n
    }
  ) });
};
export {
  c as FavoriteIcon
};
