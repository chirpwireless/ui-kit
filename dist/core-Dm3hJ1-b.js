import { getAugmentedNamespace as Sy } from "./_commonjsHelpers-TBt1UqMc.js";
import wy from "react";
import { requireFastDeepEqual as by } from "./index-BuxT8eEA.js";
var sv = {}, nu = function(e, t) {
  return nu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, nu(e, t);
};
function uv(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  nu(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var ka = function() {
  return ka = Object.assign || function(t) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, ka.apply(this, arguments);
};
function lv(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[i]) && (r[n[i]] = e[n[i]]);
  return r;
}
function fv(e, t, r, n) {
  var i = arguments.length, a = i < 3 ? t : n === null ? n = Object.getOwnPropertyDescriptor(t, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") a = Reflect.decorate(e, t, r, n);
  else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
  return i > 3 && a && Object.defineProperty(t, r, a), a;
}
function hv(e, t) {
  return function(r, n) {
    t(r, n, e);
  };
}
function cv(e, t, r, n, i, a) {
  function o(g) {
    if (g !== void 0 && typeof g != "function") throw new TypeError("Function expected");
    return g;
  }
  for (var s = n.kind, u = s === "getter" ? "get" : s === "setter" ? "set" : "value", l = !t && e ? n.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}), h, v = !1, c = r.length - 1; c >= 0; c--) {
    var d = {};
    for (var y in n) d[y] = y === "access" ? {} : n[y];
    for (var y in n.access) d.access[y] = n.access[y];
    d.addInitializer = function(g) {
      if (v) throw new TypeError("Cannot add initializers after decoration has completed");
      a.push(o(g || null));
    };
    var p = (0, r[c])(s === "accessor" ? { get: f.get, set: f.set } : f[u], d);
    if (s === "accessor") {
      if (p === void 0) continue;
      if (p === null || typeof p != "object") throw new TypeError("Object expected");
      (h = o(p.get)) && (f.get = h), (h = o(p.set)) && (f.set = h), (h = o(p.init)) && i.unshift(h);
    } else (h = o(p)) && (s === "field" ? i.unshift(h) : f[u] = h);
  }
  l && Object.defineProperty(l, n.name, f), v = !0;
}
function vv(e, t, r) {
  for (var n = arguments.length > 2, i = 0; i < t.length; i++)
    r = n ? t[i].call(e, r) : t[i].call(e);
  return n ? r : void 0;
}
function dv(e) {
  return typeof e == "symbol" ? e : "".concat(e);
}
function pv(e, t, r) {
  return typeof t == "symbol" && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", { configurable: !0, value: r ? "".concat(r, " ", t) : t });
}
function gv(e, t) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(e, t);
}
function yv(e, t, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(f) {
      try {
        l(n.next(f));
      } catch (h) {
        o(h);
      }
    }
    function u(f) {
      try {
        l(n.throw(f));
      } catch (h) {
        o(h);
      }
    }
    function l(f) {
      f.done ? a(f.value) : i(f.value).then(s, u);
    }
    l((n = n.apply(e, t || [])).next());
  });
}
function _v(e, t) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(l) {
    return function(f) {
      return u([l, f]);
    };
  }
  function u(l) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, l[0] && (r = 0)), r; ) try {
      if (n = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done) return a;
      switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
        case 0:
        case 1:
          a = l;
          break;
        case 4:
          return r.label++, { value: l[1], done: !1 };
        case 5:
          r.label++, i = l[1], l = [0];
          continue;
        case 7:
          l = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            r = 0;
            continue;
          }
          if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
            r.label = l[1];
            break;
          }
          if (l[0] === 6 && r.label < a[1]) {
            r.label = a[1], a = l;
            break;
          }
          if (a && r.label < a[2]) {
            r.label = a[2], r.ops.push(l);
            break;
          }
          a[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      l = t.call(e, r);
    } catch (f) {
      l = [6, f], i = 0;
    } finally {
      n = a = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
var uo = Object.create ? function(e, t, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(t, r);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[r];
  } }), Object.defineProperty(e, n, i);
} : function(e, t, r, n) {
  n === void 0 && (n = r), e[n] = t[r];
};
function mv(e, t) {
  for (var r in e) r !== "default" && !Object.prototype.hasOwnProperty.call(t, r) && uo(t, e, r);
}
function Fa(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, r = t && e[t], n = 0;
  if (r) return r.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && n >= e.length && (e = void 0), { value: e && e[n++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function el(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r) return e;
  var n = r.call(e), i, a = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (s) {
    o = { error: s };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}
function Sv() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e = e.concat(el(arguments[t]));
  return e;
}
function wv() {
  for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
  for (var n = Array(e), i = 0, t = 0; t < r; t++)
    for (var a = arguments[t], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
function bv(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, i = t.length, a; n < i; n++)
    (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function bn(e) {
  return this instanceof bn ? (this.v = e, this) : new bn(e);
}
function Tv(e, t, r) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(e, t || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(c) {
    return function(d) {
      return Promise.resolve(d).then(c, h);
    };
  }
  function s(c, d) {
    n[c] && (i[c] = function(y) {
      return new Promise(function(p, g) {
        a.push([c, y, p, g]) > 1 || u(c, y);
      });
    }, d && (i[c] = d(i[c])));
  }
  function u(c, d) {
    try {
      l(n[c](d));
    } catch (y) {
      v(a[0][3], y);
    }
  }
  function l(c) {
    c.value instanceof bn ? Promise.resolve(c.value.v).then(f, h) : v(a[0][2], c);
  }
  function f(c) {
    u("next", c);
  }
  function h(c) {
    u("throw", c);
  }
  function v(c, d) {
    c(d), a.shift(), a.length && u(a[0][0], a[0][1]);
  }
}
function Dv(e) {
  var t, r;
  return t = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), t[Symbol.iterator] = function() {
    return this;
  }, t;
  function n(i, a) {
    t[i] = e[i] ? function(o) {
      return (r = !r) ? { value: bn(e[i](o)), done: !1 } : a ? a(o) : o;
    } : a;
  }
}
function Mv(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], r;
  return t ? t.call(e) : (e = typeof Fa == "function" ? Fa(e) : e[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(a) {
    r[a] = e[a] && function(o) {
      return new Promise(function(s, u) {
        o = e[a](o), i(s, u, o.done, o.value);
      });
    };
  }
  function i(a, o, s, u) {
    Promise.resolve(u).then(function(l) {
      a({ value: l, done: s });
    }, o);
  }
}
function Cv(e, t) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : e.raw = t, e;
}
var Ty = Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}, iu = function(e) {
  return iu = Object.getOwnPropertyNames || function(t) {
    var r = [];
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[r.length] = n);
    return r;
  }, iu(e);
};
function Ev(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var r = iu(e), n = 0; n < r.length; n++) r[n] !== "default" && uo(t, e, r[n]);
  return Ty(t, e), t;
}
function xv(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ov(e, t, r, n) {
  if (r === "a" && !n) throw new TypeError("Private accessor was defined without a getter");
  if (typeof t == "function" ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(e) : n ? n.value : t.get(e);
}
function Pv(e, t, r, n, i) {
  if (n === "m") throw new TypeError("Private method is not writable");
  if (n === "a" && !i) throw new TypeError("Private accessor was defined without a setter");
  if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(e, r) : i ? i.value = r : t.set(e, r), r;
}
function Rv(e, t) {
  if (t === null || typeof t != "object" && typeof t != "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof e == "function" ? t === e : e.has(t);
}
function Iv(e, t, r) {
  if (t != null) {
    if (typeof t != "object" && typeof t != "function") throw new TypeError("Object expected.");
    var n, i;
    if (r) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      n = t[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      n = t[Symbol.dispose], r && (i = n);
    }
    if (typeof n != "function") throw new TypeError("Object not disposable.");
    i && (n = function() {
      try {
        i.call(this);
      } catch (a) {
        return Promise.reject(a);
      }
    }), e.stack.push({ value: t, dispose: n, async: r });
  } else r && e.stack.push({ async: !0 });
  return t;
}
var Dy = typeof SuppressedError == "function" ? SuppressedError : function(e, t, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = e, n.suppressed = t, n;
};
function Av(e) {
  function t(a) {
    e.error = e.hasError ? new Dy(a, e.error, "An error was suppressed during disposal.") : a, e.hasError = !0;
  }
  var r, n = 0;
  function i() {
    for (; r = e.stack.pop(); )
      try {
        if (!r.async && n === 1) return n = 0, e.stack.push(r), Promise.resolve().then(i);
        if (r.dispose) {
          var a = r.dispose.call(r.value);
          if (r.async) return n |= 2, Promise.resolve(a).then(i, function(o) {
            return t(o), i();
          });
        } else n |= 1;
      } catch (o) {
        t(o);
      }
    if (n === 1) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
    if (e.hasError) throw e.error;
  }
  return i();
}
function Nv(e, t) {
  return typeof e == "string" && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(r, n, i, a, o) {
    return n ? t ? ".jsx" : ".js" : i && (!a || !o) ? r : i + a + "." + o.toLowerCase() + "js";
  }) : e;
}
const My = {
  __extends: uv,
  __assign: ka,
  __rest: lv,
  __decorate: fv,
  __param: hv,
  __esDecorate: cv,
  __runInitializers: vv,
  __propKey: dv,
  __setFunctionName: pv,
  __metadata: gv,
  __awaiter: yv,
  __generator: _v,
  __createBinding: uo,
  __exportStar: mv,
  __values: Fa,
  __read: el,
  __spread: Sv,
  __spreadArrays: wv,
  __spreadArray: bv,
  __await: bn,
  __asyncGenerator: Tv,
  __asyncDelegator: Dv,
  __asyncValues: Mv,
  __makeTemplateObject: Cv,
  __importStar: Ev,
  __importDefault: xv,
  __classPrivateFieldGet: Ov,
  __classPrivateFieldSet: Pv,
  __classPrivateFieldIn: Rv,
  __addDisposableResource: Iv,
  __disposeResources: Av,
  __rewriteRelativeImportExtension: Nv
}, Cy = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: Iv,
  get __assign() {
    return ka;
  },
  __asyncDelegator: Dv,
  __asyncGenerator: Tv,
  __asyncValues: Mv,
  __await: bn,
  __awaiter: yv,
  __classPrivateFieldGet: Ov,
  __classPrivateFieldIn: Rv,
  __classPrivateFieldSet: Pv,
  __createBinding: uo,
  __decorate: fv,
  __disposeResources: Av,
  __esDecorate: cv,
  __exportStar: mv,
  __extends: uv,
  __generator: _v,
  __importDefault: xv,
  __importStar: Ev,
  __makeTemplateObject: Cv,
  __metadata: gv,
  __param: hv,
  __propKey: dv,
  __read: el,
  __rest: lv,
  __rewriteRelativeImportExtension: Nv,
  __runInitializers: vv,
  __setFunctionName: pv,
  __spread: Sv,
  __spreadArray: bv,
  __spreadArrays: wv,
  __values: Fa,
  default: My
}, Symbol.toStringTag, { value: "Module" })), Lv = /* @__PURE__ */ Sy(Cy);
var Ie = {}, Ae = {}, Xo = {}, af;
function Ey() {
  return af || (af = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0;
    var t = 1;
    e.default = function() {
      return "".concat(t++);
    };
  }(Xo)), Xo;
}
var Rn = {}, In = {}, $o = {}, of;
function kv() {
  return of || (of = 1, function(e) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.default = void 0, e.default = function(r) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60, i = null;
      return function() {
        for (var a = this, o = arguments.length, s = new Array(o), u = 0; u < o; u++)
          s[u] = arguments[u];
        clearTimeout(i), i = setTimeout(function() {
          r.apply(a, s);
        }, n);
      };
    };
  }($o)), $o;
}
var Ne = {}, sf;
function rl() {
  return sf || (sf = 1, Object.defineProperty(Ne, "__esModule", {
    value: !0
  }), Ne.SizeSensorId = Ne.SensorTabIndex = Ne.SensorClassName = void 0, Ne.SizeSensorId = "size-sensor-id", Ne.SensorClassName = "size-sensor-object", Ne.SensorTabIndex = "-1"), Ne;
}
var uf;
function xy() {
  if (uf) return In;
  uf = 1, Object.defineProperty(In, "__esModule", {
    value: !0
  }), In.createSensor = void 0;
  var e = r(kv()), t = rl();
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  return In.createSensor = function(i, a) {
    var o = void 0, s = [], u = function() {
      getComputedStyle(i).position === "static" && (i.style.position = "relative");
      var d = document.createElement("object");
      return d.onload = function() {
        d.contentDocument.defaultView.addEventListener("resize", l), l();
      }, d.style.display = "block", d.style.position = "absolute", d.style.top = "0", d.style.left = "0", d.style.height = "100%", d.style.width = "100%", d.style.overflow = "hidden", d.style.pointerEvents = "none", d.style.zIndex = "-1", d.style.opacity = "0", d.setAttribute("class", t.SensorClassName), d.setAttribute("tabindex", t.SensorTabIndex), d.type = "text/html", i.appendChild(d), d.data = "about:blank", d;
    }, l = (0, e.default)(function() {
      s.forEach(function(c) {
        c(i);
      });
    }), f = function(d) {
      o || (o = u()), s.indexOf(d) === -1 && s.push(d);
    }, h = function() {
      o && o.parentNode && (o.contentDocument && o.contentDocument.defaultView.removeEventListener("resize", l), o.parentNode.removeChild(o), i.removeAttribute(t.SizeSensorId), o = void 0, s = [], a && a());
    }, v = function(d) {
      var y = s.indexOf(d);
      y !== -1 && s.splice(y, 1), s.length === 0 && o && h();
    };
    return {
      element: i,
      bind: f,
      destroy: h,
      unbind: v
    };
  }, In;
}
var An = {}, lf;
function Oy() {
  if (lf) return An;
  lf = 1, Object.defineProperty(An, "__esModule", {
    value: !0
  }), An.createSensor = void 0;
  var e = rl(), t = r(kv());
  function r(n) {
    return n && n.__esModule ? n : { default: n };
  }
  return An.createSensor = function(i, a) {
    var o = void 0, s = [], u = (0, t.default)(function() {
      s.forEach(function(c) {
        c(i);
      });
    }), l = function() {
      var d = new ResizeObserver(u);
      return d.observe(i), u(), d;
    }, f = function(d) {
      o || (o = l()), s.indexOf(d) === -1 && s.push(d);
    }, h = function() {
      o && o.disconnect(), s = [], o = void 0, i.removeAttribute(e.SizeSensorId), a && a();
    }, v = function(d) {
      var y = s.indexOf(d);
      y !== -1 && s.splice(y, 1), s.length === 0 && o && h();
    };
    return {
      element: i,
      bind: f,
      destroy: h,
      unbind: v
    };
  }, An;
}
var ff;
function Py() {
  if (ff) return Rn;
  ff = 1, Object.defineProperty(Rn, "__esModule", {
    value: !0
  }), Rn.createSensor = void 0;
  var e = xy(), t = Oy();
  return Rn.createSensor = typeof ResizeObserver < "u" ? t.createSensor : e.createSensor, Rn;
}
var hf;
function Ry() {
  if (hf) return Ae;
  hf = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  }), Ae.removeSensor = Ae.getSensor = Ae.Sensors = void 0;
  var e = n(Ey()), t = Py(), r = rl();
  function n(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var i = Ae.Sensors = {};
  function a(o) {
    o && i[o] && delete i[o];
  }
  return Ae.getSensor = function(s) {
    var u = s.getAttribute(r.SizeSensorId);
    if (u && i[u])
      return i[u];
    var l = (0, e.default)();
    s.setAttribute(r.SizeSensorId, l);
    var f = (0, t.createSensor)(s, function() {
      return a(l);
    });
    return i[l] = f, f;
  }, Ae.removeSensor = function(s) {
    var u = s.element.getAttribute(r.SizeSensorId);
    s.destroy(), a(u);
  }, Ae;
}
var cf;
function Iy() {
  if (cf) return Ie;
  cf = 1, Object.defineProperty(Ie, "__esModule", {
    value: !0
  }), Ie.ver = Ie.clear = Ie.bind = void 0;
  var e = Ry();
  return Ie.bind = function(r, n) {
    var i = (0, e.getSensor)(r);
    return i.bind(n), function() {
      i.unbind(n);
    };
  }, Ie.clear = function(r) {
    var n = (0, e.getSensor)(r);
    (0, e.removeSensor)(n);
  }, Ie.ver = "1.0.3", Ie;
}
var Nn = {}, vf;
function Ay() {
  if (vf) return Nn;
  vf = 1, Object.defineProperty(Nn, "__esModule", { value: !0 }), Nn.pick = void 0;
  function e(t, r) {
    var n = {};
    return r.forEach(function(i) {
      n[i] = t[i];
    }), n;
  }
  return Nn.pick = e, Nn;
}
var Ln = {}, df;
function Ny() {
  if (df) return Ln;
  df = 1, Object.defineProperty(Ln, "__esModule", { value: !0 }), Ln.isFunction = void 0;
  function e(t) {
    return typeof t == "function";
  }
  return Ln.isFunction = e, Ln;
}
var kn = {}, pf;
function Ly() {
  if (pf) return kn;
  pf = 1, Object.defineProperty(kn, "__esModule", { value: !0 }), kn.isString = void 0;
  function e(t) {
    return typeof t == "string";
  }
  return kn.isString = e, kn;
}
var Fn = {}, gf;
function ky() {
  if (gf) return Fn;
  gf = 1, Object.defineProperty(Fn, "__esModule", { value: !0 }), Fn.isEqual = void 0;
  var e = Lv, t = e.__importDefault(by());
  return Fn.isEqual = t.default, Fn;
}
Object.defineProperty(sv, "__esModule", { value: !0 });
var we = Lv, yf = we.__importStar(wy), _f = Iy(), mf = Ay(), Zo = Ny(), Fy = Ly(), jr = ky(), By = (
  /** @class */
  function(e) {
    we.__extends(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.echarts = r.echarts, n.ele = null, n.isInitialResize = !0, n.eventHandlerRefs = {}, n;
    }
    return t.prototype.componentDidMount = function() {
      this.renderNewEcharts();
    }, t.prototype.componentDidUpdate = function(r) {
      var n = this.props.shouldSetOption;
      if (!((0, Zo.isFunction)(n) && !n(r, this.props))) {
        if (!(0, jr.isEqual)(r.theme, this.props.theme) || !(0, jr.isEqual)(r.opts, this.props.opts)) {
          this.dispose(), this.renderNewEcharts();
          return;
        }
        var i = this.getEchartsInstance();
        (0, jr.isEqual)(r.onEvents, this.props.onEvents) || (this.unbindEvents(i), this.bindEvents(i, this.props.onEvents));
        var a = ["option", "notMerge", "replaceMerge", "lazyUpdate", "showLoading", "loadingOption"];
        (0, jr.isEqual)((0, mf.pick)(this.props, a), (0, mf.pick)(r, a)) || this.updateEChartsOption(), (!(0, jr.isEqual)(r.style, this.props.style) || !(0, jr.isEqual)(r.className, this.props.className)) && this.resize();
      }
    }, t.prototype.componentWillUnmount = function() {
      this.dispose();
    }, t.prototype.initEchartsInstance = function() {
      return we.__awaiter(this, void 0, void 0, function() {
        var r = this;
        return we.__generator(this, function(n) {
          return [2, new Promise(function(i) {
            r.echarts.init(r.ele, r.props.theme, r.props.opts);
            var a = r.getEchartsInstance();
            a.on("finished", function() {
              var o = r.ele.clientWidth, s = r.ele.clientHeight;
              r.echarts.dispose(r.ele);
              var u = we.__assign({ width: o, height: s }, r.props.opts);
              i(r.echarts.init(r.ele, r.props.theme, u));
            });
          })];
        });
      });
    }, t.prototype.getEchartsInstance = function() {
      return this.echarts.getInstanceByDom(this.ele);
    }, t.prototype.dispose = function() {
      if (this.ele) {
        try {
          (0, _f.clear)(this.ele);
        } catch (r) {
          console.warn(r);
        }
        this.echarts.dispose(this.ele);
      }
    }, t.prototype.renderNewEcharts = function() {
      return we.__awaiter(this, void 0, void 0, function() {
        var r, n, i, a, o, s, u = this;
        return we.__generator(this, function(l) {
          switch (l.label) {
            case 0:
              return r = this.props, n = r.onEvents, i = r.onChartReady, a = r.autoResize, o = a === void 0 ? !0 : a, [4, this.initEchartsInstance()];
            case 1:
              return l.sent(), s = this.updateEChartsOption(), this.bindEvents(s, n || {}), (0, Zo.isFunction)(i) && i(s), this.ele && o && (0, _f.bind)(this.ele, function() {
                u.resize();
              }), [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.bindEvents = function(r, n) {
      var i = this, a = function(s, u) {
        if ((0, Fy.isString)(s) && (0, Zo.isFunction)(u)) {
          var l = function(f) {
            u(f, r);
          };
          r.on(s, l), i.eventHandlerRefs[s] = l;
        }
      };
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && a(o, n[o]);
    }, t.prototype.unbindEvents = function(r) {
      for (var n = 0, i = Object.entries(this.eventHandlerRefs); n < i.length; n++) {
        var a = i[n], o = a[0], s = a[1];
        r.off(o, s);
      }
      this.eventHandlerRefs = {};
    }, t.prototype.updateEChartsOption = function() {
      var r = this.props, n = r.option, i = r.notMerge, a = i === void 0 ? !1 : i, o = r.replaceMerge, s = o === void 0 ? null : o, u = r.lazyUpdate, l = u === void 0 ? !1 : u, f = r.showLoading, h = r.loadingOption, v = h === void 0 ? null : h, c = this.getEchartsInstance();
      return c.setOption(n, { notMerge: a, replaceMerge: s, lazyUpdate: l }), f ? c.showLoading(v) : c.hideLoading(), c;
    }, t.prototype.resize = function() {
      var r = this.getEchartsInstance();
      if (!this.isInitialResize)
        try {
          r.resize({
            width: "auto",
            height: "auto"
          });
        } catch (n) {
          console.warn(n);
        }
      this.isInitialResize = !1;
    }, t.prototype.render = function() {
      var r = this, n = this.props, i = n.style, a = n.className, o = a === void 0 ? "" : a;
      n.echarts, n.option, n.theme, n.notMerge, n.replaceMerge, n.lazyUpdate, n.showLoading, n.loadingOption, n.opts, n.onChartReady, n.onEvents, n.shouldSetOption, n.autoResize;
      var s = we.__rest(n, ["style", "className", "echarts", "option", "theme", "notMerge", "replaceMerge", "lazyUpdate", "showLoading", "loadingOption", "opts", "onChartReady", "onEvents", "shouldSetOption", "autoResize"]), u = we.__assign({ height: 300 }, i);
      return yf.default.createElement("div", we.__assign({ ref: function(l) {
        r.ele = l;
      }, style: u, className: "echarts-for-react ".concat(o) }, s));
    }, t;
  }(yf.PureComponent)
), MM = sv.default = By;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var au = function(e, t) {
  return au = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, au(e, t);
};
function qt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  au(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
var Vy = /* @__PURE__ */ function() {
  function e() {
    this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1;
  }
  return e;
}(), zy = /* @__PURE__ */ function() {
  function e() {
    this.browser = new Vy(), this.node = !1, this.wxa = !1, this.worker = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1, this.transformSupported = !1, this.transform3dSupported = !1, this.hasGlobalWindow = typeof window < "u";
  }
  return e;
}(), Z = new zy();
typeof wx == "object" && typeof wx.getSystemInfoSync == "function" ? (Z.wxa = !0, Z.touchEventsSupported = !0) : typeof document > "u" && typeof self < "u" ? Z.worker = !0 : !Z.hasGlobalWindow || "Deno" in window ? (Z.node = !0, Z.svgSupported = !0) : Hy(navigator.userAgent, Z);
function Hy(e, t) {
  var r = t.browser, n = e.match(/Firefox\/([\d.]+)/), i = e.match(/MSIE\s([\d.]+)/) || e.match(/Trident\/.+?rv:(([\d.]+))/), a = e.match(/Edge?\/([\d.]+)/), o = /micromessenger/i.test(e);
  n && (r.firefox = !0, r.version = n[1]), i && (r.ie = !0, r.version = i[1]), a && (r.edge = !0, r.version = a[1], r.newEdge = +a[1].split(".")[0] > 18), o && (r.weChat = !0), t.svgSupported = typeof SVGRect < "u", t.touchEventsSupported = "ontouchstart" in window && !r.ie && !r.edge, t.pointerEventsSupported = "onpointerdown" in window && (r.edge || r.ie && +r.version >= 11), t.domSupported = typeof document < "u";
  var s = document.documentElement.style;
  t.transform3dSupported = (r.ie && "transition" in s || r.edge || "WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix() || "MozPerspective" in s) && !("OTransition" in s), t.transformSupported = t.transform3dSupported || r.ie && +r.version >= 9;
}
var nl = 12, Gy = "sans-serif", Gr = nl + "px " + Gy, Uy = 20, Wy = 100, Yy = "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N";
function qy(e) {
  var t = {};
  if (typeof JSON > "u")
    return t;
  for (var r = 0; r < e.length; r++) {
    var n = String.fromCharCode(r + 32), i = (e.charCodeAt(r) - Uy) / Wy;
    t[n] = i;
  }
  return t;
}
var Xy = qy(Yy), rr = {
  createCanvas: function() {
    return typeof document < "u" && document.createElement("canvas");
  },
  measureText: /* @__PURE__ */ function() {
    var e, t;
    return function(r, n) {
      if (!e) {
        var i = rr.createCanvas();
        e = i && i.getContext("2d");
      }
      if (e)
        return t !== n && (t = e.font = n || Gr), e.measureText(r);
      r = r || "", n = n || Gr;
      var a = /((?:\d+)?\.?\d*)px/.exec(n), o = a && +a[1] || nl, s = 0;
      if (n.indexOf("mono") >= 0)
        s = o * r.length;
      else
        for (var u = 0; u < r.length; u++) {
          var l = Xy[r[u]];
          s += l == null ? o : l * o;
        }
      return { width: s };
    };
  }(),
  loadImage: function(e, t, r) {
    var n = new Image();
    return n.onload = t, n.onerror = r, n.src = e, n;
  }
};
function Fv(e) {
  for (var t in rr)
    e[t] && (rr[t] = e[t]);
}
var Bv = xe([
  "Function",
  "RegExp",
  "Date",
  "Error",
  "CanvasGradient",
  "CanvasPattern",
  "Image",
  "Canvas"
], function(e, t) {
  return e["[object " + t + "]"] = !0, e;
}, {}), Vv = xe([
  "Int8",
  "Uint8",
  "Uint8Clamped",
  "Int16",
  "Uint16",
  "Int32",
  "Uint32",
  "Float32",
  "Float64"
], function(e, t) {
  return e["[object " + t + "Array]"] = !0, e;
}, {}), En = Object.prototype.toString, lo = Array.prototype, $y = lo.forEach, Zy = lo.filter, il = lo.slice, jy = lo.map, Sf = (function() {
}).constructor, Ui = Sf ? Sf.prototype : null, al = "__proto__", Ky = 2311;
function ol() {
  return Ky++;
}
function wi() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  typeof console < "u" && console.error.apply(console, e);
}
function j(e) {
  if (e == null || typeof e != "object")
    return e;
  var t = e, r = En.call(e);
  if (r === "[object Array]") {
    if (!gn(e)) {
      t = [];
      for (var n = 0, i = e.length; n < i; n++)
        t[n] = j(e[n]);
    }
  } else if (Vv[r]) {
    if (!gn(e)) {
      var a = e.constructor;
      if (a.from)
        t = a.from(e);
      else {
        t = new a(e.length);
        for (var n = 0, i = e.length; n < i; n++)
          t[n] = e[n];
      }
    }
  } else if (!Bv[r] && !gn(e) && !Ti(e)) {
    t = {};
    for (var o in e)
      e.hasOwnProperty(o) && o !== al && (t[o] = j(e[o]));
  }
  return t;
}
function ut(e, t, r) {
  if (!F(t) || !F(e))
    return r ? j(t) : e;
  for (var n in t)
    if (t.hasOwnProperty(n) && n !== al) {
      var i = e[n], a = t[n];
      F(a) && F(i) && !L(a) && !L(i) && !Ti(a) && !Ti(i) && !ou(a) && !ou(i) && !gn(a) && !gn(i) ? ut(i, a, r) : (r || !(n in e)) && (e[n] = j(t[n]));
    }
  return e;
}
function Qy(e, t) {
  for (var r = e[0], n = 1, i = e.length; n < i; n++)
    r = ut(r, e[n], t);
  return r;
}
function A(e, t) {
  if (Object.assign)
    Object.assign(e, t);
  else
    for (var r in t)
      t.hasOwnProperty(r) && r !== al && (e[r] = t[r]);
  return e;
}
function ht(e, t, r) {
  for (var n = at(t), i = 0, a = n.length; i < a; i++) {
    var o = n[i];
    (r ? t[o] != null : e[o] == null) && (e[o] = t[o]);
  }
  return e;
}
var Jy = rr.createCanvas;
function ot(e, t) {
  if (e) {
    if (e.indexOf)
      return e.indexOf(t);
    for (var r = 0, n = e.length; r < n; r++)
      if (e[r] === t)
        return r;
  }
  return -1;
}
function sl(e, t) {
  var r = e.prototype;
  function n() {
  }
  n.prototype = t.prototype, e.prototype = new n();
  for (var i in r)
    r.hasOwnProperty(i) && (e.prototype[i] = r[i]);
  e.prototype.constructor = e, e.superClass = t;
}
function pe(e, t, r) {
  if (e = "prototype" in e ? e.prototype : e, t = "prototype" in t ? t.prototype : t, Object.getOwnPropertyNames)
    for (var n = Object.getOwnPropertyNames(t), i = 0; i < n.length; i++) {
      var a = n[i];
      a !== "constructor" && (r ? t[a] != null : e[a] == null) && (e[a] = t[a]);
    }
  else
    ht(e, t, r);
}
function Ot(e) {
  return !e || typeof e == "string" ? !1 : typeof e.length == "number";
}
function D(e, t, r) {
  if (e && t)
    if (e.forEach && e.forEach === $y)
      e.forEach(t, r);
    else if (e.length === +e.length)
      for (var n = 0, i = e.length; n < i; n++)
        t.call(r, e[n], n, e);
    else
      for (var a in e)
        e.hasOwnProperty(a) && t.call(r, e[a], a, e);
}
function k(e, t, r) {
  if (!e)
    return [];
  if (!t)
    return ho(e);
  if (e.map && e.map === jy)
    return e.map(t, r);
  for (var n = [], i = 0, a = e.length; i < a; i++)
    n.push(t.call(r, e[i], i, e));
  return n;
}
function xe(e, t, r, n) {
  if (e && t) {
    for (var i = 0, a = e.length; i < a; i++)
      r = t.call(n, r, e[i], i, e);
    return r;
  }
}
function ct(e, t, r) {
  if (!e)
    return [];
  if (!t)
    return ho(e);
  if (e.filter && e.filter === Zy)
    return e.filter(t, r);
  for (var n = [], i = 0, a = e.length; i < a; i++)
    t.call(r, e[i], i, e) && n.push(e[i]);
  return n;
}
function t0(e, t, r) {
  if (e && t) {
    for (var n = 0, i = e.length; n < i; n++)
      if (t.call(r, e[n], n, e))
        return e[n];
  }
}
function at(e) {
  if (!e)
    return [];
  if (Object.keys)
    return Object.keys(e);
  var t = [];
  for (var r in e)
    e.hasOwnProperty(r) && t.push(r);
  return t;
}
function e0(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  return function() {
    return e.apply(t, r.concat(il.call(arguments)));
  };
}
var wt = Ui && X(Ui.bind) ? Ui.call.bind(Ui.bind) : e0;
function xn(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return function() {
    return e.apply(this, t.concat(il.call(arguments)));
  };
}
function L(e) {
  return Array.isArray ? Array.isArray(e) : En.call(e) === "[object Array]";
}
function X(e) {
  return typeof e == "function";
}
function V(e) {
  return typeof e == "string";
}
function bi(e) {
  return En.call(e) === "[object String]";
}
function lt(e) {
  return typeof e == "number";
}
function F(e) {
  var t = typeof e;
  return t === "function" || !!e && t === "object";
}
function ou(e) {
  return !!Bv[En.call(e)];
}
function bt(e) {
  return !!Vv[En.call(e)];
}
function Ti(e) {
  return typeof e == "object" && typeof e.nodeType == "number" && typeof e.ownerDocument == "object";
}
function fo(e) {
  return e.colorStops != null;
}
function r0(e) {
  return e.image != null;
}
function zv(e) {
  return En.call(e) === "[object RegExp]";
}
function Tn(e) {
  return e !== e;
}
function su() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  for (var r = 0, n = e.length; r < n; r++)
    if (e[r] != null)
      return e[r];
}
function q(e, t) {
  return e ?? t;
}
function li(e, t, r) {
  return e ?? t ?? r;
}
function ho(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return il.apply(e, t);
}
function ul(e) {
  if (typeof e == "number")
    return [e, e, e, e];
  var t = e.length;
  return t === 2 ? [e[0], e[1], e[0], e[1]] : t === 3 ? [e[0], e[1], e[2], e[1]] : e;
}
function U(e, t) {
  if (!e)
    throw new Error(t);
}
function Te(e) {
  return e == null ? null : typeof e.trim == "function" ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}
var Hv = "__ec_primitive__";
function Ba(e) {
  e[Hv] = !0;
}
function gn(e) {
  return e[Hv];
}
var n0 = function() {
  function e() {
    this.data = {};
  }
  return e.prototype.delete = function(t) {
    var r = this.has(t);
    return r && delete this.data[t], r;
  }, e.prototype.has = function(t) {
    return this.data.hasOwnProperty(t);
  }, e.prototype.get = function(t) {
    return this.data[t];
  }, e.prototype.set = function(t, r) {
    return this.data[t] = r, this;
  }, e.prototype.keys = function() {
    return at(this.data);
  }, e.prototype.forEach = function(t) {
    var r = this.data;
    for (var n in r)
      r.hasOwnProperty(n) && t(r[n], n);
  }, e;
}(), Gv = typeof Map == "function";
function i0() {
  return Gv ? /* @__PURE__ */ new Map() : new n0();
}
var Uv = function() {
  function e(t) {
    var r = L(t);
    this.data = i0();
    var n = this;
    t instanceof e ? t.each(i) : t && D(t, i);
    function i(a, o) {
      r ? n.set(a, o) : n.set(o, a);
    }
  }
  return e.prototype.hasKey = function(t) {
    return this.data.has(t);
  }, e.prototype.get = function(t) {
    return this.data.get(t);
  }, e.prototype.set = function(t, r) {
    return this.data.set(t, r), r;
  }, e.prototype.each = function(t, r) {
    this.data.forEach(function(n, i) {
      t.call(r, n, i);
    });
  }, e.prototype.keys = function() {
    var t = this.data.keys();
    return Gv ? Array.from(t) : t;
  }, e.prototype.removeKey = function(t) {
    this.data.delete(t);
  }, e;
}();
function W(e) {
  return new Uv(e);
}
function Wv(e, t) {
  for (var r = new e.constructor(e.length + t.length), n = 0; n < e.length; n++)
    r[n] = e[n];
  for (var i = e.length, n = 0; n < t.length; n++)
    r[n + i] = t[n];
  return r;
}
function Ni(e, t) {
  var r;
  if (Object.create)
    r = Object.create(e);
  else {
    var n = function() {
    };
    n.prototype = e, r = new n();
  }
  return t && A(r, t), r;
}
function a0(e) {
  var t = e.style;
  t.webkitUserSelect = "none", t.userSelect = "none", t.webkitTapHighlightColor = "rgba(0,0,0,0)", t["-webkit-touch-callout"] = "none";
}
function Ur(e, t) {
  return e.hasOwnProperty(t);
}
function Ut() {
}
var fi = 180 / Math.PI;
const o0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  HashMap: Uv,
  RADIAN_TO_DEGREE: fi,
  assert: U,
  bind: wt,
  clone: j,
  concatArray: Wv,
  createCanvas: Jy,
  createHashMap: W,
  createObject: Ni,
  curry: xn,
  defaults: ht,
  disableUserSelect: a0,
  each: D,
  eqNaN: Tn,
  extend: A,
  filter: ct,
  find: t0,
  guid: ol,
  hasOwn: Ur,
  indexOf: ot,
  inherits: sl,
  isArray: L,
  isArrayLike: Ot,
  isBuiltInObject: ou,
  isDom: Ti,
  isFunction: X,
  isGradientObject: fo,
  isImagePatternObject: r0,
  isNumber: lt,
  isObject: F,
  isPrimitive: gn,
  isRegExp: zv,
  isString: V,
  isStringSafe: bi,
  isTypedArray: bt,
  keys: at,
  logError: wi,
  map: k,
  merge: ut,
  mergeAll: Qy,
  mixin: pe,
  noop: Ut,
  normalizeCssArray: ul,
  reduce: xe,
  retrieve: su,
  retrieve2: q,
  retrieve3: li,
  setAsPrimitive: Ba,
  slice: ho,
  trim: Te
}, Symbol.toStringTag, { value: "Module" }));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var uu = function(e, t) {
  return uu = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, uu(e, t);
};
function rt(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  uu(e, t);
  function r() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (r.prototype = t.prototype, new r());
}
function Yr(e, t) {
  return e == null && (e = 0), t == null && (t = 0), [e, t];
}
function s0(e, t) {
  return e[0] = t[0], e[1] = t[1], e;
}
function Yv(e) {
  return [e[0], e[1]];
}
function u0(e, t, r) {
  return e[0] = t, e[1] = r, e;
}
function lu(e, t, r) {
  return e[0] = t[0] + r[0], e[1] = t[1] + r[1], e;
}
function l0(e, t, r, n) {
  return e[0] = t[0] + r[0] * n, e[1] = t[1] + r[1] * n, e;
}
function qv(e, t, r) {
  return e[0] = t[0] - r[0], e[1] = t[1] - r[1], e;
}
function ll(e) {
  return Math.sqrt(fl(e));
}
var f0 = ll;
function fl(e) {
  return e[0] * e[0] + e[1] * e[1];
}
var h0 = fl;
function c0(e, t, r) {
  return e[0] = t[0] * r[0], e[1] = t[1] * r[1], e;
}
function v0(e, t, r) {
  return e[0] = t[0] / r[0], e[1] = t[1] / r[1], e;
}
function d0(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function Ta(e, t, r) {
  return e[0] = t[0] * r, e[1] = t[1] * r, e;
}
function Xv(e, t) {
  var r = ll(t);
  return r === 0 ? (e[0] = 0, e[1] = 0) : (e[0] = t[0] / r, e[1] = t[1] / r), e;
}
function Va(e, t) {
  return Math.sqrt((e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]));
}
var $v = Va;
function Zv(e, t) {
  return (e[0] - t[0]) * (e[0] - t[0]) + (e[1] - t[1]) * (e[1] - t[1]);
}
var Lr = Zv;
function p0(e, t) {
  return e[0] = -t[0], e[1] = -t[1], e;
}
function g0(e, t, r, n) {
  return e[0] = t[0] + n * (r[0] - t[0]), e[1] = t[1] + n * (r[1] - t[1]), e;
}
function Ve(e, t, r) {
  var n = t[0], i = t[1];
  return e[0] = r[0] * n + r[2] * i + r[4], e[1] = r[1] * n + r[3] * i + r[5], e;
}
function Ke(e, t, r) {
  return e[0] = Math.min(t[0], r[0]), e[1] = Math.min(t[1], r[1]), e;
}
function Qe(e, t, r) {
  return e[0] = Math.max(t[0], r[0]), e[1] = Math.max(t[1], r[1]), e;
}
const y0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  add: lu,
  applyTransform: Ve,
  clone: Yv,
  copy: s0,
  create: Yr,
  dist: $v,
  distSquare: Lr,
  distance: Va,
  distanceSquare: Zv,
  div: v0,
  dot: d0,
  len: ll,
  lenSquare: fl,
  length: f0,
  lengthSquare: h0,
  lerp: g0,
  max: Qe,
  min: Ke,
  mul: c0,
  negate: p0,
  normalize: Xv,
  scale: Ta,
  scaleAndAdd: l0,
  set: u0,
  sub: qv
}, Symbol.toStringTag, { value: "Module" }));
var Kr = /* @__PURE__ */ function() {
  function e(t, r) {
    this.target = t, this.topTarget = r && r.topTarget;
  }
  return e;
}(), _0 = function() {
  function e(t) {
    this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this);
  }
  return e.prototype._dragStart = function(t) {
    for (var r = t.target; r && !r.draggable; )
      r = r.parent || r.__hostTarget;
    r && (this._draggingTarget = r, r.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Kr(r, t), "dragstart", t.event));
  }, e.prototype._drag = function(t) {
    var r = this._draggingTarget;
    if (r) {
      var n = t.offsetX, i = t.offsetY, a = n - this._x, o = i - this._y;
      this._x = n, this._y = i, r.drift(a, o, t), this.handler.dispatchToElement(new Kr(r, t), "drag", t.event);
      var s = this.handler.findHover(n, i, r).target, u = this._dropTarget;
      this._dropTarget = s, r !== s && (u && s !== u && this.handler.dispatchToElement(new Kr(u, t), "dragleave", t.event), s && s !== u && this.handler.dispatchToElement(new Kr(s, t), "dragenter", t.event));
    }
  }, e.prototype._dragEnd = function(t) {
    var r = this._draggingTarget;
    r && (r.dragging = !1), this.handler.dispatchToElement(new Kr(r, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Kr(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null;
  }, e;
}(), Ge = function() {
  function e(t) {
    t && (this._$eventProcessor = t);
  }
  return e.prototype.on = function(t, r, n, i) {
    this._$handlers || (this._$handlers = {});
    var a = this._$handlers;
    if (typeof r == "function" && (i = n, n = r, r = null), !n || !t)
      return this;
    var o = this._$eventProcessor;
    r != null && o && o.normalizeQuery && (r = o.normalizeQuery(r)), a[t] || (a[t] = []);
    for (var s = 0; s < a[t].length; s++)
      if (a[t][s].h === n)
        return this;
    var u = {
      h: n,
      query: r,
      ctx: i || this,
      callAtLast: n.zrEventfulCallAtLast
    }, l = a[t].length - 1, f = a[t][l];
    return f && f.callAtLast ? a[t].splice(l, 0, u) : a[t].push(u), this;
  }, e.prototype.isSilent = function(t) {
    var r = this._$handlers;
    return !r || !r[t] || !r[t].length;
  }, e.prototype.off = function(t, r) {
    var n = this._$handlers;
    if (!n)
      return this;
    if (!t)
      return this._$handlers = {}, this;
    if (r) {
      if (n[t]) {
        for (var i = [], a = 0, o = n[t].length; a < o; a++)
          n[t][a].h !== r && i.push(n[t][a]);
        n[t] = i;
      }
      n[t] && n[t].length === 0 && delete n[t];
    } else
      delete n[t];
    return this;
  }, e.prototype.trigger = function(t) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[t], a = this._$eventProcessor;
    if (i)
      for (var o = r.length, s = i.length, u = 0; u < s; u++) {
        var l = i[u];
        if (!(a && a.filter && l.query != null && !a.filter(t, l.query)))
          switch (o) {
            case 0:
              l.h.call(l.ctx);
              break;
            case 1:
              l.h.call(l.ctx, r[0]);
              break;
            case 2:
              l.h.call(l.ctx, r[0], r[1]);
              break;
            default:
              l.h.apply(l.ctx, r);
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, e.prototype.triggerWithContext = function(t) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (!this._$handlers)
      return this;
    var i = this._$handlers[t], a = this._$eventProcessor;
    if (i)
      for (var o = r.length, s = r[o - 1], u = i.length, l = 0; l < u; l++) {
        var f = i[l];
        if (!(a && a.filter && f.query != null && !a.filter(t, f.query)))
          switch (o) {
            case 0:
              f.h.call(s);
              break;
            case 1:
              f.h.call(s, r[0]);
              break;
            case 2:
              f.h.call(s, r[0], r[1]);
              break;
            default:
              f.h.apply(s, r.slice(1, o - 1));
              break;
          }
      }
    return a && a.afterTrigger && a.afterTrigger(t), this;
  }, e;
}(), m0 = Math.log(2);
function fu(e, t, r, n, i, a) {
  var o = n + "-" + i, s = e.length;
  if (a.hasOwnProperty(o))
    return a[o];
  if (t === 1) {
    var u = Math.round(Math.log((1 << s) - 1 & ~i) / m0);
    return e[r][u];
  }
  for (var l = n | 1 << r, f = r + 1; n & 1 << f; )
    f++;
  for (var h = 0, v = 0, c = 0; v < s; v++) {
    var d = 1 << v;
    d & i || (h += (c % 2 ? -1 : 1) * e[r][v] * fu(e, t - 1, f, l, i | d, a), c++);
  }
  return a[o] = h, h;
}
function wf(e, t) {
  var r = [
    [e[0], e[1], 1, 0, 0, 0, -t[0] * e[0], -t[0] * e[1]],
    [0, 0, 0, e[0], e[1], 1, -t[1] * e[0], -t[1] * e[1]],
    [e[2], e[3], 1, 0, 0, 0, -t[2] * e[2], -t[2] * e[3]],
    [0, 0, 0, e[2], e[3], 1, -t[3] * e[2], -t[3] * e[3]],
    [e[4], e[5], 1, 0, 0, 0, -t[4] * e[4], -t[4] * e[5]],
    [0, 0, 0, e[4], e[5], 1, -t[5] * e[4], -t[5] * e[5]],
    [e[6], e[7], 1, 0, 0, 0, -t[6] * e[6], -t[6] * e[7]],
    [0, 0, 0, e[6], e[7], 1, -t[7] * e[6], -t[7] * e[7]]
  ], n = {}, i = fu(r, 8, 0, 0, 0, n);
  if (i !== 0) {
    for (var a = [], o = 0; o < 8; o++)
      for (var s = 0; s < 8; s++)
        a[s] == null && (a[s] = 0), a[s] += ((o + s) % 2 ? -1 : 1) * fu(r, 7, o === 0 ? 1 : 0, 1 << o, 1 << s, n) / i * t[o];
    return function(u, l, f) {
      var h = l * a[6] + f * a[7] + 1;
      u[0] = (l * a[0] + f * a[1] + a[2]) / h, u[1] = (l * a[3] + f * a[4] + a[5]) / h;
    };
  }
}
var bf = "___zrEVENTSAVED", jo = [];
function CM(e, t, r, n, i) {
  return hu(jo, t, n, i, !0) && hu(e, r, jo[0], jo[1]);
}
function hu(e, t, r, n, i) {
  if (t.getBoundingClientRect && Z.domSupported && !jv(t)) {
    var a = t[bf] || (t[bf] = {}), o = S0(t, a), s = w0(o, a, i);
    if (s)
      return s(e, r, n), !0;
  }
  return !1;
}
function S0(e, t) {
  var r = t.markers;
  if (r)
    return r;
  r = t.markers = [];
  for (var n = ["left", "right"], i = ["top", "bottom"], a = 0; a < 4; a++) {
    var o = document.createElement("div"), s = o.style, u = a % 2, l = (a >> 1) % 2;
    s.cssText = [
      "position: absolute",
      "visibility: hidden",
      "padding: 0",
      "margin: 0",
      "border-width: 0",
      "user-select: none",
      "width:0",
      "height:0",
      n[u] + ":0",
      i[l] + ":0",
      n[1 - u] + ":auto",
      i[1 - l] + ":auto",
      ""
    ].join("!important;"), e.appendChild(o), r.push(o);
  }
  return r;
}
function w0(e, t, r) {
  for (var n = r ? "invTrans" : "trans", i = t[n], a = t.srcCoords, o = [], s = [], u = !0, l = 0; l < 4; l++) {
    var f = e[l].getBoundingClientRect(), h = 2 * l, v = f.left, c = f.top;
    o.push(v, c), u = u && a && v === a[h] && c === a[h + 1], s.push(e[l].offsetLeft, e[l].offsetTop);
  }
  return u && i ? i : (t.srcCoords = o, t[n] = r ? wf(s, o) : wf(o, s));
}
function jv(e) {
  return e.nodeName.toUpperCase() === "CANVAS";
}
var b0 = /([&<>"'])/g, T0 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
function At(e) {
  return e == null ? "" : (e + "").replace(b0, function(t, r) {
    return T0[r];
  });
}
var D0 = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ko = [], M0 = Z.browser.firefox && +Z.browser.version.split(".")[0] < 39;
function cu(e, t, r, n) {
  return r = r || {}, n ? Tf(e, t, r) : M0 && t.layerX != null && t.layerX !== t.offsetX ? (r.zrX = t.layerX, r.zrY = t.layerY) : t.offsetX != null ? (r.zrX = t.offsetX, r.zrY = t.offsetY) : Tf(e, t, r), r;
}
function Tf(e, t, r) {
  if (Z.domSupported && e.getBoundingClientRect) {
    var n = t.clientX, i = t.clientY;
    if (jv(e)) {
      var a = e.getBoundingClientRect();
      r.zrX = n - a.left, r.zrY = i - a.top;
      return;
    } else if (hu(Ko, e, n, i)) {
      r.zrX = Ko[0], r.zrY = Ko[1];
      return;
    }
  }
  r.zrX = r.zrY = 0;
}
function hl(e) {
  return e || window.event;
}
function le(e, t, r) {
  if (t = hl(t), t.zrX != null)
    return t;
  var n = t.type, i = n && n.indexOf("touch") >= 0;
  if (i) {
    var o = n !== "touchend" ? t.targetTouches[0] : t.changedTouches[0];
    o && cu(e, o, t, r);
  } else {
    cu(e, t, t, r);
    var a = C0(t);
    t.zrDelta = a ? a / 120 : -(t.detail || 0) / 3;
  }
  var s = t.button;
  return t.which == null && s !== void 0 && D0.test(t.type) && (t.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0), t;
}
function C0(e) {
  var t = e.wheelDelta;
  if (t)
    return t;
  var r = e.deltaX, n = e.deltaY;
  if (r == null || n == null)
    return t;
  var i = Math.abs(n !== 0 ? n : r), a = n > 0 ? -1 : n < 0 ? 1 : r > 0 ? -1 : 1;
  return 3 * i * a;
}
function E0(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function x0(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
var O0 = function(e) {
  e.preventDefault(), e.stopPropagation(), e.cancelBubble = !0;
};
function EM(e) {
  return e.which === 2 || e.which === 3;
}
var P0 = function() {
  function e() {
    this._track = [];
  }
  return e.prototype.recognize = function(t, r, n) {
    return this._doTrack(t, r, n), this._recognize(t);
  }, e.prototype.clear = function() {
    return this._track.length = 0, this;
  }, e.prototype._doTrack = function(t, r, n) {
    var i = t.touches;
    if (i) {
      for (var a = {
        points: [],
        touches: [],
        target: r,
        event: t
      }, o = 0, s = i.length; o < s; o++) {
        var u = i[o], l = cu(n, u, {});
        a.points.push([l.zrX, l.zrY]), a.touches.push(u);
      }
      this._track.push(a);
    }
  }, e.prototype._recognize = function(t) {
    for (var r in Qo)
      if (Qo.hasOwnProperty(r)) {
        var n = Qo[r](this._track, t);
        if (n)
          return n;
      }
  }, e;
}();
function Df(e) {
  var t = e[1][0] - e[0][0], r = e[1][1] - e[0][1];
  return Math.sqrt(t * t + r * r);
}
function R0(e) {
  return [
    (e[0][0] + e[1][0]) / 2,
    (e[0][1] + e[1][1]) / 2
  ];
}
var Qo = {
  pinch: function(e, t) {
    var r = e.length;
    if (r) {
      var n = (e[r - 1] || {}).points, i = (e[r - 2] || {}).points || n;
      if (i && i.length > 1 && n && n.length > 1) {
        var a = Df(n) / Df(i);
        !isFinite(a) && (a = 1), t.pinchScale = a;
        var o = R0(n);
        return t.pinchX = o[0], t.pinchY = o[1], {
          type: "pinch",
          target: e[0].target,
          event: t
        };
      }
    }
  }
};
function kr() {
  return [1, 0, 0, 1, 0, 0];
}
function co(e) {
  return e[0] = 1, e[1] = 0, e[2] = 0, e[3] = 1, e[4] = 0, e[5] = 0, e;
}
function cl(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e;
}
function yn(e, t, r) {
  var n = t[0] * r[0] + t[2] * r[1], i = t[1] * r[0] + t[3] * r[1], a = t[0] * r[2] + t[2] * r[3], o = t[1] * r[2] + t[3] * r[3], s = t[0] * r[4] + t[2] * r[5] + t[4], u = t[1] * r[4] + t[3] * r[5] + t[5];
  return e[0] = n, e[1] = i, e[2] = a, e[3] = o, e[4] = s, e[5] = u, e;
}
function vu(e, t, r) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4] + r[0], e[5] = t[5] + r[1], e;
}
function Kv(e, t, r, n) {
  n === void 0 && (n = [0, 0]);
  var i = t[0], a = t[2], o = t[4], s = t[1], u = t[3], l = t[5], f = Math.sin(r), h = Math.cos(r);
  return e[0] = i * h + s * f, e[1] = -i * f + s * h, e[2] = a * h + u * f, e[3] = -a * f + h * u, e[4] = h * (o - n[0]) + f * (l - n[1]) + n[0], e[5] = h * (l - n[1]) - f * (o - n[0]) + n[1], e;
}
function Qv(e, t, r) {
  var n = r[0], i = r[1];
  return e[0] = t[0] * n, e[1] = t[1] * i, e[2] = t[2] * n, e[3] = t[3] * i, e[4] = t[4] * n, e[5] = t[5] * i, e;
}
function vo(e, t) {
  var r = t[0], n = t[2], i = t[4], a = t[1], o = t[3], s = t[5], u = r * o - a * n;
  return u ? (u = 1 / u, e[0] = o * u, e[1] = -a * u, e[2] = -n * u, e[3] = r * u, e[4] = (n * s - o * i) * u, e[5] = (a * i - r * s) * u, e) : null;
}
function I0(e) {
  var t = kr();
  return cl(t, e), t;
}
const A0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clone: I0,
  copy: cl,
  create: kr,
  identity: co,
  invert: vo,
  mul: yn,
  rotate: Kv,
  scale: Qv,
  translate: vu
}, Symbol.toStringTag, { value: "Module" }));
var tt = function() {
  function e(t, r) {
    this.x = t || 0, this.y = r || 0;
  }
  return e.prototype.copy = function(t) {
    return this.x = t.x, this.y = t.y, this;
  }, e.prototype.clone = function() {
    return new e(this.x, this.y);
  }, e.prototype.set = function(t, r) {
    return this.x = t, this.y = r, this;
  }, e.prototype.equal = function(t) {
    return t.x === this.x && t.y === this.y;
  }, e.prototype.add = function(t) {
    return this.x += t.x, this.y += t.y, this;
  }, e.prototype.scale = function(t) {
    this.x *= t, this.y *= t;
  }, e.prototype.scaleAndAdd = function(t, r) {
    this.x += t.x * r, this.y += t.y * r;
  }, e.prototype.sub = function(t) {
    return this.x -= t.x, this.y -= t.y, this;
  }, e.prototype.dot = function(t) {
    return this.x * t.x + this.y * t.y;
  }, e.prototype.len = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }, e.prototype.lenSquare = function() {
    return this.x * this.x + this.y * this.y;
  }, e.prototype.normalize = function() {
    var t = this.len();
    return this.x /= t, this.y /= t, this;
  }, e.prototype.distance = function(t) {
    var r = this.x - t.x, n = this.y - t.y;
    return Math.sqrt(r * r + n * n);
  }, e.prototype.distanceSquare = function(t) {
    var r = this.x - t.x, n = this.y - t.y;
    return r * r + n * n;
  }, e.prototype.negate = function() {
    return this.x = -this.x, this.y = -this.y, this;
  }, e.prototype.transform = function(t) {
    if (t) {
      var r = this.x, n = this.y;
      return this.x = t[0] * r + t[2] * n + t[4], this.y = t[1] * r + t[3] * n + t[5], this;
    }
  }, e.prototype.toArray = function(t) {
    return t[0] = this.x, t[1] = this.y, t;
  }, e.prototype.fromArray = function(t) {
    this.x = t[0], this.y = t[1];
  }, e.set = function(t, r, n) {
    t.x = r, t.y = n;
  }, e.copy = function(t, r) {
    t.x = r.x, t.y = r.y;
  }, e.len = function(t) {
    return Math.sqrt(t.x * t.x + t.y * t.y);
  }, e.lenSquare = function(t) {
    return t.x * t.x + t.y * t.y;
  }, e.dot = function(t, r) {
    return t.x * r.x + t.y * r.y;
  }, e.add = function(t, r, n) {
    t.x = r.x + n.x, t.y = r.y + n.y;
  }, e.sub = function(t, r, n) {
    t.x = r.x - n.x, t.y = r.y - n.y;
  }, e.scale = function(t, r, n) {
    t.x = r.x * n, t.y = r.y * n;
  }, e.scaleAndAdd = function(t, r, n, i) {
    t.x = r.x + n.x * i, t.y = r.y + n.y * i;
  }, e.lerp = function(t, r, n, i) {
    var a = 1 - i;
    t.x = a * r.x + i * n.x, t.y = a * r.y + i * n.y;
  }, e;
}(), Wi = Math.min, Yi = Math.max, hr = new tt(), cr = new tt(), vr = new tt(), dr = new tt(), Bn = new tt(), Vn = new tt(), et = function() {
  function e(t, r, n, i) {
    n < 0 && (t = t + n, n = -n), i < 0 && (r = r + i, i = -i), this.x = t, this.y = r, this.width = n, this.height = i;
  }
  return e.prototype.union = function(t) {
    var r = Wi(t.x, this.x), n = Wi(t.y, this.y);
    isFinite(this.x) && isFinite(this.width) ? this.width = Yi(t.x + t.width, this.x + this.width) - r : this.width = t.width, isFinite(this.y) && isFinite(this.height) ? this.height = Yi(t.y + t.height, this.y + this.height) - n : this.height = t.height, this.x = r, this.y = n;
  }, e.prototype.applyTransform = function(t) {
    e.applyTransform(this, this, t);
  }, e.prototype.calculateTransform = function(t) {
    var r = this, n = t.width / r.width, i = t.height / r.height, a = kr();
    return vu(a, a, [-r.x, -r.y]), Qv(a, a, [n, i]), vu(a, a, [t.x, t.y]), a;
  }, e.prototype.intersect = function(t, r) {
    if (!t)
      return !1;
    t instanceof e || (t = e.create(t));
    var n = this, i = n.x, a = n.x + n.width, o = n.y, s = n.y + n.height, u = t.x, l = t.x + t.width, f = t.y, h = t.y + t.height, v = !(a < u || l < i || s < f || h < o);
    if (r) {
      var c = 1 / 0, d = 0, y = Math.abs(a - u), p = Math.abs(l - i), g = Math.abs(s - f), _ = Math.abs(h - o), m = Math.min(y, p), S = Math.min(g, _);
      a < u || l < i ? m > d && (d = m, y < p ? tt.set(Vn, -y, 0) : tt.set(Vn, p, 0)) : m < c && (c = m, y < p ? tt.set(Bn, y, 0) : tt.set(Bn, -p, 0)), s < f || h < o ? S > d && (d = S, g < _ ? tt.set(Vn, 0, -g) : tt.set(Vn, 0, _)) : m < c && (c = m, g < _ ? tt.set(Bn, 0, g) : tt.set(Bn, 0, -_));
    }
    return r && tt.copy(r, v ? Bn : Vn), v;
  }, e.prototype.contain = function(t, r) {
    var n = this;
    return t >= n.x && t <= n.x + n.width && r >= n.y && r <= n.y + n.height;
  }, e.prototype.clone = function() {
    return new e(this.x, this.y, this.width, this.height);
  }, e.prototype.copy = function(t) {
    e.copy(this, t);
  }, e.prototype.plain = function() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
  }, e.prototype.isFinite = function() {
    return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height);
  }, e.prototype.isZero = function() {
    return this.width === 0 || this.height === 0;
  }, e.create = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e.copy = function(t, r) {
    t.x = r.x, t.y = r.y, t.width = r.width, t.height = r.height;
  }, e.applyTransform = function(t, r, n) {
    if (!n) {
      t !== r && e.copy(t, r);
      return;
    }
    if (n[1] < 1e-5 && n[1] > -1e-5 && n[2] < 1e-5 && n[2] > -1e-5) {
      var i = n[0], a = n[3], o = n[4], s = n[5];
      t.x = r.x * i + o, t.y = r.y * a + s, t.width = r.width * i, t.height = r.height * a, t.width < 0 && (t.x += t.width, t.width = -t.width), t.height < 0 && (t.y += t.height, t.height = -t.height);
      return;
    }
    hr.x = vr.x = r.x, hr.y = dr.y = r.y, cr.x = dr.x = r.x + r.width, cr.y = vr.y = r.y + r.height, hr.transform(n), dr.transform(n), cr.transform(n), vr.transform(n), t.x = Wi(hr.x, cr.x, vr.x, dr.x), t.y = Wi(hr.y, cr.y, vr.y, dr.y);
    var u = Yi(hr.x, cr.x, vr.x, dr.x), l = Yi(hr.y, cr.y, vr.y, dr.y);
    t.width = u - t.x, t.height = l - t.y;
  }, e;
}(), Jv = "silent";
function N0(e, t, r) {
  return {
    type: e,
    event: r,
    target: t.target,
    topTarget: t.topTarget,
    cancelBubble: !1,
    offsetX: r.zrX,
    offsetY: r.zrY,
    gestureEvent: r.gestureEvent,
    pinchX: r.pinchX,
    pinchY: r.pinchY,
    pinchScale: r.pinchScale,
    wheelDelta: r.zrDelta,
    zrByTouch: r.zrByTouch,
    which: r.which,
    stop: L0
  };
}
function L0() {
  O0(this.event);
}
var k0 = function(e) {
  rt(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.handler = null, r;
  }
  return t.prototype.dispose = function() {
  }, t.prototype.setCursor = function() {
  }, t;
}(Ge), zn = /* @__PURE__ */ function() {
  function e(t, r) {
    this.x = t, this.y = r;
  }
  return e;
}(), F0 = [
  "click",
  "dblclick",
  "mousewheel",
  "mouseout",
  "mouseup",
  "mousedown",
  "mousemove",
  "contextmenu"
], Jo = new et(0, 0, 0, 0), td = function(e) {
  rt(t, e);
  function t(r, n, i, a, o) {
    var s = e.call(this) || this;
    return s._hovered = new zn(0, 0), s.storage = r, s.painter = n, s.painterRoot = a, s._pointerSize = o, i = i || new k0(), s.proxy = null, s.setHandlerProxy(i), s._draggingMgr = new _0(s), s;
  }
  return t.prototype.setHandlerProxy = function(r) {
    this.proxy && this.proxy.dispose(), r && (D(F0, function(n) {
      r.on && r.on(n, this[n], this);
    }, this), r.handler = this), this.proxy = r;
  }, t.prototype.mousemove = function(r) {
    var n = r.zrX, i = r.zrY, a = ed(this, n, i), o = this._hovered, s = o.target;
    s && !s.__zr && (o = this.findHover(o.x, o.y), s = o.target);
    var u = this._hovered = a ? new zn(n, i) : this.findHover(n, i), l = u.target, f = this.proxy;
    f.setCursor && f.setCursor(l ? l.cursor : "default"), s && l !== s && this.dispatchToElement(o, "mouseout", r), this.dispatchToElement(u, "mousemove", r), l && l !== s && this.dispatchToElement(u, "mouseover", r);
  }, t.prototype.mouseout = function(r) {
    var n = r.zrEventControl;
    n !== "only_globalout" && this.dispatchToElement(this._hovered, "mouseout", r), n !== "no_globalout" && this.trigger("globalout", { type: "globalout", event: r });
  }, t.prototype.resize = function() {
    this._hovered = new zn(0, 0);
  }, t.prototype.dispatch = function(r, n) {
    var i = this[r];
    i && i.call(this, n);
  }, t.prototype.dispose = function() {
    this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null;
  }, t.prototype.setCursorStyle = function(r) {
    var n = this.proxy;
    n.setCursor && n.setCursor(r);
  }, t.prototype.dispatchToElement = function(r, n, i) {
    r = r || {};
    var a = r.target;
    if (!(a && a.silent)) {
      for (var o = "on" + n, s = N0(n, r, i); a && (a[o] && (s.cancelBubble = !!a[o].call(a, s)), a.trigger(n, s), a = a.__hostTarget ? a.__hostTarget : a.parent, !s.cancelBubble); )
        ;
      s.cancelBubble || (this.trigger(n, s), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function(u) {
        typeof u[o] == "function" && u[o].call(u, s), u.trigger && u.trigger(n, s);
      }));
    }
  }, t.prototype.findHover = function(r, n, i) {
    var a = this.storage.getDisplayList(), o = new zn(r, n);
    if (Mf(a, o, r, n, i), this._pointerSize && !o.target) {
      for (var s = [], u = this._pointerSize, l = u / 2, f = new et(r - l, n - l, u, u), h = a.length - 1; h >= 0; h--) {
        var v = a[h];
        v !== i && !v.ignore && !v.ignoreCoarsePointer && (!v.parent || !v.parent.ignoreCoarsePointer) && (Jo.copy(v.getBoundingRect()), v.transform && Jo.applyTransform(v.transform), Jo.intersect(f) && s.push(v));
      }
      if (s.length)
        for (var c = 4, d = Math.PI / 12, y = Math.PI * 2, p = 0; p < l; p += c)
          for (var g = 0; g < y; g += d) {
            var _ = r + p * Math.cos(g), m = n + p * Math.sin(g);
            if (Mf(s, o, _, m, i), o.target)
              return o;
          }
    }
    return o;
  }, t.prototype.processGesture = function(r, n) {
    this._gestureMgr || (this._gestureMgr = new P0());
    var i = this._gestureMgr;
    n === "start" && i.clear();
    var a = i.recognize(r, this.findHover(r.zrX, r.zrY, null).target, this.proxy.dom);
    if (n === "end" && i.clear(), a) {
      var o = a.type;
      r.gestureEvent = o;
      var s = new zn();
      s.target = a.target, this.dispatchToElement(s, o, a.event);
    }
  }, t;
}(Ge);
D(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function(e) {
  td.prototype[e] = function(t) {
    var r = t.zrX, n = t.zrY, i = ed(this, r, n), a, o;
    if ((e !== "mouseup" || !i) && (a = this.findHover(r, n), o = a.target), e === "mousedown")
      this._downEl = o, this._downPoint = [t.zrX, t.zrY], this._upEl = o;
    else if (e === "mouseup")
      this._upEl = o;
    else if (e === "click") {
      if (this._downEl !== this._upEl || !this._downPoint || $v(this._downPoint, [t.zrX, t.zrY]) > 4)
        return;
      this._downPoint = null;
    }
    this.dispatchToElement(a, e, t);
  };
});
function B0(e, t, r) {
  if (e[e.rectHover ? "rectContain" : "contain"](t, r)) {
    for (var n = e, i = void 0, a = !1; n; ) {
      if (n.ignoreClip && (a = !0), !a) {
        var o = n.getClipPath();
        if (o && !o.contain(t, r))
          return !1;
      }
      n.silent && (i = !0);
      var s = n.__hostTarget;
      n = s || n.parent;
    }
    return i ? Jv : !0;
  }
  return !1;
}
function Mf(e, t, r, n, i) {
  for (var a = e.length - 1; a >= 0; a--) {
    var o = e[a], s = void 0;
    if (o !== i && !o.ignore && (s = B0(o, r, n)) && (!t.topTarget && (t.topTarget = o), s !== Jv)) {
      t.target = o;
      break;
    }
  }
}
function ed(e, t, r) {
  var n = e.painter;
  return t < 0 || t > n.getWidth() || r < 0 || r > n.getHeight();
}
var rd = 32, Hn = 7;
function V0(e) {
  for (var t = 0; e >= rd; )
    t |= e & 1, e >>= 1;
  return e + t;
}
function Cf(e, t, r, n) {
  var i = t + 1;
  if (i === r)
    return 1;
  if (n(e[i++], e[t]) < 0) {
    for (; i < r && n(e[i], e[i - 1]) < 0; )
      i++;
    z0(e, t, i);
  } else
    for (; i < r && n(e[i], e[i - 1]) >= 0; )
      i++;
  return i - t;
}
function z0(e, t, r) {
  for (r--; t < r; ) {
    var n = e[t];
    e[t++] = e[r], e[r--] = n;
  }
}
function Ef(e, t, r, n, i) {
  for (n === t && n++; n < r; n++) {
    for (var a = e[n], o = t, s = n, u; o < s; )
      u = o + s >>> 1, i(a, e[u]) < 0 ? s = u : o = u + 1;
    var l = n - o;
    switch (l) {
      case 3:
        e[o + 3] = e[o + 2];
      case 2:
        e[o + 2] = e[o + 1];
      case 1:
        e[o + 1] = e[o];
        break;
      default:
        for (; l > 0; )
          e[o + l] = e[o + l - 1], l--;
    }
    e[o] = a;
  }
}
function ts(e, t, r, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(e, t[r + i]) > 0) {
    for (s = n - i; u < s && a(e, t[r + i + u]) > 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  } else {
    for (s = i + 1; u < s && a(e, t[r + i - u]) <= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(e, t[r + f]) > 0 ? o = f + 1 : u = f;
  }
  return u;
}
function es(e, t, r, n, i, a) {
  var o = 0, s = 0, u = 1;
  if (a(e, t[r + i]) < 0) {
    for (s = i + 1; u < s && a(e, t[r + i - u]) < 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s);
    var l = o;
    o = i - u, u = i - l;
  } else {
    for (s = n - i; u < s && a(e, t[r + i + u]) >= 0; )
      o = u, u = (u << 1) + 1, u <= 0 && (u = s);
    u > s && (u = s), o += i, u += i;
  }
  for (o++; o < u; ) {
    var f = o + (u - o >>> 1);
    a(e, t[r + f]) < 0 ? u = f : o = f + 1;
  }
  return u;
}
function H0(e, t) {
  var r = Hn, n, i, a = 0, o = [];
  n = [], i = [];
  function s(c, d) {
    n[a] = c, i[a] = d, a += 1;
  }
  function u() {
    for (; a > 1; ) {
      var c = a - 2;
      if (c >= 1 && i[c - 1] <= i[c] + i[c + 1] || c >= 2 && i[c - 2] <= i[c] + i[c - 1])
        i[c - 1] < i[c + 1] && c--;
      else if (i[c] > i[c + 1])
        break;
      f(c);
    }
  }
  function l() {
    for (; a > 1; ) {
      var c = a - 2;
      c > 0 && i[c - 1] < i[c + 1] && c--, f(c);
    }
  }
  function f(c) {
    var d = n[c], y = i[c], p = n[c + 1], g = i[c + 1];
    i[c] = y + g, c === a - 3 && (n[c + 1] = n[c + 2], i[c + 1] = i[c + 2]), a--;
    var _ = es(e[p], e, d, y, 0, t);
    d += _, y -= _, y !== 0 && (g = ts(e[d + y - 1], e, p, g, g - 1, t), g !== 0 && (y <= g ? h(d, y, p, g) : v(d, y, p, g)));
  }
  function h(c, d, y, p) {
    var g = 0;
    for (g = 0; g < d; g++)
      o[g] = e[c + g];
    var _ = 0, m = y, S = c;
    if (e[S++] = e[m++], --p === 0) {
      for (g = 0; g < d; g++)
        e[S + g] = o[_ + g];
      return;
    }
    if (d === 1) {
      for (g = 0; g < p; g++)
        e[S + g] = e[m + g];
      e[S + p] = o[_];
      return;
    }
    for (var b = r, w, T, E; ; ) {
      w = 0, T = 0, E = !1;
      do
        if (t(e[m], o[_]) < 0) {
          if (e[S++] = e[m++], T++, w = 0, --p === 0) {
            E = !0;
            break;
          }
        } else if (e[S++] = o[_++], w++, T = 0, --d === 1) {
          E = !0;
          break;
        }
      while ((w | T) < b);
      if (E)
        break;
      do {
        if (w = es(e[m], o, _, d, 0, t), w !== 0) {
          for (g = 0; g < w; g++)
            e[S + g] = o[_ + g];
          if (S += w, _ += w, d -= w, d <= 1) {
            E = !0;
            break;
          }
        }
        if (e[S++] = e[m++], --p === 0) {
          E = !0;
          break;
        }
        if (T = ts(o[_], e, m, p, 0, t), T !== 0) {
          for (g = 0; g < T; g++)
            e[S + g] = e[m + g];
          if (S += T, m += T, p -= T, p === 0) {
            E = !0;
            break;
          }
        }
        if (e[S++] = o[_++], --d === 1) {
          E = !0;
          break;
        }
        b--;
      } while (w >= Hn || T >= Hn);
      if (E)
        break;
      b < 0 && (b = 0), b += 2;
    }
    if (r = b, r < 1 && (r = 1), d === 1) {
      for (g = 0; g < p; g++)
        e[S + g] = e[m + g];
      e[S + p] = o[_];
    } else {
      if (d === 0)
        throw new Error();
      for (g = 0; g < d; g++)
        e[S + g] = o[_ + g];
    }
  }
  function v(c, d, y, p) {
    var g = 0;
    for (g = 0; g < p; g++)
      o[g] = e[y + g];
    var _ = c + d - 1, m = p - 1, S = y + p - 1, b = 0, w = 0;
    if (e[S--] = e[_--], --d === 0) {
      for (b = S - (p - 1), g = 0; g < p; g++)
        e[b + g] = o[g];
      return;
    }
    if (p === 1) {
      for (S -= d, _ -= d, w = S + 1, b = _ + 1, g = d - 1; g >= 0; g--)
        e[w + g] = e[b + g];
      e[S] = o[m];
      return;
    }
    for (var T = r; ; ) {
      var E = 0, M = 0, C = !1;
      do
        if (t(o[m], e[_]) < 0) {
          if (e[S--] = e[_--], E++, M = 0, --d === 0) {
            C = !0;
            break;
          }
        } else if (e[S--] = o[m--], M++, E = 0, --p === 1) {
          C = !0;
          break;
        }
      while ((E | M) < T);
      if (C)
        break;
      do {
        if (E = d - es(o[m], e, c, d, d - 1, t), E !== 0) {
          for (S -= E, _ -= E, d -= E, w = S + 1, b = _ + 1, g = E - 1; g >= 0; g--)
            e[w + g] = e[b + g];
          if (d === 0) {
            C = !0;
            break;
          }
        }
        if (e[S--] = o[m--], --p === 1) {
          C = !0;
          break;
        }
        if (M = p - ts(e[_], o, 0, p, p - 1, t), M !== 0) {
          for (S -= M, m -= M, p -= M, w = S + 1, b = m + 1, g = 0; g < M; g++)
            e[w + g] = o[b + g];
          if (p <= 1) {
            C = !0;
            break;
          }
        }
        if (e[S--] = e[_--], --d === 0) {
          C = !0;
          break;
        }
        T--;
      } while (E >= Hn || M >= Hn);
      if (C)
        break;
      T < 0 && (T = 0), T += 2;
    }
    if (r = T, r < 1 && (r = 1), p === 1) {
      for (S -= d, _ -= d, w = S + 1, b = _ + 1, g = d - 1; g >= 0; g--)
        e[w + g] = e[b + g];
      e[S] = o[m];
    } else {
      if (p === 0)
        throw new Error();
      for (b = S - (p - 1), g = 0; g < p; g++)
        e[b + g] = o[g];
    }
  }
  return {
    mergeRuns: u,
    forceMergeRuns: l,
    pushRun: s
  };
}
function Da(e, t, r, n) {
  r || (r = 0), n || (n = e.length);
  var i = n - r;
  if (!(i < 2)) {
    var a = 0;
    if (i < rd) {
      a = Cf(e, r, n, t), Ef(e, r, n, r + a, t);
      return;
    }
    var o = H0(e, t), s = V0(i);
    do {
      if (a = Cf(e, r, n, t), a < s) {
        var u = i;
        u > s && (u = s), Ef(e, r, r + u, r + a, t), a = u;
      }
      o.pushRun(r, a), o.mergeRuns(), i -= a, r += a;
    } while (i !== 0);
    o.forceMergeRuns();
  }
}
var Fr = 1, Ma = 2, ri = 4, xf = !1;
function rs() {
  xf || (xf = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"));
}
function Of(e, t) {
  return e.zlevel === t.zlevel ? e.z === t.z ? e.z2 - t.z2 : e.z - t.z : e.zlevel - t.zlevel;
}
var G0 = function() {
  function e() {
    this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = Of;
  }
  return e.prototype.traverse = function(t, r) {
    for (var n = 0; n < this._roots.length; n++)
      this._roots[n].traverse(t, r);
  }, e.prototype.getDisplayList = function(t, r) {
    r = r || !1;
    var n = this._displayList;
    return (t || !n.length) && this.updateDisplayList(r), n;
  }, e.prototype.updateDisplayList = function(t) {
    this._displayListLen = 0;
    for (var r = this._roots, n = this._displayList, i = 0, a = r.length; i < a; i++)
      this._updateAndAddDisplayable(r[i], null, t);
    n.length = this._displayListLen, Da(n, Of);
  }, e.prototype._updateAndAddDisplayable = function(t, r, n) {
    if (!(t.ignore && !n)) {
      t.beforeUpdate(), t.update(), t.afterUpdate();
      var i = t.getClipPath();
      if (t.ignoreClip)
        r = null;
      else if (i) {
        r ? r = r.slice() : r = [];
        for (var a = i, o = t; a; )
          a.parent = o, a.updateTransform(), r.push(a), o = a, a = a.getClipPath();
      }
      if (t.childrenRef) {
        for (var s = t.childrenRef(), u = 0; u < s.length; u++) {
          var l = s[u];
          t.__dirty && (l.__dirty |= Fr), this._updateAndAddDisplayable(l, r, n);
        }
        t.__dirty = 0;
      } else {
        var f = t;
        r && r.length ? f.__clipPaths = r : f.__clipPaths && f.__clipPaths.length > 0 && (f.__clipPaths = []), isNaN(f.z) && (rs(), f.z = 0), isNaN(f.z2) && (rs(), f.z2 = 0), isNaN(f.zlevel) && (rs(), f.zlevel = 0), this._displayList[this._displayListLen++] = f;
      }
      var h = t.getDecalElement && t.getDecalElement();
      h && this._updateAndAddDisplayable(h, r, n);
      var v = t.getTextGuideLine();
      v && this._updateAndAddDisplayable(v, r, n);
      var c = t.getTextContent();
      c && this._updateAndAddDisplayable(c, r, n);
    }
  }, e.prototype.addRoot = function(t) {
    t.__zr && t.__zr.storage === this || this._roots.push(t);
  }, e.prototype.delRoot = function(t) {
    if (t instanceof Array) {
      for (var r = 0, n = t.length; r < n; r++)
        this.delRoot(t[r]);
      return;
    }
    var i = ot(this._roots, t);
    i >= 0 && this._roots.splice(i, 1);
  }, e.prototype.delAllRoots = function() {
    this._roots = [], this._displayList = [], this._displayListLen = 0;
  }, e.prototype.getRoots = function() {
    return this._roots;
  }, e.prototype.dispose = function() {
    this._displayList = null, this._roots = null;
  }, e;
}(), du;
du = Z.hasGlobalWindow && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(e) {
  return setTimeout(e, 16);
};
var hi = {
  linear: function(e) {
    return e;
  },
  quadraticIn: function(e) {
    return e * e;
  },
  quadraticOut: function(e) {
    return e * (2 - e);
  },
  quadraticInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1);
  },
  cubicIn: function(e) {
    return e * e * e;
  },
  cubicOut: function(e) {
    return --e * e * e + 1;
  },
  cubicInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2);
  },
  quarticIn: function(e) {
    return e * e * e * e;
  },
  quarticOut: function(e) {
    return 1 - --e * e * e * e;
  },
  quarticInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2);
  },
  quinticIn: function(e) {
    return e * e * e * e * e;
  },
  quinticOut: function(e) {
    return --e * e * e * e * e + 1;
  },
  quinticInOut: function(e) {
    return (e *= 2) < 1 ? 0.5 * e * e * e * e * e : 0.5 * ((e -= 2) * e * e * e * e + 2);
  },
  sinusoidalIn: function(e) {
    return 1 - Math.cos(e * Math.PI / 2);
  },
  sinusoidalOut: function(e) {
    return Math.sin(e * Math.PI / 2);
  },
  sinusoidalInOut: function(e) {
    return 0.5 * (1 - Math.cos(Math.PI * e));
  },
  exponentialIn: function(e) {
    return e === 0 ? 0 : Math.pow(1024, e - 1);
  },
  exponentialOut: function(e) {
    return e === 1 ? 1 : 1 - Math.pow(2, -10 * e);
  },
  exponentialInOut: function(e) {
    return e === 0 ? 0 : e === 1 ? 1 : (e *= 2) < 1 ? 0.5 * Math.pow(1024, e - 1) : 0.5 * (-Math.pow(2, -10 * (e - 1)) + 2);
  },
  circularIn: function(e) {
    return 1 - Math.sqrt(1 - e * e);
  },
  circularOut: function(e) {
    return Math.sqrt(1 - --e * e);
  },
  circularInOut: function(e) {
    return (e *= 2) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  },
  elasticIn: function(e) {
    var t, r = 0.1, n = 0.4;
    return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)));
  },
  elasticOut: function(e) {
    var t, r = 0.1, n = 0.4;
    return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1);
  },
  elasticInOut: function(e) {
    var t, r = 0.1, n = 0.4;
    return e === 0 ? 0 : e === 1 ? 1 : (!r || r < 1 ? (r = 1, t = n / 4) : t = n * Math.asin(1 / r) / (2 * Math.PI), (e *= 2) < 1 ? -0.5 * (r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)) : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * 0.5 + 1);
  },
  backIn: function(e) {
    var t = 1.70158;
    return e * e * ((t + 1) * e - t);
  },
  backOut: function(e) {
    var t = 1.70158;
    return --e * e * ((t + 1) * e + t) + 1;
  },
  backInOut: function(e) {
    var t = 2.5949095;
    return (e *= 2) < 1 ? 0.5 * (e * e * ((t + 1) * e - t)) : 0.5 * ((e -= 2) * e * ((t + 1) * e + t) + 2);
  },
  bounceIn: function(e) {
    return 1 - hi.bounceOut(1 - e);
  },
  bounceOut: function(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  },
  bounceInOut: function(e) {
    return e < 0.5 ? hi.bounceIn(e * 2) * 0.5 : hi.bounceOut(e * 2 - 1) * 0.5 + 0.5;
  }
}, qi = Math.pow, er = Math.sqrt, nd = 1e-8, id = 1e-4, Pf = er(3), Xi = 1 / 3, be = Yr(), Jt = Yr(), _n = Yr();
function Je(e) {
  return e > -1e-8 && e < nd;
}
function ad(e) {
  return e > nd || e < -1e-8;
}
function Et(e, t, r, n, i) {
  var a = 1 - i;
  return a * a * (a * e + 3 * i * t) + i * i * (i * n + 3 * a * r);
}
function Rf(e, t, r, n, i) {
  var a = 1 - i;
  return 3 * (((t - e) * a + 2 * (r - t) * i) * a + (n - r) * i * i);
}
function od(e, t, r, n, i, a) {
  var o = n + 3 * (t - r) - e, s = 3 * (r - t * 2 + e), u = 3 * (t - e), l = e - i, f = s * s - 3 * o * u, h = s * u - 9 * o * l, v = u * u - 3 * s * l, c = 0;
  if (Je(f) && Je(h))
    if (Je(s))
      a[0] = 0;
    else {
      var d = -u / s;
      d >= 0 && d <= 1 && (a[c++] = d);
    }
  else {
    var y = h * h - 4 * f * v;
    if (Je(y)) {
      var p = h / f, d = -s / o + p, g = -p / 2;
      d >= 0 && d <= 1 && (a[c++] = d), g >= 0 && g <= 1 && (a[c++] = g);
    } else if (y > 0) {
      var _ = er(y), m = f * s + 1.5 * o * (-h + _), S = f * s + 1.5 * o * (-h - _);
      m < 0 ? m = -qi(-m, Xi) : m = qi(m, Xi), S < 0 ? S = -qi(-S, Xi) : S = qi(S, Xi);
      var d = (-s - (m + S)) / (3 * o);
      d >= 0 && d <= 1 && (a[c++] = d);
    } else {
      var b = (2 * f * s - 3 * o * h) / (2 * er(f * f * f)), w = Math.acos(b) / 3, T = er(f), E = Math.cos(w), d = (-s - 2 * T * E) / (3 * o), g = (-s + T * (E + Pf * Math.sin(w))) / (3 * o), M = (-s + T * (E - Pf * Math.sin(w))) / (3 * o);
      d >= 0 && d <= 1 && (a[c++] = d), g >= 0 && g <= 1 && (a[c++] = g), M >= 0 && M <= 1 && (a[c++] = M);
    }
  }
  return c;
}
function sd(e, t, r, n, i) {
  var a = 6 * r - 12 * t + 6 * e, o = 9 * t + 3 * n - 3 * e - 9 * r, s = 3 * t - 3 * e, u = 0;
  if (Je(o)) {
    if (ad(a)) {
      var l = -s / a;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = a * a - 4 * o * s;
    if (Je(f))
      i[0] = -a / (2 * o);
    else if (f > 0) {
      var h = er(f), l = (-a + h) / (2 * o), v = (-a - h) / (2 * o);
      l >= 0 && l <= 1 && (i[u++] = l), v >= 0 && v <= 1 && (i[u++] = v);
    }
  }
  return u;
}
function za(e, t, r, n, i, a) {
  var o = (t - e) * i + e, s = (r - t) * i + t, u = (n - r) * i + r, l = (s - o) * i + o, f = (u - s) * i + s, h = (f - l) * i + l;
  a[0] = e, a[1] = o, a[2] = l, a[3] = h, a[4] = h, a[5] = f, a[6] = u, a[7] = n;
}
function U0(e, t, r, n, i, a, o, s, u, l, f) {
  var h, v = 5e-3, c = 1 / 0, d, y, p, g;
  be[0] = u, be[1] = l;
  for (var _ = 0; _ < 1; _ += 0.05)
    Jt[0] = Et(e, r, i, o, _), Jt[1] = Et(t, n, a, s, _), p = Lr(be, Jt), p < c && (h = _, c = p);
  c = 1 / 0;
  for (var m = 0; m < 32 && !(v < id); m++)
    d = h - v, y = h + v, Jt[0] = Et(e, r, i, o, d), Jt[1] = Et(t, n, a, s, d), p = Lr(Jt, be), d >= 0 && p < c ? (h = d, c = p) : (_n[0] = Et(e, r, i, o, y), _n[1] = Et(t, n, a, s, y), g = Lr(_n, be), y <= 1 && g < c ? (h = y, c = g) : v *= 0.5);
  return er(c);
}
function W0(e, t, r, n, i, a, o, s, u) {
  for (var l = e, f = t, h = 0, v = 1 / u, c = 1; c <= u; c++) {
    var d = c * v, y = Et(e, r, i, o, d), p = Et(t, n, a, s, d), g = y - l, _ = p - f;
    h += Math.sqrt(g * g + _ * _), l = y, f = p;
  }
  return h;
}
function Nt(e, t, r, n) {
  var i = 1 - n;
  return i * (i * e + 2 * n * t) + n * n * r;
}
function If(e, t, r, n) {
  return 2 * ((1 - n) * (t - e) + n * (r - t));
}
function Y0(e, t, r, n, i) {
  var a = e - 2 * t + r, o = 2 * (t - e), s = e - n, u = 0;
  if (Je(a)) {
    if (ad(o)) {
      var l = -s / o;
      l >= 0 && l <= 1 && (i[u++] = l);
    }
  } else {
    var f = o * o - 4 * a * s;
    if (Je(f)) {
      var l = -o / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l);
    } else if (f > 0) {
      var h = er(f), l = (-o + h) / (2 * a), v = (-o - h) / (2 * a);
      l >= 0 && l <= 1 && (i[u++] = l), v >= 0 && v <= 1 && (i[u++] = v);
    }
  }
  return u;
}
function ud(e, t, r) {
  var n = e + r - 2 * t;
  return n === 0 ? 0.5 : (e - t) / n;
}
function Ha(e, t, r, n, i) {
  var a = (t - e) * n + e, o = (r - t) * n + t, s = (o - a) * n + a;
  i[0] = e, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = r;
}
function q0(e, t, r, n, i, a, o, s, u) {
  var l, f = 5e-3, h = 1 / 0;
  be[0] = o, be[1] = s;
  for (var v = 0; v < 1; v += 0.05) {
    Jt[0] = Nt(e, r, i, v), Jt[1] = Nt(t, n, a, v);
    var c = Lr(be, Jt);
    c < h && (l = v, h = c);
  }
  h = 1 / 0;
  for (var d = 0; d < 32 && !(f < id); d++) {
    var y = l - f, p = l + f;
    Jt[0] = Nt(e, r, i, y), Jt[1] = Nt(t, n, a, y);
    var c = Lr(Jt, be);
    if (y >= 0 && c < h)
      l = y, h = c;
    else {
      _n[0] = Nt(e, r, i, p), _n[1] = Nt(t, n, a, p);
      var g = Lr(_n, be);
      p <= 1 && g < h ? (l = p, h = g) : f *= 0.5;
    }
  }
  return er(h);
}
function X0(e, t, r, n, i, a, o) {
  for (var s = e, u = t, l = 0, f = 1 / o, h = 1; h <= o; h++) {
    var v = h * f, c = Nt(e, r, i, v), d = Nt(t, n, a, v), y = c - s, p = d - u;
    l += Math.sqrt(y * y + p * p), s = c, u = d;
  }
  return l;
}
var $0 = /cubic-bezier\(([0-9,\.e ]+)\)/;
function ld(e) {
  var t = e && $0.exec(e);
  if (t) {
    var r = t[1].split(","), n = +Te(r[0]), i = +Te(r[1]), a = +Te(r[2]), o = +Te(r[3]);
    if (isNaN(n + i + a + o))
      return;
    var s = [];
    return function(u) {
      return u <= 0 ? 0 : u >= 1 ? 1 : od(0, n, a, 1, u, s) && Et(0, i, o, 1, s[0]);
    };
  }
}
var Z0 = function() {
  function e(t) {
    this._inited = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = t.loop || !1, this.onframe = t.onframe || Ut, this.ondestroy = t.ondestroy || Ut, this.onrestart = t.onrestart || Ut, t.easing && this.setEasing(t.easing);
  }
  return e.prototype.step = function(t, r) {
    if (this._inited || (this._startTime = t + this._delay, this._inited = !0), this._paused) {
      this._pausedTime += r;
      return;
    }
    var n = this._life, i = t - this._startTime - this._pausedTime, a = i / n;
    a < 0 && (a = 0), a = Math.min(a, 1);
    var o = this.easingFunc, s = o ? o(a) : a;
    if (this.onframe(s), a === 1)
      if (this.loop) {
        var u = i % n;
        this._startTime = t - u, this._pausedTime = 0, this.onrestart();
      } else
        return !0;
    return !1;
  }, e.prototype.pause = function() {
    this._paused = !0;
  }, e.prototype.resume = function() {
    this._paused = !1;
  }, e.prototype.setEasing = function(t) {
    this.easing = t, this.easingFunc = X(t) ? t : hi[t] || ld(t);
  }, e;
}(), fd = /* @__PURE__ */ function() {
  function e(t) {
    this.value = t;
  }
  return e;
}(), j0 = function() {
  function e() {
    this._len = 0;
  }
  return e.prototype.insert = function(t) {
    var r = new fd(t);
    return this.insertEntry(r), r;
  }, e.prototype.insertEntry = function(t) {
    this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++;
  }, e.prototype.remove = function(t) {
    var r = t.prev, n = t.next;
    r ? r.next = n : this.head = n, n ? n.prev = r : this.tail = r, t.next = t.prev = null, this._len--;
  }, e.prototype.len = function() {
    return this._len;
  }, e.prototype.clear = function() {
    this.head = this.tail = null, this._len = 0;
  }, e;
}(), Li = function() {
  function e(t) {
    this._list = new j0(), this._maxSize = 10, this._map = {}, this._maxSize = t;
  }
  return e.prototype.put = function(t, r) {
    var n = this._list, i = this._map, a = null;
    if (i[t] == null) {
      var o = n.len(), s = this._lastRemovedEntry;
      if (o >= this._maxSize && o > 0) {
        var u = n.head;
        n.remove(u), delete i[u.key], a = u.value, this._lastRemovedEntry = u;
      }
      s ? s.value = r : s = new fd(r), s.key = t, n.insertEntry(s), i[t] = s;
    }
    return a;
  }, e.prototype.get = function(t) {
    var r = this._map[t], n = this._list;
    if (r != null)
      return r !== n.tail && (n.remove(r), n.insertEntry(r)), r.value;
  }, e.prototype.clear = function() {
    this._list.clear(), this._map = {};
  }, e.prototype.len = function() {
    return this._list.len();
  }, e;
}(), Af = {
  transparent: [0, 0, 0, 0],
  aliceblue: [240, 248, 255, 1],
  antiquewhite: [250, 235, 215, 1],
  aqua: [0, 255, 255, 1],
  aquamarine: [127, 255, 212, 1],
  azure: [240, 255, 255, 1],
  beige: [245, 245, 220, 1],
  bisque: [255, 228, 196, 1],
  black: [0, 0, 0, 1],
  blanchedalmond: [255, 235, 205, 1],
  blue: [0, 0, 255, 1],
  blueviolet: [138, 43, 226, 1],
  brown: [165, 42, 42, 1],
  burlywood: [222, 184, 135, 1],
  cadetblue: [95, 158, 160, 1],
  chartreuse: [127, 255, 0, 1],
  chocolate: [210, 105, 30, 1],
  coral: [255, 127, 80, 1],
  cornflowerblue: [100, 149, 237, 1],
  cornsilk: [255, 248, 220, 1],
  crimson: [220, 20, 60, 1],
  cyan: [0, 255, 255, 1],
  darkblue: [0, 0, 139, 1],
  darkcyan: [0, 139, 139, 1],
  darkgoldenrod: [184, 134, 11, 1],
  darkgray: [169, 169, 169, 1],
  darkgreen: [0, 100, 0, 1],
  darkgrey: [169, 169, 169, 1],
  darkkhaki: [189, 183, 107, 1],
  darkmagenta: [139, 0, 139, 1],
  darkolivegreen: [85, 107, 47, 1],
  darkorange: [255, 140, 0, 1],
  darkorchid: [153, 50, 204, 1],
  darkred: [139, 0, 0, 1],
  darksalmon: [233, 150, 122, 1],
  darkseagreen: [143, 188, 143, 1],
  darkslateblue: [72, 61, 139, 1],
  darkslategray: [47, 79, 79, 1],
  darkslategrey: [47, 79, 79, 1],
  darkturquoise: [0, 206, 209, 1],
  darkviolet: [148, 0, 211, 1],
  deeppink: [255, 20, 147, 1],
  deepskyblue: [0, 191, 255, 1],
  dimgray: [105, 105, 105, 1],
  dimgrey: [105, 105, 105, 1],
  dodgerblue: [30, 144, 255, 1],
  firebrick: [178, 34, 34, 1],
  floralwhite: [255, 250, 240, 1],
  forestgreen: [34, 139, 34, 1],
  fuchsia: [255, 0, 255, 1],
  gainsboro: [220, 220, 220, 1],
  ghostwhite: [248, 248, 255, 1],
  gold: [255, 215, 0, 1],
  goldenrod: [218, 165, 32, 1],
  gray: [128, 128, 128, 1],
  green: [0, 128, 0, 1],
  greenyellow: [173, 255, 47, 1],
  grey: [128, 128, 128, 1],
  honeydew: [240, 255, 240, 1],
  hotpink: [255, 105, 180, 1],
  indianred: [205, 92, 92, 1],
  indigo: [75, 0, 130, 1],
  ivory: [255, 255, 240, 1],
  khaki: [240, 230, 140, 1],
  lavender: [230, 230, 250, 1],
  lavenderblush: [255, 240, 245, 1],
  lawngreen: [124, 252, 0, 1],
  lemonchiffon: [255, 250, 205, 1],
  lightblue: [173, 216, 230, 1],
  lightcoral: [240, 128, 128, 1],
  lightcyan: [224, 255, 255, 1],
  lightgoldenrodyellow: [250, 250, 210, 1],
  lightgray: [211, 211, 211, 1],
  lightgreen: [144, 238, 144, 1],
  lightgrey: [211, 211, 211, 1],
  lightpink: [255, 182, 193, 1],
  lightsalmon: [255, 160, 122, 1],
  lightseagreen: [32, 178, 170, 1],
  lightskyblue: [135, 206, 250, 1],
  lightslategray: [119, 136, 153, 1],
  lightslategrey: [119, 136, 153, 1],
  lightsteelblue: [176, 196, 222, 1],
  lightyellow: [255, 255, 224, 1],
  lime: [0, 255, 0, 1],
  limegreen: [50, 205, 50, 1],
  linen: [250, 240, 230, 1],
  magenta: [255, 0, 255, 1],
  maroon: [128, 0, 0, 1],
  mediumaquamarine: [102, 205, 170, 1],
  mediumblue: [0, 0, 205, 1],
  mediumorchid: [186, 85, 211, 1],
  mediumpurple: [147, 112, 219, 1],
  mediumseagreen: [60, 179, 113, 1],
  mediumslateblue: [123, 104, 238, 1],
  mediumspringgreen: [0, 250, 154, 1],
  mediumturquoise: [72, 209, 204, 1],
  mediumvioletred: [199, 21, 133, 1],
  midnightblue: [25, 25, 112, 1],
  mintcream: [245, 255, 250, 1],
  mistyrose: [255, 228, 225, 1],
  moccasin: [255, 228, 181, 1],
  navajowhite: [255, 222, 173, 1],
  navy: [0, 0, 128, 1],
  oldlace: [253, 245, 230, 1],
  olive: [128, 128, 0, 1],
  olivedrab: [107, 142, 35, 1],
  orange: [255, 165, 0, 1],
  orangered: [255, 69, 0, 1],
  orchid: [218, 112, 214, 1],
  palegoldenrod: [238, 232, 170, 1],
  palegreen: [152, 251, 152, 1],
  paleturquoise: [175, 238, 238, 1],
  palevioletred: [219, 112, 147, 1],
  papayawhip: [255, 239, 213, 1],
  peachpuff: [255, 218, 185, 1],
  peru: [205, 133, 63, 1],
  pink: [255, 192, 203, 1],
  plum: [221, 160, 221, 1],
  powderblue: [176, 224, 230, 1],
  purple: [128, 0, 128, 1],
  red: [255, 0, 0, 1],
  rosybrown: [188, 143, 143, 1],
  royalblue: [65, 105, 225, 1],
  saddlebrown: [139, 69, 19, 1],
  salmon: [250, 128, 114, 1],
  sandybrown: [244, 164, 96, 1],
  seagreen: [46, 139, 87, 1],
  seashell: [255, 245, 238, 1],
  sienna: [160, 82, 45, 1],
  silver: [192, 192, 192, 1],
  skyblue: [135, 206, 235, 1],
  slateblue: [106, 90, 205, 1],
  slategray: [112, 128, 144, 1],
  slategrey: [112, 128, 144, 1],
  snow: [255, 250, 250, 1],
  springgreen: [0, 255, 127, 1],
  steelblue: [70, 130, 180, 1],
  tan: [210, 180, 140, 1],
  teal: [0, 128, 128, 1],
  thistle: [216, 191, 216, 1],
  tomato: [255, 99, 71, 1],
  turquoise: [64, 224, 208, 1],
  violet: [238, 130, 238, 1],
  wheat: [245, 222, 179, 1],
  white: [255, 255, 255, 1],
  whitesmoke: [245, 245, 245, 1],
  yellow: [255, 255, 0, 1],
  yellowgreen: [154, 205, 50, 1]
};
function ce(e) {
  return e = Math.round(e), e < 0 ? 0 : e > 255 ? 255 : e;
}
function K0(e) {
  return e = Math.round(e), e < 0 ? 0 : e > 360 ? 360 : e;
}
function Di(e) {
  return e < 0 ? 0 : e > 1 ? 1 : e;
}
function ns(e) {
  var t = e;
  return t.length && t.charAt(t.length - 1) === "%" ? ce(parseFloat(t) / 100 * 255) : ce(parseInt(t, 10));
}
function Br(e) {
  var t = e;
  return t.length && t.charAt(t.length - 1) === "%" ? Di(parseFloat(t) / 100) : Di(parseFloat(t));
}
function is(e, t, r) {
  return r < 0 ? r += 1 : r > 1 && (r -= 1), r * 6 < 1 ? e + (t - e) * r * 6 : r * 2 < 1 ? t : r * 3 < 2 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function tr(e, t, r) {
  return e + (t - e) * r;
}
function jt(e, t, r, n, i) {
  return e[0] = t, e[1] = r, e[2] = n, e[3] = i, e;
}
function pu(e, t) {
  return e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e;
}
var hd = new Li(20), $i = null;
function Qr(e, t) {
  $i && pu($i, t), $i = hd.put(e, $i || t.slice());
}
function Wt(e, t) {
  if (e) {
    t = t || [];
    var r = hd.get(e);
    if (r)
      return pu(t, r);
    e = e + "";
    var n = e.replace(/ /g, "").toLowerCase();
    if (n in Af)
      return pu(t, Af[n]), Qr(e, t), t;
    var i = n.length;
    if (n.charAt(0) === "#") {
      if (i === 4 || i === 5) {
        var a = parseInt(n.slice(1, 4), 16);
        if (!(a >= 0 && a <= 4095)) {
          jt(t, 0, 0, 0, 1);
          return;
        }
        return jt(t, (a & 3840) >> 4 | (a & 3840) >> 8, a & 240 | (a & 240) >> 4, a & 15 | (a & 15) << 4, i === 5 ? parseInt(n.slice(4), 16) / 15 : 1), Qr(e, t), t;
      } else if (i === 7 || i === 9) {
        var a = parseInt(n.slice(1, 7), 16);
        if (!(a >= 0 && a <= 16777215)) {
          jt(t, 0, 0, 0, 1);
          return;
        }
        return jt(t, (a & 16711680) >> 16, (a & 65280) >> 8, a & 255, i === 9 ? parseInt(n.slice(7), 16) / 255 : 1), Qr(e, t), t;
      }
      return;
    }
    var o = n.indexOf("("), s = n.indexOf(")");
    if (o !== -1 && s + 1 === i) {
      var u = n.substr(0, o), l = n.substr(o + 1, s - (o + 1)).split(","), f = 1;
      switch (u) {
        case "rgba":
          if (l.length !== 4)
            return l.length === 3 ? jt(t, +l[0], +l[1], +l[2], 1) : jt(t, 0, 0, 0, 1);
          f = Br(l.pop());
        case "rgb":
          if (l.length >= 3)
            return jt(t, ns(l[0]), ns(l[1]), ns(l[2]), l.length === 3 ? f : Br(l[3])), Qr(e, t), t;
          jt(t, 0, 0, 0, 1);
          return;
        case "hsla":
          if (l.length !== 4) {
            jt(t, 0, 0, 0, 1);
            return;
          }
          return l[3] = Br(l[3]), gu(l, t), Qr(e, t), t;
        case "hsl":
          if (l.length !== 3) {
            jt(t, 0, 0, 0, 1);
            return;
          }
          return gu(l, t), Qr(e, t), t;
        default:
          return;
      }
    }
    jt(t, 0, 0, 0, 1);
  }
}
function gu(e, t) {
  var r = (parseFloat(e[0]) % 360 + 360) % 360 / 360, n = Br(e[1]), i = Br(e[2]), a = i <= 0.5 ? i * (n + 1) : i + n - i * n, o = i * 2 - a;
  return t = t || [], jt(t, ce(is(o, a, r + 1 / 3) * 255), ce(is(o, a, r) * 255), ce(is(o, a, r - 1 / 3) * 255), 1), e.length === 4 && (t[3] = e[3]), t;
}
function Q0(e) {
  if (e) {
    var t = e[0] / 255, r = e[1] / 255, n = e[2] / 255, i = Math.min(t, r, n), a = Math.max(t, r, n), o = a - i, s = (a + i) / 2, u, l;
    if (o === 0)
      u = 0, l = 0;
    else {
      s < 0.5 ? l = o / (a + i) : l = o / (2 - a - i);
      var f = ((a - t) / 6 + o / 2) / o, h = ((a - r) / 6 + o / 2) / o, v = ((a - n) / 6 + o / 2) / o;
      t === a ? u = v - h : r === a ? u = 1 / 3 + f - v : n === a && (u = 2 / 3 + h - f), u < 0 && (u += 1), u > 1 && (u -= 1);
    }
    var c = [u * 360, l, s];
    return e[3] != null && c.push(e[3]), c;
  }
}
function yu(e, t) {
  var r = Wt(e);
  if (r) {
    for (var n = 0; n < 3; n++)
      t < 0 ? r[n] = r[n] * (1 - t) | 0 : r[n] = (255 - r[n]) * t + r[n] | 0, r[n] > 255 ? r[n] = 255 : r[n] < 0 && (r[n] = 0);
    return qr(r, r.length === 4 ? "rgba" : "rgb");
  }
}
function J0(e) {
  var t = Wt(e);
  if (t)
    return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2]).toString(16).slice(1);
}
function cd(e, t, r) {
  if (!(!(t && t.length) || !(e >= 0 && e <= 1))) {
    r = r || [];
    var n = e * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = t[i], s = t[a], u = n - i;
    return r[0] = ce(tr(o[0], s[0], u)), r[1] = ce(tr(o[1], s[1], u)), r[2] = ce(tr(o[2], s[2], u)), r[3] = Di(tr(o[3], s[3], u)), r;
  }
}
var t_ = cd;
function vd(e, t, r) {
  if (!(!(t && t.length) || !(e >= 0 && e <= 1))) {
    var n = e * (t.length - 1), i = Math.floor(n), a = Math.ceil(n), o = Wt(t[i]), s = Wt(t[a]), u = n - i, l = qr([
      ce(tr(o[0], s[0], u)),
      ce(tr(o[1], s[1], u)),
      ce(tr(o[2], s[2], u)),
      Di(tr(o[3], s[3], u))
    ], "rgba");
    return r ? {
      color: l,
      leftIndex: i,
      rightIndex: a,
      value: n
    } : l;
  }
}
var e_ = vd;
function r_(e, t, r, n) {
  var i = Wt(e);
  if (e)
    return i = Q0(i), t != null && (i[0] = K0(t)), r != null && (i[1] = Br(r)), n != null && (i[2] = Br(n)), qr(gu(i), "rgba");
}
function n_(e, t) {
  var r = Wt(e);
  if (r && t != null)
    return r[3] = Di(t), qr(r, "rgba");
}
function qr(e, t) {
  if (!(!e || !e.length)) {
    var r = e[0] + "," + e[1] + "," + e[2];
    return (t === "rgba" || t === "hsva" || t === "hsla") && (r += "," + e[3]), t + "(" + r + ")";
  }
}
function Mi(e, t) {
  var r = Wt(e);
  return r ? (0.299 * r[0] + 0.587 * r[1] + 0.114 * r[2]) * r[3] / 255 + (1 - r[3]) * t : 0;
}
function i_() {
  return qr([
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255)
  ], "rgb");
}
var Nf = new Li(100);
function _u(e) {
  if (V(e)) {
    var t = Nf.get(e);
    return t || (t = yu(e, -0.1), Nf.put(e, t)), t;
  } else if (fo(e)) {
    var r = A({}, e);
    return r.colorStops = k(e.colorStops, function(n) {
      return {
        offset: n.offset,
        color: yu(n.color, -0.1)
      };
    }), r;
  }
  return e;
}
const a_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  fastLerp: cd,
  fastMapToColor: t_,
  lerp: vd,
  lift: yu,
  liftColor: _u,
  lum: Mi,
  mapToColor: e_,
  modifyAlpha: n_,
  modifyHSL: r_,
  parse: Wt,
  random: i_,
  stringify: qr,
  toHex: J0
}, Symbol.toStringTag, { value: "Module" }));
var Ga = Math.round;
function xM(e) {
  var t;
  if (!e || e === "transparent")
    e = "none";
  else if (typeof e == "string" && e.indexOf("rgba") > -1) {
    var r = Wt(e);
    r && (e = "rgb(" + r[0] + "," + r[1] + "," + r[2] + ")", t = r[3]);
  }
  return {
    color: e,
    opacity: t ?? 1
  };
}
var o_ = 1e-4;
function OM(e) {
  return e < o_ && e > -1e-4;
}
function Zi(e) {
  return Ga(e * 1e3) / 1e3;
}
function Lf(e) {
  return Ga(e * 1e4) / 1e4;
}
function PM(e) {
  return "matrix(" + Zi(e[0]) + "," + Zi(e[1]) + "," + Zi(e[2]) + "," + Zi(e[3]) + "," + Lf(e[4]) + "," + Lf(e[5]) + ")";
}
var RM = {
  left: "start",
  right: "end",
  center: "middle",
  middle: "middle"
};
function IM(e, t, r) {
  return r === "top" ? e += t / 2 : r === "bottom" && (e -= t / 2), e;
}
function AM(e) {
  return e && (e.shadowBlur || e.shadowOffsetX || e.shadowOffsetY);
}
function NM(e) {
  var t = e.style, r = e.getGlobalScale();
  return [
    t.shadowColor,
    (t.shadowBlur || 0).toFixed(2),
    (t.shadowOffsetX || 0).toFixed(2),
    (t.shadowOffsetY || 0).toFixed(2),
    r[0],
    r[1]
  ].join(",");
}
function s_(e) {
  return e && !!e.image;
}
function u_(e) {
  return e && !!e.svgElement;
}
function LM(e) {
  return s_(e) || u_(e);
}
function l_(e) {
  return e.type === "linear";
}
function f_(e) {
  return e.type === "radial";
}
function kM(e) {
  return e && (e.type === "linear" || e.type === "radial");
}
function FM(e) {
  return "url(#" + e + ")";
}
function BM(e) {
  var t = e.getGlobalScale(), r = Math.max(t[0], t[1]);
  return Math.max(Math.ceil(Math.log(r) / Math.log(10)), 1);
}
function VM(e) {
  var t = e.x || 0, r = e.y || 0, n = (e.rotation || 0) * fi, i = q(e.scaleX, 1), a = q(e.scaleY, 1), o = e.skewX || 0, s = e.skewY || 0, u = [];
  return (t || r) && u.push("translate(" + t + "px," + r + "px)"), n && u.push("rotate(" + n + ")"), (i !== 1 || a !== 1) && u.push("scale(" + i + "," + a + ")"), (o || s) && u.push("skew(" + Ga(o * fi) + "deg, " + Ga(s * fi) + "deg)"), u.join(" ");
}
var zM = function() {
  return Z.hasGlobalWindow && X(window.btoa) ? function(e) {
    return window.btoa(unescape(encodeURIComponent(e)));
  } : typeof Buffer < "u" ? function(e) {
    return Buffer.from(e).toString("base64");
  } : function(e) {
    return process.env.NODE_ENV !== "production" && wi("Base64 isn't natively supported in the current environment."), null;
  };
}(), mu = Array.prototype.slice;
function Fe(e, t, r) {
  return (t - e) * r + e;
}
function as(e, t, r, n) {
  for (var i = t.length, a = 0; a < i; a++)
    e[a] = Fe(t[a], r[a], n);
  return e;
}
function h_(e, t, r, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    e[o] || (e[o] = []);
    for (var s = 0; s < a; s++)
      e[o][s] = Fe(t[o][s], r[o][s], n);
  }
  return e;
}
function ji(e, t, r, n) {
  for (var i = t.length, a = 0; a < i; a++)
    e[a] = t[a] + r[a] * n;
  return e;
}
function kf(e, t, r, n) {
  for (var i = t.length, a = i && t[0].length, o = 0; o < i; o++) {
    e[o] || (e[o] = []);
    for (var s = 0; s < a; s++)
      e[o][s] = t[o][s] + r[o][s] * n;
  }
  return e;
}
function c_(e, t) {
  for (var r = e.length, n = t.length, i = r > n ? t : e, a = Math.min(r, n), o = i[a - 1] || { color: [0, 0, 0, 0], offset: 0 }, s = a; s < Math.max(r, n); s++)
    i.push({
      offset: o.offset,
      color: o.color.slice()
    });
}
function v_(e, t, r) {
  var n = e, i = t;
  if (!(!n.push || !i.push)) {
    var a = n.length, o = i.length;
    if (a !== o) {
      var s = a > o;
      if (s)
        n.length = o;
      else
        for (var u = a; u < o; u++)
          n.push(r === 1 ? i[u] : mu.call(i[u]));
    }
    for (var l = n[0] && n[0].length, u = 0; u < n.length; u++)
      if (r === 1)
        isNaN(n[u]) && (n[u] = i[u]);
      else
        for (var f = 0; f < l; f++)
          isNaN(n[u][f]) && (n[u][f] = i[u][f]);
  }
}
function Ca(e) {
  if (Ot(e)) {
    var t = e.length;
    if (Ot(e[0])) {
      for (var r = [], n = 0; n < t; n++)
        r.push(mu.call(e[n]));
      return r;
    }
    return mu.call(e);
  }
  return e;
}
function Ea(e) {
  return e[0] = Math.floor(e[0]) || 0, e[1] = Math.floor(e[1]) || 0, e[2] = Math.floor(e[2]) || 0, e[3] = e[3] == null ? 1 : e[3], "rgba(" + e.join(",") + ")";
}
function d_(e) {
  return Ot(e && e[0]) ? 2 : 1;
}
var Ki = 0, xa = 1, dd = 2, ni = 3, Su = 4, wu = 5, Ff = 6;
function Bf(e) {
  return e === Su || e === wu;
}
function Qi(e) {
  return e === xa || e === dd;
}
var Gn = [0, 0, 0, 0], p_ = function() {
  function e(t) {
    this.keyframes = [], this.discrete = !1, this._invalid = !1, this._needsSort = !1, this._lastFr = 0, this._lastFrP = 0, this.propName = t;
  }
  return e.prototype.isFinished = function() {
    return this._finished;
  }, e.prototype.setFinished = function() {
    this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished();
  }, e.prototype.needsAnimate = function() {
    return this.keyframes.length >= 1;
  }, e.prototype.getAdditiveTrack = function() {
    return this._additiveTrack;
  }, e.prototype.addKeyframe = function(t, r, n) {
    this._needsSort = !0;
    var i = this.keyframes, a = i.length, o = !1, s = Ff, u = r;
    if (Ot(r)) {
      var l = d_(r);
      s = l, (l === 1 && !lt(r[0]) || l === 2 && !lt(r[0][0])) && (o = !0);
    } else if (lt(r) && !Tn(r))
      s = Ki;
    else if (V(r))
      if (!isNaN(+r))
        s = Ki;
      else {
        var f = Wt(r);
        f && (u = f, s = ni);
      }
    else if (fo(r)) {
      var h = A({}, u);
      h.colorStops = k(r.colorStops, function(c) {
        return {
          offset: c.offset,
          color: Wt(c.color)
        };
      }), l_(r) ? s = Su : f_(r) && (s = wu), u = h;
    }
    a === 0 ? this.valType = s : (s !== this.valType || s === Ff) && (o = !0), this.discrete = this.discrete || o;
    var v = {
      time: t,
      value: u,
      rawValue: r,
      percent: 0
    };
    return n && (v.easing = n, v.easingFunc = X(n) ? n : hi[n] || ld(n)), i.push(v), v;
  }, e.prototype.prepare = function(t, r) {
    var n = this.keyframes;
    this._needsSort && n.sort(function(y, p) {
      return y.time - p.time;
    });
    for (var i = this.valType, a = n.length, o = n[a - 1], s = this.discrete, u = Qi(i), l = Bf(i), f = 0; f < a; f++) {
      var h = n[f], v = h.value, c = o.value;
      h.percent = h.time / t, s || (u && f !== a - 1 ? v_(v, c, i) : l && c_(v.colorStops, c.colorStops));
    }
    if (!s && i !== wu && r && this.needsAnimate() && r.needsAnimate() && i === r.valType && !r._finished) {
      this._additiveTrack = r;
      for (var d = n[0].value, f = 0; f < a; f++)
        i === Ki ? n[f].additiveValue = n[f].value - d : i === ni ? n[f].additiveValue = ji([], n[f].value, d, -1) : Qi(i) && (n[f].additiveValue = i === xa ? ji([], n[f].value, d, -1) : kf([], n[f].value, d, -1));
    }
  }, e.prototype.step = function(t, r) {
    if (!this._finished) {
      this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
      var n = this._additiveTrack != null, i = n ? "additiveValue" : "value", a = this.valType, o = this.keyframes, s = o.length, u = this.propName, l = a === ni, f, h = this._lastFr, v = Math.min, c, d;
      if (s === 1)
        c = d = o[0];
      else {
        if (r < 0)
          f = 0;
        else if (r < this._lastFrP) {
          var y = v(h + 1, s - 1);
          for (f = y; f >= 0 && !(o[f].percent <= r); f--)
            ;
          f = v(f, s - 2);
        } else {
          for (f = h; f < s && !(o[f].percent > r); f++)
            ;
          f = v(f - 1, s - 2);
        }
        d = o[f + 1], c = o[f];
      }
      if (c && d) {
        this._lastFr = f, this._lastFrP = r;
        var p = d.percent - c.percent, g = p === 0 ? 1 : v((r - c.percent) / p, 1);
        d.easingFunc && (g = d.easingFunc(g));
        var _ = n ? this._additiveValue : l ? Gn : t[u];
        if ((Qi(a) || l) && !_ && (_ = this._additiveValue = []), this.discrete)
          t[u] = g < 1 ? c.rawValue : d.rawValue;
        else if (Qi(a))
          a === xa ? as(_, c[i], d[i], g) : h_(_, c[i], d[i], g);
        else if (Bf(a)) {
          var m = c[i], S = d[i], b = a === Su;
          t[u] = {
            type: b ? "linear" : "radial",
            x: Fe(m.x, S.x, g),
            y: Fe(m.y, S.y, g),
            colorStops: k(m.colorStops, function(T, E) {
              var M = S.colorStops[E];
              return {
                offset: Fe(T.offset, M.offset, g),
                color: Ea(as([], T.color, M.color, g))
              };
            }),
            global: S.global
          }, b ? (t[u].x2 = Fe(m.x2, S.x2, g), t[u].y2 = Fe(m.y2, S.y2, g)) : t[u].r = Fe(m.r, S.r, g);
        } else if (l)
          as(_, c[i], d[i], g), n || (t[u] = Ea(_));
        else {
          var w = Fe(c[i], d[i], g);
          n ? this._additiveValue = w : t[u] = w;
        }
        n && this._addToTarget(t);
      }
    }
  }, e.prototype._addToTarget = function(t) {
    var r = this.valType, n = this.propName, i = this._additiveValue;
    r === Ki ? t[n] = t[n] + i : r === ni ? (Wt(t[n], Gn), ji(Gn, Gn, i, 1), t[n] = Ea(Gn)) : r === xa ? ji(t[n], t[n], i, 1) : r === dd && kf(t[n], t[n], i, 1);
  }, e;
}(), vl = function() {
  function e(t, r, n, i) {
    if (this._tracks = {}, this._trackKeys = [], this._maxTime = 0, this._started = 0, this._clip = null, this._target = t, this._loop = r, r && i) {
      wi("Can' use additive animation on looped animation.");
      return;
    }
    this._additiveAnimators = i, this._allowDiscrete = n;
  }
  return e.prototype.getMaxTime = function() {
    return this._maxTime;
  }, e.prototype.getDelay = function() {
    return this._delay;
  }, e.prototype.getLoop = function() {
    return this._loop;
  }, e.prototype.getTarget = function() {
    return this._target;
  }, e.prototype.changeTarget = function(t) {
    this._target = t;
  }, e.prototype.when = function(t, r, n) {
    return this.whenWithKeys(t, r, at(r), n);
  }, e.prototype.whenWithKeys = function(t, r, n, i) {
    for (var a = this._tracks, o = 0; o < n.length; o++) {
      var s = n[o], u = a[s];
      if (!u) {
        u = a[s] = new p_(s);
        var l = void 0, f = this._getAdditiveTrack(s);
        if (f) {
          var h = f.keyframes, v = h[h.length - 1];
          l = v && v.value, f.valType === ni && l && (l = Ea(l));
        } else
          l = this._target[s];
        if (l == null)
          continue;
        t > 0 && u.addKeyframe(0, Ca(l), i), this._trackKeys.push(s);
      }
      u.addKeyframe(t, Ca(r[s]), i);
    }
    return this._maxTime = Math.max(this._maxTime, t), this;
  }, e.prototype.pause = function() {
    this._clip.pause(), this._paused = !0;
  }, e.prototype.resume = function() {
    this._clip.resume(), this._paused = !1;
  }, e.prototype.isPaused = function() {
    return !!this._paused;
  }, e.prototype.duration = function(t) {
    return this._maxTime = t, this._force = !0, this;
  }, e.prototype._doneCallback = function() {
    this._setTracksFinished(), this._clip = null;
    var t = this._doneCbs;
    if (t)
      for (var r = t.length, n = 0; n < r; n++)
        t[n].call(this);
  }, e.prototype._abortedCallback = function() {
    this._setTracksFinished();
    var t = this.animation, r = this._abortedCbs;
    if (t && t.removeClip(this._clip), this._clip = null, r)
      for (var n = 0; n < r.length; n++)
        r[n].call(this);
  }, e.prototype._setTracksFinished = function() {
    for (var t = this._tracks, r = this._trackKeys, n = 0; n < r.length; n++)
      t[r[n]].setFinished();
  }, e.prototype._getAdditiveTrack = function(t) {
    var r, n = this._additiveAnimators;
    if (n)
      for (var i = 0; i < n.length; i++) {
        var a = n[i].getTrack(t);
        a && (r = a);
      }
    return r;
  }, e.prototype.start = function(t) {
    if (!(this._started > 0)) {
      this._started = 1;
      for (var r = this, n = [], i = this._maxTime || 0, a = 0; a < this._trackKeys.length; a++) {
        var o = this._trackKeys[a], s = this._tracks[o], u = this._getAdditiveTrack(o), l = s.keyframes, f = l.length;
        if (s.prepare(i, u), s.needsAnimate())
          if (!this._allowDiscrete && s.discrete) {
            var h = l[f - 1];
            h && (r._target[s.propName] = h.rawValue), s.setFinished();
          } else
            n.push(s);
      }
      if (n.length || this._force) {
        var v = new Z0({
          life: i,
          loop: this._loop,
          delay: this._delay || 0,
          onframe: function(c) {
            r._started = 2;
            var d = r._additiveAnimators;
            if (d) {
              for (var y = !1, p = 0; p < d.length; p++)
                if (d[p]._clip) {
                  y = !0;
                  break;
                }
              y || (r._additiveAnimators = null);
            }
            for (var p = 0; p < n.length; p++)
              n[p].step(r._target, c);
            var g = r._onframeCbs;
            if (g)
              for (var p = 0; p < g.length; p++)
                g[p](r._target, c);
          },
          ondestroy: function() {
            r._doneCallback();
          }
        });
        this._clip = v, this.animation && this.animation.addClip(v), t && v.setEasing(t);
      } else
        this._doneCallback();
      return this;
    }
  }, e.prototype.stop = function(t) {
    if (this._clip) {
      var r = this._clip;
      t && r.onframe(1), this._abortedCallback();
    }
  }, e.prototype.delay = function(t) {
    return this._delay = t, this;
  }, e.prototype.during = function(t) {
    return t && (this._onframeCbs || (this._onframeCbs = []), this._onframeCbs.push(t)), this;
  }, e.prototype.done = function(t) {
    return t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)), this;
  }, e.prototype.aborted = function(t) {
    return t && (this._abortedCbs || (this._abortedCbs = []), this._abortedCbs.push(t)), this;
  }, e.prototype.getClip = function() {
    return this._clip;
  }, e.prototype.getTrack = function(t) {
    return this._tracks[t];
  }, e.prototype.getTracks = function() {
    var t = this;
    return k(this._trackKeys, function(r) {
      return t._tracks[r];
    });
  }, e.prototype.stopTracks = function(t, r) {
    if (!t.length || !this._clip)
      return !0;
    for (var n = this._tracks, i = this._trackKeys, a = 0; a < t.length; a++) {
      var o = n[t[a]];
      o && !o.isFinished() && (r ? o.step(this._target, 1) : this._started === 1 && o.step(this._target, 0), o.setFinished());
    }
    for (var s = !0, a = 0; a < i.length; a++)
      if (!n[i[a]].isFinished()) {
        s = !1;
        break;
      }
    return s && this._abortedCallback(), s;
  }, e.prototype.saveTo = function(t, r, n) {
    if (t) {
      r = r || this._trackKeys;
      for (var i = 0; i < r.length; i++) {
        var a = r[i], o = this._tracks[a];
        if (!(!o || o.isFinished())) {
          var s = o.keyframes, u = s[n ? 0 : s.length - 1];
          u && (t[a] = Ca(u.rawValue));
        }
      }
    }
  }, e.prototype.__changeFinalValue = function(t, r) {
    r = r || at(t);
    for (var n = 0; n < r.length; n++) {
      var i = r[n], a = this._tracks[i];
      if (a) {
        var o = a.keyframes;
        if (o.length > 1) {
          var s = o.pop();
          a.addKeyframe(s.time, t[i]), a.prepare(this._maxTime, a.getAdditiveTrack());
        }
      }
    }
  }, e;
}();
function dn() {
  return (/* @__PURE__ */ new Date()).getTime();
}
var g_ = function(e) {
  rt(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, r = r || {}, n.stage = r.stage || {}, n;
  }
  return t.prototype.addClip = function(r) {
    r.animation && this.removeClip(r), this._head ? (this._tail.next = r, r.prev = this._tail, r.next = null, this._tail = r) : this._head = this._tail = r, r.animation = this;
  }, t.prototype.addAnimator = function(r) {
    r.animation = this;
    var n = r.getClip();
    n && this.addClip(n);
  }, t.prototype.removeClip = function(r) {
    if (r.animation) {
      var n = r.prev, i = r.next;
      n ? n.next = i : this._head = i, i ? i.prev = n : this._tail = n, r.next = r.prev = r.animation = null;
    }
  }, t.prototype.removeAnimator = function(r) {
    var n = r.getClip();
    n && this.removeClip(n), r.animation = null;
  }, t.prototype.update = function(r) {
    for (var n = dn() - this._pausedTime, i = n - this._time, a = this._head; a; ) {
      var o = a.next, s = a.step(n, i);
      s && (a.ondestroy(), this.removeClip(a)), a = o;
    }
    this._time = n, r || (this.trigger("frame", i), this.stage.update && this.stage.update());
  }, t.prototype._startLoop = function() {
    var r = this;
    this._running = !0;
    function n() {
      r._running && (du(n), !r._paused && r.update());
    }
    du(n);
  }, t.prototype.start = function() {
    this._running || (this._time = dn(), this._pausedTime = 0, this._startLoop());
  }, t.prototype.stop = function() {
    this._running = !1;
  }, t.prototype.pause = function() {
    this._paused || (this._pauseStart = dn(), this._paused = !0);
  }, t.prototype.resume = function() {
    this._paused && (this._pausedTime += dn() - this._pauseStart, this._paused = !1);
  }, t.prototype.clear = function() {
    for (var r = this._head; r; ) {
      var n = r.next;
      r.prev = r.next = r.animation = null, r = n;
    }
    this._head = this._tail = null;
  }, t.prototype.isFinished = function() {
    return this._head == null;
  }, t.prototype.animate = function(r, n) {
    n = n || {}, this.start();
    var i = new vl(r, n.loop);
    return this.addAnimator(i), i;
  }, t;
}(Ge), y_ = 300, os = Z.domSupported, ss = function() {
  var e = [
    "click",
    "dblclick",
    "mousewheel",
    "wheel",
    "mouseout",
    "mouseup",
    "mousedown",
    "mousemove",
    "contextmenu"
  ], t = [
    "touchstart",
    "touchend",
    "touchmove"
  ], r = {
    pointerdown: 1,
    pointerup: 1,
    pointermove: 1,
    pointerout: 1
  }, n = k(e, function(i) {
    var a = i.replace("mouse", "pointer");
    return r.hasOwnProperty(a) ? a : i;
  });
  return {
    mouse: e,
    touch: t,
    pointer: n
  };
}(), Vf = {
  mouse: ["mousemove", "mouseup"],
  pointer: ["pointermove", "pointerup"]
}, zf = !1;
function bu(e) {
  var t = e.pointerType;
  return t === "pen" || t === "touch";
}
function __(e) {
  e.touching = !0, e.touchTimer != null && (clearTimeout(e.touchTimer), e.touchTimer = null), e.touchTimer = setTimeout(function() {
    e.touching = !1, e.touchTimer = null;
  }, 700);
}
function us(e) {
  e && (e.zrByTouch = !0);
}
function m_(e, t) {
  return le(e.dom, new S_(e, t), !0);
}
function pd(e, t) {
  for (var r = t, n = !1; r && r.nodeType !== 9 && !(n = r.domBelongToZr || r !== t && r === e.painterRoot); )
    r = r.parentNode;
  return n;
}
var S_ = /* @__PURE__ */ function() {
  function e(t, r) {
    this.stopPropagation = Ut, this.stopImmediatePropagation = Ut, this.preventDefault = Ut, this.type = r.type, this.target = this.currentTarget = t.dom, this.pointerType = r.pointerType, this.clientX = r.clientX, this.clientY = r.clientY;
  }
  return e;
}(), fe = {
  mousedown: function(e) {
    e = le(this.dom, e), this.__mayPointerCapture = [e.zrX, e.zrY], this.trigger("mousedown", e);
  },
  mousemove: function(e) {
    e = le(this.dom, e);
    var t = this.__mayPointerCapture;
    t && (e.zrX !== t[0] || e.zrY !== t[1]) && this.__togglePointerCapture(!0), this.trigger("mousemove", e);
  },
  mouseup: function(e) {
    e = le(this.dom, e), this.__togglePointerCapture(!1), this.trigger("mouseup", e);
  },
  mouseout: function(e) {
    e = le(this.dom, e);
    var t = e.toElement || e.relatedTarget;
    pd(this, t) || (this.__pointerCapturing && (e.zrEventControl = "no_globalout"), this.trigger("mouseout", e));
  },
  wheel: function(e) {
    zf = !0, e = le(this.dom, e), this.trigger("mousewheel", e);
  },
  mousewheel: function(e) {
    zf || (e = le(this.dom, e), this.trigger("mousewheel", e));
  },
  touchstart: function(e) {
    e = le(this.dom, e), us(e), this.__lastTouchMoment = /* @__PURE__ */ new Date(), this.handler.processGesture(e, "start"), fe.mousemove.call(this, e), fe.mousedown.call(this, e);
  },
  touchmove: function(e) {
    e = le(this.dom, e), us(e), this.handler.processGesture(e, "change"), fe.mousemove.call(this, e);
  },
  touchend: function(e) {
    e = le(this.dom, e), us(e), this.handler.processGesture(e, "end"), fe.mouseup.call(this, e), +/* @__PURE__ */ new Date() - +this.__lastTouchMoment < y_ && fe.click.call(this, e);
  },
  pointerdown: function(e) {
    fe.mousedown.call(this, e);
  },
  pointermove: function(e) {
    bu(e) || fe.mousemove.call(this, e);
  },
  pointerup: function(e) {
    fe.mouseup.call(this, e);
  },
  pointerout: function(e) {
    bu(e) || fe.mouseout.call(this, e);
  }
};
D(["click", "dblclick", "contextmenu"], function(e) {
  fe[e] = function(t) {
    t = le(this.dom, t), this.trigger(e, t);
  };
});
var Tu = {
  pointermove: function(e) {
    bu(e) || Tu.mousemove.call(this, e);
  },
  pointerup: function(e) {
    Tu.mouseup.call(this, e);
  },
  mousemove: function(e) {
    this.trigger("mousemove", e);
  },
  mouseup: function(e) {
    var t = this.__pointerCapturing;
    this.__togglePointerCapture(!1), this.trigger("mouseup", e), t && (e.zrEventControl = "only_globalout", this.trigger("mouseout", e));
  }
};
function w_(e, t) {
  var r = t.domHandlers;
  Z.pointerEventsSupported ? D(ss.pointer, function(n) {
    Oa(t, n, function(i) {
      r[n].call(e, i);
    });
  }) : (Z.touchEventsSupported && D(ss.touch, function(n) {
    Oa(t, n, function(i) {
      r[n].call(e, i), __(t);
    });
  }), D(ss.mouse, function(n) {
    Oa(t, n, function(i) {
      i = hl(i), t.touching || r[n].call(e, i);
    });
  }));
}
function b_(e, t) {
  Z.pointerEventsSupported ? D(Vf.pointer, r) : Z.touchEventsSupported || D(Vf.mouse, r);
  function r(n) {
    function i(a) {
      a = hl(a), pd(e, a.target) || (a = m_(e, a), t.domHandlers[n].call(e, a));
    }
    Oa(t, n, i, { capture: !0 });
  }
}
function Oa(e, t, r, n) {
  e.mounted[t] = r, e.listenerOpts[t] = n, E0(e.domTarget, t, r, n);
}
function ls(e) {
  var t = e.mounted;
  for (var r in t)
    t.hasOwnProperty(r) && x0(e.domTarget, r, t[r], e.listenerOpts[r]);
  e.mounted = {};
}
var Hf = /* @__PURE__ */ function() {
  function e(t, r) {
    this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = r;
  }
  return e;
}(), T_ = function(e) {
  rt(t, e);
  function t(r, n) {
    var i = e.call(this) || this;
    return i.__pointerCapturing = !1, i.dom = r, i.painterRoot = n, i._localHandlerScope = new Hf(r, fe), os && (i._globalHandlerScope = new Hf(document, Tu)), w_(i, i._localHandlerScope), i;
  }
  return t.prototype.dispose = function() {
    ls(this._localHandlerScope), os && ls(this._globalHandlerScope);
  }, t.prototype.setCursor = function(r) {
    this.dom.style && (this.dom.style.cursor = r || "default");
  }, t.prototype.__togglePointerCapture = function(r) {
    if (this.__mayPointerCapture = null, os && +this.__pointerCapturing ^ +r) {
      this.__pointerCapturing = r;
      var n = this._globalHandlerScope;
      r ? b_(this, n) : ls(n);
    }
  }, t;
}(Ge), gd = 1;
Z.hasGlobalWindow && (gd = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
var Gf = gd, Du = 0.4, Mu = "#333", Cu = "#ccc", D_ = "#eee", Uf = co, M_ = 5e-5;
function pr(e) {
  return e > M_ || e < -5e-5;
}
var gr = [], Jr = [], fs = kr(), hs = Math.abs, dl = function() {
  function e() {
  }
  return e.prototype.getLocalTransform = function(t) {
    return e.getLocalTransform(this, t);
  }, e.prototype.setPosition = function(t) {
    this.x = t[0], this.y = t[1];
  }, e.prototype.setScale = function(t) {
    this.scaleX = t[0], this.scaleY = t[1];
  }, e.prototype.setSkew = function(t) {
    this.skewX = t[0], this.skewY = t[1];
  }, e.prototype.setOrigin = function(t) {
    this.originX = t[0], this.originY = t[1];
  }, e.prototype.needLocalTransform = function() {
    return pr(this.rotation) || pr(this.x) || pr(this.y) || pr(this.scaleX - 1) || pr(this.scaleY - 1) || pr(this.skewX) || pr(this.skewY);
  }, e.prototype.updateTransform = function() {
    var t = this.parent && this.parent.transform, r = this.needLocalTransform(), n = this.transform;
    if (!(r || t)) {
      n && (Uf(n), this.invTransform = null);
      return;
    }
    n = n || kr(), r ? this.getLocalTransform(n) : Uf(n), t && (r ? yn(n, t, n) : cl(n, t)), this.transform = n, this._resolveGlobalScaleRatio(n);
  }, e.prototype._resolveGlobalScaleRatio = function(t) {
    var r = this.globalScaleRatio;
    if (r != null && r !== 1) {
      this.getGlobalScale(gr);
      var n = gr[0] < 0 ? -1 : 1, i = gr[1] < 0 ? -1 : 1, a = ((gr[0] - n) * r + n) / gr[0] || 0, o = ((gr[1] - i) * r + i) / gr[1] || 0;
      t[0] *= a, t[1] *= a, t[2] *= o, t[3] *= o;
    }
    this.invTransform = this.invTransform || kr(), vo(this.invTransform, t);
  }, e.prototype.getComputedTransform = function() {
    for (var t = this, r = []; t; )
      r.push(t), t = t.parent;
    for (; t = r.pop(); )
      t.updateTransform();
    return this.transform;
  }, e.prototype.setLocalTransform = function(t) {
    if (t) {
      var r = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3], i = Math.atan2(t[1], t[0]), a = Math.PI / 2 + i - Math.atan2(t[3], t[2]);
      n = Math.sqrt(n) * Math.cos(a), r = Math.sqrt(r), this.skewX = a, this.skewY = 0, this.rotation = -i, this.x = +t[4], this.y = +t[5], this.scaleX = r, this.scaleY = n, this.originX = 0, this.originY = 0;
    }
  }, e.prototype.decomposeTransform = function() {
    if (this.transform) {
      var t = this.parent, r = this.transform;
      t && t.transform && (t.invTransform = t.invTransform || kr(), yn(Jr, t.invTransform, r), r = Jr);
      var n = this.originX, i = this.originY;
      (n || i) && (fs[4] = n, fs[5] = i, yn(Jr, r, fs), Jr[4] -= n, Jr[5] -= i, r = Jr), this.setLocalTransform(r);
    }
  }, e.prototype.getGlobalScale = function(t) {
    var r = this.transform;
    return t = t || [], r ? (t[0] = Math.sqrt(r[0] * r[0] + r[1] * r[1]), t[1] = Math.sqrt(r[2] * r[2] + r[3] * r[3]), r[0] < 0 && (t[0] = -t[0]), r[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t);
  }, e.prototype.transformCoordToLocal = function(t, r) {
    var n = [t, r], i = this.invTransform;
    return i && Ve(n, n, i), n;
  }, e.prototype.transformCoordToGlobal = function(t, r) {
    var n = [t, r], i = this.transform;
    return i && Ve(n, n, i), n;
  }, e.prototype.getLineScale = function() {
    var t = this.transform;
    return t && hs(t[0] - 1) > 1e-10 && hs(t[3] - 1) > 1e-10 ? Math.sqrt(hs(t[0] * t[3] - t[2] * t[1])) : 1;
  }, e.prototype.copyTransform = function(t) {
    C_(this, t);
  }, e.getLocalTransform = function(t, r) {
    r = r || [];
    var n = t.originX || 0, i = t.originY || 0, a = t.scaleX, o = t.scaleY, s = t.anchorX, u = t.anchorY, l = t.rotation || 0, f = t.x, h = t.y, v = t.skewX ? Math.tan(t.skewX) : 0, c = t.skewY ? Math.tan(-t.skewY) : 0;
    if (n || i || s || u) {
      var d = n + s, y = i + u;
      r[4] = -d * a - v * y * o, r[5] = -y * o - c * d * a;
    } else
      r[4] = r[5] = 0;
    return r[0] = a, r[3] = o, r[1] = c * a, r[2] = v * o, l && Kv(r, r, l), r[4] += n + f, r[5] += i + h, r;
  }, e.initDefaultProps = function() {
    var t = e.prototype;
    t.scaleX = t.scaleY = t.globalScaleRatio = 1, t.x = t.y = t.originX = t.originY = t.skewX = t.skewY = t.rotation = t.anchorX = t.anchorY = 0;
  }(), e;
}(), Ci = [
  "x",
  "y",
  "originX",
  "originY",
  "anchorX",
  "anchorY",
  "rotation",
  "scaleX",
  "scaleY",
  "skewX",
  "skewY"
];
function C_(e, t) {
  for (var r = 0; r < Ci.length; r++) {
    var n = Ci[r];
    e[n] = t[n];
  }
}
var Wf = {};
function Yt(e, t) {
  t = t || Gr;
  var r = Wf[t];
  r || (r = Wf[t] = new Li(500));
  var n = r.get(e);
  return n == null && (n = rr.measureText(e, t).width, r.put(e, n)), n;
}
function Yf(e, t, r, n) {
  var i = Yt(e, t), a = pl(t), o = ii(0, i, r), s = vn(0, a, n), u = new et(o, s, i, a);
  return u;
}
function yd(e, t, r, n) {
  var i = ((e || "") + "").split(`
`), a = i.length;
  if (a === 1)
    return Yf(i[0], t, r, n);
  for (var o = new et(0, 0, 0, 0), s = 0; s < i.length; s++) {
    var u = Yf(i[s], t, r, n);
    s === 0 ? o.copy(u) : o.union(u);
  }
  return o;
}
function ii(e, t, r) {
  return r === "right" ? e -= t : r === "center" && (e -= t / 2), e;
}
function vn(e, t, r) {
  return r === "middle" ? e -= t / 2 : r === "bottom" && (e -= t), e;
}
function pl(e) {
  return Yt("国", e);
}
function Wr(e, t) {
  return typeof e == "string" ? e.lastIndexOf("%") >= 0 ? parseFloat(e) / 100 * t : parseFloat(e) : e;
}
function _d(e, t, r) {
  var n = t.position || "inside", i = t.distance != null ? t.distance : 5, a = r.height, o = r.width, s = a / 2, u = r.x, l = r.y, f = "left", h = "top";
  if (n instanceof Array)
    u += Wr(n[0], r.width), l += Wr(n[1], r.height), f = null, h = null;
  else
    switch (n) {
      case "left":
        u -= i, l += s, f = "right", h = "middle";
        break;
      case "right":
        u += i + o, l += s, h = "middle";
        break;
      case "top":
        u += o / 2, l -= i, f = "center", h = "bottom";
        break;
      case "bottom":
        u += o / 2, l += a + i, f = "center";
        break;
      case "inside":
        u += o / 2, l += s, f = "center", h = "middle";
        break;
      case "insideLeft":
        u += i, l += s, h = "middle";
        break;
      case "insideRight":
        u += o - i, l += s, f = "right", h = "middle";
        break;
      case "insideTop":
        u += o / 2, l += i, f = "center";
        break;
      case "insideBottom":
        u += o / 2, l += a - i, f = "center", h = "bottom";
        break;
      case "insideTopLeft":
        u += i, l += i;
        break;
      case "insideTopRight":
        u += o - i, l += i, f = "right";
        break;
      case "insideBottomLeft":
        u += i, l += a - i, h = "bottom";
        break;
      case "insideBottomRight":
        u += o - i, l += a - i, f = "right", h = "bottom";
        break;
    }
  return e = e || {}, e.x = u, e.y = l, e.align = f, e.verticalAlign = h, e;
}
var cs = "__zr_normal__", vs = Ci.concat(["ignore"]), E_ = xe(Ci, function(e, t) {
  return e[t] = !0, e;
}, { ignore: !1 }), tn = {}, x_ = new et(0, 0, 0, 0), po = function() {
  function e(t) {
    this.id = ol(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t);
  }
  return e.prototype._init = function(t) {
    this.attr(t);
  }, e.prototype.drift = function(t, r, n) {
    switch (this.draggable) {
      case "horizontal":
        r = 0;
        break;
      case "vertical":
        t = 0;
        break;
    }
    var i = this.transform;
    i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += r, this.decomposeTransform(), this.markRedraw();
  }, e.prototype.beforeUpdate = function() {
  }, e.prototype.afterUpdate = function() {
  }, e.prototype.update = function() {
    this.updateTransform(), this.__dirty && this.updateInnerText();
  }, e.prototype.updateInnerText = function(t) {
    var r = this._textContent;
    if (r && (!r.ignore || t)) {
      this.textConfig || (this.textConfig = {});
      var n = this.textConfig, i = n.local, a = r.innerTransformable, o = void 0, s = void 0, u = !1;
      a.parent = i ? this : null;
      var l = !1;
      if (a.copyTransform(r), n.position != null) {
        var f = x_;
        n.layoutRect ? f.copy(n.layoutRect) : f.copy(this.getBoundingRect()), i || f.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(tn, n, f) : _d(tn, n, f), a.x = tn.x, a.y = tn.y, o = tn.align, s = tn.verticalAlign;
        var h = n.origin;
        if (h && n.rotation != null) {
          var v = void 0, c = void 0;
          h === "center" ? (v = f.width * 0.5, c = f.height * 0.5) : (v = Wr(h[0], f.width), c = Wr(h[1], f.height)), l = !0, a.originX = -a.x + v + (i ? 0 : f.x), a.originY = -a.y + c + (i ? 0 : f.y);
        }
      }
      n.rotation != null && (a.rotation = n.rotation);
      var d = n.offset;
      d && (a.x += d[0], a.y += d[1], l || (a.originX = -d[0], a.originY = -d[1]));
      var y = n.inside == null ? typeof n.position == "string" && n.position.indexOf("inside") >= 0 : n.inside, p = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), g = void 0, _ = void 0, m = void 0;
      y && this.canBeInsideText() ? (g = n.insideFill, _ = n.insideStroke, (g == null || g === "auto") && (g = this.getInsideTextFill()), (_ == null || _ === "auto") && (_ = this.getInsideTextStroke(g), m = !0)) : (g = n.outsideFill, _ = n.outsideStroke, (g == null || g === "auto") && (g = this.getOutsideFill()), (_ == null || _ === "auto") && (_ = this.getOutsideStroke(g), m = !0)), g = g || "#000", (g !== p.fill || _ !== p.stroke || m !== p.autoStroke || o !== p.align || s !== p.verticalAlign) && (u = !0, p.fill = g, p.stroke = _, p.autoStroke = m, p.align = o, p.verticalAlign = s, r.setDefaultTextStyle(p)), r.__dirty |= Fr, u && r.dirtyStyle(!0);
    }
  }, e.prototype.canBeInsideText = function() {
    return !0;
  }, e.prototype.getInsideTextFill = function() {
    return "#fff";
  }, e.prototype.getInsideTextStroke = function(t) {
    return "#000";
  }, e.prototype.getOutsideFill = function() {
    return this.__zr && this.__zr.isDarkMode() ? Cu : Mu;
  }, e.prototype.getOutsideStroke = function(t) {
    var r = this.__zr && this.__zr.getBackgroundColor(), n = typeof r == "string" && Wt(r);
    n || (n = [255, 255, 255, 1]);
    for (var i = n[3], a = this.__zr.isDarkMode(), o = 0; o < 3; o++)
      n[o] = n[o] * i + (a ? 0 : 255) * (1 - i);
    return n[3] = 1, qr(n, "rgba");
  }, e.prototype.traverse = function(t, r) {
  }, e.prototype.attrKV = function(t, r) {
    t === "textConfig" ? this.setTextConfig(r) : t === "textContent" ? this.setTextContent(r) : t === "clipPath" ? this.setClipPath(r) : t === "extra" ? (this.extra = this.extra || {}, A(this.extra, r)) : this[t] = r;
  }, e.prototype.hide = function() {
    this.ignore = !0, this.markRedraw();
  }, e.prototype.show = function() {
    this.ignore = !1, this.markRedraw();
  }, e.prototype.attr = function(t, r) {
    if (typeof t == "string")
      this.attrKV(t, r);
    else if (F(t))
      for (var n = t, i = at(n), a = 0; a < i.length; a++) {
        var o = i[a];
        this.attrKV(o, t[o]);
      }
    return this.markRedraw(), this;
  }, e.prototype.saveCurrentToNormalState = function(t) {
    this._innerSaveToNormal(t);
    for (var r = this._normalState, n = 0; n < this.animators.length; n++) {
      var i = this.animators[n], a = i.__fromStateTransition;
      if (!(i.getLoop() || a && a !== cs)) {
        var o = i.targetName, s = o ? r[o] : r;
        i.saveTo(s);
      }
    }
  }, e.prototype._innerSaveToNormal = function(t) {
    var r = this._normalState;
    r || (r = this._normalState = {}), t.textConfig && !r.textConfig && (r.textConfig = this.textConfig), this._savePrimaryToNormal(t, r, vs);
  }, e.prototype._savePrimaryToNormal = function(t, r, n) {
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      t[a] != null && !(a in r) && (r[a] = this[a]);
    }
  }, e.prototype.hasState = function() {
    return this.currentStates.length > 0;
  }, e.prototype.getState = function(t) {
    return this.states[t];
  }, e.prototype.ensureState = function(t) {
    var r = this.states;
    return r[t] || (r[t] = {}), r[t];
  }, e.prototype.clearStates = function(t) {
    this.useState(cs, !1, t);
  }, e.prototype.useState = function(t, r, n, i) {
    var a = t === cs, o = this.hasState();
    if (!(!o && a)) {
      var s = this.currentStates, u = this.stateTransition;
      if (!(ot(s, t) >= 0 && (r || s.length === 1))) {
        var l;
        if (this.stateProxy && !a && (l = this.stateProxy(t)), l || (l = this.states && this.states[t]), !l && !a) {
          wi("State " + t + " not exists.");
          return;
        }
        a || this.saveCurrentToNormalState(l);
        var f = !!(l && l.hoverLayer || i);
        f && this._toggleHoverLayerFlag(!0), this._applyStateObj(t, l, this._normalState, r, !n && !this.__inHover && u && u.duration > 0, u);
        var h = this._textContent, v = this._textGuide;
        return h && h.useState(t, r, n, f), v && v.useState(t, r, n, f), a ? (this.currentStates = [], this._normalState = {}) : r ? this.currentStates.push(t) : this.currentStates = [t], this._updateAnimationTargets(), this.markRedraw(), !f && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= -2), l;
      }
    }
  }, e.prototype.useStates = function(t, r, n) {
    if (!t.length)
      this.clearStates();
    else {
      var i = [], a = this.currentStates, o = t.length, s = o === a.length;
      if (s) {
        for (var u = 0; u < o; u++)
          if (t[u] !== a[u]) {
            s = !1;
            break;
          }
      }
      if (s)
        return;
      for (var u = 0; u < o; u++) {
        var l = t[u], f = void 0;
        this.stateProxy && (f = this.stateProxy(l, t)), f || (f = this.states[l]), f && i.push(f);
      }
      var h = i[o - 1], v = !!(h && h.hoverLayer || n);
      v && this._toggleHoverLayerFlag(!0);
      var c = this._mergeStates(i), d = this.stateTransition;
      this.saveCurrentToNormalState(c), this._applyStateObj(t.join(","), c, this._normalState, !1, !r && !this.__inHover && d && d.duration > 0, d);
      var y = this._textContent, p = this._textGuide;
      y && y.useStates(t, r, v), p && p.useStates(t, r, v), this._updateAnimationTargets(), this.currentStates = t.slice(), this.markRedraw(), !v && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= -2);
    }
  }, e.prototype.isSilent = function() {
    for (var t = this.silent, r = this.parent; !t && r; ) {
      if (r.silent) {
        t = !0;
        break;
      }
      r = r.parent;
    }
    return t;
  }, e.prototype._updateAnimationTargets = function() {
    for (var t = 0; t < this.animators.length; t++) {
      var r = this.animators[t];
      r.targetName && r.changeTarget(this[r.targetName]);
    }
  }, e.prototype.removeState = function(t) {
    var r = ot(this.currentStates, t);
    if (r >= 0) {
      var n = this.currentStates.slice();
      n.splice(r, 1), this.useStates(n);
    }
  }, e.prototype.replaceState = function(t, r, n) {
    var i = this.currentStates.slice(), a = ot(i, t), o = ot(i, r) >= 0;
    a >= 0 ? o ? i.splice(a, 1) : i[a] = r : n && !o && i.push(r), this.useStates(i);
  }, e.prototype.toggleState = function(t, r) {
    r ? this.useState(t, !0) : this.removeState(t);
  }, e.prototype._mergeStates = function(t) {
    for (var r = {}, n, i = 0; i < t.length; i++) {
      var a = t[i];
      A(r, a), a.textConfig && (n = n || {}, A(n, a.textConfig));
    }
    return n && (r.textConfig = n), r;
  }, e.prototype._applyStateObj = function(t, r, n, i, a, o) {
    var s = !(r && i);
    r && r.textConfig ? (this.textConfig = A({}, i ? this.textConfig : n.textConfig), A(this.textConfig, r.textConfig)) : s && n.textConfig && (this.textConfig = n.textConfig);
    for (var u = {}, l = !1, f = 0; f < vs.length; f++) {
      var h = vs[f], v = a && E_[h];
      r && r[h] != null ? v ? (l = !0, u[h] = r[h]) : this[h] = r[h] : s && n[h] != null && (v ? (l = !0, u[h] = n[h]) : this[h] = n[h]);
    }
    if (!a)
      for (var f = 0; f < this.animators.length; f++) {
        var c = this.animators[f], d = c.targetName;
        c.getLoop() || c.__changeFinalValue(d ? (r || n)[d] : r || n);
      }
    l && this._transitionState(t, u, o);
  }, e.prototype._attachComponent = function(t) {
    if (t.__zr && !t.__hostTarget) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Text element has been added to zrender.");
      return;
    }
    if (t === this) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("Recursive component attachment.");
      return;
    }
    var r = this.__zr;
    r && t.addSelfToZr(r), t.__zr = r, t.__hostTarget = this;
  }, e.prototype._detachComponent = function(t) {
    t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null;
  }, e.prototype.getClipPath = function() {
    return this._clipPath;
  }, e.prototype.setClipPath = function(t) {
    this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw();
  }, e.prototype.removeClipPath = function() {
    var t = this._clipPath;
    t && (this._detachComponent(t), this._clipPath = null, this.markRedraw());
  }, e.prototype.getTextContent = function() {
    return this._textContent;
  }, e.prototype.setTextContent = function(t) {
    var r = this._textContent;
    if (r !== t) {
      if (r && r !== t && this.removeTextContent(), process.env.NODE_ENV !== "production" && t.__zr && !t.__hostTarget)
        throw new Error("Text element has been added to zrender.");
      t.innerTransformable = new dl(), this._attachComponent(t), this._textContent = t, this.markRedraw();
    }
  }, e.prototype.setTextConfig = function(t) {
    this.textConfig || (this.textConfig = {}), A(this.textConfig, t), this.markRedraw();
  }, e.prototype.removeTextConfig = function() {
    this.textConfig = null, this.markRedraw();
  }, e.prototype.removeTextContent = function() {
    var t = this._textContent;
    t && (t.innerTransformable = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw());
  }, e.prototype.getTextGuideLine = function() {
    return this._textGuide;
  }, e.prototype.setTextGuideLine = function(t) {
    this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw();
  }, e.prototype.removeTextGuideLine = function() {
    var t = this._textGuide;
    t && (this._detachComponent(t), this._textGuide = null, this.markRedraw());
  }, e.prototype.markRedraw = function() {
    this.__dirty |= Fr;
    var t = this.__zr;
    t && (this.__inHover ? t.refreshHover() : t.refresh()), this.__hostTarget && this.__hostTarget.markRedraw();
  }, e.prototype.dirty = function() {
    this.markRedraw();
  }, e.prototype._toggleHoverLayerFlag = function(t) {
    this.__inHover = t;
    var r = this._textContent, n = this._textGuide;
    r && (r.__inHover = t), n && (n.__inHover = t);
  }, e.prototype.addSelfToZr = function(t) {
    if (this.__zr !== t) {
      this.__zr = t;
      var r = this.animators;
      if (r)
        for (var n = 0; n < r.length; n++)
          t.animation.addAnimator(r[n]);
      this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t);
    }
  }, e.prototype.removeSelfFromZr = function(t) {
    if (this.__zr) {
      this.__zr = null;
      var r = this.animators;
      if (r)
        for (var n = 0; n < r.length; n++)
          t.animation.removeAnimator(r[n]);
      this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t);
    }
  }, e.prototype.animate = function(t, r, n) {
    var i = t ? this[t] : this;
    if (process.env.NODE_ENV !== "production" && !i) {
      wi('Property "' + t + '" is not existed in element ' + this.id);
      return;
    }
    var a = new vl(i, r, n);
    return t && (a.targetName = t), this.addAnimator(a, t), a;
  }, e.prototype.addAnimator = function(t, r) {
    var n = this.__zr, i = this;
    t.during(function() {
      i.updateDuringAnimation(r);
    }).done(function() {
      var a = i.animators, o = ot(a, t);
      o >= 0 && a.splice(o, 1);
    }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp();
  }, e.prototype.updateDuringAnimation = function(t) {
    this.markRedraw();
  }, e.prototype.stopAnimation = function(t, r) {
    for (var n = this.animators, i = n.length, a = [], o = 0; o < i; o++) {
      var s = n[o];
      !t || t === s.scope ? s.stop(r) : a.push(s);
    }
    return this.animators = a, this;
  }, e.prototype.animateTo = function(t, r, n) {
    ds(this, t, r, n);
  }, e.prototype.animateFrom = function(t, r, n) {
    ds(this, t, r, n, !0);
  }, e.prototype._transitionState = function(t, r, n, i) {
    for (var a = ds(this, r, n, i), o = 0; o < a.length; o++)
      a[o].__fromStateTransition = t;
  }, e.prototype.getBoundingRect = function() {
    return null;
  }, e.prototype.getPaintRect = function() {
    return null;
  }, e.initDefaultProps = function() {
    var t = e.prototype;
    t.type = "element", t.name = "", t.ignore = t.silent = t.isGroup = t.draggable = t.dragging = t.ignoreClip = t.__inHover = !1, t.__dirty = Fr;
    var r = {};
    function n(a, o, s) {
      r[a + o + s] || (console.warn("DEPRECATED: '" + a + "' has been deprecated. use '" + o + "', '" + s + "' instead"), r[a + o + s] = !0);
    }
    function i(a, o, s, u) {
      Object.defineProperty(t, a, {
        get: function() {
          if (process.env.NODE_ENV !== "production" && n(a, s, u), !this[o]) {
            var f = this[o] = [];
            l(this, f);
          }
          return this[o];
        },
        set: function(f) {
          process.env.NODE_ENV !== "production" && n(a, s, u), this[s] = f[0], this[u] = f[1], this[o] = f, l(this, f);
        }
      });
      function l(f, h) {
        Object.defineProperty(h, 0, {
          get: function() {
            return f[s];
          },
          set: function(v) {
            f[s] = v;
          }
        }), Object.defineProperty(h, 1, {
          get: function() {
            return f[u];
          },
          set: function(v) {
            f[u] = v;
          }
        });
      }
    }
    Object.defineProperty && (i("position", "_legacyPos", "x", "y"), i("scale", "_legacyScale", "scaleX", "scaleY"), i("origin", "_legacyOrigin", "originX", "originY"));
  }(), e;
}();
pe(po, Ge);
pe(po, dl);
function ds(e, t, r, n, i) {
  r = r || {};
  var a = [];
  md(e, "", e, t, r, n, a, i);
  var o = a.length, s = !1, u = r.done, l = r.aborted, f = function() {
    s = !0, o--, o <= 0 && (s ? u && u() : l && l());
  }, h = function() {
    o--, o <= 0 && (s ? u && u() : l && l());
  };
  o || u && u(), a.length > 0 && r.during && a[0].during(function(d, y) {
    r.during(y);
  });
  for (var v = 0; v < a.length; v++) {
    var c = a[v];
    f && c.done(f), h && c.aborted(h), r.force && c.duration(r.duration), c.start(r.easing);
  }
  return a;
}
function ps(e, t, r) {
  for (var n = 0; n < r; n++)
    e[n] = t[n];
}
function O_(e) {
  return Ot(e[0]);
}
function P_(e, t, r) {
  if (Ot(t[r]))
    if (Ot(e[r]) || (e[r] = []), bt(t[r])) {
      var n = t[r].length;
      e[r].length !== n && (e[r] = new t[r].constructor(n), ps(e[r], t[r], n));
    } else {
      var i = t[r], a = e[r], o = i.length;
      if (O_(i))
        for (var s = i[0].length, u = 0; u < o; u++)
          a[u] ? ps(a[u], i[u], s) : a[u] = Array.prototype.slice.call(i[u]);
      else
        ps(a, i, o);
      a.length = i.length;
    }
  else
    e[r] = t[r];
}
function R_(e, t) {
  return e === t || Ot(e) && Ot(t) && I_(e, t);
}
function I_(e, t) {
  var r = e.length;
  if (r !== t.length)
    return !1;
  for (var n = 0; n < r; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function md(e, t, r, n, i, a, o, s) {
  for (var u = at(n), l = i.duration, f = i.delay, h = i.additive, v = i.setToFinal, c = !F(a), d = e.animators, y = [], p = 0; p < u.length; p++) {
    var g = u[p], _ = n[g];
    if (_ != null && r[g] != null && (c || a[g]))
      if (F(_) && !Ot(_) && !fo(_)) {
        if (t) {
          s || (r[g] = _, e.updateDuringAnimation(t));
          continue;
        }
        md(e, g, r[g], _, i, a && a[g], o, s);
      } else
        y.push(g);
    else s || (r[g] = _, e.updateDuringAnimation(t), y.push(g));
  }
  var m = y.length;
  if (!h && m)
    for (var S = 0; S < d.length; S++) {
      var b = d[S];
      if (b.targetName === t) {
        var w = b.stopTracks(y);
        if (w) {
          var T = ot(d, b);
          d.splice(T, 1);
        }
      }
    }
  if (i.force || (y = ct(y, function(x) {
    return !R_(n[x], r[x]);
  }), m = y.length), m > 0 || i.force && !o.length) {
    var E = void 0, M = void 0, C = void 0;
    if (s) {
      M = {}, v && (E = {});
      for (var S = 0; S < m; S++) {
        var g = y[S];
        M[g] = r[g], v ? E[g] = n[g] : r[g] = n[g];
      }
    } else if (v) {
      C = {};
      for (var S = 0; S < m; S++) {
        var g = y[S];
        C[g] = Ca(r[g]), P_(r, n, g);
      }
    }
    var b = new vl(r, !1, !1, h ? ct(d, function(O) {
      return O.targetName === t;
    }) : null);
    b.targetName = t, i.scope && (b.scope = i.scope), v && E && b.whenWithKeys(0, E, y), C && b.whenWithKeys(0, C, y), b.whenWithKeys(l ?? 500, s ? M : n, y).delay(f || 0), e.addAnimator(b, t), o.push(b);
  }
}
var Xr = function(e) {
  rt(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.isGroup = !0, n._children = [], n.attr(r), n;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.children = function() {
    return this._children.slice();
  }, t.prototype.childAt = function(r) {
    return this._children[r];
  }, t.prototype.childOfName = function(r) {
    for (var n = this._children, i = 0; i < n.length; i++)
      if (n[i].name === r)
        return n[i];
  }, t.prototype.childCount = function() {
    return this._children.length;
  }, t.prototype.add = function(r) {
    if (r && (r !== this && r.parent !== this && (this._children.push(r), this._doAdd(r)), process.env.NODE_ENV !== "production" && r.__hostTarget))
      throw "This elemenet has been used as an attachment";
    return this;
  }, t.prototype.addBefore = function(r, n) {
    if (r && r !== this && r.parent !== this && n && n.parent === this) {
      var i = this._children, a = i.indexOf(n);
      a >= 0 && (i.splice(a, 0, r), this._doAdd(r));
    }
    return this;
  }, t.prototype.replace = function(r, n) {
    var i = ot(this._children, r);
    return i >= 0 && this.replaceAt(n, i), this;
  }, t.prototype.replaceAt = function(r, n) {
    var i = this._children, a = i[n];
    if (r && r !== this && r.parent !== this && r !== a) {
      i[n] = r, a.parent = null;
      var o = this.__zr;
      o && a.removeSelfFromZr(o), this._doAdd(r);
    }
    return this;
  }, t.prototype._doAdd = function(r) {
    r.parent && r.parent.remove(r), r.parent = this;
    var n = this.__zr;
    n && n !== r.__zr && r.addSelfToZr(n), n && n.refresh();
  }, t.prototype.remove = function(r) {
    var n = this.__zr, i = this._children, a = ot(i, r);
    return a < 0 ? this : (i.splice(a, 1), r.parent = null, n && r.removeSelfFromZr(n), n && n.refresh(), this);
  }, t.prototype.removeAll = function() {
    for (var r = this._children, n = this.__zr, i = 0; i < r.length; i++) {
      var a = r[i];
      n && a.removeSelfFromZr(n), a.parent = null;
    }
    return r.length = 0, this;
  }, t.prototype.eachChild = function(r, n) {
    for (var i = this._children, a = 0; a < i.length; a++) {
      var o = i[a];
      r.call(n, o, a);
    }
    return this;
  }, t.prototype.traverse = function(r, n) {
    for (var i = 0; i < this._children.length; i++) {
      var a = this._children[i], o = r.call(n, a);
      a.isGroup && !o && a.traverse(r, n);
    }
    return this;
  }, t.prototype.addSelfToZr = function(r) {
    e.prototype.addSelfToZr.call(this, r);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.addSelfToZr(r);
    }
  }, t.prototype.removeSelfFromZr = function(r) {
    e.prototype.removeSelfFromZr.call(this, r);
    for (var n = 0; n < this._children.length; n++) {
      var i = this._children[n];
      i.removeSelfFromZr(r);
    }
  }, t.prototype.getBoundingRect = function(r) {
    for (var n = new et(0, 0, 0, 0), i = r || this._children, a = [], o = null, s = 0; s < i.length; s++) {
      var u = i[s];
      if (!(u.ignore || u.invisible)) {
        var l = u.getBoundingRect(), f = u.getLocalTransform(a);
        f ? (et.applyTransform(n, l, f), o = o || n.clone(), o.union(n)) : (o = o || l.clone(), o.union(l));
      }
    }
    return o || n;
  }, t;
}(po);
Xr.prototype.type = "group";
/*!
* ZRender, a high performance 2d drawing library.
*
* Copyright (c) 2013, Baidu Inc.
* All rights reserved.
*
* LICENSE
* https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
*/
var ai = {}, Rr = {};
function A_(e) {
  delete Rr[e];
}
function N_(e) {
  if (!e)
    return !1;
  if (typeof e == "string")
    return Mi(e, 1) < Du;
  if (e.colorStops) {
    for (var t = e.colorStops, r = 0, n = t.length, i = 0; i < n; i++)
      r += Mi(t[i].color, 1);
    return r /= n, r < Du;
  }
  return !1;
}
var L_ = function() {
  function e(t, r, n) {
    var i = this;
    this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = r, this.id = t;
    var a = new G0(), o = n.renderer || "canvas";
    if (ai[o] || (o = at(ai)[0]), process.env.NODE_ENV !== "production" && !ai[o])
      throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
    n.useDirtyRect = n.useDirtyRect == null ? !1 : n.useDirtyRect;
    var s = new ai[o](r, a, n, t), u = n.ssr || s.ssrOnly;
    this.storage = a, this.painter = s;
    var l = !Z.node && !Z.worker && !u ? new T_(s.getViewportRoot(), s.root) : null, f = n.useCoarsePointer, h = f == null || f === "auto" ? Z.touchEventsSupported : !!f, v = 44, c;
    h && (c = q(n.pointerSize, v)), this.handler = new td(a, s, l, s.root, c), this.animation = new g_({
      stage: {
        update: u ? null : function() {
          return i._flush(!0);
        }
      }
    }), u || this.animation.start();
  }
  return e.prototype.add = function(t) {
    this._disposed || !t || (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }, e.prototype.remove = function(t) {
    this._disposed || !t || (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
  }, e.prototype.configLayer = function(t, r) {
    this._disposed || (this.painter.configLayer && this.painter.configLayer(t, r), this.refresh());
  }, e.prototype.setBackgroundColor = function(t) {
    this._disposed || (this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = N_(t));
  }, e.prototype.getBackgroundColor = function() {
    return this._backgroundColor;
  }, e.prototype.setDarkMode = function(t) {
    this._darkMode = t;
  }, e.prototype.isDarkMode = function() {
    return this._darkMode;
  }, e.prototype.refreshImmediately = function(t) {
    this._disposed || (t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1);
  }, e.prototype.refresh = function() {
    this._disposed || (this._needsRefresh = !0, this.animation.start());
  }, e.prototype.flush = function() {
    this._disposed || this._flush(!1);
  }, e.prototype._flush = function(t) {
    var r, n = dn();
    this._needsRefresh && (r = !0, this.refreshImmediately(t)), this._needsRefreshHover && (r = !0, this.refreshHoverImmediately());
    var i = dn();
    r ? (this._stillFrameAccum = 0, this.trigger("rendered", {
      elapsedTime: i - n
    })) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop());
  }, e.prototype.setSleepAfterStill = function(t) {
    this._sleepAfterStill = t;
  }, e.prototype.wakeUp = function() {
    this._disposed || (this.animation.start(), this._stillFrameAccum = 0);
  }, e.prototype.refreshHover = function() {
    this._needsRefreshHover = !0;
  }, e.prototype.refreshHoverImmediately = function() {
    this._disposed || (this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.getType() === "canvas" && this.painter.refreshHover());
  }, e.prototype.resize = function(t) {
    this._disposed || (t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize());
  }, e.prototype.clearAnimation = function() {
    this._disposed || this.animation.clear();
  }, e.prototype.getWidth = function() {
    if (!this._disposed)
      return this.painter.getWidth();
  }, e.prototype.getHeight = function() {
    if (!this._disposed)
      return this.painter.getHeight();
  }, e.prototype.setCursorStyle = function(t) {
    this._disposed || this.handler.setCursorStyle(t);
  }, e.prototype.findHover = function(t, r) {
    if (!this._disposed)
      return this.handler.findHover(t, r);
  }, e.prototype.on = function(t, r, n) {
    return this._disposed || this.handler.on(t, r, n), this;
  }, e.prototype.off = function(t, r) {
    this._disposed || this.handler.off(t, r);
  }, e.prototype.trigger = function(t, r) {
    this._disposed || this.handler.trigger(t, r);
  }, e.prototype.clear = function() {
    if (!this._disposed) {
      for (var t = this.storage.getRoots(), r = 0; r < t.length; r++)
        t[r] instanceof Xr && t[r].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }
  }, e.prototype.dispose = function() {
    this._disposed || (this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, this._disposed = !0, A_(this.id));
  }, e;
}();
function Eu(e, t) {
  var r = new L_(ol(), e, t);
  return Rr[r.id] = r, r;
}
function k_(e) {
  e.dispose();
}
function F_() {
  for (var e in Rr)
    Rr.hasOwnProperty(e) && Rr[e].dispose();
  Rr = {};
}
function B_(e) {
  return Rr[e];
}
function Sd(e, t) {
  ai[e] = t;
}
var xu;
function V_(e) {
  if (typeof xu == "function")
    return xu(e);
}
function wd(e) {
  xu = e;
}
var z_ = "5.6.1";
const H_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  dispose: k_,
  disposeAll: F_,
  getElementSSRData: V_,
  getInstance: B_,
  init: Eu,
  registerPainter: Sd,
  registerSSRDataGetter: wd,
  version: z_
}, Symbol.toStringTag, { value: "Module" }));
var G_ = 1e-4, bd = 20;
function U_(e) {
  return e.replace(/^\s+|\s+$/g, "");
}
function Ou(e, t, r, n) {
  var i = t[0], a = t[1], o = r[0], s = r[1], u = a - i, l = s - o;
  if (u === 0)
    return l === 0 ? o : (o + s) / 2;
  if (n)
    if (u > 0) {
      if (e <= i)
        return o;
      if (e >= a)
        return s;
    } else {
      if (e >= i)
        return o;
      if (e <= a)
        return s;
    }
  else {
    if (e === i)
      return o;
    if (e === a)
      return s;
  }
  return (e - i) / u * l + o;
}
function Ht(e, t) {
  switch (e) {
    case "center":
    case "middle":
      e = "50%";
      break;
    case "left":
    case "top":
      e = "0%";
      break;
    case "right":
    case "bottom":
      e = "100%";
      break;
  }
  return V(e) ? U_(e).match(/%$/) ? parseFloat(e) / 100 * t : parseFloat(e) : e == null ? NaN : +e;
}
function Ft(e, t, r) {
  return t == null && (t = 10), t = Math.min(Math.max(0, t), bd), e = (+e).toFixed(t), r ? e : +e;
}
function W_(e) {
  return e.sort(function(t, r) {
    return t - r;
  }), e;
}
function De(e) {
  if (e = +e, isNaN(e))
    return 0;
  if (e > 1e-14) {
    for (var t = 1, r = 0; r < 15; r++, t *= 10)
      if (Math.round(e * t) / t === e)
        return r;
  }
  return Td(e);
}
function Td(e) {
  var t = e.toString().toLowerCase(), r = t.indexOf("e"), n = r > 0 ? +t.slice(r + 1) : 0, i = r > 0 ? r : t.length, a = t.indexOf("."), o = a < 0 ? 0 : i - 1 - a;
  return Math.max(0, o - n);
}
function Dd(e, t) {
  var r = Math.log, n = Math.LN10, i = Math.floor(r(e[1] - e[0]) / n), a = Math.round(r(Math.abs(t[1] - t[0])) / n), o = Math.min(Math.max(-i + a, 0), 20);
  return isFinite(o) ? o : 20;
}
function Y_(e, t, r) {
  if (!e[t])
    return 0;
  var n = q_(e, r);
  return n[t] || 0;
}
function q_(e, t) {
  var r = xe(e, function(c, d) {
    return c + (isNaN(d) ? 0 : d);
  }, 0);
  if (r === 0)
    return [];
  for (var n = Math.pow(10, t), i = k(e, function(c) {
    return (isNaN(c) ? 0 : c) / r * n * 100;
  }), a = n * 100, o = k(i, function(c) {
    return Math.floor(c);
  }), s = xe(o, function(c, d) {
    return c + d;
  }, 0), u = k(i, function(c, d) {
    return c - o[d];
  }); s < a; ) {
    for (var l = Number.NEGATIVE_INFINITY, f = null, h = 0, v = u.length; h < v; ++h)
      u[h] > l && (l = u[h], f = h);
    ++o[f], u[f] = 0, ++s;
  }
  return k(o, function(c) {
    return c / n;
  });
}
function X_(e, t) {
  var r = Math.max(De(e), De(t)), n = e + t;
  return r > bd ? n : Ft(n, r);
}
var $_ = 9007199254740991;
function Z_(e) {
  var t = Math.PI * 2;
  return (e % t + t) % t;
}
function j_(e) {
  return e > -1e-4 && e < G_;
}
var K_ = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
function ie(e) {
  if (e instanceof Date)
    return e;
  if (V(e)) {
    var t = K_.exec(e);
    if (!t)
      return /* @__PURE__ */ new Date(NaN);
    if (t[8]) {
      var r = +t[4] || 0;
      return t[8].toUpperCase() !== "Z" && (r -= +t[8].slice(0, 3)), new Date(Date.UTC(+t[1], +(t[2] || 1) - 1, +t[3] || 1, r, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0));
    } else
      return new Date(+t[1], +(t[2] || 1) - 1, +t[3] || 1, +t[4] || 0, +(t[5] || 0), +t[6] || 0, t[7] ? +t[7].substring(0, 3) : 0);
  } else if (e == null)
    return /* @__PURE__ */ new Date(NaN);
  return new Date(Math.round(e));
}
function Md(e) {
  return Math.pow(10, ki(e));
}
function ki(e) {
  if (e === 0)
    return 0;
  var t = Math.floor(Math.log(e) / Math.LN10);
  return e / Math.pow(10, t) >= 10 && t++, t;
}
function gl(e, t) {
  var r = ki(e), n = Math.pow(10, r), i = e / n, a;
  return t ? i < 1.5 ? a = 1 : i < 2.5 ? a = 2 : i < 4 ? a = 3 : i < 7 ? a = 5 : a = 10 : i < 1 ? a = 1 : i < 2 ? a = 2 : i < 3 ? a = 3 : i < 5 ? a = 5 : a = 10, e = a * n, r >= -20 ? +e.toFixed(r < 0 ? -r : 0) : e;
}
function Q_(e, t) {
  var r = (e.length - 1) * t + 1, n = Math.floor(r), i = +e[n - 1], a = r - n;
  return a ? i + a * (e[n] - i) : i;
}
function J_(e) {
  e.sort(function(u, l) {
    return s(u, l, 0) ? -1 : 1;
  });
  for (var t = -1 / 0, r = 1, n = 0; n < e.length; ) {
    for (var i = e[n].interval, a = e[n].close, o = 0; o < 2; o++)
      i[o] <= t && (i[o] = t, a[o] = o ? 1 : 1 - r), t = i[o], r = a[o];
    i[0] === i[1] && a[0] * a[1] !== 1 ? e.splice(n, 1) : n++;
  }
  return e;
  function s(u, l, f) {
    return u.interval[f] < l.interval[f] || u.interval[f] === l.interval[f] && (u.close[f] - l.close[f] === (f ? -1 : 1) || !f && s(u, l, 1));
  }
}
function Ei(e) {
  var t = parseFloat(e);
  return t == e && (t !== 0 || !V(e) || e.indexOf("x") <= 0) ? t : NaN;
}
function yl(e) {
  return !isNaN(Ei(e));
}
function Cd() {
  return Math.round(Math.random() * 9);
}
function Ed(e, t) {
  return t === 0 ? e : Ed(t, e % t);
}
function qf(e, t) {
  return e == null ? t : t == null ? e : e * t / Ed(e, t);
}
var tm = "[ECharts] ", Xf = {}, em = typeof console < "u" && console.warn && console.log;
function go(e, t, r) {
  if (em) {
    if (r) {
      if (Xf[t])
        return;
      Xf[t] = !0;
    }
    console[e](tm + t);
  }
}
function rm(e, t) {
  go("log", e, t);
}
function te(e, t) {
  go("warn", e, t);
}
function Tt(e, t) {
  go("error", e, t);
}
function de(e) {
  process.env.NODE_ENV !== "production" && go("warn", "DEPRECATED: " + e, !0);
}
function ft(e, t, r) {
  process.env.NODE_ENV !== "production" && de((r ? "[" + r + "]" : "") + (e + " is deprecated, use " + t + " instead."));
}
function Ua() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var r = "";
  if (process.env.NODE_ENV !== "production") {
    var n = function(i) {
      return i === void 0 ? "undefined" : i === 1 / 0 ? "Infinity" : i === -1 / 0 ? "-Infinity" : Tn(i) ? "NaN" : i instanceof Date ? "Date(" + i.toISOString() + ")" : X(i) ? "function () { ... }" : zv(i) ? i + "" : null;
    };
    r = k(e, function(i) {
      if (V(i))
        return i;
      var a = n(i);
      if (a != null)
        return a;
      if (typeof JSON < "u" && JSON.stringify)
        try {
          return JSON.stringify(i, function(o, s) {
            var u = n(s);
            return u ?? s;
          });
        } catch {
          return "?";
        }
      else
        return "?";
    }).join(" ");
  }
  return r;
}
function Gt(e) {
  throw new Error(e);
}
function $f(e, t, r) {
  return (t - e) * r + e;
}
var xd = "series\0", nm = "\0_ec_\0";
function xt(e) {
  return e instanceof Array ? e : e == null ? [] : [e];
}
function Zf(e, t, r) {
  if (e) {
    e[t] = e[t] || {}, e.emphasis = e.emphasis || {}, e.emphasis[t] = e.emphasis[t] || {};
    for (var n = 0, i = r.length; n < i; n++) {
      var a = r[n];
      !e.emphasis[t].hasOwnProperty(a) && e[t].hasOwnProperty(a) && (e.emphasis[t][a] = e[t][a]);
    }
  }
}
var jf = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"];
function Fi(e) {
  return F(e) && !L(e) && !(e instanceof Date) ? e.value : e;
}
function im(e) {
  return F(e) && !(e instanceof Array);
}
function am(e, t, r) {
  var n = r === "normalMerge", i = r === "replaceMerge", a = r === "replaceAll";
  e = e || [], t = (t || []).slice();
  var o = W();
  D(t, function(u, l) {
    if (!F(u)) {
      t[l] = null;
      return;
    }
    process.env.NODE_ENV !== "production" && (u.id != null && !Qf(u.id) && Kf(u.id), u.name != null && !Qf(u.name) && Kf(u.name));
  });
  var s = om(e, o, r);
  return (n || i) && sm(s, e, o, t), n && um(s, t), n || i ? lm(s, t, i) : a && fm(s, t), hm(s), s;
}
function om(e, t, r) {
  var n = [];
  if (r === "replaceAll")
    return n;
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    a && a.id != null && t.set(a.id, i), n.push({
      existing: r === "replaceMerge" || Dn(a) ? null : a,
      newOption: null,
      keyInfo: null,
      brandNew: null
    });
  }
  return n;
}
function sm(e, t, r, n) {
  D(n, function(i, a) {
    if (!(!i || i.id == null)) {
      var o = ci(i.id), s = r.get(o);
      if (s != null) {
        var u = e[s];
        U(!u.newOption, 'Duplicated option on id "' + o + '".'), u.newOption = i, u.existing = t[s], n[a] = null;
      }
    }
  });
}
function um(e, t) {
  D(t, function(r, n) {
    if (!(!r || r.name == null))
      for (var i = 0; i < e.length; i++) {
        var a = e[i].existing;
        if (!e[i].newOption && a && (a.id == null || r.id == null) && !Dn(r) && !Dn(a) && Od("name", a, r)) {
          e[i].newOption = r, t[n] = null;
          return;
        }
      }
  });
}
function lm(e, t, r) {
  D(t, function(n) {
    if (n) {
      for (
        var i, a = 0;
        // Be `!resultItem` only when `nextIdx >= result.length`.
        (i = e[a]) && (i.newOption || Dn(i.existing) || // In mode "replaceMerge", here no not-mapped-non-internal-existing.
        i.existing && n.id != null && !Od("id", n, i.existing));
      )
        a++;
      i ? (i.newOption = n, i.brandNew = r) : e.push({
        newOption: n,
        brandNew: r,
        existing: null,
        keyInfo: null
      }), a++;
    }
  });
}
function fm(e, t) {
  D(t, function(r) {
    e.push({
      newOption: r,
      brandNew: !0,
      existing: null,
      keyInfo: null
    });
  });
}
function hm(e) {
  var t = W();
  D(e, function(r) {
    var n = r.existing;
    n && t.set(n.id, r);
  }), D(e, function(r) {
    var n = r.newOption;
    U(!n || n.id == null || !t.get(n.id) || t.get(n.id) === r, "id duplicates: " + (n && n.id)), n && n.id != null && t.set(n.id, r), !r.keyInfo && (r.keyInfo = {});
  }), D(e, function(r, n) {
    var i = r.existing, a = r.newOption, o = r.keyInfo;
    if (F(a)) {
      if (o.name = a.name != null ? ci(a.name) : i ? i.name : xd + n, i)
        o.id = ci(i.id);
      else if (a.id != null)
        o.id = ci(a.id);
      else {
        var s = 0;
        do
          o.id = "\0" + o.name + "\0" + s++;
        while (t.get(o.id));
      }
      t.set(o.id, r);
    }
  });
}
function Od(e, t, r) {
  var n = Ce(t[e], null), i = Ce(r[e], null);
  return n != null && i != null && n === i;
}
function ci(e) {
  if (process.env.NODE_ENV !== "production" && e == null)
    throw new Error();
  return Ce(e, "");
}
function Ce(e, t) {
  return e == null ? t : V(e) ? e : lt(e) || bi(e) ? e + "" : t;
}
function Kf(e) {
  process.env.NODE_ENV !== "production" && te("`" + e + "` is invalid id or name. Must be a string or number.");
}
function Qf(e) {
  return bi(e) || yl(e);
}
function Pd(e) {
  var t = e.name;
  return !!(t && t.indexOf(xd));
}
function Dn(e) {
  return e && e.id != null && ci(e.id).indexOf(nm) === 0;
}
function cm(e, t, r) {
  D(e, function(n) {
    var i = n.newOption;
    F(i) && (n.keyInfo.mainType = t, n.keyInfo.subType = vm(t, i, n.existing, r));
  });
}
function vm(e, t, r, n) {
  var i = t.type ? t.type : r ? r.subType : n.determineSubType(e, t);
  return i;
}
function yo(e, t) {
  if (t.dataIndexInside != null)
    return t.dataIndexInside;
  if (t.dataIndex != null)
    return L(t.dataIndex) ? k(t.dataIndex, function(r) {
      return e.indexOfRawIndex(r);
    }) : e.indexOfRawIndex(t.dataIndex);
  if (t.name != null)
    return L(t.name) ? k(t.name, function(r) {
      return e.indexOfName(r);
    }) : e.indexOfName(t.name);
}
function Pt() {
  var e = "__ec_inner_" + dm++;
  return function(t) {
    return t[e] || (t[e] = {});
  };
}
var dm = Cd();
function gs(e, t, r) {
  var n = Rd(t, r), i = n.mainTypeSpecified, a = n.queryOptionMap, o = n.others, s = o, u = r ? r.defaultMainType : null;
  return !i && u && a.set(u, {}), a.each(function(l, f) {
    var h = _o(e, f, l, {
      useDefault: u === f,
      enableAll: r && r.enableAll != null ? r.enableAll : !0,
      enableNone: r && r.enableNone != null ? r.enableNone : !0
    });
    s[f + "Models"] = h.models, s[f + "Model"] = h.models[0];
  }), s;
}
function Rd(e, t) {
  var r;
  if (V(e)) {
    var n = {};
    n[e + "Index"] = 0, r = n;
  } else
    r = e;
  var i = W(), a = {}, o = !1;
  return D(r, function(s, u) {
    if (u === "dataIndex" || u === "dataIndexInside") {
      a[u] = s;
      return;
    }
    var l = u.match(/^(\w+)(Index|Id|Name)$/) || [], f = l[1], h = (l[2] || "").toLowerCase();
    if (!(!f || !h || t && t.includeMainTypes && ot(t.includeMainTypes, f) < 0)) {
      o = o || !!f;
      var v = i.get(f) || i.set(f, {});
      v[h] = s;
    }
  }), {
    mainTypeSpecified: o,
    queryOptionMap: i,
    others: a
  };
}
var Ir = {
  useDefault: !0,
  enableAll: !1,
  enableNone: !1
}, HM = {
  useDefault: !1,
  enableAll: !0,
  enableNone: !0
};
function _o(e, t, r, n) {
  n = n || Ir;
  var i = r.index, a = r.id, o = r.name, s = {
    models: null,
    specified: i != null || a != null || o != null
  };
  if (!s.specified) {
    var u = void 0;
    return s.models = n.useDefault && (u = e.getComponent(t)) ? [u] : [], s;
  }
  return i === "none" || i === !1 ? (U(n.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : (i === "all" && (U(n.enableAll, '`"all"` is not a valid value on index option.'), i = a = o = null), s.models = e.queryComponents({
    mainType: t,
    index: i,
    id: a,
    name: o
  }), s);
}
function Id(e, t, r) {
  e.setAttribute ? e.setAttribute(t, r) : e[t] = r;
}
function pm(e, t) {
  return e.getAttribute ? e.getAttribute(t) : e[t];
}
function GM(e) {
  return e === "auto" ? Z.domSupported ? "html" : "richText" : e || "html";
}
function UM(e, t, r, n, i) {
  var a = t == null || t === "auto";
  if (n == null)
    return n;
  if (lt(n)) {
    var o = $f(r || 0, n, i);
    return Ft(o, a ? Math.max(De(r || 0), De(n)) : t);
  } else {
    if (V(n))
      return i < 1 ? r : n;
    for (var s = [], u = r, l = n, f = Math.max(u ? u.length : 0, l.length), h = 0; h < f; ++h) {
      var v = e.getDimensionInfo(h);
      if (v && v.type === "ordinal")
        s[h] = (i < 1 && u ? u : l)[h];
      else {
        var c = u && u[h] ? u[h] : 0, d = l[h], o = $f(c, d, i);
        s[h] = Ft(o, a ? Math.max(De(c), De(d)) : t);
      }
    }
    return s;
  }
}
var gm = ".", yr = "___EC__COMPONENT__CONTAINER___", Ad = "___EC__EXTENDED_CLASS___";
function Me(e) {
  var t = {
    main: "",
    sub: ""
  };
  if (e) {
    var r = e.split(gm);
    t.main = r[0] || "", t.sub = r[1] || "";
  }
  return t;
}
function ym(e) {
  U(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(e), 'componentType "' + e + '" illegal');
}
function _m(e) {
  return !!(e && e[Ad]);
}
function _l(e, t) {
  e.$constructor = e, e.extend = function(r) {
    process.env.NODE_ENV !== "production" && D(t, function(a) {
      r[a] || console.warn("Method `" + a + "` should be implemented" + (r.type ? " in " + r.type : "") + ".");
    });
    var n = this, i;
    return mm(n) ? i = /** @class */
    function(a) {
      qt(o, a);
      function o() {
        return a.apply(this, arguments) || this;
      }
      return o;
    }(n) : (i = function() {
      (r.$constructor || n).apply(this, arguments);
    }, sl(i, this)), A(i.prototype, r), i[Ad] = !0, i.extend = this.extend, i.superCall = bm, i.superApply = Tm, i.superClass = n, i;
  };
}
function mm(e) {
  return X(e) && /^class\s/.test(Function.prototype.toString.call(e));
}
function Nd(e, t) {
  e.extend = t.extend;
}
var Sm = Math.round(Math.random() * 10);
function wm(e) {
  var t = ["__\0is_clz", Sm++].join("_");
  e.prototype[t] = !0, process.env.NODE_ENV !== "production" && U(!e.isInstance, 'The method "is" can not be defined.'), e.isInstance = function(r) {
    return !!(r && r[t]);
  };
}
function bm(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  return this.superClass.prototype[t].apply(e, r);
}
function Tm(e, t, r) {
  return this.superClass.prototype[t].apply(e, r);
}
function mo(e) {
  var t = {};
  e.registerClass = function(n) {
    var i = n.type || n.prototype.type;
    if (i) {
      ym(i), n.prototype.type = i;
      var a = Me(i);
      if (!a.sub)
        process.env.NODE_ENV !== "production" && t[a.main] && console.warn(a.main + " exists."), t[a.main] = n;
      else if (a.sub !== yr) {
        var o = r(a);
        o[a.sub] = n;
      }
    }
    return n;
  }, e.getClass = function(n, i, a) {
    var o = t[n];
    if (o && o[yr] && (o = i ? o[i] : null), a && !o)
      throw new Error(i ? "Component " + n + "." + (i || "") + " is used but not imported." : n + ".type should be specified.");
    return o;
  }, e.getClassesByMainType = function(n) {
    var i = Me(n), a = [], o = t[i.main];
    return o && o[yr] ? D(o, function(s, u) {
      u !== yr && a.push(s);
    }) : a.push(o), a;
  }, e.hasClass = function(n) {
    var i = Me(n);
    return !!t[i.main];
  }, e.getAllClassMainTypes = function() {
    var n = [];
    return D(t, function(i, a) {
      n.push(a);
    }), n;
  }, e.hasSubTypes = function(n) {
    var i = Me(n), a = t[i.main];
    return a && a[yr];
  };
  function r(n) {
    var i = t[n.main];
    return (!i || !i[yr]) && (i = t[n.main] = {}, i[yr] = !0), i;
  }
}
function xi(e, t) {
  for (var r = 0; r < e.length; r++)
    e[r][1] || (e[r][1] = e[r][0]);
  return t = t || !1, function(n, i, a) {
    for (var o = {}, s = 0; s < e.length; s++) {
      var u = e[s][1];
      if (!(i && ot(i, u) >= 0 || a && ot(a, u) < 0)) {
        var l = n.getShallow(u, t);
        l != null && (o[e[s][0]] = l);
      }
    }
    return o;
  };
}
var Dm = [
  ["fill", "color"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["opacity"],
  ["shadowColor"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], Mm = xi(Dm), Cm = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getAreaStyle = function(t, r) {
      return Mm(this, t, r);
    }, e;
  }()
), Pu = new Li(50);
function Em(e) {
  if (typeof e == "string") {
    var t = Pu.get(e);
    return t && t.image;
  } else
    return e;
}
function Ld(e, t, r, n, i) {
  if (e)
    if (typeof e == "string") {
      if (t && t.__zrImageSrc === e || !r)
        return t;
      var a = Pu.get(e), o = { hostEl: r, cb: n, cbPayload: i };
      return a ? (t = a.image, !So(t) && a.pending.push(o)) : (t = rr.loadImage(e, Jf, Jf), t.__zrImageSrc = e, Pu.put(e, t.__cachedImgObj = {
        image: t,
        pending: [o]
      })), t;
    } else
      return e;
  else return t;
}
function Jf() {
  var e = this.__cachedImgObj;
  this.onload = this.onerror = this.__cachedImgObj = null;
  for (var t = 0; t < e.pending.length; t++) {
    var r = e.pending[t], n = r.cb;
    n && n(this, r.cbPayload), r.hostEl.dirty();
  }
  e.pending.length = 0;
}
function So(e) {
  return e && e.width && e.height;
}
var ys = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
function xm(e, t, r, n, i) {
  var a = {};
  return kd(a, e, t, r, n, i), a.text;
}
function kd(e, t, r, n, i, a) {
  if (!r) {
    e.text = "", e.isTruncated = !1;
    return;
  }
  var o = (t + "").split(`
`);
  a = Fd(r, n, i, a);
  for (var s = !1, u = {}, l = 0, f = o.length; l < f; l++)
    Bd(u, o[l], a), o[l] = u.textLine, s = s || u.isTruncated;
  e.text = o.join(`
`), e.isTruncated = s;
}
function Fd(e, t, r, n) {
  n = n || {};
  var i = A({}, n);
  i.font = t, r = q(r, "..."), i.maxIterations = q(n.maxIterations, 2);
  var a = i.minChar = q(n.minChar, 0);
  i.cnCharWidth = Yt("国", t);
  var o = i.ascCharWidth = Yt("a", t);
  i.placeholder = q(n.placeholder, "");
  for (var s = e = Math.max(0, e - 1), u = 0; u < a && s >= o; u++)
    s -= o;
  var l = Yt(r, t);
  return l > s && (r = "", l = 0), s = e - l, i.ellipsis = r, i.ellipsisWidth = l, i.contentWidth = s, i.containerWidth = e, i;
}
function Bd(e, t, r) {
  var n = r.containerWidth, i = r.font, a = r.contentWidth;
  if (!n) {
    e.textLine = "", e.isTruncated = !1;
    return;
  }
  var o = Yt(t, i);
  if (o <= n) {
    e.textLine = t, e.isTruncated = !1;
    return;
  }
  for (var s = 0; ; s++) {
    if (o <= a || s >= r.maxIterations) {
      t += r.ellipsis;
      break;
    }
    var u = s === 0 ? Om(t, a, r.ascCharWidth, r.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
    t = t.substr(0, u), o = Yt(t, i);
  }
  t === "" && (t = r.placeholder), e.textLine = t, e.isTruncated = !0;
}
function Om(e, t, r, n) {
  for (var i = 0, a = 0, o = e.length; a < o && i < t; a++) {
    var s = e.charCodeAt(a);
    i += 0 <= s && s <= 127 ? r : n;
  }
  return a;
}
function Pm(e, t) {
  e != null && (e += "");
  var r = t.overflow, n = t.padding, i = t.font, a = r === "truncate", o = pl(i), s = q(t.lineHeight, o), u = !!t.backgroundColor, l = t.lineOverflow === "truncate", f = !1, h = t.width, v;
  h != null && (r === "break" || r === "breakAll") ? v = e ? Vd(e, t.font, h, r === "breakAll", 0).lines : [] : v = e ? e.split(`
`) : [];
  var c = v.length * s, d = q(t.height, c);
  if (c > d && l) {
    var y = Math.floor(d / s);
    f = f || v.length > y, v = v.slice(0, y);
  }
  if (e && a && h != null)
    for (var p = Fd(h, i, t.ellipsis, {
      minChar: t.truncateMinChar,
      placeholder: t.placeholder
    }), g = {}, _ = 0; _ < v.length; _++)
      Bd(g, v[_], p), v[_] = g.textLine, f = f || g.isTruncated;
  for (var m = d, S = 0, _ = 0; _ < v.length; _++)
    S = Math.max(Yt(v[_], i), S);
  h == null && (h = S);
  var b = S;
  return n && (m += n[0] + n[2], b += n[1] + n[3], h += n[1] + n[3]), u && (b = h), {
    lines: v,
    height: d,
    outerWidth: b,
    outerHeight: m,
    lineHeight: s,
    calculatedLineHeight: o,
    contentWidth: S,
    contentHeight: c,
    width: h,
    isTruncated: f
  };
}
var Rm = /* @__PURE__ */ function() {
  function e() {
  }
  return e;
}(), th = /* @__PURE__ */ function() {
  function e(t) {
    this.tokens = [], t && (this.tokens = t);
  }
  return e;
}(), Im = /* @__PURE__ */ function() {
  function e() {
    this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = [], this.isTruncated = !1;
  }
  return e;
}();
function Am(e, t) {
  var r = new Im();
  if (e != null && (e += ""), !e)
    return r;
  for (var n = t.width, i = t.height, a = t.overflow, o = (a === "break" || a === "breakAll") && n != null ? { width: n, accumWidth: 0, breakAll: a === "breakAll" } : null, s = ys.lastIndex = 0, u; (u = ys.exec(e)) != null; ) {
    var l = u.index;
    l > s && _s(r, e.substring(s, l), t, o), _s(r, u[2], t, o, u[1]), s = ys.lastIndex;
  }
  s < e.length && _s(r, e.substring(s, e.length), t, o);
  var f = [], h = 0, v = 0, c = t.padding, d = a === "truncate", y = t.lineOverflow === "truncate", p = {};
  function g(Y, nt, Q) {
    Y.width = nt, Y.lineHeight = Q, h += Q, v = Math.max(v, nt);
  }
  t: for (var _ = 0; _ < r.lines.length; _++) {
    for (var m = r.lines[_], S = 0, b = 0, w = 0; w < m.tokens.length; w++) {
      var T = m.tokens[w], E = T.styleName && t.rich[T.styleName] || {}, M = T.textPadding = E.padding, C = M ? M[1] + M[3] : 0, x = T.font = E.font || t.font;
      T.contentHeight = pl(x);
      var O = q(E.height, T.contentHeight);
      if (T.innerHeight = O, M && (O += M[0] + M[2]), T.height = O, T.lineHeight = li(E.lineHeight, t.lineHeight, O), T.align = E && E.align || t.align, T.verticalAlign = E && E.verticalAlign || "middle", y && i != null && h + T.lineHeight > i) {
        var R = r.lines.length;
        w > 0 ? (m.tokens = m.tokens.slice(0, w), g(m, b, S), r.lines = r.lines.slice(0, _ + 1)) : r.lines = r.lines.slice(0, _), r.isTruncated = r.isTruncated || r.lines.length < R;
        break t;
      }
      var P = E.width, N = P == null || P === "auto";
      if (typeof P == "string" && P.charAt(P.length - 1) === "%")
        T.percentWidth = P, f.push(T), T.contentWidth = Yt(T.text, x);
      else {
        if (N) {
          var I = E.backgroundColor, G = I && I.image;
          G && (G = Em(G), So(G) && (T.width = Math.max(T.width, G.width * O / G.height)));
        }
        var B = d && n != null ? n - b : null;
        B != null && B < T.width ? !N || B < C ? (T.text = "", T.width = T.contentWidth = 0) : (kd(p, T.text, B - C, x, t.ellipsis, { minChar: t.truncateMinChar }), T.text = p.text, r.isTruncated = r.isTruncated || p.isTruncated, T.width = T.contentWidth = Yt(T.text, x)) : T.contentWidth = Yt(T.text, x);
      }
      T.width += C, b += T.width, E && (S = Math.max(S, T.lineHeight));
    }
    g(m, b, S);
  }
  r.outerWidth = r.width = q(n, v), r.outerHeight = r.height = q(i, h), r.contentHeight = h, r.contentWidth = v, c && (r.outerWidth += c[1] + c[3], r.outerHeight += c[0] + c[2]);
  for (var _ = 0; _ < f.length; _++) {
    var T = f[_], z = T.percentWidth;
    T.width = parseInt(z, 10) / 100 * r.width;
  }
  return r;
}
function _s(e, t, r, n, i) {
  var a = t === "", o = i && r.rich[i] || {}, s = e.lines, u = o.font || r.font, l = !1, f, h;
  if (n) {
    var v = o.padding, c = v ? v[1] + v[3] : 0;
    if (o.width != null && o.width !== "auto") {
      var d = Wr(o.width, n.width) + c;
      s.length > 0 && d + n.accumWidth > n.width && (f = t.split(`
`), l = !0), n.accumWidth = d;
    } else {
      var y = Vd(t, u, n.width, n.breakAll, n.accumWidth);
      n.accumWidth = y.accumWidth + c, h = y.linesWidths, f = y.lines;
    }
  } else
    f = t.split(`
`);
  for (var p = 0; p < f.length; p++) {
    var g = f[p], _ = new Rm();
    if (_.styleName = i, _.text = g, _.isLineHolder = !g && !a, typeof o.width == "number" ? _.width = o.width : _.width = h ? h[p] : Yt(g, u), !p && !l) {
      var m = (s[s.length - 1] || (s[0] = new th())).tokens, S = m.length;
      S === 1 && m[0].isLineHolder ? m[0] = _ : (g || !S || a) && m.push(_);
    } else
      s.push(new th([_]));
  }
}
function Nm(e) {
  var t = e.charCodeAt(0);
  return t >= 32 && t <= 591 || t >= 880 && t <= 4351 || t >= 4608 && t <= 5119 || t >= 7680 && t <= 8303;
}
var Lm = xe(",&?/;] ".split(""), function(e, t) {
  return e[t] = !0, e;
}, {});
function km(e) {
  return Nm(e) ? !!Lm[e] : !0;
}
function Vd(e, t, r, n, i) {
  for (var a = [], o = [], s = "", u = "", l = 0, f = 0, h = 0; h < e.length; h++) {
    var v = e.charAt(h);
    if (v === `
`) {
      u && (s += u, f += l), a.push(s), o.push(f), s = "", u = "", l = 0, f = 0;
      continue;
    }
    var c = Yt(v, t), d = n ? !1 : !km(v);
    if (a.length ? f + c > r : i + f + c > r) {
      f ? (s || u) && (d ? (s || (s = u, u = "", l = 0, f = l), a.push(s), o.push(f - l), u += v, l += c, s = "", f = l) : (u && (s += u, u = "", l = 0), a.push(s), o.push(f), s = v, f = c)) : d ? (a.push(u), o.push(l), u = v, l = c) : (a.push(v), o.push(c));
      continue;
    }
    f += c, d ? (u += v, l += c) : (u && (s += u, u = "", l = 0), s += v);
  }
  return !a.length && !s && (s = e, u = "", l = 0), u && (s += u), s && (a.push(s), o.push(f)), a.length === 1 && (f += i), {
    accumWidth: f,
    lines: a,
    linesWidths: o
  };
}
var Ru = "__zr_style_" + Math.round(Math.random() * 10), Vr = {
  shadowBlur: 0,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: "#000",
  opacity: 1,
  blend: "source-over"
}, wo = {
  style: {
    shadowBlur: !0,
    shadowOffsetX: !0,
    shadowOffsetY: !0,
    shadowColor: !0,
    opacity: !0
  }
};
Vr[Ru] = !0;
var eh = ["z", "z2", "invisible"], Fm = ["invisible"], Bi = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype._init = function(r) {
    for (var n = at(r), i = 0; i < n.length; i++) {
      var a = n[i];
      a === "style" ? this.useStyle(r[a]) : e.prototype.attrKV.call(this, a, r[a]);
    }
    this.style || this.useStyle({});
  }, t.prototype.beforeBrush = function() {
  }, t.prototype.afterBrush = function() {
  }, t.prototype.innerBeforeBrush = function() {
  }, t.prototype.innerAfterBrush = function() {
  }, t.prototype.shouldBePainted = function(r, n, i, a) {
    var o = this.transform;
    if (this.ignore || this.invisible || this.style.opacity === 0 || this.culling && Bm(this, r, n) || o && !o[0] && !o[3])
      return !1;
    if (i && this.__clipPaths) {
      for (var s = 0; s < this.__clipPaths.length; ++s)
        if (this.__clipPaths[s].isZeroArea())
          return !1;
    }
    if (a && this.parent)
      for (var u = this.parent; u; ) {
        if (u.ignore)
          return !1;
        u = u.parent;
      }
    return !0;
  }, t.prototype.contain = function(r, n) {
    return this.rectContain(r, n);
  }, t.prototype.traverse = function(r, n) {
    r.call(n, this);
  }, t.prototype.rectContain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect();
    return a.contain(i[0], i[1]);
  }, t.prototype.getPaintRect = function() {
    var r = this._paintRect;
    if (!this._paintRect || this.__dirty) {
      var n = this.transform, i = this.getBoundingRect(), a = this.style, o = a.shadowBlur || 0, s = a.shadowOffsetX || 0, u = a.shadowOffsetY || 0;
      r = this._paintRect || (this._paintRect = new et(0, 0, 0, 0)), n ? et.applyTransform(r, i, n) : r.copy(i), (o || s || u) && (r.width += o * 2 + Math.abs(s), r.height += o * 2 + Math.abs(u), r.x = Math.min(r.x, r.x + s - o), r.y = Math.min(r.y, r.y + u - o));
      var l = this.dirtyRectTolerance;
      r.isZero() || (r.x = Math.floor(r.x - l), r.y = Math.floor(r.y - l), r.width = Math.ceil(r.width + 1 + l * 2), r.height = Math.ceil(r.height + 1 + l * 2));
    }
    return r;
  }, t.prototype.setPrevPaintRect = function(r) {
    r ? (this._prevPaintRect = this._prevPaintRect || new et(0, 0, 0, 0), this._prevPaintRect.copy(r)) : this._prevPaintRect = null;
  }, t.prototype.getPrevPaintRect = function() {
    return this._prevPaintRect;
  }, t.prototype.animateStyle = function(r) {
    return this.animate("style", r);
  }, t.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : this.markRedraw();
  }, t.prototype.attrKV = function(r, n) {
    r !== "style" ? e.prototype.attrKV.call(this, r, n) : this.style ? this.setStyle(n) : this.useStyle(n);
  }, t.prototype.setStyle = function(r, n) {
    return typeof r == "string" ? this.style[r] = n : A(this.style, r), this.dirtyStyle(), this;
  }, t.prototype.dirtyStyle = function(r) {
    r || this.markRedraw(), this.__dirty |= Ma, this._rect && (this._rect = null);
  }, t.prototype.dirty = function() {
    this.dirtyStyle();
  }, t.prototype.styleChanged = function() {
    return !!(this.__dirty & Ma);
  }, t.prototype.styleUpdated = function() {
    this.__dirty &= -3;
  }, t.prototype.createStyle = function(r) {
    return Ni(Vr, r);
  }, t.prototype.useStyle = function(r) {
    r[Ru] || (r = this.createStyle(r)), this.__inHover ? this.__hoverStyle = r : this.style = r, this.dirtyStyle();
  }, t.prototype.isStyleObject = function(r) {
    return r[Ru];
  }, t.prototype._innerSaveToNormal = function(r) {
    e.prototype._innerSaveToNormal.call(this, r);
    var n = this._normalState;
    r.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(r, n, eh);
  }, t.prototype._applyStateObj = function(r, n, i, a, o, s) {
    e.prototype._applyStateObj.call(this, r, n, i, a, o, s);
    var u = !(n && a), l;
    if (n && n.style ? o ? a ? l = n.style : (l = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(l, n.style)) : (l = this._mergeStyle(this.createStyle(), a ? this.style : i.style), this._mergeStyle(l, n.style)) : u && (l = i.style), l)
      if (o) {
        var f = this.style;
        if (this.style = this.createStyle(u ? {} : f), u)
          for (var h = at(f), v = 0; v < h.length; v++) {
            var c = h[v];
            c in l && (l[c] = l[c], this.style[c] = f[c]);
          }
        for (var d = at(l), v = 0; v < d.length; v++) {
          var c = d[v];
          this.style[c] = this.style[c];
        }
        this._transitionState(r, {
          style: l
        }, s, this.getAnimationStyleProps());
      } else
        this.useStyle(l);
    for (var y = this.__inHover ? Fm : eh, v = 0; v < y.length; v++) {
      var c = y[v];
      n && n[c] != null ? this[c] = n[c] : u && i[c] != null && (this[c] = i[c]);
    }
  }, t.prototype._mergeStates = function(r) {
    for (var n = e.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
      var o = r[a];
      o.style && (i = i || {}, this._mergeStyle(i, o.style));
    }
    return i && (n.style = i), n;
  }, t.prototype._mergeStyle = function(r, n) {
    return A(r, n), r;
  }, t.prototype.getAnimationStyleProps = function() {
    return wo;
  }, t.initDefaultProps = function() {
    var r = t.prototype;
    r.type = "displayable", r.invisible = !1, r.z = 0, r.z2 = 0, r.zlevel = 0, r.culling = !1, r.cursor = "pointer", r.rectHover = !1, r.incremental = !1, r._rect = null, r.dirtyRectTolerance = 0, r.__dirty = Fr | Ma;
  }(), t;
}(po), ms = new et(0, 0, 0, 0), Ss = new et(0, 0, 0, 0);
function Bm(e, t, r) {
  return ms.copy(e.getBoundingRect()), e.transform && ms.applyTransform(e.transform), Ss.width = t, Ss.height = r, !ms.intersect(Ss);
}
var ee = Math.min, re = Math.max, ws = Math.sin, bs = Math.cos, _r = Math.PI * 2, Ji = Yr(), ta = Yr(), ea = Yr();
function rh(e, t, r, n, i, a) {
  i[0] = ee(e, r), i[1] = ee(t, n), a[0] = re(e, r), a[1] = re(t, n);
}
var nh = [], ih = [];
function Vm(e, t, r, n, i, a, o, s, u, l) {
  var f = sd, h = Et, v = f(e, r, i, o, nh);
  u[0] = 1 / 0, u[1] = 1 / 0, l[0] = -1 / 0, l[1] = -1 / 0;
  for (var c = 0; c < v; c++) {
    var d = h(e, r, i, o, nh[c]);
    u[0] = ee(d, u[0]), l[0] = re(d, l[0]);
  }
  v = f(t, n, a, s, ih);
  for (var c = 0; c < v; c++) {
    var y = h(t, n, a, s, ih[c]);
    u[1] = ee(y, u[1]), l[1] = re(y, l[1]);
  }
  u[0] = ee(e, u[0]), l[0] = re(e, l[0]), u[0] = ee(o, u[0]), l[0] = re(o, l[0]), u[1] = ee(t, u[1]), l[1] = re(t, l[1]), u[1] = ee(s, u[1]), l[1] = re(s, l[1]);
}
function zm(e, t, r, n, i, a, o, s) {
  var u = ud, l = Nt, f = re(ee(u(e, r, i), 1), 0), h = re(ee(u(t, n, a), 1), 0), v = l(e, r, i, f), c = l(t, n, a, h);
  o[0] = ee(e, i, v), o[1] = ee(t, a, c), s[0] = re(e, i, v), s[1] = re(t, a, c);
}
function Hm(e, t, r, n, i, a, o, s, u) {
  var l = Ke, f = Qe, h = Math.abs(i - a);
  if (h % _r < 1e-4 && h > 1e-4) {
    s[0] = e - r, s[1] = t - n, u[0] = e + r, u[1] = t + n;
    return;
  }
  if (Ji[0] = bs(i) * r + e, Ji[1] = ws(i) * n + t, ta[0] = bs(a) * r + e, ta[1] = ws(a) * n + t, l(s, Ji, ta), f(u, Ji, ta), i = i % _r, i < 0 && (i = i + _r), a = a % _r, a < 0 && (a = a + _r), i > a && !o ? a += _r : i < a && o && (i += _r), o) {
    var v = a;
    a = i, i = v;
  }
  for (var c = 0; c < a; c += Math.PI / 2)
    c > i && (ea[0] = bs(c) * r + e, ea[1] = ws(c) * n + t, l(s, ea, s), f(u, ea, u));
}
var K = {
  M: 1,
  L: 2,
  C: 3,
  Q: 4,
  A: 5,
  Z: 6,
  R: 7
}, mr = [], Sr = [], ye = [], Ye = [], _e = [], me = [], Ts = Math.min, Ds = Math.max, wr = Math.cos, br = Math.sin, Le = Math.abs, Iu = Math.PI, je = Iu * 2, Ms = typeof Float32Array < "u", Un = [];
function Cs(e) {
  var t = Math.round(e / Iu * 1e8) / 1e8;
  return t % 2 * Iu;
}
function Gm(e, t) {
  var r = Cs(e[0]);
  r < 0 && (r += je);
  var n = r - e[0], i = e[1];
  i += n, !t && i - r >= je ? i = r + je : t && r - i >= je ? i = r - je : !t && r > i ? i = r + (je - Cs(r - i)) : t && r < i && (i = r - (je - Cs(i - r))), e[0] = r, e[1] = i;
}
var Mn = function() {
  function e(t) {
    this.dpr = 1, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = []);
  }
  return e.prototype.increaseVersion = function() {
    this._version++;
  }, e.prototype.getVersion = function() {
    return this._version;
  }, e.prototype.setScale = function(t, r, n) {
    n = n || 0, n > 0 && (this._ux = Le(n / Gf / t) || 0, this._uy = Le(n / Gf / r) || 0);
  }, e.prototype.setDPR = function(t) {
    this.dpr = t;
  }, e.prototype.setContext = function(t) {
    this._ctx = t;
  }, e.prototype.getContext = function() {
    return this._ctx;
  }, e.prototype.beginPath = function() {
    return this._ctx && this._ctx.beginPath(), this.reset(), this;
  }, e.prototype.reset = function() {
    this._saveData && (this._len = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++;
  }, e.prototype.moveTo = function(t, r) {
    return this._drawPendingPt(), this.addData(K.M, t, r), this._ctx && this._ctx.moveTo(t, r), this._x0 = t, this._y0 = r, this._xi = t, this._yi = r, this;
  }, e.prototype.lineTo = function(t, r) {
    var n = Le(t - this._xi), i = Le(r - this._yi), a = n > this._ux || i > this._uy;
    if (this.addData(K.L, t, r), this._ctx && a && this._ctx.lineTo(t, r), a)
      this._xi = t, this._yi = r, this._pendingPtDist = 0;
    else {
      var o = n * n + i * i;
      o > this._pendingPtDist && (this._pendingPtX = t, this._pendingPtY = r, this._pendingPtDist = o);
    }
    return this;
  }, e.prototype.bezierCurveTo = function(t, r, n, i, a, o) {
    return this._drawPendingPt(), this.addData(K.C, t, r, n, i, a, o), this._ctx && this._ctx.bezierCurveTo(t, r, n, i, a, o), this._xi = a, this._yi = o, this;
  }, e.prototype.quadraticCurveTo = function(t, r, n, i) {
    return this._drawPendingPt(), this.addData(K.Q, t, r, n, i), this._ctx && this._ctx.quadraticCurveTo(t, r, n, i), this._xi = n, this._yi = i, this;
  }, e.prototype.arc = function(t, r, n, i, a, o) {
    this._drawPendingPt(), Un[0] = i, Un[1] = a, Gm(Un, o), i = Un[0], a = Un[1];
    var s = a - i;
    return this.addData(K.A, t, r, n, n, i, s, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, r, n, i, a, o), this._xi = wr(a) * n + t, this._yi = br(a) * n + r, this;
  }, e.prototype.arcTo = function(t, r, n, i, a) {
    return this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, r, n, i, a), this;
  }, e.prototype.rect = function(t, r, n, i) {
    return this._drawPendingPt(), this._ctx && this._ctx.rect(t, r, n, i), this.addData(K.R, t, r, n, i), this;
  }, e.prototype.closePath = function() {
    this._drawPendingPt(), this.addData(K.Z);
    var t = this._ctx, r = this._x0, n = this._y0;
    return t && t.closePath(), this._xi = r, this._yi = n, this;
  }, e.prototype.fill = function(t) {
    t && t.fill(), this.toStatic();
  }, e.prototype.stroke = function(t) {
    t && t.stroke(), this.toStatic();
  }, e.prototype.len = function() {
    return this._len;
  }, e.prototype.setData = function(t) {
    var r = t.length;
    !(this.data && this.data.length === r) && Ms && (this.data = new Float32Array(r));
    for (var n = 0; n < r; n++)
      this.data[n] = t[n];
    this._len = r;
  }, e.prototype.appendPath = function(t) {
    t instanceof Array || (t = [t]);
    for (var r = t.length, n = 0, i = this._len, a = 0; a < r; a++)
      n += t[a].len();
    Ms && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
    for (var a = 0; a < r; a++)
      for (var o = t[a].data, s = 0; s < o.length; s++)
        this.data[i++] = o[s];
    this._len = i;
  }, e.prototype.addData = function(t, r, n, i, a, o, s, u, l) {
    if (this._saveData) {
      var f = this.data;
      this._len + arguments.length > f.length && (this._expandData(), f = this.data);
      for (var h = 0; h < arguments.length; h++)
        f[this._len++] = arguments[h];
    }
  }, e.prototype._drawPendingPt = function() {
    this._pendingPtDist > 0 && (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY), this._pendingPtDist = 0);
  }, e.prototype._expandData = function() {
    if (!(this.data instanceof Array)) {
      for (var t = [], r = 0; r < this._len; r++)
        t[r] = this.data[r];
      this.data = t;
    }
  }, e.prototype.toStatic = function() {
    if (this._saveData) {
      this._drawPendingPt();
      var t = this.data;
      t instanceof Array && (t.length = this._len, Ms && this._len > 11 && (this.data = new Float32Array(t)));
    }
  }, e.prototype.getBoundingRect = function() {
    ye[0] = ye[1] = _e[0] = _e[1] = Number.MAX_VALUE, Ye[0] = Ye[1] = me[0] = me[1] = -Number.MAX_VALUE;
    var t = this.data, r = 0, n = 0, i = 0, a = 0, o;
    for (o = 0; o < this._len; ) {
      var s = t[o++], u = o === 1;
      switch (u && (r = t[o], n = t[o + 1], i = r, a = n), s) {
        case K.M:
          r = i = t[o++], n = a = t[o++], _e[0] = i, _e[1] = a, me[0] = i, me[1] = a;
          break;
        case K.L:
          rh(r, n, t[o], t[o + 1], _e, me), r = t[o++], n = t[o++];
          break;
        case K.C:
          Vm(r, n, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], _e, me), r = t[o++], n = t[o++];
          break;
        case K.Q:
          zm(r, n, t[o++], t[o++], t[o], t[o + 1], _e, me), r = t[o++], n = t[o++];
          break;
        case K.A:
          var l = t[o++], f = t[o++], h = t[o++], v = t[o++], c = t[o++], d = t[o++] + c;
          o += 1;
          var y = !t[o++];
          u && (i = wr(c) * h + l, a = br(c) * v + f), Hm(l, f, h, v, c, d, y, _e, me), r = wr(d) * h + l, n = br(d) * v + f;
          break;
        case K.R:
          i = r = t[o++], a = n = t[o++];
          var p = t[o++], g = t[o++];
          rh(i, a, i + p, a + g, _e, me);
          break;
        case K.Z:
          r = i, n = a;
          break;
      }
      Ke(ye, ye, _e), Qe(Ye, Ye, me);
    }
    return o === 0 && (ye[0] = ye[1] = Ye[0] = Ye[1] = 0), new et(ye[0], ye[1], Ye[0] - ye[0], Ye[1] - ye[1]);
  }, e.prototype._calculateLength = function() {
    var t = this.data, r = this._len, n = this._ux, i = this._uy, a = 0, o = 0, s = 0, u = 0;
    this._pathSegLen || (this._pathSegLen = []);
    for (var l = this._pathSegLen, f = 0, h = 0, v = 0; v < r; ) {
      var c = t[v++], d = v === 1;
      d && (a = t[v], o = t[v + 1], s = a, u = o);
      var y = -1;
      switch (c) {
        case K.M:
          a = s = t[v++], o = u = t[v++];
          break;
        case K.L: {
          var p = t[v++], g = t[v++], _ = p - a, m = g - o;
          (Le(_) > n || Le(m) > i || v === r - 1) && (y = Math.sqrt(_ * _ + m * m), a = p, o = g);
          break;
        }
        case K.C: {
          var S = t[v++], b = t[v++], p = t[v++], g = t[v++], w = t[v++], T = t[v++];
          y = W0(a, o, S, b, p, g, w, T, 10), a = w, o = T;
          break;
        }
        case K.Q: {
          var S = t[v++], b = t[v++], p = t[v++], g = t[v++];
          y = X0(a, o, S, b, p, g, 10), a = p, o = g;
          break;
        }
        case K.A:
          var E = t[v++], M = t[v++], C = t[v++], x = t[v++], O = t[v++], R = t[v++], P = R + O;
          v += 1, d && (s = wr(O) * C + E, u = br(O) * x + M), y = Ds(C, x) * Ts(je, Math.abs(R)), a = wr(P) * C + E, o = br(P) * x + M;
          break;
        case K.R: {
          s = a = t[v++], u = o = t[v++];
          var N = t[v++], I = t[v++];
          y = N * 2 + I * 2;
          break;
        }
        case K.Z: {
          var _ = s - a, m = u - o;
          y = Math.sqrt(_ * _ + m * m), a = s, o = u;
          break;
        }
      }
      y >= 0 && (l[h++] = y, f += y);
    }
    return this._pathLen = f, f;
  }, e.prototype.rebuildPath = function(t, r) {
    var n = this.data, i = this._ux, a = this._uy, o = this._len, s, u, l, f, h, v, c = r < 1, d, y, p = 0, g = 0, _, m = 0, S, b;
    if (!(c && (this._pathSegLen || this._calculateLength(), d = this._pathSegLen, y = this._pathLen, _ = r * y, !_)))
      t: for (var w = 0; w < o; ) {
        var T = n[w++], E = w === 1;
        switch (E && (l = n[w], f = n[w + 1], s = l, u = f), T !== K.L && m > 0 && (t.lineTo(S, b), m = 0), T) {
          case K.M:
            s = l = n[w++], u = f = n[w++], t.moveTo(l, f);
            break;
          case K.L: {
            h = n[w++], v = n[w++];
            var M = Le(h - l), C = Le(v - f);
            if (M > i || C > a) {
              if (c) {
                var x = d[g++];
                if (p + x > _) {
                  var O = (_ - p) / x;
                  t.lineTo(l * (1 - O) + h * O, f * (1 - O) + v * O);
                  break t;
                }
                p += x;
              }
              t.lineTo(h, v), l = h, f = v, m = 0;
            } else {
              var R = M * M + C * C;
              R > m && (S = h, b = v, m = R);
            }
            break;
          }
          case K.C: {
            var P = n[w++], N = n[w++], I = n[w++], G = n[w++], B = n[w++], z = n[w++];
            if (c) {
              var x = d[g++];
              if (p + x > _) {
                var O = (_ - p) / x;
                za(l, P, I, B, O, mr), za(f, N, G, z, O, Sr), t.bezierCurveTo(mr[1], Sr[1], mr[2], Sr[2], mr[3], Sr[3]);
                break t;
              }
              p += x;
            }
            t.bezierCurveTo(P, N, I, G, B, z), l = B, f = z;
            break;
          }
          case K.Q: {
            var P = n[w++], N = n[w++], I = n[w++], G = n[w++];
            if (c) {
              var x = d[g++];
              if (p + x > _) {
                var O = (_ - p) / x;
                Ha(l, P, I, O, mr), Ha(f, N, G, O, Sr), t.quadraticCurveTo(mr[1], Sr[1], mr[2], Sr[2]);
                break t;
              }
              p += x;
            }
            t.quadraticCurveTo(P, N, I, G), l = I, f = G;
            break;
          }
          case K.A:
            var Y = n[w++], nt = n[w++], Q = n[w++], gt = n[w++], Xt = n[w++], We = n[w++], ur = n[w++], lr = !n[w++], Zr = Q > gt ? Q : gt, Vt = Le(Q - gt) > 1e-3, dt = Xt + We, H = !1;
            if (c) {
              var x = d[g++];
              p + x > _ && (dt = Xt + We * (_ - p) / x, H = !0), p += x;
            }
            if (Vt && t.ellipse ? t.ellipse(Y, nt, Q, gt, ur, Xt, dt, lr) : t.arc(Y, nt, Zr, Xt, dt, lr), H)
              break t;
            E && (s = wr(Xt) * Q + Y, u = br(Xt) * gt + nt), l = wr(dt) * Q + Y, f = br(dt) * gt + nt;
            break;
          case K.R:
            s = l = n[w], u = f = n[w + 1], h = n[w++], v = n[w++];
            var $ = n[w++], fr = n[w++];
            if (c) {
              var x = d[g++];
              if (p + x > _) {
                var Dt = _ - p;
                t.moveTo(h, v), t.lineTo(h + Ts(Dt, $), v), Dt -= $, Dt > 0 && t.lineTo(h + $, v + Ts(Dt, fr)), Dt -= fr, Dt > 0 && t.lineTo(h + Ds($ - Dt, 0), v + fr), Dt -= $, Dt > 0 && t.lineTo(h, v + Ds(fr - Dt, 0));
                break t;
              }
              p += x;
            }
            t.rect(h, v, $, fr);
            break;
          case K.Z:
            if (c) {
              var x = d[g++];
              if (p + x > _) {
                var O = (_ - p) / x;
                t.lineTo(l * (1 - O) + s * O, f * (1 - O) + u * O);
                break t;
              }
              p += x;
            }
            t.closePath(), l = s, f = u;
        }
      }
  }, e.prototype.clone = function() {
    var t = new e(), r = this.data;
    return t.data = r.slice ? r.slice() : Array.prototype.slice.call(r), t._len = this._len, t;
  }, e.CMD = K, e.initDefaultProps = function() {
    var t = e.prototype;
    t._saveData = !0, t._ux = 0, t._uy = 0, t._pendingPtDist = 0, t._version = 0;
  }(), e;
}();
function en(e, t, r, n, i, a, o) {
  if (i === 0)
    return !1;
  var s = i, u = 0, l = e;
  if (o > t + s && o > n + s || o < t - s && o < n - s || a > e + s && a > r + s || a < e - s && a < r - s)
    return !1;
  if (e !== r)
    u = (t - n) / (e - r), l = (e * n - r * t) / (e - r);
  else
    return Math.abs(a - e) <= s / 2;
  var f = u * a - o + l, h = f * f / (u * u + 1);
  return h <= s / 2 * s / 2;
}
function Um(e, t, r, n, i, a, o, s, u, l, f) {
  if (u === 0)
    return !1;
  var h = u;
  if (f > t + h && f > n + h && f > a + h && f > s + h || f < t - h && f < n - h && f < a - h && f < s - h || l > e + h && l > r + h && l > i + h && l > o + h || l < e - h && l < r - h && l < i - h && l < o - h)
    return !1;
  var v = U0(e, t, r, n, i, a, o, s, l, f);
  return v <= h / 2;
}
function Wm(e, t, r, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  if (u > t + l && u > n + l && u > a + l || u < t - l && u < n - l && u < a - l || s > e + l && s > r + l && s > i + l || s < e - l && s < r - l && s < i - l)
    return !1;
  var f = q0(e, t, r, n, i, a, s, u);
  return f <= l / 2;
}
var ah = Math.PI * 2;
function ra(e) {
  return e %= ah, e < 0 && (e += ah), e;
}
var Wn = Math.PI * 2;
function Ym(e, t, r, n, i, a, o, s, u) {
  if (o === 0)
    return !1;
  var l = o;
  s -= e, u -= t;
  var f = Math.sqrt(s * s + u * u);
  if (f - l > r || f + l < r)
    return !1;
  if (Math.abs(n - i) % Wn < 1e-4)
    return !0;
  if (a) {
    var h = n;
    n = ra(i), i = ra(h);
  } else
    n = ra(n), i = ra(i);
  n > i && (i += Wn);
  var v = Math.atan2(u, s);
  return v < 0 && (v += Wn), v >= n && v <= i || v + Wn >= n && v + Wn <= i;
}
function Be(e, t, r, n, i, a) {
  if (a > t && a > n || a < t && a < n || n === t)
    return 0;
  var o = (a - t) / (n - t), s = n < t ? 1 : -1;
  (o === 1 || o === 0) && (s = n < t ? 0.5 : -0.5);
  var u = o * (r - e) + e;
  return u === i ? 1 / 0 : u > i ? s : 0;
}
var qe = Mn.CMD, Tr = Math.PI * 2, qm = 1e-4;
function Xm(e, t) {
  return Math.abs(e - t) < qm;
}
var Mt = [-1, -1, -1], Qt = [-1, -1];
function $m() {
  var e = Qt[0];
  Qt[0] = Qt[1], Qt[1] = e;
}
function Zm(e, t, r, n, i, a, o, s, u, l) {
  if (l > t && l > n && l > a && l > s || l < t && l < n && l < a && l < s)
    return 0;
  var f = od(t, n, a, s, l, Mt);
  if (f === 0)
    return 0;
  for (var h = 0, v = -1, c = void 0, d = void 0, y = 0; y < f; y++) {
    var p = Mt[y], g = p === 0 || p === 1 ? 0.5 : 1, _ = Et(e, r, i, o, p);
    _ < u || (v < 0 && (v = sd(t, n, a, s, Qt), Qt[1] < Qt[0] && v > 1 && $m(), c = Et(t, n, a, s, Qt[0]), v > 1 && (d = Et(t, n, a, s, Qt[1]))), v === 2 ? p < Qt[0] ? h += c < t ? g : -g : p < Qt[1] ? h += d < c ? g : -g : h += s < d ? g : -g : p < Qt[0] ? h += c < t ? g : -g : h += s < c ? g : -g);
  }
  return h;
}
function jm(e, t, r, n, i, a, o, s) {
  if (s > t && s > n && s > a || s < t && s < n && s < a)
    return 0;
  var u = Y0(t, n, a, s, Mt);
  if (u === 0)
    return 0;
  var l = ud(t, n, a);
  if (l >= 0 && l <= 1) {
    for (var f = 0, h = Nt(t, n, a, l), v = 0; v < u; v++) {
      var c = Mt[v] === 0 || Mt[v] === 1 ? 0.5 : 1, d = Nt(e, r, i, Mt[v]);
      d < o || (Mt[v] < l ? f += h < t ? c : -c : f += a < h ? c : -c);
    }
    return f;
  } else {
    var c = Mt[0] === 0 || Mt[0] === 1 ? 0.5 : 1, d = Nt(e, r, i, Mt[0]);
    return d < o ? 0 : a < t ? c : -c;
  }
}
function Km(e, t, r, n, i, a, o, s) {
  if (s -= t, s > r || s < -r)
    return 0;
  var u = Math.sqrt(r * r - s * s);
  Mt[0] = -u, Mt[1] = u;
  var l = Math.abs(n - i);
  if (l < 1e-4)
    return 0;
  if (l >= Tr - 1e-4) {
    n = 0, i = Tr;
    var f = a ? 1 : -1;
    return o >= Mt[0] + e && o <= Mt[1] + e ? f : 0;
  }
  if (n > i) {
    var h = n;
    n = i, i = h;
  }
  n < 0 && (n += Tr, i += Tr);
  for (var v = 0, c = 0; c < 2; c++) {
    var d = Mt[c];
    if (d + e > o) {
      var y = Math.atan2(s, d), f = a ? 1 : -1;
      y < 0 && (y = Tr + y), (y >= n && y <= i || y + Tr >= n && y + Tr <= i) && (y > Math.PI / 2 && y < Math.PI * 1.5 && (f = -f), v += f);
    }
  }
  return v;
}
function zd(e, t, r, n, i) {
  for (var a = e.data, o = e.len(), s = 0, u = 0, l = 0, f = 0, h = 0, v, c, d = 0; d < o; ) {
    var y = a[d++], p = d === 1;
    switch (y === qe.M && d > 1 && (r || (s += Be(u, l, f, h, n, i))), p && (u = a[d], l = a[d + 1], f = u, h = l), y) {
      case qe.M:
        f = a[d++], h = a[d++], u = f, l = h;
        break;
      case qe.L:
        if (r) {
          if (en(u, l, a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += Be(u, l, a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case qe.C:
        if (r) {
          if (Um(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += Zm(u, l, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case qe.Q:
        if (r) {
          if (Wm(u, l, a[d++], a[d++], a[d], a[d + 1], t, n, i))
            return !0;
        } else
          s += jm(u, l, a[d++], a[d++], a[d], a[d + 1], n, i) || 0;
        u = a[d++], l = a[d++];
        break;
      case qe.A:
        var g = a[d++], _ = a[d++], m = a[d++], S = a[d++], b = a[d++], w = a[d++];
        d += 1;
        var T = !!(1 - a[d++]);
        v = Math.cos(b) * m + g, c = Math.sin(b) * S + _, p ? (f = v, h = c) : s += Be(u, l, v, c, n, i);
        var E = (n - g) * S / m + g;
        if (r) {
          if (Ym(g, _, S, b, b + w, T, t, E, i))
            return !0;
        } else
          s += Km(g, _, S, b, b + w, T, E, i);
        u = Math.cos(b + w) * m + g, l = Math.sin(b + w) * S + _;
        break;
      case qe.R:
        f = u = a[d++], h = l = a[d++];
        var M = a[d++], C = a[d++];
        if (v = f + M, c = h + C, r) {
          if (en(f, h, v, h, t, n, i) || en(v, h, v, c, t, n, i) || en(v, c, f, c, t, n, i) || en(f, c, f, h, t, n, i))
            return !0;
        } else
          s += Be(v, h, v, c, n, i), s += Be(f, c, f, h, n, i);
        break;
      case qe.Z:
        if (r) {
          if (en(u, l, f, h, t, n, i))
            return !0;
        } else
          s += Be(u, l, f, h, n, i);
        u = f, l = h;
        break;
    }
  }
  return !r && !Xm(l, h) && (s += Be(u, l, f, h, n, i) || 0), s !== 0;
}
function Qm(e, t, r) {
  return zd(e, 0, !1, t, r);
}
function Jm(e, t, r, n) {
  return zd(e, t, !0, r, n);
}
var Hd = ht({
  fill: "#000",
  stroke: null,
  strokePercent: 1,
  fillOpacity: 1,
  strokeOpacity: 1,
  lineDashOffset: 0,
  lineWidth: 1,
  lineCap: "butt",
  miterLimit: 10,
  strokeNoScale: !1,
  strokeFirst: !1
}, Vr), t1 = {
  style: ht({
    fill: !0,
    stroke: !0,
    strokePercent: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineDashOffset: !0,
    lineWidth: !0,
    miterLimit: !0
  }, wo.style)
}, Es = Ci.concat([
  "invisible",
  "culling",
  "z",
  "z2",
  "zlevel",
  "parent"
]), it = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.update = function() {
    var r = this;
    e.prototype.update.call(this);
    var n = this.style;
    if (n.decal) {
      var i = this._decalEl = this._decalEl || new t();
      i.buildPath === t.prototype.buildPath && (i.buildPath = function(u) {
        r.buildPath(u, r.shape);
      }), i.silent = !0;
      var a = i.style;
      for (var o in n)
        a[o] !== n[o] && (a[o] = n[o]);
      a.fill = n.fill ? n.decal : null, a.decal = null, a.shadowColor = null, n.strokeFirst && (a.stroke = null);
      for (var s = 0; s < Es.length; ++s)
        i[Es[s]] = this[Es[s]];
      i.__dirty |= Fr;
    } else this._decalEl && (this._decalEl = null);
  }, t.prototype.getDecalElement = function() {
    return this._decalEl;
  }, t.prototype._init = function(r) {
    var n = at(r);
    this.shape = this.getDefaultShape();
    var i = this.getDefaultStyle();
    i && this.useStyle(i);
    for (var a = 0; a < n.length; a++) {
      var o = n[a], s = r[o];
      o === "style" ? this.style ? A(this.style, s) : this.useStyle(s) : o === "shape" ? A(this.shape, s) : e.prototype.attrKV.call(this, o, s);
    }
    this.style || this.useStyle({});
  }, t.prototype.getDefaultStyle = function() {
    return null;
  }, t.prototype.getDefaultShape = function() {
    return {};
  }, t.prototype.canBeInsideText = function() {
    return this.hasFill();
  }, t.prototype.getInsideTextFill = function() {
    var r = this.style.fill;
    if (r !== "none") {
      if (V(r)) {
        var n = Mi(r, 0);
        return n > 0.5 ? Mu : n > 0.2 ? D_ : Cu;
      } else if (r)
        return Cu;
    }
    return Mu;
  }, t.prototype.getInsideTextStroke = function(r) {
    var n = this.style.fill;
    if (V(n)) {
      var i = this.__zr, a = !!(i && i.isDarkMode()), o = Mi(r, 0) < Du;
      if (a === o)
        return n;
    }
  }, t.prototype.buildPath = function(r, n, i) {
  }, t.prototype.pathUpdated = function() {
    this.__dirty &= -5;
  }, t.prototype.getUpdatedPathProxy = function(r) {
    return !this.path && this.createPathProxy(), this.path.beginPath(), this.buildPath(this.path, this.shape, r), this.path;
  }, t.prototype.createPathProxy = function() {
    this.path = new Mn(!1);
  }, t.prototype.hasStroke = function() {
    var r = this.style, n = r.stroke;
    return !(n == null || n === "none" || !(r.lineWidth > 0));
  }, t.prototype.hasFill = function() {
    var r = this.style, n = r.fill;
    return n != null && n !== "none";
  }, t.prototype.getBoundingRect = function() {
    var r = this._rect, n = this.style, i = !r;
    if (i) {
      var a = !1;
      this.path || (a = !0, this.createPathProxy());
      var o = this.path;
      (a || this.__dirty & ri) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), r = o.getBoundingRect();
    }
    if (this._rect = r, this.hasStroke() && this.path && this.path.len() > 0) {
      var s = this._rectStroke || (this._rectStroke = r.clone());
      if (this.__dirty || i) {
        s.copy(r);
        var u = n.strokeNoScale ? this.getLineScale() : 1, l = n.lineWidth;
        if (!this.hasFill()) {
          var f = this.strokeContainThreshold;
          l = Math.max(l, f ?? 4);
        }
        u > 1e-10 && (s.width += l / u, s.height += l / u, s.x -= l / u / 2, s.y -= l / u / 2);
      }
      return s;
    }
    return r;
  }, t.prototype.contain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect(), o = this.style;
    if (r = i[0], n = i[1], a.contain(r, n)) {
      var s = this.path;
      if (this.hasStroke()) {
        var u = o.lineWidth, l = o.strokeNoScale ? this.getLineScale() : 1;
        if (l > 1e-10 && (this.hasFill() || (u = Math.max(u, this.strokeContainThreshold)), Jm(s, u / l, r, n)))
          return !0;
      }
      if (this.hasFill())
        return Qm(s, r, n);
    }
    return !1;
  }, t.prototype.dirtyShape = function() {
    this.__dirty |= ri, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw();
  }, t.prototype.dirty = function() {
    this.dirtyStyle(), this.dirtyShape();
  }, t.prototype.animateShape = function(r) {
    return this.animate("shape", r);
  }, t.prototype.updateDuringAnimation = function(r) {
    r === "style" ? this.dirtyStyle() : r === "shape" ? this.dirtyShape() : this.markRedraw();
  }, t.prototype.attrKV = function(r, n) {
    r === "shape" ? this.setShape(n) : e.prototype.attrKV.call(this, r, n);
  }, t.prototype.setShape = function(r, n) {
    var i = this.shape;
    return i || (i = this.shape = {}), typeof r == "string" ? i[r] = n : A(i, r), this.dirtyShape(), this;
  }, t.prototype.shapeChanged = function() {
    return !!(this.__dirty & ri);
  }, t.prototype.createStyle = function(r) {
    return Ni(Hd, r);
  }, t.prototype._innerSaveToNormal = function(r) {
    e.prototype._innerSaveToNormal.call(this, r);
    var n = this._normalState;
    r.shape && !n.shape && (n.shape = A({}, this.shape));
  }, t.prototype._applyStateObj = function(r, n, i, a, o, s) {
    e.prototype._applyStateObj.call(this, r, n, i, a, o, s);
    var u = !(n && a), l;
    if (n && n.shape ? o ? a ? l = n.shape : (l = A({}, i.shape), A(l, n.shape)) : (l = A({}, a ? this.shape : i.shape), A(l, n.shape)) : u && (l = i.shape), l)
      if (o) {
        this.shape = A({}, this.shape);
        for (var f = {}, h = at(l), v = 0; v < h.length; v++) {
          var c = h[v];
          typeof l[c] == "object" ? this.shape[c] = l[c] : f[c] = l[c];
        }
        this._transitionState(r, {
          shape: f
        }, s);
      } else
        this.shape = l, this.dirtyShape();
  }, t.prototype._mergeStates = function(r) {
    for (var n = e.prototype._mergeStates.call(this, r), i, a = 0; a < r.length; a++) {
      var o = r[a];
      o.shape && (i = i || {}, this._mergeStyle(i, o.shape));
    }
    return i && (n.shape = i), n;
  }, t.prototype.getAnimationStyleProps = function() {
    return t1;
  }, t.prototype.isZeroArea = function() {
    return !1;
  }, t.extend = function(r) {
    var n = function(a) {
      rt(o, a);
      function o(s) {
        var u = a.call(this, s) || this;
        return r.init && r.init.call(u, s), u;
      }
      return o.prototype.getDefaultStyle = function() {
        return j(r.style);
      }, o.prototype.getDefaultShape = function() {
        return j(r.shape);
      }, o;
    }(t);
    for (var i in r)
      typeof r[i] == "function" && (n.prototype[i] = r[i]);
    return n;
  }, t.initDefaultProps = function() {
    var r = t.prototype;
    r.type = "path", r.strokeContainThreshold = 5, r.segmentIgnoreThreshold = 0, r.subPixelOptimize = !1, r.autoBatch = !1, r.__dirty = Fr | Ma | ri;
  }(), t;
}(Bi), e1 = ht({
  strokeFirst: !0,
  font: Gr,
  x: 0,
  y: 0,
  textAlign: "left",
  textBaseline: "top",
  miterLimit: 2
}, Hd), Wa = function(e) {
  rt(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.hasStroke = function() {
    var r = this.style, n = r.stroke;
    return n != null && n !== "none" && r.lineWidth > 0;
  }, t.prototype.hasFill = function() {
    var r = this.style, n = r.fill;
    return n != null && n !== "none";
  }, t.prototype.createStyle = function(r) {
    return Ni(e1, r);
  }, t.prototype.setBoundingRect = function(r) {
    this._rect = r;
  }, t.prototype.getBoundingRect = function() {
    var r = this.style;
    if (!this._rect) {
      var n = r.text;
      n != null ? n += "" : n = "";
      var i = yd(n, r.font, r.textAlign, r.textBaseline);
      if (i.x += r.x || 0, i.y += r.y || 0, this.hasStroke()) {
        var a = r.lineWidth;
        i.x -= a / 2, i.y -= a / 2, i.width += a, i.height += a;
      }
      this._rect = i;
    }
    return this._rect;
  }, t.initDefaultProps = function() {
    var r = t.prototype;
    r.dirtyRectTolerance = 10;
  }(), t;
}(Bi);
Wa.prototype.type = "tspan";
var r1 = ht({
  x: 0,
  y: 0
}, Vr), n1 = {
  style: ht({
    x: !0,
    y: !0,
    width: !0,
    height: !0,
    sx: !0,
    sy: !0,
    sWidth: !0,
    sHeight: !0
  }, wo.style)
};
function i1(e) {
  return !!(e && typeof e != "string" && e.width && e.height);
}
var or = function(e) {
  rt(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.createStyle = function(r) {
    return Ni(r1, r);
  }, t.prototype._getSize = function(r) {
    var n = this.style, i = n[r];
    if (i != null)
      return i;
    var a = i1(n.image) ? n.image : this.__image;
    if (!a)
      return 0;
    var o = r === "width" ? "height" : "width", s = n[o];
    return s == null ? a[r] : a[r] / a[o] * s;
  }, t.prototype.getWidth = function() {
    return this._getSize("width");
  }, t.prototype.getHeight = function() {
    return this._getSize("height");
  }, t.prototype.getAnimationStyleProps = function() {
    return n1;
  }, t.prototype.getBoundingRect = function() {
    var r = this.style;
    return this._rect || (this._rect = new et(r.x || 0, r.y || 0, this.getWidth(), this.getHeight())), this._rect;
  }, t;
}(Bi);
or.prototype.type = "image";
function a1(e, t) {
  var r = t.x, n = t.y, i = t.width, a = t.height, o = t.r, s, u, l, f;
  i < 0 && (r = r + i, i = -i), a < 0 && (n = n + a, a = -a), typeof o == "number" ? s = u = l = f = o : o instanceof Array ? o.length === 1 ? s = u = l = f = o[0] : o.length === 2 ? (s = l = o[0], u = f = o[1]) : o.length === 3 ? (s = o[0], u = f = o[1], l = o[2]) : (s = o[0], u = o[1], l = o[2], f = o[3]) : s = u = l = f = 0;
  var h;
  s + u > i && (h = s + u, s *= i / h, u *= i / h), l + f > i && (h = l + f, l *= i / h, f *= i / h), u + l > a && (h = u + l, u *= a / h, l *= a / h), s + f > a && (h = s + f, s *= a / h, f *= a / h), e.moveTo(r + s, n), e.lineTo(r + i - u, n), u !== 0 && e.arc(r + i - u, n + u, u, -Math.PI / 2, 0), e.lineTo(r + i, n + a - l), l !== 0 && e.arc(r + i - l, n + a - l, l, 0, Math.PI / 2), e.lineTo(r + f, n + a), f !== 0 && e.arc(r + f, n + a - f, f, Math.PI / 2, Math.PI), e.lineTo(r, n + s), s !== 0 && e.arc(r + s, n + s, s, Math.PI, Math.PI * 1.5);
}
var pn = Math.round;
function Gd(e, t, r) {
  if (t) {
    var n = t.x1, i = t.x2, a = t.y1, o = t.y2;
    e.x1 = n, e.x2 = i, e.y1 = a, e.y2 = o;
    var s = r && r.lineWidth;
    return s && (pn(n * 2) === pn(i * 2) && (e.x1 = e.x2 = Ar(n, s, !0)), pn(a * 2) === pn(o * 2) && (e.y1 = e.y2 = Ar(a, s, !0))), e;
  }
}
function Ud(e, t, r) {
  if (t) {
    var n = t.x, i = t.y, a = t.width, o = t.height;
    e.x = n, e.y = i, e.width = a, e.height = o;
    var s = r && r.lineWidth;
    return s && (e.x = Ar(n, s, !0), e.y = Ar(i, s, !0), e.width = Math.max(Ar(n + a, s, !1) - e.x, a === 0 ? 0 : 1), e.height = Math.max(Ar(i + o, s, !1) - e.y, o === 0 ? 0 : 1)), e;
  }
}
function Ar(e, t, r) {
  if (!t)
    return e;
  var n = pn(e * 2);
  return (n + pn(t)) % 2 === 0 ? n / 2 : (n + (r ? 1 : -1)) / 2;
}
var o1 = /* @__PURE__ */ function() {
  function e() {
    this.x = 0, this.y = 0, this.width = 0, this.height = 0;
  }
  return e;
}(), s1 = {}, ve = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new o1();
  }, t.prototype.buildPath = function(r, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = Ud(s1, n, this.style);
      i = u.x, a = u.y, o = u.width, s = u.height, u.r = n.r, n = u;
    } else
      i = n.x, a = n.y, o = n.width, s = n.height;
    n.r ? a1(r, n) : r.rect(i, a, o, s);
  }, t.prototype.isZeroArea = function() {
    return !this.shape.width || !this.shape.height;
  }, t;
}(it);
ve.prototype.type = "rect";
var oh = {
  fill: "#000"
}, sh = 2, u1 = {
  style: ht({
    fill: !0,
    stroke: !0,
    fillOpacity: !0,
    strokeOpacity: !0,
    lineWidth: !0,
    fontSize: !0,
    lineHeight: !0,
    width: !0,
    height: !0,
    textShadowColor: !0,
    textShadowBlur: !0,
    textShadowOffsetX: !0,
    textShadowOffsetY: !0,
    backgroundColor: !0,
    padding: !0,
    borderColor: !0,
    borderWidth: !0,
    borderRadius: !0
  }, wo.style)
}, nr = function(e) {
  rt(t, e);
  function t(r) {
    var n = e.call(this) || this;
    return n.type = "text", n._children = [], n._defaultStyle = oh, n.attr(r), n;
  }
  return t.prototype.childrenRef = function() {
    return this._children;
  }, t.prototype.update = function() {
    e.prototype.update.call(this), this.styleChanged() && this._updateSubTexts();
    for (var r = 0; r < this._children.length; r++) {
      var n = this._children[r];
      n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible;
    }
  }, t.prototype.updateTransform = function() {
    var r = this.innerTransformable;
    r ? (r.updateTransform(), r.transform && (this.transform = r.transform)) : e.prototype.updateTransform.call(this);
  }, t.prototype.getLocalTransform = function(r) {
    var n = this.innerTransformable;
    return n ? n.getLocalTransform(r) : e.prototype.getLocalTransform.call(this, r);
  }, t.prototype.getComputedTransform = function() {
    return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), e.prototype.getComputedTransform.call(this);
  }, t.prototype._updateSubTexts = function() {
    this._childCursor = 0, v1(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated();
  }, t.prototype.addSelfToZr = function(r) {
    e.prototype.addSelfToZr.call(this, r);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = r;
  }, t.prototype.removeSelfFromZr = function(r) {
    e.prototype.removeSelfFromZr.call(this, r);
    for (var n = 0; n < this._children.length; n++)
      this._children[n].__zr = null;
  }, t.prototype.getBoundingRect = function() {
    if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
      for (var r = new et(0, 0, 0, 0), n = this._children, i = [], a = null, o = 0; o < n.length; o++) {
        var s = n[o], u = s.getBoundingRect(), l = s.getLocalTransform(i);
        l ? (r.copy(u), r.applyTransform(l), a = a || r.clone(), a.union(r)) : (a = a || u.clone(), a.union(u));
      }
      this._rect = a || r;
    }
    return this._rect;
  }, t.prototype.setDefaultTextStyle = function(r) {
    this._defaultStyle = r || oh;
  }, t.prototype.setTextContent = function(r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Can't attach text on another text");
  }, t.prototype._mergeStyle = function(r, n) {
    if (!n)
      return r;
    var i = n.rich, a = r.rich || i && {};
    return A(r, n), i && a ? (this._mergeRich(a, i), r.rich = a) : a && (r.rich = a), r;
  }, t.prototype._mergeRich = function(r, n) {
    for (var i = at(n), a = 0; a < i.length; a++) {
      var o = i[a];
      r[o] = r[o] || {}, A(r[o], n[o]);
    }
  }, t.prototype.getAnimationStyleProps = function() {
    return u1;
  }, t.prototype._getOrCreateChild = function(r) {
    var n = this._children[this._childCursor];
    return (!n || !(n instanceof r)) && (n = new r()), this._children[this._childCursor++] = n, n.__zr = this.__zr, n.parent = this, n;
  }, t.prototype._updatePlainTexts = function() {
    var r = this.style, n = r.font || Gr, i = r.padding, a = dh(r), o = Pm(a, r), s = xs(r), u = !!r.backgroundColor, l = o.outerHeight, f = o.outerWidth, h = o.contentWidth, v = o.lines, c = o.lineHeight, d = this._defaultStyle;
    this.isTruncated = !!o.isTruncated;
    var y = r.x || 0, p = r.y || 0, g = r.align || d.align || "left", _ = r.verticalAlign || d.verticalAlign || "top", m = y, S = vn(p, o.contentHeight, _);
    if (s || i) {
      var b = ii(y, f, g), w = vn(p, l, _);
      s && this._renderBackground(r, r, b, w, f, l);
    }
    S += c / 2, i && (m = vh(y, g, i), _ === "top" ? S += i[0] : _ === "bottom" && (S -= i[2]));
    for (var T = 0, E = !1, M = ch("fill" in r ? r.fill : (E = !0, d.fill)), C = hh("stroke" in r ? r.stroke : !u && (!d.autoStroke || E) ? (T = sh, d.stroke) : null), x = r.textShadowBlur > 0, O = r.width != null && (r.overflow === "truncate" || r.overflow === "break" || r.overflow === "breakAll"), R = o.calculatedLineHeight, P = 0; P < v.length; P++) {
      var N = this._getOrCreateChild(Wa), I = N.createStyle();
      N.useStyle(I), I.text = v[P], I.x = m, I.y = S, I.textAlign = g, I.textBaseline = "middle", I.opacity = r.opacity, I.strokeFirst = !0, x && (I.shadowBlur = r.textShadowBlur || 0, I.shadowColor = r.textShadowColor || "transparent", I.shadowOffsetX = r.textShadowOffsetX || 0, I.shadowOffsetY = r.textShadowOffsetY || 0), I.stroke = C, I.fill = M, C && (I.lineWidth = r.lineWidth || T, I.lineDash = r.lineDash, I.lineDashOffset = r.lineDashOffset || 0), I.font = n, lh(I, r), S += c, O && N.setBoundingRect(new et(ii(I.x, h, I.textAlign), vn(I.y, R, I.textBaseline), h, R));
    }
  }, t.prototype._updateRichTexts = function() {
    var r = this.style, n = dh(r), i = Am(n, r), a = i.width, o = i.outerWidth, s = i.outerHeight, u = r.padding, l = r.x || 0, f = r.y || 0, h = this._defaultStyle, v = r.align || h.align, c = r.verticalAlign || h.verticalAlign;
    this.isTruncated = !!i.isTruncated;
    var d = ii(l, o, v), y = vn(f, s, c), p = d, g = y;
    u && (p += u[3], g += u[0]);
    var _ = p + a;
    xs(r) && this._renderBackground(r, r, d, y, o, s);
    for (var m = !!r.backgroundColor, S = 0; S < i.lines.length; S++) {
      for (var b = i.lines[S], w = b.tokens, T = w.length, E = b.lineHeight, M = b.width, C = 0, x = p, O = _, R = T - 1, P = void 0; C < T && (P = w[C], !P.align || P.align === "left"); )
        this._placeToken(P, r, E, g, x, "left", m), M -= P.width, x += P.width, C++;
      for (; R >= 0 && (P = w[R], P.align === "right"); )
        this._placeToken(P, r, E, g, O, "right", m), M -= P.width, O -= P.width, R--;
      for (x += (a - (x - p) - (_ - O) - M) / 2; C <= R; )
        P = w[C], this._placeToken(P, r, E, g, x + P.width / 2, "center", m), x += P.width, C++;
      g += E;
    }
  }, t.prototype._placeToken = function(r, n, i, a, o, s, u) {
    var l = n.rich[r.styleName] || {};
    l.text = r.text;
    var f = r.verticalAlign, h = a + i / 2;
    f === "top" ? h = a + r.height / 2 : f === "bottom" && (h = a + i - r.height / 2);
    var v = !r.isLineHolder && xs(l);
    v && this._renderBackground(l, n, s === "right" ? o - r.width : s === "center" ? o - r.width / 2 : o, h - r.height / 2, r.width, r.height);
    var c = !!l.backgroundColor, d = r.textPadding;
    d && (o = vh(o, s, d), h -= r.height / 2 - d[0] - r.innerHeight / 2);
    var y = this._getOrCreateChild(Wa), p = y.createStyle();
    y.useStyle(p);
    var g = this._defaultStyle, _ = !1, m = 0, S = ch("fill" in l ? l.fill : "fill" in n ? n.fill : (_ = !0, g.fill)), b = hh("stroke" in l ? l.stroke : "stroke" in n ? n.stroke : !c && !u && (!g.autoStroke || _) ? (m = sh, g.stroke) : null), w = l.textShadowBlur > 0 || n.textShadowBlur > 0;
    p.text = r.text, p.x = o, p.y = h, w && (p.shadowBlur = l.textShadowBlur || n.textShadowBlur || 0, p.shadowColor = l.textShadowColor || n.textShadowColor || "transparent", p.shadowOffsetX = l.textShadowOffsetX || n.textShadowOffsetX || 0, p.shadowOffsetY = l.textShadowOffsetY || n.textShadowOffsetY || 0), p.textAlign = s, p.textBaseline = "middle", p.font = r.font || Gr, p.opacity = li(l.opacity, n.opacity, 1), lh(p, l), b && (p.lineWidth = li(l.lineWidth, n.lineWidth, m), p.lineDash = q(l.lineDash, n.lineDash), p.lineDashOffset = n.lineDashOffset || 0, p.stroke = b), S && (p.fill = S);
    var T = r.contentWidth, E = r.contentHeight;
    y.setBoundingRect(new et(ii(p.x, T, p.textAlign), vn(p.y, E, p.textBaseline), T, E));
  }, t.prototype._renderBackground = function(r, n, i, a, o, s) {
    var u = r.backgroundColor, l = r.borderWidth, f = r.borderColor, h = u && u.image, v = u && !h, c = r.borderRadius, d = this, y, p;
    if (v || r.lineHeight || l && f) {
      y = this._getOrCreateChild(ve), y.useStyle(y.createStyle()), y.style.fill = null;
      var g = y.shape;
      g.x = i, g.y = a, g.width = o, g.height = s, g.r = c, y.dirtyShape();
    }
    if (v) {
      var _ = y.style;
      _.fill = u || null, _.fillOpacity = q(r.fillOpacity, 1);
    } else if (h) {
      p = this._getOrCreateChild(or), p.onload = function() {
        d.dirtyStyle();
      };
      var m = p.style;
      m.image = u.image, m.x = i, m.y = a, m.width = o, m.height = s;
    }
    if (l && f) {
      var _ = y.style;
      _.lineWidth = l, _.stroke = f, _.strokeOpacity = q(r.strokeOpacity, 1), _.lineDash = r.borderDash, _.lineDashOffset = r.borderDashOffset || 0, y.strokeContainThreshold = 0, y.hasFill() && y.hasStroke() && (_.strokeFirst = !0, _.lineWidth *= 2);
    }
    var S = (y || p).style;
    S.shadowBlur = r.shadowBlur || 0, S.shadowColor = r.shadowColor || "transparent", S.shadowOffsetX = r.shadowOffsetX || 0, S.shadowOffsetY = r.shadowOffsetY || 0, S.opacity = li(r.opacity, n.opacity, 1);
  }, t.makeFont = function(r) {
    var n = "";
    return c1(r) && (n = [
      r.fontStyle,
      r.fontWeight,
      h1(r.fontSize),
      r.fontFamily || "sans-serif"
    ].join(" ")), n && Te(n) || r.textFont || r.font;
  }, t;
}(Bi), l1 = { left: !0, right: 1, center: 1 }, f1 = { top: 1, bottom: 1, middle: 1 }, uh = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
function h1(e) {
  return typeof e == "string" && (e.indexOf("px") !== -1 || e.indexOf("rem") !== -1 || e.indexOf("em") !== -1) ? e : isNaN(+e) ? nl + "px" : e + "px";
}
function lh(e, t) {
  for (var r = 0; r < uh.length; r++) {
    var n = uh[r], i = t[n];
    i != null && (e[n] = i);
  }
}
function c1(e) {
  return e.fontSize != null || e.fontFamily || e.fontWeight;
}
function v1(e) {
  return fh(e), D(e.rich, fh), e;
}
function fh(e) {
  if (e) {
    e.font = nr.makeFont(e);
    var t = e.align;
    t === "middle" && (t = "center"), e.align = t == null || l1[t] ? t : "left";
    var r = e.verticalAlign;
    r === "center" && (r = "middle"), e.verticalAlign = r == null || f1[r] ? r : "top";
    var n = e.padding;
    n && (e.padding = ul(e.padding));
  }
}
function hh(e, t) {
  return e == null || t <= 0 || e === "transparent" || e === "none" ? null : e.image || e.colorStops ? "#000" : e;
}
function ch(e) {
  return e == null || e === "none" ? null : e.image || e.colorStops ? "#000" : e;
}
function vh(e, t, r) {
  return t === "right" ? e - r[1] : t === "center" ? e + r[3] / 2 - r[1] / 2 : e + r[3];
}
function dh(e) {
  var t = e.text;
  return t != null && (t += ""), t;
}
function xs(e) {
  return !!(e.backgroundColor || e.lineHeight || e.borderWidth && e.borderColor);
}
var kt = Pt(), d1 = function(e, t, r, n) {
  if (n) {
    var i = kt(n);
    i.dataIndex = r, i.dataType = t, i.seriesIndex = e, i.ssrType = "chart", n.type === "group" && n.traverse(function(a) {
      var o = kt(a);
      o.seriesIndex = e, o.dataIndex = r, o.dataType = t, o.ssrType = "chart";
    });
  }
}, ph = 1, gh = {}, Wd = Pt(), ml = Pt(), Sl = 0, bo = 1, To = 2, ir = ["emphasis", "blur", "select"], yh = ["normal", "emphasis", "blur", "select"], p1 = 10, g1 = 9, zr = "highlight", Pa = "downplay", vi = "select", Ra = "unselect", di = "toggleSelect";
function rn(e) {
  return e != null && e !== "none";
}
function Do(e, t, r) {
  e.onHoverStateChange && (e.hoverState || 0) !== r && e.onHoverStateChange(t), e.hoverState = r;
}
function Yd(e) {
  Do(e, "emphasis", To);
}
function qd(e) {
  e.hoverState === To && Do(e, "normal", Sl);
}
function wl(e) {
  Do(e, "blur", bo);
}
function Xd(e) {
  e.hoverState === bo && Do(e, "normal", Sl);
}
function y1(e) {
  e.selected = !0;
}
function _1(e) {
  e.selected = !1;
}
function _h(e, t, r) {
  t(e, r);
}
function Ue(e, t, r) {
  _h(e, t, r), e.isGroup && e.traverse(function(n) {
    _h(n, t, r);
  });
}
function WM(e, t) {
  switch (t) {
    case "emphasis":
      e.hoverState = To;
      break;
    case "normal":
      e.hoverState = Sl;
      break;
    case "blur":
      e.hoverState = bo;
      break;
    case "select":
      e.selected = !0;
  }
}
function m1(e, t, r, n) {
  for (var i = e.style, a = {}, o = 0; o < t.length; o++) {
    var s = t[o], u = i[s];
    a[s] = u ?? (n && n[s]);
  }
  for (var o = 0; o < e.animators.length; o++) {
    var l = e.animators[o];
    l.__fromStateTransition && l.__fromStateTransition.indexOf(r) < 0 && l.targetName === "style" && l.saveTo(a, t);
  }
  return a;
}
function S1(e, t, r, n) {
  var i = r && ot(r, "select") >= 0, a = !1;
  if (e instanceof it) {
    var o = Wd(e), s = i && o.selectFill || o.normalFill, u = i && o.selectStroke || o.normalStroke;
    if (rn(s) || rn(u)) {
      n = n || {};
      var l = n.style || {};
      l.fill === "inherit" ? (a = !0, n = A({}, n), l = A({}, l), l.fill = s) : !rn(l.fill) && rn(s) ? (a = !0, n = A({}, n), l = A({}, l), l.fill = _u(s)) : !rn(l.stroke) && rn(u) && (a || (n = A({}, n), l = A({}, l)), l.stroke = _u(u)), n.style = l;
    }
  }
  if (n && n.z2 == null) {
    a || (n = A({}, n));
    var f = e.z2EmphasisLift;
    n.z2 = e.z2 + (f ?? p1);
  }
  return n;
}
function w1(e, t, r) {
  if (r && r.z2 == null) {
    r = A({}, r);
    var n = e.z2SelectLift;
    r.z2 = e.z2 + (n ?? g1);
  }
  return r;
}
function b1(e, t, r) {
  var n = ot(e.currentStates, t) >= 0, i = e.style.opacity, a = n ? null : m1(e, ["opacity"], t, {
    opacity: 1
  });
  r = r || {};
  var o = r.style || {};
  return o.opacity == null && (r = A({}, r), o = A({
    // Already being applied 'emphasis'. DON'T mul opacity multiple times.
    opacity: n ? i : a.opacity * 0.1
  }, o), r.style = o), r;
}
function Os(e, t) {
  var r = this.states[e];
  if (this.style) {
    if (e === "emphasis")
      return S1(this, e, t, r);
    if (e === "blur")
      return b1(this, e, r);
    if (e === "select")
      return w1(this, e, r);
  }
  return r;
}
function T1(e) {
  e.stateProxy = Os;
  var t = e.getTextContent(), r = e.getTextGuideLine();
  t && (t.stateProxy = Os), r && (r.stateProxy = Os);
}
function mh(e, t) {
  !Kd(e, t) && !e.__highByOuter && Ue(e, Yd);
}
function Sh(e, t) {
  !Kd(e, t) && !e.__highByOuter && Ue(e, qd);
}
function Au(e, t) {
  e.__highByOuter |= 1 << (t || 0), Ue(e, Yd);
}
function Nu(e, t) {
  !(e.__highByOuter &= ~(1 << (t || 0))) && Ue(e, qd);
}
function D1(e) {
  Ue(e, wl);
}
function $d(e) {
  Ue(e, Xd);
}
function Zd(e) {
  Ue(e, y1);
}
function jd(e) {
  Ue(e, _1);
}
function Kd(e, t) {
  return e.__highDownSilentOnTouch && t.zrByTouch;
}
function Qd(e) {
  var t = e.getModel(), r = [], n = [];
  t.eachComponent(function(i, a) {
    var o = ml(a), s = i === "series", u = s ? e.getViewOfSeriesModel(a) : e.getViewOfComponentModel(a);
    !s && n.push(u), o.isBlured && (u.group.traverse(function(l) {
      Xd(l);
    }), s && r.push(a)), o.isBlured = !1;
  }), D(n, function(i) {
    i && i.toggleBlurSeries && i.toggleBlurSeries(r, !1, t);
  });
}
function Lu(e, t, r, n) {
  var i = n.getModel();
  r = r || "coordinateSystem";
  function a(l, f) {
    for (var h = 0; h < f.length; h++) {
      var v = l.getItemGraphicEl(f[h]);
      v && $d(v);
    }
  }
  if (e != null && !(!t || t === "none")) {
    var o = i.getSeriesByIndex(e), s = o.coordinateSystem;
    s && s.master && (s = s.master);
    var u = [];
    i.eachSeries(function(l) {
      var f = o === l, h = l.coordinateSystem;
      h && h.master && (h = h.master);
      var v = h && s ? h === s : f;
      if (!// Not blur other series if blurScope series
      (r === "series" && !f || r === "coordinateSystem" && !v || t === "series" && f)) {
        var c = n.getViewOfSeriesModel(l);
        if (c.group.traverse(function(p) {
          p.__highByOuter && f && t === "self" || wl(p);
        }), Ot(t))
          a(l.getData(), t);
        else if (F(t))
          for (var d = at(t), y = 0; y < d.length; y++)
            a(l.getData(d[y]), t[d[y]]);
        u.push(l), ml(l).isBlured = !0;
      }
    }), i.eachComponent(function(l, f) {
      if (l !== "series") {
        var h = n.getViewOfComponentModel(f);
        h && h.toggleBlurSeries && h.toggleBlurSeries(u, !0, i);
      }
    });
  }
}
function ku(e, t, r) {
  if (!(e == null || t == null)) {
    var n = r.getModel().getComponent(e, t);
    if (n) {
      ml(n).isBlured = !0;
      var i = r.getViewOfComponentModel(n);
      !i || !i.focusBlurEnabled || i.group.traverse(function(a) {
        wl(a);
      });
    }
  }
}
function M1(e, t, r) {
  var n = e.seriesIndex, i = e.getData(t.dataType);
  if (!i) {
    process.env.NODE_ENV !== "production" && Tt("Unknown dataType " + t.dataType);
    return;
  }
  var a = yo(i, t);
  a = (L(a) ? a[0] : a) || 0;
  var o = i.getItemGraphicEl(a);
  if (!o)
    for (var s = i.count(), u = 0; !o && u < s; )
      o = i.getItemGraphicEl(u++);
  if (o) {
    var l = kt(o);
    Lu(n, l.focus, l.blurScope, r);
  } else {
    var f = e.get(["emphasis", "focus"]), h = e.get(["emphasis", "blurScope"]);
    f != null && Lu(n, f, h, r);
  }
}
function bl(e, t, r, n) {
  var i = {
    focusSelf: !1,
    dispatchers: null
  };
  if (e == null || e === "series" || t == null || r == null)
    return i;
  var a = n.getModel().getComponent(e, t);
  if (!a)
    return i;
  var o = n.getViewOfComponentModel(a);
  if (!o || !o.findHighDownDispatchers)
    return i;
  for (var s = o.findHighDownDispatchers(r), u, l = 0; l < s.length; l++)
    if (process.env.NODE_ENV !== "production" && !Cn(s[l]) && Tt("param should be highDownDispatcher"), kt(s[l]).focus === "self") {
      u = !0;
      break;
    }
  return {
    focusSelf: u,
    dispatchers: s
  };
}
function C1(e, t, r) {
  process.env.NODE_ENV !== "production" && !Cn(e) && Tt("param should be highDownDispatcher");
  var n = kt(e), i = bl(n.componentMainType, n.componentIndex, n.componentHighDownName, r), a = i.dispatchers, o = i.focusSelf;
  a ? (o && ku(n.componentMainType, n.componentIndex, r), D(a, function(s) {
    return mh(s, t);
  })) : (Lu(n.seriesIndex, n.focus, n.blurScope, r), n.focus === "self" && ku(n.componentMainType, n.componentIndex, r), mh(e, t));
}
function E1(e, t, r) {
  process.env.NODE_ENV !== "production" && !Cn(e) && Tt("param should be highDownDispatcher"), Qd(r);
  var n = kt(e), i = bl(n.componentMainType, n.componentIndex, n.componentHighDownName, r).dispatchers;
  i ? D(i, function(a) {
    return Sh(a, t);
  }) : Sh(e, t);
}
function x1(e, t, r) {
  if (Fu(t)) {
    var n = t.dataType, i = e.getData(n), a = yo(i, t);
    L(a) || (a = [a]), e[t.type === di ? "toggleSelect" : t.type === vi ? "select" : "unselect"](a, n);
  }
}
function wh(e) {
  var t = e.getAllData();
  D(t, function(r) {
    var n = r.data, i = r.type;
    n.eachItemGraphicEl(function(a, o) {
      e.isSelected(o, i) ? Zd(a) : jd(a);
    });
  });
}
function O1(e) {
  var t = [];
  return e.eachSeries(function(r) {
    var n = r.getAllData();
    D(n, function(i) {
      i.data;
      var a = i.type, o = r.getSelectedDataIndices();
      if (o.length > 0) {
        var s = {
          dataIndex: o,
          seriesIndex: r.seriesIndex
        };
        a != null && (s.dataType = a), t.push(s);
      }
    });
  }), t;
}
function Jd(e, t, r) {
  tp(e, !0), Ue(e, T1), R1(e, t, r);
}
function P1(e) {
  tp(e, !1);
}
function YM(e, t, r, n) {
  n ? P1(e) : Jd(e, t, r);
}
function R1(e, t, r) {
  var n = kt(e);
  t != null ? (n.focus = t, n.blurScope = r) : n.focus && (n.focus = null);
}
var bh = ["emphasis", "blur", "select"], I1 = {
  itemStyle: "getItemStyle",
  lineStyle: "getLineStyle",
  areaStyle: "getAreaStyle"
};
function qM(e, t, r, n) {
  r = r || "itemStyle";
  for (var i = 0; i < bh.length; i++) {
    var a = bh[i], o = t.getModel([a, r]), s = e.ensureState(a);
    s.style = o[I1[r]]();
  }
}
function tp(e, t) {
  var r = t === !1, n = e;
  e.highDownSilentOnTouch && (n.__highDownSilentOnTouch = e.highDownSilentOnTouch), (!r || n.__highDownDispatcher) && (n.__highByOuter = n.__highByOuter || 0, n.__highDownDispatcher = !r);
}
function Cn(e) {
  return !!(e && e.__highDownDispatcher);
}
function A1(e) {
  var t = gh[e];
  return t == null && ph <= 32 && (t = gh[e] = ph++), t;
}
function Fu(e) {
  var t = e.type;
  return t === vi || t === Ra || t === di;
}
function Th(e) {
  var t = e.type;
  return t === zr || t === Pa;
}
function N1(e) {
  var t = Wd(e);
  t.normalFill = e.style.fill, t.normalStroke = e.style.stroke;
  var r = e.states.select || {};
  t.selectFill = r.style && r.style.fill || null, t.selectStroke = r.style && r.style.stroke || null;
}
var nn = Mn.CMD, L1 = [[], [], []], Dh = Math.sqrt, k1 = Math.atan2;
function F1(e, t) {
  if (t) {
    var r = e.data, n = e.len(), i, a, o, s, u, l, f = nn.M, h = nn.C, v = nn.L, c = nn.R, d = nn.A, y = nn.Q;
    for (o = 0, s = 0; o < n; ) {
      switch (i = r[o++], s = o, a = 0, i) {
        case f:
          a = 1;
          break;
        case v:
          a = 1;
          break;
        case h:
          a = 3;
          break;
        case y:
          a = 2;
          break;
        case d:
          var p = t[4], g = t[5], _ = Dh(t[0] * t[0] + t[1] * t[1]), m = Dh(t[2] * t[2] + t[3] * t[3]), S = k1(-t[1] / m, t[0] / _);
          r[o] *= _, r[o++] += p, r[o] *= m, r[o++] += g, r[o++] *= _, r[o++] *= m, r[o++] += S, r[o++] += S, o += 2, s = o;
          break;
        case c:
          l[0] = r[o++], l[1] = r[o++], Ve(l, l, t), r[s++] = l[0], r[s++] = l[1], l[0] += r[o++], l[1] += r[o++], Ve(l, l, t), r[s++] = l[0], r[s++] = l[1];
      }
      for (u = 0; u < a; u++) {
        var b = L1[u];
        b[0] = r[o++], b[1] = r[o++], Ve(b, b, t), r[s++] = b[0], r[s++] = b[1];
      }
    }
    e.increaseVersion();
  }
}
var Ps = Math.sqrt, na = Math.sin, ia = Math.cos, Yn = Math.PI;
function Mh(e) {
  return Math.sqrt(e[0] * e[0] + e[1] * e[1]);
}
function Bu(e, t) {
  return (e[0] * t[0] + e[1] * t[1]) / (Mh(e) * Mh(t));
}
function Ch(e, t) {
  return (e[0] * t[1] < e[1] * t[0] ? -1 : 1) * Math.acos(Bu(e, t));
}
function Eh(e, t, r, n, i, a, o, s, u, l, f) {
  var h = u * (Yn / 180), v = ia(h) * (e - r) / 2 + na(h) * (t - n) / 2, c = -1 * na(h) * (e - r) / 2 + ia(h) * (t - n) / 2, d = v * v / (o * o) + c * c / (s * s);
  d > 1 && (o *= Ps(d), s *= Ps(d));
  var y = (i === a ? -1 : 1) * Ps((o * o * (s * s) - o * o * (c * c) - s * s * (v * v)) / (o * o * (c * c) + s * s * (v * v))) || 0, p = y * o * c / s, g = y * -s * v / o, _ = (e + r) / 2 + ia(h) * p - na(h) * g, m = (t + n) / 2 + na(h) * p + ia(h) * g, S = Ch([1, 0], [(v - p) / o, (c - g) / s]), b = [(v - p) / o, (c - g) / s], w = [(-1 * v - p) / o, (-1 * c - g) / s], T = Ch(b, w);
  if (Bu(b, w) <= -1 && (T = Yn), Bu(b, w) >= 1 && (T = 0), T < 0) {
    var E = Math.round(T / Yn * 1e6) / 1e6;
    T = Yn * 2 + E % 2 * Yn;
  }
  f.addData(l, _, m, o, s, S, T, h, a);
}
var B1 = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/ig, V1 = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
function z1(e) {
  var t = new Mn();
  if (!e)
    return t;
  var r = 0, n = 0, i = r, a = n, o, s = Mn.CMD, u = e.match(B1);
  if (!u)
    return t;
  for (var l = 0; l < u.length; l++) {
    for (var f = u[l], h = f.charAt(0), v = void 0, c = f.match(V1) || [], d = c.length, y = 0; y < d; y++)
      c[y] = parseFloat(c[y]);
    for (var p = 0; p < d; ) {
      var g = void 0, _ = void 0, m = void 0, S = void 0, b = void 0, w = void 0, T = void 0, E = r, M = n, C = void 0, x = void 0;
      switch (h) {
        case "l":
          r += c[p++], n += c[p++], v = s.L, t.addData(v, r, n);
          break;
        case "L":
          r = c[p++], n = c[p++], v = s.L, t.addData(v, r, n);
          break;
        case "m":
          r += c[p++], n += c[p++], v = s.M, t.addData(v, r, n), i = r, a = n, h = "l";
          break;
        case "M":
          r = c[p++], n = c[p++], v = s.M, t.addData(v, r, n), i = r, a = n, h = "L";
          break;
        case "h":
          r += c[p++], v = s.L, t.addData(v, r, n);
          break;
        case "H":
          r = c[p++], v = s.L, t.addData(v, r, n);
          break;
        case "v":
          n += c[p++], v = s.L, t.addData(v, r, n);
          break;
        case "V":
          n = c[p++], v = s.L, t.addData(v, r, n);
          break;
        case "C":
          v = s.C, t.addData(v, c[p++], c[p++], c[p++], c[p++], c[p++], c[p++]), r = c[p - 2], n = c[p - 1];
          break;
        case "c":
          v = s.C, t.addData(v, c[p++] + r, c[p++] + n, c[p++] + r, c[p++] + n, c[p++] + r, c[p++] + n), r += c[p - 2], n += c[p - 1];
          break;
        case "S":
          g = r, _ = n, C = t.len(), x = t.data, o === s.C && (g += r - x[C - 4], _ += n - x[C - 3]), v = s.C, E = c[p++], M = c[p++], r = c[p++], n = c[p++], t.addData(v, g, _, E, M, r, n);
          break;
        case "s":
          g = r, _ = n, C = t.len(), x = t.data, o === s.C && (g += r - x[C - 4], _ += n - x[C - 3]), v = s.C, E = r + c[p++], M = n + c[p++], r += c[p++], n += c[p++], t.addData(v, g, _, E, M, r, n);
          break;
        case "Q":
          E = c[p++], M = c[p++], r = c[p++], n = c[p++], v = s.Q, t.addData(v, E, M, r, n);
          break;
        case "q":
          E = c[p++] + r, M = c[p++] + n, r += c[p++], n += c[p++], v = s.Q, t.addData(v, E, M, r, n);
          break;
        case "T":
          g = r, _ = n, C = t.len(), x = t.data, o === s.Q && (g += r - x[C - 4], _ += n - x[C - 3]), r = c[p++], n = c[p++], v = s.Q, t.addData(v, g, _, r, n);
          break;
        case "t":
          g = r, _ = n, C = t.len(), x = t.data, o === s.Q && (g += r - x[C - 4], _ += n - x[C - 3]), r += c[p++], n += c[p++], v = s.Q, t.addData(v, g, _, r, n);
          break;
        case "A":
          m = c[p++], S = c[p++], b = c[p++], w = c[p++], T = c[p++], E = r, M = n, r = c[p++], n = c[p++], v = s.A, Eh(E, M, r, n, w, T, m, S, b, v, t);
          break;
        case "a":
          m = c[p++], S = c[p++], b = c[p++], w = c[p++], T = c[p++], E = r, M = n, r += c[p++], n += c[p++], v = s.A, Eh(E, M, r, n, w, T, m, S, b, v, t);
          break;
      }
    }
    (h === "z" || h === "Z") && (v = s.Z, t.addData(v), r = i, n = a), o = v;
  }
  return t.toStatic(), t;
}
var ep = function(e) {
  rt(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.applyTransform = function(r) {
  }, t;
}(it);
function rp(e) {
  return e.setData != null;
}
function np(e, t) {
  var r = z1(e), n = A({}, t);
  return n.buildPath = function(i) {
    if (rp(i)) {
      i.setData(r.data);
      var a = i.getContext();
      a && i.rebuildPath(a, 1);
    } else {
      var a = i;
      r.rebuildPath(a, 1);
    }
  }, n.applyTransform = function(i) {
    F1(r, i), this.dirtyShape();
  }, n;
}
function H1(e, t) {
  return new ep(np(e, t));
}
function G1(e, t) {
  var r = np(e, t), n = function(i) {
    rt(a, i);
    function a(o) {
      var s = i.call(this, o) || this;
      return s.applyTransform = r.applyTransform, s.buildPath = r.buildPath, s;
    }
    return a;
  }(ep);
  return n;
}
function U1(e, t) {
  for (var r = [], n = e.length, i = 0; i < n; i++) {
    var a = e[i];
    r.push(a.getUpdatedPathProxy(!0));
  }
  var o = new it(t);
  return o.createPathProxy(), o.buildPath = function(s) {
    if (rp(s)) {
      s.appendPath(r);
      var u = s.getContext();
      u && s.rebuildPath(u, 1);
    }
  }, o;
}
var W1 = /* @__PURE__ */ function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r = 0;
  }
  return e;
}(), Vi = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new W1();
  }, t.prototype.buildPath = function(r, n) {
    r.moveTo(n.cx + n.r, n.cy), r.arc(n.cx, n.cy, n.r, 0, Math.PI * 2);
  }, t;
}(it);
Vi.prototype.type = "circle";
var Y1 = /* @__PURE__ */ function() {
  function e() {
    this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0;
  }
  return e;
}(), Mo = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new Y1();
  }, t.prototype.buildPath = function(r, n) {
    var i = 0.5522848, a = n.cx, o = n.cy, s = n.rx, u = n.ry, l = s * i, f = u * i;
    r.moveTo(a - s, o), r.bezierCurveTo(a - s, o - f, a - l, o - u, a, o - u), r.bezierCurveTo(a + l, o - u, a + s, o - f, a + s, o), r.bezierCurveTo(a + s, o + f, a + l, o + u, a, o + u), r.bezierCurveTo(a - l, o + u, a - s, o + f, a - s, o), r.closePath();
  }, t;
}(it);
Mo.prototype.type = "ellipse";
var ip = Math.PI, Rs = ip * 2, Dr = Math.sin, an = Math.cos, q1 = Math.acos, yt = Math.atan2, xh = Math.abs, pi = Math.sqrt, oi = Math.max, Se = Math.min, ue = 1e-4;
function X1(e, t, r, n, i, a, o, s) {
  var u = r - e, l = n - t, f = o - i, h = s - a, v = h * u - f * l;
  if (!(v * v < ue))
    return v = (f * (t - a) - h * (e - i)) / v, [e + v * u, t + v * l];
}
function aa(e, t, r, n, i, a, o) {
  var s = e - r, u = t - n, l = (o ? a : -a) / pi(s * s + u * u), f = l * u, h = -l * s, v = e + f, c = t + h, d = r + f, y = n + h, p = (v + d) / 2, g = (c + y) / 2, _ = d - v, m = y - c, S = _ * _ + m * m, b = i - a, w = v * y - d * c, T = (m < 0 ? -1 : 1) * pi(oi(0, b * b * S - w * w)), E = (w * m - _ * T) / S, M = (-w * _ - m * T) / S, C = (w * m + _ * T) / S, x = (-w * _ + m * T) / S, O = E - p, R = M - g, P = C - p, N = x - g;
  return O * O + R * R > P * P + N * N && (E = C, M = x), {
    cx: E,
    cy: M,
    x0: -f,
    y0: -h,
    x1: E * (i / b - 1),
    y1: M * (i / b - 1)
  };
}
function $1(e) {
  var t;
  if (L(e)) {
    var r = e.length;
    if (!r)
      return e;
    r === 1 ? t = [e[0], e[0], 0, 0] : r === 2 ? t = [e[0], e[0], e[1], e[1]] : r === 3 ? t = e.concat(e[2]) : t = e;
  } else
    t = [e, e, e, e];
  return t;
}
function Z1(e, t) {
  var r, n = oi(t.r, 0), i = oi(t.r0 || 0, 0), a = n > 0, o = i > 0;
  if (!(!a && !o)) {
    if (a || (n = i, i = 0), i > n) {
      var s = n;
      n = i, i = s;
    }
    var u = t.startAngle, l = t.endAngle;
    if (!(isNaN(u) || isNaN(l))) {
      var f = t.cx, h = t.cy, v = !!t.clockwise, c = xh(l - u), d = c > Rs && c % Rs;
      if (d > ue && (c = d), !(n > ue))
        e.moveTo(f, h);
      else if (c > Rs - ue)
        e.moveTo(f + n * an(u), h + n * Dr(u)), e.arc(f, h, n, u, l, !v), i > ue && (e.moveTo(f + i * an(l), h + i * Dr(l)), e.arc(f, h, i, l, u, v));
      else {
        var y = void 0, p = void 0, g = void 0, _ = void 0, m = void 0, S = void 0, b = void 0, w = void 0, T = void 0, E = void 0, M = void 0, C = void 0, x = void 0, O = void 0, R = void 0, P = void 0, N = n * an(u), I = n * Dr(u), G = i * an(l), B = i * Dr(l), z = c > ue;
        if (z) {
          var Y = t.cornerRadius;
          Y && (r = $1(Y), y = r[0], p = r[1], g = r[2], _ = r[3]);
          var nt = xh(n - i) / 2;
          if (m = Se(nt, g), S = Se(nt, _), b = Se(nt, y), w = Se(nt, p), M = T = oi(m, S), C = E = oi(b, w), (T > ue || E > ue) && (x = n * an(l), O = n * Dr(l), R = i * an(u), P = i * Dr(u), c < ip)) {
            var Q = X1(N, I, R, P, x, O, G, B);
            if (Q) {
              var gt = N - Q[0], Xt = I - Q[1], We = x - Q[0], ur = O - Q[1], lr = 1 / Dr(q1((gt * We + Xt * ur) / (pi(gt * gt + Xt * Xt) * pi(We * We + ur * ur))) / 2), Zr = pi(Q[0] * Q[0] + Q[1] * Q[1]);
              M = Se(T, (n - Zr) / (lr + 1)), C = Se(E, (i - Zr) / (lr - 1));
            }
          }
        }
        if (!z)
          e.moveTo(f + N, h + I);
        else if (M > ue) {
          var Vt = Se(g, M), dt = Se(_, M), H = aa(R, P, N, I, n, Vt, v), $ = aa(x, O, G, B, n, dt, v);
          e.moveTo(f + H.cx + H.x0, h + H.cy + H.y0), M < T && Vt === dt ? e.arc(f + H.cx, h + H.cy, M, yt(H.y0, H.x0), yt($.y0, $.x0), !v) : (Vt > 0 && e.arc(f + H.cx, h + H.cy, Vt, yt(H.y0, H.x0), yt(H.y1, H.x1), !v), e.arc(f, h, n, yt(H.cy + H.y1, H.cx + H.x1), yt($.cy + $.y1, $.cx + $.x1), !v), dt > 0 && e.arc(f + $.cx, h + $.cy, dt, yt($.y1, $.x1), yt($.y0, $.x0), !v));
        } else
          e.moveTo(f + N, h + I), e.arc(f, h, n, u, l, !v);
        if (!(i > ue) || !z)
          e.lineTo(f + G, h + B);
        else if (C > ue) {
          var Vt = Se(y, C), dt = Se(p, C), H = aa(G, B, x, O, i, -dt, v), $ = aa(N, I, R, P, i, -Vt, v);
          e.lineTo(f + H.cx + H.x0, h + H.cy + H.y0), C < E && Vt === dt ? e.arc(f + H.cx, h + H.cy, C, yt(H.y0, H.x0), yt($.y0, $.x0), !v) : (dt > 0 && e.arc(f + H.cx, h + H.cy, dt, yt(H.y0, H.x0), yt(H.y1, H.x1), !v), e.arc(f, h, i, yt(H.cy + H.y1, H.cx + H.x1), yt($.cy + $.y1, $.cx + $.x1), v), Vt > 0 && e.arc(f + $.cx, h + $.cy, Vt, yt($.y1, $.x1), yt($.y0, $.x0), !v));
        } else
          e.lineTo(f + G, h + B), e.arc(f, h, i, l, u, v);
      }
      e.closePath();
    }
  }
}
var j1 = /* @__PURE__ */ function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0, this.cornerRadius = 0;
  }
  return e;
}(), Co = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new j1();
  }, t.prototype.buildPath = function(r, n) {
    Z1(r, n);
  }, t.prototype.isZeroArea = function() {
    return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0;
  }, t;
}(it);
Co.prototype.type = "sector";
var K1 = /* @__PURE__ */ function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0;
  }
  return e;
}(), Eo = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new K1();
  }, t.prototype.buildPath = function(r, n) {
    var i = n.cx, a = n.cy, o = Math.PI * 2;
    r.moveTo(i + n.r, a), r.arc(i, a, n.r, 0, o, !1), r.moveTo(i + n.r0, a), r.arc(i, a, n.r0, 0, o, !0);
  }, t;
}(it);
Eo.prototype.type = "ring";
function Q1(e, t, r, n) {
  var i = [], a = [], o = [], s = [], u, l, f, h;
  if (n) {
    f = [1 / 0, 1 / 0], h = [-1 / 0, -1 / 0];
    for (var v = 0, c = e.length; v < c; v++)
      Ke(f, f, e[v]), Qe(h, h, e[v]);
    Ke(f, f, n[0]), Qe(h, h, n[1]);
  }
  for (var v = 0, c = e.length; v < c; v++) {
    var d = e[v];
    if (r)
      u = e[v ? v - 1 : c - 1], l = e[(v + 1) % c];
    else if (v === 0 || v === c - 1) {
      i.push(Yv(e[v]));
      continue;
    } else
      u = e[v - 1], l = e[v + 1];
    qv(a, l, u), Ta(a, a, t);
    var y = Va(d, u), p = Va(d, l), g = y + p;
    g !== 0 && (y /= g, p /= g), Ta(o, a, -y), Ta(s, a, p);
    var _ = lu([], d, o), m = lu([], d, s);
    n && (Qe(_, _, f), Ke(_, _, h), Qe(m, m, f), Ke(m, m, h)), i.push(_), i.push(m);
  }
  return r && i.push(i.shift()), i;
}
function ap(e, t, r) {
  var n = t.smooth, i = t.points;
  if (i && i.length >= 2) {
    if (n) {
      var a = Q1(i, n, r, t.smoothConstraint);
      e.moveTo(i[0][0], i[0][1]);
      for (var o = i.length, s = 0; s < (r ? o : o - 1); s++) {
        var u = a[s * 2], l = a[s * 2 + 1], f = i[(s + 1) % o];
        e.bezierCurveTo(u[0], u[1], l[0], l[1], f[0], f[1]);
      }
    } else {
      e.moveTo(i[0][0], i[0][1]);
      for (var s = 1, h = i.length; s < h; s++)
        e.lineTo(i[s][0], i[s][1]);
    }
    r && e.closePath();
  }
}
var J1 = /* @__PURE__ */ function() {
  function e() {
    this.points = null, this.smooth = 0, this.smoothConstraint = null;
  }
  return e;
}(), xo = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultShape = function() {
    return new J1();
  }, t.prototype.buildPath = function(r, n) {
    ap(r, n, !0);
  }, t;
}(it);
xo.prototype.type = "polygon";
var tS = /* @__PURE__ */ function() {
  function e() {
    this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null;
  }
  return e;
}(), Oo = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new tS();
  }, t.prototype.buildPath = function(r, n) {
    ap(r, n, !1);
  }, t;
}(it);
Oo.prototype.type = "polyline";
var eS = {}, rS = /* @__PURE__ */ function() {
  function e() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1;
  }
  return e;
}(), zi = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new rS();
  }, t.prototype.buildPath = function(r, n) {
    var i, a, o, s;
    if (this.subPixelOptimize) {
      var u = Gd(eS, n, this.style);
      i = u.x1, a = u.y1, o = u.x2, s = u.y2;
    } else
      i = n.x1, a = n.y1, o = n.x2, s = n.y2;
    var l = n.percent;
    l !== 0 && (r.moveTo(i, a), l < 1 && (o = i * (1 - l) + o * l, s = a * (1 - l) + s * l), r.lineTo(o, s));
  }, t.prototype.pointAt = function(r) {
    var n = this.shape;
    return [
      n.x1 * (1 - r) + n.x2 * r,
      n.y1 * (1 - r) + n.y2 * r
    ];
  }, t;
}(it);
zi.prototype.type = "line";
var Rt = [], nS = /* @__PURE__ */ function() {
  function e() {
    this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1;
  }
  return e;
}();
function Oh(e, t, r) {
  var n = e.cpx2, i = e.cpy2;
  return n != null || i != null ? [
    (r ? Rf : Et)(e.x1, e.cpx1, e.cpx2, e.x2, t),
    (r ? Rf : Et)(e.y1, e.cpy1, e.cpy2, e.y2, t)
  ] : [
    (r ? If : Nt)(e.x1, e.cpx1, e.x2, t),
    (r ? If : Nt)(e.y1, e.cpy1, e.y2, t)
  ];
}
var Po = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new nS();
  }, t.prototype.buildPath = function(r, n) {
    var i = n.x1, a = n.y1, o = n.x2, s = n.y2, u = n.cpx1, l = n.cpy1, f = n.cpx2, h = n.cpy2, v = n.percent;
    v !== 0 && (r.moveTo(i, a), f == null || h == null ? (v < 1 && (Ha(i, u, o, v, Rt), u = Rt[1], o = Rt[2], Ha(a, l, s, v, Rt), l = Rt[1], s = Rt[2]), r.quadraticCurveTo(u, l, o, s)) : (v < 1 && (za(i, u, f, o, v, Rt), u = Rt[1], f = Rt[2], o = Rt[3], za(a, l, h, s, v, Rt), l = Rt[1], h = Rt[2], s = Rt[3]), r.bezierCurveTo(u, l, f, h, o, s)));
  }, t.prototype.pointAt = function(r) {
    return Oh(this.shape, r, !1);
  }, t.prototype.tangentAt = function(r) {
    var n = Oh(this.shape, r, !0);
    return Xv(n, n);
  }, t;
}(it);
Po.prototype.type = "bezier-curve";
var iS = /* @__PURE__ */ function() {
  function e() {
    this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = Math.PI * 2, this.clockwise = !0;
  }
  return e;
}(), Hi = function(e) {
  rt(t, e);
  function t(r) {
    return e.call(this, r) || this;
  }
  return t.prototype.getDefaultStyle = function() {
    return {
      stroke: "#000",
      fill: null
    };
  }, t.prototype.getDefaultShape = function() {
    return new iS();
  }, t.prototype.buildPath = function(r, n) {
    var i = n.cx, a = n.cy, o = Math.max(n.r, 0), s = n.startAngle, u = n.endAngle, l = n.clockwise, f = Math.cos(s), h = Math.sin(s);
    r.moveTo(f * o + i, h * o + a), r.arc(i, a, o, s, u, !l);
  }, t;
}(it);
Hi.prototype.type = "arc";
var op = function(e) {
  rt(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.type = "compound", r;
  }
  return t.prototype._updatePathDirty = function() {
    for (var r = this.shape.paths, n = this.shapeChanged(), i = 0; i < r.length; i++)
      n = n || r[i].shapeChanged();
    n && this.dirtyShape();
  }, t.prototype.beforeBrush = function() {
    this._updatePathDirty();
    for (var r = this.shape.paths || [], n = this.getGlobalScale(), i = 0; i < r.length; i++)
      r[i].path || r[i].createPathProxy(), r[i].path.setScale(n[0], n[1], r[i].segmentIgnoreThreshold);
  }, t.prototype.buildPath = function(r, n) {
    for (var i = n.paths || [], a = 0; a < i.length; a++)
      i[a].buildPath(r, i[a].shape, !0);
  }, t.prototype.afterBrush = function() {
    for (var r = this.shape.paths || [], n = 0; n < r.length; n++)
      r[n].pathUpdated();
  }, t.prototype.getBoundingRect = function() {
    return this._updatePathDirty.call(this), it.prototype.getBoundingRect.call(this);
  }, t;
}(it), sp = function() {
  function e(t) {
    this.colorStops = t || [];
  }
  return e.prototype.addColorStop = function(t, r) {
    this.colorStops.push({
      offset: t,
      color: r
    });
  }, e;
}(), up = function(e) {
  rt(t, e);
  function t(r, n, i, a, o, s) {
    var u = e.call(this, o) || this;
    return u.x = r ?? 0, u.y = n ?? 0, u.x2 = i ?? 1, u.y2 = a ?? 0, u.type = "linear", u.global = s || !1, u;
  }
  return t;
}(sp), lp = function(e) {
  rt(t, e);
  function t(r, n, i, a, o) {
    var s = e.call(this, a) || this;
    return s.x = r ?? 0.5, s.y = n ?? 0.5, s.r = i ?? 0.5, s.type = "radial", s.global = o || !1, s;
  }
  return t;
}(sp), Mr = [0, 0], Cr = [0, 0], oa = new tt(), sa = new tt(), Ya = function() {
  function e(t, r) {
    this._corners = [], this._axes = [], this._origin = [0, 0];
    for (var n = 0; n < 4; n++)
      this._corners[n] = new tt();
    for (var n = 0; n < 2; n++)
      this._axes[n] = new tt();
    t && this.fromBoundingRect(t, r);
  }
  return e.prototype.fromBoundingRect = function(t, r) {
    var n = this._corners, i = this._axes, a = t.x, o = t.y, s = a + t.width, u = o + t.height;
    if (n[0].set(a, o), n[1].set(s, o), n[2].set(s, u), n[3].set(a, u), r)
      for (var l = 0; l < 4; l++)
        n[l].transform(r);
    tt.sub(i[0], n[1], n[0]), tt.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
    for (var l = 0; l < 2; l++)
      this._origin[l] = i[l].dot(n[0]);
  }, e.prototype.intersect = function(t, r) {
    var n = !0, i = !r;
    return oa.set(1 / 0, 1 / 0), sa.set(0, 0), !this._intersectCheckOneSide(this, t, oa, sa, i, 1) && (n = !1, i) || !this._intersectCheckOneSide(t, this, oa, sa, i, -1) && (n = !1, i) || i || tt.copy(r, n ? oa : sa), n;
  }, e.prototype._intersectCheckOneSide = function(t, r, n, i, a, o) {
    for (var s = !0, u = 0; u < 2; u++) {
      var l = this._axes[u];
      if (this._getProjMinMaxOnAxis(u, t._corners, Mr), this._getProjMinMaxOnAxis(u, r._corners, Cr), Mr[1] < Cr[0] || Mr[0] > Cr[1]) {
        if (s = !1, a)
          return s;
        var f = Math.abs(Cr[0] - Mr[1]), h = Math.abs(Mr[0] - Cr[1]);
        Math.min(f, h) > i.len() && (f < h ? tt.scale(i, l, -f * o) : tt.scale(i, l, h * o));
      } else if (n) {
        var f = Math.abs(Cr[0] - Mr[1]), h = Math.abs(Mr[0] - Cr[1]);
        Math.min(f, h) < n.len() && (f < h ? tt.scale(n, l, f * o) : tt.scale(n, l, -h * o));
      }
    }
    return s;
  }, e.prototype._getProjMinMaxOnAxis = function(t, r, n) {
    for (var i = this._axes[t], a = this._origin, o = r[0].dot(i) + a[t], s = o, u = o, l = 1; l < r.length; l++) {
      var f = r[l].dot(i) + a[t];
      s = Math.min(f, s), u = Math.max(f, u);
    }
    n[0] = s, n[1] = u;
  }, e;
}(), aS = [], fp = function(e) {
  rt(t, e);
  function t() {
    var r = e !== null && e.apply(this, arguments) || this;
    return r.notClear = !0, r.incremental = !0, r._displayables = [], r._temporaryDisplayables = [], r._cursor = 0, r;
  }
  return t.prototype.traverse = function(r, n) {
    r.call(n, this);
  }, t.prototype.useStyle = function() {
    this.style = {};
  }, t.prototype.getCursor = function() {
    return this._cursor;
  }, t.prototype.innerAfterBrush = function() {
    this._cursor = this._displayables.length;
  }, t.prototype.clearDisplaybles = function() {
    this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1;
  }, t.prototype.clearTemporalDisplayables = function() {
    this._temporaryDisplayables = [];
  }, t.prototype.addDisplayable = function(r, n) {
    n ? this._temporaryDisplayables.push(r) : this._displayables.push(r), this.markRedraw();
  }, t.prototype.addDisplayables = function(r, n) {
    n = n || !1;
    for (var i = 0; i < r.length; i++)
      this.addDisplayable(r[i], n);
  }, t.prototype.getDisplayables = function() {
    return this._displayables;
  }, t.prototype.getTemporalDisplayables = function() {
    return this._temporaryDisplayables;
  }, t.prototype.eachPendingDisplayable = function(r) {
    for (var n = this._cursor; n < this._displayables.length; n++)
      r && r(this._displayables[n]);
    for (var n = 0; n < this._temporaryDisplayables.length; n++)
      r && r(this._temporaryDisplayables[n]);
  }, t.prototype.update = function() {
    this.updateTransform();
    for (var r = this._cursor; r < this._displayables.length; r++) {
      var n = this._displayables[r];
      n.parent = this, n.update(), n.parent = null;
    }
    for (var r = 0; r < this._temporaryDisplayables.length; r++) {
      var n = this._temporaryDisplayables[r];
      n.parent = this, n.update(), n.parent = null;
    }
  }, t.prototype.getBoundingRect = function() {
    if (!this._rect) {
      for (var r = new et(1 / 0, 1 / 0, -1 / 0, -1 / 0), n = 0; n < this._displayables.length; n++) {
        var i = this._displayables[n], a = i.getBoundingRect().clone();
        i.needLocalTransform() && a.applyTransform(i.getLocalTransform(aS)), r.union(a);
      }
      this._rect = r;
    }
    return this._rect;
  }, t.prototype.contain = function(r, n) {
    var i = this.transformCoordToLocal(r, n), a = this.getBoundingRect();
    if (a.contain(i[0], i[1]))
      for (var o = 0; o < this._displayables.length; o++) {
        var s = this._displayables[o];
        if (s.contain(r, n))
          return !0;
      }
    return !1;
  }, t;
}(Bi), oS = Pt();
function sS(e, t, r, n, i) {
  var a;
  if (t && t.ecModel) {
    var o = t.ecModel.getUpdatePayload();
    a = o && o.animation;
  }
  var s = t && t.isAnimationEnabled(), u = e === "update";
  if (s) {
    var l = void 0, f = void 0, h = void 0;
    n ? (l = q(n.duration, 200), f = q(n.easing, "cubicOut"), h = 0) : (l = t.getShallow(u ? "animationDurationUpdate" : "animationDuration"), f = t.getShallow(u ? "animationEasingUpdate" : "animationEasing"), h = t.getShallow(u ? "animationDelayUpdate" : "animationDelay")), a && (a.duration != null && (l = a.duration), a.easing != null && (f = a.easing), a.delay != null && (h = a.delay)), X(h) && (h = h(r, i)), X(l) && (l = l(r));
    var v = {
      duration: l || 0,
      delay: h,
      easing: f
    };
    return v;
  } else
    return null;
}
function Tl(e, t, r, n, i, a, o) {
  var s = !1, u;
  X(i) ? (o = a, a = i, i = null) : F(i) && (a = i.cb, o = i.during, s = i.isFrom, u = i.removeOpt, i = i.dataIndex);
  var l = e === "leave";
  l || t.stopAnimation("leave");
  var f = sS(e, n, i, l ? u || {} : null, n && n.getAnimationDelayParams ? n.getAnimationDelayParams(t, i) : null);
  if (f && f.duration > 0) {
    var h = f.duration, v = f.delay, c = f.easing, d = {
      duration: h,
      delay: v || 0,
      easing: c,
      done: a,
      force: !!a || !!o,
      // Set to final state in update/init animation.
      // So the post processing based on the path shape can be done correctly.
      setToFinal: !l,
      scope: e,
      during: o
    };
    s ? t.animateFrom(r, d) : t.animateTo(r, d);
  } else
    t.stopAnimation(), !s && t.attr(r), o && o(1), a && a();
}
function Dl(e, t, r, n, i, a) {
  Tl("update", e, t, r, n, i, a);
}
function hp(e, t, r, n, i, a) {
  Tl("enter", e, t, r, n, i, a);
}
function gi(e) {
  if (!e.__zr)
    return !0;
  for (var t = 0; t < e.animators.length; t++) {
    var r = e.animators[t];
    if (r.scope === "leave")
      return !0;
  }
  return !1;
}
function cp(e, t, r, n, i, a) {
  gi(e) || Tl("leave", e, t, r, n, i, a);
}
function Ph(e, t, r, n) {
  e.removeTextContent(), e.removeTextGuideLine(), cp(e, {
    style: {
      opacity: 0
    }
  }, t, r, n);
}
function uS(e, t, r) {
  function n() {
    e.parent && e.parent.remove(e);
  }
  e.isGroup ? e.traverse(function(i) {
    i.isGroup || Ph(i, t, r, n);
  }) : Ph(e, t, r, n);
}
function XM(e) {
  oS(e).oldStyle = e.style;
}
var qa = Math.max, Xa = Math.min, Vu = {};
function vp(e) {
  return it.extend(e);
}
var lS = G1;
function dp(e, t) {
  return lS(e, t);
}
function ae(e, t) {
  Vu[e] = t;
}
function pp(e) {
  if (Vu.hasOwnProperty(e))
    return Vu[e];
}
function Ro(e, t, r, n) {
  var i = H1(e, t);
  return r && (n === "center" && (r = gp(r, i.getBoundingRect())), Cl(i, r)), i;
}
function Ml(e, t, r) {
  var n = new or({
    style: {
      image: e,
      x: t.x,
      y: t.y,
      width: t.width,
      height: t.height
    },
    onload: function(i) {
      if (r === "center") {
        var a = {
          width: i.width,
          height: i.height
        };
        n.setStyle(gp(t, a));
      }
    }
  });
  return n;
}
function gp(e, t) {
  var r = t.width / t.height, n = e.height * r, i;
  n <= e.width ? i = e.height : (n = e.width, i = n / r);
  var a = e.x + e.width / 2, o = e.y + e.height / 2;
  return {
    x: a - n / 2,
    y: o - i / 2,
    width: n,
    height: i
  };
}
var yp = U1;
function Cl(e, t) {
  if (e.applyTransform) {
    var r = e.getBoundingRect(), n = r.calculateTransform(t);
    e.applyTransform(n);
  }
}
function fS(e, t) {
  return Gd(e, e, {
    lineWidth: t
  }), e;
}
function hS(e) {
  return Ud(e.shape, e.shape, e.style), e;
}
var cS = Ar;
function _p(e, t) {
  for (var r = co([]); e && e !== t; )
    yn(r, e.getLocalTransform(), r), e = e.parent;
  return r;
}
function mp(e, t, r) {
  return t && !Ot(t) && (t = dl.getLocalTransform(t)), r && (t = vo([], t)), Ve([], e, t);
}
function vS(e, t, r) {
  var n = t[4] === 0 || t[5] === 0 || t[0] === 0 ? 1 : Math.abs(2 * t[4] / t[0]), i = t[4] === 0 || t[5] === 0 || t[2] === 0 ? 1 : Math.abs(2 * t[4] / t[2]), a = [e === "left" ? -n : e === "right" ? n : 0, e === "top" ? -i : e === "bottom" ? i : 0];
  return a = mp(a, t, r), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top";
}
function Rh(e) {
  return !e.isGroup;
}
function dS(e) {
  return e.shape != null;
}
function pS(e, t, r) {
  if (!e || !t)
    return;
  function n(o) {
    var s = {};
    return o.traverse(function(u) {
      Rh(u) && u.anid && (s[u.anid] = u);
    }), s;
  }
  function i(o) {
    var s = {
      x: o.x,
      y: o.y,
      rotation: o.rotation
    };
    return dS(o) && (s.shape = A({}, o.shape)), s;
  }
  var a = n(e);
  t.traverse(function(o) {
    if (Rh(o) && o.anid) {
      var s = a[o.anid];
      if (s) {
        var u = i(o);
        o.attr(i(s)), Dl(o, u, r, kt(o).dataIndex);
      }
    }
  });
}
function Sp(e, t) {
  return k(e, function(r) {
    var n = r[0];
    n = qa(n, t.x), n = Xa(n, t.x + t.width);
    var i = r[1];
    return i = qa(i, t.y), i = Xa(i, t.y + t.height), [n, i];
  });
}
function wp(e, t) {
  var r = qa(e.x, t.x), n = Xa(e.x + e.width, t.x + t.width), i = qa(e.y, t.y), a = Xa(e.y + e.height, t.y + t.height);
  if (n >= r && a >= i)
    return {
      x: r,
      y: i,
      width: n - r,
      height: a - i
    };
}
function bp(e, t, r) {
  var n = A({
    rectHover: !0
  }, t), i = n.style = {
    strokeNoScale: !0
  };
  if (r = r || {
    x: -1,
    y: -1,
    width: 2,
    height: 2
  }, e)
    return e.indexOf("image://") === 0 ? (i.image = e.slice(8), ht(i, r), new or(n)) : Ro(e.replace("path://", ""), n, r, "center");
}
function gS(e, t, r, n, i) {
  for (var a = 0, o = i[i.length - 1]; a < i.length; a++) {
    var s = i[a];
    if (Tp(e, t, r, n, s[0], s[1], o[0], o[1]))
      return !0;
    o = s;
  }
}
function Tp(e, t, r, n, i, a, o, s) {
  var u = r - e, l = n - t, f = o - i, h = s - a, v = Is(f, h, u, l);
  if (yS(v))
    return !1;
  var c = e - i, d = t - a, y = Is(c, d, u, l) / v;
  if (y < 0 || y > 1)
    return !1;
  var p = Is(c, d, f, h) / v;
  return !(p < 0 || p > 1);
}
function Is(e, t, r, n) {
  return e * n - r * t;
}
function yS(e) {
  return e <= 1e-6 && e >= -1e-6;
}
function _S(e) {
  var t = e.itemTooltipOption, r = e.componentModel, n = e.itemName, i = V(t) ? {
    formatter: t
  } : t, a = r.mainType, o = r.componentIndex, s = {
    componentType: a,
    name: n,
    $vars: ["name"]
  };
  s[a + "Index"] = o;
  var u = e.formatterParamsExtra;
  u && D(at(u), function(f) {
    Ur(s, f) || (s[f] = u[f], s.$vars.push(f));
  });
  var l = kt(e.el);
  l.componentMainType = a, l.componentIndex = o, l.tooltipConfig = {
    name: n,
    option: ht({
      content: n,
      encodeHTMLContent: !0,
      formatterParams: s
    }, i)
  };
}
function Ih(e, t) {
  var r;
  e.isGroup && (r = t(e)), r || e.traverse(t);
}
function Dp(e, t) {
  if (e)
    if (L(e))
      for (var r = 0; r < e.length; r++)
        Ih(e[r], t);
    else
      Ih(e, t);
}
ae("circle", Vi);
ae("ellipse", Mo);
ae("sector", Co);
ae("ring", Eo);
ae("polygon", xo);
ae("polyline", Oo);
ae("rect", ve);
ae("line", zi);
ae("bezierCurve", Po);
ae("arc", Hi);
const $M = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: Hi,
  BezierCurve: Po,
  BoundingRect: et,
  Circle: Vi,
  CompoundPath: op,
  Ellipse: Mo,
  Group: Xr,
  Image: or,
  IncrementalDisplayable: fp,
  Line: zi,
  LinearGradient: up,
  OrientedBoundingRect: Ya,
  Path: it,
  Point: tt,
  Polygon: xo,
  Polyline: Oo,
  RadialGradient: lp,
  Rect: ve,
  Ring: Eo,
  Sector: Co,
  Text: nr,
  applyTransform: mp,
  clipPointsByRect: Sp,
  clipRectByRect: wp,
  createIcon: bp,
  extendPath: dp,
  extendShape: vp,
  getShapeClass: pp,
  getTransform: _p,
  groupTransition: pS,
  initProps: hp,
  isElementRemoved: gi,
  lineLineIntersect: Tp,
  linePolygonIntersect: gS,
  makeImage: Ml,
  makePath: Ro,
  mergePath: yp,
  registerShape: ae,
  removeElement: cp,
  removeElementWithFadeOut: uS,
  resizePath: Cl,
  setTooltipConfig: _S,
  subPixelOptimize: cS,
  subPixelOptimizeLine: fS,
  subPixelOptimizeRect: hS,
  transformDirection: vS,
  traverseElements: Dp,
  updateProps: Dl
}, Symbol.toStringTag, { value: "Module" }));
var Io = {};
function mS(e, t) {
  for (var r = 0; r < ir.length; r++) {
    var n = ir[r], i = t[n], a = e.ensureState(n);
    a.style = a.style || {}, a.style.text = i;
  }
  var o = e.currentStates.slice();
  e.clearStates(!0), e.setStyle({
    text: t.normal
  }), e.useStates(o, !0);
}
function Ah(e, t, r) {
  var n = e.labelFetcher, i = e.labelDataIndex, a = e.labelDimIndex, o = t.normal, s;
  n && (s = n.getFormattedLabel(i, "normal", null, a, o && o.get("formatter"), r != null ? {
    interpolatedValue: r
  } : null)), s == null && (s = X(e.defaultText) ? e.defaultText(i, e, r) : e.defaultText);
  for (var u = {
    normal: s
  }, l = 0; l < ir.length; l++) {
    var f = ir[l], h = t[f];
    u[f] = q(n ? n.getFormattedLabel(i, f, null, a, h && h.get("formatter")) : null, s);
  }
  return u;
}
function ZM(e, t, r, n) {
  r = r || Io;
  for (var i = e instanceof nr, a = !1, o = 0; o < yh.length; o++) {
    var s = t[yh[o]];
    if (s && s.getShallow("show")) {
      a = !0;
      break;
    }
  }
  var u = i ? e : e.getTextContent();
  if (a) {
    i || (u || (u = new nr(), e.setTextContent(u)), e.stateProxy && (u.stateProxy = e.stateProxy));
    var l = Ah(r, t), f = t.normal, h = !!f.getShallow("show"), v = zu(f, n && n.normal, r, !1, !i);
    v.text = l.normal, i || e.setTextConfig(Nh(f, r, !1));
    for (var o = 0; o < ir.length; o++) {
      var c = ir[o], s = t[c];
      if (s) {
        var d = u.ensureState(c), y = !!q(s.getShallow("show"), h);
        if (y !== h && (d.ignore = !y), d.style = zu(s, n && n[c], r, !0, !i), d.style.text = l[c], !i) {
          var p = e.ensureState(c);
          p.textConfig = Nh(s, r, !0);
        }
      }
    }
    u.silent = !!f.getShallow("silent"), u.style.x != null && (v.x = u.style.x), u.style.y != null && (v.y = u.style.y), u.ignore = !h, u.useStyle(v), u.dirty(), r.enableTextSetter && (Mp(u).setLabelText = function(g) {
      var _ = Ah(r, t, g);
      mS(u, _);
    });
  } else u && (u.ignore = !0);
  e.dirty();
}
function jM(e, t) {
  t = t || "label";
  for (var r = {
    normal: e.getModel(t)
  }, n = 0; n < ir.length; n++) {
    var i = ir[n];
    r[i] = e.getModel([i, t]);
  }
  return r;
}
function zu(e, t, r, n, i) {
  var a = {};
  return SS(a, e, r, n, i), t && A(a, t), a;
}
function Nh(e, t, r) {
  t = t || {};
  var n = {}, i, a = e.getShallow("rotate"), o = q(e.getShallow("distance"), r ? null : 5), s = e.getShallow("offset");
  return i = e.getShallow("position") || (r ? null : "inside"), i === "outside" && (i = t.defaultOutsidePosition || "top"), i != null && (n.position = i), s != null && (n.offset = s), a != null && (a *= Math.PI / 180, n.rotation = a), o != null && (n.distance = o), n.outsideFill = e.get("color") === "inherit" ? t.inheritColor || null : "auto", n;
}
function SS(e, t, r, n, i) {
  r = r || Io;
  var a = t.ecModel, o = a && a.option.textStyle, s = wS(t), u;
  if (s) {
    u = {};
    for (var l in s)
      if (s.hasOwnProperty(l)) {
        var f = t.getModel(["rich", l]);
        Bh(u[l] = {}, f, o, r, n, i, !1, !0);
      }
  }
  u && (e.rich = u);
  var h = t.get("overflow");
  h && (e.overflow = h);
  var v = t.get("minMargin");
  v != null && (e.margin = v), Bh(e, t, o, r, n, i, !0, !1);
}
function wS(e) {
  for (var t; e && e !== e.ecModel; ) {
    var r = (e.option || Io).rich;
    if (r) {
      t = t || {};
      for (var n = at(r), i = 0; i < n.length; i++) {
        var a = n[i];
        t[a] = 1;
      }
    }
    e = e.parentModel;
  }
  return t;
}
var Lh = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"], kh = ["align", "lineHeight", "width", "height", "tag", "verticalAlign", "ellipsis"], Fh = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
function Bh(e, t, r, n, i, a, o, s) {
  r = !i && r || Io;
  var u = n && n.inheritColor, l = t.getShallow("color"), f = t.getShallow("textBorderColor"), h = q(t.getShallow("opacity"), r.opacity);
  (l === "inherit" || l === "auto") && (process.env.NODE_ENV !== "production" && l === "auto" && ft("color: 'auto'", "color: 'inherit'"), u ? l = u : l = null), (f === "inherit" || f === "auto") && (process.env.NODE_ENV !== "production" && f === "auto" && ft("color: 'auto'", "color: 'inherit'"), u ? f = u : f = null), a || (l = l || r.color, f = f || r.textBorderColor), l != null && (e.fill = l), f != null && (e.stroke = f);
  var v = q(t.getShallow("textBorderWidth"), r.textBorderWidth);
  v != null && (e.lineWidth = v);
  var c = q(t.getShallow("textBorderType"), r.textBorderType);
  c != null && (e.lineDash = c);
  var d = q(t.getShallow("textBorderDashOffset"), r.textBorderDashOffset);
  d != null && (e.lineDashOffset = d), !i && h == null && !s && (h = n && n.defaultOpacity), h != null && (e.opacity = h), !i && !a && e.fill == null && n.inheritColor && (e.fill = n.inheritColor);
  for (var y = 0; y < Lh.length; y++) {
    var p = Lh[y], g = q(t.getShallow(p), r[p]);
    g != null && (e[p] = g);
  }
  for (var y = 0; y < kh.length; y++) {
    var p = kh[y], g = t.getShallow(p);
    g != null && (e[p] = g);
  }
  if (e.verticalAlign == null) {
    var _ = t.getShallow("baseline");
    _ != null && (e.verticalAlign = _);
  }
  if (!o || !n.disableBox) {
    for (var y = 0; y < Fh.length; y++) {
      var p = Fh[y], g = t.getShallow(p);
      g != null && (e[p] = g);
    }
    var m = t.getShallow("borderType");
    m != null && (e.borderDash = m), (e.backgroundColor === "auto" || e.backgroundColor === "inherit") && u && (process.env.NODE_ENV !== "production" && e.backgroundColor === "auto" && ft("backgroundColor: 'auto'", "backgroundColor: 'inherit'"), e.backgroundColor = u), (e.borderColor === "auto" || e.borderColor === "inherit") && u && (process.env.NODE_ENV !== "production" && e.borderColor === "auto" && ft("borderColor: 'auto'", "borderColor: 'inherit'"), e.borderColor = u);
  }
}
function bS(e, t) {
  var r = t && t.getModel("textStyle");
  return Te([
    // FIXME in node-canvas fontWeight is before fontStyle
    e.fontStyle || r && r.getShallow("fontStyle") || "",
    e.fontWeight || r && r.getShallow("fontWeight") || "",
    (e.fontSize || r && r.getShallow("fontSize") || 12) + "px",
    e.fontFamily || r && r.getShallow("fontFamily") || "sans-serif"
  ].join(" "));
}
var Mp = Pt();
function KM(e, t, r, n) {
  if (e) {
    var i = Mp(e);
    i.prevValue = i.value, i.value = r;
    var a = t.normal;
    i.valueAnimation = a.get("valueAnimation"), i.valueAnimation && (i.precision = a.get("precision"), i.defaultInterpolatedText = n, i.statesModels = t);
  }
}
var TS = ["textStyle", "color"], As = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "padding", "lineHeight", "rich", "width", "height", "overflow"], Ns = new nr(), DS = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getTextColor = function(t) {
      var r = this.ecModel;
      return this.getShallow("color") || (!t && r ? r.get(TS) : null);
    }, e.prototype.getFont = function() {
      return bS({
        fontStyle: this.getShallow("fontStyle"),
        fontWeight: this.getShallow("fontWeight"),
        fontSize: this.getShallow("fontSize"),
        fontFamily: this.getShallow("fontFamily")
      }, this.ecModel);
    }, e.prototype.getTextRect = function(t) {
      for (var r = {
        text: t,
        verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline")
      }, n = 0; n < As.length; n++)
        r[As[n]] = this.getShallow(As[n]);
      return Ns.useStyle(r), Ns.update(), Ns.getBoundingRect();
    }, e;
  }()
), Cp = [
  ["lineWidth", "width"],
  ["stroke", "color"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "type"],
  ["lineDashOffset", "dashOffset"],
  ["lineCap", "cap"],
  ["lineJoin", "join"],
  ["miterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], MS = xi(Cp), CS = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getLineStyle = function(t) {
      return MS(this, t);
    }, e;
  }()
), Ep = [
  ["fill", "color"],
  ["stroke", "borderColor"],
  ["lineWidth", "borderWidth"],
  ["opacity"],
  ["shadowBlur"],
  ["shadowOffsetX"],
  ["shadowOffsetY"],
  ["shadowColor"],
  ["lineDash", "borderType"],
  ["lineDashOffset", "borderDashOffset"],
  ["lineCap", "borderCap"],
  ["lineJoin", "borderJoin"],
  ["miterLimit", "borderMiterLimit"]
  // Option decal is in `DecalObject` but style.decal is in `PatternObject`.
  // So do not transfer decal directly.
], ES = xi(Ep), xS = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getItemStyle = function(t, r) {
      return ES(this, t, r);
    }, e;
  }()
), vt = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.parentModel = r, this.ecModel = n, this.option = t;
    }
    return e.prototype.init = function(t, r, n) {
    }, e.prototype.mergeOption = function(t, r) {
      ut(this.option, t, !0);
    }, e.prototype.get = function(t, r) {
      return t == null ? this.option : this._doGet(this.parsePath(t), !r && this.parentModel);
    }, e.prototype.getShallow = function(t, r) {
      var n = this.option, i = n == null ? n : n[t];
      if (i == null && !r) {
        var a = this.parentModel;
        a && (i = a.getShallow(t));
      }
      return i;
    }, e.prototype.getModel = function(t, r) {
      var n = t != null, i = n ? this.parsePath(t) : null, a = n ? this._doGet(i) : this.option;
      return r = r || this.parentModel && this.parentModel.getModel(this.resolveParentPath(i)), new e(a, r, this.ecModel);
    }, e.prototype.isEmpty = function() {
      return this.option == null;
    }, e.prototype.restoreData = function() {
    }, e.prototype.clone = function() {
      var t = this.constructor;
      return new t(j(this.option));
    }, e.prototype.parsePath = function(t) {
      return typeof t == "string" ? t.split(".") : t;
    }, e.prototype.resolveParentPath = function(t) {
      return t;
    }, e.prototype.isAnimationEnabled = function() {
      if (!Z.node && this.option) {
        if (this.option.animation != null)
          return !!this.option.animation;
        if (this.parentModel)
          return this.parentModel.isAnimationEnabled();
      }
    }, e.prototype._doGet = function(t, r) {
      var n = this.option;
      if (!t)
        return n;
      for (var i = 0; i < t.length && !(t[i] && (n = n && typeof n == "object" ? n[t[i]] : null, n == null)); i++)
        ;
      return n == null && r && (n = r._doGet(this.resolveParentPath(t), r.parentModel)), n;
    }, e;
  }()
);
_l(vt);
wm(vt);
pe(vt, CS);
pe(vt, xS);
pe(vt, Cm);
pe(vt, DS);
var OS = Math.round(Math.random() * 10);
function Ao(e) {
  return [e || "", OS++].join("_");
}
function PS(e) {
  var t = {};
  e.registerSubTypeDefaulter = function(r, n) {
    var i = Me(r);
    t[i.main] = n;
  }, e.determineSubType = function(r, n) {
    var i = n.type;
    if (!i) {
      var a = Me(r).main;
      e.hasSubTypes(r) && t[a] && (i = t[a](n));
    }
    return i;
  };
}
function RS(e, t) {
  e.topologicalTravel = function(a, o, s, u) {
    if (!a.length)
      return;
    var l = r(o), f = l.graph, h = l.noEntryList, v = {};
    for (D(a, function(_) {
      v[_] = !0;
    }); h.length; ) {
      var c = h.pop(), d = f[c], y = !!v[c];
      y && (s.call(u, c, d.originalDeps.slice()), delete v[c]), D(d.successor, y ? g : p);
    }
    D(v, function() {
      var _ = "";
      throw process.env.NODE_ENV !== "production" && (_ = Ua("Circular dependency may exists: ", v, a, o)), new Error(_);
    });
    function p(_) {
      f[_].entryCount--, f[_].entryCount === 0 && h.push(_);
    }
    function g(_) {
      v[_] = !0, p(_);
    }
  };
  function r(a) {
    var o = {}, s = [];
    return D(a, function(u) {
      var l = n(o, u), f = l.originalDeps = t(u), h = i(f, a);
      l.entryCount = h.length, l.entryCount === 0 && s.push(u), D(h, function(v) {
        ot(l.predecessor, v) < 0 && l.predecessor.push(v);
        var c = n(o, v);
        ot(c.successor, v) < 0 && c.successor.push(u);
      });
    }), {
      graph: o,
      noEntryList: s
    };
  }
  function n(a, o) {
    return a[o] || (a[o] = {
      predecessor: [],
      successor: []
    }), a[o];
  }
  function i(a, o) {
    var s = [];
    return D(a, function(u) {
      ot(o, u) >= 0 && s.push(u);
    }), s;
  }
}
function QM(e, t) {
  return ut(ut({}, e, !0), t, !0);
}
const IS = {
  time: {
    month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  },
  legend: {
    selector: {
      all: "All",
      inverse: "Inv"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "Box Select",
        polygon: "Lasso Select",
        lineX: "Horizontally Select",
        lineY: "Vertically Select",
        keep: "Keep Selections",
        clear: "Clear Selections"
      }
    },
    dataView: {
      title: "Data View",
      lang: ["Data View", "Close", "Refresh"]
    },
    dataZoom: {
      title: {
        zoom: "Zoom",
        back: "Zoom Reset"
      }
    },
    magicType: {
      title: {
        line: "Switch to Line Chart",
        bar: "Switch to Bar Chart",
        stack: "Stack",
        tiled: "Tile"
      }
    },
    restore: {
      title: "Restore"
    },
    saveAsImage: {
      title: "Save as Image",
      lang: ["Right Click to Save Image"]
    }
  },
  series: {
    typeNames: {
      pie: "Pie chart",
      bar: "Bar chart",
      line: "Line chart",
      scatter: "Scatter plot",
      effectScatter: "Ripple scatter plot",
      radar: "Radar chart",
      tree: "Tree",
      treemap: "Treemap",
      boxplot: "Boxplot",
      candlestick: "Candlestick",
      k: "K line chart",
      heatmap: "Heat map",
      map: "Map",
      parallel: "Parallel coordinate map",
      lines: "Line graph",
      graph: "Relationship graph",
      sankey: "Sankey diagram",
      funnel: "Funnel chart",
      gauge: "Gauge",
      pictorialBar: "Pictorial bar",
      themeRiver: "Theme River Map",
      sunburst: "Sunburst",
      custom: "Custom chart",
      chart: "Chart"
    }
  },
  aria: {
    general: {
      withTitle: 'This is a chart about "{title}"',
      withoutTitle: "This is a chart"
    },
    series: {
      single: {
        prefix: "",
        withName: " with type {seriesType} named {seriesName}.",
        withoutName: " with type {seriesType}."
      },
      multiple: {
        prefix: ". It consists of {seriesCount} series count.",
        withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
        withoutName: " The {seriesId} series is a {seriesType}.",
        separator: {
          middle: "",
          end: ""
        }
      }
    },
    data: {
      allData: "The data is as follows: ",
      partialData: "The first {displayCnt} items are: ",
      withName: "the data for {name} is {value}",
      withoutName: "{value}",
      separator: {
        middle: ", ",
        end: ". "
      }
    }
  }
}, AS = {
  time: {
    month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
    dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
  },
  legend: {
    selector: {
      all: "全选",
      inverse: "反选"
    }
  },
  toolbox: {
    brush: {
      title: {
        rect: "矩形选择",
        polygon: "圈选",
        lineX: "横向选择",
        lineY: "纵向选择",
        keep: "保持选择",
        clear: "清除选择"
      }
    },
    dataView: {
      title: "数据视图",
      lang: ["数据视图", "关闭", "刷新"]
    },
    dataZoom: {
      title: {
        zoom: "区域缩放",
        back: "区域缩放还原"
      }
    },
    magicType: {
      title: {
        line: "切换为折线图",
        bar: "切换为柱状图",
        stack: "切换为堆叠",
        tiled: "切换为平铺"
      }
    },
    restore: {
      title: "还原"
    },
    saveAsImage: {
      title: "保存为图片",
      lang: ["右键另存为图片"]
    }
  },
  series: {
    typeNames: {
      pie: "饼图",
      bar: "柱状图",
      line: "折线图",
      scatter: "散点图",
      effectScatter: "涟漪散点图",
      radar: "雷达图",
      tree: "树图",
      treemap: "矩形树图",
      boxplot: "箱型图",
      candlestick: "K线图",
      k: "K线图",
      heatmap: "热力图",
      map: "地图",
      parallel: "平行坐标图",
      lines: "线图",
      graph: "关系图",
      sankey: "桑基图",
      funnel: "漏斗图",
      gauge: "仪表盘图",
      pictorialBar: "象形柱图",
      themeRiver: "主题河流图",
      sunburst: "旭日图",
      custom: "自定义图表",
      chart: "图表"
    }
  },
  aria: {
    general: {
      withTitle: "这是一个关于“{title}”的图表。",
      withoutTitle: "这是一个图表，"
    },
    series: {
      single: {
        prefix: "",
        withName: "图表类型是{seriesType}，表示{seriesName}。",
        withoutName: "图表类型是{seriesType}。"
      },
      multiple: {
        prefix: "它由{seriesCount}个图表系列组成。",
        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
        withoutName: "第{seriesId}个系列是一个{seriesType}，",
        separator: {
          middle: "；",
          end: "。"
        }
      }
    },
    data: {
      allData: "其数据是——",
      partialData: "其中，前{displayCnt}项是——",
      withName: "{name}的数据是{value}",
      withoutName: "{value}",
      separator: {
        middle: "，",
        end: ""
      }
    }
  }
};
var $a = "ZH", El = "EN", mn = El, Ia = {}, xl = {}, xp = Z.domSupported ? function() {
  var e = (
    /* eslint-disable-next-line */
    (document.documentElement.lang || navigator.language || navigator.browserLanguage || mn).toUpperCase()
  );
  return e.indexOf($a) > -1 ? $a : mn;
}() : mn;
function Ol(e, t) {
  e = e.toUpperCase(), xl[e] = new vt(t), Ia[e] = t;
}
function NS(e) {
  if (V(e)) {
    var t = Ia[e.toUpperCase()] || {};
    return e === $a || e === El ? j(t) : ut(j(t), j(Ia[mn]), !1);
  } else
    return ut(j(e), j(Ia[mn]), !1);
}
function LS(e) {
  return xl[e];
}
function kS() {
  return xl[mn];
}
Ol(El, IS);
Ol($a, AS);
var Pl = 1e3, Rl = Pl * 60, yi = Rl * 60, ne = yi * 24, Vh = ne * 365, si = {
  year: "{yyyy}",
  month: "{MMM}",
  day: "{d}",
  hour: "{HH}:{mm}",
  minute: "{HH}:{mm}",
  second: "{HH}:{mm}:{ss}",
  millisecond: "{HH}:{mm}:{ss} {SSS}",
  none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}"
}, ua = "{yyyy}-{MM}-{dd}", zh = {
  year: "{yyyy}",
  month: "{yyyy}-{MM}",
  day: ua,
  hour: ua + " " + si.hour,
  minute: ua + " " + si.minute,
  second: ua + " " + si.second,
  millisecond: si.none
}, Ls = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Op = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"];
function Ct(e, t) {
  return e += "", "0000".substr(0, t - e.length) + e;
}
function Sn(e) {
  switch (e) {
    case "half-year":
    case "quarter":
      return "month";
    case "week":
    case "half-week":
      return "day";
    case "half-day":
    case "quarter-day":
      return "hour";
    default:
      return e;
  }
}
function FS(e) {
  return e === Sn(e);
}
function BS(e) {
  switch (e) {
    case "year":
    case "month":
      return "day";
    case "millisecond":
      return "millisecond";
    default:
      return "second";
  }
}
function No(e, t, r, n) {
  var i = ie(e), a = i[Il(r)](), o = i[wn(r)]() + 1, s = Math.floor((o - 1) / 3) + 1, u = i[Lo(r)](), l = i["get" + (r ? "UTC" : "") + "Day"](), f = i[Oi(r)](), h = (f - 1) % 12 + 1, v = i[ko(r)](), c = i[Fo(r)](), d = i[Bo(r)](), y = f >= 12 ? "pm" : "am", p = y.toUpperCase(), g = n instanceof vt ? n : LS(n || xp) || kS(), _ = g.getModel("time"), m = _.get("month"), S = _.get("monthAbbr"), b = _.get("dayOfWeek"), w = _.get("dayOfWeekAbbr");
  return (t || "").replace(/{a}/g, y + "").replace(/{A}/g, p + "").replace(/{yyyy}/g, a + "").replace(/{yy}/g, Ct(a % 100 + "", 2)).replace(/{Q}/g, s + "").replace(/{MMMM}/g, m[o - 1]).replace(/{MMM}/g, S[o - 1]).replace(/{MM}/g, Ct(o, 2)).replace(/{M}/g, o + "").replace(/{dd}/g, Ct(u, 2)).replace(/{d}/g, u + "").replace(/{eeee}/g, b[l]).replace(/{ee}/g, w[l]).replace(/{e}/g, l + "").replace(/{HH}/g, Ct(f, 2)).replace(/{H}/g, f + "").replace(/{hh}/g, Ct(h + "", 2)).replace(/{h}/g, h + "").replace(/{mm}/g, Ct(v, 2)).replace(/{m}/g, v + "").replace(/{ss}/g, Ct(c, 2)).replace(/{s}/g, c + "").replace(/{SSS}/g, Ct(d, 3)).replace(/{S}/g, d + "");
}
function VS(e, t, r, n, i) {
  var a = null;
  if (V(r))
    a = r;
  else if (X(r))
    a = r(e.value, t, {
      level: e.level
    });
  else {
    var o = A({}, si);
    if (e.level > 0)
      for (var s = 0; s < Ls.length; ++s)
        o[Ls[s]] = "{primary|" + o[Ls[s]] + "}";
    var u = r ? r.inherit === !1 ? r : ht(r, o) : o, l = Pp(e.value, i);
    if (u[l])
      a = u[l];
    else if (u.inherit) {
      for (var f = Op.indexOf(l), s = f - 1; s >= 0; --s)
        if (u[l]) {
          a = u[l];
          break;
        }
      a = a || o.none;
    }
    if (L(a)) {
      var h = e.level == null ? 0 : e.level >= 0 ? e.level : a.length + e.level;
      h = Math.min(h, a.length - 1), a = a[h];
    }
  }
  return No(new Date(e.value), a, i, n);
}
function Pp(e, t) {
  var r = ie(e), n = r[wn(t)]() + 1, i = r[Lo(t)](), a = r[Oi(t)](), o = r[ko(t)](), s = r[Fo(t)](), u = r[Bo(t)](), l = u === 0, f = l && s === 0, h = f && o === 0, v = h && a === 0, c = v && i === 1, d = c && n === 1;
  return d ? "year" : c ? "month" : v ? "day" : h ? "hour" : f ? "minute" : l ? "second" : "millisecond";
}
function Hh(e, t, r) {
  var n = lt(e) ? ie(e) : e;
  switch (t = t || Pp(e, r), t) {
    case "year":
      return n[Il(r)]();
    case "half-year":
      return n[wn(r)]() >= 6 ? 1 : 0;
    case "quarter":
      return Math.floor((n[wn(r)]() + 1) / 4);
    case "month":
      return n[wn(r)]();
    case "day":
      return n[Lo(r)]();
    case "half-day":
      return n[Oi(r)]() / 24;
    case "hour":
      return n[Oi(r)]();
    case "minute":
      return n[ko(r)]();
    case "second":
      return n[Fo(r)]();
    case "millisecond":
      return n[Bo(r)]();
  }
}
function Il(e) {
  return e ? "getUTCFullYear" : "getFullYear";
}
function wn(e) {
  return e ? "getUTCMonth" : "getMonth";
}
function Lo(e) {
  return e ? "getUTCDate" : "getDate";
}
function Oi(e) {
  return e ? "getUTCHours" : "getHours";
}
function ko(e) {
  return e ? "getUTCMinutes" : "getMinutes";
}
function Fo(e) {
  return e ? "getUTCSeconds" : "getSeconds";
}
function Bo(e) {
  return e ? "getUTCMilliseconds" : "getMilliseconds";
}
function zS(e) {
  return e ? "setUTCFullYear" : "setFullYear";
}
function Rp(e) {
  return e ? "setUTCMonth" : "setMonth";
}
function Ip(e) {
  return e ? "setUTCDate" : "setDate";
}
function Ap(e) {
  return e ? "setUTCHours" : "setHours";
}
function Np(e) {
  return e ? "setUTCMinutes" : "setMinutes";
}
function Lp(e) {
  return e ? "setUTCSeconds" : "setSeconds";
}
function kp(e) {
  return e ? "setUTCMilliseconds" : "setMilliseconds";
}
function HS(e, t, r, n, i, a, o, s) {
  var u = new nr({
    style: {
      text: e,
      font: t,
      align: r,
      verticalAlign: n,
      padding: i,
      rich: a,
      overflow: o ? "truncate" : null,
      lineHeight: s
    }
  });
  return u.getBoundingRect();
}
function Al(e) {
  if (!yl(e))
    return V(e) ? e : "-";
  var t = (e + "").split(".");
  return t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
}
function GS(e, t) {
  return e = (e || "").toLowerCase().replace(/-(.)/g, function(r, n) {
    return n.toUpperCase();
  }), t && e && (e = e.charAt(0).toUpperCase() + e.slice(1)), e;
}
var Fp = ul;
function Hu(e, t, r) {
  var n = "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}";
  function i(f) {
    return f && Te(f) ? f : "-";
  }
  function a(f) {
    return !!(f != null && !isNaN(f) && isFinite(f));
  }
  var o = t === "time", s = e instanceof Date;
  if (o || s) {
    var u = o ? ie(e) : e;
    if (isNaN(+u)) {
      if (s)
        return "-";
    } else return No(u, n, r);
  }
  if (t === "ordinal")
    return bi(e) ? i(e) : lt(e) && a(e) ? e + "" : "-";
  var l = Ei(e);
  return a(l) ? Al(l) : bi(e) ? i(e) : typeof e == "boolean" ? e + "" : "-";
}
var Gh = ["a", "b", "c", "d", "e", "f", "g"], ks = function(e, t) {
  return "{" + e + (t ?? "") + "}";
};
function Bp(e, t, r) {
  L(t) || (t = [t]);
  var n = t.length;
  if (!n)
    return "";
  for (var i = t[0].$vars || [], a = 0; a < i.length; a++) {
    var o = Gh[a];
    e = e.replace(ks(o), ks(o, 0));
  }
  for (var s = 0; s < n; s++)
    for (var u = 0; u < i.length; u++) {
      var l = t[s][i[u]];
      e = e.replace(ks(Gh[u], s), r ? At(l) : l);
    }
  return e;
}
function Vp(e, t) {
  var r = V(e) ? {
    color: e,
    extraCssText: t
  } : e || {}, n = r.color, i = r.type;
  t = r.extraCssText;
  var a = r.renderMode || "html";
  if (!n)
    return "";
  if (a === "html")
    return i === "subItem" ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + At(n) + ";" + (t || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + At(n) + ";" + (t || "") + '"></span>';
  var o = r.markerId || "markerX";
  return {
    renderMode: a,
    content: "{" + o + "|}  ",
    style: i === "subItem" ? {
      width: 4,
      height: 4,
      borderRadius: 2,
      backgroundColor: n
    } : {
      width: 10,
      height: 10,
      borderRadius: 5,
      backgroundColor: n
    }
  };
}
function US(e, t, r) {
  process.env.NODE_ENV !== "production" && ft("echarts.format.formatTime", "echarts.time.format"), (e === "week" || e === "month" || e === "quarter" || e === "half-year" || e === "year") && (e = `MM-dd
yyyy`);
  var n = ie(t), i = r ? "getUTC" : "get", a = n[i + "FullYear"](), o = n[i + "Month"]() + 1, s = n[i + "Date"](), u = n[i + "Hours"](), l = n[i + "Minutes"](), f = n[i + "Seconds"](), h = n[i + "Milliseconds"]();
  return e = e.replace("MM", Ct(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", Ct(a % 100 + "", 2)).replace("dd", Ct(s, 2)).replace("d", s).replace("hh", Ct(u, 2)).replace("h", u).replace("mm", Ct(l, 2)).replace("m", l).replace("ss", Ct(f, 2)).replace("s", f).replace("SSS", Ct(h, 3)), e;
}
function WS(e) {
  return e && e.charAt(0).toUpperCase() + e.substr(1);
}
function YS(e, t) {
  return t = t || "transparent", V(e) ? e : F(e) && e.colorStops && (e.colorStops[0] || {}).color || t;
}
function JM(e, t) {
  if (t === "_blank" || t === "blank") {
    var r = window.open();
    r.opener = null, r.location.href = e;
  } else
    window.open(e, t);
}
var Aa = D, qS = ["left", "right", "top", "bottom", "width", "height"], la = [["width", "left", "right"], ["height", "top", "bottom"]];
function Nl(e, t, r, n, i) {
  var a = 0, o = 0;
  n == null && (n = 1 / 0), i == null && (i = 1 / 0);
  var s = 0;
  t.eachChild(function(u, l) {
    var f = u.getBoundingRect(), h = t.childAt(l + 1), v = h && h.getBoundingRect(), c, d;
    if (e === "horizontal") {
      var y = f.width + (v ? -v.x + f.x : 0);
      c = a + y, c > n || u.newline ? (a = 0, c = y, o += s + r, s = f.height) : s = Math.max(s, f.height);
    } else {
      var p = f.height + (v ? -v.y + f.y : 0);
      d = o + p, d > i || u.newline ? (a += s + r, o = 0, d = p, s = f.width) : s = Math.max(s, f.width);
    }
    u.newline || (u.x = a, u.y = o, u.markRedraw(), e === "horizontal" ? a = c + r : o = d + r);
  });
}
var tC = Nl;
xn(Nl, "vertical");
xn(Nl, "horizontal");
function XS(e, t, r) {
  r = Fp(r || 0);
  var n = t.width, i = t.height, a = Ht(e.left, n), o = Ht(e.top, i), s = Ht(e.right, n), u = Ht(e.bottom, i), l = Ht(e.width, n), f = Ht(e.height, i), h = r[2] + r[0], v = r[1] + r[3], c = e.aspect;
  switch (isNaN(l) && (l = n - s - v - a), isNaN(f) && (f = i - u - h - o), c != null && (isNaN(l) && isNaN(f) && (c > n / i ? l = n * 0.8 : f = i * 0.8), isNaN(l) && (l = c * f), isNaN(f) && (f = l / c)), isNaN(a) && (a = n - s - l - v), isNaN(o) && (o = i - u - f - h), e.left || e.right) {
    case "center":
      a = n / 2 - l / 2 - r[3];
      break;
    case "right":
      a = n - l - v;
      break;
  }
  switch (e.top || e.bottom) {
    case "middle":
    case "center":
      o = i / 2 - f / 2 - r[0];
      break;
    case "bottom":
      o = i - f - h;
      break;
  }
  a = a || 0, o = o || 0, isNaN(l) && (l = n - v - a - (s || 0)), isNaN(f) && (f = i - h - o - (u || 0));
  var d = new et(a + r[3], o + r[0], l, f);
  return d.margin = r, d;
}
function Za(e) {
  var t = e.layoutMode || e.constructor.layoutMode;
  return F(t) ? t : t ? {
    type: t
  } : null;
}
function ja(e, t, r) {
  var n = r && r.ignoreSize;
  !L(n) && (n = [n, n]);
  var i = o(la[0], 0), a = o(la[1], 1);
  l(la[0], e, i), l(la[1], e, a);
  function o(f, h) {
    var v = {}, c = 0, d = {}, y = 0, p = 2;
    if (Aa(f, function(m) {
      d[m] = e[m];
    }), Aa(f, function(m) {
      s(t, m) && (v[m] = d[m] = t[m]), u(v, m) && c++, u(d, m) && y++;
    }), n[h])
      return u(t, f[1]) ? d[f[2]] = null : u(t, f[2]) && (d[f[1]] = null), d;
    if (y === p || !c)
      return d;
    if (c >= p)
      return v;
    for (var g = 0; g < f.length; g++) {
      var _ = f[g];
      if (!s(v, _) && s(e, _)) {
        v[_] = e[_];
        break;
      }
    }
    return v;
  }
  function s(f, h) {
    return f.hasOwnProperty(h);
  }
  function u(f, h) {
    return f[h] != null && f[h] !== "auto";
  }
  function l(f, h, v) {
    Aa(f, function(c) {
      h[c] = v[c];
    });
  }
}
function zp(e) {
  return $S({}, e);
}
function $S(e, t) {
  return t && e && Aa(qS, function(r) {
    t.hasOwnProperty(r) && (e[r] = t[r]);
  }), e;
}
var ZS = Pt(), J = (
  /** @class */
  function(e) {
    qt(t, e);
    function t(r, n, i) {
      var a = e.call(this, r, n, i) || this;
      return a.uid = Ao("ec_cpt_model"), a;
    }
    return t.prototype.init = function(r, n, i) {
      this.mergeDefaultAndTheme(r, i);
    }, t.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = Za(this), a = i ? zp(r) : {}, o = n.getTheme();
      ut(r, o.get(this.mainType)), ut(r, this.getDefaultOption()), i && ja(r, a, i);
    }, t.prototype.mergeOption = function(r, n) {
      ut(this.option, r, !0);
      var i = Za(this);
      i && ja(this.option, r, i);
    }, t.prototype.optionUpdated = function(r, n) {
    }, t.prototype.getDefaultOption = function() {
      var r = this.constructor;
      if (!_m(r))
        return r.defaultOption;
      var n = ZS(this);
      if (!n.defaultOption) {
        for (var i = [], a = r; a; ) {
          var o = a.prototype.defaultOption;
          o && i.push(o), a = a.superClass;
        }
        for (var s = {}, u = i.length - 1; u >= 0; u--)
          s = ut(s, i[u], !0);
        n.defaultOption = s;
      }
      return n.defaultOption;
    }, t.prototype.getReferringComponents = function(r, n) {
      var i = r + "Index", a = r + "Id";
      return _o(this.ecModel, r, {
        index: this.get(i, !0),
        id: this.get(a, !0)
      }, n);
    }, t.prototype.getBoxLayoutParams = function() {
      var r = this;
      return {
        left: r.get("left"),
        top: r.get("top"),
        right: r.get("right"),
        bottom: r.get("bottom"),
        width: r.get("width"),
        height: r.get("height")
      };
    }, t.prototype.getZLevelKey = function() {
      return "";
    }, t.prototype.setZLevel = function(r) {
      this.option.zlevel = r;
    }, t.protoInitialize = function() {
      var r = t.prototype;
      r.type = "component", r.id = "", r.name = "", r.mainType = "", r.subType = "", r.componentIndex = 0;
    }(), t;
  }(vt)
);
Nd(J, vt);
mo(J);
PS(J);
RS(J, jS);
function jS(e) {
  var t = [];
  return D(J.getClassesByMainType(e), function(r) {
    t = t.concat(r.dependencies || r.prototype.dependencies || []);
  }), t = k(t, function(r) {
    return Me(r).main;
  }), e !== "dataset" && ot(t, "dataset") <= 0 && t.unshift("dataset"), t;
}
var Hp = "";
typeof navigator < "u" && (Hp = navigator.platform || "");
var on = "rgba(0, 0, 0, 0.2)";
const KS = {
  darkMode: "auto",
  // backgroundColor: 'rgba(0,0,0,0)',
  colorBy: "series",
  color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
  gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
  aria: {
    decal: {
      decals: [{
        color: on,
        dashArrayX: [1, 0],
        dashArrayY: [2, 5],
        symbolSize: 1,
        rotation: Math.PI / 6
      }, {
        color: on,
        symbol: "circle",
        dashArrayX: [[8, 8], [0, 8, 8, 0]],
        dashArrayY: [6, 0],
        symbolSize: 0.8
      }, {
        color: on,
        dashArrayX: [1, 0],
        dashArrayY: [4, 3],
        rotation: -Math.PI / 4
      }, {
        color: on,
        dashArrayX: [[6, 6], [0, 6, 6, 0]],
        dashArrayY: [6, 0]
      }, {
        color: on,
        dashArrayX: [[1, 0], [1, 6]],
        dashArrayY: [1, 0, 6, 0],
        rotation: Math.PI / 4
      }, {
        color: on,
        symbol: "triangle",
        dashArrayX: [[9, 9], [0, 9, 9, 0]],
        dashArrayY: [7, 2],
        symbolSize: 0.75
      }]
    }
  },
  // If xAxis and yAxis declared, grid is created by default.
  // grid: {},
  textStyle: {
    // color: '#000',
    // decoration: 'none',
    // PENDING
    fontFamily: Hp.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
    // fontFamily: 'Arial, Verdana, sans-serif',
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "normal"
  },
  // http://blogs.adobe.com/webplatform/2014/02/24/using-blend-modes-in-html-canvas/
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  // Default is source-over
  blendMode: null,
  stateAnimation: {
    duration: 300,
    easing: "cubicOut"
  },
  animation: "auto",
  animationDuration: 1e3,
  animationDurationUpdate: 500,
  animationEasing: "cubicInOut",
  animationEasingUpdate: "cubicInOut",
  animationThreshold: 2e3,
  // Configuration for progressive/incremental rendering
  progressiveThreshold: 3e3,
  progressive: 400,
  // Threshold of if use single hover layer to optimize.
  // It is recommended that `hoverLayerThreshold` is equivalent to or less than
  // `progressiveThreshold`, otherwise hover will cause restart of progressive,
  // which is unexpected.
  // see example <echarts/test/heatmap-large.html>.
  hoverLayerThreshold: 3e3,
  // See: module:echarts/scale/Time
  useUTC: !1
};
var Gu = W(["tooltip", "label", "itemName", "itemId", "itemGroupId", "itemChildGroupId", "seriesName"]), oe = "original", Bt = "arrayRows", ge = "objectRows", Pe = "keyedColumns", ze = "typedArray", Gp = "unknown", He = "column", On = "row", pt = {
  Must: 1,
  Might: 2,
  Not: 3
  // Other cases
}, Up = Pt();
function QS(e) {
  Up(e).datasetMap = W();
}
function JS(e, t, r) {
  var n = {}, i = Ll(t);
  if (!i || !e)
    return n;
  var a = [], o = [], s = t.ecModel, u = Up(s).datasetMap, l = i.uid + "_" + r.seriesLayoutBy, f, h;
  e = e.slice(), D(e, function(y, p) {
    var g = F(y) ? y : e[p] = {
      name: y
    };
    g.type === "ordinal" && f == null && (f = p, h = d(g)), n[g.name] = [];
  });
  var v = u.get(l) || u.set(l, {
    categoryWayDim: h,
    valueWayDim: 0
  });
  D(e, function(y, p) {
    var g = y.name, _ = d(y);
    if (f == null) {
      var m = v.valueWayDim;
      c(n[g], m, _), c(o, m, _), v.valueWayDim += _;
    } else if (f === p)
      c(n[g], 0, _), c(a, 0, _);
    else {
      var m = v.categoryWayDim;
      c(n[g], m, _), c(o, m, _), v.categoryWayDim += _;
    }
  });
  function c(y, p, g) {
    for (var _ = 0; _ < g; _++)
      y.push(p + _);
  }
  function d(y) {
    var p = y.dimsDef;
    return p ? p.length : 1;
  }
  return a.length && (n.itemName = a), o.length && (n.seriesName = o), n;
}
function eC(e, t, r) {
  var n = {}, i = Ll(e);
  if (!i)
    return n;
  var a = t.sourceFormat, o = t.dimensionsDefine, s;
  (a === ge || a === Pe) && D(o, function(f, h) {
    (F(f) ? f.name : f) === "name" && (s = h);
  });
  var u = function() {
    for (var f = {}, h = {}, v = [], c = 0, d = Math.min(5, r); c < d; c++) {
      var y = Yp(t.data, a, t.seriesLayoutBy, o, t.startIndex, c);
      v.push(y);
      var p = y === pt.Not;
      if (p && f.v == null && c !== s && (f.v = c), (f.n == null || f.n === f.v || !p && v[f.n] === pt.Not) && (f.n = c), g(f) && v[f.n] !== pt.Not)
        return f;
      p || (y === pt.Might && h.v == null && c !== s && (h.v = c), (h.n == null || h.n === h.v) && (h.n = c));
    }
    function g(_) {
      return _.v != null && _.n != null;
    }
    return g(f) ? f : g(h) ? h : null;
  }();
  if (u) {
    n.value = [u.v];
    var l = s ?? u.n;
    n.itemName = [l], n.seriesName = [l];
  }
  return n;
}
function Ll(e) {
  var t = e.get("data", !0);
  if (!t)
    return _o(e.ecModel, "dataset", {
      index: e.get("datasetIndex", !0),
      id: e.get("datasetId", !0)
    }, Ir).models[0];
}
function tw(e) {
  return !e.get("transform", !0) && !e.get("fromTransformResult", !0) ? [] : _o(e.ecModel, "dataset", {
    index: e.get("fromDatasetIndex", !0),
    id: e.get("fromDatasetId", !0)
  }, Ir).models;
}
function Wp(e, t) {
  return Yp(e.data, e.sourceFormat, e.seriesLayoutBy, e.dimensionsDefine, e.startIndex, t);
}
function Yp(e, t, r, n, i, a) {
  var o, s = 5;
  if (bt(e))
    return pt.Not;
  var u, l;
  if (n) {
    var f = n[a];
    F(f) ? (u = f.name, l = f.type) : V(f) && (u = f);
  }
  if (l != null)
    return l === "ordinal" ? pt.Must : pt.Not;
  if (t === Bt) {
    var h = e;
    if (r === On) {
      for (var v = h[a], c = 0; c < (v || []).length && c < s; c++)
        if ((o = S(v[i + c])) != null)
          return o;
    } else
      for (var c = 0; c < h.length && c < s; c++) {
        var d = h[i + c];
        if (d && (o = S(d[a])) != null)
          return o;
      }
  } else if (t === ge) {
    var y = e;
    if (!u)
      return pt.Not;
    for (var c = 0; c < y.length && c < s; c++) {
      var p = y[c];
      if (p && (o = S(p[u])) != null)
        return o;
    }
  } else if (t === Pe) {
    var g = e;
    if (!u)
      return pt.Not;
    var v = g[u];
    if (!v || bt(v))
      return pt.Not;
    for (var c = 0; c < v.length && c < s; c++)
      if ((o = S(v[c])) != null)
        return o;
  } else if (t === oe)
    for (var _ = e, c = 0; c < _.length && c < s; c++) {
      var p = _[c], m = Fi(p);
      if (!L(m))
        return pt.Not;
      if ((o = S(m[a])) != null)
        return o;
    }
  function S(b) {
    var w = V(b);
    if (b != null && Number.isFinite(Number(b)) && b !== "")
      return w ? pt.Might : pt.Not;
    if (w && b !== "-")
      return pt.Must;
  }
  return pt.Not;
}
var ew = W();
function rw(e, t, r) {
  var n = ew.get(t);
  if (!n)
    return r;
  var i = n(e);
  if (!i)
    return r;
  if (process.env.NODE_ENV !== "production")
    for (var a = 0; a < i.length; a++)
      U(Dn(i[a]));
  return r.concat(i);
}
var Uh = Pt();
Pt();
var kl = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getColorFromPalette = function(t, r, n) {
      var i = xt(this.get("color", !0)), a = this.get("colorLayer", !0);
      return iw(this, Uh, i, a, t, r, n);
    }, e.prototype.clearColorPalette = function() {
      aw(this, Uh);
    }, e;
  }()
);
function nw(e, t) {
  for (var r = e.length, n = 0; n < r; n++)
    if (e[n].length > t)
      return e[n];
  return e[r - 1];
}
function iw(e, t, r, n, i, a, o) {
  a = a || e;
  var s = t(a), u = s.paletteIdx || 0, l = s.paletteNameMap = s.paletteNameMap || {};
  if (l.hasOwnProperty(i))
    return l[i];
  var f = o == null || !n ? r : nw(n, o);
  if (f = f || r, !(!f || !f.length)) {
    var h = f[u];
    return i && (l[i] = h), s.paletteIdx = (u + 1) % f.length, h;
  }
}
function aw(e, t) {
  t(e).paletteIdx = 0, t(e).paletteNameMap = {};
}
var fa, qn, Wh, Fs = "\0_ec_inner", Yh = 1, ow = {
  grid: "GridComponent",
  polar: "PolarComponent",
  geo: "GeoComponent",
  singleAxis: "SingleAxisComponent",
  parallel: "ParallelComponent",
  calendar: "CalendarComponent",
  graphic: "GraphicComponent",
  toolbox: "ToolboxComponent",
  tooltip: "TooltipComponent",
  axisPointer: "AxisPointerComponent",
  brush: "BrushComponent",
  title: "TitleComponent",
  timeline: "TimelineComponent",
  markPoint: "MarkPointComponent",
  markLine: "MarkLineComponent",
  markArea: "MarkAreaComponent",
  legend: "LegendComponent",
  dataZoom: "DataZoomComponent",
  visualMap: "VisualMapComponent",
  // aria: 'AriaComponent',
  // dataset: 'DatasetComponent',
  // Dependencies
  xAxis: "GridComponent",
  yAxis: "GridComponent",
  angleAxis: "PolarComponent",
  radiusAxis: "PolarComponent"
}, sw = {
  line: "LineChart",
  bar: "BarChart",
  pie: "PieChart",
  scatter: "ScatterChart",
  radar: "RadarChart",
  map: "MapChart",
  tree: "TreeChart",
  treemap: "TreemapChart",
  graph: "GraphChart",
  gauge: "GaugeChart",
  funnel: "FunnelChart",
  parallel: "ParallelChart",
  sankey: "SankeyChart",
  boxplot: "BoxplotChart",
  candlestick: "CandlestickChart",
  effectScatter: "EffectScatterChart",
  lines: "LinesChart",
  heatmap: "HeatmapChart",
  pictorialBar: "PictorialBarChart",
  themeRiver: "ThemeRiverChart",
  sunburst: "SunburstChart",
  custom: "CustomChart"
}, Ka = {};
function uw(e) {
  D(e, function(t, r) {
    if (!J.hasClass(r)) {
      var n = ow[r];
      n && !Ka[n] && (Tt("Component " + r + ` is used but not imported.
import { ` + n + ` } from 'echarts/components';
echarts.use([` + n + "]);"), Ka[n] = !0);
    }
  });
}
var Fl = (
  /** @class */
  function(e) {
    qt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t.prototype.init = function(r, n, i, a, o, s) {
      a = a || {}, this.option = null, this._theme = new vt(a), this._locale = new vt(o), this._optionManager = s;
    }, t.prototype.setOption = function(r, n, i) {
      process.env.NODE_ENV !== "production" && (U(r != null, "option is null/undefined"), U(r[Fs] !== Yh, "please use chart.getOption()"));
      var a = $h(n);
      this._optionManager.setOption(r, i, a), this._resetOption(null, a);
    }, t.prototype.resetOption = function(r, n) {
      return this._resetOption(r, $h(n));
    }, t.prototype._resetOption = function(r, n) {
      var i = !1, a = this._optionManager;
      if (!r || r === "recreate") {
        var o = a.mountOption(r === "recreate");
        process.env.NODE_ENV !== "production" && uw(o), !this.option || r === "recreate" ? Wh(this, o) : (this.restoreData(), this._mergeOption(o, n)), i = !0;
      }
      if ((r === "timeline" || r === "media") && this.restoreData(), !r || r === "recreate" || r === "timeline") {
        var s = a.getTimelineOption(this);
        s && (i = !0, this._mergeOption(s, n));
      }
      if (!r || r === "recreate" || r === "media") {
        var u = a.getMediaOption(this);
        u.length && D(u, function(l) {
          i = !0, this._mergeOption(l, n);
        }, this);
      }
      return i;
    }, t.prototype.mergeOption = function(r) {
      this._mergeOption(r, null);
    }, t.prototype._mergeOption = function(r, n) {
      var i = this.option, a = this._componentsMap, o = this._componentsCount, s = [], u = W(), l = n && n.replaceMergeMainTypeMap;
      QS(this), D(r, function(h, v) {
        h != null && (J.hasClass(v) ? v && (s.push(v), u.set(v, !0)) : i[v] = i[v] == null ? j(h) : ut(i[v], h, !0));
      }), l && l.each(function(h, v) {
        J.hasClass(v) && !u.get(v) && (s.push(v), u.set(v, !0));
      }), J.topologicalTravel(s, J.getAllClassMainTypes(), f, this);
      function f(h) {
        var v = rw(this, h, xt(r[h])), c = a.get(h), d = (
          // `!oldCmptList` means init. See the comment in `mappingToExists`
          c ? l && l.get(h) ? "replaceMerge" : "normalMerge" : "replaceAll"
        ), y = am(c, v, d);
        cm(y, h, J), i[h] = null, a.set(h, null), o.set(h, 0);
        var p = [], g = [], _ = 0, m, S;
        D(y, function(b, w) {
          var T = b.existing, E = b.newOption;
          if (!E)
            T && (T.mergeOption({}, this), T.optionUpdated({}, !1));
          else {
            var M = h === "series", C = J.getClass(
              h,
              b.keyInfo.subType,
              !M
              // Give a more detailed warn later if series don't exists
            );
            if (!C) {
              if (process.env.NODE_ENV !== "production") {
                var x = b.keyInfo.subType, O = sw[x];
                Ka[x] || (Ka[x] = !0, Tt(O ? "Series " + x + ` is used but not imported.
import { ` + O + ` } from 'echarts/charts';
echarts.use([` + O + "]);" : "Unknown series " + x));
              }
              return;
            }
            if (h === "tooltip") {
              if (m) {
                process.env.NODE_ENV !== "production" && (S || (te("Currently only one tooltip component is allowed."), S = !0));
                return;
              }
              m = !0;
            }
            if (T && T.constructor === C)
              T.name = b.keyInfo.name, T.mergeOption(E, this), T.optionUpdated(E, !1);
            else {
              var R = A({
                componentIndex: w
              }, b.keyInfo);
              T = new C(E, this, this, R), A(T, R), b.brandNew && (T.__requireNewView = !0), T.init(E, this, this), T.optionUpdated(null, !0);
            }
          }
          T ? (p.push(T.option), g.push(T), _++) : (p.push(void 0), g.push(void 0));
        }, this), i[h] = p, a.set(h, g), o.set(h, _), h === "series" && fa(this);
      }
      this._seriesIndices || fa(this);
    }, t.prototype.getOption = function() {
      var r = j(this.option);
      return D(r, function(n, i) {
        if (J.hasClass(i)) {
          for (var a = xt(n), o = a.length, s = !1, u = o - 1; u >= 0; u--)
            a[u] && !Dn(a[u]) ? s = !0 : (a[u] = null, !s && o--);
          a.length = o, r[i] = a;
        }
      }), delete r[Fs], r;
    }, t.prototype.getTheme = function() {
      return this._theme;
    }, t.prototype.getLocaleModel = function() {
      return this._locale;
    }, t.prototype.setUpdatePayload = function(r) {
      this._payload = r;
    }, t.prototype.getUpdatePayload = function() {
      return this._payload;
    }, t.prototype.getComponent = function(r, n) {
      var i = this._componentsMap.get(r);
      if (i) {
        var a = i[n || 0];
        if (a)
          return a;
        if (n == null) {
          for (var o = 0; o < i.length; o++)
            if (i[o])
              return i[o];
        }
      }
    }, t.prototype.queryComponents = function(r) {
      var n = r.mainType;
      if (!n)
        return [];
      var i = r.index, a = r.id, o = r.name, s = this._componentsMap.get(n);
      if (!s || !s.length)
        return [];
      var u;
      return i != null ? (u = [], D(xt(i), function(l) {
        s[l] && u.push(s[l]);
      })) : a != null ? u = qh("id", a, s) : o != null ? u = qh("name", o, s) : u = ct(s, function(l) {
        return !!l;
      }), Xh(u, r);
    }, t.prototype.findComponents = function(r) {
      var n = r.query, i = r.mainType, a = s(n), o = a ? this.queryComponents(a) : ct(this._componentsMap.get(i), function(l) {
        return !!l;
      });
      return u(Xh(o, r));
      function s(l) {
        var f = i + "Index", h = i + "Id", v = i + "Name";
        return l && (l[f] != null || l[h] != null || l[v] != null) ? {
          mainType: i,
          // subType will be filtered finally.
          index: l[f],
          id: l[h],
          name: l[v]
        } : null;
      }
      function u(l) {
        return r.filter ? ct(l, r.filter) : l;
      }
    }, t.prototype.eachComponent = function(r, n, i) {
      var a = this._componentsMap;
      if (X(r)) {
        var o = n, s = r;
        a.each(function(h, v) {
          for (var c = 0; h && c < h.length; c++) {
            var d = h[c];
            d && s.call(o, v, d, d.componentIndex);
          }
        });
      } else
        for (var u = V(r) ? a.get(r) : F(r) ? this.findComponents(r) : null, l = 0; u && l < u.length; l++) {
          var f = u[l];
          f && n.call(i, f, f.componentIndex);
        }
    }, t.prototype.getSeriesByName = function(r) {
      var n = Ce(r, null);
      return ct(this._componentsMap.get("series"), function(i) {
        return !!i && n != null && i.name === n;
      });
    }, t.prototype.getSeriesByIndex = function(r) {
      return this._componentsMap.get("series")[r];
    }, t.prototype.getSeriesByType = function(r) {
      return ct(this._componentsMap.get("series"), function(n) {
        return !!n && n.subType === r;
      });
    }, t.prototype.getSeries = function() {
      return ct(this._componentsMap.get("series"), function(r) {
        return !!r;
      });
    }, t.prototype.getSeriesCount = function() {
      return this._componentsCount.get("series");
    }, t.prototype.eachSeries = function(r, n) {
      qn(this), D(this._seriesIndices, function(i) {
        var a = this._componentsMap.get("series")[i];
        r.call(n, a, i);
      }, this);
    }, t.prototype.eachRawSeries = function(r, n) {
      D(this._componentsMap.get("series"), function(i) {
        i && r.call(n, i, i.componentIndex);
      });
    }, t.prototype.eachSeriesByType = function(r, n, i) {
      qn(this), D(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        o.subType === r && n.call(i, o, a);
      }, this);
    }, t.prototype.eachRawSeriesByType = function(r, n, i) {
      return D(this.getSeriesByType(r), n, i);
    }, t.prototype.isSeriesFiltered = function(r) {
      return qn(this), this._seriesIndicesMap.get(r.componentIndex) == null;
    }, t.prototype.getCurrentSeriesIndices = function() {
      return (this._seriesIndices || []).slice();
    }, t.prototype.filterSeries = function(r, n) {
      qn(this);
      var i = [];
      D(this._seriesIndices, function(a) {
        var o = this._componentsMap.get("series")[a];
        r.call(n, o, a) && i.push(a);
      }, this), this._seriesIndices = i, this._seriesIndicesMap = W(i);
    }, t.prototype.restoreData = function(r) {
      fa(this);
      var n = this._componentsMap, i = [];
      n.each(function(a, o) {
        J.hasClass(o) && i.push(o);
      }), J.topologicalTravel(i, J.getAllClassMainTypes(), function(a) {
        D(n.get(a), function(o) {
          o && (a !== "series" || !lw(o, r)) && o.restoreData();
        });
      });
    }, t.internalField = function() {
      fa = function(r) {
        var n = r._seriesIndices = [];
        D(r._componentsMap.get("series"), function(i) {
          i && n.push(i.componentIndex);
        }), r._seriesIndicesMap = W(n);
      }, qn = function(r) {
        if (process.env.NODE_ENV !== "production" && !r._seriesIndices)
          throw new Error("Option should contains series.");
      }, Wh = function(r, n) {
        r.option = {}, r.option[Fs] = Yh, r._componentsMap = W({
          series: []
        }), r._componentsCount = W();
        var i = n.aria;
        F(i) && i.enabled == null && (i.enabled = !0), fw(n, r._theme.option), ut(n, KS, !1), r._mergeOption(n, null);
      };
    }(), t;
  }(vt)
);
function lw(e, t) {
  if (t) {
    var r = t.seriesIndex, n = t.seriesId, i = t.seriesName;
    return r != null && e.componentIndex !== r || n != null && e.id !== n || i != null && e.name !== i;
  }
}
function fw(e, t) {
  var r = e.color && !e.colorLayer;
  D(t, function(n, i) {
    i === "colorLayer" && r || J.hasClass(i) || (typeof n == "object" ? e[i] = e[i] ? ut(e[i], n, !1) : j(n) : e[i] == null && (e[i] = n));
  });
}
function qh(e, t, r) {
  if (L(t)) {
    var n = W();
    return D(t, function(a) {
      if (a != null) {
        var o = Ce(a, null);
        o != null && n.set(a, !0);
      }
    }), ct(r, function(a) {
      return a && n.get(a[e]);
    });
  } else {
    var i = Ce(t, null);
    return ct(r, function(a) {
      return a && i != null && a[e] === i;
    });
  }
}
function Xh(e, t) {
  return t.hasOwnProperty("subType") ? ct(e, function(r) {
    return r && r.subType === t.subType;
  }) : e;
}
function $h(e) {
  var t = W();
  return e && D(xt(e.replaceMerge), function(r) {
    process.env.NODE_ENV !== "production" && U(J.hasClass(r), '"' + r + '" is not valid component main type in "replaceMerge"'), t.set(r, !0);
  }), {
    replaceMergeMainTypeMap: t
  };
}
pe(Fl, kl);
var hw = [
  "getDom",
  "getZr",
  "getWidth",
  "getHeight",
  "getDevicePixelRatio",
  "dispatchAction",
  "isSSR",
  "isDisposed",
  "on",
  "off",
  "getDataURL",
  "getConnectedDataURL",
  // 'getModel',
  "getOption",
  // 'getViewOfComponentModel',
  // 'getViewOfSeriesModel',
  "getId",
  "updateLabelLayout"
], qp = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      D(hw, function(r) {
        this[r] = wt(t[r], t);
      }, this);
    }
    return e;
  }()
), Bs = {}, Vo = (
  /** @class */
  function() {
    function e() {
      this._coordinateSystems = [];
    }
    return e.prototype.create = function(t, r) {
      var n = [];
      D(Bs, function(i, a) {
        var o = i.create(t, r);
        n = n.concat(o || []);
      }), this._coordinateSystems = n;
    }, e.prototype.update = function(t, r) {
      D(this._coordinateSystems, function(n) {
        n.update && n.update(t, r);
      });
    }, e.prototype.getCoordinateSystems = function() {
      return this._coordinateSystems.slice();
    }, e.register = function(t, r) {
      Bs[t] = r;
    }, e.get = function(t) {
      return Bs[t];
    }, e;
  }()
), cw = /^(min|max)?(.+)$/, vw = (
  /** @class */
  function() {
    function e(t) {
      this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t;
    }
    return e.prototype.setOption = function(t, r, n) {
      t && (D(xt(t.series), function(o) {
        o && o.data && bt(o.data) && Ba(o.data);
      }), D(xt(t.dataset), function(o) {
        o && o.source && bt(o.source) && Ba(o.source);
      })), t = j(t);
      var i = this._optionBackup, a = dw(t, r, !i);
      this._newBaseOption = a.baseOption, i ? (a.timelineOptions.length && (i.timelineOptions = a.timelineOptions), a.mediaList.length && (i.mediaList = a.mediaList), a.mediaDefault && (i.mediaDefault = a.mediaDefault)) : this._optionBackup = a;
    }, e.prototype.mountOption = function(t) {
      var r = this._optionBackup;
      return this._timelineOptions = r.timelineOptions, this._mediaList = r.mediaList, this._mediaDefault = r.mediaDefault, this._currentMediaIndices = [], j(t ? r.baseOption : this._newBaseOption);
    }, e.prototype.getTimelineOption = function(t) {
      var r, n = this._timelineOptions;
      if (n.length) {
        var i = t.getComponent("timeline");
        i && (r = j(
          // FIXME:TS as TimelineModel or quivlant interface
          n[i.getCurrentIndex()]
        ));
      }
      return r;
    }, e.prototype.getMediaOption = function(t) {
      var r = this._api.getWidth(), n = this._api.getHeight(), i = this._mediaList, a = this._mediaDefault, o = [], s = [];
      if (!i.length && !a)
        return s;
      for (var u = 0, l = i.length; u < l; u++)
        pw(i[u].query, r, n) && o.push(u);
      return !o.length && a && (o = [-1]), o.length && !yw(o, this._currentMediaIndices) && (s = k(o, function(f) {
        return j(f === -1 ? a.option : i[f].option);
      })), this._currentMediaIndices = o, s;
    }, e;
  }()
);
function dw(e, t, r) {
  var n = [], i, a, o = e.baseOption, s = e.timeline, u = e.options, l = e.media, f = !!e.media, h = !!(u || s || o && o.timeline);
  o ? (a = o, a.timeline || (a.timeline = s)) : ((h || f) && (e.options = e.media = null), a = e), f && (L(l) ? D(l, function(c) {
    process.env.NODE_ENV !== "production" && c && !c.option && F(c.query) && F(c.query.option) && Tt("Illegal media option. Must be like { media: [ { query: {}, option: {} } ] }"), c && c.option && (c.query ? n.push(c) : i || (i = c));
  }) : process.env.NODE_ENV !== "production" && Tt("Illegal media option. Must be an array. Like { media: [ {...}, {...} ] }")), v(a), D(u, function(c) {
    return v(c);
  }), D(n, function(c) {
    return v(c.option);
  });
  function v(c) {
    D(t, function(d) {
      d(c, r);
    });
  }
  return {
    baseOption: a,
    timelineOptions: u || [],
    mediaDefault: i,
    mediaList: n
  };
}
function pw(e, t, r) {
  var n = {
    width: t,
    height: r,
    aspectratio: t / r
    // lower case for convenience.
  }, i = !0;
  return D(e, function(a, o) {
    var s = o.match(cw);
    if (!(!s || !s[1] || !s[2])) {
      var u = s[1], l = s[2].toLowerCase();
      gw(n[l], a, u) || (i = !1);
    }
  }), i;
}
function gw(e, t, r) {
  return r === "min" ? e >= t : r === "max" ? e <= t : e === t;
}
function yw(e, t) {
  return e.join(",") === t.join(",");
}
var $t = D, Pi = F, Zh = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
function Vs(e) {
  var t = e && e.itemStyle;
  if (t)
    for (var r = 0, n = Zh.length; r < n; r++) {
      var i = Zh[r], a = t.normal, o = t.emphasis;
      a && a[i] && (process.env.NODE_ENV !== "production" && ft("itemStyle.normal." + i, i), e[i] = e[i] || {}, e[i].normal ? ut(e[i].normal, a[i]) : e[i].normal = a[i], a[i] = null), o && o[i] && (process.env.NODE_ENV !== "production" && ft("itemStyle.emphasis." + i, "emphasis." + i), e[i] = e[i] || {}, e[i].emphasis ? ut(e[i].emphasis, o[i]) : e[i].emphasis = o[i], o[i] = null);
    }
}
function St(e, t, r) {
  if (e && e[t] && (e[t].normal || e[t].emphasis)) {
    var n = e[t].normal, i = e[t].emphasis;
    n && (process.env.NODE_ENV !== "production" && de("'normal' hierarchy in " + t + " has been removed since 4.0. All style properties are configured in " + t + " directly now."), r ? (e[t].normal = e[t].emphasis = null, ht(e[t], n)) : e[t] = n), i && (process.env.NODE_ENV !== "production" && de(t + ".emphasis has been changed to emphasis." + t + " since 4.0"), e.emphasis = e.emphasis || {}, e.emphasis[t] = i, i.focus && (e.emphasis.focus = i.focus), i.blurScope && (e.emphasis.blurScope = i.blurScope));
  }
}
function ui(e) {
  St(e, "itemStyle"), St(e, "lineStyle"), St(e, "areaStyle"), St(e, "label"), St(e, "labelLine"), St(e, "upperLabel"), St(e, "edgeLabel");
}
function st(e, t) {
  var r = Pi(e) && e[t], n = Pi(r) && r.textStyle;
  if (n) {
    process.env.NODE_ENV !== "production" && de("textStyle hierarchy in " + t + " has been removed since 4.0. All textStyle properties are configured in " + t + " directly now.");
    for (var i = 0, a = jf.length; i < a; i++) {
      var o = jf[i];
      n.hasOwnProperty(o) && (r[o] = n[o]);
    }
  }
}
function Kt(e) {
  e && (ui(e), st(e, "label"), e.emphasis && st(e.emphasis, "label"));
}
function _w(e) {
  if (Pi(e)) {
    Vs(e), ui(e), st(e, "label"), st(e, "upperLabel"), st(e, "edgeLabel"), e.emphasis && (st(e.emphasis, "label"), st(e.emphasis, "upperLabel"), st(e.emphasis, "edgeLabel"));
    var t = e.markPoint;
    t && (Vs(t), Kt(t));
    var r = e.markLine;
    r && (Vs(r), Kt(r));
    var n = e.markArea;
    n && Kt(n);
    var i = e.data;
    if (e.type === "graph") {
      i = i || e.nodes;
      var a = e.links || e.edges;
      if (a && !bt(a))
        for (var o = 0; o < a.length; o++)
          Kt(a[o]);
      D(e.categories, function(l) {
        ui(l);
      });
    }
    if (i && !bt(i))
      for (var o = 0; o < i.length; o++)
        Kt(i[o]);
    if (t = e.markPoint, t && t.data)
      for (var s = t.data, o = 0; o < s.length; o++)
        Kt(s[o]);
    if (r = e.markLine, r && r.data)
      for (var u = r.data, o = 0; o < u.length; o++)
        L(u[o]) ? (Kt(u[o][0]), Kt(u[o][1])) : Kt(u[o]);
    e.type === "gauge" ? (st(e, "axisLabel"), st(e, "title"), st(e, "detail")) : e.type === "treemap" ? (St(e.breadcrumb, "itemStyle"), D(e.levels, function(l) {
      ui(l);
    })) : e.type === "tree" && ui(e.leaves);
  }
}
function ke(e) {
  return L(e) ? e : e ? [e] : [];
}
function jh(e) {
  return (L(e) ? e[0] : e) || {};
}
function mw(e, t) {
  $t(ke(e.series), function(n) {
    Pi(n) && _w(n);
  });
  var r = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
  t && r.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), $t(r, function(n) {
    $t(ke(e[n]), function(i) {
      i && (st(i, "axisLabel"), st(i.axisPointer, "label"));
    });
  }), $t(ke(e.parallel), function(n) {
    var i = n && n.parallelAxisDefault;
    st(i, "axisLabel"), st(i && i.axisPointer, "label");
  }), $t(ke(e.calendar), function(n) {
    St(n, "itemStyle"), st(n, "dayLabel"), st(n, "monthLabel"), st(n, "yearLabel");
  }), $t(ke(e.radar), function(n) {
    st(n, "name"), n.name && n.axisName == null && (n.axisName = n.name, delete n.name, process.env.NODE_ENV !== "production" && de("name property in radar component has been changed to axisName")), n.nameGap != null && n.axisNameGap == null && (n.axisNameGap = n.nameGap, delete n.nameGap, process.env.NODE_ENV !== "production" && de("nameGap property in radar component has been changed to axisNameGap")), process.env.NODE_ENV !== "production" && $t(n.indicator, function(i) {
      i.text && ft("text", "name", "radar.indicator");
    });
  }), $t(ke(e.geo), function(n) {
    Pi(n) && (Kt(n), $t(ke(n.regions), function(i) {
      Kt(i);
    }));
  }), $t(ke(e.timeline), function(n) {
    Kt(n), St(n, "label"), St(n, "itemStyle"), St(n, "controlStyle", !0);
    var i = n.data;
    L(i) && D(i, function(a) {
      F(a) && (St(a, "label"), St(a, "itemStyle"));
    });
  }), $t(ke(e.toolbox), function(n) {
    St(n, "iconStyle"), $t(n.feature, function(i) {
      St(i, "iconStyle");
    });
  }), st(jh(e.axisPointer), "label"), st(jh(e.tooltip).axisPointer, "label");
}
function Sw(e, t) {
  for (var r = t.split(","), n = e, i = 0; i < r.length && (n = n && n[r[i]], n != null); i++)
    ;
  return n;
}
function ww(e, t, r, n) {
  for (var i = t.split(","), a = e, o, s = 0; s < i.length - 1; s++)
    o = i[s], a[o] == null && (a[o] = {}), a = a[o];
  a[i[s]] == null && (a[i[s]] = r);
}
function Kh(e) {
  e && D(bw, function(t) {
    t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]]);
  });
}
var bw = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], Tw = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], zs = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]];
function Xn(e) {
  var t = e && e.itemStyle;
  if (t)
    for (var r = 0; r < zs.length; r++) {
      var n = zs[r][1], i = zs[r][0];
      t[n] != null && (t[i] = t[n], process.env.NODE_ENV !== "production" && ft(n, i));
    }
}
function Qh(e) {
  e && e.alignTo === "edge" && e.margin != null && e.edgeDistance == null && (process.env.NODE_ENV !== "production" && ft("label.margin", "label.edgeDistance", "pie"), e.edgeDistance = e.margin);
}
function Jh(e) {
  e && e.downplay && !e.blur && (e.blur = e.downplay, process.env.NODE_ENV !== "production" && ft("downplay", "blur", "sunburst"));
}
function Dw(e) {
  e && e.focusNodeAdjacency != null && (e.emphasis = e.emphasis || {}, e.emphasis.focus == null && (process.env.NODE_ENV !== "production" && ft("focusNodeAdjacency", "emphasis: { focus: 'adjacency'}", "graph/sankey"), e.emphasis.focus = "adjacency"));
}
function Xp(e, t) {
  if (e)
    for (var r = 0; r < e.length; r++)
      t(e[r]), e[r] && Xp(e[r].children, t);
}
function $p(e, t) {
  mw(e, t), e.series = xt(e.series), D(e.series, function(r) {
    if (F(r)) {
      var n = r.type;
      if (n === "line")
        r.clipOverflow != null && (r.clip = r.clipOverflow, process.env.NODE_ENV !== "production" && ft("clipOverflow", "clip", "line"));
      else if (n === "pie" || n === "gauge") {
        r.clockWise != null && (r.clockwise = r.clockWise, process.env.NODE_ENV !== "production" && ft("clockWise", "clockwise")), Qh(r.label);
        var i = r.data;
        if (i && !bt(i))
          for (var a = 0; a < i.length; a++)
            Qh(i[a]);
        r.hoverOffset != null && (r.emphasis = r.emphasis || {}, (r.emphasis.scaleSize = null) && (process.env.NODE_ENV !== "production" && ft("hoverOffset", "emphasis.scaleSize"), r.emphasis.scaleSize = r.hoverOffset));
      } else if (n === "gauge") {
        var o = Sw(r, "pointer.color");
        o != null && ww(r, "itemStyle.color", o);
      } else if (n === "bar") {
        Xn(r), Xn(r.backgroundStyle), Xn(r.emphasis);
        var i = r.data;
        if (i && !bt(i))
          for (var a = 0; a < i.length; a++)
            typeof i[a] == "object" && (Xn(i[a]), Xn(i[a] && i[a].emphasis));
      } else if (n === "sunburst") {
        var s = r.highlightPolicy;
        s && (r.emphasis = r.emphasis || {}, r.emphasis.focus || (r.emphasis.focus = s, process.env.NODE_ENV !== "production" && ft("highlightPolicy", "emphasis.focus", "sunburst"))), Jh(r), Xp(r.data, Jh);
      } else n === "graph" || n === "sankey" ? Dw(r) : n === "map" && (r.mapType && !r.map && (process.env.NODE_ENV !== "production" && ft("mapType", "map", "map"), r.map = r.mapType), r.mapLocation && (process.env.NODE_ENV !== "production" && de("`mapLocation` is not used anymore."), ht(r, r.mapLocation)));
      r.hoverAnimation != null && (r.emphasis = r.emphasis || {}, r.emphasis && r.emphasis.scale == null && (process.env.NODE_ENV !== "production" && ft("hoverAnimation", "emphasis.scale"), r.emphasis.scale = r.hoverAnimation)), Kh(r);
    }
  }), e.dataRange && (e.visualMap = e.dataRange), D(Tw, function(r) {
    var n = e[r];
    n && (L(n) || (n = [n]), D(n, function(i) {
      Kh(i);
    }));
  });
}
function Mw(e) {
  var t = W();
  e.eachSeries(function(r) {
    var n = r.get("stack");
    if (n) {
      var i = t.get(n) || t.set(n, []), a = r.getData(), o = {
        // Used for calculate axis extent automatically.
        // TODO: Type getCalculationInfo return more specific type?
        stackResultDimension: a.getCalculationInfo("stackResultDimension"),
        stackedOverDimension: a.getCalculationInfo("stackedOverDimension"),
        stackedDimension: a.getCalculationInfo("stackedDimension"),
        stackedByDimension: a.getCalculationInfo("stackedByDimension"),
        isStackedByIndex: a.getCalculationInfo("isStackedByIndex"),
        data: a,
        seriesModel: r
      };
      if (!o.stackedDimension || !(o.isStackedByIndex || o.stackedByDimension))
        return;
      i.length && a.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o);
    }
  }), t.each(Cw);
}
function Cw(e) {
  D(e, function(t, r) {
    var n = [], i = [NaN, NaN], a = [t.stackResultDimension, t.stackedOverDimension], o = t.data, s = t.isStackedByIndex, u = t.seriesModel.get("stackStrategy") || "samesign";
    o.modify(a, function(l, f, h) {
      var v = o.get(t.stackedDimension, h);
      if (isNaN(v))
        return i;
      var c, d;
      s ? d = o.getRawIndex(h) : c = o.get(t.stackedByDimension, h);
      for (var y = NaN, p = r - 1; p >= 0; p--) {
        var g = e[p];
        if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
          var _ = g.data.getByRawIndex(g.stackResultDimension, d);
          if (u === "all" || u === "positive" && _ > 0 || u === "negative" && _ < 0 || u === "samesign" && v >= 0 && _ > 0 || u === "samesign" && v <= 0 && _ < 0) {
            v = X_(v, _), y = _;
            break;
          }
        }
      }
      return n[0] = v, n[1] = y, n;
    });
  });
}
var zo = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.data = t.data || (t.sourceFormat === Pe ? {} : []), this.sourceFormat = t.sourceFormat || Gp, this.seriesLayoutBy = t.seriesLayoutBy || He, this.startIndex = t.startIndex || 0, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.metaRawOption = t.metaRawOption;
      var r = this.dimensionsDefine = t.dimensionsDefine;
      if (r)
        for (var n = 0; n < r.length; n++) {
          var i = r[n];
          i.type == null && Wp(this, n) === pt.Must && (i.type = "ordinal");
        }
    }
    return e;
  }()
);
function Bl(e) {
  return e instanceof zo;
}
function Uu(e, t, r) {
  r = r || jp(e);
  var n = t.seriesLayoutBy, i = xw(e, r, n, t.sourceHeader, t.dimensions), a = new zo({
    data: e,
    sourceFormat: r,
    seriesLayoutBy: n,
    dimensionsDefine: i.dimensionsDefine,
    startIndex: i.startIndex,
    dimensionsDetectedCount: i.dimensionsDetectedCount,
    metaRawOption: j(t)
  });
  return a;
}
function Zp(e) {
  return new zo({
    data: e,
    sourceFormat: bt(e) ? ze : oe
  });
}
function Ew(e) {
  return new zo({
    data: e.data,
    sourceFormat: e.sourceFormat,
    seriesLayoutBy: e.seriesLayoutBy,
    dimensionsDefine: j(e.dimensionsDefine),
    startIndex: e.startIndex,
    dimensionsDetectedCount: e.dimensionsDetectedCount
  });
}
function jp(e) {
  var t = Gp;
  if (bt(e))
    t = ze;
  else if (L(e)) {
    e.length === 0 && (t = Bt);
    for (var r = 0, n = e.length; r < n; r++) {
      var i = e[r];
      if (i != null) {
        if (L(i) || bt(i)) {
          t = Bt;
          break;
        } else if (F(i)) {
          t = ge;
          break;
        }
      }
    }
  } else if (F(e)) {
    for (var a in e)
      if (Ur(e, a) && Ot(e[a])) {
        t = Pe;
        break;
      }
  }
  return t;
}
function xw(e, t, r, n, i) {
  var a, o;
  if (!e)
    return {
      dimensionsDefine: tc(i),
      startIndex: o,
      dimensionsDetectedCount: a
    };
  if (t === Bt) {
    var s = e;
    n === "auto" || n == null ? ec(function(l) {
      l != null && l !== "-" && (V(l) ? o == null && (o = 1) : o = 0);
    }, r, s, 10) : o = lt(n) ? n : n ? 1 : 0, !i && o === 1 && (i = [], ec(function(l, f) {
      i[f] = l != null ? l + "" : "";
    }, r, s, 1 / 0)), a = i ? i.length : r === On ? s.length : s[0] ? s[0].length : null;
  } else if (t === ge)
    i || (i = Ow(e));
  else if (t === Pe)
    i || (i = [], D(e, function(l, f) {
      i.push(f);
    }));
  else if (t === oe) {
    var u = Fi(e[0]);
    a = L(u) && u.length || 1;
  } else t === ze && process.env.NODE_ENV !== "production" && U(!!i, "dimensions must be given if data is TypedArray.");
  return {
    startIndex: o,
    dimensionsDefine: tc(i),
    dimensionsDetectedCount: a
  };
}
function Ow(e) {
  for (var t = 0, r; t < e.length && !(r = e[t++]); )
    ;
  if (r)
    return at(r);
}
function tc(e) {
  if (e) {
    var t = W();
    return k(e, function(r, n) {
      r = F(r) ? r : {
        name: r
      };
      var i = {
        name: r.name,
        displayName: r.displayName,
        type: r.type
      };
      if (i.name == null)
        return i;
      i.name += "", i.displayName == null && (i.displayName = i.name);
      var a = t.get(i.name);
      return a ? i.name += "-" + a.count++ : t.set(i.name, {
        count: 1
      }), i;
    });
  }
}
function ec(e, t, r, n) {
  if (t === On)
    for (var i = 0; i < r.length && i < n; i++)
      e(r[i] ? r[i][0] : null, i);
  else
    for (var a = r[0] || [], i = 0; i < a.length && i < n; i++)
      e(a[i], i);
}
function Kp(e) {
  var t = e.sourceFormat;
  return t === ge || t === Pe;
}
var Er, xr, Or, rc, nc, Qp = (
  /** @class */
  function() {
    function e(t, r) {
      var n = Bl(t) ? t : Zp(t);
      this._source = n;
      var i = this._data = n.data;
      if (n.sourceFormat === ze) {
        if (process.env.NODE_ENV !== "production" && r == null)
          throw new Error("Typed array data must specify dimension size");
        this._offset = 0, this._dimSize = r, this._data = i;
      }
      nc(this, i, n);
    }
    return e.prototype.getSource = function() {
      return this._source;
    }, e.prototype.count = function() {
      return 0;
    }, e.prototype.getItem = function(t, r) {
    }, e.prototype.appendData = function(t) {
    }, e.prototype.clean = function() {
    }, e.protoInitialize = function() {
      var t = e.prototype;
      t.pure = !1, t.persistent = !0;
    }(), e.internalField = function() {
      var t;
      nc = function(o, s, u) {
        var l = u.sourceFormat, f = u.seriesLayoutBy, h = u.startIndex, v = u.dimensionsDefine, c = rc[Vl(l, f)];
        if (process.env.NODE_ENV !== "production" && U(c, "Invalide sourceFormat: " + l), A(o, c), l === ze)
          o.getItem = r, o.count = i, o.fillStorage = n;
        else {
          var d = Jp(l, f);
          o.getItem = wt(d, null, s, h, v);
          var y = tg(l, f);
          o.count = wt(y, null, s, h, v);
        }
      };
      var r = function(o, s) {
        o = o - this._offset, s = s || [];
        for (var u = this._data, l = this._dimSize, f = l * o, h = 0; h < l; h++)
          s[h] = u[f + h];
        return s;
      }, n = function(o, s, u, l) {
        for (var f = this._data, h = this._dimSize, v = 0; v < h; v++) {
          for (var c = l[v], d = c[0] == null ? 1 / 0 : c[0], y = c[1] == null ? -1 / 0 : c[1], p = s - o, g = u[v], _ = 0; _ < p; _++) {
            var m = f[_ * h + v];
            g[o + _] = m, m < d && (d = m), m > y && (y = m);
          }
          c[0] = d, c[1] = y;
        }
      }, i = function() {
        return this._data ? this._data.length / this._dimSize : 0;
      };
      rc = (t = {}, t[Bt + "_" + He] = {
        pure: !0,
        appendData: a
      }, t[Bt + "_" + On] = {
        pure: !0,
        appendData: function() {
          throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
        }
      }, t[ge] = {
        pure: !0,
        appendData: a
      }, t[Pe] = {
        pure: !0,
        appendData: function(o) {
          var s = this._data;
          D(o, function(u, l) {
            for (var f = s[l] || (s[l] = []), h = 0; h < (u || []).length; h++)
              f.push(u[h]);
          });
        }
      }, t[oe] = {
        appendData: a
      }, t[ze] = {
        persistent: !1,
        pure: !0,
        appendData: function(o) {
          process.env.NODE_ENV !== "production" && U(bt(o), "Added data must be TypedArray if data in initialization is TypedArray"), this._data = o;
        },
        // Clean self if data is already used.
        clean: function() {
          this._offset += this.count(), this._data = null;
        }
      }, t);
      function a(o) {
        for (var s = 0; s < o.length; s++)
          this._data.push(o[s]);
      }
    }(), e;
  }()
), ic = function(e, t, r, n) {
  return e[n];
}, Pw = (Er = {}, Er[Bt + "_" + He] = function(e, t, r, n) {
  return e[n + t];
}, Er[Bt + "_" + On] = function(e, t, r, n, i) {
  n += t;
  for (var a = i || [], o = e, s = 0; s < o.length; s++) {
    var u = o[s];
    a[s] = u ? u[n] : null;
  }
  return a;
}, Er[ge] = ic, Er[Pe] = function(e, t, r, n, i) {
  for (var a = i || [], o = 0; o < r.length; o++) {
    var s = r[o].name;
    if (process.env.NODE_ENV !== "production" && s == null)
      throw new Error();
    var u = e[s];
    a[o] = u ? u[n] : null;
  }
  return a;
}, Er[oe] = ic, Er);
function Jp(e, t) {
  var r = Pw[Vl(e, t)];
  return process.env.NODE_ENV !== "production" && U(r, 'Do not support get item on "' + e + '", "' + t + '".'), r;
}
var ac = function(e, t, r) {
  return e.length;
}, Rw = (xr = {}, xr[Bt + "_" + He] = function(e, t, r) {
  return Math.max(0, e.length - t);
}, xr[Bt + "_" + On] = function(e, t, r) {
  var n = e[0];
  return n ? Math.max(0, n.length - t) : 0;
}, xr[ge] = ac, xr[Pe] = function(e, t, r) {
  var n = r[0].name;
  if (process.env.NODE_ENV !== "production" && n == null)
    throw new Error();
  var i = e[n];
  return i ? i.length : 0;
}, xr[oe] = ac, xr);
function tg(e, t) {
  var r = Rw[Vl(e, t)];
  return process.env.NODE_ENV !== "production" && U(r, 'Do not support count on "' + e + '", "' + t + '".'), r;
}
var Hs = function(e, t, r) {
  return e[t];
}, Iw = (Or = {}, Or[Bt] = Hs, Or[ge] = function(e, t, r) {
  return e[r];
}, Or[Pe] = Hs, Or[oe] = function(e, t, r) {
  var n = Fi(e);
  return n instanceof Array ? n[t] : n;
}, Or[ze] = Hs, Or);
function eg(e) {
  var t = Iw[e];
  return process.env.NODE_ENV !== "production" && U(t, 'Do not support get value on "' + e + '".'), t;
}
function Vl(e, t) {
  return e === Bt ? e + "_" + t : e;
}
function Qa(e, t, r) {
  if (e) {
    var n = e.getRawDataItem(t);
    if (n != null) {
      var i = e.getStore(), a = i.getSource().sourceFormat;
      if (r != null) {
        var o = e.getDimensionIndex(r), s = i.getDimensionProperty(o);
        return eg(a)(n, o, s);
      } else {
        var u = n;
        return a === oe && (u = Fi(n)), u;
      }
    }
  }
}
var Aw = /\{@(.+?)\}/g, Nw = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getDataParams = function(t, r) {
      var n = this.getData(r), i = this.getRawValue(t, r), a = n.getRawIndex(t), o = n.getName(t), s = n.getRawDataItem(t), u = n.getItemVisual(t, "style"), l = u && u[n.getItemVisual(t, "drawType") || "fill"], f = u && u.stroke, h = this.mainType, v = h === "series", c = n.userOutput && n.userOutput.get();
      return {
        componentType: h,
        componentSubType: this.subType,
        componentIndex: this.componentIndex,
        seriesType: v ? this.subType : null,
        seriesIndex: this.seriesIndex,
        seriesId: v ? this.id : null,
        seriesName: v ? this.name : null,
        name: o,
        dataIndex: a,
        data: s,
        dataType: r,
        value: i,
        color: l,
        borderColor: f,
        dimensionNames: c ? c.fullDimensions : null,
        encode: c ? c.encode : null,
        // Param name list for mapping `a`, `b`, `c`, `d`, `e`
        $vars: ["seriesName", "name", "value"]
      };
    }, e.prototype.getFormattedLabel = function(t, r, n, i, a, o) {
      r = r || "normal";
      var s = this.getData(n), u = this.getDataParams(t, n);
      if (o && (u.value = o.interpolatedValue), i != null && L(u.value) && (u.value = u.value[i]), !a) {
        var l = s.getItemModel(t);
        a = l.get(r === "normal" ? ["label", "formatter"] : [r, "label", "formatter"]);
      }
      if (X(a))
        return u.status = r, u.dimensionIndex = i, a(u);
      if (V(a)) {
        var f = Bp(a, u);
        return f.replace(Aw, function(h, v) {
          var c = v.length, d = v;
          d.charAt(0) === "[" && d.charAt(c - 1) === "]" && (d = +d.slice(1, c - 1), process.env.NODE_ENV !== "production" && isNaN(d) && Tt("Invalide label formatter: @" + v + ", only support @[0], @[1], @[2], ..."));
          var y = Qa(s, t, d);
          if (o && L(o.interpolatedValue)) {
            var p = s.getDimensionIndex(d);
            p >= 0 && (y = o.interpolatedValue[p]);
          }
          return y != null ? y + "" : "";
        });
      }
    }, e.prototype.getRawValue = function(t, r) {
      return Qa(this.getData(r), t);
    }, e.prototype.formatTooltip = function(t, r, n) {
    }, e;
  }()
);
function rC(e) {
  var t, r;
  return F(e) ? e.type ? r = e : process.env.NODE_ENV !== "production" && console.warn("The return type of `formatTooltip` is not supported: " + Ua(e)) : t = e, {
    text: t,
    // markers: markers || markersExisting,
    frag: r
  };
}
function _i(e) {
  return new Lw(e);
}
var Lw = (
  /** @class */
  function() {
    function e(t) {
      t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0;
    }
    return e.prototype.perform = function(t) {
      var r = this._upstream, n = t && t.skip;
      if (this._dirty && r) {
        var i = this.context;
        i.data = i.outputData = r.context.outputData;
      }
      this.__pipeline && (this.__pipeline.currentTask = this);
      var a;
      this._plan && !n && (a = this._plan(this.context));
      var o = f(this._modBy), s = this._modDataCount || 0, u = f(t && t.modBy), l = t && t.modDataCount || 0;
      (o !== u || s !== l) && (a = "reset");
      function f(_) {
        return !(_ >= 1) && (_ = 1), _;
      }
      var h;
      (this._dirty || a === "reset") && (this._dirty = !1, h = this._doReset(n)), this._modBy = u, this._modDataCount = l;
      var v = t && t.step;
      if (r ? (process.env.NODE_ENV !== "production" && U(r._outputDueEnd != null), this._dueEnd = r._outputDueEnd) : (process.env.NODE_ENV !== "production" && U(!this._progress || this._count), this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
        var c = this._dueIndex, d = Math.min(v != null ? this._dueIndex + v : 1 / 0, this._dueEnd);
        if (!n && (h || c < d)) {
          var y = this._progress;
          if (L(y))
            for (var p = 0; p < y.length; p++)
              this._doProgress(y[p], c, d, u, l);
          else
            this._doProgress(y, c, d, u, l);
        }
        this._dueIndex = d;
        var g = this._settedOutputEnd != null ? this._settedOutputEnd : d;
        process.env.NODE_ENV !== "production" && U(g >= this._outputDueEnd), this._outputDueEnd = g;
      } else
        this._dueIndex = this._outputDueEnd = this._settedOutputEnd != null ? this._settedOutputEnd : this._dueEnd;
      return this.unfinished();
    }, e.prototype.dirty = function() {
      this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, e.prototype._doProgress = function(t, r, n, i, a) {
      oc.reset(r, n, i, a), this._callingProgress = t, this._callingProgress({
        start: r,
        end: n,
        count: n - r,
        next: oc.next
      }, this.context);
    }, e.prototype._doReset = function(t) {
      this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
      var r, n;
      !t && this._reset && (r = this._reset(this.context), r && r.progress && (n = r.forceFirstProgress, r = r.progress), L(r) && !r.length && (r = null)), this._progress = r, this._modBy = this._modDataCount = null;
      var i = this._downstream;
      return i && i.dirty(), n;
    }, e.prototype.unfinished = function() {
      return this._progress && this._dueIndex < this._dueEnd;
    }, e.prototype.pipe = function(t) {
      process.env.NODE_ENV !== "production" && U(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty());
    }, e.prototype.dispose = function() {
      this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0);
    }, e.prototype.getUpstream = function() {
      return this._upstream;
    }, e.prototype.getDownstream = function() {
      return this._downstream;
    }, e.prototype.setOutputEnd = function(t) {
      this._outputDueEnd = this._settedOutputEnd = t;
    }, e;
  }()
), oc = /* @__PURE__ */ function() {
  var e, t, r, n, i, a = {
    reset: function(u, l, f, h) {
      t = u, e = l, r = f, n = h, i = Math.ceil(n / r), a.next = r > 1 && n > 0 ? s : o;
    }
  };
  return a;
  function o() {
    return t < e ? t++ : null;
  }
  function s() {
    var u = t % i * r + Math.ceil(t / i), l = t >= e ? null : u < n ? u : t;
    return t++, l;
  }
}();
function Na(e, t) {
  var r = t && t.type;
  return r === "ordinal" ? e : (r === "time" && !lt(e) && e != null && e !== "-" && (e = +ie(e)), e == null || e === "" ? NaN : Number(e));
}
W({
  number: function(e) {
    return parseFloat(e);
  },
  time: function(e) {
    return +ie(e);
  },
  trim: function(e) {
    return V(e) ? Te(e) : e;
  }
});
var kw = (
  /** @class */
  function() {
    function e(t, r) {
      var n = t === "desc";
      this._resultLT = n ? 1 : -1, r == null && (r = n ? "min" : "max"), this._incomparable = r === "min" ? -1 / 0 : 1 / 0;
    }
    return e.prototype.evaluate = function(t, r) {
      var n = lt(t) ? t : Ei(t), i = lt(r) ? r : Ei(r), a = isNaN(n), o = isNaN(i);
      if (a && (n = this._incomparable), o && (i = this._incomparable), a && o) {
        var s = V(t), u = V(r);
        s && (n = u ? t : 0), u && (i = s ? r : 0);
      }
      return n < i ? this._resultLT : n > i ? -this._resultLT : 0;
    }, e;
  }()
), Fw = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getRawData = function() {
      throw new Error("not supported");
    }, e.prototype.getRawDataItem = function(t) {
      throw new Error("not supported");
    }, e.prototype.cloneRawData = function() {
    }, e.prototype.getDimensionInfo = function(t) {
    }, e.prototype.cloneAllDimensionInfo = function() {
    }, e.prototype.count = function() {
    }, e.prototype.retrieveValue = function(t, r) {
    }, e.prototype.retrieveValueFromItem = function(t, r) {
    }, e.prototype.convertValue = function(t, r) {
      return Na(t, r);
    }, e;
  }()
);
function Bw(e, t) {
  var r = new Fw(), n = e.data, i = r.sourceFormat = e.sourceFormat, a = e.startIndex, o = "";
  e.seriesLayoutBy !== He && (process.env.NODE_ENV !== "production" && (o = '`seriesLayoutBy` of upstream dataset can only be "column" in data transform.'), Gt(o));
  var s = [], u = {}, l = e.dimensionsDefine;
  if (l)
    D(l, function(y, p) {
      var g = y.name, _ = {
        index: p,
        name: g,
        displayName: y.displayName
      };
      if (s.push(_), g != null) {
        var m = "";
        Ur(u, g) && (process.env.NODE_ENV !== "production" && (m = 'dimension name "' + g + '" duplicated.'), Gt(m)), u[g] = _;
      }
    });
  else
    for (var f = 0; f < e.dimensionsDetectedCount; f++)
      s.push({
        index: f
      });
  var h = Jp(i, He);
  t.__isBuiltIn && (r.getRawDataItem = function(y) {
    return h(n, a, s, y);
  }, r.getRawData = wt(Vw, null, e)), r.cloneRawData = wt(zw, null, e);
  var v = tg(i, He);
  r.count = wt(v, null, n, a, s);
  var c = eg(i);
  r.retrieveValue = function(y, p) {
    var g = h(n, a, s, y);
    return d(g, p);
  };
  var d = r.retrieveValueFromItem = function(y, p) {
    if (y != null) {
      var g = s[p];
      if (g)
        return c(y, p, g.name);
    }
  };
  return r.getDimensionInfo = wt(Hw, null, s, u), r.cloneAllDimensionInfo = wt(Gw, null, s), r;
}
function Vw(e) {
  var t = e.sourceFormat;
  if (!zl(t)) {
    var r = "";
    process.env.NODE_ENV !== "production" && (r = "`getRawData` is not supported in source format " + t), Gt(r);
  }
  return e.data;
}
function zw(e) {
  var t = e.sourceFormat, r = e.data;
  if (!zl(t)) {
    var n = "";
    process.env.NODE_ENV !== "production" && (n = "`cloneRawData` is not supported in source format " + t), Gt(n);
  }
  if (t === Bt) {
    for (var i = [], a = 0, o = r.length; a < o; a++)
      i.push(r[a].slice());
    return i;
  } else if (t === ge) {
    for (var i = [], a = 0, o = r.length; a < o; a++)
      i.push(A({}, r[a]));
    return i;
  }
}
function Hw(e, t, r) {
  if (r != null) {
    if (lt(r) || !isNaN(r) && !Ur(t, r))
      return e[r];
    if (Ur(t, r))
      return t[r];
  }
}
function Gw(e) {
  return j(e);
}
var rg = W();
function Uw(e) {
  e = j(e);
  var t = e.type, r = "";
  t || (process.env.NODE_ENV !== "production" && (r = "Must have a `type` when `registerTransform`."), Gt(r));
  var n = t.split(":");
  n.length !== 2 && (process.env.NODE_ENV !== "production" && (r = 'Name must include namespace like "ns:regression".'), Gt(r));
  var i = !1;
  n[0] === "echarts" && (t = n[1], i = !0), e.__isBuiltIn = i, rg.set(t, e);
}
function Ww(e, t, r) {
  var n = xt(e), i = n.length, a = "";
  i || (process.env.NODE_ENV !== "production" && (a = "If `transform` declared, it should at least contain one transform."), Gt(a));
  for (var o = 0, s = i; o < s; o++) {
    var u = n[o];
    t = Yw(u, t, r, i === 1 ? null : o), o !== s - 1 && (t.length = Math.max(t.length, 1));
  }
  return t;
}
function Yw(e, t, r, n) {
  var i = "";
  t.length || (process.env.NODE_ENV !== "production" && (i = "Must have at least one upstream dataset."), Gt(i)), F(e) || (process.env.NODE_ENV !== "production" && (i = "transform declaration must be an object rather than " + typeof e + "."), Gt(i));
  var a = e.type, o = rg.get(a);
  o || (process.env.NODE_ENV !== "production" && (i = 'Can not find transform on type "' + a + '".'), Gt(i));
  var s = k(t, function(f) {
    return Bw(f, o);
  }), u = xt(o.transform({
    upstream: s[0],
    upstreamList: s,
    config: j(e.config)
  }));
  if (process.env.NODE_ENV !== "production" && e.print) {
    var l = k(u, function(f) {
      var h = n != null ? " === pipe index: " + n : "";
      return ["=== dataset index: " + r.datasetIndex + h + " ===", "- transform result data:", Ua(f.data), "- transform result dimensions:", Ua(f.dimensions)].join(`
`);
    }).join(`
`);
    rm(l);
  }
  return k(u, function(f, h) {
    var v = "";
    F(f) || (process.env.NODE_ENV !== "production" && (v = "A transform should not return some empty results."), Gt(v)), f.data || (process.env.NODE_ENV !== "production" && (v = "Transform result data should be not be null or undefined"), Gt(v));
    var c = jp(f.data);
    zl(c) || (process.env.NODE_ENV !== "production" && (v = "Transform result data should be array rows or object rows."), Gt(v));
    var d, y = t[0];
    if (y && h === 0 && !f.dimensions) {
      var p = y.startIndex;
      p && (f.data = y.data.slice(0, p).concat(f.data)), d = {
        seriesLayoutBy: He,
        sourceHeader: p,
        dimensions: y.metaRawOption.dimensions
      };
    } else
      d = {
        seriesLayoutBy: He,
        sourceHeader: 0,
        dimensions: f.dimensions
      };
    return Uu(f.data, d, null);
  });
}
function zl(e) {
  return e === Bt || e === ge;
}
var Ho = "undefined", qw = typeof Uint32Array === Ho ? Array : Uint32Array, Xw = typeof Uint16Array === Ho ? Array : Uint16Array, ng = typeof Int32Array === Ho ? Array : Int32Array, sc = typeof Float64Array === Ho ? Array : Float64Array, ig = {
  float: sc,
  int: ng,
  // Ordinal data type can be string or int
  ordinal: Array,
  number: Array,
  time: sc
}, Gs;
function sn(e) {
  return e > 65535 ? qw : Xw;
}
function un() {
  return [1 / 0, -1 / 0];
}
function $w(e) {
  var t = e.constructor;
  return t === Array ? e.slice() : new t(e);
}
function uc(e, t, r, n, i) {
  var a = ig[r || "float"];
  if (i) {
    var o = e[t], s = o && o.length;
    if (s !== n) {
      for (var u = new a(n), l = 0; l < s; l++)
        u[l] = o[l];
      e[t] = u;
    }
  } else
    e[t] = new a(n);
}
var Wu = (
  /** @class */
  function() {
    function e() {
      this._chunks = [], this._rawExtent = [], this._extent = [], this._count = 0, this._rawCount = 0, this._calcDimNameToIdx = W();
    }
    return e.prototype.initData = function(t, r, n) {
      process.env.NODE_ENV !== "production" && U(X(t.getItem) && X(t.count), "Invalid data provider."), this._provider = t, this._chunks = [], this._indices = null, this.getRawIndex = this._getRawIdxIdentity;
      var i = t.getSource(), a = this.defaultDimValueGetter = Gs[i.sourceFormat];
      this._dimValueGetter = n || a, this._rawExtent = [];
      var o = Kp(i);
      this._dimensions = k(r, function(s) {
        return process.env.NODE_ENV !== "production" && o && U(s.property != null), {
          // Only pick these two props. Not leak other properties like orderMeta.
          type: s.type,
          property: s.property
        };
      }), this._initDataFromProvider(0, t.count());
    }, e.prototype.getProvider = function() {
      return this._provider;
    }, e.prototype.getSource = function() {
      return this._provider.getSource();
    }, e.prototype.ensureCalculationDimension = function(t, r) {
      var n = this._calcDimNameToIdx, i = this._dimensions, a = n.get(t);
      if (a != null) {
        if (i[a].type === r)
          return a;
      } else
        a = i.length;
      return i[a] = {
        type: r
      }, n.set(t, a), this._chunks[a] = new ig[r || "float"](this._rawCount), this._rawExtent[a] = un(), a;
    }, e.prototype.collectOrdinalMeta = function(t, r) {
      var n = this._chunks[t], i = this._dimensions[t], a = this._rawExtent, o = i.ordinalOffset || 0, s = n.length;
      o === 0 && (a[t] = un());
      for (var u = a[t], l = o; l < s; l++) {
        var f = n[l] = r.parseAndCollect(n[l]);
        isNaN(f) || (u[0] = Math.min(f, u[0]), u[1] = Math.max(f, u[1]));
      }
      i.ordinalMeta = r, i.ordinalOffset = s, i.type = "ordinal";
    }, e.prototype.getOrdinalMeta = function(t) {
      var r = this._dimensions[t], n = r.ordinalMeta;
      return n;
    }, e.prototype.getDimensionProperty = function(t) {
      var r = this._dimensions[t];
      return r && r.property;
    }, e.prototype.appendData = function(t) {
      process.env.NODE_ENV !== "production" && U(!this._indices, "appendData can only be called on raw data.");
      var r = this._provider, n = this.count();
      r.appendData(t);
      var i = r.count();
      return r.persistent || (i += n), n < i && this._initDataFromProvider(n, i, !0), [n, i];
    }, e.prototype.appendValues = function(t, r) {
      for (var n = this._chunks, i = this._dimensions, a = i.length, o = this._rawExtent, s = this.count(), u = s + Math.max(t.length, r || 0), l = 0; l < a; l++) {
        var f = i[l];
        uc(n, l, f.type, u, !0);
      }
      for (var h = [], v = s; v < u; v++)
        for (var c = v - s, d = 0; d < a; d++) {
          var f = i[d], y = Gs.arrayRows.call(this, t[c] || h, f.property, c, d);
          n[d][v] = y;
          var p = o[d];
          y < p[0] && (p[0] = y), y > p[1] && (p[1] = y);
        }
      return this._rawCount = this._count = u, {
        start: s,
        end: u
      };
    }, e.prototype._initDataFromProvider = function(t, r, n) {
      for (var i = this._provider, a = this._chunks, o = this._dimensions, s = o.length, u = this._rawExtent, l = k(o, function(_) {
        return _.property;
      }), f = 0; f < s; f++) {
        var h = o[f];
        u[f] || (u[f] = un()), uc(a, f, h.type, r, n);
      }
      if (i.fillStorage)
        i.fillStorage(t, r, a, u);
      else
        for (var v = [], c = t; c < r; c++) {
          v = i.getItem(c, v);
          for (var d = 0; d < s; d++) {
            var y = a[d], p = this._dimValueGetter(v, l[d], c, d);
            y[c] = p;
            var g = u[d];
            p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
          }
        }
      !i.persistent && i.clean && i.clean(), this._rawCount = this._count = r, this._extent = [];
    }, e.prototype.count = function() {
      return this._count;
    }, e.prototype.get = function(t, r) {
      if (!(r >= 0 && r < this._count))
        return NaN;
      var n = this._chunks[t];
      return n ? n[this.getRawIndex(r)] : NaN;
    }, e.prototype.getValues = function(t, r) {
      var n = [], i = [];
      if (r == null) {
        r = t, t = [];
        for (var a = 0; a < this._dimensions.length; a++)
          i.push(a);
      } else
        i = t;
      for (var a = 0, o = i.length; a < o; a++)
        n.push(this.get(i[a], r));
      return n;
    }, e.prototype.getByRawIndex = function(t, r) {
      if (!(r >= 0 && r < this._rawCount))
        return NaN;
      var n = this._chunks[t];
      return n ? n[r] : NaN;
    }, e.prototype.getSum = function(t) {
      var r = this._chunks[t], n = 0;
      if (r)
        for (var i = 0, a = this.count(); i < a; i++) {
          var o = this.get(t, i);
          isNaN(o) || (n += o);
        }
      return n;
    }, e.prototype.getMedian = function(t) {
      var r = [];
      this.each([t], function(a) {
        isNaN(a) || r.push(a);
      });
      var n = r.sort(function(a, o) {
        return a - o;
      }), i = this.count();
      return i === 0 ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2;
    }, e.prototype.indexOfRawIndex = function(t) {
      if (t >= this._rawCount || t < 0)
        return -1;
      if (!this._indices)
        return t;
      var r = this._indices, n = r[t];
      if (n != null && n < this._count && n === t)
        return t;
      for (var i = 0, a = this._count - 1; i <= a; ) {
        var o = (i + a) / 2 | 0;
        if (r[o] < t)
          i = o + 1;
        else if (r[o] > t)
          a = o - 1;
        else
          return o;
      }
      return -1;
    }, e.prototype.indicesOfNearest = function(t, r, n) {
      var i = this._chunks, a = i[t], o = [];
      if (!a)
        return o;
      n == null && (n = 1 / 0);
      for (var s = 1 / 0, u = -1, l = 0, f = 0, h = this.count(); f < h; f++) {
        var v = this.getRawIndex(f), c = r - a[v], d = Math.abs(c);
        d <= n && ((d < s || d === s && c >= 0 && u < 0) && (s = d, u = c, l = 0), c === u && (o[l++] = f));
      }
      return o.length = l, o;
    }, e.prototype.getIndices = function() {
      var t, r = this._indices;
      if (r) {
        var n = r.constructor, i = this._count;
        if (n === Array) {
          t = new n(i);
          for (var a = 0; a < i; a++)
            t[a] = r[a];
        } else
          t = new n(r.buffer, 0, i);
      } else {
        var n = sn(this._rawCount);
        t = new n(this.count());
        for (var a = 0; a < t.length; a++)
          t[a] = a;
      }
      return t;
    }, e.prototype.filter = function(t, r) {
      if (!this._count)
        return this;
      for (var n = this.clone(), i = n.count(), a = sn(n._rawCount), o = new a(i), s = [], u = t.length, l = 0, f = t[0], h = n._chunks, v = 0; v < i; v++) {
        var c = void 0, d = n.getRawIndex(v);
        if (u === 0)
          c = r(v);
        else if (u === 1) {
          var y = h[f][d];
          c = r(y, v);
        } else {
          for (var p = 0; p < u; p++)
            s[p] = h[t[p]][d];
          s[p] = v, c = r.apply(null, s);
        }
        c && (o[l++] = d);
      }
      return l < i && (n._indices = o), n._count = l, n._extent = [], n._updateGetRawIdx(), n;
    }, e.prototype.selectRange = function(t) {
      var r = this.clone(), n = r._count;
      if (!n)
        return this;
      var i = at(t), a = i.length;
      if (!a)
        return this;
      var o = r.count(), s = sn(r._rawCount), u = new s(o), l = 0, f = i[0], h = t[f][0], v = t[f][1], c = r._chunks, d = !1;
      if (!r._indices) {
        var y = 0;
        if (a === 1) {
          for (var p = c[i[0]], g = 0; g < n; g++) {
            var _ = p[g];
            (_ >= h && _ <= v || isNaN(_)) && (u[l++] = y), y++;
          }
          d = !0;
        } else if (a === 2) {
          for (var p = c[i[0]], m = c[i[1]], S = t[i[1]][0], b = t[i[1]][1], g = 0; g < n; g++) {
            var _ = p[g], w = m[g];
            (_ >= h && _ <= v || isNaN(_)) && (w >= S && w <= b || isNaN(w)) && (u[l++] = y), y++;
          }
          d = !0;
        }
      }
      if (!d)
        if (a === 1)
          for (var g = 0; g < o; g++) {
            var T = r.getRawIndex(g), _ = c[i[0]][T];
            (_ >= h && _ <= v || isNaN(_)) && (u[l++] = T);
          }
        else
          for (var g = 0; g < o; g++) {
            for (var E = !0, T = r.getRawIndex(g), M = 0; M < a; M++) {
              var C = i[M], _ = c[C][T];
              (_ < t[C][0] || _ > t[C][1]) && (E = !1);
            }
            E && (u[l++] = r.getRawIndex(g));
          }
      return l < o && (r._indices = u), r._count = l, r._extent = [], r._updateGetRawIdx(), r;
    }, e.prototype.map = function(t, r) {
      var n = this.clone(t);
      return this._updateDims(n, t, r), n;
    }, e.prototype.modify = function(t, r) {
      this._updateDims(this, t, r);
    }, e.prototype._updateDims = function(t, r, n) {
      for (var i = t._chunks, a = [], o = r.length, s = t.count(), u = [], l = t._rawExtent, f = 0; f < r.length; f++)
        l[r[f]] = un();
      for (var h = 0; h < s; h++) {
        for (var v = t.getRawIndex(h), c = 0; c < o; c++)
          u[c] = i[r[c]][v];
        u[o] = h;
        var d = n && n.apply(null, u);
        if (d != null) {
          typeof d != "object" && (a[0] = d, d = a);
          for (var f = 0; f < d.length; f++) {
            var y = r[f], p = d[f], g = l[y], _ = i[y];
            _ && (_[v] = p), p < g[0] && (g[0] = p), p > g[1] && (g[1] = p);
          }
        }
      }
    }, e.prototype.lttbDownSample = function(t, r) {
      var n = this.clone([t], !0), i = n._chunks, a = i[t], o = this.count(), s = 0, u = Math.floor(1 / r), l = this.getRawIndex(0), f, h, v, c = new (sn(this._rawCount))(Math.min((Math.ceil(o / u) + 2) * 2, o));
      c[s++] = l;
      for (var d = 1; d < o - 1; d += u) {
        for (var y = Math.min(d + u, o - 1), p = Math.min(d + u * 2, o), g = (p + y) / 2, _ = 0, m = y; m < p; m++) {
          var S = this.getRawIndex(m), b = a[S];
          isNaN(b) || (_ += b);
        }
        _ /= p - y;
        var w = d, T = Math.min(d + u, o), E = d - 1, M = a[l];
        f = -1, v = w;
        for (var C = -1, x = 0, m = w; m < T; m++) {
          var S = this.getRawIndex(m), b = a[S];
          if (isNaN(b)) {
            x++, C < 0 && (C = S);
            continue;
          }
          h = Math.abs((E - g) * (b - M) - (E - m) * (_ - M)), h > f && (f = h, v = S);
        }
        x > 0 && x < T - w && (c[s++] = Math.min(C, v), v = Math.max(C, v)), c[s++] = v, l = v;
      }
      return c[s++] = this.getRawIndex(o - 1), n._count = s, n._indices = c, n.getRawIndex = this._getRawIdx, n;
    }, e.prototype.minmaxDownSample = function(t, r) {
      for (var n = this.clone([t], !0), i = n._chunks, a = Math.floor(1 / r), o = i[t], s = this.count(), u = new (sn(this._rawCount))(Math.ceil(s / a) * 2), l = 0, f = 0; f < s; f += a) {
        var h = f, v = o[this.getRawIndex(h)], c = f, d = o[this.getRawIndex(c)], y = a;
        f + a > s && (y = s - f);
        for (var p = 0; p < y; p++) {
          var g = this.getRawIndex(f + p), _ = o[g];
          _ < v && (v = _, h = f + p), _ > d && (d = _, c = f + p);
        }
        var m = this.getRawIndex(h), S = this.getRawIndex(c);
        h < c ? (u[l++] = m, u[l++] = S) : (u[l++] = S, u[l++] = m);
      }
      return n._count = l, n._indices = u, n._updateGetRawIdx(), n;
    }, e.prototype.downSample = function(t, r, n, i) {
      for (var a = this.clone([t], !0), o = a._chunks, s = [], u = Math.floor(1 / r), l = o[t], f = this.count(), h = a._rawExtent[t] = un(), v = new (sn(this._rawCount))(Math.ceil(f / u)), c = 0, d = 0; d < f; d += u) {
        u > f - d && (u = f - d, s.length = u);
        for (var y = 0; y < u; y++) {
          var p = this.getRawIndex(d + y);
          s[y] = l[p];
        }
        var g = n(s), _ = this.getRawIndex(Math.min(d + i(s, g) || 0, f - 1));
        l[_] = g, g < h[0] && (h[0] = g), g > h[1] && (h[1] = g), v[c++] = _;
      }
      return a._count = c, a._indices = v, a._updateGetRawIdx(), a;
    }, e.prototype.each = function(t, r) {
      if (this._count)
        for (var n = t.length, i = this._chunks, a = 0, o = this.count(); a < o; a++) {
          var s = this.getRawIndex(a);
          switch (n) {
            case 0:
              r(a);
              break;
            case 1:
              r(i[t[0]][s], a);
              break;
            case 2:
              r(i[t[0]][s], i[t[1]][s], a);
              break;
            default:
              for (var u = 0, l = []; u < n; u++)
                l[u] = i[t[u]][s];
              l[u] = a, r.apply(null, l);
          }
        }
    }, e.prototype.getDataExtent = function(t) {
      var r = this._chunks[t], n = un();
      if (!r)
        return n;
      var i = this.count(), a = !this._indices, o;
      if (a)
        return this._rawExtent[t].slice();
      if (o = this._extent[t], o)
        return o.slice();
      o = n;
      for (var s = o[0], u = o[1], l = 0; l < i; l++) {
        var f = this.getRawIndex(l), h = r[f];
        h < s && (s = h), h > u && (u = h);
      }
      return o = [s, u], this._extent[t] = o, o;
    }, e.prototype.getRawDataItem = function(t) {
      var r = this.getRawIndex(t);
      if (this._provider.persistent)
        return this._provider.getItem(r);
      for (var n = [], i = this._chunks, a = 0; a < i.length; a++)
        n.push(i[a][r]);
      return n;
    }, e.prototype.clone = function(t, r) {
      var n = new e(), i = this._chunks, a = t && xe(t, function(s, u) {
        return s[u] = !0, s;
      }, {});
      if (a)
        for (var o = 0; o < i.length; o++)
          n._chunks[o] = a[o] ? $w(i[o]) : i[o];
      else
        n._chunks = i;
      return this._copyCommonProps(n), r || (n._indices = this._cloneIndices()), n._updateGetRawIdx(), n;
    }, e.prototype._copyCommonProps = function(t) {
      t._count = this._count, t._rawCount = this._rawCount, t._provider = this._provider, t._dimensions = this._dimensions, t._extent = j(this._extent), t._rawExtent = j(this._rawExtent);
    }, e.prototype._cloneIndices = function() {
      if (this._indices) {
        var t = this._indices.constructor, r = void 0;
        if (t === Array) {
          var n = this._indices.length;
          r = new t(n);
          for (var i = 0; i < n; i++)
            r[i] = this._indices[i];
        } else
          r = new t(this._indices);
        return r;
      }
      return null;
    }, e.prototype._getRawIdxIdentity = function(t) {
      return t;
    }, e.prototype._getRawIdx = function(t) {
      return t < this._count && t >= 0 ? this._indices[t] : -1;
    }, e.prototype._updateGetRawIdx = function() {
      this.getRawIndex = this._indices ? this._getRawIdx : this._getRawIdxIdentity;
    }, e.internalField = function() {
      function t(r, n, i, a) {
        return Na(r[a], this._dimensions[a]);
      }
      Gs = {
        arrayRows: t,
        objectRows: function(r, n, i, a) {
          return Na(r[n], this._dimensions[a]);
        },
        keyedColumns: t,
        original: function(r, n, i, a) {
          var o = r && (r.value == null ? r : r.value);
          return Na(o instanceof Array ? o[a] : o, this._dimensions[a]);
        },
        typedArray: function(r, n, i, a) {
          return r[a];
        }
      };
    }(), e;
  }()
), Zw = (
  /** @class */
  function() {
    function e(t) {
      this._sourceList = [], this._storeList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._dirty = !0, this._sourceHost = t;
    }
    return e.prototype.dirty = function() {
      this._setLocalSource([], []), this._storeList = [], this._dirty = !0;
    }, e.prototype._setLocalSource = function(t, r) {
      this._sourceList = t, this._upstreamSignList = r, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0);
    }, e.prototype._getVersionSign = function() {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }, e.prototype.prepareSource = function() {
      this._isDirty() && (this._createSource(), this._dirty = !1);
    }, e.prototype._createSource = function() {
      this._setLocalSource([], []);
      var t = this._sourceHost, r = this._getUpstreamSourceManagers(), n = !!r.length, i, a;
      if ($n(t)) {
        var o = t, s = void 0, u = void 0, l = void 0;
        if (n) {
          var f = r[0];
          f.prepareSource(), l = f.getSource(), s = l.data, u = l.sourceFormat, a = [f._getVersionSign()];
        } else
          s = o.get("data", !0), u = bt(s) ? ze : oe, a = [];
        var h = this._getSourceMetaRawOption() || {}, v = l && l.metaRawOption || {}, c = q(h.seriesLayoutBy, v.seriesLayoutBy) || null, d = q(h.sourceHeader, v.sourceHeader), y = q(h.dimensions, v.dimensions), p = c !== v.seriesLayoutBy || !!d != !!v.sourceHeader || y;
        i = p ? [Uu(s, {
          seriesLayoutBy: c,
          sourceHeader: d,
          dimensions: y
        }, u)] : [];
      } else {
        var g = t;
        if (n) {
          var _ = this._applyTransform(r);
          i = _.sourceList, a = _.upstreamSignList;
        } else {
          var m = g.get("source", !0);
          i = [Uu(m, this._getSourceMetaRawOption(), null)], a = [];
        }
      }
      process.env.NODE_ENV !== "production" && U(i && a), this._setLocalSource(i, a);
    }, e.prototype._applyTransform = function(t) {
      var r = this._sourceHost, n = r.get("transform", !0), i = r.get("fromTransformResult", !0);
      if (process.env.NODE_ENV !== "production" && U(i != null || n != null), i != null) {
        var a = "";
        t.length !== 1 && (process.env.NODE_ENV !== "production" && (a = "When using `fromTransformResult`, there should be only one upstream dataset"), lc(a));
      }
      var o, s = [], u = [];
      return D(t, function(l) {
        l.prepareSource();
        var f = l.getSource(i || 0), h = "";
        i != null && !f && (process.env.NODE_ENV !== "production" && (h = "Can not retrieve result by `fromTransformResult`: " + i), lc(h)), s.push(f), u.push(l._getVersionSign());
      }), n ? o = Ww(n, s, {
        datasetIndex: r.componentIndex
      }) : i != null && (o = [Ew(s[0])]), {
        sourceList: o,
        upstreamSignList: u
      };
    }, e.prototype._isDirty = function() {
      if (this._dirty)
        return !0;
      for (var t = this._getUpstreamSourceManagers(), r = 0; r < t.length; r++) {
        var n = t[r];
        if (
          // Consider the case that there is ancestor diry, call it recursively.
          // The performance is probably not an issue because usually the chain is not long.
          n._isDirty() || this._upstreamSignList[r] !== n._getVersionSign()
        )
          return !0;
      }
    }, e.prototype.getSource = function(t) {
      t = t || 0;
      var r = this._sourceList[t];
      if (!r) {
        var n = this._getUpstreamSourceManagers();
        return n[0] && n[0].getSource(t);
      }
      return r;
    }, e.prototype.getSharedDataStore = function(t) {
      process.env.NODE_ENV !== "production" && U($n(this._sourceHost), "Can only call getDataStore on series source manager.");
      var r = t.makeStoreSchema();
      return this._innerGetDataStore(r.dimensions, t.source, r.hash);
    }, e.prototype._innerGetDataStore = function(t, r, n) {
      var i = 0, a = this._storeList, o = a[i];
      o || (o = a[i] = {});
      var s = o[n];
      if (!s) {
        var u = this._getUpstreamSourceManagers()[0];
        $n(this._sourceHost) && u ? s = u._innerGetDataStore(t, r, n) : (s = new Wu(), s.initData(new Qp(r, t.length), t)), o[n] = s;
      }
      return s;
    }, e.prototype._getUpstreamSourceManagers = function() {
      var t = this._sourceHost;
      if ($n(t)) {
        var r = Ll(t);
        return r ? [r.getSourceManager()] : [];
      } else
        return k(tw(t), function(n) {
          return n.getSourceManager();
        });
    }, e.prototype._getSourceMetaRawOption = function() {
      var t = this._sourceHost, r, n, i;
      if ($n(t))
        r = t.get("seriesLayoutBy", !0), n = t.get("sourceHeader", !0), i = t.get("dimensions", !0);
      else if (!this._getUpstreamSourceManagers().length) {
        var a = t;
        r = a.get("seriesLayoutBy", !0), n = a.get("sourceHeader", !0), i = a.get("dimensions", !0);
      }
      return {
        seriesLayoutBy: r,
        sourceHeader: n,
        dimensions: i
      };
    }, e;
  }()
);
function $n(e) {
  return e.mainType === "series";
}
function lc(e) {
  throw new Error(e);
}
var jw = "line-height:1";
function ag(e) {
  var t = e.lineHeight;
  return t == null ? jw : "line-height:" + At(t + "") + "px";
}
function og(e, t) {
  var r = e.color || "#6e7079", n = e.fontSize || 12, i = e.fontWeight || "400", a = e.color || "#464646", o = e.fontSize || 14, s = e.fontWeight || "900";
  return t === "html" ? {
    // eslint-disable-next-line max-len
    nameStyle: "font-size:" + At(n + "") + "px;color:" + At(r) + ";font-weight:" + At(i + ""),
    // eslint-disable-next-line max-len
    valueStyle: "font-size:" + At(o + "") + "px;color:" + At(a) + ";font-weight:" + At(s + "")
  } : {
    nameStyle: {
      fontSize: n,
      fill: r,
      fontWeight: i
    },
    valueStyle: {
      fontSize: o,
      fill: a,
      fontWeight: s
    }
  };
}
var Kw = [0, 10, 20, 30], Qw = ["", `
`, `

`, `


`];
function Yu(e, t) {
  return t.type = e, t;
}
function qu(e) {
  return e.type === "section";
}
function sg(e) {
  return qu(e) ? Jw : tb;
}
function ug(e) {
  if (qu(e)) {
    var t = 0, r = e.blocks.length, n = r > 1 || r > 0 && !e.noHeader;
    return D(e.blocks, function(i) {
      var a = ug(i);
      a >= t && (t = a + +(n && // 0 always can not be readable gap level.
      (!a || qu(i) && !i.noHeader)));
    }), t;
  }
  return 0;
}
function Jw(e, t, r, n) {
  var i = t.noHeader, a = eb(ug(t)), o = [], s = t.blocks || [];
  U(!s || L(s)), s = s || [];
  var u = e.orderMode;
  if (t.sortBlocks && u) {
    s = s.slice();
    var l = {
      valueAsc: "asc",
      valueDesc: "desc"
    };
    if (Ur(l, u)) {
      var f = new kw(l[u], null);
      s.sort(function(y, p) {
        return f.evaluate(y.sortParam, p.sortParam);
      });
    } else u === "seriesDesc" && s.reverse();
  }
  D(s, function(y, p) {
    var g = t.valueFormatter, _ = sg(y)(
      // Inherit valueFormatter
      g ? A(A({}, e), {
        valueFormatter: g
      }) : e,
      y,
      p > 0 ? a.html : 0,
      n
    );
    _ != null && o.push(_);
  });
  var h = e.renderMode === "richText" ? o.join(a.richText) : Xu(n, o.join(""), i ? r : a.html);
  if (i)
    return h;
  var v = Hu(t.header, "ordinal", e.useUTC), c = og(n, e.renderMode).nameStyle, d = ag(n);
  return e.renderMode === "richText" ? lg(e, v, c) + a.richText + h : Xu(n, '<div style="' + c + ";" + d + ';">' + At(v) + "</div>" + h, r);
}
function tb(e, t, r, n) {
  var i = e.renderMode, a = t.noName, o = t.noValue, s = !t.markerType, u = t.name, l = e.useUTC, f = t.valueFormatter || e.valueFormatter || function(S) {
    return S = L(S) ? S : [S], k(S, function(b, w) {
      return Hu(b, L(c) ? c[w] : c, l);
    });
  };
  if (!(a && o)) {
    var h = s ? "" : e.markupStyleCreator.makeTooltipMarker(t.markerType, t.markerColor || "#333", i), v = a ? "" : Hu(u, "ordinal", l), c = t.valueType, d = o ? [] : f(t.value, t.dataIndex), y = !s || !a, p = !s && a, g = og(n, i), _ = g.nameStyle, m = g.valueStyle;
    return i === "richText" ? (s ? "" : h) + (a ? "" : lg(e, v, _)) + (o ? "" : ib(e, d, y, p, m)) : Xu(n, (s ? "" : h) + (a ? "" : rb(v, !s, _)) + (o ? "" : nb(d, y, p, m)), r);
  }
}
function nC(e, t, r, n, i, a) {
  if (e) {
    var o = sg(e), s = {
      useUTC: i,
      renderMode: r,
      orderMode: n,
      markupStyleCreator: t,
      valueFormatter: e.valueFormatter
    };
    return o(s, e, 0, a);
  }
}
function eb(e) {
  return {
    html: Kw[e],
    richText: Qw[e]
  };
}
function Xu(e, t, r) {
  var n = '<div style="clear:both"></div>', i = "margin: " + r + "px 0 0", a = ag(e);
  return '<div style="' + i + ";" + a + ';">' + t + n + "</div>";
}
function rb(e, t, r) {
  var n = t ? "margin-left:2px" : "";
  return '<span style="' + r + ";" + n + '">' + At(e) + "</span>";
}
function nb(e, t, r, n) {
  var i = r ? "10px" : "20px", a = t ? "float:right;margin-left:" + i : "";
  return e = L(e) ? e : [e], '<span style="' + a + ";" + n + '">' + k(e, function(o) {
    return At(o);
  }).join("&nbsp;&nbsp;") + "</span>";
}
function lg(e, t, r) {
  return e.markupStyleCreator.wrapRichTextStyle(t, r);
}
function ib(e, t, r, n, i) {
  var a = [i], o = n ? 10 : 20;
  return r && a.push({
    padding: [0, 0, 0, o],
    align: "right"
  }), e.markupStyleCreator.wrapRichTextStyle(L(t) ? t.join("  ") : t, a);
}
function ab(e, t) {
  var r = e.getData().getItemVisual(t, "style"), n = r[e.visualDrawType];
  return YS(n);
}
function iC(e, t) {
  var r = e.get("padding");
  return r ?? (t === "richText" ? [8, 10] : 10);
}
var aC = (
  /** @class */
  function() {
    function e() {
      this.richTextStyles = {}, this._nextStyleNameId = Cd();
    }
    return e.prototype._generateStyleName = function() {
      return "__EC_aUTo_" + this._nextStyleNameId++;
    }, e.prototype.makeTooltipMarker = function(t, r, n) {
      var i = n === "richText" ? this._generateStyleName() : null, a = Vp({
        color: r,
        type: t,
        renderMode: n,
        markerId: i
      });
      return V(a) ? a : (process.env.NODE_ENV !== "production" && U(i), this.richTextStyles[i] = a.style, a.content);
    }, e.prototype.wrapRichTextStyle = function(t, r) {
      var n = {};
      L(r) ? D(r, function(a) {
        return A(n, a);
      }) : A(n, r);
      var i = this._generateStyleName();
      return this.richTextStyles[i] = n, "{" + i + "|" + t + "}";
    }, e;
  }()
);
function ob(e) {
  var t = e.series, r = e.dataIndex, n = e.multipleSeries, i = t.getData(), a = i.mapDimensionsAll("defaultedTooltip"), o = a.length, s = t.getRawValue(r), u = L(s), l = ab(t, r), f, h, v, c;
  if (o > 1 || u && !o) {
    var d = sb(s, t, r, a, l);
    f = d.inlineValues, h = d.inlineValueTypes, v = d.blocks, c = d.inlineValues[0];
  } else if (o) {
    var y = i.getDimensionInfo(a[0]);
    c = f = Qa(i, r, a[0]), h = y.type;
  } else
    c = f = u ? s[0] : s;
  var p = Pd(t), g = p && t.name || "", _ = i.getName(r), m = n ? g : _;
  return Yu("section", {
    header: g,
    // When series name is not specified, do not show a header line with only '-'.
    // This case always happens in tooltip.trigger: 'item'.
    noHeader: n || !p,
    sortParam: c,
    blocks: [Yu("nameValue", {
      markerType: "item",
      markerColor: l,
      // Do not mix display seriesName and itemName in one tooltip,
      // which might confuses users.
      name: m,
      // name dimension might be auto assigned, where the name might
      // be not readable. So we check trim here.
      noName: !Te(m),
      value: f,
      valueType: h,
      dataIndex: r
    })].concat(v || [])
  });
}
function sb(e, t, r, n, i) {
  var a = t.getData(), o = xe(e, function(h, v, c) {
    var d = a.getDimensionInfo(c);
    return h = h || d && d.tooltip !== !1 && d.displayName != null;
  }, !1), s = [], u = [], l = [];
  n.length ? D(n, function(h) {
    f(Qa(a, r, h), h);
  }) : D(e, f);
  function f(h, v) {
    var c = a.getDimensionInfo(v);
    !c || c.otherDims.tooltip === !1 || (o ? l.push(Yu("nameValue", {
      markerType: "subItem",
      markerColor: i,
      name: c.displayName,
      value: h,
      valueType: c.type
    })) : (s.push(h), u.push(c.type)));
  }
  return {
    inlineValues: s,
    inlineValueTypes: u,
    blocks: l
  };
}
var Xe = Pt();
function ha(e, t) {
  return e.getName(t) || e.getId(t);
}
var ub = "__universalTransitionEnabled", Oe = (
  /** @class */
  function(e) {
    qt(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r._selectedDataIndicesMap = {}, r;
    }
    return t.prototype.init = function(r, n, i) {
      this.seriesIndex = this.componentIndex, this.dataTask = _i({
        count: fb,
        reset: hb
      }), this.dataTask.context = {
        model: this
      }, this.mergeDefaultAndTheme(r, i);
      var a = Xe(this).sourceManager = new Zw(this);
      a.prepareSource();
      var o = this.getInitialData(r, i);
      hc(o, this), this.dataTask.context.data = o, process.env.NODE_ENV !== "production" && U(o, "getInitialData returned invalid data."), Xe(this).dataBeforeProcessed = o, fc(this), this._initSelectedMapFromData(o);
    }, t.prototype.mergeDefaultAndTheme = function(r, n) {
      var i = Za(this), a = i ? zp(r) : {}, o = this.subType;
      J.hasClass(o) && (o += "Series"), ut(r, n.getTheme().get(this.subType)), ut(r, this.getDefaultOption()), Zf(r, "label", ["show"]), this.fillDataTextStyle(r.data), i && ja(r, a, i);
    }, t.prototype.mergeOption = function(r, n) {
      r = ut(this.option, r, !0), this.fillDataTextStyle(r.data);
      var i = Za(this);
      i && ja(this.option, r, i);
      var a = Xe(this).sourceManager;
      a.dirty(), a.prepareSource();
      var o = this.getInitialData(r, n);
      hc(o, this), this.dataTask.dirty(), this.dataTask.context.data = o, Xe(this).dataBeforeProcessed = o, fc(this), this._initSelectedMapFromData(o);
    }, t.prototype.fillDataTextStyle = function(r) {
      if (r && !bt(r))
        for (var n = ["show"], i = 0; i < r.length; i++)
          r[i] && r[i].label && Zf(r[i], "label", n);
    }, t.prototype.getInitialData = function(r, n) {
    }, t.prototype.appendData = function(r) {
      var n = this.getRawData();
      n.appendData(r.data);
    }, t.prototype.getData = function(r) {
      var n = $u(this);
      if (n) {
        var i = n.context.data;
        return r == null || !i.getLinkedData ? i : i.getLinkedData(r);
      } else
        return Xe(this).data;
    }, t.prototype.getAllData = function() {
      var r = this.getData();
      return r && r.getLinkedDataAll ? r.getLinkedDataAll() : [{
        data: r
      }];
    }, t.prototype.setData = function(r) {
      var n = $u(this);
      if (n) {
        var i = n.context;
        i.outputData = r, n !== this.dataTask && (i.data = r);
      }
      Xe(this).data = r;
    }, t.prototype.getEncode = function() {
      var r = this.get("encode", !0);
      if (r)
        return W(r);
    }, t.prototype.getSourceManager = function() {
      return Xe(this).sourceManager;
    }, t.prototype.getSource = function() {
      return this.getSourceManager().getSource();
    }, t.prototype.getRawData = function() {
      return Xe(this).dataBeforeProcessed;
    }, t.prototype.getColorBy = function() {
      var r = this.get("colorBy");
      return r || "series";
    }, t.prototype.isColorBySeries = function() {
      return this.getColorBy() === "series";
    }, t.prototype.getBaseAxis = function() {
      var r = this.coordinateSystem;
      return r && r.getBaseAxis && r.getBaseAxis();
    }, t.prototype.formatTooltip = function(r, n, i) {
      return ob({
        series: this,
        dataIndex: r,
        multipleSeries: n
      });
    }, t.prototype.isAnimationEnabled = function() {
      var r = this.ecModel;
      if (Z.node && !(r && r.ssr))
        return !1;
      var n = this.getShallow("animation");
      return n && this.getData().count() > this.getShallow("animationThreshold") && (n = !1), !!n;
    }, t.prototype.restoreData = function() {
      this.dataTask.dirty();
    }, t.prototype.getColorFromPalette = function(r, n, i) {
      var a = this.ecModel, o = kl.prototype.getColorFromPalette.call(this, r, n, i);
      return o || (o = a.getColorFromPalette(r, n, i)), o;
    }, t.prototype.coordDimToDataDim = function(r) {
      return this.getRawData().mapDimensionsAll(r);
    }, t.prototype.getProgressive = function() {
      return this.get("progressive");
    }, t.prototype.getProgressiveThreshold = function() {
      return this.get("progressiveThreshold");
    }, t.prototype.select = function(r, n) {
      this._innerSelect(this.getData(n), r);
    }, t.prototype.unselect = function(r, n) {
      var i = this.option.selectedMap;
      if (i) {
        var a = this.option.selectedMode, o = this.getData(n);
        if (a === "series" || i === "all") {
          this.option.selectedMap = {}, this._selectedDataIndicesMap = {};
          return;
        }
        for (var s = 0; s < r.length; s++) {
          var u = r[s], l = ha(o, u);
          i[l] = !1, this._selectedDataIndicesMap[l] = -1;
        }
      }
    }, t.prototype.toggleSelect = function(r, n) {
      for (var i = [], a = 0; a < r.length; a++)
        i[0] = r[a], this.isSelected(r[a], n) ? this.unselect(i, n) : this.select(i, n);
    }, t.prototype.getSelectedDataIndices = function() {
      if (this.option.selectedMap === "all")
        return [].slice.call(this.getData().getIndices());
      for (var r = this._selectedDataIndicesMap, n = at(r), i = [], a = 0; a < n.length; a++) {
        var o = r[n[a]];
        o >= 0 && i.push(o);
      }
      return i;
    }, t.prototype.isSelected = function(r, n) {
      var i = this.option.selectedMap;
      if (!i)
        return !1;
      var a = this.getData(n);
      return (i === "all" || i[ha(a, r)]) && !a.getItemModel(r).get(["select", "disabled"]);
    }, t.prototype.isUniversalTransitionEnabled = function() {
      if (this[ub])
        return !0;
      var r = this.option.universalTransition;
      return r ? r === !0 ? !0 : r && r.enabled : !1;
    }, t.prototype._innerSelect = function(r, n) {
      var i, a, o = this.option, s = o.selectedMode, u = n.length;
      if (!(!s || !u)) {
        if (s === "series")
          o.selectedMap = "all";
        else if (s === "multiple") {
          F(o.selectedMap) || (o.selectedMap = {});
          for (var l = o.selectedMap, f = 0; f < u; f++) {
            var h = n[f], v = ha(r, h);
            l[v] = !0, this._selectedDataIndicesMap[v] = r.getRawIndex(h);
          }
        } else if (s === "single" || s === !0) {
          var c = n[u - 1], v = ha(r, c);
          o.selectedMap = (i = {}, i[v] = !0, i), this._selectedDataIndicesMap = (a = {}, a[v] = r.getRawIndex(c), a);
        }
      }
    }, t.prototype._initSelectedMapFromData = function(r) {
      if (!this.option.selectedMap) {
        var n = [];
        r.hasItemOption && r.each(function(i) {
          var a = r.getRawDataItem(i);
          a && a.selected && n.push(i);
        }), n.length > 0 && this._innerSelect(r, n);
      }
    }, t.registerClass = function(r) {
      return J.registerClass(r);
    }, t.protoInitialize = function() {
      var r = t.prototype;
      r.type = "series.__base__", r.seriesIndex = 0, r.ignoreStyleOnData = !1, r.hasSymbolVisual = !1, r.defaultSymbol = "circle", r.visualStyleAccessPath = "itemStyle", r.visualDrawType = "fill";
    }(), t;
  }(J)
);
pe(Oe, Nw);
pe(Oe, kl);
Nd(Oe, J);
function fc(e) {
  var t = e.name;
  Pd(e) || (e.name = lb(e) || t);
}
function lb(e) {
  var t = e.getRawData(), r = t.mapDimensionsAll("seriesName"), n = [];
  return D(r, function(i) {
    var a = t.getDimensionInfo(i);
    a.displayName && n.push(a.displayName);
  }), n.join(" ");
}
function fb(e) {
  return e.model.getRawData().count();
}
function hb(e) {
  var t = e.model;
  return t.setData(t.getRawData().cloneShallow()), cb;
}
function cb(e, t) {
  t.outputData && e.end > t.outputData.count() && t.model.getRawData().cloneShallow(t.outputData);
}
function hc(e, t) {
  D(Wv(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function(r) {
    e.wrapMethod(r, xn(vb, t));
  });
}
function vb(e, t) {
  var r = $u(e);
  return r && r.setOutputEnd((t || this).count()), t;
}
function $u(e) {
  var t = (e.ecModel || {}).scheduler, r = t && t.getPipeline(e.uid);
  if (r) {
    var n = r.currentTask;
    if (n) {
      var i = n.agentStubMap;
      i && (n = i.get(e.uid));
    }
    return n;
  }
}
var ar = (
  /** @class */
  function() {
    function e() {
      this.group = new Xr(), this.uid = Ao("viewComponent");
    }
    return e.prototype.init = function(t, r) {
    }, e.prototype.render = function(t, r, n, i) {
    }, e.prototype.dispose = function(t, r) {
    }, e.prototype.updateView = function(t, r, n, i) {
    }, e.prototype.updateLayout = function(t, r, n, i) {
    }, e.prototype.updateVisual = function(t, r, n, i) {
    }, e.prototype.toggleBlurSeries = function(t, r, n) {
    }, e.prototype.eachRendered = function(t) {
      var r = this.group;
      r && r.traverse(t);
    }, e;
  }()
);
_l(ar);
mo(ar);
function fg() {
  var e = Pt();
  return function(t) {
    var r = e(t), n = t.pipelineContext, i = !!r.large, a = !!r.progressiveRender, o = r.large = !!(n && n.large), s = r.progressiveRender = !!(n && n.progressiveRender);
    return (i !== o || a !== s) && "reset";
  };
}
var hg = Pt(), db = fg(), Ee = (
  /** @class */
  function() {
    function e() {
      this.group = new Xr(), this.uid = Ao("viewChart"), this.renderTask = _i({
        plan: pb,
        reset: gb
      }), this.renderTask.context = {
        view: this
      };
    }
    return e.prototype.init = function(t, r) {
    }, e.prototype.render = function(t, r, n, i) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("render method must been implemented");
    }, e.prototype.highlight = function(t, r, n, i) {
      var a = t.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && Tt("Unknown dataType " + i.dataType);
        return;
      }
      vc(a, i, "emphasis");
    }, e.prototype.downplay = function(t, r, n, i) {
      var a = t.getData(i && i.dataType);
      if (!a) {
        process.env.NODE_ENV !== "production" && Tt("Unknown dataType " + i.dataType);
        return;
      }
      vc(a, i, "normal");
    }, e.prototype.remove = function(t, r) {
      this.group.removeAll();
    }, e.prototype.dispose = function(t, r) {
    }, e.prototype.updateView = function(t, r, n, i) {
      this.render(t, r, n, i);
    }, e.prototype.updateLayout = function(t, r, n, i) {
      this.render(t, r, n, i);
    }, e.prototype.updateVisual = function(t, r, n, i) {
      this.render(t, r, n, i);
    }, e.prototype.eachRendered = function(t) {
      Dp(this.group, t);
    }, e.markUpdateMethod = function(t, r) {
      hg(t).updateMethod = r;
    }, e.protoInitialize = function() {
      var t = e.prototype;
      t.type = "chart";
    }(), e;
  }()
);
function cc(e, t, r) {
  e && Cn(e) && (t === "emphasis" ? Au : Nu)(e, r);
}
function vc(e, t, r) {
  var n = yo(e, t), i = t && t.highlightKey != null ? A1(t.highlightKey) : null;
  n != null ? D(xt(n), function(a) {
    cc(e.getItemGraphicEl(a), r, i);
  }) : e.eachItemGraphicEl(function(a) {
    cc(a, r, i);
  });
}
_l(Ee, ["dispose"]);
mo(Ee);
function pb(e) {
  return db(e.model);
}
function gb(e) {
  var t = e.model, r = e.ecModel, n = e.api, i = e.payload, a = t.pipelineContext.progressiveRender, o = e.view, s = i && hg(i).updateMethod, u = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
  return u !== "render" && o[u](t, r, n, i), yb[u];
}
var yb = {
  incrementalPrepareRender: {
    progress: function(e, t) {
      t.view.incrementalRender(e, t.model, t.ecModel, t.api, t.payload);
    }
  },
  render: {
    // Put view.render in `progress` to support appendData. But in this case
    // view.render should not be called in reset, otherwise it will be called
    // twise. Use `forceFirstProgress` to make sure that view.render is called
    // in any cases.
    forceFirstProgress: !0,
    progress: function(e, t) {
      t.view.render(t.model, t.ecModel, t.api, t.payload);
    }
  }
}, Ja = "\0__throttleOriginMethod", dc = "\0__throttleRate", pc = "\0__throttleType";
function Hl(e, t, r) {
  var n, i = 0, a = 0, o = null, s, u, l, f;
  t = t || 0;
  function h() {
    a = (/* @__PURE__ */ new Date()).getTime(), o = null, e.apply(u, l || []);
  }
  var v = function() {
    for (var c = [], d = 0; d < arguments.length; d++)
      c[d] = arguments[d];
    n = (/* @__PURE__ */ new Date()).getTime(), u = this, l = c;
    var y = f || t, p = f || r;
    f = null, s = n - (p ? i : a) - y, clearTimeout(o), p ? o = setTimeout(h, y) : s >= 0 ? h() : o = setTimeout(h, -s), i = n;
  };
  return v.clear = function() {
    o && (clearTimeout(o), o = null);
  }, v.debounceNextCall = function(c) {
    f = c;
  }, v;
}
function oC(e, t, r, n) {
  var i = e[t];
  if (i) {
    var a = i[Ja] || i, o = i[pc], s = i[dc];
    if (s !== r || o !== n) {
      if (r == null)
        return e[t] = a;
      i = e[t] = Hl(a, r, n === "debounce"), i[Ja] = a, i[pc] = n, i[dc] = r;
    }
    return i;
  }
}
function sC(e, t) {
  var r = e[t];
  r && r[Ja] && (r.clear && r.clear(), e[t] = r[Ja]);
}
var gc = Pt(), yc = {
  itemStyle: xi(Ep, !0),
  lineStyle: xi(Cp, !0)
}, _b = {
  lineStyle: "stroke",
  itemStyle: "fill"
};
function cg(e, t) {
  var r = e.visualStyleMapper || yc[t];
  return r || (console.warn("Unknown style type '" + t + "'."), yc.itemStyle);
}
function vg(e, t) {
  var r = e.visualDrawType || _b[t];
  return r || (console.warn("Unknown style type '" + t + "'."), "fill");
}
var mb = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(e, t) {
    var r = e.getData(), n = e.visualStyleAccessPath || "itemStyle", i = e.getModel(n), a = cg(e, n), o = a(i), s = i.getShallow("decal");
    s && (r.setVisual("decal", s), s.dirty = !0);
    var u = vg(e, n), l = o[u], f = X(l) ? l : null, h = o.fill === "auto" || o.stroke === "auto";
    if (!o[u] || f || h) {
      var v = e.getColorFromPalette(
        // TODO series count changed.
        e.name,
        null,
        t.getSeriesCount()
      );
      o[u] || (o[u] = v, r.setVisual("colorFromPalette", !0)), o.fill = o.fill === "auto" || X(o.fill) ? v : o.fill, o.stroke = o.stroke === "auto" || X(o.stroke) ? v : o.stroke;
    }
    if (r.setVisual("style", o), r.setVisual("drawType", u), !t.isSeriesFiltered(e) && f)
      return r.setVisual("colorFromPalette", !1), {
        dataEach: function(c, d) {
          var y = e.getDataParams(d), p = A({}, o);
          p[u] = f(y), c.setItemVisual(d, "style", p);
        }
      };
  }
}, Zn = new vt(), Sb = {
  createOnAllSeries: !0,
  performRawSeries: !0,
  reset: function(e, t) {
    if (!(e.ignoreStyleOnData || t.isSeriesFiltered(e))) {
      var r = e.getData(), n = e.visualStyleAccessPath || "itemStyle", i = cg(e, n), a = r.getVisual("drawType");
      return {
        dataEach: r.hasItemOption ? function(o, s) {
          var u = o.getRawDataItem(s);
          if (u && u[n]) {
            Zn.option = u[n];
            var l = i(Zn), f = o.ensureUniqueItemVisual(s, "style");
            A(f, l), Zn.option.decal && (o.setItemVisual(s, "decal", Zn.option.decal), Zn.option.decal.dirty = !0), a in l && o.setItemVisual(s, "colorFromPalette", !1);
          }
        } : null
      };
    }
  }
}, wb = {
  performRawSeries: !0,
  overallReset: function(e) {
    var t = W();
    e.eachSeries(function(r) {
      var n = r.getColorBy();
      if (!r.isColorBySeries()) {
        var i = r.type + "-" + n, a = t.get(i);
        a || (a = {}, t.set(i, a)), gc(r).scope = a;
      }
    }), e.eachSeries(function(r) {
      if (!(r.isColorBySeries() || e.isSeriesFiltered(r))) {
        var n = r.getRawData(), i = {}, a = r.getData(), o = gc(r).scope, s = r.visualStyleAccessPath || "itemStyle", u = vg(r, s);
        a.each(function(l) {
          var f = a.getRawIndex(l);
          i[f] = l;
        }), n.each(function(l) {
          var f = i[l], h = a.getItemVisual(f, "colorFromPalette");
          if (h) {
            var v = a.ensureUniqueItemVisual(f, "style"), c = n.getName(l) || l + "", d = n.count();
            v[u] = r.getColorFromPalette(c, o, d);
          }
        });
      }
    });
  }
}, ca = Math.PI;
function bb(e, t) {
  t = t || {}, ht(t, {
    text: "loading",
    textColor: "#000",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    fontFamily: "sans-serif",
    maskColor: "rgba(255, 255, 255, 0.8)",
    showSpinner: !0,
    color: "#5470c6",
    spinnerRadius: 10,
    lineWidth: 5,
    zlevel: 0
  });
  var r = new Xr(), n = new ve({
    style: {
      fill: t.maskColor
    },
    zlevel: t.zlevel,
    z: 1e4
  });
  r.add(n);
  var i = new nr({
    style: {
      text: t.text,
      fill: t.textColor,
      fontSize: t.fontSize,
      fontWeight: t.fontWeight,
      fontStyle: t.fontStyle,
      fontFamily: t.fontFamily
    },
    zlevel: t.zlevel,
    z: 10001
  }), a = new ve({
    style: {
      fill: "none"
    },
    textContent: i,
    textConfig: {
      position: "right",
      distance: 10
    },
    zlevel: t.zlevel,
    z: 10001
  });
  r.add(a);
  var o;
  return t.showSpinner && (o = new Hi({
    shape: {
      startAngle: -ca / 2,
      endAngle: -ca / 2 + 0.1,
      r: t.spinnerRadius
    },
    style: {
      stroke: t.color,
      lineCap: "round",
      lineWidth: t.lineWidth
    },
    zlevel: t.zlevel,
    z: 10001
  }), o.animateShape(!0).when(1e3, {
    endAngle: ca * 3 / 2
  }).start("circularInOut"), o.animateShape(!0).when(1e3, {
    startAngle: ca * 3 / 2
  }).delay(300).start("circularInOut"), r.add(o)), r.resize = function() {
    var s = i.getBoundingRect().width, u = t.showSpinner ? t.spinnerRadius : 0, l = (e.getWidth() - u * 2 - (t.showSpinner && s ? 10 : 0) - s) / 2 - (t.showSpinner && s ? 0 : 5 + s / 2) + (t.showSpinner ? 0 : s / 2) + (s ? 0 : u), f = e.getHeight() / 2;
    t.showSpinner && o.setShape({
      cx: l,
      cy: f
    }), a.setShape({
      x: l - u,
      y: f - u,
      width: u * 2,
      height: u * 2
    }), n.setShape({
      x: 0,
      y: 0,
      width: e.getWidth(),
      height: e.getHeight()
    });
  }, r.resize(), r;
}
var dg = (
  /** @class */
  function() {
    function e(t, r, n, i) {
      this._stageTaskMap = W(), this.ecInstance = t, this.api = r, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i);
    }
    return e.prototype.restoreData = function(t, r) {
      t.restoreData(r), this._stageTaskMap.each(function(n) {
        var i = n.overallTask;
        i && i.dirty();
      });
    }, e.prototype.getPerformArgs = function(t, r) {
      if (t.__pipeline) {
        var n = this._pipelineMap.get(t.__pipeline.id), i = n.context, a = !r && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex, o = a ? n.step : null, s = i && i.modDataCount, u = s != null ? Math.ceil(s / o) : null;
        return {
          step: o,
          modBy: u,
          modDataCount: s
        };
      }
    }, e.prototype.getPipeline = function(t) {
      return this._pipelineMap.get(t);
    }, e.prototype.updateStreamModes = function(t, r) {
      var n = this._pipelineMap.get(t.uid), i = t.getData(), a = i.count(), o = n.progressiveEnabled && r.incrementalPrepareRender && a >= n.threshold, s = t.get("large") && a >= t.get("largeThreshold"), u = t.get("progressiveChunkMode") === "mod" ? a : null;
      t.pipelineContext = n.context = {
        progressiveRender: o,
        modDataCount: u,
        large: s
      };
    }, e.prototype.restorePipelines = function(t) {
      var r = this, n = r._pipelineMap = W();
      t.eachSeries(function(i) {
        var a = i.getProgressive(), o = i.uid;
        n.set(o, {
          id: o,
          head: null,
          tail: null,
          threshold: i.getProgressiveThreshold(),
          progressiveEnabled: a && !(i.preventIncremental && i.preventIncremental()),
          blockIndex: -1,
          step: Math.round(a || 700),
          count: 0
        }), r._pipe(i, i.dataTask);
      });
    }, e.prototype.prepareStageTasks = function() {
      var t = this._stageTaskMap, r = this.api.getModel(), n = this.api;
      D(this._allHandlers, function(i) {
        var a = t.get(i.uid) || t.set(i.uid, {}), o = "";
        process.env.NODE_ENV !== "production" && (o = '"reset" and "overallReset" must not be both specified.'), U(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, a, r, n), i.overallReset && this._createOverallStageTask(i, a, r, n);
      }, this);
    }, e.prototype.prepareView = function(t, r, n, i) {
      var a = t.renderTask, o = a.context;
      o.model = r, o.ecModel = n, o.api = i, a.__block = !t.incrementalPrepareRender, this._pipe(r, a);
    }, e.prototype.performDataProcessorTasks = function(t, r) {
      this._performStageTasks(this._dataProcessorHandlers, t, r, {
        block: !0
      });
    }, e.prototype.performVisualTasks = function(t, r, n) {
      this._performStageTasks(this._visualHandlers, t, r, n);
    }, e.prototype._performStageTasks = function(t, r, n, i) {
      i = i || {};
      var a = !1, o = this;
      D(t, function(u, l) {
        if (!(i.visualType && i.visualType !== u.visualType)) {
          var f = o._stageTaskMap.get(u.uid), h = f.seriesTaskMap, v = f.overallTask;
          if (v) {
            var c, d = v.agentStubMap;
            d.each(function(p) {
              s(i, p) && (p.dirty(), c = !0);
            }), c && v.dirty(), o.updatePayload(v, n);
            var y = o.getPerformArgs(v, i.block);
            d.each(function(p) {
              p.perform(y);
            }), v.perform(y) && (a = !0);
          } else h && h.each(function(p, g) {
            s(i, p) && p.dirty();
            var _ = o.getPerformArgs(p, i.block);
            _.skip = !u.performRawSeries && r.isSeriesFiltered(p.context.model), o.updatePayload(p, n), p.perform(_) && (a = !0);
          });
        }
      });
      function s(u, l) {
        return u.setDirty && (!u.dirtyMap || u.dirtyMap.get(l.__pipeline.id));
      }
      this.unfinished = a || this.unfinished;
    }, e.prototype.performSeriesTasks = function(t) {
      var r;
      t.eachSeries(function(n) {
        r = n.dataTask.perform() || r;
      }), this.unfinished = r || this.unfinished;
    }, e.prototype.plan = function() {
      this._pipelineMap.each(function(t) {
        var r = t.tail;
        do {
          if (r.__block) {
            t.blockIndex = r.__idxInPipeline;
            break;
          }
          r = r.getUpstream();
        } while (r);
      });
    }, e.prototype.updatePayload = function(t, r) {
      r !== "remain" && (t.context.payload = r);
    }, e.prototype._createSeriesStageTask = function(t, r, n, i) {
      var a = this, o = r.seriesTaskMap, s = r.seriesTaskMap = W(), u = t.seriesType, l = t.getTargetSeries;
      t.createOnAllSeries ? n.eachRawSeries(f) : u ? n.eachRawSeriesByType(u, f) : l && l(n, i).each(f);
      function f(h) {
        var v = h.uid, c = s.set(v, o && o.get(v) || _i({
          plan: Eb,
          reset: xb,
          count: Pb
        }));
        c.context = {
          model: h,
          ecModel: n,
          api: i,
          // PENDING: `useClearVisual` not used?
          useClearVisual: t.isVisual && !t.isLayout,
          plan: t.plan,
          reset: t.reset,
          scheduler: a
        }, a._pipe(h, c);
      }
    }, e.prototype._createOverallStageTask = function(t, r, n, i) {
      var a = this, o = r.overallTask = r.overallTask || _i({
        reset: Tb
      });
      o.context = {
        ecModel: n,
        api: i,
        overallReset: t.overallReset,
        scheduler: a
      };
      var s = o.agentStubMap, u = o.agentStubMap = W(), l = t.seriesType, f = t.getTargetSeries, h = !0, v = !1, c = "";
      process.env.NODE_ENV !== "production" && (c = '"createOnAllSeries" is not supported for "overallReset", because it will block all streams.'), U(!t.createOnAllSeries, c), l ? n.eachRawSeriesByType(l, d) : f ? f(n, i).each(d) : (h = !1, D(n.getSeries(), d));
      function d(y) {
        var p = y.uid, g = u.set(p, s && s.get(p) || // When the result of `getTargetSeries` changed, the overallTask
        // should be set as dirty and re-performed.
        (v = !0, _i({
          reset: Db,
          onDirty: Cb
        })));
        g.context = {
          model: y,
          overallProgress: h
          // FIXME:TS never used, so comment it
          // modifyOutputEnd: modifyOutputEnd
        }, g.agent = o, g.__block = h, a._pipe(y, g);
      }
      v && o.dirty();
    }, e.prototype._pipe = function(t, r) {
      var n = t.uid, i = this._pipelineMap.get(n);
      !i.head && (i.head = r), i.tail && i.tail.pipe(r), i.tail = r, r.__idxInPipeline = i.count++, r.__pipeline = i;
    }, e.wrapStageHandler = function(t, r) {
      return X(t) && (t = {
        overallReset: t,
        seriesType: Rb(t)
      }), t.uid = Ao("stageHandler"), r && (t.visualType = r), t;
    }, e;
  }()
);
function Tb(e) {
  e.overallReset(e.ecModel, e.api, e.payload);
}
function Db(e) {
  return e.overallProgress && Mb;
}
function Mb() {
  this.agent.dirty(), this.getDownstream().dirty();
}
function Cb() {
  this.agent && this.agent.dirty();
}
function Eb(e) {
  return e.plan ? e.plan(e.model, e.ecModel, e.api, e.payload) : null;
}
function xb(e) {
  e.useClearVisual && e.data.clearAllVisual();
  var t = e.resetDefines = xt(e.reset(e.model, e.ecModel, e.api, e.payload));
  return t.length > 1 ? k(t, function(r, n) {
    return pg(n);
  }) : Ob;
}
var Ob = pg(0);
function pg(e) {
  return function(t, r) {
    var n = r.data, i = r.resetDefines[e];
    if (i && i.dataEach)
      for (var a = t.start; a < t.end; a++)
        i.dataEach(n, a);
    else i && i.progress && i.progress(t, n);
  };
}
function Pb(e) {
  return e.data.count();
}
function Rb(e) {
  to = null;
  try {
    e(Ri, gg);
  } catch {
  }
  return to;
}
var Ri = {}, gg = {}, to;
yg(Ri, Fl);
yg(gg, qp);
Ri.eachSeriesByType = Ri.eachRawSeriesByType = function(e) {
  to = e;
};
Ri.eachComponent = function(e) {
  e.mainType === "series" && e.subType && (to = e.subType);
};
function yg(e, t) {
  for (var r in t.prototype)
    e[r] = Ut;
}
var _c = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"];
const Ib = {
  color: _c,
  colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], _c]
};
var mt = "#B9B8CE", mc = "#100C2A", va = function() {
  return {
    axisLine: {
      lineStyle: {
        color: mt
      }
    },
    splitLine: {
      lineStyle: {
        color: "#484753"
      }
    },
    splitArea: {
      areaStyle: {
        color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]
      }
    },
    minorSplitLine: {
      lineStyle: {
        color: "#20203B"
      }
    }
  };
}, Sc = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], _g = {
  darkMode: !0,
  color: Sc,
  backgroundColor: mc,
  axisPointer: {
    lineStyle: {
      color: "#817f91"
    },
    crossStyle: {
      color: "#817f91"
    },
    label: {
      // TODO Contrast of label backgorundColor
      color: "#fff"
    }
  },
  legend: {
    textStyle: {
      color: mt
    },
    pageTextStyle: {
      color: mt
    }
  },
  textStyle: {
    color: mt
  },
  title: {
    textStyle: {
      color: "#EEF1FA"
    },
    subtextStyle: {
      color: "#B9B8CE"
    }
  },
  toolbox: {
    iconStyle: {
      borderColor: mt
    }
  },
  dataZoom: {
    borderColor: "#71708A",
    textStyle: {
      color: mt
    },
    brushStyle: {
      color: "rgba(135,163,206,0.3)"
    },
    handleStyle: {
      color: "#353450",
      borderColor: "#C5CBE3"
    },
    moveHandleStyle: {
      color: "#B0B6C3",
      opacity: 0.3
    },
    fillerColor: "rgba(135,163,206,0.2)",
    emphasis: {
      handleStyle: {
        borderColor: "#91B7F2",
        color: "#4D587D"
      },
      moveHandleStyle: {
        color: "#636D9A",
        opacity: 0.7
      }
    },
    dataBackground: {
      lineStyle: {
        color: "#71708A",
        width: 1
      },
      areaStyle: {
        color: "#71708A"
      }
    },
    selectedDataBackground: {
      lineStyle: {
        color: "#87A3CE"
      },
      areaStyle: {
        color: "#87A3CE"
      }
    }
  },
  visualMap: {
    textStyle: {
      color: mt
    }
  },
  timeline: {
    lineStyle: {
      color: mt
    },
    label: {
      color: mt
    },
    controlStyle: {
      color: mt,
      borderColor: mt
    }
  },
  calendar: {
    itemStyle: {
      color: mc
    },
    dayLabel: {
      color: mt
    },
    monthLabel: {
      color: mt
    },
    yearLabel: {
      color: mt
    }
  },
  timeAxis: va(),
  logAxis: va(),
  valueAxis: va(),
  categoryAxis: va(),
  line: {
    symbol: "circle"
  },
  graph: {
    color: Sc
  },
  gauge: {
    title: {
      color: mt
    },
    axisLine: {
      lineStyle: {
        color: [[1, "rgba(207,212,219,0.2)"]]
      }
    },
    axisLabel: {
      color: mt
    },
    detail: {
      color: "#EEF1FA"
    }
  },
  candlestick: {
    itemStyle: {
      color: "#f64e56",
      color0: "#54ea92",
      borderColor: "#f64e56",
      borderColor0: "#54ea92"
      // borderColor: '#ca2824',
      // borderColor0: '#09a443'
    }
  }
};
_g.categoryAxis.splitLine.show = !1;
var Ab = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.normalizeQuery = function(t) {
      var r = {}, n = {}, i = {};
      if (V(t)) {
        var a = Me(t);
        r.mainType = a.main || null, r.subType = a.sub || null;
      } else {
        var o = ["Index", "Name", "Id"], s = {
          name: 1,
          dataIndex: 1,
          dataType: 1
        };
        D(t, function(u, l) {
          for (var f = !1, h = 0; h < o.length; h++) {
            var v = o[h], c = l.lastIndexOf(v);
            if (c > 0 && c === l.length - v.length) {
              var d = l.slice(0, c);
              d !== "data" && (r.mainType = d, r[v.toLowerCase()] = u, f = !0);
            }
          }
          s.hasOwnProperty(l) && (n[l] = u, f = !0), f || (i[l] = u);
        });
      }
      return {
        cptQuery: r,
        dataQuery: n,
        otherQuery: i
      };
    }, e.prototype.filter = function(t, r) {
      var n = this.eventInfo;
      if (!n)
        return !0;
      var i = n.targetEl, a = n.packedEvent, o = n.model, s = n.view;
      if (!o || !s)
        return !0;
      var u = r.cptQuery, l = r.dataQuery;
      return f(u, o, "mainType") && f(u, o, "subType") && f(u, o, "index", "componentIndex") && f(u, o, "name") && f(u, o, "id") && f(l, a, "name") && f(l, a, "dataIndex") && f(l, a, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, r.otherQuery, i, a));
      function f(h, v, c, d) {
        return h[c] == null || v[d || c] === h[c];
      }
    }, e.prototype.afterTrigger = function() {
      this.eventInfo = null;
    }, e;
  }()
), Zu = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"], wc = Zu.concat(["symbolKeepAspect"]), Nb = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(e, t) {
    var r = e.getData();
    if (e.legendIcon && r.setVisual("legendIcon", e.legendIcon), !e.hasSymbolVisual)
      return;
    for (var n = {}, i = {}, a = !1, o = 0; o < Zu.length; o++) {
      var s = Zu[o], u = e.get(s);
      X(u) ? (a = !0, i[s] = u) : n[s] = u;
    }
    if (n.symbol = n.symbol || e.defaultSymbol, r.setVisual(A({
      legendIcon: e.legendIcon || n.symbol,
      symbolKeepAspect: e.get("symbolKeepAspect")
    }, n)), t.isSeriesFiltered(e))
      return;
    var l = at(i);
    function f(h, v) {
      for (var c = e.getRawValue(v), d = e.getDataParams(v), y = 0; y < l.length; y++) {
        var p = l[y];
        h.setItemVisual(v, p, i[p](c, d));
      }
    }
    return {
      dataEach: a ? f : null
    };
  }
}, Lb = {
  createOnAllSeries: !0,
  // For legend.
  performRawSeries: !0,
  reset: function(e, t) {
    if (!e.hasSymbolVisual || t.isSeriesFiltered(e))
      return;
    var r = e.getData();
    function n(i, a) {
      for (var o = i.getItemModel(a), s = 0; s < wc.length; s++) {
        var u = wc[s], l = o.getShallow(u, !0);
        l != null && i.setItemVisual(a, u, l);
      }
    }
    return {
      dataEach: r.hasItemOption ? n : null
    };
  }
};
function kb(e, t, r) {
  switch (r) {
    case "color":
      var n = e.getItemVisual(t, "style");
      return n[e.getVisual("drawType")];
    case "opacity":
      return e.getItemVisual(t, "style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return e.getItemVisual(t, r);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + r);
  }
}
function Fb(e, t) {
  switch (t) {
    case "color":
      var r = e.getVisual("style");
      return r[e.getVisual("drawType")];
    case "opacity":
      return e.getVisual("style").opacity;
    case "symbol":
    case "symbolSize":
    case "liftZ":
      return e.getVisual(t);
    default:
      process.env.NODE_ENV !== "production" && console.warn("Unknown visual type " + t);
  }
}
function uC(e, t) {
  function r(n, i) {
    var a = [];
    return n.eachComponent({
      mainType: "series",
      subType: e,
      query: i
    }, function(o) {
      a.push(o.seriesIndex);
    }), a;
  }
  D([[e + "ToggleSelect", "toggleSelect"], [e + "Select", "select"], [e + "UnSelect", "unselect"]], function(n) {
    t(n[0], function(i, a, o) {
      i = A({}, i), process.env.NODE_ENV !== "production" && ft(i.type, n[1]), o.dispatchAction(A(i, {
        type: n[1],
        seriesIndex: r(a, i)
      }));
    });
  });
}
function ln(e, t, r, n, i) {
  var a = e + t;
  r.isSilent(a) || (process.env.NODE_ENV !== "production" && de("event " + a + " is deprecated."), n.eachComponent({
    mainType: "series",
    subType: "pie"
  }, function(o) {
    for (var s = o.seriesIndex, u = o.option.selectedMap, l = i.selected, f = 0; f < l.length; f++)
      if (l[f].seriesIndex === s) {
        var h = o.getData(), v = yo(h, i.fromActionPayload);
        r.trigger(a, {
          type: a,
          seriesId: o.id,
          name: L(v) ? h.getName(v[0]) : h.getName(v),
          selected: V(u) ? u : A({}, u)
        });
      }
  }));
}
function Bb(e, t, r) {
  e.on("selectchanged", function(n) {
    var i = r.getModel();
    n.isFromClick ? (ln("map", "selectchanged", t, i, n), ln("pie", "selectchanged", t, i, n)) : n.fromAction === "select" ? (ln("map", "selected", t, i, n), ln("pie", "selected", t, i, n)) : n.fromAction === "unselect" && (ln("map", "unselected", t, i, n), ln("pie", "unselected", t, i, n));
  });
}
function da(e, t, r) {
  for (var n; e && !(t(e) && (n = e, r)); )
    e = e.__hostTarget || e.parent;
  return n;
}
var Vb = Math.round(Math.random() * 9), zb = typeof Object.defineProperty == "function", Hb = function() {
  function e() {
    this._id = "__ec_inner_" + Vb++;
  }
  return e.prototype.get = function(t) {
    return this._guard(t)[this._id];
  }, e.prototype.set = function(t, r) {
    var n = this._guard(t);
    return zb ? Object.defineProperty(n, this._id, {
      value: r,
      enumerable: !1,
      configurable: !0
    }) : n[this._id] = r, this;
  }, e.prototype.delete = function(t) {
    return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1;
  }, e.prototype.has = function(t) {
    return !!this._guard(t)[this._id];
  }, e.prototype._guard = function(t) {
    if (t !== Object(t))
      throw TypeError("Value of WeakMap is not a non-null object.");
    return t;
  }, e;
}(), Gb = it.extend({
  type: "triangle",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
    e.moveTo(r, n - a), e.lineTo(r + i, n + a), e.lineTo(r - i, n + a), e.closePath();
  }
}), Ub = it.extend({
  type: "diamond",
  shape: {
    cx: 0,
    cy: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.cx, n = t.cy, i = t.width / 2, a = t.height / 2;
    e.moveTo(r, n - a), e.lineTo(r + i, n), e.lineTo(r, n + a), e.lineTo(r - i, n), e.closePath();
  }
}), Wb = it.extend({
  type: "pin",
  shape: {
    // x, y on the cusp
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.x, n = t.y, i = t.width / 5 * 3, a = Math.max(i, t.height), o = i / 2, s = o * o / (a - o), u = n - a + o + s, l = Math.asin(s / o), f = Math.cos(l) * o, h = Math.sin(l), v = Math.cos(l), c = o * 0.6, d = o * 0.7;
    e.moveTo(r - f, u + s), e.arc(r, u, o, Math.PI - l, Math.PI * 2 + l), e.bezierCurveTo(r + f - h * c, u + s + v * c, r, n - d, r, n), e.bezierCurveTo(r, n - d, r - f + h * c, u + s + v * c, r - f, u + s), e.closePath();
  }
}), Yb = it.extend({
  type: "arrow",
  shape: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  buildPath: function(e, t) {
    var r = t.height, n = t.width, i = t.x, a = t.y, o = n / 3 * 2;
    e.moveTo(i, a), e.lineTo(i + o, a + r), e.lineTo(i, a + r / 4 * 3), e.lineTo(i - o, a + r), e.lineTo(i, a), e.closePath();
  }
}), qb = {
  line: zi,
  rect: ve,
  roundRect: ve,
  square: ve,
  circle: Vi,
  diamond: Ub,
  pin: Wb,
  arrow: Yb,
  triangle: Gb
}, Xb = {
  line: function(e, t, r, n, i) {
    i.x1 = e, i.y1 = t + n / 2, i.x2 = e + r, i.y2 = t + n / 2;
  },
  rect: function(e, t, r, n, i) {
    i.x = e, i.y = t, i.width = r, i.height = n;
  },
  roundRect: function(e, t, r, n, i) {
    i.x = e, i.y = t, i.width = r, i.height = n, i.r = Math.min(r, n) / 4;
  },
  square: function(e, t, r, n, i) {
    var a = Math.min(r, n);
    i.x = e, i.y = t, i.width = a, i.height = a;
  },
  circle: function(e, t, r, n, i) {
    i.cx = e + r / 2, i.cy = t + n / 2, i.r = Math.min(r, n) / 2;
  },
  diamond: function(e, t, r, n, i) {
    i.cx = e + r / 2, i.cy = t + n / 2, i.width = r, i.height = n;
  },
  pin: function(e, t, r, n, i) {
    i.x = e + r / 2, i.y = t + n / 2, i.width = r, i.height = n;
  },
  arrow: function(e, t, r, n, i) {
    i.x = e + r / 2, i.y = t + n / 2, i.width = r, i.height = n;
  },
  triangle: function(e, t, r, n, i) {
    i.cx = e + r / 2, i.cy = t + n / 2, i.width = r, i.height = n;
  }
}, ju = {};
D(qb, function(e, t) {
  ju[t] = new e();
});
var $b = it.extend({
  type: "symbol",
  shape: {
    symbolType: "",
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  calculateTextPosition: function(e, t, r) {
    var n = _d(e, t, r), i = this.shape;
    return i && i.symbolType === "pin" && t.position === "inside" && (n.y = r.y + r.height * 0.4), n;
  },
  buildPath: function(e, t, r) {
    var n = t.symbolType;
    if (n !== "none") {
      var i = ju[n];
      i || (n = "rect", i = ju[n]), Xb[n](t.x, t.y, t.width, t.height, i.shape), i.buildPath(e, i.shape, r);
    }
  }
});
function Zb(e, t) {
  if (this.type !== "image") {
    var r = this.style;
    this.__isEmptyBrush ? (r.stroke = e, r.fill = t || "#fff", r.lineWidth = 2) : this.shape.symbolType === "line" ? r.stroke = e : r.fill = e, this.markRedraw();
  }
}
function mg(e, t, r, n, i, a, o) {
  var s = e.indexOf("empty") === 0;
  s && (e = e.substr(5, 1).toLowerCase() + e.substr(6));
  var u;
  return e.indexOf("image://") === 0 ? u = Ml(e.slice(8), new et(t, r, n, i), o ? "center" : "cover") : e.indexOf("path://") === 0 ? u = Ro(e.slice(7), {}, new et(t, r, n, i), o ? "center" : "cover") : u = new $b({
    shape: {
      symbolType: e,
      x: t,
      y: r,
      width: n,
      height: i
    }
  }), u.__isEmptyBrush = s, u.setColor = Zb, a && u.setColor(a), u;
}
function lC(e) {
  return L(e) || (e = [+e, +e]), [e[0] || 0, e[1] || 0];
}
function fC(e, t) {
  if (e != null)
    return L(e) || (e = [e, e]), [Ht(e[0], t[0]) || 0, Ht(q(e[1], e[0]), t[1]) || 0];
}
function Nr(e) {
  return isFinite(e);
}
function jb(e, t, r) {
  var n = t.x == null ? 0 : t.x, i = t.x2 == null ? 1 : t.x2, a = t.y == null ? 0 : t.y, o = t.y2 == null ? 0 : t.y2;
  t.global || (n = n * r.width + r.x, i = i * r.width + r.x, a = a * r.height + r.y, o = o * r.height + r.y), n = Nr(n) ? n : 0, i = Nr(i) ? i : 1, a = Nr(a) ? a : 0, o = Nr(o) ? o : 0;
  var s = e.createLinearGradient(n, a, i, o);
  return s;
}
function Kb(e, t, r) {
  var n = r.width, i = r.height, a = Math.min(n, i), o = t.x == null ? 0.5 : t.x, s = t.y == null ? 0.5 : t.y, u = t.r == null ? 0.5 : t.r;
  t.global || (o = o * n + r.x, s = s * i + r.y, u = u * a), o = Nr(o) ? o : 0.5, s = Nr(s) ? s : 0.5, u = u >= 0 && Nr(u) ? u : 0.5;
  var l = e.createRadialGradient(o, s, 0, o, s, u);
  return l;
}
function bc(e, t, r) {
  for (var n = t.type === "radial" ? Kb(e, t, r) : jb(e, t, r), i = t.colorStops, a = 0; a < i.length; a++)
    n.addColorStop(i[a].offset, i[a].color);
  return n;
}
function Qb(e, t) {
  if (e === t || !e && !t)
    return !1;
  if (!e || !t || e.length !== t.length)
    return !0;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !0;
  return !1;
}
function pa(e) {
  return parseInt(e, 10);
}
function hC(e, t, r) {
  var n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t], a = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
  if (r[n] != null && r[n] !== "auto")
    return parseFloat(r[n]);
  var s = document.defaultView.getComputedStyle(e);
  return (e[i] || pa(s[n]) || pa(e.style[n])) - (pa(s[a]) || 0) - (pa(s[o]) || 0) | 0;
}
function Jb(e, t) {
  return !e || e === "solid" || !(t > 0) ? null : e === "dashed" ? [4 * t, 2 * t] : e === "dotted" ? [t] : lt(e) ? [e] : L(e) ? e : null;
}
function Sg(e) {
  var t = e.style, r = t.lineDash && t.lineWidth > 0 && Jb(t.lineDash, t.lineWidth), n = t.lineDashOffset;
  if (r) {
    var i = t.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
    i && i !== 1 && (r = k(r, function(a) {
      return a / i;
    }), n /= i);
  }
  return [r, n];
}
var tT = new Mn(!0);
function eo(e) {
  var t = e.stroke;
  return !(t == null || t === "none" || !(e.lineWidth > 0));
}
function Tc(e) {
  return typeof e == "string" && e !== "none";
}
function ro(e) {
  var t = e.fill;
  return t != null && t !== "none";
}
function Dc(e, t) {
  if (t.fillOpacity != null && t.fillOpacity !== 1) {
    var r = e.globalAlpha;
    e.globalAlpha = t.fillOpacity * t.opacity, e.fill(), e.globalAlpha = r;
  } else
    e.fill();
}
function Mc(e, t) {
  if (t.strokeOpacity != null && t.strokeOpacity !== 1) {
    var r = e.globalAlpha;
    e.globalAlpha = t.strokeOpacity * t.opacity, e.stroke(), e.globalAlpha = r;
  } else
    e.stroke();
}
function Cc(e, t, r) {
  var n = Ld(t.image, t.__image, r);
  if (So(n)) {
    var i = e.createPattern(n, t.repeat || "repeat");
    if (typeof DOMMatrix == "function" && i && i.setTransform) {
      var a = new DOMMatrix();
      a.translateSelf(t.x || 0, t.y || 0), a.rotateSelf(0, 0, (t.rotation || 0) * fi), a.scaleSelf(t.scaleX || 1, t.scaleY || 1), i.setTransform(a);
    }
    return i;
  }
}
function eT(e, t, r, n) {
  var i, a = eo(r), o = ro(r), s = r.strokePercent, u = s < 1, l = !t.path;
  (!t.silent || u) && l && t.createPathProxy();
  var f = t.path || tT, h = t.__dirty;
  if (!n) {
    var v = r.fill, c = r.stroke, d = o && !!v.colorStops, y = a && !!c.colorStops, p = o && !!v.image, g = a && !!c.image, _ = void 0, m = void 0, S = void 0, b = void 0, w = void 0;
    (d || y) && (w = t.getBoundingRect()), d && (_ = h ? bc(e, v, w) : t.__canvasFillGradient, t.__canvasFillGradient = _), y && (m = h ? bc(e, c, w) : t.__canvasStrokeGradient, t.__canvasStrokeGradient = m), p && (S = h || !t.__canvasFillPattern ? Cc(e, v, t) : t.__canvasFillPattern, t.__canvasFillPattern = S), g && (b = h || !t.__canvasStrokePattern ? Cc(e, c, t) : t.__canvasStrokePattern, t.__canvasStrokePattern = S), d ? e.fillStyle = _ : p && (S ? e.fillStyle = S : o = !1), y ? e.strokeStyle = m : g && (b ? e.strokeStyle = b : a = !1);
  }
  var T = t.getGlobalScale();
  f.setScale(T[0], T[1], t.segmentIgnoreThreshold);
  var E, M;
  e.setLineDash && r.lineDash && (i = Sg(t), E = i[0], M = i[1]);
  var C = !0;
  (l || h & ri) && (f.setDPR(e.dpr), u ? f.setContext(null) : (f.setContext(e), C = !1), f.reset(), t.buildPath(f, t.shape, n), f.toStatic(), t.pathUpdated()), C && f.rebuildPath(e, u ? s : 1), E && (e.setLineDash(E), e.lineDashOffset = M), n || (r.strokeFirst ? (a && Mc(e, r), o && Dc(e, r)) : (o && Dc(e, r), a && Mc(e, r))), E && e.setLineDash([]);
}
function rT(e, t, r) {
  var n = t.__image = Ld(r.image, t.__image, t, t.onload);
  if (!(!n || !So(n))) {
    var i = r.x || 0, a = r.y || 0, o = t.getWidth(), s = t.getHeight(), u = n.width / n.height;
    if (o == null && s != null ? o = s * u : s == null && o != null ? s = o / u : o == null && s == null && (o = n.width, s = n.height), r.sWidth && r.sHeight) {
      var l = r.sx || 0, f = r.sy || 0;
      e.drawImage(n, l, f, r.sWidth, r.sHeight, i, a, o, s);
    } else if (r.sx && r.sy) {
      var l = r.sx, f = r.sy, h = o - l, v = s - f;
      e.drawImage(n, l, f, h, v, i, a, o, s);
    } else
      e.drawImage(n, i, a, o, s);
  }
}
function nT(e, t, r) {
  var n, i = r.text;
  if (i != null && (i += ""), i) {
    e.font = r.font || Gr, e.textAlign = r.textAlign, e.textBaseline = r.textBaseline;
    var a = void 0, o = void 0;
    e.setLineDash && r.lineDash && (n = Sg(t), a = n[0], o = n[1]), a && (e.setLineDash(a), e.lineDashOffset = o), r.strokeFirst ? (eo(r) && e.strokeText(i, r.x, r.y), ro(r) && e.fillText(i, r.x, r.y)) : (ro(r) && e.fillText(i, r.x, r.y), eo(r) && e.strokeText(i, r.x, r.y)), a && e.setLineDash([]);
  }
}
var Ec = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"], xc = [
  ["lineCap", "butt"],
  ["lineJoin", "miter"],
  ["miterLimit", 10]
];
function wg(e, t, r, n, i) {
  var a = !1;
  if (!n && (r = r || {}, t === r))
    return !1;
  if (n || t.opacity !== r.opacity) {
    Lt(e, i), a = !0;
    var o = Math.max(Math.min(t.opacity, 1), 0);
    e.globalAlpha = isNaN(o) ? Vr.opacity : o;
  }
  (n || t.blend !== r.blend) && (a || (Lt(e, i), a = !0), e.globalCompositeOperation = t.blend || Vr.blend);
  for (var s = 0; s < Ec.length; s++) {
    var u = Ec[s];
    (n || t[u] !== r[u]) && (a || (Lt(e, i), a = !0), e[u] = e.dpr * (t[u] || 0));
  }
  return (n || t.shadowColor !== r.shadowColor) && (a || (Lt(e, i), a = !0), e.shadowColor = t.shadowColor || Vr.shadowColor), a;
}
function Oc(e, t, r, n, i) {
  var a = Ii(t, i.inHover), o = n ? null : r && Ii(r, i.inHover) || {};
  if (a === o)
    return !1;
  var s = wg(e, a, o, n, i);
  if ((n || a.fill !== o.fill) && (s || (Lt(e, i), s = !0), Tc(a.fill) && (e.fillStyle = a.fill)), (n || a.stroke !== o.stroke) && (s || (Lt(e, i), s = !0), Tc(a.stroke) && (e.strokeStyle = a.stroke)), (n || a.opacity !== o.opacity) && (s || (Lt(e, i), s = !0), e.globalAlpha = a.opacity == null ? 1 : a.opacity), t.hasStroke()) {
    var u = a.lineWidth, l = u / (a.strokeNoScale && t.getLineScale ? t.getLineScale() : 1);
    e.lineWidth !== l && (s || (Lt(e, i), s = !0), e.lineWidth = l);
  }
  for (var f = 0; f < xc.length; f++) {
    var h = xc[f], v = h[0];
    (n || a[v] !== o[v]) && (s || (Lt(e, i), s = !0), e[v] = a[v] || h[1]);
  }
  return s;
}
function iT(e, t, r, n, i) {
  return wg(e, Ii(t, i.inHover), r && Ii(r, i.inHover), n, i);
}
function bg(e, t) {
  var r = t.transform, n = e.dpr || 1;
  r ? e.setTransform(n * r[0], n * r[1], n * r[2], n * r[3], n * r[4], n * r[5]) : e.setTransform(n, 0, 0, n, 0, 0);
}
function aT(e, t, r) {
  for (var n = !1, i = 0; i < e.length; i++) {
    var a = e[i];
    n = n || a.isZeroArea(), bg(t, a), t.beginPath(), a.buildPath(t, a.shape), t.clip();
  }
  r.allClipped = n;
}
function oT(e, t) {
  return e && t ? e[0] !== t[0] || e[1] !== t[1] || e[2] !== t[2] || e[3] !== t[3] || e[4] !== t[4] || e[5] !== t[5] : !(!e && !t);
}
var Pc = 1, Rc = 2, Ic = 3, Ac = 4;
function sT(e) {
  var t = ro(e), r = eo(e);
  return !(e.lineDash || !(+t ^ +r) || t && typeof e.fill != "string" || r && typeof e.stroke != "string" || e.strokePercent < 1 || e.strokeOpacity < 1 || e.fillOpacity < 1);
}
function Lt(e, t) {
  t.batchFill && e.fill(), t.batchStroke && e.stroke(), t.batchFill = "", t.batchStroke = "";
}
function Ii(e, t) {
  return t && e.__hoverStyle || e.style;
}
function Tg(e, t) {
  Ku(e, t, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
}
function Ku(e, t, r, n) {
  var i = t.transform;
  if (!t.shouldBePainted(r.viewWidth, r.viewHeight, !1, !1)) {
    t.__dirty &= -2, t.__isRendered = !1;
    return;
  }
  var a = t.__clipPaths, o = r.prevElClipPaths, s = !1, u = !1;
  if ((!o || Qb(a, o)) && (o && o.length && (Lt(e, r), e.restore(), u = s = !0, r.prevElClipPaths = null, r.allClipped = !1, r.prevEl = null), a && a.length && (Lt(e, r), e.save(), aT(a, e, r), s = !0), r.prevElClipPaths = a), r.allClipped) {
    t.__isRendered = !1;
    return;
  }
  t.beforeBrush && t.beforeBrush(), t.innerBeforeBrush();
  var l = r.prevEl;
  l || (u = s = !0);
  var f = t instanceof it && t.autoBatch && sT(t.style);
  s || oT(i, l.transform) ? (Lt(e, r), bg(e, t)) : f || Lt(e, r);
  var h = Ii(t, r.inHover);
  t instanceof it ? (r.lastDrawType !== Pc && (u = !0, r.lastDrawType = Pc), Oc(e, t, l, u, r), (!f || !r.batchFill && !r.batchStroke) && e.beginPath(), eT(e, t, h, f), f && (r.batchFill = h.fill || "", r.batchStroke = h.stroke || "")) : t instanceof Wa ? (r.lastDrawType !== Ic && (u = !0, r.lastDrawType = Ic), Oc(e, t, l, u, r), nT(e, t, h)) : t instanceof or ? (r.lastDrawType !== Rc && (u = !0, r.lastDrawType = Rc), iT(e, t, l, u, r), rT(e, t, h)) : t.getTemporalDisplayables && (r.lastDrawType !== Ac && (u = !0, r.lastDrawType = Ac), uT(e, t, r)), f && n && Lt(e, r), t.innerAfterBrush(), t.afterBrush && t.afterBrush(), r.prevEl = t, t.__dirty = 0, t.__isRendered = !0;
}
function uT(e, t, r) {
  var n = t.getDisplayables(), i = t.getTemporalDisplayables();
  e.save();
  var a = {
    prevElClipPaths: null,
    prevEl: null,
    allClipped: !1,
    viewWidth: r.viewWidth,
    viewHeight: r.viewHeight,
    inHover: r.inHover
  }, o, s;
  for (o = t.getCursor(), s = n.length; o < s; o++) {
    var u = n[o];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Ku(e, u, a, o === s - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  for (var l = 0, f = i.length; l < f; l++) {
    var u = i[l];
    u.beforeBrush && u.beforeBrush(), u.innerBeforeBrush(), Ku(e, u, a, l === f - 1), u.innerAfterBrush(), u.afterBrush && u.afterBrush(), a.prevEl = u;
  }
  t.clearTemporalDisplayables(), t.notClear = !0, e.restore();
}
var Us = new Hb(), Nc = new Li(100), Lc = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"];
function kc(e, t) {
  if (e === "none")
    return null;
  var r = t.getDevicePixelRatio(), n = t.getZr(), i = n.painter.type === "svg";
  e.dirty && Us.delete(e);
  var a = Us.get(e);
  if (a)
    return a;
  var o = ht(e, {
    symbol: "rect",
    symbolSize: 1,
    symbolKeepAspect: !0,
    color: "rgba(0, 0, 0, 0.2)",
    backgroundColor: null,
    dashArrayX: 5,
    dashArrayY: 5,
    rotation: 0,
    maxTileWidth: 512,
    maxTileHeight: 512
  });
  o.backgroundColor === "none" && (o.backgroundColor = null);
  var s = {
    repeat: "repeat"
  };
  return u(s), s.rotation = o.rotation, s.scaleX = s.scaleY = i ? 1 : 1 / r, Us.set(e, s), e.dirty = !1, s;
  function u(l) {
    for (var f = [r], h = !0, v = 0; v < Lc.length; ++v) {
      var c = o[Lc[v]];
      if (c != null && !L(c) && !V(c) && !lt(c) && typeof c != "boolean") {
        h = !1;
        break;
      }
      f.push(c);
    }
    var d;
    if (h) {
      d = f.join(",") + (i ? "-svg" : "");
      var y = Nc.get(d);
      y && (i ? l.svgElement = y : l.image = y);
    }
    var p = Mg(o.dashArrayX), g = lT(o.dashArrayY), _ = Dg(o.symbol), m = fT(p), S = Cg(g), b = !i && rr.createCanvas(), w = i && {
      tag: "g",
      attrs: {},
      key: "dcl",
      children: []
    }, T = M(), E;
    b && (b.width = T.width * r, b.height = T.height * r, E = b.getContext("2d")), C(), h && Nc.put(d, b || w), l.image = b, l.svgElement = w, l.svgWidth = T.width, l.svgHeight = T.height;
    function M() {
      for (var x = 1, O = 0, R = m.length; O < R; ++O)
        x = qf(x, m[O]);
      for (var P = 1, O = 0, R = _.length; O < R; ++O)
        P = qf(P, _[O].length);
      x *= P;
      var N = S * m.length * _.length;
      if (process.env.NODE_ENV !== "production") {
        var I = function(G) {
          console.warn("Calculated decal size is greater than " + G + " due to decal option settings so " + G + " is used for the decal size. Please consider changing the decal option to make a smaller decal or set " + G + " to be larger to avoid incontinuity.");
        };
        x > o.maxTileWidth && I("maxTileWidth"), N > o.maxTileHeight && I("maxTileHeight");
      }
      return {
        width: Math.max(1, Math.min(x, o.maxTileWidth)),
        height: Math.max(1, Math.min(N, o.maxTileHeight))
      };
    }
    function C() {
      E && (E.clearRect(0, 0, b.width, b.height), o.backgroundColor && (E.fillStyle = o.backgroundColor, E.fillRect(0, 0, b.width, b.height)));
      for (var x = 0, O = 0; O < g.length; ++O)
        x += g[O];
      if (x <= 0)
        return;
      for (var R = -S, P = 0, N = 0, I = 0; R < T.height; ) {
        if (P % 2 === 0) {
          for (var G = N / 2 % _.length, B = 0, z = 0, Y = 0; B < T.width * 2; ) {
            for (var nt = 0, O = 0; O < p[I].length; ++O)
              nt += p[I][O];
            if (nt <= 0)
              break;
            if (z % 2 === 0) {
              var Q = (1 - o.symbolSize) * 0.5, gt = B + p[I][z] * Q, Xt = R + g[P] * Q, We = p[I][z] * o.symbolSize, ur = g[P] * o.symbolSize, lr = Y / 2 % _[G].length;
              Zr(gt, Xt, We, ur, _[G][lr]);
            }
            B += p[I][z], ++Y, ++z, z === p[I].length && (z = 0);
          }
          ++I, I === p.length && (I = 0);
        }
        R += g[P], ++N, ++P, P === g.length && (P = 0);
      }
      function Zr(Vt, dt, H, $, fr) {
        var Dt = i ? 1 : r, rf = mg(fr, Vt * Dt, dt * Dt, H * Dt, $ * Dt, o.color, o.symbolKeepAspect);
        if (i) {
          var nf = n.painter.renderOneToVNode(rf);
          nf && w.children.push(nf);
        } else
          Tg(E, rf);
      }
    }
  }
}
function Dg(e) {
  if (!e || e.length === 0)
    return [["rect"]];
  if (V(e))
    return [[e]];
  for (var t = !0, r = 0; r < e.length; ++r)
    if (!V(e[r])) {
      t = !1;
      break;
    }
  if (t)
    return Dg([e]);
  for (var n = [], r = 0; r < e.length; ++r)
    V(e[r]) ? n.push([e[r]]) : n.push(e[r]);
  return n;
}
function Mg(e) {
  if (!e || e.length === 0)
    return [[0, 0]];
  if (lt(e)) {
    var t = Math.ceil(e);
    return [[t, t]];
  }
  for (var r = !0, n = 0; n < e.length; ++n)
    if (!lt(e[n])) {
      r = !1;
      break;
    }
  if (r)
    return Mg([e]);
  for (var i = [], n = 0; n < e.length; ++n)
    if (lt(e[n])) {
      var t = Math.ceil(e[n]);
      i.push([t, t]);
    } else {
      var t = k(e[n], function(s) {
        return Math.ceil(s);
      });
      t.length % 2 === 1 ? i.push(t.concat(t)) : i.push(t);
    }
  return i;
}
function lT(e) {
  if (!e || typeof e == "object" && e.length === 0)
    return [0, 0];
  if (lt(e)) {
    var t = Math.ceil(e);
    return [t, t];
  }
  var r = k(e, function(n) {
    return Math.ceil(n);
  });
  return e.length % 2 ? r.concat(r) : r;
}
function fT(e) {
  return k(e, function(t) {
    return Cg(t);
  });
}
function Cg(e) {
  for (var t = 0, r = 0; r < e.length; ++r)
    t += e[r];
  return e.length % 2 === 1 ? t * 2 : t;
}
function hT(e, t) {
  e.eachRawSeries(function(r) {
    if (!e.isSeriesFiltered(r)) {
      var n = r.getData();
      n.hasItemVisual() && n.each(function(o) {
        var s = n.getItemVisual(o, "decal");
        if (s) {
          var u = n.ensureUniqueItemVisual(o, "style");
          u.decal = kc(s, t);
        }
      });
      var i = n.getVisual("decal");
      if (i) {
        var a = n.getVisual("style");
        a.decal = kc(i, t);
      }
    }
  });
}
var he = new Ge(), no = {};
function cT(e, t) {
  process.env.NODE_ENV !== "production" && no[e] && Tt("Already has an implementation of " + e + "."), no[e] = t;
}
function Eg(e) {
  return process.env.NODE_ENV !== "production" && (no[e] || Tt("Implementation of " + e + " doesn't exists.")), no[e];
}
var vT = "5.6.0", dT = {
  zrender: "5.6.1"
}, pT = 1, gT = 800, yT = 900, _T = 1e3, mT = 2e3, ST = 5e3, xg = 1e3, wT = 1100, Gl = 2e3, Og = 3e3, bT = 4e3, Go = 4500, TT = 4600, DT = 5e3, MT = 6e3, Pg = 7e3, Rg = {
  PROCESSOR: {
    FILTER: _T,
    SERIES_FILTER: gT,
    STATISTIC: ST
  },
  VISUAL: {
    LAYOUT: xg,
    PROGRESSIVE_LAYOUT: wT,
    GLOBAL: Gl,
    CHART: Og,
    POST_CHART_LAYOUT: TT,
    COMPONENT: bT,
    BRUSH: DT,
    CHART_ITEM: Go,
    ARIA: MT,
    DECAL: Pg
  }
}, _t = "__flagInMainProcess", It = "__pendingUpdate", Ws = "__needsUpdateStatus", Fc = /^[a-zA-Z0-9_]+$/, Ys = "__connectUpdateStatus", Bc = 0, CT = 1, ET = 2;
function Ig(e) {
  return function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    if (this.isDisposed()) {
      zt(this.id);
      return;
    }
    return Ng(this, e, t);
  };
}
function Ag(e) {
  return function() {
    for (var t = [], r = 0; r < arguments.length; r++)
      t[r] = arguments[r];
    return Ng(this, e, t);
  };
}
function Ng(e, t, r) {
  return r[0] = r[0] && r[0].toLowerCase(), Ge.prototype[t].apply(e, r);
}
var Lg = (
  /** @class */
  function(e) {
    qt(t, e);
    function t() {
      return e !== null && e.apply(this, arguments) || this;
    }
    return t;
  }(Ge)
), kg = Lg.prototype;
kg.on = Ag("on");
kg.off = Ag("off");
var fn, qs, ga, $e, Xs, $s, Zs, jn, Kn, Vc, zc, js, Hc, ya, Gc, Fg, Zt, Uc, io = (
  /** @class */
  function(e) {
    qt(t, e);
    function t(r, n, i) {
      var a = e.call(this, new Ab()) || this;
      a._chartsViews = [], a._chartsMap = {}, a._componentsViews = [], a._componentsMap = {}, a._pendingActions = [], i = i || {}, V(n) && (n = Bg[n]), a._dom = r;
      var o = "canvas", s = "auto", u = !1;
      if (process.env.NODE_ENV !== "production") {
        var l = (
          /* eslint-disable-next-line */
          Z.hasGlobalWindow ? window : global
        );
        l && (o = q(l.__ECHARTS__DEFAULT__RENDERER__, o), s = q(l.__ECHARTS__DEFAULT__COARSE_POINTER, s), u = q(l.__ECHARTS__DEFAULT__USE_DIRTY_RECT__, u));
      }
      i.ssr && wd(function(c) {
        var d = kt(c), y = d.dataIndex;
        if (y != null) {
          var p = W();
          return p.set("series_index", d.seriesIndex), p.set("data_index", y), d.ssrType && p.set("ssr_type", d.ssrType), p;
        }
      });
      var f = a._zr = Eu(r, {
        renderer: i.renderer || o,
        devicePixelRatio: i.devicePixelRatio,
        width: i.width,
        height: i.height,
        ssr: i.ssr,
        useDirtyRect: q(i.useDirtyRect, u),
        useCoarsePointer: q(i.useCoarsePointer, s),
        pointerSize: i.pointerSize
      });
      a._ssr = i.ssr, a._throttledZrFlush = Hl(wt(f.flush, f), 17), n = j(n), n && $p(n, !0), a._theme = n, a._locale = NS(i.locale || xp), a._coordSysMgr = new Vo();
      var h = a._api = Gc(a);
      function v(c, d) {
        return c.__prio - d.__prio;
      }
      return Da(oo, v), Da(Qu, v), a._scheduler = new dg(a, h, Qu, oo), a._messageCenter = new Lg(), a._initEvents(), a.resize = wt(a.resize, a), f.animation.on("frame", a._onframe, a), Vc(f, a), zc(f, a), Ba(a), a;
    }
    return t.prototype._onframe = function() {
      if (!this._disposed) {
        Uc(this);
        var r = this._scheduler;
        if (this[It]) {
          var n = this[It].silent;
          this[_t] = !0;
          try {
            fn(this), $e.update.call(this, null, this[It].updateParams);
          } catch (u) {
            throw this[_t] = !1, this[It] = null, u;
          }
          this._zr.flush(), this[_t] = !1, this[It] = null, jn.call(this, n), Kn.call(this, n);
        } else if (r.unfinished) {
          var i = pT, a = this._model, o = this._api;
          r.unfinished = !1;
          do {
            var s = +/* @__PURE__ */ new Date();
            r.performSeriesTasks(a), r.performDataProcessorTasks(a), $s(this, a), r.performVisualTasks(a), ya(this, this._model, o, "remain", {}), i -= +/* @__PURE__ */ new Date() - s;
          } while (i > 0 && r.unfinished);
          r.unfinished || this._zr.flush();
        }
      }
    }, t.prototype.getDom = function() {
      return this._dom;
    }, t.prototype.getId = function() {
      return this.id;
    }, t.prototype.getZr = function() {
      return this._zr;
    }, t.prototype.isSSR = function() {
      return this._ssr;
    }, t.prototype.setOption = function(r, n, i) {
      if (this[_t]) {
        process.env.NODE_ENV !== "production" && Tt("`setOption` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        zt(this.id);
        return;
      }
      var a, o, s;
      if (F(n) && (i = n.lazyUpdate, a = n.silent, o = n.replaceMerge, s = n.transition, n = n.notMerge), this[_t] = !0, !this._model || n) {
        var u = new vw(this._api), l = this._theme, f = this._model = new Fl();
        f.scheduler = this._scheduler, f.ssr = this._ssr, f.init(null, null, null, l, this._locale, u);
      }
      this._model.setOption(r, {
        replaceMerge: o
      }, Ju);
      var h = {
        seriesTransition: s,
        optionChanged: !0
      };
      if (i)
        this[It] = {
          silent: a,
          updateParams: h
        }, this[_t] = !1, this.getZr().wakeUp();
      else {
        try {
          fn(this), $e.update.call(this, null, h);
        } catch (v) {
          throw this[It] = null, this[_t] = !1, v;
        }
        this._ssr || this._zr.flush(), this[It] = null, this[_t] = !1, jn.call(this, a), Kn.call(this, a);
      }
    }, t.prototype.setTheme = function() {
      de("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
    }, t.prototype.getModel = function() {
      return this._model;
    }, t.prototype.getOption = function() {
      return this._model && this._model.getOption();
    }, t.prototype.getWidth = function() {
      return this._zr.getWidth();
    }, t.prototype.getHeight = function() {
      return this._zr.getHeight();
    }, t.prototype.getDevicePixelRatio = function() {
      return this._zr.painter.dpr || Z.hasGlobalWindow && window.devicePixelRatio || 1;
    }, t.prototype.getRenderedCanvas = function(r) {
      return process.env.NODE_ENV !== "production" && ft("getRenderedCanvas", "renderToCanvas"), this.renderToCanvas(r);
    }, t.prototype.renderToCanvas = function(r) {
      r = r || {};
      var n = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && n.type !== "canvas")
        throw new Error("renderToCanvas can only be used in the canvas renderer.");
      return n.getRenderedCanvas({
        backgroundColor: r.backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: r.pixelRatio || this.getDevicePixelRatio()
      });
    }, t.prototype.renderToSVGString = function(r) {
      r = r || {};
      var n = this._zr.painter;
      if (process.env.NODE_ENV !== "production" && n.type !== "svg")
        throw new Error("renderToSVGString can only be used in the svg renderer.");
      return n.renderToString({
        useViewBox: r.useViewBox
      });
    }, t.prototype.getSvgDataURL = function() {
      if (Z.svgSupported) {
        var r = this._zr, n = r.storage.getDisplayList();
        return D(n, function(i) {
          i.stopAnimation(null, !0);
        }), r.painter.toDataURL();
      }
    }, t.prototype.getDataURL = function(r) {
      if (this._disposed) {
        zt(this.id);
        return;
      }
      r = r || {};
      var n = r.excludeComponents, i = this._model, a = [], o = this;
      D(n, function(u) {
        i.eachComponent({
          mainType: u
        }, function(l) {
          var f = o._componentsMap[l.__viewId];
          f.group.ignore || (a.push(f), f.group.ignore = !0);
        });
      });
      var s = this._zr.painter.getType() === "svg" ? this.getSvgDataURL() : this.renderToCanvas(r).toDataURL("image/" + (r && r.type || "png"));
      return D(a, function(u) {
        u.group.ignore = !1;
      }), s;
    }, t.prototype.getConnectedDataURL = function(r) {
      if (this._disposed) {
        zt(this.id);
        return;
      }
      var n = r.type === "svg", i = this.group, a = Math.min, o = Math.max, s = 1 / 0;
      if (so[i]) {
        var u = s, l = s, f = -s, h = -s, v = [], c = r && r.pixelRatio || this.getDevicePixelRatio();
        D(Hr, function(m, S) {
          if (m.group === i) {
            var b = n ? m.getZr().painter.getSvgDom().innerHTML : m.renderToCanvas(j(r)), w = m.getDom().getBoundingClientRect();
            u = a(w.left, u), l = a(w.top, l), f = o(w.right, f), h = o(w.bottom, h), v.push({
              dom: b,
              left: w.left,
              top: w.top
            });
          }
        }), u *= c, l *= c, f *= c, h *= c;
        var d = f - u, y = h - l, p = rr.createCanvas(), g = Eu(p, {
          renderer: n ? "svg" : "canvas"
        });
        if (g.resize({
          width: d,
          height: y
        }), n) {
          var _ = "";
          return D(v, function(m) {
            var S = m.left - u, b = m.top - l;
            _ += '<g transform="translate(' + S + "," + b + ')">' + m.dom + "</g>";
          }), g.painter.getSvgRoot().innerHTML = _, r.connectedBackgroundColor && g.painter.setBackgroundColor(r.connectedBackgroundColor), g.refreshImmediately(), g.painter.toDataURL();
        } else
          return r.connectedBackgroundColor && g.add(new ve({
            shape: {
              x: 0,
              y: 0,
              width: d,
              height: y
            },
            style: {
              fill: r.connectedBackgroundColor
            }
          })), D(v, function(m) {
            var S = new or({
              style: {
                x: m.left * c - u,
                y: m.top * c - l,
                image: m.dom
              }
            });
            g.add(S);
          }), g.refreshImmediately(), p.toDataURL("image/" + (r && r.type || "png"));
      } else
        return this.getDataURL(r);
    }, t.prototype.convertToPixel = function(r, n) {
      return Xs(this, "convertToPixel", r, n);
    }, t.prototype.convertFromPixel = function(r, n) {
      return Xs(this, "convertFromPixel", r, n);
    }, t.prototype.containPixel = function(r, n) {
      if (this._disposed) {
        zt(this.id);
        return;
      }
      var i = this._model, a, o = gs(i, r);
      return D(o, function(s, u) {
        u.indexOf("Models") >= 0 && D(s, function(l) {
          var f = l.coordinateSystem;
          if (f && f.containPoint)
            a = a || !!f.containPoint(n);
          else if (u === "seriesModels") {
            var h = this._chartsMap[l.__viewId];
            h && h.containPoint ? a = a || h.containPoint(n, l) : process.env.NODE_ENV !== "production" && te(u + ": " + (h ? "The found component do not support containPoint." : "No view mapping to the found component."));
          } else
            process.env.NODE_ENV !== "production" && te(u + ": containPoint is not supported");
        }, this);
      }, this), !!a;
    }, t.prototype.getVisual = function(r, n) {
      var i = this._model, a = gs(i, r, {
        defaultMainType: "series"
      }), o = a.seriesModel;
      process.env.NODE_ENV !== "production" && (o || te("There is no specified series model"));
      var s = o.getData(), u = a.hasOwnProperty("dataIndexInside") ? a.dataIndexInside : a.hasOwnProperty("dataIndex") ? s.indexOfRawIndex(a.dataIndex) : null;
      return u != null ? kb(s, u, n) : Fb(s, n);
    }, t.prototype.getViewOfComponentModel = function(r) {
      return this._componentsMap[r.__viewId];
    }, t.prototype.getViewOfSeriesModel = function(r) {
      return this._chartsMap[r.__viewId];
    }, t.prototype._initEvents = function() {
      var r = this;
      D(xT, function(n) {
        var i = function(a) {
          var o = r.getModel(), s = a.target, u, l = n === "globalout";
          if (l ? u = {} : s && da(s, function(d) {
            var y = kt(d);
            if (y && y.dataIndex != null) {
              var p = y.dataModel || o.getSeriesByIndex(y.seriesIndex);
              return u = p && p.getDataParams(y.dataIndex, y.dataType, s) || {}, !0;
            } else if (y.eventData)
              return u = A({}, y.eventData), !0;
          }, !0), u) {
            var f = u.componentType, h = u.componentIndex;
            (f === "markLine" || f === "markPoint" || f === "markArea") && (f = "series", h = u.seriesIndex);
            var v = f && h != null && o.getComponent(f, h), c = v && r[v.mainType === "series" ? "_chartsMap" : "_componentsMap"][v.__viewId];
            process.env.NODE_ENV !== "production" && !l && !(v && c) && te("model or view can not be found by params"), u.event = a, u.type = n, r._$eventProcessor.eventInfo = {
              targetEl: s,
              packedEvent: u,
              model: v,
              view: c
            }, r.trigger(n, u);
          }
        };
        i.zrEventfulCallAtLast = !0, r._zr.on(n, i, r);
      }), D(mi, function(n, i) {
        r._messageCenter.on(i, function(a) {
          this.trigger(i, a);
        }, r);
      }), D(["selectchanged"], function(n) {
        r._messageCenter.on(n, function(i) {
          this.trigger(n, i);
        }, r);
      }), Bb(this._messageCenter, this, this._api);
    }, t.prototype.isDisposed = function() {
      return this._disposed;
    }, t.prototype.clear = function() {
      if (this._disposed) {
        zt(this.id);
        return;
      }
      this.setOption({
        series: []
      }, !0);
    }, t.prototype.dispose = function() {
      if (this._disposed) {
        zt(this.id);
        return;
      }
      this._disposed = !0;
      var r = this.getDom();
      r && Id(this.getDom(), Wl, "");
      var n = this, i = n._api, a = n._model;
      D(n._componentsViews, function(o) {
        o.dispose(a, i);
      }), D(n._chartsViews, function(o) {
        o.dispose(a, i);
      }), n._zr.dispose(), n._dom = n._model = n._chartsMap = n._componentsMap = n._chartsViews = n._componentsViews = n._scheduler = n._api = n._zr = n._throttledZrFlush = n._theme = n._coordSysMgr = n._messageCenter = null, delete Hr[n.id];
    }, t.prototype.resize = function(r) {
      if (this[_t]) {
        process.env.NODE_ENV !== "production" && Tt("`resize` should not be called during main process.");
        return;
      }
      if (this._disposed) {
        zt(this.id);
        return;
      }
      this._zr.resize(r);
      var n = this._model;
      if (this._loadingFX && this._loadingFX.resize(), !!n) {
        var i = n.resetOption("media"), a = r && r.silent;
        this[It] && (a == null && (a = this[It].silent), i = !0, this[It] = null), this[_t] = !0;
        try {
          i && fn(this), $e.update.call(this, {
            type: "resize",
            animation: A({
              // Disable animation
              duration: 0
            }, r && r.animation)
          });
        } catch (o) {
          throw this[_t] = !1, o;
        }
        this[_t] = !1, jn.call(this, a), Kn.call(this, a);
      }
    }, t.prototype.showLoading = function(r, n) {
      if (this._disposed) {
        zt(this.id);
        return;
      }
      if (F(r) && (n = r, r = ""), r = r || "default", this.hideLoading(), !tl[r]) {
        process.env.NODE_ENV !== "production" && te("Loading effects " + r + " not exists.");
        return;
      }
      var i = tl[r](this._api, n), a = this._zr;
      this._loadingFX = i, a.add(i);
    }, t.prototype.hideLoading = function() {
      if (this._disposed) {
        zt(this.id);
        return;
      }
      this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, t.prototype.makeActionFromEvent = function(r) {
      var n = A({}, r);
      return n.type = mi[r.type], n;
    }, t.prototype.dispatchAction = function(r, n) {
      if (this._disposed) {
        zt(this.id);
        return;
      }
      if (F(n) || (n = {
        silent: !!n
      }), !!ao[r.type] && this._model) {
        if (this[_t]) {
          this._pendingActions.push(r);
          return;
        }
        var i = n.silent;
        Zs.call(this, r, i);
        var a = n.flush;
        a ? this._zr.flush() : a !== !1 && Z.browser.weChat && this._throttledZrFlush(), jn.call(this, i), Kn.call(this, i);
      }
    }, t.prototype.updateLabelLayout = function() {
      he.trigger("series:layoutlabels", this._model, this._api, {
        // Not adding series labels.
        // TODO
        updatedSeries: []
      });
    }, t.prototype.appendData = function(r) {
      if (this._disposed) {
        zt(this.id);
        return;
      }
      var n = r.seriesIndex, i = this.getModel(), a = i.getSeriesByIndex(n);
      process.env.NODE_ENV !== "production" && U(r.data && a), a.appendData(r), this._scheduler.unfinished = !0, this.getZr().wakeUp();
    }, t.internalField = function() {
      fn = function(h) {
        var v = h._scheduler;
        v.restorePipelines(h._model), v.prepareStageTasks(), qs(h, !0), qs(h, !1), v.plan();
      }, qs = function(h, v) {
        for (var c = h._model, d = h._scheduler, y = v ? h._componentsViews : h._chartsViews, p = v ? h._componentsMap : h._chartsMap, g = h._zr, _ = h._api, m = 0; m < y.length; m++)
          y[m].__alive = !1;
        v ? c.eachComponent(function(w, T) {
          w !== "series" && S(T);
        }) : c.eachSeries(S);
        function S(w) {
          var T = w.__requireNewView;
          w.__requireNewView = !1;
          var E = "_ec_" + w.id + "_" + w.type, M = !T && p[E];
          if (!M) {
            var C = Me(w.type), x = v ? ar.getClass(C.main, C.sub) : (
              // FIXME:TS
              // (ChartView as ChartViewConstructor).getClass('series', classType.sub)
              // For backward compat, still support a chart type declared as only subType
              // like "liquidfill", but recommend "series.liquidfill"
              // But need a base class to make a type series.
              Ee.getClass(C.sub)
            );
            process.env.NODE_ENV !== "production" && U(x, C.sub + " does not exist."), M = new x(), M.init(c, _), p[E] = M, y.push(M), g.add(M.group);
          }
          w.__viewId = M.__id = E, M.__alive = !0, M.__model = w, M.group.__ecComponentInfo = {
            mainType: w.mainType,
            index: w.componentIndex
          }, !v && d.prepareView(M, w, c, _);
        }
        for (var m = 0; m < y.length; ) {
          var b = y[m];
          b.__alive ? m++ : (!v && b.renderTask.dispose(), g.remove(b.group), b.dispose(c, _), y.splice(m, 1), p[b.__id] === b && delete p[b.__id], b.__id = b.group.__ecComponentInfo = null);
        }
      }, ga = function(h, v, c, d, y) {
        var p = h._model;
        if (p.setUpdatePayload(c), !d) {
          D([].concat(h._componentsViews).concat(h._chartsViews), b);
          return;
        }
        var g = {};
        g[d + "Id"] = c[d + "Id"], g[d + "Index"] = c[d + "Index"], g[d + "Name"] = c[d + "Name"];
        var _ = {
          mainType: d,
          query: g
        };
        y && (_.subType = y);
        var m = c.excludeSeriesId, S;
        m != null && (S = W(), D(xt(m), function(w) {
          var T = Ce(w, null);
          T != null && S.set(T, !0);
        })), p && p.eachComponent(_, function(w) {
          var T = S && S.get(w.id) != null;
          if (!T)
            if (Th(c))
              if (w instanceof Oe)
                c.type === zr && !c.notBlur && !w.get(["emphasis", "disabled"]) && M1(w, c, h._api);
              else {
                var E = bl(w.mainType, w.componentIndex, c.name, h._api), M = E.focusSelf, C = E.dispatchers;
                c.type === zr && M && !c.notBlur && ku(w.mainType, w.componentIndex, h._api), C && D(C, function(x) {
                  c.type === zr ? Au(x) : Nu(x);
                });
              }
            else Fu(c) && w instanceof Oe && (x1(w, c, h._api), wh(w), Zt(h));
        }, h), p && p.eachComponent(_, function(w) {
          var T = S && S.get(w.id) != null;
          T || b(h[d === "series" ? "_chartsMap" : "_componentsMap"][w.__viewId]);
        }, h);
        function b(w) {
          w && w.__alive && w[v] && w[v](w.__model, p, h._api, c);
        }
      }, $e = {
        prepareAndUpdate: function(h) {
          fn(this), $e.update.call(this, h, {
            // Needs to mark option changed if newOption is given.
            // It's from MagicType.
            // TODO If use a separate flag optionChanged in payload?
            optionChanged: h.newOption != null
          });
        },
        update: function(h, v) {
          var c = this._model, d = this._api, y = this._zr, p = this._coordSysMgr, g = this._scheduler;
          if (c) {
            c.setUpdatePayload(h), g.restoreData(c, h), g.performSeriesTasks(c), p.create(c, d), g.performDataProcessorTasks(c, h), $s(this, c), p.update(c, d), r(c), g.performVisualTasks(c, h), js(this, c, d, h, v);
            var _ = c.get("backgroundColor") || "transparent", m = c.get("darkMode");
            y.setBackgroundColor(_), m != null && m !== "auto" && y.setDarkMode(m), he.trigger("afterupdate", c, d);
          }
        },
        updateTransform: function(h) {
          var v = this, c = this._model, d = this._api;
          if (c) {
            c.setUpdatePayload(h);
            var y = [];
            c.eachComponent(function(g, _) {
              if (g !== "series") {
                var m = v.getViewOfComponentModel(_);
                if (m && m.__alive)
                  if (m.updateTransform) {
                    var S = m.updateTransform(_, c, d, h);
                    S && S.update && y.push(m);
                  } else
                    y.push(m);
              }
            });
            var p = W();
            c.eachSeries(function(g) {
              var _ = v._chartsMap[g.__viewId];
              if (_.updateTransform) {
                var m = _.updateTransform(g, c, d, h);
                m && m.update && p.set(g.uid, 1);
              } else
                p.set(g.uid, 1);
            }), r(c), this._scheduler.performVisualTasks(c, h, {
              setDirty: !0,
              dirtyMap: p
            }), ya(this, c, d, h, {}, p), he.trigger("afterupdate", c, d);
          }
        },
        updateView: function(h) {
          var v = this._model;
          v && (v.setUpdatePayload(h), Ee.markUpdateMethod(h, "updateView"), r(v), this._scheduler.performVisualTasks(v, h, {
            setDirty: !0
          }), js(this, v, this._api, h, {}), he.trigger("afterupdate", v, this._api));
        },
        updateVisual: function(h) {
          var v = this, c = this._model;
          c && (c.setUpdatePayload(h), c.eachSeries(function(d) {
            d.getData().clearAllVisual();
          }), Ee.markUpdateMethod(h, "updateVisual"), r(c), this._scheduler.performVisualTasks(c, h, {
            visualType: "visual",
            setDirty: !0
          }), c.eachComponent(function(d, y) {
            if (d !== "series") {
              var p = v.getViewOfComponentModel(y);
              p && p.__alive && p.updateVisual(y, c, v._api, h);
            }
          }), c.eachSeries(function(d) {
            var y = v._chartsMap[d.__viewId];
            y.updateVisual(d, c, v._api, h);
          }), he.trigger("afterupdate", c, this._api));
        },
        updateLayout: function(h) {
          $e.update.call(this, h);
        }
      }, Xs = function(h, v, c, d) {
        if (h._disposed) {
          zt(h.id);
          return;
        }
        for (var y = h._model, p = h._coordSysMgr.getCoordinateSystems(), g, _ = gs(y, c), m = 0; m < p.length; m++) {
          var S = p[m];
          if (S[v] && (g = S[v](y, _, d)) != null)
            return g;
        }
        process.env.NODE_ENV !== "production" && te("No coordinate system that supports " + v + " found by the given finder.");
      }, $s = function(h, v) {
        var c = h._chartsMap, d = h._scheduler;
        v.eachSeries(function(y) {
          d.updateStreamModes(y, c[y.__viewId]);
        });
      }, Zs = function(h, v) {
        var c = this, d = this.getModel(), y = h.type, p = h.escapeConnect, g = ao[y], _ = g.actionInfo, m = (_.update || "update").split(":"), S = m.pop(), b = m[0] != null && Me(m[0]);
        this[_t] = !0;
        var w = [h], T = !1;
        h.batch && (T = !0, w = k(h.batch, function(P) {
          return P = ht(A({}, P), h), P.batch = null, P;
        }));
        var E = [], M, C = Fu(h), x = Th(h);
        if (x && Qd(this._api), D(w, function(P) {
          if (M = g.action(P, c._model, c._api), M = M || A({}, P), M.type = _.event || M.type, E.push(M), x) {
            var N = Rd(h), I = N.queryOptionMap, G = N.mainTypeSpecified, B = G ? I.keys()[0] : "series";
            ga(c, S, P, B), Zt(c);
          } else C ? (ga(c, S, P, "series"), Zt(c)) : b && ga(c, S, P, b.main, b.sub);
        }), S !== "none" && !x && !C && !b)
          try {
            this[It] ? (fn(this), $e.update.call(this, h), this[It] = null) : $e[S].call(this, h);
          } catch (P) {
            throw this[_t] = !1, P;
          }
        if (T ? M = {
          type: _.event || y,
          escapeConnect: p,
          batch: E
        } : M = E[0], this[_t] = !1, !v) {
          var O = this._messageCenter;
          if (O.trigger(M.type, M), C) {
            var R = {
              type: "selectchanged",
              escapeConnect: p,
              selected: O1(d),
              isFromClick: h.isFromClick || !1,
              fromAction: h.type,
              fromActionPayload: h
            };
            O.trigger(R.type, R);
          }
        }
      }, jn = function(h) {
        for (var v = this._pendingActions; v.length; ) {
          var c = v.shift();
          Zs.call(this, c, h);
        }
      }, Kn = function(h) {
        !h && this.trigger("updated");
      }, Vc = function(h, v) {
        h.on("rendered", function(c) {
          v.trigger("rendered", c), // Although zr is dirty if initial animation is not finished
          // and this checking is called on frame, we also check
          // animation finished for robustness.
          h.animation.isFinished() && !v[It] && !v._scheduler.unfinished && !v._pendingActions.length && v.trigger("finished");
        });
      }, zc = function(h, v) {
        h.on("mouseover", function(c) {
          var d = c.target, y = da(d, Cn);
          y && (C1(y, c, v._api), Zt(v));
        }).on("mouseout", function(c) {
          var d = c.target, y = da(d, Cn);
          y && (E1(y, c, v._api), Zt(v));
        }).on("click", function(c) {
          var d = c.target, y = da(d, function(_) {
            return kt(_).dataIndex != null;
          }, !0);
          if (y) {
            var p = y.selected ? "unselect" : "select", g = kt(y);
            v._api.dispatchAction({
              type: p,
              dataType: g.dataType,
              dataIndexInside: g.dataIndex,
              seriesIndex: g.seriesIndex,
              isFromClick: !0
            });
          }
        });
      };
      function r(h) {
        h.clearColorPalette(), h.eachSeries(function(v) {
          v.clearColorPalette();
        });
      }
      function n(h) {
        var v = [], c = [], d = !1;
        if (h.eachComponent(function(_, m) {
          var S = m.get("zlevel") || 0, b = m.get("z") || 0, w = m.getZLevelKey();
          d = d || !!w, (_ === "series" ? c : v).push({
            zlevel: S,
            z: b,
            idx: m.componentIndex,
            type: _,
            key: w
          });
        }), d) {
          var y = v.concat(c), p, g;
          Da(y, function(_, m) {
            return _.zlevel === m.zlevel ? _.z - m.z : _.zlevel - m.zlevel;
          }), D(y, function(_) {
            var m = h.getComponent(_.type, _.idx), S = _.zlevel, b = _.key;
            p != null && (S = Math.max(p, S)), b ? (S === p && b !== g && S++, g = b) : g && (S === p && S++, g = ""), p = S, m.setZLevel(S);
          });
        }
      }
      js = function(h, v, c, d, y) {
        n(v), Hc(h, v, c, d, y), D(h._chartsViews, function(p) {
          p.__alive = !1;
        }), ya(h, v, c, d, y), D(h._chartsViews, function(p) {
          p.__alive || p.remove(v, c);
        });
      }, Hc = function(h, v, c, d, y, p) {
        D(p || h._componentsViews, function(g) {
          var _ = g.__model;
          l(_, g), g.render(_, v, c, d), s(_, g), f(_, g);
        });
      }, ya = function(h, v, c, d, y, p) {
        var g = h._scheduler;
        y = A(y || {}, {
          updatedSeries: v.getSeries()
        }), he.trigger("series:beforeupdate", v, c, y);
        var _ = !1;
        v.eachSeries(function(m) {
          var S = h._chartsMap[m.__viewId];
          S.__alive = !0;
          var b = S.renderTask;
          g.updatePayload(b, d), l(m, S), p && p.get(m.uid) && b.dirty(), b.perform(g.getPerformArgs(b)) && (_ = !0), S.group.silent = !!m.get("silent"), o(m, S), wh(m);
        }), g.unfinished = _ || g.unfinished, he.trigger("series:layoutlabels", v, c, y), he.trigger("series:transition", v, c, y), v.eachSeries(function(m) {
          var S = h._chartsMap[m.__viewId];
          s(m, S), f(m, S);
        }), a(h, v), he.trigger("series:afterupdate", v, c, y);
      }, Zt = function(h) {
        h[Ws] = !0, h.getZr().wakeUp();
      }, Uc = function(h) {
        h[Ws] && (h.getZr().storage.traverse(function(v) {
          gi(v) || i(v);
        }), h[Ws] = !1);
      };
      function i(h) {
        for (var v = [], c = h.currentStates, d = 0; d < c.length; d++) {
          var y = c[d];
          y === "emphasis" || y === "blur" || y === "select" || v.push(y);
        }
        h.selected && h.states.select && v.push("select"), h.hoverState === To && h.states.emphasis ? v.push("emphasis") : h.hoverState === bo && h.states.blur && v.push("blur"), h.useStates(v);
      }
      function a(h, v) {
        var c = h._zr, d = c.storage, y = 0;
        d.traverse(function(p) {
          p.isGroup || y++;
        }), y > v.get("hoverLayerThreshold") && !Z.node && !Z.worker && v.eachSeries(function(p) {
          if (!p.preventUsingHoverLayer) {
            var g = h._chartsMap[p.__viewId];
            g.__alive && g.eachRendered(function(_) {
              _.states.emphasis && (_.states.emphasis.hoverLayer = !0);
            });
          }
        });
      }
      function o(h, v) {
        var c = h.get("blendMode") || null;
        v.eachRendered(function(d) {
          d.isGroup || (d.style.blend = c);
        });
      }
      function s(h, v) {
        if (!h.preventAutoZ) {
          var c = h.get("z") || 0, d = h.get("zlevel") || 0;
          v.eachRendered(function(y) {
            return u(y, c, d, -1 / 0), !0;
          });
        }
      }
      function u(h, v, c, d) {
        var y = h.getTextContent(), p = h.getTextGuideLine(), g = h.isGroup;
        if (g)
          for (var _ = h.childrenRef(), m = 0; m < _.length; m++)
            d = Math.max(u(_[m], v, c, d), d);
        else
          h.z = v, h.zlevel = c, d = Math.max(h.z2, d);
        if (y && (y.z = v, y.zlevel = c, isFinite(d) && (y.z2 = d + 2)), p) {
          var S = h.textGuideLineConfig;
          p.z = v, p.zlevel = c, isFinite(d) && (p.z2 = d + (S && S.showAbove ? 1 : -1));
        }
        return d;
      }
      function l(h, v) {
        v.eachRendered(function(c) {
          if (!gi(c)) {
            var d = c.getTextContent(), y = c.getTextGuideLine();
            c.stateTransition && (c.stateTransition = null), d && d.stateTransition && (d.stateTransition = null), y && y.stateTransition && (y.stateTransition = null), c.hasState() ? (c.prevStates = c.currentStates, c.clearStates()) : c.prevStates && (c.prevStates = null);
          }
        });
      }
      function f(h, v) {
        var c = h.getModel("stateAnimation"), d = h.isAnimationEnabled(), y = c.get("duration"), p = y > 0 ? {
          duration: y,
          delay: c.get("delay"),
          easing: c.get("easing")
          // additive: stateAnimationModel.get('additive')
        } : null;
        v.eachRendered(function(g) {
          if (g.states && g.states.emphasis) {
            if (gi(g))
              return;
            if (g instanceof it && N1(g), g.__dirty) {
              var _ = g.prevStates;
              _ && g.useStates(_);
            }
            if (d) {
              g.stateTransition = p;
              var m = g.getTextContent(), S = g.getTextGuideLine();
              m && (m.stateTransition = p), S && (S.stateTransition = p);
            }
            g.__dirty && i(g);
          }
        });
      }
      Gc = function(h) {
        return new /** @class */
        (function(v) {
          qt(c, v);
          function c() {
            return v !== null && v.apply(this, arguments) || this;
          }
          return c.prototype.getCoordinateSystems = function() {
            return h._coordSysMgr.getCoordinateSystems();
          }, c.prototype.getComponentByElement = function(d) {
            for (; d; ) {
              var y = d.__ecComponentInfo;
              if (y != null)
                return h._model.getComponent(y.mainType, y.index);
              d = d.parent;
            }
          }, c.prototype.enterEmphasis = function(d, y) {
            Au(d, y), Zt(h);
          }, c.prototype.leaveEmphasis = function(d, y) {
            Nu(d, y), Zt(h);
          }, c.prototype.enterBlur = function(d) {
            D1(d), Zt(h);
          }, c.prototype.leaveBlur = function(d) {
            $d(d), Zt(h);
          }, c.prototype.enterSelect = function(d) {
            Zd(d), Zt(h);
          }, c.prototype.leaveSelect = function(d) {
            jd(d), Zt(h);
          }, c.prototype.getModel = function() {
            return h.getModel();
          }, c.prototype.getViewOfComponentModel = function(d) {
            return h.getViewOfComponentModel(d);
          }, c.prototype.getViewOfSeriesModel = function(d) {
            return h.getViewOfSeriesModel(d);
          }, c;
        }(qp))(h);
      }, Fg = function(h) {
        function v(c, d) {
          for (var y = 0; y < c.length; y++) {
            var p = c[y];
            p[Ys] = d;
          }
        }
        D(mi, function(c, d) {
          h._messageCenter.on(d, function(y) {
            if (so[h.group] && h[Ys] !== Bc) {
              if (y && y.escapeConnect)
                return;
              var p = h.makeActionFromEvent(y), g = [];
              D(Hr, function(_) {
                _ !== h && _.group === h.group && g.push(_);
              }), v(g, Bc), D(g, function(_) {
                _[Ys] !== CT && _.dispatchAction(p);
              }), v(g, ET);
            }
          });
        });
      };
    }(), t;
  }(Ge)
), Ul = io.prototype;
Ul.on = Ig("on");
Ul.off = Ig("off");
Ul.one = function(e, t, r) {
  var n = this;
  de("ECharts#one is deprecated.");
  function i() {
    for (var a = [], o = 0; o < arguments.length; o++)
      a[o] = arguments[o];
    t && t.apply && t.apply(this, a), n.off(e, i);
  }
  this.on.call(this, e, i, r);
};
var xT = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
function zt(e) {
  process.env.NODE_ENV !== "production" && te("Instance " + e + " has been disposed");
}
var ao = {}, mi = {}, Qu = [], Ju = [], oo = [], Bg = {}, tl = {}, Hr = {}, so = {}, OT = +/* @__PURE__ */ new Date() - 0, PT = +/* @__PURE__ */ new Date() - 0, Wl = "_echarts_instance_";
function RT(e, t, r) {
  var n = !(r && r.ssr);
  if (n) {
    if (process.env.NODE_ENV !== "production" && !e)
      throw new Error("Initialize failed: invalid dom.");
    var i = Yl(e);
    if (i)
      return process.env.NODE_ENV !== "production" && te("There is a chart instance already initialized on the dom."), i;
    process.env.NODE_ENV !== "production" && Ti(e) && e.nodeName.toUpperCase() !== "CANVAS" && (!e.clientWidth && (!r || r.width == null) || !e.clientHeight && (!r || r.height == null)) && te("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload.");
  }
  var a = new io(e, t, r);
  return a.id = "ec_" + OT++, Hr[a.id] = a, n && Id(e, Wl, a.id), Fg(a), he.trigger("afterinit", a), a;
}
function IT(e) {
  if (L(e)) {
    var t = e;
    e = null, D(t, function(r) {
      r.group != null && (e = r.group);
    }), e = e || "g_" + PT++, D(t, function(r) {
      r.group = e;
    });
  }
  return so[e] = !0, e;
}
function Vg(e) {
  so[e] = !1;
}
var AT = Vg;
function NT(e) {
  V(e) ? e = Hr[e] : e instanceof io || (e = Yl(e)), e instanceof io && !e.isDisposed() && e.dispose();
}
function Yl(e) {
  return Hr[pm(e, Wl)];
}
function LT(e) {
  return Hr[e];
}
function ql(e, t) {
  Bg[e] = t;
}
function Xl(e) {
  ot(Ju, e) < 0 && Ju.push(e);
}
function $l(e, t) {
  Zl(Qu, e, t, mT);
}
function zg(e) {
  Uo("afterinit", e);
}
function Hg(e) {
  Uo("afterupdate", e);
}
function Uo(e, t) {
  he.on(e, t);
}
function $r(e, t, r) {
  X(t) && (r = t, t = "");
  var n = F(e) ? e.type : [e, e = {
    event: t
  }][0];
  e.event = (e.event || n).toLowerCase(), t = e.event, !mi[t] && (U(Fc.test(n) && Fc.test(t)), ao[n] || (ao[n] = {
    action: r,
    actionInfo: e
  }), mi[t] = n);
}
function Gg(e, t) {
  Vo.register(e, t);
}
function kT(e) {
  var t = Vo.get(e);
  if (t)
    return t.getDimensionsInfo ? t.getDimensionsInfo() : t.dimensions.slice();
}
function Ug(e, t) {
  Zl(oo, e, t, xg, "layout");
}
function sr(e, t) {
  Zl(oo, e, t, Og, "visual");
}
var Wc = [];
function Zl(e, t, r, n, i) {
  if ((X(t) || F(t)) && (r = t, t = n), process.env.NODE_ENV !== "production") {
    if (isNaN(t) || t == null)
      throw new Error("Illegal priority");
    D(e, function(o) {
      U(o.__raw !== r);
    });
  }
  if (!(ot(Wc, r) >= 0)) {
    Wc.push(r);
    var a = dg.wrapStageHandler(r, i);
    a.__prio = t, a.__raw = r, e.push(a);
  }
}
function jl(e, t) {
  tl[e] = t;
}
function FT(e) {
  process.env.NODE_ENV !== "production" && de("setCanvasCreator is deprecated. Use setPlatformAPI({ createCanvas }) instead."), Fv({
    createCanvas: e
  });
}
function Wg(e, t, r) {
  var n = Eg("registerMap");
  n && n(e, t, r);
}
function BT(e) {
  var t = Eg("getMap");
  return t && t(e);
}
var Yg = Uw;
sr(Gl, mb);
sr(Go, Sb);
sr(Go, wb);
sr(Gl, Nb);
sr(Go, Lb);
sr(Pg, hT);
Xl($p);
$l(yT, Mw);
jl("default", bb);
$r({
  type: zr,
  event: zr,
  update: zr
}, Ut);
$r({
  type: Pa,
  event: Pa,
  update: Pa
}, Ut);
$r({
  type: vi,
  event: vi,
  update: vi
}, Ut);
$r({
  type: Ra,
  event: Ra,
  update: Ra
}, Ut);
$r({
  type: di,
  event: di,
  update: di
}, Ut);
ql("light", Ib);
ql("dark", _g);
var VT = {};
function Qn(e) {
  return e == null ? 0 : e.length || 1;
}
function Yc(e) {
  return e;
}
var zT = (
  /** @class */
  function() {
    function e(t, r, n, i, a, o) {
      this._old = t, this._new = r, this._oldKeyGetter = n || Yc, this._newKeyGetter = i || Yc, this.context = a, this._diffModeMultiple = o === "multiple";
    }
    return e.prototype.add = function(t) {
      return this._add = t, this;
    }, e.prototype.update = function(t) {
      return this._update = t, this;
    }, e.prototype.updateManyToOne = function(t) {
      return this._updateManyToOne = t, this;
    }, e.prototype.updateOneToMany = function(t) {
      return this._updateOneToMany = t, this;
    }, e.prototype.updateManyToMany = function(t) {
      return this._updateManyToMany = t, this;
    }, e.prototype.remove = function(t) {
      return this._remove = t, this;
    }, e.prototype.execute = function() {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }, e.prototype._executeOneToOne = function() {
      var t = this._old, r = this._new, n = {}, i = new Array(t.length), a = new Array(r.length);
      this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(r, n, a, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var s = i[o], u = n[s], l = Qn(u);
        if (l > 1) {
          var f = u.shift();
          u.length === 1 && (n[s] = u[0]), this._update && this._update(f, o);
        } else l === 1 ? (n[s] = null, this._update && this._update(u, o)) : this._remove && this._remove(o);
      }
      this._performRestAdd(a, n);
    }, e.prototype._executeMultiple = function() {
      var t = this._old, r = this._new, n = {}, i = {}, a = [], o = [];
      this._initIndexMap(t, n, a, "_oldKeyGetter"), this._initIndexMap(r, i, o, "_newKeyGetter");
      for (var s = 0; s < a.length; s++) {
        var u = a[s], l = n[u], f = i[u], h = Qn(l), v = Qn(f);
        if (h > 1 && v === 1)
          this._updateManyToOne && this._updateManyToOne(f, l), i[u] = null;
        else if (h === 1 && v > 1)
          this._updateOneToMany && this._updateOneToMany(f, l), i[u] = null;
        else if (h === 1 && v === 1)
          this._update && this._update(f, l), i[u] = null;
        else if (h > 1 && v > 1)
          this._updateManyToMany && this._updateManyToMany(f, l), i[u] = null;
        else if (h > 1)
          for (var c = 0; c < h; c++)
            this._remove && this._remove(l[c]);
        else
          this._remove && this._remove(l);
      }
      this._performRestAdd(o, i);
    }, e.prototype._performRestAdd = function(t, r) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n], a = r[i], o = Qn(a);
        if (o > 1)
          for (var s = 0; s < o; s++)
            this._add && this._add(a[s]);
        else o === 1 && this._add && this._add(a);
        r[i] = null;
      }
    }, e.prototype._initIndexMap = function(t, r, n, i) {
      for (var a = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var s = "_ec_" + this[i](t[o], o);
        if (a || (n[o] = s), !!r) {
          var u = r[s], l = Qn(u);
          l === 0 ? (r[s] = o, a && n.push(s)) : l === 1 ? r[s] = [u, o] : u.push(o);
        }
      }
    }, e;
  }()
), HT = (
  /** @class */
  function() {
    function e(t, r) {
      this._encode = t, this._schema = r;
    }
    return e.prototype.get = function() {
      return {
        // Do not generate full dimension name until fist used.
        fullDimensions: this._getFullDimensionNames(),
        encode: this._encode
      };
    }, e.prototype._getFullDimensionNames = function() {
      return this._cachedDimNames || (this._cachedDimNames = this._schema ? this._schema.makeOutputDimensionNames() : []), this._cachedDimNames;
    }, e;
  }()
);
function GT(e, t) {
  var r = {}, n = r.encode = {}, i = W(), a = [], o = [], s = {};
  D(e.dimensions, function(v) {
    var c = e.getDimensionInfo(v), d = c.coordDim;
    if (d) {
      process.env.NODE_ENV !== "production" && U(Gu.get(d) == null);
      var y = c.coordDimIndex;
      Ks(n, d)[y] = v, c.isExtraCoord || (i.set(d, 1), WT(c.type) && (a[0] = v), Ks(s, d)[y] = e.getDimensionIndex(c.name)), c.defaultTooltip && o.push(v);
    }
    Gu.each(function(p, g) {
      var _ = Ks(n, g), m = c.otherDims[g];
      m != null && m !== !1 && (_[m] = c.name);
    });
  });
  var u = [], l = {};
  i.each(function(v, c) {
    var d = n[c];
    l[c] = d[0], u = u.concat(d);
  }), r.dataDimsOnCoord = u, r.dataDimIndicesOnCoord = k(u, function(v) {
    return e.getDimensionInfo(v).storeDimIndex;
  }), r.encodeFirstDimNotExtra = l;
  var f = n.label;
  f && f.length && (a = f.slice());
  var h = n.tooltip;
  return h && h.length ? o = h.slice() : o.length || (o = a.slice()), n.defaultedLabel = a, n.defaultedTooltip = o, r.userOutput = new HT(s, t), r;
}
function Ks(e, t) {
  return e.hasOwnProperty(t) || (e[t] = []), e[t];
}
function UT(e) {
  return e === "category" ? "ordinal" : e === "time" ? "time" : "float";
}
function WT(e) {
  return !(e === "ordinal" || e === "time");
}
var La = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.otherDims = {}, t != null && A(this, t);
    }
    return e;
  }()
), YT = Pt(), qT = {
  float: "f",
  int: "i",
  ordinal: "o",
  number: "n",
  time: "t"
}, qg = (
  /** @class */
  function() {
    function e(t) {
      this.dimensions = t.dimensions, this._dimOmitted = t.dimensionOmitted, this.source = t.source, this._fullDimCount = t.fullDimensionCount, this._updateDimOmitted(t.dimensionOmitted);
    }
    return e.prototype.isDimensionOmitted = function() {
      return this._dimOmitted;
    }, e.prototype._updateDimOmitted = function(t) {
      this._dimOmitted = t, t && (this._dimNameMap || (this._dimNameMap = Zg(this.source)));
    }, e.prototype.getSourceDimensionIndex = function(t) {
      return q(this._dimNameMap.get(t), -1);
    }, e.prototype.getSourceDimension = function(t) {
      var r = this.source.dimensionsDefine;
      if (r)
        return r[t];
    }, e.prototype.makeStoreSchema = function() {
      for (var t = this._fullDimCount, r = Kp(this.source), n = !jg(t), i = "", a = [], o = 0, s = 0; o < t; o++) {
        var u = void 0, l = void 0, f = void 0, h = this.dimensions[s];
        if (h && h.storeDimIndex === o)
          u = r ? h.name : null, l = h.type, f = h.ordinalMeta, s++;
        else {
          var v = this.getSourceDimension(o);
          v && (u = r ? v.name : null, l = v.type);
        }
        a.push({
          property: u,
          type: l,
          ordinalMeta: f
        }), r && u != null && (!h || !h.isCalculationCoord) && (i += n ? u.replace(/\`/g, "`1").replace(/\$/g, "`2") : u), i += "$", i += qT[l] || "f", f && (i += f.uid), i += "$";
      }
      var c = this.source, d = [c.seriesLayoutBy, c.startIndex, i].join("$$");
      return {
        dimensions: a,
        hash: d
      };
    }, e.prototype.makeOutputDimensionNames = function() {
      for (var t = [], r = 0, n = 0; r < this._fullDimCount; r++) {
        var i = void 0, a = this.dimensions[n];
        if (a && a.storeDimIndex === r)
          a.isCalculationCoord || (i = a.name), n++;
        else {
          var o = this.getSourceDimension(r);
          o && (i = o.name);
        }
        t.push(i);
      }
      return t;
    }, e.prototype.appendCalculationDimension = function(t) {
      this.dimensions.push(t), t.isCalculationCoord = !0, this._fullDimCount++, this._updateDimOmitted(!0);
    }, e;
  }()
);
function Xg(e) {
  return e instanceof qg;
}
function $g(e) {
  for (var t = W(), r = 0; r < (e || []).length; r++) {
    var n = e[r], i = F(n) ? n.name : n;
    i != null && t.get(i) == null && t.set(i, r);
  }
  return t;
}
function Zg(e) {
  var t = YT(e);
  return t.dimNameMap || (t.dimNameMap = $g(e.dimensionsDefine));
}
function jg(e) {
  return e > 30;
}
var Jn = F, Ze = k, XT = typeof Int32Array > "u" ? Array : Int32Array, $T = "e\0\0", qc = -1, ZT = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_dimSummary", "userOutput", "_rawData", "_dimValueGetter", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"], jT = ["_approximateExtent"], Xc, _a, ti, hn, Qs, ei, Js, Kg = (
  /** @class */
  function() {
    function e(t, r) {
      this.type = "list", this._dimOmitted = !1, this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !1, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "minmaxDownSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "minmaxDownSample", "lttbDownSample"];
      var n, i = !1;
      Xg(t) ? (n = t.dimensions, this._dimOmitted = t.isDimensionOmitted(), this._schema = t) : (i = !0, n = t), n = n || ["x", "y"];
      for (var a = {}, o = [], s = {}, u = !1, l = {}, f = 0; f < n.length; f++) {
        var h = n[f], v = V(h) ? new La({
          name: h
        }) : h instanceof La ? h : new La(h), c = v.name;
        v.type = v.type || "float", v.coordDim || (v.coordDim = c, v.coordDimIndex = 0);
        var d = v.otherDims = v.otherDims || {};
        o.push(c), a[c] = v, l[c] != null && (u = !0), v.createInvertedIndices && (s[c] = []), d.itemName === 0 && (this._nameDimIdx = f), d.itemId === 0 && (this._idDimIdx = f), process.env.NODE_ENV !== "production" && U(i || v.storeDimIndex >= 0), i && (v.storeDimIndex = f);
      }
      if (this.dimensions = o, this._dimInfos = a, this._initGetDimensionInfo(u), this.hostModel = r, this._invertedIndicesMap = s, this._dimOmitted) {
        var y = this._dimIdxToName = W();
        D(o, function(p) {
          y.set(a[p].storeDimIndex, p);
        });
      }
    }
    return e.prototype.getDimension = function(t) {
      var r = this._recognizeDimIndex(t);
      if (r == null)
        return t;
      if (r = t, !this._dimOmitted)
        return this.dimensions[r];
      var n = this._dimIdxToName.get(r);
      if (n != null)
        return n;
      var i = this._schema.getSourceDimension(r);
      if (i)
        return i.name;
    }, e.prototype.getDimensionIndex = function(t) {
      var r = this._recognizeDimIndex(t);
      if (r != null)
        return r;
      if (t == null)
        return -1;
      var n = this._getDimInfo(t);
      return n ? n.storeDimIndex : this._dimOmitted ? this._schema.getSourceDimensionIndex(t) : -1;
    }, e.prototype._recognizeDimIndex = function(t) {
      if (lt(t) || t != null && !isNaN(t) && !this._getDimInfo(t) && (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        return +t;
    }, e.prototype._getStoreDimIndex = function(t) {
      var r = this.getDimensionIndex(t);
      if (process.env.NODE_ENV !== "production" && r == null)
        throw new Error("Unknown dimension " + t);
      return r;
    }, e.prototype.getDimensionInfo = function(t) {
      return this._getDimInfo(this.getDimension(t));
    }, e.prototype._initGetDimensionInfo = function(t) {
      var r = this._dimInfos;
      this._getDimInfo = t ? function(n) {
        return r.hasOwnProperty(n) ? r[n] : void 0;
      } : function(n) {
        return r[n];
      };
    }, e.prototype.getDimensionsOnCoord = function() {
      return this._dimSummary.dataDimsOnCoord.slice();
    }, e.prototype.mapDimension = function(t, r) {
      var n = this._dimSummary;
      if (r == null)
        return n.encodeFirstDimNotExtra[t];
      var i = n.encode[t];
      return i ? i[r] : null;
    }, e.prototype.mapDimensionsAll = function(t) {
      var r = this._dimSummary, n = r.encode[t];
      return (n || []).slice();
    }, e.prototype.getStore = function() {
      return this._store;
    }, e.prototype.initData = function(t, r, n) {
      var i = this, a;
      if (t instanceof Wu && (a = t), !a) {
        var o = this.dimensions, s = Bl(t) || Ot(t) ? new Qp(t, o.length) : t;
        a = new Wu();
        var u = Ze(o, function(l) {
          return {
            type: i._dimInfos[l].type,
            property: l
          };
        });
        a.initData(s, u, n);
      }
      this._store = a, this._nameList = (r || []).slice(), this._idList = [], this._nameRepeatCount = {}, this._doInit(0, a.count()), this._dimSummary = GT(this, this._schema), this.userOutput = this._dimSummary.userOutput;
    }, e.prototype.appendData = function(t) {
      var r = this._store.appendData(t);
      this._doInit(r[0], r[1]);
    }, e.prototype.appendValues = function(t, r) {
      var n = this._store.appendValues(t, r && r.length), i = n.start, a = n.end, o = this._shouldMakeIdFromName();
      if (this._updateOrdinalMeta(), r)
        for (var s = i; s < a; s++) {
          var u = s - i;
          this._nameList[s] = r[u], o && Js(this, s);
        }
    }, e.prototype._updateOrdinalMeta = function() {
      for (var t = this._store, r = this.dimensions, n = 0; n < r.length; n++) {
        var i = this._dimInfos[r[n]];
        i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
      }
    }, e.prototype._shouldMakeIdFromName = function() {
      var t = this._store.getProvider();
      return this._idDimIdx == null && t.getSource().sourceFormat !== ze && !t.fillStorage;
    }, e.prototype._doInit = function(t, r) {
      if (!(t >= r)) {
        var n = this._store, i = n.getProvider();
        this._updateOrdinalMeta();
        var a = this._nameList, o = this._idList, s = i.getSource().sourceFormat, u = s === oe;
        if (u && !i.pure)
          for (var l = [], f = t; f < r; f++) {
            var h = i.getItem(f, l);
            if (!this.hasItemOption && im(h) && (this.hasItemOption = !0), h) {
              var v = h.name;
              a[f] == null && v != null && (a[f] = Ce(v, null));
              var c = h.id;
              o[f] == null && c != null && (o[f] = Ce(c, null));
            }
          }
        if (this._shouldMakeIdFromName())
          for (var f = t; f < r; f++)
            Js(this, f);
        Xc(this);
      }
    }, e.prototype.getApproximateExtent = function(t) {
      return this._approximateExtent[t] || this._store.getDataExtent(this._getStoreDimIndex(t));
    }, e.prototype.setApproximateExtent = function(t, r) {
      r = this.getDimension(r), this._approximateExtent[r] = t.slice();
    }, e.prototype.getCalculationInfo = function(t) {
      return this._calculationInfo[t];
    }, e.prototype.setCalculationInfo = function(t, r) {
      Jn(t) ? A(this._calculationInfo, t) : this._calculationInfo[t] = r;
    }, e.prototype.getName = function(t) {
      var r = this.getRawIndex(t), n = this._nameList[r];
      return n == null && this._nameDimIdx != null && (n = ti(this, this._nameDimIdx, r)), n == null && (n = ""), n;
    }, e.prototype._getCategory = function(t, r) {
      var n = this._store.get(t, r), i = this._store.getOrdinalMeta(t);
      return i ? i.categories[n] : n;
    }, e.prototype.getId = function(t) {
      return _a(this, this.getRawIndex(t));
    }, e.prototype.count = function() {
      return this._store.count();
    }, e.prototype.get = function(t, r) {
      var n = this._store, i = this._dimInfos[t];
      if (i)
        return n.get(i.storeDimIndex, r);
    }, e.prototype.getByRawIndex = function(t, r) {
      var n = this._store, i = this._dimInfos[t];
      if (i)
        return n.getByRawIndex(i.storeDimIndex, r);
    }, e.prototype.getIndices = function() {
      return this._store.getIndices();
    }, e.prototype.getDataExtent = function(t) {
      return this._store.getDataExtent(this._getStoreDimIndex(t));
    }, e.prototype.getSum = function(t) {
      return this._store.getSum(this._getStoreDimIndex(t));
    }, e.prototype.getMedian = function(t) {
      return this._store.getMedian(this._getStoreDimIndex(t));
    }, e.prototype.getValues = function(t, r) {
      var n = this, i = this._store;
      return L(t) ? i.getValues(Ze(t, function(a) {
        return n._getStoreDimIndex(a);
      }), r) : i.getValues(t);
    }, e.prototype.hasValue = function(t) {
      for (var r = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = r.length; n < i; n++)
        if (isNaN(this._store.get(r[n], t)))
          return !1;
      return !0;
    }, e.prototype.indexOfName = function(t) {
      for (var r = 0, n = this._store.count(); r < n; r++)
        if (this.getName(r) === t)
          return r;
      return -1;
    }, e.prototype.getRawIndex = function(t) {
      return this._store.getRawIndex(t);
    }, e.prototype.indexOfRawIndex = function(t) {
      return this._store.indexOfRawIndex(t);
    }, e.prototype.rawIndexOf = function(t, r) {
      var n = t && this._invertedIndicesMap[t];
      if (process.env.NODE_ENV !== "production" && !n)
        throw new Error("Do not supported yet");
      var i = n && n[r];
      return i == null || isNaN(i) ? qc : i;
    }, e.prototype.indicesOfNearest = function(t, r, n) {
      return this._store.indicesOfNearest(this._getStoreDimIndex(t), r, n);
    }, e.prototype.each = function(t, r, n) {
      X(t) && (n = r, r = t, t = []);
      var i = n || this, a = Ze(hn(t), this._getStoreDimIndex, this);
      this._store.each(a, i ? wt(r, i) : r);
    }, e.prototype.filterSelf = function(t, r, n) {
      X(t) && (n = r, r = t, t = []);
      var i = n || this, a = Ze(hn(t), this._getStoreDimIndex, this);
      return this._store = this._store.filter(a, i ? wt(r, i) : r), this;
    }, e.prototype.selectRange = function(t) {
      var r = this, n = {}, i = at(t);
      return D(i, function(a) {
        var o = r._getStoreDimIndex(a);
        n[o] = t[a];
      }), this._store = this._store.selectRange(n), this;
    }, e.prototype.mapArray = function(t, r, n) {
      X(t) && (n = r, r = t, t = []), n = n || this;
      var i = [];
      return this.each(t, function() {
        i.push(r && r.apply(this, arguments));
      }, n), i;
    }, e.prototype.map = function(t, r, n, i) {
      var a = n || i || this, o = Ze(hn(t), this._getStoreDimIndex, this), s = ei(this);
      return s._store = this._store.map(o, a ? wt(r, a) : r), s;
    }, e.prototype.modify = function(t, r, n, i) {
      var a = this, o = n || i || this;
      process.env.NODE_ENV !== "production" && D(hn(t), function(u) {
        var l = a.getDimensionInfo(u);
        l.isCalculationCoord || console.error("Danger: only stack dimension can be modified");
      });
      var s = Ze(hn(t), this._getStoreDimIndex, this);
      this._store.modify(s, o ? wt(r, o) : r);
    }, e.prototype.downSample = function(t, r, n, i) {
      var a = ei(this);
      return a._store = this._store.downSample(this._getStoreDimIndex(t), r, n, i), a;
    }, e.prototype.minmaxDownSample = function(t, r) {
      var n = ei(this);
      return n._store = this._store.minmaxDownSample(this._getStoreDimIndex(t), r), n;
    }, e.prototype.lttbDownSample = function(t, r) {
      var n = ei(this);
      return n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), r), n;
    }, e.prototype.getRawDataItem = function(t) {
      return this._store.getRawDataItem(t);
    }, e.prototype.getItemModel = function(t) {
      var r = this.hostModel, n = this.getRawDataItem(t);
      return new vt(n, r, r && r.ecModel);
    }, e.prototype.diff = function(t) {
      var r = this;
      return new zT(t ? t.getStore().getIndices() : [], this.getStore().getIndices(), function(n) {
        return _a(t, n);
      }, function(n) {
        return _a(r, n);
      });
    }, e.prototype.getVisual = function(t) {
      var r = this._visual;
      return r && r[t];
    }, e.prototype.setVisual = function(t, r) {
      this._visual = this._visual || {}, Jn(t) ? A(this._visual, t) : this._visual[t] = r;
    }, e.prototype.getItemVisual = function(t, r) {
      var n = this._itemVisuals[t], i = n && n[r];
      return i ?? this.getVisual(r);
    }, e.prototype.hasItemVisual = function() {
      return this._itemVisuals.length > 0;
    }, e.prototype.ensureUniqueItemVisual = function(t, r) {
      var n = this._itemVisuals, i = n[t];
      i || (i = n[t] = {});
      var a = i[r];
      return a == null && (a = this.getVisual(r), L(a) ? a = a.slice() : Jn(a) && (a = A({}, a)), i[r] = a), a;
    }, e.prototype.setItemVisual = function(t, r, n) {
      var i = this._itemVisuals[t] || {};
      this._itemVisuals[t] = i, Jn(r) ? A(i, r) : i[r] = n;
    }, e.prototype.clearAllVisual = function() {
      this._visual = {}, this._itemVisuals = [];
    }, e.prototype.setLayout = function(t, r) {
      Jn(t) ? A(this._layout, t) : this._layout[t] = r;
    }, e.prototype.getLayout = function(t) {
      return this._layout[t];
    }, e.prototype.getItemLayout = function(t) {
      return this._itemLayouts[t];
    }, e.prototype.setItemLayout = function(t, r, n) {
      this._itemLayouts[t] = n ? A(this._itemLayouts[t] || {}, r) : r;
    }, e.prototype.clearItemLayouts = function() {
      this._itemLayouts.length = 0;
    }, e.prototype.setItemGraphicEl = function(t, r) {
      var n = this.hostModel && this.hostModel.seriesIndex;
      d1(n, this.dataType, t, r), this._graphicEls[t] = r;
    }, e.prototype.getItemGraphicEl = function(t) {
      return this._graphicEls[t];
    }, e.prototype.eachItemGraphicEl = function(t, r) {
      D(this._graphicEls, function(n, i) {
        n && t && t.call(r, n, i);
      });
    }, e.prototype.cloneShallow = function(t) {
      return t || (t = new e(this._schema ? this._schema : Ze(this.dimensions, this._getDimInfo, this), this.hostModel)), Qs(t, this), t._store = this._store, t;
    }, e.prototype.wrapMethod = function(t, r) {
      var n = this[t];
      X(n) && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function() {
        var i = n.apply(this, arguments);
        return r.apply(this, [i].concat(ho(arguments)));
      });
    }, e.internalField = function() {
      Xc = function(t) {
        var r = t._invertedIndicesMap;
        D(r, function(n, i) {
          var a = t._dimInfos[i], o = a.ordinalMeta, s = t._store;
          if (o) {
            n = r[i] = new XT(o.categories.length);
            for (var u = 0; u < n.length; u++)
              n[u] = qc;
            for (var u = 0; u < s.count(); u++)
              n[s.get(a.storeDimIndex, u)] = u;
          }
        });
      }, ti = function(t, r, n) {
        return Ce(t._getCategory(r, n), null);
      }, _a = function(t, r) {
        var n = t._idList[r];
        return n == null && t._idDimIdx != null && (n = ti(t, t._idDimIdx, r)), n == null && (n = $T + r), n;
      }, hn = function(t) {
        return L(t) || (t = t != null ? [t] : []), t;
      }, ei = function(t) {
        var r = new e(t._schema ? t._schema : Ze(t.dimensions, t._getDimInfo, t), t.hostModel);
        return Qs(r, t), r;
      }, Qs = function(t, r) {
        D(ZT.concat(r.__wrappedMethods || []), function(n) {
          r.hasOwnProperty(n) && (t[n] = r[n]);
        }), t.__wrappedMethods = r.__wrappedMethods, D(jT, function(n) {
          t[n] = j(r[n]);
        }), t._calculationInfo = A({}, r._calculationInfo);
      }, Js = function(t, r) {
        var n = t._nameList, i = t._idList, a = t._nameDimIdx, o = t._idDimIdx, s = n[r], u = i[r];
        if (s == null && a != null && (n[r] = s = ti(t, a, r)), u == null && o != null && (i[r] = u = ti(t, o, r)), u == null && s != null) {
          var l = t._nameRepeatCount, f = l[s] = (l[s] || 0) + 1;
          u = s, f > 1 && (u += "__ec__" + f), i[r] = u;
        }
      };
    }(), e;
  }()
);
function KT(e, t) {
  return Qg(e, t).dimensions;
}
function Qg(e, t) {
  Bl(e) || (e = Zp(e)), t = t || {};
  var r = t.coordDimensions || [], n = t.dimensionsDefine || e.dimensionsDefine || [], i = W(), a = [], o = JT(e, r, n, t.dimensionsCount), s = t.canOmitUnusedDimensions && jg(o), u = n === e.dimensionsDefine, l = u ? Zg(e) : $g(n), f = t.encodeDefine;
  !f && t.encodeDefaulter && (f = t.encodeDefaulter(e, o));
  for (var h = W(f), v = new ng(o), c = 0; c < v.length; c++)
    v[c] = -1;
  function d(M) {
    var C = v[M];
    if (C < 0) {
      var x = n[M], O = F(x) ? x : {
        name: x
      }, R = new La(), P = O.name;
      P != null && l.get(P) != null && (R.name = R.displayName = P), O.type != null && (R.type = O.type), O.displayName != null && (R.displayName = O.displayName);
      var N = a.length;
      return v[M] = N, R.storeDimIndex = M, a.push(R), R;
    }
    return a[C];
  }
  if (!s)
    for (var c = 0; c < o; c++)
      d(c);
  h.each(function(M, C) {
    var x = xt(M).slice();
    if (x.length === 1 && !V(x[0]) && x[0] < 0) {
      h.set(C, !1);
      return;
    }
    var O = h.set(C, []);
    D(x, function(R, P) {
      var N = V(R) ? l.get(R) : R;
      N != null && N < o && (O[P] = N, p(d(N), C, P));
    });
  });
  var y = 0;
  D(r, function(M) {
    var C, x, O, R;
    if (V(M))
      C = M, R = {};
    else {
      R = M, C = R.name;
      var P = R.ordinalMeta;
      R.ordinalMeta = null, R = A({}, R), R.ordinalMeta = P, x = R.dimsDef, O = R.otherDims, R.name = R.coordDim = R.coordDimIndex = R.dimsDef = R.otherDims = null;
    }
    var N = h.get(C);
    if (N !== !1) {
      if (N = xt(N), !N.length)
        for (var I = 0; I < (x && x.length || 1); I++) {
          for (; y < o && d(y).coordDim != null; )
            y++;
          y < o && N.push(y++);
        }
      D(N, function(G, B) {
        var z = d(G);
        if (u && R.type != null && (z.type = R.type), p(ht(z, R), C, B), z.name == null && x) {
          var Y = x[B];
          !F(Y) && (Y = {
            name: Y
          }), z.name = z.displayName = Y.name, z.defaultTooltip = Y.defaultTooltip;
        }
        O && ht(z.otherDims, O);
      });
    }
  });
  function p(M, C, x) {
    Gu.get(C) != null ? M.otherDims[C] = x : (M.coordDim = C, M.coordDimIndex = x, i.set(C, !0));
  }
  var g = t.generateCoord, _ = t.generateCoordCount, m = _ != null;
  _ = g ? _ || 1 : 0;
  var S = g || "value";
  function b(M) {
    M.name == null && (M.name = M.coordDim);
  }
  if (s)
    D(a, function(M) {
      b(M);
    }), a.sort(function(M, C) {
      return M.storeDimIndex - C.storeDimIndex;
    });
  else
    for (var w = 0; w < o; w++) {
      var T = d(w), E = T.coordDim;
      E == null && (T.coordDim = tD(S, i, m), T.coordDimIndex = 0, (!g || _ <= 0) && (T.isExtraCoord = !0), _--), b(T), T.type == null && (Wp(e, w) === pt.Must || T.isExtraCoord && (T.otherDims.itemName != null || T.otherDims.seriesName != null)) && (T.type = "ordinal");
    }
  return QT(a), new qg({
    source: e,
    dimensions: a,
    fullDimensionCount: o,
    dimensionOmitted: s
  });
}
function QT(e) {
  for (var t = W(), r = 0; r < e.length; r++) {
    var n = e[r], i = n.name, a = t.get(i) || 0;
    a > 0 && (n.name = i + (a - 1)), a++, t.set(i, a);
  }
}
function JT(e, t, r, n) {
  var i = Math.max(e.dimensionsDetectedCount || 1, t.length, r.length, n || 0);
  return D(t, function(a) {
    var o;
    F(a) && (o = a.dimsDef) && (i = Math.max(i, o.length));
  }), i;
}
function tD(e, t, r) {
  if (r || t.hasKey(e)) {
    for (var n = 0; t.hasKey(e + n); )
      n++;
    e += n;
  }
  return t.set(e, !0), e;
}
var eD = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.coordSysDims = [], this.axisMap = W(), this.categoryAxisMap = W(), this.coordSysName = t;
    }
    return e;
  }()
);
function rD(e) {
  var t = e.get("coordinateSystem"), r = new eD(t), n = nD[t];
  if (n)
    return n(e, r, r.axisMap, r.categoryAxisMap), r;
}
var nD = {
  cartesian2d: function(e, t, r, n) {
    var i = e.getReferringComponents("xAxis", Ir).models[0], a = e.getReferringComponents("yAxis", Ir).models[0];
    if (process.env.NODE_ENV !== "production") {
      if (!i)
        throw new Error('xAxis "' + su(e.get("xAxisIndex"), e.get("xAxisId"), 0) + '" not found');
      if (!a)
        throw new Error('yAxis "' + su(e.get("xAxisIndex"), e.get("yAxisId"), 0) + '" not found');
    }
    t.coordSysDims = ["x", "y"], r.set("x", i), r.set("y", a), cn(i) && (n.set("x", i), t.firstCategoryDimIndex = 0), cn(a) && (n.set("y", a), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  singleAxis: function(e, t, r, n) {
    var i = e.getReferringComponents("singleAxis", Ir).models[0];
    if (process.env.NODE_ENV !== "production" && !i)
      throw new Error("singleAxis should be specified.");
    t.coordSysDims = ["single"], r.set("single", i), cn(i) && (n.set("single", i), t.firstCategoryDimIndex = 0);
  },
  polar: function(e, t, r, n) {
    var i = e.getReferringComponents("polar", Ir).models[0], a = i.findAxisModel("radiusAxis"), o = i.findAxisModel("angleAxis");
    if (process.env.NODE_ENV !== "production") {
      if (!o)
        throw new Error("angleAxis option not found");
      if (!a)
        throw new Error("radiusAxis option not found");
    }
    t.coordSysDims = ["radius", "angle"], r.set("radius", a), r.set("angle", o), cn(a) && (n.set("radius", a), t.firstCategoryDimIndex = 0), cn(o) && (n.set("angle", o), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = 1));
  },
  geo: function(e, t, r, n) {
    t.coordSysDims = ["lng", "lat"];
  },
  parallel: function(e, t, r, n) {
    var i = e.ecModel, a = i.getComponent("parallel", e.get("parallelIndex")), o = t.coordSysDims = a.dimensions.slice();
    D(a.parallelAxisIndex, function(s, u) {
      var l = i.getComponent("parallelAxis", s), f = o[u];
      r.set(f, l), cn(l) && (n.set(f, l), t.firstCategoryDimIndex == null && (t.firstCategoryDimIndex = u));
    });
  }
};
function cn(e) {
  return e.get("type") === "category";
}
function Jg(e, t, r) {
  r = r || {};
  var n = r.byIndex, i = r.stackedCoordDimension, a, o, s;
  iD(t) ? a = t : (o = t.schema, a = o.dimensions, s = t.store);
  var u = !!(e && e.get("stack")), l, f, h, v;
  if (D(a, function(_, m) {
    V(_) && (a[m] = _ = {
      name: _
    }), u && !_.isExtraCoord && (!n && !l && _.ordinalMeta && (l = _), !f && _.type !== "ordinal" && _.type !== "time" && (!i || i === _.coordDim) && (f = _));
  }), f && !n && !l && (n = !0), f) {
    h = "__\0ecstackresult_" + e.id, v = "__\0ecstackedover_" + e.id, l && (l.createInvertedIndices = !0);
    var c = f.coordDim, d = f.type, y = 0;
    D(a, function(_) {
      _.coordDim === c && y++;
    });
    var p = {
      name: h,
      coordDim: c,
      coordDimIndex: y,
      type: d,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length
    }, g = {
      name: v,
      // This dimension contains stack base (generally, 0), so do not set it as
      // `stackedDimCoordDim` to avoid extent calculation, consider log scale.
      coordDim: v,
      coordDimIndex: y + 1,
      type: d,
      isExtraCoord: !0,
      isCalculationCoord: !0,
      storeDimIndex: a.length + 1
    };
    o ? (s && (p.storeDimIndex = s.ensureCalculationDimension(v, d), g.storeDimIndex = s.ensureCalculationDimension(h, d)), o.appendCalculationDimension(p), o.appendCalculationDimension(g)) : (a.push(p), a.push(g));
  }
  return {
    stackedDimension: f && f.name,
    stackedByDimension: l && l.name,
    isStackedByIndex: n,
    stackedOverDimension: v,
    stackResultDimension: h
  };
}
function iD(e) {
  return !Xg(e.schema);
}
function Kl(e, t) {
  return !!t && t === e.getCalculationInfo("stackedDimension");
}
function ty(e, t) {
  return Kl(e, t) ? e.getCalculationInfo("stackResultDimension") : t;
}
function aD(e, t) {
  var r = e.get("coordinateSystem"), n = Vo.get(r), i;
  return t && t.coordSysDims && (i = k(t.coordSysDims, function(a) {
    var o = {
      name: a
    }, s = t.axisMap.get(a);
    if (s) {
      var u = s.get("type");
      o.type = UT(u);
    }
    return o;
  })), i || (i = n && (n.getDimensionsInfo ? n.getDimensionsInfo() : n.dimensions.slice()) || ["x", "y"]), i;
}
function oD(e, t, r) {
  var n, i;
  return r && D(e, function(a, o) {
    var s = a.coordDim, u = r.categoryAxisMap.get(s);
    u && (n == null && (n = o), a.ordinalMeta = u.getOrdinalMeta(), t && (a.createInvertedIndices = !0)), a.otherDims.itemName != null && (i = !0);
  }), !i && n != null && (e[n].otherDims.itemName = 0), n;
}
function sD(e, t, r) {
  r = r || {};
  var n = t.getSourceManager(), i, a = !1;
  i = n.getSource(), a = i.sourceFormat === oe;
  var o = rD(t), s = aD(t, o), u = r.useEncodeDefaulter, l = X(u) ? u : u ? xn(JS, s, t) : null, f = {
    coordDimensions: s,
    generateCoord: r.generateCoord,
    encodeDefine: t.getEncode(),
    encodeDefaulter: l,
    canOmitUnusedDimensions: !a
  }, h = Qg(i, f), v = oD(h.dimensions, r.createInvertedIndices, o), c = a ? null : n.getSharedDataStore(h), d = Jg(t, {
    schema: h,
    store: c
  }), y = new Kg(h, t);
  y.setCalculationInfo(d);
  var p = v != null && uD(i) ? function(g, _, m, S) {
    return S === v ? m : this.defaultDimValueGetter(g, _, m, S);
  } : null;
  return y.hasItemOption = !1, y.initData(
    // Try to reuse the data store in sourceManager if using dataset.
    a ? i : c,
    null,
    p
  ), y;
}
function uD(e) {
  if (e.sourceFormat === oe) {
    var t = lD(e.data || []);
    return !L(Fi(t));
  }
}
function lD(e) {
  for (var t = 0; t < e.length && e[t] == null; )
    t++;
  return e[t];
}
var Re = (
  /** @class */
  function() {
    function e(t) {
      this._setting = t || {}, this._extent = [1 / 0, -1 / 0];
    }
    return e.prototype.getSetting = function(t) {
      return this._setting[t];
    }, e.prototype.unionExtent = function(t) {
      var r = this._extent;
      t[0] < r[0] && (r[0] = t[0]), t[1] > r[1] && (r[1] = t[1]);
    }, e.prototype.unionExtentFromData = function(t, r) {
      this.unionExtent(t.getApproximateExtent(r));
    }, e.prototype.getExtent = function() {
      return this._extent.slice();
    }, e.prototype.setExtent = function(t, r) {
      var n = this._extent;
      isNaN(t) || (n[0] = t), isNaN(r) || (n[1] = r);
    }, e.prototype.isInExtentRange = function(t) {
      return this._extent[0] <= t && this._extent[1] >= t;
    }, e.prototype.isBlank = function() {
      return this._isBlank;
    }, e.prototype.setBlank = function(t) {
      this._isBlank = t;
    }, e;
  }()
);
mo(Re);
var fD = 0, $c = (
  /** @class */
  function() {
    function e(t) {
      this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this.uid = ++fD;
    }
    return e.createByAxisModel = function(t) {
      var r = t.option, n = r.data, i = n && k(n, hD);
      return new e({
        categories: i,
        needCollect: !i,
        // deduplication is default in axis.
        deduplication: r.dedplication !== !1
      });
    }, e.prototype.getOrdinal = function(t) {
      return this._getOrCreateMap().get(t);
    }, e.prototype.parseAndCollect = function(t) {
      var r, n = this._needCollect;
      if (!V(t) && !n)
        return t;
      if (n && !this._deduplication)
        return r = this.categories.length, this.categories[r] = t, r;
      var i = this._getOrCreateMap();
      return r = i.get(t), r == null && (n ? (r = this.categories.length, this.categories[r] = t, i.set(t, r)) : r = NaN), r;
    }, e.prototype._getOrCreateMap = function() {
      return this._map || (this._map = W(this.categories));
    }, e;
  }()
);
function hD(e) {
  return F(e) && e.value != null ? e.value : e + "";
}
function cC(e) {
  var t = Math.pow(10, ki(Math.abs(e))), r = Math.abs(e / t);
  return r === 0 || r === 1 || r === 2 || r === 3 || r === 5;
}
function vC(e) {
  return e.type === "interval" || e.type === "log";
}
function cD(e, t, r, n) {
  var i = {}, a = e[1] - e[0], o = i.interval = gl(a / t, !0);
  r != null && o < r && (o = i.interval = r), n != null && o > n && (o = i.interval = n);
  var s = i.intervalPrecision = ey(o), u = i.niceTickExtent = [Ft(Math.ceil(e[0] / o) * o, s), Ft(Math.floor(e[1] / o) * o, s)];
  return vD(u, e), i;
}
function dC(e) {
  var t = Math.pow(10, ki(e)), r = e / t;
  return r ? r === 2 ? r = 3 : r === 3 ? r = 5 : r *= 2 : r = 1, Ft(r * t);
}
function ey(e) {
  return De(e) + 2;
}
function Zc(e, t, r) {
  e[t] = Math.max(Math.min(e[t], r[1]), r[0]);
}
function vD(e, t) {
  !isFinite(e[0]) && (e[0] = t[0]), !isFinite(e[1]) && (e[1] = t[1]), Zc(e, 0, t), Zc(e, 1, t), e[0] > e[1] && (e[0] = e[1]);
}
function Wo(e, t) {
  return e >= t[0] && e <= t[1];
}
function Yo(e, t) {
  return t[1] === t[0] ? 0.5 : (e - t[0]) / (t[1] - t[0]);
}
function qo(e, t) {
  return e * (t[1] - t[0]) + t[0];
}
var Ql = (
  /** @class */
  function(e) {
    qt(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      n.type = "ordinal";
      var i = n.getSetting("ordinalMeta");
      return i || (i = new $c({})), L(i) && (i = new $c({
        categories: k(i, function(a) {
          return F(a) ? a.value : a;
        })
      })), n._ordinalMeta = i, n._extent = n.getSetting("extent") || [0, i.categories.length - 1], n;
    }
    return t.prototype.parse = function(r) {
      return r == null ? NaN : V(r) ? this._ordinalMeta.getOrdinal(r) : Math.round(r);
    }, t.prototype.contain = function(r) {
      return r = this.parse(r), Wo(r, this._extent) && this._ordinalMeta.categories[r] != null;
    }, t.prototype.normalize = function(r) {
      return r = this._getTickNumber(this.parse(r)), Yo(r, this._extent);
    }, t.prototype.scale = function(r) {
      return r = Math.round(qo(r, this._extent)), this.getRawOrdinalNumber(r);
    }, t.prototype.getTicks = function() {
      for (var r = [], n = this._extent, i = n[0]; i <= n[1]; )
        r.push({
          value: i
        }), i++;
      return r;
    }, t.prototype.getMinorTicks = function(r) {
    }, t.prototype.setSortInfo = function(r) {
      if (r == null) {
        this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
        return;
      }
      for (var n = r.ordinalNumbers, i = this._ordinalNumbersByTick = [], a = this._ticksByOrdinalNumber = [], o = 0, s = this._ordinalMeta.categories.length, u = Math.min(s, n.length); o < u; ++o) {
        var l = n[o];
        i[o] = l, a[l] = o;
      }
      for (var f = 0; o < s; ++o) {
        for (; a[f] != null; )
          f++;
        i.push(f), a[f] = o;
      }
    }, t.prototype._getTickNumber = function(r) {
      var n = this._ticksByOrdinalNumber;
      return n && r >= 0 && r < n.length ? n[r] : r;
    }, t.prototype.getRawOrdinalNumber = function(r) {
      var n = this._ordinalNumbersByTick;
      return n && r >= 0 && r < n.length ? n[r] : r;
    }, t.prototype.getLabel = function(r) {
      if (!this.isBlank()) {
        var n = this.getRawOrdinalNumber(r.value), i = this._ordinalMeta.categories[n];
        return i == null ? "" : i + "";
      }
    }, t.prototype.count = function() {
      return this._extent[1] - this._extent[0] + 1;
    }, t.prototype.unionExtentFromData = function(r, n) {
      this.unionExtent(r.getApproximateExtent(n));
    }, t.prototype.isInExtentRange = function(r) {
      return r = this._getTickNumber(r), this._extent[0] <= r && this._extent[1] >= r;
    }, t.prototype.getOrdinalMeta = function() {
      return this._ordinalMeta;
    }, t.prototype.calcNiceTicks = function() {
    }, t.prototype.calcNiceExtent = function() {
    }, t.type = "ordinal", t;
  }(Re)
);
Re.registerClass(Ql);
var Pr = Ft, Gi = (
  /** @class */
  function(e) {
    qt(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = "interval", r._interval = 0, r._intervalPrecision = 2, r;
    }
    return t.prototype.parse = function(r) {
      return r;
    }, t.prototype.contain = function(r) {
      return Wo(r, this._extent);
    }, t.prototype.normalize = function(r) {
      return Yo(r, this._extent);
    }, t.prototype.scale = function(r) {
      return qo(r, this._extent);
    }, t.prototype.setExtent = function(r, n) {
      var i = this._extent;
      isNaN(r) || (i[0] = parseFloat(r)), isNaN(n) || (i[1] = parseFloat(n));
    }, t.prototype.unionExtent = function(r) {
      var n = this._extent;
      r[0] < n[0] && (n[0] = r[0]), r[1] > n[1] && (n[1] = r[1]), this.setExtent(n[0], n[1]);
    }, t.prototype.getInterval = function() {
      return this._interval;
    }, t.prototype.setInterval = function(r) {
      this._interval = r, this._niceExtent = this._extent.slice(), this._intervalPrecision = ey(r);
    }, t.prototype.getTicks = function(r) {
      var n = this._interval, i = this._extent, a = this._niceExtent, o = this._intervalPrecision, s = [];
      if (!n)
        return s;
      var u = 1e4;
      i[0] < a[0] && (r ? s.push({
        value: Pr(a[0] - n, o)
      }) : s.push({
        value: i[0]
      }));
      for (var l = a[0]; l <= a[1] && (s.push({
        value: l
      }), l = Pr(l + n, o), l !== s[s.length - 1].value); )
        if (s.length > u)
          return [];
      var f = s.length ? s[s.length - 1].value : a[1];
      return i[1] > f && (r ? s.push({
        value: Pr(f + n, o)
      }) : s.push({
        value: i[1]
      })), s;
    }, t.prototype.getMinorTicks = function(r) {
      for (var n = this.getTicks(!0), i = [], a = this.getExtent(), o = 1; o < n.length; o++) {
        for (var s = n[o], u = n[o - 1], l = 0, f = [], h = s.value - u.value, v = h / r; l < r - 1; ) {
          var c = Pr(u.value + (l + 1) * v);
          c > a[0] && c < a[1] && f.push(c), l++;
        }
        i.push(f);
      }
      return i;
    }, t.prototype.getLabel = function(r, n) {
      if (r == null)
        return "";
      var i = n && n.precision;
      i == null ? i = De(r.value) || 0 : i === "auto" && (i = this._intervalPrecision);
      var a = Pr(r.value, i, !0);
      return Al(a);
    }, t.prototype.calcNiceTicks = function(r, n, i) {
      r = r || 5;
      var a = this._extent, o = a[1] - a[0];
      if (isFinite(o)) {
        o < 0 && (o = -o, a.reverse());
        var s = cD(a, r, n, i);
        this._intervalPrecision = s.intervalPrecision, this._interval = s.interval, this._niceExtent = s.niceTickExtent;
      }
    }, t.prototype.calcNiceExtent = function(r) {
      var n = this._extent;
      if (n[0] === n[1])
        if (n[0] !== 0) {
          var i = Math.abs(n[0]);
          r.fixMax || (n[1] += i / 2), n[0] -= i / 2;
        } else
          n[1] = 1;
      var a = n[1] - n[0];
      isFinite(a) || (n[0] = 0, n[1] = 1), this.calcNiceTicks(r.splitNumber, r.minInterval, r.maxInterval);
      var o = this._interval;
      r.fixMin || (n[0] = Pr(Math.floor(n[0] / o) * o)), r.fixMax || (n[1] = Pr(Math.ceil(n[1] / o) * o));
    }, t.prototype.setNiceExtent = function(r, n) {
      this._niceExtent = [r, n];
    }, t.type = "interval", t;
  }(Re)
);
Re.registerClass(Gi);
var ry = typeof Float32Array < "u", dD = ry ? Float32Array : Array;
function tu(e) {
  return L(e) ? ry ? new Float32Array(e) : e : new dD(e);
}
var pD = "__ec_stack_";
function ny(e) {
  return e.get("stack") || pD + e.seriesIndex;
}
function Jl(e) {
  return e.dim + e.index;
}
function iy(e, t) {
  var r = [];
  return t.eachSeriesByType(e, function(n) {
    oy(n) && r.push(n);
  }), r;
}
function gD(e) {
  var t = {};
  D(e, function(u) {
    var l = u.coordinateSystem, f = l.getBaseAxis();
    if (!(f.type !== "time" && f.type !== "value"))
      for (var h = u.getData(), v = f.dim + "_" + f.index, c = h.getDimensionIndex(h.mapDimension(f.dim)), d = h.getStore(), y = 0, p = d.count(); y < p; ++y) {
        var g = d.get(c, y);
        t[v] ? t[v].push(g) : t[v] = [g];
      }
  });
  var r = {};
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = t[n];
      if (i) {
        i.sort(function(u, l) {
          return u - l;
        });
        for (var a = null, o = 1; o < i.length; ++o) {
          var s = i[o] - i[o - 1];
          s > 0 && (a = a === null ? s : Math.min(a, s));
        }
        r[n] = a;
      }
    }
  return r;
}
function ay(e) {
  var t = gD(e), r = [];
  return D(e, function(n) {
    var i = n.coordinateSystem, a = i.getBaseAxis(), o = a.getExtent(), s;
    if (a.type === "category")
      s = a.getBandWidth();
    else if (a.type === "value" || a.type === "time") {
      var u = a.dim + "_" + a.index, l = t[u], f = Math.abs(o[1] - o[0]), h = a.scale.getExtent(), v = Math.abs(h[1] - h[0]);
      s = l ? f / v * l : f;
    } else {
      var c = n.getData();
      s = Math.abs(o[1] - o[0]) / c.count();
    }
    var d = Ht(n.get("barWidth"), s), y = Ht(n.get("barMaxWidth"), s), p = Ht(
      // barMinWidth by default is 0.5 / 1 in cartesian. Because in value axis,
      // the auto-calculated bar width might be less than 0.5 / 1.
      n.get("barMinWidth") || (sy(n) ? 0.5 : 1),
      s
    ), g = n.get("barGap"), _ = n.get("barCategoryGap");
    r.push({
      bandWidth: s,
      barWidth: d,
      barMaxWidth: y,
      barMinWidth: p,
      barGap: g,
      barCategoryGap: _,
      axisKey: Jl(a),
      stackId: ny(n)
    });
  }), yD(r);
}
function yD(e) {
  var t = {};
  D(e, function(n, i) {
    var a = n.axisKey, o = n.bandWidth, s = t[a] || {
      bandWidth: o,
      remainedWidth: o,
      autoWidthCount: 0,
      categoryGap: null,
      gap: "20%",
      stacks: {}
    }, u = s.stacks;
    t[a] = s;
    var l = n.stackId;
    u[l] || s.autoWidthCount++, u[l] = u[l] || {
      width: 0,
      maxWidth: 0
    };
    var f = n.barWidth;
    f && !u[l].width && (u[l].width = f, f = Math.min(s.remainedWidth, f), s.remainedWidth -= f);
    var h = n.barMaxWidth;
    h && (u[l].maxWidth = h);
    var v = n.barMinWidth;
    v && (u[l].minWidth = v);
    var c = n.barGap;
    c != null && (s.gap = c);
    var d = n.barCategoryGap;
    d != null && (s.categoryGap = d);
  });
  var r = {};
  return D(t, function(n, i) {
    r[i] = {};
    var a = n.stacks, o = n.bandWidth, s = n.categoryGap;
    if (s == null) {
      var u = at(a).length;
      s = Math.max(35 - u * 4, 15) + "%";
    }
    var l = Ht(s, o), f = Ht(n.gap, 1), h = n.remainedWidth, v = n.autoWidthCount, c = (h - l) / (v + (v - 1) * f);
    c = Math.max(c, 0), D(a, function(g) {
      var _ = g.maxWidth, m = g.minWidth;
      if (g.width) {
        var S = g.width;
        _ && (S = Math.min(S, _)), m && (S = Math.max(S, m)), g.width = S, h -= S + f * S, v--;
      } else {
        var S = c;
        _ && _ < S && (S = Math.min(_, h)), m && m > S && (S = m), S !== c && (g.width = S, h -= S + f * S, v--);
      }
    }), c = (h - l) / (v + (v - 1) * f), c = Math.max(c, 0);
    var d = 0, y;
    D(a, function(g, _) {
      g.width || (g.width = c), y = g, d += g.width * (1 + f);
    }), y && (d -= y.width * f);
    var p = -d / 2;
    D(a, function(g, _) {
      r[i][_] = r[i][_] || {
        bandWidth: o,
        offset: p,
        width: g.width
      }, p += g.width * (1 + f);
    });
  }), r;
}
function _D(e, t, r) {
  if (e && t) {
    var n = e[Jl(t)];
    return n;
  }
}
function pC(e, t) {
  var r = iy(e, t), n = ay(r);
  D(r, function(i) {
    var a = i.getData(), o = i.coordinateSystem, s = o.getBaseAxis(), u = ny(i), l = n[Jl(s)][u], f = l.offset, h = l.width;
    a.setLayout({
      bandWidth: l.bandWidth,
      offset: f,
      size: h
    });
  });
}
function gC(e) {
  return {
    seriesType: e,
    plan: fg(),
    reset: function(t) {
      if (oy(t)) {
        var r = t.getData(), n = t.coordinateSystem, i = n.getBaseAxis(), a = n.getOtherAxis(i), o = r.getDimensionIndex(r.mapDimension(a.dim)), s = r.getDimensionIndex(r.mapDimension(i.dim)), u = t.get("showBackground", !0), l = r.mapDimension(a.dim), f = r.getCalculationInfo("stackResultDimension"), h = Kl(r, l) && !!r.getCalculationInfo("stackedOnSeries"), v = a.isHorizontal(), c = mD(i, a), d = sy(t), y = t.get("barMinHeight") || 0, p = f && r.getDimensionIndex(f), g = r.getLayout("size"), _ = r.getLayout("offset");
        return {
          progress: function(m, S) {
            for (var b = m.count, w = d && tu(b * 3), T = d && u && tu(b * 3), E = d && tu(b), M = n.master.getRect(), C = v ? M.width : M.height, x, O = S.getStore(), R = 0; (x = m.next()) != null; ) {
              var P = O.get(h ? p : o, x), N = O.get(s, x), I = c, G = void 0;
              h && (G = +P - O.get(o, x));
              var B = void 0, z = void 0, Y = void 0, nt = void 0;
              if (v) {
                var Q = n.dataToPoint([P, N]);
                if (h) {
                  var gt = n.dataToPoint([G, N]);
                  I = gt[0];
                }
                B = I, z = Q[1] + _, Y = Q[0] - I, nt = g, Math.abs(Y) < y && (Y = (Y < 0 ? -1 : 1) * y);
              } else {
                var Q = n.dataToPoint([N, P]);
                if (h) {
                  var gt = n.dataToPoint([N, G]);
                  I = gt[1];
                }
                B = Q[0] + _, z = I, Y = g, nt = Q[1] - I, Math.abs(nt) < y && (nt = (nt <= 0 ? -1 : 1) * y);
              }
              d ? (w[R] = B, w[R + 1] = z, w[R + 2] = v ? Y : nt, T && (T[R] = v ? M.x : B, T[R + 1] = v ? z : M.y, T[R + 2] = C), E[x] = x) : S.setItemLayout(x, {
                x: B,
                y: z,
                width: Y,
                height: nt
              }), R += 3;
            }
            d && S.setLayout({
              largePoints: w,
              largeDataIndices: E,
              largeBackgroundPoints: T,
              valueAxisHorizontal: v
            });
          }
        };
      }
    }
  };
}
function oy(e) {
  return e.coordinateSystem && e.coordinateSystem.type === "cartesian2d";
}
function sy(e) {
  return e.pipelineContext && e.pipelineContext.large;
}
function mD(e, t) {
  var r = t.model.get("startValue");
  return r || (r = 0), t.toGlobalCoord(t.dataToCoord(t.type === "log" ? r > 0 ? r : 1 : r));
}
var SD = function(e, t, r, n) {
  for (; r < n; ) {
    var i = r + n >>> 1;
    e[i][1] < t ? r = i + 1 : n = i;
  }
  return r;
}, uy = (
  /** @class */
  function(e) {
    qt(t, e);
    function t(r) {
      var n = e.call(this, r) || this;
      return n.type = "time", n;
    }
    return t.prototype.getLabel = function(r) {
      var n = this.getSetting("useUTC");
      return No(r.value, zh[BS(Sn(this._minLevelUnit))] || zh.second, n, this.getSetting("locale"));
    }, t.prototype.getFormattedLabel = function(r, n, i) {
      var a = this.getSetting("useUTC"), o = this.getSetting("locale");
      return VS(r, n, i, o, a);
    }, t.prototype.getTicks = function() {
      var r = this._interval, n = this._extent, i = [];
      if (!r)
        return i;
      i.push({
        value: n[0],
        level: 0
      });
      var a = this.getSetting("useUTC"), o = ED(this._minLevelUnit, this._approxInterval, a, n);
      return i = i.concat(o), i.push({
        value: n[1],
        level: 0
      }), i;
    }, t.prototype.calcNiceExtent = function(r) {
      var n = this._extent;
      if (n[0] === n[1] && (n[0] -= ne, n[1] += ne), n[1] === -1 / 0 && n[0] === 1 / 0) {
        var i = /* @__PURE__ */ new Date();
        n[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), n[0] = n[1] - ne;
      }
      this.calcNiceTicks(r.splitNumber, r.minInterval, r.maxInterval);
    }, t.prototype.calcNiceTicks = function(r, n, i) {
      r = r || 10;
      var a = this._extent, o = a[1] - a[0];
      this._approxInterval = o / r, n != null && this._approxInterval < n && (this._approxInterval = n), i != null && this._approxInterval > i && (this._approxInterval = i);
      var s = ma.length, u = Math.min(SD(ma, this._approxInterval, 0, s), s - 1);
      this._interval = ma[u][1], this._minLevelUnit = ma[Math.max(u - 1, 0)][0];
    }, t.prototype.parse = function(r) {
      return lt(r) ? r : +ie(r);
    }, t.prototype.contain = function(r) {
      return Wo(this.parse(r), this._extent);
    }, t.prototype.normalize = function(r) {
      return Yo(this.parse(r), this._extent);
    }, t.prototype.scale = function(r) {
      return qo(r, this._extent);
    }, t.type = "time", t;
  }(Gi)
), ma = [
  // Format                           interval
  ["second", Pl],
  ["minute", Rl],
  ["hour", yi],
  ["quarter-day", yi * 6],
  ["half-day", yi * 12],
  ["day", ne * 1.2],
  ["half-week", ne * 3.5],
  ["week", ne * 7],
  ["month", ne * 31],
  ["quarter", ne * 95],
  ["half-year", Vh / 2],
  ["year", Vh]
  // 1Y
];
function wD(e, t, r, n) {
  var i = ie(t), a = ie(r), o = function(d) {
    return Hh(i, d, n) === Hh(a, d, n);
  }, s = function() {
    return o("year");
  }, u = function() {
    return s() && o("month");
  }, l = function() {
    return u() && o("day");
  }, f = function() {
    return l() && o("hour");
  }, h = function() {
    return f() && o("minute");
  }, v = function() {
    return h() && o("second");
  }, c = function() {
    return v() && o("millisecond");
  };
  switch (e) {
    case "year":
      return s();
    case "month":
      return u();
    case "day":
      return l();
    case "hour":
      return f();
    case "minute":
      return h();
    case "second":
      return v();
    case "millisecond":
      return c();
  }
}
function bD(e, t) {
  return e /= ne, e > 16 ? 16 : e > 7.5 ? 7 : e > 3.5 ? 4 : e > 1.5 ? 2 : 1;
}
function TD(e) {
  var t = 30 * ne;
  return e /= t, e > 6 ? 6 : e > 3 ? 3 : e > 2 ? 2 : 1;
}
function DD(e) {
  return e /= yi, e > 12 ? 12 : e > 6 ? 6 : e > 3.5 ? 4 : e > 2 ? 2 : 1;
}
function jc(e, t) {
  return e /= t ? Rl : Pl, e > 30 ? 30 : e > 20 ? 20 : e > 15 ? 15 : e > 10 ? 10 : e > 5 ? 5 : e > 2 ? 2 : 1;
}
function MD(e) {
  return gl(e, !0);
}
function CD(e, t, r) {
  var n = new Date(e);
  switch (Sn(t)) {
    case "year":
    case "month":
      n[Rp(r)](0);
    case "day":
      n[Ip(r)](1);
    case "hour":
      n[Ap(r)](0);
    case "minute":
      n[Np(r)](0);
    case "second":
      n[Lp(r)](0), n[kp(r)](0);
  }
  return n.getTime();
}
function ED(e, t, r, n) {
  var i = 1e4, a = Op, o = 0;
  function s(C, x, O, R, P, N, I) {
    for (var G = new Date(x), B = x, z = G[R](); B < O && B <= n[1]; )
      I.push({
        value: B
      }), z += C, G[P](z), B = G.getTime();
    I.push({
      value: B,
      notAdd: !0
    });
  }
  function u(C, x, O) {
    var R = [], P = !x.length;
    if (!wD(Sn(C), n[0], n[1], r)) {
      P && (x = [{
        // TODO Optimize. Not include so may ticks.
        value: CD(new Date(n[0]), C, r)
      }, {
        value: n[1]
      }]);
      for (var N = 0; N < x.length - 1; N++) {
        var I = x[N].value, G = x[N + 1].value;
        if (I !== G) {
          var B = void 0, z = void 0, Y = void 0, nt = !1;
          switch (C) {
            case "year":
              B = Math.max(1, Math.round(t / ne / 365)), z = Il(r), Y = zS(r);
              break;
            case "half-year":
            case "quarter":
            case "month":
              B = TD(t), z = wn(r), Y = Rp(r);
              break;
            case "week":
            case "half-week":
            case "day":
              B = bD(t), z = Lo(r), Y = Ip(r), nt = !0;
              break;
            case "half-day":
            case "quarter-day":
            case "hour":
              B = DD(t), z = Oi(r), Y = Ap(r);
              break;
            case "minute":
              B = jc(t, !0), z = ko(r), Y = Np(r);
              break;
            case "second":
              B = jc(t, !1), z = Fo(r), Y = Lp(r);
              break;
            case "millisecond":
              B = MD(t), z = Bo(r), Y = kp(r);
              break;
          }
          s(B, I, G, z, Y, nt, R), C === "year" && O.length > 1 && N === 0 && O.unshift({
            value: O[0].value - B
          });
        }
      }
      for (var N = 0; N < R.length; N++)
        O.push(R[N]);
      return R;
    }
  }
  for (var l = [], f = [], h = 0, v = 0, c = 0; c < a.length && o++ < i; ++c) {
    var d = Sn(a[c]);
    if (FS(a[c])) {
      u(a[c], l[l.length - 1] || [], f);
      var y = a[c + 1] ? Sn(a[c + 1]) : null;
      if (d !== y) {
        if (f.length) {
          v = h, f.sort(function(C, x) {
            return C.value - x.value;
          });
          for (var p = [], g = 0; g < f.length; ++g) {
            var _ = f[g].value;
            (g === 0 || f[g - 1].value !== _) && (p.push(f[g]), _ >= n[0] && _ <= n[1] && h++);
          }
          var m = (n[1] - n[0]) / t;
          if (h > m * 1.5 && v > m / 1.5 || (l.push(p), h > m || e === a[c]))
            break;
        }
        f = [];
      }
    }
  }
  process.env.NODE_ENV !== "production" && o >= i && te("Exceed safe limit.");
  for (var S = ct(k(l, function(C) {
    return ct(C, function(x) {
      return x.value >= n[0] && x.value <= n[1] && !x.notAdd;
    });
  }), function(C) {
    return C.length > 0;
  }), b = [], w = S.length - 1, c = 0; c < S.length; ++c)
    for (var T = S[c], E = 0; E < T.length; ++E)
      b.push({
        value: T[E].value,
        level: w - c
      });
  b.sort(function(C, x) {
    return C.value - x.value;
  });
  for (var M = [], c = 0; c < b.length; ++c)
    (c === 0 || b[c].value !== b[c - 1].value) && M.push(b[c]);
  return M;
}
Re.registerClass(uy);
var Kc = Re.prototype, Si = Gi.prototype, xD = Ft, OD = Math.floor, PD = Math.ceil, Sa = Math.pow, se = Math.log, tf = (
  /** @class */
  function(e) {
    qt(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.type = "log", r.base = 10, r._originalScale = new Gi(), r._interval = 0, r;
    }
    return t.prototype.getTicks = function(r) {
      var n = this._originalScale, i = this._extent, a = n.getExtent(), o = Si.getTicks.call(this, r);
      return k(o, function(s) {
        var u = s.value, l = Ft(Sa(this.base, u));
        return l = u === i[0] && this._fixMin ? wa(l, a[0]) : l, l = u === i[1] && this._fixMax ? wa(l, a[1]) : l, {
          value: l
        };
      }, this);
    }, t.prototype.setExtent = function(r, n) {
      var i = se(this.base);
      r = se(Math.max(0, r)) / i, n = se(Math.max(0, n)) / i, Si.setExtent.call(this, r, n);
    }, t.prototype.getExtent = function() {
      var r = this.base, n = Kc.getExtent.call(this);
      n[0] = Sa(r, n[0]), n[1] = Sa(r, n[1]);
      var i = this._originalScale, a = i.getExtent();
      return this._fixMin && (n[0] = wa(n[0], a[0])), this._fixMax && (n[1] = wa(n[1], a[1])), n;
    }, t.prototype.unionExtent = function(r) {
      this._originalScale.unionExtent(r);
      var n = this.base;
      r[0] = se(r[0]) / se(n), r[1] = se(r[1]) / se(n), Kc.unionExtent.call(this, r);
    }, t.prototype.unionExtentFromData = function(r, n) {
      this.unionExtent(r.getApproximateExtent(n));
    }, t.prototype.calcNiceTicks = function(r) {
      r = r || 10;
      var n = this._extent, i = n[1] - n[0];
      if (!(i === 1 / 0 || i <= 0)) {
        var a = Md(i), o = r / i * a;
        for (o <= 0.5 && (a *= 10); !isNaN(a) && Math.abs(a) < 1 && Math.abs(a) > 0; )
          a *= 10;
        var s = [Ft(PD(n[0] / a) * a), Ft(OD(n[1] / a) * a)];
        this._interval = a, this._niceExtent = s;
      }
    }, t.prototype.calcNiceExtent = function(r) {
      Si.calcNiceExtent.call(this, r), this._fixMin = r.fixMin, this._fixMax = r.fixMax;
    }, t.prototype.parse = function(r) {
      return r;
    }, t.prototype.contain = function(r) {
      return r = se(r) / se(this.base), Wo(r, this._extent);
    }, t.prototype.normalize = function(r) {
      return r = se(r) / se(this.base), Yo(r, this._extent);
    }, t.prototype.scale = function(r) {
      return r = qo(r, this._extent), Sa(this.base, r);
    }, t.type = "log", t;
  }(Re)
), ly = tf.prototype;
ly.getMinorTicks = Si.getMinorTicks;
ly.getLabel = Si.getLabel;
function wa(e, t) {
  return xD(e, De(t));
}
Re.registerClass(tf);
var RD = (
  /** @class */
  function() {
    function e(t, r, n) {
      this._prepareParams(t, r, n);
    }
    return e.prototype._prepareParams = function(t, r, n) {
      n[1] < n[0] && (n = [NaN, NaN]), this._dataMin = n[0], this._dataMax = n[1];
      var i = this._isOrdinal = t.type === "ordinal";
      this._needCrossZero = t.type === "interval" && r.getNeedCrossZero && r.getNeedCrossZero();
      var a = r.get("min", !0);
      a == null && (a = r.get("startValue", !0));
      var o = this._modelMinRaw = a;
      X(o) ? this._modelMinNum = ba(t, o({
        min: n[0],
        max: n[1]
      })) : o !== "dataMin" && (this._modelMinNum = ba(t, o));
      var s = this._modelMaxRaw = r.get("max", !0);
      if (X(s) ? this._modelMaxNum = ba(t, s({
        min: n[0],
        max: n[1]
      })) : s !== "dataMax" && (this._modelMaxNum = ba(t, s)), i)
        this._axisDataLen = r.getCategories().length;
      else {
        var u = r.get("boundaryGap"), l = L(u) ? u : [u || 0, u || 0];
        typeof l[0] == "boolean" || typeof l[1] == "boolean" ? (process.env.NODE_ENV !== "production" && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), this._boundaryGapInner = [0, 0]) : this._boundaryGapInner = [Wr(l[0], 1), Wr(l[1], 1)];
      }
    }, e.prototype.calculate = function() {
      var t = this._isOrdinal, r = this._dataMin, n = this._dataMax, i = this._axisDataLen, a = this._boundaryGapInner, o = t ? null : n - r || Math.abs(r), s = this._modelMinRaw === "dataMin" ? r : this._modelMinNum, u = this._modelMaxRaw === "dataMax" ? n : this._modelMaxNum, l = s != null, f = u != null;
      s == null && (s = t ? i ? 0 : NaN : r - a[0] * o), u == null && (u = t ? i ? i - 1 : NaN : n + a[1] * o), (s == null || !isFinite(s)) && (s = NaN), (u == null || !isFinite(u)) && (u = NaN);
      var h = Tn(s) || Tn(u) || t && !i;
      this._needCrossZero && (s > 0 && u > 0 && !l && (s = 0), s < 0 && u < 0 && !f && (u = 0));
      var v = this._determinedMin, c = this._determinedMax;
      return v != null && (s = v, l = !0), c != null && (u = c, f = !0), {
        min: s,
        max: u,
        minFixed: l,
        maxFixed: f,
        isBlank: h
      };
    }, e.prototype.modifyDataMinMax = function(t, r) {
      process.env.NODE_ENV !== "production" && U(!this.frozen), this[AD[t]] = r;
    }, e.prototype.setDeterminedMinMax = function(t, r) {
      var n = ID[t];
      process.env.NODE_ENV !== "production" && U(!this.frozen && this[n] == null), this[n] = r;
    }, e.prototype.freeze = function() {
      this.frozen = !0;
    }, e;
  }()
), ID = {
  min: "_determinedMin",
  max: "_determinedMax"
}, AD = {
  min: "_dataMin",
  max: "_dataMax"
};
function ND(e, t, r) {
  var n = e.rawExtentInfo;
  return n || (n = new RD(e, t, r), e.rawExtentInfo = n, n);
}
function ba(e, t) {
  return t == null ? null : Tn(t) ? NaN : e.parse(t);
}
function LD(e, t) {
  var r = e.type, n = ND(e, t, e.getExtent()).calculate();
  e.setBlank(n.isBlank);
  var i = n.min, a = n.max, o = t.ecModel;
  if (o && r === "time") {
    var s = iy("bar", o), u = !1;
    if (D(s, function(h) {
      u = u || h.getBaseAxis() === t.axis;
    }), u) {
      var l = ay(s), f = kD(i, a, t, l);
      i = f.min, a = f.max;
    }
  }
  return {
    extent: [i, a],
    // "fix" means "fixed", the value should not be
    // changed in the subsequent steps.
    fixMin: n.minFixed,
    fixMax: n.maxFixed
  };
}
function kD(e, t, r, n) {
  var i = r.axis.getExtent(), a = Math.abs(i[1] - i[0]), o = _D(n, r.axis);
  if (o === void 0)
    return {
      min: e,
      max: t
    };
  var s = 1 / 0;
  D(o, function(c) {
    s = Math.min(c.offset, s);
  });
  var u = -1 / 0;
  D(o, function(c) {
    u = Math.max(c.offset + c.width, u);
  }), s = Math.abs(s), u = Math.abs(u);
  var l = s + u, f = t - e, h = 1 - (s + u) / a, v = f / h - f;
  return t += v * (u / l), e -= v * (s / l), {
    min: e,
    max: t
  };
}
function FD(e, t) {
  var r = t, n = LD(e, r), i = n.extent, a = r.get("splitNumber");
  e instanceof tf && (e.base = r.get("logBase"));
  var o = e.type, s = r.get("interval"), u = o === "interval" || o === "time";
  e.setExtent(i[0], i[1]), e.calcNiceExtent({
    splitNumber: a,
    fixMin: n.fixMin,
    fixMax: n.fixMax,
    minInterval: u ? r.get("minInterval") : null,
    maxInterval: u ? r.get("maxInterval") : null
  }), s != null && e.setInterval && e.setInterval(s);
}
function BD(e, t) {
  if (t = t || e.get("type"), t)
    switch (t) {
      case "category":
        return new Ql({
          ordinalMeta: e.getOrdinalMeta ? e.getOrdinalMeta() : e.getCategories(),
          extent: [1 / 0, -1 / 0]
        });
      case "time":
        return new uy({
          locale: e.ecModel.getLocaleModel(),
          useUTC: e.ecModel.get("useUTC")
        });
      default:
        return new (Re.getClass(t) || Gi)();
    }
}
function yC(e) {
  var t = e.scale.getExtent(), r = t[0], n = t[1];
  return !(r > 0 && n > 0 || r < 0 && n < 0);
}
function Pn(e) {
  var t = e.getLabelModel().get("formatter"), r = e.type === "category" ? e.scale.getExtent()[0] : null;
  return e.scale.type === "time" ? /* @__PURE__ */ function(n) {
    return function(i, a) {
      return e.scale.getFormattedLabel(i, a, n);
    };
  }(t) : V(t) ? /* @__PURE__ */ function(n) {
    return function(i) {
      var a = e.scale.getLabel(i), o = n.replace("{value}", a ?? "");
      return o;
    };
  }(t) : X(t) ? /* @__PURE__ */ function(n) {
    return function(i, a) {
      return r != null && (a = i.value - r), n(VD(e, i), a, i.level != null ? {
        level: i.level
      } : null);
    };
  }(t) : function(n) {
    return e.scale.getLabel(n);
  };
}
function VD(e, t) {
  return e.type === "category" ? e.scale.getLabel(t) : t.value;
}
function _C(e) {
  var t = e.model, r = e.scale;
  if (!(!t.get(["axisLabel", "show"]) || r.isBlank())) {
    var n, i, a = r.getExtent();
    r instanceof Ql ? i = r.count() : (n = r.getTicks(), i = n.length);
    var o = e.getLabelModel(), s = Pn(e), u, l = 1;
    i > 40 && (l = Math.ceil(i / 40));
    for (var f = 0; f < i; f += l) {
      var h = n ? n[f] : {
        value: a[0] + f
      }, v = s(h, f), c = o.getTextRect(v), d = zD(c, o.get("rotate") || 0);
      u ? u.union(d) : u = d;
    }
    return u;
  }
}
function zD(e, t) {
  var r = t * Math.PI / 180, n = e.width, i = e.height, a = n * Math.abs(Math.cos(r)) + Math.abs(i * Math.sin(r)), o = n * Math.abs(Math.sin(r)) + Math.abs(i * Math.cos(r)), s = new et(e.x, e.y, a, o);
  return s;
}
function ef(e) {
  var t = e.get("interval");
  return t ?? "auto";
}
function HD(e) {
  return e.type === "category" && ef(e.getLabelModel()) === 0;
}
function GD(e, t) {
  var r = {};
  return D(e.mapDimensionsAll(t), function(n) {
    r[ty(e, n)] = !0;
  }), at(r);
}
function mC(e, t, r) {
  t && D(GD(t, r), function(n) {
    var i = t.getApproximateExtent(n);
    i[0] < e[0] && (e[0] = i[0]), i[1] > e[1] && (e[1] = i[1]);
  });
}
var UD = (
  /** @class */
  function() {
    function e() {
    }
    return e.prototype.getNeedCrossZero = function() {
      var t = this.option;
      return !t.scale;
    }, e.prototype.getCoordSysModel = function() {
    }, e;
  }()
);
function WD(e) {
  return sD(null, e);
}
var YD = {
  isDimensionStacked: Kl,
  enableDataStack: Jg,
  getStackedDimension: ty
};
function qD(e, t) {
  var r = t;
  t instanceof vt || (r = new vt(t));
  var n = BD(r);
  return n.setExtent(e[0], e[1]), FD(n, r), n;
}
function XD(e) {
  pe(e, UD);
}
function $D(e, t) {
  return t = t || {}, zu(e, null, null, t.state !== "normal");
}
const ZD = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createDimensions: KT,
  createList: WD,
  createScale: qD,
  createSymbol: mg,
  createTextStyle: $D,
  dataStack: YD,
  enableHoverEmphasis: Jd,
  getECData: kt,
  getLayoutRect: XS,
  mixinAxisModelCommonMethods: XD
}, Symbol.toStringTag, { value: "Module" }));
var Qc = [], jD = {
  registerPreprocessor: Xl,
  registerProcessor: $l,
  registerPostInit: zg,
  registerPostUpdate: Hg,
  registerUpdateLifecycle: Uo,
  registerAction: $r,
  registerCoordinateSystem: Gg,
  registerLayout: Ug,
  registerVisual: sr,
  registerTransform: Yg,
  registerLoading: jl,
  registerMap: Wg,
  registerImpl: cT,
  PRIORITY: Rg,
  ComponentModel: J,
  ComponentView: ar,
  SeriesModel: Oe,
  ChartView: Ee,
  // TODO Use ComponentModel and SeriesModel instead of Constructor
  registerComponentModel: function(e) {
    J.registerClass(e);
  },
  registerComponentView: function(e) {
    ar.registerClass(e);
  },
  registerSeriesModel: function(e) {
    Oe.registerClass(e);
  },
  registerChartView: function(e) {
    Ee.registerClass(e);
  },
  registerSubTypeDefaulter: function(e, t) {
    J.registerSubTypeDefaulter(e, t);
  },
  registerPainter: function(e, t) {
    Sd(e, t);
  }
};
function fy(e) {
  if (L(e)) {
    D(e, function(t) {
      fy(t);
    });
    return;
  }
  ot(Qc, e) >= 0 || (Qc.push(e), X(e) && (e = {
    install: e
  }), e.install(jD));
}
var KD = 1e-8;
function Jc(e, t) {
  return Math.abs(e - t) < KD;
}
function tv(e, t, r) {
  var n = 0, i = e[0];
  if (!i)
    return !1;
  for (var a = 1; a < e.length; a++) {
    var o = e[a];
    n += Be(i[0], i[1], o[0], o[1], t, r), i = o;
  }
  var s = e[0];
  return (!Jc(i[0], s[0]) || !Jc(i[1], s[1])) && (n += Be(i[0], i[1], s[0], s[1], t, r)), n !== 0;
}
var QD = [];
function eu(e, t) {
  for (var r = 0; r < e.length; r++)
    Ve(e[r], e[r], t);
}
function ev(e, t, r, n) {
  for (var i = 0; i < e.length; i++) {
    var a = e[i];
    n && (a = n.project(a)), a && isFinite(a[0]) && isFinite(a[1]) && (Ke(t, t, a), Qe(r, r, a));
  }
}
function JD(e) {
  for (var t = 0, r = 0, n = 0, i = e.length, a = e[i - 1][0], o = e[i - 1][1], s = 0; s < i; s++) {
    var u = e[s][0], l = e[s][1], f = a * l - u * o;
    t += f, r += (a + u) * f, n += (o + l) * f, a = u, o = l;
  }
  return t ? [r / t / 3, n / t / 3, t] : [e[0][0] || 0, e[0][1] || 0];
}
var hy = (
  /** @class */
  function() {
    function e(t) {
      this.name = t;
    }
    return e.prototype.setCenter = function(t) {
      this._center = t;
    }, e.prototype.getCenter = function() {
      var t = this._center;
      return t || (t = this._center = this.calcCenter()), t;
    }, e;
  }()
), rv = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      this.type = "polygon", this.exterior = t, this.interiors = r;
    }
    return e;
  }()
), nv = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      this.type = "linestring", this.points = t;
    }
    return e;
  }()
), tM = (
  /** @class */
  function(e) {
    qt(t, e);
    function t(r, n, i) {
      var a = e.call(this, r) || this;
      return a.type = "geoJSON", a.geometries = n, a._center = i && [i[0], i[1]], a;
    }
    return t.prototype.calcCenter = function() {
      for (var r = this.geometries, n, i = 0, a = 0; a < r.length; a++) {
        var o = r[a], s = o.exterior, u = s && s.length;
        u > i && (n = o, i = u);
      }
      if (n)
        return JD(n.exterior);
      var l = this.getBoundingRect();
      return [l.x + l.width / 2, l.y + l.height / 2];
    }, t.prototype.getBoundingRect = function(r) {
      var n = this._rect;
      if (n && !r)
        return n;
      var i = [1 / 0, 1 / 0], a = [-1 / 0, -1 / 0], o = this.geometries;
      return D(o, function(s) {
        s.type === "polygon" ? ev(s.exterior, i, a, r) : D(s.points, function(u) {
          ev(u, i, a, r);
        });
      }), isFinite(i[0]) && isFinite(i[1]) && isFinite(a[0]) && isFinite(a[1]) || (i[0] = i[1] = a[0] = a[1] = 0), n = new et(i[0], i[1], a[0] - i[0], a[1] - i[1]), r || (this._rect = n), n;
    }, t.prototype.contain = function(r) {
      var n = this.getBoundingRect(), i = this.geometries;
      if (!n.contain(r[0], r[1]))
        return !1;
      t: for (var a = 0, o = i.length; a < o; a++) {
        var s = i[a];
        if (s.type === "polygon") {
          var u = s.exterior, l = s.interiors;
          if (tv(u, r[0], r[1])) {
            for (var f = 0; f < (l ? l.length : 0); f++)
              if (tv(l[f], r[0], r[1]))
                continue t;
            return !0;
          }
        }
      }
      return !1;
    }, t.prototype.transformTo = function(r, n, i, a) {
      var o = this.getBoundingRect(), s = o.width / o.height;
      i ? a || (a = i / s) : i = s * a;
      for (var u = new et(r, n, i, a), l = o.calculateTransform(u), f = this.geometries, h = 0; h < f.length; h++) {
        var v = f[h];
        v.type === "polygon" ? (eu(v.exterior, l), D(v.interiors, function(c) {
          eu(c, l);
        })) : D(v.points, function(c) {
          eu(c, l);
        });
      }
      o = this._rect, o.copy(u), this._center = [o.x + o.width / 2, o.y + o.height / 2];
    }, t.prototype.cloneShallow = function(r) {
      r == null && (r = this.name);
      var n = new t(r, this.geometries, this._center);
      return n._rect = this._rect, n.transformTo = null, n;
    }, t;
  }(hy)
);
(function(e) {
  qt(t, e);
  function t(r, n) {
    var i = e.call(this, r) || this;
    return i.type = "geoSVG", i._elOnlyForCalculate = n, i;
  }
  return t.prototype.calcCenter = function() {
    for (var r = this._elOnlyForCalculate, n = r.getBoundingRect(), i = [n.x + n.width / 2, n.y + n.height / 2], a = co(QD), o = r; o && !o.isGeoSVGGraphicRoot; )
      yn(a, o.getLocalTransform(), a), o = o.parent;
    return vo(a, a), Ve(i, i, a), i;
  }, t;
})(hy);
function eM(e) {
  if (!e.UTF8Encoding)
    return e;
  var t = e, r = t.UTF8Scale;
  r == null && (r = 1024);
  var n = t.features;
  return D(n, function(i) {
    var a = i.geometry, o = a.encodeOffsets, s = a.coordinates;
    if (o)
      switch (a.type) {
        case "LineString":
          a.coordinates = cy(s, o, r);
          break;
        case "Polygon":
          ru(s, o, r);
          break;
        case "MultiLineString":
          ru(s, o, r);
          break;
        case "MultiPolygon":
          D(s, function(u, l) {
            return ru(u, o[l], r);
          });
      }
  }), t.UTF8Encoding = !1, t;
}
function ru(e, t, r) {
  for (var n = 0; n < e.length; n++)
    e[n] = cy(e[n], t[n], r);
}
function cy(e, t, r) {
  for (var n = [], i = t[0], a = t[1], o = 0; o < e.length; o += 2) {
    var s = e.charCodeAt(o) - 64, u = e.charCodeAt(o + 1) - 64;
    s = s >> 1 ^ -(s & 1), u = u >> 1 ^ -(u & 1), s += i, u += a, i = s, a = u, n.push([s / r, u / r]);
  }
  return n;
}
function iv(e, t) {
  return e = eM(e), k(ct(e.features, function(r) {
    return r.geometry && r.properties && r.geometry.coordinates.length > 0;
  }), function(r) {
    var n = r.properties, i = r.geometry, a = [];
    switch (i.type) {
      case "Polygon":
        var o = i.coordinates;
        a.push(new rv(o[0], o.slice(1)));
        break;
      case "MultiPolygon":
        D(i.coordinates, function(u) {
          u[0] && a.push(new rv(u[0], u.slice(1)));
        });
        break;
      case "LineString":
        a.push(new nv([i.coordinates]));
        break;
      case "MultiLineString":
        a.push(new nv(i.coordinates));
    }
    var s = new tM(n[t || "name"], a, n.cp);
    return s.properties = n, s;
  });
}
const rM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MAX_SAFE_INTEGER: $_,
  asc: W_,
  getPercentWithPrecision: Y_,
  getPixelPrecision: Dd,
  getPrecision: De,
  getPrecisionSafe: Td,
  isNumeric: yl,
  isRadianAroundZero: j_,
  linearMap: Ou,
  nice: gl,
  numericToNumber: Ei,
  parseDate: ie,
  quantile: Q_,
  quantity: Md,
  quantityExponent: ki,
  reformIntervals: J_,
  remRadian: Z_,
  round: Ft
}, Symbol.toStringTag, { value: "Module" })), nM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  format: No,
  parse: ie
}, Symbol.toStringTag, { value: "Module" })), iM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arc: Hi,
  BezierCurve: Po,
  BoundingRect: et,
  Circle: Vi,
  CompoundPath: op,
  Ellipse: Mo,
  Group: Xr,
  Image: or,
  IncrementalDisplayable: fp,
  Line: zi,
  LinearGradient: up,
  Polygon: xo,
  Polyline: Oo,
  RadialGradient: lp,
  Rect: ve,
  Ring: Eo,
  Sector: Co,
  Text: nr,
  clipPointsByRect: Sp,
  clipRectByRect: wp,
  createIcon: bp,
  extendPath: dp,
  extendShape: vp,
  getShapeClass: pp,
  getTransform: _p,
  initProps: hp,
  makeImage: Ml,
  makePath: Ro,
  mergePath: yp,
  registerShape: ae,
  resizePath: Cl,
  updateProps: Dl
}, Symbol.toStringTag, { value: "Module" })), aM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addCommas: Al,
  capitalFirst: WS,
  encodeHTML: At,
  formatTime: US,
  formatTpl: Bp,
  getTextRect: HS,
  getTooltipMarker: Vp,
  normalizeCssArray: Fp,
  toCamelCase: GS,
  truncateText: xm
}, Symbol.toStringTag, { value: "Module" })), oM = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  bind: wt,
  clone: j,
  curry: xn,
  defaults: ht,
  each: D,
  extend: A,
  filter: ct,
  indexOf: ot,
  inherits: sl,
  isArray: L,
  isFunction: X,
  isObject: F,
  isString: V,
  map: k,
  merge: ut,
  reduce: xe
}, Symbol.toStringTag, { value: "Module" }));
var Ai = Pt();
function vy(e, t) {
  var r = k(t, function(n) {
    return e.scale.parse(n);
  });
  return e.type === "time" && r.length > 0 && (r.sort(), r.unshift(r[0]), r.push(r[r.length - 1])), r;
}
function sM(e) {
  var t = e.getLabelModel().get("customValues");
  if (t) {
    var r = Pn(e), n = e.scale.getExtent(), i = vy(e, t), a = ct(i, function(o) {
      return o >= n[0] && o <= n[1];
    });
    return {
      labels: k(a, function(o) {
        var s = {
          value: o
        };
        return {
          formattedLabel: r(s),
          rawLabel: e.scale.getLabel(s),
          tickValue: o
        };
      })
    };
  }
  return e.type === "category" ? lM(e) : hM(e);
}
function uM(e, t) {
  var r = e.getTickModel().get("customValues");
  if (r) {
    var n = e.scale.getExtent(), i = vy(e, r);
    return {
      ticks: ct(i, function(a) {
        return a >= n[0] && a <= n[1];
      })
    };
  }
  return e.type === "category" ? fM(e, t) : {
    ticks: k(e.scale.getTicks(), function(a) {
      return a.value;
    })
  };
}
function lM(e) {
  var t = e.getLabelModel(), r = dy(e, t);
  return !t.get("show") || e.scale.isBlank() ? {
    labels: [],
    labelCategoryInterval: r.labelCategoryInterval
  } : r;
}
function dy(e, t) {
  var r = py(e, "labels"), n = ef(t), i = gy(r, n);
  if (i)
    return i;
  var a, o;
  return X(n) ? a = my(e, n) : (o = n === "auto" ? cM(e) : n, a = _y(e, o)), yy(r, n, {
    labels: a,
    labelCategoryInterval: o
  });
}
function fM(e, t) {
  var r = py(e, "ticks"), n = ef(t), i = gy(r, n);
  if (i)
    return i;
  var a, o;
  if ((!t.get("show") || e.scale.isBlank()) && (a = []), X(n))
    a = my(e, n, !0);
  else if (n === "auto") {
    var s = dy(e, e.getLabelModel());
    o = s.labelCategoryInterval, a = k(s.labels, function(u) {
      return u.tickValue;
    });
  } else
    o = n, a = _y(e, o, !0);
  return yy(r, n, {
    ticks: a,
    tickCategoryInterval: o
  });
}
function hM(e) {
  var t = e.scale.getTicks(), r = Pn(e);
  return {
    labels: k(t, function(n, i) {
      return {
        level: n.level,
        formattedLabel: r(n, i),
        rawLabel: e.scale.getLabel(n),
        tickValue: n.value
      };
    })
  };
}
function py(e, t) {
  return Ai(e)[t] || (Ai(e)[t] = []);
}
function gy(e, t) {
  for (var r = 0; r < e.length; r++)
    if (e[r].key === t)
      return e[r].value;
}
function yy(e, t, r) {
  return e.push({
    key: t,
    value: r
  }), r;
}
function cM(e) {
  var t = Ai(e).autoInterval;
  return t ?? (Ai(e).autoInterval = e.calculateCategoryInterval());
}
function vM(e) {
  var t = dM(e), r = Pn(e), n = (t.axisRotate - t.labelRotate) / 180 * Math.PI, i = e.scale, a = i.getExtent(), o = i.count();
  if (a[1] - a[0] < 1)
    return 0;
  var s = 1;
  o > 40 && (s = Math.max(1, Math.floor(o / 40)));
  for (var u = a[0], l = e.dataToCoord(u + 1) - e.dataToCoord(u), f = Math.abs(l * Math.cos(n)), h = Math.abs(l * Math.sin(n)), v = 0, c = 0; u <= a[1]; u += s) {
    var d = 0, y = 0, p = yd(r({
      value: u
    }), t.font, "center", "top");
    d = p.width * 1.3, y = p.height * 1.3, v = Math.max(v, d, 7), c = Math.max(c, y, 7);
  }
  var g = v / f, _ = c / h;
  isNaN(g) && (g = 1 / 0), isNaN(_) && (_ = 1 / 0);
  var m = Math.max(0, Math.floor(Math.min(g, _))), S = Ai(e.model), b = e.getExtent(), w = S.lastAutoInterval, T = S.lastTickCount;
  return w != null && T != null && Math.abs(w - m) <= 1 && Math.abs(T - o) <= 1 && w > m && S.axisExtent0 === b[0] && S.axisExtent1 === b[1] ? m = w : (S.lastTickCount = o, S.lastAutoInterval = m, S.axisExtent0 = b[0], S.axisExtent1 = b[1]), m;
}
function dM(e) {
  var t = e.getLabelModel();
  return {
    axisRotate: e.getRotate ? e.getRotate() : e.isHorizontal && !e.isHorizontal() ? 90 : 0,
    labelRotate: t.get("rotate") || 0,
    font: t.getFont()
  };
}
function _y(e, t, r) {
  var n = Pn(e), i = e.scale, a = i.getExtent(), o = e.getLabelModel(), s = [], u = Math.max((t || 0) + 1, 1), l = a[0], f = i.count();
  l !== 0 && u > 1 && f / u > 2 && (l = Math.round(Math.ceil(l / u) * u));
  var h = HD(e), v = o.get("showMinLabel") || h, c = o.get("showMaxLabel") || h;
  v && l !== a[0] && y(a[0]);
  for (var d = l; d <= a[1]; d += u)
    y(d);
  c && d - u !== a[1] && y(a[1]);
  function y(p) {
    var g = {
      value: p
    };
    s.push(r ? p : {
      formattedLabel: n(g),
      rawLabel: i.getLabel(g),
      tickValue: p
    });
  }
  return s;
}
function my(e, t, r) {
  var n = e.scale, i = Pn(e), a = [];
  return D(n.getTicks(), function(o) {
    var s = n.getLabel(o), u = o.value;
    t(o.value, s) && a.push(r ? u : {
      formattedLabel: i(o),
      rawLabel: s,
      tickValue: u
    });
  }), a;
}
var av = [0, 1], pM = (
  /** @class */
  function() {
    function e(t, r, n) {
      this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = r, this._extent = n || [0, 0];
    }
    return e.prototype.contain = function(t) {
      var r = this._extent, n = Math.min(r[0], r[1]), i = Math.max(r[0], r[1]);
      return t >= n && t <= i;
    }, e.prototype.containData = function(t) {
      return this.scale.contain(t);
    }, e.prototype.getExtent = function() {
      return this._extent.slice();
    }, e.prototype.getPixelPrecision = function(t) {
      return Dd(t || this.scale.getExtent(), this._extent);
    }, e.prototype.setExtent = function(t, r) {
      var n = this._extent;
      n[0] = t, n[1] = r;
    }, e.prototype.dataToCoord = function(t, r) {
      var n = this._extent, i = this.scale;
      return t = i.normalize(t), this.onBand && i.type === "ordinal" && (n = n.slice(), ov(n, i.count())), Ou(t, av, n, r);
    }, e.prototype.coordToData = function(t, r) {
      var n = this._extent, i = this.scale;
      this.onBand && i.type === "ordinal" && (n = n.slice(), ov(n, i.count()));
      var a = Ou(t, n, av, r);
      return this.scale.scale(a);
    }, e.prototype.pointToData = function(t, r) {
    }, e.prototype.getTicksCoords = function(t) {
      t = t || {};
      var r = t.tickModel || this.getTickModel(), n = uM(this, r), i = n.ticks, a = k(i, function(s) {
        return {
          coord: this.dataToCoord(this.scale.type === "ordinal" ? this.scale.getRawOrdinalNumber(s) : s),
          tickValue: s
        };
      }, this), o = r.get("alignWithLabel");
      return gM(this, a, o, t.clamp), a;
    }, e.prototype.getMinorTicksCoords = function() {
      if (this.scale.type === "ordinal")
        return [];
      var t = this.model.getModel("minorTick"), r = t.get("splitNumber");
      r > 0 && r < 100 || (r = 5);
      var n = this.scale.getMinorTicks(r), i = k(n, function(a) {
        return k(a, function(o) {
          return {
            coord: this.dataToCoord(o),
            tickValue: o
          };
        }, this);
      }, this);
      return i;
    }, e.prototype.getViewLabels = function() {
      return sM(this).labels;
    }, e.prototype.getLabelModel = function() {
      return this.model.getModel("axisLabel");
    }, e.prototype.getTickModel = function() {
      return this.model.getModel("axisTick");
    }, e.prototype.getBandWidth = function() {
      var t = this._extent, r = this.scale.getExtent(), n = r[1] - r[0] + (this.onBand ? 1 : 0);
      n === 0 && (n = 1);
      var i = Math.abs(t[1] - t[0]);
      return Math.abs(i) / n;
    }, e.prototype.calculateCategoryInterval = function() {
      return vM(this);
    }, e;
  }()
);
function ov(e, t) {
  var r = e[1] - e[0], n = t, i = r / n / 2;
  e[0] += i, e[1] -= i;
}
function gM(e, t, r, n) {
  var i = t.length;
  if (!e.onBand || r || !i)
    return;
  var a = e.getExtent(), o, s;
  if (i === 1)
    t[0].coord = a[0], o = t[1] = {
      coord: a[1],
      tickValue: t[0].tickValue
    };
  else {
    var u = t[i - 1].tickValue - t[0].tickValue, l = (t[i - 1].coord - t[0].coord) / u;
    D(t, function(c) {
      c.coord -= l / 2;
    });
    var f = e.scale.getExtent();
    s = 1 + f[1] - t[i - 1].tickValue, o = {
      coord: t[i - 1].coord + l * s,
      tickValue: f[1] + 1
    }, t.push(o);
  }
  var h = a[0] > a[1];
  v(t[0].coord, a[0]) && (n ? t[0].coord = a[0] : t.shift()), n && v(a[0], t[0].coord) && t.unshift({
    coord: a[0]
  }), v(a[1], o.coord) && (n ? o.coord = a[1] : t.pop()), n && v(o.coord, a[1]) && t.push({
    coord: a[1]
  });
  function v(c, d) {
    return c = Ft(c), d = Ft(d), h ? c > d : c < d;
  }
}
function yM(e) {
  var t = J.extend(e);
  return J.registerClass(t), t;
}
function _M(e) {
  var t = ar.extend(e);
  return ar.registerClass(t), t;
}
function mM(e) {
  var t = Oe.extend(e);
  return Oe.registerClass(t), t;
}
function SM(e) {
  var t = Ee.extend(e);
  return Ee.registerClass(t), t;
}
function SC(e) {
  for (var t = [], r = 0; r < e.length; r++) {
    var n = e[r];
    if (!n.defaultAttr.ignore) {
      var i = n.label, a = i.getComputedTransform(), o = i.getBoundingRect(), s = !a || a[1] < 1e-5 && a[2] < 1e-5, u = i.style.margin || 0, l = o.clone();
      l.applyTransform(a), l.x -= u / 2, l.y -= u / 2, l.width += u, l.height += u;
      var f = s ? new Ya(o, a) : null;
      t.push({
        label: i,
        labelLine: n.labelLine,
        rect: l,
        localRect: o,
        obb: f,
        priority: n.priority,
        defaultAttr: n.defaultAttr,
        layoutOption: n.computedLayoutOption,
        axisAligned: s,
        transform: a
      });
    }
  }
  return t;
}
function wM(e, t, r, n, i, a) {
  var o = e.length;
  if (o < 2)
    return;
  e.sort(function(w, T) {
    return w.rect[t] - T.rect[t];
  });
  for (var s = 0, u, l = !1, f = 0; f < o; f++) {
    var h = e[f], v = h.rect;
    u = v[t] - s, u < 0 && (v[t] -= u, h.label[t] -= u, l = !0), s = v[t] + v[r];
  }
  var c = e[0], d = e[o - 1], y, p;
  g(), y < 0 && S(-y, 0.8), p < 0 && S(p, 0.8), g(), _(y, p, 1), _(p, y, -1), g(), y < 0 && b(-y), p < 0 && b(p);
  function g() {
    y = c.rect[t] - n, p = i - d.rect[t] - d.rect[r];
  }
  function _(w, T, E) {
    if (w < 0) {
      var M = Math.min(T, -w);
      if (M > 0) {
        m(M * E, 0, o);
        var C = M + w;
        C < 0 && S(-C * E, 1);
      } else
        S(-w * E, 1);
    }
  }
  function m(w, T, E) {
    w !== 0 && (l = !0);
    for (var M = T; M < E; M++) {
      var C = e[M], x = C.rect;
      x[t] += w, C.label[t] += w;
    }
  }
  function S(w, T) {
    for (var E = [], M = 0, C = 1; C < o; C++) {
      var x = e[C - 1].rect, O = Math.max(e[C].rect[t] - x[t] - x[r], 0);
      E.push(O), M += O;
    }
    if (M) {
      var R = Math.min(Math.abs(w) / M, T);
      if (w > 0)
        for (var C = 0; C < o - 1; C++) {
          var P = E[C] * R;
          m(P, 0, C + 1);
        }
      else
        for (var C = o - 1; C > 0; C--) {
          var P = E[C - 1] * R;
          m(-P, C, o);
        }
    }
  }
  function b(w) {
    var T = w < 0 ? -1 : 1;
    w = Math.abs(w);
    for (var E = Math.ceil(w / (o - 1)), M = 0; M < o - 1; M++)
      if (T > 0 ? m(E, 0, M + 1) : m(-E, o - M - 1, o), w -= E, w <= 0)
        return;
  }
  return l;
}
function wC(e, t, r, n) {
  return wM(e, "y", "height", t, r);
}
function bC(e) {
  var t = [];
  e.sort(function(y, p) {
    return p.priority - y.priority;
  });
  var r = new et(0, 0, 0, 0);
  function n(y) {
    if (!y.ignore) {
      var p = y.ensureState("emphasis");
      p.ignore == null && (p.ignore = !1);
    }
    y.ignore = !0;
  }
  for (var i = 0; i < e.length; i++) {
    var a = e[i], o = a.axisAligned, s = a.localRect, u = a.transform, l = a.label, f = a.labelLine;
    r.copy(a.rect), r.width -= 0.1, r.height -= 0.1, r.x += 0.05, r.y += 0.05;
    for (var h = a.obb, v = !1, c = 0; c < t.length; c++) {
      var d = t[c];
      if (r.intersect(d.rect)) {
        if (o && d.axisAligned) {
          v = !0;
          break;
        }
        if (d.obb || (d.obb = new Ya(d.localRect, d.transform)), h || (h = new Ya(s, u)), h.intersect(d.obb)) {
          v = !0;
          break;
        }
      }
    }
    v ? (n(l), f && n(f)) : (l.attr("ignore", a.defaultAttr.ignore), f && f.attr("ignore", a.defaultAttr.labelGuideIgnore), t.push(a));
  }
}
const TC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Axis: pM,
  ChartView: Ee,
  ComponentModel: J,
  ComponentView: ar,
  List: Kg,
  Model: vt,
  PRIORITY: Rg,
  SeriesModel: Oe,
  color: a_,
  connect: IT,
  dataTool: VT,
  dependencies: dT,
  disConnect: AT,
  disconnect: Vg,
  dispose: NT,
  env: Z,
  extendChartView: SM,
  extendComponentModel: yM,
  extendComponentView: _M,
  extendSeriesModel: mM,
  format: aM,
  getCoordinateSystemDimensions: kT,
  getInstanceByDom: Yl,
  getInstanceById: LT,
  getMap: BT,
  graphic: iM,
  helper: ZD,
  init: RT,
  innerDrawElementOnCanvas: Tg,
  matrix: A0,
  number: rM,
  parseGeoJSON: iv,
  parseGeoJson: iv,
  registerAction: $r,
  registerCoordinateSystem: Gg,
  registerLayout: Ug,
  registerLoading: jl,
  registerLocale: Ol,
  registerMap: Wg,
  registerPostInit: zg,
  registerPostUpdate: Hg,
  registerPreprocessor: Xl,
  registerProcessor: $l,
  registerTheme: ql,
  registerTransform: Yg,
  registerUpdateLifecycle: Uo,
  registerVisual: sr,
  setCanvasCreator: FT,
  setPlatformAPI: Fv,
  throttle: Hl,
  time: nM,
  use: fy,
  util: oM,
  vector: y0,
  version: vT,
  zrUtil: o0,
  zrender: H_
}, Symbol.toStringTag, { value: "Module" }));
export {
  pM as Axis,
  UD as AxisModelCommonMixin,
  et as BoundingRect,
  Ee as ChartView,
  J as ComponentModel,
  ar as ComponentView,
  op as CompoundPath,
  Gr as DEFAULT_FONT,
  Gy as DEFAULT_FONT_FAMILY,
  Hd as DEFAULT_PATH_STYLE,
  yh as DISPLAY_STATES,
  Ge as Eventful,
  Xr as Group,
  Gi as IntervalScale,
  zi as Line,
  up as LinearGradient,
  HM as MULTIPLE_REFERRING,
  vt as Model,
  $c as OrdinalMeta,
  it as Path,
  Mn as PathProxy,
  tt as Point,
  xo as Polygon,
  Oo as Polyline,
  Fr as REDRAW_BIT,
  ve as Rect,
  Ir as SINGLE_REFERRING,
  ir as SPECIAL_STATES,
  Co as Sector,
  Kg as SeriesData,
  Oe as SeriesModel,
  RM as TEXT_ALIGN_TO_ANCHOR,
  Wa as TSpan,
  aC as TooltipMarkupStyleCreator,
  or as ZRImage,
  nr as ZRText,
  qt as __extends,
  rt as __extends$1,
  MM as _default,
  IM as adjustTextY,
  mp as applyTransform,
  Ve as applyTransform$1,
  W_ as asc,
  U as assert,
  wt as bind,
  tC as box,
  Ku as brush,
  Tg as brushSingle,
  nC as buildTooltipMarkup,
  _d as calculateTextPosition,
  sC as clear,
  j as clone,
  YS as convertToColorString,
  C_ as copyTransform,
  kr as create,
  Cc as createCanvasPattern,
  ld as createCubicEasingFunc,
  tu as createFloat32Array,
  W as createHashMap,
  bp as createIcon,
  uC as createLegacyDataSelectAction,
  oC as createOrUpdate,
  Ld as createOrUpdateImage,
  kc as createOrUpdatePatternFromDecal,
  gC as createProgressiveLayout,
  fg as createRenderPlanner,
  BD as createScaleByModel,
  sD as createSeriesData,
  mg as createSymbol,
  zu as createTextStyle,
  Yu as createTooltipMarkup,
  Et as cubicAt,
  od as cubicRootAt,
  xn as curry,
  Zf as defaultEmphasis,
  ht as defaults,
  de as deprecateLog,
  Gf as devicePixelRatio,
  a0 as disableUserSelect,
  $v as dist,
  D as each,
  TC as echarts,
  Jd as enableHoverEmphasis,
  zM as encodeBase64,
  At as encodeHTML,
  ND as ensureScaleRawExtentInfo,
  Au as enterEmphasis,
  Z as env,
  _C as estimateLabelUnionRect,
  A as extend,
  Za as fetchLayoutMode,
  ct as filter,
  da as findEventDispatcher,
  No as format,
  Bp as formatTpl,
  VD as getAxisRawValue,
  yd as getBoundingRect,
  bc as getCanvasGradient,
  GD as getDataDimensionsOnAxis,
  kt as getECData,
  V_ as getElementSSRData,
  FM as getIdURL,
  jM as getLabelStatesModels,
  zp as getLayoutParams,
  XS as getLayoutRect,
  Sg as getLineDash,
  pl as getLineHeight,
  PM as getMatrixStr,
  iC as getPaddingFromTooltipModel,
  BM as getPathPrecision,
  q_ as getPercentSeats,
  Dd as getPixelPrecision,
  Td as getPrecisionSafe,
  VM as getSRTTransformString,
  LD as getScaleExtent,
  NM as getShadowKey,
  hC as getSize,
  GM as getTooltipRenderMode,
  _p as getTransform,
  $M as graphic,
  pS as groupTransition,
  Ur as hasOwn,
  c1 as hasSeparateFont,
  AM as hasShadow,
  bC as hideOverlap,
  co as identity,
  yC as ifAxisCrossZero,
  dC as increaseInterval,
  ot as indexOf,
  QM as inheritDefaultOption,
  hp as initProps,
  UM as interpolateRawValues,
  vo as invert,
  OM as isAroundZero,
  L as isArray,
  Kl as isDimensionStacked,
  Ti as isDom,
  X as isFunction,
  kM as isGradient,
  fo as isGradientObject,
  s_ as isImagePattern,
  r0 as isImagePatternObject,
  vC as isIntervalOrLogScale,
  l_ as isLinearGradient,
  EM as isMiddleOrRightButtonOnMouseUpDown,
  Pd as isNameSpecified,
  lt as isNumber,
  F as isObject,
  LM as isPattern,
  f_ as isRadialGradient,
  j_ as isRadianAroundZero,
  V as isString,
  cC as isValueNice,
  at as keys,
  Mp as labelInner,
  pC as layout,
  Nu as leaveEmphasis,
  vd as lerp,
  g0 as lerp$1,
  _u as liftColor,
  Ou as linearMap,
  wi as logError,
  Pt as makeInner,
  eC as makeSeriesEncodeForNameBased,
  k as map,
  ut as merge,
  ja as mergeLayoutParam,
  pe as mixin,
  yn as mul,
  FD as niceScaleExtent,
  Ut as noop,
  Gm as normalizeArcAngles,
  xM as normalizeColor,
  Fp as normalizeCssArray,
  le as normalizeEvent,
  fC as normalizeSymbolOffset,
  lC as normalizeSymbolSize,
  rC as normalizeTooltipFormatResult,
  Wt as parse,
  h1 as parseFontSize,
  Wr as parsePercent,
  Ht as parsePercent$1,
  rr as platformApi,
  Rd as preParseFinder,
  SC as prepareLayoutList,
  Qg as prepareSeriesDataSchema,
  yo as queryDataIndex,
  _o as queryReferringComponents,
  $r as registerAction,
  Z_ as remRadian,
  cp as removeElement,
  uS as removeElementWithFadeOut,
  du as requestAnimationFrame,
  su as retrieve,
  q as retrieve2,
  li as retrieve3,
  Qa as retrieveRawValue,
  Kv as rotate,
  Ft as round,
  Lf as round4,
  XM as saveOldStyle,
  ZM as setLabelStyle,
  KM as setLabelValueAnimation,
  WM as setStatesFlag,
  qM as setStatesStylesFromModel,
  _S as setTooltipConfig,
  wC as shiftLayoutOnY,
  HD as shouldShowAllLabels,
  O0 as stop,
  qr as stringify,
  fS as subPixelOptimizeLine,
  ju as symbolBuildProxies,
  Hl as throttle,
  Gt as throwError,
  GS as toCamelCase,
  YM as toggleHoverEmphasis,
  vS as transformDirection,
  CM as transformLocalCoord,
  vu as translate,
  Dp as traverseElements,
  Te as trim,
  mC as unionAxisExtentFromData,
  Dl as updateProps,
  fy as use,
  te as warn,
  JM as windowOpen
};
