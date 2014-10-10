/* Script# Runtime
 * Designed and licensed for use and distribution with Script#-generated scripts.
 * Copyright (c) 2012, Nikhil Kothari, and the Script# Project.
 * More information at http://scriptsharp.com
 */
"use strict";
(function (a) {
    function b() {
        var f = "0", j = "-", i = "pending", m = "done", c = "", g = -1, e = false, d = true, h = ".", b = null;

        function U() {
        }

        function k(a) {
            return a !== b && a !== undefined
        }

        function Sb(c) {
            for (var a = 2, d = c.length; a < d; a++)if (k(c[a]))return c[a];
            return b
        }

        function Yb(a, b) {
            return k(a) ? a : k(b) ? b : Sb(arguments)
        }

        function E(c, a) {
            for (var b in a)c[b] = a[b];
            return c
        }

        function mb(a) {
            return a.toLowerCase() == "true"
        }

        function tb(a) {
            if (a[0] == "/") {
                var c = a.lastIndexOf("/");
                if (c > 1) {
                    var d = a.substring(1, c), e = a.substr(c + 1);
                    return new RegExp(d, e)
                }
            }
            return b
        }

        function sb(a) {
            return!a || !a.length ? 0 : a.indexOf(h) >= 0 || a.indexOf("e") >= 0 || C(a, "f") || C(a, "F") ? parseFloat(a) : parseInt(a, 10)
        }

        function Db(b) {
            var a = Date.parse(b);
            return isNaN(a) ? undefined : new Date(a)
        }

        function Jb(a) {
            return a >= 0 ? Math.floor(a) : Math.ceil(a)
        }

        function dc() {
            return new Date
        }

        function Xb() {
            var a = new Date;
            return new Date(a.getFullYear(), a.getMonth(), a.getDate())
        }

        function jb(a, b) {
            return a === b ? d : k(a) && k(b) ? a.getTime() == b.getTime() : e
        }

        function gb(a) {
            if (!k(a.stack) || !k(a.fileName) || !k(a.lineNumber))return;
            var b = a.stack.split("\n"), d = b[0], f = a.fileName + ":" + a.lineNumber;
            while (k(d) && d.indexOf(f) === g) {
                b.shift();
                d = b[0]
            }
            var e = b[1];
            if (!k(e))return;
            var c = e.match(/@(.*):(\d+)$/);
            if (!k(c))return;
            b.shift();
            a.stack = b.join("\n");
            a.fileName = c[1];
            a.lineNumber = parseInt(c[2], 10)
        }

        function Tb(e, b, c) {
            var a = new Error(e);
            if (b)for (var d in b)a[d] = b[d];
            if (c)a.innerException = c;
            gb(a);
            return a
        }

        function ac(b) {
            console.assert(e, b);
            if (a.navigator)eval("debugger;")
        }

        function R(a) {
            return a ? typeof a == "string" ? JSON.parse("(" + a + ")") : Array.prototype.slice.call(a) : b
        }

        function wb(b, c) {
            var a = b.indexOf(c);
            return a >= 0 ? (b.splice(a, 1), d) : e
        }

        function zb(a) {
            for (var b in a)delete a[b]
        }

        function Cb(b, a) {
            return b[a] !== undefined
        }

        function G(b) {
            if (Object.keys)return Object.keys(b);
            var a = [];
            for (var c in b)a.push(c);
            return a
        }

        function Gb(a) {
            return G(a).length
        }

        function s(d, c) {
            var a = g, e = c ? c.length : d.length, f = c ? function () {
                return{key: c[a], value: d[c[a]]}
            } : function () {
                return d[a]
            };
            this.current = b;
            this.moveNext = function () {
                a++;
                this.current = f();
                return a < e
            };
            this.reset = function () {
                a = g;
                this.current = b
            }
        }

        var fb = {current: b, moveNext: function () {
            return e
        }, reset: U};

        function Ab(a) {
            return!k(a) ? fb : a.getEnumerator ? a.getEnumerator() : a.length !== undefined ? new s(a) : new s(a, G(a))
        }

        function Vb() {
            this.count = 0;
            this._items = []
        }

        var Rb = {clear: function () {
            this._items.length = 0;
            this.count = 0
        }, contains: function (b) {
            for (var a = this.count - 1; a >= 0; a--)if (this._items[a] === b)return d;
            return e
        }, getEnumerator: function () {
            return new s(this._items.reverse())
        }, peek: function () {
            return this._items[this.count - 1]
        }, push: function (a) {
            this._items.push(a);
            this.count++
        }, pop: function () {
            if (this.count) {
                this.count--;
                return this._items.pop()
            }
            return undefined
        }};

        function Ub() {
            this.count = 0;
            this._items = [];
            this._offset = 0
        }

        function K(a) {
            a._items = a._items.slice(a._offset);
            a._offset = 0
        }

        var Qb = {clear: function () {
            this._items.length = 0;
            this._offset = 0;
            this.count = 0
        }, contains: function (c) {
            for (var a = this._offset, b = this._items.length; a <= b; a++)if (this._items[a] === c)return d;
            return e
        }, dequeue: function () {
            var a = this;
            if (a.count) {
                var b = a._items[a._offset];
                ++a._offset * 2 >= a._items.length && K(a);
                a.count--;
                return b
            }
            return undefined
        }, enqueue: function (a) {
            this._items.push(a);
            this.count++
        }, getEnumerator: function () {
            this._offset != 0 && K(this);
            return new s(this._items)
        }, peek: function () {
            return this._items.length ? this._items[this._offset] : undefined
        }};

        function F(b, a) {
            return typeof a == "number" ? a > 1 ? (new Array(a + 1)).join(b) : b : Array.prototype.join.call(arguments, c)
        }

        function q(a) {
            return!a || !a.length
        }

        function yb(a) {
            return q(a) || !a.replace(/^\s*/, c).length
        }

        function ab(a, b, d) {
            a = a || c, b = b || c;
            d ? (a = a.toUpperCase(), b = b.toUpperCase()) : 0;
            return a === b ? 0 : a < b ? g : 1
        }

        var Y = /(\{[^\}^\{]+\})/g, z = {};

        function Pb(b) {
            var d = p, e = b, a = Array.prototype.slice.call(arguments, 1);
            if (b.constructor != String) {
                d = b;
                e = a[0];
                a = a.slice(1)
            }
            return e.replace(Y, function (j, f) {
                var i = parseInt(f.substr(1), 10), b = a[i];
                if (!k(b))return c;
                var h = z[Q(b)];
                if (h) {
                    var e = c, g = f.indexOf(":");
                    if (g > 0)e = f.substring(g + 1, f.length - 1);
                    if (e && e != "i")return h(b, e, d)
                }
                return d == p ? b.toString() : b.toLocaleString()
            })
        }

        function bc(d, a) {
            if (a || !String.prototype.trim) {
                a = a ? a.join(c) : b;
                var e = a ? new RegExp("^[" + a + "]+|[" + a + "]+$", "g") : /^\s+|\s+$/g;
                return d.replace(e, c)
            }
            return d.trim()
        }

        function Eb(d, a) {
            var b = a ? new RegExp("^[" + a.join(c) + "]+") : /^\s+/;
            return d.replace(b, c)
        }

        function Ob(d, a) {
            var b = a ? new RegExp("[" + a.join(c) + "]+$") : /\s+$/;
            return d.replace(b, c)
        }

        function xb(b, a) {
            return q(a) ? d : q(b) || a.length > b.length ? e : b.substr(0, a.length) == a
        }

        function C(b, a) {
            return q(a) ? d : q(b) || a.length > b.length ? e : b.substr(-a.length) == a
        }

        function l(a, b, c) {
            return a.length < b ? F(c || " ", b - a.length) + a : a
        }

        function Hb(a, b, c) {
            return a.length < b ? a + F(c || " ", b - a.length) : a
        }

        function nb(b, a, c) {
            return!c || a + c > b.length ? b.substr(0, a) : b.substr(0, a) + b.substr(a + c)
        }

        function lb(a, b, c) {
            return!c ? a : !b ? c + a : a.substr(0, b) + c + a.substr(b)
        }

        function ib(d, b, a) {
            return d.split(b).join(a || c)
        }

        function P(a) {
            var c = function () {
                for (var e = arguments, d = b, c = 0, f = a.length; c < f; c++)d = e.length ? a[c].apply(b, e) : a[c].call(b);
                return d
            };
            c._fnList = a;
            return c
        }

        function Zb(a, c) {
            if (!c)return a;
            var f = b;
            a = typeof a == "string" ? c[f = a] : a;
            var e = f ? c.$$b || (c.$$b = {}) : b, d = e ? e[f] : b;
            if (!d) {
                d = function () {
                    return a.apply(c, arguments)
                };
                if (e)e[f] = d
            }
            return d
        }

        function Kb(a, b) {
            if (!a)return b;
            if (!b)return a;
            var c = [].concat(a._fnList || a, b);
            return P(c)
        }

        function Lb(c, e) {
            if (!c)return b;
            if (!e)return c;
            var a = c._fnList || [c], d = a.indexOf(e);
            if (d >= 0) {
                if (a.length == 1)return b;
                a = d ? a.slice(0, d).concat(a.slice(d + 1)) : a.slice(1);
                return P(a)
            }
            return c
        }

        function ub(f, g, c, d) {
            c = c || "__" + (new Date).valueOf();
            d = d || a;
            var e = {name: c, detach: function () {
                d[c] = U
            }, dispose: function () {
                try {
                    delete d[c]
                } catch (a) {
                    d[c] = undefined
                }
            }};
            d[c] = g ? f : function () {
                e.dispose();
                return f.apply(b, arguments)
            };
            return e
        }

        function t() {
        }

        t.Empty = new t;
        function Z() {
            this.cancel = e
        }

        function ob() {
        }

        function J() {
        }

        function pb() {
        }

        function Bb() {
        }

        function kb() {
        }

        function vb() {
        }

        function db() {
        }

        function hb() {
        }

        function cb() {
        }

        function I(a) {
            this._parts = k(a) && a !== c ? [a] : [];
            this.isEmpty = this._parts.length == 0
        }

        var eb = {append: function (a) {
            if (k(a) && a !== c) {
                this._parts.push(a);
                this.isEmpty = e
            }
            return this
        }, appendLine: function (b) {
            var a = this;
            a.append(b);
            a.append("\r\n");
            a.isEmpty = e;
            return a
        }, clear: function () {
            this._parts = [];
            this.isEmpty = d
        }, toString: function (a) {
            return this._parts.join(a || c)
        }}, w = [], W = {dispose: function () {
            w.pop()
        }};

        function r(a) {
            var d = w, e = d.length;
            if (e) {
                a = a || [];
                for (var c = 0; c < e; c++) {
                    var f = d[c];
                    a.indexOf(f) < 0 && a.push(f)
                }
                return a
            }
            return b
        }

        function H(b) {
            for (var a = 0, c = b.length; a < c; a++)b[a].invalidateObserver()
        }

        function M(a) {
            this._v = a;
            this._observers = b
        }

        var rb = {getValue: function () {
            this._observers = r(this._observers);
            return this._v
        }, setValue: function (d) {
            var a = this;
            if (a._v !== d) {
                a._v = d;
                var c = a._observers;
                if (c) {
                    a._observers = b;
                    H(c)
                }
            }
        }};
        M.registerObserver = function (a) {
            w.push(a);
            return W
        };
        function X(a) {
            this._items = a || [];
            this._observers = b
        }

        var V = {get_item: function (a) {
            this._observers = r(this._observers);
            return this._items[a]
        }, set_item: function (a, b) {
            this._items[a] = b;
            this._updated()
        }, get_length: function () {
            this._observers = r(this._observers);
            return this._items.length
        }, add: function (a) {
            this._items.push(a);
            this._updated()
        }, clear: function () {
            this._items.clear();
            this._updated()
        }, contains: function (a) {
            return this._items.indexOf(a) >= 0
        }, getEnumerator: function () {
            this._observers = r(this._observers);
            return this._items.getEnumerator()
        }, indexOf: function (a) {
            return this._items.indexOf(a)
        }, insert: function (a, b) {
            this._items.insert(a, b);
            this._updated()
        }, remove: function (a) {
            if (this._items.remove(a)) {
                this._updated();
                return d
            }
            return e
        }, removeAt: function (a) {
            this._items.splice(a, 1);
            this._updated()
        }, toArray: function () {
            return this._items
        }, _updated: function () {
            var a = this._observers;
            if (a) {
                this._observers = b;
                H(a)
            }
        }};

        function o(c) {
            var a = this;
            a._continuations = c !== undefined ? (a.status = m, b) : (a.status = i, []);
            a.result = c;
            a.error = b
        }

        var Wb = {get_completed: function () {
            return this.status != i
        }, changeWith: function (b) {
            var a = new o;
            this.continueWith(function (e) {
                var c = e.error, d;
                if (!c)try {
                    d = b(e)
                } catch (f) {
                    c = f
                }
                n(a, d, c)
            });
            return a
        }, continueWith: function (b) {
            var a = this;
            if (a._continuations)a._continuations.push(b); else {
                var c = a;
                setTimeout(function () {
                    b(c)
                }, 0)
            }
            return a
        }, done: function (a) {
            return this.continueWith(function (b) {
                b.status == m && a(b.result)
            })
        }, fail: function (a) {
            return this.continueWith(function (b) {
                b.status == "failed" && a(b.error)
            })
        }, then: function (a, b) {
            return this.continueWith(function (c) {
                c.status == m ? a(c.result) : b(c.error)
            })
        }};

        function n(a, f, e) {
            if (a.status == i) {
                if (e) {
                    a.error = e;
                    a.status = "failed"
                } else {
                    a.result = f;
                    a.status = m
                }
                var d = a._continuations;
                a._continuations = b;
                for (var c = 0, g = d.length; c < g; c++)d[c](a)
            }
        }

        function N(a, k) {
            a = R(a);
            var f = a.length, g = 0;
            if (f > 1 && typeof a[0] == "number") {
                g = a[0];
                a = a.slice(1);
                f--
            }
            if (Array.isArray(a[0])) {
                a = a[0];
                f = a.length
            }
            var c = new o, j = 0;

            function l(a) {
                if (c.status == i) {
                    j++;
                    if (k)n(c, a); else j == f && n(c, d)
                }
            }

            function m() {
                if (c.status == i)if (k)n(c, b); else n(c, e)
            }

            g != 0 && setTimeout(m, g);
            for (var h = 0; h < f; h++)a[h].continueWith(l);
            return c
        }

        o.all = function () {
            return N(arguments, e)
        };
        o.any = function () {
            return N(arguments, d)
        };
        o.delay = function (b) {
            var a = new o;
            setTimeout(function () {
                n(a, d)
            }, b);
            return a
        };
        function Fb(c) {
            var a = new o(c);
            return{task: a, resolve: function (b) {
                n(a, b)
            }, reject: function (c) {
                n(a, b, c || new Error)
            }}
        }

        var p = {name: c, nf: {nan: "NaN", neg: j, pos: "+", negInf: "-Infinity", posInf: "Infinity", gw: [3], dd: 2, ds: h, gs: ",", per: "%", perGW: [3], perDD: 2, perDS: h, perGS: ",", perPP: "{0} %", perNP: "-{0} %", cur: "$", curGW: [3], curDD: 2, curDS: h, curGS: ",", curNP: "(${0})", curPP: "${0}"}, dtf: {am: "AM", pm: "PM", ds: "/", ts: ":", gmt: "ddd, dd MMM yyyy HH:mm:ss 'GMT'", uni: "yyyy-MM-dd HH:mm:ssZ", sort: "yyyy-MM-ddTHH:mm:ss", dt: "dddd, MMMM dd, yyyy h:mm:ss tt", ld: "dddd, MMMM dd, yyyy", sd: "M/d/yyyy", lt: "h:mm:ss tt", st: "h:mm tt", day0: 0, day: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], sday: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], mday: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], mon: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", c], smon: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", c]}}, bb = {name: "en-us", dtf: p.dtf, nf: p.nf};

        function u(a, n, s, t) {
            var g = b, m = a.indexOf(s);
            if (m > 0) {
                g = a.substr(m);
                a = a.substr(0, m)
            }
            var o = a.startsWith(j);
            if (o)a = a.substr(1);
            var k = 0, l = n[k];
            if (a.length < l)return g ? a + g : a;
            var p = a.length, f = c, q = e;
            while (!q) {
                var i = l, h = p - i;
                if (h < 0) {
                    l += h;
                    i += h;
                    h = 0;
                    q = d
                }
                if (!i)break;
                var r = a.substr(h, i);
                if (f.length)f = r + t + f; else f = r;
                p -= i;
                if (k < n.length - 1) {
                    k++;
                    l = n[k]
                }
            }
            if (o)f = j + f;
            return g ? f + g : f
        }

        z.Number = function (e, n, k) {
            var b = k.nf, a = c, d = g;
            if (n.length > 1)d = parseInt(n.substr(1));
            var m = n.charAt(0);
            switch (m) {
                case"d":
                case"D":
                    a = parseInt(Math.abs(e)).toString();
                    if (d != g)a = l(a, d, f);
                    if (e < 0)a = j + a;
                    break;
                case"x":
                case"X":
                    a = parseInt(Math.abs(e)).toString(16);
                    if (m == "X")a = a.toUpperCase();
                    if (d != g)a = l(a, d, f);
                    break;
                case"e":
                case"E":
                    if (d == g)a = e.toExponential(); else a = e.toExponential(d);
                    if (m == "E")a = a.toUpperCase();
                    break;
                case"f":
                case"F":
                case"n":
                case"N":
                    if (d == g)d = b.dd;
                    a = e.toFixed(d).toString();
                    if (d && b.ds != h) {
                        var i = a.indexOf(h);
                        a = a.substr(0, i) + b.ds + a.substr(i + 1)
                    }
                    if (m == "n" || m == "N")a = u(a, b.gw, b.ds, b.gs);
                    break;
                case"c":
                case"C":
                    if (d == g)d = b.curDD;
                    a = Math.abs(e).toFixed(d).toString();
                    if (d && b.curDS != h) {
                        var i = a.indexOf(h);
                        a = a.substr(0, i) + b.curDS + a.substr(i + 1)
                    }
                    a = u(a, b.curGW, b.curDS, b.curGS);
                    if (e < 0)a = String.format(k, b.curNP, a); else a = String.format(k, b.curPP, a);
                    break;
                case"p":
                case"P":
                    if (d == g)d = b.perDD;
                    a = (Math.abs(e) * 100).toFixed(d).toString();
                    if (d && b.perDS != h) {
                        var i = a.indexOf(h);
                        a = a.substr(0, i) + b.perDS + a.substr(i + 1)
                    }
                    a = u(a, b.perGW, b.perDS, b.perGS);
                    if (e < 0)a = String.format(k, b.perNP, a); else a = String.format(k, b.perPP, a)
            }
            return a
        };
        var x = /'.*?[^\\]'|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z/g;
        z.Date = function (b, c, m) {
            if (c == "iso")return b.toISOString(); else if (c.charAt(0) == "i") {
                var h = "String";
                switch (c) {
                    case"id":
                        h = "DateString";
                        break;
                    case"it":
                        h = "TimeString"
                }
                return m == p ? b["to" + h]() : b["toLocale" + h]()
            }
            var e = m.dtf;
            if (c.length == 1)switch (c) {
                case"f":
                    c = e.ld + " " + e.st;
                    break;
                case"F":
                    c = e.dt;
                    break;
                case"d":
                    c = e.sd;
                    break;
                case"D":
                    c = e.ld;
                    break;
                case"t":
                    c = e.st;
                    break;
                case"T":
                    c = e.lt;
                    break;
                case"g":
                    c = e.sd + " " + e.st;
                    break;
                case"G":
                    c = e.sd + " " + e.lt;
                    break;
                case"R":
                case"r":
                    e = p.dtf;
                    c = e.gmt;
                    break;
                case"u":
                    c = e.uni;
                    break;
                case"U":
                    c = e.dt;
                    b = new Date(b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate(), b.getUTCHours(), b.getUTCMinutes(), b.getUTCSeconds(), b.getUTCMilliseconds());
                    break;
                case"s":
                    c = e.sort
            }
            if (c.charAt(0) == "%")c = c.substr(1);
            var k = new I;
            x.lastIndex = 0;
            while (d) {
                var n = x.lastIndex, i = x.exec(c);
                k.append(c.slice(n, i ? i.index : c.length));
                if (!i)break;
                var g = i[0], a = g;
                switch (g) {
                    case"dddd":
                        a = e.day[b.getDay()];
                        break;
                    case"ddd":
                        a = e.sday[b.getDay()];
                        break;
                    case"dd":
                        a = l(b.getDate().toString(), 2, f);
                        break;
                    case"d":
                        a = b.getDate();
                        break;
                    case"MMMM":
                        a = e.mon[b.getMonth()];
                        break;
                    case"MMM":
                        a = e.smon[b.getMonth()];
                        break;
                    case"MM":
                        a = l((b.getMonth() + 1).toString(), 2, f);
                        break;
                    case"M":
                        a = b.getMonth() + 1;
                        break;
                    case"yyyy":
                        a = b.getFullYear();
                        break;
                    case"yy":
                        a = l((b.getFullYear() % 100).toString(), 2, f);
                        break;
                    case"y":
                        a = b.getFullYear() % 100;
                        break;
                    case"h":
                    case"hh":
                        a = b.getHours() % 12;
                        if (!a)a = "12"; else if (g == "hh")a = l(a.toString(), 2, f);
                        break;
                    case"HH":
                        a = l(b.getHours().toString(), 2, f);
                        break;
                    case"H":
                        a = b.getHours();
                        break;
                    case"mm":
                        a = l(b.getMinutes().toString(), 2, f);
                        break;
                    case"m":
                        a = b.getMinutes();
                        break;
                    case"ss":
                        a = l(b.getSeconds().toString(), 2, f);
                        break;
                    case"s":
                        a = b.getSeconds();
                        break;
                    case"t":
                    case"tt":
                        a = b.getHours() < 12 ? e.am : e.pm;
                        if (g == "t")a = a.charAt(0);
                        break;
                    case"fff":
                        a = l(b.getMilliseconds().toString(), 3, f);
                        break;
                    case"ff":
                        a = l(b.getMilliseconds().toString(), 3).substr(0, 2);
                        break;
                    case"f":
                        a = l(b.getMilliseconds().toString(), 3).charAt(0);
                        break;
                    case"z":
                        a = b.getTimezoneOffset() / 60;
                        a = (a >= 0 ? j : "+") + Math.floor(Math.abs(a));
                        break;
                    case"zz":
                    case"zzz":
                        a = b.getTimezoneOffset() / 60;
                        a = (a >= 0 ? j : "+") + l(Math.floor(Math.abs(a)).toString(), 2, f);
                        if (g == "zzz")a += e.ts + l(Math.abs(b.getTimezoneOffset() % 60).toString(), 2, f);
                        break;
                    default:
                        if (a.charAt(0) == "'")a = a.substr(1, a.length - 2).replace(/\\'/g, "'")
                }
                k.append(a)
            }
            return k.toString()
        };
        var D = {}, y = "class", v = "interface";

        function L(e, b, f) {
            if (Array.isArray(b)) {
                var a = b[0];
                if (b.length >= 2) {
                    var c = b[2];
                    if (c) {
                        var d = function () {
                        };
                        d.prototype = c.prototype;
                        a.prototype = new d;
                        a.prototype.constructor = a
                    }
                    b[1] && E(a.prototype, b[1]);
                    a.$base = c || Object;
                    a.$interfaces = b.slice(3);
                    a.$type = y
                } else a.$type = v;
                a.$name = e;
                return f[e] = a
            }
            return b
        }

        function Nb(a) {
            return a.$type == y
        }

        function qb(a) {
            return a.$type == v
        }

        function T(b) {
            var a;
            try {
                a = b.constructor
            } catch (c) {
            }
            return a || Object
        }

        function cc(d) {
            var c = d.indexOf(h), e = c > 0 ? D[d.substr(0, c)] : a, f = c > 0 ? d.substr(c + 1) : d;
            return e ? e[f] : b
        }

        var B = [Number, "Number", String, "String", Boolean, "Boolean", Array, "Array", Date, "Date", RegExp, "RegExp", Function, "Function"];

        function Q(a) {
            if (!(a instanceof Function))a = a.constructor;
            if (a.$name)return a.$name;
            if (a.name)return a.name;
            for (var b = 0, c = B.length; b < c; b += 2)if (a == B[b])return B[b + 1];
            return"Object"
        }

        function O(b, c) {
            if (b == Object || b == c)return d;
            if (b.$type == y) {
                var a = c.$base;
                while (a) {
                    if (b == a)return d;
                    a = a.$base
                }
            } else if (b.$type == v) {
                var a = c;
                while (a) {
                    var f = a.$interfaces;
                    if (f && f.indexOf(b) >= 0)return d;
                    a = a.$base
                }
            }
            return e
        }

        function A(b, a) {
            if (!k(a))return e;
            if (b == Object || a instanceof b)return d;
            var c = T(a);
            return O(b, c)
        }

        function Mb(a, b) {
            return A(b, a)
        }

        function Ib(a, c) {
            return A(c, a) ? a : b
        }

        function S(e, b, c) {
            var d = D[e] = {$name: e};
            if (b)for (var a in b)L(a, b[a], d);
            var f = {};
            if (c)for (var a in c)f[a] = L(a, c[a], d);
            return f
        }

        return E(S("ss", b, {IDisposable: [ob], IEnumerable: [J], IEnumerator: [pb], IObserver: [Bb], IApplication: [kb], IContainer: [vb], IObjectFactory: [db], IEventManager: [hb], IInitializable: [cb], EventArgs: [t, {}], CancelEventArgs: [Z, {}, t], StringBuilder: [I, eb], Stack: [Vb, Rb], Queue: [Ub, Qb], Observable: [M, rb], ObservableCollection: [X, V, b, J], Task: [o, Wb]}), {version: "0.8", isValue: k, value: Yb, extend: E, keys: G, keyCount: Gb, keyExists: Cb, clearKeys: zb, enumerate: Ab, array: R, remove: wb, "boolean": mb, regexp: tb, number: sb, date: Db, truncate: Jb, now: dc, today: Xb, compareDates: jb, error: Tb, string: F, emptyString: q, whitespace: yb, format: Pb, compareStrings: ab, startsWith: xb, endsWith: C, padLeft: l, padRight: Hb, trim: bc, trimStart: Eb, trimEnd: Ob, insertString: lb, removeString: nb, replaceString: ib, bind: Zb, bindAdd: Kb, bindSub: Lb, bindExport: ub, deferred: Fb, module: S, modules: D, isClass: Nb, isInterface: qb, typeOf: T, type: cc, typeName: Q, canCast: Mb, safeCast: Ib, canAssign: O, instanceOf: A, culture: {neutral: p, current: bb}, fail: ac})
    }

    function c() {
        var c = b();
        typeof exports == "object" ? c.extend(exports, c) : (a.ss = c)
    }

    a.define ? a.define("ss", [], b) : c()
})(this)
