import { DragBox as e } from "./style.es.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { useDropzone as r } from "react-dropzone";
// src/components/Dropzone/index.tsx
var i = ({ children: i, sx: a, ...o }) => {
	let { getRootProps: s, getInputProps: c } = r(o);
	return /* @__PURE__ */ n(e, {
		sx: a,
		...s(),
		children: [/* @__PURE__ */ t("input", { ...c() }), i]
	});
};
export { i as Dropzone };
