var copyright = "Copyright 2014 Ron Ostafichuk (RonsRCSim.com)";
var CompileDate = "2014-06-04";
var gamepadSupport = {TYPICAL_BUTTON_COUNT: 16, TYPICAL_AXIS_COUNT: 4, ticking: false, gamepads: [], prevRawGamepadTypes: [], prevTimestamps: [], init: function () {
    var a = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads || (navigator.userAgent.indexOf("Firefox/") != -1);
    if (!a) {
        console.log("no-gamepad-support")
    } else {
        window.addEventListener("MozGamepadConnected", gamepadSupport.onGamepadConnect, false);
        window.addEventListener("MozGamepadDisconnected", gamepadSupport.onGamepadDisconnect, false);
        if (!!navigator.webkitGamepads || !!navigator.webkitGetGamepads) {
            gamepadSupport.startPolling()
        }
    }
}, onGamepadConnect: function (a) {
    gamepadSupport.gamepads.push(a.gamepad);
    gamepadSupport.startPolling()
}, onGamepadDisconnect: function (b) {
    for (var a in gamepadSupport.gamepads) {
        if (gamepadSupport.gamepads[a].index == b.gamepad.index) {
            gamepadSupport.gamepads.splice(a, 1);
            break
        }
    }
    if (gamepadSupport.gamepads.length == 0) {
        gamepadSupport.stopPolling()
    }
}, startPolling: function () {
    if (!gamepadSupport.ticking) {
        gamepadSupport.ticking = true;
        gamepadSupport.tick()
    }
}, stopPolling: function () {
    gamepadSupport.ticking = false
}, tick: function () {
    gamepadSupport.pollStatus();
    gamepadSupport.scheduleNextTick()
}, scheduleNextTick: function () {
    if (gamepadSupport.ticking) {
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(gamepadSupport.tick)
        } else {
            if (window.mozRequestAnimationFrame) {
                window.mozRequestAnimationFrame(gamepadSupport.tick)
            } else {
                if (window.webkitRequestAnimationFrame) {
                    window.webkitRequestAnimationFrame(gamepadSupport.tick)
                }
            }
        }
    }
}, pollStatus: function () {
    gamepadSupport.pollGamepads();
    for (var b in gamepadSupport.gamepads) {
        var a = gamepadSupport.gamepads[b];
        if (a.timestamp && (a.timestamp == gamepadSupport.prevTimestamps[b])) {
            continue
        }
        gamepadSupport.prevTimestamps[b] = a.timestamp;
        gamepadSupport.updateDisplay(b)
    }
}, pollGamepads: function () {
    var c = (navigator.webkitGetGamepads && navigator.webkitGetGamepads()) || navigator.webkitGamepads;
    if (c) {
        gamepadSupport.gamepads = [];
        var a = false;
        for (var b = 0; b < c.length; b++) {
            if (typeof c[b] != gamepadSupport.prevRawGamepadTypes[b]) {
                a = true;
                gamepadSupport.prevRawGamepadTypes[b] = typeof c[b]
            }
            if (c[b]) {
                gamepadSupport.gamepads.push(c[b])
            }
        }
    }
}, updateDisplay: function (c) {
    var a = gamepadSupport.gamepads[c];
    var d = gamepadSupport.TYPICAL_BUTTON_COUNT;
    while (typeof a.buttons[d] != "undefined") {
        d++
    }
    var b = gamepadSupport.TYPICAL_AXIS_COUNT;
    while (typeof a.axes[b] != "undefined") {
        b++
    }
}};
THREE.OBJLoader = function (a) {
    this.manager = (a !== undefined) ? a : THREE.DefaultLoadingManager
};
THREE.OBJLoader.prototype = {constructor: THREE.OBJLoader, load: function (b, d, f, e) {
    var c = this;
    var a = new THREE.XHRLoader(c.manager);
    a.setCrossOrigin(this.crossOrigin);
    a.load(b, function (g) {
        d(c.parse(g))
    })
}, parse: function (q) {
    function c(l, I, H) {
        return new THREE.Vector3(l, I, H)
    }

    function h(H, l) {
        return new THREE.Vector2(H, l)
    }

    function j(H, l, J, I) {
        return new THREE.Face3(H, l, J, I)
    }

    var G = new THREE.Object3D();
    var e, p, a;
    var o = 0;

    function u(H, l, J, I) {
        if (I === undefined) {
            e.faces.push(j(parseInt(H) - (o + 1), parseInt(l) - (o + 1), parseInt(J) - (o + 1)))
        } else {
            e.faces.push(j(parseInt(H) - (o + 1), parseInt(l) - (o + 1), parseInt(J) - (o + 1), [r[parseInt(I[0]) - 1].clone(), r[parseInt(I[1]) - 1].clone(), r[parseInt(I[2]) - 1].clone()]))
        }
    }

    function f(H, l, I) {
        e.faceVertexUvs[0].push([k[parseInt(H) - 1].clone(), k[parseInt(l) - 1].clone(), k[parseInt(I) - 1].clone()])
    }

    function A(l, H, I) {
        if (l[3] === undefined) {
            u(l[0], l[1], l[2], I);
            if (!(H === undefined) && H.length > 0) {
                f(H[0], H[1], H[2])
            }
        } else {
            if (!(I === undefined) && I.length > 0) {
                u(l[0], l[1], l[3], [I[0], I[1], I[3]]);
                u(l[1], l[2], l[3], [I[1], I[2], I[3]])
            } else {
                u(l[0], l[1], l[3]);
                u(l[1], l[2], l[3])
            }
            if (!(H === undefined) && H.length > 0) {
                f(H[0], H[1], H[3]);
                f(H[1], H[2], H[3])
            }
        }
    }

    if (/^o /gm.test(q) === false) {
        e = new THREE.Geometry();
        p = new THREE.MeshLambertMaterial();
        a = new THREE.Mesh(e, p);
        a.doubleSided = true;
        G.add(a)
    }
    var g = [];
    var d = 0;
    var r = [];
    var k = [];
    var s = /v( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;
    var v = /vn( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;
    var D = /vt( +[\d|\.|\+|\-|e]+)( +[\d|\.|\+|\-|e]+)/;
    var F = /f( +\d+)( +\d+)( +\d+)( +\d+)?/;
    var E = /f( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))( +(\d+)\/(\d+))?/;
    var C = /f( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))( +(\d+)\/(\d+)\/(\d+))?/;
    var B = /f( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))( +(\d+)\/\/(\d+))?/;
    var b = q.split("\n");
    for (var w = 0; w < b.length; w++) {
        var n = b[w];
        n = n.trim();
        var m;
        if (n.length === 0 || n.charAt(0) === "#") {
            continue
        } else {
            if ((m = s.exec(n)) !== null) {
                e.vertices.push(c(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])))
            } else {
                if ((m = v.exec(n)) !== null) {
                    r.push(c(parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3])))
                } else {
                    if ((m = D.exec(n)) !== null) {
                        k.push(h(parseFloat(m[1]), parseFloat(m[2])))
                    } else {
                        if ((m = F.exec(n)) !== null) {
                            A([m[1], m[2], m[3], m[4]])
                        } else {
                            if ((m = E.exec(n)) !== null) {
                                A([m[2], m[5], m[8], m[11]], [m[3], m[6], m[9], m[12]])
                            } else {
                                if ((m = C.exec(n)) !== null) {
                                    A([m[2], m[6], m[10], m[14]], [m[3], m[7], m[11], m[15]], [m[4], m[8], m[12], m[16]])
                                } else {
                                    if ((m = B.exec(n)) !== null) {
                                        A([m[2], m[5], m[8], m[11]], [], [m[3], m[6], m[9], m[12]])
                                    } else {
                                        if (/^o /.test(n)) {
                                            if (!(e === undefined)) {
                                                o = o + e.vertices.length
                                            }
                                            e = new THREE.Geometry();
                                            p = new THREE.MeshLambertMaterial();
                                            a = new THREE.Mesh(e, p);
                                            a.doubleSided = true;
                                            a.name = n.substring(2).trim();
                                            G.add(a);
                                            d = 0
                                        } else {
                                            if (/^g /.test(n)) {
                                            } else {
                                                if (/^usemtl /.test(n)) {
                                                    p.name = n.substring(7).trim()
                                                } else {
                                                    if (/^mtllib /.test(n)) {
                                                    } else {
                                                        if (/^s /.test(n)) {
                                                        } else {
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    for (var w = 0, t = G.children.length; w < t; w++) {
        var e = G.children[w].geometry;
        e.computeCentroids();
        e.computeFaceNormals();
        e.computeBoundingSphere()
    }
    return G
}};
function generateTerrainMap(g, a, f) {
    var b = e(g + 1, g + 1);
    c(b, g);
    return b;
    function e(o, n) {
        var k = new Array(o), m = 0, l = 0;
        for (m = 0; m < o; m += 1) {
            k[m] = new Array(n)
        }
        for (m = 0; m < o; m += 1) {
            for (l = 0; l < n; l += 1) {
                k[m][l] = 0
            }
        }
        return k
    }

    function c(n, q) {
        var s, A, v, w, o, u, m, p, k;
        n[0][0] = Math.random(1);
        A = n[0][0];
        n[0][q] = Math.random(1);
        o = n[0][q];
        n[q][0] = Math.random(1);
        s = n[q][0];
        n[q][q] = Math.random(1);
        w = n[q][q];
        n[q / 2][q / 2] = n[0][0] + n[0][q] + n[q][0] + n[q][q] / 4;
        n[q / 2][q / 2] = d(n[q / 2][q / 2]);
        k = n[q / 2][q / 2];
        n[q / 2][q] = o + w + k / 3;
        n[q / 2][0] = A + s + k / 3;
        n[q][q / 2] = s + w + k / 3;
        n[0][q / 2] = A + o + k / 3;
        j(q)
    }

    function j(p) {
        var n = p / 2, v, q, B, l, t, s, A, m, k, w = 0, u = 0, r = 0, o = 0;
        if (n > a) {
            for (r = n; r <= g; r += n) {
                for (o = n; o <= g; o += n) {
                    w = r - (n / 2);
                    u = o - (n / 2);
                    B = b[r - n][o - n];
                    q = b[r][o - n];
                    t = b[r - n][o];
                    s = b[r][o];
                    b[w][u] = (B + q + t + s) / 4 + h(p);
                    b[w][u] = d(b[w][u]);
                    k = b[w][u];
                    if (o - (n * 2) + (n / 2) > 0) {
                        b[w][o - n] = (B + q + k + b[w][o - p + (n / 2)]) / 4 + h(p)
                    } else {
                        b[w][o - n] = (B + q + k) / 3 + h(p)
                    }
                    b[w][o - n] = d(b[w][o - n]);
                    if (o + (n / 2) < g) {
                        b[w][o] = (t + s + k + b[w][o + (n / 2)]) / 4 + h(p)
                    } else {
                        b[w][o] = (t + s + k) / 3 + h(p)
                    }
                    b[w][o] = d(b[w][o]);
                    if (r + (n / 2) < g) {
                        b[r][u] = (q + s + k + b[r + (n / 2)][u]) / 4 + h(p)
                    } else {
                        b[r][u] = (q + s + k) / 3 + h(p)
                    }
                    b[r][u] = d(b[r][u]);
                    if (r - (n * 2) + (n / 2) > 0) {
                        b[r - n][u] = (B + t + k + b[r - p + (n / 2)][u]) / 4 + h(p)
                    } else {
                        b[r - n][u] = (B + t + k) / 3 + h(p)
                    }
                    b[r - n][u] = d(b[r - n][u])
                }
            }
            j(n)
        }
    }

    function h(l) {
        var k = l / (g + g) * f;
        return(Math.random(1) - 0.5) * k
    }

    function d(k) {
        if (k > 1) {
            k = 1
        } else {
            if (k < 0) {
                k = 0
            }
        }
        return k
    }
}
var _skyWidth_m = 5000;
var _halfSkyWidth_m = _skyWidth_m / 2;
var _groundWidth_m = _skyWidth_m;
var _groundWidthIndexes = 256;
var _halfGWI = _groundWidthIndexes / 2;
var sFile = "img/Grass00.jpg";
if (_mobile) {
    sFile = "img/mobile/Grass00.jpg"
}
var groundTexture = THREE.ImageUtils.loadTexture(sFile);
groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
groundTexture.repeat.set(_groundWidthIndexes * 2, _groundWidthIndexes * 2);
groundTexture.needsUpdate = true;
var groundMaterial = new THREE.MeshLambertMaterial({color: 11184810, map: groundTexture});
var geometryGround = new THREE.PlaneGeometry(_groundWidth_m, _groundWidth_m, _groundWidthIndexes - 1, _groundWidthIndexes - 1);
var map = generateTerrainMap(_groundWidthIndexes, 1, 7.5);
for (var x = 0; x < _groundWidthIndexes; x++) {
    for (var y = 0; y < _groundWidthIndexes; y++) {
        map[x][y] = Math.floor(map[x][y] * 100)
    }
}
var flattenRange_m = 600;
var halfFlattenIndexRange = Math.ceil(flattenRange_m / _groundWidth_m * _groundWidthIndexes);
var minHeight = 10000;
for (var nPasses = 0; nPasses < 4; nPasses++) {
    for (var x = _halfGWI - 2 * halfFlattenIndexRange; x < _halfGWI + 2 * halfFlattenIndexRange; x++) {
        for (var y = _halfGWI - 2 * halfFlattenIndexRange; y < _halfGWI + 2 * halfFlattenIndexRange; y++) {
            map[x][y] = (map[x - 1][y - 1] + map[x + 1][y + 1] + map[x - 1][y + 1] + map[x + 1][y - 1]) / 4
        }
    }
}
for (var x = _halfGWI - halfFlattenIndexRange; x < _halfGWI + halfFlattenIndexRange; x++) {
    for (var y = _halfGWI - halfFlattenIndexRange; y < _halfGWI + halfFlattenIndexRange; y++) {
        if (map[x][y] < minHeight) {
            minHeight = map[x][y]
        }
    }
}
for (var x = _halfGWI - halfFlattenIndexRange; x < _halfGWI + halfFlattenIndexRange; x++) {
    for (var y = _halfGWI - halfFlattenIndexRange; y < _halfGWI + halfFlattenIndexRange; y++) {
        map[x][y] = minHeight
    }
}
for (var nPasses = 0; nPasses < 4; nPasses++) {
    for (var x = _halfGWI - 2 * halfFlattenIndexRange; x < _halfGWI + 2 * halfFlattenIndexRange; x++) {
        for (var y = _halfGWI - 2 * halfFlattenIndexRange; y < _halfGWI + 2 * halfFlattenIndexRange; y++) {
            map[x][y] = (map[x - 1][y - 1] + map[x + 1][y + 1] + map[x - 1][y + 1] + map[x + 1][y - 1]) / 4
        }
    }
}
for (var x = 0; x < _groundWidthIndexes; x++) {
    for (var y = 0; y < _groundWidthIndexes; y++) {
        if (map[x][y] > 100) {
            map[x][y] = 100
        }
        var vertexNum = x + _groundWidthIndexes * y;
        geometryGround.vertices[vertexNum].z = map[x][y]
    }
}
function GetGroundHeight(a, d) {
    if (isNaN(a)) {
        return 0
    }
    var c = Math.floor((a + _groundWidth_m / 2) / _groundWidth_m * _groundWidthIndexes);
    var b = Math.floor((d + _groundWidth_m / 2) / _groundWidth_m * _groundWidthIndexes);
    if (c < 0) {
        c = 0
    }
    if (c >= _groundWidthIndexes - 1) {
        c = _groundWidthIndexes - 1
    }
    if (b < 0) {
        b = 0
    }
    if (b >= _groundWidthIndexes - 1) {
        b = _groundWidthIndexes - 1
    }
    return(map[c][b] + map[c + 1][b + 1] + map[c + 1][b] + map[c][b + 1]) / 4 + 0.01
}
function makeSkyBox(b) {
    var f = ["sky/" + b + "/negx.png", "sky/" + b + "/negz.png", "sky/" + b + "/negy.png", "sky/" + b + "/posy.png", "sky/" + b + "/posz.png", "sky/" + b + "/posx.png"];
    if (_mobile) {
        f = ["sky/" + b + "/mobile/negx.png", "sky/" + b + "/mobile/negz.png", "sky/" + b + "/mobile/negy.png", "sky/" + b + "/mobile/posy.png", "sky/" + b + "/mobile/posz.png", "sky/" + b + "/mobile/posx.png"]
    }
    var e = THREE.ImageUtils.loadTextureCube(f);
    e.format = THREE.RGBFormat;
    var c = THREE.ShaderLib.cube;
    c.uniforms.tCube.value = e;
    var a = new THREE.ShaderMaterial({fragmentShader: c.fragmentShader, vertexShader: c.vertexShader, uniforms: c.uniforms, depthWrite: false, side: THREE.BackSide});
    var d = new THREE.Mesh(new THREE.CubeGeometry(_skyWidth_m, _skyWidth_m, _skyWidth_m), a);
    scene.add(d)
}
THREE.OculusRiftEffect = function (h, p) {
    var e = (p && p.worldFactor) ? p.worldFactor : 1;
    var n = (p && p.HMD) ? p.HMD : {hResolution: 1280, vResolution: 800, hScreenSize: 0.14976, vScreenSize: 0.0936, interpupillaryDistance: 0.064, lensSeparationDistance: 0.064, eyeToScreenDistance: 0.3099, distortionK: [1, 0.22, 0.24, 0], chromaAbParameter: [0.996, -0.004, 1.014, 0]};
    var g = new THREE.PerspectiveCamera();
    g.matrixAutoUpdate = false;
    g.target = new THREE.Vector3();
    var m = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1000);
    m.position.z = 1;
    this.preLeftRender = function () {
    };
    this.preRightRender = function () {
    };
    h.autoClear = false;
    var k = new THREE.Color("black");
    var c = {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat};
    var d = new THREE.WebGLRenderTarget(640, 800, c);
    var a = new THREE.ShaderMaterial({uniforms: {texid: {type: "t", value: d}, scale: {type: "v2", value: new THREE.Vector2(1, 1)}, scaleIn: {type: "v2", value: new THREE.Vector2(1, 1)}, lensCenter: {type: "v2", value: new THREE.Vector2(0, 0)}, hmdWarpParam: {type: "v4", value: new THREE.Vector4(1, 0, 0, 0)}, chromAbParam: {type: "v4", value: new THREE.Vector4(1, 0, 0, 0)}}, vertexShader: ["varying vec2 vUv;", "void main() {", " vUv = uv;", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"), fragmentShader: ["uniform vec2 scale;", "uniform vec2 scaleIn;", "uniform vec2 lensCenter;", "uniform vec4 hmdWarpParam;", "uniform vec4 chromAbParam;", "uniform sampler2D texid;", "varying vec2 vUv;", "void main()", "{", "  vec2 uv = (vUv*2.0)-1.0;", "  vec2 theta = (uv-lensCenter)*scaleIn;", "  float rSq = theta.x*theta.x + theta.y*theta.y;", "  vec2 rvector = theta*(hmdWarpParam.x + hmdWarpParam.y*rSq + hmdWarpParam.z*rSq*rSq + hmdWarpParam.w*rSq*rSq*rSq);", "  vec2 rBlue = rvector * (chromAbParam.z + chromAbParam.w * rSq);", "  vec2 tcBlue = (lensCenter + scale * rBlue);", "  tcBlue = (tcBlue+1.0)/2.0;", "  if (any(bvec2(clamp(tcBlue, vec2(0.0,0.0), vec2(1.0,1.0))-tcBlue))) {", "    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "    return;}", "  vec2 tcGreen = lensCenter + scale * rvector;", "  tcGreen = (tcGreen+1.0)/2.0;", "  vec2 rRed = rvector * (chromAbParam.x + chromAbParam.y * rSq);", "  vec2 tcRed = lensCenter + scale * rRed;", "  tcRed = (tcRed+1.0)/2.0;", "  gl_FragColor = vec4(texture2D(texid, tcRed).r, texture2D(texid, tcGreen).g, texture2D(texid, tcBlue).b, 1);", "}"].join("\n")});
    var o = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), a);
    var j = new THREE.Scene();
    j.add(m);
    j.add(o);
    var b = {}, l = {};
    var f = 1;
    this.setHMD = function (s) {
        n = s;
        var q = n.hResolution / (2 * n.vResolution);
        var B = -1 - (4 * (n.hScreenSize / 4 - n.lensSeparationDistance / 2) / n.hScreenSize);
        f = (n.distortionK[0] + n.distortionK[1] * Math.pow(B, 2) + n.distortionK[2] * Math.pow(B, 4) + n.distortionK[3] * Math.pow(B, 6));
        var t = THREE.Math.radToDeg(2 * Math.atan2(n.vScreenSize * f, 2 * n.eyeToScreenDistance));
        var w = (new THREE.Matrix4()).makePerspective(t, q, 0.3, 10000);
        var u = 4 * (n.hScreenSize / 4 - n.interpupillaryDistance / 2) / n.hScreenSize;
        b.proj = ((new THREE.Matrix4()).makeTranslation(u, 0, 0)).multiply(w);
        l.proj = ((new THREE.Matrix4()).makeTranslation(-u, 0, 0)).multiply(w);
        b.tranform = (new THREE.Matrix4()).makeTranslation(-e * n.interpupillaryDistance / 2, 0, 0);
        l.tranform = (new THREE.Matrix4()).makeTranslation(e * n.interpupillaryDistance / 2, 0, 0);
        b.viewport = [0, 0, n.hResolution / 2, n.vResolution];
        l.viewport = [n.hResolution / 2, 0, n.hResolution / 2, n.vResolution];
        var A = 4 * (n.hScreenSize / 4 - n.lensSeparationDistance / 2) / n.hScreenSize;
        b.lensCenter = new THREE.Vector2(A, 0);
        l.lensCenter = new THREE.Vector2(-A, 0);
        a.uniforms.hmdWarpParam.value = new THREE.Vector4(n.distortionK[0], n.distortionK[1], n.distortionK[2], n.distortionK[3]);
        a.uniforms.chromAbParam.value = new THREE.Vector4(n.chromaAbParameter[0], n.chromaAbParameter[1], n.chromaAbParameter[2], n.chromaAbParameter[3]);
        a.uniforms.scaleIn.value = new THREE.Vector2(1, 1 / q);
        a.uniforms.scale.value = new THREE.Vector2(1 / f, 1 * q / f);
        if (d) {
            d.dispose()
        }
        d = new THREE.WebGLRenderTarget(n.hResolution * f / 2, n.vResolution * f, c);
        a.uniforms.texid.value = d
    };
    this.getHMD = function () {
        return n
    };
    this.setHMD(n);
    this.setSize = function (r, q) {
        b.viewport = [r / 2 - n.hResolution / 2, q / 2 - n.vResolution / 2, n.hResolution / 2, n.vResolution];
        l.viewport = [r / 2, q / 2 - n.vResolution / 2, n.hResolution / 2, n.vResolution];
        h.setSize(r, q)
    };
    this.render = function (r, q) {
        var s = h.getClearColor().clone();
        h.setClearColor(k);
        h.clear();
        h.setClearColor(s);
        if (q.matrixAutoUpdate) {
            q.updateMatrix()
        }
        this.preLeftRender();
        g.projectionMatrix.copy(b.proj);
        g.matrix.copy(q.matrix).multiply(b.tranform);
        g.matrixWorldNeedsUpdate = true;
        h.setViewport(b.viewport[0], b.viewport[1], b.viewport[2], b.viewport[3]);
        a.uniforms.lensCenter.value = b.lensCenter;
        h.render(r, g, d, true);
        h.render(j, m);
        this.preRightRender();
        g.projectionMatrix.copy(l.proj);
        g.matrix.copy(q.matrix).multiply(l.tranform);
        g.matrixWorldNeedsUpdate = true;
        h.setViewport(l.viewport[0], l.viewport[1], l.viewport[2], l.viewport[3]);
        a.uniforms.lensCenter.value = l.lensCenter;
        h.render(r, g, d, true);
        h.render(j, m)
    };
    this.dispose = function () {
        if (a) {
            a.dispose()
        }
        if (d) {
            d.dispose()
        }
    }
};
var _aircraftDef = [];
function SetupAircraftMemberVars() {
    _aircraft.castShadow = true;
    _aircraft.pitch = 0;
    _aircraft.yaw = 0;
    _aircraft.roll = 0;
    _aircraft.crashTime_ms = -1;
    _aircraft.minx = 0;
    _aircraft.miny = 0;
    _aircraft.minz = 0;
    _aircraft.maxx = 0;
    _aircraft.maxy = 0;
    _aircraft.maxz = 0;
    _aircraft.Initialize = function (a, c, b) {
        _aircraft.position.set(a, c, b);
        _aircraft.angularVelocity.set(0, 0, 0);
        _aircraft.angularAcceleration.set(0, 0, 0);
        _aircraft.angularMomentum.set(0, 0, 0);
        _aircraft.velocity.set(0, 0, 0);
        _aircraft.acceleration.set(0, 0, 0);
        _aircraft.tmpQuaternion.set(0, 0, 0, 0).normalize();
        _aircraft.quaternion.set(0, 0, 0, 0);
        _aircraft.quaternion.multiply(_aircraft.tmpQuaternion);
        _aircraft.matrix = new THREE.Matrix4;
        _aircraft.matrix.makeRotationFromQuaternion(_aircraft.quaternion);
        _aircraft.matrixWorldNeedsUpdate = true
    };
    _aircraft.tmpQuaternion = new THREE.Quaternion(0, 0, 1, 0).normalize();
    _aircraft.torqueW = new THREE.Vector3(0, 0, 0);
    _aircraft.forceW = new THREE.Vector3(0, 0, 0);
    _aircraft.angularMomentum = new THREE.Vector3(0, 0, 0);
    _aircraft.angularVelocity = new THREE.Vector3(0, 0, 0);
    _aircraft.angularAcceleration = new THREE.Vector3(0, 0, 0);
    _aircraft.position.set(4, GetGroundHeight(4, 4) + 0.1, 4);
    _aircraft.velocity = new THREE.Vector3(0, 0, 0);
    _aircraft.acceleration = new THREE.Vector3(0, 0, 0);
    _aircraft.up.set(0, 1, 0);
    _aircraft.force = new THREE.Vector3(0, 0, 0);
    _aircraft.CoL = 1;
    _aircraft.speed_mps = 0
}
function CreateFoamyAircraft(M, O) {
    var aa = 0, ab;
    if (_aircraft !== null) {
        for (var w in _aircraft.CSurf) {
            if (_aircraft.CSurf.hasOwnProperty(w)) {
                var E = _aircraft.CSurf[w];
                scene.remove(E);
                _aircraft.CSurf[w] = null
            }
        }
        scene.remove(_aircraft);
        _aricraft = null
    }
    var G = new THREE.MeshPhongMaterial({color: 10526720, specular: 11579424, ambient: 11571232, shininess: 5, shading: THREE.SmoothShading, side: THREE.DoubleSide});
    var N = new THREE.MeshPhongMaterial({color: 240, specular: 2105520, ambient: 2105520, shininess: 5, shading: THREE.SmoothShading, side: THREE.DoubleSide});
    var Q = new THREE.MeshPhongMaterial({color: 15728640, specular: 11542560, ambient: 11542560, shininess: 2, shading: THREE.SmoothShading, side: THREE.DoubleSide});
    _aircraft = new THREE.Object3D;
    _aircraft.Definition = M;
    SetupAircraftMemberVars();
    if (M.rotationalDampingFactor) {
        _aircraft.rotationalDampingFactor = M.rotationalDampingFactor
    } else {
        _aircraft.rotationalDampingFactor = 0.997
    }
    _aircraft.Scale = O;
    _aircraft.CSurf = [];
    var b = new THREE.CubeGeometry(0.01, 0.01, 0.01);
    var k = new THREE.Mesh(b, Q);
    _aircraft.add(k);
    _aircraft.EnginePower_N = M.EnginePower_N * O;
    _aircraft.maxRadius = 0.05;
    _aircraft.mass = 0;
    var L = 0;
    M.numNewFaces = 0;
    if (!_mobile) {
        for (var w in M.Sections) {
            if (M.Sections.hasOwnProperty(w)) {
                var ad = M.Sections[w];
                if ((ad.pos !== undefined || ad.pts !== undefined)) {
                    if (ad.faces !== undefined && ad.pts !== undefined) {
                        var h = true;
                        while (h) {
                            h = false;
                            var g = ad.faces.length;
                            for (aa = 0; aa < g; aa++) {
                                ab = ad.faces[aa];
                                var K = O * Math.sqrt(Math.pow(ad.pts[ab[0]][0] - ad.pts[ab[1]][0], 2) + Math.pow(ad.pts[ab[0]][1] - ad.pts[ab[1]][1], 2) + Math.pow(ad.pts[ab[0]][2] - ad.pts[ab[1]][2], 2));
                                var J = O * Math.sqrt(Math.pow(ad.pts[ab[2]][0] - ad.pts[ab[1]][0], 2) + Math.pow(ad.pts[ab[2]][1] - ad.pts[ab[1]][1], 2) + Math.pow(ad.pts[ab[2]][2] - ad.pts[ab[1]][2], 2));
                                var I = O * Math.sqrt(Math.pow(ad.pts[ab[0]][0] - ad.pts[ab[2]][0], 2) + Math.pow(ad.pts[ab[0]][1] - ad.pts[ab[2]][1], 2) + Math.pow(ad.pts[ab[0]][2] - ad.pts[ab[2]][2], 2));
                                var T = (K + J + I) / 2;
                                var R = Math.sqrt(T * (T - K) * (T - J) * (T - I));
                                if (!isNaN(R) && R > _maxFaceArea) {
                                    var o = [];
                                    var af = [];
                                    var ae = [];
                                    var P = ad.pts.length;
                                    if (K > J && K > I) {
                                        o = [(ad.pts[ab[0]][0] + ad.pts[ab[1]][0]) / 2, (ad.pts[ab[0]][1] + ad.pts[ab[1]][1]) / 2, (ad.pts[ab[0]][2] + ad.pts[ab[1]][2]) / 2];
                                        af = [ab[0], P, ab[2]];
                                        ae = [P, ab[1], ab[2]]
                                    } else {
                                        if (I > J && I > K) {
                                            o = [(ad.pts[ab[2]][0] + ad.pts[ab[1]][0]) / 2, (ad.pts[ab[2]][1] + ad.pts[ab[1]][1]) / 2, (ad.pts[ab[2]][2] + ad.pts[ab[1]][2]) / 2];
                                            af = [ab[0], ab[1], P];
                                            ae = [P, ab[2], ab[0]]
                                        } else {
                                            o = [(ad.pts[ab[0]][0] + ad.pts[ab[2]][0]) / 2, (ad.pts[ab[0]][1] + ad.pts[ab[2]][1]) / 2, (ad.pts[ab[0]][2] + ad.pts[ab[2]][2]) / 2];
                                            af = [ab[0], ab[1], P];
                                            ae = [P, ab[1], ab[2]]
                                        }
                                    }
                                    ad.pts[P] = o;
                                    ad.faces[aa] = af;
                                    ad.faces[ad.faces.length] = ae;
                                    L++;
                                    h = true
                                }
                            }
                        }
                        M.numNewFaces = L
                    }
                }
            }
        }
    }
    _aircraft.numNewFaces = M.numNewFaces;
    for (var w in M.Sections) {
        if (M.Sections.hasOwnProperty(w)) {
            var ad = M.Sections[w];
            ad.furthestPt = new THREE.Vector3(0, 0, 0);
            if ((ad.pos !== undefined || ad.pts !== undefined)) {
                if (ad.cylinder !== undefined && ad.rot !== undefined && ad.pos !== undefined) {
                    var u = N;
                    if (ad.color !== undefined) {
                        if (ad.opacity === undefined) {
                            ad.opacity = 1
                        }
                        u = new THREE.MeshPhongMaterial({color: ad.color, specular: ad.color, ambient: ad.color, shininess: 3, shading: THREE.SmoothShading, transparent: true, opacity: ad.opacity, side: THREE.DoubleSide})
                    }
                    var C = new THREE.Mesh(new THREE.CylinderGeometry(ad.cylinder[0], ad.cylinder[1], ad.cylinder[2], 16, 16, false), u);
                    C.position.x = ad.pos[0];
                    C.position.y = ad.pos[1];
                    C.position.z = ad.pos[2];
                    C.rotation.x = ad.rot[0];
                    C.rotation.y = ad.rot[1];
                    C.rotation.z = ad.rot[2];
                    _aircraft.add(C);
                    _aircraft.mass += ad.mass
                } else {
                    if (ad.faces !== undefined && ad.pts !== undefined) {
                        ad.furthestPtDist = 0;
                        ad.minx = 900;
                        ad.maxx = -900;
                        ad.minz = 900;
                        ad.maxz = -900;
                        ad.miny = 900;
                        ad.maxy = -900;
                        for (var aa = 0; aa < ad.pts.length; aa++) {
                            ad.minx = Math.min(ad.minx, ad.pts[aa][0]);
                            ad.miny = Math.min(ad.miny, ad.pts[aa][1]);
                            ad.minz = Math.min(ad.minz, ad.pts[aa][2]);
                            ad.maxx = Math.max(ad.maxx, ad.pts[aa][0]);
                            ad.maxy = Math.max(ad.maxy, ad.pts[aa][1]);
                            ad.maxz = Math.max(ad.maxz, ad.pts[aa][2]);
                            var d = Math.sqrt(ad.pts[aa][0] * ad.pts[aa][0] + ad.pts[aa][1] * ad.pts[aa][1] + ad.pts[aa][2] * ad.pts[aa][2]);
                            if (d > ad.furthestPtDist) {
                                ad.furthestPtDist = d;
                                ad.furthestPt.set(ad.pts[aa][0], ad.pts[aa][1], ad.pts[aa][2])
                            }
                        }
                        if (ad.centers === undefined) {
                            ad.areas = [];
                            ad.centers = [];
                            ad.masses = [];
                            if (ad.normals === undefined) {
                                ad.normals = []
                            }
                            for (aa = 0; aa < ad.faces.length; aa++) {
                                ab = ad.faces[aa];
                                var K = O * Math.sqrt(Math.pow(ad.pts[ab[0]][0] - ad.pts[ab[1]][0], 2) + Math.pow(ad.pts[ab[0]][1] - ad.pts[ab[1]][1], 2) + Math.pow(ad.pts[ab[0]][2] - ad.pts[ab[1]][2], 2));
                                var J = O * Math.sqrt(Math.pow(ad.pts[ab[2]][0] - ad.pts[ab[1]][0], 2) + Math.pow(ad.pts[ab[2]][1] - ad.pts[ab[1]][1], 2) + Math.pow(ad.pts[ab[2]][2] - ad.pts[ab[1]][2], 2));
                                var I = O * Math.sqrt(Math.pow(ad.pts[ab[0]][0] - ad.pts[ab[2]][0], 2) + Math.pow(ad.pts[ab[0]][1] - ad.pts[ab[2]][1], 2) + Math.pow(ad.pts[ab[0]][2] - ad.pts[ab[2]][2], 2));
                                var T = (K + J + I) / 2;
                                var R = Math.sqrt(T * (T - K) * (T - J) * (T - I));
                                if (isNaN(R)) {
                                    ad.areas[aa] = 0
                                } else {
                                    ad.areas[aa] = R
                                }
                                ad.centers[aa] = new THREE.Vector3((ad.pts[ab[0]][0] + ad.pts[ab[1]][0] + ad.pts[ab[2]][0]) / 3 * O, (ad.pts[ab[0]][1] + ad.pts[ab[1]][1] + ad.pts[ab[2]][1]) / 3 * O, (ad.pts[ab[0]][2] + ad.pts[ab[1]][2] + ad.pts[ab[2]][2]) / 3 * O);
                                if (M.BodyDensity !== undefined && ad.calcWeight !== undefined) {
                                    ad.masses[aa] = M.BodyDensity * ad.areas[aa]
                                } else {
                                    ad.masses[aa] = 0
                                }
                                _aircraft.mass += ad.masses[aa];
                                if (ad.normals[aa] === undefined) {
                                    var q = ad.faces[aa];
                                    var m = q[0];
                                    var l = q[1];
                                    var j = q[2];
                                    var X = ad.pts[l][0] - ad.pts[m][0];
                                    var W = ad.pts[l][1] - ad.pts[m][1];
                                    var U = ad.pts[l][2] - ad.pts[m][2];
                                    var H = ad.pts[j][0] - ad.pts[m][0];
                                    var F = ad.pts[j][1] - ad.pts[m][1];
                                    var D = ad.pts[j][2] - ad.pts[m][2];
                                    var ac = new THREE.Vector3((W * D - U * F), -(X * D - U * H), (X * F - W * H)).normalize();
                                    var B = new THREE.Vector3().copy(ac).negate();
                                    var a = new THREE.Vector3().copy(ad.centers[aa]);
                                    var Z = new THREE.Vector3().copy(ac).add(a);
                                    var Y = new THREE.Vector3().copy(B).add(a);
                                    if (Y.length() > Z.length()) {
                                        ac.copy(B)
                                    }
                                    ad.normals[aa] = [];
                                    ad.normals[aa][0] = ac.x;
                                    ad.normals[aa][1] = ac.y;
                                    ad.normals[aa][2] = ac.z
                                }
                            }
                        }
                        var n = new THREE.Geometry();
                        var S;
                        for (aa = 0; aa < ad.pts.length; aa++) {
                            var V = ad.pts[aa];
                            if (ad.offset !== undefined) {
                                S = new THREE.Vector3(V[0] + ad.offset[0], V[1] + ad.offset[1], V[2] + ad.offset[2])
                            } else {
                                S = new THREE.Vector3(V[0], V[1], V[2])
                            }
                            var c = S.length();
                            if (c > _aircraft.maxRadius) {
                                _aircraft.maxRadius = c
                            }
                            n.vertices.push(S)
                        }
                        for (aa = 0; aa < ad.faces.length; aa++) {
                            ab = ad.faces[aa];
                            n.faces.push(new THREE.Face3(ab[0], ab[1], ab[2]))
                        }
                        n.computeFaceNormals();
                        var t = G;
                        if (ad.color !== undefined) {
                            if (ad.opacity === undefined) {
                                t = new THREE.MeshPhongMaterial({color: ad.color, specular: ad.color, ambient: ad.color, shininess: 3, shading: THREE.FlatShading, side: THREE.DoubleSide})
                            } else {
                                t = new THREE.MeshPhongMaterial({color: ad.color, specular: ad.color, ambient: ad.color, shininess: 3, shading: THREE.FlatShading, transparent: true, opacity: ad.opacity, side: THREE.DoubleSide})
                            }
                        }
                        var A = new THREE.Mesh(n, t);
                        if (w.substr(0, 11) === "C_Propeller") {
                            if (w === "C_PropellerHeli") {
                                var r = w.substr(2);
                                if (_aircraft.CSurf[r] === undefined) {
                                    _aircraft.CSurf[r] = new THREE.Object3D
                                }
                                _aircraft.CSurf[r].add(A);
                                if (ad.pos !== undefined) {
                                    _aircraft.CSurf[r].propX = ad.pos[0] * O;
                                    _aircraft.CSurf[r].propY = ad.pos[1] * O;
                                    _aircraft.CSurf[r].propZ = ad.pos[2] * O
                                }
                                _aircraft.CSurf[r].scale.set(O, O, O);
                                _aircraft.CSurf[r].up.set(0, 1, 0);
                                scene.add(_aircraft.CSurf[r])
                            } else {
                                var r = w.substr(2);
                                if (_aircraft.CSurf[r] === undefined) {
                                    _aircraft.CSurf[r] = new THREE.Object3D
                                }
                                _aircraft.CSurf[r].add(A);
                                _aircraft.CSurf[r].hingeX = 0;
                                _aircraft.CSurf[r].hingey = 0;
                                _aircraft.CSurf[r].hingeZ = 0;
                                if (ad.pos !== undefined) {
                                    _aircraft.CSurf[r].propX = ad.pos[0] * O;
                                    _aircraft.CSurf[r].propY = ad.pos[1] * O;
                                    _aircraft.CSurf[r].propZ = ad.pos[2] * O
                                }
                                _aircraft.CSurf[r].rotationAxis = new THREE.Vector3(0, 0, 1);
                                ad.rotationAxis = new THREE.Vector3(0, 0, 1);
                                if (r.length > 9) {
                                    _aircraft.CSurf[r].rotationAxis.set(0, 1, 0);
                                    ad.rotationAxis.set(0, 1, 0)
                                }
                                _aircraft.CSurf[r].scale.set(O, O, O);
                                _aircraft.CSurf[r].up.set(0, 1, 0);
                                scene.add(_aircraft.CSurf[r])
                            }
                        } else {
                            if (w === "C_Elevator" || w === "C_Rudder" || w === "C_AileronL" || w === "C_AileronR" || w === "C_ElevonL" || w === "C_ElevonR" || w === "C_Canard") {
                                var r = w.substr(2);
                                if (_aircraft.CSurf[r] === undefined) {
                                    _aircraft.CSurf[r] = new THREE.Object3D
                                }
                                _aircraft.CSurf[r].add(A);
                                _aircraft.CSurf[r].hingeX = -ad.offset[0] * O;
                                _aircraft.CSurf[r].hingeY = -ad.offset[1] * O;
                                _aircraft.CSurf[r].hingeZ = -ad.offset[2] * O;
                                ad.rotationAxis = new THREE.Vector3(ad.hinge[1][0] - ad.hinge[0][0], ad.hinge[1][1] - ad.hinge[0][1], ad.hinge[1][2] - ad.hinge[0][2]).normalize();
                                _aircraft.CSurf[r].rotationAxis = new THREE.Vector3().copy(ad.rotationAxis);
                                _aircraft.CSurf[r].maxDeflection_rad = ad.maxDeflection_rad;
                                _aircraft.CSurf[r].scale.set(O, O, O);
                                _aircraft.CSurf[r].up.set(0, 1, 0);
                                scene.add(_aircraft.CSurf[r])
                            } else {
                                _aircraft.add(A)
                            }
                        }
                    }
                }
            }
        }
    }
    _aircraft.minx = 0;
    _aircraft.miny = 0;
    _aircraft.minz = 0;
    _aircraft.maxx = 0;
    _aircraft.maxy = 0;
    _aircraft.maxz = 0;
    for (var w in M.Sections) {
        if (M.Sections.hasOwnProperty(w)) {
            var ad = M.Sections[w];
            if (ad.minx !== undefined) {
                if (ad.minx < _aircraft.minx) {
                    _aircraft.minx = ad.minx
                }
                if (ad.miny < _aircraft.miny) {
                    _aircraft.miny = ad.miny
                }
                if (ad.minz < _aircraft.minz) {
                    _aircraft.minz = ad.minz
                }
                if (ad.maxx > _aircraft.maxx) {
                    _aircraft.maxx = ad.maxx
                }
                if (ad.maxy > _aircraft.maxy) {
                    _aircraft.maxy = ad.maxy
                }
                if (ad.maxz > _aircraft.maxz) {
                    _aircraft.maxz = ad.maxz
                }
            }
        }
    }
    if (M.Heli !== undefined) {
        _aircraft.Definition.RotorMax_radPs = _aircraft.Definition.RotorMaxRPM * 360 * Math.PI / 180;
        _aircraft.Definition.LRotor = _aircraft.Definition.NumRotors * (1 / 3 * _aircraft.Definition.RotorMass * _aircraft.Definition.RotorLength * _aircraft.Definition.RotorLength) * _aircraft.Definition.RotorMaxRPM * Math.PI / 180
    }
    _aircraft.maxRadius *= O;
    _aircraft.boundingSphere = new THREE.Sphere(new THREE.Vector3(), _aircraft.maxRadius);
    _aircraft.scale.set(O, O, O);
    _aircraft.up.set(0, 1, 0);
    scene.add(_aircraft)
}
_aircraftDef["3DWithAirfoil"] = {Name: "3D With Airfoil", DistanceUnits: "m", MassUnits: "kg", AreaUnits: "m2", ForceUnits: "N", EnginePower_N: 10, BodyDensity: 0.16, FoamThickness: 0.5, Scale: 1, rotationalDampingFactor: 0.99995, Sections: {C_PropellerRunning: {mass: 0, cylinder: [9 / 100, 9 / 100, 0.5 / 100], pos: [0, 0, -0.205], rot: [Math.PI / 2, 0, 0], color: 4210752, opacity: 0.2}, C_Propeller: {mass: 0, pts: [
    [0, 0, 0.205 - 0.205],
    [-0.005, 0.03, 0.205 - 0.2025],
    [-0.005, 0.06, 0.205 - 0.2025],
    [0, 0.09, 0.205 - 0.205],
    [0.005, 0.06, 0.205 - 0.2075],
    [0.005, 0.03, 0.205 - 0.2075],
    [0, 0, 0.205 - 0.205],
    [-0.005, -0.03, 0.205 - 0.2075],
    [-0.005, -0.06, 0.205 - 0.2075],
    [0, -0.09, 0.205 - 0.205],
    [0.005, -0.06, 0.205 - 0.2025],
    [0.005, -0.03, 0.205 - 0.2025]
], faces: [
    [0, 1, 5],
    [1, 2, 5],
    [2, 4, 5],
    [2, 3, 4],
    [6, 7, 11],
    [7, 8, 11],
    [8, 10, 11],
    [8, 9, 10]
], pos: [0, 0, -0.205], color: 3158064, opacity: 1}, S_Engine: {mass: (0.066), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, 0, -0.185], rot: [Math.PI / 2, 0, 0]}, S_Battery: {mass: (0.185 * 0.6), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, 0, 0.23], rot: [Math.PI / 2, 0, 0]}, S_FireWall: {calcWeight: 1, area: 0, pts: [
    [-0.03, 0.04, -0.18],
    [0.03, 0.04, -0.18],
    [0.03, -0.04, -0.18],
    [-0.03, -0.04, -0.18]
], faces: [
    [0, 1, 2],
    [0, 2, 3]
]}, S_WingL: {calcWeight: 1, area: 0, pts: [
    [-0.03, 0, -0.06],
    [(-18 - 22) / 100, 0, -0.06],
    [-0.03, 0.007, -0.04],
    [(-18 - 22) / 100, 0.001, -0.04],
    [-0.03, 0.007, 0],
    [(-18 - 22) / 100, 0.001, 0],
    [(-18 - 22) / 100, 0, 0.029],
    [-0.03, 0, 0.109],
    [-0.03, 0, -0.06],
    [(-18 - 22) / 100, 0, -0.06],
    [-0.03, -0.007, -0.04],
    [(-18 - 22) / 100, -0.001, -0.04],
    [-0.03, -0.007, 0],
    [(-18 - 22) / 100, -0.001, 0],
    [(-18 - 22) / 100, 0, 0.029],
    [-0.03, 0, 0.109]
], faces: [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],
    [4, 6, 7],
    [8, 9, 10],
    [9, 10, 11],
    [10, 11, 12],
    [11, 12, 13],
    [12, 13, 14],
    [12, 14, 15]
], color: 43520}, S_WingR: {calcWeight: 1, area: 0, pts: [
    [0.03, 0, -0.06],
    [(18 + 22) / 100, 0, -0.06],
    [0.03, 0.007, -0.04],
    [(18 + 22) / 100, 0.001, -0.04],
    [0.03, 0.007, 0],
    [(18 + 22) / 100, 0.001, 0],
    [(18 + 22) / 100, 0, 0.029],
    [0.03, 0, 0.109],
    [0.03, 0, -0.06],
    [(18 + 22) / 100, 0, -0.06],
    [0.03, -0.007, -0.04],
    [(18 + 22) / 100, -0.001, -0.04],
    [0.03, -0.007, 0],
    [(18 + 22) / 100, -0.001, 0],
    [(18 + 22) / 100, 0, 0.029],
    [0.03, 0, 0.109]
], faces: [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],
    [4, 6, 7],
    [8, 9, 10],
    [9, 10, 11],
    [10, 11, 12],
    [11, 12, 13],
    [12, 13, 14],
    [12, 14, 15]
], color: 11141120}, C_AileronL: {calcWeight: 2, area: 0, pts: [
    [-0.03, 0, 0.11],
    [(-18 - 22) / 100, 0, 0.03],
    [(-18 - 22) / 100, 0, 0.1],
    [-0.04, 0, 0.18]
], offset: [0.04, 0, -0.105], faces: [
    [0, 1, 2],
    [0, 2, 3]
], hinge: [
    [-0.03, 0, 0.11],
    [(-18 - 22) / 100, 0, 0.03]
], maxDeflection_rad: Math.PI / 4 / 2}, C_AileronR: {calcWeight: 2, area: 0, pts: [
    [(18 + 22) / 100, 0, 0.03],
    [0.03, 0, 0.11],
    [0.04, 0, 0.18],
    [(18 + 22) / 100, 0, 0.1]
], offset: [-0.04, 0, -0.105], faces: [
    [0, 1, 2],
    [0, 2, 3]
], hinge: [
    [0.03, 0, 0.11],
    [(18 + 22) / 100, 0, 0.03]
], maxDeflection_rad: Math.PI / 4 / 2}, S_BodyTopProfile: {calcWeight: 1, area: 0, pts: [
    [-0.03, 0.05, 0],
    [-0.03, 0.04, -0.18],
    [0.03, 0.04, -0.18],
    [0.03, 0.05, 0],
    [-0.03, 0.095, 0.1],
    [0.03, 0.095, 0.1],
    [0.03, 0.095, 0.2],
    [-0.03, 0.095, 0.2],
    [-0.005, 0.06, 0.45],
    [0.005, 0.06, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [4, 5, 6],
    [4, 6, 7],
    [6, 7, 8],
    [6, 8, 9]
]}, S_BodyCanopy: {calcWeight: 1, area: 0, pts: [
    [-0.0301, 0.05, 0],
    [0.0301, 0.05, 0],
    [0.0301, 0.095, 0.1],
    [-0.0301, 0.095, 0.1],
    [-0.0301, 0.05, 0],
    [-0.0301, 0.095, 0.1],
    [-0.0301, 0.07, 0.2],
    [0.0301, 0.05, 0],
    [0.0301, 0.095, 0.1],
    [0.0301, 0.07, 0.2]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], color: 192}, S_BodyBottomProfile: {calcWeight: 1, area: 0, pts: [
    [-0.03, -0.04, -0.18],
    [0.03, -0.04, -0.18],
    [0.03, -0.05, 0],
    [-0.03, -0.05, 0],
    [0.03, -0.05, 0.2],
    [-0.03, -0.05, 0.2],
    [-0.005, -0.03, 0.45],
    [0.005, -0.03, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],
    [4, 6, 7]
]}, S_BodyLSideProfile: {calcWeight: 1, area: 0, pts: [
    [-0.03, 0.04, -0.18],
    [-0.03, -0.04, -0.18],
    [-0.03, -0.05, 0],
    [-0.03, 0.05, 0],
    [-0.03, 0.095, 0.1],
    [-0.03, -0.05, 0.1],
    [-0.03, -0.05, 0.2],
    [-0.03, 0.095, 0.2],
    [-0.005, 0.06, 0.45],
    [-0.005, -0.03, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 3, 4],
    [2, 4, 5],
    [4, 5, 6],
    [4, 6, 7],
    [6, 7, 8],
    [6, 8, 9]
]}, S_BodyRSideProfile: {calcWeight: 1, area: 0, pts: [
    [0.03, 0.04, -0.18],
    [0.03, -0.04, -0.18],
    [0.03, -0.05, 0],
    [0.03, 0.05, 0],
    [0.03, 0.095, 0.1],
    [0.03, -0.05, 0.1],
    [0.03, -0.05, 0.2],
    [0.03, 0.095, 0.2],
    [0.005, 0.06, 0.45],
    [0.005, -0.03, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 3, 4],
    [2, 4, 5],
    [4, 5, 6],
    [4, 6, 7],
    [6, 7, 8],
    [6, 8, 9]
]}, S_HStab: {calcWeight: 2, area: 0, pts: [
    [0, 0.03, (-4 + 44) / 100],
    [-0.185, 0.03, (-1 + 44) / 100],
    [-0.185, 0.03, (2.9 + 44) / 100],
    [0.185, 0.03, (2.9 + 44) / 100],
    [0.185, 0.03, (-1 + 44) / 100]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4]
]}, C_Elevator: {calcWeight: 3, area: 0, pts: [
    [-0.185, 0.03, (3 + 44) / 100],
    [0.185, 0.03, (3 + 44) / 100],
    [0.185, 0.03, (44 + 10) / 100],
    [-0.185, 0.03, (44 + 10) / 100]
], offset: [0, -0.03, -0.47], faces: [
    [0, 1, 2],
    [0, 2, 3]
], hinge: [
    [-0.185, 0.03, (3 + 44) / 100],
    [0.185, 0.03, (3 + 44) / 100]
], maxDeflection_rad: Math.PI / 4}, S_VStab: {calcWeight: 2, area: 0, pts: [
    [0, 0, 0.36],
    [0, 0.16, 0.4],
    [0, 0.16, 0.449],
    [0, -0.03, 0.449]
], faces: [
    [0, 1, 2],
    [0, 2, 3]
]}, C_Rudder: {calcWeight: 3, area: 0, pts: [
    [0, -0.03, 0.45],
    [0, 0.16, 0.45],
    [0, 0.16, (45 + 6) / 100],
    [0, -0.01, (45 + 10) / 100]
], offset: [0, 0, -0.45], faces: [
    [0, 1, 2],
    [0, 2, 3]
], hinge: [
    [0, -0.03, 0.45],
    [0, 0.16, 0.45]
], maxDeflection_rad: Math.PI / 4}, S_Gear: {calcWeight: 0, area: 0, pts: [
    [-0.03, -0.048, -0.05],
    [-0.03, -0.048, 0],
    [(-3 - 6) / 100, (-5 - 6) / 100, -0.04],
    [0.03, -0.048, -0.05],
    [0.03, -0.048, 0],
    [(3 + 6) / 100, (-5 - 6) / 100, -0.04]
], faces: [
    [0, 1, 2],
    [3, 4, 5]
], color: 0}, S_LWheel: {mass: 0, cylinder: [0.025, 0.025, 0.01], pos: [(-3 - 6) / 100, (-5 - 6) / 100, -4 / 100], bottom: -0.135, rot: [0, 0, Math.PI / 2], color: 2105376}, S_RWheel: {mass: 0, cylinder: [0.025, 0.025, 0.01], pos: [(3 + 6) / 100, (-5 - 6) / 100, -4 / 100], bottom: -0.135, rot: [0, 0, Math.PI / 2], color: 2105376}, S_TailGear: {calcWeight: 0, area: 0, pts: [
    [0, -0.03, 0.42],
    [0, -0.05, 0.45],
    [0, -0.03, 0.44]
], faces: [
    [0, 1, 2]
], color: 0}, S_TailWheel: {mass: 0, cylinder: [0.01, 0.01, 0.005], pos: [0, -0.05, 0.45], bottom: -0.06, rot: [0, 0, Math.PI / 2], color: 2105376}}};
_aircraftDef["3DFlatWing"] = {Name: "Simple Foam Sheet Plane", DistanceUnits: "m", MassUnits: "kg", AreaUnits: "m2", ForceUnits: "N", EnginePower_N: 10, BodyDensity: 0.16, FoamThickness: 0.5, Scale: 1, rotationalDampingFactor: 0.99995, Sections: {C_PropellerRunning: {mass: 0, cylinder: [9 / 100, 9 / 100, 0.5 / 100], pos: [0, 0, -0.205], rot: [Math.PI / 2, 0, 0], color: 4210752, opacity: 0.2}, C_Propeller: {mass: 0, pts: [
    [0, 0, 0.205 - 0.205],
    [-0.005, 0.03, 0.205 - 0.2025],
    [-0.005, 0.06, 0.205 - 0.2025],
    [0, 0.09, 0.205 - 0.205],
    [0.005, 0.06, 0.205 - 0.2075],
    [0.005, 0.03, 0.205 - 0.2075],
    [0, 0, 0.205 - 0.205],
    [-0.005, -0.03, 0.205 - 0.2075],
    [-0.005, -0.06, 0.205 - 0.2075],
    [0, -0.09, 0.205 - 0.205],
    [0.005, -0.06, 0.205 - 0.2025],
    [0.005, -0.03, 0.205 - 0.2025]
], faces: [
    [0, 1, 5],
    [1, 2, 5],
    [2, 4, 5],
    [2, 3, 4],
    [6, 7, 11],
    [7, 8, 11],
    [8, 10, 11],
    [8, 9, 10]
], pos: [0, 0, -0.205], color: 3158064, opacity: 1}, S_Engine: {mass: (0.066), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, 0, -0.185], rot: [Math.PI / 2, 0, 0]}, S_Battery: {mass: (0.185), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, 0, 0.32], rot: [Math.PI / 2, 0, 0]}, S_FireWall: {calcWeight: 1, area: 0, pts: [
    [-0.03, 0.04, -0.18],
    [0.03, 0.04, -0.18],
    [0.03, -0.04, -0.18],
    [-0.03, -0.04, -0.18]
], faces: [
    [0, 1, 2],
    [0, 2, 3]
], normals: [
    [0, 0, -1],
    [0, 0, -1]
]}, S_WingL: {calcWeight: 2, area: 0, pts: [
    [-0.03, 0, -0.06],
    [(-18 - 22) / 100, 0, -0.06],
    [(-18 - 22) / 100, 0, 0.029],
    [-0.03, 0, 0.109]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 1, 2],
    [0, 2, 3],
    [0, 2, 1],
    [0, 3, 2],
    [0, 2, 1],
    [0, 3, 2]
], normals: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [-0.01, -1, 0],
    [-0.01, -1, 0],
    [-0.01, -1, 0],
    [-0.01, -1, 0]
], color: 43520}, S_WingR: {calcWeight: 2, area: 0, pts: [
    [0.03, 0, -0.06],
    [(18 + 22) / 100, 0, -0.06],
    [(18 + 22) / 100, 0, 0.029],
    [0.03, 0, 0.109]
], faces: [
    [0, 2, 1],
    [0, 3, 2],
    [0, 2, 1],
    [0, 3, 2],
    [0, 1, 2],
    [0, 2, 3],
    [0, 1, 2],
    [0, 2, 3]
], normals: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, -1, 0],
    [0, -1, 0],
    [0, -1, 0]
], color: 11141120}, C_AileronL: {calcWeight: 2, area: 0, pts: [
    [-0.03, 0, 0.11],
    [(-18 - 22) / 100, 0, 0.03],
    [(-18 - 22) / 100, 0, 0.1],
    [-0.04, 0, 0.18]
], offset: [0.04, 0, -0.105], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 2, 1],
    [0, 3, 2]
], normals: [
    [0, 1, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, -1, 0]
], hinge: [
    [-0.03, 0, 0.11],
    [(-18 - 22) / 100, 0, 0.03]
], maxDeflection_rad: Math.PI / 4 / 2}, C_AileronR: {calcWeight: 2, area: 0, pts: [
    [(18 + 22) / 100, 0, 0.03],
    [0.03, 0, 0.11],
    [0.04, 0, 0.18],
    [(18 + 22) / 100, 0, 0.1]
], offset: [-0.04, 0, -0.105], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 2, 1],
    [0, 3, 2]
], normals: [
    [0, 1, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, -1, 0]
], hinge: [
    [0.03, 0, 0.11],
    [(18 + 22) / 100, 0, 0.03]
], maxDeflection_rad: Math.PI / 4 / 2}, S_BodyTopProfile: {calcWeight: 1, area: 0, pts: [
    [-0.03, 0.05, 0],
    [-0.03, 0.04, -0.18],
    [0.03, 0.04, -0.18],
    [0.03, 0.05, 0],
    [-0.03, 0.095, 0.1],
    [0.03, 0.095, 0.1],
    [0.03, 0.095, 0.2],
    [-0.03, 0.095, 0.2],
    [-0.005, 0.06, 0.45],
    [0.005, 0.06, 0.45]
], faces: [
    [0, 2, 1],
    [0, 3, 2],
    [4, 6, 5],
    [4, 7, 6],
    [6, 7, 8],
    [6, 8, 9]
], normals: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
]}, S_BodyCanopy: {calcWeight: 1, area: 0, pts: [
    [-0.0301, 0.05, 0],
    [0.0301, 0.05, 0],
    [0.0301, 0.095, 0.1],
    [-0.0301, 0.095, 0.1],
    [-0.0301, 0.05, 0],
    [-0.0301, 0.095, 0.1],
    [-0.0301, 0.07, 0.2],
    [0.0301, 0.05, 0],
    [0.0301, 0.095, 0.1],
    [0.0301, 0.07, 0.2]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], color: 192}, S_BodyBottomProfile: {calcWeight: 1, area: 0, pts: [
    [-0.03, -0.04, -0.18],
    [0.03, -0.04, -0.18],
    [0.03, -0.05, 0],
    [-0.03, -0.05, 0],
    [0.03, -0.05, 0.2],
    [-0.03, -0.05, 0.2],
    [-0.005, -0.03, 0.45],
    [0.005, -0.03, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 4, 3],
    [3, 4, 5],
    [4, 6, 5],
    [4, 7, 6]
]}, S_BodyLSideProfile: {calcWeight: 1, area: 0, pts: [
    [-0.03, 0.04, -0.18],
    [-0.03, -0.04, -0.18],
    [-0.03, -0.05, 0],
    [-0.03, 0.05, 0],
    [-0.03, 0.095, 0.1],
    [-0.03, -0.05, 0.1],
    [-0.03, -0.05, 0.2],
    [-0.03, 0.095, 0.2],
    [-0.005, 0.06, 0.45],
    [-0.005, -0.03, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 4, 3],
    [2, 5, 4],
    [4, 5, 6],
    [4, 6, 7],
    [6, 8, 7],
    [6, 9, 8]
], normals: [
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0]
]}, S_BodyRSideProfile: {calcWeight: 1, area: 0, pts: [
    [0.03, 0.04, -0.18],
    [0.03, -0.04, -0.18],
    [0.03, -0.05, 0],
    [0.03, 0.05, 0],
    [0.03, 0.095, 0.1],
    [0.03, -0.05, 0.1],
    [0.03, -0.05, 0.2],
    [0.03, 0.095, 0.2],
    [0.005, 0.06, 0.45],
    [0.005, -0.03, 0.45]
], faces: [
    [0, 2, 1],
    [0, 3, 2],
    [2, 3, 4],
    [2, 4, 5],
    [4, 6, 5],
    [4, 7, 6],
    [6, 7, 8],
    [6, 8, 9]
], normals: [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0]
]}, S_HStab: {calcWeight: 2, area: 0, pts: [
    [0, 0.03, (-4 + 44) / 100],
    [-0.185, 0.03, (-1 + 44) / 100],
    [-0.185, 0.03, (2.9 + 44) / 100],
    [0.185, 0.03, (2.9 + 44) / 100],
    [0.185, 0.03, (-1 + 44) / 100]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 2, 1],
    [0, 3, 2],
    [0, 4, 3]
], normals: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, -1, 0],
    [0, -1, 0]
]}, C_Elevator: {calcWeight: 4, area: 0, pts: [
    [-0.185, 0.03, (3 + 44) / 100],
    [0.185, 0.03, (3 + 44) / 100],
    [0.185, 0.03, (44 + 10) / 100],
    [-0.185, 0.03, (44 + 10) / 100]
], offset: [0, -0.03, -0.47], faces: [
    [0, 2, 1],
    [0, 3, 2],
    [0, 1, 2],
    [0, 2, 3]
], normals: [
    [0, 1, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, -1, 0]
], hinge: [
    [-0.185, 0.03, (3 + 44) / 100],
    [0.185, 0.03, (3 + 44) / 100]
], maxDeflection_rad: Math.PI / 4}, S_VStab: {calcWeight: 2, area: 0, pts: [
    [0, 0, 0.36],
    [0, 0.16, 0.4],
    [0, 0.16, 0.449],
    [0, -0.03, 0.449]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 2, 1],
    [0, 3, 2]
], normals: [
    [1, 0, 0],
    [1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0]
]}, C_Rudder: {calcWeight: 4, area: 0, pts: [
    [0, -0.03, 0.45],
    [0, 0.16, 0.45],
    [0, 0.16, (45 + 6) / 100],
    [0, -0.01, (45 + 10) / 100]
], offset: [0, 0, -0.45], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 2, 1],
    [0, 3, 2]
], normals: [
    [1, 0, 0],
    [1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0]
], hinge: [
    [0, -0.03, 0.45],
    [0, 0.16, 0.45]
], maxDeflection_rad: Math.PI / 4}, S_Gear: {calcWeight: 0, area: 0, pts: [
    [-0.03, -0.048, -0.05],
    [-0.03, -0.048, 0],
    [(-3 - 6) / 100, (-5 - 6) / 100, -0.04],
    [0.03, -0.048, -0.05],
    [0.03, -0.048, 0],
    [(3 + 6) / 100, (-5 - 6) / 100, -0.04]
], faces: [
    [0, 1, 2],
    [3, 4, 5]
], color: 0}, S_LWheel: {mass: 0, cylinder: [0.025, 0.025, 0.01], pos: [(-3 - 6) / 100, (-5 - 6) / 100, -4 / 100], bottom: -0.135, rot: [0, 0, Math.PI / 2], color: 2105376}, S_RWheel: {mass: 0, cylinder: [0.025, 0.025, 0.01], pos: [(3 + 6) / 100, (-5 - 6) / 100, -4 / 100], bottom: -0.135, rot: [0, 0, Math.PI / 2], color: 2105376}, S_TailGear: {calcWeight: 0, area: 0, pts: [
    [0, -0.03, 0.42],
    [0, -0.05, 0.45],
    [0, -0.03, 0.44]
], faces: [
    [0, 1, 2]
], color: 0}, S_TailWheel: {mass: 0.005, cylinder: [0.01, 0.01, 0.005], pos: [0, -0.05, 0.45], bottom: -0.06, rot: [0, 0, Math.PI / 2], color: 2105376}}};
_aircraftDef["FT-Racer"] = {Name: "FT-Racer", DistanceUnits: "m", MassUnits: "kg", AreaUnits: "m2", ForceUnits: "N", EnginePower_N: 8.5, BodyDensity: 0.16, FoamThickness: 0.4, Scale: 1, rotationalDampingFactor: 0.9995, Sections: {C_PropellerRunning: {mass: 0, cylinder: [9 / 100, 9 / 100, 0.5 / 100], pos: [0, 0, -0.3 + 0.04], rot: [Math.PI / 2, 0, 0], color: 4210752, opacity: 0.2}, C_Propeller: {mass: 0, pts: [
    [0, 0, 0.205 - 0.205],
    [-0.005, 0.03, 0.205 - 0.2025],
    [-0.005, 0.06, 0.205 - 0.2025],
    [0, 0.09, 0.205 - 0.205],
    [0.005, 0.06, 0.205 - 0.2075],
    [0.005, 0.03, 0.205 - 0.2075],
    [0, 0, 0.205 - 0.205],
    [-0.005, -0.03, 0.205 - 0.2075],
    [-0.005, -0.06, 0.205 - 0.2075],
    [0, -0.09, 0.205 - 0.205],
    [0.005, -0.06, 0.205 - 0.2025],
    [0.005, -0.03, 0.205 - 0.2025]
], faces: [
    [0, 1, 5],
    [1, 2, 5],
    [2, 4, 5],
    [2, 3, 4],
    [6, 7, 11],
    [7, 8, 11],
    [8, 10, 11],
    [8, 9, 10]
], pos: [0, 0, -0.3 + 0.04], color: 3158064, opacity: 1}, S_Engine: {mass: (0.066), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, 0, -0.2725 + 0.04], rot: [Math.PI / 2, 0, 0]}, S_Battery: {mass: (0.185), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, 0, 0.12], rot: [Math.PI / 2, 0, 0]}, S_FireWall: {calcWeight: 1, area: 0, pts: [
    [-0.04, 0.04, -0.26 + 0.04],
    [0.04, 0.04, -0.26 + 0.04],
    [0.04, -0.04, -0.26 + 0.04],
    [-0.04, -0.04, -0.26 + 0.04]
], faces: [
    [0, 1, 2],
    [0, 2, 3]
], normals: [
    [0, 0, -1],
    [0, 0, -1]
]}, S_WingL: {calcWeight: 2, area: 0, pts: [
    [-0.05, -0.03, -0.11 + 0.01 + 0.04],
    [-0.05, -0.03, 0.1 + 0.04],
    [-0.05 - 0.21, -0.03, 0.1 + 0.04],
    [-0.05 - 0.21, -0.03, 0.1 - 0.033 + 0.04],
    [-0.05 - 0.43, -0.03, 0.1 - 0.033 + 0.04],
    [-0.05 - 0.43, -0.03, 0.1 + 0.04],
    [-0.05 - 0.46, -0.03, 0.1 + 0.04],
    [-0.05 - 0.46, -0.03, -0.05 + 0.01 + 0.04],
    [-0.05 - 0.46, -0.03 + 0.02, -0.025 + 0.04],
    [-0.05 - 0.46, -0.03 + 0.02, 0 + 0.04],
    [-0.05, -0.03 + 0.02, 0 + 0.04],
    [-0.05, -0.03 + 0.02, -0.06 + 0.04],
    [-0.05 - 0.21, -0.03 + 0.008, 0.1 - 0.033 + 0.04],
    [-0.05 - 0.43, -0.03 + 0.008, 0.1 - 0.033 + 0.04],
    [-0.05, -0.02, -0.11 + 0.04],
    [-0.05 - 0.46, -0.02, -0.05 + 0.04]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 7],
    [3, 4, 7],
    [4, 6, 7],
    [4, 5, 6],
    [0, 7, 15],
    [0, 15, 14],
    [14, 15, 8],
    [14, 8, 11],
    [8, 9, 11],
    [9, 10, 11],
    [1, 10, 12],
    [1, 2, 12],
    [9, 10, 12],
    [9, 12, 13],
    [6, 9, 13],
    [5, 6, 13]
], color: 43520}, S_WingR: {calcWeight: 2, area: 0, pts: [
    [0.05, -0.03, -0.11 + 0.01 + 0.04],
    [0.05, -0.03, 0.1 + 0.04],
    [0.05 + 0.21, -0.03, 0.1 + 0.04],
    [0.05 + 0.21, -0.03, 0.1 - 0.033 + 0.04],
    [0.05 + 0.43, -0.03, 0.1 - 0.033 + 0.04],
    [0.05 + 0.43, -0.03, 0.1 + 0.04],
    [0.05 + 0.46, -0.03, 0.1 + 0.04],
    [0.05 + 0.46, -0.03, -0.05 + 0.01 + 0.04],
    [0.05 + 0.46, -0.03 + 0.02, -0.025 + 0.04],
    [0.05 + 0.46, -0.03 + 0.02, 0 + 0.04],
    [0.05, -0.03 + 0.02, 0 + 0.04],
    [0.05, -0.03 + 0.02, -0.06 + 0.04],
    [0.05 + 0.21, -0.03 + 0.008, 0.1 - 0.033 + 0.04],
    [0.05 + 0.43, -0.03 + 0.008, 0.1 - 0.033 + 0.04],
    [0.05, -0.02, -0.11 + 0.04],
    [0.05 + 0.46, -0.02, -0.05 + 0.04]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 7],
    [3, 4, 7],
    [4, 6, 7],
    [4, 5, 6],
    [0, 7, 15],
    [0, 15, 14],
    [14, 15, 8],
    [14, 8, 11],
    [8, 9, 11],
    [9, 10, 11],
    [1, 10, 12],
    [1, 2, 12],
    [9, 10, 12],
    [9, 12, 13],
    [6, 9, 13],
    [5, 6, 13]
], color: 11141120}, C_AileronL: {calcWeight: 2, area: 0, pts: [
    [-0.05 - 0.21, -0.03 + 0, 0.1 + 0.04],
    [-0.05 - 0.21, -0.03 + 0.008, 0.1 - 0.033 + 0.04],
    [-0.05 - 0.43, -0.03 + 0.008, 0.1 - 0.033 + 0.04],
    [-0.05 - 0.43, -0.03 + 0, 0.1 + 0.04]
], offset: [0, +0.03 - 0.008, -(0.1 - 0.033 + 0.04)], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 2, 1],
    [0, 3, 2]
], normals: [
    [0, 1, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, -1, 0]
], hinge: [
    [0, 0, 0],
    [-1, 0, 0]
], maxDeflection_rad: 20 * Math.PI / 180}, C_AileronR: {calcWeight: 2, area: 0, pts: [
    [0.05 + 0.21, -0.03 + 0, 0.1 + 0.04],
    [0.05 + 0.21, -0.03 + 0.008, 0.1 - 0.033 + 0.04],
    [0.05 + 0.43, -0.03 + 0.008, 0.1 - 0.033 + 0.04],
    [0.05 + 0.43, -0.03 + 0, 0.1 + 0.04]
], offset: [0, +0.03 - 0.008, -(0.1 - 0.033 + 0.04)], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 2, 1],
    [0, 3, 2]
], normals: [
    [0, 1, 0],
    [0, 1, 0],
    [0, -1, 0],
    [0, -1, 0]
], hinge: [
    [0, 0, 0],
    [1, 0, 0]
], maxDeflection_rad: 20 * Math.PI / 180}, S_BodyTopProfile: {calcWeight: 1, area: 0, pts: [
    [-0.05, 0.05, -0.16 + 0.04],
    [-0.04, 0.04, -0.27 + 0.04],
    [0.04, 0.04, -0.27 + 0.04],
    [0.05, 0.05, -0.16 + 0.04],
    [-0.05, 0.095, 0.1 + 0.04],
    [0.05, 0.095, 0.1 + 0.04],
    [0.05, 0.095, 0.11 + 0.04],
    [-0.05, 0.095, 0.11 + 0.04],
    [-0.005, 0.03, 0.45 + 0.04],
    [0.005, 0.03, 0.45 + 0.04]
], faces: [
    [0, 2, 1],
    [0, 3, 2],
    [4, 6, 5],
    [4, 7, 6],
    [6, 7, 8],
    [6, 8, 9]
], normals: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]
]}, S_BodyCanopy: {calcWeight: 1, area: 0, pts: [
    [-0.0501, 0.05, -0.16 + 0.04],
    [0.0501, 0.05, -0.16 + 0.04],
    [0.0501, 0.095, 0.1 + 0.04],
    [-0.0501, 0.095, 0.1 + 0.04],
    [-0.0501, 0.05, -0.16 + 0.04],
    [-0.0501, 0.095, 0.1 + 0.04],
    [-0.0501, 0.06, 0.09 + 0.04],
    [0.0501, 0.05, -0.16 + 0.04],
    [0.0501, 0.095, 0.1 + 0.04],
    [0.0501, 0.06, 0.09 + 0.04]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
], color: 192}, S_BodyBottomProfile: {calcWeight: 1, area: 0, pts: [
    [-0.04, -0.04, -0.27 + 0.04],
    [0.04, -0.04, -0.27 + 0.04],
    [0.05, -0.05, -0.16 + 0.04],
    [-0.05, -0.05, -0.16 + 0.04],
    [0.05, -0.05, 0.11 + 0.04],
    [-0.05, -0.05, 0.11 + 0.04],
    [-0.005, -0.025, 0.45 + 0.04],
    [0.005, -0.025, 0.45 + 0.04]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 4, 3],
    [3, 4, 5],
    [4, 6, 5],
    [4, 7, 6]
]}, S_BodyLSideProfile: {calcWeight: 1, area: 0, pts: [
    [-0.04, 0.04, -0.27 + 0.04],
    [-0.04, -0.04, -0.27 + 0.04],
    [-0.05, -0.05, -0.16 + 0.04],
    [-0.05, 0.05, -0.16 + 0.04],
    [-0.05, 0.095, 0.1 + 0.04],
    [-0.05, -0.05, 0.1 + 0.04],
    [-0.05, -0.05, 0.11 + 0.04],
    [-0.05, 0.095, 0.11 + 0.04],
    [-0.005, 0.03, 0.45 + 0.04],
    [-0.005, -0.025, 0.45 + 0.04]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 4, 3],
    [2, 5, 4],
    [4, 5, 6],
    [4, 6, 7],
    [6, 8, 7],
    [6, 9, 8]
], normals: [
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0],
    [-1, 0, 0]
]}, S_BodyRSideProfile: {calcWeight: 1, area: 0, pts: [
    [0.04, 0.04, -0.27 + 0.04],
    [0.04, -0.04, -0.27 + 0.04],
    [0.05, -0.05, -0.16 + 0.04],
    [0.05, 0.05, -0.16 + 0.04],
    [0.05, 0.095, 0.1 + 0.04],
    [0.05, -0.05, 0.1 + 0.04],
    [0.05, -0.05, 0.11 + 0.04],
    [0.05, 0.095, 0.11 + 0.04],
    [0.005, 0.03, 0.45 + 0.04],
    [0.005, -0.025, 0.45 + 0.04]
], faces: [
    [0, 2, 1],
    [0, 3, 2],
    [2, 3, 4],
    [2, 4, 5],
    [4, 6, 5],
    [4, 7, 6],
    [6, 7, 8],
    [6, 8, 9]
], normals: [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0]
]}, S_HStab: {calcWeight: 2, area: 0, pts: [
    [0, 0.02, 0.39 + 0.04],
    [-0.17, 0.02, 0.4225 + 0.04],
    [-0.17, 0.02, 0.46 + 0.04],
    [0, 0.02, 0.46 + 0.04],
    [0.17, 0.02, 0.46 + 0.04],
    [0.17, 0.02, 0.4225 + 0.04]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5]
]}, C_Elevator: {calcWeight: 6, area: 0, pts: [
    [-0.17, 0.02, 0.46 + 0.04],
    [-0.17, 0.02, 0.47 + 0.04],
    [0, 0.02, 0.46 + 0.04 + 0.04],
    [0.17, 0.02, 0.47 + 0.04],
    [0.17, 0.02, 0.46 + 0.04]
], offset: [0, -0.02, -(0.46 + 0.04)], faces: [
    [0, 1, 2],
    [2, 3, 4],
    [0, 2, 4]
], hinge: [
    [0, 0, 0],
    [1, 0, 0]
], color: 2105552, maxDeflection_rad: 35 * Math.PI / 180}, S_VStab: {calcWeight: 2, area: 0, pts: [
    [0, 0.02, 0.39 + 0.04],
    [0, 0.02 + 0.15, 0.51 + 0.04],
    [0, 0.02 + 0.15, 0.57 + 0.04],
    [0, 0.02 - 0.045, 0.53 + 0.04],
    [0, 0.02 - 0.045, 0.45 + 0.04]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4]
]}, S_Gear: {calcWeight: 0, area: 0, pts: [
    [-0.03, -0.048, -0.1 + 0.04],
    [-0.03, -0.048, -0.07 + 0.04],
    [(-3 - 6) / 100, (-5 - 6) / 100, -0.1 + 0.04],
    [0.03, -0.048, -0.1 + 0.04],
    [0.03, -0.048, -0.07 + 0.04],
    [(3 + 6) / 100, (-5 - 6) / 100, -0.1 + 0.04]
], faces: [
    [0, 1, 2],
    [3, 4, 5]
], color: 0}, S_LWheel: {mass: 0, cylinder: [0.025, 0.025, 0.01], pos: [(-3 - 6) / 100, (-5 - 6) / 100, -10 / 100 + 0.04], bottom: -0.135, rot: [0, 0, Math.PI / 2], color: 2105376}, S_RWheel: {mass: 0, cylinder: [0.025, 0.025, 0.01], pos: [(3 + 6) / 100, (-5 - 6) / 100, -10 / 100 + 0.04], bottom: -0.135, rot: [0, 0, Math.PI / 2], color: 2105376}, S_TailGear: {calcWeight: 0, area: 0, pts: [
    [0, -0.025, 0.42 + 0.04],
    [0, -0.045, 0.45 + 0.04],
    [0, -0.025, 0.44 + 0.04]
], faces: [
    [0, 1, 2]
], color: 0}, S_TailWheel: {mass: 0.005, cylinder: [0.01, 0.01, 0.005], pos: [0, -0.045, 0.45 + 0.04], bottom: -0.055, rot: [0, 0, Math.PI / 2], color: 2105376}}};
_aircraftDef["FT-RacerX2"] = JSON.parse(JSON.stringify(_aircraftDef["FT-Racer"]));
_aircraftDef["FT-RacerX2"].Scale = 2;
_aircraftDef["3DWithAirfoilX2"] = JSON.parse(JSON.stringify(_aircraftDef["3DWithAirfoil"]));
_aircraftDef["3DWithAirfoilX2"].Scale = 2;
_aircraftDef.Glider2Ch = {Name: "Glider 2 Channel", DistanceUnits: "m", MassUnits: "kg", AreaUnits: "m2", ForceUnits: "N", BodyDensity: (0.16 * 4 / 5), FoamThickness: 0.4, Scale: 1, Sections: {S_Battery: {mass: (0.185 / 2), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, 0, -0.07], rot: [Math.PI / 2, 0, 0]}, S_NoseCone: {calcWeight: 1, area: 0, pts: [
    [0, 0, -0.22],
    [-0.02, 0.02, -0.18],
    [0.02, 0.02, -0.18],
    [0.02, -0.02, -0.18],
    [-0.02, -0.02, -0.18]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 1]
]}, S_WingL: {calcWeight: 1, area: 0, pts: [
    [0, 0.02, -0.045],
    [0, 0.025, -0.06],
    [0, 0.03, -0.045],
    [0, 0.03, 0],
    [0, 0.02, 0.069],
    [-0.5, 0.06, -0.045],
    [-0.5, 0.065, -0.06],
    [-0.5, 0.07, -0.045],
    [-0.5, 0.07, 0],
    [-0.5, 0.06, 0.069],
    [-1, 0.19, -0.045],
    [-1, 0.19, 0.03],
    [-1, 0.195, -0.065],
    [-1, 0.2, -0.045],
    [-1, 0.2, -0.03]
], faces: [
    [0, 1, 5],
    [0, 5, 6],
    [1, 2, 7],
    [1, 6, 7],
    [2, 3, 8],
    [2, 7, 8],
    [3, 4, 8],
    [4, 8, 9],
    [0, 4, 9],
    [5, 9, 0],
    [5, 6, 10],
    [6, 10, 12],
    [6, 7, 13],
    [6, 12, 13],
    [7, 8, 14],
    [7, 13, 14],
    [8, 9, 11],
    [8, 11, 14],
    [5, 9, 11],
    [5, 10, 11]
], color: 43520}, S_WingR: {calcWeight: 1, area: 0, pts: [
    [0, 0.02, -0.045],
    [0, 0.025, -0.06],
    [0, 0.03, -0.045],
    [0, 0.03, 0],
    [0, 0.02, 0.069],
    [0.5, 0.06, -0.045],
    [0.5, 0.065, -0.06],
    [0.5, 0.07, -0.045],
    [0.5, 0.07, 0],
    [0.5, 0.06, 0.069],
    [1, 0.19, -0.045],
    [1, 0.19, 0.03],
    [1, 0.195, -0.065],
    [1, 0.2, -0.045],
    [1, 0.2, -0.03]
], faces: [
    [0, 1, 5],
    [0, 5, 6],
    [1, 2, 7],
    [1, 6, 7],
    [2, 3, 8],
    [2, 7, 8],
    [3, 4, 8],
    [4, 8, 9],
    [0, 4, 9],
    [5, 9, 0],
    [5, 6, 10],
    [6, 10, 12],
    [6, 7, 13],
    [6, 12, 13],
    [7, 8, 14],
    [7, 13, 14],
    [8, 9, 11],
    [8, 11, 14],
    [5, 9, 11],
    [5, 10, 11]
], color: 11141120}, S_BodyTopProfile: {calcWeight: 1, area: 0, pts: [
    [-0.02, 0.02, -0.18],
    [0.02, 0.02, -0.18],
    [0.02, 0.02, 0],
    [-0.02, 0.02, 0],
    [0.02, 0.02, 0.2],
    [-0.02, 0.02, 0.2],
    [-0.005, 0.02, 0.45],
    [0.005, 0.02, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 4, 3],
    [3, 4, 5],
    [4, 6, 5],
    [4, 7, 6]
], color: 6741248}, S_BodyBottomProfile: {calcWeight: 1, area: 0, pts: [
    [-0.02, -0.02, -0.18],
    [0.02, -0.02, -0.18],
    [0.02, -0.02, 0],
    [-0.02, -0.02, 0],
    [0.02, -0.02, 0.2],
    [-0.02, -0.02, 0.2],
    [-0.005, -0.02, 0.45],
    [0.005, -0.02, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 4, 3],
    [3, 4, 5],
    [4, 6, 5],
    [4, 7, 6]
], color: 6741248}, S_BodyLSideProfile: {calcWeight: 1, area: 0, pts: [
    [-0.02, 0.02, -0.18],
    [-0.02, -0.02, -0.18],
    [-0.02, -0.02, 0],
    [-0.02, 0.02, 0],
    [-0.02, 0.02, 0.1],
    [-0.02, -0.02, 0.1],
    [-0.02, -0.02, 0.2],
    [-0.02, 0.02, 0.2],
    [-0.005, 0.02, 0.45],
    [-0.005, -0.02, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 4, 3],
    [2, 5, 4],
    [4, 5, 6],
    [4, 6, 7],
    [6, 8, 7],
    [6, 9, 8]
], color: 6741248}, S_BodyRSideProfile: {calcWeight: 1, area: 0, pts: [
    [0.02, 0.02, -0.18],
    [0.02, -0.02, -0.18],
    [0.02, -0.02, 0],
    [0.02, 0.02, 0],
    [0.02, 0.02, 0.1],
    [0.02, -0.02, 0.1],
    [0.02, -0.02, 0.2],
    [0.02, 0.02, 0.2],
    [0.005, 0.02, 0.45],
    [0.005, -0.02, 0.45]
], faces: [
    [0, 2, 1],
    [0, 3, 2],
    [2, 3, 4],
    [2, 4, 5],
    [4, 6, 5],
    [4, 7, 6],
    [6, 7, 8],
    [6, 8, 9]
], color: 6741248}, C_Elevator: {calcWeight: 4, area: 0, pts: [
    [-0.185, 0.13, (-3 + 44) / 100],
    [0.185, 0.13, (-3 + 44) / 100],
    [0.185, 0.132, (44 + 9) / 100],
    [-0.185, 0.132, (44 + 9) / 100]
], offset: [0, -0.13, -0.47], faces: [
    [0, 2, 1],
    [0, 3, 2]
], hinge: [
    [-0.185, 0, (6 + 44) / 100],
    [0.185, 0, (6 + 44) / 100]
], maxDeflection_rad: Math.PI / 4 / 2}, S_VStab: {calcWeight: 2, area: 0, pts: [
    [0, 0, 0.36],
    [0, 0.13, 0.4],
    [0, 0.13, 0.449],
    [0, -0.03, 0.449]
], faces: [
    [0, 1, 2],
    [0, 2, 3]
], color: 56763}, C_Rudder: {calcWeight: 4, area: 0, pts: [
    [0, -0.01, 0.45],
    [0, 0.13, 0.45],
    [0, 0.13, (45 + 9) / 100],
    [0, -0.01, (45 + 9) / 100]
], offset: [0, 0, -0.45], faces: [
    [0, 1, 2],
    [0, 2, 3]
], hinge: [
    [0, -0.03, 0.45],
    [0, 0.16, 0.45]
], maxDeflection_rad: Math.PI / 4}}};
_aircraftDef.Glider3Ch = {Name: "Glider with Ailerons", DistanceUnits: "m", MassUnits: "kg", AreaUnits: "m2", ForceUnits: "N", BodyDensity: (0.16 * 4 / 5), FoamThickness: 0.4, Scale: 1, Sections: {S_Battery: {mass: (0.185 / 2), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, 0, -0.07], rot: [Math.PI / 2, 0, 0]}, S_NoseCone: {calcWeight: 1, area: 0, pts: [
    [0, 0, -0.22],
    [-0.02, 0.02, -0.18],
    [0.02, 0.02, -0.18],
    [0.02, -0.02, -0.18],
    [-0.02, -0.02, -0.18]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 1]
]}, S_WingL: {calcWeight: 1, area: 0, pts: [
    [0, 0.02, -0.045],
    [0, 0.025, -0.06],
    [0, 0.03, -0.045],
    [0, 0.03, 0],
    [0, 0.02, 0.049],
    [-0.9, 0.02, -0.045],
    [-0.9, 0.025, -0.06],
    [-0.9, 0.03, -0.045],
    [-0.9, 0.03, 0],
    [-0.9, 0.02, 0.049]
], faces: [
    [0, 1, 5],
    [0, 5, 6],
    [1, 2, 7],
    [1, 6, 7],
    [2, 3, 8],
    [2, 7, 8],
    [3, 4, 8],
    [4, 8, 9],
    [0, 4, 9],
    [5, 9, 0]
], color: 43520}, S_WingR: {calcWeight: 1, area: 0, pts: [
    [0, 0.02, -0.045],
    [0, 0.025, -0.06],
    [0, 0.03, -0.045],
    [0, 0.03, 0],
    [0, 0.02, 0.049],
    [0.9, 0.02, -0.045],
    [0.9, 0.025, -0.06],
    [0.9, 0.03, -0.045],
    [0.9, 0.03, 0],
    [0.9, 0.02, 0.049]
], faces: [
    [0, 1, 5],
    [0, 5, 6],
    [1, 2, 7],
    [1, 6, 7],
    [2, 3, 8],
    [2, 7, 8],
    [3, 4, 8],
    [4, 8, 9],
    [0, 4, 9],
    [5, 9, 0]
], color: 11141120}, C_AileronL: {calcWeight: 2, area: 0, pts: [
    [-0.02, 0.02, 0.049],
    [-0.02, 0.02, 0.079],
    [-0.9, 0.02, 0.049],
    [-0.9, 0.02, 0.079]
], offset: [0.02, -0.02, -0.049], faces: [
    [0, 1, 2],
    [1, 2, 3]
], hinge: [
    [-0.02, 0.02, 0.049],
    [-0.8, 0.02, 0.049]
], maxDeflection_rad: 15 * Math.PI / 180}, C_AileronR: {calcWeight: 2, area: 0, pts: [
    [0.02, 0.02, 0.049],
    [0.02, 0.02, 0.079],
    [0.9, 0.02, 0.049],
    [0.9, 0.02, 0.079]
], offset: [-0.02, -0.02, -0.049], faces: [
    [0, 1, 2],
    [1, 2, 3]
], hinge: [
    [0.02, 0.02, 0.049],
    [0.8, 0.02, 0.049]
], maxDeflection_rad: 15 * Math.PI / 180}, S_BodyTopProfile: {calcWeight: 1, area: 0, pts: [
    [-0.02, 0.02, -0.18],
    [0.02, 0.02, -0.18],
    [0.02, 0.02, 0],
    [-0.02, 0.02, 0],
    [0.02, 0.02, 0.2],
    [-0.02, 0.02, 0.2],
    [-0.005, 0.02, 0.45],
    [0.005, 0.02, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 4, 3],
    [3, 4, 5],
    [4, 6, 5],
    [4, 7, 6]
], color: 6741248}, S_BodyBottomProfile: {calcWeight: 1, area: 0, pts: [
    [-0.02, -0.02, -0.18],
    [0.02, -0.02, -0.18],
    [0.02, -0.02, 0],
    [-0.02, -0.02, 0],
    [0.02, -0.02, 0.2],
    [-0.02, -0.02, 0.2],
    [-0.005, -0.02, 0.45],
    [0.005, -0.02, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 4, 3],
    [3, 4, 5],
    [4, 6, 5],
    [4, 7, 6]
], color: 6741248}, S_BodyLSideProfile: {calcWeight: 1, area: 0, pts: [
    [-0.02, 0.02, -0.18],
    [-0.02, -0.02, -0.18],
    [-0.02, -0.02, 0],
    [-0.02, 0.02, 0],
    [-0.02, 0.02, 0.1],
    [-0.02, -0.02, 0.1],
    [-0.02, -0.02, 0.2],
    [-0.02, 0.02, 0.2],
    [-0.005, 0.02, 0.45],
    [-0.005, -0.02, 0.45]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 4, 3],
    [2, 5, 4],
    [4, 5, 6],
    [4, 6, 7],
    [6, 8, 7],
    [6, 9, 8]
], color: 6741248}, S_BodyRSideProfile: {calcWeight: 1, area: 0, pts: [
    [0.02, 0.02, -0.18],
    [0.02, -0.02, -0.18],
    [0.02, -0.02, 0],
    [0.02, 0.02, 0],
    [0.02, 0.02, 0.1],
    [0.02, -0.02, 0.1],
    [0.02, -0.02, 0.2],
    [0.02, 0.02, 0.2],
    [0.005, 0.02, 0.45],
    [0.005, -0.02, 0.45]
], faces: [
    [0, 2, 1],
    [0, 3, 2],
    [2, 3, 4],
    [2, 4, 5],
    [4, 6, 5],
    [4, 7, 6],
    [6, 7, 8],
    [6, 8, 9]
], color: 6741248}, C_Elevator: {calcWeight: 4, area: 0, pts: [
    [-0.185, 0.13, (-3 + 44) / 100],
    [0.185, 0.13, (-3 + 44) / 100],
    [0.185, 0.132, (44 + 9) / 100],
    [-0.185, 0.132, (44 + 9) / 100]
], offset: [0, -0.13, -0.47], faces: [
    [0, 2, 1],
    [0, 3, 2]
], hinge: [
    [-0.185, 0, (6 + 44) / 100],
    [0.185, 0, (6 + 44) / 100]
], maxDeflection_rad: Math.PI / 4 / 2}, S_VStab: {calcWeight: 2, area: 0, pts: [
    [0, 0, 0.36],
    [0, 0.13, 0.4],
    [0, 0.13, 0.449],
    [0, -0.03, 0.449]
], faces: [
    [0, 1, 2],
    [0, 2, 3]
], color: 56763}, C_Rudder: {calcWeight: 4, area: 0, pts: [
    [0, -0.01, 0.45],
    [0, 0.13, 0.45],
    [0, 0.13, (45 + 9) / 100],
    [0, -0.01, (45 + 9) / 100]
], offset: [0, 0, -0.45], faces: [
    [0, 1, 2],
    [0, 2, 3]
], hinge: [
    [0, -0.03, 0.45],
    [0, 0.16, 0.45]
], maxDeflection_rad: Math.PI / 4}}};
_aircraftDef.Glider2ChX2 = JSON.parse(JSON.stringify(_aircraftDef.Glider2Ch));
_aircraftDef.Glider2ChX2.Scale = 2;
_aircraftDef.Glider3ChX2 = JSON.parse(JSON.stringify(_aircraftDef.Glider3Ch));
_aircraftDef.Glider3ChX2.Scale = 2;
_aircraftDef["FT-22"] = {Name: "Flite Test FT 22", DistanceUnits: "m", MassUnits: "kg", AreaUnits: "m2", ForceUnits: "N", EnginePower_N: 8, BodyDensity: (0.16 * 4 / 5), FoamThickness: 0.4, Scale: 1, rotationalDampingFactor: 0.995, Sections: {C_PropellerRunning: {mass: 0, cylinder: [9 / 100, 9 / 100, 0.5 / 100], pos: [0, 0.025, 0.12 - 0.005], rot: [Math.PI / 2, 0, 0], color: 4210752, opacity: 0.2}, C_Propeller: {mass: 0, pts: [
    [0, 0, -0.005],
    [-0.005, 0.03, -0.0025],
    [-0.005, 0.06, -0.0025],
    [0, 0.09, -0.005],
    [0.005, 0.06, -0.0075],
    [0.005, 0.03, -0.0075],
    [0, 0, -0.005],
    [-0.005, -0.03, -0.0075],
    [-0.005, -0.06, -0.0075],
    [0, -0.09, -0.005],
    [0.005, -0.06, -0.0025],
    [0.005, -0.03, -0.0025]
], faces: [
    [0, 1, 5],
    [1, 2, 5],
    [2, 4, 5],
    [2, 3, 4],
    [6, 7, 11],
    [7, 8, 11],
    [8, 10, 11],
    [8, 9, 10]
], pos: [0, 0.025, 0.12], color: 3158064, opacity: 1}, S_Engine: {mass: (0.066 / 2), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, 0.025, 0.079], rot: [Math.PI / 2 - 5 * Math.PI / 180, 0, 0]}, S_Battery: {mass: (0.185 / 2), cylinder: [1.25 / 100, 1.25 / 100, 8 / 100], pos: [0, 0, -0.02], rot: [Math.PI / 2, 0, 0]}, S_WingL: {calcWeight: 3, area: 0, pts: [
    [0, 0.0165, -0.1683],
    [-0.0858, 0.0165, -0.1386],
    [-0.1122, 0.0165, 0.0099],
    [0, 0.0165, 0.0957],
    [-0.1122, 0.0165, 0.0891],
    [-0.3168, 0.0165, 0.1485],
    [-0.1287, 0.0165, 0.1551],
    [0, 0.0165, 0.1452],
    [0, 0.0165, 0.3036],
    [-0.132, 0.0165, 0.3036],
    [-0.2706, 0.0165, 0.2607],
    [-0.3168, 0.0165, 0.2013]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 3, 4],
    [2, 4, 5],
    [4, 5, 6],
    [5, 6, 11],
    [6, 10, 11],
    [6, 9, 10],
    [6, 8, 9],
    [6, 7, 8]
], color: 43520}, S_WingR: {calcWeight: 3, area: 0, pts: [
    [0, 0.0165, -0.1683],
    [0.0858, 0.0165, -0.1386],
    [0.1122, 0.0165, 0.0099],
    [0, 0.0165, 0.0957],
    [0.1122, 0.0165, 0.0891],
    [0.3168, 0.0165, 0.1485],
    [0.1287, 0.0165, 0.1551],
    [0, 0.0165, 0.1452],
    [0, 0.0165, 0.3036],
    [0.132, 0.0165, 0.3036],
    [0.2706, 0.0165, 0.2607],
    [0.3168, 0.0165, 0.2013]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [2, 3, 4],
    [2, 4, 5],
    [4, 5, 6],
    [5, 6, 11],
    [6, 10, 11],
    [6, 9, 10],
    [6, 8, 9],
    [6, 7, 8]
], color: 11141120}, S_Canopy: {calcWeight: 1, area: 0, pts: [
    [-0.0231, 0, -0.396],
    [-0.0231, 0.0165, -0.363],
    [-0.0231, -0.0231, -0.363],
    [-0.0231, -0.033, -0.3135],
    [-0.0231, 0.033, -0.2937],
    [-0.0231, 0.0528, -0.2541],
    [-0.0231, 0.066, -0.2145],
    [-0.0231, 0.0594, -0.165],
    [-0.0231, -0.033, -0.1419],
    [-0.0231, 0.0429, -0.1056],
    [-0.0231, 0.0165, -0.066],
    [-0.0231, 0.0426, 0.0792],
    [-0.0231, 0.0165, 0.0792],
    [0.0231, 0, -0.396],
    [0.0231, -0.0231, -0.363],
    [0.0231, 0.0165, -0.363],
    [0.0231, -0.033, -0.3135],
    [0.0231, 0.033, -0.2937],
    [0.0231, 0.0528, -0.2541],
    [0.0231, 0.066, -0.2145],
    [0.0231, 0.0594, -0.165],
    [0.0231, -0.033, -0.1419],
    [0.0231, 0.0429, -0.1056],
    [0.0231, 0.0165, -0.066],
    [0.0231, 0.0426, 0.0792],
    [0.0231, 0.0165, 0.0792],
], faces: [
    [4, 5, 6],
    [4, 6, 7],
    [4, 7, 9],
    [17, 18, 19],
    [17, 19, 20],
    [17, 20, 22],
    [4, 5, 17],
    [17, 18, 5],
    [5, 6, 18],
    [18, 19, 6],
    [6, 7, 19],
    [19, 20, 7],
    [7, 9, 20],
    [20, 22, 9]
], color: 2105376}, S_BodyFront: {calcWeight: 1, area: 0, pts: [
    [-0.0231, 0, -0.396],
    [-0.0231, 0.0165, -0.363],
    [-0.0231, -0.0231, -0.363],
    [-0.0231, -0.033, -0.3135],
    [-0.0231, 0.033, -0.2937],
    [-0.0231, 0.0528, -0.2541],
    [-0.0231, 0.066, -0.2145],
    [-0.0231, 0.0594, -0.165],
    [-0.0231, -0.033, -0.1419],
    [-0.0231, 0.0429, -0.1056],
    [-0.0231, 0.0165, -0.066],
    [-0.0231, 0.0426, 0.0792],
    [-0.0231, 0.0165, 0.0792],
    [0.0231, 0, -0.396],
    [0.0231, -0.0231, -0.363],
    [0.0231, 0.0165, -0.363],
    [0.0231, -0.033, -0.3135],
    [0.0231, 0.033, -0.2937],
    [0.0231, 0.0528, -0.2541],
    [0.0231, 0.066, -0.2145],
    [0.0231, 0.0594, -0.165],
    [0.0231, -0.033, -0.1419],
    [0.0231, 0.0429, -0.1056],
    [0.0231, 0.0165, -0.066],
    [0.0231, 0.0426, 0.0792],
    [0.0231, 0.0165, 0.0792],
], faces: [
    [0, 1, 2],
    [1, 2, 3],
    [1, 3, 4],
    [3, 4, 8],
    [4, 8, 9],
    [8, 9, 10],
    [9, 10, 11],
    [10, 11, 12],
    [13, 14, 15],
    [14, 15, 16],
    [15, 16, 17],
    [16, 17, 22],
    [16, 22, 21],
    [21, 22, 23],
    [22, 23, 24],
    [23, 24, 25],
    [0, 1, 13],
    [13, 15, 1],
    [1, 4, 15],
    [15, 17, 4],
    [9, 11, 22],
    [22, 24, 11],
    [0, 2, 13],
    [13, 14, 2],
    [2, 3, 14],
    [14, 16, 3],
    [3, 8, 16],
    [16, 21, 8]
], color: 11575456}, S_BodyBottomProfile: {calcWeight: 2, area: 0, pts: [
    [0, -0.0165, 0.0495],
    [0, -0.0165, -0.1683],
    [0.0858, -0.0165, -0.1386],
    [0.1122, -0.0165, -0.0099],
    [0.1122, -0.0165, 0.0495],
    [-0.0858, -0.0165, -0.1386],
    [-0.1122, -0.0165, -0.0099],
    [-0.1122, -0.0165, 0.0495]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 1, 5],
    [0, 5, 6],
    [0, 6, 7]
], color: 8421504}, S_BodyBottomStrips: {calcWeight: 0, area: 0, pts: [
    [0.0858, 0.0165, -0.1386],
    [0.1122, 0.0165, -0.0099],
    [0.1122, 0.0165, 0.297],
    [0.0858, -0.0165, -0.1386],
    [0.1122, -0.0165, -0.0099],
    [0.1122, -0.0165, 0.289],
    [-0.0858, 0.0165, -0.1386],
    [-0.1122, 0.0165, -0.0099],
    [-0.1122, 0.0165, 0.297],
    [-0.0858, -0.0165, -0.1386],
    [-0.1122, -0.0165, -0.0099],
    [-0.1122, -0.0165, 0.289]
], faces: [
    [0, 1, 3],
    [1, 3, 4],
    [1, 4, 5],
    [1, 2, 5],
    [6, 7, 9],
    [7, 9, 10],
    [7, 8, 10],
    [8, 10, 11]
], color: 8421504}, C_ElevonR: {calcWeight: 4, area: 0, pts: [
    [0.132, 0.0165, 0.3036],
    [0, 0.0165, 0.3036],
    [0.005, 0.0165, 0.3333],
    [0.0264, 0.0165, 0.3465],
    [0.0429, 0.0165, 0.3432],
    [0.0429, 0.0165, 0.4026],
    [0.1155, 0.0165, 0.4455],
    [0.1947, 0.0165, 0.4191],
    [0.1947, 0.0165, 0.3564]
], color: 8421504, offset: [0, -0.0165, -0.3036], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5],
    [0, 5, 6],
    [0, 6, 7],
    [0, 7, 8]
], hinge: [
    [0, 0, 0],
    [1, 0, 0]
], maxDeflection_rad: Math.PI / 4}, C_ElevonL: {calcWeight: 4, area: 0, pts: [
    [-0.132, 0.0165, 0.3036],
    [0, 0.0165, 0.3036],
    [-0.005, 0.0165, 0.3333],
    [-0.0264, 0.0165, 0.3465],
    [-0.0429, 0.0165, 0.3432],
    [-0.0429, 0.0165, 0.4026],
    [-0.1155, 0.0165, 0.4455],
    [-0.1947, 0.0165, 0.4191],
    [-0.1947, 0.0165, 0.3564]
], color: 8421504, offset: [0, -0.0165, -0.3036], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5],
    [0, 5, 6],
    [0, 6, 7],
    [0, 7, 8]
], hinge: [
    [0, 0, 0],
    [1, 0, 0]
], maxDeflection_rad: Math.PI / 4}, S_VStabLeft: {calcWeight: 4, area: 0, pts: [
    [-0.0627, 0.0165, 0.1782],
    [-0.0627, 0.0165, 0.2937],
    [-0.0627, 0.0165, 0.3333],
    [-0.08, 0.14, 0.2838],
    [-0.08, 0.14, 0.2343]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4]
], color: 7434353}, S_VStabRight: {calcWeight: 4, area: 0, pts: [
    [0.0627, 0.0165, 0.1782],
    [0.0627, 0.0165, 0.2937],
    [0.0627, 0.0165, 0.3333],
    [0.08, 0.14, 0.2838],
    [0.08, 0.14, 0.2343]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4]
], color: 9474449}}};
_aircraftDef["FT-22X2"] = JSON.parse(JSON.stringify(_aircraftDef["FT-22"]));
_aircraftDef["FT-22X2"].Scale = 2;
_aircraftDef["FT-VersaWing"] = {Name: "Flite Test FT Versa Wing", DistanceUnits: "m", MassUnits: "kg", AreaUnits: "m2", ForceUnits: "N", EnginePower_N: 10, BodyDensity: (0.16 * 4 / 5), FoamThickness: 0.4, Scale: 1, Sections: {C_PropellerRunning: {mass: 0, cylinder: [9 / 100, 9 / 100, 0.5 / 100], pos: [0, 0, 0.163 - 0.005], rot: [Math.PI / 2, 0, 0], color: 4210752, opacity: 0.2}, C_Propeller: {mass: 0, pts: [
    [0, 0, -0.005],
    [-0.005, 0.03, -0.0025],
    [-0.005, 0.06, -0.0025],
    [0, 0.09, -0.005],
    [0.005, 0.06, -0.0075],
    [0.005, 0.03, -0.0075],
    [0, 0, -0.005],
    [-0.005, -0.03, -0.0075],
    [-0.005, -0.06, -0.0075],
    [0, -0.09, -0.005],
    [0.005, -0.06, -0.0025],
    [0.005, -0.03, -0.0025]
], faces: [
    [0, 1, 5],
    [1, 2, 5],
    [2, 4, 5],
    [2, 3, 4],
    [6, 7, 11],
    [7, 8, 11],
    [8, 10, 11],
    [8, 9, 10]
], pos: [0, 0, 0.163], color: 3158064, opacity: 1}, S_Engine: {mass: 0.066, cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, 0, 0.115], rot: [Math.PI / 2, 0, 0]}, S_Battery: {mass: 0.185, cylinder: [1 / 100, 1 / 100, 0.001 / 100], pos: [0, -0.015, 0.14], rot: [Math.PI / 2, 0, 0]}, S_WingLTop: {calcWeight: 1, area: 0, pts: [
    [0, -0.015, -0.182 + 0.005],
    [0, -0.015, 0.137],
    [-0.4719, +0.005, 0.2442],
    [-0.4719, +0.005, 0.099 + 0.005],
    [0, 0, 0],
    [0, 0, -0.165],
    [0, 0.026 - 0.015, -0.1419],
    [0, 0.0311 - 0.015, -0.1254],
    [0, 0.0311 - 0.015, -0.0891],
    [-0.4719, 0.009 + 0.005, 0.1188],
    [-0.4719, 0.013 + 0.005, 0.1353],
    [-0.4719, 0.016 + -0.005, 0.1584],
    [-0.4719, 0.016 - 0.005, 0.1782],
    [0, -0.015 + 0.005, -0.182],
    [-0.4719, +0.005 + 0.005, 0.099]
], faces: [
    [13, 14, 9],
    [13, 5, 9],
    [5, 9, 10],
    [5, 10, 6],
    [6, 10, 11],
    [6, 11, 7],
    [7, 11, 12],
    [7, 12, 8],
    [8, 12, 2],
    [8, 2, 1]
], color: 39168}, S_WingL: {calcWeight: 1, area: 0, pts: [
    [0, -0.015, -0.182 + 0.005],
    [0, -0.015, 0.137],
    [-0.4719, +0.005, 0.2442],
    [-0.4719, +0.005, 0.099 + 0.005],
    [0, 0, 0],
    [0, 0, -0.165],
    [0, 0.026 - 0.015, -0.1419],
    [0, 0.0311 - 0.015, -0.1254],
    [0, 0.0311 - 0.015, -0.0891],
    [-0.4719, 0.009 + 0.005, 0.1188],
    [-0.4719, 0.013 + 0.005, 0.1353],
    [-0.4719, 0.016 + -0.005, 0.1584],
    [-0.4719, 0.016 - 0.005, 0.1782],
    [0, -0.015 + 0.005, -0.182],
    [-0.4719, +0.005 + 0.005, 0.099]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 13, 14],
    [0, 14, 3]
], color: 5282128}, S_WingRTop: {calcWeight: 1, area: 0, pts: [
    [0, -0.015, -0.182 + 0.005],
    [0, -0.015, 0.137],
    [0.4719, +0.005, 0.2442],
    [0.4719, +0.005, 0.099 + 0.005],
    [0, 0, 0],
    [0, 0, -0.165],
    [0, 0.026 - 0.015, -0.1419],
    [0, 0.0311 - 0.015, -0.1254],
    [0, 0.0311 - 0.015, -0.0891],
    [0.4719, 0.009 + 0.005, 0.1188],
    [0.4719, 0.013 + 0.005, 0.1353],
    [0.4719, 0.016 + 0.005, 0.1584],
    [0.4719, 0.016 + 0.005, 0.1782],
    [0, -0.015 + 0.005, -0.182],
    [0.4719, +0.005 + 0.005, 0.099]
], faces: [
    [13, 14, 9],
    [13, 5, 9],
    [5, 9, 10],
    [5, 10, 6],
    [6, 10, 11],
    [6, 11, 7],
    [7, 11, 12],
    [7, 12, 8],
    [8, 12, 2],
    [8, 2, 1]
], color: 10027008}, S_WingR: {calcWeight: 1, area: 0, pts: [
    [0, -0.015, -0.182 + 0.005],
    [0, -0.015, 0.137],
    [0.4719, +0.005, 0.2442],
    [0.4719, +0.005, 0.099 + 0.005],
    [0, 0, 0],
    [0, 0, -0.165],
    [0, 0.026 - 0.015, -0.1419],
    [0, 0.0311 - 0.015, -0.1254],
    [0, 0.0311 - 0.015, -0.0891],
    [0.4719, 0.009 + 0.005, 0.1188],
    [0.4719, 0.013 + 0.005, 0.1353],
    [0.4719, 0.016 + 0.005, 0.1584],
    [0.4719, 0.016 + 0.005, 0.1782],
    [0, -0.015 + 0.005, -0.182],
    [0.4719, +0.005 + 0.005, 0.099]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 13, 14],
    [0, 14, 3]
], color: 10047568}, C_ElevonR: {calcWeight: 40, area: 0, pts: [
    [0.1089, -0.013 - 0.002, 0.16],
    [0.4719, +0.005 - 0.002, 0.2442],
    [0.4719, +0.005 - 0.002, 0.28],
    [0.1089, -0.013 - 0.002, 0.24],
    [0.1089, -0.013 + 0.002, 0.16],
    [0.4719, +0.005 + 0.002, 0.2442],
    [0.4719, +0.005 + 0.002, 0.28],
    [0.1089, -0.013 + 0.002, 0.24]
], color: 8421504, offset: [-0.1089, 0.013, -0.16], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [4, 5, 6],
    [4, 6, 7]
], hinge: [
    [0.1089, -0.013, 0.16],
    [0.4719, +0.005, 0.2442]
], maxDeflection_rad: 40 * Math.PI / 180}, C_ElevonL: {calcWeight: 40, area: 0, pts: [
    [-0.1089, -0.013 - 0.002, 0.16],
    [-0.4719, +0.005 - 0.002, 0.2442],
    [-0.4719, +0.005 - 0.002, 0.28],
    [-0.1089, -0.013 - 0.002, 0.24],
    [-0.1089, -0.013 + 0.002, 0.16],
    [-0.4719, +0.005 + 0.002, 0.2442],
    [-0.4719, +0.005 + 0.002, 0.28],
    [-0.1089, -0.013 + 0.002, 0.24]
], color: 8421504, offset: [0.1089, 0.013, -0.16], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [4, 5, 6],
    [4, 6, 7]
], hinge: [
    [-0.4719, +0.005, 0.2442],
    [-0.1089, -0.013, 0.16]
], maxDeflection_rad: 40 * Math.PI / 180}, S_VStabLeft: {calcWeight: 2, area: 0, pts: [
    [-0.472, -0.015, 0.1],
    [-0.472, -0.015, 0.269],
    [-0.472, 0.04 - 0.015, 0.1],
    [-0.472, 0.08 - 0.015, 0.15],
    [-0.472, 0.08 - 0.015, 0.269]
], faces: [
    [0, 1, 2],
    [1, 2, 3],
    [1, 3, 4]
], color: 7434353}, S_VStabRight: {calcWeight: 2, area: 0, pts: [
    [0.472, -0.015, 0.1],
    [0.472, -0.015, 0.269],
    [0.472, 0.04 - 0.015, 0.1],
    [0.472, 0.08 - 0.015, 0.15],
    [0.472, 0.08 - 0.015, 0.269]
], faces: [
    [0, 1, 2],
    [1, 2, 3],
    [1, 3, 4]
], color: 9474449}}};
_aircraftDef["FT-VersaWingX2"] = JSON.parse(JSON.stringify(_aircraftDef["FT-VersaWing"]));
_aircraftDef["FT-VersaWingX2"].Scale = 2;
_aircraftDef.KnuckleHQuad = {Name: "Knuckle H-Quad", DistanceUnits: "m", MassUnits: "kg", AreaUnits: "m2", ForceUnits: "N", EnginePower_N: 10, Quadracopter: true, BodyDensity: 16.018, FoamThickness: 0.5, Scale: 1, rotationalDampingFactor: 0.995, Sections: {C_PropellerLF: {mass: 0.007, pts: [
    [0, -0.005, 0],
    [-0.005, -0.0025, 0.03],
    [-0.005, -0.0025, 0.06],
    [0, -0.005, 0.09],
    [0.005, -0.0075, 0.06],
    [0.005, -0.0075, 0.03],
    [0, -0.005, 0],
    [-0.005, -0.0075, -0.03],
    [-0.005, -0.0075, -0.06],
    [0, -0.005, -0.09],
    [0.005, -0.0025, -0.06],
    [0.005, -0.0025, -0.03]
], faces: [
    [0, 1, 5],
    [1, 2, 5],
    [2, 4, 5],
    [2, 3, 4],
    [6, 7, 11],
    [7, 8, 11],
    [8, 10, 11],
    [8, 9, 10]
], pos: [-0.137, 0.03, -0.137], color: 16724016, opacity: 1}, S_EngineLF: {mass: (0.066), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [-0.137, 0, -0.137], color: 16724016, rot: [0, 0, 0]}, C_PropellerRF: {mass: 0.007, pts: [
    [0, -0.005, 0],
    [-0.005, -0.0025, 0.03],
    [-0.005, -0.0025, 0.06],
    [0, -0.005, 0.09],
    [0.005, -0.0075, 0.06],
    [0.005, -0.0075, 0.03],
    [0, -0.005, 0],
    [-0.005, -0.0075, -0.03],
    [-0.005, -0.0075, -0.06],
    [0, -0.005, -0.09],
    [0.005, -0.0025, -0.06],
    [0.005, -0.0025, -0.03]
], faces: [
    [0, 1, 5],
    [1, 2, 5],
    [2, 4, 5],
    [2, 3, 4],
    [6, 7, 11],
    [7, 8, 11],
    [8, 10, 11],
    [8, 9, 10]
], pos: [0.137, 0.03, -0.137], color: 16724016, opacity: 1}, S_EngineRF: {mass: (0.066), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0.137, 0, -0.137], color: 16724016, rot: [0, 0, 0]}, C_PropellerLB: {mass: 0.007, pts: [
    [0, -0.005, 0],
    [-0.005, -0.0025, 0.03],
    [-0.005, -0.0025, 0.06],
    [0, -0.005, 0.09],
    [0.005, -0.0075, 0.06],
    [0.005, -0.0075, 0.03],
    [0, -0.005, 0],
    [-0.005, -0.0075, -0.03],
    [-0.005, -0.0075, -0.06],
    [0, -0.005, -0.09],
    [0.005, -0.0025, -0.06],
    [0.005, -0.0025, -0.03]
], faces: [
    [0, 1, 5],
    [1, 2, 5],
    [2, 4, 5],
    [2, 3, 4],
    [6, 7, 11],
    [7, 8, 11],
    [8, 10, 11],
    [8, 9, 10]
], pos: [-0.137, 0.03, 0.137], color: 3158064, opacity: 1}, S_EngineLB: {mass: (0.066), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [-0.137, 0, 0.137], color: 3158064, rot: [0, 0, 0]}, C_PropellerRB: {mass: 0.007, pts: [
    [0, -0.005, 0],
    [-0.005, -0.0025, 0.03],
    [-0.005, -0.0025, 0.06],
    [0, -0.005, 0.09],
    [0.005, -0.0075, 0.06],
    [0.005, -0.0075, 0.03],
    [0, -0.005, 0],
    [-0.005, -0.0075, -0.03],
    [-0.005, -0.0075, -0.06],
    [0, -0.005, -0.09],
    [0.005, -0.0025, -0.06],
    [0.005, -0.0025, -0.03]
], faces: [
    [0, 1, 5],
    [1, 2, 5],
    [2, 4, 5],
    [2, 3, 4],
    [6, 7, 11],
    [7, 8, 11],
    [8, 10, 11],
    [8, 9, 10]
], pos: [0.137, 0.03, 0.137], color: 3158064, opacity: 1}, S_EngineRB: {mass: (0.066), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0.137, 0, 0.137], color: 3158064, rot: [0, 0, 0]}, S_Battery: {mass: (0.185), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, -0.013, 0], rot: [Math.PI / 2, 0, 0]}, S_CenterPlateTop: {calcWeight: 1, area: 0, pts: [
    [-0.04, 0.00635, -0.04],
    [0.04, 0.00635, -0.04],
    [0.04, 0.00635, 0.04],
    [-0.04, 0.00635, 0.04]
], faces: [
    [0, 1, 2],
    [0, 2, 3]
], color: 12092939}, S_CenterPlateBottom: {calcWeight: 1, area: 0, pts: [
    [-0.04, -0.00635, -0.04],
    [0.04, -0.00635, -0.04],
    [0.04, -0.00635, 0.04],
    [-0.04, -0.00635, 0.04]
], faces: [
    [0, 1, 2],
    [0, 2, 3]
], color: 12092939}, S_FrontBar: {calcWeight: 1, area: 0, pts: [
    [0.127, 0.00635, -0.1397],
    [0.127, 0.00635, -0.127],
    [0.127, -0.00635, -0.127],
    [0.127, -0.00635, -0.1397],
    [-0.127, 0.00635, -0.1397],
    [-0.127, 0.00635, -0.127],
    [-0.127, -0.00635, -0.127],
    [-0.127, -0.00635, -0.1397]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [4, 5, 6],
    [4, 6, 7],
    [0, 1, 5],
    [0, 5, 4],
    [1, 2, 6],
    [1, 6, 5],
    [2, 3, 6],
    [3, 6, 7],
    [0, 3, 7],
    [0, 7, 4]
], color: 12092939}, S_BackBar: {calcWeight: 1, area: 0, pts: [
    [0.127, 0.00635, 0.1397],
    [0.127, 0.00635, 0.127],
    [0.127, -0.00635, 0.127],
    [0.127, -0.00635, 0.1397],
    [-0.127, 0.00635, 0.1397],
    [-0.127, 0.00635, 0.127],
    [-0.127, -0.00635, 0.127],
    [-0.127, -0.00635, 0.1397]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [4, 5, 6],
    [4, 6, 7],
    [0, 1, 5],
    [0, 5, 4],
    [1, 2, 6],
    [1, 6, 5],
    [2, 3, 6],
    [3, 6, 7],
    [0, 3, 7],
    [0, 7, 4]
], color: 12092939}, S_RightBar: {calcWeight: 1, area: 0, pts: [
    [0.04 - 0.00635, 0.00635, -0.127],
    [0.04 + 0.00635, 0.00635, -0.127],
    [0.04 - 0.00635, -0.00635, -0.127],
    [0.04 + 0.00635, -0.00635, -0.127],
    [0.04 - 0.00635, 0.00635, 0.127],
    [0.04 + 0.00635, 0.00635, 0.127],
    [0.04 + 0.00635, -0.00635, 0.127],
    [0.04 - 0.00635, -0.00635, 0.127]
], faces: [
    [0, 1, 5],
    [0, 5, 4],
    [1, 2, 6],
    [1, 6, 5],
    [2, 3, 6],
    [3, 6, 7],
    [0, 3, 7],
    [0, 7, 4]
], color: 12092939}, S_LeftBar: {calcWeight: 1, area: 0, pts: [
    [-0.04 - 0.00635, 0.00635, -0.127],
    [-0.04 + 0.00635, 0.00635, -0.127],
    [-0.04 - 0.00635, -0.00635, -0.127],
    [-0.04 + 0.00635, -0.00635, -0.127],
    [-0.04 - 0.00635, 0.00635, 0.127],
    [-0.04 + 0.00635, 0.00635, 0.127],
    [-0.04 + 0.00635, -0.00635, 0.127],
    [-0.04 - 0.00635, -0.00635, 0.127]
], faces: [
    [0, 1, 5],
    [0, 5, 4],
    [1, 2, 6],
    [1, 6, 5],
    [2, 3, 6],
    [3, 6, 7],
    [0, 3, 7],
    [0, 7, 4]
], color: 12092939}}};
_aircraftDef["FT-Viggen"] = {Name: "Flite Test FT Viggen EDF", DistanceUnits: "m", MassUnits: "kg", AreaUnits: "m2", ForceUnits: "N", EnginePower_N: 8, EDF: true, BodyDensity: (0.16), FoamThickness: 0.5, Scale: 1, Sections: {S_EngineDF: {mass: (0.066 * 3), cylinder: [0.034, 0.034, 8 / 100], pos: [0, 0.035 - 0.036, 0], rot: [Math.PI / 2, 0, 0], color: 2105376}, S_EngineTube: {mass: (0), cylinder: [0.035, 0.035, 0.407], pos: [0, 0.036 - 0.036, 0.407 / 2 + 0.005], rot: [Math.PI / 2, 0, 0], color: 9474192}, S_Battery: {mass: (0.185), cylinder: [1.25 / 100, 1.25 / 100, 8 / 100], pos: [0, 0.013 - 0.036, 0.03], rot: [Math.PI / 2, 0, 0]}, S_WingL: {calcWeight: 2, area: 0, pts: [
    [0, 0 - 0.036, -0.054],
    [-0.085, 0 - 0.036, -0.054],
    [-0.084, 0 - 0.036, -0.039],
    [-0.172, 0 - 0.036, 0.048],
    [-0.274, 0 - 0.036, 0.186],
    [-0.345, 0 - 0.036, 0.326],
    [-0.061, 0 - 0.036, 0.326],
    [-0.054, 0 - 0.036, 0.407],
    [0, 0 - 0.036, 0.407]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5],
    [0, 5, 6],
    [0, 6, 7],
    [0, 7, 8]
], color: 43520}, S_WingR: {calcWeight: 2, area: 0, pts: [
    [0, 0 - 0.036, -0.054],
    [0.085, 0 - 0.036, -0.054],
    [0.084, 0 - 0.036, -0.039],
    [0.172, 0 - 0.036, 0.048],
    [0.274, 0 - 0.036, 0.186],
    [0.345, 0 - 0.036, 0.326],
    [0.061, 0 - 0.036, 0.326],
    [0.054, 0 - 0.036, 0.407],
    [0, 0 - 0.036, 0.407]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5],
    [0, 5, 6],
    [0, 6, 7],
    [0, 7, 8]
], color: 11141120}, C_ElevonR: {calcWeight: 40, area: 0, pts: [
    [0.345, 0 - 0.036, 0.326],
    [0.061, 0 - 0.036, 0.326],
    [0.062, 0 - 0.036, 0.387],
    [0.35, 0 - 0.036, 0.36]
], color: 8421504, offset: [0, 0.036, -0.326], faces: [
    [0, 1, 2],
    [0, 2, 3]
], hinge: [
    [0, 0, 0],
    [1, 0, 0]
], maxDeflection_rad: 35 * Math.PI / 180}, C_ElevonL: {calcWeight: 40, area: 0, pts: [
    [-0.345, 0 - 0.036, 0.326],
    [-0.061, 0 - 0.036, 0.326],
    [-0.062, 0 - 0.036, 0.387],
    [-0.35, 0 - 0.036, 0.36]
], color: 8421504, offset: [0, 0.036, -0.326], faces: [
    [0, 1, 2],
    [0, 2, 3]
], hinge: [
    [0, 0, 0],
    [1, 0, 0]
], maxDeflection_rad: 35 * Math.PI / 180}, S_RearBodyR: {calcWeight: 1, area: 0, pts: [
    [0.054, 0 - 0.036, 0.407],
    [0.085, 0 - 0.036, 0],
    [0.085, 0.038 - 0.036, 0],
    [0.054, 0.038 - 0.036, 0.407],
    [0.085 / 2, 0.038 * 2 - 0.036, 0],
    [0.054 / 2, 0.038 * 2 - 0.036, 0.407],
    [-0.085 / 2, 0.038 * 2 - 0.036, 0],
    [-0.054 / 2, 0.038 * 2 - 0.036, 0.407]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [3, 2, 4],
    [3, 4, 5],
    [4, 5, 6],
    [5, 6, 7]
], color: 3239985}, S_RearBodyL: {calcWeight: 1, area: 0, pts: [
    [-0.054, 0 - 0.036, 0.407],
    [-0.085, 0 - 0.036, 0],
    [-0.085, 0.038 - 0.036, 0],
    [-0.054, 0.038 - 0.036, 0.407],
    [-0.085 / 2, 0.038 * 2 - 0.036, 0],
    [-0.054 / 2, 0.038 * 2 - 0.036, 0.407]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [3, 2, 4],
    [3, 4, 5]
], color: 3239985}, S_Rear: {calcWeight: 0, area: 0, pts: [
    [-0.054, 0 - 0.036, 0.407],
    [-0.054, 0.038 - 0.036, 0.407],
    [-0.054 / 2, 0.038 * 2 - 0.036, 0.407],
    [0.054, 0 - 0.036, 0.407],
    [0.054, 0.038 - 0.036, 0.407],
    [0.054 / 2, 0.038 * 2 - 0.036, 0.407]
], faces: [
    [0, 1, 2],
    [0, 2, 5],
    [0, 5, 4],
    [0, 4, 3]
], color: 3239985}, S_RearBodyTop: {calcWeight: 1, area: 0, pts: [
    [-0.043, 0.038 * 2 - 0.036, 0],
    [-0.025, 0.038 * 2 - 0.036, 0.407],
    [0.025, 0.038 * 2 - 0.036, 0.407],
    [0.043, 0.038 * 2 - 0.036, 0],
    [-0.043, 0.086 - 0.036, 0],
    [-0.025, 0.086 - 0.036, 0.407],
    [0.025, 0.086 - 0.036, 0.407],
    [0.043, 0.086 - 0.036, 0],
    [-0.023, 0.038 * 1.6 - 0.036, -0.2],
    [-0.023, 0.08 - 0.036, -0.2],
    [0.023, 0.08 - 0.036, -0.2],
    [0.023, 0.038 * 1.6 - 0.036, -0.2]
], faces: [
    [0, 1, 5],
    [0, 5, 4],
    [4, 5, 6],
    [4, 6, 7],
    [1, 2, 6],
    [1, 6, 5],
    [2, 3, 7],
    [2, 7, 6],
    [8, 0, 4],
    [8, 4, 9],
    [9, 4, 7],
    [9, 7, 10],
    [3, 7, 10],
    [3, 10, 11]
], color: 2191393}, S_VStab: {calcWeight: 2, area: 0, pts: [
    [0, 0.086 - 0.036, 0.16],
    [0, 0.086 - 0.036, 0.407],
    [0, 0.25 - 0.036, 0.4],
    [0, 0.287 - 0.036, 0.407],
    [0, 0.287 - 0.036, 0.38]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4]
], color: 3239985}, S_FrontBodyR: {calcWeight: 1, area: 0, pts: [
    [0.085, 0 - 0.036, -0.235],
    [0.085, 0 - 0.036, 0],
    [0.085, 0.038 - 0.036, 0],
    [0.085, 0.038 - 0.036, -0.235],
    [0.085 / 2, 0.038 * 2 - 0.036, 0],
    [0.085 / 2, 0.038 * 1.6 - 0.036, -0.235],
    [-0.085 / 2, 0.038 * 2 - 0.036, 0],
    [-0.085 / 2, 0.038 * 1.6 - 0.036, -0.235]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [3, 2, 4],
    [3, 4, 5],
    [4, 5, 6],
    [5, 6, 7]
], color: 3239985}, S_FrontBodyL: {calcWeight: 1, area: 0, pts: [
    [-0.085, 0 - 0.036, -0.235],
    [-0.085, 0 - 0.036, 0],
    [-0.085, 0.038 - 0.036, 0],
    [-0.085, 0.038 - 0.036, -0.235],
    [-0.085 / 2, 0.038 * 2 - 0.036, 0],
    [-0.085 / 2, 0.038 * 1.6 - 0.036, -0.235]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [3, 2, 4],
    [3, 4, 5]
], color: 3239985}, S_FrontBodyBot: {calcWeight: 1, area: 0, pts: [
    [-0.085, 0 - 0.036, -0.235],
    [-0.085, 0 - 0.036, -0.054],
    [0.085, 0 - 0.036, -0.235],
    [0.085, 0 - 0.036, -0.054]
], faces: [
    [0, 1, 3],
    [0, 3, 2]
], color: 3239985}, S_CanardR: {calcWeight: 4, area: 0, pts: [
    [0.085, 0.038 - 0.036, -0.213 - 0.022],
    [0.085, 0.038 - 0.01864 - 0.036, 0 - 0.022],
    [0.189, 0.038 - 0.01671 - 0.036, -0.022 - 0.022],
    [0.189, 0.038 - 0.01295 - 0.036, -0.065 - 0.022]
], faces: [
    [0, 1, 2],
    [0, 2, 3]
], color: 11141120}, S_CanardL: {calcWeight: 4, area: 0, pts: [
    [-0.085, 0.038 - 0.036, -0.213 - 0.022],
    [-0.085, 0.038 - 0.01864 - 0.036, 0 - 0.022],
    [-0.189, 0.038 - 0.01671 - 0.036, -0.022 - 0.022],
    [-0.189, 0.038 - 0.01295 - 0.036, -0.065 - 0.022]
], faces: [
    [0, 1, 2],
    [0, 2, 3]
], color: 43520}, S_NoseFirewall: {calcWeight: 1, area: 0, pts: [
    [0.085 / 2, 0 - 0.036, -0.235],
    [0.085 / 2, 0 - 0.036, 0],
    [0.085 / 2, 0.038 * 2 - 0.036, 0],
    [0.085 / 2, 0.038 * 1.6 - 0.036, -0.235],
    [-0.085 / 2, 0 - 0.036, -0.235],
    [-0.085 / 2, 0 - 0.036, 0],
    [-0.085 / 2, 0.038 * 2 - 0.036, 0],
    [-0.085 / 2, 0.038 * 1.6 - 0.036, -0.235],
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [4, 5, 6],
    [4, 6, 7]
], color: 2187297}, S_Nose: {calcWeight: 1, area: 0, pts: [
    [0, 0.038 * 1.6 / 2 - 0.036, -0.43],
    [0.085 / 2, 0 - 0.036, -0.235],
    [0.085 / 2, 0.038 * 1.6 - 0.036, -0.235],
    [-0.085 / 2, 0.038 * 1.6 - 0.036, -0.235],
    [-0.085 / 2, 0 - 0.036, -0.235],
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 1]
], color: 3239985}, S_Canopy: {calcWeight: 1, area: 0, pts: [
    [-0.023, 0.038 * 1.6 - 0.036, -0.2],
    [-0.023, 0.08 - 0.036, -0.2],
    [0.023, 0.08 - 0.036, -0.2],
    [0.023, 0.038 * 1.6 - 0.036, -0.2],
    [0.023, 0.038 * 1.6 - 0.036, -0.235],
    [-0.023, 0.038 * 1.6 - 0.036, -0.235]
], faces: [
    [0, 1, 5],
    [1, 2, 5],
    [2, 4, 5],
    [2, 3, 4]
], color: 2105376}}};
_aircraftDef["FT-ViggenX2"] = JSON.parse(JSON.stringify(_aircraftDef["FT-Viggen"]));
_aircraftDef["FT-ViggenX2"].Scale = 2;
_aircraftDef.TRex450 = {Name: "TRex 450", DistanceUnits: "m", MassUnits: "kg", AreaUnits: "m2", ForceUnits: "N", EnginePower_N: 20, Heli: true, PropRadius: 0.355, RotorMaxRPM: 2100, RotorMass: 0.019, NumRotors: 2, RotorLength: 0.355, RotorArea: 0.00781, BodyDensity: 16.018, FoamThickness: 0.5, Scale: 1, rotationalDampingFactor: 0.95, Sections: {C_PropellerRunning: {mass: 0, cylinder: [0.355, 0.355, 0.7 / 100], pos: [0, 0.12, 0], color: 4210752, rot: [0, 0, 0], opacity: 0.2}, C_PropellerH1: {mass: 0.019, pts: [
    [0, 0, 0],
    [0.06, 0, -0.008],
    [0.355, 0, -0.008],
    [0.355, 0, 0.022],
    [0.06, 0, 0.022]
], faces: [
    [0, 1, 4],
    [1, 2, 3],
    [1, 3, 4]
], pos: [0, 0.12, 0], color: 37008, opacity: 1}, C_PropellerH2: {mass: 0.019, pts: [
    [0, 0, 0],
    [-0.06, 0, 0.008],
    [-0.355, 0, 0.008],
    [-0.355, 0, -0.022],
    [-0.06, 0, -0.022]
], faces: [
    [0, 1, 4],
    [1, 2, 3],
    [1, 3, 4]
], pos: [0, 0.12, 0], color: 37008, opacity: 1}, S_FakePt1: {mass: (0.066 / 2), pos: [0, -1.5, 0]}, S_FakePt2: {mass: (0.066 / 2), pos: [0, 1.5, 0]}, S_EngineHeli: {mass: (0.066), cylinder: [1.25 / 100, 1.25 / 100, 4 / 100], pos: [0, -0.026, -0.04], color: 176, rot: [0, 0, 0]}, S_MainGear: {mass: (0.002), cylinder: [2.25 / 100, 2.25 / 100, 0.5 / 100], pos: [0, -0.011, 0], color: 13684944, rot: [0, 0, 0]}, S_Mast: {mass: (0.006), cylinder: [0.004, 0.004, 0.14], pos: [0, 0.05, 0], color: 10526880, rot: [0, 0, 0]}, S_Battery: {mass: (0.185 * 2), cylinder: [0.5 / 100, 0.5 / 100, 4 / 100], pos: [0, -0.012, -0.155], rot: [Math.PI / 4, 0, 0]}, S_Rudder: {mass: (0.005), cylinder: [7.5 / 100, 7.5 / 100, 0.5 / 100], pos: [0.01, -0.007, 0.44], color: 4210752, rot: [0, 0, Math.PI / 2], opacity: 0.2}, S_TailBoom: {calcWeight: 1, mass: 0.019, pts: [
    [0.0065, 0.0175, 0],
    [0.0065, 0.0175 - 0.013, 0],
    [-0.0065, 0.0175 - 0.013, 0],
    [-0.0065, 0.0175, 0],
    [0.0065, 0.0175, 0.44],
    [0.0065, 0.0175 - 0.013, 0.44],
    [-0.0065, 0.0175 - 0.013, 0.44],
    [-0.0065, 0.0175, 0.44]
], faces: [
    [0, 4, 5],
    [0, 5, 1],
    [0, 3, 7],
    [0, 7, 4],
    [1, 5, 6],
    [1, 6, 2],
    [2, 3, 7],
    [2, 7, 6]
], color: 12097115}, S_GearL: {calcWeight: 1, mass: 0.019, pts: [
    [-0.06, -0.09, -0.09],
    [-0.06, -0.09 + 0.0025, -0.09],
    [-0.055, -0.09 + 0.0025, -0.09],
    [-0.055, -0.09, -0.09],
    [-0.06, -0.09, 0.07],
    [-0.06, -0.09 + 0.0025, 0.07],
    [-0.055, -0.09 + 0.0025, 0.07],
    [-0.055, -0.09, 0.07],
    [-0.06, -0.075, -0.115],
    [-0.06, -0.075 + 0.0025, -0.115],
    [-0.055, -0.075 + 0.0025, -0.115],
    [-0.055, -0.075, -0.115]
], faces: [
    [0, 4, 5],
    [0, 5, 1],
    [0, 3, 7],
    [0, 7, 4],
    [1, 5, 6],
    [1, 6, 2],
    [2, 3, 7],
    [2, 7, 6],
    [0, 1, 9],
    [0, 8, 9],
    [0, 8, 11],
    [0, 11, 3],
    [2, 3, 11],
    [2, 11, 10],
    [1, 2, 10],
    [1, 10, 9]
], color: 12092939}, S_StrutL: {calcWeight: 1, mass: 0.009, pts: [
    [-0.06, -0.09, -0.08],
    [-0.06, -0.09, -0.075],
    [-0.025, -0.05, -0.08],
    [-0.025, -0.05, -0.075],
    [-0.06, -0.09, 0.05],
    [-0.06, -0.09, 0.045],
    [-0.025, -0.05, 0.05],
    [-0.025, -0.05, 0.045]
], faces: [
    [0, 1, 2],
    [1, 2, 3],
    [4, 5, 6],
    [5, 6, 7]
], color: 12092939}, S_StrutR: {calcWeight: 1, mass: 0.009, pts: [
    [0.06, -0.09, -0.08],
    [0.06, -0.09, -0.075],
    [0.025, -0.05, -0.08],
    [0.025, -0.05, -0.075],
    [0.06, -0.09, 0.05],
    [0.06, -0.09, 0.045],
    [0.025, -0.05, 0.05],
    [0.025, -0.05, 0.045],
    [-0.025, -0.05, 0.05],
    [-0.025, -0.05, 0.045]
], faces: [
    [0, 1, 2],
    [1, 2, 3],
    [4, 5, 6],
    [5, 6, 7],
    [6, 7, 8],
    [6, 8, 9]
], color: 12092939}, S_GearR: {calcWeight: 1, mass: 0.019, pts: [
    [0.06, -0.09, -0.09],
    [0.06, -0.09 + 0.0025, -0.09],
    [0.055, -0.09 + 0.0025, -0.09],
    [0.055, -0.09, -0.09],
    [0.06, -0.09, 0.07],
    [0.06, -0.09 + 0.0025, 0.07],
    [0.055, -0.09 + 0.0025, 0.07],
    [0.055, -0.09, 0.07],
    [0.06, -0.075, -0.115],
    [0.06, -0.075 + 0.0025, -0.115],
    [0.055, -0.075 + 0.0025, -0.115],
    [0.055, -0.075, -0.115]
], faces: [
    [0, 4, 5],
    [0, 5, 1],
    [0, 3, 7],
    [0, 7, 4],
    [1, 5, 6],
    [1, 6, 2],
    [2, 3, 7],
    [2, 7, 6],
    [0, 1, 9],
    [0, 8, 9],
    [0, 8, 11],
    [0, 11, 3],
    [2, 3, 11],
    [2, 11, 10],
    [1, 2, 10],
    [1, 10, 9]
], color: 12092939}, S_VStab: {calcWeight: 2, area: 0, pts: [
    [-0.0065, 0.011, 0.36],
    [-0.0065, 0.011 + 0.04, 0.42],
    [-0.0065, 0.011 + 0.04, 0.44],
    [-0.0065, 0.011, 0.43],
    [-0.0065, 0.011 - 0.085, 0.455],
    [-0.0065, 0.011 - 0.085, 0.44]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5]
]}, S_HStab: {calcWeight: 2, area: 0, pts: [
    [0, 0.0135, 0.25],
    [-0.06, 0.0135, 0.28],
    [-0.06, 0.0135, 0.3],
    [0, 0.0135, 0.29],
    [0.06, 0.0135, 0.3],
    [0.06, 0.0135, 0.28]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5]
]}, S_CabTop: {calcWeight: 1, area: 0, pts: [
    [-0.025, -0.03, -0.2],
    [0.025, -0.03, -0.2],
    [-0.025, 0.04, -0.12],
    [0.025, 0.04, -0.12],
    [-0.025, 0.05, -0.06],
    [0.025, 0.05, -0.06],
    [-0.025, 0.05, 0.035],
    [0.025, 0.05, 0.035]
], faces: [
    [0, 1, 3],
    [0, 3, 2],
    [2, 3, 5],
    [2, 5, 4],
    [4, 5, 7],
    [4, 7, 6],
    [0, 2, 4],
    [1, 3, 5],
    [0, 4, 6],
    [1, 5, 7]
], color: 3158064}, S_CabLeft: {calcWeight: 1, area: 0, pts: [
    [-0.025, -0.03, -0.2],
    [-0.025, 0.05, 0.035],
    [-0.025, 0.03, 0.035],
    [-0.05, 0, 0],
    [-0.05, -0.035, -0.03],
    [-0.025, -0.05, -0.06],
    [-0.025, -0.05, -0.15]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5],
    [0, 5, 6]
], color: 9474192}, S_CabRight: {calcWeight: 1, area: 0, pts: [
    [0.025, -0.03, -0.2],
    [0.025, 0.05, 0.035],
    [0.025, 0.03, 0.035],
    [0.05, 0, 0],
    [0.05, -0.035, -0.03],
    [0.025, -0.05, -0.06],
    [0.025, -0.05, -0.15]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5],
    [0, 5, 6]
], color: 9474192}, S_CabBottom: {calcWeight: 1, area: 0, pts: [
    [-0.025, -0.03, -0.2],
    [-0.025, -0.05, -0.15],
    [-0.025, -0.05, -0.06],
    [0.025, -0.03, -0.2],
    [0.025, -0.05, -0.15],
    [0.025, -0.05, -0.06]
], faces: [
    [0, 1, 4],
    [0, 4, 3],
    [1, 2, 5],
    [1, 5, 4]
], color: 9474192}, S_FrameLeft: {calcWeight: 1, area: 0, pts: [
    [-0.01, 0.03, -0.03],
    [-0.01, 0.0275, 0.09],
    [-0.01, 0.0075, 0.09],
    [-0.01, -0.01, 0.05],
    [-0.01, -0.055, 0.05],
    [-0.01, -0.055, -0.07],
    [0.01, -0.055, 0.05],
    [0.01, -0.055, -0.07]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5],
    [4, 5, 6],
    [5, 6, 7]
], color: 5282128}, S_FrameRight: {calcWeight: 1, area: 0, pts: [
    [0.01, 0.03, -0.03],
    [0.01, 0.0275, 0.09],
    [0.01, 0.0075, 0.09],
    [0.01, -0.01, 0.05],
    [0.01, -0.055, 0.05],
    [0.01, -0.055, -0.07],
    [-0.01, 0.03, -0.03],
    [-0.01, 0.0275, 0.09]
], faces: [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 4],
    [0, 4, 5],
    [0, 1, 6],
    [1, 6, 7]
], color: 5282128}}};
THREE.OculusRiftEffect = function (h, p) {
    var e = (p && p.worldFactor) ? p.worldFactor : 1;
    var n = (p && p.HMD) ? p.HMD : {hResolution: 1280, vResolution: 800, hScreenSize: 0.14976, vScreenSize: 0.0936, interpupillaryDistance: 0.064, lensSeparationDistance: 0.064, eyeToScreenDistance: 0.3099, distortionK: [1, 0.22, 0.24, 0], chromaAbParameter: [0.996, -0.004, 1.014, 0]};
    var g = new THREE.PerspectiveCamera();
    g.matrixAutoUpdate = false;
    g.target = new THREE.Vector3();
    var m = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1000);
    m.position.z = 1;
    this.preLeftRender = function () {
    };
    this.preRightRender = function () {
    };
    h.autoClear = false;
    var k = new THREE.Color("black");
    var c = {minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter, format: THREE.RGBAFormat};
    var d = new THREE.WebGLRenderTarget(640, 800, c);
    var a = new THREE.ShaderMaterial({uniforms: {texid: {type: "t", value: d}, scale: {type: "v2", value: new THREE.Vector2(1, 1)}, scaleIn: {type: "v2", value: new THREE.Vector2(1, 1)}, lensCenter: {type: "v2", value: new THREE.Vector2(0, 0)}, hmdWarpParam: {type: "v4", value: new THREE.Vector4(1, 0, 0, 0)}, chromAbParam: {type: "v4", value: new THREE.Vector4(1, 0, 0, 0)}}, vertexShader: ["varying vec2 vUv;", "void main() {", " vUv = uv;", "	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"), fragmentShader: ["uniform vec2 scale;", "uniform vec2 scaleIn;", "uniform vec2 lensCenter;", "uniform vec4 hmdWarpParam;", "uniform vec4 chromAbParam;", "uniform sampler2D texid;", "varying vec2 vUv;", "void main()", "{", "  vec2 uv = (vUv*2.0)-1.0;", "  vec2 theta = (uv-lensCenter)*scaleIn;", "  float rSq = theta.x*theta.x + theta.y*theta.y;", "  vec2 rvector = theta*(hmdWarpParam.x + hmdWarpParam.y*rSq + hmdWarpParam.z*rSq*rSq + hmdWarpParam.w*rSq*rSq*rSq);", "  vec2 rBlue = rvector * (chromAbParam.z + chromAbParam.w * rSq);", "  vec2 tcBlue = (lensCenter + scale * rBlue);", "  tcBlue = (tcBlue+1.0)/2.0;", "  if (any(bvec2(clamp(tcBlue, vec2(0.0,0.0), vec2(1.0,1.0))-tcBlue))) {", "    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "    return;}", "  vec2 tcGreen = lensCenter + scale * rvector;", "  tcGreen = (tcGreen+1.0)/2.0;", "  vec2 rRed = rvector * (chromAbParam.x + chromAbParam.y * rSq);", "  vec2 tcRed = lensCenter + scale * rRed;", "  tcRed = (tcRed+1.0)/2.0;", "  gl_FragColor = vec4(texture2D(texid, tcRed).r, texture2D(texid, tcGreen).g, texture2D(texid, tcBlue).b, 1);", "}"].join("\n")});
    var o = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), a);
    var j = new THREE.Scene();
    j.add(m);
    j.add(o);
    var b = {}, l = {};
    var f = 1;
    this.setHMD = function (s) {
        n = s;
        var q = n.hResolution / (2 * n.vResolution);
        var B = -1 - (4 * (n.hScreenSize / 4 - n.lensSeparationDistance / 2) / n.hScreenSize);
        f = (n.distortionK[0] + n.distortionK[1] * Math.pow(B, 2) + n.distortionK[2] * Math.pow(B, 4) + n.distortionK[3] * Math.pow(B, 6));
        var t = THREE.Math.radToDeg(2 * Math.atan2(n.vScreenSize * f, 2 * n.eyeToScreenDistance));
        var w = (new THREE.Matrix4()).makePerspective(t, q, 0.3, 10000);
        var u = 4 * (n.hScreenSize / 4 - n.interpupillaryDistance / 2) / n.hScreenSize;
        b.proj = ((new THREE.Matrix4()).makeTranslation(u, 0, 0)).multiply(w);
        l.proj = ((new THREE.Matrix4()).makeTranslation(-u, 0, 0)).multiply(w);
        b.tranform = (new THREE.Matrix4()).makeTranslation(-e * n.interpupillaryDistance / 2, 0, 0);
        l.tranform = (new THREE.Matrix4()).makeTranslation(e * n.interpupillaryDistance / 2, 0, 0);
        b.viewport = [0, 0, n.hResolution / 2, n.vResolution];
        l.viewport = [n.hResolution / 2, 0, n.hResolution / 2, n.vResolution];
        var A = 4 * (n.hScreenSize / 4 - n.lensSeparationDistance / 2) / n.hScreenSize;
        b.lensCenter = new THREE.Vector2(A, 0);
        l.lensCenter = new THREE.Vector2(-A, 0);
        a.uniforms.hmdWarpParam.value = new THREE.Vector4(n.distortionK[0], n.distortionK[1], n.distortionK[2], n.distortionK[3]);
        a.uniforms.chromAbParam.value = new THREE.Vector4(n.chromaAbParameter[0], n.chromaAbParameter[1], n.chromaAbParameter[2], n.chromaAbParameter[3]);
        a.uniforms.scaleIn.value = new THREE.Vector2(1, 1 / q);
        a.uniforms.scale.value = new THREE.Vector2(1 / f, 1 * q / f);
        if (d) {
            d.dispose()
        }
        d = new THREE.WebGLRenderTarget(n.hResolution * f / 2, n.vResolution * f, c);
        a.uniforms.texid.value = d
    };
    this.getHMD = function () {
        return n
    };
    this.setHMD(n);
    this.setSize = function (r, q) {
        b.viewport = [r / 2 - n.hResolution / 2, q / 2 - n.vResolution / 2, n.hResolution / 2, n.vResolution];
        l.viewport = [r / 2, q / 2 - n.vResolution / 2, n.hResolution / 2, n.vResolution];
        h.setSize(r, q)
    };
    this.render = function (r, q) {
        var s = h.getClearColor().clone();
        h.setClearColor(k);
        h.clear();
        h.setClearColor(s);
        if (q.matrixAutoUpdate) {
            q.updateMatrix()
        }
        this.preLeftRender();
        g.projectionMatrix.copy(b.proj);
        g.matrix.copy(q.matrix).multiply(b.tranform);
        g.matrixWorldNeedsUpdate = true;
        h.setViewport(b.viewport[0], b.viewport[1], b.viewport[2], b.viewport[3]);
        a.uniforms.lensCenter.value = b.lensCenter;
        h.render(r, g, d, true);
        h.render(j, m);
        this.preRightRender();
        g.projectionMatrix.copy(l.proj);
        g.matrix.copy(q.matrix).multiply(l.tranform);
        g.matrixWorldNeedsUpdate = true;
        h.setViewport(l.viewport[0], l.viewport[1], l.viewport[2], l.viewport[3]);
        a.uniforms.lensCenter.value = l.lensCenter;
        h.render(r, g, d, true);
        h.render(j, m)
    };
    this.dispose = function () {
        if (a) {
            a.dispose()
        }
        if (d) {
            d.dispose()
        }
    }
};
"use strict;";
var _rho_kgpm3 = 1.2041, _wind = new THREE.Vector3(0, 0, 0), _turbulence_pcnt = 0, _turbulence = new THREE.Vector3(0, 0, 0);
function CalcInertialTensor() {
    var o = 0, m = 0, l = 0, k, f, q = 0, p = 0, n = 0, j = 0, h = 0, g = 0, d = 0, c = 0, b = 0;
    if (_aircraft.Definition.BodyDensity !== undefined) {
        for (var a in _aircraft.Definition.Sections) {
            if (_aircraft.Definition.Sections.hasOwnProperty(a)) {
                k = _aircraft.Definition.Sections[a];
                if (k.faces !== undefined) {
                    for (f = 0; f < k.faces.length; f++) {
                        if (!isNaN(k.masses[f]) && k.masses[f] > 0) {
                            o += k.masses[f] * k.centers[f].x;
                            m += k.masses[f] * k.centers[f].y;
                            l += k.masses[f] * k.centers[f].z
                        }
                    }
                } else {
                    if (k.mass !== undefined && k.mass > 0) {
                        o += k.mass * k.pos[0];
                        m += k.mass * k.pos[1];
                        l += k.mass * k.pos[2]
                    }
                }
            }
        }
    }
    _aircraft.cg = new THREE.Vector3(o / _aircraft.mass, m / _aircraft.mass, l / _aircraft.mass);
    if (_aircraft.Definition.BodyDensity !== undefined) {
        for (var a in _aircraft.Definition.Sections) {
            if (_aircraft.Definition.Sections.hasOwnProperty(a)) {
                k = _aircraft.Definition.Sections[a];
                if (k.faces !== undefined) {
                    for (f = 0; f < k.faces.length; f++) {
                        if (!isNaN(k.masses[f]) && k.masses[f] > 0) {
                            q += k.masses[f] * (k.centers[f].y * k.centers[f].y + k.centers[f].z * k.centers[f].z);
                            h += k.masses[f] * (k.centers[f].x * k.centers[f].x + k.centers[f].z * k.centers[f].z);
                            b += k.masses[f] * (k.centers[f].x * k.centers[f].x + k.centers[f].y * k.centers[f].y);
                            p += -k.masses[f] * k.centers[f].x * k.centers[f].y;
                            j += -k.masses[f] * k.centers[f].x * k.centers[f].y;
                            n += -k.masses[f] * k.centers[f].x * k.centers[f].z;
                            d += -k.masses[f] * k.centers[f].x * k.centers[f].z;
                            g += -k.masses[f] * k.centers[f].y * k.centers[f].z;
                            c += -k.masses[f] * k.centers[f].y * k.centers[f].z
                        }
                    }
                } else {
                    if (k.mass !== undefined && k.mass > 0 && k.pos !== undefined) {
                        q += k.mass * (k.pos[1] * k.pos[1] + k.pos[2] * k.pos[2]);
                        h += k.mass * (k.pos[0] * k.pos[0] + k.pos[2] * k.pos[2]);
                        b += k.mass * (k.pos[0] * k.pos[0] + k.pos[1] * k.pos[1]);
                        p += -k.mass * k.pos[0] * k.pos[1];
                        j += -k.mass * k.pos[0] * k.pos[1];
                        n += -k.mass * k.pos[0] * k.pos[2];
                        d += -k.mass * k.pos[0] * k.pos[2];
                        g += -k.mass * k.pos[1] * k.pos[2];
                        c += -k.mass * k.pos[1] * k.pos[2]
                    }
                }
            }
        }
    }
    return new THREE.Matrix4(q, p, n, 0, j, h, g, 0, d, c, b, 0, 0, 0, 0, 1)
}
function formatVec(a) {
    return(Math.round(a.x * 1000) / 1000) + "," + (Math.round(a.y * 1000) / 1000) + "," + (Math.round(a.z * 1000) / 1000)
}
function formatMatrix4(a, b) {
    return"[" + Math.round(a.elements[0] * b) / b + " " + Math.round(a.elements[1] * b) / b + " " + Math.round(a.elements[2] * b) / b + " " + a.elements[3] + "]<br>[" + Math.round(a.elements[4] * b) / b + " " + Math.round(a.elements[5] * b) / b + " " + Math.round(a.elements[6] * b) / b + " " + a.elements[7] + "]<br>[" + Math.round(a.elements[8] * b) / b + " " + Math.round(a.elements[9] * b) / b + " " + Math.round(a.elements[10] * b) / b + " " + a.elements[11] + "]<br>[" + a.elements[12] + " " + a.elements[13] + " " + a.elements[14] + " " + a.elements[15] + "]"
}
function calcMotion(u, aw) {
    if (aw) {
        _sPhysics = "<br>Mass=" + _aircraft.mass
    } else {
        _sPhysics = ""
    }
    var V = GetGroundHeight(_aircraft.position.x, _aircraft.position.y);
    var ai = new THREE.Matrix4().makeRotationFromQuaternion(_aircraft.quaternion.normalize());
    var a = new THREE.Vector3().copy(_aircraft.cg).applyMatrix4(ai);
    var g = false;
    var v = [];
    var ao = [];
    var N = [];
    var r = [];
    var d = 0;
    if (V + 5 > _aircraft.position.y) {
        if (_aircraft.Definition.Sections.S_LWheel !== undefined) {
            r[d] = "LWheel";
            v[d] = new THREE.Vector3((_aircraft.Definition.Sections.S_LWheel.pos[0] - 0.02) * _aircraft.Scale, _aircraft.Definition.Sections.S_LWheel.bottom * _aircraft.Scale, _aircraft.Definition.Sections.S_LWheel.pos[2] * _aircraft.Scale);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++;
            r[d] = "RWheel";
            v[d] = new THREE.Vector3((_aircraft.Definition.Sections.S_RWheel.pos[0] + 0.02) * _aircraft.Scale, _aircraft.Definition.Sections.S_RWheel.bottom * _aircraft.Scale, _aircraft.Definition.Sections.S_RWheel.pos[2] * _aircraft.Scale);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++;
            r[d] = "TailWheel";
            v[d] = new THREE.Vector3(_aircraft.Definition.Sections.S_TailWheel.pos[0] * _aircraft.Scale, _aircraft.Definition.Sections.S_TailWheel.bottom * _aircraft.Scale, _aircraft.Definition.Sections.S_TailWheel.pos[2] * _aircraft.Scale);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++
        } else {
            r[d] = "BodyFrontL";
            v[d] = new THREE.Vector3(_aircraft.minx, _aircraft.miny, _aircraft.minz).multiplyScalar(_aircraft.Scale);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++;
            r[d] = "BodyFrontR";
            v[d] = new THREE.Vector3(_aircraft.maxx, _aircraft.miny, _aircraft.minz).multiplyScalar(_aircraft.Scale);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++;
            r[d] = "BodyBackL";
            v[d] = new THREE.Vector3(_aircraft.minx, _aircraft.miny, _aircraft.maxz).multiplyScalar(_aircraft.Scale);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++;
            r[d] = "BodyBackR";
            v[d] = new THREE.Vector3(_aircraft.maxx, _aircraft.miny, _aircraft.maxz).multiplyScalar(_aircraft.Scale);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++
        }
        if (_aircraft.Definition.Sections.C_PropellerRunning !== undefined && _aircraft.Definition.Heli === undefined && _aircraft.Definition.Quadracopter === undefined) {
            r[d] = "Prop";
            v[d] = new THREE.Vector3(_aircraft.Definition.Sections.C_PropellerRunning.pos[0], -_aircraft.Definition.Sections.C_PropellerRunning.cylinder[0], _aircraft.Definition.Sections.C_PropellerRunning.pos[2]);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++
        }
        if (_aircraft.Definition.Sections.C_PropellerRunning !== undefined && _aircraft.Definition.Heli !== undefined) {
            r[d] = "Prop1";
            v[d] = new THREE.Vector3(_aircraft.Definition.Sections.C_PropellerRunning.pos[0], _aircraft.Definition.Sections.C_PropellerRunning.cylinder[0], _aircraft.Definition.Sections.C_PropellerRunning.pos[2]);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++;
            r[d] = "Prop2";
            v[d] = new THREE.Vector3(-_aircraft.Definition.Sections.C_PropellerRunning.pos[0], _aircraft.Definition.Sections.C_PropellerRunning.cylinder[0], _aircraft.Definition.Sections.C_PropellerRunning.pos[2]);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++;
            r[d] = "Prop3";
            v[d] = new THREE.Vector3(_aircraft.Definition.Sections.C_PropellerRunning.pos[0], _aircraft.Definition.Sections.C_PropellerRunning.cylinder[0], -_aircraft.Definition.Sections.C_PropellerRunning.pos[2]);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++;
            r[d] = "Prop4";
            v[d] = new THREE.Vector3(-_aircraft.Definition.Sections.C_PropellerRunning.pos[0], _aircraft.Definition.Sections.C_PropellerRunning.cylinder[0], -_aircraft.Definition.Sections.C_PropellerRunning.pos[2]);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++
        }
        if (_aircraft.Definition.Sections.S_WingL !== undefined) {
            r[d] = "LWing";
            v[d] = new THREE.Vector3().copy(_aircraft.Definition.Sections.S_WingL.furthestPt).multiplyScalar(_aircraft.Scale);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++
        }
        if (_aircraft.Definition.Sections.S_WingR !== undefined) {
            r[d] = "RWing";
            v[d] = new THREE.Vector3().copy(_aircraft.Definition.Sections.S_WingR.furthestPt).multiplyScalar(_aircraft.Scale);
            ao[d] = new THREE.Vector3().copy(v[d]).applyMatrix4(ai);
            N[d] = V - (_aircraft.position.y + ao[d].y);
            d++
        }
        for (var av = 0; av < N.length; av++) {
            if (N[av] > 0) {
                g = true;
                break
            }
        }
    }
    if (_turbulence_pcnt > 0) {
        var ac = _turbulence_pcnt / 100 * (_wind.length() + 1) * 10;
        var I = ac * (Math.random() - 0.5) * u;
        var H = ac * (Math.random() - 0.5) * u;
        var E = ac * (Math.random() - 0.5) * u;
        _turbulence.add(new THREE.Vector3(I, H, E));
        if (_turbulence.length() > Math.max(1, _wind.length() / 2)) {
            _turbulence.set(0, 0, 0)
        }
    }
    var ax = new THREE.Vector3().copy(_aircraft.velocity).negate().add(_wind).add(_turbulence);
    var A = new THREE.Vector3();
    if (ax.length() > 100) {
    }
    _aircraft.physics = {};
    _aircraft.physics.lbl = [];
    _aircraft.physics.F = [];
    _aircraft.physics.R = [];
    _aircraft.physics.A = [];
    var am = 0;
    if (aw) {
        _sPhysics += "<br>AirSpeed=" + formatVec(ax);
        _sPhysics += "<br>Vel=" + formatVec(_aircraft.velocity) + " A=" + formatVec(_aircraft.acceleration);
        _sPhysics += "<br>Angular Vel=" + formatVec(_aircraft.angularVelocity) + " Mom=" + formatVec(_aircraft.angularMomentum)
    }
    _aircraft.physics.lbl[am] = "gravity";
    _aircraft.physics.F[am] = new THREE.Vector3(0, -_aircraft.mass * 9.81, 0);
    _aircraft.physics.R[am] = new THREE.Vector3().copy(a);
    _aircraft.physics.A[am] = new THREE.Vector3(0, 0, 0);
    if (aw) {
        _sPhysics += "<br>" + _aircraft.physics.lbl[am] + " F=" + formatVec(_aircraft.physics.F[am]) + " R=" + formatVec(_aircraft.physics.R[am])
    }
    am++;
    if (_aircraft.speed_mps !== 0 && g) {
        var M = -_aircraft.speed_mps * 0.5;
        if (_aircraft.Definition.Sections.S_LWheel === undefined || _aircraft.Definition.Heli !== undefined || _aircraft.Definition.Quadracopter !== undefined) {
            M = -_aircraft.speed_mps * 40
        }
        _aircraft.physics.lbl[am] = "Ground drag";
        _aircraft.physics.F[am] = new THREE.Vector3(_aircraft.velocity.x, 0, _aircraft.velocity.z).normalize().multiplyScalar(M);
        _aircraft.physics.R[am] = new THREE.Vector3().copy(a);
        _aircraft.physics.A[am] = new THREE.Vector3(0, 0, 0);
        if (aw) {
            _sPhysics += "<br>" + _aircraft.physics.lbl[am] + " F=" + formatVec(_aircraft.physics.F[am]) + " R=" + formatVec(_aircraft.physics.R[am])
        }
        am++
    }
    for (var O in _aircraft.Definition.Sections) {
        if (_aircraft.Definition.Sections.hasOwnProperty(O)) {
            var ap = _aircraft.Definition.Sections[O];
            if (O.substr(0, 8) === "S_Engine") {
                if (O === "S_EngineDF") {
                    _aircraft.physics.lbl[am] = O;
                    var J = _throttle * _aircraft.EnginePower_N * Math.max((50 - ax.length()) / 50, 0);
                    _aircraft.physics.F[am] = new THREE.Vector3(0, 0, 1).applyMatrix4(ai).multiplyScalar(-J);
                    _aircraft.physics.R[am] = new THREE.Vector3(ap.pos[0], ap.pos[1], ap.pos[2]).applyMatrix4(ai);
                    _aircraft.physics.A[am] = new THREE.Vector3(0, 0, 0);
                    am++
                } else {
                    if (O === "S_Engine") {
                        if (ap.pos[2] < 0) {
                            A.set(0, 0, _throttle * _aircraft.EnginePower_N / 2 * Math.max((50 - ax.length()) / 50, 0)).applyMatrix4(ai)
                        }
                        _aircraft.physics.lbl[am] = O;
                        var J = _throttle * _aircraft.EnginePower_N * Math.max((50 - ax.length()) / 50, 0);
                        if (_aircraft.Definition.Sections.S_Engine.rot[0] !== Math.PI / 2) {
                            var Y = _aircraft.Definition.Sections.S_Engine.rot[0] - Math.PI / 2;
                            var q = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), Y);
                            _aircraft.physics.F[am] = new THREE.Vector3(0, 0, 1).applyMatrix4(q).applyMatrix4(ai).multiplyScalar(-J)
                        } else {
                            _aircraft.physics.F[am] = new THREE.Vector3(0, 0, 1).applyMatrix4(ai).multiplyScalar(-J)
                        }
                        _aircraft.physics.R[am] = new THREE.Vector3(ap.pos[0], ap.pos[1], ap.pos[2]).applyMatrix4(ai);
                        _aircraft.physics.A[am] = new THREE.Vector3(0, 0, 0);
                        am++
                    } else {
                        if (O === "S_EngineLF" || O === "S_EngineRF" || O === "S_EngineLB" || O === "S_EngineRB") {
                            A.set(0, 0, 0);
                            _aircraft.physics.lbl[am] = "Rudder";
                            var J = _throttle * _rudder * _aircraft.EnginePower_N / 2 / 4;
                            if (O === "S_EngineLF" || O === "S_EngineRF") {
                                _aircraft.physics.F[am] = new THREE.Vector3(1, 0, 0).applyMatrix4(ai).multiplyScalar(J)
                            } else {
                                _aircraft.physics.F[am] = new THREE.Vector3(1, 0, 0).applyMatrix4(ai).multiplyScalar(-J)
                            }
                            _aircraft.physics.R[am] = new THREE.Vector3(0, ap.pos[1], ap.pos[2]).applyMatrix4(ai);
                            _aircraft.physics.A[am] = new THREE.Vector3(0, 0, 0);
                            am++;
                            _aircraft.physics.lbl[am] = O;
                            var J = 0;
                            if (O === "S_EngineLF") {
                                J = _throttle * (0.8 + ((_aileron + 1) / 4 * (_elevator + 1) / 4)) * _aircraft.EnginePower_N
                            } else {
                                if (O === "S_EngineRF") {
                                    J = _throttle * (0.8 + ((1 - _aileron) / 4 * (_elevator + 1) / 4)) * _aircraft.EnginePower_N
                                } else {
                                    if (O === "S_EngineLB") {
                                        J = _throttle * (0.8 + ((_aileron + 1) / 4 * (1 - _elevator) / 4)) * _aircraft.EnginePower_N
                                    } else {
                                        if (O === "S_EngineRB") {
                                            J = _throttle * (0.8 + ((1 - _aileron) / 4 * (1 - _elevator) / 4)) * _aircraft.EnginePower_N
                                        }
                                    }
                                }
                            }
                            if (ap.rot[0] !== Math.PI / 2) {
                                var Y = ap.rot[0] - Math.PI / 2;
                                var q = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), Y);
                                _aircraft.physics.F[am] = new THREE.Vector3(0, 0, 1).applyMatrix4(q).applyMatrix4(ai).multiplyScalar(J)
                            } else {
                                _aircraft.physics.F[am] = new THREE.Vector3(0, 0, 1).applyMatrix4(ai).multiplyScalar(-J)
                            }
                            _aircraft.physics.R[am] = new THREE.Vector3(ap.pos[0], ap.pos[1], ap.pos[2]).applyMatrix4(ai);
                            _aircraft.physics.A[am] = new THREE.Vector3(0, 0, 0);
                            am++
                        } else {
                            if (O === "S_EngineHeli") {
                                if (ap.pos[2] < 0) {
                                    A.set(0, 0, 0).applyMatrix4(ai)
                                }
                                _aircraft.physics.lbl[am] = O;
                                var J = _aircraft.EnginePower_N;
                                var ag = new THREE.Vector3();
                                var w = new THREE.Vector3(0, 0, 0);
                                var n = new THREE.Vector3();
                                var U = new THREE.Vector3();
                                var X = new THREE.Vector3();
                                var ar = new THREE.Vector3();
                                var ae = new THREE.Vector3();
                                var ak = 32;
                                for (var T = 0; T < ak; T++) {
                                    ag.copy(ax);
                                    var aq = T / 32 * Math.PI * 2;
                                    w.set(Math.sin(aq) * _aircraft.Definition.PropRadius * 0.8, _aircraft.Definition.Sections.C_PropellerRunning.pos[1], Math.cos(aq) * _aircraft.Definition.PropRadius * 0.8);
                                    var at = 12 * Math.PI / 180 * (_throttle - (Math.cos(aq) * _elevator) - (Math.cos(aq - Math.PI / 2) * _aileron)) / 3;
                                    var D = new THREE.Matrix4().makeRotationAxis(w, at);
                                    ar.set(0, 1, 0);
                                    ar.applyMatrix4(D).normalize();
                                    ae.copy(ar).applyMatrix4(ai).normalize();
                                    n.copy(w).add(_aircraft.cg).applyMatrix4(ai);
                                    U.copy(_aircraft.angularVelocity).applyMatrix4(ai).cross(n).multiplyScalar(-1);
                                    ag.add(U);
                                    U.set(0, _aircraft.Definition.RotorMax_radPs, 0).applyMatrix4(ai).cross(n).multiplyScalar(-1);
                                    ag.add(U);
                                    X.copy(ag).normalize();
                                    var R = X.dot(ae);
                                    var t = R * ag.length();
                                    var G = 1;
                                    var B = 0.5 * _rho_kgpm3 * _aircraft.Definition.RotorArea * t * t * G * _aircraft.Definition.NumRotors / ak;
                                    if (at < 0) {
                                        B *= -1
                                    }
                                    _aircraft.physics.F[am] = new THREE.Vector3().copy(ae).multiplyScalar(B);
                                    _aircraft.physics.R[am] = new THREE.Vector3().copy(w).applyMatrix4(ai);
                                    _aircraft.physics.A[am] = new THREE.Vector3().copy(ag);
                                    am++
                                }
                                _aircraft.physics.lbl[am] = "Rudder";
                                var J = -_rudder * _aircraft.EnginePower_N;
                                _aircraft.physics.F[am] = new THREE.Vector3(1, 0, 0).applyMatrix4(ai).multiplyScalar(J);
                                _aircraft.physics.R[am] = new THREE.Vector3(0, 0, _aircraft.maxz).applyMatrix4(ai);
                                _aircraft.physics.A[am] = new THREE.Vector3(0, 0, 0);
                                am++
                            }
                        }
                    }
                }
            } else {
                if (ap.faces !== undefined && ap.calcWeight !== undefined) {
                    var Z = am;
                    if (ap.normals === undefined) {
                        ap.normals = []
                    }
                    for (var an = 0; an < ap.faces.length; an++) {
                        var ar = null;
                        var ae = null;
                        ar = new THREE.Vector3(ap.normals[an][0], ap.normals[an][1], ap.normals[an][2]).normalize();
                        ae = new THREE.Vector3().copy(ar).applyMatrix4(ai).normalize();
                        var ah = new THREE.Vector3().copy(ax);
                        var n = new THREE.Vector3().copy(ap.centers[an]).add(_aircraft.cg).applyMatrix4(ai);
                        if (n.length() > 0.01) {
                            var U = new THREE.Vector3().copy(_aircraft.angularVelocity).applyMatrix4(ai).cross(n).multiplyScalar(-1);
                            ah.add(U)
                        }
                        var L = ap.centers[an].x * ap.centers[an].x + ap.centers[an].y * ap.centers[an].y;
                        if (L > 0.04 * 0.04 && L < 0.18 * 0.18) {
                            ah.add(A)
                        }
                        if (O === "C_Elevator") {
                            var D = new THREE.Matrix4().makeRotationAxis(ap.rotationAxis, -_elevator * ap.maxDeflection_rad);
                            ar.applyMatrix4(D).normalize();
                            ae.copy(ar).applyMatrix4(ai).normalize()
                        } else {
                            if (O === "C_Rudder") {
                                var D = new THREE.Matrix4().makeRotationAxis(ap.rotationAxis, _rudder * ap.maxDeflection_rad);
                                ar.applyMatrix4(D).normalize();
                                ae.copy(ar).applyMatrix4(ai).normalize()
                            } else {
                                if (O === "C_AileronL") {
                                    var D = new THREE.Matrix4().makeRotationAxis(ap.rotationAxis, -_aileron * ap.maxDeflection_rad);
                                    ar.applyMatrix4(D).normalize();
                                    ae.copy(ar).applyMatrix4(ai).normalize()
                                } else {
                                    if (O === "C_AileronR") {
                                        var D = new THREE.Matrix4().makeRotationAxis(ap.rotationAxis, -_aileron * ap.maxDeflection_rad);
                                        ar.applyMatrix4(D).normalize();
                                        ae.copy(ar).applyMatrix4(ai).normalize()
                                    } else {
                                        if (O === "C_ElevonL") {
                                            var D = new THREE.Matrix4().makeRotationAxis(ap.rotationAxis, -(_elevator - _aileron) / 2 * ap.maxDeflection_rad);
                                            ar.applyMatrix4(D).normalize();
                                            ae.copy(ar).applyMatrix4(ai).normalize()
                                        } else {
                                            if (O === "C_ElevonR") {
                                                var D = new THREE.Matrix4().makeRotationAxis(ap.rotationAxis, -(_elevator + _aileron) / 2 * ap.maxDeflection_rad);
                                                ar.applyMatrix4(D).normalize();
                                                ae.copy(ar).applyMatrix4(ai).normalize()
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        var X = new THREE.Vector3().copy(ah).normalize();
                        var R = X.dot(ae);
                        var t = R * ah.length();
                        var G = 1;
                        var B = 0.5 * _rho_kgpm3 * ap.areas[an] * t * t * G;
                        if (R >= 0) {
                            B *= -1
                        }
                        if (ap.calcWeight !== undefined) {
                            B *= ap.calcWeight
                        }
                        if (isNaN(B) || isNaN(ae.x) || isNaN(ae.y) || isNaN(ae.z)) {
                        }
                        _aircraft.physics.lbl[am] = O + an;
                        _aircraft.physics.F[am] = new THREE.Vector3().copy(ae).multiplyScalar(-B);
                        _aircraft.physics.R[am] = new THREE.Vector3().copy(ap.centers[an]).applyMatrix4(ai);
                        _aircraft.physics.A[am] = new THREE.Vector3().copy(ah);
                        am++
                    }
                    if (aw && am > Z) {
                        var af = new THREE.Vector3(0, 0, 0);
                        var p = new THREE.Vector3(0, 0, 0);
                        for (var al = Z; al < am; al++) {
                            var W = new THREE.Vector3().copy(_aircraft.physics.R[al]).cross(_aircraft.physics.F[al]);
                            af.add(W);
                            p.add(_aircraft.physics.F[al])
                        }
                        _sPhysics += "<br>" + O + " F=" + formatVec(p) + " T=" + formatVec(af) + " Air=" + formatVec(ah)
                    }
                }
            }
        }
    }
    var aj = 55;
    var l = false;
    for (var av = 0; av < v.length; av++) {
        if (N[av] > 0) {
            l = true;
            if (true) {
                _aircraft.physics.lbl[am] = r[av];
                _aircraft.physics.F[am] = new THREE.Vector3(0, Math.min(9.8 * _aircraft.mass, N[av] * aj), 0);
                _aircraft.physics.R[am] = new THREE.Vector3().copy(ao[av]);
                _aircraft.physics.A[am] = new THREE.Vector3(0, 0, 0);
                var W = new THREE.Vector3().copy(_aircraft.physics.R[am]).add(a).cross(_aircraft.physics.F[am]);
                if (aw) {
                    _sPhysics += "<br>" + _aircraft.physics.lbl[am] + " F=" + formatVec(_aircraft.physics.F[am]) + " R=" + formatVec(_aircraft.physics.R[am]) + " T=" + formatVec(W)
                }
                am++
            }
        }
    }
    _aircraft.torqueW.set(0, 0, 0);
    _aircraft.forceW.set(0, 0, 0);
    for (var al = 0; al < am; al++) {
        if (isNaN(_aircraft.physics.F[al].x) || isNaN(_aircraft.physics.F[al].y) || isNaN(_aircraft.physics.F[al].z) || Math.abs(_aircraft.physics.F[al].length()) > _aircraft.Definition.EnginePower_N * _aircraft.Scale * 20) {
        } else {
            var W = new THREE.Vector3().copy(_aircraft.physics.R[al]).add(a).cross(_aircraft.physics.F[al]);
            _aircraft.torqueW.add(W);
            _aircraft.forceW.add(_aircraft.physics.F[al])
        }
    }
    if (g) {
        if (Math.abs(_aircraft.velocity.x) < 0.1) {
            _aircraft.velocity.x *= 0.9
        }
        if (Math.abs(_aircraft.velocity.z) < 0.1) {
            _aircraft.velocity.z *= 0.9
        }
    }
    if (l) {
        if (_aircraft.velocity.y < 0) {
            _aircraft.velocity.y *= 0.8
        }
    }
    if (aw) {
        _sPhysics += "<br>Total FW=" + formatVec(_aircraft.forceW) + " TW=" + formatVec(_aircraft.torqueW)
    }
    if (!_bAnchor) {
        var h = new THREE.Vector3().copy(_aircraft.acceleration);
        var au = new THREE.Vector3().copy(_aircraft.velocity);
        var F = new THREE.Vector3().copy(h).multiplyScalar(0.5 * u * u);
        var aa = new THREE.Vector3().copy(au).multiplyScalar(u).add(F);
        _aircraft.position.add(aa);
        var b = new THREE.Vector3(_aircraft.forceW.x / _aircraft.mass, _aircraft.forceW.y / _aircraft.mass, _aircraft.forceW.z / _aircraft.mass);
        var C = (h.add(b).multiplyScalar(0.5));
        _aircraft.velocity.copy(aa).multiplyScalar(1 / u);
        _aircraft.acceleration.copy(C);
        if (_aircraft.forceW.length() > 1000 || _aircraft.velocity.length() > 1000) {
        }
        if (_aircraft.Definition.Heli !== undefined) {
            if (_aircraft.HeliRotorI === undefined) {
                _aircraft.HeliRotorI = new THREE.Matrix3(1 / 12 * _aircraft.Definition.RotorMass * _aircraft.Definition.NumRotors * 3 * Math.pow(_aircraft.Definition.RotorLength * 0.8, 2), 0, 0, 0, 1 / 2 * _aircraft.Definition.RotorMass * _aircraft.Definition.NumRotors * Math.pow(_aircraft.Definition.RotorLength * 0.8, 2), 0, 0, 0, 1 / 12 * _aircraft.Definition.RotorMass * _aircraft.Definition.NumRotors * 3 * Math.pow(_aircraft.Definition.RotorLength * 0.8, 2))
            }
            var ad = _aircraft.angularAcceleration.applyMatrix3(_aircraft.HeliRotorI).multiplyScalar(-2300 * 360 * Math.PI / 180 * u);
            _aircraft.torqueW.add(ad)
        }
        var Q = _aircraft.torqueW.multiplyScalar(u);
        _aircraft.angularMomentum.add(Q).multiplyScalar(_aircraft.rotationalDampingFactor);
        var m = new THREE.Matrix4().copy(_aircraft.InertialTensor).multiply(ai);
        try {
            var ab = new THREE.Matrix4().getInverse(m);
            var s = new THREE.Vector3().copy(_aircraft.angularMomentum).applyMatrix4(ab)
        } catch (ap) {
            var s = new THREE.Vector3(0, 0, 0);
        }
        var P = 90 / _numCalcsPerFrame / u;
        if (Math.abs(s.x) > P) {
            s.x = P * s.x / Math.abs(s.x)
        }
        if (Math.abs(s.y) > P) {
            s.y = P * s.y / Math.abs(s.y)
        }
        if (Math.abs(s.z) > P) {
            s.z = P * s.z / Math.abs(s.z)
        }
        var S = new THREE.Vector3().copy(_aircraft.angularVelocity).negate();
        _aircraft.angularAcceleration = new THREE.Vector3().copy(s).add(S);
        _aircraft.angularVelocity.set(s.x, s.y, s.z);
        if (isNaN(ab.elements[0]) || isNaN(_aircraft.angularVelocity.x)) {
        }
        var o = new THREE.Euler(_aircraft.angularVelocity.x * u, _aircraft.angularVelocity.y * u, _aircraft.angularVelocity.z * u);
        _aircraft.tmpQuaternion.setFromEuler(o, true).normalize();
        if (aw) {
            var K = _aircraft.InertialTensor;
            if (ab === undefined) {
                var ab = _aircraft.InvInertialTensor
            }
            _sPhysics += "<br>IT " + formatMatrix4(K, 1000);
            _sPhysics += "<br>IIT " + formatMatrix4(ab, 1)
        }
    } else {
        _aircraft.angularVelocity.set(0, 0.5, 0)
    }
    if (_pause == false) {
        _aircraft.quaternion.multiply(_aircraft.tmpQuaternion);
        _aircraft.quaternion.normalize();
        _aircraft.matrix.setPosition(_aircraft.position);
        _aircraft.matrix.makeRotationFromQuaternion(_aircraft.quaternion);
        _aircraft.matrixWorldNeedsUpdate = true
    }
}
function BufferLoader(b, a, c) {
    this.context = b;
    this.urlList = a;
    this.onload = c;
    this.bufferList = [];
    this.loadCount = 0
}
BufferLoader.prototype.loadBuffer = function (c, b) {
    var d = new XMLHttpRequest();
    d.open("GET", c, true);
    d.responseType = "arraybuffer";
    var a = this;
    d.onload = function () {
        a.context.decodeAudioData(d.response, function (e) {
            if (!e) {
                alert("error decoding file data: " + c);
                return
            }
            a.bufferList[b] = e;
            if (++a.loadCount == a.urlList.length) {
                a.onload(a.bufferList)
            }
        }, function (e) {
            console.error("decodeAudioData error", e)
        })
    };
    d.onerror = function () {
        alert("BufferLoader: XHR error")
    };
    d.send()
};
BufferLoader.prototype.load = function () {
    for (var a = 0; a < this.urlList.length; ++a) {
        this.loadBuffer(this.urlList[a], a)
    }
};
function createSource(a) {
    var c = context.createBufferSource();
    var b = context.createGain();
    c.buffer = a;
    c.loop = false;
    c.connect(b);
    b.connect(context.destination);
    return{source: c, gainNode: b}
}
window.onload = init;
var context;
var bufferLoader;
var sndEngine;
var idxEngine = 0;
var idxCrash = 1;
var idxExplosion = 2;
var idxGun1 = 3;
var idxGun2 = 4;
var idxBomb1 = 5;
var idxBomb2 = 6;
var idxBulletImpact = 7;
var idxTone = 8;
var idxToneLong = 9;
var _lastGun1SoundStart_ms = 0;
var _lastGun2SoundStart_ms = 0;
var _lastBomb1SoundStart_ms = 0;
var _lastBomb2SoundStart_ms = 0;
function init() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
    bufferLoader = new BufferLoader(context, ["./aircraft/Generic/Engine.wav", "./aircraft/Generic/crash.wav", "./aircraft/Generic/explosion4.wav", "./aircraft/Generic/Bullet.wav", "./aircraft/Generic/Bullet.wav", "./aircraft/Generic/bombDoor1.wav", "./aircraft/Generic/bombDoor1.wav", "./aircraft/Generic/bulletImpact.wav", "./aircraft/Generic/tone.wav", "./aircraft/Generic/toneLong.wav"], finishedLoading);
    bufferLoader.load()
}
function finishedLoading(a) {
    sndEngine = createSource(a[idxEngine]);
    sndEngine.gainNode.gain.value = 0.1;
    sndEngine.source.loop = true;
    sndEngine.source.start(0)
}
function playSound(c, d) {
    var b = bufferLoader.bufferList[c];
    var a = createSource(b);
    a.gainNode.gain.value = d;
    a.source.playbackRate.value = 1;
    a.source.start(0)
}
"use strict;";
var _touches = [];
var _dt = 0;
var _dtOverride = 0;
var _pause = false;
var _UseOculus = false;
var _controlExpo = true;
var _numCalcsPerFrame = 20;
var _maxFaceArea = 0.1 * 0.1;
var _lastLaunchMethod = "";
var _bShowPhysicsArrows = false;
var _bShowPhysicsDebugInfo = false;
var _bAnchor = false;
var _bAllowCrash = true;
var _score = 0;
var _aircraft = null;
var _standardViewAngle = 20;
if (_mobile) {
    _standardViewAngle = 10
}
var _viewAngle = _standardViewAngle;
var _cameraMode = 0;
var _throwCountdown = -1;
var _dDistCamToPlane = 0;
var _bullets = [];
var _bombs = [];
var _groundExplosion = [];
var _particles = [];
var _rudder = 0, _throttle = 0, _aileron = 0, _elevator = 0, _gun1 = 0, _gun2 = 0, _bomb1 = 0, _bomb2 = 0;
var gamepadSupportAvailable = !!navigator.webkitGetGamepads || !!navigator.webkitGamepads;
document.onselectstart = function () {
    return false
};
document.onkeydown = checkKeyDown;
document.onkeyup = checkKeyUp;
window.addEventListener("resize", onWindowResize, false);
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    VREffect.setSize(window.innerWidth, window.innerHeight);
    renderer.setSize(window.innerWidth, window.innerHeight)
}
var keys = [];
for (var i = 0; i < 255; i++) {
    keys[i] = 0
}
function AdjustCameraFOV() {
    var a = 80;
    if (_mobile) {
        a = 40
    }
    if (_cameraMode == 0 && _dDistCamToPlane > a) {
        camera.fov = _viewAngle * a / _dDistCamToPlane;
        camera.updateProjectionMatrix()
    } else {
        if (camera.fov !== _viewAngle) {
            camera.fov = _viewAngle;
            camera.updateProjectionMatrix()
        }
    }
}
function chooseAircraft(b) {
    CreateFoamyAircraft(_aircraftDef[b], _aircraftDef[b].Scale);
    _aircraft.InertialTensor = CalcInertialTensor();
    var a = new THREE.Matrix4().copy(_aircraft.InertialTensor);
    _aircraft.InvInertialTensor = new THREE.Matrix4().getInverse(a);
    resetAircraft()
}
function resetAircraft() {
    _lastLaunchMethod = "";
    _aircraft.crashTime_ms = -1;
    _viewAngle = _standardViewAngle;
    if (_aircraft.Definition.Sections.S_LWheel !== undefined) {
        _aircraft.Initialize(4, GetGroundHeight(4, 4) - _aircraft.Definition.Sections.S_LWheel.bottom * _aircraft.Scale, 2)
    } else {
        _aircraft.Initialize(4, GetGroundHeight(4, 4) - _aircraft.miny * _aircraft.Scale, 2)
    }
    _throttle = 0;
    _elevator = 0;
    _aileron = 0;
    _rudder = 0;
    _gun1 = 0;
    _bomb1 = 0;
    try {
        $("#divOptions").dialog("close")
    } catch (a) {
    }
}
function doDropTest() {
    _lastLaunchMethod = "Drop";
    _aircraft.crashTime_ms = -1;
    _aircraft.Initialize(60, GetGroundHeight(40, 40) + 300, 90);
    _throttle = 0;
    _elevator = 0;
    _aileron = 0;
    _rudder = 0;
    _gun1 = 0;
    _bomb1 = 0;
    $("#info").html("");
    $("#divOptions").dialog("close")
}
function doThrow() {
    _lastLaunchMethod = "Throw";
    _aircraft.crashTime_ms = -1;
    _aircraft.Initialize(4, GetGroundHeight(4, 0) + 2, 0);
    _throttle = 0;
    _elevator = 0;
    _aileron = 0;
    _rudder = 0;
    _gun1 = 0;
    _bomb1 = 0;
    _aircraft.velocity.set(0, 2, -20);
    _pause = true;
    _throwCountdown = 4;
    $("#info").html("");
    $("#divOptions").dialog("close");
    $("#countDown").html("Get ready, Throwing in...");
    $("#countDown").show();
    window.setTimeout(function () {
        throwStep()
    }, 1000)
}
function throwStep() {
    _throwCountdown--;
    $("#countDown").html("Get ready, Throwing in...<br>" + _throwCountdown);
    if (_throwCountdown < 1) {
        playSound(idxToneLong, 1);
        $("#countDown").hide();
        _pause = false
    } else {
        window.setTimeout(function () {
            throwStep()
        }, 1000);
        playSound(idxTone, 1)
    }
}
function setCameraMode(a) {
    var b = $("#" + a).val();
    if ((b === undefined || b === null) && a >= "0") {
        b = a
    }
    if (b > 3) {
        b = 0
    }
    if (b >= 0) {
        _cameraMode = b
    }
    AdjustCameraFOV()
}
function setCrashes(a) {
    _bAllowCrash = $("#" + a).is(":checked")
}
function setPhysicsInfo(a) {
    _bShowPhysicsDebugInfo = $("#" + a).is(":checked")
}
function setPhysicsArrows(a) {
    _bShowPhysicsArrows = $("#" + a).is(":checked");
    if (!_bShowPhysicsArrows) {
        for (var b = 0; b < arrowHelpers.length; b++) {
            arrowHelpers[b].position.set(1, -100, 0);
            arrowHelpers[b].setLength(1)
        }
    }
}
function setAnchor(a) {
    _bAnchor = $("#" + a).is(":checked")
}
function HitATarget(b, e, d, c) {
    for (var a = 0; a < _targets.length; a++) {
        if (Math.abs(b - _targets[a].x) <= c) {
            if (Math.abs(d - _targets[a].z) <= c) {
                return a
            }
        }
    }
    return -1
}
function checkKeyDown(a) {
    a = a || window.event;
    keys[a.keyCode] = 1
}
function checkKeyUp(a) {
    a = a || window.event;
    switch (a.keyCode) {
        case 32:
            if (keys[32] == 1) {
                _pause = !_pause
            }
            break;
        case 68:
            if (keys[68] == 1) {
                doDropTest()
            }
            break;
        case 69:
            if (keys[69] == 1) {
                _controlExpo = !_controlExpo
            }
            break;
        case 82:
            if (keys[82] == 1) {
                resetAircraft()
            }
            break;
        case 84:
            if (keys[84] == 1) {
                doThrow()
            }
            break;
        case 73:
            if (keys[73] == 1) {
                resetAircraft()
            }
            break;
        case 86:
            if (keys[70] == 1) {
                setCameraMode(_cameraMode + 1)
            }
            break;
        case 107:
            if (keys[107] == 1) {
                _viewAngle *= 0.9;
                if (_viewAngle < 1) {
                    _viewAngle = 1
                }
            }
            break;
        case 109:
            if (keys[109] == 1) {
                _viewAngle *= 1.1;
                if (_viewAngle > 180) {
                    _viewAngle = 180
                }
            }
            break
    }
    keys[a.keyCode] = 0
}
function CreateExplosion(g, f, e, h, d, j) {
    var a = new THREE.Mesh(new THREE.SphereGeometry(0.2, 12, 12), d);
    a.position = new THREE.Vector3(g, f, e);
    a.ExpSize = 1;
    a.ExpMult = 2;
    a.MaxSize = h;
    _groundExplosion.push(a);
    scene.add(a);
    var c = Math.sqrt(Math.pow(camera.position.x - g, 2) + Math.pow(camera.position.y - f, 2) + Math.pow(camera.position.z - e, 2));
    var b = Math.min(1, 5 / c);
    playSound(j, b)
}
if (gamepadSupportAvailable) {
    gamepadSupport.init()
}
var $container = $("#containerWebGL");
$container.width($(window).width());
$container.height($(window).height());
var WIDTH = $container.width(), HEIGHT = $container.height();
var ASPECT = WIDTH / HEIGHT, NEAR = 0.1, FAR = 6000;
var renderer = new THREE.WebGLRenderer();
var VREffect = new THREE.OculusRiftEffect(renderer);
VREffect.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;
renderer.shadowCameraNear = NEAR;
renderer.shadowCameraFar = FAR;
renderer.shadowCameraFov = _viewAngle;
renderer.shadowMapBias = 0.0039;
renderer.shadowMapDarkness = 0.5;
renderer.shadowMapWidth = 1024;
renderer.shadowMapHeight = 1024;
renderer.shadowCameraVisible = true;
var centerHeight = GetGroundHeight(0, 0);
var camera = new THREE.PerspectiveCamera(_viewAngle, ASPECT, NEAR, FAR);
camera.position.x = 0;
camera.position.y = centerHeight + 2;
camera.position.z = 0;
camera.up = new THREE.Vector3(0, 1, 0);
var scene = new THREE.Scene();
renderer.setSize(WIDTH, HEIGHT);
renderer.setDepthTest(true);
$container.append(renderer.domElement);
var sImgPath = "img/";
if (_mobile) {
    sImgPath = "img/mobile/"
}
var sphereMaterial = new THREE.MeshLambertMaterial({color: 13421772, map: THREE.ImageUtils.loadTexture(sImgPath + "Planet.jpg")});
var cubeMaterial = new THREE.MeshLambertMaterial({color: 52272});
var bulletMaterial = new THREE.MeshLambertMaterial({color: 11171634});
var bombMaterial = new THREE.MeshLambertMaterial({color: 5855577, map: THREE.ImageUtils.loadTexture(sImgPath + "metal.jpg")});
var fireMaterial = new THREE.MeshLambertMaterial({color: 15790320, map: THREE.ImageUtils.loadTexture(sImgPath + "fire.jpg")});
var targetHitMaterial = new THREE.MeshLambertMaterial({color: 16777215, map: THREE.ImageUtils.loadTexture(sImgPath + "TargetExplosion.jpg")});
var dirtMaterial = new THREE.MeshLambertMaterial({color: 10526880, map: THREE.ImageUtils.loadTexture(sImgPath + "dirt.jpg")});
var flagPoleMaterial = new THREE.MeshLambertMaterial({color: 15790320});
var flagPole1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 15, 8, 1, openEnded), flagPoleMaterial);
flagPole1.position.set(-20, GetGroundHeight(-20, -50), -50);
scene.add(flagPole1);
var flagPole2 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 15, 8, 1, openEnded), flagPoleMaterial);
flagPole2.position.set(-20, GetGroundHeight(-20, -30), -30);
scene.add(flagPole2);
var flagPole3 = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 15, 8, 1, openEnded), flagPoleMaterial);
flagPole3.position.set(-20, GetGroundHeight(-20, -10), -10);
scene.add(flagPole3);
var postMaterial = new THREE.MeshLambertMaterial({color: 10526880, map: THREE.ImageUtils.loadTexture(sImgPath + "dirt.jpg")});
var lasty = -9000000000;
var post, FenceBoard;
var x, y, z;
for (z = -145; z < 146; z = z + 3) {
    y = GetGroundHeight(70, z);
    post = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 1, 7, 1, openEnded), postMaterial);
    post.position.set(70, y + 0.5, z);
    scene.add(post);
    if (lasty > -900000000) {
        FenceBoard = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3, 4, 1, openEnded), postMaterial);
        FenceBoard.position.set(70, y + 1 / 3, z - 1.5);
        FenceBoard.rotation.set(Math.PI / 2, 0, 0);
        scene.add(FenceBoard);
        FenceBoard = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3, 4, 1, openEnded), postMaterial);
        FenceBoard.position.set(70, y + 2 / 3, z - 1.5);
        FenceBoard.rotation.set(Math.PI / 2, 0, 0);
        scene.add(FenceBoard)
    }
    lasty = y
}
function createTarget(a, g, e, b) {
    var d = new THREE.Object3D();
    var f = new THREE.Mesh(new THREE.CubeGeometry(1, 0.25, 1, 1, 1, 1), b);
    f.position.set(a, g, e);
    d.add(f);
    return d
}
var targetMaterial = new THREE.MeshLambertMaterial({color: 10526880, map: THREE.ImageUtils.loadTexture(sImgPath + "metal.jpg")});
var _targets = [];
for (i = 0; i < 80; i++) {
    x = (Math.random() - 0.5) * 100;
    z = (Math.random() - 0.5) * 100;
    if (x > 0 && x < 15) {
        while (z < 10 && z > -30) {
            z = (Math.random() - 0.5) * 100
        }
    }
    y = GetGroundHeight(x, z);
    _targets[i] = createTarget(x, y, z, targetMaterial);
    _targets[i].x = x;
    _targets[i].z = z
}
for (i = 0; i < _targets.length; i++) {
    scene.add(_targets[i])
}
var radius = 5, segments = 16, rings = 16;
var sphere = new THREE.Mesh(new THREE.SphereGeometry(radius, segments, rings), fireMaterial);
sphere.position.x = 90;
sphere.position.y = 90;
sphere.position.z = 35;
scene.add(sphere);
var sphere2 = new THREE.Mesh(new THREE.SphereGeometry(radius / 2, segments, rings), sphereMaterial);
scene.add(sphere2);
var cube = new THREE.Mesh(new THREE.CubeGeometry(radius, radius, radius), dirtMaterial);
cube.position.y = radius * 20;
scene.add(cube);
var radiusTop = 2, radiusBottom = 0.1, height = 10, radiusSegments = 16, heightSegments = 1, openEnded = false;
var cyl = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radiusSegments, heightSegments, openEnded), sphereMaterial);
scene.add(cyl);
var groundMesh = new THREE.Mesh(geometryGround, groundMaterial);
groundMesh.rotation.x = -Math.PI / 2;
scene.add(groundMesh);
var asphaltTexture = THREE.ImageUtils.loadTexture(sImgPath + "asphalt.jpg");
asphaltTexture.wrapS = asphaltTexture.wrapT = THREE.RepeatWrapping;
asphaltTexture.repeat.set(4, 8);
asphaltTexture.needsUpdate = true;
var asphaltMaterial = new THREE.MeshLambertMaterial({color: 8421504, map: asphaltTexture});
var geometryStrip = new THREE.PlaneGeometry(15, 40);
var asphaltMesh = new THREE.Mesh(geometryStrip, asphaltMaterial);
asphaltMesh.position.set(9, centerHeight, -10);
asphaltMesh.rotation.x = -Math.PI / 2;
scene.add(asphaltMesh);
var axisHelper = new THREE.AxisHelper();
axisHelper.position.set(2, centerHeight + 0.01, 2);
scene.add(axisHelper);
var arrowHelpers = [];
chooseAircraft("3DWithAirfoil");
makeSkyBox("1");
scene.add(camera);
var directionalLight = new THREE.DirectionalLight(16777215, 0.8);
directionalLight.position.set(-4500, -2000, 4500);
directionalLight.target = sphere;
scene.add(directionalLight);
var light = new THREE.AmbientLight(12632256);
scene.add(light);
var _nTime_ms = 0;
var _nLoopCount = 0;
var _IsOnGround = false;
var _sPhysics = "";
function render() {
    requestAnimationFrame(render);
    var U = 0;
    var W = new Date();
    var R = W.getTime();
    var B = R - _nTime_ms;
    _nTime_ms = R;
    if (B <= 1) {
        B = 1
    }
    if (B > 1000 / 2) {
        B = 1000 / 2
    }
    _dt = B / 1000;
    if (_dtOverride > 0) {
        _dt = _dtOverride
    }
    sphere.position.z = centerHeight + 40 + 10 * Math.sin(_nTime_ms / 10000);
    cube.position.x = sphere.position.x + 3 * radius * Math.sin(_nTime_ms / 1000);
    cube.position.y = sphere.position.y + 4 * radius * Math.cos(_nTime_ms / 1000);
    cube.position.z = sphere.position.z + 5 * radius * Math.cos(_nTime_ms / 1000);
    cube.rotation.x += Math.PI * _dt;
    cube.rotation.z += Math.PI * _dt;
    sphere.rotation.y += Math.PI / 5 * _dt;
    sphere2.rotation.y += Math.PI / 3 * _dt;
    sphere2.position.x = sphere.position.x - 2 * radius * Math.sin(_nTime_ms / 1000);
    sphere2.position.y = sphere.position.y - 2 * radius * Math.cos(_nTime_ms / 1000);
    sphere2.position.z = sphere.position.z + Math.cos(_nTime_ms / 1000);
    cyl.rotation.z += Math.PI * _dt;
    cyl.position.x = sphere2.position.x + 5;
    cyl.position.y = sphere2.position.y;
    cyl.position.z = sphere2.position.z - 5;
    if (_aircraft !== null) {
        var c = new THREE.Vector3();
        if (_aircraft.lastMatrix !== undefined) {
            c.getPositionFromMatrix(_aircraft.lastMatrix)
        }
        var V = new THREE.Euler();
        V.setFromQuaternion(_aircraft.quaternion.normalize());
        _aircraft.roll = V.z;
        _aircraft.yaw = V.y;
        _aircraft.pitch = V.x;
        if (gamepadSupportAvailable && gamepadSupport.gamepads.length > 0) {
            _rudder = gamepadSupport.gamepads[0].axes[0];
            _throttle = -gamepadSupport.gamepads[0].axes[1];
            if (_throttle < 0 && _aircraft.Definition.Heli === undefined) {
                _throttle = 0
            }
            _aileron = gamepadSupport.gamepads[0].axes[2];
            _elevator = gamepadSupport.gamepads[0].axes[3];
            if (_controlExpo) {
                if (_elevator !== 0) {
                    _elevator = _elevator / Math.abs(_elevator) * _elevator * _elevator
                }
                if (_rudder !== 0) {
                    _rudder = _rudder * _rudder * _rudder / Math.abs(_rudder)
                }
                if (_aileron !== 0) {
                    _aileron = _aileron * _aileron * _aileron / Math.abs(_aileron)
                }
            }
            _gun1 = gamepadSupport.gamepads[0].buttons[4];
            _gun2 = gamepadSupport.gamepads[0].buttons[6];
            _bomb1 = gamepadSupport.gamepads[0].buttons[5];
            _bomb2 = gamepadSupport.gamepads[0].buttons[7]
        } else {
            if (_touches.length > 0) {
                for (var U = 0; U < _touches.length; U++) {
                    var S = _touches[U];
                    if (S.pageX < window.innerWidth / 3) {
                        _rudder = (S.pageX - window.innerWidth / 6) / (window.innerWidth / 6);
                        _throttle = -(S.pageY - window.innerHeight / 2) / (window.innerHeight * (2 / 3) / 2)
                    } else {
                        if (S.pageX > window.innerWidth * 2 / 3) {
                            _elevator = (S.pageY - window.innerHeight / 2) / (window.innerHeight * (2 / 3) / 2);
                            _aileron = (S.pageX - window.innerWidth * (5 / 6)) / (window.innerWidth / 6)
                        }
                    }
                }
                if (_throttle < 0 && _aircraft.Definition.Heli === undefined) {
                    _throttle = 0
                }
                if (_throttle > 1) {
                    _throttle = 1
                }
                if (_rudder < -1) {
                    _rudder = -1
                }
                if (_rudder > 1) {
                    _rudder = 1
                }
                if (_elevator < -1) {
                    _elevator = -1
                }
                if (_elevator > 1) {
                    _elevator = 1
                }
                if (_aileron < -1) {
                    _aileron = -1
                }
                if (_aileron > 1) {
                    _aileron = 1
                }
            }
            if (keys[100] > 0) {
                _aileron -= 0.02
            }
            if (keys[104] > 0) {
                _elevator -= 0.02
            }
            if (keys[102] > 0) {
                _aileron += 0.02
            }
            if (keys[98] > 0) {
                _elevator += 0.02
            }
            if (keys[101] > 0) {
                _elevator = 0;
                _aileron = 0;
                _rudder = 0
            }
            if (keys[105] > 0) {
                _throttle += 0.02;
                if (_throttle > 1) {
                    _throttle = 1
                }
            }
            if (keys[99] > 0) {
                _throttle -= 0.02;
                if (_throttle < 0) {
                    _throttle = 0
                }
            }
            if (keys[97] > 0) {
                _gun1 = 1
            } else {
                _gun1 = 0
            }
            if (keys[103] > 0) {
                _bomb1 = 1
            } else {
                _bomb1 = 0
            }
        }
        if (_aircraft.Definition.EnginePower_N === undefined) {
            _throttle = 0
        }
        var Q = new THREE.Matrix4().makeRotationFromQuaternion(_aircraft.quaternion);
        _dDistCamToPlane = Math.sqrt(Math.pow(camera.position.x - _aircraft.position.x, 2) + Math.pow(camera.position.y - _aircraft.position.y, 2) + Math.pow(camera.position.z - _aircraft.position.z, 2));
        var K = Math.min(1, 5 / _dDistCamToPlane);
        var L = K * Math.max(0, _throttle);
        if (_aircraft.Definition.Heli !== undefined) {
            L = K * Math.max(0, 0.8 + Math.abs(_throttle) / 5)
        }
        if (_aircraft.crashTime_ms < 0) {
            if (_pause == false) {
                for (var l = 0; l < _numCalcsPerFrame; l++) {
                    calcMotion(_dt / _numCalcsPerFrame, _bShowPhysicsDebugInfo && l == _numCalcsPerFrame - 1)
                }
                document.getElementById("speed").style.width = (_aircraft.speed_mps * 1.666) + "%";
                if (_bShowPhysicsArrows) {
                    if (arrowHelpers.length <= 0) {
                        for (U = 0; U < 600; U++) {
                            arrowHelpers[U] = new THREE.ArrowHelper(new THREE.Vector3(1, 0, 0), new THREE.Vector3(1, -100, 0), 1, 16711680);
                            scene.add(arrowHelpers[U])
                        }
                    }
                    U = 0;
                    for (T = 0; T < _aircraft.physics.F.length; T++) {
                        var G = new THREE.Vector3().copy(_aircraft.position).add(_aircraft.physics.R[T]);
                        var q = new THREE.Vector3().copy(_aircraft.physics.F[T]);
                        var N = q.length();
                        if (N == 0) {
                            N = 0.0001
                        }
                        arrowHelpers[U].position.set(G.x, G.y, G.z);
                        arrowHelpers[U].setDirection(q.normalize());
                        arrowHelpers[U].setLength(N);
                        arrowHelpers[U].setColor(16711680);
                        U++;
                        if (U >= arrowHelpers.length) {
                            break
                        }
                    }
                    if (_aircraft.velocity.length() > 0 && U < arrowHelpers.length) {
                        arrowHelpers[U].position.set(_aircraft.position.x, _aircraft.position.y, _aircraft.position.z);
                        arrowHelpers[U].setDirection(new THREE.Vector3().copy(_aircraft.velocity).normalize());
                        arrowHelpers[U].setLength(_aircraft.velocity.length() / 10);
                        arrowHelpers[U].setColor(65280);
                        U++
                    }
                    if (false) {
                        arrowHelpers[U].position.set(_aircraft.position.x, _aircraft.position.y + 1, _aircraft.position.z);
                        arrowHelpers[U].setDirection(_aircraft.torqueW);
                        arrowHelpers[U].setLength(_aircraft.torqueW.length());
                        arrowHelpers[U].setColor(65535);
                        U++
                    }
                    for (var T = 0; T < _aircraft.physics.A.length; T++) {
                        if (_aircraft.physics.A[T].length() > 0 && U < arrowHelpers.length) {
                            var G = new THREE.Vector3().copy(_aircraft.position).add(_aircraft.physics.R[T]);
                            var J = new THREE.Vector3().copy(_aircraft.physics.A[T]);
                            ALen = J.length() / 20;
                            arrowHelpers[U].position.set(G.x, G.y, G.z);
                            arrowHelpers[U].setDirection(J.normalize());
                            arrowHelpers[U].setLength(ALen);
                            arrowHelpers[U].setColor(255);
                            U++;
                            if (U >= arrowHelpers.length) {
                                break
                            }
                        }
                    }
                    for (; U < arrowHelpers.length; U++) {
                        arrowHelpers[U].position.set(1, -100, 0);
                        arrowHelpers[U].setLength(1)
                    }
                }
            } else {
                _aircraft.tmpQuaternion.set(0, 0, 0)
            }
            if (_bAnchor) {
                var r = _elevator * Math.PI * _dt / 40;
                var p = -_rudder * Math.PI * _dt / 40;
                var o = -_aileron * Math.PI * _dt / 40;
                _aircraft.velocity.z = -1 * _throttle * 40;
                _aircraft.translateX(0);
                _aircraft.translateY(0);
                _aircraft.translateZ(_aircraft.velocity.z * _dt);
                _aircraft.tmpQuaternion.set(r, p, o, 1).normalize();
                if (_pause == false) {
                    _aircraft.quaternion.multiply(_aircraft.tmpQuaternion);
                    _aircraft.quaternion.normalize();
                    _aircraft.matrix.setPosition(_aircraft.position);
                    _aircraft.matrix.makeRotationFromQuaternion(_aircraft.quaternion);
                    _aircraft.matrixWorldNeedsUpdate = true
                }
            }
            _aircraft.speed_mps = _aircraft.velocity.length();
            _aircraft.lastMatrix = _aircraft.matrix;
            for (var w in _aircraft.CSurf) {
                if (_aircraft.CSurf.hasOwnProperty(w)) {
                    var C = _aircraft.CSurf[w];
                    C.position.set(_aircraft.position.x, _aircraft.position.y, _aircraft.position.z);
                    if (C.tmpQuaternion === undefined) {
                        C.tmpQuaternion = new THREE.Quaternion(0, 0, -1, 0)
                    }
                    C.tmpQuaternion.copy(_aircraft.tmpQuaternion);
                    C.quaternion.copy(_aircraft.quaternion);
                    C.matrix.copy(_aircraft.matrix);
                    C.translateX(C.hingeX);
                    C.translateY(C.hingeY);
                    C.translateZ(C.hingeZ);
                    if (w.substr(0, 9) === "Propeller") {
                        var P = new THREE.Vector3(C.propX, C.propY, C.propZ).applyMatrix4(Q);
                        C.position.set(_aircraft.position.x + P.x, _aircraft.position.y + P.y, _aircraft.position.z + P.z);
                        if (_aircraft.Definition.Heli !== undefined) {
                            C.rotateOnAxis(C.rotationAxis, -_nTime_ms / 10)
                        } else {
                            if (_throttle !== 0 && C.rotationAxis !== undefined) {
                                C.rotateOnAxis(C.rotationAxis, _throttle * -_nTime_ms / 10)
                            }
                        }
                    } else {
                        if (w === "Elevator" && _elevator !== 0 && C.rotationAxis !== undefined) {
                            C.rotateOnAxis(C.rotationAxis, -_elevator * C.maxDeflection_rad)
                        } else {
                            if (w === "Rudder" && _rudder !== 0 && C.rotationAxis !== undefined) {
                                C.rotateOnAxis(C.rotationAxis, _rudder * C.maxDeflection_rad)
                            } else {
                                if (w === "AileronL" && _aileron !== 0 && C.rotationAxis !== undefined) {
                                    C.rotateOnAxis(C.rotationAxis, -_aileron * C.maxDeflection_rad)
                                } else {
                                    if (w === "AileronR" && _aileron !== 0 && C.rotationAxis !== undefined) {
                                        C.rotateOnAxis(C.rotationAxis, -_aileron * C.maxDeflection_rad)
                                    } else {
                                        if (w === "ElevonR" && C.rotationAxis !== undefined) {
                                            C.rotateOnAxis(C.rotationAxis, -(_elevator + _aileron) / 2 * C.maxDeflection_rad)
                                        } else {
                                            if (w === "ElevonL" && C.rotationAxis !== undefined) {
                                                C.rotateOnAxis(C.rotationAxis, -(_elevator - _aileron) / 2 * C.maxDeflection_rad)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    C.matrixWorldNeedsUpdate = true
                }
            }
            if ((R * 100) % 2 == 0 && sndEngine !== undefined) {
                sndEngine.gainNode.gain.value = L;
                if (_aircraft.Definition.EDF !== undefined) {
                    sndEngine.source.playbackRate.value = 2.5 + _throttle
                } else {
                    sndEngine.source.playbackRate.value = 1 + _throttle
                }
            }
        } else {
            if (R - _aircraft.crashTime_ms > 4000) {
                _aircraft.crashTime_ms = -1;
                if (_lastLaunchMethod === "Throw") {
                    doThrow()
                } else {
                    if (_lastLaunchMethod === "Drop") {
                        doDropTest()
                    } else {
                        resetAircraft()
                    }
                }
            }
        }
        var D = GetGroundHeight(_aircraft.position.x, _aircraft.position.z);
        var a = _aircraft.miny;
        if (_aircraft.Definition.Sections.S_LWheel !== undefined) {
            a = (_aircraft.Definition.Sections.S_LWheel.pos[1] + _aircraft.Definition.Sections.S_TailWheel.pos[1]) / 2
        }
        if (_bAllowCrash && _aircraft.velocity.y <= -4 && _aircraft.crashTime_ms < 0 && _aircraft.position.y <= D + 1 + Math.abs(a)) {
            _aircraft.crashTime_ms = R;
            sndEngine.gainNode.gain.value = 0;
            var Y = _aircraft.position.y;
            if (Y < D) {
                Y = D
            }
            for (U = 0; U < 100; U++) {
                var I = new THREE.Mesh(new THREE.CubeGeometry(0.2, 0.2, 0.2), fireMaterial);
                I.position = new THREE.Vector3(_aircraft.position.x, Y, _aircraft.position.z);
                I.velocity = new THREE.Vector3(10 * (Math.random() - 0.5), 8 * Math.random(), 10 * (Math.random() - 0.5));
                _particles.push(I);
                scene.add(I);
                var h = new THREE.Mesh(new THREE.CubeGeometry(0.2, 0.2, 0.2), cubeMaterial);
                h.position = new THREE.Vector3(_aircraft.position.x, Y, _aircraft.position.z);
                h.velocity = new THREE.Vector3(10 * (Math.random() - 0.5), 8 * Math.random(), 10 * (Math.random() - 0.5));
                _particles.push(h);
                scene.add(h);
                var g = new THREE.Mesh(new THREE.CubeGeometry(0.2, 0.2, 0.2), dirtMaterial);
                g.position = new THREE.Vector3(_aircraft.position.x, Y, _aircraft.position.z);
                g.velocity = new THREE.Vector3(10 * (Math.random() - 0.5), 8 * Math.random(), 10 * (Math.random() - 0.5));
                _particles.push(g);
                scene.add(g)
            }
            playSound(idxCrash, K)
        }
        if (_aircraft.position.y <= D - a) {
            _IsOnGround = true;
            if (_aircraft.Definition.Sections.S_LWheel !== undefined) {
                _aircraft.position.y = D + Math.abs(_aircraft.Definition.Sections.S_LWheel.pos[1] + _aircraft.Definition.Sections.S_TailWheel.pos[1]) / 2
            } else {
                _aircraft.position.y = D - _aircraft.miny
            }
        } else {
            if (_IsOnGround) {
                _IsOnGround = false
            }
        }
        var M = new THREE.Vector3();
        for (U = 0; U < _particles.length; U++) {
            _particles[U].velocity.y -= 9.81 * _dt;
            M.set(_particles[U].velocity.x, _particles[U].velocity.y, _particles[U].velocity.z);
            M.multiplyScalar(_dt);
            _particles[U].position.add(M);
            if (_particles[U].position.y < D && _particles[U].velocity.y < 0) {
                scene.remove(_particles[U]);
                _particles.splice(U, 1)
            }
        }
        for (U = 0; U < _bullets.length; U++) {
            _bullets[U].velocity.y -= 9.81 * _dt;
            M.set(_bullets[U].velocity.x, _bullets[U].velocity.y, _bullets[U].velocity.z);
            M.multiplyScalar(_dt);
            _bullets[U].position.add(M);
            if (_bullets[U].position.y < D) {
                _bullets[U].position.y = D;
                CreateExplosion(_bullets[U].position.x, _bullets[U].position.y, _bullets[U].position.z, 1, dirtMaterial, idxBulletImpact);
                var H = HitATarget(_bullets[U].position.x, _bullets[U].position.y, _bullets[U].position.z, 1);
                if (H >= 0) {
                    scene.remove(_targets[H]);
                    _targets.splice(H, 1);
                    CreateExplosion(_bullets[U].position.x, _bullets[U].position.y, _bullets[U].position.z, 15, targetHitMaterial, idxExplosion);
                    _score += 2
                }
                scene.remove(_bullets[U]);
                _bullets.splice(U, 1)
            }
        }
        for (U = 0; U < _bombs.length; U++) {
            _bombs[U].velocity.y -= 9.81 * _dt;
            M.set(_bombs[U].velocity.x, _bombs[U].velocity.y, _bombs[U].velocity.z);
            M.multiplyScalar(_dt);
            _bombs[U].position.add(M);
            if (_bombs[U].position.y < D) {
                _bombs[U].position.y = D;
                CreateExplosion(_bombs[U].position.x, _bombs[U].position.y, _bombs[U].position.z, 5, fireMaterial, idxExplosion);
                var H = HitATarget(_bombs[U].position.x, _bombs[U].position.y, _bombs[U].position.z, 5);
                if (H >= 0) {
                    scene.remove(_targets[H]);
                    _targets.splice(H, 1);
                    CreateExplosion(_bombs[U].position.x, _bombs[U].position.y, _bombs[U].position.z, 15, targetHitMaterial, idxExplosion);
                    _score += 1
                }
                scene.remove(_bombs[U]);
                _bombs.splice(U, 1)
            }
        }
        for (U = 0; U < _groundExplosion.length; U++) {
            _groundExplosion[U].ExpSize *= _groundExplosion[U].ExpMult;
            _groundExplosion[U].scale.set(_groundExplosion[U].ExpSize, _groundExplosion[U].ExpSize, _groundExplosion[U].ExpSize);
            if (_groundExplosion[U].ExpSize > _groundExplosion[U].MaxSize) {
                _groundExplosion[U].ExpMult = 0.98
            } else {
                if (_groundExplosion[U].ExpSize < 0.5) {
                    scene.remove(_groundExplosion[U]);
                    _groundExplosion.splice(U, 1)
                }
            }
        }
        if (_gun1 && _lastGun1SoundStart_ms + 100 < R) {
            playSound(idxGun1, K);
            _lastGun1SoundStart_ms = R;
            var E = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 8), bulletMaterial);
            E.position = new THREE.Vector3().copy(_aircraft.position);
            E.velocity = new THREE.Vector3(0, 0, -1);
            E.velocity.applyQuaternion(_aircraft.quaternion);
            E.velocity.normalize();
            E.velocity.multiplyScalar(60 + _aircraft.speed_mps);
            _bullets.push(E);
            scene.add(E)
        }
        if (_gun2 && _lastGun2SoundStart_ms + 100 < R) {
        }
        if (_bomb1 && _lastBomb1SoundStart_ms + 400 < R) {
            playSound(idxBomb1, K);
            _lastBomb1SoundStart_ms = R;
            var k = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 12), bombMaterial);
            k.position = new THREE.Vector3().copy(_aircraft.position);
            k.velocity = new THREE.Vector3().copy(_aircraft.velocity);
            _bombs.push(k);
            scene.add(k)
        }
        if (_bomb2 && _lastBomb2SoundStart_ms + 400 < R) {
        }
        if (_aircraft.position.x < -_halfSkyWidth_m) {
            _aircraft.position.x = -_halfSkyWidth_m
        }
        if (_aircraft.position.x > _halfSkyWidth_m) {
            _aircraft.position.x = _halfSkyWidth_m
        }
        if (_aircraft.position.z < -_halfSkyWidth_m) {
            _aircraft.position.z = -_halfSkyWidth_m
        }
        if (_aircraft.position.z > _halfSkyWidth_m) {
            _aircraft.position.z = _halfSkyWidth_m
        }
        if (_aircraft.position.y < 0) {
            _aircraft.position.y = 0
        }
        if (_aircraft.position.y > _halfSkyWidth_m) {
            _aircraft.position.y = _halfSkyWidth_m
        }
        if (_cameraMode == 1) {
            var A, n;
            if (_aircraft.fpvPt !== undefined) {
            } else {
                A = new THREE.Vector3(0, 0.15, 0.5).applyMatrix4(Q).add(_aircraft.position);
                n = new THREE.Vector3(0, 0.15, -10).applyMatrix4(Q).add(_aircraft.position)
            }
            camera.position.set(A.x, A.y, A.z);
            camera.up = new THREE.Vector3(0, 1, 0).applyMatrix4(Q);
            camera.lookAt(n)
        } else {
            if (_cameraMode == 2) {
                var m = new THREE.Vector3(-1, 1, -5).applyMatrix4(Q).add(_aircraft.position);
                camera.position.set(m.x, m.y, m.z);
                camera.up = new THREE.Vector3(0, 1, 0);
                camera.lookAt(_aircraft.position)
            } else {
                if (_cameraMode == 3) {
                    var b = new THREE.Vector3(0.2, 0.6, 5).applyMatrix4(Q).add(_aircraft.position);
                    camera.position.set(b.x, b.y, b.z);
                    camera.up = new THREE.Vector3(0, 1, 0);
                    camera.lookAt(_aircraft.position)
                } else {
                    camera.position.x = 0;
                    camera.position.y = centerHeight + 1.3;
                    camera.position.z = 0;
                    camera.up = new THREE.Vector3(0, 1, 0);
                    var f = new THREE.Vector3().copy(_aircraft.position);
                    var u = Math.sqrt(_aircraft.position.x * _aircraft.position.x + _aircraft.position.z * _aircraft.position.z);
                    var t = -camera.fov * Math.PI / 180 / 4;
                    var O = camera.fov * Math.PI / 180 / 3;
                    var v = t + (O - t) * Math.min(1, u / 140);
                    f.y -= Math.tan(v) * u;
                    camera.lookAt(f);
                    if (_aircraft.position.length() > 80 && camera.fov < 2) {
                        camera.near = _aircraft.position.length() / 4;
                        camera.updateProjectionMatrix()
                    } else {
                        if (camera.near > 0.1) {
                            camera.near = 0.1;
                            camera.updateProjectionMatrix()
                        }
                    }
                }
            }
        }
        if (_cameraMode !== 0 && _viewAngle < _standardViewAngle / 4) {
            _viewAngle = _standardViewAngle / 4
        }
        AdjustCameraFOV()
    }
    if (_UseOculus) {
        VREffect.render(scene, camera)
    } else {
        renderer.render(scene, camera)
    }
    if (_nLoopCount++ > 0) {
        _nLoopCount = 0;
        var X = Math.floor(1 / _dt);
        if (_aircraft !== null) {
            var s = X + " fps  Alt " + (Math.round((_aircraft.position.y - centerHeight) * 10) / 10) + " m ";
            if (!_mobile) {
                s += "  Speed " + Math.round(_aircraft.speed_mps * 100) / 100 + " m/s"
            }
            if (_bShowPhysicsDebugInfo) {
                s += " (" + formatVec(_aircraft.velocity) + ") cg=(" + formatVec(_aircraft.cg) + ")<br>Roll=" + Math.round(_aircraft.roll * 180 / Math.PI) + " Yaw=" + Math.round(_aircraft.yaw * 180 / Math.PI) + " Pitch=" + Math.round(_aircraft.pitch * 180 / Math.PI);
                s += "<br>View Angle=" + (Math.round(camera.fov * 10) / 10);
                s += "<br>Expo=";
                if (_controlExpo) {
                    s += " true"
                } else {
                    s += " false"
                }
            }
            if ((!gamepadSupportAvailable || gamepadSupport.gamepads.length <= 0) && _touches.length <= 0) {
                s += "<br><br>You need an android tablet, gamepad device or 2 axis controller to play.<br>Hit a button on your gamepad or touch the screen to begin..."
            }
            $("#info").html(s + _sPhysics)
        }
    }
}
if (_UseOculus) {
    VREffect.render(scene, camera)
} else {
    renderer.render(scene, camera)
}
render();
(function (d, a) {
    var b = typeof Element !== "undefined" && "ALLOW_KEYBOARD_INPUT" in Element, c = (function () {
        var m, k;
        var f = [
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ];
        var j = 0;
        var g = f.length;
        var h = {};
        for (; j < g; j++) {
            m = f[j];
            if (m && m[1] in a) {
                for (j = 0, k = m.length; j < k; j++) {
                    h[f[0][j]] = m[j]
                }
                return h
            }
        }
        return false
    })(), e = {request: function (g) {
        var f = c.requestFullscreen;
        g = g || a.documentElement;
        if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
            g[f]()
        } else {
            g[f](b && Element.ALLOW_KEYBOARD_INPUT)
        }
    }, exit: function () {
        a[c.exitFullscreen]()
    }, toggle: function (f) {
        if (this.isFullscreen) {
            this.exit()
        } else {
            this.request(f)
        }
    }, onchange: function () {
    }, onerror: function () {
    }, raw: c};
    if (!c) {
        d.screenfull = false;
        return
    }
    Object.defineProperties(e, {isFullscreen: {get: function () {
        return !!a[c.fullscreenElement]
    }}, element: {enumerable: true, get: function () {
        return a[c.fullscreenElement]
    }}, enabled: {enumerable: true, get: function () {
        return !!a[c.fullscreenEnabled]
    }}});
    a.addEventListener(c.fullscreenchange, function (f) {
        e.onchange.call(e, f)
    });
    a.addEventListener(c.fullscreenerror, function (f) {
        e.onerror.call(e, f)
    });
    d.screenfull = e
})(window, document);