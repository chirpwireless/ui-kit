import { styled as o, Stack as t } from "@mui/material";
import { CurrentTheme as i } from "../../styles/constants.es.js";
import { chirpPalette as p } from "../../theme/palette.es.js";
const l = o(t)(({ theme: e }) => {
  const r = p(e);
  return {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "36px",
    padding: "8px 16px",
    marginTop: "16px",
    backgroundColor: e.palette.mode === i.Dark ? r.neutral.grey1 : r.neutral.white,
    border: `1px solid ${r.borders.primary}`,
    borderRadius: "8px",
    cursor: "pointer",
    boxSizing: "border-box",
    "&:hover": {
      borderColor: r.primaryColors.accent
    }
  };
});
export {
  l as Trigger
};
