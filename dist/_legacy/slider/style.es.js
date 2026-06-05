import { styled as o, Slider as e } from "@mui/material";
const i = o(e)(({ theme: r }) => ({
  color: "base.color6",
  height: 8,
  "& .MuiSlider-rail": {
    backgroundColor: r.palette.base.color61
  },
  "& .MuiSlider-track": {
    border: "none",
    background: "red"
  },
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    backgroundColor: "base.color6",
    borderRadius: "4px",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit"
    },
    "&::before": {
      display: "none"
    }
  },
  "& .MuiSlider-valueLabel": {
    ...r.typography.body1,
    background: "unset",
    padding: 0,
    width: 46,
    height: 38,
    borderRadius: "4px",
    color: r.palette.base.color2,
    backgroundColor: r.palette.text.text1,
    transformOrigin: "top left",
    transition: "none",
    "&.MuiSlider-valueLabelOpen": {
      transition: "none",
      transform: "translateY(100%)"
    },
    "&::before": {
      top: 0,
      transform: "translate(-50%, -50%) rotate(45deg)"
    }
    // '&.MuiSlider-valueLabelOpen': {
    //     transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
    // },
    // '& > *': {
    //     transform: 'rotate(45deg)',
    // },
  }
}));
export {
  i as Slider
};
