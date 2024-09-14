import {
    r as c
} from "../chunks/index.DYMvb8Iz.js";
import {
    f as i
} from "../chunks/links.CXgoaKkn.js";
const p = async a => {
        var e, r, t;
        const o = (await a.parent()).user;
        ((e = o == null ? void 0 : o.company) == null ? void 0 : e.id) ? ? ((t = (r = o == null ? void 0 : o.delivery_service_provider) == null ? void 0 : r.company) == null || t.id);
        const n = i("/dashboard");
        c(301, n)
    },
    m = Object.freeze(Object.defineProperty({
        __proto__: null,
        load: p
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    m as universal
};