! function () {
    "use strict";
    var e = "undefined" == typeof global ? self : global;
    if ("function" != typeof e.require) {
        var n = {},
            r = {},
            t = {},
            i = {}.hasOwnProperty,
            o = /^\.\.?(\/|$)/,
            a = function (e, n) {
                for (var r, t = [], i = (o.test(n) ? e + "/" + n : n).split("/"), a = 0, c = i.length; a < c; a++) r = i[a], ".." === r ? t.pop() : "." !== r && "" !== r && t.push(r);
                return t.join("/")
            },
            c = function (e) {
                return e.split("/").slice(0, -1).join("/")
            },
            u = function (n) {
                return function (r) {
                    var t = a(c(n), r);
                    return e.require(t, n)
                }
            },
            l = function (e, n) {
                var t = m && m.createHot(e),
                    i = {
                        id: e,
                        exports: {},
                        hot: t
                    };
                return r[e] = i, n(i.exports, u(e), i), i.exports
            },
            s = function (e) {
                return t[e] ? s(t[e]) : e
            },
            d = function (e, n) {
                return s(a(c(e), n))
            },
            f = function (e, t) {
                null == t && (t = "/");
                var o = s(e);
                if (i.call(r, o)) return r[o].exports;
                if (i.call(n, o)) return l(o, n[o]);
                throw new Error("Cannot find module '" + e + "' from '" + t + "'")
            };
        f.alias = function (e, n) {
            t[n] = e
        };
        var v = /\.[^.\/]+$/,
            p = /\/index(\.[^\/]+)?$/,
            g = function (e) {
                if (v.test(e)) {
                    var n = e.replace(v, "");
                    i.call(t, n) && t[n].replace(v, "") !== n + "/index" || (t[n] = e)
                }
                if (p.test(e)) {
                    var r = e.replace(p, "");
                    i.call(t, r) || (t[r] = e)
                }
            };
        f.register = f.define = function (e, t) {
            if (e && "object" == typeof e)
                for (var o in e) i.call(e, o) && f.register(o, e[o]);
            else n[e] = t, delete r[e], g(e)
        }, f.list = function () {
            var e = [];
            for (var r in n) i.call(n, r) && e.push(r);
            return e
        };
        var m = e._hmr && new e._hmr(d, f, n, r);
        f._cache = r, f.hmr = m && m.wrap, f.brunch = !0, e.require = f
    }
}(),
function () {
    "undefined" == typeof window ? this : window;
    require.register("app.js", function (e, n, r) {
        "use strict";
        n("modernizr");
        var t = {
            init: function () {
                this.initBurgerHandler(), this.stickyNavigationHandler();
                var e = document.querySelectorAll(".project");
                e.length && this.initFadeInProjects(e)
            },
            initFadeInProjects: function (e) {
                for (var n = 0; n < e.length; n++) e[n].classList.add("transparent");
                var r = function () {
                    for (var n = window.pageYOffset || document.documentElement.scrollTop, r = n + window.innerHeight, t = 0; t < e.length; t++) {
                        var i = e[t],
                            o = i.getBoundingClientRect().top + n;
                        if (o <= r) {
                            var a = i.classList;
                            a.remove("transparent"), a.add("animated"), a.add("fadeInUp")
                        }
                    }
                };
                r(), window.addEventListener("scroll", r)
            },
            initBurgerHandler: function () {
                var e = document.querySelector(".nav-container"),
                    n = document.querySelector(".burger");
                n.addEventListener("click", function () {
                    e.classList.toggle("BurgerMenu--active")
                })
            },
            stickyNavigationHandler: function () {
                var e = 0,
                    n = document.querySelector(".main-container"),
                    r = document.querySelector(".nav-container"),
                    t = function () {
                        var t = window.pageYOffset || document.documentElement.scrollTop,
                            i = t && t < e;
                        i ? n.classList.add("stickyNavigation") : n.classList.remove("stickyNavigation"), t > e && r.classList.remove("BurgerMenu--active"), e = t
                    };
                window.addEventListener("scroll", t)
            }
        };
        r.exports = t
    }), require.register("___globals___", function (e, n, r) {})
}(), require("___globals___");