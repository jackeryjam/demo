(() => {
  var e,
    t,
    r,
    n,
    o = {
      177: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => c });
        var n = r(81),
          o = r.n(n),
          a = r(645),
          i = r.n(a)()(o());
        i.push([e.id, ".text {\n    background-color: wheat;\n}", ""]);
        const c = i;
      },
      914: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => c });
        var n = r(81),
          o = r.n(n),
          a = r(645),
          i = r.n(a)()(o());
        i.push([e.id, ".text {\n    background-color: whitesmoke;\n}", ""]);
        const c = i;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = "",
                  n = void 0 !== t[5];
                return (
                  t[4] && (r += "@supports (".concat(t[4], ") {")),
                  t[2] && (r += "@media ".concat(t[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (r += e(t)),
                  n && (r += "}"),
                  t[2] && (r += "}"),
                  t[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (t.i = function (e, r, n, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (n)
                for (var c = 0; c < this.length; c++) {
                  var s = this[c][0];
                  null != s && (i[s] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (n && i[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  r &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = r))
                      : (l[2] = r)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      115: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => b });
        var n = r(379),
          o = r.n(n),
          a = r(795),
          i = r.n(a),
          c = r(569),
          s = r.n(c),
          u = r(565),
          l = r.n(u),
          d = r(216),
          p = r.n(d),
          f = r(589),
          v = r.n(f),
          h = r(177),
          m = {};
        (m.styleTagTransform = v()),
          (m.setAttributes = l()),
          (m.insert = s().bind(null, "head")),
          (m.domAPI = i()),
          (m.insertStyleElement = p()),
          o()(h.Z, m);
        const b = h.Z && h.Z.locals ? h.Z.locals : void 0;
      },
      121: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => b });
        var n = r(379),
          o = r.n(n),
          a = r(795),
          i = r.n(a),
          c = r(569),
          s = r.n(c),
          u = r(565),
          l = r.n(u),
          d = r(216),
          p = r.n(d),
          f = r(589),
          v = r.n(f),
          h = r(914),
          m = {};
        (m.styleTagTransform = v()),
          (m.setAttributes = l()),
          (m.insert = s().bind(null, "head")),
          (m.domAPI = i()),
          (m.insertStyleElement = p()),
          o()(h.Z, m);
        const b = h.Z && h.Z.locals ? h.Z.locals : void 0;
      },
      379: (e) => {
        "use strict";
        var t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n;
              break;
            }
          return r;
        }
        function n(e, n) {
          for (var a = {}, i = [], c = 0; c < e.length; c++) {
            var s = e[c],
              u = n.base ? s[0] + n.base : s[0],
              l = a[u] || 0,
              d = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var p = r(d),
              f = {
                css: s[1],
                media: s[2],
                sourceMap: s[3],
                supports: s[4],
                layer: s[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(f);
            else {
              var v = o(f, n);
              (n.byIndex = c),
                t.splice(c, 0, { identifier: d, updater: v, references: 1 });
            }
            i.push(d);
          }
          return i;
        }
        function o(e, t) {
          var r = t.domAPI(t);
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                r.update((e = t));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = n((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var c = r(a[i]);
              t[c].references--;
            }
            for (var s = n(e, o), u = 0; u < a.length; u++) {
              var l = r(a[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = s;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, r) => {
        "use strict";
        e.exports = function (e) {
          var t = r.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, t, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (n += r.css),
                  o && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var a = r.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(n, e, t.options);
              })(t, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      51: (e, t, r) => {
        r(121),
          r
            .e(853)
            .then(r.t.bind(r, 853, 23))
            .then((e) => {
              console.log(e);
            }),
          console.log("index2.js");
      },
    },
    a = {};
  function i(e) {
    var t = a[e];
    if (void 0 !== t) return t.exports;
    var r = (a[e] = { id: e, exports: {} });
    return o[e](r, r.exports, i), r.exports;
  }
  (i.m = o),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (r, n) {
      if ((1 & n && (r = this(r)), 8 & n)) return r;
      if ("object" == typeof r && r) {
        if (4 & n && r.__esModule) return r;
        if (16 & n && "function" == typeof r.then) return r;
      }
      var o = Object.create(null);
      i.r(o);
      var a = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var c = 2 & n && r; "object" == typeof c && !~e.indexOf(c); c = t(c))
        Object.getOwnPropertyNames(c).forEach((e) => (a[e] = () => r[e]));
      return (a.default = () => r), i.d(o, a), o;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
    (i.u = (e) => e + ".webpack.bundle.js"),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (r = {}),
    (n = "webpack:"),
    (i.l = (e, t, o, a) => {
      if (r[e]) r[e].push(t);
      else {
        var c, s;
        if (void 0 !== o)
          for (
            var u = document.getElementsByTagName("script"), l = 0;
            l < u.length;
            l++
          ) {
            var d = u[l];
            if (
              d.getAttribute("src") == e ||
              d.getAttribute("data-webpack") == n + o
            ) {
              c = d;
              break;
            }
          }
        c ||
          ((s = !0),
          ((c = document.createElement("script")).charset = "utf-8"),
          (c.timeout = 120),
          i.nc && c.setAttribute("nonce", i.nc),
          c.setAttribute("data-webpack", n + o),
          (c.src = e)),
          (r[e] = [t]);
        var p = (t, n) => {
            (c.onerror = c.onload = null), clearTimeout(f);
            var o = r[e];
            if (
              (delete r[e],
              c.parentNode && c.parentNode.removeChild(c),
              o && o.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          f = setTimeout(
            p.bind(null, void 0, { type: "timeout", target: c }),
            12e4
          );
        (c.onerror = p.bind(null, c.onerror)),
          (c.onload = p.bind(null, c.onload)),
          s && document.head.appendChild(c);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e;
      i.g.importScripts && (e = i.g.location + "");
      var t = i.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var r = t.getElementsByTagName("script");
        r.length && (e = r[r.length - 1].src);
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = e);
    })(),
    (() => {
      var e = { 179: 0 };
      i.f.j = (t, r) => {
        var n = i.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var o = new Promise((r, o) => (n = e[t] = [r, o]));
            r.push((n[2] = o));
            var a = i.p + i.u(t),
              c = new Error();
            i.l(
              a,
              (r) => {
                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (c.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (c.name = "ChunkLoadError"),
                    (c.type = o),
                    (c.request = a),
                    n[1](c);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var n,
            o,
            [a, c, s] = r,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in c) i.o(c, n) && (i.m[n] = c[n]);
            s && s(i);
          }
          for (t && t(r); u < a.length; u++)
            (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (self.webpackChunkwebpack = self.webpackChunkwebpack || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (i.nc = void 0),
    i(115),
    i(51),
    console.log(1);
})();
