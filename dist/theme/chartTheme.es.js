import { CurrentTheme as e } from "../styles/constants.es.js";
// src/theme/chartTheme.ts
var t = (e, t) => {
	let n = e.match(/^rgba?\(([^)]+)\)$/);
	if (!n) return e;
	let [r, i, a] = n[1].split(",").map((e) => e.trim());
	return `rgba(${r}, ${i}, ${a}, ${t})`;
}, n = (n) => {
	let r = n, i = r.palette.neutral?.primary ?? "", a = r.palette.neutral?.grey1 ?? "", o = r.palette.neutral?.grey4 ?? "", s = r.palette.neutral?.white ?? "", c = r.palette.borders?.primary ?? "";
	return {
		crosshair: { line: {
			stroke: i,
			strokeDasharray: "3 3",
			strokeOpacity: 1
		} },
		tooltip: {
			table: {
				marginTop: "8px",
				padding: 0
			},
			tableCell: {
				padding: "4px 0",
				color: t(i, .4)
			},
			tableCellValue: {
				color: t(i, .6),
				marginLeft: "16px"
			},
			container: {
				background: t(r.palette.mode === e.Dark ? a : s, r.palette.mode === e.Dark ? .5 : .92),
				backdropFilter: "blur(4px)",
				borderRadius: 12,
				border: `1px solid ${c}`,
				fontFamily: r.typography.fontFamily,
				padding: "8px 12px",
				fontSize: "12px",
				lineHeight: "14px",
				color: i
			},
			chip: {
				width: "8px",
				height: "8px",
				borderRadius: 1
			}
		},
		legends: { text: { fontSize: "12px" } },
		axis: { ticks: { text: {
			fill: o,
			fontSize: "10px",
			shapeRendering: "crispEdges",
			textShadow: `${r.palette.mode === e.Dark ? a : s} 0 0 5px`
		} } }
	};
};
export { n as createBarTheme };
