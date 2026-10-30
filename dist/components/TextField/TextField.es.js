import { TextField as e } from "./style.es.js";
import { forwardRef as t } from "react";
import { FormControl as n } from "@mui/material";
import { jsx as r } from "react/jsx-runtime";
// src/components/TextField/TextField.tsx
var i = t(({ slotProps: t, ...i }, a) => /* @__PURE__ */ r(n, {
	fullWidth: !0,
	children: /* @__PURE__ */ r(e, {
		...i,
		inputRef: a,
		slotProps: {
			...t,
			inputLabel: {
				shrink: !0,
				...t?.inputLabel
			}
		}
	})
}));
i.displayName = "TextField";
export { i as TextField };
