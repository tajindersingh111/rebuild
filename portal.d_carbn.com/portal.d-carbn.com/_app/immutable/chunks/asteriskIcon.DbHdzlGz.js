import {
    s as v,
    C as o,
    D as c,
    n as f,
    d as a,
    o as n,
    E as h,
    i as m,
    p as d,
    r as u,
    v as L,
    w as g,
    x as p
} from "./scheduler.Bal8Y2GG.js";
import {
    S as w,
    i as H
} from "./index.BruxqCn-.js"; /* empty css                                                   */
function _(r) {
    let e, s;
    return {
        c() {
            e = o("title"), s = L(r[0])
        },
        l(t) {
            e = c(t, "title", {});
            var l = f(e);
            s = g(l, r[0]), l.forEach(a)
        },
        m(t, l) {
            m(t, e, l), d(e, s)
        },
        p(t, l) {
            l & 1 && p(s, t[0])
        },
        d(t) {
            t && a(e)
        }
    }
}

function V(r) {
    let e, s, t = r[0] !== null && _(r);
    return {
        c() {
            e = o("svg"), t && t.c(), s = o("path"), this.h()
        },
        l(l) {
            e = c(l, "svg", {
                xmlns: !0,
                viewBox: !0,
                class: !0
            });
            var i = f(e);
            t && t.l(i), s = c(i, "path", {
                d: !0
            }), f(s).forEach(a), i.forEach(a), this.h()
        },
        h() {
            n(s, "d", "M21 13H14.4L19.1 17.7L17.7 19.1L13 14.4V21H11V14.3L6.3 19L4.9 17.6L9.4 13H3V11H9.6L4.9 6.3L6.3 4.9L11 9.6V3H13V9.4L17.6 4.8L19 6.3L14.3 11H21V13Z"), n(e, "xmlns", "http://www.w3.org/2000/svg"), n(e, "viewBox", "0 0 24 24"), n(e, "class", "svelte-1gv7519"), h(e, "--clr", r[1])
        },
        m(l, i) {
            m(l, e, i), t && t.m(e, null), d(e, s)
        },
        p(l, [i]) {
            l[0] !== null ? t ? t.p(l, i) : (t = _(l), t.c(), t.m(e, s)) : t && (t.d(1), t = null), i & 2 && h(e, "--clr", l[1])
        },
        i: u,
        o: u,
        d(l) {
            l && a(e), t && t.d()
        }
    }
}

function E(r, e, s) {
    let {
        title: t = "Required"
    } = e, {
        color: l = "hsl(var(--clr-error-5))"
    } = e;
    return r.$$set = i => {
        "title" in i && s(0, t = i.title), "color" in i && s(1, l = i.color)
    }, [t, l]
}
class q extends w {
    constructor(e) {
        super(), H(this, e, E, V, v, {
            title: 0,
            color: 1
        })
    }
}
export {
    q as A
};