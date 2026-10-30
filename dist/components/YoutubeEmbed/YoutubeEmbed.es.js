import { jsx as e } from "react/jsx-runtime";
// src/components/YoutubeEmbed/YoutubeEmbed.tsx
var t = ({ videoId: t, width: n = 340, height: r = 191, title: i = "YouTube Video", autoplay: a = !1 }) => /* @__PURE__ */ e("iframe", {
	title: i,
	width: n,
	height: r,
	src: `https://www.youtube.com/embed/${t}${a ? "?autoplay=1" : ""}`,
	frameBorder: "0",
	allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
	allowFullScreen: !0,
	loading: "lazy",
	style: { borderRadius: "8px" }
});
export { t as YoutubeEmbed };
