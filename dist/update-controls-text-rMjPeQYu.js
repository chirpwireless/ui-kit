import { commonjsGlobal as S, getAugmentedNamespace as he, getDefaultExportFromCjs as ce } from "./_commonjsHelpers-TBt1UqMc.js";
import { immutable as $, browserClient as de, geocoding as fe } from "./geocoding-BcmOeEC5.js";
var V = { exports: {} };
(function(e, t) {
  (function() {
    var i = {};
    e.exports = i, i.simpleFilter = function(n, s) {
      return s.filter(function(a) {
        return i.test(n, a);
      });
    }, i.test = function(n, s) {
      return i.match(n, s) !== null;
    }, i.match = function(n, s, a) {
      a = a || {};
      var r = 0, o = [], l = s.length, u = 0, d = 0, f = a.pre || "", h = a.post || "", v = a.caseSensitive && s || s.toLowerCase(), E;
      n = a.caseSensitive && n || n.toLowerCase();
      for (var x = 0; x < l; x++)
        E = s[x], v[x] === n[r] ? (E = f + E + h, r += 1, d += 1 + d) : d = 0, u += d, o[o.length] = E;
      return r === n.length ? (u = v === n ? 1 / 0 : u, { rendered: o.join(""), score: u }) : null;
    }, i.filter = function(n, s, a) {
      return !s || s.length === 0 ? [] : typeof n != "string" ? s : (a = a || {}, s.reduce(function(r, o, l, u) {
        var d = o;
        a.extract && (d = a.extract(o));
        var f = i.match(n, d, a);
        return f != null && (r[r.length] = {
          string: f.rendered,
          score: f.score,
          index: l,
          original: o
        }), r;
      }, []).sort(function(r, o) {
        var l = o.score - r.score;
        return l || r.index - o.index;
      }));
    };
  })();
})(V);
var pe = V.exports, m = function(e) {
  return this.component = e, this.items = [], this.active = 0, this.wrapper = document.createElement("div"), this.wrapper.className = "suggestions-wrapper", this.element = document.createElement("ul"), this.element.className = "suggestions", this.wrapper.appendChild(this.element), this.selectingListItem = !1, e.el.parentNode.insertBefore(this.wrapper, e.el.nextSibling), this;
};
m.prototype.show = function() {
  this.element.style.display = "block";
};
m.prototype.hide = function() {
  this.element.style.display = "none";
};
m.prototype.add = function(e) {
  this.items.push(e);
};
m.prototype.clear = function() {
  this.items = [], this.active = 0;
};
m.prototype.isEmpty = function() {
  return !this.items.length;
};
m.prototype.isVisible = function() {
  return this.element.style.display === "block";
};
m.prototype.draw = function() {
  if (this.element.innerHTML = "", this.items.length === 0) {
    this.hide();
    return;
  }
  for (var e = 0; e < this.items.length; e++)
    this.drawItem(this.items[e], this.active === e);
  this.show();
};
m.prototype.drawItem = function(e, t) {
  var i = document.createElement("li"), n = document.createElement("a");
  t && (i.className += " active"), n.innerHTML = e.string, i.appendChild(n), this.element.appendChild(i), i.addEventListener("mousedown", (function() {
    this.selectingListItem = !0;
  }).bind(this)), i.addEventListener("mouseup", (function() {
    this.handleMouseUp.call(this, e);
  }).bind(this));
};
m.prototype.handleMouseUp = function(e) {
  this.selectingListItem = !1, this.component.value(e.original), this.clear(), this.draw();
};
m.prototype.move = function(e) {
  this.active = e, this.draw();
};
m.prototype.previous = function() {
  this.move(this.active === 0 ? this.items.length - 1 : this.active - 1);
};
m.prototype.next = function() {
  this.move(this.active === this.items.length - 1 ? 0 : this.active + 1);
};
m.prototype.drawError = function(e) {
  var t = document.createElement("li");
  t.innerHTML = e, this.element.appendChild(t), this.show();
};
var ge = m, me = $, ve = pe, ye = ge, g = function(e, t, i) {
  return i = i || {}, this.options = me({
    minLength: 2,
    limit: 5,
    filter: !0,
    hideOnBlur: !0
  }, i), this.el = e, this.data = t || [], this.list = new ye(this), this.query = "", this.selected = null, this.list.draw(), this.el.addEventListener("keyup", (function(n) {
    this.handleKeyUp(n.keyCode);
  }).bind(this), !1), this.el.addEventListener("keydown", (function(n) {
    this.handleKeyDown(n);
  }).bind(this)), this.el.addEventListener("focus", (function() {
    this.handleFocus();
  }).bind(this)), this.el.addEventListener("blur", (function() {
    this.handleBlur();
  }).bind(this)), this.el.addEventListener("paste", (function(n) {
    this.handlePaste(n);
  }).bind(this)), this.render = this.options.render ? this.options.render.bind(this) : this.render.bind(this), this.getItemValue = this.options.getItemValue ? this.options.getItemValue.bind(this) : this.getItemValue.bind(this), this;
};
g.prototype.handleKeyUp = function(e) {
  e === 40 || e === 38 || e === 27 || e === 13 || e === 9 || this.handleInputChange(this.el.value);
};
g.prototype.handleKeyDown = function(e) {
  switch (e.keyCode) {
    case 13:
    case 9:
      this.list.isEmpty() || (this.list.isVisible() && e.preventDefault(), this.value(this.list.items[this.list.active].original), this.list.hide());
      break;
    case 27:
      this.list.isEmpty() || this.list.hide();
      break;
    case 38:
      this.list.previous();
      break;
    case 40:
      this.list.next();
      break;
  }
};
g.prototype.handleBlur = function() {
  !this.list.selectingListItem && this.options.hideOnBlur && this.list.hide();
};
g.prototype.handlePaste = function(e) {
  if (e.clipboardData)
    this.handleInputChange(e.clipboardData.getData("Text"));
  else {
    var t = this;
    setTimeout(function() {
      t.handleInputChange(e.target.value);
    }, 100);
  }
};
g.prototype.handleInputChange = function(e) {
  if (this.query = this.normalize(e), this.list.clear(), this.query.length < this.options.minLength) {
    this.list.draw();
    return;
  }
  this.getCandidates((function(t) {
    for (var i = 0; i < t.length && (this.list.add(t[i]), i !== this.options.limit - 1); i++)
      ;
    this.list.draw();
  }).bind(this));
};
g.prototype.handleFocus = function() {
  this.list.isEmpty() || this.list.show(), this.list.selectingListItem = !1;
};
g.prototype.update = function(e) {
  this.data = e, this.handleKeyUp();
};
g.prototype.clear = function() {
  this.data = [], this.list.clear();
};
g.prototype.normalize = function(e) {
  return e = e.toLowerCase(), e;
};
g.prototype.match = function(e, t) {
  return e.indexOf(t) > -1;
};
g.prototype.value = function(e) {
  if (this.selected = e, this.el.value = this.getItemValue(e), document.createEvent) {
    var t = document.createEvent("HTMLEvents");
    t.initEvent("change", !0, !1), this.el.dispatchEvent(t);
  } else
    this.el.fireEvent("onchange");
};
g.prototype.getCandidates = function(e) {
  var t = {
    pre: "<strong>",
    post: "</strong>",
    extract: (function(n) {
      return this.getItemValue(n);
    }).bind(this)
  }, i;
  this.options.filter ? (i = ve.filter(this.query, this.data, t), i = i.map((function(n) {
    return {
      original: n.original,
      string: this.render(n.original, n.string)
    };
  }).bind(this))) : i = this.data.map((function(n) {
    var s = this.render(n);
    return {
      original: n,
      string: s
    };
  }).bind(this)), e(i);
};
g.prototype.getItemValue = function(e) {
  return e;
};
g.prototype.render = function(e, t) {
  if (t)
    return t;
  for (var i = e.original ? this.getItemValue(e.original) : this.getItemValue(e), n = this.normalize(i), s = n.lastIndexOf(this.query); s > -1; ) {
    var a = s + this.query.length;
    i = i.slice(0, s) + "<strong>" + i.slice(s, a) + "</strong>" + i.slice(a), s = n.slice(0, s).lastIndexOf(this.query);
  }
  return i;
};
g.prototype.renderError = function(e) {
  this.list.drawError(e);
};
var _e = g, U = _e, be = U;
typeof window < "u" && (window.Suggestions = U);
var Ee = "Expected a function", G = NaN, xe = "[object Symbol]", Le = /^\s+|\s+$/g, we = /^[-+]0x[0-9a-f]+$/i, Se = /^0b[01]+$/i, Ie = /^0o[0-7]+$/i, Ce = parseInt, Oe = typeof S == "object" && S && S.Object === Object && S, ke = typeof self == "object" && self && self.Object === Object && self, Me = Oe || ke || Function("return this")(), Te = Object.prototype, Ae = Te.toString, Re = Math.max, Be = Math.min, M = function() {
  return Me.Date.now();
};
function Pe(e, t, i) {
  var n, s, a, r, o, l, u = 0, d = !1, f = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(Ee);
  t = N(t) || 0, R(i) && (d = !!i.leading, f = "maxWait" in i, a = f ? Re(N(i.maxWait) || 0, t) : a, h = "trailing" in i ? !!i.trailing : h);
  function v(p) {
    var y = n, w = s;
    return n = s = void 0, u = p, r = e.apply(w, y), r;
  }
  function E(p) {
    return u = p, o = setTimeout(I, t), d ? v(p) : r;
  }
  function x(p) {
    var y = p - l, w = p - u, z = t - y;
    return f ? Be(z, a - w) : z;
  }
  function P(p) {
    var y = p - l, w = p - u;
    return l === void 0 || y >= t || y < 0 || f && w >= a;
  }
  function I() {
    var p = M();
    if (P(p))
      return q(p);
    o = setTimeout(I, x(p));
  }
  function q(p) {
    return o = void 0, h && n ? v(p) : (n = s = void 0, r);
  }
  function le() {
    o !== void 0 && clearTimeout(o), u = 0, n = l = s = o = void 0;
  }
  function ue() {
    return o === void 0 ? r : q(M());
  }
  function k() {
    var p = M(), y = P(p);
    if (n = arguments, s = this, l = p, y) {
      if (o === void 0)
        return E(l);
      if (f)
        return o = setTimeout(I, t), v(l);
    }
    return o === void 0 && (o = setTimeout(I, t)), r;
  }
  return k.cancel = le, k.flush = ue, k;
}
function R(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function qe(e) {
  return !!e && typeof e == "object";
}
function ze(e) {
  return typeof e == "symbol" || qe(e) && Ae.call(e) == xe;
}
function N(e) {
  if (typeof e == "number")
    return e;
  if (ze(e))
    return G;
  if (R(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = R(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(Le, "");
  var i = Se.test(e);
  return i || Ie.test(e) ? Ce(e.slice(2), i ? 2 : 8) : we.test(e) ? G : +e;
}
var Ge = Pe, B = { exports: {} }, L = typeof Reflect == "object" ? Reflect : null, D = L && typeof L.apply == "function" ? L.apply : function(t, i, n) {
  return Function.prototype.apply.call(t, i, n);
}, C;
L && typeof L.ownKeys == "function" ? C = L.ownKeys : Object.getOwnPropertySymbols ? C = function(t) {
  return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : C = function(t) {
  return Object.getOwnPropertyNames(t);
};
function Ne(e) {
  console && console.warn && console.warn(e);
}
var H = Number.isNaN || function(t) {
  return t !== t;
};
function c() {
  c.init.call(this);
}
B.exports = c;
B.exports.once = Ke;
c.EventEmitter = c;
c.prototype._events = void 0;
c.prototype._eventsCount = 0;
c.prototype._maxListeners = void 0;
var F = 10;
function O(e) {
  if (typeof e != "function")
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
}
Object.defineProperty(c, "defaultMaxListeners", {
  enumerable: !0,
  get: function() {
    return F;
  },
  set: function(e) {
    if (typeof e != "number" || e < 0 || H(e))
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    F = e;
  }
});
c.init = function() {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) && (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
};
c.prototype.setMaxListeners = function(t) {
  if (typeof t != "number" || t < 0 || H(t))
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
  return this._maxListeners = t, this;
};
function Z(e) {
  return e._maxListeners === void 0 ? c.defaultMaxListeners : e._maxListeners;
}
c.prototype.getMaxListeners = function() {
  return Z(this);
};
c.prototype.emit = function(t) {
  for (var i = [], n = 1; n < arguments.length; n++) i.push(arguments[n]);
  var s = t === "error", a = this._events;
  if (a !== void 0)
    s = s && a.error === void 0;
  else if (!s)
    return !1;
  if (s) {
    var r;
    if (i.length > 0 && (r = i[0]), r instanceof Error)
      throw r;
    var o = new Error("Unhandled error." + (r ? " (" + r.message + ")" : ""));
    throw o.context = r, o;
  }
  var l = a[t];
  if (l === void 0)
    return !1;
  if (typeof l == "function")
    D(l, this, i);
  else
    for (var u = l.length, d = Y(l, u), n = 0; n < u; ++n)
      D(d[n], this, i);
  return !0;
};
function Q(e, t, i, n) {
  var s, a, r;
  if (O(i), a = e._events, a === void 0 ? (a = e._events = /* @__PURE__ */ Object.create(null), e._eventsCount = 0) : (a.newListener !== void 0 && (e.emit(
    "newListener",
    t,
    i.listener ? i.listener : i
  ), a = e._events), r = a[t]), r === void 0)
    r = a[t] = i, ++e._eventsCount;
  else if (typeof r == "function" ? r = a[t] = n ? [i, r] : [r, i] : n ? r.unshift(i) : r.push(i), s = Z(e), s > 0 && r.length > s && !r.warned) {
    r.warned = !0;
    var o = new Error("Possible EventEmitter memory leak detected. " + r.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    o.name = "MaxListenersExceededWarning", o.emitter = e, o.type = t, o.count = r.length, Ne(o);
  }
  return e;
}
c.prototype.addListener = function(t, i) {
  return Q(this, t, i, !1);
};
c.prototype.on = c.prototype.addListener;
c.prototype.prependListener = function(t, i) {
  return Q(this, t, i, !0);
};
function De() {
  if (!this.fired)
    return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length === 0 ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function W(e, t, i) {
  var n = { fired: !1, wrapFn: void 0, target: e, type: t, listener: i }, s = De.bind(n);
  return s.listener = i, n.wrapFn = s, s;
}
c.prototype.once = function(t, i) {
  return O(i), this.on(t, W(this, t, i)), this;
};
c.prototype.prependOnceListener = function(t, i) {
  return O(i), this.prependListener(t, W(this, t, i)), this;
};
c.prototype.removeListener = function(t, i) {
  var n, s, a, r, o;
  if (O(i), s = this._events, s === void 0)
    return this;
  if (n = s[t], n === void 0)
    return this;
  if (n === i || n.listener === i)
    --this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : (delete s[t], s.removeListener && this.emit("removeListener", t, n.listener || i));
  else if (typeof n != "function") {
    for (a = -1, r = n.length - 1; r >= 0; r--)
      if (n[r] === i || n[r].listener === i) {
        o = n[r].listener, a = r;
        break;
      }
    if (a < 0)
      return this;
    a === 0 ? n.shift() : Fe(n, a), n.length === 1 && (s[t] = n[0]), s.removeListener !== void 0 && this.emit("removeListener", t, o || i);
  }
  return this;
};
c.prototype.off = c.prototype.removeListener;
c.prototype.removeAllListeners = function(t) {
  var i, n, s;
  if (n = this._events, n === void 0)
    return this;
  if (n.removeListener === void 0)
    return arguments.length === 0 ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : n[t] !== void 0 && (--this._eventsCount === 0 ? this._events = /* @__PURE__ */ Object.create(null) : delete n[t]), this;
  if (arguments.length === 0) {
    var a = Object.keys(n), r;
    for (s = 0; s < a.length; ++s)
      r = a[s], r !== "removeListener" && this.removeAllListeners(r);
    return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
  }
  if (i = n[t], typeof i == "function")
    this.removeListener(t, i);
  else if (i !== void 0)
    for (s = i.length - 1; s >= 0; s--)
      this.removeListener(t, i[s]);
  return this;
};
function X(e, t, i) {
  var n = e._events;
  if (n === void 0)
    return [];
  var s = n[t];
  return s === void 0 ? [] : typeof s == "function" ? i ? [s.listener || s] : [s] : i ? je(s) : Y(s, s.length);
}
c.prototype.listeners = function(t) {
  return X(this, t, !0);
};
c.prototype.rawListeners = function(t) {
  return X(this, t, !1);
};
c.listenerCount = function(e, t) {
  return typeof e.listenerCount == "function" ? e.listenerCount(t) : J.call(e, t);
};
c.prototype.listenerCount = J;
function J(e) {
  var t = this._events;
  if (t !== void 0) {
    var i = t[e];
    if (typeof i == "function")
      return 1;
    if (i !== void 0)
      return i.length;
  }
  return 0;
}
c.prototype.eventNames = function() {
  return this._eventsCount > 0 ? C(this._events) : [];
};
function Y(e, t) {
  for (var i = new Array(t), n = 0; n < t; ++n)
    i[n] = e[n];
  return i;
}
function Fe(e, t) {
  for (; t + 1 < e.length; t++)
    e[t] = e[t + 1];
  e.pop();
}
function je(e) {
  for (var t = new Array(e.length), i = 0; i < t.length; ++i)
    t[i] = e[i].listener || e[i];
  return t;
}
function Ke(e, t) {
  return new Promise(function(i, n) {
    function s(r) {
      e.removeListener(t, a), n(r);
    }
    function a() {
      typeof e.removeListener == "function" && e.removeListener("error", s), i([].slice.call(arguments));
    }
    ee(e, t, a, { once: !0 }), t !== "error" && $e(e, s, { once: !0 });
  });
}
function $e(e, t, i) {
  typeof e.on == "function" && ee(e, "error", t, i);
}
function ee(e, t, i, n) {
  if (typeof e.on == "function")
    n.once ? e.once(t, i) : e.on(t, i);
  else if (typeof e.addEventListener == "function")
    e.addEventListener(t, function s(a) {
      n.once && e.removeEventListener(t, s), i(a);
    });
  else
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
}
var Ve = B.exports, Ue = {
  fr: {
    name: "France",
    bbox: [[-4.59235, 41.380007], [9.560016, 51.148506]]
  },
  us: {
    name: "United States",
    bbox: [[-171.791111, 18.91619], [-66.96466, 71.357764]]
  },
  ru: {
    name: "Russia",
    bbox: [[19.66064, 41.151416], [190.10042, 81.2504]]
  },
  ca: {
    name: "Canada",
    bbox: [[-140.99778, 41.675105], [-52.648099, 83.23324]]
  }
}, He = de, Ze = He;
let Qe = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", te = (e) => crypto.getRandomValues(new Uint8Array(e)), ie = (e, t, i) => {
  let n = (2 << Math.log(e.length - 1) / Math.LN2) - 1, s = -~(1.6 * n * t / e.length);
  return (a = t) => {
    let r = "";
    for (; ; ) {
      let o = i(s), l = s | 0;
      for (; l--; )
        if (r += e[o[l] & n] || "", r.length === a) return r;
    }
  };
}, We = (e, t = 21) => ie(e, t, te), Xe = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, i) => (i &= 63, i < 36 ? t += i.toString(36) : i < 62 ? t += (i - 26).toString(36).toUpperCase() : i > 62 ? t += "-" : t += "_", t), "");
const Je = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  customAlphabet: We,
  customRandom: ie,
  nanoid: Xe,
  random: te,
  urlAlphabet: Qe
}, Symbol.toStringTag, { value: "Module" })), Ye = /* @__PURE__ */ he(Je);
var et = Ye.nanoid;
function ne(e) {
  this.origin = e.origin || "https://api.mapbox.com", this.endpoint = "events/v2", this.access_token = e.accessToken, this.version = "0.3.0", this.pluginSessionID = this.generateSessionID(), this.sessionIncrementer = 0, this.userAgent = this.getUserAgent(), this.options = e, this.send = this.send.bind(this), this.countries = e.countries ? e.countries.split(",") : null, this.types = e.types ? e.types.split(",") : null, this.bbox = e.bbox ? e.bbox : null, this.language = e.language ? e.language.split(",") : null, this.limit = e.limit ? +e.limit : null, this.locale = navigator.language || null, this.enableEventLogging = this.shouldEnableLogging(e), this.eventQueue = new Array(), this.flushInterval = e.flushInterval || 1e3, this.maxQueueSize = e.maxQueueSize || 100, this.timer = this.flushInterval ? setTimeout(this.flush.bind(this), this.flushInterval) : null, this.lastSentInput = "", this.lastSentIndex = 0;
}
ne.prototype = {
  /**
     * Send a search.select event to the mapbox events service
     * This event marks the array index of the item selected by the user out of the array of possible options
     * @private
     * @param {Object} selected the geojson feature selected by the user
     * @param {Object} geocoder a mapbox-gl-geocoder instance
     * @returns {Promise}
     */
  select: function(e, t) {
    var i = this.getEventPayload("search.select", t, { selectedFeature: e });
    if (i && !(i.resultIndex === this.lastSentIndex && i.queryString === this.lastSentInput || i.resultIndex == -1))
      return this.lastSentIndex = i.resultIndex, this.lastSentInput = i.queryString, this.push(i);
  },
  /**
     * Send a search-start event to the mapbox events service
     * This turnstile event marks when a user starts a new search
     * @private
     * @param {Object} geocoder a mapbox-gl-geocoder instance
     * @returns {Promise}
     */
  start: function(e) {
    var t = this.getEventPayload("search.start", e);
    if (t)
      return this.push(t);
  },
  /**
   * Send a search-keyevent event to the mapbox events service
   * This event records each keypress in sequence
   * @private
   * @param {Object} keyEvent the keydown event to log
   * @param {Object} geocoder a mapbox-gl-geocoder instance
   * 
   */
  keyevent: function(e, t) {
    if (e.key && !(e.metaKey || [9, 27, 37, 39, 13, 38, 40].indexOf(e.keyCode) !== -1)) {
      var i = this.getEventPayload("search.keystroke", t, { key: e.key });
      if (i)
        return this.push(i);
    }
  },
  /**
   * Send an event to the events service
   *
   * The event is skipped if the instance is not enabled to send logging events
   *
   * @private
   * @param {Object} payload the http POST body of the event
   * @param {Function} [callback] a callback function to invoke when the send has completed
   * @returns {Promise}
   */
  send: function(e, t) {
    if (!this.enableEventLogging)
      return t ? t() : void 0;
    var i = this.getRequestOptions(e);
    this.request(i, (function(n) {
      if (n) return this.handleError(n, t);
      if (t)
        return t();
    }).bind(this));
  },
  /**
   * Get http request options
   * @private
   * @param {*} payload
   */
  getRequestOptions: function(e) {
    Array.isArray(e) || (e = [e]);
    var t = {
      // events must be sent with POST
      method: "POST",
      host: this.origin,
      path: this.endpoint + "?access_token=" + this.access_token,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(e)
      //events are arrays
    };
    return t;
  },
  /**
   * Get the event payload to send to the events service
   * Most payload properties are shared across all events
   * @private
   * @param {String} event the name of the event to send to the events service. Valid options are 'search.start', 'search.select', 'search.feedback'.
   * @param {Object} geocoder a mapbox-gl-geocoder instance
   * @param {Object} eventArgs Additional arguments needed for certain event types
   * @param {Object} eventArgs.key The key pressed by the user
   * @param {Object} eventArgs.selectedFeature GeoJSON Feature selected by the user
   * @returns {Object} an event payload
   */
  getEventPayload: function(e, t, i = {}) {
    if (e === "search.select" && !i.selectedFeature || e === "search.keystroke" && !i.key)
      return null;
    var n;
    if (!t.options.proximity)
      n = null;
    else if (typeof t.options.proximity == "object")
      n = [t.options.proximity.longitude, t.options.proximity.latitude];
    else if (t.options.proximity === "ip") {
      var s = t._headers ? t._headers["ip-proximity"] : null;
      s && typeof s == "string" ? n = s.split(",").map(parseFloat) : n = [999, 999];
    } else
      n = t.options.proximity;
    var a = t._map ? t._map.getZoom() : void 0, r = {
      event: e,
      version: this.getEventSchemaVersion(e),
      created: +/* @__PURE__ */ new Date(),
      sessionIdentifier: this.getSessionId(),
      country: this.countries,
      userAgent: this.userAgent,
      language: this.language,
      bbox: this.bbox,
      types: this.types,
      endpoint: "mapbox.places",
      autocomplete: t.options.autocomplete,
      fuzzyMatch: t.options.fuzzyMatch,
      proximity: n,
      limit: t.options.limit,
      routing: t.options.routing,
      worldview: t.options.worldview,
      mapZoom: a,
      keyboardLocale: this.locale
    };
    if (e === "search.select" ? r.queryString = t.inputString : e != "search.select" && t._inputEl ? r.queryString = t._inputEl.value : r.queryString = t.inputString, ["search.keystroke", "search.select"].includes(e) && (r.path = "geocoding/v5/mapbox.places"), e === "search.keystroke" && i.key)
      r.lastAction = i.key;
    else if (e === "search.select" && i.selectedFeature) {
      var o = i.selectedFeature, l = this.getSelectedIndex(o, t);
      if (r.resultIndex = l, r.resultPlaceName = o.place_name, r.resultId = o.id, o.properties && (r.resultMapboxId = o.properties.mapbox_id), t._typeahead) {
        var u = t._typeahead.data;
        u && u.length > 0 && (r.suggestionIds = this.getSuggestionIds(u), r.suggestionNames = this.getSuggestionNames(u), r.suggestionTypes = this.getSuggestionTypes(u), r.suggestionSources = this.getSuggestionSources(u));
      }
    }
    return this.validatePayload(r) ? r : null;
  },
  /**
   * Wraps the request function for easier testing
   * Make an http request and invoke a callback
   * @private
   * @param {Object} opts options describing the http request to be made
   * @param {Function} callback the callback to invoke when the http request is completed
   */
  request: function(e, t) {
    var i = new XMLHttpRequest();
    i.onreadystatechange = function() {
      if (this.readyState == 4)
        return this.status == 204 ? t(null) : t(this.statusText);
    }, i.open(e.method, e.host + "/" + e.path, !0);
    for (var n in e.headers) {
      var s = e.headers[n];
      i.setRequestHeader(n, s);
    }
    i.send(e.body);
  },
  /**
   * Handle an error that occurred while making a request
   * @param {Object} err an error instance to log
   * @private
   */
  handleError: function(e, t) {
    if (t) return t(e);
  },
  /**
   * Generate a session ID to be returned with all of the searches made by this geocoder instance
   * ID is random and cannot be tracked across sessions
   * @private
   */
  generateSessionID: function() {
    return et();
  },
  /**
   * Get the a unique session ID for the current plugin session and increment the session counter.
   *
   * @returns {String} The session ID
   */
  getSessionId: function() {
    return this.pluginSessionID + "." + this.sessionIncrementer;
  },
  /**
   * Get a user agent string to send with the request to the events service
   * @private
   */
  getUserAgent: function() {
    return "mapbox-gl-geocoder." + this.version + "." + navigator.userAgent;
  },
  /**
     * Get the 0-based numeric index of the item that the user selected out of the list of options
     * @private
     * @param {Object} selected the geojson feature selected by the user
     * @param {Object} geocoder a Mapbox-GL-Geocoder instance
     * @returns {Number} the index of the selected result
     */
  getSelectedIndex: function(e, t) {
    if (t._typeahead) {
      var i = t._typeahead.data, n = e.id, s = i.map(function(r) {
        return r.id;
      }), a = s.indexOf(n);
      return a;
    }
  },
  getSuggestionIds: function(e) {
    return e.map(function(t) {
      return t.properties ? t.properties.mapbox_id || "" : t.id || "";
    });
  },
  getSuggestionNames: function(e) {
    return e.map(function(t) {
      return t.place_name || "";
    });
  },
  getSuggestionTypes: function(e) {
    return e.map(function(t) {
      return t.place_type && Array.isArray(t.place_type) && t.place_type[0] || "";
    });
  },
  getSuggestionSources: function(e) {
    return e.map(function(t) {
      return t._source || "";
    });
  },
  /**
   * Get the correct schema version for the event
   * @private
   * @param {String} event Name of the event
   * @returns 
   */
  getEventSchemaVersion: function(e) {
    return ["search.keystroke", "search.select"].includes(e) ? "2.2" : "2.0";
  },
  /**
   * Checks if a payload has all the required properties for the event type
   * @private
   * @param {Object} payload 
   * @returns 
   */
  validatePayload: function(e) {
    if (!e || !e.event) return !1;
    var t = ["event", "created", "sessionIdentifier", "queryString"], i = ["event", "created", "sessionIdentifier", "queryString", "lastAction"], n = ["event", "created", "sessionIdentifier", "queryString", "resultIndex", "path", "suggestionIds"], s = e.event;
    return s === "search.start" ? this.objectHasRequiredProps(e, t) : s === "search.keystroke" ? this.objectHasRequiredProps(e, i) : s === "search.select" ? this.objectHasRequiredProps(e, n) : !0;
  },
  /**
   * Checks of an object has all the required properties
   * @private
   * @param {Object} obj 
   * @param {Array<String>} requiredProps 
   * @returns 
   */
  objectHasRequiredProps: function(e, t) {
    return t.every(function(i) {
      return i === "queryString" ? typeof e[i] == "string" && e[i].length > 0 : e[i] !== void 0;
    });
  },
  /**
     * Check whether events should be logged
     * Clients using a localGeocoder or an origin other than mapbox should not have events logged
     * @private
     */
  shouldEnableLogging: function(e) {
    return !(e.enableEventLogging === !1 || e.origin && e.origin !== "https://api.mapbox.com");
  },
  /**
   * Flush out the event queue by sending events to the events service
   * @private
   */
  flush: function() {
    this.eventQueue.length > 0 && (this.send(this.eventQueue), this.eventQueue = new Array()), this.timer && clearTimeout(this.timer), this.flushInterval && (this.timer = setTimeout(this.flush.bind(this), this.flushInterval));
  },
  /**
   * Push event into the pending queue
   * @param {Object} evt the event to send to the events service
   * @param {Boolean} forceFlush indicates that the event queue should be flushed after adding this event regardless of size of the queue
   * @private
   */
  push: function(e, t) {
    this.eventQueue.push(e), (this.eventQueue.length >= this.maxQueueSize || t) && this.flush();
  },
  /**
   * Flush any remaining events from the queue before it is removed
   * @private
   */
  remove: function() {
    this.flush();
  }
};
var tt = ne, it = {
  // list drawn from https://docs.mapbox.com/api/search/#language-coverage
  de: "Suche",
  // german
  it: "Ricerca",
  //italian
  en: "Search",
  // english
  nl: "Zoeken",
  //dutch
  fr: "Chercher",
  //french
  ca: "Cerca",
  //catalan
  he: "לחפש",
  //hebrew
  ja: "サーチ",
  //japanese
  lv: "Meklēt",
  //latvian
  pt: "Procurar",
  //portuguese 
  sr: "Претрага",
  //serbian
  zh: "搜索",
  //chinese-simplified
  cs: "Vyhledávání",
  //czech
  hu: "Keresés",
  //hungarian
  ka: "ძიება",
  // georgian
  nb: "Søke",
  //norwegian
  sk: "Vyhľadávanie",
  //slovak
  th: "ค้นหา",
  //thai
  fi: "Hae",
  //finnish
  is: "Leita",
  //icelandic
  ko: "수색",
  //korean
  pl: "Szukaj",
  //polish
  sl: "Iskanje",
  //slovenian
  fa: "جستجو",
  //persian(aka farsi)
  ru: "Поиск"
  //russian
}, nt = { placeholder: it }, se = { exports: {} };
(function(e) {
  (function(t, i, n) {
    e.exports ? e.exports = n() : t[i] = n();
  })(S, "subtag", function() {
    var t = "", i = /^([a-zA-Z]{2,3})(?:[_-]+([a-zA-Z]{3})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{4})(?=$|[_-]+))?(?:[_-]+([a-zA-Z]{2}|[0-9]{3})(?=$|[_-]+))?/;
    function n(l) {
      return l.match(i) || [];
    }
    function s(l) {
      return n(l).filter(function(u, d) {
        return u && d;
      });
    }
    function a(l) {
      return l = n(l), {
        language: l[1] || t,
        extlang: l[2] || t,
        script: l[3] || t,
        region: l[4] || t
      };
    }
    function r(l, u, d) {
      Object.defineProperty(l, u, {
        value: d,
        enumerable: !0
      });
    }
    function o(l, u, d) {
      function f(h) {
        return n(h)[l] || t;
      }
      r(f, "pattern", u), r(a, d, f);
    }
    return o(1, /^[a-zA-Z]{2,3}$/, "language"), o(2, /^[a-zA-Z]{3}$/, "extlang"), o(3, /^[a-zA-Z]{4}$/, "script"), o(4, /^[a-zA-Z]{2}$|^[0-9]{3}$/, "region"), r(a, "split", s), a;
  });
})(se);
var st = se.exports;
function re() {
}
re.prototype = {
  isSupport: function() {
    return !!window.navigator.geolocation;
  },
  getCurrentPosition: function() {
    const e = {
      enableHighAccuracy: !0
    };
    return new Promise(function(t, i) {
      window.navigator.geolocation.getCurrentPosition(t, i, e);
    });
  }
};
var rt = re;
function ot(e, t) {
  const i = oe(e), n = ["address", "street", "place", "country"];
  var s;
  if (typeof t == "function")
    return t(i);
  const a = n.indexOf(t);
  return a === -1 ? s = n : s = n.slice(a), s.reduce(function(r, o) {
    return i[o] ? (r !== "" && (r = r + ", "), r + i[o]) : r;
  }, "");
}
function oe(e) {
  const t = e.address || "", i = e.text || "", n = e.place_name || "", a = {
    address: n.split(",")[0],
    houseNumber: t,
    street: i,
    placeName: n
  };
  return e.context.forEach(function(r) {
    const o = r.id.split(".")[0];
    a[o] = r.text;
  }), a;
}
const at = /^[ ]*(-?\d{1,3}(\.\d{0,256})?)[, ]+(-?\d{1,3}(\.\d{0,256})?)[ ]*$/;
var lt = {
  transformFeatureToGeolocationText: ot,
  getAddressInfo: oe,
  REVERSE_GEOCODE_COORD_RGX: at
}, ut = be, ht = Ge, b = $, ct = Ve.EventEmitter, j = Ue, T = Ze, A = fe, dt = tt, ft = nt, pt = st, gt = rt, K = lt;
const _ = {
  FORWARD: 0,
  LOCAL: 1,
  REVERSE: 2
};
function mt() {
  var e = document.createElement("div");
  return e.className = "mapboxgl-ctrl-geocoder--powered-by", e.innerHTML = '<a href="https://www.mapbox.com/search-service" target="_blank">Powered by Mapbox</a>', e;
}
function ae(e) {
  this._eventEmitter = new ct(), this.options = b({}, this.options, e), this.inputString = "", this.fresh = !0, this.lastSelected = null, this.geolocation = new gt();
}
function vt(e) {
  return e ? String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") : "";
}
ae.prototype = {
  options: {
    zoom: 16,
    flyTo: !0,
    trackProximity: !0,
    minLength: 2,
    reverseGeocode: !1,
    flipCoordinates: !1,
    limit: 5,
    origin: "https://api.mapbox.com",
    enableEventLogging: !0,
    marker: !0,
    mapboxgl: null,
    collapsed: !1,
    clearAndBlurOnEsc: !1,
    clearOnBlur: !1,
    enableGeolocation: !1,
    addressAccuracy: "street",
    useBrowserFocus: !1,
    getItemValue: function(e) {
      return e.place_name;
    },
    render: function(e) {
      var t = vt(e.place_name).split(",");
      return '<div class="mapboxgl-ctrl-geocoder--suggestion"><div class="mapboxgl-ctrl-geocoder--suggestion-title">' + t[0] + '</div><div class="mapboxgl-ctrl-geocoder--suggestion-address">' + t.splice(1, t.length).join(",") + "</div></div>";
    }
  },
  _headers: {},
  /**
   * Add the geocoder to a container. The container can be either a `mapboxgl.Map`, an `HTMLElement` or a CSS selector string.
   *
   * If the container is a [`mapboxgl.Map`](https://docs.mapbox.com/mapbox-gl-js/api/map/), this function will behave identically to [`Map.addControl(geocoder)`](https://docs.mapbox.com/mapbox-gl-js/api/map/#map#addcontrol).
   * If the container is an instance of [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement), then the geocoder will be appended as a child of that [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).
   * If the container is a [CSS selector string](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), the geocoder will be appended to the element returned from the query.
   *
   * This function will throw an error if the container is none of the above.
   * It will also throw an error if the referenced HTML element cannot be found in the `document.body`.
   *
   * For example, if the HTML body contains the element `<div id='geocoder-container'></div>`, the following script will append the geocoder to `#geocoder-container`:
   *
   * ```javascript
   * var geocoder = new MapboxGeocoder({ accessToken: mapboxgl.accessToken });
   * geocoder.addTo('#geocoder-container');
   * ```
   * @param {String|HTMLElement|mapboxgl.Map} container A reference to the container to which to add the geocoder
   */
  addTo: function(e) {
    function t(i, n) {
      if (!document.body.contains(n))
        throw new Error("Element provided to #addTo() exists, but is not in the DOM");
      const s = i.onAdd();
      n.appendChild(s);
    }
    if (e._controlContainer)
      e.addControl(this);
    else if (e instanceof HTMLElement)
      t(this, e);
    else if (typeof e == "string") {
      const i = document.querySelectorAll(e);
      if (i.length === 0)
        throw new Error("Element ", e, "not found.");
      if (i.length > 1)
        throw new Error("Geocoder can only be added to a single html element");
      t(this, i[0]);
    } else
      throw new Error("Error: addTo must be a mapbox-gl-js map, an html element, or a CSS selector query for a single html element");
  },
  onAdd: function(e) {
    if (e && typeof e != "string" && (this._map = e), this.setLanguage(), this.options.localGeocoderOnly || (this.geocoderService = A(
      T({
        accessToken: this.options.accessToken,
        origin: this.options.origin
      })
    )), this.options.localGeocoderOnly && !this.options.localGeocoder)
      throw new Error("A localGeocoder function must be specified to use localGeocoderOnly mode");
    this.eventManager = new dt(this.options), this._onChange = this._onChange.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onPaste = this._onPaste.bind(this), this._onBlur = this._onBlur.bind(this), this._showButton = this._showButton.bind(this), this._hideButton = this._hideButton.bind(this), this._onQueryResult = this._onQueryResult.bind(this), this.clear = this.clear.bind(this), this._updateProximity = this._updateProximity.bind(this), this._collapse = this._collapse.bind(this), this._unCollapse = this._unCollapse.bind(this), this._clear = this._clear.bind(this), this._clearOnBlur = this._clearOnBlur.bind(this), this._geolocateUser = this._geolocateUser.bind(this), this._onSuggestionItemFocus = this._onSuggestionItemFocus.bind(this), this._onSuggestionItemKeyDown = this._onSuggestionItemKeydown.bind(this);
    var t = this.container = document.createElement("div");
    t.className = "mapboxgl-ctrl-geocoder mapboxgl-ctrl";
    var i = this.createIcon("search", '<path d="M7.4 2.5c-2.7 0-4.9 2.2-4.9 4.9s2.2 4.9 4.9 4.9c1 0 1.8-.2 2.5-.8l3.7 3.7c.2.2.4.3.8.3.7 0 1.1-.4 1.1-1.1 0-.3-.1-.5-.3-.8L11.4 10c.4-.8.8-1.6.8-2.5.1-2.8-2.1-5-4.8-5zm0 1.6c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2-3.3-1.3-3.3-3.1 1.4-3.3 3.3-3.3z"/>');
    this._inputEl = document.createElement("input"), this._inputEl.type = "text", this._inputEl.className = "mapboxgl-ctrl-geocoder--input", this.setPlaceholder(), this.options.collapsed && (this._collapse(), this.container.addEventListener("mouseenter", this._unCollapse), this.container.addEventListener("mouseleave", this._collapse), this._inputEl.addEventListener("focus", this._unCollapse)), (this.options.collapsed || this.options.clearOnBlur) && this._inputEl.addEventListener("blur", this._onBlur), this._inputEl.addEventListener("keydown", ht(this._onKeyDown, 200)), this._inputEl.addEventListener("paste", this._onPaste), this._inputEl.addEventListener("change", this._onChange), this.container.addEventListener("mouseenter", this._showButton), this.container.addEventListener("mouseleave", this._hideButton), this._inputEl.addEventListener("keyup", (function(h) {
      this.eventManager.keyevent(h, this);
    }).bind(this));
    var n = document.createElement("div");
    n.classList.add("mapboxgl-ctrl-geocoder--pin-right"), this._clearEl = document.createElement("button"), this._clearEl.setAttribute("aria-label", "Clear"), this._clearEl.addEventListener("click", this.clear), this._clearEl.className = "mapboxgl-ctrl-geocoder--button";
    var s = this.createIcon("close", '<path d="M3.8 2.5c-.6 0-1.3.7-1.3 1.3 0 .3.2.7.5.8L7.2 9 3 13.2c-.3.3-.5.7-.5 1 0 .6.7 1.3 1.3 1.3.3 0 .7-.2 1-.5L9 10.8l4.2 4.2c.2.3.7.3 1 .3.6 0 1.3-.7 1.3-1.3 0-.3-.2-.7-.3-1l-4.4-4L15 4.6c.3-.2.5-.5.5-.8 0-.7-.7-1.3-1.3-1.3-.3 0-.7.2-1 .3L9 7.1 4.8 2.8c-.3-.1-.7-.3-1-.3z"/>');
    if (this._clearEl.appendChild(s), this._loadingEl = this.createIcon("loading", '<path fill="#333" d="M4.4 4.4l.8.8c2.1-2.1 5.5-2.1 7.6 0l.8-.8c-2.5-2.5-6.7-2.5-9.2 0z"/><path opacity=".1" d="M12.8 12.9c-2.1 2.1-5.5 2.1-7.6 0-2.1-2.1-2.1-5.5 0-7.7l-.8-.8c-2.5 2.5-2.5 6.7 0 9.2s6.6 2.5 9.2 0 2.5-6.6 0-9.2l-.8.8c2.2 2.1 2.2 5.6 0 7.7z"/>'), n.appendChild(this._clearEl), n.appendChild(this._loadingEl), t.appendChild(i), t.appendChild(this._inputEl), this.options.enableGeolocation && this.geolocation.isSupport()) {
      this._geolocateEl = document.createElement("button"), this._geolocateEl.setAttribute("aria-label", "Geolocate"), this._geolocateEl.addEventListener("click", this._geolocateUser), this._geolocateEl.className = "mapboxgl-ctrl-geocoder--button";
      var a = this.createIcon("geolocate", '<path d="M12.999 3.677L2.042 8.269c-.962.403-.747 1.823.29 1.912l5.032.431.431 5.033c.089 1.037 1.509 1.252 1.912.29l4.592-10.957c.345-.822-.477-1.644-1.299-1.299z" fill="#4264fb"/>');
      this._geolocateEl.appendChild(a), n.appendChild(this._geolocateEl), this._showGeolocateButton();
    }
    var r = this._typeahead = new ut(this._inputEl, [], {
      hideOnBlur: !this.options.useBrowserFocus,
      filter: !1,
      minLength: this.options.minLength,
      limit: this.options.limit
    });
    t.insertBefore(n, r.list.wrapper), this.setRenderFunction(this.options.render), r.getItemValue = this.options.getItemValue;
    const o = this._typeahead.handleKeyDown.bind(this._typeahead), l = this._typeahead.handleKeyUp.bind(this._typeahead);
    this._typeahead.handleKeyUp, this.options.useBrowserFocus && (this._typeahead.handleKeyDown = (function(h) {
      if (!(h.keyCode === 9 && !r.list.isEmpty())) {
        if (h.keyCode === 40) {
          this._typeahead.list.active = 0, this._typeahead.list.element.querySelectorAll("li").forEach(function(v) {
            v.classList.remove("active");
          }), this._typeahead.list.element.querySelectorAll("li")[0].classList.add("active"), this._typeahead.list.element.querySelectorAll("li")[0].focus();
          return;
        } else if (h.keyCode === 38) {
          this._typeahead.list.active = r.list.items.length - 1, this._typeahead.list.element.querySelectorAll("li").forEach(function(v) {
            v.classList.remove("active");
          }), this._typeahead.list.element.querySelectorAll("li")[this._typeahead.list.active].classList.add("active"), this._typeahead.list.element.querySelectorAll("li")[this._typeahead.list.active].focus();
          return;
        }
        o(h);
      }
    }).bind(this), this._typeahead.handleKeyUp = function(h) {
      if (h && h.keyCode === 16) {
        h.preventDefault();
        return;
      }
      l(h);
    });
    var u = r.list.draw, d = this._footerNode = mt(), f = this;
    return r.list.draw = function() {
      f.options.useBrowserFocus && r.list.element.querySelectorAll("li").forEach(function(h) {
        h.removeEventListener("focus", f._onSuggestionItemFocus), h.removeEventListener("keydown", f._onSuggestionItemKeyDown);
      }), u.call(this), f.options.useBrowserFocus && r.list.element.querySelectorAll("li").forEach((function(h, v) {
        v === 0 && h.focus(), h.setAttribute("data-index", v), h.tabIndex = 0, h.addEventListener("focus", this._onSuggestionItemFocus), h.addEventListener("keydown", this._onSuggestionItemKeyDown);
      }).bind(f)), d.addEventListener("mousedown", (function() {
        this.selectingListItem = !0;
      }).bind(this)), d.addEventListener("mouseup", (function() {
        this.selectingListItem = !1;
      }).bind(this)), this.element.appendChild(d);
    }, this.mapMarker = null, this._handleMarker = this._handleMarker.bind(this), this._map && (this.options.trackProximity && (this._updateProximity(), this._map.on("moveend", this._updateProximity)), this._mapboxgl = this.options.mapboxgl, !this._mapboxgl && this.options.marker && (console.error("No mapboxgl detected in options. Map markers are disabled. Please set options.mapboxgl."), this.options.marker = !1)), t;
  },
  _onSuggestionItemKeydown(e) {
    const t = e.keyCode;
    if (t !== 9) {
      if (t === 13) {
        e.preventDefault();
        const i = this._typeahead.list.element.querySelector(".active");
        if (i) {
          const n = i.getAttribute("data-index"), s = this._typeahead.list.items[n];
          s && (this._typeahead.value(s.original), this._typeahead.list.hide());
        }
      } else if (t === 38 || t === 40) {
        const i = this._typeahead.list.element.querySelectorAll("li");
        if (i.length > 0) {
          if (t === 38)
            if (this._typeahead.list.active > 0)
              e.preventDefault(), this._typeahead.list.active--;
            else {
              this._typeahead.el.focus();
              return;
            }
          else if (t === 40)
            if (e.preventDefault(), this._typeahead.list.active < i.length - 1)
              this._typeahead.list.active++;
            else
              return;
          i.forEach(function(s) {
            s.classList.remove("active");
          });
          const n = i[this._typeahead.list.active];
          n && (n.classList.add("active"), n.focus());
        }
      }
    }
  },
  _onSuggestionItemFocus(e) {
    this._typeahead.list.active = e.target.getAttribute("data-index"), this._typeahead.list.element.querySelectorAll("li").forEach(function(t) {
      t.classList.remove("active");
    }), e.target.classList.add("active");
  },
  _geolocateUser: function() {
    this._hideGeolocateButton(), this._showLoadingIcon(), this.geolocation.getCurrentPosition().then((function(e) {
      this._hideLoadingIcon();
      const t = {
        geometry: {
          type: "Point",
          coordinates: [e.coords.longitude, e.coords.latitude]
        }
      };
      this._handleMarker(t), this._fly(t), this._typeahead.clear(), this._typeahead.selected = !0, this.lastSelected = JSON.stringify(t), this._showClearButton(), this.fresh = !1;
      const i = {
        limit: 1,
        language: [this.options.language],
        query: t.geometry.coordinates,
        types: ["address"]
      };
      if (this.options.localGeocoderOnly) {
        const n = t.geometry.coordinates[0] + "," + t.geometry.coordinates[1];
        this._setInputValue(n), this._eventEmitter.emit("result", { result: t });
      } else
        this.geocoderService.reverseGeocode(i).send().then((function(n) {
          const s = n.body.features[0];
          if (s) {
            const a = K.transformFeatureToGeolocationText(s, this.options.addressAccuracy);
            this._setInputValue(a), s.user_coordinates = t.geometry.coordinates, this._eventEmitter.emit("result", { result: s });
          } else
            this._eventEmitter.emit("result", { result: { user_coordinates: t.geometry.coordinates } });
        }).bind(this));
    }).bind(this)).catch((function(e) {
      e.code === 1 ? this._renderUserDeniedGeolocationError() : this._renderLocationError(), this._hideLoadingIcon(), this._showGeolocateButton(), this._hideAttribution();
    }).bind(this));
  },
  createIcon: function(e, t) {
    var i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return i.setAttribute("class", "mapboxgl-ctrl-geocoder--icon mapboxgl-ctrl-geocoder--icon-" + e), i.setAttribute("viewBox", "0 0 18 18"), i.setAttribute("xml:space", "preserve"), i.setAttribute("width", 18), i.setAttribute("height", 18), i.innerHTML = t, i;
  },
  onRemove: function() {
    return this.container.parentNode.removeChild(this.container), this.options.trackProximity && this._map && this._map.off("moveend", this._updateProximity), this._removeMarker(), this._map = null, this;
  },
  _setInputValue: function(e) {
    this._inputEl.value = e, setTimeout((function() {
      this._inputEl.focus(), this._inputEl.scrollLeft = 0, this._inputEl.setSelectionRange(0, 0);
    }).bind(this), 1);
  },
  _onPaste: function(e) {
    var t = (e.clipboardData || window.clipboardData).getData("text");
    t.length >= this.options.minLength && this._geocode(t);
  },
  _onKeyDown: function(e) {
    var t = 27, i = 9;
    if (e.keyCode === t && this.options.clearAndBlurOnEsc)
      return this._clear(e), this._inputEl.blur();
    var n = e.target && e.target.shadowRoot ? e.target.shadowRoot.activeElement : e.target, s = n ? n.value : "";
    if (!s)
      return this.fresh = !0, e.keyCode !== i && this.clear(e), this._showGeolocateButton(), this._hideClearButton();
    this._hideGeolocateButton(), !(e.metaKey || [i, t, 37, 39, 13, 38, 40].indexOf(e.keyCode) !== -1) && n.value.length >= this.options.minLength && this._geocode(n.value);
  },
  _showButton: function() {
    this._typeahead.selected && this._showClearButton();
  },
  _hideButton: function() {
    this._typeahead.selected && this._hideClearButton();
  },
  _showClearButton: function() {
    this._clearEl.style.display = "block";
  },
  _hideClearButton: function() {
    this._clearEl.style.display = "none";
  },
  _showGeolocateButton: function() {
    this._geolocateEl && this.geolocation.isSupport() && (this._geolocateEl.style.display = "block");
  },
  _hideGeolocateButton: function() {
    this._geolocateEl && (this._geolocateEl.style.display = "none");
  },
  _showLoadingIcon: function() {
    this._loadingEl.style.display = "block";
  },
  _hideLoadingIcon: function() {
    this._loadingEl.style.display = "none";
  },
  _showAttribution: function() {
    this._footerNode.style.display = "block";
  },
  _hideAttribution: function() {
    this._footerNode.style.display = "none";
  },
  _onBlur: function(e) {
    this.options.clearOnBlur && this._clearOnBlur(e), this.options.collapsed && this._collapse();
  },
  _onChange: function() {
    var e = this._typeahead.selected;
    e && JSON.stringify(e) !== this.lastSelected && (this._hideClearButton(), this.options.flyTo && this._fly(e), this.options.marker && this._mapboxgl && this._handleMarker(e), this._inputEl.focus(), this._inputEl.scrollLeft = 0, this._inputEl.setSelectionRange(0, 0), this.lastSelected = JSON.stringify(e), this._eventEmitter.emit("result", { result: e }), this.eventManager.select(e, this));
  },
  _fly: function(e) {
    var t;
    if (e.properties && j[e.properties.short_code])
      t = b({}, this.options.flyTo), this._map && this._map.fitBounds(j[e.properties.short_code].bbox, t);
    else if (e.bbox) {
      var i = e.bbox;
      t = b({}, this.options.flyTo), this._map && this._map.fitBounds([[i[0], i[1]], [i[2], i[3]]], t);
    } else {
      var n = {
        zoom: this.options.zoom
      };
      t = b({}, n, this.options.flyTo), e.center ? t.center = e.center : e.geometry && e.geometry.type && e.geometry.type === "Point" && e.geometry.coordinates && (t.center = e.geometry.coordinates), this._map && this._map.flyTo(t);
    }
  },
  _requestType: function(e, t) {
    var i;
    return e.localGeocoderOnly ? i = _.LOCAL : e.reverseGeocode && K.REVERSE_GEOCODE_COORD_RGX.test(t) ? i = _.REVERSE : i = _.FORWARD, i;
  },
  _setupConfig: function(e, t) {
    const i = [
      "bbox",
      "limit",
      "proximity",
      "countries",
      "types",
      "language",
      "reverseMode",
      "mode",
      "autocomplete",
      "fuzzyMatch",
      "routing",
      "worldview"
    ], n = /[\s,]+/;
    var s = this, a = i.reduce(function(o, l) {
      if (s.options[l] === void 0 || s.options[l] === null)
        return o;
      ["countries", "types", "language"].indexOf(l) > -1 ? o[l] = s.options[l].split(n) : o[l] = s.options[l];
      const u = typeof s.options[l].longitude == "number" && typeof s.options[l].latitude == "number";
      if (l === "proximity" && u) {
        const d = s.options[l].longitude, f = s.options[l].latitude;
        o[l] = [d, f];
      }
      return o;
    }, {});
    switch (e) {
      case _.REVERSE:
        {
          var r = t.split(n).map(function(o) {
            return parseFloat(o, 10);
          });
          s.options.flipCoordinates || r.reverse(), a.types && a.types[0], a = b(a, { query: r, limit: 1 }), ["proximity", "autocomplete", "fuzzyMatch", "bbox"].forEach(function(o) {
            o in a && delete a[o];
          });
        }
        break;
      case _.FORWARD:
        {
          const o = t.trim();
          /^(-?\d{1,3}(\.\d{0,256})?)[, ]+(-?\d{1,3}(\.\d{0,256})?)?$/.test(o) && (t = t.replace(/,/g, " ")), a = b(a, { query: t });
        }
        break;
    }
    return a.session_token = this.eventManager.getSessionId(), a;
  },
  _geocode: function(e) {
    this.inputString = e, this._showLoadingIcon(), this._eventEmitter.emit("loading", { query: e });
    const t = this._requestType(this.options, e), i = this._setupConfig(t, e);
    var n;
    switch (t) {
      case _.LOCAL:
        n = Promise.resolve();
        break;
      case _.FORWARD:
        n = this.geocoderService.forwardGeocode(i).send();
        break;
      case _.REVERSE:
        n = this.geocoderService.reverseGeocode(i).send();
        break;
    }
    var s = this.options.localGeocoder ? this.options.localGeocoder(e) || [] : [], a = [], r = null;
    return n.catch((function(o) {
      r = o;
    }).bind(this)).then(
      (function(o) {
        this._hideLoadingIcon();
        var l = {};
        return o ? o.statusCode == "200" && (l = o.body, l.request = o.request, l.headers = o.headers, this._headers = o.headers) : l = {
          type: "FeatureCollection",
          features: []
        }, l.config = i, this.fresh && (this.eventManager.start(this), this.fresh = !1), l.features && l.features.length && l.features.map(function(u) {
          u._source = "mapbox";
        }), l.features = l.features ? s.concat(l.features) : s, this.options.externalGeocoder ? (a = this.options.externalGeocoder(e, l.features) || Promise.resolve([]), a.then(function(u) {
          return l.features = l.features ? u.concat(l.features) : u, l;
        }, function() {
          return l;
        })) : l;
      }).bind(this)
    ).then(
      (function(o) {
        if (r)
          throw r;
        this.options.filter && o.features.length && (o.features = o.features.filter(this.options.filter)), o.features.length ? (this._showClearButton(), this._hideGeolocateButton(), this._showAttribution(), this._eventEmitter.emit("results", o), this._typeahead.update(o.features)) : (this._hideClearButton(), this._hideAttribution(), this._typeahead.selected = null, this._renderNoResults(), this._eventEmitter.emit("results", o));
      }).bind(this)
    ).catch(
      (function(o) {
        this._hideLoadingIcon(), this._hideAttribution(), s.length && this.options.localGeocoder || a.length && this.options.externalGeocoder ? (this._showClearButton(), this._hideGeolocateButton(), this._typeahead.update(s)) : (this._hideClearButton(), this._typeahead.selected = null, this._renderError()), this._eventEmitter.emit("results", { features: s }), this._eventEmitter.emit("error", { error: o });
      }).bind(this)
    ), n;
  },
  /**
   * Shared logic for clearing input
   * @param {Event} [ev] the event that triggered the clear, if available
   * @private
   *
   */
  _clear: function(e) {
    e && e.preventDefault(), this._inputEl.value = "", this._typeahead.selected = null, this._typeahead.clear(), this.eventManager.sessionIncrementer++, this._onChange(), this._hideClearButton(), this._showGeolocateButton(), this._removeMarker(), this.lastSelected = null, this._eventEmitter.emit("clear"), this.fresh = !0;
  },
  /**
   * Clear and then focus the input.
   * @param {Event} [ev] the event that triggered the clear, if available
   *
   */
  clear: function(e) {
    this._clear(e), this._inputEl.focus(), this.options.useBrowserFocus && this._typeahead.list.hide();
  },
  /**
   * Clear the input, without refocusing it. Used to implement clearOnBlur
   * constructor option.
   * @param {Event} [ev] the blur event
   * @private
   */
  _clearOnBlur: function(e) {
    var t = this;
    e.relatedTarget && t._clear(e);
  },
  _onQueryResult: function(e) {
    var t = e.body;
    if (t.features.length) {
      var i = t.features[0];
      this._typeahead.selected = i, this._inputEl.value = i.place_name, this._onChange();
    }
  },
  _updateProximity: function() {
    if (!(!this._map || !this.options.trackProximity))
      if (this._map.getZoom() > 9) {
        var e = this._map.getCenter().wrap();
        this.setProximity({ longitude: e.lng, latitude: e.lat }, !1);
      } else
        this.setProximity(null, !1);
  },
  _collapse: function() {
    !this._inputEl.value && this._inputEl !== document.activeElement && this.container.classList.add("mapboxgl-ctrl-geocoder--collapsed");
  },
  _unCollapse: function() {
    this.container.classList.remove("mapboxgl-ctrl-geocoder--collapsed");
  },
  /**
   * Set & query the input
   * @param {string} searchInput location name or other search input
   * @returns {MapboxGeocoder} this
   */
  query: function(e) {
    return this._geocode(e).then(this._onQueryResult), this;
  },
  _renderError: function() {
    var e = "<div class='mapbox-gl-geocoder--error'>There was an error reaching the server</div>";
    this._renderMessage(e);
  },
  _renderLocationError: function() {
    var e = "<div class='mapbox-gl-geocoder--error'>A location error has occurred</div>";
    this._renderMessage(e);
  },
  _renderNoResults: function() {
    var e = "<div class='mapbox-gl-geocoder--error mapbox-gl-geocoder--no-results'>No results found</div>";
    this._renderMessage(e);
  },
  _renderUserDeniedGeolocationError: function() {
    var e = "<div class='mapbox-gl-geocoder--error'>Geolocation permission denied</div>";
    this._renderMessage(e);
  },
  _renderMessage: function(e) {
    this._typeahead.update([]), this._typeahead.selected = null, this._typeahead.clear(), this._typeahead.renderError(e);
  },
  /**
   * Get the text to use as the search bar placeholder
   *
   * If placeholder is provided in options, then use options.placeholder
   * Otherwise, if language is provided in options, then use the localized string of the first language if available
   * Otherwise use the default
   *
   * @returns {String} the value to use as the search bar placeholder
   * @private
   */
  _getPlaceholderText: function() {
    if (this.options.placeholder) return this.options.placeholder;
    if (this.options.language) {
      var e = this.options.language.split(",")[0], t = pt.language(e), i = ft.placeholder[t];
      if (i) return i;
    }
    return "Search";
  },
  /**
   * Set input
   * @param {string} searchInput location name or other search input
   * @param {boolean} [showSuggestions=false] display suggestion on setInput call
   * @returns {MapboxGeocoder} this
   */
  setInput: function(e, t) {
    return t === void 0 && (t = !1), this._inputEl.value = e, this._typeahead.selected = null, this._typeahead.clear(), e.length >= this.options.minLength && (t ? this._geocode(e) : this._onChange()), this;
  },
  /**
   * Set proximity
   * @param {Object|'ip'} proximity The new `options.proximity` value. This is a geographical point given as an object with `latitude` and `longitude` properties or the string 'ip'.
   * @param {Boolean} disableTrackProximity If true, sets `trackProximity` to false. True by default to prevent `trackProximity` from unintentionally overriding an explicitly set proximity value.
   * @returns {MapboxGeocoder} this
   */
  setProximity: function(e, t = !0) {
    return this.options.proximity = e, t && (this.options.trackProximity = !1), this;
  },
  /**
   * Get proximity
   * @returns {Object} The geocoder proximity
   */
  getProximity: function() {
    return this.options.proximity;
  },
  /**
   * Set the render function used in the results dropdown
   * @param {Function} fn The function to use as a render function. This function accepts a single [extended GeoJSON](https://docs.mapbox.com/api/search/geocoding-v5/#geocoding-response-object) object as input and returns a string.
   * @returns {MapboxGeocoder} this
   */
  setRenderFunction: function(e) {
    return e && typeof e == "function" && (this._typeahead.render = e), this;
  },
  /**
   * Get the function used to render the results dropdown
   *
   * @returns {Function} the render function
   */
  getRenderFunction: function() {
    return this._typeahead.render;
  },
  /**
   * Get the language to use in UI elements and when making search requests
   *
   * Look first at the explicitly set options otherwise use the browser's language settings
   * @param {String} language Specify the language to use for response text and query result weighting. Options are IETF language tags comprised of a mandatory ISO 639-1 language code and optionally one or more IETF subtags for country or script. More than one value can also be specified, separated by commas.
   * @returns {MapboxGeocoder} this
   */
  setLanguage: function(e) {
    var t = navigator.language || navigator.userLanguage || navigator.browserLanguage;
    return this.options.language = e || this.options.language || t, this;
  },
  /**
   * Get the language to use in UI elements and when making search requests
   * @returns {String} The language(s) used by the plugin, if any
   */
  getLanguage: function() {
    return this.options.language;
  },
  /**
   * Get the zoom level the map will move to when there is no bounding box on the selected result
   * @returns {Number} the map zoom
   */
  getZoom: function() {
    return this.options.zoom;
  },
  /**
   * Set the zoom level
   * @param {Number} zoom The zoom level that the map should animate to when a `bbox` isn't found in the response. If a `bbox` is found the map will fit to the `bbox`.
   * @returns {MapboxGeocoder} this
   */
  setZoom: function(e) {
    return this.options.zoom = e, this;
  },
  /**
   * Get the parameters used to fly to the selected response, if any
   * @returns {Boolean|Object} The `flyTo` option
   */
  getFlyTo: function() {
    return this.options.flyTo;
  },
  /**
   * Set the flyTo options
   * @param {Boolean|Object} flyTo If false, animating the map to a selected result is disabled. If true, animating the map will use the default animation parameters. If an object, it will be passed as `options` to the map [`flyTo`](https://docs.mapbox.com/mapbox-gl-js/api/#map#flyto) or [`fitBounds`](https://docs.mapbox.com/mapbox-gl-js/api/#map#fitbounds) method providing control over the animation of the transition.
   */
  setFlyTo: function(e) {
    return this.options.flyTo = e, this;
  },
  /**
   * Get the value of the placeholder string
   * @returns {String} The input element's placeholder value
   */
  getPlaceholder: function() {
    return this.options.placeholder;
  },
  /**
   * Set the value of the input element's placeholder
   * @param {String} placeholder the text to use as the input element's placeholder
   * @returns {MapboxGeocoder} this
   */
  setPlaceholder: function(e) {
    return this.options.placeholder = e || this._getPlaceholderText(), this._inputEl.placeholder = this.options.placeholder, this._inputEl.setAttribute("aria-label", this.options.placeholder), this;
  },
  /**
   * Get the bounding box used by the plugin
   * @returns {Array<Number>} the bounding box, if any
   */
  getBbox: function() {
    return this.options.bbox;
  },
  /**
   * Set the bounding box to limit search results to
   * @param {Array<Number>} bbox a bounding box given as an array in the format [minX, minY, maxX, maxY].
   * @returns {MapboxGeocoder} this
   */
  setBbox: function(e) {
    return this.options.bbox = e, this;
  },
  /**
   * Get a list of the countries to limit search results to
   * @returns {String} a comma separated list of countries to limit to, if any
   */
  getCountries: function() {
    return this.options.countries;
  },
  /**
   * Set the countries to limit search results to
   * @param {String} countries a comma separated list of countries to limit to
   * @returns {MapboxGeocoder} this
   */
  setCountries: function(e) {
    return this.options.countries = e, this;
  },
  /**
   * Get a list of the types to limit search results to
   * @returns {String} a comma separated list of types to limit to
   */
  getTypes: function() {
    return this.options.types;
  },
  /**
   * Set the types to limit search results to
   * @param {String} countries a comma separated list of types to limit to
   * @returns {MapboxGeocoder} this
   */
  setTypes: function(e) {
    return this.options.types = e, this;
  },
  /**
   * Get the minimum number of characters typed to trigger results used in the plugin
   * @returns {Number} The minimum length in characters before a search is triggered
   */
  getMinLength: function() {
    return this.options.minLength;
  },
  /**
   * Set the minimum number of characters typed to trigger results used by the plugin
   * @param {Number} minLength the minimum length in characters
   * @returns {MapboxGeocoder} this
   */
  setMinLength: function(e) {
    return this.options.minLength = e, this._typeahead && (this._typeahead.options.minLength = e), this;
  },
  /**
   * Get the limit value for the number of results to display used by the plugin
   * @returns {Number} The limit value for the number of results to display used by the plugin
   */
  getLimit: function() {
    return this.options.limit;
  },
  /**
   * Set the limit value for the number of results to display used by the plugin
   * @param {Number} limit the number of search results to return
   * @returns {MapboxGeocoder}
   */
  setLimit: function(e) {
    return this.options.limit = e, this._typeahead && (this._typeahead.options.limit = e), this;
  },
  /**
   * Get the filter function used by the plugin
   * @returns {Function} the filter function
   */
  getFilter: function() {
    return this.options.filter;
  },
  /**
   * Set the filter function used by the plugin.
   * @param {Function} filter A function which accepts a Feature in the [extended GeoJSON](https://docs.mapbox.com/api/search/geocoding-v5/#geocoding-response-object) format to filter out results from the Geocoding API response before they are included in the suggestions list. Return `true` to keep the item, `false` otherwise.
   * @returns {MapboxGeocoder} this
   */
  setFilter: function(e) {
    return this.options.filter = e, this;
  },
  /**
   * Set the geocoding endpoint used by the plugin.
   * @param {Function} origin A function which accepts an HTTPS URL to specify the endpoint to query results from.
   * @returns {MapboxGeocoder} this
   */
  setOrigin: function(e) {
    return this.options.origin = e, this.geocoderService = A(
      T({
        accessToken: this.options.accessToken,
        origin: this.options.origin
      })
    ), this;
  },
  /**
   * Get the geocoding endpoint the plugin is currently set to
   * @returns {Function} the endpoint URL
   */
  getOrigin: function() {
    return this.options.origin;
  },
  /**
   * Set the accessToken option used for the geocoding request endpoint.
   * @param {String} accessToken value
   * @returns {MapboxGeocoder} this
   */
  setAccessToken: function(e) {
    return this.options.accessToken = e, this.geocoderService = A(
      T({
        accessToken: this.options.accessToken,
        origin: this.options.origin
      })
    ), this;
  },
  /**
   * Set the autocomplete option used for geocoding requests
   * @param {Boolean} value The boolean value to set autocomplete to
   * @returns
   */
  setAutocomplete: function(e) {
    return this.options.autocomplete = e, this;
  },
  /**
   * Get the current autocomplete parameter value used for requests
   * @returns {Boolean} The autocomplete parameter value
   */
  getAutocomplete: function() {
    return this.options.autocomplete;
  },
  /**
   * Set the fuzzyMatch option used for approximate matching in geocoding requests
   * @param {Boolean} value The boolean value to set fuzzyMatch to
   * @returns
   */
  setFuzzyMatch: function(e) {
    return this.options.fuzzyMatch = e, this;
  },
  /**
   * Get the current fuzzyMatch parameter value used for requests
   * @returns {Boolean} The fuzzyMatch parameter value
   */
  getFuzzyMatch: function() {
    return this.options.fuzzyMatch;
  },
  /**
   * Set the routing parameter used to ask for routable point metadata in geocoding requests
   * @param {Boolean} value The boolean value to set routing to
   * @returns
   */
  setRouting: function(e) {
    return this.options.routing = e, this;
  },
  /**
   * Get the current routing parameter value used for requests
   * @returns {Boolean} The routing parameter value
   */
  getRouting: function() {
    return this.options.routing;
  },
  /**
   * Set the worldview parameter
   * @param {String} code The country code representing the worldview (e.g. "us" | "cn" | "jp", "in")
   * @returns
   */
  setWorldview: function(e) {
    return this.options.worldview = e, this;
  },
  /**
   * Get the current worldview parameter value used for requests
   * @returns {String} The worldview parameter value
   */
  getWorldview: function() {
    return this.options.worldview;
  },
  /**
   * Handle the placement of a result marking the selected result
   * @private
   * @param {Object} selected the selected geojson feature
   * @returns {MapboxGeocoder} this
   */
  _handleMarker: function(e) {
    if (this._map) {
      this._removeMarker();
      var t = {
        color: "#4668F2"
      }, i = b({}, t, this.options.marker);
      return this.mapMarker = new this._mapboxgl.Marker(i), e.center ? this.mapMarker.setLngLat(e.center).addTo(this._map) : e.geometry && e.geometry.type && e.geometry.type === "Point" && e.geometry.coordinates && this.mapMarker.setLngLat(e.geometry.coordinates).addTo(this._map), this;
    }
  },
  /**
   * Handle the removal of a result marker
   * @private
   */
  _removeMarker: function() {
    this.mapMarker && (this.mapMarker.remove(), this.mapMarker = null);
  },
  /**
   * Subscribe to events that happen within the plugin.
   * @param {String} type name of event. Available events and the data passed into their respective event objects are:
   *
   * - __clear__ `Emitted when the input is cleared`
   * - __loading__ `{ query } Emitted when the geocoder is looking up a query`
   * - __results__ `{ results } Fired when the geocoder returns a response`
   * - __result__ `{ result } Fired when input is set`
   * - __error__ `{ error } Error as string`
   * @param {Function} fn function that's called when the event is emitted.
   * @returns {MapboxGeocoder} this;
   */
  on: function(e, t) {
    return this._eventEmitter.on(e, t), this;
  },
  /**
   * Remove an event
   * @returns {MapboxGeocoder} this
   * @param {String} type Event name.
   * @param {Function} fn Function that should unsubscribe to the event emitted.
   */
  off: function(e, t) {
    return this._eventEmitter.removeListener(e, t), this.eventManager.remove(), this;
  }
};
var yt = ae;
const _t = /* @__PURE__ */ ce(yt), xt = (e, t) => {
  const i = document.querySelector(".mapboxgl-ctrl-icon");
  i && i.setAttribute("title", e("uiKit:map.FindMyLocation"));
  const n = document.querySelector(".mapboxgl-ctrl-zoom-in"), s = document.querySelector(".mapboxgl-ctrl-zoom-out");
  if (n) {
    const u = n.querySelector(".mapboxgl-ctrl-icon");
    u && u.setAttribute("title", e("uiKit:map.ZoomIn"));
  }
  if (s) {
    const u = s.querySelector(".mapboxgl-ctrl-icon");
    u && u.setAttribute("title", e("uiKit:map.ZoomOut"));
  }
  const a = document.querySelector(".mapboxgl-ctrl-fullscreen");
  if (a) {
    const u = document.fullscreenElement !== null;
    a.querySelector(".mapboxgl-ctrl-icon").setAttribute("title", e(u ? "uiKit:map.Exit" : "uiKit:map.Enter"));
  }
  const r = t == null ? void 0 : t.find((u) => u instanceof _t);
  r && r.setPlaceholder(e("uiKit:map.Search"));
  const o = document.querySelector(".mapboxgl-scroll-zoom-blocker");
  o && (o.innerHTML = e("uiKit:map.CtrlMessage"));
  const l = document.querySelector(".mapboxgl-touch-pan-blocker");
  l && (l.innerHTML = e("uiKit:map.Message"));
};
export {
  _t as MapboxGeocoder,
  xt as updateControlTexts
};
