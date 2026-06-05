import { SvgOpenEye as t, SvgCloseEye as r } from "../../close-eye-DEW7Y3MO.js";
import { styled as e } from "@mui/material";
const l = e("span")(({ theme: o }) => ({
  borderRadius: 4,
  width: 18,
  height: 18,
  backgroundColor: "transparent",
  border: "1px solid",
  borderColor: o.palette.text.text8,
  "input:hover ~ &": {
    borderColor: o.palette.base.color6
  },
  "input:disabled ~ &": {
    borderColor: o.palette.border.border3
  }
})), a = e(l)(({ theme: o }) => ({
  backgroundColor: o.palette.base.color6,
  borderColor: o.palette.base.color6,
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundPosition: "center",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M5.8125 9.5625L7.5 11.4375L12.1875 6.5625' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    content: '""'
  }
})), d = e(t)(({ theme: o }) => ({
  color: o.palette.text.text4
})), c = e(r)(({ theme: o }) => ({
  color: o.palette.text.text4
}));
export {
  a as CheckboxCheckedIcon,
  l as CheckboxIcon,
  c as CustomCloseEyeIcon,
  d as CustomOpenEyeIcon
};
