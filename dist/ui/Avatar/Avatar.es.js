import { getUserInitials as e } from "../../helpers/userName.es.js";
import { useCallback as t, useEffect as n, useState as r } from "react";
import { Avatar as i } from "@mui/material";
import { jsx as a } from "react/jsx-runtime";
// src/ui/Avatar/Avatar.tsx
var o = ({ avatar: o, userName: s, sx: c, loader: l }) => {
	let [u, d] = r(""), f = t(async (e) => {
		if (!l) {
			d(e);
			return;
		}
		let t = await l(e);
		t && d(URL.createObjectURL(t));
	}, [l]);
	return n(() => {
		o && f(o);
	}, [o, f]), n(() => () => {
		u.startsWith("blob:") && URL.revokeObjectURL(u);
	}, [u]), u ? /* @__PURE__ */ a(i, {
		src: u,
		sx: c,
		alt: s
	}) : /* @__PURE__ */ a(i, {
		sx: c,
		children: s ? e(s) : ""
	});
};
export { o as Avatar };
