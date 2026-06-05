import { alpha as a } from "@mui/material/styles";
const r = (o, t) => ({
  backgroundColor: t ? a(o.palette.base.color7, 0.2) : o.palette.background.background2,
  svg: {
    path: {
      stroke: t ? o.palette.base.color7 : o.palette.text.text4
    }
  }
}), l = (o, t) => ({
  backgroundColor: t ? a(o.palette.base.color7, 0.2) : o.palette.background.background8
});
export {
  r as getAlertStyles,
  l as getHoverStyles
};
