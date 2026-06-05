import { styled as o, Stack as t } from "@mui/material";
const d = o(t)(({ theme: e }) => ({
  background: e.palette.background.background7,
  borderRadius: "12px",
  height: "236px",
  width: "100%",
  overflow: "hidden",
  paddingTop: "20px",
  border: "none",
  position: "relative"
})), n = o(t)(({ theme: e }) => ({
  padding: "2px",
  background: e.palette.background.background4,
  borderRadius: "6px"
})), p = o(t)(({ theme: e }) => ({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingBottom: "16px",
  "& + &": {
    borderTop: "1px solid",
    borderColor: e.palette.border.border3,
    paddingTop: "16px"
  },
  "&:last-of-type": {
    paddingBottom: 0
  }
}));
export {
  d as Card,
  p as SettingsItem,
  n as UnitsOfMeasurementWrapper
};
