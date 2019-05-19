! function () {
    "use strict";
    var e = "undefined" == typeof global ? self : global;
    if ("function" != typeof e.require) {
        var t = {},
            n = {},
            r = {},
            o = {}.hasOwnProperty,
            i = /^\.\.?(\/|$)/,
            s = function (e, t) {
                for (var n, r = [], o = (i.test(t) ? e + "/" + t : t).split("/"), s = 0, a = o.length; s < a; s++) n = o[s], ".." === n ? r.pop() : "." !== n && "" !== n && r.push(n);
                return r.join("/")
            },
            a = function (e) {
                return e.split("/").slice(0, -1).join("/")
            },
            l = function (t) {
                return function (n) {
                    var r = s(a(t), n);
                    return e.require(r, t)
                }
            },
            u = function (e, t) {
                var r = h && h.createHot(e),
                    o = {
                        id: e,
                        exports: {},
                        hot: r
                    };
                return n[e] = o, t(o.exports, l(e), o), o.exports
            },
            f = function (e) {
                return r[e] ? f(r[e]) : e
            },
            c = function (e, t) {
                return f(s(a(e), t))
            },
            d = function (e, r) {
                null == r && (r = "/");
                var i = f(e);
                if (o.call(n, i)) return n[i].exports;
                if (o.call(t, i)) return u(i, t[i]);
                throw new Error("Cannot find module '" + e + "' from '" + r + "'")
            };
        d.alias = function (e, t) {
            r[t] = e
        };
        var p = /\.[^.\/]+$/,
            m = /\/index(\.[^\/]+)?$/,
            v = function (e) {
                if (p.test(e)) {
                    var t = e.replace(p, "");
                    o.call(r, t) && r[t].replace(p, "") !== t + "/index" || (r[t] = e)
                }
                if (m.test(e)) {
                    var n = e.replace(m, "");
                    o.call(r, n) || (r[n] = e)
                }
            };
        d.register = d.define = function (e, r) {
            if (e && "object" == typeof e)
                for (var i in e) o.call(e, i) && d.register(i, e[i]);
            else t[e] = r, delete n[e], v(e)
        }, d.list = function () {
            var e = [];
            for (var n in t) o.call(t, n) && e.push(n);
            return e
        };
        var h = e._hmr && new e._hmr(c, d, t, n);
        d._cache = n, d.hmr = h && h.wrap, d.brunch = !0, e.require = d
    }
}(),
function () {
    "undefined" == typeof window ? this : window;
    require.register("modernizr.js", function (e, t, n) {
        ! function (e, t, n) {
            function r(e, t) {
                return typeof e === t
            }

            function o() {
                var e, t, n, o, i, s, a;
                for (var l in w)
                    if (w.hasOwnProperty(l)) {
                        if (e = [], t = w[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                            for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? C[a[0]] = o : (!C[a[0]] || C[a[0]] instanceof Boolean || (C[a[0]] = new Boolean(C[a[0]])), C[a[0]][a[1]] = o), _.push((o ? "" : "no-") + a.join("-"))
                    }
            }

            function i(e) {
                var t = x.className,
                    n = C._config.classPrefix || "";
                if (S && (t = t.baseVal), C._config.enableJSClass) {
                    var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                    t = t.replace(r, "$1" + n + "js$2")
                }
                C._config.enableClasses && (t += " " + n + e.join(" " + n), S ? x.className.baseVal = t : x.className = t)
            }

            function s(e, t) {
                if ("object" == typeof e)
                    for (var n in e) k(e, n) && s(n, e[n]);
                else {
                    e = e.toLowerCase();
                    var r = e.split("."),
                        o = C[r[0]];
                    if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return C;
                    t = "function" == typeof t ? t() : t, 1 == r.length ? C[r[0]] = t : (!C[r[0]] || C[r[0]] instanceof Boolean || (C[r[0]] = new Boolean(C[r[0]])), C[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), C._trigger(e, t)
                }
                return C
            }

            function a() {
                return "function" != typeof t.createElement ? t.createElement(arguments[0]) : S ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
            }

            function l() {
                var e = t.body;
                return e || (e = a(S ? "svg" : "body"), e.fake = !0), e
            }

            function u(e, n, r, o) {
                var i, s, u, f, c = "modernizr",
                    d = a("div"),
                    p = l();
                if (parseInt(r, 10))
                    for (; r--;) u = a("div"), u.id = o ? o[r] : c + (r + 1), d.appendChild(u);
                return i = a("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = x.style.overflow, x.style.overflow = "hidden", x.appendChild(p)), s = n(d, e), p.fake ? (p.parentNode.removeChild(p), x.style.overflow = f, x.offsetHeight) : d.parentNode.removeChild(d), !!s
            }

            function f(e, t) {
                return !!~("" + e).indexOf(t)
            }

            function c(e) {
                return e.replace(/([A-Z])/g, function (e, t) {
                    return "-" + t.toLowerCase()
                }).replace(/^ms-/, "-ms-")
            }

            function d(t, n, r) {
                var o;
                if ("getComputedStyle" in e) {
                    o = getComputedStyle.call(e, t, n);
                    var i = e.console;
                    if (null !== o) r && (o = o.getPropertyValue(r));
                    else if (i) {
                        var s = i.error ? "error" : "log";
                        i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                    }
                } else o = !n && t.currentStyle && t.currentStyle[r];
                return o
            }

            function p(t, r) {
                var o = t.length;
                if ("CSS" in e && "supports" in e.CSS) {
                    for (; o--;)
                        if (e.CSS.supports(c(t[o]), r)) return !0;
                    return !1
                }
                if ("CSSSupportsRule" in e) {
                    for (var i = []; o--;) i.push("(" + c(t[o]) + ":" + r + ")");
                    return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
                        return "absolute" == d(e, null, "position")
                    })
                }
                return n
            }

            function m(e) {
                return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
                    return t + n.toUpperCase()
                }).replace(/^-/, "")
            }

            function v(e, t, o, i) {
                function s() {
                    u && (delete L.style, delete L.modElem)
                }
                if (i = !r(i, "undefined") && i, !r(o, "undefined")) {
                    var l = p(e, o);
                    if (!r(l, "undefined")) return l
                }
                for (var u, c, d, v, h, g = ["modernizr", "tspan", "samp"]; !L.style && g.length;) u = !0, L.modElem = a(g.shift()), L.style = L.modElem.style;
                for (d = e.length, c = 0; d > c; c++)
                    if (v = e[c], h = L.style[v], f(v, "-") && (v = m(v)), L.style[v] !== n) {
                        if (i || r(o, "undefined")) return s(), "pfx" != t || v;
                        try {
                            L.style[v] = o
                        } catch (A) {}
                        if (L.style[v] != h) return s(), "pfx" != t || v
                    } return s(), !1
            }

            function h(e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            }

            function g(e, t, n) {
                var o;
                for (var i in e)
                    if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? h(o, n || t) : o);
                return !1
            }

            function A(e, t, n, o, i) {
                var s = e.charAt(0).toUpperCase() + e.slice(1),
                    a = (e + " " + j.join(s + " ") + s).split(" ");
                return r(t, "string") || r(t, "undefined") ? v(a, t, o, i) : (a = (e + " " + E.join(s + " ") + s).split(" "), g(a, t, n))
            }

            function y(e, t, r) {
                return A(e, n, n, t, r)
            }
            var w = [],
                b = {
                    _version: "3.5.0",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function (e, t) {
                        var n = this;
                        setTimeout(function () {
                            t(n[e])
                        }, 0)
                    },
                    addTest: function (e, t, n) {
                        w.push({
                            name: e,
                            fn: t,
                            options: n
                        })
                    },
                    addAsyncTest: function (e) {
                        w.push({
                            name: null,
                            fn: e
                        })
                    }
                },
                C = function () {};
            C.prototype = b, C = new C;
            var _ = [],
                x = t.documentElement,
                S = "svg" === x.nodeName.toLowerCase(),
                T = "Moz O ms Webkit",
                E = b._config.usePrefixes ? T.toLowerCase().split(" ") : [];
            b._domPrefixes = E;
            var P = b._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
            b._prefixes = P;
            var k;
            ! function () {
                var e = {}.hasOwnProperty;
                k = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
                    return t in e && r(e.constructor.prototype[t], "undefined")
                } : function (t, n) {
                    return e.call(t, n)
                }
            }(), b._l = {}, b.on = function (e, t) {
                this._l[e] || (this._l[e] = []), this._l[e].push(t), C.hasOwnProperty(e) && setTimeout(function () {
                    C._trigger(e, C[e])
                }, 0)
            }, b._trigger = function (e, t) {
                if (this._l[e]) {
                    var n = this._l[e];
                    setTimeout(function () {
                        var e, r;
                        for (e = 0; e < n.length; e++)(r = n[e])(t)
                    }, 0), delete this._l[e]
                }
            }, C._q.push(function () {
                b.addTest = s
            });
            var z = function () {
                function e(e, t) {
                    var o;
                    return !!e && (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o)
                }
                var r = !("onblur" in t.documentElement);
                return e
            }();
            b.hasEvent = z;
            var B = function () {
                var t = e.matchMedia || e.msMatchMedia;
                return t ? function (e) {
                    var n = t(e);
                    return n && n.matches || !1
                } : function (t) {
                    var n = !1;
                    return u("@media " + t + " { #modernizr { position: absolute; } }", function (t) {
                        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
                    }), n
                }
            }();
            b.mq = B;
            var O = function (e, t) {
                var n = !1,
                    r = a("div"),
                    o = r.style;
                if (e in o) {
                    var i = E.length;
                    for (o[e] = t, n = o[e]; i-- && !n;) o[e] = "-" + E[i] + "-" + t, n = o[e]
                }
                return "" === n && (n = !1), n
            };
            b.prefixedCSSValue = O;
            var j = b._config.usePrefixes ? T.split(" ") : [];
            b._cssomPrefixes = j;
            var q = {
                elem: a("modernizr")
            };
            C._q.push(function () {
                delete q.elem
            });
            var L = {
                style: q.elem.style
            };
            C._q.unshift(function () {
                delete L.style
            }), b.testAllProps = A, b.testAllProps = y, b.testProp = function (e, t, r) {
                return v([e], n, t, r)
            }, b.testStyles = u, C.addTest("customelements", "customElements" in e), C.addTest("history", function () {
                var t = navigator.userAgent;
                return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol) && (e.history && "pushState" in e.history)
            }), C.addTest("pointerevents", function () {
                var e = !1,
                    t = E.length;
                for (e = C.hasEvent("pointerdown"); t-- && !e;) z(E[t] + "pointerdown") && (e = !0);
                return e
            }), C.addTest("postmessage", "postMessage" in e), C.addTest("webgl", function () {
                var t = a("canvas"),
                    n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
                return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
            });
            var N = !1;
            try {
                N = "WebSocket" in e && 2 === e.WebSocket.CLOSING
            } catch (R) {}
            C.addTest("websockets", N), C.addTest("cssanimations", y("animationName", "a", !0)),
                function () {
                    C.addTest("csscolumns", function () {
                        var e = !1,
                            t = y("columnCount");
                        try {
                            e = !!t, e && (e = new Boolean(e))
                        } catch (n) {}
                        return e
                    });
                    for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), C.addTest("csscolumns." + e, t)
                }(), C.addTest("flexbox", y("flexBasis", "1px", !0)), C.addTest("picture", "HTMLPictureElement" in e), C.addAsyncTest(function () {
                    var e, t, n, r = a("img"),
                        o = "sizes" in r;
                    !o && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function () {
                        s("sizes", 2 == r.width)
                    }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : s("sizes", o)
                }), C.addTest("srcset", "srcset" in a("img")), C.addTest("webworkers", "Worker" in e), o(), i(_), delete b.addTest, delete b.addAsyncTest;
            for (var M = 0; M < C._q.length; M++) C._q[M]();
            e.Modernizr = C
        }(window, document)
    }), require.register("___globals___", function (e, t, n) {})
}(), require("___globals___");