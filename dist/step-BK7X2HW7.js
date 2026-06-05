function N(i) {
  this._context = i;
}
N.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i, t) {
    switch (i = +i, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(i, t) : this._context.moveTo(i, t);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(i, t);
        break;
    }
  }
};
function P(i) {
  return new N(i);
}
function x(i, t, n) {
  i._context.bezierCurveTo(
    (2 * i._x0 + i._x1) / 3,
    (2 * i._y0 + i._y1) / 3,
    (i._x0 + 2 * i._x1) / 3,
    (i._y0 + 2 * i._y1) / 3,
    (i._x0 + 4 * i._x1 + t) / 6,
    (i._y0 + 4 * i._y1 + n) / 6
  );
}
function w(i) {
  this._context = i;
}
w.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        x(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i, t) {
    switch (i = +i, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(i, t) : this._context.moveTo(i, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        x(this, i, t);
        break;
    }
    this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = t;
  }
};
function M(i) {
  return new w(i);
}
function y(i, t, n) {
  i._context.bezierCurveTo(
    i._x1 + i._k * (i._x2 - i._x0),
    i._y1 + i._k * (i._y2 - i._y0),
    i._x2 + i._k * (i._x1 - t),
    i._y2 + i._k * (i._y1 - n),
    i._x2,
    i._y2
  );
}
function a(i, t) {
  this._context = i, this._k = (1 - t) / 6;
}
a.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        y(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i, t) {
    switch (i = +i, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(i, t) : this._context.moveTo(i, t);
        break;
      case 1:
        this._point = 2, this._x1 = i, this._y1 = t;
        break;
      case 2:
        this._point = 3;
      default:
        y(this, i, t);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const z = function i(t) {
  function n(_) {
    return new a(_, t);
  }
  return n.tension = function(_) {
    return i(+_);
  }, n;
}(0);
function C(i, t, n) {
  var _ = i._x1, e = i._y1, s = i._x2, o = i._y2;
  if (i._l01_a > 1e-12) {
    var h = 2 * i._l01_2a + 3 * i._l01_a * i._l12_a + i._l12_2a, u = 3 * i._l01_a * (i._l01_a + i._l12_a);
    _ = (_ * h - i._x0 * i._l12_2a + i._x2 * i._l01_2a) / u, e = (e * h - i._y0 * i._l12_2a + i._y2 * i._l01_2a) / u;
  }
  if (i._l23_a > 1e-12) {
    var f = 2 * i._l23_2a + 3 * i._l23_a * i._l12_a + i._l12_2a, p = 3 * i._l23_a * (i._l23_a + i._l12_a);
    s = (s * f + i._x1 * i._l23_2a - t * i._l12_2a) / p, o = (o * f + i._y1 * i._l23_2a - n * i._l12_2a) / p;
  }
  i._context.bezierCurveTo(_, e, s, o, i._x2, i._y2);
}
function d(i, t) {
  this._context = i, this._alpha = t;
}
d.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i, t) {
    if (i = +i, t = +t, this._point) {
      var n = this._x2 - i, _ = this._y2 - t;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(n * n + _ * _, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(i, t) : this._context.moveTo(i, t);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        C(this, i, t);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = i, this._y0 = this._y1, this._y1 = this._y2, this._y2 = t;
  }
};
const $ = function i(t) {
  function n(_) {
    return t ? new d(_, t) : new a(_, 0);
  }
  return n.alpha = function(_) {
    return i(+_);
  }, n;
}(0.5);
function T(i) {
  return i < 0 ? -1 : 1;
}
function b(i, t, n) {
  var _ = i._x1 - i._x0, e = t - i._x1, s = (i._y1 - i._y0) / (_ || e < 0 && -0), o = (n - i._y1) / (e || _ < 0 && -0), h = (s * e + o * _) / (_ + e);
  return (T(s) + T(o)) * Math.min(Math.abs(s), Math.abs(o), 0.5 * Math.abs(h)) || 0;
}
function v(i, t) {
  var n = i._x1 - i._x0;
  return n ? (3 * (i._y1 - i._y0) / n - t) / 2 : t;
}
function r(i, t, n) {
  var _ = i._x0, e = i._y0, s = i._x1, o = i._y1, h = (s - _) / 3;
  i._context.bezierCurveTo(_ + h, e + h * t, s - h, o - h * n, s, o);
}
function c(i) {
  this._context = i;
}
c.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        r(this, this._t0, v(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(i, t) {
    var n = NaN;
    if (i = +i, t = +t, !(i === this._x1 && t === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(i, t) : this._context.moveTo(i, t);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, r(this, v(this, n = b(this, i, t)), n);
          break;
        default:
          r(this, this._t0, n = b(this, i, t));
          break;
      }
      this._x0 = this._x1, this._x1 = i, this._y0 = this._y1, this._y1 = t, this._t0 = n;
    }
  }
};
function m(i) {
  this._context = new S(i);
}
(m.prototype = Object.create(c.prototype)).point = function(i, t) {
  c.prototype.point.call(this, t, i);
};
function S(i) {
  this._context = i;
}
S.prototype = {
  moveTo: function(i, t) {
    this._context.moveTo(t, i);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(i, t) {
    this._context.lineTo(t, i);
  },
  bezierCurveTo: function(i, t, n, _, e, s) {
    this._context.bezierCurveTo(t, i, _, n, s, e);
  }
};
function A(i) {
  return new c(i);
}
function R(i) {
  return new m(i);
}
function E(i) {
  this._context = i;
}
E.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var i = this._x, t = this._y, n = i.length;
    if (n)
      if (this._line ? this._context.lineTo(i[0], t[0]) : this._context.moveTo(i[0], t[0]), n === 2)
        this._context.lineTo(i[1], t[1]);
      else
        for (var _ = k(i), e = k(t), s = 0, o = 1; o < n; ++s, ++o)
          this._context.bezierCurveTo(_[0][s], e[0][s], _[1][s], e[1][s], i[o], t[o]);
    (this._line || this._line !== 0 && n === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(i, t) {
    this._x.push(+i), this._y.push(+t);
  }
};
function k(i) {
  var t, n = i.length - 1, _, e = new Array(n), s = new Array(n), o = new Array(n);
  for (e[0] = 0, s[0] = 2, o[0] = i[0] + 2 * i[1], t = 1; t < n - 1; ++t) e[t] = 1, s[t] = 4, o[t] = 4 * i[t] + 2 * i[t + 1];
  for (e[n - 1] = 2, s[n - 1] = 7, o[n - 1] = 8 * i[n - 1] + i[n], t = 1; t < n; ++t) _ = e[t] / s[t - 1], s[t] -= _, o[t] -= _ * o[t - 1];
  for (e[n - 1] = o[n - 1] / s[n - 1], t = n - 2; t >= 0; --t) e[t] = (o[t] - e[t + 1]) / s[t];
  for (s[n - 1] = (i[n] + e[n - 1]) / 2, t = 0; t < n - 1; ++t) s[t] = 2 * i[t + 1] - e[t + 1];
  return [e, s];
}
function g(i) {
  return new E(i);
}
function l(i, t) {
  this._context = i, this._t = t;
}
l.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(i, t) {
    switch (i = +i, t = +t, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(i, t) : this._context.moveTo(i, t);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, t), this._context.lineTo(i, t);
        else {
          var n = this._x * (1 - this._t) + i * this._t;
          this._context.lineTo(n, this._y), this._context.lineTo(n, t);
        }
        break;
      }
    }
    this._x = i, this._y = t;
  }
};
function B(i) {
  return new l(i, 0.5);
}
function L(i) {
  return new l(i, 0);
}
function X(i) {
  return new l(i, 1);
}
export {
  w as Basis,
  M as curveBasis,
  z as curveCardinal,
  $ as curveCatmullRom,
  P as curveLinear,
  g as curveNatural,
  B as curveStep,
  A as monotoneX,
  R as monotoneY,
  x as point,
  y as point$1,
  C as point$2,
  X as stepAfter,
  L as stepBefore
};
