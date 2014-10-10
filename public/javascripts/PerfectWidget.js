/*****************************************************************************\

 Perpetuum Software LLC
 Perfect Widgets SOFTWARE COMPONENT PRODUCT
 Copyright (C) 2012 Perpetuum Software LLC

 \*****************************************************************************/

"use strict";
var PerfectWidgetsFramework = function () {
    function br() {
    }

    function st(n, t) {
        this.$0 = r.empty, this.$1 = r.empty, this.$0 = n, this.$1 = t
    }

    function f(n, t) {
        var i, r;
        for (this.$1 = 0, this.$2 = 0, this.$0 = new Array(n), i = 0; i < n; i++)for (this.$0[i] = new Array(t), r = 0; r < n; r++)this.$0[i][r] = 0;
        this.$1 = n, this.$2 = t
    }

    function rt(n, t) {
        this.$0 = 0, this.$1 = 0, this.$1 = n, this.$0 = t
    }

    function kr(n, t) {
        this.$0 = 0, this.$1 = 0, this.$0 = n, this.$1 = t
    }

    function dr(n, t) {
        this.x = 0, this.y = 0, this.x = n, this.y = t
    }

    function r(n, t) {
        this.x = 0, this.y = 0, this.x = n, this.y = t
    }

    function u(n, t, i, r) {
        this.x = 0, this.y = 0, this.width = 0, this.height = 0, this.x = n, this.y = t, this.width = i, this.height = r
    }

    function b() {
    }

    function gr() {
        this.$0 = 0, this.$2 = 0, this.$3 = 0, this.$4 = 0, this.$5 = 0
    }

    function nu() {
        this.$1 = 0
    }

    function a() {
        this.$0 = 0, this.$1 = 0, this.$2 = 0, this.$3 = 0, this.$4 = 0
    }

    function tu() {
        this.sizeInPoints = 0, this.style = 0
    }

    function iu() {
    }

    function k(t, i) {
        this.$0 = n.white, this.$1 = 1, t != null && (this.$0 = t), i != null && (this.$1 = i)
    }

    function g() {
        this.$0 = []
    }

    function nt(n) {
        this.$0 = 0, this.$0 = n
    }

    function v() {
    }

    function ru() {
    }

    function ut() {
    }

    function n(n, t, i, r) {
        this.$5 = 0, this.$6 = 0, this.$7 = 0, this.$5 = n, this.$7 = t, this.$8 = i, this.$6 = r
    }

    function d() {
    }

    function s() {
        this.$0 = 0
    }

    function tt() {
        this.$0 = u.empty, this.$1 = []
    }

    function uu(n) {
        this.$0 = n
    }

    function e() {
    }

    function l(n, t, i, r) {
        this.left = 0, this.top = 0, this.right = 0, this.bottom = 0, this.left = i, this.top = n, this.right = r, this.bottom = t
    }

    function fu(n, t) {
        this.$1 = 0, this.$2 = 0, this.$3 = 0, this.$5 = 0, this.$0 = n, this.$5 = t
    }

    function t(n, t, i) {
        this.k = 0, this.name = n, this.shortName = t, this.k = i
    }

    function y() {
    }

    function i() {
    }

    function p() {
    }

    function h() {
    }

    function o() {
    }

    function it() {
    }

    function eu() {
        this.$0 = []
    }

    function c() {
    }

    function ou() {
        this.$1 = n.white, this.$2 = n.black, this.$3 = 3, s.call(this)
    }

    function ft() {
        this.$1 = 0, this.$2 = new g, s.call(this)
    }

    function w(n) {
        nt.call(this, n), this.$1 = []
    }

    function su() {
        this.$0 = [], b.call(this)
    }

    function hu() {
        this.$0 = n.black, b.call(this)
    }

    function et(n) {
        ut.call(this), this.color = n
    }

    function cu() {
        this.$3 = 0, this.$4 = 0, s.call(this)
    }

    function ur() {
        s.call(this)
    }

    function ot() {
        this.$1 = n.black, this.$2 = n.white, this.$3 = 0, s.call(this)
    }

    function lu(t) {
        this.color = n.white, s.call(this), t != null && this.setColor(t)
    }

    function sr() {
        c.call(this)
    }

    function au(n) {
        c.call(this), this.$0 = n
    }

    function lr() {
        this.$0 = 0, c.call(this)
    }

    function vu() {
        c.call(this)
    }

    function yu() {
        c.call(this)
    }

    function pu() {
        ft.call(this)
    }

    var ht, ct, lt, at, vt, yt, pt, wt, bt, kt, dt, gt, ni, ti, ii, ri, ui, fi, ei, oi, si, hi, ci, li, ai, vi, yi, pi, wi, bi, ki, di, gi, nr, tr, ir, rr, fr, er, or, hr, cr, ar, vr, yr, pr, wr;
    return f.eye = function (n) {
        for (var i = new f(n, n), t = 0; t < n; t++)i.set(t, t, 1);
        return i
    }, f.buildTransformationMatrix = function (n, t, i, r, u, e) {
        var o = new f(3, 3);
        return o.set(0, 0, n), o.set(1, 0, t), o.set(0, 1, i), o.set(1, 1, r), o.set(0, 2, u), o.set(1, 2, e), o.set(2, 0, 0), o.set(2, 1, 0), o.set(2, 2, 1), o
    }, f.buildTranslationMatrix = function (n, t) {
        var i = new f(3, 3);
        return i.set(0, 0, 1), i.set(0, 1, 0), i.set(0, 2, n), i.set(1, 0, 0), i.set(1, 1, 1), i.set(1, 2, t), i.set(2, 0, 0), i.set(2, 1, 0), i.set(2, 2, 1), i
    }, f.buildScaleMatrix = function (n, t) {
        var i = new f(3, 3);
        return i.set(0, 0, n), i.set(0, 1, 0), i.set(0, 2, 0), i.set(1, 0, 0), i.set(1, 1, t), i.set(1, 2, 0), i.set(2, 0, 0), i.set(2, 1, 0), i.set(2, 2, 1), i
    }, f.buildRotationMatrix = function (n) {
        var i = o.degreeToRadian(n), t = new f(3, 3);
        return t.set(0, 0, Math.cos(i)), t.set(0, 1, -Math.sin(i)), t.set(0, 2, 0), t.set(1, 0, Math.sin(i)), t.set(1, 1, Math.cos(i)), t.set(1, 2, 0), t.set(2, 0, 0), t.set(2, 1, 0), t.set(2, 2, 1), t
    }, ht = {get: function (n, t) {
        return this.$0[n][t]
    }, set: function (n, t, i) {
        this.$0[n][t] = i
    }, add: function (n) {
        for (var r = new f(this.$1, this.$2), i, u, t = 0; t < this.$1; t++)for (i = 0; i < this.$2; i++)u = this.get(t, i) + n.get(t, i), r.set(t, i, u);
        return r
    }, minus: function (n) {
        for (var r = new f(this.$1, this.$2), i, u, t = 0; t < this.$1; t++)for (i = 0; i < this.$2; i++)u = this.get(t, i) + n.get(t, i), r.set(t, i, u);
        return r
    }, multiply: function (n) {
        for (var e = new f(this.$1, n.$2), i, u, r, t = 0; t < this.$1; t++)for (i = 0; i < n.$2; i++) {
            for (u = 0, r = 0; r < this.$2; r++)u += this.get(t, r) * n.get(r, i);
            e.set(t, i, u)
        }
        return e
    }, reverse: function () {
        if (this.$1 !== 3 || this.$2 !== 3)throw new Error("Matrix.Reverse() work only for 3x3 matrix");
        var n = new f(3, 3), s = this.get(0, 0), h = this.get(0, 1), c = this.get(0, 2), r = this.get(1, 0), u = this.get(1, 1), e = this.get(1, 2), i = this.get(2, 0), l = this.get(2, 1), o = this.get(2, 2), a = u * o - e * l, v = e * i - r * o, y = r * l - u * i, p = c * l - h * o, w = s * o - c * i, b = i * h - s * l, k = h * e - c * u, d = c * r - s * e, g = s * u - h * r, t = s * (u * o - e * i) + h * (e * i - o * r) + c * (r * l - u * i);
        return n.set(0, 0, a / t), n.set(0, 1, p / t), n.set(0, 2, k / t), n.set(1, 0, v / t), n.set(1, 1, w / t), n.set(1, 2, d / t), n.set(2, 0, y / t), n.set(2, 1, b / t), n.set(2, 2, g / t), n
    }}, rt.getRange = function (n, t, i) {
        var r = Math.floor((n - i) / t), u = r * t + i, f = (r + 1) * t + i;
        return new rt(u, f)
    }, ct = {getMaximum: function () {
        return this.$0
    }, setMaximum: function (n) {
        this.$0 = n
    }, getMinimum: function () {
        return this.$1
    }, setMinimum: function (n) {
        this.$1 = n
    }, toString: function () {
        return this.$1.toString() + " - " + this.$0.toString()
    }}, lt = {get_startValue: function () {
        return this.$0
    }, set_startValue: function (n) {
        return this.$0 = n, n
    }, get_endValue: function () {
        return this.$1
    }, set_endValue: function (n) {
        return this.$1 = n, n
    }}, at = {}, r.fromPolar = function (n, t) {
        return new r(n * Math.cos(t), n * Math.sin(t))
    }, r.equals = function (n, t) {
        if (n === t)return!0;
        var i = ss.safeCast(n, r), u = ss.safeCast(t, r);
        return i != null && u != null && i.x === u.x && i.y === u.y ? !0 : !1
    }, r.toDegrees = function (n) {
        return n / Math.PI * 180
    }, r.toRadians = function (n) {
        return n * Math.PI / 180
    }, vt = {getRotation: function () {
        var n = Math.atan2(this.y, this.x);
        return n < 0 && (n += Math.PI * 2), n
    }, setRotation: function (n) {
        var t = r.fromPolar(this.getLength(), n);
        this.x = t.x, this.y = t.y
    }, getWidth: function () {
        return this.x
    }, getHeight: function () {
        return this.y
    }, getX: function () {
        return this.x
    }, getY: function () {
        return this.y
    }, setX: function (n) {
        this.x = n
    }, setY: function (n) {
        this.y = n
    }, getLength: function () {
        return this.abs()
    }, setLength: function (n) {
        var t = r.fromPolar(n, this.getRotation());
        this.x = t.x, this.y = t.y
    }, isEmpty: function () {
        return!this.x && !this.y
    }, toString: function () {
        return this.x + "," + this.y
    }, convertUnits: function (n, t) {
        var i = n.k / t.k;
        return new r(this.x * i, this.y * i)
    }, abs: function () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }, quant: function (n, t) {
        var i, u;
        return i = n ? Math.round(this.x / n) * n : this.x, u = t ? Math.round(this.y / t) * t : this.y, new r(i, u)
    }, quantX: function (n) {
        return this.quant(n, 0)
    }, quantY: function (n) {
        return this.quant(0, n)
    }, getNormalized: function () {
        return r.fromPolar(1, this.getRotation())
    }, getPerpendicular: function () {
        return new r(this.y, -this.x)
    }, getProjection: function (n, t) {
        if (!t.minus(n).getLength())return n;
        if (t.y === n.y)return new r(this.x, n.y);
        var i = (n.x - t.x) / (t.y - n.y), u = (i * (n.y - this.y) + n.x + i * i * this.x) / (i * i + 1), f = i * u + this.y - i * this.x;
        return new r(u, f)
    }, rotate: function (n) {
        var t = new r(this.x, this.y), i = t.getRotation();
        return i += n, t.setRotation(i), t
    }, add: function (n) {
        return new r(this.x + n.x, this.y + n.y)
    }, minus: function (n) {
        return new r(this.x - n.x, this.y - n.y)
    }, multiply: function (n) {
        return new r(this.x * n.x, this.y * n.y)
    }, divide: function (n) {
        return new r(this.x / n.x, this.y / n.y)
    }, divideByNumber: function (n) {
        return new r(this.x / n, this.y / n)
    }, multiplyByNumber: function (n) {
        return new r(this.x * n, this.y * n)
    }, negative: function () {
        return new r(-this.x, -this.y)
    }}, u.intersect = function (n, t) {
        var i = n.getPositiveRectangle(), r = t.getPositiveRectangle(), f = Math.max(i.getLeft(), r.getLeft()), e = Math.max(i.getTop(), r.getTop()), o = Math.min(i.getRight(), r.getRight()), s = Math.min(i.getBottom(), r.getBottom());
        return o - f >= 0 && s - e >= 0 ? new u(f, e, o - f, s - e) : u.empty
    }, u.union = function (n, t) {
        var i = n.getPositiveRectangle(), r = t.getPositiveRectangle();
        return new u(Math.min(i.getLeft(), r.getLeft()), Math.min(i.getTop(), r.getTop()), Math.max(i.getRight(), r.getRight()) - Math.min(i.getLeft(), r.getLeft()), Math.max(i.getBottom(), r.getBottom()) - Math.min(i.getTop(), r.getTop()))
    }, u.multiply = function (n, t) {
        return new u(n.x * t, n.y * t, n.width * t, n.height * t)
    }, u.divide = function (n, t) {
        return new u(n.x / t, n.y / t, n.width / t, n.height / t)
    }, u.expand = function (n, t) {
        return new u(n.x - t.left, n.y - t.top, n.width + t.left + t.right, n.height + t.top + t.bottom)
    }, u.shrink = function (n, t) {
        return t.left + t.right >= n.width || t.top + t.bottom >= n.height ? u.empty : new u(n.x + t.left, n.y + t.top, n.width - t.left - t.right, n.height - t.top - t.bottom)
    }, yt = {getX: function () {
        return this.x
    }, getY: function () {
        return this.y
    }, getWidth: function () {
        return this.width
    }, getHeight: function () {
        return this.height
    }, getTop: function () {
        return this.y
    }, getBottom: function () {
        return this.y + this.height
    }, getLeft: function () {
        return this.x
    }, getRight: function () {
        return this.x + this.width
    }, getTopLeft: function () {
        return new r(this.getLeft(), this.getTop())
    }, getBottomLeft: function () {
        return new r(this.getLeft(), this.getBottom())
    }, getTopRight: function () {
        return new r(this.getRight(), this.getTop())
    }, getBottomRight: function () {
        return new r(this.getRight(), this.getBottom())
    }, getCenterX: function () {
        return this.x + this.width / 2
    }, getCenterY: function () {
        return this.y + this.height / 2
    }, getTopCenter: function () {
        return new r(this.getCenterX(), this.getTop())
    }, getBottomCenter: function () {
        return new r(this.getCenterX(), this.getBottom())
    }, getLeftCenter: function () {
        return new r(this.getLeft(), this.getCenterY())
    }, getRightCenter: function () {
        return new r(this.getRight(), this.getCenterY())
    }, getCenter: function () {
        return new r(this.getCenterX(), this.getCenterY())
    }, getSize: function () {
        return new r(this.width, this.height)
    }, getLocation: function () {
        return new r(this.x, this.y)
    }, convertUnits: function (n, t) {
        var i = n.k / t.k;
        return new u(this.x * i, this.y * i, this.width * i, this.height * i)
    }, getDistance: function (n) {
        if (this.contains(n))return 0;
        var t = 0, i = 0;
        return t = n.x >= this.getLeft() && n.x <= this.getRight() ? 0 : Math.min(Math.abs(n.x - this.getLeft()), Math.abs(n.x - this.getRight())), i = n.y >= this.getTop() && n.y <= this.getBottom() ? 0 : Math.min(Math.abs(n.y - this.getTop()), Math.abs(n.y - this.getBottom())), Math.sqrt(t * t + i * i)
    }, contains: function (n) {
        return this.getLeft() <= n.x && n.x <= this.getRight() && this.getTop() <= n.y && n.y <= this.getBottom()
    }, getPositiveRectangle: function () {
        return new u(Math.min(this.getLeft(), this.getRight()), Math.min(this.getTop(), this.getBottom()), Math.abs(this.width), Math.abs(this.height))
    }, isEmpty: function () {
        return!this.width && !this.height
    }, getArea: function () {
        return this.width * this.height
    }, getVertice: function () {
        return[this.getTopLeft(), this.getBottomLeft(), this.getBottomRight(), this.getTopRight()]
    }, equals: function (n) {
        var t = ss.safeCast(n, u);
        return t != null && this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height ? !0 : !1
    }, setLocation: function (n) {
        this.x = n.x, this.y = n.y
    }}, pt = {}, wt = {getStyle: function () {
        return this.$0
    }, setStyle: function (n) {
        this.$0 = n
    }, getColor: function () {
        return this.$1
    }, setColor: function (n) {
        this.$1 = n
    }, getDashLength: function () {
        return this.$2
    }, setDashLength: function (n) {
        this.$2 = n
    }, getDotLength: function () {
        return this.$3
    }, setDotLength: function (n) {
        this.$3 = n
    }, getSpaceLenght: function () {
        return this.$4
    }, setSpaceLength: function (n) {
        this.$4 = n
    }, getWidth: function () {
        return this.$5
    }, setWidth: function (n) {
        this.$5 = n
    }}, bt = {getColor: function () {
        return this.$0
    }, setColor: function (n) {
        this.$0 = n
    }, getPortion: function () {
        return this.$1
    }, setPortion: function (n) {
        this.$1 = n
    }}, a.fillParameters = function (n, i, u) {
        var e = t.rectToPixel(n), f = new a, h = e.getCenter(), s = new r(e.width / 2, e.height / 2);
        return f.setRx(s.x), f.setRy(s.y), f.setRotationAngle(0), f.setFinishPoint(o.getEllipsePoint(h, s, i + u)), f.setLargeArcFlag(Math.abs(u) % 360 > 180 ? 1 : 0), f.setSweepFlag(u > 0 ? 1 : 0), f
    }, a.fillLowLevelParameters = function (n, i, r, u, f, e) {
        var o = new a, s;
        return o.setRx(t.internalToPixel(n)), o.setRy(t.internalToPixel(i)), (s = ss.safeCast(e, lr)) != null ? o.setRotationAngle(s.getAngle()) : o.setRotationAngle(0), o.setFinishPoint(t.vectorToPixel(r)), o.setLargeArcFlag(Math.abs(f) % 360 > 180 ? 1 : 0), o.setSweepFlag(f > 0 ? 1 : 0), o
    }, kt = {getRx: function () {
        return this.$0
    }, setRx: function (n) {
        this.$0 = n
    }, getRy: function () {
        return this.$1
    }, setRy: function (n) {
        this.$1 = n
    }, getRotationAngle: function () {
        return this.$2
    }, setRotationAngle: function (n) {
        this.$2 = n
    }, getLargeArcFlag: function () {
        return this.$3
    }, setLargeArcFlag: function (n) {
        this.$3 = n
    }, getSweepFlag: function () {
        return this.$4
    }, setSweepFlag: function (n) {
        this.$4 = n
    }, getFinishPoint: function () {
        return this.$5
    }, setFinishPoint: function (n) {
        this.$5 = n
    }, toString: function () {
        return ss.format("{0} {1} {2} {3} {4} {5} {6}", this.$0, this.$1, this.$2, this.$3, this.$4, this.$5.x, this.$5.y)
    }}, dt = {}, gt = {}, ni = {setColor: function (n) {
        this.$0 = n
    }, getColor: function () {
        return this.$0
    }, setPortion: function (n) {
        this.$1 = n
    }, getPortion: function () {
        return this.$1
    }}, ti = {add: function (n) {
        this.$0.push(n)
    }, set: function (n, t) {
        this.$0[n] = t
    }, get: function (n) {
        return this.$0[n]
    }, getCount: function () {
        return this.$0.length
    }}, ii = {getElementType: function () {
        return this.$0
    }, setElementType: function (n) {
        this.$0 = n
    }, toString: function () {
        switch (this.getElementType()) {
            case 2:
                return"Z";
            case 5:
                return"A";
            case 3:
                return"H";
            case 1:
                return"L";
            case 0:
                return"M";
            case 4:
                return"V";
            default:
                throw new Error("Graphics path element type is unknown");
        }
    }}, v.middleColor = function (t, i) {
        var r = (t.r() + i.r()) / 2, u = (t.g() + i.g()) / 2, f = (t.b() + i.b()) / 2, e = (t.a() + i.a()) / 2;
        return r > 255 && (r = 255), u > 255 && (u = 255), f > 255 && (f = 255), n.fromArgb(e, r, u, f)
    }, v.scaleColor = function (t, i) {
        var r = t.r() * i, u = t.g() * i, f = t.b() * i;
        return r > 255 && (r = 255), u > 255 && (u = 255), f > 255 && (f = 255), n.fromArgb(255, r, u, f)
    }, ri = {}, ui = {}, fi = {}, n.createKnownColor = function (t) {
        return new n(0, n.$3, null, t)
    }, n.$a = function (n) {
        if (n < 0 || n > 255)throw new Error("InvalidEx2BoundArgument");
    }, n.$b = function (n, t, i, r) {
        return(t << 16 | i << 8 | r | n << 24) & 4294967295
    }, n.fromArgb = function (t, i, r, u) {
        return n.$a(t, "alpha"), n.$a(i, "red"), n.$a(r, "green"), n.$a(u, "blue"), new n(n.$b(t, i, r, u), n.$4, null, 0)
    }, n.fromArgbProto = function (t, i) {
        return n.$a(t, "alpha"), n.$a(i.r(), "red"), n.$a(i.g(), "green"), n.$a(i.b(), "blue"), new n(n.$b(t, i.r(), i.g(), i.b()), n.$4, null, 0)
    }, n.equals = function (t, i) {
        if (t === i)return!0;
        var r = ss.safeCast(t, n), u = ss.safeCast(i, n);
        return r != null && u != null && r.$9() === u.$9() && r.$6 === u.$6 ? !0 : !1
    }, ei = {r: function () {
        return this.$9() >> 16 & 255
    }, g: function () {
        return this.$9() >> 8 & 255
    }, b: function () {
        return this.$9() & 255
    }, a: function () {
        return this.$9() >> 24 & 255
    }, $9: function () {
        return!(this.$7 & n.$2) ? this.isKnownColor() ? e.knownColorToArgb(this.$6) : n.$1 : this.$5
    }, toArgb: function () {
        return this.$9()
    }, isEmpty: function () {
        return!this.$7
    }, isSystemColor: function () {
        return this.isKnownColor() ? this.$6 > 26 ? this.$6 > 167 : !0 : !1
    }, isKnownColor: function () {
        return!!(this.$7 & n.$3)
    }, isNamedColor: function () {
        return(this.$7 & n.$0) ? !0 : this.isKnownColor()
    }, toKnownColor: function () {
        return this.$6
    }, toString: function () {
        var n = new ss.StringBuilder;
        return n.append(this.$5.toString()), n.append(";"), n.append(this.$7.toString()), n.append(";"), n.append(this.$8), n.append(";"), n.append(this.$6.toString()), n.toString()
    }, name: function () {
        if (!!(this.$7 & n.$0))return this.$8;
        if (!this.isKnownColor())return this.$5.toString(10);
        var t = e.knownColorToName(this.$6);
        return t != null ? t : this.$6.toString()
    }}, d.$0 = function (n, t, i) {
        return"#" + n.toString(16) + t.toString(16) + i.toString(16)
    }, d.toHtml = function (t) {
        if (!t.isEmpty()) {
            if (!t.isSystemColor())return t.isNamedColor() ? t === n.lightGray ? "LightGrey" : t.name() : "#" + t.r().toString(16) + t.g().toString(16) + t.b().toString(16);
            switch (t.toKnownColor()) {
                case 1:
                    return"activeborder";
                case 2:
                case 171:
                    return"activecaption";
                case 3:
                    return"captiontext";
                case 4:
                    return"appworkspace";
                case 5:
                    return"buttonface";
                case 6:
                    return"buttonshadow";
                case 7:
                    return"threeddarkshadow";
                case 8:
                    return"buttonface";
                case 9:
                    return"buttonhighlight";
                case 10:
                    return"buttontext";
                case 11:
                    return"background";
                case 12:
                    return"graytext";
                case 13:
                case 15:
                    return"highlight";
                case 14:
                case 174:
                    return"highlighttext";
                case 16:
                    return"inactiveborder";
                case 17:
                case 172:
                    return"inactivecaption";
                case 18:
                    return"inactivecaptiontext";
                case 19:
                    return"infobackground";
                case 20:
                    return"infotext";
                case 21:
                case 173:
                    return"menu";
                case 22:
                    return"menutext";
                case 23:
                    return"scrollbar";
                case 24:
                    return"window";
                case 25:
                    return"windowframe";
                case 26:
                    return"windowtext"
            }
        }
        return""
    }, d.$1 = function (n, t, i) {
        return"rgb(" + n + "," + t + "," + i + ")"
    }, d.toSvg = function (t) {
        if (!t.isEmpty()) {
            if (!t.isSystemColor())return t.isNamedColor() ? t === n.lightGray ? "LightGrey" : t.name() === "Transparent" ? "rgb(255, 255, 255)" : t.name() : "rgb(" + t.r() + "," + t.g() + "," + t.b() + ")";
            switch (t.toKnownColor()) {
                case 1:
                    return"activeborder";
                case 2:
                case 171:
                    return"activecaption";
                case 3:
                    return"captiontext";
                case 4:
                    return"appworkspace";
                case 5:
                    return"buttonface";
                case 6:
                    return"buttonshadow";
                case 7:
                    return"threeddarkshadow";
                case 8:
                    return"buttonface";
                case 9:
                    return"buttonhighlight";
                case 10:
                    return"buttontext";
                case 11:
                    return"background";
                case 12:
                    return"graytext";
                case 13:
                case 15:
                    return"highlight";
                case 14:
                case 174:
                    return"highlighttext";
                case 16:
                    return"inactiveborder";
                case 17:
                case 172:
                    return"inactivecaption";
                case 18:
                    return"inactivecaptiontext";
                case 19:
                    return"infobackground";
                case 20:
                    return"infotext";
                case 21:
                case 173:
                    return"menu";
                case 22:
                    return"menutext";
                case 23:
                    return"scrollbar";
                case 24:
                    return"window";
                case 25:
                    return"windowframe";
                case 26:
                    return"windowtext"
            }
        }
        return""
    }, oi = {}, s.getCenterPoint = function (n, t, i) {
        var u = n.getSize().getLength(), f = u / 2 * t, e = r.fromPolar(f, r.toRadians(i));
        return n.getCenter().add(e)
    }, s.getFillRectangle = function (n, t, i) {
        var f = s.getCenterPoint(n, t, i), l = n.getTopLeft().minus(f).getLength(), a = n.getTopRight().minus(f).getLength(), v = n.getBottomRight().minus(f).getLength(), y = n.getBottomLeft().minus(f).getLength(), e = Math.max(Math.max(l, a), Math.max(v, y)), o = new r(e * 2, e * 2), h = f.minus(o.divideByNumber(2)), c = o;
        return new u(h.x, h.y, c.x, c.y)
    }, s.sortColorsByPortion = function (n) {
        for (var r, t, u, i = 1; i < n.getCount(); i++) {
            for (r = !0, t = n.getCount() - 1; t >= i; t--)n.get(t).getPortion() < n.get(t - 1).getPortion() && (u = n.get(t), n.set(t, n.get(t - 1)), n.set(t - 1, u), r = !1);
            if (r)break
        }
    }, si = {getAdditionalAngle: function () {
        return this.$0
    }, setAdditionalAngle: function (n) {
        this.$0 = n
    }}, tt.buildVector = function (n) {
        return t.vectorToPixel(n)
    }, hi = {addGraphicsPath: function (n) {
        for (var t = ss.enumerate(n.get_pathElements()), i; t.moveNext();)i = t.current, this.$1.push(i)
    }, addPathElement: function (n) {
        this.get_pathElements().push(n)
    }, get_count: function () {
        return this.$1.length
    }, get_pathElements: function () {
        return this.$1
    }, set_pathElements: function (n) {
        return this.$1 = n, n
    }, setBounds: function (n) {
        this.$0 = n
    }, getBounds: function () {
        return this.$0
    }, addArc: function (n, t, i) {
        var r = new w(5);
        r.add(a.fillParameters(n, t, i)), this.addPathElement(r)
    }, addLine: function (n) {
        var t = new w(1);
        t.add(tt.buildVector(n)), this.addPathElement(t)
    }, moveTo: function (n) {
        var t = new w(0);
        t.add(tt.buildVector(n)), this.addPathElement(t)
    }, startPath: function (n) {
        var i = new w(0);
        i.add(t.vectorToPixel(n)), this.addPathElement(i)
    }, terminate: function () {
        var n = new w(2);
        this.addPathElement(n)
    }, toString: function () {
        var t, n, i;
        for (this.$1.length > 0 && this.addPathElement(this.$1[0]), t = new ss.StringBuilder, n = 0; n < this.$1.length; n++)i = this.$1[n], t.append(" " + i.toString());
        return t.toString()
    }}, ci = {getImageStream: function () {
        return this.$0
    }}, e.$2 = function () {
        e.$0 == null && e.$3()
    }, e.$3 = function () {
        var n = new Array(175);
        n[27] = 16777215, n[28] = -984833, n[29] = -332841, n[30] = -16711681, n[31] = -8388652, n[32] = -983041, n[33] = -657956, n[34] = -6972, n[35] = -16777216, n[36] = -5171, n[37] = -16776961, n[38] = -7722014, n[39] = -5952982, n[40] = -2180985, n[41] = -10510688, n[42] = -8388864, n[43] = -2987746, n[44] = -32944, n[45] = -10185235, n[46] = -1828, n[47] = -2354116, n[48] = -16711681, n[49] = -16777077, n[50] = -16741493, n[51] = -4684277, n[52] = -5658199, n[53] = -16751616, n[54] = -4343957, n[55] = -7667573, n[56] = -11179217, n[57] = -29696, n[58] = -6737204, n[59] = -7667712, n[60] = -1468806, n[61] = -7357301, n[62] = -12042869, n[63] = -13676721, n[64] = -16724271, n[65] = -7077677, n[66] = -60269, n[67] = -16728065, n[68] = -9868951, n[69] = -14774017, n[70] = -5103070, n[71] = -1296, n[72] = -14513374, n[73] = -65281, n[74] = -2302756, n[75] = -460545, n[76] = -10496, n[77] = -2448096, n[78] = -8355712, n[79] = -16744448, n[80] = -5374161, n[81] = -983056, n[82] = -38476, n[83] = -3318692, n[84] = -11861886, n[85] = -16, n[86] = -989556, n[87] = -1644806, n[88] = -3851, n[89] = -8586240, n[90] = -1331, n[91] = -5383962, n[92] = -1015680, n[93] = -2031617, n[94] = -329006, n[95] = -2894893, n[96] = -7278960, n[97] = -18751, n[98] = -24454, n[99] = -14634326, n[100] = -7876870, n[101] = -8943463, n[102] = -5192482, n[103] = -32, n[104] = -16711936, n[105] = -13447886, n[106] = -331546, n[107] = -65281, n[108] = -8388608, n[109] = -10039894, n[110] = -16777011, n[111] = -4565549, n[112] = -7114533, n[113] = -12799119, n[114] = -8689426, n[115] = -16713062, n[116] = -12004916, n[117] = -3730043, n[118] = -15132304, n[119] = -655366, n[120] = -6943, n[121] = -6987, n[122] = -8531, n[123] = -16777088, n[124] = -133658, n[125] = -8355840, n[126] = -9728477, n[127] = -23296,n[128] = -47872,n[129] = -2461482,n[130] = -1120086,n[131] = -6751336,n[132] = -5247250,n[133] = -2396013,n[134] = -4139,n[135] = -9543,n[136] = -3308225,n[137] = -16181,n[138] = -2252579,n[139] = -5185306,n[140] = -8388480,n[141] = -65536,n[142] = -4419697,n[143] = -12490271,n[144] = -7650029,n[145] = -360334,n[146] = -744352,n[147] = -13726889,n[148] = -2578,n[149] = -6270419,n[150] = -4144960,n[151] = -7876885,n[152] = -9807155,n[153] = -9404272,n[154] = -1286,n[155] = -16711809,n[156] = -12156236,n[157] = -2968436,n[158] = -16744320,n[159] = -2572328,n[160] = -40121,n[161] = -12525360,n[162] = -1146130,n[163] = -663885,n[164] = -1,n[165] = -657931,n[166] = -256,n[167] = -6632142,e.$0 = n
    }, e.$4 = function () {
        e.$1 == null && e.$5()
    }, e.$5 = function () {
        var n = new Array(175);
        n[1] = "ActiveBorder", n[2] = "ActiveCaption", n[3] = "ActiveCaptionText", n[4] = "AppWorkspace", n[168] = "ButtonFace", n[169] = "ButtonHighlight", n[170] = "ButtonShadow", n[5] = "Control", n[6] = "ControlDark", n[7] = "ControlDarkDark", n[8] = "ControlLight", n[9] = "ControlLightLight", n[10] = "ControlText", n[11] = "Desktop", n[171] = "GradientActiveCaption", n[172] = "GradientInactiveCaption", n[12] = "GrayText", n[13] = "Highlight", n[14] = "HighlightText", n[15] = "HotTrack", n[16] = "InactiveBorder", n[17] = "InactiveCaption", n[18] = "InactiveCaptionText", n[19] = "Info", n[20] = "InfoText", n[21] = "Menu", n[173] = "MenuBar", n[174] = "MenuHighlight", n[22] = "MenuText", n[23] = "ScrollBar", n[24] = "Window", n[25] = "WindowFrame", n[26] = "WindowText", n[27] = "Transparent", n[28] = "AliceBlue", n[29] = "AntiqueWhite", n[30] = "Aqua", n[31] = "Aquamarine", n[32] = "Azure", n[33] = "Beige", n[34] = "Bisque", n[35] = "Black", n[36] = "BlanchedAlmond", n[37] = "Blue", n[38] = "BlueViolet", n[39] = "Brown", n[40] = "BurlyWood", n[41] = "CadetBlue", n[42] = "Chartreuse", n[43] = "Chocolate", n[44] = "Coral", n[45] = "CornflowerBlue", n[46] = "Cornsilk", n[47] = "Crimson", n[48] = "Cyan", n[49] = "DarkBlue", n[50] = "DarkCyan", n[51] = "DarkGoldenrod", n[52] = "DarkGray", n[53] = "DarkGreen", n[54] = "DarkKhaki", n[55] = "DarkMagenta", n[56] = "DarkOliveGreen", n[57] = "DarkOrange", n[58] = "DarkOrchid", n[59] = "DarkRed", n[60] = "DarkSalmon", n[61] = "DarkSeaGreen", n[62] = "DarkSlateBlue", n[63] = "DarkSlateGray", n[64] = "DarkTurquoise", n[65] = "DarkViolet", n[66] = "DeepPink", n[67] = "DeepSkyBlue", n[68] = "DimGray", n[69] = "DodgerBlue", n[70] = "Firebrick", n[71] = "FloralWhite", n[72] = "ForestGreen", n[73] = "Fuchsia", n[74] = "Gainsboro", n[75] = "GhostWhite", n[76] = "Gold", n[77] = "Goldenrod", n[78] = "Gray", n[79] = "Green", n[80] = "GreenYellow", n[81] = "Honeydew", n[82] = "HotPink", n[83] = "IndianRed", n[84] = "Indigo", n[85] = "Ivory", n[86] = "Khaki", n[87] = "Lavender", n[88] = "LavenderBlush", n[89] = "LawnGreen", n[90] = "LemonChiffon", n[91] = "LightBlue", n[92] = "LightCoral", n[93] = "LightCyan", n[94] = "LightGoldenrodYellow",n[95] = "LightGray",n[96] = "LightGreen",n[97] = "LightPink",n[98] = "LightSalmon",n[99] = "LightSeaGreen",n[100] = "LightSkyBlue",n[101] = "LightSlateGray",n[102] = "LightSteelBlue",n[103] = "LightYellow",n[104] = "Lime",n[105] = "LimeGreen",n[106] = "Linen",n[107] = "Magenta",n[108] = "Maroon",n[109] = "MediumAquamarine",n[110] = "MediumBlue",n[111] = "MediumOrchid",n[112] = "MediumPurple",n[113] = "MediumSeaGreen",n[114] = "MediumSlateBlue",n[115] = "MediumSpringGreen",n[116] = "MediumTurquoise",n[117] = "MediumVioletRed",n[118] = "MidnightBlue",n[119] = "MintCream",n[120] = "MistyRose",n[121] = "Moccasin",n[122] = "NavajoWhite",n[123] = "Navy",n[124] = "OldLace",n[125] = "Olive",n[126] = "OliveDrab",n[127] = "Orange",n[128] = "OrangeRed",n[129] = "Orchid",n[130] = "PaleGoldenrod",n[131] = "PaleGreen",n[132] = "PaleTurquoise",n[133] = "PaleVioletRed",n[134] = "PapayaWhip",n[135] = "PeachPuff",n[136] = "Peru",n[137] = "Pink",n[138] = "Plum",n[139] = "PowderBlue",n[140] = "Purple",n[141] = "Red",n[142] = "RosyBrown",n[143] = "RoyalBlue",n[144] = "SaddleBrown",n[145] = "Salmon",n[146] = "SandyBrown",n[147] = "SeaGreen",n[148] = "SeaShell",n[149] = "Sienna",n[150] = "Silver",n[151] = "SkyBlue",n[152] = "SlateBlue",n[153] = "SlateGray",n[154] = "Snow",n[155] = "SpringGreen",n[156] = "SteelBlue",n[157] = "Tan",n[158] = "Teal",n[159] = "Thistle",n[160] = "Tomato",n[161] = "Turquoise",n[162] = "Violet",n[163] = "Wheat",n[164] = "White",n[165] = "WhiteSmoke",n[166] = "Yellow",n[167] = "YellowGreen",e.$1 = n
    }, e.knownColorToArgb = function (n) {
        return(e.$2(), n <= 174) ? e.$0[n] : 0
    }, e.knownColorToName = function (n) {
        return(e.$4(), n <= 174) ? e.$1[n] : null
    }, e.knownColorFromName = function (n) {
        return e.$4(), e.$1.indexOf(n)
    }, l.symetricMargins = function (n) {
        return new l(n, n, n, n)
    }, l.add = function (n, t) {
        return new l(n.top + t.top, n.bottom + t.bottom, n.left + t.left, n.right + t.right)
    }, l.multiply = function (n, t) {
        var i = Math.max(n.left, t.left), r = Math.max(n.top, t.top), u = Math.max(n.right, t.right), f = Math.max(n.bottom, t.bottom);
        return new l(r, f, i, u)
    }, li = {equals: function (n) {
        var t = ss.safeCast(n, l);
        return t != null && this.left === t.left && this.top === t.top && this.right === t.right && this.bottom === t.bottom ? !0 : !1
    }, convertUnits: function (n, t) {
        var i = n.k / t.k;
        return new l(this.top * i, this.bottom * i, this.left * i, this.right * i)
    }, isEmpty: function () {
        return!this.left && !this.top && !this.right && !this.bottom
    }, size: function () {
        return new r(this.left + this.right, this.top + this.bottom)
    }}, ai = {getColor: function () {
        return this.$0
    }, setColor: function (n) {
        this.$0 = n
    }, getDashStyle: function () {
        return this.$1
    }, setDashStyle: function (n) {
        this.$1 = n
    }, getDashCap: function () {
        return this.$2
    }, setDashCap: function (n) {
        this.$2 = n
    }, getDashOffset: function () {
        return this.$3
    }, setDashOffset: function (n) {
        this.$3 = n
    }, getDashPattern: function () {
        return this.$4
    }, setDashPattern: function (n) {
        this.$4 = n
    }, getWidth: function () {
        return this.$5
    }, setWidth: function (n) {
        this.$5 = n
    }}, t.getStandardUnits = function () {
        return[t.inch, t.millimeter, t.centimeter, t.pixel, t.point, t.twip]
    }, t.convert = function (n, t, i) {
        var r = t.k / i.k;
        return n * r
    }, t.fromName = function (n) {
        for (var r = ss.enumerate(t.getStandardUnits()), i; r.moveNext();)if (i = r.current, i.name === n || i.shortName === n)return i;
        return new t("", "", 1)
    }, t.toInternalUnit = function (n, i) {
        return t.convert(n, i, t.internalUnit)
    }, t.rectToPixel = function (n) {
        var i = t.internalToPixel(n.x), r = t.internalToPixel(n.y), f = t.internalToPixel(n.width), e = t.internalToPixel(n.height);
        return new u(i, r, f, e)
    }, t.rectToInternal = function (n) {
        var i = t.pixelToInternal(n.x), r = t.pixelToInternal(n.y), f = t.pixelToInternal(n.width), e = t.pixelToInternal(n.height);
        return new u(i, r, f, e)
    }, t.vectorToPixel = function (n) {
        return new r(t.internalToPixel(n.x), t.internalToPixel(n.y))
    }, t.vectorToInternal = function (n) {
        return new r(t.pixelToInternal(n.x), t.pixelToInternal(n.y))
    }, t.fromInternalUnit = function (n, i) {
        return t.convert(n, t.internalUnit, i)
    }, t.internalToPixel = function (n) {
        return t.convert(n, t.internalUnit, t.pixel)
    }, t.pixelToInternal = function (n) {
        return t.convert(n, t.pixel, t.internalUnit)
    }, vi = {equals: function (n) {
        var i = ss.safeCast(n, t);
        return i == null ? !1 : this.name === i.name && this.shortName === i.shortName && this.k === i.k
    }}, y.castToColor = function (t) {
        var r, c, s;
        if (ss.canCast(t, n))return t;
        if (ss.canCast(t, String)) {
            if (r = t, r.match(new RegExp("([0-9]+,)?[0-9]+,[0-9]+,[0-9]+")) != null) {
                var s = null, i = r.split(","), h = 255, u = 0, f = 0, o = 0;
                return i.length === 3 ? (u = parseInt(i[0]), f = parseInt(i[1]), o = parseInt(i[2]), n.fromArgb(h, u, f, o)) : i.length === 4 ? (h = parseInt(i[0]), u = parseInt(i[1]), f = parseInt(i[2]), o = parseInt(i[3]), n.fromArgb(h, u, f, o)) : null
            }
            return c = e.knownColorFromName(r), s = n.createKnownColor(c), s
        }
        return null
    }, y.oldFormat = function (n, t) {
        return y.netFormat(t, n)
    }, y.netFormat = function (n, t) {
        var i, r, d, h, p, w;
        if (n.match(new RegExp("^[a-zA-Z]*[0-9]*$")) != null && (i = ss.format("{0:" + n + "}", t), !ss.emptyString(i)))return i;
        var v = ".", y = ",", a = n.indexOf("."), o, s, c = 0, l = 0, b = 0, k = 0;
        for (a === -1 || a === n.length - 1 ? (o = n, s = "") : (o = n.substring(0, a), s = n.substring(a + 1, n.length)), r = 0, r = 0; r < s.length; r++)s[r] === "#" && l++, s[r] === "0" && (l++, k = l), s[r] === "\\" && r++;
        for (r = o.length - 1; r >= 0; r--) {
            if (!!r && o[r - 1] === "\\") {
                r--;
                continue
            }
            o[r] === "#" && c++, o[r] === "0" && (c++, b = c)
        }
        for (i = ss.format("{0:F" + l.toString() + "}", t), d = ss.format("{0:F0}", Math.floor(t)), h = d.length; h < b;)i = ss.insertString(i, 0, "0"), h++;
        while (h < c)i = ss.insertString(i, 0, " "), h++;
        for (p = l - k; p > 0 && i[i.length - 1] === "0";)i = ss.removeString(i, i.length - 1), p--;
        if (w = h - c, n.indexOf(",") !== -1)for (r = i.indexOf(v) - 3; r > 0;)i = ss.insertString(i, r, y), r = r - 3;
        for (var f = new ss.StringBuilder, u = 0, e = 0, g; e < n.length;) {
            g = n[e];
            switch (g) {
                case"0":
                case"#":
                    while (w > 0)f.append(i[u]), u++, i[u] === y && (f.append(i[u]), u++), w--;
                    if (u >= i.length)break;
                    if (i[u] !== " " && f.append(i[u]), u++, u >= i.length)break;
                    i[u] === y && (f.append(i[u]), u++);
                    break;
                case"\\":
                    e++, e < n.length && f.append(n[e]);
                    break;
                case",":
                    break;
                case".":
                    i[u] === v && (f.append(v), u++);
                    break;
                default:
                    f.append(n[e])
            }
            e++
        }
        return f.toString()
    }, y.JS = function () {
    }, i.insertMockDiv = function (n) {
        var t = document.createElement("div");
        return t.id = "_PerpetuumMeasureStringDiv", document.body.appendChild(t), t.style.whiteSpace = "nowrap", t.style.position = "absolute", t.style.left = "0", t.style.top = "0", t.style.display = "block", t.style.fontFamily = n.fontFamily.name, t.style.fontSize = n.sizeInPoints.toString() + "pt", t.style.visibility = "hidden", i.stylesAreCrossing(n.style, 2) && (t.style.fontStyle = "italic"), i.stylesAreCrossing(n.style, 1) && (t.style.fontWeight = "bold"), i.stylesAreCrossing(n.style, 4) ? t.style.textDecoration = "underline" : i.stylesAreCrossing(n.style, 8) && (t.style.textDecoration = "line-through"), t
    }, i.deleteMockDiv = function (n) {
        document.body.removeChild(n)
    }, i.$2 = function (n, t) {
        for (var h = typeof t.split == "function" ? t.split("\n") : [t], f = ss.enumerate(h), e, u, o, i, s; f.moveNext();)e = f.current, u = document.createElement("p"), u.innerHTML = e, n.appendChild(u);
        for (o = new r(n.offsetWidth, n.offsetHeight), i = 0; i < n.childNodes.length; i++)s = n.childNodes[i], n.removeChild(s);
        return o
    }, i.splitText = function (n, t, r) {
        for (var s = i.insertMockDiv(r), e = [], u = new String, f, o; !(n == null && !n);) {
            for (o = !0, u = new String, f = 0; f < n.length; f++)if (n.charAt(f) === "\n") {
                n = n.substr(u.length + 1), e.push(u.substring(0, u.length)), o = !1;
                break
            } else if (u = u + n.charAt(f), i.$2(s, u).x > t) {
                n = n.substr(u.length - 1), e.push(u.substring(0, u.length - 1)), o = !1;
                break
            }
            if (o) {
                e.push(n), n = null;
                break
            }
        }
        return i.deleteMockDiv(s), e
    }, i.wordWrapText = function (n, t, r) {
        for (var o = [], s = i.insertMockDiv(r), f = n.split("\n"), h, e, u = 0; u < f.length; u++)if (i.$2(s, f[u]).x > t)for (h = i.$3(f[u], t, s), e = 0; e < h.length; e++)o.push(h[e]); else o.push(f[u]);
        return i.deleteMockDiv(s), o
    }, i.$3 = function (n, t, r) {
        for (var e = [], o = n.split(" "), u = new ss.StringBuilder, s, l, c, h, f = 0; f < o.length; f++) {
            if (i.$2(r, o[f]).x > t) {
                for (u.isEmpty || e.push(u.toString()), s = i.$4(o[f], t, r), l = s[s.length - 1], c = 0; c < s.length - 1; c++)e.push(s[c]);
                u = new ss.StringBuilder(l);
                continue
            }
            h = new ss.StringBuilder(u.toString()), u.isEmpty || h.append(" "), h.append(o[f]), i.$2(r, h.toString()).x > t ? (e.push(u.toString()), u = new ss.StringBuilder(o[f])) : u = new ss.StringBuilder(h.toString())
        }
        return u.isEmpty || e.push(u.toString()), e
    }, i.$4 = function (n, t, r) {
        for (var e = [], u = new ss.StringBuilder, o, f = 0; f < n.length; f++) {
            if (i.$2(r, n[f].toString()).x > t) {
                u.isEmpty || e.push(u.toString()), e.push(n[f].toString()), u = new ss.StringBuilder;
                continue
            }
            o = new ss.StringBuilder(u.toString()), o.append(n[f]), i.$2(r, o.toString()).x < t ? u = new ss.StringBuilder(o.toString()) : (e.push(u.toString()), u = new ss.StringBuilder(n[f].toString()))
        }
        return e.push(u.toString()), e
    }, i.measureText = function (n, t, r) {
        return i.$2(r, n)
    }, i.stylesAreCrossing = function (n, t) {
        return(n & t) > 0
    }, i.rasterizeText = function (n, r, u, f) {
        var e, o, s, h;
        return(i.$0 == null || i.$1 == null) && i.$5(f), i.$1.fillStyle = "Black", i.$1.strokeStyle = "Black", i.$1.fillRect(0, 0, ss.truncate(f.x), ss.truncate(f.y)), e = "", i.stylesAreCrossing(n.style, 2) && (e += "italic "), i.stylesAreCrossing(n.style, 1) && (e += "bold "), i.$1.font = n.sizeInPoints + "pt " + n.fontFamily.name, i.$1.font = e + "" + i.$1.font, i.$1.fillStyle = "White", o = t.internalToPixel(u.x), s = t.internalToPixel(u.y), i.$1.fillText(r, o, s + n.sizeInPoints + 2), h = i.$1.getImageData(0, 0, ss.truncate(f.x), ss.truncate(f.y)).data, i.$6(), h
    }, i.castToString = function (n) {
        return n == null ? "" : n.toString() + ""
    }, i.$5 = function (n) {
        if (i.$0 = document.createElement("canvas"), i.$0.style.visibility = "hidden", i.$0.setAttribute("id", "_PerpetuumCanvas"), i.$0.width = ss.truncate(n.x), i.$0.height = ss.truncate(n.y), document.body.appendChild(i.$0), i.$1 = i.$0.getContext("2d"), i.$0 == null || i.$1 == null)throw new Error("Can not create canvas element");
    }, i.$6 = function () {
        i.$0 != null && (document.body.removeChild(i.$0), i.$1 = null, i.$0 = null)
    }, yi = {}, p.sign = function (n) {
        return n > 0 ? 1 : n < 0 ? -1 : 0
    }, p.round = function (n, t) {
        return Math.round(n * Math.pow(10, t)) / Math.pow(10, t)
    },p.log = function (n, t) {
        return Math.log(n) / Math.log(t)
    },h.s = function () {
        var n = ((1 + Math.random()) * 65536).toString(16), t = n.length;
        return n.substr(t - 2, 1)
    },h.newGuid = function () {
        return h.s() + h.s() + h.s() + h.s() + "-" + h.s() + h.s() + h.s() + h.s() + "-" + h.s() + h.s() + h.s() + h.s() + h.s()
    },o.radianToDegree = function (n) {
        return n * 180 / Math.PI
    },o.getEllipse = function (n) {
        var t = n.width / Math.sqrt(2), i = n.height / Math.sqrt(2);
        return new st(n.getCenter(), new r(t, i))
    },o.getTransformMatrix = function (n, t) {
        var i = Math.sin(t), r = Math.cos(t), u = i, e = r, o = -r, s = i, h = n.x * (1 - i) + n.y * r, c = n.y * (1 - i) - n.x * r;
        return f.buildTransformationMatrix(u, e, o, s, h, c)
    },o.getEllipsePoint = function (n, t, i) {
        i = i < 0 ? i % 360 + 360 : i % 360;
        var f, u, e, c, s, h;
        return s = Math.PI * i / 180, f = t.x, u = t.y, h = Math.tan(s), Math.abs(h) > o.$0 ? (e = n.x, c = s > 4.69 && s < 4.72 ? n.y - u : n.y + u) : t !== r.empty ? (e = n.x + Math.sqrt(f * f * u * u / (u * u + f * f * h * h)) * p.sign(Math.cos(s)), c = n.y + (e - n.x) * h) : (e = n.x, c = n.y), new r(e, c)
    },o.getEllipseRadius = function (n, t) {
        var i = n.height / 2, r = n.width / 2, u = Math.cos(t), f = Math.sin(t);
        return r * i / Math.sqrt(i * i * u * u + r * r * f * f)
    },o.isLineIncludePoint = function (n, t, i, r) {
        var f = i.minus(t), u = i.minus(n), e = u.getRotation() - f.getRotation();
        return u.setRotation(e), u.x <= f.getLength() && u.x >= 0 && Math.abs(u.y) < r
    },o.rotateVector = function (n, t, i) {
        var r = n.minus(t), u = r.getRotation() + i;
        return r.setRotation(u), r.add(t)
    },o.getPolygonBox = function (n) {
        var t;
        if (!n.length)return u.empty;
        for (var i = n[0].x, r = n[0].y, f = n[0].x, e = n[0].y, o = ss.enumerate(n); o.moveNext();)t = o.current, i > t.x && (i = t.x), r > t.y && (r = t.y), f < t.x && (f = t.x), e < t.y && (e = t.y);
        return new u(i, r, f - i, e - r)
    },o.isIncludePoint = function (n, t) {
        var r, i;
        if (n.length < 3)return!1;
        for (r = 0, i = 0; i < n.length - 1; i++)r += o.$1(n[i], n[i + 1], t) ? 1 : 0;
        return(r + (o.$1(n[0], n[n.length - 1], t) ? 1 : 0)) % 2 == 1
    },o.$1 = function (n, t, i) {
        var u = 0, r = 1e-5;
        return Math.abs(n.y - t.y) < r && Math.abs(i.y - n.y) < r && (i.x - n.x) * (i.x - t.x) < 0 ? !1 : (n.y - i.y) * (t.y - i.y) > 0 ? !1 : (u = t.x - (t.y - i.y) / (t.y - n.y) * (t.x - n.x), Math.abs(u - i.x) < r) ? !1 : u < i.x ? Math.abs(n.y - i.y) < r && n.y < t.y ? !1 : Math.abs(t.y - i.y) < r && t.y < n.y ? !1 : !0 : !1
    },o.degreeToRadian = function (n) {
        return n * Math.PI / 180
    },o.getDistance = function (n, t) {
        return Math.sqrt((n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y))
    },o.isPieIncludePoint = function (n, t, i, u, f, e) {
        var l = t.getSize().x / 2 + e, a = t.getSize().y / 2 + e, s = o.rotateVector(n, t.getCenter(), r.toRadians(-i)).minus(t.getCenter()), v = (r.toDegrees(s.getRotation()) + 360) % 360, y = s.x * s.x / l / l + s.y * s.y / a / a, c = u, h = f;
        return h < 0 && (c = c + h, h = -h), y <= 1 && (v - c + 360) % 360 <= h
    },pi = {getFill: function () {
        return this.$0
    }, setFill: function (n) {
        this.$0 = n
    }, getFont: function () {
        return this.$1
    }, setFont: function (n) {
        this.$1 = n
    }, getImage: function () {
        return this.$2
    }, setImage: function (n) {
        this.$2 = n
    }, getName: function () {
        return this.$3
    }, setName: function (n) {
        this.$3 = n
    }, getStroke: function () {
        return this.$4
    }, setStroke: function (n) {
        this.$4 = n
    }, toString: function () {
        return ss.value(this.getName(), "")
    }},wi = {add: function (n) {
        var t = this.$0.length;
        this.onInsert(t, n);
        this.$0.push(n);
        this.onInsertComplete(t, n);
        return n
    }, addRange: function (n) {
        for (var t = ss.enumerate(n), i; t.moveNext();)i = t.current, this.add(i)
    }, remove: function (n) {
        var t = n, i = this.$0.indexOf(t);
        ss.remove(this.$0, n);
        this.onRemoveComplete(i, t)
    }, insert: function (n, t) {
        this.onInsert(n, t);
        this.$0.splice(n, 0, t);
        this.onInsertComplete(n, t)
    }, contains: function (n) {
        return this.$0.indexOf(ss.safeCast(n, Object)) >= 0
    }, indexOf: function (n) {
        return this.$0.indexOf(n)
    }, count: function () {
        return this.$0.length
    }, getStyleByIndex: function (n) {
        return ss.safeCast(this.$0[n], it)
    }, setStyleByIndex: function (n, t) {
        this.$0[n] = t
    }, getStyleByName: function (n) {
        for (var i = ss.enumerate(this.$0), t; i.moveNext();)if (t = i.current, t.getName() === n)return t;
        return null
    }, setStyleByName: function () {
    }, onInsert: function (n, t) {
        if (this.contains(ss.safeCast(t, it)))throw new Error("AddElementTwice");
    }, onInsertComplete: function () {
    }, onRemoveComplete: function () {
    }, onValidate: function (n) {
        if (!ss.canCast(n, it))throw new Error("InvalidTypeObjectPlaceInCollection");
    }, clear: function () {
        this.$0.length = 0
    }},bi = {},ki = {getBackColor: function () {
        return this.$1
    }, setBackColor: function (n) {
        this.$1 = n
    }, getForeColor: function () {
        return this.$2
    }, setForeColor: function (n) {
        this.$2 = n
    }, createBrush: function () {
        return new et(this.$2)
    }, getReplaceColor: function () {
        return v.middleColor(this.$1, this.$2)
    }},di = {getColors: function () {
        return this.$2
    }, setColors: function (n) {
        this.$2 = this.$3(n)
    }, $3: function (n) {
        for (var i = n, r = !1, t, u; !r;)for (r = !0, t = 0; t < i.getCount() - 1; t++)i.get(t).getPortion() > i.get(t + 1).getPortion() && (u = i.get(t + 1), i.set(t + 1, i.get(t)), i.set(t, u), r = !1);
        return i
    }, getAngle: function () {
        return this.$1
    }, setAngle: function (n) {
        this.$1 = n
    }, getMinPortion: function () {
        return this.$2.get(0).getPortion()
    }, getMaxPortion: function () {
        var n = this.$2.getCount() - 1;
        return this.$2.get(n).getPortion()
    }, createBrush: function () {
        throw new Error("not implemented");
    }, getReplaceColor: function () {
        for (var i = 0, r = 0, u = 0, f = 0, t, e = 0; e < this.$2.getCount(); e++)t = this.$2.get(e), i += t.getColor().a(), r += t.getColor().r(), u += t.getColor().g(), f += t.getColor().b();
        return!this.$2.getCount() ? n.gray : (i = i / this.$2.getCount(), r = r / this.$2.getCount(), u = u / this.$2.getCount(), f = f / this.$2.getCount(), n.fromArgb(ss.truncate(i), ss.truncate(r), ss.truncate(u), ss.truncate(f)))
    }},gi = {add: function (n) {
        this.$1.push(n)
    }, addRange: function (n) {
        this.$1.push(n)
    }, get_count: function () {
        return this.$1.length
    }, toString: function () {
        var t = new ss.StringBuilder, n;
        for (t.append(nt.prototype.toString.call(this)), n = 0; n < this.$1.length; n++)t.append(" " + this.$1[n].toString());
        return t.toString()
    }, get_item: function (n) {
        return this.$1[n]
    }},nr = {getColorSections: function () {
        return this.$0
    }, setColorSections: function (n) {
        this.$0 = this.$1(n)
    }, getColor: function (t) {
        for (var i = 0; this.$0.length > i && this.$0[i].getPortion() < t;)i++;
        return this.$0.length > i ? this.$0[i].getColor() : n.black
    }, $1: function (n) {
        for (var i = n.slice(0), r = !1, t, u; !r;)for (r = !0, t = 0; t < i.length - 1; t++)i[t].getPortion() > i[t + 1].getPortion() && (u = i[t + 1], i[t + 1] = i[t], i[t] = u, r = !1);
        return i
    }},tr = {setColor: function (n) {
        this.$0 = n
    }, getColor: function () {
        return this.$0
    }},ir = {},rr = {setEndColor: function (n) {
        this.$2 = n
    }, getEndColor: function () {
        return this.$2
    }, getStartColor: function () {
        return this.$1
    }, setStartColor: function (n) {
        this.$1 = n
    }, setAngle: function (n) {
        this.$3 = n
    }, getAngle: function () {
        return this.$3
    }, setDelta: function (n) {
        this.$4 = n
    }, getDelta: function () {
        return this.$4
    }, getColors: function () {
        var n = new g, t = new k(this.$2, 0), i = new k(this.$1, 1);
        return n.add(t), n.add(i), n
    }, setColors: function () {
    }, createBrush: function () {
        throw new Error("not implemented");
    }, getReplaceColor: function () {
        return v.middleColor(this.$1, this.$2)
    }},fr = {createBrush: function () {
        return null
    }, getReplaceColor: function () {
        return n.empty
    }},ot.fromParams = function (n, t, i) {
        var r = new ot;
        return r.setStartColor(n), r.setEndColor(t), r.setAngle(i), r
    },er = {getColors: function () {
        var n = new g;
        return n.add(new k(this.$2, 0)), n.add(new k(this.$1, 1)), n
    }, setColors: function () {
    }, getStartColor: function () {
        return this.$1
    }, setStartColor: function (n) {
        this.$1 = n
    }, getEndColor: function () {
        return this.$2
    }, setEndColor: function (n) {
        this.$2 = n
    }, getAngle: function () {
        return this.$3
    }, setAngle: function (n) {
        this.$3 = n
    }, createBrush: function () {
        throw new Error("not implemented");
    }, getReplaceColor: function () {
        return v.middleColor(this.$1, this.$2)
    }},or = {setColor: function (n) {
        this.color = n
    }, createBrush: function () {
        return new et(this.color)
    }, getReplaceColor: function () {
        return this.color
    }},hr = {apply: function (n) {
        return n
    }, reverse: function (n) {
        return n
    }, getTransformationMatrix: function () {
        return f.eye(3)
    }},cr = {$2: function (n, t) {
        var i = new f(3, 1), u;
        return i.set(0, 0, t.x), i.set(1, 0, t.y), i.set(2, 0, 1), u = n.multiply(i), new r(u.get(0, 0), u.get(1, 0))
    }, apply: function (n) {
        return this.$2(this.$0, n)
    }, reverse: function (n) {
        return this.$1 == null && (this.$1 = this.$0.reverse()), this.$2(this.$1, n)
    }, getTransformationMatrix: function () {
        return this.$0
    }, setTransformationMatrix: function (n) {
        this.$0 = n
    }},ar = {getAngle: function () {
        return this.$0
    }, setAngle: function (n) {
        this.$0 = n
    }, getCenter: function () {
        return this.$1
    }, setCenter: function (n) {
        this.$1 = n
    }, $2: function (n, t, i) {
        var u = i.minus(n), f = o.degreeToRadian(t), e = u.x * Math.cos(f) - u.y * Math.sin(f), s = u.x * Math.sin(f) + u.y * Math.cos(f);
        return new r(e, s).add(n)
    }, apply: function (n) {
        return this.$2(this.$1, this.$0, n)
    }, reverse: function (n) {
        return this.$2(this.$1, -this.$0, n)
    }, getTransformationMatrix: function () {
        return f.buildTranslationMatrix(-this.$1.x, -this.$1.y).multiply(f.buildRotationMatrix(this.$0)).multiply(f.buildTranslationMatrix(this.$1.x, this.$1.y))
    }},vr = {getScale: function () {
        return this.$0
    }, setScale: function (n) {
        this.$0 = n
    }, apply: function (n) {
        return n.multiply(this.$0)
    }, reverse: function (n) {
        return n.divide(this.$0)
    }, getTransformationMatrix: function () {
        return f.buildScaleMatrix(this.$0.x, this.$0.y)
    }},yr = {getTranslation: function () {
        return this.$0
    }, setTranslation: function (n) {
        this.$0 = n
    }, apply: function (n) {
        return n.add(this.$0)
    }, reverse: function (n) {
        return n.minus(this.$0)
    }, getTransformationMatrix: function () {
        return f.buildTranslationMatrix(this.$0.x, this.$0.y)
    }},pr = {},wr = ss.module("PerfectWidgetsFramework", {IPathElement: [br], LinearGradientBrush: [ru, ui, null]}, {RotationDirection: {noCycles: 0, clockwise: 1, anticlockwise: 2, nearestWay: 3}, Direction: {x: 0, y: 1}, FontStyle: {regular: 0, bold: 1, italic: 2, underline: 4, strikeout: 8}, GraphicsPathElementType: {moveTo: 0, lineTo: 1, closePath: 2, horizontalLineTo: 3, verticalLineTo: 4, ellipticalArc: 5}, HatchStyle: {backwardDiagonal: 3, cross: 4, darkDownwardDiagonal: 20, darkHorizontal: 29, darkUpwardDiagonal: 21, darkVertical: 28, dashedDownwardDiagonal: 30, dashedHorizontal: 32, dashedUpwardDiagonal: 31, dashedVertical: 33, diagonalBrick: 38, diagonalCross: 5, divot: 42, dottedDiamond: 44, dottedGrid: 43, forwardDiagonal: 2, horizontal: 0, horizontalBrick: 39, largeCheckerBoard: 50, largeConfetti: 35, largeGrid: 4, lightDownwardDiagonal: 18, lightHorizontal: 25, lightUpwardDiagonal: 19, lightVertical: 24, max: 4, min: 0, narrowHorizontal: 27, narrowVertical: 26, outlinedDiamond: 51, percent05: 6, percent10: 7, percent20: 8, percent25: 9, percent30: 10, percent40: 11, percent50: 12, percent60: 13, percent70: 14, percent75: 15, percent80: 16, percent90: 17, plaid: 41, shingle: 45, smallCheckerBoard: 49, smallConfetti: 34, smallGrid: 48, solidDiamond: 52, sphere: 47, trellis: 46, vertical: 1, wave: 37, weave: 40, wideDownwardDiagonal: 22, wideUpwardDiagonal: 23, zigZag: 36}, PathPointType: {start: 0, line: 1, bezier3: 3, bezier: 3, pathTypeMask: 7, dashMode: 16, pathMarker: 32, closeSubpath: 128}, ContentAlignment: {topLeft: 1, topCenter: 2, topRight: 4, middleLeft: 16, middleCenter: 32, middleRight: 64, bottomLeft: 256, bottomCenter: 512, bottomRight: 1024}, DashCap: {flat: 0, round: 2, triangle: 3}, DashStyle: {empty: 0, solid: 1, dash: 2, dot: 3, dashDot: 4, dashDotDot: 5, custom: 6}, FillMode: {alternate: 0, winding: 1}, GraphicsUnit: {world: 0, display: 1, pixel: 2, point: 3, inch: 4, document: 5, millimeter: 6}, KnownColor: {activeBorder: 1, activeCaption: 2, activeCaptionText: 3, aliceBlue: 28, antiqueWhite: 29, appWorkspace: 4, aqua: 30, aquamarine: 31, azure: 32, beige: 33, bisque: 34, black: 35, blanchedAlmond: 36, blue: 37, blueViolet: 38, brown: 39, burlyWood: 40, buttonFace: 168, buttonHighlight: 169, buttonShadow: 170, cadetBlue: 41, chartreuse: 42, chocolate: 43, control: 5, controlDark: 6, controlDarkDark: 7, controlLight: 8, controlLightLight: 9, controlText: 10, coral: 44, cornflowerBlue: 45, cornsilk: 46, crimson: 47, cyan: 48, darkBlue: 49, darkCyan: 50, darkGoldenrod: 51, darkGray: 52, darkGreen: 53, darkKhaki: 54, darkMagenta: 55, darkOliveGreen: 56, darkOrange: 57, darkOrchid: 58, darkRed: 59, darkSalmon: 60, darkSeaGreen: 61, darkSlateBlue: 62, darkSlateGray: 63, darkTurquoise: 64, darkViolet: 65, deepPink: 66, deepSkyBlue: 67, desktop: 11, dimGray: 68, dodgerBlue: 69, firebrick: 70, floralWhite: 71, forestGreen: 72, fuchsia: 73, gainsboro: 74, ghostWhite: 75, gold: 76, goldenrod: 77, gradientActiveCaption: 171, gradientInactiveCaption: 172, gray: 78, grayText: 12, green: 79, greenYellow: 80, highlight: 13, highlightText: 14, honeydew: 81, hotPink: 82, hotTrack: 15, inactiveBorder: 16, inactiveCaption: 17, inactiveCaptionText: 18, indianRed: 83, indigo: 84, info: 19, infoText: 20, ivory: 85, khaki: 86, lavender: 87, lavenderBlush: 88, lawnGreen: 89, lemonChiffon: 90, lightBlue: 91, lightCoral: 92, lightCyan: 93, lightGoldenrodYellow: 94, lightGray: 95, lightGreen: 96, lightPink: 97, lightSalmon: 98, lightSeaGreen: 99, lightSkyBlue: 100, lightSlateGray: 101, lightSteelBlue: 102, lightYellow: 103, lime: 104, limeGreen: 105, linen: 106, magenta: 107, maroon: 108, mediumAquamarine: 109, mediumBlue: 110, mediumOrchid: 111, mediumPurple: 112, mediumSeaGreen: 113, mediumSlateBlue: 114, mediumSpringGreen: 115, mediumTurquoise: 116, mediumVioletRed: 117, menu: 21, menuBar: 173, menuHighlight: 174, menuText: 22, midnightBlue: 118, mintCream: 119, mistyRose: 120, moccasin: 121, navajoWhite: 122, navy: 123, oldLace: 124, olive: 125, oliveDrab: 126, orange: 127, orangeRed: 128, orchid: 129, paleGoldenrod: 130, paleGreen: 131, paleTurquoise: 132, paleVioletRed: 133, papayaWhip: 134, peachPuff: 135, peru: 136, pink: 137, plum: 138, powderBlue: 139, purple: 140, red: 141, rosyBrown: 142, royalBlue: 143, saddleBrown: 144, salmon: 145, sandyBrown: 146, scrollBar: 23, seaGreen: 147, seaShell: 148, sienna: 149, silver: 150, skyBlue: 151, slateBlue: 152, slateGray: 153, snow: 154, springGreen: 155, steelBlue: 156, tan: 157, teal: 158, thistle: 159, tomato: 160, transparent: 27, turquoise: 161, violet: 162, wheat: 163, white: 164, whiteSmoke: 165, window: 24, windowFrame: 25, windowText: 26, yellow: 166, yellowGreen: 167}, LineStyle: {none: 0, solid: 1, dot: 2, dash: 3, dashDot: 4, dashDotDot: 5}, Ellipse: [st, {getCenter: function () {
        return this.$0
    }, setCenter: function (n) {
        this.$0 = n
    }, getRadii: function () {
        return this.$1
    }, setRadii: function (n) {
        this.$1 = n
    }}, null], Matrix: [f, ht, null], RangeValue: [rt, ct, null], Segment: [kr, lt, null], Point: [dr, at, null], Vector: [r, vt, null], VectorRectangle: [u, yt, null], Colorizer: [b, pt, null], Stroke: [gr, wt, null], ColorSection: [nu, bt, null], EllipticArcParameters: [a, kt, null], Font: [tu, dt, null], FontFamily: [iu, gt, null], GradientColor: [k, ni, null], GradientColorCollection: [g, ti, null], GraphicsPathElement: [nt, ii, null], GraphicsUtilites: [v, ri, null], Brush: [ut, fi, null], Color: [n, ei, null], ColorTranslator: [d, oi, null], Fill: [s, si, null], GraphicsPath: [tt, hi, null], Image: [uu, ci, null], KnownColorTable: [e, null, null], Margins: [l, li, null], Pen: [fu, ai, null], Unit: [t, vi, null], BuiltIn: [y, null, null], TextUtilities: [i, yi, null], MathHelper: [p, null, null], Guid: [h, null, null], GeometryUtilities: [o, null, null], Style: [it, pi, null], StyleCollection: [eu, wi, null], AbstractTransformation: [c, bi, null], HatchFill: [ou, ki, s], MultiGradientFill: [ft, di, s], PathElementCollection: [w, gi, nt], SectionsColorizer: [su, nr, b], SingleColorColorizer: [hu, tr, b], SolidBrush: [et, ir, ut], SphericalFill: [cu, rr, s], EmptyFill: [ur, fr, s], LinearGradientFill: [ot, er, s], SolidFill: [lu, or, s], MockTransformation: [sr, hr, c], MatrixTransformation: [au, cr, c], RotateTransformation: [lr, ar, c], ScaleTransformation: [vu, vr, c], TranslateTransformation: [yu, yr, c], ConicalFill: [pu, pr, ft]}),r.empty = new r(0, 0),u.empty = new u(0, 0, 0, 0),n.$0 = 8,n.$1 = 0,n.$2 = 2,n.$3 = 1,n.$4 = 2,n.empty = new n(n.$b(0, 0, 0, 0), 0, null, 0),n.transparent = n.createKnownColor(27),n.aliceBlue = n.createKnownColor(28),n.antiqueWhite = n.createKnownColor(29),n.aqua = n.createKnownColor(30),n.aquamarine = n.createKnownColor(31),n.azure = n.createKnownColor(32),n.beige = n.createKnownColor(33),n.bisque = n.createKnownColor(34),n.black = n.createKnownColor(35),n.blanchedAlmond = n.createKnownColor(36),n.blue = n.createKnownColor(37),n.blueViolet = n.createKnownColor(38),n.brown = n.createKnownColor(39),n.burlyWood = n.createKnownColor(40),n.cadetBlue = n.createKnownColor(41),n.chartreuse = n.createKnownColor(42),n.chocolate = n.createKnownColor(43),n.control = n.createKnownColor(5),n.coral = n.createKnownColor(44),n.cornflowerBlue = n.createKnownColor(45),n.cornsilk = n.createKnownColor(46),n.crimson = n.createKnownColor(47),n.cyan = n.createKnownColor(48),n.darkBlue = n.createKnownColor(49),n.darkCyan = n.createKnownColor(50),n.darkGoldenrod = n.createKnownColor(51),n.darkGray = n.createKnownColor(52),n.darkGreen = n.createKnownColor(53),n.darkKhaki = n.createKnownColor(54),n.darkMagenta = n.createKnownColor(55),n.darkOliveGreen = n.createKnownColor(56),n.darkOrange = n.createKnownColor(57),n.darkOrchid = n.createKnownColor(58),n.darkRed = n.createKnownColor(59),n.darkSalmon = n.createKnownColor(60),n.darkSeaGreen = n.createKnownColor(61),n.darkSlateBlue = n.createKnownColor(62),n.darkSlateGray = n.createKnownColor(63),n.darkTurquoise = n.createKnownColor(64),n.darkViolet = n.createKnownColor(65),n.deepPink = n.createKnownColor(66),n.deepSkyBlue = n.createKnownColor(67),n.dimGray = n.createKnownColor(68),n.dodgerBlue = n.createKnownColor(69),n.firebrick = n.createKnownColor(70),n.floralWhite = n.createKnownColor(71),n.forestGreen = n.createKnownColor(72),n.fuchsia = n.createKnownColor(73),n.gainsboro = n.createKnownColor(74),n.ghostWhite = n.createKnownColor(75),n.gold = n.createKnownColor(76),n.goldenrod = n.createKnownColor(77),n.gray = n.createKnownColor(78),n.green = n.createKnownColor(79),n.greenYellow = n.createKnownColor(80),n.honeydew = n.createKnownColor(81),n.hotPink = n.createKnownColor(82),n.indianRed = n.createKnownColor(83),n.indigo = n.createKnownColor(84),n.ivory = n.createKnownColor(85),n.khaki = n.createKnownColor(86),n.lavender = n.createKnownColor(87),n.lavenderBlush = n.createKnownColor(88),n.lawnGreen = n.createKnownColor(89),n.lemonChiffon = n.createKnownColor(90),n.lightBlue = n.createKnownColor(91),n.lightCoral = n.createKnownColor(92),n.lightCyan = n.createKnownColor(93),n.lightGoldenrodYellow = n.createKnownColor(94),n.lightGreen = n.createKnownColor(96),n.lightGray = n.createKnownColor(95),n.lightPink = n.createKnownColor(97),n.lightSalmon = n.createKnownColor(98),n.lightSeaGreen = n.createKnownColor(99),n.lightSkyBlue = n.createKnownColor(100),n.lightSlateGray = n.createKnownColor(101),n.lightSteelBlue = n.createKnownColor(102),n.lightYellow = n.createKnownColor(103),n.lime = n.createKnownColor(104),n.limeGreen = n.createKnownColor(105),n.linen = n.createKnownColor(106),n.magenta = n.createKnownColor(107),n.maroon = n.createKnownColor(108),n.mediumAquamarine = n.createKnownColor(109),n.mediumBlue = n.createKnownColor(110),n.mediumOrchid = n.createKnownColor(111),n.mediumPurple = n.createKnownColor(112),n.mediumSeaGreen = n.createKnownColor(113),n.mediumSlateBlue = n.createKnownColor(114),n.mediumSpringGreen = n.createKnownColor(115),n.mediumTurquoise = n.createKnownColor(116),n.mediumVioletRed = n.createKnownColor(117),n.midnightBlue = n.createKnownColor(118),n.mintCream = n.createKnownColor(119),n.mistyRose = n.createKnownColor(120),n.moccasin = n.createKnownColor(121),n.navajoWhite = n.createKnownColor(122),n.navy = n.createKnownColor(123),n.oldLace = n.createKnownColor(124),n.olive = n.createKnownColor(125),n.oliveDrab = n.createKnownColor(126),n.orange = n.createKnownColor(127),n.orangeRed = n.createKnownColor(128),n.orchid = n.createKnownColor(129),n.paleGoldenrod = n.createKnownColor(130),n.paleGreen = n.createKnownColor(131),n.paleTurquoise = n.createKnownColor(132),n.paleVioletRed = n.createKnownColor(133),n.papayaWhip = n.createKnownColor(134),n.peachPuff = n.createKnownColor(135),n.peru = n.createKnownColor(136),n.pink = n.createKnownColor(137),n.plum = n.createKnownColor(138),n.powderBlue = n.createKnownColor(139),n.purple = n.createKnownColor(140),n.red = n.createKnownColor(141),n.rosyBrown = n.createKnownColor(142),n.royalBlue = n.createKnownColor(143),n.saddleBrown = n.createKnownColor(144),n.salmon = n.createKnownColor(145),n.sandyBrown = n.createKnownColor(146),n.seaGreen = n.createKnownColor(147),n.seaShell = n.createKnownColor(148),n.sienna = n.createKnownColor(149),n.silver = n.createKnownColor(150),n.skyBlue = n.createKnownColor(151),n.slateBlue = n.createKnownColor(152),n.slateGray = n.createKnownColor(153),n.snow = n.createKnownColor(154),n.springGreen = n.createKnownColor(155),n.steelBlue = n.createKnownColor(156),n.tan = n.createKnownColor(157),n.teal = n.createKnownColor(158),n.thistle = n.createKnownColor(159),n.tomato = n.createKnownColor(160),n.turquoise = n.createKnownColor(161),n.violet = n.createKnownColor(162),n.wheat = n.createKnownColor(163),n.white = n.createKnownColor(164),n.whiteSmoke = n.createKnownColor(165),n.yellow = n.createKnownColor(166),n.yellowGreen = n.createKnownColor(167),s.emptyFill = new ur,l.empty = new l(0, 0, 0, 0),t.standardGraphicsUnit = 5,t.baseUnitPerInch = 300,t.internalUnit = new t("InternalUnit", "", 1),t.millimeter = new t("Millimeter", "mm", 300 / 25.4),t.centimeter = new t("Centimeter", "cm", 300 / 2.54),t.inch = new t("Inch", "in", 300),t.point = new t("Point", "pt", 300 / 72),t.pixel = new t("Pixel", "px", 300 / 96),t.twip = new t("Twip", "tw", 300 / 1440),i.$0 = null,i.$1 = null,p.epsilon = .001,o.$0 = 1e3,c.noTrasformation = new sr,wr
}(this);
"use strict";
var PerfectWidgetsModel = function () {
    function gt() {
    }

    function ni() {
    }

    function a() {
    }

    function tt() {
    }

    function ti() {
    }

    function ut() {
    }

    function ns() {
    }

    function i() {
    }

    function at() {
        this.$0 = 0, this.$2 = 0, this.$3 = 0, this.$6 = 0
    }

    function ts() {
    }

    function ft() {
        this.$0 = 0, this.$1 = 0, this.$2 = 0, this.$3 = 0
    }

    function l(n, t, i) {
        this.$1 = 0, this.$2 = 0, this.$1 = n, this.$2 = t, this.$0 = i
    }

    function n() {
    }

    function is() {
    }

    function o() {
    }

    function vt(n, t, i) {
        this.$0 = "", this.$1 = 0, this.$2 = PerfectWidgetsFramework.Vector.empty, this.$0 = n, this.$1 = t, this.$2 = i
    }

    function li() {
        this.portion = 0, this.width = 0
    }

    function rs() {
        this.$0 = []
    }

    function r() {
        this._value = 0, this._kind = 0
    }

    function us() {
        this.$0 = "", this.$1 = r.auto
    }

    function t() {
        this.$0 = !1, this.$3 = [], this.$4 = !1, this.$7 = PerfectWidgetsFramework.Fill.emptyFill, this.$9 = !0, this._needRepaint = !0, this.$a = !0, this.$b = PerfectWidgetsFramework.Guid.newGuid(), this.$c = "", this.$d = null, this.$k = {}, this.$l = null, this.$n = !1, this.$q = !1, this.$r = !1, this.$s = !1, this.$x = ""
    }

    function et() {
        this.$0 = 255 / 4, this.$1 = null, this.$2 = null, this.$3 = 45, this.$4 = .25
    }

    function ki() {
        this.$2 = []
    }

    function fs() {
    }

    function es() {
    }

    function yt(n) {
        this._digits = null, this._digits = n
    }

    function pt(n, t) {
        this.$0 = 0, this.$0 = n, this.$1 = t
    }

    function os(n, t, i, r) {
        this.$0 = 0, this.$3 = null, this.$4 = !1, this.$0 = ss.now().getDate(), this.$1 = n, this.$2 = t, this.$3 = i, this.$4 = r
    }

    function hs(n, t, i) {
        this.$0 = 0, this.$0 = n, this.$1 = t, this.$2 = i
    }

    function d() {
    }

    function cs() {
    }

    function ls() {
        this.maxZoom = 100, this.minZoom = .1, this.$0 = PerfectWidgetsFramework.Vector.empty
    }

    function as() {
    }

    function hr() {
        this.$8 = 10, this.$9 = 0, this.$b = 0, this.$c = 0, at.call(this)
    }

    function vs() {
        this.$y = PerfectWidgetsFramework.Vector.empty, this.$z = 0, t.call(this)
    }

    function v() {
        this._center = PerfectWidgetsFramework.Vector.empty, this._radius = 0, this._angle = 0, t.call(this)
    }

    function vr() {
        this.$6 = 0, this.$7 = 0, this.$8 = 0, this.$9 = null, this.$a = null, this.$b = null, this.$c = PerfectWidgetsFramework.Margins.symetricMargins(10), this.$d = PerfectWidgetsFramework.Margins.symetricMargins(0), this.$e = l.blankShadow(), this.$f = l.blankShadow(), this.$g = ft.getCornerRadiuses(0, 0, 0, 0), this.$h = ft.getCornerRadiuses(0, 0, 0, 0), et.call(this)
    }

    function pr() {
        n.call(this)
    }

    function br() {
        n.call(this)
    }

    function dr() {
        this.$2 = .2, n.call(this)
    }

    function nu() {
        this.$2 = 0, n.call(this)
    }

    function iu() {
        this.$2 = 0, n.call(this)
    }

    function uu() {
        this.$2 = 0, n.call(this)
    }

    function eu() {
        n.call(this)
    }

    function su() {
        this.$2 = 30, n.call(this)
    }

    function cu() {
        this.$2 = .38, this.$3 = 5, this.$4 = 0, n.call(this)
    }

    function ys() {
        n.call(this)
    }

    function vu() {
        this.$2 = 0, n.call(this)
    }

    function ps() {
        this.$6 = 0, this.$7 = 0, this.$8 = 0, this.$9 = null, this.$c = 0, this.$d = PerfectWidgetsFramework.Margins.symetricMargins(10), this.$e = l.blankShadow(), et.call(this), this.$e = new l(3, 3, new PerfectWidgetsFramework.SolidFill(PerfectWidgetsFramework.Color.magenta))
    }

    function p() {
        this._startPoint = PerfectWidgetsFramework.Vector.empty, this._endPoint = PerfectWidgetsFramework.Vector.empty, this._centerPoint = PerfectWidgetsFramework.Vector.empty, this._centerPart = 0, t.call(this)
    }

    function e() {
        this._colorizer = null, this._distance = 100, this._minLimit = r.auto, this._maxLimit = r.auto, this._padding = 0, this._dock = 0, this._origin = r.auto, t.call(this)
    }

    function ht() {
        this._center = new PerfectWidgetsFramework.Vector(0, 0), this._size = new PerfectWidgetsFramework.Vector(1, 1), t.call(this)
    }

    function u() {
        this.$y = new ki, this.$z = !1, t.call(this), this.$y.add_elementAdded(ss.bind("$A", this))
    }

    function gu(n) {
        yt.call(this, n)
    }

    function k() {
        this.on = !1, this.$D = !1, this.$E = !1, u.call(this)
    }

    function ws() {
        this.$y = 0, this.$z = PerfectWidgetsFramework.Color.lightBlue, this.$A = PerfectWidgetsFramework.Color.darkBlue, this.$B = 0, this.$C = 0, this.$D = 0, v.call(this)
    }

    function bs() {
        u.call(this)
    }

    function ks() {
        this.$y = 0, this.$z = PerfectWidgetsFramework.Color.lightBlue, this.$A = PerfectWidgetsFramework.Color.darkBlue, this.$B = 0, this.$C = 0, this.$D = 0, p.call(this)
    }

    function ds() {
        this.$y = 100, this.$z = 10, p.call(this)
    }

    function ot() {
        this.$D = PerfectWidgetsFramework.Margins.empty, u.call(this)
    }

    function gs() {
        this.$y = 5, this.$z = 20, this.$A = 1, this.$B = .001, v.call(this)
    }

    function nh() {
        this.$y = 100, this._k = 0, this.$A = 1, v.call(this)
    }

    function th() {
        p.call(this)
    }

    function ih() {
        this._startWidth = 50, this._endWidth = 0, this._showMode = 0, this._needlePoints = [], p.call(this)
    }

    function wt() {
        this._sides = 1, v.call(this)
    }

    function bt() {
        ss.EventArgs.call(this)
    }

    function f() {
        this._angle = 0, ht.call(this)
    }

    function y() {
        this.$F = 0, this.$G = 100, this.$H = !1, u.call(this)
    }

    function c() {
        this.$z = null, this.$A = 1, this.$B = 0, this.$C = 0, this.$D = PerfectWidgetsFramework.Margins.empty, this.$E = 1, this.$F = 1, this.$G = [], this.$H = !0, e.call(this)
    }

    function w() {
        this._divisions = 10, this._subDivisions = 4, this._subTicksPosition = 0, this._discreteValues = !1, this._step = r.auto, this._roundValues = !1, e.call(this)
    }

    function b() {
        this._value = 0, this._step = 0, this._minLimit = r.auto, this._maxLimit = r.auto, this._hot = !1, this._pressed = !1, this._dragged = !1, this._animation = null, this._animationState = 4, this.$M = 0, this.$P = 0, this.$R = 0, u.call(this)
    }

    function g() {
        this.$z = r.auto, e.call(this)
    }

    function gf(n) {
        this.repaintType = !1, ss.EventArgs.call(this), this.repaintType = n
    }

    function kt(n) {
        ss.EventArgs.call(this), this.element = n
    }

    function ct() {
        this.$E = !0, this.$F = !1, this.$I = !1, this.$O = 0, this.$P = 0, u.call(this), this.$G = PerfectWidgetsFramework.Vector.empty
    }

    function rh() {
        PerfectWidgetsFramework.AbstractTransformation.call(this)
    }

    function h() {
        this.$y = 0, this.$z = 0, f.call(this)
    }

    function fe() {
        f.call(this)
    }

    function uh() {
        this.$y = null, this.$z = "Digital Text", this.$A = new PerfectWidgetsFramework.Vector(10, 10), this.$B = new PerfectWidgetsFramework.Vector(2, 2), this.$C = null, this.$D = PerfectWidgetsFramework.Color.lime, this.$E = PerfectWidgetsFramework.Color.darkSlateGray, this.$F = !1, this.$G = 0, this.$H = 0, f.call(this)
    }

    function fh() {
        this.$y = PerfectWidgetsFramework.Color.black, this.$z = PerfectWidgetsFramework.Color.black, this.$A = PerfectWidgetsFramework.Color.gray, this.$B = PerfectWidgetsFramework.Color.lightGray, this.$C = 0, this.$D = 1, f.call(this)
    }

    function eh() {
        this.$G = null, this.$H = 123, f.call(this), this.$E = this.$y(), this.$D = this.$A(), this.$C = this.$B(), this.$F = this.$z()
    }

    function s() {
        this.$A = 100, this.$B = 200, this.$C = 30, this.$D = 20, this.$E = 0, this.$F = PerfectWidgetsFramework.Color.lime, this.$G = PerfectWidgetsFramework.Color.darkSlateGray, this.$H = .1, this.$I = .25, this.$J = 0, f.call(this)
    }

    function oh() {
        k.call(this)
    }

    function sh() {
        this.$C = new PerfectWidgetsFramework.Vector(30, 30), this.$D = new PerfectWidgetsFramework.Vector(20, 20), this.$E = null, this.$F = 1, this.$G = 0, w.call(this)
    }

    function hh() {
        this.$W = "", c.call(this)
    }

    function ye() {
        this.$A = 0, this.$B = PerfectWidgetsFramework.Color.lime, this.$C = PerfectWidgetsFramework.Color.gainsboro, this.$D = 0, this.$E = 150, this.$F = 25, g.call(this)
    }

    function ch() {
        this.$y = new PerfectWidgetsFramework.Margins(0, 0, 0, 0), this.$z = 0, this.$A = null, f.call(this)
    }

    function lh() {
        this.$W = [], c.call(this)
    }

    function ah() {
        f.call(this)
    }

    function st() {
        this.$I = 0, this.$J = 0, ot.call(this)
    }

    function it() {
        this.$G = PerfectWidgetsFramework.Vector.empty, this.$H = 120, this.$I = 300, this.$J = 0, this.$K = 0, ot.call(this)
    }

    function vh() {
        this.$y = new PerfectWidgetsFramework.Margins(0, 0, 0, 0), this.$z = 0, this.$A = null, f.call(this)
    }

    function rt() {
        this.$A = 0, g.call(this)
    }

    function yh() {
        this.$y = null, this.$z = !0, f.call(this)
    }

    function ph() {
        this.$y = [], this.$z = -1, f.call(this)
    }

    function nt() {
        f.call(this)
    }

    function wh() {
        this.$W = 10, this.$X = r.auto, this.$Y = !1, c.call(this)
    }

    function dt() {
        b.call(this), this.$12()
    }

    function bh() {
        this.$y = 0, wt.call(this)
    }

    function kh() {
        this.$C = 10, this.$D = 5, w.call(this)
    }

    function dh() {
        h.call(this)
    }

    function gh() {
        this.$F = .01, this.$G = 500, this.$H = 50, this.$I = 0, this.$J = 0, this.$K = 0, this.$S = null, this.$T = null, rt.call(this)
    }

    function lt() {
        this.$G = 0, this.$H = 31.25, this.$I = 1, this.$J = 1, this.$K = !1, this.$L = 37.5, rt.call(this)
    }

    function ao() {
        this.$H = !1, nt.call(this), this.$z = PerfectWidgetsFramework.Color.ivory, this.$A = PerfectWidgetsFramework.Color.black, this.$B = PerfectWidgetsFramework.Color.black, this.$C = PerfectWidgetsFramework.Color.fromArgb(128, 0, 0, 64), this.$D = new PerfectWidgetsFramework.SolidFill(this.$z), this.$E = new PerfectWidgetsFramework.SolidFill(this.$C), this.$F = new PerfectWidgetsFramework.SolidFill(this.$A), this.$G = new PerfectWidgetsFramework.Stroke, this.$G.setColor(this.$B), this.$G.setStyle(PerfectWidgetsFramework.LineStyle.solid), this.$G.setWidth(2), this.$I = "!!!", this.setSize(new PerfectWidgetsFramework.Vector(200, 60)), this.setStroke(this.$G), this.setFill(this.$E), this.setName("toolTipBox"), this.setCenter(new PerfectWidgetsFramework.Vector(100, 10)), this.$y = new PerfectWidgetsFramework.Font;
        var n = new PerfectWidgetsFramework.FontFamily;
        n.name = "Arial", this.$y.fontFamily = n, this.$y.sizeInPoints = 8, this.$y.style = 0
    }

    function nc() {
        h.call(this)
    }

    function tc() {
        this.$B = 0, h.call(this)
    }

    function ic() {
        this.$y = 0, nt.call(this)
    }

    function rc() {
        this.$y = 0, this.$z = 0, nt.call(this)
    }

    function uc() {
        h.call(this)
    }

    var ii, ri, ui, fi, ei, oi, si, hi, ci, ai, vi, yi, pi, wi, bi, di, gi, nr, tr, ir, rr, ur, fr, er, or, sr, cr, lr, ar, yr, wr, kr, gr, tu, ru, fu, ou, hu, lu, au, yu, pu, wu, bu, ku, du, nf, tf, rf, uf, ff, ef, of, sf, hf, cf, lf, af, vf, yf, pf, wf, bf, kf, df, ne, te, ie, re, ue, ee, oe, se, he, ce, le, ae, ve, pe, we, be, ke, de, ge, no, to, io, ro, uo, fo, eo, oo, so, ho, co, lo, vo, yo, po, wo, bo, ko, go;
    return i.linear = function (n, t, i) {
        return n * i + t
    }, i.swing = function (n, t, i) {
        return(-Math.cos(n * Math.PI) / 2 + .5) * i + t
    }, i.easeInQuad = function (n, t, i, r) {
        var u = n * r;
        return i * u * u / r / r + t
    }, i.easeOutQuad = function (n, t, i, r) {
        var u = n * r;
        return-i * (u / r) * (u / r - 2) + t
    }, i.easeInOutQuad = function (n, t, i, r) {
        var u = n * r;
        return u < r / 2 ? i / 2 * 2 * u * 2 * u / r / r + t : -i / 2 * ((u / r * 2 - 1) * (u / r * 2 - 3) - 1) + t
    }, i.easeInExpo = function (n, t, i, r) {
        var u = n * r;
        return u ? i * Math.pow(2, 10 * (u / r - 1)) + t : t
    }, i.easeOutExpo = function (n, t, i, r) {
        var u = n * r;
        return u === r ? t + i : i * (-Math.pow(2, -10 * (u / r)) + 1) + t
    }, i.easeInOutExpo = function (n, t, i, r) {
        var u = n * r;
        return u ? u === r ? t + i : u < 1 / 2 * r ? i / 2 * Math.pow(2, 10 * (2 * u / r - 1)) + t : i / 2 * (-Math.pow(2, -10 * (2 * u / r - 1)) + 2) + t : t
    }, i.easeInBack = function (n, t, r, u) {
        var f = n * u;
        return r * (f / u) * f / u * ((i.$0 + 1) * f / u - i.$0) + t
    }, i.easeOutBack = function (n, t, r, u) {
        var f = n * u;
        return r * ((f / u - 1) * (f / u - 1) * ((i.$0 + 1) * (f / u - 1) + i.$0) + 1) + t
    }, i.easeInOutBack = function (n, t, r, u) {
        var f = n * u;
        return f < u / 2 ? r / 2 * 2 * f / u * 2 * f / u * ((i.$0 * 1.525 + 1) * 2 * f / u - i.$0 * 1.525) + t : r / 2 * ((2 * f / u - 2) * (2 * f / u - 2) * ((i.$0 * 1.525 + 1) * (2 * f / u - 2) + i.$0 * 1.525) + 2) + t
    }, ii = {}, ri = {getContext: function () {
        return this.$5
    }, setContext: function (n) {
        this.$5 = n
    }, getDuration: function () {
        return Math.abs(this.getEndValue() - this.getStartValue()) / this.getValueRange() * this.$0
    }, setDuration: function (n) {
        this.$0 = n
    }, getEasingFunction: function () {
        return this.$1
    }, setEasingFunction: function (n) {
        if (n != null) {
            if (!(this.getAvaliableEasingFunctions().indexOf(n) >= 0))throw new Error("Not supported easing function " + n);
            this.$1 = n
        }
    }, getValueRange: function () {
        return this.$6
    }, setValueRange: function (n) {
        this.$6 = n
    }, getStartValue: function () {
        return this.$2
    }, setStartValue: function (n) {
        this.$2 = n
    }, getEndValue: function () {
        return this.$3
    }, setEndValue: function (n) {
        this.$3 = n
    }, getPropertyName: function () {
        return this.$4
    }, setPropertyName: function (n) {
        n != null && (this.$4 = n)
    }}, ui = {}, ft.getCornerRadiuses = function (n, t, i, r) {
        var u = new ft;
        return u.$2 = i, u.$0 = t, u.$3 = r, u.$1 = n, u
    }, fi = {getLeftTop: function () {
        return this.$0
    }, setLeftTop: function (n) {
        this.$0 = n
    }, getLeftBottom: function () {
        return this.$1
    }, setLeftBottom: function (n) {
        this.$1 = n
    }, getRightTop: function () {
        return this.$2
    }, setRightTop: function (n) {
        this.$2 = n
    }, getRightBottom: function () {
        return this.$3
    }, setRightBottom: function (n) {
        this.$3 = n
    }}, l.blankShadow = function () {
        return new l(0, 0, PerfectWidgetsFramework.Fill.emptyFill)
    }, l.shadowFromProto = function (n) {
        var t = l.blankShadow();
        return t.$1 = n.getDX(), t.$2 = n.getDY(), t.$0 = n.getFill(), t
    }, ei = {getFill: function () {
        return this.$0
    }, setFill: function (n) {
        this.$0 = n
    }, getDX: function () {
        return this.$1
    }, setDX: function (n) {
        this.$1 = n
    }, getDY: function () {
        return this.$2
    }, setDY: function (n) {
        this.$2 = n
    }, toString: function () {
        return ss.typeName(ss.typeOf(this))
    }, clone: function () {
        return l.shadowFromProto(this)
    }, equals: function (n) {
        if (n == null || ss.typeOf(this) !== ss.typeOf(n))return!1;
        var t = n;
        return t.$1 === this.$1 && t.$2 === this.$2 && (t.$0 == null && this.$0 == null || t.$0 != null && t.$0 === this.$0)
    }}, n.registerShape = function (t) {
        n.$0.push(t)
    }, n.register = function () {
        n.$1 || (n.registerShape(pr), n.registerShape(vu), n.registerShape(br), n.registerShape(dr), n.registerShape(nu), n.registerShape(iu), n.registerShape(uu), n.registerShape(eu), n.registerShape(su), n.registerShape(cu), n.$1 = !0)
    }, oi = {buildShapePath: function (n, t) {
        return this.createPath(n, t)
    }, toString: function () {
        return ss.typeName(ss.typeOf(this))
    }}, si = {getFormatStringMask: function () {
        return this.$0
    }, setFormatStringMask: function (n) {
        this.$0 !== n && (this.$0 = n)
    }}, o.$0 = function (n) {
        var t = o.$3(n);
        return t != null ? o.$2(n.getMinLimit(), t.getMinimum(), n) : 0
    }, o.$1 = function (n) {
        var t = o.$3(n);
        return t != null ? o.$2(n.getMaxLimit(), t.getMaximum(), n) : 0
    }, o.$2 = function (n, t, i) {
        var r = o.$3(i);
        if (r != null)switch (n._kind) {
            case 0:
                return t;
            case 1:
                return n._value;
            case 2:
                return r.percentToValue(n._value / 100)
        }
        return t
    }, o.$3 = function (n) {
        for (var t = n; t != null;) {
            if (ss.canCast(t, a))return t;
            t = t.getParent()
        }
        return null
    }, o.$4 = function (n, t, i) {
        var u, f, r;
        return i !== 2 ? (u = new PerfectWidgetsFramework.MultiGradientFill, f = t.minus(n).getRotation(), f < 5 * Math.PI / 4 && f >= Math.PI / 4 ? u.setAngle(270) : u.setAngle(90), i ? (r = new PerfectWidgetsFramework.GradientColorCollection, r.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(128, 153, 153, 153), 0)), r.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(128, 51, 51, 51), .13)), r.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(128, 0, 0, 0), .43)), r.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(128, 0, 0, 0), .55)), r.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(128, 178, 178, 178), .9)), r.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(128, 76, 76, 76), 1)), u.setColors(r)) : (r = new PerfectWidgetsFramework.GradientColorCollection, r.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(128, 0, 0, 0), 0)), r.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(0, 0, 0, 0), .25)), r.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(30, 0, 0, 0), .5)), r.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(100, 0, 0, 0), 1)), u.setColors(r)), u) : null
    }, hi = {}, ci = {get_text: function () {
        return this.$0
    }, get_value: function () {
        return this.$1
    }, get_textSize: function () {
        return this.$2
    }}, ai = {setPortion: function (n) {
        this.portion = n
    }, setWidth: function (n) {
        this.width = n
    }}, vi = {add: function (n) {
        return this.$0.push(n), n
    }, addRange: function (n) {
        for (var t = ss.enumerate(n), i; t.moveNext();)i = t.current, this.add(i)
    }, remove: function (n) {
        ss.remove(this.$0, n)
    }, insert: function (n, t) {
        this.$0.splice(n, 0, t)
    }, contains: function (n) {
        return this.$0.indexOf(n) >= 0
    }, indexOf: function (n) {
        return this.$0.indexOf(n)
    }, count: function () {
        return this.$0.length
    }, get_item: function (n) {
        return ss.safeCast(this.$0[n], li)
    }, set_item: function (n, t) {
        return this.$0[n] = t, t
    }}, r.equals = function (n, t) {
        return n._kind ? n._value === t._value && n._kind === t._kind : !t._kind
    }, r.parse = function (n) {
        var t = new r;
        return ss.canCast(n, r) ? t = n : ss.canCast(n, Number) ? (t.setValue(n), t.setKind(1)) : t = n, t
    }, yi = {getKind: function () {
        return this._kind
    }, setKind: function (n) {
        this._kind = n
    }, getValue: function () {
        return this._value
    }, setValue: function (n) {
        this._value = n
    }, getAnimationValue: function () {
        return this.getValue()
    }, setAnimationValue: function (n) {
        this.setValue(n)
    }}, pi = {getText: function () {
        return this.$0 + ""
    }, setText: function (n) {
        this.$0 = n == null ? "" : n
    }, getValue: function () {
        return this.$1
    }, setValue: function (n) {
        this.$1 = n
    }, toString: function () {
        return this.$0 != null && !!this.$0.length ? ss.format("{0} - {1}", this.getValue(), this.getText()) : "TextItem"
    }}, t.getByType = function (n, i) {
        var r = [], s = ss.safeCast(n, u), e, f, o, h;
        if (ss.canCast(n, dt) && i === dt)r.push(n); else if (s == null)ss.typeOf(n) === i && r.push(n); else for (e = s.getElements(), f = 0; f < e.count(); f++)for (o = ss.enumerate(t.getByType(e.get_item(f), i)); o.moveNext();)h = o.current, r.push(h);
        return r
    }, wi = {add_recalculating: function (n) {
        this.$m = ss.bindAdd(this.$m, n)
    }, remove_recalculating: function (n) {
        this.$m = ss.bindSub(this.$m, n)
    }, getReady: function () {
        return this.$n
    }, $o: function (n) {
        this.$n !== n && (this.$n = n, !0 === n && this.$p())
    }, $p: function () {
        for (var n = this.$5; ;)if (n == null) {
            this.$r = !1;
            break
        } else if (ss.canCast(n, it)) {
            this.$r = !0;
            break
        } else n = n.getParent()
    }, getBreakEventsBubbling: function () {
        return this.$0
    }, setBreakEventsBubbling: function (n) {
        this.$0 = n
    }, getName: function () {
        return this.$1
    }, setName: function (n) {
        this.$1 = n
    }, getClassName: function () {
        return this.$2
    }, setClassName: function (n) {
        this.$2 = n
    }, getSuffix: function () {
        return this.$c
    }, setSuffix: function (n) {
        this.$c = n
    }, getFullName: function () {
        return this.$5 != null ? this.$5.getFullName() + "_" + this.getName() : this.getName()
    }, getTransformation: function () {
        return this.$d
    }, setTransformation: function (n) {
        this.$d = n
    }, getGuid: function () {
        return this.$b
    }, getActive: function () {
        return this.$4
    }, setActive: function (n) {
        this.$4 = n
    }, getParent: function () {
        return this.$5
    }, isJointChild: function () {
        return this.$r
    }, setParent: function (n) {
        this.$5 !== n && (this.$5 = n, this.$5 != null && (this.$q = ss.canCast(this.$5, k) || ss.canCast(this.$5, b) ? !0 : !1))
    }, getInstrument: function () {
        return this.$5 != null ? this.$5.getInstrument() : ss.safeCast(this, ct)
    }, getFill: function () {
        return this.$7
    }, setFill: function (n) {
        this.$7 !== n && (this.$7 = n, this.setNeedRepaint(!0))
    }, getStroke: function () {
        return this.$8
    }, setStroke: function (n) {
        this.$8 !== n && (this.$8 = n, this.setNeedRepaint(!0))
    }, getVisible: function () {
        return this.$9
    }, setVisible: function (n) {
        this.$9 !== n && (this.$9 = n, this.setNeedRepaint(!0), this.refreshElement())
    }, getNeedRepaint: function () {
        return this._needRepaint
    }, setNeedRepaint: function (n) {
        this._needRepaint = n
    }, isBindingEnabled: function () {
        return this.$a
    }, bindingEnabled: function (n) {
        this.$a = n
    }, recalculate: function () {
        try {
            this.$a && this.$m != null && this.getInstrument().initializingIsFinished() && this.$m(this, ss.EventArgs.Empty)
        } catch (n) {
        }
    }, onPaint: function () {
    }, paint: function (n) {
        var r = this.getFill(), u = this.getStroke(), i = this.getStyle(), t;
        i == null || !i || i === "Default" || (t = this.getCurrentStyle(), t != null && (t.getFill() != null && (r = t.getFill()), t.getStroke() != null && (u = t.getStroke()))), n.setContext(this);
        this.onPaint(n, r, u)
    }, totallRefreshElement: function () {
        var n = this.getParent();
        n != null ? n.totallRefreshElement() : this.$t()
    }, getRecalculateAll: function () {
        return this.$s
    }, setRecalculateAll: function (n) {
        this.$s = n
    }, refreshElement: function () {
        var t = this.getInstrument(), n;
        t != null && (n = t.getPainter(), n == null || this.getRecalculateAll() ? this.totallRefreshElement() : (this.paint(n), this.$t()))
    }, $t: function () {
        !ss.isValue(this.$l) || this.$l(this, ss.EventArgs.Empty)
    }, setInvalidationHandler: function (n) {
        this.$l = n
    }, getBoundedBox: function () {
        throw new Error("this is virtual method of WidgetElement");
    }, getHitTest: function () {
        return!1
    }, getElementAt: function (n) {
        return this.$4 ? this.$q ? this.getVisible() ? this.getHitTest(n) ? this : null : null : null : null
    }, doMouseDown: function (n) {
        if (this.getActive()) {
            this.onMouseDown(n);
            this.getParent() == null || this.getBreakEventsBubbling() || this.getParent().doMouseDown(n)
        }
    }, doMouseLeave: function (n) {
        if (this.getActive()) {
            this.onMouseLeave(n);
            this.getParent() == null || this.getBreakEventsBubbling() || this.getParent().doMouseLeave(n)
        }
    }, doMouseEnter: function (n) {
        if (this.getActive()) {
            this.onMouseEnter(n);
            this.getParent() == null || this.getBreakEventsBubbling() || this.getParent().doMouseEnter(n)
        }
    }, doMouseMove: function (n) {
        if (this.getActive()) {
            this.onMouseMove(n);
            this.getParent() == null || this.getBreakEventsBubbling() || this.getParent().doMouseMove(n)
        }
    }, doMouseUp: function (n) {
        if (this.getActive()) {
            this.onMouseUp(n);
            this.getParent() == null || this.getBreakEventsBubbling() || this.getParent().doMouseUp(n)
        }
    }, onMouseDown: function (n) {
        var i = this.$k[t.$e];
        i != null && i(this, n)
    }, onRecalculate: function () {
        this.isBindingEnabled() && this.$m != null && this.$m(this, ss.EventArgs.Empty)
    }, setMouseDownHandler: function (n) {
        this.$u(t.$e, n)
    }, onMouseLeave: function (n) {
        var i = this.$k[t.$f];
        i != null && i(this, n)
    }, setMouseLeaveHandler: function (n) {
        this.$u(t.$f, n)
    }, onMouseEnter: function (n) {
        var i = this.$k[t.$g];
        i != null && i(this, n)
    }, setMouseEnterHandler: function (n) {
        this.$u(t.$g, n)
    }, onMouseMove: function (n) {
        var i = this.$k[t.$h];
        i != null && i(this, n)
    }, setMouseMoveHandler: function (n) {
        this.$u(t.$h, n)
    }, onMouseUp: function (n) {
        var i = this.$k[t.$i];
        i != null && i(this, n)
    }, setMouseUpHandler: function (n) {
        this.$u(t.$i, n)
    }, $u: function (n, t) {
        this.$k[n] = t
    }, getByName: function (n) {
        return ss.compareStrings(this.getName(), n) ? null : this
    }, getRealPosition: function (n) {
        var t = this.getTransformation();
        return t != null ? t.reverse(n) : n
    }, getToolTipValue: function () {
        return this.$v
    }, setToolTipValue: function (n) {
        this.$v = n
    }, getToolTipElement: function () {
        return t.$w
    }, setToolTipElement: function (n) {
        t.$w = n
    }, getStyle: function () {
        return this.$x
    }, setStyle: function (n) {
        this.$x = n, this.setNeedRepaint(!0), this.refreshElement()
    }, getStyleByName: function (n) {
        var t = this.getInstrument();
        return t != null ? t.getStyleByName(n) : null
    }, getCurrentStyle: function () {
        return this.getStyleByName(this.getStyle())
    }}, bi = {getLightAngle: function () {
        return this.$3
    }, setLightAngle: function (n) {
        this.$3 = n
    }, getLightOpacity: function () {
        return this.$4
    }, setLightOpacity: function (n) {
        this.$4 = n
    }, $5: function (n) {
        var i, t;
        return ss.canCast(n, PerfectWidgetsFramework.LinearGradientFill) ? (i = ss.safeCast(n, PerfectWidgetsFramework.LinearGradientFill), t = new PerfectWidgetsFramework.LinearGradientFill, t.setStartColor(i.getEndColor()), t.setEndColor(i.getStartColor()), t.setAngle(i.getAngle()), t) : ss.canCast(n, PerfectWidgetsFramework.MultiGradientFill) ? (i = ss.safeCast(n, PerfectWidgetsFramework.MultiGradientFill), t = new PerfectWidgetsFramework.MultiGradientFill, t.setColors(i.getColors()), t.setAngle(i.getAngle() + 180), t) : n
    }, lightFill: function () {
        return this.$1 == null && (this.$1 = this.$0 < 128 ? PerfectWidgetsFramework.LinearGradientFill.fromParams(PerfectWidgetsFramework.Color.fromArgbProto(this.$0, PerfectWidgetsFramework.Color.white), PerfectWidgetsFramework.Color.fromArgbProto(this.$0, PerfectWidgetsFramework.Color.black), this.$3) : PerfectWidgetsFramework.LinearGradientFill.fromParams(PerfectWidgetsFramework.Color.fromArgbProto(this.$0, PerfectWidgetsFramework.Color.white), PerfectWidgetsFramework.Color.transparent, this.$3)), this.$1
    }, darkFill: function () {
        return this.$2 == null && (this.$2 = this.$0 < 128 ? PerfectWidgetsFramework.LinearGradientFill.fromParams(PerfectWidgetsFramework.Color.fromArgbProto(this.$0, PerfectWidgetsFramework.Color.black), PerfectWidgetsFramework.Color.fromArgbProto(this.$0, PerfectWidgetsFramework.Color.white), this.$3) : PerfectWidgetsFramework.LinearGradientFill.fromParams(PerfectWidgetsFramework.Color.fromArgbProto(this.$0, PerfectWidgetsFramework.Color.black), PerfectWidgetsFramework.Color.transparent, this.$3)), this.$2
    }}, di = {add_elementAdded: function (n) {
        this.$0 = ss.bindAdd(this.$0, n)
    }, remove_elementAdded: function (n) {
        this.$0 = ss.bindSub(this.$0, n)
    }, add_elementRemoved: function (n) {
        this.$1 = ss.bindAdd(this.$1, n)
    }, remove_elementRemoved: function (n) {
        this.$1 = ss.bindSub(this.$1, n)
    }, remove: function (n) {
        ss.remove(this.$2, n), this.$3(n)
    }, $3: function (n) {
        this.$1 != null && this.$1(this, new kt(n))
    }, $4: function (n) {
        this.$0 != null && this.$0(this, new kt(n))
    }, add: function (n, t) {
        n.setParent(t), this.$2.push(n), this.$4(n)
    }, insert: function (n, t) {
        this.$2.splice(n, 0, t), this.$4(t)
    }, contains: function (n) {
        return this.$2.indexOf(n) >= 0
    }, count: function () {
        return this.$2.length
    }, get_item: function (n) {
        return this.$2[n]
    }}, gi = {getName: function () {
        return this.$0
    }, setName: function (n) {
        this.$0 = n
    }, getElementName: function () {
        return this.$1
    }, setElementName: function (n) {
        this.$1 = n
    }, getPropertyName: function () {
        return this.$2
    }, setPropertyName: function (n) {
        this.$2 = n
    }}, nr = {remove: function (n) {
        ss.remove(this.$0, n)
    }, add: function (n) {
        this.$0.push(n)
    }, insert: function (n, t) {
        this.$0.splice(n, 0, t)
    }, contains: function (n) {
        return this.$0.indexOf(n) >= 0
    }, count: function () {
        return this.$0.length
    }, get_item: function (n) {
        for (var t = 0; t < this.$0.length; t++)if (this.$0[t].getName() === n)return this.$0[t];
        return null
    }}, tr = {clearRegions: function () {
        this._segmentPaths = null
    }}, ir = {get_value: function () {
        return this.$0
    }, set_value: function (n) {
        return this.$0 = n, n
    }, get_path: function () {
        return this.$1
    }, set_path: function (n) {
        return this.$1 = n, n
    }}, rr = {getTimestamp: function () {
        return this.$0
    }, getManipulationOrigin: function () {
        return this.$1
    }, getDeltaManipulation: function () {
        return this.$2
    }, view: function () {
        return this.$3
    }, isInDiv: function () {
        return this.$4
    }}, ur = {getRotation: function () {
        return this.$0
    }, getScale: function () {
        return this.$1
    }, getTranslation: function () {
        return this.$2
    }, toString: function () {
        return"[r:" + this.$0 + "; s:" + this.$1 + "; t:" + this.$2 + "]"
    }}, d.getInstance = function () {
        return d.$0 == null && (d.$0 = new d), d.$0
    }, fr = {postCreateGroup: function (n) {
        n.clearGroup()
    }}, er = {onPointerOut: function () {
    }, onPointerOver: function () {
    }, onManipulationStarted: function () {
    }, onManipulationEnded: function () {
    }, onPointerMove: function () {
    }, onPointerLeave: function () {
    }, onPointerEnter: function () {
    }, onDeltaChange: function () {
    }}, or = {getScale: function () {
        return this._scale
    }, setScale: function (n) {
        this._scale = n
    }, getOrigin: function () {
        return this.$0
    }, setOrigin: function (n) {
        this.$0 = n
    }, changeZoom: function (n, t) {
        var i = this.getOrigin(), r = n.minus(i), u = r.multiply(t), f = u.minus(r);
        this.setOrigin(i.minus(f)), this.setScale(t), this.getElement().setNeedRepaint(!0), this.getElement().refreshElement()
    }, locationToScreen: function () {
        return PerfectWidgetsFramework.Vector.empty
    }, valueToScreen: function (n) {
        return n.multiply(this.getScale())
    }, scaleFromScreen: function (n) {
        return n.divide(this.getScale())
    }}, sr = {getTool: function () {
        return this.$0
    }, setTool: function (n) {
        this.$0 = n
    }, getView: function () {
        return this.$1
    }, setView: function (n) {
        this.$1 = n
    }, hitTest: function () {
        return!1
    }}, cr = {getAvaliableEasingFunctions: function () {
        var n = [];
        return n.push("linear"), n.push("swing"), n.push("easeInQuad"), n.push("easeOutQuad"), n.push("easeInOutQuad"), n.push("easeInExpo"), n.push("easeOutExpo"), n.push("easeInOutExpo"), n.push("easeInBack"), n.push("easeOutBack"), n.push("easeInOutBack"), n
    }, $7: function () {
        var n = ss.now() - this.$a, t = n / this.$b, i;
        t > 1 && (t = 1), n = n > this.$b ? this.$b : n, i = this.$d(t, this.getStartValue(), this.$c, this.$b), this.getContext().setAnimationValue(i), this.getContext().onAnimationValueChanged(), this.getContext().refreshElement(), t === 1 && (this.getContext().onAnimationFinished(), this.disposeAnimation())
    }, animate: function () {
        if (this.getContext().onAnimationStarting())this.getContext().setAnimationState(8), this.$a = ss.now(), this.$b = ss.truncate(this.getDuration() * 1e3), this.$d = this.$e(this.getEasingFunction()), this.$c = this.getEndValue() - this.getStartValue(), this.$9 = setInterval(ss.bind("$7", this), this.$8); else {
            var n = this.getContext();
            n.setAnimationState(1), n["set" + this.getPropertyName()](this.getEndValue()), n.setAnimationState(4)
        }
    }, $e: function () {
        var n = null;
        switch (this.getEasingFunction()) {
            case"linear":
                n = i.linear;
                break;
            case"swing":
                n = i.swing;
                break;
            case"easeInQuad":
                n = i.easeInQuad;
                break;
            case"easeOutQuad":
                n = i.easeOutQuad;
                break;
            case"easeInOutQuad":
                n = i.easeInOutQuad;
                break;
            case"easeInExpo":
                n = i.easeInExpo;
                break;
            case"easeOutExpo":
                n = i.easeOutExpo;
                break;
            case"easeInOutExpo":
                n = i.easeInOutExpo;
                break;
            case"easeInBack":
                n = i.easeInBack;
                break;
            case"easeOutBack":
                n = i.easeOutBack;
                break;
            case"easeInOutBack":
                n = i.easeInOutBack
        }
        return n
    }, onPaint: function () {
        throw new Error("ManualAnimation not implement method OnPaint");
    }, disposeAnimation: function () {
        this.getContext().setAnimationState(4), clearInterval(this.$9)
    }}, lr = {onPaint: function (n, t, i) {
        n.setContext(this), this.onRecalculate(), this.getNeedRepaint() && Math.abs(this.$z) > 1 && (this.setNeedRepaint(!1), this.setSuffix("_circle"), n.createGroup(), n.clearGroup(), n.drawCircle(t, i, this.$y, Math.abs(this.$z)), n.endGroup())
    }, getBoundedBox: function () {
        var n = this.$y;
        return new PerfectWidgetsFramework.VectorRectangle(n.x - this.$z, n.y - this.$z, 2 * this.$z, 2 * this.$z)
    }, getHitTest: function (n) {
        var t = this.getRealPosition(n), i;
        return this.getBoundedBox().contains(t) ? (i = t.minus(this.$y), i.abs() <= this.$z) : !1
    }, getCenter: function () {
        return this.$y
    }, setCenter: function (n) {
        PerfectWidgetsFramework.Vector.equals(this.$y, n) || (this.$y = n, this.setNeedRepaint(!0))
    }, getRadius: function () {
        return this.$z
    }, setRadius: function (n) {
        n < 0 && new Error('throw PerpetuumSoft.Framework.ExceptionBuilder.ArgumentNegative("value");'), this.$z !== n && (this.$z = n, this.setNeedRepaint(!0))
    }}, ar = {getCenter: function () {
        return this._center
    }, setCenter: function (n) {
        this._center !== n && (this._center = n, this.setNeedRepaint(!0))
    }, getRadius: function () {
        return this._radius
    }, setRadius: function (n) {
        if (n < 0)throw new Error('PerpetuumSoft.Framework.ExceptionBuilder.ArgumentNegative("value");');
        this._radius !== n && (this._radius = n, this.setNeedRepaint(!0))
    }, getAngle: function () {
        return this._angle
    }, setAngle: function (n) {
        n = Math.round(n % 360), this._angle !== n && (this._angle = n, this.setNeedRepaint(!0))
    }}, yr = {getUpOffset: function () {
        return this.$6
    }, setUpOffset: function (n) {
        this.$6 = n
    }, getDownOffset: function () {
        return this.$7
    }, setDownOffset: function (n) {
        if (n < 0)throw new Error("value is negative " + n);
        this.$7 = n
    }, getShadowSize: function () {
        return this.$8
    }, setShadowSize: function (n) {
        if (n < 0)throw new Error("value is negative " + n);
        this.$8 = n
    }, getFill: function () {
        return this.$9
    }, setFill: function (n) {
        this.$9 = n
    }, getStroke: function () {
        return this.$a
    }, setStroke: function (n) {
        this.$a = n
    }, getInnerStroke: function () {
        return this.$b
    }, setInnerStroke: function (n) {
        this.$b = n
    }, getMargins: function () {
        return this.$c
    }, setMargins: function (n) {
        this.$c = n
    }, getPadding: function () {
        return this.$d
    }, setPadding: function (n) {
        this.$d = n
    }, getBevelShadow: function () {
        return this.$f
    }, setBevelShadow: function (n) {
        this.$f = n
    }, getRadiuses: function () {
        return this.$g
    }, setRadiuses: function (n) {
        this.$g = n
    }, getInnerRadiuses: function () {
        return this.$h
    }, setInnerRadiuses: function (n) {
        this.$h = n
    }, paint: function (n, t) {
        var i = this.$o(n);
        t.setContext(this.context), this.$l(i, t), this.$i(t, i)
    }, $i: function (n, t) {
        this.$9 != null && (this.$k(n, t), this.$j(n, t)), this.context.setSuffix("_outline"), this.$m(n, PerfectWidgetsFramework.Fill.emptyFill, this.$a, t, this.$g.getLeftTop(), this.$g.getLeftBottom(), this.$g.getRightTop(), this.$g.getRightBottom())
    }, $j: function (n, t) {
        var i = new PerfectWidgetsFramework.VectorRectangle(t.getLeft() + this.$d.left + this.$6, t.getTop() + this.$d.top + this.$6, t.width - this.$d.left - this.$d.right - 2 * this.$6, t.height - this.$d.top - this.$d.bottom - 2 * this.$6), r, u;
        i = this.$p(i), r = this.$5(this.$9), this.$6 > 0 && (this.context.setSuffix("_in1"), this.$m(n, r, PerfectWidgetsFramework.Stroke.emptyStroke, PerfectWidgetsFramework.VectorRectangle.shrink(t, PerfectWidgetsFramework.Margins.symetricMargins(this.$6)), this.$g.getLeftTop(), this.$g.getLeftBottom(), this.$g.getRightTop(), this.$g.getRightBottom()), this.context.setSuffix("_in2"), this.$m(n, this.darkFill(), PerfectWidgetsFramework.Stroke.emptyStroke, PerfectWidgetsFramework.VectorRectangle.shrink(t, PerfectWidgetsFramework.Margins.symetricMargins(this.$6)), this.$g.getLeftTop(), this.$g.getLeftBottom(), this.$g.getRightTop(), this.$g.getRightBottom())), u = PerfectWidgetsFramework.VectorRectangle.shrink(t, PerfectWidgetsFramework.Margins.symetricMargins(this.$6 + this.$7)), this.context.setSuffix("_in3"), this.$m(n, this.$9, PerfectWidgetsFramework.Stroke.emptyStroke, u, this.getInnerRadiuses().getLeftTop(), this.getInnerRadiuses().getLeftBottom(), this.getInnerRadiuses().getRightTop(), this.getInnerRadiuses().getRightBottom())
    }, $k: function (n, t) {
        var i = this.$5(this.$9);
        this.context.setSuffix("_bottom1"), this.$m(n, i, PerfectWidgetsFramework.Stroke.emptyStroke, t, this.$g.getLeftTop(), this.$g.getLeftBottom(), this.$g.getRightTop(), this.$g.getRightBottom()), this.context.setSuffix("_bottom2"), this.$m(n, this.lightFill(), PerfectWidgetsFramework.Stroke.emptyStroke, t, this.$g.getLeftTop(), this.$g.getLeftBottom(), this.$g.getRightTop(), this.$g.getRightBottom())
    }, $l: function (n, t) {
        if ((this.getBevelShadow().getDX() || this.getBevelShadow().getDY() || this.getShadowSize()) && this.getBevelShadow().getFill() != null) {
            var i = new PerfectWidgetsFramework.VectorRectangle(n.x + this.getBevelShadow().getDX() - this.getShadowSize(), n.y + this.getBevelShadow().getDY() - this.getShadowSize(), n.getWidth() + 2 * this.getShadowSize(), n.getHeight() + 2 * this.getShadowSize());
            i = this.$p(i), this.context.setSuffix("_shadow1"), this.$m(t, this.getBevelShadow().getFill(), PerfectWidgetsFramework.Stroke.emptyStroke, i, this.$g.getLeftTop(), this.$g.getLeftBottom(), this.$g.getRightTop(), this.$g.getRightBottom())
        }
    }, $m: function (n, t, i, r, u, f, e, o) {
        r.width < u + e && (u = r.width * u / (u + e), e = r.width * e / (u + e)), r.width < f + o && (f = r.width * f / (f + o), o = r.width * o / (f + o)), r.height < u + f && (u = r.height * u / (u + f), f = r.height * f / (u + f)), r.height < e + o && (e = r.height * e / (e + o), o = r.height * o / (e + o));
        var s = this.$n(r, u, f, e, o);
        n.drawGraphicsPath(t, i, s)
    }, $n: function (n, t, i, r, u) {
        var f = new PerfectWidgetsFramework.GraphicsPath, e;
        return f.startPath(new PerfectWidgetsFramework.Vector(n.getLeft() + t, n.getTop())), f.addLine(new PerfectWidgetsFramework.Vector(n.getRight() - r, n.getTop())), r > 0 && (e = new PerfectWidgetsFramework.VectorRectangle(n.getLeft(), n.getTop(), 2 * r, 2 * r), e.setLocation(new PerfectWidgetsFramework.Vector(n.getRight() - 2 * r, n.getTop())), f.addArc(e, -90, 90)), f.addLine(new PerfectWidgetsFramework.Vector(n.getRight(), n.getBottom() - u)), u > 0 && (e = new PerfectWidgetsFramework.VectorRectangle(n.getLeft(), n.getTop(), 2 * u, 2 * u), e.setLocation(new PerfectWidgetsFramework.Vector(n.getRight() - 2 * u, n.getBottom() - 2 * u)), f.addArc(e, 0, 90)), f.addLine(new PerfectWidgetsFramework.Vector(n.getRight() - u, n.getBottom())), i > 0 && (e = new PerfectWidgetsFramework.VectorRectangle(n.getLeft(), n.getTop(), 2 * i, 2 * i), e.setLocation(new PerfectWidgetsFramework.Vector(n.getLeft(), n.getBottom() - 2 * i)), f.addArc(e, 90, 90)), f.addLine(new PerfectWidgetsFramework.Vector(n.getLeft(), n.getBottom() - i)), t > 0 && (e = new PerfectWidgetsFramework.VectorRectangle(n.getLeft(), n.getTop(), 2 * t, 2 * t), f.addArc(e, 180, 90)), f.terminate(), f.setBounds(this.context.getBoundedBox()), f
    }, $o: function (n) {
        return n.x += this.$c.left, n.y += this.$c.top, n.width -= this.$c.left + this.$c.right, n.height -= this.$c.top + this.$c.bottom, n.x -= Math.min(this.getBevelShadow().getDX(), 0) - this.getShadowSize(), n.y -= Math.min(this.getBevelShadow().getDY(), 0) - this.getShadowSize(), n.width -= Math.abs(this.getBevelShadow().getDX()) + 2 * this.getShadowSize(), n.height -= Math.abs(this.getBevelShadow().getDY()) + 2 * this.getShadowSize(), this.$p(n)
    }, $p: function (n) {
        return n.width = Math.max(n.getWidth(), 1), n.height = Math.max(n.getHeight(), 1), n.x = Math.max(n.x, 0), n.y = Math.max(n.y, 0), n
    }, getDockingBounds: function (n) {
        var t = this.$o(n), i = new PerfectWidgetsFramework.VectorRectangle(t.getLeft() + this.$6 + this.$7 + this.$d.left, t.getTop() + this.$6 + this.$7 + this.$d.top, t.width - 2 * (this.$6 + this.$7) - this.$d.left - this.$d.right, t.height - 2 * (this.$6 + this.$7) - this.$d.top - this.$d.bottom);
        return this.$p(i)
    }, clone: function () {
        var n = new vr;
        return n.setFill(this.getFill()), n.setStroke(this.getStroke()), n.setMargins(this.getMargins()), n.setBevelShadow(this.getBevelShadow()), n.setRadiuses(this.getRadiuses()), n.setUpOffset(this.getUpOffset()), n.setDownOffset(this.getDownOffset()), n.setShadowSize(this.getShadowSize()), n.setRadiuses(this.getRadiuses()), n.setPadding(this.getPadding()), n.setRadiuses(this.getRadiuses()), n.setInnerStroke(this.getInnerStroke()), n
    }}, wr = {createPath: function (n, t) {
        var r = new PerfectWidgetsFramework.GraphicsPath, i;
        return r.startPath(t.apply(n.getTopLeft())), i = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), i.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(n.getTopRight()))), i.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(n.getBottomRight()))), i.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(n.getBottomLeft()))), r.addPathElement(i), r.terminate(), r
    }}, kr = {createPath: function (n, t) {
        var i = new PerfectWidgetsFramework.GraphicsPath, u = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(n.getCenter(), new PerfectWidgetsFramework.Vector(n.width / 2, n.height / 2), 0), f = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(n.getCenter(), new PerfectWidgetsFramework.Vector(n.width / 2, n.height / 2), 180), r;
        return i.startPath(t.apply(u)), r = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), r.add(PerfectWidgetsFramework.EllipticArcParameters.fillLowLevelParameters(n.width / 2, n.height / 2, t.apply(f), 0, 180, t)), r.add(PerfectWidgetsFramework.EllipticArcParameters.fillLowLevelParameters(n.width / 2, n.height / 2, t.apply(u), 180, 360, t)), i.addPathElement(r), i.terminate(), i
    }}, gr = {getRound: function () {
        return this.$2
    }, setRound: function (n) {
        this.$2 = n
    }, createPath: function (n, t) {
        var f = null, o = null, h = null, i = Math.min(n.height, n.width), r, u;
        i *= this.getRound();
        var e = new PerfectWidgetsFramework.GraphicsPath, c = 0, s = ss.safeCast(t, PerfectWidgetsFramework.RotateTransformation);
        return s != null && (c = s.getAngle()), h = f = new PerfectWidgetsFramework.Vector(n.getLeft() + i, n.getTop()), o = new PerfectWidgetsFramework.Vector(n.getRight() - i, n.getTop()), e.startPath(t.apply(f)), r = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), r.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(o))), e.addPathElement(r), f = new PerfectWidgetsFramework.Vector(n.getRight(), n.getTop() + i), o = new PerfectWidgetsFramework.Vector(n.getRight(), n.getBottom() - i), u = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), u.add(PerfectWidgetsFramework.EllipticArcParameters.fillLowLevelParameters(i, i, t.apply(f), -90, 90, s)), e.addPathElement(u), r = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), r.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(f))), r.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(o))), e.addPathElement(r), u = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), f = new PerfectWidgetsFramework.Vector(n.getRight() - i, n.getBottom()), o = new PerfectWidgetsFramework.Vector(n.getLeft() + i, n.getBottom()), u.add(PerfectWidgetsFramework.EllipticArcParameters.fillLowLevelParameters(i, i, t.apply(f), 0, 90, s)), e.addPathElement(u), r = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), r.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(f))), r.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(o))), e.addPathElement(r), u = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), f = new PerfectWidgetsFramework.Vector(n.getLeft(), n.getBottom() - i), o = new PerfectWidgetsFramework.Vector(n.getLeft(), n.getTop() + i), u.add(PerfectWidgetsFramework.EllipticArcParameters.fillLowLevelParameters(i, i, t.apply(f), 90, 90, s)), e.addPathElement(u), r = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), r.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(f))), r.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(o))), e.addPathElement(r), u = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), u.add(PerfectWidgetsFramework.EllipticArcParameters.fillLowLevelParameters(i, i, t.apply(h), 180, 90, s)), e.addPathElement(u), e.terminate(), e
    }}, tu = {getDirection: function () {
        return this.$2
    }, setDirection: function (n) {
        this.$2 = n
    }, createPath: function (n, t) {
        var f = null, i = null, r = null, u = null, e = new PerfectWidgetsFramework.GraphicsPath;
        switch (this.getDirection()) {
            case 3:
                i = new PerfectWidgetsFramework.Vector(n.x, n.y), r = new PerfectWidgetsFramework.Vector(n.x, n.y + n.height), u = new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height / 2);
                break;
            case 2:
                i = new PerfectWidgetsFramework.Vector(n.x + n.width, n.y), r = new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height), u = new PerfectWidgetsFramework.Vector(n.x, n.y + n.height / 2);
                break;
            case 1:
                i = new PerfectWidgetsFramework.Vector(n.x, n.y), r = new PerfectWidgetsFramework.Vector(n.x + n.width, n.y), u = new PerfectWidgetsFramework.Vector(n.x + n.width / 2, n.y + n.height);
                break;
            case 0:
                i = new PerfectWidgetsFramework.Vector(n.x, n.y + n.height), r = new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height), u = new PerfectWidgetsFramework.Vector(n.x + n.width / 2, n.y)
        }
        return e.startPath(t.apply(i)), f = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), f.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(r))), f.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(u))), e.addPathElement(f), e.terminate(), e
    }}, ru = {getDirection: function () {
        return this.$2
    }, setDirection: function (n) {
        this.$2 = n
    }, $3: function (n) {
        var t, i;
        switch (this.getDirection()) {
            case 3:
                return t = n.height * .3, i = Math.min(n.height / 2, n.width / 2), [new PerfectWidgetsFramework.Vector(n.x, n.y + t), new PerfectWidgetsFramework.Vector(n.x, n.y + n.height - t), new PerfectWidgetsFramework.Vector(n.x + n.width - i, n.y + n.height - t), new PerfectWidgetsFramework.Vector(n.x + n.width - i, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height / 2), new PerfectWidgetsFramework.Vector(n.x + n.width - i, n.y), new PerfectWidgetsFramework.Vector(n.x + n.width - i, n.y + t)];
            case 2:
                return t = n.height * .3, i = Math.min(n.height / 2, n.width / 2), [new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + t), new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height - t), new PerfectWidgetsFramework.Vector(n.x + i, n.y + n.height - t), new PerfectWidgetsFramework.Vector(n.x + i, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x, n.y + n.height / 2), new PerfectWidgetsFramework.Vector(n.x + i, n.y), new PerfectWidgetsFramework.Vector(n.x + i, n.y + t)];
            case 1:
                return t = n.width * .3, i = Math.min(n.height / 2, n.width / 2), [new PerfectWidgetsFramework.Vector(n.x + t, n.y), new PerfectWidgetsFramework.Vector(n.x + n.width - t, n.y), new PerfectWidgetsFramework.Vector(n.x + n.width - t, n.y + n.height - i), new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height - i), new PerfectWidgetsFramework.Vector(n.x + n.width / 2, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x, n.y + n.height - i), new PerfectWidgetsFramework.Vector(n.x + t, n.y + n.height - i)];
            case 0:
                return t = n.width * .3, i = Math.min(n.height / 2, n.width / 2), [new PerfectWidgetsFramework.Vector(n.x + t, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x + n.width - t, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x + n.width - t, n.y + i), new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + i), new PerfectWidgetsFramework.Vector(n.x + n.width / 2, n.y), new PerfectWidgetsFramework.Vector(n.x, n.y + i), new PerfectWidgetsFramework.Vector(n.x + t, n.y + i)]
        }
        return null
    }, createPath: function (n, t) {
        var i = new PerfectWidgetsFramework.GraphicsPath, f = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), u = this.$3(n), r;
        for (i.startPath(t.apply(u[0])), r = 1; r < u.length; r++)f.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(u[r])));
        return i.addPathElement(f), i.terminate(), i
    }}, fu = {getDirection: function () {
        return this.$2
    }, setDirection: function (n) {
        this.$2 = n
    }, $3: function (n) {
        var t;
        switch (this.getDirection()) {
            case 3:
                return t = Math.min(n.height / 2, n.width / 2), [new PerfectWidgetsFramework.Vector(n.x, n.y), new PerfectWidgetsFramework.Vector(n.x, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x + n.width - t, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height / 2), new PerfectWidgetsFramework.Vector(n.x + n.width - t, n.y)];
            case 2:
                return t = Math.min(n.height / 2, n.width / 2), [new PerfectWidgetsFramework.Vector(n.x + n.width, n.y), new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x + t, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x, n.y + n.height / 2), new PerfectWidgetsFramework.Vector(n.x + t, n.y)];
            case 1:
                return t = Math.min(n.height / 2, n.width / 2), [new PerfectWidgetsFramework.Vector(n.x, n.y), new PerfectWidgetsFramework.Vector(n.x + n.width, n.y), new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height - t), new PerfectWidgetsFramework.Vector(n.x + n.width / 2, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x, n.y + n.height - t)];
            case 0:
                return t = Math.min(n.height / 2, n.width / 2), [new PerfectWidgetsFramework.Vector(n.x, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height), new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + t), new PerfectWidgetsFramework.Vector(n.x + n.width / 2, n.y), new PerfectWidgetsFramework.Vector(n.x, n.y + t)]
        }
        return null
    }, createPath: function (n, t) {
        var i = new PerfectWidgetsFramework.GraphicsPath, f = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), u = this.$3(n), r;
        for (i.startPath(t.apply(u[0])), r = 1; r < u.length; r++)f.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(u[r])));
        return i.addPathElement(f), i.terminate(), i
    }}, ou = {createPath: function (n, t) {
        var u = new PerfectWidgetsFramework.Vector(n.x + n.width / 2, n.y), f = new PerfectWidgetsFramework.Vector(n.x, n.y + n.height / 2), e = new PerfectWidgetsFramework.Vector(n.x + n.width / 2, n.y + n.height), o = new PerfectWidgetsFramework.Vector(n.x + n.width, n.y + n.height / 2), r = new PerfectWidgetsFramework.GraphicsPath, i;
        return r.startPath(t.apply(u)), i = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), i.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(f))), i.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(e))), i.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(o))), r.addPathElement(i), r.terminate(), r
    }}, hu = {getAngle: function () {
        return this.$2
    }, setAngle: function (n) {
        this.$2 = n
    }, createPath: function (n, t) {
        var u = Math.min(n.height * Math.sin(this.getAngle() * Math.PI / 180), n.width), f = new PerfectWidgetsFramework.Vector(n.getLeft() + u, n.getTop()), e = new PerfectWidgetsFramework.Vector(n.getRight(), n.getTop()), o = new PerfectWidgetsFramework.Vector(n.getRight() - u, n.getBottom()), s = new PerfectWidgetsFramework.Vector(n.getLeft(), n.getBottom()), r = new PerfectWidgetsFramework.GraphicsPath, i;
        return r.startPath(t.apply(f)), i = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), i.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(e))), i.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(o))), i.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(s))), r.addPathElement(i), r.terminate(), r
    }}, lu = {getInternalRadius: function () {
        return this.$2
    }, setInternalRadius: function (n) {
        this.$2 = n
    }, getPoints: function () {
        return this.$3
    }, setPoints: function (n) {
        this.$3 = n
    }, getStartAngle: function () {
        return this.$4
    }, setStartAngle: function (n) {
        this.$4 = n
    }, createPath: function (n, t) {
        for (var f = new PerfectWidgetsFramework.GraphicsPath, s = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), h = n.x + n.width / 2, c = n.y + n.height / 2, l = n.width / 2, a = n.height / 2, y = l * this.getInternalRadius(), p = a * this.getInternalRadius(), v = Math.PI / this.getPoints(), w = v * 2, r = new Array(this.getPoints() * 2), i = 0; i < this.getPoints(); i++) {
            var u = i * w + Math.PI * this.getStartAngle() / 180, e = h + l * Math.sin(u), o = c - a * Math.cos(u);
            r[i * 2] = new PerfectWidgetsFramework.Vector(e, o), u += v, e = h + y * Math.sin(u), o = c - p * Math.cos(u), r[i * 2 + 1] = new PerfectWidgetsFramework.Vector(e, o)
        }
        for (f.startPath(t.apply(r[0])), i = 1; i < r.length; i++)s.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(r[i])));
        return f.addPathElement(s), f.terminate(), f
    }}, au = {getVertice: function (n, t) {
        var i = new Array(12), f = .15, r = new PerfectWidgetsFramework.Vector(t.x * f, 0), u = new PerfectWidgetsFramework.Vector(0, t.y * f);
        return i[0] = n.add(new PerfectWidgetsFramework.Vector(t.x / 2, 0)).minus(r), i[11] = n.add(t.divideByNumber(2)).minus(r).minus(u), i[10] = n.add(new PerfectWidgetsFramework.Vector(0, t.y / 2)).minus(u), i[9] = n.add(new PerfectWidgetsFramework.Vector(0, t.y / 2)).add(u), i[8] = n.add(t.divideByNumber(2)).minus(r).add(u), i[7] = n.add(new PerfectWidgetsFramework.Vector(t.x / 2, t.y)).minus(r), i[6] = n.add(new PerfectWidgetsFramework.Vector(t.x / 2, t.y)).add(r), i[5] = n.add(t.divideByNumber(2)).add(r).add(u), i[4] = n.add(new PerfectWidgetsFramework.Vector(t.x, t.y / 2)).add(u), i[3] = n.add(new PerfectWidgetsFramework.Vector(t.x, t.y / 2)).minus(u), i[2] = n.add(t.divideByNumber(2)).add(r).minus(u), i[1] = n.add(new PerfectWidgetsFramework.Vector(t.x / 2, 0)).add(r), i
    }, createPath: function (n, t) {
        var r = new PerfectWidgetsFramework.GraphicsPath, i = this.getVertice(n.getTopLeft(), new PerfectWidgetsFramework.Vector(n.width, n.height)), f, u;
        if (i == null || !i.length)throw new Error("No points to create GraphicsPath");
        for (f = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), r.startPath(t.apply(i[0])), u = 1; u < i.length; u++)f.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(i[u])));
        return r.addPathElement(f), r.terminate(), r
    }}, yu = {getLineKind: function () {
        return this.$2
    }, setLineKind: function (n) {
        this.$2 = n
    }, createPath: function (n, t) {
        var i = new PerfectWidgetsFramework.GraphicsPath, r = null, u = null, f = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo);
        return this.getLineKind() ? (r = new PerfectWidgetsFramework.Vector(n.getLeft(), n.getTop()), u = new PerfectWidgetsFramework.Vector(n.getRight(), n.getBottom())) : (r = new PerfectWidgetsFramework.Vector(n.getLeft(), n.getBottom()), u = new PerfectWidgetsFramework.Vector(n.getRight(), n.getTop())), i.startPath(t.apply(r)), f.add(PerfectWidgetsFramework.GraphicsPath.buildVector(t.apply(u))), i.addPathElement(f), i.terminate(), i
    }}, pu = {getDrawingStyle: function () {
        return this.$6
    }, setDrawingStyle: function (n) {
        this.$6 !== n && (this.$6 = n)
    }, getUpOffset: function () {
        return this.$7
    }, setUpOffset: function (n) {
        if (this.$7 !== n) {
            if (n < 0)throw new Error("negative value");
            this.$7 = n
        }
    }, getDownOffset: function () {
        return this.$8
    }, setDownOffset: function (n) {
        if (n < 0)throw new Error("negative value");
        this.$8 = n
    }, getFill: function () {
        return this.$a
    }, setFill: function (n) {
        this.$a = n
    }, getStroke: function () {
        return this.$b
    }, setStroke: function (n) {
        this.$b = n
    }, getCornerRadius: function () {
        return this.$c
    }, setCornerRadius: function (n) {
        if (n < 0)throw new Error("negative value");
        this.$c = n
    }, getMargins: function () {
        return this.$d
    }, setMargins: function (n) {
        this.$d = n
    }, getBevelShadow: function () {
        return this.$e
    }, setBevelShadow: function (n) {
        this.$e = n
    }, paint: function (n, t) {
        this.$c < 1 && (this.$c = 1);
        var i = this.$j(n), r = this.getCornerRadius();
        i.width < 2 * r && (r = i.width / 2), i.height < 2 * r && (r = i.height / 2), t.setContext(this.context), this.$g(i, t), this.$f(t, i, r), this.context.setNeedRepaint(!1)
    }, $f: function (n, t, i) {
        var r, u, f;
        this.context.setSuffix("_bevel"), r = this.$5(this.$a), !this.getUpOffset() || (this.context.setSuffix("_out1"), this.$h(n, r, PerfectWidgetsFramework.Stroke.emptyStroke, t, i), this.context.setSuffix("_out2"), this.$h(n, this.lightFill(), PerfectWidgetsFramework.Stroke.emptyStroke, t, i)), r = this.$5(this.$a), !this.getDownOffset() || (u = PerfectWidgetsFramework.VectorRectangle.shrink(t, PerfectWidgetsFramework.Margins.symetricMargins(this.getUpOffset())), this.context.setSuffix("_in1"), this.$h(n, r, PerfectWidgetsFramework.Stroke.emptyStroke, u, i), this.context.setSuffix("_in2"), this.$h(n, this.darkFill(), PerfectWidgetsFramework.Stroke.emptyStroke, u, i)), f = PerfectWidgetsFramework.VectorRectangle.shrink(t, PerfectWidgetsFramework.Margins.symetricMargins(this.getUpOffset() + this.getDownOffset())), this.context.setSuffix("_back"), this.$h(n, this.getFill(), PerfectWidgetsFramework.Stroke.emptyStroke, f, i), this.context.setSuffix("_stroke"), this.$h(n, PerfectWidgetsFramework.Fill.emptyFill, this.getStroke(), t, i)
    }, $g: function (n, t) {
        var i, r;
        (this.getBevelShadow().getDX() || this.getBevelShadow().getDY()) && this.getBevelShadow().getFill() != null && (i = this.getCornerRadius(), n.width < 2 * i && (i = n.width / 2), n.height < 2 * i && (i = n.height / 2), r = new PerfectWidgetsFramework.VectorRectangle(n.x + this.getBevelShadow().getDX(), n.y + this.getBevelShadow().getDY(), n.width, n.height), r = this.$k(r), this.context.setSuffix("_shadow"), this.$h(t, this.getBevelShadow().getFill(), PerfectWidgetsFramework.Stroke.emptyStroke, r, i))
    }, $h: function (n, t, i, r, u) {
        if (!(r.getBottom() - u <= 0) && !(r.getRight() - u <= 0) && !(u < 0)) {
            var f = this.$i(r);
            f.setBounds(r), n.drawGraphicsPath(t, i, f)
        }
    }, $i: function (n) {
        var t = new PerfectWidgetsFramework.GraphicsPath, i;
        return i = new PerfectWidgetsFramework.VectorRectangle(n.getLeft(), n.getTop(), 2 * this.getCornerRadius(), 2 * this.getCornerRadius()), t.startPath(new PerfectWidgetsFramework.Vector(n.getLeft() + this.getCornerRadius(), n.getTop())), t.addLine(new PerfectWidgetsFramework.Vector(n.getRight() - this.getCornerRadius(), n.getTop())), i.setLocation(new PerfectWidgetsFramework.Vector(n.getRight() - 2 * this.getCornerRadius(), n.getTop())), t.addArc(i, -90, 90), t.addLine(new PerfectWidgetsFramework.Vector(n.getRight(), n.getBottom() - this.getCornerRadius())), i.setLocation(new PerfectWidgetsFramework.Vector(n.getRight() - 2 * this.getCornerRadius(), n.getBottom() - 2 * this.getCornerRadius())), t.addArc(i, 0, 90), t.addLine(new PerfectWidgetsFramework.Vector(n.getLeft() + this.getCornerRadius(), n.getBottom())), i.setLocation(new PerfectWidgetsFramework.Vector(n.getLeft(), n.getBottom() - 2 * this.getCornerRadius())), t.addArc(i, 90, 90), t.addLine(new PerfectWidgetsFramework.Vector(n.getLeft(), n.getTop() + this.getCornerRadius())), i.setLocation(new PerfectWidgetsFramework.Vector(n.getLeft(), n.getTop())), t.addArc(i, 180, 90), t.terminate(), t
    }, $j: function (n) {
        return n.x += this.$d.left, n.y += this.$d.top, n.width -= this.$d.left + this.$d.right, n.height -= this.$d.top + this.$d.bottom, n.x -= Math.min(this.getBevelShadow().getDX(), 0), n.y -= Math.min(this.getBevelShadow().getDY(), 0), n.width -= Math.abs(this.getBevelShadow().getDX()), n.height -= Math.abs(this.getBevelShadow().getDY()), this.$k(n)
    }, $k: function (n) {
        return n.width = Math.max(n.width, 1), n.height = Math.max(n.height, 1), n.x = Math.max(n.x, 0), n.y = Math.max(n.y, 0), n
    }, getDockingBounds: function (n) {
        var t = new PerfectWidgetsFramework.VectorRectangle(n.x, n.y, n.width, n.height);
        return t.width -= 2 * (this.$7 + this.$8) + Math.abs(this.getBevelShadow().getDX()) + this.$d.left + this.$d.right, t.height -= 2 * (this.$7 + this.$8) + Math.abs(this.getBevelShadow().getDY()) + this.$d.bottom + this.$d.top, t.x += this.$d.left - Math.min(0, this.getBevelShadow().getDX()) + (this.$7 + this.$8), t.y += this.$d.top - Math.min(0, this.getBevelShadow().getDY()) + (this.$7 + this.$8), this.$k(t)
    }}, wu = {isIncludePoint: function (n, t, i) {
        var r = 5;
        return this.getStroke() != null && (r = Math.max(r, this.getStroke().getWidth() / 2 + 1)), PerfectWidgetsFramework.GeometryUtilities.isLineIncludePoint(n, t, i, r)
    }, getBoundedBox: function () {
        var n = this._endPoint.minus(this._startPoint);
        return new PerfectWidgetsFramework.VectorRectangle(this._startPoint.x, this._startPoint.y, n.x, n.y).getPositiveRectangle()
    }, getStartPoint: function () {
        var n = this.getCenterPoint().minus(this._endPoint.minus(this.getCenterPoint()).divideByNumber(1 - this._centerPart).multiplyByNumber(this._centerPart));
        return n !== this._startPoint && (this._startPoint = n), this._startPoint
    }, setStartPoint: function (n) {
        PerfectWidgetsFramework.Vector.equals(this._startPoint, n) || (this._startPoint = n, this._centerPoint = this._startPoint.add(this._endPoint.minus(this._startPoint).multiplyByNumber(this._centerPart)), this.setNeedRepaint(!0))
    }, getEndPoint: function () {
        return this._endPoint
    }, setEndPoint: function (n) {
        PerfectWidgetsFramework.Color.equals(this._endPoint, n) || (this._endPoint = n, this._startPoint = this._centerPoint.minus(this._endPoint.minus(this._centerPoint).divideByNumber(1 - this._centerPart).multiplyByNumber(this._centerPart)), this.setNeedRepaint(!0))
    }, getCenterPoint: function () {
        return this._centerPoint = this._startPoint.add(this._endPoint.minus(this._startPoint).multiplyByNumber(this._centerPart)), this._centerPoint
    }, setCenterPoint: function (n) {
        PerfectWidgetsFramework.Vector.equals(this._centerPoint, n) || (this._centerPoint = n, this._startPoint = this._centerPoint.minus(this._endPoint.minus(this._centerPoint).divideByNumber(1 - this._centerPart).multiplyByNumber(this._centerPart)), this.setNeedRepaint(!0))
    }, getCenterPart: function () {
        return this._centerPart
    }, setCenterPart: function (n) {
        this._centerPart !== n && (this._centerPart = n, this.setCenterPoint(this.getCenterPoint()), this.setNeedRepaint(!0))
    }, getAngle: function () {
        var n = this.getEndPoint().minus(this.getStartPoint()), t = Math.atan2(n.y, n.x);
        return t * (180 / Math.PI)
    }}, e.getStartValue = function (n, t, i) {
        var r, u;
        return n != null ? i <= 0 ? 0 : t._kind ? (r = 0, r = t._kind === 2 ? n.percentToValue(t._value / 100) : t._value, u = Math.floor((r - n.getMinimum()) / i), r - u * i) : n.getMinimum() : 0
    }, e.getRoundLabelsStep = function (n, t, i) {
        var u = (n - t) / i, e = PerfectWidgetsFramework.MathHelper.log(u, 10), f = Math.ceil(-e), r = u * Math.pow(10, f);
        return(r = r > 5 || r < 1 ? 10 : r > 2 ? 5 : r > 1 ? 2 : 1) * Math.pow(10, -f)
    }, bu = {$p: function () {
        t.prototype.$p.call(this);
        var n = ss.safeCast(this.getScale(), u);
        n != null && n.add_needRepaintChanged(ss.bind("$y", this))
    }, $y: function (n, t) {
        this.setNeedRepaint(t.repaintType)
    }, getScale: function () {
        for (var n = this.getParent(); n != null && !ss.canCast(n, a);)n = n.getParent();
        return ss.safeCast(n, a)
    }, getColorizer: function () {
        var n = this.getScale();
        return this._colorizer == null && n != null ? n.getColorizer() : this._colorizer
    }, setColorizer: function (n) {
        this._colorizer !== n && (this._colorizer = n, this.setNeedRepaint(!0))
    }, shouldSerializeColorizer: function () {
        return this._colorizer != null
    }, resetColorizer: function () {
        this.setColorizer(null)
    }, getDistance: function () {
        return this._distance
    }, setDistance: function (n) {
        this._distance !== n && (this._distance = n)
    }, getMinLimit: function () {
        return this._minLimit
    }, setMinLimit: function (n) {
        n = r.parse(n), this._minLimit !== n && (this._minLimit = n, this.resetMeasure(), this.setNeedRepaint(!0))
    }, getMaxLimit: function () {
        return this._maxLimit
    }, setMaxLimit: function (n) {
        n = r.parse(n), this._maxLimit !== n && (this._maxLimit = n, this.resetMeasure(), this.setNeedRepaint(!0))
    }, getPadding: function () {
        return this._padding
    }, setPadding: function (n) {
        this._padding !== n && (this._padding = n, this.setNeedRepaint(!0))
    }, getDock: function () {
        return this._dock
    }, setDock: function (n) {
        this._dock !== n && (this._dock = n, this.setNeedRepaint(!0))
    }, getFixShift: function () {
        return 0
    }, getOrigin: function () {
        return this._origin
    }, setOrigin: function (n) {
        this._origin !== n && (this._origin = n, this.setNeedRepaint(!0))
    }, getColor: function (n) {
        var t = this.getScale();
        return t != null && this._colorizer != null ? this._colorizer.getColor(t.valueToPercent(n)) : PerfectWidgetsFramework.Color.black
    }, isPaint: function (n) {
        var t = !0, i = this.getScale(), r, u;
        return i != null ? (!this._minLimit._kind || (r = this._minLimit._value, this._minLimit._kind === 2 && (r = i.percentToValue(this._minLimit._value / 100)), r > n && (t = !1)), !!this._maxLimit._kind && t && (u = this._maxLimit._value, this._maxLimit._kind === 2 && (u = i.percentToValue(this._maxLimit._value / 100)), u < n && (t = !1))) : t = !1, t
    }, setStartDistance: function (n) {
        this._distance = n
    }, resetMeasure: function () {
    }, onParentChanged: function () {
        this.resetMeasure()
    }, onStyleChanged: function () {
        this.resetMeasure()
    }, calculate: function () {
        this.resetMeasure()
    }}, ku = {getHitTest: function (n) {
        var t = this.getRealPosition(n);
        return this.getBounds().contains(t)
    }, getBoundedBox: function () {
        return this.getBounds()
    }, getCenter: function () {
        return this._center
    }, setCenter: function (n) {
        PerfectWidgetsFramework.Vector.equals(this._center, n) || (this._center = n, this.onBoundsChanged(), this.setNeedRepaint(!0))
    }, getSize: function () {
        return this._size
    }, setSize: function (n) {
        PerfectWidgetsFramework.Vector.equals(this._size, n) || (this._size = n, this.onBoundsChanged(), this.setNeedRepaint(!0))
    }, getWidth: function () {
        return this._size.x
    }, setWidth: function (n) {
        this._size.x !== n && (this._size.x = n, this.onBoundsChanged(), this.setNeedRepaint(!0))
    }, getHeight: function () {
        return this._size.y
    }, setHeight: function (n) {
        this._size.y !== n && (this._size.y = n, this.onBoundsChanged(), this.setNeedRepaint(!0))
    }, getBounds: function () {
        var n = this._center.minus(this._size.divideByNumber(2));
        return new PerfectWidgetsFramework.VectorRectangle(n.x, n.y, this._size.x, this._size.y).getPositiveRectangle()
    }, setBounds: function (n) {
        var t = n.getLocation().add(new PerfectWidgetsFramework.Vector(n.width / 2, n.height / 2)), i = new PerfectWidgetsFramework.Vector(n.width, n.height);
        PerfectWidgetsFramework.Vector.equals(this._center, t) && PerfectWidgetsFramework.Vector.equals(this._size, i) || (this._center = t, this._size = i, this.setNeedRepaint(!0))
    }, onBoundsChanged: function () {
    }}, du = {$A: function () {
        this.setNeedRepaint(!0), this.refreshElement()
    }, getElements: function () {
        return this.$y
    }, setClassName: function (n) {
        for (var t = 0; t < this.$y.count(); t++)this.$y.get_item(t).setClassName(n)
    }, getByName: function (n) {
        var i, t, u, r;
        if (this.getName() === n)return this;
        for (i = this.getElements(), t = 0; t < i.count(); t++)if (u = i.get_item(t), r = u.getByName(n), r != null)return r;
        return null
    }, onPaint: function (n) {
        var r, i, u;
        if (n.setContext(this), this.onRecalculate(), n.createGroup(), this.getNeedRepaint() && (this.$z && (n.clearGroup(), this.$z = !1), t.prototype.setNeedRepaint.call(this, !1)), this.getVisible())for (r = this.getElements(), i = 0; i < r.count(); i++)u = r.get_item(i), u.paint(n); else n.clearGroup();
        n.endGroup()
    }, add_needRepaintChanged: function (n) {
        this.$B = ss.bindAdd(this.$B, n)
    }, remove_needRepaintChanged: function (n) {
        this.$B = ss.bindSub(this.$B, n)
    }, $C: function (n) {
        this.$B != null && this.$B(this, new gf(n))
    }, setNeedRepaint: function (n) {
        t.prototype.setNeedRepaint.call(this, n), n && this.$C(n)
    }, getElementAt: function (n) {
        for (var u = this.getTransformation() == null ? n : this.getTransformation().reverse(n), f = this.getElements(), r, i = f.count() - 1; i >= 0; i--)if (r = f.get_item(i).getElementAt(u), r != null)return r;
        return t.prototype.getElementAt.call(this, u)
    }, getBoundedBox: function () {
        var i = this.getElements(), n = PerfectWidgetsFramework.VectorRectangle.empty, r, u;
        for (i.count() > 0 && (n = i.get_item(0).getBoundedBox()), r = 1; r < i.count(); r++)if (u = i.get_item(r), !ss.canCast(u, ao)) {
            var t = u.getBoundedBox(), f = Math.min(n.x, t.x), e = Math.min(n.y, t.y), o = Math.max(n.x + n.width, t.x + t.width), s = Math.max(n.y + n.height, t.y + t.height);
            n = new PerfectWidgetsFramework.VectorRectangle(f, e, o - f, s - e)
        }
        return n
    }, getHitTest: function (n) {
        for (var r = t.prototype.getHitTest.call(this, n), u = this.getElements(), i = 0; i < u.count(); i++)r = r || u.get_item(i).getHitTest(n);
        return r
    }}, nf = {$0: function (n, t) {
        var u = new Array(t.length), r, f, i;
        if (!!this._digits.getStyleID())for (r = this._digits.getDigitHeight(), f = r * this._digits.getOverhang(), i = 0; i < t.length; i++)t[i].x = t[i].x + f * (1 - t[i].y / r);
        for (i = 0; i < t.length; i++)u[i] = t[i];
        this._segmentPaths[n] = u
    }, $1: function () {
        if (this._segmentPaths == null) {
            this._segmentPaths = new Array(10);
            var u = this._digits.getDigitHeight(), r = this._digits.getDigitWidth(), f = this._digits.getSegmentThickness(), e = u / 2, c = r / 2, o = f / 2, h = this._digits.getSegmentSpace() / 2, t = new PerfectWidgetsFramework.Vector(f, f), s = new PerfectWidgetsFramework.Vector(-f, f), l = new PerfectWidgetsFramework.Vector(r, u), i = this._digits.getSkew(), n = h / 2;
            this.$0(0, [new PerfectWidgetsFramework.Vector(0 + i * f * 2, 0), new PerfectWidgetsFramework.Vector(0 + i * t.x + n / 2, i * t.y - n / 2), new PerfectWidgetsFramework.Vector(0 + t.x + n, t.y), new PerfectWidgetsFramework.Vector(r + s.x - n, s.y), new PerfectWidgetsFramework.Vector(r + i * s.x - n / 2, i * s.y - n / 2), new PerfectWidgetsFramework.Vector(r - i * f * 2, 0)]), this.$0(1, [new PerfectWidgetsFramework.Vector(0 + i * f * 2, +u), new PerfectWidgetsFramework.Vector(0 + i * t.x + n / 2, u - (i * t.y - n / 2)), new PerfectWidgetsFramework.Vector(0 + t.x + n, u - t.y), new PerfectWidgetsFramework.Vector(r + s.x - n, u - s.y), new PerfectWidgetsFramework.Vector(r + i * s.x - n / 2, u - (i * s.y - n / 2)), new PerfectWidgetsFramework.Vector(r - i * f * 2, +u)]), this.$0(2, [new PerfectWidgetsFramework.Vector(0, i * f * 2), new PerfectWidgetsFramework.Vector(0 + i * t.x - n / 2, 0 + i * t.y + n / 2), new PerfectWidgetsFramework.Vector(0 + t.x, 0 + t.y + n), new PerfectWidgetsFramework.Vector(f, e - o - n), new PerfectWidgetsFramework.Vector(o, e - n), new PerfectWidgetsFramework.Vector(0, e - o - n)]), this.$0(3, [new PerfectWidgetsFramework.Vector(r, i * f * 2), new PerfectWidgetsFramework.Vector(r - (i * t.x - n / 2), 0 + i * t.y + n / 2), new PerfectWidgetsFramework.Vector(r - t.x, 0 + t.y + n), new PerfectWidgetsFramework.Vector(r - f, e - o - n), new PerfectWidgetsFramework.Vector(r - o, e - n), new PerfectWidgetsFramework.Vector(r, e - o - n)]), this.$0(4, [new PerfectWidgetsFramework.Vector(0, u - i * f * 2), new PerfectWidgetsFramework.Vector(0 + i * t.x - n / 2, u - (i * t.y + n / 2)), new PerfectWidgetsFramework.Vector(0 + t.x, u - (t.y + n)), new PerfectWidgetsFramework.Vector(f, u - (e - o - n)), new PerfectWidgetsFramework.Vector(o, u - (e - n)), new PerfectWidgetsFramework.Vector(0, u - (e - o - n))]), this.$0(5, [new PerfectWidgetsFramework.Vector(r, u - i * f * 2), new PerfectWidgetsFramework.Vector(r - (i * t.x - n / 2), u - (i * t.y + n / 2)), new PerfectWidgetsFramework.Vector(r - t.x, u - (t.y + n)), new PerfectWidgetsFramework.Vector(r - f, u - (e - o - n)), new PerfectWidgetsFramework.Vector(r - o, u - (e - n)), new PerfectWidgetsFramework.Vector(r, u - (e - o - n))]), this.$0(6, [new PerfectWidgetsFramework.Vector(o + n, e), new PerfectWidgetsFramework.Vector(f + n, e - o), new PerfectWidgetsFramework.Vector(r - (f + n), e - o), new PerfectWidgetsFramework.Vector(r - (o + n), e), new PerfectWidgetsFramework.Vector(r - (f + n), u - (e - o)), new PerfectWidgetsFramework.Vector(f + n, u - (e - o))])
        }
    }, $2: function () {
        var e, o, n;
        if (this._dotPath == null || this._colonPaths == null) {
            var u = this._digits.getDigitHeight(), h = this._digits.getDigitWidth(), f = this._digits.getSegmentThickness(), v = this._digits.getSegmentSpace(), p = u / 2, w = h / 2, b = f / 2, k = v / 2, c = u, d = h, t = f, g = new PerfectWidgetsFramework.Vector(f, f), nt = new PerfectWidgetsFramework.Vector(-f, f), tt = new PerfectWidgetsFramework.Vector(h, u), y = this._digits.getSkew(), i = y * t / 2, l = u * this._digits.getOverhang(), a = 8, r = [new PerfectWidgetsFramework.Vector(0, i), new PerfectWidgetsFramework.Vector(i, 0), new PerfectWidgetsFramework.Vector(t - i, 0), new PerfectWidgetsFramework.Vector(t, i), new PerfectWidgetsFramework.Vector(t, t - i), new PerfectWidgetsFramework.Vector(t - i, t), new PerfectWidgetsFramework.Vector(i, t), new PerfectWidgetsFramework.Vector(0, t - i)], s = new Array(a);
            for (n = 0; n < r.length; n++)s[n] = new PerfectWidgetsFramework.Vector(r[n].x, c - t + r[n].y), s[n].x += l * (1 - s[n].y / u);
            for (this._dotPath = this.$3(s), e = new Array(a), o = new Array(a), n = 0; n < r.length; n++)e[n] = new PerfectWidgetsFramework.Vector(r[n].x, c / 4 - t / 2 + r[n].y), e[n].x += l * (1 - e[n].y / u), o[n] = new PerfectWidgetsFramework.Vector(r[n].x, 3 * c / 4 - t / 2 + r[n].y), o[n].x += l * (1 - o[n].y / u);
            this._colonPaths = new Array(2), this._colonPaths[0] = this.$3(e), this._colonPaths[1] = this.$3(o)
        }
    }, $3: function (n) {
        for (var i = new Array(n.length), t = 0; t < n.length; t++)i[t] = n[t];
        return i
    }, prepareSegmentsIfNeeded: function () {
        var e = this._digits.getStyleID();
        if (!!e) {
            this.$1(), this.$2();
            return
        }
        if (this._segmentPaths == null) {
            this._segmentPaths = new Array(10);
            var r = this._digits.getDigitHeight() / 2, f = this._digits.getSegmentThickness() / 2, n = this._digits.getSegmentSpace(), i = this._digits.getDigitWidth(), u = this._digits.getDigitHeight(), t = this._digits.getSegmentThickness();
            this.$0(0, [new PerfectWidgetsFramework.Vector(n, 0), new PerfectWidgetsFramework.Vector(i - n, 0), new PerfectWidgetsFramework.Vector(i - n - t, t), new PerfectWidgetsFramework.Vector(n + t, t)]), this.$0(1, [new PerfectWidgetsFramework.Vector(n, u), new PerfectWidgetsFramework.Vector(i - n, u), new PerfectWidgetsFramework.Vector(i - n - t, u - t), new PerfectWidgetsFramework.Vector(n + t, u - t)]), this.$0(2, [new PerfectWidgetsFramework.Vector(0, n), new PerfectWidgetsFramework.Vector(0, r - n), new PerfectWidgetsFramework.Vector(t, r - n - t), new PerfectWidgetsFramework.Vector(t, n + t)]), this.$0(3, [new PerfectWidgetsFramework.Vector(i, n), new PerfectWidgetsFramework.Vector(i, r - n), new PerfectWidgetsFramework.Vector(i - t, r - n - t), new PerfectWidgetsFramework.Vector(i - t, n + t)]), this.$0(4, [new PerfectWidgetsFramework.Vector(0, u - n), new PerfectWidgetsFramework.Vector(0, u - r + n), new PerfectWidgetsFramework.Vector(t, u - r + n + t), new PerfectWidgetsFramework.Vector(t, u - n - t)]), this.$0(5, [new PerfectWidgetsFramework.Vector(i, u - n), new PerfectWidgetsFramework.Vector(i, u - r + n), new PerfectWidgetsFramework.Vector(i - t, u - r + n + t), new PerfectWidgetsFramework.Vector(i - t, u - n - t)]), this.$0(6, [new PerfectWidgetsFramework.Vector(n, r), new PerfectWidgetsFramework.Vector(n + f, r - f), new PerfectWidgetsFramework.Vector(i - n - f, r - f), new PerfectWidgetsFramework.Vector(i - n, r), new PerfectWidgetsFramework.Vector(i - n - f, r + f), new PerfectWidgetsFramework.Vector(n + f, r + f)])
        }
    }, formColon: function (n, t) {
        var f = this._digits.getSuffix(), r, u, i;
        if (this._digits.setSuffix(f.substr(0, f.length - 1) + "_upperDot"), this._digits.getStyleID()) {
            for (n.moveTo(this._colonPaths[0][0].add(t)), i = 1; i < this._colonPaths[0].length; i++)n.addLine(this._colonPaths[0][i].add(t));
            n.addLine(this._colonPaths[0][0].add(t))
        } else r = this._digits.getDigitHeight() * (1 / 3), n.moveTo(new PerfectWidgetsFramework.Vector(0, r).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(this._digits.getSegmentThickness(), r).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(this._digits.getSegmentThickness(), r + this._digits.getSegmentThickness()).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(0, r + this._digits.getSegmentThickness()).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(0, r).add(t));
        if (this._digits.setSuffix(f.substr(0, f.length - 1) + "_bottomDot"), this._digits.getStyleID()) {
            for (n.moveTo(this._colonPaths[1][0].add(t)), i = 1; i < this._colonPaths[1].length; i++)n.addLine(this._colonPaths[1][i].add(t));
            n.addLine(this._colonPaths[1][0].add(t))
        } else u = this._digits.getDigitHeight() * (2 / 3), n.moveTo(new PerfectWidgetsFramework.Vector(0, u).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(this._digits.getSegmentThickness(), u).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(this._digits.getSegmentThickness(), u + this._digits.getSegmentThickness()).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(0, u + this._digits.getSegmentThickness()).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(0, u).add(t))
    }, formDot: function (n, t) {
        var r = this._digits.getSuffix(), i;
        if (this._digits.setSuffix(r.substr(0, r.length - 1) + (1).toString()), this._digits.getStyleID()) {
            for (n.moveTo(this._dotPath[0].add(t)), i = 1; i < this._dotPath.length; i++)n.addLine(this._dotPath[i].add(t));
            n.addLine(this._dotPath[0].add(t))
        } else n.moveTo(new PerfectWidgetsFramework.Vector(0, this._digits.getDigitHeight()).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(this._digits.getSegmentThickness(), this._digits.getDigitHeight()).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(this._digits.getSegmentThickness(), this._digits.getDigitHeight() + this._digits.getSegmentThickness()).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(0, this._digits.getDigitHeight() + this._digits.getSegmentThickness()).add(t)), n.addLine(new PerfectWidgetsFramework.Vector(0, this._digits.getDigitHeight()).add(t))
    }, formSegments: function (n, t, i, r) {
        for (var e, h = i, c = new PerfectWidgetsFramework.SolidFill(this._digits.getActiveColor()), l = new PerfectWidgetsFramework.SolidFill(this._digits.getInactiveColor()), s, f, o, u = 0; u < 7; u++)if (this._segmentPaths[u] != null) {
            for (e = (h & 1) == 1 ? n : t, s = this._digits.getSuffix(), this._digits.setSuffix(s.substr(0, s.length - 1) + u.toString()), f = this._segmentPaths[u], e.moveTo(f[0].add(r)), o = 1; o < f.length; o++)e.addLine(f[o].add(r));
            e.addLine(f[0].add(r)), h >>= 1
        }
    }}, tf = {getOn: function () {
        return this.on
    }, setOn: function (n) {
        n !== this.on && (this.on = n, this.refreshElement())
    }, getPressed: function () {
        return this.$D
    }, setPressed: function (n) {
        n !== this.$D && (this.$D = n, this.refreshElement())
    }, getHot: function () {
        return this.$E
    }, setHot: function (n) {
        this.$E !== n && (this.$E = n, this.refreshElement())
    }}, rf = {getLength: function () {
        return this.$y
    }, setLength: function (n) {
        n !== this.$y && (this.$y = n, this.setNeedRepaint(!0))
    }, getLightColor: function () {
        return this.$z
    }, setLightColor: function (n) {
        PerfectWidgetsFramework.Vector.equals(n, this.$z) || (this.$z = n, this.setNeedRepaint(!0))
    }, getDarkColor: function () {
        return this.$A
    }, setDarkColor: function (n) {
        PerfectWidgetsFramework.Color.equals(this.$A, n) || (this.$A = n, this.setNeedRepaint(!0))
    }, getCount: function () {
        return this.$B
    }, setCount: function (n) {
        n < 0, this.$B !== n && (this.$B = n, this.setNeedRepaint(!0))
    }, getNotchesStyle: function () {
        return this.$C
    }, setNotchesStyle: function (n) {
        this.$C !== n && (this.$C = n, this.setNeedRepaint(!0))
    }, getWidth: function () {
        return this.$D
    }, setWidth: function (n) {
        this.$D !== n && (this.$D = n, this.setNeedRepaint(!0))
    }, $E: function (n) {
        var r = new PerfectWidgetsFramework.GraphicsPath, u = new PerfectWidgetsFramework.GraphicsPath, a = this.getLightColor(), v = this.getDarkColor(), h, o, i, f, e, s, t;
        this.getNotchesStyle() === 1 && (a = this.getDarkColor(), v = this.getLightColor()), h = new PerfectWidgetsFramework.Stroke, o = new PerfectWidgetsFramework.Stroke, h.setStyle(PerfectWidgetsFramework.LineStyle.solid), h.setColor(a), h.setWidth(this.getWidth()), o.setStyle(PerfectWidgetsFramework.LineStyle.solid), o.setColor(v), o.setWidth(this.getWidth());
        var y = Math.PI * 2 / this.getCount(), c = PerfectWidgetsFramework.Vector.fromPolar(this.getRadius() - this.getLength(), PerfectWidgetsFramework.Vector.toRadians(this.getAngle())), l = PerfectWidgetsFramework.Vector.fromPolar(this.getRadius(), PerfectWidgetsFramework.Vector.toRadians(this.getAngle()));
        for (r.startPath(new PerfectWidgetsFramework.Vector(0, 0)), u.startPath(new PerfectWidgetsFramework.Vector(0, 0)), i = 0; i < this.getCount(); i++)f = this.getCenter().add(c), e = this.getCenter().add(l), this.getNotchesStyle() === 2 ? (this.setSuffix("_" + i.toString() + "flat"), n.drawLine(o, [f, e])) : (s = e.minus(f), t = PerfectWidgetsFramework.Vector.fromPolar(this.getWidth() / 2, s.getRotation() + PerfectWidgetsFramework.Vector.toRadians(90) + PerfectWidgetsFramework.Vector.toRadians(this.getAngle())), Math.PI / 4 <= s.getRotation() && s.getRotation() <= Math.PI * 5 / 4 ? (this.setSuffix("_" + i.toString() + "LLight"), u.moveTo(f.add(t)), u.addLine(e.add(t))) : (this.setSuffix("_" + i.toString() + "RDark"), r.moveTo(f.add(t)), r.addLine(e.add(t))), Math.PI / 4 <= s.getRotation() && s.getRotation() <= Math.PI * 5 / 4 ? (this.setSuffix("_" + i.toString() + "LDark"), r.moveTo(f.minus(t)), r.addLine(e.minus(t))) : (this.setSuffix("_" + i.toString() + "RLight"), u.moveTo(f.minus(t)), u.addLine(e.minus(t)))), c.setRotation(c.getRotation() + y), l.setRotation(l.getRotation() + y);
        r.terminate(), u.terminate(), this.setSuffix("_darkPath"), n.drawGraphicsPath(null, o, r), this.setSuffix("_lightPath"), n.drawGraphicsPath(null, h, u)
    }, onPaint: function (n) {
        this.onRecalculate(), this.getNeedRepaint() && (this.setNeedRepaint(!1), this.setSuffix("cnotches"), n.setContext(this), n.createGroup(), n.clearGroup(), this.$E(n), n.endGroup())
    }, getBoundedBox: function () {
        var n = new PerfectWidgetsFramework.Vector(this.getRadius() * 2, this.getRadius() * 2), t = this.getCenter().minus(n.divideByNumber(2));
        return new PerfectWidgetsFramework.VectorRectangle(t.x, t.y, n.x, n.y)
    }, getHitTest: function (n) {
        return v.prototype.getHitTest.call(this, n)
    }}, uf = {}, ff = {getLength: function () {
        return this.$y
    }, setLength: function (n) {
        this.$y !== n && (this.$y = n, this.setNeedRepaint(!0))
    }, getLightColor: function () {
        return this.$z
    }, setLightColor: function (n) {
        PerfectWidgetsFramework.Vector.equals(this.$z, n) || (this.$z = n, this.setNeedRepaint(!0))
    }, getDarkColor: function () {
        return this.$A
    }, setDarkColor: function (n) {
        PerfectWidgetsFramework.Color.equals(this.$A, n) || (this.$A = n, this.setNeedRepaint(!0))
    }, getCount: function () {
        return this.$B
    }, setCount: function (n) {
        n < 0, this.$B !== n && (this.$B = n, this.setNeedRepaint(!0))
    }, getNotchesStyle: function () {
        return this.$C
    }, setNotchesStyle: function (n) {
        this.$C !== n && (this.$C = n, this.setNeedRepaint(!0))
    }, getWidth: function () {
        return this.$D
    }, setWidth: function (n) {
        this.$D !== n && (this.$D = n, this.setNeedRepaint(!0))
    }, $E: function () {
        return this.getEndPoint().minus(this.getStartPoint()).getRotation() + PerfectWidgetsFramework.Vector.toRadians(90)
    }, onPaint: function (n) {
        this.onRecalculate(), this.getNeedRepaint() && (this.setNeedRepaint(!1), this.setSuffix("lnotches"), n.setContext(this), n.createGroup(), this.$F(n), n.endGroup())
    }, $F: function (n) {
        var o = new PerfectWidgetsFramework.GraphicsPath, s = new PerfectWidgetsFramework.GraphicsPath, a = this.getEndPoint(), v = this.getStartPoint(), h = this.getLightColor(), c = this.getDarkColor(), l = a.minus(v), f, e, r, u, t, i;
        switch (this.getNotchesStyle()) {
            case 0:
                Math.PI / 4 <= l.getRotation() && l.getRotation() <= Math.PI * 5 / 4 ? (c = this.getLightColor(), h = this.getDarkColor()) : (h = this.getLightColor(), c = this.getDarkColor());
                break;
            case 1:
                Math.PI / 4 <= l.getRotation() && l.getRotation() <= Math.PI * 5 / 4 ? (h = this.getLightColor(), c = this.getDarkColor()) : (c = this.getLightColor(), h = this.getDarkColor())
        }
        for (f = new PerfectWidgetsFramework.Stroke, e = new PerfectWidgetsFramework.Stroke, f.setStyle(PerfectWidgetsFramework.LineStyle.solid), f.setColor(h), f.setWidth(1.5), e.setStyle(PerfectWidgetsFramework.LineStyle.solid), e.setColor(c), e.setWidth(1.5), o.startPath(new PerfectWidgetsFramework.Vector(0, 0)), s.startPath(new PerfectWidgetsFramework.Vector(0, 0)), r = this.getWidth() / this.getCount(), u = 0; u < this.getCount(); u++)t = v, t = t.minus(PerfectWidgetsFramework.Vector.fromPolar(r * u, this.$E())), t = t.add(PerfectWidgetsFramework.Vector.fromPolar((this.getWidth() - r) / 2 - f.getWidth() / 2, this.$E())), i = a, i = i.minus(PerfectWidgetsFramework.Vector.fromPolar(r * u, this.$E())), i = i.add(PerfectWidgetsFramework.Vector.fromPolar((this.getWidth() - r) / 2 - f.getWidth() / 2, this.$E())), this.setSuffix("_" + u.toString() + "light"), s.moveTo(t), s.addLine(i), t = v, t = t.minus(PerfectWidgetsFramework.Vector.fromPolar(r * u, this.$E())), t = t.add(PerfectWidgetsFramework.Vector.fromPolar((this.getWidth() - r) / 2 + e.getWidth() / 2, this.$E())), i = a, i = i.minus(PerfectWidgetsFramework.Vector.fromPolar(r * u, this.$E())), i = i.add(PerfectWidgetsFramework.Vector.fromPolar((this.getWidth() - r) / 2 + e.getWidth() / 2, this.$E())), this.setSuffix("_" + u.toString() + "dark"), o.moveTo(t), o.addLine(i);
        o.terminate(), s.terminate(), this.setSuffix("_darkPath"), n.drawGraphicsPath(null, e, o), this.setSuffix("_lightPath"), n.drawGraphicsPath(null, f, s)
    }, getHitTest: function (n) {
        var t = this.getEndPoint(), r = this.getStartPoint(), u = PerfectWidgetsFramework.Vector.toRadians(90) - t.minus(r).getRotation(), i = PerfectWidgetsFramework.GeometryUtilities.rotateVector(n, t, u), e = PerfectWidgetsFramework.GeometryUtilities.rotateVector(r, t, u), f = t.minus(r).getLength();
        return Math.abs(i.y - e.y) <= f && Math.abs(i.y - t.y) <= f && i.x >= t.x - this.getWidth() / 2 && i.x <= t.x + this.getWidth() / 2
    }, getBoundedBox: function () {
        var t = this.getEndPoint(), i = this.getStartPoint(), r = t.minus(i), n = r.getPerpendicular();
        return n.setLength(this.getWidth() / 2), PerfectWidgetsFramework.GeometryUtilities.getPolygonBox([i.add(n), i.minus(n), t.minus(n), t.minus(n)])
    }}, ef = {getAmplitude: function () {
        return this.$y
    }, setAmplitude: function (n) {
        n !== this.$y && (this.$y = n, this.setNeedRepaint(!0))
    }, getCoilsCount: function () {
        return this.$z
    }, setCoilsCount: function (n) {
        n = Math.abs(n), this.$z === n || !n || (this.setNeedRepaint(!0), this.$z = n)
    }, $A: function () {
        var u = this.getCoilsCount(), t = new Array(u + 2), i, f, r, n, e;
        for (t[0] = this.getStartPoint(), i = this.getEndPoint().minus(this.getStartPoint()), f = i.getPerpendicular(), f.setLength(this.getAmplitude()), i.setLength(i.getLength() / u), r = 1, n = 1; n <= u; n++)e = this.getStartPoint().add(i.multiply(new PerfectWidgetsFramework.Vector(n - .5, n - .5))).add(f.multiply(new PerfectWidgetsFramework.Vector(r, r))), t[n] = e, r *= -1;
        return t[t.length - 1] = this.getEndPoint(), t
    }, onPaint: function (n, t, i) {
        var r, u, e, f;
        if (this.onRecalculate(), this.getNeedRepaint()) {
            for (this.setNeedRepaint(!1), n.setContext(this), r = new PerfectWidgetsFramework.GraphicsPath, u = this.$A(), r.startPath(u[0]), e = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), f = 1; f < u.length; f++)e.add(PerfectWidgetsFramework.GraphicsPath.buildVector(u[f]));
            r.addPathElement(e), n.drawGraphicsPath(t, i, r)
        }
    }, getHitTest: function (n) {
        for (var i = this.$A(), r = !1, t = 0; t < i.length - 1; t++)r = (r | this.isIncludePoint(n, i[t], i[t + 1])) == 1;
        return r
    }}, of = {$E: function (n, t) {
        var f = 0, s = ss.safeCast(n, u), o = s.getElements(), r, e, i;
        if (s != null)switch (t) {
            case 3:
                for (r = 0; r < o.count(); r++)e = o.get_item(r), i = ss.safeCast(e, tt), i != null && i.getDock() === 3 && i.getVisible() && (f = Math.max(f, i.getSize()));
                break;
            case 2:
            case 1:
                for (r = 0; r < o.count(); r++)e = o.get_item(r), i = ss.safeCast(e, tt), i != null && i.getDock() === t && i.getVisible() && (f += i.getSize() + i.getPadding());
                f += this.$E(n, 3) / 2
        }
        return f
    }, $F: function (n) {
        for (var i = 0, u = this.getElements(), f, r, t = 0; t < u.count(); t++)f = u.get_item(t), r = ss.safeCast(f, a), r != null && (i = Math.max(i, this.$E(r, n)));
        return i
    }, getInsideSize: function () {
        return this.$F(1)
    }, getOutsideSize: function () {
        return this.$F(2)
    }, getMargins: function () {
        return this.$D
    }, setMargin: function (n) {
        this.$D !== n && (this.$D = n)
    }}, sf = {getCount: function () {
        return this.$y
    }, setCount: function (n) {
        if (n < 0)throw new Error("value is negative");
        this.$y !== n && (this.$y = n, this.setNeedRepaint(!0))
    }, getDepth: function () {
        return this.$z
    }, setDepth: function (n) {
        this.$z !== n && (this.$z = n, this.setNeedRepaint(!0))
    }, getDimensionsRatio: function () {
        return this.$A
    }, setDimensionsRatio: function (n) {
        this.$A !== n && (this.$A = n, this.setNeedRepaint(!0))
    }, $C: function () {
        for (var n = new PerfectWidgetsFramework.GraphicsPath, f = new PerfectWidgetsFramework.VectorRectangle(this.getCenter().x - this.getRadius(), this.getCenter().y - this.getRadius(), this.getRadius() * 2, this.getRadius() * 2), s = 360 / this.getCount(), t = s * this.getDimensionsRatio() / (this.getDimensionsRatio() + 1), a = s - t, g = PerfectWidgetsFramework.Vector.fromPolar(this.getRadius() - this.getDepth(), PerfectWidgetsFramework.Vector.toRadians(a / 2)), v = PerfectWidgetsFramework.Vector.fromPolar(this.getRadius(), PerfectWidgetsFramework.Vector.toRadians(a)), y = PerfectWidgetsFramework.Vector.fromPolar(this.getRadius(), PerfectWidgetsFramework.Vector.toRadians(0)), p = y.minus(v).getLength(), w = g.minus(y).getLength(), b = g.minus(v).getLength(), h = (p + w + b) / 2, st = Math.sqrt(h * (h - p) * (h - w) * (h - b)), k = p * w * b / (4 * st), nt = this.getRadius() - this.getDepth() + k, d = new PerfectWidgetsFramework.Vector(k * 2, k * 2), tt = PerfectWidgetsFramework.Vector.fromPolar(nt, PerfectWidgetsFramework.Vector.toRadians(a / 2)), c = PerfectWidgetsFramework.Vector.toDegrees(y.minus(tt).getRotation()), it = PerfectWidgetsFramework.Vector.toDegrees(v.minus(tt).getRotation()) - c, r, u, l, ot, e = 0; e < this.getCount(); e++) {
            var i = this.getAngle() + s * e, rt = new PerfectWidgetsFramework.Vector(f.width / 2, f.height / 2), ut = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(f.getCenter(), rt, i), lt = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(f.getCenter(), rt, i + t), ht = this.getCenter().add(PerfectWidgetsFramework.Vector.fromPolar(nt, PerfectWidgetsFramework.Vector.toRadians(i + (s + t) / 2))), ft = ht.minus(d.divideByNumber(2)), o = new PerfectWidgetsFramework.VectorRectangle(ft.x, ft.y, d.x, d.y), et = new PerfectWidgetsFramework.Vector(o.width / 2, o.height / 2), ct = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(o.getCenter(), et, c + i + t), at = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(o.getCenter(), et, c + i + t + it);
            e || n.startPath(ut), r = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), r.add(PerfectWidgetsFramework.GraphicsPath.buildVector(ut)), n.addPathElement(r), u = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), l = PerfectWidgetsFramework.EllipticArcParameters.fillParameters(f, i, t), u.add(l), n.addPathElement(u), r = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), r.add(PerfectWidgetsFramework.GraphicsPath.buildVector(ct)), n.addPathElement(r), u = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), l = PerfectWidgetsFramework.EllipticArcParameters.fillParameters(o, c + i + t, it), u.add(l), n.addPathElement(u)
        }
        return n.terminate(), ot = new PerfectWidgetsFramework.VectorRectangle(this._center.x - this._radius, this._center.y - this._radius, 2 * this._radius, 2 * this._radius), n.setBounds(ot), n
    }, onPaint: function (n, t, i) {
        n.setContext(this), this.onRecalculate(), this.getNeedRepaint() && (this.setNeedRepaint(!1), Math.abs(this.getRadius()) > this.$B && (this.setSuffix("gear_"), n.createGroup(), n.clearGroup(), n.drawGraphicsPath(t, i, this.$C()), n.endGroup()))
    }, getHitTest: function (n) {
        var t = this.getRealPosition(n), i;
        return this.getBoundedBox().contains(t) ? (i = t.minus(this._center), i.abs() <= this._radius) : !1
    }, getBoundedBox: function () {
        var t = Math.max(this.getRadius(), this.getRadius() - this.getDepth()), n = new PerfectWidgetsFramework.Vector(t * 2, t * 2), i = this.getCenter().minus(n.divideByNumber(2));
        return new PerfectWidgetsFramework.VectorRectangle(i.x, i.y, n.x, n.y)
    }}, hf = {getSweepAngle: function () {
        return this.$y
    }, setSweepAngle: function (n) {
        this.$y !== n && (this.$y = Math.abs(n) <= .0001 ? 360 : n, this.setNeedRepaint(!0))
    }, getK: function () {
        return this._k
    }, setK: function (n) {
        this._k !== n && (this._k = n, this.setNeedRepaint(!0))
    }, $z: function () {
        var t = new PerfectWidgetsFramework.GraphicsPath, i = PerfectWidgetsFramework.Vector.fromPolar(this.getRadius(), PerfectWidgetsFramework.Vector.toRadians(this.getAngle())), r = new PerfectWidgetsFramework.Vector(this.getCenter().x + i.x, this.getCenter().y + i.y), e, c;
        t.startPath(r), i = PerfectWidgetsFramework.Vector.fromPolar(this.getRadius(), PerfectWidgetsFramework.Vector.toRadians(this.getAngle() + this.getSweepAngle()));
        var l = new PerfectWidgetsFramework.Vector(this.getCenter().x + i.x, this.getCenter().y + i.y), f = new PerfectWidgetsFramework.VectorRectangle(this.getCenter().x - this.getRadius(), this.getCenter().y - this.getRadius(), this.getRadius() * 2, this.getRadius() * 2), o = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), a = PerfectWidgetsFramework.EllipticArcParameters.fillParameters(f, this.getAngle(), this.getSweepAngle());
        if (o.add(a), t.addPathElement(o), this.getSweepAngle() < 360) {
            var s = PerfectWidgetsFramework.Vector.fromPolar(this.getK() * this.getRadius(), PerfectWidgetsFramework.Vector.toRadians(this.getAngle() + this.getSweepAngle() / 2)), n = new PerfectWidgetsFramework.Vector(this.getCenter().x - s.x, this.getCenter().y - s.y), v = new PerfectWidgetsFramework.Vector(n.x - r.x, n.y - r.y), u = v.getLength(), h = PerfectWidgetsFramework.Vector.toDegrees(l.minus(n).getRotation()), y = (PerfectWidgetsFramework.Vector.toDegrees(r.minus(n).getRotation()) - h - 360) % 360;
            f = new PerfectWidgetsFramework.VectorRectangle(n.x - u, n.y - u, u * 2, u * 2), e = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), c = PerfectWidgetsFramework.EllipticArcParameters.fillParameters(f, h, y), e.add(c), t.addPathElement(e)
        }
        return t.terminate(), t
    }, onPaint: function (n, t, i) {
        if (n.setContext(this), this.onRecalculate(), this.getNeedRepaint() && (this.setNeedRepaint(!1), Math.abs(this.getRadius()) > this.$A)) {
            this.setSuffix("_highlight"), n.createGroup(), n.clearGroup();
            var r = this.$z(), u = new PerfectWidgetsFramework.VectorRectangle(this._center.x - this._radius, this._center.y - this._radius, 2 * this._radius, 2 * this._radius);
            r.setBounds(u), n.drawGraphicsPath(t, i, r), n.endGroup()
        }
    }, getHitTest: function () {
        return!1
    }, getBoundedBox: function () {
        var n = Math.max(this.getRadius(), this.getRadius() - this.getRadius() * this.getK()), t = new PerfectWidgetsFramework.Vector(n * 2, n * 2);
        return new PerfectWidgetsFramework.VectorRectangle(this.getCenter().x - n, this.getCenter().y - n, t.x, t.y)
    }}, cf = {onPaint: function (n, t, i) {
        n.setContext(this), n.createGroup(), this.onRecalculate(), this.getNeedRepaint() && (this.setNeedRepaint(!1), n.clearGroup(), n.drawLine(i, [this._startPoint, this._endPoint])), n.endGroup()
    }, getHitTest: function (n) {
        var t = this.getRealPosition(n);
        return this.isIncludePoint(t, this._startPoint, this._endPoint)
    }, getBoundedBox: function () {
        var n = this._endPoint.minus(this._startPoint);
        return new PerfectWidgetsFramework.VectorRectangle(this._startPoint.x, this._startPoint.y, n.x, n.y).getPositiveRectangle()
    }}, lf = {$y: function (n, t, i) {
        var r = this._endPoint.minus(this._startPoint).multiply(new PerfectWidgetsFramework.Vector(n, n)), u = PerfectWidgetsFramework.Vector.fromPolar(t / 2, this._startPoint.minus(this._endPoint).getRotation() - Math.PI / 2);
        return i === 1 ? this._startPoint.add(r).add(u) : this._startPoint.add(r).minus(u)
    }, $z: function () {
        var t = [], i, n;
        for (this._showMode ? (t.push(this._startPoint), t.push(this.$y(0, this._startWidth, this._showMode))) : t.push(this.$y(0, this._startWidth, 1)), n = 0; n < this._needlePoints.length; n++)this._showMode ? t.push(this.$y(this._needlePoints[n].portion, this._needlePoints[n].width, this._showMode)) : t.push(this.$y(this._needlePoints[n].portion, this._needlePoints[n].width, 1));
        if (this._showMode)t.push(this.$y(1, this._endWidth, this._showMode)), t.push(this._endPoint); else {
            for (t.push(this.$y(1, this._endWidth, 1)), t.push(this.$y(1, this._endWidth, 2)), n = this._needlePoints.length - 1; n >= 0; n--)t.push(this.$y(this._needlePoints[n].portion, this._needlePoints[n].width, 2));
            t.push(this.$y(0, this._startWidth, 2))
        }
        for (i = new Array(t.length), n = 0; n < t.length; n++)i[n] = t[n];
        return i
    }, onPaint: function (n, t, i) {
        if (n.setContext(this), this.onRecalculate(), this.getNeedRepaint()) {
            if (this.setNeedRepaint(!1), this.setSuffix("needle_"), n.createGroup(), n.clearGroup(), this._startPoint.minus(this._endPoint).abs() > .1) {
                if (t != null && this.isJointChild()) {
                    var r = PerfectWidgetsFramework.Vector.toDegrees(this.getEndPoint().minus(this.getStartPoint()).getRotation());
                    t.setAdditionalAngle(r)
                }
                n.drawPolygon(t, i, this.$z())
            } else n.clearGroup();
            n.endGroup()
        }
    }, getHitTest: function (n) {
        var t = this.getRealPosition(n);
        return this.getBoundedBox().contains(t) ? PerfectWidgetsFramework.GeometryUtilities.isIncludePoint(this.$z(), t) : !1
    }, getBoundedBox: function () {
        return PerfectWidgetsFramework.GeometryUtilities.getPolygonBox(this.$z())
    }, getStartWidth: function () {
        return this._startWidth
    }, setStartWidth: function (n) {
        this._startWidth !== n && (this._startWidth = n, this.setNeedRepaint(!0))
    }, getEndWidth: function () {
        return this._endWidth
    }, setEndWidth: function (n) {
        this._endWidth !== n && (this._endWidth = n, this.setNeedRepaint(!0))
    }, getShowMode: function () {
        return this._showMode
    }, setShowMode: function (n) {
        this._showMode !== n && (this._showMode = n)
    }, getNeedlePoints: function () {
        return this._needlePoints
    }, setNeedlePoints: function (n) {
        this._needlePoints !== n && (this._needlePoints = n, this.setNeedRepaint(!0))
    }}, af = {getVertex: function () {
        for (var i = 2 * Math.PI / this._sides, t = new Array(this._sides), n = 0; n < this._sides; n++)t[n] = PerfectWidgetsFramework.Vector.fromPolar(this._radius, i * n - Math.PI / 2 + PerfectWidgetsFramework.Vector.toRadians(this._angle)).add(this._center);
        return t
    }, onPaint: function (n, t, i) {
        n.setContext(this), this.onRecalculate(), this.getNeedRepaint() && (this.setNeedRepaint(!1), this.setSuffix("poly_"), n.createGroup(), n.clearGroup(), n.drawPolygon(t, i, this.getVertex()), n.endGroup())
    }, getBoundedBox: function () {
        return PerfectWidgetsFramework.GeometryUtilities.getPolygonBox(this.getVertex())
    }, getHitTest: function (n) {
        var t = this.getRealPosition(n);
        return PerfectWidgetsFramework.GeometryUtilities.isIncludePoint(this.getVertex(), t)
    }, getSides: function () {
        return this._sides
    }, setSides: function (n) {
        if (n <= 0)throw new Error('PerpetuumSoft.Framework.ExceptionBuilder.ArgumentNegativeOrZero("value");');
        this._sides !== n && (this._sides = n, this.setNeedRepaint(!0))
    }}, vf = {}, yf = {getHitTest: function (n) {
        return this.getBounds().contains(PerfectWidgetsFramework.GeometryUtilities.rotateVector(n, this.getBounds().getCenter(), PerfectWidgetsFramework.Vector.toRadians(-this.getAngle())))
    }, getBoundedBox: function () {
        var n;
        (this._angle != null & this._center != null) == 1 && (n = new PerfectWidgetsFramework.RotateTransformation, n.setCenter(this._center), n.setAngle(this._angle), this.setTransformation(n));
        var t = this.getRealPosition(this.getBounds().getTopLeft()), i = this.getRealPosition(this.getBounds().getTopRight()), r = this.getRealPosition(this.getBounds().getBottomLeft()), u = this.getRealPosition(this.getBounds().getBottomRight()), f = Math.min(Math.min(t.x, i.x), Math.min(r.x, u.x)), e = Math.min(Math.min(t.y, i.y), Math.min(r.y, u.y)), o = Math.max(Math.max(t.x, i.x), Math.max(r.x, u.x)), s = Math.max(Math.max(t.y, i.y), Math.max(r.y, u.y));
        return new PerfectWidgetsFramework.VectorRectangle(f, e, o - f, s - e)
    }, onPaint: function (n, t, i) {
        if (n.setContext(this), this.onRecalculate(), this.getNeedRepaint()) {
            if (this.setNeedRepaint(!1), (this._angle != null & this._center != null) == 1) {
                var r = new PerfectWidgetsFramework.RotateTransformation;
                r.setCenter(this._center), r.setAngle(this._angle), this.setTransformation(r)
            }
            this.setSuffix("rect"), n.createGroup(), n.clearGroup(), !this.getBounds().width || !this.getBounds().height || this._size.x > .001 && this._size.y > .001 && this.drawContent(n, t, i), n.endGroup(), this.setNeedRepaint(!1)
        }
    }, drawContent: function () {
    }, getAngle: function () {
        return this._angle
    }, setAngle: function (n) {
        var t = Math.round(n % 360);
        this._angle !== t && (this._angle = t, this.setNeedRepaint(!0))
    }, onBoundsChanged: function () {
        ht.prototype.onBoundsChanged.call(this)
    }}, y.$K = function (n, t) {
        for (var e, i, f, r = 0; r < t.count(); r++)e = t.get_item(r), i = ss.safeCast(e, tt), i != null && i.getVisible() && !!i.getDock() && n.push(i), f = ss.safeCast(e, u), f == null || !f.getElements().count() || y.$K(n, f.getElements())
    }, y.$L = function (n, t) {
        var o = [], f, s, i, r, e;
        for (y.$K(o, ss.safeCast(n, u).getElements()), f = 0, s = ss.enumerate(o); s.moveNext();)i = s.current, i.getDock() === 3 && (r = i.getSize(), e = i.getFixShift(), f = Math.max(f, r), i.setStartDistance(-r / 2 + t + e));
        for (var h = f / 2, c = f / 2, l = ss.enumerate(o); l.moveNext();) {
            var i = l.current, r = i.getSize(), e = i.getFixShift();
            i.getDock() === 2 && (i.setStartDistance(h + i.getPadding() + t + e), h += i.getPadding() + r), i.getDock() === 1 && (i.setStartDistance(-c - i.getPadding() - r + t + e), c += i.getPadding() + r)
        }
    }, pf = {$D: function (n, t) {
        this.setNeedRepaint(t.repaintType)
    }, $p: function () {
        u.prototype.$p.call(this);
        var n = this.getParent();
        n != null && n.add_needRepaintChanged(ss.bind("$D", this))
    }, getColorizer: function () {
        return this.$E
    }, setColorizer: function (n) {
        this.$E !== n && (this.$E = n)
    }, calculateTransformationInfo: function (n) {
        var t = this.getTrajectory();
        return t != null ? t.portionToTransformation((n - this.getMinimum()) / (this.getMaximum() - this.getMinimum())) : null
    }, getTrajectory: function () {
        return ss.safeCast(this.getParent(), ut)
    }, getMinimum: function () {
        return this.$F
    }, setMinimum: function (n) {
        this.$F !== n && (this.$F = n, this.$M())
    }, getMaximum: function () {
        return this.$G
    }, setMaximum: function (n) {
        this.$G !== n && (this.$G = n, this.$M())
    }, getReverse: function () {
        return this.$H
    }, setReverse: function (n) {
        this.$H !== n && (this.$H = n, this.$M())
    }, percentToValue: function (n) {
        var t = this.$H ? this.$G : this.$F, i = this.$H ? this.$F : this.$G;
        return t + n * (i - t)
    }, valueToPercent: function (n) {
        var t = this.$H ? this.$G : this.$F, i = this.$H ? this.$F : this.$G;
        return(n - t) / (i - t)
    }, $I: function (n) {
        var i = this.$H ? this.$G : this.$F, r = this.$H ? this.$F : this.$G, t = PerfectWidgetsFramework.MathHelper.log(i, 10), u = PerfectWidgetsFramework.MathHelper.log(r, 10), f = PerfectWidgetsFramework.MathHelper.log(n, 10);
        return(f - t) / (u - t)
    }, $J: function (n) {
        var i = this.$H ? this.$G : this.$F, r = this.$H ? this.$F : this.$G, t = PerfectWidgetsFramework.MathHelper.log(i, 10), u = PerfectWidgetsFramework.MathHelper.log(r, 10), f = n * (u - t) + t;
        return Math.pow(10, f)
    }, valueToPoint: function (n, t) {
        var i = this.getTrajectory();
        return i != null ? i.percentToPoint(this.valueToPercent(n), t) : PerfectWidgetsFramework.Vector.empty
    }, pointToValue: function (n) {
        var t = this.getTrajectory();
        return t != null ? this.percentToValue(t.pointToPercent(n)) : Number.NaN
    }, fromRealValue: function (n) {
        return n
    }, toRealValue: function (n) {
        return n
    }, isDiscrete: function () {
        return!1
    }, getDiscreteValuesCount: function () {
        return 0
    }, getDiscreteValue: function () {
        return null
    }, getObject: function (n) {
        return n.toLowerCase() === "maximum" ? this.$G : n.toLowerCase() === "minimum" ? this.$F : null
    }, calculate: function () {
        var n = 0, t = this.getTrajectory();
        t != null && (n = t.getStartDistance()), y.$L(this, n)
    }, $M: function () {
        for (var i = this.getElements(), r, t, n = 0; n < i.count(); n++)r = i.get_item(n), t = ss.safeCast(r, tt), t != null && t.resetMeasure()
    }}, c.$Q = function (n, t) {
        var i = PerfectWidgetsFramework.Vector.toRadians(t), r = n.x * Math.abs(Math.cos(i)) + n.y * Math.abs(Math.sin(i)), u = n.y * Math.abs(Math.cos(i)) + n.x * Math.abs(Math.sin(i));
        return new PerfectWidgetsFramework.Vector(r, u)
    }, c.$U = function (n, t) {
        var u = n.getCenter(), i = new Array(4), r;
        for (i[0] = n.getTopLeft(), i[1] = n.getTopRight(), i[2] = n.getBottomRight(), i[3] = n.getBottomLeft(), r = 0; r < i.length; r++)i[r] = i[r].add(i[r].minus(u).rotate(t));
        return i
    }, wf = {getFont: function () {
        return this.$z
    }, setFont: function (n) {
        this.$z !== n && (this.$z = n, this.setNeedRepaint(!0))
    }, resetFont: function () {
        this.setFont(null)
    }, getTextRotationMode: function () {
        return this.$A
    }, setTextRotationMode: function (n) {
        this.$A !== n && (this.$A = n, this.setNeedRepaint(!0))
    }, getTextAngle: function () {
        return this.$B
    }, setTextAngle: function (n) {
        this.$B !== n && (this.$B = n, this.setNeedRepaint(!0))
    }, getOddLabelsDistance: function () {
        return this.$C
    }, setOddLabelsDistance: function (n) {
        if (this.$C !== n) {
            if (n < 0)throw new Error("ArgumentNegative. OddLabelsDistance");
            this.$C = n, this.setNeedRepaint(!0)
        }
    }, getItemMargins: function () {
        return this.$D
    }, setItemMargins: function (n) {
        this.$D !== n && (this.$D = n, this.setNeedRepaint(!0))
    }, getPosition: function () {
        return this.$E
    }, setPosition: function (n) {
        this.$E !== n && (this.$E = n, this.setNeedRepaint(!0))
    }, getTextAlignment: function () {
        return this.$F
    }, setTextAlignment: function (n) {
        this.$F !== n && (this.$F = n, this.setNeedRepaint(!0))
    }, getSize: function () {
        return this.$O()
    }, $I: function () {
        return this.$G
    }, getShowSuperposableLabels: function () {
        return this.$H
    }, setShowSuperposableLabels: function (n) {
        this.$H !== n && (this.$H = n, this.setNeedRepaint(!0))
    }, paintLabel: function (n, t, i, r, u, f, e, o) {
        if (n.createGroup(), n != null) {
            var s = this.$P(i), h = new PerfectWidgetsFramework.SolidFill(this.getColor(i));
            this.setSuffix(".0" + i), n.drawRectangle(e, o, r, s), this.setSuffix(".1" + i), n.drawText(t, this.getFont(), h, f, s, 1)
        }
        n.endGroup()
    }, $J: function (n, t, i, r, u) {
        var s = i.valueToPoint(r, 0), h = i.valueToPoint(r, 5), e = h.minus(s), w = e.getPerpendicular(), l = e.getRotation(), a = PerfectWidgetsFramework.Vector.toDegrees(e.getRotation()), v = this.$P(r), y = c.$Q(n, v - a), p = new PerfectWidgetsFramework.Vector(0, y.y), o = p.rotate(l), f = PerfectWidgetsFramework.Vector.empty;
        switch (u) {
            case 1:
                f = t;
                break;
            case 0:
                f = t.minus(o.divideByNumber(2));
                break;
            case 2:
                f = t.add(o.divideByNumber(2))
        }
        return f
    }, $K: function (n, t) {
        var i = PerfectWidgetsFramework.VectorRectangle.empty, u, o, f;
        try {
            if (u = this.getScale(), u != null) {
                var r = this.$G[t], c = this.$P(r.get_value()), s = this.$N(u, t), e = 0;
                switch (this.getPosition()) {
                    case 2:
                        e = (n - s) / 2;
                        break;
                    case 1:
                        e = 0;
                        break;
                    case 0:
                        e = (-n + s) / 2
                }
                o = this.getDistance() + e, this.$G.length > 1 && (t % 2 == 1 ? o += this.getOddLabelsDistance() / 2 : o -= this.getOddLabelsDistance() / 2), i = PerfectWidgetsFramework.VectorRectangle.empty, f = u.valueToPoint(r.get_value(), o), f = this.$J(r.get_textSize(), f, u, r.get_value(), this.getTextAlignment()), i.width = r.get_textSize().x, i.height = r.get_textSize().y, i = PerfectWidgetsFramework.VectorRectangle.expand(i, this.getItemMargins()), i.x = f.x - r.get_textSize().x / 2, i.y = f.y - r.get_textSize().y / 2
            }
        } catch (h) {
            throw new Error("Exception on getting item rectangle " + h.toString());
        }
        return i
    }, onPaint: function (n, t, i) {
        var e, r;
        if (n.setContext(this), this.onRecalculate(), this.getNeedRepaint()) {
            this.setNeedRepaint(!1);
            try {
                e = this.getSize(), this.$G.length || this.resetMeasure();
                var a = this.getLabelsCount(), o = PerfectWidgetsFramework.VectorRectangle.empty, s = 0;
                for (this.setSuffix("slbs"), n.createGroup(), n.clearGroup(), r = 0; r < this.$G.length; r++) {
                    this.setSuffix(".l" + r);
                    var u = this.$G[r], f = this.$K(e, r), c = PerfectWidgetsFramework.VectorRectangle.shrink(f, this.getItemMargins()).getCenter(), h = this.$P(u.get_value());
                    !this.getShowSuperposableLabels() && r && this.$T(o, s, PerfectWidgetsFramework.VectorRectangle.shrink(f, this.getItemMargins()), h) || (o = PerfectWidgetsFramework.VectorRectangle.shrink(f, this.getItemMargins()), s = h, this.paintLabel(n, u.get_text(), u.get_value(), f, u.get_textSize(), c, t, i))
                }
                n.endGroup()
            } catch (l) {
                throw new Error("Exception on Scale label paint " + l.toString());
            }
        }
    }, $L: function (n, t, i, r) {
        var f = this.$P(n), e = i.minus(t), u = e.getRotation() - PerfectWidgetsFramework.Vector.toRadians(f);
        return Math.abs(r.x * Math.cos(u)) + Math.abs(r.y * Math.sin(u))
    }, $M: function (n, t, i) {
        var u = this.$P(n), f = t.valueToPoint(n, 0), e = t.valueToPoint(n, 5), o = e.minus(f), r = o.getRotation() - PerfectWidgetsFramework.Vector.toRadians(u);
        return Math.abs(i.y * Math.cos(r)) + Math.abs(i.x * Math.sin(r))
    }, $N: function (n, t) {
        if (n == null || t < 0 || t > this.$G.length)return 0;
        var i = this.$G[t], r = this.getItemMargins().size().add(i.get_textSize()), u = n.valueToPoint(i.get_value(), 0), f = n.valueToPoint(i.get_value(), 5);
        return this.$L(i.get_value(), u, f, r)
    }, $O: function () {
        var n = 0, i, t, r;
        try {
            if (i = this.getScale(), i == null)return n;
            for (this.$G.length || this.resetMeasure(), t = 0; t < this.$G.length; t++)r = this.$N(i, t), n = Math.max(n, r);
            this.$G.length > 1 && (n += this.getOddLabelsDistance())
        } catch (u) {
            throw new Error("Error size calculating " + u.toString());
        }
        return n
    }, $P: function (n) {
        var i = this.getTextAngle(), t = this.getScale();
        return t != null && this.getTextRotationMode() === 1 && (i += PerfectWidgetsFramework.Vector.toDegrees(t.valueToPoint(n, this.getDistance() + 5).minus(t.valueToPoint(n, this.getDistance())).getRotation())), i
    }, $R: function (n, t, i) {
        var r = null;
        if (this.getFont() != null) {
            var f = this.getFont(), u = PerfectWidgetsFramework.TextUtilities.measureText(n, f, i).add(new PerfectWidgetsFramework.Vector(9, 1)), e = PerfectWidgetsFramework.Unit.convert(u.x, PerfectWidgetsFramework.Unit.pixel, PerfectWidgetsFramework.Unit.internalUnit), o = PerfectWidgetsFramework.Unit.convert(u.y, PerfectWidgetsFramework.Unit.pixel, PerfectWidgetsFramework.Unit.internalUnit);
            r = new vt(n, t, new PerfectWidgetsFramework.Vector(e, o))
        } else r = new vt("", 0, PerfectWidgetsFramework.Vector.empty);
        return r
    }, $S: function (n, t, i) {
        var r = i.minus(n.getCenter()).rotate(-t), u = 1.1;
        return r.x < n.width / 2 * u && r.y < n.height / 2 * u && r.x > -n.width / 2 * u && r.y > -n.height / 2 * u
    }, $T: function (n, t, i, r) {
        for (var e = [i.getBottomLeft(), i.getBottomRight(), i.getTopLeft(), i.getTopRight()], o = PerfectWidgetsFramework.Vector.toRadians(t), s = PerfectWidgetsFramework.Vector.toRadians(r), f, u = 0; u < e.length; u++)if (e[u] = e[u].minus(i.getCenter()).rotate(s).add(i.getCenter()), this.$S(n, o, e[u]))return!0;
        for (f = [n.getBottomLeft(), n.getBottomRight(), n.getTopLeft(), n.getTopRight()], u = 0; u < f.length; u++)if (f[u] = f[u].minus(n.getCenter()).rotate(-o).add(n.getCenter()), this.$S(i, s, f[u]))return!0;
        return!1
    }, getTextLabel: function (n) {
        return n
    }, getHitTest: function (n) {
        return e.prototype.getHitTest.call(this, n)
    }, setStartDistance: function (n) {
        e.prototype.getDistance.call(this) !== n && (e.prototype.setStartDistance.call(this, n), this.setDistance(n + this.getSize() / 2), this.setNeedRepaint(!0))
    }, resetMeasure: function () {
        var u, n, r, s;
        if (this.$G.length = 0, u = this.getScale(), u != null) {
            var t = this.getLabelsCount(), f = Math.min(t, c.$V), e = 1 * t / f, o = this.getFont(), i = null;
            for (o != null && (i = PerfectWidgetsFramework.TextUtilities.insertMockDiv(o)), n = 0; n < f; n++)r = this.getValueByIndex(Math.min(t, ss.truncate(e) * n)), s = this.getObjectByIndex(Math.min(t, ss.truncate(e) * n)), this.isPaint(r) && this.$G.push(this.$R(this.getTextLabel(s), r, i));
            i != null && PerfectWidgetsFramework.TextUtilities.deleteMockDiv(i)
        }
    }}, bf = {getDivisions: function () {
        return this._divisions
    }, setDivisions: function (n) {
        n > 0 && this._divisions !== n && (this._divisions = n, this.setNeedRepaint(!0))
    }, getSubDivisions: function () {
        return this._subDivisions
    }, setSubDivisions: function (n) {
        n > 0 && this._subDivisions !== n && (this._subDivisions = n, this.setNeedRepaint(!0))
    }, getSubTicksPosition: function () {
        return this._subTicksPosition
    }, setSubTicksPosition: function (n) {
        this._subTicksPosition !== n && (this._subTicksPosition = n, this.setNeedRepaint(!0))
    }, isDiscreteValues: function () {
        return this._discreteValues
    }, usiDiscretreValue: function (n) {
        this._discreteValues !== n && (this._discreteValues = n)
    }, getStep: function () {
        return this._step
    }, setStep: function (n) {
        if (this._step !== n) {
            if (!n._value && !!n._kind)throw new Error('ExceptionBuilder.ArgumentZero("Step");');
            this._step = n, this.setNeedRepaint(!0)
        }
    }, isRoundValues: function () {
        return this._roundValues
    }, useRoundValue: function (n) {
        this._roundValues !== n && (this._roundValues = n)
    }, getSubTicksInternalRadius: function () {
        switch (this._subTicksPosition) {
            case 0:
                return this._distance;
            case 1:
                return this._distance + this.getWidth() / 2 - this.getSubWidth() / 2;
            case 2:
                return this._distance + this.getWidth() - this.getSubWidth()
        }
        return this._distance
    }, onPaint: function (n, t, i) {
        if (n.setContext(this), this.onRecalculate(), this.getNeedRepaint()) {
            this.setNeedRepaint(!1), this.setSuffix("smb");
            var r = [];
            n.createGroup(), n.clearGroup(), this._discreteValues ? this.$z(n, r, t, i, i != null) : this.$B(n, r, t, i, i != null), this.mergeAndDrawPaths(n, r, t, i), n.endGroup()
        }
    }, $z: function (n, t, i, r, u) {
        var f = this.getScale(), e;
        if (f != null) {
            var s = f.getDiscreteValuesCount(), o = 0, h = 0;
            for (s > 0 && (o = f.fromRealValue(f.getDiscreteValue(0))), e = 0; e < s; e++)this.buildMark(t, o, this.getWidth(), this._distance, i, r, u), e !== s - 1 && (h = f.fromRealValue(f.getDiscreteValue(e + 1)), this.buildSubMark(t, o, h, i, r, u), o = h)
        }
    }, $A: function () {
        var t = 0, n = this.getScale();
        if (this._roundValues)t = e.getRoundLabelsStep(n.getMaximum(), n.getMinimum(), this._divisions); else switch (this._step._kind) {
            case 0:
                t = (n.getMaximum() - n.getMinimum()) / this._divisions;
                break;
            case 1:
                t = Math.abs(this._step._value);
                break;
            case 2:
                t = (n.getMaximum() - n.getMinimum()) * Math.abs(this._step._value) / 100
        }
        return t
    }, $B: function (n, t, i, u, f) {
        var o, l, a, p, b, c, v;
        try {
            if (n.setContext(this), o = this.getScale(), o != null) {
                l = this.$A(), a = new r, a.setKind(0), a.setValue(0);
                var k = this.isRoundValues() ? a : this.getOrigin(), d = e.getRoundLabelsStep(o.getMaximum(), o.getMinimum(), this.getDivisions()), y = new r;
                y.setKind(0), y.setValue(d);
                var h = this.isRoundValues() ? y : this.getStep(), g = e.getStartValue(o, k, l), s = 0;
                switch (h._kind) {
                    case 0:
                        s = this.getDivisions();
                        break;
                    case 1:
                        s = Math.floor((o.getMaximum() - e.getStartValue(o, this.getOrigin(), h._value)) / Math.abs(h._value)) + 1;
                        break;
                    case 2:
                        p = (o.getMaximum() - o.getMinimum()) / 100 * Math.abs(h._value), s = Math.floor((o.getMaximum() - e.getStartValue(o, this.getOrigin(), p)) / ((o.getMaximum() - o.getMinimum()) / 100 * Math.abs(h._value))) + 1
                }
                for (s = Math.min(s, w._maxLabelsCount), b = -1, c = b; c <= s; c++)v = g + c * l, this.buildMark(t, v, this.getWidth(), this.getDistance(), i, u, f), c !== s && this.buildSubMark(t, v, v + l, i, u, f)
            }
        } catch (nt) {
            throw new Error('Framework.Logging.Logger.WriteDebug("Exception on scale mark paint " + ee.ToString());');
        }
    }, needPaint: function (n) {
        var i = this.isPaint(n), t;
        return i && (t = this.getScale(), t != null && (i = n >= t.getMinimum() && n <= t.getMaximum())), i
    }}, kf = {add_$D: function (n) {
        this.$E = ss.bindAdd(this.$E, n)
    }, remove_$D: function (n) {
        this.$E = ss.bindSub(this.$E, n)
    }, add_$F: function (n) {
        this.$G = ss.bindAdd(this.$G, n)
    }, remove_$F: function (n) {
        this.$G = ss.bindSub(this.$G, n)
    }, add_$H: function (n) {
        this.$I = ss.bindAdd(this.$I, n)
    }, remove_$H: function (n) {
        this.$I = ss.bindSub(this.$I, n)
    }, add_$J: function (n) {
        this.$K = ss.bindAdd(this.$K, n)
    }, remove_$J: function (n) {
        this.$K = ss.bindSub(this.$K, n)
    }, getValue: function () {
        return this._value
    }, setValue: function (n, t) {
        if (!this.getStep() || (n = Math.round(n / this.getStep()) * this.getStep(), this.setNeedRepaint(!0)), n === this._value) {
            this.setAnimationValue(n), this.setNeedRepaint(!0);
            return
        }
        if (isNaN(n)) {
            this.setNeedRepaint(!0);
            return
        }
        if (n = this.$W(n), this._value !== n) {
            var i = this._value;
            this._value = n, this.onValueChanged(), !this.$X() || t != null && !t ? this.setAnimationValue(n) : this.getAnimationState() === 4 ? (this.setAnimationValue(i), this.animate(this.getAnimationValue(), n)) : this.getAnimationState() === 8 && (this.getAnimation().disposeAnimation(), this.$O(), this.animate(this.getAnimationValue(), n)), this.setNeedRepaint(!0), this.refreshElement()
        }
    }, $N: function (n, t, i) {
        return n === i || n === t ? n : n < t ? i + (n - t) % (i - t) : n > i ? (n - t) % (i - t) + t : n
    }, getAnimationValue: function () {
        var n = ss.safeCast(this.getScale(), y), t, i;
        return n != null ? (t = n.getMaximum(), i = n.getMinimum(), this.$$() ? this.$N(this.$M, i, t) : this.$W(this.$M)) : this.$M
    }, $O: function () {
        var n;
        if (this.$$() && (n = ss.safeCast(this.getScale(), y), n != null)) {
            var i = n.getMaximum(), t = n.getMinimum(), r = i - t;
            this.setAnimationValue((this.getAnimationValue() - t) % r + t)
        }
    }, setAnimationValue: function (n) {
        this.$M !== n && (this.$M = n)
    }, $Q: function () {
        this.$P = this._value
    }, animate: function (n, t) {
        var i, r, u;
        if (this.getAnimationState() !== 8) {
            if (i = this.getAnimation(), r = this.$T(new PerfectWidgetsFramework.Segment(n, t)), Math.abs(r.get_startValue() - r.get_endValue()) <= 2 * 1e-5) {
                this.$M = t, this.setNeedRepaint(!0), this.refreshElement();
                return
            }
            i.setStartValue(r.get_startValue()), i.setEndValue(r.get_endValue()), u = this.getScale(), i.setValueRange(u.getMaximum() - u.getMinimum()), i.animate()
        }
    }, getAnimationDirection: function () {
        return this.$R
    }, $S: function (n) {
        this.$R = n
    }, $T: function (n) {
        var t = null, r = ss.safeCast(this.getScale(), y);
        if (r != null) {
            var u = r.getMaximum(), f = r.getMinimum(), i = u - f, e = this.getAnimationDirection();
            switch (e) {
                case PerfectWidgetsFramework.RotationDirection.noCycles:
                    t = n;
                    break;
                case PerfectWidgetsFramework.RotationDirection.clockwise:
                    t = n.get_endValue() > n.get_startValue() ? n : this.$V(n, i);
                    break;
                case PerfectWidgetsFramework.RotationDirection.anticlockwise:
                    t = n.get_endValue() < n.get_startValue() ? n : this.$U(n, i);
                    break;
                case PerfectWidgetsFramework.RotationDirection.nearestWay:
                    t = Math.abs(n.get_endValue() - n.get_startValue()) > i / 2 ? n.get_endValue() > n.get_startValue() ? this.$U(n, i) : this.$V(n, i) : n
            }
        }
        return t
    }, $U: function (n, t) {
        return new PerfectWidgetsFramework.Segment(n.get_startValue() + t + 1e-5, n.get_endValue())
    }, $V: function (n, t) {
        return new PerfectWidgetsFramework.Segment(n.get_startValue(), n.get_endValue() + t + 1e-5)
    }, addValueChangedHandler: function (n) {
        this.add_$D(n)
    }, removeValueChangedHandler: function (n) {
        this.remove_$D(n)
    }, addAnimationValueChangedHandler: function (n) {
        this.add_$F(n), this.add_$D(n)
    }, removeAnimationValueChangedHandler: function (n) {
        this.remove_$F(n), this.remove_$D(n)
    }, addAnimationStartingHandler: function (n) {
        this.add_$H(n)
    }, removeAnimationStartingHandler: function (n) {
        this.remove_$H(n)
    }, addAnimationFinishedHandler: function (n) {
        this.add_$J(n)
    }, removeAnimationFinishedHandler: function (n) {
        this.remove_$J(n)
    }, onValueChanged: function () {
        var n = this.getInstrument();
        n != null && n.setEnable(!1), this.$E != null && this.$E(this, ss.EventArgs.Empty), n != null && n.setEnable(!0)
    }, getStep: function () {
        return this._step
    }, setStep: function (n) {
        this._step !== n && (this._step = Math.abs(n), this.setNeedRepaint(!0))
    }, getScale: function () {
        for (var n = this; n != null && !ss.canCast(n, a);)n = n.getParent();
        return ss.safeCast(n, a)
    }, getMinLimit: function () {
        return this._minLimit
    }, setMinLimit: function (n) {
        n = r.parse(n), r.equals(this._minLimit, n) || (this._minLimit = n, this._value = this.$W(this._value), this.setNeedRepaint(!0))
    }, getMaxLimit: function () {
        return this._maxLimit
    }, setMaxLimit: function (n) {
        n = r.parse(n), r.equals(this._maxLimit, n) || (this._maxLimit = n, this._value = this.$W(this._value), this.setNeedRepaint(!0))
    }, $W: function (n) {
        var u = n, t = this.getScale(), i, r;
        return t != null && (i = t.getMaximum(), this._maxLimit._kind === 1 ? i = this._maxLimit._value : this._maxLimit._kind === 2 && (i = t.percentToValue(this._maxLimit._value / 100)), r = t.getMinimum(), this._minLimit._kind === 1 ? r = this._minLimit._value : this._minLimit._kind === 2 && (r = t.percentToValue(this._minLimit._value / 100)), u = Math.max(Math.min(n, i), r)), u
    }, getHot: function () {
        return this._hot
    }, getPressed: function () {
        return this._pressed
    }, getDragged: function () {
        return this._dragged
    }, setDragged: function (n) {
        n !== this._dragged && (this._dragged = n, this.setNeedRepaint(!0))
    }, setPressed: function (n) {
        n !== this._pressed && (this._pressed = n, this.refreshElement())
    }, setHot: function (n) {
        n !== this._hot && (this._hot = n, this.refreshElement())
    }, roundValue: function (n) {
        if (!!this._step) {
            var t = this.$W(Number.MIN_VALUE);
            return Math.round((n - t) / this._step) * this._step + t
        }
        return n
    }, getObject: function (n) {
        return n.toLowerCase() === "hot" ? this._hot : n.toLowerCase() === "pressed" ? this._pressed : n.toLowerCase() === "center" ? this.getPosition(0) : n.toLowerCase() === "value" ? this._value : null
    }, getRadius: function (n) {
        if (this.getScale() != null) {
            var t = this.getPosition(0), i = this.getPosition(1), r = n.getProjection(t, i), u = t.minus(r).getLength(), f = i.minus(r).getLength();
            return u * PerfectWidgetsFramework.MathHelper.sign(u - f)
        }
        return 0
    }, bindingEnabled: function (n) {
        for (var i = this.getElements(), t = 0; t < i.count(); t++)i.get_item(t).bindingEnabled(n)
    }, $X: function () {
        return!!(this.getAnimationState() & 12)
    }, getAnimation: function () {
        return this._animation
    }, setAnimation: function (n) {
        n != null && n.setContext(this), this._animation = n
    }, getAnimationState: function () {
        return this.getReady() ? this._animationState : 1
    }, setAnimationState: function (n) {
        this._animationState = n
    }, $Y: function (n) {
        n ? this.setAnimationState(4) : this.setAnimationState(1)
    }, configureAnimation: function (n) {
        for (var e = ss.typeOf(n), i = ss.safeCast(ss.typeOf(n).getOwnPropertyNames(n), Array), r, u, f, t = 0; t < i.length; t++)switch (i[t]) {
            case"enabled":
                r = n[i[t]], this.$Y(r);
                break;
            case"direction":
                u = n[i[t]].toString(), this.$R = this.$_(u);
                break;
            default:
                f = n[i[t]], this.getAnimation()[this.$Z(i[t])](f)
        }
    }, $Z: function (n) {
        switch (n) {
            case"duration":
                return"setDuration";
            case"ease":
                return"setEasingFunction"
        }
        throw new Error("Animation configuration exception: Invalid property name");
    }, $$: function () {
        return this.$R !== PerfectWidgetsFramework.RotationDirection.noCycles
    }, $_: function (n) {
        switch (n) {
            case"normal":
                return PerfectWidgetsFramework.RotationDirection.noCycles;
            case"CW":
            case"clockwise":
                return PerfectWidgetsFramework.RotationDirection.clockwise;
            case"ACW":
            case"CCW":
            case"anticlockwise":
            case"counterclockwise":
                return PerfectWidgetsFramework.RotationDirection.anticlockwise;
            case"nearest":
                return PerfectWidgetsFramework.RotationDirection.nearestWay;
            default:
                throw new Error("Unknown rotation direction");
        }
    }, onAnimationStarting: function () {
        if (this.$I != null) {
            var n = new ss.CancelEventArgs;
            return this.$I(this, n), !n.cancel
        }
        return!0
    }, onAnimationFinished: function () {
        this.$K != null && this.$K(this, ss.EventArgs.Empty)
    }, onAnimationValueChanged: function () {
        var n = this.getInstrument(), t;
        n != null && n.setEnable(!1), this.$G != null && (t = this.getAnimationState(), t === 4 || t === 1 ? this.$G(this, ss.EventArgs.Empty) : this.$G(this, ss.EventArgs.Empty)), n != null && n.setEnable(!0)
    }}, df = {getValue: function () {
        return this.$z
    }, setValue: function (n) {
        ss.typeName(ss.typeOf(n)) === "SmartValue" ? r.equals(this.$z, n) || (this.$z = n, this.setNeedRepaint(!0)) : this.$z.getValue() !== n && (this.$z = new r, this.$z.setValue(n), this.$z.setKind(1), this.setNeedRepaint(!0))
    }, getAnimationValue: function () {
        return this.getValue()
    }, setAnimationValue: function (n) {
        this.setValue(n)
    }, getSmartValue: function (n, t) {
        return o.$2(n, t, this)
    }, getMinValue: function () {
        return o.$0(this)
    }, getMaxValue: function () {
        return o.$1(this)
    }}, ne = {}, te = {}, ct.createEmptyInstrument = function () {
        var n = new ct;
        return n.setName("Instrument"), n
    }, ie = {getPainter: function () {
        return this.$J
    }, endInitializing: function () {
        this.$I = !0;
        var n = ss.safeCast(this, u);
        this.$L(n), this.getStubBevel() != null && (this.$M.setBevelShadow(new l(this.getShadowDX(), this.getShadowDY(), this.getShadowFill())), this.$K = new fe, this.$K.setBevel(this.getStubBevel()), this.$K.setCenter(this.getSize().divideByNumber(2)), this.$K.setSize(this.getSize()), this.$K.setParent(this), this.$K.setName("Glorious_Bevel"), n.getElements().insert(0, this.$K), this.$M.context = this.$K)
    }, $L: function (n) {
        for (var i = n.getElements(), t = 0; t < i.count(); t++)i.get_item(t).$o(!0), ss.canCast(i.get_item(t), u) && this.$L(ss.safeCast(i.get_item(t), u))
    }, initializingIsFinished: function () {
        return this.$I
    }, getUniqueClassName: function () {
        return this.$D
    }, setUniqueClassName: function (n) {
        this.$D = n
    }, getBounds: function () {
        return new PerfectWidgetsFramework.VectorRectangle(PerfectWidgetsFramework.VectorRectangle.empty.x, PerfectWidgetsFramework.VectorRectangle.empty.y, this.$G.getWidth(), this.$G.getHeight())
    }, getFullName: function () {
        return this.$D + "_" + u.prototype.getFullName.call(this)
    }, getEnable: function () {
        return this.$E
    }, setEnable: function (n) {
        this.$E !== n && (this.$E = n)
    }, getIsFocused: function () {
        return this.$F
    }, setIsFocused: function (n) {
        this.$F !== n && (this.$F = n, this.refreshElement()), this.$F = n
    }, getSize: function () {
        return this.$G
    }, setSize: function (n) {
        PerfectWidgetsFramework.Vector.equals(this.$G, n) || (this.$G = n, this.refreshElement())
    }, getBevel: function () {
        return this.$H
    }, setBevel: function (n) {
        this.$H = n, this.$H != null && this.setNeedRepaint(!0)
    }, getStubBevel: function () {
        return this.$M
    }, setStubBevel: function (n) {
        this.$M = n, this.$M != null && this.setNeedRepaint(!0)
    }, getShadowFill: function () {
        return this.$N
    }, setShadowFill: function (n) {
        this.$N = n
    }, getShadowDX: function () {
        return this.$O
    }, setShadowDX: function (n) {
        this.$O = n
    }, getShadowDY: function () {
        return this.$P
    }, setShadowDY: function (n) {
        this.$P = n
    }, getElementAt: function (n) {
        return u.prototype.getElementAt.call(this, n)
    }, onPaint: function (n, t, i) {
        this.onRecalculate(), n.createGroup(), u.prototype.onPaint.call(this, n, t, i), n.endGroup()
    }, getStyles: function () {
        return this.$R
    }, setStyles: function (n) {
        var t, i;
        for (this.$R = n, this.$Q = new PerfectWidgetsFramework.StyleCollection, this.$Q.clear(), t = ss.enumerate(this.$R); t.moveNext();)i = t.current, this.$Q.add(i)
    }, getStyleCollection: function () {
        return this.$Q
    }, setStyleCollection: function () {
    }, getStyleByName: function (n) {
        if (!n)return null;
        return this.getStyleCollection().getStyleByName(n)
    }, getBoundedBox: function () {
        return this.getStubBevel() == null ? u.prototype.getBoundedBox.call(this) : this.$K.getBoundedBox()
    }}, re = {apply: function (n) {
        var t = PerfectWidgetsFramework.Unit.convert(n.x, PerfectWidgetsFramework.Unit.internalUnit, PerfectWidgetsFramework.Unit.pixel), i = PerfectWidgetsFramework.Unit.convert(n.y, PerfectWidgetsFramework.Unit.internalUnit, PerfectWidgetsFramework.Unit.pixel);
        return new PerfectWidgetsFramework.Vector(t, i)
    }, reverse: function (n) {
        var t = PerfectWidgetsFramework.Unit.convert(n.x, PerfectWidgetsFramework.Unit.pixel, PerfectWidgetsFramework.Unit.internalUnit), i = PerfectWidgetsFramework.Unit.convert(n.y, PerfectWidgetsFramework.Unit.pixel, PerfectWidgetsFramework.Unit.internalUnit);
        return new PerfectWidgetsFramework.Vector(t, i)
    }, getTransformationMatrix: function () {
        var n = PerfectWidgetsFramework.Unit.pixel.k / PerfectWidgetsFramework.Unit.internalUnit.k;
        return PerfectWidgetsFramework.Matrix.buildScaleMatrix(n, n)
    }},ue = {getStartAngle: function () {
        return this.$y
    }, setStartAngle: function (n) {
        this.$y !== n && (this.$y = n, this.setNeedRepaint(!0))
    }, getSweepAngle: function () {
        return this.$z
    }, setSweepAngle: function (n) {
        var t = n > 0 ? 1 : -1;
        Math.abs(n) > 180 && (n % 360 || (n = t * (360 - .001))), n = n % 360, n !== this.$z && (this.$z = n, this.setNeedRepaint(!0))
    }, getBoundedBox: function () {
        var u = this.getBounds(), o = PerfectWidgetsFramework.Vector.toRadians(this.getStartAngle()), s = PerfectWidgetsFramework.Vector.toRadians(this.getStartAngle() + this.getSweepAngle()), h = PerfectWidgetsFramework.Vector.fromPolar(PerfectWidgetsFramework.GeometryUtilities.getEllipseRadius(u, o), o).add(this.getCenter()), c = PerfectWidgetsFramework.Vector.fromPolar(PerfectWidgetsFramework.GeometryUtilities.getEllipseRadius(u, s), s).add(this.getCenter()), t = [], l, i, r, n;
        t.push(h), t.push(c);
        var a = this.getStartAngle(), f = Math.floor((this.getStartAngle() + this.getSweepAngle()) / 90) - Math.floor(this.getStartAngle() / 90), e = f > 0 ? 1 : -1;
        for (f = Math.abs(f), l = [], n = 1; n <= f; n++)switch (e > 0 ? (Math.floor(this.getStartAngle() / 90 + e * n) * 90 + 360) % 360 / 90 : (Math.ceil(this.getStartAngle() / 90 + e * n) + 360) * 90 % 360 / 90) {
            case 0:
                t.push(u.getRightCenter());
                break;
            case 1:
                t.push(u.getBottomCenter());
                break;
            case 2:
                t.push(u.getLeftCenter());
                break;
            case 3:
                t.push(u.getTopCenter());
                break;
            case 4:
                t.push(u.getRightCenter())
        }
        for (i = h, r = c, n = 0; n < t.length; n++)t[n].x < i.x && (i = new PerfectWidgetsFramework.Vector(t[n].x, i.y)), t[n].y < i.y && (i = new PerfectWidgetsFramework.Vector(i.x, t[n].y)), t[n].x > r.x && (r = new PerfectWidgetsFramework.Vector(t[n].x, r.y)), t[n].y > r.y && (r = new PerfectWidgetsFramework.Vector(r.x, t[n].y));
        return new PerfectWidgetsFramework.VectorRectangle(i.x, i.y, r.x - i.x, r.y - i.y)
    }, drawContent: function (n, t, i) {
        n.drawGraphicsPath(t, i, this.$A())
    }, $A: function () {
        var r = this.getBounds().getLocation(), u = this.getSize(), n = new PerfectWidgetsFramework.VectorRectangle(r.x, r.y, u.x, u.y).getPositiveRectangle(), t = new PerfectWidgetsFramework.GraphicsPath, f, e, i;
        return t.setBounds(this.getBounds()), f = new PerfectWidgetsFramework.Vector(n.width / 2, n.height / 2), e = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(n.getCenter(), f, this.getStartAngle()), t.startPath(e), i = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), i.add(PerfectWidgetsFramework.EllipticArcParameters.fillParameters(n, this.getStartAngle(), this.getSweepAngle())), t.addPathElement(i), t
    }},ee = {getBevel: function () {
        return this.$y
    }, setBevel: function (n) {
        this.$y = n
    }, drawContent: function (n) {
        this.setSuffix("_be"), n.createGroup(), n.clearGroup(), this.$y.paint(new PerfectWidgetsFramework.VectorRectangle(0, 0, this.getSize().getWidth(), this.getSize().getHeight()), n), n.endGroup()
    }, getBoundedBox: function () {
        var n = this.getInstrument();
        return this.setCenter(n.getSize().divideByNumber(2)), this.setSize(n.getSize()), f.prototype.getBoundedBox.call(this)
    }},oe = {getText: function () {
        return this.$z + ""
    }, setText: function (n) {
        this.$z !== n && (this.$z = n, this.$J(), this.setNeedRepaint(!0))
    }, getSegmentSize: function () {
        return this.$A
    }, setSegmentSize: function (n) {
        PerfectWidgetsFramework.Vector.equals(this.$A, n) || (this.$A = n, this.setNeedRepaint(!0))
    }, getSegmentSpaces: function () {
        return this.$B
    }, setSegmentSpaces: function (n) {
        PerfectWidgetsFramework.Vector.equals(this.$B, n) || (this.$B = n, this.setNeedRepaint(!0))
    }, getFont: function () {
        return this.$C
    }, setFont: function (n) {
        n !== this.$C && (this.$C = n, this.setNeedRepaint(!0))
    }, resetFont: function () {
        this.setFont(null)
    }, getActiveColor: function () {
        return this.$D
    }, setActiveColor: function (n) {
        PerfectWidgetsFramework.Color.equals(this.$D, n) || (this.$D = n, this.setNeedRepaint(!0))
    }, getInactiveColor: function () {
        return this.$E
    }, setInactiveColor: function (n) {
        PerfectWidgetsFramework.Color.equals(this.$E, n) || (this.$E = n, this.setNeedRepaint(!0))
    }, getDigitalBackgroundVisible: function () {
        return this.$F
    }, setDigitalBackgroundVisible: function (n) {
        this.$F !== n && (this.$F = n, this.setNeedRepaint(!0))
    }, getTextVerticalOffset: function () {
        return this.$G
    }, setTextVerticalOffset: function (n) {
        this.$G !== n && (this.$G = n, this.setNeedRepaint(!0))
    }, getTextHorizontalOffset: function () {
        return this.$H
    }, setTextHorizontalOffset: function (n) {
        this.$H !== n && (this.$H = n, this.setNeedRepaint(!0))
    }, $I: function (n, t) {
        var h = this.getFont(), c = this.getText(), u, f, e, o, i, r, y;
        if (this.$C != null) {
            var l = 2 * this.getSegmentSpaces().x + this.getSegmentSize().x, a = 2 * this.getSegmentSpaces().y + this.getSegmentSize().y, p = ss.truncate(this.getBounds().width / l), w = ss.truncate(this.getBounds().height / a), v = PerfectWidgetsFramework.TextUtilities.insertMockDiv(h), b = PerfectWidgetsFramework.TextUtilities.measureText(c, h, v);
            for (PerfectWidgetsFramework.TextUtilities.deleteMockDiv(v), u = 2 * ss.truncate(b.y), f = u * c.length, this.$y == null && (this.$y = PerfectWidgetsFramework.TextUtilities.rasterizeText(this.getFont(), this.getText(), new PerfectWidgetsFramework.Vector(this.getTextHorizontalOffset(), this.getTextVerticalOffset()), new PerfectWidgetsFramework.Vector(f, u))), e = new PerfectWidgetsFramework.GraphicsPath, o = new PerfectWidgetsFramework.GraphicsPath, i = 0; i < p; i++)for (r = 0; r < w; r++) {
                var k = t.x + l * i + this.getSegmentSpaces().x, d = t.y + r * a + this.getSegmentSpaces().y, g = this.getSegmentSize().x, nt = this.getSegmentSize().y, s = new PerfectWidgetsFramework.VectorRectangle(k, d, g, nt);
                i >= this.getTextHorizontalOffset() && i < f + this.getTextHorizontalOffset() && r >= this.getTextVerticalOffset() && r < u + this.getTextVerticalOffset() ? (y = this.$y[((r - this.getTextVerticalOffset()) * f + i - this.getTextHorizontalOffset()) * 4 + 0], y ? this.addRectangle(o, PerfectWidgetsFramework.Unit.rectToPixel(s)) : this.getDigitalBackgroundVisible() && this.addRectangle(e, PerfectWidgetsFramework.Unit.rectToPixel(s))) : this.getDigitalBackgroundVisible() && this.addRectangle(e, PerfectWidgetsFramework.Unit.rectToPixel(s))
            }
            this.setSuffix("backroundGrid"), n.drawGraphicsPath(new PerfectWidgetsFramework.SolidFill(this.$E), PerfectWidgetsFramework.Stroke.emptyStroke, e), this.setSuffix("textGrid"), n.drawGraphicsPath(new PerfectWidgetsFramework.SolidFill(this.$D), PerfectWidgetsFramework.Stroke.emptyStroke, o)
        }
    }, $J: function () {
        this.$y = null
    }, drawContent: function (n, t, i) {
        var r = this.getBounds(), f = new PerfectWidgetsFramework.VectorRectangle(r.x, r.y, r.width, r.height), u = new PerfectWidgetsFramework.Vector(r.x, r.y), e = 2 * this.getSegmentSpaces().x + this.getSegmentSize().x, o = 2 * this.getSegmentSpaces().y + this.getSegmentSize().y, a = ss.truncate(this.getBounds().width / e), v = ss.truncate(this.getBounds().height / o), s = u.x + this.getSegmentSpaces().x, h = u.y + this.getSegmentSpaces().y, c = this.getSegmentSize().x, l = this.getSegmentSize().y, y = new PerfectWidgetsFramework.VectorRectangle(s, h, c, l);
        n.drawRectangle(t, i, f, 0), this.$I(n, u)
    }, addRectangle: function (n, t) {
        var r = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.moveTo), i;
        r.add(t.getTopLeft()), n.addPathElement(r), i = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), i.add(t.getTopRight()), i.add(t.getBottomRight()), i.add(t.getBottomLeft()), i.add(t.getTopLeft()), n.addPathElement(i)
    }},se = {getInnerColor: function () {
        return this.$y
    }, setInnerColor: function (n) {
        this.$y = n
    }, getOuterColor: function () {
        return this.$z
    }, setOuterColor: function (n) {
        this.$z = n
    }, getDarkColor: function () {
        return this.$A
    }, setDarkColor: function (n) {
        this.$A = n
    }, getLightColor: function () {
        return this.$B
    }, setLightColor: function (n) {
        this.$B = n
    }, getBevelStyle: function () {
        return this.$C
    }, setBevelStyle: function (n) {
        this.$C = n
    }, getFixedLineWidth: function () {
        return this.$D * (2 + (this.getInnerColor().a() ? 1 : 0) + (this.getOuterColor().a() ? 1 : 0))
    }, getLineWidth: function () {
        return this.$D
    }, setLineWidth: function (n) {
        this.$D = n
    }, get_$E: function () {
        return this.getFixedLineWidth()
    }, get_$F: function () {
        return this.getFixedLineWidth()
    }, get_$G: function () {
        return this.getFixedLineWidth()
    }, get_$H: function () {
        return this.getFixedLineWidth()
    }, drawContent: function (n, t, i) {
        this.setSuffix("frameModel"), n.setContext(this);
        var r = !1;
        this.getInstrument() != null && (r = this.getInstrument().getIsFocused()), this.getFill() != null && (this.setSuffix("_Filled"), n.drawRectangle(t, i, this.getBounds(), 0)), this.$I(n)
    }, $I: function (n) {
        var f, h, c;
        if (!!this.getBevelStyle()) {
            f = this.getBounds(), f.width -= this.get_$G(), f.height -= this.get_$H();
            var e = new PerfectWidgetsFramework.Vector(PerfectWidgetsFramework.Unit.pixel.k * this.getLineWidth(), PerfectWidgetsFramework.Unit.pixel.k * this.getLineWidth()), t = f.getTopLeft(), i = f.getBottomRight(), s = this.$J(PerfectWidgetsFramework.LineStyle.solid, this.getLightColor(), PerfectWidgetsFramework.Unit.pixel.k * this.getLineWidth()), o = this.$J(PerfectWidgetsFramework.LineStyle.solid, this.getDarkColor(), PerfectWidgetsFramework.Unit.pixel.k * this.getLineWidth()), r = this.$J(PerfectWidgetsFramework.LineStyle.solid, this.getInnerColor(), PerfectWidgetsFramework.Unit.pixel.k * this.getLineWidth()), u = this.$J(PerfectWidgetsFramework.LineStyle.solid, this.getOuterColor(), PerfectWidgetsFramework.Unit.pixel.k * this.getLineWidth());
            !this.getOuterColor().a() || (this.setSuffix("_OuterBorder"), t = t.add(e), i = i.minus(e));
            switch (this.getBevelStyle()) {
                case 1:
                    r = o, u = o;
                    break;
                case 5:
                case 7:
                case 9:
                    r = o, u = s;
                    break;
                case 4:
                case 6:
                case 8:
                    r = s, u = o
            }
            this.setSuffix("_pUp11"), n.drawLine(r, [new PerfectWidgetsFramework.Vector(t.x, t.y), new PerfectWidgetsFramework.Vector(t.x, i.y)]), this.setSuffix("_pUp12"), n.drawLine(r, [new PerfectWidgetsFramework.Vector(t.x, t.y), new PerfectWidgetsFramework.Vector(i.x, t.y)]), this.setSuffix("_pDown11"), n.drawLine(u, [new PerfectWidgetsFramework.Vector(t.x, i.y), new PerfectWidgetsFramework.Vector(i.x, i.y)]), this.setSuffix("_pDown12"), n.drawLine(u, [new PerfectWidgetsFramework.Vector(i.x, t.y), new PerfectWidgetsFramework.Vector(i.x, i.y)]), (this.getBevelStyle() === 3 || this.getBevelStyle() === 6 || this.getBevelStyle() === 7 || this.getBevelStyle() === 9 || this.getBevelStyle() === 8) && ((this.getBevelStyle() === 9 || this.getBevelStyle() === 8) && (h = r, r = u, u = h), t = t.add(e), i = i.minus(e), this.setSuffix("_pUp21"), n.drawLine(r, [new PerfectWidgetsFramework.Vector(t.x, t.y), new PerfectWidgetsFramework.Vector(t.x, i.y)]), this.setSuffix("_pUp22"), n.drawLine(r, [new PerfectWidgetsFramework.Vector(t.x, t.y), new PerfectWidgetsFramework.Vector(i.x, t.y)]), this.setSuffix("_pDown21"), n.drawLine(u, [new PerfectWidgetsFramework.Vector(t.x, i.y), new PerfectWidgetsFramework.Vector(i.x, i.y)]), this.setSuffix("_pDown22"), n.drawLine(u, [new PerfectWidgetsFramework.Vector(i.x, t.y), new PerfectWidgetsFramework.Vector(i.x, i.y)])), !this.getInnerColor().a() || (this.setSuffix("_InnerBorder"), c = new PerfectWidgetsFramework.VectorRectangle(t.x + PerfectWidgetsFramework.Unit.pixel.k * this.getLineWidth(), t.y + PerfectWidgetsFramework.Unit.pixel.k * this.getLineWidth(), i.x - t.x - PerfectWidgetsFramework.Unit.pixel.k * 2 * this.getLineWidth(), i.y - t.y - PerfectWidgetsFramework.Unit.pixel.k * 2 * this.getLineWidth()))
        }
    }, $J: function (n, t, i) {
        var r = new PerfectWidgetsFramework.Stroke;
        return r.setStyle(n), r.setColor(t), r.setWidth(i), r
    }},he = {$y: function () {
        var t = new PerfectWidgetsFramework.MultiGradientFill, n;
        return t.setAngle(90), n = new PerfectWidgetsFramework.GradientColorCollection, n.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(0, 32, 32, 32), 0)), n.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.white, .5)), n.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(0, 32, 32, 32), 1)), t
    }, $z: function () {
        return new PerfectWidgetsFramework.SolidFill(PerfectWidgetsFramework.Color.black)
    }, $A: function () {
        var t = new PerfectWidgetsFramework.MultiGradientFill, n;
        return t.setAngle(90), n = new PerfectWidgetsFramework.GradientColorCollection, n.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.red, 0)), n.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.fromArgb(0, 255, 255, 192), .5)), n.add(new PerfectWidgetsFramework.GradientColor(PerfectWidgetsFramework.Color.red, 1)), t
    }, $B: function () {
        return new PerfectWidgetsFramework.SolidFill(PerfectWidgetsFramework.Color.blue)
    }, getFirstDigitForeFill: function () {
        return this.$C
    }, setFirstDigitForeFill: function (n) {
        this.$C !== n && (this.$C = n, this.setNeedRepaint(!0))
    }, getFirstDigitBackFill: function () {
        return this.$D
    }, setFirstDigitBackFill: function (n) {
        this.$D !== n && (this.$D = n, this.setNeedRepaint(!0))
    }, getBackFill: function () {
        return this.$E
    }, setBackFill: function (n) {
        this.$E !== n && (this.$E = n, this.setNeedRepaint(!0))
    }, getForeFill: function () {
        return this.$F
    }, setForeFill: function (n) {
        this.$F !== n && (this.$F = n, this.setNeedRepaint(!0))
    }, getFont: function () {
        return this.$G
    }, setFont: function (n) {
        this.$G !== n && (this.$G = n, this.setNeedRepaint(!0))
    }, resetFont: function () {
        this.$G = null
    }, getValue: function () {
        return this.$H
    }, setValue: function (n) {
        this.$H !== n && (this.$H = n, this.setNeedRepaint(!0))
    }, $I: function (n, t, i, r, u, f, e) {
        if (this.$G != null) {
            this.setSuffix(e), n.startClip(t), this.setSuffix(".rectangle." + e), n.drawRectangle(i, PerfectWidgetsFramework.Stroke.emptyStroke, t, 0);
            var c = u === "9" ? 0 : parseInt(u) + 1, o, h = PerfectWidgetsFramework.TextUtilities.insertMockDiv(this.getFont()), s = PerfectWidgetsFramework.Unit.pixelToInternal(PerfectWidgetsFramework.TextUtilities.measureText("8", this.getFont(), h).y);
            PerfectWidgetsFramework.TextUtilities.deleteMockDiv(h), o = new PerfectWidgetsFramework.VectorRectangle(t.x, t.y, t.width, t.height), o.y += s - s * f, t.y -= ss.truncate(s * f), this.setSuffix(".digit." + e), n.drawAlignedText(u, this.getFont(), r, t, 0, PerfectWidgetsFramework.ContentAlignment.middleCenter), f ? (this.setSuffix(".delta." + e), n.drawAlignedText(c.toString(), this.getFont(), r, o, 0, PerfectWidgetsFramework.ContentAlignment.middleCenter)) : (this.setSuffix(".delta." + e), n.drawAlignedText("", this.getFont(), r, o, 0, PerfectWidgetsFramework.ContentAlignment.middleCenter)), n.endClip()
        }
    }, $J: function (n) {
        var r = this.getBounds(), u = PerfectWidgetsFramework.Unit.vectorToInternal(new PerfectWidgetsFramework.Vector(28, 60)), e, t, h, f, l, a;
        this.$G != null && (e = PerfectWidgetsFramework.TextUtilities.insertMockDiv(this.getFont()), u = PerfectWidgetsFramework.Unit.vectorToInternal(PerfectWidgetsFramework.TextUtilities.measureText("8", this.getFont(), e)), PerfectWidgetsFramework.TextUtilities.deleteMockDiv(e));
        var i = ss.truncate(r.width / (u.x + 2)), o = new Array(i), v = this.$K(i);
        for (t = 0; t < i; t++)o[t] = v.charAt(t);
        for (t = 0; t < i; t++) {
            var c = i - t - 1, y = o[c], p = new PerfectWidgetsFramework.VectorRectangle(r.x + r.width - (t + 1) * (u.x + 2), r.y, u.x, r.height), s = 0;
            if (t) {
                for (h = !0, f = c + 1; f <= i - 1; f++)if (o[f].toString() !== "9") {
                    h = !1;
                    break
                }
                h && (s = this.$H - Math.floor(this.$H))
            } else s = this.$H - Math.floor(this.$H);
            l = t ? this.getBackFill() : this.getFirstDigitBackFill(), a = t ? this.getForeFill() : this.getFirstDigitForeFill(), this.$I(n, p, l, a, y.toString(), s, t.toString())
        }
    }, $K: function (n) {
        for (var r = n - Math.floor(this.getValue()).toString().length, u = Math.floor(this.getValue()).toString(), t = new ss.StringBuilder, i = 0; i < r; i++)t.append("0");
        return t.append(u), t.toString()
    }, drawContent: function (n, t, i) {
        f.prototype.drawContent.call(this, n, t, i);
        var r = this.getBounds();
        n.drawRectangle(t, i, r, 0), this.$J(n)
    }},ce = {getText: function () {
        return this.$y + ""
    }, setText: function (n) {
        this.$y !== n + "" && (this.$y = n + "", this.setNeedRepaint(!0), this.refreshElement())
    }, getDigitPainter: function () {
        return this.$z == null && (this.$z = new gu(this)), this.$z
    }, setDigitPainter: function (n) {
        this.$z !== n && (this.$z = n, this.setNeedRepaint(!0))
    }, getDigitWidth: function () {
        return this.$A
    }, setDigitWidth: function (n) {
        this.$A !== n && (this.$A = n, this.setNeedRepaint(!0))
    }, getDigitHeight: function () {
        return this.$B
    }, setDigitHeight: function (n) {
        this.$B !== n && (this.$B = n, this.setNeedRepaint(!0))
    }, getDigitSpace: function () {
        return this.$C
    }, setDigitSpace: function (n) {
        this.$C !== n && (this.$C = n, this.setNeedRepaint(!0))
    }, getSegmentThickness: function () {
        return this.$D
    }, setSegmentThickness: function (n) {
        this.$D !== n && (this.$D = n, this.setNeedRepaint(!0))
    }, getSegmentSpace: function () {
        return this.$E
    }, setSegmentSpace: function (n) {
        this.$E !== n && (this.$E = n, this.setNeedRepaint(!0))
    }, getActiveColor: function () {
        return this.$F
    }, setActiveColor: function (n) {
        PerfectWidgetsFramework.Color.equals(this.$F, n) || (this.$F = n, this.setNeedRepaint(!0))
    }, getInactiveColor: function () {
        return this.$G
    }, setInactiveColor: function (n) {
        PerfectWidgetsFramework.Color.equals(this.$G, n) || (this.$G = n, this.setNeedRepaint(!0))
    }, getOverhang: function () {
        return this.$H
    }, setOverhang: function (n) {
        this.$H !== n && (this.$H = n, this.setNeedRepaint(!0))
    }, getSkew: function () {
        return this.$I
    }, setSkew: function (n) {
        this.$I !== n && (this.$I = n, this.setNeedRepaint(!0))
    }, getStyleID: function () {
        return this.$J
    }, setStyleID: function (n) {
        this.$J = n
    }, $M: function (n, t, i) {
        var h, u, e;
        if (i != null && i) {
            this.setSuffix("digits_elems"), h = this.getDigitPainter(), h.prepareSegmentsIfNeeded();
            var c = new PerfectWidgetsFramework.SolidFill(this.getActiveColor()), l = new PerfectWidgetsFramework.SolidFill(this.getInactiveColor()), r = t, f = new PerfectWidgetsFramework.GraphicsPath, o = new PerfectWidgetsFramework.GraphicsPath;
            for (f.startPath(this.getCenter()), o.startPath(this.getCenter()), u = 0; u < i.length; u++)e = i.substr(u, 1), ss.keyExists(s.$K, e) ? (this.setSuffix("segments_" + u.toString()), h.formSegments(f, o, s.$K[e], r), r = new PerfectWidgetsFramework.Vector(r.x + this.getDigitSpace() + this.getDigitWidth(), r.y)) : e === ":" ? (this.setSuffix("colon_" + u.toString()), this.getDigitPainter().formColon(f, r), r = new PerfectWidgetsFramework.Vector(r.x + this.getDigitSpace() + this.getSegmentThickness(), r.y)) : (e === "." || e === ",") && (this.setSuffix("dot_" + u.toString()), this.setSuffix("dot_" + u.toString() + "_0"), this.getDigitPainter().formDot(f, r), r = new PerfectWidgetsFramework.Vector(r.x + this.getDigitSpace() + this.getSegmentThickness(), r.y));
            f.terminate(), o.terminate(), this.setSuffix("_act"), n.drawGraphicsPath(c, PerfectWidgetsFramework.Stroke.emptyStroke, f), this.setSuffix("_inact"), n.drawGraphicsPath(l, PerfectWidgetsFramework.Stroke.emptyStroke, o)
        }
    }, drawContent: function (n, t, i) {
        n.setContext(this), n.clearGroup(), n.startClip(this.getBounds()), this.setSuffix("digits_back"), n.drawRectangle(t, i, this.getBounds(), 0);
        var r = this.getBounds(), u = new PerfectWidgetsFramework.Vector(r.getLeft() + 5, r.getTop() + r.height / 2 - this.getDigitHeight() / 2);
        n.drawRectangle(t, i, r, 0), this.setSuffix("digits_back"), this.$M(n, u, this.getText()), n.endClip()
    }},le = {add_$F: function (n) {
        this.$G = ss.bindAdd(this.$G, n)
    }, remove_$F: function (n) {
        this.$G = ss.bindSub(this.$G, n)
    }, onMouseUp: function (n) {
        this.setPressed(!1), this.refreshElement(), k.prototype.onMouseUp.call(this, n)
    }, onMouseDown: function (n) {
        this.setPressed(!0), this.refreshElement(), k.prototype.onMouseDown.call(this, n), this.getOn() ? this.setOn(!1) : this.setOn(!0), this.$G != null && this.$G(this, ss.EventArgs.Empty)
    }, addOnClickHandler: function (n) {
        this.add_$F(n)
    }, removeOnClickHandler: function (n) {
        this.remove_$F(n)
    }, onMouseEnter: function (n) {
        this.setHot(!0), this.refreshElement(), k.prototype.onMouseEnter.call(this, n)
    }, onMouseLeave: function (n) {
        this.setHot(!1), this.refreshElement(), k.prototype.onMouseLeave.call(this, n)
    }},ae = {getMarksSize: function () {
        return this.$C
    }, getFixShift: function () {
        return this.getSize() / 2
    }, setMarksSize: function (n) {
        PerfectWidgetsFramework.Vector.equals(this.$C, n) || (this.$C = n, this.setNeedRepaint(!0))
    }, getSubMarksSize: function () {
        return this.$D
    }, setSubMarksSize: function (n) {
        PerfectWidgetsFramework.Vector.equals(this.$D, n) || (this.$D = n, this.setNeedRepaint(!0))
    }, getShape: function () {
        return this.$E
    }, setShape: function (n) {
        this.$E !== n && (this.$E = n, this.setNeedRepaint(!0))
    }, getRotationMode: function () {
        return this.$F
    }, setRotationMode: function (n) {
        this.$F !== n && (this.$F = n, this.setNeedRepaint(!0))
    }, getMarksAngle: function () {
        return this.$G
    }, setMarksAngle: function (n) {
        this.$G !== n && (this.$G = n, this.setNeedRepaint(!0))
    }, $H: function (n) {
        return n.getLength() * Math.cos(n.getRotation() - PerfectWidgetsFramework.Vector.toRadians(this.getMarksAngle()))
    }, getWidth: function () {
        return this.$H(this.getMarksSize())
    }, getSubWidth: function () {
        return this.$H(this.getSubMarksSize())
    }, $I: function (n) {
        var i = this.getMarksAngle(), t = this.getScale(), r;
        return t != null && this.getRotationMode() === 1 && (r = t.valueToPoint(n, this.getDistance() + 5).minus(t.valueToPoint(n, this.getDistance())), i += PerfectWidgetsFramework.GeometryUtilities.radianToDegree(r.getRotation())), i
    }, buildSubMark: function (n, t, i, r, u) {
        var h = this.getScale(), o, s, f, e;
        if (h != null)for (o = i - t, s = this.getSubTicksInternalRadius() - this.getWidth() / 2 + this.getSubWidth() / 2, f = 1; f < this.getSubDivisions(); f++)e = t + o / this.getSubDivisions() * f, this.setSuffix(e.toString()), this.$L(n, e, s, this.getSubMarksSize(), r, u)
    }, buildMark: function (n, t, i, r, u, f) {
        this.$L(n, t, r, this.getMarksSize(), u, f)
    }, $J: function (n, t, i, r) {
        for (var f = new PerfectWidgetsFramework.GraphicsPath, u = 0; u < t.length; u++)f.addGraphicsPath(t[u].get_path());
        f.setBounds(this.getBoundedBox()), n.drawGraphicsPath(i, r, f)
    }, $K: function (n, t, i) {
        var o = this.getScale(), f, h, r, e;
        if (o != null) {
            var c = this.getColorizer(), u = {}, s = [];
            for (r = 0; r < t.length; r++)f = c.getColor(o.valueToPercent(t[r].get_value())), ss.keyExists(u, f) || (h = new PerfectWidgetsFramework.GraphicsPath, u[f] = h, s.push(f)), u[f].addGraphicsPath(t[r].get_path());
            for (r = 0; r < ss.keyCount(u); r++)e = s[r], this.setSuffix(r.toString()), n.drawGraphicsPath(new PerfectWidgetsFramework.SolidFill(e), i, u[e])
        }
    }, mergeAndDrawPaths: function (n, t, i, r) {
        var f = r, u, e;
        if (f == null && (f = this.getStroke()), u = i, (u == null || ss.canCast(u, PerfectWidgetsFramework.EmptyFill)) && (u = this.getFill(), e = this.getColorizer(), e != null)) {
            this.$K(n, t, f);
            return
        }
        this.$J(n, t, u, f)
    }, $L: function (n, t, i, r) {
        var f = this.getScale();
        if (f != null && this.needPaint(t) && this.getShape() != null) {
            var e = f.valueToPoint(t, i), o = e.minus(r.divideByNumber(2)), s = new PerfectWidgetsFramework.VectorRectangle(o.x, o.y, r.x, r.y), h = this.$I(t), u = new PerfectWidgetsFramework.RotateTransformation;
            u.setAngle(h), u.setCenter(e), r.x > .001 && r.y > .001 && n.push(new pt(t, this.getShape().buildShapePath(s, u)))
        }
    }, getHitTest: function () {
        return!1
    }, getBoundedBox: function () {
        return PerfectWidgetsFramework.VectorRectangle.empty
    }, getSize: function () {
        var n = this.getMarksSize(), t = this.getSubMarksSize(), i = Math.sqrt(n.x * n.x + n.y * n.y), r = Math.sqrt(t.x * t.x + t.y * t.y);
        return Math.max(i, r)
    }},ve = {getText: function () {
        return this.$W + ""
    }, setText: function (n) {
        this.$W = n + ""
    }, getLabelsCount: function () {
        return 1
    }, getObjectByIndex: function (n) {
        if (!!n)throw new Error("index out of range");
        return this.getText()
    }, getValueByIndex: function (n) {
        if (!!n)throw new Error("index out of range");
        if (this.getScale() != null)switch (this.getOrigin().getKind()) {
            case 0:
                return(this.getScale().getMaximum() + this.getScale().getMaximum()) / 2;
            case 1:
                return this.getOrigin().getValue();
            case 2:
                return this.getScale().percentToValue(this.getOrigin().getValue() / 100)
        }
        return 0
    }},pe = {getEffect3D: function () {
        return this.$A
    }, setEffect3D: function (n) {
        this.$A !== n && (this.$A = n, this.setNeedRepaint(!0))
    }, getLiquidColor: function () {
        return this.$B
    }, setLiquidColor: function (n) {
        PerfectWidgetsFramework.Vector.equals(this.$B, n) || (this.$B = n, this.setNeedRepaint(!0))
    }, getTankColor: function () {
        return this.$C
    }, setTankColor: function (n) {
        PerfectWidgetsFramework.Color.equals(this.$C, n) || (this.$C = n, this.setNeedRepaint(!0))
    }, getDepth: function () {
        return this.$D
    }, setDepth: function (n) {
        this.$D !== n && (this.$D = n, this.setNeedRepaint(!0))
    }, getWidth: function () {
        return this.$E
    }, setWidth: function (n) {
        this.$E = n, this.setNeedRepaint(!0)
    }, getTankWidth: function () {
        return this.$F
    }, setTankWidth: function (n) {
        this.$F !== n && (this.$F = n, this.setNeedRepaint(!0))
    }, getFixShift: function () {
        return this.getSize() / 2
    }, getTankGraphicsPath: function (n, t, i, r, u) {
        var f = new PerfectWidgetsFramework.GraphicsPath, h = new PerfectWidgetsFramework.Vector(n.x + t, n.y), c = new PerfectWidgetsFramework.Vector(0, i / 2), o, e, s, l;
        return f.startPath(n.add(c)), f.addLine(h.add(c)), Math.abs(r) > .01 ? (o = new PerfectWidgetsFramework.Vector(r, Math.abs(i)), e = new PerfectWidgetsFramework.VectorRectangle(h.x - o.x / 2, h.y - o.y / 2, o.x, o.y).getPositiveRectangle(), f.setBounds(e), Math.abs(e.width) > PerfectWidgetsFramework.MathHelper.epsilon && Math.abs(e.height) > PerfectWidgetsFramework.MathHelper.epsilon && (u ? f.addArc(e, 90, -180) : f.addArc(e, 90, 180))) : f.addLine(h.minus(c)), f.addLine(n.minus(c)), s = new PerfectWidgetsFramework.Vector(Math.abs(i), Math.abs(i)), l = new PerfectWidgetsFramework.VectorRectangle(n.x - s.x / 2, n.y - s.y / 2, s.x, s.y).getPositiveRectangle(), Math.abs(l.width) > PerfectWidgetsFramework.MathHelper.epsilon && Math.abs(l.height) > PerfectWidgetsFramework.MathHelper.epsilon && f.addArc(l, -90, -180), f.terminate(), f
    }, getTankTopPath: function (n, t, i, r) {
        var f = new PerfectWidgetsFramework.GraphicsPath, u, e, o;
        return Math.abs(t) > .01 && (u = new PerfectWidgetsFramework.Vector(t, i), e = new PerfectWidgetsFramework.VectorRectangle(n.x - u.x / 2, n.y - u.y / 2, u.x, u.y), f.startPath(e.getLeftCenter()), f.addArc(e, -180, 180), u = new PerfectWidgetsFramework.Vector(t - r * t / i, i - r), o = new PerfectWidgetsFramework.VectorRectangle(n.x - u.x / 2, n.y - u.y / 2, u.x, u.y), f.addLine(o.getRightCenter()), f.addArc(o, 0, -180), f.addArc(o, -180, -180), f.addLine(e.getRightCenter()), f.addArc(e, 0, 180), f.terminate()), f
    }, drawTank: function (n, t) {
        var r = this.getScale();
        if (r != null) {
            var nt = o.$0(this), e = o.$1(this), tt = Math.min(e, this.getSmartValue(this.getValue(), e)), i = r.valueToPoint(nt, this.getDistance()), s = r.valueToPoint(e, this.getDistance()), h = r.valueToPercent(tt);
            if (Math.abs(this.getWidth()) > PerfectWidgetsFramework.MathHelper.epsilon) {
                var it = PerfectWidgetsFramework.GeometryUtilities.getTransformMatrix(i, Math.PI / 2 - s.minus(i).getRotation()), c = i.minus(s).getLength(), p = c * h, l = new PerfectWidgetsFramework.Vector(i.x + c, i.y), w = new PerfectWidgetsFramework.Vector(i.x + p, i.y), b = this.getDepth() - this.getTankWidth() * this.getDepth() / this.getWidth(), u = new PerfectWidgetsFramework.Vector(this.getDepth(), this.getWidth()), rt = new PerfectWidgetsFramework.VectorRectangle(l.x - u.x / 2, l.y - u.y / 2, u.x, u.y), f = new PerfectWidgetsFramework.Vector(b, Math.abs(this.getWidth() - this.getTankWidth())), ut = new PerfectWidgetsFramework.VectorRectangle(w.x - f.x / 2, w.y - f.y / 2, f.x, f.y), a = t != null ? t : new PerfectWidgetsFramework.SolidFill(this.getTankColor()), ft = t != null ? t : new PerfectWidgetsFramework.SolidFill(PerfectWidgetsFramework.GraphicsUtilites.scaleColor(this.getTankColor(), .8)), k = t != null ? null : new PerfectWidgetsFramework.SolidFill(this.getLiquidColor()), et = t != null ? null : new PerfectWidgetsFramework.SolidFill(PerfectWidgetsFramework.GraphicsUtilites.scaleColor(this.getLiquidColor(), .8)), ot = t != null ? t : new PerfectWidgetsFramework.SolidFill(PerfectWidgetsFramework.GraphicsUtilites.scaleColor(this.getTankColor(), .8)), st = t != null ? null : o.$4(i, s, this.getEffect3D()), v = t != null ? null : this.getStroke(), y = this.getTankGraphicsPath(i, c, this.getWidth(), this.getDepth(), !1), d = this.getTankGraphicsPath(i, p, this.getWidth() - this.getTankWidth(), b, !1), g = this.getTankTopPath(l, this.getDepth(), this.getWidth(), this.getTankWidth());
                this.setSuffix("_rotation"), n.startTransformation(it), this.setSuffix("tank"), this.getEffect3D() !== 2 ? n.drawGraphicsPath(ft, v, y) : n.drawGraphicsPath(a, v, y), h > 0 && (this.setSuffix("liquid"), this.getEffect3D() !== 2 ? n.drawGraphicsPath(et, PerfectWidgetsFramework.Stroke.emptyStroke, d) : n.drawGraphicsPath(k, PerfectWidgetsFramework.Stroke.emptyStroke, d)), this.setSuffix("top"), n.drawEllipse(a, v, rt), h > 0 && (this.setSuffix("ellipse"), n.drawEllipse(k, PerfectWidgetsFramework.Stroke.emptyStroke, ut)), this.setSuffix("topSide"), this.getEffect3D() !== 2 ? n.drawGraphicsPath(ot, PerfectWidgetsFramework.Stroke.emptyStroke, g) : n.drawGraphicsPath(a, PerfectWidgetsFramework.Stroke.emptyStroke, g), this.setSuffix("3D"), n.drawGraphicsPath(st, PerfectWidgetsFramework.Stroke.emptyStroke, y), n.endTransformation()
            }
        }
    }, onPaint: function (n) {
        n.setContext(this), this.onRecalculate(), this.getNeedRepaint() && (this.setNeedRepaint(!1), this.setSuffix("_tank"), n.createGroup(), n.clearGroup(), this.drawTank(n, null), n.endGroup())
    }, $G: function () {
        var h = [], p = this.getScale(), it = o.$0(this), w = o.$1(this), rt = Math.min(w, this.getSmartValue(this.getValue(), w)), n = p.valueToPoint(it, this.getDistance()), i = p.valueToPoint(w, this.getDistance()), ut = p.valueToPercent(rt), t = this.getWidth(), r = this.getDepth(), c = this.getTankWidth(), b = n.minus(i).getLength(), g = b * ut, k = new PerfectWidgetsFramework.Vector(n.x + b, n.y), nt = new PerfectWidgetsFramework.Vector(n.x + g, n.y), tt = r - c * r / t, l = new PerfectWidgetsFramework.Vector(r, t), et = new PerfectWidgetsFramework.VectorRectangle(k.x - l.x / 2, k.y - l.y / 2, l.x, l.y), a = new PerfectWidgetsFramework.Vector(tt, Math.abs(t - c)), ot = new PerfectWidgetsFramework.VectorRectangle(nt.x - a.x / 2, nt.y - a.y / 2, a.x, a.y), ft = PerfectWidgetsFramework.GeometryUtilities.getTransformMatrix(n, Math.PI / 2 - i.minus(n).getRotation()), d = new PerfectWidgetsFramework.MatrixTransformation(ft), st = this.getTankGraphicsPath(n, g, t - c, tt, !1), ht = this.getTankTopPath(k, r, t, c), u = new Array(4), f, e, v, s, y;
        return i = new PerfectWidgetsFramework.Vector(n.x + b, n.y), f = new PerfectWidgetsFramework.Vector(0, t / 2), u[0] = n.add(f), u[1] = i.add(f), u[2] = i.minus(f), u[3] = n.minus(f), h.push(this.$H(u, d)), Math.abs(r) > .01 && (e = new PerfectWidgetsFramework.Vector(r, Math.abs(t)), v = new PerfectWidgetsFramework.VectorRectangle(i.x - e.x / 2, i.y - e.y / 2, e.x, e.y).getPositiveRectangle(), Math.abs(v.width) > PerfectWidgetsFramework.MathHelper.epsilon && Math.abs(v.height) > PerfectWidgetsFramework.MathHelper.epsilon && h.push(this.$H(v.getVertice(), d))), s = new PerfectWidgetsFramework.Vector(Math.abs(t), Math.abs(t)), y = new PerfectWidgetsFramework.VectorRectangle(n.x - s.x / 2, n.y - s.y / 2, s.x, s.y).getPositiveRectangle(), Math.abs(y.width) > PerfectWidgetsFramework.MathHelper.epsilon && Math.abs(y.height) > PerfectWidgetsFramework.MathHelper.epsilon && h.push(this.$H(y.getVertice(), d)), h
    }, $H: function (n, t) {
        for (var r = new Array(n.length), i = 0; i < n.length; i++)r[i] = t.apply(n[i]);
        return r
    }, getHitTest: function (n) {
        for (var i = this.$G(), t = 0; t < i.length; t++)if (PerfectWidgetsFramework.GeometryUtilities.isIncludePoint(i[t], n))return!0;
        return g.prototype.getHitTest.call(this, n)
    }, getSize: function () {
        return 0
    }},we = {getMargins: function () {
        return this.$y
    }, setMargins: function (n) {
        this.$y = n
    }, getTextAlign: function () {
        return this.$z
    }, setTextAlign: function (n) {
        this.$z !== n && (this.$z = n)
    }, getFont: function () {
        return this.$A
    }, setFont: function (n) {
        this.$A !== n && (this.$A = n)
    }, getText: function () {
        return this.$B + ""
    }, setText: function (n) {
        this.$B !== n + "" && (this.$B = n + "", this.setNeedRepaint(!0))
    }, drawContent: function (n, t, i) {
        if (this.getFont() != null) {
            this.setSuffix(".0"), n.drawRectangle(new PerfectWidgetsFramework.EmptyFill, i, this.getBounds(), 0), this.setSuffix(".1");
            var r = new PerfectWidgetsFramework.VectorRectangle(this.getBounds().getLeft() + this.getMargins().left, this.getBounds().getTop() + this.getMargins().top, this.getBounds().width - this.getMargins().left - this.getMargins().right, this.getBounds().height - this.getMargins().top - this.getMargins().bottom);
            n.drawAlignedText(this.getText(), this.getFont(), t, r, 0, this.getTextAlign())
        }
    }, getHitTest: function () {
        return!1
    }},be = {getLabels: function () {
        return this.$W
    }, setLabels: function (n) {
        this.$W = n
    }, getLabelsCount: function () {
        return this.$W.length
    }, getObjectByIndex: function (n) {
        var t = this.$W[n].getText();
        return t != null && t.length ? t : this.getValueByIndex(n)
    }, getValueByIndex: function (n) {
        var l = this.$W[n], o = this.$W[n].getValue(), t = this.getScale(), i = this.getOrigin(), r = 0, u, s, f, h, c;
        switch (o.getKind()) {
            case 1:
                r = o.getValue();
                break;
            case 2:
                t != null && (r = t.percentToValue(o.getValue() / 100));
                break;
            case 0:
                u = !1, i.getKind() && (i.getKind() !== 2 || i.getValue()) ? t != null && i.getKind() === 1 && i.getValue() === t.getMinimum() && (u = !0) : u = !0, s = this.$X(), f = s, f > 1 && u && f--, t != null && (i.getKind() || s !== 1 ? (h = t.getMaximum() - t.getMinimum(), c = this.$Y(l), r = e.getStartValue(t, i, h) + h / f * c) : r = t.percentToValue(.5))
        }
        return r
    }, $X: function () {
        for (var n = 0, t = ss.enumerate(this.$W), i; t.moveNext();)i = t.current, i.getValue().getKind() || n++;
        return n
    }, $Y: function (n) {
        var i = 0, r, t;
        if (n == null || !(this.$W.indexOf(n) >= 0))return-1;
        for (r = this.$W.indexOf(n), t = 0; t < r; t++)this.$W[t].getValue().getKind() || i++;
        return i
    }},ke = {drawContent: function (n, t, i) {
        n.drawEllipse(t, i, this.getBounds())
    }, getHitTest: function (n) {
        var u = this.getRealPosition(n), i = this._size.x / 2, r = this._size.y / 2, t = PerfectWidgetsFramework.GeometryUtilities.rotateVector(u, this.getBounds().getCenter(), PerfectWidgetsFramework.Vector.toRadians(-this._angle)).minus(this.getBounds().getCenter()), f = t.x * t.x / i / i + t.y * t.y / r / r;
        return f <= 1
    }},de = {getStartPoint: function () {
        return this.$G
    }, setStartPoint: function (n) {
        this.$G = n, this.setNeedRepaint(!0)
    }, getEndPoint: function () {
        return this.$H
    }, setEndPoint: function (n) {
        this.$H = n, this.setNeedRepaint(!0)
    }, getGuideDirection: function () {
        return this.$I
    }, setGuideDirection: function (n) {
        this.$I !== n && (this.$I = n)
    }, getAlign: function () {
        return this.$J
    }, setAlign: function (n) {
        this.$J = n
    }, $K: function (n, t, i, r) {
        var u = t.minus(n), f = PerfectWidgetsFramework.Vector.fromPolar(r, u.getRotation() + Math.PI / 2);
        return u.setLength(u.getLength() * i), u.add(n).add(f)
    }, percentToPoint: function (n, t) {
        return this.$K(this.getStartPoint(), this.getEndPoint(), n, t)
    }, $L: function (n, t, i) {
        if (Math.abs(this.getEndPoint().x - n.x) <= .0001)return(i.y - n.y) / (t.y - n.y);
        var r = i.getProjection(n, t).x - n.x;
        return r / (t.x - n.x)
    }, pointToPercent: function (n) {
        return this.$L(this.getStartPoint(), this.getEndPoint(), n)
    }, getBoundedBox: function () {
        var n = this.$H.minus(this.$G);
        return new PerfectWidgetsFramework.VectorRectangle(this.$G.x, this.$G.y, n.x, n.y)
    }, recalculatePosition: function () {
        var t = this.getInstrument(), n;
        if (t != null) {
            n = PerfectWidgetsFramework.VectorRectangle.shrink(t.getBoundedBox(), this.getMargins());
            switch (this.getGuideDirection()) {
                case 3:
                    this.$P(n);
                    return;
                case 4:
                    this.$O(n);
                    return;
                case 1:
                    this.$N(n);
                    return;
                case 2:
                    this.$M(n);
                    return
            }
        }
    }, $M: function (n) {
        var i = 0, t = PerfectWidgetsFramework.Vector.empty;
        switch (this.getAlign()) {
            case 2:
                this.setStartPoint(n.getTopCenter()), this.setEndPoint(n.getBottomCenter());
                break;
            case 0:
                i = Math.max(this.getInsideSize(), -this.getOutsideSize()), t = new PerfectWidgetsFramework.Vector(i, 0), this.setStartPoint(n.getTopRight().minus(t)), this.setEndPoint(n.getBottomRight().minus(t));
                break;
            case 1:
                i = Math.max(this.getOutsideSize(), -this.getInsideSize()), t = new PerfectWidgetsFramework.Vector(i, 0), this.setStartPoint(n.getTopLeft().add(t)), this.setEndPoint(n.getBottomLeft().add(t))
        }
    }, $N: function (n) {
        var i = 0, t = PerfectWidgetsFramework.Vector.empty;
        switch (this.getAlign()) {
            case 2:
                this.setStartPoint(n.getBottomCenter()), this.setEndPoint(n.getTopCenter());
                break;
            case 0:
                i = Math.max(this.getOutsideSize(), -this.getInsideSize()), t = new PerfectWidgetsFramework.Vector(i, 0), this.setStartPoint(n.getBottomRight().minus(t)), this.setEndPoint(n.getTopRight().minus(t));
                break;
            case 1:
                i = Math.max(this.getInsideSize(), -this.getOutsideSize()), t = new PerfectWidgetsFramework.Vector(i, 0), this.setStartPoint(n.getBottomLeft().add(t)), this.setEndPoint(n.getTopLeft().add(t))
        }
    }, $O: function (n) {
        var i = 0, t = PerfectWidgetsFramework.Vector.empty;
        switch (this.getAlign()) {
            case 2:
                this.setStartPoint(n.getRightCenter()), this.setEndPoint(n.getLeftCenter());
                break;
            case 0:
                i = Math.max(this.getInsideSize(), -this.getOutsideSize()), t = new PerfectWidgetsFramework.Vector(0, i), this.setStartPoint(n.getBottomRight().minus(t)), this.setEndPoint(n.getBottomLeft().minus(t));
                break;
            case 1:
                i = Math.max(this.getOutsideSize(), -this.getInsideSize()), t = new PerfectWidgetsFramework.Vector(0, i), this.setStartPoint(n.getTopRight().add(t)), this.setEndPoint(n.getTopLeft().add(t))
        }
    }, $P: function (n) {
        var i = 0, t = PerfectWidgetsFramework.Vector.empty;
        switch (this.getAlign()) {
            case 2:
                this.setStartPoint(n.getLeftCenter()), this.setEndPoint(n.getRightCenter());
                break;
            case 0:
                i = Math.max(this.getOutsideSize(), -this.getInsideSize()), t = new PerfectWidgetsFramework.Vector(0, i), this.setStartPoint(n.getBottomLeft().minus(t)), this.setEndPoint(n.getBottomRight().minus(t));
                break;
            case 1:
                i = Math.max(this.getInsideSize(), -this.getOutsideSize()), t = new PerfectWidgetsFramework.Vector(0, i), this.setStartPoint(n.getTopLeft().add(t)), this.setEndPoint(n.getTopRight().add(t))
        }
    }, portionToTransformation: function (n) {
        var i = new PerfectWidgetsFramework.TranslateTransformation, t = this.$H.minus(this.$G);
        return t.setLength(t.getLength() * n), i.setTranslation(t), i
    }, getStartDistance: function () {
        return 0
    }},ge = {getCenter: function () {
        return this.$G
    }, setCenter: function (n) {
        PerfectWidgetsFramework.Vector.equals(this.$G, n) || (this.$G = n, this.setNeedRepaint(!0))
    }, portionToTransformation: function (n) {
        var t = new PerfectWidgetsFramework.RotateTransformation;
        return t.setAngle(this.$I * n), t.setCenter(this.$G), t
    }, getStartAngle: function () {
        return this.$H
    }, setStartAngle: function (n) {
        n = Math.round((n % 360 + 360) % 360), this.$H !== n && (this.$H = n, this.setNeedRepaint(!0))
    }, getTotalAngle: function () {
        return this.$I
    }, setTotalAngle: function (n) {
        n = Math.round(n % 360), n = n ? n : 359.99, n !== this.$I && (this.$I = n, this.setNeedRepaint(!0))
    }, getRadius: function () {
        return this.$J
    }, setRadius: function (n) {
        this.$J !== n && (this.$J = Math.abs(n), this.setNeedRepaint(!0))
    }, getDock: function () {
        return this.$K
    }, setDock: function (n) {
        this.$K !== n && (this.$K = n, this.setNeedRepaint(!0))
    }, getStartDistance: function () {
        return this.$J
    }, percentToPoint: function (n, t) {
        return this.$G.add(PerfectWidgetsFramework.Vector.fromPolar(t, PerfectWidgetsFramework.Vector.toRadians(this.$H) + PerfectWidgetsFramework.Vector.toRadians(this.$I) * n))
    }, pointToPercent: function (n) {
        var f = n.minus(this.$G).getRotation(), t = Math.PI * 2, e = (f % t + t) % t, u = PerfectWidgetsFramework.Vector.toRadians(this.$H), r = PerfectWidgetsFramework.Vector.toRadians(this.$I), i = e - u;
        return i - r / 2 > Math.PI ? i -= t : i + Math.PI < r / 2 && i + t < u + r && (i += t), i / r
    }, getBoundedBox: function () {
        var l, i, r, n;
        this.$J || (this.$J = 1);
        var u = new PerfectWidgetsFramework.VectorRectangle(this.$G.x - this.$J, this.$G.y - this.$J, this.$J * 2, this.$J * 2), o = PerfectWidgetsFramework.Vector.toRadians(this.getStartAngle()), s = PerfectWidgetsFramework.Vector.toRadians(this.getStartAngle() + this.getTotalAngle()), h = PerfectWidgetsFramework.Vector.fromPolar(PerfectWidgetsFramework.GeometryUtilities.getEllipseRadius(u, o), o).add(this.getCenter()), c = PerfectWidgetsFramework.Vector.fromPolar(PerfectWidgetsFramework.GeometryUtilities.getEllipseRadius(u, s), s).add(this.getCenter()), t = [];
        t.push(h), t.push(c);
        var a = this.getStartAngle(), f = Math.floor((this.getStartAngle() + this.getTotalAngle()) / 90) - Math.floor(this.getStartAngle() / 90), e = f > 0 ? 1 : -1;
        for (f = Math.abs(f), l = [], n = 1; n <= f; n++)switch (e > 0 ? (Math.floor(this.getStartAngle() / 90 + e * n) * 90 + 360) % 360 / 90 : (Math.ceil(this.getStartAngle() / 90 + e * n) + 360) * 90 % 360 / 90) {
            case 0:
                t.push(u.getRightCenter());
                break;
            case 1:
                t.push(u.getBottomCenter());
                break;
            case 2:
                t.push(u.getLeftCenter());
                break;
            case 3:
                t.push(u.getTopCenter());
                break;
            case 4:
                t.push(u.getRightCenter())
        }
        for (i = h, r = c, n = 0; n < t.length; n++)t[n].x < i.x && (i = new PerfectWidgetsFramework.Vector(t[n].x, i.y)), t[n].y < i.y && (i = new PerfectWidgetsFramework.Vector(i.x, t[n].y)), t[n].x > r.x && (r = new PerfectWidgetsFramework.Vector(t[n].x, r.y)), t[n].y > r.y && (r = new PerfectWidgetsFramework.Vector(r.x, t[n].y));
        return new PerfectWidgetsFramework.VectorRectangle(i.x, i.y, r.x - i.x, r.y - i.y)
    }, getObject: function (n) {
        return n.toLowerCase() === "jointradius" ? this.$J : n.toLowerCase() === "jointcenter" ? this.$G : n.toLowerCase() === "jointtotalangle" ? this.$I : n.toLowerCase() === "jointstartangle" ? this.$H : null
    }, recalculatePosition: function () {
        if (this.getInstrument() != null && !!this.$K) {
            var t = this.getOutsideSize(), n = PerfectWidgetsFramework.VectorRectangle.shrink(this.getInstrument().getBoundedBox(), this.getMargins());
            switch (this.$K) {
                case 1:
                    this.$G = n.getCenter(), this.$J = Math.min(n.width, n.height) / 2 - t;
                    break;
                case 2:
                    this.$G = n.getLeftCenter(), this.$J = Math.min(n.width, n.height / 2) - t;
                    break;
                case 3:
                    this.$G = n.getRightCenter(), this.$J = Math.min(n.width, n.height / 2) - t;
                    break;
                case 4:
                    this.$G = n.getTopCenter(), this.$J = Math.min(n.width / 2, n.height) - t;
                    break;
                case 5:
                    this.$G = n.getBottomCenter(), this.$J = Math.min(n.width / 2, n.height) - t;
                    break;
                case 6:
                    this.$G = n.getBottomLeft(), this.$J = Math.min(n.width, n.height) - t;
                    break;
                case 8:
                    this.$G = n.getBottomRight(), this.$J = Math.min(n.width, n.height) - t;
                    break;
                case 9:
                    this.$G = n.getTopRight(), this.$J = Math.min(n.width, n.height) - t;
                    break;
                case 7:
                    this.$G = n.getTopLeft(), this.$J = Math.min(n.width, n.height) - t
            }
        }
    }},no = {getMargins: function () {
        return this.$y
    }, setMargins: function (n) {
        this.$y.equals(n) || (this.$y = n, this.setNeedRepaint(!0))
    }, getTextAlign: function () {
        return this.$z
    }, setTextAlign: function (n) {
        this.$z !== n && (this.$z = n, this.setNeedRepaint(!0))
    }, getFont: function () {
        return this.$A
    }, setFont: function (n) {
        this.$A !== n && (this.$A = n, this.setNeedRepaint(!0))
    }, getText: function () {
        return this.$B + ""
    }, setText: function (n) {
        n != null && n + "" !== this.$B && (this.$B = n + "", this.setNeedRepaint(!0))
    }, onPaint: function (n, t, i) {
        if (n.setContext(this), this.onRecalculate(), this.getNeedRepaint()) {
            if (this.setNeedRepaint(!1), (this._angle != null & this._center != null) == 1) {
                var r = new PerfectWidgetsFramework.RotateTransformation;
                r.setCenter(this._center), r.setAngle(this._angle), this.setTransformation(r)
            }
            this.setSuffix("_transform"), n.createGroup(), n.clearGroup(), this.setSuffix("_clip"), n.startClip(this.getBounds()), this.drawContent(n, t, i), n.endClip(), n.endGroup(), this.setNeedRepaint(!1)
        }
    }, drawContent: function (n, t, i) {
        if (this.getFont() != null) {
            this.setSuffix(".0"), n.drawRectangle(new PerfectWidgetsFramework.EmptyFill, i, this.getBounds(), 0), this.setSuffix(".1");
            var r = new PerfectWidgetsFramework.VectorRectangle(this.getBounds().getLeft() + this.getMargins().left, this.getBounds().getTop() + this.getMargins().top, this.getBounds().width - this.getMargins().left - this.getMargins().right, this.getBounds().height - this.getMargins().top - this.getMargins().bottom);
            n.drawAlignedText(this.getText(), this.getFont(), t, r, 0, this.getTextAlign())
        }
    }},to = {getDivisions: function () {
        return this.$A
    }, setDivisions: function (n) {
        this.$A !== n && (this.$A = n, this.setNeedRepaint(!0))
    }, getDivisionsStroke: function () {
        return this.$B
    }, setDivisionsStroke: function (n) {
        this.$B !== n && (this.$B = n, this.setNeedRepaint(!0))
    }, getStartColor: function () {
        return this.$C
    }, setStartColor: function (n) {
        PerfectWidgetsFramework.Color.equals(this.$C, n) || (this.$C = n, this.setNeedRepaint(!0))
    }, getEndColor: function () {
        return this.$D
    }, setEndColor: function (n) {
        PerfectWidgetsFramework.Color.equals(this.$D, n) || (this.$D = n, this.setNeedRepaint(!0))
    }, getColors: function () {
        return this.$E
    }, setColors: function (n) {
        this.$E !== n && (this.$E = n, this.setNeedRepaint(!0))
    }, onMouseDown: function (n) {
        var i = this.getParent(), t = this.getScale(), r;
        this.getHitTest(n.getManipulationOrigin()) && i != null && t != null && (r = t.pointToValue(n.getManipulationOrigin()), this.setNeedRepaint(!0)), g.prototype.onMouseDown.call(this, n)
    }},io = {getImage: function () {
        return this.$y
    }, setImage: function (n) {
        this.$y !== n && (this.$y = n, this.setNeedRepaint(!0))
    }, resetImage: function () {
        this.$y != null && (this.$y = null, this.setNeedRepaint(!0))
    }, setStyle: function (n) {
        this.getStyle() !== n && (this.$z = !0), f.prototype.setStyle.call(this, n)
    }, drawContent: function (n) {
        if (this.$z) {
            this.$z = !1;
            var t = this.getStyleByName(this.getStyle());
            t != null && this.setImage(t.getImage())
        }
        this.$y != null && n.drawImage(this.$y, this.getBounds())
    }},ro = {getImages: function () {
        return this.$y
    }, setImages: function (n) {
        this.$y !== n && (this.$y = n, this.setNeedRepaint(!0))
    }, getImageIndex: function () {
        return this.$z
    }, setImageIndex: function (n) {
        this.$z !== n && (this.$z = n, this.setNeedRepaint(!0))
    }, drawContent: function (n) {
        this.$z >= 0 && this.$z < this.$y.length && this.$y[this.$z] != null && n.drawImage(this.$y[this.$z], this.getBounds())
    }},uo = {drawContent: function (n, t, i) {
        n.setContext(this), this.setSuffix("rectangle1"), n.drawRectangle(t, i, this.getBounds(), 0)
    }},fo = {getDivisions: function () {
        return this.$W
    }, setDivisions: function (n) {
        n > 0 && this.$W !== n && (this.$W = n)
    }, getStep: function () {
        return this.$X
    }, setStep: function (n) {
        if (this.$X !== n) {
            if (!n._value && !!n._kind)throw new Error('ExceptionBuilder.ArgumentZero("Step");');
            this.$X = n
        }
    }, getUseRoundValues: function () {
        return this.$Y
    }, setUseRoundValues: function (n) {
        this.$Y !== n && (this.$Y = n)
    }, getLabelsCount: function () {
        var t = 0, n = this.getScale(), h, u, f, i, o, c, s;
        if (n == null)return this.$W;
        if (n.isDiscrete()) {
            if (t = n.getDiscreteValuesCount(), !!t)switch (this.$X._kind) {
                case 1:
                    t = Math.ceil(t / Math.ceil(Math.abs(this.$X._value)));
                    break;
                case 2:
                    t = Math.ceil(t / Math.ceil(t * Math.abs(this.$X._value) / 100))
            }
        } else {
            h = e.getRoundLabelsStep(n.getMaximum(), n.getMinimum(), this.$W), u = new r, u.setKind(0), u.setValue(h), f = new r, f.setKind(0), f.setValue(0), i = this.getUseRoundValues() ? u : this.getStep(), o = this.getUseRoundValues() ? f : this.getOrigin();
            switch (i._kind) {
                case 0:
                    c = (n.getMaximum() - n.getMinimum()) / this.getDivisions(), t = e.getStartValue(this.getScale(), this._origin, c) > n.getMinimum() ? this.getDivisions() : this.getDivisions() + 1;
                    break;
                case 1:
                    t = Math.floor((n.getMaximum() - e.getStartValue(n, o, i._value)) / Math.abs(i._value)) + 1;
                    break;
                case 2:
                    s = (n.getMaximum() - n.getMinimum()) / 100 * Math.abs(i._value), t = Math.floor((n.getMaximum() - e.getStartValue(n, o, s)) / s) + 1
            }
        }
        return t
    }, getValueByIndex: function (n) {
        var f = 0, t = this.getScale(), o, i, u, s;
        return t != null && (t.isDiscrete() ? (o = this.getObjectByIndex(n), f = t.fromRealValue(o)) : (i = this.$Z(), u = new r, u.setKind(0), u.setValue(0), s = this.getUseRoundValues() ? e.getStartValue(t, u, i) : e.getStartValue(t, this.getOrigin(), i), f = i * n + s)), f
    }, getObjectByIndex: function (n) {
        var o = null, t = this.getScale(), i, u, f;
        if (t != null && t.isDiscrete()) {
            if (i = new r, i.setKind(1), i.setValue(e.getRoundLabelsStep(t.getMaximum(), t.getMinimum(), this.getDivisions())), u = this.getUseRoundValues() ? i : this.getStep(), f = 1, t.isDiscrete())switch (u.getKind()) {
                case 1:
                    f = Math.ceil(Math.abs(u.getValue()));
                    break;
                case 2:
                    f = Math.ceil(t.getDiscreteValuesCount() * Math.abs(u.getValue()) / 100)
            }
            o = t.getDiscreteValue(n * f)
        } else o = this.getValueByIndex(n);
        return PerfectWidgetsFramework.MathHelper.round(o, 2)
    }, $Z: function () {
        var t = 0, n = this.getScale();
        if (n == null)return 0;
        if (this.getUseRoundValues())t = e.getRoundLabelsStep(n.getMaximum(), n.getMinimum(), this.getDivisions()); else switch (this.getStep()._kind) {
            case 0:
                t = (n.getMaximum() - n.getMinimum()) / this.getDivisions();
                break;
            case 1:
                t = Math.abs(this.getStep()._value);
                break;
            case 2:
                t = (n.getMaximum() - n.getMinimum()) * Math.abs(this.getStep()._value) / 100
        }
        return t
    }, getBoundedBox: function () {
        var t = this.getScale(), n;
        return t != null ? (n = this.getScale().valueToPoint(this.getScale().getMinimum(), 0), new PerfectWidgetsFramework.VectorRectangle(n.x - this._distance, n.y - this._distance, 2 * this._distance, 2 * this._distance)) : PerfectWidgetsFramework.VectorRectangle.empty
    }},eo = {$12: function () {
        var n = new hr;
        n.setDuration(3), n.setEasingFunction("swing"), n.setPropertyName("AnimationValue"), this.setAnimation(n)
    }, getPosition: function (n) {
        var t = this.getScale();
        return t != null ? t.valueToPoint(this.getAnimationValue(), n) : PerfectWidgetsFramework.Vector.empty
    }, $13: function (n) {
        var i, r;
        if (this.getAnimationValue() <= n.getMaximum())return 0;
        var u = n.getMaximum() - n.getMinimum(), t = ss.safeCast(n.getTrajectory(), it), f = 0;
        return t != null ? (i = t.getTotalAngle(), r = u / i, (f = 360 - t.getTotalAngle()) * r) : 0
    }, getTransformationInfo: function () {
        var n = ss.safeCast(this.getScale(), y), t;
        return n != null ? (t = 0, t = this.getAnimationState() === 8 ? this.getAnimationValue() + this.$13(n) : this.getAnimationValue(), n.calculateTransformationInfo(t)) : null
    }, onMouseDown: function (n) {
        var t = this.getScale(), i;
        t != null && (i = this.roundValue(t.pointToValue(n.getManipulationOrigin())), this.setValue(i, !1), this.setDragged(!0), this.setPressed(!0), this.refreshElement()), b.prototype.onMouseDown.call(this, n)
    }, onMouseEnter: function (n) {
        this.setHot(!0), this.refreshElement(), document.body.style.cursor = "pointer", b.prototype.onMouseEnter.call(this, n)
    }, onMouseLeave: function (n) {
        this.setHot(!1), this.refreshElement(), this.getDragged() || (document.body.style.cursor = "auto"), b.prototype.onMouseLeave.call(this, n)
    }, onMouseMove: function (n) {
        var i = this.getScale(), t;
        this._dragged && i != null && (t = PerfectWidgetsFramework.MathHelper.round(this.roundValue(this.getScale().pointToValue(n.getManipulationOrigin())), 10), this.setValue(t, !1), this.refreshElement()), b.prototype.onMouseMove.call(this, n)
    }, onMouseUp: function (n) {
        var t = this.getScale();
        this._dragged && (this.setDragged(!1), this.setPressed(!1), this.refreshElement()), b.prototype.onMouseUp.call(this, n)
    }},oo = {getInternalRadius: function () {
        return this.$y
    }, setInternalRadius: function (n) {
        if (n < 0)throw new Error("value is negative");
        this.$y !== n && (this.$y = n)
    }, getVertex: function () {
        for (var t = this.getSides() * 2, r = 2 * Math.PI / t, i = new Array(t), n = 0; n < t; n++)i[n] = PerfectWidgetsFramework.Vector.fromPolar((n % 2) ? this.getInternalRadius() : this.getRadius(), r * n - Math.PI / 2 + PerfectWidgetsFramework.Vector.toRadians(this.getAngle())).add(this.getCenter());
        return i
    }},so = {getLength: function () {
        return this.$C
    }, setLength: function (n) {
        this.$C !== n && (this.$C = n, this.setNeedRepaint(!0))
    }, getSubLength: function () {
        return this.$D
    }, setSubLength: function (n) {
        this.$D !== n && (this.$D = n, this.setNeedRepaint(!0))
    }, getWidth: function () {
        return this.$C
    }, getSubWidth: function () {
        return this.$D
    }, buildSubMark: function (n, t, i, r, u, f) {
        var c = this.getScale(), o, s, e, h;
        if (c != null)for (o = i - t, s = this.getSubTicksInternalRadius(), e = 1; e < this._subDivisions; e++)h = t + o / this._subDivisions * e, this.buildMark(n, h, this.$D, s, r, u, f)
    }, buildMark: function (n, t, i, r, u, f) {
        if (this.needPaint(t)) {
            f == null && (f = new PerfectWidgetsFramework.Stroke, f.setStyle(PerfectWidgetsFramework.LineStyle.solid), f.setWidth(1), f.setColor(PerfectWidgetsFramework.Color.black));
            var o = this.getScale(), e = new PerfectWidgetsFramework.GraphicsPath;
            e.moveTo(o.valueToPoint(t, r)), e.addLine(o.valueToPoint(t, r + i)), e.terminate(), n.push(new pt(t, e))
        }
    }, $E: function (n, t, i, r) {
        for (var f = new PerfectWidgetsFramework.GraphicsPath, u = 0; u < t.length; u++)f.addGraphicsPath(t[u].get_path());
        f.setBounds(this.getBoundedBox()), n.drawGraphicsPath(i, r, f)
    }, $F: function (n, t, i, r) {
        var h = this.getScale(), e, l, u, s, o;
        if (h != null) {
            var a = this.getColorizer(), f = {}, c = [];
            for (u = 0; u < t.length; u++)e = a.getColor(h.valueToPercent(t[u].get_value())), ss.keyExists(f, e) || (l = new PerfectWidgetsFramework.GraphicsPath, f[e] = l, c.push(e)), f[e].addGraphicsPath(t[u].get_path());
            for (u = 0; u < ss.keyCount(f); u++)s = c[u], this.setSuffix(u.toString()), o = new PerfectWidgetsFramework.Stroke, o.setColor(s), o.setStyle(PerfectWidgetsFramework.LineStyle.solid), o.setWidth(r == null ? 1 : r.getWidth()), n.drawGraphicsPath(i, o, f[s])
        }
    }, mergeAndDrawPaths: function (n, t, i, r) {
        var u = r, f;
        u == null && (u = this.getStroke()), f = this.getColorizer(), f == null ? this.$E(n, t, i, u) : this.$F(n, t, i, u)
    }, getHitTest: function (n) {
        return w.prototype.getHitTest.call(this, n)
    }, getBoundedBox: function () {
        if (this.getParent() == null || !ss.canCast(this.getParent(), a))return PerfectWidgetsFramework.VectorRectangle.empty;
        var n = ss.safeCast(this.getParent(), a), t = n.valueToPoint(n.getMinimum(), this.getDistance() + this.$C), r = n.valueToPoint(n.getMaximum(), -this._distance - this.$C), i = r.minus(t), u = new PerfectWidgetsFramework.VectorRectangle(t.x, t.y, i.x, i.y);
        return u.getPositiveRectangle()
    }, getSize: function () {
        return Math.max(this.$C, this.$D)
    }},ho = {getHitTest: function (n) {
        return h.prototype.getHitTest.call(this, n)
    }},co = {getAlignmentMode: function () {
        return this.$I
    }, setAlignmentMode: function (n) {
        this.$I !== n && (this.$I = n, this.setNeedRepaint(!0))
    }, getStartWidth: function () {
        return this.$J
    }, setStartWidth: function (n) {
        this.$J !== n && (this.$J = n, this.setNeedRepaint(!0))
    }, getEndWidth: function () {
        return this.$K
    }, setEndWidth: function (n) {
        this.$K !== n && (this.$K = n, this.setNeedRepaint(!0))
    }, getSize: function () {
        return Math.max(Math.abs(this.getStartWidth()), Math.abs(this.getEndWidth()))
    }, $L: function () {
        var n = this.$H, i = Math.max(this.$G, this.getDistance()), t = Math.min(this.$G, this.getDistance());
        return Math.abs(t) < this.$F ? n : Math.floor(Math.abs(n * i / t))
    }, $M: function (n, t, i, r, u, f) {
        switch (this.getAlignmentMode()) {
            case 0:
                return t === 1 ? this.getDistance() : this.getDistance() + this.$N(i, r, u, f, n);
            case 2:
                return this.getDistance() + this.$N(i, r, u, f, n) * t / 2;
            case 1:
                return t === -1 ? this.getDistance() : this.getDistance() - this.$N(i, r, u, f, n)
        }
        return this.getDistance()
    }, $N: function (n, t, i, r, u) {
        return t + (u - n) / (i - n) * (r - t)
    }, $O: function (n, t, i, r, u, f, e, o) {
        var s = t + f * e, h = this.$M(s, o, t, i, r, u);
        return n.valueToPoint(s, h)
    }, $P: function (n, t, i, r, u) {
        var f = new PerfectWidgetsFramework.GraphicsPath, v = this.$U(), p, w, nt, c, e;
        if (ss.canCast(v, it) && r === u) {
            var y = v, o = this.$M(t, 1, t, this.getStartWidth(), i, this.getEndWidth()), rt = n.valueToPoint(t, o), ut = n.valueToPoint(i, o);
            f.startPath(rt);
            var l = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), b = y.getStartAngle() + y.getTotalAngle() * this.getScale().valueToPercent(t), k = y.getStartAngle() + y.getTotalAngle() * this.getScale().valueToPercent(i);
            return l.add(PerfectWidgetsFramework.EllipticArcParameters.fillLowLevelParameters(o, o, ut, b, k - b, PerfectWidgetsFramework.AbstractTransformation.noTrasformation)), f.addPathElement(l), p = this.$M(i, -1, t, this.getStartWidth(), i, this.getEndWidth()), w = n.valueToPoint(i, p), f.addLine(w), o = this.$M(t, -1, t, this.getStartWidth(), i, this.getEndWidth()), nt = n.valueToPoint(t, o), l = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), l.add(PerfectWidgetsFramework.EllipticArcParameters.fillLowLevelParameters(o, o, nt, k, b - k, PerfectWidgetsFramework.AbstractTransformation.noTrasformation)), f.addPathElement(l), f.terminate(), f.setBounds(this.getBoundedBox()), f
        }
        if (ss.canCast(v, st)) {
            var yt = v, d = 0, h = this.getValue();
            h.getKind() ? d = h.getKind() === 1 ? h.getValue() : h.getKind() === 2 ? h.getValue() * .01 * this.getMaxValue() : this.getMaxValue() * .5 : h.getValue() || (d = this.getMaxValue());
            var ft = this.getMinValue(), et = this.getMaxValue(), tt = d / (et - ft), ot = this.$M(t, 1, t, this.getStartWidth(), i, this.getEndWidth()), ht = n.valueToPoint(t, ot), ct = this.$M(tt * (i - t) + t, 1, t, this.getStartWidth(), i, this.getEndWidth()), lt = n.valueToPoint(i, ct), p = this.$M(tt * (i - t) + t, -1, t, this.getStartWidth(), i, this.getEndWidth()), w = n.valueToPoint(i, p), at = this.$M(t, -1, t, this.getStartWidth(), i, this.getEndWidth()), vt = n.valueToPoint(t, at);
            return f.startPath(ht), f.addLine(lt), f.addLine(w), f.addLine(vt), f.terminate(), f.setBounds(this.getBoundedBox()), f
        }
        var s = Math.floor(this.$L()), g = (i - t) / (s - 1), a = new Array(s), pt = (u - r) / (s - 1);
        for (e = 0; e < s; e++)a[e] = PerfectWidgetsFramework.Unit.vectorToPixel(this.$O(n, t, r, i, u, g, e, 1));
        for (f.startPath(this.$O(n, t, r, i, u, g, 0, -1)), c = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), c.addRange(a), f.addPathElement(c), a = new Array(s), e = s - 1; e >= 0; e--)a[s - 1 - e] = PerfectWidgetsFramework.Unit.vectorToPixel(this.$O(n, t, r, i, u, g, e, -1));
        return c = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), c.addRange(a), f.addPathElement(c), f.setBounds(this.getBoundedBox()), f.terminate(), f
    }, getHitTest: function (n) {
        var t = this.getScale(), o, b, r, f, s, e, g;
        if (t != null) {
            var i = this.getStartWidth(), h = this.getEndWidth(), u = this.getDistance(), c = this.getMinValue(), l = this.getMaxValue(), v = ss.safeCast(t.getParent(), it);
            if (v != null) {
                if (o = t.pointToValue(n), r = this.getSmartValue(this.getValue(), l), o > r)return!1;
                f = i, i !== h && (s = (h - i) / (l - c), f = s * o + i);
                var k = t.valueToPoint(o, u), d = t.valueToPoint(o, u + f), a = v.getCenter(), y = k.minus(a).getLength(), p = d.minus(a).getLength(), w = n.minus(a).getLength();
                return Math.min(y, p) <= w && Math.max(y, p) >= w
            }
            if (b = ss.safeCast(t.getParent(), st), b != null)return r = this.getSmartValue(this.getValue(), l), f = i, i !== h && (s = (h - i) / (l - c), f = s * r + i), e = new Array(4), g = t.valueToPoint(r, u), e[0] = t.valueToPoint(c, u), e[1] = t.valueToPoint(c, u + i), e[2] = t.valueToPoint(r, u + f), e[3] = t.valueToPoint(r, u), PerfectWidgetsFramework.GeometryUtilities.isIncludePoint(e, n)
        }
        return rt.prototype.getHitTest.call(this, n)
    }, onPaint: function (n, t, i) {
        var r;
        if (n.setContext(this), this.onRecalculate(), this.getNeedRepaint()) {
            if (this.setNeedRepaint(!1), n.createGroup(), n.clearGroup(), r = this.getScale(), r != null) {
                var f = this.getMinValue(), e = this.getMaxValue(), u = this.getSmartValue(this.getValue(), e);
                u - f < this.$F && (u += this.$F), this.$Q(r, f, e, u, n, t, i)
            }
            n.endGroup()
        }
    }, $Q: function (n, t, i, r, u, f, e) {
        f = this.$V();
        var o = this.$N(t, this.getStartWidth(), i, this.getEndWidth(), r), s = this.$P(n, t, r, this.getStartWidth(), o);
        this.setSuffix("_rangedLevel"), u.createGroup(), u.clearGroup(), r >= t && (this.setSuffix("_Back"), u.drawGraphicsPath(f, e, s), this.setSuffix("_Divs"), this.$R(n, t, i, r, u)), u.endGroup()
    }, $R: function (n, t, i, r, u) {
        for (var l = (i - t) / this.getDivisions(), f, o, s, h, c, e = 1; e < this.getDivisions(); e++) {
            if (f = t + l * e, f >= r)break;
            o = this.$M(f, 1, t, this.getStartWidth(), i, this.getEndWidth()), s = n.valueToPoint(f, o), o = this.$M(f, -1, t, this.getStartWidth(), i, this.getEndWidth()), h = n.valueToPoint(f, o), c = [s, h], this.setSuffix(e.toString()), u.drawLine(this.getDivisionsStroke(), c)
        }
    }, getBoundedBox: function () {
        for (var t = ss.safeCast(this.getScale(), u), e, r, f, n; t != null && !ss.canCast(t, ut);)t = t.getParent();
        if (t != null) {
            if (e = this.getMaxValue(), r = this.getSmartValue(this.getValue(), e), ss.canCast(t, st))return f = t, n = new Array(4), n[0] = f.getStartPoint().add(new PerfectWidgetsFramework.Vector(0, this.getDistance())), n[1] = f.getEndPoint().add(new PerfectWidgetsFramework.Vector(0, this.getDistance())), n[2] = n[0].add(new PerfectWidgetsFramework.Vector(0, this.getStartWidth())), n[3] = n[1].add(new PerfectWidgetsFramework.Vector(0, this.getEndWidth())), PerfectWidgetsFramework.GeometryUtilities.getPolygonBox(n);
            var i = this.getSize() + Math.abs(this.getDistance()), o = this.getScale().valueToPoint(r, 0).x - i, s = this.getScale().valueToPoint(r, 0).y - i;
            return new PerfectWidgetsFramework.VectorRectangle(o, s, i * 2, i * 2)
        }
        return PerfectWidgetsFramework.VectorRectangle.empty
    }, $U: function () {
        for (var n = ss.safeCast(this.getScale(), u); n != null && !ss.canCast(n, ut);)n = n.getParent();
        return n
    }, $V: function () {
        var t = this.getFill(), n, f, i, e;
        if (t == null && (n = new PerfectWidgetsFramework.MultiGradientFill, f = this.getColors(), f.add(new PerfectWidgetsFramework.GradientColor(this.getStartColor(), 0)), n.setColors(this.getColors()), t == null && (i = this.$U(), i != null)))if (ss.canCast(i, it)) {
            var r = i, s = this.getMinValue(), h = this.getMaxValue(), u = r.getStartAngle() + r.getTotalAngle() * this.getScale().valueToPercent(s), c = r.getStartAngle() + r.getTotalAngle() * this.getScale().valueToPercent(h);
            this.getDistance() < 0 && (u = u - 180), e = (c + u) / 2 % 360, n.setAngle(e + 90), t = n
        } else {
            var o = ss.safeCast(i, st), l = o.getStartPoint(), a = o.getEndPoint(), v = PerfectWidgetsFramework.Vector.toDegrees(a.minus(l).getRotation());
            n.setAngle(v), t = n
        }
        return t
    }},lt.getWholePath = function (n, t, i, r, u, f, e, o) {
        var s = new PerfectWidgetsFramework.GraphicsPath, a = new PerfectWidgetsFramework.Vector(i.x + r, i.y), c = new PerfectWidgetsFramework.Vector(0, t / 2), h, l, y, p;
        if (s.startPath(i.minus(c)), s.addLine(a.minus(c)), h = new PerfectWidgetsFramework.Vector(t, t), l = new PerfectWidgetsFramework.VectorRectangle(a.x - h.x / 2, a.y - h.y / 2, h.x, h.y), o === 1 ? s.addArc(l, -90, 180) : s.addLine(a.add(c)), s.addLine(i.add(c)), y = !u, f)if (p = t / (2 * n), Math.abs(p) <= 1) {
            var k = Math.asin(p), w = PerfectWidgetsFramework.Vector.toDegrees(k), v = new PerfectWidgetsFramework.Vector(n * 2, n * 2), d = Math.sqrt(n * n - t * t / 4), b = new PerfectWidgetsFramework.Vector(i.x - d, i.y).minus(new PerfectWidgetsFramework.Vector(v.x / 2, v.y / 2)), g = new PerfectWidgetsFramework.VectorRectangle(b.x, b.y, v.x, v.y);
            s.addArc(g, w, 360 - 2 * w)
        } else y = !0;
        return y && (l.x = i.x - h.x / 2, l.y = i.y - h.y / 2, e === 1 ? s.addArc(l, 90, 180) : s.addLine(i.minus(c))), s
    },lo = {getEffect3D: function () {
        return this.$G
    }, setEffect3D: function (n) {
        this.$G !== n && (this.$G = n, this.setNeedRepaint(!0))
    }, getWidth: function () {
        return this.$H
    }, setWidth: function (n) {
        this.$H !== n && (this.$H = n, this.setNeedRepaint(!0))
    }, getStartCap: function () {
        return this.$I
    }, setStartCap: function (n) {
        this.$I !== n && (this.$I = n, this.setNeedRepaint(!0))
    }, getEndCap: function () {
        return this.$J
    }, setEndCap: function (n) {
        this.$J !== n && (this.$J = n, this.setNeedRepaint(!0))
    }, getShowAsThermometer: function () {
        return this.$K
    }, setShowAsThermometer: function (n) {
        this.$K !== n && (this.$K = n, this.setNeedRepaint(!0))
    }, getPocketRadius: function () {
        return this.$L
    }, setPocketRadius: function (n) {
        this.$L !== n && (this.$L = n, this.setNeedRepaint(!0))
    }, getSize: function () {
        return Math.abs(this.$H)
    }, getHitTest: function (n) {
        var t = this.getScale();
        if (t != null) {
            var f = this.getMinValue(), i = this.getMaxValue(), e = Math.min(i, this.getSmartValue(this.getValue(), i)), r = t.valueToPoint(f, this.getDistance()), u = t.valueToPoint(i, this.getDistance()), o = r.minus(u).getLength() * t.valueToPercent(e);
            if (Math.abs(o) > .0001 || this.getShowAsThermometer())return PerfectWidgetsFramework.GeometryUtilities.isLineIncludePoint(n, r, u, this.getWidth() / 2)
        }
        return!1
    }, $M: function () {
        var h = [], c = this.getScale(), e = this.getPocketRadius(), r = this.getWidth(), k = this.getDistance(), it = this.$O(c), y = this.$P(c), n = c.valueToPoint(it, k), u = c.valueToPoint(y, k), rt = PerfectWidgetsFramework.GeometryUtilities.getTransformMatrix(n, Math.PI / 2 - u.minus(n).getRotation()), p = new PerfectWidgetsFramework.MatrixTransformation(rt), t = n, i = Math.max(r / 2, e), ut = c.valueToPercent(Math.min(y, o.$2(this.getValue(), y, this))), ft = n.minus(u).getLength() * ut, et = this.getShowAsThermometer(), ot = this.getShowAsThermometer(), st = this.getStartCap(), ht = this.getEndCap(), at = new PerfectWidgetsFramework.GraphicsPath, l, d, f, a, g, w, b, tt, s;
        if (u = new PerfectWidgetsFramework.Vector(n.x + ft, n.y), l = new PerfectWidgetsFramework.Vector(0, r / 2), d = this.$N([n.minus(l), u.minus(l), u.add(l), n.add(l)], p), h.push(d), f = new PerfectWidgetsFramework.Vector(r, r), a = new PerfectWidgetsFramework.VectorRectangle(u.x - f.x / 2, u.y - f.y / 2, f.x, f.y), ht === 1 && (g = this.$N(a.getVertice(), p), h.push(g)), w = !et, ot)if (b = r / (2 * e), Math.abs(b) <= 1)var ct = Math.asin(b), vt = PerfectWidgetsFramework.Vector.toDegrees(ct), v = new PerfectWidgetsFramework.Vector(e * 2, e * 2), lt = Math.sqrt(e * e - r * r / 4), nt = new PerfectWidgetsFramework.Vector(n.x - lt, n.y).minus(new PerfectWidgetsFramework.Vector(v.x / 2, v.y / 2)), yt = new PerfectWidgetsFramework.VectorRectangle(nt.x, nt.y, v.x, v.y); else w = !0;
        return w && (a.x = n.x - f.x / 2, a.y = n.y - f.y / 2, st === 1 && (tt = a.getVertice(), h.push(tt))), s = new Array(4), s[0] = new PerfectWidgetsFramework.Vector(t.x - i, t.y - i), s[1] = new PerfectWidgetsFramework.Vector(t.x - i, t.y + i), s[2] = new PerfectWidgetsFramework.Vector(t.x + i, t.y + i), s[3] = new PerfectWidgetsFramework.Vector(t.x + i, t.y - i), h.push(this.$N(s, p)), h
    }, $N: function (n, t) {
        for (var r = new Array(n.length), i = 0; i < n.length; i++)r[i] = t.apply(n[i]);
        return r
    }, $O: function (n) {
        return o.$2(this.getMinLimit(), n.getMinimum(), this)
    }, $P: function (n) {
        return o.$2(this.getMaxLimit(), n.getMaximum(), this)
    }, $Q: function (n, t) {
        var e = this.getFill(), h, c, f;
        if (e == null) {
            var l = n.minus(t).getLength(), r = 0, o = 0;
            this.getStartCap() === 1 && (r = this.getWidth() / 2), this.getEndCap() === 1 && (o = this.getWidth() / 2);
            var s = l + r + o, u = new PerfectWidgetsFramework.MultiGradientFill, i = u.getColors();
            for (i.add(new PerfectWidgetsFramework.GradientColor(this.getStartColor(), 0)), i.add(new PerfectWidgetsFramework.GradientColor(this.getStartColor(), r / s)), i.add(new PerfectWidgetsFramework.GradientColor(this.getEndColor(), 1)), i.add(new PerfectWidgetsFramework.GradientColor(this.getEndColor(), 1 - o / s)), u.setAngle(0), h = this.getColors(), f = 0; f < h.getCount(); f++)c = h.get(f), i.add(new PerfectWidgetsFramework.GradientColor(c.getColor(), (c.getPortion() * l + r) / s));
            u.setColors(i), e = u
        }
        return e
    }, drawLinearLevel: function (n, t, i) {
        var c = this.getScale(), tt = this.$O(c), v = this.$P(c), r = c.valueToPoint(tt, this.getDistance()), f = c.valueToPoint(v, this.getDistance()), e = c.valueToPercent(Math.min(v, o.$2(this.getValue(), v, this))), a, d, p, rt, l, u, g, w;
        if (e >= 0 && e <= 1 && Math.abs(this.getWidth()) > .001)if (a = r.minus(f).getLength() * e, Math.abs(a) > .001 || this.getShowAsThermometer()) {
            var it = PerfectWidgetsFramework.GeometryUtilities.getTransformMatrix(r, Math.PI / 2 - f.minus(r).getRotation()), b = r.minus(f).getLength(), y = lt.getWholePath(this.getPocketRadius(), this.getWidth(), r, a, this.getShowAsThermometer(), !1, this.getStartCap(), this.getEndCap()), k = lt.getWholePath(this.getPocketRadius(), this.getWidth(), r, a, this.getShowAsThermometer(), this.getShowAsThermometer(), this.getStartCap(), this.getEndCap());
            if (y.setBounds(new PerfectWidgetsFramework.VectorRectangle(r.x, r.y - this.$H / 2, b, this.$H)), k.setBounds(new PerfectWidgetsFramework.VectorRectangle(r.x, r.y - this.$H / 2, b, this.$H)), d = t == null ? o.$4(r, f, this.getEffect3D()) : t, p = t == null ? this.getFill() : null, p == null && t == null && (rt = new PerfectWidgetsFramework.SolidFill(this.getStartColor())), l = t, l == null)switch (this.getEffect3D()) {
                case 0:
                    u = new PerfectWidgetsFramework.SphericalFill, u.setStartColor(PerfectWidgetsFramework.Color.fromArgb(128, 0, 0, 0)), u.setEndColor(this.getStartColor()), u.setAngle(225), u.setDelta(.4), l = u;
                    break;
                case 1:
                    u = new PerfectWidgetsFramework.SphericalFill, u.setStartColor(this.getStartColor()), u.setEndColor(PerfectWidgetsFramework.Color.fromArgb(128, 0, 0, 0)), u.setAngle(225), u.setDelta(.4), l = u
            }
            if (g = t == null ? this.$Q(r, f) : null, w = i == null ? this.getStroke() : i, this.getShowAsThermometer()) {
                var s = r.minus(f), nt = 0, h = Math.max(this.getWidth() / 2, this.getPocketRadius());
                this.getWidth() / 2 < h && (nt = Math.sqrt(h * h - this.getWidth() * this.getWidth() / 4)), s.setLength(s.getLength() + nt), s = s.add(f), this.setSuffix("pocketFill"), n.drawCircle(p, null, s, h), this.setSuffix("pocketTransparentFill"), n.drawCircle(l, PerfectWidgetsFramework.Stroke.emptyStroke, s, h), (e < 0 || e > 1) && n.drawCircle(PerfectWidgetsFramework.Fill.emptyFill, w, s, h)
            }
            e >= 0 && e <= 1 && (this.setSuffix("_rotation"), n.startTransformation(it), this.setSuffix("colors"), n.drawGraphicsPath(g, PerfectWidgetsFramework.Stroke.emptyStroke, y), this.setSuffix("transparent"), n.drawGraphicsPath(d, PerfectWidgetsFramework.Stroke.emptyStroke, y), (t == null || i == null) && this.$R(n, r, f, e), this.setSuffix("stroke"), n.drawGraphicsPath(PerfectWidgetsFramework.Fill.emptyFill, w, k), n.endTransformation())
        } else n.clearGroup()
    }, $R: function (n, t, i, r) {
        var u;
        if (this.getDivisions()) {
            var o = 1 / this.getDivisions(), s = t.minus(i).getLength() / this.getDivisions(), h = this.getStartCap() === 1 ? 0 : 1, c = this.getDivisions() - (this.getEndCap() === 1 ? 0 : 1);
            for (u = h; u <= c; u++) {
                var l = o * u, f = new PerfectWidgetsFramework.Vector(0, this.getWidth() / 2), e = new PerfectWidgetsFramework.Vector(t.x + s * u, t.y);
                if (this.setSuffix("division" + u.toString()), n.drawLine(this.getDivisionsStroke(), [e.minus(f), e.add(f)]), l >= r)break
            }
        }
    }, onPaint: function (n) {
        n.setContext(this), this.onRecalculate(), this.getNeedRepaint() && (this.setNeedRepaint(!1), this.setSuffix("_linearLevel"), n.createGroup(), n.clearGroup(), this.drawLinearLevel(n, null, null), n.endGroup(), this.setNeedRepaint(!1))
    }},vo = {getNeedToolTip: function () {
        return this.$H
    }, setNeedToolTip: function (n) {
        this.$H = n
    }, getCurrentText: function () {
        return this.$I + ""
    }, setCurrentText: function (n) {
        this.$I !== n + "" && (this.$I = n + "", this.setSize(new PerfectWidgetsFramework.Vector(this.$I.length * 20 + 20, this.getSize().y)), this.setNeedRepaint(!0))
    }, getLocation: function () {
        return this.$J = this.getBounds().getLocation(), this.$J
    }, setLocation: function (n) {
        PerfectWidgetsFramework.Vector.equals(this.$J, n) || (this.$J = n, this.setCenter(this.$J.add(this.getSize().multiplyByNumber(.5))), this.setNeedRepaint(!0))
    }, $K: function (n) {
        var t = this.getBounds(), i = new PerfectWidgetsFramework.VectorRectangle(this.getLocation().getX() + 5, this.getLocation().getY() + 5, this.getSize().getX(), this.getSize().getY());
        this.setSuffix("shadow"), n.drawRectangle(this.$E, PerfectWidgetsFramework.Stroke.emptyStroke, i, 0), this.setSuffix("back"), n.drawRectangle(this.$D, this.$G, t, 0), this.setSuffix("txt"), n.drawText(this.$I, this.$y, this.$F, this.getCenter(), 0, 1)
    }, drawContent: function (n) {
        n.setContext(this), n.clearGroup(), this.$H && !!this.$I && (this.$K(n), this.$H = !1)
    }, onMouseMove: function () {
    }, onMouseLeave: function () {
    }},yo = {drawContent: function (n, t, i) {
        var r = this.$B();
        n.createGroup(), n.drawGraphicsPath(t, i, r), n.endGroup()
    }, $B: function () {
        var u = this.getBounds().getLocation(), f = this.getSize(), n = new PerfectWidgetsFramework.VectorRectangle(u.x, u.y, f.x, f.y).getPositiveRectangle(), c = this.getCenter(), t = new PerfectWidgetsFramework.GraphicsPath, e = new PerfectWidgetsFramework.Vector(n.width / 2, n.height / 2), l = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(n.getCenter(), e, this.getStartAngle()), v = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(n.getCenter(), e, this.getStartAngle() + this.getSweepAngle()), i, r, o;
        t.startPath(c), i = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), i.add(PerfectWidgetsFramework.GraphicsPath.buildVector(l)), t.addPathElement(i), r = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), o = PerfectWidgetsFramework.EllipticArcParameters.fillParameters(n, this.getStartAngle(), this.getSweepAngle()), r.add(o), t.addPathElement(r), t.terminate();
        var s = n.getTopLeft(), h = n.getBottomRight(), a = new PerfectWidgetsFramework.VectorRectangle(s.x, s.y, h.x, h.y);
        return t.setBounds(a), t
    }, getHitTest: function (n) {
        if (!h.prototype.getHitTest.call(this, n))return!1;
        var t = this.getRealPosition(n);
        return PerfectWidgetsFramework.GeometryUtilities.isPieIncludePoint(t, this.getBounds(), this.getAngle(), this.getStartAngle(), this.getSweepAngle(), .01)
    }},po = {getInternalRadius: function () {
        return this.$B
    }, setInternalRadius: function (n) {
        n = n > 1 ? 1 : n < 0 ? 0 : n, this.$B !== n && (this.$B = n)
    }, drawContent: function (n, t, i) {
        var r = this.$C();
        n.createGroup(), t = this.getFill(), n.drawGraphicsPath(t, i, r), n.endGroup()
    }, $C: function () {
        var f = this.getStartAngle(), t = this.getSweepAngle(), s, r, h, u;
        t < 0 && (f = this.getStartAngle() + this.getSweepAngle(), t = this.getStartAngle() - f);
        var e = PerfectWidgetsFramework.Vector.toRadians(f), o = PerfectWidgetsFramework.Vector.toRadians(f + t), c = PerfectWidgetsFramework.GeometryUtilities.getEllipseRadius(this.getBounds(), e), l = PerfectWidgetsFramework.GeometryUtilities.getEllipseRadius(this.getBounds(), o), n = this.getBounds().getCenter(), a = PerfectWidgetsFramework.Vector.fromPolar(c, e), w = new PerfectWidgetsFramework.Vector(a.x + n.x, a.y + n.y), v = PerfectWidgetsFramework.Vector.fromPolar(l, o), b = new PerfectWidgetsFramework.Vector(v.x + n.x, v.y + n.y), y = PerfectWidgetsFramework.Vector.fromPolar(c * this.getInternalRadius(), e), k = new PerfectWidgetsFramework.Vector(n.x + y.x, n.y + y.y), p = PerfectWidgetsFramework.Vector.fromPolar(l * this.getInternalRadius(), o), d = new PerfectWidgetsFramework.Vector(n.x + p.x, n.y + p.y), i = new PerfectWidgetsFramework.GraphicsPath;
        return i.startPath(w), i.setBounds(this.getBoundedBox()), s = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), r = new PerfectWidgetsFramework.EllipticArcParameters, r.setFinishPoint(PerfectWidgetsFramework.Unit.vectorToPixel(b)), r.setLargeArcFlag(t % 360 > 180 ? 1 : 0), r.setSweepFlag(t > 0 ? 1 : 0), r.setRx(PerfectWidgetsFramework.Unit.internalToPixel(this.getBounds().width / 2)), r.setRy(PerfectWidgetsFramework.Unit.internalToPixel(this.getBounds().height / 2)), s.add(r), i.addPathElement(s), i.addLine(d), h = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), u = new PerfectWidgetsFramework.EllipticArcParameters, u.setFinishPoint(PerfectWidgetsFramework.Unit.vectorToPixel(k)), u.setLargeArcFlag(t % 360 > 180 ? 1 : 0), u.setSweepFlag(t > 0 ? 0 : 1), u.setRx(PerfectWidgetsFramework.Unit.internalToPixel(this.getSize().x * this.getInternalRadius() / 2)), u.setRy(PerfectWidgetsFramework.Unit.internalToPixel(this.getSize().y * this.getInternalRadius() / 2)), h.add(u), i.addPathElement(h), i.terminate(), i
    }, getHitTest: function (n) {
        var f;
        if (!h.prototype.getHitTest.call(this, n))return!1;
        var i = this.getRealPosition(n), r = this._size.x / 2, u = this._size.y / 2, t = PerfectWidgetsFramework.GeometryUtilities.rotateVector(i, this.getBounds().getCenter(), PerfectWidgetsFramework.Vector.toRadians(-this._angle)).minus(this.getBounds().getCenter()), e = PerfectWidgetsFramework.GeometryUtilities.isPieIncludePoint(i, this.getBounds(), this.getAngle(), this.getStartAngle(), this.getSweepAngle(), .01);
        return e ? (f = t.x * t.x / r / r + t.y * t.y / u / u) <= 1 && f >= this.$B / 2 : !1
    }},wo = {getRadius: function () {
        return this.$y
    }, setRadius: function (n) {
        n > 0 && this.$y !== n && (this.$y = n)
    }, drawContent: function (n, t, i) {
        n.setContext(this);
        var r = this.getRadius(), u = this.getBounds().getPositiveRectangle();
        u.width < 2 * r && (r = u.width / 2), u.height < 2 * r && (r = u.height / 2), n.drawRoundedRectangle(t, i, u, r, r)
    }},bo = {getRadiusX: function () {
        return this.$y
    }, setRadiusX: function (n) {
        this.$y = n
    }, getRadiusY: function () {
        return this.$z
    }, setRadiusY: function (n) {
        this.$z = n
    }, drawContent: function () {
        throw new Error("Not implemented RoundedRectangle.DrawContent");
    }, getBoundedBox: function () {
        throw new Error("Not implemented RoundedRectangle.GetBOundedBox");
    }, getHitTest: function () {
        throw new Error("Not implemented RoundedRectangle.GetHitTest");
    }},ko = {drawContent: function (n, t, i) {
        n.drawGraphicsPath(t, i, this.$B())
    }, $B: function () {
        var n = new PerfectWidgetsFramework.GraphicsPath, t = this.getBounds(), u = this.getSize(), f = t.getTopLeft(), h = new PerfectWidgetsFramework.VectorRectangle(f.x, f.y, u.x, u.y).getPositiveRectangle(), e = PerfectWidgetsFramework.Vector.toRadians(this.getStartAngle()), o = PerfectWidgetsFramework.Vector.toRadians(this.getStartAngle() + this.getSweepAngle()), c = PerfectWidgetsFramework.Vector.fromPolar(PerfectWidgetsFramework.GeometryUtilities.getEllipseRadius(t, e), e).add(t.getCenter()), l = PerfectWidgetsFramework.Vector.fromPolar(PerfectWidgetsFramework.GeometryUtilities.getEllipseRadius(t, o), o).add(t.getCenter()), i, s, r;
        return n.startPath(c), i = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.ellipticalArc), s = PerfectWidgetsFramework.EllipticArcParameters.fillParameters(h, this.getStartAngle(), this.getSweepAngle()), i.add(s), n.addPathElement(i), r = new PerfectWidgetsFramework.PathElementCollection(PerfectWidgetsFramework.GraphicsPathElementType.lineTo), r.add(PerfectWidgetsFramework.GraphicsPath.buildVector(l)), n.addPathElement(r), n.terminate(), n.setBounds(this.getBoundedBox()), n
    }, getHitTest: function (n) {
        var c;
        if (!h.prototype.getHitTest.call(this, n))return!1;
        var f = this.getRealPosition(n), i = this._size.x / 2, r = this._size.y / 2, u = PerfectWidgetsFramework.GeometryUtilities.rotateVector(f, this.getBounds().getCenter(), PerfectWidgetsFramework.Vector.toRadians(-this._angle)).minus(this.getBounds().getCenter()), e = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(this.getCenter(), new PerfectWidgetsFramework.Vector(i, r), this.getStartAngle()), o = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(this.getCenter(), new PerfectWidgetsFramework.Vector(i, r), this.getStartAngle() + this.getSweepAngle()), s = o.minus(e), t = f.minus(e);
        return t = PerfectWidgetsFramework.GeometryUtilities.rotateVector(t, new PerfectWidgetsFramework.Vector(0, 0), -s.getRotation()), this.getSweepAngle() < 0 && (t.y = -t.y), (c = u.x * u.x / i / i + u.y * u.y / r / r) <= 1 && t.y < 0
    }},go = ss.module("PerfectWidgetsModel", {ElementPainter: [o, hi, null], ViewTransformation: [rh, re, PerfectWidgetsFramework.AbstractTransformation]}, {AnimationState: {disabled: 1, dragAndDrop: 2, stoped: 4, started: 8}, BevelStyle: {none: 0, flat: 1, single: 2, doubled: 3, raised: 4, lowered: 5, doubleRaised: 6, doubleLowered: 7, frameRaised: 8, frameLowered: 9}, NotchesStyle: {raised: 0, lowered: 1, flat: 2}, SegmentType: {none: 0, top: 1, bottom: 2, leftTop: 4, rightTop: 8, leftBottom: 16, rightBottom: 32, middle: 64, all: 127}, AlignmentMode: {far: 0, near: 1, center: 2}, RepaintType: {none: 0, rotate: 1, full: 2}, ShapeDirection: {up: 0, down: 1, left: 2, right: 3}, LineDirection: {slash: 0, backSlash: 1}, Effect3D: {raised: 0, lowered: 1, flat: 2}, CapStyle: {flat: 0, rounded: 1}, RectangleBevelDrawingStyle: {sharp: 0, smooth: 1}, GuideDirection: {free: 0, bottomToTop: 1, topToBottom: 2, leftToRight: 3, rightToLeft: 4}, ScaleKind: {excludeMinimum: 0, excludeMaximum: 1, includeBoth: 1}, ScaleDocking: {none: 0, inside: 1, outside: 2, center: 3}, JointDocking: {none: 0, center: 1, left: 2, right: 3, top: 4, bottom: 5, leftBottom: 6, leftTop: 7, rightBottom: 8, rightTop: 9}, ShowMode: {showBoth: 0, showLeft: 1, showRigth: 2}, TextRotationMode: {screen: 0, scale: 1}, LabelPosition: {near: 0, center: 1, far: 2}, SmartValueKind: {auto: 0, constant: 1, percent: 2}, StringAlignment: {near: 0, center: 1, far: 2}, SubTicksPosition: {near: 0, center: 1, far: 2}, IAnimatable: [gt], ILinkedSupported: [ni], IScale: [a], IScaleElement: [tt], ISlider: [ti], ITrajectory: [ut], IPainter: [ns], EasingFunctions: [i, ii, null], AbstractAnimation: [at, ri, null], Colorizer: [ts, ui, null], CornerRadiuses: [ft, fi, null], Shadow: [l, ei, null], ShapeBase: [n, oi, null], TextFormat: [is, si, null], LabelInfo: [vt, ci, null], NeedlePoint: [li, ai, null], NeedlePointCollection: [rs, vi, null], SmartValue: [r, yi, null], TextItem: [us, pi, null], WidgetElement: [t, wi, null], Bevel: [et, bi, null], ElementsCollection: [ki, di, null], Parameter: [fs, gi, null], ParameterCollection: [es, nr, null], DigitPainter: [yt, tr, null], ValuePathPair: [pt, ir, null], ManipulationArguments: [os, rr, null], ManipulationDelta: [hs, ur, null], BrowserStrategy: [d, fr, null], Tool: [cs, er, null], AbstractView: [ls, or, null], ViewManager: [as, sr, null], ManualAnimation: [hr, cr, at], Circle: [vs, lr, t], CircularShape: [v, ar, t], CustomBevel: [vr, yr, et], RectangleShape: [pr, wr, n], EllipseShape: [br, kr, n], RoundRectangleShape: [dr, gr, n], TriangleShape: [nu, tu, n], ArrowShape: [iu, ru, n], RectTriangleShape: [uu, fu, n], DiamondShape: [eu, ou, n], ParallelogramShape: [su, hu, n], StarShape: [cu, lu, n], CrossShape: [ys, au, n], LineShape: [vu, yu, n], StandardBevel: [ps, pu, et], LineElement: [p, wu, t], ScaleElement: [e, bu, t, tt], SimpleRectangleElement: [ht, ku, t], Composite: [u, du, t], GeneralDigitStyle: [gu, nf, yt], ButtonBase: [k, tf, u], CircularNotches: [ws, rf, v], Group: [bs, uf, u], LinearNotches: [ks, ff, p], Spring: [ds, ef, p], DockableTrajectoryBase: [ot, of, u, ut], Gear: [gs, sf, v], Highlight: [nh, hf, v], Line: [th, cf, p], Needle: [ih, lf, p], Polygon: [wt, af, v], PropertyEventArgs: [bt, vf, ss.EventArgs], RectangleElement: [f, yf, ht], Scale: [y, pf, u, a], ScaleLabelsBase: [c, wf, e], ScaleMarksBase: [w, bf, e], SliderBase: [b, kf, u, ti, gt, ni], ValuePresenterScaleElement: [g, df, e], NeedRepaintChangedEventArgs: [gf, ne, ss.EventArgs], ElementEventArgs: [kt, te, ss.EventArgs], Instrument: [ct, ie, u], ArcBase: [h, ue, f], BevelElement: [fe, ee, f], DigitalText: [uh, oe, f], Frame: [fh, se, f], Odometer: [eh, he, f], Digits: [s, ce, f], PushButton: [oh, le, k], ScaleMarks: [sh, ae, w], ScaleTitle: [hh, ve, c], Tank: [ye, pe, g], TrialLabel: [ch, we, f], CustomLabels: [lh, be, c], Ellipse: [ah, ke, f], Guide: [st, de, ot], Joint: [it, ge, ot], Label: [vh, no, f], LevelBase: [rt, to, g], Picture: [yh, io, f], PictureSet: [ph, ro, f], Rectangle: [nt, uo, f], ScaleLabels: [wh, fo, c], Slider: [dt, eo, b], Star: [bh, oo, wt], Ticks: [kh, so, w], Arc: [dh, ho, h], RangedLevel: [gh, co, rt], LinearLevel: [lt, lo, rt], ToolTipElement: [ao, vo, nt], Pie: [nc, yo, h], RingSector: [tc, po, h], RoundedRectangle: [ic, wo, nt], RoundedVectorRectangle: [rc, bo, nt], TruncatedEllipse: [uc, ko, h]}),i.$0 = 1.70158,n.$0 = [],n.$1 = !1,r.auto = new r,r.auto._kind = 0,r.auto._value = 0,t.$e = {},t.$f = {},t.$g = {},t.$h = {},t.$i = {},t.$j = {},d.$0 = null,bt.empty = new bt,c.$V = 500,w._maxLabelsCount = 500,s.$K = {},s.$K["0"] = 63,s.$K["1"] = 40,s.$K["2"] = 91,s.$K["3"] = 107,s.$K["4"] = 108,s.$K["5"] = 103,s.$K["6"] = 119,s.$K["7"] = 41,s.$K["8"] = 127,s.$K["9"] = 111,s.$K[" "] = 0,s.$K["-"] = 64,s.$L = {},ye.minDepthValue = .01,go
}(this);
"use strict";
var PerfectWidgets = function () {
    function u() {
    }

    function i() {
    }

    function t(n) {
        this.$0 = n
    }

    function o(n, i, r) {
        this.$2 = null, this.$0 = new t(n), this.$4(this.$0.createSvg(i, r))
    }

    function n(t) {
        this.c$3 = !0, PerfectWidgetsModel.AbstractView.call(this), this.c$2 = t, this.setOrigin(n.c$1()), this.setScale(n.c$0())
    }

    function c() {
        this.c$0 = !1, this.c$1 = null, PerfectWidgetsModel.Tool.call(this)
    }

    function r(t, i, r, f, e) {
        var h, s, a, l;
        this.c$g = PerfectWidgetsFramework.Vector.empty, this.c$h = PerfectWidgetsFramework.VectorRectangle.empty, this.c$i = null, this.c$j = new u, this.c$l = !0, this.c$m = !0, PerfectWidgetsModel.ViewManager.call(this), h = t, this.c$q = {}, r != null && ("keepRatio"in r && (this.c$m = r.keepRatio, this.c$m == null && (this.c$m = !0)), "uniqueClassName"in r && (h = r.uniqueClassName), "interactive"in r && (this.c$l = r.interactive)), f == null && (f = new c), s = null, e == null && (s = this.c$j.parse(i, r), s.setUniqueClassName(h), s.setInvalidationHandler(ss.bind("c$t", this)), s.endInitializing(), e = new n(s)), this.setTool(f), this.setView(e), this.c$f = document.getElementById(t), this.c$x(), a = this.c$w(), document.body.style.cursor = "default", this.c$f.setAttribute("onselectstart", "return false"), this.c$n = ss.bind("pointingDeviceEvent", this), this.c$o = ss.bind("pointingDeviceEvent", this), this.c$p = ss.bind("pointingDeviceEvent", this), window.addEventListener("mousedown", this.c$n, !1), window.addEventListener("mouseup", this.c$o, !1), window.addEventListener("mousemove", this.c$p, !1), window.addEventListener("touchstart", this.c$n, !1), window.addEventListener("touchend", this.c$o, !1), window.addEventListener("touchmove", this.c$p, !1), window.addEventListener("MSPointerDown", this.c$n, !1), window.addEventListener("MSPointerUp", this.c$o, !1), window.addEventListener("MSPointerMove", this.c$p, !1), l = this.c$r(), this.c$i = new o(t, this.c$g, this.c$h), this.c$i.setContext(s), this.c$i.startTransformation(PerfectWidgetsFramework.Matrix.eye(3)), s.setNeedRepaint(!0), s.refreshElement(), l != null && e.changeZoom(new PerfectWidgetsFramework.Vector(0, 0), l)
    }

    var f, e, s, h, l, a, v;
    return i.translate = function (n) {
        switch (n) {
            case"DashLenght":
                return"DashLength";
            case"DotLenght":
                return"DotLength";
            case"SpaceLenght":
                return"SpaceLength";
            default:
                return n
        }
    }, f = {}, t.$v = function (n) {
        while (n.hasChildNodes())n.removeChild(n.lastChild)
    }, e = {$8: function (n) {
        var t, i;
        if (n == null)return"";
        for (t = new ss.StringBuilder, i = 0; i < n.length; i++)t.append(PerfectWidgetsFramework.Unit.internalToPixel(n[i].x).toString()), t.append(","), t.append(PerfectWidgetsFramework.Unit.internalToPixel(n[i].y).toString()), t.append(" ");
        return t.toString()
    }, $9: function (n, t) {
        t != null && t.getWidth() !== 0 && (n.stroke = PerfectWidgetsFramework.ColorTranslator.toSvg(t.getColor()), n["stroke-opacity"] = t.getStyle() === PerfectWidgetsFramework.LineStyle.none ? "0" : this.$o(t.getColor()), n["stroke-width"] = PerfectWidgetsFramework.Unit.internalToPixel(t.getWidth()).toString(), t.getStyle() !== PerfectWidgetsFramework.LineStyle.none && t.getStyle() !== PerfectWidgetsFramework.LineStyle.solid && (n["stroke-dasharray"] = this.$a(t)), n["stroke-linecap"] = "butt")
    }, $a: function (n) {
        switch (n.getStyle()) {
            case PerfectWidgetsFramework.LineStyle.dash:
                return n.getDashLength() + ", " + n.getSpaceLenght();
            case PerfectWidgetsFramework.LineStyle.dashDot:
                return n.getDashLength() + ", " + n.getSpaceLenght() + ", " + n.getDotLength() + ", " + n.getSpaceLenght();
            case PerfectWidgetsFramework.LineStyle.dashDotDot:
                return n.getDashLength() + ", " + n.getSpaceLenght() + ", " + n.getDotLength() + ", " + n.getSpaceLenght() + ", " + n.getDotLength() + ", " + n.getSpaceLenght();
            case PerfectWidgetsFramework.LineStyle.dot:
                return n.getDotLength() + ", " + n.getSpaceLenght();
            default:
                throw new Error("Unknow DashStyle");
        }
    }, $b: function (n) {
        var t = document.getElementById(n);
        if (t != null) {
            while (t.hasChildNodes())t.removeChild(t.lastChild);
            this.$7.removeChild(t)
        }
    }, $c: function (n, t, i, r) {
        var u, f;
        if (t == null || ss.canCast(t, PerfectWidgetsFramework.EmptyFill)) {
            n.fill = "none";
            return
        }
        if (ss.canCast(t, PerfectWidgetsFramework.SolidFill)) {
            u = t.color, n["fill-opacity"] = this.$o(u), n.fill = PerfectWidgetsFramework.ColorTranslator.toSvg(u);
            return
        }
        if (ss.canCast(t, PerfectWidgetsFramework.LinearGradientFill)) {
            this.$b(r), this.$h(n, t, i, r);
            return
        }
        if (ss.canCast(t, PerfectWidgetsFramework.MultiGradientFill)) {
            this.$b(r), this.$f(n, t, i, r);
            return
        }
        if (ss.canCast(t, PerfectWidgetsFramework.SphericalFill)) {
            this.$b(r), this.$e(n, t, i, r);
            return
        }
        f = t.getReplaceColor(), n["fill-opacity"] = this.$o(f), n.fill = PerfectWidgetsFramework.ColorTranslator.toSvg(f);
        return
    }, $d: function (n) {
        return"url(#" + n + ")"
    }, $e: function (n, t, i, r) {
        var u = {}, e;
        u.id = r, u.gradientUnits = "userSpaceOnUse";
        var o = PerfectWidgetsFramework.Fill.getFillRectangle(i, t.getDelta(), t.getAngle()), f = o.getCenter(), s = o.width / 2;
        u.cx = PerfectWidgetsFramework.Unit.internalToPixel(f.x).toString(), u.cy = PerfectWidgetsFramework.Unit.internalToPixel(f.y).toString(), u.fx = PerfectWidgetsFramework.Unit.internalToPixel(f.x).toString(), u.fy = PerfectWidgetsFramework.Unit.internalToPixel(f.y).toString(), u.r = PerfectWidgetsFramework.Unit.internalToPixel(s).toString(), e = this.$l("http://www.w3.org/2000/svg", "radialGradient", u), this.$i(e, 0, t.getEndColor()), this.$i(e, 1, t.getStartColor()), this.$7.appendChild(e), n.fill = this.$d(r)
    }, $f: function (n, t, i, r) {
        var u = {}, e, o, f, s;
        u.id = r, u.gradientUnits = "userSpaceOnUse";
        var h = this.$g(i, t.getAngle() + t.getAdditionalAngle()), c = i.getCenter().minus(h.divideByNumber(2)), l = i.getCenter().add(h.divideByNumber(2));
        for (u.x1 = PerfectWidgetsFramework.Unit.internalToPixel(c.x), u.y1 = PerfectWidgetsFramework.Unit.internalToPixel(c.y), u.x2 = PerfectWidgetsFramework.Unit.internalToPixel(l.x), u.y2 = PerfectWidgetsFramework.Unit.internalToPixel(l.y), e = this.$l("http://www.w3.org/2000/svg", "linearGradient", u), o = t.getColors(), f = 0; f < o.getCount(); f++)s = o.get(f), this.$i(e, s.getPortion(), s.getColor());
        this.$7.appendChild(e), n.fill = this.$d(r)
    }, $g: function (n, t) {
        var i = n.getCenter(), s = i, f = t % 360 <= 180 ? t % 180 < 90 ? n.getBottomRight() : n.getBottomLeft() : t % 180 <= 90 ? n.getTopLeft() : n.getTopRight();
        var r = Math.cos(t / 180 * Math.PI), u = Math.sin(t / 180 * Math.PI), e = i.y * r * r + f.y * u * u + (f.x - i.x) * u * r, o = (f.y - i.y) * u * r + i.x * u * u + f.x * r * r;
        return new PerfectWidgetsFramework.Vector((o - i.x) * 2, (e - i.y) * 2)
    }, $h: function (n, t, i, r) {
        var u = {}, f, e;
        u.id = r, u.gradientUnits = "userSpaceOnUse", f = t.getAngle(), f === 180 && (f = 179.9), f === -180 && (f = -179.9);
        var c = f + t.getAdditionalAngle(), o = this.$g(i, c), s = i.getCenter().minus(o.divideByNumber(2)), h = i.getCenter().add(o.divideByNumber(2));
        u.x1 = PerfectWidgetsFramework.Unit.internalToPixel(s.x), u.y1 = PerfectWidgetsFramework.Unit.internalToPixel(s.y), u.x2 = PerfectWidgetsFramework.Unit.internalToPixel(h.x), u.y2 = PerfectWidgetsFramework.Unit.internalToPixel(h.y), e = this.$l("http://www.w3.org/2000/svg", "linearGradient", u), this.$i(e, 0, t.getStartColor()), this.$i(e, 1, t.getEndColor()), this.$7.appendChild(e), n.fill = this.$d(r)
    }, $i: function (n, t, i) {
        var r = {}, u;
        r.offset = t.toString(), r["stop-color"] = PerfectWidgetsFramework.ColorTranslator.toSvg(i), r["stop-opacity"] = i.a() / 255, u = this.$l("http://www.w3.org/2000/svg", "stop", r), n.appendChild(u)
    }, $j: function (n, t, i, r, u, f) {
        var e = new ss.StringBuilder("M ");
        return this.$k(e, n), e.append("A "), this.$k(e, i), e.append(r.toString()), e.append(" "), e.append(u.toString()), e.append(" "), e.append(f.toString()), e.append(" "), this.$k(e, t), e
    }, $k: function (n, t) {
        n != null && (n.append(PerfectWidgetsFramework.Unit.internalToPixel(t.x).toString()), n.append(" "), n.append(PerfectWidgetsFramework.Unit.internalToPixel(t.y).toString()), n.append(" "))
    }, $l: function (n, t, i) {
        var u = document.createElementNS(n, t), f, r;
        if (i != null && ss.keyCount(i) > 0)for (f = ss.enumerate(ss.keys(i)); f.moveNext();)if (r = f.current, ss.startsWith(r, "@")) {
            var e = r.lastIndexOf(":"), o = r.substr(1, e - 1), s = r.substr(e + 1);
            u.setAttributeNS(o, s, i[r])
        } else u.setAttribute(r, i[r]);
        return u
    }, $m: function (n, t) {
        var r, i;
        if (t != null && ss.keyCount(t) > 0)for (r = ss.enumerate(ss.keys(t)); r.moveNext();)if (i = r.current, ss.startsWith(i, "@")) {
            var u = i.lastIndexOf(":"), f = i.substr(1, u - 1), e = i.substr(u + 1);
            n.setAttributeNS(f, e, t[i])
        } else n.setAttribute(i, t[i])
    }, $n: function (n, t) {
        var r, u, f, i;
        if (t != null) {
            if (r = "", ss.canCast(t, PerfectWidgetsFramework.TranslateTransformation))u = PerfectWidgetsFramework.Unit.vectorToPixel(t.getTranslation()), r = "translate(" + u.x + ", " + u.y + ")"; else if (ss.canCast(t, PerfectWidgetsFramework.ScaleTransformation))f = t.getScale(), r = "scale(" + f.x + ", " + f.y + ")"; else if (ss.canCast(t, PerfectWidgetsFramework.RotateTransformation)) {
                var e = t, o = e.getAngle(), s = PerfectWidgetsFramework.Unit.internalToPixel(e.getCenter().x), h = PerfectWidgetsFramework.Unit.internalToPixel(e.getCenter().y);
                r = "rotate(" + o + ", " + s + ", " + h + ")"
            } else ss.canCast(t, PerfectWidgetsFramework.MatrixTransformation) && (i = t.getTransformationMatrix(), r = "matrix(" + i.get(0, 0) + " " + i.get(1, 0) + " " + i.get(0, 1) + " " + i.get(1, 1) + " " + PerfectWidgetsFramework.Unit.internalToPixel(i.get(0, 2)) + " " + PerfectWidgetsFramework.Unit.internalToPixel(i.get(1, 2)) + ")");
            n.setAttribute("transform", r)
        }
    }, createSvg: function (n, t) {
        var r = {}, i;
        if (!n.isEmpty() && (n.x <= 0 || n.y <= 0))throw new Error('ExceptionBuilder.ArgumentVectorHasNegativeOrZeroCoordinate("size")');
        return r.width = n.x.toString(), r.height = n.y.toString(), r.id = this.$0 + "_svg", t.isEmpty() || (i = new ss.StringBuilder(t.getLeft().toString()), i.append(" "), i.append(t.getTop().toString()), i.append(" "), i.append(t.width.toString()), i.append(" "), i.append(t.height.toString()), r.viewBox = i.toString()), r.version = "1.1", r.xmlns = "http://www.w3.org/2000/svg", this.$7 = this.$t(), this.$6 = this.$l("http://www.w3.org/2000/svg", "svg", r), this.$6.appendChild(this.$7), document.getElementById(this.$0).appendChild(this.$6), this.$6
    }, rescale: function (n, t) {
        var r = document.getElementById(this.$0 + "_svg"), i;
        r != null && (n != null && (r.setAttribute("width", n.x), r.setAttribute("height", n.y)), t.isEmpty() || (i = new ss.StringBuilder(t.getLeft().toString()), i.append(" "), i.append(t.getTop().toString()), i.append(" "), i.append(t.width.toString()), i.append(" "), i.append(t.height.toString()), r.setAttribute("viewBox", i.toString())))
    }, getCurrentGroup: function (n) {
        return document.getElementById(n)
    }, startGroup: function (n, t, i, r) {
        var u = null, e = !1, f = {};
        return u = document.getElementById(n), (e = u != null) || (f.id = n, u = this.$l("http://www.w3.org/2000/svg", "g", f), t.appendChild(u)), r ? u.setAttribute("visibility", "visible") : u.setAttribute("visibility", "hidden"), this.$n(u, i), u
    }, writePolyline: function (n, t, i, r) {
        var f = document.getElementById(i), u = {};
        return this.$9(u, t), u.points = this.$8(n), u.id = i, r != null && (u["class"] = r.join(" ")), f != null ? (this.$m(f, u), null) : this.$l("http://www.w3.org/2000/svg", "polyline", u)
    }, writePolygon: function (n, t, i, r, u) {
        var e = document.getElementById(r), o = PerfectWidgetsFramework.GeometryUtilities.getPolygonBox(n), f = {};
        return this.$c(f, t, o, r + "_fill"), this.$9(f, i), f.points = this.$8(n), f.id = r, u != null && (f["class"] = u.join(" ")), e != null ? (this.$m(e, f), null) : this.$l("http://www.w3.org/2000/svg", "polygon", f)
    }, $o: function (n) {
        return n.isKnownColor() && n.toKnownColor() !== PerfectWidgetsFramework.KnownColor.transparent ? 1 : n.a() / 255
    }, writeRect: function (n, t, i, r, u, f) {
        var s = document.getElementById(u), e = {};
        this.$c(e, i, n, u + "_fill"), this.$9(e, r);
        var h = PerfectWidgetsFramework.Unit.internalToPixel(n.x), c = PerfectWidgetsFramework.Unit.internalToPixel(n.y), l = Math.abs(PerfectWidgetsFramework.Unit.internalToPixel(n.width)), a = Math.abs(PerfectWidgetsFramework.Unit.internalToPixel(n.height)), o = new ss.StringBuilder("rotate(");
        return o.append(t.toString()), o.append(" "), o.append(h + l / 2), o.append(" "), o.append(c + a / 2), o.append(")"), e.transform = o.toString(), e.x = h.toString(), e.y = c.toString(), e.width = l.toString(), e.height = a.toString(), e.id = u, f != null && (e["class"] = f.join(" ")), s != null ? (this.$m(s, e), null) : this.$l("http://www.w3.org/2000/svg", "rect", e)
    }, writeRoundedRect: function (n, t, i, r, u, f, e) {
        var s = document.getElementById(f), o = {};
        this.$c(o, r, n, f + "_fill"), this.$9(o, u);
        var h = PerfectWidgetsFramework.Unit.internalToPixel(n.x), c = PerfectWidgetsFramework.Unit.internalToPixel(n.y), l = Math.abs(PerfectWidgetsFramework.Unit.internalToPixel(n.width)), a = Math.abs(PerfectWidgetsFramework.Unit.internalToPixel(n.height));
        return o.x = h.toString(), o.y = c.toString(), o.width = l.toString(), o.height = a.toString(), o.id = f, o.rx = PerfectWidgetsFramework.Unit.internalToPixel(t).toString(), o.ry = PerfectWidgetsFramework.Unit.internalToPixel(i).toString(), e != null && (o["class"] = e.join(" ")), s != null ? (this.$m(s, o), null) : this.$l("http://www.w3.org/2000/svg", "rect", o)
    }, writeArc: function (n, t, i, r, u, f, e, o, s) {
        var c = document.getElementById(o), h = {};
        return this.$9(h, e), h.d = this.$j(n, t, i, r, u, f).toString(), h.id = o, s != null && (h["class"] = s.join(" ")), c != null ? (this.$m(c, h), null) : this.$l("http://www.w3.org/2000/svg", "path", h)
    }, writeCircle: function (n, t, i, r, u, f) {
        var o = document.getElementById(u), s = new PerfectWidgetsFramework.VectorRectangle(n.x - t, n.y - t, 2 * t, 2 * t), e = {};
        return this.$c(e, i, s, u + "_fill"), this.$9(e, r), e.cx = PerfectWidgetsFramework.Unit.internalToPixel(n.x).toString(), e.cy = PerfectWidgetsFramework.Unit.internalToPixel(n.y).toString(), e.r = PerfectWidgetsFramework.Unit.internalToPixel(t).toString(), e.id = u, f != null && (e["class"] = f.join(" ")), o != null ? (this.$m(o, e), null) : this.$l("http://www.w3.org/2000/svg", "circle", e)
    }, writeEllipse: function (n, t, i, r, u, f, e) {
        var h = document.getElementById(f), c = new PerfectWidgetsFramework.VectorRectangle(n.x - t.x, n.y - t.y, t.x * 2, t.y * 2), o = {}, s;
        return this.$c(o, r, c, f + "_fill"), s = new ss.StringBuilder("rotate("), s.append(i.toString()), s.append(")"), this.$9(o, u), o.transform = s.toString(), o.cx = PerfectWidgetsFramework.Unit.internalToPixel(n.x).toString(), o.cy = PerfectWidgetsFramework.Unit.internalToPixel(n.y).toString(), o.rx = PerfectWidgetsFramework.Unit.internalToPixel(t.x).toString(), o.ry = PerfectWidgetsFramework.Unit.internalToPixel(t.y).toString(), o.id = f, e != null && (o["class"] = e.join(" ")), h != null ? (this.$m(h, o), null) : this.$l("http://www.w3.org/2000/svg", "ellipse", o)
    }, writePie: function (n, t, i, r, u, f, e, o, s, h, c) {
        var v = document.getElementById(h), l = {}, a;
        return this.$c(l, o, PerfectWidgetsFramework.VectorRectangle.empty, h + "_fill"), a = this.$j(n, t, i, r, u, f), a.append(" L "), this.$k(a, e), a.append("Z"), this.$9(l, s), l.d = a.toString(), l.id = h, c != null && (l["class"] = c.join(" ")), v != null ? (this.$m(v, l), null) : this.$l("http://www.w3.org/2000/svg", "path", l)
    }, writeGraphicsPath: function (n, t, i, r, u) {
        var e = document.getElementById(r), f = {};
        return this.$c(f, t, n.getBounds(), r + "_fill"), this.$9(f, i), f.id = r, f.d = n.toString(), u != null && (f["class"] = u.join(" ")), e == null ? this.$l("http://www.w3.org/2000/svg", "path", f) : (this.$m(e, f), null)
    }, setSmoothMode: function (n) {
        var t = {};
        return n ? (t["color-interpolation"] = "sRGB", t["color-interpolation-filters"] = "sRGB", t["color-rendering"] = "optimizeQuality", t["shape-rendering"] = "geometricPrecision", t["text-rendering"] = "geometricPrecision", t["image-rendering"] = "optimizeQuality") : (t["color-interpolation"] = "linearRGB", t["color-interpolation-filters"] = "linearRGB", t["color-rendering"] = "optimizeSpeed", t["shape-rendering"] = "optimizeSpeed", t["text-rendering"] = "optimizeSpeed", t["image-rendering"] = "optimizeSpeed"), this.$l("http://www.w3.org/2000/svg", "g", t)
    }, createTransformationGroup: function (n) {
        if (n == null)return null;
        var i = {}, t = new ss.StringBuilder;
        return t.append("matrix("), t.append(n.get(0, 0)), t.append(" "), t.append(n.get(1, 0)), t.append(" "), t.append(n.get(0, 1)), t.append(" "), t.append(n.get(1, 1)), t.append(" "), t.append(n.get(0, 2)), t.append(" "), t.append(n.get(1, 2)), t.append(")"), i.transform = t.toString(), this.$l("http://www.w3.org/2000/svg", "g", i)
    }, writeImage: function (n, t, i, r, u) {
        var e = document.getElementById(r), f;
        return n == null ? null : (f = {}, t.isEmpty() || (f.x = PerfectWidgetsFramework.Unit.internalToPixel(t.x).toString(), f.y = PerfectWidgetsFramework.Unit.internalToPixel(t.y).toString()), i.isEmpty() || (f.width = PerfectWidgetsFramework.Unit.internalToPixel(i.x).toString(), f.height = PerfectWidgetsFramework.Unit.internalToPixel(i.y).toString()), f.id = r, f["@http://www.w3.org/1999/xlink:href"] = n.getImageStream(), u != null && (f["class"] = u.join(" ")), f.preserveAspectRatio = "none", e != null ? (this.$m(e, f), null) : this.$l("http://www.w3.org/2000/svg", "image", f))
    }, writeText: function (n, i, r, u, f, e, o, s) {
        var c = document.getElementById(o), a, v, h, y, l;
        if (u == null)return null;
        a = PerfectWidgetsFramework.TextUtilities.insertMockDiv(u), v = PerfectWidgetsFramework.TextUtilities.measureText(n, u, a), PerfectWidgetsFramework.TextUtilities.deleteMockDiv(a), h = {}, y = new PerfectWidgetsFramework.VectorRectangle(i.x, i.y, v.x, v.y), this.$c(h, f, y, o + "_fill"), l = new ss.StringBuilder("translate("), this.$k(l, i), l.append(") rotate("), l.append(r.toString()), l.append(")"), h.transform = l.toString(), h["font-family"] = u.fontFamily.name, h["font-size"] = u.sizeInPoints.toString() + "pt", u.style === PerfectWidgetsFramework.FontStyle.italic && (h["font-style"] = "italic"), u.style === PerfectWidgetsFramework.FontStyle.bold && (h["font-weight"] = "bold"), u.style === PerfectWidgetsFramework.FontStyle.underline ? h["text-decoration"] = "underline" : u.style === PerfectWidgetsFramework.FontStyle.strikeout && (h["text-decoration"] = "line-through");
        switch (e) {
            case PerfectWidgetsModel.StringAlignment.center:
                h["text-anchor"] = "middle";
                break;
            case PerfectWidgetsModel.StringAlignment.near:
                h["text-anchor"] = "start";
                break;
            case PerfectWidgetsModel.StringAlignment.far:
                h["text-anchor"] = "end"
        }
        return h.dy = t.$3 + "em", h.id = o, s != null && (h["class"] = s.join(" ")), c != null ? (this.$m(c, h), c.textContent = n, null) : (c = this.$l("http://www.w3.org/2000/svg", "text", h), c.textContent = n, c)
    }, writeAlignedText: function (n, t, i, r, u, f, e, o) {
        var v = [], h = document.getElementById(e), c, l, s, y, p, a;
        if (this.$s(e), c = PerfectWidgetsFramework.TextUtilities.wordWrapText(n, PerfectWidgetsFramework.Unit.internalToPixel(t.width), r), r == null)return null;
        for (l = 0; l < c.length; l++) {
            if (s = {}, this.$c(s, u, t, e + "_fill"), y = !1, PerfectWidgetsFramework.TextUtilities.stylesAreCrossing(r.style, PerfectWidgetsFramework.FontStyle.italic) && (s["font-style"] = "italic", y = !0), PerfectWidgetsFramework.TextUtilities.stylesAreCrossing(r.style, PerfectWidgetsFramework.FontStyle.bold) && (s["font-weight"] = "bold"), PerfectWidgetsFramework.TextUtilities.stylesAreCrossing(r.style, PerfectWidgetsFramework.FontStyle.underline) ? s["text-decoration"] = "underline" : PerfectWidgetsFramework.TextUtilities.stylesAreCrossing(r.style, PerfectWidgetsFramework.FontStyle.strikeout) && (s["text-decoration"] = "line-through"), p = this.$p(t, f, s, l, c.length, y), a = new ss.StringBuilder("translate("), this.$k(a, p), a.append(") rotate("), a.append(i.toString()), a.append(")"), s.transform = a.toString(), s["font-family"] = r.fontFamily.name, s["font-size"] = r.sizeInPoints.toString() + "pt", s.id = c.length === 1 ? e : e + l.toString(), o != null && (s["class"] = o.join(" ")), c.length === 1)return h != null ? (this.$m(h, s), h.textContent = n, null) : (h = this.$l("http://www.w3.org/2000/svg", "text", s), h.textContent = n, v.push(h), v);
            h = this.$l("http://www.w3.org/2000/svg", "text", s), h.textContent = c[l], v.push(h)
        }
        return v
    }, $p: function (n, t, i, r, u, f) {
        var e = 0, o = 0, s = 0, h = 0;
        switch (t) {
            case PerfectWidgetsFramework.ContentAlignment.bottomCenter:
                e = n.width / 2, o = n.height, i["text-anchor"] = "middle", f && (h = -.25 / 2), s = -.25 - (u - 1 - r);
                break;
            case PerfectWidgetsFramework.ContentAlignment.middleCenter:
                e = n.width / 2, o = n.height / 2, f && (h = -.25 / 2), s = .25 - Math.floor(u / 2) + (u + 1) % 2 * .5 + r, i["text-anchor"] = "middle";
                break;
            case PerfectWidgetsFramework.ContentAlignment.topCenter:
                e = n.width / 2, o = r, i["text-anchor"] = "middle", f && (h = -.25 / 2), s = .75 + r;
                break;
            case PerfectWidgetsFramework.ContentAlignment.bottomLeft:
                e = 0, o = n.height, s = -.25 - (u - 1 - r), i["text-anchor"] = "start";
                break;
            case PerfectWidgetsFramework.ContentAlignment.middleLeft:
                e = 0, o = n.height / 2, s = .25 - Math.floor(u / 2) + (u + 1) % 2 * .5 + r, i["text-anchor"] = "start";
                break;
            case PerfectWidgetsFramework.ContentAlignment.topLeft:
                e = 0, o = 0, s = .75 + r, i["text-anchor"] = "start";
                break;
            case PerfectWidgetsFramework.ContentAlignment.bottomRight:
                e = n.width, o = n.height, s = -.25 - (u - 1 - r), f && (h = -.25), i["text-anchor"] = "end";
                break;
            case PerfectWidgetsFramework.ContentAlignment.middleRight:
                e = n.width, o = n.height / 2, f && (h = -.25), s = .25 - Math.floor(u / 2) + (u + 1) % 2 * .5 + r, i["text-anchor"] = "end";
                break;
            case PerfectWidgetsFramework.ContentAlignment.topRight:
                e = n.width, o = 0, s = .75 + r, f && (h = -.25), i["text-anchor"] = "end"
        }
        return this.$q(i, h), this.$r(i, s), new PerfectWidgetsFramework.Vector(n.getLeft() + e, n.getTop() + o)
    }, $q: function (n, t) {
        n.dx = ss.format("{0}em", t)
    }, $r: function (n, t) {
        n.dy = ss.format("{0}em", t)
    }, $s: function (n) {
        for (var t = 0, i = document.getElementById(n + t.toString()), r; i != null;)r = i.parentNode, r.removeChild(i), t++, i = document.getElementById(n + t.toString());
        return t
    }, $t: function () {
        var n = {};
        return n.id = PerfectWidgetsFramework.Guid.newGuid(), this.$l("http://www.w3.org/2000/svg", "defs", n)
    }, reset: function () {
        while (this.$6.hasChildNodes())this.$6.removeChild(this.$6.lastChild)
    }, clip: function (n, t, i, r) {
        var u = null, e = !1, f = {};
        return u = document.getElementById(i + "_Clip"), e = u != null, e ? (this.$u(n, i), this.$m(u, f)) : (f.id = i + "_Clip", f["clip-path"] = this.$u(n, i), u = this.$l("http://www.w3.org/2000/svg", "g", f), t.appendChild(u)), r ? u.setAttribute("visibility", "visible") : u.setAttribute("visibility", "hidden"), u
    }, $u: function (n, i) {
        var r = document.getElementById(i + "_clipPath"), u = {};
        return r == null ? (u.id = i + "_clipPath", r = this.$l("http://www.w3.org/2000/svg", "clipPath", u), r.appendChild(this.$w(n)), this.$7.appendChild(r)) : (t.$v(r), r.appendChild(this.$w(n))), this.$d(i + "_clipPath")
    }, $w: function (n) {
        var i = PerfectWidgetsFramework.Unit.rectToPixel(n), t = {};
        return t.x = i.x.toString(), t.y = i.y.toString(), t.width = i.width.toString(), t.height = i.height.toString(), this.$l("http://www.w3.org/2000/svg", "rect", t)
    }}, s = {$3: function (n) {
        this.$1 == null && (this.$1 = new ss.Stack), this.$1.count > 0 && n != null && this.$1.peek().appendChild(n)
    }, $4: function (n) {
        this.$1 == null && (this.$1 = new ss.Stack), this.$1.push(n)
    }, $5: function () {
        return this.$1 != null ? this.$1.pop() : null
    }, rescale: function (n, t) {
        this.$0.rescale(n, t)
    }, drawPolygon: function (n, t, i) {
        var r = this.$0.writePolygon(i, n, t, this.$6(), this.$7());
        this.$3(r)
    }, drawRectangle: function (n, t, i, r) {
        var u = this.$0.writeRect(i, r, n, t, this.$6(), this.$7());
        this.$3(u)
    }, drawRoundedRectangle: function (n, t, i, r, u) {
        var f = this.$0.writeRoundedRect(i, r, u, n, t, this.$6(), this.$7());
        this.$3(f)
    }, drawArc: function (n, t, i, r, u) {
        var f = new PerfectWidgetsFramework.Vector(i.width / 2, i.height / 2), e = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(i.getCenter(), f, r), o = PerfectWidgetsFramework.GeometryUtilities.getEllipsePoint(i.getCenter(), f, r + u), s = this.$0.writeArc(e, o, f, 0, u % 360 > 180 ? !0 : !1, u > 0 ? !0 : !1, t, this.$6(), this.$7());
        this.$3(s)
    }, drawCircle: function (n, t, i, r) {
        var u = this.$0.writeCircle(new PerfectWidgetsFramework.Vector(i.x, i.y), r, n, t, this.$6(), this.$7());
        this.$3(u)
    }, drawEllipse: function (n, t, i) {
        var r = new PerfectWidgetsFramework.Vector(i.width / 2, i.height / 2), u = this.$0.writeEllipse(i.getCenter(), r, 0, n, t, this.$6(), this.$7());
        this.$3(u)
    }, drawGraphicsPath: function (n, t, i) {
        var r = this.$0.writeGraphicsPath(i, n, t, this.$6(), this.$7());
        this.$3(r)
    }, drawLine: function (n, t) {
        var i = this.$0.writePolyline(t, n, this.$6(), this.$7());
        this.$3(i)
    }, drawImage: function (n, t) {
        var i = this.$0.writeImage(n, new PerfectWidgetsFramework.Vector(t.x, t.y), new PerfectWidgetsFramework.Vector(t.width, t.height), this.$6(), this.$7());
        i != null && this.$3(i)
    }, drawText: function (n, t, i, r, u, f) {
        var e = this.$0.writeText(n, r, u, t, i, f, this.$6(), this.$7());
        this.$3(e)
    }, drawAlignedText: function (n, t, i, r, u, f) {
        var o = this.$0.writeAlignedText(n, r, u, t, i, f, this.$6(), this.$7()), e;
        if (o != null)for (e = 0; e < o.length; e++)this.$3(o[e])
    }, createGroup: function () {
        var n = this.$6() + "_group", t = this.$0.startGroup(n, this.$1.peek(), this.$8(), this.$2.getVisible());
        this.$4(t)
    }, endGroup: function () {
        this.$5()
    }, startClip: function (n) {
        var t = this.$0.clip(n, this.$1.peek(), this.$6(), this.$2.getVisible());
        this.$4(t)
    }, endClip: function () {
        this.endGroup()
    }, startTransformation: function (n) {
        var t = this.$0.startGroup(this.$6() + "_TransformGroup", this.$1.peek(), new PerfectWidgetsFramework.MatrixTransformation(n), this.$2.getVisible());
        this.$4(t)
    }, endTransformation: function () {
        this.endGroup()
    }, reset: function () {
        while (this.$1 != null && this.$1.count !== 1)this.$1.pop();
        this.$0.reset()
    }, setSmoothMode: function (n) {
        var t = this.$0.setSmoothMode(n);
        this.$3(t), this.$4(t)
    }, setContext: function (n) {
        this.$2 = n
    }, $6: function () {
        return this.$2 != null ? this.$2.getName() + "_" + this.$2.getGuid() + this.$2.getSuffix() : ""
    }, $7: function () {
        var n, t;
        return this.$2 != null ? (n = [], n.push(this.$2.getFullName()), (t = this.$2.getClassName()) == null && !t || (n.push(this.$2.getInstrument().getUniqueClassName() + "_" + t), n.push(t)), n) : null
    }, $8: function () {
        return this.$2 != null ? this.$2.getTransformation() : null
    }, clearGroup: function () {
        for (var n = this.$1.peek(); n.firstChild != null;)n.removeChild(n.firstChild)
    }}, n.c$0 = function () {
        return new PerfectWidgetsFramework.Vector(1, 1)
    }, n.c$1 = function () {
        return new PerfectWidgetsFramework.Vector(0, 0)
    }, h = {locationToScreen: function (n) {
        return this.valueToScreen(n)
    }, getElement: function () {
        return this.c$2
    }, changeZoom: function (t, i) {
        var r = n.c$1(), u = t.minus(r), f = u.multiply(i.divide(n.c$0())), e = f.minus(u), o = r.minus(e);
        this.setOrigin(o), this.setScale(i), this.getElement().setNeedRepaint(!0), this.getElement().refreshElement()
    }, toElement: function (n) {
        return this.scaleFromScreen(n.minus(this.getOrigin()))
    }, toView: function (n) {
        return this.valueToScreen(n).add(this.getOrigin())
    }, getElementAt: function (n) {
        return this.getElement().getElementAt(n)
    }, isReadyToPaint: function () {
        return this.c$3
    }, paint: function (n) {
        this.c$3 = !1;
        var t = this.getOrigin(), i = this.getScale(), r = PerfectWidgetsFramework.Unit.convert(t.x, PerfectWidgetsFramework.Unit.internalUnit, PerfectWidgetsFramework.Unit.pixel), u = PerfectWidgetsFramework.Unit.convert(t.y, PerfectWidgetsFramework.Unit.internalUnit, PerfectWidgetsFramework.Unit.pixel), f = PerfectWidgetsFramework.Matrix.buildTranslationMatrix(r, u).multiply(PerfectWidgetsFramework.Matrix.buildScaleMatrix(i.x, i.y));
        n.setContext(this.getElement()), n.startTransformation(f), this.c$4(n), n.endTransformation(), this.c$3 = !0
    }, c$4: function (n) {
        this.getElement().paint(n)
    }}, l = {onPointerOut: function () {
    }, onPointerOver: function () {
    }, onManipulationStarted: function (n) {
        if (this.c$0 = !0, this.c$1 = n, this.c$2 = this.c$3(n), this.c$2 != null) {
            var t = ss.safeCast(this.c$2.getParent(), PerfectWidgetsModel.Slider);
            t != null && t.getAnimationState() !== PerfectWidgetsModel.AnimationState.disabled && t.setAnimationState(PerfectWidgetsModel.AnimationState.dragAndDrop), this.c$2.doMouseDown(n)
        }
    }, c$3: function (n) {
        return n.isInDiv() ? n.view().getElementAt(n.getManipulationOrigin()) : null
    }, onManipulationEnded: function (n) {
        var i, t;
        this.c$0 = !1, this.c$1 = n, this.c$2 != null && (this.c$2.doMouseUp(n), i = ss.safeCast(this.c$2.getParent(), PerfectWidgetsModel.Slider), i != null && i.getAnimationState() !== PerfectWidgetsModel.AnimationState.disabled && i.setAnimationState(PerfectWidgetsModel.AnimationState.stoped)), t = this.c$3(n), this.c$2 !== t && (this.c$2 != null && this.c$2.doMouseLeave(n), t != null && (t.doMouseEnter(n), t.doMouseMove(n)), this.c$2 = t)
    }, onPointerMove: function (n) {
        if (this.c$1 = n, this.c$2 != null && this.c$0)this.c$2.doMouseMove(n), this.c$2.setNeedRepaint(!0); else {
            var t = this.c$3(n);
            this.c$2 !== t && (this.c$2 != null && this.c$2.doMouseLeave(n), t != null && t.doMouseEnter(n), this.c$2 = t), !ss.isValue(this.c$2) || this.c$2.doMouseMove(n)
        }
    }, onPointerLeave: function () {
    }, onPointerEnter: function () {
    }}, r.writeLog = function (n) {
        var i = document.getElementById("dummylog"), t;
        i != null && (t = i.value.toString(), t = n + "\n" + t, i.value = t)
    }, a = {isInDiv: function (n, t) {
        return this.c$u(this.c$f).contains(new PerfectWidgetsFramework.Vector(n, t))
    }, pointingDeviceEvent: function (n) {
        var o, e, f, i, r, u, t;
        if (this.c$l)for (o = ("changedTouches"in n) ? n.changedTouches : [n], e = ss.enumerate(o); e.moveNext();) {
            if (f = e.current, i = "identifier"in f ? f.identifier : "pointerId"in f ? f.pointerId : 1, r = f.pageX, u = f.pageY, n.type.match(new RegExp("(down|start)$", "i")) != null) {
                if (!this.isInDiv(r, u))continue;
                if (t = this.c$s(r, u), t.view().getElementAt(t.getManipulationOrigin()) != null) {
                    n.preventDefault(), typeof n.preventManipulation == "function" && n.preventManipulation();
                    this.getTool().onManipulationStarted(t);
                    this.c$q[i] = new PerfectWidgetsFramework.Vector(r, u)
                }
            }
            if (n.type.match(new RegExp("move$", "i")) != null) {
                if (n.type.search(new RegExp("mouse", "i")) === -1 && !ss.keyExists(this.c$q, i))continue;
                if (ss.keyExists(this.c$q, i)) {
                    if (Math.abs(new PerfectWidgetsFramework.Vector(r, u).minus(this.c$q[i]).getLength()) < 4)continue;
                    this.c$q[i] = new PerfectWidgetsFramework.Vector(r, u)
                }
                t = this.c$s(r, u), n.preventDefault(), typeof n.preventManipulation == "function" && n.preventManipulation();
                this.getTool().onPointerMove(t)
            }
            if (n.type.match(new RegExp("(up|end)$", "i")) != null) {
                if (!ss.keyExists(this.c$q, i))continue;
                n.preventDefault(), typeof n.preventManipulation == "function" && n.preventManipulation(), t = this.c$s(r, u);
                this.getTool().onManipulationEnded(t);
                delete this.c$q[i]
            }
        }
    }, c$r: function () {
        var r = this.getView(), u = null, t = null, e = Math.max(PerfectWidgetsFramework.Unit.internalToPixel(r.getElement().getBoundedBox().width), PerfectWidgetsFramework.Unit.internalToPixel(r.getElement().getSize().x)), o = Math.max(PerfectWidgetsFramework.Unit.internalToPixel(r.getElement().getBoundedBox().height), PerfectWidgetsFramework.Unit.internalToPixel(r.getElement().getSize().y)), n = new PerfectWidgetsFramework.Vector(e, o), i = new PerfectWidgetsFramework.Vector(this.c$f.offsetWidth, this.c$f.offsetHeight), f;
        return i.y ? (this.c$m ? (f = Math.min(i.x / n.x, i.y / n.y), u = new PerfectWidgetsFramework.Vector(f, f)) : u = new PerfectWidgetsFramework.Vector(i.x / n.x, i.y / n.y), t = n.multiply(u)) : t = n, this.c$g = t, this.c$h = new PerfectWidgetsFramework.VectorRectangle(0, 0, t.x, t.y), u
    }, c$s: function (n, t) {
        var i = this.c$v(n, t), r = new PerfectWidgetsModel.ManipulationDelta(0, PerfectWidgetsFramework.Vector.empty, PerfectWidgetsFramework.Vector.empty);
        return new PerfectWidgetsModel.ManipulationArguments(i, r, this.getView(), this.isInDiv(n, t))
    }, c$t: function () {
        this.getView().isReadyToPaint() ? this.getView().paint(this.c$i) : r.writeLog("not ready")
    }, c$u: function (n) {
        var o, s, r, h, c;
        if (typeof n.getBoundingClientRect == "function") {
            var u = n.getBoundingClientRect(null), t = document.body, i = document.documentElement, f = 0, e = 0;
            ss.isValue(window.pageYOffset) ? (f = window.pageYOffset, e = window.pageXOffset) : ss.isValue(i.scrollTop) ? (f = i.scrollTop, e = i.scrollLeft) : !ss.isValue(t.scrollTop) || (f = t.scrollTop, e = t.scrollLeft), o = 0, s = 0, ss.isValue(i.clientTop) ? (o = i.clientTop, s = i.clientLeft) : !ss.isValue(t.clientTop) || (o = t.clientTop, s = t.clientLeft);
            var l = u.top + f - o, a = u.left + e - s, v = u.width, y = u.height;
            return new PerfectWidgetsFramework.VectorRectangle(a, l, v, y)
        }
        for (r = this.c$f, h = 0, c = 0; r != null; h += r.offsetLeft, c += r.offsetTop, r = r.offsetParent);
        return new PerfectWidgetsFramework.VectorRectangle(h, c, this.c$f.offsetWidth, this.c$f.offsetHeight)
    }, c$v: function (n, t) {
        var i = this.c$u(this.c$f).getLocation(), r = n - i.x - this.c$k.x, u = t - i.y - this.c$k.y, f = PerfectWidgetsFramework.Unit.convert(r, PerfectWidgetsFramework.Unit.pixel, PerfectWidgetsFramework.Unit.internalUnit), e = PerfectWidgetsFramework.Unit.convert(u, PerfectWidgetsFramework.Unit.pixel, PerfectWidgetsFramework.Unit.internalUnit);
        return this.getView().toElement(new PerfectWidgetsFramework.Vector(f, e))
    }, c$w: function () {
        var n = document.createElement("div"), t;
        return n.innerHTML = "&nbsp;", n.style.height = "100%", n.style.width = "100%", this.c$f.appendChild(n), t = new PerfectWidgetsFramework.Vector(n.offsetWidth, n.offsetHeight), this.c$k = new PerfectWidgetsFramework.Vector(n.offsetLeft - this.c$f.offsetLeft, n.offsetTop - this.c$f.offsetTop), this.c$f.removeChild(n), t
    }, c$x: function () {
        while (this.c$f.firstChild != null)this.c$f.removeChild(this.c$f.firstChild)
    }, getByName: function (n) {
        return this.getView().getElement().getByName(n)
    }, getInteractive: function () {
        return this.c$l
    }, setInteractive: function (n) {
        this.c$l = n
    }, dispose: function () {
        for (document.removeEventListener("mousedown", this.c$n, !1), document.removeEventListener("mouseup", this.c$o, !1), document.removeEventListener("mousemove", this.c$p, !1), document.removeEventListener("touchstart", this.c$n, !1), document.removeEventListener("touchend", this.c$o, !1), document.removeEventListener("touchmove", this.c$p, !1), document.removeEventListener("MSPointerDown", this.c$n, !1), document.removeEventListener("MSPointerUp", this.c$o, !1), document.removeEventListener("MSPointerMove", this.c$p, !1); this.c$f.hasChildNodes();)this.c$f.removeChild(this.c$f.lastChild);
        this.c$f.removeAttribute("onselectstart")
    }, rescale: function () {
        var n = this.c$r();
        this.c$i.rescale(this.c$g, this.c$h), n != null && this.getView().changeZoom(new PerfectWidgetsFramework.Vector(0, 0), n)
    }}, v = ss.module("PerfectWidgets", null, {CssClass: {none: 0, background: 1, foreground: 2, needle: 3, ticks: 4, labels: 5}, JSONParser: [u, {parse: function (n, t) {
        var i, r;
        return this.$0 = [], i = this.$6(n), t != null && this.$1(i, t), r = new PerfectWidgetsModel.ToolTipElement, i.setToolTipElement(r), i.getElements().add(r, i), i
    }, $1: function (n, t) {
        for (var c = ss.safeCast(ss.typeOf(t).getOwnPropertyNames(t), Array), s = ss.enumerate(c), f, o, h, u; s.moveNext();)if (f = s.current, o = f.indexOf("."), o !== -1) {
            var l = f.substr(0, o), i = f.substr(o + 1), e = t[f].toString(), r = n.getByName(l);
            typeof r["set" + i] == "function" && typeof r["get" + i] == "function" && (h = r["get" + i](), ss.canCast(h, PerfectWidgetsModel.SmartValue) ? (u = new PerfectWidgetsModel.SmartValue, ss.endsWith(e, "%") ? (u.setKind(PerfectWidgetsModel.SmartValueKind.percent), u.setValue(parseFloat(e.substr(0, e.length - 1)))) : (u.setKind(PerfectWidgetsModel.SmartValueKind.constant), u.setValue(parseFloat(e))), r["set" + i](u)) : typeof r["set" + i] == "function" && r["set" + i](parseFloat(e)))
        }
    }, $2: function (n) {
        return n.substr(0, 1).toLowerCase() + n.substr(1)
    }, $3: function (n) {
        var t = null;
        switch (n) {
            case"Circle:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Circle;
                break;
            case"ScaleLabels:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.ScaleLabels;
                break;
            case"Slider:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Slider;
                break;
            case"Ticks:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Ticks;
                break;
            case"Joint:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Joint;
                break;
            case"Scale:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Scale;
                break;
            case"EmptyFill:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsFramework.EmptyFill;
                break;
            case"SolidFill:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsFramework.SolidFill(null);
                break;
            case"LinearGradientFill:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsFramework.LinearGradientFill;
                break;
            case"MultiGradientFill:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsFramework.MultiGradientFill;
                break;
            case"ConicalFill:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsFramework.ConicalFill;
                break;
            case"HatchFill:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsFramework.HatchFill;
                break;
            case"SimpleStroke:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsFramework.Stroke;
                break;
            case"GradientColor:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsFramework.GradientColor(null, 0);
                break;
            case"EmptyStroke:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsFramework.Stroke;
                break;
            case"SphericalFill:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsFramework.SphericalFill;
                break;
            case"Needle:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Needle;
                break;
            case"NeedlePoint:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.NeedlePoint;
                break;
            case"Rectangle:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Rectangle;
                break;
            case"RangedLevel:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.RangedLevel;
                break;
            case"Highlight:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Highlight;
                break;
            case"RoundedRectangle:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.RoundedRectangle;
                break;
            case"RingSector:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.RingSector;
                break;
            case"Arc:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Arc;
                break;
            case"Ellipse:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Ellipse;
                break;
            case"Pie:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Pie;
                break;
            case"Label:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Label;
                break;
            case"TrialLabel:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.TrialLabel;
                break;
            case"Picture:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Picture;
                break;
            case"PictureSet:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.PictureSet;
                break;
            case"SingleColorColorizer:#PerpetuumSoft.Instrumentation.Model.Drawing":
                t = new PerfectWidgetsFramework.SingleColorColorizer;
                break;
            case"SectionsColorizer:#PerpetuumSoft.Instrumentation.Model.Drawing":
                t = new PerfectWidgetsFramework.SectionsColorizer;
                break;
            case"ColorSection:#PerpetuumSoft.Instrumentation.Model.Drawing":
                t = new PerfectWidgetsFramework.ColorSection;
                break;
            case"SmartValueWrapper:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.SmartValue;
                break;
            case"Star:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Star;
                break;
            case"Polygon:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Polygon;
                break;
            case"Gear:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Gear;
                break;
            case"CustomLabels:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.CustomLabels;
                break;
            case"TextItem:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.TextItem;
                break;
            case"TruncatedEllipse:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.TruncatedEllipse;
                break;
            case"ScaleMarks:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.ScaleMarks;
                break;
            case"RoundRectangleShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.RoundRectangleShape;
                break;
            case"StarShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.StarShape;
                break;
            case"RectangleShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.RectangleShape;
                break;
            case"EllipseShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.EllipseShape;
                break;
            case"DiamondShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.DiamondShape;
                break;
            case"RectTriangleShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.RectTriangleShape;
                break;
            case"ArrowShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.ArrowShape;
                break;
            case"LineShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.LineShape;
                break;
            case"ParallelogramShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.ParallelogramShape;
                break;
            case"LinearLevel:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.LinearLevel;
                break;
            case"Guide:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Guide;
                break;
            case"Tank:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Tank;
                break;
            case"NumericLabels:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.ScaleLabels;
                break;
            case"Line:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Line;
                break;
            case"TriangleShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.TriangleShape;
                break;
            case"CrossShape:#PerpetuumSoft.Framework.Drawing":
                t = new PerfectWidgetsModel.CrossShape;
                break;
            case"Spring:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Spring;
                break;
            case"CircularNotches:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.CircularNotches;
                break;
            case"LinearNotches:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.LinearNotches;
                break;
            case"ScaleTitle:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.ScaleTitle;
                break;
            case"Digits:#PerpetuumSoft.Instrumentation.Model.Specialized":
                t = new PerfectWidgetsModel.Digits;
                break;
            case"Frame:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Frame;
                break;
            case"Odometer:#PerpetuumSoft.Instrumentation.Model.Specialized":
                t = new PerfectWidgetsModel.Odometer;
                break;
            case"DigitalText:#PerpetuumSoft.Instrumentation.Model.Specialized":
                t = new PerfectWidgetsModel.DigitalText;
                break;
            case"Group:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.Group;
                break;
            case"PushButton:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.PushButton;
                break;
            case"Style:#PerpetuumSoft.Instrumentation.Styles":
                t = new PerfectWidgetsFramework.Style;
                break;
            case"StyleCollection:#PerpetuumSoft.Instrumentation.Styles":
                t = new PerfectWidgetsFramework.StyleCollection;
                break;
            case"TextLabels:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.CustomLabels;
                break;
            case"StandardBevel:#PerpetuumSoft.Instrumentation.Model":
                t = new PerfectWidgetsModel.StandardBevel;
                break;
            default:
                alert(n + " is unknown type")
        }
        return t
    }, $4: function (n, t, r) {
        var u = i.translate(r), f = t[r];
        typeof n["set" + u] == "function" && n["set" + u](f)
    }, $5: function (n, t) {
        t.ApplyBinding = new Function(n), t.add_recalculating(new Function("sender", "args", 'var binding = sender["ApplyBinding"]; binding.apply(sender);'))
    }, $6: function (n) {
        var i = null, nt, tt, l, r, t, it, a, rt, v, y, ut, ft, p, w, u, e, b, k, d, f, g, s, h, o, c, ot, st;
        if (n.hasOwnProperty("__type") ? (nt = ss.safeCast(n.__type, String), i = this.$3(nt)) : i = new PerfectWidgetsModel.Instrument, i != null)for (tt = ss.safeCast(ss.typeOf(n).getOwnPropertyNames(n), Array), l = ss.enumerate(tt); l.moveNext();)if (r = l.current, t = n[r], t == null || ss.typeOf(t) !== Array && ss.typeOf(t) !== Object && r !== "Base64String" && r !== "CssClass" && r !== "JSBindingsText")this.$4(i, n, r); else switch (r) {
            case"Elements":
                for (it = t, a = ss.enumerate(it); a.moveNext();)rt = a.current, v = this.$6(rt), v != null && (y = i, y.getElements().add(v, y));
                break;
            case"JSBindingsText":
                this.$5(t, i);
                break;
            case"Size":
            case"Center":
            case"EndPoint":
            case"StartPoint":
            case"CenterPoint":
            case"MarksSize":
            case"SubMarksSize":
            case"SegmentSize":
            case"SegmentSpaces":
                ut = t.X, ft = t.Y, i["set" + r](new PerfectWidgetsFramework.Vector(ut, ft));
                break;
            case"Colors":
                for (p = new PerfectWidgetsFramework.GradientColorCollection, w = ss.enumerate(t); w.moveNext();)f = w.current, p.add(this.$6(f));
                i.setColors(p);
                break;
            case"TankColor":
            case"LiquidColor":
            case"Color":
            case"EndColor":
            case"StartColor":
            case"ActiveColor":
            case"InactiveColor":
            case"LightColor":
            case"DarkColor":
                var ht = t.value, ct = t.state, lt = ss.safeCast(t.name, String), at = t.knownColor, et = new PerfectWidgetsFramework.Color(ht, ct, lt, at);
                this.$2(r)in i ? i[this.$2(r)] = et : typeof i["set" + r] == "function" && i["set" + r](et);
                break;
            case"Font":
                u = 0, t.Bold === 1 && (u |= PerfectWidgetsFramework.FontStyle.bold), t.Italic === 1 && (u |= PerfectWidgetsFramework.FontStyle.italic), t.Underline === 1 && (u |= PerfectWidgetsFramework.FontStyle.underline), t.Strikeout === 1 && (u |= PerfectWidgetsFramework.FontStyle.strikeout), e = new PerfectWidgetsFramework.Font, b = new PerfectWidgetsFramework.FontFamily, b.name = ss.safeCast(t.FamilyName, String), e.fontFamily = b, e.sizeInPoints = t.Size, e.style = u, i["set" + r](e);
                break;
            case"MinLimit":
                break;
            case"MaxLimit":
                break;
            case"Base64String":
                i.setImage(new PerfectWidgetsFramework.Image(t));
                break;
            case"ImagesList":
                for (k = [], d = ss.enumerate(t); d.moveNext();)f = d.current, k.push(new PerfectWidgetsFramework.Image(f));
                i.setImages(k);
                break;
            case"CssClass":
                g = t.SelectedCssClass, g !== "none" && i.setClassName(g);
                break;
            default:
                if (ss.canCast(t, Array)) {
                    for (s = t, h = [], o = 0; o < s.length; o++)s[o].hasOwnProperty("__type") && typeof i["set" + r] == "function" && h.push(this.$6(s[o]));
                    !h.length || i["set" + r](h)
                } else t.hasOwnProperty("__type") && (c = r, ss.endsWith(r, "Wrapper") && (ot = r.lastIndexOf("Wrapper"), c = r.substr(0, ot)), typeof i["set" + c] == "function" && (st = this.$6(t), i["set" + c](st)))
        }
        return i
    }}, null], PropertyTranslator: [i, f, null], SvgBuilder: [t, e, null], SvgPainter: [o, s, null, PerfectWidgetsModel.IPainter], ElementView: [n, h, PerfectWidgetsModel.AbstractView], PickTool: [c, l, PerfectWidgetsModel.Tool], Widget: [r, a, PerfectWidgetsModel.ViewManager]}), t.$3 = 1 / 3, v
}(this);
var PerfectWidgets;
PerfectWidgets.Framework = {DataObjects: {Ellipse: PerfectWidgetsFramework.Ellipse, Matrix: PerfectWidgetsFramework.Matrix, RangeValue: PerfectWidgetsFramework.RangeValue, RotationDirection: PerfectWidgetsFramework.RotationDirection, Segment: PerfectWidgetsFramework.Segment, Direction: PerfectWidgetsFramework.Direction, Point: PerfectWidgetsFramework.Point, Vector: PerfectWidgetsFramework.Vector}, Drawing: {Colorizer: PerfectWidgetsFramework.Colorizer, Fill: PerfectWidgetsFramework.Fill, MultiGradientFill: PerfectWidgetsFramework.MultiGradientFill, ConicalFill: PerfectWidgetsFramework.ConicalFill, Stroke: PerfectWidgetsFramework.Stroke, ColorSection: PerfectWidgetsFramework.ColorSection, EllipticArcParameters: PerfectWidgetsFramework.EllipticArcParameters, Font: PerfectWidgetsFramework.Font, FontFamily: PerfectWidgetsFramework.FontFamily, FontStyle: PerfectWidgetsFramework.FontStyle, GradientColor: PerfectWidgetsFramework.GradientColor, GradientColorCollection: PerfectWidgetsFramework.GradientColorCollection, GraphicsPathElement: PerfectWidgetsFramework.GraphicsPathElement, GraphicsPathElementType: PerfectWidgetsFramework.GraphicsPathElementType, GraphicsUtilites: PerfectWidgetsFramework.GraphicsUtilites, HatchFill: PerfectWidgetsFramework.HatchFill, HatchStyle: PerfectWidgetsFramework.HatchStyle, IPathElement: PerfectWidgetsFramework.IPathElement, LinearGradientBrush: PerfectWidgetsFramework.LinearGradientBrush, PathElementCollection: PerfectWidgetsFramework.PathElementCollection, PathPointType: PerfectWidgetsFramework.PathPointType, SectionsColorizer: PerfectWidgetsFramework.SectionsColorizer, SingleColorColorizer: PerfectWidgetsFramework.SingleColorColorizer, Brush: PerfectWidgetsFramework.Brush, SolidBrush: PerfectWidgetsFramework.SolidBrush, SphericalFill: PerfectWidgetsFramework.SphericalFill, Color: PerfectWidgetsFramework.Color, ColorTranslator: PerfectWidgetsFramework.ColorTranslator, ContentAlignment: PerfectWidgetsFramework.ContentAlignment, DashCap: PerfectWidgetsFramework.DashCap, DashStyle: PerfectWidgetsFramework.DashStyle, EmptyFill: PerfectWidgetsFramework.EmptyFill, FillMode: PerfectWidgetsFramework.FillMode, GraphicsPath: PerfectWidgetsFramework.GraphicsPath, GraphicsUnit: PerfectWidgetsFramework.GraphicsUnit, Image: PerfectWidgetsFramework.Image, KnownColor: PerfectWidgetsFramework.KnownColor, KnownColorTable: PerfectWidgetsFramework.KnownColorTable, LinearGradientFill: PerfectWidgetsFramework.LinearGradientFill, LineStyle: PerfectWidgetsFramework.LineStyle, Margins: PerfectWidgetsFramework.Margins, Pen: PerfectWidgetsFramework.Pen, SolidFill: PerfectWidgetsFramework.SolidFill, Unit: PerfectWidgetsFramework.Unit}, Utilities: {BuiltIn: PerfectWidgetsFramework.BuiltIn, TextUtilities: PerfectWidgetsFramework.TextUtilities, MathHelper: PerfectWidgetsFramework.MathHelper, Guid: PerfectWidgetsFramework.Guid}, Geometry: {GeometryUtilities: PerfectWidgetsFramework.GeometryUtilities}, Styles: {Style: PerfectWidgetsFramework.Style, StyleCollection: PerfectWidgetsFramework.StyleCollection}, Transformation: {AbstractTransformation: PerfectWidgetsFramework.AbstractTransformation, MockTransformation: PerfectWidgetsFramework.MockTransformation, MatrixTransformation: PerfectWidgetsFramework.MatrixTransformation, RotateTransformation: PerfectWidgetsFramework.RotateTransformation, ScaleTransformation: PerfectWidgetsFramework.ScaleTransformation, TranslateTransformation: PerfectWidgetsFramework.TranslateTransformation}};
PerfectWidgets.Model = {Animation: {AnimationState: PerfectWidgetsModel.AnimationState, EasingFunctions: PerfectWidgetsModel.EasingFunctions, EasingDelegate: PerfectWidgetsModel.EasingDelegate, IAnimatable: PerfectWidgetsModel.IAnimatable, AbstractAnimation: PerfectWidgetsModel.AbstractAnimation, ManualAnimation: PerfectWidgetsModel.ManualAnimation}, BaseElements: {WidgetElement: PerfectWidgetsModel.WidgetElement, SimpleRectangleElement: PerfectWidgetsModel.SimpleRectangleElement, RectangleElement: PerfectWidgetsModel.RectangleElement, ArcBase: PerfectWidgetsModel.ArcBase, Arc: PerfectWidgetsModel.Arc, BevelElement: PerfectWidgetsModel.BevelElement, Composite: PerfectWidgetsModel.Composite, ButtonBase: PerfectWidgetsModel.ButtonBase, Circle: PerfectWidgetsModel.Circle, CircularShape: PerfectWidgetsModel.CircularShape, CircularNotches: PerfectWidgetsModel.CircularNotches, Colorizer: PerfectWidgetsModel.Colorizer, CornerRadiuses: PerfectWidgetsModel.CornerRadiuses, Bevel: PerfectWidgetsModel.Bevel, CustomBevel: PerfectWidgetsModel.CustomBevel, DigitalText: PerfectWidgetsModel.DigitalText, Frame: PerfectWidgetsModel.Frame, BevelStyle: PerfectWidgetsModel.BevelStyle, Group: PerfectWidgetsModel.Group, LineElement: PerfectWidgetsModel.LineElement, LinearNotches: PerfectWidgetsModel.LinearNotches, NotchesStyle: PerfectWidgetsModel.NotchesStyle, Odometer: PerfectWidgetsModel.Odometer, Digits: PerfectWidgetsModel.Digits, SegmentType: PerfectWidgetsModel.SegmentType, PushButton: PerfectWidgetsModel.PushButton, IScaleElement: PerfectWidgetsModel.IScaleElement, ScaleElement: PerfectWidgetsModel.ScaleElement, ValuePresenterScaleElement: PerfectWidgetsModel.ValuePresenterScaleElement, LevelBase: PerfectWidgetsModel.LevelBase, RangedLevel: PerfectWidgetsModel.RangedLevel, AlignmentMode: PerfectWidgetsModel.AlignmentMode, RepaintType: PerfectWidgetsModel.RepaintType, ScaleMarksBase: PerfectWidgetsModel.ScaleMarksBase, ScaleMarks: PerfectWidgetsModel.ScaleMarks, ScaleLabelsBase: PerfectWidgetsModel.ScaleLabelsBase, ScaleTitle: PerfectWidgetsModel.ScaleTitle, Shadow: PerfectWidgetsModel.Shadow, ShapeBase: PerfectWidgetsModel.ShapeBase, RectangleShape: PerfectWidgetsModel.RectangleShape, EllipseShape: PerfectWidgetsModel.EllipseShape, RoundRectangleShape: PerfectWidgetsModel.RoundRectangleShape, ShapeDirection: PerfectWidgetsModel.ShapeDirection, TriangleShape: PerfectWidgetsModel.TriangleShape, ArrowShape: PerfectWidgetsModel.ArrowShape, RectTriangleShape: PerfectWidgetsModel.RectTriangleShape, DiamondShape: PerfectWidgetsModel.DiamondShape, ParallelogramShape: PerfectWidgetsModel.ParallelogramShape, StarShape: PerfectWidgetsModel.StarShape, CrossShape: PerfectWidgetsModel.CrossShape, LineDirection: PerfectWidgetsModel.LineDirection, LineShape: PerfectWidgetsModel.LineShape, LinearLevel: PerfectWidgetsModel.LinearLevel, Effect3D: PerfectWidgetsModel.Effect3D, CapStyle: PerfectWidgetsModel.CapStyle, Spring: PerfectWidgetsModel.Spring, RectangleBevelDrawingStyle: PerfectWidgetsModel.RectangleBevelDrawingStyle, StandardBevel: PerfectWidgetsModel.StandardBevel, Tank: PerfectWidgetsModel.Tank, TextFormat: PerfectWidgetsModel.TextFormat, Rectangle: PerfectWidgetsModel.Rectangle, ToolTipElement: PerfectWidgetsModel.ToolTipElement, TrialLabel: PerfectWidgetsModel.TrialLabel, CustomLabels: PerfectWidgetsModel.CustomLabels, ITrajectory: PerfectWidgetsModel.ITrajectory, DockableTrajectoryBase: PerfectWidgetsModel.DockableTrajectoryBase, ElementPainter: PerfectWidgetsModel.ElementPainter, Ellipse: PerfectWidgetsModel.Ellipse, Gear: PerfectWidgetsModel.Gear, Guide: PerfectWidgetsModel.Guide, GuideDirection: PerfectWidgetsModel.GuideDirection, Highlight: PerfectWidgetsModel.Highlight, ILinkedSupported: PerfectWidgetsModel.ILinkedSupported, InvalidationEventHandler: PerfectWidgetsModel.InvalidationEventHandler, ScaleKind: PerfectWidgetsModel.ScaleKind, IScale: PerfectWidgetsModel.IScale, ScaleDocking: PerfectWidgetsModel.ScaleDocking, ISlider: PerfectWidgetsModel.ISlider, Joint: PerfectWidgetsModel.Joint, JointDocking: PerfectWidgetsModel.JointDocking, Label: PerfectWidgetsModel.Label, LabelInfo: PerfectWidgetsModel.LabelInfo, Line: PerfectWidgetsModel.Line, ShowMode: PerfectWidgetsModel.ShowMode, CalculatePosition: PerfectWidgetsModel.CalculatePosition, Needle: PerfectWidgetsModel.Needle, NeedlePoint: PerfectWidgetsModel.NeedlePoint, NeedlePointCollection: PerfectWidgetsModel.NeedlePointCollection, Picture: PerfectWidgetsModel.Picture, PictureSet: PerfectWidgetsModel.PictureSet, Pie: PerfectWidgetsModel.Pie, Polygon: PerfectWidgetsModel.Polygon, PropertyEventHandler: PerfectWidgetsModel.PropertyEventHandler, PropertyEventArgs: PerfectWidgetsModel.PropertyEventArgs, RingSector: PerfectWidgetsModel.RingSector, RoundedRectangle: PerfectWidgetsModel.RoundedRectangle, RoundedVectorRectangle: PerfectWidgetsModel.RoundedVectorRectangle, Scale: PerfectWidgetsModel.Scale, ScaleLabels: PerfectWidgetsModel.ScaleLabels, TextRotationMode: PerfectWidgetsModel.TextRotationMode, LabelPosition: PerfectWidgetsModel.LabelPosition, SliderBase: PerfectWidgetsModel.SliderBase, Slider: PerfectWidgetsModel.Slider, SmartValueKind: PerfectWidgetsModel.SmartValueKind, SmartValue: PerfectWidgetsModel.SmartValue, Star: PerfectWidgetsModel.Star, StringAlignment: PerfectWidgetsModel.StringAlignment, TextItem: PerfectWidgetsModel.TextItem, SubTicksPosition: PerfectWidgetsModel.SubTicksPosition, Ticks: PerfectWidgetsModel.Ticks, TruncatedEllipse: PerfectWidgetsModel.TruncatedEllipse, NeedRepaintChangedEventArgs: PerfectWidgetsModel.NeedRepaintChangedEventArgs, ElementEventArgs: PerfectWidgetsModel.ElementEventArgs, ElementsCollection: PerfectWidgetsModel.ElementsCollection, Instrument: PerfectWidgetsModel.Instrument, Parameter: PerfectWidgetsModel.Parameter, ParameterCollection: PerfectWidgetsModel.ParameterCollection}, Drawing: {DigitPainter: PerfectWidgetsModel.DigitPainter, GeneralDigitStyle: PerfectWidgetsModel.GeneralDigitStyle, ValuePathPair: PerfectWidgetsModel.ValuePathPair, IPainter: PerfectWidgetsModel.IPainter}, Manipulator: {ManipulationEventHandler: PerfectWidgetsModel.ManipulationEventHandler, ManipulationArguments: PerfectWidgetsModel.ManipulationArguments, ManipulationDelta: PerfectWidgetsModel.ManipulationDelta}, Strategy: {BrowserStrategy: PerfectWidgetsModel.BrowserStrategy}, Transformation: {ViewTransformation: PerfectWidgetsModel.ViewTransformation}, View: {Tool: PerfectWidgetsModel.Tool, AbstractView: PerfectWidgetsModel.AbstractView, ViewManager: PerfectWidgetsModel.ViewManager}};
PerfectWidgets.Serialization = {CssClass: PerfectWidgets.CssClass, JSONParser: PerfectWidgets.JSONParser, PropertyTranslator: PerfectWidgets.PropertyTranslator};
PerfectWidgets.View = {ElementView: PerfectWidgets.ElementView, PickTool: PerfectWidgets.PickTool};
PerfectWidgets.Widget = PerfectWidgets.Widget;
PerfectWidgets.Drawing = {SvgBuilder: PerfectWidgets.SvgBuilder, SvgPainter: PerfectWidgets.SvgPainter};
Number.prototype.format = function (e) {
    return ss.format("{0:" + e + "}", this)
};
Date.prototype.format = function (e, t) {
    var n = t ? ss.culture.current : ss.culture.neutral;
    return ss.format(n, "{0:" + e + "}", this)
};