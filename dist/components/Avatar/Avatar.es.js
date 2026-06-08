import { jsxRuntimeExports as o } from "../../jsx-runtime-BgepH7Pb.js";
import { Avatar as i } from "@mui/material";
import { useState as u, useCallback as m, useEffect as j } from "react";
const A = (t) => t ? t[0] : "", g = ({ avatar: t, avatarFile: s, sx: e, userName: n, loader: c }) => {
  const [r, f] = u(""), R = s == null ? void 0 : s[0], U = m(
    async (L) => {
      if (!c) {
        f(L);
        return;
      }
      const b = await c(L);
      b && f(URL.createObjectURL(b));
    },
    [c]
  );
  return j(() => {
    t && U(t);
  }, [t, U]), j(() => () => {
    r && r.startsWith("blob:") && URL.revokeObjectURL(r);
  }), R ? /* @__PURE__ */ o.jsx(i, { src: URL.createObjectURL(R), sx: e }) : r ? /* @__PURE__ */ o.jsx(i, { src: r, sx: e }) : /* @__PURE__ */ o.jsx(i, { sx: e, children: n ? A(n) : "" });
};
export {
  g as Avatar
};
