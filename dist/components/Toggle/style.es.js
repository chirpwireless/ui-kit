import { styled as o, Box as p, Typography as d } from "@mui/material";
import { chirpPalette as n } from "../../theme/palette.es.js";
const c = (t, a) => {
  const i = t.match(/^rgba?\(([^)]+)\)$/);
  if (!i) return t;
  const [r, e, l] = i[1].split(",").map((s) => s.trim());
  return `rgba(${r}, ${e}, ${l}, ${a})`;
}, u = o("label")`
    display: flex;
    width: max-content;
    align-items: center;
`, g = o("label")`
    display: flex;
    width: max-content;
    align-items: flex-start;
    flex-direction: column;
`, x = o("input")`
    position: absolute;
    width: 0;
    height: 0;
    border: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    white-space: nowrap;
`, b = o("span", {
  shouldForwardProp: (t) => t !== "isLoading" && t !== "checked" && t !== "disabled"
})(({ theme: t, isLoading: a, checked: i, disabled: r }) => {
  const e = n(t);
  return {
    width: "32px",
    height: "18px",
    position: "relative",
    borderRadius: "20px",
    border: "1px solid",
    borderColor: a ? `${c(e.neutral.primary, 0.5)}` : r ? e.borders.primary : i ? e.primaryColors.accent : e.borders.primary
  };
}), y = o(p, {
  shouldForwardProp: (t) => t !== "isLoading" && t !== "disabled"
})(({ checked: t, isLoading: a, disabled: i, theme: r }) => {
  const e = n(r);
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    height: "12px",
    width: a ? "16px" : "12px",
    left: t ? "15px" : "3px",
    top: "50%",
    transform: "translateY(-50%)",
    background: a ? e.neutral.primary : i ? e.neutral.grey4 : t ? e.primaryColors.accent : e.neutral.grey4,
    borderRadius: "17px",
    transition: "0.4s"
  };
}), f = o(d, { shouldForwardProp: (t) => t !== "checked" && t !== "disabled" })(({ theme: t, checked: a, disabled: i }) => {
  const r = n(t);
  return {
    marginRight: "12px",
    userSelect: "none",
    fontSize: "12px",
    minWidth: "60px",
    color: i ? r.neutral.grey4 : a ? r.neutral.primary : r.neutral.grey4
  };
});
export {
  b as Checkmark,
  y as CheckmarkPin,
  x as HiddenInput,
  f as Label,
  g as MobileToggle,
  u as Toggle
};
