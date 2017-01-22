var lastShot = Date.now();
var control = function() {
    var a, b, c, f, k;

    // Keys down detection
    function p(d) {
        var h = "keydown" == d.type;
        switch (d.keyCode) {
            case 87:
                a = h;
                break;
            case 83:
                b = h;
                break;
            case 65:
                c = h;
                break;
            case 68:
                f = h;
                break;
            case 32:
                k = h
        }
    }

    function g() {
        u.Z(.5 / Math.tan(6.981317) * Math.min(innerWidth, innerHeight))
    }

    function l(d) {
        d = d - z || 0;
        requestAnimationFrame(l);
        f ? n.b = Math.min(n.b + .2, 5) : c ? n.b = Math.max(n.b - .2, -5) : 0 < n.b ? n.b = Math.max(n.b - .2, 0) : 0 > n.b && (n.b = Math.min(n.b + .2, 0));
        n.f = a ? Math.min(n.f + .2, 5) : b ? Math.max(n.f - .2, -5) : 0 < n.f ? Math.max(n.f - .2, 0) : 0 > n.f ? Math.min(n.f + .2, 0) : 0;
        var g = .0174532925 * u.u.rotation.y,
            e = n.position.x - Math.sin(g) * n.f - Math.cos(g) * n.b,
            g = n.position.z + Math.cos(g) * n.f - Math.sin(g) * n.b,
            m = q.V(e, g);
        0 !== n.f || 0 !== n.b || 0 !== n.B ? (w && (w = clearTimeout(w)),
            r && (h.className = "hide",
                r = !1)) : w || (w = setTimeout(function() {
            h.className = "";
            r = !0
        }, 4E3));
        60 < m - n.position.y ? (n.f = 0,
            n.b = 0) : (n.position.x = e,
            n.position.z = g);
        e = q.V(n.position.x, n.position.z);
        n.position.y > e ? n.position.y < e + 9 ? (n.position.y = e,
            n.b /= 1.3,
            n.f /= 1.3) : n.B = Math.min(40, Math.max(-12, n.B + .75)) : n.position.y > e - 9 ? n.position.y = e : (n.B = -5,
            n.f /= 1.1,
            n.b /= 1.1);
        n.position.y === e && (n.B = 0,
            k && (n.B = -12));
        e = Math.cos(d / 250) * n.f / 10;
        d = Math.sin(d / 500) * n.f / 2 / 10;
        n.position.y -= n.B;
        x.rotation = n.rotation;
        x.rotation.x += e;
        x.rotation.y += d;
        x.position.x = n.position.x;
        x.position.y = n.position.y + 275;
        x.position.z = n.position.z;
        u.update();
        x.rotation.x -= e;
        x.rotation.y -= d
    }
    var e = document.getElementById("loading"),
        m = document.getElementById("viewport"),
        h = document.getElementById("instructions"),
        q = new S,
        r = !0,
        w;
    e.style.display = "none";
    "requestPointerLock" in document.body && (document.body.onclick = function() {
        this.requestPointerLock()
    });
    window.va && (debugUI.onchange = function() {
        t.T(u.A, !1);
        u.A.update(!0)
    });
    var u = new R(m),
        x = u.u,
        n = {
            position: d.create(-1E3, 500, -1050),
            rotation: d.create(0, 270, 0),
            f: 0,
            B: 0,
            b: 0
        };
    U(u.A);
    k = f = c = b = a = !1;
    q.ka("../map.png", function() {
        var a;
        h.className = "";
        m.className = "";
        r = !0;
        // Mouse move event
        document.addEventListener("mousemove", function(b) {
            !b.altKey && a && (b.movementX || b.movementY ? (n.rotation.y += b.movementX,
                    n.rotation.x -= b.movementY) : (n.rotation.x -= (b.pageY - a.y) / 2,
                    n.rotation.y += (b.pageX - a.x) / 2),
                n.rotation.x = Math.max(Math.min(n.rotation.x, 90), -90));
            a = {
                x: b.pageX,
                y: b.pageY
            }
        }, !1);
        // Shoot event
        document.addEventListener("click", function() {
            if (Date.now() - lastShot > 2000) {
                $("#explosion").show();
                $("#explosion").fadeOut();
                (new Audio('shot.mp3')).play();
                lastShot = Date.now();
            }
        });
        l()
    });
    document.addEventListener("keydown", p, !1);
    document.addEventListener("keyup", p, !1);
    g();
    window.addEventListener("resize", g);
    t.T(u.A);
    u.A.update(!0);
    var z = new Date
}