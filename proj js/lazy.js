!function(e) {
    var t = {};
    function n(a) {
        if (t[a]) return t[a].exports;
        var r = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }
    n.m = e, n.c = t, n.d = function(e, t, a) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        });
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (n.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function(t) {
            return e[t];
        }.bind(null, r));
        return a;
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
}([ function(e, t) {
    var n = function() {
        var e, t, n, a = {
            rootMargin: "200px 0px",
            threshold: .01
        }, r = [];
        o();
        var i = document.querySelector("body");
        function o() {
            e = [].slice.call(document.querySelectorAll("img.jetpack-lazy-image:not(.jetpack-lazy-image--handled)")), 
            n && n.disconnect(), "IntersectionObserver" in window ? (n = new IntersectionObserver(l, a), 
            e.forEach(function(e) {
                e.getAttribute("data-lazy-loaded") || n.observe(e);
            }), window.addEventListener("beforeprint", c), window.matchMedia && window.matchMedia("print").addListener(function(e) {
                e.matches && c();
            })) : d();
        }
        function d() {
            for (n && n.disconnect(); e.length > 0; ) s(e[0]);
        }
        function l(t) {
            for (var a = 0; a < t.length; a++) {
                var r = t[a];
                r.intersectionRatio > 0 && (n.unobserve(r.target), s(r.target));
            }
            0 === e.length && n.disconnect();
        }
        function c() {
            if (!t && (e.length > 0 || r.length > 0)) {
                (t = document.createElement("div")).id = "loadingWarning", t.style.fontWeight = "bold", 
                t.innerText = jetpackLazyImagesL10n.loading_warning;
                var n = document.createElement("style");
                n.innerHTML = "#loadingWarning { display: none; }\n@media print {\n#loadingWarning { display: block; }\nbody > #loadingWarning ~ * { display: none !important; }\n}", 
                t.appendChild(n), i.insertBefore(t, i.firstChild);
            }
            e.length > 0 && d(), t && alert(jetpackLazyImagesL10n.loading_warning);
        }
        function s(t) {
            var n;
            if (t instanceof HTMLImageElement) {
                var a = t.getAttribute("data-lazy-srcset"), i = t.getAttribute("data-lazy-sizes");
                t.removeAttribute("data-lazy-srcset"), t.removeAttribute("data-lazy-sizes"), t.removeAttribute("data-lazy-src"), 
                t.classList.add("jetpack-lazy-image--handled"), t.setAttribute("data-lazy-loaded", 1), 
                i && t.setAttribute("sizes", i), a ? t.setAttribute("srcset", a) : t.removeAttribute("srcset"), 
                t.setAttribute("loading", "eager"), r.push(t);
                var o = e.indexOf(t);
                o >= 0 && e.splice(o, 1), t.complete ? u.call(t, null) : (t.addEventListener("load", u, {
                    once: !0
                }), t.addEventListener("error", u, {
                    once: !0
                }));
                try {
                    n = new Event("jetpack-lazy-loaded-image", {
                        bubbles: !0,
                        cancelable: !0
                    });
                } catch (e) {
                    (n = document.createEvent("Event")).initEvent("jetpack-lazy-loaded-image", !0, !0);
                }
                t.dispatchEvent(n);
            }
        }
        function u() {
            var n = r.indexOf(this);
            n >= 0 && r.splice(n, 1), t && 0 === e.length && 0 === r.length && (t.parentNode.removeChild(t), 
            t = null);
        }
        i && (i.addEventListener("is.post-load", o), i.addEventListener("jetpack-lazy-images-load", o));
    };
    "interactive" === document.readyState || "complete" === document.readyState ? n() : document.addEventListener("DOMContentLoaded", n);
} ]);