!(function () {
    'use strict';
    var e = function (e, n) {
            if (!(e instanceof n)) throw new TypeError('Cannot call a class as a function');
        },
        n = (function () {
            function e(e, n) {
                for (var r = 0; r < n.length; r++) {
                    var t = n[r];
                    (t.enumerable = t.enumerable || !1),
                    (t.configurable = !0),
                    'value' in t && (t.writable = !0),
                        Object.defineProperty(e, t.key, t);
                }
            }
            return function (n, r, t) {
                return r && e(n.prototype, r), t && e(n, t), n;
            };
        })(),
        r = (function () {
            function r() {
                var n = this;
                e(this, r),
                    (this.opener = document.querySelectorAll('.c-menu')),
                    (this.closer = document.querySelectorAll('.c-global-nav__closer')),
                    (this.overlay = document.querySelectorAll('.c-overlay')),
                    (this.isOpen = !1),
                    Array.from(this.opener, function (e) {
                        e.addEventListener('click', n.overlaySwitcher.bind(n), !1);
                    }),
                    Array.from(this.closer, function (e) {
                        e.addEventListener('click', n.overlaySwitcher.bind(n), !1);
                    });
            }
            return (
                n(r, [{
                    key: 'overlaySwitcher',
                    value: function () {
                        var e = this;
                        this.isOpen ?
                            this.overlay.forEach(function (n) {
                                (e.isOpen = !1), n.classList.remove('isShow');
                            }) :
                            this.overlay.forEach(function (n) {
                                (e.isOpen = !0), n.classList.add('isShow');
                            });
                    }
                }]),
                r
            );
        })();
    window.onload = function () {
        new r();
    };
})();
//# sourceMappingURL=application.js.map