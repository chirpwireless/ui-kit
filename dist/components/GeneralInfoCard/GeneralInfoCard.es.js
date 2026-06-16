import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useCallback as x } from "react";
import { useNavigate as f } from "react-router-dom";
import { Button as d } from "../Button/Button.es.js";
import { Loader as j } from "../Loader/index.es.js";
import { StackRowJB as u, StackRow as g } from "../Stacks/index.es.js";
import { Wrapper as h } from "./styles.es.js";
const B = ({
  customAction: a,
  disabled: i,
  header: l,
  headerAction: e,
  headerActionContent: s,
  isLoading: m,
  footer: n,
  sx: p,
  link: o
}) => {
  const t = f(), c = x(() => {
    o && t(o);
  }, [o, t]);
  return /* @__PURE__ */ r.jsx(h, { sx: p, onClick: c, children: m ? /* @__PURE__ */ r.jsx(j, { size: 48, sx: { color: "neutral.primary" } }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(u, { sx: { alignItems: "flex-start" }, children: [
      l,
      a || (e && s ? /* @__PURE__ */ r.jsx(
        d,
        {
          disabled: i,
          onClick: e,
          color: "primary",
          size: "small",
          variant: "secondary",
          children: s
        }
      ) : null)
    ] }),
    /* @__PURE__ */ r.jsx(g, { overflow: "hidden", children: n })
  ] }) });
};
export {
  B as GeneralInfoCard
};
