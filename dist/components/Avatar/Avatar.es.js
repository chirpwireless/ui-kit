import { useCallback as e, useEffect as t, useState as n } from "react";
import { Avatar as r } from "@mui/material";
import { jsx as i } from "react/jsx-runtime";
// src/components/Avatar/Avatar.tsx
var a = (e) => e ? e[0] : "", o = ({ avatar: o, avatarFile: s, sx: c, userName: l, loader: u }) => {
	let [d, f] = n(""), p = s?.[0], m = e(async (e) => {
		if (!u) {
			f(e);
			return;
		}
		let t = await u(e);
		t && f(URL.createObjectURL(t));
	}, [u]);
	return t(() => {
		o && m(o);
	}, [o, m]), t(() => () => {
		d && d.startsWith("blob:") && URL.revokeObjectURL(d);
	}), p ? /* @__PURE__ */ i(r, {
		src: URL.createObjectURL(p),
		sx: c
	}) : d ? /* @__PURE__ */ i(r, {
		src: d,
		sx: c
	}) : /* @__PURE__ */ i(r, {
		sx: c,
		children: l ? a(l) : ""
	});
};
export { o as Avatar };
