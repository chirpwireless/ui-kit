import { Table as e } from "./components/Table/index.es.js";
import { useReactTable as t } from "./hooks/useReactTable.es.js";
import { useDebounceCallback as n } from "../../hooks/use-debounce-callback.es.js";
import { useCallback as r, useEffect as i, useMemo as a, useRef as o } from "react";
import { Box as s } from "@mui/material";
import { jsx as c } from "react/jsx-runtime";
import { useVirtualizer as l } from "@tanstack/react-virtual";
// src/components/Table/TableVirtualizedInfinite.tsx
var u = 60, d = ({ data: u, columns: d, sx: f = {}, isLoading: p, enableSorting: m, defaultSorting: h, expandedRowIndex: g, hasNextPage: _, estimateSize: v = 60, onBottomReached: y, onRowClick: b, renderEmptyBlock: x, renderExpandableBlock: S, rowSx: C }) => {
	let w = o(null), T = n(y, 300), { table: E, rows: D } = t({
		data: u,
		columns: d,
		enableSorting: m,
		defaultSorting: h
	}), O = l({
		count: D.length,
		estimateSize: () => v,
		getScrollElement: () => w?.current ?? null,
		overscan: 5
	}), { measureElement: k } = O, A = O.getVirtualItems(), j = A.length ? A[A.length - 1].end - A[0].start : 0, M = Math.max(O.getTotalSize() - j, 0), N = a(() => {
		let e = A[0]?.start ?? 0;
		return A.map((t) => {
			let n = D[t.index], r = {
				height: `${v}px`,
				transform: `translateY(${e}px)`
			}, i = C?.(n);
			return {
				...n,
				sx: {
					...r,
					...i || {}
				},
				virtualIndex: t.index,
				measureRef: k
			};
		});
	}, [
		A,
		D,
		C,
		v,
		k
	]), P = r((e) => {
		if (!e || p || !_) return;
		let { scrollHeight: t, scrollTop: n, clientHeight: r } = e;
		(t - n - r < r * .3 || t <= r) && T?.();
	}, [
		T,
		p,
		_
	]);
	i(() => {
		P(w.current);
	}, [P]);
	let F = r((e) => {
		P(e.target);
	}, [P]), I = N.length > 0 && !!b;
	return /* @__PURE__ */ c(s, {
		ref: w,
		onScroll: F,
		sx: {
			height: "100%",
			overflow: "auto",
			position: "relative",
			borderRadius: "12px",
			width: "100%",
			overflowX: "hidden",
			"::-webkit-scrollbar": { width: "3px" },
			"::-webkit-scrollbar-thumb": { borderRadius: "4px" },
			"&:hover": { "::-webkit-scrollbar-thumb": { backgroundColor: "neutral.grey4" } }
		},
		children: /* @__PURE__ */ c(e, {
			table: E,
			rows: N,
			spacerSize: N.length ? M : void 0,
			sx: {
				...f,
				height: N.length ? "auto" : "100%",
				cursor: I ? "pointer" : "default"
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
export { u as DEFAULT_ESTIMATE_SIZE, d as TableVirtualizedInfinite };
