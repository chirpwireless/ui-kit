import { CurrentTheme as l } from "../styles/constants.es.js";
const s = (r, e) => {
  const t = r.match(/^rgba?\(([^)]+)\)$/);
  if (!t) return r;
  const a = t[1].split(",").map((p) => p.trim()), [n, o, i] = a;
  return `rgba(${n}, ${o}, ${i}, ${e})`;
}, h = (r) => {
  var p, c, d, m, x;
  const e = r, t = ((p = e.palette.neutral) == null ? void 0 : p.primary) ?? "", a = ((c = e.palette.neutral) == null ? void 0 : c.grey1) ?? "", n = ((d = e.palette.neutral) == null ? void 0 : d.grey4) ?? "", o = ((m = e.palette.neutral) == null ? void 0 : m.white) ?? "", i = ((x = e.palette.borders) == null ? void 0 : x.primary) ?? "";
  return {
    crosshair: {
      line: {
        stroke: t,
        strokeDasharray: "3 3",
        strokeOpacity: 1
      }
    },
    tooltip: {
      table: { marginTop: "8px", padding: 0 },
      tableCell: {
        padding: "4px 0",
        color: s(t, 0.4)
      },
      tableCellValue: {
        color: s(t, 0.6),
        marginLeft: "16px"
      },
      container: {
        background: s(
          e.palette.mode === l.Dark ? a : o,
          e.palette.mode === l.Dark ? 0.5 : 0.92
        ),
        backdropFilter: "blur(4px)",
        borderRadius: 12,
        border: `1px solid ${i}`,
        fontFamily: e.typography.fontFamily,
        padding: "8px 12px",
        fontSize: "12px",
        lineHeight: "14px",
        color: t
      },
      chip: { width: "8px", height: "8px", borderRadius: 1 }
    },
    legends: {
      text: { fontSize: "12px" }
    },
    axis: {
      ticks: {
        text: {
          fill: n,
          fontSize: "10px",
          shapeRendering: "crispEdges",
          textShadow: `${e.palette.mode === l.Dark ? a : o} 0 0 5px`
        }
      }
    }
  };
};
export {
  h as createBarTheme
};
