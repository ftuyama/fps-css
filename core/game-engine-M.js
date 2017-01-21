(function() {
    function L(a, c) {
        this.set(a, c)
    }

    function q() {
        this.node = document.createElement("div");
        this.node.id = S++;
        this.position = d.create();
        this.rotation = d.create();
        this.D = new L
    }

    function A() {
        q.call(this);
        this.g = [];
        this.color = M.splice(0, 1)[0];
        M.push(this.color)
    }

    function x(a, c, b) {
        q.call(this);
        this.$ = a;
        this.ba = c;
        this.color = b;
        this.node.className = "light"
    }

    function N(a, c, b, l) {
        q.call(this);
        this.node.className = "line";
        this.length = a;
        this.color = c;
        b && this.setStart(b);
        l && this.setEnd(l)
    }

    function O() {
        this.position = d.create(0, 0, 0);
        this.direction = d.create(0, 0, -1)
    }

    function p(a, c, b, l, f) {
        q.call(this);
        this.o = a;
        this.width = c;
        this.height = b;
        this.S = f;
        this.qa = !0;
        this.ca = !1 !== l;
        this.node.className = "plane";
        this.w = {
            c: d.create(0, 0, 1),
            a: d.create(0, 0, 1),
            f: d.create(0, 0, 1),
            d: d.create(0, 0, 1)
        }
    }

    function v() {
        A.call(this);
        this.node.className = "assembly"
    }

    function P(a, c) {
        this.node = document.createElement("div");
        this.node.className = "viewport";
        this.I = document.createElement("div");
        this.I.className = "camera";
        this.s = {
            position: d.create(0, 0, 0),
            rotation: d.create(0, 0, 0)
        };
        this.A = new v;
        this.node.appendChild(this.I);
        this.I.appendChild(this.A.node);
        a.appendChild(this.node);
        this.Z(c || 700)
    }

    function Q() {
        this.canvas = document.createElement("canvas");
        this.context = this.canvas.getContext("2d")
    }

    function T(a) {
        function c() {
            v.call(this)
        }

        function b(a, b, c, f) {
            v.call(this);
            this.add(new p({
                src: a.src
            }, b, c), 0, 0, f / 2, 0, 0, 0);
            this.add(new p({
                src: a.src
            }, b, c), 0, 0, -f / 2, 0, 180, 0);
            this.add(new p({
                src: a.src
            }, f, c), b / 2, 0, 0, 0, 90, 0);
            this.add(new p({
                src: a.src
            }, f, c), -b / 2, 0, 0, 0, 270, 0);
            this.add(new p({
                src: a.src
            }, b, f), 0, -c / 2, 0, 90, 0, 0);
            this.add(new p({
                src: a.src
            }, b, f), 0, c / 2, 0, 270, 0, 0)
        }

        function l(a, b, c, f) {
            v.call(this);
            for (var l = Math.PI / f * 2, n = Math.tan(Math.PI / f), m = b * Math.tan(Math.PI / f), h = 0; h < f; h++) {
                var q = Math.sin(l * h) * b / 2,
                    u = Math.cos(l * h) * b / 2,
                    x = Math.atan2(q, u),
                    C = new p({
                        src: a.src,
                        x: m * (f - h),
                        ra: m
                    }, m + 1.5, c);
                C.w.d = C.w.c = d.create(-n, 0, 1);
                C.w.f = C.w.a = d.create(n, 0, 1);
                this.add(C, q, 0, u, 0, r.R(x), 0)
            }
        }

        function f() {
            b.call(this, {
                src: "../crate.jpg"
            }, 150, 150, 150)
        }

        function n() {
            l.call(this, {
                src: "../drum2.png"
            }, 100, 196, 12);
            this.add(new p({
                src: "../drum2.png",
                x: 0,
                y: 196,
                ra: 102,
                Aa: 102,
                la: !0
            }, 102, 102, !1), 0, -98, 0, 90)
        }
        c.prototype = v.prototype;
        b.prototype = v.prototype;
        l.prototype = v.prototype;
        f.prototype = new v;
        n.prototype = v.prototype;
        var h = new c;
        h.add(new p({
            src: "../wall.jpg"
        }, 2E3, 700), 0, -350, -700, 0, 0, 0);
        h.add(new p({
            src: "../wall.jpg"
        }, 1E3, 700), 500, -350, 300, 0, 180, 0);
        h.add(new p({
            src: "../wall.jpg"
        }, 1E3, 700), 1E3, -350, -200, 180, 270, 0);
        h.add(new p({
            src: "../wall.jpg"
        }, 500, 1100), 0, -550, 550, 0, 270, 0);
        h.add(new p({
            src: "../wall.jpg"
        }, 600, 700), -700, -350, 300, 0, 180, 0);
        h.add(new p({
            src: "../wall.jpg"
        }, 1E3, 700), -1E3, -350, -200, 0, 90, 0);
        h.add(new p({
            src: "../floor.jpg"
        }, 2E3, 1E3, !1), 0, 0, -200, 90, 0, 0);
        h.add(new p({
            src: "../ceil.jpg"
        }, 2E3, 1E3, !1), 0, -700, -200, 270, 0, 0);
        for (var m = -1; 1 >= m; m++)
            h.add(new p({
                src: "../ceil.jpg"
            }, 100, 650), 75 + 552 * m, -325, -650, 0, 0, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 50, 650), 125 + 552 * m, -325, -675, 0, 90, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 50, 650), 25 + 552 * m, -325, -675, 0, 270, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 100, 1E3), 75 + 552 * m, -650, -200, 270, 0, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 1E3, 50), 125 + 552 * m, -675, -200, 0, 90, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 1E3, 50), 25 + 552 * m, -675, -200, 0, 270, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 100, 650), 75 + 552 * m, -325, 250, 0, 180, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 50, 650), 125 + 552 * m, -325, 275, 0, 90, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 50, 650), 25 + 552 * m, -325, 275, 0, 270, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 101, 650), 75 + 552 * m, -325, -225, 0, 180, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 101, 650), 75 + 552 * m, -325, -125, 0, 0, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 101, 650), 125 + 552 * m, -325, -175, 0, 90, 0),
            h.add(new p({
                src: "../ceil.jpg"
            }, 101, 650), 25 + 552 * m, -325, -175, 0, 270, 0);
        h.add(new l({
            src: "../pipe2.jpg"
        }, 60, 2E3, 16), 0, -610, 180, 90, 0, 90);
        h.add(new l({
            src: "../pipe2.jpg"
        }, 40, 700, 12), 960, -350, -500, 0, 180, 0);
        h.add(new l({
            src: "../pipe2.jpg"
        }, 40, 700, 12), 960, -350, -420, 0, 180, 0);
        h.add(new f, -800, -75, -470);
        h.add(new f, -820, -225, -380, 0, 15);
        h.add(new f, -850, -75, -270, 0, -15);
        h.add(new n, -270, -98, -345);
        h.add(new n, 350, -98, 116, 0, 40);
        h.add(new n, 263, -98, -512);
        h.add(new n, 640, -98, -440, 0, 190, 0);
        h.add(new n, 90, -98, -20, 0, 120, 0);
        h.add(new x(200, 1, {
            r: 255,
            L: 110,
            a: 50
        }), -150, -630, 330);
        h.add(new x(85, .5, {
            r: 255,
            L: 140,
            a: 0
        }), -170, -820, 840);
        h.add(new p({
            src: "../wall.jpg"
        }, 400, 400), -200, -900, 300, 0, 0, 0);
        h.add(new p({
            src: "../wall.jpg"
        }, 1E3, 1100), -400, -550, 800, 0, 90, 0);
        for (m = 0; 10 > m; m++)
            h.add(new p({
                src: "../floor.jpg",
                y: 100 * m
            }, 400, 50), -201, 50 * -m - 25, 50 * m + 300, 0, 180),
            h.add(new p({
                src: "../floor.jpg",
                y: 100 * m + 50
            }, 400, 50), -201, 50 * -m - 50, 50 * m + 325, 90);
        h.add(new x(105, 1, {
            r: 128,
            L: 255,
            a: 0
        }), 70, -600, -400);
        m = new c;
        m.add(new p({
            src: "../floor.jpg"
        }, 1400, 500), -200, 0, 0, 90, 0, 0);
        m.add(new p({
            src: "../wall.jpg"
        }, 1E3, 600), 0, -300, -250, 0, 0, 0);
        m.add(new p({
            src: "../wall.jpg"
        }, 1400, 600), -200, -300, 250, 0, 180, 0);
        m.add(new p({
            src: "../ceil.jpg"
        }, 1400, 1E3), -200, -600, -250, 270, 0, 0);
        m.add(new p({
            src: "../wall.jpg"
        }, 500, 600), 500, -300, 0, 0, 270, 0);
        m.add(new f, -600, -75, 140, 0, -15);
        m.add(new n, -100, -98, -120, 0, 0);
        m.add(new x(125, 1, {
            r: 128,
            L: 178,
            a: 255
        }), 280, -400, -100);
        a.add(h, 100, 0, 0);
        a.add(m, 600, -500, 1050)
    }

    function R() {
        var a = document.body;

        function c(a) {
            var b, c;
            for (b = 0; b < a.length; b++)
                if (c = a[b],
                    c.target === d || c.target === f)
                    return c
        }

        function b(a, b) {
            var c = "translate(-50%,-50%)";
            if (a || b)
                c += "translate3d(" + 50 * a + "%," + 50 * b + "%,0)";
            d.style[h] = c;
            l.position.x = 1.25 * (.2 < Math.abs(a) ? a - (0 < a ? .2 : -.2) : 0);
            l.position.y = 1.25 * (.2 < Math.abs(b) ? b - (0 < b ? .2 : -.2) : 0)
        }
        var l = this,
            f = document.createElement("div"),
            d = document.createElement("div"),
            h = ["transform", "webkitTransform", "MozTransform", "msTransform"].filter(function(a) {
                return a in document.documentElement.style
            })[0];
        d.style.cssText = "border-radius:100%;width:75%;height:75%;background:rgba(255,255,255,.5);position:absolute;left:50%;top:50%;";
        f.style.cssText = "border-radius:10%;width:120px;height:120px;width:30vmin;height:30vmin;background:rgba(180,180,180,.2);position:relative";
        f.className = "joystick";
        l.position = {};
        f.addEventListener("touchstart", function(a) {
            var l = f.offsetWidth / 2,
                d = f.offsetHeight / 2,
                e = c(a.targetTouches),
                n;
            if (e) {
                var h = function(a) {
                    (a = c(a.changedTouches)) && b(Math.max(-l, Math.min(a.pageX - n.x, l)) / l, Math.max(-d, Math.min(a.pageY - n.y, d)) / d)
                };
                n = {
                    x: e.pageX,
                    y: e.pageY
                };
                document.addEventListener("touchmove", h);
                document.addEventListener("touchend", function U(a) {
                    c(a.changedTouches) && (document.removeEventListener("touchmove", h),
                        document.removeEventListener("touchend", U),
                        b(0, 0))
                })
            }
            a.preventDefault()
        });
        b(0, 0);
        f.appendChild(d);
        a.appendChild(f)
    }
    var J = 8,
        K = !0,
        d = {
            create: function(a, c, b) {
                return {
                    x: a || 0,
                    y: c || 0,
                    z: b || 0
                }
            },
            add: function(a, c) {
                return {
                    x: a.x + c.x,
                    y: a.y + c.y,
                    z: a.z + c.z
                }
            },
            sub: function(a, c) {
                return {
                    x: a.x - c.x,
                    y: a.y - c.y,
                    z: a.z - c.z
                }
            },
            Ba: function(a, c) {
                return {
                    x: a.x * c.x,
                    y: a.y * c.y,
                    z: a.z * c.z
                }
            },
            wa: function(a, c) {
                return {
                    x: a.x / c.x,
                    y: a.y / c.y,
                    z: a.z / c.z
                }
            },
            m: function(a, c) {
                return {
                    x: a.x * c,
                    y: a.y * c,
                    z: a.z * c
                }
            },
            H: function(a, c) {
                return {
                    x: a.x / c,
                    y: a.y / c,
                    z: a.z / c
                }
            },
            j: function(a) {
                return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z)
            },
            b: function(a, c) {
                return a.x * c.x + a.y * c.y + a.z * c.z
            },
            ea: function(a, c) {
                return {
                    x: a.y * c.z - a.z * c.y,
                    y: a.z * c.x - a.x * c.z,
                    z: a.x * c.y - a.y * c.x
                }
            },
            normalize: function(a) {
                return d.H(a, d.j(a))
            },
            sa: function(a, c) {
                return Math.acos(d.b(a, c) / (d.j(a) * d.j(c)))
            },
            K: function(a) {
                return {
                    x: a.x,
                    y: a.y,
                    z: a.z
                }
            },
            xa: function(a, c) {
                return a.x === c.x && a.y === c.y && a.z === c.z
            }
        },
        r = {
            R: function(a) {
                return 57.2957795 * a
            },
            G: function(a) {
                return .0174532925 * a
            },
            u: function(a, c) {
                var b = r.G(c.x / 2),
                    l = r.G(c.y / 2),
                    f = r.G(c.z / 2),
                    d = Math.cos(b),
                    h = Math.cos(l),
                    m = Math.cos(f),
                    b = Math.sin(b),
                    l = Math.sin(l),
                    g = Math.sin(f),
                    f = d * h * m + -b * l * g,
                    k = b * h * m - -d * l * g,
                    e = d * l * m + b * h * -g,
                    d = d * h * g - -b * l * m;
                return {
                    x: a.x * (1 - 2 * (e * e + d * d)) + 2 * a.y * (k * e - d * f) + 2 * a.z * (k * d + e * f),
                    y: 2 * a.x * (k * e + d * f) + a.y * (1 - 2 * (k * k + d * d)) + 2 * a.z * (e * d - k * f),
                    z: 2 * a.x * (k * d - e * f) + 2 * a.y * (d * e + k * f) + a.z * (1 - 2 * (k * k + e * e))
                }
            },
            J: function(a, c) {
                var b = [];
                if (a instanceof A)
                    for (var l = 0; l < a.g.length; l++)
                        b = b.concat(r.J(a.g[l], c));
                else
                    a instanceof c && b.push(a);
                return b
            },
            Y: function(a, c, b, l) {
                b = d.sub(b, a);
                c = d.sub(c, a);
                var f = d.sub(l, a);
                a = d.b(b, b);
                l = d.b(b, c);
                b = d.b(b, f);
                var n = d.b(c, c);
                c = d.b(c, f);
                f = 1 / (a * n - l * l);
                n = (n * b - l * c) * f;
                a = (a * c - l * b) * f;
                return 0 <= n && 0 <= a && 1 > n + a
            },
            ya: function(a, c, b, l, f) {
                var n = d.b(l, d.sub(c, a));
                return 0 < d.b(l, d.sub(f, b)) ? d.add(a, d.m(d.normalize(d.sub(c, a)), n)) : a
            },
            ga: function(a, c, b, l) {
                b = -d.b(l, b);
                b = d.b(l, a) + b;
                l = d.b(l, c);
                return 0 === l ? null : d.add(a, d.m(c, -(b / l)))
            },
            U: function(a, c, b, l) {
                var f = d.sub(b, a);
                b = d.sub(c, a);
                var n = d.j(b);
                b = d.normalize(b);
                f = d.b(b, f);
                if (0 > f)
                    return l ? a : null;
                if (f > n)
                    return l ? c : null;
                b = d.m(b, f);
                return d.add(a, b)
            },
            fa: function(a, c, b, l, f) {
                a = r.U(a, c, f, !0);
                b = r.U(c, b, f, !0);
                return d.add(c, d.add(d.sub(a, c), d.sub(b, c)))
            },
            Da: function(a, c, b, l, f) {
                var d = Math.max(a.x, c.x, b.x, l.x),
                    h = Math.min(a.y, c.y, b.y, l.y),
                    m = Math.max(a.y, c.y, b.y, l.y),
                    g = Math.min(a.z, c.z, b.z, l.z),
                    k = Math.max(a.z, c.z, b.z, l.z);
                return Math.min(a.x, c.x, b.x, l.x) > f.x && d < f.x || h > f.y && m < f.y || g > f.z && k < f.z
            },
            pa: function(a, c, b, l, f) {
                return r.Y(a, c, b, f) || r.Y(a, b, l, f)
            },
            T: function(a) {
                var c = new O,
                    b = r.J(a, x),
                    l = r.J(a, p);
                r.J(a, N).forEach(function(a) {
                    a.parent.remove(a)
                });
                l.forEach(function(a) {
                    delete a.O;
                    delete a.l;
                    var b = a.ha(),
                        c = d.sub(b[1], b[0]),
                        l = d.sub(b[2], b[1]);
                    a.c = b[0];
                    a.a = b[1];
                    a.f = b[2];
                    a.d = b[3];
                    a.M = d.normalize(d.ea(c, l));
                    a.W = b[4];
                    a.X = b[5];
                    a.oa = b[6];
                    a.Ca = b[7]
                });
                b.forEach(function(a) {
                    var b = 0,
                        h = 0,
                        m = 0,
                        g = 0,
                        k = [],
                        e = 100 + 10 * a.$,
                        p = a.C(),
                        t, q, u = d.create(a.color.r, a.color.L, a.color.a),
                        v = l.filter(function(a) {
                            var b = r.fa(a.c, a.a, a.f, a.d, p),
                                c = d.sub(p, b),
                                l = d.j(c);
                            a.ta = b;
                            a.B = l;
                            a.b = d.b(a.M, d.normalize(c));
                            if (l <= e)
                                return a.ca && k.push({
                                    c: a.c,
                                    a: a.a,
                                    f: a.f,
                                    d: a.d,
                                    M: a.M,
                                    B: a.B,
                                    na: d.create(Math.min(a.c.x, a.a.x, a.f.x, a.d.x), Math.min(a.c.y, a.a.y, a.f.y, a.d.y), Math.min(a.c.z, a.a.z, a.f.z, a.d.z)),
                                    ma: d.create(Math.max(a.c.x, a.a.x, a.f.x, a.d.x), Math.max(a.c.y, a.a.y, a.f.y, a.d.y), Math.max(a.c.z, a.a.z, a.f.z, a.d.z)),
                                    S: !1
                                }), !0
                        });
                    k.sort(function(a, b) {
                        return a.B < b.B ? -1 : 1
                    });
                    for (var x = 0; x < v.length; x++)
                        if (t = v[x],
                            0 < t.b) {
                            var A = Math.ceil(t.width / J) + 1,
                                I = Math.ceil(t.height / J) + 1,
                                C = d.H(d.sub(t.a, t.c), A),
                                L = d.H(d.sub(t.f, t.a), I),
                                M = d.H(d.sub(t.X, t.W), A),
                                N = d.H(d.sub(t.X, t.oa), I);
                            t.l || (t.l = []);
                            for (var z = 0; z < I; z++) {
                                t.l[z] || (t.l[z] = []);
                                for (var B = 0; B < A; B++) {
                                    q = t.c;
                                    q = d.add(q, d.m(C, B));
                                    q = d.add(q, d.m(L, z));
                                    var w = d.sub(p, q),
                                        G = d.j(w),
                                        y = d.normalize(w),
                                        w = 255;
                                    b++;
                                    w = d.add(t.W, d.add(d.m(N, z), d.m(M, B)));
                                    w = Math.max(d.b(w, y), 0);
                                    w = Math.max(0, 1 - G / e) * w * 255 * a.ba;
                                    if (t.qa && G <= e)
                                        for (c.position = d.add(q, d.m(y, J)),
                                            c.B = G - J,
                                            c.direction = y,
                                            q = k.length,
                                            G = 0; G < q; G++)
                                            if (y = k[G],
                                                c.ia(y.na, y.ma))
                                                if (h++,
                                                    c.ja(y.c, y.a, y.f, y.d, y.M)) {
                                                    w = 0;
                                                    g++;
                                                    break
                                                } else
                                                    m++;
                                    K ? t.l[z][B] = d.add(t.l[z][B] || d.create(), d.m(u, w / 255)) : (w = Math.min(255, (t.l[z][B] || w) + w),
                                        t.l[z][B] = w)
                                }
                            }
                        }
                })
            }
        },
        u = function() {
            var a = document.documentElement.style,
                c = void 0 !== a.WebkitTransform && "-webkit-" || void 0 !== a.MozTransform && "-moz-" || void 0 !== a.transform && "";
            K &= void 0 !== a.backgroundBlendMode;
            return {
                P: function() {
                    return "position: absolute;left:50%;top:50%;" + c + "transform-style:preserve-3d;"
                },
                size: function(a, c) {
                    return "width:" + a.toFixed(2) + "px;height:" + c.toFixed(2) + "px;margin-left:" + -(a / 2).toFixed(2) + "px;margin-top:" + -(c / 2).toFixed(2) + "px;"
                },
                translate: function(a, l, d, n, h, m, g, k) {
                    return c + "transform:translate3d(" + a.toFixed(2) + "px," + l.toFixed(2) + "px," + d.toFixed(2) + "px)rotateX(" + n.toFixed(2) + "deg)rotateY(" + h.toFixed(2) + "deg)rotateZ(" + m.toFixed(2) + "deg)skewX(" + (g || 0) + "deg)skewY(" + (k || 0) + "deg);"
                },
                origin: function(a, l, d) {
                    return c + "transform-origin:" + a.toFixed(2) + "px " + l.toFixed(2) + "px " + d.toFixed(2) + "px;"
                },
                aa: function(a) {
                    return a ? "" : c + "backface-visibility:hidden;"
                },
                perspective: function(a) {
                    return c + "perspective:" + a + "px;"
                },
                za: function(a) {
                    for (var c = 0, f = 0; f < I.length; f++)
                        var n = I[f],
                            n = d.j(d.add(n.C(), a)) / (100 + 6 * n.$),
                            c = Math.max(c, 1 - n);
                    return c
                },
                da: function(a) {
                    return V(a.l)
                },
                o: function(a) {
                    var d = [],
                        f = [],
                        n = [],
                        h = [],
                        m = "",
                        g = u.da(a);
                    g && ("-" == g.charAt(0) ? d.push(g) : d.push("url(" + g + ")"),
                        f.push("100% 100%"),
                        n.push("0 0"),
                        h.push("multiply"));
                    d.push("url(" + a.o.src + ")");
                    f.push("auto");
                    n.push((a.o.x || 0).toFixed(2) + "px -" + (a.o.y || 0).toFixed(2) + "px");
                    a.o.la && (m += c + "mask-image:url(" + a.o.src + ");" + c + "mask-position:" + (a.o.x || 0).toFixed(2) + "px -" + (a.o.y || 0).toFixed(2) + "px;");
                    d.length && (m += "background:" + d.join() + ";");
                    n.length && (m += "background-position:" + n.join() + ";");
                    f.length && (m += "background-size: " + f.join() + ";");
                    K && h.length && (m += "background-blend-mode: " + h.join() + ";");
                    return m
                },
                clone: function(a) {
                    var c;
                    a instanceof v && (c = new v);
                    a instanceof p && (c = new p(a.ua, a.width, a.height, a.position.x, a.position.y));
                    if (c && c.g)
                        for (var d = 0; d < a.g.length; d++)
                            c.add(u.clone(a.g[d]));
                    return c
                }
            }
        }();
    L.prototype = {
        set: function(a, c, b) {
            1 == arguments.length ? this.set(a.x, a.y) : (this.x = a || 0,
                this.y = c || 0)
        }
    };
    var M = "#f00 #f80 #ff0 #8f0 #0f0 #0f8 #0ff #08f #00f #80f #f0f #f08".split(" "),
        S = 0,
        I = [];
    q.prototype = {
        update: function() {
            setTimeout(function() {
                    this.node.style.cssText = this.i()
                }
                .bind(this));
            delete this.N
        },
        i: function() {
            return u.P() + u.translate(this.position.x, this.position.y, this.position.z, this.rotation.x, this.rotation.y, this.rotation.z, this.D.x, this.D.y)
        },
        clone: function() {
            return u.clone(this)
        },
        C: function() {
            if (this.N)
                return this.N;
            for (var a = this, c = d.create(0, 0, 0); a;)
                c = d.add(c, a.position),
                a = a.parent;
            return this.N = c
        }
    };
    A.prototype = {
        update: function(a) {
            q.prototype.update.call(this);
            if (a)
                for (a = 0; a < this.g.length; a++)
                    this.g[a].update(!0)
        },
        add: function(a, c, b, d, f, n, h, m, g) {
            a.parent && a.parent.remove(a);
            "undefined" != typeof c && (a.position.x = c);
            "undefined" != typeof b && (a.position.y = b);
            "undefined" != typeof d && (a.position.z = d);
            "undefined" != typeof f && (a.rotation.x = f);
            "undefined" != typeof n && (a.rotation.y = n);
            "undefined" != typeof h && (a.rotation.z = h);
            "undefined" != typeof m && (a.D.x = m);
            "undefined" != typeof g && (a.D.y = g);
            a.parent = this;
            this.g.push(a);
            this.node.appendChild(a.node);
            a instanceof x && I.push(a);
            return a
        },
        remove: function(a) {
            for (var c = 0; c < this.g.length; c++)
                if (this.g[c] === a)
                    return a.parent = null,
                        a.node.parentNode.removeChild(a.node),
                        this.g.splice(c, 1),
                        a
        },
        clone: q.prototype.clone,
        i: q.prototype.i
    };
    x.prototype = {
        i: q.prototype.i,
        clone: q.prototype.clone,
        update: q.prototype.update,
        C: q.prototype.C
    };
    N.prototype = {
        i: function() {
            return "width:" + this.length.toFixed(2) + "px;height:1px;background:" + this.color + ";" + u.origin(0, 0, 0) + q.prototype.i.apply(this)
        },
        clone: q.prototype.clone,
        update: q.prototype.update,
        setStart: function(a) {
            this.position = d.create(a.x, a.y, a.z)
        },
        setEnd: function(a) {
            a = d.sub(a, this.position);
            this.length = d.j(a);
            this.rotation = d.create(0, r.R(-Math.atan2(a.z, a.x)), r.R(Math.asin(a.y / this.length)))
        }
    };
    O.prototype = {
        ja: function(a, c, b, l, f) {
            if (f = r.ga(this.position, this.direction, a, f)) {
                var n = d.sub(f, this.position);
                if (0 < d.b(n, this.direction) && d.j(n) <= this.B && r.pa(a, c, b, l, f))
                    return f
            }
            return null
        },
        ia: function(a, c) {
            var b = this.position,
                d = this.direction,
                f, n = (a.x - b.x) / d.x,
                h = (c.x - b.x) / d.x;
            n > h && (f = h,
                h = n,
                n = f);
            var m = (a.y - b.y) / d.y,
                g = (c.y - b.y) / d.y;
            m > g && (f = g,
                g = m,
                m = f);
            if (n > g || m > h)
                return !1;
            m > n && (n = m);
            g < h && (h = g);
            m = (a.z - b.z) / d.z;
            b = (c.z - b.z) / d.z;
            m > b && (f = b,
                b = m,
                m = f);
            return n > b || m > h ? !1 : !0
        }
    };
    p.prototype = {
        i: function() {
            return u.size(this.width, this.height) + u.aa(this.S) + u.o(this) + q.prototype.i.apply(this)
        },
        ha: function() {
            if (this.O)
                return this.O;
            var a, c;
            a = this.width / 2 | 0;
            c = this.height / 2 | 0;
            for (var b = Math.tan(r.G(this.D.x)), l = Math.tan(r.G(this.D.y)), f = d.create(-a - c * b, -c - a * l, 0), n = d.create(+a - c * b, -c + a * l, 0), h = d.create(+a + c * b, +c + a * l, 0), b = d.create(-a + c * b, +c - a * l, 0), l = this, m = d.K(this.w.c), g = d.K(this.w.a), k = d.K(this.w.f), e = d.K(this.w.d); l;)
                a = l.rotation,
                c = l.position,
                f = d.add(r.u(f, a), c),
                n = d.add(r.u(n, a), c),
                h = d.add(r.u(h, a), c),
                b = d.add(r.u(b, a), c),
                m = r.u(m, a),
                g = r.u(g, a),
                k = r.u(k, a),
                e = r.u(e, a),
                l = l.parent;
            this.O = [f, n, h, b];
            return [f, n, h, b, m, g, k, e]
        },
        clone: q.prototype.clone,
        update: q.prototype.update,
        C: q.prototype.C
    };
    v.prototype = A.prototype;
    P.prototype = {
        Z: function(a) {
            this.perspective = a;
            this.node.style.cssText = u.perspective(a)
        },
        update: function() {
            this.I.style.cssText = u.P() + u.translate(0, 0, this.perspective, this.s.rotation.x, this.s.rotation.y, this.s.rotation.z);
            this.A.node.style.cssText = u.P() + u.translate(this.s.position.x, this.s.position.y, this.s.position.z, 0, 0, 0)
        }
    };
    var V = function() {
        var a = document.createElement("canvas"),
            c = a.getContext("2d");
        return function(b) {
            b || (b = [
                [0]
            ]);
            var d = b.length,
                f = b[0].length,
                n = c.createImageData(f, d);
            a.height = n.height;
            a.width = n.width;
            var h = n.data,
                m = 0;
            if (K)
                for (var g = 0; g < d; g++)
                    for (var k = 0; k < f; k++) {
                        var e = b[g][k];
                        10 < d && 10 < f && (0 < g && (b[g - 1][k].x < e.x + 10 && (e.x = b[g - 1][k].x / 2 + e.x / 2),
                                b[g - 1][k].y < e.y + 10 && (e.y = b[g - 1][k].y / 2 + e.y / 2),
                                b[g - 1][k].z < e.z + 10 && (e.z = b[g - 1][k].z / 2 + e.z / 2)),
                            g < d - 1 && (b[g + 1][k].x < e.x + 10 && (e.x = b[g + 1][k].x / 2 + e.x / 2),
                                b[g + 1][k].y < e.y + 10 && (e.y = b[g + 1][k].y / 2 + e.y / 2),
                                b[g + 1][k].z < e.z + 10 && (e.z = b[g + 1][k].z / 2 + e.z / 2)),
                            0 < k && (b[g][k - 1].x < e.x + 10 && (e.x = b[g][k - 1].x / 2 + e.x / 2),
                                b[g][k - 1].y < e.y + 10 && (e.y = b[g][k - 1].y / 2 + e.y / 2),
                                b[g][k - 1].z < e.z + 10 && (e.z = b[g][k - 1].z / 2 + e.z / 2)),
                            k < f - 1 && (b[g][k + 1].x < e.x + 10 && (e.x = b[g][k + 1].x / 2 + e.x / 2),
                                b[g][k + 1].y < e.y + 10 && (e.y = b[g][k + 1].y / 2 + e.y / 2),
                                b[g][k + 1].z < e.z + 10 && (e.z = b[g][k + 1].z / 2 + e.z / 2)));
                        h[m + 0] = e.x | 0;
                        h[m + 1] = e.y | 0;
                        h[m + 2] = e.z | 0;
                        h[m + 3] = 255;
                        m += 4
                    }
            else
                for (g = 0; g < d; g++)
                    for (k = 0; k < f; k++)
                        e = b[g][k],
                        10 < d && 10 < f && (0 < g && b[g - 1][k] < e + 10 && (e = b[g - 1][k] / 2 + e / 2),
                            g < d - 1 && b[g + 1][k] < e + 10 && (e = b[g + 1][k] / 2 + e / 2),
                            0 < k && b[g][k - 1] < e + 10 && (e = b[g][k - 1] / 2 + e / 2),
                            k < f - 1 && b[g][k + 1] < e + 10 && (e = b[g][k + 1] / 2 + e / 2)),
                        h[m + 3] = Math.min(230, 255 - e) | 0,
                        m += 4;
            c.putImageData(n, 0, 0);
            return K ? a.toDataURL("image/jpeg", .9) : a.toDataURL()
        }
    }();
    (function() {
        var a = document.createElement("canvas"),
            c = a.getContext("2d");
        return function(b) {
            b || (b = [
                [0]
            ]);
            var d = b.length,
                f = b[0].length,
                n = c.createImageData(f, d);
            a.height = n.height;
            a.width = n.width;
            for (var h = n.data, m = 0, g = 0; g < d; g++)
                for (var k = 0; k < f; k++) {
                    var e = b[g][k];
                    10 < d && 10 < f && (0 < g && b[g - 1][k] < e + 10 && (e = b[g - 1][k] / 2 + e / 2),
                        g < d - 1 && b[g + 1][k] < e + 10 && (e = b[g + 1][k] / 2 + e / 2),
                        0 < k && b[g][k - 1] < e + 10 && (e = b[g][k - 1] / 2 + e / 2),
                        k < f - 1 && b[g][k + 1] < e + 10 && (e = b[g][k + 1] / 2 + e / 2));
                    h[m + 3] = Math.min(230, 255 - e) | 0;
                    m += 4
                }
            c.putImageData(n, 0, 0);
            return a.toDataURL()
        }
    })();
    Q.prototype = {
        ka: function(a, c) {
            var b = this,
                d = new Image;
            b.ready = !1;
            d.onload = function() {
                var a = d.width,
                    n = d.height;
                b.ready = !0;
                b.canvas.width = a;
                b.canvas.height = n;
                b.context.drawImage(d, 0, 0);
                c && c()
            };
            d.src = a
        },
        V: function(a, c) {
            var b;
            return this.ready ? (c = 58 - (c /= 12) | 0,
                a = 92 + (a /= 12) | 0,
                b = this.context.getImageData(c, a, 1, 1),
                25 * (255 - b.data[0])) : 0
        }
    };
    Function.prototype.bind || (Function.prototype.bind = function(a) {
        function c() {
            return f.apply(this instanceof b && a ? this : a, d.concat(Array.prototype.slice.call(arguments)))
        }

        function b() {}
        if ("function" !== typeof this)
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var d = Array.prototype.slice.call(arguments, 1),
            f = this;
        b.prototype = this.prototype;
        c.prototype = new b;
        return c
    });
    (function() {
        for (var a = 0, c = ["ms", "moz", "webkit", "o"], b = 0; b < c.length && !window.requestAnimationFrame; ++b)
            window.requestAnimationFrame = window[c[b] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[c[b] + "CancelAnimationFrame"] || window[c[b] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
            var c = (new Date).getTime(),
                d = Math.max(0, 16 - (c - a)),
                h = window.setTimeout(function() {
                    b(c + d)
                }, d);
            a = c + d;
            return h
        });
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    })();
    window.onload = function() {
        var a;

        function c() {
            g.Z(.5 / Math.tan(6.981317) * Math.min(innerWidth, innerHeight))
        }

        function b(b) {
            var c = "keydown" == b.type;
            switch (b.keyCode) {
                case 32:
                    a = c
            }
        }

        function l(b) {
            b = b - p || 0;
            requestAnimationFrame(l);
            e.rotation.y += 3.5 * h.position.x;
            e.rotation.x -= 3.5 * h.position.y;
            e.rotation.x = Math.max(Math.min(e.rotation.x, 90), -90);
            e.v = 5 * m.position.x;
            e.h = 5 * -m.position.y;
            var c = .0174532925 * g.s.rotation.y,
                d = e.position.x - Math.sin(c) * e.h - Math.cos(c) * e.v,
                c = e.position.z + Math.cos(c) * e.h - Math.sin(c) * e.v;
            60 < n.V(d, c) - e.position.y ? (e.h = 0,
                e.v = 0) : (e.position.x = d,
                e.position.z = c);
            d = n.V(e.position.x, e.position.z);
            e.position.y > d ? e.position.y < d + 9 ? (e.position.y = d,
                e.v /= 1.3,
                e.h /= 1.3) : e.F = Math.min(40, Math.max(-12, e.F + .75)) : e.position.y > d - 9 ? e.position.y = d : (e.F = -5,
                e.h /= 1.1,
                e.v /= 1.1);
            e.position.y === d && (e.F = 0,
                a && (e.F = -12));
            d = Math.cos(b / 250) * e.h / 10;
            b = Math.sin(b / 500) * e.h / 2 / 10;
            e.position.y -= e.F;
            k.rotation = e.rotation;
            k.rotation.x += d;
            k.rotation.y += b;
            k.position.x = e.position.x;
            k.position.y = e.position.y + 275;
            k.position.z = e.position.z;
            g.update();
            k.rotation.x -= d;
            k.rotation.y -= b
        }
        var f = document.getElementById("viewport"),
            n = new Q,
            h, m;
        window.va && (debugUI.onchange = function() {
            r.T(g.A, !1);
            g.A.update(!0)
        });
        var g = new P(f),
            k = g.s,
            e = {
                position: d.create(-1E3, 500, -1050),
                rotation: d.create(0, 270, 0),
                h: 0,
                F: 0,
                v: 0
            };
        T(g.A);
        a = !1;
        n.ka("../map.png", function() {
            f.className = "";
            document.addEventListener("touchstart", function(a) {
                "A" !== a.target.tagName && a.preventDefault()
            });
            h = new R;
            m = new R;
            l()
        });
        document.addEventListener("keydown", b, !1);
        document.addEventListener("keyup", b, !1);
        J = 20;
        r.T(g.A);
        c();
        window.addEventListener("resize", c);
        g.A.update(!0);
        var p = new Date
    }
})();