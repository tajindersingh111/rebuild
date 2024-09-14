import {
    s as ds,
    k as e,
    a as r,
    v as p,
    e as ss,
    l,
    n as d,
    m as c,
    c as o,
    w as _,
    d as s,
    o as a,
    i as zt,
    p as t,
    r as nl
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as rs,
    i as os
} from "../chunks/index.BruxqCn-.js";
import {
    a as is
} from "../chunks/auth.e8T0Sx-3.js";
import {
    d as as
} from "../chunks/format.wp9OkogO.js";

function ns(i) {
    let n, f, v, I, F = "Admin Section",
        m, P, x, q, yt = "ID",
        R, J, kt = i[0].id + "",
        vt, V, E, k, A, M = "Created At",
        At, z, jt = as(i[0].created_at) + "",
        H, g, b, B, qt = "Updated At",
        L, U, Ht = as(i[0].updated_at) + "",
        ct;
    return {
        c() {
            n = e("hr"), f = r(), v = e("div"), I = e("h2"), I.textContent = F, m = r(), P = e("div"), x = e("div"), q = e("p"), q.textContent = yt, R = r(), J = e("p"), vt = p(kt), V = r(), E = e("div"), k = e("div"), A = e("p"), A.textContent = M, At = r(), z = e("p"), H = p(jt), g = r(), b = e("div"), B = e("p"), B.textContent = qt, L = r(), U = e("p"), ct = p(Ht), this.h()
        },
        l(h) {
            n = l(h, "HR", {}), f = o(h), v = l(h, "DIV", {
                class: !0
            });
            var u = d(v);
            I = l(u, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), c(I) !== "svelte-kk7di9" && (I.textContent = F), m = o(u), P = l(u, "DIV", {
                class: !0
            });
            var S = d(P);
            x = l(S, "DIV", {
                class: !0
            });
            var ft = d(x);
            q = l(ft, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(q) !== "svelte-jq96wf" && (q.textContent = yt), R = o(ft), J = l(ft, "P", {});
            var Bt = d(J);
            vt = _(Bt, kt), Bt.forEach(s), ft.forEach(s), S.forEach(s), V = o(u), E = l(u, "DIV", {
                class: !0
            });
            var T = d(E);
            k = l(T, "DIV", {
                class: !0
            });
            var ut = d(k);
            A = l(ut, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(A) !== "svelte-2q3a3" && (A.textContent = M), At = o(ut), z = l(ut, "P", {});
            var St = d(z);
            H = _(St, jt), St.forEach(s), ut.forEach(s), g = o(T), b = l(T, "DIV", {
                class: !0
            });
            var G = d(b);
            B = l(G, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(B) !== "svelte-v2a7bs" && (B.textContent = qt), L = o(G), U = l(G, "P", {});
            var j = d(U);
            ct = _(j, Ht), j.forEach(s), G.forEach(s), T.forEach(s), u.forEach(s), this.h()
        },
        h() {
            a(I, "class", "subtitle"), a(q, "class", "field-label"), a(x, "class", "field-group"), a(P, "class", "field-row"), a(A, "class", "field-label"), a(k, "class", "field-group"), a(B, "class", "field-label"), a(b, "class", "field-group"), a(E, "class", "field-row"), a(v, "class", "block")
        },
        m(h, u) {
            zt(h, n, u), zt(h, f, u), zt(h, v, u), t(v, I), t(v, m), t(v, P), t(P, x), t(x, q), t(x, R), t(x, J), t(J, vt), t(v, V), t(v, E), t(E, k), t(k, A), t(k, At), t(k, z), t(z, H), t(E, g), t(E, b), t(b, B), t(b, L), t(b, U), t(U, ct)
        },
        p: nl,
        d(h) {
            h && (s(n), s(f), s(v))
        }
    }
}

function vs(i) {
    let n, f, v, I = "Details",
        F, m, P, x, q = "Name",
        yt, R, J = i[0].name + "",
        kt, vt, V, E, k = "Email",
        A, M, At = i[0].email + "",
        z, jt, H, g, b, B = "Job Title",
        qt, L, U = i[0].job_title + "",
        Ht, ct, h, u, S, ft = "Phone Number",
        Bt, T, ut = i[0].phone_number + "",
        St, G, j, pt, vl = "Main Contact Name",
        Pe, Lt, cl = i[0].main_contact_name + "",
        De, Ie, Tt, K, _t, fl = "Status",
        Ve, Ot, ul = i[0].status + "",
        ge, we, ye, ke, w, ht, pl = "Address",
        Ae, Q, W, Ct, _l = "Address",
        je, Ft, hl = i[0].address + "",
        qe, He, X, xt, Cl = "Address Line 1",
        Be, Jt, xl = i[0].address_line_1 + "",
        Se, Te, Y, Z, Et, El = "Town Or City",
        Ne, Mt, bl = i[0].town_or_city + "",
        Re, ze, $, bt, ml = "Postcode",
        Le, Ut, Pl = i[0].postcode + "",
        Oe, Fe, Nt, tt, mt, Dl = "County",
        Je, Gt, Il = i[0].county + "",
        Me, Ue, Ge, Ke, y, Pt, Vl = "Billing Address",
        Qe, et, lt, Dt, gl = "Billing Address",
        We, Kt, wl = i[0].billing_address + "",
        Xe, Ye, st, It, yl = "Billing Address Line 1",
        Ze, Qt, kl = i[0].billing_address_line_1 + "",
        $e, tl, at, dt, Vt, Al = "Billing Town Or City",
        el, Wt, jl = i[0].billing_town_or_city + "",
        ll, sl, rt, gt, ql = "Billing Postcode",
        al, Xt, Hl = i[0].billing_postcode + "",
        dl, rl, Rt, ot, wt, Bl = "Billing County",
        ol, Yt, Sl = i[0].billing_county + "",
        il, Zt, Tl = is(i[1], "show:adminSections"),
        $t, O = Tl && ns(i);
    return {
        c() {
            n = e("div"), f = e("div"), v = e("h2"), v.textContent = I, F = r(), m = e("div"), P = e("div"), x = e("p"), x.textContent = q, yt = r(), R = e("p"), kt = p(J), vt = r(), V = e("div"), E = e("p"), E.textContent = k, A = r(), M = e("p"), z = p(At), jt = r(), H = e("div"), g = e("div"), b = e("p"), b.textContent = B, qt = r(), L = e("p"), Ht = p(U), ct = r(), h = e("div"), u = e("div"), S = e("p"), S.textContent = ft, Bt = r(), T = e("p"), St = p(ut), G = r(), j = e("div"), pt = e("p"), pt.textContent = vl, Pe = r(), Lt = e("p"), De = p(cl), Ie = r(), Tt = e("div"), K = e("div"), _t = e("p"), _t.textContent = fl, Ve = r(), Ot = e("p"), ge = p(ul), we = r(), ye = e("hr"), ke = r(), w = e("div"), ht = e("h2"), ht.textContent = pl, Ae = r(), Q = e("div"), W = e("div"), Ct = e("p"), Ct.textContent = _l, je = r(), Ft = e("p"), qe = p(hl), He = r(), X = e("div"), xt = e("p"), xt.textContent = Cl, Be = r(), Jt = e("p"), Se = p(xl), Te = r(), Y = e("div"), Z = e("div"), Et = e("p"), Et.textContent = El, Ne = r(), Mt = e("p"), Re = p(bl), ze = r(), $ = e("div"), bt = e("p"), bt.textContent = ml, Le = r(), Ut = e("p"), Oe = p(Pl), Fe = r(), Nt = e("div"), tt = e("div"), mt = e("p"), mt.textContent = Dl, Je = r(), Gt = e("p"), Me = p(Il), Ue = r(), Ge = e("hr"), Ke = r(), y = e("div"), Pt = e("h2"), Pt.textContent = Vl, Qe = r(), et = e("div"), lt = e("div"), Dt = e("p"), Dt.textContent = gl, We = r(), Kt = e("p"), Xe = p(wl), Ye = r(), st = e("div"), It = e("p"), It.textContent = yl, Ze = r(), Qt = e("p"), $e = p(kl), tl = r(), at = e("div"), dt = e("div"), Vt = e("p"), Vt.textContent = Al, el = r(), Wt = e("p"), ll = p(jl), sl = r(), rt = e("div"), gt = e("p"), gt.textContent = ql, al = r(), Xt = e("p"), dl = p(Hl), rl = r(), Rt = e("div"), ot = e("div"), wt = e("p"), wt.textContent = Bl, ol = r(), Yt = e("p"), il = p(Sl), Zt = r(), O && O.c(), $t = ss(), this.h()
        },
        l(D) {
            n = l(D, "DIV", {
                class: !0
            });
            var C = d(n);
            f = l(C, "DIV", {
                class: !0
            });
            var N = d(f);
            v = l(N, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), c(v) !== "svelte-muef8j" && (v.textContent = I), F = o(N), m = l(N, "DIV", {
                class: !0
            });
            var te = d(m);
            P = l(te, "DIV", {
                class: !0
            });
            var ee = d(P);
            x = l(ee, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(x) !== "svelte-1i6j4pp" && (x.textContent = q), yt = o(ee), R = l(ee, "P", {});
            var Nl = d(R);
            kt = _(Nl, J), Nl.forEach(s), ee.forEach(s), vt = o(te), V = l(te, "DIV", {
                class: !0
            });
            var le = d(V);
            E = l(le, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(E) !== "svelte-1jeotg4" && (E.textContent = k), A = o(le), M = l(le, "P", {});
            var Rl = d(M);
            z = _(Rl, At), Rl.forEach(s), le.forEach(s), te.forEach(s), jt = o(N), H = l(N, "DIV", {
                class: !0
            });
            var zl = d(H);
            g = l(zl, "DIV", {
                class: !0
            });
            var se = d(g);
            b = l(se, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(b) !== "svelte-kna1op" && (b.textContent = B), qt = o(se), L = l(se, "P", {});
            var Ll = d(L);
            Ht = _(Ll, U), Ll.forEach(s), se.forEach(s), zl.forEach(s), ct = o(N), h = l(N, "DIV", {
                class: !0
            });
            var ae = d(h);
            u = l(ae, "DIV", {
                class: !0
            });
            var de = d(u);
            S = l(de, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(S) !== "svelte-gz6n6v" && (S.textContent = ft), Bt = o(de), T = l(de, "P", {});
            var Ol = d(T);
            St = _(Ol, ut), Ol.forEach(s), de.forEach(s), G = o(ae), j = l(ae, "DIV", {
                class: !0
            });
            var re = d(j);
            pt = l(re, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(pt) !== "svelte-1nxy9ng" && (pt.textContent = vl), Pe = o(re), Lt = l(re, "P", {});
            var Fl = d(Lt);
            De = _(Fl, cl), Fl.forEach(s), re.forEach(s), ae.forEach(s), Ie = o(N), Tt = l(N, "DIV", {
                class: !0
            });
            var Jl = d(Tt);
            K = l(Jl, "DIV", {
                class: !0
            });
            var oe = d(K);
            _t = l(oe, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(_t) !== "svelte-ksbvmm" && (_t.textContent = fl), Ve = o(oe), Ot = l(oe, "P", {});
            var Ml = d(Ot);
            ge = _(Ml, ul), Ml.forEach(s), oe.forEach(s), Jl.forEach(s), N.forEach(s), we = o(C), ye = l(C, "HR", {}), ke = o(C), w = l(C, "DIV", {
                class: !0
            });
            var it = d(w);
            ht = l(it, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), c(ht) !== "svelte-lvrm31" && (ht.textContent = pl), Ae = o(it), Q = l(it, "DIV", {
                class: !0
            });
            var ie = d(Q);
            W = l(ie, "DIV", {
                class: !0
            });
            var ne = d(W);
            Ct = l(ne, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(Ct) !== "svelte-ys55do" && (Ct.textContent = _l), je = o(ne), Ft = l(ne, "P", {});
            var Ul = d(Ft);
            qe = _(Ul, hl), Ul.forEach(s), ne.forEach(s), He = o(ie), X = l(ie, "DIV", {
                class: !0
            });
            var ve = d(X);
            xt = l(ve, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(xt) !== "svelte-4fiamv" && (xt.textContent = Cl), Be = o(ve), Jt = l(ve, "P", {});
            var Gl = d(Jt);
            Se = _(Gl, xl), Gl.forEach(s), ve.forEach(s), ie.forEach(s), Te = o(it), Y = l(it, "DIV", {
                class: !0
            });
            var ce = d(Y);
            Z = l(ce, "DIV", {
                class: !0
            });
            var fe = d(Z);
            Et = l(fe, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(Et) !== "svelte-1pplwnw" && (Et.textContent = El), Ne = o(fe), Mt = l(fe, "P", {});
            var Kl = d(Mt);
            Re = _(Kl, bl), Kl.forEach(s), fe.forEach(s), ze = o(ce), $ = l(ce, "DIV", {
                class: !0
            });
            var ue = d($);
            bt = l(ue, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(bt) !== "svelte-p9ru4p" && (bt.textContent = ml), Le = o(ue), Ut = l(ue, "P", {});
            var Ql = d(Ut);
            Oe = _(Ql, Pl), Ql.forEach(s), ue.forEach(s), ce.forEach(s), Fe = o(it), Nt = l(it, "DIV", {
                class: !0
            });
            var Wl = d(Nt);
            tt = l(Wl, "DIV", {
                class: !0
            });
            var pe = d(tt);
            mt = l(pe, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(mt) !== "svelte-42rdhm" && (mt.textContent = Dl), Je = o(pe), Gt = l(pe, "P", {});
            var Xl = d(Gt);
            Me = _(Xl, Il), Xl.forEach(s), pe.forEach(s), Wl.forEach(s), it.forEach(s), Ue = o(C), Ge = l(C, "HR", {}), Ke = o(C), y = l(C, "DIV", {
                class: !0
            });
            var nt = d(y);
            Pt = l(nt, "H2", {
                class: !0,
                "data-svelte-h": !0
            }), c(Pt) !== "svelte-j4nqwe" && (Pt.textContent = Vl), Qe = o(nt), et = l(nt, "DIV", {
                class: !0
            });
            var _e = d(et);
            lt = l(_e, "DIV", {
                class: !0
            });
            var he = d(lt);
            Dt = l(he, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(Dt) !== "svelte-w93kxb" && (Dt.textContent = gl), We = o(he), Kt = l(he, "P", {});
            var Yl = d(Kt);
            Xe = _(Yl, wl), Yl.forEach(s), he.forEach(s), Ye = o(_e), st = l(_e, "DIV", {
                class: !0
            });
            var Ce = d(st);
            It = l(Ce, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(It) !== "svelte-r381zw" && (It.textContent = yl), Ze = o(Ce), Qt = l(Ce, "P", {});
            var Zl = d(Qt);
            $e = _(Zl, kl), Zl.forEach(s), Ce.forEach(s), _e.forEach(s), tl = o(nt), at = l(nt, "DIV", {
                class: !0
            });
            var xe = d(at);
            dt = l(xe, "DIV", {
                class: !0
            });
            var Ee = d(dt);
            Vt = l(Ee, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(Vt) !== "svelte-1uq3t3j" && (Vt.textContent = Al), el = o(Ee), Wt = l(Ee, "P", {});
            var $l = d(Wt);
            ll = _($l, jl), $l.forEach(s), Ee.forEach(s), sl = o(xe), rt = l(xe, "DIV", {
                class: !0
            });
            var be = d(rt);
            gt = l(be, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(gt) !== "svelte-1qt7lsq" && (gt.textContent = ql), al = o(be), Xt = l(be, "P", {});
            var ts = d(Xt);
            dl = _(ts, Hl), ts.forEach(s), be.forEach(s), xe.forEach(s), rl = o(nt), Rt = l(nt, "DIV", {
                class: !0
            });
            var es = d(Rt);
            ot = l(es, "DIV", {
                class: !0
            });
            var me = d(ot);
            wt = l(me, "P", {
                class: !0,
                "data-svelte-h": !0
            }), c(wt) !== "svelte-147op6p" && (wt.textContent = Bl), ol = o(me), Yt = l(me, "P", {});
            var ls = d(Yt);
            il = _(ls, Sl), ls.forEach(s), me.forEach(s), es.forEach(s), nt.forEach(s), C.forEach(s), Zt = o(D), O && O.l(D), $t = ss(), this.h()
        },
        h() {
            a(v, "class", "subtitle"), a(x, "class", "field-label"), a(P, "class", "field-group"), a(E, "class", "field-label"), a(V, "class", "field-group"), a(m, "class", "field-row"), a(b, "class", "field-label"), a(g, "class", "field-group"), a(H, "class", "field-row"), a(S, "class", "field-label"), a(u, "class", "field-group"), a(pt, "class", "field-label"), a(j, "class", "field-group"), a(h, "class", "field-row"), a(_t, "class", "field-label"), a(K, "class", "field-group"), a(Tt, "class", "field-row"), a(f, "class", "block"), a(ht, "class", "subtitle"), a(Ct, "class", "field-label"), a(W, "class", "field-group"), a(xt, "class", "field-label"), a(X, "class", "field-group"), a(Q, "class", "field-row"), a(Et, "class", "field-label"), a(Z, "class", "field-group"), a(bt, "class", "field-label"), a($, "class", "field-group"), a(Y, "class", "field-row"), a(mt, "class", "field-label"), a(tt, "class", "field-group"), a(Nt, "class", "field-row"), a(w, "class", "block"), a(Pt, "class", "subtitle"), a(Dt, "class", "field-label"), a(lt, "class", "field-group"), a(It, "class", "field-label"), a(st, "class", "field-group"), a(et, "class", "field-row"), a(Vt, "class", "field-label"), a(dt, "class", "field-group"), a(gt, "class", "field-label"), a(rt, "class", "field-group"), a(at, "class", "field-row"), a(wt, "class", "field-label"), a(ot, "class", "field-group"), a(Rt, "class", "field-row"), a(y, "class", "block"), a(n, "class", "blocks")
        },
        m(D, C) {
            zt(D, n, C), t(n, f), t(f, v), t(f, F), t(f, m), t(m, P), t(P, x), t(P, yt), t(P, R), t(R, kt), t(m, vt), t(m, V), t(V, E), t(V, A), t(V, M), t(M, z), t(f, jt), t(f, H), t(H, g), t(g, b), t(g, qt), t(g, L), t(L, Ht), t(f, ct), t(f, h), t(h, u), t(u, S), t(u, Bt), t(u, T), t(T, St), t(h, G), t(h, j), t(j, pt), t(j, Pe), t(j, Lt), t(Lt, De), t(f, Ie), t(f, Tt), t(Tt, K), t(K, _t), t(K, Ve), t(K, Ot), t(Ot, ge), t(n, we), t(n, ye), t(n, ke), t(n, w), t(w, ht), t(w, Ae), t(w, Q), t(Q, W), t(W, Ct), t(W, je), t(W, Ft), t(Ft, qe), t(Q, He), t(Q, X), t(X, xt), t(X, Be), t(X, Jt), t(Jt, Se), t(w, Te), t(w, Y), t(Y, Z), t(Z, Et), t(Z, Ne), t(Z, Mt), t(Mt, Re), t(Y, ze), t(Y, $), t($, bt), t($, Le), t($, Ut), t(Ut, Oe), t(w, Fe), t(w, Nt), t(Nt, tt), t(tt, mt), t(tt, Je), t(tt, Gt), t(Gt, Me), t(n, Ue), t(n, Ge), t(n, Ke), t(n, y), t(y, Pt), t(y, Qe), t(y, et), t(et, lt), t(lt, Dt), t(lt, We), t(lt, Kt), t(Kt, Xe), t(et, Ye), t(et, st), t(st, It), t(st, Ze), t(st, Qt), t(Qt, $e), t(y, tl), t(y, at), t(at, dt), t(dt, Vt), t(dt, el), t(dt, Wt), t(Wt, ll), t(at, sl), t(at, rt), t(rt, gt), t(rt, al), t(rt, Xt), t(Xt, dl), t(y, rl), t(y, Rt), t(Rt, ot), t(ot, wt), t(ot, ol), t(ot, Yt), t(Yt, il), zt(D, Zt, C), O && O.m(D, C), zt(D, $t, C)
        },
        p(D, [C]) {
            Tl && O.p(D, C)
        },
        i: nl,
        o: nl,
        d(D) {
            D && (s(n), s(Zt), s($t)), O && O.d(D)
        }
    }
}

function cs(i, n, f) {
    let {
        data: v
    } = n;
    const I = v.company.data;
    let F = v.user;
    return i.$$set = m => {
        "data" in m && f(2, v = m.data)
    }, [I, F, v]
}
class hs extends rs {
    constructor(n) {
        super(), os(this, n, cs, vs, ds, {
            data: 2
        })
    }
}
export {
    hs as component
};