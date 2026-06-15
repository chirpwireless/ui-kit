import { styled as o, Stack as t } from "@mui/material";
import { CurrentTheme as i } from "../../styles/constants.es.js";
import { chirpPalette as n } from "../../theme/palette.es.js";
const l = o(t)(({ theme: e }) => {
  const r = n(e);
  return {
    padding: "24px",
    backgroundColor: e.palette.mode === i.Dark ? r.neutral.grey1 : r.neutral.white,
    borderRadius: "8px",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: "168px",
    border: "1px solid",
    borderColor: r.borders.primary,
    cursor: "pointer",
    transition: "all 0.125s",
    "&:hover, &:focus-visible": {
      borderColor: r.borders.secondary
    }
  };
});
export {
  l as DragBox
};
