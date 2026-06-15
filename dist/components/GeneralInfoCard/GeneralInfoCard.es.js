import { jsxRuntimeExports as r } from "../../jsx-runtime-BgepH7Pb.js";
import { useCallback as x } from "react";
import { useNavigate as f } from "react-router-dom";
import { Button as d } from "../Button/Button.es.js";
import { Loader as j } from "../Loader/index.es.js";
import { StackRowJB as u, StackRow as g } from "../Stacks/index.es.js";
import { Wrapper as h } from "./styles.es.js";
const B = ({
  customAction: e,
  disabled: s,
  header: l,
  headerAction: a,
  headerActionContent: i,
  isLoading: m,
  footer: n,
  sx: c,
  link: o
}) => {
  const t = f(), p = x(() => {
    o && t(o);
  }, [o, t]);
  return /* @__PURE__ */ r.jsx(h, { sx: c, onClick: p, children: m ? /* @__PURE__ */ r.jsx(j, { size: 48, sx: { color: "neutral.primary" } }) : /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(u, { sx: { alignItems: "flex-start" }, children: [
      l,
      e || (a && i ? /* @__PURE__ */ r.jsx(
        d,
        {
          disabled: s,
          onClick: a,
          color: "primary",
          size: "small",
          variant: "secondary",
          children: i
        }
      ) : null)
    ] }),
    /* @__PURE__ */ r.jsx(g, { direction: "row", overflow: "hidden", children: n })
  ] }) });
};
export {
  B as GeneralInfoCard
};
