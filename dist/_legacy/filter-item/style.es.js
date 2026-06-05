import { styled as o, Box as a } from "@mui/material";
const l = o("label")`
    display: flex;
    width: max-content;
    cursor: pointer;
`, d = o("input")`
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
`, x = o(a, {
  shouldForwardProp: (t) => t !== "hasAdornment"
})(({ theme: t, checked: e, size: r, variant: p, hasAdornment: i }) => ({
  border: "1px solid",
  borderColor: t.palette.background.background4,
  background: t.palette.background.background4,
  borderRadius: "3px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  userSelect: "none",
  color: t.palette.text.text1,
  width: "max-content",
  "&:hover, &:focus-visible": {
    borderColor: t.palette.border.border3
  },
  ...r === "small" && {
    maxHeight: "26px",
    fontSize: "12px",
    lineHeight: "20px",
    padding: i ? "3px 2px 3px 12px" : "3px 12px"
  },
  ...r === "big" && {
    maxHeight: "32px",
    fontSize: "13px",
    lineHeight: "20px",
    padding: "6px 16px"
  },
  ...e && {
    color: t.palette.base.color1,
    background: p === "primary" ? t.palette.base.color6 : t.palette.text.text4,
    borderColor: p === "primary" ? t.palette.base.color6 : t.palette.text.text4
  }
})), c = o(a)(({ theme: t, checked: e }) => ({
  padding: "2px 4px",
  background: e ? t.palette.background.background5 : t.palette.primary.dark,
  color: e ? t.palette.base.color1 : t.palette.text.text1,
  borderRadius: "3px",
  marginLeft: "10px",
  fontSize: "12px",
  lineHeight: "18px",
  minWidth: "22px",
  maxHeight: "22px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center"
}));
export {
  c as Adornment,
  x as Checkmark,
  d as HiddenInput,
  l as Label
};
