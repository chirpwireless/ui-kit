import { jsxRuntimeExports as L } from "../../jsx-runtime-BgepH7Pb.js";
import * as z from "react";
import { useRef as j, useMemo as N, useCallback as K, useEffect as P } from "react";
import { flushSync as H } from "react-dom";
import { TableComponent as $ } from "./components/table-component/index.es.js";
import { useReactTable as B } from "./hooks/use-react-table.es.js";
function J(r, a, t) {
  const e = new Array(r);
  return new Proxy(e, {
    get(s, n, o) {
      if (typeof n == "string") {
        const i = n.charCodeAt(0);
        if (i >= 48 && i <= 57) {
          const l = +n;
          if (Number.isInteger(l) && l >= 0 && l < r) {
            let h = s[l];
            if (!h) {
              const c = a[l * 2];
              h = s[l] = {
                index: l,
                key: t(l),
                start: c,
                size: a[l * 2 + 1],
                end: c + a[l * 2 + 1],
                lane: 0
              };
            }
            return h;
          }
        }
        if (n === "length") return r;
      }
      return Reflect.get(s, n, o);
    }
  });
}
function I(r, a, t) {
  let e = t.initialDeps ?? [], s, n = !0;
  function o() {
    var i;
    const l = process.env.NODE_ENV !== "production" && !!t.key && !!((i = t.debug) != null && i.call(t));
    let h = 0;
    l && (h = Date.now());
    const c = r();
    if (!(c.length !== e.length || c.some((v, u) => e[u] !== v)))
      return s;
    e = c;
    let d = 0;
    if (l && (d = Date.now()), s = a(...c), l) {
      const v = Math.round((Date.now() - h) * 100) / 100, u = Math.round((Date.now() - d) * 100) / 100, S = u / 16, g = (m, b) => {
        for (m = String(m); m.length < b; )
          m = " " + m;
        return m;
      };
      console.info(
        `%c⏱ ${g(u, 5)} /${g(v, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * S, 120)
        )}deg 100% 31%);`,
        t == null ? void 0 : t.key
      );
    }
    return t != null && t.onChange && !(n && t.skipInitialOnChange) && t.onChange(s), n = !1, s;
  }
  return o.updateDeps = (i) => {
    e = i;
  }, o;
}
function F(r, a) {
  if (r === void 0)
    throw new Error("Unexpected undefined");
  return r;
}
const D = (r, a) => Math.abs(r - a) < 1.01, U = (r, a, t) => {
  let e;
  return function(...s) {
    r.clearTimeout(e), e = r.setTimeout(() => a.apply(this, s), t);
  };
};
let T;
const R = () => {
  if (T !== void 0) return T;
  if (typeof navigator > "u") return T = !1;
  if (/iP(hone|od|ad)/.test(navigator.userAgent)) return T = !0;
  const r = navigator.maxTouchPoints;
  return T = navigator.platform === "MacIntel" && r !== void 0 && r > 0;
}, k = (r) => {
  const { offsetWidth: a, offsetHeight: t } = r;
  return { width: a, height: t };
}, q = (r) => r, X = (r) => {
  const a = Math.max(r.startIndex - r.overscan, 0), e = Math.min(r.endIndex + r.overscan, r.count - 1) - a + 1, s = new Array(e);
  for (let n = 0; n < e; n++)
    s[n] = a + n;
  return s;
}, Z = (r, a) => {
  const t = r.scrollElement;
  if (!t)
    return;
  const e = r.targetWindow;
  if (!e)
    return;
  const s = (o) => {
    const { width: i, height: l } = o;
    a({ width: Math.round(i), height: Math.round(l) });
  };
  if (s(k(t)), !e.ResizeObserver)
    return () => {
    };
  const n = new e.ResizeObserver((o) => {
    const i = () => {
      const l = o[0];
      if (l != null && l.borderBoxSize) {
        const h = l.borderBoxSize[0];
        if (h) {
          s({ width: h.inlineSize, height: h.blockSize });
          return;
        }
      }
      s(k(t));
    };
    r.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
  });
  return n.observe(t, { box: "border-box" }), () => {
    n.unobserve(t);
  };
}, w = {
  passive: !0
}, Y = typeof window > "u" ? !0 : "onscrollend" in window, G = (r, a, t) => {
  const e = r.scrollElement;
  if (!e)
    return;
  const s = r.targetWindow;
  if (!s)
    return;
  const n = r.options.useScrollendEvent && Y;
  let o = 0;
  const i = n ? null : U(
    s,
    () => a(o, !1),
    r.options.isScrollingResetDelay
  ), l = (f) => () => {
    o = t(e), i == null || i(), a(o, f);
  }, h = l(!0), c = l(!1);
  return e.addEventListener("scroll", h, w), n && e.addEventListener("scrollend", c, w), () => {
    e.removeEventListener("scroll", h), n && e.removeEventListener("scrollend", c);
  };
}, Q = (r, a) => G(r, a, (t) => {
  const { horizontal: e, isRtl: s } = r.options;
  return e ? t.scrollLeft * (s && -1 || 1) : t.scrollTop;
}), tt = (r, a, t) => {
  if (a != null && a.borderBoxSize) {
    const e = a.borderBoxSize[0];
    if (e)
      return Math.round(
        e[t.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return r[t.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, et = (r, {
  adjustments: a = 0,
  behavior: t
}, e) => {
  var s, n;
  (n = (s = e.scrollElement) == null ? void 0 : s.scrollTo) == null || n.call(s, {
    [e.options.horizontal ? "left" : "top"]: r + a,
    behavior: t
  });
}, st = et;
class nt {
  constructor(a) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this._flatMeasurements = null, this.itemSizeCache = /* @__PURE__ */ new Map(), this.itemSizeCacheVersion = 0, this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMin = null, this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.pendingScrollAnchor = null, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this._iosDeferredAdjustment = 0, this._iosTouching = !1, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._intendedScrollOffset = null, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var t, e, s;
      return ((s = (e = (t = this.targetWindow) == null ? void 0 : t.performance) == null ? void 0 : e.now) == null ? void 0 : s.call(e)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let t = null;
      const e = () => t || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : t = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((n) => {
          const o = () => {
            const i = n.target, l = this.indexFromElement(i);
            if (!i.isConnected) {
              this.observer.unobserve(i);
              for (const [h, c] of this.elementsCache)
                if (c === i) {
                  this.elementsCache.delete(h);
                  break;
                }
              return;
            }
            this.shouldMeasureDuringScroll(l) && this.resizeItem(
              l,
              this.options.measureElement(i, n, this)
            );
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = e()) == null || s.disconnect(), t = null;
        },
        observe: (s) => {
          var n;
          return (n = e()) == null ? void 0 : n.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var n;
          return (n = e()) == null ? void 0 : n.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (t) => {
      var e, s;
      const n = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: q,
        rangeExtractor: X,
        onChange: () => {
        },
        measureElement: tt,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        anchorTo: "start",
        followOnAppend: !1,
        scrollEndThreshold: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        laneAssignmentMode: "estimate"
      };
      for (const h in t) {
        const c = t[h];
        c !== void 0 && (n[h] = c);
      }
      const o = this.options;
      let i = null, l = null;
      if (o !== void 0 && o.enabled && n.enabled && n.anchorTo === "end" && this.scrollElement !== null) {
        const h = o.count, c = n.count, f = this.getMeasurements(), d = h > 0 ? ((e = f[0]) == null ? void 0 : e.key) ?? o.getItemKey(0) : null, v = h > 0 ? ((s = f[h - 1]) == null ? void 0 : s.key) ?? o.getItemKey(h - 1) : null;
        if (c !== h || h > 0 && c > 0 && (n.getItemKey(0) !== d || n.getItemKey(c - 1) !== v)) {
          const g = h > 0 ? this.getVirtualItemForOffset(this.getScrollOffset()) ?? f[0] : null;
          g && (i = [g.key, this.getScrollOffset() - g.start]);
          const m = n.followOnAppend === !0 ? "auto" : n.followOnAppend || null;
          m && c > h && this.isAtEnd(o.scrollEndThreshold) && (h === 0 || n.getItemKey(c - 1) !== v) && (l = m);
        }
      }
      this.options = n, (i || l) && (this.pendingScrollAnchor = [
        (i == null ? void 0 : i[0]) ?? null,
        (i == null ? void 0 : i[1]) ?? 0,
        l
      ]);
    }, this.notify = (t) => {
      var e, s;
      (s = (e = this.options).onChange) == null || s.call(e, this, t);
    }, this.maybeNotify = I(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (t) => {
        this.notify(t);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((t) => t()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var t;
      const e = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== e) {
        if (this.cleanup(), !e) {
          this.maybeNotify();
          return;
        }
        if (this.scrollElement = e, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((t = this.scrollElement) == null ? void 0 : t.window) ?? null, this.elementsCache.forEach((n) => {
          this.observer.observe(n);
        }), this.unsubs.push(
          this.options.observeElementRect(this, (n) => {
            this.scrollRect = n, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (n, o) => {
            this._intendedScrollOffset !== null && Math.abs(n - this._intendedScrollOffset) < 1.5 && (n = this._intendedScrollOffset), this._intendedScrollOffset = null, this.scrollAdjustments = 0, this.scrollDirection = o ? this.getScrollOffset() < n ? "forward" : "backward" : null, this.scrollOffset = n, this.isScrolling = o, this._flushIosDeferredIfReady(), this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
          })
        ), "addEventListener" in this.scrollElement) {
          const n = this.scrollElement, o = () => {
            this._iosTouching = !0, this._iosJustTouchEnded = !1, this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          }, i = () => {
            this._iosTouching = !1, !(!R() || this.targetWindow == null) && (this._iosJustTouchEnded = !0, this._iosTouchEndTimerId = this.targetWindow.setTimeout(() => {
              this._iosJustTouchEnded = !1, this._iosTouchEndTimerId = null, this._flushIosDeferredIfReady();
            }, 150));
          };
          n.addEventListener(
            "touchstart",
            o,
            w
          ), n.addEventListener(
            "touchend",
            i,
            w
          ), this.unsubs.push(() => {
            n.removeEventListener("touchstart", o), n.removeEventListener("touchend", i), this._iosTouchEndTimerId !== null && this.targetWindow != null && (this.targetWindow.clearTimeout(this._iosTouchEndTimerId), this._iosTouchEndTimerId = null);
          });
        }
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        });
      }
      const s = this.pendingScrollAnchor;
      if (this.pendingScrollAnchor = null, s && this.scrollElement && this.options.enabled) {
        const [n, o, i] = s;
        if (n !== null) {
          const { count: l, getItemKey: h } = this.options;
          let c = 0;
          for (; c < l && h(c) !== n; )
            c++;
          const f = c < l ? this.getMeasurements()[c] : void 0;
          if (f) {
            const d = f.start + o - this.getScrollOffset();
            D(d, 0) || this.applyScrollAdjustment(d);
          }
        }
        i && this.scrollToEnd({ behavior: i });
      }
    }, this._flushIosDeferredIfReady = () => {
      if (this._iosDeferredAdjustment === 0 || this.isScrolling || this._iosTouching || this._iosJustTouchEnded) return;
      const t = this.getScrollOffset(), e = this.getMaxScrollOffset();
      if (t < 0 || t > e) return;
      const s = this._iosDeferredAdjustment;
      this._iosDeferredAdjustment = 0, this._scrollToOffset(t, {
        adjustments: this.scrollAdjustments += s,
        behavior: void 0
      });
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (t, e) => {
      const s = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
      for (let o = e - 1; o >= 0; o--) {
        const i = t[o];
        if (s.has(i.lane))
          continue;
        const l = n.get(
          i.lane
        );
        if (l == null || i.end > l.end ? n.set(i.lane, i) : i.end < l.end && s.set(i.lane, !0), s.size === this.options.lanes)
          break;
      }
      return n.size === this.options.lanes ? Array.from(n.values()).sort((o, i) => o.end === i.end ? o.index - i.index : o.end - i.end)[0] : void 0;
    }, this.getMeasurementOptions = I(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled,
        this.options.lanes,
        this.options.laneAssignmentMode
      ],
      (t, e, s, n, o, i, l) => (this.prevLanes !== void 0 && this.prevLanes !== i && (this.lanesChangedFlag = !0), this.prevLanes = i, this.pendingMin = null, {
        count: t,
        paddingStart: e,
        scrollMargin: s,
        getItemKey: n,
        enabled: o,
        lanes: i,
        laneAssignmentMode: l
      }),
      {
        key: !1
      }
    ), this.getMeasurements = I(
      () => [this.getMeasurementOptions(), this.itemSizeCacheVersion],
      ({
        count: t,
        paddingStart: e,
        scrollMargin: s,
        getItemKey: n,
        enabled: o,
        lanes: i,
        laneAssignmentMode: l
      }, h) => {
        const c = this.itemSizeCache;
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
        if (this.laneAssignments.size > t)
          for (const u of this.laneAssignments.keys())
            u >= t && this.laneAssignments.delete(u);
        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMin = null), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((u) => {
          this.itemSizeCache.set(u.key, u.size);
        }));
        const f = this.lanesSettling ? 0 : this.pendingMin ?? 0;
        if (this.pendingMin = null, this.lanesSettling && this.measurementsCache.length === t && (this.lanesSettling = !1), i === 1) {
          const u = this.options.gap, S = t * 2;
          let g = this._flatMeasurements;
          if (!g || g.length < S) {
            const p = new Float64Array(S);
            g && f > 0 && p.set(g.subarray(0, f * 2)), g = p, this._flatMeasurements = g;
          }
          let m;
          if (f === 0)
            m = e + s;
          else {
            const p = f - 1;
            m = g[p * 2] + g[p * 2 + 1] + u;
          }
          for (let p = f; p < t; p++) {
            const x = n(p), M = c.get(x), _ = typeof M == "number" ? M : this.options.estimateSize(p);
            g[p * 2] = m, g[p * 2 + 1] = _, m += _ + u;
          }
          const b = J(t, g, n);
          return this.measurementsCache = b, b;
        }
        const d = this.measurementsCache.slice(0, f), v = new Array(i).fill(
          void 0
        );
        for (let u = 0; u < f; u++) {
          const S = d[u];
          S && (v[S.lane] = u);
        }
        for (let u = f; u < t; u++) {
          const S = n(u), g = this.laneAssignments.get(u);
          let m, b;
          const p = l === "estimate" || c.has(S);
          if (g !== void 0 && this.options.lanes > 1) {
            m = g;
            const O = v[m], E = O !== void 0 ? d[O] : void 0;
            b = E ? E.end + this.options.gap : e + s;
          } else {
            const O = this.options.lanes === 1 ? d[u - 1] : this.getFurthestMeasurement(d, u);
            b = O ? O.end + this.options.gap : e + s, m = O ? O.lane : u % this.options.lanes, this.options.lanes > 1 && p && this.laneAssignments.set(u, m);
          }
          const x = c.get(S), M = typeof x == "number" ? x : this.options.estimateSize(u), _ = b + M;
          d[u] = {
            index: u,
            start: b,
            size: M,
            end: _,
            key: S,
            lane: m
          }, v[m] = u;
        }
        return this.measurementsCache = d, d;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = I(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (t, e, s, n) => this.range = t.length > 0 && e > 0 ? it({
        measurements: t,
        outerSize: e,
        scrollOffset: s,
        lanes: n,
        // Pass the typed array so binary search + forward-walk can
        // read start/end directly from Float64Array, skipping the
        // Proxy traps that materialize a full VirtualItem per probe.
        flat: n === 1 && this._flatMeasurements != null ? this._flatMeasurements : null
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = I(
      () => {
        let t = null, e = null;
        const s = this.calculateRange();
        return s && (t = s.startIndex, e = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, t, e]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          t,
          e
        ];
      },
      (t, e, s, n, o) => n === null || o === null ? [] : t({
        startIndex: n,
        endIndex: o,
        overscan: e,
        count: s
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (t) => {
      const e = this.options.indexAttribute, s = t.getAttribute(e);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${e}={index}' on measured element.`
      ), -1);
    }, this.shouldMeasureDuringScroll = (t) => {
      var e;
      if (!this.scrollState || this.scrollState.behavior !== "smooth")
        return !0;
      const s = this.scrollState.index ?? ((e = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : e.index);
      if (s !== void 0 && this.range) {
        const n = Math.max(
          this.options.overscan,
          Math.ceil((this.range.endIndex - this.range.startIndex) / 2)
        ), o = Math.max(0, s - n), i = Math.min(
          this.options.count - 1,
          s + n
        );
        return t >= o && t <= i;
      }
      return !0;
    }, this.measureElement = (t) => {
      if (!t) {
        this.elementsCache.forEach((o, i) => {
          o.isConnected || (this.observer.unobserve(o), this.elementsCache.delete(i));
        });
        return;
      }
      const e = this.indexFromElement(t), s = this.options.getItemKey(e), n = this.elementsCache.get(s);
      n !== t && (n && this.observer.unobserve(n), this.observer.observe(t), this.elementsCache.set(s, t)), (!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(e) && this.resizeItem(e, this.options.measureElement(t, void 0, this));
    }, this.resizeItem = (t, e) => {
      var s, n;
      if (t < 0 || t >= this.options.count) return;
      let o, i, l;
      const h = this._flatMeasurements;
      if (this.options.lanes === 1 && h !== null)
        l = this.options.getItemKey(t), i = h[t * 2], o = h[t * 2 + 1];
      else {
        const d = this.measurementsCache[t];
        if (!d) return;
        l = d.key, i = d.start, o = d.size;
      }
      const c = this.itemSizeCache.get(l) ?? o, f = e - c;
      if (f !== 0) {
        const d = this.options.anchorTo === "end" && ((s = this.scrollState) == null ? void 0 : s.behavior) !== "smooth" && this.getVirtualDistanceFromEnd() <= this.options.scrollEndThreshold, v = d ? this.getTotalSize() : 0, u = ((n = this.scrollState) == null ? void 0 : n.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(
          // The callback expects a VirtualItem; build one lazily only
          // when the consumer actually supplied a custom predicate.
          this.measurementsCache[t] ?? {
            index: t,
            key: l,
            start: i,
            size: o,
            end: i + o,
            lane: 0
          },
          f,
          this
        ) : (
          // Default: adjust scrollTop only when the resize is an above-
          // viewport item AND we're not actively scrolling backward.
          // Adjusting during backward scroll fights the user's scroll
          // direction and produces the "items jump while scrolling up"
          // jank reported across many issues. Users who want the old
          // behavior can pass shouldAdjustScrollPositionOnItemSizeChange.
          i < this.getScrollOffset() + this.scrollAdjustments && this.scrollDirection !== "backward"
        ));
        (this.pendingMin === null || t < this.pendingMin) && (this.pendingMin = t), this.itemSizeCache.set(l, e), this.itemSizeCacheVersion++, d ? this.applyScrollAdjustment(this.getTotalSize() - v) : u && this.applyScrollAdjustment(f), this.notify(!1);
      }
    }, this.getVirtualItems = I(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (t, e) => {
        const s = [];
        for (let n = 0, o = t.length; n < o; n++) {
          const i = t[n], l = e[i];
          s.push(l);
        }
        return s;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (t) => {
      const e = this.getMeasurements();
      if (e.length === 0)
        return;
      const s = this._flatMeasurements, n = this.options.lanes === 1 && s != null, o = W(
        0,
        e.length - 1,
        n ? (i) => s[i * 2] : (i) => F(e[i]).start,
        t
      );
      return F(e[o]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement)
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const t = this.scrollElement.document.documentElement;
        return this.options.horizontal ? t.scrollWidth - this.scrollElement.innerWidth : t.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getVirtualDistanceFromEnd = () => Math.max(
      this.getTotalSize() - this.getSize() - this.getScrollOffset(),
      0
    ), this.getDistanceFromEnd = () => Math.max(this.getMaxScrollOffset() - this.getScrollOffset(), 0), this.isAtEnd = (t = this.options.scrollEndThreshold) => this.getDistanceFromEnd() <= t, this.getOffsetForAlignment = (t, e, s = 0) => {
      if (!this.scrollElement) return 0;
      const n = this.getSize(), o = this.getScrollOffset();
      e === "auto" && (e = t >= o + n ? "end" : "start"), e === "center" ? t += (s - n) / 2 : e === "end" && (t -= n);
      const i = this.getMaxScrollOffset();
      return Math.max(Math.min(i, t), 0);
    }, this.getOffsetForIndex = (t, e = "auto") => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const s = this.getSize(), n = this.getScrollOffset(), o = this.measurementsCache[t];
      if (!o) return;
      if (e === "auto")
        if (o.end >= n + s - this.options.scrollPaddingEnd)
          e = "end";
        else if (o.start <= n + this.options.scrollPaddingStart)
          e = "start";
        else
          return [n, e];
      if (e === "end" && t === this.options.count - 1)
        return [this.getMaxScrollOffset(), e];
      const i = e === "end" ? o.end + this.options.scrollPaddingEnd : o.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(i, e, o.size),
        e
      ];
    }, this.scrollToOffset = (t, { align: e = "start", behavior: s = "auto" } = {}) => {
      const n = this.getOffsetForAlignment(t, e), o = this.now();
      this.scrollState = {
        index: null,
        align: e,
        behavior: s,
        startedAt: o,
        lastTargetOffset: n,
        stableFrames: 0
      }, this._scrollToOffset(n, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (t, {
      align: e = "auto",
      behavior: s = "auto"
    } = {}) => {
      t = Math.max(0, Math.min(t, this.options.count - 1));
      const n = this.getOffsetForIndex(t, e);
      if (!n)
        return;
      const [o, i] = n, l = this.now();
      this.scrollState = {
        index: t,
        align: i,
        behavior: s,
        startedAt: l,
        lastTargetOffset: o,
        stableFrames: 0
      }, this._scrollToOffset(o, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.scrollBy = (t, { behavior: e = "auto" } = {}) => {
      const s = this.getScrollOffset() + t, n = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior: e,
        startedAt: n,
        lastTargetOffset: s,
        stableFrames: 0
      }, this._scrollToOffset(s, { adjustments: void 0, behavior: e }), this.scheduleScrollReconcile();
    }, this.scrollToEnd = ({ behavior: t = "auto" } = {}) => {
      if (this.options.count > 0) {
        this.scrollToIndex(this.options.count - 1, {
          align: "end",
          behavior: t
        });
        return;
      }
      this.scrollToOffset(Math.max(this.getTotalSize() - this.getSize(), 0), {
        behavior: t
      });
    }, this.getTotalSize = () => {
      var t;
      const e = this.getMeasurements();
      let s;
      if (e.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1) {
        const n = e.length - 1, o = this._flatMeasurements;
        o != null ? s = o[n * 2] + o[n * 2 + 1] : s = ((t = e[n]) == null ? void 0 : t.end) ?? 0;
      } else {
        const n = Array(this.options.lanes).fill(null);
        let o = e.length - 1;
        for (; o >= 0 && n.some((i) => i === null); ) {
          const i = e[o];
          n[i.lane] === null && (n[i.lane] = i.end), o--;
        }
        s = Math.max(...n.filter((i) => i !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this.takeSnapshot = () => {
      const t = [];
      if (this.itemSizeCache.size === 0) return t;
      const e = this.getMeasurements();
      for (const s of e)
        s && this.itemSizeCache.has(s.key) && t.push({
          index: s.index,
          key: s.key,
          start: s.start,
          size: s.size,
          end: s.end,
          lane: s.lane
        });
      return t;
    }, this._scrollToOffset = (t, {
      adjustments: e,
      behavior: s
    }) => {
      this._intendedScrollOffset = t + (e ?? 0), this.options.scrollToFn(t, { behavior: s, adjustments: e }, this);
    }, this.measure = () => {
      this.pendingMin = null, this.itemSizeCache.clear(), this.laneAssignments.clear(), this.itemSizeCacheVersion++, this.notify(!1);
    }, this.setOptions(a);
  }
  applyScrollAdjustment(a, t) {
    a !== 0 && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", a), R() && (this.isScrolling || this._iosTouching || this._iosJustTouchEnded) ? this._iosDeferredAdjustment += a : this._scrollToOffset(this.getScrollOffset(), {
      adjustments: this.scrollAdjustments += a,
      behavior: t
    }));
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const e = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, s = e ? e[0] : this.scrollState.lastTargetOffset, n = 1, o = s !== this.scrollState.lastTargetOffset;
    if (!o && D(s, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= n) {
        this.getScrollOffset() !== s && this._scrollToOffset(s, {
          adjustments: void 0,
          behavior: "auto"
        }), this.scrollState = null;
        return;
      }
    } else if (this.scrollState.stableFrames = 0, o) {
      const i = this.getSize() || 600, l = Math.abs(s - this.getScrollOffset()), h = this.scrollState.behavior === "smooth" && l > i;
      this.scrollState.lastTargetOffset = s, h || (this.scrollState.behavior = "auto"), this._scrollToOffset(s, {
        adjustments: void 0,
        behavior: h ? "smooth" : "auto"
      });
    }
    this.scheduleScrollReconcile();
  }
}
const W = (r, a, t, e) => {
  for (; r <= a; ) {
    const s = (r + a) / 2 | 0, n = t(s);
    if (n < e)
      r = s + 1;
    else if (n > e)
      a = s - 1;
    else
      return s;
  }
  return r > 0 ? r - 1 : 0;
};
function it({
  measurements: r,
  outerSize: a,
  scrollOffset: t,
  lanes: e,
  flat: s
}) {
  const n = r.length - 1, o = s ? (c) => s[c * 2] : (c) => r[c].start, i = s ? (c) => s[c * 2] + s[c * 2 + 1] : (c) => r[c].end;
  if (r.length <= e)
    return {
      startIndex: 0,
      endIndex: n
    };
  let l = W(0, n, o, t), h = l;
  if (e === 1)
    for (; h < n && i(h) < t + a; )
      h++;
  else if (e > 1) {
    const c = Array(e).fill(0);
    for (; h < n && c.some((d) => d < t + a); ) {
      const d = r[h];
      c[d.lane] = d.end, h++;
    }
    const f = Array(e).fill(t + a);
    for (; l >= 0 && f.some((d) => d >= t); ) {
      const d = r[l];
      f[d.lane] = d.start, l--;
    }
    l = Math.max(0, l - l % e), h = Math.min(n, h + (e - 1 - h % e));
  }
  return { startIndex: l, endIndex: h };
}
const V = typeof document < "u" ? z.useLayoutEffect : z.useEffect;
function ot({
  useFlushSync: r = !0,
  ...a
}) {
  const t = z.useReducer((n) => n + 1, 0)[1], e = {
    ...a,
    onChange: (n, o) => {
      var i;
      r && o ? H(t) : t(), (i = a.onChange) == null || i.call(a, n, o);
    }
  }, [s] = z.useState(
    () => new nt(e)
  );
  return s.setOptions(e), V(() => s._didMount(), []), V(() => s._willUpdate()), s;
}
function lt(r) {
  return ot({
    observeElementRect: Z,
    observeElementOffset: Q,
    scrollToFn: st,
    ...r
  });
}
const rt = 40, ht = 50, mt = ({
  data: r,
  columns: a,
  sx: t = {},
  isLoading: e,
  enableSorting: s,
  defaultSorting: n,
  expandedRowIndex: o,
  hasNextPage: i,
  estimateSize: l = rt,
  onBottomReached: h,
  onRowClick: c,
  renderEmptyBlock: f,
  renderExpandableBlock: d,
  onRowDoubleClick: v,
  columnWidths: u
}) => {
  const S = j(null), { table: g, rows: m } = B({
    data: r,
    columns: a,
    enableSorting: s,
    defaultSorting: n
  }), b = lt({
    count: m.length,
    estimateSize: () => l,
    getScrollElement: () => (S == null ? void 0 : S.current) ?? null,
    overscan: 5
  }), p = b.getVirtualItems(), x = b.getTotalSize() + ht, M = N(
    () => p.map((E) => {
      const y = m[E.index], A = {
        height: `${E.size}px`
      };
      return { ...y, sx: A };
    }),
    [p, m]
  ), _ = K(
    (E) => {
      if (E) {
        const { scrollHeight: y, scrollTop: A, clientHeight: C } = E;
        y - A - C < C - 100 && !e && i && (h == null || h());
      }
    },
    [h, e, i]
  );
  P(() => {
    _(S.current);
  }, [_]);
  const O = (() => {
    var E;
    return { marginTop: `${(E = p == null ? void 0 : p[0]) == null ? void 0 : E.start}px` };
  })();
  return /* @__PURE__ */ L.jsx(
    $,
    {
      isVirtualized: !0,
      table: g,
      columnWidths: u,
      rows: M,
      sx: {
        ...t,
        height: M.length ? `${x}px` : "100%",
        cursor: c ? "pointer" : "default",
        overflowY: "initial"
      },
      isLoading: e,
      enableSorting: s,
      tableSx: O,
      expandedRowIndex: o,
      onRowClick: c,
      onRowDoubleClick: v,
      renderEmptyBlock: f,
      renderExpandableBlock: d,
      onScroll: (E) => _(E.target),
      ref: S
    }
  );
};
export {
  mt as TableVirtualized
};
