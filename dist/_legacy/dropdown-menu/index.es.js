import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useRef as a } from "react";
import i from "@mui/material/MenuItem";
import { Menu as m } from "@mui/material";
const b = ({
  children: t,
  isOpened: p = !1,
  onClose: o,
  items: n,
  resolveTitle: l,
  gap: c = "5px"
}) => {
  const e = a(null);
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsx("div", { ref: e, children: t }),
    /* @__PURE__ */ r.jsx(
      m,
      {
        sx: {
          mt: c
        },
        open: p,
        onClose: o,
        anchorEl: e.current,
        MenuListProps: {
          "aria-labelledby": "basic-button"
        },
        children: n == null ? void 0 : n.map((s, u) => /* @__PURE__ */ r.jsx(i, { onClick: o, children: l(s) }, u))
      }
    )
  ] });
};
export {
  b as DropdownMenu
};
