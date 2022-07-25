// Custom scripts
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (e.document) return t(e);
        throw new Error("jQuery requires a window with a document")
    } : t(e)
}("undefined" != typeof window ? window : this, function(w, $) {
    "use strict";

    function v(e) {
        return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
    }

    function g(e) {
        return null != e && e === e.window
    }
    var t = [],
        R = Object.getPrototypeOf,
        s = t.slice,
        M = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        I = t.push,
        W = t.indexOf,
        F = {},
        B = F.toString,
        _ = F.hasOwnProperty,
        z = _.toString,
        U = z.call(Object),
        m = {},
        T = w.document,
        X = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function V(e, t, n) {
        var r, o, i = (n = n || T).createElement("script");
        if (i.text = e, t)
            for (r in X)(o = t[r] || t.getAttribute && t.getAttribute(r)) && i.setAttribute(r, o);
        n.head.appendChild(i).parentNode.removeChild(i)
    }

    function h(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? F[B.call(e)] || "object" : typeof e
    }
    var e = "3.6.0",
        C = function(e, t) {
            return new C.fn.init(e, t)
        };

    function G(e) {
        var t = !!e && "length" in e && e.length,
            n = h(e);
        return !v(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: e,
        constructor: C,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = C.merge(this.constructor(), e);
            return e.prevObject = this, e
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(C.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(C.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: I,
        sort: t.sort,
        splice: t.splice
    }, C.extend = C.fn.extend = function() {
        var e, t, n, r, o, i = arguments[0] || {},
            a = 1,
            s = arguments.length,
            u = !1;
        for ("boolean" == typeof i && (u = i, i = arguments[a] || {}, a++), "object" == typeof i || v(i) || (i = {}), a === s && (i = this, a--); a < s; a++)
            if (null != (e = arguments[a]))
                for (t in e) n = e[t], "__proto__" !== t && i !== n && (u && n && (C.isPlainObject(n) || (r = Array.isArray(n))) ? (o = i[t], o = r && !Array.isArray(o) ? [] : r || C.isPlainObject(o) ? o : {}, r = !1, i[t] = C.extend(u, o, n)) : void 0 !== n && (i[t] = n));
        return i
    }, C.extend({
        expando: "jQuery" + (e + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== B.call(e)) && (!(e = R(e)) || "function" == typeof(e = _.call(e, "constructor") && e.constructor) && z.call(e) === U)
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            V(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (G(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (G(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : I.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : W.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++) e[o++] = t[r];
            return e.length = o, e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, a = !n; o < i; o++) !t(e[o], o) != a && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, i = 0,
                a = [];
            if (G(e))
                for (r = e.length; i < r; i++) null != (o = t(e[i], i, n)) && a.push(o);
            else
                for (i in e) null != (o = t(e[i], i, n)) && a.push(o);
            return M(a)
        },
        guid: 1,
        support: m
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        F["[object " + t + "]"] = t.toLowerCase()
    });

    function r(e, t, n) {
        for (var r = [], o = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (o && C(e).is(n)) break;
                r.push(e)
            } return r
    }

    function Y(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var e = function($) {
            function f(e, t) {
                return e = "0x" + e.slice(1) - 65536, t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode(e >> 10 | 55296, 1023 & e | 56320))
            }

            function R(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }

            function M() {
                T()
            }
            var e, p, b, i, I, d, W, F, w, u, l, T, C, n, E, h, r, o, g, S = "sizzle" + +new Date,
                c = $.document,
                k = 0,
                B = 0,
                _ = q(),
                z = q(),
                U = q(),
                m = q(),
                X = function(e, t) {
                    return e === t && (l = !0), 0
                },
                V = {}.hasOwnProperty,
                t = [],
                G = t.pop,
                Y = t.push,
                A = t.push,
                Q = t.slice,
                v = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t) return n;
                    return -1
                },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                a = "[\\x20\\t\\r\\n\\f]",
                s = "(?:\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                K = "\\[" + a + "*(" + s + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + s + "))|)" + a + "*\\]",
                Z = ":(" + s + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + K + ")*)|.*)\\)|)",
                ee = new RegExp(a + "+", "g"),
                y = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$", "g"),
                te = new RegExp("^" + a + "*," + a + "*"),
                ne = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"),
                re = new RegExp(a + "|>"),
                oe = new RegExp(Z),
                ie = new RegExp("^" + s + "$"),
                x = {
                    ID: new RegExp("^#(" + s + ")"),
                    CLASS: new RegExp("^\\.(" + s + ")"),
                    TAG: new RegExp("^(" + s + "|[*])"),
                    ATTR: new RegExp("^" + K),
                    PSEUDO: new RegExp("^" + Z),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + J + ")$", "i"),
                    needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)", "i")
                },
                ae = /HTML$/i,
                se = /^(?:input|select|textarea|button)$/i,
                ue = /^h\d$/i,
                D = /^[^{]+\{\s*\[native \w/,
                le = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ce = /[+~]/,
                N = new RegExp("\\\\[\\da-fA-F]{1,6}" + a + "?|\\\\([^\\r\\n\\f])", "g"),
                fe = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                pe = ve(function(e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                A.apply(t = Q.call(c.childNodes), c.childNodes), t[c.childNodes.length].nodeType
            } catch (e) {
                A = {
                    apply: t.length ? function(e, t) {
                        Y.apply(e, Q.call(t))
                    } : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++];);
                        e.length = n - 1
                    }
                }
            }

            function j(t, e, n, r) {
                var o, i, a, s, u, l, c = e && e.ownerDocument,
                    f = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
                if (!r && (T(e), e = e || C, E)) {
                    if (11 !== f && (s = le.exec(t)))
                        if (o = s[1]) {
                            if (9 === f) {
                                if (!(l = e.getElementById(o))) return n;
                                if (l.id === o) return n.push(l), n
                            } else if (c && (l = c.getElementById(o)) && g(e, l) && l.id === o) return n.push(l), n
                        } else {
                            if (s[2]) return A.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = s[3]) && p.getElementsByClassName && e.getElementsByClassName) return A.apply(n, e.getElementsByClassName(o)), n
                        } if (p.qsa && !m[t + " "] && (!h || !h.test(t)) && (1 !== f || "object" !== e.nodeName.toLowerCase())) {
                        if (l = t, c = e, 1 === f && (re.test(t) || ne.test(t))) {
                            for ((c = ce.test(t) && me(e.parentNode) || e) === e && p.scope || ((a = e.getAttribute("id")) ? a = a.replace(fe, R) : e.setAttribute("id", a = S)), i = (u = d(t)).length; i--;) u[i] = (a ? "#" + a : ":scope") + " " + P(u[i]);
                            l = u.join(",")
                        }
                        try {
                            return A.apply(n, c.querySelectorAll(l)), n
                        } catch (e) {
                            m(t, !0)
                        } finally {
                            a === S && e.removeAttribute("id")
                        }
                    }
                }
                return F(t.replace(y, "$1"), e, n, r)
            }

            function q() {
                var n = [];

                function r(e, t) {
                    return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
                }
                return r
            }

            function L(e) {
                return e[S] = !0, e
            }

            function H(e) {
                var t = C.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t)
                }
            }

            function de(e, t) {
                for (var n = e.split("|"), r = n.length; r--;) b.attrHandle[n[r]] = t
            }

            function he(e, t) {
                var n = t && e,
                    r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r) return r;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function ge(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && pe(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function O(a) {
                return L(function(i) {
                    return i = +i, L(function(e, t) {
                        for (var n, r = a([], e.length, i), o = r.length; o--;) e[n = r[o]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }

            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (e in p = j.support = {}, I = j.isXML = function(e) {
                    var t = e && e.namespaceURI,
                        e = e && (e.ownerDocument || e).documentElement;
                    return !ae.test(t || e && e.nodeName || "HTML")
                }, T = j.setDocument = function(e) {
                    var e = e ? e.ownerDocument || e : c;
                    return e != C && 9 === e.nodeType && e.documentElement && (n = (C = e).documentElement, E = !I(C), c != C && (e = C.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", M, !1) : e.attachEvent && e.attachEvent("onunload", M)), p.scope = H(function(e) {
                        return n.appendChild(e).appendChild(C.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                    }), p.attributes = H(function(e) {
                        return e.className = "i", !e.getAttribute("className")
                    }), p.getElementsByTagName = H(function(e) {
                        return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                    }), p.getElementsByClassName = D.test(C.getElementsByClassName), p.getById = H(function(e) {
                        return n.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                    }), p.getById ? (b.filter.ID = function(e) {
                        var t = e.replace(N, f);
                        return function(e) {
                            return e.getAttribute("id") === t
                        }
                    }, b.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && E) return (t = t.getElementById(e)) ? [t] : []
                    }) : (b.filter.ID = function(e) {
                        var t = e.replace(N, f);
                        return function(e) {
                            e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                            return e && e.value === t
                        }
                    }, b.find.ID = function(e, t) {
                        if (void 0 !== t.getElementById && E) {
                            var n, r, o, i = t.getElementById(e);
                            if (i) {
                                if ((n = i.getAttributeNode("id")) && n.value === e) return [i];
                                for (o = t.getElementsByName(e), r = 0; i = o[r++];)
                                    if ((n = i.getAttributeNode("id")) && n.value === e) return [i]
                            }
                            return []
                        }
                    }), b.find.TAG = p.getElementsByTagName ? function(e, t) {
                        return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                    } : function(e, t) {
                        var n, r = [],
                            o = 0,
                            i = t.getElementsByTagName(e);
                        if ("*" !== e) return i;
                        for (; n = i[o++];) 1 === n.nodeType && r.push(n);
                        return r
                    }, b.find.CLASS = p.getElementsByClassName && function(e, t) {
                        if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e)
                    }, r = [], h = [], (p.qsa = D.test(C.querySelectorAll)) && (H(function(e) {
                        var t;
                        n.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && h.push("[*^$]=" + a + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || h.push("\\[" + a + "*(?:value|" + J + ")"), e.querySelectorAll("[id~=" + S + "-]").length || h.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || h.push("\\[" + a + "*name" + a + "*=" + a + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || h.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || h.push(".#.+[+~]"), e.querySelectorAll("\\\f"), h.push("[\\r\\n\\f]")
                    }), H(function(e) {
                        e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var t = C.createElement("input");
                        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && h.push("name" + a + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && h.push(":enabled", ":disabled"), n.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
                    })), (p.matchesSelector = D.test(o = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && H(function(e) {
                        p.disconnectedMatch = o.call(e, "*"), o.call(e, "[s!='']:x"), r.push("!=", Z)
                    }), h = h.length && new RegExp(h.join("|")), r = r.length && new RegExp(r.join("|")), e = D.test(n.compareDocumentPosition), g = e || D.test(n.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            t = t && t.parentNode;
                        return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                    } : function(e, t) {
                        if (t)
                            for (; t = t.parentNode;)
                                if (t === e) return !0;
                        return !1
                    }, X = e ? function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == c && g(c, e) ? -1 : t == C || t.ownerDocument == c && g(c, t) ? 1 : u ? v(u, e) - v(u, t) : 0 : 4 & n ? -1 : 1)
                    } : function(e, t) {
                        if (e === t) return l = !0, 0;
                        var n, r = 0,
                            o = e.parentNode,
                            i = t.parentNode,
                            a = [e],
                            s = [t];
                        if (!o || !i) return e == C ? -1 : t == C ? 1 : o ? -1 : i ? 1 : u ? v(u, e) - v(u, t) : 0;
                        if (o === i) return he(e, t);
                        for (n = e; n = n.parentNode;) a.unshift(n);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? he(a[r], s[r]) : a[r] == c ? -1 : s[r] == c ? 1 : 0
                    }), C
                }, j.matches = function(e, t) {
                    return j(e, null, null, t)
                }, j.matchesSelector = function(e, t) {
                    if (T(e), p.matchesSelector && E && !m[t + " "] && (!r || !r.test(t)) && (!h || !h.test(t))) try {
                        var n = o.call(e, t);
                        if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                    } catch (e) {
                        m(t, !0)
                    }
                    return 0 < j(t, C, null, [e]).length
                }, j.contains = function(e, t) {
                    return (e.ownerDocument || e) != C && T(e), g(e, t)
                }, j.attr = function(e, t) {
                    (e.ownerDocument || e) != C && T(e);
                    var n = b.attrHandle[t.toLowerCase()],
                        n = n && V.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                    return void 0 !== n ? n : p.attributes || !E ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
                }, j.escape = function(e) {
                    return (e + "").replace(fe, R)
                }, j.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }, j.uniqueSort = function(e) {
                    var t, n = [],
                        r = 0,
                        o = 0;
                    if (l = !p.detectDuplicates, u = !p.sortStable && e.slice(0), e.sort(X), l) {
                        for (; t = e[o++];) t === e[o] && (r = n.push(o));
                        for (; r--;) e.splice(n[r], 1)
                    }
                    return u = null, e
                }, i = j.getText = function(e) {
                    var t, n = "",
                        r = 0,
                        o = e.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e)
                        } else if (3 === o || 4 === o) return e.nodeValue
                    } else
                        for (; t = e[r++];) n += i(t);
                    return n
                }, (b = j.selectors = {
                    cacheLength: 50,
                    createPseudo: L,
                    match: x,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(N, f), e[3] = (e[3] || e[4] || e[5] || "").replace(N, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || j.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && j.error(e[0]), e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            return x.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && oe.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(N, f).toLowerCase();
                            return "*" === e ? function() {
                                return !0
                            } : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = _[e + " "];
                            return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && _(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, n, r) {
                            return function(e) {
                                e = j.attr(e, t);
                                return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === r : "!=" === n ? e !== r : "^=" === n ? r && 0 === e.indexOf(r) : "*=" === n ? r && -1 < e.indexOf(r) : "$=" === n ? r && e.slice(-r.length) === r : "~=" === n ? -1 < (" " + e.replace(ee, " ") + " ").indexOf(r) : "|=" === n && (e === r || e.slice(0, r.length + 1) === r + "-"))
                            }
                        },
                        CHILD: function(h, e, t, g, m) {
                            var y = "nth" !== h.slice(0, 3),
                                v = "last" !== h.slice(-4),
                                x = "of-type" === e;
                            return 1 === g && 0 === m ? function(e) {
                                return !!e.parentNode
                            } : function(e, t, n) {
                                var r, o, i, a, s, u, l = y != v ? "nextSibling" : "previousSibling",
                                    c = e.parentNode,
                                    f = x && e.nodeName.toLowerCase(),
                                    p = !n && !x,
                                    d = !1;
                                if (c) {
                                    if (y) {
                                        for (; l;) {
                                            for (a = e; a = a[l];)
                                                if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                            u = l = "only" === h && !u && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (u = [v ? c.firstChild : c.lastChild], v && p) {
                                        for (d = (s = (r = (o = (i = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s]; a = ++s && a && a[l] || (d = s = 0) || u.pop();)
                                            if (1 === a.nodeType && ++d && a === e) {
                                                o[h] = [k, s, d];
                                                break
                                            }
                                    } else if (!1 === (d = p ? s = (r = (o = (i = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] || [])[0] === k && r[1] : d))
                                        for (;
                                            (a = ++s && a && a[l] || (d = s = 0) || u.pop()) && ((x ? a.nodeName.toLowerCase() !== f : 1 !== a.nodeType) || !++d || (p && ((o = (i = a[S] || (a[S] = {}))[a.uniqueID] || (i[a.uniqueID] = {}))[h] = [k, d]), a !== e)););
                                    return (d -= m) === g || d % g == 0 && 0 <= d / g
                                }
                            }
                        },
                        PSEUDO: function(e, i) {
                            var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || j.error("unsupported pseudo: " + e);
                            return a[S] ? a(i) : 1 < a.length ? (t = [e, e, "", i], b.setFilters.hasOwnProperty(e.toLowerCase()) ? L(function(e, t) {
                                for (var n, r = a(e, i), o = r.length; o--;) e[n = v(e, r[o])] = !(t[n] = r[o])
                            }) : function(e) {
                                return a(e, 0, t)
                            }) : a
                        }
                    },
                    pseudos: {
                        not: L(function(e) {
                            var r = [],
                                o = [],
                                s = W(e.replace(y, "$1"));
                            return s[S] ? L(function(e, t, n, r) {
                                for (var o, i = s(e, null, r, []), a = e.length; a--;)(o = i[a]) && (e[a] = !(t[a] = o))
                            }) : function(e, t, n) {
                                return r[0] = e, s(r, null, n, o), r[0] = null, !o.pop()
                            }
                        }),
                        has: L(function(t) {
                            return function(e) {
                                return 0 < j(t, e).length
                            }
                        }),
                        contains: L(function(t) {
                            return t = t.replace(N, f),
                                function(e) {
                                    return -1 < (e.textContent || i(e)).indexOf(t)
                                }
                        }),
                        lang: L(function(n) {
                            return ie.test(n || "") || j.error("unsupported lang: " + n), n = n.replace(N, f).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var t = $.location && $.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === n
                        },
                        focus: function(e) {
                            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if (e.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !b.pseudos.empty(e)
                        },
                        header: function(e) {
                            return ue.test(e.nodeName)
                        },
                        input: function(e) {
                            return se.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: O(function() {
                            return [0]
                        }),
                        last: O(function(e, t) {
                            return [t - 1]
                        }),
                        eq: O(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: O(function(e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e
                        }),
                        odd: O(function(e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e
                        }),
                        lt: O(function(e, t, n) {
                            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                            return e
                        }),
                        gt: O(function(e, t, n) {
                            for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                            return e
                        })
                    }
                }).pseudos.nth = b.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) b.pseudos[e] = function(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) b.pseudos[e] = function(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }(e);

            function ye() {}

            function P(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
                return r
            }

            function ve(a, e, t) {
                var s = e.dir,
                    u = e.next,
                    l = u || s,
                    c = t && "parentNode" === l,
                    f = B++;
                return e.first ? function(e, t, n) {
                    for (; e = e[s];)
                        if (1 === e.nodeType || c) return a(e, t, n);
                    return !1
                } : function(e, t, n) {
                    var r, o, i = [k, f];
                    if (n) {
                        for (; e = e[s];)
                            if ((1 === e.nodeType || c) && a(e, t, n)) return !0
                    } else
                        for (; e = e[s];)
                            if (1 === e.nodeType || c)
                                if (o = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), u && u === e.nodeName.toLowerCase()) e = e[s] || e;
                                else {
                                    if ((r = o[l]) && r[0] === k && r[1] === f) return i[2] = r[2];
                                    if ((o[l] = i)[2] = a(e, t, n)) return !0
                                } return !1
                }
            }

            function xe(o) {
                return 1 < o.length ? function(e, t, n) {
                    for (var r = o.length; r--;)
                        if (!o[r](e, t, n)) return !1;
                    return !0
                } : o[0]
            }

            function be(e, t, n, r, o) {
                for (var i, a = [], s = 0, u = e.length, l = null != t; s < u; s++) !(i = e[s]) || n && !n(i, r, o) || (a.push(i), l && t.push(s));
                return a
            }

            function we(d, h, g, m, y, e) {
                return m && !m[S] && (m = we(m)), y && !y[S] && (y = we(y, e)), L(function(e, t, n, r) {
                    var o, i, a, s = [],
                        u = [],
                        l = t.length,
                        c = e || function(e, t, n) {
                            for (var r = 0, o = t.length; r < o; r++) j(e, t[r], n);
                            return n
                        }(h || "*", n.nodeType ? [n] : n, []),
                        f = !d || !e && h ? c : be(c, s, d, n, r),
                        p = g ? y || (e ? d : l || m) ? [] : t : f;
                    if (g && g(f, p, n, r), m)
                        for (o = be(p, u), m(o, [], n, r), i = o.length; i--;)(a = o[i]) && (p[u[i]] = !(f[u[i]] = a));
                    if (e) {
                        if (y || d) {
                            if (y) {
                                for (o = [], i = p.length; i--;)(a = p[i]) && o.push(f[i] = a);
                                y(null, p = [], o, r)
                            }
                            for (i = p.length; i--;)(a = p[i]) && -1 < (o = y ? v(e, a) : s[i]) && (e[o] = !(t[o] = a))
                        }
                    } else p = be(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : A.apply(t, p)
                })
            }

            function Te(m, y) {
                function e(e, t, n, r, o) {
                    var i, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", o),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (o && (w = t == C || t || o); l !== g && null != (i = d[l]); l++) {
                        if (x && i) {
                            for (a = 0, t || i.ownerDocument == C || (T(i), n = !E); s = m[a++];)
                                if (s(i, t || C, n)) {
                                    r.push(i);
                                    break
                                } o && (k = h)
                        }
                        v && ((i = !s && i) && u--, e && c.push(i))
                    }
                    if (u += l, v && l !== u) {
                        for (a = 0; s = y[a++];) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                for (; l--;) c[l] || f[l] || (f[l] = G.call(r));
                            f = be(f)
                        }
                        A.apply(r, f), o && !e && 0 < f.length && 1 < u + y.length && j.uniqueSort(r)
                    }
                    return o && (k = h, w = p), c
                }
                var v = 0 < y.length,
                    x = 0 < m.length;
                return v ? L(e) : e
            }
            return ye.prototype = b.filters = b.pseudos, b.setFilters = new ye, d = j.tokenize = function(e, t) {
                var n, r, o, i, a, s, u, l = z[e + " "];
                if (l) return t ? 0 : l.slice(0);
                for (a = e, s = [], u = b.preFilter; a;) {
                    for (i in n && !(r = te.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(o = [])), n = !1, (r = ne.exec(a)) && (n = r.shift(), o.push({
                            value: n,
                            type: r[0].replace(y, " ")
                        }), a = a.slice(n.length)), b.filter) !(r = x[i].exec(a)) || u[i] && !(r = u[i](r)) || (n = r.shift(), o.push({
                        value: n,
                        type: i,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return t ? a.length : a ? j.error(e) : z(e, s).slice(0)
            }, W = j.compile = function(e, t) {
                var n, r = [],
                    o = [],
                    i = U[e + " "];
                if (!i) {
                    for (n = (t = t || d(e)).length; n--;)((i = function e(t) {
                        for (var r, n, o, i = t.length, a = b.relative[t[0].type], s = a || b.relative[" "], u = a ? 1 : 0, l = ve(function(e) {
                                return e === r
                            }, s, !0), c = ve(function(e) {
                                return -1 < v(r, e)
                            }, s, !0), f = [function(e, t, n) {
                                return e = !a && (n || t !== w) || ((r = t).nodeType ? l : c)(e, t, n), r = null, e
                            }]; u < i; u++)
                            if (n = b.relative[t[u].type]) f = [ve(xe(f), n)];
                            else {
                                if ((n = b.filter[t[u].type].apply(null, t[u].matches))[S]) {
                                    for (o = ++u; o < i && !b.relative[t[o].type]; o++);
                                    return we(1 < u && xe(f), 1 < u && P(t.slice(0, u - 1).concat({
                                        value: " " === t[u - 2].type ? "*" : ""
                                    })).replace(y, "$1"), n, u < o && e(t.slice(u, o)), o < i && e(t = t.slice(o)), o < i && P(t))
                                }
                                f.push(n)
                            } return xe(f)
                    }(t[n]))[S] ? r : o).push(i);
                    (i = U(e, Te(o, r))).selector = e
                }
                return i
            }, F = j.select = function(e, t, n, r) {
                var o, i, a, s, u, l = "function" == typeof e && e,
                    c = !r && d(e = l.selector || e);
                if (n = n || [], 1 === c.length) {
                    if (2 < (i = c[0] = c[0].slice(0)).length && "ID" === (a = i[0]).type && 9 === t.nodeType && E && b.relative[i[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(N, f), t) || [])[0])) return n;
                        l && (t = t.parentNode), e = e.slice(i.shift().value.length)
                    }
                    for (o = x.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !b.relative[s = a.type]);)
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(N, f), ce.test(i[0].type) && me(t.parentNode) || t))) {
                            if (i.splice(o, 1), e = r.length && P(i)) break;
                            return A.apply(n, r), n
                        }
                }
                return (l || W(e, c))(r, t, !E, n, !t || ce.test(e) && me(t.parentNode) || t), n
            }, p.sortStable = S.split("").sort(X).join("") === S, p.detectDuplicates = !!l, T(), p.sortDetached = H(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
            }), H(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || de("type|href|height|width", function(e, t, n) {
                if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), p.attributes && H(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || de("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
            }), H(function(e) {
                return null == e.getAttribute("disabled")
            }) || de(J, function(e, t, n) {
                if (!n) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }), j
        }(w),
        Q = (C.find = e, C.expr = e.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = e.uniqueSort, C.text = e.getText, C.isXMLDoc = e.isXML, C.contains = e.contains, C.escapeSelector = e.escape, C.expr.match.needsContext);

    function u(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var J = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function K(e, n, r) {
        return v(n) ? C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? C.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? C.grep(e, function(e) {
            return -1 < W.call(n, e) !== r
        }) : C.filter(n, e, r)
    }
    C.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? C.find.matchesSelector(r, e) ? [r] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                o = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (C.contains(o[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, o[t], n);
            return 1 < r ? C.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(K(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(K(this, e || [], !0))
        },
        is: function(e) {
            return !!K(this, "string" == typeof e && Q.test(e) ? C(e) : e || [], !1).length
        }
    });
    var Z, ee = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        te = ((C.fn.init = function(e, t, n) {
            if (!e) return this;
            if (n = n || Z, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : ee.exec(e)) || !r[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
            if (r[1]) {
                if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), J.test(r[1]) && C.isPlainObject(t))
                    for (var r in t) v(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (n = T.getElementById(r[2])) && (this[0] = n, this.length = 1), this
        }).prototype = C.fn, Z = C(T), /^(?:parents|prev(?:Until|All))/),
        ne = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function re(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                o = this.length,
                i = [],
                a = "string" != typeof e && C(e);
            if (!Q.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        } return this.pushStack(1 < i.length ? C.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? W.call(C(e), this[0]) : W.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return r(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return r(e, "parentNode", n)
        },
        next: function(e) {
            return re(e, "nextSibling")
        },
        prev: function(e) {
            return re(e, "previousSibling")
        },
        nextAll: function(e) {
            return r(e, "nextSibling")
        },
        prevAll: function(e) {
            return r(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return r(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return r(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Y((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Y(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && R(e.contentDocument) ? e.contentDocument : (u(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
        }
    }, function(r, o) {
        C.fn[r] = function(e, t) {
            var n = C.map(this, o, e);
            return (t = "Until" !== r.slice(-5) ? e : t) && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (ne[r] || C.uniqueSort(n), te.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var E = /[^\x20\t\r\n\f]+/g;

    function c(e) {
        return e
    }

    function oe(e) {
        throw e
    }

    function ie(e, t, n, r) {
        var o;
        try {
            e && v(o = e.promise) ? o.call(e).done(t).fail(n) : e && v(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    C.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, C.each(e.match(E) || [], function(e, t) {
            n[t] = !0
        }), n) : C.extend({}, r);

        function o() {
            for (s = s || r.once, a = i = !0; l.length; c = -1)
                for (t = l.shift(); ++c < u.length;) !1 === u[c].apply(t[0], t[1]) && r.stopOnFalse && (c = u.length, t = !1);
            r.memory || (t = !1), i = !1, s && (u = t ? [] : "")
        }
        var i, t, a, s, u = [],
            l = [],
            c = -1,
            f = {
                add: function() {
                    return u && (t && !i && (c = u.length - 1, l.push(t)), function n(e) {
                        C.each(e, function(e, t) {
                            v(t) ? r.unique && f.has(t) || u.push(t) : t && t.length && "string" !== h(t) && n(t)
                        })
                    }(arguments), t && !i && o()), this
                },
                remove: function() {
                    return C.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = C.inArray(t, u, n));) u.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < C.inArray(e, u) : 0 < u.length
                },
                empty: function() {
                    return u = u && [], this
                },
                disable: function() {
                    return s = l = [], u = t = "", this
                },
                disabled: function() {
                    return !u
                },
                lock: function() {
                    return s = l = [], t || i || (u = t = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), i || o()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return f
    }, C.extend({
        Deferred: function(e) {
            var i = [
                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                ],
                o = "pending",
                a = {
                    state: function() {
                        return o
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var o = arguments;
                        return C.Deferred(function(r) {
                            C.each(i, function(e, t) {
                                var n = v(o[t[4]]) && o[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && v(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(o, i, a, s) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(o < u)) {
                                        if ((e = a.apply(n, r)) === i.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, v(t) ? s ? t.call(e, l(u, i, c, s), l(u, i, oe, s)) : (u++, t.call(e, l(u, i, c, s), l(u, i, oe, s), l(u, i, c, i.notifyWith))) : (a !== c && (n = void 0, r = [e]), (s || i.resolveWith)(n, r))
                                    }
                                }
                                var n = this,
                                    r = arguments,
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), u <= o + 1 && (a !== oe && (n = void 0, r = [e]), i.rejectWith(n, r))
                                        }
                                    };
                                o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), w.setTimeout(t))
                            }
                        }
                        return C.Deferred(function(e) {
                            i[0][3].add(l(0, e, v(r) ? r : c, e.notifyWith)), i[1][3].add(l(0, e, v(t) ? t : c)), i[2][3].add(l(0, e, v(n) ? n : oe))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, a) : a
                    }
                },
                s = {};
            return C.each(i, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    o = r
                }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    o[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || a.resolveWith(o, i)
                }
            }
            var n = arguments.length,
                r = n,
                o = Array(r),
                i = s.call(arguments),
                a = C.Deferred();
            if (n <= 1 && (ie(e, a.done(t(r)).resolve, a.reject, !n), "pending" === a.state() || v(i[r] && i[r].then))) return a.then();
            for (; r--;) ie(i[r], t(r), a.reject);
            return a.promise()
        }
    });
    var ae = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/,
        se = (C.Deferred.exceptionHook = function(e, t) {
            w.console && w.console.warn && e && ae.test(e.name) && w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }, C.readyException = function(e) {
            w.setTimeout(function() {
                throw e
            })
        }, C.Deferred());

    function ue() {
        T.removeEventListener("DOMContentLoaded", ue), w.removeEventListener("load", ue), C.ready()
    }
    C.fn.ready = function(e) {
        return se.then(e).catch(function(e) {
            C.readyException(e)
        }), this
    }, C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0) !== e && 0 < --C.readyWait || se.resolveWith(T, [C])
        }
    }), C.ready.then = se.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? w.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", ue), w.addEventListener("load", ue));

    function f(e, t, n, r, o, i, a) {
        var s = 0,
            u = e.length,
            l = null == n;
        if ("object" === h(n))
            for (s in o = !0, n) f(e, t, s, n[s], !0, i, a);
        else if (void 0 !== r && (o = !0, v(r) || (a = !0), t = l ? a ? (t.call(e, r), null) : (l = t, function(e, t, n) {
                return l.call(C(e), n)
            }) : t))
            for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return o ? e : l ? t.call(e) : u ? t(e[0], n) : i
    }
    var le = /^-ms-/,
        ce = /-([a-z])/g;

    function fe(e, t) {
        return t.toUpperCase()
    }

    function x(e) {
        return e.replace(le, "ms-").replace(ce, fe)
    }

    function y(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function pe() {
        this.expando = C.expando + pe.uid++
    }
    pe.uid = 1, pe.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t) o[x(t)] = n;
            else
                for (r in t) o[x(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][x(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(x) : (t = x(t)) in r ? [t] : t.match(E) || []).length;
                    for (; n--;) delete r[t[n]]
                }
                void 0 !== t && !C.isEmptyObject(r) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !C.isEmptyObject(e)
        }
    };
    var b = new pe,
        l = new pe,
        de = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        he = /[A-Z]/g;

    function ge(e, t, n) {
        var r, o;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(he, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (o = n) || "false" !== o && ("null" === o ? null : o === +o + "" ? +o : de.test(o) ? JSON.parse(o) : o)
                } catch (e) {}
                l.set(e, t, n)
            } else n = void 0;
        return n
    }
    C.extend({
        hasData: function(e) {
            return l.hasData(e) || b.hasData(e)
        },
        data: function(e, t, n) {
            return l.access(e, t, n)
        },
        removeData: function(e, t) {
            l.remove(e, t)
        },
        _data: function(e, t, n) {
            return b.access(e, t, n)
        },
        _removeData: function(e, t) {
            b.remove(e, t)
        }
    }), C.fn.extend({
        data: function(n, e) {
            var t, r, o, i = this[0],
                a = i && i.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                l.set(this, n)
            }) : f(this, function(e) {
                var t;
                if (i && void 0 === e) return void 0 !== (t = l.get(i, n)) || void 0 !== (t = ge(i, n)) ? t : void 0;
                this.each(function() {
                    l.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (o = l.get(i), 1 === i.nodeType && !b.get(i, "hasDataAttrs"))) {
                for (t = a.length; t--;) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = x(r.slice(5)), ge(i, r, o[r]));
                b.set(i, "hasDataAttrs", !0)
            }
            return o
        },
        removeData: function(e) {
            return this.each(function() {
                l.remove(this, e)
            })
        }
    }), C.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return r = b.get(e, t = (t || "fx") + "queue"), n && (!r || Array.isArray(n) ? r = b.access(e, t, C.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
                r = n.length,
                o = n.shift(),
                i = C._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function() {
                C.dequeue(e, t)
            }, i)), !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return b.get(e, n) || b.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    b.remove(e, [t + "queue", n])
                })
            })
        }
    }), C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --o || i.resolveWith(a, [a])
            }
            var r, o = 1,
                i = C.Deferred(),
                a = this,
                s = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(r = b.get(a[s], e + "queueHooks")) && r.empty && (o++, r.empty.add(n));
            return n(), i.promise(t)
        }
    });

    function me(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && k(e) && "none" === C.css(e, "display")
    }
    var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ye = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$", "i"),
        p = ["Top", "Right", "Bottom", "Left"],
        S = T.documentElement,
        k = function(e) {
            return C.contains(e.ownerDocument, e)
        },
        ve = {
            composed: !0
        };
    S.getRootNode && (k = function(e) {
        return C.contains(e.ownerDocument, e) || e.getRootNode(ve) === e.ownerDocument
    });

    function xe(e, t, n, r) {
        var o, i, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return C.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (C.cssNumber[t] || "px" !== l && +u) && ye.exec(C.css(e, t));
        if (c && c[3] !== l) {
            for (l = l || c[3], c = +(u /= 2) || 1; a--;) C.style(e, t, c + l), (1 - i) * (1 - (i = s() / u || .5)) <= 0 && (a = 0), c /= i;
            C.style(e, t, (c *= 2) + l), n = n || []
        }
        return n && (c = +c || +u || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = o)), o
    }
    var be = {};

    function A(e, t) {
        for (var n, r, o, i, a, s = [], u = 0, l = e.length; u < l; u++)(r = e[u]).style && (n = r.style.display, t ? ("none" === n && (s[u] = b.get(r, "display") || null, s[u] || (r.style.display = "")), "" === r.style.display && me(r) && (s[u] = (a = i = void 0, i = (o = r).ownerDocument, o = o.nodeName, (a = be[o]) || (i = i.body.appendChild(i.createElement(o)), a = C.css(i, "display"), i.parentNode.removeChild(i), be[o] = a = "none" === a ? "block" : a)))) : "none" !== n && (s[u] = "none", b.set(r, "display", n)));
        for (u = 0; u < l; u++) null != s[u] && (e[u].style.display = s[u]);
        return e
    }
    C.fn.extend({
        show: function() {
            return A(this, !0)
        },
        hide: function() {
            return A(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                me(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var we = /^(?:checkbox|radio)$/i,
        Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        Ce = /^$|^module$|\/(?:java|ecma)script/i,
        D = (L = T.createDocumentFragment().appendChild(T.createElement("div")), (a = T.createElement("input")).setAttribute("type", "radio"), a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), L.appendChild(a), m.checkClone = L.cloneNode(!0).cloneNode(!0).lastChild.checked, L.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!L.cloneNode(!0).lastChild.defaultValue, L.innerHTML = "<option></option>", m.option = !!L.lastChild, {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        });

    function N(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && u(e, t) ? C.merge([e], n) : n
    }

    function Ee(e, t) {
        for (var n = 0, r = e.length; n < r; n++) b.set(e[n], "globalEval", !t || b.get(t[n], "globalEval"))
    }
    D.tbody = D.tfoot = D.colgroup = D.caption = D.thead, D.th = D.td, m.option || (D.optgroup = D.option = [1, "<select multiple='multiple'>", "</select>"]);
    var Se = /<|&#?\w+;/;

    function ke(e, t, n, r, o) {
        for (var i, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++)
            if ((i = e[p]) || 0 === i)
                if ("object" === h(i)) C.merge(f, i.nodeType ? [i] : i);
                else if (Se.test(i)) {
            for (a = a || c.appendChild(t.createElement("div")), s = (Te.exec(i) || ["", ""])[1].toLowerCase(), s = D[s] || D._default, a.innerHTML = s[1] + C.htmlPrefilter(i) + s[2], l = s[0]; l--;) a = a.lastChild;
            C.merge(f, a.childNodes), (a = c.firstChild).textContent = ""
        } else f.push(t.createTextNode(i));
        for (c.textContent = "", p = 0; i = f[p++];)
            if (r && -1 < C.inArray(i, r)) o && o.push(i);
            else if (u = k(i), a = N(c.appendChild(i), "script"), u && Ee(a), n)
            for (l = 0; i = a[l++];) Ce.test(i.type || "") && n.push(i);
        return c
    }
    var Ae = /^([^.]*)(?:\.(.+)|)/;

    function n() {
        return !0
    }

    function d() {
        return !1
    }

    function De(e, t) {
        return e === function() {
            try {
                return T.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ne(e, t, n, r, o, i) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ne(e, s, n, r, t[s], i);
            return e
        }
        if (null == r && null == o ? (o = n, r = n = void 0) : null == o && ("string" == typeof n ? (o = r, r = void 0) : (o = r, r = n, n = void 0)), !1 === o) o = d;
        else if (!o) return e;
        return 1 === i && (a = o, (o = function(e) {
            return C().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = C.guid++)), e.each(function() {
            C.event.add(this, t, o, r, n)
        })
    }

    function je(e, o, i) {
        i ? (b.set(e, o, !1), C.event.add(e, o, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = b.get(this, o);
                if (1 & e.isTrigger && this[o]) {
                    if (r.length)(C.event.special[o] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), b.set(this, o, r), t = i(this, o), this[o](), r !== (n = b.get(this, o)) || t ? b.set(this, o, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (b.set(this, o, {
                    value: C.event.trigger(C.extend(r[0], C.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === b.get(e, o) && C.event.add(e, o, n)
    }
    C.event = {
        global: {},
        add: function(t, e, n, r, o) {
            var i, a, s, u, l, c, f, p, d, h = b.get(t);
            if (y(t))
                for (n.handler && (n = (i = n).handler, o = i.selector), o && C.find.matchesSelector(S, o), n.guid || (n.guid = C.guid++), (s = h.events) || (s = h.events = Object.create(null)), (a = h.handle) || (a = h.handle = function(e) {
                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(E) || [""]).length; u--;) f = d = (p = Ae.exec(e[u]) || [])[1], p = (p[2] || "").split(".").sort(), f && (l = C.event.special[f] || {}, f = (o ? l.delegateType : l.bindType) || f, l = C.event.special[f] || {}, d = C.extend({
                    type: f,
                    origType: d,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && C.expr.match.needsContext.test(o),
                    namespace: p.join(".")
                }, i), (c = s[f]) || ((c = s[f] = []).delegateCount = 0, l.setup && !1 !== l.setup.call(t, r, p, a) || t.addEventListener && t.addEventListener(f, a)), l.add && (l.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? c.splice(c.delegateCount++, 0, d) : c.push(d), C.event.global[f] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, a, s, u, l, c, f, p, d, h, g, m = b.hasData(e) && b.get(e);
            if (m && (u = m.events)) {
                for (l = (t = (t || "").match(E) || [""]).length; l--;)
                    if (d = g = (s = Ae.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = C.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = p.length; i--;) c = p[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(i, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, m.handle) || C.removeEvent(e, d, m.handle), delete u[d])
                    } else
                        for (d in u) C.event.remove(e, d + t[l], n, r, !0);
                C.isEmptyObject(u) && b.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, a = new Array(arguments.length),
                s = C.event.fix(e),
                e = (b.get(this, "events") || Object.create(null))[s.type] || [],
                u = C.event.special[s.type] || {};
            for (a[0] = s, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (i = C.event.handlers.call(this, s, e), t = 0;
                    (r = i[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (o = ((C.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (s.result = o) && (s.preventDefault(), s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (i = [], a = {}, n = 0; n < u; n++) void 0 === a[o = (r = t[n]).selector + " "] && (a[o] = r.needsContext ? -1 < C(o, this).index(l) : C.find(o, this, null, [l]).length), a[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    } return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    e = this || e;
                    return we.test(e.type) && e.click && u(e, "input") && je(e, "click", n), !1
                },
                trigger: function(e) {
                    e = this || e;
                    return we.test(e.type) && e.click && u(e, "input") && je(e, "click"), !0
                },
                _default: function(e) {
                    e = e.target;
                    return we.test(e.type) && e.click && u(e, "input") && b.get(e, "click") || u(e, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, C.Event = function(e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? n : d, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = n, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = n, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = n, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, C.event.addProp), C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        C.event.special[e] = {
            setup: function() {
                return je(this, e, De), !1
            },
            trigger: function() {
                return je(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        C.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), C.fn.extend({
        on: function(e, t, n, r) {
            return Ne(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ne(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, C(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = d), this.each(function() {
                C.event.remove(this, e, n, t)
            });
            for (o in e) this.off(o, t, e[o]);
            return this
        }
    });
    var qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Oe(e, t) {
        return u(e, "table") && u(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function $e(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Re(e, t) {
        var n, r, o, i;
        if (1 === t.nodeType) {
            if (b.hasData(e) && (i = b.get(e).events))
                for (o in b.remove(t, "handle events"), i)
                    for (n = 0, r = i[o].length; n < r; n++) C.event.add(t, o, i[o][n]);
            l.hasData(e) && (e = l.access(e), e = C.extend({}, e), l.set(t, e))
        }
    }

    function j(n, r, o, i) {
        r = M(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = v(d);
        if (h || 1 < f && "string" == typeof d && !m.checkClone && Le.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), j(t, r, o, i)
        });
        if (f && (t = (e = ke(r, n[0].ownerDocument, !1, n, i)).firstChild, 1 === e.childNodes.length && (e = t), t || i)) {
            for (s = (a = C.map(N(e, "script"), Pe)).length; c < f; c++) u = e, c !== p && (u = C.clone(u, !0, !0), s && C.merge(a, N(u, "script"))), o.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, C.map(a, $e), c = 0; c < s; c++) u = a[c], Ce.test(u.type || "") && !b.access(u, "globalEval") && C.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? C._evalUrl && !u.noModule && C._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : V(u.textContent.replace(He, ""), u, l))
        }
        return n
    }

    function Me(e, t, n) {
        for (var r, o = t ? C.filter(t, e) : e, i = 0; null != (r = o[i]); i++) n || 1 !== r.nodeType || C.cleanData(N(r)), r.parentNode && (n && k(r) && Ee(N(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, o, i, a, s, u, l, c = e.cloneNode(!0),
                f = k(e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (a = N(c), r = 0, o = (i = N(e)).length; r < o; r++) s = i[r], u = a[r], l = void 0, "input" === (l = u.nodeName.toLowerCase()) && we.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (i = i || N(e), a = a || N(c), r = 0, o = i.length; r < o; r++) Re(i[r], a[r]);
                else Re(e, c);
            return 0 < (a = N(c, "script")).length && Ee(a, !f && N(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, o = C.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (y(n)) {
                    if (t = n[b.expando]) {
                        if (t.events)
                            for (r in t.events) o[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                        n[b.expando] = void 0
                    }
                    n[l.expando] && (n[l.expando] = void 0)
                }
        }
    }), C.fn.extend({
        detach: function(e) {
            return Me(this, e, !0)
        },
        remove: function(e) {
            return Me(this, e)
        },
        text: function(e) {
            return f(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return j(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Oe(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Oe(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(N(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return f(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !qe.test(e) && !D[(Te.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(N(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return j(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(N(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        C.fn[e] = function(e) {
            for (var t, n = [], r = C(e), o = r.length - 1, i = 0; i <= o; i++) t = i === o ? this : this.clone(!0), C(r[i])[a](t), I.apply(n, t.get());
            return this.pushStack(n)
        }
    });

    function Ie(e) {
        var t = e.ownerDocument.defaultView;
        return (t = t && t.opener ? t : w).getComputedStyle(e)
    }

    function We(e, t, n) {
        var r, o = {};
        for (r in t) o[r] = e.style[r], e.style[r] = t[r];
        for (r in n = n.call(e), t) e.style[r] = o[r];
        return n
    }
    var Fe, Be, _e, ze, Ue, Xe, Ve, o, Ge = new RegExp("^(" + e + ")(?!px)[a-z%]+$", "i"),
        Ye = new RegExp(p.join("|"), "i");

    function Qe() {
        var e;
        o && (Ve.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", o.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", S.appendChild(Ve).appendChild(o), e = w.getComputedStyle(o), Fe = "1%" !== e.top, Xe = 12 === Je(e.marginLeft), o.style.right = "60%", ze = 36 === Je(e.right), Be = 36 === Je(e.width), o.style.position = "absolute", _e = 12 === Je(o.offsetWidth / 3), S.removeChild(Ve), o = null)
    }

    function Je(e) {
        return Math.round(parseFloat(e))
    }

    function Ke(e, t, n) {
        var r, o, i = e.style;
        return (n = n || Ie(e)) && ("" !== (o = n.getPropertyValue(t) || n[t]) || k(e) || (o = C.style(e, t)), !m.pixelBoxStyles() && Ge.test(o) && Ye.test(t) && (e = i.width, t = i.minWidth, r = i.maxWidth, i.minWidth = i.maxWidth = i.width = o, o = n.width, i.width = e, i.minWidth = t, i.maxWidth = r)), void 0 !== o ? o + "" : o
    }

    function Ze(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Ve = T.createElement("div"), (o = T.createElement("div")).style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === o.style.backgroundClip, C.extend(m, {
        boxSizingReliable: function() {
            return Qe(), Be
        },
        pixelBoxStyles: function() {
            return Qe(), ze
        },
        pixelPosition: function() {
            return Qe(), Fe
        },
        reliableMarginLeft: function() {
            return Qe(), Xe
        },
        scrollboxSize: function() {
            return Qe(), _e
        },
        reliableTrDimensions: function() {
            var e, t, n;
            return null == Ue && (e = T.createElement("table"), t = T.createElement("tr"), n = T.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", S.appendChild(e).appendChild(t).appendChild(n), n = w.getComputedStyle(t), Ue = parseInt(n.height, 10) + parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10) === t.offsetHeight, S.removeChild(e)), Ue
        }
    }));
    var et = ["Webkit", "Moz", "ms"],
        tt = T.createElement("div").style,
        nt = {};

    function rt(e) {
        var t = C.cssProps[e] || nt[e];
        return t || (e in tt ? e : nt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
                if ((e = et[n] + t) in tt) return e
        }(e) || e)
    }
    var ot = /^(none|table(?!-c[ea]).+)/,
        it = /^--/,
        at = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        st = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function ut(e, t, n) {
        var r = ye.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function lt(e, t, n, r, o, i) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += C.css(e, n + p[a], !0, o)), r ? ("content" === n && (u -= C.css(e, "padding" + p[a], !0, o)), "margin" !== n && (u -= C.css(e, "border" + p[a] + "Width", !0, o))) : (u += C.css(e, "padding" + p[a], !0, o), "padding" !== n ? u += C.css(e, "border" + p[a] + "Width", !0, o) : s += C.css(e, "border" + p[a] + "Width", !0, o));
        return !r && 0 <= i && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - u - s - .5)) || 0), u
    }

    function ct(e, t, n) {
        var r = Ie(e),
            o = (!m.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, r),
            i = o,
            a = Ke(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Ge.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!m.boxSizingReliable() && o || !m.reliableTrDimensions() && u(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === C.css(e, "display", !1, r)) && e.getClientRects().length && (o = "border-box" === C.css(e, "boxSizing", !1, r), (i = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + lt(e, t, n || (o ? "border" : "content"), i, r, a) + "px"
    }

    function i(e, t, n, r, o) {
        return new i.prototype.init(e, t, n, r, o)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) return "" === (t = Ke(e, "opacity")) ? "1" : t
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, a, s = x(t),
                    u = it.test(t),
                    l = e.style;
                if (u || (t = rt(s)), a = C.cssHooks[t] || C.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t];
                "string" === (i = typeof n) && (o = ye.exec(n)) && o[1] && (n = xe(e, t, o), i = "number"), null != n && n == n && ("number" !== i || u || (n += o && o[3] || (C.cssNumber[s] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i = x(t);
            return it.test(t) || (t = rt(i)), "normal" === (o = void 0 === (o = (i = C.cssHooks[t] || C.cssHooks[i]) && "get" in i ? i.get(e, !0, n) : o) ? Ke(e, t, r) : o) && t in st && (o = st[t]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }), C.each(["height", "width"], function(e, a) {
        C.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !ot.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ct(e, a, n) : We(e, at, function() {
                    return ct(e, a, n)
                })
            },
            set: function(e, t, n) {
                var r = Ie(e),
                    o = !m.scrollboxSize() && "absolute" === r.position,
                    i = (o || n) && "border-box" === C.css(e, "boxSizing", !1, r),
                    n = n ? lt(e, a, n, i, r) : 0;
                return i && o && (n -= Math.ceil(e["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(r[a]) - lt(e, a, "border", !1, r) - .5)), n && (i = ye.exec(t)) && "px" !== (i[3] || "px") && (e.style[a] = t, t = C.css(e, a)), ut(0, t, n)
            }
        }
    }), C.cssHooks.marginLeft = Ze(m.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, i) {
        C.cssHooks[o + i] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + p[t] + i] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== o && (C.cssHooks[o + i].set = ut)
    }), C.fn.extend({
        css: function(e, t) {
            return f(this, function(e, t, n) {
                var r, o, i = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Ie(e), o = t.length; a < o; a++) i[t[a]] = C.css(e, t[a], !1, r);
                    return i
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((C.Tween = i).prototype = {
        constructor: i,
        init: function(e, t, n, r, o, i) {
            this.elem = e, this.prop = n, this.easing = o || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = i.propHooks[this.prop];
            return (e && e.get ? e : i.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = i.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : i.propHooks._default).set(this), this
        }
    }).init.prototype = i.prototype, (i.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[rt(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = i.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, C.fx = i.prototype.init, C.fx.step = {};
    var q, ft, a, L, pt = /^(?:toggle|show|hide)$/,
        dt = /queueHooks$/;

    function ht() {
        ft && (!1 === T.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(ht) : w.setTimeout(ht, C.fx.interval), C.fx.tick())
    }

    function gt() {
        return w.setTimeout(function() {
            q = void 0
        }), q = Date.now()
    }

    function mt(e, t) {
        var n, r = 0,
            o = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) o["margin" + (n = p[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o
    }

    function yt(e, t, n) {
        for (var r, o = (H.tweeners[t] || []).concat(H.tweeners["*"]), i = 0, a = o.length; i < a; i++)
            if (r = o[i].call(n, t, e)) return r
    }

    function H(o, e, t) {
        var n, i, r, a, s, u, l, c = 0,
            f = H.prefilters.length,
            p = C.Deferred().always(function() {
                delete d.elem
            }),
            d = function() {
                if (i) return !1;
                for (var e = q || gt(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, r = h.tweens.length; n < r; n++) h.tweens[n].run(t);
                return p.notifyWith(o, [h, t, e]), t < 1 && r ? e : (r || p.notifyWith(o, [h, 1, 0]), p.resolveWith(o, [h]), !1)
            },
            h = p.promise({
                elem: o,
                props: C.extend({}, e),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: q || gt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    t = C.Tween(o, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(t), t
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? h.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; t < n; t++) h.tweens[t].run(1);
                    return e ? (p.notifyWith(o, [h, 1, 0]), p.resolveWith(o, [h, e])) : p.rejectWith(o, [h, e]), this
                }
            }),
            g = h.props,
            m = g,
            y = h.opts.specialEasing;
        for (r in m)
            if (s = y[a = x(r)], u = m[r], Array.isArray(u) && (s = u[1], u = m[r] = u[0]), r !== a && (m[a] = u, delete m[r]), (l = C.cssHooks[a]) && "expand" in l)
                for (r in u = l.expand(u), delete m[a], u) r in m || (m[r] = u[r], y[r] = s);
            else y[a] = s;
        for (; c < f; c++)
            if (n = H.prefilters[c].call(h, o, g, h.opts)) return v(n.stop) && (C._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(g, yt, h), v(h.opts.start) && h.opts.start.call(o, h), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always), C.fx.timer(C.extend(d, {
            elem: o,
            anim: h,
            queue: h.opts.queue
        })), h
    }
    C.Animation = C.extend(H, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return xe(n.elem, e, ye.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, r = 0, o = (e = v(e) ? (t = e, ["*"]) : e.match(E)).length; r < o; r++) n = e[r], H.tweeners[n] = H.tweeners[n] || [], H.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, o, i, a, s, u, l, c = "width" in t || "height" in t,
                f = this,
                p = {},
                d = e.style,
                h = e.nodeType && me(e),
                g = b.get(e, "fxshow");
            for (r in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, f.always(function() {
                    f.always(function() {
                        a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (o = t[r], pt.test(o)) {
                    if (delete t[r], i = i || "toggle" === o, o === (h ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[r]) continue;
                        h = !0
                    }
                    p[r] = g && g[r] || C.style(e, r)
                } if ((u = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                for (r in c && 1 === e.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (l = g && g.display) && (l = b.get(e, "display")), "none" === (c = C.css(e, "display")) && (l ? c = l : (A([e], !0), l = e.style.display || l, c = C.css(e, "display"), A([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === C.css(e, "float") && (u || (f.done(function() {
                        d.display = l
                    }), null == l && (c = d.display, l = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function() {
                        d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                    })), u = !1, p) u || (g ? "hidden" in g && (h = g.hidden) : g = b.access(e, "fxshow", {
                    display: l
                }), i && (g.hidden = !h), h && A([e], !0), f.done(function() {
                    for (r in h || A([e]), b.remove(e, "fxshow"), p) C.style(e, r, p[r])
                })), u = yt(h ? g[r] : 0, r, f), r in g || (g[r] = u.start, h && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? H.prefilters.unshift(e) : H.prefilters.push(e)
        }
    }), C.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || v(e) && e,
            duration: e,
            easing: n && t || t && !v(t) && t
        };
        return C.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in C.fx.speeds ? r.duration = C.fx.speeds[r.duration] : r.duration = C.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            v(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue)
        }, r
    }, C.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(me).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            function o() {
                var e = H(this, C.extend({}, t), a);
                (i || b.get(this, "finish")) && e.stop(!0)
            }
            var i = C.isEmptyObject(t),
                a = C.speed(e, n, r);
            return o.finish = o, i || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(o, e, i) {
            function a(e) {
                var t = e.stop;
                delete e.stop, t(i)
            }
            return "string" != typeof o && (i = e, e = o, o = void 0), e && this.queue(o || "fx", []), this.each(function() {
                var e = !0,
                    t = null != o && o + "queueHooks",
                    n = C.timers,
                    r = b.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && dt.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != o && n[t].queue !== o || (n[t].anim.stop(i), e = !1, n.splice(t, 1));
                !e && i || C.dequeue(this, o)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = b.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    o = C.timers,
                    i = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === a && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < i; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function(e, r) {
        var o = C.fn[r];
        C.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(mt(r, !0), e, t, n)
        }
    }), C.each({
        slideDown: mt("show"),
        slideUp: mt("hide"),
        slideToggle: mt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        C.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), C.timers = [], C.fx.tick = function() {
        var e, t = 0,
            n = C.timers;
        for (q = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), q = void 0
    }, C.fx.timer = function(e) {
        C.timers.push(e), C.fx.start()
    }, C.fx.interval = 13, C.fx.start = function() {
        ft || (ft = !0, ht())
    }, C.fx.stop = function() {
        ft = null
    }, C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, C.fn.delay = function(r, e) {
        return r = C.fx && C.fx.speeds[r] || r, this.queue(e = e || "fx", function(e, t) {
            var n = w.setTimeout(e, r);
            t.stop = function() {
                w.clearTimeout(n)
            }
        })
    }, a = T.createElement("input"), L = T.createElement("select").appendChild(T.createElement("option")), a.type = "checkbox", m.checkOn = "" !== a.value, m.optSelected = L.selected, (a = T.createElement("input")).value = "t", a.type = "radio", m.radioValue = "t" === a.value;
    var vt, xt = C.expr.attrHandle,
        bt = (C.fn.extend({
            attr: function(e, t) {
                return f(this, C.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    C.removeAttr(this, e)
                })
            }
        }), C.extend({
            attr: function(e, t, n) {
                var r, o, i = e.nodeType;
                if (3 !== i && 8 !== i && 2 !== i) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === i && C.isXMLDoc(e) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? vt : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : !(o && "get" in o && null !== (r = o.get(e, t))) && null == (r = C.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        var n;
                        if (!m.radioValue && "radio" === t && u(e, "input")) return n = e.value, e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0,
                    o = t && t.match(E);
                if (o && 1 === e.nodeType)
                    for (; n = o[r++];) e.removeAttribute(n)
            }
        }), vt = {
            set: function(e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
            }
        }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = xt[t] || C.find.attr;
            xt[t] = function(e, t, n) {
                var r, o, i = t.toLowerCase();
                return n || (o = xt[i], xt[i] = r, r = null != a(e, t, n) ? i : null, xt[i] = o), r
            }
        }), /^(?:input|select|textarea|button)$/i),
        wt = /^(?:a|area)$/i;

    function O(e) {
        return (e.match(E) || []).join(" ")
    }

    function P(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Tt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(E) || []
    }
    C.fn.extend({
        prop: function(e, t) {
            return f(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }), C.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i) return 1 === i && C.isXMLDoc(e) || (t = C.propFix[t] || t, o = C.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : bt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (C.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }), C.fn.extend({
        addClass: function(t) {
            var e, n, r, o, i, a, s = 0;
            if (v(t)) return this.each(function(e) {
                C(this).addClass(t.call(this, e, P(this)))
            });
            if ((e = Tt(t)).length)
                for (; n = this[s++];)
                    if (a = P(n), r = 1 === n.nodeType && " " + O(a) + " ") {
                        for (i = 0; o = e[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a !== (a = O(r)) && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(t) {
            var e, n, r, o, i, a, s = 0;
            if (v(t)) return this.each(function(e) {
                C(this).removeClass(t.call(this, e, P(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = Tt(t)).length)
                for (; n = this[s++];)
                    if (a = P(n), r = 1 === n.nodeType && " " + O(a) + " ") {
                        for (i = 0; o = e[i++];)
                            for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                        a !== (a = O(r)) && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(o, t) {
            var i = typeof o,
                a = "string" == i || Array.isArray(o);
            return "boolean" == typeof t && a ? t ? this.addClass(o) : this.removeClass(o) : v(o) ? this.each(function(e) {
                C(this).toggleClass(o.call(this, e, P(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a)
                    for (t = 0, n = C(this), r = Tt(o); e = r[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== o && "boolean" != i || ((e = P(this)) && b.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== o && b.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, r = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + O(P(t)) + " ").indexOf(r)) return !0;
            return !1
        }
    });

    function Ct(e) {
        e.stopPropagation()
    }
    var Et = /\r/g,
        St = (C.fn.extend({
            val: function(t) {
                var n, e, r, o = this[0];
                return arguments.length ? (r = v(t), this.each(function(e) {
                    1 === this.nodeType && (null == (e = r ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function(e) {
                        return null == e ? "" : e + ""
                    })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
                })) : o ? (n = C.valHooks[o.type] || C.valHooks[o.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(o, "value")) ? e : "string" == typeof(e = o.value) ? e.replace(Et, "") : null == e ? "" : e : void 0
            }
        }), C.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : O(C.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n = e.options, r = e.selectedIndex, o = "select-one" === e.type, i = o ? null : [], a = o ? r + 1 : n.length, s = r < 0 ? a : o ? r : 0; s < a; s++)
                            if (((t = n[s]).selected || s === r) && !t.disabled && (!t.parentNode.disabled || !u(t.parentNode, "optgroup"))) {
                                if (t = C(t).val(), o) return t;
                                i.push(t)
                            } return i
                    },
                    set: function(e, t) {
                        for (var n, r, o = e.options, i = C.makeArray(t), a = o.length; a--;)((r = o[a]).selected = -1 < C.inArray(C.valHooks.option.get(r), i)) && (n = !0);
                        return n || (e.selectedIndex = -1), i
                    }
                }
            }
        }), C.each(["radio", "checkbox"], function() {
            C.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
                }
            }, m.checkOn || (C.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        }), m.focusin = "onfocusin" in w, /^(?:focusinfocus|focusoutblur)$/),
        kt = (C.extend(C.event, {
            trigger: function(e, t, n, r) {
                var o, i, a, s, u, l, c, f = [n || T],
                    p = _.call(e, "type") ? e.type : e,
                    d = _.call(e, "namespace") ? e.namespace.split(".") : [],
                    h = c = i = n = n || T;
                if (3 !== n.nodeType && 8 !== n.nodeType && !St.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), s = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), l = C.event.special[p] || {}, r || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                    if (!r && !l.noBubble && !g(n)) {
                        for (a = l.delegateType || p, St.test(a + p) || (h = h.parentNode); h; h = h.parentNode) f.push(h), i = h;
                        i === (n.ownerDocument || T) && f.push(i.defaultView || i.parentWindow || w)
                    }
                    for (o = 0;
                        (h = f[o++]) && !e.isPropagationStopped();) c = h, e.type = 1 < o ? a : l.bindType || p, (u = (b.get(h, "events") || Object.create(null))[e.type] && b.get(h, "handle")) && u.apply(h, t), (u = s && h[s]) && u.apply && y(h) && (e.result = u.apply(h, t), !1 === e.result && e.preventDefault());
                    return e.type = p, r || e.isDefaultPrevented() || l._default && !1 !== l._default.apply(f.pop(), t) || !y(n) || s && v(n[p]) && !g(n) && ((i = n[s]) && (n[s] = null), C.event.triggered = p, e.isPropagationStopped() && c.addEventListener(p, Ct), n[p](), e.isPropagationStopped() && c.removeEventListener(p, Ct), C.event.triggered = void 0, i && (n[s] = i)), e.result
                }
            },
            simulate: function(e, t, n) {
                n = C.extend(new C.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                C.event.trigger(n, null, t)
            }
        }), C.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    C.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0)
            }
        }), m.focusin || C.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            function o(e) {
                C.event.simulate(r, e.target, C.event.fix(e))
            }
            C.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = b.access(e, r);
                    t || e.addEventListener(n, o, !0), b.access(e, r, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this.document || this,
                        t = b.access(e, r) - 1;
                    t ? b.access(e, r, t) : (e.removeEventListener(n, o, !0), b.remove(e, r))
                }
            }
        }), w.location),
        At = {
            guid: Date.now()
        },
        Dt = /\?/,
        Nt = (C.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
                t = (new w.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {}
            return n = t && t.getElementsByTagName("parsererror")[0], t && !n || C.error("Invalid XML: " + (n ? C.map(n.childNodes, function(e) {
                return e.textContent
            }).join("\n") : e)), t
        }, /\[\]$/),
        jt = /\r?\n/g,
        qt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;
    C.param = function(e, t) {
        function n(e, t) {
            t = v(t) ? t() : t, o[o.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var r, o = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (r in e) ! function n(r, e, o, i) {
                if (Array.isArray(e)) C.each(e, function(e, t) {
                    o || Nt.test(r) ? i(r, t) : n(r + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, o, i)
                });
                else if (o || "object" !== h(e)) i(r, e);
                else
                    for (var t in e) n(r + "[" + t + "]", e[t], o, i)
            }(r, e[r], t, n);
        return o.join("&")
    }, C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && Lt.test(this.nodeName) && !qt.test(e) && (this.checked || !we.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(jt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(jt, "\r\n")
                }
            }).get()
        }
    });
    var Ht = /%20/g,
        Ot = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        $t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        It = {},
        Wt = {},
        Ft = "*/".concat("*"),
        Bt = T.createElement("a");

    function _t(i) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                o = e.toLowerCase().match(E) || [];
            if (v(t))
                for (; n = o[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (i[n] = i[n] || []).unshift(t)) : (i[n] = i[n] || []).push(t)
        }
    }

    function zt(t, r, o, i) {
        var a = {},
            s = t === Wt;

        function u(e) {
            var n;
            return a[e] = !0, C.each(t[e] || [], function(e, t) {
                t = t(r, o, i);
                return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (r.dataTypes.unshift(t), u(t), !1)
            }), n
        }
        return u(r.dataTypes[0]) || !a["*"] && u("*")
    }

    function Ut(e, t) {
        var n, r, o = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : r = r || {})[n] = t[n]);
        return r && C.extend(!0, e, r), e
    }
    Bt.href = kt.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: kt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ut(Ut(e, C.ajaxSettings), t) : Ut(C.ajaxSettings, e)
        },
        ajaxPrefilter: _t(It),
        ajaxTransport: _t(Wt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0);
            var u, l, c, n, f, p, d, r, h = C.ajaxSetup({}, t = t || {}),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? C(g) : C.event,
                y = C.Deferred(),
                v = C.Callbacks("once memory"),
                x = h.statusCode || {},
                o = {},
                i = {},
                a = "canceled",
                b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = $t.exec(c);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return p ? c : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = i[e.toLowerCase()] = i[e.toLowerCase()] || e, o[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (p) b.always(e[b.status]);
                            else
                                for (var t in e) x[t] = [x[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        e = e || a;
                        return u && u.abort(e), s(0, e), this
                    }
                };
            if (y.promise(b), h.url = ((e || h.url || kt.href) + "").replace(Mt, kt.protocol + "//"), h.type = t.method || t.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(E) || [""], null == h.crossDomain) {
                e = T.createElement("a");
                try {
                    e.href = h.url, e.href = e.href, h.crossDomain = Bt.protocol + "//" + Bt.host != e.protocol + "//" + e.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = C.param(h.data, h.traditional)), zt(It, h, t, b), p) return b;
            for (r in (d = C.event && h.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Rt.test(h.type), l = h.url.replace(Ot, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ht, "+")) : (e = h.url.slice(l.length), h.data && (h.processData || "string" == typeof h.data) && (l += (Dt.test(l) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (l = l.replace(Pt, "$1"), e = (Dt.test(l) ? "&" : "?") + "_=" + At.guid++ + e), h.url = l + e), h.ifModified && (C.lastModified[l] && b.setRequestHeader("If-Modified-Since", C.lastModified[l]), C.etag[l] && b.setRequestHeader("If-None-Match", C.etag[l])), (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType), b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]), h.headers) b.setRequestHeader(r, h.headers[r]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, b, h) || p)) return b.abort();
            if (a = "abort", v.add(h.complete), b.done(h.success), b.fail(h.error), u = zt(Wt, h, t, b)) {
                if (b.readyState = 1, d && m.trigger("ajaxSend", [b, h]), p) return b;
                h.async && 0 < h.timeout && (f = w.setTimeout(function() {
                    b.abort("timeout")
                }, h.timeout));
                try {
                    p = !1, u.send(o, s)
                } catch (e) {
                    if (p) throw e;
                    s(-1, e)
                }
            } else s(-1, "No Transport");

            function s(e, t, n, r) {
                var o, i, a, s = t;
                p || (p = !0, f && w.clearTimeout(f), u = void 0, c = r || "", b.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var r, o, i, a, s = e.contents, u = e.dataTypes;
                        "*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in s)
                            if (s[o] && s[o].test(r)) {
                                u.unshift(o);
                                break
                            } if (u[0] in n) i = u[0];
                    else {
                        for (o in n) {
                            if (!u[0] || e.converters[o + " " + u[0]]) {
                                i = o;
                                break
                            }
                            a = a || o
                        }
                        i = i || a
                    }
                    if (i) return i !== u[0] && u.unshift(i), n[i]
                }(h, b, n)), !r && -1 < C.inArray("script", h.dataTypes) && C.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), a = function(e, t, n, r) {
                    var o, i, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (i = c.shift(); i;)
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = i, i = c.shift())
                            if ("*" === i) i = u;
                            else if ("*" !== u && u !== i) {
                        if (!(a = l[u + " " + i] || l["* " + i]))
                            for (o in l)
                                if ((s = o.split(" "))[1] === i && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[o] : !0 !== l[o] && (i = s[0], c.unshift(s[1]));
                                    break
                                } if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + i
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, a, b, r), r ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (C.lastModified[l] = n), (n = b.getResponseHeader("etag")) && (C.etag[l] = n)), 204 === e || "HEAD" === h.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state, o = a.data, r = !(i = a.error))) : (i = s, !e && s || (s = "error", e < 0 && (e = 0))), b.status = e, b.statusText = (t || s) + "", r ? y.resolveWith(g, [o, s, b]) : y.rejectWith(g, [b, s, i]), b.statusCode(x), x = void 0, d && m.trigger(r ? "ajaxSuccess" : "ajaxError", [b, h, r ? o : i]), v.fireWith(g, [b, s]), d && (m.trigger("ajaxComplete", [b, h]), --C.active || C.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function(e, o) {
        C[o] = function(e, t, n, r) {
            return v(t) && (r = r || n, n = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: o,
                dataType: r,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }), C.ajaxPrefilter(function(e) {
        for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), C._evalUrl = function(e, t, n) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                C.globalEval(e, t, n)
            }
        })
    }, C.fn.extend({
        wrapAll: function(e) {
            return this[0] && (v(e) && (e = e.call(this[0])), e = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return v(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = v(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }), this
        }
    }), C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }, C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, C.ajaxSettings.xhr = function() {
        try {
            return new w.XMLHttpRequest
        } catch (e) {}
    };
    var Xt = {
            0: 200,
            1223: 204
        },
        Vt = C.ajaxSettings.xhr(),
        Gt = (m.cors = !!Vt && "withCredentials" in Vt, m.ajax = Vt = !!Vt, C.ajaxTransport(function(o) {
            var i, a;
            if (m.cors || Vt && !o.crossDomain) return {
                send: function(e, t) {
                    var n, r = o.xhr();
                    if (r.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)
                        for (n in o.xhrFields) r[n] = o.xhrFields[n];
                    for (n in o.mimeType && r.overrideMimeType && r.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                    i = function(e) {
                        return function() {
                            i && (i = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Xt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = i(), a = r.onerror = r.ontimeout = i("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                        4 === r.readyState && w.setTimeout(function() {
                            i && a()
                        })
                    }, i = i("abort");
                    try {
                        r.send(o.hasContent && o.data || null)
                    } catch (e) {
                        if (i) throw e
                    }
                },
                abort: function() {
                    i && i()
                }
            }
        }), C.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }), C.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return C.globalEval(e), e
                }
            }
        }), C.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
        }), C.ajaxTransport("script", function(n) {
            var r, o;
            if (n.crossDomain || n.scriptAttrs) return {
                send: function(e, t) {
                    r = C("<script>").attr(n.scriptAttrs || {}).prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", o = function(e) {
                        r.remove(), o = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), T.head.appendChild(r[0])
                },
                abort: function() {
                    o && o()
                }
            }
        }), []),
        Yt = /(=)\?(?=&|$)|\?\?/,
        Qt = (C.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Gt.pop() || C.expando + "_" + At.guid++;
                return this[e] = !0, e
            }
        }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, o, i, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + r) : !1 !== e.jsonp && (e.url += (Dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return i || C.error(r + " was not called"), i[0]
            }, e.dataTypes[0] = "json", o = w[r], w[r] = function() {
                i = arguments
            }, n.always(function() {
                void 0 === o ? C(w).removeProp(r) : w[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Gt.push(r)), i && v(o) && o(i[0]), i = o = void 0
            }), "script"
        }), m.createHTMLDocument = ((e = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === e.childNodes.length), C.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((r = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(r)) : t = T), r = !n && [], (n = J.exec(e)) ? [t.createElement(n[1])] : (n = ke([e], t, r), r && r.length && C(r).remove(), C.merge([], n.childNodes)));
            var r
        }, C.fn.load = function(e, t, n) {
            var r, o, i, a = this,
                s = e.indexOf(" ");
            return -1 < s && (r = O(e.slice(s)), e = e.slice(0, s)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && C.ajax({
                url: e,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                i = arguments, a.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, i || [e.responseText, t, e])
                })
            }), this
        }, C.expr.pseudos.animated = function(t) {
            return C.grep(C.timers, function(e) {
                return t === e.elem
            }).length
        }, C.offset = {
            setOffset: function(e, t, n) {
                var r, o, i, a, s = C.css(e, "position"),
                    u = C(e),
                    l = {};
                "static" === s && (e.style.position = "relative"), i = u.offset(), r = C.css(e, "top"), a = C.css(e, "left"), s = ("absolute" === s || "fixed" === s) && -1 < (r + a).indexOf("auto") ? (o = (s = u.position()).top, s.left) : (o = parseFloat(r) || 0, parseFloat(a) || 0), null != (t = v(t) ? t.call(e, n, C.extend({}, i)) : t).top && (l.top = t.top - i.top + o), null != t.left && (l.left = t.left - i.left + s), "using" in t ? t.using.call(e, l) : u.css(l)
            }
        }, C.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    C.offset.setOffset(this, t, e)
                });
                var e, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0],
                        o = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === C.css(r, "position")) t = r.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0), o.left += C.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - o.top - C.css(r, "marginTop", !0),
                        left: t.left - o.left - C.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                    return e || S
                })
            }
        }), C.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, o) {
            var i = "pageYOffset" === o;
            C.fn[t] = function(e) {
                return f(this, function(e, t, n) {
                    var r;
                    if (g(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[o] : e[t];
                    r ? r.scrollTo(i ? r.pageXOffset : n, i ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }), C.each(["top", "left"], function(e, n) {
            C.cssHooks[n] = Ze(m.pixelPosition, function(e, t) {
                if (t) return t = Ke(e, n), Ge.test(t) ? C(e).position()[n] + "px" : t
            })
        }), C.each({
            Height: "height",
            Width: "width"
        }, function(a, s) {
            C.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function(r, i) {
                C.fn[i] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e),
                        o = r || (!0 === e || !0 === t ? "margin" : "border");
                    return f(this, function(e, t, n) {
                        var r;
                        return g(e) ? 0 === i.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? C.css(e, t, o) : C.style(e, t, n, o)
                    }, s, n ? e : void 0, n)
                }
            })
        }), C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            C.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), C.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            C.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }), /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g),
        Jt = (C.proxy = function(e, t) {
            var n, r;
            if ("string" == typeof t && (r = e[t], t = e, e = r), v(e)) return n = s.call(arguments, 2), (r = function() {
                return e.apply(t || this, n.concat(s.call(arguments)))
            }).guid = e.guid = e.guid || C.guid++, r
        }, C.holdReady = function(e) {
            e ? C.readyWait++ : C.ready(!0)
        }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = u, C.isFunction = v, C.isWindow = g, C.camelCase = x, C.type = h, C.now = Date.now, C.isNumeric = function(e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }, C.trim = function(e) {
            return null == e ? "" : (e + "").replace(Qt, "")
        }, "function" == typeof define && define.amd && define("jquery", [], function() {
            return C
        }), w.jQuery),
        Kt = w.$;
    return C.noConflict = function(e) {
        return w.$ === C && (w.$ = Kt), e && w.jQuery === C && (w.jQuery = Jt), C
    }, void 0 === $ && (w.jQuery = w.$ = C), C
}), $(function() {
    var t = $("header"),
        n = $("#intro").innerHeight();

    function e(e) {
        n <= e ? t.addClass("fixed") : t.removeClass("fixed")
    }
    e($(window).scrollTop()), $(window).on("scroll", function() {
        e($(this).scrollTop()), console.log(n)
    }), $("[data-scroll]").on("click", function(e) {
        e.preventDefault();
        e = $(this).data("scroll"), e = $(e).offset().top;
        $("#nav a").removeClass("active"), $("#nav").removeClass("open"), $("html, body").animate({
            scrollTop: e
        }, 500)
    }), $("#menu_btn").on("click", function(e) {
        e.preventDefault(), $("#nav").toggleClass("open"), $(".nav-btn").toggleClass("nav-btn--active")
    });
    let r = $("[data-modal]"),
        o = $("[data-close]");
    r.on("click", function(e) {
        e.preventDefault();
        let t = $(this);
        e = t.data("modal");
        $(e).addClass("show"), $("body").addClass("no-scroll")
    }), o.on("click", function(e) {
        e.preventDefault();
        let t = $(this),
            n = t.parents(".modal");
        setTimeout(function() {
            n.removeClass("show"), $("body").removeClass("no-scroll")
        }, 200)
    }), $(".modal").on("click", function(e) {
        let t = $(this);
        setTimeout(function() {
            t.removeClass("show"), $("body").removeClass("no-scroll")
        }, 200)
    }), $(".wrap").on("click", function(e) {
        e.stopPropagation()
    })
});
let data = Array.from(document.querySelectorAll('.portfolio__list .portfolio_item')),
    step = 6,
    item = 0;
data.slice(step).forEach(e => e.style.display = 'none');
item += step;
document.querySelector('#more').addEventListener('click', function(e) {
    let tmp = data.slice(item, item + step);
    tmp.forEach(e => e.style.display = 'block');
    item += step;
    if (tmp.length < 6) this.remove()
});