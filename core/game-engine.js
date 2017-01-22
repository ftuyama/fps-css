function N(a, b) {
    this.set(a, b)
}

function r() {
    this.node = document.createElement("div");
    this.node.id = T++;
    this.position = d.create();
    this.rotation = d.create();
    this.F = new N
}

function J() {
    r.call(this);
    this.i = [];
    this.color = O.splice(0, 1)[0];
    O.push(this.color)
}

function z(a, b, c) {
    r.call(this);
    this.$ = a;
    this.ba = b;
    this.color = c;
    this.node.className = "light"
}

function P(a, b, c, f) {
    r.call(this);
    this.node.className = "line";
    this.length = a;
    this.color = b;
    c && this.setStart(c);
    f && this.setEnd(f)
}

function Q() {
    this.position = d.create(0, 0, 0);
    this.direction = d.create(0, 0, -1)
}

function q(a, b, c, f, k) {
    r.call(this);
    this.s = a;
    this.width = b;
    this.height = c;
    this.S = k;
    this.qa = !0;
    this.ca = !1 !== f;
    this.node.className = "plane";
    this.w = {
        g: d.create(0, 0, 1),
        a: d.create(0, 0, 1),
        h: d.create(0, 0, 1),
        d: d.create(0, 0, 1)
    }
}

function w() {
    J.call(this);
    this.node.className = "assembly"
}

function R(a, b) {
    this.node = document.createElement("div");
    this.node.className = "viewport";
    this.I = document.createElement("div");
    this.I.className = "camera";
    this.u = {
        position: d.create(0, 0, 0),
        rotation: d.create(0, 0, 0)
    };
    this.A = new w;
    this.node.appendChild(this.I);
    this.I.appendChild(this.A.node);
    a.appendChild(this.node);
    this.Z(b || 700)
}

function S() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d")
}

function U(a) {
    function b() {
        w.call(this)
    }

    function c(a, c, b, f) {
        w.call(this);
        this.add(new q({
            src: a.src
        }, c, b), 0, 0, f / 2, 0, 0, 0);
        this.add(new q({
            src: a.src
        }, c, b), 0, 0, -f / 2, 0, 180, 0);
        this.add(new q({
            src: a.src
        }, f, b), c / 2, 0, 0, 0, 90, 0);
        this.add(new q({
            src: a.src
        }, f, b), -c / 2, 0, 0, 0, 270, 0);
        this.add(new q({
            src: a.src
        }, c, f), 0, -b / 2, 0, 90, 0, 0);
        this.add(new q({
            src: a.src
        }, c, f), 0, b / 2, 0, 270, 0, 0)
    }

    function f(a, c, b, f) {
        w.call(this);
        for (var k = Math.PI / f * 2, p = Math.tan(Math.PI / f), l = c * Math.tan(Math.PI / f), g = 0; g < f; g++) {
            var n = Math.sin(k * g) * c / 2,
                r = Math.cos(k * g) * c / 2,
                K = Math.atan2(n, r),
                G = new q({
                    src: a.src,
                    x: l * (f - g),
                    ra: l
                }, l + 1.5, b);
            G.w.d = G.w.g = d.create(-p, 0, 1);
            G.w.h = G.w.a = d.create(p, 0, 1);
            this.add(G, n, 0, r, 0, t.R(K), 0)
        }
    }

    function k() {
        c.call(this, {
            src: "../crate.jpg"
        }, 150, 150, 150)
    }

    function charmander() {
        c.call(this, {
            src: "../charmander.png"
        }, 10, 150, 150)
    }

    function p() {
        f.call(this, {
            src: "../drum2.png"
        }, 100, 196, 12);
        this.add(new q({
            src: "../drum2.png",
            x: 0,
            y: 196,
            ra: 102,
            Aa: 102,
            la: !0
        }, 102, 102, !1), 0, -98, 0, 90)
    }
    b.prototype = w.prototype;
    c.prototype = w.prototype;
    f.prototype = w.prototype;
    k.prototype = new w;
    charmander.prototype = new w;
    p.prototype = w.prototype;
    var g = new b;
    g.add(new q({
        src: "../wall.jpg"
    }, 2E3, 700), 0, -350, -700, 0, 0, 0);
    g.add(new q({
        src: "../wall.jpg"
    }, 1E3, 700), 500, -350, 300, 0, 180, 0);
    g.add(new q({
        src: "../wall.jpg"
    }, 1E3, 700), 1E3, -350, -200, 180, 270, 0);
    g.add(new q({
        src: "../wall.jpg"
    }, 500, 1100), 0, -550, 550, 0, 270, 0);
    g.add(new q({
        src: "../wall.jpg"
    }, 600, 700), -700, -350, 300, 0, 180, 0);
    g.add(new q({
        src: "../wall.jpg"
    }, 1E3, 700), -1E3, -350, -200, 0, 90, 0);
    g.add(new q({
        src: "../floor.jpg"
    }, 2E3, 1E3, !1), 0, 0, -200, 90, 0, 0);
    g.add(new q({
        src: "../ceil.jpg"
    }, 2E3, 1E3, !1), 0, -700, -200, 270, 0, 0);
    for (var l = -1; 1 >= l; l++)
        g.add(new q({
            src: "../ceil.jpg"
        }, 100, 650), 75 + 552 * l, -325, -650, 0, 0, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 50, 650), 125 + 552 * l, -325, -675, 0, 90, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 50, 650), 25 + 552 * l, -325, -675, 0, 270, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 100, 1E3), 75 + 552 * l, -650, -200, 270, 0, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 1E3, 50), 125 + 552 * l, -675, -200, 0, 90, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 1E3, 50), 25 + 552 * l, -675, -200, 0, 270, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 100, 650), 75 + 552 * l, -325, 250, 0, 180, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 50, 650), 125 + 552 * l, -325, 275, 0, 90, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 50, 650), 25 + 552 * l, -325, 275, 0, 270, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 101, 650), 75 + 552 * l, -325, -225, 0, 180, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 101, 650), 75 + 552 * l, -325, -125, 0, 0, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 101, 650), 125 + 552 * l, -325, -175, 0, 90, 0),
        g.add(new q({
            src: "../ceil.jpg"
        }, 101, 650), 25 + 552 * l, -325, -175, 0, 270, 0);
    g.add(new f({
        src: "../pipe2.jpg"
    }, 60, 2E3, 16), 0, -610, 180, 90, 0, 90);
    g.add(new f({
        src: "../pipe2.jpg"
    }, 40, 700, 12), 960, -350, -500, 0, 180, 0);
    g.add(new f({
        src: "../pipe2.jpg"
    }, 40, 700, 12), 960, -350, -420, 0, 180, 0);
    g.add(new k, -800, -75, -470);
    g.add(new k, -820, -225, -380, 0, 15);
    g.add(new k, -850, -75, -270, 0, -15);
    g.add(new charmander, -700, -75, -280, 0, -15);
    g.add(new p, -270, -98, -345);
    g.add(new p, 350, -98, 116, 0, 40);
    g.add(new p, 263, -98, -512);
    g.add(new p, 640, -98, -440, 0, 190, 0);
    g.add(new p, 90, -98, -20, 0, 120, 0);
    g.add(new z(200, 1, {
        r: 255,
        L: 110,
        a: 50
    }), -150, -630, 330);
    g.add(new z(85, .5, {
        r: 255,
        L: 140,
        a: 0
    }), -170, -820, 840);
    g.add(new q({
        src: "../wall.jpg"
    }, 400, 400), -200, -900, 300, 0, 0, 0);
    g.add(new q({
        src: "../wall.jpg"
    }, 1E3, 1100), -400, -550, 800, 0, 90, 0);
    for (l = 0; 10 > l; l++)
        g.add(new q({
            src: "../floor.jpg",
            y: 100 * l
        }, 400, 50), -201, 50 * -l - 25, 50 * l + 300, 0, 180),
        g.add(new q({
            src: "../floor.jpg",
            y: 100 * l + 50
        }, 400, 50), -201, 50 * -l - 50, 50 * l + 325, 90);
    g.add(new z(105, 1, {
        r: 128,
        L: 255,
        a: 0
    }), 70, -600, -400);
    l = new b;
    l.add(new q({
        src: "../floor.jpg"
    }, 1400, 500), -200, 0, 0, 90, 0, 0);
    l.add(new q({
        src: "../wall.jpg"
    }, 1E3, 600), 0, -300, -250, 0, 0, 0);
    l.add(new q({
        src: "../wall.jpg"
    }, 1400, 600), -200, -300, 250, 0, 180, 0);
    l.add(new q({
        src: "../ceil.jpg"
    }, 1400, 1E3), -200, -600, -250, 270, 0, 0);
    l.add(new q({
        src: "../wall.jpg"
    }, 500, 600), 500, -300, 0, 0, 270, 0);
    l.add(new k, -600, -75, 140, 0, -15);
    l.add(new p, -100, -98, -120, 0, 0);
    l.add(new z(125, 1, {
        r: 128,
        L: 178,
        a: 255
    }), 280, -400, -100);
    a.add(g, 100, 0, 0);
    a.add(l, 600, -500, 1050)
}
var L = !0,
    d = {
        create: function(a, b, c) {
            return {
                x: a || 0,
                y: b || 0,
                z: c || 0
            }
        },
        add: function(a, b) {
            return {
                x: a.x + b.x,
                y: a.y + b.y,
                z: a.z + b.z
            }
        },
        sub: function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y,
                z: a.z - b.z
            }
        },
        Ba: function(a, b) {
            return {
                x: a.x * b.x,
                y: a.y * b.y,
                z: a.z * b.z
            }
        },
        wa: function(a, b) {
            return {
                x: a.x / b.x,
                y: a.y / b.y,
                z: a.z / b.z
            }
        },
        o: function(a, b) {
            return {
                x: a.x * b,
                y: a.y * b,
                z: a.z * b
            }
        },
        H: function(a, b) {
            return {
                x: a.x / b,
                y: a.y / b,
                z: a.z / b
            }
        },
        l: function(a) {
            return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
        },
        c: function(a, b) {
            return a.x * b.x + a.y * b.y + a.z * b.z
        },
        ea: function(a, b) {
            return {
                x: a.y * b.z - a.z * b.y,
                y: a.z * b.x - a.x * b.z,
                z: a.x * b.y - a.y * b.x
            }
        },
        normalize: function(a) {
            return d.H(a, d.l(a))
        },
        sa: function(a, b) {
            return Math.acos(d.c(a, b) / (d.l(a) * d.l(b)))
        },
        K: function(a) {
            return {
                x: a.x,
                y: a.y,
                z: a.z
            }
        },
        xa: function(a, b) {
            return a.x === b.x && a.y === b.y && a.z === b.z
        }
    },
    t = {
        R: function(a) {
            return 57.2957795 * a
        },
        G: function(a) {
            return .0174532925 * a
        },
        v: function(a, b) {
            var c = t.G(b.x / 2),
                f = t.G(b.y / 2),
                k = t.G(b.z / 2),
                d = Math.cos(c),
                g = Math.cos(f),
                l = Math.cos(k),
                c = Math.sin(c),
                f = Math.sin(f),
                e = Math.sin(k),
                k = d * g * l + -c * f * e,
                m = c * g * l - -d * f * e,
                h = d * f * l + c * g * -e,
                d = d * g * e - -c * f * l;
            return {
                x: a.x * (1 - 2 * (h * h + d * d)) + 2 * a.y * (m * h - d * k) + 2 * a.z * (m * d + h * k),
                y: 2 * a.x * (m * h + d * k) + a.y * (1 - 2 * (m * m + d * d)) + 2 * a.z * (h * d - m * k),
                z: 2 * a.x * (m * d - h * k) + 2 * a.y * (d * h + m * k) + a.z * (1 - 2 * (m * m + h * h))
            }
        },
        J: function(a, b) {
            var c = [];
            if (a instanceof J)
                for (var f = 0; f < a.i.length; f++)
                    c = c.concat(t.J(a.i[f], b));
            else
                a instanceof b && c.push(a);
            return c
        },
        Y: function(a, b, c, f) {
            c = d.sub(c, a);
            b = d.sub(b, a);
            var k = d.sub(f, a);
            a = d.c(c, c);
            f = d.c(c, b);
            c = d.c(c, k);
            var p = d.c(b, b);
            b = d.c(b, k);
            k = 1 / (a * p - f * f);
            p = (p * c - f * b) * k;
            a = (a * b - f * c) * k;
            return 0 <= p && 0 <= a && 1 > p + a
        },
        ya: function(a, b, c, f, k) {
            var p = d.c(f, d.sub(b, a));
            return 0 < d.c(f, d.sub(k, c)) ? d.add(a, d.o(d.normalize(d.sub(b, a)), p)) : a
        },
        ga: function(a, b, c, f) {
            c = -d.c(f, c);
            c = d.c(f, a) + c;
            f = d.c(f, b);
            return 0 === f ? null : d.add(a, d.o(b, -(c / f)))
        },
        U: function(a, b, c, f) {
            var k = d.sub(c, a);
            c = d.sub(b, a);
            var p = d.l(c);
            c = d.normalize(c);
            k = d.c(c, k);
            if (0 > k)
                return f ? a : null;
            if (k > p)
                return f ? b : null;
            c = d.o(c, k);
            return d.add(a, c)
        },
        fa: function(a, b, c, f, k) {
            a = t.U(a, b, k, !0);
            c = t.U(b, c, k, !0);
            return d.add(b, d.add(d.sub(a, b), d.sub(c, b)))
        },
        Da: function(a, b, c, f, k) {
            var d = Math.max(a.x, b.x, c.x, f.x),
                g = Math.min(a.y, b.y, c.y, f.y),
                l = Math.max(a.y, b.y, c.y, f.y),
                e = Math.min(a.z, b.z, c.z, f.z),
                m = Math.max(a.z, b.z, c.z, f.z);
            return Math.min(a.x, b.x, c.x, f.x) > k.x && d < k.x || g > k.y && l < k.y || e > k.z && m < k.z
        },
        pa: function(a, b, c, f, k) {
            return t.Y(a, b, c, k) || t.Y(a, c, f, k)
        },
        T: function(a) {
            var b = new Q,
                c = t.J(a, z),
                f = t.J(a, q);
            t.J(a, P).forEach(function(a) {
                a.parent.remove(a)
            });
            f.forEach(function(a) {
                delete a.O;
                delete a.m;
                var c = a.ha(),
                    b = d.sub(c[1], c[0]),
                    f = d.sub(c[2], c[1]);
                a.g = c[0];
                a.a = c[1];
                a.h = c[2];
                a.d = c[3];
                a.M = d.normalize(d.ea(b, f));
                a.W = c[4];
                a.X = c[5];
                a.oa = c[6];
                a.Ca = c[7]
            });
            c.forEach(function(a) {
                var c = 0,
                    g = 0,
                    l = 0,
                    e = 0,
                    m = [],
                    h = 100 + 10 * a.$,
                    q = a.D(),
                    v, r, u = d.create(a.color.r, a.color.L, a.color.a),
                    x = f.filter(function(a) {
                        var c = t.fa(a.g, a.a, a.h, a.d, q),
                            b = d.sub(q, c),
                            f = d.l(b);
                        a.ta = c;
                        a.C = f;
                        a.c = d.c(a.M, d.normalize(b));
                        if (f <= h)
                            return a.ca && m.push({
                                g: a.g,
                                a: a.a,
                                h: a.h,
                                d: a.d,
                                M: a.M,
                                C: a.C,
                                na: d.create(Math.min(a.g.x, a.a.x, a.h.x, a.d.x), Math.min(a.g.y, a.a.y, a.h.y, a.d.y), Math.min(a.g.z, a.a.z, a.h.z, a.d.z)),
                                ma: d.create(Math.max(a.g.x, a.a.x, a.h.x, a.d.x), Math.max(a.g.y, a.a.y, a.h.y, a.d.y), Math.max(a.g.z, a.a.z, a.h.z, a.d.z)),
                                S: !1
                            }), !0
                    });
                m.sort(function(a, c) {
                    return a.C < c.C ? -1 : 1
                });
                for (var n = 0; n < x.length; n++)
                    if (v = x[n],
                        0 < v.c) {
                        var w = Math.ceil(v.width / 8) + 1,
                            K = Math.ceil(v.height / 8) + 1,
                            G = d.H(d.sub(v.a, v.g), w),
                            V = d.H(d.sub(v.h, v.a), K),
                            z = d.H(d.sub(v.X, v.W), w),
                            J = d.H(d.sub(v.X, v.oa), K);
                        v.m || (v.m = []);
                        for (var B = 0; B < K; B++) {
                            v.m[B] || (v.m[B] = []);
                            for (var C = 0; C < w; C++) {
                                r = v.g;
                                r = d.add(r, d.o(G, C));
                                r = d.add(r, d.o(V, B));
                                var y = d.sub(q, r),
                                    I = d.l(y),
                                    A = d.normalize(y),
                                    y = 255;
                                c++;
                                y = d.add(v.W, d.add(d.o(J, B), d.o(z, C)));
                                y = Math.max(d.c(y, A), 0);
                                y = Math.max(0, 1 - I / h) * y * 255 * a.ba;
                                if (v.qa && I <= h)
                                    for (b.position = d.add(r, d.o(A, 8)),
                                        b.C = I - 8,
                                        b.direction = A,
                                        r = m.length,
                                        I = 0; I < r; I++)
                                        if (A = m[I],
                                            b.ia(A.na, A.ma))
                                            if (g++,
                                                b.ja(A.g, A.a, A.h, A.d, A.M)) {
                                                y = 0;
                                                e++;
                                                break
                                            } else
                                                l++;
                                L ? v.m[B][C] = d.add(v.m[B][C] || d.create(), d.o(u, y / 255)) : (y = Math.min(255, (v.m[B][C] || y) + y),
                                    v.m[B][C] = y)
                            }
                        }
                    }
            })
        }
    },
    u = function() {
        var a = document.documentElement.style,
            b = void 0 !== a.WebkitTransform && "-webkit-" || void 0 !== a.MozTransform && "-moz-" || void 0 !== a.transform && "";
        L &= void 0 !== a.backgroundBlendMode;
        return {
            P: function() {
                return "position: absolute;left:50%;top:50%;" + b + "transform-style:preserve-3d;"
            },
            size: function(a, b) {
                return "width:" + a.toFixed(2) + "px;height:" + b.toFixed(2) + "px;margin-left:" + -(a / 2).toFixed(2) + "px;margin-top:" + -(b / 2).toFixed(2) + "px;"
            },
            translate: function(a, f, d, p, g, l, e, m) {
                return b + "transform:translate3d(" + a.toFixed(2) + "px," + f.toFixed(2) + "px," + d.toFixed(2) + "px)rotateX(" + p.toFixed(2) + "deg)rotateY(" + g.toFixed(2) + "deg)rotateZ(" + l.toFixed(2) + "deg)skewX(" + (e || 0) + "deg)skewY(" + (m || 0) + "deg);"
            },
            origin: function(a, f, d) {
                return b + "transform-origin:" + a.toFixed(2) + "px " + f.toFixed(2) + "px " + d.toFixed(2) + "px;"
            },
            aa: function(a) {
                return a ? "" : b + "backface-visibility:hidden;"
            },
            perspective: function(a) {
                return b + "perspective:" + a + "px;"
            },
            za: function(a) {
                for (var b = 0, k = 0; k < M.length; k++)
                    var p = M[k],
                        p = d.l(d.add(p.D(), a)) / (100 + 6 * p.$),
                        b = Math.max(b, 1 - p);
                return b
            },
            da: function(a) {
                return W(a.m)
            },
            s: function(a) {
                var f = [],
                    d = [],
                    p = [],
                    g = [],
                    l = "",
                    e = u.da(a);
                e && ("-" == e.charAt(0) ? f.push(e) : f.push("url(" + e + ")"),
                    d.push("100% 100%"),
                    p.push("0 0"),
                    g.push("multiply"));
                f.push("url(" + a.s.src + ")");
                d.push("auto");
                p.push((a.s.x || 0).toFixed(2) + "px -" + (a.s.y || 0).toFixed(2) + "px");
                a.s.la && (l += b + "mask-image:url(" + a.s.src + ");" + b + "mask-position:" + (a.s.x || 0).toFixed(2) + "px -" + (a.s.y || 0).toFixed(2) + "px;");
                f.length && (l += "background:" + f.join() + ";");
                p.length && (l += "background-position:" + p.join() + ";");
                d.length && (l += "background-size: " + d.join() + ";");
                L && g.length && (l += "background-blend-mode: " + g.join() + ";");
                return l
            },
            clone: function(a) {
                var b;
                a instanceof w && (b = new w);
                a instanceof q && (b = new q(a.ua, a.width, a.height, a.position.x, a.position.y));
                if (b && b.i)
                    for (var d = 0; d < a.i.length; d++)
                        b.add(u.clone(a.i[d]));
                return b
            }
        }
    }();
N.prototype = {
    set: function(a, b, c) {
        1 == arguments.length ? this.set(a.x, a.y) : (this.x = a || 0,
            this.y = b || 0)
    }
};
var O = "#f00 #f80 #ff0 #8f0 #0f0 #0f8 #0ff #08f #00f #80f #f0f #f08".split(" "),
    T = 0,
    M = [];
r.prototype = {
    update: function() {
        setTimeout(function() {
                this.node.style.cssText = this.j()
            }
            .bind(this));
        delete this.N
    },
    j: function() {
        return u.P() + u.translate(this.position.x, this.position.y, this.position.z, this.rotation.x, this.rotation.y, this.rotation.z, this.F.x, this.F.y)
    },
    clone: function() {
        return u.clone(this)
    },
    D: function() {
        if (this.N)
            return this.N;
        for (var a = this, b = d.create(0, 0, 0); a;)
            b = d.add(b, a.position),
            a = a.parent;
        return this.N = b
    }
};
J.prototype = {
    update: function(a) {
        r.prototype.update.call(this);
        if (a)
            for (a = 0; a < this.i.length; a++)
                this.i[a].update(!0)
    },
    add: function(a, b, c, d, k, p, g, l, e) {
        a.parent && a.parent.remove(a);
        "undefined" != typeof b && (a.position.x = b);
        "undefined" != typeof c && (a.position.y = c);
        "undefined" != typeof d && (a.position.z = d);
        "undefined" != typeof k && (a.rotation.x = k);
        "undefined" != typeof p && (a.rotation.y = p);
        "undefined" != typeof g && (a.rotation.z = g);
        "undefined" != typeof l && (a.F.x = l);
        "undefined" != typeof e && (a.F.y = e);
        a.parent = this;
        this.i.push(a);
        this.node.appendChild(a.node);
        a instanceof z && M.push(a);
        return a
    },
    remove: function(a) {
        for (var b = 0; b < this.i.length; b++)
            if (this.i[b] === a)
                return a.parent = null,
                    a.node.parentNode.removeChild(a.node),
                    this.i.splice(b, 1),
                    a
    },
    clone: r.prototype.clone,
    j: r.prototype.j
};
z.prototype = {
    j: r.prototype.j,
    clone: r.prototype.clone,
    update: r.prototype.update,
    D: r.prototype.D
};
P.prototype = {
    j: function() {
        return "width:" + this.length.toFixed(2) + "px;height:1px;background:" + this.color + ";" + u.origin(0, 0, 0) + r.prototype.j.apply(this)
    },
    clone: r.prototype.clone,
    update: r.prototype.update,
    setStart: function(a) {
        this.position = d.create(a.x, a.y, a.z)
    },
    setEnd: function(a) {
        a = d.sub(a, this.position);
        this.length = d.l(a);
        this.rotation = d.create(0, t.R(-Math.atan2(a.z, a.x)), t.R(Math.asin(a.y / this.length)))
    }
};
Q.prototype = {
    ja: function(a, b, c, f, k) {
        if (k = t.ga(this.position, this.direction, a, k)) {
            var p = d.sub(k, this.position);
            if (0 < d.c(p, this.direction) && d.l(p) <= this.C && t.pa(a, b, c, f, k))
                return k
        }
        return null
    },
    ia: function(a, b) {
        var c = this.position,
            d = this.direction,
            k, p = (a.x - c.x) / d.x,
            g = (b.x - c.x) / d.x;
        p > g && (k = g,
            g = p,
            p = k);
        var l = (a.y - c.y) / d.y,
            e = (b.y - c.y) / d.y;
        l > e && (k = e,
            e = l,
            l = k);
        if (p > e || l > g)
            return !1;
        l > p && (p = l);
        e < g && (g = e);
        l = (a.z - c.z) / d.z;
        c = (b.z - c.z) / d.z;
        l > c && (k = c,
            c = l,
            l = k);
        return p > c || l > g ? !1 : !0
    }
};
q.prototype = {
    j: function() {
        return u.size(this.width, this.height) + u.aa(this.S) + u.s(this) + r.prototype.j.apply(this)
    },
    ha: function() {
        if (this.O)
            return this.O;
        var a, b;
        a = this.width / 2 | 0;
        b = this.height / 2 | 0;
        for (var c = Math.tan(t.G(this.F.x)), f = Math.tan(t.G(this.F.y)), k = d.create(-a - b * c, -b - a * f, 0), p = d.create(+a - b * c, -b + a * f, 0), g = d.create(+a + b * c, +b + a * f, 0), c = d.create(-a + b * c, +b - a * f, 0), f = this, l = d.K(this.w.g), e = d.K(this.w.a), m = d.K(this.w.h), h = d.K(this.w.d); f;)
            a = f.rotation,
            b = f.position,
            k = d.add(t.v(k, a), b),
            p = d.add(t.v(p, a), b),
            g = d.add(t.v(g, a), b),
            c = d.add(t.v(c, a), b),
            l = t.v(l, a),
            e = t.v(e, a),
            m = t.v(m, a),
            h = t.v(h, a),
            f = f.parent;
        this.O = [k, p, g, c];
        return [k, p, g, c, l, e, m, h]
    },
    clone: r.prototype.clone,
    update: r.prototype.update,
    D: r.prototype.D
};
w.prototype = J.prototype;
R.prototype = {
    Z: function(a) {
        this.perspective = a;
        this.node.style.cssText = u.perspective(a)
    },
    update: function() {
        this.I.style.cssText = u.P() + u.translate(0, 0, this.perspective, this.u.rotation.x, this.u.rotation.y, this.u.rotation.z);
        this.A.node.style.cssText = u.P() + u.translate(this.u.position.x, this.u.position.y, this.u.position.z, 0, 0, 0)
    }
};
var W = function() {
    var a = document.createElement("canvas"),
        b = a.getContext("2d");
    return function(c) {
        c || (c = [
            [0]
        ]);
        var d = c.length,
            k = c[0].length,
            p = b.createImageData(k, d);
        a.height = p.height;
        a.width = p.width;
        var g = p.data,
            l = 0;
        if (L)
            for (var e = 0; e < d; e++)
                for (var m = 0; m < k; m++) {
                    var h = c[e][m];
                    10 < d && 10 < k && (0 < e && (c[e - 1][m].x < h.x + 10 && (h.x = c[e - 1][m].x / 2 + h.x / 2),
                            c[e - 1][m].y < h.y + 10 && (h.y = c[e - 1][m].y / 2 + h.y / 2),
                            c[e - 1][m].z < h.z + 10 && (h.z = c[e - 1][m].z / 2 + h.z / 2)),
                        e < d - 1 && (c[e + 1][m].x < h.x + 10 && (h.x = c[e + 1][m].x / 2 + h.x / 2),
                            c[e + 1][m].y < h.y + 10 && (h.y = c[e + 1][m].y / 2 + h.y / 2),
                            c[e + 1][m].z < h.z + 10 && (h.z = c[e + 1][m].z / 2 + h.z / 2)),
                        0 < m && (c[e][m - 1].x < h.x + 10 && (h.x = c[e][m - 1].x / 2 + h.x / 2),
                            c[e][m - 1].y < h.y + 10 && (h.y = c[e][m - 1].y / 2 + h.y / 2),
                            c[e][m - 1].z < h.z + 10 && (h.z = c[e][m - 1].z / 2 + h.z / 2)),
                        m < k - 1 && (c[e][m + 1].x < h.x + 10 && (h.x = c[e][m + 1].x / 2 + h.x / 2),
                            c[e][m + 1].y < h.y + 10 && (h.y = c[e][m + 1].y / 2 + h.y / 2),
                            c[e][m + 1].z < h.z + 10 && (h.z = c[e][m + 1].z / 2 + h.z / 2)));
                    g[l + 0] = h.x | 0;
                    g[l + 1] = h.y | 0;
                    g[l + 2] = h.z | 0;
                    g[l + 3] = 255;
                    l += 4
                }
        else
            for (e = 0; e < d; e++)
                for (m = 0; m < k; m++)
                    h = c[e][m],
                    10 < d && 10 < k && (0 < e && c[e - 1][m] < h + 10 && (h = c[e - 1][m] / 2 + h / 2),
                        e < d - 1 && c[e + 1][m] < h + 10 && (h = c[e + 1][m] / 2 + h / 2),
                        0 < m && c[e][m - 1] < h + 10 && (h = c[e][m - 1] / 2 + h / 2),
                        m < k - 1 && c[e][m + 1] < h + 10 && (h = c[e][m + 1] / 2 + h / 2)),
                    g[l + 3] = Math.min(230, 255 - h) | 0,
                    l += 4;
        b.putImageData(p, 0, 0);
        return L ? a.toDataURL("image/jpeg", .9) : a.toDataURL()
    }
}();
(function() {
    var a = document.createElement("canvas"),
        b = a.getContext("2d");
    return function(c) {
        c || (c = [
            [0]
        ]);
        var d = c.length,
            k = c[0].length,
            p = b.createImageData(k, d);
        a.height = p.height;
        a.width = p.width;
        for (var g = p.data, l = 0, e = 0; e < d; e++)
            for (var m = 0; m < k; m++) {
                var h = c[e][m];
                10 < d && 10 < k && (0 < e && c[e - 1][m] < h + 10 && (h = c[e - 1][m] / 2 + h / 2),
                    e < d - 1 && c[e + 1][m] < h + 10 && (h = c[e + 1][m] / 2 + h / 2),
                    0 < m && c[e][m - 1] < h + 10 && (h = c[e][m - 1] / 2 + h / 2),
                    m < k - 1 && c[e][m + 1] < h + 10 && (h = c[e][m + 1] / 2 + h / 2));
                g[l + 3] = Math.min(230, 255 - h) | 0;
                l += 4
            }
        b.putImageData(p, 0, 0);
        return a.toDataURL()
    }
})();
S.prototype = {
    ka: function(a, b) {
        var c = this,
            d = new Image;
        c.ready = !1;
        d.onload = function() {
            var a = d.width,
                p = d.height;
            c.ready = !0;
            c.canvas.width = a;
            c.canvas.height = p;
            c.context.drawImage(d, 0, 0);
            b && b()
        };
        d.src = a
    },
    V: function(a, b) {
        var c;
        return this.ready ? (b = 58 - (b /= 12) | 0,
            a = 92 + (a /= 12) | 0,
            c = this.context.getImageData(b, a, 1, 1),
            25 * (255 - c.data[0])) : 0
    }
};
(function() {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c)
        window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(c) {
        var b = (new Date).getTime(),
            d = Math.max(0, 16 - (b - a)),
            g = window.setTimeout(function() {
                c(b + d)
            }, d);
        a = b + d;
        return g
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
        clearTimeout(a)
    })
})();
window.onload = control();