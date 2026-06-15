import { jsxRuntimeExports as n } from "../../jsx-runtime-BgepH7Pb.js";
import { useState as R, useCallback as U, useEffect as m } from "react";
import { Avatar as v } from "@mui/material";
import { getUserInitials as b } from "../../helpers/userName.es.js";
const A = ({ avatar: r, userName: e, sx: o, loader: i }) => {
  const [t, s] = R(""), a = U(
    async (c) => {
      if (!i) {
        s(c);
        return;
      }
      const f = await i(c);
      f && s(URL.createObjectURL(f));
    },
    [i]
  );
  return m(() => {
    r && a(r);
  }, [r, a]), m(
    () => () => {
      t.startsWith("blob:") && URL.revokeObjectURL(t);
    },
    [t]
  ), t ? /* @__PURE__ */ n.jsx(v, { src: t, sx: o, alt: e }) : /* @__PURE__ */ n.jsx(v, { sx: o, children: e ? b(e) : "" });
};
export {
  A as Avatar
};
