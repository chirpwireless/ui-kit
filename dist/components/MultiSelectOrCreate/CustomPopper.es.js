import "react";
import { Popper as e } from "@mui/material";
import { jsx as t } from "react/jsx-runtime";
// src/components/MultiSelectOrCreate/CustomPopper.tsx
var n = (n) => {
	let { anchorEl: r, ...i } = n, a = r && "clientWidth" in r ? r.clientWidth : void 0;
	return /* @__PURE__ */ t(e, {
		anchorEl: r,
		...i,
		placement: "bottom-start",
		style: {
			zIndex: 1300,
			width: a,
			maxWidth: a
		}
	});
};
export { n as CustomPopper };
