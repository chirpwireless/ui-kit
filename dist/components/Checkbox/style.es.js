import { styled as e } from "@mui/material";
import { chirpPalette as t } from "../../theme/palette.es.js";
const n = e("span")(({ theme: r }) => {
  const o = t(r);
  return {
    borderRadius: 4,
    width: 18,
    height: 18,
    backgroundColor: "transparent",
    border: "1px solid",
    borderColor: o.borders.secondary,
    "input:hover ~ &": {
      borderColor: o.primaryColors.accent
    },
    "input:disabled ~ &": {
      borderColor: o.borders.secondary
    }
  };
}), i = e(n)(({ theme: r }) => {
  const o = t(r);
  return {
    backgroundColor: o.primaryColors.accent,
    borderColor: o.primaryColors.accent,
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundPosition: "center",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M5.8125 9.5625L7.5 11.4375L12.1875 6.5625' stroke='white' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
      content: '""'
    }
  };
});
export {
  i as CheckboxCheckedIcon,
  n as CheckboxIcon
};
