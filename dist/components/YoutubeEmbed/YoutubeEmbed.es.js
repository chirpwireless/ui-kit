import { jsxRuntimeExports as l } from "../../jsx-runtime-BgepH7Pb.js";
const i = ({
  videoId: e,
  width: o = 340,
  height: r = 191,
  title: t = "YouTube Video",
  autoplay: a = !1
}) => /* @__PURE__ */ l.jsx(
  "iframe",
  {
    title: t,
    width: o,
    height: r,
    src: `https://www.youtube.com/embed/${e}${a ? "?autoplay=1" : ""}`,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: !0,
    loading: "lazy",
    style: { borderRadius: "8px" }
  }
);
export {
  i as YoutubeEmbed
};
