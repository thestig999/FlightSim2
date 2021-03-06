var console = console || function () {
};
function HandleErrors(b) {
    function g(n) {
        return navigator.userAgent.match(n)
    }

    function c(n) {
        var p = navigator.userAgent.match(/[Cc]hrome\/([0-9]{1,2})/);
        if (p) {
            p = parseInt(p[1]);
            return p <= n
        } else return!1
    }

    var f = this, h = b || "/alternate", m = !1;
    Trailer = "<ul id = 'trailer'><li class = 'first'><a href = 'http://youtu.be/VUQSoHFMD8c'>Watch the Trailer</a></li><li><a href = 'http://romealbum.com/'>Rome Album</a></li><li class = 'last'><a href = '/tech'>The Technology</a></li><li class = 'clear'></li></ul>";
    this.MagicVariable = "case";
    this.Errors = ["We are very sorry, but &#147;3 Dreams of Black&#148; is an experiment and unfortunately does not currently function on every configuration. It appears that your computer&#39;s graphics card doesn&#39;t support WebGL technology. You can find more details for troubleshooting <a href = 'http://get.webgl.org/troubleshooting/'>here</a> and obtain a list of recommended graphics cards." + Trailer, "Apologies for the tech trouble. &#147;3 Dreams of Black&#148; is an experiment and unfortunately does not currently function on every configuration. It appears your computer&#39;s graphics card doesn&#39;t support WebGL in Mozilla Firefox. We recommend you try it in <a href = 'http://www.google.com/chrome?brand=CHKX&utm_campaign=en&utm_source=en-rome-webgl&utm_medium=rome-webgl'>Google Chrome</a>. You can also find more details for troubleshooting <a href = 'http://get.webgl.org/troubleshooting/'>here</a> and obtain a list of recommended graphics cards." + Trailer, "We are sorry, but it appears that your browser does not support WebGL. Please <a href = 'http://www.google.com/chrome?brand=CHKX&utm_campaign=en&utm_source=en-rome-webgl&utm_medium=rome-webgl'>download Google Chrome</a> and try launching this site again. If you are unable to install a new web browser, you can try downloading the <a href = 'http://www.google.com/chromeframe'>Google Chrome Frame plugin</a> instead.", "We are sorry, but it appears that your browser does not support WebGL. Please <a href = 'http://www.google.com/chrome?brand=CHKX&utm_campaign=en&utm_source=en-rome-webgl&utm_medium=rome-webgl'>download Google Chrome</a> and try launching this site again.", "We are sorry, but it appears that your browser does not support WebGL. &#147;3 Dreams of Black&#148; is an experiment that was designed with the browser <a href = 'http://www.google.com/chrome?brand=CHKX&utm_campaign=en&utm_source=en-rome-webgl&utm_medium=rome-webgl'>Google Chrome</a> in mind. Please try launching this site again on a computer with up-to-date graphics drivers. Though not the full experience, you can also watch a video trailer, access the rest of the ROME album site, and learn more about WebGL technology." + Trailer, "This project is very experimental. With your current configuration, you may experience problems such as video flickering, so you may want to try this in Chrome Canary, the cutting-edge experimental version of Google Chrome. Download Google Chrome Canary <a href = 'http://tools.google.com/dlpage/chromesxs?platform=win'>here</a>, or <a id = 'escape-from-warning' href = '#'>try the experience anyway</a>.", "We&#39;re sorry, but &#147;3 Dreams of Black&#148; is an experiment that was designed with the browser Google Chrome in mind. As a result, it may not work perfectly in your current browser. For the best viewing experience, you can <a href = 'http://www.google.com/chrome?brand=CHKX&utm_campaign=en&utm_source=en-rome-webgl&utm_medium=rome-webgl'>download Google Chrome</a> and launch this site again, or go ahead and <a id = 'escape-from-warning' href = '#'>try it anyway</a>.", "You appear to be running an older version of Chrome. Please click on the wrench icon on the browser toolbar, and select 'Update Google Chrome' before viewing ROME.", "We are sorry, but it appears that your browser does not support WebGL. This could be due to a number of different reasons. For more information visit this <a href = 'http://get.webgl.org/troubleshooting/'>page</a>.", "We are sorry, but it appears that your browser will not support &#147;3 Dreams of Black&#148;. This could be due to a number of different reasons. For more information visit this <a href = 'http://get.webgl.org/troubleshooting/'>page</a>", "We are sorry, but your Chromebook does not support WebGL. (Don't worry, this happens to many visitors.) Please visit again using a computer with a WebGL-compatible graphics card."];
    this.getUrlVars = function () {
        for (var n = null, p = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), o = 0; o < p.length; o++) {
            var t = p[o].split("=");
            if (t.length == 2) {
                var u = t[0];
                t = t[1];
                if (u && t) {
                    n == null && (n = {});
                    n[u] = t
                }
            }
        }
        return n
    };
    this.checkForErrors = function () {
        var n;
        try {
            n = !!window.WebGLRenderingContext && !!document.createElement("canvas").getContext("experimental-webgl")
        } catch (p) {
            n = !1
        }
        n = {webgl: n, conditions: [g(/[cC]hrome/ig), g(/[Ff]ire[Ff]ox/ig), g(/[Mm][Ss][Ii][Ee] [7891]/) && g(/[Ww]indows [Nn][Tt] [67891]/) && !g(/[Cc]hrome[Ff]rame/), g(/[Ss]afari/) && g(/[Mm]ac [Oo][Ss] [Xx] 10\_[6789]/), g(/i[Pp]hone/) || g(/i[Pp]ad/) || g(/[Aa]ndroid/)], message: ""};
        if (n.webgl)if (n.conditions[1]) {
            window.addEventListener("load", function () {
                var t = document.getElementById("ui-container");
                if (t)t.style.display = "none";
                var u = document.createElement("div"), w = document.createElement("div");
                t = document.createElement("div");
                t.setAttribute("id", "rome-error");
                var x = document.createElement("style");
                x.innerHTML = "a { color: #fff; }";
                document.getElementsByTagName("head")[0].appendChild(x);
                u.setAttribute("style", "width: 100%; height: 100%; position: fixed; margin: 0; padding: 0; top: 0; left: 0;");
                w.setAttribute("style", "position: fixed; width: 400px; margin: 0 auto; top: " + (window.innerHeight - 200) / 2 + "px; left: " + (window.innerWidth - 400) / 2 + "px;");
                t.setAttribute("style", "width: 330px; padding: 50px 35px; background: rgba(0, 0, 0, 0.3); color: #fff; color: #fff; line-height: 18px !important; font: 500 12px/18px 'Futura', Arial, sans-serif; letter-spacing: 1px; text-align: center;");
                t.innerHTML = f.Errors[6];
                var y = function () {
                    w.style.left = (window.innerWidth - 400) / 2 + "px";
                    w.style.top = window.innerHeight / 2 + "px"
                }, z = function () {
                    document.body.removeChild(u);
                    document.body.removeChild(w);
                    window.removeEventListener("resize", y, !1);
                    LauncherSection.showUI();
                    localStorage.setItem("RomeError", !0)
                };
                u.addEventListener("click", function () {
                    z()
                }, !1);
                window.addEventListener("resize", y, !1);
                w.appendChild(t);
                document.body.appendChild(u);
                document.body.appendChild(w);
                document.getElementById("escape-from-warning").addEventListener("click", function (D) {
                    D.preventDefault();
                    z()
                }, !1)
            }, !1);
            HandleErrors.isWebGLAndBeta = !0
        } else {
            if (g(/[Ww]indows/) && c(11) && c(10))window.location = h + "?" + this.MagicVariable + "=7"
        } else {
            for (var o = 0; o < n.conditions.length; o++)if (n.conditions[o]) {
                window.location = h + "?" + this.MagicVariable + "=" + o;
                m = !0;
                return!1
            }
            if (!m)window.location = h + "?" + this.MagicVariable + "=8"
        }
    }
}
HandleErrors.isWebGLAndBeta = !1;
var romeErrors = new HandleErrors, variables = romeErrors.getUrlVars();
if (variables)variables[romeErrors.MagicVariable] && (window.addEventListener ? window.addEventListener("load", function () {
    var b = variables[romeErrors.MagicVariable], g = document.getElementById("error");
    b > romeErrors.Errors.length && (b = 8);
    g.innerHTML = '<p style="line-height: 18px !important;">' + romeErrors.Errors[b] + "</p>"
}, !1) : window.attachEvent("load", function () {
    var b = variables[romeErrors.MagicVariable], g = document.getElementById("error");
    b > romeErrors.Errors.length && (b = 8);
    g.innerHTML = '<p style="line-height: 18px !important;">' + romeErrors.Errors[b] + "</p>";
    return!1
})); else romeErrors.checkForErrors();
var Logger = function () {
    this.domElement = document.createElement("div");
    this.domElement.style.fontFamily = "Helvetica, Arial, sans-serif";
    this.domElement.style.textAlign = "left";
    this.domElement.style.fontSize = "9px";
    this.domElement.style.padding = "2px 0px 3px 0px";
    this.log = function (b) {
        this.domElement.appendChild(document.createTextNode(b));
        this.domElement.appendChild(document.createElement("br"))
    };
    this.clear = function () {
        for (; this.domElement.childNodes.length > 0;)this.domElement.removeChild(this.domElement.childNodes[0])
    }
}, Stats = function () {
    function b(K, R, aa) {
        var W, ea, ma;
        for (ea = 0; ea < 30; ea++)for (W = 0; W < 73; W++) {
            ma = (W + ea * 74) * 4;
            K[ma] = K[ma + 4];
            K[ma + 1] = K[ma + 5];
            K[ma + 2] = K[ma + 6]
        }
        for (ea = 0; ea < 30; ea++) {
            ma = (73 + ea * 74) * 4;
            if (ea < R) {
                K[ma] = J[aa].bg.r;
                K[ma + 1] = J[aa].bg.g;
                K[ma + 2] = J[aa].bg.b
            } else {
                K[ma] = J[aa].fg.r;
                K[ma + 1] = J[aa].fg.g;
                K[ma + 2] = J[aa].fg.b
            }
        }
    }

    var g = 0, c = 2, f, h = 0, m = (new Date).getTime(), n = m, p = m, o = 0, t = 1E3, u = 0, w, x, y, z, D, B = 0, A = 1E3, E = 0, C, H, G, I, V = 0, $ = 1E3, X = 0, P, S, v, O, J = {fps: {bg: {r: 16, g: 16, b: 48}, fg: {r: 0, g: 255, b: 255}}, ms: {bg: {r: 16, g: 48, b: 16}, fg: {r: 0, g: 255, b: 0}}, mem: {bg: {r: 48, g: 16, b: 26}, fg: {r: 255, g: 0, b: 128}}};
    f = document.createElement("div");
    f.style.cursor = "pointer";
    f.style.width = "80px";
    f.style.opacity = "0.9";
    f.style.zIndex = "10001";
    f.addEventListener("click", function () {
        g++;
        g == c && (g = 0);
        w.style.display = "none";
        C.style.display = "none";
        P.style.display = "none";
        switch (g) {
            case 0:
                w.style.display = "block";
                break;
            case 1:
                C.style.display = "block";
                break;
            case 2:
                P.style.display = "block"
        }
    }, !1);
    w = document.createElement("div");
    w.style.backgroundColor = "rgb(" + Math.floor(J.fps.bg.r / 2) + "," + Math.floor(J.fps.bg.g / 2) + "," + Math.floor(J.fps.bg.b / 2) + ")";
    w.style.padding = "2px 0px 3px 0px";
    f.appendChild(w);
    x = document.createElement("div");
    x.style.fontFamily = "Helvetica, Arial, sans-serif";
    x.style.textAlign = "left";
    x.style.fontSize = "9px";
    x.style.color = "rgb(" + J.fps.fg.r + "," + J.fps.fg.g + "," + J.fps.fg.b + ")";
    x.style.margin = "0px 0px 1px 3px";
    x.innerHTML = '<span style="font-weight:bold">FPS</span>';
    w.appendChild(x);
    y = document.createElement("canvas");
    y.width = 74;
    y.height = 30;
    y.style.display = "block";
    y.style.marginLeft = "3px";
    w.appendChild(y);
    z = y.getContext("2d");
    z.fillStyle = "rgb(" + J.fps.bg.r + "," + J.fps.bg.g + "," + J.fps.bg.b + ")";
    z.fillRect(0, 0, y.width, y.height);
    D = z.getImageData(0, 0, y.width, y.height);
    C = document.createElement("div");
    C.style.backgroundColor = "rgb(" + Math.floor(J.ms.bg.r / 2) + "," + Math.floor(J.ms.bg.g / 2) + "," + Math.floor(J.ms.bg.b / 2) + ")";
    C.style.padding = "2px 0px 3px 0px";
    C.style.display = "none";
    f.appendChild(C);
    H = document.createElement("div");
    H.style.fontFamily = "Helvetica, Arial, sans-serif";
    H.style.textAlign = "left";
    H.style.fontSize = "9px";
    H.style.color = "rgb(" + J.ms.fg.r + "," + J.ms.fg.g + "," + J.ms.fg.b + ")";
    H.style.margin = "0px 0px 1px 3px";
    H.innerHTML = '<span style="font-weight:bold">MS</span>';
    C.appendChild(H);
    y = document.createElement("canvas");
    y.width = 74;
    y.height = 30;
    y.style.display = "block";
    y.style.marginLeft = "3px";
    C.appendChild(y);
    G = y.getContext("2d");
    G.fillStyle = "rgb(" + J.ms.bg.r + "," + J.ms.bg.g + "," + J.ms.bg.b + ")";
    G.fillRect(0, 0, y.width, y.height);
    I = G.getImageData(0, 0, y.width, y.height);
    try {
        webkitPerformance && webkitPerformance.memory.totalJSHeapSize && (c = 3)
    } catch (T) {
    }
    P = document.createElement("div");
    P.style.backgroundColor = "rgb(" + Math.floor(J.mem.bg.r / 2) + "," + Math.floor(J.mem.bg.g / 2) + "," + Math.floor(J.mem.bg.b / 2) + ")";
    P.style.padding = "2px 0px 3px 0px";
    P.style.display = "none";
    f.appendChild(P);
    S = document.createElement("div");
    S.style.fontFamily = "Helvetica, Arial, sans-serif";
    S.style.textAlign = "left";
    S.style.fontSize = "9px";
    S.style.color = "rgb(" + J.mem.fg.r + "," + J.mem.fg.g + "," + J.mem.fg.b + ")";
    S.style.margin = "0px 0px 1px 3px";
    S.innerHTML = '<span style="font-weight:bold">MEM</span>';
    P.appendChild(S);
    y = document.createElement("canvas");
    y.width = 74;
    y.height = 30;
    y.style.display = "block";
    y.style.marginLeft = "3px";
    P.appendChild(y);
    v = y.getContext("2d");
    v.fillStyle = "#301010";
    v.fillRect(0, 0, y.width, y.height);
    O = v.getImageData(0, 0, y.width, y.height);
    return{domElement: f, update: function () {
        h++;
        m = (new Date).getTime();
        B = m - n;
        A = Math.min(A, B);
        E = Math.max(E, B);
        b(I.data, Math.min(30, 30 - B / 200 * 30), "ms");
        H.innerHTML = '<span style="font-weight:bold">' + B + " MS</span> (" + A + "-" + E + ")";
        G.putImageData(I, 0, 0);
        n = m;
        if (m > p + 1E3) {
            o = Math.round(h * 1E3 / (m - p));
            t = Math.min(t, o);
            u = Math.max(u, o);
            b(D.data, Math.min(30, 30 - o / 100 * 30), "fps");
            x.innerHTML = '<span style="font-weight:bold">' + o + " FPS</span> (" + t + "-" + u + ")";
            z.putImageData(D, 0, 0);
            if (c == 3) {
                V = webkitPerformance.memory.usedJSHeapSize * 9.54E-7;
                $ = Math.min($, V);
                X = Math.max(X, V);
                b(O.data, Math.min(30, 30 - V / 2), "mem");
                S.innerHTML = '<span style="font-weight:bold">' + Math.round(V) + " MEM</span> (" + Math.round($) + "-" + Math.round(X) + ")";
                v.putImageData(O, 0, 0)
            }
            p = m;
            h = 0
        }
    }}
}, GUI = function () {
    var b = this, g = document.getElementsByTagName("head")[0], c = document.createElement("style");
    c.type = "text/css";
    c.innerHTML = "#guidat{position:fixed;top:0;right:0;width:auto;z-index:1001;text-align:right}.guidat{color:#fff;opacity:0.97;text-align:left;float:right;margin-right:20px;margin-bottom:20px;background-color:#fff}.guidat,.guidat input{font:9.5px Lucida Grande,sans-serif}.guidat-controllers{height:300px;overflow-y:auto;overflow-x:hidden;background-color:rgba(0,0,0,0.1)}a.guidat-toggle{text-decoration:none;cursor:pointer;color:#fff;background-color:#222;text-align:center;display:block;padding:5px}a.guidat-toggle:hover{background-color:#000}.guidat-controller{padding:3px;height:25px;clear:left;border-bottom:1px solid #222;background-color:#111}.guidat-controller,.guidat-controller input,.guidat-slider-bg,.guidat-slider-fg{-moz-transition:background-color 0.15s linear;-webkit-transition:background-color 0.15s linear;transition:background-color 0.15s linear}.guidat-controller.boolean:hover,.guidat-controller.function:hover{background-color:#000}.guidat-controller input{float:right;outline:none;border:0;padding:4px;margin-top:2px;background-color:#222}.guidat-controller input:hover{background-color:#444}.guidat-controller input:focus{background-color:#555}.guidat-controller.number{border-left:5px solid #00aeff}.guidat-controller.string{border-left:5px solid #1ed36f}.guidat-controller.string input{border:0;color:#1ed36f;margin-right:2px;width:148px}.guidat-controller.boolean{border-left:5px solid #54396e}.guidat-controller.function{border-left:5px solid #e61d5f}.guidat-controller.number input[type=text]{width:35px;margin-left:5px;margin-right:2px;color:#00aeff}.guidat .guidat-controller.boolean input{margin-top:6px;margin-right:2px;font-size:20px}.guidat-controller:last-child{border-bottom:none;-webkit-box-shadow:0px 1px 3px rgba(0,0,0,0.5);-moz-box-shadow:0px 1px 3px rgba(0,0,0,0.5);box-shadow:0px 1px 3px rgba(0,0,0,0.5)}.guidat-propertyname{padding:5px;padding-top:7px;cursor:default;display:inline-block}.guidat-slider-bg:hover,.guidat-slider-bg.active{background-color:#444}.guidat-slider-bg:hover .guidat-slider-fg,.guidat-slider-bg.active .guidat-slider-fg{background-color:#52c8ff}.guidat-slider-bg{background-color:#222;cursor:ew-resize;width:40%;margin-top:2px;float:right;height:21px}.guidat-slider-fg{background-color:#00aeff;height:20px}";
    g.appendChild(c);
    var f = [], h = [], m = !0, n, p, o = 0;
    b = this;
    var t = !1, u = 280, w = !1, x, y, z = 0, D;
    this.domElement = document.createElement("div");
    this.domElement.setAttribute("class", "guidat");
    this.domElement.style.width = u + "px";
    var B = document.createElement("div");
    B.setAttribute("class", "guidat-controllers");
    B.addEventListener("DOMMouseScroll", function (R) {
        var aa = this.scrollTop;
        if (R.wheelDelta)aa += R.wheelDelta; else R.detail && (aa += R.detail);
        R.preventDefault && R.preventDefault();
        R.returnValue = !1;
        B.scrollTop = aa
    }, !1);
    B.style.height = "0px";
    var A = document.createElement("a");
    A.setAttribute("class", "guidat-toggle");
    A.setAttribute("href", "#");
    A.innerHTML = "Show Controls";
    var E = !1, C = 0, H = !1, G, I, V, $, X = function (R) {
        I = G;
        $ = V;
        G = R.pageY;
        V = R.pageX;
        R = G - I;
        if (!t)if (R > 0) {
            t = !0;
            o = x = 1;
            A.innerHTML = y || "Hide Controls"
        } else return;
        var aa = $ - V;
        if (R > 0 && o > p) {
            var W = GUI.map(o, p, p + 100, 1, 0);
            R *= W
        }
        E = !0;
        C += R;
        dragDisplacementX += aa;
        x += R;
        u += aa;
        o += R;
        B.style.height = x + "px";
        u = GUI.constrain(u, 240, 500);
        b.domElement.style.width = u + "px";
        O()
    };
    A.addEventListener("mousedown", function (R) {
        I = G = R.pageY;
        $ = V = R.pageX;
        H = !0;
        R.preventDefault();
        dragDisplacementX = C = 0;
        document.addEventListener("mousemove", X, !1);
        return!1
    }, !1);
    A.addEventListener("click", function (R) {
        R.preventDefault();
        return!1
    }, !1);
    document.addEventListener("mouseup", function (R) {
        if (H && !E) {
            b.toggle();
            b.domElement.style.width = u + 1 + "px";
            setTimeout(function () {
                b.domElement.style.width = u + "px"
            }, 1)
        }
        if (H && E) {
            if (dragDisplacementX == 0) {
                b.domElement.style.width = u + 1 + "px";
                setTimeout(function () {
                    b.domElement.style.width = u + "px"
                }, 1)
            }
            if (x > p) {
                clearTimeout(D);
                x = z = p;
                T()
            } else if (B.children.length >= 1) {
                var aa = B.children[0].offsetHeight;
                clearTimeout(D);
                z = Math.round(o / aa) * aa - 1;
                if (z <= 0) {
                    b.hide();
                    x = aa * 2
                } else {
                    x = z;
                    T()
                }
            }
        }
        document.removeEventListener("mousemove", X, !1);
        R.preventDefault();
        E = !1;
        H = !1;
        return!1
    }, !1);
    this.domElement.appendChild(B);
    this.domElement.appendChild(A);
    if (GUI.autoPlace) {
        if (GUI.autoPlaceContainer == null) {
            GUI.autoPlaceContainer = document.createElement("div");
            GUI.autoPlaceContainer.setAttribute("id", "guidat");
            document.body.appendChild(GUI.autoPlaceContainer)
        }
        GUI.autoPlaceContainer.appendChild(this.domElement)
    }
    this.autoListenIntervalTime = 1E3 / 60;
    var P = function () {
        n = setInterval(function () {
            b.listen()
        }, this.autoListenIntervalTime)
    };
    this.__defineSetter__("autoListen", function (R) {
        if (m = R)h.length > 0 && P(); else clearInterval(n)
    });
    this.__defineGetter__("autoListen", function () {
        return m
    });
    this.listenTo = function (R) {
        h.length == 0 && P();
        h.push(R)
    };
    this.unlistenTo = function (R) {
        for (var aa = 0; aa < h.length; aa++)h[aa] == R && h.splice(aa, 1);
        h.length <= 0 && clearInterval(n)
    };
    this.listen = function (R) {
        R = R || h;
        for (var aa in R)R[aa].updateDisplay()
    };
    this.listenAll = function () {
        this.listen(f)
    };
    this.autoListen = !0;
    var S = function (R, aa) {
        for (var W in f)if (f[W].object == R && f[W].propertyName == aa)return!0;
        return!1
    }, v = function (R, aa) {
        function W() {
            return R.apply(this, aa)
        }

        W.prototype = R.prototype;
        return new W
    };
    this.add = function () {
        var R = arguments[0], aa = arguments[1];
        S(R, aa);
        var W = R[aa];
        if (W == undefined)GUI.error(R + ' either has no property "' + aa + '", or the property is inaccessible.'); else {
            R = typeof W;
            W = J[R];
            if (W == undefined)GUI.error('Cannot create controller for data type "' + R + '"'); else {
                for (var ea = [this], ma = 0; ma < arguments.length; ma++)ea.push(arguments[ma]);
                if (W = v(W, ea)) {
                    B.appendChild(W.domElement);
                    f.push(W);
                    GUI.allControllers.push(W);
                    if (R != "function" && GUI.saveIndex < GUI.savedValues.length) {
                        W.setValue(GUI.savedValues[GUI.saveIndex]);
                        GUI.saveIndex++
                    }
                    O();
                    w || (x = p);
                    return W
                } else GUI.error('Error creating controller for "' + aa + '".')
            }
        }
    };
    var O = function () {
        p = 0;
        for (var R in f)p += f[R].domElement.offsetHeight;
        B.style.overflowY = p - 1 > x ? "auto" : "hidden"
    }, J = {number: GUI.NumberController, string: GUI.StringController, "boolean": GUI.BooleanController, "function": GUI.FunctionController};
    S = function (R, aa) {
        for (var W in f)if (f[W].object == R && f[W].propertyName == aa)return!0;
        return!1
    };
    v = function (R, aa) {
        function W() {
            return R.apply(this, aa)
        }

        W.prototype = R.prototype;
        return new W
    };
    this.reset = function () {
    };
    this.toggle = function () {
        t ? this.hide() : this.show()
    };
    this.show = function () {
        A.innerHTML = y || "Hide Controls";
        z = x;
        clearTimeout(D);
        T();
        t = !0
    };
    this.hide = function () {
        A.innerHTML = y || "Show Controls";
        z = 0;
        clearTimeout(D);
        T();
        t = !1
    };
    this.name = function (R) {
        y = R;
        A.innerHTML = R
    };
    this.appearanceVars = function () {
        return[t, u, x, B.scrollTop]
    };
    var T = function () {
        o += (z - o) * 0.6;
        if (Math.abs(o - z) < 1)o = z; else D = setTimeout(T, 1E3 / 30);
        B.style.height = Math.round(o) + "px";
        O()
    };
    if (GUI.guiIndex < GUI.savedAppearanceVars.length) {
        u = parseInt(GUI.savedAppearanceVars[GUI.guiIndex][1]);
        b.domElement.style.width = u + "px";
        x = parseInt(GUI.savedAppearanceVars[GUI.guiIndex][2]);
        w = !0;
        if (eval(GUI.savedAppearanceVars[GUI.guiIndex][0]) == !0) {
            o = x;
            var K = GUI.savedAppearanceVars[GUI.guiIndex][3];
            setTimeout(function () {
                B.scrollTop = K
            }, 0);
            if (GUI.scrollTop > -1)document.body.scrollTop = GUI.scrollTop;
            z = x;
            this.show()
        }
        GUI.guiIndex++
    }
    GUI.allGuis.push(this)
};
GUI.autoPlace = !0;
GUI.autoPlaceContainer = null;
GUI.allControllers = [];
GUI.allGuis = [];
GUI.saveURL = function () {
    title = window.location;
    url = GUI.replaceGetVar("saveString", GUI.getSaveString());
    window.location = url
};
GUI.scrollTop = -1;
GUI.load = function (b) {
    b = b.split(",");
    var g = parseInt(b[0]);
    GUI.scrollTop = parseInt(b[1]);
    for (var c = 0; c < g; c++) {
        var f = b.splice(2, 4);
        GUI.savedAppearanceVars.push(f)
    }
    GUI.savedValues = b.splice(2, b.length)
};
GUI.savedValues = [];
GUI.savedAppearanceVars = [];
GUI.getSaveString = function () {
    var b = [];
    b.push(GUI.allGuis.length);
    b.push(document.body.scrollTop);
    for (var g in GUI.allGuis)for (var c = GUI.allGuis[g].appearanceVars(), f = 0; f < c.length; f++)b.push(c[f]);
    for (g in GUI.allControllers)if (GUI.allControllers[g].type != "function") {
        c = GUI.allControllers[g].getValue();
        GUI.allControllers[g].type == "number" && (c = GUI.roundToDecimal(c, 4));
        b.push(c)
    }
    return b.join(",")
};
GUI.getVarFromURL = function (b) {
    for (var g, c = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), f = 0; f < c.length; f++) {
        g = c[f].split("=");
        if (g != undefined && g[0] == b)return g[1]
    }
    return null
};
GUI.replaceGetVar = function (b, g) {
    for (var c, f = window.location.href, h = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), m = 0; m < h.length; m++) {
        c = h[m].split("=");
        if (c != undefined && c[0] == b)return f.replace(c[1], g)
    }
    if (window.location.href.indexOf("?") != -1)return f + "&" + b + "=" + g;
    return f + "?" + b + "=" + g
};
GUI.saveIndex = 0;
GUI.guiIndex = 0;
GUI.showSaveString = function () {
    alert(GUI.getSaveString())
};
GUI.makeUnselectable = function (b) {
    b.onselectstart = function () {
        return!1
    };
    b.style.MozUserSelect = "none";
    b.style.KhtmlUserSelect = "none";
    b.unselectable = "on"
};
GUI.makeSelectable = function (b) {
    b.onselectstart = function () {
    };
    b.style.MozUserSelect = "auto";
    b.style.KhtmlUserSelect = "auto";
    b.unselectable = "off"
};
GUI.map = function (b, g, c, f, h) {
    return f + (h - f) * ((b - g) / (c - g))
};
GUI.constrain = function (b, g, c) {
    if (b < g)b = g; else b > c && (b = c);
    return b
};
GUI.error = function (b) {
    typeof console.error == "function" && console.error("[GUI ERROR] " + b)
};
GUI.roundToDecimal = function (b, g) {
    var c = Math.pow(10, g);
    return Math.round(b * c) / c
};
GUI.extendController = function (b) {
    b.prototype = new GUI.Controller;
    b.prototype.constructor = b
};
GUI.getVarFromURL("saveString") != null && GUI.load(GUI.getVarFromURL("saveString"));
GUI.Slider = function (b, g, c, f, h) {
    var m = !1, n = this;
    this.domElement = document.createElement("div");
    this.domElement.setAttribute("class", "guidat-slider-bg");
    this.fg = document.createElement("div");
    this.fg.setAttribute("class", "guidat-slider-fg");
    this.domElement.appendChild(this.fg);
    this.__defineSetter__("value", function (o) {
        this.fg.style.width = GUI.map(o, g, c, 0, 100) + "%"
    });
    var p = function (o) {
        if (m) {
            var t;
            t = n.domElement;
            var u = curtop = 0;
            if (t.offsetParent) {
                do {
                    u += t.offsetLeft;
                    curtop += t.offsetTop
                } while (t = t.offsetParent);
                t = [u, curtop]
            } else t = void 0;
            o = GUI.map(o.pageX, t[0], t[0] + n.domElement.offsetWidth, g, c);
            o = Math.round(o / f) * f;
            b.setValue(o)
        }
    };
    this.domElement.addEventListener("mousedown", function (o) {
        m = !0;
        n.domElement.setAttribute("class", "guidat-slider-bg active");
        n.fg.setAttribute("class", "guidat-slider-fg active");
        p(o)
    }, !1);
    document.addEventListener("mouseup", function () {
        n.domElement.setAttribute("class", "guidat-slider-bg");
        n.fg.setAttribute("class", "guidat-slider-fg");
        m = !1
    }, !1);
    document.addEventListener("mousemove", p, !1);
    this.value = h
};
GUI.Controller = function () {
    this.parent = arguments[0];
    this.object = arguments[1];
    this.propertyName = arguments[2];
    if (arguments.length > 0)this.initialValue = this.propertyName[this.object];
    this.domElement = document.createElement("div");
    this.domElement.setAttribute("class", "guidat-controller " + this.type);
    this.propertyNameElement = document.createElement("span");
    this.propertyNameElement.setAttribute("class", "guidat-propertyname");
    this.name(this.propertyName);
    this.domElement.appendChild(this.propertyNameElement);
    GUI.makeUnselectable(this.domElement)
};
GUI.Controller.prototype.changeFunction = null;
GUI.Controller.prototype.name = function (b) {
    this.propertyNameElement.innerHTML = b;
    return this
};
GUI.Controller.prototype.reset = function () {
    this.setValue(this.initialValue);
    return this
};
GUI.Controller.prototype.listen = function () {
    this.parent.listenTo(this);
    return this
};
GUI.Controller.prototype.unlisten = function () {
    this.parent.unlistenTo(this);
    return this
};
GUI.Controller.prototype.setValue = function (b) {
    this.object[this.propertyName] = b;
    this.changeFunction != null && this.changeFunction.call(this, b);
    this.updateDisplay();
    return this
};
GUI.Controller.prototype.getValue = function () {
    return this.object[this.propertyName]
};
GUI.Controller.prototype.updateDisplay = function () {
};
GUI.Controller.prototype.onChange = function (b) {
    this.changeFunction = b;
    return this
};
GUI.StringController = function () {
    this.type = "string";
    var b = this;
    GUI.Controller.apply(this, arguments);
    var g = document.createElement("input"), c = this.getValue();
    g.setAttribute("value", c);
    g.setAttribute("spellcheck", "false");
    this.domElement.addEventListener("mouseup", function () {
        g.focus();
        g.select()
    }, !1);
    g.addEventListener("keyup", function () {
        b.setValue(g.value)
    }, !1);
    this.updateDisplay = function () {
        g.value = b.getValue()
    };
    this.domElement.appendChild(g)
};
GUI.extendController(GUI.StringController);
GUI.NumberController = function () {
    this.type = "number";
    GUI.Controller.apply(this, arguments);
    var b = this, g = !1, c = !1, f = py = 0, h = arguments[3], m = arguments[4], n = arguments[5];
    n || (n = h != undefined && m != undefined ? (m - h) * 0.01 : 1);
    var p = document.createElement("input");
    p.setAttribute("id", this.propertyName);
    p.setAttribute("type", "text");
    p.setAttribute("value", this.getValue());
    n && p.setAttribute("step", n);
    this.domElement.appendChild(p);
    var o;
    if (h != undefined && m != undefined) {
        o = new GUI.Slider(this, h, m, n, this.getValue());
        this.domElement.appendChild(o.domElement)
    }
    p.addEventListener("blur", function () {
        var u = parseFloat(this.value);
        if (isNaN(u))this.value = b.getValue(); else b.updateDisplay()
    }, !1);
    p.addEventListener("mousewheel", function (u) {
        u.preventDefault();
        b.setValue(b.getValue() + Math.abs(u.wheelDeltaY) / u.wheelDeltaY * n);
        return!1
    }, !1);
    p.addEventListener("mousedown", function (u) {
        py = f = u.pageY;
        c = !0;
        document.addEventListener("mousemove", t, !1)
    }, !1);
    p.addEventListener("keydown", function (u) {
        switch (u.keyCode) {
            case 38:
                u = b.getValue() + n;
                b.setValue(u);
                break;
            case 40:
                u = b.getValue() - n;
                b.setValue(u)
        }
    }, !1);
    document.addEventListener("mouseup", function () {
        document.removeEventListener("mousemove", t, !1);
        GUI.makeSelectable(b.parent.domElement);
        GUI.makeSelectable(p);
        if (c && !g) {
            p.focus();
            p.select()
        }
        g = !1;
        c = !1
    }, !1);
    var t = function (u) {
        g = !0;
        u.preventDefault();
        GUI.makeUnselectable(b.parent.domElement);
        GUI.makeUnselectable(p);
        py = f;
        f = u.pageY;
        u = py - f;
        u = b.getValue() + u * n;
        b.setValue(u);
        return!1
    };
    this.setValue = function (u) {
        u = parseFloat(u);
        if (h != undefined && u <= h)u = h; else m != undefined && u >= m && (u = m);
        return GUI.Controller.prototype.setValue.call(this, u)
    };
    this.updateDisplay = function () {
        p.value = GUI.roundToDecimal(b.getValue(), 4);
        if (o)o.value = b.getValue()
    }
};
GUI.extendController(GUI.NumberController);
GUI.FunctionController = function () {
    this.type = "function";
    var b = this;
    GUI.Controller.apply(this, arguments);
    this.domElement.addEventListener("click", function () {
        b.object[b.propertyName].call(b.object)
    }, !1);
    this.domElement.style.cursor = "pointer";
    this.propertyNameElement.style.cursor = "pointer"
};
GUI.extendController(GUI.FunctionController);
GUI.BooleanController = function () {
    this.type = "boolean";
    GUI.Controller.apply(this, arguments);
    var b = this, g = document.createElement("input");
    g.setAttribute("type", "checkbox");
    this.domElement.addEventListener("click", function (c) {
        g.checked = !g.checked;
        c.preventDefault();
        b.setValue(g.checked)
    }, !1);
    g.addEventListener("mouseup", function () {
        g.checked = !g.checked
    }, !1);
    this.domElement.style.cursor = "pointer";
    this.propertyNameElement.style.cursor = "pointer";
    this.domElement.appendChild(g);
    this.updateDisplay = function () {
        g.checked = b.getValue()
    };
    this.setValue = function (c) {
        if (typeof c != "boolean")try {
            c = eval(c)
        } catch (f) {
        }
        return GUI.Controller.prototype.setValue.call(this, c)
    }
};
GUI.extendController(GUI.BooleanController);
var DAT = DAT || {};
DAT.Color = function () {
    function b() {
        var o = DAT.color.rgba_to_hsva(m.r, m.g, m.b, m.a), t;
        for (t in o)isNaN(o[t]) || (n[t] = o[t])
    }

    function g(o) {
        var t = DAT.color["hex" + DAT.color.prefix_substitute + o];
        f.__defineGetter__(o, function () {
            return m[o]
        });
        f.__defineSetter__(o, function (u) {
            if (typeof u != "number")throw DAT.color.InvalidArgumentException;
            m[o] = u;
            m.hex != undefined && console.log("wtf");
            h = t.call(f, h, u);
            b()
        })
    }

    function c(o) {
        f.__defineSetter__(o, function (t) {
            if (typeof t != "number")throw DAT.color.InvalidArgumentException;
            isNaN(t) || (n[o] = t);
            m = DAT.color.hsva_to_rgba(n.h, n.s, n.v, m.a);
            m.hex != undefined && console.log("wtf");
            h = DAT.color.rgba_to_hex(m.r, m.g, m.b, m.a)
        });
        f.__defineGetter__(o, function () {
            return n[o]
        })
    }

    var f = this, h = DAT.color.args_to_hex(arguments), m = {}, n = {};
    if (arguments.length == 1 && DAT.color.has_rgba_props(arguments[0])) {
        m.r = arguments[0].r;
        m.g = arguments[0].g;
        m.b = arguments[0].b;
        m.a = arguments[0].a
    } else if (arguments.length == 1 && DAT.color.has_rgb_props(arguments[0])) {
        m.r = arguments[0].r;
        m.g = arguments[0].g;
        m.b = arguments[0].b;
        m.a = DAT.color.bounds.a
    } else m = DAT.color.hex_to_rgba(h);
    if (arguments.length == 1 && arguments[0]instanceof DAT.Color) {
        n.h = arguments[0].h;
        n.s = arguments[0].s;
        n.v = arguments[0].v
    } else b();
    this.__defineSetter__("hex", function (o) {
        h = o;
        m = DAT.color.hex_to_rgba(h);
        b()
    });
    this.__defineGetter__("hex", function () {
        return h
    });
    this.toString = function () {
        return DAT.color.hex_to_string(h)
    };
    for (var p = 0; p < 4; p++)g("argb"[p]);
    for (p = 0; p < 3; p++)c("hsv"[p])
};
DAT.color = {};
(function (b) {
    function g(h) {
        var m = "bgra"[h], n = h * 8;
        b["hex" + b.prefix_component + m] = function (p) {
            return(p >> n & 255) / 255 * b.bounds[m]
        };
        b["hex" + b.prefix_substitute + m] = function (p, o) {
            o = o / b.bounds[m] * 255;
            return o << n | p & ~(255 << n)
        }
    }

    function c(h) {
        b["hex" + b.prefix_component + h] = function (m) {
            m = b.hex_to_rgba(m);
            return b.rgba_to_hsva(m.r, m.g, m.b, m.a)[h]
        };
        b["hex" + b.prefix_substitute + h] = function (m, n) {
            var p = b.hex_to_rgba(m);
            p = b.rgba_to_hsva(p.r, p.g, p.b, p.a);
            p[h] = n;
            p = b.hsva_to_rgba(p.h, p.s, p.v, p.a);
            return b.rgba_to_hex(p.r, p.g, p.b, p.a)
        }
    }

    b.prefix_component = "_to_";
    b.prefix_substitute = "_with_";
    b.InvalidArgumentException = "Invalid argument.";
    b.bounds = {a: 1, r: 255, g: 255, b: 255, h: 360, s: 100, v: 100};
    b.rgb = function (h, m, n, p) {
        return b.rgba(h, m, n, p || b.bounds.a)
    };
    b.rgba = function (h, m, n, p) {
        return new DAT.Color(h, m, n, p || b.bounds.a)
    };
    b.hsv = function (h, m, n, p) {
        return b.hsva(h, m, n, p || b.bounds.a)
    };
    b.hsva = function (h, m, n, p) {
        h = b.hsva_to_rgba(h, m, n, p || b.bounds.a);
        return new DAT.Color(h.r, h.g, h.b, h.a)
    };
    b.args_to_hex = function (h) {
        return h.length == 0 ? 0 : h.length == 1 ? typeof h[0] == "number" ? h[0] : typeof h[0] == "array" ? b.rgba_to_hex(h[0][0], h[0][1], h[0][2], h[0][3]) : typeof h[0] == "object" && b.has_rgba_props(h[0]) ? b.rgba_to_hex(h[0].r, h[0].g, h[0].b, h[0].a) : typeof h[0] == "object" && b.has_rgb_props(h[0]) ? b.rgba_to_hex(h[0].r, h[0].g, h[0].b) : 0 : h.length == 3 ? b.rgb_to_hex(h[0], h[1], h[2]) : h.length == 4 ? b.rgba_to_hex(h[0], h[1], h[2], h[3]) : 0
    };
    b.hsva_to_rgba = function (h, m, n, p) {
        h = isNaN(h) ? 0 : h;
        h = h / b.bounds.h * 360;
        m /= b.bounds.s;
        n /= b.bounds.v;
        p = p || b.bounds.a;
        var o = h / 60 - Math.floor(h / 60), t = n * (1 - m), u = n * (1 - o * m);
        m = n * (1 - (1 - o) * m);
        h = [
            [n, m, t],
            [u, n, t],
            [t, n, m],
            [t, u, n],
            [m, t, n],
            [n, t, u]
        ][Math.floor(h / 60) % 6];
        return{r: h[0] * b.bounds.r, g: h[1] * b.bounds.g, b: h[2] * b.bounds.b, a: p || b.bounds.a}
    };
    b.hsv_to_rgb = b.hsva_to_rgba;
    b.rgba_to_hsva = function (h, m, n, p) {
        h /= b.bounds.r;
        m /= b.bounds.g;
        n /= b.bounds.b;
        var o = Math.max(h, m, n), t = o - Math.min(h, m, n), u = o;
        if (o == 0)return{h: 0, s: 0, v: 0, a: p || b.bounds.a};
        h = h == o ? (m - n) / t : m == o ? 2 + (n - h) / t : 4 + (h - m) / t;
        h /= 6;
        h < 0 && (h += 1);
        return{h: h * b.bounds.h, s: t / o * b.bounds.s, v: o * b.bounds.v, a: p || b.bounds.a}
    };
    b.rgb_to_hsv = b.rgba_to_hsva;
    b.rgba_to_hex = function (h, m, n, p) {
        p = b["hex" + b.prefix_substitute + "a"](0, p || b.bounds.a);
        p = b["hex" + b.prefix_substitute + "r"](p, h);
        p = b["hex" + b.prefix_substitute + "g"](p, m);
        return b["hex" + b.prefix_substitute + "b"](p, n)
    };
    b.rgb_to_hex = b.rgba_to_hex;
    b.hex_to_rgba = function (h) {
        return{a: b["hex" + b.prefix_component + "a"](h), r: b["hex" + b.prefix_component + "r"](h), g: b["hex" + b.prefix_component + "g"](h), b: b["hex" + b.prefix_component + "b"](h)}
    };
    b.hex_to_rgb = b.hex_to_rgba;
    b.hex_to_string = function (h) {
        var m = b["hex" + b.prefix_component + "a"](h) / b.bounds.a, n = Math.round(b["hex" + b.prefix_component + "r"](h) / b.bounds.r * 255), p = Math.round(b["hex" + b.prefix_component + "g"](h) / b.bounds.g * 255);
        h = Math.round(b["hex" + b.prefix_component + "b"](h) / b.bounds.b * 255);
        return"rgba(" + n + "," + p + "," + h + "," + m + ")"
    };
    b.has_rgba_props = function (h) {
        return h.r != undefined && h.g != undefined && h.b != undefined && h.a != undefined
    };
    b.has_rgb_props = function (h) {
        return h.r != undefined && h.g != undefined && h.b != undefined
    };
    for (var f = 0; f < 4; f++)g(f);
    for (f = 0; f < 3; f++)c("hsv"[f])
})(DAT.color);
var signals = function () {
    function b(c, f, h, m, n) {
        this._listener = f;
        this._isOnce = h;
        this.context = m;
        this._signal = c;
        this._priority = n || 0
    }

    var g = {VERSION: "0.5.3"};
    b.prototype = {_isEnabled: !0, execute: function (c) {
        var f;
        if (this._isEnabled) {
            f = this._listener.apply(this.context, c);
            this._isOnce && this.detach()
        }
        return f
    }, detach: function () {
        return this._signal.remove(this._listener)
    }, getListener: function () {
        return this._listener
    }, dispose: function () {
        this.detach();
        this._destroy()
    }, _destroy: function () {
        delete this._signal;
        delete this._isOnce;
        delete this._listener;
        delete this.context
    }, disable: function () {
        this._isEnabled = !1
    }, enable: function () {
        this._isEnabled = !0
    }, isEnabled: function () {
        return this._isEnabled
    }, isOnce: function () {
        return this._isOnce
    }, toString: function () {
        return"[SignalBinding isOnce: " + this._isOnce + ", isEnabled: " + this._isEnabled + "]"
    }};
    g.Signal = function () {
        this._bindings = []
    };
    g.Signal.prototype = {_shouldPropagate: !0, _isEnabled: !0, _registerListener: function (c, f, h, m) {
        if (typeof c !== "function")throw Error("listener is a required param of add() and addOnce() and should be a Function.");
        var n = this._indexOfListener(c);
        if (n !== -1) {
            c = this._bindings[n];
            if (c.isOnce() !== f)throw Error("You cannot add" + (f ? "" : "Once") + "() then add" + (!f ? "" : "Once") + "() the same listener without removing the relationship first.");
        } else {
            c = new b(this, c, f, h, m);
            this._addBinding(c)
        }
        return c
    }, _addBinding: function (c) {
        var f = this._bindings.length;
        do--f; while (this._bindings[f] && c._priority <= this._bindings[f]._priority);
        this._bindings.splice(f + 1, 0, c)
    }, _indexOfListener: function (c) {
        for (var f = this._bindings.length; f--;)if (this._bindings[f]._listener === c)return f;
        return-1
    }, add: function (c, f, h) {
        return this._registerListener(c, !1, f, h)
    }, addOnce: function (c, f, h) {
        return this._registerListener(c, !0, f, h)
    }, remove: function (c) {
        if (typeof c !== "function")throw Error("listener is a required param of remove() and should be a Function.");
        var f = this._indexOfListener(c);
        if (f !== -1) {
            this._bindings[f]._destroy();
            this._bindings.splice(f, 1)
        }
        return c
    }, removeAll: function () {
        for (var c = this._bindings.length; c--;)this._bindings[c]._destroy();
        this._bindings.length = 0
    }, getNumListeners: function () {
        return this._bindings.length
    }, disable: function () {
        this._isEnabled = !1
    }, enable: function () {
        this._isEnabled = !0
    }, isEnabled: function () {
        return this._isEnabled
    }, halt: function () {
        this._shouldPropagate = !1
    }, dispatch: function () {
        if (this._isEnabled) {
            var c = Array.prototype.slice.call(arguments), f = this._bindings.slice(), h = this._bindings.length;
            this._shouldPropagate = !0;
            do h--; while (f[h] && this._shouldPropagate && f[h].execute(c) !== !1)
        }
    }, dispose: function () {
        this.removeAll();
        delete this._bindings
    }, toString: function () {
        return"[Signal isEnabled: " + this._isEnabled + " numListeners: " + this.getNumListeners() + "]"
    }};
    return g
}(), TWEEN = TWEEN || function () {
    var b, g, c, f = [];
    this.add = function (h) {
        f.push(h)
    };
    this.remove = function (h) {
        b = f.indexOf(h);
        b !== -1 && f.splice(b, 1)
    };
    this.update = function () {
        b = 0;
        g = f.length;
        for (c = (new Date).getTime(); b < g;)if (f[b].update(c))b++; else {
            f.splice(b, 1);
            g--
        }
    };
    return this
}();
TWEEN.Tween = function (b) {
    var g = {}, c = {}, f = {}, h = 1E3, m = 0, n = null, p = TWEEN.Easing.Linear.EaseNone, o = null, t = null, u = null;
    this.to = function (w, x) {
        x !== null && (h = x);
        for (var y in w)b[y] !== null && (f[y] = w[y]);
        return this
    };
    this.start = function () {
        TWEEN.add(this);
        n = (new Date).getTime() + m;
        for (var w in f)if (b[w] !== null) {
            g[w] = b[w];
            c[w] = f[w] - b[w]
        }
        return this
    };
    this.stop = function () {
        TWEEN.remove(this);
        return this
    };
    this.delay = function (w) {
        m = w;
        return this
    };
    this.easing = function (w) {
        p = w;
        return this
    };
    this.chain = function (w) {
        o = w
    };
    this.onUpdate = function (w) {
        t = w;
        return this
    };
    this.onComplete = function (w) {
        u = w;
        return this
    };
    this.update = function (w) {
        var x, y;
        if (w < n)return!0;
        w = (w - n) / h;
        w = w > 1 ? 1 : w;
        y = p(w);
        for (x in c)b[x] = g[x] + c[x] * y;
        t !== null && t.call(b, y);
        if (w == 1) {
            u !== null && u.call(b);
            o !== null && o.start();
            return!1
        }
        return!0
    }
};
TWEEN.Easing = {Linear: {}, Quadratic: {}, Cubic: {}, Quartic: {}, Quintic: {}, Sinusoidal: {}, Exponential: {}, Circular: {}, Elastic: {}, Back: {}, Bounce: {}};
TWEEN.Easing.Linear.EaseNone = function (b) {
    return b
};
TWEEN.Easing.Quadratic.EaseIn = function (b) {
    return b * b
};
TWEEN.Easing.Quadratic.EaseOut = function (b) {
    return-b * (b - 2)
};
TWEEN.Easing.Quadratic.EaseInOut = function (b) {
    if ((b *= 2) < 1)return 0.5 * b * b;
    return-0.5 * (--b * (b - 2) - 1)
};
TWEEN.Easing.Cubic.EaseIn = function (b) {
    return b * b * b
};
TWEEN.Easing.Cubic.EaseOut = function (b) {
    return--b * b * b + 1
};
TWEEN.Easing.Cubic.EaseInOut = function (b) {
    if ((b *= 2) < 1)return 0.5 * b * b * b;
    return 0.5 * ((b -= 2) * b * b + 2)
};
TWEEN.Easing.Quartic.EaseIn = function (b) {
    return b * b * b * b
};
TWEEN.Easing.Quartic.EaseOut = function (b) {
    return-(--b * b * b * b - 1)
};
TWEEN.Easing.Quartic.EaseInOut = function (b) {
    if ((b *= 2) < 1)return 0.5 * b * b * b * b;
    return-0.5 * ((b -= 2) * b * b * b - 2)
};
TWEEN.Easing.Quintic.EaseIn = function (b) {
    return b * b * b * b * b
};
TWEEN.Easing.Quintic.EaseOut = function (b) {
    return(b -= 1) * b * b * b * b + 1
};
TWEEN.Easing.Quintic.EaseInOut = function (b) {
    if ((b *= 2) < 1)return 0.5 * b * b * b * b * b;
    return 0.5 * ((b -= 2) * b * b * b * b + 2)
};
TWEEN.Easing.Sinusoidal.EaseIn = function (b) {
    return-Math.cos(b * Math.PI / 2) + 1
};
TWEEN.Easing.Sinusoidal.EaseOut = function (b) {
    return Math.sin(b * Math.PI / 2)
};
TWEEN.Easing.Sinusoidal.EaseInOut = function (b) {
    return-0.5 * (Math.cos(Math.PI * b) - 1)
};
TWEEN.Easing.Exponential.EaseIn = function (b) {
    return b == 0 ? 0 : Math.pow(2, 10 * (b - 1))
};
TWEEN.Easing.Exponential.EaseOut = function (b) {
    return b == 1 ? 1 : -Math.pow(2, -10 * b) + 1
};
TWEEN.Easing.Exponential.EaseInOut = function (b) {
    if (b == 0)return 0;
    if (b == 1)return 1;
    if ((b *= 2) < 1)return 0.5 * Math.pow(2, 10 * (b - 1));
    return 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2)
};
TWEEN.Easing.Circular.EaseIn = function (b) {
    return-(Math.sqrt(1 - b * b) - 1)
};
TWEEN.Easing.Circular.EaseOut = function (b) {
    return Math.sqrt(1 - --b * b)
};
TWEEN.Easing.Circular.EaseInOut = function (b) {
    if ((b /= 0.5) < 1)return-0.5 * (Math.sqrt(1 - b * b) - 1);
    return 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1)
};
TWEEN.Easing.Elastic.EaseIn = function (b) {
    var g, c = 0.1, f = 0.4;
    if (b == 0)return 0;
    if (b == 1)return 1;
    f || (f = 0.3);
    if (!c || c < 1) {
        c = 1;
        g = f / 4
    } else g = f / (2 * Math.PI) * Math.asin(1 / c);
    return-(c * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - g) * 2 * Math.PI / f))
};
TWEEN.Easing.Elastic.EaseOut = function (b) {
    var g, c = 0.1, f = 0.4;
    if (b == 0)return 0;
    if (b == 1)return 1;
    f || (f = 0.3);
    if (!c || c < 1) {
        c = 1;
        g = f / 4
    } else g = f / (2 * Math.PI) * Math.asin(1 / c);
    return c * Math.pow(2, -10 * b) * Math.sin((b - g) * 2 * Math.PI / f) + 1
};
TWEEN.Easing.Elastic.EaseInOut = function (b) {
    var g, c = 0.1, f = 0.4;
    if (b == 0)return 0;
    if (b == 1)return 1;
    f || (f = 0.3);
    if (!c || c < 1) {
        c = 1;
        g = f / 4
    } else g = f / (2 * Math.PI) * Math.asin(1 / c);
    if ((b *= 2) < 1)return-0.5 * c * Math.pow(2, 10 * (b -= 1)) * Math.sin((b - g) * 2 * Math.PI / f);
    return c * Math.pow(2, -10 * (b -= 1)) * Math.sin((b - g) * 2 * Math.PI / f) * 0.5 + 1
};
TWEEN.Easing.Back.EaseIn = function (b) {
    return b * b * (2.70158 * b - 1.70158)
};
TWEEN.Easing.Back.EaseOut = function (b) {
    return(b -= 1) * b * (2.70158 * b + 1.70158) + 1
};
TWEEN.Easing.Back.EaseInOut = function (b) {
    if ((b *= 2) < 1)return 0.5 * b * b * (3.5949095 * b - 2.5949095);
    return 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2)
};
TWEEN.Easing.Bounce.EaseIn = function (b) {
    return 1 - TWEEN.Easing.Bounce.EaseOut(1 - b)
};
TWEEN.Easing.Bounce.EaseOut = function (b) {
    return(b /= 1) < 1 / 2.75 ? 7.5625 * b * b : b < 2 / 2.75 ? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75 : b < 2.5 / 2.75 ? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375 : 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375
};
TWEEN.Easing.Bounce.EaseInOut = function (b) {
    if (b < 0.5)return TWEEN.Easing.Bounce.EaseIn(b * 2) * 0.5;
    return TWEEN.Easing.Bounce.EaseOut(b * 2 - 1) * 0.5 + 0.5
};
var THREE = THREE || {};
if (!window.Int32Array) {
    window.Int32Array = Array;
    window.Float32Array = Array
}
THREE.Color = function (b) {
    this.setHex(b)
};
THREE.Color.prototype = {copy: function (b) {
    this.r = b.r;
    this.g = b.g;
    this.b = b.b;
    this.hex = b.hex
}, setHex: function (b) {
    this.hex = ~~b & 16777215;
    this.updateRGB()
}, setRGB: function (b, g, c) {
    this.r = b;
    this.g = g;
    this.b = c;
    this.updateHex()
}, setHSV: function (b, g, c) {
    var f, h, m, n, p, o;
    if (c == 0)f = h = m = 0; else switch (n = Math.floor(b * 6), p = b * 6 - n, b = c * (1 - g), o = c * (1 - g * p), g = c * (1 - g * (1 - p)), n) {
        case 1:
            f = o;
            h = c;
            m = b;
            break;
        case 2:
            f = b;
            h = c;
            m = g;
            break;
        case 3:
            f = b;
            h = o;
            m = c;
            break;
        case 4:
            f = g;
            h = b;
            m = c;
            break;
        case 5:
            f = c;
            h = b;
            m = o;
            break;
        case 6:
        case 0:
            f = c;
            h = g;
            m = b
    }
    this.setRGB(f, h, m)
}, updateHex: function () {
    this.hex = ~~(this.r * 255) << 16 ^ ~~(this.g * 255) << 8 ^ ~~(this.b * 255)
}, updateRGB: function () {
    this.r = (this.hex >> 16 & 255) / 255;
    this.g = (this.hex >> 8 & 255) / 255;
    this.b = (this.hex & 255) / 255
}, clone: function () {
    return new THREE.Color(this.hex)
}};
THREE.Vector2 = function (b, g) {
    this.set(b || 0, g || 0)
};
THREE.Vector2.prototype = {set: function (b, g) {
    this.x = b;
    this.y = g;
    return this
}, copy: function (b) {
    this.x = b.x;
    this.y = b.y;
    return this
}, clone: function () {
    return new THREE.Vector2(this.x, this.y)
}, add: function (b, g) {
    this.x = b.x + g.x;
    this.y = b.y + g.y;
    return this
}, addSelf: function (b) {
    this.x += b.x;
    this.y += b.y;
    return this
}, sub: function (b, g) {
    this.x = b.x - g.x;
    this.y = b.y - g.y;
    return this
}, subSelf: function (b) {
    this.x -= b.x;
    this.y -= b.y;
    return this
}, multiplyScalar: function (b) {
    this.x *= b;
    this.y *= b;
    return this
}, divideScalar: function (b) {
    b ? (this.x /= b, this.y /= b) : this.set(0, 0);
    return this
}, negate: function () {
    return this.multiplyScalar(-1)
}, dot: function (b) {
    return this.x * b.x + this.y * b.y
}, lengthSq: function () {
    return this.x * this.x + this.y * this.y
}, length: function () {
    return Math.sqrt(this.lengthSq())
}, normalize: function () {
    return this.divideScalar(this.length())
}, setLength: function (b) {
    return this.normalize().multiplyScalar(b)
}, unit: function () {
    return this.normalize()
}};
THREE.Vector3 = function (b, g, c) {
    this.set(b || 0, g || 0, c || 0)
};
THREE.Vector3.prototype = {set: function (b, g, c) {
    this.x = b;
    this.y = g;
    this.z = c;
    return this
}, copy: function (b) {
    this.x = b.x;
    this.y = b.y;
    this.z = b.z;
    return this
}, clone: function () {
    return new THREE.Vector3(this.x, this.y, this.z)
}, add: function (b, g) {
    this.x = b.x + g.x;
    this.y = b.y + g.y;
    this.z = b.z + g.z;
    return this
}, addSelf: function (b) {
    this.x += b.x;
    this.y += b.y;
    this.z += b.z;
    return this
}, addScalar: function (b) {
    this.x += b;
    this.y += b;
    this.z += b;
    return this
}, sub: function (b, g) {
    this.x = b.x - g.x;
    this.y = b.y - g.y;
    this.z = b.z - g.z;
    return this
}, subSelf: function (b) {
    this.x -= b.x;
    this.y -= b.y;
    this.z -= b.z;
    return this
}, multiply: function (b, g) {
    this.x = b.x * g.x;
    this.y = b.y * g.y;
    this.z = b.z * g.z;
    return this
}, multiplySelf: function (b) {
    this.x *= b.x;
    this.y *= b.y;
    this.z *= b.y;
    return this
}, multiplyScalar: function (b) {
    this.x *= b;
    this.y *= b;
    this.z *= b;
    return this
}, divideSelf: function (b) {
    return this.divide(this, b)
}, divideScalar: function (b) {
    b ? (this.x /= b, this.y /= b, this.z /= b) : this.set(0, 0, 0);
    return this
}, negate: function () {
    return this.multiplyScalar(-1)
}, dot: function (b) {
    return this.x * b.x + this.y * b.y + this.z * b.z
}, lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z
}, length: function () {
    return Math.sqrt(this.lengthSq())
}, lengthManhattan: function () {
    return this.x + this.y + this.z
}, normalize: function () {
    return this.divideScalar(this.length())
}, setLength: function (b) {
    return this.normalize().multiplyScalar(b)
}, cross: function (b, g) {
    this.x = b.y * g.z - b.z * g.y;
    this.y = b.z * g.x - b.x * g.z;
    this.z = b.x * g.y - b.y * g.x;
    return this
}, crossSelf: function (b) {
    return this.set(this.y * b.z - this.z * b.y, this.z * b.x - this.x * b.z, this.x * b.y - this.y * b.x)
}, distanceTo: function (b) {
    return Math.sqrt(this.distanceToSquared(b))
}, distanceToSquared: function (b) {
    return(new THREE.Vector3).sub(this, b).lengthSq()
}, setPositionFromMatrix: function (b) {
    this.x = b.n14;
    this.y = b.n24;
    this.z = b.n34
}, setRotationFromMatrix: function (b) {
    var g = Math.cos(this.y);
    this.y = Math.asin(b.n13);
    Math.abs(g) > 1.0E-5 ? (this.x = Math.atan2(-b.n23 / g, b.n33 / g), this.z = Math.atan2(-b.n12 / g, b.n11 / g)) : (this.x = 0, this.z = Math.atan2(b.n21, b.n22))
}, isZero: function () {
    return this.lengthSq() < 1.0E-4
}};
THREE.Vector4 = function (b, g, c, f) {
    this.set(b || 0, g || 0, c || 0, f || 1)
};
THREE.Vector4.prototype = {set: function (b, g, c, f) {
    this.x = b;
    this.y = g;
    this.z = c;
    this.w = f;
    return this
}, copy: function (b) {
    return this.set(b.x, b.y, b.z, b.w || 1)
}, clone: function () {
    return new THREE.Vector4(this.x, this.y, this.z, this.w)
}, add: function (b, g) {
    this.x = b.x + g.x;
    this.y = b.y + g.y;
    this.z = b.z + g.z;
    this.w = b.w + g.w;
    return this
}, addSelf: function (b) {
    this.x += b.x;
    this.y += b.y;
    this.z += b.z;
    this.w += b.w;
    return this
}, sub: function (b, g) {
    this.x = b.x - g.x;
    this.y = b.y - g.y;
    this.z = b.z - g.z;
    this.w = b.w - g.w;
    return this
}, subSelf: function (b) {
    this.x -= b.x;
    this.y -= b.y;
    this.z -= b.z;
    this.w -= b.w;
    return this
}, multiplyScalar: function (b) {
    this.x *= b;
    this.y *= b;
    this.z *= b;
    this.w *= b;
    return this
}, divideScalar: function (b) {
    b ? (this.x /= b, this.y /= b, this.z /= b, this.w /= b) : this.set(0, 0, 0, 1);
    return this
}, negate: function () {
    return this.multiplyScalar(-1)
}, dot: function (b) {
    return this.x * b.x + this.y * b.y + this.z * b.z + this.w * b.w
}, lengthSq: function () {
    return this.dot(this)
}, length: function () {
    return Math.sqrt(this.lengthSq())
}, normalize: function () {
    return this.divideScalar(this.length())
}, setLength: function (b) {
    return this.normalize().multiplyScalar(b)
}, lerpSelf: function (b, g) {
    this.x += (b.x - this.x) * g;
    this.y += (b.y - this.y) * g;
    this.z += (b.z - this.z) * g;
    this.w += (b.w - this.w) * g;
    return this
}};
THREE.Ray = function (b, g) {
    this.origin = b || new THREE.Vector3;
    this.direction = g || new THREE.Vector3
};
THREE.Ray.prototype = {intersectScene: function (b) {
    return this.intersectObjects(b.objects)
}, intersectObjects: function (b) {
    var g, c, f = [];
    g = 0;
    for (c = b.length; g < c; g++)f = f.concat(this.intersectObject(b[g]));
    f.sort(function (h, m) {
        return h.distance - m.distance
    });
    return f
}, intersectObject: function (b) {
    function g(A, E, C) {
        var H;
        H = C.position.clone().subSelf(A).dot(E);
        A = A.clone().addSelf(E.clone().multiplyScalar(H));
        return C.position.distanceTo(A)
    }

    function c(A, E, C, H) {
        H = H.clone().subSelf(E);
        C = C.clone().subSelf(E);
        var G = A.clone().subSelf(E);
        A = H.dot(H);
        E = H.dot(C);
        H = H.dot(G);
        var I = C.dot(C);
        C = C.dot(G);
        G = 1 / (A * I - E * E);
        I = (I * H - E * C) * G;
        A = (A * C - E * H) * G;
        return I > 0 && A > 0 && I + A < 1
    }

    if (b instanceof THREE.Particle) {
        var f = g(this.origin, this.direction, b);
        if (!f || f > b.scale.x)return[];
        return[
            {distance: f, point: b.position, face: null, object: b}
        ]
    } else if (b instanceof THREE.Mesh) {
        f = g(this.origin, this.direction, b);
        if (!f || f > b.geometry.boundingSphere.radius * Math.max(b.scale.x, Math.max(b.scale.y, b.scale.z)))return[];
        var h, m, n, p, o, t, u, w, x, y, z = b.geometry, D = z.vertices, B = [];
        f = 0;
        for (h = z.faces.length; f < h; f++)if (m = z.faces[f], x = this.origin.clone(), y = this.direction.clone(), t = b.matrixWorld, n = t.multiplyVector3(D[m.a].position.clone()), p = t.multiplyVector3(D[m.b].position.clone()), o = t.multiplyVector3(D[m.c].position.clone()), t = m instanceof THREE.Face4 ? t.multiplyVector3(D[m.d].position.clone()) : null, u = b.matrixRotationWorld.multiplyVector3(m.normal.clone()), w = y.dot(u), b.doubleSided || (b.flipSided ? w > 0 : w < 0))if (u = u.dot((new THREE.Vector3).sub(n, x)) / w, x = x.addSelf(y.multiplyScalar(u)), m instanceof THREE.Face3)c(x, n, p, o) && (m = {distance: this.origin.distanceTo(x), point: x, face: m, object: b}, B.push(m)); else if (m instanceof THREE.Face4 && (c(x, n, p, t) || c(x, p, o, t))) {
            m = {distance: this.origin.distanceTo(x), point: x, face: m, object: b};
            B.push(m)
        }
        return B
    } else return[]
}};
THREE.Rectangle = function () {
    function b() {
        m = f - g;
        n = h - c
    }

    var g, c, f, h, m, n, p = !0;
    this.getX = function () {
        return g
    };
    this.getY = function () {
        return c
    };
    this.getWidth = function () {
        return m
    };
    this.getHeight = function () {
        return n
    };
    this.getLeft = function () {
        return g
    };
    this.getTop = function () {
        return c
    };
    this.getRight = function () {
        return f
    };
    this.getBottom = function () {
        return h
    };
    this.set = function (o, t, u, w) {
        p = !1;
        g = o;
        c = t;
        f = u;
        h = w;
        b()
    };
    this.addPoint = function (o, t) {
        p ? (p = !1, g = o, c = t, f = o, h = t) : (g = g < o ? g : o, c = c < t ? c : t, f = f > o ? f : o, h = h > t ? h : t);
        b()
    };
    this.add3Points = function (o, t, u, w, x, y) {
        p ? (p = !1, g = o < u ? o < x ? o : x : u < x ? u : x, c = t < w ? t < y ? t : y : w < y ? w : y, f = o > u ? o > x ? o : x : u > x ? u : x, h = t > w ? t > y ? t : y : w > y ? w : y) : (g = o < u ? o < x ? o < g ? o : g : x < g ? x : g : u < x ? u < g ? u : g : x < g ? x : g, c = t < w ? t < y ? t < c ? t : c : y < c ? y : c : w < y ? w < c ? w : c : y < c ? y : c, f = o > u ? o > x ? o > f ? o : f : x > f ? x : f : u > x ? u > f ? u : f : x > f ? x : f, h = t > w ? t > y ? t > h ? t : h : y > h ? y : h : w > y ? w > h ? w : h : y > h ? y : h);
        b()
    };
    this.addRectangle = function (o) {
        p ? (p = !1, g = o.getLeft(), c = o.getTop(), f = o.getRight(), h = o.getBottom()) : (g = g < o.getLeft() ? g : o.getLeft(), c = c < o.getTop() ? c : o.getTop(), f = f > o.getRight() ? f : o.getRight(), h = h > o.getBottom() ? h : o.getBottom());
        b()
    };
    this.inflate = function (o) {
        g -= o;
        c -= o;
        f += o;
        h += o;
        b()
    };
    this.minSelf = function (o) {
        g = g > o.getLeft() ? g : o.getLeft();
        c = c > o.getTop() ? c : o.getTop();
        f = f < o.getRight() ? f : o.getRight();
        h = h < o.getBottom() ? h : o.getBottom();
        b()
    };
    this.instersects = function (o) {
        return Math.min(f, o.getRight()) - Math.max(g, o.getLeft()) >= 0 && Math.min(h, o.getBottom()) - Math.max(c, o.getTop()) >= 0
    };
    this.empty = function () {
        p = !0;
        h = f = c = g = 0;
        b()
    };
    this.isEmpty = function () {
        return p
    }
};
THREE.Matrix3 = function () {
    this.m = []
};
THREE.Matrix3.prototype = {transpose: function () {
    var b, g = this.m;
    b = g[1];
    g[1] = g[3];
    g[3] = b;
    b = g[2];
    g[2] = g[6];
    g[6] = b;
    b = g[5];
    g[5] = g[7];
    g[7] = b;
    return this
}, transposeIntoArray: function (b) {
    var g = this.m;
    b[0] = g[0];
    b[1] = g[3];
    b[2] = g[6];
    b[3] = g[1];
    b[4] = g[4];
    b[5] = g[7];
    b[6] = g[2];
    b[7] = g[5];
    b[8] = g[8];
    return this
}};
THREE.Matrix4 = function (b, g, c, f, h, m, n, p, o, t, u, w, x, y, z, D) {
    this.set(b || 1, g || 0, c || 0, f || 0, h || 0, m || 1, n || 0, p || 0, o || 0, t || 0, u || 1, w || 0, x || 0, y || 0, z || 0, D || 1);
    this.flat = Array(16);
    this.m33 = new THREE.Matrix3
};
THREE.Matrix4.prototype = {set: function (b, g, c, f, h, m, n, p, o, t, u, w, x, y, z, D) {
    this.n11 = b;
    this.n12 = g;
    this.n13 = c;
    this.n14 = f;
    this.n21 = h;
    this.n22 = m;
    this.n23 = n;
    this.n24 = p;
    this.n31 = o;
    this.n32 = t;
    this.n33 = u;
    this.n34 = w;
    this.n41 = x;
    this.n42 = y;
    this.n43 = z;
    this.n44 = D;
    return this
}, identity: function () {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this
}, copy: function (b) {
    this.set(b.n11, b.n12, b.n13, b.n14, b.n21, b.n22, b.n23, b.n24, b.n31, b.n32, b.n33, b.n34, b.n41, b.n42, b.n43, b.n44);
    return this
}, lookAt: function (b, g, c) {
    var f = THREE.Matrix4.__v1, h = THREE.Matrix4.__v2, m = THREE.Matrix4.__v3;
    m.sub(b, g).normalize();
    if (m.length() === 0)m.z = 1;
    f.cross(c, m).normalize();
    f.length() === 0 && (m.x += 1.0E-4, f.cross(c, m).normalize());
    h.cross(m, f).normalize();
    this.n11 = f.x;
    this.n12 = h.x;
    this.n13 = m.x;
    this.n21 = f.y;
    this.n22 = h.y;
    this.n23 = m.y;
    this.n31 = f.z;
    this.n32 = h.z;
    this.n33 = m.z;
    return this
}, multiplyVector3: function (b) {
    var g = b.x, c = b.y, f = b.z, h = 1 / (this.n41 * g + this.n42 * c + this.n43 * f + this.n44);
    b.x = (this.n11 * g + this.n12 * c + this.n13 * f + this.n14) * h;
    b.y = (this.n21 * g + this.n22 * c + this.n23 * f + this.n24) * h;
    b.z = (this.n31 * g + this.n32 * c + this.n33 * f + this.n34) * h;
    return b
}, multiplyVector4: function (b) {
    var g = b.x, c = b.y, f = b.z, h = b.w;
    b.x = this.n11 * g + this.n12 * c + this.n13 * f + this.n14 * h;
    b.y = this.n21 * g + this.n22 * c + this.n23 * f + this.n24 * h;
    b.z = this.n31 * g + this.n32 * c + this.n33 * f + this.n34 * h;
    b.w = this.n41 * g + this.n42 * c + this.n43 * f + this.n44 * h;
    return b
}, rotateAxis: function (b) {
    var g = b.x, c = b.y, f = b.z;
    b.x = g * this.n11 + c * this.n12 + f * this.n13;
    b.y = g * this.n21 + c * this.n22 + f * this.n23;
    b.z = g * this.n31 + c * this.n32 + f * this.n33;
    b.normalize();
    return b
}, crossVector: function (b) {
    var g = new THREE.Vector4;
    g.x = this.n11 * b.x + this.n12 * b.y + this.n13 * b.z + this.n14 * b.w;
    g.y = this.n21 * b.x + this.n22 * b.y + this.n23 * b.z + this.n24 * b.w;
    g.z = this.n31 * b.x + this.n32 * b.y + this.n33 * b.z + this.n34 * b.w;
    g.w = b.w ? this.n41 * b.x + this.n42 * b.y + this.n43 * b.z + this.n44 * b.w : 1;
    return g
}, multiply: function (b, g) {
    var c = b.n11, f = b.n12, h = b.n13, m = b.n14, n = b.n21, p = b.n22, o = b.n23, t = b.n24, u = b.n31, w = b.n32, x = b.n33, y = b.n34, z = b.n41, D = b.n42, B = b.n43, A = b.n44, E = g.n11, C = g.n12, H = g.n13, G = g.n14, I = g.n21, V = g.n22, $ = g.n23, X = g.n24, P = g.n31, S = g.n32, v = g.n33, O = g.n34;
    this.n11 = c * E + f * I + h * P;
    this.n12 = c * C + f * V + h * S;
    this.n13 = c * H + f * $ + h * v;
    this.n14 = c * G + f * X + h * O + m;
    this.n21 = n * E + p * I + o * P;
    this.n22 = n * C + p * V + o * S;
    this.n23 = n * H + p * $ + o * v;
    this.n24 = n * G + p * X + o * O + t;
    this.n31 = u * E + w * I + x * P;
    this.n32 = u * C + w * V + x * S;
    this.n33 = u * H + w * $ + x * v;
    this.n34 = u * G + w * X + x * O + y;
    this.n41 = z * E + D * I + B * P;
    this.n42 = z * C + D * V + B * S;
    this.n43 = z * H + D * $ + B * v;
    this.n44 = z * G + D * X + B * O + A;
    return this
}, multiplyToArray: function (b, g, c) {
    this.multiply(b, g);
    c[0] = this.n11;
    c[1] = this.n21;
    c[2] = this.n31;
    c[3] = this.n41;
    c[4] = this.n12;
    c[5] = this.n22;
    c[6] = this.n32;
    c[7] = this.n42;
    c[8] = this.n13;
    c[9] = this.n23;
    c[10] = this.n33;
    c[11] = this.n43;
    c[12] = this.n14;
    c[13] = this.n24;
    c[14] = this.n34;
    c[15] = this.n44;
    return this
}, multiplySelf: function (b) {
    this.multiply(this, b);
    return this
}, multiplyScalar: function (b) {
    this.n11 *= b;
    this.n12 *= b;
    this.n13 *= b;
    this.n14 *= b;
    this.n21 *= b;
    this.n22 *= b;
    this.n23 *= b;
    this.n24 *= b;
    this.n31 *= b;
    this.n32 *= b;
    this.n33 *= b;
    this.n34 *= b;
    this.n41 *= b;
    this.n42 *= b;
    this.n43 *= b;
    this.n44 *= b;
    return this
}, determinant: function () {
    var b = this.n11, g = this.n12, c = this.n13, f = this.n14, h = this.n21, m = this.n22, n = this.n23, p = this.n24, o = this.n31, t = this.n32, u = this.n33, w = this.n34, x = this.n41, y = this.n42, z = this.n43, D = this.n44;
    return f * n * t * x - c * p * t * x - f * m * u * x + g * p * u * x + c * m * w * x - g * n * w * x - f * n * o * y + c * p * o * y + f * h * u * y - b * p * u * y - c * h * w * y + b * n * w * y + f * m * o * z - g * p * o * z - f * h * t * z + b * p * t * z + g * h * w * z - b * m * w * z - c * m * o * D + g * n * o * D + c * h * t * D - b * n * t * D - g * h * u * D + b * m * u * D
}, transpose: function () {
    var b;
    b = this.n21;
    this.n21 = this.n12;
    this.n12 = b;
    b = this.n31;
    this.n31 = this.n13;
    this.n13 = b;
    b = this.n32;
    this.n32 = this.n23;
    this.n23 = b;
    b = this.n41;
    this.n41 = this.n14;
    this.n14 = b;
    b = this.n42;
    this.n42 = this.n24;
    this.n24 = b;
    b = this.n43;
    this.n43 = this.n34;
    this.n43 = b;
    return this
}, clone: function () {
    var b = new THREE.Matrix4;
    b.n11 = this.n11;
    b.n12 = this.n12;
    b.n13 = this.n13;
    b.n14 = this.n14;
    b.n21 = this.n21;
    b.n22 = this.n22;
    b.n23 = this.n23;
    b.n24 = this.n24;
    b.n31 = this.n31;
    b.n32 = this.n32;
    b.n33 = this.n33;
    b.n34 = this.n34;
    b.n41 = this.n41;
    b.n42 = this.n42;
    b.n43 = this.n43;
    b.n44 = this.n44;
    return b
}, flatten: function () {
    this.flat[0] = this.n11;
    this.flat[1] = this.n21;
    this.flat[2] = this.n31;
    this.flat[3] = this.n41;
    this.flat[4] = this.n12;
    this.flat[5] = this.n22;
    this.flat[6] = this.n32;
    this.flat[7] = this.n42;
    this.flat[8] = this.n13;
    this.flat[9] = this.n23;
    this.flat[10] = this.n33;
    this.flat[11] = this.n43;
    this.flat[12] = this.n14;
    this.flat[13] = this.n24;
    this.flat[14] = this.n34;
    this.flat[15] = this.n44;
    return this.flat
}, flattenToArray: function (b) {
    b[0] = this.n11;
    b[1] = this.n21;
    b[2] = this.n31;
    b[3] = this.n41;
    b[4] = this.n12;
    b[5] = this.n22;
    b[6] = this.n32;
    b[7] = this.n42;
    b[8] = this.n13;
    b[9] = this.n23;
    b[10] = this.n33;
    b[11] = this.n43;
    b[12] = this.n14;
    b[13] = this.n24;
    b[14] = this.n34;
    b[15] = this.n44;
    return b
}, flattenToArrayOffset: function (b, g) {
    b[g] = this.n11;
    b[g + 1] = this.n21;
    b[g + 2] = this.n31;
    b[g + 3] = this.n41;
    b[g + 4] = this.n12;
    b[g + 5] = this.n22;
    b[g + 6] = this.n32;
    b[g + 7] = this.n42;
    b[g + 8] = this.n13;
    b[g + 9] = this.n23;
    b[g + 10] = this.n33;
    b[g + 11] = this.n43;
    b[g + 12] = this.n14;
    b[g + 13] = this.n24;
    b[g + 14] = this.n34;
    b[g + 15] = this.n44;
    return b
}, setTranslation: function (b, g, c) {
    this.set(1, 0, 0, b, 0, 1, 0, g, 0, 0, 1, c, 0, 0, 0, 1);
    return this
}, setScale: function (b, g, c) {
    this.set(b, 0, 0, 0, 0, g, 0, 0, 0, 0, c, 0, 0, 0, 0, 1);
    return this
}, setRotationX: function (b) {
    var g = Math.cos(b);
    b = Math.sin(b);
    this.set(1, 0, 0, 0, 0, g, -b, 0, 0, b, g, 0, 0, 0, 0, 1);
    return this
}, setRotationY: function (b) {
    var g = Math.cos(b);
    b = Math.sin(b);
    this.set(g, 0, b, 0, 0, 1, 0, 0, -b, 0, g, 0, 0, 0, 0, 1);
    return this
}, setRotationZ: function (b) {
    var g = Math.cos(b);
    b = Math.sin(b);
    this.set(g, -b, 0, 0, b, g, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this
}, setRotationAxis: function (b, g) {
    var c = Math.cos(g), f = Math.sin(g), h = 1 - c, m = b.x, n = b.y, p = b.z, o = h * m, t = h * n;
    this.set(o * m + c, o * n - f * p, o * p + f * n, 0, o * n + f * p, t * n + c, t * p - f * m, 0, o * p - f * n, t * p + f * m, h * p * p + c, 0, 0, 0, 0, 1);
    return this
}, setPosition: function (b) {
    this.n14 = b.x;
    this.n24 = b.y;
    this.n34 = b.z;
    return this
}, getPosition: function () {
    if (!this.position)this.position = new THREE.Vector3;
    this.position.set(this.n14, this.n24, this.n34);
    return this.position
}, getColumnX: function () {
    if (!this.columnX)this.columnX = new THREE.Vector3;
    this.columnX.set(this.n11, this.n21, this.n31);
    return this.columnX
}, getColumnY: function () {
    if (!this.columnY)this.columnY = new THREE.Vector3;
    this.columnY.set(this.n12, this.n22, this.n32);
    return this.columnY
}, getColumnZ: function () {
    if (!this.columnZ)this.columnZ = new THREE.Vector3;
    this.columnZ.set(this.n13, this.n23, this.n33);
    return this.columnZ
}, setRotationFromEuler: function (b) {
    var g = b.x, c = b.y, f = b.z;
    b = Math.cos(g);
    g = Math.sin(g);
    var h = Math.cos(c);
    c = Math.sin(c);
    var m = Math.cos(f);
    f = Math.sin(f);
    var n = b * c, p = g * c;
    this.n11 = h * m;
    this.n12 = -h * f;
    this.n13 = c;
    this.n21 = p * m + b * f;
    this.n22 = -p * f + b * m;
    this.n23 = -g * h;
    this.n31 = -n * m + g * f;
    this.n32 = n * f + g * m;
    this.n33 = b * h;
    return this
}, setRotationFromQuaternion: function (b) {
    var g = b.x, c = b.y, f = b.z, h = b.w, m = g + g, n = c + c, p = f + f;
    b = g * m;
    var o = g * n;
    g *= p;
    var t = c * n;
    c *= p;
    f *= p;
    m *= h;
    n *= h;
    h *= p;
    this.n11 = 1 - (t + f);
    this.n12 = o - h;
    this.n13 = g + n;
    this.n21 = o + h;
    this.n22 = 1 - (b + f);
    this.n23 = c - m;
    this.n31 = g - n;
    this.n32 = c + m;
    this.n33 = 1 - (b + t);
    return this
}, scale: function (b) {
    var g = b.x, c = b.y;
    b = b.z;
    this.n11 *= g;
    this.n12 *= c;
    this.n13 *= b;
    this.n21 *= g;
    this.n22 *= c;
    this.n23 *= b;
    this.n31 *= g;
    this.n32 *= c;
    this.n33 *= b;
    this.n41 *= g;
    this.n42 *= c;
    this.n43 *= b;
    return this
}, extractPosition: function (b) {
    this.n14 = b.n14;
    this.n24 = b.n24;
    this.n34 = b.n34
}, extractRotation: function (b, g) {
    var c = 1 / g.x, f = 1 / g.y, h = 1 / g.z;
    this.n11 = b.n11 * c;
    this.n21 = b.n21 * c;
    this.n31 = b.n31 * c;
    this.n12 = b.n12 * f;
    this.n22 = b.n22 * f;
    this.n32 = b.n32 * f;
    this.n13 = b.n13 * h;
    this.n23 = b.n23 * h;
    this.n33 = b.n33 * h
}};
THREE.Matrix4.makeInvert = function (b, g) {
    var c = b.n11, f = b.n12, h = b.n13, m = b.n14, n = b.n21, p = b.n22, o = b.n23, t = b.n24, u = b.n31, w = b.n32, x = b.n33, y = b.n34, z = b.n41, D = b.n42, B = b.n43, A = b.n44;
    g === void 0 && (g = new THREE.Matrix4);
    g.n11 = o * y * D - t * x * D + t * w * B - p * y * B - o * w * A + p * x * A;
    g.n12 = m * x * D - h * y * D - m * w * B + f * y * B + h * w * A - f * x * A;
    g.n13 = h * t * D - m * o * D + m * p * B - f * t * B - h * p * A + f * o * A;
    g.n14 = m * o * w - h * t * w - m * p * x + f * t * x + h * p * y - f * o * y;
    g.n21 = t * x * z - o * y * z - t * u * B + n * y * B + o * u * A - n * x * A;
    g.n22 = h * y * z - m * x * z + m * u * B - c * y * B - h * u * A + c * x * A;
    g.n23 = m * o * z - h * t * z - m * n * B + c * t * B + h * n * A - c * o * A;
    g.n24 = h * t * u - m * o * u + m * n * x - c * t * x - h * n * y + c * o * y;
    g.n31 = p * y * z - t * w * z + t * u * D - n * y * D - p * u * A + n * w * A;
    g.n32 = m * w * z - f * y * z - m * u * D + c * y * D + f * u * A - c * w * A;
    g.n33 = h * t * z - m * p * z + m * n * D - c * t * D - f * n * A + c * p * A;
    g.n34 = m * p * u - f * t * u - m * n * w + c * t * w + f * n * y - c * p * y;
    g.n41 = o * w * z - p * x * z - o * u * D + n * x * D + p * u * B - n * w * B;
    g.n42 = f * x * z - h * w * z + h * u * D - c * x * D - f * u * B + c * w * B;
    g.n43 = h * p * z - f * o * z - h * n * D + c * o * D + f * n * B - c * p * B;
    g.n44 = f * o * u - h * p * u + h * n * w - c * o * w - f * n * x + c * p * x;
    g.multiplyScalar(1 / b.determinant());
    return g
};
THREE.Matrix4.makeInvert3x3 = function (b) {
    var g = b.m33, c = g.m, f = b.n33 * b.n22 - b.n32 * b.n23, h = -b.n33 * b.n21 + b.n31 * b.n23, m = b.n32 * b.n21 - b.n31 * b.n22, n = -b.n33 * b.n12 + b.n32 * b.n13, p = b.n33 * b.n11 - b.n31 * b.n13, o = -b.n32 * b.n11 + b.n31 * b.n12, t = b.n23 * b.n12 - b.n22 * b.n13, u = -b.n23 * b.n11 + b.n21 * b.n13, w = b.n22 * b.n11 - b.n21 * b.n12;
    b = b.n11 * f + b.n21 * n + b.n31 * t;
    b == 0 && console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible.");
    b = 1 / b;
    c[0] = b * f;
    c[1] = b * h;
    c[2] = b * m;
    c[3] = b * n;
    c[4] = b * p;
    c[5] = b * o;
    c[6] = b * t;
    c[7] = b * u;
    c[8] = b * w;
    return g
};
THREE.Matrix4.makeFrustum = function (b, g, c, f, h, m) {
    var n;
    n = new THREE.Matrix4;
    n.n11 = 2 * h / (g - b);
    n.n12 = 0;
    n.n13 = (g + b) / (g - b);
    n.n14 = 0;
    n.n21 = 0;
    n.n22 = 2 * h / (f - c);
    n.n23 = (f + c) / (f - c);
    n.n24 = 0;
    n.n31 = 0;
    n.n32 = 0;
    n.n33 = -(m + h) / (m - h);
    n.n34 = -2 * m * h / (m - h);
    n.n41 = 0;
    n.n42 = 0;
    n.n43 = -1;
    n.n44 = 0;
    return n
};
THREE.Matrix4.makePerspective = function (b, g, c, f) {
    var h;
    b = c * Math.tan(b * Math.PI / 360);
    h = -b;
    return THREE.Matrix4.makeFrustum(h * g, b * g, h, b, c, f)
};
THREE.Matrix4.makeOrtho = function (b, g, c, f, h, m) {
    var n, p, o, t;
    n = new THREE.Matrix4;
    p = g - b;
    o = c - f;
    t = m - h;
    n.n11 = 2 / p;
    n.n12 = 0;
    n.n13 = 0;
    n.n14 = -((g + b) / p);
    n.n21 = 0;
    n.n22 = 2 / o;
    n.n23 = 0;
    n.n24 = -((c + f) / o);
    n.n31 = 0;
    n.n32 = 0;
    n.n33 = -2 / t;
    n.n34 = -((m + h) / t);
    n.n41 = 0;
    n.n42 = 0;
    n.n43 = 0;
    n.n44 = 1;
    return n
};
THREE.Matrix4.__v1 = new THREE.Vector3;
THREE.Matrix4.__v2 = new THREE.Vector3;
THREE.Matrix4.__v3 = new THREE.Vector3;
THREE.Object3D = function () {
    this.parent = void 0;
    this.children = [];
    this.up = new THREE.Vector3(0, 1, 0);
    this.position = new THREE.Vector3;
    this.rotation = new THREE.Vector3;
    this.scale = new THREE.Vector3(1, 1, 1);
    this.dynamic = !1;
    this.rotationAutoUpdate = !0;
    this.matrix = new THREE.Matrix4;
    this.matrixWorld = new THREE.Matrix4;
    this.matrixRotationWorld = new THREE.Matrix4;
    this.matrixWorldNeedsUpdate = this.matrixAutoUpdate = !0;
    this.quaternion = new THREE.Quaternion;
    this.useQuaternion = !1;
    this.boundRadius = 0;
    this.boundRadiusScale = 1;
    this.visible = !0;
    this._vector = new THREE.Vector3;
    this.name = ""
};
THREE.Object3D.prototype = {translate: function (b, g) {
    this.matrix.rotateAxis(g);
    this.position.addSelf(g.multiplyScalar(b))
}, translateX: function (b) {
    this.translate(b, this._vector.set(1, 0, 0))
}, translateY: function (b) {
    this.translate(b, this._vector.set(0, 1, 0))
}, translateZ: function (b) {
    this.translate(b, this._vector.set(0, 0, 1))
}, lookAt: function (b) {
    this.matrix.lookAt(b, this.position, this.up);
    this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
}, addChild: function (b) {
    if (this.children.indexOf(b) === -1) {
        b.parent !== void 0 && b.parent.removeChild(b);
        b.parent = this;
        this.children.push(b);
        for (var g = this; g.parent !== void 0;)g = g.parent;
        g !== void 0 && g instanceof THREE.Scene && g.addChildRecurse(b)
    }
}, removeChild: function (b) {
    var g = this.children.indexOf(b);
    if (g !== -1) {
        b.parent = void 0;
        this.children.splice(g, 1)
    }
}, getChildByName: function (b, g) {
    var c, f, h;
    c = 0;
    for (f = this.children.length; c < f; c++) {
        h = this.children[c];
        if (h.name === b)return h;
        if (g && (h = h.getChildByName(b, g), h !== void 0))return h
    }
}, updateMatrix: function () {
    this.matrix.setPosition(this.position);
    this.useQuaternion ? this.matrix.setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(this.rotation);
    if (this.scale.x !== 1 || this.scale.y !== 1 || this.scale.z !== 1) {
        this.matrix.scale(this.scale);
        this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z))
    }
    this.matrixWorldNeedsUpdate = !0
}, update: function (b, g, c) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || g) {
        b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
        this.matrixRotationWorld.extractRotation(this.matrixWorld, this.scale);
        this.matrixWorldNeedsUpdate = !1;
        g = !0
    }
    b = 0;
    for (var f = this.children.length; b < f; b++)this.children[b].update(this.matrixWorld, g, c)
}};
THREE.Quaternion = function (b, g, c, f) {
    this.set(b || 0, g || 0, c || 0, f !== void 0 ? f : 1)
};
THREE.Quaternion.prototype = {set: function (b, g, c, f) {
    this.x = b;
    this.y = g;
    this.z = c;
    this.w = f;
    return this
}, copy: function (b) {
    this.x = b.x;
    this.y = b.y;
    this.z = b.z;
    this.w = b.w;
    return this
}, setFromEuler: function (b) {
    var g = 0.5 * Math.PI / 360, c = b.x * g, f = b.y * g, h = b.z * g;
    b = Math.cos(f);
    f = Math.sin(f);
    g = Math.cos(-h);
    h = Math.sin(-h);
    var m = Math.cos(c);
    c = Math.sin(c);
    var n = b * g, p = f * h;
    this.w = n * m - p * c;
    this.x = n * c + p * m;
    this.y = f * g * m + b * h * c;
    this.z = b * h * m - f * g * c;
    return this
}, setFromAxisAngle: function (b, g) {
    var c = g / 2, f = Math.sin(c);
    this.x = b.x * f;
    this.y = b.y * f;
    this.z = b.z * f;
    this.w = Math.cos(c);
    return this
}, calculateW: function () {
    this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z));
    return this
}, inverse: function () {
    this.x *= -1;
    this.y *= -1;
    this.z *= -1;
    return this
}, length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
}, normalize: function () {
    var b = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    b == 0 ? this.w = this.z = this.y = this.x = 0 : (b = 1 / b, this.x *= b, this.y *= b, this.z *= b, this.w *= b);
    return this
}, multiplySelf: function (b) {
    var g = this.x, c = this.y, f = this.z, h = this.w, m = b.x, n = b.y, p = b.z;
    b = b.w;
    this.x = g * b + h * m + c * p - f * n;
    this.y = c * b + h * n + f * m - g * p;
    this.z = f * b + h * p + g * n - c * m;
    this.w = h * b - g * m - c * n - f * p;
    return this
}, multiply: function (b, g) {
    this.x = b.x * g.w + b.y * g.z - b.z * g.y + b.w * g.x;
    this.y = -b.x * g.z + b.y * g.w + b.z * g.x + b.w * g.y;
    this.z = b.x * g.y - b.y * g.x + b.z * g.w + b.w * g.z;
    this.w = -b.x * g.x - b.y * g.y - b.z * g.z + b.w * g.w;
    return this
}, multiplyVector3: function (b, g) {
    g || (g = b);
    var c = b.x, f = b.y, h = b.z, m = this.x, n = this.y, p = this.z, o = this.w, t = o * c + n * h - p * f, u = o * f + p * c - m * h, w = o * h + m * f - n * c;
    c = -m * c - n * f - p * h;
    g.x = t * o + c * -m + u * -p - w * -n;
    g.y = u * o + c * -n + w * -m - t * -p;
    g.z = w * o + c * -p + t * -n - u * -m;
    return g
}};
THREE.Quaternion.slerp = function (b, g, c, f) {
    var h = b.w * g.w + b.x * g.x + b.y * g.y + b.z * g.z;
    if (Math.abs(h) >= 1)return c.w = b.w, c.x = b.x, c.y = b.y, c.z = b.z, c;
    var m = Math.acos(h), n = Math.sqrt(1 - h * h);
    if (Math.abs(n) < 0.0010)return c.w = 0.5 * (b.w + g.w), c.x = 0.5 * (b.x + g.x), c.y = 0.5 * (b.y + g.y), c.z = 0.5 * (b.z + g.z), c;
    h = Math.sin((1 - f) * m) / n;
    f = Math.sin(f * m) / n;
    c.w = b.w * h + g.w * f;
    c.x = b.x * h + g.x * f;
    c.y = b.y * h + g.y * f;
    c.z = b.z * h + g.z * f;
    return c
};
THREE.Vertex = function (b) {
    this.position = b || new THREE.Vector3
};
THREE.Face3 = function (b, g, c, f, h, m) {
    this.a = b;
    this.b = g;
    this.c = c;
    this.normal = f instanceof THREE.Vector3 ? f : new THREE.Vector3;
    this.vertexNormals = f instanceof Array ? f : [];
    this.color = h instanceof THREE.Color ? h : new THREE.Color;
    this.vertexColors = h instanceof Array ? h : [];
    this.vertexTangents = [];
    this.materials = m instanceof Array ? m : [m];
    this.centroid = new THREE.Vector3
};
THREE.Face4 = function (b, g, c, f, h, m, n) {
    this.a = b;
    this.b = g;
    this.c = c;
    this.d = f;
    this.normal = h instanceof THREE.Vector3 ? h : new THREE.Vector3;
    this.vertexNormals = h instanceof Array ? h : [];
    this.color = m instanceof THREE.Color ? m : new THREE.Color;
    this.vertexColors = m instanceof Array ? m : [];
    this.vertexTangents = [];
    this.materials = n instanceof Array ? n : [n];
    this.centroid = new THREE.Vector3
};
THREE.UV = function (b, g) {
    this.set(b || 0, g || 0)
};
THREE.UV.prototype = {set: function (b, g) {
    this.u = b;
    this.v = g;
    return this
}, copy: function (b) {
    this.set(b.u, b.v);
    return this
}};
THREE.Geometry = function () {
    this.id = "Geometry" + THREE.GeometryIdCounter++;
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.edges = [];
    this.faceUvs = [
        []
    ];
    this.faceVertexUvs = [
        []
    ];
    this.morphTargets = [];
    this.morphColors = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.hasTangents = !1
};
THREE.Geometry.prototype = {computeCentroids: function () {
    var b, g, c;
    b = 0;
    for (g = this.faces.length; b < g; b++) {
        c = this.faces[b];
        c.centroid.set(0, 0, 0);
        c instanceof THREE.Face3 ? (c.centroid.addSelf(this.vertices[c.a].position), c.centroid.addSelf(this.vertices[c.b].position), c.centroid.addSelf(this.vertices[c.c].position), c.centroid.divideScalar(3)) : c instanceof THREE.Face4 && (c.centroid.addSelf(this.vertices[c.a].position), c.centroid.addSelf(this.vertices[c.b].position), c.centroid.addSelf(this.vertices[c.c].position), c.centroid.addSelf(this.vertices[c.d].position), c.centroid.divideScalar(4))
    }
}, computeFaceNormals: function (b) {
    var g, c, f, h, m, n, p = new THREE.Vector3, o = new THREE.Vector3;
    f = 0;
    for (h = this.faces.length; f < h; f++) {
        m = this.faces[f];
        if (b && m.vertexNormals.length) {
            p.set(0, 0, 0);
            g = 0;
            for (c = m.vertexNormals.length; g < c; g++)p.addSelf(m.vertexNormals[g]);
            p.divideScalar(3)
        } else {
            g = this.vertices[m.a];
            c = this.vertices[m.b];
            n = this.vertices[m.c];
            p.sub(n.position, c.position);
            o.sub(g.position, c.position);
            p.crossSelf(o)
        }
        p.isZero() || p.normalize();
        m.normal.copy(p)
    }
}, computeVertexNormals: function () {
    var b, g, c, f;
    if (this.__tmpVertices == void 0) {
        f = this.__tmpVertices = Array(this.vertices.length);
        b = 0;
        for (g = this.vertices.length; b < g; b++)f[b] = new THREE.Vector3;
        b = 0;
        for (g = this.faces.length; b < g; b++)if (c = this.faces[b], c instanceof THREE.Face3)c.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]; else if (c instanceof THREE.Face4)c.vertexNormals = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3]
    } else {
        f = this.__tmpVertices;
        b = 0;
        for (g = this.vertices.length; b < g; b++)f[b].set(0, 0, 0)
    }
    b = 0;
    for (g = this.faces.length; b < g; b++) {
        c = this.faces[b];
        c instanceof THREE.Face3 ? (f[c.a].addSelf(c.normal), f[c.b].addSelf(c.normal), f[c.c].addSelf(c.normal)) : c instanceof THREE.Face4 && (f[c.a].addSelf(c.normal), f[c.b].addSelf(c.normal), f[c.c].addSelf(c.normal), f[c.d].addSelf(c.normal))
    }
    b = 0;
    for (g = this.vertices.length; b < g; b++)f[b].normalize();
    b = 0;
    for (g = this.faces.length; b < g; b++) {
        c = this.faces[b];
        c instanceof THREE.Face3 ? (c.vertexNormals[0].copy(f[c.a]), c.vertexNormals[1].copy(f[c.b]), c.vertexNormals[2].copy(f[c.c])) : c instanceof THREE.Face4 && (c.vertexNormals[0].copy(f[c.a]), c.vertexNormals[1].copy(f[c.b]), c.vertexNormals[2].copy(f[c.c]), c.vertexNormals[3].copy(f[c.d]))
    }
}, computeTangents: function () {
    function b(R, aa, W, ea, ma, oa, ya) {
        p = R.vertices[aa].position;
        o = R.vertices[W].position;
        t = R.vertices[ea].position;
        u = n[ma];
        w = n[oa];
        x = n[ya];
        y = o.x - p.x;
        z = t.x - p.x;
        D = o.y - p.y;
        B = t.y - p.y;
        A = o.z - p.z;
        E = t.z - p.z;
        C = w.u - u.u;
        H = x.u - u.u;
        G = w.v - u.v;
        I = x.v - u.v;
        V = 1 / (C * I - H * G);
        S.set((I * y - G * z) * V, (I * D - G * B) * V, (I * A - G * E) * V);
        v.set((C * z - H * y) * V, (C * B - H * D) * V, (C * E - H * A) * V);
        X[aa].addSelf(S);
        X[W].addSelf(S);
        X[ea].addSelf(S);
        P[aa].addSelf(v);
        P[W].addSelf(v);
        P[ea].addSelf(v)
    }

    var g, c, f, h, m, n, p, o, t, u, w, x, y, z, D, B, A, E, C, H, G, I, V, $, X = [], P = [], S = new THREE.Vector3, v = new THREE.Vector3, O = new THREE.Vector3, J = new THREE.Vector3, T = new THREE.Vector3;
    g = 0;
    for (c = this.vertices.length; g < c; g++) {
        X[g] = new THREE.Vector3;
        P[g] = new THREE.Vector3
    }
    g = 0;
    for (c = this.faces.length; g < c; g++) {
        m = this.faces[g];
        n = this.faceVertexUvs[0][g];
        m instanceof THREE.Face3 ? b(this, m.a, m.b, m.c, 0, 1, 2) : m instanceof THREE.Face4 && (b(this, m.a, m.b, m.c, 0, 1, 2), b(this, m.a, m.b, m.d, 0, 1, 3))
    }
    var K = ["a", "b", "c", "d"];
    g = 0;
    for (c = this.faces.length; g < c; g++) {
        m = this.faces[g];
        for (f = 0; f < m.vertexNormals.length; f++) {
            T.copy(m.vertexNormals[f]);
            h = m[K[f]];
            $ = X[h];
            O.copy($);
            O.subSelf(T.multiplyScalar(T.dot($))).normalize();
            J.cross(m.vertexNormals[f], $);
            h = J.dot(P[h]);
            h = h < 0 ? -1 : 1;
            m.vertexTangents[f] = new THREE.Vector4(O.x, O.y, O.z, h)
        }
    }
    this.hasTangents = !0
}, computeBoundingBox: function () {
    var b;
    if (this.vertices.length > 0) {
        this.boundingBox = {x: [this.vertices[0].position.x, this.vertices[0].position.x], y: [this.vertices[0].position.y, this.vertices[0].position.y], z: [this.vertices[0].position.z, this.vertices[0].position.z]};
        for (var g = 1, c = this.vertices.length; g < c; g++) {
            b = this.vertices[g];
            if (b.position.x < this.boundingBox.x[0])this.boundingBox.x[0] = b.position.x; else if (b.position.x > this.boundingBox.x[1])this.boundingBox.x[1] = b.position.x;
            if (b.position.y < this.boundingBox.y[0])this.boundingBox.y[0] = b.position.y; else if (b.position.y > this.boundingBox.y[1])this.boundingBox.y[1] = b.position.y;
            if (b.position.z < this.boundingBox.z[0])this.boundingBox.z[0] = b.position.z; else if (b.position.z > this.boundingBox.z[1])this.boundingBox.z[1] = b.position.z
        }
    }
}, computeBoundingSphere: function () {
    for (var b = 0, g = 0, c = this.vertices.length; g < c; g++)b = Math.max(b, this.vertices[g].position.length());
    this.boundingSphere = {radius: b}
}, computeEdgeFaces: function () {
    function b(o, t) {
        return Math.min(o, t) + "_" + Math.max(o, t)
    }

    function g(o, t, u) {
        o[t] === void 0 ? (o[t] = {set: {}, array: []}, o[t].set[u] = 1, o[t].array.push(u)) : o[t].set[u] === void 0 && (o[t].set[u] = 1, o[t].array.push(u))
    }

    var c, f, h, m, n, p = {};
    c = 0;
    for (f = this.faces.length; c < f; c++) {
        n = this.faces[c];
        n instanceof THREE.Face3 ? (h = b(n.a, n.b), g(p, h, c), h = b(n.b, n.c), g(p, h, c), h = b(n.a, n.c), g(p, h, c)) : n instanceof THREE.Face4 && (h = b(n.b, n.d), g(p, h, c), h = b(n.a, n.b), g(p, h, c), h = b(n.a, n.d), g(p, h, c), h = b(n.b, n.c), g(p, h, c), h = b(n.c, n.d), g(p, h, c))
    }
    c = 0;
    for (f = this.edges.length; c < f; c++) {
        n = this.edges[c];
        h = n.vertexIndices[0];
        m = n.vertexIndices[1];
        n.faceIndices = p[b(h, m)].array;
        for (h = 0; h < n.faceIndices.length; h++) {
            m = n.faceIndices[h];
            n.faces.push(this.faces[m])
        }
    }
}};
THREE.GeometryIdCounter = 0;
THREE.Spline = function (b) {
    function g(y, z, D, B, A, E, C) {
        y = (D - y) * 0.5;
        B = (B - z) * 0.5;
        return(2 * (z - D) + y + B) * C + (-3 * (z - D) - 2 * y - B) * E + y * A + z
    }

    this.points = b;
    var c = [], f = {x: 0, y: 0, z: 0}, h, m, n, p, o, t, u, w, x;
    this.initFromArray = function (y) {
        this.points = [];
        for (var z = 0; z < y.length; z++)this.points[z] = {x: y[z][0], y: y[z][1], z: y[z][2]}
    };
    this.getPoint = function (y) {
        h = (this.points.length - 1) * y;
        m = Math.floor(h);
        n = h - m;
        c[0] = m == 0 ? m : m - 1;
        c[1] = m;
        c[2] = m > this.points.length - 2 ? m : m + 1;
        c[3] = m > this.points.length - 3 ? m : m + 2;
        t = this.points[c[0]];
        u = this.points[c[1]];
        w = this.points[c[2]];
        x = this.points[c[3]];
        p = n * n;
        o = n * p;
        f.x = g(t.x, u.x, w.x, x.x, n, p, o);
        f.y = g(t.y, u.y, w.y, x.y, n, p, o);
        f.z = g(t.z, u.z, w.z, x.z, n, p, o);
        return f
    };
    this.getControlPointsArray = function () {
        var y, z, D = this.points.length, B = [];
        for (y = 0; y < D; y++) {
            z = this.points[y];
            B[y] = [z.x, z.y, z.z]
        }
        return B
    };
    this.getLength = function (y) {
        var z, D, B = 0, A = new THREE.Vector3, E = new THREE.Vector3, C = [], H = 0;
        C[0] = 0;
        y || (y = 100);
        D = this.points.length * y;
        A.copy(this.points[0]);
        for (y = 1; y < D; y++) {
            z = y / D;
            position = this.getPoint(z);
            E.copy(position);
            H += E.distanceTo(A);
            A.copy(position);
            z *= this.points.length - 1;
            z = Math.floor(z);
            z != B && (C[z] = H, B = z)
        }
        C[C.length] = H;
        return{chunks: C, total: H}
    };
    this.reparametrizeByArcLength = function (y) {
        var z, D, B, A, E, C, H = [], G = new THREE.Vector3, I = this.getLength();
        H.push(G.copy(this.points[0]).clone());
        for (z = 1; z < this.points.length; z++) {
            D = I.chunks[z] - I.chunks[z - 1];
            C = Math.ceil(y * D / I.total);
            A = (z - 1) / (this.points.length - 1);
            E = z / (this.points.length - 1);
            for (D = 1; D < C - 1; D++) {
                B = A + D * (1 / C) * (E - A);
                position = this.getPoint(B);
                H.push(G.copy(position).clone())
            }
            H.push(G.copy(this.points[z]).clone())
        }
        this.points = H
    }
};
THREE.Edge = function (b, g, c, f) {
    this.vertices = [b, g];
    this.vertexIndices = [c, f];
    this.faces = [];
    this.faceIndices = []
};
THREE.Camera = function (b, g, c, f, h) {
    THREE.Object3D.call(this);
    this.fov = b || 50;
    this.aspect = g || 1;
    this.near = c || 0.1;
    this.far = f || 2E3;
    this.target = h || new THREE.Object3D;
    this.useTarget = !0;
    this.matrixWorldInverse = new THREE.Matrix4;
    this.projectionMatrix = null;
    this.updateProjectionMatrix()
};
THREE.Camera.prototype = new THREE.Object3D;
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.supr = THREE.Object3D.prototype;
THREE.Camera.prototype.translate = function (b, g) {
    this.matrix.rotateAxis(g);
    this.position.addSelf(g.multiplyScalar(b));
    this.target.position.addSelf(g.multiplyScalar(b))
};
THREE.Camera.prototype.updateProjectionMatrix = function () {
    this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near, this.far)
};
THREE.Camera.prototype.update = function (b, g, c) {
    if (this.useTarget) {
        this.matrix.lookAt(this.position, this.target.position, this.up);
        this.matrix.setPosition(this.position);
        b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
        THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse);
        g = !0
    } else if (this.matrixAutoUpdate && this.updateMatrix(), g || this.matrixWorldNeedsUpdate) {
        b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
        this.matrixWorldNeedsUpdate = !1;
        g = !0;
        THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse)
    }
    for (b = 0; b < this.children.length; b++)this.children[b].update(this.matrixWorld, g, c)
};
THREE.Light = function (b) {
    THREE.Object3D.call(this);
    this.color = new THREE.Color(b)
};
THREE.Light.prototype = new THREE.Object3D;
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.supr = THREE.Object3D.prototype;
THREE.AmbientLight = function (b) {
    THREE.Light.call(this, b)
};
THREE.AmbientLight.prototype = new THREE.Light;
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function (b, g, c, f) {
    THREE.Light.call(this, b);
    this.position = new THREE.Vector3(0, 1, 0);
    this.intensity = g || 1;
    this.distance = c || 0;
    this.castShadow = f !== void 0 ? f : !1
};
THREE.DirectionalLight.prototype = new THREE.Light;
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function (b, g, c) {
    THREE.Light.call(this, b);
    this.position = new THREE.Vector3;
    this.intensity = g || 1;
    this.distance = c || 0
};
THREE.PointLight.prototype = new THREE.Light;
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.LensFlare = function (b, g, c, f) {
    THREE.Object3D.call(this);
    this.positionScreen = new THREE.Vector3;
    this.lensFlares = [];
    this.customUpdateCallback = void 0;
    b !== void 0 && this.add(b, g, c, f)
};
THREE.LensFlare.prototype = new THREE.Object3D;
THREE.LensFlare.prototype.constructor = THREE.LensFlare;
THREE.LensFlare.prototype.supr = THREE.Object3D.prototype;
THREE.LensFlare.prototype.add = function (b, g, c, f) {
    g === void 0 && (g = -1);
    c === void 0 && (c = 0);
    if (f === void 0)f = THREE.BillboardBlending;
    c = Math.min(c, Math.max(0, c));
    this.lensFlares.push({texture: b, size: g, distance: c, x: 0, y: 0, z: 0, scale: 1, rotation: 1, opacity: 1, blending: f})
};
THREE.LensFlare.prototype.updateLensFlares = function () {
    var b, g = this.lensFlares.length, c, f = -this.positionScreen.x * 2, h = -this.positionScreen.y * 2;
    for (b = 0; b < g; b++) {
        c = this.lensFlares[b];
        c.x = this.positionScreen.x + f * c.distance;
        c.y = this.positionScreen.y + h * c.distance;
        c.wantedRotation = c.x * Math.PI * 0.25;
        c.rotation += (c.wantedRotation - c.rotation) * 0.25
    }
};
THREE.Material = function (b) {
    this.id = THREE.MaterialCounter.value++;
    b = b || {};
    this.opacity = b.opacity !== void 0 ? b.opacity : 1;
    this.transparent = b.transparent !== void 0 ? b.transparent : !1;
    this.blending = b.blending !== void 0 ? b.blending : THREE.NormalBlending;
    this.depthTest = b.depthTest !== void 0 ? b.depthTest : !0
};
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.MultiplyBlending = 3;
THREE.AdditiveAlphaBlending = 4;
THREE.MaterialCounter = {value: 0};
THREE.CubeReflectionMapping = function () {
};
THREE.CubeRefractionMapping = function () {
};
THREE.LatitudeReflectionMapping = function () {
};
THREE.LatitudeRefractionMapping = function () {
};
THREE.SphericalReflectionMapping = function () {
};
THREE.SphericalRefractionMapping = function () {
};
THREE.UVMapping = function () {
};
THREE.LineBasicMaterial = function (b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.linewidth = b.linewidth !== void 0 ? b.linewidth : 1;
    this.linecap = b.linecap !== void 0 ? b.linecap : "round";
    this.linejoin = b.linejoin !== void 0 ? b.linejoin : "round";
    this.vertexColors = b.vertexColors ? b.vertexColors : !1
};
THREE.LineBasicMaterial.prototype = new THREE.Material;
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.MeshBasicMaterial = function (b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.map = b.map !== void 0 ? b.map : null;
    this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
    this.envMap = b.envMap !== void 0 ? b.envMap : null;
    this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
    this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
    this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
    this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
    this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
    this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
    this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
    this.skinning = b.skinning !== void 0 ? b.skinning : !1;
    this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshBasicMaterial.prototype = new THREE.Material;
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial = function (b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.map = b.map !== void 0 ? b.map : null;
    this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
    this.envMap = b.envMap !== void 0 ? b.envMap : null;
    this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
    this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
    this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
    this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
    this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
    this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
    this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
    this.skinning = b.skinning !== void 0 ? b.skinning : !1;
    this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshLambertMaterial.prototype = new THREE.Material;
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshPhongMaterial = function (b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.ambient = b.ambient !== void 0 ? new THREE.Color(b.ambient) : new THREE.Color(328965);
    this.specular = b.specular !== void 0 ? new THREE.Color(b.specular) : new THREE.Color(1118481);
    this.shininess = b.shininess !== void 0 ? b.shininess : 30;
    this.map = b.map !== void 0 ? b.map : null;
    this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
    this.envMap = b.envMap !== void 0 ? b.envMap : null;
    this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
    this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
    this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
    this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
    this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
    this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
    this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
    this.skinning = b.skinning !== void 0 ? b.skinning : !1;
    this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshPhongMaterial.prototype = new THREE.Material;
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshDepthMaterial = function (b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1
};
THREE.MeshDepthMaterial.prototype = new THREE.Material;
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshNormalMaterial = function (b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.shading = b.shading ? b.shading : THREE.FlatShading;
    this.wireframe = b.wireframe ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth ? b.wireframeLinewidth : 1
};
THREE.MeshNormalMaterial.prototype = new THREE.Material;
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshFaceMaterial = function () {
};
THREE.MeshShaderMaterial = function (b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.fragmentShader = b.fragmentShader !== void 0 ? b.fragmentShader : "void main() {}";
    this.vertexShader = b.vertexShader !== void 0 ? b.vertexShader : "void main() {}";
    this.uniforms = b.uniforms !== void 0 ? b.uniforms : {};
    this.attributes = b.attributes;
    this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
    this.fog = b.fog !== void 0 ? b.fog : !1;
    this.lights = b.lights !== void 0 ? b.lights : !1;
    this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
    this.skinning = b.skinning !== void 0 ? b.skinning : !1;
    this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.MeshShaderMaterial.prototype = new THREE.Material;
THREE.MeshShaderMaterial.prototype.constructor = THREE.MeshShaderMaterial;
THREE.ParticleBasicMaterial = function (b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.map = b.map !== void 0 ? b.map : null;
    this.size = b.size !== void 0 ? b.size : 1;
    this.sizeAttenuation = b.sizeAttenuation !== void 0 ? b.sizeAttenuation : !0;
    this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1
};
THREE.ParticleBasicMaterial.prototype = new THREE.Material;
THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial;
THREE.ShadowVolumeDynamicMaterial = function (b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== void 0 ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.map = b.map !== void 0 ? b.map : null;
    this.lightMap = b.lightMap !== void 0 ? b.lightMap : null;
    this.envMap = b.envMap !== void 0 ? b.envMap : null;
    this.combine = b.combine !== void 0 ? b.combine : THREE.MultiplyOperation;
    this.reflectivity = b.reflectivity !== void 0 ? b.reflectivity : 1;
    this.refractionRatio = b.refractionRatio !== void 0 ? b.refractionRatio : 0.98;
    this.shading = b.shading !== void 0 ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== void 0 ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== void 0 ? b.wireframeLinewidth : 1;
    this.wireframeLinecap = b.wireframeLinecap !== void 0 ? b.wireframeLinecap : "round";
    this.wireframeLinejoin = b.wireframeLinejoin !== void 0 ? b.wireframeLinejoin : "round";
    this.vertexColors = b.vertexColors !== void 0 ? b.vertexColors : !1;
    this.skinning = b.skinning !== void 0 ? b.skinning : !1;
    this.morphTargets = b.morphTargets !== void 0 ? b.morphTargets : !1
};
THREE.ShadowVolumeDynamicMaterial.prototype = new THREE.Material;
THREE.ShadowVolumeDynamicMaterial.prototype.constructor = THREE.ShadowVolumeDynamicMaterial;
THREE.Texture = function (b, g, c, f, h, m) {
    this.image = b;
    this.mapping = g !== void 0 ? g : new THREE.UVMapping;
    this.wrapS = c !== void 0 ? c : THREE.ClampToEdgeWrapping;
    this.wrapT = f !== void 0 ? f : THREE.ClampToEdgeWrapping;
    this.magFilter = h !== void 0 ? h : THREE.LinearFilter;
    this.minFilter = m !== void 0 ? m : THREE.LinearMipMapLinearFilter;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.needsUpdate = !1
};
THREE.Texture.prototype = {clone: function () {
    return new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter)
}};
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;
THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;
THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
THREE.Particle = function (b) {
    THREE.Object3D.call(this);
    this.materials = b instanceof Array ? b : [b]
};
THREE.Particle.prototype = new THREE.Object3D;
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.ParticleSystem = function (b, g) {
    THREE.Object3D.call(this);
    this.geometry = b;
    this.materials = g instanceof Array ? g : [g];
    this.sortParticles = !1
};
THREE.ParticleSystem.prototype = new THREE.Object3D;
THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
THREE.Line = function (b, g, c) {
    THREE.Object3D.call(this);
    this.geometry = b;
    this.materials = g instanceof Array ? g : [g];
    this.type = c != void 0 ? c : THREE.LineStrip
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D;
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function (b, g) {
    THREE.Object3D.call(this);
    this.geometry = b;
    this.materials = g && g.length ? g : [g];
    this.overdraw = this.doubleSided = this.flipSided = !1;
    if (this.geometry && (this.geometry.boundingSphere || this.geometry.computeBoundingSphere(), this.boundRadius = b.boundingSphere.radius, this.geometry.morphTargets.length)) {
        this.morphTargetBase = -1;
        this.morphTargetForcedOrder = [];
        this.morphTargetInfluences = [];
        this.morphTargetDictionary = {};
        for (var c = 0; c < this.geometry.morphTargets.length; c++) {
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[this.geometry.morphTargets[c].name] = c
        }
    }
};
THREE.Mesh.prototype = new THREE.Object3D;
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
THREE.Mesh.prototype.getMorphTargetIndexByName = function (b) {
    if (this.morphTargetDictionary[b] !== void 0)return this.morphTargetDictionary[b];
    console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + b + " does not exist. Returning 0.");
    return 0
};
THREE.Bone = function (b) {
    THREE.Object3D.call(this);
    this.skin = b;
    this.skinMatrix = new THREE.Matrix4;
    this.hasNoneBoneChildren = !1
};
THREE.Bone.prototype = new THREE.Object3D;
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.supr = THREE.Object3D.prototype;
THREE.Bone.prototype.update = function (b, g, c) {
    this.matrixAutoUpdate && (g |= this.updateMatrix());
    if (g || this.matrixWorldNeedsUpdate) {
        b ? this.skinMatrix.multiply(b, this.matrix) : this.skinMatrix.copy(this.matrix);
        this.matrixWorldNeedsUpdate = !1;
        g = !0
    }
    var f, h = this.children.length;
    if (this.hasNoneBoneChildren) {
        this.matrixWorld.multiply(this.skin.matrixWorld, this.skinMatrix);
        for (f = 0; f < h; f++) {
            b = this.children[f];
            b instanceof THREE.Bone ? b.update(this.skinMatrix, g, c) : b.update(this.matrixWorld, !0, c)
        }
    } else for (f = 0; f < h; f++)this.children[f].update(this.skinMatrix, g, c)
};
THREE.Bone.prototype.addChild = function (b) {
    if (this.children.indexOf(b) === -1 && (b.parent !== void 0 && b.parent.removeChild(b), b.parent = this, this.children.push(b), !(b instanceof THREE.Bone)))this.hasNoneBoneChildren = !0
};
THREE.SkinnedMesh = function (b, g) {
    THREE.Mesh.call(this, b, g);
    this.identityMatrix = new THREE.Matrix4;
    this.bones = [];
    this.boneMatrices = [];
    var c, f, h, m, n, p;
    if (this.geometry.bones !== void 0) {
        for (c = 0; c < this.geometry.bones.length; c++) {
            h = this.geometry.bones[c];
            m = h.pos;
            n = h.rotq;
            p = h.scl;
            f = this.addBone();
            f.name = h.name;
            f.position.set(m[0], m[1], m[2]);
            f.quaternion.set(n[0], n[1], n[2], n[3]);
            f.useQuaternion = !0;
            p !== void 0 ? f.scale.set(p[0], p[1], p[2]) : f.scale.set(1, 1, 1)
        }
        for (c = 0; c < this.bones.length; c++) {
            h = this.geometry.bones[c];
            f = this.bones[c];
            h.parent === -1 ? this.addChild(f) : this.bones[h.parent].addChild(f)
        }
        this.boneMatrices = new Float32Array(16 * this.bones.length);
        this.pose()
    }
};
THREE.SkinnedMesh.prototype = new THREE.Mesh;
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.update = function (b, g, c) {
    if (this.visible) {
        this.matrixAutoUpdate && (g |= this.updateMatrix());
        if (g || this.matrixWorldNeedsUpdate) {
            b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
            this.matrixWorldNeedsUpdate = !1;
            g = !0
        }
        var f, h = this.children.length;
        for (f = 0; f < h; f++) {
            b = this.children[f];
            b instanceof THREE.Bone ? b.update(this.identityMatrix, !1, c) : b.update(this.matrixWorld, g, c)
        }
        c = this.bones.length;
        ba = this.bones;
        bm = this.boneMatrices;
        for (g = 0; g < c; g++)ba[g].skinMatrix.flattenToArrayOffset(bm, g * 16)
    }
};
THREE.SkinnedMesh.prototype.addBone = function (b) {
    b === void 0 && (b = new THREE.Bone(this));
    this.bones.push(b);
    return b
};
THREE.SkinnedMesh.prototype.pose = function () {
    this.update(void 0, !0);
    for (var b, g = [], c = 0; c < this.bones.length; c++) {
        b = this.bones[c];
        g.push(THREE.Matrix4.makeInvert(b.skinMatrix));
        b.skinMatrix.flattenToArrayOffset(this.boneMatrices, c * 16)
    }
    if (this.geometry.skinVerticesA === void 0) {
        this.geometry.skinVerticesA = [];
        this.geometry.skinVerticesB = [];
        var f;
        for (b = 0; b < this.geometry.skinIndices.length; b++) {
            c = this.geometry.vertices[b].position;
            var h = this.geometry.skinIndices[b].x, m = this.geometry.skinIndices[b].y;
            f = new THREE.Vector3(c.x, c.y, c.z);
            this.geometry.skinVerticesA.push(g[h].multiplyVector3(f));
            f = new THREE.Vector3(c.x, c.y, c.z);
            this.geometry.skinVerticesB.push(g[m].multiplyVector3(f));
            this.geometry.skinWeights[b].x + this.geometry.skinWeights[b].y !== 1 && (c = (1 - (this.geometry.skinWeights[b].x + this.geometry.skinWeights[b].y)) * 0.5, this.geometry.skinWeights[b].x += c, this.geometry.skinWeights[b].y += c)
        }
    }
};
THREE.Ribbon = function (b, g) {
    THREE.Object3D.call(this);
    this.geometry = b;
    this.materials = g instanceof Array ? g : [g];
    this.doubleSided = this.flipSided = !1
};
THREE.Ribbon.prototype = new THREE.Object3D;
THREE.Ribbon.prototype.constructor = THREE.Ribbon;
THREE.Sound = function (b, g, c, f) {
    THREE.Object3D.call(this);
    this.isPlaying = this.isAddedToDOM = this.isLoaded = !1;
    this.duration = -1;
    this.radius = g !== void 0 ? Math.abs(g) : 100;
    this.volume = Math.min(1, Math.max(0, c !== void 0 ? c : 1));
    this.domElement = document.createElement("audio");
    this.domElement.volume = 0;
    this.domElement.pan = 0;
    this.domElement.loop = f !== void 0 ? f : !0;
    this.sources = b instanceof Array ? b : [b];
    var h;
    c = this.sources.length;
    for (b = 0; b < c; b++)if (g = this.sources[b], g.toLowerCase(), g.indexOf(".mp3") !== -1 ? h = "audio/mpeg" : g.indexOf(".ogg") !== -1 ? h = "audio/ogg" : g.indexOf(".wav") !== -1 && (h = "audio/wav"), this.domElement.canPlayType(h)) {
        h = document.createElement("source");
        h.src = this.sources[b];
        this.domElement.THREESound = this;
        this.domElement.appendChild(h);
        this.domElement.addEventListener("canplay", this.onLoad, !0);
        this.domElement.load();
        break
    }
};
THREE.Sound.prototype = new THREE.Object3D;
THREE.Sound.prototype.constructor = THREE.Sound;
THREE.Sound.prototype.supr = THREE.Object3D.prototype;
THREE.Sound.prototype.onLoad = function () {
    var b = this.THREESound;
    if (!b.isLoaded) {
        this.removeEventListener("canplay", this.onLoad, !0);
        b.isLoaded = !0;
        b.duration = this.duration;
        b.isPlaying && b.play()
    }
};
THREE.Sound.prototype.addToDOM = function (b) {
    this.isAddedToDOM = !0;
    b.appendChild(this.domElement)
};
THREE.Sound.prototype.play = function (b) {
    this.isPlaying = !0;
    if (this.isLoaded && (this.domElement.play(), b))this.domElement.currentTime = b % this.duration
};
THREE.Sound.prototype.pause = function () {
    this.isPlaying = !1;
    this.domElement.pause()
};
THREE.Sound.prototype.stop = function () {
    this.isPlaying = !1;
    this.domElement.pause();
    this.domElement.currentTime = 0
};
THREE.Sound.prototype.calculateVolumeAndPan = function (b) {
    b = b.length();
    this.domElement.volume = b <= this.radius ? this.volume * (1 - b / this.radius) : 0
};
THREE.Sound.prototype.update = function (b, g, c) {
    this.matrixAutoUpdate && (this.matrix.setPosition(this.position), g = !0);
    if (g || this.matrixWorldNeedsUpdate) {
        b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
        this.matrixWorldNeedsUpdate = !1;
        g = !0
    }
    var f = this.children.length;
    for (b = 0; b < f; b++)this.children[b].update(this.matrixWorld, g, c)
};
THREE.LOD = function () {
    THREE.Object3D.call(this);
    this.LODs = []
};
THREE.LOD.prototype = new THREE.Object3D;
THREE.LOD.prototype.constructor = THREE.LOD;
THREE.LOD.prototype.supr = THREE.Object3D.prototype;
THREE.LOD.prototype.add = function (b, g) {
    g === void 0 && (g = 0);
    g = Math.abs(g);
    for (var c = 0; c < this.LODs.length; c++)if (g < this.LODs[c].visibleAtDistance)break;
    this.LODs.splice(c, 0, {visibleAtDistance: g, object3D: b});
    this.addChild(b)
};
THREE.LOD.prototype.update = function (b, g, c) {
    this.matrixAutoUpdate && (g |= this.updateMatrix());
    if (g || this.matrixWorldNeedsUpdate) {
        b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
        this.matrixWorldNeedsUpdate = !1;
        g = !0
    }
    if (this.LODs.length > 1) {
        b = c.matrixWorldInverse;
        b = -(b.n31 * this.position.x + b.n32 * this.position.y + b.n33 * this.position.z + b.n34);
        this.LODs[0].object3D.visible = !0;
        for (var f = 1; f < this.LODs.length; f++)if (b >= this.LODs[f].visibleAtDistance) {
            this.LODs[f - 1].object3D.visible = !1;
            this.LODs[f].object3D.visible = !0
        } else break;
        for (; f < this.LODs.length; f++)this.LODs[f].object3D.visible = !1
    }
    for (b = 0; b < this.children.length; b++)this.children[b].update(this.matrixWorld, g, c)
};
THREE.ShadowVolume = function (b, g) {
    b instanceof THREE.Mesh ? (THREE.Mesh.call(this, b.geometry, g ? [new THREE.ShadowVolumeDynamicMaterial] : [new THREE.ShadowVolumeDynamicMaterial]), b.addChild(this)) : THREE.Mesh.call(this, b, g ? [new THREE.ShadowVolumeDynamicMaterial] : [new THREE.ShadowVolumeDynamicMaterial]);
    this.calculateShadowVolumeGeometry()
};
THREE.ShadowVolume.prototype = new THREE.Mesh;
THREE.ShadowVolume.prototype.constructor = THREE.ShadowVolume;
THREE.ShadowVolume.prototype.supr = THREE.Mesh.prototype;
THREE.ShadowVolume.prototype.calculateShadowVolumeGeometry = function () {
    if (this.geometry.edges && this.geometry.edges.length) {
        var b, g, c, f, h, m, n, p, o, t, u, w, x, y, z = new THREE.Geometry;
        z.vertices = this.geometry.vertices;
        f = z.faces = this.geometry.faces;
        var D = z.egdes = this.geometry.edges, B = z.edgeFaces = [];
        h = 0;
        var A = [];
        b = 0;
        for (g = f.length; b < g; b++)if (c = f[b], A.push(h), h += c instanceof THREE.Face3 ? 3 : 4, c.vertexNormals[0] = c.normal, c.vertexNormals[1] = c.normal, c.vertexNormals[2] = c.normal, c instanceof THREE.Face4)c.vertexNormals[3] = c.normal;
        b = 0;
        for (g = D.length; b < g; b++) {
            p = D[b];
            c = p.faces[0];
            f = p.faces[1];
            h = p.faceIndices[0];
            m = p.faceIndices[1];
            n = p.vertexIndices[0];
            p = p.vertexIndices[1];
            c.a === n ? (o = "a", u = A[h] + 0) : c.b === n ? (o = "b", u = A[h] + 1) : c.c === n ? (o = "c", u = A[h] + 2) : c.d === n && (o = "d", u = A[h] + 3);
            c.a === p ? (o += "a", w = A[h] + 0) : c.b === p ? (o += "b", w = A[h] + 1) : c.c === p ? (o += "c", w = A[h] + 2) : c.d === p && (o += "d", w = A[h] + 3);
            f.a === n ? (t = "a", x = A[m] + 0) : f.b === n ? (t = "b", x = A[m] + 1) : f.c === n ? (t = "c", x = A[m] + 2) : f.d === n && (t = "d", x = A[m] + 3);
            f.a === p ? (t += "a", y = A[m] + 0) : f.b === p ? (t += "b", y = A[m] + 1) : f.c === p ? (t += "c", y = A[m] + 2) : f.d === p && (t += "d", y = A[m] + 3);
            o === "ac" || o === "ad" || o === "ca" || o === "da" ? u > w && (c = u, u = w, w = c) : u < w && (c = u, u = w, w = c);
            t === "ac" || t === "ad" || t === "ca" || t === "da" ? x > y && (c = x, x = y, y = c) : x < y && (c = x, x = y, y = c);
            c = new THREE.Face4(u, w, x, y);
            c.normal.set(1, 0, 0);
            B.push(c)
        }
        this.geometry = z
    } else this.calculateShadowVolumeGeometryWithoutEdgeInfo(this.geometry)
};
THREE.ShadowVolume.prototype.calculateShadowVolumeGeometryWithoutEdgeInfo = function (b) {
    this.geometry = new THREE.Geometry;
    this.geometry.boundingSphere = b.boundingSphere;
    this.geometry.edgeFaces = [];
    var g = this.geometry.vertices, c = this.geometry.faces, f = this.geometry.edgeFaces, h = b.faces;
    b = b.vertices;
    var m = h.length, n, p, o, t, u, w = ["a", "b", "c", "d"];
    for (o = 0; o < m; o++) {
        p = g.length;
        n = h[o];
        n instanceof THREE.Face4 ? (t = 4, p = new THREE.Face4(p, p + 1, p + 2, p + 3)) : (t = 3, p = new THREE.Face3(p, p + 1, p + 2));
        p.normal.copy(n.normal);
        c.push(p);
        for (p = 0; p < t; p++) {
            u = b[n[w[p]]];
            g.push(new THREE.Vertex(u.position.clone()))
        }
    }
    for (m = 0; m < h.length - 1; m++) {
        b = c[m];
        for (n = m + 1; n < h.length; n++) {
            p = c[n];
            p = this.facesShareEdge(g, b, p);
            p !== void 0 && (p = new THREE.Face4(p.indices[0], p.indices[3], p.indices[2], p.indices[1]), p.normal.set(1, 0, 0), f.push(p))
        }
    }
};
THREE.ShadowVolume.prototype.facesShareEdge = function (b, g, c) {
    var f, h, m, n, p, o, t, u, w, x, y, z, D, B = 0, A = ["a", "b", "c", "d"];
    f = g instanceof THREE.Face4 ? 4 : 3;
    h = c instanceof THREE.Face4 ? 4 : 3;
    for (z = 0; z < f; z++) {
        m = g[A[z]];
        p = b[m];
        for (D = 0; D < h; D++)if (n = c[A[D]], o = b[n], Math.abs(p.position.x - o.position.x) < 1.0E-4 && Math.abs(p.position.y - o.position.y) < 1.0E-4 && Math.abs(p.position.z - o.position.z) < 1.0E-4 && (B++, B === 1 && (t = p, u = o, w = m, x = n, y = A[z]), B === 2))return y += A[z], y === "ad" || y === "ac" ? {faces: [g, c], vertices: [t, u, o, p], indices: [w, x, n, m], vertexTypes: [1, 2, 2, 1], extrudable: !0} : {faces: [g, c], vertices: [t, p, o, u], indices: [w, m, n, x], vertexTypes: [1, 1, 2, 2], extrudable: !0}
    }
};
THREE.Sprite = function (b) {
    THREE.Object3D.call(this);
    if (b.material !== void 0) {
        this.material = b.material;
        this.map = void 0;
        this.blending = material.blending
    } else if (b.map !== void 0) {
        this.map = b.map instanceof THREE.Texture ? b.map : ImageUtils.loadTexture(b.map);
        this.material = void 0;
        this.blending = b.blending !== void 0 ? b.blending : THREE.NormalBlending
    }
    this.useScreenCoordinates = b.useScreenCoordinates !== void 0 ? b.useScreenCoordinates : !0;
    this.mergeWith3D = b.mergeWith3D !== void 0 ? b.mergeWith3D : !this.useScreenCoordinates;
    this.affectedByDistance = b.affectedByDistance !== void 0 ? b.affectedByDistance : !this.useScreenCoordinates;
    this.alignment = b.alignment instanceof THREE.Vector2 ? b.alignment : THREE.SpriteAlignment.center;
    this.rotation3d = this.rotation;
    this.rotation = 0;
    this.opacity = 1;
    this.uvOffset = new THREE.Vector2(0, 0);
    this.uvScale = new THREE.Vector2(1, 1)
};
THREE.Sprite.prototype = new THREE.Object3D;
THREE.Sprite.prototype.constructor = THREE.Sprite;
THREE.Sprite.prototype.supr = THREE.Object3D.prototype;
THREE.Sprite.prototype.updateMatrix = function () {
    this.matrix.setPosition(this.position);
    this.rotation3d.set(0, 0, this.rotation);
    this.matrix.setRotationFromEuler(this.rotation3d);
    if (this.scale.x !== 1 || this.scale.y !== 1) {
        this.matrix.scale(this.scale);
        this.boundRadiusScale = Math.max(this.scale.x, this.scale.y)
    }
    this.matrixWorldNeedsUpdate = !0
};
THREE.SpriteAlignment = {};
THREE.SpriteAlignment.topLeft = new THREE.Vector2(1, -1);
THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -1);
THREE.SpriteAlignment.topRight = new THREE.Vector2(-1, -1);
THREE.SpriteAlignment.centerLeft = new THREE.Vector2(1, 0);
THREE.SpriteAlignment.center = new THREE.Vector2(0, 0);
THREE.SpriteAlignment.centerRight = new THREE.Vector2(-1, 0);
THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(1, 1);
THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, 1);
THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-1, 1);
THREE.Scene = function () {
    THREE.Object3D.call(this);
    this.matrixAutoUpdate = !1;
    this.collisions = this.fog = null;
    this.objects = [];
    this.lights = [];
    this.sounds = [];
    this.__objectsAdded = [];
    this.__objectsRemoved = []
};
THREE.Scene.prototype = new THREE.Object3D;
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.supr = THREE.Object3D.prototype;
THREE.Scene.prototype.addChild = function (b) {
    this.supr.addChild.call(this, b);
    this.addChildRecurse(b)
};
THREE.Scene.prototype.addChildRecurse = function (b) {
    if (b instanceof THREE.Light)this.lights.indexOf(b) === -1 && this.lights.push(b); else if (b instanceof THREE.Sound)this.sounds.indexOf(b) === -1 && this.sounds.push(b); else if (!(b instanceof THREE.Camera || b instanceof THREE.Bone) && this.objects.indexOf(b) === -1) {
        this.objects.push(b);
        this.__objectsAdded.push(b)
    }
    for (var g = 0; g < b.children.length; g++)this.addChildRecurse(b.children[g])
};
THREE.Scene.prototype.removeChild = function (b) {
    this.supr.removeChild.call(this, b);
    this.removeChildRecurse(b)
};
THREE.Scene.prototype.removeChildRecurse = function (b) {
    if (b instanceof THREE.Light) {
        var g = this.lights.indexOf(b);
        g !== -1 && this.lights.splice(g, 1)
    } else b instanceof THREE.Sound ? (g = this.sounds.indexOf(b), g !== -1 && this.sounds.splice(g, 1)) : b instanceof THREE.Camera || (g = this.objects.indexOf(b), g !== -1 && (this.objects.splice(g, 1), this.__objectsRemoved.push(b)));
    for (g = 0; g < b.children.length; g++)this.removeChildRecurse(b.children[g])
};
THREE.Scene.prototype.addObject = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeObject = THREE.Scene.prototype.removeChild;
THREE.Scene.prototype.addLight = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeLight = THREE.Scene.prototype.removeChild;
THREE.Fog = function (b, g, c) {
    this.color = new THREE.Color(b);
    this.near = g || 1;
    this.far = c || 1E3
};
THREE.FogExp2 = function (b, g) {
    this.color = new THREE.Color(b);
    this.density = g !== void 0 ? g : 2.5E-4
};
THREE.Projector = function () {
    function b() {
        var P = p[n] = p[n] || new THREE.RenderableVertex;
        n++;
        return P
    }

    function g(P, S) {
        return S.z - P.z
    }

    var c, f, h = [], m, n, p = [], o, t, u = [], w, x = [], y, z, D = [], B, A, E = [], C = new THREE.Vector4, H = new THREE.Vector4, G = new THREE.Matrix4, I = new THREE.Matrix4, V = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4], $ = new THREE.Vector4, X = new THREE.Vector4;
    this.projectVector = function (P, S) {
        G.multiply(S.projectionMatrix, S.matrixWorldInverse);
        G.multiplyVector3(P);
        return P
    };
    this.unprojectVector = function (P, S) {
        G.multiply(S.matrixWorld, THREE.Matrix4.makeInvert(S.projectionMatrix));
        G.multiplyVector3(P);
        return P
    };
    this.projectObjects = function (P, S, v) {
        S = [];
        var O, J, T;
        f = 0;
        J = P.objects;
        P = 0;
        for (O = J.length; P < O; P++) {
            T = J[P];
            var K;
            if (!(K = !T.visible))if (K = T instanceof THREE.Mesh) {
                a:{
                    K = void 0;
                    for (var R = T.matrixWorld, aa = -T.geometry.boundingSphere.radius * Math.max(T.scale.x, Math.max(T.scale.y, T.scale.z)), W = 0; W < 6; W++)if (K = V[W].x * R.n14 + V[W].y * R.n24 + V[W].z * R.n34 + V[W].w, K <= aa) {
                        K = !1;
                        break a
                    }
                    K = !0
                }
                K = !K
            }
            if (!K) {
                K = h[f] = h[f] || new THREE.RenderableObject;
                f++;
                c = K;
                C.copy(T.position);
                G.multiplyVector3(C);
                c.object = T;
                c.z = C.z;
                S.push(c)
            }
        }
        v && S.sort(g);
        return S
    };
    this.projectScene = function (P, S, v) {
        var O = [], J = S.near, T = S.far, K, R, aa, W, ea, ma, oa, ya, za, qa, Ga, Da, Ha, Ia, xa, da, ja;
        A = z = w = t = 0;
        S.matrixAutoUpdate && S.update(void 0, !0);
        P.update(void 0, !1, S);
        G.multiply(S.projectionMatrix, S.matrixWorldInverse);
        V[0].set(G.n41 - G.n11, G.n42 - G.n12, G.n43 - G.n13, G.n44 - G.n14);
        V[1].set(G.n41 + G.n11, G.n42 + G.n12, G.n43 + G.n13, G.n44 + G.n14);
        V[2].set(G.n41 + G.n21, G.n42 + G.n22, G.n43 + G.n23, G.n44 + G.n24);
        V[3].set(G.n41 - G.n21, G.n42 - G.n22, G.n43 - G.n23, G.n44 - G.n24);
        V[4].set(G.n41 - G.n31, G.n42 - G.n32, G.n43 - G.n33, G.n44 - G.n34);
        V[5].set(G.n41 + G.n31, G.n42 + G.n32, G.n43 + G.n33, G.n44 + G.n34);
        for (K = 0; K < 6; K++) {
            za = V[K];
            za.divideScalar(Math.sqrt(za.x * za.x + za.y * za.y + za.z * za.z))
        }
        za = this.projectObjects(P, S, !0);
        P = 0;
        for (K = za.length; P < K; P++)if (qa = za[P].object, qa.visible)if (Ga = qa.matrixWorld, Da = qa.matrixRotationWorld, Ha = qa.materials, Ia = qa.overdraw, n = 0, qa instanceof THREE.Mesh) {
            xa = qa.geometry;
            W = xa.vertices;
            da = xa.faces;
            xa = xa.faceVertexUvs;
            R = 0;
            for (aa = W.length; R < aa; R++) {
                m = b();
                m.positionWorld.copy(W[R].position);
                Ga.multiplyVector3(m.positionWorld);
                m.positionScreen.copy(m.positionWorld);
                G.multiplyVector4(m.positionScreen);
                m.positionScreen.x /= m.positionScreen.w;
                m.positionScreen.y /= m.positionScreen.w;
                m.visible = m.positionScreen.z > J && m.positionScreen.z < T
            }
            W = 0;
            for (R = da.length; W < R; W++) {
                aa = da[W];
                if (aa instanceof THREE.Face3)if (ea = p[aa.a], ma = p[aa.b], oa = p[aa.c], ea.visible && ma.visible && oa.visible && (qa.doubleSided || qa.flipSided != (oa.positionScreen.x - ea.positionScreen.x) * (ma.positionScreen.y - ea.positionScreen.y) - (oa.positionScreen.y - ea.positionScreen.y) * (ma.positionScreen.x - ea.positionScreen.x) < 0)) {
                    ya = u[t] = u[t] || new THREE.RenderableFace3;
                    t++;
                    o = ya;
                    o.v1.copy(ea);
                    o.v2.copy(ma);
                    o.v3.copy(oa)
                } else continue; else if (aa instanceof THREE.Face4)if (ea = p[aa.a], ma = p[aa.b], oa = p[aa.c], ya = p[aa.d], ea.visible && ma.visible && oa.visible && ya.visible && (qa.doubleSided || qa.flipSided != ((ya.positionScreen.x - ea.positionScreen.x) * (ma.positionScreen.y - ea.positionScreen.y) - (ya.positionScreen.y - ea.positionScreen.y) * (ma.positionScreen.x - ea.positionScreen.x) < 0 || (ma.positionScreen.x - oa.positionScreen.x) * (ya.positionScreen.y - oa.positionScreen.y) - (ma.positionScreen.y - oa.positionScreen.y) * (ya.positionScreen.x - oa.positionScreen.x) < 0))) {
                    ja = x[w] = x[w] || new THREE.RenderableFace4;
                    w++;
                    o = ja;
                    o.v1.copy(ea);
                    o.v2.copy(ma);
                    o.v3.copy(oa);
                    o.v4.copy(ya)
                } else continue;
                o.normalWorld.copy(aa.normal);
                Da.multiplyVector3(o.normalWorld);
                o.centroidWorld.copy(aa.centroid);
                Ga.multiplyVector3(o.centroidWorld);
                o.centroidScreen.copy(o.centroidWorld);
                G.multiplyVector3(o.centroidScreen);
                oa = aa.vertexNormals;
                ea = 0;
                for (ma = oa.length; ea < ma; ea++) {
                    ya = o.vertexNormalsWorld[ea];
                    ya.copy(oa[ea]);
                    Da.multiplyVector3(ya)
                }
                ea = 0;
                for (ma = xa.length; ea < ma; ea++)if (ja = xa[ea][W]) {
                    oa = 0;
                    for (ya = ja.length; oa < ya; oa++)o.uvs[ea][oa] = ja[oa]
                }
                o.meshMaterials = Ha;
                o.faceMaterials = aa.materials;
                o.overdraw = Ia;
                o.z = o.centroidScreen.z;
                O.push(o)
            }
        } else if (qa instanceof
            THREE.Line) {
            I.multiply(G, Ga);
            W = qa.geometry.vertices;
            ea = b();
            ea.positionScreen.copy(W[0].position);
            I.multiplyVector4(ea.positionScreen);
            R = 1;
            for (aa = W.length; R < aa; R++) {
                ea = b();
                ea.positionScreen.copy(W[R].position);
                I.multiplyVector4(ea.positionScreen);
                ma = p[n - 2];
                $.copy(ea.positionScreen);
                X.copy(ma.positionScreen);
                Ga = $;
                Da = X;
                Ha = 0;
                Ia = 1;
                xa = Ga.z + Ga.w;
                da = Da.z + Da.w;
                ja = -Ga.z + Ga.w;
                var pa = -Da.z + Da.w;
                if (xa >= 0 && da >= 0 && ja >= 0 && pa >= 0 || (xa < 0 && da < 0 || ja < 0 && pa < 0 ? 0 : (xa < 0 ? Ha = Math.max(Ha, xa / (xa - da)) : da < 0 && (Ia = Math.min(Ia, xa / (xa - da))), ja < 0 ? Ha = Math.max(Ha, ja / (ja - pa)) : pa < 0 && (Ia = Math.min(Ia, ja / (ja - pa))), Ia < Ha ? !1 : (Ga.lerpSelf(Da, Ha), Da.lerpSelf(Ga, 1 - Ia), !0)))) {
                    $.multiplyScalar(1 / $.w);
                    X.multiplyScalar(1 / X.w);
                    Ga = D[z] = D[z] || new THREE.RenderableLine;
                    z++;
                    y = Ga;
                    y.v1.positionScreen.copy($);
                    y.v2.positionScreen.copy(X);
                    y.z = Math.max($.z, X.z);
                    y.materials = qa.materials;
                    O.push(y)
                }
            }
        } else if (qa instanceof THREE.Particle && (H.set(qa.matrixWorld.n14, qa.matrixWorld.n24, qa.matrixWorld.n34, 1), G.multiplyVector4(H), H.z /= H.w, H.z > 0 && H.z < 1)) {
            Ga = E[A] = E[A] || new THREE.RenderableParticle;
            A++;
            B = Ga;
            B.x = H.x / H.w;
            B.y = H.y / H.w;
            B.z = H.z;
            B.rotation = qa.rotation.z;
            B.scale.x = qa.scale.x * Math.abs(B.x - (H.x + S.projectionMatrix.n11) / (H.w + S.projectionMatrix.n14));
            B.scale.y = qa.scale.y * Math.abs(B.y - (H.y + S.projectionMatrix.n22) / (H.w + S.projectionMatrix.n24));
            B.materials = qa.materials;
            O.push(B)
        }
        v && O.sort(g);
        return O
    }
};
THREE.SoundRenderer = function () {
    this.volume = 1;
    this.domElement = document.createElement("div");
    this.domElement.id = "THREESound";
    this.cameraPosition = new THREE.Vector3;
    this.soundPosition = new THREE.Vector3;
    this.render = function (b, g, c) {
        c && b.update(void 0, !1, g);
        c = b.sounds;
        var f, h = c.length;
        for (f = 0; f < h; f++) {
            b = c[f];
            this.soundPosition.set(b.matrixWorld.n14, b.matrixWorld.n24, b.matrixWorld.n34);
            this.soundPosition.subSelf(g.position);
            b.isPlaying && b.isLoaded && (b.isAddedToDOM || b.addToDOM(this.domElement), b.calculateVolumeAndPan(this.soundPosition))
        }
    }
};
THREE.ShaderChunk = {fog_pars_fragment: "#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif", fog_fragment: "#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform int combine;\n#endif", envmap_fragment: "#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( envMap, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = vec4( mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity ), opacity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif", map_particle_pars_fragment: "#ifdef USE_MAP\nuniform sampler2D map;\n#endif", map_particle_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif", map_pars_fragment: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif", map_pars_vertex: "#ifdef USE_MAP\nvarying vec2 vUv;\nuniform vec4 offsetRepeat;\n#endif", map_fragment: "#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif", map_vertex: "#ifdef USE_MAP\nvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif", lightmap_pars_vertex: "#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif", lightmap_fragment: "#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif", lightmap_vertex: "#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif", lights_pars_vertex: "uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#ifdef PHONG\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif", lights_vertex: "if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat pointLightWeighting = max( dot( transformedNormal, lVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef PHONG\nvPointLight[ i ] = vec4( lVector, lDistance );\n#endif\n}\n#endif\n}", lights_pars_fragment: "#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", lights_fragment: "vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 mColor = vec4( diffuse, opacity );\nvec4 mSpecular = vec4( specular, opacity );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointDiffuse  = vec4( 0.0 );\nvec4 pointSpecular = vec4( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + vViewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += mColor * pointDiffuseWeight * pointDistance;\npointSpecular += mSpecular * pointSpecularWeight * pointDistance;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirDiffuse  = vec4( 0.0 );\nvec4 dirSpecular = vec4( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += mColor * dirDiffuseWeight;\ndirSpecular += mSpecular * dirSpecularWeight;\n}\n#endif\nvec4 totalLight = vec4( ambient, opacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirDiffuse + dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointDiffuse + pointSpecular;\n#endif\ngl_FragColor = gl_FragColor * totalLight;", color_pars_fragment: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif", color_fragment: "#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif", color_pars_vertex: "#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif", color_vertex: "#ifdef USE_COLOR\nvColor = color;\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n#endif", skinning_vertex: "#ifdef USE_SKINNING\ngl_Position  = ( boneGlobalMatrices[ int( skinIndex.x ) ] * skinVertexA ) * skinWeight.x;\ngl_Position += ( boneGlobalMatrices[ int( skinIndex.y ) ] * skinVertexB ) * skinWeight.y;\ngl_Position  = projectionMatrix * viewMatrix * objectMatrix * gl_Position;\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\nuniform float morphTargetInfluences[ 8 ];\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0, 0.0, 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\nmorphed += position;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n#endif", default_vertex: "#ifndef USE_MORPHTARGETS\n#ifndef USE_SKINNING\ngl_Position = projectionMatrix * mvPosition;\n#endif\n#endif"};
THREE.UniformsUtils = {merge: function (b) {
    var g, c, f, h = {};
    for (g = 0; g < b.length; g++)for (c in f = this.clone(b[g]), f)h[c] = f[c];
    return h
}, clone: function (b) {
    var g, c, f, h = {};
    for (g in b)for (c in h[g] = {}, b[g]) {
        f = b[g][c];
        h[g][c] = f instanceof THREE.Color || f instanceof THREE.Vector3 || f instanceof THREE.Texture ? f.clone() : f
    }
    return h
}};
THREE.UniformsLib = {common: {diffuse: {type: "c", value: new THREE.Color(15658734)}, opacity: {type: "f", value: 1}, map: {type: "t", value: 0, texture: null}, offsetRepeat: {type: "v4", value: new THREE.Vector4(0, 0, 1, 1)}, lightMap: {type: "t", value: 2, texture: null}, envMap: {type: "t", value: 1, texture: null}, useRefract: {type: "i", value: 0}, reflectivity: {type: "f", value: 1}, refractionRatio: {type: "f", value: 0.98}, combine: {type: "i", value: 0}, fogDensity: {type: "f", value: 2.5E-4}, fogNear: {type: "f", value: 1}, fogFar: {type: "f", value: 2E3}, fogColor: {type: "c", value: new THREE.Color(16777215)}, morphTargetInfluences: {type: "f", value: 0}}, lights: {enableLighting: {type: "i", value: 1}, ambientLightColor: {type: "fv", value: []}, directionalLightDirection: {type: "fv", value: []}, directionalLightColor: {type: "fv", value: []}, pointLightColor: {type: "fv", value: []}, pointLightPosition: {type: "fv", value: []}, pointLightDistance: {type: "fv1", value: []}}, particle: {psColor: {type: "c", value: new THREE.Color(15658734)}, opacity: {type: "f", value: 1}, size: {type: "f", value: 1}, scale: {type: "f", value: 1}, map: {type: "t", value: 0, texture: null}, fogDensity: {type: "f", value: 2.5E-4}, fogNear: {type: "f", value: 1}, fogFar: {type: "f", value: 2E3}, fogColor: {type: "c", value: new THREE.Color(16777215)}}};
THREE.ShaderLib = {lensFlareVertexTexture: {vertexShader: "uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nuniform    int     renderType;\nuniform\tsampler2D\tocclusionMap;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvarying\tfloat\tvVisibility;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ));\nvVisibility = (       visibility.r / 9.0 ) *\n( 1.0 - visibility.g / 9.0 ) *\n(       visibility.b / 9.0 ) *\n( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}", fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tfloat\t\topacity;\nuniform    int         renderType;\nvarying\tvec2\t\tvUV;\nvarying\tfloat\t\tvVisibility;\nvoid main( void )\n{\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * vVisibility;\ngl_FragColor = color;\n}\n}"}, lensFlare: {vertexShader: "uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nuniform    int     renderType;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}", fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tsampler2D\tocclusionMap;\nuniform\tfloat\t\topacity;\nuniform    int         renderType;\nvarying\tvec2\t\tvUV;\nvoid main( void )\n{\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 )).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 )).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 )).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 )).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * visibility;\ngl_FragColor = color;\n}\n}"}, sprite: {vertexShader: "uniform\tint\t\tuseScreenCoordinates;\nuniform    int     affectedByDistance;\nuniform\tvec3\tscreenPosition;\nuniform \tmat4 \tmodelViewMatrix;\nuniform \tmat4 \tprojectionMatrix;\nuniform    float   rotation;\nuniform    vec2    scale;\nuniform    vec2    alignment;\nuniform    vec2    uvOffset;\nuniform\tvec2    uvScale;\nattribute \tvec2 \tposition;\nattribute  vec2\tuv;\nvarying\tvec2\tvUV;\nvoid main(void)\n{\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position + alignment;\nvec2 rotatedPosition;\nrotatedPosition.x = ( cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y ) * scale.x;\nrotatedPosition.y = ( sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y ) * scale.y;\nvec4 finalPosition;\nif( useScreenCoordinates != 0 ) {\nfinalPosition = vec4( screenPosition.xy + rotatedPosition, screenPosition.z, 1.0 );\n} else {\nfinalPosition = projectionMatrix * modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition * ( affectedByDistance == 1 ? 1.0 : finalPosition.z );\n}\ngl_Position = finalPosition;\n}", fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tfloat\t\topacity;\nvarying\tvec2\t\tvUV;\nvoid main( void )\n{\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity;\ngl_FragColor = color;\n}"}, shadowPost: {vertexShader: "uniform \tmat4 \tprojectionMatrix;\nattribute \tvec3 \tposition;\nvoid main(void)\n{\ngl_Position = projectionMatrix * vec4( position, 1.0 );\n}", fragmentShader: "#ifdef GL_ES\nprecision highp float;\n#endif\nuniform \tfloat \tdarkness;\nvoid main( void )\n{\ngl_FragColor = vec4( 0, 0, 0, darkness );\n}"}, shadowVolumeDynamic: {uniforms: {directionalLightDirection: {type: "fv", value: []}}, vertexShader: "uniform \tvec3 \tdirectionalLightDirection;\nvoid main() {\nvec4 pos      = objectMatrix * vec4( position, 1.0 );\nvec3 norm     = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nvec4 extruded = vec4( directionalLightDirection * 5000.0 * step( 0.0, dot( directionalLightDirection, norm )), 0.0 );\ngl_Position   = projectionMatrix * viewMatrix * ( pos + extruded );\n}", fragmentShader: "void main() {\ngl_FragColor = vec4( 1.0 );\n}"}, depth: {uniforms: {mNear: {type: "f", value: 1}, mFar: {type: "f", value: 2E3}, opacity: {type: "f", value: 1}}, fragmentShader: "uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}", vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"}, normal: {uniforms: {opacity: {type: "f", value: 1}}, fragmentShader: "uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}", vertexShader: "varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}"}, basic: {uniforms: THREE.UniformsLib.common, fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"), vertexShader: [THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n")}, lambert: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights]), fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"), vertexShader: ["varying vec3 vLightWeighting;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.lights_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n")}, phong: {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights, {ambient: {type: "c", value: new THREE.Color(328965)}, specular: {type: "c", value: new THREE.Color(1118481)}, shininess: {type: "f", value: 30}}]), fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_pars_fragment, "void main() {\ngl_FragColor = vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.lights_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"), vertexShader: ["#define PHONG\nvarying vec3 vLightWeighting;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = cameraPosition - mPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;", THREE.ShaderChunk.lights_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.default_vertex, "}"].join("\n")}, particle_basic: {uniforms: THREE.UniformsLib.particle, fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( psColor, opacity );", THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n"), vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.color_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n")}};
THREE.WebGLRenderer = function (b) {
    function g(F, Y, N) {
        var L, Q, ga, fa = F.vertices, ca = fa.length, ia = F.colors, na = ia.length, U = F.__vertexArray, ha = F.__colorArray, la = F.__sortArray, ua = F.__dirtyVertices, sa = F.__dirtyColors;
        if (N.sortParticles) {
            Ga.multiplySelf(N.matrixWorld);
            for (L = 0; L < ca; L++) {
                Q = fa[L].position;
                Ia.copy(Q);
                Ga.multiplyVector3(Ia);
                la[L] = [Ia.z, L]
            }
            la.sort(function (Ja, Aa) {
                return Aa[0] - Ja[0]
            });
            for (L = 0; L < ca; L++) {
                Q = fa[la[L][1]].position;
                ga = L * 3;
                U[ga] = Q.x;
                U[ga + 1] = Q.y;
                U[ga + 2] = Q.z
            }
            for (L = 0; L < na; L++) {
                ga = L * 3;
                color = ia[la[L][1]];
                ha[ga] = color.r;
                ha[ga + 1] = color.g;
                ha[ga + 2] = color.b
            }
        } else {
            if (ua)for (L = 0; L < ca; L++) {
                Q = fa[L].position;
                ga = L * 3;
                U[ga] = Q.x;
                U[ga + 1] = Q.y;
                U[ga + 2] = Q.z
            }
            if (sa)for (L = 0; L < na; L++) {
                color = ia[L];
                ga = L * 3;
                ha[ga] = color.r;
                ha[ga + 1] = color.g;
                ha[ga + 2] = color.b
            }
        }
        if (ua || N.sortParticles) {
            v.bindBuffer(v.ARRAY_BUFFER, F.__webglVertexBuffer);
            v.bufferData(v.ARRAY_BUFFER, U, Y)
        }
        if (sa || N.sortParticles) {
            v.bindBuffer(v.ARRAY_BUFFER, F.__webglColorBuffer);
            v.bufferData(v.ARRAY_BUFFER, ha, Y)
        }
    }

    function c(F, Y, N, L, Q) {
        L.program || S.initMaterial(L, Y, N, Q);
        var ga = L.program, fa = ga.uniforms, ca = L.uniforms;
        ga != J && (v.useProgram(ga), J = ga);
        v.uniformMatrix4fv(fa.projectionMatrix, !1, Da);
        if (N && (L instanceof THREE.MeshBasicMaterial || L instanceof THREE.MeshLambertMaterial || L instanceof THREE.MeshPhongMaterial || L instanceof THREE.LineBasicMaterial || L instanceof THREE.ParticleBasicMaterial || L.fog))if (ca.fogColor.value = N.color, N instanceof THREE.Fog) {
            ca.fogNear.value = N.near;
            ca.fogFar.value = N.far
        } else if (N instanceof THREE.FogExp2)ca.fogDensity.value = N.density;
        if (L instanceof
            THREE.MeshPhongMaterial || L instanceof THREE.MeshLambertMaterial || L.lights) {
            var ia, na, U = 0, ha = 0, la = 0, ua, sa, Ja, Aa, Ka = xa, Ya = Ka.directional.colors, jb = Ka.directional.positions, Ba = Ka.point.colors, Ca = Ka.point.positions, Ea = Ka.point.distances, Ra = 0, Z = 0;
            N = na = 0;
            for (ia = Y.length; N < ia; N++)if (na = Y[N], ua = na.color, sa = na.position, Ja = na.intensity, Aa = na.distance, na instanceof THREE.AmbientLight) {
                U += ua.r;
                ha += ua.g;
                la += ua.b
            } else if (na instanceof THREE.DirectionalLight) {
                Aa = Ra * 3;
                Ya[Aa] = ua.r * Ja;
                Ya[Aa + 1] = ua.g * Ja;
                Ya[Aa + 2] = ua.b * Ja;
                jb[Aa] = sa.x;
                jb[Aa + 1] = sa.y;
                jb[Aa + 2] = sa.z;
                Ra += 1
            } else if (na instanceof THREE.PointLight) {
                na = Z * 3;
                Ba[na] = ua.r * Ja;
                Ba[na + 1] = ua.g * Ja;
                Ba[na + 2] = ua.b * Ja;
                Ca[na] = sa.x;
                Ca[na + 1] = sa.y;
                Ca[na + 2] = sa.z;
                Ea[Z] = Aa;
                Z += 1
            }
            for (N = Ra * 3; N < Ya.length; N++)Ya[N] = 0;
            for (N = Z * 3; N < Ba.length; N++)Ba[N] = 0;
            Ka.point.length = Z;
            Ka.directional.length = Ra;
            Ka.ambient[0] = U;
            Ka.ambient[1] = ha;
            Ka.ambient[2] = la;
            N = xa;
            ca.enableLighting.value = N.directional.length + N.point.length;
            ca.ambientLightColor.value = N.ambient;
            ca.directionalLightColor.value = N.directional.colors;
            ca.directionalLightDirection.value = N.directional.positions;
            ca.pointLightColor.value = N.point.colors;
            ca.pointLightPosition.value = N.point.positions;
            ca.pointLightDistance.value = N.point.distances
        }
        if (L instanceof THREE.MeshBasicMaterial || L instanceof THREE.MeshLambertMaterial || L instanceof THREE.MeshPhongMaterial) {
            ca.diffuse.value = L.color;
            ca.opacity.value = L.opacity;
            (ca.map.texture = L.map) && ca.offsetRepeat.value.set(L.map.offset.x, L.map.offset.y, L.map.repeat.x, L.map.repeat.y);
            ca.lightMap.texture = L.lightMap;
            ca.envMap.texture = L.envMap;
            ca.reflectivity.value = L.reflectivity;
            ca.refractionRatio.value = L.refractionRatio;
            ca.combine.value = L.combine;
            ca.useRefract.value = L.envMap && L.envMap.mapping instanceof THREE.CubeRefractionMapping
        }
        if (L instanceof THREE.LineBasicMaterial) {
            ca.diffuse.value = L.color;
            ca.opacity.value = L.opacity
        } else if (L instanceof THREE.ParticleBasicMaterial) {
            ca.psColor.value = L.color;
            ca.opacity.value = L.opacity;
            ca.size.value = L.size;
            ca.scale.value = da.height / 2;
            ca.map.texture = L.map
        } else if (L instanceof
            THREE.MeshPhongMaterial) {
            ca.ambient.value = L.ambient;
            ca.specular.value = L.specular;
            ca.shininess.value = L.shininess
        } else if (L instanceof THREE.MeshDepthMaterial) {
            ca.mNear.value = F.near;
            ca.mFar.value = F.far;
            ca.opacity.value = L.opacity
        } else if (L instanceof THREE.MeshNormalMaterial)ca.opacity.value = L.opacity;
        for (var ra in ca)if (ha = ga.uniforms[ra])if (ia = ca[ra], U = ia.type, N = ia.value, U == "i")v.uniform1i(ha, N); else if (U == "f")v.uniform1f(ha, N); else if (U == "fv1")v.uniform1fv(ha, N); else if (U == "fv")v.uniform3fv(ha, N); else if (U == "v2")v.uniform2f(ha, N.x, N.y); else if (U == "v3")v.uniform3f(ha, N.x, N.y, N.z); else if (U == "v4")v.uniform4f(ha, N.x, N.y, N.z, N.w); else if (U == "c")v.uniform3f(ha, N.r, N.g, N.b); else if (U == "t" && (v.uniform1i(ha, N), ia = ia.texture))if (ia.image instanceof Array && ia.image.length == 6) {
            if (ia.image.length == 6) {
                if (ia.needsUpdate) {
                    if (ia.__webglInit) {
                        v.bindTexture(v.TEXTURE_CUBE_MAP, ia.image.__webglTextureCube);
                        for (U = 0; U < 6; ++U)v.texSubImage2D(v.TEXTURE_CUBE_MAP_POSITIVE_X + U, 0, 0, 0, v.RGBA, v.UNSIGNED_BYTE, ia.image[U])
                    } else {
                        ia.image.__webglTextureCube = v.createTexture();
                        v.bindTexture(v.TEXTURE_CUBE_MAP, ia.image.__webglTextureCube);
                        for (U = 0; U < 6; ++U)v.texImage2D(v.TEXTURE_CUBE_MAP_POSITIVE_X + U, 0, v.RGBA, v.RGBA, v.UNSIGNED_BYTE, ia.image[U]);
                        ia.__webglInit = !0
                    }
                    G(v.TEXTURE_CUBE_MAP, ia, ia.image[0]);
                    v.bindTexture(v.TEXTURE_CUBE_MAP, null);
                    ia.needsUpdate = !1
                }
                v.activeTexture(v.TEXTURE0 + N);
                v.bindTexture(v.TEXTURE_CUBE_MAP, ia.image.__webglTextureCube)
            }
        } else I(ia, N);
        v.uniformMatrix4fv(fa.modelViewMatrix, !1, Q._modelViewMatrixArray);
        v.uniformMatrix3fv(fa.normalMatrix, !1, Q._normalMatrixArray);
        (L instanceof THREE.MeshShaderMaterial || L instanceof THREE.MeshPhongMaterial || L.envMap) && fa.cameraPosition !== null && v.uniform3f(fa.cameraPosition, F.position.x, F.position.y, F.position.z);
        (L instanceof THREE.MeshShaderMaterial || L.envMap || L.skinning) && fa.objectMatrix !== null && v.uniformMatrix4fv(fa.objectMatrix, !1, Q._objectMatrixArray);
        (L instanceof THREE.MeshPhongMaterial || L instanceof THREE.MeshLambertMaterial || L instanceof THREE.MeshShaderMaterial || L.skinning) && fa.viewMatrix !== null && v.uniformMatrix4fv(fa.viewMatrix, !1, Ha);
        if (L instanceof THREE.ShadowVolumeDynamicMaterial) {
            F = ca.directionalLightDirection.value;
            F[0] = -Y[1].position.x;
            F[1] = -Y[1].position.y;
            F[2] = -Y[1].position.z;
            v.uniform3fv(fa.directionalLightDirection, F);
            v.uniformMatrix4fv(fa.objectMatrix, !1, Q._objectMatrixArray);
            v.uniformMatrix4fv(fa.viewMatrix, !1, Ha)
        }
        L.skinning && (v.uniformMatrix4fv(fa.cameraInverseMatrix, !1, Ha), v.uniformMatrix4fv(fa.boneGlobalMatrices, !1, Q.boneMatrices));
        return ga
    }

    function f(F, Y, N, L, Q, ga) {
        if (L.opacity != 0) {
            var fa;
            F = c(F, Y, N, L, ga).attributes;
            if (!L.morphTargets && F.position >= 0) {
                v.bindBuffer(v.ARRAY_BUFFER, Q.__webglVertexBuffer);
                v.vertexAttribPointer(F.position, 3, v.FLOAT, !1, 0, 0)
            } else {
                Y = L.program.attributes;
                ga.morphTargetBase !== -1 ? (v.bindBuffer(v.ARRAY_BUFFER, Q.__webglMorphTargetsBuffers[ga.morphTargetBase]), v.vertexAttribPointer(Y.position, 3, v.FLOAT, !1, 0, 0)) : Y.position >= 0 && (v.bindBuffer(v.ARRAY_BUFFER, Q.__webglVertexBuffer), v.vertexAttribPointer(Y.position, 3, v.FLOAT, !1, 0, 0));
                if (ga.morphTargetForcedOrder.length) {
                    N = 0;
                    for (var ca = ga.morphTargetForcedOrder, ia = ga.morphTargetInfluences; N < L.numSupportedMorphTargets && N < ca.length;) {
                        v.bindBuffer(v.ARRAY_BUFFER, Q.__webglMorphTargetsBuffers[ca[N]]);
                        v.vertexAttribPointer(Y["morphTarget" + N], 3, v.FLOAT, !1, 0, 0);
                        ga.__webglMorphTargetInfluences[N] = ia[ca[N]];
                        N++
                    }
                } else {
                    ca = [];
                    var na = -1, U = 0;
                    ia = ga.morphTargetInfluences;
                    var ha, la = ia.length;
                    N = 0;
                    for (ga.morphTargetBase !== -1 && (ca[ga.morphTargetBase] = !0); N < L.numSupportedMorphTargets;) {
                        for (ha = 0; ha < la; ha++)!ca[ha] && ia[ha] > na && (U = ha, na = ia[U]);
                        v.bindBuffer(v.ARRAY_BUFFER, Q.__webglMorphTargetsBuffers[U]);
                        v.vertexAttribPointer(Y["morphTarget" + N], 3, v.FLOAT, !1, 0, 0);
                        ga.__webglMorphTargetInfluences[N] = na;
                        ca[U] = 1;
                        na = -1;
                        N++
                    }
                }
                L.program.uniforms.morphTargetInfluences !== null && v.uniform1fv(L.program.uniforms.morphTargetInfluences, ga.__webglMorphTargetInfluences)
            }
            if (Q.__webglCustomAttributes)for (fa in Q.__webglCustomAttributes)F[fa] >= 0 && (Y = Q.__webglCustomAttributes[fa], v.bindBuffer(v.ARRAY_BUFFER, Y.buffer), v.vertexAttribPointer(F[fa], Y.size, v.FLOAT, !1, 0, 0));
            F.color >= 0 && (v.bindBuffer(v.ARRAY_BUFFER, Q.__webglColorBuffer), v.vertexAttribPointer(F.color, 3, v.FLOAT, !1, 0, 0));
            F.normal >= 0 && (v.bindBuffer(v.ARRAY_BUFFER, Q.__webglNormalBuffer), v.vertexAttribPointer(F.normal, 3, v.FLOAT, !1, 0, 0));
            F.tangent >= 0 && (v.bindBuffer(v.ARRAY_BUFFER, Q.__webglTangentBuffer), v.vertexAttribPointer(F.tangent, 4, v.FLOAT, !1, 0, 0));
            F.uv >= 0 && (Q.__webglUVBuffer ? (v.bindBuffer(v.ARRAY_BUFFER, Q.__webglUVBuffer), v.vertexAttribPointer(F.uv, 2, v.FLOAT, !1, 0, 0), v.enableVertexAttribArray(F.uv)) : v.disableVertexAttribArray(F.uv));
            F.uv2 >= 0 && (Q.__webglUV2Buffer ? (v.bindBuffer(v.ARRAY_BUFFER, Q.__webglUV2Buffer), v.vertexAttribPointer(F.uv2, 2, v.FLOAT, !1, 0, 0), v.enableVertexAttribArray(F.uv2)) : v.disableVertexAttribArray(F.uv2));
            L.skinning && F.skinVertexA >= 0 && F.skinVertexB >= 0 && F.skinIndex >= 0 && F.skinWeight >= 0 && (v.bindBuffer(v.ARRAY_BUFFER, Q.__webglSkinVertexABuffer), v.vertexAttribPointer(F.skinVertexA, 4, v.FLOAT, !1, 0, 0), v.bindBuffer(v.ARRAY_BUFFER, Q.__webglSkinVertexBBuffer), v.vertexAttribPointer(F.skinVertexB, 4, v.FLOAT, !1, 0, 0), v.bindBuffer(v.ARRAY_BUFFER, Q.__webglSkinIndicesBuffer), v.vertexAttribPointer(F.skinIndex, 4, v.FLOAT, !1, 0, 0), v.bindBuffer(v.ARRAY_BUFFER, Q.__webglSkinWeightsBuffer), v.vertexAttribPointer(F.skinWeight, 4, v.FLOAT, !1, 0, 0));
            ga instanceof THREE.Mesh ? (L.wireframe ? (v.lineWidth(L.wireframeLinewidth), v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, Q.__webglLineBuffer), v.drawElements(v.LINES, Q.__webglLineCount, v.UNSIGNED_SHORT, 0)) : (v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, Q.__webglFaceBuffer), v.drawElements(v.TRIANGLES, Q.__webglFaceCount, v.UNSIGNED_SHORT, 0)), S.data.vertices += Q.__webglFaceCount, S.data.faces += Q.__webglFaceCount / 3, S.data.drawCalls++) : ga instanceof THREE.Line ? (ga = ga.type == THREE.LineStrip ? v.LINE_STRIP : v.LINES, v.lineWidth(L.linewidth), v.drawArrays(ga, 0, Q.__webglLineCount), S.data.drawCalls++) : ga instanceof THREE.ParticleSystem ? (v.drawArrays(v.POINTS, 0, Q.__webglParticleCount), S.data.drawCalls++) : ga instanceof THREE.Ribbon && (v.drawArrays(v.TRIANGLE_STRIP, 0, Q.__webglVertexCount), S.data.drawCalls++)
        }
    }

    function h(F, Y, N) {
        if (!F.__webglVertexBuffer)F.__webglVertexBuffer = v.createBuffer();
        if (!F.__webglNormalBuffer)F.__webglNormalBuffer = v.createBuffer();
        F.hasPos && (v.bindBuffer(v.ARRAY_BUFFER, F.__webglVertexBuffer), v.bufferData(v.ARRAY_BUFFER, F.positionArray, v.DYNAMIC_DRAW), v.enableVertexAttribArray(Y.attributes.position), v.vertexAttribPointer(Y.attributes.position, 3, v.FLOAT, !1, 0, 0));
        if (F.hasNormal) {
            v.bindBuffer(v.ARRAY_BUFFER, F.__webglNormalBuffer);
            if (N == THREE.FlatShading) {
                var L, Q, ga, fa, ca, ia, na, U, ha, la, ua = F.count * 3;
                for (la = 0; la < ua; la += 9) {
                    N = F.normalArray;
                    L = N[la];
                    Q = N[la + 1];
                    ga = N[la + 2];
                    fa = N[la + 3];
                    ia = N[la + 4];
                    U = N[la + 5];
                    ca = N[la + 6];
                    na = N[la + 7];
                    ha = N[la + 8];
                    L = (L + fa + ca) / 3;
                    Q = (Q + ia + na) / 3;
                    ga = (ga + U + ha) / 3;
                    N[la] = L;
                    N[la + 1] = Q;
                    N[la + 2] = ga;
                    N[la + 3] = L;
                    N[la + 4] = Q;
                    N[la + 5] = ga;
                    N[la + 6] = L;
                    N[la + 7] = Q;
                    N[la + 8] = ga
                }
            }
            v.bufferData(v.ARRAY_BUFFER, F.normalArray, v.DYNAMIC_DRAW);
            v.enableVertexAttribArray(Y.attributes.normal);
            v.vertexAttribPointer(Y.attributes.normal, 3, v.FLOAT, !1, 0, 0)
        }
        v.drawArrays(v.TRIANGLES, 0, F.count);
        F.count = 0
    }

    function m(F) {
        if (R != F.doubleSided) {
            F.doubleSided ? v.disable(v.CULL_FACE) : v.enable(v.CULL_FACE);
            R = F.doubleSided
        }
        if (aa != F.flipSided) {
            F.flipSided ? v.frontFace(v.CW) : v.frontFace(v.CCW);
            aa = F.flipSided
        }
    }

    function n(F) {
        ea != F && (F ? v.enable(v.DEPTH_TEST) : v.disable(v.DEPTH_TEST), ea = F)
    }

    function p(F) {
        qa[0].set(F.n41 - F.n11, F.n42 - F.n12, F.n43 - F.n13, F.n44 - F.n14);
        qa[1].set(F.n41 + F.n11, F.n42 + F.n12, F.n43 + F.n13, F.n44 + F.n14);
        qa[2].set(F.n41 + F.n21, F.n42 + F.n22, F.n43 + F.n23, F.n44 + F.n24);
        qa[3].set(F.n41 - F.n21, F.n42 - F.n22, F.n43 - F.n23, F.n44 - F.n24);
        qa[4].set(F.n41 - F.n31, F.n42 - F.n32, F.n43 - F.n33, F.n44 - F.n34);
        qa[5].set(F.n41 + F.n31, F.n42 + F.n32, F.n43 + F.n33, F.n44 + F.n34);
        var Y;
        for (F = 0; F < 6; F++) {
            Y = qa[F];
            Y.divideScalar(Math.sqrt(Y.x * Y.x + Y.y * Y.y + Y.z * Y.z))
        }
    }

    function o(F) {
        for (var Y = F.matrixWorld, N = -F.geometry.boundingSphere.radius * Math.max(F.scale.x, Math.max(F.scale.y, F.scale.z)), L = 0; L < 6; L++)if (F = qa[L].x * Y.n14 + qa[L].y * Y.n24 + qa[L].z * Y.n34 + qa[L].w, F <= N)return!1;
        return!0
    }

    function t(F, Y) {
        F.list[F.count] = Y;
        F.count += 1
    }

    function u(F) {
        var Y, N, L = F.object, Q = F.opaque, ga = F.transparent;
        ga.count = 0;
        F = Q.count = 0;
        for (Y = L.materials.length; F < Y; F++) {
            N = L.materials[F];
            N.transparent ? t(ga, N) : t(Q, N)
        }
    }

    function w(F) {
        var Y, N, L, Q, ga = F.object, fa = F.buffer, ca = F.opaque, ia = F.transparent;
        ia.count = 0;
        F = ca.count = 0;
        for (L = ga.materials.length; F < L; F++)if (Y = ga.materials[F], Y instanceof THREE.MeshFaceMaterial) {
            Y = 0;
            for (N = fa.materials.length; Y < N; Y++)(Q = fa.materials[Y]) && (Q.transparent ? t(ia, Q) : t(ca, Q))
        } else(Q = Y) && (Q.transparent ? t(ia, Q) : t(ca, Q))
    }

    function x(F, Y) {
        return Y.z - F.z
    }

    function y(F) {
        v.enable(v.POLYGON_OFFSET_FILL);
        v.polygonOffset(0.1, 1);
        v.enable(v.STENCIL_TEST);
        v.enable(v.DEPTH_TEST);
        v.depthMask(!1);
        v.colorMask(!1, !1, !1, !1);
        v.stencilFunc(v.ALWAYS, 1, 255);
        v.stencilOpSeparate(v.BACK, v.KEEP, v.INCR, v.KEEP);
        v.stencilOpSeparate(v.FRONT, v.KEEP, v.DECR, v.KEEP);
        var Y, N = F.lights.length, L, Q = F.lights, ga = [], fa, ca, ia, na, U, ha = F.__webglShadowVolumes.length;
        for (Y = 0; Y < N; Y++)if (L = F.lights[Y], L instanceof THREE.DirectionalLight && L.castShadow) {
            ga[0] = -L.position.x;
            ga[1] = -L.position.y;
            ga[2] = -L.position.z;
            for (U = 0; U < ha; U++) {
                L = F.__webglShadowVolumes[U].object;
                fa = F.__webglShadowVolumes[U].buffer;
                ca = L.materials[0];
                ca.program || S.initMaterial(ca, Q, void 0, L);
                ca = ca.program;
                ia = ca.uniforms;
                na = ca.attributes;
                J !== ca && (v.useProgram(ca), J = ca, v.uniformMatrix4fv(ia.projectionMatrix, !1, Da), v.uniformMatrix4fv(ia.viewMatrix, !1, Ha), v.uniform3fv(ia.directionalLightDirection, ga));
                L.matrixWorld.flattenToArray(L._objectMatrixArray);
                v.uniformMatrix4fv(ia.objectMatrix, !1, L._objectMatrixArray);
                v.bindBuffer(v.ARRAY_BUFFER, fa.__webglVertexBuffer);
                v.vertexAttribPointer(na.position, 3, v.FLOAT, !1, 0, 0);
                v.bindBuffer(v.ARRAY_BUFFER, fa.__webglNormalBuffer);
                v.vertexAttribPointer(na.normal, 3, v.FLOAT, !1, 0, 0);
                v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, fa.__webglFaceBuffer);
                v.cullFace(v.FRONT);
                v.drawElements(v.TRIANGLES, fa.__webglFaceCount, v.UNSIGNED_SHORT, 0);
                v.cullFace(v.BACK);
                v.drawElements(v.TRIANGLES, fa.__webglFaceCount, v.UNSIGNED_SHORT, 0)
            }
        }
        v.disable(v.POLYGON_OFFSET_FILL);
        v.colorMask(!0, !0, !0, !0);
        v.stencilFunc(v.NOTEQUAL, 0, 255);
        v.stencilOp(v.KEEP, v.KEEP, v.KEEP);
        v.disable(v.DEPTH_TEST);
        W = -1;
        J = wa.program;
        v.useProgram(wa.program);
        v.uniformMatrix4fv(wa.projectionLocation, !1, Da);
        v.uniform1f(wa.darknessLocation, wa.darkness);
        v.bindBuffer(v.ARRAY_BUFFER, wa.vertexBuffer);
        v.vertexAttribPointer(wa.vertexLocation, 3, v.FLOAT, !1, 0, 0);
        v.enableVertexAttribArray(wa.vertexLocation);
        v.blendFunc(v.ONE, v.ONE_MINUS_SRC_ALPHA);
        v.blendEquation(v.FUNC_ADD);
        v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, wa.elementBuffer);
        v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0);
        v.disable(v.STENCIL_TEST);
        v.enable(v.DEPTH_TEST);
        v.depthMask(K)
    }

    function z(F, Y) {
        var N, L, Q;
        N = _sprite.attributes;
        var ga = _sprite.uniforms, fa = za / ya, ca, ia = [], na = ya * 0.5, U = za * 0.5, ha = !0;
        v.useProgram(_sprite.program);
        J = _sprite.program;
        W = -1;
        Db || (v.enableVertexAttribArray(_sprite.attributes.position), v.enableVertexAttribArray(_sprite.attributes.uv), Db = !0);
        v.disable(v.CULL_FACE);
        v.enable(v.BLEND);
        v.depthMask(!0);
        v.bindBuffer(v.ARRAY_BUFFER, _sprite.vertexBuffer);
        v.vertexAttribPointer(N.position, 2, v.FLOAT, !1, 16, 0);
        v.vertexAttribPointer(N.uv, 2, v.FLOAT, !1, 16, 8);
        v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, _sprite.elementBuffer);
        v.uniformMatrix4fv(ga.projectionMatrix, !1, Da);
        v.activeTexture(v.TEXTURE0);
        v.uniform1i(ga.map, 0);
        N = 0;
        for (L = F.__webglSprites.length; N < L; N++) {
            Q = F.__webglSprites[N];
            Q.useScreenCoordinates ? Q.z = -Q.position.z : (Q._modelViewMatrix.multiplyToArray(Y.matrixWorldInverse, Q.matrixWorld, Q._modelViewMatrixArray), Q.z = -Q._modelViewMatrix.n34)
        }
        F.__webglSprites.sort(x);
        N = 0;
        for (L = F.__webglSprites.length; N < L; N++) {
            Q = F.__webglSprites[N];
            Q.material === void 0 && Q.map && Q.map.image && Q.map.image.width && (Q.useScreenCoordinates ? (v.uniform1i(ga.useScreenCoordinates, 1), v.uniform3f(ga.screenPosition, (Q.position.x - na) / na, (U - Q.position.y) / U, Math.max(0, Math.min(1, Q.position.z)))) : (v.uniform1i(ga.useScreenCoordinates, 0), v.uniform1i(ga.affectedByDistance, Q.affectedByDistance ? 1 : 0), v.uniformMatrix4fv(ga.modelViewMatrix, !1, Q._modelViewMatrixArray)), ca = Q.map.image.width / (Q.affectedByDistance ? 1 : za), ia[0] = ca * fa * Q.scale.x, ia[1] = ca * Q.scale.y, v.uniform2f(ga.uvScale, Q.uvScale.x, Q.uvScale.y), v.uniform2f(ga.uvOffset, Q.uvOffset.x, Q.uvOffset.y), v.uniform2f(ga.alignment, Q.alignment.x, Q.alignment.y), v.uniform1f(ga.opacity, Q.opacity), v.uniform1f(ga.rotation, Q.rotation), v.uniform2fv(ga.scale, ia), Q.mergeWith3D && !ha ? (v.enable(v.DEPTH_TEST), ha = !0) : !Q.mergeWith3D && ha && (v.disable(v.DEPTH_TEST), ha = !1), H(Q.blending), I(Q.map, 0), v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0))
        }
        v.enable(v.CULL_FACE);
        v.enable(v.DEPTH_TEST);
        v.depthMask(K)
    }

    function D(F, Y) {
        var N, L, Q = F.__webglLensFlares.length, ga, fa, ca, ia = new THREE.Vector3, na = za / ya, U = ya * 0.5, ha = za * 0.5, la = 16 / za, ua = [la * na, la], sa = [1, 1, 0], Ja = [1, 1], Aa = ta.uniforms;
        N = ta.attributes;
        v.useProgram(ta.program);
        J = ta.program;
        W = -1;
        Eb || (v.enableVertexAttribArray(ta.attributes.vertex), v.enableVertexAttribArray(ta.attributes.uv), Eb = !0);
        v.uniform1i(Aa.occlusionMap, 0);
        v.uniform1i(Aa.map, 1);
        v.bindBuffer(v.ARRAY_BUFFER, ta.vertexBuffer);
        v.vertexAttribPointer(N.vertex, 2, v.FLOAT, !1, 16, 0);
        v.vertexAttribPointer(N.uv, 2, v.FLOAT, !1, 16, 8);
        v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, ta.elementBuffer);
        v.disable(v.CULL_FACE);
        v.depthMask(!1);
        v.activeTexture(v.TEXTURE0);
        v.bindTexture(v.TEXTURE_2D, ta.occlusionTexture);
        v.activeTexture(v.TEXTURE1);
        for (L = 0; L < Q; L++)if (N = F.__webglLensFlares[L].object, ia.set(N.matrixWorld.n14, N.matrixWorld.n24, N.matrixWorld.n34), Y.matrixWorldInverse.multiplyVector3(ia), Y.projectionMatrix.multiplyVector3(ia), sa[0] = ia.x, sa[1] = ia.y, sa[2] = ia.z, Ja[0] = sa[0] * U + U, Ja[1] = sa[1] * ha + ha, ta.hasVertexTexture || Ja[0] > 0 && Ja[0] < ya && Ja[1] > 0 && Ja[1] < za) {
            v.bindTexture(v.TEXTURE_2D, ta.tempTexture);
            v.copyTexImage2D(v.TEXTURE_2D, 0, v.RGB, Ja[0] - 8, Ja[1] - 8, 16, 16, 0);
            v.uniform1i(Aa.renderType, 0);
            v.uniform2fv(Aa.scale, ua);
            v.uniform3fv(Aa.screenPosition, sa);
            v.disable(v.BLEND);
            v.enable(v.DEPTH_TEST);
            v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0);
            v.bindTexture(v.TEXTURE_2D, ta.occlusionTexture);
            v.copyTexImage2D(v.TEXTURE_2D, 0, v.RGBA, Ja[0] - 8, Ja[1] - 8, 16, 16, 0);
            v.uniform1i(Aa.renderType, 1);
            v.disable(v.DEPTH_TEST);
            v.bindTexture(v.TEXTURE_2D, ta.tempTexture);
            v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0);
            N.positionScreen.x = sa[0];
            N.positionScreen.y = sa[1];
            N.positionScreen.z = sa[2];
            N.customUpdateCallback ? N.customUpdateCallback(N) : N.updateLensFlares();
            v.uniform1i(Aa.renderType, 2);
            v.enable(v.BLEND);
            ga = 0;
            for (fa = N.lensFlares.length; ga < fa; ga++)if (ca = N.lensFlares[ga], ca.opacity > 0.0010 && ca.scale > 0.0010) {
                sa[0] = ca.x;
                sa[1] = ca.y;
                sa[2] = ca.z;
                la = ca.size * ca.scale / za;
                ua[0] = la * na;
                ua[1] = la;
                v.uniform3fv(Aa.screenPosition, sa);
                v.uniform2fv(Aa.scale, ua);
                v.uniform1f(Aa.rotation, ca.rotation);
                v.uniform1f(Aa.opacity, ca.opacity);
                H(ca.blending);
                I(ca.texture, 1);
                v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0)
            }
        }
        v.enable(v.CULL_FACE);
        v.enable(v.DEPTH_TEST);
        v.depthMask(K)
    }

    function B(F, Y) {
        F._modelViewMatrix.multiplyToArray(Y.matrixWorldInverse, F.matrixWorld, F._modelViewMatrixArray);
        THREE.Matrix4.makeInvert3x3(F._modelViewMatrix).transposeIntoArray(F._normalMatrixArray)
    }

    function A(F) {
        var Y, N, L, Q, ga;
        if (F instanceof THREE.Mesh) {
            N = F.geometry;
            for (Y in N.geometryGroups) {
                L = N.geometryGroups[Y];
                ga = !1;
                for (Q in L.__webglCustomAttributes)if (L.__webglCustomAttributes[Q].needsUpdate) {
                    ga = !0;
                    break
                }
                if (N.__dirtyVertices || N.__dirtyMorphTargets || N.__dirtyElements || N.__dirtyUvs || N.__dirtyNormals || N.__dirtyColors || N.__dirtyTangents || ga) {
                    ga = F;
                    var fa = v.DYNAMIC_DRAW;
                    if (L.__inittedArrays) {
                        var ca = void 0, ia = void 0, na = void 0, U = void 0, ha = void 0, la = void 0, ua = void 0, sa = void 0, Ja = void 0, Aa = void 0, Ka = void 0, Ya = void 0, jb = void 0, Ba = void 0, Ca = void 0, Ea = void 0, Ra = void 0, Z = void 0, ra = void 0, M = void 0, gb = void 0, kb = na = na = U = void 0, Sa = 0, Ua = 0, nb = 0, ob = 0, ab = 0, bb = 0, La = 0, cb = 0, Ta = 0, ka = 0, Va = 0;
                        ra = Z = 0;
                        var Wa = L.__vertexArray, ub = L.__uvArray, vb = L.__uv2Array, hb = L.__normalArray, Ma = L.__tangentArray, Xa = L.__colorArray, Na = L.__skinVertexAArray, Oa = L.__skinVertexBArray, Pa = L.__skinIndexArray, Qa = L.__skinWeightArray, wb = L.__morphTargetsArrays, ib = L.__webglCustomAttributes;
                        M = void 0;
                        var db = L.__faceArray, eb = L.__lineArray, Fb = L.__needsSmoothNormals;
                        Aa = L.__vertexColorType;
                        Ja = L.__uvType;
                        Ka = L.__normalType;
                        var Za = ga.geometry, xb = Za.__dirtyVertices, yb = Za.__dirtyElements, tb = Za.__dirtyUvs, zb = Za.__dirtyNormals, Ab = Za.__dirtyTangents, Bb = Za.__dirtyColors, Cb = Za.__dirtyMorphTargets, pb = Za.vertices, Gb = L.faces, Jb = Za.faces, Hb = Za.faceVertexUvs[0], Ib = Za.faceVertexUvs[1], qb = Za.skinVerticesA, rb = Za.skinVerticesB, sb = Za.skinIndices, lb = Za.skinWeights, mb = ga instanceof THREE.ShadowVolume ? Za.edgeFaces : void 0;
                        morphTargets = Za.morphTargets;
                        if (ib)for (kb in ib) {
                            ib[kb].offset = 0;
                            ib[kb].offsetSrc = 0
                        }
                        ca = 0;
                        for (ia = Gb.length; ca < ia; ca++)if (na = Gb[ca], U = Jb[na], Hb && (Ya = Hb[na]), Ib && (jb = Ib[na]), na = U.vertexNormals, ha = U.normal, la = U.vertexColors, ua = U.color, sa = U.vertexTangents, U instanceof
                            THREE.Face3) {
                            if (xb) {
                                Ba = pb[U.a].position;
                                Ca = pb[U.b].position;
                                Ea = pb[U.c].position;
                                Wa[Ua] = Ba.x;
                                Wa[Ua + 1] = Ba.y;
                                Wa[Ua + 2] = Ba.z;
                                Wa[Ua + 3] = Ca.x;
                                Wa[Ua + 4] = Ca.y;
                                Wa[Ua + 5] = Ca.z;
                                Wa[Ua + 6] = Ea.x;
                                Wa[Ua + 7] = Ea.y;
                                Wa[Ua + 8] = Ea.z;
                                Ua += 9
                            }
                            if (ib)for (kb in ib)if (M = ib[kb], M.needsUpdate) {
                                Z = M.offset;
                                ra = M.offsetSrc;
                                M.size === 1 ? (M.boundTo === void 0 || M.boundTo === "vertices" ? (M.array[Z + 0] = M.value[U.a], M.array[Z + 1] = M.value[U.b], M.array[Z + 2] = M.value[U.c]) : M.boundTo === "faces" ? (M.array[Z + 0] = M.value[ra], M.array[Z + 1] = M.value[ra], M.array[Z + 2] = M.value[ra], M.offsetSrc++) : M.boundTo === "faceVertices" && (M.array[Z + 0] = M.value[ra + 0], M.array[Z + 1] = M.value[ra + 1], M.array[Z + 2] = M.value[ra + 2], M.offsetSrc += 3), M.offset += 3) : (M.boundTo === void 0 || M.boundTo === "vertices" ? (Ba = M.value[U.a], Ca = M.value[U.b], Ea = M.value[U.c]) : M.boundTo === "faces" ? (Ba = M.value[ra], Ca = M.value[ra], Ea = M.value[ra], M.offsetSrc++) : M.boundTo === "faceVertices" && (Ba = M.value[ra + 0], Ca = M.value[ra + 1], Ea = M.value[ra + 2], M.offsetSrc += 3), M.size === 2 ? (M.array[Z + 0] = Ba.x, M.array[Z + 1] = Ba.y, M.array[Z + 2] = Ca.x, M.array[Z + 3] = Ca.y, M.array[Z + 4] = Ea.x, M.array[Z + 5] = Ea.y, M.offset += 6) : M.size === 3 ? (M.type === "c" ? (M.array[Z + 0] = Ba.r, M.array[Z + 1] = Ba.g, M.array[Z + 2] = Ba.b, M.array[Z + 3] = Ca.r, M.array[Z + 4] = Ca.g, M.array[Z + 5] = Ca.b, M.array[Z + 6] = Ea.r, M.array[Z + 7] = Ea.g, M.array[Z + 8] = Ea.b) : (M.array[Z + 0] = Ba.x, M.array[Z + 1] = Ba.y, M.array[Z + 2] = Ba.z, M.array[Z + 3] = Ca.x, M.array[Z + 4] = Ca.y, M.array[Z + 5] = Ca.z, M.array[Z + 6] = Ea.x, M.array[Z + 7] = Ea.y, M.array[Z + 8] = Ea.z), M.offset += 9) : (M.array[Z + 0] = Ba.x, M.array[Z + 1] = Ba.y, M.array[Z + 2] = Ba.z, M.array[Z + 3] = Ba.w, M.array[Z + 4] = Ca.x, M.array[Z + 5] = Ca.y, M.array[Z + 6] = Ca.z, M.array[Z + 7] = Ca.w, M.array[Z + 8] = Ea.x, M.array[Z + 9] = Ea.y, M.array[Z + 10] = Ea.z, M.array[Z + 11] = Ea.w, M.offset += 12))
                            }
                            if (Cb) {
                                Z = 0;
                                for (ra = morphTargets.length; Z < ra; Z++) {
                                    Ba = morphTargets[Z].vertices[U.a].position;
                                    Ca = morphTargets[Z].vertices[U.b].position;
                                    Ea = morphTargets[Z].vertices[U.c].position;
                                    M = wb[Z];
                                    M[Va + 0] = Ba.x;
                                    M[Va + 1] = Ba.y;
                                    M[Va + 2] = Ba.z;
                                    M[Va + 3] = Ca.x;
                                    M[Va + 4] = Ca.y;
                                    M[Va + 5] = Ca.z;
                                    M[Va + 6] = Ea.x;
                                    M[Va + 7] = Ea.y;
                                    M[Va + 8] = Ea.z
                                }
                                Va += 9
                            }
                            if (lb.length) {
                                Z = lb[U.a];
                                ra = lb[U.b];
                                M = lb[U.c];
                                Qa[ka] = Z.x;
                                Qa[ka + 1] = Z.y;
                                Qa[ka + 2] = Z.z;
                                Qa[ka + 3] = Z.w;
                                Qa[ka + 4] = ra.x;
                                Qa[ka + 5] = ra.y;
                                Qa[ka + 6] = ra.z;
                                Qa[ka + 7] = ra.w;
                                Qa[ka + 8] = M.x;
                                Qa[ka + 9] = M.y;
                                Qa[ka + 10] = M.z;
                                Qa[ka + 11] = M.w;
                                Z = sb[U.a];
                                ra = sb[U.b];
                                M = sb[U.c];
                                Pa[ka] = Z.x;
                                Pa[ka + 1] = Z.y;
                                Pa[ka + 2] = Z.z;
                                Pa[ka + 3] = Z.w;
                                Pa[ka + 4] = ra.x;
                                Pa[ka + 5] = ra.y;
                                Pa[ka + 6] = ra.z;
                                Pa[ka + 7] = ra.w;
                                Pa[ka + 8] = M.x;
                                Pa[ka + 9] = M.y;
                                Pa[ka + 10] = M.z;
                                Pa[ka + 11] = M.w;
                                Z = qb[U.a];
                                ra = qb[U.b];
                                M = qb[U.c];
                                Na[ka] = Z.x;
                                Na[ka + 1] = Z.y;
                                Na[ka + 2] = Z.z;
                                Na[ka + 3] = 1;
                                Na[ka + 4] = ra.x;
                                Na[ka + 5] = ra.y;
                                Na[ka + 6] = ra.z;
                                Na[ka + 7] = 1;
                                Na[ka + 8] = M.x;
                                Na[ka + 9] = M.y;
                                Na[ka + 10] = M.z;
                                Na[ka + 11] = 1;
                                Z = rb[U.a];
                                ra = rb[U.b];
                                M = rb[U.c];
                                Oa[ka] = Z.x;
                                Oa[ka + 1] = Z.y;
                                Oa[ka + 2] = Z.z;
                                Oa[ka + 3] = 1;
                                Oa[ka + 4] = ra.x;
                                Oa[ka + 5] = ra.y;
                                Oa[ka + 6] = ra.z;
                                Oa[ka + 7] = 1;
                                Oa[ka + 8] = M.x;
                                Oa[ka + 9] = M.y;
                                Oa[ka + 10] = M.z;
                                Oa[ka + 11] = 1;
                                ka += 12
                            }
                            if (Bb && Aa) {
                                la.length == 3 && Aa == THREE.VertexColors ? (U = la[0], Z = la[1], ra = la[2]) : ra = Z = U = ua;
                                Xa[Ta] = U.r;
                                Xa[Ta + 1] = U.g;
                                Xa[Ta + 2] = U.b;
                                Xa[Ta + 3] = Z.r;
                                Xa[Ta + 4] = Z.g;
                                Xa[Ta + 5] = Z.b;
                                Xa[Ta + 6] = ra.r;
                                Xa[Ta + 7] = ra.g;
                                Xa[Ta + 8] = ra.b;
                                Ta += 9
                            }
                            if (Ab && Za.hasTangents) {
                                la = sa[0];
                                ua = sa[1];
                                U = sa[2];
                                Ma[La] = la.x;
                                Ma[La + 1] = la.y;
                                Ma[La + 2] = la.z;
                                Ma[La + 3] = la.w;
                                Ma[La + 4] = ua.x;
                                Ma[La + 5] = ua.y;
                                Ma[La + 6] = ua.z;
                                Ma[La + 7] = ua.w;
                                Ma[La + 8] = U.x;
                                Ma[La + 9] = U.y;
                                Ma[La + 10] = U.z;
                                Ma[La + 11] = U.w;
                                La += 12
                            }
                            if (zb && Ka)if (na.length == 3 && Fb)for (sa = 0; sa < 3; sa++) {
                                ha = na[sa];
                                hb[bb] = ha.x;
                                hb[bb + 1] = ha.y;
                                hb[bb + 2] = ha.z;
                                bb += 3
                            } else for (sa = 0; sa < 3; sa++) {
                                hb[bb] = ha.x;
                                hb[bb + 1] = ha.y;
                                hb[bb + 2] = ha.z;
                                bb += 3
                            }
                            if (tb && Ya !== void 0 && Ja)for (sa = 0; sa < 3; sa++) {
                                na = Ya[sa];
                                ub[nb] = na.u;
                                ub[nb + 1] = na.v;
                                nb += 2
                            }
                            if (tb && jb !== void 0 && Ja)for (sa = 0; sa < 3; sa++) {
                                na = jb[sa];
                                vb[ob] = na.u;
                                vb[ob + 1] = na.v;
                                ob += 2
                            }
                            yb && (db[ab] = Sa, db[ab + 1] = Sa + 1, db[ab + 2] = Sa + 2, ab += 3, eb[cb] = Sa, eb[cb + 1] = Sa + 1, eb[cb + 2] = Sa, eb[cb + 3] = Sa + 2, eb[cb + 4] = Sa + 1, eb[cb + 5] = Sa + 2, cb += 6, Sa += 3)
                        } else if (U instanceof THREE.Face4) {
                            if (xb) {
                                Ba = pb[U.a].position;
                                Ca = pb[U.b].position;
                                Ea = pb[U.c].position;
                                Ra = pb[U.d].position;
                                Wa[Ua] = Ba.x;
                                Wa[Ua + 1] = Ba.y;
                                Wa[Ua + 2] = Ba.z;
                                Wa[Ua + 3] = Ca.x;
                                Wa[Ua + 4] = Ca.y;
                                Wa[Ua + 5] = Ca.z;
                                Wa[Ua + 6] = Ea.x;
                                Wa[Ua + 7] = Ea.y;
                                Wa[Ua + 8] = Ea.z;
                                Wa[Ua + 9] = Ra.x;
                                Wa[Ua + 10] = Ra.y;
                                Wa[Ua + 11] = Ra.z;
                                Ua += 12
                            }
                            if (ib)for (kb in ib)if (M = ib[kb], M.needsUpdate) {
                                Z = M.offset;
                                ra = M.offsetSrc;
                                M.size === 1 ? (M.boundTo === void 0 || M.boundTo === "vertices" ? (M.array[Z + 0] = M.value[U.a], M.array[Z + 1] = M.value[U.b], M.array[Z + 2] = M.value[U.c], M.array[Z + 3] = M.value[U.d]) : M.boundTo === "faces" ? (M.array[Z + 0] = M.value[ra], M.array[Z + 1] = M.value[ra], M.array[Z + 2] = M.value[ra], M.array[Z + 3] = M.value[ra], M.offsetSrc++) : M.boundTo === "faceVertices" && (M.array[Z + 0] = M.value[ra + 0], M.array[Z + 1] = M.value[ra + 1], M.array[Z + 2] = M.value[ra + 2], M.array[Z + 3] = M.value[ra + 3], M.offsetSrc += 4), M.offset += 4) : (M.boundTo === void 0 || M.boundTo === "vertices" ? (Ba = M.value[U.a], Ca = M.value[U.b], Ea = M.value[U.c], Ra = M.value[U.d]) : M.boundTo === "faces" ? (Ba = M.value[ra], Ca = M.value[ra], Ea = M.value[ra], Ra = M.value[ra], M.offsetSrc++) : M.boundTo === "faceVertices" && (Ba = M.value[ra + 0], Ca = M.value[ra + 1], Ea = M.value[ra + 2], Ra = M.value[ra + 3], M.offsetSrc += 4), M.size === 2 ? (M.array[Z + 0] = Ba.x, M.array[Z + 1] = Ba.y, M.array[Z + 2] = Ca.x, M.array[Z + 3] = Ca.y, M.array[Z + 4] = Ea.x, M.array[Z + 5] = Ea.y, M.array[Z + 6] = Ra.x, M.array[Z + 7] = Ra.y, M.offset += 8) : M.size === 3 ? (M.type === "c" ? (M.array[Z + 0] = Ba.r, M.array[Z + 1] = Ba.g, M.array[Z + 2] = Ba.b, M.array[Z + 3] = Ca.r, M.array[Z + 4] = Ca.g, M.array[Z + 5] = Ca.b, M.array[Z + 6] = Ea.r, M.array[Z + 7] = Ea.g, M.array[Z + 8] = Ea.b, M.array[Z + 9] = Ra.r, M.array[Z + 10] = Ra.g, M.array[Z + 11] = Ra.b) : (M.array[Z + 0] = Ba.x, M.array[Z + 1] = Ba.y, M.array[Z + 2] = Ba.z, M.array[Z + 3] = Ca.x, M.array[Z + 4] = Ca.y, M.array[Z + 5] = Ca.z, M.array[Z + 6] = Ea.x, M.array[Z + 7] = Ea.y, M.array[Z + 8] = Ea.z, M.array[Z + 9] = Ra.x, M.array[Z + 10] = Ra.y, M.array[Z + 11] = Ra.z), M.offset += 12) : (M.array[Z + 0] = Ba.x, M.array[Z + 1] = Ba.y, M.array[Z + 2] = Ba.z, M.array[Z + 3] = Ba.w, M.array[Z + 4] = Ca.x, M.array[Z + 5] = Ca.y, M.array[Z + 6] = Ca.z, M.array[Z + 7] = Ca.w, M.array[Z + 8] = Ea.x, M.array[Z + 9] = Ea.y, M.array[Z + 10] = Ea.z, M.array[Z + 11] = Ea.w, M.array[Z + 12] = Ra.x, M.array[Z + 13] = Ra.y, M.array[Z + 14] = Ra.z, M.array[Z + 15] = Ra.w, M.offset += 16))
                            }
                            if (Cb) {
                                Z = 0;
                                for (ra = morphTargets.length; Z < ra; Z++) {
                                    Ba = morphTargets[Z].vertices[U.a].position;
                                    Ca = morphTargets[Z].vertices[U.b].position;
                                    Ea = morphTargets[Z].vertices[U.c].position;
                                    Ra = morphTargets[Z].vertices[U.d].position;
                                    M = wb[Z];
                                    M[Va + 0] = Ba.x;
                                    M[Va + 1] = Ba.y;
                                    M[Va + 2] = Ba.z;
                                    M[Va + 3] = Ca.x;
                                    M[Va + 4] = Ca.y;
                                    M[Va + 5] = Ca.z;
                                    M[Va + 6] = Ea.x;
                                    M[Va + 7] = Ea.y;
                                    M[Va + 8] = Ea.z;
                                    M[Va + 9] = Ra.x;
                                    M[Va + 10] = Ra.y;
                                    M[Va + 11] = Ra.z
                                }
                                Va += 12
                            }
                            if (lb.length) {
                                Z = lb[U.a];
                                ra = lb[U.b];
                                M = lb[U.c];
                                gb = lb[U.d];
                                Qa[ka] = Z.x;
                                Qa[ka + 1] = Z.y;
                                Qa[ka + 2] = Z.z;
                                Qa[ka + 3] = Z.w;
                                Qa[ka + 4] = ra.x;
                                Qa[ka + 5] = ra.y;
                                Qa[ka + 6] = ra.z;
                                Qa[ka + 7] = ra.w;
                                Qa[ka + 8] = M.x;
                                Qa[ka + 9] = M.y;
                                Qa[ka + 10] = M.z;
                                Qa[ka + 11] = M.w;
                                Qa[ka + 12] = gb.x;
                                Qa[ka + 13] = gb.y;
                                Qa[ka + 14] = gb.z;
                                Qa[ka + 15] = gb.w;
                                Z = sb[U.a];
                                ra = sb[U.b];
                                M = sb[U.c];
                                gb = sb[U.d];
                                Pa[ka] = Z.x;
                                Pa[ka + 1] = Z.y;
                                Pa[ka + 2] = Z.z;
                                Pa[ka + 3] = Z.w;
                                Pa[ka + 4] = ra.x;
                                Pa[ka + 5] = ra.y;
                                Pa[ka + 6] = ra.z;
                                Pa[ka + 7] = ra.w;
                                Pa[ka + 8] = M.x;
                                Pa[ka + 9] = M.y;
                                Pa[ka + 10] = M.z;
                                Pa[ka + 11] = M.w;
                                Pa[ka + 12] = gb.x;
                                Pa[ka + 13] = gb.y;
                                Pa[ka + 14] = gb.z;
                                Pa[ka + 15] = gb.w;
                                Z = qb[U.a];
                                ra = qb[U.b];
                                M = qb[U.c];
                                gb = qb[U.d];
                                Na[ka] = Z.x;
                                Na[ka + 1] = Z.y;
                                Na[ka + 2] = Z.z;
                                Na[ka + 3] = 1;
                                Na[ka + 4] = ra.x;
                                Na[ka + 5] = ra.y;
                                Na[ka + 6] = ra.z;
                                Na[ka + 7] = 1;
                                Na[ka + 8] = M.x;
                                Na[ka + 9] = M.y;
                                Na[ka + 10] = M.z;
                                Na[ka + 11] = 1;
                                Na[ka + 12] = gb.x;
                                Na[ka + 13] = gb.y;
                                Na[ka + 14] = gb.z;
                                Na[ka + 15] = 1;
                                Z = rb[U.a];
                                ra = rb[U.b];
                                M = rb[U.c];
                                U = rb[U.d];
                                Oa[ka] = Z.x;
                                Oa[ka + 1] = Z.y;
                                Oa[ka + 2] = Z.z;
                                Oa[ka + 3] = 1;
                                Oa[ka + 4] = ra.x;
                                Oa[ka + 5] = ra.y;
                                Oa[ka + 6] = ra.z;
                                Oa[ka + 7] = 1;
                                Oa[ka + 8] = M.x;
                                Oa[ka + 9] = M.y;
                                Oa[ka + 10] = M.z;
                                Oa[ka + 11] = 1;
                                Oa[ka + 12] = U.x;
                                Oa[ka + 13] = U.y;
                                Oa[ka + 14] = U.z;
                                Oa[ka + 15] = 1;
                                ka += 16
                            }
                            if (Bb && Aa) {
                                la.length == 4 && Aa == THREE.VertexColors ? (U = la[0], Z = la[1], ra = la[2], la = la[3]) : la = ra = Z = U = ua;
                                Xa[Ta] = U.r;
                                Xa[Ta + 1] = U.g;
                                Xa[Ta + 2] = U.b;
                                Xa[Ta + 3] = Z.r;
                                Xa[Ta + 4] = Z.g;
                                Xa[Ta + 5] = Z.b;
                                Xa[Ta + 6] = ra.r;
                                Xa[Ta + 7] = ra.g;
                                Xa[Ta + 8] = ra.b;
                                Xa[Ta + 9] = la.r;
                                Xa[Ta + 10] = la.g;
                                Xa[Ta + 11] = la.b;
                                Ta += 12
                            }
                            if (Ab && Za.hasTangents) {
                                la = sa[0];
                                ua = sa[1];
                                U = sa[2];
                                sa = sa[3];
                                Ma[La] = la.x;
                                Ma[La + 1] = la.y;
                                Ma[La + 2] = la.z;
                                Ma[La + 3] = la.w;
                                Ma[La + 4] = ua.x;
                                Ma[La + 5] = ua.y;
                                Ma[La + 6] = ua.z;
                                Ma[La + 7] = ua.w;
                                Ma[La + 8] = U.x;
                                Ma[La + 9] = U.y;
                                Ma[La + 10] = U.z;
                                Ma[La + 11] = U.w;
                                Ma[La + 12] = sa.x;
                                Ma[La + 13] = sa.y;
                                Ma[La + 14] = sa.z;
                                Ma[La + 15] = sa.w;
                                La += 16
                            }
                            if (zb && Ka)if (na.length == 4 && Fb)for (sa = 0; sa < 4; sa++) {
                                ha = na[sa];
                                hb[bb] = ha.x;
                                hb[bb + 1] = ha.y;
                                hb[bb + 2] = ha.z;
                                bb += 3
                            } else for (sa = 0; sa < 4; sa++) {
                                hb[bb] = ha.x;
                                hb[bb + 1] = ha.y;
                                hb[bb + 2] = ha.z;
                                bb += 3
                            }
                            if (tb && Ya !== void 0 && Ja)for (sa = 0; sa < 4; sa++) {
                                na = Ya[sa];
                                ub[nb] = na.u;
                                ub[nb + 1] = na.v;
                                nb += 2
                            }
                            if (tb && jb !== void 0 && Ja)for (sa = 0; sa < 4; sa++) {
                                na = jb[sa];
                                vb[ob] = na.u;
                                vb[ob + 1] = na.v;
                                ob += 2
                            }
                            yb && (db[ab] = Sa, db[ab + 1] = Sa + 1, db[ab + 2] = Sa + 3, db[ab + 3] = Sa + 1, db[ab + 4] = Sa + 2, db[ab + 5] = Sa + 3, ab += 6, eb[cb] = Sa, eb[cb + 1] = Sa + 1, eb[cb + 2] = Sa, eb[cb + 3] = Sa + 3, eb[cb + 4] = Sa + 1, eb[cb + 5] = Sa + 2, eb[cb + 6] = Sa + 2, eb[cb + 7] = Sa + 3, cb += 8, Sa += 4)
                        }
                        if (mb) {
                            ca = 0;
                            for (ia = mb.length; ca < ia; ca++) {
                                db[ab] = mb[ca].a;
                                db[ab + 1] = mb[ca].b;
                                db[ab + 2] = mb[ca].c;
                                db[ab + 3] = mb[ca].a;
                                db[ab + 4] = mb[ca].c;
                                db[ab + 5] = mb[ca].d;
                                ab += 6
                            }
                        }
                        xb && (v.bindBuffer(v.ARRAY_BUFFER, L.__webglVertexBuffer), v.bufferData(v.ARRAY_BUFFER, Wa, fa));
                        if (ib)for (kb in ib)if (M = ib[kb], M.needsUpdate) {
                            v.bindBuffer(v.ARRAY_BUFFER, M.buffer);
                            v.bufferData(v.ARRAY_BUFFER, M.array, fa);
                            M.needsUpdate = !1
                        }
                        if (Cb) {
                            Z = 0;
                            for (ra = morphTargets.length; Z < ra; Z++) {
                                v.bindBuffer(v.ARRAY_BUFFER, L.__webglMorphTargetsBuffers[Z]);
                                v.bufferData(v.ARRAY_BUFFER, wb[Z], fa)
                            }
                        }
                        Bb && Ta > 0 && (v.bindBuffer(v.ARRAY_BUFFER, L.__webglColorBuffer), v.bufferData(v.ARRAY_BUFFER, Xa, fa));
                        zb && (v.bindBuffer(v.ARRAY_BUFFER, L.__webglNormalBuffer), v.bufferData(v.ARRAY_BUFFER, hb, fa));
                        Ab && Za.hasTangents && (v.bindBuffer(v.ARRAY_BUFFER, L.__webglTangentBuffer), v.bufferData(v.ARRAY_BUFFER, Ma, fa));
                        tb && nb > 0 && (v.bindBuffer(v.ARRAY_BUFFER, L.__webglUVBuffer), v.bufferData(v.ARRAY_BUFFER, ub, fa));
                        tb && ob > 0 && (v.bindBuffer(v.ARRAY_BUFFER, L.__webglUV2Buffer), v.bufferData(v.ARRAY_BUFFER, vb, fa));
                        yb && (v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, L.__webglFaceBuffer), v.bufferData(v.ELEMENT_ARRAY_BUFFER, db, fa), v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, L.__webglLineBuffer), v.bufferData(v.ELEMENT_ARRAY_BUFFER, eb, fa));
                        ka > 0 && (v.bindBuffer(v.ARRAY_BUFFER, L.__webglSkinVertexABuffer), v.bufferData(v.ARRAY_BUFFER, Na, fa), v.bindBuffer(v.ARRAY_BUFFER, L.__webglSkinVertexBBuffer), v.bufferData(v.ARRAY_BUFFER, Oa, fa), v.bindBuffer(v.ARRAY_BUFFER, L.__webglSkinIndicesBuffer), v.bufferData(v.ARRAY_BUFFER, Pa, fa), v.bindBuffer(v.ARRAY_BUFFER, L.__webglSkinWeightsBuffer), v.bufferData(v.ARRAY_BUFFER, Qa, fa));
                        ga.dynamic || (delete L.__inittedArrays, delete L.__colorArray, delete L.__normalArray, delete L.__tangentArray, delete L.__uvArray, delete L.__uv2Array, delete L.__faceArray, delete L.__vertexArray, delete L.__lineArray, delete L.__skinVertexAArray, delete L.__skinVertexBArray, delete L.__skinIndexArray, delete L.__skinWeightArray)
                    }
                }
            }
            N.__dirtyVertices = !1;
            N.__dirtyMorphTargets = !1;
            N.__dirtyElements = !1;
            N.__dirtyUvs = !1;
            N.__dirtyNormals = !1;
            N.__dirtyTangents = !1;
            N.__dirtyColors = !1
        } else if (F instanceof THREE.Ribbon) {
            N = F.geometry;
            if (N.__dirtyVertices || N.__dirtyColors) {
                F = N;
                Y = v.DYNAMIC_DRAW;
                Ja = F.vertices;
                L = F.colors;
                Aa = Ja.length;
                ga = L.length;
                Ka = F.__vertexArray;
                fa = F.__colorArray;
                Ya = F.__dirtyColors;
                if (F.__dirtyVertices) {
                    for (ca = 0; ca < Aa; ca++) {
                        ia = Ja[ca].position;
                        Q = ca * 3;
                        Ka[Q] = ia.x;
                        Ka[Q + 1] = ia.y;
                        Ka[Q + 2] = ia.z
                    }
                    v.bindBuffer(v.ARRAY_BUFFER, F.__webglVertexBuffer);
                    v.bufferData(v.ARRAY_BUFFER, Ka, Y)
                }
                if (Ya) {
                    for (ca = 0; ca < ga; ca++) {
                        color = L[ca];
                        Q = ca * 3;
                        fa[Q] = color.r;
                        fa[Q + 1] = color.g;
                        fa[Q + 2] = color.b
                    }
                    v.bindBuffer(v.ARRAY_BUFFER, F.__webglColorBuffer);
                    v.bufferData(v.ARRAY_BUFFER, fa, Y)
                }
            }
            N.__dirtyVertices = !1;
            N.__dirtyColors = !1
        } else if (F instanceof THREE.Line) {
            N = F.geometry;
            if (N.__dirtyVertices || N.__dirtyColors) {
                F = N;
                Y = v.DYNAMIC_DRAW;
                Ja = F.vertices;
                L = F.colors;
                Aa = Ja.length;
                ga = L.length;
                Ka = F.__vertexArray;
                fa = F.__colorArray;
                Ya = F.__dirtyColors;
                if (F.__dirtyVertices) {
                    for (ca = 0; ca < Aa; ca++) {
                        ia = Ja[ca].position;
                        Q = ca * 3;
                        Ka[Q] = ia.x;
                        Ka[Q + 1] = ia.y;
                        Ka[Q + 2] = ia.z
                    }
                    v.bindBuffer(v.ARRAY_BUFFER, F.__webglVertexBuffer);
                    v.bufferData(v.ARRAY_BUFFER, Ka, Y)
                }
                if (Ya) {
                    for (ca = 0; ca < ga; ca++) {
                        color = L[ca];
                        Q = ca * 3;
                        fa[Q] = color.r;
                        fa[Q + 1] = color.g;
                        fa[Q + 2] = color.b
                    }
                    v.bindBuffer(v.ARRAY_BUFFER, F.__webglColorBuffer);
                    v.bufferData(v.ARRAY_BUFFER, fa, Y)
                }
            }
            N.__dirtyVertices = !1;
            N.__dirtyColors = !1
        } else if (F instanceof THREE.ParticleSystem) {
            N = F.geometry;
            (N.__dirtyVertices || N.__dirtyColors || F.sortParticles) && g(N, v.DYNAMIC_DRAW, F);
            N.__dirtyVertices = !1;
            N.__dirtyColors = !1
        }
    }

    function E(F) {
        function Y(la) {
            var ua = [];
            N = 0;
            for (L = la.length; N < L; N++)la[N] == void 0 ? ua.push("undefined") : ua.push(la[N].id);
            return ua.join("_")
        }

        var N, L, Q, ga, fa, ca, ia, na, U = {}, ha = F.morphTargets !== void 0 ? F.morphTargets.length : 0;
        F.geometryGroups = {};
        Q = 0;
        for (ga = F.faces.length; Q < ga; Q++) {
            fa = F.faces[Q];
            ca = fa.materials;
            ia = Y(ca);
            U[ia] == void 0 && (U[ia] = {hash: ia, counter: 0});
            na = U[ia].hash + "_" + U[ia].counter;
            F.geometryGroups[na] == void 0 && (F.geometryGroups[na] = {faces: [], materials: ca, vertices: 0, numMorphTargets: ha});
            fa = fa instanceof THREE.Face3 ? 3 : 4;
            F.geometryGroups[na].vertices + fa > 65535 && (U[ia].counter += 1, na = U[ia].hash + "_" + U[ia].counter, F.geometryGroups[na] == void 0 && (F.geometryGroups[na] = {faces: [], materials: ca, vertices: 0, numMorphTargets: ha}));
            F.geometryGroups[na].faces.push(Q);
            F.geometryGroups[na].vertices += fa
        }
    }

    function C(F, Y, N) {
        F.push({buffer: Y, object: N, opaque: {list: [], count: 0}, transparent: {list: [], count: 0}})
    }

    function H(F) {
        if (F != W) {
            switch (F) {
                case THREE.AdditiveBlending:
                    v.blendEquation(v.FUNC_ADD);
                    v.blendFunc(v.SRC_ALPHA, v.ONE);
                    break;
                case THREE.SubtractiveBlending:
                    v.blendEquation(v.FUNC_ADD);
                    v.blendFunc(v.ZERO, v.ONE_MINUS_SRC_COLOR);
                    break;
                case THREE.MultiplyBlending:
                    v.blendEquation(v.FUNC_ADD);
                    v.blendFunc(v.ZERO, v.SRC_COLOR);
                    break;
                default:
                    v.blendEquationSeparate(v.FUNC_ADD, v.FUNC_ADD);
                    v.blendFuncSeparate(v.SRC_ALPHA, v.ONE_MINUS_SRC_ALPHA, v.ONE, v.ONE_MINUS_SRC_ALPHA)
            }
            W = F
        }
    }

    function G(F, Y, N) {
        (N.width & N.width - 1) == 0 && (N.height & N.height - 1) == 0 ? (v.texParameteri(F, v.TEXTURE_WRAP_S, P(Y.wrapS)), v.texParameteri(F, v.TEXTURE_WRAP_T, P(Y.wrapT)), v.texParameteri(F, v.TEXTURE_MAG_FILTER, P(Y.magFilter)), v.texParameteri(F, v.TEXTURE_MIN_FILTER, P(Y.minFilter)), v.generateMipmap(F)) : (v.texParameteri(F, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE), v.texParameteri(F, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE), v.texParameteri(F, v.TEXTURE_MAG_FILTER, X(Y.magFilter)), v.texParameteri(F, v.TEXTURE_MIN_FILTER, X(Y.minFilter)))
    }

    function I(F, Y) {
        if (F.needsUpdate) {
            if (F.__webglTexture)F.__webglTexture = v.deleteTexture(F.__webglTexture);
            F.__webglTexture = v.createTexture();
            v.bindTexture(v.TEXTURE_2D, F.__webglTexture);
            v.texImage2D(v.TEXTURE_2D, 0, v.RGBA, v.RGBA, v.UNSIGNED_BYTE, F.image);
            G(v.TEXTURE_2D, F, F.image);
            v.bindTexture(v.TEXTURE_2D, null);
            F.needsUpdate = !1
        }
        v.activeTexture(v.TEXTURE0 + Y);
        v.bindTexture(v.TEXTURE_2D, F.__webglTexture)
    }

    function V(F) {
        if (F && !F.__webglFramebuffer) {
            if (F.depthBuffer === void 0)F.depthBuffer = !0;
            if (F.stencilBuffer === void 0)F.stencilBuffer = !0;
            F.__webglFramebuffer = v.createFramebuffer();
            F.__webglRenderbuffer = v.createRenderbuffer();
            F.__webglTexture = v.createTexture();
            v.bindTexture(v.TEXTURE_2D, F.__webglTexture);
            v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_S, P(F.wrapS));
            v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_T, P(F.wrapT));
            v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, P(F.magFilter));
            v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MIN_FILTER, P(F.minFilter));
            v.texImage2D(v.TEXTURE_2D, 0, P(F.format), F.width, F.height, 0, P(F.format), P(F.type), null);
            v.bindRenderbuffer(v.RENDERBUFFER, F.__webglRenderbuffer);
            v.bindFramebuffer(v.FRAMEBUFFER, F.__webglFramebuffer);
            v.framebufferTexture2D(v.FRAMEBUFFER, v.COLOR_ATTACHMENT0, v.TEXTURE_2D, F.__webglTexture, 0);
            F.depthBuffer && !F.stencilBuffer ? (v.renderbufferStorage(v.RENDERBUFFER, v.DEPTH_COMPONENT16, F.width, F.height), v.framebufferRenderbuffer(v.FRAMEBUFFER, v.DEPTH_ATTACHMENT, v.RENDERBUFFER, F.__webglRenderbuffer)) : F.depthBuffer && F.stencilBuffer ? (v.renderbufferStorage(v.RENDERBUFFER, v.DEPTH_STENCIL, F.width, F.height), v.framebufferRenderbuffer(v.FRAMEBUFFER, v.DEPTH_STENCIL_ATTACHMENT, v.RENDERBUFFER, F.__webglRenderbuffer)) : v.renderbufferStorage(v.RENDERBUFFER, v.RGBA4, F.width, F.height);
            v.bindTexture(v.TEXTURE_2D, null);
            v.bindRenderbuffer(v.RENDERBUFFER, null);
            v.bindFramebuffer(v.FRAMEBUFFER, null)
        }
        var Y, N;
        F ? (Y = F.__webglFramebuffer, N = F.width, F = F.height) : (Y = null, N = ya, F = za);
        Y != T && (v.bindFramebuffer(v.FRAMEBUFFER, Y), v.viewport(ma, oa, N, F), T = Y)
    }

    function $(F, Y) {
        var N;
        F == "fragment" ? N = v.createShader(v.FRAGMENT_SHADER) : F == "vertex" && (N = v.createShader(v.VERTEX_SHADER));
        v.shaderSource(N, Y);
        v.compileShader(N);
        if (!v.getShaderParameter(N, v.COMPILE_STATUS))return console.error(v.getShaderInfoLog(N)), console.error(Y), null;
        return N
    }

    function X(F) {
        switch (F) {
            case THREE.NearestFilter:
            case THREE.NearestMipMapNearestFilter:
            case THREE.NearestMipMapLinearFilter:
                return v.NEAREST;
            default:
                return v.LINEAR
        }
    }

    function P(F) {
        switch (F) {
            case THREE.RepeatWrapping:
                return v.REPEAT;
            case THREE.ClampToEdgeWrapping:
                return v.CLAMP_TO_EDGE;
            case THREE.MirroredRepeatWrapping:
                return v.MIRRORED_REPEAT;
            case THREE.NearestFilter:
                return v.NEAREST;
            case THREE.NearestMipMapNearestFilter:
                return v.NEAREST_MIPMAP_NEAREST;
            case THREE.NearestMipMapLinearFilter:
                return v.NEAREST_MIPMAP_LINEAR;
            case THREE.LinearFilter:
                return v.LINEAR;
            case THREE.LinearMipMapNearestFilter:
                return v.LINEAR_MIPMAP_NEAREST;
            case THREE.LinearMipMapLinearFilter:
                return v.LINEAR_MIPMAP_LINEAR;
            case THREE.ByteType:
                return v.BYTE;
            case THREE.UnsignedByteType:
                return v.UNSIGNED_BYTE;
            case THREE.ShortType:
                return v.SHORT;
            case THREE.UnsignedShortType:
                return v.UNSIGNED_SHORT;
            case THREE.IntType:
                return v.INT;
            case THREE.UnsignedShortType:
                return v.UNSIGNED_INT;
            case THREE.FloatType:
                return v.FLOAT;
            case THREE.AlphaFormat:
                return v.ALPHA;
            case THREE.RGBFormat:
                return v.RGB;
            case THREE.RGBAFormat:
                return v.RGBA;
            case THREE.LuminanceFormat:
                return v.LUMINANCE;
            case THREE.LuminanceAlphaFormat:
                return v.LUMINANCE_ALPHA
        }
        return 0
    }

    var S = this, v, O = [], J = null, T = null, K = !0, R = null, aa = null, W = null, ea = null, ma = 0, oa = 0, ya = 0, za = 0, qa = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4], Ga = new THREE.Matrix4, Da = new Float32Array(16), Ha = new Float32Array(16), Ia = new THREE.Vector4, xa = {ambient: [0, 0, 0], directional: {length: 0, colors: [], positions: []}, point: {length: 0, colors: [], positions: [], distances: []}};
    b = b || {};
    var da = b.canvas !== void 0 ? b.canvas : document.createElement("canvas"), ja = b.stencil !== void 0 ? b.stencil : !0, pa = b.antialias !== void 0 ? b.antialias : !1, va = b.clearColor !== void 0 ? new THREE.Color(b.clearColor) : new THREE.Color(0), Fa = b.clearAlpha !== void 0 ? b.clearAlpha : 0;
    this.data = {vertices: 0, faces: 0, drawCalls: 0};
    this.maxMorphTargets = 8;
    this.domElement = da;
    this.sortObjects = this.autoClear = !0;
    try {
        if (!(v = da.getContext("experimental-webgl", {antialias: pa, stencil: ja})))throw"Error creating WebGL context.";
    } catch ($a) {
        console.error($a)
    }
    console.log(navigator.userAgent + " | " + v.getParameter(v.VERSION) + " | " + v.getParameter(v.VENDOR) + " | " + v.getParameter(v.RENDERER) + " | " + v.getParameter(v.SHADING_LANGUAGE_VERSION));
    v.clearColor(0, 0, 0, 1);
    v.clearDepth(1);
    v.enable(v.DEPTH_TEST);
    v.depthFunc(v.LEQUAL);
    v.frontFace(v.CCW);
    v.cullFace(v.BACK);
    v.enable(v.CULL_FACE);
    v.enable(v.BLEND);
    v.blendEquation(v.FUNC_ADD);
    v.blendFunc(v.SRC_ALPHA, v.ONE_MINUS_SRC_ALPHA);
    v.clearColor(va.r, va.g, va.b, Fa);
    this.context = v;
    var fb = v.getParameter(v.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0;
    if (ja) {
        var wa = {};
        wa.vertices = new Float32Array(12);
        wa.faces = new Uint16Array(6);
        wa.darkness = 0.5;
        wa.vertices[0] = -20;
        wa.vertices[1] = -20;
        wa.vertices[2] = -1;
        wa.vertices[3] = 20;
        wa.vertices[4] = -20;
        wa.vertices[5] = -1;
        wa.vertices[6] = 20;
        wa.vertices[7] = 20;
        wa.vertices[8] = -1;
        wa.vertices[9] = -20;
        wa.vertices[10] = 20;
        wa.vertices[11] = -1;
        wa.faces[0] = 0;
        wa.faces[1] = 1;
        wa.faces[2] = 2;
        wa.faces[3] = 0;
        wa.faces[4] = 2;
        wa.faces[5] = 3;
        wa.vertexBuffer = v.createBuffer();
        wa.elementBuffer = v.createBuffer();
        v.bindBuffer(v.ARRAY_BUFFER, wa.vertexBuffer);
        v.bufferData(v.ARRAY_BUFFER, wa.vertices, v.STATIC_DRAW);
        v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, wa.elementBuffer);
        v.bufferData(v.ELEMENT_ARRAY_BUFFER, wa.faces, v.STATIC_DRAW);
        wa.program = v.createProgram();
        v.attachShader(wa.program, $("fragment", THREE.ShaderLib.shadowPost.fragmentShader));
        v.attachShader(wa.program, $("vertex", THREE.ShaderLib.shadowPost.vertexShader));
        v.linkProgram(wa.program);
        wa.vertexLocation = v.getAttribLocation(wa.program, "position");
        wa.projectionLocation = v.getUniformLocation(wa.program, "projectionMatrix");
        wa.darknessLocation = v.getUniformLocation(wa.program, "darkness")
    }
    var ta = {};
    ta.vertices = new Float32Array(16);
    ta.faces = new Uint16Array(6);
    b = 0;
    ta.vertices[b++] = -1;
    ta.vertices[b++] = -1;
    ta.vertices[b++] = 0;
    ta.vertices[b++] = 0;
    ta.vertices[b++] = 1;
    ta.vertices[b++] = -1;
    ta.vertices[b++] = 1;
    ta.vertices[b++] = 0;
    ta.vertices[b++] = 1;
    ta.vertices[b++] = 1;
    ta.vertices[b++] = 1;
    ta.vertices[b++] = 1;
    ta.vertices[b++] = -1;
    ta.vertices[b++] = 1;
    ta.vertices[b++] = 0;
    ta.vertices[b++] = 1;
    b = 0;
    ta.faces[b++] = 0;
    ta.faces[b++] = 1;
    ta.faces[b++] = 2;
    ta.faces[b++] = 0;
    ta.faces[b++] = 2;
    ta.faces[b++] = 3;
    ta.vertexBuffer = v.createBuffer();
    ta.elementBuffer = v.createBuffer();
    ta.tempTexture = v.createTexture();
    ta.occlusionTexture = v.createTexture();
    v.bindBuffer(v.ARRAY_BUFFER, ta.vertexBuffer);
    v.bufferData(v.ARRAY_BUFFER, ta.vertices, v.STATIC_DRAW);
    v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, ta.elementBuffer);
    v.bufferData(v.ELEMENT_ARRAY_BUFFER, ta.faces, v.STATIC_DRAW);
    v.bindTexture(v.TEXTURE_2D, ta.tempTexture);
    v.texImage2D(v.TEXTURE_2D, 0, v.RGB, 16, 16, 0, v.RGB, v.UNSIGNED_BYTE, null);
    v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE);
    v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE);
    v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, v.NEAREST);
    v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MIN_FILTER, v.NEAREST);
    v.bindTexture(v.TEXTURE_2D, ta.occlusionTexture);
    v.texImage2D(v.TEXTURE_2D, 0, v.RGBA, 16, 16, 0, v.RGBA, v.UNSIGNED_BYTE, null);
    v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE);
    v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE);
    v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, v.NEAREST);
    v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MIN_FILTER, v.NEAREST);
    v.getParameter(v.MAX_VERTEX_TEXTURE_IMAGE_UNITS) <= 0 ? (ta.hasVertexTexture = !1, ta.program = v.createProgram(), v.attachShader(ta.program, $("fragment", THREE.ShaderLib.lensFlare.fragmentShader)), v.attachShader(ta.program, $("vertex", THREE.ShaderLib.lensFlare.vertexShader))) : (ta.hasVertexTexture = !0, ta.program = v.createProgram(), v.attachShader(ta.program, $("fragment", THREE.ShaderLib.lensFlareVertexTexture.fragmentShader)), v.attachShader(ta.program, $("vertex", THREE.ShaderLib.lensFlareVertexTexture.vertexShader)));
    v.linkProgram(ta.program);
    ta.attributes = {};
    ta.uniforms = {};
    ta.attributes.vertex = v.getAttribLocation(ta.program, "position");
    ta.attributes.uv = v.getAttribLocation(ta.program, "UV");
    ta.uniforms.renderType = v.getUniformLocation(ta.program, "renderType");
    ta.uniforms.map = v.getUniformLocation(ta.program, "map");
    ta.uniforms.occlusionMap = v.getUniformLocation(ta.program, "occlusionMap");
    ta.uniforms.opacity = v.getUniformLocation(ta.program, "opacity");
    ta.uniforms.scale = v.getUniformLocation(ta.program, "scale");
    ta.uniforms.rotation = v.getUniformLocation(ta.program, "rotation");
    ta.uniforms.screenPosition = v.getUniformLocation(ta.program, "screenPosition");
    var Eb = !1;
    _sprite = {};
    _sprite.vertices = new Float32Array(16);
    _sprite.faces = new Uint16Array(6);
    b = 0;
    _sprite.vertices[b++] = -1;
    _sprite.vertices[b++] = -1;
    _sprite.vertices[b++] = 0;
    _sprite.vertices[b++] = 0;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = -1;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = 0;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = -1;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = 0;
    _sprite.vertices[b++] = 1;
    b = 0;
    _sprite.faces[b++] = 0;
    _sprite.faces[b++] = 1;
    _sprite.faces[b++] = 2;
    _sprite.faces[b++] = 0;
    _sprite.faces[b++] = 2;
    _sprite.faces[b++] = 3;
    _sprite.vertexBuffer = v.createBuffer();
    _sprite.elementBuffer = v.createBuffer();
    v.bindBuffer(v.ARRAY_BUFFER, _sprite.vertexBuffer);
    v.bufferData(v.ARRAY_BUFFER, _sprite.vertices, v.STATIC_DRAW);
    v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, _sprite.elementBuffer);
    v.bufferData(v.ELEMENT_ARRAY_BUFFER, _sprite.faces, v.STATIC_DRAW);
    _sprite.program = v.createProgram();
    v.attachShader(_sprite.program, $("fragment", THREE.ShaderLib.sprite.fragmentShader));
    v.attachShader(_sprite.program, $("vertex", THREE.ShaderLib.sprite.vertexShader));
    v.linkProgram(_sprite.program);
    _sprite.attributes = {};
    _sprite.uniforms = {};
    _sprite.attributes.position = v.getAttribLocation(_sprite.program, "position");
    _sprite.attributes.uv = v.getAttribLocation(_sprite.program, "uv");
    _sprite.uniforms.uvOffset = v.getUniformLocation(_sprite.program, "uvOffset");
    _sprite.uniforms.uvScale = v.getUniformLocation(_sprite.program, "uvScale");
    _sprite.uniforms.rotation = v.getUniformLocation(_sprite.program, "rotation");
    _sprite.uniforms.scale = v.getUniformLocation(_sprite.program, "scale");
    _sprite.uniforms.alignment = v.getUniformLocation(_sprite.program, "alignment");
    _sprite.uniforms.map = v.getUniformLocation(_sprite.program, "map");
    _sprite.uniforms.opacity = v.getUniformLocation(_sprite.program, "opacity");
    _sprite.uniforms.useScreenCoordinates = v.getUniformLocation(_sprite.program, "useScreenCoordinates");
    _sprite.uniforms.affectedByDistance = v.getUniformLocation(_sprite.program, "affectedByDistance");
    _sprite.uniforms.screenPosition = v.getUniformLocation(_sprite.program, "screenPosition");
    _sprite.uniforms.modelViewMatrix = v.getUniformLocation(_sprite.program, "modelViewMatrix");
    _sprite.uniforms.projectionMatrix = v.getUniformLocation(_sprite.program, "projectionMatrix");
    var Db = !1;
    this.setSize = function (F, Y) {
        da.width = F;
        da.height = Y;
        this.setViewport(0, 0, da.width, da.height)
    };
    this.setViewport = function (F, Y, N, L) {
        ma = F;
        oa = Y;
        ya = N;
        za = L;
        v.viewport(ma, oa, ya, za)
    };
    this.setScissor = function (F, Y, N, L) {
        v.scissor(F, Y, N, L)
    };
    this.enableScissorTest = function (F) {
        F ? v.enable(v.SCISSOR_TEST) : v.disable(v.SCISSOR_TEST)
    };
    this.enableDepthBufferWrite = function (F) {
        K = F;
        v.depthMask(F)
    };
    this.setClearColorHex = function (F, Y) {
        va.setHex(F);
        Fa = Y;
        v.clearColor(va.r, va.g, va.b, Fa)
    };
    this.setClearColor = function (F, Y) {
        va.copy(F);
        Fa = Y;
        v.clearColor(va.r, va.g, va.b, Fa)
    };
    this.clear = function () {
        v.clear(v.COLOR_BUFFER_BIT | v.DEPTH_BUFFER_BIT | v.STENCIL_BUFFER_BIT)
    };
    this.setStencilShadowDarkness = function (F) {
        wa.darkness = F
    };
    this.getContext = function () {
        return v
    };
    this.initMaterial = function (F, Y, N, L) {
        var Q, ga, fa;
        F instanceof THREE.MeshDepthMaterial ? fa = "depth" : F instanceof THREE.ShadowVolumeDynamicMaterial ? fa = "shadowVolumeDynamic" : F instanceof THREE.MeshNormalMaterial ? fa = "normal" : F instanceof THREE.MeshBasicMaterial ? fa = "basic" : F instanceof THREE.MeshLambertMaterial ? fa = "lambert" : F instanceof THREE.MeshPhongMaterial ? fa = "phong" : F instanceof THREE.LineBasicMaterial ? fa = "basic" : F instanceof THREE.ParticleBasicMaterial && (fa = "particle_basic");
        if (fa) {
            var ca = THREE.ShaderLib[fa];
            F.uniforms = THREE.UniformsUtils.clone(ca.uniforms);
            F.vertexShader = ca.vertexShader;
            F.fragmentShader = ca.fragmentShader
        }
        var ia, na, U;
        ia = U = ca = 0;
        for (na = Y.length; ia < na; ia++) {
            ga = Y[ia];
            ga instanceof THREE.DirectionalLight && U++;
            ga instanceof THREE.PointLight && ca++
        }
        ca + U <= 4 ? Y = U : (Y = Math.ceil(4 * U / (ca + U)), ca = 4 - Y);
        ga = {directional: Y, point: ca};
        U = 50;
        if (L !== void 0 && L instanceof THREE.SkinnedMesh)U = L.bones.length;
        var ha;
        a:{
            ia = F.fragmentShader;
            na = F.vertexShader;
            ca = F.uniforms;
            Y = F.attributes;
            N = {map: !!F.map, envMap: !!F.envMap, lightMap: !!F.lightMap, vertexColors: F.vertexColors, fog: N, sizeAttenuation: F.sizeAttenuation, skinning: F.skinning, morphTargets: F.morphTargets, maxMorphTargets: this.maxMorphTargets, maxDirLights: ga.directional, maxPointLights: ga.point, maxBones: U};
            var la;
            ga = [];
            fa ? ga.push(fa) : (ga.push(ia), ga.push(na));
            for (la in N) {
                ga.push(la);
                ga.push(N[la])
            }
            fa = ga.join();
            la = 0;
            for (ga = O.length; la < ga; la++)if (O[la].code == fa) {
                ha = O[la].program;
                break a
            }
            la = v.createProgram();
            prefix_fragment = ["#ifdef GL_ES\nprecision highp float;\n#endif", "#define MAX_DIR_LIGHTS " + N.maxDirLights, "#define MAX_POINT_LIGHTS " + N.maxPointLights, N.fog ? "#define USE_FOG" : "", N.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "", N.map ? "#define USE_MAP" : "", N.envMap ? "#define USE_ENVMAP" : "", N.lightMap ? "#define USE_LIGHTMAP" : "", N.vertexColors ? "#define USE_COLOR" : "", "uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");
            prefix_vertex = [fb ? "#define VERTEX_TEXTURES" : "", "#define MAX_DIR_LIGHTS " + N.maxDirLights, "#define MAX_POINT_LIGHTS " + N.maxPointLights, "#define MAX_BONES " + N.maxBones, N.map ? "#define USE_MAP" : "", N.envMap ? "#define USE_ENVMAP" : "", N.lightMap ? "#define USE_LIGHTMAP" : "", N.vertexColors ? "#define USE_COLOR" : "", N.skinning ? "#define USE_SKINNING" : "", N.morphTargets ? "#define USE_MORPHTARGETS" : "", N.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", "uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform mat4 cameraInverseMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinVertexA;\nattribute vec4 skinVertexB;\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
            v.attachShader(la, $("fragment", prefix_fragment + ia));
            v.attachShader(la, $("vertex", prefix_vertex + na));
            v.linkProgram(la);
            v.getProgramParameter(la, v.LINK_STATUS) || console.error("Could not initialise shader\nVALIDATE_STATUS: " + v.getProgramParameter(la, v.VALIDATE_STATUS) + ", gl error [" + v.getError() + "]");
            la.uniforms = {};
            la.attributes = {};
            var ua;
            ia = ["viewMatrix", "modelViewMatrix", "projectionMatrix", "normalMatrix", "objectMatrix", "cameraPosition", "cameraInverseMatrix", "boneGlobalMatrices", "morphTargetInfluences"];
            for (ua in ca)ia.push(ua);
            ua = ia;
            ca = 0;
            for (ia = ua.length; ca < ia; ca++) {
                na = ua[ca];
                la.uniforms[na] = v.getUniformLocation(la, na)
            }
            ia = ["position", "normal", "uv", "uv2", "tangent", "color", "skinVertexA", "skinVertexB", "skinIndex", "skinWeight"];
            for (ua = 0; ua < N.maxMorphTargets; ua++)ia.push("morphTarget" + ua);
            for (ha in Y)ia.push(ha);
            ha = ia;
            ua = 0;
            for (Y = ha.length; ua < Y; ua++) {
                N = ha[ua];
                la.attributes[N] = v.getAttribLocation(la, N)
            }
            O.push({program: la, code: fa});
            ha = la
        }
        F.program = ha;
        ha = F.program.attributes;
        ha.position >= 0 && v.enableVertexAttribArray(ha.position);
        ha.color >= 0 && v.enableVertexAttribArray(ha.color);
        ha.normal >= 0 && v.enableVertexAttribArray(ha.normal);
        ha.tangent >= 0 && v.enableVertexAttribArray(ha.tangent);
        F.skinning && ha.skinVertexA >= 0 && ha.skinVertexB >= 0 && ha.skinIndex >= 0 && ha.skinWeight >= 0 && (v.enableVertexAttribArray(ha.skinVertexA), v.enableVertexAttribArray(ha.skinVertexB), v.enableVertexAttribArray(ha.skinIndex), v.enableVertexAttribArray(ha.skinWeight));
        if (F.attributes)for (Q in F.attributes)ha[Q] !== void 0 && ha[Q] >= 0 && v.enableVertexAttribArray(ha[Q]);
        if (F.morphTargets) {
            F.numSupportedMorphTargets = 0;
            ha.morphTarget0 >= 0 && (v.enableVertexAttribArray(ha.morphTarget0), F.numSupportedMorphTargets++);
            ha.morphTarget1 >= 0 && (v.enableVertexAttribArray(ha.morphTarget1), F.numSupportedMorphTargets++);
            ha.morphTarget2 >= 0 && (v.enableVertexAttribArray(ha.morphTarget2), F.numSupportedMorphTargets++);
            ha.morphTarget3 >= 0 && (v.enableVertexAttribArray(ha.morphTarget3), F.numSupportedMorphTargets++);
            ha.morphTarget4 >= 0 && (v.enableVertexAttribArray(ha.morphTarget4), F.numSupportedMorphTargets++);
            ha.morphTarget5 >= 0 && (v.enableVertexAttribArray(ha.morphTarget5), F.numSupportedMorphTargets++);
            ha.morphTarget6 >= 0 && (v.enableVertexAttribArray(ha.morphTarget6), F.numSupportedMorphTargets++);
            ha.morphTarget7 >= 0 && (v.enableVertexAttribArray(ha.morphTarget7), F.numSupportedMorphTargets++);
            L.__webglMorphTargetInfluences = new Float32Array(this.maxMorphTargets);
            F = 0;
            for (Q = this.maxMorphTargets; F < Q; F++)L.__webglMorphTargetInfluences[F] = 0
        }
    };
    this.render = function (F, Y, N, L) {
        var Q, ga, fa, ca, ia, na, U, ha, la = F.lights, ua = F.fog;
        S.data.vertices = 0;
        S.data.faces = 0;
        S.data.drawCalls = 0;
        Y.matrixAutoUpdate && Y.update(void 0, !0);
        F.update(void 0, !1, Y);
        Y.matrixWorldInverse.flattenToArray(Ha);
        Y.projectionMatrix.flattenToArray(Da);
        Ga.multiply(Y.projectionMatrix, Y.matrixWorldInverse);
        p(Ga);
        this.initWebGLObjects(F);
        V(N);
        (this.autoClear || L) && this.clear();
        ia = F.__webglObjects.length;
        for (L = 0; L < ia; L++)if (Q = F.__webglObjects[L], U = Q.object, U.visible)if (!(U instanceof THREE.Mesh) || o(U)) {
            if (U.matrixWorld.flattenToArray(U._objectMatrixArray), B(U, Y), w(Q), Q.render = !0, this.sortObjects) {
                Ia.copy(U.position);
                Ga.multiplyVector3(Ia);
                Q.z = Ia.z
            }
        } else Q.render = !1; else Q.render = !1;
        this.sortObjects && F.__webglObjects.sort(x);
        na = F.__webglObjectsImmediate.length;
        for (L = 0; L < na; L++) {
            Q = F.__webglObjectsImmediate[L];
            U = Q.object;
            U.visible && (U.matrixAutoUpdate && U.matrixWorld.flattenToArray(U._objectMatrixArray), B(U, Y), u(Q))
        }
        H(THREE.NormalBlending);
        for (L = 0; L < ia; L++)if (Q = F.__webglObjects[L], Q.render) {
            U = Q.object;
            ha = Q.buffer;
            fa = Q.opaque;
            m(U);
            for (Q = 0; Q < fa.count; Q++) {
                ca = fa.list[Q];
                n(ca.depthTest);
                f(Y, la, ua, ca, ha, U)
            }
        }
        for (L = 0; L < na; L++)if (Q = F.__webglObjectsImmediate[L], U = Q.object, U.visible) {
            fa = Q.opaque;
            m(U);
            for (Q = 0; Q < fa.count; Q++) {
                ca = fa.list[Q];
                n(ca.depthTest);
                ga = c(Y, la, ua, ca, U);
                U.render(function (sa) {
                    h(sa, ga, ca.shading)
                })
            }
        }
        for (L = 0; L < ia; L++)if (Q = F.__webglObjects[L], Q.render) {
            U = Q.object;
            ha = Q.buffer;
            fa = Q.transparent;
            m(U);
            for (Q = 0; Q < fa.count; Q++) {
                ca = fa.list[Q];
                H(ca.blending);
                n(ca.depthTest);
                f(Y, la, ua, ca, ha, U)
            }
        }
        for (L = 0; L < na; L++)if (Q = F.__webglObjectsImmediate[L], U = Q.object, U.visible) {
            fa = Q.transparent;
            m(U);
            for (Q = 0; Q < fa.count; Q++) {
                ca = fa.list[Q];
                H(ca.blending);
                n(ca.depthTest);
                ga = c(Y, la, ua, ca, U);
                U.render(function (sa) {
                    h(sa, ga, ca.shading)
                })
            }
        }
        F.__webglSprites.length && z(F, Y);
        ja && F.__webglShadowVolumes.length && F.lights.length && y(F);
        F.__webglLensFlares.length && D(F, Y);
        N && N.minFilter !== THREE.NearestFilter && N.minFilter !== THREE.LinearFilter && (v.bindTexture(v.TEXTURE_2D, N.__webglTexture), v.generateMipmap(v.TEXTURE_2D), v.bindTexture(v.TEXTURE_2D, null))
    };
    this.initWebGLObjects = function (F) {
        if (!F.__webglObjects) {
            F.__webglObjects = [];
            F.__webglObjectsImmediate = [];
            F.__webglShadowVolumes = [];
            F.__webglLensFlares = [];
            F.__webglSprites = []
        }
        for (; F.__objectsAdded.length;) {
            var Y = F.__objectsAdded[0], N = F, L = void 0, Q = void 0, ga = void 0;
            if (Y._modelViewMatrix == void 0) {
                Y._modelViewMatrix = new THREE.Matrix4;
                Y._normalMatrixArray = new Float32Array(9);
                Y._modelViewMatrixArray = new Float32Array(16);
                Y._objectMatrixArray = new Float32Array(16);
                Y.matrixWorld.flattenToArray(Y._objectMatrixArray)
            }
            if (Y instanceof THREE.Mesh)for (L in Q = Y.geometry, Q.geometryGroups == void 0 && E(Q), Q.geometryGroups) {
                ga = Q.geometryGroups[L];
                if (!ga.__webglVertexBuffer) {
                    var fa = ga;
                    fa.__webglVertexBuffer = v.createBuffer();
                    fa.__webglNormalBuffer = v.createBuffer();
                    fa.__webglTangentBuffer = v.createBuffer();
                    fa.__webglColorBuffer = v.createBuffer();
                    fa.__webglUVBuffer = v.createBuffer();
                    fa.__webglUV2Buffer = v.createBuffer();
                    fa.__webglSkinVertexABuffer = v.createBuffer();
                    fa.__webglSkinVertexBBuffer = v.createBuffer();
                    fa.__webglSkinIndicesBuffer = v.createBuffer();
                    fa.__webglSkinWeightsBuffer = v.createBuffer();
                    fa.__webglFaceBuffer = v.createBuffer();
                    fa.__webglLineBuffer = v.createBuffer();
                    if (fa.numMorphTargets) {
                        var ca = void 0, ia = void 0;
                        fa.__webglMorphTargetsBuffers = [];
                        ca = 0;
                        for (ia = fa.numMorphTargets; ca < ia; ca++)fa.__webglMorphTargetsBuffers.push(v.createBuffer())
                    }
                    fa = ga;
                    ca = Y;
                    var na = void 0, U = void 0, ha = void 0, la = void 0, ua = void 0, sa = void 0, Ja = sa = ia = 0, Aa = void 0;
                    la = ca.geometry;
                    Aa = la.faces;
                    ua = fa.faces;
                    na = 0;
                    for (U = ua.length; na < U; na++) {
                        ha = ua[na];
                        ha = Aa[ha];
                        ha instanceof THREE.Face3 ? (ia += 3, sa += 1, Ja += 3) : ha instanceof THREE.Face4 && (ia += 4, sa += 2, Ja += 4)
                    }
                    na = fa;
                    U = ca;
                    var Ka = void 0, Ya = void 0;
                    Ka = void 0;
                    ha = [];
                    Aa = 0;
                    for (ua = U.materials.length; Aa < ua; Aa++)if (Ka = U.materials[Aa], Ka instanceof THREE.MeshFaceMaterial) {
                        Ka = 0;
                        for (l = na.materials.length; Ka < l; Ka++)(Ya = na.materials[Ka]) && ha.push(Ya)
                    } else(Ya = Ka) && ha.push(Ya);
                    na = ha;
                    a:{
                        Aa = void 0;
                        ua = na.length;
                        for (U = 0; U < ua; U++)if (Aa = na[U], Aa.map || Aa.lightMap || Aa instanceof THREE.MeshShaderMaterial) {
                            U = !0;
                            break a
                        }
                        U = !1
                    }
                    a:{
                        ua = void 0;
                        ha = na.length;
                        for (Aa = 0; Aa < ha; Aa++)if (ua = na[Aa], !(ua instanceof THREE.MeshBasicMaterial && !ua.envMap || ua instanceof THREE.MeshDepthMaterial)) {
                            Aa = ua && ua.shading != void 0 && ua.shading == THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading;
                            break a
                        }
                        Aa = !1
                    }
                    a:{
                        ha = void 0;
                        Ka = na.length;
                        for (ua = 0; ua < Ka; ua++)if (ha = na[ua], ha.vertexColors) {
                            ha = ha.vertexColors;
                            break a
                        }
                        ha = !1
                    }
                    fa.__vertexArray = new Float32Array(ia * 3);
                    if (Aa)fa.__normalArray = new Float32Array(ia * 3);
                    if (la.hasTangents)fa.__tangentArray = new Float32Array(ia * 4);
                    if (ha)fa.__colorArray = new Float32Array(ia * 3);
                    if (U) {
                        if (la.faceUvs.length > 0 || la.faceVertexUvs.length > 0)fa.__uvArray = new Float32Array(ia * 2);
                        if (la.faceUvs.length > 1 || la.faceVertexUvs.length > 1)fa.__uv2Array = new Float32Array(ia * 2)
                    }
                    if (ca.geometry.skinWeights.length && ca.geometry.skinIndices.length) {
                        fa.__skinVertexAArray = new Float32Array(ia * 4);
                        fa.__skinVertexBArray = new Float32Array(ia * 4);
                        fa.__skinIndexArray = new Float32Array(ia * 4);
                        fa.__skinWeightArray = new Float32Array(ia * 4)
                    }
                    fa.__faceArray = new Uint16Array(sa * 3 + (ca.geometry.edgeFaces ? ca.geometry.edgeFaces.length * 6 : 0));
                    fa.__lineArray = new Uint16Array(Ja * 2);
                    if (fa.numMorphTargets) {
                        fa.__morphTargetsArrays = [];
                        la = 0;
                        for (ua = fa.numMorphTargets; la < ua; la++)fa.__morphTargetsArrays.push(new Float32Array(ia * 3))
                    }
                    fa.__needsSmoothNormals = Aa == THREE.SmoothShading;
                    fa.__uvType = U;
                    fa.__vertexColorType = ha;
                    fa.__normalType = Aa;
                    fa.__webglFaceCount = sa * 3 + (ca.geometry.edgeFaces ? ca.geometry.edgeFaces.length * 6 : 0);
                    fa.__webglLineCount = Ja * 2;
                    la = 0;
                    for (ua = na.length; la < ua; la++)if (na[la].attributes)for (a in fa.__webglCustomAttributes = {}, na[la].attributes) {
                        U = {};
                        for (prop in na[la].attributes[a])U[prop] = na[la].attributes[a][prop];
                        if (!U.__webglInitialized || U.createUniqueBuffers) {
                            U.__webglInitialized = !0;
                            sa = 1;
                            U.type === "v2" ? sa = 2 : U.type === "v3" ? sa = 3 : U.type === "v4" ? sa = 4 : U.type === "c" && (sa = 3);
                            U.size = sa;
                            U.needsUpdate = !0;
                            U.array = new Float32Array(ia * sa);
                            U.buffer = v.createBuffer();
                            U.buffer.belongsToAttribute = a
                        }
                        fa.__webglCustomAttributes[a] = U
                    }
                    fa.__inittedArrays = !0;
                    Q.__dirtyVertices = !0;
                    Q.__dirtyMorphTargets = !0;
                    Q.__dirtyElements = !0;
                    Q.__dirtyUvs = !0;
                    Q.__dirtyNormals = !0;
                    Q.__dirtyTangents = !0;
                    Q.__dirtyColors = !0
                }
                Y instanceof THREE.ShadowVolume ? C(N.__webglShadowVolumes, ga, Y) : C(N.__webglObjects, ga, Y)
            } else if (Y instanceof THREE.LensFlare)C(N.__webglLensFlares, void 0, Y); else if (Y instanceof THREE.Ribbon) {
                Q = Y.geometry;
                if (!Q.__webglVertexBuffer) {
                    L = Q;
                    L.__webglVertexBuffer = v.createBuffer();
                    L.__webglColorBuffer = v.createBuffer();
                    L = Q;
                    ga = L.vertices.length;
                    L.__vertexArray = new Float32Array(ga * 3);
                    L.__colorArray = new Float32Array(ga * 3);
                    L.__webglVertexCount = ga;
                    Q.__dirtyVertices = !0;
                    Q.__dirtyColors = !0
                }
                C(N.__webglObjects, Q, Y)
            } else if (Y instanceof THREE.Line) {
                Q = Y.geometry;
                if (!Q.__webglVertexBuffer) {
                    L = Q;
                    L.__webglVertexBuffer = v.createBuffer();
                    L.__webglColorBuffer = v.createBuffer();
                    L = Q;
                    ga = L.vertices.length;
                    L.__vertexArray = new Float32Array(ga * 3);
                    L.__colorArray = new Float32Array(ga * 3);
                    L.__webglLineCount = ga;
                    Q.__dirtyVertices = !0;
                    Q.__dirtyColors = !0
                }
                C(N.__webglObjects, Q, Y)
            } else if (Y instanceof THREE.ParticleSystem) {
                Q = Y.geometry;
                if (!Q.__webglVertexBuffer) {
                    L = Q;
                    L.__webglVertexBuffer = v.createBuffer();
                    L.__webglColorBuffer = v.createBuffer();
                    L = Q;
                    ga = L.vertices.length;
                    L.__vertexArray = new Float32Array(ga * 3);
                    L.__colorArray = new Float32Array(ga * 3);
                    L.__sortArray = [];
                    L.__webglParticleCount = ga;
                    Q.__dirtyVertices = !0;
                    Q.__dirtyColors = !0
                }
                C(N.__webglObjects, Q, Y)
            } else THREE.MarchingCubes !== void 0 && Y instanceof THREE.MarchingCubes ? N.__webglObjectsImmediate.push({object: Y, opaque: {list: [], count: 0}, transparent: {list: [], count: 0}}) : Y instanceof THREE.Sprite && N.__webglSprites.push(Y);
            F.__objectsAdded.splice(0, 1)
        }
        for (; F.__objectsRemoved.length;) {
            Y = F.__objectsRemoved[0];
            N = F;
            L = void 0;
            if (Y instanceof THREE.Mesh)for (Q = N.__webglObjects.length - 1; Q >= 0; Q--) {
                if (L = N.__webglObjects[Q].object, Y == L) {
                    N.__webglObjects.splice(Q, 1);
                    break
                }
            } else if (Y instanceof THREE.Sprite)for (Q = N.__webglSprites.length - 1; Q >= 0; Q--)if (L = N.__webglSprites[Q], Y == L) {
                N.__webglSprites.splice(Q, 1);
                break
            }
            F.__objectsRemoved.splice(0, 1)
        }
        Y = 0;
        for (N = F.__webglObjects.length; Y < N; Y++)A(F.__webglObjects[Y].object, F);
        Y = 0;
        for (N = F.__webglShadowVolumes.length; Y < N; Y++)A(F.__webglShadowVolumes[Y].object, F);
        Y = 0;
        for (N = F.__webglLensFlares.length; Y < N; Y++)A(F.__webglLensFlares[Y].object, F)
    };
    this.setFaceCulling = function (F, Y) {
        F ? (!Y || Y == "ccw" ? v.frontFace(v.CCW) : v.frontFace(v.CW), F == "back" ? v.cullFace(v.BACK) : F == "front" ? v.cullFace(v.FRONT) : v.cullFace(v.FRONT_AND_BACK), v.enable(v.CULL_FACE)) : v.disable(v.CULL_FACE)
    };
    this.supportsVertexTextures = function () {
        return fb
    }
};
THREE.WebGLRenderTarget = function (b, g, c) {
    this.width = b;
    this.height = g;
    c = c || {};
    this.wrapS = c.wrapS !== void 0 ? c.wrapS : THREE.ClampToEdgeWrapping;
    this.wrapT = c.wrapT !== void 0 ? c.wrapT : THREE.ClampToEdgeWrapping;
    this.magFilter = c.magFilter !== void 0 ? c.magFilter : THREE.LinearFilter;
    this.minFilter = c.minFilter !== void 0 ? c.minFilter : THREE.LinearMipMapLinearFilter;
    this.offset = new THREE.Vector2(0, 0);
    this.repeat = new THREE.Vector2(1, 1);
    this.format = c.format !== void 0 ? c.format : THREE.RGBAFormat;
    this.type = c.type !== void 0 ? c.type : THREE.UnsignedByteType;
    this.depthBuffer = c.depthBuffer !== void 0 ? c.depthBuffer : !0;
    this.stencilBuffer = c.stencilBuffer !== void 0 ? c.stencilBuffer : !0
};
THREE.ColorUtils = {adjustHSV: function (b, g, c, f) {
    var h = THREE.ColorUtils.__hsv;
    THREE.ColorUtils.rgbToHsv(b, h);
    h.h = THREE.ColorUtils.clamp(h.h + g, 0, 1);
    h.s = THREE.ColorUtils.clamp(h.s + c, 0, 1);
    h.v = THREE.ColorUtils.clamp(h.v + f, 0, 1);
    b.setHSV(h.h, h.s, h.v)
}, rgbToHsv: function (b, g) {
    var c = b.r, f = b.g, h = b.b, m = Math.max(Math.max(c, f), h), n = Math.min(Math.min(c, f), h);
    if (n == m)n = c = 0; else {
        var p = m - n;
        n = p / m;
        c = c == m ? (f - h) / p : f == m ? 2 + (h - c) / p : 4 + (c - f) / p;
        c /= 6;
        c < 0 && (c += 1);
        c > 1 && (c -= 1)
    }
    g === void 0 && (g = {h: 0, s: 0, v: 0});
    g.h = c;
    g.s = n;
    g.v = m;
    return g
}, clamp: function (b, g, c) {
    return b < g ? g : b > c ? c : b
}};
THREE.ColorUtils.__hsv = {h: 0, s: 0, v: 0};
var GeometryUtils = {merge: function (b, g) {
    var c = g instanceof THREE.Mesh, f = b.vertices.length, h = c ? g.geometry : g, m = b.vertices, n = h.vertices, p = b.faces, o = h.faces, t = b.faceVertexUvs[0];
    h = h.faceVertexUvs[0];
    c && g.matrixAutoUpdate && g.updateMatrix();
    for (var u = 0, w = n.length; u < w; u++) {
        var x = new THREE.Vertex(n[u].position.clone());
        c && g.matrix.multiplyVector3(x.position);
        m.push(x)
    }
    u = 0;
    for (w = o.length; u < w; u++) {
        n = o[u];
        var y, z, D = n.vertexNormals;
        x = n.vertexColors;
        n instanceof THREE.Face3 ? y = new THREE.Face3(n.a + f, n.b + f, n.c + f) : n instanceof THREE.Face4 && (y = new THREE.Face4(n.a + f, n.b + f, n.c + f, n.d + f));
        y.normal.copy(n.normal);
        c = 0;
        for (m = D.length; c < m; c++) {
            z = D[c];
            y.vertexNormals.push(z.clone())
        }
        y.color.copy(n.color);
        c = 0;
        for (m = x.length; c < m; c++) {
            z = x[c];
            y.vertexColors.push(z.clone())
        }
        y.materials = n.materials.slice();
        y.centroid.copy(n.centroid);
        p.push(y)
    }
    u = 0;
    for (w = h.length; u < w; u++) {
        f = h[u];
        p = [];
        c = 0;
        for (m = f.length; c < m; c++)p.push(new THREE.UV(f[c].u, f[c].v));
        t.push(p)
    }
}};
THREE.ImageUtils = {loadTexture: function (b, g, c) {
    var f = new Image, h = new THREE.Texture(f, g);
    f.onload = function () {
        h.needsUpdate = !0;
        c && c(this)
    };
    f.src = b;
    return h
}, loadTextureCube: function (b, g, c) {
    var f, h = [], m = new THREE.Texture(h, g);
    g = h.loadCount = 0;
    for (f = b.length; g < f; ++g) {
        h[g] = new Image;
        h[g].onload = function () {
            h.loadCount += 1;
            if (h.loadCount == 6)m.needsUpdate = !0;
            c && c(this)
        };
        h[g].src = b[g]
    }
    return m
}};
THREE.SceneUtils = {addMesh: function (b, g, c, f, h, m, n, p, o, t) {
    g = new THREE.Mesh(g, t);
    g.scale.x = g.scale.y = g.scale.z = c;
    g.position.x = f;
    g.position.y = h;
    g.position.z = m;
    g.rotation.x = n;
    g.rotation.y = p;
    g.rotation.z = o;
    b.addObject(g);
    return g
}, addPanoramaCubeWebGL: function (b, g, c) {
    var f = THREE.ShaderUtils.lib.cube;
    f.uniforms.tCube.texture = c;
    c = new THREE.MeshShaderMaterial({fragmentShader: f.fragmentShader, vertexShader: f.vertexShader, uniforms: f.uniforms});
    g = new THREE.Mesh(new THREE.Cube(g, g, g, 1, 1, 1, null, !0), c);
    b.addObject(g);
    return g
}, addPanoramaCube: function (b, g, c) {
    var f = [];
    f.push(new THREE.MeshBasicMaterial({map: new THREE.Texture(c[0])}));
    f.push(new THREE.MeshBasicMaterial({map: new THREE.Texture(c[1])}));
    f.push(new THREE.MeshBasicMaterial({map: new THREE.Texture(c[2])}));
    f.push(new THREE.MeshBasicMaterial({map: new THREE.Texture(c[3])}));
    f.push(new THREE.MeshBasicMaterial({map: new THREE.Texture(c[4])}));
    f.push(new THREE.MeshBasicMaterial({map: new THREE.Texture(c[5])}));
    g = new THREE.Mesh(new THREE.Cube(g, g, g, 1, 1, f, !0), new THREE.MeshFaceMaterial);
    b.addObject(g);
    return g
}, addPanoramaCubePlanes: function (b, g, c) {
    var f = g / 2;
    g = new THREE.Plane(g, g);
    var h = Math.PI, m = Math.PI / 2;
    THREE.SceneUtils.addMesh(b, g, 1, 0, 0, -f, 0, 0, 0, new THREE.MeshBasicMaterial({map: new THREE.Texture(c[5])}));
    THREE.SceneUtils.addMesh(b, g, 1, -f, 0, 0, 0, m, 0, new THREE.MeshBasicMaterial({map: new THREE.Texture(c[0])}));
    THREE.SceneUtils.addMesh(b, g, 1, f, 0, 0, 0, -m, 0, new THREE.MeshBasicMaterial({map: new THREE.Texture(c[1])}));
    THREE.SceneUtils.addMesh(b, g, 1, 0, f, 0, m, 0, h, new THREE.MeshBasicMaterial({map: new THREE.Texture(c[2])}));
    THREE.SceneUtils.addMesh(b, g, 1, 0, -f, 0, -m, 0, h, new THREE.MeshBasicMaterial({map: new THREE.Texture(c[3])}))
}, showHierarchy: function (b, g) {
    THREE.SceneUtils.traverseHierarchy(b, function (c) {
        c.visible = g
    })
}, traverseHierarchy: function (b, g) {
    var c, f, h = b.children.length;
    for (f = 0; f < h; f++) {
        c = b.children[f];
        g(c);
        THREE.SceneUtils.traverseHierarchy(c, g)
    }
}};
THREE.ShaderUtils = {lib: {fresnel: {uniforms: {mRefractionRatio: {type: "f", value: 1.02}, mFresnelBias: {type: "f", value: 0.1}, mFresnelPower: {type: "f", value: 2}, mFresnelScale: {type: "f", value: 1}, tCube: {type: "t", value: 1, texture: null}}, fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}", vertexShader: "uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"}, normal: {uniforms: {enableAO: {type: "i", value: 0}, enableDiffuse: {type: "i", value: 0}, enableSpecular: {type: "i", value: 0}, tDiffuse: {type: "t", value: 0, texture: null}, tNormal: {type: "t", value: 2, texture: null}, tSpecular: {type: "t", value: 3, texture: null}, tAO: {type: "t", value: 4, texture: null}, uNormalScale: {type: "f", value: 1}, tDisplacement: {type: "t", value: 5, texture: null}, uDisplacementBias: {type: "f", value: -0.5}, uDisplacementScale: {type: "f", value: 2.5}, uPointLightPos: {type: "v3", value: new THREE.Vector3}, uPointLightColor: {type: "c", value: new THREE.Color(15658734)}, uDirLightPos: {type: "v3", value: new THREE.Vector3}, uDirLightColor: {type: "c", value: new THREE.Color(15658734)}, uAmbientLightColor: {type: "c", value: new THREE.Color(328965)}, uDiffuseColor: {type: "c", value: new THREE.Color(15658734)}, uSpecularColor: {type: "c", value: new THREE.Color(1118481)}, uAmbientColor: {type: "c", value: new THREE.Color(328965)}, uShininess: {type: "f", value: 30}}, fragmentShader: "uniform vec3 uDirLightPos;\nuniform vec3 uAmbientLightColor;\nuniform vec3 uDirLightColor;\nuniform vec3 uPointLightColor;\nuniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform float uNormalScale;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 diffuseTex = vec3( 1.0, 1.0, 1.0 );\nvec3 aoTex = vec3( 1.0, 1.0, 1.0 );\nvec3 specularTex = vec3( 1.0, 1.0, 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ndiffuseTex = texture2D( tDiffuse, vUv ).xyz;\nif( enableAO )\naoTex = texture2D( tAO, vUv ).xyz;\nif( enableSpecular )\nspecularTex = texture2D( tSpecular, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 pointDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 pointSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec3 pointVector = normalize( vPointLightVector );\nvec3 pointHalfVector = normalize( vPointLightVector + vViewPosition );\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = specularTex.r * pow( pointDotNormalHalf, uShininess );\npointDiffuse  += vec4( uDiffuseColor, 1.0 ) * pointDiffuseWeight;\npointSpecular += vec4( uSpecularColor, 1.0 ) * pointSpecularWeight * pointDiffuseWeight;\nvec4 dirDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 dirSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 lDirection = viewMatrix * vec4( uDirLightPos, 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = specularTex.r * pow( dirDotNormalHalf, uShininess );\ndirDiffuse  += vec4( uDiffuseColor, 1.0 ) * dirDiffuseWeight;\ndirSpecular += vec4( uSpecularColor, 1.0 ) * dirSpecularWeight * dirDiffuseWeight;\nvec4 totalLight = vec4( uAmbientLightColor * uAmbientColor, 1.0 );\ntotalLight += vec4( uDirLightColor, 1.0 ) * ( dirDiffuse + dirSpecular );\ntotalLight += vec4( uPointLightColor, 1.0 ) * ( pointDiffuse + pointSpecular );\ngl_FragColor = vec4( totalLight.xyz * aoTex * diffuseTex, 1.0 );\n}", vertexShader: "attribute vec4 tangent;\nuniform vec3 uPointLightPos;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv;\nvec4 lPosition = viewMatrix * vec4( uPointLightPos, 1.0 );\nvPointLightVector = normalize( lPosition.xyz - mvPosition.xyz );\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif\n}"}, cube: {uniforms: {tCube: {type: "t", value: 1, texture: null}}, vertexShader: "varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "uniform samplerCube tCube;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );\n}"}, convolution: {uniforms: {tDiffuse: {type: "t", value: 0, texture: null}, uImageIncrement: {type: "v2", value: new THREE.Vector2(0.001953125, 0)}, cKernel: {type: "fv1", value: []}}, vertexShader: "varying vec2 vUv;\nuniform vec2 uImageIncrement;\nvoid main(void) {\nvUv = uv - ((KERNEL_SIZE - 1.0) / 2.0) * uImageIncrement;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 uImageIncrement;\nuniform float cKernel[KERNEL_SIZE];\nvoid main(void) {\nvec2 imageCoord = vUv;\nvec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );\nfor( int i=0; i<KERNEL_SIZE; ++i ) {\nsum += texture2D( tDiffuse, imageCoord ) * cKernel[i];\nimageCoord += uImageIncrement;\n}\ngl_FragColor = sum;\n}"}, film: {uniforms: {tDiffuse: {type: "t", value: 0, texture: null}, time: {type: "f", value: 0}, nIntensity: {type: "f", value: 0.5}, sIntensity: {type: "f", value: 0.05}, sCount: {type: "f", value: 4096}, grayscale: {type: "i", value: 1}}, vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float time;\nuniform bool grayscale;\nuniform float nIntensity;\nuniform float sIntensity;\nuniform float sCount;\nvoid main() {\nvec4 cTextureScreen = texture2D( tDiffuse, vUv );\nfloat x = vUv.x * vUv.y * time *  1000.0;\nx = mod( x, 13.0 ) * mod( x, 123.0 );\nfloat dx = mod( x, 0.01 );\nvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\nvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\ncResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\ncResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\nif( grayscale ) {\ncResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n}\ngl_FragColor =  vec4( cResult, cTextureScreen.a );\n}"}, screen: {uniforms: {tDiffuse: {type: "t", value: 0, texture: null}, opacity: {type: "f", value: 1}}, vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float opacity;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\ngl_FragColor = opacity * texel;\n}"}, basic: {uniforms: {}, vertexShader: "void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "void main() {\ngl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );\n}"}}, buildKernel: function (b) {
    var g, c, f, h, m = 2 * Math.ceil(b * 3) + 1;
    m > 25 && (m = 25);
    h = (m - 1) * 0.5;
    c = Array(m);
    for (g = f = 0; g < m; ++g) {
        c[g] = Math.exp(-((g - h) * (g - h)) / (2 * b * b));
        f += c[g]
    }
    for (g = 0; g < m; ++g)c[g] /= f;
    return c
}};
THREE.AnimationHandler = function () {
    var b = [], g = {}, c = {update: function (h) {
        for (var m = 0; m < b.length; m++)b[m].update(h)
    }, addToUpdate: function (h) {
        b.indexOf(h) === -1 && b.push(h)
    }, removeFromUpdate: function (h) {
        h = b.indexOf(h);
        h !== -1 && b.splice(h, 1)
    }, add: function (h) {
        g[h.name] !== void 0 && console.log("THREE.AnimationHandler.add: Warning! " + h.name + " already exists in library. Overwriting.");
        g[h.name] = h;
        if (h.initialized !== !0) {
            for (var m = 0; m < h.hierarchy.length; m++) {
                for (var n = 0; n < h.hierarchy[m].keys.length; n++) {
                    if (h.hierarchy[m].keys[n].time < 0)h.hierarchy[m].keys[n].time = 0;
                    if (h.hierarchy[m].keys[n].rot !== void 0 && !(h.hierarchy[m].keys[n].rot instanceof THREE.Quaternion)) {
                        var p = h.hierarchy[m].keys[n].rot;
                        h.hierarchy[m].keys[n].rot = new THREE.Quaternion(p[0], p[1], p[2], p[3])
                    }
                }
                if (h.hierarchy[m].keys[0].morphTargets !== void 0) {
                    p = {};
                    for (n = 0; n < h.hierarchy[m].keys.length; n++)for (var o = 0; o < h.hierarchy[m].keys[n].morphTargets.length; o++) {
                        var t = h.hierarchy[m].keys[n].morphTargets[o];
                        p[t] = -1
                    }
                    h.hierarchy[m].usedMorphTargets = p;
                    for (n = 0; n < h.hierarchy[m].keys.length; n++) {
                        var u = {};
                        for (t in p) {
                            for (o = 0; o < h.hierarchy[m].keys[n].morphTargets.length; o++)if (h.hierarchy[m].keys[n].morphTargets[o] === t) {
                                u[t] = h.hierarchy[m].keys[n].morphTargetsInfluences[o];
                                break
                            }
                            o === h.hierarchy[m].keys[n].morphTargets.length && (u[t] = 0)
                        }
                        h.hierarchy[m].keys[n].morphTargetsInfluences = u
                    }
                }
                for (n = 1; n < h.hierarchy[m].keys.length; n++)h.hierarchy[m].keys[n].time === h.hierarchy[m].keys[n - 1].time && (h.hierarchy[m].keys.splice(n, 1), n--);
                for (n = 1; n < h.hierarchy[m].keys.length; n++)h.hierarchy[m].keys[n].index = n
            }
            n = parseInt(h.length * h.fps, 10);
            h.JIT = {};
            h.JIT.hierarchy = [];
            for (m = 0; m < h.hierarchy.length; m++)h.JIT.hierarchy.push(Array(n));
            h.initialized = !0
        }
    }, get: function (h) {
        if (typeof h === "string")return g[h] ? g[h] : (console.log("THREE.AnimationHandler.get: Couldn't find animation " + h), null)
    }, parse: function (h) {
        var m = [];
        if (h instanceof THREE.SkinnedMesh)for (var n = 0; n < h.bones.length; n++)m.push(h.bones[n]); else f(h, m);
        return m
    }}, f = function (h, m) {
        m.push(h);
        for (var n = 0; n < h.children.length; n++)f(h.children[n], m)
    };
    c.LINEAR = 0;
    c.CATMULLROM = 1;
    c.CATMULLROM_FORWARD = 2;
    return c
}();
THREE.Animation = function (b, g, c, f) {
    this.root = b;
    this.data = THREE.AnimationHandler.get(g);
    this.hierarchy = THREE.AnimationHandler.parse(b);
    this.currentTime = 0;
    this.timeScale = 1;
    this.isPlaying = !1;
    this.loop = this.isPaused = !0;
    this.interpolationType = c !== void 0 ? c : THREE.AnimationHandler.LINEAR;
    this.JITCompile = f !== void 0 ? f : !0;
    this.points = [];
    this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function (b, g) {
    if (!this.isPlaying) {
        this.isPlaying = !0;
        this.loop = b !== void 0 ? b : !0;
        this.currentTime = g !== void 0 ? g : 0;
        var c, f = this.hierarchy.length, h;
        for (c = 0; c < f; c++) {
            h = this.hierarchy[c];
            if (this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD)h.useQuaternion = !0;
            h.matrixAutoUpdate = !0;
            if (h.animationCache === void 0) {
                h.animationCache = {};
                h.animationCache.prevKey = {pos: 0, rot: 0, scl: 0};
                h.animationCache.nextKey = {pos: 0, rot: 0, scl: 0};
                h.animationCache.originalMatrix = h instanceof
                    THREE.Bone ? h.skinMatrix : h.matrix
            }
            var m = h.animationCache.prevKey;
            h = h.animationCache.nextKey;
            m.pos = this.data.hierarchy[c].keys[0];
            m.rot = this.data.hierarchy[c].keys[0];
            m.scl = this.data.hierarchy[c].keys[0];
            h.pos = this.getNextKeyWith("pos", c, 1);
            h.rot = this.getNextKeyWith("rot", c, 1);
            h.scl = this.getNextKeyWith("scl", c, 1)
        }
        this.update(0)
    }
    this.isPaused = !1;
    THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function () {
    this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
    this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function () {
    this.isPaused = this.isPlaying = !1;
    THREE.AnimationHandler.removeFromUpdate(this);
    for (var b = 0; b < this.hierarchy.length; b++)if (this.hierarchy[b].animationCache !== void 0) {
        this.hierarchy[b]instanceof THREE.Bone ? this.hierarchy[b].skinMatrix = this.hierarchy[b].animationCache.originalMatrix : this.hierarchy[b].matrix = this.hierarchy[b].animationCache.originalMatrix;
        delete this.hierarchy[b].animationCache
    }
};
THREE.Animation.prototype.update = function (b) {
    if (this.isPlaying) {
        var g = ["pos", "rot", "scl"], c, f, h, m, n, p, o, t, u = this.data.JIT.hierarchy, w, x;
        this.currentTime += b * this.timeScale;
        x = this.currentTime;
        w = this.currentTime %= this.data.length;
        t = parseInt(Math.min(w * this.data.fps, this.data.length * this.data.fps), 10);
        for (var y = 0, z = this.hierarchy.length; y < z; y++)if (b = this.hierarchy[y], o = b.animationCache, this.JITCompile && u[y][t] !== void 0)b instanceof THREE.Bone ? (b.skinMatrix = u[y][t], b.matrixAutoUpdate = !1, b.matrixWorldNeedsUpdate = !1) : (b.matrix = u[y][t], b.matrixAutoUpdate = !1, b.matrixWorldNeedsUpdate = !0); else {
            if (this.JITCompile)b instanceof THREE.Bone ? b.skinMatrix = b.animationCache.originalMatrix : b.matrix = b.animationCache.originalMatrix;
            for (var D = 0; D < 3; D++) {
                c = g[D];
                n = o.prevKey[c];
                p = o.nextKey[c];
                if (p.time <= x) {
                    if (w < x)if (this.loop) {
                        n = this.data.hierarchy[y].keys[0];
                        for (p = this.getNextKeyWith(c, y, 1); p.time < w;) {
                            n = p;
                            p = this.getNextKeyWith(c, y, p.index + 1)
                        }
                    } else {
                        this.stop();
                        return
                    } else {
                        do {
                            n = p;
                            p = this.getNextKeyWith(c, y, p.index + 1)
                        } while (p.time < w)
                    }
                    o.prevKey[c] = n;
                    o.nextKey[c] = p
                }
                b.matrixAutoUpdate = !0;
                b.matrixWorldNeedsUpdate = !0;
                f = (w - n.time) / (p.time - n.time);
                h = n[c];
                m = p[c];
                if (f < 0 || f > 1) {
                    console.log("THREE.Animation.update: Warning! Scale out of bounds:" + f + " on bone " + y);
                    f = f < 0 ? 0 : 1
                }
                if (c === "pos")if (c = b.position, this.interpolationType === THREE.AnimationHandler.LINEAR) {
                    c.x = h[0] + (m[0] - h[0]) * f;
                    c.y = h[1] + (m[1] - h[1]) * f;
                    c.z = h[2] + (m[2] - h[2]) * f
                } else {
                    if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD)if (this.points[0] = this.getPrevKeyWith("pos", y, n.index - 1).pos, this.points[1] = h, this.points[2] = m, this.points[3] = this.getNextKeyWith("pos", y, p.index + 1).pos, f = f * 0.33 + 0.33, h = this.interpolateCatmullRom(this.points, f), c.x = h[0], c.y = h[1], c.z = h[2], this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) {
                        f = this.interpolateCatmullRom(this.points, f * 1.01);
                        this.target.set(f[0], f[1], f[2]);
                        this.target.subSelf(c);
                        this.target.y = 0;
                        this.target.normalize();
                        f = Math.atan2(this.target.x, this.target.z);
                        b.rotation.set(0, f, 0)
                    }
                } else if (c === "rot")THREE.Quaternion.slerp(h, m, b.quaternion, f); else if (c === "scl") {
                    c = b.scale;
                    c.x = h[0] + (m[0] - h[0]) * f;
                    c.y = h[1] + (m[1] - h[1]) * f;
                    c.z = h[2] + (m[2] - h[2]) * f
                }
            }
        }
        if (this.JITCompile && u[0][t] === void 0) {
            this.hierarchy[0].update(void 0, !0);
            for (y = 0; y < this.hierarchy.length; y++)u[y][t] = this.hierarchy[y]instanceof THREE.Bone ? this.hierarchy[y].skinMatrix.clone() : this.hierarchy[y].matrix.clone()
        }
    }
};
THREE.Animation.prototype.interpolateCatmullRom = function (b, g) {
    var c = [], f = [], h, m, n, p, o, t;
    h = (b.length - 1) * g;
    m = Math.floor(h);
    h -= m;
    c[0] = m == 0 ? m : m - 1;
    c[1] = m;
    c[2] = m > b.length - 2 ? m : m + 1;
    c[3] = m > b.length - 3 ? m : m + 2;
    m = b[c[0]];
    p = b[c[1]];
    o = b[c[2]];
    t = b[c[3]];
    c = h * h;
    n = h * c;
    f[0] = this.interpolate(m[0], p[0], o[0], t[0], h, c, n);
    f[1] = this.interpolate(m[1], p[1], o[1], t[1], h, c, n);
    f[2] = this.interpolate(m[2], p[2], o[2], t[2], h, c, n);
    return f
};
THREE.Animation.prototype.interpolate = function (b, g, c, f, h, m, n) {
    b = (c - b) * 0.5;
    f = (f - g) * 0.5;
    return(2 * (g - c) + b + f) * n + (-3 * (g - c) - 2 * b - f) * m + b * h + g
};
THREE.Animation.prototype.getNextKeyWith = function (b, g, c) {
    var f = this.data.hierarchy[g].keys;
    for (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c = c < f.length - 1 ? c : f.length - 1 : c %= f.length; c < f.length; c++)if (f[c][b] !== void 0)return f[c];
    return this.data.hierarchy[g].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function (b, g, c) {
    var f = this.data.hierarchy[g].keys;
    for (c = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? c > 0 ? c : 0 : c >= 0 ? c : c + f.length; c >= 0; c--)if (f[c][b] !== void 0)return f[c];
    return this.data.hierarchy[g].keys[f.length - 1]
};
THREE.QuakeCamera = function (b) {
    function g(c, f) {
        return function () {
            f.apply(c, arguments)
        }
    }

    THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
    this.movementSpeed = 1;
    this.lookSpeed = 0.0050;
    this.noFly = !1;
    this.lookVertical = !0;
    this.autoForward = !1;
    this.activeLook = !0;
    this.heightSpeed = !1;
    this.heightCoef = 1;
    this.heightMin = 0;
    this.constrainVertical = !1;
    this.verticalMin = 0;
    this.verticalMax = 3.14;
    this.domElement = document;
    this.lastUpdate = (new Date).getTime();
    this.tdiff = 0;
    if (b) {
        if (b.movementSpeed !== void 0)this.movementSpeed = b.movementSpeed;
        if (b.lookSpeed !== void 0)this.lookSpeed = b.lookSpeed;
        if (b.noFly !== void 0)this.noFly = b.noFly;
        if (b.lookVertical !== void 0)this.lookVertical = b.lookVertical;
        if (b.autoForward !== void 0)this.autoForward = b.autoForward;
        if (b.activeLook !== void 0)this.activeLook = b.activeLook;
        if (b.heightSpeed !== void 0)this.heightSpeed = b.heightSpeed;
        if (b.heightCoef !== void 0)this.heightCoef = b.heightCoef;
        if (b.heightMin !== void 0)this.heightMin = b.heightMin;
        if (b.heightMax !== void 0)this.heightMax = b.heightMax;
        if (b.constrainVertical !== void 0)this.constrainVertical = b.constrainVertical;
        if (b.verticalMin !== void 0)this.verticalMin = b.verticalMin;
        if (b.verticalMax !== void 0)this.verticalMax = b.verticalMax;
        if (b.domElement !== void 0)this.domElement = b.domElement
    }
    this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = this.autoSpeedFactor = 0;
    this.mouseDragOn = this.freeze = this.moveRight = this.moveLeft = this.moveBackward = this.moveForward = !1;
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.onMouseDown = function (c) {
        c.preventDefault();
        c.stopPropagation();
        if (this.activeLook)switch (c.button) {
            case 0:
                this.moveForward = !0;
                break;
            case 2:
                this.moveBackward = !0
        }
        this.mouseDragOn = !0
    };
    this.onMouseUp = function (c) {
        c.preventDefault();
        c.stopPropagation();
        if (this.activeLook)switch (c.button) {
            case 0:
                this.moveForward = !1;
                break;
            case 2:
                this.moveBackward = !1
        }
        this.mouseDragOn = !1
    };
    this.onMouseMove = function (c) {
        this.mouseX = c.clientX - this.windowHalfX;
        this.mouseY = c.clientY - this.windowHalfY
    };
    this.onKeyDown = function (c) {
        switch (c.keyCode) {
            case 38:
            case 87:
                this.moveForward = !0;
                break;
            case 37:
            case 65:
                this.moveLeft = !0;
                break;
            case 40:
            case 83:
                this.moveBackward = !0;
                break;
            case 39:
            case 68:
                this.moveRight = !0;
                break;
            case 81:
                this.freeze = !this.freeze
        }
    };
    this.onKeyUp = function (c) {
        switch (c.keyCode) {
            case 38:
            case 87:
                this.moveForward = !1;
                break;
            case 37:
            case 65:
                this.moveLeft = !1;
                break;
            case 40:
            case 83:
                this.moveBackward = !1;
                break;
            case 39:
            case 68:
                this.moveRight = !1
        }
    };
    this.update = function () {
        var c = (new Date).getTime();
        this.tdiff = (c - this.lastUpdate) / 1E3;
        this.lastUpdate = c;
        if (!this.freeze) {
            this.autoSpeedFactor = this.heightSpeed ? this.tdiff * ((this.position.y < this.heightMin ? this.heightMin : this.position.y > this.heightMax ? this.heightMax : this.position.y) - this.heightMin) * this.heightCoef : 0;
            var f = this.tdiff * this.movementSpeed;
            (this.moveForward || this.autoForward && !this.moveBackward) && this.translateZ(-(f + this.autoSpeedFactor));
            this.moveBackward && this.translateZ(f);
            this.moveLeft && this.translateX(-f);
            this.moveRight && this.translateX(f);
            f = this.tdiff * this.lookSpeed;
            this.activeLook || (f = 0);
            this.lon += this.mouseX * f;
            this.lookVertical && (this.lat -= this.mouseY * f);
            this.lat = Math.max(-85, Math.min(85, this.lat));
            this.phi = (90 - this.lat) * Math.PI / 180;
            this.theta = this.lon * Math.PI / 180;
            c = this.target.position;
            var h = this.position;
            c.x = h.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
            c.y = h.y + 100 * Math.cos(this.phi);
            c.z = h.z + 100 * Math.sin(this.phi) * Math.sin(this.theta)
        }
        this.lon += this.mouseX * f;
        this.lookVertical && (this.lat -= this.mouseY * f);
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = (90 - this.lat) * Math.PI / 180;
        this.theta = this.lon * Math.PI / 180;
        if (this.constrainVertical)this.phi = (this.phi - 0) * (this.verticalMax - this.verticalMin) / 3.14 + this.verticalMin;
        c = this.target.position;
        h = this.position;
        c.x = h.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
        c.y = h.y + 100 * Math.cos(this.phi);
        c.z = h.z + 100 * Math.sin(this.phi) * Math.sin(this.theta);
        this.supr.update.call(this)
    };
    this.domElement.addEventListener("contextmenu", function (c) {
        c.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", g(this, this.onMouseMove), !1);
    this.domElement.addEventListener("mousedown", g(this, this.onMouseDown), !1);
    this.domElement.addEventListener("mouseup", g(this, this.onMouseUp), !1);
    this.domElement.addEventListener("keydown", g(this, this.onKeyDown), !1);
    this.domElement.addEventListener("keyup", g(this, this.onKeyUp), !1)
};
THREE.QuakeCamera.prototype = new THREE.Camera;
THREE.QuakeCamera.prototype.constructor = THREE.QuakeCamera;
THREE.QuakeCamera.prototype.supr = THREE.Camera.prototype;
THREE.QuakeCamera.prototype.translate = function (b, g) {
    this.matrix.rotateAxis(g);
    if (this.noFly)g.y = 0;
    this.position.addSelf(g.multiplyScalar(b));
    this.target.position.addSelf(g.multiplyScalar(b))
};
THREE.PathCamera = function (b) {
    function g(t, u, w, x) {
        var y = {name: w, fps: 0.6, length: x, hierarchy: []}, z, D = u.getControlPointsArray(), B = u.getLength(), A = D.length, E = 0;
        z = A - 1;
        u = {parent: -1, keys: []};
        u.keys[0] = {time: 0, pos: D[0], rot: [0, 0, 0, 1], scl: [1, 1, 1]};
        u.keys[z] = {time: x, pos: D[z], rot: [0, 0, 0, 1], scl: [1, 1, 1]};
        for (z = 1; z < A - 1; z++) {
            E = x * B.chunks[z] / B.total;
            u.keys[z] = {time: E, pos: D[z]}
        }
        y.hierarchy[0] = u;
        THREE.AnimationHandler.add(y);
        return new THREE.Animation(t, w, THREE.AnimationHandler.CATMULLROM_FORWARD, !1)
    }

    function c(t, u) {
        var w, x, y = new THREE.Geometry;
        for (w = 0; w < t.points.length * u; w++) {
            x = w / (t.points.length * u);
            x = t.getPoint(x);
            y.vertices[w] = new THREE.Vertex(new THREE.Vector3(x.x, x.y, x.z))
        }
        return y
    }

    function f(t, u) {
        var w = c(u, 10), x = c(u, 10), y = new THREE.LineBasicMaterial({color: 16711680, linewidth: 3});
        lineObj = new THREE.Line(w, y);
        particleObj = new THREE.ParticleSystem(x, new THREE.ParticleBasicMaterial({color: 16755200, size: 3}));
        lineObj.scale.set(1, 1, 1);
        t.addChild(lineObj);
        particleObj.scale.set(1, 1, 1);
        t.addChild(particleObj);
        x = new THREE.Sphere(1, 16, 8);
        y = new THREE.MeshBasicMaterial({color: 65280});
        for (i = 0; i < u.points.length; i++) {
            w = new THREE.Mesh(x, y);
            w.position.copy(u.points[i]);
            w.updateMatrix();
            t.addChild(w)
        }
    }

    THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
    this.id = "PathCamera" + THREE.PathCameraIdCounter++;
    this.duration = 1E4;
    this.waypoints = [];
    this.useConstantSpeed = !0;
    this.resamplingCoef = 50;
    this.debugPath = new THREE.Object3D;
    this.debugDummy = new THREE.Object3D;
    this.animationParent = new THREE.Object3D;
    this.lookSpeed = 0.0050;
    this.lookHorizontal = this.lookVertical = !0;
    this.verticalAngleMap = {srcRange: [0, 6.28], dstRange: [0, 6.28]};
    this.horizontalAngleMap = {srcRange: [0, 6.28], dstRange: [0, 6.28]};
    this.domElement = document;
    if (b) {
        if (b.duration !== void 0)this.duration = b.duration * 1E3;
        if (b.waypoints !== void 0)this.waypoints = b.waypoints;
        if (b.useConstantSpeed !== void 0)this.useConstantSpeed = b.useConstantSpeed;
        if (b.resamplingCoef !== void 0)this.resamplingCoef = b.resamplingCoef;
        if (b.createDebugPath !== void 0)this.createDebugPath = b.createDebugPath;
        if (b.createDebugDummy !== void 0)this.createDebugDummy = b.createDebugDummy;
        if (b.lookSpeed !== void 0)this.lookSpeed = b.lookSpeed;
        if (b.lookVertical !== void 0)this.lookVertical = b.lookVertical;
        if (b.lookHorizontal !== void 0)this.lookHorizontal = b.lookHorizontal;
        if (b.verticalAngleMap !== void 0)this.verticalAngleMap = b.verticalAngleMap;
        if (b.horizontalAngleMap !== void 0)this.horizontalAngleMap = b.horizontalAngleMap;
        if (b.domElement !== void 0)this.domElement = b.domElement
    }
    this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = 0;
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    var h = Math.PI * 2, m = Math.PI / 180;
    this.update = function (t, u, w) {
        var x, y;
        this.lookHorizontal && (this.lon += this.mouseX * this.lookSpeed);
        this.lookVertical && (this.lat -= this.mouseY * this.lookSpeed);
        this.lon = Math.max(0, Math.min(360, this.lon));
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = (90 - this.lat) * m;
        this.theta = this.lon * m;
        x = this.phi % h;
        this.phi = x >= 0 ? x : x + h;
        x = this.verticalAngleMap.srcRange;
        y = this.verticalAngleMap.dstRange;
        var z = y[1] - y[0];
        this.phi = TWEEN.Easing.Quadratic.EaseInOut(((this.phi - x[0]) * (y[1] - y[0]) / (x[1] - x[0]) + y[0] - y[0]) / z) * z + y[0];
        x = this.horizontalAngleMap.srcRange;
        y = this.horizontalAngleMap.dstRange;
        z = y[1] - y[0];
        this.theta = TWEEN.Easing.Quadratic.EaseInOut(((this.theta - x[0]) * (y[1] - y[0]) / (x[1] - x[0]) + y[0] - y[0]) / z) * z + y[0];
        x = this.target.position;
        x.x = 100 * Math.sin(this.phi) * Math.cos(this.theta);
        x.y = 100 * Math.cos(this.phi);
        x.z = 100 * Math.sin(this.phi) * Math.sin(this.theta);
        this.supr.update.call(this, t, u, w)
    };
    this.onMouseMove = function (t) {
        this.mouseX = t.clientX - this.windowHalfX;
        this.mouseY = t.clientY - this.windowHalfY
    };
    this.spline = new THREE.Spline;
    this.spline.initFromArray(this.waypoints);
    this.useConstantSpeed && this.spline.reparametrizeByArcLength(this.resamplingCoef);
    if (this.createDebugDummy) {
        b = new THREE.MeshLambertMaterial({color: 30719});
        var n = new THREE.MeshLambertMaterial({color: 65280}), p = new THREE.Cube(10, 10, 20), o = new THREE.Cube(2, 2, 10);
        this.animationParent = new THREE.Mesh(p, b);
        b = new THREE.Mesh(o, n);
        b.position.set(0, 10, 0);
        this.animation = g(this.animationParent, this.spline, this.id, this.duration);
        this.animationParent.addChild(this);
        this.animationParent.addChild(this.target);
        this.animationParent.addChild(b)
    } else {
        this.animation = g(this.animationParent, this.spline, this.id, this.duration);
        this.animationParent.addChild(this.target);
        this.animationParent.addChild(this)
    }
    this.createDebugPath && f(this.debugPath, this.spline);
    this.domElement.addEventListener("mousemove", function (t, u) {
        return function () {
            u.apply(t, arguments)
        }
    }(this, this.onMouseMove), !1)
};
THREE.PathCamera.prototype = new THREE.Camera;
THREE.PathCamera.prototype.constructor = THREE.PathCamera;
THREE.PathCamera.prototype.supr = THREE.Camera.prototype;
THREE.PathCameraIdCounter = 0;
THREE.FlyCamera = function (b) {
    function g(c, f) {
        return function () {
            f.apply(c, arguments)
        }
    }

    THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
    this.tmpQuaternion = new THREE.Quaternion;
    this.movementSpeed = 1;
    this.rollSpeed = 0.0050;
    this.autoForward = this.dragToLook = !1;
    this.domElement = document;
    if (b) {
        if (b.movementSpeed !== void 0)this.movementSpeed = b.movementSpeed;
        if (b.rollSpeed !== void 0)this.rollSpeed = b.rollSpeed;
        if (b.dragToLook !== void 0)this.dragToLook = b.dragToLook;
        if (b.autoForward !== void 0)this.autoForward = b.autoForward;
        if (b.domElement !== void 0)this.domElement = b.domElement
    }
    this.useTarget = !1;
    this.useQuaternion = !0;
    this.mouseStatus = 0;
    this.moveState = {up: 0, down: 0, left: 0, right: 0, forward: 0, back: 0, pitchUp: 0, pitchDown: 0, yawLeft: 0, yawRight: 0, rollLeft: 0, rollRight: 0};
    this.moveVector = new THREE.Vector3(0, 0, 0);
    this.rotationVector = new THREE.Vector3(0, 0, 0);
    this.lastUpdate = -1;
    this.tdiff = 0;
    this.handleEvent = function (c) {
        if (typeof this[c.type] == "function")this[c.type](c)
    };
    this.keydown = function (c) {
        if (!c.altKey) {
            switch (c.keyCode) {
                case 16:
                    this.movementSpeedMultiplier = 0.1;
                    break;
                case 87:
                    this.moveState.forward = 1;
                    break;
                case 83:
                    this.moveState.back = 1;
                    break;
                case 65:
                    this.moveState.left = 1;
                    break;
                case 68:
                    this.moveState.right = 1;
                    break;
                case 82:
                    this.moveState.up = 1;
                    break;
                case 70:
                    this.moveState.down = 1;
                    break;
                case 38:
                    this.moveState.pitchUp = 1;
                    break;
                case 40:
                    this.moveState.pitchDown = 1;
                    break;
                case 37:
                    this.moveState.yawLeft = 1;
                    break;
                case 39:
                    this.moveState.yawRight = 1;
                    break;
                case 81:
                    this.moveState.rollLeft = 1;
                    break;
                case 69:
                    this.moveState.rollRight = 1
            }
            this.updateMovementVector();
            this.updateRotationVector()
        }
    };
    this.keyup = function (c) {
        switch (c.keyCode) {
            case 16:
                this.movementSpeedMultiplier = 1;
                break;
            case 87:
                this.moveState.forward = 0;
                break;
            case 83:
                this.moveState.back = 0;
                break;
            case 65:
                this.moveState.left = 0;
                break;
            case 68:
                this.moveState.right = 0;
                break;
            case 82:
                this.moveState.up = 0;
                break;
            case 70:
                this.moveState.down = 0;
                break;
            case 38:
                this.moveState.pitchUp = 0;
                break;
            case 40:
                this.moveState.pitchDown = 0;
                break;
            case 37:
                this.moveState.yawLeft = 0;
                break;
            case 39:
                this.moveState.yawRight = 0;
                break;
            case 81:
                this.moveState.rollLeft = 0;
                break;
            case 69:
                this.moveState.rollRight = 0
        }
        this.updateMovementVector();
        this.updateRotationVector()
    };
    this.mousedown = function (c) {
        c.preventDefault();
        c.stopPropagation();
        if (this.dragToLook)this.mouseStatus++; else switch (c.button) {
            case 0:
                this.moveForward = !0;
                break;
            case 2:
                this.moveBackward = !0
        }
    };
    this.mousemove = function (c) {
        if (!this.dragToLook || this.mouseStatus > 0) {
            var f = this.getContainerDimensions(), h = f.size[0] / 2, m = f.size[1] / 2;
            this.moveState.yawLeft = -(c.clientX - f.offset[0] - h) / h;
            this.moveState.pitchDown = (c.clientY - f.offset[1] - m) / m;
            this.updateRotationVector()
        }
    };
    this.mouseup = function (c) {
        c.preventDefault();
        c.stopPropagation();
        if (this.dragToLook) {
            this.mouseStatus--;
            this.moveState.yawLeft = this.moveState.pitchDown = 0
        } else switch (c.button) {
            case 0:
                this.moveForward = !1;
                break;
            case 2:
                this.moveBackward = !1
        }
        this.updateRotationVector()
    };
    this.update = function () {
        var c = (new Date).getTime();
        if (this.lastUpdate == -1)this.lastUpdate = c;
        this.tdiff = (c - this.lastUpdate) / 1E3;
        this.lastUpdate = c;
        c = this.tdiff * this.movementSpeed;
        var f = this.tdiff * this.rollSpeed;
        this.translateX(this.moveVector.x * c);
        this.translateY(this.moveVector.y * c);
        this.translateZ(this.moveVector.z * c);
        this.tmpQuaternion.set(this.rotationVector.x * f, this.rotationVector.y * f, this.rotationVector.z * f, 1).normalize();
        this.quaternion.multiplySelf(this.tmpQuaternion);
        this.matrix.setPosition(this.position);
        this.matrix.setRotationFromQuaternion(this.quaternion);
        this.matrixWorldNeedsUpdate = !0;
        this.supr.update.call(this)
    };
    this.updateMovementVector = function () {
        var c = this.moveState.forward || this.autoForward && !this.moveState.back ? 1 : 0;
        this.moveVector.x = -this.moveState.left + this.moveState.right;
        this.moveVector.y = -this.moveState.down + this.moveState.up;
        this.moveVector.z = -c + this.moveState.back
    };
    this.updateRotationVector = function () {
        this.rotationVector.x = -this.moveState.pitchDown + this.moveState.pitchUp;
        this.rotationVector.y = -this.moveState.yawRight + this.moveState.yawLeft;
        this.rotationVector.z = -this.moveState.rollRight + this.moveState.rollLeft
    };
    this.getContainerDimensions = function () {
        return this.domElement != document ? {size: [this.domElement.offsetWidth, this.domElement.offsetHeight], offset: [this.domElement.offsetLeft, this.domElement.offsetTop]} : {size: [window.innerWidth, window.innerHeight], offset: [0, 0]}
    };
    this.domElement.addEventListener("mousemove", g(this, this.mousemove), !1);
    this.domElement.addEventListener("mousedown", g(this, this.mousedown), !1);
    this.domElement.addEventListener("mouseup", g(this, this.mouseup), !1);
    window.addEventListener("keydown", g(this, this.keydown), !1);
    window.addEventListener("keyup", g(this, this.keyup), !1);
    this.updateMovementVector();
    this.updateRotationVector()
};
THREE.FlyCamera.prototype = new THREE.Camera;
THREE.FlyCamera.prototype.constructor = THREE.FlyCamera;
THREE.FlyCamera.prototype.supr = THREE.Camera.prototype;
THREE.RollCamera = function (b, g, c, f) {
    THREE.Camera.call(this, b, g, c, f);
    this.mouseLook = !0;
    this.autoForward = !1;
    this.rollSpeed = this.movementSpeed = this.lookSpeed = 1;
    this.constrainVertical = [-0.9, 0.9];
    this.domElement = document;
    this.matrixAutoUpdate = this.useTarget = !1;
    this.forward = new THREE.Vector3(0, 0, 1);
    this.roll = 0;
    this.lastUpdate = -1;
    this.delta = 0;
    var h = new THREE.Vector3, m = new THREE.Vector3, n = new THREE.Vector3, p = new THREE.Matrix4, o = !1, t = 1, u = 0, w = 0, x = 0, y = 0, z = 0, D = window.innerWidth / 2, B = window.innerHeight / 2;
    this.update = function () {
        var A = (new Date).getTime();
        if (this.lastUpdate == -1)this.lastUpdate = A;
        this.delta = (A - this.lastUpdate) / 1E3;
        this.lastUpdate = A;
        this.mouseLook && (A = this.delta * this.lookSpeed, this.rotateHorizontally(A * y), this.rotateVertically(A * z));
        A = this.delta * this.movementSpeed;
        this.translateZ(A * (u > 0 || this.autoForward && !(u < 0) ? 1 : u));
        this.translateX(A * w);
        this.translateY(A * x);
        o && (this.roll += this.rollSpeed * this.delta * t);
        if (this.forward.y > this.constrainVertical[1]) {
            this.forward.y = this.constrainVertical[1];
            this.forward.normalize()
        } else if (this.forward.y < this.constrainVertical[0]) {
            this.forward.y = this.constrainVertical[0];
            this.forward.normalize()
        }
        n.copy(this.forward);
        m.set(0, 1, 0);
        h.cross(m, n).normalize();
        m.cross(n, h).normalize();
        this.matrix.n11 = h.x;
        this.matrix.n12 = m.x;
        this.matrix.n13 = n.x;
        this.matrix.n21 = h.y;
        this.matrix.n22 = m.y;
        this.matrix.n23 = n.y;
        this.matrix.n31 = h.z;
        this.matrix.n32 = m.z;
        this.matrix.n33 = n.z;
        p.identity();
        p.n11 = Math.cos(this.roll);
        p.n12 = -Math.sin(this.roll);
        p.n21 = Math.sin(this.roll);
        p.n22 = Math.cos(this.roll);
        this.matrix.multiplySelf(p);
        this.matrixWorldNeedsUpdate = !0;
        this.matrix.n14 = this.position.x;
        this.matrix.n24 = this.position.y;
        this.matrix.n34 = this.position.z;
        this.supr.update.call(this)
    };
    this.translateX = function (A) {
        this.position.x += this.matrix.n11 * A;
        this.position.y += this.matrix.n21 * A;
        this.position.z += this.matrix.n31 * A
    };
    this.translateY = function (A) {
        this.position.x += this.matrix.n12 * A;
        this.position.y += this.matrix.n22 * A;
        this.position.z += this.matrix.n32 * A
    };
    this.translateZ = function (A) {
        this.position.x -= this.matrix.n13 * A;
        this.position.y -= this.matrix.n23 * A;
        this.position.z -= this.matrix.n33 * A
    };
    this.rotateHorizontally = function (A) {
        h.set(this.matrix.n11, this.matrix.n21, this.matrix.n31);
        h.multiplyScalar(A);
        this.forward.subSelf(h);
        this.forward.normalize()
    };
    this.rotateVertically = function (A) {
        m.set(this.matrix.n12, this.matrix.n22, this.matrix.n32);
        m.multiplyScalar(A);
        this.forward.addSelf(m);
        this.forward.normalize()
    };
    this.domElement.addEventListener("contextmenu", function (A) {
        A.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", function (A) {
        y = (A.clientX - D) / window.innerWidth;
        z = (A.clientY - B) / window.innerHeight
    }, !1);
    this.domElement.addEventListener("mousedown", function (A) {
        A.preventDefault();
        A.stopPropagation();
        switch (A.button) {
            case 0:
                u = 1;
                break;
            case 2:
                u = -1
        }
    }, !1);
    this.domElement.addEventListener("mouseup", function (A) {
        A.preventDefault();
        A.stopPropagation();
        switch (A.button) {
            case 0:
                u = 0;
                break;
            case 2:
                u = 0
        }
    }, !1);
    this.domElement.addEventListener("keydown", function (A) {
        switch (A.keyCode) {
            case 38:
            case 87:
                u = 1;
                break;
            case 37:
            case 65:
                w = -1;
                break;
            case 40:
            case 83:
                u = -1;
                break;
            case 39:
            case 68:
                w = 1;
                break;
            case 81:
                o = !0;
                t = 1;
                break;
            case 69:
                o = !0;
                t = -1;
                break;
            case 82:
                x = 1;
                break;
            case 70:
                x = -1
        }
    }, !1);
    this.domElement.addEventListener("keyup", function (A) {
        switch (A.keyCode) {
            case 38:
            case 87:
                u = 0;
                break;
            case 37:
            case 65:
                w = 0;
                break;
            case 40:
            case 83:
                u = 0;
                break;
            case 39:
            case 68:
                w = 0;
                break;
            case 81:
                o = !1;
                break;
            case 69:
                o = !1;
                break;
            case 82:
                x = 0;
                break;
            case 70:
                x = 0
        }
    }, !1)
};
THREE.RollCamera.prototype = new THREE.Camera;
THREE.RollCamera.prototype.constructor = THREE.RollCamera;
THREE.RollCamera.prototype.supr = THREE.Camera.prototype;
THREE.TrackballCamera = function (b) {
    function g(w, x) {
        return function () {
            x.apply(w, arguments)
        }
    }

    b = b || {};
    THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
    this.domElement = b.domElement || document;
    this.screen = b.screen || {width: window.innerWidth, height: window.innerHeight, offsetLeft: 0, offsetTop: 0};
    this.radius = b.radius || (this.screen.width + this.screen.height) / 4;
    this.rotateSpeed = b.rotateSpeed || 1;
    this.zoomSpeed = b.zoomSpeed || 1.2;
    this.panSpeed = b.panSpeed || 0.3;
    this.noZoom = b.noZoom || !1;
    this.noPan = b.noPan || !1;
    this.staticMoving = b.staticMoving || !1;
    this.dynamicDampingFactor = b.dynamicDampingFactor || 0.2;
    this.minDistance = b.minDistance || 0;
    this.maxDistance = b.maxDistance || Infinity;
    this.keys = b.keys || [65, 83, 68];
    this.useTarget = !0;
    var c = !1, f = this.STATE.NONE, h = new THREE.Vector3, m = new THREE.Vector3, n = new THREE.Vector3, p = new THREE.Vector2, o = new THREE.Vector2, t = new THREE.Vector2, u = new THREE.Vector2;
    this.handleEvent = function (w) {
        if (typeof this[w.type] == "function")this[w.type](w)
    };
    this.getMouseOnScreen = function (w, x) {
        return new THREE.Vector2((w - this.screen.offsetLeft) / this.radius * 0.5, (x - this.screen.offsetTop) / this.radius * 0.5)
    };
    this.getMouseProjectionOnBall = function (w, x) {
        var y = new THREE.Vector3((w - this.screen.width * 0.5 - this.screen.offsetLeft) / this.radius, (this.screen.height * 0.5 + this.screen.offsetTop - x) / this.radius, 0), z = y.length();
        z > 1 ? y.normalize() : y.z = Math.sqrt(1 - z * z);
        h = this.position.clone().subSelf(this.target.position);
        z = this.up.clone().setLength(y.y);
        z.addSelf(this.up.clone().crossSelf(h).setLength(y.x));
        z.addSelf(h.setLength(y.z));
        return z
    };
    this.rotateCamera = function () {
        var w = Math.acos(m.dot(n) / m.length() / n.length());
        if (w) {
            var x = (new THREE.Vector3).cross(m, n).normalize(), y = new THREE.Quaternion;
            w *= this.rotateSpeed;
            y.setFromAxisAngle(x, -w);
            y.multiplyVector3(h);
            y.multiplyVector3(this.up);
            y.multiplyVector3(n);
            this.staticMoving ? m = n : (y.setFromAxisAngle(x, w * (this.dynamicDampingFactor - 1)), y.multiplyVector3(m))
        }
    };
    this.zoomCamera = function () {
        var w = 1 + (o.y - p.y) * this.zoomSpeed;
        w !== 1 && w > 0 && (h.multiplyScalar(w), this.staticMoving ? p = o : p.y += (o.y - p.y) * this.dynamicDampingFactor)
    };
    this.panCamera = function () {
        var w = u.clone().subSelf(t);
        if (w.lengthSq()) {
            w.multiplyScalar(h.length() * this.panSpeed);
            var x = h.clone().crossSelf(this.up).setLength(w.x);
            x.addSelf(this.up.clone().setLength(w.y));
            this.position.addSelf(x);
            this.target.position.addSelf(x);
            this.staticMoving ? t = u : t.addSelf(w.sub(u, t).multiplyScalar(this.dynamicDampingFactor))
        }
    };
    this.checkDistances = function () {
        if (!this.noZoom || !this.noPan) {
            this.position.lengthSq() > this.maxDistance * this.maxDistance && this.position.setLength(this.maxDistance);
            h.lengthSq() < this.minDistance * this.minDistance && this.position.add(this.target.position, h.setLength(this.minDistance))
        }
    };
    this.update = function (w, x, y) {
        h = this.position.clone().subSelf(this.target.position);
        this.rotateCamera();
        this.noZoom || this.zoomCamera();
        this.noPan || this.panCamera();
        this.position.add(this.target.position, h);
        this.checkDistances();
        this.supr.update.call(this, w, x, y)
    };
    this.domElement.addEventListener("contextmenu", function (w) {
        w.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", g(this, function (w) {
        c && (m = n = this.getMouseProjectionOnBall(w.clientX, w.clientY), p = o = this.getMouseOnScreen(w.clientX, w.clientY), t = u = this.getMouseOnScreen(w.clientX, w.clientY), c = !1);
        f !== this.STATE.NONE && (f === this.STATE.ROTATE ? n = this.getMouseProjectionOnBall(w.clientX, w.clientY) : f === this.STATE.ZOOM && !this.noZoom ? o = this.getMouseOnScreen(w.clientX, w.clientY) : f === this.STATE.PAN && !this.noPan && (u = this.getMouseOnScreen(w.clientX, w.clientY)))
    }), !1);
    this.domElement.addEventListener("mousedown", g(this, function (w) {
        w.preventDefault();
        w.stopPropagation();
        if (f === this.STATE.NONE) {
            f = w.button;
            f === this.STATE.ROTATE ? m = n = this.getMouseProjectionOnBall(w.clientX, w.clientY) : f === this.STATE.ZOOM && !this.noZoom ? p = o = this.getMouseOnScreen(w.clientX, w.clientY) : this.noPan || (t = u = this.getMouseOnScreen(w.clientX, w.clientY))
        }
    }), !1);
    this.domElement.addEventListener("mouseup", g(this, function (w) {
        w.preventDefault();
        w.stopPropagation();
        f = this.STATE.NONE
    }), !1);
    window.addEventListener("keydown", g(this, function (w) {
        if (f === this.STATE.NONE) {
            if (w.keyCode === this.keys[this.STATE.ROTATE])f = this.STATE.ROTATE; else if (w.keyCode === this.keys[this.STATE.ZOOM] && !this.noZoom)f = this.STATE.ZOOM; else if (w.keyCode === this.keys[this.STATE.PAN] && !this.noPan)f = this.STATE.PAN;
            f !== this.STATE.NONE && (c = !0)
        }
    }), !1);
    window.addEventListener("keyup", g(this, function () {
        if (f !== this.STATE.NONE)f = this.STATE.NONE
    }), !1)
};
THREE.TrackballCamera.prototype = new THREE.Camera;
THREE.TrackballCamera.prototype.constructor = THREE.TrackballCamera;
THREE.TrackballCamera.prototype.supr = THREE.Camera.prototype;
THREE.TrackballCamera.prototype.STATE = {NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2};
THREE.Cube = function (b, g, c, f, h, m, n, p, o) {
    function t(B, A, E, C, H, G, I, V) {
        var $, X, P = f || 1, S = h || 1, v = H / 2, O = G / 2, J = u.vertices.length;
        if (B == "x" && A == "y" || B == "y" && A == "x")$ = "z"; else if (B == "x" && A == "z" || B == "z" && A == "x") {
            $ = "y";
            S = m || 1
        } else if (B == "z" && A == "y" || B == "y" && A == "z") {
            $ = "x";
            P = m || 1
        }
        var T = P + 1, K = S + 1;
        H /= P;
        var R = G / S;
        for (X = 0; X < K; X++)for (G = 0; G < T; G++) {
            var aa = new THREE.Vector3;
            aa[B] = (G * H - v) * E;
            aa[A] = (X * R - O) * C;
            aa[$] = I;
            u.vertices.push(new THREE.Vertex(aa))
        }
        for (X = 0; X < S; X++)for (G = 0; G < P; G++) {
            u.faces.push(new THREE.Face4(G + T * X + J, G + T * (X + 1) + J, G + 1 + T * (X + 1) + J, G + 1 + T * X + J, null, null, V));
            u.faceVertexUvs[0].push([new THREE.UV(G / P, X / S), new THREE.UV(G / P, (X + 1) / S), new THREE.UV((G + 1) / P, (X + 1) / S), new THREE.UV((G + 1) / P, X / S)])
        }
    }

    THREE.Geometry.call(this);
    var u = this, w = b / 2, x = g / 2, y = c / 2;
    p = p ? -1 : 1;
    if (n !== void 0)if (n instanceof Array)this.materials = n; else {
        this.materials = [];
        for (var z = 0; z < 6; z++)this.materials.push([n])
    } else this.materials = [];
    this.sides = {px: !0, nx: !0, py: !0, ny: !0, pz: !0, nz: !0};
    if (o != void 0)for (var D in o)this.sides[D] != void 0 && (this.sides[D] = o[D]);
    this.sides.px && t("z", "y", 1 * p, -1, c, g, -w, this.materials[0]);
    this.sides.nx && t("z", "y", -1 * p, -1, c, g, w, this.materials[1]);
    this.sides.py && t("x", "z", 1 * p, 1, b, c, x, this.materials[2]);
    this.sides.ny && t("x", "z", 1 * p, -1, b, c, -x, this.materials[3]);
    this.sides.pz && t("x", "y", 1 * p, -1, b, g, y, this.materials[4]);
    this.sides.nz && t("x", "y", -1 * p, -1, b, g, -y, this.materials[5]);
    (function () {
        for (var B = [], A = [], E = 0, C = u.vertices.length; E < C; E++) {
            for (var H = u.vertices[E], G = !1, I = 0, V = B.length; I < V; I++) {
                var $ = B[I];
                if (H.position.x == $.position.x && H.position.y == $.position.y && H.position.z == $.position.z) {
                    A[E] = I;
                    G = !0;
                    break
                }
            }
            if (!G) {
                A[E] = B.length;
                B.push(new THREE.Vertex(H.position.clone()))
            }
        }
        E = 0;
        for (C = u.faces.length; E < C; E++) {
            H = u.faces[E];
            H.a = A[H.a];
            H.b = A[H.b];
            H.c = A[H.c];
            H.d = A[H.d]
        }
        u.vertices = B
    })();
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.Cube.prototype = new THREE.Geometry;
THREE.Cube.prototype.constructor = THREE.Cube;
THREE.Cylinder = function (b, g, c, f, h, m) {
    function n(x, y, z) {
        p.vertices.push(new THREE.Vertex(new THREE.Vector3(x, y, z)))
    }

    THREE.Geometry.call(this);
    var p = this, o, t = Math.PI * 2, u = f / 2;
    for (o = 0; o < b; o++)n(Math.sin(t * o / b) * g, Math.cos(t * o / b) * g, -u);
    for (o = 0; o < b; o++)n(Math.sin(t * o / b) * c, Math.cos(t * o / b) * c, u);
    for (o = 0; o < b; o++)p.faces.push(new THREE.Face4(o, o + b, b + (o + 1) % b, (o + 1) % b));
    if (c > 0) {
        n(0, 0, -u - (m || 0));
        for (o = b; o < b + b / 2; o++)p.faces.push(new THREE.Face4(2 * b, (2 * o - 2 * b) % b, (2 * o - 2 * b + 1) % b, (2 * o - 2 * b + 2) % b))
    }
    if (g > 0) {
        n(0, 0, u + (h || 0));
        for (o = b + b / 2; o < 2 * b; o++)p.faces.push(new THREE.Face4(2 * b + 1, (2 * o - 2 * b + 2) % b + b, (2 * o - 2 * b + 1) % b + b, (2 * o - 2 * b) % b + b))
    }
    o = 0;
    for (b = this.faces.length; o < b; o++) {
        g = [];
        c = this.faces[o];
        h = this.vertices[c.a];
        m = this.vertices[c.b];
        u = this.vertices[c.c];
        var w = this.vertices[c.d];
        g.push(new THREE.UV(0.5 + Math.atan2(h.position.x, h.position.y) / t, 0.5 + h.position.z / f));
        g.push(new THREE.UV(0.5 + Math.atan2(m.position.x, m.position.y) / t, 0.5 + m.position.z / f));
        g.push(new THREE.UV(0.5 + Math.atan2(u.position.x, u.position.y) / t, 0.5 + u.position.z / f));
        c instanceof THREE.Face4 && g.push(new THREE.UV(0.5 + Math.atan2(w.position.x, w.position.y) / t, 0.5 + w.position.z / f));
        this.faceVertexUvs[0].push(g)
    }
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.Cylinder.prototype = new THREE.Geometry;
THREE.Cylinder.prototype.constructor = THREE.Cylinder;
THREE.Icosahedron = function (b) {
    function g(w, x, y) {
        var z = Math.sqrt(w * w + x * x + y * y);
        return h.vertices.push(new THREE.Vertex(new THREE.Vector3(w / z, x / z, y / z))) - 1
    }

    function c(w, x, y, z) {
        z.faces.push(new THREE.Face3(w, x, y))
    }

    function f(w, x) {
        var y = h.vertices[w].position, z = h.vertices[x].position;
        return g((y.x + z.x) / 2, (y.y + z.y) / 2, (y.z + z.z) / 2)
    }

    var h = this, m = new THREE.Geometry, n;
    this.subdivisions = b || 0;
    THREE.Geometry.call(this);
    b = (1 + Math.sqrt(5)) / 2;
    g(-1, b, 0);
    g(1, b, 0);
    g(-1, -b, 0);
    g(1, -b, 0);
    g(0, -1, b);
    g(0, 1, b);
    g(0, -1, -b);
    g(0, 1, -b);
    g(b, 0, -1);
    g(b, 0, 1);
    g(-b, 0, -1);
    g(-b, 0, 1);
    c(0, 11, 5, m);
    c(0, 5, 1, m);
    c(0, 1, 7, m);
    c(0, 7, 10, m);
    c(0, 10, 11, m);
    c(1, 5, 9, m);
    c(5, 11, 4, m);
    c(11, 10, 2, m);
    c(10, 7, 6, m);
    c(7, 1, 8, m);
    c(3, 9, 4, m);
    c(3, 4, 2, m);
    c(3, 2, 6, m);
    c(3, 6, 8, m);
    c(3, 8, 9, m);
    c(4, 9, 5, m);
    c(2, 4, 11, m);
    c(6, 2, 10, m);
    c(8, 6, 7, m);
    c(9, 8, 1, m);
    for (b = 0; b < this.subdivisions; b++) {
        n = new THREE.Geometry;
        for (var p in m.faces) {
            var o = f(m.faces[p].a, m.faces[p].b), t = f(m.faces[p].b, m.faces[p].c), u = f(m.faces[p].c, m.faces[p].a);
            c(m.faces[p].a, o, u, n);
            c(m.faces[p].b, t, o, n);
            c(m.faces[p].c, u, t, n);
            c(o, t, u, n)
        }
        m.faces = n.faces
    }
    h.faces = m.faces;
    delete m;
    delete n;
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.Icosahedron.prototype = new THREE.Geometry;
THREE.Icosahedron.prototype.constructor = THREE.Icosahedron;
THREE.Lathe = function (b, g, c) {
    THREE.Geometry.call(this);
    this.steps = g || 12;
    this.angle = c || 2 * Math.PI;
    g = this.angle / this.steps;
    c = [];
    for (var f = [], h = [], m = [], n = (new THREE.Matrix4).setRotationZ(g), p = 0; p < b.length; p++) {
        this.vertices.push(new THREE.Vertex(b[p]));
        c[p] = b[p].clone();
        f[p] = this.vertices.length - 1
    }
    for (var o = 0; o <= this.angle + 0.0010; o += g) {
        for (p = 0; p < c.length; p++)o < this.angle ? (c[p] = n.multiplyVector3(c[p].clone()), this.vertices.push(new THREE.Vertex(c[p])), h[p] = this.vertices.length - 1) : h = m;
        o == 0 && (m = f);
        for (p = 0; p < f.length - 1; p++) {
            this.faces.push(new THREE.Face4(h[p], h[p + 1], f[p + 1], f[p]));
            this.faceVertexUvs[0].push([new THREE.UV(1 - o / this.angle, p / b.length), new THREE.UV(1 - o / this.angle, (p + 1) / b.length), new THREE.UV(1 - (o - g) / this.angle, (p + 1) / b.length), new THREE.UV(1 - (o - g) / this.angle, p / b.length)])
        }
        f = h;
        h = []
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.Lathe.prototype = new THREE.Geometry;
THREE.Lathe.prototype.constructor = THREE.Lathe;
THREE.Plane = function (b, g, c, f) {
    THREE.Geometry.call(this);
    var h, m = b / 2, n = g / 2;
    c = c || 1;
    f = f || 1;
    var p = c + 1, o = f + 1;
    b /= c;
    var t = g / f;
    for (h = 0; h < o; h++)for (g = 0; g < p; g++)this.vertices.push(new THREE.Vertex(new THREE.Vector3(g * b - m, -(h * t - n), 0)));
    for (h = 0; h < f; h++)for (g = 0; g < c; g++) {
        this.faces.push(new THREE.Face4(g + p * h, g + p * (h + 1), g + 1 + p * (h + 1), g + 1 + p * h));
        this.faceVertexUvs[0].push([new THREE.UV(g / c, h / f), new THREE.UV(g / c, (h + 1) / f), new THREE.UV((g + 1) / c, (h + 1) / f), new THREE.UV((g + 1) / c, h / f)])
    }
    this.computeCentroids();
    this.computeFaceNormals()
};
THREE.Plane.prototype = new THREE.Geometry;
THREE.Plane.prototype.constructor = THREE.Plane;
THREE.Sphere = function (b, g, c) {
    THREE.Geometry.call(this);
    var f, h = Math.PI, m = Math.max(3, g || 8), n = Math.max(2, c || 6);
    g = [];
    for (c = 0; c < n + 1; c++) {
        f = c / n;
        var p = b * Math.cos(f * h), o = b * Math.sin(f * h), t = [], u = 0;
        for (f = 0; f < m; f++) {
            var w = 2 * f / m, x = o * Math.sin(w * h);
            w = o * Math.cos(w * h);
            (c == 0 || c == n) && f > 0 || (u = this.vertices.push(new THREE.Vertex(new THREE.Vector3(w, p, x))) - 1);
            t.push(u)
        }
        g.push(t)
    }
    var y, z, D;
    h = g.length;
    for (c = 0; c < h; c++)if (m = g[c].length, c > 0)for (f = 0; f < m; f++) {
        t = f == m - 1;
        n = g[c][t ? 0 : f + 1];
        p = g[c][t ? m - 1 : f];
        o = g[c - 1][t ? m - 1 : f];
        t = g[c - 1][t ? 0 : f + 1];
        x = c / (h - 1);
        y = (c - 1) / (h - 1);
        z = (f + 1) / m;
        w = f / m;
        u = new THREE.UV(1 - z, x);
        x = new THREE.UV(1 - w, x);
        w = new THREE.UV(1 - w, y);
        var B = new THREE.UV(1 - z, y);
        c < g.length - 1 && (y = this.vertices[n].position.clone(), z = this.vertices[p].position.clone(), D = this.vertices[o].position.clone(), y.normalize(), z.normalize(), D.normalize(), this.faces.push(new THREE.Face3(n, p, o, [new THREE.Vector3(y.x, y.y, y.z), new THREE.Vector3(z.x, z.y, z.z), new THREE.Vector3(D.x, D.y, D.z)])), this.faceVertexUvs[0].push([u, x, w]));
        c > 1 && (y = this.vertices[n].position.clone(), z = this.vertices[o].position.clone(), D = this.vertices[t].position.clone(), y.normalize(), z.normalize(), D.normalize(), this.faces.push(new THREE.Face3(n, o, t, [new THREE.Vector3(y.x, y.y, y.z), new THREE.Vector3(z.x, z.y, z.z), new THREE.Vector3(D.x, D.y, D.z)])), this.faceVertexUvs[0].push([u, w, B]))
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals();
    this.boundingSphere = {radius: b}
};
THREE.Sphere.prototype = new THREE.Geometry;
THREE.Sphere.prototype.constructor = THREE.Sphere;
THREE.Torus = function (b, g, c, f) {
    THREE.Geometry.call(this);
    this.radius = b || 100;
    this.tube = g || 40;
    this.segmentsR = c || 8;
    this.segmentsT = f || 6;
    b = [];
    for (g = 0; g <= this.segmentsR; ++g)for (c = 0; c <= this.segmentsT; ++c) {
        f = c / this.segmentsT * 2 * Math.PI;
        var h = g / this.segmentsR * 2 * Math.PI;
        this.vertices.push(new THREE.Vertex(new THREE.Vector3((this.radius + this.tube * Math.cos(h)) * Math.cos(f), (this.radius + this.tube * Math.cos(h)) * Math.sin(f), this.tube * Math.sin(h))));
        b.push([c / this.segmentsT, 1 - g / this.segmentsR])
    }
    for (g = 1; g <= this.segmentsR; ++g)for (c = 1; c <= this.segmentsT; ++c) {
        f = (this.segmentsT + 1) * g + c;
        h = (this.segmentsT + 1) * g + c - 1;
        var m = (this.segmentsT + 1) * (g - 1) + c - 1, n = (this.segmentsT + 1) * (g - 1) + c;
        this.faces.push(new THREE.Face4(f, h, m, n));
        this.faceVertexUvs[0].push([new THREE.UV(b[f][0], b[f][1]), new THREE.UV(b[h][0], b[h][1]), new THREE.UV(b[m][0], b[m][1]), new THREE.UV(b[n][0], b[n][1])])
    }
    delete b;
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.Torus.prototype = new THREE.Geometry;
THREE.Torus.prototype.constructor = THREE.Torus;
THREE.TorusKnot = function (b, g, c, f, h, m, n) {
    function p(w, x, y, z, D, B) {
        x = y / z * w;
        y = Math.cos(x);
        return new THREE.Vector3(D * (2 + y) * 0.5 * Math.cos(w), D * (2 + y) * Math.sin(w) * 0.5, B * D * Math.sin(x) * 0.5)
    }

    THREE.Geometry.call(this);
    this.radius = b || 200;
    this.tube = g || 40;
    this.segmentsR = c || 64;
    this.segmentsT = f || 8;
    this.p = h || 2;
    this.q = m || 3;
    this.heightScale = n || 1;
    this.grid = Array(this.segmentsR);
    c = new THREE.Vector3;
    f = new THREE.Vector3;
    m = new THREE.Vector3;
    for (b = 0; b < this.segmentsR; ++b) {
        this.grid[b] = Array(this.segmentsT);
        for (g = 0; g < this.segmentsT; ++g) {
            var o = b / this.segmentsR * 2 * this.p * Math.PI;
            n = g / this.segmentsT * 2 * Math.PI;
            h = p(o, n, this.q, this.p, this.radius, this.heightScale);
            o = p(o + 0.01, n, this.q, this.p, this.radius, this.heightScale);
            c.x = o.x - h.x;
            c.y = o.y - h.y;
            c.z = o.z - h.z;
            f.x = o.x + h.x;
            f.y = o.y + h.y;
            f.z = o.z + h.z;
            m.cross(c, f);
            f.cross(m, c);
            m.normalize();
            f.normalize();
            o = -this.tube * Math.cos(n);
            n = this.tube * Math.sin(n);
            h.x += o * f.x + n * m.x;
            h.y += o * f.y + n * m.y;
            h.z += o * f.z + n * m.z;
            this.grid[b][g] = this.vertices.push(new THREE.Vertex(new THREE.Vector3(h.x, h.y, h.z))) - 1
        }
    }
    for (b = 0; b < this.segmentsR; ++b)for (g = 0; g < this.segmentsT; ++g) {
        f = (b + 1) % this.segmentsR;
        m = (g + 1) % this.segmentsT;
        h = this.grid[b][g];
        c = this.grid[f][g];
        f = this.grid[f][m];
        m = this.grid[b][m];
        n = new THREE.UV(b / this.segmentsR, g / this.segmentsT);
        o = new THREE.UV((b + 1) / this.segmentsR, g / this.segmentsT);
        var t = new THREE.UV((b + 1) / this.segmentsR, (g + 1) / this.segmentsT), u = new THREE.UV(b / this.segmentsR, (g + 1) / this.segmentsT);
        this.faces.push(new THREE.Face4(h, c, f, m));
        this.faceVertexUvs[0].push([n, o, t, u])
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
THREE.TorusKnot.prototype = new THREE.Geometry;
THREE.TorusKnot.prototype.constructor = THREE.TorusKnot;
THREE.Loader = function (b) {
    this.statusDomElement = (this.showStatus = b) ? THREE.Loader.prototype.addStatusElement() : null;
    this.onLoadStart = function () {
    };
    this.onLoadProgress = function () {
    };
    this.onLoadComplete = function () {
    }
};
THREE.Loader.prototype = {addStatusElement: function () {
    var b = document.createElement("div");
    b.style.position = "absolute";
    b.style.right = "0px";
    b.style.top = "0px";
    b.style.fontSize = "0.8em";
    b.style.textAlign = "left";
    b.style.background = "rgba(0,0,0,0.25)";
    b.style.color = "#fff";
    b.style.width = "120px";
    b.style.padding = "0.5em 0.5em 0.5em 0.5em";
    b.style.zIndex = 1E3;
    b.innerHTML = "Loading ...";
    return b
}, updateProgress: function (b) {
    var g = "Loaded ";
    g += b.total ? (100 * b.loaded / b.total).toFixed(0) + "%" : (b.loaded / 1E3).toFixed(2) + " KB";
    this.statusDomElement.innerHTML = g
}, extractUrlbase: function (b) {
    b = b.split("/");
    b.pop();
    return b.join("/")
}, init_materials: function (b, g, c) {
    b.materials = [];
    for (var f = 0; f < g.length; ++f)b.materials[f] = [THREE.Loader.prototype.createMaterial(g[f], c)]
}, createMaterial: function (b, g) {
    function c(p) {
        p = Math.log(p) / Math.LN2;
        return Math.floor(p) == p
    }

    function f(p, o) {
        var t = new Image;
        t.onload = function () {
            if (!c(this.width) || !c(this.height)) {
                var u = Math.pow(2, Math.round(Math.log(this.width) / Math.LN2)), w = Math.pow(2, Math.round(Math.log(this.height) / Math.LN2));
                p.image.width = u;
                p.image.height = w;
                p.image.getContext("2d").drawImage(this, 0, 0, u, w)
            } else p.image = this;
            p.needsUpdate = !0
        };
        t.src = o
    }

    var h, m, n;
    h = "MeshLambertMaterial";
    m = {color: 15658734, opacity: 1, map: null, lightMap: null, wireframe: b.wireframe};
    b.shading && (b.shading == "Phong" ? h = "MeshPhongMaterial" : b.shading == "Basic" && (h = "MeshBasicMaterial"));
    if (b.blending)if (b.blending == "Additive")m.blending = THREE.AdditiveBlending; else if (b.blending == "Subtractive")m.blending = THREE.SubtractiveBlending; else if (b.blending == "Multiply")m.blending = THREE.MultiplyBlending;
    if (b.transparent !== void 0 || b.opacity < 1)m.transparent = b.transparent;
    if (b.depthTest !== void 0)m.depthTest = b.depthTest;
    if (b.vertexColors !== void 0)if (b.vertexColors == "face")m.vertexColors = THREE.FaceColors; else if (b.vertexColors)m.vertexColors = THREE.VertexColors;
    if (b.mapDiffuse && g) {
        n = document.createElement("canvas");
        m.map = new THREE.Texture(n);
        m.map.sourceFile = b.mapDiffuse;
        f(m.map, g + "/" + b.mapDiffuse)
    } else if (b.colorDiffuse) {
        n = (b.colorDiffuse[0] * 255 << 16) + (b.colorDiffuse[1] * 255 << 8) + b.colorDiffuse[2] * 255;
        m.color = n;
        m.opacity = b.transparency
    } else if (b.DbgColor)m.color = b.DbgColor;
    if (b.mapLightmap && g) {
        n = document.createElement("canvas");
        m.lightMap = new THREE.Texture(n);
        m.lightMap.sourceFile = b.mapLightmap;
        f(m.lightMap, g + "/" + b.mapLightmap)
    }
    return new THREE[h](m)
}};
THREE.JSONLoader = function (b) {
    THREE.Loader.call(this, b)
};
THREE.JSONLoader.prototype = new THREE.Loader;
THREE.JSONLoader.prototype.constructor = THREE.JSONLoader;
THREE.JSONLoader.prototype.supr = THREE.Loader.prototype;
THREE.JSONLoader.prototype.load = function (b) {
    var g = this, c = b.model, f = b.callback, h = b.texture_path ? b.texture_path : this.extractUrlbase(c);
    b = new Worker(c);
    b.onmessage = function (m) {
        g.createModel(m.data, f, h);
        g.onLoadComplete()
    };
    this.onLoadStart();
    b.postMessage((new Date).getTime())
};
THREE.JSONLoader.prototype.createModel = function (b, g, c) {
    var f = new THREE.Geometry, h = b.scale !== void 0 ? 1 / b.scale : 1;
    this.init_materials(f, b.materials, c);
    (function (m) {
        if (b.version === void 0 || b.version != 2)console.error("Deprecated file format."); else {
            var n, p, o, t, u, w, x, y, z, D, B, A, E, C, H = b.faces;
            w = b.vertices;
            var G = b.normals, I = b.colors, V = 0;
            for (n = 0; n < b.uvs.length; n++)b.uvs[n].length && V++;
            for (n = 0; n < V; n++) {
                f.faceUvs[n] = [];
                f.faceVertexUvs[n] = []
            }
            t = 0;
            for (u = w.length; t < u;) {
                x = new THREE.Vertex;
                x.position.x = w[t++] * m;
                x.position.y = w[t++] * m;
                x.position.z = w[t++] * m;
                f.vertices.push(x)
            }
            t = 0;
            for (u = H.length; t < u;) {
                m = H[t++];
                w = m & 1;
                o = m & 2;
                n = m & 4;
                p = m & 8;
                y = m & 16;
                x = m & 32;
                D = m & 64;
                m &= 128;
                w ? (B = new THREE.Face4, B.a = H[t++], B.b = H[t++], B.c = H[t++], B.d = H[t++], w = 4) : (B = new THREE.Face3, B.a = H[t++], B.b = H[t++], B.c = H[t++], w = 3);
                if (o) {
                    o = H[t++];
                    B.materials = f.materials[o]
                }
                o = f.faces.length;
                if (n)for (n = 0; n < V; n++) {
                    A = b.uvs[n];
                    z = H[t++];
                    C = A[z * 2];
                    z = A[z * 2 + 1];
                    f.faceUvs[n][o] = new THREE.UV(C, z)
                }
                if (p)for (n = 0; n < V; n++) {
                    A = b.uvs[n];
                    E = [];
                    for (p = 0; p < w; p++) {
                        z = H[t++];
                        C = A[z * 2];
                        z = A[z * 2 + 1];
                        E[p] = new THREE.UV(C, z)
                    }
                    f.faceVertexUvs[n][o] = E
                }
                if (y) {
                    y = H[t++] * 3;
                    p = new THREE.Vector3;
                    p.x = G[y++];
                    p.y = G[y++];
                    p.z = G[y];
                    B.normal = p
                }
                if (x)for (n = 0; n < w; n++) {
                    y = H[t++] * 3;
                    p = new THREE.Vector3;
                    p.x = G[y++];
                    p.y = G[y++];
                    p.z = G[y];
                    B.vertexNormals.push(p)
                }
                if (D) {
                    x = H[t++];
                    x = new THREE.Color(I[x]);
                    B.color = x
                }
                if (m)for (n = 0; n < w; n++) {
                    x = H[t++];
                    x = new THREE.Color(I[x]);
                    B.vertexColors.push(x)
                }
                f.faces.push(B)
            }
        }
    })(h);
    (function () {
        var m, n, p, o;
        if (b.skinWeights) {
            m = 0;
            for (n = b.skinWeights.length; m < n; m += 2) {
                p = b.skinWeights[m];
                o = b.skinWeights[m + 1];
                f.skinWeights.push(new THREE.Vector4(p, o, 0, 0))
            }
        }
        if (b.skinIndices) {
            m = 0;
            for (n = b.skinIndices.length; m < n; m += 2) {
                p = b.skinIndices[m];
                o = b.skinIndices[m + 1];
                f.skinIndices.push(new THREE.Vector4(p, o, 0, 0))
            }
        }
        f.bones = b.bones;
        f.animation = b.animation
    })();
    (function (m) {
        if (b.morphTargets !== void 0) {
            var n, p, o, t, u, w, x, y, z;
            n = 0;
            for (p = b.morphTargets.length; n < p; n++) {
                f.morphTargets[n] = {};
                f.morphTargets[n].name = b.morphTargets[n].name;
                f.morphTargets[n].vertices = [];
                y = f.morphTargets[n].vertices;
                z = b.morphTargets[n].vertices;
                o = 0;
                for (t = z.length; o < t; o += 3) {
                    u = z[o] * m;
                    w = z[o + 1] * m;
                    x = z[o + 2] * m;
                    y.push(new THREE.Vertex(new THREE.Vector3(u, w, x)))
                }
            }
        }
        if (b.morphColors !== void 0) {
            n = 0;
            for (p = b.morphColors.length; n < p; n++) {
                f.morphColors[n] = {};
                f.morphColors[n].name = b.morphColors[n].name;
                f.morphColors[n].colors = [];
                t = f.morphColors[n].colors;
                u = b.morphColors[n].colors;
                m = 0;
                for (o = u.length; m < o; m += 3) {
                    w = new THREE.Color(16755200);
                    w.setRGB(u[m], u[m + 1], u[m + 2]);
                    t.push(w)
                }
            }
        }
    })(h);
    (function () {
        if (b.edges !== void 0) {
            var m, n, p;
            for (m = 0; m < b.edges.length; m += 2) {
                n = b.edges[m];
                p = b.edges[m + 1];
                f.edges.push(new THREE.Edge(f.vertices[n], f.vertices[p], n, p))
            }
        }
    })();
    f.computeCentroids();
    f.computeFaceNormals();
    g(f)
};
THREE.BinaryLoader = function (b) {
    THREE.Loader.call(this, b)
};
THREE.BinaryLoader.prototype = new THREE.Loader;
THREE.BinaryLoader.prototype.constructor = THREE.BinaryLoader;
THREE.BinaryLoader.prototype.supr = THREE.Loader.prototype;
THREE.BinaryLoader.prototype = {load: function (b) {
    var g = b.model, c = b.callback, f = b.texture_path ? b.texture_path : THREE.Loader.prototype.extractUrlbase(g), h = b.bin_path ? b.bin_path : THREE.Loader.prototype.extractUrlbase(g);
    b = (new Date).getTime();
    g = new Worker(g);
    var m = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
    g.onmessage = function (n) {
        THREE.BinaryLoader.prototype.loadAjaxBuffers(n.data.buffers, n.data.materials, c, h, f, m)
    };
    g.onerror = function (n) {
        alert("worker.onerror: " + n.message + "\n" + n.data);
        n.preventDefault()
    };
    g.postMessage(b)
}, loadAjaxBuffers: function (b, g, c, f, h, m) {
    var n = new XMLHttpRequest, p = f + "/" + b, o = 0;
    n.onreadystatechange = function () {
        n.readyState == 4 ? n.status == 200 || n.status == 0 ? THREE.BinaryLoader.prototype.createBinModel(n.responseText, c, h, g) : alert("Couldn't load [" + p + "] [" + n.status + "]") : n.readyState == 3 ? m && (o == 0 && (o = n.getResponseHeader("Content-Length")), m({total: o, loaded: n.responseText.length})) : n.readyState == 2 && (o = n.getResponseHeader("Content-Length"))
    };
    n.open("GET", p, !0);
    n.overrideMimeType("text/plain; charset=x-user-defined");
    n.setRequestHeader("Content-Type", "text/plain");
    n.send(null)
}, createBinModel: function (b, g, c, f) {
    var h = function (m) {
        function n(da, ja) {
            var pa = u(da, ja), va = u(da, ja + 1), Fa = u(da, ja + 2), $a = u(da, ja + 3), fb = ($a << 1 & 255 | Fa >> 7) - 127;
            pa |= (Fa & 127) << 16 | va << 8;
            if (pa == 0 && fb == -127)return 0;
            return(1 - 2 * ($a >> 7)) * (1 + pa * Math.pow(2, -23)) * Math.pow(2, fb)
        }

        function p(da, ja) {
            var pa = u(da, ja), va = u(da, ja + 1), Fa = u(da, ja + 2);
            return(u(da, ja + 3) << 24) + (Fa << 16) + (va << 8) + pa
        }

        function o(da, ja) {
            var pa = u(da, ja);
            return(u(da, ja + 1) << 8) + pa
        }

        function t(da, ja) {
            var pa = u(da, ja);
            return pa > 127 ? pa - 256 : pa
        }

        function u(da, ja) {
            return da.charCodeAt(ja) & 255
        }

        function w(da) {
            var ja, pa, va;
            ja = p(b, da);
            pa = p(b, da + I);
            va = p(b, da + V);
            da = o(b, da + $);
            THREE.BinaryLoader.prototype.f3(A, ja, pa, va, da)
        }

        function x(da) {
            var ja, pa, va, Fa, $a, fb;
            ja = p(b, da);
            pa = p(b, da + I);
            va = p(b, da + V);
            Fa = o(b, da + $);
            $a = p(b, da + X);
            fb = p(b, da + P);
            da = p(b, da + S);
            THREE.BinaryLoader.prototype.f3n(A, H, ja, pa, va, Fa, $a, fb, da)
        }

        function y(da) {
            var ja, pa, va, Fa;
            ja = p(b, da);
            pa = p(b, da + v);
            va = p(b, da + O);
            Fa = p(b, da + J);
            da = o(b, da + T);
            THREE.BinaryLoader.prototype.f4(A, ja, pa, va, Fa, da)
        }

        function z(da) {
            var ja, pa, va, Fa, $a, fb, wa, ta;
            ja = p(b, da);
            pa = p(b, da + v);
            va = p(b, da + O);
            Fa = p(b, da + J);
            $a = o(b, da + T);
            fb = p(b, da + K);
            wa = p(b, da + R);
            ta = p(b, da + aa);
            da = p(b, da + W);
            THREE.BinaryLoader.prototype.f4n(A, H, ja, pa, va, Fa, $a, fb, wa, ta, da)
        }

        function D(da) {
            var ja, pa;
            ja = p(b, da);
            pa = p(b, da + ea);
            da = p(b, da + ma);
            THREE.BinaryLoader.prototype.uv3(A.faceVertexUvs[0], G[ja * 2], G[ja * 2 + 1], G[pa * 2], G[pa * 2 + 1], G[da * 2], G[da * 2 + 1])
        }

        function B(da) {
            var ja, pa, va;
            ja = p(b, da);
            pa = p(b, da + oa);
            va = p(b, da + ya);
            da = p(b, da + za);
            THREE.BinaryLoader.prototype.uv4(A.faceVertexUvs[0], G[ja * 2], G[ja * 2 + 1], G[pa * 2], G[pa * 2 + 1], G[va * 2], G[va * 2 + 1], G[da * 2], G[da * 2 + 1])
        }

        var A = this, E = 0, C, H = [], G = [], I, V, $, X, P, S, v, O, J, T, K, R, aa, W, ea, ma, oa, ya, za, qa, Ga, Da, Ha, Ia, xa;
        THREE.Geometry.call(this);
        THREE.Loader.prototype.init_materials(A, f, m);
        C = {signature: b.substr(E, 8), header_bytes: u(b, E + 8), vertex_coordinate_bytes: u(b, E + 9), normal_coordinate_bytes: u(b, E + 10), uv_coordinate_bytes: u(b, E + 11), vertex_index_bytes: u(b, E + 12), normal_index_bytes: u(b, E + 13), uv_index_bytes: u(b, E + 14), material_index_bytes: u(b, E + 15), nvertices: p(b, E + 16), nnormals: p(b, E + 16 + 4), nuvs: p(b, E + 16 + 8), ntri_flat: p(b, E + 16 + 12), ntri_smooth: p(b, E + 16 + 16), ntri_flat_uv: p(b, E + 16 + 20), ntri_smooth_uv: p(b, E + 16 + 24), nquad_flat: p(b, E + 16 + 28), nquad_smooth: p(b, E + 16 + 32), nquad_flat_uv: p(b, E + 16 + 36), nquad_smooth_uv: p(b, E + 16 + 40)};
        E += C.header_bytes;
        I = C.vertex_index_bytes;
        V = C.vertex_index_bytes * 2;
        $ = C.vertex_index_bytes * 3;
        X = C.vertex_index_bytes * 3 + C.material_index_bytes;
        P = C.vertex_index_bytes * 3 + C.material_index_bytes + C.normal_index_bytes;
        S = C.vertex_index_bytes * 3 + C.material_index_bytes + C.normal_index_bytes * 2;
        v = C.vertex_index_bytes;
        O = C.vertex_index_bytes * 2;
        J = C.vertex_index_bytes * 3;
        T = C.vertex_index_bytes * 4;
        K = C.vertex_index_bytes * 4 + C.material_index_bytes;
        R = C.vertex_index_bytes * 4 + C.material_index_bytes + C.normal_index_bytes;
        aa = C.vertex_index_bytes * 4 + C.material_index_bytes + C.normal_index_bytes * 2;
        W = C.vertex_index_bytes * 4 + C.material_index_bytes + C.normal_index_bytes * 3;
        ea = C.uv_index_bytes;
        ma = C.uv_index_bytes * 2;
        oa = C.uv_index_bytes;
        ya = C.uv_index_bytes * 2;
        za = C.uv_index_bytes * 3;
        m = C.vertex_index_bytes * 3 + C.material_index_bytes;
        xa = C.vertex_index_bytes * 4 + C.material_index_bytes;
        qa = C.ntri_flat * m;
        Ga = C.ntri_smooth * (m + C.normal_index_bytes * 3);
        Da = C.ntri_flat_uv * (m + C.uv_index_bytes * 3);
        Ha = C.ntri_smooth_uv * (m + C.normal_index_bytes * 3 + C.uv_index_bytes * 3);
        Ia = C.nquad_flat * xa;
        m = C.nquad_smooth * (xa + C.normal_index_bytes * 4);
        xa = C.nquad_flat_uv * (xa + C.uv_index_bytes * 4);
        E += function (da) {
            for (var ja, pa, va, Fa = C.vertex_coordinate_bytes * 3, $a = da + C.nvertices * Fa; da < $a; da += Fa) {
                ja = n(b, da);
                pa = n(b, da + C.vertex_coordinate_bytes);
                va = n(b, da + C.vertex_coordinate_bytes * 2);
                THREE.BinaryLoader.prototype.v(A, ja, pa, va)
            }
            return C.nvertices * Fa
        }(E);
        E += function (da) {
            for (var ja, pa, va, Fa = C.normal_coordinate_bytes * 3, $a = da + C.nnormals * Fa; da < $a; da += Fa) {
                ja = t(b, da);
                pa = t(b, da + C.normal_coordinate_bytes);
                va = t(b, da + C.normal_coordinate_bytes * 2);
                H.push(ja / 127, pa / 127, va / 127)
            }
            return C.nnormals * Fa
        }(E);
        E += function (da) {
            for (var ja, pa, va = C.uv_coordinate_bytes * 2, Fa = da + C.nuvs * va; da < Fa; da += va) {
                ja = n(b, da);
                pa = n(b, da + C.uv_coordinate_bytes);
                G.push(ja, pa)
            }
            return C.nuvs * va
        }(E);
        qa = E + qa;
        Ga = qa + Ga;
        Da = Ga + Da;
        Ha = Da + Ha;
        Ia = Ha + Ia;
        m = Ia + m;
        xa = m + xa;
        (function (da) {
            var ja, pa = C.vertex_index_bytes * 3 + C.material_index_bytes, va = pa + C.uv_index_bytes * 3, Fa = da + C.ntri_flat_uv * va;
            for (ja = da; ja < Fa; ja += va) {
                w(ja);
                D(ja + pa)
            }
            return Fa - da
        })(Ga);
        (function (da) {
            var ja, pa = C.vertex_index_bytes * 3 + C.material_index_bytes + C.normal_index_bytes * 3, va = pa + C.uv_index_bytes * 3, Fa = da + C.ntri_smooth_uv * va;
            for (ja = da; ja < Fa; ja += va) {
                x(ja);
                D(ja + pa)
            }
            return Fa - da
        })(Da);
        (function (da) {
            var ja, pa = C.vertex_index_bytes * 4 + C.material_index_bytes, va = pa + C.uv_index_bytes * 4, Fa = da + C.nquad_flat_uv * va;
            for (ja = da; ja < Fa; ja += va) {
                y(ja);
                B(ja + pa)
            }
            return Fa - da
        })(m);
        (function (da) {
            var ja, pa = C.vertex_index_bytes * 4 + C.material_index_bytes + C.normal_index_bytes * 4, va = pa + C.uv_index_bytes * 4, Fa = da + C.nquad_smooth_uv * va;
            for (ja = da; ja < Fa; ja += va) {
                z(ja);
                B(ja + pa)
            }
            return Fa - da
        })(xa);
        (function (da) {
            var ja, pa = C.vertex_index_bytes * 3 + C.material_index_bytes, va = da + C.ntri_flat * pa;
            for (ja = da; ja < va; ja += pa)w(ja);
            return va - da
        })(E);
        (function (da) {
            var ja, pa = C.vertex_index_bytes * 3 + C.material_index_bytes + C.normal_index_bytes * 3, va = da + C.ntri_smooth * pa;
            for (ja = da; ja < va; ja += pa)x(ja);
            return va - da
        })(qa);
        (function (da) {
            var ja, pa = C.vertex_index_bytes * 4 + C.material_index_bytes, va = da + C.nquad_flat * pa;
            for (ja = da; ja < va; ja += pa)y(ja);
            return va - da
        })(Ha);
        (function (da) {
            var ja, pa = C.vertex_index_bytes * 4 + C.material_index_bytes + C.normal_index_bytes * 4, va = da + C.nquad_smooth * pa;
            for (ja = da; ja < va; ja += pa)z(ja);
            return va - da
        })(Ia);
        this.computeCentroids();
        this.computeFaceNormals()
    };
    h.prototype = new THREE.Geometry;
    h.prototype.constructor = h;
    g(new h(c))
}, v: function (b, g, c, f) {
    b.vertices.push(new THREE.Vertex(new THREE.Vector3(g, c, f)))
}, f3: function (b, g, c, f, h) {
    b.faces.push(new THREE.Face3(g, c, f, null, null, b.materials[h]))
}, f4: function (b, g, c, f, h, m) {
    b.faces.push(new THREE.Face4(g, c, f, h, null, null, b.materials[m]))
}, f3n: function (b, g, c, f, h, m, n, p, o) {
    m = b.materials[m];
    var t = g[p * 3], u = g[p * 3 + 1];
    p = g[p * 3 + 2];
    var w = g[o * 3], x = g[o * 3 + 1];
    o = g[o * 3 + 2];
    b.faces.push(new THREE.Face3(c, f, h, [new THREE.Vector3(g[n * 3], g[n * 3 + 1], g[n * 3 + 2]), new THREE.Vector3(t, u, p), new THREE.Vector3(w, x, o)], null, m))
}, f4n: function (b, g, c, f, h, m, n, p, o, t, u) {
    n = b.materials[n];
    var w = g[o * 3], x = g[o * 3 + 1];
    o = g[o * 3 + 2];
    var y = g[t * 3], z = g[t * 3 + 1];
    t = g[t * 3 + 2];
    var D = g[u * 3], B = g[u * 3 + 1];
    u = g[u * 3 + 2];
    b.faces.push(new THREE.Face4(c, f, h, m, [new THREE.Vector3(g[p * 3], g[p * 3 + 1], g[p * 3 + 2]), new THREE.Vector3(w, x, o), new THREE.Vector3(y, z, t), new THREE.Vector3(D, B, u)], null, n))
}, uv3: function (b, g, c, f, h, m, n) {
    var p = [];
    p.push(new THREE.UV(g, c));
    p.push(new THREE.UV(f, h));
    p.push(new THREE.UV(m, n));
    b.push(p)
}, uv4: function (b, g, c, f, h, m, n, p, o) {
    var t = [];
    t.push(new THREE.UV(g, c));
    t.push(new THREE.UV(f, h));
    t.push(new THREE.UV(m, n));
    t.push(new THREE.UV(p, o));
    b.push(t)
}};
THREE.SceneLoader = function () {
    this.onLoadStart = function () {
    };
    this.onLoadProgress = function () {
    };
    this.onLoadComplete = function () {
    };
    this.callbackSync = function () {
    };
    this.callbackProgress = function () {
    }
};
THREE.SceneLoader.prototype = {load: function (b, g) {
    var c = this, f = new Worker(b);
    f.postMessage(0);
    var h = THREE.Loader.prototype.extractUrlbase(b);
    f.onmessage = function (m) {
        function n(ea, ma) {
            return ma == "relativeToHTML" ? ea : h + "/" + ea
        }

        function p() {
            for (y in P.objects)if (!K.objects[y])if (E = P.objects[y], E.geometry !== void 0) {
                if (I = K.geometries[E.geometry]) {
                    X = [];
                    for (W = 0; W < E.materials.length; W++)X[W] = K.materials[E.materials[W]];
                    C = E.position;
                    r = E.rotation;
                    q = E.quaternion;
                    s = E.scale;
                    q = 0;
                    X.length == 0 && (X[0] = new THREE.MeshFaceMaterial);
                    X.length > 1 && (X = [new THREE.MeshFaceMaterial]);
                    object = new THREE.Mesh(I, X);
                    object.name = y;
                    object.position.set(C[0], C[1], C[2]);
                    q ? (object.quaternion.set(q[0], q[1], q[2], q[3]), object.useQuaternion = !0) : object.rotation.set(r[0], r[1], r[2]);
                    object.scale.set(s[0], s[1], s[2]);
                    object.visible = E.visible;
                    K.scene.addObject(object);
                    K.objects[y] = object;
                    if (E.meshCollider) {
                        var ea = THREE.CollisionUtils.MeshColliderWBox(object);
                        K.scene.collisions.colliders.push(ea)
                    }
                    if (E.castsShadow) {
                        ea = new THREE.ShadowVolume(I);
                        K.scene.addChild(ea);
                        ea.position = object.position;
                        ea.rotation = object.rotation;
                        ea.scale = object.scale
                    }
                    E.trigger && E.trigger.toLowerCase() != "none" && (ea = {type: E.trigger, object: E}, K.triggers[object.name] = ea)
                }
            } else {
                C = E.position;
                r = E.rotation;
                q = E.quaternion;
                s = E.scale;
                q = 0;
                object = new THREE.Object3D;
                object.name = y;
                object.position.set(C[0], C[1], C[2]);
                q ? (object.quaternion.set(q[0], q[1], q[2], q[3]), object.useQuaternion = !0) : object.rotation.set(r[0], r[1], r[2]);
                object.scale.set(s[0], s[1], s[2]);
                object.visible = E.visible !== void 0 ? E.visible : !1;
                K.scene.addObject(object);
                K.objects[y] = object;
                K.empties[y] = object;
                E.trigger && E.trigger.toLowerCase() != "none" && (ea = {type: E.trigger, object: E}, K.triggers[object.name] = ea)
            }
        }

        function o(ea) {
            return function (ma) {
                K.geometries[ea] = ma;
                p();
                v -= 1;
                c.onLoadComplete();
                u()
            }
        }

        function t(ea) {
            return function (ma) {
                K.geometries[ea] = ma
            }
        }

        function u() {
            c.callbackProgress({totalModels: J, totalTextures: T, loadedModels: J - v, loadedTextures: T - O}, K);
            c.onLoadProgress();
            v == 0 && O == 0 && g(K)
        }

        var w, x, y, z, D, B, A, E, C, H, G, I, V, $, X, P, S, v, O, J, T, K;
        P = m.data;
        m = new THREE.BinaryLoader;
        S = new THREE.JSONLoader;
        O = v = 0;
        K = {scene: new THREE.Scene, geometries: {}, materials: {}, textures: {}, objects: {}, cameras: {}, lights: {}, fogs: {}, triggers: {}, empties: {}};
        var R = !1;
        for (y in P.objects)if (E = P.objects[y], E.meshCollider) {
            R = !0;
            break
        }
        if (R)K.scene.collisions = new THREE.CollisionSystem;
        if (P.transform) {
            R = P.transform.position;
            H = P.transform.rotation;
            var aa = P.transform.scale;
            R && K.scene.position.set(R[0], R[1], R[2]);
            H && K.scene.rotation.set(H[0], H[1], H[2]);
            aa && K.scene.scale.set(aa[0], aa[1], aa[2]);
            (R || H || aa) && K.scene.updateMatrix()
        }
        R = function () {
            O -= 1;
            u();
            c.onLoadComplete()
        };
        for (D in P.cameras) {
            H = P.cameras[D];
            if (H.type == "perspective")V = new THREE.Camera(H.fov, H.aspect, H.near, H.far); else if (H.type == "ortho") {
                V = new THREE.Camera;
                V.projectionMatrix = THREE.Matrix4.makeOrtho(H.left, H.right, H.top, H.bottom, H.near, H.far)
            }
            C = H.position;
            H = H.target;
            V.position.set(C[0], C[1], C[2]);
            V.target.position.set(H[0], H[1], H[2]);
            K.cameras[D] = V
        }
        for (z in P.lights) {
            D = P.lights[z];
            V = D.color !== void 0 ? D.color : 16777215;
            H = D.intensity !== void 0 ? D.intensity : 1;
            if (D.type == "directional") {
                C = D.direction;
                light = new THREE.DirectionalLight(V, H);
                light.position.set(C[0], C[1], C[2]);
                light.position.normalize()
            } else if (D.type == "point") {
                C = D.position;
                light = new THREE.PointLight(V, H);
                light.position.set(C[0], C[1], C[2])
            }
            K.scene.addLight(light);
            K.lights[z] = light
        }
        for (B in P.fogs) {
            z = P.fogs[B];
            z.type == "linear" ? $ = new THREE.Fog(0, z.near, z.far) : z.type == "exp2" && ($ = new THREE.FogExp2(0, z.density));
            H = z.color;
            $.color.setRGB(H[0], H[1], H[2]);
            K.fogs[B] = $
        }
        if (K.cameras && P.defaults.camera)K.currentCamera = K.cameras[P.defaults.camera];
        if (K.fogs && P.defaults.fog)K.scene.fog = K.fogs[P.defaults.fog];
        H = P.defaults.bgcolor;
        K.bgColor = new THREE.Color;
        K.bgColor.setRGB(H[0], H[1], H[2]);
        K.bgColorAlpha = P.defaults.bgalpha;
        for (w in P.geometries)if (B = P.geometries[w], B.type == "bin_mesh" || B.type == "ascii_mesh") {
            v += 1;
            c.onLoadStart()
        }
        J = v;
        for (w in P.geometries) {
            B = P.geometries[w];
            B.type == "cube" ? (I = new THREE.Cube(B.width, B.height, B.depth, B.segmentsWidth, B.segmentsHeight, B.segmentsDepth, null, B.flipped, B.sides), K.geometries[w] = I) : B.type == "plane" ? (I = new THREE.Plane(B.width, B.height, B.segmentsWidth, B.segmentsHeight), K.geometries[w] = I) : B.type == "sphere" ? (I = new THREE.Sphere(B.radius, B.segmentsWidth, B.segmentsHeight), K.geometries[w] = I) : B.type == "cylinder" ? (I = new THREE.Cylinder(B.numSegs, B.topRad, B.botRad, B.height, B.topOffset, B.botOffset), K.geometries[w] = I) : B.type == "torus" ? (I = new THREE.Torus(B.radius, B.tube, B.segmentsR, B.segmentsT), K.geometries[w] = I) : B.type == "icosahedron" ? (I = new THREE.Icosahedron(B.subdivisions), K.geometries[w] = I) : B.type == "bin_mesh" ? m.load({model: n(B.url, P.urlBaseType), callback: o(w)}) : B.type == "ascii_mesh" ? S.load({model: n(B.url, P.urlBaseType), callback: o(w)}) : B.type == "embedded_mesh" && (B = P.embeds[B.id]) && S.createModel(B, t(w), "")
        }
        for (A in P.textures)if (w = P.textures[A], w.url instanceof Array) {
            O += w.url.length;
            for (m = 0; m < w.url.length; m++)c.onLoadStart()
        } else {
            O += 1;
            c.onLoadStart()
        }
        T = O;
        for (A in P.textures) {
            w = P.textures[A];
            if (w.mapping != void 0 && THREE[w.mapping] != void 0)w.mapping = new THREE[w.mapping];
            if (w.url instanceof Array) {
                m = [];
                for (var W = 0; W < w.url.length; W++)m[W] = n(w.url[W], P.urlBaseType);
                m = THREE.ImageUtils.loadTextureCube(m, w.mapping, R)
            } else {
                m = THREE.ImageUtils.loadTexture(n(w.url, P.urlBaseType), w.mapping, R);
                if (THREE[w.minFilter] != void 0)m.minFilter = THREE[w.minFilter];
                if (THREE[w.magFilter] != void 0)m.magFilter = THREE[w.magFilter]
            }
            K.textures[A] = m
        }
        for (x in P.materials) {
            A = P.materials[x];
            for (G in A.parameters)if (G == "envMap" || G == "map" || G == "lightMap")A.parameters[G] = K.textures[A.parameters[G]]; else if (G == "shading")A.parameters[G] = A.parameters[G] == "flat" ? THREE.FlatShading : THREE.SmoothShading; else if (G == "blending")A.parameters[G] = THREE[A.parameters[G]] ? THREE[A.parameters[G]] : THREE.NormalBlending; else if (G == "combine")A.parameters[G] = A.parameters[G] == "MixOperation" ? THREE.MixOperation : THREE.MultiplyOperation; else if (G == "vertexColors")if (A.parameters[G] == "face")A.parameters[G] = THREE.FaceColors; else if (A.parameters[G])A.parameters[G] = THREE.VertexColors;
            if (A.parameters.opacity !== void 0 && A.parameters.opacity < 1)A.parameters.transparent = !0;
            A = new THREE[A.type](A.parameters);
            K.materials[x] = A
        }
        p();
        c.callbackSync(K)
    }
}};
THREE.MarchingCubes = function (b, g) {
    THREE.Object3D.call(this);
    this.materials = g instanceof Array ? g : [g];
    this.init = function (c) {
        this.isolation = 80;
        this.size = c;
        this.size2 = this.size * this.size;
        this.size3 = this.size2 * this.size;
        this.halfsize = this.size / 2;
        this.delta = 2 / this.size;
        this.yd = this.size;
        this.zd = this.size2;
        this.field = new Float32Array(this.size3);
        this.normal_cache = new Float32Array(this.size3 * 3);
        this.vlist = new Float32Array(36);
        this.nlist = new Float32Array(36);
        this.firstDraw = !0;
        this.maxCount = 4096;
        this.count = 0;
        this.hasNormal = this.hasPos = !1;
        this.positionArray = new Float32Array(this.maxCount * 3);
        this.normalArray = new Float32Array(this.maxCount * 3)
    };
    this.lerp = function (c, f, h) {
        return c + (f - c) * h
    };
    this.VIntX = function (c, f, h, m, n, p, o, t, u, w) {
        n = (n - u) / (w - u);
        u = this.normal_cache;
        f[m] = p + n * this.delta;
        f[m + 1] = o;
        f[m + 2] = t;
        h[m] = this.lerp(u[c], u[c + 3], n);
        h[m + 1] = this.lerp(u[c + 1], u[c + 4], n);
        h[m + 2] = this.lerp(u[c + 2], u[c + 5], n)
    };
    this.VIntY = function (c, f, h, m, n, p, o, t, u, w) {
        n = (n - u) / (w - u);
        u = this.normal_cache;
        f[m] = p;
        f[m + 1] = o + n * this.delta;
        f[m + 2] = t;
        f = c + this.yd * 3;
        h[m] = this.lerp(u[c], u[f], n);
        h[m + 1] = this.lerp(u[c + 1], u[f + 1], n);
        h[m + 2] = this.lerp(u[c + 2], u[f + 2], n)
    };
    this.VIntZ = function (c, f, h, m, n, p, o, t, u, w) {
        n = (n - u) / (w - u);
        u = this.normal_cache;
        f[m] = p;
        f[m + 1] = o;
        f[m + 2] = t + n * this.delta;
        f = c + this.zd * 3;
        h[m] = this.lerp(u[c], u[f], n);
        h[m + 1] = this.lerp(u[c + 1], u[f + 1], n);
        h[m + 2] = this.lerp(u[c + 2], u[f + 2], n)
    };
    this.compNorm = function (c) {
        var f = c * 3;
        this.normal_cache[f] == 0 && (this.normal_cache[f] = this.field[c - 1] - this.field[c + 1], this.normal_cache[f + 1] = this.field[c - this.yd] - this.field[c + this.yd], this.normal_cache[f + 2] = this.field[c - this.zd] - this.field[c + this.zd])
    };
    this.polygonize = function (c, f, h, m, n, p) {
        var o = m + 1, t = m + this.yd, u = m + this.zd, w = o + this.yd, x = o + this.zd, y = m + this.yd + this.zd, z = o + this.yd + this.zd, D = 0, B = this.field[m], A = this.field[o], E = this.field[t], C = this.field[w], H = this.field[u], G = this.field[x], I = this.field[y], V = this.field[z];
        B < n && (D |= 1);
        A < n && (D |= 2);
        E < n && (D |= 8);
        C < n && (D |= 4);
        H < n && (D |= 16);
        G < n && (D |= 32);
        I < n && (D |= 128);
        V < n && (D |= 64);
        var $ = THREE.edgeTable[D];
        if ($ == 0)return 0;
        var X = this.delta, P = c + X, S = f + X;
        X = h + X;
        $ & 1 && (this.compNorm(m), this.compNorm(o), this.VIntX(m * 3, this.vlist, this.nlist, 0, n, c, f, h, B, A));
        $ & 2 && (this.compNorm(o), this.compNorm(w), this.VIntY(o * 3, this.vlist, this.nlist, 3, n, P, f, h, A, C));
        $ & 4 && (this.compNorm(t), this.compNorm(w), this.VIntX(t * 3, this.vlist, this.nlist, 6, n, c, S, h, E, C));
        $ & 8 && (this.compNorm(m), this.compNorm(t), this.VIntY(m * 3, this.vlist, this.nlist, 9, n, c, f, h, B, E));
        $ & 16 && (this.compNorm(u), this.compNorm(x), this.VIntX(u * 3, this.vlist, this.nlist, 12, n, c, f, X, H, G));
        $ & 32 && (this.compNorm(x), this.compNorm(z), this.VIntY(x * 3, this.vlist, this.nlist, 15, n, P, f, X, G, V));
        $ & 64 && (this.compNorm(y), this.compNorm(z), this.VIntX(y * 3, this.vlist, this.nlist, 18, n, c, S, X, I, V));
        $ & 128 && (this.compNorm(u), this.compNorm(y), this.VIntY(u * 3, this.vlist, this.nlist, 21, n, c, f, X, H, I));
        $ & 256 && (this.compNorm(m), this.compNorm(u), this.VIntZ(m * 3, this.vlist, this.nlist, 24, n, c, f, h, B, H));
        $ & 512 && (this.compNorm(o), this.compNorm(x), this.VIntZ(o * 3, this.vlist, this.nlist, 27, n, P, f, h, A, G));
        $ & 1024 && (this.compNorm(w), this.compNorm(z), this.VIntZ(w * 3, this.vlist, this.nlist, 30, n, P, S, h, C, V));
        $ & 2048 && (this.compNorm(t), this.compNorm(y), this.VIntZ(t * 3, this.vlist, this.nlist, 33, n, c, S, h, E, I));
        D <<= 4;
        for (n = m = 0; THREE.triTable[D + n] != -1;) {
            c = D + n;
            f = c + 1;
            h = c + 2;
            this.posnormtriv(this.vlist, this.nlist, 3 * THREE.triTable[c], 3 * THREE.triTable[f], 3 * THREE.triTable[h], p);
            n += 3;
            m++
        }
        return m
    };
    this.posnormtriv = function (c, f, h, m, n, p) {
        var o = this.count * 3;
        this.positionArray[o] = c[h];
        this.positionArray[o + 1] = c[h + 1];
        this.positionArray[o + 2] = c[h + 2];
        this.positionArray[o + 3] = c[m];
        this.positionArray[o + 4] = c[m + 1];
        this.positionArray[o + 5] = c[m + 2];
        this.positionArray[o + 6] = c[n];
        this.positionArray[o + 7] = c[n + 1];
        this.positionArray[o + 8] = c[n + 2];
        this.normalArray[o] = f[h];
        this.normalArray[o + 1] = f[h + 1];
        this.normalArray[o + 2] = f[h + 2];
        this.normalArray[o + 3] = f[m];
        this.normalArray[o + 4] = f[m + 1];
        this.normalArray[o + 5] = f[m + 2];
        this.normalArray[o + 6] = f[n];
        this.normalArray[o + 7] = f[n + 1];
        this.normalArray[o + 8] = f[n + 2];
        this.hasNormal = this.hasPos = !0;
        this.count += 3;
        this.count >= this.maxCount - 3 && p(this)
    };
    this.begin = function () {
        this.count = 0;
        this.hasNormal = this.hasPos = !1
    };
    this.end = function (c) {
        if (this.count != 0) {
            for (var f = this.count * 3; f < this.positionArray.length; f++)this.positionArray[f] = 0;
            c(this)
        }
    };
    this.addBall = function (c, f, h, m, n) {
        var p = this.size * Math.sqrt(m / n), o = h * this.size, t = f * this.size, u = c * this.size, w = Math.floor(o - p);
        w < 1 && (w = 1);
        o = Math.floor(o + p);
        o > this.size - 1 && (o = this.size - 1);
        var x = Math.floor(t - p);
        x < 1 && (x = 1);
        t = Math.floor(t + p);
        t > this.size - 1 && (t = this.size - 1);
        var y = Math.floor(u - p);
        y < 1 && (y = 1);
        p = Math.floor(u + p);
        p > this.size - 1 && (p = this.size - 1);
        for (var z, D, B, A, E, C; w < o; w++) {
            u = this.size2 * w;
            D = w / this.size - h;
            E = D * D;
            for (D = x; D < t; D++) {
                B = u + this.size * D;
                z = D / this.size - f;
                C = z * z;
                for (z = y; z < p; z++) {
                    A = z / this.size - c;
                    A = m / (1.0E-6 + A * A + C + E) - n;
                    A > 0 && (this.field[B + z] += A)
                }
            }
        }
    };
    this.addPlaneX = function (c, f) {
        var h, m, n, p, o, t = this.size, u = this.yd, w = this.zd, x = this.field, y = t * Math.sqrt(c / f);
        y > t && (y = t);
        for (h = 0; h < y; h++)if (m = h / t, m *= m, p = c / (1.0E-4 + m) - f, p > 0)for (m = 0; m < t; m++) {
            o = h + m * u;
            for (n = 0; n < t; n++)x[w * n + o] += p
        }
    };
    this.addPlaneY = function (c, f) {
        var h, m, n, p, o, t, u = this.size, w = this.yd, x = this.zd, y = this.field, z = u * Math.sqrt(c / f);
        z > u && (z = u);
        for (m = 0; m < z; m++)if (h = m / u, h *= h, p = c / (1.0E-4 + h) - f, p > 0) {
            o = m * w;
            for (h = 0; h < u; h++) {
                t = o + h;
                for (n = 0; n < u; n++)y[x * n + t] += p
            }
        }
    };
    this.addPlaneZ = function (c, f) {
        var h, m, n, p, o, t;
        size = this.size;
        yd = this.yd;
        zd = this.zd;
        field = this.field;
        dist = size * Math.sqrt(c / f);
        dist > size && (dist = size);
        for (n = 0; n < dist; n++)if (h = n / size, h *= h, p = c / (1.0E-4 + h) - f, p > 0) {
            o = zd * n;
            for (m = 0; m < size; m++) {
                t = o + m * yd;
                for (h = 0; h < size; h++)field[t + h] += p
            }
        }
    };
    this.reset = function () {
        var c;
        for (c = 0; c < this.size3; c++) {
            this.normal_cache[c * 3] = 0;
            this.field[c] = 0
        }
    };
    this.render = function (c) {
        this.begin();
        var f, h, m, n, p, o, t, u, w, x = this.size - 2;
        for (n = 1; n < x; n++) {
            w = this.size2 * n;
            t = (n - this.halfsize) / this.halfsize;
            for (m = 1; m < x; m++) {
                u = w + this.size * m;
                o = (m - this.halfsize) / this.halfsize;
                for (h = 1; h < x; h++) {
                    p = (h - this.halfsize) / this.halfsize;
                    f = u + h;
                    this.polygonize(p, o, t, f, this.isolation, c)
                }
            }
        }
        this.end(c)
    };
    this.generateGeometry = function () {
        var c = 0, f = new THREE.Geometry, h = [];
        this.render(function (m) {
            var n, p, o, t, u, w, x, y;
            for (n = 0; n < m.count; n++) {
                x = n * 3;
                u = x + 1;
                y = x + 2;
                p = m.positionArray[x];
                o = m.positionArray[u];
                t = m.positionArray[y];
                w = new THREE.Vector3(p, o, t);
                p = m.normalArray[x];
                o = m.normalArray[u];
                t = m.normalArray[y];
                x = new THREE.Vector3(p, o, t);
                x.normalize();
                u = new THREE.Vertex(w);
                f.vertices.push(u);
                h.push(x)
            }
            nfaces = m.count / 3;
            for (n = 0; n < nfaces; n++) {
                x = (c + n) * 3;
                u = x + 1;
                y = x + 2;
                w = h[x];
                p = h[u];
                o = h[y];
                x = new THREE.Face3(x, u, y, [w, p, o]);
                f.faces.push(x)
            }
            c += nfaces;
            m.count = 0
        });
        return f
    };
    this.init(b)
};
THREE.MarchingCubes.prototype = new THREE.Object3D;
THREE.MarchingCubes.prototype.constructor = THREE.MarchingCubes;
THREE.edgeTable = new Int32Array([0, 265, 515, 778, 1030, 1295, 1541, 1804, 2060, 2309, 2575, 2822, 3082, 3331, 3593, 3840, 400, 153, 915, 666, 1430, 1183, 1941, 1692, 2460, 2197, 2975, 2710, 3482, 3219, 3993, 3728, 560, 825, 51, 314, 1590, 1855, 1077, 1340, 2620, 2869, 2111, 2358, 3642, 3891, 3129, 3376, 928, 681, 419, 170, 1958, 1711, 1445, 1196, 2988, 2725, 2479, 2214, 4010, 3747, 3497, 3232, 1120, 1385, 1635, 1898, 102, 367, 613, 876, 3180, 3429, 3695, 3942, 2154, 2403, 2665, 2912, 1520, 1273, 2035, 1786, 502, 255, 1013, 764, 3580, 3317, 4095, 3830, 2554, 2291, 3065, 2800, 1616, 1881, 1107, 1370, 598, 863, 85, 348, 3676, 3925, 3167, 3414, 2650, 2899, 2137, 2384, 1984, 1737, 1475, 1226, 966, 719, 453, 204, 4044, 3781, 3535, 3270, 3018, 2755, 2505, 2240, 2240, 2505, 2755, 3018, 3270, 3535, 3781, 4044, 204, 453, 719, 966, 1226, 1475, 1737, 1984, 2384, 2137, 2899, 2650, 3414, 3167, 3925, 3676, 348, 85, 863, 598, 1370, 1107, 1881, 1616, 2800, 3065, 2291, 2554, 3830, 4095, 3317, 3580, 764, 1013, 255, 502, 1786, 2035, 1273, 1520, 2912, 2665, 2403, 2154, 3942, 3695, 3429, 3180, 876, 613, 367, 102, 1898, 1635, 1385, 1120, 3232, 3497, 3747, 4010, 2214, 2479, 2725, 2988, 1196, 1445, 1711, 1958, 170, 419, 681, 928, 3376, 3129, 3891, 3642, 2358, 2111, 2869, 2620, 1340, 1077, 1855, 1590, 314, 51, 825, 560, 3728, 3993, 3219, 3482, 2710, 2975, 2197, 2460, 1692, 1941, 1183, 1430, 666, 915, 153, 400, 3840, 3593, 3331, 3082, 2822, 2575, 2309, 2060, 1804, 1541, 1295, 1030, 778, 515, 265, 0]);
THREE.triTable = new Int32Array([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 9, 8, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 0, 2, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 8, 3, 2, 10, 8, 10, 9, 8, -1, -1, -1, -1, -1, -1, -1, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 8, 11, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 11, 2, 1, 9, 11, 9, 8, 11, -1, -1, -1, -1, -1, -1, -1, 3, 10, 1, 11, 10, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 10, 1, 0, 8, 10, 8, 11, 10, -1, -1, -1, -1, -1, -1, -1, 3, 9, 0, 3, 11, 9, 11, 10, 9, -1, -1, -1, -1, -1, -1, -1, 9, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 7, 3, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 1, 9, 4, 7, 1, 7, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 4, 7, 3, 0, 4, 1, 2, 10, -1, -1, -1, -1, -1, -1, -1, 9, 2, 10, 9, 0, 2, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 2, 10, 9, 2, 9, 7, 2, 7, 3, 7, 9, 4, -1, -1, -1, -1, 8, 4, 7, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 4, 7, 11, 2, 4, 2, 0, 4, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 8, 4, 7, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 4, 7, 11, 9, 4, 11, 9, 11, 2, 9, 2, 1, -1, -1, -1, -1, 3, 10, 1, 3, 11, 10, 7, 8, 4, -1, -1, -1, -1, -1, -1, -1, 1, 11, 10, 1, 4, 11, 1, 0, 4, 7, 11, 4, -1, -1, -1, -1, 4, 7, 8, 9, 0, 11, 9, 11, 10, 11, 0, 3, -1, -1, -1, -1, 4, 7, 11, 4, 11, 9, 9, 11, 10, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 5, 4, 8, 3, 5, 3, 1, 5, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 10, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 5, 2, 10, 5, 4, 2, 4, 0, 2, -1, -1, -1, -1, -1, -1, -1, 2, 10, 5, 3, 2, 5, 3, 5, 4, 3, 4, 8, -1, -1, -1, -1, 9, 5, 4, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, 2, 0, 8, 11, 4, 9, 5, -1, -1, -1, -1, -1, -1, -1, 0, 5, 4, 0, 1, 5, 2, 3, 11, -1, -1, -1, -1, -1, -1, -1, 2, 1, 5, 2, 5, 8, 2, 8, 11, 4, 8, 5, -1, -1, -1, -1, 10, 3, 11, 10, 1, 3, 9, 5, 4, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 0, 8, 1, 8, 10, 1, 8, 11, 10, -1, -1, -1, -1, 5, 4, 0, 5, 0, 11, 5, 11, 10, 11, 0, 3, -1, -1, -1, -1, 5, 4, 8, 5, 8, 10, 10, 8, 11, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 5, 7, 9, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 3, 0, 9, 5, 3, 5, 7, 3, -1, -1, -1, -1, -1, -1, -1, 0, 7, 8, 0, 1, 7, 1, 5, 7, -1, -1, -1, -1, -1, -1, -1, 1, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 7, 8, 9, 5, 7, 10, 1, 2, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 9, 5, 0, 5, 3, 0, 5, 7, 3, -1, -1, -1, -1, 8, 0, 2, 8, 2, 5, 8, 5, 7, 10, 5, 2, -1, -1, -1, -1, 2, 10, 5, 2, 5, 3, 3, 5, 7, -1, -1, -1, -1, -1, -1, -1, 7, 9, 5, 7, 8, 9, 3, 11, 2, -1, -1, -1, -1, -1, -1, -1, 9, 5, 7, 9, 7, 2, 9, 2, 0, 2, 7, 11, -1, -1, -1, -1, 2, 3, 11, 0, 1, 8, 1, 7, 8, 1, 5, 7, -1, -1, -1, -1, 11, 2, 1, 11, 1, 7, 7, 1, 5, -1, -1, -1, -1, -1, -1, -1, 9, 5, 8, 8, 5, 7, 10, 1, 3, 10, 3, 11, -1, -1, -1, -1, 5, 7, 0, 5, 0, 9, 7, 11, 0, 1, 0, 10, 11, 10, 0, -1, 11, 10, 0, 11, 0, 3, 10, 5, 0, 8, 0, 7, 5, 7, 0, -1, 11, 10, 5, 7, 11, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 0, 1, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 8, 3, 1, 9, 8, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 2, 6, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 6, 5, 1, 2, 6, 3, 0, 8, -1, -1, -1, -1, -1, -1, -1, 9, 6, 5, 9, 0, 6, 0, 2, 6, -1, -1, -1, -1, -1, -1, -1, 5, 9, 8, 5, 8, 2, 5, 2, 6, 3, 2, 8, -1, -1, -1, -1, 2, 3, 11, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 0, 8, 11, 2, 0, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 1, 9, 2, 9, 11, 2, 9, 8, 11, -1, -1, -1, -1, 6, 3, 11, 6, 5, 3, 5, 1, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 11, 0, 11, 5, 0, 5, 1, 5, 11, 6, -1, -1, -1, -1, 3, 11, 6, 0, 3, 6, 0, 6, 5, 0, 5, 9, -1, -1, -1, -1, 6, 5, 9, 6, 9, 11, 11, 9, 8, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 3, 0, 4, 7, 3, 6, 5, 10, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 5, 10, 6, 8, 4, 7, -1, -1, -1, -1, -1, -1, -1, 10, 6, 5, 1, 9, 7, 1, 7, 3, 7, 9, 4, -1, -1, -1, -1, 6, 1, 2, 6, 5, 1, 4, 7, 8, -1, -1, -1, -1, -1, -1, -1, 1, 2, 5, 5, 2, 6, 3, 0, 4, 3, 4, 7, -1, -1, -1, -1, 8, 4, 7, 9, 0, 5, 0, 6, 5, 0, 2, 6, -1, -1, -1, -1, 7, 3, 9, 7, 9, 4, 3, 2, 9, 5, 9, 6, 2, 6, 9, -1, 3, 11, 2, 7, 8, 4, 10, 6, 5, -1, -1, -1, -1, -1, -1, -1, 5, 10, 6, 4, 7, 2, 4, 2, 0, 2, 7, 11, -1, -1, -1, -1, 0, 1, 9, 4, 7, 8, 2, 3, 11, 5, 10, 6, -1, -1, -1, -1, 9, 2, 1, 9, 11, 2, 9, 4, 11, 7, 11, 4, 5, 10, 6, -1, 8, 4, 7, 3, 11, 5, 3, 5, 1, 5, 11, 6, -1, -1, -1, -1, 5, 1, 11, 5, 11, 6, 1, 0, 11, 7, 11, 4, 0, 4, 11, -1, 0, 5, 9, 0, 6, 5, 0, 3, 6, 11, 6, 3, 8, 4, 7, -1, 6, 5, 9, 6, 9, 11, 4, 7, 9, 7, 11, 9, -1, -1, -1, -1, 10, 4, 9, 6, 4, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 10, 6, 4, 9, 10, 0, 8, 3, -1, -1, -1, -1, -1, -1, -1, 10, 0, 1, 10, 6, 0, 6, 4, 0, -1, -1, -1, -1, -1, -1, -1, 8, 3, 1, 8, 1, 6, 8, 6, 4, 6, 1, 10, -1, -1, -1, -1, 1, 4, 9, 1, 2, 4, 2, 6, 4, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 1, 2, 9, 2, 4, 9, 2, 6, 4, -1, -1, -1, -1, 0, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 3, 2, 8, 2, 4, 4, 2, 6, -1, -1, -1, -1, -1, -1, -1, 10, 4, 9, 10, 6, 4, 11, 2, 3, -1, -1, -1, -1, -1, -1, -1, 0, 8, 2, 2, 8, 11, 4, 9, 10, 4, 10, 6, -1, -1, -1, -1, 3, 11, 2, 0, 1, 6, 0, 6, 4, 6, 1, 10, -1, -1, -1, -1, 6, 4, 1, 6, 1, 10, 4, 8, 1, 2, 1, 11, 8, 11, 1, -1, 9, 6, 4, 9, 3, 6, 9, 1, 3, 11, 6, 3, -1, -1, -1, -1, 8, 11, 1, 8, 1, 0, 11, 6, 1, 9, 1, 4, 6, 4, 1, -1, 3, 11, 6, 3, 6, 0, 0, 6, 4, -1, -1, -1, -1, -1, -1, -1, 6, 4, 8, 11, 6, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 10, 6, 7, 8, 10, 8, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 7, 3, 0, 10, 7, 0, 9, 10, 6, 7, 10, -1, -1, -1, -1, 10, 6, 7, 1, 10, 7, 1, 7, 8, 1, 8, 0, -1, -1, -1, -1, 10, 6, 7, 10, 7, 1, 1, 7, 3, -1, -1, -1, -1, -1, -1, -1, 1, 2, 6, 1, 6, 8, 1, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 6, 9, 2, 9, 1, 6, 7, 9, 0, 9, 3, 7, 3, 9, -1, 7, 8, 0, 7, 0, 6, 6, 0, 2, -1, -1, -1, -1, -1, -1, -1, 7, 3, 2, 6, 7, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 11, 10, 6, 8, 10, 8, 9, 8, 6, 7, -1, -1, -1, -1, 2, 0, 7, 2, 7, 11, 0, 9, 7, 6, 7, 10, 9, 10, 7, -1, 1, 8, 0, 1, 7, 8, 1, 10, 7, 6, 7, 10, 2, 3, 11, -1, 11, 2, 1, 11, 1, 7, 10, 6, 1, 6, 7, 1, -1, -1, -1, -1, 8, 9, 6, 8, 6, 7, 9, 1, 6, 11, 6, 3, 1, 3, 6, -1, 0, 9, 1, 11, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 8, 0, 7, 0, 6, 3, 11, 0, 11, 6, 0, -1, -1, -1, -1, 7, 11, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 8, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 9, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 1, 9, 8, 3, 1, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 10, 1, 2, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 8, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 2, 9, 0, 2, 10, 9, 6, 11, 7, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 2, 10, 3, 10, 8, 3, 10, 9, 8, -1, -1, -1, -1, 7, 2, 3, 6, 2, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 7, 0, 8, 7, 6, 0, 6, 2, 0, -1, -1, -1, -1, -1, -1, -1, 2, 7, 6, 2, 3, 7, 0, 1, 9, -1, -1, -1, -1, -1, -1, -1, 1, 6, 2, 1, 8, 6, 1, 9, 8, 8, 7, 6, -1, -1, -1, -1, 10, 7, 6, 10, 1, 7, 1, 3, 7, -1, -1, -1, -1, -1, -1, -1, 10, 7, 6, 1, 7, 10, 1, 8, 7, 1, 0, 8, -1, -1, -1, -1, 0, 3, 7, 0, 7, 10, 0, 10, 9, 6, 10, 7, -1, -1, -1, -1, 7, 6, 10, 7, 10, 8, 8, 10, 9, -1, -1, -1, -1, -1, -1, -1, 6, 8, 4, 11, 8, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 3, 0, 6, 0, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 6, 11, 8, 4, 6, 9, 0, 1, -1, -1, -1, -1, -1, -1, -1, 9, 4, 6, 9, 6, 3, 9, 3, 1, 11, 3, 6, -1, -1, -1, -1, 6, 8, 4, 6, 11, 8, 2, 10, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 3, 0, 11, 0, 6, 11, 0, 4, 6, -1, -1, -1, -1, 4, 11, 8, 4, 6, 11, 0, 2, 9, 2, 10, 9, -1, -1, -1, -1, 10, 9, 3, 10, 3, 2, 9, 4, 3, 11, 3, 6, 4, 6, 3, -1, 8, 2, 3, 8, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 4, 6, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 9, 0, 2, 3, 4, 2, 4, 6, 4, 3, 8, -1, -1, -1, -1, 1, 9, 4, 1, 4, 2, 2, 4, 6, -1, -1, -1, -1, -1, -1, -1, 8, 1, 3, 8, 6, 1, 8, 4, 6, 6, 10, 1, -1, -1, -1, -1, 10, 1, 0, 10, 0, 6, 6, 0, 4, -1, -1, -1, -1, -1, -1, -1, 4, 6, 3, 4, 3, 8, 6, 10, 3, 0, 3, 9, 10, 9, 3, -1, 10, 9, 4, 6, 10, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 5, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 5, 11, 7, 6, -1, -1, -1, -1, -1, -1, -1, 5, 0, 1, 5, 4, 0, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 11, 7, 6, 8, 3, 4, 3, 5, 4, 3, 1, 5, -1, -1, -1, -1, 9, 5, 4, 10, 1, 2, 7, 6, 11, -1, -1, -1, -1, -1, -1, -1, 6, 11, 7, 1, 2, 10, 0, 8, 3, 4, 9, 5, -1, -1, -1, -1, 7, 6, 11, 5, 4, 10, 4, 2, 10, 4, 0, 2, -1, -1, -1, -1, 3, 4, 8, 3, 5, 4, 3, 2, 5, 10, 5, 2, 11, 7, 6, -1, 7, 2, 3, 7, 6, 2, 5, 4, 9, -1, -1, -1, -1, -1, -1, -1, 9, 5, 4, 0, 8, 6, 0, 6, 2, 6, 8, 7, -1, -1, -1, -1, 3, 6, 2, 3, 7, 6, 1, 5, 0, 5, 4, 0, -1, -1, -1, -1, 6, 2, 8, 6, 8, 7, 2, 1, 8, 4, 8, 5, 1, 5, 8, -1, 9, 5, 4, 10, 1, 6, 1, 7, 6, 1, 3, 7, -1, -1, -1, -1, 1, 6, 10, 1, 7, 6, 1, 0, 7, 8, 7, 0, 9, 5, 4, -1, 4, 0, 10, 4, 10, 5, 0, 3, 10, 6, 10, 7, 3, 7, 10, -1, 7, 6, 10, 7, 10, 8, 5, 4, 10, 4, 8, 10, -1, -1, -1, -1, 6, 9, 5, 6, 11, 9, 11, 8, 9, -1, -1, -1, -1, -1, -1, -1, 3, 6, 11, 0, 6, 3, 0, 5, 6, 0, 9, 5, -1, -1, -1, -1, 0, 11, 8, 0, 5, 11, 0, 1, 5, 5, 6, 11, -1, -1, -1, -1, 6, 11, 3, 6, 3, 5, 5, 3, 1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 10, 9, 5, 11, 9, 11, 8, 11, 5, 6, -1, -1, -1, -1, 0, 11, 3, 0, 6, 11, 0, 9, 6, 5, 6, 9, 1, 2, 10, -1, 11, 8, 5, 11, 5, 6, 8, 0, 5, 10, 5, 2, 0, 2, 5, -1, 6, 11, 3, 6, 3, 5, 2, 10, 3, 10, 5, 3, -1, -1, -1, -1, 5, 8, 9, 5, 2, 8, 5, 6, 2, 3, 8, 2, -1, -1, -1, -1, 9, 5, 6, 9, 6, 0, 0, 6, 2, -1, -1, -1, -1, -1, -1, -1, 1, 5, 8, 1, 8, 0, 5, 6, 8, 3, 8, 2, 6, 2, 8, -1, 1, 5, 6, 2, 1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 6, 1, 6, 10, 3, 8, 6, 5, 6, 9, 8, 9, 6, -1, 10, 1, 0, 10, 0, 6, 9, 5, 0, 5, 6, 0, -1, -1, -1, -1, 0, 3, 8, 5, 6, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 10, 5, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 7, 5, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 11, 5, 10, 11, 7, 5, 8, 3, 0, -1, -1, -1, -1, -1, -1, -1, 5, 11, 7, 5, 10, 11, 1, 9, 0, -1, -1, -1, -1, -1, -1, -1, 10, 7, 5, 10, 11, 7, 9, 8, 1, 8, 3, 1, -1, -1, -1, -1, 11, 1, 2, 11, 7, 1, 7, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 1, 2, 7, 1, 7, 5, 7, 2, 11, -1, -1, -1, -1, 9, 7, 5, 9, 2, 7, 9, 0, 2, 2, 11, 7, -1, -1, -1, -1, 7, 5, 2, 7, 2, 11, 5, 9, 2, 3, 2, 8, 9, 8, 2, -1, 2, 5, 10, 2, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, 8, 2, 0, 8, 5, 2, 8, 7, 5, 10, 2, 5, -1, -1, -1, -1, 9, 0, 1, 5, 10, 3, 5, 3, 7, 3, 10, 2, -1, -1, -1, -1, 9, 8, 2, 9, 2, 1, 8, 7, 2, 10, 2, 5, 7, 5, 2, -1, 1, 3, 5, 3, 7, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 8, 7, 0, 7, 1, 1, 7, 5, -1, -1, -1, -1, -1, -1, -1, 9, 0, 3, 9, 3, 5, 5, 3, 7, -1, -1, -1, -1, -1, -1, -1, 9, 8, 7, 5, 9, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 8, 4, 5, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, 5, 0, 4, 5, 11, 0, 5, 10, 11, 11, 3, 0, -1, -1, -1, -1, 0, 1, 9, 8, 4, 10, 8, 10, 11, 10, 4, 5, -1, -1, -1, -1, 10, 11, 4, 10, 4, 5, 11, 3, 4, 9, 4, 1, 3, 1, 4, -1, 2, 5, 1, 2, 8, 5, 2, 11, 8, 4, 5, 8, -1, -1, -1, -1, 0, 4, 11, 0, 11, 3, 4, 5, 11, 2, 11, 1, 5, 1, 11, -1, 0, 2, 5, 0, 5, 9, 2, 11, 5, 4, 5, 8, 11, 8, 5, -1, 9, 4, 5, 2, 11, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 5, 10, 3, 5, 2, 3, 4, 5, 3, 8, 4, -1, -1, -1, -1, 5, 10, 2, 5, 2, 4, 4, 2, 0, -1, -1, -1, -1, -1, -1, -1, 3, 10, 2, 3, 5, 10, 3, 8, 5, 4, 5, 8, 0, 1, 9, -1, 5, 10, 2, 5, 2, 4, 1, 9, 2, 9, 4, 2, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 3, 5, 1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 5, 1, 0, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 8, 4, 5, 8, 5, 3, 9, 0, 5, 0, 3, 5, -1, -1, -1, -1, 9, 4, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 11, 7, 4, 9, 11, 9, 10, 11, -1, -1, -1, -1, -1, -1, -1, 0, 8, 3, 4, 9, 7, 9, 11, 7, 9, 10, 11, -1, -1, -1, -1, 1, 10, 11, 1, 11, 4, 1, 4, 0, 7, 4, 11, -1, -1, -1, -1, 3, 1, 4, 3, 4, 8, 1, 10, 4, 7, 4, 11, 10, 11, 4, -1, 4, 11, 7, 9, 11, 4, 9, 2, 11, 9, 1, 2, -1, -1, -1, -1, 9, 7, 4, 9, 11, 7, 9, 1, 11, 2, 11, 1, 0, 8, 3, -1, 11, 7, 4, 11, 4, 2, 2, 4, 0, -1, -1, -1, -1, -1, -1, -1, 11, 7, 4, 11, 4, 2, 8, 3, 4, 3, 2, 4, -1, -1, -1, -1, 2, 9, 10, 2, 7, 9, 2, 3, 7, 7, 4, 9, -1, -1, -1, -1, 9, 10, 7, 9, 7, 4, 10, 2, 7, 8, 7, 0, 2, 0, 7, -1, 3, 7, 10, 3, 10, 2, 7, 4, 10, 1, 10, 0, 4, 0, 10, -1, 1, 10, 2, 8, 7, 4, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 7, 1, 3, -1, -1, -1, -1, -1, -1, -1, 4, 9, 1, 4, 1, 7, 0, 8, 1, 8, 7, 1, -1, -1, -1, -1, 4, 0, 3, 7, 4, 3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 8, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 9, 10, 8, 10, 11, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 11, 9, 10, -1, -1, -1, -1, -1, -1, -1, 0, 1, 10, 0, 10, 8, 8, 10, 11, -1, -1, -1, -1, -1, -1, -1, 3, 1, 10, 11, 3, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 2, 11, 1, 11, 9, 9, 11, 8, -1, -1, -1, -1, -1, -1, -1, 3, 0, 9, 3, 9, 11, 1, 2, 9, 2, 11, 9, -1, -1, -1, -1, 0, 2, 11, 8, 0, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 3, 2, 11, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 10, 8, 9, -1, -1, -1, -1, -1, -1, -1, 9, 10, 2, 0, 9, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 3, 8, 2, 8, 10, 0, 1, 8, 1, 10, 8, -1, -1, -1, -1, 1, 10, 2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1, 3, 8, 9, 1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 9, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 3, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
THREE.Trident = function (b) {
    function g(m) {
        return new THREE.Mesh(new THREE.Cylinder(30, 0.1, b.length / 20, b.length / 5), new THREE.MeshBasicMaterial({color: m}))
    }

    function c(m, n) {
        var p = new THREE.Geometry;
        p.vertices = [new THREE.Vertex, new THREE.Vertex(m)];
        return new THREE.Line(p, new THREE.LineBasicMaterial({color: n}))
    }

    THREE.Object3D.call(this);
    var f = Math.PI / 2, h;
    b = b || THREE.Trident.defaultParams;
    if (b !== THREE.Trident.defaultParams)for (h in THREE.Trident.defaultParams)b.hasOwnProperty(h) || (b[h] = THREE.Trident.defaultParams[h]);
    this.scale = new THREE.Vector3(b.scale, b.scale, b.scale);
    this.addChild(c(new THREE.Vector3(b.length, 0, 0), b.xAxisColor));
    this.addChild(c(new THREE.Vector3(0, b.length, 0), b.yAxisColor));
    this.addChild(c(new THREE.Vector3(0, 0, b.length), b.zAxisColor));
    if (b.showArrows) {
        h = g(b.xAxisColor);
        h.rotation.y = -f;
        h.position.x = b.length;
        this.addChild(h);
        h = g(b.yAxisColor);
        h.rotation.x = f;
        h.position.y = b.length;
        this.addChild(h);
        h = g(b.zAxisColor);
        h.rotation.y = Math.PI;
        h.position.z = b.length;
        this.addChild(h)
    }
};
THREE.Trident.prototype = new THREE.Object3D;
THREE.Trident.prototype.constructor = THREE.Trident;
THREE.Trident.defaultParams = {xAxisColor: 16711680, yAxisColor: 65280, zAxisColor: 255, showArrows: !0, length: 100, scale: 1};
THREE.PlaneCollider = function (b, g) {
    this.point = b;
    this.normal = g
};
THREE.SphereCollider = function (b, g) {
    this.center = b;
    this.radius = g;
    this.radiusSq = g * g
};
THREE.BoxCollider = function (b, g) {
    this.min = b;
    this.max = g;
    this.dynamic = !0;
    this.normal = new THREE.Vector3
};
THREE.MeshCollider = function (b, g) {
    this.mesh = b;
    this.box = g;
    this.numFaces = this.mesh.geometry.faces.length;
    this.normal = new THREE.Vector3
};
THREE.CollisionSystem = function () {
    this.collisionNormal = new THREE.Vector3;
    this.colliders = [];
    this.hits = []
};
THREE.Collisions = new THREE.CollisionSystem;
THREE.CollisionSystem.prototype.merge = function (b) {
    this.colliders = this.colliders.concat(b.colliders);
    this.hits = this.hits.concat(b.hits)
};
THREE.CollisionSystem.prototype.rayCastAll = function (b) {
    b.direction.normalize();
    this.hits.length = 0;
    var g, c, f, h, m = 0;
    g = 0;
    for (c = this.colliders.length; g < c; g++)if (h = this.colliders[g], f = this.rayCast(b, h), f < Number.MAX_VALUE) {
        h.distance = f;
        f > m ? this.hits.push(h) : this.hits.unshift(h);
        m = f
    }
    return this.hits
};
THREE.CollisionSystem.prototype.rayCastNearest = function (b) {
    var g = this.rayCastAll(b);
    if (g.length == 0)return null;
    for (var c = 0; g[c]instanceof THREE.MeshCollider;) {
        var f = this.rayMesh(b, g[c]);
        if (f.dist < Number.MAX_VALUE) {
            g[c].distance = f.dist;
            g[c].faceIndex = f.faceIndex;
            break
        }
        c++
    }
    if (c > g.length)return null;
    return g[c]
};
THREE.CollisionSystem.prototype.rayCast = function (b, g) {
    if (g instanceof THREE.PlaneCollider)return this.rayPlane(b, g); else if (g instanceof THREE.SphereCollider)return this.raySphere(b, g); else if (g instanceof THREE.BoxCollider)return this.rayBox(b, g); else if (g instanceof THREE.MeshCollider && g.box)return this.rayBox(b, g.box)
};
THREE.CollisionSystem.prototype.rayMesh = function (b, g) {
    for (var c = this.makeRayLocal(b, g.mesh), f = Number.MAX_VALUE, h, m = 0; m < g.numFaces; m++) {
        var n = g.mesh.geometry.faces[m], p = g.mesh.geometry.vertices[n.a].position, o = g.mesh.geometry.vertices[n.b].position, t = g.mesh.geometry.vertices[n.c].position, u = n instanceof THREE.Face4 ? g.mesh.geometry.vertices[n.d].position : null;
        n instanceof THREE.Face3 ? (n = this.rayTriangle(c, p, o, t, f, this.collisionNormal), n < f && (f = n, h = m, g.normal.copy(this.collisionNormal), g.normal.normalize())) : n instanceof THREE.Face4 && (n = this.rayTriangle(c, p, o, u, f, this.collisionNormal), n < f && (f = n, h = m, g.normal.copy(this.collisionNormal), g.normal.normalize()), n = this.rayTriangle(c, o, t, u, f, this.collisionNormal), n < f && (f = n, h = m, g.normal.copy(this.collisionNormal), g.normal.normalize()))
    }
    return{dist: f, faceIndex: h}
};
THREE.CollisionSystem.prototype.rayTriangle = function (b, g, c, f, h, m) {
    var n = THREE.CollisionSystem.__v1, p = THREE.CollisionSystem.__v2;
    m.set(0, 0, 0);
    n.sub(c, g);
    p.sub(f, c);
    m.cross(n, p);
    p = m.dot(b.direction);
    if (!(p < 0))return Number.MAX_VALUE;
    n = m.dot(g) - m.dot(b.origin);
    if (!(n <= 0))return Number.MAX_VALUE;
    if (!(n >= p * h))return Number.MAX_VALUE;
    n /= p;
    p = THREE.CollisionSystem.__v3;
    p.copy(b.direction);
    p.multiplyScalar(n);
    p.addSelf(b.origin);
    Math.abs(m.x) > Math.abs(m.y) ? Math.abs(m.x) > Math.abs(m.z) ? (b = p.y - g.y, m = c.y - g.y, h = f.y - g.y, p = p.z - g.z, c = c.z - g.z, f = f.z - g.z) : (b = p.x - g.x, m = c.x - g.x, h = f.x - g.x, p = p.y - g.y, c = c.y - g.y, f = f.y - g.y) : Math.abs(m.y) > Math.abs(m.z) ? (b = p.x - g.x, m = c.x - g.x, h = f.x - g.x, p = p.z - g.z, c = c.z - g.z, f = f.z - g.z) : (b = p.x - g.x, m = c.x - g.x, h = f.x - g.x, p = p.y - g.y, c = c.y - g.y, f = f.y - g.y);
    g = m * f - c * h;
    if (g == 0)return Number.MAX_VALUE;
    g = 1 / g;
    f = (b * f - p * h) * g;
    if (!(f >= 0))return Number.MAX_VALUE;
    g *= m * p - c * b;
    if (!(g >= 0))return Number.MAX_VALUE;
    if (!(1 - f - g >= 0))return Number.MAX_VALUE;
    return n
};
THREE.CollisionSystem.prototype.makeRayLocal = function (b, g) {
    var c = THREE.CollisionSystem.__m;
    THREE.Matrix4.makeInvert(g.matrixWorld, c);
    var f = THREE.CollisionSystem.__r;
    f.origin.copy(b.origin);
    f.direction.copy(b.direction);
    c.multiplyVector3(f.origin);
    c.rotateAxis(f.direction);
    f.direction.normalize();
    return f
};
THREE.CollisionSystem.prototype.rayBox = function (b, g) {
    var c;
    g.dynamic && g.mesh && g.mesh.matrixWorld ? c = this.makeRayLocal(b, g.mesh) : (c = THREE.CollisionSystem.__r, c.origin.copy(b.origin), c.direction.copy(b.direction));
    var f = 0, h = 0, m = 0, n = 0, p = 0, o = 0, t = !0;
    c.origin.x < g.min.x ? (f = g.min.x - c.origin.x, f /= c.direction.x, t = !1, n = -1) : c.origin.x > g.max.x && (f = g.max.x - c.origin.x, f /= c.direction.x, t = !1, n = 1);
    c.origin.y < g.min.y ? (h = g.min.y - c.origin.y, h /= c.direction.y, t = !1, p = -1) : c.origin.y > g.max.y && (h = g.max.y - c.origin.y, h /= c.direction.y, t = !1, p = 1);
    c.origin.z < g.min.z ? (m = g.min.z - c.origin.z, m /= c.direction.z, t = !1, o = -1) : c.origin.z > g.max.z && (m = g.max.z - c.origin.z, m /= c.direction.z, t = !1, o = 1);
    if (t)return-1;
    t = 0;
    h > f && (t = 1, f = h);
    m > f && (t = 2, f = m);
    switch (t) {
        case 0:
            p = c.origin.y + c.direction.y * f;
            if (p < g.min.y || p > g.max.y)return Number.MAX_VALUE;
            c = c.origin.z + c.direction.z * f;
            if (c < g.min.z || c > g.max.z)return Number.MAX_VALUE;
            g.normal.set(n, 0, 0);
            break;
        case 1:
            n = c.origin.x + c.direction.x * f;
            if (n < g.min.x || n > g.max.x)return Number.MAX_VALUE;
            c = c.origin.z + c.direction.z * f;
            if (c < g.min.z || c > g.max.z)return Number.MAX_VALUE;
            g.normal.set(0, p, 0);
            break;
        case 2:
            n = c.origin.x + c.direction.x * f;
            if (n < g.min.x || n > g.max.x)return Number.MAX_VALUE;
            p = c.origin.y + c.direction.y * f;
            if (p < g.min.y || p > g.max.y)return Number.MAX_VALUE;
            g.normal.set(0, 0, o)
    }
    return f
};
THREE.CollisionSystem.prototype.rayPlane = function (b, g) {
    var c = b.direction.dot(g.normal), f = g.point.dot(g.normal);
    if (c < 0)c = (f - b.origin.dot(g.normal)) / c; else return Number.MAX_VALUE;
    return c > 0 ? c : Number.MAX_VALUE
};
THREE.CollisionSystem.prototype.raySphere = function (b, g) {
    var c = g.center.clone().subSelf(b.origin);
    if (c.lengthSq < g.radiusSq)return-1;
    var f = c.dot(b.direction.clone());
    if (f <= 0)return Number.MAX_VALUE;
    c = g.radiusSq - (c.lengthSq() - f * f);
    if (c >= 0)return Math.abs(f) - Math.sqrt(c);
    return Number.MAX_VALUE
};
THREE.CollisionSystem.__v1 = new THREE.Vector3;
THREE.CollisionSystem.__v2 = new THREE.Vector3;
THREE.CollisionSystem.__v3 = new THREE.Vector3;
THREE.CollisionSystem.__nr = new THREE.Vector3;
THREE.CollisionSystem.__m = new THREE.Matrix4;
THREE.CollisionSystem.__r = new THREE.Ray;
THREE.CollisionUtils = {};
THREE.CollisionUtils.MeshOBB = function (b) {
    b.geometry.computeBoundingBox();
    var g = b.geometry.boundingBox, c = new THREE.Vector3(g.x[0], g.y[0], g.z[0]);
    g = new THREE.Vector3(g.x[1], g.y[1], g.z[1]);
    c = new THREE.BoxCollider(c, g);
    c.mesh = b;
    return c
};
THREE.CollisionUtils.MeshAABB = function (b) {
    var g = THREE.CollisionUtils.MeshOBB(b);
    g.min.addSelf(b.position);
    g.max.addSelf(b.position);
    g.dynamic = !1;
    return g
};
THREE.CollisionUtils.MeshColliderWBox = function (b) {
    return new THREE.MeshCollider(b, THREE.CollisionUtils.MeshOBB(b))
};
THREE.JSONLoaderAjax = function (b) {
    THREE.Loader.call(this, b)
};
THREE.JSONLoaderAjax.prototype = new THREE.Loader;
THREE.JSONLoaderAjax.prototype.constructor = THREE.JSONLoaderAjax;
THREE.JSONLoaderAjax.prototype.supr = THREE.Loader.prototype;
THREE.JSONLoaderAjax.prototype.load = function (b) {
    var g = b.model, c = b.callback;
    b = b.texture_path ? b.texture_path : this.extractUrlbase(g);
    this.onLoadStart();
    THREE.JSONLoaderAjax.prototype.loadAjaxJSON(this, g, c, b)
};
THREE.JSONLoaderAjax.prototype.loadAjaxJSON = function (b, g, c, f, h) {
    var m = new XMLHttpRequest, n = 0;
    m.onreadystatechange = function () {
        if (m.readyState == 4)if (m.status == 200 || m.status == 0) {
            var p = JSON.parse(m.responseText);
            THREE.JSONLoaderAjax.prototype.createModel(p, c, f);
            b.onLoadComplete()
        } else alert("Couldn't load [" + g + "] [" + m.status + "]"); else if (m.readyState == 3) {
            if (h) {
                n == 0 && (n = m.getResponseHeader("Content-Length"));
                h({total: n, loaded: m.responseText.length})
            }
        } else m.readyState == 2 && (n = m.getResponseHeader("Content-Length"))
    };
    m.open("GET", g, !0);
    m.overrideMimeType("text/plain; charset=x-user-defined");
    m.setRequestHeader("Content-Type", "text/plain");
    m.send(null)
};
THREE.JSONLoaderAjax.prototype.createModel = function (b, g, c) {
    var f = new THREE.Geometry, h = b.scale !== undefined ? 1 / b.scale : 1;
    this.init_materials(f, b.materials, c);
    (function (m) {
        if (b.version === undefined || b.version != 2)console.error("Deprecated file format."); else {
            var n, p, o, t, u, w, x, y, z, D, B, A, E, C, H = b.faces;
            w = b.vertices;
            var G = b.normals, I = b.colors, V = 0;
            for (n = 0; n < b.uvs.length; n++)b.uvs[n].length && V++;
            for (n = 0; n < V; n++) {
                f.faceUvs[n] = [];
                f.faceVertexUvs[n] = []
            }
            t = 0;
            for (u = w.length; t < u;) {
                x = new THREE.Vertex;
                x.position.x = w[t++] * m;
                x.position.y = w[t++] * m;
                x.position.z = w[t++] * m;
                f.vertices.push(x)
            }
            t = 0;
            for (u = H.length; t < u;) {
                m = H[t++];
                w = m & 1;
                o = m & 2;
                n = m & 4;
                p = m & 8;
                y = m & 16;
                x = m & 32;
                D = m & 64;
                m &= 128;
                if (w) {
                    B = new THREE.Face4;
                    B.a = H[t++];
                    B.b = H[t++];
                    B.c = H[t++];
                    B.d = H[t++];
                    w = 4
                } else {
                    B = new THREE.Face3;
                    B.a = H[t++];
                    B.b = H[t++];
                    B.c = H[t++];
                    w = 3
                }
                if (o) {
                    o = H[t++];
                    B.materials = f.materials[o]
                }
                o = f.faces.length;
                if (n)for (n = 0; n < V; n++) {
                    A = b.uvs[n];
                    z = H[t++];
                    C = A[z * 2];
                    z = A[z * 2 + 1];
                    f.faceUvs[n][o] = new THREE.UV(C, z)
                }
                if (p)for (n = 0; n < V; n++) {
                    A = b.uvs[n];
                    E = [];
                    for (p = 0; p < w; p++) {
                        z = H[t++];
                        C = A[z * 2];
                        z = A[z * 2 + 1];
                        E[p] = new THREE.UV(C, z)
                    }
                    f.faceVertexUvs[n][o] = E
                }
                if (y) {
                    y = H[t++] * 3;
                    p = new THREE.Vector3;
                    p.x = G[y++];
                    p.y = G[y++];
                    p.z = G[y];
                    B.normal = p
                }
                if (x)for (n = 0; n < w; n++) {
                    y = H[t++] * 3;
                    p = new THREE.Vector3;
                    p.x = G[y++];
                    p.y = G[y++];
                    p.z = G[y];
                    B.vertexNormals.push(p)
                }
                if (D) {
                    x = H[t++];
                    x = new THREE.Color(I[x]);
                    B.color = x
                }
                if (m)for (n = 0; n < w; n++) {
                    x = H[t++];
                    x = new THREE.Color(I[x]);
                    B.vertexColors.push(x)
                }
                f.faces.push(B)
            }
        }
    })(h);
    (function () {
        var m, n, p, o;
        if (b.skinWeights) {
            m = 0;
            for (n = b.skinWeights.length; m < n; m += 2) {
                p = b.skinWeights[m];
                o = b.skinWeights[m + 1];
                f.skinWeights.push(new THREE.Vector4(p, o, 0, 0))
            }
        }
        if (b.skinIndices) {
            m = 0;
            for (n = b.skinIndices.length; m < n; m += 2) {
                p = b.skinIndices[m];
                o = b.skinIndices[m + 1];
                f.skinIndices.push(new THREE.Vector4(p, o, 0, 0))
            }
        }
        f.bones = b.bones;
        f.animation = b.animation
    })();
    (function (m) {
        if (b.morphTargets !== undefined) {
            var n, p, o, t, u, w, x, y, z;
            n = 0;
            for (p = b.morphTargets.length; n < p; n++) {
                f.morphTargets[n] = {};
                f.morphTargets[n].name = b.morphTargets[n].name;
                f.morphTargets[n].vertices = [];
                y = f.morphTargets[n].vertices;
                z = b.morphTargets[n].vertices;
                o = 0;
                for (t = z.length; o < t; o += 3) {
                    u = z[o] * m;
                    w = z[o + 1] * m;
                    x = z[o + 2] * m;
                    y.push(new THREE.Vertex(new THREE.Vector3(u, w, x)))
                }
            }
        }
        if (b.morphColors !== undefined) {
            n = 0;
            for (p = b.morphColors.length; n < p; n++) {
                f.morphColors[n] = {};
                f.morphColors[n].name = b.morphColors[n].name;
                f.morphColors[n].colors = [];
                t = f.morphColors[n].colors;
                u = b.morphColors[n].colors;
                m = 0;
                for (o = u.length; m < o; m += 3) {
                    w = new THREE.Color(16755200);
                    w.setRGB(u[m], u[m + 1], u[m + 2]);
                    t.push(w)
                }
            }
        }
    })(h);
    (function () {
        if (b.edges !== undefined) {
            var m, n, p;
            for (m = 0; m < b.edges.length; m += 2) {
                n = b.edges[m];
                p = b.edges[m + 1];
                f.edges.push(new THREE.Edge(f.vertices[n], f.vertices[p], n, p))
            }
        }
    })();
    f.computeCentroids();
    f.computeFaceNormals();
    g(f)
};
THREE.SceneLoaderAjax = function () {
    this.onLoadStart = function () {
    };
    this.onLoadProgress = function () {
    };
    this.onLoadComplete = function () {
    };
    this.callbackSync = function () {
    };
    this.callbackProgress = function () {
    }
};
THREE.SceneLoaderAjax.prototype.constructor = THREE.SceneLoaderAjax;
THREE.SceneLoaderAjax.prototype.load = function (b, g) {
    var c = this, f = new XMLHttpRequest;
    f.onreadystatechange = function () {
        if (f.readyState == 4)if (f.status == 200 || f.status == 0)try {
            var h = JSON.parse(f.responseText);
            c.createScene(h, g, b)
        } catch (m) {
            console.error(m);
            console.warn("DEPRECATED: [" + b + "] seems to be using old model format")
        } else console.error("Couldn't load [" + b + "] [" + f.status + "]")
    };
    f.open("GET", b, !0);
    f.overrideMimeType("text/plain; charset=x-user-defined");
    f.setRequestHeader("Content-Type", "text/plain");
    f.send(null)
};
THREE.SceneLoaderAjax.prototype.createScene = function (b, g, c) {
    function f(oa, ya) {
        return ya == "relativeToHTML" ? oa : t + "/" + oa
    }

    function h() {
        for (x in P.objects)if (!K.objects[x]) {
            E = P.objects[x];
            if (E.geometry !== undefined) {
                if (I = K.geometries[E.geometry]) {
                    var oa = !1;
                    X = [];
                    for (aa = 0; aa < E.materials.length; aa++) {
                        X[aa] = K.materials[E.materials[aa]];
                        oa = X[aa]instanceof THREE.MeshShaderMaterial
                    }
                    oa && I.computeTangents();
                    C = E.position;
                    r = E.rotation;
                    q = E.quaternion;
                    s = E.scale;
                    q = 0;
                    X.length == 0 && (X[0] = new THREE.MeshFaceMaterial);
                    X.length > 1 && (X = [new THREE.MeshFaceMaterial]);
                    object = new THREE.Mesh(I, X);
                    object.name = x;
                    object.position.set(C[0], C[1], C[2]);
                    if (q) {
                        object.quaternion.set(q[0], q[1], q[2], q[3]);
                        object.useQuaternion = !0
                    } else object.rotation.set(r[0], r[1], r[2]);
                    object.scale.set(s[0], s[1], s[2]);
                    object.visible = E.visible;
                    K.scene.addObject(object);
                    K.objects[x] = object;
                    if (E.meshCollider) {
                        oa = THREE.CollisionUtils.MeshColliderWBox(object);
                        K.scene.collisions.colliders.push(oa)
                    }
                    if (E.castsShadow) {
                        oa = new THREE.ShadowVolume(I);
                        K.scene.addChild(oa);
                        oa.position = object.position;
                        oa.rotation = object.rotation;
                        oa.scale = object.scale
                    }
                    if (E.trigger && E.trigger.toLowerCase() != "none") {
                        oa = {type: E.trigger, object: E};
                        K.triggers[object.name] = oa
                    }
                }
            } else {
                C = E.position;
                r = E.rotation;
                q = E.quaternion;
                s = E.scale;
                q = 0;
                object = new THREE.Object3D;
                object.name = x;
                object.position.set(C[0], C[1], C[2]);
                if (q) {
                    object.quaternion.set(q[0], q[1], q[2], q[3]);
                    object.useQuaternion = !0
                } else object.rotation.set(r[0], r[1], r[2]);
                object.scale.set(s[0], s[1], s[2]);
                object.visible = E.visible !== undefined ? E.visible : !1;
                K.scene.addObject(object);
                K.objects[x] = object;
                K.empties[x] = object;
                if (E.trigger && E.trigger.toLowerCase() != "none") {
                    oa = {type: E.trigger, object: E};
                    K.triggers[object.name] = oa
                }
            }
        }
    }

    function m(oa) {
        return function (ya) {
            K.geometries[oa] = ya;
            h();
            v -= 1;
            o.onLoadComplete();
            p()
        }
    }

    function n(oa) {
        return function (ya) {
            K.geometries[oa] = ya
        }
    }

    function p() {
        o.callbackProgress({totalModels: J, totalTextures: T, loadedModels: J - v, loadedTextures: T - O}, K);
        o.onLoadProgress();
        v == 0 && O == 0 && g(K)
    }

    var o = this, t = THREE.Loader.prototype.extractUrlbase(c), u, w, x, y, z, D, B, A, E, C, H, G, I, V, $, X, P, S, v, O, J, T, K;
    P = b;
    c = new THREE.BinaryLoader;
    S = new THREE.JSONLoaderAjax;
    O = v = 0;
    K = {scene: new THREE.Scene, geometries: {}, materials: {}, textures: {}, objects: {}, cameras: {}, lights: {}, fogs: {}, triggers: {}, empties: {}};
    b = !1;
    for (x in P.objects) {
        E = P.objects[x];
        if (E.meshCollider) {
            b = !0;
            break
        }
    }
    if (b)K.scene.collisions = new THREE.CollisionSystem;
    if (P.transform) {
        b = P.transform.position;
        H = P.transform.rotation;
        var R = P.transform.scale;
        b && K.scene.position.set(b[0], b[1], b[2]);
        H && K.scene.rotation.set(H[0], H[1], H[2]);
        R && K.scene.scale.set(R[0], R[1], R[2]);
        (b || H || R) && K.scene.updateMatrix()
    }
    b = function () {
        O -= 1;
        p();
        o.onLoadComplete()
    };
    for (z in P.cameras) {
        H = P.cameras[z];
        if (H.type == "perspective")V = new THREE.Camera(H.fov, H.aspect, H.near, H.far); else if (H.type == "ortho") {
            V = new THREE.Camera;
            V.projectionMatrix = THREE.Matrix4.makeOrtho(H.left, H.right, H.top, H.bottom, H.near, H.far)
        }
        C = H.position;
        H = H.target;
        V.position.set(C[0], C[1], C[2]);
        V.target.position.set(H[0], H[1], H[2]);
        K.cameras[z] = V
    }
    for (y in P.lights) {
        z = P.lights[y];
        V = z.color !== undefined ? z.color : 16777215;
        H = z.intensity !== undefined ? z.intensity : 1;
        if (z.type == "directional") {
            C = z.direction;
            A = new THREE.DirectionalLight(V, H);
            A.position.set(C[0], C[1], C[2]);
            A.position.normalize()
        } else if (z.type == "point") {
            C = z.position;
            d = z.distance;
            A = new THREE.PointLight(V, H, d);
            A.position.set(C[0], C[1], C[2])
        }
        K.scene.addLight(A);
        K.lights[y] = A
    }
    for (D in P.fogs) {
        A = P.fogs[D];
        if (A.type == "linear")$ = new THREE.Fog(0, A.near, A.far); else A.type == "exp2" && ($ = new THREE.FogExp2(0, A.density));
        H = A.color;
        $.color.setRGB(H[0], H[1], H[2]);
        K.fogs[D] = $
    }
    if (K.cameras && P.defaults.camera)K.currentCamera = K.cameras[P.defaults.camera];
    if (K.fogs && P.defaults.fog)K.scene.fog = K.fogs[P.defaults.fog];
    H = P.defaults.bgcolor;
    K.bgColor = new THREE.Color;
    K.bgColor.setRGB(H[0], H[1], H[2]);
    K.bgColorAlpha = P.defaults.bgalpha;
    for (u in P.geometries) {
        A = P.geometries[u];
        if (A.type == "bin_mesh" || A.type == "ascii_mesh") {
            v += 1;
            o.onLoadStart()
        }
    }
    J = v;
    for (u in P.geometries) {
        A = P.geometries[u];
        if (A.type == "cube") {
            I = new THREE.CubeGeometry(A.width, A.height, A.depth, A.segmentsWidth, A.segmentsHeight, A.segmentsDepth, null, A.flipped, A.sides);
            K.geometries[u] = I
        } else if (A.type == "plane") {
            I = new THREE.PlaneGeometry(A.width, A.height, A.segmentsWidth, A.segmentsHeight);
            K.geometries[u] = I
        } else if (A.type == "sphere") {
            I = new THREE.SphereGeometry(A.radius, A.segmentsWidth, A.segmentsHeight);
            K.geometries[u] = I
        } else if (A.type == "cylinder") {
            I = new THREE.CylinderGeometry(A.numSegs, A.topRad, A.botRad, A.height, A.topOffset, A.botOffset);
            K.geometries[u] = I
        } else if (A.type == "torus") {
            I = new THREE.TorusGeometry(A.radius, A.tube, A.segmentsR, A.segmentsT);
            K.geometries[u] = I
        } else if (A.type == "icosahedron") {
            I = new THREE.IcosahedronGeometry(A.subdivisions);
            K.geometries[u] = I
        } else if (A.type == "bin_mesh")c.load({model: f(A.url, P.urlBaseType), callback: m(u)}); else if (A.type == "ascii_mesh")S.load({model: f(A.url, P.urlBaseType), callback: m(u)}); else if (A.type == "embedded_mesh")(A = P.embeds[A.id]) && S.createModel(A, n(u), "")
    }
    for (B in P.textures) {
        A = P.textures[B];
        if (A.url instanceof Array) {
            O += A.url.length;
            for (u = 0; u < A.url.length; u++)o.onLoadStart()
        } else {
            O += 1;
            o.onLoadStart()
        }
    }
    T = O;
    for (B in P.textures) {
        A = P.textures[B];
        if (A.mapping != undefined && THREE[A.mapping] != undefined)A.mapping = new THREE[A.mapping];
        if (A.url instanceof Array) {
            u = [];
            for (var aa = 0; aa < A.url.length; aa++)u[aa] = f(A.url[aa], P.urlBaseType);
            u = THREE.ImageUtils.loadTextureCube(u, A.mapping, b)
        } else {
            u = THREE.ImageUtils.loadTexture(f(A.url, P.urlBaseType), A.mapping, b);
            if (THREE[A.minFilter] != undefined)u.minFilter = THREE[A.minFilter];
            if (THREE[A.magFilter] != undefined)u.magFilter = THREE[A.magFilter];
            if (A.repeat) {
                u.repeat.set(A.repeat[0], A.repeat[1]);
                if (A.repeat[0] != 1)u.wrapS = THREE.RepeatWrapping;
                if (A.repeat[1] != 1)u.wrapT = THREE.RepeatWrapping
            }
            A.offset && u.offset.set(A.offset[0], A.offset[1]);
            if (A.wrap) {
                D = {repeat: THREE.RepeatWrapping, mirror: THREE.MirroredRepeatWrapping};
                if (D[A.wrap[0]] !== undefined)u.wrapS = D[A.wrap[0]];
                if (D[A.wrap[1]] !== undefined)u.wrapT = D[A.wrap[1]]
            }
        }
        K.textures[B] = u
    }
    for (w in P.materials) {
        B = P.materials[w];
        for (G in B.parameters)if (G == "envMap" || G == "map" || G == "lightMap")B.parameters[G] = K.textures[B.parameters[G]]; else if (G == "shading")B.parameters[G] = B.parameters[G] == "flat" ? THREE.FlatShading : THREE.SmoothShading; else if (G == "blending")B.parameters[G] = THREE[B.parameters[G]] ? THREE[B.parameters[G]] : THREE.NormalBlending; else if (G == "combine")B.parameters[G] = B.parameters[G] == "MixOperation" ? THREE.MixOperation : THREE.MultiplyOperation; else if (G == "vertexColors")if (B.parameters[G] == "face")B.parameters[G] = THREE.FaceColors; else if (B.parameters[G])B.parameters[G] = THREE.VertexColors;
        if (B.parameters.opacity !== undefined && B.parameters.opacity < 1)B.parameters.transparent = !0;
        if (B.parameters.normalMap) {
            u = THREE.ShaderUtils.lib.normal;
            b = THREE.UniformsUtils.clone(u.uniforms);
            D = B.parameters.color;
            $ = B.parameters.specular;
            c = B.parameters.ambient;
            S = B.parameters.shininess;
            var W, ea, ma;
            for (aa = 0; aa < K.scene.lights.length; aa++) {
                A = K.scene.lights[aa];
                if (!ma && A instanceof THREE.AmbientLight)ma = A; else if (!W && A instanceof THREE.PointLight)W = A; else!ea && A instanceof THREE.DirectionalLight && (ea = A)
            }
            b.tNormal.texture = K.textures[B.parameters.normalMap];
            if (B.parameters.normalMapFactor)b.uNormalScale.value = B.parameters.normalMapFactor;
            if (B.parameters.map) {
                b.tDiffuse.texture = B.parameters.map;
                b.enableDiffuse.value = !0
            }
            b.enableAO.value = !1;
            b.enableSpecular.value = !1;
            if (W) {
                b.uPointLightPos.value = W.position;
                b.uPointLightColor.value = W.color
            }
            if (ea) {
                b.uDirLightPos.value = ea.position;
                b.uDirLightColor.value = ea.color
            }
            if (ma)b.uAmbientLightColor.value = ma.color;
            b.uDiffuseColor.value.setHex(D);
            b.uSpecularColor.value.setHex($);
            b.uAmbientColor.value.setHex(c);
            b.uShininess.value = S;
            B = new THREE.MeshShaderMaterial({fragmentShader: u.fragmentShader, vertexShader: u.vertexShader, uniforms: b})
        } else B = new THREE[B.type](B.parameters);
        K.materials[w] = B
    }
    h();
    o.callbackSync(K)
};
var LoadingBar = function (b) {
    function g() {
        var t = p / n;
        if (t > o) {
            o = t;
            h.style.width = t * 275 + "px"
        }
    }

    var c, f, h, m, n = 0, p = 0, o = 0;
    c = document.createElement("div");
    f = document.createElement("div");
    f.style.position = "absolute";
    f.style.display = "block";
    f.style.width = "275px";
    f.style.height = "8px";
    f.style.borderStyle = "solid";
    f.style.borderColor = "rgba(255,255,255,0.5)";
    f.style.borderWidth = "1px";
    f.style.borderRadius = "5px";
    f.style.marginLeft = "12px";
    c.appendChild(f);
    h = document.createElement("div");
    h.style.position = "absolute";
    h.style.height = "8px";
    h.style.width = "0";
    h.style.background = "#fff";
    h.style.borderRadius = "5px";
    h.style.margin = "1px 0 0 13px";
    c.appendChild(h);
    m = document.createElement("div");
    m.setAttribute("style", "margin: 30px auto 0 auto;");
    m.innerHTML = "<img src = '/files/mouse_loading.png' alt = 'arrows' />";
    m.style.marginLeft = "8px";
    c.appendChild(m);
    c.style.margin = "-5px 0 0 0";
    this.addItem = function () {
        n++;
        g()
    };
    this.completeItem = function () {
        p++;
        g();
        if (n != 0 && n == p) {
            if (n == p)h.style.background = "#000";
            b()
        }
    };
    this.getMouseInfo = function () {
        return m
    };
    this.getDomElement = function () {
        return c
    }
};
if (!window.requestAnimationFrame)window.requestAnimationFrame = function () {
    return window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (b) {
        window.setTimeout(b, 1E3 / 60)
    }
}();
var Sequencer = function () {
    var b, g = [], c = [], f = [], h = 0, m = 0, n = 0, p = !1;
    this.add = function (o, t, u, w) {
        o.__active = !1;
        o.__start = t;
        o.__duration = u - t;
        o.__end = u;
        o.__layer = w;
        o.init();
        g.push(o);
        g.sort(function (x, y) {
            return x.__start - y.__start
        });
        f.push(o);
        f.sort(function (x, y) {
            return x.__end - y.__end
        })
    };
    this.update = function (o) {
        if (o < n) {
            this.clear();
            n = o
        }
        for (; g[h];) {
            b = g[h];
            if (b.__start > o)break;
            if (!b.__active && b.__end > o) {
                b.show((o - b.__start) / b.__duration);
                b.__active = !0;
                c.push(b);
                p = !0
            }
            h++
        }
        for (; f[m];) {
            b = f[m];
            if (b.__end > o)break;
            if (b.__active) {
                b.hide();
                b.__active = !1;
                var t = c.indexOf(b);
                t !== -1 && c.splice(t, 1)
            }
            m++
        }
        if (p) {
            c.sort(function (w, x) {
                return w.__layer - x.__layer
            });
            p = !1
        }
        t = 0;
        for (var u = c.length; t < u; t++) {
            b = c[t];
            b.update((o - b.__start) / b.__duration, o - n, o)
        }
        n = o
    };
    this.clear = function () {
        for (m = h = 0; c.length;) {
            b = c[0];
            b.__active = !1;
            b.hide();
            c.splice(0, 1)
        }
    }
}, SequencerItem = function () {
};
SequencerItem.prototype = {init: function () {
}, load: function () {
}, show: function () {
}, hide: function () {
}, update: function () {
}};
var Tune = function (b) {
    var g, c, f;
    this.getCurrentTime = function () {
        return b.currentTime * 1E3
    };
    this.setBPM = function (h) {
        g = h;
        f = 1 / g * 6E4
    };
    this.getBPM = function () {
        return g
    };
    this.setMS = function (h) {
        f = h;
        g = 1 / f * 6E4
    };
    this.getMS = function () {
        return f
    };
    this.setRows = function (h) {
        c = h
    };
    this.getRows = function () {
        return c
    };
    this.getBeatMS = function (h) {
        return f * h
    };
    this.getPatternMS = function (h) {
        return f * c * h
    }
};
function preInitModel(b, g, c) {
    g.initWebGLObjects(c);
    for (g = 0; g < b.materials.length; g++);
}
function preInitScene(b, g) {
    g.initWebGLObjects(b.scene);
    var c, f;
    for (c in b.materials) {
        f = b.materials[c];
        f instanceof THREE.MeshFaceMaterial || f.program || setTimeout(function () {
            g.initMaterial(f, b.scene.lights, b.scene.fog)
        }, 250)
    }
}
function preinitAnimal(b, g, c) {
    g.initWebGLObjects(c)
}
LensFlareTextures = {texture0: undefined, texture1: undefined, texture2: undefined};
function initLensFlares(b, g, c) {
    if (LensFlareTextures.texture0 === undefined) {
        LensFlareTextures.texture0 = THREE.ImageUtils.loadTexture("/files/textures/lensflare0.png");
        LensFlareTextures.texture1 = THREE.ImageUtils.loadTexture("/files/textures/lensflare2.png");
        LensFlareTextures.texture2 = THREE.ImageUtils.loadTexture("/files/textures/lensflare3.png")
    }
    var f = new THREE.LensFlare(LensFlareTextures.texture0, 700, 0, THREE.AdditiveBlending);
    f.add(LensFlareTextures.texture1, 512, 0, THREE.AdditiveBlending);
    f.add(LensFlareTextures.texture1, 512, 0, THREE.AdditiveBlending);
    f.add(LensFlareTextures.texture1, 512, 0, THREE.AdditiveBlending);
    f.add(LensFlareTextures.texture2, 60, 0.6, THREE.AdditiveBlending);
    f.add(LensFlareTextures.texture2, 70, 0.7, THREE.AdditiveBlending);
    f.add(LensFlareTextures.texture2, 120, 0.9, THREE.AdditiveBlending);
    f.add(LensFlareTextures.texture2, 70, 1, THREE.AdditiveBlending);
    f.customUpdateCallback = lensFlareUpdateCallback;
    f.position.copy(b);
    b = new THREE.Object3D;
    b.addChild(f);
    b.rotation.x = g * Math.PI / 180;
    b.rotation.y = c * Math.PI / 180;
    return b
}
function lensFlareUpdateCallback(b) {
    var g, c, f = b.lensFlares.length, h = -b.positionScreen.x * 2, m = -b.positionScreen.y * 2;
    for (c = 0; c < f; c++) {
        g = b.lensFlares[c];
        g.x = b.positionScreen.x + h * g.distance;
        g.y = b.positionScreen.y + m * g.distance;
        g.rotation = 0
    }
    b.lensFlares[2].y += 0.025;
    b.lensFlares[3].rotation = b.positionScreen.x * 0.5 + 45 * Math.PI / 180
}
function makeSceneStatic(b) {
    var g, c, f;
    g = 0;
    for (c = b.objects.length; g < c; g++) {
        f = b.objects[g];
        f.matrixAutoUpdate = !1;
        f.updateMatrix()
    }
}
function hideColliders(b) {
    var g, c, f;
    g = 0;
    for (c = b.collisions.colliders.length; g < c; g++) {
        f = b.collisions.colliders[g].mesh;
        f.visible = !1
    }
}
function applyMaterial(b, g, c) {
    var f, h, m, n = g.length;
    for (f = 0; f < n; f++) {
        h = g[f][0];
        m = g[f][1];
        b.objects[h] && (b.objects[h].geometry.materials[m][0] = c)
    }
}
var UgcObject = function (b) {
    var g = UgcObject.TYPE_GROUND, c = {}, f = 0;
    this.addVoxel = function (o, t, u, w, x) {
        c[o + "." + t + "." + u] = {x: o, y: t, z: u, color: w, object: x};
        f++
    };
    this.getType = function () {
        return g
    };
    this.setType = function (o) {
        g = o
    };
    this.getVoxel = function (o, t, u) {
        return c[o + "." + t + "." + u]
    };
    this.deleteVoxel = function (o, t, u) {
        delete c[o + "." + t + "." + u];
        f--
    };
    this.isEmpty = function () {
        return f == 0
    };
    this.getGrid = function () {
        return c
    };
    this.setGrid = function (o) {
        c = o
    };
    this.clear = function () {
        delete c;
        c = {};
        f = 0
    };
    this.getJSON = function () {
        function o() {
            if (y.length) {
                w.push(x);
                w.push(z);
                w = w.concat(y)
            }
        }

        var t, u, w = [5], x = null, y = [], z = 0;
        for (t in c) {
            u = c[t];
            if (u.color != x) {
                o();
                x = u.color;
                z = 0;
                y = []
            }
            y.push(u.x, u.y, u.z);
            z++
        }
        o();
        return JSON.stringify(w)
    };
    this.getMesh = function () {
        var o, t, u = new THREE.Mesh(new THREE.Cube(50, 50, 50)), w = new THREE.Geometry;
        for (o in c) {
            t = c[o];
            u.position.x = t.x * 50;
            u.position.y = t.y * 50;
            u.position.z = t.z * 50;
            for (o = 0; o < u.geometry.faces.length; o++)u.geometry.faces[o].color.setHex(t.color);
            GeometryUtils.merge(w, u)
        }
        o = new THREE.MeshShaderMaterial({uniforms: UgcShader.uniforms(), vertexShader: UgcShader.vertexShader, fragmentShader: UgcShader.fragmentShader, shading: THREE.FlatShading, lights: !0, vertexColors: 1});
        return new THREE.Mesh(w, o)
    };
    if (b && b[0] == 5)for (var h = 1, m = b.length, n = 0, p = 0; h < m;) {
        n = b[h++];
        p = b[h++];
        for (j = 0; j < p; j++)this.addVoxel(b[h++], b[h++], b[h++], n)
    }
};
UgcObject.TYPE_GROUND = "ground";
UgcObject.TYPE_SKY = "sky";
var UgcHandler = function () {
    function b(n) {
        var p = window.location.search;
        if (p !== "") {
            n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            n = RegExp("[\\?&]" + n + "=([^&#]*)").exec(p);
            if (n != null)return decodeURIComponent(n[1].replace(/\+/g, " "))
        }
    }

    function g(n) {
        var p, o, t, u, w, x;
        w = n.length;
        u = t = 0;
        for (x = new Uint8Array(w / 4 * 3); t < w;) {
            do p = m[n.charCodeAt(t++) & 255]; while (t < w && p == -1);
            if (p == -1)break;
            do o = m[n.charCodeAt(t++) & 255]; while (t < w && o == -1);
            if (o == -1)break;
            x[u++] = p << 2 | (o & 48) >> 4;
            do {
                p = n.charCodeAt(t++) & 255;
                if (p == 61)return x;
                p = m[p]
            } while (t < w && p == -1);
            if (p == -1)break;
            x[u++] = (o & 15) << 4 | (p & 60) >> 2;
            do {
                o = n.charCodeAt(t++) & 255;
                if (o == 61)return x;
                o = m[o]
            } while (t < w && o == -1);
            if (o == -1)break;
            x[u++] = (p & 3) << 6 | o
        }
        return x
    }

    function c(n, p, o) {
        function t(z) {
            return z.charCodeAt(0) & 255
        }

        o = o || {};
        o.type = o.type || "image/png";
        o.filename = o.filename || "file";
        var u = new XMLHttpRequest, w = '--BEAUTIFUL----------------BOUNDRY\r\nContent-Disposition: form-data; name="file"; filename="' + o.filename + '"\r\nContent-Type: ' + o.type + "\r\n\r\n";
        p = g(p.slice(o.type.length + 13));
        head = Array.prototype.map.call(w, t);
        tail = Array.prototype.map.call("\r\n--BEAUTIFUL----------------BOUNDRY--", t);
        var x = head.length, y = p.length;
        w = new Uint8Array(x + y + tail.length);
        w.set(head);
        w.set(p, x);
        w.set(tail, x + y);
        u.open("POST", n, !0);
        u.setRequestHeader("Content-Type", "multipart/form-data; boundary=BEAUTIFUL----------------BOUNDRY");
        u.onreadystatechange = function () {
            u.readyState === 4 && o.callback && o.callback(u.responseText)
        };
        u.sendAsBinary ? u.sendAsBinary(w.buffer) : u.send(w.buffer);
        return u.responseText
    }

    var f = this;
    this.getLatestUGOs = function (n, p) {
        h(function (o) {
            if (p === 0) {
                var t = b("id");
                t !== undefined ? f.getUGO(t, function (u) {
                    n([u].concat(o))
                }) : n(o)
            } else n(o)
        }, p)
    };
    var h = function (n, p) {
        var o = new XMLHttpRequest;
        o.open("GET", "/ugc/objects?category=favorite&offset=" + p * 10 + "&limit=10&property=data&property=category", !0);
        o.onreadystatechange = function () {
            if (o.readyState == 4)if (o.status == 200)if (o.responseText !== "")n(JSON.parse(o.responseText)); else {
                console.warn("UGC response empty");
                n({})
            } else console.log("Unable to load latest User Generated Content")
        };
        o.send(null)
    };
    this.getUGO = function (n, p) {
        var o = new XMLHttpRequest;
        o.open("GET", "/ugc/objects/" + n + "?property=data&property=category", !0);
        o.onreadystatechange = function () {
            if (o.readyState == 4)if (o.status == 200) {
                var t = JSON.parse(o.responseText);
                p(t)
            } else console.log("Could not fetch " + n)
        };
        o.send(null)
    };
    var m = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
    this.submitUGO = function (n, p, o) {
        function t() {
            o({success: !1})
        }

        var u = new XMLHttpRequest;
        u.open("POST", "/ugc/objects");
        u.onreadystatechange = function () {
            if (u.readyState == 4)if (u.status == 200)try {
                var w = JSON.parse(u.responseText);
                if (w.success) {
                    var x = w.upload_url;
                    delete w.upload_url;
                    c(x, p, {filename: n.title, callback: function () {
                        o(w)
                    }})
                } else t()
            } catch (y) {
                console.log(y);
                t()
            } else t()
        };
        u.send(JSON.stringify(n))
    }
};
window.GEE = function (b) {
    b || (b = {});
    if (document.createElement("canvas").getContext) {
        var g = this, c = {}, f = {ctx: undefined, domElement: undefined, width: undefined, height: undefined, desiredFrameTime: 1E3 / 60, frameCount: 0, key: undefined, keyCode: undefined, mouseX: 0, mouseY: 0, pmouseX: undefined, pmouseY: undefined, mousePressed: !1}, h, m = function () {
            for (var p = h, o = 0, t = 0; p;) {
                t += p.offsetTop;
                o += p.offsetLeft;
                p = p.offsetParent
            }
            offset = {x: o, y: t}
        };
        b.context || (b.context = "2d");
        b.width || (b.width = 500);
        b.height || (b.height = 500);
        h = f.domElement = document.createElement("canvas");
        f.ctx = h.getContext(b.context);
        if (f.ctx == null)b.fallback && b.fallback(); else {
            if (b.fullscreen) {
                var n = function () {
                    m();
                    f.width = h.width = window.innerWidth;
                    f.height = h.height = window.innerHeight - 4
                };
                window.addEventListener("resize", n, !1);
                n();
                b.container || (b.container = document.body);
                document.body.style.margin = "0px";
                document.body.style.padding = "0px"
            } else {
                m();
                g.__defineSetter__("width", function (p) {
                    f.width = h.width = p
                });
                g.__defineSetter__("height", function (p) {
                    f.height = h.height = p
                });
                g.width = b.width;
                g.height = b.height
            }
            if (b.container) {
                b.container.appendChild(h);
                m()
            }
            b = function (p) {
                g.__defineGetter__(p, function () {
                    return f[p]
                })
            };
            b("ctx");
            b("width");
            b("height");
            b("frameCount");
            b("key");
            b("keyCode");
            b("mouseX");
            b("mouseY");
            b("pmouseX");
            b("pmouseY");
            b("mousePressed");
            b("domElement");
            b = function () {
            };
            g.loop = !0;
            g.keyup = b;
            g.keydown = b;
            g.draw = b;
            g.mousedown = b;
            g.mouseup = b;
            g.mousemove = b;
            g.mousedrag = b;
            g.__defineGetter__("frameRate", function () {
                return NaN
            });
            g.__defineGetter__("frameTime", function () {
            });
            g.__defineGetter__("keyPressed", function () {
                for (var p in c)if (c[p])return!0;
                return!1
            });
            g.__defineSetter__("frameTime", function (p) {
                f.desiredFrameTime = p
            });
            g.__defineSetter__("frameRate", function (p) {
                f.desiredFrameTime = k / p
            });
            h.addEventListener("mouseenter", function () {
                m()
            }, !1);
            window.addEventListener("mousemove", function (p) {
                var o = p.pageX - offset.x;
                p = p.pageY - offset.y;
                if (f.pmouseX == undefined) {
                    f.pmouseX = o;
                    f.pmouseY = p
                } else {
                    f.pmouseX = f.mouseX;
                    f.pmouseY = f.mouseY
                }
                f.mouseX = o;
                f.mouseY = p
            }, !1);
            window.addEventListener("mousemove", function () {
                g.mousemove()
            }, !1)
        }
    } else b.fallback && b.fallback()
};
function loadSVG(b, g, c) {
    var f = new XMLHttpRequest;
    f.onreadystatechange = function () {
        if (f.readyState == 4)if (f.status == 200)if (f.responseXML == null)c != undefined && c.call(this, b); else {
            var h = f.responseXML.getElementsByTagName("svg").item(0);
            h = new SVG(h);
            h.filename = b;
            g.call(this, h, b)
        } else c != undefined && c.call(this, b)
    };
    f.open("GET", b, !0);
    f.send(null)
}
var SVG = function (b) {
    this.filename = "";
    this.children = [];
    var g = b.getAttribute("width"), c = b.getAttribute("height");
    this.width = g == null ? 0 : parseFloat(g.replace("px", ""));
    this.height = c == null ? 0 : parseFloat(c.replace("px", ""));
    for (var f in b.childNodes)b.childNodes.item(f).getAttribute && this.children.push(b.childNodes.item(f).nodeName == "g" ? new SVG(b.childNodes.item(f)) : new Path(b.childNodes.item(f)));
    this.draw = function (h) {
        for (var m in this.children)this.children[m].draw(h)
    };
    this.__defineGetter__("path", function () {
    })
}, Path = function (b) {
    this.element = b;
    this.commands = commands(b);
    this.lineWidth = parseLineWidth(b);
    this.strokeStyle = parseStrokeStyle(b);
    this.fillStyle = parseFillStyle(b);
    this.totalLength = 0;
    this.lengths = [];
    this.tlengths = [];
    var g = function () {
        this.reset = function () {
            this.x = this.y = this.x1 = this.y1 = this.x2 = this.y2 = 0
        };
        this.reset()
    };
    this.draw = function (c) {
        this.style(c);
        c.beginPath();
        this.shape(c);
        this.end(c)
    };
    this.getAnchorPoints = function () {
        var c = [], f;
        for (f in this.commands)c.push(this.commands[f].getAnchorPoints(g));
        return c
    };
    this.shape = function (c) {
        for (var f in this.commands)this.commands[f].shape(g, c)
    };
    this.lerp = function (c, f, h, m, n) {
        var p = 1 - n;
        return c * p * p * p + 3 * f * n * p * p + 3 * h * n * n * p + m * n * n * n
    };
    this.at = function (c, f) {
        var h, m;
        this.lengths.length == 0 && this.calcLengths(f);
        m = this.tlengths[0];
        for (h = 0; c > m;) {
            h++;
            m += this.tlengths[h]
        }
        pt = m - this.tlengths[h];
        m = this.map(c, pt, m, 0, 1);
        for (var n = 0; n <= h; n++)this.commands[n].shape(g, f);
        var p = g.x;
        n = g.y;
        this.commands[h + 1].shape(g, f);
        h = this.lerp(p, g.x1, g.x2, g.x, m);
        m = this.lerp(n, g.y1, g.y2, g.y, m);
        return{x: h, y: m}
    };
    this.map = function (c, f, h, m, n) {
        return m + (n - m) * ((c - f) / (h - f))
    };
    this.calcLengths = function (c) {
        var f, h, m, n, p = 0;
        this.commands[0].shape(g, c);
        for (var o = m = g.x, t = n = g.y, u = 1; u < this.commands.length; u++) {
            p = 0;
            o = g.x;
            t = g.y;
            this.commands[u].shape(g, c);
            for (var w = 0; w <= 1; w += 0.0010) {
                f = this.lerp(o, g.x1, g.x2, g.x, w);
                h = this.lerp(t, g.y1, g.y2, g.y, w);
                p += this.dist(f, h, m, n);
                m = f;
                n = h
            }
            this.lengths.push(p);
            this.totalLength += p
        }
        for (c = 0; c < this.lengths.length; c++)this.tlengths.push(this.lengths[c] / this.totalLength)
    };
    this.dist = function (c, f, h, m) {
        return Math.sqrt((c - h) * (c - h) + (f - m) * (f - m))
    };
    this.style = function (c) {
        if (this.lineWidth != null)c.lineWidth = this.lineWidth;
        if (this.strokeStyle != null) {
            c.strokeStyle = this.strokeStyle;
            if (this.lineWidth == undefined)c.lineWidth = 1
        }
        if (this.fillStyle != null)c.fillStyle = this.fillStyle
    };
    this.end = function (c) {
        this.fillStyle != null && c.fill();
        this.strokeStyle != null && c.stroke()
    }
}, parseLineWidth = function (b) {
    b = b.attributes.getNamedItem("stroke-width");
    return b == null ? null : parseFloat(b.nodeValue)
}, parseStrokeStyle = function (b) {
    b = b.attributes.getNamedItem("stroke");
    return b == null ? null : b.nodeValue
}, parseFillStyle = function (b) {
    var g = b.attributes.getNamedItem("fill");
    if (g == null)return b.attributes.getNamedItem("stroke") != null ? null : "#000000"; else {
        if (g.nodeValue == "none")return null;
        return g.nodeValue
    }
}, Command = function (b, g) {
    this.type = b;
    this.data = g;
    this.debug = !1;
    this.shape = function (c, f) {
        if (this.type == "M") {
            c.x = this.data[0];
            c.y = this.data[1];
            f && f.moveTo(c.x, c.y)
        } else if (this.type == "C") {
            c.x = this.data[4];
            c.y = this.data[5];
            if (f)f.bezierCurveTo(c.x1 = this.data[0], c.y1 = this.data[1], c.x2 = this.data[2], c.y2 = this.data[3], c.x, c.y)
        } else if (this.type == "c") {
            if (f)f.bezierCurveTo(c.x1 = c.x + this.data[0], c.y1 = c.y + this.data[1], c.x2 = c.x + this.data[2], c.y2 = c.y + this.data[3], c.x += this.data[4], c.y += this.data[5])
        } else if (this.type == "S") {
            c.x = this.data[2];
            c.y = this.data[3];
            var h = c.x - c.x2, m = c.y - c.y2;
            if (f)f.bezierCurveTo(c.x1 = c.x + h, c.y1 = c.y + m, c.x2 = this.data[0], c.y2 = this.data[1], c.x, c.y)
        } else if (this.type == "s") {
            h = c.x - c.x2;
            m = c.y - c.y2;
            if (f)f.bezierCurveTo(c.x1 = c.x + h, c.y1 = c.y + m, c.x2 = c.x + this.data[0], c.y2 = c.y + this.data[1], c.x += this.data[2], c.y += this.data[3])
        } else if (this.type == "L") {
            c.x1 = c.x;
            c.y1 = c.y;
            if (f)f.lineTo(c.x = this.data[0], c.y = this.data[1]);
            c.x2 = c.x;
            c.y2 = c.y
        } else if (this.type == "l") {
            c.x1 = c.x;
            c.y1 = c.y;
            f && f.lineTo(c.x += this.data[0], c.y += this.data[1]);
            c.x2 = c.x;
            c.y2 = c.y
        } else if (this.type == "H") {
            c.x1 = c.x;
            c.y1 = c.y;
            if (f)f.lineTo(c.x = this.data[0], c.y);
            c.x2 = c.x;
            c.y2 = c.y
        } else if (this.type == "h") {
            c.x1 = c.x;
            c.y1 = c.y;
            f && f.lineTo(c.x += this.data[0], c.y);
            c.x2 = c.x;
            c.y2 = c.y
        } else if (this.type == "V") {
            c.x1 = c.x;
            c.y1 = c.y;
            if (f)f.lineTo(c.x, c.y = this.data[0]);
            c.x2 = c.x;
            c.y2 = c.y
        } else if (this.type == "v") {
            c.x1 = c.x;
            c.y1 = c.y;
            f && f.lineTo(c.x, c.y += this.data[0]);
            c.x2 = c.x;
            c.y2 = c.y
        } else if (this.type == "z")f.closePath(); else console && console.log("unrecognized command " + this.type);
        if (f) {
            f.strokeStyle = "#000000";
            f.lineWidth = 1;
            if (this.debug) {
                f.strokeRect(c.x - 1.5, c.y - 1.5, 3, 3);
                f.beginPath();
                f.moveTo(c.px, c.py);
                f.lineTo(c.x1, c.y1);
                f.closePath();
                f.stroke()
            }
        }
    }
}, commands = function (b) {
    if (b.nodeName.toLowerCase() == "path")return commandsFromD(b.getAttribute("d"));
    if (b.nodeName.toLowerCase() == "polygon")return commandsFromPoints(b.getAttribute("points"));
    if (b.nodeName.toLowerCase() == "line")return commandsFromLine(b);
    if (b.nodeName.toLowerCase() == "rect")return commandsFromRect(b);
    return[]
}, commandsFromD = function (b) {
    var g = [];
    b = b.match(/[a-zA-Z][0-9\.\-\,]+/g);
    for (var c = 0; c < b.length; c++) {
        var f = b[c].charAt(0), h = b[c].substr(1);
        h = h.replace(/\-/g, ",-");
        h.charAt(0) == "," && (h = h.substr(1));
        h = h.split(",");
        for (var m = 0; m < h.length; m++)h[m] = parseFloat(h[m]);
        g.push(new Command(f, h))
    }
    return g
}, commandsFromLine = function (b) {
    var g = [], c = parseFloat(b.getAttribute("x1")), f = parseFloat(b.getAttribute("x2")), h = parseFloat(b.getAttribute("y1"));
    b = parseFloat(b.getAttribute("y2"));
    g.push(new Command("M", [c, h]));
    g.push(new Command("L", [f, b]));
    return g
}, commandsFromPoints = function (b) {
    var g = !0;
    if (b.indexOf(",") == -1)for (var c = 0; c < b.length; c++)if (b.charAt(c) == " ") {
        g && (b = b.setCharAt(c, ","));
        g = !g
    }
    b = ("M" + b).replace(/ /g, "L") + "z";
    return commandsFromD(b)
};
String.prototype.setCharAt = function (b, g) {
    if (b > this.length - 1)return str;
    return this.substr(0, b) + g + this.substr(b + 1)
};
var commandsFromRect = function (b) {
    var g = [], c = parseFloat(b.getAttribute("x")), f = parseFloat(b.getAttribute("y")), h = parseFloat(b.getAttribute("width"));
    b = parseFloat(b.getAttribute("height"));
    g.push(new Command("M", [c, f]));
    g.push(new Command("h", [h]));
    g.push(new Command("v", [b]));
    g.push(new Command("h", [-h]));
    g.push(new Command("v", [-b]));
    return g
}, WonderWall = WonderWall || {};
WonderWall.Point = function (b, g, c) {
    var f = g, h = c, m = 0;
    this.x = g;
    this.y = c;
    this.r = 0.07;
    this.threshold = 0.1;
    this.easing = 0.125;
    this.updating = !1;
    this.angle = 0;
    this.update = function (n) {
        if (this.updating) {
            var p = b.mouseY - h - n.y;
            g = f + (b.mouseX - f - n.x) * this.r;
            c = h + p * this.r;
            this.easing = 0.0625
        } else {
            g = f;
            c = h;
            m = 0;
            this.easing = 0.125
        }
        this.x = this.ease(this.x, g, this.easing);
        this.y = this.ease(this.y, c, this.easing);
        this.angle = this.ease(this.angle, m, this.easing)
    };
    this.setPosition = function (n, p) {
        f = n;
        h = p
    };
    this.getOriginPosition = function () {
        return{x: f, y: h}
    };
    this.getPoint = function () {
        return{x: this.x, y: this.y}
    }
};
WonderWall.Point.prototype.ease = function (b, g, c) {
    var f = g - b;
    if (Math.abs(f) < c / 100)b = g; else b += f * c;
    return b
};
WonderWall.Pentagon = function (b, g, c, f) {
    var h = b.ctx;
    this.separate = !1;
    this.showFill = !0;
    this.showStroke = !0;
    this.insides = !1;
    this.x = g;
    this.y = c;
    if (this.x == undefined || this.x == null || this.x == NaN)this.x = b.width / 2;
    if (this.y == undefined || this.y == null || this.y == NaN)this.y = b.height / 2;
    g = this.generatePoints(this.x, this.y, f, 5);
    var m = [];
    for (c = 0; c < g.length; c++) {
        var n = g[c];
        m.push(new WonderWall.Point(b, n.x, n.y))
    }
    this.update = function (p) {
        this.x = b.width / 2;
        this.y = b.height / 2;
        var o = this.generatePoints(this.x, this.y, f, 5);
        if (!this.separate)this.separate = !0;
        for (var t = 0; t < m.length; t++) {
            var u = m[t], w = o[t];
            u.update(p);
            var x = u.getOriginPosition();
            (w.x != x.x || w.y != x.y) && u.setPosition(w.x, w.y)
        }
        return this
    };
    this.render = function () {
        if (this.insides && this.showStroke)for (var p = 0; p < m.length; p++) {
            var o = m[p];
            this.separate || o.update();
            h.beginPath();
            h.moveTo(this.x, this.y);
            h.lineTo(o.x, o.y);
            h.stroke()
        }
        h.beginPath();
        for (p = 0; p < m.length; p++) {
            o = m[p];
            this.separate || o.update();
            p < 1 ? h.moveTo(o.x, o.y) : h.lineTo(o.x, o.y)
        }
        h.closePath();
        this.showFill && h.fill();
        this.showStroke && h.stroke()
    };
    this.setUpdate = function (p) {
        for (var o = 0; o < m.length; o++)m[o].updating = p
    };
    this.setUpdatePoint = function (p, o) {
        m[o].updating = p
    };
    this.setRadius = function (p) {
        for (var o = 0; o < m.length; o++)m[o].r = p
    };
    this.getPoints = function () {
        return m
    }
};
WonderWall.Pentagon.prototype.generatePoints = function (b, g, c, f) {
    for (var h = [], m = 0; m < f; m++)h.push({x: c * Math.sin(m / f * 2 * Math.PI) + b, y: -c * Math.cos(m / f * 2 * Math.PI) + g});
    return h
};
function Heart(b, g, c, f) {
    var h = this, m = b.ctx;
    this.x = c;
    this.y = f;
    if (this.x == undefined || this.x == null || this.x || this == NaN)this.x = b.width / 2;
    if (this.y == undefined || this.y == null || this.y || this == NaN)this.y = b.height / 2;
    var n, p = !1;
    this.update = function () {
        return this
    };
    this.render = function () {
        if (p) {
            m.save();
            m.translate(this.x, this.y);
            m.save();
            m.translate(-this.width / 2, -this.height / 2);
            n.draw(m);
            m.restore();
            m.restore()
        }
    };
    loadSVG(g, function (o, t) {
        n = o;
        h.source = t;
        h.width = n.width;
        h.height = n.height;
        p = !0
    }, function () {
    })
}
var ClearEffect = function (b) {
    SequencerItem.call(this);
    var g, c = b.renderer, f = b.renderTarget;
    this.init = function () {
        g = new THREE.Camera(60, 1, 1, 1E4);
        g.position.z = 2;
        new THREE.Scene
    };
    this.update = function () {
        c.clear();
        var h = c.getContext();
        h.bindFramebuffer(h.FRAMEBUFFER, f.__webglFramebuffer);
        h.viewport(0, 0, f.width, f.height);
        h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT | h.STENCIL_BUFFER_BIT)
    }
};
ClearEffect.prototype = new SequencerItem;
ClearEffect.prototype.constructor = ClearEffect;
var FadeInEffect = function (b, g) {
    SequencerItem.call(this);
    var c, f, h, m, n = g.renderer, p = g.renderTarget;
    this.init = function () {
        c = new THREE.Camera(60, 1, 1, 1E4);
        c.position.z = 2;
        f = new THREE.Scene;
        h = new THREE.MeshBasicMaterial({color: b, opacity: 0, depthTest: !1});
        m = new THREE.Mesh(new THREE.Plane(3, 3), h);
        f.addObject(m)
    };
    this.update = function (o) {
        h.opacity = 1 - o;
        n.render(f, c, p)
    }
};
FadeInEffect.prototype = new SequencerItem;
FadeInEffect.prototype.constructor = FadeInEffect;
var FadeOutEffect = function (b, g) {
    SequencerItem.call(this);
    var c, f, h, m, n = g.renderer, p = g.renderTarget;
    this.init = function () {
        c = new THREE.Camera(60, 1, 1, 1E4);
        c.position.z = 2;
        f = new THREE.Scene;
        h = new THREE.MeshBasicMaterial({color: b, opacity: 1, depthTest: !1});
        m = new THREE.Mesh(new THREE.Plane(3, 3), h);
        f.addObject(m)
    };
    this.update = function (o) {
        h.opacity = o;
        n.render(f, c, p)
    }
};
FadeOutEffect.prototype = new SequencerItem;
FadeOutEffect.prototype.constructor = FadeOutEffect;
var RenderEffect = function (b) {
    SequencerItem.call(this);
    var g, c, f, h = b.renderer, m = b.renderTarget;
    this.init = function () {
        g = new THREE.Camera;
        g.position.z = 200;
        g.projectionMatrix = THREE.Matrix4.makeOrtho(b.baseWidth / -2, b.baseWidth / 2, b.baseHeight / 2, b.baseHeight / -2, -1E4, 1E4);
        c = new THREE.Scene;
        var n = new THREE.MeshBasicMaterial({map: m, depthTest: !1});
        f = new THREE.Mesh(new THREE.Plane(b.baseWidth, b.baseHeight), n);
        f.scale.y = -1;
        f.doubleSided = !0;
        c.addObject(f)
    };
    this.update = function () {
        h.render(c, g)
    }
};
RenderEffect.prototype = new SequencerItem;
RenderEffect.prototype.constructor = RenderEffect;
var NoiseEffect = function (b, g, c, f) {
    SequencerItem.call(this);
    var h, m, n, p, o, t = b.renderer, u = b.renderTarget;
    this.init = function () {
        h = new THREE.Camera;
        h.projectionMatrix = THREE.Matrix4.makeOrtho(b.baseWidth / -2, b.baseWidth / 2, b.baseHeight / 2, b.baseHeight / -2, -1E4, 1E4);
        h.position.z = 100;
        m = new THREE.Scene;
        p = THREE.ShaderUtils.lib.film;
        o = THREE.UniformsUtils.clone(p.uniforms);
        o.tDiffuse.texture = u;
        n = new THREE.MeshShaderMaterial({uniforms: o, vertexShader: p.vertexShader, fragmentShader: p.fragmentShader});
        o.grayscale.value = 0;
        if (g !== undefined)o.nIntensity.value = g;
        if (c !== undefined)o.sIntensity.value = c;
        if (f !== undefined)o.sCount.value = f;
        var w = new THREE.Mesh(new THREE.Plane(b.baseWidth, b.baseHeight), n);
        w.position.z = -500;
        m.addObject(w)
    };
    this.update = function (w, x, y) {
        o.time.value = y * 0.01 % 1E4;
        t.render(m, h, u, !1)
    }
};
NoiseEffect.prototype = new SequencerItem;
NoiseEffect.prototype.constructor = NoiseEffect;
var BloomEffect = function (b, g) {
    SequencerItem.call(this);
    var c, f, h, m, n, p, o, t, u, w, x, y = b.renderer, z = b.renderTarget;
    this.init = function () {
        c = new THREE.Camera;
        c.projectionMatrix = THREE.Matrix4.makeOrtho(b.baseWidth / -2, b.baseWidth / 2, b.baseHeight / 2, b.baseHeight / -2, -1E4, 1E4);
        c.position.z = 100;
        f = new THREE.Scene;
        var D = {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter, format: THREE.RGBFormat};
        o = new THREE.WebGLRenderTarget(256, 512, D);
        t = new THREE.WebGLRenderTarget(512, 256, D);
        D = THREE.ShaderUtils.lib.screen;
        m = THREE.UniformsUtils.clone(D.uniforms);
        m.tDiffuse.texture = z;
        m.opacity.value = g !== undefined ? g : 1;
        h = new THREE.MeshShaderMaterial({uniforms: m, vertexShader: D.vertexShader, fragmentShader: D.fragmentShader, blending: THREE.AdditiveBlending, transparent: !0});
        D = THREE.ShaderUtils.lib.convolution;
        n = THREE.UniformsUtils.clone(D.uniforms);
        w = new THREE.Vector2(0.001953125, 0);
        x = new THREE.Vector2(0, 0.001953125);
        n.tDiffuse.texture = z;
        n.uImageIncrement.value = w;
        n.cKernel.value = THREE.ShaderUtils.buildKernel(4);
        p = new THREE.MeshShaderMaterial({uniforms: n, vertexShader: "#define KERNEL_SIZE 25.0\n" + D.vertexShader, fragmentShader: "#define KERNEL_SIZE 25\n" + D.fragmentShader});
        u = new THREE.Mesh(new THREE.Plane(b.baseWidth, b.baseHeight), p);
        u.position.z = -500;
        f.addObject(u)
    };
    this.update = function () {
        u.materials[0] = p;
        n.tDiffuse.texture = z;
        n.uImageIncrement.value = w;
        y.render(f, c, o, !0);
        n.tDiffuse.texture = o;
        n.uImageIncrement.value = x;
        y.render(f, c, t, !0);
        u.materials[0] = h;
        h.blending = THREE.AdditiveBlending;
        m.tDiffuse.texture = t;
        y.render(f, c, z, !1)
    }
};
BloomEffect.prototype = new SequencerItem;
BloomEffect.prototype.constructor = BloomEffect;
var HeatEffect = function (b) {
    SequencerItem.call(this);
    var g, c, f, h, m = b.renderer, n = b.renderTarget;
    this.init = function () {
        g = new THREE.Camera;
        g.projectionMatrix = THREE.Matrix4.makeOrtho(b.baseWidth / -2, b.baseWidth / 2, b.baseHeight / 2, b.baseHeight / -2, -1E4, 1E4);
        g.position.z = 100;
        c = new THREE.Scene;
        h = {time: {type: "f", value: 0}, map: {type: "t", value: 0, texture: n}, sampleDistance: {type: "f", value: 1 / b.baseWidth}};
        f = new THREE.MeshShaderMaterial({uniforms: h, vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D map;\nvarying vec2 vUv;\nvoid main() {\nvec4 color, tmp, add;\nvec2 uv = vUv;\ncolor = texture2D( map, uv );\nfloat param1 = 0.0009;\nfloat param2 = 0.001;\nadd = tmp = texture2D( map, uv + vec2( param1, param1 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( -param1, param1 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( -param1, -param1 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( param1, -param1 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( param2, 0.0 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( -param2, 0.0 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( 0, param2 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( 0, -param2 ));\nif( tmp.r < color.r ) color = tmp;\ngl_FragColor = color * color + add * 0.5 / 8.0;\n}"});
        var p = new THREE.Mesh(new THREE.Plane(b.baseWidth, b.baseHeight), f);
        p.position.z = -500;
        c.addObject(p)
    };
    this.update = function (p, o, t) {
        h.time.value = t * 0.01;
        m.render(c, g, n, !1)
    }
};
HeatEffect.prototype = new SequencerItem;
HeatEffect.prototype.constructor = HeatEffect;
var PaintEffect = function (b) {
    SequencerItem.call(this);
    var g, c, f, h = b.renderer, m = b.renderTarget;
    this.init = function () {
        g = new THREE.Camera;
        g.projectionMatrix = THREE.Matrix4.makeOrtho(b.baseWidth / -2, b.baseWidth / 2, b.baseHeight / 2, b.baseHeight / -2, -1E4, 1E4);
        g.position.z = 100;
        c = new THREE.Scene;
        this.uniforms = {map: {type: "t", value: 0, texture: m}, screenWidth: {type: "f", value: b.baseWidth}, screenHeight: {type: "f", value: b.baseHeight}, vingenettingOffset: {type: "f", value: 0.87}, vingenettingDarkening: {type: "f", value: 0.61}, colorOffset: {type: "f", value: 0.95}, colorFactor: {type: "f", value: 0}, colorBrightness: {type: "f", value: 0}, sampleDistance: {type: "f", value: 0.54}, waveFactor: {type: "f", value: 0.00127}, colorA: {type: "v3", value: new THREE.Vector3(1, 1, 1)}, colorB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}, colorC: {type: "v3", value: new THREE.Vector3(1, 1, 1)}};
        f = new THREE.MeshShaderMaterial({uniforms: this.uniforms, vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "uniform float screenWidth;\nuniform float screenHeight;\nuniform float vingenettingOffset;\nuniform float vingenettingDarkening;\nuniform float colorOffset;\nuniform float colorFactor;\nuniform float sampleDistance;\nuniform float colorBrightness;\nuniform float waveFactor;\nuniform vec3 colorA;\nuniform sampler2D map;\nvarying vec2 vUv;\nvoid main() {\nvec4 color, org, tmp, add;\nfloat sample_dist, f;\nvec2 vin;\nvec2 uv = vUv;\nadd = color = org = texture2D( map, uv );\nvin = (uv - vec2(0.5)) * vec2( 1.4 /*vingenettingOffset * 2.0*/);\nsample_dist =(dot( vin, vin ) * 2.0);\nf = (waveFactor * 100.0 + sample_dist) * sampleDistance * 4.0;\nvec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2(f);\nadd += tmp = texture2D( map, uv + vec2(0.111964, 0.993712) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.846724, 0.532032) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.943883, -0.330279) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.330279, -0.943883) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.532032, -0.846724) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.993712, -0.111964) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.707107, 0.707107) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nuv = (uv - vec2(0.5)) * vec2( vingenettingOffset );\ncolor = color * vec4(2.0) - (add / vec4(8.0));\ncolor = color + (add / vec4(8.0) - color) * (vec4(1.0) - vec4(sample_dist * 0.5));\ngl_FragColor = vec4( mix(color.rgb * color.rgb * vec3(colorOffset) + color.rgb, color.ggg * colorFactor - vec3( vingenettingDarkening ), vec3( dot( uv, uv ))), 1.0 );\n}"});
        var n = new THREE.Mesh(new THREE.Plane(b.baseWidth, b.baseHeight), f);
        n.position.z = -500;
        c.addObject(n)
    };
    this.update = function () {
        h.render(c, g)
    }
};
PaintEffect.prototype = new SequencerItem;
PaintEffect.prototype.constructor = PaintEffect;
var PaintEffectPrairie = function (b) {
    SequencerItem.call(this);
    var g, c, f, h = b.renderer, m = b.renderTarget;
    this.init = function () {
        g = new THREE.Camera;
        g.projectionMatrix = THREE.Matrix4.makeOrtho(b.baseWidth / -2, b.baseWidth / 2, b.baseHeight / 2, b.baseHeight / -2, -1E4, 1E4);
        g.position.z = 100;
        c = new THREE.Scene;
        this.uniforms = {map: {type: "t", value: 0, texture: m}, screenWidth: {type: "f", value: b.baseWidth}, screenHeight: {type: "f", value: b.baseHeight}, vingenettingOffset: {type: "f", value: 0.94}, vingenettingDarkening: {type: "f", value: 0.36}, colorOffset: {type: "f", value: 0}, colorFactor: {type: "f", value: 0}, colorBrightness: {type: "f", value: 0}, sampleDistance: {type: "f", value: 0.49}, waveFactor: {type: "f", value: 0.00161}, colorA: {type: "v3", value: new THREE.Vector3(1, 1, 1)}, colorB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}, colorC: {type: "v3", value: new THREE.Vector3(1, 1, 1)}};
        f = new THREE.MeshShaderMaterial({uniforms: this.uniforms, vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "uniform float screenWidth;\nuniform float screenHeight;\nuniform float vingenettingOffset;\nuniform float vingenettingDarkening;\nuniform float colorOffset;\nuniform float colorFactor;\nuniform float sampleDistance;\nuniform float colorBrightness;\nuniform float waveFactor;\nuniform vec3 colorA;\nuniform sampler2D map;\nvarying vec2 vUv;\nvoid main() {\nvec4 color, org, tmp, add;\nfloat sample_dist, f;\nvec2 vin;\nvec2 uv = vUv;\nadd = color = org = texture2D( map, uv );\nvin = (uv - vec2(0.5)) * vec2( 1.55 /*vingenettingOffset * 2.0*/);\nsample_dist =(dot( vin, vin ) * 2.0);\nf = (waveFactor * 100.0 + sample_dist) * sampleDistance * 4.0;\nvec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2(f);\nadd += tmp = texture2D( map, uv + vec2(0.111964, 0.993712) * sampleSize);\nif( tmp.g > color.g ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.846724, 0.532032) * sampleSize);\nif( tmp.g > color.g ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.943883, -0.330279) * sampleSize);\nif( tmp.g > color.g ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.330279, -0.943883) * sampleSize);\nif( tmp.g > color.g ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.532032, -0.846724) * sampleSize);\nif( tmp.g > color.g ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.993712, -0.111964) * sampleSize);\nif( tmp.g > color.g ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.707107, 0.707107) * sampleSize);\nif( tmp.g > color.g ) color = tmp;\nuv = (uv - vec2(0.5)) * vec2( vingenettingOffset );\ncolor = color + (add / vec4(8.0) - color) * (vec4(1.0) - vec4(sample_dist * 0.5));\ngl_FragColor = vec4( mix(color.rgb * color.rgb * vec3(colorOffset) + color.rgb, color.ggg * colorFactor - vec3( vingenettingDarkening ), vec3( dot( uv, uv ))), 1.0 );\ngl_FragColor = vec4(1.0) - (vec4(1.0) - gl_FragColor) * (vec4(1.0) - gl_FragColor);\n}"});
        var n = new THREE.Mesh(new THREE.Plane(b.baseWidth, b.baseHeight), f);
        n.position.z = -500;
        c.addObject(n)
    };
    this.update = function () {
        h.render(c, g)
    }
};
PaintEffectPrairie.prototype = new SequencerItem;
PaintEffectPrairie.prototype.constructor = PaintEffectPrairie;
var PaintEffectDunes = function (b) {
    SequencerItem.call(this);
    var g, c, f, h = b.renderer, m = b.renderTarget;
    this.init = function () {
        g = new THREE.Camera;
        g.projectionMatrix = THREE.Matrix4.makeOrtho(b.baseWidth / -2, b.baseWidth / 2, b.baseHeight / 2, b.baseHeight / -2, -1E4, 1E4);
        g.position.z = 100;
        c = new THREE.Scene;
        this.uniforms = {map: {type: "t", value: 0, texture: m}, screenWidth: {type: "f", value: b.baseWidth}, screenHeight: {type: "f", value: b.baseHeight}, vingenettingOffset: {type: "f", value: 1.2}, vingenettingDarkening: {type: "f", value: 0.64}, colorOffset: {type: "f", value: 0}, colorFactor: {type: "f", value: 0}, colorBrightness: {type: "f", value: 0}, sampleDistance: {type: "f", value: 0.4}, waveFactor: {type: "f", value: 0.00756}, colorA: {type: "v3", value: new THREE.Vector3(1, 1, 1)}, colorB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}, colorC: {type: "v3", value: new THREE.Vector3(1, 1, 1)}};
        f = new THREE.MeshShaderMaterial({uniforms: this.uniforms, vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "uniform float screenWidth;\nuniform float screenHeight;\nuniform float vingenettingOffset;\nuniform float vingenettingDarkening;\nuniform float colorOffset;\nuniform float colorFactor;\nuniform float sampleDistance;\nuniform float colorBrightness;\nuniform float waveFactor;\nuniform vec3 colorA;\nuniform sampler2D map;\nvarying vec2 vUv;\nvoid main() {\nvec4 color, org, tmp, add;\nfloat sample_dist, f;\nvec2 vin;\nvec2 uv = vUv;\nadd = color = org = texture2D( map, uv );\nvin = (uv - vec2(0.5)) * vec2(4.0);\nsample_dist =(dot( vin, vin ) * 2.0);\nf = (1.86 + sample_dist) * sampleDistance * 0.5;\nvec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2(f);\nadd += tmp = texture2D( map, uv + vec2(0.111964, 0.993712) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.846724, 0.532032) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.943883, -0.330279) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.330279, -0.943883) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.532032, -0.846724) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.993712, -0.111964) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.707107, 0.707107) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nuv = (uv - vec2(0.5)) * vec2( 0.94/* vingenettingOffset*/ );\ncolor = (add / vec4(8.0));\ngl_FragColor = vec4( mix(color.rgb, color.ggg * colorFactor /* - vec3( vingenettingDarkening )*/, vec3( dot( uv, uv ))), 1.0 );\ngl_FragColor = vec4(1.0) - (vec4(1.0) - gl_FragColor) * (vec4(1.0) - gl_FragColor);\n}"});
        var n = new THREE.Mesh(new THREE.Plane(b.baseWidth, b.baseHeight), f);
        n.position.z = -500;
        c.addObject(n)
    };
    this.update = function () {
        h.render(c, g)
    }
};
PaintEffectDunes.prototype = new SequencerItem;
PaintEffectDunes.prototype.constructor = PaintEffectDunes;
var PaintEffectVideo = function (b) {
    SequencerItem.call(this);
    var g, c, f, h = b.renderer, m = b.renderTarget;
    this.init = function () {
        g = new THREE.Camera;
        g.projectionMatrix = THREE.Matrix4.makeOrtho(b.baseWidth / -2, b.baseWidth / 2, b.baseHeight / 2, b.baseHeight / -2, -1E4, 1E4);
        g.position.z = 100;
        c = new THREE.Scene;
        this.uniforms = {map: {type: "t", value: 0, texture: m}, screenWidth: {type: "f", value: b.baseWidth}, screenHeight: {type: "f", value: b.baseHeight}, vingenettingOffset: {type: "f", value: 0.87}, vingenettingDarkening: {type: "f", value: 0.5}, colorOffset: {type: "f", value: 0.95}, colorFactor: {type: "f", value: 0}, colorBrightness: {type: "f", value: 0}, sampleDistance: {type: "f", value: 0}, waveFactor: {type: "f", value: 0}, colorA: {type: "v3", value: new THREE.Vector3(1, 1, 1)}, colorB: {type: "v3", value: new THREE.Vector3(1, 1, 1)}, colorC: {type: "v3", value: new THREE.Vector3(1, 1, 1)}};
        f = new THREE.MeshShaderMaterial({uniforms: this.uniforms, vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "uniform float screenWidth;\nuniform float screenHeight;\nuniform float vingenettingOffset;\nuniform float vingenettingDarkening;\nuniform float colorOffset;\nuniform float colorFactor;\nuniform float sampleDistance;\nuniform float colorBrightness;\nuniform float waveFactor;\nuniform vec3 colorA;\nuniform sampler2D map;\nvarying vec2 vUv;\nvoid main() {\nvec4 color, org, tmp, add;\nfloat sample_dist, f;\nvec2 vin;\nvec2 uv = vUv;\nadd = color = org = texture2D( map, uv );\nvin = (uv - vec2(0.5)) * vec2( 1.4 /*vingenettingOffset * 2.0*/);\nsample_dist =(dot( vin, vin ) * 2.0);\nf = (waveFactor * 100.0 + sample_dist) * sampleDistance * 4.0;\nvec2 sampleSize = vec2(  1.0 / screenWidth, 1.0 / screenHeight ) * vec2(f);\nadd += tmp = texture2D( map, uv + vec2(0.111964, 0.993712) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.846724, 0.532032) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.943883, -0.330279) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(0.330279, -0.943883) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.532032, -0.846724) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.993712, -0.111964) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2(-0.707107, 0.707107) * sampleSize);\nif( tmp.b < color.b ) color = tmp;\nuv = (uv - vec2(0.5)) * vec2( vingenettingOffset );\ncolor = color * vec4(2.0) - (add / vec4(8.0));\ncolor = color + (add / vec4(8.0) - color) * (vec4(1.0) - vec4(sample_dist * 0.5));\ngl_FragColor = vec4( mix(color.rgb * color.rgb * vec3(colorOffset) + color.rgb, color.ggg * colorFactor - vec3( vingenettingDarkening ), vec3( dot( uv, uv ))), 1.0 );\n}"});
        var n = new THREE.Mesh(new THREE.Plane(b.baseWidth, b.baseHeight), f);
        n.position.z = -500;
        c.addObject(n)
    };
    this.update = function () {
        h.render(c, g)
    }
};
PaintEffectVideo.prototype = new SequencerItem;
PaintEffectVideo.prototype.constructor = PaintEffectVideo;
var PaintDarkEffect = function (b) {
    SequencerItem.call(this);
    var g, c, f, h, m = b.renderer, n = b.renderTarget;
    this.init = function () {
        g = new THREE.Camera;
        g.projectionMatrix = THREE.Matrix4.makeOrtho(b.baseWidth / -2, b.baseWidth / 2, b.baseHeight / 2, b.baseHeight / -2, -1E4, 1E4);
        g.position.z = 100;
        c = new THREE.Scene;
        h = {map: {type: "t", value: 0, texture: n}};
        f = new THREE.MeshShaderMaterial({uniforms: h, vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D map;\nvarying vec2 vUv;\nvoid main() {\nvec4 color, tmp, add;\nvec2 uv = vUv + vec2( sin( vUv.y * 100.0 ), sin( vUv.x * 100.0 )) * 0.0005;\ncolor = texture2D( map, uv );\nadd = tmp = texture2D( map, uv + vec2( 0.0015, 0.0015 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( -0.0015, 0.0015 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( -0.0015, -0.0015 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( 0.0015, -0.0015 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( 0.002, 0.0 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( -0.002, 0.0 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( 0, 0.002 ));\nif( tmp.r < color.r ) color = tmp;\nadd += tmp = texture2D( map, uv + vec2( 0, -0.002 ));\nif( tmp.r < color.r ) color = tmp;\nuv = (uv - vec2(0.5)) * vec2(0.7);\ngl_FragColor = vec4(mix(color.rgb * color.rgb * vec3(1.8), color.ggg * color.ggg - vec3(0.4), vec3(dot(uv, uv))), 1.0);\n}"});
        var p = new THREE.Mesh(new THREE.Plane(b.baseWidth, b.baseHeight), f);
        p.position.z = -500;
        c.addObject(p)
    };
    this.update = function () {
        m.render(c, g, n, !1)
    }
};
PaintDarkEffect.prototype = new SequencerItem;
PaintDarkEffect.prototype.constructor = PaintDarkEffect;
var OverlayEffect = function (b, g) {
    SequencerItem.call(this);
    var c, f, h, m = b.renderer, n = b.renderTarget;
    this.init = function () {
        c = new THREE.Camera(60, 1, 1, 1E4);
        c.position.z = 2;
        f = new THREE.Scene;
        this.material = new THREE.MeshBasicMaterial({color: 16777215, map: g, transparent: !0});
        h = new THREE.Mesh(new THREE.Plane(3, 3), this.material);
        f.addObject(h)
    };
    this.update = function () {
        this.material.opacity = 0.25;
        m.render(f, c, n)
    }
};
OverlayEffect.prototype = new SequencerItem;
OverlayEffect.prototype.constructor = OverlayEffect;
var PointerEffect = function (b, g) {
    SequencerItem.call(this);
    this.show = function () {
        document.body.style.cursor = g ? 'url("/files/mouse_ring.png"), auto' : "none"
    };
    this.hide = function () {
        document.body.style.cursor = "auto"
    }
};
PointerEffect.prototype = new SequencerItem;
PointerEffect.prototype.constructor = PointerEffect;
var PointerImageEffect = function (b, g) {
    SequencerItem.call(this);
    var c = 0, f = 0, h = 14, m = document.createElement("div");
    m.setAttribute("style", "width: 8px; height: 56px;");
    m.innerHTML = "<img src = '" + g + "' alt = 'mouse' />";
    var n = document.createElement("div");
    n.setAttribute("style", "width: 8px; height: 14px;");
    n.style.position = "absolute";
    n.style.zIndex = 1E3;
    n.style.display = "none";
    n.style.cursor = "none";
    n.style.overflow = "hidden";
    n.appendChild(m);
    document.body.appendChild(n);
    this.show = function () {
        document.body.style.cursor = "none !important";
        n.style.display = "block"
    };
    b.signals.mousemoved.add(function () {
        var p = b.mouse.x - c, o = b.mouse.y - f;
        if (p > 0)if (o > 0)h = -28; else o < 0 && (h = -14); else if (p < 0)if (o > 0)h = -42; else o < 0 && (h = 0)
    });
    this.hide = function () {
        n.style.display = "none";
        document.body.style.cursor = "auto !important"
    };
    this.update = function () {
        m.style.marginTop = h + "px";
        n.style.left = b.mouse.x - 4 + "px";
        n.style.top = b.mouse.y - 7 + "px";
        c = b.mouse.x;
        f = b.mouse.y
    }
};
PointerImageEffect.prototype = new SequencerItem;
PointerImageEffect.prototype.constructor = PointerImageEffect;
var CityWorld = function (b) {
    var g = this;
    this.scene = new THREE.Scene;
    this.scene.collisions = new THREE.CollisionSystem;
    g.portals = [];
    this.scene.fog = new THREE.FogExp2(5461848, 4.7E-5);
    this.scene.addLight(new THREE.AmbientLight(3359795));
    var c = new THREE.DirectionalLight(16777215);
    c.castShadow = !1;
    this.scene.addLight(c);
    var f = new THREE.DirectionalLight(16777215);
    f.castShadow = !1;
    this.scene.addLight(f);
    var h = {fogDensity: 2.64E-5, fogColor: {h: 0, s: 0.3235, v: 0.347}, ambientLight: {h: 0.465, s: 0.494, v: 0}, directionalLight1: {h: 0.565, s: 0.329, v: 0.841, x: 0.5176767580772196, y: 0.7138857482214859, z: -0.4715696264952919, phi: 0.7757647058823531, theta: -0.7388235294117651}, directionalLight2: {h: 0, s: 0, v: 0.18235294117647058, x: -0.8372195027957865, y: -0.4114343306911316, z: -0.3602572631705248, phi: -1.9948235294117649, theta: 0.4063529411764706}, effectEnabled: !0, effectType: "noise", postprocessingNoise: {nIntensity: 0.2411764705882353, sIntensity: 0, sCount: 4096}, postprocessingBloom: {opacity: 1}, flarex: 18.52941176470588, flarey: 358, flyCamera: {position: {x: 16.574202591686277, y: 462.26953453589, z: -10184.707948888321}, target: {x: 13.49395371115724, y: 486.5924391778843, z: -10281.655916255411}}, sceneScale: 1};
    this.scene.fog.color.setHSV(h.fogColor.h, h.fogColor.s, h.fogColor.v);
    this.scene.fog.density = h.fogDensity;
    c.color.setHSV(h.directionalLight1.h, h.directionalLight1.s, h.directionalLight1.v);
    f.color.setHSV(h.directionalLight2.h, h.directionalLight2.s, h.directionalLight2.v);
    c.position.set(h.directionalLight1.x, h.directionalLight1.y, h.directionalLight1.z);
    f.position.set(h.directionalLight2.x, h.directionalLight2.y, h.directionalLight2.z);
    g.scene.addChild(initLensFlares(new THREE.Vector3(0, 0, -5E3), 20, 358));
    c = new THREE.SceneLoaderAjax;
    c.onLoadStart = function () {
        b.signals.loadItemAdded.dispatch()
    };
    c.onLoadComplete = function () {
        b.signals.loadItemCompleted.dispatch()
    };
    c.load("files/models/city/City.js", function (n) {
        var p = n.scene;
        hideColliders(p);
        makeSceneStatic(p);
        preInitScene(n, b.renderer);
        p.scale.set(0.1, 0.1, 0.1);
        p.updateMatrix();
        g.scene.addChild(p);
        p.collisions && g.scene.collisions.merge(p.collisions);
        TriggerUtils.setupCityTriggers(n);
        n.objects.Backdrop_City.materials[0].map.wrapS = THREE.RepeatWrapping;
        n.objects.Backdrop_City.materials[0].map.wrapT = THREE.RepeatWrapping;
        g.portals.push({object: n.objects.Portal, radius: 150, currentDistance: 9999999});
        g.portals.push({object: n.objects["Portal.001"], radius: 150, currentDistance: 9999999});
        g.portals.push({object: n.objects["Portal.002"], radius: 150, currentDistance: 9999999});
        g.portals.push({object: n.objects["Portal.003"], radius: 150, currentDistance: 9999999});
        applyCityShader(n, ["Backdrop_City"]);
        g.scene.update(undefined, !0)
    });
    var m;
    this.update = function (n, p, o) {
        m = p.matrixWorld.getPosition();
        TriggerUtils.effectorRadius = 80;
        TriggerUtils.update("city");
        if (o)for (n = 0; n < g.portals.length; n++) {
            g.portals[n].currentDistance = g.portals[n].object.matrixWorld.getPosition().distanceTo(m);
            g.portals[n].currentDistance < g.portals[n].radius && b.signals.startexploration.dispatch("dunes")
        }
    }
}, PrairieWorld = function (b, g, c) {
    var f = this;
    this.scene = new THREE.Scene;
    this.scene.collisions = new THREE.CollisionSystem;
    this.portals = [];
    this.cows = {};
    this.scene.fog = new THREE.FogExp2(16777215, 0);
    this.scene.fog.color.setHSV(0.559, 0.741, 0.588);
    this.ambient = new THREE.AmbientLight(2232576);
    this.ambient.color.setHSV(0.235, 0.341, 0.141);
    this.scene.addLight(this.ambient);
    this.directionalLight1 = new THREE.DirectionalLight(16772829);
    this.directionalLight1.position.set(0.196, 0.93, -0.3);
    this.directionalLight1.color.setHSV(0, 0, 0.876);
    this.scene.addLight(this.directionalLight1);
    this.directionalLight2 = new THREE.DirectionalLight(16772829);
    this.directionalLight2.position.set(0.19, -0.31, -0.93);
    this.directionalLight2.color.setHSV(0.347, 0.51, 0.135);
    this.scene.addLight(this.directionalLight2);
    this.settings = {fogDensity: 2.0588E-5, fogColor: {h: 0.5235, s: 0.5, v: 1}, ambientLight: {h: 0.465, s: 0, v: 0}, directionalLight1: {h: 0.565, s: 0, v: 0.5058823529411764, x: 0.7648718326037581, y: -0.5885011172553458, z: 0.2619876231400604, phi: 0.6649411764705881, theta: 0.9235294117647057}, directionalLight2: {h: 0, s: 0, v: 0.4235294117647059, x: -0.4535568600884794, y: 0.8775825618903728, z: -0.1553545034191468, phi: -1.588470588235294, theta: 0.6279999999999997}, effectEnabled: !0, effectType: "bloom", postprocessingNoise: {nIntensity: 1, sIntensity: 0.05, sCount: 4096}, postprocessingBloom: {opacity: 1}, flarex: 12.176470588235293, flarey: 304.94117647058823, flyCamera: {position: {x: 225.04246271915372, y: 2.9824761744404835, z: -95.92308075145283}, target: {x: 318.61355381056615, y: -32.161822413807094, z: -92.86870868788631}}, sceneScale: 1};
    this.directionalLight1.color.setHSV(this.settings.directionalLight1.h, this.settings.directionalLight1.s, this.settings.directionalLight1.v);
    this.directionalLight2.color.setHSV(this.settings.directionalLight2.h, this.settings.directionalLight2.s, this.settings.directionalLight2.v);
    this.directionalLight1.position.set(this.settings.directionalLight1.x, this.settings.directionalLight1.y, this.settings.directionalLight1.z);
    this.directionalLight2.position.set(this.settings.directionalLight2.x, this.settings.directionalLight2.y, this.settings.directionalLight2.z);
    ROME.TrailShader.init();
    g = initLensFlares(new THREE.Vector3(0, 0, -3E3), 14, 311);
    f.scene.addChild(g);
    var h = THREE.ImageUtils.loadTexture("/files/textures/trailMarkTexture.jpg");
    g = new THREE.SceneLoaderAjax;
    g.onLoadStart = function () {
        b.signals.loadItemAdded.dispatch()
    };
    g.onLoadComplete = function () {
        b.signals.loadItemCompleted.dispatch()
    };
    g.load("/files/models/prairie/Prairie.js", function (m) {
        var n = m.scene;
        hideColliders(n);
        makeSceneStatic(n);
        ROME.TrailShaderUtils.setMaterials([m.objects.Ground], 2500, h, b.renderer);
        TriggerUtils.setupPrairieTriggers(m);
        f.scene.addChild(n);
        m.objects.Backdrop.materials[0].map.wrapS = THREE.RepeatWrapping;
        m.objects.Backdrop.materials[0].map.wrapT = THREE.RepeatWrapping;
        f.portals.push({object: m.objects.Portal, radius: 120, currentDistance: 9999999});
        f.portals.push({object: m.objects["Portal.001"], radius: 120, currentDistance: 9999999});
        f.portals[0].object.visible = !1;
        f.portals[1].object.visible = !1;
        preInitScene(m, b.renderer);
        n.collisions && f.scene.collisions.merge(n.collisions);
        (new THREE.JSONLoaderAjax).load({model: "/files/models/soup/cow.js", callback: function (p) {
            for (var o in m.objects) {
                var t = m.objects[o];
                if (o.toLowerCase().indexOf("cow") >= 0) {
                    t.visible = !1;
                    var u = ROME.Animal(p, !0), w = u.mesh;
                    w.rotation.set(-1.57, 0, 3.14);
                    w.matrixAutoUpdate = !1;
                    w.update();
                    w.updateMatrix();
                    t.addChild(w);
                    u.play(u.availableAnimals[0], u.availableAnimals[0]);
                    if (f.cows[o] === undefined)f.cows[o] = {alive: u, dead: null, position: new THREE.Vector3}; else f.cows[o].alive = u;
                    f.cows[o].position.set(t.matrixWorld.n14, t.matrixWorld.n24, t.matrixWorld.n34)
                } else if (o.toLowerCase().indexOf("carcass") >= 0) {
                    t.visible = !1;
                    u = o.replace("Carcass", "Cow");
                    if (f.cows[u] === undefined)f.cows[u] = {alive: null, dead: t, position: new THREE.Vector3}; else f.cows[u].dead = t
                }
            }
        }});
        f.scene.update(undefined, !0);
        c()
    });
    this.update = function (m, n, p) {
        ROME.TrailShaderUtils.updateLava(m * 1.0E-4, b.lavatrailx, -b.lavatrailz);
        ROME.TrailShaderUtils.setMarkAtWorldPosition(b.lavatrailx, -b.lavatrailz);
        TriggerUtils.effectorRadius = 40;
        TriggerUtils.update("prairie");
        if (p) {
            m = n.matrixWorld.getPosition();
            for (n = 0; n < f.portals.length; n++) {
                f.portals[n].currentDistance = f.portals[n].object.matrixWorld.getPosition().distanceTo(m);
                f.portals[n].currentDistance < f.portals[n].radius && b.signals.startexploration.dispatch("dunes")
            }
        }
        for (var o in f.cows) {
            m = f.cows[o];
            if (m.position.distanceTo(b.prairieSoupHead) < 15) {
                m.alive.mesh.visible = !1;
                m.dead.visible = !0
            }
        }
    }
}, DunesWorld = function (b) {
    function g(W) {
        O = !1;
        for (var ea = 0, ma = W.length; ea < ma; ea++) {
            var oa = new UgcObject(JSON.parse(W[ea].data)), ya = W[ea].category;
            if (!oa.isEmpty()) {
                oa = oa.getMesh();
                oa.category = ya;
                oa.visible = !1;
                S.push(oa);
                v = !0
            }
        }
    }

    function c(W, ea) {
        var ma = W.scene;
        applyDunesShader(W);
        p(ma);
        n(ma, !0);
        H[ea] = ma.collisions.colliders[0].mesh;
        H[ea].rotation.x = -90 * Math.PI / 180;
        H[ea].scale.set(u, u, u);
        t.scene.addChild(H[ea]);
        t.scene.collisions.merge(ma.collisions);
        for (var oa = 0; oa < G[ea]; oa++)C[ea].push(f(ma));
        t.scene.update(undefined, !0)
    }

    function f(W) {
        for (var ea = 0; ea < W.children.length; ea++)if (!W.children[ea].__isCollider) {
            W = W.children[ea];
            W = new THREE.Mesh(W.geometry, W.materials);
            W.rotation.x = -90 * Math.PI / 180;
            W.scale.set(u, u, u);
            t.scene.addChild(W);
            return W
        }
    }

    function h(W) {
        var ea = W.scene;
        ea.scale.set(u, u, u);
        ea.matrixAutoUpdate = !0;
        p(ea);
        n(ea, !0);
        preInitScene(W, b.renderer);
        t.scene.addChild(ea);
        ea.collisions && t.scene.collisions.merge(ea.collisions);
        for (var ma in W.objects)if (ma.toLowerCase().indexOf("cloud") >= 0) {
            applyCloudsShader(W.objects[ma], CloudsShader);
            W.objects[ma].position.z += 4E3;
            W.objects[ma].updateMatrix();
            W.objects[ma].matrixAutoUpdate = !1
        }
        return ea
    }

    function m(W, ea) {
        return Math.round(Math.sin(W * 0.0010) * Math.cos(ea * 0.0050) * 4) * (Math.PI / 2)
    }

    function n(W, ea) {
        THREE.SceneUtils.traverseHierarchy(W, function (ma) {
            if (!ma.__isCollider)ma.visible = ea
        })
    }

    function p(W) {
        THREE.SceneUtils.traverseHierarchy(W, function (ea) {
            for (var ma = W.collisions.colliders, oa = 0; oa < ma.length; oa++)if (ma[oa].mesh == ea)ea.__isCollider = !0
        })
    }

    function o(W) {
        W.state = 0;
        W.radius *= u;
        b.influenceSpheres.push(W);
        W.type === 0 && t.portals.push(W)
    }

    var t = this, u = 0.2, w = 29990 * u;
    t.scale = u;
    t.portals = [];
    b.influenceSpheres = [];
    b.cameraSlowDown = !1;
    t.scene = new THREE.Scene;
    t.scene.collisions = new THREE.CollisionSystem;
    t.scene.fog = new THREE.FogExp2(16777215, 2.75E-6);
    t.scene.fog.color.setHSV(0.576, 0.382, 0.9);
    var x = new THREE.AmbientLight(2232576), y = new THREE.DirectionalLight(16772829), z = new THREE.DirectionalLight(16772829);
    t.ambient = x;
    t.directionalLight1 = y;
    t.directionalLight2 = z;
    t.skyWhite = 1;
    x.color.setHSV(0, 0, 0.1);
    y.position.set(0.81, 0.31, -0.5);
    y.color.setHSV(0.088, 0, 1);
    z.position.set(0.094, 0.98, 0.158);
    z.color.setHSV(0, 0, 0.86);
    t.scene.addLight(x);
    t.scene.addLight(y);
    t.scene.addLight(z);
    t.lensFlare = null;
    t.lensFlareRotate = null;
    x = initLensFlares(new THREE.Vector3(-5500, -2500, -1E4), 0, 0);
    t.scene.addChild(x);
    t.lensFlareRotate = x;
    t.lensFlare = x.children[0];
    DunesShader.init();
    var D = new THREE.Object3D, B = new THREE.Object3D, A = WaterfallShader.createWaterfall(0), E = WaterfallShader.createWaterfall(1);
    t.scene.addChild(A);
    t.scene.addChild(E);
    var C = [
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ], H = [], G = [0, 0, 0, 0, 1, 1, 1], I = [], V;
    for (x = 0; x < 5; x++) {
        z = [];
        I.push(z);
        for (y = 0; y < 5; y++)if (y === 0 && x === 0)z.push(4); else if (y === 3 && x === 4)z.push(5); else if (y === 1 && x === 3)z.push(6); else if (y === 4 && x === 4) {
            z.push(0);
            G[0]++
        } else if (y === 0 && x === 4) {
            z.push(0);
            G[0]++
        } else if (y === 1 && x === 4) {
            z.push(2);
            G[2]++
        } else {
            V = Math.floor(Math.random() * 3.99999);
            z.push(V);
            G[V]++
        }
    }
    var $ = new THREE.Mesh(new THREE.Cube(5E4, 5E4, 5E4), undefined);
    $.flipSided = !0;
    applyDunesShader({objects: {skydome: $}});
    t.scene.addChild($);
    x = new THREE.SceneLoaderAjax;
    x.onLoadStart = function () {
        b.signals.loadItemAdded.dispatch()
    };
    x.onLoadComplete = function () {
        b.signals.loadItemCompleted.dispatch()
    };
    x.load("/files/models/dunes/D_tile_walk.js", function (W) {
        applyDunesShader(W);
        C[4][0] = h(W);
        t.scene.update(undefined, !0)
    });
    x.load("/files/models/dunes/D_tile_prairie.js", function (W) {
        applyDunesShader(W, {D_tile_Prairie_Collis: !0, D_tile_Prairie_Island: !0}, {"D_tile_Prairie_Is.000": -0.05}, {D_tile_Prairie_Water: 0.65});
        C[5][0] = h(W);
        D.position.set(-5165.693848, 1024.796875, 18247.871094);
        W.scene.addChild(D);
        o({name: "prairiePortal", object: W.empties.Prairie_Portal, radius: 2E3, type: 0, destination: "prairie"});
        o({name: "prairieSlowDown", object: W.empties.Prairie_Center, radius: 1E4, type: 1});
        t.scene.update(undefined, !0)
    });
    x.load("/files/models/dunes/D_tile_city.js", function (W) {
        applyDunesShader(W, {D_tile_City_Collision: !0, D_tile_City_Island_Co: !0}, {D_tile_City_Island: -1}, {D_tile_City_Water: 0.65});
        C[6][0] = h(W);
        B.position.set(750.267456, 709.979614, 29121.154297);
        W.scene.addChild(B);
        o({name: "cityPortal", object: W.empties.City_Portal, radius: 3500, type: 0, destination: "city"});
        o({name: "citySlowDown", object: W.empties.City_Center, radius: 12E3, type: 1});
        t.scene.update(undefined, !0)
    });
    x.load("/files/models/dunes/D_tile_1.js", function (W) {
        c(W, 0)
    });
    x.load("/files/models/dunes/D_tile_2.js", function (W) {
        c(W, 1)
    });
    x.load("/files/models/dunes/D_tile_3.js", function (W) {
        c(W, 2)
    });
    x.load("/files/models/dunes/D_tile_4.js", function (W) {
        c(W, 3)
    });
    x = new THREE.JSONLoaderAjax;
    x.load({model: "/files/models/dunes/D_tile_1_clouds.js", callback: function (W) {
        for (var ea = new THREE.MeshFaceMaterial, ma, oa, ya = 0; ya < 100; ya++) {
            var za = new THREE.Mesh(W, ea);
            ma = 15E4 * (Math.random() - 0.5);
            oa = 15E4 * (Math.random() - 0.5);
            za.scale.set(u, u, u);
            za.position.set(ma, 3E3, oa);
            za.updateMatrix();
            za.matrixAutoUpdate = !1;
            applyCloudsShader(za, CloudsShader);
            t.scene.addChild(za)
        }
    }});
    var X = new UgcHandler, P = 0, S = [], v = !1, O = !1, J = {}, T = {};
    x = new THREE.SphereCollider(new THREE.Vector3(0, -5E3, 0), 1);
    var K = [
        {x: -1, z: -1},
        {x: -1, z: -1},
        {x: 0, z: 1},
        {x: 0, z: 1},
        {x: 1, z: 1},
        {x: 1, z: 1},
        {x: 1, z: -1},
        {x: 1, z: -1}
    ], R = [new THREE.Vector3(w * 0.15, -1E3, -w * 1.25), new THREE.Vector3(w, -1E3, -w)], aa = [new THREE.Vector3(w * 0.15, 1E4, -w * 1.25), new THREE.Vector3(w, 1E4, -w)];
    t.scene.collisions.colliders.push(x);
    t.update = function (W, ea, ma) {
        UgcShader.update(t.skyWhite);
        var oa = ea.matrixWorld.getPosition(), ya, za = S.length, qa;
        for (ya = 0; ya < za; ya++) {
            qa = S[ya];
            qa.visible === !0 && qa.placedOnGrid && (qa.position.y += (qa.wantedY - qa.position.y) * 0.05)
        }
        var Ga = Math.floor(oa.x / (w * 3)), Da = Math.floor(oa.z / (w * 3));
        if (!T[Ga + " " + Da]) {
            T[Ga + " " + Da] = !0;
            if (!O) {
                O = !0;
                if (P < 2) {
                    X.getLatestUGOs(g, P);
                    P++
                }
            }
        }
        if (v) {
            v = !1;
            Ga = Math.floor(oa.x / w);
            Da = Math.floor(oa.z / w);
            var Ha, Ia, xa, da, ja;
            oa = K.length;
            ya = ea.matrixWorld.getColumnZ().negate();
            var pa = 3 + Math.ceil(3 * Math.atan2(ya.x, ya.z) / Math.PI);
            pa < 0 && (pa = 0);
            for (ya = 0; ya < za; ya++) {
                qa = S[ya];
                if (!qa.placedOnGrid) {
                    xa = R;
                    qa.category === "sky" && (xa = aa);
                    if (xa.length) {
                        qa.position.copy(xa.shift());
                        qa.position.x += Math.random() * 200 - 100;
                        qa.position.z += Math.random() * 200 - 100;
                        qa.rotation.set(Math.random() * 0.03, Math.random() * Math.PI, Math.random() * 0.03);
                        qa.visible = !0;
                        qa.placedOnGrid = !0;
                        qa.wantedY = qa.category === "sky" ? 2500 : -5;
                        t.scene.addChild(qa);
                        Ha = Math.floor(qa.position.x / w);
                        Ia = Math.floor(qa.position.z / w);
                        J[Ha + " " + Ia + " " + qa.category] = !0
                    } else {
                        for (ja = 0; ja < oa; ja++) {
                            Ha = xa = Ga + K[pa].x;
                            Ia = da = Da + K[pa].z;
                            xa %= 5;
                            for (da %= 5; xa < 0;)xa += 5;
                            for (; da < 0;)da += 5;
                            if (I[da][xa] < 4 && !J[Ha + " " + Ia + " " + qa.category]) {
                                J[Ha + " " + Ia + " " + qa.category] = !0;
                                break
                            }
                            pa++;
                            pa %= K.length
                        }
                        if (ja !== oa) {
                            qa.position.set(Ha * w, 0, Ia * w);
                            if (qa.category === "sky") {
                                qa.position.x += Math.random() * 200 - 100;
                                qa.position.z += Math.random() * 200 - 100;
                                qa.wantedY = 2500 + Math.random() * 1E3 - 500;
                                qa.position.y = 1E4
                            } else qa.wantedY = -5;
                            qa.rotation.set(Math.random() * 0.03, Math.random() * Math.PI, Math.random() * 0.03);
                            qa.visible = !0;
                            qa.placedOnGrid = !0;
                            qa.updateMatrix();
                            t.scene.addChild(qa)
                        }
                    }
                }
            }
        }
        t.checkInfluenceSpheres(ea, ma);
        t.updateTiles(ea);
        updateDunesShader(W, t.skyWhite);
        A.position.copy(D.matrixWorld.getPosition());
        E.position.copy(B.matrixWorld.getPosition());
        WaterfallShader.update(W, t.skyWhite);
        $.position.copy(ea.matrixWorld.getPosition());
        $.updateMatrix();
        t.lensFlareRotate.position.copy(ea.matrixWorld.getPosition());
        t.lensFlareRotate.updateMatrix()
    };
    t.checkInfluenceSpheres = function (W, ea) {
        var ma, oa, ya, za, qa = W.matrixWorld.getPosition();
        ma = 0;
        for (oa = b.influenceSpheres.length; ma < oa; ma++) {
            za = b.influenceSpheres[ma];
            ya = za.object.matrixWorld.getPosition().distanceTo(qa);
            za.currentDistance = ya;
            if (ya < za.radius)if (za.type === 0 && za.state === 0) {
                za.state = 1;
                if (ea) {
                    b.signals.showexploration.dispatch();
                    b.signals.startexploration.dispatch(za.destination, b.isExperience)
                }
            } else {
                if (za.type == 1)b.cameraSlowDown = !0
            } else {
                za.state = 0;
                b.cameraSlowDown = !1
            }
        }
    };
    t.updateTiles = function (W) {
        var ea = Math.floor(2.5), ma = W.matrixWorld.getPosition(), oa = ma.x, ya = ma.z;
        ma.addSelf(W.matrixWorld.getColumnZ().multiplyScalar(-w * 1.5));
        ma.x = Math.floor(ma.x / w);
        ma.z = Math.floor(ma.z / w);
        W = ma.x % 5;
        for (var za = ma.z % 5; W < 0;)W += 5;
        for (; za < 0;)za += 5;
        var qa, Ga, Da, Ha, Ia, xa, da, ja = [0, 0, 0, 0, 0, 0, 0], pa = [-1, -1, -1, -1];
        for (Ga = -ea; Ga < ea + 1; Ga++)for (qa = -ea; qa < ea + 1; qa++) {
            Ia = (ma.x + qa) * w;
            xa = (ma.z + Ga) * w;
            Da = (W + qa) % 5;
            for (Ha = (za + Ga) % 5; Da < 0;)Da += 5;
            for (; Ha < 0;)Ha += 5;
            da = I[Ha][Da];
            if (Da = C[da][ja[da]++]) {
                Da.position.x = Ia;
                Da.position.z = xa;
                Da.rotation.z = da !== 6 ? m(Ia, xa) : 1.5 * Math.PI
            }
            if (da < 4) {
                Da = Ia - oa;
                Ha = xa - ya;
                Da = Da * Da + Ha * Ha;
                if (pa[da] === -1 || Da < pa[da]) {
                    pa[da] = Da;
                    if (Da = H[da]) {
                        Da.position.x = Ia;
                        Da.position.z = xa;
                        Da.rotation.z = m(Ia, xa)
                    }
                }
            }
        }
    }
}, CityShaderEffectors = [new THREE.Vector4(0, 0, -1E3, 50), new THREE.Vector4(-100, 0, -1500, 150), new THREE.Vector4(100, 0, -2E3, 150), new THREE.Vector4(0, 0, -2500, 100)], CityShader = {vertexShader: "varying vec3 vColor;\nvoid main() {\nvColor = color;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "varying vec3 vColor;\nvoid main() {\nvec3 surface = vec3( 0.15 * 2.0, 0.18 * 2.0, 0.2 * 2.0 );\nfloat depth = ( gl_FragCoord.z / gl_FragCoord.w ) * 0.0001;\ngl_FragColor = vec4( surface * vColor * 2.0, 1.0 );\ngl_FragColor = vec4( mix( gl_FragColor.rgb, vec3( 0.64, 0.88, 1 ), depth ), 1.0 );\n}"};
function applyCityShader(b, g) {
    var c, f, h, m, n, p = {};
    for (c = 0; c < g.length; c++)p[g[c]] = !0;
    n = new THREE.MeshShaderMaterial({vertexShader: CityShader.vertexShader, fragmentShader: CityShader.fragmentShader, shading: THREE.FlatShading, vertexColors: THREE.VertexColors});
    for (f in b.objects) {
        m = b.objects[f];
        if (!p[f] && m.geometry && m.geometry.morphTargets.length === 0) {
            h = m.geometry;
            for (c = 0; c < h.materials.length; c++)m.materials[0] = n
        }
    }
    return n
}
var DunesShaderEffectors = {materials: []}, DunesShader = {init: function () {
    DunesShader.uniforms.surfaceImage.texture = THREE.ImageUtils.loadTexture("/files/textures/CityShader_Clouds.jpg")
}, uniforms: {surfaceImage: {type: "t", value: 0, texture: undefined}, time: {type: "f", value: 0}, skyWhite: {type: "f", value: 1}, invertLightY: {type: "f", value: 1}, fogColor: {type: "c", value: new THREE.Color}, fogDensity: {type: "f", value: 0}, enableLighting: {type: "i", value: 1}, ambientLightColor: {type: "fv", value: []}, directionalLightDirection: {type: "fv", value: []}, directionalLightColor: {type: "fv", value: []}, pointLightColor: {type: "fv", value: []}, pointLightPosition: {type: "fv", value: []}, pointLightDistance: {type: "fv1", value: []}}, vertexShader: "uniform vec3  ambientLightColor;\nuniform vec3  directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3  directionalLightDirection[ MAX_DIR_LIGHTS ];\nuniform float invertLightY;\nvarying vec3 vWorldPosition;\nvarying vec3 vColor;\nvarying vec3 vNormalsquare;\nvarying vec3 vLightWeighting;\nvarying vec3 vWorldVector;\nvoid main() {\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvColor = color;\nvLightWeighting = ambientLightColor;\nvec3 lightDir = directionalLightDirection[ 0 ];\nlightDir.y *= invertLightY;\nvec4 lDirection = viewMatrix * vec4( lightDir, 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ 0 ] * directionalLightWeighting;\nlightDir = directionalLightDirection[ 1 ];\nlightDir.y *= invertLightY;\nlDirection = viewMatrix * vec4( lightDir, 0.0 );\ndirectionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ 1 ] * directionalLightWeighting;\nvWorldPosition = vec3( objectMatrix * vec4( position, 1.0 )).xyz;\nvWorldVector = (vWorldPosition - cameraPosition) * vec3(0.01, 0.02, 0.01);\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "const   vec3 \tskyBlue = vec3( -0.37, -0.05, 0.15 );\nconst \t vec3 \tcloudMix = vec3( 0.83 * 0.83, 0.69 * 0.69, 0.51 * 0.51 );\nuniform float  skyWhite;\nuniform sampler2D surfaceImage;\nuniform float time;\nuniform vec3 fogColor;\nuniform float fogDensity;\nvarying vec3 vColor;\nvarying vec3 vLightWeighting;\nvarying vec3 vWorldPosition;\nvarying vec3 vWorldVector;\nvoid main() {\nfloat f;\nvec3 normal;\nvec3 sky_color;\nvec4 surface;\nvec4 grass;\nsurface = vec4( vColor, 1.0 );\nvec3 worldPosition = vWorldPosition * 0.0005;\ngl_FragColor = mix( surface * texture2D( surfaceImage, worldPosition.zx * vec2( 0.4 ) + vec2(time)), surface, vec4( cloudMix, 0.1 ));\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );\nconst float viewDistance = 6000.0 * 2.0;\nfloat fogFactor = clamp(( gl_FragCoord.z / gl_FragCoord.w ) / viewDistance, 0.0, 1.0 );\nfogFactor *= fogFactor;\nf = max( 0.0, normalize( vWorldVector ).y + cameraPosition.y * 0.0002 - 0.05 );\nsky_color = mix( vec3( skyWhite ), skyBlue, f );\ngl_FragColor = mix( gl_FragColor, vec4( sky_color, gl_FragColor.w ), fogFactor );\n}"};
function applyDunesShader(b, g, c, f) {
    function h(w) {
        p = new THREE.MeshShaderMaterial(o);
        p.uniforms = THREE.UniformsUtils.clone(o.uniforms);
        p.uniforms.surfaceImage.texture = o.uniforms.surfaceImage.texture;
        p.uniforms.invertLightY.value = w;
        n.materials = [p];
        DunesShaderEffectors.materials.push(p)
    }

    var m, n, p;
    c = c !== undefined ? c : {};
    g = g !== undefined ? g : {};
    f = f !== undefined ? f : {};
    var o = {uniforms: DunesShader.uniforms, vertexShader: DunesShader.vertexShader, fragmentShader: DunesShader.fragmentShader, shading: THREE.FlatShading, lights: !0, fog: !0, vertexColors: THREE.VertexColors};
    o.uniforms.surfaceImage.texture.wrapS = THREE.RepeatWrapping;
    o.uniforms.surfaceImage.texture.wrapT = THREE.RepeatWrapping;
    var t = 1, u = 1;
    for (m in b.objects)if (!g[m]) {
        n = b.objects[m];
        t = c[m] ? c[m] : 1;
        u = f[m] ? f[m] : 1;
        n.geometry && n.geometry.morphTargets.length === 0 && h(t, u)
    }
}
function updateDunesShader(b, g) {
    g = g !== undefined ? g : 1;
    var c = DunesShader.uniforms.time.value += b * 1.0E-5;
    e = 0;
    for (el = DunesShaderEffectors.materials.length; e < el; e++) {
        DunesShaderEffectors.materials[e].uniforms.time.value = c;
        DunesShaderEffectors.materials[e].uniforms.skyWhite.value = g
    }
}
WaterfallShader = {geometry: undefined, materials: [], createWaterfall: function (b) {
    if (WaterfallShader.geometry === undefined) {
        var g = new THREE.Geometry, c, f = g.faces, h = g.vertices, m, n = WaterfallShader.attributes.time.value, p = WaterfallShader.attributes.direction.value, o = WaterfallShader.attributes.darkness.value, t = WaterfallShader.attributes.size.value;
        for (c = 0; c < 800; c++) {
            f.push(new THREE.Face3(c * 4 + 0, c * 4 + 1, c * 4 + 2));
            f.push(new THREE.Face3(c * 4 + 0, c * 4 + 2, c * 4 + 3));
            f.push(new THREE.Face3(c * 4 + 0, c * 4 + 3, c * 4 + 1));
            f.push(new THREE.Face3(c * 4 + 3, c * 4 + 2, c * 4 + 1));
            p.push(new THREE.Vector3(0 + Math.random() * 0.2, 0.7 + Math.random() * 0.2, 1.3 + Math.random() * 0.2));
            p.push(new THREE.Vector3(-1 + Math.random() * 0.2, 0.7 + Math.random() * 0.2, -0.7 + Math.random() * 0.2));
            p.push(new THREE.Vector3(1 + Math.random() * 0.2, 0.7 + Math.random() * 0.2, -0.7 + Math.random() * 0.2));
            p.push(new THREE.Vector3(0 + Math.random() * 0.2, -1.3 + Math.random() * 0.2, 0 + Math.random() * 0.2));
            m = new THREE.Vertex;
            m.position.x = Math.random() * 240 - 120;
            m.position.y = -5800;
            m.position.z = Math.random() * 240 - 120;
            h.push(m);
            h.push(m);
            h.push(m);
            h.push(m);
            m = Math.random();
            n.push(m);
            n.push(m);
            n.push(m);
            n.push(m);
            m = Math.random() * 0.3 + 0.7;
            o.push(m * (Math.random() * 0.4 + 0.6));
            o.push(m * (Math.random() * 0.4 + 0.6));
            o.push(m * (Math.random() * 0.4 + 0.6));
            o.push(m * (Math.random() * 0.4 + 0.6));
            m = Math.random() * 30 + 5;
            t.push(m);
            t.push(m);
            t.push(m);
            t.push(m)
        }
        g.computeFaceNormals();
        g.computeBoundingSphere();
        g.boundingSphere.radius = 5E3;
        WaterfallShader.geometry = g
    }
    b = new THREE.MeshShaderMaterial({uniforms: WaterfallShader.uniforms(b), attributes: WaterfallShader.attributes, vertexShader: WaterfallShader.vertexShader, fragmentShader: WaterfallShader.fragmentShader, lights: !1, fog: !1});
    g = new THREE.Mesh(WaterfallShader.geometry, b);
    g.doubleSided = !0;
    WaterfallShader.materials.push(b);
    return g
}, update: function (b, g) {
    for (var c = 0; c < WaterfallShader.materials.length; c++) {
        WaterfallShader.materials[c].uniforms.globalTime.value += b * 1.2E-4;
        WaterfallShader.materials[c].uniforms.skyWhite.value = g !== undefined ? g : 1
    }
}, uniforms: function (b) {
    b = b !== undefined ? Math.max(0, Math.min(1, b)) : 0;
    return{globalTime: {type: "f", value: 0}, skyWhite: {type: "f", value: 1}, shrinkTop: {type: "f", value: b}}
}, attributes: {time: {type: "f", boundTo: "vertices", value: []}, darkness: {type: "f", boundTo: "faces", value: []}, direction: {type: "v3", boundTo: "vertices", value: []}, size: {type: "f", boundTo: "vertices", value: []}}, vertexShader: "const float \tPI \t\t\t= 3.14159265;\nconst vec3 \tBASECOLOR \t= vec3(  16.0 / 255.0,  93.0 / 255.0, 118.0 / 255.0 );\nconst vec3     HIGHLIGHT   = vec3( 235.0 / 255.0, 237.0 / 255.0, 245.0 / 255.0 );\nconst vec3 \tENDCOLOR \t= vec3( 99.00 / 255.0, 239.0 / 255.0, 253.0 / 255.0 );\nuniform \tfloat\tglobalTime;\nuniform    float   shrinkTop;\nattribute \tfloat\ttime;\nattribute \tfloat\tdarkness;\nattribute \tfloat\tsize;\nattribute \tvec3\tdirection;\nvarying \tvec3 \tvWorldVector;\nvarying \tvec3\tvColor;\nvoid main() {\nfloat localTime = time + globalTime;\nfloat modTime = mod( localTime, 1.0 );\nfloat accTime = modTime * modTime;\nvec2 pulse = vec2( sin( localTime * 2.0 ) * 20.0, cos( localTime * 2.0 ) * 20.0 );\nvColor = mix( BASECOLOR * darkness, ENDCOLOR * darkness, modTime );\nvColor = mix( vColor, HIGHLIGHT, 1.0 - smoothstep( 0.0, 0.25, abs( modTime - ( sin( globalTime ) * 0.2 * darkness + 0.5 ))));\nvec3 animated = vec3( position.x + pulse.x, position.y * accTime, position.z + pulse.y );\nanimated.x -= ( 1.0 - accTime ) * shrinkTop * animated.x;\nanimated.z -= ( 1.0 - accTime ) * shrinkTop * animated.z;\nvec3 rotatedDirection;\nfloat rotation = modTime * size;\nfloat cosRot = cos( rotation );\nfloat sinRot = sin( rotation );\nrotatedDirection.x = ( cosRot * direction.x - sinRot * direction.y );\nrotatedDirection.y = ( sinRot * direction.x + cosRot * direction.y );\nrotatedDirection.z = direction.z;\nanimated += rotatedDirection * size * ( sin( localTime * 150.0 ) * 0.1 + 1.1 );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( animated, 1.0 );\nvWorldVector = ( vec3( objectMatrix * vec4( animated, 1.0 )).xyz - cameraPosition ) * vec3( 0.01, 0.02, 0.01 );\n}", fragmentShader: "const   \tvec3 \tskyBlue = vec3( -0.37, -0.05, 0.15 );\nconst \t \tvec3 \tcloudMix = vec3( 0.83 * 0.83, 0.69 * 0.69, 0.51 * 0.51 );\nuniform \tfloat \tskyWhite;\nvarying \tvec3 \tvWorldVector;\nvarying \tvec3\tvColor;\nvoid main() {\nfloat f;\nvec3 normal;\nvec3 sky_color;\nconst float viewDistance = 6000.0 * 2.0;\nfloat fogFactor = clamp(( gl_FragCoord.z / gl_FragCoord.w ) / viewDistance, 0.0, 1.0 );\nfogFactor *= fogFactor;\nf = max( 0.0, normalize( vWorldVector ).y + cameraPosition.y * 0.0002 - 0.05 );\nsky_color = mix( vec3( skyWhite ), skyBlue, f );\ngl_FragColor = vec4( vColor, 1.0 );\ngl_FragColor = mix( gl_FragColor, vec4( sky_color, gl_FragColor.w ), fogFactor );\n}"};
var CloudsShader = {uniforms: {fogColor: {type: "c", value: new THREE.Color}, fogDensity: {type: "f", value: 0}, enableLighting: {type: "i", value: 1}, ambientLightColor: {type: "fv", value: []}, directionalLightDirection: {type: "fv", value: []}, directionalLightColor: {type: "fv", value: []}, pointLightColor: {type: "fv", value: []}, pointLightPosition: {type: "fv", value: []}, pointLightDistance: {type: "fv1", value: []}}, vertexShader: "uniform vec3 ambientLightColor;\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\nvarying vec3 vWorldPosition;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying vec3 vNormalsquare;\nvarying vec3 vLightWeighting;\nvarying vec3 vWorldVector;\nvoid main() {\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormalsquare = transformedNormal * transformedNormal;\nvNormal = transformedNormal;\nvColor = color;\nvLightWeighting = ambientLightColor;\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ 0 ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ 0 ] * directionalLightWeighting;\nlDirection = viewMatrix * vec4( directionalLightDirection[ 1 ], 0.0 );\ndirectionalLightWeighting = dot( transformedNormal, normalize( lDirection.xyz ) ) * 0.5 + 0.5;\nvLightWeighting += directionalLightColor[ 1 ] * directionalLightWeighting;\nvWorldPosition = vec3( objectMatrix * vec4( position, 1.0 )).xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\nvWorldVector = ( vWorldPosition - cameraPosition ) * vec3( 0.01, 0.02, 0.01 );\n}", fragmentShader: "const vec3 skyBlue = vec3( -0.37, -0.05, 0.15 );\nuniform vec3 fogColor;\nuniform float fogDensity;\nvarying vec3 vWorldPosition;\nvarying vec3 vColor;\nvarying vec3 vNormal;\nvarying vec3 vNormalsquare;\nvarying vec3 vLightWeighting;\nuniform vec3 vectorA;\nuniform vec3 vectorB;\nuniform vec3 vectorC;\nvarying vec3 vWorldVector;\nvoid main() {\nfloat f;\nvec3 normal;\nvec3 sky_color;\ngl_FragColor = vec4( vec3( vLightWeighting ) * vec3( 0.9, 0.5, 0.3 ) + vec3( 0.7, 0.6, 0.6 ), vLightWeighting * 0.95 + 0.05 );\nconst float viewDistance = 6000.0 * 2.0;\nfloat fogFactor = clamp(( gl_FragCoord.z / gl_FragCoord.w ) / viewDistance, 0.0, 1.0 );\nfogFactor *= fogFactor;\nf = max( 0.0, normalize( vWorldVector ).y + cameraPosition.y * 0.0002 - 0.05 );\nsky_color = mix( vec3( 1.0 ), skyBlue, f );\ngl_FragColor = mix( gl_FragColor, vec4( sky_color, gl_FragColor.a ), fogFactor );\n}"};
function applyCloudsShader(b, g) {
    var c = {uniforms: g.uniforms, vertexShader: g.vertexShader, fragmentShader: g.fragmentShader, shading: THREE.FlatShading, lights: !0, fog: !0, vertexColors: THREE.VertexColors}, f = new THREE.MeshShaderMaterial(c);
    f.uniforms = THREE.UniformsUtils.clone(c.uniforms);
    b.materials[0] = f
}
var UgcShader = {update: function (b) {
    b = b !== undefined ? Math.max(0, Math.min(1, b)) : 1;
    for (var g = 0; g < UgcShader.savedUniforms.length; g++)UgcShader.savedUniforms[g].skyWhite.value = b
}, savedUniforms: [], uniforms: function () {
    var b = {skyWhite: {type: "f", value: 1}, invertLightY: {type: "f", value: 1}, fogColor: {type: "c", value: new THREE.Color}, fogDensity: {type: "f", value: 0}, enableLighting: {type: "i", value: 1}, ambientLightColor: {type: "fv", value: []}, directionalLightDirection: {type: "fv", value: []}, directionalLightColor: {type: "fv", value: []}, pointLightColor: {type: "fv", value: []}, pointLightPosition: {type: "fv", value: []}, pointLightDistance: {type: "fv1", value: []}};
    UgcShader.savedUniforms.push(b);
    return b
}, vertexShader: "uniform vec3  ambientLightColor;\nuniform vec3  directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3  directionalLightDirection[ MAX_DIR_LIGHTS ];\nuniform float invertLightY;\nvarying vec3 vWorldPosition;\nvarying vec3 vColor;\nvarying vec3 vNormalsquare;\nvarying vec3 vLightWeighting;\nvarying vec3 vWorldVector;\nvoid main() {\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormalsquare = transformedNormal * transformedNormal;\nvColor = color;\nvLightWeighting = ambientLightColor;\nvec3 lightDir = directionalLightDirection[ 0 ];\nlightDir.y *= invertLightY;\nvec4 lDirection = viewMatrix * vec4( lightDir, 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ 0 ] * directionalLightWeighting;\nlightDir = directionalLightDirection[ 1 ];\nlightDir.y *= invertLightY;\nlDirection = viewMatrix * vec4( lightDir, 0.0 );\ndirectionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ 1 ] * directionalLightWeighting;\nvWorldPosition = vec3( objectMatrix * vec4( position, 1.0 )).xyz;\nvWorldVector = (vWorldPosition - cameraPosition) * vec3(0.01, 0.02, 0.01);\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "const   vec3 \tskyBlue = vec3( -0.37, -0.05, 0.15 );\nconst \t vec3 \tcloudMix = vec3( 0.83 * 0.83, 0.69 * 0.69, 0.51 * 0.51 );\nuniform float  skyWhite;\nuniform vec3 fogColor;\nuniform float fogDensity;\nvarying vec3 vColor;\nvarying vec3 vLightWeighting;\nvarying vec3 vNormalsquare;\nvarying vec3 vWorldPosition;\nvarying vec3 vWorldVector;\nvoid main() {\ngl_FragColor = vec4(vColor,1.);\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );\nconst float viewDistance = 6000.0 * 2.0;\nfloat fogFactor = clamp(( gl_FragCoord.z / gl_FragCoord.w ) / viewDistance, 0.0, 1.0 );\nfogFactor *= fogFactor;\nfloat f = max( 0.0, normalize( vWorldVector ).y + cameraPosition.y * 0.0002 - 0.05 );\nvec3 sky_color = mix( vec3( skyWhite ), skyBlue, f );\ngl_FragColor = mix( gl_FragColor, vec4( sky_color, gl_FragColor.w ), fogFactor );\n}"};
WaterfallShader = {geometry: undefined, materials: [], createWaterfall: function (b) {
    if (WaterfallShader.geometry === undefined) {
        var g = new THREE.Geometry, c, f = g.faces, h = g.vertices, m, n = WaterfallShader.attributes.time.value, p = WaterfallShader.attributes.direction.value, o = WaterfallShader.attributes.darkness.value, t = WaterfallShader.attributes.size.value;
        for (c = 0; c < 800; c++) {
            f.push(new THREE.Face3(c * 4 + 0, c * 4 + 1, c * 4 + 2));
            f.push(new THREE.Face3(c * 4 + 0, c * 4 + 2, c * 4 + 3));
            f.push(new THREE.Face3(c * 4 + 0, c * 4 + 3, c * 4 + 1));
            f.push(new THREE.Face3(c * 4 + 3, c * 4 + 2, c * 4 + 1));
            p.push(new THREE.Vector3(0 + Math.random() * 0.2, 0.7 + Math.random() * 0.2, 1.3 + Math.random() * 0.2));
            p.push(new THREE.Vector3(-1 + Math.random() * 0.2, 0.7 + Math.random() * 0.2, -0.7 + Math.random() * 0.2));
            p.push(new THREE.Vector3(1 + Math.random() * 0.2, 0.7 + Math.random() * 0.2, -0.7 + Math.random() * 0.2));
            p.push(new THREE.Vector3(0 + Math.random() * 0.2, -1.3 + Math.random() * 0.2, 0 + Math.random() * 0.2));
            m = new THREE.Vertex;
            m.position.x = Math.random() * 240 - 120;
            m.position.y = -5800;
            m.position.z = Math.random() * 240 - 120;
            h.push(m);
            h.push(m);
            h.push(m);
            h.push(m);
            m = Math.random();
            n.push(m);
            n.push(m);
            n.push(m);
            n.push(m);
            m = Math.random() * 0.3 + 0.7;
            o.push(m * (Math.random() * 0.4 + 0.6));
            o.push(m * (Math.random() * 0.4 + 0.6));
            o.push(m * (Math.random() * 0.4 + 0.6));
            o.push(m * (Math.random() * 0.4 + 0.6));
            m = Math.random() * 30 + 5;
            t.push(m);
            t.push(m);
            t.push(m);
            t.push(m)
        }
        g.computeFaceNormals();
        g.computeBoundingSphere();
        g.boundingSphere.radius = 5E3;
        WaterfallShader.geometry = g
    }
    b = new THREE.MeshShaderMaterial({uniforms: WaterfallShader.uniforms(b), attributes: WaterfallShader.attributes, vertexShader: WaterfallShader.vertexShader, fragmentShader: WaterfallShader.fragmentShader, lights: !1, fog: !1});
    g = new THREE.Mesh(WaterfallShader.geometry, b);
    g.doubleSided = !0;
    WaterfallShader.materials.push(b);
    return g
}, update: function (b, g) {
    for (var c = 0; c < WaterfallShader.materials.length; c++) {
        WaterfallShader.materials[c].uniforms.globalTime.value += b * 1.2E-4;
        WaterfallShader.materials[c].uniforms.skyWhite.value = g !== undefined ? g : 1
    }
}, uniforms: function (b) {
    b = b !== undefined ? Math.max(0, Math.min(1, b)) : 0;
    return{globalTime: {type: "f", value: 0}, skyWhite: {type: "f", value: 1}, shrinkTop: {type: "f", value: b}}
}, attributes: {time: {type: "f", boundTo: "vertices", value: []}, darkness: {type: "f", boundTo: "faces", value: []}, direction: {type: "v3", boundTo: "vertices", value: []}, size: {type: "f", boundTo: "vertices", value: []}}, vertexShader: "const float \tPI \t\t\t= 3.14159265;\nconst vec3 \tBASECOLOR \t= vec3(  16.0 / 255.0,  93.0 / 255.0, 118.0 / 255.0 );\nconst vec3     HIGHLIGHT   = vec3( 235.0 / 255.0, 237.0 / 255.0, 245.0 / 255.0 );\nconst vec3 \tENDCOLOR \t= vec3( 99.00 / 255.0, 239.0 / 255.0, 253.0 / 255.0 );\nuniform \tfloat\tglobalTime;\nuniform    float   shrinkTop;\nattribute \tfloat\ttime;\nattribute \tfloat\tdarkness;\nattribute \tfloat\tsize;\nattribute \tvec3\tdirection;\nvarying \tvec3 \tvWorldVector;\nvarying \tvec3\tvColor;\nvoid main() {\nfloat localTime = time + globalTime;\nfloat modTime = mod( localTime, 1.0 );\nfloat accTime = modTime * modTime;\nvec2 pulse = vec2( sin( localTime * 2.0 ) * 20.0, cos( localTime * 2.0 ) * 20.0 );\nvColor = mix( BASECOLOR * darkness, ENDCOLOR * darkness, modTime );\nvColor = mix( vColor, HIGHLIGHT, 1.0 - smoothstep( 0.0, 0.25, abs( modTime - ( sin( globalTime ) * 0.2 * darkness + 0.5 ))));\nvec3 animated = vec3( position.x + pulse.x, position.y * accTime, position.z + pulse.y );\nanimated.x -= ( 1.0 - accTime ) * shrinkTop * animated.x;\nanimated.z -= ( 1.0 - accTime ) * shrinkTop * animated.z;\nvec3 rotatedDirection;\nfloat rotation = modTime * size;\nfloat cosRot = cos( rotation );\nfloat sinRot = sin( rotation );\nrotatedDirection.x = ( cosRot * direction.x - sinRot * direction.y );\nrotatedDirection.y = ( sinRot * direction.x + cosRot * direction.y );\nrotatedDirection.z = direction.z;\nanimated += rotatedDirection * size * ( sin( localTime * 150.0 ) * 0.1 + 1.1 );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( animated, 1.0 );\nvWorldVector = ( vec3( objectMatrix * vec4( animated, 1.0 )).xyz - cameraPosition ) * vec3( 0.01, 0.02, 0.01 );\n}", fragmentShader: "const   \tvec3 \tskyBlue = vec3( -0.37, -0.05, 0.15 );\nconst \t \tvec3 \tcloudMix = vec3( 0.83 * 0.83, 0.69 * 0.69, 0.51 * 0.51 );\nuniform \tfloat \tskyWhite;\nvarying \tvec3 \tvWorldVector;\nvarying \tvec3\tvColor;\nvoid main() {\nfloat f;\nvec3 normal;\nvec3 sky_color;\nconst float viewDistance = 6000.0 * 2.0;\nfloat fogFactor = clamp(( gl_FragCoord.z / gl_FragCoord.w ) / viewDistance, 0.0, 1.0 );\nfogFactor *= fogFactor;\nf = max( 0.0, normalize( vWorldVector ).y + cameraPosition.y * 0.0002 - 0.05 );\nsky_color = mix( vec3( skyWhite ), skyBlue, f );\ngl_FragColor = vec4( vColor, 1.0 );\ngl_FragColor = mix( gl_FragColor, vec4( sky_color, gl_FragColor.w ), fogFactor );\n}"};
DunesCamera = function (b) {
    var g = 10, c = new THREE.Ray, f, h, m = new THREE.Vector3, n = {forward: 1, left: 1, right: 1, up: 1, down: 1}, p = 0, o, t;
    o = b.worlds.dunes;
    t = new THREE.Camera(50, b.viewportWidth / b.viewportHeight, 20, 1E5);
    t.target.position.set(0, 0, -100);
    f = new THREE.Object3D;
    h = new THREE.Object3D;
    h.position.set(0, 0, -100);
    o.scene.addChild(t);
    o.scene.addChild(t.target);
    o.scene.addChild(f);
    o.scene.addChild(h);
    var u = {};
    u.camera = t;
    u.resetCamera = function () {
        window.wantedCamera = f;
        window.camera = t;
        g = 10;
        f.position.set(0, 350, 600);
        f.up.set(0, 1, 0);
        h.position.set(0, 150, -300);
        h.position.subSelf(f.position).normalize().multiplyScalar(200).addSelf(f.position);
        t.position.copy(f.position);
        t.up.set(0, 1, 0);
        t.target.position.copy(h.position)
    };
    u.updateCamera = function (w, x) {
        x = x > 30 || x < 5 ? 1 : x / 30;
        var y = b.mouse.x / b.screenWidth - 0.5, z = b.mouse.y / b.screenHeight - 0.5;
        if (w < 0.03) {
            c.origin.copy(f.matrixWorld.getPosition()).y += 100;
            c.direction.set(0, -1, 0);
            var D = o.scene.collisions.rayCastNearest(c), B = -1;
            if (D && D.distance !== -1) {
                B = D.distance * 0.1;
                f.position.y = c.origin.y - B + g * 0.5
            }
            h.position.x = f.position.x + 12 * y;
            h.position.x = Math.min(300, Math.max(-300, h.position.x));
            h.position.z = f.position.z - 200;
            t.position.y = t.target.position.y = h.position.y = f.position.y;
            t.target.position.x += (h.position.x - t.target.position.x) * 0.35;
            t.target.position.z += (h.position.z - t.target.position.z) * 0.35
        } else if (w < 0.39) {
            c.origin.copy(f.matrixWorld.getPosition()).y += 100;
            c.direction.set(0, -1, 0);
            if ((D = o.scene.collisions.rayCastNearest(c)) && D.distance !== -1) {
                B = D.distance * 0.1;
                f.position.y = c.origin.y - B + g
            }
            z = -z * 35;
            h.position.y + z - f.position.y <= 100 && (h.position.y += z);
            h.position.y = Math.max(h.position.y, f.position.y);
            h.position.y = Math.min(h.position.y, f.position.y + 100);
            m.sub(h.position, f.position).normalize();
            h.position.x = f.position.x + m.x * 200 - m.z * 12 * y * 0.5;
            h.position.z = f.position.z + m.z * 200 + m.x * 12 * y * 0.5;
            y = Math.sin(0.5 * Math.PI * (w - 0.03) / 0.36);
            cameraSpeed = 5 * y * x;
            m.multiplyScalar(cameraSpeed);
            f.position.x += m.x;
            f.position.y += Math.sin((f.position.x + f.position.z) * 0.1) * 5 * (1.5 - y);
            f.position.z += m.z;
            t.position.x += (f.position.x - t.position.x) * 0.1;
            t.position.y += (f.position.y - t.position.y) * 0.1;
            t.position.z += (f.position.z - t.position.z) * 0.1;
            t.target.position.x += (h.position.x - t.target.position.x) * 0.1;
            t.target.position.y += (h.position.y - t.target.position.y) * 0.1;
            t.target.position.z += (h.position.z - t.target.position.z) * 0.1
        } else {
            var A, E, C;
            switch (p) {
                case 0:
                    C = "forward";
                    c.origin.copy(f.matrixWorld.getPosition());
                    c.direction.copy(t.matrixWorld.getColumnZ().negate());
                    A = 200;
                    E = 60;
                    break;
                case 1:
                    C = "left";
                    c.origin.copy(f.matrixWorld.getPosition());
                    c.direction.copy(t.matrixWorld.getColumnX().negate());
                    A = 40;
                    E = 60;
                    break;
                case 2:
                    C = "right";
                    c.origin.copy(f.matrixWorld.getPosition());
                    c.direction.copy(t.matrixWorld.getColumnX());
                    A = 40;
                    E = 60;
                    break;
                case 3:
                    C = "down";
                    c.origin.copy(f.matrixWorld.getPosition()).y += 100;
                    c.direction.copy(t.matrixWorld.getColumnY().negate());
                    A = 50;
                    E = 60;
                    break;
                case 4:
                    C = "up";
                    c.origin.copy(f.matrixWorld.getPosition());
                    c.direction.copy(t.matrixWorld.getColumnY());
                    A = 40;
                    E = 60
            }
            p++;
            p > 4 && (p = 0);
            n[C] = 1;
            D = o.scene.collisions.rayCastNearest(c);
            B = NaN;
            if (D && D.distance !== -1) {
                B = D.distance * 0.1;
                C !== "down" && B < A + E && (n[C] = B < A ? 0 : 1 - (B - A) / E)
            }
            if (C !== "forward" && n[C] < 1) {
                D = new THREE.Vector3;
                D.copy(c.direction).negate().multiplyScalar((1 - n[C]) * 15);
                if (C === "left" || C === "right")D.y = 0; else {
                    D.x = 0;
                    D.z = 0
                }
                h.position.addSelf(D);
                n[C] = Math.max(n[C], 0.3);
                y *= 0.1;
                z *= 0.1
            }
            if (C === "down" && !isNaN(B) && B < 50) {
                C = f.position.y;
                f.position.y = c.origin.addSelf(c.direction.multiplyScalar(B)).y + g;
                h.position.y += f.position.y - C
            } else!isNaN(B) && c.origin.addSelf(c.direction.multiplyScalar(B)).y < 200 && (n[C] = 1);
            B = n.forward * n.up * n.down * n.right * n.left;
            z = -z * 35;
            if (Math.abs(h.position.y + z - f.position.y) <= 200)h.position.y += z; else {
                if (h.position.y > f.position.y)h.position.y = f.position.y + 200;
                if (h.position.y < f.position.y)h.position.y = f.position.y - 200
            }
            h.position.y = Math.max(h.position.y, g);
            h.position.y = Math.min(h.position.y, 4500);
            m.sub(h.position, f.position).normalize();
            h.position.x = f.position.x + m.x * 200 - m.z * 12 * y * x;
            h.position.z = f.position.z + m.z * 200 + m.x * 12 * y * x;
            cameraSpeed = 25;
            b.cameraSlowDown || (cameraSpeed += 5 * ((Math.min(Math.max(f.position.y, g), 3E3) - g) / (3E3 - g)));
            f.position.addSelf(m.multiplyScalar(cameraSpeed * B * x));
            if (w < 0.475) {
                f.position.y += 7.5 * x;
                h.position.y += 6.75 * x
            }
            g += (75 - g) * 0.25;
            f.position.y = Math.max(f.position.y, g);
            f.position.y = Math.min(f.position.y, 4500);
            t.position.x += (f.position.x - t.position.x) * 0.05;
            t.position.y += (f.position.y - t.position.y) * 0.05;
            t.position.z += (f.position.z - t.position.z) * 0.05;
            t.target.position.x += (h.position.x - t.target.position.x) * 0.05;
            t.target.position.y += (h.position.y - t.target.position.y) * 0.05;
            t.target.position.z += (h.position.z - t.target.position.z) * 0.05;
            y = t.matrixWorld.getColumnZ();
            m.normalize();
            m.y = y.y;
            m.subSelf(y).normalize();
            m.multiplyScalar(0.4);
            f.up.set(0, 1, 0);
            f.up.subSelf(m).normalize();
            t.up.x += (f.up.x - t.up.x) * 0.05;
            t.up.y += (f.up.y - t.up.y) * 0.05;
            t.up.z += (f.up.z - t.up.z) * 0.05;
            m.sub(t.position, t.target.position).y = 0;
            if (m.length() < 1) {
                f.position.y = h.position.y = t.target.position.y = t.position.y;
                h.position.z = t.target.position.z = -200
            }
        }
    };
    return u
};
DunesCameraFreeExplore = function (b) {
    var g = new THREE.Ray, c, f, h = new THREE.Vector3, m = {forward: 1, left: 1, right: 1, up: 1, down: 1}, n = 0, p, o;
    p = b.worlds.dunes;
    o = new THREE.Camera(50, b.viewportWidth / b.viewportHeight, 1, 1E5);
    o.target.position.set(0, 0, -100);
    c = new THREE.Object3D;
    f = new THREE.Object3D;
    f.position.set(0, 0, -100);
    p.scene.addChild(o);
    p.scene.addChild(o.target);
    p.scene.addChild(c);
    p.scene.addChild(f);
    var t = {};
    t.camera = o;
    t.resetCamera = function () {
        c.position.set(0, 150, 300);
        f.position.set(0, 150, -300);
        f.position.subSelf(c.position).normalize().multiplyScalar(200).addSelf(c.position);
        o.position.copy(c.position);
        o.target.position.copy(f.position)
    };
    t.switchDirection = function (u) {
        h.sub(o.position, o.target.position).normalize().multiplyScalar(u.radius * 1.5).addSelf(u.object.matrixWorld.getPosition());
        c.position.copy(h);
        h.sub(o.position, o.target.position).normalize().multiplyScalar(u.radius * 1.5 + 200).addSelf(u.object.matrixWorld.getPosition());
        f.position.copy(h);
        o.position.copy(c.position);
        o.target.position.copy(f.position)
    };
    t.updateCamera = function (u, w) {
        w = w > 30 || w < 5 || isNaN(w) ? 1 : w / 30;
        var x, y, z;
        switch (n) {
            case 0:
                z = "forward";
                g.origin.copy(c.matrixWorld.getPosition());
                g.direction.copy(o.matrixWorld.getColumnZ().negate());
                x = 200;
                y = 60;
                break;
            case 1:
                z = "left";
                g.origin.copy(c.matrixWorld.getPosition());
                g.direction.copy(o.matrixWorld.getColumnX().negate());
                x = 40;
                y = 60;
                break;
            case 2:
                z = "right";
                g.origin.copy(c.matrixWorld.getPosition());
                g.direction.copy(o.matrixWorld.getColumnX());
                x = 40;
                y = 60;
                break;
            case 3:
                z = "down";
                g.origin.copy(c.matrixWorld.getPosition()).y += 100;
                g.direction.copy(o.matrixWorld.getColumnY().negate());
                x = 50;
                y = 60;
                break;
            case 4:
                z = "up";
                g.origin.copy(c.matrixWorld.getPosition());
                g.direction.copy(o.matrixWorld.getColumnY());
                x = 40;
                y = 60
        }
        n++;
        n > 4 && (n = 0);
        m[z] = 1;
        var D = p.scene.collisions.rayCastNearest(g), B = NaN;
        if (D && D.distance !== -1) {
            B = D.distance * p.scale;
            z !== "down" && B < x + y && (m[z] = B < x ? 0 : 1 - (B - x) / y)
        }
        x = b.mouse.x / b.screenWidth - 0.5;
        y = b.mouse.y / b.screenHeight - 0.5;
        if (z !== "forward" && m[z] < 1) {
            D = new THREE.Vector3;
            D.copy(g.direction).negate().multiplyScalar((1 - m[z]) * 15);
            if (z === "left" || z === "right")D.y = 0; else {
                D.x = 0;
                D.z = 0
            }
            f.position.addSelf(D);
            m[z] = Math.max(m[z], 0.3);
            x *= 0.1;
            y *= 0.1
        }
        if (!isNaN(B) && z === "down" && B < 50) {
            z = c.position.y;
            c.position.y = g.origin.addSelf(g.direction.multiplyScalar(B)).y + 75;
            f.position.y += c.position.y - z
        } else!isNaN(B) && g.origin.addSelf(g.direction.multiplyScalar(B)).y < 200 && (m[z] = 1);
        B = m.forward * m.up * m.down * m.right * m.left;
        z = -y * 35;
        if (Math.abs(f.position.y + z - c.position.y) <= 200)f.position.y += z; else {
            if (f.position.y > c.position.y)f.position.y = c.position.y + 200;
            if (f.position.y < c.position.y)f.position.y = c.position.y - 200
        }
        f.position.y = Math.max(f.position.y, 75);
        f.position.y = Math.min(f.position.y, 4500);
        h.sub(f.position, c.position).normalize();
        f.position.x = c.position.x + h.x * 200 - h.z * 15 * x * w;
        f.position.z = c.position.z + h.z * 200 + h.x * 15 * x * w;
        cameraSpeed = 25;
        b.cameraSlowDown || (cameraSpeed += 10 * ((Math.min(Math.max(c.position.y, 75), 3E3) - 75) / 2925));
        c.position.addSelf(h.multiplyScalar(cameraSpeed * B * w));
        c.position.y = Math.max(c.position.y, 75);
        c.position.y = Math.min(c.position.y, 4500);
        o.position.x += (c.position.x - o.position.x) * 0.05;
        o.position.y += (c.position.y - o.position.y) * 0.05;
        o.position.z += (c.position.z - o.position.z) * 0.05;
        o.target.position.x += (f.position.x - o.target.position.x) * 0.05;
        o.target.position.y += (f.position.y - o.target.position.y) * 0.05;
        o.target.position.z += (f.position.z - o.target.position.z) * 0.05;
        B = o.matrixWorld.getColumnZ();
        h.normalize();
        h.y = B.y;
        h.subSelf(B).normalize();
        h.multiplyScalar(0.4 * w);
        c.up.set(0, 1, 0);
        c.up.subSelf(h).normalize();
        o.up.x += (c.up.x - o.up.x) * 0.05 * w;
        o.up.y += (c.up.y - o.up.y) * 0.05 * w;
        o.up.z += (c.up.z - o.up.z) * 0.05 * w;
        h.sub(o.position, o.target.position).y = 0;
        if (h.length() < 1) {
            c.position.y = f.position.y = o.target.position.y = o.position.y;
            f.position.z = o.target.position.z = -200
        }
    };
    return t
};
PrairieCameraFreeExplore = function (b) {
    var g, c, f = new THREE.Vector3, h, m, n, p, o = new THREE.Vector3;
    h = b.worlds.prairie;
    m = h.portals;
    p = new THREE.Vector3(350, 0, -300);
    n = new THREE.Camera(50, b.viewportWidth / b.viewportHeight, 1, 1E5);
    n.target.position.set(0, 0, -100);
    g = new THREE.Object3D;
    c = new THREE.Object3D;
    c.position.set(0, 0, -100);
    h.scene.addChild(n);
    h.scene.addChild(n.target);
    h.scene.addChild(g);
    h.scene.addChild(c);
    h = {};
    h.camera = n;
    h.resetCamera = function () {
        g.position.set(p.x - 200, 25, p.z);
        c.position.set(p.x + 300, 25, p.z);
        n.position.copy(g.position);
        n.target.position.copy(c.position)
    };
    h.updateCamera = function (t, u) {
        u = u * (1E3 / 30) / 1E3;
        var w = b.mouse.x / b.screenWidth - 0.5, x = b.mouse.y / b.screenHeight - 0.5;
        if (Math.abs(c.position.y - g.position.y) < 200)c.position.y -= x * 20 * u; else {
            c.position.y > g.position.y && (c.position.y -= 20);
            c.position.y < g.position.y && (c.position.y += 20)
        }
        f.sub(c.position, g.position).normalize();
        c.position.x = g.position.x + f.x * 350 - f.z * 15 * w * u;
        c.position.z = g.position.z + f.z * 350 + f.x * 15 * w * u;
        var y;
        x = 9999999999;
        for (var z = 0; z < m.length; z++) {
            var D = m[z];
            w = o.sub(D.object.matrixWorld.getPosition(), g.position).normalize().dot(f);
            if (w > 0.7 && D.currentDistance < x) {
                x = D.currentDistance;
                y = D
            }
        }
        if (y && x < y.radius * 2) {
            o.sub(y.object.matrixWorld.getPosition(), g.position);
            g.position.addSelf(o.normalize().multiplyScalar(2 * u))
        } else {
            y = f.multiplyScalar(2 * u);
            y.y = (25 - g.position.y) * 0.03;
            g.position.addSelf(y);
            x = g.position.x - p.x;
            z = g.position.z - p.z;
            w = o.sub(p, g.position).normalize().dot(f);
            Math.sqrt(x * x + z * z) > 795 && w < 0 && g.position.subSelf(y)
        }
        n.position.x += (g.position.x - n.position.x) * 0.02 * u;
        n.position.y += (g.position.y - n.position.y) * 0.02 * u;
        n.position.z += (g.position.z - n.position.z) * 0.02 * u;
        n.target.position.x += (c.position.x - n.target.position.x) * 0.02 * u;
        n.target.position.y += (c.position.y - n.target.position.y) * 0.02 * u;
        n.target.position.z += (c.position.z - n.target.position.z) * 0.02 * u;
        w = n.matrixWorld.getColumnZ();
        f.normalize();
        f.y = w.y;
        f.subSelf(w).normalize();
        f.multiplyScalar(0.4 * u);
        g.up.set(0, 1, 0);
        g.up.subSelf(f).normalize();
        n.up.x += (g.up.x - n.up.x) * 0.02 * u;
        n.up.y += (g.up.y - n.up.y) * 0.02 * u;
        n.up.z += (g.up.z - n.up.z) * 0.02 * u
    };
    return h
};
CityCameraFreeExplore = function (b) {
    var g = {start: new THREE.Vector3(-3E3, 10, -1500), end: new THREE.Vector3(3E3, 200, -1500)}, c = {start: new THREE.Vector3(0, 10, -300), end: new THREE.Vector3(0, 250, -3200)}, f, h, m = new THREE.Vector3, n = new THREE.Vector3, p, o, t;
    p = b.worlds.city;
    t = p.portals;
    o = new THREE.Camera(50, b.viewportWidth / b.viewportHeight, 1, 1E5);
    o.target.position.set(0, 0, -100);
    f = new THREE.Object3D;
    h = new THREE.Object3D;
    h.position.set(0, 0, -100);
    p.scene.addChild(o);
    p.scene.addChild(o.target);
    p.scene.addChild(f);
    p.scene.addChild(h);
    p = {};
    p.camera = o;
    p.resetCamera = function () {
        f.position.set(c.start.x, c.start.y, (c.end.z + c.start.z) * 0.5);
        h.position.set(g.start.x, c.start.y, f.position.z);
        o.position.copy(f.position);
        o.target.position.copy(h.position)
    };
    p.updateCamera = function (u, w) {
        w = w * (1E3 / 30) / 1E3;
        var x = b.mouse.x / b.screenWidth - 0.5, y = b.mouse.y / b.screenHeight - 0.5;
        Math.abs(h.position.y - f.position.y) < 50 && (h.position.y -= y * 20);
        h.position.y = Math.max(h.position.y, c.start.y);
        h.position.y = Math.min(h.position.y, c.end.y);
        m.sub(h.position, f.position).normalize();
        h.position.x = f.position.x + m.x * 500 - m.z * 25 * x * w;
        h.position.z = f.position.z + m.z * 500 + m.x * 25 * x * w;
        var z;
        x = 9999999999;
        for (y = 0; y < t.length; y++) {
            var D = t[y];
            if (n.sub(D.object.matrixWorld.getPosition(), f.position).normalize().dot(m) > 0.7 && D.currentDistance < x) {
                x = D.currentDistance;
                z = D
            }
        }
        if (z && x < z.radius * 4) {
            n.sub(z.object.matrixWorld.getPosition(), f.position);
            f.position.addSelf(n.normalize().multiplyScalar(6 * w))
        } else {
            cameraSpeed = 6;
            cameraSpeed += 3 * ((Math.min(Math.max(f.position.y, c.start.y), c.end.y) - c.start.y) / (c.end.y - c.start.y));
            f.position.addSelf(m.multiplyScalar(cameraSpeed * w));
            f.position.x = c.start.x;
            f.position.y = Math.max(Math.min(f.position.y, c.end.y), c.start.y);
            f.position.z = Math.min(Math.max(f.position.z, c.end.z), c.start.z)
        }
        o.position.x += (f.position.x - o.position.x) * 0.05 * w;
        o.position.y += (f.position.y - o.position.y) * 0.05 * w;
        o.position.z += (f.position.z - o.position.z) * 0.05 * w;
        o.target.position.x += (h.position.x - o.target.position.x) * 0.2 * w;
        o.target.position.y += (h.position.y - o.target.position.y) * 0.2 * w;
        o.target.position.z += (h.position.z - o.target.position.z) * 0.2 * w;
        z = o.matrixWorld.getColumnZ();
        m.normalize();
        m.y = z.y;
        m.subSelf(z).normalize();
        m.multiplyScalar(0.4 * w);
        f.up.set(0, 1, 0);
        f.up.subSelf(m).normalize();
        o.up.x += (f.up.x - o.up.x) * 0.05 * w;
        o.up.y += (f.up.y - o.up.y) * 0.05 * w;
        o.up.z += (f.up.z - o.up.z) * 0.05 * w
    };
    return p
};
Trigger = function (b, g) {
    var c = {}, f = new THREE.MeshShaderMaterial({uniforms: TriggerShader.uniforms(), vertexShader: TriggerShader.vertexShader, fragmentShader: TriggerShader.fragmentShader, shading: THREE.FlatShading, lights: !0, fog: !0, morphTargets: !0, vertexColors: 1, map: b.materials[0].map});
    c.mesh = new THREE.Mesh(b, f);
    var h = 1, m = 0;
    g = g !== undefined ? g : 0;
    var n = c.mesh.morphTargetForcedOrder;
    n[0] = 0;
    n[1] = 1;
    c.play = function (p) {
        h = p || 1;
        m = 0;
        c.mesh.visible = !0;
        THREE.AnimationHandler.addToUpdate(c);
        c.update(0)
    };
    c.update = function (p) {
        if (p < 5 || p > 66)p = 33;
        m += p * h;
        if (m >= 1E3) {
            n[0] = 0;
            n[1] = c.mesh.geometry.morphTargets.length - 1;
            f.uniforms.morph.value = 1;
            f.uniforms.darkness.value = g;
            THREE.AnimationHandler.removeFromUpdate(c)
        } else {
            p = m / 1E3;
            var o, t = 0.1, u = 0.7;
            if (p == 0)p = 0; else if (p == 1)p = 1; else {
                u || (u = 0.3);
                if (!t || t < 1) {
                    t = 1;
                    o = u / 4
                } else o = u / (2 * Math.PI) * Math.asin(1 / t);
                p = t * Math.pow(2, -10 * p) * Math.sin((p - o) * 2 * Math.PI / u) + 1
            }
            p *= 1E3;
            if (p < 1E3) {
                n[0] = Math.floor(p / 1E3);
                n[1] = Math.ceil(p / 1E3)
            } else {
                n[0] = c.mesh.geometry.morphTargets.length - 2;
                n[1] = c.mesh.geometry.morphTargets.length - 1
            }
            f.uniforms.morph.value = p / 1E3;
            f.uniforms.darkness.value = g * m / 1E3
        }
    };
    return c
};
var TriggerBig = function (b) {
    var g = {}, c = new THREE.MeshShaderMaterial({uniforms: TriggerBigShader.uniforms(), vertexShader: TriggerBigShader.vertexShader(), fragmentShader: TriggerBigShader.fragmentShader, shading: THREE.FlatShading, lights: !0, fog: !0, morphTargets: !0, vertexColors: 1});
    g.mesh = new THREE.Mesh(b, c);
    g.mesh.doubleSided = !0;
    var f = 0.1, h = 0, m = (b.morphTargets.length - 1) * 1E3, n = g.mesh.morphTargetForcedOrder;
    n[0] = 0;
    n[1] = 1;
    g.play = function (p) {
        f = p || 1;
        h = 0;
        THREE.AnimationHandler.addToUpdate(g);
        g.update(0)
    };
    g.update = function (p) {
        h += p * f;
        if (h >= m) {
            n[0] = 0;
            n[1] = g.mesh.geometry.morphTargets.length - 1;
            c.uniforms.morph.value = 1;
            THREE.AnimationHandler.removeFromUpdate(g)
        } else {
            p = h / m * m;
            if (p < m) {
                n[0] = Math.floor(p / 1E3);
                n[1] = Math.ceil(p / 1E3)
            } else {
                n[0] = g.mesh.geometry.morphTargets.length - 2;
                n[1] = g.mesh.geometry.morphTargets.length - 1
            }
            c.uniforms.morph.value = p / m
        }
    };
    return g
}, TriggerUtils = function () {
    var b = {};
    b.effectors = [0, 0, 2E4];
    b.effectorRadius = 300;
    var g = [], c = [], f = [];
    b.setupCityTriggers = function (h) {
        if (h.triggers) {
            var m, n, p, o, t = h.triggers, u = [];
            for (p in t)if (p.indexOf("TriggerMesh") !== -1) {
                o = t[p];
                o.name = p.slice(p.indexOf("_") + 1);
                o.geometry = h.geometries[o.object.geometry];
                u.push(o);
                h.objects[p].parent.removeChild(h.objects[p]);
                h.objects[p].visible = !1;
                delete t[p]
            }
            g = [];
            c = [];
            for (p in t) {
                m = 0;
                for (n = u.length; m < n; m++)if (p.indexOf(u[m].name) !== -1 && u[m].geometry.morphTargets.length) {
                    o = new Trigger(u[m].geometry);
                    h.objects[p].addChild(o.mesh);
                    o.mesh.visible = !1;
                    g.push(o);
                    o.mesh.rotation.x = 90 * Math.PI / 180
                }
            }
        }
    };
    b.setupPrairieTriggers = function (h) {
        var m, n, p = h.geometries, o, t, u, w, x, y, z;
        for (m in p) {
            n = p[m];
            if (n.morphTargets.length) {
                o = 0;
                for (t = n.morphTargets.length; o < t; o++) {
                    x = n.morphTargets[o].vertices;
                    u = 0;
                    for (w = x.length; u < w; u++) {
                        y = x[u].position;
                        z = y.y;
                        y.y = -y.z;
                        y.z = z
                    }
                }
            }
        }
        n = h.objects;
        f = [];
        for (m in n)if (n[m].geometry && n[m].geometry.morphTargets.length) {
            h = new Trigger(n[m].geometry, Math.random() * 0.25 + 0.5);
            n[m].addChild(h.mesh);
            n[m].visible = !1;
            f.push(h)
        }
    };
    b.update = function (h) {
        var m, n, p, o, t = b.effectors, u, w, x, y = b.effectorRadius * 1.5;
        if (h === "city") {
            h = 0;
            for (m = g.length; h < m; h++) {
                n = g[h].mesh.matrixWorld.getPosition();
                p = 0;
                for (o = t.length; p < o; p += 3) {
                    u = Math.abs(t[p + 0] - n.x);
                    w = Math.abs(t[p + 1] - n.y);
                    x = Math.abs(t[p + 2] - n.z);
                    if (u + w + x < y) {
                        g[h].play(0.2 + Math.random() * 0.05);
                        g.splice(h, 1);
                        h--;
                        m--;
                        break
                    }
                }
            }
            h = 0;
            for (m = c.length; h < m; h++) {
                n = c[h].mesh.matrixWorld.getPosition();
                p = 0;
                for (o = t.length; p < o; p += 3) {
                    u = Math.abs(t[p + 0] - n.x);
                    w = Math.abs(t[p + 1] - n.y);
                    x = Math.abs(t[p + 2] - n.z);
                    if (u + w + x < y) {
                        c[h].play(0.2 + Math.random() * 0.1);
                        c.splice(h, 1);
                        h--;
                        m--;
                        break
                    }
                }
            }
        } else {
            h = 0;
            for (m = f.length; h < m; h++) {
                n = f[h].mesh.matrixWorld.getPosition();
                p = 0;
                for (o = t.length; p < o; p += 3) {
                    u = Math.abs(t[p + 0] - n.x);
                    w = Math.abs(t[p + 1] - n.y);
                    x = Math.abs(t[p + 2] - n.z);
                    if (u + w + x < y) {
                        f[h].play(0.1 + Math.random() * 0.05);
                        f.splice(h, 1);
                        h--;
                        m--;
                        break
                    }
                }
            }
        }
    };
    return b
}();
TriggerShader = {uniforms: function () {
    return{morph: {type: "f", value: 0}, darkness: {type: "f", value: 0}, diffuse: {type: "c", value: new THREE.Color(16777215)}, fogColor: {type: "c", value: new THREE.Color}, fogDensity: {type: "f", value: 0}, enableLighting: {type: "i", value: 1}, ambientLightColor: {type: "fv", value: []}, directionalLightDirection: {type: "fv", value: []}, directionalLightColor: {type: "fv", value: []}, pointLightColor: {type: "fv", value: []}, pointLightPosition: {type: "fv", value: []}, pointLightDistance: {type: "fv1", value: []}}
}, vertexShader: ["uniform float\tmorph;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, "varying vec3 vLightWeighting;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( mix( morphTarget0, morphTarget1, morph ), 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.lights_vertex, "gl_Position = projectionMatrix * mvPosition;\n}"].join("\n"), fragmentShader: ["uniform float  darkness;\nuniform vec3 \tdiffuse;\nuniform float \topacity;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, "gl_FragColor = vec4( gl_FragColor.rgb * ( 1.0 - darkness ), 1.0 );", THREE.ShaderChunk.fog_fragment, "}"].join("\n")};
TriggerBigShader = {uniforms: function () {
    return{effectors: {type: "fv", value: TriggerUtils.effectors}, morph: {type: "f", value: 0}, darkness: {type: "f", value: 0}, diffuse: {type: "c", value: new THREE.Color(16777215)}, fogColor: {type: "c", value: new THREE.Color}, fogDensity: {type: "f", value: 0}, enableLighting: {type: "i", value: 1}, ambientLightColor: {type: "fv", value: []}, directionalLightDirection: {type: "fv", value: []}, directionalLightColor: {type: "fv", value: []}, pointLightColor: {type: "fv", value: []}, pointLightPosition: {type: "fv", value: []}, pointLightDistance: {type: "fv1", value: []}}
}, vertexShader: function () {
    return["const \t\tint\t\tNUMEFFECTORS = " + TriggerUtils.effectors.length / 3 + ";", "uniform \tvec3 \teffectors[ NUMEFFECTORS ];\nuniform \tfloat\tmorph;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, "varying vec3 vLightWeighting;\nfloat elastic( float k ) {\nfloat s;\nfloat a = 0.8;\nfloat p = 0.7;\nif ( k == 0.0 ) return 0.0; if ( k == 1.0 ) return 1.0; if ( p == 0.0 ) p = 0.3;\nif ( a == 0.0 || a < 1.0 ) { a = 1.0; s = p / 4.0; }\nelse s = p / ( 2.0 * 3.14159265 ) * asin( 1.0 / a );\nreturn ( a * pow( 2.0, -10.0 * k ) * sin( ( k - s ) * ( 2.0 * 3.14159265 ) / p ) + 1.0 );\n}\nvoid main() {\nfloat distanceMorph = 0.0;\nif( morph < 1.0 ) { \nvec3 worldPosition = ( objectMatrix * vec4( morphTarget0, 1.0 )).xyz;\nfor( int i = 0; i < NUMEFFECTORS; i++ ) {", "distanceMorph = max( distanceMorph, smoothstep( 0.0, 0.4, 1.0 - distance( worldPosition, effectors[ i ] ) / " + TriggerUtils.effectorRadius + ".0 ));", "}\ndistanceMorph = elastic( max( morph, distanceMorph ));\n} else {\ndistanceMorph = 1.0;\n}\nvec4 mvPosition = modelViewMatrix * vec4( mix( morphTarget0, morphTarget1, distanceMorph ), 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.lights_vertex, "gl_Position = projectionMatrix * mvPosition;\n}"].join("\n")
}, fragmentShader: ["uniform float  darkness;\nuniform vec3 \tdiffuse;\nuniform float \topacity;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, "gl_FragColor = vec4( gl_FragColor.rgb * ( 1.0 - darkness ), 1.0 );", THREE.ShaderChunk.fog_fragment, "}"].join("\n")};
var CitySoup = function (b, g, c) {
    function f(I) {
        var V, $, X, P;
        V = 0;
        for ($ = I.faces.length; V < $; V++) {
            P = I.faces[V];
            for (j = 0; j < P.vertexColors.length; j++) {
                X = P.vertexColors[j];
                THREE.ColorUtils.adjustHSV(X, 0.13, 0.3, -0.05)
            }
        }
    }

    var h = this;
    h.camera = b;
    renderer = c.renderer;
    var m = 0;
    c.camPos = new THREE.Vector3(0, 0, -300);
    b = new THREE.JSONLoaderAjax;
    b.onLoadStart = function () {
        c.signals.loadItemAdded.dispatch()
    };
    b.onLoadComplete = function () {
        c.signals.loadItemCompleted.dispatch()
    };
    var n = new CollisionScene(h.camera, g, 0.1, c, 500, !0, g);
    n.settings.maxSpeedDivider = 1;
    n.settings.capBottom = 3;
    n.settings.capTop = 1E3;
    n.settings.shootRayDown = !1;
    n.settings.allowFlying = !1;
    n.settings.emitterDivider = 2;
    n.settings.normalOffsetAmount = 8;
    n.settings.minDistance = 100;
    n.settings.keepEmitterFollowDown = !0;
    n.emitter.position.z = -100;
    n.emitterFollow.position.z = -100;
    b.load({model: "/files/models/city/collision/City.Collision_Big.js", callback: function (I) {
        var V = new THREE.Vector3(-1.570796, 0, 0), $ = new THREE.Vector3(0, 0, 0);
        n.addLoaded(I, 0.1, V, $, g)
    }});
    b.load({model: "/files/models/city/collision/City.Collision_Big.001.js", callback: function (I) {
        var V = new THREE.Vector3(-1.570796, 0, 0), $ = new THREE.Vector3(0, 0, 0);
        n.addLoaded(I, 0.1, V, $, g)
    }});
    b.load({model: "/files/models/city/collision/City.Collision_Big.002.js", callback: function (I) {
        var V = new THREE.Vector3(-1.570796, 0, 0), $ = new THREE.Vector3(0, 0, 0);
        n.addLoaded(I, 0.1, V, $, g)
    }});
    b.load({model: "/files/models/city/collision/City.Collision_Big.003.js", callback: function (I) {
        var V = new THREE.Vector3(-1.570796, 0, 0), $ = new THREE.Vector3(0, 0, 0);
        n.addLoaded(I, 0.1, V, $, g)
    }});
    var p = new THREE.Vector3(0, 0, -250), o = new Vectors(50, 3, 8, p), t = [new THREE.MeshLambertMaterial({color: 5997888, opacity: 1}), new THREE.MeshLambertMaterial({color: 4285993, opacity: 1}), new THREE.MeshLambertMaterial({color: 3103761, opacity: 1}), new THREE.MeshLambertMaterial({color: 6525252, opacity: 1})], u = new Ribbons(4, o.array, g, t);
    u.settings.ribbonPulseMultiplier_1 = 15;
    u.settings.ribbonPulseMultiplier_2 = 0;
    u.settings.ribbonMin = 0.1;
    u.settings.ribbonMax = 0.2;
    t = THREE.ImageUtils.loadTexture("/files/textures/particle_0.png");
    var w = THREE.ImageUtils.loadTexture("/files/textures/particle_1.png"), x = THREE.ImageUtils.loadTexture("/files/textures/particle_2.png"), y = THREE.ImageUtils.loadTexture("/files/textures/particle_3.png"), z = THREE.ImageUtils.loadTexture("/files/textures/particle_4.png"), D = new Particles(22, g, 5, [t, w, x, y, z], 20, 70, THREE.AdditiveBlending);
    D.settings.gravitateTowardsCamera = !0;
    var B = new Stragglers(5, g, o.array);
    B.settings.capy = 0;
    var A = new AnimalSwarm2(30, g, o.array);
    A.settings.addaptiveSpeed = !0;
    A.settings.capy = 0;
    A.settings.startPosition = p;
    A.settings.constantSpeed = 0.75;
    A.settings.avoidCamera = !0;
    A.settings.killAtDistance = !0;
    A.array[0] = "moose";
    A.array[22] = "moose";
    A.array[2] = "elk";
    A.array[10] = "elk";
    A.array[1] = "elk";
    A.array[25] = "elk";
    A.array[8] = "fish";
    A.array[16] = "fish";
    A.array[5] = "sockjump";
    A.array[26] = "sockjump";
    A.array[13] = "sockpopup";
    A.array[29] = "sockjump";
    b.load({model: "/files/models/soup/animals_A_life.js", callback: function (I) {
        var V = [1, 0, 4, 3, 2, 1, 0, 5, 2, 7, 8, 9, 10, 1, 0, 3, 3, 9, 2, 3], $ = [6.5, 13.12, 9.76, 7.47, 4.74, 4.94, 0.777, 6.252, 3.412, 5.52, 5.576];
        A.addAnimal(I, null, 1.5, V, $);
        V = [8, 9, 7, 9, 10];
        I = B.addAnimal(I, null, 1.8, V, $);
        preinitAnimal(I, renderer, g)
    }});
    b.load({model: "/files/models/soup/elk_life.js", callback: function (I) {
        I = A.addAnimal(I, "elk", 2.2, null, [6]);
        preinitAnimal(I, renderer, g)
    }});
    b.load({model: "/files/models/soup/moose_life.js", callback: function (I) {
        I = A.addAnimal(I, "moose", 1.1, null, [13.964]);
        preinitAnimal(I, renderer, g)
    }});
    b.load({model: "/files/models/soup/fish_life.js", callback: function (I) {
        I = A.addAnimal(I, "fish", 1.6, [0, 1, 2, 3], [2]);
        preinitAnimal(I, renderer, g);
        A.array[8].isFish = !0;
        A.array[16].isFish = !0
    }});
    b.load({model: "/files/models/soup/sockpuppet_jump.js", callback: function (I) {
        I = A.addAnimal(I, "sockjump", 1.8, null, [3], !0);
        preinitAnimal(I, c.renderer, g)
    }});
    b.load({model: "/files/models/soup/sockpuppet_popup.js", callback: function (I) {
        I = A.addAnimal(I, "sockpopup", 2, null, [0.1], !0);
        preinitAnimal(I, c.renderer, g)
    }});
    var E = new AnimalSwarm2(10, g, o.array);
    E.settings.flying = !0;
    E.settings.flyingDistance = 60;
    for (p = 0; p < 10; ++p)p % 2 == 0 && (E.array[p] = "b");
    b.load({model: "files/models/soup/birds_A_life.js", callback: function (I) {
        I = E.addAnimal(I, null, 1.3, [0, 1, 2, 3, 0, 1, 2, 3, 0, 1], [4.848, 7, 7.5, 3.5]);
        preinitAnimal(I, renderer, g)
    }});
    b.load({model: "files/models/soup/birds_B_life.js", callback: function (I) {
        I = E.addAnimal(I, "b", 1.3, [1, 1, 0, 0, 1, 0, 0, 1, 0, 0], [8.5, 8.623]);
        preinitAnimal(I, renderer, g)
    }});
    var C = new AnimalInFrontOfCamera(15, g);
    b.load({model: "/files/models/soup/butterfly_hiD.js", callback: C.addAnimal});
    var H = new AnimalInFrontOfCamera(15, g);
    b.load({model: "/files/models/soup/butterfly_hiC.js", callback: H.addAnimal});
    var G = new Trail(80, g);
    G.settings.freeRotation = !1;
    G.settings.tweenTime = 2500;
    G.settings.aliveDivider = 30;
    G.settings.offsetAmount = 10;
    for (p = 0; p < 80; ++p)G.array[p] = "0" + (p % 4 + 1);
    G.array[10] = "tree1";
    G.array[30] = "tree2";
    G.array[45] = "tree3";
    G.array[60] = "tree4";
    G.array[75] = "tree5";
    G.array[70] = "light";
    b.load({model: "/files/models/soup/grass01.js", callback: function (I) {
        f(I);
        G.addInstance(I, "01", !1)
    }});
    b.load({model: "/files/models/soup/grass02.js", callback: function (I) {
        f(I);
        var V = G.addInstance(I, "02", !1);
        preInitModel(I, renderer, g, V)
    }});
    b.load({model: "/files/models/soup/grass03.js", callback: function (I) {
        f(I);
        var V = G.addInstance(I, "03", !1);
        preInitModel(I, renderer, g, V)
    }});
    b.load({model: "/files/models/soup/grassFlower.js", callback: function (I) {
        f(I);
        var V = G.addInstance(I, "04", !1);
        preInitModel(I, renderer, g, V)
    }});
    b.load({model: "/files/models/soup/evergreen_low.js", callback: function (I) {
        f(I);
        var V = G.addInstance(I, "tree1", !0);
        preInitModel(I, renderer, g, V)
    }});
    b.load({model: "/files/models/soup/evergreen_high.js", callback: function (I) {
        f(I);
        var V = G.addInstance(I, "tree2", !0);
        preInitModel(I, renderer, g, V)
    }});
    b.load({model: "/files/models/soup/treeGeneric.js", callback: function (I) {
        f(I);
        var V = G.addInstance(I, "tree3", !0);
        preInitModel(I, renderer, g, V)
    }});
    b.load({model: "/files/models/soup/treeGenericLower.js", callback: function (I) {
        f(I);
        var V = G.addInstance(I, "tree4", !0);
        preInitModel(I, renderer, g, V)
    }});
    b.load({model: "/files/models/soup/treeOrange.js", callback: function (I) {
        f(I);
        var V = G.addInstance(I, "tree5", !0);
        preInitModel(I, renderer, g, V)
    }});
    b.load({model: "/files/models/soup/lighthouse.js", callback: function (I) {
        var V = G.addInstance(I, "light", !1, !0);
        preInitModel(I, renderer, g, V);
        G.array[70].maxHeight = 12
    }});
    this.update = function (I, V) {
        if (!isNaN(I) && !(I > 1E3 || I == 0)) {
            if (V) {
                c.camPos.copy(V.matrixWorld.getPosition());
                n.settings.camera = V
            } else {
                c.camPos.x = h.camera.matrixWorld.n14;
                c.camPos.y = h.camera.matrixWorld.n24;
                c.camPos.z = h.camera.matrixWorld.n34;
                n.settings.camera = h.camera
            }
            m % 8 == 7 && B.create(n.emitterFollow.position, n.currentNormal, n.emitter.position);
            ++m;
            var $ = 0;
            m % 4 == 0 && ($ = (Math.random() - 0.5) * 1.2);
            if (m % 2 == 0 && !V)h.camera.animationParent.position.y = 18 + (Math.random() - 0.5) * 1.2;
            if (!V)h.camera.position.x = 0 + $;
            m % 4 == 3 && A.create(n.emitterFollow.position, n.currentNormal, n.emitterFollow.position);
            m % 8 == 7 && E.create(n.emitterFollow.position, n.currentNormal, n.emitterFollow.position);
            n.update(c.camPos, I);
            o.update(n.emitterFollow.position, n.currentNormal);
            u.update(n.emitterFollow.position);
            D.update(I, o.array[0].position, c.camPos);
            A.update(I, c.camPos, n.emitterFollow.position, n.currentNormal);
            B.update(I, c.camPos);
            E.update(I, c.camPos, n.emitterFollow.position, n.currentNormal);
            H.update(c.camPos, h.camera.theta, I);
            C.update(c.camPos, h.camera.theta, I, !0);
            G.update(n.emitter.position, n.emitterNormal, c.camPos, I);
            TWEEN.update();
            TriggerUtils.effectors[0] = o.array[0].position.x;
            TriggerUtils.effectors[1] = o.array[0].position.y;
            TriggerUtils.effectors[2] = o.array[0].position.z
        }
    };
    this.changeCamera = function (I) {
        h.camera = I;
        n.settings.camera = I
    };
    this.destruct = function () {
    }
}, PrairieSoup = function (b, g, c) {
    c.camPos = new THREE.Vector3(302.182, -9.045, -105.662);
    var f = new THREE.Vector3, h = new THREE.Vector3, m = new THREE.Vector3, n = new THREE.JSONLoaderAjax;
    n.onLoadStart = function () {
        c.signals.loadItemAdded.dispatch()
    };
    n.onLoadComplete = function () {
        c.signals.loadItemCompleted.dispatch()
    };
    var p = 0, o = 0, t = [], u = new CollisionScene(b, g, 1, c, 1100);
    u.settings.maxSpeedDivider = 1;
    u.settings.allowFlying = !1;
    u.settings.emitterDivider = 1;
    u.settings.shootRayDown = !1;
    u.settings.keepEmitterFollowDown = !0;
    u.settings.normalOffsetAmount = 7;
    u.settings.minDistance = 0;
    u.emitter.position.set(c.camPos.x + 40, c.camPos.y, c.camPos.z + 20);
    u.emitterFollow.position.set(c.camPos.x + 40, c.camPos.y, c.camPos.z + 20);
    var w = new THREE.Vector3(c.camPos.x - 10, c.camPos.y, c.camPos.z + 30), x = new Vectors(30, 10, 10, w), y = THREE.ImageUtils.loadTexture("/files/textures/dark_0.png"), z = THREE.ImageUtils.loadTexture("/files/textures/dark_1.png"), D = THREE.ImageUtils.loadTexture("/files/textures/dark_2.png"), B = THREE.ImageUtils.loadTexture("/files/textures/dark_3.png"), A = THREE.ImageUtils.loadTexture("/files/textures/dark_4.png"), E = new Particles(20, g, 1.5, [y, z, D, B, A], 70, 60);
    E.settings.zeroAlphaStart = !1;
    E.settings.aliveDivider = 2;
    var C = new AnimalSwarm(40, g, x.array);
    C.settings.xPositionMultiplier = 22;
    C.settings.zPositionMultiplier = 18;
    C.settings.shootRayDown = !0;
    C.settings.adaptiveSpeed = !0;
    C.settings.divider = 1;
    C.settings.startPosition = w;
    C.array[7] = "gator";
    C.array[8] = "gator";
    C.array[9] = "animal";
    C.array[11] = "goat";
    C.array[13] = "gator";
    C.array[14] = "arm";
    C.array[15] = "gator";
    C.array[16] = "goat";
    C.array[18] = "goat";
    C.array[19] = "animal";
    C.array[20] = "animal";
    C.array[21] = "animal";
    C.array[22] = "animal";
    C.array[23] = "animal";
    C.array[24] = "animal";
    C.array[25] = "animal";
    C.array[26] = "animal";
    C.array[27] = "animal";
    C.array[28] = "animal";
    C.array[29] = "animal";
    C.array[30] = "octo";
    C.array[31] = "octo";
    C.array[32] = "octo";
    C.array[33] = "octo";
    C.array[34] = "centipede";
    C.array[35] = "goat";
    C.array[36] = "octo";
    n.load({model: "/files/models/soup/taruffalo_black.js", callback: function (I) {
        I = C.addAnimal(I, null, 0.25, [0, 1, 0, 1], [9.2, 9.2]);
        preinitAnimal(I, c.renderer, g)
    }});
    n.load({model: "/files/models/soup/animals_A_black.js", callback: function (I) {
        I = C.addAnimal(I, "animal", 0.35, [3, 1, 2, 0, 1, 0, 2, 0, 2, 3, 0], [11.12, 9.73, 6.7, 3.06]);
        preinitAnimal(I, c.renderer, g)
    }});
    n.load({model: "/files/models/soup/gator_black.js", callback: function (I) {
        I = C.addAnimal(I, "gator", 0.35, null, [4.5]);
        preinitAnimal(I, c.renderer, g)
    }});
    n.load({model: "/files/models/soup/goat_black.js", callback: function (I) {
        I = C.addAnimal(I, "goat", 0.45, null, [5.2]);
        preinitAnimal(I, c.renderer, g)
    }});
    n.load({model: "/files/models/soup/arm_black.js", callback: function (I) {
        I = C.addAnimal(I, "arm", 3, null, [1]);
        preinitAnimal(I, c.renderer, g);
        C.array[14].generalSpecialCase = !0
    }});
    n.load({model: "/files/models/soup/octo_black.js", callback: function (I) {
        I = C.addAnimal(I, "octo", 0.25, [0, 0, 1, 2], [1.629, 3, 1.7]);
        preinitAnimal(I, c.renderer, g)
    }});
    n.load({model: "/files/models/soup/sickle.js", callback: function (I) {
        I = C.addAnimal(I, "sickle", 1.5, null, [0.5]);
        preinitAnimal(I, c.renderer, g)
    }});
    n.load({model: "/files/models/soup/centipede.js", callback: function (I) {
        I = C.addAnimal(I, "centipede", 0.5, null, [1]);
        preinitAnimal(I, c.renderer, g)
    }});
    var H = new AnimalSwarm(10, g, x.array);
    H.settings.flying = !0;
    H.settings.xPositionMultiplier = 24;
    H.settings.zPositionMultiplier = 12;
    H.settings.constantSpeed = 2;
    H.settings.divider = 4;
    H.settings.flyingDistance = -15;
    n.load({model: "/files/models/soup/birds_A_black.js", callback: function (I) {
        I = H.addAnimal(I, null, 0.4, [0, 0, 0, 0, 1, 0, 0, 0, 0, 1], [12, 14]);
        preinitAnimal(I, c.renderer, g)
    }});
    var G = new Trail(80, g);
    G.settings.spread = 10;
    G.settings.aliveDivider = 40;
    G.settings.tweenTime = 800;
    G.settings.scale = 0.3;
    G.settings.offsetAmount = 10;
    G.settings.yscale = 0.15;
    n.load({model: "/files/models/soup/darkblob01.js", callback: function (I) {
        var V = G.addInstance(I, null, !1, !1);
        preInitModel(I, renderer, g, V)
    }});
    this.update = function (I, V) {
        if (!isNaN(I) && !(I > 1E3 || I == 0)) {
            if (V) {
                c.camPos.copy(V.matrixWorld.getPosition());
                u.settings.camera = V
            } else {
                c.camPos.x = b.matrixWorld.n14;
                c.camPos.y = b.matrixWorld.n24;
                c.camPos.z = b.matrixWorld.n34;
                u.settings.camera = b
            }
            h.copy(c.camPos);
            m.copy(h.subSelf(f).normalize());
            f.copy(c.camPos);
            if (c.camPos.x > 1090) {
                c.camPos.set(302.182, -9.045, -105.662);
                u.reset(c.camPos.x, c.camPos.y, c.camPos.z);
                x.reset(c.camPos.x, c.camPos.y, c.camPos.z);
                C.reset(c.camPos.x, c.camPos.y, c.camPos.z);
                H.reset(c.camPos.x, c.camPos.y, c.camPos.z);
                E.reset(c.camPos.x, c.camPos.y, c.camPos.z)
            }
            p += I;
            o += I;
            u.update(c.camPos, I);
            x.update(u.emitterFollow.position, u.currentNormal);
            E.update(I, x.array[0].position);
            C.update(I, c.camPos);
            H.update(I, c.camPos);
            G.update(u.emitterFollow.position, u.emitterNormal, c.camPos, I);
            if (p >= 100) {
                C.create(u.emitterFollow.position, u.currentNormal, m);
                p = 0
            }
            if (o >= 500) {
                H.create(u.emitterFollow.position, u.currentNormal, m);
                o = 0
            }
            TWEEN.update();
            var $ = new THREE.Vector3(u.emitter.position.x, u.emitter.position.y, u.emitter.position.z);
            t.unshift($);
            if (t.length > 10) {
                $ = t[10];
                ROME.TrailShaderUtils.updateLava(I * 1.0E-4, $.x, -$.z);
                ROME.TrailShaderUtils.setMarkAtWorldPosition($.x, -$.z)
            }
            TriggerUtils.effectors[0] = x.array[1].position.x;
            TriggerUtils.effectors[1] = x.array[1].position.y;
            TriggerUtils.effectors[2] = x.array[1].position.z;
            c.prairieSoupHead.copy(u.emitter.position)
        }
    };
    this.destruct = function () {
    }
}, DunesSoup = function (b, g, c) {
    function f() {
        if (m == 0) {
            h.set("raven|raven|raven|vulture|vulture|raven|raven|raven|raven|raven|vulture");
            D.changeColor([0, 1118481, 0, 1118481, 0, 1118481], 0.5);
            A.switchGeometry(p);
            m = 1
        } else {
            h.set("eagle|owl|parrot|flamingo|hummingbird|eagle|owl|stork|parrot|hummingbird|eagle");
            D.changeColor([14283771, 15004149, 16777215, 15658734, 14480378, 13825020], 0.25);
            A.switchGeometry(o);
            m = 0
        }
    }

    var h = this;
    c.camPos = new THREE.Vector3(0, 0, 0);
    var m = 0, n = !1, p = [], o = [], t = new THREE.JSONLoaderAjax;
    t.onLoadStart = function () {
        c.signals.loadItemAdded.dispatch()
    };
    t.onLoadComplete = function () {
        c.signals.loadItemCompleted.dispatch()
    };
    c.signals.mousedown.add(function () {
        if (n) {
            for (var E = 0; E < B.initSettings.numOfAnimals; ++E) {
                var C = E == 0 ? (new TWEEN.Tween(B.array[E])).to({scale: 0.0010}, 300).easing(TWEEN.Easing.Linear.EaseNone).onComplete(f) : (new TWEEN.Tween(B.array[E])).to({scale: 0.0010}, 300).easing(TWEEN.Easing.Linear.EaseNone);
                C.start()
            }
            for (E = 0; E < A.initSettings.numOfInstances; ++E) {
                C = (new TWEEN.Tween(A.array[E].c.scale)).to({x: 0.0010, y: 0.0010, z: 0.0010}, 300).easing(TWEEN.Easing.Linear.EaseNone);
                C.start()
            }
        }
    });
    h.addAnimal = function (E, C) {
        E == undefined && (E = "eagle");
        var H = u[E].geometry, G = u[E].scale, I = u[E].speed, V = u[E].index;
        u[E].flying ? B.switchAnimal(H, G, I, V, C) : runningAnimals.switchAnimal(H, G, I, V, C)
    };
    h.set = function (E) {
        E = E.split("|");
        for (var C = 0, H = 0, G = 0; G < E.length; ++G) {
            var I = E[G], V = !0;
            u[I].flying && (V = !1);
            if (V) {
                h.addAnimal(I, C);
                ++C
            } else {
                h.addAnimal(I, H);
                ++H
            }
        }
    };
    var u = {};
    u.eagle = {geometry: null, index: 0, speed: 4.848, scale: 1.3, flying: !0};
    u.owl = {geometry: null, index: 1, speed: 7, scale: 1.3, flying: !0};
    u.parrot = {geometry: null, index: 2, speed: 7.5, scale: 1.3, flying: !0};
    u.hummingbird = {geometry: null, index: 3, speed: 3.5, scale: 1.3, flying: !0};
    u.flamingo = {geometry: null, index: 0, speed: 8.5, scale: 1.3, flying: !0};
    u.stork = {geometry: null, index: 1, speed: 8.623, scale: 1.3, flying: !0};
    u.raven = {geometry: null, index: 0, speed: 14, scale: 1.75, flying: !0};
    u.vulture = {geometry: null, index: 1, speed: 12, scale: 1.55, flying: !0};
    var w = new CollisionScene(b, g, 0.15, c, 1200);
    w.settings.emitterDivider = 5;
    w.settings.maxSpeedDivider = 0.1;
    w.settings.capBottom = -500;
    w.settings.allowFlying = !0;
    var x = new THREE.Vector3(c.camPos.x, c.camPos.y - 1E3, c.camPos.z), y = new Vectors(50, 3, 10, x), z = [new THREE.MeshBasicMaterial({color: 14283771, opacity: 0.25}), new THREE.MeshBasicMaterial({color: 15004149, opacity: 0.25}), new THREE.MeshBasicMaterial({color: 16777215, opacity: 0.25}), new THREE.MeshBasicMaterial({color: 15658734, opacity: 0.25}), new THREE.MeshBasicMaterial({color: 14480378, opacity: 0.25}), new THREE.MeshBasicMaterial({color: 13825020, opacity: 0.25})], D = new Ribbons(6, y.array, g, z);
    D.settings.ribbonPulseMultiplier_1 = 20;
    D.settings.ribbonPulseMultiplier_2 = 0.01;
    D.settings.ribbonMin = 0.05;
    D.settings.ribbonMax = 0.1;
    var B = new AnimalSwarm_dunes(11, g, y.array);
    B.settings.flying = !0;
    B.settings.flyingDistance = 0;
    B.settings.divider = 1;
    B.settings.constantSpeed = 0.8;
    B.settings.respawn = !1;
    B.settings.startPosition = x;
    B.settings.xPositionMultiplier = 50;
    B.settings.zPositionMultiplier = 30;
    for (x = 0; x < 12; ++x)x % 3 == 0 && (B.array[x] = "b");
    t.load({model: "/files/models/soup/birds_A_life.js", callback: function (E) {
        u.eagle.geometry = E;
        u.owl.geometry = E;
        u.parrot.geometry = E;
        u.hummingbird.geometry = E;
        E = B.addAnimal(E, null, 2.8, [0, 1, 2, 3], 1.2);
        preinitAnimal(E, c.renderer, g)
    }});
    t.load({model: "/files/models/soup/birds_B_life.js", callback: function (E) {
        u.flamingo.geometry = E;
        u.stork.geometry = E;
        E = B.addAnimal(E, "b", 2.8, [1, 0], 1.2);
        preinitAnimal(E, c.renderer, g)
    }});
    t.load({model: "/files/models/soup/birds_A_black.js", callback: function (E) {
        u.raven.geometry = E;
        u.vulture.geometry = E
    }});
    var A = new Trail(80, g);
    A.settings.freeRotation = !0;
    A.settings.tweenTime = 800;
    A.settings.aliveDivider = 50;
    A.settings.offsetAmount = 0;
    A.settings.shootRayDown = !0;
    A.settings.scale = 1.5;
    for (x = 0; x < 80; ++x)A.array[x] = "0" + (x % 4 + 1);
    t.load({model: "/files/models/soup/grass01.js", callback: function (E) {
        o.push(E);
        var C = A.addInstance(E, "01", !1);
        preInitModel(E, renderer, g, C)
    }});
    t.load({model: "/files/models/soup/grass02.js", callback: function (E) {
        o.push(E);
        var C = A.addInstance(E, "02", !1);
        preInitModel(E, renderer, g, C)
    }});
    t.load({model: "/files/models/soup/grass03.js", callback: function (E) {
        o.push(E);
        var C = A.addInstance(E, "03", !1);
        preInitModel(E, renderer, g, C)
    }});
    t.load({model: "/files/models/soup/grassFlower.js", callback: function (E) {
        o.push(E);
        var C = A.addInstance(E, "04", !1);
        preInitModel(E, renderer, g, C)
    }});
    t.load({model: "/files/models/soup/darkblob01.js", callback: function (E) {
        p.push(E);
        preInitModel(E, renderer, g, object)
    }});
    this.update = function (E, C) {
        if (!isNaN(E) && !(E > 1E3 || E == 0)) {
            if (C) {
                c.camPos.copy(C.matrixWorld.getPosition());
                w.settings.camera = C
            } else {
                c.camPos.x = b.matrixWorld.n14;
                c.camPos.y = b.matrixWorld.n24;
                c.camPos.z = b.matrixWorld.n34;
                w.settings.camera = b
            }
            w.update(c.camPos, E);
            y.update(w.emitterFollow.position, w.currentNormal);
            D.update(w.emitterFollow.position);
            B.update(E, c.camPos);
            TWEEN.update();
            c.camPos.y < 1200 && A.update(w.emitter.position, w.emitterNormal, c.camPos, E);
            n = !0
        }
    };
    this.destruct = function () {
    }
}, Ribbon = function (b, g, c) {
    b = b || 100;
    g = g || 10;
    c = c || 10;
    THREE.Geometry.call(this);
    g /= 2;
    b /= c;
    for (var f = [], h = 0; h < c + 2; ++h) {
        var m = h * b, n = -g;
        f.push(this.vertices.push(new THREE.Vertex(new THREE.Vector3(m, g, 0))) - 1);
        f.push(this.vertices.push(new THREE.Vertex(new THREE.Vector3(m, n, 0))) - 1)
    }
    for (h = 0; h < c * 2; h += 2) {
        this.faces.push(new THREE.Face3(f[h], f[h + 2], f[h + 1]));
        this.faces.push(new THREE.Face3(f[h + 2], f[h + 3], f[h + 1]))
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
Ribbon.prototype = new THREE.Geometry;
Ribbon.prototype.constructor = Ribbon;
ROME = {};
ROME.Animal = function (b, g) {
    var c = ROME.AnimalAnimationData.init(b, g), f = {};
    f.morph = 0;
    f.animalA = {frames: undefined, currentFrame: 0, lengthInFrames: 0, currentTime: 0, lengthInMS: 0, timeScale: 1, name: ""};
    f.animalB = {frames: undefined, currentFrame: 0, lengthInFrames: 0, currentTime: 0, lengthInMS: 0, timeScale: 1, name: ""};
    f.availableAnimals = c.availableAnimals;
    f.mesh = new THREE.Mesh(b, c.material);
    var h = !1, m = f.mesh.morphTargetForcedOrder, n = c.material;
    f.play = function (o, t, u, w, x) {
        if (!h) {
            h = !0;
            f.morph = 0;
            THREE.AnimationHandler.addToUpdate(f)
        }
        t = t !== undefined ? t : o;
        p(o, f.animalA);
        p(t, f.animalB);
        f.animalA.currentTime = w ? w : 0;
        f.animalB.currentTime = x ? x : 0;
        f.update(0)
    };
    f.update = function (o) {
        if (f.mesh._modelViewMatrix) {
            var t, u = ["animalA", "animalB"], w, x, y, z, D, B;
            w = 0;
            x = u.length;
            for (B = 0; w < x; w++) {
                t = f[u[w]];
                D = t.currentTime;
                t.currentTime = (t.currentTime + o * t.timeScale) % t.lengthInMS;
                if (D > t.currentTime)t.currentFrame = 0;
                D = 0;
                y = t.currentFrame;
                for (z = t.lengthInFrames - 1; y < z; y++)if (t.currentTime >= t.frames[y].time && t.currentTime < t.frames[y + 1].time) {
                    D = y;
                    break
                }
                t.currentFrame = D;
                y = D + 1 < z ? D + 1 : 0;
                m[B++] = t.frames[D].index;
                m[B++] = t.frames[y].index;
                D = t.frames[D].time;
                y = t.frames[y].time > D ? t.frames[y].time : t.frames[y].time + t.lengthInMS;
                t = (t.currentTime - D) / (y - D);
                n.uniforms[u[w] + "Interpolation"].value = t
            }
            n.uniforms.animalMorphValue.value = f.morph;
            if (n.attributes[f.animalA.name] !== undefined)n.attributes.colorAnimalA.buffer = n.attributes[f.animalA.name].buffer;
            if (n.attributes[f.animalB.name] !== undefined)n.attributes.colorAnimalB.buffer = n.attributes[f.animalB.name].buffer
        }
    };
    f.setNewTargetAnimal = function (o, t) {
        if (f.morph === 1) {
            for (var u in f.animalA)f.animalA[u] = f.animalB[u];
            f.animalB.currentTime = t ? t : 0;
            p(o, f.animalB);
            f.morph = 0
        } else console.log("Error: Cannot change animal target if morph != 1. Skipping.")
    };
    var p = function (o, t) {
        if (ROME.AnimalAnimationData[o] !== undefined) {
            t.frames = ROME.AnimalAnimationData[o];
            t.lengthInFrames = t.frames.length;
            t.lengthInMS = t.frames[t.lengthInFrames - 1].time;
            t.name = o.toLowerCase();
            t.normalsOffset = Math.floor(t.frames.length * 0.5, 10)
        } else console.log("Error: Couldn't find data for animal " + o)
    };
    return f
};
ROME.AnimalShader = {uniforms: function () {
    return THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights, {animalAInterpolation: {type: "f", value: 0}, animalBInterpolation: {type: "f", value: 0}, animalMorphValue: {type: "f", value: 0}, lightScale: {type: "f", value: 1}, lightOffset: {type: "v3", value: new THREE.Vector3(0, 0, 0)}}])
}, attributes: function () {
    return{colorAnimalA: {type: "c", boundTo: "faces", value: []}, colorAnimalB: {type: "c", boundTo: "faces", value: []}}
}, vertexShader: ["uniform \tfloat\tanimalAInterpolation;\nuniform \tfloat\tanimalBInterpolation;\nuniform \tfloat\tanimalMorphValue;\nattribute\tvec3\tcolorAnimalA;\nattribute\tvec3\tcolorAnimalB;\nvarying vec3 vColor;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.lights_pars_vertex, "uniform float lightScale;\nuniform vec3 lightOffset;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvColor = mix( colorAnimalA, colorAnimalB, animalMorphValue );\nvec3 animalA = mix( morphTarget0, morphTarget1, animalAInterpolation );\nvec3 animalB = mix( morphTarget2, morphTarget3, animalBInterpolation );\nvec3 morphed = mix( animalA,      animalB,      animalMorphValue );\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvLightWeighting = vec3( 0.2 );\nvec4 lDirection = viewMatrix * vec4( vec3( 0.0, 1.0, 1.0 ), 0.0 );\nfloat directionalLightWeighting = dot( transformedNormal, normalize( lDirection.xyz ) ) * 0.5 + 0.5;\nvLightWeighting += vec3( 1.0 ) * directionalLightWeighting;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n}"].join("\n"), fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_pars_fragment, "varying vec3 vLightWeighting;\nvarying vec3 vColor;\nvoid main() {\ngl_FragColor = vec4( vLightWeighting, 1.0 );\ngl_FragColor = gl_FragColor * vec4( vColor, 1.0 ) * vec4( 0.9, 0.85, 0.8, 1.0 );", THREE.ShaderChunk.fog_fragment, "}"].join("\n")};
ROME.AnimalAnimationData = {animalNames: ["tarbuffalo", "bearbrown", "horse", "deer", "mountainlion", "goldenRetreiver", "fox", "seal", "chow", "raccoon", "bunny", "frog", "elk", "moose", "fishA", "fishB", "fishC", "fish", "sockPuppet", "blackWidow", "crab", "scorp", "goat", "gator", "tarbuffalo_runB", "tarbuffalo", "wolf", "panther", "bearblack", "toad", "eagle", "owl", "parrot", "hummingBird", "flamingo", "stork", "butterflyA", "butterflyB", "butterflyC", "butterflyD", "butterflyLowA", "butterflyLowB", "butterflyLowC", "butterflyLowD", "raven", "vulture", "bison", "sickle", "armHand", "sickle", "centipede", "shdw2", "shdw5", "drownArm_A", "drownArm_C"], colorVariations: {armhand: {hRange: 0.02, sRange: 0.1, vRange: 0.05, hOffset: 0, sOffset: 0, vOffset: -0.1}, bearBlack: {hRange: 0, sRange: 0.1, vRange: 0.075, hOffset: 0, sOffset: 0, vOffset: -0.1}, bearBrown: {hRange: 0.02, sRange: 0.15, vRange: 0.15, hOffset: -0.01, sOffset: 0.05, vOffset: -0.15}, blackWidow: {hRange: 0.02, sRange: 0.1, vRange: 0.05, hOffset: 0, sOffset: 0, vOffset: -0.1}, bunny: {hRange: 0.05, sRange: 0.125, vRange: 0.2, hOffset: 0, sOffset: -0.05, vOffset: 0}, butterflyA: {hRange: 0.02, sRange: 0.1, vRange: 0.15, hOffset: 0, sOffset: 0, vOffset: 0}, butterflyB: {hRange: 0.02, sRange: 0.1, vRange: 0.15, hOffset: 0, sOffset: 0, vOffset: 0}, butterflyC: {hRange: 0.02, sRange: 0.1, vRange: 0.15, hOffset: 0, sOffset: 0, vOffset: 0}, butterflyD: {hRange: 0.02, sRange: 0.1, vRange: 0.15, hOffset: 0, sOffset: 0, vOffset: 0}, centipede: {hRange: 0.05, sRange: 0, vRange: 0.55, hOffset: 0, sOffset: 0.1, vOffset: -0.45}, chow: {hRange: 0.025, sRange: 0.15, vRange: 0.1, hOffset: 0, sOffset: -0.1, vOffset: -0.1}, cow: {hRange: 0, sRange: 0, vRange: 0.2, hOffset: 0, sOffset: 0.05, vOffset: -0.25}, cowCarcass: {hRange: 0, sRange: 0, vRange: 0, hOffset: 0, sOffset: -0.1, vOffset: 0}, crab: {hRange: 0.07, sRange: 0, vRange: 0.15, hOffset: -0.025, sOffset: 0.15, vOffset: -0.16}, deer: {hRange: 0.03, sRange: 0.15, vRange: 0.25, hOffset: -0.012, sOffset: 0.05, vOffset: 0}, eagle: {hRange: 0.075, sRange: 0.1, vRange: 0.25, hOffset: 0, sOffset: 0.1, vOffset: -0.05}, elk: {hRange: 0.03, sRange: 0.1, vRange: 0.3, hOffset: -0.0075, sOffset: 0, vOffset: -0.2}, fish: {hRange: 0, sRange: 0, vRange: 0.2, hOffset: 0, sOffset: 0, vOffset: 0}, flamingo: {hRange: 0.1, sRange: 0.15, vRange: 0.25, hOffset: -0.03, sOffset: 0.1, vOffset: -0.15}, fox: {hRange: 0.03, sRange: 0.15, vRange: 0.25, hOffset: -0.012, sOffset: 0.05, vOffset: 0}, frog: {hRange: 0.05, sRange: 0.1, vRange: 0.25, hOffset: 0.01, sOffset: 0.05, vOffset: -0.1}, gator: {hRange: 0.05, sRange: 0, vRange: 0.2, hOffset: -0.05, sOffset: 0, vOffset: -0.26}, goat: {hRange: 0.02, sRange: 0.07, vRange: 0.1, hOffset: 0, sOffset: 0, vOffset: -0.2}, goldenRetreiver: {hRange: 0.025, sRange: 0.2, vRange: 0.05, hOffset: 0, sOffset: -0.1, vOffset: 0.015}, horse: {hRange: 0.025, sRange: 0.1, vRange: 0.25, hOffset: -0.0050, sOffset: 0, vOffset: -0.1}, hummingbird: {hRange: 0.05, sRange: 0.1, vRange: 0.3, hOffset: -0.02, sOffset: 0.1, vOffset: -0.3}, moose: {hRange: 0.07, sRange: 0.05, vRange: 0.1, hOffset: 0, sOffset: 0, vOffset: -0.2}, mountainlion: {hRange: 0.02, sRange: 0.1, vRange: 0.15, hOffset: 0, sOffset: 0.1, vOffset: -0.05}, owl: {hRange: 0.025, sRange: 0.4, vRange: 0.15, hOffset: -0.0050, sOffset: -0.3, vOffset: -0.1}, panther: {hRange: 0, sRange: 0.1, vRange: 0.075, hOffset: 0, sOffset: 0, vOffset: -0.16}, parrot: {hRange: 0.05, sRange: 0.1, vRange: 0.3, hOffset: -0.025, sOffset: 0.1, vOffset: -0.1}, raccoon: {hRange: 0, sRange: 0.1, vRange: 0.25, hOffset: 0.6, sOffset: -0.1, vOffset: -0.2}, raven: {hRange: 0.02, sRange: 0.1, vRange: 0.1, hOffset: 0, sOffset: 0, vOffset: -0.1}, scorp: {hRange: 0, sRange: 0.1, vRange: 0.075, hOffset: 0, sOffset: 0, vOffset: -0.15}, seal: {hRange: 0, sRange: 0, vRange: 0.05, hOffset: 0, sOffset: 0.05, vOffset: -0.1}, shdw2: {hRange: 0, sRange: 0.1, vRange: 0.06, hOffset: 0, sOffset: -0.05, vOffset: -0.15}, sickle: {hRange: 0.04, sRange: 0, vRange: 0.1, hOffset: 0, sOffset: -0.2, vOffset: -0.3}, stork: {hRange: 0, sRange: 0.1, vRange: 0.2, hOffset: 0.02, sOffset: -0.05, vOffset: -0.05}, tarbuffalo: {hRange: 0.04, sRange: 0.1, vRange: 0.1, hOffset: -0.015, sOffset: 0, vOffset: -0.175}, toad: {hRange: 0.07, sRange: 0, vRange: 0.1, hOffset: -0.02, sOffset: 0, vOffset: -0.25}, vulture: {hRange: 0.01, sRange: 0.25, vRange: 0.08, hOffset: 0, sOffset: -0.1, vOffset: -0.16}, wolf: {hRange: 0, sRange: 0.2, vRange: 0.06, hOffset: -0.05, sOffset: -0.15, vOffset: -0.1}, zero: {hRange: 0, sRange: 0, vRange: 0, hOffset: 0, sOffset: 0, vOffset: 0}}, animalVariationMap: {armhand: "armhand", bearbrown: "bearBrown", bearblack: "bearBlack", blackwidow: "blackWidow", bunny: "bunny", butterflya: "butterflyA", butterflyb: "butterflyB", butterflyc: "butterflyC", butterflyd: "butterflyD", centipede: "centipede", chow: "chow", cow: "cow", cowcarcass: "cowCarcass", crab: "crab", deer: "deer", eagle: "eagle", elk: "elk", fisha: "fish", fishb: "fish", fishc: "fish", fishd: "fish", flamingo: "flamingo", fox: "fox", frog: "frog", gator: "gator", goat: "goat", goldenretreiver: "goldenRetreiver", horse: "horse", hummingbird: "hummingbird", moose: "moose", mountainlion: "mountainlion", panther: "panther", owl: "owl", parrot: "parrot", raccoon: "raccoon", raven: "raven", scorpion: "scorp", seal: "seal", shdw: "shdw2", sickle: "sickle", stork: "stork", tarbuffalo: "tarbuffalo", toad: "toad", vulture: "vulture", wolf: "wolf", bison: "tarbuffalo"}, init: function (b, g) {
    if (b.initialized) {
        u = new THREE.MeshShaderMaterial({uniforms: ROME.AnimalShader.uniforms(), attributes: {}, vertexShader: ROME.AnimalShader.vertexShader, fragmentShader: ROME.AnimalShader.fragmentShader, fog: !0, lights: !0, morphTargets: !0});
        for (n in b.customAttributes) {
            var c = b.customAttributes[n];
            u.attributes[n] = n === "colorAnimalA" || n === "colorAnimalB" ? {type: "c", size: 3, boundTo: c.boundTo, value: c.value, array: undefined, buffer: undefined, needsUpdate: !1, __webglInitialized: !0} : c
        }
    } else {
        b.initialized = !0;
        c = [];
        var f, h, m;
        u = b.morphTargets;
        var n, p, o, t;
        if (g) {
            p = 0;
            for (o = u.length; p < o; p++) {
                n = 0;
                for (m = this.animalNames.length; n < m; n++) {
                    h = this.animalNames[n];
                    if (u[p].name.indexOf(h) !== -1)break
                }
                if (n === m) {
                    h = u[p].name;
                    for (n = 0; n < h.length; n++) {
                        m = h.charCodeAt(n);
                        if (!(m >= 65 && m <= 90 || m >= 97 && m <= 122))break
                    }
                    this.animalNames.push(h.slice(0, n))
                }
            }
        }
        n = 0;
        for (m = this.animalNames.length; n < m; n++) {
            h = this.animalNames[n];
            f = this[h];
            t = 0;
            if (f === undefined || f.length === 0) {
                f = this[h] = [];
                p = 0;
                for (o = u.length; p < o; p++)if (u[p].name.indexOf(h) !== -1) {
                    f.push({index: p, time: t});
                    t += parseInt(1E3 / 24, 10);
                    c.indexOf(h) === -1 && c.push(h)
                }
            } else {
                p = 0;
                for (o = u.length; p < o; p++)c.indexOf(h) === -1 && u[p].name.indexOf(h) !== -1 && c.push(h)
            }
        }
        var u = new THREE.MeshShaderMaterial({uniforms: ROME.AnimalShader.uniforms(), attributes: ROME.AnimalShader.attributes(), vertexShader: ROME.AnimalShader.vertexShader, fragmentShader: ROME.AnimalShader.fragmentShader, lights: !0, morphTargets: !0, vertexColors: THREE.VertexColors}), w;
        f = b.morphColors;
        t = u.attributes;
        if (b.morphColors && b.morphColors.length) {
            p = 0;
            for (o = f.length; p < o; p++) {
                w = f[p];
                h = w.name;
                for (n = 0; n < h.length; n++) {
                    m = h.charCodeAt(n);
                    if (!(m >= 65 && m <= 90 || m >= 97 && m <= 122))break
                }
                h = h.slice(0, n).toLowerCase();
                t[h] = {type: "c", boundTo: "faces", value: w.colors};
                n = this.colorVariations.zero;
                this.animalVariationMap[h] !== undefined && (n = this.colorVariations[this.animalVariationMap[h]]);
                u.uniforms.lightScale.value = n.lScale ? n.lScale : 0.5;
                n.lOffset ? u.uniforms.lightOffset.value.set(n.lOffset[0], n.lOffset[1], n.lOffset[2]) : u.uniforms.lightOffset.value.set(0.6, 0.6, 0.6);
                randomizeColors(t[h].value, n)
            }
            t.colorAnimalA.value = f[0].colors;
            t.colorAnimalB.value = f[0].colors;
            n = 0;
            for (m = c.length; n < m; n++) {
                h = c[n].toLowerCase();
                p = 0;
                for (o = f.length; p < o; p++) {
                    w = f[p].name.toLowerCase();
                    if (w.indexOf(h) !== -1)break
                }
                if (p === o) {
                    console.error("Animal.constructor: Morph Color missing for animal " + h + ". Deploying backup plan.");
                    t[h] = {type: "c", boundTo: "faces", value: []};
                    p = 0;
                    for (o = b.faces.length; p < o; p++)t[h].value.push(new THREE.Color(16711680))
                }
            }
        } else {
            console.error("Animal.constructor: Morph Colors doesn't exist, deploying fallback!");
            p = 0;
            for (o = b.faces.length; p < o; p++)t.colorAnimalA.value.push(new THREE.Color(16711935));
            t.colorAnimalB.value = t.colorAnimalA.value;
            n = 0;
            for (m = c; n < m; n++)t[c[n]] = {type: "c", boundTo: "faces", value: t.colorAnimalA.value}
        }
        b.availableAnimals = c;
        b.customAttributes = u.attributes
    }
    return{availableAnimals: b.availableAnimals, material: u}
}};
function randomizeColors(b, g) {
    var c, f, h, m, n, p;
    c = 0;
    for (f = b.length; c < f; c++) {
        h = b[c];
        m = g.hRange * Math.random() + g.hOffset;
        n = g.sRange * Math.random() + g.sOffset;
        p = g.vRange * Math.random() + g.vOffset;
        THREE.ColorUtils.adjustHSV(h, m, n, p)
    }
}
ROME.Animal_old = function (b, g) {
    var c = new THREE.MeshShaderMaterial({uniforms: ROME.AnimalShader_old.uniforms, vertexShader: ROME.AnimalShader_old.vertex, fragmentShader: ROME.AnimalShader_old.fragment, morphTargets: !0, vertexColors: b.materials[0][0].vertexColors, lights: !0}), f = {};
    f.mesh = new THREE.Mesh(b, c);
    f.morph = 0;
    f.animalA = {frames: undefined, currentFrame: 0, lengthInFrames: 0, currentTime: 0, lengthInMS: 0, timeScale: 1};
    f.animalB = {frames: undefined, currentFrame: 0, lengthInFrames: 0, currentTime: 0, lengthInMS: 0, timeScale: 1};
    f.availableAnimals = ROME.AnimalAnimationData_old.init(b, g);
    for (var h = !1, m = f.mesh.morphTargetForcedOrder, n, p, o, t, u = 0; u < b.faces.length; u++) {
        n = b.faces[u].color;
        p = 0 * Math.random() + 0;
        o = 0 * Math.random() + 0;
        t = 0.4 * Math.random() + -0.1;
        THREE.ColorUtils.adjustHSV(n, p, o, t)
    }
    f.play = function (x, y, z, D, B) {
        if (!h) {
            h = !0;
            f.morph = 0;
            THREE.AnimationHandler.addToUpdate(f)
        }
        w(x, f.animalA);
        w(y, f.animalB);
        f.animalA.currentTime = D ? D : 0;
        f.animalB.currentTime = B ? B : 0;
        f.update(0)
    };
    f.update = function (x) {
        var y, z = ["animalA", "animalB"], D, B, A, E, C, H;
        D = 0;
        B = z.length;
        for (H = 0; D < B; D++) {
            y = f[z[D]];
            C = y.currentTime;
            y.currentTime = (y.currentTime + x * y.timeScale) % y.lengthInMS;
            if (C > y.currentTime)y.currentFrame = 0;
            C = 0;
            A = y.currentFrame;
            for (E = y.lengthInFrames - 1; A < E; A++)if (y.currentTime >= y.frames[A].time && y.currentTime < y.frames[A + 1].time) {
                C = A;
                break
            }
            y.currentFrame = C;
            A = C + 1 < E ? C + 1 : 0;
            m[H++] = y.frames[C].index;
            m[H++] = y.frames[A].index;
            C = y.frames[C].time;
            A = y.frames[A].time > C ? y.frames[A].time : y.frames[A].time + y.lengthInMS;
            y = (y.currentTime - C) / (A - C);
            c.uniforms[z[D] + "Interpolation"].value = y
        }
        c.uniforms.animalMorphValue.value = f.morph
    };
    f.setNewTargetAnimal = function (x, y) {
        if (f.morph === 1) {
            for (var z in f.animalA)f.animalA[z] = f.animalB[z];
            f.animalB.currentTime = y ? y : 0;
            w(x, f.animalB);
            f.morph = 0
        } else console.log("Error: Cannot change animal target if morph != 1. Skipping.")
    };
    var w = function (x, y) {
        if (ROME.AnimalAnimationData_old[x] !== undefined) {
            y.frames = ROME.AnimalAnimationData_old[x];
            y.lengthInFrames = y.frames.length;
            y.lengthInMS = y.frames[y.lengthInFrames - 1].time
        } else console.log("Error: Couldn't find data for animal " + x)
    };
    return f
};
ROME.AnimalShader_old = {uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.lights, {animalAInterpolation: {type: "f", value: 0}, animalBInterpolation: {type: "f", value: 0}, animalMorphValue: {type: "f", value: 0}}]), vertex: ["uniform float\tanimalAInterpolation;\nuniform float\tanimalBInterpolation;\nuniform float\tanimalMorphValue;\nvarying vec3 \tvLightWeighting;", THREE.ShaderChunk.map_pars_vertex, THREE.ShaderChunk.lightmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_pars_vertex, THREE.ShaderChunk.color_pars_vertex, "void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.map_vertex, THREE.ShaderChunk.lightmap_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.color_vertex, "vec3 transformedNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.lights_vertex, "vec3 animalA = mix( morphTarget0, morphTarget1, animalAInterpolation );\nvec3 animalB = mix( morphTarget2, morphTarget3, animalBInterpolation );\nvec3 morphed = mix( animalA,      animalB,      animalMorphValue );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n}"].join("\n"), fragment: ["uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;", THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, "void main() {\ngl_FragColor = vec4( diffuse, opacity );\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );", THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.fog_fragment, "}"].join("\n")};
ROME.AnimalAnimationData_old = {animalNames: ["sockPuppet_jump", "sockPuppet_popUp"], init: function (b, g) {
    var c = [], f, h, m = b.morphTargets, n, p, o, t, u;
    if (g) {
        o = 0;
        for (t = m.length; o < t; o++) {
            n = 0;
            for (p = this.animalNames.length; n < p; n++) {
                h = this.animalNames[n];
                if (m[o].name.indexOf(h) !== -1)break
            }
            if (n === p) {
                h = m[o].name;
                for (n = 0; p < h.length; n++) {
                    f = h.charCodeAt(n);
                    if (!(f >= 65 && f <= 90 || f >= 97 && f <= 122))break
                }
                this.animalNames.push(h.slice(0, n))
            }
        }
    }
    n = 0;
    for (p = this.animalNames.length; n < p; n++) {
        h = this.animalNames[n];
        f = this[h];
        u = 0;
        if (f === undefined || f.length === 0) {
            f = this[h] = [];
            o = 0;
            for (t = m.length; o < t; o++)if (m[o].name.indexOf(h) !== -1) {
                f.push({index: o, time: u});
                u += parseInt(1E3 / 24, 10);
                c.indexOf(h) === -1 && c.push(h)
            }
        } else {
            o = 0;
            for (t = m.length; o < t; o++)c.indexOf(h) === -1 && m[o].name.indexOf(h) !== -1 && c.push(h)
        }
    }
    return c
}};
var Ribbons = function (b, g, c, f) {
    var h = this, m = [], n = [];
    h.initSettings = {numOfRibbons: b || 6};
    h.settings = {ribbonPulseMultiplier_1: 5.5, ribbonPulseMultiplier_2: 5.5, ribbonMin: 1.5, ribbonMax: 3, visible: !0};
    var p = 0, o;
    for (o = 0; o < h.initSettings.numOfRibbons; ++o) {
        var t = new Ribbon(15, 6, g.length - 20), u = new THREE.Mesh(t, f[o % f.length]);
        u.dynamic = !0;
        u.doubleSided = !0;
        u.position.set(0, -500, 0);
        c.addObject(u);
        m.push({r: t, rm: u, offset: 3 + Math.floor(Math.random() * 10)});
        n.push(u)
    }
    this.changeColor = function (w, x) {
        for (o = 0; o < h.initSettings.numOfRibbons; ++o) {
            m[o].rm.materials[0].color.setHex(w[o % w.length]);
            m[o].rm.materials[0].opacity = x
        }
    };
    this.update = function (w) {
        p += 0.1;
        for (o = 0; o < g.length; ++o)for (var x = g[o].position.x, y = g[o].position.y, z = g[o].position.z, D = 0; D < b; ++D) {
            var B = m[D].r, A = m[D].offset;
            if (!(o < A)) {
                var E = Math.cos((o - p * 10) / 10) * h.settings.ribbonPulseMultiplier_1, C = Math.cos((o - p * 10) / 8) * h.settings.ribbonPulseMultiplier_2, H = D * (Math.PI * 2 / m.length), G = Math.cos(H + (o - p * 10) / 8) * E;
                E *= Math.sin(H + (o - p * 10) / 8);
                for (H = 0; H < 2; ++H) {
                    var I = (o - A) * 2 + H;
                    if (B.vertices[I] != undefined) {
                        var V = o - p * 2, $ = Math.max(h.settings.ribbonMin, o / (10 + C));
                        $ = Math.min($, h.settings.ribbonMax);
                        var X = Math.cos(V / 3) * $;
                        V = Math.sin(V / 3) * $;
                        B.vertices[I].position.x = x - w.x + X + G;
                        if (H == 0) {
                            B.vertices[I].position.y = y + V + E - w.y;
                            B.vertices[I].position.z = z + X + G - w.z
                        } else {
                            B.vertices[I].position.y = y - V + E - w.y;
                            B.vertices[I].position.z = z - X + G - w.z
                        }
                    }
                }
            }
        }
        for (o = 0; o < m.length; ++o) {
            x = m[o].rm;
            x.position = w;
            B = m[o].r;
            B.__dirtyVertices = !0;
            x.visible = h.settings.visible
        }
    }
}, Vectors = function (b, g, c, f) {
    var h = this;
    h.array = [];
    var m;
    h.initSettings = {length: b || 50};
    h.settings = {divider: g || 4, normaldivider: c || 10, absoluteTrail: !1, startPosition: f || new THREE.Vector3(0, 0, 0)};
    for (m = 0; m < h.initSettings.length; ++m) {
        b = new THREE.Vector3(0, 0, 0);
        b.copy(h.settings.startPosition);
        b = {position: b, lastposition: new THREE.Vector3(0, 0, 0), normal: new THREE.Vector3(0, 1, 0), scale: 1};
        h.array.push(b)
    }
    this.update = function (n, p) {
        for (m = 0; m < h.initSettings.length; ++m) {
            var o = h.array[m];
            if (m == 0)var t = n.x, u = n.y, w = n.z, x = p.x, y = p.y, z = p.z; else {
                t = h.array[m - 1].lastposition.x;
                u = h.array[m - 1].lastposition.y;
                w = h.array[m - 1].lastposition.z;
                x = h.array[m - 1].normal.x;
                y = h.array[m - 1].normal.y;
                z = h.array[m - 1].normal.z
            }
            h.array[m].lastposition.x = o.position.x;
            h.array[m].lastposition.y = o.position.y;
            h.array[m].lastposition.z = o.position.z;
            if (h.settings.absoluteTrail) {
                o.position.x = t;
                o.position.y = u;
                o.position.z = w;
                o.normal.x = x;
                o.normal.y = y;
                o.normal.z = z
            } else {
                u = (u - o.position.y) / h.settings.divider;
                w = (w - o.position.z) / h.settings.divider;
                o.position.x += (t - o.position.x) / h.settings.divider;
                o.position.y += u;
                o.position.z += w;
                t = (y - o.normal.y) / h.settings.normaldivider;
                z = (z - o.normal.z) / h.settings.normaldivider;
                o.normal.x += (x - o.normal.x) / h.settings.normaldivider;
                o.normal.y += t;
                o.normal.z += z
            }
        }
    };
    this.reset = function (n, p, o) {
        for (var t = 0; t < h.array.length; ++t) {
            var u = h.array[t];
            u.position.x = n;
            u.position.y = p;
            u.position.z = o
        }
    }
}, Particles = function (b, g, c, f, h, m, n) {
    var p = this, o = [];
    n = n || THREE.NormalBlending;
    p.initSettings = {numOfParticleSystems: b || 25, numInSystem: h || 60, spread: m || 50, particleSize: c || 8};
    p.settings = {aliveDivider: 3, zeroAlphaStart: !0, visible: !0, gravitateTowardsCamera: !1};
    var t;
    c = new THREE.Geometry;
    for (t = 0; t < p.initSettings.numInSystem; t++) {
        h = new THREE.Vector3(Math.random() * p.initSettings.spread - p.initSettings.spread / 2, Math.random() * p.initSettings.spread - p.initSettings.spread / 2, Math.random() * p.initSettings.spread - p.initSettings.spread / 2);
        c.vertices.push(new THREE.Vertex(h))
    }
    for (t = 0; t < p.initSettings.numOfParticleSystems; t++) {
        h = new THREE.ParticleBasicMaterial({size: p.initSettings.particleSize, map: f[t % f.length], transparent: !0, depthTest: !0, blending: n});
        h = new THREE.ParticleSystem(c, h);
        h.rotation.x = Math.random() * Math.PI;
        h.rotation.y = Math.random() * Math.PI;
        h.rotation.z = Math.random() * Math.PI;
        o.push({c: h, alivetime: t});
        g.addObject(h)
    }
    this.update = function (u, w, x) {
        if (isNaN(u) || u > 1E3)u = 1E3 / 60;
        u /= 60;
        for (t = 0; t < b; ++t) {
            var y = o[t].c;
            o[t].alivetime += u / p.settings.aliveDivider;
            if (o[t].alivetime >= b) {
                o[t].alivetime = 0;
                y.scale.x = y.scale.y = y.scale.z = 0.5;
                y.position.x = w.x;
                y.position.y = w.y;
                y.position.z = w.z;
                if (p.settings.gravitateTowardsCamera) {
                    var z = -100;
                    w.x > x.x && (z = 100);
                    o[t].c.tox = w.x - z;
                    o[t].c.toy = 0;
                    o[t].c.toz = w.z - 100;
                    z = y.position.x - o[t].c.tox;
                    var D = y.position.y - o[t].c.toy, B = y.position.z - o[t].c.toz;
                    z = 1E3 + Math.abs(z * z + D * D + B * B) / 25;
                    y.position.y = w.y + 50;
                    y.rotation.x = Math.random() * Math.PI + Math.PI / 2;
                    y.rotation.y = Math.random() * Math.PI;
                    y.rotation.z = Math.random() * Math.PI + Math.PI / 2;
                    y.scale.x = y.scale.y = y.scale.z = 1.25;
                    (new TWEEN.Tween(y.position)).to({x: o[t].c.tox, y: o[t].c.toy, z: o[t].c.toz}, z).easing(TWEEN.Easing.Linear.EaseNone).start();
                    (new TWEEN.Tween(y.rotation)).to({x: 0, z: 0}, z).easing(TWEEN.Easing.Quadratic.EaseIn).start();
                    (new TWEEN.Tween(y.scale)).to({x: 5, y: 0.05, z: 5}, z).easing(TWEEN.Easing.Linear.EaseNone).start()
                }
                y.materials[0].opacity = p.settings.zeroAlphaStart ? 0 : 1
            } else {
                z = o[t].alivetime;
                if (!p.settings.gravitateTowardsCamera) {
                    y.position.y += 0.1;
                    y.rotation.y += 0.015;
                    y.rotation.z += 0.01;
                    y.scale.x = y.scale.y = y.scale.z = 0.5 + Math.max(z / 15, 1)
                }
                z = p.settings.zeroAlphaStart ? z / 4 : 1 - z / (o.length * 2);
                z = Math.min(z, 1);
                y.materials[0].opacity = z
            }
        }
    };
    this.reset = function (u, w, x) {
        for (var y = 0; y < o.length; ++y) {
            var z = o[y].c;
            z.position.x = u;
            z.position.y = w;
            z.position.z = x
        }
    }
}, AnimalSwarm = function (b, g) {
    var c = this;
    c.array = [];
    new THREE.Vector3;
    var f = 0;
    c.initSettings = {numOfAnimals: b || 30};
    c.settings = {divider: 2, flying: !1, flyingDistance: 35, xPositionMultiplier: 30, zPositionMultiplier: 30, constantSpeed: null, visible: !0, shootRayDown: !1, addaptiveSpeed: !1, capy: null, startPosition: new THREE.Vector3(0, 0, 0), switchPosition: !1, respawn: !0, avoidCamera: !1, killAtDistance: !1};
    var h;
    this.addAnimal = function (m, n, p, o, t, u) {
        n = n || null;
        var w = p || 1.2;
        o = o || null;
        for (h = 0; h < c.initSettings.numOfAnimals; ++h)if (!(n == null && c.array[h] != undefined || n != c.array[h])) {
            t == null && (t = [1]);
            var x = u ? ROME.Animal_old(m, !1) : ROME.Animal(m, !1), y = x.mesh;
            y.position.copy(c.settings.startPosition);
            p = 0.02 + Math.random() / 8;
            h < 2 && (p = 0.15);
            p = Math.max(p, 0.1);
            y.matrixAutoUpdate = !1;
            y.visible = !1;
            g.addChild(y);
            var z = 0, D = 0;
            if (o != null) {
                z = o[h % o.length] % x.availableAnimals.length;
                D = z + 1;
                if (Math.round(Math.random()) == 1 && z > 0 || D > x.availableAnimals.length - 1)D = z - 1
            }
            var B = t[z], A = t[D];
            x.play(x.availableAnimals[z], x.availableAnimals[D], 0, Math.random(), Math.random());
            var E = Math.random();
            h < 2 && (E = 0);
            ray = new THREE.Ray;
            ray.direction = new THREE.Vector3(0, -1, 0);
            p = {c: y, a: x, f: h, keepRunning: !1, time: 0, lifetime: 0, dead: !1, startMorph: z, endMorph: D, speeda: B, speedb: A, toPosition: new THREE.Vector3, active: !1, normal: new THREE.Vector3(0, 1, 0), count: E, scale: p * w, origscale: p * w, ray: ray, rayIndex: h % 2, lastToy: 0, sockPuppetSpecialCase: u, generalSpecialCase: !1};
            c.array[h] = p
        }
        return x
    };
    this.removeAnimal = function (m, n) {
        for (h = 0; h < c.initSettings.numOfAnimals; ++h) {
            var p = c.array[h].a;
            if (p != undefined) {
                var o = c.array[h].startMorph, t = c.array[h].endMorph;
                if (p.mesh.geometry == m && (n == o || n == t)) {
                    g.removeChild(c.array[h].c);
                    delete c.array[h].a;
                    c.array[h].active = !1;
                    break
                }
            }
        }
    };
    this.switchAnimal = function (m, n, p, o, t) {
        var u = n || 1.2;
        for (h = 0; h < c.initSettings.numOfAnimals; ++h) {
            t != undefined && (h = t);
            n = c.array[h].a;
            var w = c.array[h].startMorph, x = c.array[h].endMorph;
            if (!(n != undefined && n.mesh.geometry == m && t == undefined && (w == o || x == o))) {
                console.log("adding on " + h);
                t = c.array[h].c.position;
                m = ROME.Animal(m, !1);
                w = m.mesh;
                n = 0.02 + Math.random() / 8;
                h < 2 && (n = 0.15);
                n = Math.max(n, 0.1);
                w.position = t;
                w.visible = !1;
                w.scale.set(1.0E-5, 1.0E-5, 1.0E-5);
                w.updateMatrix();
                w.matrixAutoUpdate = !1;
                g.removeChild(c.array[h].c);
                g.addChild(w);
                m.play(m.availableAnimals[o], m.availableAnimals[o], 0, Math.random(), Math.random());
                c.array[h].c = w;
                c.array[h].a = m;
                c.array[h].scale = n * u;
                c.array[h].origscale = n * u;
                c.array[h].speeda = p;
                c.array[h].speedb = p;
                c.array[h].active = !1;
                c.array[h].startMorph = o;
                c.array[h].endMorph = o;
                break
            }
        }
    };
    this.create = function (m, n, p) {
        for (h = 0; h < c.initSettings.numOfAnimals; ++h)if (!(c.array[h].active || c.array[h].a == undefined)) {
            c.array[h].active = !0;
            c.array[h].c.position.copy(m);
            c.array[h].normal.copy(n);
            c.array[h].c.visible = !0;
            c.array[h].f = 0;
            c.array[h].time = 0;
            c.array[h].lifetime = 0;
            c.array[h].dead = !1;
            c.array[h].scale = c.array[h].origscale;
            c.array[h].keepRunning = !1;
            c.array[h].gravity = 0;
            c.array[h].count = 1;
            if (!c.settings.respawn)c.array[h].f = h;
            if (p != undefined) {
                c.array[h].keepRunning = !0;
                c.array[h].toPosition.copy(p)
            }
            c.array[h].scale *= 0.25;
            (new TWEEN.Tween(c.array[h])).to({scale: c.array[h].origscale}, 400).easing(TWEEN.Easing.Linear.EaseNone).start();
            m = 180;
            p != undefined && (m = 350);
            p = c.array[h].origscale;
            c.array[h].c.position.x -= n.x * p * m;
            c.array[h].c.position.y -= n.y * p * m;
            c.array[h].c.position.z -= n.z * p * m;
            c.array[h].lastToy = c.array[h].c.position.y;
            break
        }
    };
    this.update = function (m, n, p) {
        if (isNaN(m) || m > 1E3 || m == 0)m = 1E3 / 60;
        ++f;
        for (h = 0; h < c.initSettings.numOfAnimals; ++h) {
            var o = c.array[h];
            if (o.active) {
                n = o.c;
                var t = o.scale, u = o.normal, w = c.array[h].dead;
                c.array[h].time += m;
                c.array[h].lifetime += m;
                if (c.array[h].lifetime > 2500 && c.settings.respawn)c.array[h].dead = !0;
                c.array[h].count += 0.06;
                var x = Math.max(Math.cos(c.array[h].count) - 0.5, 0);
                x = Math.min(x, 1);
                c.array[h].a.morph = x;
                var y = o.speeda;
                if (Math.round(x) == 1)y = o.speedb;
                x = n.position.x + c.array[h].toPosition.x * 20;
                var z = n.position.y + c.array[h].toPosition.y * 20, D = n.position.z + c.array[h].toPosition.z * 20;
                if (c.settings.capy != null && z < c.settings.capy)z = c.settings.capy;
                if (c.settings.flying) {
                    c.array[h].toPosition.y += 0.12;
                    z = c.array[h].toPosition.y + c.settings.flyingDistance
                }
                if (c.settings.constantSpeed != null) {
                    c.array[h].a.animalA.timeScale = c.settings.constantSpeed;
                    c.array[h].a.animalB.timeScale = c.settings.constantSpeed
                }
                if (c.settings.shootRayDown)if (c.array[h].rayIndex == f % 2) {
                    o = o.ray;
                    o.origin.copy(n.position);
                    o.origin.y += 500;
                    var B = g.collisions.rayCastNearest(o);
                    if (B) {
                        z = o.origin.y - (B.distance * 1 + 3);
                        u = B.mesh.matrixRotationWorld.multiplyVector3(B.normal).normalize();
                        c.array[h].lastToy = z;
                        c.array[h].normal.copy(u)
                    }
                } else z = c.array[h].lastToy;
                B = o = 17;
                if (c.array[h].keepRunning) {
                    o = 4;
                    B = Math.abs(z - n.position.y) > 10 ? o / 2 : o * 2
                }
                c.settings.flying && (B = 8);
                if (c.array[h].dead) {
                    if (c.settings.flying)z += 10; else {
                        z -= u.y * 3;
                        x -= u.x * 3;
                        D -= u.z * 3
                    }
                    B = 20
                }
                x = (x - n.position.x) / o;
                z = (z - n.position.y) / B;
                D = (D - n.position.z) / o;
                if (c.settings.killAtDistance) {
                    o = n.position.x - p.x;
                    B = n.position.y - p.y;
                    var A = n.position.z - p.z;
                    if (Math.abs(o * o + B * B + A * A) > 25E3)c.array[h].dead = !0
                }
                c.array[h].dead && !w && (new TWEEN.Tween(c.array[h])).to({scale: c.array[h].scale * 0.01}, 600).easing(TWEEN.Easing.Quartic.EaseIn).start();
                if (c.array[h].dead && t <= 0.0050) {
                    c.array[h].active = !1;
                    c.array[h].c.visible = !1
                } else {
                    w = y / 20;
                    isNaN(w) && (w = 1);
                    if (!c.array[h].keepRunning) {
                        z > w && (z = w);
                        z < -w && (z = -w)
                    }
                    x > w && (x = w);
                    x < -w && (x = -w);
                    D > w && (D = w);
                    D < -w && (D = -w);
                    w = new THREE.Vector3(n.position.x + x, n.position.y + z, n.position.z + D);
                    w.subSelf(n.position).normalize();
                    y = new THREE.Vector3;
                    u = new THREE.Vector3(u.x * -1, u.y * -1, u.z * -1);
                    if (c.settings.flying || c.settings.gravity)u = new THREE.Vector3(0, -1, 0);
                    y.cross(w, u);
                    u.cross(w, y);
                    n.matrixWorld.n11 = y.x * t;
                    n.matrixWorld.n12 = u.x * t;
                    n.matrixWorld.n13 = w.x * t;
                    n.matrixWorld.n14 = n.position.x;
                    n.matrixWorld.n21 = y.y * t;
                    n.matrixWorld.n22 = u.y * t;
                    n.matrixWorld.n23 = w.y * t;
                    n.matrixWorld.n24 = n.position.y;
                    n.matrixWorld.n31 = y.z * t;
                    n.matrixWorld.n32 = u.z * t;
                    n.matrixWorld.n33 = w.z * t;
                    n.matrixWorld.n34 = n.position.z;
                    n.position.x += x;
                    n.position.y += z;
                    n.position.z += D
                }
            }
        }
    };
    this.reset = function (m, n, p) {
        for (var o = 0; o < c.initSettings.numOfAnimals; ++o) {
            var t = c.array[o].c;
            t.position.x = m;
            t.position.y = n;
            t.position.z = p;
            c.array[o].active = !1
        }
    }
}, AnimalSwarm2 = function (b, g) {
    var c = this;
    c.array = [];
    new THREE.Vector3;
    c.initSettings = {numOfAnimals: b || 30};
    c.settings = {divider: 2, flying: !1, flyingDistance: 35, xPositionMultiplier: 25, zPositionMultiplier: 25, constantSpeed: null, visible: !0, shootRayDown: !1, addaptiveSpeed: !1, capy: null, startPosition: new THREE.Vector3(0, 0, 0), switchPosition: !1};
    var f;
    this.addAnimal = function (h, m, n, p, o, t) {
        m = m || null;
        var u = n || 1.2;
        p = p || null;
        for (f = 0; f < c.initSettings.numOfAnimals; ++f)if (!(m == null && c.array[f] != undefined || m != c.array[f])) {
            o == null && (o = [1]);
            var w = t ? ROME.Animal_old(h, !1) : ROME.Animal(h, !1), x = w.mesh;
            x.position.copy(c.settings.startPosition);
            n = 0.02 + Math.random() / 8;
            f < 2 && (n = 0.15);
            n = Math.max(n, 0.1);
            x.matrixAutoUpdate = !1;
            x.visible = !1;
            g.addChild(x);
            var y = 0, z = 0;
            if (p != null) {
                y = p[f % p.length] % w.availableAnimals.length;
                z = Math.floor(Math.random() * w.availableAnimals.length)
            }
            var D = o[y], B = o[z];
            w.play(w.availableAnimals[y], w.availableAnimals[z], 0, Math.random(), Math.random());
            y = Math.random();
            f < 2 && (y = 0);
            ray = new THREE.Ray;
            ray.direction = new THREE.Vector3(0, -1, 0);
            n = {c: x, a: w, positionArray: [], normalArray: [], lifetime: 0, dead: !1, speeda: D, speedb: B, active: !1, normal: new THREE.Vector3(0, 1, 0), toNormal: new THREE.Vector3(0, 1, 0), toPosition: new THREE.Vector3, count: y, scale: n * u, origscale: n * u, ray: ray, sockPuppetSpecialCase: t};
            c.array[f] = n
        }
    };
    this.create = function (h, m, n) {
        for (f = 0; f < c.initSettings.numOfAnimals; ++f)if (!c.array[f].active) {
            c.array[f].active = !0;
            c.array[f].c.position.copy(h);
            c.array[f].toNormal.copy(m);
            c.array[f].c.visible = !0;
            c.array[f].toPosition.copy(n);
            c.array[f].scale = 0.01;
            c.array[f].positionArray = [];
            c.array[f].normalArray = [m];
            c.array[f].lifetime = 0;
            c.array[f].dead = !1;
            if (c.settings.flying) {
                c.array[f].toNormal.set(0, 1, 0);
                c.array[f].normal.set(0, 1, 0)
            }
            (new TWEEN.Tween(c.array[f])).to({scale: c.array[f].origscale}, 300).easing(TWEEN.Easing.Linear.EaseNone).start();
            h = c.array[f].origscale;
            c.array[f].c.position.x -= m.x * h * 100;
            c.array[f].c.position.y -= m.y * h * 100;
            c.array[f].c.position.z -= m.z * h * 100;
            break
        }
    };
    this.update = function (h, m, n, p) {
        if (isNaN(h) || h > 1E3 || h == 0)h = 1E3 / 60;
        for (f = 0; f < c.initSettings.numOfAnimals; ++f) {
            var o = c.array[f];
            if (o.active) {
                c.array[f].positionArray.push(n);
                c.array[f].normalArray.push(p);
                var t = c.array[f].positionArray, u = o.c, w = o.scale, x = o.toNormal, y = o.normal, z = o.toPosition, D = c.array[f].dead;
                c.array[f].lifetime += h;
                if (c.array[f].lifetime > 2500)c.array[f].dead = !0;
                var B = f * (Math.PI * 2 / 6), A = Math.sin(B + (f - 0) / 8) * c.settings.zPositionMultiplier;
                B = z.x + Math.cos(B + (f - 0) / 8) * c.settings.xPositionMultiplier * (1 - Math.abs(y.x));
                var E = z.y + A * (1 - Math.abs(y.y));
                A = z.z + A * (1 - Math.abs(y.z));
                y.y > 0.5 && (E = z.y - 10);
                if (c.settings.capy != null && E < c.settings.capy)E = c.settings.capy;
                if (c.settings.flying) {
                    z = c.settings.flyingDistance;
                    y.x < -0.8 && (B -= z);
                    y.x > 0.8 && (B += z);
                    if (y.y < -0.8 || y.y > 0.8)E += z;
                    y.z < -0.8 && (A -= z);
                    y.z > 0.8 && (A += z)
                }
                c.array[f].count += 0.04;
                var C = Math.max(Math.cos(c.array[f].count), 0);
                C = Math.min(C, 1);
                c.array[f].a.morph = C;
                if (c.settings.constantSpeed != null) {
                    c.array[f].a.animalA.timeScale = c.settings.constantSpeed;
                    c.array[f].a.animalB.timeScale = c.settings.constantSpeed
                }
                z = o.speeda;
                if (Math.round(C) == 1)z = o.speedb;
                C = 8;
                c.array[f].sockPuppetSpecialCase && (C = 100);
                B = (B - u.position.x) / C;
                E = (E - u.position.y) / C;
                A = (A - u.position.z) / C;
                var H = (x.y - y.y) / C, G = (x.z - y.z) / C;
                y.x += (x.x - y.x) / C;
                y.y += H;
                y.z += G;
                o.normal = y;
                x = z;
                E > x && (E = x);
                E < -x && (E = -x);
                B > x && (B = x);
                B < -x && (B = -x);
                A > x && (A = x);
                A < -x && (A = -x);
                if (c.array[f].dead)if (c.settings.flying)E += 2; else {
                    E -= y.y * 2;
                    B -= y.x * 2;
                    A -= y.z * 2
                }
                if (u.position.x + B < m.x + 40 && u.position.x + B > m.x - 40 && u.position.z + A < m.z + 40 && u.position.z + A > m.z - 40)c.array[f].dead = !0;
                c.array[f].dead && !D && (new TWEEN.Tween(c.array[f])).to({scale: c.array[f].scale * 0.1}, 400).easing(TWEEN.Easing.Linear.EaseNone).start();
                if (c.array[f].dead && w <= 0.1) {
                    c.array[f].active = !1;
                    c.array[f].c.visible = !1
                } else {
                    D = new THREE.Vector3(u.position.x + B, u.position.y + E, u.position.z + A);
                    D.subSelf(u.position).normalize();
                    x = new THREE.Vector3;
                    y = new THREE.Vector3(y.x * -1, y.y * -1, y.z * -1);
                    c.settings.flying && (y = new THREE.Vector3(0, -1, 0));
                    x.cross(D, y);
                    y.cross(D, x);
                    u.matrixWorld.n11 = x.x * w;
                    u.matrixWorld.n12 = y.x * w;
                    u.matrixWorld.n13 = D.x * w;
                    u.matrixWorld.n14 = u.position.x;
                    u.matrixWorld.n21 = x.y * w;
                    u.matrixWorld.n22 = y.y * w;
                    u.matrixWorld.n23 = D.y * w;
                    u.matrixWorld.n24 = u.position.y;
                    u.matrixWorld.n31 = x.z * w;
                    u.matrixWorld.n32 = y.z * w;
                    u.matrixWorld.n33 = D.z * w;
                    u.matrixWorld.n34 = u.position.z;
                    w = u.position.x - (u.position.x + B);
                    y = u.position.y - (u.position.y + E);
                    D = u.position.z - (u.position.z + A);
                    if (Math.abs(w * w + y * y + D * D) < h / 4 && t != null && t.length > 0) {
                        t = c.array[f].positionArray.shift();
                        w = c.array[f].normalArray.shift();
                        o.toPosition.copy(t);
                        o.toNormal.copy(w)
                    }
                    u.position.x += B;
                    u.position.y += E;
                    u.position.z += A
                }
            }
        }
    };
    this.reset = function (h, m, n) {
        for (var p = 0; p < c.array.length; ++p) {
            var o = c.array[p].c;
            o.position.x = h;
            o.position.y = m;
            o.position.z = n;
            c.array[p].active = !1
        }
    }
}, AnimalSwarm_dunes = function (b, g, c) {
    var f = this;
    f.array = [];
    var h = 0, m = 0, n = 0;
    f.initSettings = {numOfAnimals: b || 30};
    f.settings = {divider: 2, flying: !1, flyingDistance: 35, xPositionMultiplier: 30, zPositionMultiplier: 30, constantSpeed: null, visible: !0, shootRayDown: !1, addaptiveSpeed: !1, capy: null, startPosition: new THREE.Vector3(0, 0, 0), switchPosition: !1};
    var p = 0, o;
    this.addAnimal = function (t, u, w, x, y, z, D) {
        u = u || null;
        var B = w || 1.2;
        x = x || null;
        y = y || 4;
        D = D || !1;
        for (o = 0; o < f.initSettings.numOfAnimals; ++o)if (!(u == null && f.array[o] != undefined || u != f.array[o])) {
            w = new THREE.Color(Math.random() * 16777215);
            z != undefined && z != null && (w = z[o % z.length]);
            var A = ROME.Animal(t, !1, w), E = A.mesh;
            E.position.set(f.settings.startPosition.x, f.settings.startPosition.y, f.settings.startPosition.z);
            E.updateMatrix();
            E.doubleSided = D;
            var C = Math.floor(o / y);
            w = 0.02 + Math.random() / 8;
            if (o < 2) {
                w = 0.15;
                C = o
            }
            C > h && (h = C);
            w = Math.max(w, 0.1);
            E.matrixAutoUpdate = !1;
            g.addChild(E);
            var H = 0, G = 0;
            if (x != null) {
                H = x[o % x.length] % A.availableAnimals.length;
                G = Math.floor(Math.random() * A.availableAnimals.length)
            }
            A.play(A.availableAnimals[H], A.availableAnimals[G], 0, Math.random(), Math.random());
            H = Math.random();
            o < 2 && (H = 0);
            G = o % 2 == 0;
            ray = new THREE.Ray;
            ray.direction = new THREE.Vector3(0, -1, 0);
            f.array[o] = {c: E, a: A, f: C, count: H, clockwise: G, scale: w * B, ray: ray}
        }
        return A
    };
    this.switchAnimal = function (t, u, w, x, y) {
        var z = u || 1.2;
        for (o = 0; o < f.initSettings.numOfAnimals; ++o) {
            y != undefined && (o = y);
            u = f.array[o].a;
            var D = f.array[o].startMorph, B = f.array[o].endMorph;
            if (!(u != undefined && u.mesh.geometry == t && y == undefined && (D == x || B == x))) {
                y = f.array[o].c.position;
                t = ROME.Animal(t, !1);
                D = t.mesh;
                u = 0.02 + Math.random() / 8;
                o < 2 && (u = 0.15);
                u = Math.max(u, 0.1);
                D.position = y;
                D.visible = !1;
                D.scale.set(1.0E-5, 1.0E-5, 1.0E-5);
                D.updateMatrix();
                D.matrixAutoUpdate = !1;
                g.removeChild(f.array[o].c);
                g.addChild(D);
                t.play(t.availableAnimals[x], t.availableAnimals[x], 0, Math.random(), Math.random());
                f.array[o].c = D;
                f.array[o].a = t;
                f.array[o].scale = u * z;
                f.array[o].origscale = u * z;
                f.array[o].speeda = w;
                f.array[o].speedb = w;
                f.array[o].active = !1;
                f.array[o].startMorph = x;
                f.array[o].endMorph = x;
                f.array[o].scale = 0.0010;
                w = f.array[o].origscale;
                (new TWEEN.Tween(f.array[o])).to({scale: w}, 500).easing(TWEEN.Easing.Linear.EaseNone).start();
                break
            }
        }
    };
    this.update = function (t) {
        p += 0.1;
        isNaN(t);
        m = Math.round(p / 4);
        for (o = 0; o < f.initSettings.numOfAnimals; ++o) {
            var u = f.array[o];
            t = u.c;
            var w = u.f, x = u.scale;
            u = u.clockwise;
            if (m != n && f.settings.switchPosition) {
                if (u)++f.array[o].f; else--f.array[o].f;
                if (f.array[o].f > h) {
                    f.array[o].clockwise = !1;
                    f.array[o].f = h
                }
                if (f.array[o].f <= 0) {
                    f.array[o].clockwise = !0;
                    f.array[o].f = 0
                }
                w = f.array[o].f
            }
            u = o * (Math.PI * 2 / 6);
            var y = Math.sin(u + (o - p * 2) / 5) * f.settings.zPositionMultiplier;
            u = c[w].position.x + Math.cos(u + (o - p * 2) / 5) * f.settings.xPositionMultiplier;
            var z = c[w].position.y + y;
            y = c[w].position.z + y;
            f.array[o].count += 0.03;
            var D = Math.max(Math.cos(f.array[o].count), 0);
            D = Math.min(D, 1);
            f.array[o].a.morph = D;
            if (f.settings.constantSpeed != null) {
                f.array[o].a.animalA.timeScale = f.settings.constantSpeed;
                f.array[o].a.animalB.timeScale = f.settings.constantSpeed
            }
            u = (u - t.position.x) / 10;
            z = (z - t.position.y) / 10;
            y = (y - t.position.z) / 10;
            D = new THREE.Vector3(t.position.x + u, t.position.y + z, t.position.z + y);
            D.subSelf(t.position).normalize();
            var B = new THREE.Vector3;
            w = new THREE.Vector3(c[w].normal.x * -1, c[w].normal.y * -1, c[w].normal.z * -1);
            f.settings.flying && (w = new THREE.Vector3(0, -1, 0));
            B.cross(D, w);
            w.cross(D, B);
            t.matrixWorld.n11 = B.x * x;
            t.matrixWorld.n12 = w.x * x;
            t.matrixWorld.n13 = D.x * x;
            t.matrixWorld.n14 = t.position.x;
            t.matrixWorld.n21 = B.y * x;
            t.matrixWorld.n22 = w.y * x;
            t.matrixWorld.n23 = D.y * x;
            t.matrixWorld.n24 = t.position.y;
            t.matrixWorld.n31 = B.z * x;
            t.matrixWorld.n32 = w.z * x;
            t.matrixWorld.n33 = D.z * x;
            t.matrixWorld.n34 = t.position.z;
            t.position.x += u;
            t.position.y += z;
            t.position.z += y;
            t.visible = f.settings.visible
        }
        n = m
    };
    this.reset = function (t, u, w) {
        for (var x = 0; x < f.array.length; ++x) {
            var y = f.array[x].c;
            y.position.x = t;
            y.position.y = u;
            y.position.z = w
        }
    }
}, AnimalInFrontOfCamera = function (b, g) {
    var c = this, f = [];
    c.initSettings = {numOfAnimals: b || 30};
    c.settings = {};
    var h = 0, m, n = new THREE.Cube(10, 10, 10), p = new THREE.Mesh(n);
    g.addChild(p);
    this.addAnimal = function (o) {
        for (var t = 0; t < c.initSettings.numOfAnimals; ++t) {
            var u = ROME.Animal(o, !1), w = u.mesh, x = 0.02 + Math.random() / 8, y = Math.random() * 120 - 60, z = t * 10 - 10, D = Math.random() * 120 - 60;
            w.position.x = y;
            w.position.y = z;
            w.position.z = D;
            p.addChild(w);
            u.animalA.timeScale = 0.8;
            u.animalB.timeScale = 0.8;
            u.play(u.availableAnimals[0], u.availableAnimals[0], 0, Math.random());
            f.push({c: w, x: y, y: z, z: D, a: u, scale: x * 1.5})
        }
    };
    this.update = function (o, t, u, w) {
        h += 0.1;
        p.position = o;
        if (!w) {
            p.position.x -= Math.cos(t) * 110;
            p.position.z -= Math.sin(t) * 110
        }
        if (isNaN(u) || u > 1E3)u = 1E3 / 60;
        for (m = 0; m < c.initSettings.numOfAnimals; ++m) {
            var x = f[m];
            o = x.c;
            t = x.x;
            w = x.y;
            x = x.z;
            var y = Math.sin(m - h);
            t += Math.cos(m - h);
            w += 0.5 * (u / 20);
            x += y;
            w > 140 && (w = -10);
            o.lookAt(new THREE.Vector3(t, w, x));
            o.position.x = t;
            o.position.y = w;
            o.position.z = x;
            f[m].x = t;
            f[m].y = w;
            f[m].z = x
        }
    }
}, Trail = function (b, g) {
    var c = this;
    c.array = [];
    var f = !1, h = 0, m = new THREE.Ray;
    m.direction = new THREE.Vector3(0, -1, 0);
    c.initSettings = {numOfInstances: b || 100};
    c.settings = {spread: 70, visible: !0, aliveDivider: c.initSettings.numOfInstances, tweenTime: 2500, scale: 1, offsetAmount: 6, freeRotation: !0, yscale: 0.3, shootRayDown: !1};
    var n;
    this.addInstance = function (p, o, t, u, w) {
        o = o || null;
        t = t || !1;
        u = u || !1;
        for (n = 0; n < c.initSettings.numOfInstances; ++n)if (!(o == null && c.array[n] != undefined || o != c.array[n])) {
            var x = w == undefined ? new THREE.Mesh(p, new THREE.MeshFaceMaterial) : new THREE.Mesh(p, w[n % w.length]);
            x.scale.x = x.scale.y = x.scale.z = 1.0E-8;
            var y = {c: x, alivetime: n, normal: new THREE.Vector3, tree: t, lightHouse: u};
            g.addObject(x);
            c.array[n] = y
        }
        return x
    };
    this.switchGeometry = function (p) {
        for (n = 0; n < c.initSettings.numOfInstances; ++n) {
            var o = new THREE.Mesh(p[n % p.length], new THREE.MeshFaceMaterial), t = new THREE.Vector3;
            t.copy(c.array[n].c.position);
            g.removeChild(c.array[n].c);
            g.addChild(o);
            o.position = t;
            c.array[n].c = o;
            o.scale.x = o.scale.y = o.scale.z = 1.0E-8;
            o = c.settings.yscale * c.settings.scale;
            t = zscale = 0.4 * c.settings.scale;
            (new TWEEN.Tween(c.array[n].c.scale)).to({x: t, y: o, z: zscale}, 200).easing(TWEEN.Easing.Linear.EaseNone).start()
        }
    };
    this.update = function (p, o, t, u) {
        if (isNaN(u) || u > 1E3)u = 1E3 / 60;
        h += u;
        u /= c.settings.aliveDivider;
        for (n = 0; n < c.array.length; ++n) {
            var w = c.array[n], x = w.c, y = w.alivetime, z = w.tree;
            w = w.lightHouse;
            y += u;
            if (y > c.initSettings.numOfInstances) {
                if (w && (f || h < 4E3))continue;
                x.position.x = p.x;
                x.position.y = p.y;
                x.position.z = p.z;
                x.rotation.x = 0;
                x.rotation.z = 0;
                x.rotation.y = 0;
                y = c.settings.offsetAmount;
                z && (y = c.settings.offsetAmount + 2);
                var D = 0, B = 0, A = 0;
                if (c.settings.freeRotation) {
                    if (c.settings.shootRayDown) {
                        m.origin.copy(p);
                        m.origin.y += 10;
                        var E = g.collisions.rayCastNearest(m);
                        if (E) {
                            x.position.y = m.origin.y - (E.distance * 0.2 - y);
                            o.set(0, 1, 0)
                        }
                    }
                    x.position.x = p.x - o.x * y;
                    if (!c.settings.shootRayDown)x.position.y = p.y - o.y * y;
                    x.position.z = p.z - o.z * y;
                    x.position.x += (Math.random() * c.settings.spread - c.settings.spread / 2) * (1 - Math.abs(o.x));
                    x.position.z += (Math.random() * c.settings.spread - c.settings.spread / 2) * (1 - Math.abs(o.z));
                    x.rotation.x = 0;
                    x.rotation.z = 0;
                    x.rotation.y = Math.random() * Math.PI;
                    x.up.copy(o);
                    x.lookAt(x.position)
                } else {
                    if (o.x < -0.5) {
                        x.position.x = p.x + y / 2;
                        x.rotation.z = 1.57;
                        x.rotation.x = Math.random() * Math.PI;
                        if (z) {
                            A = x.rotation.z + (Math.random() - 0.5);
                            x.rotation.z = 0;
                            D = x.rotation.x;
                            B = x.rotation.y
                        }
                        x.position.y += Math.random() * c.settings.spread - c.settings.spread / 2;
                        x.position.z += Math.random() * c.settings.spread - c.settings.spread / 2
                    }
                    if (o.x > 0.5) {
                        x.position.x = p.x - y / 2;
                        x.rotation.z = -1.57;
                        if (z) {
                            A = x.rotation.z + (Math.random() - 0.5);
                            x.rotation.z = 0;
                            D = x.rotation.x;
                            B = x.rotation.y
                        }
                        x.rotation.x = Math.random() * Math.PI;
                        x.position.y += Math.random() * c.settings.spread - c.settings.spread / 2;
                        x.position.z += Math.random() * c.settings.spread - c.settings.spread / 2
                    }
                    if (o.y < -0.9) {
                        x.position.y = p.y + y;
                        x.rotation.y = Math.random() * Math.PI;
                        if (z) {
                            A = x.rotation.z + (Math.random() - 0.5);
                            x.rotation.z = 1.57;
                            D = x.rotation.x;
                            B = x.rotation.y
                        }
                        x.position.x += Math.random() * c.settings.spread - c.settings.spread / 2;
                        x.position.z += Math.random() * c.settings.spread - c.settings.spread / 2
                    }
                    if (o.y > 0.9) {
                        x.position.y = p.y - y;
                        x.rotation.y = Math.random() * Math.PI;
                        if (z) {
                            A += x.rotation.z + (Math.random() - 0.5);
                            x.rotation.z = 1.57;
                            D = x.rotation.x;
                            B = x.rotation.y
                        }
                        x.position.x += Math.random() * c.settings.spread - c.settings.spread / 2;
                        x.position.z += Math.random() * c.settings.spread - c.settings.spread / 2
                    }
                    if (o.z < -0.5) {
                        x.position.z = p.z + y / 2;
                        x.rotation.x = -1.57;
                        x.rotation.y = Math.random() * Math.PI;
                        if (z) {
                            D = x.rotation.x + (Math.random() - 0.5);
                            x.rotation.x = 0;
                            A = x.rotation.z;
                            B = x.rotation.y
                        }
                        x.position.y += Math.random() * c.settings.spread - c.settings.spread / 2;
                        x.position.x += Math.random() * c.settings.spread - c.settings.spread / 2
                    }
                    if (o.z > 0.5) {
                        x.position.z = p.z - y / 2;
                        x.rotation.x = 1.57;
                        x.rotation.y = Math.random() * Math.PI;
                        if (z) {
                            D = x.rotation.x + (Math.random() - 0.5);
                            x.rotation.x = 0;
                            A = x.rotation.z;
                            B = x.rotation.y
                        }
                        x.position.y += Math.random() * c.settings.spread - c.settings.spread / 2;
                        x.position.x += Math.random() * c.settings.spread - c.settings.spread / 2
                    }
                }
                z && (new TWEEN.Tween(x.rotation)).to({x: D, y: B, z: A}, c.settings.tweenTime * 2).easing(TWEEN.Easing.Elastic.EaseOut).start();
                if ((z || w) && x.position.x < t.x + 60 && x.position.x > t.x - 60) {
                    x.position.x = t.x + 60;
                    if (x.position.x < t.x)x.position.x = t.x - 60
                }
                if ((z || w) && x.position.z < t.z + 60 && x.position.z > t.z - 60) {
                    x.position.z = t.z + 60;
                    if (x.position.z < t.z)x.position.z = t.z - 60
                }
                x.scale.x = x.scale.y = x.scale.z = 0.0010 * c.settings.scale;
                y = zscale = yscale = 0.1 * c.settings.scale;
                if (w) {
                    y = zscale = yscale = 0.4 * c.settings.scale;
                    if (Math.abs(o.y) < 0.9)continue; else {
                        x.visible = !0;
                        f = !0
                    }
                }
                if (!z && !w) {
                    yscale = c.settings.yscale * c.settings.scale;
                    y = zscale = 0.4 * c.settings.scale
                }
                D = TWEEN.Easing.Quintic.EaseOut;
                if (z || w)D = TWEEN.Easing.Elastic.EaseOut;
                (new TWEEN.Tween(x.scale)).to({x: y, y: yscale, z: zscale}, c.settings.tweenTime).easing(D).start();
                y = 0
            }
            c.array[n].alivetime = y
        }
    }
}, CollisionScene = function (b, g, c, f, h, m) {
    function n(X) {
        X %= A;
        if (X > B)X -= A; else X < -B && (X += A);
        return X
    }

    function p(X, P, S, v, O, J, T, K, R) {
        X = new THREE.Mesh(X, R);
        X.scale.set(P, P, P);
        X.position.set(S, v, O);
        X.rotation.set(J, T, K);
        X.updateMatrix();
        o.settings.useOldRay ? D.addObject(X) : g.addObject(X);
        return X
    }

    var o = this;
    o.currentNormal = new THREE.Vector3(0, 1, 0);
    o.emitterNormal = new THREE.Vector3(0, 1, 0);
    o.distance = 0;
    o.initSettings = {};
    o.settings = {useOldRay: m || !1, maxSpeedDivider: 2, emitterDivider: 5, cameraTargetDivider: 10, capBottom: null, capTop: null, allowFlying: !1, collisionDistance: h || 400, scale: c || 1, shootRayDown: !1, keepEmitterFollowDown: !1, normalOffsetAmount: 6, minDistance: 10, camera: b};
    var t = new THREE.Vector3(0, 0, 1), u = new THREE.Ray, w = new THREE.Matrix4, x = new THREE.Matrix4, y = new THREE.Vector3, z = new THREE.Projector, D = new THREE.Scene;
    b = new THREE.Cube(5, 5, 5);
    o.emitter = p(b, 1, f.camPos.x, f.camPos.y, f.camPos.z, 0, 0, 0, new THREE.MeshBasicMaterial({color: 16777011, opacity: 0.4}));
    o.emitterFollow = p(b, 1, f.camPos.x, f.camPos.y, f.camPos.z, 0, 0, 0, new THREE.MeshBasicMaterial({color: 3407871, opacity: 0.4}));
    o.emitter.visible = !1;
    o.emitterFollow.visible = !1;
    var B = Math.PI, A = B * 2, E = B / 180;
    o.emitterFollow.rotationx = 0;
    o.emitterFollow.rotationy = 0;
    o.emitterFollow.rotationz = 0;
    b = new THREE.Cube(5E4, 5E4, 10, 1, 1, 1);
    c = new THREE.MeshLambertMaterial({color: 255, opacity: 0.2});
    var C = new THREE.Mesh(b, c), H = new THREE.Mesh(b, c);
    b = new THREE.Cube(10, 5E4, 5E4, 1, 1, 1);
    var G = new THREE.Mesh(b, c), I = new THREE.Mesh(b, c);
    b = new THREE.Cube(5E4, 10, 5E4, 1, 1, 1);
    var V = new THREE.Mesh(b, c), $ = new THREE.Mesh(b, c);
    if (o.settings.useOldRay) {
        D.addObject(C);
        D.addObject(H);
        D.addObject(G);
        D.addObject(I);
        D.addObject(V);
        D.addObject($)
    }
    this.addLoaded = function (X, P, S, v) {
        var O = new THREE.MeshLambertMaterial({color: 16711935, opacity: 1});
        X = new THREE.Mesh(X, O);
        X.scale.x = X.scale.y = X.scale.z = P;
        X.rotation = S || new THREE.Vector3;
        X.position = v || new THREE.Vector3;
        D.addObject(X)
    };
    this.update = function (X, P) {
        if (o.settings.useOldRay) {
            I.position.x = X.x + o.settings.collisionDistance;
            G.position.x = X.x - o.settings.collisionDistance;
            I.position.z = X.z;
            I.position.y = X.y;
            G.position.z = X.z;
            G.position.y = X.y;
            C.position.z = X.z - o.settings.collisionDistance;
            H.position.z = X.z + o.settings.collisionDistance;
            C.position.x = X.x;
            C.position.y = X.y;
            H.position.x = X.x;
            H.position.y = X.y;
            $.position.y = X.y - o.settings.collisionDistance;
            V.position.y = X.y + o.settings.collisionDistance;
            $.position.x = X.x;
            $.position.z = X.z;
            V.position.x = X.x;
            V.position.z = X.z;
            if (o.settings.capBottom != null && $.position.y < o.settings.capBottom)$.position.y = o.settings.capBottom;
            if (o.settings.capTop != null && V.position.y < o.settings.capTop)V.position.y = o.settings.capTop
        }
        if (o.settings.useOldRay) {
            var S = new THREE.Vector3(f.mouse.x / f.screenWidth * 2 - 1, -(f.mouse.y / f.screenHeight) * 2 + 1, 0.5);
            z.unprojectVector(S, o.settings.camera);
            var v = new THREE.Ray(X, S.subSelf(X).normalize()), O = v.intersectScene(D);
            if (O.length > 0)for (var J = 0; J < O.length; ++J)if ((S.z < 0 ? O[J].point.z < X.z : O[J].point.z > X.z) && O[J].object != o.emitter && O[J].object != o.emitterFollow) {
                o.emitter.position = O[J].point;
                v = O[J].object.matrixRotationWorld.multiplyVector3(O[J].face.normal.clone());
                o.emitterNormal = v;
                o.currentNormal = v;
                if (O[J].object == I || O[J].object == C || O[J].object == H || O[J].object == G || O[J].object == V) {
                    o.emitterNormal.x = 0;
                    o.emitterNormal.y = 1;
                    o.emitterNormal.z = 0;
                    o.currentNormal.x = 0;
                    o.currentNormal.y = 1;
                    o.currentNormal.z = 0;
                    if (!o.settings.allowFlying)o.emitter.position.y = $.position.y + 5
                }
                break
            }
        } else {
            t.x = f.mouse.x / f.screenWidth * 2 - 1;
            t.y = -(f.mouse.y / f.screenHeight) * 2 + 1;
            t.z = 1;
            u.origin.copy(t);
            w.copy(o.settings.camera.matrixWorld);
            w.multiplySelf(THREE.Matrix4.makeInvert(o.settings.camera.projectionMatrix, x));
            w.multiplyVector3(u.origin);
            u.direction.copy(u.origin);
            u.direction.subSelf(X);
            if ((O = g.collisions.rayCastNearest(u)) && O.distance > o.settings.minDistance) {
                J = O.distance * o.settings.scale;
                if (J > o.settings.collisionDistance)J = o.settings.collisionDistance
            } else {
                O = {mesh: I};
                J = o.settings.collisionDistance
            }
            o.distance = J;
            y.copy(u.origin);
            y.addSelf(u.direction.multiplyScalar(J));
            o.emitter.position = y;
            if (O.normal != undefined) {
                v = O.mesh.matrixRotationWorld.multiplyVector3(O.normal).normalize();
                o.currentNormal = v;
                o.emitterNormal = v
            }
            if (O.mesh == I || O.mesh == C || O.mesh == H || O.mesh == G || O.mesh == V || O.mesh == $) {
                o.currentNormal.set(0, 1, 0);
                if (!o.settings.allowFlying && !o.settings.shootRayDown)o.emitter.position.y = $.position.y;
                if (o.settings.shootRayDown) {
                    u.origin.copy(o.emitter.position);
                    u.direction.set(0, -1, 0);
                    if ((O = g.collisions.rayCastNearest(u)) && O.distance !== -1) {
                        o.emitter.position.y -= O.distance * o.settings.scale;
                        v = O.mesh.matrixRotationWorld.multiplyVector3(O.normal).normalize();
                        o.currentNormal = v
                    } else {
                        o.emitter.position.y = -o.settings.collisionDistance;
                        o.currentNormal.set(0, 1, 0)
                    }
                }
            }
            o.emitter.position.x += o.currentNormal.x * o.settings.normalOffsetAmount;
            o.emitter.position.y += o.currentNormal.y * o.settings.normalOffsetAmount;
            o.emitter.position.z += o.currentNormal.z * o.settings.normalOffsetAmount
        }
        if (isNaN(P) || P > 1E3 || P == 0)P = 1E3 / 60;
        O = P / o.settings.maxSpeedDivider;
        if (o.settings.useOldRay) {
            if (o.currentNormal.y > 0.5 || o.currentNormal.y < -0.5) {
                S = v = o.emitterFollow.rotationy / 180 * B;
                v += B * 0 - B * 0 * Math.random();
                var T = o.emitter.position.x;
                J = o.emitter.position.z;
                T -= o.emitterFollow.position.x;
                var K = J - o.emitterFollow.position.z;
                J = Math.sqrt(T * T + K * K);
                T = Math.atan2(K, T);
                var R = 0;
                K = (J - 4) / 4;
                K > 1 && (K = 1);
                K > 0 && (R += (1 - R) * K * K);
                v += n(T - v) * R;
                T = v - S;
                Math.abs(T) > 12 * E && (v = S + 12 * E * (T < 0 ? -1 : 1));
                J /= 4;
                J > O && (J = O);
                o.emitterFollow.position.x += Math.cos(v) * J;
                o.emitterFollow.position.z += Math.sin(v) * J;
                o.emitterFollow.rotationy = v / E;
                v = o.emitter.position.y;
                v = (v - o.emitterFollow.position.y) / o.settings.emitterDivider;
                v > O && (v = O);
                v < -O && (v = -O);
                o.emitterFollow.position.y += v
            }
            if (o.currentNormal.x > 0.5 || o.currentNormal.x < -0.5) {
                S = v = o.emitterFollow.rotationx / 180 * B;
                v += B * 0 - B * 0 * Math.random();
                R = o.emitter.position.y;
                J = o.emitter.position.z;
                R -= o.emitterFollow.position.y;
                K = J - o.emitterFollow.position.z;
                J = Math.sqrt(K * K + R * R);
                T = Math.atan2(K, R);
                R = 0;
                K = (J - 4) / 4;
                K > 1 && (K = 1);
                K > 0 && (R += (1 - R) * K * K);
                v += n(T - v) * R;
                T = v - S;
                Math.abs(T) > 12 * E && (v = S + 12 * E * (T < 0 ? -1 : 1));
                J /= 4;
                J > O && (J = O);
                o.emitterFollow.position.y += Math.cos(v) * J;
                o.emitterFollow.position.z += Math.sin(v) * J;
                o.emitterFollow.rotationx = v / E;
                J = o.emitter.position.x;
                J = (J - o.emitterFollow.position.x) / o.settings.emitterDivider;
                J > O && (J = O);
                J < -O && (J = -O);
                o.emitterFollow.position.x += J
            }
            if (o.currentNormal.z > 0.5 || o.currentNormal.z < -0.5) {
                S = v = o.emitterFollow.rotationz / 180 * B;
                v += B * 0 - B * 0 * Math.random();
                T = o.emitter.position.x;
                R = o.emitter.position.y;
                T -= o.emitterFollow.position.x;
                R -= o.emitterFollow.position.y;
                J = Math.sqrt(T * T + R * R);
                T = Math.atan2(T, R);
                R = 0;
                K = (J - 4) / 4;
                K > 1 && (K = 1);
                K > 0 && (R += (1 - R) * K * K);
                v += n(T - v) * R;
                T = v - S;
                Math.abs(T) > 12 * E && (v = S + 12 * E * (T < 0 ? -1 : 1));
                J /= 4;
                J > O && (J = O);
                o.emitterFollow.position.y += Math.cos(v) * J;
                o.emitterFollow.position.x += Math.sin(v) * J;
                o.emitterFollow.rotationz = v / E;
                S = o.emitter.position.z;
                S = (S - o.emitterFollow.position.z) / o.settings.emitterDivider;
                S > O && (S = O);
                S < -O && (S = -O);
                o.emitterFollow.position.z += S
            }
        } else {
            J = o.emitter.position.x;
            J = (J - o.emitterFollow.position.x) / o.settings.emitterDivider;
            v = o.emitter.position.y;
            v = (v - o.emitterFollow.position.y) / o.settings.emitterDivider;
            S = o.emitter.position.z;
            S = (S - o.emitterFollow.position.z) / o.settings.emitterDivider;
            v > O && (v = O);
            v < -O && (v = -O);
            J > O && (J = O);
            J < -O && (J = -O);
            S > O && (S = O);
            S < -O && (S = -O);
            o.emitterFollow.position.x += J;
            o.emitterFollow.position.y += v;
            o.emitterFollow.position.z += S
        }
        if (o.settings.keepEmitterFollowDown && !o.settings.useOldRay) {
            o.emitterFollow.position.y = o.emitter.position.y + o.settings.collisionDistance;
            u.origin.copy(o.emitterFollow.position);
            u.direction.set(0, -1, 0);
            if (O = g.collisions.rayCastNearest(u)) {
                o.emitterFollow.position.y -= O.distance * o.settings.scale - o.settings.normalOffsetAmount;
                v = O.mesh.matrixRotationWorld.multiplyVector3(O.normal).normalize();
                o.currentNormal = v
            }
        }
        if (o.settings.useOldRay) {
            S = new THREE.Vector3;
            v = new THREE.Ray(o.emitterFollow.position, S);
            T = 1E4;
            R = o.emitterFollow.position;
            var aa, W;
            S.set(-1, 0, 0);
            v.direction = S;
            O = v.intersectScene(D);
            if (O.length > 0)for (J = 0; J < O.length; ++J)if (O[J].object != o.emitter && O[J].object != G && O[J].object != I) {
                if (O[J].distance < T) {
                    T = O[J].distance;
                    R = O[J].point;
                    W = O[J].face;
                    aa = O[J].object
                }
                break
            }
            S.set(1, 0, 0);
            v.direction = S;
            O = v.intersectScene(D);
            if (O.length > 0)for (J = 0; J < O.length; ++J)if (O[J].object != o.emitter && O[J].object != G && O[J].object != I) {
                if (O[J].distance < T) {
                    T = O[J].distance;
                    R = O[J].point;
                    W = O[J].face;
                    aa = O[J].object
                }
                break
            }
            S.set(0, -1, 0);
            v.direction = S;
            O = v.intersectScene(D);
            if (O.length > 0)for (J = 0; J < O.length; ++J)if (O[J].object != o.emitter && O[J].object != V) {
                if (O[J].distance < T) {
                    T = O[J].distance;
                    R = O[J].point;
                    W = O[J].face;
                    aa = O[J].object
                }
                break
            }
            S.set(0, 0, -1);
            v.direction = S;
            O = v.intersectScene(D);
            if (O.length > 0)for (J = 0; J < O.length; ++J)if (O[J].object != o.emitter && O[J].object != C && O[J].object != H) {
                if (O[J].distance < T) {
                    T = O[J].distance;
                    R = O[J].point;
                    W = O[J].face;
                    aa = O[J].object
                }
                break
            }
            S.set(0, 0, 1);
            v.direction = S;
            O = v.intersectScene(D);
            if (O.length > 0)for (J = 0; J < O.length; ++J)if (O[J].object != o.emitter && O[J].object != C && O[J].object != H) {
                if (O[J].distance < T) {
                    R = O[J].point;
                    W = O[J].face;
                    aa = O[J].object
                }
                break
            }
            o.emitterFollow.position = R;
            if (aa != undefined) {
                v = aa.matrixRotationWorld.multiplyVector3(W.normal.clone());
                o.currentNormal = v
            }
            f.renderer.render(D, o.settings.camera);
            f.renderer.clear()
        }
    };
    this.reset = function (X, P, S) {
        o.emitter.position.set(X, P, S);
        o.emitterFollow.position.set(X, P, S)
    }
};
ROME.TrailShaderUtils = function () {
    var b = {}, g, c, f, h, m, n = -9999999, p = -9999999, o = 9999999, t = 9999999, u, w;
    b.setMaterials = function (z, D, B, A) {
        f = D;
        c = B;
        m = A;
        h = m.getContext();
        g = h.createTexture();
        h.bindTexture(h.TEXTURE_2D, g);
        h.texImage2D(h.TEXTURE_2D, 0, h.RGB, f, f, 0, h.RGB, h.UNSIGNED_BYTE, null);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, h.LINEAR);
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, h.NEAREST);
        ROME.TrailShader.textures.trailMap = new THREE.Texture;
        ROME.TrailShader.textures.trailMap.needsUpdate = !1;
        ROME.TrailShader.textures.trailMap.__webglTexture = g;
        var E, C, H, G, I, V;
        D = 0;
        for (B = z.length; D < B; D++) {
            E = z[D];
            A = E.position.x;
            C = E.position.y;
            V = E.geometry.vertices;
            G = 0;
            for (I = V.length; G < I; G++) {
                H = V[G].position;
                E = H.x + A;
                H = H.y + C;
                n = Math.max(n, E);
                p = Math.max(p, H);
                o = Math.min(o, E);
                t = Math.min(t, H)
            }
        }
        u = n - o;
        w = p - t;
        var $, X;
        for (D = 0; D < B; D++) {
            E = z[D];
            A = E.position.x;
            C = E.position.y;
            V = E.geometry.vertices;
            $ = ROME.TrailShader.attributes();
            X = $.trailUV.value;
            G = 0;
            for (I = V.length; G < I; G++) {
                H = V[G].position;
                X.push(new THREE.Vector2((H.x + A - o) / u, (H.y + C - t) / w))
            }
            A = new THREE.MeshShaderMaterial({uniforms: ROME.TrailShader.uniforms, attributes: $, vertexShader: ROME.TrailShader.vertexShader, fragmentShader: ROME.TrailShader.fragmentShader});
            A.fog = !0;
            A.lights = !0;
            A.vertexColors = 2;
            A.uniforms.trailMap.texture = ROME.TrailShader.textures.trailMap;
            A.uniforms.faceMap.texture = ROME.TrailShader.textures.faceMap;
            A.uniforms.lavaMap.texture = ROME.TrailShader.textures.lavaMap;
            A.uniforms.lavaNoiseMap.texture = ROME.TrailShader.textures.lavaNoiseMap;
            A.uniforms.lavaMap.texture.wrapS = A.uniforms.lavaMap.texture.wrapT = THREE.Repeat;
            A.uniforms.lavaNoiseMap.texture.wrapS = A.uniforms.lavaNoiseMap.texture.wrapT = THREE.Repeat;
            E.materials[0] = A
        }
    };
    b.updateLava = function (z) {
        ROME.TrailShader.uniforms.lavaTime.value += z !== undefined ? z : 1
    };
    var x = NaN, y = NaN;
    b.setMarkAtWorldPosition = function (z, D) {
        if (f && z && D) {
            var B = (z - o) / u * f, A = (D - t) / w * f, E = c.image.width;
            if (B >= 0 && B < f - E && A >= 0 && A < f - E) {
                if (isNaN(x)) {
                    x = B;
                    y = A
                }
                var C = B - x, H = A - y, G = Math.sqrt(C * C + H * H) + 1;
                C = E * C / G * 0.8;
                H = E * H / G * 0.8;
                h.bindTexture(h.TEXTURE_2D, g);
                var I = x, V = y;
                do {
                    h.texSubImage2D(h.TEXTURE_2D, 0, Math.floor(I), Math.floor(V), h.RGB, h.UNSIGNED_BYTE, c.image);
                    I += C;
                    V += H;
                    G -= E * 0.8
                } while (G > E);
                x = B;
                y = A
            }
        }
    };
    return b
}();
ROME.TrailShader = {init: function () {
    ROME.TrailShader.textures.faceMap = THREE.ImageUtils.loadTexture("/files/textures/PaintDubs.jpg");
    ROME.TrailShader.textures.lavaMap = THREE.ImageUtils.loadTexture("/files/textures/lava.jpg");
    ROME.TrailShader.textures.lavaNoiseMap = THREE.ImageUtils.loadTexture("/files/textures/Color_noise.jpg")
}, textures: {trailMap: undefined, faceMap: undefined, lavaMap: undefined, lavaNoiseMap: undefined}, uniforms: {trailMap: {type: "t", value: 0, texture: undefined}, faceMap: {type: "t", value: 1, texture: undefined}, lavaMap: {type: "t", value: 2, texture: undefined}, lavaNoiseMap: {type: "t", value: 3, texture: undefined}, lavaHeadPosition: {type: "v3", value: new THREE.Vector3(0, 0, 0)}, lavaTime: {type: "f", value: 0}, lavaUvScale: {type: "v2", value: new THREE.Vector2(50, 50)}, fogColor: {type: "c", value: new THREE.Color}, fogDensity: {type: "f", value: 0}, enableLighting: {type: "i", value: 1}, ambientLightColor: {type: "fv", value: []}, directionalLightDirection: {type: "fv", value: []}, directionalLightColor: {type: "fv", value: []}, pointLightColor: {type: "fv", value: []}, pointLightPosition: {type: "fv", value: []}, pointLightDistance: {type: "fv1", value: []}}, attributes: function () {
    return{trailUV: {type: "v2", boundTo: "vertices", value: []}}
}, vertexShader: "#if MAX_DIR_LIGHTS > 0\nuniform vec3 \t\tdirectionalLightColor    [ MAX_DIR_LIGHTS ];\nuniform vec3 \t\tdirectionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 \t\tpointLightColor   [ MAX_POINT_LIGHTS ];\nuniform vec3 \t\tpointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float\t \tpointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\nuniform vec3 \t\tambientLightColor;\nattribute\tvec2\ttrailUV;\nvarying \tvec2\tvUV;\nvarying \tvec2\tvPos;\nvarying \tvec2\tvTrailUV;\nvarying\tvec3\tvColor;\nvarying  \tvec4\tvLightWeighting;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvLightWeighting = vec4( ambientLightColor, 1.0 );\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting.xyz += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\nvUV = uv;\nvTrailUV = trailUV;\nvColor = color;\nvPos = position.xy;\ngl_Position = projectionMatrix * mvPosition;\n}", fragmentShader: "uniform \tsampler2D \tfaceMap;\nuniform \tsampler2D \ttrailMap;\nuniform \tsampler2D \tlavaMap;\nuniform \tsampler2D \tlavaNoiseMap;\nuniform  \tvec2\t\tlavaUvScale;\nuniform  \tfloat\t\tlavaTime;\nuniform \tvec3 \t\tlavaHeadPosition;\nuniform \tvec3 \t\tfogColor;\nuniform \tfloat \t\tfogDensity;\nvarying \tvec2\t\tvUV;\nvarying \tvec2\t\tvPos;\nvarying \tvec2\t\tvTrailUV;\nvarying\tvec3\t\tvColor;\nvarying \tvec4 \t\tvLightWeighting;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( -fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\nvec4 lavaColor;\nfloat mixValue, f;\nfloat offsetU = sin( lavaTime * 10.0 ) * 0.002;\nfloat offsetV = cos( lavaTime * 11.0 ) * 0.002;\nvec2 uvOffsetA = vec2( offsetU, offsetV );\nvec2 uvOffsetB = vec2( -offsetU, offsetV );\nvec2 lookup;\ngl_FragColor = vec4( vColor, 1.0 ) * texture2D(faceMap, vUV);\nlookup = texture2D(lavaNoiseMap, vTrailUV * vec2(65.0)).rg;\nf = texture2D(trailMap, vTrailUV + vec2(0.01) * lookup).r;\nif( f > 0.5)\n{\nmixValue = abs((texture2D(lavaNoiseMap, vTrailUV.yx * vec2(40.0, -40.0)).r - 0.5));\nmixValue = max(max(1.0 - mixValue * 32.0, 0.0) * (lookup.r - 0.5) * 8.0, 0.0);\ngl_FragColor = vec4(mixValue) * texture2D( lavaMap, vTrailUV * vec2(200.0) - vec2( lavaTime * 2.5)) * texture2D(lavaNoiseMap, vTrailUV * vec2(10.0) - vec2( lavaTime * 2.5)).rrrr * vec4(2.0);\n}\ngl_FragColor = gl_FragColor * vLightWeighting;\ngl_FragColor.a = 1.0;\n}"};
var Stragglers = function (b, g) {
    var c = this;
    c.array = [];
    c.initSettings = {numOfAnimals: b || 3};
    c.settings = {divider: 2, constantSpeed: null, addaptiveSpeed: !1, capy: null};
    var f;
    this.addAnimal = function (h, m, n, p, o) {
        m = m || null;
        var t = n || 1.2;
        p = p || null;
        for (f = 0; f < c.initSettings.numOfAnimals; ++f)if (!(m == null && c.array[f] != undefined || m != c.array[f])) {
            o == null && (o = [1]);
            var u = ROME.Animal(h, !1), w = u.mesh;
            n = 0.02 + Math.random() / 8;
            n = Math.max(n, 0.1);
            w.matrixAutoUpdate = !1;
            w.visible = !1;
            g.addChild(w);
            var x = 0, y = 0;
            if (p != null) {
                x = p[f % p.length] % u.availableAnimals.length;
                y = x + 1;
                if (Math.round(Math.random()) == 1 && x > 0 || y > u.availableAnimals.length - 1)y = x - 1
            }
            var z = o[x], D = o[y];
            u.play(u.availableAnimals[x], u.availableAnimals[y], 0, Math.random(), Math.random());
            y = Math.random();
            f < 2 && (y = 0);
            n = {c: w, a: u, active: !1, startMorph: x, lifetime: 0, speeda: z, speedb: D, normal: new THREE.Vector3(0, -1, 0), position: new THREE.Vector3(0, 0, 0), toVector: new THREE.Vector3(0, 0, 0), count: y, scale: n * t, origscale: n * t};
            c.array[f] = n
        }
    };
    this.create = function (h, m, n) {
        for (f = 0; f < c.initSettings.numOfAnimals; ++f)if (!c.array[f].active) {
            c.array[f].active = !0;
            c.array[f].position.copy(h);
            c.array[f].normal.copy(m);
            c.array[f].c.position.copy(h);
            c.array[f].c.visible = !0;
            c.array[f].toVector = n.subSelf(h).normalize();
            c.array[f].lifetime = 0;
            c.array[f].toVector.x *= 1 - Math.abs(m.x);
            c.array[f].toVector.y *= 1 - Math.abs(m.y);
            c.array[f].toVector.z *= 1 - Math.abs(m.z);
            c.array[f].toVector.z = Math.random();
            c.array[f].toVector.x = Math.random() - 0.5;
            c.array[f].scale = 0.01;
            (new TWEEN.Tween(c.array[f])).to({scale: c.array[f].origscale}, 2500).easing(TWEEN.Easing.Elastic.EaseOut).start();
            h = c.array[f].scale;
            c.array[f].c.position.x -= m.x * h * 150;
            c.array[f].c.position.y -= m.y * h * 150;
            c.array[f].c.position.z -= m.z * h * 150;
            break
        }
    };
    this.update = function (h) {
        if (isNaN(h) || h > 1E3 || h == 0)h = 1E3 / 60;
        for (f = 0; f < c.initSettings.numOfAnimals; ++f) {
            var m = c.array[f];
            if (m.active) {
                var n = m.c, p = m.scale, o = m.normal, t = m.position, u = m.toVector;
                c.array[f].lifetime += h;
                if (c.array[f].lifetime > 4E3) {
                    c.array[f].active = !1;
                    c.array[f].c.visible = !1
                } else {
                    var w = t.x + u.x * 10, x = t.y + u.y * 10, y = t.z + u.z * 10;
                    o.y > 0.5 && (x -= 10);
                    if (c.settings.capy != null && x < c.settings.capy) {
                        x = c.settings.capy;
                        o.set(0, 1, 0)
                    }
                    c.array[f].count += 0.03;
                    t = Math.max(Math.cos(c.array[f].count), 0);
                    t = Math.min(t, 1);
                    c.array[f].a.morph = t;
                    if (c.settings.constantSpeed != null) {
                        c.array[f].a.animalA.timeScale = c.settings.constantSpeed;
                        c.array[f].a.animalB.timeScale = c.settings.constantSpeed
                    }
                    var z = m.speeda;
                    if (Math.round(t) == 1)z = m.speedb;
                    m = (w - n.position.x) / 5;
                    t = (x - n.position.y) / 5;
                    u = (y - n.position.z) / 5;
                    t > z && (t = z);
                    t < -z && (t = -z);
                    m > z && (m = z);
                    m < -z && (m = -z);
                    u > z && (u = z);
                    u < -z && (u = -z);
                    w = new THREE.Vector3(w, x, y);
                    w.subSelf(n.position).normalize();
                    x = new THREE.Vector3;
                    o = new THREE.Vector3(o.x * -1, o.y * -1, o.z * -1);
                    x.cross(w, o);
                    o.cross(w, x);
                    n.matrixWorld.n11 = x.x * p;
                    n.matrixWorld.n12 = o.x * p;
                    n.matrixWorld.n13 = w.x * p;
                    n.matrixWorld.n14 = n.position.x;
                    n.matrixWorld.n21 = x.y * p;
                    n.matrixWorld.n22 = o.y * p;
                    n.matrixWorld.n23 = w.y * p;
                    n.matrixWorld.n24 = n.position.y;
                    n.matrixWorld.n31 = x.z * p;
                    n.matrixWorld.n32 = o.z * p;
                    n.matrixWorld.n33 = w.z * p;
                    n.matrixWorld.n34 = n.position.z;
                    n.position.x += m;
                    n.position.y += t;
                    n.position.z += u;
                    c.array[f].position.copy(n.position)
                }
            }
        }
    };
    this.reset = function (h, m, n) {
        for (var p = 0; p < c.array.length; ++p) {
            var o = c.array[p].c;
            o.position.x = h;
            o.position.y = m;
            o.position.z = n;
            c.array[p].active = !1;
            c.array[p].c.visible = !1
        }
    }
}, VideoPlane = function (b, g, c) {
    var f, h, m, n, p, o = !1, t = !1, u = g.path.match("png$") || g.path.match("jpg$"), w = g.bendForce || 400, x = new PolyTrail;
    this.params = {radius: 0.95, trail: 5, random: 0.23, bulge: 0.7, polyDetail: 0.55, softEdge: 0.77, softTail: 0};
    var y = g.fps || 20;
    this.locked = g.locked;
    this.path = g.path;
    this.removed = !1;
    this.removeAt = g.removeAt || 1;
    if (u)h = THREE.ImageUtils.loadTexture(g.path); else {
        VideoLoadRegister[g.path] = 1;
        f = document.createElement("video");
        f.src = g.path;
        f.preload = "auto";
        f.load();
        b.signals.loadItemAdded.dispatch();
        f.addEventListener("canplaythrough", function () {
            if (VideoLoadRegister[g.path] == 1) {
                b.signals.loadItemCompleted.dispatch();
                VideoLoadRegister[g.path] = 2
            }
        }, !1);
        setTimeout(function () {
            if (VideoLoadRegister[g.path] == 1) {
                b.signals.loadItemCompleted.dispatch();
                VideoLoadRegister[g.path] = 2
            }
        }, 1E4);
        h = new THREE.Texture(f);
        h.minFilter = THREE.LinearFilter;
        h.magFilter = THREE.LinearFilter
    }
    switch (g.shaderId) {
        case VIDEO_OPAQUE:
            n = VideoShaderSource.opaque;
            break;
        case VIDEO_OPAQUE_DISTORT:
            n = VideoShaderSource.distortOpaque;
            o = !0;
            break;
        case VIDEO_KEYED_DISTORT:
            n = VideoShaderSource.distortKeyed;
            o = !0;
            t = !0;
            break;
        case VIDEO_HALFALPHA:
            n = VideoShaderSource.halfAlpha;
            break;
        case VIDEO_SMARTALPHA:
            n = VideoShaderSource.smartAlpha;
            break;
        case VIDEO_SMARTALPHA_DISTORT:
            n = VideoShaderSource.distortSmartalpha;
            o = !0;
            break;
        case VIDEO_KEYED_INVERSE:
            n = VideoShaderSource.keyedInverse;
            t = !0;
            break;
        default:
            n = VideoShaderSource.keyed;
            t = !0
    }
    var z = THREE.UniformsUtils.clone(n.uniforms);
    z.map.texture = h;
    if (o) {
        z.mouseXY.value = new THREE.Vector2(0, 0);
        z.aspect.value = c.aspect;
        z.mouseSpeed.value = 1;
        z.mouseRad.value = 1
    }
    if (t) {
        z.colorScale.value = g.colorScale;
        z.threshold.value = g.threshold;
        z.alphaFadeout.value = g.alphaFadeout
    }
    p = new THREE.MeshShaderMaterial({uniforms: z, vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, depthTest: !1});
    if (!g.width)g.width = o ? 1.104 : 1;
    if (!g.height)g.height = o ? 1.24 : 1;
    n = o ? c.grid : g.paralax ? new THREE.Plane(1, 1, 50, 10) : new THREE.Plane(1, 1, 1, 1);
    if (g.paralax)for (var D = 0; D < n.vertices.length; ++D) {
        t = Math.sin((n.vertices[D].position.x + 0.5) * Math.PI);
        n.vertices[D].position.z = (1 - t) * w * g.width;
        n.vertices[D].position.y *= 1 + (1 - t) * 0.35 * g.height
    }
    this.mesh = new THREE.Mesh(n, p);
    this.mesh.scale.x = g.width;
    this.mesh.scale.y = g.height;
    this.mesh.position.z = g.z;
    this.mesh.position.y = g.y || 0;
    this.mesh.scale.x *= Math.abs(g.z) * c.adj * c.aspect;
    this.mesh.scale.y *= Math.abs(g.z) * c.adj;
    this.start = function (B, A, E) {
        x.set(-A * c.aspect, -E);
        if (!u) {
            try {
                f.currentTime = f.duration * B
            } catch (C) {
            }
            f.play();
            h.needsUpdate = !0;
            m = setInterval(function () {
                if (f.readyState === f.HAVE_ENOUGH_DATA)h.needsUpdate = !0
            }, 1E3 / y)
        }
    };
    this.stop = function () {
        if (!u) {
            f.pause();
            try {
                f.currentTime = 0
            } catch (B) {
            }
            clearInterval(m)
        }
    };
    this.update = function (B, A, E) {
        if (o) {
            x.target.x = -B * c.aspect;
            x.target.y = -A;
            x.update();
            for (D = 0; D <= 4; D++) {
                p.uniforms["trail" + D].value.x = this.params.polyDetail * x.s[D * 2 * this.params.trail].x;
                p.uniforms["trail" + D].value.y = this.params.polyDetail * x.s[D * 2 * this.params.trail].y + 1.0E-4 * D
            }
            p.uniforms.mouseXY.value.x = -B * c.aspect;
            p.uniforms.mouseXY.value.y = -A;
            p.uniforms.mouseSpeed.value = E;
            p.uniforms.mouseRad.value = this.params.radius;
            p.uniforms.polyRandom.value = this.params.random;
            p.uniforms.polyDetail.value = this.params.polyDetail;
            p.uniforms.bulge.value = this.params.bulge;
            p.uniforms.softEdge.value = this.params.softEdge
        }
    }
};
function PolyTrail() {
    this.target = new THREE.Vector2;
    this.s = [];
    for (var b = 0; b <= 50; b++)this.s[b] = new THREE.Vector2
}
PolyTrail.prototype.set = function (b, g) {
    for (var c = 50; c >= 0; c -= 1)this.s[c] = new THREE.Vector3(b, g, 0)
};
PolyTrail.prototype.update = function () {
    for (var b = 50; b > 0; b -= 1) {
        this.s[b].x = this.s[b - 1].x;
        this.s[b].y = this.s[b - 1].y
    }
    this.s[0].x = this.target.x;
    this.s[0].y = this.target.y
};
var VideoLoadRegister = {}, VIDEO_OPAQUE = 1, VIDEO_HALFALPHA = 2, VIDEO_OPAQUE_DISTORT = 3, VIDEO_KEYED = 4, VIDEO_KEYED_DISTORT = 5, VIDEO_KEYED_INVERSE = 6, VIDEO_SMARTALPHA = 7, VIDEO_SMARTALPHA_DISTORT = 8, VideoPlayer = function (b, g) {
    var c = this, f = (new Date).getTime();
    SequencerItem.call(this);
    var h = new THREE.Color(0), m = {}, n = [], p = !1, o, t, u = b.renderer, w = b.renderTarget, x = 0, y = 0, z = 0, D = 0, B = 0, A = 0, E = 1, C;
    this.duration = g[0].duration;
    this.init = function () {
        m.prx = g[0].paralaxHorizontal || 0;
        m.pry = g[0].paralaxVertical || 0;
        m.tgd = g[0].targetDistance || 1500;
        onGrid = function (H) {
            m.grid = H;
            c.onLoad()
        };
        gridLoader = new THREE.JSONLoader;
        gridLoader.load({model: "/files/models/VideoDistortGrid.js", callback: onGrid})
    };
    this.onLoad = function () {
        p = !0;
        b.signals.mousemoved.add(function () {
            x = b.mouse.x / b.screenWidth * -2 + 1;
            y = b.mouse.y / b.screenHeight * 2 - 1
        });
        C = new THREE.Vector2(0, 0);
        m.fov = 54;
        m.aspect = 2.35;
        m.adj = Math.tan(m.fov * Math.PI / 360) * 2;
        t = new THREE.Camera(m.fov, m.aspect, 1, 1E5);
        t.target.position = new THREE.Vector3(0, 0, m.tgd * -1);
        t.updateMatrix();
        o = new THREE.Scene;
        o.addLight(new THREE.AmbientLight(0));
        o.addObject(t);
        for (var H = 0; H < g.length; H++) {
            var G = new VideoPlane(b, g[H], m);
            n.push(G)
        }
    };
    this.show = function (H) {
        for (var G = 0; G < n.length; G++) {
            var I = n[G];
            I.locked ? t.addChild(I.mesh) : o.addChild(I.mesh);
            I.start(H, x, y)
        }
        u.setClearColor(h)
    };
    this.hide = function () {
        for (var H = 0; H < n.length; H++)n[H].stop()
    };
    this.update = function (H, G, I) {
        I = (new Date).getTime();
        G = I - f;
        f = I;
        if (p) {
            B = x;
            A = y;
            E += (700 * (Math.abs(Math.max(Math.min(B - z, 0.05), -0.05) / G) + Math.abs(Math.max(Math.min(A - D, 0.05), -0.05) / G)) - E) / 20;
            z = x;
            D = y;
            C.x = x * -2 * m.prx;
            C.y = y * -2 * m.pry;
            C.x = Math.min(C.x, m.prx);
            C.x = Math.max(C.x, -m.prx);
            C.y = Math.min(C.y, m.pry);
            C.y = Math.max(C.y, -m.pry);
            t.target.position.x += (C.x - t.target.position.x) * 0.1;
            t.target.position.y += (C.y - t.target.position.y) * 0.1;
            for (G = 0; G < n.length; G++) {
                I = n[G];
                if (H > I.removeAt && !I.removed) {
                    I.locked && t.removeChild(I.mesh);
                    o.removeChild(I.mesh);
                    I.stop();
                    I.removed = !0
                } else I.update(x, y, E, 1)
            }
            u.render(o, t, w)
        }
    }
};
VideoPlayer.prototype = new SequencerItem;
VideoPlayer.prototype.constructor = VideoPlayer;
var DistortUniforms = {aspect: {type: "f", value: 0}, map: {type: "t", value: 0, texture: null}, colorScale: {type: "f", value: 1}, threshold: {type: "f", value: 0.5}, alphaFadeout: {type: "f", value: 0.5}, mouseXY: {type: "v2", value: new THREE.Vector2}, trail0: {type: "v2", value: new THREE.Vector2}, trail1: {type: "v2", value: new THREE.Vector2}, trail2: {type: "v2", value: new THREE.Vector2}, trail3: {type: "v2", value: new THREE.Vector2}, trail4: {type: "v2", value: new THREE.Vector2}, mouseSpeed: {type: "f", value: 1}, mouseRad: {type: "f", value: 1}, polyRandom: {type: "f", value: 1}, polyDetail: {type: "f", value: 1}, bulge: {type: "f", value: 1}, softEdge: {type: "f", value: 0}}, DistortShaderFragmentPars = "uniform sampler2D map;\nuniform float colorScale;\nuniform float threshold;\nuniform float alphaFadeout;\nuniform float softEdge;\nvarying vec2 vUv;\nvarying vec2 vUvPoly;\nvarying float distancePoly;\nvarying float distance;\nvarying vec2 closest;", DistortVertexShader = "uniform vec2 mouseXY;\nuniform vec2 trail0;\nuniform vec2 trail1;\nuniform vec2 trail2;\nuniform vec2 trail3;\nuniform vec2 trail4;\nuniform float aspect;\nuniform float mouseSpeed;\nuniform float mouseRad;\nuniform float polyRandom;\nuniform float polyDetail;\nuniform float bulge;\nvarying vec2 vUv;\nvarying vec2 vUvPoly;\nvarying float distance;\nvarying float distancePoly;\nvarying vec2 closest;\nvec2 getClosest(vec2 p, vec2 l1, vec2 l2){\nvec2 pl1 = p - l1;\nvec2 l2l1 = l2 - l1;\nfloat dot = pl1.x * l2l1.x + pl1.y * l2l1.y;\nfloat len_sq = pow(length(l2l1),2.);\nfloat param = dot / len_sq;\nif(param < 0.) return l1;\nelse if(param > 1.) return l2;\nelse return (l1 + l2l1 * param);\n}\nfloat getDistance(vec2 p, vec2 li){\nreturn 1. - sqrt( (p.x-li.x)*(p.x-li.x) + (p.y-li.y)*(p.y-li.y) );\n}\nvoid main() {\nvUvPoly = uv+vec2(normal.x,normal.y);\nvUv = (uv-vec2(.5))/polyDetail+vec2(.5);\nvUvPoly = (vUvPoly-vec2(.5))/polyDetail+vec2(.5);\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position*(1./polyDetail), 1.0 );\nvec4 glPosPoly = projectionMatrix * modelViewMatrix * vec4( position-vec3(-normal.x,normal.y,0.), 1.0 );\nvec2 projPos = vec2(aspect,1.)*vec2(gl_Position.x/gl_Position.z,gl_Position.y/gl_Position.z);\nvec2 projPosPoly = vec2(aspect,1.)*vec2(glPosPoly.x/glPosPoly.z,glPosPoly.y/glPosPoly.z);\nfloat dist = (normal.z*2.)*polyRandom + 1.-polyRandom;\nvec2 closestTrailPoly0 = getClosest(projPosPoly,trail0,trail1);\nvec2 closestTrailPoly1 = getClosest(projPosPoly,trail1,trail2);\nvec2 closestTrailPoly2 = getClosest(projPosPoly,trail2,trail3);\nvec2 closestTrailPoly3 = getClosest(projPosPoly,trail3,trail4);\nfloat distanceTrailPoly0 = 1.0*dist * getDistance(projPosPoly,closestTrailPoly0);\nfloat distanceTrailPoly1 = 0.8*dist * getDistance(projPosPoly,closestTrailPoly1);\nfloat distanceTrailPoly2 = 0.6*dist * getDistance(projPosPoly,closestTrailPoly2);\nfloat distanceTrailPoly3 = 0.4*dist * getDistance(projPosPoly,closestTrailPoly3);\ndistancePoly = mouseRad*max(0.,max(distanceTrailPoly0,max(distanceTrailPoly1,max(distanceTrailPoly2,distanceTrailPoly3))));\ndistance = mouseRad*max(0.,1.-length(projPos-trail0  ));\ngl_Position.xy = gl_Position.xy + normalize(projPos.xy-trail0)*vec2(bulge*distance*mouseSpeed*50.);\n}";
debug = "//gl_FragColor = vec4(vec3(closest,1.),1.);";
var VideoShaderSource = {opaque: {uniforms: {map: {type: "t", value: 0, texture: null}}, vertexShader: "varying vec2 vUv;\nvoid main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\nvUv = uv;\n}", fragmentShader: "uniform sampler2D map;\nvarying vec2 vUv;\nvoid main() {\ngl_FragColor = texture2D( map, vUv );\n}"}, keyedInverse: {uniforms: {map: {type: "t", value: 0, texture: null}, colorScale: {type: "f", value: 1}, threshold: {type: "f", value: 0.5}, alphaFadeout: {type: "f", value: 0.5}}, vertexShader: "varying vec2 vUv;\nuniform bool flip;\nvoid main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\nvUv = uv;\n}", fragmentShader: "uniform sampler2D map;\nuniform float colorScale;\nuniform float threshold;\nuniform float alphaFadeout;\nvarying vec2 vUv;\nvoid main() {\nvec3 cs = vec3(colorScale);\nvec4 c = texture2D( map, vUv );\nfloat t = c.x + c.y + c.z;\nfloat alpha = 1.0;\nif( t > threshold )\nalpha = 0.0;//(1.0 - (t - 2.0)) * alphaFadeout;\ngl_FragColor = vec4( c.xyz * cs, alpha );\n}"}, halfAlpha: {uniforms: {map: {type: "t", value: 0, texture: null}}, vertexShader: "varying vec2 vUv;\nvoid main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\nvUv = uv;\n}", fragmentShader: "uniform sampler2D map;\nvarying vec2 vUv;\nvoid main() {\nvec4 c = texture2D( map, vec2( vUv.x * 0.5, vUv.y ) );\nvec4 a = texture2D( map, vec2( 0.5 + vUv.x * 0.5, vUv.y ) );\ngl_FragColor = vec4(c.rgb, a.r);\n}"}, distortSmartalpha: {uniforms: DistortUniforms, vertexShader: DistortVertexShader, fragmentShader: [DistortShaderFragmentPars, "void main() {\nvec4 c = texture2D( map, vec2( vUv.x * 0.6666, vUv.y ) );\nvec4 a = texture2D( map, vec2( 0.6666 + vUv.x * 0.3333, vUv.y ) );\nc.a = a.r;\nvec4 cPoly = texture2D( map, vec2( vUvPoly.x * 0.6666, vUvPoly.y ) );\nvec4 aPoly = texture2D( map, vec2( 0.6666 + vUvPoly.x * 0.3333, vUvPoly.y ) );\ncPoly.a = aPoly.r;\nif ((distancePoly)>0.5) c = cPoly; \ngl_FragColor = mix(c,cPoly,max(0.,distancePoly*softEdge));", debug, "}"].join("\n")}, smartAlpha: {uniforms: {map: {type: "t", value: 0, texture: null}}, vertexShader: "varying vec2 vUv;\nvoid main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\nvUv = uv;\n}", fragmentShader: "uniform sampler2D map;\nvarying vec2 vUv;\nvoid main() {\nvec4 c = texture2D( map, vec2( vUv.x * 0.6666, vUv.y ) );\nvec4 a = texture2D( map, vec2( 0.6666 + vUv.x * 0.3333, vUv.y ) );\ngl_FragColor = vec4(c.rgb, a.r);\n}"}, keyed: {uniforms: {map: {type: "t", value: 0, texture: null}, colorScale: {type: "f", value: 1}, threshold: {type: "f", value: 0.5}, alphaFadeout: {type: "f", value: 0.5}}, vertexShader: "varying vec2 vUv;\nuniform bool flip;\nvoid main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\nvUv = uv;\n}", fragmentShader: "uniform sampler2D map;\nuniform float colorScale;\nuniform float threshold;\nuniform float alphaFadeout;\nvarying vec2 vUv;\nvoid main() {\nvec3 cd = vec3(1.0 - colorScale);\nvec3 cs = vec3(colorScale);\nvec4 c = texture2D( map, vUv );\nfloat t = c.x + c.y + c.z;\nfloat alpha = 1.0;\nif( t < threshold )\nalpha = t / alphaFadeout;\ngl_FragColor = vec4( (c.xyz - cd) * cs, alpha );\n}"}, distortOpaque: {uniforms: DistortUniforms, vertexShader: DistortVertexShader, fragmentShader: [DistortShaderFragmentPars, "void main() {\nvec4 c = texture2D( map, vec2( vUv.x, vUv.y ) );\nvec4 cPoly = texture2D( map, vec2( vUvPoly.x, vUvPoly.y ) );\nif ((distancePoly)>0.5) c = cPoly; \ngl_FragColor = mix(c,cPoly,max(0.,distancePoly*softEdge));", debug, "}"].join("\n")}, distortKeyed: {uniforms: DistortUniforms, vertexShader: DistortVertexShader, fragmentShader: [DistortShaderFragmentPars, "void main() {\nvec4 c = texture2D( map, vec2( vUv.x, vUv.y ) );\nvec4 cPoly = texture2D( map, vec2( vUvPoly.x, vUvPoly.y ) );\nif ((distancePoly)>0.5) c = cPoly; \nif (c.a<=0.1) {\n\tdiscard;\n} else {\n\tvec3 cd = vec3(1.0 - colorScale);\n\tvec3 cs = vec3(colorScale);\n\tfloat t = c.x + c.y + c.z;\n\tfloat alpha = 1.0;\n\tif( t < threshold )\n\t\talpha = t / alphaFadeout;\n\tgl_FragColor = vec4( (c.xyz - cd) * cs, alpha );\n}\n}"].join("\n")}}, VideoShots = {introLayers: [
    {path: "/files/videos/intro.webm", shaderId: VIDEO_OPAQUE, z: -1E3, fps: 48, width: 1.01, height: 1.01, duration: 22E3}
], s01_01: [
    {path: "/files/videos/city/s01.webm", shaderId: VIDEO_OPAQUE, z: -1E3, duration: 3120}
], s01_03: [
    {path: "/files/videos/city/s03_layer02.webm", shaderId: VIDEO_OPAQUE, z: -1100, width: 1.56, height: 1.59, paralax: !0, duration: 8120, paralaxHorizontal: 600, paralaxVertical: 200},
    {path: "/files/videos/city/s03_layer01.webm", shaderId: VIDEO_SMARTALPHA, z: -100, locked: !0, removeAt: 0.3}
], s01_06: [
    {path: "/files/videos/city/s06_layer02.webm", shaderId: VIDEO_OPAQUE, z: -1E3, duration: 2030},
    {path: "/files/videos/city/s06_layer01.webm", shaderId: VIDEO_SMARTALPHA_DISTORT, z: -900}
], s01_09: [
    {path: "/files/videos/city/s09_layer02.webm", shaderId: VIDEO_KEYED, z: -1E3, colorScale: 0.99, threshold: 0.45, alphaFadeout: 0.35, paralax: !0, width: 1.5625, height: 1.1627, duration: 8230, paralaxHorizontal: 600, paralaxVertical: 100},
    {path: "/files/videos/city/s09_layer01.webm", shaderId: VIDEO_SMARTALPHA, z: -500, locked: !0, removeAt: 0.3}
], s02_01: [
    {path: "/files/videos/prairie/s01_layer02.webm", shaderId: VIDEO_OPAQUE, width: 1.5625, height: 1, paralax: !0, paralaxHorizontal: 600, paralaxVertical: 0, bendForce: 73, z: -200, duration: 9800},
    {path: "/files/videos/prairie/s01_layer01.webm", shaderId: VIDEO_SMARTALPHA, width: 1.05, height: 1.05, locked: !0, z: -100}
], s02_02: [
    {path: "/files/videos/prairie/s02_layer03.jpg", shaderId: VIDEO_OPAQUE, z: -1010, duration: 2E3},
    {path: "/files/videos/prairie/s02_layer02.webm", shaderId: VIDEO_SMARTALPHA_DISTORT, z: -1E3},
    {path: "/files/videos/prairie/s02_layer01.webm", shaderId: VIDEO_SMARTALPHA, z: -990}
], s02_03: [
    {path: "/files/videos/prairie/s03_layer03.webm", shaderId: VIDEO_OPAQUE, z: -1500, duration: 2125},
    {path: "/files/videos/prairie/s03_layer01.webm", shaderId: VIDEO_SMARTALPHA_DISTORT, z: -1E3}
], s02_04: [
    {path: "/files/videos/prairie/s04_layer02.webm", shaderId: VIDEO_OPAQUE, z: -1010, duration: 5E3},
    {path: "/files/videos/prairie/s04_layer01.webm", shaderId: VIDEO_SMARTALPHA_DISTORT, z: -1E3}
], s02_06: [
    {path: "/files/videos/prairie/s06_layer01.webm", shaderId: VIDEO_SMARTALPHA, colorScale: 1, threshold: 2.4, alphaFadeout: 1, z: -1010, duration: 6E3}
], s03_01: [
    {path: "/files/videos/dunes/s01_layer03.webm", shaderId: VIDEO_OPAQUE, z: -1E3, width: 1.56, height: 1.22, paralax: !0, duration: 8E3, paralaxHorizontal: 600, paralaxVertical: 100},
    {path: "/files/videos/dunes/s01_layer02.webm", shaderId: VIDEO_KEYED_DISTORT, z: -800, colorScale: 0.9, threshold: 0.2, alphaFadeout: 0.35, width: 1.56, height: 1.22, paralax: !0},
    {path: "/files/videos/dunes/s01_layer01.webm", shaderId: VIDEO_KEYED, colorScale: 0, threshold: 0.5, alphaFadeout: 0.5, z: -100, locked: !0}
], s03_02: [
    {path: "/files/videos/dunes/s02_layer02.webm", shaderId: VIDEO_OPAQUE, z: -1010, duration: 3500},
    {path: "/files/videos/dunes/s02_layer01.webm", shaderId: VIDEO_KEYED_DISTORT, colorScale: 0.9, threshold: 0.2, alphaFadeout: 0.35, z: -1E3}
], s03_03: [
    {path: "/files/videos/dunes/s03_layer02.webm", shaderId: VIDEO_SMARTALPHA, z: -400, paralax: !0, width: 1.526, height: 1.11, duration: 11E3, paralaxHorizontal: 600, paralaxVertical: 100},
    {path: "/files/videos/dunes/s03_layer01.webm", shaderId: VIDEO_SMARTALPHA, z: -100, removeAt: 0.3, locked: !0}
]}, City = function (b) {
    var g = this;
    SequencerItem.call(this);
    b.signals.initscenes.add(function () {
        g.update(0.0010, 34.99, 45199)
    });
    var c, f, h, m, n, p = b.renderer, o = b.renderTarget, t = [], u = [], w = !1, x = 0;
    b.debug = !1;
    if (function (y) {
        return(y = RegExp("[?&]" + y + "=([^&]*)").exec(window.location.search)) && decodeURIComponent(y[1].replace(/\+/g, " "))
    }("debug") == "true")b.debug = !0;
    this.init = function () {
        t = [
            [0, 18, -300],
            [0, 18, -1430]
        ];
        f = new THREE.PathCamera({fov: 65, aspect: b.viewportWidth / b.viewportHeight, near: 1, far: 1E5, waypoints: t, duration: 9.7, useConstantSpeed: !0, resamplingCoef: 5, createDebugPath: !1, createDebugDummy: !1, lookSpeed: 0.0010, lookVertical: !0, lookHorizontal: !0, verticalAngleMap: {srcRange: [0.09, 3.05], dstRange: [0.4, 2]}, horizontalAngleMap: {srcRange: [0, 6.28], dstRange: [0, Math.PI]}});
        f.position.set(0, 0, 0);
        f.lon = 180;
        f.lat = -20;
        c = f;
        if (b.debug) {
            gui = new GUI;
            gui.add(c, "fov", 50, 120).name("Lens")
        }
        m = new CityWorld(b);
        n = new CitySoup(c, m.scene, b);
        b.worlds.city = m;
        b.soups.city = n;
        b.sequences.city = this;
        m.scene.addObject(c.animationParent)
    };
    this.resetCamera = function () {
        w = !1;
        f.position.set(0, 0, 0);
        f.lon = 180;
        f.lat = -20;
        c = f;
        c.animation.play(!1, 0);
        n.changeCamera(c);
        p.setClearColor(m.scene.fog.color)
    };
    this.show = function () {
        this.resetCamera();
        b.started.city = !0
    };
    this.hide = function () {
    };
    this.update = function (y, z) {
        if (isNaN(z) || z > 1E3 || z == 0)z = 1E3 / 60;
        x += z;
        if (x < 2E3) {
            c.lon = 180;
            c.lat = -20
        }
        b.debug && c.updateProjectionMatrix();
        var D = c.animationParent.position.z;
        if (D < -1400 && !w) {
            u = [
                [0, 18, D],
                [0, 18, -3400]
            ];
            c.theta < 1.2 && (u = [
                [0, 18, D],
                [0, 18, -1650],
                [-110, 18, -1740],
                [-1670, 18, -1740]
            ]);
            c.theta > 1.8 && (u = [
                [0, 18, D],
                [0, 18, -1650],
                [110, 18, -1740],
                [1670, 18, -1740]
            ]);
            D = 65;
            if (b.debug)D = f.fov;
            h = new THREE.PathCamera({fov: D, aspect: b.viewportWidth / b.viewportHeight, near: 1, far: 1E5, waypoints: u, duration: 15.6, useConstantSpeed: !0, resamplingCoef: 5, createDebugPath: !1, createDebugDummy: !1, lookSpeed: 0.0010, lookVertical: !0, lookHorizontal: !0, verticalAngleMap: {srcRange: [0.09, 3.05], dstRange: [0.4, 2]}, horizontalAngleMap: {srcRange: [0, 6.28], dstRange: [0, Math.PI]}});
            h.lat = f.lat;
            h.lon = f.lon;
            m.scene.addObject(h.animationParent);
            h.animation.play(!1, 0);
            c = h;
            n.changeCamera(c);
            f.animation.stop();
            b.debug && gui.add(c, "fov", 50, 120).name("Lens");
            w = !0
        }
        THREE.AnimationHandler.update(z);
        n.update(z);
        if (c.animationParent)c.animationParent.rotation.z = c.target.position.x / 400;
        p.render(m.scene, c, o);
        m.update(z, c, !1)
    }
};
City.prototype = new SequencerItem;
City.prototype.constructor = City;
var Prairie = function (b) {
    var g = this;
    SequencerItem.call(this);
    b.signals.initscenes.add(function () {
        g.update(9.0E-4, 49.99, 90375)
    });
    var c, f, h, m = b.renderer, n = b.renderTarget, p, o = [], t = 0;
    b.debug = !1;
    if (function (u) {
        return(u = RegExp("[?&]" + u + "=([^&]*)").exec(window.location.search)) && decodeURIComponent(u[1].replace(/\+/g, " "))
    }("debug") == "true")b.debug = !0;
    this.init = function () {
        o = [
            [332.182, 105.662, -15.045],
            [352.207, 114.403, -16.674],
            [402.111, 120.122, -17.99],
            [452.904, 122.699, -19.151],
            [504.217, 120.952, -20.024],
            [553.975, 113.019, -20.361],
            [602.272, 99.086, -20.384],
            [649.469, 80.302, -20.309],
            [693.666, 56.337, -19.92],
            [736.849, 28.213, -19.488],
            [778.636, -1.415, -19.337],
            [819.084, -33.658, -19.508],
            [856.894, -66.605, -19.823],
            [895.344, -100.75, -20.237],
            [934.572, -133.462, -20.619],
            [974.512, -164.171, -20.174],
            [1014.98, -193.612, -21.554],
            [1055.66, -220.791, -32.133],
            [1085.89, -240.61, -66.939],
            [1094.09, -246.713, -99.358]
        ];
        var u, w;
        for (u = 0; u < o.length; u++) {
            w = o[u][1];
            o[u][1] = o[u][2] + 6;
            o[u][2] = -w
        }
        p = new THREE.PathCamera({fov: 73, aspect: b.viewportWidth / b.viewportHeight, near: 1, far: 1E6, waypoints: o, duration: 26.2, useConstantSpeed: !0, resamplingCoef: 1, createDebugPath: !1, createDebugDummy: !1, lookSpeed: 0.0028, lookVertical: !0, lookHorizontal: !0, verticalAngleMap: {srcRange: [0, 6.28], dstRange: [1.7, 3]}, horizontalAngleMap: {srcRange: [0, 6.28], dstRange: [0, Math.PI]}});
        p.position.set(0, 0, 0);
        p.lon = 360;
        c = p;
        if (b.debug) {
            gui = new GUI;
            gui.add(c, "fov", 50, 120).name("Lens")
        }
        f = new PrairieWorld(b, c, function () {
            h = new PrairieSoup(c, f.scene, b);
            b.soups.prairie = h;
            b.prairieSoupHead = new THREE.Vector3
        });
        b.worlds.prairie = f;
        b.sequences.prairie = this;
        f.scene.addObject(p.animationParent)
    };
    this.show = function () {
        this.resetCamera();
        b.started.prairie = !0
    };
    this.hide = function () {
    };
    this.resetCamera = function () {
        t = 0;
        c.position.set(0, 0, 0);
        c.lon = 360;
        c.animation.play(!1, 0)
    };
    this.update = function (u, w) {
        if (isNaN(w) || w > 1E3 || w == 0)w = 1E3 / 60;
        t += w;
        if (t < 2500)c.lon = 360;
        b.debug && c.updateProjectionMatrix();
        THREE.AnimationHandler.update(w);
        if (c.animationParent)c.animationParent.rotation.z = c.target.position.x / 300;
        c.animationParent.position.y += (Math.random() - 0.5) * 0.3;
        f.update(w, c, !1);
        h && h.update(w);
        m.render(f.scene, c, n)
    }
};
Prairie.prototype = new SequencerItem;
Prairie.prototype.constructor = Prairie;
var Dunes = function (b) {
    SequencerItem.call(this);
    var g = this, c, f, h, m = b.renderer, n = b.renderTarget;
    new THREE.Vector3;
    b.signals.initscenes.add(function () {
        g.update(9.0E-4, 49.99, 90375)
    });
    this.init = function () {
        f = new DunesWorld(b);
        b.worlds.dunes = f;
        b.sequences.dunes = this;
        c = DunesCamera(b);
        h = new DunesSoup(c.camera, f.scene, b);
        b.soups.dunes = h
    };
    this.show = function () {
        c.resetCamera();
        b.started.dunes = !0;
        f.ambient.color.setHSV(0, 0, 0);
        f.directionalLight1.color.setHSV(0.08823529411764706, 0, 0);
        f.directionalLight2.color.setHSV(0, 0, 0);
        f.lensFlare.position.y = -2500;
        f.skyWhite = 0.02
    };
    this.hide = function () {
    };
    this.resetCamera = function () {
        c.resetCamera();
        m.setClearColor(f.scene.fog.color)
    };
    this.update = function (p, o, t) {
        if (p > 0.05 && p < 0.15) {
            var u = Math.sin((p - 0.05) / (0.15 - 0.05) * Math.PI * 0.5);
            f.lensFlare.position.y = -2500 + 6E3 * u;
            f.skyWhite = 0.02 + 0.98 * u;
            f.ambient.color.setHSV(0, 0, 0.1 * u);
            f.directionalLight1.color.setHSV(0.08823529411764706, 0, u);
            f.directionalLight2.color.setHSV(0, 0, 0.8647058823529412 * u)
        } else if (p > 0.9) {
            u = Math.sin((1 - (p - 0.9) / 0.1) * Math.PI * 0.5);
            u *= u;
            f.lensFlare.position.y = -1E3 + 4500 * u;
            f.skyWhite = u;
            f.ambient.color.setHSV(0, 0, 0.1 * u);
            f.directionalLight1.color.setHSV(0.08823529411764706, 0, u);
            f.directionalLight2.color.setHSV(0, 0, 0.8647058823529412 * u)
        } else if (p > 0.05) {
            f.skyWhite = 1;
            f.ambient.color.setHSV(0, 0, 0.1);
            f.directionalLight1.color.setHSV(0.08823529411764706, 0, 1);
            f.directionalLight2.color.setHSV(0, 0, 0.8647058823529412);
            f.lensFlare.position.y = 3500
        }
        p > 0.38 && h.update(o);
        c.updateCamera(p, o, t);
        THREE.AnimationHandler.update(o);
        f.update(o, c.camera, !0);
        m.render(f.scene, c.camera, n)
    }
};
Dunes.prototype = new SequencerItem;
Dunes.prototype.constructor = Dunes;
var Section = function () {
};
Section.prototype = {load: function () {
}, show: function () {
}, hide: function () {
}, resize: function () {
}, update: function () {
}, getDomElement: function () {
}};
var LauncherSection = function (b) {
    Section.call(this);
    var g, c, f, h, m, n, p, o, t, u, w, x, y, z = start_time = (new Date).getTime(), D, B, A = 1;
    g = document.createElement("div");
    g.style.background = "-moz-linear-gradient(top, #04142e 0%, #1d508f 35%, #5299d1 50%, #1d508f 100%)";
    g.style.background = "-webkit-linear-gradient(top, #04142e 0%, #1d508f 35%, #5299d1 50%, #1d508f 100%)";
    g.style.background = "linear-gradient(top, #04142e 0%, #1d508f 35%, #5299d1 50%, #1d508f 100%)";
    g.style.textAlign = "center";
    var E = !1, C = !1;
    this.load = function () {
        function H($, X, P) {
            var S = document.createElement("div");
            S.style.position = "absolute";
            S.style.cursor = "pointer";
            S.style.margin = $;
            var v = document.createElement("img");
            v.src = X;
            S.appendChild(v);
            S.addEventListener("mouseout", function () {
                v.src = X
            }, !1);
            S.addEventListener("mouseover", function () {
                v.src = P
            }, !1);
            return S
        }

        c = new Clouds(b);
        c.getDomElement().style.position = "absolute";
        c.getDomElement().style.left = "0px";
        c.getDomElement().style.top = "0px";
        c.getDomElement().style.width = window.innerWidth + "px";
        c.getDomElement().style.height = window.innerHeight + "px";
        g.appendChild(c.getDomElement());
        D = document.createElement("div");
        D.style.background = "rgba(255,255,255,1)";
        D.style.width = "100%";
        D.style.height = "100%";
        D.style.position = "absolute";
        D.style.zIndex = 1E3;
        g.appendChild(D);
        n = document.createElement("div");
        n.style.position = "absolute";
        n.setAttribute("id", "ui-container");
        n.style.marginTop = "30px";
        f = document.createElement("div");
        f.style.position = "absolute";
        f.innerHTML = '<img src="/files/logo_heart.png" style="display:block; margin-top:-30px;" />';
        n.appendChild(f);
        h = H("10px 0 0 85px", "/files/enter_idle.png", "/files/enter_rollover.png");
        h.style.width = "180px";
        h.addEventListener("click", function () {
            u.getDomElement().style.display = "block";
            h.style.display = "none";
            E = !0;
            if (t != undefined && o != undefined) {
                t.style.display = "none";
                o.style.display = "none"
            }
            b.signals.load.dispatch()
        }, !1);
        n.appendChild(h);
        m = H("30px 0 0 85px", "/files/start_idle.png", "/files/start_rollover.png");
        m.style.display = "none";
        m.addEventListener("click", function () {
            if (b.originLink == "/explore" && b.shouldSkip) {
                b.signals.showexploration.dispatch();
                b.signals.startexploration.dispatch("dunes", !1);
                _gaq.push(["_trackPageview", "/explore"]);
                b.hasExplored = !0;
                b.shouldSkip = !1
            } else {
                b.signals.showfilm.dispatch();
                setTimeout(function () {
                    b.signals.startfilm.dispatch(0, 1);
                    _gaq.push(["_trackPageview", "/launcher_start_film"])
                }, 1E3)
            }
        }, !1);
        n.appendChild(m);
        u = new LoadingBar(function () {
            u.getMouseInfo().style.display = "none";
            m.style.display = "block";
            b.loadedContent = !0;
            E = !1;
            b.signals.initscenes.dispatch()
        });
        u.getDomElement().style.position = "absolute";
        u.getDomElement().style.display = "none";
        n.appendChild(u.getDomElement());
        b.signals.loadItemAdded.add(u.addItem);
        b.signals.loadItemCompleted.add(u.completeItem);
        if (HandleErrors.isWebGLAndBeta) {
            p = document.createElement("div");
            p.style.paddingTop = "60px";
            p.style.marginLeft = "-2px";
            p.innerHTML = "<img src = '/files/footer/header-trans.png' alt = 'ROME' />";
            g.appendChild(p)
        } else g.appendChild(n);
        if (localStorage.getItem("RomeSeen") == "true") {
            if (!C) {
                var G = document.createTextNode(".seen-before {\n\topacity: .35;\n\tcursor: pointer;\n padding: 15px 15px;\n}\n.seen-before:hover {\n\topacity: 1.0;\n}"), I = document.getElementsByTagName("head")[0], V = document.createElement("style");
                if (V.stylesheet)V.styleSheet.cssText = G.nodeValue; else V.appendChild(G);
                I.appendChild(V);
                C = !0
            }
            t = document.createElement("div");
            t.setAttribute("class", "seen-before");
            t.setAttribute("style", "background: url('files/launcher/add-trans.png') center center no-repeat; width: 145px; height: 10px;");
            t.style.position = "absolute";
            t.style.top = "233px";
            t.style.left = window.innerWidth / 2 - 354 + "px";
            t.addEventListener("click", function ($) {
                $.preventDefault();
                b.signals.showugc.dispatch();
                _gaq.push(["_trackPageview", "/launcher_add_to_dream"])
            }, !1);
            o = document.createElement("div");
            o.setAttribute("class", "seen-before");
            o.setAttribute("style", "background: url('files/launcher/explore-trans.png') center center no-repeat; width: 199px; height: 10px;");
            o.style.position = "absolute";
            o.style.top = "233px";
            o.style.left = window.innerWidth / 2 + 168 + "px";
            o.addEventListener("click", function ($) {
                $.preventDefault();
                _gaq.push(["_trackPageview", "/launcher_gallery"]);
                window.location = "/gallery/?c=favorite"
            }, !1);
            n.appendChild(t);
            n.appendChild(o)
        } else localStorage.setItem("RomeSeen", !0);
        w = document.createElement("div");
        w.style.position = "absolute";
        w.style.left = "0";
        w.style.bottom = "0";
        w.style.width = "100%";
        new Footer(w);
        g.appendChild(w)
    };
    this.show = function () {
        c.show();
        g.style.display = "block";
        if (!b.loadedContent)m.style.display = "none"
    };
    this.resize = function (H, G) {
        c.resize(H, G);
        if (f) {
            f.style.top = "60px";
            f.style.left = (window.innerWidth - 358) / 2 + "px"
        }
        if (h) {
            h.style.top = m.style.top = "210px";
            h.style.left = m.style.left = (window.innerWidth - 358) / 2 + "px"
        }
        if (u) {
            u.getDomElement().style.top = "215px";
            u.getDomElement().style.left = (window.innerWidth - 300) / 2 + "px"
        }
        if (o && t) {
            o.style.left = window.innerWidth / 2 + 168 + "px";
            t.style.left = window.innerWidth / 2 - 354 + "px"
        }
        g.style.width = H + "px";
        g.style.height = G + "px"
    };
    this.hide = function () {
        c.hide();
        g.style.display = "none"
    };
    this.update = function () {
        y = (new Date).getTime();
        x = y - z;
        z = y;
        E || c.update();
        if (A > 0) {
            A -= 4.0E-4 * x;
            B = TWEEN.Easing.Exponential.EaseOut(A);
            D.style.background = "rgba(255,255,255," + B + ")"
        } else {
            D.style.display = "none";
            D.style.zIndex = 0
        }
    };
    LauncherSection.showUI = function () {
        if (p)p.style.display = "none";
        g.appendChild(n)
    };
    this.getDomElement = function () {
        return g
    }
};
LauncherSection.prototype = new Section;
LauncherSection.prototype.constructor = LauncherSection;
var FilmSection = function (b) {
    function g() {
        n = !1;
        h.pause()
    }

    function c($) {
        switch ($.keyCode) {
            case 32:
                h.paused ? h.play() : h.pause();
                break;
            case 37:
                try {
                    h.currentTime--
                } catch (X) {
                    console.error(X)
                }
                p.clear();
                break;
            case 39:
                try {
                    h.currentTime++
                } catch (P) {
                    console.error(P)
                }
                p.clear();
                break;
            case 38:
                h.playbackRate += 0.1;
                break;
            case 40:
                h.playbackRate -= 0.1;
                break;
            case 77:
                h.volume = h.volume ? 0 : 1
        }
    }

    Section.call(this);
    var f, h, m, n = !1, p, o, t;
    f = document.createElement("div");
    f.style.display = "none";
    h = document.createElement("audio");
    h.preload = "auto";
    f.appendChild(h);
    source = document.createElement("source");
    source.src = "/files/Black.ogg";
    h.appendChild(source);
    m = new Tune(h);
    m.setBPM(85);
    m.setRows(4);
    b.baseWidth = 1024;
    b.baseHeight = 436;
    b.viewportWidth = b.baseWidth * (window.innerWidth / b.baseWidth);
    b.viewportHeight = b.baseHeight * (window.innerWidth / b.baseWidth);
    o = new THREE.WebGLRenderer({stencil: !1});
    o.domElement.style.position = "absolute";
    o.setSize(b.viewportWidth, b.baseHeight);
    o.sortObjects = !1;
    o.autoClear = !1;
    t = new THREE.WebGLRenderTarget(b.viewportWidth, b.baseHeight, {stencilBuffer: !1});
    t.minFilter = THREE.LinearFilter;
    t.magFilter = THREE.LinearFilter;
    b.renderer = o;
    b.renderTarget = t;
    b.signals.startfilm.add(function ($, X) {
        f.appendChild(o.domElement);
        n = !0;
        try {
            h.currentTime = m.getPatternMS($) / 1E3
        } catch (P) {
            console.error(P)
        }
        h.play();
        h.volume = X;
        b.isExperience = !0
    });
    b.signals.stopfilm.add(g);
    var u = new VideoPlayer(b, VideoShots.s01_01), w = new VideoPlayer(b, VideoShots.s01_03), x = new VideoPlayer(b, VideoShots.s01_06), y = new VideoPlayer(b, VideoShots.s01_09), z = new VideoPlayer(b, VideoShots.s02_01), D = new VideoPlayer(b, VideoShots.s02_02), B = new VideoPlayer(b, VideoShots.s02_03), A = new VideoPlayer(b, VideoShots.s02_04), E = new VideoPlayer(b, VideoShots.s02_06), C = new VideoPlayer(b, VideoShots.s03_01), H = new VideoPlayer(b, VideoShots.s03_02), G = new VideoPlayer(b, VideoShots.s03_03);
    p = new Sequencer;
    p.add(new ClearEffect(b), m.getPatternMS(0), m.getPatternMS(73.25), 0);
    p.add(new VideoPlayer(b, VideoShots.introLayers), m.getPatternMS(0), m.getPatternMS(7.9), 1);
    var I = m.getPatternMS(7.9), V = m.getPatternMS(16);
    p.add(u, I, I + u.duration, 1);
    I += u.duration;
    p.add(w, I, I + w.duration, 1);
    I += w.duration;
    p.add(x, I, I + x.duration, 1);
    I += x.duration;
    p.add(y, I, V, 4);
    u = m.getPatternMS(16) - 2E3;
    p.add(new City(b), u, m.getPatternMS(23.9), 1);
    p.add(new PaintEffect(b), u, m.getPatternMS(23.9), 5);
    u = m.getPatternMS(23.9);
    m.getPatternMS(32);
    p.add(z, u, u + z.duration, 1);
    u += z.duration;
    p.add(D, u, u + D.duration, 1);
    u += D.duration;
    p.add(B, u, u + B.duration, 1);
    u += B.duration;
    p.add(A, u, u + A.duration, 1);
    u += A.duration;
    p.add(E, u, u + E.duration, 4);
    z = m.getPatternMS(32) - 3E3;
    p.add(new Prairie(b), z, m.getPatternMS(40), 1);
    p.add(new PaintEffectPrairie(b), z, m.getPatternMS(40), 5);
    z = m.getPatternMS(40);
    m.getPatternMS(48);
    p.add(C, z, z + C.duration, 1);
    z += C.duration;
    p.add(H, z, z + H.duration, 1);
    z += H.duration;
    p.add(G, z, z + G.duration, 4);
    z += G.duration;
    C = m.getPatternMS(48) - 11E3;
    p.add(new Dunes(b), C, m.getPatternMS(73.25), 1);
    p.add(new PaintEffectDunes(b), C, m.getPatternMS(73.25), 5);
    p.add(new FadeOutEffect(0, b), m.getPatternMS(23.5), m.getPatternMS(24), 3);
    p.add(new FadeOutEffect(0, b), m.getPatternMS(39.5), m.getPatternMS(40), 3);
    p.add(new FadeOutEffect(0, b), m.getPatternMS(72.2), m.getPatternMS(73.25), 3);
    p.add(new PointerEffect(b, !0), m.getPatternMS(8), m.getPatternMS(73.25), 1E3);
    p.add(new RenderEffect(b), m.getPatternMS(0), m.getPatternMS(8), 6);
    p.add(new PaintEffect(b), m.getPatternMS(8), m.getPatternMS(16) - 2E3, 6);
    p.add(new PaintEffectPrairie(b), m.getPatternMS(24), m.getPatternMS(32) - 3E3, 6);
    p.add(new RenderEffect(b), m.getPatternMS(40), m.getPatternMS(48) - 11E3, 6);
    this.getDomElement = function () {
        return f
    };
    this.show = function () {
        f.style.display = "block";
        b.signals.keydown.add(c)
    };
    this.hide = function () {
        f.style.display = "none";
        b.signals.keydown.remove(c);
        g()
    };
    this.resize = function ($, X) {
        b.viewportWidth = b.baseWidth * ($ / b.baseWidth);
        b.viewportHeight = b.baseHeight * ($ / b.baseWidth);
        o.setSize(b.viewportWidth, b.viewportHeight);
        t.width = b.viewportWidth;
        t.height = b.viewportHeight;
        delete t.__webglFramebuffer;
        o.domElement.style.left = "0px";
        o.domElement.style.top = (X - b.viewportHeight) / 2 + "px"
    };
    this.update = function () {
        if (n)if (h.currentTime > 209) {
            b.signals.showrelauncher.dispatch();
            g()
        } else {
            p.update(h.currentTime * 1E3);
            b.currentTime = h.currentTime
        }
    }
};
FilmSection.prototype = new Section;
FilmSection.prototype.constructor = FilmSection;
var RelauncherSection = function (b) {
    function g() {
        for (var H = B.getPoints(), G = 0; G < H.length; G++) {
            var I = H[G].getOriginPosition(), V = h.list[G], $ = I.x + t.x;
            I = I.y + t.y;
            if (G == 0) {
                $ -= 113;
                I -= 162
            } else if (G == 1) {
                $ += 137;
                I -= 46
            } else if (G == 2) {
                $ += 106;
                I += 78
            } else if (G == 3) {
                $ -= 312;
                I += 75
            } else {
                $ -= 344;
                I -= 46
            }
            V.style.left = $ + "px";
            V.style.top = I + "px"
        }
    }

    function c(H, G, I, V, $) {
        G = document.createElement(G);
        G.setAttribute("id", I);
        G.setAttribute("class", V);
        G.innerHTML = $;
        H.appendChild(G);
        return G
    }

    Section.call(this);
    var f = document.createElement("div");
    f.style.width = window.innerWidth + "px";
    f.style.height = window.innerHeight + "px";
    f.style.display = "none";
    f.style.backgroundColor = "#ffffff";
    f.setAttribute("id", "relauncher-section");
    var h = {}, m, n = document.createTextNode("#relauncher-section div.after-experience { position: absolute; height: 57px; overflow: hidden; cursor: pointer; } #relauncher-section div.after-experience img { display: block; } #relauncher-section div.after-experience:hover img { margin-top: -57px; }"), p = document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css";
    if (o.styleSheet)o.styleSheet.cssText = n.nodeValue; else o.appendChild(n);
    p.appendChild(o);
    var t = {x: window.innerWidth / 2 - 225, y: window.innerHeight / 2 - 175}, u = new Clouds(b, !0);
    u.getDomElement().style.position = "absolute";
    u.getDomElement().style.left = "0px";
    u.getDomElement().style.top = "0px";
    u.getDomElement().style.width = window.innerWidth + "px";
    u.getDomElement().style.height = window.innerHeight + "px";
    f.appendChild(u.getDomElement());
    var w = document.createElement("div");
    w.setAttribute("id", "container");
    w.setAttribute("style", "position: absolute; top: " + t.y + "px; left: " + t.x + "px;");
    f.appendChild(w);
    var x = document.createElement("div");
    x.setAttribute("style", "-webkit-transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); -moz-transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); -o-transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750); transition: all 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750);");
    x.style.position = "absolute";
    x.style.width = "100%";
    x.style.height = "100%";
    x.style.backgroundColor = "#000";
    f.appendChild(x);
    var y = new GEE({fullscreen: !1, container: w, width: 450, height: 350, loop: !1}), z = y.ctx;
    m = document.createElement("div");
    m.style.position = "absolute";
    m.style.width = "100%";
    m.style.top = window.innerHeight - 78 + "px";
    m.style.left = "0";
    new Footer(m);
    f.appendChild(m);
    var D = new WonderWall.Pentagon(y, y.width * 0.5, y.height * 0.5, 80), B = new WonderWall.Pentagon(y, y.width * 0.5, y.height * 0.5, 95), A = new WonderWall.Pentagon(y, y.width * 0.5, y.height * 0.5, 130, 0.25);
    A.showFill = !1;
    A.insides = !0;
    B.showFill = !1;
    A.setRadius(0.09);
    D.setRadius(0.06);
    var E = {svg: new Heart(y, "files/eminating-heart.svg", 0, 0), point: new WonderWall.Point(y, y.width * 0.5, y.height * 0.5 + 6)};
    E.point.r = 0.0625;
    var C = C || {};
    C.color = {red: "#f15d22", black: "#30302e", white: "#f4f4ea"};
    h = function (H) {
        var G = {}, I = c(H, "div", "start-over", "after-experience", "<img src = '/files/relaunch_section/start_over.png' alt = 'Start Over' />"), V = c(H, "div", "technology", "after-experience", "<img src = '/files/relaunch_section/technology.png' alt = 'Technology' />"), $ = c(H, "div", "add-to-the-dream", "after-experience", "<img src = '/files/relaunch_section/add_dreams.png' alt = 'Add to the Dream' />"), X = c(H, "div", "explore-other-dreams", "after-experience", "<img src = '/files/relaunch_section/explore_dreams.png' alt = 'Explore Other Dreams' />");
        H = c(H, "div", "continue-to-explore", "after-experience", "<img src = '/files/relaunch_section/continue.png' alt = 'Continue To Explore' />");
        I.addEventListener("click", function (P) {
            P.preventDefault();
            b.signals.showfilm.dispatch();
            b.signals.startfilm.dispatch(0, 1);
            _gaq.push(["_trackPageview", "/relauncher_start_over"])
        }, !1);
        V.addEventListener("click", function (P) {
            P.preventDefault();
            window.location = "/tech";
            _gaq.push(["_trackPageview", "/relauncher_tech"])
        }, !1);
        $.addEventListener("click", function (P) {
            P.preventDefault();
            b.signals.showugc.dispatch();
            _gaq.push(["_trackPageview", "/relauncher_add_to_dream"])
        }, !1);
        X.addEventListener("click", function (P) {
            P.preventDefault();
            window.location = "/gallery";
            _gaq.push(["_trackPageview", "/relauncher_gallery"])
        }, !1);
        H.addEventListener("click", function (P) {
            P.preventDefault();
            b.isExperience = !1;
            b.signals.showexploration.dispatch();
            b.signals.startexploration.dispatch("dunes", !1);
            _gaq.push(["_trackPageview", "/relauncher_continue_explore"])
        }, !1);
        G.start = I;
        G.technology = V;
        G.add = $;
        G.otherDreams = X;
        G.explore = H;
        G.list = [H, I, X, $, V];
        init = !0;
        return G
    }(f);
    for (n = 0; n < h.list.length; n++) {
        p = h.list[n];
        p.addEventListener("mouseover", function () {
            var H = h.list.indexOf(this);
            D.setUpdatePoint(!0, H);
            B.setUpdatePoint(!0, H);
            A.setUpdatePoint(!0, H);
            E.point.updating = !0
        }, !1);
        p.addEventListener("mouseout", function () {
            var H = h.list.indexOf(this);
            D.setUpdatePoint(!1, H);
            B.setUpdatePoint(!1, H);
            A.setUpdatePoint(!1, H);
            E.point.updating = !1
        }, !1)
    }
    g();
    y.draw = function () {
        B.update(t);
        B.getPoints();
        z.clearRect(0, 0, y.width, y.height);
        z.globalCompositeOperation = "source-over";
        z.strokeStyle = C.color.black;
        z.lineWidth = 0.5;
        A.update(t).render();
        z.globalCompositeOperation = "destination-out";
        D.update(t).render();
        z.globalCompositeOperation = "xor";
        z.lineWidth = 24;
        B.showStroke = !0;
        B.showFill = !1;
        B.render();
        z.globalCompositeOperation = "source-over";
        z.save();
        z.translate(y.width / 2, y.height / 2);
        E.svg.render();
        z.restore()
    };
    this.show = function () {
        u.show();
        g();
        f.style.display = "block";
        setTimeout(function () {
            x.style.opacity = 0
        }, 1);
        for (var H = w.getElementsByTagName("div"), G = 0; G < H.length; G++)H[G].style.display = "block"
    };
    this.resize = function (H, G) {
        var I = window.innerWidth / 2, V = window.innerHeight / 2;
        f.style.width = H + "px";
        f.style.height = G + "px";
        u.resize(H, G);
        m.style.top = window.innerHeight - 78 + "px";
        t = {x: I - 225, y: V - 175};
        w.setAttribute("style", "position: absolute; top: " + t.y + "px; left: " + t.x + "px;");
        g()
    };
    this.hide = function () {
        u.hide();
        f.style.display = "none";
        x.style.opacity = 1
    };
    this.getDomElement = function () {
        return f
    };
    this.update = function () {
        u.update();
        y.draw()
    }
};
RelauncherSection.prototype = new Section;
RelauncherSection.prototype.constructor = RelauncherSection;
var ExplorationSection = function (b) {
    function g(aa) {
        (aa.keyCode == 13 || aa.keyCode == 32 || aa.keyCode == 27) && c()
    }

    function c() {
        if (X = !X) {
            o.style.display = "block";
            t.style.display = "block"
        } else {
            o.style.display = "none";
            t.style.display = "none"
        }
    }

    function f() {
        P = window.innerWidth / b.baseWidth;
        b.viewportWidth = b.baseWidth * P;
        b.viewportHeight = b.baseHeight * P;
        x.setSize(b.viewportWidth, b.viewportHeight);
        y.width = b.viewportWidth;
        y.height = b.viewportHeight;
        delete y.__webglFramebuffer;
        x.domElement.style.left = "0px";
        x.domElement.style.top = (window.innerHeight - b.viewportHeight) / 2 + "px"
    }

    Section.call(this);
    var h = document.createElement("div");
    h.style.display = "none";
    var m = document.createTextNode("#rome-explore-hex-audio:hover polygon,\n\t#rome-explore-hex-poly-top:hover polygon,\n\t#rome-explore-hex-poly-bottom:hover polygon {\n\t\topacity: 1.0;\n\t}\n#rome-explore-hex-poly-middle,\n#rome-explore-hex-audio,\n\t#rome-explore-hex-poly-top,\n\t#rome-explore-hex-poly-bottom {\n\t\tcursor: pointer;\n\t}"), n = document.getElementsByTagName("head")[0], p = document.createElement("style");
    if (p.stylesheet)p.styleSheet.cssText = m.nodeValue; else p.appendChild(m);
    n.appendChild(p);
    var o = document.createElement("div"), t = document.createElement("div"), u = 0, w = 0, x = b.renderer, y = b.renderTarget, z, D, B, A, E, C, H, G, I, V = 0, $ = "", X = !1, P, S = !0, v = !1, O, J;
    E = new ClearEffect(b);
    E.init();
    I = new FadeOutEffect(0, b);
    I.init();
    C = new PaintEffect(b);
    C.init();
    H = new PaintEffectPrairie(b);
    H.init();
    G = new PaintEffectDunes(b);
    G.init();
    var T = !0;
    O = document.createElement("audio");
    O.volume = 0;
    O.loop = !0;
    O.src = "/files/nature.mp3";
    O.autoplay = !1;
    document.body.appendChild(O);
    J = document.createElement("audio");
    J.volume = 0;
    J.loop = !1;
    J.src = "/files/Black.ogg";
    J.autoplay = !1;
    document.body.appendChild(J);
    var K, R = {};
    R.dunes = new DunesCameraFreeExplore(b);
    R.prairie = new PrairieCameraFreeExplore(b);
    R.city = new CityCameraFreeExplore(b);
    b.signals.startexploration.add(function (aa, W) {
        t.style.position = "absolute";
        t.style.zIndex = 1E3;
        t.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="184px" height="47px" viewBox="0 0 184 47" overflow="visible" enable-background="new 0 0 184 47" xml:space="preserve">\n\t<g id = "rome-explore-hex-audio" onClick="ExplorationSection.handleHexClick(2)">\n\t\t<polygon opacity="0.5" points="0,0 27.237,47.176 156.857,47.176 184.095,0 "/>\n\t\t<path id="rome-explore-hex-audio-play" display="none" fill="#FFFFFF" d="M118.749,14.089c-5.246,0-9.499,4.253-9.499,9.499s4.253,9.499,9.499,9.499s9.499-4.253,9.499-9.499 S123.995,14.089,118.749,14.089z M116.27,27.811v-7.75l6.875,3.527L116.27,27.811z"/>\n\t\t<path id="rome-explore-hex-audio-pause" fill="#FFFFFF" d="M118.75,14.089c-5.246,0-9.5,4.253-9.5,9.499s4.254,9.499,9.5,9.499s9.498-4.253,9.498-9.499 S123.996,14.089,118.75,14.089z M118.031,27.463h-2v-7.75h2V27.463z M121.469,27.463h-2v-7.75h2V27.463z"/>\n\t\t<text x="50" y="28" font-size="12" font-family="Futura, sans-serif" fill="#fff" letter-spacing="1">AUDIO</text>\n\t</g>\n</svg>';
        t.style.display = "none";
        h.appendChild(t);
        o.style.position = "absolute";
        o.style.zIndex = 1E3;
        o.innerHTML = '<g id = "svgHex-container">\n<svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="-184px" y="-159px" width="368px" height="318px" viewBox="0 0.972 368 318" overflow="visible" enable-background="new 0 0.972 368 318" xml:space="preserve">\n\t<polygon opacity="0.5" points="298.816,133.629 353.291,133.629 276.7,0.972 249.464,48.149 "/>\n\t<polygon opacity="0.5" points="119.064,47.554 91.827,0.377 14.897,133.629 69.37,133.629 "/>\n\t<g id="rome-explore-hex-poly-top" onClick="ExplorationSection.handleHexClick(1)">\n\t\t<polygon opacity="0.5" points="120.01,47.177 248.861,47.177 276.098,0 92.773,0 92.825,0.089 "/>\n\t\t<text x="168" y="28" font-size="14" font-family="Futura, sans-serif" fill="#fff" letter-spacing="1">EXIT</text>\n\t</g>\n\t<polygon opacity="0.5" points="353.868,134.629 299.394,134.629 313.714,159.433 298.996,184.925 353.471,184.925 368.188,159.433 "/>\n\t<polygon opacity="0.5" points="298.419,185.925 249.267,271.062 276.503,318.239 352.894,185.925 "/>\n\t<g id="rome-explore-hex-poly-bottom" onClick="ExplorationSection.handleHexClick(0)">\n\t\t<polygon opacity="0.5" points="120.405,271.692 93.168,318.869 275.702,318.869 248.466,271.692 "/>\n\t\t<text x="156" y="300" font-size="14" font-family="Futura, sans-serif" fill="#fff" letter-spacing="1">RESUME</text>\n\t</g>\n\t<polygon opacity="0.5" points="69.767,185.925 15.294,185.925 92.024,318.833 119.262,271.656 "/>\n\t<polygon opacity="0.5" points="54.473,159.433 68.793,134.629 14.728,134.629 14.728,133.922 0,159.433 14.728,184.944 14.728,184.925 69.19,184.925 "/>\n\t<g id="rome-explore-hex-poly-middle" onClick="ExplorationSection.handleHexClick(3)">\n\t\t<polygon opacity="0.5" fill="#F6F4EC" points="119.282,271.692 54.473,159.433 119.282,47.177 248.902,47.177 313.714,159.433 248.902,271.692 "/>\n\t</g>\n</svg>\n</g>';
        o.style.display = "none";
        h.appendChild(o);
        z = b.worlds[aa];
        B = z.portals;
        K = R[aa];
        if (aa === "dunes" && $ !== "" && $ !== "dunes" && B) {
            for (var ea = 99999999999, ma, oa = 0; oa < B.length; oa++)if (B[oa].currentDistance < ea) {
                ea = B[oa].currentDistance;
                ma = B[oa]
            }
            K.switchDirection(ma)
        } else K.resetCamera();
        $ = aa;
        D = b.soups[aa];
        V = 0;
        if (T)if (W || !v)if (J.volume == 0) {
            if (W)J.currentTime = b.currentTime; else {
                J.currentTime = 0;
                v = !0
            }
            J.play();
            J.volume = 1;
            S = !W
        } else {
            O.play();
            O.volume = 1
        } else {
            O.play();
            O.volume = 1
        }
        if (aa == "city")A = C; else if (aa == "prairie")A = H; else {
            A = G;
            z.skyWhite = 1;
            z.ambient.color.setHSV(0, 0, 0.1);
            z.directionalLight1.color.setHSV(0.08823529411764706, 0, 1);
            z.directionalLight2.color.setHSV(0, 0, 0.8647058823529412);
            z.lensFlare.position.y = 3500
        }
        f();
        u = w = (new Date).getTime()
    });
    b.signals.windowresized.add(f);
    this.getDomElement = function () {
        return h
    };
    this.show = function () {
        if (!b.hasExplored)b.hasExplored = !0;
        h.style.display = "block";
        h.appendChild(x.domElement);
        b.signals.keyup.add(g);
        o.style.display = "none";
        o.style.top = window.innerHeight / 2 - 184 + "px";
        o.style.left = window.innerWidth / 2 - 159 + "px";
        t.style.display = "none";
        t.style.top = (window.innerHeight - b.viewportHeight) / 2 + "px";
        t.style.left = window.innerWidth / 2 - 66 + "px";
        X = !1
    };
    this.hide = function () {
        h.style.display = "none";
        b.signals.keyup.remove(g);
        T && O.pause()
    };
    this.resize = function () {
        o.style.top = window.innerHeight / 2 - 184 + "px";
        o.style.left = window.innerWidth / 2 - 159 + "px";
        t.style.top = (window.innerHeight - b.viewportHeight) / 2 + "px";
        t.style.left = window.innerWidth / 2 - 66 + "px"
    };
    this.update = function () {
        time = (new Date).getTime() - u;
        delta = time - w;
        w = time;
        delta = Math.min(1E3, Math.max(0, delta));
        if (!X) {
            if (z && z.scene) {
                D && D.update(delta, K.camera);
                THREE.AnimationHandler.update(delta);
                K.updateCamera(0, delta, time);
                z.update(delta, K.camera, !0);
                E.update(0, delta, time);
                x.setClearColor(z.scene.fog ? z.scene.fog.color : 16777215);
                x.render(z.scene, K.camera, y);
                if (V < 1E3) {
                    V += delta;
                    I.update(1 - V / 1E3)
                } else for (var aa = 0; aa < B.length; aa++)B[aa].currentDistance < B[aa].radius * 1.25 && I.update(1 - (B[aa].currentDistance - B[aa].radius) / (B[aa].radius * 0.25));
                A.update(0, delta, time)
            }
            if (J.volume > 0 && J.currentTime > 209) {
                J.pause();
                J.volume = 0;
                S || b.signals.showrelauncher.dispatch()
            }
        }
    };
    ExplorationSection.handleHexClick = function (aa) {
        switch (aa) {
            case 0:
                c();
                break;
            case 1:
                if (J.volume > 0) {
                    J.pause();
                    J.volume = 0
                }
                b.signals.showrelauncher.dispatch();
                break;
            case 2:
                if (T) {
                    J.volume > 0 && J.pause();
                    O.volume > 0 && O.pause();
                    document.getElementById("rome-explore-hex-audio-pause").setAttribute("display", "none");
                    document.getElementById("rome-explore-hex-audio-play").setAttribute("display", "svg-path");
                    T = !1
                } else {
                    J.volume > 0 && J.currentTime < 208 && J.play();
                    O.volume > 0 && O.play();
                    document.getElementById("rome-explore-hex-audio-play").setAttribute("display", "none");
                    document.getElementById("rome-explore-hex-audio-pause").setAttribute("display", "svg-path");
                    T = !0
                }
                break;
            case 3:
                window.open(x.domElement.toDataURL("image/png"), "Make ro.me your wallpaper!");
                break;
            default:
                c()
        }
    }
};
ExplorationSection.prototype = new Section;
ExplorationSection.prototype.constructor = ExplorationSection;
var UgcSection = function (b) {
    function g(K) {
        V += K;
        V = V < 100 ? 100 : V > 5E3 ? 5E3 : V
    }

    function c(K) {
        if (K.button == 2) {
            z = !0;
            $ = u.getPainter().getMode();
            u.getPainter().setMode(VoxelPainter.MODE_IDLE)
        }
        D = !0;
        if (z) {
            B = H;
            A = G;
            E = K.clientX;
            C = K.clientY
        }
    }

    function f(K) {
        if (K.button == 2) {
            z = !1;
            u.getPainter().setMode($)
        }
        D = !1
    }

    function h(K) {
        if (z && D) {
            H = B - (K.clientX - E) * 0.1;
            G = A + (K.clientY - C) * 0.1;
            switch (o) {
                case 0:
                    G = G > 90 ? 90 : G < 0 ? 0 : G;
                    break;
                case 1:
                    G = G > 90 ? 90 : G < -90 ? -90 : G
            }
        }
    }

    function m(K) {
        g(-K.wheelDeltaY * 0.5)
    }

    function n(K) {
        K.preventDefault()
    }

    var p = this, o, t, u, w, x = document.createElement("div");
    x.style.display = "none";
    var y = Math.PI / 180, z = !1, D = !1, B, A, E, C, H = 45, G = 15, I = 3E3, V = 3E3, $, X = new THREE.Camera(50, window.innerWidth / window.innerHeight, 1, 2E4);
    X.target.position.y = 20;
    p.scene = new THREE.Scene;
    p.scene.fog = new THREE.FogExp2(16777215, 1.5E-4);
    p.scene.fog.color.setHSV(0.576, 0.382, 0.9);
    var P = new THREE.AmbientLight(4465152), S = new THREE.DirectionalLight(16772829), v = new THREE.DirectionalLight(16772829);
    P.color.setHSV(0, 0, 0.1);
    S.color.setHSV(0.088, 0, 1);
    S.position.set(0.8, 0.3, -0.5);
    S.position.normalize();
    v.color.setHSV(0, 0, 0.564);
    v.position.set(0.1, 0.5, 0.2);
    v.position.normalize();
    p.scene.addLight(P);
    p.scene.addLight(S);
    p.scene.addLight(v);
    P = initLensFlares(new THREE.Vector3(0, 0, -7500), 60, 292);
    p.scene.addChild(P);
    var O = new THREE.Object3D;
    p.scene.addChild(O);
    (new THREE.SceneLoaderAjax).load("/files/models/dunes/D_tile_1.js", function (K) {
        for (var R = 0, aa = K.scene.objects.length; R < aa; R++) {
            var W = K.scene.objects[R];
            if (W.visible) {
                W.rotation.x = -90 * Math.PI / 180;
                W.position.y = -100;
                W.position.x = 1E3;
                W.scale.x = W.scale.y = W.scale.z = 0.75;
                O.addChild(W)
            }
        }
        p.clouds = new THREE.Object3D;
        O.addChild(p.clouds);
        K = new THREE.Plane(1E3, 1E3);
        for (R = 0; R < 100; R++) {
            aa = new THREE.Mesh(K, new THREE.MeshLambertMaterial({color: 16777215, opacity: 0.5, blending: THREE.AdditiveBlending}));
            aa.position.x = Math.random() - 0.5;
            aa.position.y = Math.random();
            aa.position.z = Math.random() - 0.5;
            aa.position.normalize();
            aa.position.x = aa.position.x * (Math.random() * 5E3 + 2500) * 3;
            aa.position.y = aa.position.y * (Math.random() * 2500 + 5E3) - 2800;
            aa.position.z = aa.position.z * (Math.random() * 5E3 + 2500) * 3;
            aa.rotation.x = -90 * Math.PI / 180;
            aa.scale.x = Math.random() * 2 + 1;
            aa.scale.y = Math.random() * 2 + 1;
            aa.doubleSided = !0;
            p.clouds.addChild(aa)
        }
    });
    var J = new THREE.Mesh(new THREE.Plane(4050, 4050, 81, 81), new THREE.MeshBasicMaterial({color: 0, opacity: 0.1, transparent: !0, wireframe: !0}));
    J.position.y = -25;
    J.rotation.x = -90 * Math.PI / 180;
    O.addChild(J);
    var T = new THREE.WebGLRenderer({stencil: !1});
    T.domElement.style.position = "absolute";
    T.setSize(window.innerWidth, window.innerHeight);
    T.setClearColor(p.scene.fog.color);
    T.sortObjects = !1;
    T.autoClear = !1;
    x.appendChild(T.domElement);
    this.getDomElement = function () {
        return x
    };
    this.load = function () {
        function K(W, ea, ma) {
            W = W || 300;
            ea = ea || 180;
            ma = ma || 7;
            var oa = document.createElement("canvas"), ya = X.position.clone(), za = 45, qa = 360 / ma;
            oa.width = W;
            oa.height = ea * ma;
            var Ga = T.domElement, Da = Ga.width, Ha = Ga.height, Ia = oa.getContext("2d");
            p.resize(W, ea);
            u.getPainter().hideBrush();
            J.visible = !1;
            THREE.SceneUtils.traverseHierarchy(p.clouds, function (ta) {
                ta.visible = !1
            });
            var xa = u.getPainter().getObject().getMesh().geometry.vertices, da = xa[0].position.x, ja = xa[0].position.y, pa = xa[0].position.z, va = xa[0].position.x, Fa = xa[0].position.y, $a = xa[0].position.z, fb, wa;
            for (wa in xa) {
                xa[wa].position.x > da && (da = xa[wa].position.x);
                xa[wa].position.y > ja && (ja = xa[wa].position.y);
                xa[wa].position.z > pa && (pa = xa[wa].position.z);
                xa[wa].position.x < va && (va = xa[wa].position.x);
                xa[wa].position.y < Fa && (Fa = xa[wa].position.y);
                xa[wa].position.z < $a && ($a = xa[wa].position.z)
            }
            xa = (va + da) / 2;
            fb = ($a + pa) / 2;
            I = 2 * Math.max(da - va, Math.max(ja - Fa, pa - $a));
            X.target.position.set(xa, (Fa + ja) / 2, fb);
            for (wa = 0; wa < ma; wa++) {
                X.position.x = I * Math.sin(za * y) * Math.cos(35 * y) + xa;
                X.position.y = I * Math.sin(35 * y);
                X.position.z = I * Math.cos(za * y) * Math.cos(35 * y) + fb;
                T.clear();
                T.render(p.scene, X);
                Ia.drawImage(Ga, 0, 0, W, ea, 0, ea * wa, W, ea);
                za += qa
            }
            X.target.position.set(0, 0, 0);
            p.resize(Da, Ha);
            W = oa.toDataURL("image/png");
            delete oa;
            X.position.copy(ya);
            J.visible = !0;
            THREE.SceneUtils.traverseHierarchy(p.clouds, function (ta) {
                ta.visible = !0
            });
            T.clear();
            T.render(p.scene, X);
            return W
        }

        var R = signals.Signal;
        b.ugcSignals = {};
        b.ugcSignals.showintro = new R;
        b.ugcSignals.showobjectcreator = new R;
        b.ugcSignals.showsoupcreator = new R;
        b.ugcSignals.object_mode = new R;
        b.ugcSignals.soup_mode = new R;
        b.ugcSignals.object_createmode = new R;
        b.ugcSignals.object_erasemode = new R;
        b.ugcSignals.object_symmetrymode = new R;
        b.ugcSignals.object_rotatemode = new R;
        b.ugcSignals.object_changecolor = new R;
        b.ugcSignals.object_colormode = new R;
        b.ugcSignals.object_changesize = new R;
        b.ugcSignals.object_zoomin = new R;
        b.ugcSignals.object_zoomout = new R;
        b.ugcSignals.submit_dialogue = new R;
        b.ugcSignals.submit = new R;
        b.ugcSignals.object_smoothup = new R;
        b.ugcSignals.object_smoothdown = new R;
        b.ugcSignals.object_undo = new R;
        b.ugcSignals.object_requestsnapshot = new R;
        b.ugcSignals.object_receivesnapshot = new R;
        t = new UgcIntro(b);
        x.appendChild(t.getDomElement());
        u = new UgcObjectCreator(b, X, p.scene);
        w = new UgcUI(b);
        w.getDomElement().style.position = "absolute";
        w.getDomElement().style.left = "0px";
        w.getDomElement().style.top = "0px";
        w.getDomElement().style.display = "none";
        x.appendChild(w.getDomElement());
        w.addListeners();
        b.ugcSignals.showintro.add(function () {
            o = null;
            u.disable();
            t.getDomElement().style.display = "block";
            w.getDomElement().style.display = "none";
            u.getPainter().clear()
        });
        b.ugcSignals.showobjectcreator.add(function (W) {
            o = W;
            t.getDomElement().style.display = "none";
            u.enable();
            w.setType(W);
            w.getDomElement().style.display = "block";
            switch (o) {
                case 0:
                    u.getPainter().getObject().setType(UgcObject.TYPE_GROUND);
                    var ea = {theta: H, phi: G};
                    (new TWEEN.Tween(ea)).to({theta: 45, phi: 15}, 2E3).easing(TWEEN.Easing.Exponential.EaseOut).onUpdate(function () {
                        H = ea.theta;
                        G = ea.phi
                    }).start();
                    (new TWEEN.Tween(O.position)).to({y: 0}, 3E3).easing(TWEEN.Easing.Exponential.EaseOut).start();
                    break;
                case 1:
                    u.getPainter().getObject().setType(UgcObject.TYPE_SKY);
                    ea = {theta: H, phi: G};
                    (new TWEEN.Tween(ea)).to({theta: 45, phi: 15}, 2E3).easing(TWEEN.Easing.Exponential.EaseOut).onUpdate(function () {
                        H = ea.theta;
                        G = ea.phi
                    }).start();
                    (new TWEEN.Tween(O.position)).to({y: -5E3}, 3E3).easing(TWEEN.Easing.Exponential.EaseOut).start()
            }
            (new TWEEN.Tween(X.target.position)).to({y: 20}, 1E3).easing(TWEEN.Easing.Exponential.EaseOut).start()
        });
        b.ugcSignals.object_createmode.add(function () {
            z = !1
        });
        b.ugcSignals.object_erasemode.add(function () {
            z = !1
        });
        b.ugcSignals.object_rotatemode.add(function () {
            z = !0
        });
        b.ugcSignals.object_zoomin.add(function () {
            g(-200)
        });
        b.ugcSignals.object_zoomout.add(function () {
            g(200)
        });
        b.ugcSignals.object_requestsnapshot.add(function () {
            var W = K(735, 465);
            b.ugcSignals.object_receivesnapshot.dispatch(W)
        });
        var aa = new UgcHandler;
        b.ugcSignals.submit.add(function (W, ea) {
            var ma = K(), oa = u.getPainter().getObject();
            oa = {title: W, email: ea, category: oa.getType(), data: oa.getJSON()};
            aa.submitUGO(oa, ma, function (ya) {
                if (ya.success)window.location = "/gallery"; else alert("There was an error submitting your model. Please try again in a moment.")
            })
        })
    };
    this.show = function () {
        b.signals.mousedown.add(c);
        b.signals.mouseup.add(f);
        b.signals.mousemoved.add(h);
        b.signals.mousewheel.add(m);
        x.style.display = "block";
        u.show();
        b.ugcSignals.showintro.dispatch();
        x.addEventListener("contextmenu", n, !1)
    };
    this.hide = function () {
        b.signals.mousedown.remove(c);
        b.signals.mouseup.remove(f);
        b.signals.mousemoved.remove(h);
        b.signals.mousewheel.remove(m);
        x.style.display = "none";
        u.hide();
        x.removeEventListener("contextmenu", n, !1)
    };
    this.resize = function (K, R) {
        t.resize(K, R);
        X.aspect = K / R;
        X.updateProjectionMatrix();
        b.viewportWidth = K;
        b.viewportHeight = R;
        T.setSize(K, R);
        T.domElement.style.left = "0px";
        T.domElement.style.top = "0px"
    };
    this.update = function () {
        TWEEN.update();
        o == null && (H = (H += 0.1) % 360);
        w.update();
        I += (V - I) / 20;
        X.position.x = I * Math.sin(H * y) * Math.cos(G * y);
        X.position.y = I * Math.sin(G * y);
        X.position.z = I * Math.cos(H * y) * Math.cos(G * y);
        T.clear();
        T.render(p.scene, X)
    }
};
UgcSection.prototype = new Section;
UgcSection.prototype.constructor = UgcSection;
var Clouds = function (b, g) {
    function c() {
        if (!g) {
            t.x = b.mouse.x / b.screenWidth * 100 - 50;
            t.y = b.mouse.y / b.screenHeight * 60 - 30;
            u = new THREE.Vector3(b.mouse.x - b.screenWidth / 2, -b.mouse.y + b.screenHeight / 2, 0)
        }
    }

    function f(J) {
        for (var T = 0; T < 2; T++) {
            h = p[T] = new Boid;
            h.position.x = 320;
            h.position.y = 20 + Math.random() * 10;
            h.position.z = 200 + Math.random();
            h.velocity.x = Math.random() * 2 - 1;
            h.velocity.y = Math.random() * 2 - 1;
            h.velocity.z = Math.random() * 2 - 1;
            h.setAvoidWalls(!0);
            h.setWorldSize(1E3, 200, 400);
            o[T] = new ROME.Animal(J, !0);
            o[T].timeOffset = Math.random() * 100;
            m = n[T] = o[T].mesh;
            m.phase = Math.floor(Math.random() * 62.8);
            m.rotation.set(0, -0.5, 0);
            m.updateMatrix();
            m.update();
            window.morphObject = o[T];
            o[T].play(o[T].availableAnimals[0], o[T].availableAnimals[0]);
            m.position = p[T].position;
            m.doubleSided = !1;
            m.scale.x = m.scale.y = m.scale.z = 0.03 + 0.05 * Math.random();
            H.addChild(m)
        }
        G.position.z = -4E3;
        B.addObject(G);
        I.position.z = 0;
        B.addObject(I);
        E.addObject(H)
    }

    var h, m, n = [], p = [], o = [], t = {x: 0, y: 0}, u = {x: 0, y: 0, z: 0}, w, x, y = start_time = (new Date).getTime(), z, D, B, A, E, C, H, G, I, V, $, X, P, S, v;
    $ = new THREE.Fog(5413329, -100, 3E3);
    z = new THREE.Camera(30, window.innerWidth / window.innerHeight, 1, 3E3);
    z.position.z = 6E3;
    B = new THREE.Scene;
    E = new THREE.Scene;
    H = new THREE.Object3D;
    V = new THREE.Geometry;
    var O = THREE.ImageUtils.loadTexture("/files/cloud256.png", null, function () {
        X = new THREE.MeshShaderMaterial({uniforms: {map: {type: "t", value: 2, texture: O}, fogColor: {type: "c", value: $.color}, fogNear: {type: "f", value: $.near}, fogFar: {type: "f", value: $.far}}, vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = uv;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D map;\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying vec2 vUv;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\ngl_FragColor = texture2D( map, vUv );\ngl_FragColor.w *= pow( gl_FragCoord.z, 20.0 );\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}", depthTest: !1});
        for (var J = new THREE.Mesh(new THREE.Plane(64, 64)), T = 0; T < 4E3; T++) {
            J.position.x = Math.random() * 1E3 - 500;
            J.position.y = g ? -Math.random() * Math.random() * 200 + 25 : -Math.random() * Math.random() * 200 - 15;
            J.position.z = T;
            J.rotation.z = Math.random() * Math.PI;
            J.scale.x = J.scale.y = Math.random() * Math.random() * 1.5 + 0.5;
            GeometryUtils.merge(V, J)
        }
        G = new THREE.Mesh(V, X);
        I = new THREE.Mesh(V, X);
        (new THREE.JSONLoaderAjax).load({model: "/files/models/soup/birds_B_life.js", callback: f})
    });
    O.magFilter = THREE.LinearMipMapLinearFilter;
    O.minFilter = THREE.LinearMipMapLinearFilter;
    C = new THREE.WebGLRenderer({antialias: !1, clearColor: 0, clearAlpha: 0});
    C.domElement.style.position = "absolute";
    C.domElement.style.left = "0px";
    C.domElement.style.top = "0px";
    C.getContext();
    C.sortObjects = !1;
    C.autoClear = !1;
    S = new THREE.WebGLRenderTarget(512, 512, {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter});
    v = new THREE.WebGLRenderTarget(1024, 512, {minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter});
    S.depthBuffer = !1;
    S.stencilBuffer = !1;
    v.depthBuffer = !1;
    v.stencilBuffer = !1;
    window.renderTargetClouds = S;
    D = new THREE.Camera;
    D.projectionMatrix = THREE.Matrix4.makeOrtho(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1E4, 1E4);
    A = new THREE.Scene;
    P = new THREE.MeshShaderMaterial({uniforms: {tClouds: {type: "t", value: 0, texture: S}, tFlamingos: {type: "t", value: 1, texture: v}, width: {type: "f", value: window.innerWidth}, height: {type: "f", value: window.innerHeight}, fogColor: {type: "c", value: $.color}}, vertexShader: "varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D tClouds;\nuniform sampler2D tFlamingos;\nuniform vec3 fogColor;\nuniform float width;\nuniform float height;\nvarying vec2 vUv;\nvoid main() {\nvec4 flamingos = vec4(0.);\nif (vUv.y > 0.5) {\nflamingos += texture2D( tFlamingos, vUv );\nflamingos += texture2D( tFlamingos, vUv+vec2(1./width,0.) );\nflamingos += texture2D( tFlamingos, vUv+vec2(.0,1./height) );\nflamingos += texture2D( tFlamingos, vUv+vec2(1./width,1./height) );\nflamingos *= 1./4.;\nflamingos.rgb = mix(flamingos.rgb, vec3(fogColor), 0.15*flamingos.a);\n}\nvec4 clouds = texture2D( tClouds, vUv );\ngl_FragColor = mix(flamingos, clouds, clouds.a);\ngl_FragColor.rgb *= 1./gl_FragColor.a;\n}"});
    A.addObject(new THREE.Mesh(new THREE.Plane(window.innerWidth, window.innerHeight), P));
    this.getDomElement = function () {
        return C.domElement
    };
    this.show = function () {
        b.signals.mousemoved.add(c)
    };
    this.hide = function () {
        b.signals.mousemoved.remove(c)
    };
    this.resize = function (J, T) {
        z.aspect = J / T;
        z.updateProjectionMatrix();
        C.setSize(J, T);
        C.domElement.style.width = J + "px";
        C.domElement.style.height = T + "px"
    };
    this.update = function () {
        position = ((new Date).getTime() - start_time) * 0.03 % 4E3;
        x = (new Date).getTime();
        w = x - y;
        y = x;
        z.position.x += (t.x - z.position.x) * 0.0090;
        z.position.y += (-t.y - z.position.y) * 0.0090;
        z.position.z = -position + 4E3;
        H.position.z = z.position.z - 500;
        H.position.y = -50;
        z.target.position.x = z.position.x;
        z.target.position.y = z.position.y;
        z.target.position.z = z.position.z - 1E3;
        C.clear();
        C.render(B, z, S, !0);
        C.render(E, z, v, !0);
        C.render(A, D);
        for (var J = 0, T = n.length; J < T; J++) {
            h = p[J];
            u.z = h.position.z;
            h.run(p);
            m = n[J];
            m.rotation.y = Math.atan2(-h.velocity.z, h.velocity.x) + Math.PI / 2;
            m.rotation.z = Math.asin(h.velocity.y / h.velocity.length());
            m.phase = (m.phase + (Math.max(0, m.rotation.z) + 0.1)) % 62.83;
            o[J].update(w * m.phase / 100)
        }
    }
}, Boid = function () {
    var b = new THREE.Vector3, g, c = 500, f = 500, h = 200, m, n = !1;
    this.position = new THREE.Vector3;
    this.velocity = new THREE.Vector3;
    g = new THREE.Vector3;
    this.setGoal = function (p) {
        m = p
    };
    this.setAvoidWalls = function (p) {
        n = p
    };
    this.setWorldSize = function (p, o, t) {
        c = p;
        f = o;
        h = t
    };
    this.run = function (p) {
        if (n) {
            b.set(-c * 15, this.position.y, this.position.z);
            b = this.avoid(b);
            b.multiplyScalar(5);
            g.addSelf(b);
            b.set(c, this.position.y, this.position.z);
            b = this.avoid(b);
            b.multiplyScalar(5);
            g.addSelf(b);
            b.set(this.position.x, 0, this.position.z);
            b = this.avoid(b);
            b.multiplyScalar(5);
            g.addSelf(b);
            b.set(this.position.x, f, this.position.z);
            b = this.avoid(b);
            b.multiplyScalar(5);
            g.addSelf(b);
            b.set(this.position.x, this.position.y, -h);
            b = this.avoid(b);
            b.multiplyScalar(5);
            g.addSelf(b);
            b.set(this.position.x, this.position.y, h);
            b = this.avoid(b);
            b.multiplyScalar(5);
            g.addSelf(b)
        }
        Math.random() > 0.5 && this.flock(p);
        this.move()
    };
    this.flock = function (p) {
        m && g.addSelf(this.reach(m, 0.0050));
        g.addSelf(this.alignment(p));
        g.addSelf(this.cohesion(p));
        g.addSelf(this.separation(p))
    };
    this.move = function () {
        this.velocity.addSelf(g);
        var p = this.velocity.length();
        p > 0.6 && this.velocity.divideScalar(p / 0.6);
        this.position.addSelf(this.velocity);
        g.set(0, 0, 0)
    };
    this.checkBounds = function () {
        if (this.position.x > c)this.position.x = -c;
        if (this.position.x < -c)this.position.x = c;
        if (this.position.y > f)this.position.y = -f;
        if (this.position.y < -f)this.position.y = f;
        if (this.position.z > h)this.position.z = -h;
        if (this.position.z < -h)this.position.z = h
    };
    this.avoid = function (p) {
        var o = new THREE.Vector3;
        o.copy(this.position);
        o.subSelf(p);
        o.multiplyScalar(1 / this.position.distanceToSquared(p));
        return o
    };
    this.repulse = function (p) {
        var o = this.position.distanceTo(p);
        if (o < 150) {
            var t = new THREE.Vector3;
            t.sub(this.position, p);
            t.multiplyScalar(0.5 / o);
            g.addSelf(t)
        }
    };
    this.reach = function (p, o) {
        var t = new THREE.Vector3;
        t.sub(p, this.position);
        t.multiplyScalar(o);
        return t
    };
    this.alignment = function (p) {
        for (var o, t = new THREE.Vector3, u = 0, w = 0, x = p.length; w < x; w++)if (!(Math.random() > 0.6)) {
            o = p[w];
            distance = o.position.distanceTo(this.position);
            if (distance > 0 && distance <= 3E3) {
                t.addSelf(o.velocity);
                u++
            }
        }
        if (u > 0) {
            t.divideScalar(u);
            p = t.length();
            p > 0.03 && t.divideScalar(p / 0.03)
        }
        return t
    };
    this.cohesion = function (p) {
        for (var o, t, u = new THREE.Vector3, w = new THREE.Vector3, x = 0, y = 0, z = p.length; y < z; y++)if (!(Math.random() > 0.6)) {
            o = p[y];
            t = o.position.distanceTo(this.position);
            if (t > 0 && t <= 3E3) {
                u.addSelf(o.position);
                x++
            }
        }
        x > 0 && u.divideScalar(x);
        w.sub(u, this.position);
        p = w.length();
        p > 0.03 && w.divideScalar(p / 0.03);
        return w
    };
    this.separation = function (p) {
        for (var o, t, u = new THREE.Vector3, w = new THREE.Vector3, x = 0, y = p.length; x < y; x++)if (!(Math.random() > 0.6)) {
            o = p[x];
            t = o.position.distanceTo(this.position);
            if (t > 0 && t <= 3E3) {
                w.sub(this.position, o.position);
                w.normalize();
                w.divideScalar(t);
                u.addSelf(w)
            }
        }
        return u
    }
}, UgcIntro = function (b) {
    var g = document.createElement("div");
    g.style.position = "absolute";
    g.style.width = window.innerWidth + "px";
    g.style.height = window.innerHeight + "px";
    g.style.background = "rgba(0,0,0,0.75)";
    var c = document.createElement("div");
    c.style.position = "absolute";
    c.style.left = window.innerWidth / 2 - 384 + "px";
    c.style.top = window.innerHeight / 2 - 97 + "px";
    c.style.width = "272px";
    c.style.height = "137px";
    c.style.background = "url(/files/ugcIntro/instructions.png) 0 0 no-repeat";
    g.appendChild(c);
    var f = document.createElement("div");
    f.style.position = "absolute";
    f.style.left = window.innerWidth / 2 + 38 + "px";
    f.style.top = window.innerHeight / 2 - 197 + "px";
    f.style.width = "234px";
    f.style.height = "71px";
    f.style.overflow = "hidden";
    f.style.cursor = "pointer";
    var h = document.createElement("img");
    h.setAttribute("src", "/files/ugcIntro/sky.png");
    h.setAttribute("alt", "SKY");
    h.style.display = "block";
    f.appendChild(h);
    var m = document.createElement("div");
    m.style.position = "absolute";
    m.style.left = window.innerWidth / 2 + 54 + "px";
    m.style.top = window.innerHeight / 2 + 62 + "px";
    m.style.width = "197px";
    m.style.height = "71px";
    m.style.overflow = "hidden";
    m.style.cursor = "pointer";
    var n = document.createElement("img");
    n.setAttribute("src", "/files/ugcIntro/ground.png");
    n.setAttribute("alt", "GROUND");
    n.style.display = "block";
    m.appendChild(n);
    g.appendChild(f);
    g.appendChild(m);
    f.addEventListener("mouseover", function () {
        h.style.marginTop = "-71px"
    }, !1);
    f.addEventListener("mouseout", function () {
        h.style.marginTop = "0px"
    }, !1);
    f.addEventListener("click", function () {
        b.ugcSignals.showobjectcreator.dispatch(1)
    }, !1);
    m.addEventListener("mouseover", function () {
        n.style.marginTop = "-71px"
    }, !1);
    m.addEventListener("mouseout", function () {
        n.style.marginTop = "0px"
    }, !1);
    m.addEventListener("click", function () {
        b.ugcSignals.showobjectcreator.dispatch(0)
    }, !1);
    this.show = function () {
    };
    this.resize = function (p, o) {
        g.style.width = p + "px";
        g.style.height = o + "px";
        c.style.left = p / 2 - 384 + "px";
        c.style.top = o / 2 - 97 + "px";
        f.style.left = p / 2 + 38 + "px";
        f.style.top = o / 2 - 197 + "px";
        m.style.left = p / 2 + 54 + "px";
        m.style.top = o / 2 + 62 + "px"
    };
    this.hide = function () {
    };
    this.getDomElement = function () {
        return g
    };
    this.update = function () {
    }
};
function ColorPicker(b) {
    function g() {
        B.clearRect(0, 0, E, C);
        B.drawImage(X == 0 ? V : $, u, u);
        B.fillStyle = "rgba(0,0,0," + (1 - P / 100) + ")";
        B.save();
        B.translate(E / 2, C / 2);
        B.rotate(Math.PI / 2);
        c(177, 0, 0);
        B.fill();
        B.restore();
        var S = A.createLinearGradient(u, 0, E - u, 0), v = new DAT.Color(I);
        v.v = 100;
        S.addColorStop(0, v.toString());
        S.addColorStop(1, "#000");
        A.strokeStyle = "#fff";
        A.lineWidth = 3;
        A.clearRect(0, 0, E, C);
        A.fillStyle = S;
        A.fillRect(u, u, E - u * 2, w);
        c(w / 2 + 5.5, (1 - Math.round(I.v) / 100) * (E - u * 2) + u, u + w / 2, A);
        A.fill();
        A.stroke()
    }

    function c(S, v, O, J) {
        J = J || B;
        J.beginPath();
        J.moveTo(Math.cos(0) * S + v, Math.sin(0) * S + O);
        for (var T = 0, K = 0; T <= 6; T++, K = T / 6 * Math.PI * 2)J.lineTo(Math.cos(K) * S + v, Math.sin(K) * S + O)
    }

    function f(S, v) {
        S = S || H;
        v = v || G;
        H = S;
        G = v;
        B.fillStyle = I.toString();
        B.strokeStyle = "#fff";
        B.lineWidth = 3;
        B.save();
        B.translate(S, v);
        B.rotate(Math.PI / 2);
        c(20, 0, 0);
        B.restore();
        B.fill();
        B.stroke()
    }

    function h(S) {
        S.stopImmediatePropagation();
        S.stopPropagation();
        document.removeEventListener("mousemove", p, !1);
        document.removeEventListener("mousemove", m, !1);
        document.removeEventListener("mouseup", h, !1);
        t.onColorChange(I.hex)
    }

    function m(S) {
        S.stopImmediatePropagation();
        S.stopPropagation();
        S = S.pageX - n(y).left;
        if (S >= u && S <= E - u) {
            P = 100 - (S - u) / (E - u * 2) * 100;
            I.v = P;
            g();
            f()
        }
    }

    function n(S) {
        var v = 0, O = 0;
        if (S.offsetParent) {
            do {
                v += S.offsetLeft;
                O += S.offsetTop
            } while (S = S.offsetParent)
        }
        return{left: v, top: O}
    }

    function p(S) {
        S.stopImmediatePropagation();
        S.stopPropagation();
        var v = n(z), O = S.pageX - v.left;
        S = S.pageY - v.top;
        if (o(O, S)) {
            g();
            f(O, S)
        }
    }

    function o(S, v) {
        S = S || H;
        v = v || G;
        var O = D.getImageData(S, v, 1, 1).data;
        if (O[3] < 255)return!1;
        I.r = O[0];
        I.g = O[1];
        I.b = O[2];
        I.v = P;
        return!0
    }

    var t = this, u = 20, w = 20, x = document.createElement("canvas"), y = document.createElement("canvas");
    y.style.position = "relative";
    var z = document.createElement("canvas");
    z.style.position = "relative";
    z.style.top = 0;
    this.domElement = document.createElement("div");
    this.domElement.setAttribute("id", "ugcui-color-picker");
    var D, B, A, E, C, H, G, I = new DAT.Color(255, 255, 255), V = document.createElement("img"), $ = document.createElement("img");
    V.src = "/files/wheel.png";
    $.src = "/files/wheel-sky.png";
    var X = 0, P = 100;
    this.onColorChange = function () {
    };
    this.setType = function (S) {
        X = S;
        if (S == 1) {
            y.style.display = "none";
            D.drawImage($, u, u)
        } else {
            y.style.display = "block";
            D.drawImage(V, u, u)
        }
        o();
        t.onColorChange(I.hex);
        g();
        f()
    };
    V.onload = function () {
        E = y.width = x.width = z.width = V.width + u * 2;
        C = x.height = z.height = V.height + u * 2;
        y.height = w + u * 2;
        A = y.getContext("2d");
        t.domElement.appendChild(z);
        t.domElement.appendChild(y);
        b.appendChild(t.domElement);
        D = x.getContext("2d");
        D.drawImage(V, u, u);
        B = z.getContext("2d");
        A.shadowBlur = B.shadowBlur = 4;
        A.shadowColor = B.shadowColor = "rgba(0,0,0,0.3)";
        H = E / 2;
        G = C / 2;
        g();
        f()
    };
    z.addEventListener("mousedown", function (S) {
        S.stopImmediatePropagation();
        S.stopPropagation();
        p(S);
        document.addEventListener("mousemove", p, !1);
        document.addEventListener("mouseup", h, !1)
    }, !1);
    y.addEventListener("mousedown", function (S) {
        S.stopImmediatePropagation();
        S.stopPropagation();
        m(S);
        document.addEventListener("mousemove", m, !1);
        document.addEventListener("mouseup", h, !1)
    }, !1)
}
var UgcUI = function (b) {
    function g(J, T) {
        var K = document.createElement(J);
        K.setAttribute("class", T);
        return K
    }

    function c(J, T) {
        var K = document.createElement(J);
        K.setAttribute("id", T);
        return K
    }

    function f(J, T) {
        var K;
        K = typeof J == "string" ? document.getElementById(J) : J;
        K.addEventListener("mouseup", function () {
            T.call(K)
        }, !1)
    }

    function h() {
        E.style.zIndex = "-20";
        C.style.top = "200%";
        C.style.opacity = 0;
        G.value = u;
        I.value = "YOUR EMAIL ADDRESS";
        n(document.getElementById("agree-terms"), "error");
        document.getElementById("agree").checked = !1;
        X = !1
    }

    function m(J, T) {
        J.getAttribute("class").indexOf(T) == -1 && J.setAttribute("class", J.getAttribute("class") + " " + T)
    }

    function n(J, T) {
        if (J.getAttribute("class").indexOf(T) != -1) {
            var K;
            J.setAttribute("class", J.getAttribute("class").replace(RegExp(" " + T, "g"), ""))
        }
    }

    function p() {
        var J = g("div", "animal"), T = g("img", "animal-thumb");
        T.src = "/files/soupthumbs/test.png";
        T.style.position = "absolute";
        var K = g("div", "animal-controls"), R = g("div", "animal-count");
        R.style.font = "12px/22px FuturaBT-Bold";
        R.innerHTML = "0";
        var aa = g("div", "animal-add");
        aa.style.font = "12px/22px FuturaBT-Bold";
        aa.innerHTML = "+";
        var W = g("div", "animal-remove");
        W.style.font = "12px/22px FuturaBT-Bold";
        W.innerHTML = "-";
        J.appendChild(T);
        K.appendChild(W);
        K.appendChild(R);
        K.appendChild(aa);
        J.appendChild(K);
        return J
    }

    function o(J) {
        if (!(J == undefined || J.style == undefined)) {
            J.onselectstart = function () {
                return!1
            };
            J.style.MozUserSelect = "none";
            J.style.KhtmlUserSelect = "none";
            J.unselectable = "on";
            J = J.childNodes;
            for (var T = 0; T < J.length; T++)o(J[T])
        }
    }

    var t = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, u = "GIVE YOUR DREAM A TITLE", w = 0, x = 0, y = document.createElement("div"), z = document.createElement("style");
    z.setAttribute("type", "text/css");
    z.innerHTML = '.ugcui { position: fixed;  } \n#ugcui-top-right { position: fixed; top: 40px; right: 40px; } \n#ugcui-bottom-right { position: fixed; bottom: 40px; right: 40px; z-index: 5 } \n#ugcui-top-left { position: fixed; top: 10px; left: 35px; } \n#ugcui-bottom-left { position: fixed; bottom: 120px; left: 35px; } \n.ugcui g.button {\n  cursor: pointer;\n}\n.ugcui g.button polygon.hex {\n  fill: rgba(255, 255, 255, 0.7);\n}\n.ugcui g.button:not(.disabled):hover polygon.hex {\n  fill: #fff;\n}\n.ugcui g.button.active polygon.hex {\n  fill: #F15C22;\n}\n.ugcui g.button.active:hover polygon.hex {\n  fill: #F77952;\n}\n.ugcui g.folder g.options, .ugcui g.folder polygon.hitbox {\n  display: none;\n}\n.ugcui g.disabled { opacity: 0.1; cursor: auto; }\n.ugcui g.folder:hover g.options {\n  display: block;\n}\n.ugcui g.folder:hover #ugcui-zoom-folder polygon.hex { fill: #fff; }\n.ugcui g.folder polygon.hitbox {\n  display: block; fill-opacity: 0;\n}\n#ugcui-size g.button.active polygon.hex { fill: rgba(255, 255, 255, 0.7); }\n#ugcui-size:hover g.button.active polygon.hex { fill: #F15C22; }\n#ugcui-size:hover g.button.active:hover polygon.hex { fill: #F77952; }\n#agree-terms.error { background-color: rgba(255, 0, 0, 0.3); }\n#voxel-submit-text { float: left; width: 300px; margin-right: 10px; }\n#voxel-submit-inputs { margin-right: 10px; margin-top: -4px; float: left; }\n#voxel-submit-submit { cursor: pointer; letter-spacing: 0.025em; font: 17px/65px FuturaBT-Bold, sans-serif; float: left; border: 1px solid #d6d1c2; width: 200px; text-align: center; margin-top: -2px;  }\n#voxel-submit-submit:hover { border-color: #404040; background-color: #404040; color: #f4f1e8; }\n#voxel-submit input[type="text"] { margin-bottom: 3px; color: #404040; font: 11px/22px FuturaBT-Bold, sans-serif; width: 200px; padding: 2px 4px  }\n#voxel-submit a { color: #000 } \n#voxel-submit-image { margin-bottom: 20px; width: 735px; height: 465px; background-color: #000; }\n#voxel-submit-shade { z-index: -12; opacity: 0.4; -webkit-transition: opacity 0.2s linear; background-color: #f4f1e8; position: fixed; top: 0; left: 0; width: 100%; height: 100% }\n#voxel-submit { font: 12px/18px FuturaBT-Medium; color: #404040; z-index: 21; opacity: 0; -webkit-transition: opacity 0.2s linear; width: 735px; height: 556px; padding: 13px; margin-left: -380px; margin-top: -291px; background-color: #f4f1e8; box-shadow: 0px 0px 10px rgba(0,0,0,0.3) }\n#voxel-submit small { line-height: 15px; display: block; margin-top: 7px }\n.animal-container { opacity: 1; -webkit-transition: opacity 0.3s linear; }\n.animal { text-align: center; -webkit-transition: all 0.1s linear; float: left; height: 92px; background: url(/files/soupthumbs/shadow.png); border: 1px solid rgba(0,0,0,0); width: 120px; margin-right: 10px; }\n.animal:hover { background-color: rgba(255, 255, 255, 0.4); border: 1px solid #fff; }\n.animal-controls { height: 21px; overflow:hidden; line-height: 0px; border-right: 1px solid #fff; opacity: 0; display: inline-block; position: relative; margin-top: 71px; }\n.animal:hover .animal-controls { opacity: 1; }\n.animal-controls div { display: none; text-align: center; border: 1px solid #fff; border-right: 0; border-bottom: 0; display: inline-block; width: 20px;}\n.animal-controls div.animal-add:hover, .animal-controls div.animal-remove:hover { cursor: pointer; background-color: #f65824; }\n.animal-controls div.animal-count { background-color: #fff; color: #777; width: 25px; }';
    document.getElementsByTagName("head")[0].appendChild(z);
    y.innerHTML += '<svg class="ugcui" id="ugcui-top-left" version="1.1"\n     xmlns="http://www.w3.org/2000/svg"\n     xmlns:xlink="http://www.w3.org/1999/xlink"\n     xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"\n     x="0px" y="0px" width="800px" height="600px" viewBox="0 -1.338 800 600"\n     enable-background="new 0 -1.338 800 600"\n     xml:space="preserve" >\n    <g class="button" title="Symmetry Mode [s]" id="ugcui-reflect">\n      <polygon class="hex"\n               points="13.126,93.332 0,70.598 13.126,47.862 39.377,47.862 52.503,70.598 39.377,93.332 "/>\n      <path fill="#404040" d="M26.195,77.438c-0.428,0-0.771,0.345-0.771,0.771v1.158c0,0.428,0.343,0.772,0.771,0.772\n  s0.771-0.345,0.771-0.772v-1.158C26.966,77.783,26.623,77.438,26.195,77.438 M26.195,73.965c-0.428,0-0.771,0.344-0.771,0.771v1.158\n  c0,0.425,0.343,0.771,0.771,0.771s0.771-0.346,0.771-0.771v-1.158C26.966,74.309,26.623,73.965,26.195,73.965 M20.23,64.94\n  l-4.149-4.594c-0.238-0.262-0.61-0.351-0.939-0.224c-0.327,0.125-0.545,0.441-0.545,0.794v9.187v9.188\n  c0,0.351,0.218,0.667,0.545,0.793c0.1,0.039,0.203,0.057,0.306,0.057c0.235,0,0.467-0.098,0.633-0.28l4.149-4.594l4.149-4.593\n  c0.293-0.324,0.293-0.817,0-1.142L20.23,64.94z M18.968,74.126l-2.667,2.952v-6.976v-6.976l2.667,2.955l3.632,4.021L18.968,74.126z\n  M28.011,69.532c-0.292,0.324-0.292,0.817,0,1.142l4.149,4.593l4.149,4.594c0.165,0.183,0.397,0.28,0.633,0.28\n  c0.103,0,0.205-0.018,0.306-0.057c0.327-0.126,0.544-0.442,0.544-0.793v-9.188v-9.187c0-0.353-0.216-0.669-0.544-0.794\n  c-0.33-0.127-0.702-0.038-0.938,0.224L32.16,64.94L28.011,69.532z M29.79,70.103l3.634-4.021l2.667-2.955v6.976v6.976l-2.667-2.952\n  L29.79,70.103z M26.195,70.489c-0.428,0-0.771,0.345-0.771,0.772v1.159c0,0.427,0.343,0.772,0.771,0.772s0.771-0.345,0.771-0.772\n  v-1.159C26.966,70.834,26.623,70.489,26.195,70.489 M26.195,60.066c-0.428,0-0.771,0.346-0.771,0.772v1.158\n  c0,0.427,0.343,0.773,0.771,0.773s0.771-0.347,0.771-0.773v-1.158C26.966,60.412,26.623,60.066,26.195,60.066 M26.195,63.541\n  c-0.428,0-0.771,0.345-0.771,0.772v1.158c0,0.428,0.343,0.771,0.771,0.771s0.771-0.343,0.771-0.771v-1.158\n  C26.966,63.886,26.623,63.541,26.195,63.541 M26.195,67.014c-0.428,0-0.771,0.346-0.771,0.772v1.158\n  c0,0.426,0.343,0.772,0.771,0.772s0.771-0.346,0.771-0.772v-1.158C26.966,67.36,26.623,67.014,26.195,67.014"/>\n    </g>\n    <g class="button active" title="Draw [d]" id="ugcui-create">\n      <polygon class="hex" points="54.576,69.401 41.45,46.666 54.576,23.932 80.828,23.932 93.954,46.666\n  80.827,69.401 "/>\n      <path fill="#404040" d="M67.92,32.249l-12.121,7.29l-0.154-0.098v13.47l12.256,7.661l12.258-7.661V40.265L67.92,32.249z\n  M67.883,34.149l9.991,6.543l-9.978,6.405l-10.564-6.602L67.883,34.149z M57.255,42.346l9.842,6.151v9.673l-9.842-6.151V42.346z\n  M78.548,52.019l-9.842,6.15v-9.679l9.842-6.318V52.019z"/>\n    </g>\n    <g class="button" title="Erase [e]" id="ugcui-erase">\n      <polygon class="hex" points="96.026,93.332 82.9,70.598 96.026,47.862 122.277,47.862 135.404,70.597\n  122.277,93.332 "/>\n      <path fill="#404040" d="M111.728,61.285l-13.493,7.131v5.163l9.462,5.387l13.086-7.798v-4.968L111.728,61.285z M113.478,69.723\n  l-5.788,3.394l-7.658-4.416l6.083-3.215L113.478,69.723z M108.238,74.062l5.928-3.477v3.252l-5.928,3.534V74.062z M99.328,69.556\n  l7.817,4.509v3.328l-7.817-4.45V69.556z"/>\n    </g>\n    <g class="button" title="Fill Color [f]" id="ugcui-color">\n      <polygon class="hex" points="96.026,141.194 82.9,118.46 96.026,95.725 122.277,95.725 135.404,118.459\n  122.277,141.194 "/>\n      <path fill="#404040" d="M121.346,114.964c-2.85-3.684-8.097-1.808-8.097-1.808s3.946,3.913,5.455,5.42\n  c1.633,1.633,2.081,10.199,3.058,8.201C123.29,123.65,123.54,117.801,121.346,114.964 M110.458,110.993v2.259l6.309,6.309\n  l-10.072,10.071l-8.699-8.697l10.074-10.073l0.27,0.271v-2.149c-0.084-0.031-0.176-0.049-0.27-0.049\n  c-0.213,0-0.414,0.082-0.565,0.233l-11.202,11.204c-0.312,0.311-0.312,0.817,0,1.129l9.827,9.828\n  c0.152,0.151,0.352,0.235,0.565,0.235c0.211,0,0.413-0.084,0.565-0.235l11.202-11.203c0.151-0.152,0.235-0.353,0.235-0.565\n  c0-0.214-0.084-0.413-0.236-0.563L110.458,110.993z M101.645,108.202c0.001-0.733,0.593-1.325,1.324-1.326h4.543\n  c0.729,0.001,1.322,0.593,1.323,1.324v8.447c-0.212,0.081-0.41,0.205-0.579,0.374c-0.321,0.32-0.485,0.748-0.483,1.17\n  c-0.001,0.421,0.163,0.85,0.484,1.172c0.322,0.323,0.749,0.487,1.173,0.485h0.004c0.419,0,0.844-0.162,1.167-0.484l-0.396-0.397\n  l0.398,0.396c0.321-0.322,0.484-0.75,0.484-1.172s-0.163-0.85-0.485-1.171c-0.186-0.186-0.407-0.313-0.642-0.391v-8.429\n  c0-1.353-1.095-2.449-2.448-2.449h-4.543c-1.353,0-2.45,1.096-2.45,2.451v7.208l1.126-1.126V108.202z M109.053,117.816\n  c0.107-0.107,0.239-0.156,0.378-0.158c0.137,0.001,0.271,0.051,0.374,0.156c0.107,0.106,0.155,0.239,0.155,0.376\n  c0,0.136-0.049,0.271-0.155,0.378c-0.104,0.104-0.239,0.153-0.374,0.153c-0.139,0-0.272-0.051-0.377-0.154\n  c-0.104-0.105-0.155-0.24-0.155-0.377C108.9,118.053,108.95,117.92,109.053,117.816"/>\n    </g>\n        <g class="button" title="Large" transform="translate(41.5 ,-23)" id="ugcui-size-med">\n          <polygon class="hex" points="13.126,188.696 0,165.962 13.126,143.227 39.377,143.227 52.503,165.962\n    39.377,188.696 "/>\n          <path fill="#404040" d="M35.384,164.724v-9.757l-8.837-4.797l-9.248,4.927v9.452l-9.613,5.704l18.509,11.5l18.509-11.5\n    L35.384,164.724z M20.675,170.283l2.864-1.765l2.803,1.666l2.609-1.564l2.74,1.678l-5.496,3.367L20.675,170.283z M25.674,173.983\n    l-5.517,3.378l-5.459-3.391l5.458-3.367L25.674,173.983z M34.889,165.062l2.718,1.612l-5.395,3.305l-2.734-1.674L34.889,165.062z\n    M23.011,168.204l-2.856,1.761l-5.373-3.291l2.832-1.68L23.011,168.204z M32.212,170.616l5.478,3.354l-5.458,3.391l-5.517-3.378\n    L32.212,170.616z M32.732,170.297l5.404-3.31l5.52,3.276l-5.45,3.386L32.732,170.297z M14.253,166.988l5.383,3.297l-5.454,3.364\n    l-5.449-3.385L14.253,166.988z M20.675,177.683l5.52-3.381l5.519,3.381l-5.519,3.429L20.675,177.683z"/>\n        </g>\n      </g>\n      <g class="button active" title="Small" id="ugcui-size-small">\n        <polygon class="hex" points="13.126,141.194 0,118.46 13.126,95.725 39.377,95.725 52.503,118.46 39.377,141.194\n    "/>\n        <path fill="#404040" d="M32.34,113.829v-6.316l-6.006-3.258l-6.285,3.118v6.456l-12.364,7.334l18.509,11.5l18.509-11.5\n    L32.34,113.829z M20.676,121.195l5.477-3.378l5.539,3.391l-5.497,3.367L20.676,121.195z M25.674,124.894l-5.517,3.378l-5.457-3.391\n    l5.457-3.367L25.674,124.894z M29.156,115.964l2.936-1.65l5.515,3.272l-5.395,3.304l-5.541-3.393L29.156,115.964z M20.366,114.272\n    l5.266,3.226l-5.476,3.378l-5.374-3.29L20.366,114.272z M32.212,121.527l5.477,3.354l-5.457,3.39l-5.517-3.378L32.212,121.527z\n    M32.733,121.208l5.403-3.309l5.52,3.274l-5.45,3.386L32.733,121.208z M14.253,117.899l5.384,3.297l-5.454,3.364l-5.45-3.386\n    L14.253,117.899z M20.675,128.594l5.521-3.381l5.52,3.38l-5.52,3.43L20.675,128.594z"/>\n      </g>\n    </g>\n</svg>';
    y.innerHTML += '<svg class="ugcui" id="ugcui-top-right" version="1.1"\n\t xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"\n\t x="0px" y="0px" width="70px" height="70px" viewBox="-2 -2 60 60"\n\t xml:space="preserve">\n<g transform="translate(-1, 0)" class="button" id="ugcui-quit">\n<polygon class="hex" points="13.126,45.469 0,22.735 13.126,0 39.377,0 52.504,22.735 39.377,45.469 "/>\n<path fill="#222222" d="M22.568,23.39c0-1.193-0.437-2.16-1.309-2.901c-0.726-0.617-1.547-0.925-2.462-0.925\n\tc-1.01,0-1.885,0.352-2.626,1.056c-0.764,0.726-1.145,1.632-1.145,2.719c0,1.109,0.403,2.02,1.21,2.733\n\tc0.741,0.648,1.59,0.972,2.546,0.972c0.738,0,1.408-0.193,2.01-0.58l0.564,0.58h1.369l-1.191-1.164\n\tC22.224,25.155,22.568,24.325,22.568,23.39z M20.778,25.096l-1.046-1.041h-1.407l1.696,1.644c-0.38,0.215-0.805,0.322-1.275,0.322\n\tc-0.691,0-1.307-0.255-1.846-0.766c-0.517-0.495-0.775-1.131-0.775-1.909c0-0.796,0.251-1.455,0.752-1.975\n\tc0.499-0.523,1.134-0.784,1.906-0.784c0.764,0,1.402,0.261,1.916,0.784s0.771,1.172,0.771,1.947\n\tC21.47,24.024,21.239,24.617,20.778,25.096z"/>\n<path fill="#222222" d="M28.188,24.041c0,0.629-0.102,1.082-0.304,1.359c-0.303,0.414-0.729,0.621-1.28,0.621\n\tc-0.548,0-0.974-0.207-1.275-0.621c-0.203-0.287-0.304-0.739-0.304-1.359v-4.342h-1.089v4.644c0,0.76,0.236,1.386,0.71,1.878\n\tc0.53,0.548,1.183,0.822,1.958,0.822s1.43-0.274,1.962-0.822c0.474-0.492,0.711-1.118,0.711-1.878v-4.644h-1.089V24.041z"/>\n<rect x="31.006" y="19.699" fill="#222222" width="1.089" height="7.214"/>\n<polygon fill="#222222" points="33.071,19.699 33.071,20.722 34.729,20.722 34.729,26.913 35.818,26.913 35.818,20.722 \n\t37.473,20.722 37.473,19.699 "/>\n</g>\n</svg>';
    y.innerHTML += '<svg id="ugcui-bottom-right" class="ugcui" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t x="0px" y="0px" width="70px" height="70px" viewBox="-2 -2 60 60" xml:space="preserve">\n<g class="button" transform="translate(-1, 0)" id="ugcui-submit">\n<polygon class="hex" points="13.126,45.469 0,22.735 13.126,0 39.377,0 \n\t52.504,22.734 39.377,45.469 "/><g transform="translate(0,-1)">\n<path fill="#222222" d="M13.54,21.303l-0.883,0.523c-0.166-0.287-0.323-0.474-0.473-0.561c-0.155-0.1-0.356-0.15-0.603-0.15\n\tc-0.302,0-0.553,0.086-0.752,0.258c-0.199,0.168-0.299,0.381-0.299,0.636c0,0.353,0.262,0.636,0.784,0.851l0.72,0.295\n\tc0.586,0.237,1.014,0.526,1.285,0.867c0.271,0.342,0.406,0.76,0.406,1.256c0,0.664-0.221,1.213-0.663,1.646\n\tc-0.445,0.437-0.998,0.655-1.659,0.655c-0.626,0-1.143-0.187-1.551-0.559C9.451,26.647,9.2,26.125,9.1,25.452l1.103-0.242\n\tc0.05,0.424,0.137,0.717,0.262,0.878c0.224,0.312,0.551,0.468,0.98,0.468c0.34,0,0.622-0.113,0.846-0.342\n\tc0.225-0.227,0.337-0.515,0.337-0.863c0-0.14-0.02-0.268-0.059-0.385c-0.039-0.117-0.1-0.225-0.183-0.322\n\tc-0.082-0.098-0.188-0.189-0.319-0.275c-0.131-0.086-0.287-0.168-0.468-0.245l-0.696-0.29c-0.987-0.416-1.48-1.027-1.48-1.83\n\tc0-0.541,0.207-0.994,0.621-1.358c0.414-0.367,0.93-0.551,1.547-0.551C12.423,20.093,13.072,20.496,13.54,21.303z"/>\n<path fill="#222222" d="M16.128,20.232v4.342c0,0.62,0.101,1.072,0.304,1.359c0.302,0.414,0.728,0.621,1.275,0.621\n\tc0.552,0,0.978-0.207,1.28-0.621c0.202-0.277,0.304-0.73,0.304-1.359v-4.342h1.089v4.645c0,0.76-0.237,1.387-0.711,1.879\n\tc-0.532,0.548-1.187,0.822-1.962,0.822s-1.428-0.274-1.958-0.822c-0.474-0.492-0.71-1.119-0.71-1.879v-4.645H16.128z"/>\n<path fill="#222222" d="M22.108,27.447v-7.215h1.084c0.482,0,0.867,0.037,1.154,0.113c0.289,0.074,0.534,0.2,0.733,0.378\n\tc0.202,0.184,0.362,0.413,0.481,0.687c0.121,0.277,0.182,0.558,0.182,0.842c0,0.517-0.197,0.954-0.593,1.312\n\tc0.383,0.131,0.685,0.359,0.906,0.687c0.225,0.324,0.336,0.7,0.336,1.131c0,0.563-0.199,1.04-0.598,1.43\n\tc-0.24,0.239-0.51,0.406-0.809,0.5c-0.327,0.091-0.736,0.136-1.229,0.136h-1.647V27.447z M23.197,23.33h0.341\n\tc0.405,0,0.702-0.089,0.891-0.268c0.188-0.18,0.282-0.443,0.282-0.793c0-0.339-0.097-0.597-0.29-0.773\n\tc-0.192-0.176-0.474-0.264-0.841-0.264h-0.383V23.33z M23.197,26.424h0.673c0.492,0,0.854-0.097,1.084-0.29\n\tc0.243-0.208,0.364-0.474,0.364-0.794c0-0.312-0.117-0.573-0.351-0.785c-0.228-0.209-0.634-0.312-1.22-0.312h-0.551L23.197,26.424\n\tL23.197,26.424z"/>\n<path fill="#222222" d="M27.515,27.447l1.519-7.756l2.476,5.605l2.565-5.605l1.364,7.756h-1.116l-0.696-4.355l-2.136,4.687\n\tl-2.074-4.69l-0.775,4.359h-1.127V27.447z"/>\n<path fill="#222222" d="M38.055,20.232v7.215h-1.089v-7.215H38.055z"/>\n<path fill="#222222" d="M41.778,21.256v6.191h-1.089v-6.191h-1.658v-1.023h4.401v1.023H41.778z"/>\n</g></g>\n</svg>';
    y.innerHTML += '<svg class="ugcui" id="ugcui-bottom-left" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="800px"\n\t height="200px" viewBox="-2 -100 800 200" enable-background="new 0 0 800 200" xml:space="preserve">\n<g class="button" id="ugcui-rotate" title="Rotate [R]">\n\t<polygon class="hex" points="13.127,21.759 0,-0.975 13.127,-23.71 39.377,-23.71 52.504,-0.975 39.377,21.759"/>\n\t<path fill="#404040" d="M38.91-5.208c-0.406-0.224-0.83-0.434-1.266-0.633v-4.373l-10.986-5.962L15.162-10.47v4.656\n\t\tc-0.391,0.179-0.771,0.365-1.135,0.563C10.816-3.495,8.951-1.157,8.67,1.388H6.924L9.41,4.831l2.486-3.443h-1.66\n\t\tc0.295-1.96,1.875-3.812,4.539-5.27c0.123-0.067,0.26-0.125,0.387-0.19v5.677l11.496,6.545l10.986-6.18v-6.064\n\t\tc0.17,0.086,0.348,0.166,0.512,0.257c2.959,1.63,4.586,3.742,4.582,5.946c-0.004,2.202-1.639,4.308-4.604,5.928\n\t\tc-3.1,1.695-7.23,2.625-11.639,2.625h-0.055v0.001c-0.188,0-0.371-0.002-0.555-0.006l-0.031,1.562\n\t\tc0.195,0.003,0.387,0.005,0.582,0.005l0,0h0.059c4.664,0,9.062-1,12.387-2.816c3.486-1.906,5.41-4.498,5.416-7.297\n\t\tC44.303-0.69,42.391-3.287,38.91-5.208z"/>\n\t<path fill="#404040" d="M13.49,9.064c0.598,0.359,1.246,0.696,1.932,0.999l0.635-1.426c-0.627-0.281-1.219-0.586-1.766-0.912\n\t\tL13.49,9.064z"/>\n\t<path fill="#404040" d="M16.422,10.478c0.65,0.25,1.338,0.479,2.043,0.679l0.424-1.503c-0.658-0.188-1.299-0.398-1.906-0.635\n\t\tL16.422,10.478z"/>\n\t<path fill="#404040" d="M22.662,11.991c0.699,0.087,1.414,0.15,2.129,0.188l0.082-1.56c-0.678-0.037-1.357-0.096-2.021-0.178\n\t\tL22.662,11.991z"/>\n\t<path fill="#404040" d="M19.504,11.427c0.682,0.162,1.389,0.305,2.1,0.417L21.85,10.3c-0.674-0.105-1.34-0.24-1.984-0.392\n\t\tL19.504,11.427z"/>\n</g>\n<g class="folder"  id="ugcui-zoom">\t\n\t<g class="options">\n\t<polygon class="hitbox" points="97.417,22.957 82.56,-2.779 52.844,-2.779 39.029,21.152 11.394,21.152 \n\t\t-3.464,46.888 11.394,72.622 39.027,72.622 52.844,96.553 82.559,96.553 97.417,70.818 83.601,46.887 \t"/>\n\t\t<g class="button" title="zoom in" id="ugcui-zoom-in">\n\t\t<polygon class="hex" points="54.576,45.69 41.451,22.957 54.576,0.221 80.828,0.221 93.953,22.957 80.828,45.69"/>\n\t\t<polygon fill="#404040" points="73.414,21.578 68.235,21.578 68.235,16.399 66.093,16.399 66.093,21.578 60.914,21.578 \n\t\t\t60.914,23.721 66.093,23.721 66.093,28.899 68.235,28.899 68.235,23.721 73.414,23.721 \t"/>\n\t\t</g>\n\t\t<g class="button" title="zoom out" id="ugcui-zoom-out">\n\t\t<polygon class="hex" points="54.576,93.553 41.45,70.818 54.576,48.084 80.828,48.084 93.953,70.818 80.827,93.553 "/>\n\t\t<rect x="60.914" y="68.899" fill="#404040" width="12.5" height="2.143"/>\n\t\t</g>\n\t</g><g class="button" title="zoom" id="ugcui-zoom-folder">\n\t<polygon class="hex" points="13.126,69.622 0,46.888 13.126,24.152 39.377,24.152 52.503,46.888 39.377,69.622"/>\n\t<path fill="#404040" d="M24.141,35.035c-4.986,0-9.029,4.043-9.029,9.029c0,4.988,4.043,9.03,9.029,9.03\n\t\tc4.988,0,9.031-4.042,9.031-9.03C33.172,39.078,29.129,35.035,24.141,35.035 M24.141,50.909c-3.779,0-6.844-3.065-6.844-6.845\n\t\tc0-3.778,3.064-6.843,6.844-6.843c3.781,0,6.844,3.064,6.844,6.843C30.984,47.844,27.922,50.909,24.141,50.909"/>\n\t<path fill="#404040" d="M37.717,55.305c0.264,0.275,0.213,0.758-0.109,1.065l-2.216,2.112c-0.323,0.312-0.804,0.343-1.069,0.063\n\t\tl-4.318-4.521c-0.266-0.276-0.215-0.756,0.111-1.065l2.212-2.114c0.326-0.311,0.808-0.341,1.073-0.062L37.717,55.305z"/>\n\t</g></g>\n</g>\n</svg>';
    var D = document.createElement("div");
    D.style.position = "fixed";
    D.style.font = "12px/0px FuturaBT-Medium";
    D.style.padding = "13px 7px 10px 7px";
    D.style.display = "none";
    D.style.backgroundColor = "#fff";
    D.style.boxShadow = "-1px 1px 0px rgba(0,0,0,0.4)";
    D.style.textTransform = "uppercase";
    D.style.color = "#000";
    D.style.zIndex = "15";
    D.innerHTML = "CREATE";
    y.appendChild(D);
    z = g("div", "animal-container");
    z.setAttribute("id", "animal-container");
    z.style.display = "none";
    z.style.overflow = "hidden";
    z.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
    z.style.width = "100%";
    z.style.height = "114px";
    z.style.position = "fixed";
    z.style.top = "100%";
    z.style.left = 0;
    z.style.marginTop = "-114px";
    var B = g("div", "animal-inner");
    B.style.padding = "10px";
    B.style.width = "1400px";
    B.style.height = "100%";
    B.style.position = "absolute";
    z.appendChild(B);
    for (var A = 0; A < 10; A++)B.appendChild(p());
    y.appendChild(z);
    var E = document.createElement("div");
    E.setAttribute("id", "voxel-submit-shade");
    y.appendChild(E);
    var C = document.createElement("div");
    C.addEventListener("mousemove", function (J) {
        J.stopImmediatePropagation && J.stopImmediatePropagation();
        J.stopPropagation()
    }, !1);
    C.addEventListener("mouseup", function (J) {
        J.stopImmediatePropagation && J.stopImmediatePropagation();
        J.stopPropagation()
    }, !1);
    C.addEventListener("mousedown", function (J) {
        J.stopImmediatePropagation && J.stopImmediatePropagation();
        J.stopPropagation()
    }, !1);
    E.addEventListener("mousemove", function (J) {
        J.stopImmediatePropagation && J.stopImmediatePropagation();
        J.stopPropagation()
    }, !1);
    E.addEventListener("mouseup", function (J) {
        J.stopImmediatePropagation && J.stopImmediatePropagation();
        J.stopPropagation()
    }, !1);
    E.addEventListener("mousedown", function (J) {
        h();
        J.stopImmediatePropagation && J.stopImmediatePropagation();
        J.stopPropagation()
    }, !1);
    B = c("div", "voxel-submit-text");
    B.innerHTML = '<span id="agree-terms" class="foo"><input id="agree" type="checkbox" /> &nbsp;I agree to the <a id="terms-link" href="/terms">terms and conditions</a>.</span><br/>';
    B.innerHTML += "<small>Thank you for contributing a model! We'll email you when <br/>your unique dream is approved for sharing.</small>";
    var H = c("div", "voxel-submit-image");
    z = c("div", "voxel-submit-inputs");
    var G = c("input", "voxel-submit-title");
    G.setAttribute("type", "text");
    G.setAttribute("value", u);
    G.setAttribute("maxlength", 35);
    G.addEventListener("focus", function () {
        this.value = ""
    }, !1);
    var I = c("input", "voxel-submit-email");
    I.setAttribute("type", "text");
    I.setAttribute("value", "YOUR EMAIL ADDRESS");
    I.addEventListener("focus", function () {
        this.value = ""
    }, !1);
    A = c("div", "voxel-submit-submit");
    A.innerHTML = "SUBMIT";
    A.addEventListener("click", function () {
        var J = document.getElementById("voxel-submit-email"), T = document.getElementById("voxel-submit-title").value;
        J = J.value;
        var K;
        if (t.test(J))K = !1; else {
            alert("Please enter a valid email address");
            K = !0
        }
        if (!K && !function (R) {
            if (R == u || R.replace(/^\s\s*/, "").replace(/\s\s*$/, "") == "") {
                alert("Please enter a title.");
                return!0
            }
            if (R.length < 3) {
                alert("Please enter a title 3 characters or longer.");
                return!0
            }
            return!1
        }(T))if (document.getElementById("agree").checked) {
            b.ugcSignals.submit.dispatch(T, J);
            h()
        } else {
            alert("You must agree to the terms and conditions.");
            m(document.getElementById("agree-terms"), "error")
        }
    }, !1);
    var V = !1, $ = !1, X = !1;
    C.appendChild(H);
    C.appendChild(B);
    C.appendChild(z);
    C.appendChild(A);
    C.setAttribute("id", "voxel-submit");
    C.style.position = "fixed";
    C.style.top = "200%";
    C.style.left = "50%";
    y.appendChild(C);
    var P = document.createElement("div"), S = new ColorPicker(P);
    S.onColorChange = function (J) {
        b.ugcSignals.object_changecolor.dispatch(J)
    };
    P.style.position = "fixed";
    P.style.left = "50%";
    P.style.top = "50%";
    P.style.display = "none";
    P.style.marginTop = "-230px";
    P.style.marginLeft = "-175px";
    y.appendChild(P);
    B = document.createElement("span");
    B.innerHTML += "<br/>";
    z.appendChild(I);
    z.appendChild(B);
    z.appendChild(G);
    o(P);
    o(D);
    this.setType = function (J) {
        x = J;
        if (J == 1) {
            P.style.display = "none";
            b.ugcSignals.object_changecolor.dispatch(16777215);
            m(document.getElementById("ugcui-color"), "disabled")
        } else n(document.getElementById("ugcui-color"), "disabled");
        S.setType(J)
    };
    this.updateCapacity = function (J) {
        document.getElementById("capacity").textContent = Math.round(J * 100) + "%"
    };
    this.addListeners = function () {
        Footer.handleLinkListeners(document.getElementById("terms-link"), "terms");
        y.addEventListener("mousemove", function (R) {
            D.style.top = R.pageY - 40 + "px";
            D.style.left = R.pageX + 20 + "px"
        }, !0);
        b.ugcSignals.submit_dialogue.add(function () {
            X = !0;
            b.ugcSignals.object_requestsnapshot.dispatch()
        });
        b.ugcSignals.object_receivesnapshot.add(function (R) {
            H.style.backgroundImage = "url(" + R + ")";
            E.style.zIndex = "20";
            C.style.top = "50%";
            C.style.opacity = 1
        });
        for (var J = document.getElementsByClassName("button"), T = 0; T < J.length; T++)if (J[T].getAttribute("title") != undefined) {
            J[T].addEventListener("mouseover", function () {
                if (this.getAttribute("class").indexOf("disabled") == -1) {
                    D.style.display = "inline-block";
                    D.innerHTML = this.getAttribute("title")
                }
            }, !1);
            J[T].addEventListener("mouseout", function () {
                D.style.display = "none"
            }, !1)
        }
        window.addEventListener("keydown", function (R) {
            if (!X)switch (R.keyCode) {
                case 90:
                    b.ugcSignals.object_undo.dispatch();
                    break;
                case 68:
                    b.ugcSignals.object_createmode.dispatch();
                    break;
                case 70:
                    V ? b.ugcSignals.object_createmode.dispatch() : b.ugcSignals.object_colormode.dispatch();
                    break;
                case 83:
                    b.ugcSignals.object_symmetrymode.dispatch(!$);
                    break;
                case 69:
                    b.ugcSignals.object_erasemode.dispatch();
                    break;
                case 82:
                    b.ugcSignals.object_rotatemode.dispatch()
            }
        }, !1);
        f("ugcui-color", function () {
            V ? b.ugcSignals.object_createmode.dispatch() : b.ugcSignals.object_colormode.dispatch()
        });
        f("ugcui-size-small", function () {
            b.ugcSignals.object_changesize.dispatch(1)
        });
        f("ugcui-size-med", function () {
            b.ugcSignals.object_changesize.dispatch(3)
        });
        f("ugcui-submit", function () {
            b.ugcSignals.submit_dialogue.dispatch()
        });
        f("ugcui-quit", function () {
            confirm("Are you sure you want to quit?") && b.signals.showrelauncher.dispatch()
        });
        f("ugcui-zoom-in", function () {
            b.ugcSignals.object_zoomin.dispatch()
        });
        f("ugcui-zoom-out", function () {
            b.ugcSignals.object_zoomout.dispatch()
        });
        f("ugcui-create", function () {
            b.ugcSignals.object_createmode.dispatch()
        });
        f("ugcui-erase", function () {
            b.ugcSignals.object_erasemode.dispatch()
        });
        f("ugcui-rotate", function () {
            b.ugcSignals.object_rotatemode.dispatch()
        });
        f("ugcui-reflect", function () {
            b.ugcSignals.object_symmetrymode.dispatch(!$)
        });
        b.ugcSignals.object_symmetrymode.add(function (R) {
            ($ = R) ? m(document.getElementById("ugcui-reflect"), "active") : n(document.getElementById("ugcui-reflect"), "active")
        });
        b.ugcSignals.object_rotatemode.add(function () {
            V = !1;
            m(document.getElementById("ugcui-rotate"), "active");
            n(document.getElementById("ugcui-create"), "active");
            n(document.getElementById("ugcui-erase"), "active");
            n(document.getElementById("ugcui-color"), "active");
            P.style.display = "none"
        });
        b.ugcSignals.object_erasemode.add(function () {
            V = !1;
            m(document.getElementById("ugcui-erase"), "active");
            n(document.getElementById("ugcui-create"), "active");
            n(document.getElementById("ugcui-rotate"), "active");
            n(document.getElementById("ugcui-color"), "active");
            P.style.display = "none"
        });
        b.ugcSignals.object_createmode.add(function () {
            V = !1;
            m(document.getElementById("ugcui-create"), "active");
            n(document.getElementById("ugcui-erase"), "active");
            n(document.getElementById("ugcui-rotate"), "active");
            n(document.getElementById("ugcui-color"), "active");
            P.style.display = "none"
        });
        b.ugcSignals.object_colormode.add(function () {
            if (x != 1) {
                V = !0;
                n(document.getElementById("ugcui-create"), "active");
                n(document.getElementById("ugcui-erase"), "active");
                n(document.getElementById("ugcui-rotate"), "active");
                m(document.getElementById("ugcui-color"), "active");
                P.style.display = "block"
            }
        });
        J = document.getElementsByClassName("button");
        for (T = 0; T < J.length; T++) {
            var K = J[T];
            K.addEventListener("mousemove", function (R) {
                R.stopImmediatePropagation && R.stopImmediatePropagation();
                R.stopPropagation()
            }, !1);
            K.addEventListener("mouseup", function (R) {
                R.stopImmediatePropagation && R.stopImmediatePropagation();
                R.stopPropagation()
            }, !1);
            K.addEventListener("mousedown", function (R) {
                R.stopImmediatePropagation && R.stopImmediatePropagation();
                R.stopPropagation()
            }, !1)
        }
        b.ugcSignals.object_changesize.add(function (R) {
            n(document.getElementById("ugcui-size-small"), "active");
            n(document.getElementById("ugcui-size-med"), "active");
            switch (R) {
                case 1:
                    m(document.getElementById("ugcui-size-small"), "active");
                    break;
                case 3:
                    m(document.getElementById("ugcui-size-med"), "active");
                    break;
                case 5:
                    m(document.getElementById("ugcui-size-large"), "active")
            }
        })
    };
    var v = 0, O = 0;
    this.update = function () {
        w += (0 - w) * 0.5;
        H.style.backgroundPosition = "0px " + -(v * H.offsetHeight) + "px";
        O++;
        O % 10 == 0 && (v += 1)
    };
    this.getDomElement = function () {
        return y
    }
}, UgcObjectCreator = function (b, g, c) {
    function f() {
        p = !0;
        n && o.update(p)
    }

    function h() {
        p = !1;
        n && o.update(p)
    }

    function m() {
        o.moveMouse(b.mouse.x / b.viewportWidth, b.mouse.y / b.viewportHeight);
        n && o.update(p)
    }

    var n = !1, p = !1, o = new VoxelPainter(g, c);
    b.ugcSignals.object_createmode.add(function () {
        o.setMode(VoxelPainter.MODE_CREATE)
    });
    b.ugcSignals.object_erasemode.add(function () {
        o.setMode(VoxelPainter.MODE_ERASE)
    });
    b.ugcSignals.object_symmetrymode.add(function (t) {
        o.setSymmetry(t)
    });
    b.ugcSignals.object_rotatemode.add(function () {
        o.setMode(VoxelPainter.MODE_IDLE)
    });
    b.ugcSignals.object_changecolor.add(function (t) {
        o.setColor(t)
    });
    b.ugcSignals.object_changesize.add(function (t) {
        o.setSize(t)
    });
    b.ugcSignals.object_changesize.add(function (t) {
        o.setSize(t)
    });
    this.enable = function () {
        n = !0
    };
    this.disable = function () {
        n = !1
    };
    this.show = function () {
        b.signals.mousedown.add(f);
        b.signals.mouseup.add(h);
        b.signals.mousemoved.add(m)
    };
    this.hide = function () {
        b.signals.mousedown.remove(f);
        b.signals.mouseup.remove(h);
        b.signals.mousemoved.remove(m)
    };
    this.getPainter = function () {
        return o
    }
}, UgcSoupCreator = function (b) {
    var g;
    this.init = function () {
        b.ugc.scene.collisions = new THREE.CollisionSystem;
        new THREE.Object3D;
        g = new UgcSoup(b.ugc.camera, b.ugc.scene, b, !0)
    };
    this.getDomElement = function () {
        return b.renderer.domElement
    };
    this.show = function () {
    };
    this.hide = function () {
    };
    this.resize = function () {
    };
    this.update = function () {
        g.update(20);
        THREE.AnimationHandler.update(20)
    }
}, VoxelPainter = function (b, g) {
    function c(T) {
        return Math.round(T / m)
    }

    function f(T, K, R) {
        if (!(T < -40 || T > 40))if (!(K < 0 || K > 40))if (!(R < -40 || R > 40)) {
            var aa = w.getVoxel(T, K, R);
            if (aa)aa.object.materials[0].color.setHex(o); else {
                aa = new THREE.Mesh(S.geometry, new THREE.MeshLambertMaterial({color: o}));
                aa.position.x = T * m;
                aa.position.y = K * m;
                aa.position.z = R * m;
                aa.matrixAutoUpdate = !1;
                aa.updateMatrix();
                aa.update();
                g.addObject(aa);
                X.push(aa);
                w.addVoxel(T, K, R, o, aa)
            }
        }
    }

    function h(T) {
        w.deleteVoxel(c(T.position.x), c(T.position.y), c(T.position.z));
        g.removeObject(T);
        var K = X.indexOf(T);
        K !== -1 && X.splice(K, 1);
        delete T
    }

    var m = 50, n = 1, p = 0, o = 16777215, t = VoxelPainter.MODE_CREATE, u = !1, w = new UgcObject, x, y, z, D = [], B = new THREE.Vector3, A = new THREE.Object3D;
    A.matrixAutoUpdate = !1;
    A.visible = !1;
    var E = [], C = new THREE.Plane(8100, 8100, 2, 2), H = new THREE.MeshBasicMaterial({color: 0, opacity: 0.1, transparent: !0, wireframe: !0});
    _plane = new THREE.Mesh(C, H);
    _plane.doubleSided = !0;
    _plane.visible = A.visible;
    A.addChild(_plane);
    E.push(_plane);
    _plane = new THREE.Mesh(C, H);
    _plane.rotation.y = -90 * Math.PI / 180;
    _plane.doubleSided = !0;
    _plane.visible = A.visible;
    A.addChild(_plane);
    E.push(_plane);
    _plane = new THREE.Mesh(C, H);
    _plane.rotation.x = -90 * Math.PI / 180;
    _plane.doubleSided = !0;
    _plane.visible = A.visible;
    A.addChild(_plane);
    E.push(_plane);
    g.addObject(A);
    var G, I, V, $;
    G = new THREE.Projector;
    I = new THREE.Vector3(0, 0, 0.5);
    $ = new THREE.Ray(b.position, null);
    var X = [], P = new THREE.Mesh(new THREE.Plane(4050, 4050), new THREE.MeshBasicMaterial({color: 0, opacity: 0.1, transparent: !0, wireframe: !0}));
    P.position.y = -m / 2;
    P.rotation.x = -90 * Math.PI / 180;
    P.updateMatrix();
    P.update();
    X.push(P);
    var S = new THREE.Mesh(new THREE.Cube(m, m, m)), v = [], O = [], J = new THREE.MeshLambertMaterial({color: o, opacity: 0.5, transparent: !0});
    O[0] = [];
    O[1] = [];
    for (C = 1; C <= 5; C += 2) {
        O[0][C] = new THREE.Mesh(new THREE.Cube(C * m, C * m, C * m, C, C, C), J);
        O[0][C].visible = !1;
        O[1][C] = new THREE.Mesh(new THREE.Cube(C * m, C * m, C * m, C, C, C), J);
        O[1][C].visible = !1;
        g.addObject(O[0][C]);
        g.addObject(O[1][C])
    }
    v[0] = O[0][n];
    v[1] = O[1][n];
    this.getMode = function () {
        return t
    };
    this.setMode = function (T) {
        t = T
    };
    this.setColor = function (T) {
        o = T;
        J.color.setHex(o)
    };
    this.setSize = function (T) {
        n = T;
        p = Math.floor(n / 2);
        v[0] = O[0][n];
        v[1] = O[1][n]
    };
    this.setSymmetry = function (T) {
        u = T
    };
    this.hideBrush = function () {
        v[0].visible = !1;
        v[1].visible = !1
    };
    this.moveMouse = function (T, K) {
        I.x = T * 2 - 1;
        I.y = -K * 2 + 1;
        V = G.unprojectVector(I.clone(), b);
        $.direction = V.subSelf(b.position).normalize()
    };
    this.clear = function () {
        for (; X.length > 1;) {
            var T = X[1];
            g.removeObject(T);
            X.splice(1, 1);
            delete T
        }
        w.clear()
    };
    this.update = function (T) {
        var K;
        K = 0;
        for (var R = D.length; K < R; K++)D[K].materials[0].opacity = 1;
        switch (t) {
            case VoxelPainter.MODE_IDLE:
                v[0].visible = !1;
                v[1].visible = !1;
                break;
            case VoxelPainter.MODE_CREATE:
                K = $.intersectObjects(X);
                if (T) {
                    v[0].visible = !1;
                    v[1].visible = !1;
                    K = $.intersectObjects(E);
                    if (y && K.length > 0) {
                        var aa, W;
                        T = K[0].point.clone();
                        T.addSelf(z.matrixRotationWorld.multiplyVector3(y.normal.clone()));
                        K = x.distanceTo(B.set(T.x, x.y, x.z));
                        R = x.distanceTo(B.set(x.x, T.y, x.z));
                        aa = x.distanceTo(B.set(x.x, x.y, T.z));
                        W = Math.max(K, Math.max(R, aa));
                        if (K == W)T.set(T.x, x.y, x.z); else if (R == W)T.set(x.x, T.y, x.z); else aa == W && T.set(x.x, x.y, T.z);
                        K = c(T.x);
                        R = c(T.y);
                        T = c(T.z);
                        for (aa = -p; aa < n - p; aa++)for (W = -p; W < n - p; W++)for (var ea = -p; ea < n - p; ea++) {
                            f(K + aa, R + W, T + ea);
                            u && f(-K + 1 + aa, R + W, T + ea)
                        }
                    }
                } else if (K.length > 0) {
                    x = K[0].point;
                    y = K[0].face;
                    z = K[0].object;
                    A.position.copy(x);
                    A.position.addSelf(z.matrixRotationWorld.multiplyVector3(y.normal.clone()));
                    A.updateMatrix();
                    A.update();
                    x.addSelf(z.matrixRotationWorld.multiplyVector3(y.normal.clone()));
                    x.x = c(x.x) * m;
                    x.y = c(x.y) * m;
                    x.z = c(x.z) * m;
                    v[0].position.copy(x);
                    v[0].visible = !0;
                    if (u) {
                        v[1].position.copy(v[0].position);
                        v[1].position.x = -v[1].position.x + m;
                        v[1].visible = !0
                    }
                } else {
                    y = z = null;
                    v[0].visible = !1;
                    v[1].visible = !1
                }
                break;
            case VoxelPainter.MODE_ERASE:
                K = $.intersectObjects(X);
                if (K.length > 0 && K[0].object != P) {
                    z = K[0].object;
                    if (T) {
                        h(z);
                        if (u) {
                            T = w.getVoxel(-c(z.position.x) + 1, c(z.position.y), c(z.position.z));
                            T !== undefined && h(T.object)
                        }
                    } else {
                        z.materials[0].opacity = 0.5;
                        D = [];
                        D.push(z);
                        if (u) {
                            T = w.getVoxel(-c(z.position.x) + 1, c(z.position.y), c(z.position.z));
                            if (T !== undefined) {
                                T.object.materials[0].opacity = 0.5;
                                D.push(T.object)
                            }
                        }
                    }
                }
        }
    };
    this.getObject = function () {
        return w
    }
};
VoxelPainter.MODE_IDLE = "VoxelPainter.MODE_IDLE";
VoxelPainter.MODE_CREATE = "VoxelPainter.MODE_CREATE";
VoxelPainter.MODE_ERASE = "VoxelPainter.MODE_ERASE";
var Footer = function (b, g) {
    var c = g || "files/footer";
    this.id = Footer.multipleInstances;
    var f = "rome_footer_buy_album-" + this.id, h = "rome_terms-" + this.id, m = "rome_privacy-" + this.id, n = "rome_facebook-" + this.id, p = "rome_twitter-" + this.id, o = "rome_credits-" + this.id;
    if (!window.screenX && !window.screenY) {
        window.screenX = window.screenLeft;
        window.screenY = window.screenTop
    }
    var t = {x: window.screenX + window.innerWidth / 2, y: window.screenY + window.innerHeight / 2}, u = "menubar=0, resizable=0, location=0, toolbar=0, status=0, scrollbars=1, titlebar=0, left=" + (t.x - 150) + ", top=" + (t.y - 300) + ", width=330, height=600", w = "menubar=0, resizable=0, location=0, toolbar=0, status=0, scrollbars=1, titlebar=0, left=" + (t.x - 225) + ", top=" + (t.y - 250) + ", width=550, height=500";
    this.getDomElement = function () {
        return b
    };
    this.load = function () {
        var z = z || null;
        z && (new z({buttonID: "c9e456919b824bdeb2e3a326b122db43", buttonImageUrl: c + "/buy_button-trans.png", useVendorImages: !0})).replaceDiv(f);
        Footer.handleLinkListeners(document.getElementById(o), "Credits", u);
        Footer.handleLinkListeners(document.getElementById(m), "Privacy", u);
        Footer.handleLinkListeners(document.getElementById(h), "Terms", u);
        Footer.handleLinkListeners(document.getElementById(p), "Twitter", w);
        Footer.handleLinkListeners(document.getElementById(n), "Facebook", w);
        return this
    };
    Footer.handleLinkListeners = function (z, D, B) {
        function A(E, C) {
            C.preventDefault();
            var H = E.getAttribute("href");
            window.open(H, D, B);
            return!1
        }

        B || (B = u);
        z.addEventListener ? z.addEventListener("click", function (E) {
            A(this, E)
        }, !1) : z.attachEvent("click", function (E) {
            A(this, E)
        })
    };
    window.addEventListener ? window.addEventListener("load", this.load, !1) : window.attachEvent("load", this.load);
    t = ['<div class="rome-footer">\n<div class="shout-out">\n  <ul>', '    <li class="last"><a href="http://www.chromeexperiments.com/webgl"><img src="' + c + '/chrome-trans.png" alt="This is a Chrome Experiment" border="0" /></a></li>', '    <li class="divider">&nbsp;</li>', '    <li class="last"><a href="http://google.com/"><img src="' + c + '/google-trans.png" alt="Made With Friends From Google" border="0" /></a></li>', '    <li class="clear">&nbsp;</li>\n  </ul>\n</div>\n<div class="navigation">\n  <ul class="primary">\n    <li class="first"><a href="/tech" target="_blank">Technology</a></li>', '    <li><a id = "' + o + '" href="/credits">Credits</a></li>', '    <li><a href="http://romealbum.com/" target="_blank">Rome Album</a></li>', '    <li id="' + f + '" class="rome_footer_buy_album">', '      <a href = "http://widgets.platform.emi.com/landing/2520403d33984be0b70fca43945728e9.html" onClick="_gaq.push([\'_trackPageview\', \'/buy_album\'])" target="blank">Buy Album</a>\n    </li>\n    <li class="last">Share</li>', '    <li class="last icons"><a id = "' + n + '" href="http://www.facebook.com/sharer.php?u=http://ro.me?fb=1" target="_blank"><img src="' + c + '/fb-trans.png" alt="facebook" border="0"  /></a></li>', '    <li class="last icons"><a id = "' + p + '" href="http://twitter.com/share?text=%E2%80%9C3%20Dreams%20of%20Black%E2%80%9D%20an%20interactive%20film%20by%20Chris%20Milk%20for%20Danger%20Mouse%20%26%20Daniele%20Luppi%E2%80%99s%20ROME%20album%20%E2%99%A5%20http%3A%2F%2Fro.me%20%23rome%20%23webgl&url=" target="_blank"><img src="' + c + '/twitter-trans.png" alt="twitter" border="0" /></a></li>', '    <li class="clear last">&nbsp;</li>\n  </ul>\n  <ul class="secondary">', '    <li class="first"><a id = "' + h + '" href="/terms">Terms</a></li>', '    <li class="last"><a id = "' + m + '" href="/privacy">Privacy</a></li>', '    <li class="clear last">&nbsp;</li>\n  </ul>\n</div>\n<div class="clear">&nbsp;</div>\n</div>\n</div>'].join("\n");
    b.innerHTML = t;
    if (Footer.multipleInstances < 1) {
        t = document.createTextNode('.rome-footer * {\n  margin: 0;\n  padding: 0;\n}\n.rome-footer {\n  font: 500 10px/18px "FuturaBT-Medium", Arial, sans-serif;\n  color: #434343;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.rome-footer .shout-out {\n  float: left;\n  margin: 0 0 0 18px;\n}\n.rome-footer .navigation {\n  float: right;\n  margin: 20px 26px 0 0;\n  vertical-align: middle;\n}\n.rome-footer ul li {\n  height: 16px;\n  border-right: 1px solid #a0a0a0;\n  padding: 0 10px 0 10px;\n  width: auto;\n  float: left;\n  line-height: 18px;\n  list-style: none;\n}\n.rome-footer ul li.last,\n.rome-footer ul li.last li {\n  border: none;\n  padding: 0 0 0 10px;\n}\n.rome-footer .shout-out ul li {\n  margin: 0;\n  border: 0;\n}\n.rome-footer .shout-out li.divider {\n  margin: 15px -15px 15px 15px;\n  height: 24px;\n  border-left: 1px solid #a0a0a0;\n  border-right: 0 !important;\n}\n.rome-footer a img {\n  border: 0;\n}\n.rome-footer .secondary a:link, .rome-footer .secondary a:visited {\n  color: #777;\n}\n.rome-footer a:link, .rome-footer a:visited,\n.rome-footer .secondary a:hover, .rome-footer .secondary a:active {\n  color: #434343;\n  text-decoration: none;\n}\n.rome-footer a:hover, .rome-footer a:active {\n  color: #000;\n}\n.emi_buy_button_link {\n  margin-top: 2px;\n  height: 8px;\n  line-height: 8px;\n  overflow: hidden;\n}\n.rome-footer .rome_footer_buy_album img {\n  display: block;\n  margin-top: 0;\n}\n.rome-footer .rome_footer_buy_album a:hover img {\n  margin-top: -8px;\n}\n.emi_vendor_menu.using_image a:hover img {\n  margin-top: 0;\n}\n.emi_vendor_menu.using_image {\n  margin-top: -145px;\n  margin-left: -11px;\n  padding: 10px;\n}\n.emi_vendor_menu.using_image * {\n  text-transform: none;\n}\n.emi_vendor_menu.using_image .emi_vendor_link {\n  margin-top: 5px;\n}\n.rome-footer .secondary {\n  margin: 10px 0 0 0;\n  float: right;\n}\n.clear {\n  clear: both;\n  display: block;\n  overflow: hidden;\n  visibility: hidden;\n  width: 0;\n  height: 0;\n}');
        var x = document.getElementsByTagName("head")[0], y = document.createElement("style");
        y.type = "text/css";
        if (y.styleSheet)y.styleSheet.cssText = t.nodeValue; else y.appendChild(t);
        x.appendChild(y)
    }
    Footer.multipleInstances++
};
Footer.multipleInstances = 0;
var Shortcuts = function (b) {
    function g() {
        var n = document.createElement("span");
        n.innerHTML = " ";
        m.appendChild(n)
    }

    function c(n, p) {
        var o = document.createElement("span");
        o.style.cursor = "pointer";
        o.style.padding = "0.5em";
        o.style.marginRight = "4px";
        o.style.background = "rgba(255,255,255,0.15)";
        o.innerHTML = n;
        o.addEventListener("click", p, !1);
        m.appendChild(o)
    }

    function f(n, p) {
        c(n, function () {
            b.signals.showfilm.dispatch();
            b.signals.startfilm.dispatch(p, 1)
        })
    }

    function h(n, p) {
        c(n, function () {
            b.signals.showexploration.dispatch();
            b.signals.startexploration.dispatch(p)
        })
    }

    var m = document.createElement("div");
    m.style.position = "absolute";
    m.style.left = "0px";
    m.style.top = "0px";
    m.style.padding = "0.5em";
    m.style.fontSize = "10px";
    (function (n) {
        c(n, function () {
            b.signals.showlauncher.dispatch()
        })
    })("Launcher");
    g();
    f("Intro", 0);
    g();
    f("Transition to City", 8);
    f("City", 16);
    g();
    f("Transition to Prairie", 24);
    f("Prairie", 32);
    g();
    f("Transition to Dunes", 40);
    f("Dunes", 48);
    g();
    (function (n) {
        c(n, function () {
            b.signals.showrelauncher.dispatch()
        })
    })("Relauncher");
    g();
    h("Explore City", "city");
    h("Explore Prairie", "prairie");
    h("Explore Dunes", "dunes");
    g();
    (function (n) {
        c(n, function () {
            b.signals.showugc.dispatch()
        })
    })("Ugc");
    this.getDomElement = function () {
        return m
    }
};
(function () {
    function b() {
        m.loadedContent || m.signals.showlauncher.dispatch()
    }

    function g() {
        var E = window.location.pathname.toString();
        if (E === "/" || E === "/index.html")m.signals.showlauncher.dispatch(); else for (var C = 0; C < D.length; C++)if (E.match(D[C])) {
            A[C].dispatch();
            if (C == 0)m.signals.startfilm.dispatch(0, 1); else C == 1 && m.signals.startexploration.dispatch("dunes");
            break
        }
    }

    function c(E, C, H) {
        p && p.hide();
        if (!E.__loaded) {
            E.load();
            E.__loaded = !0
        }
        E.resize(window.innerWidth, window.innerHeight);
        E.show();
        if (C && H) {
            for (var G = B.length; G--;)if (B[G] === H) {
                H += window.location.search;
                break
            }
            history && history.pushState({pState: window.location.pathname.toString()}, C, H)
        }
        p = E
    }

    function f(E) {
        if (p != x) {
            if (!E.gamma && !E.beta) {
                E.gamma = -(E.x * (180 / Math.PI));
                E.beta = -(E.y * (180 / Math.PI))
            } else if (E.alpha == null && E.beta == null && E.gamma == null) {
                window.removeEventListener("deviceorientation", f, !1);
                window.removeEventListener("MozOrientation", f, !1)
            }
            var C = Math.abs(E.gamma) > 4 || Math.abs(E.beta) > 4, H = C ? E.gamma : 0;
            C = C ? E.beta : 0;
            if (z != H || y != C) {
                var G = Math.round(1.5 * H) + m.mouse.x, I = -Math.round(1.5 * C) + m.mouse.y;
                Math.abs(G) > window.innerWidth && (G = G < 0 ? -window.innerWidth : window.innerWidth);
                Math.abs(I) > window.innerHeight && (I = I < 0 ? -window.innerHeight : window.innerHeight);
                m.mouse.x = G;
                m.mouse.y = I;
                z = H;
                y = C;
                m.signals.mousemoved.dispatch(E)
            }
        }
    }

    function h() {
        requestAnimationFrame(h);
        p && p.update()
    }

    var m, n = signals.Signal, p, o, t, u, w, x, y = 0, z = 0, D = ["film", "explore", "relauncher", "tool"], B = ["/", "/film", "/explore"], A = [];
    m = {mouse: {x: 0, y: 0}, screenWidth: window.innerWidth, screenHeight: window.innerHeight, loadedContent: !1, hasExplored: !1, originLink: window.location.pathname.toString(), shouldSkip: !1, signals: {mousedown: new n, mouseup: new n, mousemoved: new n, mousewheel: new n, keydown: new n, keyup: new n, windowresized: new n, load: new n, showlauncher: new n, showfilm: new n, showrelauncher: new n, showexploration: new n, showugc: new n, loadBegin: new n, loadItemAdded: new n, loadItemCompleted: new n, startfilm: new n, stopfilm: new n, startexploration: new n, initscenes: new n}, worlds: {}, soups: {}, sequences: {}, started: {city: !1, prairie: !1, dunes: !1}, currentTime: 0, isExperience: !1};
    o = new LauncherSection(m);
    document.body.appendChild(o.getDomElement());
    u = new RelauncherSection(m);
    document.body.appendChild(u.getDomElement());
    x = new UgcSection(m);
    document.body.appendChild(x.getDomElement());
    n = (new Shortcuts(m)).getDomElement();
    n.style.display = "none";
    n.id = "shortcuts";
    document.body.appendChild(n);
    m.signals.load.add(function () {
        m.signals.loadBegin.dispatch();
        t = new FilmSection(m);
        document.body.appendChild(t.getDomElement());
        w = new ExplorationSection(m);
        document.body.appendChild(w.getDomElement());
        m.signals.showfilm.add(function () {
            c(t, D[0], "/" + D[0])
        });
        m.signals.showexploration.add(function () {
            c(w, D[1], "/" + D[1])
        })
    });
    m.signals.showfilm.add(b);
    m.signals.showexploration.add(b);
    m.signals.showlauncher.add(function () {
        c(o, "/", "/")
    });
    m.signals.showlauncher.add(function () {
        if (m.originLink.match("/explore") && !m.loadedContent)m.shouldSkip = !0
    });
    m.signals.showrelauncher.add(function () {
        c(u, D[2], "/" + D[2])
    });
    m.signals.showugc.add(function () {
        c(x, D[3], "/" + D[3])
    });
    A.push(m.signals.showfilm);
    A.push(m.signals.showexploration);
    A.push(m.signals.showrelauncher);
    A.push(m.signals.showugc);
    document.addEventListener("mousedown", function (E) {
        m.signals.mousedown.dispatch(E);
        E.preventDefault();
        E.stopPropagation()
    }, !1);
    document.addEventListener("mouseup", function (E) {
        m.signals.mouseup.dispatch(E);
        E.preventDefault();
        E.stopPropagation()
    }, !1);
    document.addEventListener("mousemove", function (E) {
        m.mouse.x = E.clientX;
        m.mouse.y = E.clientY;
        m.signals.mousemoved.dispatch(E)
    }, !1);
    document.addEventListener("mousewheel", function (E) {
        m.signals.mousewheel.dispatch(E)
    }, !1);
    document.addEventListener("keydown", function (E) {
        m.signals.keydown.dispatch(E)
    }, !1);
    document.addEventListener("keyup", function (E) {
        m.signals.keyup.dispatch(E)
    }, !1);
    window.addEventListener("deviceorientation", f, !1);
    window.addEventListener("MozOrientation", f, !1);
    window.addEventListener("resize", function () {
        p.resize(window.innerWidth, window.innerHeight);
        m.screenWidth = window.innerWidth;
        m.screenHeight = window.innerHeight;
        m.signals.windowresized.dispatch()
    }, !1);
    g();
    h();
    window.onpopstate = function () {
        g()
    }
})();