import { jsxRuntimeExports as p } from "../../../../jsx-runtime-BgepH7Pb.js";
import { useTheme as a, InputLabel as i } from "@mui/material";
import { chirpPalette as m } from "../../../../theme/palette.es.js";
const c = ({ labelId: r, label: t, className: e, sx: o }) => {
  const n = a();
  return /* @__PURE__ */ p.jsx(
    i,
    {
      id: r,
      shrink: !0,
      className: e,
      sx: {
        padding: 0,
        backgroundColor: "transparent",
        color: m(n).neutral.primary,
        ...o
      },
      children: t
    }
  );
};
export {
  c as InputLabel
};
