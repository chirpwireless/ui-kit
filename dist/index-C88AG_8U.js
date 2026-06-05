import * as K from "react";
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function I(e, o) {
  return typeof e == "function" ? e(o) : e;
}
function M(e, o) {
  return (t) => {
    o.setState((n) => ({
      ...n,
      [e]: I(t, n[e])
    }));
  };
}
function B(e) {
  return e instanceof Function;
}
function me(e) {
  return Array.isArray(e) && e.every((o) => typeof o == "number");
}
function ie(e, o) {
  const t = [], n = (r) => {
    r.forEach((i) => {
      t.push(i);
      const l = o(i);
      l != null && l.length && n(l);
    });
  };
  return n(e), t;
}
function C(e, o, t) {
  let n = [], r;
  return (i) => {
    let l;
    t.key && t.debug && (l = Date.now());
    const u = e(i);
    if (!(u.length !== n.length || u.some((d, S) => n[S] !== d)))
      return r;
    n = u;
    let g;
    if (t.key && t.debug && (g = Date.now()), r = o(...u), t == null || t.onChange == null || t.onChange(r), t.key && t.debug && t != null && t.debug()) {
      const d = Math.round((Date.now() - l) * 100) / 100, S = Math.round((Date.now() - g) * 100) / 100, f = S / 16, a = (c, p) => {
        for (c = String(c); c.length < p; )
          c = " " + c;
        return c;
      };
      console.info(`%c⏱ ${a(S, 5)} /${a(d, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * f, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return r;
  };
}
function m(e, o, t, n) {
  return {
    debug: () => {
      var r;
      return (r = e == null ? void 0 : e.debugAll) != null ? r : e[o];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: n
  };
}
function Re(e, o, t, n) {
  const r = () => {
    var l;
    return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
  }, i = {
    id: `${o.id}_${t.id}`,
    row: o,
    column: t,
    getValue: () => o.getValue(n),
    renderValue: r,
    getContext: C(() => [e, t, o, i], (l, u, s, g) => ({
      table: l,
      column: u,
      row: s,
      cell: g,
      getValue: g.getValue,
      renderValue: g.renderValue
    }), m(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, t, o, e);
  }, {}), i;
}
function we(e, o, t, n) {
  var r, i;
  const u = {
    ...e._getDefaultColumnDef(),
    ...o
  }, s = u.accessorKey;
  let g = (r = (i = u.id) != null ? i : s ? typeof String.prototype.replaceAll == "function" ? s.replaceAll(".", "_") : s.replace(/\./g, "_") : void 0) != null ? r : typeof u.header == "string" ? u.header : void 0, d;
  if (u.accessorFn ? d = u.accessorFn : s && (s.includes(".") ? d = (f) => {
    let a = f;
    for (const p of s.split(".")) {
      var c;
      a = (c = a) == null ? void 0 : c[p], process.env.NODE_ENV !== "production" && a === void 0 && console.warn(`"${p}" in deeply nested key "${s}" returned undefined.`);
    }
    return a;
  } : d = (f) => f[u.accessorKey]), !g)
    throw process.env.NODE_ENV !== "production" ? new Error(u.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let S = {
    id: `${String(g)}`,
    accessorFn: d,
    parent: n,
    depth: t,
    columnDef: u,
    columns: [],
    getFlatColumns: C(() => [!0], () => {
      var f;
      return [S, ...(f = S.columns) == null ? void 0 : f.flatMap((a) => a.getFlatColumns())];
    }, m(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: C(() => [e._getOrderColumnsFn()], (f) => {
      var a;
      if ((a = S.columns) != null && a.length) {
        let c = S.columns.flatMap((p) => p.getLeafColumns());
        return f(c);
      }
      return [S];
    }, m(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const f of e._features)
    f.createColumn == null || f.createColumn(S, e);
  return S;
}
const $ = "debugHeaders";
function oe(e, o, t) {
  var n;
  let i = {
    id: (n = t.id) != null ? n : o.id,
    column: o,
    index: t.index,
    isPlaceholder: !!t.isPlaceholder,
    placeholderId: t.placeholderId,
    depth: t.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const l = [], u = (s) => {
        s.subHeaders && s.subHeaders.length && s.subHeaders.map(u), l.push(s);
      };
      return u(i), l;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: o
    })
  };
  return e._features.forEach((l) => {
    l.createHeader == null || l.createHeader(i, e);
  }), i;
}
const he = {
  createTable: (e) => {
    e.getHeaderGroups = C(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n, r) => {
      var i, l;
      const u = (i = n == null ? void 0 : n.map((S) => t.find((f) => f.id === S)).filter(Boolean)) != null ? i : [], s = (l = r == null ? void 0 : r.map((S) => t.find((f) => f.id === S)).filter(Boolean)) != null ? l : [], g = t.filter((S) => !(n != null && n.includes(S.id)) && !(r != null && r.includes(S.id)));
      return L(o, [...u, ...g, ...s], e);
    }, m(e.options, $, "getHeaderGroups")), e.getCenterHeaderGroups = C(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n, r) => (t = t.filter((i) => !(n != null && n.includes(i.id)) && !(r != null && r.includes(i.id))), L(o, t, e, "center")), m(e.options, $, "getCenterHeaderGroups")), e.getLeftHeaderGroups = C(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (o, t, n) => {
      var r;
      const i = (r = n == null ? void 0 : n.map((l) => t.find((u) => u.id === l)).filter(Boolean)) != null ? r : [];
      return L(o, i, e, "left");
    }, m(e.options, $, "getLeftHeaderGroups")), e.getRightHeaderGroups = C(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (o, t, n) => {
      var r;
      const i = (r = n == null ? void 0 : n.map((l) => t.find((u) => u.id === l)).filter(Boolean)) != null ? r : [];
      return L(o, i, e, "right");
    }, m(e.options, $, "getRightHeaderGroups")), e.getFooterGroups = C(() => [e.getHeaderGroups()], (o) => [...o].reverse(), m(e.options, $, "getFooterGroups")), e.getLeftFooterGroups = C(() => [e.getLeftHeaderGroups()], (o) => [...o].reverse(), m(e.options, $, "getLeftFooterGroups")), e.getCenterFooterGroups = C(() => [e.getCenterHeaderGroups()], (o) => [...o].reverse(), m(e.options, $, "getCenterFooterGroups")), e.getRightFooterGroups = C(() => [e.getRightHeaderGroups()], (o) => [...o].reverse(), m(e.options, $, "getRightFooterGroups")), e.getFlatHeaders = C(() => [e.getHeaderGroups()], (o) => o.map((t) => t.headers).flat(), m(e.options, $, "getFlatHeaders")), e.getLeftFlatHeaders = C(() => [e.getLeftHeaderGroups()], (o) => o.map((t) => t.headers).flat(), m(e.options, $, "getLeftFlatHeaders")), e.getCenterFlatHeaders = C(() => [e.getCenterHeaderGroups()], (o) => o.map((t) => t.headers).flat(), m(e.options, $, "getCenterFlatHeaders")), e.getRightFlatHeaders = C(() => [e.getRightHeaderGroups()], (o) => o.map((t) => t.headers).flat(), m(e.options, $, "getRightFlatHeaders")), e.getCenterLeafHeaders = C(() => [e.getCenterFlatHeaders()], (o) => o.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), m(e.options, $, "getCenterLeafHeaders")), e.getLeftLeafHeaders = C(() => [e.getLeftFlatHeaders()], (o) => o.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), m(e.options, $, "getLeftLeafHeaders")), e.getRightLeafHeaders = C(() => [e.getRightFlatHeaders()], (o) => o.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), m(e.options, $, "getRightLeafHeaders")), e.getLeafHeaders = C(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (o, t, n) => {
      var r, i, l, u, s, g;
      return [...(r = (i = o[0]) == null ? void 0 : i.headers) != null ? r : [], ...(l = (u = t[0]) == null ? void 0 : u.headers) != null ? l : [], ...(s = (g = n[0]) == null ? void 0 : g.headers) != null ? s : []].map((d) => d.getLeafHeaders()).flat();
    }, m(e.options, $, "getLeafHeaders"));
  }
};
function L(e, o, t, n) {
  var r, i;
  let l = 0;
  const u = function(f, a) {
    a === void 0 && (a = 1), l = Math.max(l, a), f.filter((c) => c.getIsVisible()).forEach((c) => {
      var p;
      (p = c.columns) != null && p.length && u(c.columns, a + 1);
    }, 0);
  };
  u(e);
  let s = [];
  const g = (f, a) => {
    const c = {
      depth: a,
      id: [n, `${a}`].filter(Boolean).join("_"),
      headers: []
    }, p = [];
    f.forEach((w) => {
      const R = [...p].reverse()[0], h = w.column.depth === c.depth;
      let _, V = !1;
      if (h && w.column.parent ? _ = w.column.parent : (_ = w.column, V = !0), R && (R == null ? void 0 : R.column) === _)
        R.subHeaders.push(w);
      else {
        const F = oe(t, _, {
          id: [n, a, _.id, w == null ? void 0 : w.id].filter(Boolean).join("_"),
          isPlaceholder: V,
          placeholderId: V ? `${p.filter((v) => v.column === _).length}` : void 0,
          depth: a,
          index: p.length
        });
        F.subHeaders.push(w), p.push(F);
      }
      c.headers.push(w), w.headerGroup = c;
    }), s.push(c), a > 0 && g(p, a - 1);
  }, d = o.map((f, a) => oe(t, f, {
    depth: l,
    index: a
  }));
  g(d, l - 1), s.reverse();
  const S = (f) => f.filter((c) => c.column.getIsVisible()).map((c) => {
    let p = 0, w = 0, R = [0];
    c.subHeaders && c.subHeaders.length ? (R = [], S(c.subHeaders).forEach((_) => {
      let {
        colSpan: V,
        rowSpan: F
      } = _;
      p += V, R.push(F);
    })) : p = 1;
    const h = Math.min(...R);
    return w = w + h, c.colSpan = p, c.rowSpan = w, {
      colSpan: p,
      rowSpan: w
    };
  });
  return S((r = (i = s[0]) == null ? void 0 : i.headers) != null ? r : []), s;
}
const le = (e, o, t, n, r, i, l) => {
  let u = {
    id: o,
    index: n,
    original: t,
    depth: r,
    parentId: l,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (s) => {
      if (u._valuesCache.hasOwnProperty(s))
        return u._valuesCache[s];
      const g = e.getColumn(s);
      if (g != null && g.accessorFn)
        return u._valuesCache[s] = g.accessorFn(u.original, n), u._valuesCache[s];
    },
    getUniqueValues: (s) => {
      if (u._uniqueValuesCache.hasOwnProperty(s))
        return u._uniqueValuesCache[s];
      const g = e.getColumn(s);
      if (g != null && g.accessorFn)
        return g.columnDef.getUniqueValues ? (u._uniqueValuesCache[s] = g.columnDef.getUniqueValues(u.original, n), u._uniqueValuesCache[s]) : (u._uniqueValuesCache[s] = [u.getValue(s)], u._uniqueValuesCache[s]);
    },
    renderValue: (s) => {
      var g;
      return (g = u.getValue(s)) != null ? g : e.options.renderFallbackValue;
    },
    subRows: i ?? [],
    getLeafRows: () => ie(u.subRows, (s) => s.subRows),
    getParentRow: () => u.parentId ? e.getRow(u.parentId, !0) : void 0,
    getParentRows: () => {
      let s = [], g = u;
      for (; ; ) {
        const d = g.getParentRow();
        if (!d) break;
        s.push(d), g = d;
      }
      return s.reverse();
    },
    getAllCells: C(() => [e.getAllLeafColumns()], (s) => s.map((g) => Re(e, u, g, g.id)), m(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: C(() => [u.getAllCells()], (s) => s.reduce((g, d) => (g[d.column.id] = d, g), {}), m(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let s = 0; s < e._features.length; s++) {
    const g = e._features[s];
    g == null || g.createRow == null || g.createRow(u, e);
  }
  return u;
}, ve = {
  createColumn: (e, o) => {
    e._getFacetedRowModel = o.options.getFacetedRowModel && o.options.getFacetedRowModel(o, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : o.getPreFilteredRowModel(), e._getFacetedUniqueValues = o.options.getFacetedUniqueValues && o.options.getFacetedUniqueValues(o, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = o.options.getFacetedMinMaxValues && o.options.getFacetedMinMaxValues(o, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, ue = (e, o, t) => {
  var n, r;
  const i = t == null || (n = t.toString()) == null ? void 0 : n.toLowerCase();
  return !!(!((r = e.getValue(o)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
};
ue.autoRemove = (e) => P(e);
const se = (e, o, t) => {
  var n;
  return !!(!((n = e.getValue(o)) == null || (n = n.toString()) == null) && n.includes(t));
};
se.autoRemove = (e) => P(e);
const ge = (e, o, t) => {
  var n;
  return ((n = e.getValue(o)) == null || (n = n.toString()) == null ? void 0 : n.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
ge.autoRemove = (e) => P(e);
const ae = (e, o, t) => {
  var n;
  return (n = e.getValue(o)) == null ? void 0 : n.includes(t);
};
ae.autoRemove = (e) => P(e);
const de = (e, o, t) => !t.some((n) => {
  var r;
  return !((r = e.getValue(o)) != null && r.includes(n));
});
de.autoRemove = (e) => P(e) || !(e != null && e.length);
const fe = (e, o, t) => t.some((n) => {
  var r;
  return (r = e.getValue(o)) == null ? void 0 : r.includes(n);
});
fe.autoRemove = (e) => P(e) || !(e != null && e.length);
const ce = (e, o, t) => e.getValue(o) === t;
ce.autoRemove = (e) => P(e);
const pe = (e, o, t) => e.getValue(o) == t;
pe.autoRemove = (e) => P(e);
const b = (e, o, t) => {
  let [n, r] = t;
  const i = e.getValue(o);
  return i >= n && i <= r;
};
b.resolveFilterValue = (e) => {
  let [o, t] = e, n = typeof o != "number" ? parseFloat(o) : o, r = typeof t != "number" ? parseFloat(t) : t, i = o === null || Number.isNaN(n) ? -1 / 0 : n, l = t === null || Number.isNaN(r) ? 1 / 0 : r;
  if (i > l) {
    const u = i;
    i = l, l = u;
  }
  return [i, l];
};
b.autoRemove = (e) => P(e) || P(e[0]) && P(e[1]);
const x = {
  includesString: ue,
  includesStringSensitive: se,
  equalsString: ge,
  arrIncludes: ae,
  arrIncludesAll: de,
  arrIncludesSome: fe,
  equals: ce,
  weakEquals: pe,
  inNumberRange: b
};
function P(e) {
  return e == null || e === "";
}
const _e = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: M("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, o) => {
    e.getAutoFilterFn = () => {
      const t = o.getCoreRowModel().flatRows[0], n = t == null ? void 0 : t.getValue(e.id);
      return typeof n == "string" ? x.includesString : typeof n == "number" ? x.inNumberRange : typeof n == "boolean" || n !== null && typeof n == "object" ? x.equals : Array.isArray(n) ? x.arrIncludes : x.weakEquals;
    }, e.getFilterFn = () => {
      var t, n;
      return B(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (n = o.options.filterFns) == null ? void 0 : n[e.columnDef.filterFn]) != null ? t : x[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var t, n, r;
      return ((t = e.columnDef.enableColumnFilter) != null ? t : !0) && ((n = o.options.enableColumnFilters) != null ? n : !0) && ((r = o.options.enableFilters) != null ? r : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var t;
      return (t = o.getState().columnFilters) == null || (t = t.find((n) => n.id === e.id)) == null ? void 0 : t.value;
    }, e.getFilterIndex = () => {
      var t, n;
      return (t = (n = o.getState().columnFilters) == null ? void 0 : n.findIndex((r) => r.id === e.id)) != null ? t : -1;
    }, e.setFilterValue = (t) => {
      o.setColumnFilters((n) => {
        const r = e.getFilterFn(), i = n == null ? void 0 : n.find((d) => d.id === e.id), l = I(t, i ? i.value : void 0);
        if (re(r, l, e)) {
          var u;
          return (u = n == null ? void 0 : n.filter((d) => d.id !== e.id)) != null ? u : [];
        }
        const s = {
          id: e.id,
          value: l
        };
        if (i) {
          var g;
          return (g = n == null ? void 0 : n.map((d) => d.id === e.id ? s : d)) != null ? g : [];
        }
        return n != null && n.length ? [...n, s] : [s];
      });
    };
  },
  createRow: (e, o) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (o) => {
      const t = e.getAllLeafColumns(), n = (r) => {
        var i;
        return (i = I(o, r)) == null ? void 0 : i.filter((l) => {
          const u = t.find((s) => s.id === l.id);
          if (u) {
            const s = u.getFilterFn();
            if (re(s, l.value, u))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(n);
    }, e.resetColumnFilters = (o) => {
      var t, n;
      e.setColumnFilters(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.columnFilters) != null ? t : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function re(e, o, t) {
  return (e && e.autoRemove ? e.autoRemove(o, t) : !1) || typeof o > "u" || typeof o == "string" && !o;
}
const Fe = (e, o, t) => t.reduce((n, r) => {
  const i = r.getValue(e);
  return n + (typeof i == "number" ? i : 0);
}, 0), $e = (e, o, t) => {
  let n;
  return t.forEach((r) => {
    const i = r.getValue(e);
    i != null && (n > i || n === void 0 && i >= i) && (n = i);
  }), n;
}, Ve = (e, o, t) => {
  let n;
  return t.forEach((r) => {
    const i = r.getValue(e);
    i != null && (n < i || n === void 0 && i >= i) && (n = i);
  }), n;
}, Me = (e, o, t) => {
  let n, r;
  return t.forEach((i) => {
    const l = i.getValue(e);
    l != null && (n === void 0 ? l >= l && (n = r = l) : (n > l && (n = l), r < l && (r = l)));
  }), [n, r];
}, Pe = (e, o) => {
  let t = 0, n = 0;
  if (o.forEach((r) => {
    let i = r.getValue(e);
    i != null && (i = +i) >= i && (++t, n += i);
  }), t) return n / t;
}, xe = (e, o) => {
  if (!o.length)
    return;
  const t = o.map((i) => i.getValue(e));
  if (!me(t))
    return;
  if (t.length === 1)
    return t[0];
  const n = Math.floor(t.length / 2), r = t.sort((i, l) => i - l);
  return t.length % 2 !== 0 ? r[n] : (r[n - 1] + r[n]) / 2;
}, Ie = (e, o) => Array.from(new Set(o.map((t) => t.getValue(e))).values()), ye = (e, o) => new Set(o.map((t) => t.getValue(e))).size, Ee = (e, o) => o.length, T = {
  sum: Fe,
  min: $e,
  max: Ve,
  extent: Me,
  mean: Pe,
  median: xe,
  unique: Ie,
  uniqueCount: ye,
  count: Ee
}, De = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var o, t;
      return (o = (t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) != null ? o : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: M("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, o) => {
    e.toggleGrouping = () => {
      o.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((n) => n !== e.id) : [...t ?? [], e.id]);
    }, e.getCanGroup = () => {
      var t, n;
      return ((t = e.columnDef.enableGrouping) != null ? t : !0) && ((n = o.options.enableGrouping) != null ? n : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var t;
      return (t = o.getState().grouping) == null ? void 0 : t.includes(e.id);
    }, e.getGroupedIndex = () => {
      var t;
      return (t = o.getState().grouping) == null ? void 0 : t.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const t = e.getCanGroup();
      return () => {
        t && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const t = o.getCoreRowModel().flatRows[0], n = t == null ? void 0 : t.getValue(e.id);
      if (typeof n == "number")
        return T.sum;
      if (Object.prototype.toString.call(n) === "[object Date]")
        return T.extent;
    }, e.getAggregationFn = () => {
      var t, n;
      if (!e)
        throw new Error();
      return B(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (n = o.options.aggregationFns) == null ? void 0 : n[e.columnDef.aggregationFn]) != null ? t : T[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (o) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(o), e.resetGrouping = (o) => {
      var t, n;
      e.setGrouping(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.grouping) != null ? t : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, o) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (t) => {
      if (e._groupingValuesCache.hasOwnProperty(t))
        return e._groupingValuesCache[t];
      const n = o.getColumn(t);
      return n != null && n.columnDef.getGroupingValue ? (e._groupingValuesCache[t] = n.columnDef.getGroupingValue(e.original), e._groupingValuesCache[t]) : e.getValue(t);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, o, t, n) => {
    e.getIsGrouped = () => o.getIsGrouped() && o.id === t.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && o.getIsGrouped(), e.getIsAggregated = () => {
      var r;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((r = t.subRows) != null && r.length);
    };
  }
};
function Ge(e, o, t) {
  if (!(o != null && o.length) || !t)
    return e;
  const n = e.filter((i) => !o.includes(i.id));
  return t === "remove" ? n : [...o.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...n];
}
const He = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: M("columnOrder", e)
  }),
  createColumn: (e, o) => {
    e.getIndex = C((t) => [H(o, t)], (t) => t.findIndex((n) => n.id === e.id), m(o.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var n;
      return ((n = H(o, t)[0]) == null ? void 0 : n.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var n;
      const r = H(o, t);
      return ((n = r[r.length - 1]) == null ? void 0 : n.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (o) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(o), e.resetColumnOrder = (o) => {
      var t;
      e.setColumnOrder(o ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = C(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (o, t, n) => (r) => {
      let i = [];
      if (!(o != null && o.length))
        i = r;
      else {
        const l = [...o], u = [...r];
        for (; u.length && l.length; ) {
          const s = l.shift(), g = u.findIndex((d) => d.id === s);
          g > -1 && i.push(u.splice(g, 1)[0]);
        }
        i = [...i, ...u];
      }
      return Ge(i, t, n);
    }, m(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, q = () => ({
  left: [],
  right: []
}), Ae = {
  getInitialState: (e) => ({
    columnPinning: q(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: M("columnPinning", e)
  }),
  createColumn: (e, o) => {
    e.pin = (t) => {
      const n = e.getLeafColumns().map((r) => r.id).filter(Boolean);
      o.setColumnPinning((r) => {
        var i, l;
        if (t === "right") {
          var u, s;
          return {
            left: ((u = r == null ? void 0 : r.left) != null ? u : []).filter((S) => !(n != null && n.includes(S))),
            right: [...((s = r == null ? void 0 : r.right) != null ? s : []).filter((S) => !(n != null && n.includes(S))), ...n]
          };
        }
        if (t === "left") {
          var g, d;
          return {
            left: [...((g = r == null ? void 0 : r.left) != null ? g : []).filter((S) => !(n != null && n.includes(S))), ...n],
            right: ((d = r == null ? void 0 : r.right) != null ? d : []).filter((S) => !(n != null && n.includes(S)))
          };
        }
        return {
          left: ((i = r == null ? void 0 : r.left) != null ? i : []).filter((S) => !(n != null && n.includes(S))),
          right: ((l = r == null ? void 0 : r.right) != null ? l : []).filter((S) => !(n != null && n.includes(S)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((n) => {
      var r, i, l;
      return ((r = n.columnDef.enablePinning) != null ? r : !0) && ((i = (l = o.options.enableColumnPinning) != null ? l : o.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((u) => u.id), {
        left: n,
        right: r
      } = o.getState().columnPinning, i = t.some((u) => n == null ? void 0 : n.includes(u)), l = t.some((u) => r == null ? void 0 : r.includes(u));
      return i ? "left" : l ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, n;
      const r = e.getIsPinned();
      return r ? (t = (n = o.getState().columnPinning) == null || (n = n[r]) == null ? void 0 : n.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, o) => {
    e.getCenterVisibleCells = C(() => [e._getAllVisibleCells(), o.getState().columnPinning.left, o.getState().columnPinning.right], (t, n, r) => {
      const i = [...n ?? [], ...r ?? []];
      return t.filter((l) => !i.includes(l.column.id));
    }, m(o.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = C(() => [e._getAllVisibleCells(), o.getState().columnPinning.left], (t, n) => (n ?? []).map((i) => t.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), m(o.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = C(() => [e._getAllVisibleCells(), o.getState().columnPinning.right], (t, n) => (n ?? []).map((i) => t.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), m(o.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (o) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(o), e.resetColumnPinning = (o) => {
      var t, n;
      return e.setColumnPinning(o ? q() : (t = (n = e.initialState) == null ? void 0 : n.columnPinning) != null ? t : q());
    }, e.getIsSomeColumnsPinned = (o) => {
      var t;
      const n = e.getState().columnPinning;
      if (!o) {
        var r, i;
        return !!((r = n.left) != null && r.length || (i = n.right) != null && i.length);
      }
      return !!((t = n[o]) != null && t.length);
    }, e.getLeftLeafColumns = C(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (o, t) => (t ?? []).map((n) => o.find((r) => r.id === n)).filter(Boolean), m(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = C(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (o, t) => (t ?? []).map((n) => o.find((r) => r.id === n)).filter(Boolean), m(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = C(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n) => {
      const r = [...t ?? [], ...n ?? []];
      return o.filter((i) => !r.includes(i.id));
    }, m(e.options, "debugColumns", "getCenterLeafColumns"));
  }
};
function Le(e) {
  return e || (typeof document < "u" ? document : null);
}
const z = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, N = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), ze = {
  getDefaultColumnDef: () => z,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: N(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: M("columnSizing", e),
    onColumnSizingInfoChange: M("columnSizingInfo", e)
  }),
  createColumn: (e, o) => {
    e.getSize = () => {
      var t, n, r;
      const i = o.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : z.minSize, (n = i ?? e.columnDef.size) != null ? n : z.size), (r = e.columnDef.maxSize) != null ? r : z.maxSize);
    }, e.getStart = C((t) => [t, H(o, t), o.getState().columnSizing], (t, n) => n.slice(0, e.getIndex(t)).reduce((r, i) => r + i.getSize(), 0), m(o.options, "debugColumns", "getStart")), e.getAfter = C((t) => [t, H(o, t), o.getState().columnSizing], (t, n) => n.slice(e.getIndex(t) + 1).reduce((r, i) => r + i.getSize(), 0), m(o.options, "debugColumns", "getAfter")), e.resetSize = () => {
      o.setColumnSizing((t) => {
        let {
          [e.id]: n,
          ...r
        } = t;
        return r;
      });
    }, e.getCanResize = () => {
      var t, n;
      return ((t = e.columnDef.enableResizing) != null ? t : !0) && ((n = o.options.enableColumnResizing) != null ? n : !0);
    }, e.getIsResizing = () => o.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, o) => {
    e.getSize = () => {
      let t = 0;
      const n = (r) => {
        if (r.subHeaders.length)
          r.subHeaders.forEach(n);
        else {
          var i;
          t += (i = r.column.getSize()) != null ? i : 0;
        }
      };
      return n(e), t;
    }, e.getStart = () => {
      if (e.index > 0) {
        const t = e.headerGroup.headers[e.index - 1];
        return t.getStart() + t.getSize();
      }
      return 0;
    }, e.getResizeHandler = (t) => {
      const n = o.getColumn(e.column.id), r = n == null ? void 0 : n.getCanResize();
      return (i) => {
        if (!n || !r || (i.persist == null || i.persist(), k(i) && i.touches && i.touches.length > 1))
          return;
        const l = e.getSize(), u = e ? e.getLeafHeaders().map((R) => [R.column.id, R.column.getSize()]) : [[n.id, n.getSize()]], s = k(i) ? Math.round(i.touches[0].clientX) : i.clientX, g = {}, d = (R, h) => {
          typeof h == "number" && (o.setColumnSizingInfo((_) => {
            var V, F;
            const v = o.options.columnResizeDirection === "rtl" ? -1 : 1, E = (h - ((V = _ == null ? void 0 : _.startOffset) != null ? V : 0)) * v, D = Math.max(E / ((F = _ == null ? void 0 : _.startSize) != null ? F : 0), -0.999999);
            return _.columnSizingStart.forEach((A) => {
              let [Ce, ne] = A;
              g[Ce] = Math.round(Math.max(ne + ne * D, 0) * 100) / 100;
            }), {
              ..._,
              deltaOffset: E,
              deltaPercentage: D
            };
          }), (o.options.columnResizeMode === "onChange" || R === "end") && o.setColumnSizing((_) => ({
            ..._,
            ...g
          })));
        }, S = (R) => d("move", R), f = (R) => {
          d("end", R), o.setColumnSizingInfo((h) => ({
            ...h,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, a = Le(t), c = {
          moveHandler: (R) => S(R.clientX),
          upHandler: (R) => {
            a == null || a.removeEventListener("mousemove", c.moveHandler), a == null || a.removeEventListener("mouseup", c.upHandler), f(R.clientX);
          }
        }, p = {
          moveHandler: (R) => (R.cancelable && (R.preventDefault(), R.stopPropagation()), S(R.touches[0].clientX), !1),
          upHandler: (R) => {
            var h;
            a == null || a.removeEventListener("touchmove", p.moveHandler), a == null || a.removeEventListener("touchend", p.upHandler), R.cancelable && (R.preventDefault(), R.stopPropagation()), f((h = R.touches[0]) == null ? void 0 : h.clientX);
          }
        }, w = Oe() ? {
          passive: !1
        } : !1;
        k(i) ? (a == null || a.addEventListener("touchmove", p.moveHandler, w), a == null || a.addEventListener("touchend", p.upHandler, w)) : (a == null || a.addEventListener("mousemove", c.moveHandler, w), a == null || a.addEventListener("mouseup", c.upHandler, w)), o.setColumnSizingInfo((R) => ({
          ...R,
          startOffset: s,
          startSize: l,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: u,
          isResizingColumn: n.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (o) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(o), e.setColumnSizingInfo = (o) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(o), e.resetColumnSizing = (o) => {
      var t;
      e.setColumnSizing(o ? {} : (t = e.initialState.columnSizing) != null ? t : {});
    }, e.resetHeaderSizeInfo = (o) => {
      var t;
      e.setColumnSizingInfo(o ? N() : (t = e.initialState.columnSizingInfo) != null ? t : N());
    }, e.getTotalSize = () => {
      var o, t;
      return (o = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
    }, e.getLeftTotalSize = () => {
      var o, t;
      return (o = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
    }, e.getCenterTotalSize = () => {
      var o, t;
      return (o = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
    }, e.getRightTotalSize = () => {
      var o, t;
      return (o = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
    };
  }
};
let O = null;
function Oe() {
  if (typeof O == "boolean") return O;
  let e = !1;
  try {
    const o = {
      get passive() {
        return e = !0, !1;
      }
    }, t = () => {
    };
    window.addEventListener("test", t, o), window.removeEventListener("test", t);
  } catch {
    e = !1;
  }
  return O = e, O;
}
function k(e) {
  return e.type === "touchstart";
}
const Be = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: M("columnVisibility", e)
  }),
  createColumn: (e, o) => {
    e.toggleVisibility = (t) => {
      e.getCanHide() && o.setColumnVisibility((n) => ({
        ...n,
        [e.id]: t ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var t, n;
      const r = e.columns;
      return (t = r.length ? r.some((i) => i.getIsVisible()) : (n = o.getState().columnVisibility) == null ? void 0 : n[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, n;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((n = o.options.enableHiding) != null ? n : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, o) => {
    e._getAllVisibleCells = C(() => [e.getAllCells(), o.getState().columnVisibility], (t) => t.filter((n) => n.column.getIsVisible()), m(o.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = C(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, n, r) => [...t, ...n, ...r], m(o.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const o = (t, n) => C(() => [n(), n().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")], (r) => r.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), m(e.options, "debugColumns", t));
    e.getVisibleFlatColumns = o("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = o("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = o("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = o("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = o("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var n;
      e.setColumnVisibility(t ? {} : (n = e.initialState.columnVisibility) != null ? n : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var n;
      t = (n = t) != null ? n : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, i) => ({
        ...r,
        [i.id]: t || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var n;
      e.toggleAllColumnsVisible((n = t.target) == null ? void 0 : n.checked);
    };
  }
};
function H(e, o) {
  return o ? o === "center" ? e.getCenterVisibleLeafColumns() : o === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const Te = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, qe = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: M("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (o) => {
      var t;
      const n = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[o.id]) == null ? void 0 : t.getValue();
      return typeof n == "string" || typeof n == "number";
    }
  }),
  createColumn: (e, o) => {
    e.getCanGlobalFilter = () => {
      var t, n, r, i;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((n = o.options.enableGlobalFilter) != null ? n : !0) && ((r = o.options.enableFilters) != null ? r : !0) && ((i = o.options.getColumnCanGlobalFilter == null ? void 0 : o.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => x.includesString, e.getGlobalFilterFn = () => {
      var o, t;
      const {
        globalFilterFn: n
      } = e.options;
      return B(n) ? n : n === "auto" ? e.getGlobalAutoFilterFn() : (o = (t = e.options.filterFns) == null ? void 0 : t[n]) != null ? o : x[n];
    }, e.setGlobalFilter = (o) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(o);
    }, e.resetGlobalFilter = (o) => {
      e.setGlobalFilter(o ? void 0 : e.initialState.globalFilter);
    };
  }
}, Ne = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: M("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let o = !1, t = !1;
    e._autoResetExpanded = () => {
      var n, r;
      if (!o) {
        e._queue(() => {
          o = !0;
        });
        return;
      }
      if ((n = (r = e.options.autoResetAll) != null ? r : e.options.autoResetExpanded) != null ? n : !e.options.manualExpanding) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetExpanded(), t = !1;
        });
      }
    }, e.setExpanded = (n) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(n), e.toggleAllRowsExpanded = (n) => {
      n ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (n) => {
      var r, i;
      e.setExpanded(n ? {} : (r = (i = e.initialState) == null ? void 0 : i.expanded) != null ? r : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((n) => n.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (n) => {
      n.persist == null || n.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const n = e.getState().expanded;
      return n === !0 || Object.values(n).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const n = e.getState().expanded;
      return typeof n == "boolean" ? n === !0 : !(!Object.keys(n).length || e.getRowModel().flatRows.some((r) => !r.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let n = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const l = i.split(".");
        n = Math.max(n, l.length);
      }), n;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, o) => {
    e.toggleExpanded = (t) => {
      o.setExpanded((n) => {
        var r;
        const i = n === !0 ? !0 : !!(n != null && n[e.id]);
        let l = {};
        if (n === !0 ? Object.keys(o.getRowModel().rowsById).forEach((u) => {
          l[u] = !0;
        }) : l = n, t = (r = t) != null ? r : !i, !i && t)
          return {
            ...l,
            [e.id]: !0
          };
        if (i && !t) {
          const {
            [e.id]: u,
            ...s
          } = l;
          return s;
        }
        return n;
      });
    }, e.getIsExpanded = () => {
      var t;
      const n = o.getState().expanded;
      return !!((t = o.options.getIsRowExpanded == null ? void 0 : o.options.getIsRowExpanded(e)) != null ? t : n === !0 || n != null && n[e.id]);
    }, e.getCanExpand = () => {
      var t, n, r;
      return (t = o.options.getRowCanExpand == null ? void 0 : o.options.getRowCanExpand(e)) != null ? t : ((n = o.options.enableExpanding) != null ? n : !0) && !!((r = e.subRows) != null && r.length);
    }, e.getIsAllParentsExpanded = () => {
      let t = !0, n = e;
      for (; t && n.parentId; )
        n = o.getRow(n.parentId, !0), t = n.getIsExpanded();
      return t;
    }, e.getToggleExpandedHandler = () => {
      const t = e.getCanExpand();
      return () => {
        t && e.toggleExpanded();
      };
    };
  }
}, J = 0, Q = 10, j = () => ({
  pageIndex: J,
  pageSize: Q
}), ke = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...j(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: M("pagination", e)
  }),
  createTable: (e) => {
    let o = !1, t = !1;
    e._autoResetPageIndex = () => {
      var n, r;
      if (!o) {
        e._queue(() => {
          o = !0;
        });
        return;
      }
      if ((n = (r = e.options.autoResetAll) != null ? r : e.options.autoResetPageIndex) != null ? n : !e.options.manualPagination) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetPageIndex(), t = !1;
        });
      }
    }, e.setPagination = (n) => {
      const r = (i) => I(n, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
    }, e.resetPagination = (n) => {
      var r;
      e.setPagination(n ? j() : (r = e.initialState.pagination) != null ? r : j());
    }, e.setPageIndex = (n) => {
      e.setPagination((r) => {
        let i = I(n, r.pageIndex);
        const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, l)), {
          ...r,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (n) => {
      var r, i;
      e.setPageIndex(n ? J : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : J);
    }, e.resetPageSize = (n) => {
      var r, i;
      e.setPageSize(n ? Q : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : Q);
    }, e.setPageSize = (n) => {
      e.setPagination((r) => {
        const i = Math.max(1, I(n, r.pageSize)), l = r.pageSize * r.pageIndex, u = Math.floor(l / i);
        return {
          ...r,
          pageIndex: u,
          pageSize: i
        };
      });
    }, e.setPageCount = (n) => e.setPagination((r) => {
      var i;
      let l = I(n, (i = e.options.pageCount) != null ? i : -1);
      return typeof l == "number" && (l = Math.max(-1, l)), {
        ...r,
        pageCount: l
      };
    }), e.getPageOptions = C(() => [e.getPageCount()], (n) => {
      let r = [];
      return n && n > 0 && (r = [...new Array(n)].fill(null).map((i, l) => l)), r;
    }, m(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: n
      } = e.getState().pagination, r = e.getPageCount();
      return r === -1 ? !0 : r === 0 ? !1 : n < r - 1;
    }, e.previousPage = () => e.setPageIndex((n) => n - 1), e.nextPage = () => e.setPageIndex((n) => n + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var n;
      return (n = e.options.pageCount) != null ? n : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var n;
      return (n = e.options.rowCount) != null ? n : e.getPrePaginationRowModel().rows.length;
    };
  }
}, U = () => ({
  top: [],
  bottom: []
}), je = {
  getInitialState: (e) => ({
    rowPinning: U(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: M("rowPinning", e)
  }),
  createRow: (e, o) => {
    e.pin = (t, n, r) => {
      const i = n ? e.getLeafRows().map((s) => {
        let {
          id: g
        } = s;
        return g;
      }) : [], l = r ? e.getParentRows().map((s) => {
        let {
          id: g
        } = s;
        return g;
      }) : [], u = /* @__PURE__ */ new Set([...l, e.id, ...i]);
      o.setRowPinning((s) => {
        var g, d;
        if (t === "bottom") {
          var S, f;
          return {
            top: ((S = s == null ? void 0 : s.top) != null ? S : []).filter((p) => !(u != null && u.has(p))),
            bottom: [...((f = s == null ? void 0 : s.bottom) != null ? f : []).filter((p) => !(u != null && u.has(p))), ...Array.from(u)]
          };
        }
        if (t === "top") {
          var a, c;
          return {
            top: [...((a = s == null ? void 0 : s.top) != null ? a : []).filter((p) => !(u != null && u.has(p))), ...Array.from(u)],
            bottom: ((c = s == null ? void 0 : s.bottom) != null ? c : []).filter((p) => !(u != null && u.has(p)))
          };
        }
        return {
          top: ((g = s == null ? void 0 : s.top) != null ? g : []).filter((p) => !(u != null && u.has(p))),
          bottom: ((d = s == null ? void 0 : s.bottom) != null ? d : []).filter((p) => !(u != null && u.has(p)))
        };
      });
    }, e.getCanPin = () => {
      var t;
      const {
        enableRowPinning: n,
        enablePinning: r
      } = o.options;
      return typeof n == "function" ? n(e) : (t = n ?? r) != null ? t : !0;
    }, e.getIsPinned = () => {
      const t = [e.id], {
        top: n,
        bottom: r
      } = o.getState().rowPinning, i = t.some((u) => n == null ? void 0 : n.includes(u)), l = t.some((u) => r == null ? void 0 : r.includes(u));
      return i ? "top" : l ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, n;
      const r = e.getIsPinned();
      if (!r) return -1;
      const i = (t = r === "top" ? o.getTopRows() : o.getBottomRows()) == null ? void 0 : t.map((l) => {
        let {
          id: u
        } = l;
        return u;
      });
      return (n = i == null ? void 0 : i.indexOf(e.id)) != null ? n : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (o) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(o), e.resetRowPinning = (o) => {
      var t, n;
      return e.setRowPinning(o ? U() : (t = (n = e.initialState) == null ? void 0 : n.rowPinning) != null ? t : U());
    }, e.getIsSomeRowsPinned = (o) => {
      var t;
      const n = e.getState().rowPinning;
      if (!o) {
        var r, i;
        return !!((r = n.top) != null && r.length || (i = n.bottom) != null && i.length);
      }
      return !!((t = n[o]) != null && t.length);
    }, e._getPinnedRows = (o, t, n) => {
      var r;
      return ((r = e.options.keepPinnedRows) == null || r ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (t ?? []).map((l) => {
          const u = e.getRow(l, !0);
          return u.getIsAllParentsExpanded() ? u : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (t ?? []).map((l) => o.find((u) => u.id === l))
      )).filter(Boolean).map((l) => ({
        ...l,
        position: n
      }));
    }, e.getTopRows = C(() => [e.getRowModel().rows, e.getState().rowPinning.top], (o, t) => e._getPinnedRows(o, t, "top"), m(e.options, "debugRows", "getTopRows")), e.getBottomRows = C(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (o, t) => e._getPinnedRows(o, t, "bottom"), m(e.options, "debugRows", "getBottomRows")), e.getCenterRows = C(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (o, t, n) => {
      const r = /* @__PURE__ */ new Set([...t ?? [], ...n ?? []]);
      return o.filter((i) => !r.has(i.id));
    }, m(e.options, "debugRows", "getCenterRows"));
  }
}, Ue = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: M("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (o) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(o), e.resetRowSelection = (o) => {
      var t;
      return e.setRowSelection(o ? {} : (t = e.initialState.rowSelection) != null ? t : {});
    }, e.toggleAllRowsSelected = (o) => {
      e.setRowSelection((t) => {
        o = typeof o < "u" ? o : !e.getIsAllRowsSelected();
        const n = {
          ...t
        }, r = e.getPreGroupedRowModel().flatRows;
        return o ? r.forEach((i) => {
          i.getCanSelect() && (n[i.id] = !0);
        }) : r.forEach((i) => {
          delete n[i.id];
        }), n;
      });
    }, e.toggleAllPageRowsSelected = (o) => e.setRowSelection((t) => {
      const n = typeof o < "u" ? o : !e.getIsAllPageRowsSelected(), r = {
        ...t
      };
      return e.getRowModel().rows.forEach((i) => {
        W(r, i.id, n, !0, e);
      }), r;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = C(() => [e.getState().rowSelection, e.getCoreRowModel()], (o, t) => Object.keys(o).length ? X(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, m(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = C(() => [e.getState().rowSelection, e.getFilteredRowModel()], (o, t) => Object.keys(o).length ? X(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, m(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = C(() => [e.getState().rowSelection, e.getSortedRowModel()], (o, t) => Object.keys(o).length ? X(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, m(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const o = e.getFilteredRowModel().flatRows, {
        rowSelection: t
      } = e.getState();
      let n = !!(o.length && Object.keys(t).length);
      return n && o.some((r) => r.getCanSelect() && !t[r.id]) && (n = !1), n;
    }, e.getIsAllPageRowsSelected = () => {
      const o = e.getPaginationRowModel().flatRows.filter((r) => r.getCanSelect()), {
        rowSelection: t
      } = e.getState();
      let n = !!o.length;
      return n && o.some((r) => !t[r.id]) && (n = !1), n;
    }, e.getIsSomeRowsSelected = () => {
      var o;
      const t = Object.keys((o = e.getState().rowSelection) != null ? o : {}).length;
      return t > 0 && t < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const o = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : o.filter((t) => t.getCanSelect()).some((t) => t.getIsSelected() || t.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (o) => {
      e.toggleAllRowsSelected(o.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (o) => {
      e.toggleAllPageRowsSelected(o.target.checked);
    };
  },
  createRow: (e, o) => {
    e.toggleSelected = (t, n) => {
      const r = e.getIsSelected();
      o.setRowSelection((i) => {
        var l;
        if (t = typeof t < "u" ? t : !r, e.getCanSelect() && r === t)
          return i;
        const u = {
          ...i
        };
        return W(u, e.id, t, (l = n == null ? void 0 : n.selectChildren) != null ? l : !0, o), u;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = o.getState();
      return ee(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = o.getState();
      return Y(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = o.getState();
      return Y(e, t) === "all";
    }, e.getCanSelect = () => {
      var t;
      return typeof o.options.enableRowSelection == "function" ? o.options.enableRowSelection(e) : (t = o.options.enableRowSelection) != null ? t : !0;
    }, e.getCanSelectSubRows = () => {
      var t;
      return typeof o.options.enableSubRowSelection == "function" ? o.options.enableSubRowSelection(e) : (t = o.options.enableSubRowSelection) != null ? t : !0;
    }, e.getCanMultiSelect = () => {
      var t;
      return typeof o.options.enableMultiRowSelection == "function" ? o.options.enableMultiRowSelection(e) : (t = o.options.enableMultiRowSelection) != null ? t : !0;
    }, e.getToggleSelectedHandler = () => {
      const t = e.getCanSelect();
      return (n) => {
        var r;
        t && e.toggleSelected((r = n.target) == null ? void 0 : r.checked);
      };
    };
  }
}, W = (e, o, t, n, r) => {
  var i;
  const l = r.getRow(o, !0);
  t ? (l.getCanMultiSelect() || Object.keys(e).forEach((u) => delete e[u]), l.getCanSelect() && (e[o] = !0)) : delete e[o], n && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((u) => W(e, u.id, t, n, r));
};
function X(e, o) {
  const t = e.getState().rowSelection, n = [], r = {}, i = function(l, u) {
    return l.map((s) => {
      var g;
      const d = ee(s, t);
      if (d && (n.push(s), r[s.id] = s), (g = s.subRows) != null && g.length && (s = {
        ...s,
        subRows: i(s.subRows)
      }), d)
        return s;
    }).filter(Boolean);
  };
  return {
    rows: i(o.rows),
    flatRows: n,
    rowsById: r
  };
}
function ee(e, o) {
  var t;
  return (t = o[e.id]) != null ? t : !1;
}
function Y(e, o, t) {
  var n;
  if (!((n = e.subRows) != null && n.length)) return !1;
  let r = !0, i = !1;
  return e.subRows.forEach((l) => {
    if (!(i && !r) && (l.getCanSelect() && (ee(l, o) ? i = !0 : r = !1), l.subRows && l.subRows.length)) {
      const u = Y(l, o);
      u === "all" ? i = !0 : (u === "some" && (i = !0), r = !1);
    }
  }), r ? "all" : i ? "some" : !1;
}
const Z = /([0-9]+)/gm, Xe = (e, o, t) => Se(y(e.getValue(t)).toLowerCase(), y(o.getValue(t)).toLowerCase()), Ke = (e, o, t) => Se(y(e.getValue(t)), y(o.getValue(t))), Je = (e, o, t) => te(y(e.getValue(t)).toLowerCase(), y(o.getValue(t)).toLowerCase()), Qe = (e, o, t) => te(y(e.getValue(t)), y(o.getValue(t))), We = (e, o, t) => {
  const n = e.getValue(t), r = o.getValue(t);
  return n > r ? 1 : n < r ? -1 : 0;
}, Ye = (e, o, t) => te(e.getValue(t), o.getValue(t));
function te(e, o) {
  return e === o ? 0 : e > o ? 1 : -1;
}
function y(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function Se(e, o) {
  const t = e.split(Z).filter(Boolean), n = o.split(Z).filter(Boolean);
  for (; t.length && n.length; ) {
    const r = t.shift(), i = n.shift(), l = parseInt(r, 10), u = parseInt(i, 10), s = [l, u].sort();
    if (isNaN(s[0])) {
      if (r > i)
        return 1;
      if (i > r)
        return -1;
      continue;
    }
    if (isNaN(s[1]))
      return isNaN(l) ? -1 : 1;
    if (l > u)
      return 1;
    if (u > l)
      return -1;
  }
  return t.length - n.length;
}
const G = {
  alphanumeric: Xe,
  alphanumericCaseSensitive: Ke,
  text: Je,
  textCaseSensitive: Qe,
  datetime: We,
  basic: Ye
}, Ze = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: M("sorting", e),
    isMultiSortEvent: (o) => o.shiftKey
  }),
  createColumn: (e, o) => {
    e.getAutoSortingFn = () => {
      const t = o.getFilteredRowModel().flatRows.slice(10);
      let n = !1;
      for (const r of t) {
        const i = r == null ? void 0 : r.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return G.datetime;
        if (typeof i == "string" && (n = !0, i.split(Z).length > 1))
          return G.alphanumeric;
      }
      return n ? G.text : G.basic;
    }, e.getAutoSortDir = () => {
      const t = o.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, n;
      if (!e)
        throw new Error();
      return B(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (n = o.options.sortingFns) == null ? void 0 : n[e.columnDef.sortingFn]) != null ? t : G[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, n) => {
      const r = e.getNextSortingOrder(), i = typeof t < "u" && t !== null;
      o.setSorting((l) => {
        const u = l == null ? void 0 : l.find((a) => a.id === e.id), s = l == null ? void 0 : l.findIndex((a) => a.id === e.id);
        let g = [], d, S = i ? t : r === "desc";
        if (l != null && l.length && e.getCanMultiSort() && n ? u ? d = "toggle" : d = "add" : l != null && l.length && s !== l.length - 1 ? d = "replace" : u ? d = "toggle" : d = "replace", d === "toggle" && (i || r || (d = "remove")), d === "add") {
          var f;
          g = [...l, {
            id: e.id,
            desc: S
          }], g.splice(0, g.length - ((f = o.options.maxMultiSortColCount) != null ? f : Number.MAX_SAFE_INTEGER));
        } else d === "toggle" ? g = l.map((a) => a.id === e.id ? {
          ...a,
          desc: S
        } : a) : d === "remove" ? g = l.filter((a) => a.id !== e.id) : g = [{
          id: e.id,
          desc: S
        }];
        return g;
      });
    }, e.getFirstSortDir = () => {
      var t, n;
      return ((t = (n = e.columnDef.sortDescFirst) != null ? n : o.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var n, r;
      const i = e.getFirstSortDir(), l = e.getIsSorted();
      return l ? l !== i && ((n = o.options.enableSortingRemoval) == null || n) && // If enableSortRemove, enable in general
      (!(t && (r = o.options.enableMultiRemove) != null) || r) ? !1 : l === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var t, n;
      return ((t = e.columnDef.enableSorting) != null ? t : !0) && ((n = o.options.enableSorting) != null ? n : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var t, n;
      return (t = (n = e.columnDef.enableMultiSort) != null ? n : o.options.enableMultiSort) != null ? t : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var t;
      const n = (t = o.getState().sorting) == null ? void 0 : t.find((r) => r.id === e.id);
      return n ? n.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var t, n;
      return (t = (n = o.getState().sorting) == null ? void 0 : n.findIndex((r) => r.id === e.id)) != null ? t : -1;
    }, e.clearSorting = () => {
      o.setSorting((t) => t != null && t.length ? t.filter((n) => n.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const t = e.getCanSort();
      return (n) => {
        t && (n.persist == null || n.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? o.options.isMultiSortEvent == null ? void 0 : o.options.isMultiSortEvent(n) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (o) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(o), e.resetSorting = (o) => {
      var t, n;
      e.setSorting(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.sorting) != null ? t : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, be = [
  he,
  Be,
  He,
  Ae,
  ve,
  _e,
  Te,
  //depends on ColumnFaceting
  qe,
  //depends on ColumnFiltering
  Ze,
  De,
  //depends on RowSorting
  Ne,
  ke,
  je,
  Ue,
  ze
];
function et(e) {
  var o, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const n = [...be, ...(o = e._features) != null ? o : []];
  let r = {
    _features: n
  };
  const i = r._features.reduce((f, a) => Object.assign(f, a.getDefaultOptions == null ? void 0 : a.getDefaultOptions(r)), {}), l = (f) => r.options.mergeOptions ? r.options.mergeOptions(i, f) : {
    ...i,
    ...f
  };
  let s = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  r._features.forEach((f) => {
    var a;
    s = (a = f.getInitialState == null ? void 0 : f.getInitialState(s)) != null ? a : s;
  });
  const g = [];
  let d = !1;
  const S = {
    _features: n,
    options: {
      ...i,
      ...e
    },
    initialState: s,
    _queue: (f) => {
      g.push(f), d || (d = !0, Promise.resolve().then(() => {
        for (; g.length; )
          g.shift()();
        d = !1;
      }).catch((a) => setTimeout(() => {
        throw a;
      })));
    },
    reset: () => {
      r.setState(r.initialState);
    },
    setOptions: (f) => {
      const a = I(f, r.options);
      r.options = l(a);
    },
    getState: () => r.options.state,
    setState: (f) => {
      r.options.onStateChange == null || r.options.onStateChange(f);
    },
    _getRowId: (f, a, c) => {
      var p;
      return (p = r.options.getRowId == null ? void 0 : r.options.getRowId(f, a, c)) != null ? p : `${c ? [c.id, a].join(".") : a}`;
    },
    getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => r.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (f, a) => {
      let c = (a ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[f];
      if (!c && (c = r.getCoreRowModel().rowsById[f], !c))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${f}`) : new Error();
      return c;
    },
    _getDefaultColumnDef: C(() => [r.options.defaultColumn], (f) => {
      var a;
      return f = (a = f) != null ? a : {}, {
        header: (c) => {
          const p = c.header.column.columnDef;
          return p.accessorKey ? p.accessorKey : p.accessorFn ? p.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (c) => {
          var p, w;
          return (p = (w = c.renderValue()) == null || w.toString == null ? void 0 : w.toString()) != null ? p : null;
        },
        ...r._features.reduce((c, p) => Object.assign(c, p.getDefaultColumnDef == null ? void 0 : p.getDefaultColumnDef()), {}),
        ...f
      };
    }, m(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => r.options.columns,
    getAllColumns: C(() => [r._getColumnDefs()], (f) => {
      const a = function(c, p, w) {
        return w === void 0 && (w = 0), c.map((R) => {
          const h = we(r, R, w, p), _ = R;
          return h.columns = _.columns ? a(_.columns, h, w + 1) : [], h;
        });
      };
      return a(f);
    }, m(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: C(() => [r.getAllColumns()], (f) => f.flatMap((a) => a.getFlatColumns()), m(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: C(() => [r.getAllFlatColumns()], (f) => f.reduce((a, c) => (a[c.id] = c, a), {}), m(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: C(() => [r.getAllColumns(), r._getOrderColumnsFn()], (f, a) => {
      let c = f.flatMap((p) => p.getLeafColumns());
      return a(c);
    }, m(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (f) => {
      const a = r._getAllFlatColumnsById()[f];
      return process.env.NODE_ENV !== "production" && !a && console.error(`[Table] Column with id '${f}' does not exist.`), a;
    }
  };
  Object.assign(r, S);
  for (let f = 0; f < r._features.length; f++) {
    const a = r._features[f];
    a == null || a.createTable == null || a.createTable(r);
  }
  return r;
}
function it() {
  return (e) => C(() => [e.options.data], (o) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, n = function(r, i, l) {
      i === void 0 && (i = 0);
      const u = [];
      for (let g = 0; g < r.length; g++) {
        const d = le(e, e._getRowId(r[g], g, l), r[g], g, i, void 0, l == null ? void 0 : l.id);
        if (t.flatRows.push(d), t.rowsById[d.id] = d, u.push(d), e.options.getSubRows) {
          var s;
          d.originalSubRows = e.options.getSubRows(r[g], g), (s = d.originalSubRows) != null && s.length && (d.subRows = n(d.originalSubRows, i + 1, d));
        }
      }
      return u;
    };
    return t.rows = n(o), t;
  }, m(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function lt() {
  return (e) => C(() => [e.getState().grouping, e.getPreGroupedRowModel()], (o, t) => {
    if (!t.rows.length || !o.length)
      return t.rows.forEach((s) => {
        s.depth = 0, s.parentId = void 0;
      }), t;
    const n = o.filter((s) => e.getColumn(s)), r = [], i = {}, l = function(s, g, d) {
      if (g === void 0 && (g = 0), g >= n.length)
        return s.map((c) => (c.depth = g, r.push(c), i[c.id] = c, c.subRows && (c.subRows = l(c.subRows, g + 1, c.id)), c));
      const S = n[g], f = tt(s, S);
      return Array.from(f.entries()).map((c, p) => {
        let [w, R] = c, h = `${S}:${w}`;
        h = d ? `${d}>${h}` : h;
        const _ = l(R, g + 1, h);
        _.forEach((v) => {
          v.parentId = h;
        });
        const V = g ? ie(R, (v) => v.subRows) : R, F = le(e, h, V[0].original, p, g, void 0, d);
        return Object.assign(F, {
          groupingColumnId: S,
          groupingValue: w,
          subRows: _,
          leafRows: V,
          getValue: (v) => {
            if (n.includes(v)) {
              if (F._valuesCache.hasOwnProperty(v))
                return F._valuesCache[v];
              if (R[0]) {
                var E;
                F._valuesCache[v] = (E = R[0].getValue(v)) != null ? E : void 0;
              }
              return F._valuesCache[v];
            }
            if (F._groupingValuesCache.hasOwnProperty(v))
              return F._groupingValuesCache[v];
            const D = e.getColumn(v), A = D == null ? void 0 : D.getAggregationFn();
            if (A)
              return F._groupingValuesCache[v] = A(v, V, R), F._groupingValuesCache[v];
          }
        }), _.forEach((v) => {
          r.push(v), i[v.id] = v;
        }), F;
      });
    }, u = l(t.rows, 0);
    return u.forEach((s) => {
      r.push(s), i[s.id] = s;
    }), {
      rows: u,
      flatRows: r,
      rowsById: i
    };
  }, m(e.options, "debugTable", "getGroupedRowModel", () => {
    e._queue(() => {
      e._autoResetExpanded(), e._autoResetPageIndex();
    });
  }));
}
function tt(e, o) {
  const t = /* @__PURE__ */ new Map();
  return e.reduce((n, r) => {
    const i = `${r.getGroupingValue(o)}`, l = n.get(i);
    return l ? l.push(r) : n.set(i, [r]), n;
  }, t);
}
function ut() {
  return (e) => C(() => [e.getState().sorting, e.getPreSortedRowModel()], (o, t) => {
    if (!t.rows.length || !(o != null && o.length))
      return t;
    const n = e.getState().sorting, r = [], i = n.filter((s) => {
      var g;
      return (g = e.getColumn(s.id)) == null ? void 0 : g.getCanSort();
    }), l = {};
    i.forEach((s) => {
      const g = e.getColumn(s.id);
      g && (l[s.id] = {
        sortUndefined: g.columnDef.sortUndefined,
        invertSorting: g.columnDef.invertSorting,
        sortingFn: g.getSortingFn()
      });
    });
    const u = (s) => {
      const g = s.map((d) => ({
        ...d
      }));
      return g.sort((d, S) => {
        for (let a = 0; a < i.length; a += 1) {
          var f;
          const c = i[a], p = l[c.id], w = p.sortUndefined, R = (f = c == null ? void 0 : c.desc) != null ? f : !1;
          let h = 0;
          if (w) {
            const _ = d.getValue(c.id), V = S.getValue(c.id), F = _ === void 0, v = V === void 0;
            if (F || v) {
              if (w === "first") return F ? -1 : 1;
              if (w === "last") return F ? 1 : -1;
              h = F && v ? 0 : F ? w : -w;
            }
          }
          if (h === 0 && (h = p.sortingFn(d, S, c.id)), h !== 0)
            return R && (h *= -1), p.invertSorting && (h *= -1), h;
        }
        return d.index - S.index;
      }), g.forEach((d) => {
        var S;
        r.push(d), (S = d.subRows) != null && S.length && (d.subRows = u(d.subRows));
      }), g;
    };
    return {
      rows: u(t.rows),
      flatRows: r,
      rowsById: t.rowsById
    };
  }, m(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function st(e, o) {
  return e ? nt(e) ? /* @__PURE__ */ K.createElement(e, o) : e : null;
}
function nt(e) {
  return ot(e) || typeof e == "function" || rt(e);
}
function ot(e) {
  return typeof e == "function" && (() => {
    const o = Object.getPrototypeOf(e);
    return o.prototype && o.prototype.isReactComponent;
  })();
}
function rt(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function gt(e) {
  const o = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = K.useState(() => ({
    current: et(o)
  })), [n, r] = K.useState(() => t.current.initialState);
  return t.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...n,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (l) => {
      r(l), e.onStateChange == null || e.onStateChange(l);
    }
  })), t.current;
}
export {
  st as flexRender,
  it as getCoreRowModel,
  lt as getGroupedRowModel,
  ut as getSortedRowModel,
  gt as useReactTable
};
