import { styled as r, alpha as l, Box as a, Typography as i } from "@mui/material";
const n = r("label")`
    display: flex;
    width: max-content;
    cursor: pointer;
    align-items: center;
`, s = r("label")`
    display: flex;
    width: max-content;
    cursor: pointer;
    align-items: flex-start;
    flex-direction: column;
`, x = r("input")`
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
`, d = r("span", {
  shouldForwardProp: (t) => t !== "isLoading" && t !== "checked"
})(({ theme: t, isLoading: o, checked: e }) => ({
  width: "32px",
  height: "18px",
  position: "relative",
  borderRadius: "20px",
  border: "1px solid",
  borderColor: o ? `${l(t.palette.text.text4, 0.5)}` : e ? t.palette.base.color6 : t.palette.text.text4
})), c = r(a, {
  shouldForwardProp: (t) => t !== "isLoading"
})(({ checked: t, isLoading: o, theme: e }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  height: "12px",
  width: o ? "16px" : "12px",
  left: t ? "15px" : "3px",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: o ? e.palette.text.text4 : t ? e.palette.base.color6 : e.palette.text.text7,
  borderColor: o ? e.palette.text.text4 : t ? e.palette.base.color6 : e.palette.text.text7,
  borderRadius: "17px",
  transition: "0.4s"
})), g = r(i, {
  shouldForwardProp: (t) => t !== "checked"
})(({ theme: t, checked: o }) => ({
  marginRight: "12px",
  userSelect: "none",
  fontSize: "12px",
  color: o ? t.palette.text.text7 : t.palette.text.text4
}));
export {
  d as Checkmark,
  c as CheckmarkPin,
  x as HiddenInput,
  g as Label,
  s as WidgetMobileToggle,
  n as WidgetToggle
};
