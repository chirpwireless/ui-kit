import { useTheme as a, useMediaQuery as s } from "@mui/material";
const b = () => {
  const e = a(), t = s(e.breakpoints.down("sm")), i = s(e.breakpoints.down("md")), o = s(e.breakpoints.between("md", "lg")), n = s(e.breakpoints.up("lg")), r = s(e.breakpoints.up("xxl"));
  return {
    isSmallMobile: t,
    isMobile: i || o,
    isTablet: o,
    isDesktop: n,
    isExtraLarge: r
  };
};
export {
  b as useBreakpoints
};
