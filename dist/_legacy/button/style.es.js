import { styled as l, Button as c, Stack as t } from "@mui/material";
const d = l(c)(({ fullWidth: e, theme: o, size: a, variant: r }) => ({
  cursor: "pointer",
  transition: "all 0.125s",
  width: e ? "100%" : "",
  overflow: "hidden",
  ...o.typography.button,
  ".MuiButton-icon": {
    "& > svg": {
      width: "20px",
      height: "20px"
    }
  },
  ...a === "large" && {
    padding: "14px 30px",
    maxHeight: "48px"
  },
  ...a === "medium" && {
    padding: "8px 26px",
    maxHeight: "36px"
  },
  ...a === "small" && {
    ...o.typography.button,
    padding: "4px 20px",
    maxHeight: "30px"
  },
  ...r === "primary" && {
    background: o.palette.base.color6,
    color: o.palette.base.color1,
    "&:hover, &:active": {
      background: o.palette.base.hover
    },
    "&:disabled": {
      color: o.palette.base.color1,
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: o.palette.base.color6
    }
  },
  ...r === "secondary" && {
    background: o.palette.base.color61,
    color: o.palette.base.color6,
    border: "1px solid transparent",
    "&:hover, &:checked": {
      background: o.palette.base.color63,
      borderColor: o.palette.base.hover
    },
    "&:active": {
      background: o.palette.base.color63,
      border: "none"
    },
    "&:disabled": {
      color: o.palette.base.color6,
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: "transparent"
    },
    ...a === "small" && {
      padding: "8px"
    }
  },
  ...r === "alertSecondary" && {
    background: o.palette.base.color7_20,
    color: o.palette.base.color7,
    border: "1px solid transparent",
    "&:hover, &:checked": {
      background: o.palette.base.color7_20,
      borderColor: o.palette.base.color7
    },
    "&:active": {
      background: o.palette.base.color7_20,
      borderColor: "transparent"
    },
    "&:disabled": {
      color: o.palette.base.color7,
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: "transparent"
    },
    ...a === "small" && {
      padding: "8px"
    }
  },
  ...r === "secondary" && {
    background: o.palette.base.color61,
    color: o.palette.base.color6,
    border: "1px solid transparent",
    "&:hover, &:checked": {
      background: o.palette.base.color63,
      borderColor: o.palette.base.hover
    },
    "&:active": {
      background: o.palette.base.color63,
      border: "1px solid transparent"
    },
    "&:disabled": {
      color: o.palette.base.color6,
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: "transparent"
    },
    ...a === "small" && {
      padding: "8px"
    }
  },
  ...r === "tertiary" && {
    background: o.palette.background.background10,
    color: o.palette.text.text2,
    "&:hover, &:active, &:checked": {
      background: o.palette.background.background10,
      color: o.palette.base.color6
    },
    "&:disabled": {
      color: o.palette.text.text2,
      opacity: "0.3"
    },
    "&:focus-visible": {
      background: o.palette.background.background10
    }
  },
  ...r === "text" && {
    color: o.palette.base.color6,
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  ...r === "alertText" && {
    color: o.palette.base.color7,
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  ...r === "outlined" && {
    background: "transparent",
    color: o.palette.base.color6,
    border: `1px solid ${o.palette.base.color6}`,
    "&:hover, &:active": {
      background: "transparent",
      color: o.palette.base.hover,
      borderColor: o.palette.base.hover
    },
    "&:disabled": {
      color: o.palette.base.color6,
      border: `1px solid ${o.palette.base.color6}`,
      opacity: "0.3"
    },
    "&:focus-visible": {
      background: "transparent"
    }
  },
  [o.breakpoints.down("md")]: {
    lineHeight: "16px"
  },
  [o.breakpoints.between("md", "lg")]: {
    lineHeight: "16px"
  }
})), b = l(t)(() => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1
})), s = l(t)(({ theme: e, variant: o }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  ...(o === "primary" || o === "outlined" || o === "secondary" || o === "text") && {
    background: e.palette.base.color6
  },
  ...o === "tertiary" && {
    background: e.palette.background.background10
  }
}));
export {
  s as Backdrop,
  d as ButtonWrapper,
  b as LoaderWrapper
};
