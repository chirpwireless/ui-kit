import { styled as o } from "@mui/material";
import { ToastContainer as i } from "react-toastify";
const n = o(i)(({ theme: t }) => ({
  "&&&.Toastify__toast-container": {
    width: "min(460px, calc(100% - 2rem))",
    padding: 0,
    bottom: "16px",
    right: "32px",
    [t.breakpoints.down("md")]: {
      right: "16px",
      left: "unset"
    },
    [t.breakpoints.down("sm")]: {
      top: "unset",
      bottom: "16px",
      right: "16px",
      left: "16px",
      width: "calc(100% - 32px)"
    }
  },
  ".Toastify__toast": {
    padding: 0,
    borderRadius: "8px"
  },
  ".Toastify__toast-body": {
    padding: 0
  }
}));
export {
  n as Container
};
