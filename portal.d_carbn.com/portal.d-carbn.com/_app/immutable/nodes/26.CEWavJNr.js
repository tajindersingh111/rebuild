import {
    s as f,
    y as p,
    z as _
} from "../chunks/scheduler.Bal8Y2GG.js";
import {
    S as d,
    i as u,
    f as g,
    c as y,
    a as b,
    m as h,
    t as $,
    b as S,
    e as k
} from "../chunks/index.BruxqCn-.js";
import {
    g as w
} from "../chunks/entry.B98oQIZ2.js";
import {
    C
} from "../chunks/companyForm.BvlDDvNc.js";
import {
    f as v
} from "../chunks/fetchClient.DtCbC4hg.js";
import {
    f as A
} from "../chunks/links.CXgoaKkn.js";
import {
    a as I,
    r as L
} from "../chunks/loading.CjNYnET0.js";

function P(t) {
    let r, e, n;

    function l(o) {
        t[4](o)
    }
    let i = {
        errors: t[1],
        error: t[2]
    };
    return t[0] !== void 0 && (i.fields = t[0]), r = new C({
        props: i
    }), p.push(() => g(r, "fields", l)), r.$on("submit", t[3]), {
        c() {
            y(r.$$.fragment)
        },
        l(o) {
            b(r.$$.fragment, o)
        },
        m(o, a) {
            h(r, o, a), n = !0
        },
        p(o, [a]) {
            const s = {};
            a & 2 && (s.errors = o[1]), a & 4 && (s.error = o[2]), !e && a & 1 && (e = !0, s.fields = o[0], _(() => e = !1)), r.$set(s)
        },
        i(o) {
            n || ($(r.$$.fragment, o), n = !0)
        },
        o(o) {
            S(r.$$.fragment, o), n = !1
        },
        d(o) {
            k(r, o)
        }
    }
}

function j(t, r, e) {
    let n = {
        name: "",
        main_contact_name: "",
        job_title: "",
        email: "",
        phone_number: "",
        address: "",
        address_line_1: "",
        town_or_city: "",
        postcode: "",
        county: "",
        billing_address: "",
        billing_address_line_1: "",
        billing_town_or_city: "",
        billing_postcode: "",
        billing_county: "",
        status: "Active"
    };
    const l = async () => {
        const s = "company:create";
        I(s), e(2, o = null), e(1, i = {}), (async () => {
            var c;
            const m = await v.POST("/v1/companies", {
                body: n
            });
            m.error ? (e(2, o = m.error.message), "errors" in m.error && e(1, i = (c = m.error) == null ? void 0 : c.errors)) : w(A("/companies/{companyId}", {
                companyId: m.data.data.id
            }), {
                invalidateAll: !0
            })
        })().finally(() => L(s))
    };
    let i = {},
        o = null;

    function a(s) {
        n = s, e(0, n)
    }
    return [n, i, o, l, a]
}
class B extends d {
    constructor(r) {
        super(), u(this, r, j, P, f, {})
    }
}
export {
    B as component
};