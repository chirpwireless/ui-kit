import { styled as e, IconButton as l, Stack as t } from "@mui/material";
const p = e(l)(({ theme: o, size: r, variant: a }) => ({
  cursor: "pointer",
  transition: "all 0.125s",
  gap: "4px",
  overflow: "hidden",
  ".MuiButton-icon": {
    "& > svg": {
      width: "20px",
      height: "20px"
    }
  },
  ...r === "large" && {
    padding: "14px",
    maxHeight: "48px"
  },
  ...r === "medium" && {
    padding: "8px",
    maxHeight: "36px"
  },
  ...r === "small" && {
    padding: "4px",
    maxHeight: "28px"
  },
  ...a === "primary" && {
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
  ...a === "secondary" && {
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
    ...r === "small" && {
      padding: "8px"
    }
  },
  ...a === "alertSecondary" && {
    background: o.palette.base.color7_20,
    color: o.palette.base.color7,
    border: "1px solid transparent",
    "&:hover, &:checked": {
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
    ...r === "small" && {
      padding: "8px"
    }
  },
  ...a === "tertiary" && {
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
  ...a === "outlined" && {
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
  ...a === "gray" && {
    background: "transparent",
    color: o.palette.text.text4,
    border: "none",
    "&:hover, &:active": {
      background: "transparent",
      color: o.palette.base.color6
    },
    "&:disabled": {
      opacity: "0.3"
    },
    "&:focus-visible": {
      borderColor: "transparent"
    }
  },
  [o.breakpoints.down("md")]: {
    lineHeight: "16px"
  },
  [o.breakpoints.between("md", "lg")]: {
    lineHeight: "16px"
  }
})), d = e(t)(() => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1
})), b = e(t)(({ theme: o, variant: r }) => ({
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  ...(r === "primary" || r === "outlined" || r === "secondary" || r === "gray") && {
    background: o.palette.base.color6
  },
  ...r === "tertiary" && {
    background: o.palette.background.background10
  }
}));
export {
  b as Backdrop,
  p as ButtonWrapper,
  d as LoaderWrapper
};
