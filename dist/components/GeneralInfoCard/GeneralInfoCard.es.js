import { jsxRuntimeExports as h } from "../../jsx-runtime-BgepH7Pb.js";
import * as s from "react";
import { useCallback as B } from "react";
import { Button as W } from "../Button/Button.es.js";
import { Loader as M } from "../Loader/index.es.js";
import { StackRowJB as z, StackRow as J } from "../Stacks/index.es.js";
import { Wrapper as A } from "./styles.es.js";
/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function N() {
  return N = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, N.apply(null, arguments);
}
var R;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(R || (R = {}));
function u(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function E(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function U(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e);
  }
  return t;
}
var O;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(O || (O = {}));
const T = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, $ = (e) => T.test(e);
function q(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: a = "",
    hash: r = ""
  } = typeof e == "string" ? U(e) : e, o;
  if (n)
    if ($(n))
      o = n;
    else {
      if (n.includes("//")) {
        let i = n;
        n = P(n), E(!1, "Pathnames cannot have embedded double slashes - normalizing " + (i + " -> " + n));
      }
      n.startsWith("/") ? o = w(n.substring(1), "/") : o = w(n, t);
    }
  else
    o = t;
  return {
    pathname: o,
    search: K(a),
    hash: Q(r)
  };
}
function w(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((r) => {
    r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
  }), n.length > 1 ? n.join("/") : "/";
}
function g(e, t, n, a) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function G(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function F(e, t) {
  let n = G(e);
  return t ? n.map((a, r) => r === n.length - 1 ? a.pathname : a.pathnameBase) : n.map((a) => a.pathnameBase);
}
function X(e, t, n, a) {
  a === void 0 && (a = !1);
  let r;
  typeof e == "string" ? r = U(e) : (r = N({}, e), u(!r.pathname || !r.pathname.includes("?"), g("?", "pathname", "search", r)), u(!r.pathname || !r.pathname.includes("#"), g("#", "pathname", "hash", r)), u(!r.search || !r.search.includes("#"), g("#", "search", "hash", r)));
  let o = e === "" || r.pathname === "", i = o ? "/" : r.pathname, c;
  if (i == null)
    c = n;
  else {
    let p = t.length - 1;
    if (!a && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; )
        m.shift(), p -= 1;
      r.pathname = m.join("/");
    }
    c = p >= 0 ? t[p] : "/";
  }
  let f = q(r, c), d = i && i !== "/" && i.endsWith("/"), l = (o || i === ".") && n.endsWith("/");
  return !f.pathname.endsWith("/") && (d || l) && (f.pathname += "/"), f;
}
const P = (e) => e.replace(/\/\/+/g, "/"), Y = (e) => P(e.join("/")), K = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Q = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, _ = ["post", "put", "patch", "delete"];
new Set(_);
const Z = ["get", ..._];
new Set(Z);
/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function x() {
  return x = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n) ({}).hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, x.apply(null, arguments);
}
const C = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (C.displayName = "DataRouter");
const k = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (k.displayName = "DataRouterState");
const H = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (H.displayName = "Await");
const y = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (y.displayName = "Navigation");
const b = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (b.displayName = "Location");
const v = /* @__PURE__ */ s.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (v.displayName = "Route");
const ee = /* @__PURE__ */ s.createContext(null);
process.env.NODE_ENV !== "production" && (ee.displayName = "RouteError");
function D() {
  return s.useContext(b) != null;
}
function te() {
  return D() || (process.env.NODE_ENV !== "production" ? u(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : u(!1)), s.useContext(b).location;
}
const S = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function j(e) {
  s.useContext(y).static || s.useLayoutEffect(e);
}
function ne() {
  let {
    isDataRoute: e
  } = s.useContext(v);
  return e ? ie() : ae();
}
function ae() {
  D() || (process.env.NODE_ENV !== "production" ? u(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : u(!1));
  let e = s.useContext(C), {
    basename: t,
    future: n,
    navigator: a
  } = s.useContext(y), {
    matches: r
  } = s.useContext(v), {
    pathname: o
  } = te(), i = JSON.stringify(F(r, n.v7_relativeSplatPath)), c = s.useRef(!1);
  return j(() => {
    c.current = !0;
  }), s.useCallback(function(d, l) {
    if (l === void 0 && (l = {}), process.env.NODE_ENV !== "production" && E(c.current, S), !c.current) return;
    if (typeof d == "number") {
      a.go(d);
      return;
    }
    let p = X(d, JSON.parse(i), o, l.relative === "path");
    e == null && t !== "/" && (p.pathname = p.pathname === "/" ? t : Y([t, p.pathname])), (l.replace ? a.replace : a.push)(p, l.state, l);
  }, [t, a, i, o, e]);
}
var L = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(L || {}), V = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(V || {});
function I(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router.";
}
function re(e) {
  let t = s.useContext(C);
  return t || (process.env.NODE_ENV !== "production" ? u(!1, I(e)) : u(!1)), t;
}
function se(e) {
  let t = s.useContext(v);
  return t || (process.env.NODE_ENV !== "production" ? u(!1, I(e)) : u(!1)), t;
}
function oe(e) {
  let t = se(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? u(!1, e + ' can only be used on routes that contain a unique "id"') : u(!1)), n.route.id;
}
function ie() {
  let {
    router: e
  } = re(L.UseNavigateStable), t = oe(V.UseNavigateStable), n = s.useRef(!1);
  return j(() => {
    n.current = !0;
  }), s.useCallback(function(r, o) {
    o === void 0 && (o = {}), process.env.NODE_ENV !== "production" && E(n.current, S), n.current && (typeof r == "number" ? e.navigate(r) : e.navigate(r, x({
      fromRouteId: t
    }, o)));
  }, [e, t]);
}
new Promise(() => {
});
const he = ({
  customAction: e,
  disabled: t,
  header: n,
  headerAction: a,
  headerActionContent: r,
  isLoading: o,
  footer: i,
  sx: c,
  link: f
}) => {
  const d = ne(), l = B(() => {
    f && d(f);
  }, [f, d]);
  return /* @__PURE__ */ h.jsx(A, { sx: c, onClick: l, children: o ? /* @__PURE__ */ h.jsx(M, { size: 48, sx: { color: "neutral.primary" } }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsxs(z, { sx: { alignItems: "flex-start" }, children: [
      n,
      e || (a && r ? /* @__PURE__ */ h.jsx(
        W,
        {
          disabled: t,
          onClick: a,
          color: "primary",
          size: "small",
          variant: "secondary",
          children: r
        }
      ) : null)
    ] }),
    /* @__PURE__ */ h.jsx(J, { direction: "row", overflow: "hidden", children: i })
  ] }) });
};
export {
  he as GeneralInfoCard
};
