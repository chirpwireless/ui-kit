import { Table as e } from "./components/Table/index.es.js";
import { useReactTable as t } from "./hooks/useReactTable.es.js";
import { useCallback as n, useEffect as r, useMemo as i, useRef as a } from "react";
import { Box as o } from "@mui/material";
import { jsx as s } from "react/jsx-runtime";
import { useVirtualizer as c } from "@tanstack/react-virtual";
// src/components/Table/TableVirtualized.tsx
var l = 40, u = ({ data: u, columns: d, sx: f = {}, isLoading: p, enableSorting: m, defaultSorting: h, expandedRowIndex: g, hasNextPage: _, estimateSize: v = l, onBottomReached: y, onRowClick: b, renderEmptyBlock: x, renderExpandableBlock: S }) => {
	let C = a(null), { table: w, rows: T } = t({
		data: u,
		columns: d,
		enableSorting: m,
		defaultSorting: h
	}), E = c({
		count: T.length,
		estimateSize: () => v,
		getScrollElement: () => C?.current ?? null,
		overscan: 5
	}), { measureElement: D } = E, O = E.getVirtualItems(), k = O.length ? O[O.length - 1].end - O[0].start : 0, A = Math.max(E.getTotalSize() - k, 0), j = i(() => {
		let e = O[0]?.start ?? 0;
		return O.map((t) => {
			let n = T[t.index], r = {
				height: `${v}px`,
				transform: `translateY(${e}px)`
			};
			return {
				...n,
				sx: r,
				virtualIndex: t.index,
				measureRef: D
			};
		});
	}, [
		O,
		T,
		v,
		D
	]), M = n((e) => {
		if (e) {
			let { scrollHeight: t, scrollTop: n, clientHeight: r } = e;
			t - n - r < r - 100 && !p && _ && y?.();
		}
	}, [
		y,
		p,
		_
	]), N = j.length > 0 && !!b;
	return r(() => {
		M(C.current);
	}, [M]), /* @__PURE__ */ s(o, {
		ref: C,
		onScroll: (e) => M(e.target),
		sx: {
			height: "100%",
			overflow: "auto"
		},
		children: /* @__PURE__ */ s(e, {
			table: w,
			rows: j,
			spacerSize: j.length ? A : void 0,
			sx: {
				...f,
				height: j.length ? "auto" : "100%",
				cursor: N ? "pointer" : "default"
			},
			isLoading: p,
			enableSorting: m,
			expandedRowIndex: g,
			onRowClick: b,
			renderEmptyBlock: x,
			renderExpandableBlock: S
		})
	});
};
export { u as TableVirtualized };
