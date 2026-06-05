import { styled as e, Stack as r, Box as o } from "@mui/material";
const n = e(r)(({ theme: t }) => ({
  ".MuiInputBase-root input": {
    ...t.typography.button,
    color: t.palette.text.textInput60,
    textTransform: "uppercase"
  }
})), a = e(o)(({ theme: t }) => ({
  backgroundColor: t.palette.background.background16,
  borderRadius: "10px",
  width: "300px",
  overflow: "hidden",
  height: "521px",
  ".react-colorful": {
    width: "300px",
    height: "auto",
    alignItems: "flex-end",
    "&__interactive": {
      "&:focus": {
        ".react-colorful__pointer": {
          transform: "translate(-50%, -50%) scale(1)"
        }
      }
    },
    "&__pointer": {
      width: "20px",
      height: "20px",
      borderWidth: "4px"
    },
    "&__saturation": {
      width: "300px",
      height: "300px",
      borderRadius: 0
    },
    "&__hue": {
      width: "268px",
      borderRadius: "10px",
      height: "20px",
      marginTop: "16px",
      marginRight: "16px"
    },
    "&__alpha": {
      width: "268px",
      borderRadius: "10px",
      height: "20px",
      marginTop: "2px",
      marginRight: "16px",
      backgroundSize: "8px",
      ".react-colorful__pointer": {
        backgroundSize: "8px"
      }
    }
  }
})), i = e(r)(({ theme: t }) => ({
  padding: "12px 10px",
  flexDirection: "row",
  alignItems: "center",
  background: t.palette.background.background2,
  "&, input": {
    color: t.palette.text.text1,
    ...t.typography.body1
  },
  input: {
    width: "auto",
    background: "transparent",
    border: "none",
    textTransform: "uppercase",
    outline: "none",
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0
    },
    MozAppearance: "textfield"
  }
}));
export {
  n as Control,
  i as StyledTextField,
  a as Wrapper
};
