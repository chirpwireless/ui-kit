import { styled as p } from "@mui/material";
const t = p("div")(({ size: r = "small", color: d, theme: i }) => ({
  backgroundColor: d,
  border: "1px solid",
  borderColor: i.palette.border.input,
  cursor: "pointer",
  ...r === "large" && {
    width: "40px",
    minWidth: "40px",
    height: "40px",
    borderRadius: "8px"
  },
  ...r === "medium" && {
    width: "30px",
    height: "30px",
    minWidth: "30px",
    borderRadius: "8px"
  },
  ...r === "small" && {
    width: "23px",
    height: "23px",
    minWidth: "23px",
    borderRadius: "2px"
  }
}));
export {
  t as Cell
};
