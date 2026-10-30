import { useMediaQuery as e, useTheme as t } from "@mui/material";
// src/hooks/use-breakpoints.tsx
var n = () => {
	let n = t(), r = e(n.breakpoints.down("sm")), i = e(n.breakpoints.down("md")), a = e(n.breakpoints.between("md", "lg")), o = e(n.breakpoints.up("lg")), s = e(n.breakpoints.up("xxl"));
	return {
		isSmallMobile: r,
		isMobile: i || a,
		isTablet: a,
		isDesktop: o,
		isExtraLarge: s
	};
};
export { n as useBreakpoints };
