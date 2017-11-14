!
function() {
    function e() {
        var e = "CsD5z3NijK9maUv6".split("");
        this.d = function(t) {
            if (null == t || void 0 == t) return t;
            if (0 != t.length % 2) throw Error("1100");
            for (var i = [], n = 0; n < t.length; n++) {
                0 == n % 2 && i.push("%");
                for (var r = e,
                s = 0; s < r.length; s++) if (t.charAt(n) == r[s]) {
                    i.push(s.toString(16));
                    break
                }
            }
            return decodeURIComponent(i.join(""))
        }
    }
    var t = (new e).d,
    i = (new e).d,
    n = (new e).d,
    r = (new e).d,
    s = (new e).d; !
    function() {
        function e(e) {
            if (null == e) return null;
            for (var t = [], i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                t[i] = Y[16 * (r >>> 4 & 15) + (15 & r)]
            }
            return t
        }
        function a(e) {
            var t = [];
            if (null == e || void 0 == e || 0 == e.length) return c();
            if (64 <= e.length) {
                t = [];
                if (null != e && 0 != e.length) {
                    if (64 > e.length) throw Error(r("5s5C5C55"));
                    for (var i = 0; 64 > i; i++) t[i] = e[0 + i]
                }
                return t
            }
            for (i = 0; 64 > i; i++) t[i] = e[i % e.length];
            return t
        }
        function o(e) {
            var t = 4294967295;
            if (null != e) for (var i = 0; i < e.length; i++) t = t >>> 8 ^ Z[255 & (t ^ e[i])];
            e = f(4294967295 ^ t);
            t = e.length;
            if (null == e || 0 > t) e = new String(r(""));
            else {
                for (var i = [], n = 0; n < t; n++) i.push(l(e[n]));
                e = i.join(s(""))
            }
            return e
        }
        function _(e, a, o) {
            var _, c = [s("zv"), i("ii"), n("5i"), s("5z"), n("zm"), t("5N"), i("zi"), n("3D"), t("53"), t("3i"), n("z9"), t("iz"), i("5s"), n("3N"), n("39"), i("35"), t("55"), n("5j"), s("z6"), t("i3"), s("3z"), t("Na"), s("i5"), r("Ni"), n("zK"), i("Nm"), r("N3"), n("N5"), i("Dm"), i("zU"), n("zs"), i("5K"), r("NK"), r("Nv"), n("zD"), n("3a"), s("3s"), r("zz"), r("33"), i("iC"), n("z3"), t("is"), i("ND"), t("N9"), i("iK"), r("3C"), n("3j"), n("Nz"), t("Nj"), n("5D"), r("3K"), t("ij"), i("N6"), s("5C"), s("za"), n("iD"), i("D6"), i("Ns"), r("zj"), t("NU"), i("zN"), r("NN"), s("i9"), t("iN")],
            u = t("z5"),
            f = [];
            if (1 == o) o = e[a],
            _ = 0,
            f.push(c[o >>> 2 & 63]),
            f.push(c[(o << 4 & 48) + (_ >>> 4 & 15)]),
            f.push(u),
            f.push(u);
            else if (2 == o) o = e[a],
            _ = e[a + 1],
            e = 0,
            f.push(c[o >>> 2 & 63]),
            f.push(c[(o << 4 & 48) + (_ >>> 4 & 15)]),
            f.push(c[(_ << 2 & 60) + (e >>> 6 & 3)]),
            f.push(u);
            else if (3 == o) o = e[a],
            _ = e[a + 1],
            e = e[a + 2],
            f.push(c[o >>> 2 & 63]),
            f.push(c[(o << 4 & 48) + (_ >>> 4 & 15)]),
            f.push(c[(_ << 2 & 60) + (e >>> 6 & 3)]),
            f.push(c[63 & e]);
            else throw Error(r("5s5C5s5C"));
            return f.join(n(""))
        }
        function c() {
            for (var e = [], t = 0; 64 > t; t++) e[t] = 0;
            return e
        }
        function u(e, t, i, n) {
            if (null != e && 0 != e.length) {
                if (null == t) throw Error(s("5s5C5C5z"));
                if (e.length < n) throw Error(r("5s5C5C55"));
                for (var a = 0; a < n; a++) t[i + a] = e[0 + a]
            }
        }
        function f(e) {
            var t = [];
            t[0] = e >>> 24 & 255;
            t[1] = e >>> 16 & 255;
            t[2] = e >>> 8 & 255;
            t[3] = 255 & e;
            return t
        }
        function d(e) {
            if (null == e || void 0 == e) return e;
            e = encodeURIComponent(e);
            for (var t = [], s = e.length, a = 0; a < s; a++) if (e.charAt(a) == n("D3")) if (a + 2 < s) t.push(h(e.charAt(++a) + i("") + e.charAt(++a))[0]);
            else throw Error(r("5s5C5C5K"));
            else t.push(e.charCodeAt(a));
            return t
        }
        function h(e) {
            if (null == e || 0 == e.length) return [];
            e = new String(e);
            for (var t = [], i = e.length / 2, n = 0, r = 0; r < i; r++) {
                var s = parseInt(e.charAt(n++), 16) << 4,
                a = parseInt(e.charAt(n++), 16);
                t[r] = m(s + a)
            }
            return t
        }
        function l(e) {
            var t = [];
            t.push(W[e >>> 4 & 15]);
            t.push(W[15 & e]);
            return t.join(s(""))
        }
        function N(e, t) {
            if (null == e || null == t || e.length != t.length) return e;
            for (var i = [], n = 0, r = e.length; n < r; n++) i[n] = p(e[n], t[n]);
            return i
        }
        function p(e, t) {
            e = m(e);
            t = m(t);
            return m(e ^ t)
        }
        function v(e, t) {
            return m(e + t)
        }
        function m(e) {
            if ( - 128 > e) return m(128 - ( - 128 - e));
            if ( - 128 <= e && 127 >= e) return e;
            if (127 < e) return m( - 129 + e - 127);
            throw Error(i("5s5C5C5s"))
        }
        function g(e) {
            function a() {
                for (var e = [r("zsNDNsNzNKDCzU3zDCz5N6NvNzN3Nvi5N3NzDCzaNKNiNjiz"), r("zsNzN6NDN3DCzNNsNvNii5N6NvNiDC35izNz"), n("zsNzN6NDN3DCzjN3NDiDN3ii"), r("zsNzN6NDN3DCzUNKNvNiDC35izNz"), r("zsNiN3NvN5iKDCzNzD"), n("zsiDNsND"), n("zsiDNsNDNKN5DC3ziKiCN3i5N3izizNKNvNi"), s("zsiDNKNsNaDCzDNaNsN5Nm"), s("zDNsizNsNvNi"), i("zDNsi3NjNsi3i5DC5K55"), n("zDN3NaNaDCzU3z"), i("zDNKizi5iziDN3NsNUDC3NN3iDNsDC35N3iDNKNN"), i("zDN6NzN6NvNKDCzU3z"), t("zDN6N6NmNUNsNvDCz6NaNzDC35iziKNaN3"), r("zDiDNsNiNiNsNzN6N5NKN6"), r("zDiDN6NsNziiNsiK"), r("z5NsNaNKNDiDNK"), s("z5NsNaNKNNN6iDNvNKNsNvDCzNzD"), t("z5Nsi5izN3NaNaNsiD"), i("z5Nsi5i3NsNa"), n("z5N3NvizNsi3iD"), s("z5N3Nvizi3iDiKDCziN6izNjNKN5"), n("z5NjNsNaNmNzi3i5izN3iD"), r("z5N6NaN6NvNvNsDCzU3z"), r("z5N6iCiCN3iDiCNaNsizN3DCziN6izNjNKN5DCzaNKNiNjiz"), r("zzN3N9Ns3Ni3DCzaziz5DC35NsNvi5DCzUN6NvN6"), s("zzN3i5NzN3NUN6NvNs"), r("zzzNzmNsNKDU35zD"), t("zzN6izi3NU"), t("z3NvNiiDNsiNN3iDi5DCzU3z"), n("z3iDNsi5DCzDN6NaNzDCzK3zz5"), t("z3i3iDN6i5izNKNaN3"), n("zNNsNvNi35N6NvNi"), t("zNN6iDizN3"), i("zNiDNsNvNmNaNKNvDCziN6izNjNKN5DCzjN3NsiNiK"), i("zNiDN3NvN5NjDC35N5iDNKiCizDCzU3z"), t("ziNsNDiDNKN6NaNs"), s("ziNKNiNK"), t("ziNKi5NjNs"), i("ziN6i3NziKDCz6NaNzDC35iziKNaN3"), n("zii3NaNKNU"), n("zii3NvNi35N3N6"), s("zjNsN3izizN3Nvi5N5NjiiN3NKNaN3iD"), r("zjNsiDiDNKNvNiizN6Nv"), r("zjNKiDNsNiNKNvN6DC35NsNvi5DCzizD"), s("zKNUiCNsN5iz"), t("zKNvNNN6iDNUNsNaDC3DN6NUNsNv"), r("zmNsN5i5izz6NvN3"), n("zmNKNvN6DCzU3z"), s("zmN6i9i3NmNsDCziN6izNjNKN5DC3CiD5Nzv"), t("zaN6NjNKizDCzii3N9NsiDNsizNK"), r("zaN6NUNs"), r("zai3N5NKNzNsDCzDiDNKNiNjiz"), n("zai3N5NKNzNsDCzNNsij"), r("zUNsNiNvN3izN6"), i("zUNsNaNii3NvDCziN6izNjNKN5"), i("zUNsizi3iDNsDCzU3zDC35N5iDNKiCizDCz5NsiCNKizNsNai5"), t("zUN3NvNaN6"), s("zUNKNvNizaNK33DUz3ijizzD"), i("zUN6N6NazDN6iDNsNv"), r("zU35DC3CzUNKNvN5NjN6"), t("zU35DC3DN3NNN3iDN3NvN5N3DC35NsNvi5DC35N3iDNKNN"), i("zvN3iii5DCziN6izNjNKN5DCzU3z"), n("zvNKNsNiNsiDNsDC35N6NaNKNz"), t("zviKNsNaNs"), s("3CNsNaNsN5N3DC35N5iDNKiCizDCzU3z"), n("3CNsiCiKiDi3i5"), n("3CN3iDiCN3izi3Ns"), t("3CNaNsiKNDNKNaNa"), n("3CzUNKNvNizaNK33"), s("3DNsN5NjNsNvNs"), n("3DN6N5NmiiN3NaNa"), n("35NsiiNsi5NzN3N3"), i("35N5iDNKiCizDCzU3zDCzDN6NaNz"), i("35N3NiN6N3DC3CiDNKNviz"), n("35NjN6iiN5NsiDNzDCziN6izNjNKN5"), i("35NKNUzjN3NK"), t("35NvNsiCDCzK3zz5"), s("3zNaiiNizUN6NvN6"), r("3ziiDCz5N3NvDCzU3zDCz5N6NvNzN3Nvi5N3NzDCz3ijiziDNsDCzDN6NaNz"), t("33NDi3Nvizi3"), s("33NUiCi3i5Nj"), t("33NvNKiNN3iDi5"), n("33izN6iCNKNs"), s("3NNaNsNzNKNUNKiDDC35N5iDNKiCiz"), s("3iNKNzN3DCzaNsizNKNv"), n("vzmmm6v39vjm"), n("v3jUjvvNKNjivzmj9Uv39vjm"), r("v3jUjvvNKNjivzmmm6v39vjm"), r("v3jUjvvNKNjiv39vjmvzmUK5"), t("v3jUjvvNKNjiv3mU9Kvzm9Ks"), t("v3jUjvvNKNjivNKNmCvK9Uj6"), r("v3jUjvvNKNjivN93mivzmUK5"), i("v3jUjvvNKNjiviKC93vij6jC"), n("v3jUjvvNKNjivimmjNvKmmKs"), t("v3jUjvvNKNjivj9sjavN93mi"), r("v3jUjvvNKNjivKK9mNvzmK9N"), r("v39vjmvzmUK5"), s("v3mKmav3KajN"), r("v3mv9vvjmU96vKKmj3vKmmKs"), n("vNKNmCv39vjmvzmUK5"), t("vNKNmKvN9U95v39iK9vzmUK5"), n("vNKNmKvN9U95vjjjKDvzmUK5"), i("vN93mivzmUK5"), n("vKK9mNvzmK9N"), s("vKmmKsvzmUK5"), i("vNKNmCvimmjNvNKjjvvzmUK5"), r("vimmjNvNKjjvvzmUK5"), r("vN9CjivN93mivzmUK5"), i("vzmmm6v39vjm36zizD5D555s5D"), r("vN93mivzmUK536zizD5D555s5D"), i("v3mv9vvjmU96vN9U95vKmmKsvzmUK5"), s("v3jUjvvNKNjivKmmKsvzmUK5"), n("vzmjmUvKmmKsDC3CiDN6"), r("vzmjmUv39vjmDC3CiDN6"), t("vjjmmKvNKvKavzmjmUvzmj9UvKmmKs"), s("vjjmmKvNKvKavzmjmUvimmjNv39vjm")], a = [], _ = 0; _ < e.length; _++) try {
                    var c = e[_];
                    o()(c) && a.push(c)
                } catch(u) {
                    r("NNN6NvizDCNzN3izN3N5izDCN3iDiDN6iD")
                }
                return a.join(t("5m"))
            }
            function o() {
                function e(e) {
                    var t = {};
                    return u.style.fontFamily = e,
                    c.appendChild(u),
                    t.height = u.offsetHeight,
                    t.width = u.offsetWidth,
                    c.removeChild(u),
                    t
                }
                var r = [i("NUN6NvN6i5iCNsN5N3"), s("i5NsNvi5DUi5N3iDNKNN"), s("i5N3iDNKNN")],
                a = [],
                o = i("iiiiiiNUNUNUNUNUNUNUNUNUNUNaNaNK"),
                _ = t("5i5DiCij"),
                c = J.body,
                u = J.createElement(n("i5iCNsNv"));
                u.style.fontSize = _;
                u.style.visibility = s("NjNKNzNzN3Nv");
                u.innerHTML = o;
                for (o = 0; o < r.length; o++) a[o] = e(r[o]);
                return function(t) {
                    for (var i = 0; i < a.length; i++) {
                        var s = e(t + n("Da") + r[i]),
                        o = a[i];
                        if (s.height !== o.height || s.width !== o.width) return ! 0
                    }
                    return ! 1
                }
            }
            function _() {
                var e = null,
                s = null,
                a = [];
                try {
                    s = J.createElement(t("N5NsNviNNsi5")),
                    e = s[r("NiN3izz5N6NvizN3ijiz")](i("iiN3NDNiNa")) || s[i("NiN3izz5N6NvizN3ijiz")](n("N3ijiCN3iDNKNUN3NvizNsNaDUiiN3NDNiNa"))
                } catch(o) {}
                if (!e) return a;
                try {
                    a.push(e.getSupportedExtensions())
                } catch(_) {}
                try {
                    a.push(c(e, s))
                } catch(u) {}
                return a.join(t("5m"))
            }
            function c(e, t) {
                try {
                    var i = n("NsiziziDNKNDi3izN3DCiNN3N55DDCNsiziziD3NN3iDizN3ij5mDCiNNsiDiKNKNvNiDCiNN3N55DDCiNNsiDiKNKNv3zN3ijz5N6N6iDNzNKNvNsizN35mDCi3NvNKNNN6iDNUDCiNN3N55DDCi3NvNKNNN6iDNUz6NNNNi5N3iz5mDCiNN6NKNzDCNUNsNKNvDjDKDCimDCDCDCiNNsiDiKNKNv3zN3ijz5N6N6iDNzNKNvNsizN3DC5UDCNsiziziD3NN3iDizN3ijDCDmDCi3NvNKNNN6iDNUz6NNNNi5N3iz5mDCDCDCNiNa363CN6i5NKizNKN6NvDC5UDCiNN3N55zDjNsiziziD3NN3iDizN3ijDaDC5CDaDC5sDK5mDCiU"),
                    a = s("iCiDN3N5NKi5NKN6NvDCNUN3NzNKi3NUiCDCNNNaN6Nsiz5mDCiNNsiDiKNKNvNiDCiNN3N55DDCiNNsiDiKNKNv3zN3ijz5N6N6iDNzNKNvNsizN35mDCiNN6NKNzDCNUNsNKNvDjDKDCimDCDCDCNiNa36zNiDNsNiz5N6NaN6iDDC5UDCiNN3N55zDjiNNsiDiKNKNv3zN3ijz5N6N6iDNzNKNvNsizN3DaDC5CDaDC5sDK5mDCiU"),
                    o = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, o);
                    var _ = new Float32Array([ - .2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                    e.bufferData(e.ARRAY_BUFFER, _, e.STATIC_DRAW);
                    o.k = 3;
                    o.l = 3;
                    var c = e.createProgram(),
                    u = e.createShader(e.VERTEX_SHADER);
                    e.shaderSource(u, i);
                    e.compileShader(u);
                    var f = e.createShader(e.FRAGMENT_SHADER);
                    return e.shaderSource(f, a),
                    e.compileShader(f),
                    e.attachShader(c, u),
                    e.attachShader(c, f),
                    e.linkProgram(c),
                    e.useProgram(c),
                    c.n = e.getAttribLocation(c, r("NsiziziD3NN3iDizN3ij")),
                    c.m = e.getUniformLocation(c, r("i3NvNKNNN6iDNUz6NNNNi5N3iz")),
                    e.enableVertexAttribArray(c.o),
                    e.vertexAttribPointer(c.n, o.k, e.FLOAT, !1, 0, 0),
                    e.uniform2f(c.m, 1, 1),
                    e.drawArrays(e.TRIANGLE_STRIP, 0, o.l),
                    $(t[s("izN6zzNsizNs333Dza")]())
                } catch(d) {
                    return r("iiN3NDNiNaDCN3ijN5N3iCizNKN6Nv")
                }
            }
            function u() {
                var e = J.createElement(n("NzNKiN")),
                a = [],
                o = [s("zsN5izNKiNN3zDN6iDNzN3iD"), n("zsN5izNKiNN3z5NsiCizNKN6Nv"), i("zsiCiC3iN6iDNmi5iCNsN5N3"), t("zDNsN5NmNiiDN6i3NvNz"), i("zDi3izizN6NvzNNsN5N3"), i("zDi3izizN6NvzjNKNiNjNaNKNiNjiz"), t("zDi3izizN6Nv35NjNsNzN6ii"), i("zDi3izizN6Nv3zN3ijiz"), r("z5NsiCizNKN6Nv3zN3ijiz"), i("ziiDNsiK3zN3ijiz"), t("zjNKNiNjNaNKNiNjiz"), s("zjNKNiNjNaNKNiNjiz3zN3ijiz"), s("zKNvNsN5izNKiNN3zDN6iDNzN3iD"), t("zKNvNsN5izNKiNN3z5NsiCizNKN6Nv"), r("zKNvNsN5izNKiNN3z5NsiCizNKN6Nv3zN3ijiz"), s("zKNvNNN6zDNsN5NmNiiDN6i3NvNz"), s("zKNvNNN63zN3ijiz"), t("zUN3Nvi3"), t("zUN3Nvi33zN3ijiz"), i("35N5iDN6NaNaNDNsiD"), t("3zNjiDN3N3zzzzNsiDNm35NjNsNzN6ii"), s("3zNjiDN3N3zzzNNsN5N3"), n("3zNjiDN3N3zzzjNKNiNjNaNKNiNjiz"), i("3zNjiDN3N3zzzaNKNiNjiz35NjNsNzN6ii"), t("3zNjiDN3N3zz35NjNsNzN6ii"), s("3iNKNvNzN6ii"), n("3iNKNvNzN6iizNiDNsNUN3"), t("3iNKNvNzN6ii3zN3ijiz")];
                if (!window[n("NiN3izz5N6NUiCi3izN3Nz35iziKNaN3")]) return a.join(t(""));
                for (var _ = 0; _ < o.length; _++) try {
                    J.body.appendChild(e),
                    e.style.color = o[_],
                    a.push(o[_]),
                    a.push(window[r("NiN3izz5N6NUiCi3izN3Nz35iziKNaN3")](e).getPropertyValue(r("N5N6NaN6iD"))),
                    J.body.removeChild(e)
                } catch(c) {
                    a.push(s("NiN3izDCi5iKi5izN3NUDCN5N6NaN6iDi5DCN3ijN5N3iCizNKN6Nv"))
                }
                return a.join(r("59"))
            }
            function f() {
                try {
                    var e = J.createElement(r("N5NsNviNNsi5")),
                    a = e[s("NiN3izz5N6NvizN3ijiz")](i("5DNz")),
                    o = t("NUiiz5DCNvNmNDNsNNN9N6iDNzDCiCNji5NiNaiKDCN3ijiNizDCi9isNKi3DaDCvsmU9CDCiziCNji5izD659D6i3NjNDNiizNKN5DvNUN6D6NaN3iNiNNs");
                    a.textBaseline = t("izN6iC");
                    a.font = i("5i5CiCijDCDizsiDNKNsNaDi");
                    a.textBaseline = r("NsNaiCNjNsNDN3izNKN5");
                    a.fillStyle = r("D5NN5N5C");
                    a.fillRect(125, 1, 62, 20);
                    a.fillStyle = t("D55C5N5K");
                    a.fillText(o, 2, 15);
                    a.fillStyle = i("iDNiNDNsDj5s5C5DDaDC5D5C5zDaDC5CDaDC5CDv5iDK");
                    a.fillText(o, 4, 17);
                    return e[n("izN6zzNsizNs333Dza")]()
                } catch(_) {
                    return r("N5NsNviNNsi5DCNsiCNKDCN3ijN5N3iCizNKN6Nv")
                }
            }
            function d() {
                try {
                    return window[r("zsN5izNKiNN33jz6NDN9N3N5iz")] && C.h ? l() : h()
                } catch(e) {
                    return i("NiN3izDCiCNai3NiNKNvDCi5iziDNKNvNiDCN3ijN5N3iCizNKN6Nv")
                }
            }
            function h() {
                if (!Q[n("iCNai3NiNKNvi5")]) return i("");
                var e = [s("5zNiNsNUN3"), s("zsNzNDNaN6N5Nm3CNai3NiNKNv"), n("zsNzN6NDN3z3ijzUNsNvz5z5zzN3izN3N5iz"), t("zsNzN6NDN3z3ijzUNsNvzzN3izN3N5iz"), t("zsNaNsiiNsiDDCzv3Czs3CzKDCi3izNKNai5"), n("zsNaNKN3NzNKizDC3CNai3NiDUzKNv"), t("zsNaNKiCNsiKDC35N3N5i3iDNKiziKDCz5N6NviziDN6NaDC55"), s("zsNaNK3535z6zaN6NiNKNvDCiCNai3NiNKNv"), r("zsNUNsi9N6NvzU3C55zzN6iiNvNaN6NsNzN3iD3CNai3NiNKNv"), r("zsz6zaDCzUN3NzNKNsDC3CNaNsiKNDNsN5NmDC3CNai3NiNKNv"), r("zsiCiC33iC"), t("zsiDN5NjNKz5zszz"), r("zs3NziDC35NKizN335NsNNN3iziKDCiCNai3NiNKNv"), i("zDNsNDiKNaN6NvDC3zN6N6NazDNsiD"), r("zDNsizizNaN3NaN6NiDCziNsNUN3DCzaNsi3NvN5NjN3iD"), n("zDNKizz5N6NUN3izzsNiN3Nviz"), n("zDNKizNzN3NNN3NvNzN3iDDC3si3NKN5Nm35N5NsNv"), i("zDNai3N335izNsN5Nmi5DCzKNvi5izNsNaNaDCzzN3izN3N5izN6iD"), t("z5NsizNsNaNKNvNsziiDN6i3iCDC33iCNzNsizN3"), t("z5NKiziDNKijDCzKz5zsDCz5NaNKN3Nviz"), i("z5NKiziDNKijDCN6NvNaNKNvN3DCiCNai3NiDUNKNv"), s("z5NKiziDNKijDC3DN3N5N3NKiNN3iDDC3CNai3NiDUNKNv"), s("z5N6N6iiN6NvDC33iCNzNsizN3"), t("zzN3NsNa3CNaiKzaNKiNN3DC33iCNzNsizN3"), t("zzN3NNNsi3NaizDCzDiDN6iii5N3iDDCzjN3NaiCN3iD"), s("zzNKiN3jDCzDiDN6iii5N3iDDC3CNai3NiDUzKNv"), i("zzNKiN3jDC3CNai3i5DC3iN3NDDC3CNaNsiKN3iD"), r("zzNKiN3jDC3Nz6zzDCzjN3NaiCN3iDDC3CNai3NiDUNKNv"), i("NzN6i3NDNaN33ziiNKi5izDC3iN3NDDC3CNai3NiNKNv"), t("zzN6iiNvNaN6NsNzN3iDi5DCiCNai3NiNKNv"), i("NzN6iiNvNaN6NsNz33iCNzNsizN3iD"), n("N3zUi3i5NKN53CNai3NiNKNvDCzzzazU5N"), s("z335zvDCzaNsi3NvN5NjDCzUN6i9NKNaNaNsDC3CNai3NiNKNv"), i("z335zvDC35N6NvNsiDDCzs3CzK"), n("z3ijNKNNDCz3iNN3iDiKiiNjN3iDN3"), s("zNNsN5N3NDN6N6NmDC3CNai3NiNKNv"), s("zNNKNaN3DCzzN6iiNvNaN6NsNzN3iDDC3CNai3NiDUNKNv"), r("zNNKNaN3zaNsNDDCiCNai3NiNKNv"), i("zNNaiKz6iDzzNKN3DCziNsNUN3i5DC3CNai3NiNKNv"), t("zNN6NaijDC55DCzDiDN6iii5N3iDDC3CNai3NiNKNv"), t("zN3339z335NjNsiDN3"), s("zizzzaDCz6NDN9N3N5izDC3iN3NDDC3CNai3NiDUNKNvDC5s5NDv5C5C"), s("zizNzsz5z3DC3CNai3NiNKNv"), s("ziNKNvNiN3iD"), r("ziNvN6NUN3DC35NjN3NaNaDCzKNvizN3NiiDNsizNKN6Nv"), t("ziN6N6NiNaN3DCz3NsiDizNjDC3CNai3NiNKNv"), s("ziN6N6NiNaN3DCz3NsiDizNjDC3CNai3NiDUNKNv"), i("ziN6N6NiNaN3DCziN3NsiDi5DC5CDv53Dv5555Dv5C"), s("ziN6N6NiNaN3DC3zNsNaNmDCz3NNNNN3N5izi5DC3CNai3NiNKNv"), i("ziN6N6NiNaN3DC33iCNzNsizN3"), t("zjNsiDNUN6NviKDCzNNKiDN3NNN6ijDC3CNai3NiNKNv"), n("zjNsiDNUN6NviKDC3CNai3NiDUzKNv"), n("zjN3iDN6N3i5DCDNDCziN3NvN3iDNsNai5DCNaNKiNN3"), i("zj3CzzN3izN3N5iz"), i("zjizNUNa53DCNaN6N5NsizNKN6NvDCiCiDN6iNNKNzN3iD"), i("zKz3DC3zNsNDDCiCNai3NiNKNv"), i("NKziN3izizN3iD35N5iDNKiCizNsNDNaN33CNai3NiNKNv"), t("NKzUN3i5NjDCiCNai3NiNKNv"), i("zmNsi5iCN3iDi5NmiKDC3CNsi5i5iiN6iDNzDCzUNsNvNsNiN3iD"), r("zaNsi5iz3CNsi5i5"), t("zaN6NizUN3zKNvDC3CNai3NiNKNvDC5sDv5CDv5CDv5K5553"), s("zaN6NizUN3zKNvDC3CNai3NiNKNvDC5sDv5CDv5CDv5K5N5s"), i("zUNsDUz5N6NvNNNKNiDvN5N6NUDCiCNai3NiNKNv"), r("zUNKN5iDN6i5N6NNizDCz6NNNNNKN5N3DC5D5C5s55"), n("zUNKNvNKNDNsiD3CNai3NiNKNv"), i("zvNsizNKiNN3DCz5NaNKN3Nviz"), t("zvNKiziDN6DC3CzzzNDC3CNai3NiDUzKNv"), i("zvN6NmNKNsDC35i3NKizN3DCz3NvNsNDNaN3iDDC3CNai3NiNKNv"), r("zvN6iDizN6NvDCzKNzN3NvizNKiziKDC35NsNNN3"), t("NviCzs3CzKDC3CNai3NiNKNv"), i("zv3CzaNsi5iz3CNsi5i5"), t("zv3C3CNaNsiKN3iD35NjN3NaNa"), t("NviC3zN6NvNiNDi3zsNzNzNKNv"), t("zviKijzaNsi3NvN5NjN3iD"), n("z6N5izN6i5NjNsiCN3DC35iziDN3NsNUNKNvNiDC35N3iDiNNKN5N3i5"), r("z6NvNaNKNvN3DC35izN6iDNsNiN3DCiCNai3NiDUNKNv"), i("z6iDNDNKizDCzzN6iiNvNaN6NsNzN3iD"), r("3CNsNvNzN6DC3iN3NDDC3CNai3NiNKNv"), n("3CNsiDN6NUDv3z3NDCiCNaNsiKN3iDDCiCNai3NiNKNv"), s("3CzzzNDCNKNvizN3NiiDNsNzN6DCNzN6DC3iN3NDzmNKiz"), r("3CzzzNDU3jz5NjNsNvNiN3DC3NNKN3iiN3iD"), r("3CNjN6izN6z5N3NvizN3iD3CNai3NiNKNv5sDv5sDv5DDv5D"), s("3CNKN5Nsi5Ns"), i("3CNaNsiKz6NvDC3CNai3NiDUNKNv"), t("3s3s5D5C5s55DCzNNKiDN3NNN6ijDC3CNai3NiNKNv"), n("3s3szzN6iiNvNaN6NsNzDC3CNai3NiNKNv"), t("3s3szUNKNvNKzzzaDC3CNai3NiNKNv"), t("3s3szUi3i5NKN5"), r("3DN3NsNazzN6iiNvNaN6NsNzN3iDDC3CNai3NiNKNv"), n("3DN6NDNaN6ijDCzaNsi3NvN5NjN3iDDC3CNai3NiNKNv"), s("3DN6N5NmzUN3NaizDC33iCNzNsizN3"), t("35NsNNN3iDDC33iCNzNsizN3"), n("35NsNNN335N3NsiDN5Nj"), i("35N5iDNKiCizNKNvNiDvzzNKN5izNKN6NvNsiDiK"), n("35N3NNz5NaNKN3NvizDC3CNai3NiNKNv"), i("35NjN3NaNaDv33zKzjN3NaiCN3iD"), n("35NKNaiNN3iDNaNKNiNjizDC3CNai3NiDUzKNv"), i("35NKNUiCNaN3DC3CNsi5i5"), n("35NmiKiCN3DC3iN3NDDC3CNai3NiNKNv"), t("35i3NUNsiziDNs3CzzzNDCzDiDN6iii5N3iDDC3CNai3NiNKNv"), i("35iKNUNsNvizN3N5DC3CzmzKDCz5NaNKN3Nviz"), i("3zN3NvN5N3NvizDCzN3zzvDCiCNai3NiDUNKNv"), t("3zNji3NvNzN3iDDCzzNsiCz5iziDNaDCzv3Czs3CzKDC3CNai3NiNKNv"), t("3zN6iDN5NjzjN3NaiCN3iD"), s("33NvNKiziKDC3CNaNsiKN3iD"), r("33iCNaNsiKDC3Cz5"), r("3NzzN6iiNvNaN6NsNzN3iD"), r("3NN3N3izNaN3DC3z3NDCz5N6iDN3"), i("3Nzaz5DCzUi3NaizNKNUN3NzNKNsDC3CNai3NiNKNv"), r("3iN3NDDCz5N6NUiCN6NvN3Nvizi5"), i("3iN3NDzmNKizDUNKNvizN3NiiDNKN3iDizN3DC3CzzzN"), i("3iz3zD39z3zvDCzDiDN6iii5N3iDDCz3ijizN3Nvi5NKN6Nv"), n("3iN6NaNNiDNsNUDCzUNsizNjN3NUNsizNKN5Ns"), i("3iN6iDNzz5NsiCizi3iDN33j"), t("3i3CzKDCzzN3izN3N5izN6iDDC5sDv5z"), t("3KNsNvNzN3ijDCzUN3NzNKNsDC3CNai3NiNKNv"), t("3KNsNvNzN3ijDC3CzzzNDC3NNKN3iiN3iD"), s("3KN6i33zi3NDN3DC3CNai3NiDUNKNv"), n("i9NsNmN6")],
                a = [],
                o = {};
                a.push(v(Q[s("iCNai3NiNKNvi5")],
                function(e) {
                    o[e.name] = 1;
                    var n = v(e,
                    function(e) {
                        return [e.type, e.suffixes].join(i("iv"))
                    }).join(r("Da"));
                    return [e.name, e.description, n].join(t("5959"))
                },
                this).join(r("Dz")));
                a.push(v(e,
                function(e) {
                    if (o[e]) return s("");
                    e = Q[t("iCNai3NiNKNvi5")][e];
                    if (!e) return r("");
                    var i = v(e,
                    function(e) {
                        return [e.type, e.suffixes].join(t("iv"))
                    }).join(r("Da"));
                    return [e.name, e.description, i].join(n("5959"))
                },
                this).join(n("5m")));
                return a.join(s("5m"))
            }
            function l() {
                if (window[i("zsN5izNKiNN33jz6NDN9N3N5iz")]) {
                    var e = [i("zsN5iDN63CzzzNDv3CzzzN"), n("zsNzN6NzNDDv35iziDN3NsNU"), n("zsNiz5N6NviziDN6NaDvzsNiz5N6NviziDN6Na"), s("zzN3iNNsNa3N3D3jz5iziDNaDvzzN3iNNsNa3N3D3jz5iziDNaDv5s"), i("zUNsN5iDN6NUN3NzNKNszNNaNsi5Nj3CNsiCN3iDDvzUNsN5iDN6NUN3NzNKNszNNaNsi5Nj3CNsiCN3iD"), n("zUi5ijNUNa5DDvzzz6zUzzN6N5i3NUN3Nviz"), s("zUi5ijNUNa5DDv3jzUzazj3z3z3C"), t("3CzzzNDv3CNzNNz5iziDNa"), n("3si3NKN5Nm3zNKNUN3Dv3si3NKN5Nm3zNKNUN3"), n("3si3NKN5Nm3zNKNUN3z5NjN3N5Nmz6NDN9N3N5izDv3si3NKN5Nm3zNKNUN3z5NjN3N5NmDv5s"), n("iDNUN6N5ijDv3DN3NsNa3CNaNsiKN3iDDCzi5DDCz5N6NviziDN6Na"), n("iDNUN6N5ijDv3DN3NsNa3CNaNsiKN3iDDCzi5DDCz5N6NviziDN6NaDv5s"), t("3DN3NsNa3CNaNsiKN3iD"), r("3DN3NsNa3CNaNsiKN3iDDv3DN3NsNa3CNaNsiKN3iDDjizNUDKDCzsN5izNKiNN33jDCz5N6NviziDN6NaDCDj555DDUNDNKizDK"), s("3DN3NsNa3NNKNzN3N6Dv3DN3NsNa3NNKNzN3N6DjizNUDKDCzsN5izNKiNN33jDCz5N6NviziDN6NaDCDj555DDUNDNKizDK"), r("iDNUN6N5ijDv3DN3NsNa3CNaNsiKN3iDDCzi5DDCz5N6NviziDN6Na"), t("35N5iDNKiCizNKNvNiDvzzNKN5izNKN6NvNsiDiK"), r("35NjN3NaNaDv33zKzjN3NaiCN3iD"), s("35NjN6N5NmiiNsiNN3zNNaNsi5NjDv35NjN6N5NmiiNsiNN3zNNaNsi5Nj"), r("353iz5izNaDv353iz5izNa"), n("35NmiKiCN3DvzzN3izN3N5izNKN6Nv"), r("3zzzz5z5izNaDv3zzzz5z5izNa"), s("3izU3CNaNsiKN3iDDvz6z53j")];
                    return v(e,
                    function(e) {
                        try {
                            return new(window[n("zsN5izNKiNN33jz6NDN9N3N5iz")])(e),
                            e
                        } catch(t) {
                            return null
                        }
                    }).join(i("5m"))
                }
                return i("")
            }
            function N() {
                try {
                    return !! window[i("i5N3i5i5NKN6Nv35izN6iDNsNiN3")]
                } catch(e) {
                    return ! 0
                }
            }
            function p() {
                try {
                    return !! window[s("NaN6N5NsNa35izN6iDNsNiN3")]
                } catch(e) {
                    return ! 0
                }
            }
            function v(e, t, i) {
                var n = [];
                if (null == e) return n;
                if (b && e.map === b) return e.map(t, i);
                m(e,
                function(e, r, s) {
                    n[n.length] = t.call(i, e, r, s)
                });
                return n
            }
            function m(e, t) {
                if (null !== e) if (g && e.forEach === g) e.forEach(t, void 0);
                else if (e.length === +e.length) for (var i = 0,
                n = e.length; i < n && t.call(void 0, e[i], i, e) !== {}; i++);
                else for (i in e) if (e.hasOwnProperty(i) && t.call(void 0, e[i], i, e) === {}) break
            }
            var g = Array.prototype.forEach,
            b = Array.prototype.map,
            C = {
                e: $,
                j: !0,
                i: !0,
                h: !0,
                b: !0,
                a: !0
            };
            typeof e == s("NNi3NvN5izNKN6Nv") ? C.e = e: (null != e.b && void 0 != e.b && (C.b = e.b), null != e.a && void 0 != e.a && (C.a = e.a));
            this.get = function() {
                var e = [],
                o = [];
                if (X) {
                    e.push(N());
                    e.push(p());
                    e.push( !! window[n("NKNvNzN3ijN3NzzzzD")]);
                    J.body ? e.push(typeof J.body[i("NsNzNzzDN3NjNsiNNKN6iD")]) : e.push("undefined");
                    e.push(typeof window[r("N6iCN3NvzzNsizNsNDNsi5N3")]);
                    e.push(Q[r("N5iCi3z5NaNsi5i5")]);
                    e.push(Q[r("iCNaNsizNNN6iDNU")]);
                    var c;
                    if (c = C.i) try {
                        var h = J.createElement(s("N5NsNviNNsi5"));
                        c = !(!h[t("NiN3izz5N6NvizN3ijiz")] || !h[i("NiN3izz5N6NvizN3ijiz")](s("5DNz")))
                    } catch(l) {
                        c = !1
                    }
                    if (c) try {
                        e.push(f()),
                        C.b && e.push(_())
                    } catch(v) {
                        e.push(t("N5NsNviNNsi5DCN3ijN5N3iCizNKN6Nv"))
                    }
                    e.push(u());
                    C.a && o.push(a());
                    o.push(Q[r("i3i5N3iDzsNiN3Nviz")]);
                    o.push(Q[i("NaNsNvNii3NsNiN3")]);
                    o.push(window[s("i5N5iDN3N3Nv")][n("N5N6NaN6iDzzN3iCizNj")]);
                    C.j && (c = window[r("i5N5iDN3N3Nv")] ? [window[n("i5N5iDN3N3Nv")].height, window[t("i5N5iDN3N3Nv")].width] : [0, 0], typeof c !== t("i3NvNzN3NNNKNvN3Nz") && o.push(c.join(t("ij"))));
                    o.push((new Date)[i("NiN3iz3zNKNUN3i9N6NvN3z6NNNNi5N3iz")]());
                    o.push(Q[i("NzN6zvN6iz3ziDNsN5Nm")]);
                    o.push(d())
                }
                c = [];
                C.e ? (c.push(C.e(e.join(r("D5D5D5")))), c.push(C.e(o.join(t("D5D5D5"))))) : (c.push($(e.join(n("D5D5D5")))), c.push($(o.join(s("D5D5D5")))));
                return c
            }
        }
        function $(e) {
            var a, o, _, c, u;
            a = 3 & e.length;
            o = e.length - a;
            _ = 31;
            for (u = 0; u < o;) c = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24,
            ++u,
            c = 3432918353 * (65535 & c) + ((3432918353 * (c >>> 16) & 65535) << 16) & 4294967295,
            c = c << 15 | c >>> 17,
            c = 461845907 * (65535 & c) + ((461845907 * (c >>> 16) & 65535) << 16) & 4294967295,
            _ ^= c,
            _ = _ << 13 | _ >>> 19,
            _ = 5 * (65535 & _) + ((5 * (_ >>> 16) & 65535) << 16) & 4294967295,
            _ = (65535 & _) + 27492 + (((_ >>> 16) + 58964 & 65535) << 16);
            c = 0;
            switch (a) {
            case 3:
                c ^= (255 & e.charCodeAt(u + 2)) << 16;
            case 2:
                c ^= (255 & e.charCodeAt(u + 1)) << 8;
            case 1:
                c ^= 255 & e.charCodeAt(u),
                c = 3432918353 * (65535 & c) + ((3432918353 * (c >>> 16) & 65535) << 16) & 4294967295,
                c = c << 15 | c >>> 17,
                _ ^= 461845907 * (65535 & c) + ((461845907 * (c >>> 16) & 65535) << 16) & 4294967295
            }
            _ ^= e.length;
            _ ^= _ >>> 16;
            _ = 2246822507 * (65535 & _) + ((2246822507 * (_ >>> 16) & 65535) << 16) & 4294967295;
            _ ^= _ >>> 13;
            _ = 3266489909 * (65535 & _) + ((3266489909 * (_ >>> 16) & 65535) << 16) & 4294967295;
            e = (_ ^ _ >>> 16) >>> 0;
            a = [];
            a.push(e);
            try {
                var f, d = e + s("");
                for (_ = u = o = 0; _ < d.length; _++) try {
                    var h = parseInt(d.charAt(_) + i(""));
                    o = h || 0 === h ? o + h: o + 1;
                    u++
                } catch(l) {
                    o += 1,
                    u++
                }
                f = b(1 * o / (0 == u ? 1 : u));
                var N, p = Math.floor(f / Math.pow(10, 1)),
                v = e + s("");
                for (_ = u = o = h = d = 0; _ < v.length; _++) try {
                    var m = parseInt(v.charAt(_) + t(""));
                    m || 0 === m ? m < p ? (h++, d += m) : (u++, o += m) : (u++, o += p)
                } catch(g) {
                    u++,
                    o += p
                }
                u = 0 == u ? 1 : u;
                N = b(1 * o / u - 1 * d / (0 == h ? 1 : h));
                a.push(C(f, s("5C")));
                a.push(C(N, i("5C")))
            } catch($) {
                a = [],
                a.push(e),
                a.push(z(r("DU")).join(s(""))),
                a.push(z(t("DU")).join(n("")))
            }
            return a.join(s(""))
        }
        function b(e) {
            if (0 > e || 10 <= e) throw Error(r("5s5s5s5C"));
            var t = z(n("5C"));
            e = n("") + e;
            for (var i = 0,
            a = 0; i < t.length && a < e.length; a++) e.charAt(a) != r("Dv") && (t[i++] = e.charAt(a));
            return parseInt(t.join(s("")))
        }
        function C(e, t) {
            var n = i("") + e;
            if (2 < n.length) throw Error(r("5s5s5s5s"));
            if (2 == n.length) return n;
            for (var s = [], a = n.length; 2 > a; a++) s.push(t);
            s.push(n);
            return s.join(i(""))
        }
        function z(e) {
            for (var t = [], i = 0; 2 > i; i++) t.push(e);
            return t
        }
        function D(e) {
            return null == e || void 0 == e
        }
        function E(e, t, i) {
            this.f = e;
            this.c = t;
            this.g = D(i) ? !0 : i
        }
        function y(e) {
            if (D(e) || D(e.f) || D(e.c)) return ! 1;
            try {
                if (D(window[e.f])) return ! 1
            } catch(t) {
                return ! 1
            }
            return ! 0
        }
        function w(e, t) {
            if (D(e)) return i("");
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (!D(r) && r.f == t) return r
            }
        }
        function T() {
            var e;
            e: {
                if (!D(G)) for (e = 0; e < G.length; e++) {
                    var a = G[e];
                    if (a.g && !y(a)) {
                        e = a;
                        break e
                    }
                }
                e = null
            }
            var o;
            if (D(e)) {
                try {
                    o = 1.01 === window.parseFloat(s("5sDv5C5s")) && window.isNaN(window.parseFloat(r("zjz3zazaz6")))
                } catch(_) {
                    o = !1
                }
                if (o) {
                    var c;
                    try {
                        c = 123 === window.parseInt(i("5s5D55")) && window.isNaN(window.parseInt(r("zjz3zazaz6")))
                    } catch(u) {
                        c = !1
                    }
                    if (c) {
                        var f;
                        try {
                            f = window.decodeURI(s("D35D5D")) === s("DD")
                        } catch(d) {
                            f = !1
                        }
                        if (f) {
                            var h;
                            try {
                                h = window.decodeURIComponent(r("D35D5N")) === i("DN")
                            } catch(l) {
                                h = !1
                            }
                            if (h) {
                                var N;
                                try {
                                    N = window.encodeURI(r("DD")) === s("D35D5D")
                                } catch(p) {
                                    N = !1
                                }
                                if (N) {
                                    var v;
                                    try {
                                        v = window.encodeURIComponent(r("DN")) === t("D35D5N")
                                    } catch(m) {
                                        v = !1
                                    }
                                    if (v) {
                                        var g;
                                        try {
                                            g = window.escape(s("DN")) === i("D35D5N")
                                        } catch($) {
                                            g = !1
                                        }
                                        if (g) {
                                            var b;
                                            try {
                                                b = window.unescape(i("D35D5N")) === r("DN")
                                            } catch(C) {
                                                b = !1
                                            }
                                            if (b) {
                                                var z;
                                                try {
                                                    z = 123 === window.eval(t("DjNNi3NvN5izNKN6NvDjDKimiDN3izi3iDNvDC5s5D555miUDKDjDK5m"))
                                                } catch(E) {
                                                    z = !1
                                                }
                                                o = z ? null: w(G, s("N3iNNsNa"))
                                            } else o = w(G, i("i3NvN3i5N5NsiCN3"))
                                        } else o = w(G, s("N3i5N5NsiCN3"))
                                    } else o = w(G, s("N3NvN5N6NzN3333DzKz5N6NUiCN6NvN3Nviz"))
                                } else o = w(G, n("N3NvN5N6NzN3333DzK"))
                            } else o = w(G, s("NzN3N5N6NzN3333DzKz5N6NUiCN6NvN3Nviz"))
                        } else o = w(G, i("NzN3N5N6NzN3333DzK"))
                    } else o = w(G, n("iCNsiDi5N3zKNviz"))
                } else o = w(G, t("iCNsiDi5N3zNNaN6Nsiz"))
            } else o = e;
            return o
        }
        function S() {
            var e = T();
            if (!D(e)) return e.c;
            try {
                e = D(window[s("iCNjNsNvizN6NU")]) || D(window[s("iCNjNsNvizN6NU")][n("NKNvN9N3N5izz9i5")]) ? null: w(G, r("iCNjNsNvizN6NUDvNKNvN9N3N5izz9i5"))
            } catch(t) {
                e = null
            }
            if (!D(e)) return e.c;
            try {
                e = D(context) || D(context[n("NjNsi5Njz5N6NzN3")]) ? null: w(G, i("N5N6NvizN3ijizDvNjNsi5Njz5N6NzN3"))
            } catch(a) {
                e = null
            }
            return D(e) ? null: e.c
        }
        function x() {
            for (var e = [], t = 0; 3 > t; t++) {
                var i = Math.random() * se,
                i = Math.floor(i);
                e.push(re.charAt(i))
            }
            return e.join(n(""))
        }
        function k(e) {
            for (var i = (J[t("N5N6N6NmNKN3")] || r("")).split(t("5mDC")), n = 0; n < i.length; n++) {
                var s = i[n].indexOf(r("5U"));
                if (0 <= s) {
                    var a = i[n].substring(s + 1, i[n].length);
                    if (i[n].substring(0, s) == e) return window.decodeURIComponent(a)
                }
            }
            return null
        }
        function I(e) {
            var a = [n("iN"), t("NNiC"), n("i3"), n("Nj"), t("N3N5"), s("N3NU"), n("NKN5iC")],
            o = n("");
            if (null == e || void 0 == e) return e;
            if (typeof e == [t("N6ND"), r("N9N3"), r("N5iz")].join(i(""))) {
                for (var o = o + t("im"), _ = 0; _ < a.length; _++) if (e.hasOwnProperty(a[_])) {
                    var c = i("Di") + a[_] + s("Di59Di"),
                    u;
                    u = t("") + e[a[_]];
                    u = null == u || void 0 == u ? u: u.replace(/'/g, n("3aDi")).replace(/"/g, t("DD"));
                    o += c + u + r("DiDa")
                }
                o.charAt(o.length - 1) == i("Da") && (o = o.substring(0, o.length - 1));
                return o += n("iU")
            }
            return null
        }
        function K(e, s, a, o) {
            var _ = [];
            _.push(e + t("5U") + encodeURIComponent(s));
            a && (e = new Date, e = new Date(o), o = e[n("izN6zizU3z35iziDNKNvNi")](), _.push(i("5mDC")), _.push(t("N3ij")), _.push(t("iCNK")), _.push(i("iDN3")), _.push(n("i55U")), _.push(o));
            _.push(i("5mDC"));
            _.push(r("iCNs"));
            _.push(t("izNj5UD6"));
            null != ue && void 0 != ue && ue != t("") && (_.push(r("5mDC")), _.push(n("NzN6")), _.push(r("NUNsNK")), _.push(t("Nv5U")), _.push(ue));
            J[r("N5N6N6NmNKN3")] = _.join(t(""))
        }
        function L(e) {
            window[fe] = e
        }
        function j(e) {
            window[de] = e
        }
        function M(e) {
            for (var t = [], n = 0; 10 > n; n++) t.push(e);
            return t.join(i(""))
        }
        function O(e, t) {
            var n = k(e);
            null !== n && void 0 !== n && n !== i("") || K(e, t, !1)
        }
        function B() {
            var e = k(ie);
            if (null == e || void 0 == e || e == s("")) e = window[de];
            return e
        }
        function U() {
            var e = B();
            if (null == e || void 0 == e || e == t("")) return ! 1;
            try {
                return (e = parseInt(e)) && e >= ne ? !0 : !1
            } catch(i) {
                return ! 1
            }
        }
        function A(e) {
            if (null == e || void 0 == e || e == r("")) return null;
            e = e.split(n("59"));
            return 2 > e.length || !/[0-9]+/gi.test(e[1]) ? null: parseInt(e[1])
        }
        function R() {
            var e = k(te);
            if (null == e || void 0 == e || e == n("")) e = window[fe];
            return e
        }
        function P() {
            var e = R();
            if (null == e || void 0 == e || e == t("")) return 0;
            e = A(e);
            return null == e ? 0 : e - (ae - oe) - (new(window[t("zzNsizN3")]))[n("NiN3iz3zNKNUN3")]()
        }
        function q(e, i) {
            var a = new(window[r("zzNsizN3")]);
            a[r("i5N3iz3zNKNUN3")](a[s("NiN3iz3zNKNUN3")]() - 1e4);
            null == i || void 0 == i || i == r("") ? window[r("NzN6N5i3NUN3Nviz")][n("N5N6N6NmNKN3")] = e + r("5UNvi3NaNa5mDCiCNsizNj5UD65mDCN3ijiCNKiDN3i55U") + a[t("izN6zizU3z35iziDNKNvNi")]() : window[r("NzN6N5i3NUN3Nviz")][s("N5N6N6NmNKN3")] = e + r("5UNvi3NaNa5mDCiCNsizNj5UD65mDCNzN6NUNsNKNv5U") + i + n("5mDCN3ijiCNKiDN3i55U") + a[t("izN6zizU3z35iziDNKNvNi")]()
        }
        function F() {
            if (! (null == le || void 0 == le || 0 >= le.length)) for (var e = 0; e < le.length; e++) {
                var i = le[e]; (null != ue && void 0 != ue && ue != t("") || null != i && void 0 != i && i != t("")) && ue != i && (q(te, i), q(ie, i))
            }
        }
        function H() {
            F();
            window[de] = null;
            window[fe] = null;
            var h = !0,
            l = {
                v: t("iN5sDv5s")
            },
            $ = S();
            $ && (l[n("NKN5iC")] = $);
            $ = null;
            l[r("Nj")] = V;
            var b = (new(window[s("zzNsizN3")]))[i("NiN3iz3zNKNUN3")]() + ae,
            C = b + 15768e7;
            l[n("i3")] = x() + b + x();
            try {
                var z = new g({
                    b: ce,
                    a: _e
                }).get();
                null != z && void 0 != z && 0 < z.length ? l[i("NNiC")] = z.join(t("Da")) : (l[s("NNiC")] = M(i("5C")), l[s("N3N5")] = t("5s"), h = !1)
            } catch(D) {
                l[i("NNiC")] = M(s("5C")),
                l[n("N3N5")] = t("5s"),
                h = !1
            }
            try {
                var E = $ = I(l),
                l = ee;
                if (null == l || void 0 == l) throw Error(n("5s5C5C5j"));
                if (null == E || void 0 == E) E = r("");
                var z = E,
                y;
                y = null == E ? o([]) : o(d(E));
                var w = d(z + y),
                T = d(l);
                null == w && (w = []);
                y = [];
                for (l = 0; 4 > l; l++) {
                    var k = 256 * Math.random(),
                    k = Math.floor(k);
                    y[l] = m(k)
                }
                var T = a(T),
                T = N(T, a(y)),
                k = T = a(T),
                B;
                if (null == w || void 0 == w || 0 == w.length) B = c();
                else {
                    var U = w.length,
                    l = 0,
                    l = 60 >= U % 64 ? 64 - U % 64 - 4 : 128 - U % 64 - 4,
                    z = [];
                    u(w, z, 0, U);
                    for (w = 0; w < l; w++) z[U + w] = 0;
                    u(f(U), z, U + l, 4);
                    B = z
                }
                U = B;
                if (null == U || 0 != U.length % 64) throw Error(t("5s5C5C53"));
                B = [];
                for (var w = 0,
                A = U.length / 64,
                l = 0; l < A; l++) for (B[l] = [], z = 0; 64 > z; z++) B[l][z] = U[w++];
                A = [];
                u(y, A, 0, 4);
                for (var R = B.length,
                U = 0; U < R; U++) {
                    var P, q;
                    var G = B[U];
                    if (null == G) q = null;
                    else {
                        var X = m( - 10);
                        y = [];
                        for (var J = G.length,
                        w = 0; w < J; w++) y.push(v(G[w], X++));
                        q = y
                    }
                    y = q;
                    if (null == y) P = null;
                    else {
                        for (var Q = m(11), w = [], W = y.length, l = 0; l < W; l++) w.push(p(y[l], Q--));
                        P = w
                    }
                    var Z = N(P, T),
                    Y;
                    y = Z;
                    w = k;
                    if (null == y) Y = null;
                    else if (null == w) Y = y;
                    else {
                        for (var l = [], re = w.length, z = 0, se = y.length; z < se; z++) l[z] = m(y[z] + w[z % re]);
                        Y = l
                    }
                    var Z = N(Y, k),
                    ue = e(Z),
                    ue = e(ue);
                    u(ue, A, 64 * U + 4, 64);
                    k = ue
                }
                var he;
                if (null == A || void 0 == A) he = null;
                else if (0 == A.length) he = s("");
                else try {
                    R = [];
                    for (P = 0; P < A.length;) if (P + 3 <= A.length) R.push(_(A, P, 3)),
                    P += 3;
                    else {
                        R.push(_(A, P, A.length - P));
                        break
                    }
                    he = R.join(n(""))
                } catch(le) {
                    throw Error(n("5s5C5s5C"))
                }
                $ = he
            } catch(Ne) {
                $ = I({
                    ec: n("5D"),
                    em: Ne.message
                }),
                h = !1
            }
            $ = $ + r("59") + b;
            K(te, $, h, C);
            O(te, $);
            L($);
            K(ie, ne, h, C);
            O(ie, ne);
            j(ne);
            window[s("i5N3iz3zNKNUN3N6i3iz")] && window[i("i5N3iz3zNKNUN3N6i3iz")](H, oe)
        }
        E.prototype = {
            toString: function() {
                return n("imDiNvNsNUN3Di59") + this.f + i("DaDCDiN5N6NzN3Di59") + this.c + i("DaDCDiNDiDN6iii5N3iD3CiDN6iCDi59") + this.g + s("iU")
            }
        };
        var G = [new E(s("iiNKNvNzN6ii"), s("5C5C5C5C")), new E(n("NzN6N5i3NUN3Nviz"), i("5C5C5C5s")), new E(i("NvNsiNNKNiNsizN6iD"), r("5C5C5C5D")), new E(n("NaN6N5NsizNKN6Nv"), t("5C5C5C55")), new E(n("NjNKi5izN6iDiK"), i("5C5C5C5z")), new E(i("i5N5iDN3N3Nv"), t("5C5C5C5i")), new E(i("iCNsiDN3Nviz"), s("5C5C5C5j")), new E(s("izN6iC"), r("5C5C5C5K")), new E(i("i5N3NaNN"), s("5C5C5s5C")), new E(t("iCNsiDi5N3zNNaN6Nsiz"), t("5C5s5C5C")), new E(t("iCNsiDi5N3zKNviz"), r("5C5s5C5s")), new E(t("NzN3N5N6NzN3333DzK"), n("5C5s5C5D")), new E(n("NzN3N5N6NzN3333DzKz5N6NUiCN6NvN3Nviz"), r("5C5s5C55")), new E(t("N3NvN5N6NzN3333DzK"), n("5C5s5C5z")), new E(i("N3NvN5N6NzN3333DzKz5N6NUiCN6NvN3Nviz"), n("5C5s5C53")), new E(r("N3i5N5NsiCN3"), n("5C5s5C5N")), new E(i("i3NvN3i5N5NsiCN3"), s("5C5s5C5i")), new E(i("N3iNNsNa"), n("5C5s5C5j")), new E(n("36iCNjNsNvizN6NU"), i("5C5D5C5C"), (!1)), new E(t("N5NsNaNa3CNjNsNvizN6NU"), n("5C5D5C5s"), (!1)), new E(r("iCNjNsNvizN6NU"), i("5C5D5C5D"), (!1)), new E(n("iCNjNsNvizN6NUDvNKNvN9N3N5izz9i5"), t("5C5D5C55"), (!1)), new E(r("N5N6NvizN3ijizDvNjNsi5Njz5N6NzN3"), i("5C5D5s5s"), (!1))],
        X = T() ? !1 : !0,
        V = window && window[s("NaN6N5NsizNKN6Nv")] && window[n("NaN6N5NsizNKN6Nv")].host || s("NvN6iz36N3ijNKi5iz36NjN6i5iz"),
        J = window[n("NzN6N5i3NUN3Nviz")],
        Q = window[n("NvNsiNNKNiNsizN6iD")],
        W = [r("5C"), t("5s"), r("5D"), t("55"), t("5z"), n("53"), s("5N"), i("5i"), s("5j"), i("5K"), i("Ns"), n("ND"), r("N5"), t("Nz"), s("N3"), t("NN")],
        Z = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
        Y = [45, -10, 81, 2, 0, 90, -24, 96, 119, -51, -104, 19, 102, 74, -8, 94, -22, -99, -17, -89, -126, -31, -40, 1, -107, -68, -32, 116, 15, -13, -95, 126, -34, 107, -47, 11, 88, -28, -74, -57, -81, 122, 123, 120, 56, 76, -82, -85, -54, -76, -5, 50, -44, -16, 99, 53, 36, -83, 23, -101, -7, 113, 115, -78, -120, 92, -50, 111, -2, 114, -121, 47, -20, 38, -38, -60, -124, -56, -55, 25, 84, 70, -52, -62, 106, -14, 14, -46, 77, 86, 10, 93, 7, -98, 34, -84, -33, -64, 32, 110, -41, -53, -45, 60, -25, -49, -48, -37, 78, -127, -122, -118, 63, 127, -69, 40, -35, -113, 100, 58, -30, 55, -70, -116, -86, 24, 4, 39, 33, 18, 83, -94, 54, -71, 44, -73, -108, 12, 79, -105, 57, 20, 67, 21, -111, -102, 43, 91, 62, -63, 13, 30, -23, -6, -87, -91, 5, 66, -90, -42, -77, 3, -115, -58, 26, 69, -97, -106, 82, -93, -61, -12, 49, -72, -123, 108, -79, -43, 121, 73, -88, -75, 42, 6, -9, -19, -11, -27, -67, 101, 80, -112, 87, 103, -125, -4, -26, 51, 104, 16, 64, 98, 125, -92, -65, 52, -117, 72, -66, 8, -36, -59, 35, -3, 17, 118, -96, 29, 117, 65, 48, 109, -39, 112, -110, 41, -119, 105, 89, -109, 97, 71, 61, -21, -29, -1, 31, -15, 37, -80, 85, -18, 59, -103, -128, 28, 95, -114, 22, 9, -100, 46, 124, 68, 75, 27],
        ee = i("5s5z5i555zNN5N5CN55N535CND5s5zN5N5z5NDzD5z5N555jNDNNzzz55Czs5z55z5zzNz5j5z5CN3zNzs5z5DzzNsNs"),
        te = s("z935z33535zKz6zvzKzzDU3i3K3z3j39zzza"),
        ie = n("36NKNjiziji9NzNKNaijNaNz3C5j36"),
        ne = 30,
        re = t("Ns39ND3K5CN53jNz3i5sN33NNN5D33Ni553zNj5z35NK3D53N93sNm5N3CNaz65iNUzvNv5jzUN6za5KiCzmisz9iDzKi5zjizzii3zNiNz3iizzijz5iKzDi9zs"),
        se = re.length,
        ae = 6e5,
        oe = 54e4,
        _e = !1,
        ce = !0,
        ue = t(""),
        fe = te.replace(/[^a-zA-Z0-9$]/g, n("")).toLowerCase(),
        de = ie.replace(/[^a-zA-Z0-9$]/g, s("")).toLowerCase(),
        he = window && window[s("NaN6N5NsizNKN6Nv")] && window[s("NaN6N5NsizNKN6Nv")][t("NjN6i5izNvNsNUN3")] || n("NvN6iz36N3ijNKi5iz36NjN6i5izNvNsNUN3"),
        le = function(e) {
            var i = [];
            if (!e) return i;
            e = e.split(r("Dv"));
            for (var n = t(""), a = 0; a < e.length; a++) a < e.length - 1 && (n = s("Dv") + e[e.length - 1 - a] + n, i.push(n));
            return i
        } (he);
        le.push(null);
        le.push(s("Dv") + he);
        1 <
        function(e) {
            for (var t = 0,
            a = (J[r("N5N6N6NmNKN3")] || i("")).split(s("5mDC")), o = 0; o < a.length; o++) {
                var _ = a[o].indexOf(n("5U"));
                0 <= _ && a[o].substring(0, _) == e && (t += 1)
            }
            return t
        } (te) && F(); !
        function() {
            var e = R();
            if (null == e || void 0 == e || e == r("")) e = !1;
            else {
                var t;
                if (t = U()) e = A(e),
                t = !(null == e || e - (new(window[r("zzNsizN3")]))[n("NiN3iz3zNKNUN3")]() <= ae - oe);
                e = t
            }
            return e
        } () ? H() : (L(R()), j(B()), he = P(), window[s("i5N3iz3zNKNUN3N6i3iz")] && window[t("i5N3iz3zNKNUN3N6i3iz")](H, he))
    } ()
} ();
var dbits;
var canary = 0xdeadbeefcafe;
var j_lm = 15715070 == (16777215 & canary);
function BigInteger(e, t, i) {
    if (null != e) if ("number" == typeof e) this.fromNumber(e, t, i);
    else if (null == t && "string" != typeof e) this.fromString(e, 256);
    else this.fromString(e, t)
}
function nbi() {
    return new BigInteger(null)
}
function am1(e, t, i, n, r, s) {
    for (; --s >= 0;) {
        var a = t * this[e++] + i[n] + r;
        r = Math.floor(a / 67108864);
        i[n++] = 67108863 & a
    }
    return r
}
function am2(e, t, i, n, r, s) {
    var a = 32767 & t,
    o = t >> 15;
    for (; --s >= 0;) {
        var _ = 32767 & this[e];
        var c = this[e++] >> 15;
        var u = o * _ + c * a;
        _ = a * _ + ((32767 & u) << 15) + i[n] + (1073741823 & r);
        r = (_ >>> 30) + (u >>> 15) + o * c + (r >>> 30);
        i[n++] = 1073741823 & _
    }
    return r
}
function am3(e, t, i, n, r, s) {
    var a = 16383 & t,
    o = t >> 14;
    for (; --s >= 0;) {
        var _ = 16383 & this[e];
        var c = this[e++] >> 14;
        var u = o * _ + c * a;
        _ = a * _ + ((16383 & u) << 14) + i[n] + r;
        r = (_ >> 28) + (u >> 14) + o * c;
        i[n++] = 268435455 & _
    }
    return r
}
if (j_lm && "Microsoft Internet Explorer" == navigator.appName) {
    BigInteger.prototype.am = am2;
    dbits = 30
} else if (j_lm && "Netscape" != navigator.appName) {
    BigInteger.prototype.am = am1;
    dbits = 26
} else {
    BigInteger.prototype.am = am3;
    dbits = 28
}
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
var BI_RC = new Array;
var rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
function int2char(e) {
    return BI_RM.charAt(e)
}
function intAt(e, t) {
    var i = BI_RC[e.charCodeAt(t)];
    return null == i ? -1 : i
}
function bnpCopyTo(e) {
    for (var t = this.t - 1; t >= 0; --t) e[t] = this[t];
    e.t = this.t;
    e.s = this.s
}
function bnpFromInt(e) {
    this.t = 1;
    this.s = e < 0 ? -1 : 0;
    if (e > 0) this[0] = e;
    else if (e < -1) this[0] = e + DV;
    else this.t = 0
}
function nbv(e) {
    var t = nbi();
    t.fromInt(e);
    return t
}
function bnpFromString(e, t) {
    var i;
    if (16 == t) i = 4;
    else if (8 == t) i = 3;
    else if (256 == t) i = 8;
    else if (2 == t) i = 1;
    else if (32 == t) i = 5;
    else if (4 == t) i = 2;
    else {
        this.fromRadix(e, t);
        return
    }
    this.t = 0;
    this.s = 0;
    var n = e.length,
    r = !1,
    s = 0;
    for (; --n >= 0;) {
        var a = 8 == i ? 255 & e[n] : intAt(e, n);
        if (! (a < 0)) {
            r = !1;
            if (0 == s) this[this.t++] = a;
            else if (s + i > this.DB) {
                this[this.t - 1] |= (a & (1 << this.DB - s) - 1) << s;
                this[this.t++] = a >> this.DB - s
            } else this[this.t - 1] |= a << s;
            s += i;
            if (s >= this.DB) s -= this.DB
        } else if ("-" == e.charAt(n)) r = !0
    }
    if (8 == i && 0 != (128 & e[0])) {
        this.s = -1;
        if (s > 0) this[this.t - 1] |= (1 << this.DB - s) - 1 << s
    }
    this.clamp();
    if (r) BigInteger.ZERO.subTo(this, this)
}
function bnpClamp() {
    var e = this.s & this.DM;
    for (; this.t > 0 && this[this.t - 1] == e;)--this.t
}
function bnToString(e) {
    if (this.s < 0) return "-" + this.negate().toString(e);
    var t;
    if (16 == e) t = 4;
    else if (8 == e) t = 3;
    else if (2 == e) t = 1;
    else if (32 == e) t = 5;
    else if (4 == e) t = 2;
    else return this.toRadix(e);
    var i = (1 << t) - 1,
    n,
    r = !1,
    s = "",
    a = this.t;
    var o = this.DB - a * this.DB % t;
    if (a-->0) {
        if (o < this.DB && (n = this[a] >> o) > 0) {
            r = !0;
            s = int2char(n)
        }
        for (; a >= 0;) {
            if (o < t) {
                n = (this[a] & (1 << o) - 1) << t - o;
                n |= this[--a] >> (o += this.DB - t)
            } else {
                n = this[a] >> (o -= t) & i;
                if (o <= 0) {
                    o += this.DB; --a
                }
            }
            if (n > 0) r = !0;
            if (r) s += int2char(n)
        }
    }
    return r ? s: "0"
}
function bnNegate() {
    var e = nbi();
    BigInteger.ZERO.subTo(this, e);
    return e
}
function bnAbs() {
    return this.s < 0 ? this.negate() : this
}
function bnCompareTo(e) {
    var t = this.s - e.s;
    if (0 != t) return t;
    var i = this.t;
    t = i - e.t;
    if (0 != t) return this.s < 0 ? -t: t;
    for (; --i >= 0;) if (0 != (t = this[i] - e[i])) return t;
    return 0
}
function nbits(e) {
    var t = 1,
    i;
    if (0 != (i = e >>> 16)) {
        e = i;
        t += 16
    }
    if (0 != (i = e >> 8)) {
        e = i;
        t += 8
    }
    if (0 != (i = e >> 4)) {
        e = i;
        t += 4
    }
    if (0 != (i = e >> 2)) {
        e = i;
        t += 2
    }
    if (0 != (i = e >> 1)) {
        e = i;
        t += 1
    }
    return t
}
function bnBitLength() {
    if (this.t <= 0) return 0;
    else return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
}
function bnpDLShiftTo(e, t) {
    var i;
    for (i = this.t - 1; i >= 0; --i) t[i + e] = this[i];
    for (i = e - 1; i >= 0; --i) t[i] = 0;
    t.t = this.t + e;
    t.s = this.s
}
function bnpDRShiftTo(e, t) {
    for (var i = e; i < this.t; ++i) t[i - e] = this[i];
    t.t = Math.max(this.t - e, 0);
    t.s = this.s
}
function bnpLShiftTo(e, t) {
    var i = e % this.DB;
    var n = this.DB - i;
    var r = (1 << n) - 1;
    var s = Math.floor(e / this.DB),
    a = this.s << i & this.DM,
    o;
    for (o = this.t - 1; o >= 0; --o) {
        t[o + s + 1] = this[o] >> n | a;
        a = (this[o] & r) << i
    }
    for (o = s - 1; o >= 0; --o) t[o] = 0;
    t[s] = a;
    t.t = this.t + s + 1;
    t.s = this.s;
    t.clamp()
}
function bnpRShiftTo(e, t) {
    t.s = this.s;
    var i = Math.floor(e / this.DB);
    if (! (i >= this.t)) {
        var n = e % this.DB;
        var r = this.DB - n;
        var s = (1 << n) - 1;
        t[0] = this[i] >> n;
        for (var a = i + 1; a < this.t; ++a) {
            t[a - i - 1] |= (this[a] & s) << r;
            t[a - i] = this[a] >> n
        }
        if (n > 0) t[this.t - i - 1] |= (this.s & s) << r;
        t.t = this.t - i;
        t.clamp()
    } else t.t = 0
}
function bnpSubTo(e, t) {
    var i = 0,
    n = 0,
    r = Math.min(e.t, this.t);
    for (; i < r;) {
        n += this[i] - e[i];
        t[i++] = n & this.DM;
        n >>= this.DB
    }
    if (e.t < this.t) {
        n -= e.s;
        for (; i < this.t;) {
            n += this[i];
            t[i++] = n & this.DM;
            n >>= this.DB
        }
        n += this.s
    } else {
        n += this.s;
        for (; i < e.t;) {
            n -= e[i];
            t[i++] = n & this.DM;
            n >>= this.DB
        }
        n -= e.s
    }
    t.s = n < 0 ? -1 : 0;
    if (n < -1) t[i++] = this.DV + n;
    else if (n > 0) t[i++] = n;
    t.t = i;
    t.clamp()
}
function bnpMultiplyTo(e, t) {
    var i = this.abs(),
    n = e.abs();
    var r = i.t;
    t.t = r + n.t;
    for (; --r >= 0;) t[r] = 0;
    for (r = 0; r < n.t; ++r) t[r + i.t] = i.am(0, n[r], t, r, 0, i.t);
    t.s = 0;
    t.clamp();
    if (this.s != e.s) BigInteger.ZERO.subTo(t, t)
}
function bnpSquareTo(e) {
    var t = this.abs();
    var i = e.t = 2 * t.t;
    for (; --i >= 0;) e[i] = 0;
    for (i = 0; i < t.t - 1; ++i) {
        var n = t.am(i, t[i], e, 2 * i, 0, 1);
        if ((e[i + t.t] += t.am(i + 1, 2 * t[i], e, 2 * i + 1, n, t.t - i - 1)) >= t.DV) {
            e[i + t.t] -= t.DV;
            e[i + t.t + 1] = 1
        }
    }
    if (e.t > 0) e[e.t - 1] += t.am(i, t[i], e, 2 * i, 0, 1);
    e.s = 0;
    e.clamp()
}
function bnpDivRemTo(e, t, i) {
    var n = e.abs();
    if (! (n.t <= 0)) {
        var r = this.abs();
        if (! (r.t < n.t)) {
            if (null == i) i = nbi();
            var s = nbi(),
            a = this.s,
            o = e.s;
            var _ = this.DB - nbits(n[n.t - 1]);
            if (_ > 0) {
                n.lShiftTo(_, s);
                r.lShiftTo(_, i)
            } else {
                n.copyTo(s);
                r.copyTo(i)
            }
            var c = s.t;
            var u = s[c - 1];
            if (0 != u) {
                var f = u * (1 << this.F1) + (c > 1 ? s[c - 2] >> this.F2: 0);
                var d = this.FV / f,
                h = (1 << this.F1) / f,
                l = 1 << this.F2;
                var N = i.t,
                p = N - c,
                v = null == t ? nbi() : t;
                s.dlShiftTo(p, v);
                if (i.compareTo(v) >= 0) {
                    i[i.t++] = 1;
                    i.subTo(v, i)
                }
                BigInteger.ONE.dlShiftTo(c, v);
                v.subTo(s, s);
                for (; s.t < c;) s[s.t++] = 0;
                for (; --p >= 0;) {
                    var m = i[--N] == u ? this.DM: Math.floor(i[N] * d + (i[N - 1] + l) * h);
                    if ((i[N] += s.am(0, m, i, p, 0, c)) < m) {
                        s.dlShiftTo(p, v);
                        i.subTo(v, i);
                        for (; i[N] < --m;) i.subTo(v, i)
                    }
                }
                if (null != t) {
                    i.drShiftTo(c, t);
                    if (a != o) BigInteger.ZERO.subTo(t, t)
                }
                i.t = c;
                i.clamp();
                if (_ > 0) i.rShiftTo(_, i);
                if (a < 0) BigInteger.ZERO.subTo(i, i)
            }
        } else {
            if (null != t) t.fromInt(0);
            if (null != i) this.copyTo(i)
        }
    }
}
function bnMod(e) {
    var t = nbi();
    this.abs().divRemTo(e, null, t);
    if (this.s < 0 && t.compareTo(BigInteger.ZERO) > 0) e.subTo(t, t);
    return t
}
function Classic(e) {
    this.m = e
}
function cConvert(e) {
    if (e.s < 0 || e.compareTo(this.m) >= 0) return e.mod(this.m);
    else return e
}
function cRevert(e) {
    return e
}
function cReduce(e) {
    e.divRemTo(this.m, null, e)
}
function cMulTo(e, t, i) {
    e.multiplyTo(t, i);
    this.reduce(i)
}
function cSqrTo(e, t) {
    e.squareTo(t);
    this.reduce(t)
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;
function bnpInvDigit() {
    if (this.t < 1) return 0;
    var e = this[0];
    if (0 == (1 & e)) return 0;
    var t = 3 & e;
    t = t * (2 - (15 & e) * t) & 15;
    t = t * (2 - (255 & e) * t) & 255;
    t = t * (2 - ((65535 & e) * t & 65535)) & 65535;
    t = t * (2 - e * t % this.DV) % this.DV;
    return t > 0 ? this.DV - t: -t
}
function Montgomery(e) {
    this.m = e;
    this.mp = e.invDigit();
    this.mpl = 32767 & this.mp;
    this.mph = this.mp >> 15;
    this.um = (1 << e.DB - 15) - 1;
    this.mt2 = 2 * e.t
}
function montConvert(e) {
    var t = nbi();
    e.abs().dlShiftTo(this.m.t, t);
    t.divRemTo(this.m, null, t);
    if (e.s < 0 && t.compareTo(BigInteger.ZERO) > 0) this.m.subTo(t, t);
    return t
}
function montRevert(e) {
    var t = nbi();
    e.copyTo(t);
    this.reduce(t);
    return t
}
function montReduce(e) {
    for (; e.t <= this.mt2;) e[e.t++] = 0;
    for (var t = 0; t < this.m.t; ++t) {
        var i = 32767 & e[t];
        var n = i * this.mpl + ((i * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM;
        i = t + this.m.t;
        e[i] += this.m.am(0, n, e, t, 0, this.m.t);
        for (; e[i] >= e.DV;) {
            e[i] -= e.DV;
            e[++i]++
        }
    }
    e.clamp();
    e.drShiftTo(this.m.t, e);
    if (e.compareTo(this.m) >= 0) e.subTo(this.m, e)
}
function montSqrTo(e, t) {
    e.squareTo(t);
    this.reduce(t)
}
function montMulTo(e, t, i) {
    e.multiplyTo(t, i);
    this.reduce(i)
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;
function bnpIsEven() {
    return 0 == (this.t > 0 ? 1 & this[0] : this.s)
}
function bnpExp(e, t) {
    if (e > 4294967295 || e < 1) return BigInteger.ONE;
    var i = nbi(),
    n = nbi(),
    r = t.convert(this),
    s = nbits(e) - 1;
    r.copyTo(i);
    for (; --s >= 0;) {
        t.sqrTo(i, n);
        if ((e & 1 << s) > 0) t.mulTo(n, r, i);
        else {
            var a = i;
            i = n;
            n = a
        }
    }
    return t.revert(i)
}
function bnModPowInt(e, t) {
    var i;
    if (e < 256 || t.isEven()) i = new Classic(t);
    else i = new Montgomery(t);
    return this.exp(e, i)
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);
function bnClone() {
    var e = nbi();
    this.copyTo(e);
    return e
}
function bnIntValue() {
    if (this.s < 0) {
        if (1 == this.t) return this[0] - this.DV;
        else if (0 == this.t) return - 1
    } else if (1 == this.t) return this[0];
    else if (0 == this.t) return 0;
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
}
function bnByteValue() {
    return 0 == this.t ? this.s: this[0] << 24 >> 24
}
function bnShortValue() {
    return 0 == this.t ? this.s: this[0] << 16 >> 16
}
function bnpChunkSize(e) {
    return Math.floor(Math.LN2 * this.DB / Math.log(e))
}
function bnSigNum() {
    if (this.s < 0) return - 1;
    else if (this.t <= 0 || 1 == this.t && this[0] <= 0) return 0;
    else return 1
}
function bnpToRadix(e) {
    if (null == e) e = 10;
    if (0 == this.signum() || e < 2 || e > 36) return "0";
    var t = this.chunkSize(e);
    var i = Math.pow(e, t);
    var n = nbv(i),
    r = nbi(),
    s = nbi(),
    a = "";
    this.divRemTo(n, r, s);
    for (; r.signum() > 0;) {
        a = (i + s.intValue()).toString(e).substr(1) + a;
        r.divRemTo(n, r, s)
    }
    return s.intValue().toString(e) + a
}
function bnpFromRadix(e, t) {
    this.fromInt(0);
    if (null == t) t = 10;
    var i = this.chunkSize(t);
    var n = Math.pow(t, i),
    r = !1,
    s = 0,
    a = 0;
    for (var o = 0; o < e.length; ++o) {
        var _ = intAt(e, o);
        if (! (_ < 0)) {
            a = t * a + _;
            if (++s >= i) {
                this.dMultiply(n);
                this.dAddOffset(a, 0);
                s = 0;
                a = 0
            }
        } else if ("-" == e.charAt(o) && 0 == this.signum()) r = !0
    }
    if (s > 0) {
        this.dMultiply(Math.pow(t, s));
        this.dAddOffset(a, 0)
    }
    if (r) BigInteger.ZERO.subTo(this, this)
}
function bnpFromNumber(e, t, i) {
    if ("number" == typeof t) if (e < 2) this.fromInt(1);
    else {
        this.fromNumber(e, i);
        if (!this.testBit(e - 1)) this.bitwiseTo(BigInteger.ONE.shiftLeft(e - 1), op_or, this);
        if (this.isEven()) this.dAddOffset(1, 0);
        for (; ! this.isProbablePrime(t);) {
            this.dAddOffset(2, 0);
            if (this.bitLength() > e) this.subTo(BigInteger.ONE.shiftLeft(e - 1), this)
        }
    } else {
        var n = new Array,
        r = 7 & e;
        n.length = (e >> 3) + 1;
        t.nextBytes(n);
        if (r > 0) n[0] &= (1 << r) - 1;
        else n[0] = 0;
        this.fromString(n, 256)
    }
}
function bnToByteArray() {
    var e = this.t,
    t = new Array;
    t[0] = this.s;
    var i = this.DB - e * this.DB % 8,
    n, r = 0;
    if (e-->0) {
        if (i < this.DB && (n = this[e] >> i) != (this.s & this.DM) >> i) t[r++] = n | this.s << this.DB - i;
        for (; e >= 0;) {
            if (i < 8) {
                n = (this[e] & (1 << i) - 1) << 8 - i;
                n |= this[--e] >> (i += this.DB - 8)
            } else {
                n = this[e] >> (i -= 8) & 255;
                if (i <= 0) {
                    i += this.DB; --e
                }
            }
            if (0 != (128 & n)) n |= -256;
            if (0 == r && (128 & this.s) != (128 & n))++r;
            if (r > 0 || n != this.s) t[r++] = n
        }
    }
    return t
}
function bnEquals(e) {
    return 0 == this.compareTo(e)
}
function bnMin(e) {
    return this.compareTo(e) < 0 ? this: e
}
function bnMax(e) {
    return this.compareTo(e) > 0 ? this: e
}
function bnpBitwiseTo(e, t, i) {
    var n, r, s = Math.min(e.t, this.t);
    for (n = 0; n < s; ++n) i[n] = t(this[n], e[n]);
    if (e.t < this.t) {
        r = e.s & this.DM;
        for (n = s; n < this.t; ++n) i[n] = t(this[n], r);
        i.t = this.t
    } else {
        r = this.s & this.DM;
        for (n = s; n < e.t; ++n) i[n] = t(r, e[n]);
        i.t = e.t
    }
    i.s = t(this.s, e.s);
    i.clamp()
}
function op_and(e, t) {
    return e & t
}
function bnAnd(e) {
    var t = nbi();
    this.bitwiseTo(e, op_and, t);
    return t
}
function op_or(e, t) {
    return e | t
}
function bnOr(e) {
    var t = nbi();
    this.bitwiseTo(e, op_or, t);
    return t
}
function op_xor(e, t) {
    return e ^ t
}
function bnXor(e) {
    var t = nbi();
    this.bitwiseTo(e, op_xor, t);
    return t
}
function op_andnot(e, t) {
    return e & ~t
}
function bnAndNot(e) {
    var t = nbi();
    this.bitwiseTo(e, op_andnot, t);
    return t
}
function bnNot() {
    var e = nbi();
    for (var t = 0; t < this.t; ++t) e[t] = this.DM & ~this[t];
    e.t = this.t;
    e.s = ~this.s;
    return e
}
function bnShiftLeft(e) {
    var t = nbi();
    if (e < 0) this.rShiftTo( - e, t);
    else this.lShiftTo(e, t);
    return t
}
function bnShiftRight(e) {
    var t = nbi();
    if (e < 0) this.lShiftTo( - e, t);
    else this.rShiftTo(e, t);
    return t
}
function lbit(e) {
    if (0 == e) return - 1;
    var t = 0;
    if (0 == (65535 & e)) {
        e >>= 16;
        t += 16
    }
    if (0 == (255 & e)) {
        e >>= 8;
        t += 8
    }
    if (0 == (15 & e)) {
        e >>= 4;
        t += 4
    }
    if (0 == (3 & e)) {
        e >>= 2;
        t += 2
    }
    if (0 == (1 & e))++t;
    return t
}
function bnGetLowestSetBit() {
    for (var e = 0; e < this.t; ++e) if (0 != this[e]) return e * this.DB + lbit(this[e]);
    if (this.s < 0) return this.t * this.DB;
    else return - 1
}
function cbit(e) {
    var t = 0;
    for (; 0 != e;) {
        e &= e - 1; ++t
    }
    return t
}
function bnBitCount() {
    var e = 0,
    t = this.s & this.DM;
    for (var i = 0; i < this.t; ++i) e += cbit(this[i] ^ t);
    return e
}
function bnTestBit(e) {
    var t = Math.floor(e / this.DB);
    if (t >= this.t) return 0 != this.s;
    else return 0 != (this[t] & 1 << e % this.DB)
}
function bnpChangeBit(e, t) {
    var i = BigInteger.ONE.shiftLeft(e);
    this.bitwiseTo(i, t, i);
    return i
}
function bnSetBit(e) {
    return this.changeBit(e, op_or)
}
function bnClearBit(e) {
    return this.changeBit(e, op_andnot)
}
function bnFlipBit(e) {
    return this.changeBit(e, op_xor)
}
function bnpAddTo(e, t) {
    var i = 0,
    n = 0,
    r = Math.min(e.t, this.t);
    for (; i < r;) {
        n += this[i] + e[i];
        t[i++] = n & this.DM;
        n >>= this.DB
    }
    if (e.t < this.t) {
        n += e.s;
        for (; i < this.t;) {
            n += this[i];
            t[i++] = n & this.DM;
            n >>= this.DB
        }
        n += this.s
    } else {
        n += this.s;
        for (; i < e.t;) {
            n += e[i];
            t[i++] = n & this.DM;
            n >>= this.DB
        }
        n += e.s
    }
    t.s = n < 0 ? -1 : 0;
    if (n > 0) t[i++] = n;
    else if (n < -1) t[i++] = this.DV + n;
    t.t = i;
    t.clamp()
}
function bnAdd(e) {
    var t = nbi();
    this.addTo(e, t);
    return t
}
function bnSubtract(e) {
    var t = nbi();
    this.subTo(e, t);
    return t
}
function bnMultiply(e) {
    var t = nbi();
    this.multiplyTo(e, t);
    return t
}
function bnSquare() {
    var e = nbi();
    this.squareTo(e);
    return e
}
function bnDivide(e) {
    var t = nbi();
    this.divRemTo(e, t, null);
    return t
}
function bnRemainder(e) {
    var t = nbi();
    this.divRemTo(e, null, t);
    return t
}
function bnDivideAndRemainder(e) {
    var t = nbi(),
    i = nbi();
    this.divRemTo(e, t, i);
    return new Array(t, i)
}
function bnpDMultiply(e) {
    this[this.t] = this.am(0, e - 1, this, 0, 0, this.t); ++this.t;
    this.clamp()
}
function bnpDAddOffset(e, t) {
    if (0 != e) {
        for (; this.t <= t;) this[this.t++] = 0;
        this[t] += e;
        for (; this[t] >= this.DV;) {
            this[t] -= this.DV;
            if (++t >= this.t) this[this.t++] = 0; ++this[t]
        }
    }
}
function NullExp() {}
function nNop(e) {
    return e
}
function nMulTo(e, t, i) {
    e.multiplyTo(t, i)
}
function nSqrTo(e, t) {
    e.squareTo(t)
}
NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;
function bnPow(e) {
    return this.exp(e, new NullExp)
}
function bnpMultiplyLowerTo(e, t, i) {
    var n = Math.min(this.t + e.t, t);
    i.s = 0;
    i.t = n;
    for (; n > 0;) i[--n] = 0;
    var r;
    for (r = i.t - this.t; n < r; ++n) i[n + this.t] = this.am(0, e[n], i, n, 0, this.t);
    for (r = Math.min(e.t, t); n < r; ++n) this.am(0, e[n], i, n, 0, t - n);
    i.clamp()
}
function bnpMultiplyUpperTo(e, t, i) {--t;
    var n = i.t = this.t + e.t - t;
    i.s = 0;
    for (; --n >= 0;) i[n] = 0;
    for (n = Math.max(t - this.t, 0); n < e.t; ++n) i[this.t + n - t] = this.am(t - n, e[n], i, 0, 0, this.t + n - t);
    i.clamp();
    i.drShiftTo(1, i)
}
function Barrett(e) {
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * e.t, this.r2);
    this.mu = this.r2.divide(e);
    this.m = e
}
function barrettConvert(e) {
    if (e.s < 0 || e.t > 2 * this.m.t) return e.mod(this.m);
    else if (e.compareTo(this.m) < 0) return e;
    else {
        var t = nbi();
        e.copyTo(t);
        this.reduce(t);
        return t
    }
}
function barrettRevert(e) {
    return e
}
function barrettReduce(e) {
    e.drShiftTo(this.m.t - 1, this.r2);
    if (e.t > this.m.t + 1) {
        e.t = this.m.t + 1;
        e.clamp()
    }
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
    for (; e.compareTo(this.r2) < 0;) e.dAddOffset(1, this.m.t + 1);
    e.subTo(this.r2, e);
    for (; e.compareTo(this.m) >= 0;) e.subTo(this.m, e)
}
function barrettSqrTo(e, t) {
    e.squareTo(t);
    this.reduce(t)
}
function barrettMulTo(e, t, i) {
    e.multiplyTo(t, i);
    this.reduce(i)
}
Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;
function bnModPow(e, t) {
    var i = e.bitLength(),
    n,
    r = nbv(1),
    s;
    if (i <= 0) return r;
    else if (i < 18) n = 1;
    else if (i < 48) n = 3;
    else if (i < 144) n = 4;
    else if (i < 768) n = 5;
    else n = 6;
    if (i < 8) s = new Classic(t);
    else if (t.isEven()) s = new Barrett(t);
    else s = new Montgomery(t);
    var a = new Array,
    o = 3,
    _ = n - 1,
    c = (1 << n) - 1;
    a[1] = s.convert(this);
    if (n > 1) {
        var u = nbi();
        s.sqrTo(a[1], u);
        for (; o <= c;) {
            a[o] = nbi();
            s.mulTo(u, a[o - 2], a[o]);
            o += 2
        }
    }
    var f = e.t - 1,
    d, h = !0,
    l = nbi(),
    N;
    i = nbits(e[f]) - 1;
    for (; f >= 0;) {
        if (i >= _) d = e[f] >> i - _ & c;
        else {
            d = (e[f] & (1 << i + 1) - 1) << _ - i;
            if (f > 0) d |= e[f - 1] >> this.DB + i - _
        }
        o = n;
        for (; 0 == (1 & d);) {
            d >>= 1; --o
        }
        if ((i -= o) < 0) {
            i += this.DB; --f
        }
        if (h) {
            a[d].copyTo(r);
            h = !1
        } else {
            for (; o > 1;) {
                s.sqrTo(r, l);
                s.sqrTo(l, r);
                o -= 2
            }
            if (o > 0) s.sqrTo(r, l);
            else {
                N = r;
                r = l;
                l = N
            }
            s.mulTo(l, a[d], r)
        }
        for (; f >= 0 && 0 == (e[f] & 1 << i);) {
            s.sqrTo(r, l);
            N = r;
            r = l;
            l = N;
            if (--i < 0) {
                i = this.DB - 1; --f
            }
        }
    }
    return s.revert(r)
}
function bnGCD(e) {
    var t = this.s < 0 ? this.negate() : this.clone();
    var i = e.s < 0 ? e.negate() : e.clone();
    if (t.compareTo(i) < 0) {
        var n = t;
        t = i;
        i = n
    }
    var r = t.getLowestSetBit(),
    s = i.getLowestSetBit();
    if (s < 0) return t;
    if (r < s) s = r;
    if (s > 0) {
        t.rShiftTo(s, t);
        i.rShiftTo(s, i)
    }
    for (; t.signum() > 0;) {
        if ((r = t.getLowestSetBit()) > 0) t.rShiftTo(r, t);
        if ((r = i.getLowestSetBit()) > 0) i.rShiftTo(r, i);
        if (t.compareTo(i) >= 0) {
            t.subTo(i, t);
            t.rShiftTo(1, t)
        } else {
            i.subTo(t, i);
            i.rShiftTo(1, i)
        }
    }
    if (s > 0) i.lShiftTo(s, i);
    return i
}
function bnpModInt(e) {
    if (e <= 0) return 0;
    var t = this.DV % e,
    i = this.s < 0 ? e - 1 : 0;
    if (this.t > 0) if (0 == t) i = this[0] % e;
    else for (var n = this.t - 1; n >= 0; --n) i = (t * i + this[n]) % e;
    return i
}
function bnModInverse(e) {
    var t = e.isEven();
    if (this.isEven() && t || 0 == e.signum()) return BigInteger.ZERO;
    var i = e.clone(),
    n = this.clone();
    var r = nbv(1),
    s = nbv(0),
    a = nbv(0),
    o = nbv(1);
    for (; 0 != i.signum();) {
        for (; i.isEven();) {
            i.rShiftTo(1, i);
            if (t) {
                if (!r.isEven() || !s.isEven()) {
                    r.addTo(this, r);
                    s.subTo(e, s)
                }
                r.rShiftTo(1, r)
            } else if (!s.isEven()) s.subTo(e, s);
            s.rShiftTo(1, s)
        }
        for (; n.isEven();) {
            n.rShiftTo(1, n);
            if (t) {
                if (!a.isEven() || !o.isEven()) {
                    a.addTo(this, a);
                    o.subTo(e, o)
                }
                a.rShiftTo(1, a)
            } else if (!o.isEven()) o.subTo(e, o);
            o.rShiftTo(1, o)
        }
        if (i.compareTo(n) >= 0) {
            i.subTo(n, i);
            if (t) r.subTo(a, r);
            s.subTo(o, s)
        } else {
            n.subTo(i, n);
            if (t) a.subTo(r, a);
            o.subTo(s, o)
        }
    }
    if (0 != n.compareTo(BigInteger.ONE)) return BigInteger.ZERO;
    if (o.compareTo(e) >= 0) return o.subtract(e);
    if (o.signum() < 0) o.addTo(e, o);
    else return o;
    if (o.signum() < 0) return o.add(e);
    else return o
}
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
function bnIsProbablePrime(e) {
    var t, i = this.abs();
    if (1 == i.t && i[0] <= lowprimes[lowprimes.length - 1]) {
        for (t = 0; t < lowprimes.length; ++t) if (i[0] == lowprimes[t]) return ! 0;
        return ! 1
    }
    if (i.isEven()) return ! 1;
    t = 1;
    for (; t < lowprimes.length;) {
        var n = lowprimes[t],
        r = t + 1;
        for (; r < lowprimes.length && n < lplim;) n *= lowprimes[r++];
        n = i.modInt(n);
        for (; t < r;) if (n % lowprimes[t++] == 0) return ! 1
    }
    return i.millerRabin(e)
}
function bnpMillerRabin(e) {
    var t = this.subtract(BigInteger.ONE);
    var i = t.getLowestSetBit();
    if (i <= 0) return ! 1;
    var n = t.shiftRight(i);
    e = e + 1 >> 1;
    if (e > lowprimes.length) e = lowprimes.length;
    var r = nbi();
    for (var s = 0; s < e; ++s) {
        r.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var a = r.modPow(n, this);
        if (0 != a.compareTo(BigInteger.ONE) && 0 != a.compareTo(t)) {
            var o = 1;
            for (; o++<i && 0 != a.compareTo(t);) {
                a = a.modPowInt(2, this);
                if (0 == a.compareTo(BigInteger.ONE)) return ! 1
            }
            if (0 != a.compareTo(t)) return ! 1
        }
    }
    return ! 0
}
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
BigInteger.prototype.square = bnSquare;
if ("object" != typeof JSON) JSON = {}; !
function() {
    "use strict";
    function f(e) {
        return e < 10 ? "0" + e: e
    }
    function quote(e) {
        escapable.lastIndex = 0;
        return escapable.test(e) ? '"' + e.replace(escapable,
        function(e) {
            var t = meta[e];
            return "string" == typeof t ? t: "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + e + '"'
    }
    function str(e, t) {
        var i, n, r, s, a = gap,
        o, _ = t[e];
        if (_ && "object" == typeof _ && "function" == typeof _.toJSON) _ = _.toJSON(e);
        if ("function" == typeof rep) _ = rep.call(t, e, _);
        switch (typeof _) {
        case "string":
            return quote(_);
        case "number":
            return isFinite(_) ? String(_) : "null";
        case "boolean":
        case "null":
            return String(_);
        case "object":
            if (!_) return "null";
            gap += indent;
            o = [];
            if ("[object Array]" === Object.prototype.toString.apply(_)) {
                s = _.length;
                for (i = 0; i < s; i += 1) o[i] = str(i, _) || "null";
                r = 0 === o.length ? "[]": gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + a + "]": "[" + o.join(",") + "]";
                gap = a;
                return r
            }
            if (rep && "object" == typeof rep) {
                s = rep.length;
                for (i = 0; i < s; i += 1) if ("string" == typeof rep[i]) {
                    n = rep[i];
                    r = str(n, _);
                    if (r) o.push(quote(n) + (gap ? ": ": ":") + r)
                }
            } else for (n in _) if (Object.prototype.hasOwnProperty.call(_, n)) {
                r = str(n, _);
                if (r) o.push(quote(n) + (gap ? ": ": ":") + r)
            }
            r = 0 === o.length ? "{}": gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + a + "}": "{" + o.join(",") + "}";
            gap = a;
            return r
        }
    }
    if ("function" != typeof Date.prototype.toJSON) {
        Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        }
    }
    var cx, escapable, gap, indent, meta, rep;
    if ("function" != typeof JSON.stringify) {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        JSON.stringify = function(e, t, i) {
            var n;
            gap = "";
            indent = "";
            if ("number" == typeof i) for (n = 0; n < i; n += 1) indent += " ";
            else if ("string" == typeof i) indent = i;
            rep = t;
            if (t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
            return str("", {
                "": e
            })
        }
    }
    if ("function" != typeof JSON.parse) {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function(text, reviver) {
            function walk(e, t) {
                var i, n, r = e[t];
                if (r && "object" == typeof r) for (i in r) if (Object.prototype.hasOwnProperty.call(r, i)) {
                    n = walk(r, i);
                    if (void 0 !== n) r[i] = n;
                    else delete r[i]
                }
                return reviver.call(e, t, r)
            }
            var j;
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) text = text.replace(cx,
            function(e) {
                return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice( - 4)
            });
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return "function" == typeof reviver ? walk({
                    "": j
                },
                "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
} ();
var RSAPublicKey = function(e, t) {
    this.modulus = new BigInteger(Hex.encode(e), 16);
    this.encryptionExponent = new BigInteger(Hex.encode(t), 16)
};
var UTF8 = {
    encode: function(e) {
        e = e.replace(/\r\n/g, "\n");
        var t = "";
        for (var i = 0; i < e.length; i++) {
            var n = e.charCodeAt(i);
            if (n < 128) t += String.fromCharCode(n);
            else if (n > 127 && n < 2048) {
                t += String.fromCharCode(n >> 6 | 192);
                t += String.fromCharCode(63 & n | 128)
            } else {
                t += String.fromCharCode(n >> 12 | 224);
                t += String.fromCharCode(n >> 6 & 63 | 128);
                t += String.fromCharCode(63 & n | 128)
            }
        }
        return t
    },
    decode: function(e) {
        var t = "";
        var i = 0;
        var n = $c1 = $c2 = 0;
        for (; i < e.length;) {
            n = e.charCodeAt(i);
            if (n < 128) {
                t += String.fromCharCode(n);
                i++
            } else if (n > 191 && n < 224) {
                $c2 = e.charCodeAt(i + 1);
                t += String.fromCharCode((31 & n) << 6 | 63 & $c2);
                i += 2
            } else {
                $c2 = e.charCodeAt(i + 1);
                $c3 = e.charCodeAt(i + 2);
                t += String.fromCharCode((15 & n) << 12 | (63 & $c2) << 6 | 63 & $c3);
                i += 3
            }
        }
        return t
    }
};
var Base64 = {
    base64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        if (!e) return ! 1;
        var t = "";
        var i, n, r;
        var s, a, o, _;
        var c = 0;
        do {
            i = e.charCodeAt(c++);
            n = e.charCodeAt(c++);
            r = e.charCodeAt(c++);
            s = i >> 2;
            a = (3 & i) << 4 | n >> 4;
            o = (15 & n) << 2 | r >> 6;
            _ = 63 & r;
            if (isNaN(n)) o = _ = 64;
            else if (isNaN(r)) _ = 64;
            t += this.base64.charAt(s) + this.base64.charAt(a) + this.base64.charAt(o) + this.base64.charAt(_)
        } while ( c < e . length );
        return t
    },
    decode: function(e) {
        if (!e) return ! 1;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        var t = "";
        var i, n, r, s;
        var a = 0;
        do {
            i = this.base64.indexOf(e.charAt(a++));
            n = this.base64.indexOf(e.charAt(a++));
            r = this.base64.indexOf(e.charAt(a++));
            s = this.base64.indexOf(e.charAt(a++));
            t += String.fromCharCode(i << 2 | n >> 4);
            if (64 != r) t += String.fromCharCode((15 & n) << 4 | r >> 2);
            if (64 != s) t += String.fromCharCode((3 & r) << 6 | s)
        } while ( a < e . length );
        return t
    }
};
var Hex = {
    hex: "0123456789abcdef",
    encode: function(e) {
        if (!e) return ! 1;
        var t = "";
        var i;
        var n = 0;
        do {
            i = e.charCodeAt(n++);
            t += this.hex.charAt(i >> 4 & 15) + this.hex.charAt(15 & i)
        } while ( n < e . length );
        return t
    },
    decode: function(e) {
        if (!e) return ! 1;
        e = e.replace(/[^0-9abcdef]/g, "");
        var t = "";
        var i = 0;
        do t += String.fromCharCode(this.hex.indexOf(e.charAt(i++)) << 4 & 240 | 15 & this.hex.indexOf(e.charAt(i++)));
        while (i < e.length);
        return t
    }
};
var ASN1Data = function(e) {
    this.error = !1;
    this.parse = function(e) {
        if (!e) {
            this.error = !0;
            return null
        }
        var t = [];
        for (; e.length > 0;) {
            var i = e.charCodeAt(0);
            e = e.substr(1);
            var n = 0;
            if (5 == (31 & i)) e = e.substr(1);
            else if (128 & e.charCodeAt(0)) {
                var r = 127 & e.charCodeAt(0);
                e = e.substr(1);
                if (r > 0) n = e.charCodeAt(0);
                if (r > 1) n = n << 8 | e.charCodeAt(1);
                if (r > 2) {
                    this.error = !0;
                    return null
                }
                e = e.substr(r)
            } else {
                n = e.charCodeAt(0);
                e = e.substr(1)
            }
            var s = "";
            if (n) {
                if (n > e.length) {
                    this.error = !0;
                    return null
                }
                s = e.substr(0, n);
                e = e.substr(n)
            }
            if (32 & i) t.push(this.parse(s));
            else t.push(this.value(128 & i ? 4 : 31 & i, s))
        }
        return t
    };
    this.value = function(e, t) {
        if (1 == e) return t ? !0 : !1;
        else if (2 == e) return t;
        else if (3 == e) return this.parse(t.substr(1));
        else if (5 == e) return null;
        else if (6 == e) {
            var i = [];
            var n = t.charCodeAt(0);
            i.push(Math.floor(n / 40));
            i.push(n - 40 * i[0]);
            var r = [];
            var s = 0;
            var a;
            for (a = 1; a < t.length; a++) {
                var o = t.charCodeAt(a);
                r.push(127 & o);
                if (128 & o) s++;
                else {
                    var _;
                    var c = 0;
                    for (_ = 0; _ < r.length; _++) c += r[_] * Math.pow(128, s--);
                    i.push(c);
                    s = 0;
                    r = []
                }
            }
            return i.join(".")
        }
        return null
    };
    this.data = this.parse(e)
};
var RSA = {
    getPublicKey: function(e) {
        if (e.length < 50) return ! 1;
        if ("-----BEGIN PUBLIC KEY-----" != e.substr(0, 26)) return ! 1;
        e = e.substr(26);
        if ("-----END PUBLIC KEY-----" != e.substr(e.length - 24)) return ! 1;
        e = e.substr(0, e.length - 24);
        e = new ASN1Data(Base64.decode(e));
        if (e.error) return ! 1;
        e = e.data;
        if ("1.2.840.113549.1.1.1" == e[0][0][0]) return new RSAPublicKey(e[0][1][0][0], e[0][1][0][1]);
        else return ! 1
    },
    encrypt: function(e, t) {
        if (!t) return ! 1;
        var i = t.modulus.bitLength() + 7 >> 3;
        e = this.pkcs1pad2(e, i);
        if (!e) return ! 1;
        e = e.modPowInt(t.encryptionExponent, t.modulus);
        if (!e) return ! 1;
        e = e.toString(16);
        for (; e.length < 2 * i;) e = "0" + e;
        return Base64.encode(Hex.decode(e))
    },
    decrypt: function(e) {
        var t = new BigInteger(e, 16)
    },
    pkcs1pad2: function(e, t) {
        if (t < e.length + 11) return null;
        var i = [];
        var n = e.length - 1;
        for (; n >= 0 && t > 0;) i[--t] = e.charCodeAt(n--);
        i[--t] = 0;
        for (; t > 2;) i[--t] = Math.floor(254 * Math.random()) + 1;
        i[--t] = 2;
        i[--t] = 0;
        return new BigInteger(i)
    }
};
var MpUtil = function() {
    var e = function(e, t, i) {
        e.addEventListener ? e.addEventListener(t, i, !1) : e.attachEvent("on" + t, i)
    };
    var t = function(e, t, i) {
        e.removeEventListener ? e.removeEventListener(t, i, !1) : e.detachEvent("on" + t, i)
    };
    var i = function() {
        var e = +new Date;
        return function() {
            return "" + e++
        }
    } ();
    var n = function(e, t) {
        try {
            t = t.toLowerCase();
            if (null === e) return "null" == t;
            if (void 0 === e) return "undefined" == t;
            else return Object.prototype.toString.call(e).toLowerCase() == "[object " + t + "]"
        } catch(i) {
            return ! 1
        }
    };
    return {
        addEvent: e,
        clearEvent: t,
        uniqueId: i,
        isTypeOf: n
    }
} ();
var MP = function() {
    var e = "zc.reg.163.com",
    t = "ntes_zc_",
    i = "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5gsH+AA4XWONB5TDcUd+xCz7ejOFHZKlcZDx+pF1i7Gsvi1vjyJoQhRtRSn950x498VUkx7rUxg1/ScBVfrRxQOZ8xFBye3pjAzfb22+RCuYApSVpJ3OO3KsEuKExftz9oFBv3ejxPlYc5yq7YiBO8XlTnQN0Sa4R4qhPO3I2MQIDAQAB-----END PUBLIC KEY-----",
    n = "dl.reg.163.com";
    if (window._$needUrsBgp && window._$BGP) n = "dl2.reg.163.com";
    var r = function(e) {
        return e.replace("dl.reg.163.com", "dl2.reg.163.com").replace("passport.", "passport2.").replace("reg.icourse163.org", "reg2.icourse163.org")
    };
    var s = function(e) {
        var t = "&";
        if (e.indexOf("?") == -1) {
            e += "?";
            t = ""
        }
        if (window._$URSOPT.opd) e = e + t + "opd=" + window._$URSOPT.opd;
        if (window._$URSOPT.opkid) e = e + "&opkid=" + window._$URSOPT.opkid;
        return e
    };
    var a = function(e) {
        if (window._$pathB) e = e.replace(/:\/\/(?:[^\/]+)/,
        function(e) {
            return e + "/b"
        });
        return e
    },
    o = function(t) {
        var i = t.data,
        n = (t.host ? t.host: e) + t.path;
        var s;
        if (window._$needUrsBgp && window._$BGP) n = r(n);
        if ("string" == typeof i) i = JSON.parse(i);
        s = i;
        delete i.isleak;
        delete s.isleak;
        c(i);
        var o = n.indexOf("zc.reg.163.com") == -1;
        if (o) o = n.indexOf("/zc/") == -1;
        if (!o) n = window.REGPROTOCOL + n;
        else n = window.PROTOCOL + n;
        var u = 1e4;
        if (o) {
            if (window._$URSOPT.opd) i.opd = window._$URSOPT.opd;
            if (window._$URSOPT.opkid) i.opkid = window._$URSOPT.opkid;
            n = a(n)
        }
        if ("POST" == t.type) i = JSON.stringify(i);
        var f = o ? {
            url: n,
            type: t.type,
            data: i,
            contentType: t.contentType || "application/json",
            dataType: t.dataType || "json",
            timeout: u,
            success: function(e) {
                var i = e && e.ret;
                if (201 != i) t.error(t.path, e);
                else t.success(t.path, e)
            },
            error: function() {
                var e = Array.prototype.slice.call(arguments);
                e.unshift(t.path);
                t.error.apply(null, e)
            }
        }: {
            url: n,
            type: t.type,
            data: i,
            contentType: t.contentType || "application/json",
            dataType: t.dataType || "json",
            timeout: u,
            success: function(e) {
                if (e && e.ret && ("102" === e.ret || "104" === e.ret || "200" === e.ret || "201" === e.ret || "202" === e.ret)) t.success(t.path, e);
                else t.error(t.path, e)
            },
            error: function() {
                var e = Array.prototype.slice.call(arguments);
                e.unshift(t.path);
                t.error.apply(null, e)
            }
        };
        _(f)
    };
    var _ = function() {
        var e = function(e) {
            var t = [];
            for (var i in e) t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
            return t.join("&")
        };
        var t = function() {
            if ("undefined" != typeof XMLHttpRequest) return new XMLHttpRequest;
            else if ("undefined" != typeof ActiveXObject) {
                var e = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"];
                for (var t = 0; t < e.length; t++) try {
                    return new ActiveXObject(e[t])
                } catch(i) {}
            } else throw new Error("您的系统或浏览器不支持XHR对象！")
        };
        var i = function(e) {
            var t = [];
            for (var i in e) t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
            t.push("nocache=" + (new Date).getTime());
            return t.join("&")
        };
        var n = function() {
            var e = function(e) {
                try {
                    return new Function("return " + e)()
                } catch(t) {
                    return null
                }
            };
            return function(t) {
                if ("string" != typeof t) return t;
                try {
                    if (window.JSON && JSON.parse) return JSON.parse(t)
                } catch(i) {}
                return e(t)
            }
        } ();
        var r = function(e, t) {
            if (4 == e.readyState && !t.requestDone) {
                var i = e.status;
                var r = n(e.responseText) || {};
                if (i >= 200 && i < 300) t.success && t.success(r);
                else {
                    r.eurl = t.url;
                    r.ret = i;
                    t.error && t.error(r)
                }
                this.xhr = null;
                clearTimeout(t.reqTimeout)
            } else if (!t.requestDone) if (!t.reqTimeout) t.reqTimeout = setTimeout(function() {
                t.requestDone = !0; !! this.xhr && this.xhr.abort();
                t.error && t.error({
                    ret: "-1"
                });
                clearTimeout(t.reqTimeout)
            },
            !t.timeout ? 5e3: t.timeout)
        };
        return function(n) {
            n = n || {};
            n.requestDone = !1;
            n.type = (n.type || "GET").toUpperCase();
            n.dataType = n.dataType || "json";
            n.contentType = n.contentType || "application/x-www-form-urlencoded";
            n.async = n.async || !0;
            var s = n.data;
            var a = t();
            if (n.async === !0) a.onreadystatechange = function() {
                r(a, n)
            };
            if ("GET" == n.type) {
                s = i(s);
                a.open("GET", n.url + "?" + s, n.async);
                a.send(null)
            } else if ("POST" == n.type) {
                a.open("POST", n.url, n.async);
                a.setRequestHeader("Content-Type", n.contentType);
                if ("application/x-www-form-urlencoded" == n.contentType) {
                    try {
                        s = JSON.parse(s)
                    } catch(o) {}
                    s = e(s)
                }
                a.send(s)
            }
            if (n.async === !1) r(a, n)
        }
    } ();
    var c = function(e) {
        try {
            e.topURL = window._$TOPURL ? window._$TOPURL.split("?")[0] : ""
        } catch(t) {
            return
        }
    };
    return {
        promarkIdData: {},
        TICKET: "",
        encrypt: function(e, t) {
            var n = RSA.getPublicKey(i);
            return RSA.encrypt(e + "`" + t, n)
        },
        encrypt2: function(e) {
            var t = RSA.getPublicKey(i);
            return RSA.encrypt(e, t)
        },
        getCookieId: function(e, t) {
            MpRequest2.getCookie(e, t)
        },
        getId: function(e, i) {
            var n = t + e;
            var r = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(n).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
            i(r)
        },
        regvftcp: function(e, t, i, n) {
            o({
                path: "/vftcp",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        regvfccp: function(e, t, i, n) {
            o({
                path: "/vfccp",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        init: function(e, t, i, n) {
            o({
                path: "/ini",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        getCaptcha: function(t) {
            if (!t) return "";
            var i = e,
            n = window["$regCookieDomain"];
            if (n) if (n.indexOf("icourse163.org") >= 0) i = "reg." + n + "/zc";
            else i = "passport." + n + "/zc";
            var r = window.REGPROTOCOL + i + "/cp?channel=2&id=" + t + "&nocache=" + window.MpUtil.uniqueId();
            return r
        },
        checkCaptcha: function(e, t, i, n) {
            o({
                path: "/vfcp",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        initQrcode: function(e, t, i) {
            o({
                host: "reg.163.com",
                path: "/services/getqrcodeid",
                type: "GET",
                data: e,
                success: t,
                error: i
            })
        },
        checkName: function(e, t, i, n) {
            o({
                path: "/chn",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        getMobileSms: function(e, t, i, n) {
            o({
                path: "/sm",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        getMailSms: function(e, t, i, n) {
            o({
                path: "/mlrgsm",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        getTicket: function(e, t, i, n) {
            o({
                path: "/gt",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(e),
                success: t,
                error: i,
                host: n
            })
        },
        setTicket: function(e) {
            MP.TICKET = e || ""
        },
        regMob: function(e, t, i, n) {
            o({
                path: "/mrg",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(e),
                success: t,
                error: i,
                host: n
            })
        },
        fastReg: function(e, t, i, n) {
            o({
                path: "/frg",
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify(e),
                success: t,
                error: i,
                host: n
            })
        },
        sendActMail: function(e, t, i, n) {
            o({
                path: "/sendActMail",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        qrlogin: function(e, t, i, n) {
            o({
                path: "/qrcodel",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        getCaptchaLogin: function(e, t, i) {
            var o = n;
            if ("mail126" === e) o = "passport.126.com/dl";
            else if ("mailyeah" === e) o = "passport.yeah.net/dl";
            if (i) if (i.indexOf("icourse163.org") >= 0) o = "reg." + i + "/dl";
            else o = "passport." + i + "/dl";
            if (window._$needUrsBgp && window._$BGP) o = r(o);
            var _ = window.PROTOCOL + o + "/cp?pd=" + e + "&pkid=" + t + "&random=" + window.MpUtil.uniqueId();
            _ = a(_);
            _ = s(_);
            return _
        },
        safelogin: function(e, t, i, n) {
            o({
                path: "/l",
                type: "POST",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        llp: function(e, t, i, n) {
            o({
                path: "/llp",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        sendSmsLogin: function(e, t, i, n) {
            o({
                path: "/sm",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        initComponentLogin: function(e, t, i, n) {
            o({
                path: "/ini",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        checkSmsCode: function(e, t, i, n) {
            o({
                path: "/vfcp",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        vfsms: function(e, t, i, n) {
            o({
                path: "/vfsms",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        getLoginTicket: function(e, t, i, n) {
            o({
                path: "/gt",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        vftcp: function(e, t, i, n) {
            o({
                path: "/vftcp",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        vfccp: function(e, t, i, n) {
            o({
                path: "/vfccp",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        goonlog: function(e, t, i, n) {
            o({
                path: "/go",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-login": function(e, t, i, n) {
            o({
                path: "/lpwd",
                type: "POST",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-gt": function(e, t, i, n) {
            o({
                path: "/gt",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-ini": function(e, t, i, n) {
            o({
                path: "/ini",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-vfcp": function(e, t, i, n) {
            o({
                path: "/vfcp",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-cp": function(e, t, i) {
            var o = n;
            if (i) if (i.indexOf("icourse163.org") >= 0) o = "reg." + i + "/dl";
            else o = "passport." + i + "/dl";
            if (window._$needUrsBgp && window._$BGP) o = r(o);
            var _ = window.PROTOCOL + o + "/yd/cp?pd=" + e + "&pkid=" + t + "&random=" + window.MpUtil.uniqueId();
            _ = a(_);
            _ = s(_);
            return _
        },
        "mb-lvfsms": function(e, t, i, n) {
            o({
                path: "/lvfsms",
                type: "POST",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-vftcp": function(e, t, i, n) {
            o({
                path: "/vftcp",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-vfccp": function(e, t, i, n) {
            o({
                path: "/vfccp",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-sms-lsm": function(e, t, i, n) {
            o({
                path: "/lsm",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-reg-ini": function(e, t, i, n) {
            o({
                path: "/ini",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-reg-chn": function(e, t, i, n) {
            o({
                path: "/chn",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-reg-cp": function(t) {
            var i = window["$regCookieDomain"];
            var n = e;
            if (i) if (i.indexOf("icourse163.org") >= 0) n = "reg." + i + "/zc";
            else n = "passport." + i + "/zc";
            var r = window.REGPROTOCOL + n + "/yd/cp?channel=2&id=" + t + "&nocache=" + window.MpUtil.uniqueId();
            return r
        },
        "mb-reg-sm": function(e, t, i, n) {
            o({
                path: "/sm",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-reg-vfsms": function(e, t, i, n) {
            o({
                path: "/vfsms",
                type: "POST",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-nini": function(e, t, i, n) {
            o({
                path: "/nini",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-nlregssms": function(e, t, i, n) {
            o({
                path: "/nlregssms",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-nlgt": function(e, t, i, n) {
            o({
                path: "/nlgt",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-nlregvfsms": function(e, t, i, n) {
            o({
                path: "/nlregvfsms",
                type: "POST",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-ncp": function(e, t) {
            var i = n;
            if (t) if (t.indexOf("icourse163.org") >= 0) i = "reg." + t + "/dl";
            else i = "passport." + t + "/dl";
            if (window._$needUrsBgp && window._$BGP) i = r(i);
            var o = window.PROTOCOL + i + "/yd/ncp?pd=" + e.product + "&pkid=" + e.pkid + "&pkht=" + e.pkht + "&channel=" + e.channel + "&topURL=" + e.topURL + "&random=" + window.MpUtil.uniqueId();
            o = a(o);
            o = s(o);
            return o
        },
        "mb-nvfcp": function(e, t, i, n) {
            o({
                path: "/nvfcp",
                type: "POST",
                contentType: "application/x-www-form-urlencoded",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-nvftcp": function(e, t, i, n) {
            o({
                path: "/nvftcp",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        },
        "mb-nvfccp": function(e, t, i, n) {
            o({
                path: "/nvfccp",
                type: "GET",
                data: e,
                success: t,
                error: i,
                host: n
            })
        }
    }
} ();
if ("undefined" == typeof I$) I$ = function() {
    var e = {},
    t = function() {
        return ! 1
    },
    i = {};
    var n = function(t, i) {
        return e.toString.call(t) === "[object " + i + "]"
    };
    return function(e, r) {
        var s = i[e],
        a = n(r, "Function");
        if (null != r && !a) s = r;
        if (a) {
            var o = [];
            for (var _ = 2,
            c = arguments.length; _ < c; _++) o.push(arguments.callee(arguments[_]));
            var u = {};
            o.push.call(o, u, {},
            t, []);
            var f = r.apply(null, o) || u;
            if (!s || !n(f, "Object")) s = f;
            else if (Object.keys) for (var d = Object.keys(f), _ = 0, c = d.length, h; _ < c; _++) {
                h = d[_];
                s[h] = f[h]
            } else for (var h in f) s[h] = f[h]
        }
        if (null == s) s = {};
        i[e] = s;
        return s
    }
} ();
I$("9693d84387adb23be03bb7122d0b801b",
function(e, t, i, n) {
    var r = Function.prototype;
    r._$aop = function(e, t) {
        var t = t || i,
        e = e || i,
        r = this;
        return function() {
            var i = {
                args: n.slice.call(arguments, 0)
            };
            e(i);
            if (!i.stopped) {
                i.value = r.apply(this, i.args);
                t(i)
            }
            return i.value
        }
    };
    r._$bind = function() {
        var e = arguments,
        t = arguments[0],
        i = this;
        return function() {
            var r = n.slice.call(e, 1);
            n.push.apply(r, arguments);
            return i.apply(t || null, r)
        }
    };
    r._$bind2 = function() {
        var e = arguments,
        t = n.shift.call(e),
        i = this;
        return function() {
            n.push.apply(arguments, e);
            return i.apply(t || null, arguments)
        }
    };
    var r = String.prototype;
    if (!r.trim) r.trim = function() {
        var e = /(?:^\s+)|(?:\s+$)/g;
        return function() {
            return this.replace(e, "")
        }
    } ();
    if (!this.console) this.console = {
        log: i,
        error: i
    };
    if (!0) {
        NEJ = this.NEJ || {};
        NEJ.copy = function(e, i) {
            e = e || {};
            i = i || t;
            for (var n in i) if (i.hasOwnProperty(n)) e[n] = i[n];
            return e
        };
        NEJ = NEJ.copy(NEJ, {
            O: t,
            R: n,
            F: i,
            P: function(e) {
                if (!e || !e.length) return null;
                var t = window;
                for (var i = e.split("."), n = i.length, r = "window" == i[0] ? 1 : 0; r < n; t = t[i[r]] = t[i[r]] || {},
                r++);
                return t
            }
        });
        return NEJ
    }
    return e
});
I$("2e6bbd8d0502b99c64b2b33028f7592f",
function(e, t, i, n) {
    e.__forIn = function(e, t, i) {
        if (!e || !t) return null;
        var n = Object.keys(e);
        for (var r = 0,
        s = n.length,
        a, o; r < s; r++) {
            a = n[r];
            o = t.call(i || null, e[a], a, e);
            if (o) return a
        }
        return null
    };
    e.__forEach = function(e, t, i) {
        e.forEach(t, i)
    };
    e.__col2array = function(e) {
        return n.slice.call(e, 0)
    };
    e.__str2time = function(e) {
        return Date.parse(e)
    };
    return e
});
I$("b4448d35d10d290252e905174939b60a",
function(e, t, i, n, r) {
    var s = this.navigator.platform,
    a = this.navigator.userAgent;
    var o = {
        mac: s,
        win: s,
        linux: s,
        ipad: a,
        ipod: a,
        iphone: s,
        android: a
    };
    t._$IS = o;
    for (var _ in o) o[_] = new RegExp(_, "i").test(o[_]);
    o.ios = o.ipad || o.iphone || o.ipod;
    o.tablet = o.ipad;
    o.desktop = o.mac || o.win || o.linux && !o.android;
    t._$is = function(e) {
        return !! o[e]
    };
    var c = {
        engine: "unknow",
        release: "unknow",
        browser: "unknow",
        version: "unknow",
        prefix: {
            css: "",
            pro: "",
            clz: ""
        }
    };
    t._$KERNEL = c;
    if (/msie\s+(.*?);/i.test(a) || /trident\/.+rv:([\d\.]+)/i.test(a)) {
        c.engine = "trident";
        c.browser = "ie";
        c.version = RegExp.$1;
        c.prefix = {
            css: "ms",
            pro: "ms",
            clz: "MS",
            evt: "MS"
        };
        var u = {
            6 : "2.0",
            7 : "3.0",
            8 : "4.0",
            9 : "5.0",
            10 : "6.0",
            11 : "7.0"
        };
        c.release = u[document.documentMode] || u[parseInt(c.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(a)) {
        c.engine = "webkit";
        c.release = RegExp.$1 || "";
        c.prefix = {
            css: "webkit",
            pro: "webkit",
            clz: "WebKit"
        }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(a)) {
        c.engine = "gecko";
        c.release = RegExp.$1 || "";
        c.browser = "firefox";
        c.prefix = {
            css: "Moz",
            pro: "moz",
            clz: "Moz"
        };
        if (/firefox\/(.*?)(?=\s|$)/i.test(a)) c.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(a)) {
        c.engine = "presto";
        c.release = RegExp.$1 || "";
        c.browser = "opera";
        c.prefix = {
            css: "O",
            pro: "o",
            clz: "O"
        };
        if (/version\/(.*?)(?=\s|$)/i.test(a)) c.version = RegExp.$1 || ""
    }
    if ("unknow" == c.browser) {
        var u = ["chrome", "maxthon", "safari"];
        for (var f = 0,
        d = u.length,
        h; f < d; f++) {
            h = "safari" == u[f] ? "version": u[f];
            if (new RegExp(h + "/(.*?)(?=\\s|$)", "i").test(a)) {
                c.browser = u[f];
                c.version = RegExp.$1.trim();
                break
            }
        }
    }
    t._$SUPPORT = {};
    t._$support = function(e) {
        return !! t._$SUPPORT[e]
    };
    if (!0) e.copy(e.P("nej.p"), t);
    return t
},
"9693d84387adb23be03bb7122d0b801b");
I$("bf5f9218f98672624797066803ef84cf",
function(e, t, i, n, r, s) {
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "4.0") I$(1,
    function() {
        e.__forIn = function(e, t, i) {
            if (e && t) {
                var n;
                for (var r in e) if (e.hasOwnProperty(r)) {
                    n = t.call(i, e[r], r, e);
                    if (n) return r
                } else;
            }
        };
        e.__forEach = function(e, t, i) {
            for (var n = 0,
            r = e.length; n < r; n++) t.call(i, e[n], n, e)
        };
        e.__col2array = function(e) {
            var t = [];
            if (e && e.length) for (var i = 0,
            n = e.length; i < n; i++) t.push(e[i]);
            return t
        };
        e.__str2time = function() {
            var e = /-/g;
            return function(t) {
                return Date.parse(t.replace(e, "/").split(".")[0])
            }
        } ()
    });
    return e
},
"2e6bbd8d0502b99c64b2b33028f7592f", "b4448d35d10d290252e905174939b60a");
I$("835a8693a54280be3882f53f1be76e30",
function(e, t, i, n, r, s) {
    i._$klass = function() {
        var e = function() {
            return "[object Function]" !== n.toString.call(arguments[0])
        };
        var i = function(e, i) {
            for (; i;) {
                var n = i.prototype,
                r = t.__forIn(n,
                function(t) {
                    return e === t
                });
                if (null != r) return {
                    name: r,
                    klass: i
                };
                i = i._$super
            }
        };
        return function() {
            var n = function() {
                return this.__init.apply(this, arguments)
            };
            n.prototype.__init = r;
            n._$extend = function(n, r) {
                if (!e(n)) {
                    var s = this;
                    if (r !== !1) t.__forIn(n,
                    function(t, i) {
                        if (!e(t)) s[i] = t
                    });
                    this._$super = n;
                    var a = function() {};
                    a.prototype = n.prototype;
                    this.prototype = new a;
                    this.prototype.constructor = this;
                    var o = [],
                    _ = {};
                    var c = function(e, t) {
                        var n = i(e, t);
                        if (n) {
                            if (o[o.length - 1] != n.name) o.push(n.name);
                            _[n.name] = n.klass._$super;
                            return n.name
                        }
                    };
                    this.prototype.__super = function() {
                        var e = o[o.length - 1],
                        t = arguments.callee.caller;
                        if (!e) e = c(t, this.constructor);
                        else {
                            var i = _[e].prototype;
                            if (!i.hasOwnProperty(t) || t != i[e]) e = c(t, this.constructor);
                            else _[e] = _[e]._$super
                        }
                        var n = _[e].prototype[e].apply(this, arguments);
                        if (e == o[o.length - 1]) {
                            o.pop();
                            delete _[e]
                        }
                        return n
                    };
                    if (!0) {
                        var u = this.prototype;
                        u.__supInit = u.__super;
                        u.__supReset = u.__super;
                        u.__supDestroy = u.__super;
                        u.__supInitNode = u.__super;
                        u.__supDoBuild = u.__super;
                        u.__supOnShow = u.__super;
                        u.__supOnHide = u.__super;
                        u.__supOnRefresh = u.__super;
                        this._$supro = n.prototype
                    }
                    return this.prototype
                }
            };
            return n
        }
    } ();
    if (!0) {
        e.C = i._$klass;
        e.copy(this.NEJ, e)
    }
    return i
},
"9693d84387adb23be03bb7122d0b801b", "bf5f9218f98672624797066803ef84cf");
I$("f46be3347a20bfdd40810d04c5816b16",
function(e, t, i, n, r, s) {
    var a = function(e, t) {
        try {
            t = t.toLowerCase();
            if (null === e) return "null" == t;
            if (void 0 === e) return "undefined" == t;
            else return n.toString.call(e).toLowerCase() == "[object " + t + "]"
        } catch(i) {
            return ! 1
        }
    };
    i._$isFunction = function(e) {
        return a(e, "function")
    };
    i._$isString = function(e) {
        return a(e, "string")
    };
    i._$isNumber = function(e) {
        return a(e, "number")
    };
    i._$isBoolean = function(e) {
        return a(e, "boolean")
    };
    i._$isDate = function(e) {
        return a(e, "date")
    };
    i._$isArray = function(e) {
        return a(e, "array")
    };
    i._$isObject = function(e) {
        return a(e, "object")
    };
    i._$length = function() {
        var e = /[^\x00-\xff]/g;
        return function(t) {
            return ("" + (t || "")).replace(e, "**").length
        }
    } ();
    i._$loop = function(e, n, r) {
        if (i._$isObject(e) && i._$isFunction(n)) return t.__forIn.apply(t, arguments);
        else return null
    };
    i._$indexOf = function(e, t) {
        var n = i._$isFunction(t) ? t: function(e) {
            return e === t
        },
        r = i._$forIn(e, n);
        return null != r ? r: -1
    };
    i._$binSearch = function() {
        var e;
        var t = function(i, n, r) {
            if (n > r) return - 1;
            var s = Math.ceil((n + r) / 2),
            a = e(i[s], s, i);
            if (0 == a) return s;
            if (a < 0) return t(i, n, s - 1);
            else return t(i, s + 1, r)
        };
        return function(i, n) {
            e = n || r;
            return t(i, 0, i.length - 1)
        }
    } ();
    i._$reverseEach = function(e, t, n) {
        if (e && e.length && i._$isFunction(t)) for (var r = e.length - 1; r >= 0; r--) if (t.call(n, e[r], r, e)) return r;
        return null
    };
    i._$forEach = function(e, n, r) {
        if (e && e.length && i._$isFunction(n)) if (!e.forEach) i._$forIn.apply(i, arguments);
        else t.__forEach(e, n, r)
    };
    i._$forIn = function(e, t, n) {
        if (!e || !i._$isFunction(t)) return null;
        if (i._$isNumber(e.length)) {
            for (var r = 0,
            s = e.length; r < s; r++) if (t.call(n, e[r], r, e)) return r
        } else if (i._$isObject(e)) return i._$loop(e, t, n);
        return null
    };
    i._$encode = function(e, t) {
        t = "" + t;
        if (!e || !t) return t || "";
        else return t.replace(e.r,
        function(t) {
            var i = e[!e.i ? t.toLowerCase() : t];
            return null != i ? i: t
        })
    };
    i._$escape = function() {
        var e = /<br\/?>$/,
        t = {
            r: /\<|\>|\&|\r|\n|\s|\'|\"/g,
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            " ": "&nbsp;",
            '"': "&quot;",
            "'": "&#39;",
            "\n": "<br/>",
            "\r": ""
        };
        return function(n) {
            n = i._$encode(t, n);
            return n.replace(e, "<br/><br/>")
        }
    } ();
    i._$unescape = function() {
        var e = {
            r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi,
            "&lt;": "<",
            "&gt;": ">",
            "&amp;": "&",
            "&nbsp;": " ",
            "&#39;": "'",
            "&quot;": '"',
            "<br/>": "\n"
        };
        return function(t) {
            return i._$encode(e, t)
        }
    } ();
    i._$format = function() {
        var e = {
            i: !0,
            r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g
        },
        t = ["上午", "下午"],
        n = ["A.M.", "P.M."],
        r = ["日", "一", "二", "三", "四", "五", "六"],
        s = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
        a = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var o = function(e) {
            e = parseInt(e) || 0;
            return (e < 10 ? "0": "") + e
        };
        var _ = function(e) {
            return e < 12 ? 0 : 1
        };
        return function(c, u, f) {
            if (!c || !u) return "";
            c = i._$var2date(c);
            e.yyyy = c.getFullYear();
            e.yy = ("" + e.yyyy).substr(2);
            e.M = c.getMonth() + 1;
            e.MM = o(e.M);
            e.eM = a[e.M - 1];
            e.cM = s[e.M - 1];
            e.d = c.getDate();
            e.dd = o(e.d);
            e.H = c.getHours();
            e.HH = o(e.H);
            e.m = c.getMinutes();
            e.mm = o(e.m);
            e.s = c.getSeconds();
            e.ss = o(e.s);
            e.ms = c.getMilliseconds();
            e.w = r[c.getDay()];
            var d = _(e.H);
            e.ct = t[d];
            e.et = n[d];
            if (f) e.H = e.H % 12;
            return i._$encode(e, u)
        }
    } ();
    i._$var2date = function(e) {
        var n = e;
        if (i._$isString(e)) n = new Date(t.__str2time(e));
        if (!i._$isDate(n)) n = new Date(e);
        return n
    };
    i._$fixed = function(e, t) {
        return parseFloat(new Number(e).toFixed(t))
    };
    i._$absolute = function() {
        var e = /([^\/:])\/.*$/,
        t = /\/[^\/]+$/,
        i = /[#\?]/,
        n = location.href.split(/[?#]/)[0],
        r = document.createElement("a");
        var s = function(e) {
            return (e || "").indexOf("://") > 0
        };
        var a = function(e) {
            return (e || "").split(i)[0].replace(t, "/")
        };
        var o = function(t, i) {
            if (0 == t.indexOf("/")) return i.replace(e, "$1") + t;
            else return a(i) + t
        };
        n = a(n);
        return function(e, t) {
            e = (e || "").trim();
            if (!s(t)) t = n;
            if (!e) return t;
            if (s(e)) return e;
            e = o(e, t);
            r.href = e;
            e = r.href;
            return s(e) ? e: r.getAttribute("href", 4)
        }
    } ();
    i._$url2origin = function() {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(t) {
            if (e.test(t || "")) return RegExp.$1.toLowerCase();
            else return ""
        }
    } ();
    i._$string2object = function(e, t) {
        var n = {};
        i._$forEach((e || "").split(t),
        function(e) {
            var t = e.split("=");
            if (t && t.length) {
                var i = t.shift();
                if (i) n[decodeURIComponent(i)] = decodeURIComponent(t.join("="))
            }
        });
        return n
    };
    i._$object2string = function(e, t, n) {
        if (!e) return "";
        var r = [];
        i._$loop(e,
        function(e, t) {
            if (!i._$isFunction(e)) {
                if (i._$isDate(e)) e = e.getTime();
                else if (i._$isArray(e)) e = e.join(",");
                else if (i._$isObject(e)) e = JSON.stringify(e);
                if (n) e = encodeURIComponent(e);
                r.push(encodeURIComponent(t) + "=" + e)
            }
        });
        return r.join(t || ",")
    };
    i._$query2object = function(e) {
        return i._$string2object(e, "&")
    };
    i._$object2query = function(e) {
        return i._$object2string(e, "&", !0)
    };
    i._$object2array = function(e) {
        return t.__col2array(e)
    };
    i._$array2object = function(e, t) {
        var n = {};
        i._$forEach(e,
        function(e) {
            var i = e;
            if (t) i = t(e);
            if (null != i) n[i] = e
        });
        return n
    };
    i._$number2string = function(e, t) {
        var i = ("" + e).length,
        n = Math.max(1, parseInt(t) || 0),
        r = n - i;
        if (r > 0) e = new Array(r + 1).join("0") + e;
        return "" + e
    };
    i._$safeDelete = function(e, t) {
        if (!i._$isArray(t)) try {
            delete e[t]
        } catch(n) {
            e[t] = void 0
        } else i._$forEach(t,
        function(t) {
            i._$safeDelete(e, t)
        })
    };
    i._$randString = function() {
        var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(t) {
            t = t || 10;
            var i = [];
            for (var n = 0,
            r; n < t; ++n) {
                r = Math.floor(Math.random() * e.length);
                i.push(e.charAt(r))
            }
            return i.join("")
        }
    } ();
    i._$randNumber = function(e, t) {
        return Math.floor(Math.random() * (t - e) + e)
    };
    i._$randNumberString = function(e) {
        e = Math.max(0, Math.min(e || 8, 30));
        var t = Math.pow(10, e - 1),
        n = 10 * t;
        return i._$randNumber(t, n).toString()
    };
    i._$uniqueID = function() {
        var e = +new Date;
        return function() {
            return "" + e++
        }
    } ();
    i._$query = function(e, t) {
        e = e || n;
        var i = (t || "").split(".");
        for (var r = 0,
        s = i.length; r < s; r++) {
            e = e[i[r]];
            if (!e) break
        }
        return e
    };
    i._$merge = function() {
        var e = arguments.length - 1,
        t = arguments[e];
        if (i._$isFunction(t)) e -= 1;
        else t = r;
        var n = arguments[0] || {};
        for (var s = 1; s <= e; s++) i._$loop(arguments[s],
        function(e, i) {
            if (!t(e, i)) n[i] = e
        });
        return n
    };
    i._$fetch = function(e, t) {
        if (t) i._$loop(e,
        function(e, i, n) {
            var r = t[i];
            if (null != r) n[i] = r
        });
        return e
    };
    i._$hasProperty = function(e) {
        if (!e) return ! 1;
        if (null != e.length) return e.length > 0;
        var t = 0;
        i._$loop(e,
        function() {
            t++;
            return t > 0
        });
        return t > 0
    };
    if (!0) {
        e.Q = i._$query;
        e.X = i._$merge;
        e.EX = i._$fetch;
        e.copy(this.NEJ, e);
        e.copy(e.P("nej.u"), i)
    }
    return i
},
"9693d84387adb23be03bb7122d0b801b", "bf5f9218f98672624797066803ef84cf");
I$("1492dd2cb68b96e4c426d44d0f5531d6",
function(e, t, i, n, r, s) {
    var a = {};
    i.__url2host = function() {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(t) {
            t = t || "";
            if (e.test(t)) return RegExp.$1;
            else return location.protocol + "//" + location.host
        }
    } ();
    i.__set = function(e, t) {
        a[e] = t
    };
    i.__get = function(e) {
        return a[e]
    };
    var o = function() {
        var e = {
            portrait: {
                name: "portrait",
                dft: "portrait/"
            },
            "ajax.swf": {
                name: "ajax",
                dft: "nej_proxy_flash.swf"
            },
            "chart.swf": {
                name: "chart",
                dft: "nej_flex_chart.swf"
            },
            "audio.swf": {
                name: "audio",
                dft: "nej_player_audio.swf"
            },
            "video.swf": {
                name: "video",
                dft: "nej_player_video.swf"
            },
            "clipboard.swf": {
                name: "clipboard",
                dft: "nej_clipboard.swf"
            },
            "upload.image.swf": {
                name: "uploadimage",
                dft: "nej_upload_image.swf"
            }
        };
        var r = function(e) {
            var t = {};
            if (!e || !e.length) return t;
            for (var n = 0,
            r = e.length,
            s; n < r; n++) {
                s = e[n];
                if (s.indexOf("://") > 0) t[i.__url2host(s)] = s
            }
            return t
        };
        return function(s) {
            i.__set("root", s.root || "/res/");
            var a = i.__get("root");
            t._$loop(e,
            function(e, t, n) {
                i.__set(t, s[e.name] || a + e.dft)
            });
            var o = s.p_csrf;
            if (o === !0) o = {
                cookie: "AntiCSRF",
                param: "AntiCSRF"
            };
            o = o || n;
            i.__set("csrf", {
                param: o.param || "",
                cookie: o.cookie || ""
            });
            i.__set("frames", r(s.p_frame));
            i.__set("flashs", r(s.p_flash))
        }
    } ();
    o(this.NEJ_CONF || n);
    return i
},
"9693d84387adb23be03bb7122d0b801b", "f46be3347a20bfdd40810d04c5816b16");
I$("fe9fc2b3d9c775a9a3a97ab6d19b9a2f",
function(e, t, i, n, r, s) {
    if ("trident" === t._$KERNEL.engine) I$(20,
    function() {
        e.__set("storage.swf", (this.NEJ_CONF || n).storage || e.__get("root") + "nej_storage.swf")
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "3.0") I$(21,
    function() {
        e.__set("blank.png", (this.NEJ_CONF || n).blank || e.__get("root") + "nej_blank.gif")
    });
    return e
},
"1492dd2cb68b96e4c426d44d0f5531d6", "b4448d35d10d290252e905174939b60a");
I$("9633224ba4b427f29c01a7e19892e42e",
function(e, t, i, n, r, s) {
    i._$getFrameProxy = function(e) {
        var n = t.__url2host(e);
        return i._$get("frames")[n] || n + "/res/nej_proxy_frame.html"
    };
    i._$getFlashProxy = function(e) {
        return i._$get("flashs")[t.__url2host(e)]
    };
    i._$get = function(e) {
        return t.__get(e)
    };
    if (!0) e.copy(e.P("nej.c"), i);
    return i
},
"9693d84387adb23be03bb7122d0b801b", "fe9fc2b3d9c775a9a3a97ab6d19b9a2f");
I$("0422c728598f21c429a55e0bdddeb380",
function(e, t, i, n, r, s) {
    var a = +new Date;
    i._$CODE_NOTFUND = 1e4 - a;
    i._$CODE_NOTASGN = 10001 - a;
    i._$CODE_NOTSPOT = 10002 - a;
    i._$CODE_TIMEOUT = 10003 - a;
    i._$CODE_ERREVAL = 10004 - a;
    i._$CODE_ERRCABK = 10005 - a;
    i._$CODE_ERRSERV = 10006 - a;
    i._$CODE_ERRABRT = 10007 - a;
    i._$HEAD_CT = "Content-Type";
    i._$HEAD_CT_PLAN = "text/plain";
    i._$HEAD_CT_FILE = "multipart/form-data";
    i._$HEAD_CT_FORM = "application/x-www-form-urlencoded";
    i._$BLANK_IMAGE = t._$get("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
    if (!0) e.copy(e.P("nej.g"), i);
    return i
},
"9693d84387adb23be03bb7122d0b801b", "9633224ba4b427f29c01a7e19892e42e");
I$("5ee5c01e7d48ffc2b247c899939ea5a3",
function(e, t) {
    var i = {};
    t._$merge = function(t) {
        e._$merge(i, t)
    };
    t._$dump = function() {
        return i
    };
    t._$clear = function() {
        i = {}
    };
    return t
},
"f46be3347a20bfdd40810d04c5816b16");
I$("44b82c644a220554df259b3cd391fb7b",
function(e, t, i, n, r, s) {
    i.__checkEvent = function() {
        var e = {
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        },
        i = t._$KERNEL.prefix,
        n = {
            transitionend: "TransitionEnd",
            animationend: "AnimationEnd",
            animationstart: "AnimationStart",
            animationiteration: "AnimationIteration",
            visibilitychange: "visibilitychange"
        };
        var r = {
            enter: function(e, t, i) {
                var n = {
                    type: "keypress"
                };
                if (i) n.handler = function(t) {
                    if (13 === t.keyCode) i.call(e, t)
                };
                return n
            }
        };
        var s = function(e) {
            return (i.evt || i.pro) + e
        };
        return function(t, i, a) {
            var o = {
                type: i,
                handler: a
            };
            if (! ("on" + i in t)) {
                var _ = e[i];
                if (_) {
                    o.type = _;
                    return o
                }
                var _ = n[i];
                if (_) {
                    o.type = s(_);
                    return o
                }
                var c = r[i];
                if (c) return c.apply(null, arguments)
            }
            return o
        }
    } ();
    i.__addEvent = function() {
        var e = arguments;
        if (!1) if (! ("on" + e[1] in e[0])) console.log("not support event[" + e[1] + "] for " + e[0]);
        e[0].addEventListener(e[1], e[2], e[3])
    };
    i.__delEvent = function() {
        var e = arguments;
        e[0].removeEventListener(e[1], e[2], e[3])
    };
    i.__dispatchEvent = function(t, i, n) {
        var r = document.createEvent("Event");
        r.initEvent(i, !0, !0);
        e._$merge(r, n);
        t.dispatchEvent(r)
    };
    return i
},
"f46be3347a20bfdd40810d04c5816b16", "b4448d35d10d290252e905174939b60a");
I$("abc1c6b6f05027c2dd655587811e72fd",
function(e, t, i, n, r, s, a) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release >= "6.0") I$(2,
    function() {
        t.__checkEvent = function() {
            var e = {
                touchcancel: "MSPointerCancel",
                touchstart: "MSPointerDown",
                touchmove: "MSPointerMove",
                touchend: "MSPointerUp"
            };
            return t.__checkEvent._$aop(function(t) {
                var i = t.args;
                var n = e[i[1]];
                if (n) {
                    t.stopped = !0;
                    t.value = {
                        type: n,
                        handler: i[2]
                    }
                }
            })
        } ()
    });
    if ("trident" === e._$KERNEL.engine && "5.0" == e._$KERNEL.release) I$(3,
    function() {
        t.__checkEvent = function() {
            var e = {};
            var i = {
                input: function(t, i, n) {
                    if (!n) return {
                        type: i
                    };
                    else return {
                        type: i,
                        handler: function(i) {
                            var r = t.id;
                            e[r] = t.value;
                            n.call(t, i)
                        },
                        link: [[document, "selectionchange",
                        function(i) {
                            var r = t.id;
                            if (t == document.activeElement) {
                                if (e[r] !== t.value) {
                                    e[r] = t.value;
                                    n.call(t, i)
                                }
                            } else delete e[r]
                        }]]
                    }
                }
            };
            return t.__checkEvent._$aop(function(e) {
                var t = e.args;
                var n = i[t[1]];
                if (n) {
                    e.stopped = !0;
                    e.value = n.apply(null, t)
                }
            })
        } ()
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release >= "5.0") I$(4,
    function() {
        var e = {
            propertychange: 1
        };
        t.__addEvent = t.__addEvent._$aop(function(t) {
            var i = t.args;
            if (null != e[i[1]] && i[0].attachEvent) {
                t.stopped = !0;
                i[0].attachEvent("on" + i[1], i[2])
            }
        });
        t.__delEvent = t.__delEvent._$aop(function(t) {
            var i = t.args,
            n = e[i[1]];
            if (null != e[i[1]] && i[0].detachEvent) {
                t.stopped = !0;
                i[0].detachEvent("on" + i[1], i[2])
            }
        })
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "4.0") I$(5,
    function() {
        t.__checkEvent = function() {
            var e = {};
            var i = {
                input: function(t, i, n) {
                    var r = {
                        type: "propertychange"
                    };
                    if (n) {
                        var s = t.id;
                        var a = function(i) {
                            if (t.value && !e["x-" + s]) {
                                e["x-" + s] = !0;
                                n.call(t, i)
                            }
                        };
                        r.handler = function(i) {
                            if ("value" in t && "value" == i.propertyName) {
                                if (e[s]) return;
                                e[s] = !0;
                                n.call(t, i);
                                delete e[s]
                            }
                        };
                        r.link = [[t, "keyup", a], [t, "mouseup", a], [t, "mousemove", a]];
                        r.destroy = function() {
                            delete e[s];
                            delete e["x-" + s]
                        }
                    }
                    return r
                },
                load: function(e, t, i) {
                    var n = {
                        type: "readystatechange"
                    };
                    if (i) n.handler = function(t) {
                        if ("loaded" == e.readyState || "complete" == e.readyState) i.call(e, t)
                    };
                    return n
                }
            };
            return t.__checkEvent._$aop(function(e) {
                var t = e.args;
                var n = i[t[1]];
                if (n) {
                    e.stopped = !0;
                    e.value = n.apply(null, t)
                }
                if (t[2]) t[2] = t[2]._$bind(t[0])
            })
        } ();
        t.__addEvent = function() {
            var e = arguments;
            if (!1) if (! ("on" + e[1] in e[0])) console.log("not support event[" + e[1] + "] for " + e[0]);
            e[0].attachEvent("on" + e[1], e[2])
        };
        t.__delEvent = function() {
            var e = arguments;
            e[0].detachEvent("on" + e[1], e[2])
        };
        t.__dispatchEvent = function() {
            var e = {
                propertychange: {
                    propertyName: "value"
                }
            };
            return function(t, n, r) {
                var s = document.createEventObject();
                try {
                    i._$merge(s, e[n], r);
                    t.fireEvent("on" + n, s)
                } catch(a) {
                    console.error(a.message);
                    console.error(a.stack)
                }
            }
        } ()
    });
    if ("gecko" === e._$KERNEL.engine) I$(6,
    function() {
        t.__checkEvent = function() {
            var e = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
            var i = {
                mousewheel: function(e, t, i) {
                    var n = {
                        type: "MozMousePixelScroll"
                    };
                    if (i) n.handler = function(t) {
                        var n = t.detail;
                        t.wheelDelta = -n;
                        t.wheelDeltaY = -n;
                        t.wheelDeltaX = 0;
                        i.call(e, t)
                    };
                    return n
                }
            };
            return t.__checkEvent._$aop(function(t) {
                var n = t.args;
                if (e.test(n[1])) {
                    t.stopped = !0;
                    t.value = {
                        type: n[1],
                        handler: n[2]
                    }
                }
                var r = i[n[1]];
                if (r) {
                    t.stopped = !0;
                    t.value = r.apply(null, n)
                }
            })
        } ()
    });
    return t
},
"b4448d35d10d290252e905174939b60a", "44b82c644a220554df259b3cd391fb7b", "f46be3347a20bfdd40810d04c5816b16");
I$("7214a135f5e14d9b78ea74e4de768e85",
function(e, t, i, n, r, s, a, o, _) {
    var c = {},
    u = {};
    var f = function() {
        var e = /[\s,;]+/;
        return function(t) {
            var t = (t || "").trim().toLowerCase();
            return ! t ? null: t.split(e)
        }
    } ();
    var d = function(e, i, n) {
        var r = "page" + i;
        return null != e[r] ? e[r] : e["client" + i] + t._$getPageBox()["scroll" + n]
    };
    var h = function(e, t, i) {
        var n = "scroll" + i;
        _node = s._$getElement(e),
        _xret = d(e, t, i);
        for (; _node && _node != document.body && _node != document.documentElement;) {
            _xret += _node[n] || 0;
            _node = _node.parentNode
        }
        return _xret
    };
    var l = function(e, n, r, s) {
        var a = {};
        e = t._$get(e);
        if (!e) return null;
        t._$id(e);
        a.element = e;
        if (!i._$isFunction(r)) return null;
        a.handler = r;
        var n = f(n);
        if (!n) return null;
        a.type = n;
        a.capture = !!s;
        return a
    };
    s._$addEvent = u._$addEvent = function() {
        var e = function(e, i, n) {
            var r = t._$id(i.element),
            s = c[r] || {},
            a = s[e] || [];
            a.push({
                type: n.type || e,
                func: n.handler || i.handler,
                sfun: i.handler,
                capt: i.capture,
                link: n.link,
                destroy: n.destroy
            });
            s[e] = a;
            c[r] = s
        };
        return function() {
            var n = l.apply(null, arguments);
            if (n) i._$forEach(n.type,
            function(s) {
                var a = r.__checkEvent(n.element, s, n.handler);
                r.__addEvent(n.element, a.type, a.handler, n.capture);
                i._$forIn(a.link,
                function(e) {
                    e[3] = !!e[3];
                    r.__addEvent.apply(r, e);
                    e[0] = t._$id(e[0])
                });
                e(s, n, a)
            })
        }
    } ();
    s._$delEvent = u._$delEvent = function() {
        var e = function(e, n) {
            var r = t._$id(n.element),
            s = c[r] || a,
            o = s[e],
            _ = i._$indexOf(o,
            function(e) {
                return e.sfun === n.handler && e.capt === n.capture
            });
            var u = null;
            if (_ >= 0) {
                var f = o.splice(_, 1)[0];
                u = [[n.element, f.type, f.func, n.capture]];
                if (f.link) {
                    i._$forEach(f.link,
                    function(e) {
                        e[0] = t._$get(e[0])
                    });
                    u.push.apply(u, f.link)
                }
                if (f.destroy) f.destroy();
                if (!o.length) delete s[e];
                if (!i._$hasProperty(s)) delete c[r]
            }
            return u
        };
        return function() {
            var t = l.apply(null, arguments);
            if (t) i._$forEach(t.type,
            function(n) {
                i._$forEach(e(n, t),
                function(e) {
                    r.__delEvent.apply(r, e)
                })
            })
        }
    } ();
    s._$clearEvent = u._$clearEvent = function() {
        var e = function(e, t, n) {
            i._$reverseEach(n,
            function(i) {
                s._$delEvent(e, t, i.sfun, i.capt)
            })
        };
        return function(n, r) {
            var a = t._$id(n);
            if (a) {
                var o = c[a];
                if (o) {
                    r = f(r);
                    if (r) i._$forEach(r,
                    function(t) {
                        e(a, t, o[t])
                    });
                    else i._$loop(o,
                    function(e, t) {
                        s._$clearEvent(n, t)
                    })
                }
            }
        }
    } ();
    s._$dispatchEvent = u._$dispatchEvent = function(e, n, s) {
        var e = t._$get(e);
        if (e) i._$forEach(f(n),
        function(t) {
            var i = r.__checkEvent(e, t);
            r.__dispatchEvent(e, i.type, s)
        })
    };
    s._$getElement = function() {
        var e;
        var n = function(i, n) {
            var r = i.split(":");
            if (r.length > 1) {
                if (!e) e = {
                    a: t._$attr,
                    d: t._$dataset,
                    c: t._$hasClassName,
                    t: function(e, t) {
                        return (e.tagName || "").toLowerCase() === t
                    }
                };
                var s = e[r[0]];
                if (s) return !! s(n, r[1]);
                i = r[1]
            }
            return !! t._$attr(n, i) || !!t._$dataset(n, i) || t._$hasClassName(n, i)
        };
        return function(e) {
            if (!e) return null;
            var t = e.target || e.srcElement,
            r = arguments[1];
            if (!r) return t;
            if (i._$isString(r)) r = n._$bind(null, r);
            if (i._$isFunction(r)) {
                for (; t;) {
                    if (r(t)) return t;
                    t = t.parentNode
                }
                return null
            }
            return t
        }
    } ();
    s._$stop = function(e) {
        s._$stopBubble(e);
        s._$stopDefault(e)
    };
    s._$stopBubble = function(e) {
        if (e) e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    };
    s._$stopDefault = function(e) {
        if (e) e.preventDefault ? e.preventDefault() : e.returnValue = !1
    };
    s._$page = function(e) {
        return {
            x: s._$pageX(e),
            y: s._$pageY(e)
        }
    };
    s._$pageX = function(e) {
        return h(e, "X", "Left")
    };
    s._$pageY = function(e) {
        return h(e, "Y", "Top")
    };
    s._$clientX = function(e) {
        return d(e, "X", "Left")
    };
    s._$clientY = function(e) {
        return d(e, "Y", "Top")
    };
    n._$merge(u);
    if (!0) e.copy(e.P("nej.v"), s);
    return s
},
"9693d84387adb23be03bb7122d0b801b", "4c563cfb767e6eff2573caba9105d3e5", "f46be3347a20bfdd40810d04c5816b16", "5ee5c01e7d48ffc2b247c899939ea5a3", "abc1c6b6f05027c2dd655587811e72fd");
I$("13114b299f27ca45402ff0ccc9122807",
function(e, t, i, n, r, s) {
    i.__getElementById = function(e, t) {
        if (e.getElementById) return e.getElementById("" + t);
        try {
            return e.querySelector("#" + t)
        } catch(i) {
            return null
        }
    };
    i.__getChildren = function(t) {
        return e._$object2array(t.children)
    };
    i.__getElementsByClassName = function(t, i) {
        return e._$object2array(t.getElementsByClassName(i))
    };
    i.__nextSibling = function(e) {
        return e.nextElementSibling
    };
    i.__previousSibling = function(e) {
        return e.previousElementSibling
    };
    i.__dataset = function(e, t, i) {
        e.dataset = e.dataset || {};
        if (void 0 !== i) e.dataset[t] = i;
        return e.dataset[t]
    };
    i.__getAttribute = function(e, t) {
        return e.getAttribute(t)
    };
    i.__serializeDOM2XML = function(e) {
        return (new XMLSerializer).serializeToString(e) || ""
    };
    i.__parseDOMFromXML = function(e) {
        var t = (new DOMParser).parseFromString(e, "text/xml").documentElement;
        return "parsererror" == t.nodeName ? null: t
    };
    i.__fullScreen = function() {};
    i.__mask = function() {};
    i.__unmask = function() {};
    var a = t._$SUPPORT,
    o = t._$KERNEL.prefix;
    i.__isMatchedName = function() {
        var e = /^([a-z]+?)[A-Z]/;
        return function(t, i) {
            return !! (i[t] || e.test(t) && i[RegExp.$1])
        }
    } ();
    i.__isNeedPrefixed = function() {
        var t = e._$array2object(["animation", "transform", "transition", "appearance", "userSelect", "box", "flex", "column"]);
        return function(e) {
            return i.__isMatchedName(e, t)
        }
    } ();
    i.__fmtStyleName = function() {
        var e = /-([a-z])/g;
        return function(t) {
            t = t || "";
            return t.replace(e,
            function(e, t) {
                return t.toUpperCase()
            })
        }
    } ();
    i.__getStyleName = function() {
        var e = /^[a-z]/,
        t = o.css || "";
        return function(n) {
            n = i.__fmtStyleName(n);
            if (!i.__isNeedPrefixed(n)) return n;
            else return t + n.replace(e,
            function(e) {
                return e.toUpperCase()
            })
        }
    } ();
    i.__getStyleValue = function(e, t) {
        var n = window.getComputedStyle(e, null);
        return n[i.__getStyleName(t)] || ""
    };
    i.__setStyleValue = function(e, t, n) {
        e.style[i.__getStyleName(t)] = n
    };
    i.__getCSSMatrix = function() {
        var t = /\((.*?)\)/,
        i = /\s*,\s*/,
        n = ["CSSMatrix", o.clz + "CSSMatrix"],
        r = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var s = function(n) {
            var s = {};
            if (t.test(n || "")) e._$forEach(RegExp.$1.split(i),
            function(e, t) {
                s[r[t]] = e
            });
            return s
        };
        return function(t) {
            var i;
            e._$forIn(n,
            function(e) {
                if (this[e]) {
                    i = new this[e](t || "");
                    return ! 0
                }
            });
            return ! i ? s(t) : i
        }
    } ();
    i.__injectCSSText = function(e, t) {
        e.textContent = t
    };
    i.__processCSSText = function() {
        var t = /\$<(.*?)>/gi,
        r = /\{(.*?)\}/g,
        s = "-" + o.css.toLowerCase() + "-",
        _ = {
            scale: "scale({x|1},{y|1})",
            rotate: "rotate({a})",
            translate: "translate({x},{y})",
            matrix: "matrix({m11},{m12},{m21},{m22},{m41},{m42})"
        },
        c = {
            scale: "scale3d({x|1},{y|1},{z|1})",
            rotate: "rotate3d({x},{y},{z},{a})",
            translate: "translate3d({x},{y},{z})",
            matrix: "matrix3d({m11},{m12},{m13},{m14},{m21},{m22},{m23},{m24},{m31},{m32},{m33|1},{m34},{m41},{m42},{m43},{m44|1})"
        };
        var u = function(e, t) {
            t = t || n;
            return e.replace(r,
            function(e, i) {
                var n = i.split("|");
                return t[n[0]] || n[1] || "0"
            })
        };
        i.__processTransformValue = function(e, t) {
            var i = (!a.css3d ? _: c)[e.trim()];
            if (i) return u(i, t);
            else return ""
        };
        return function(n) {
            if (!n.replace) return n;
            else return n.replace(t,
            function(t, n) {
                if ("vendor" === n) return s;
                var r = (n || "").split("|");
                return i.__processTransformValue(r[0], e._$query2object(r[1])) || t
            })
        }
    } ();
    i.__appendCSSText = function(e, t) {
        var i = e.sheet,
        n = i.cssRules.length;
        i.insertRule(t, n);
        return i.cssRules[n]
    };
    i.__getClassList = function() {
        var e = /\s+/;
        return function(t) {
            t = (t || "").trim();
            return t ? t.split(e) : null
        }
    } ();
    i.__processClassName = function(t, n, r) {
        if ("replace" != n) e._$forEach(i.__getClassList(r),
        function(e) {
            t.classList[n](e)
        });
        else {
            i.__processClassName(t, "remove", r);
            i.__processClassName(t, "add", arguments[3])
        }
    };
    i.__hasClassName = function(t, n) {
        var r = t.classList;
        if (!r || !r.length) return ! 1;
        else return e._$indexOf(i.__getClassList(n),
        function(e) {
            return r.contains(e)
        }) >= 0
    }; !
    function() {
        if (!a.css3d) {
            var e = i.__getCSSMatrix();
            a.css3d = !!e && null != e.m41
        }
    } ();
    return i
},
"f46be3347a20bfdd40810d04c5816b16", "b4448d35d10d290252e905174939b60a");
I$("7050a4c8c3bef73ff473d83f6c83b44f",
function(e, t, i, n, r, s, a) {
    if ("trident" === t._$KERNEL.engine) I$(7,
    function() {
        e.__getChildren = e.__getChildren._$aop(function(e) {
            var t = e.args[0];
            if (!t.children) {
                e.stopped = !0;
                var n = [];
                i._$forEach(t.childNodes,
                function(e) {
                    if (1 == e.nodeType) n.push(e)
                });
                e.value = n
            }
        })
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "6.0") I$(8,
    function() {
        e.__dataset = function() {
            var e = {},
            t = "data-",
            n = /\-(.{1})/gi;
            var r = function(r) {
                var s = r.id;
                if (!e[s]) {
                    var a = {};
                    i._$forEach(r.attributes,
                    function(e) {
                        var i = e.nodeName;
                        if (0 == i.indexOf(t)) {
                            i = i.replace(t, "").replace(n,
                            function(e, t) {
                                return t.toUpperCase()
                            });
                            a[i] = e.nodeValue || ""
                        }
                    });
                    e[s] = a
                }
            };
            return function(t, i, n) {
                r(t);
                var s = e[t.id];
                if (void 0 !== n) s[i] = n;
                return s[i]
            }
        } ()
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "5.0") I$(9,
    function() {
        try {
            document.execCommand("BackgroundImageCache", !1, !0)
        } catch(t) {}
        e.__injectCSSText = function() {
            var t = 30;
            return e.__injectCSSText._$aop(function(e) {
                var i = e.args[0];
                if (i.styleSheet) {
                    e.stopped = !0;
                    var n = e.args[1];
                    var r = document.styleSheets;
                    if (r.length > t) {
                        i = r[t];
                        n = i.cssText + n
                    } else i = i.styleSheet;
                    i.cssText = n
                }
            })
        } ();
        e.__getClassRegExp = function() {
            var e = /\s+/g;
            return function(t) {
                t = (t || "").trim().replace(e, "|");
                return ! t ? null: new RegExp("(\\s|^)(?:" + t + ")(?=\\s|$)", "g")
            }
        } ();
        e.__processClassName = function(t, i, n) {
            n = n || "";
            var r = t.className || "",
            s = e.__getClassRegExp(n + " " + (arguments[3] || ""));
            var a = r;
            if (s) a = a.replace(s, "");
            switch (i) {
            case "remove":
                n = "";
                break;
            case "replace":
                n = arguments[3] || ""
            }
            a = (a + " " + n).trim();
            if (r != a) t.className = a
        };
        e.__hasClassName = function(t, i) {
            var n = e.__getClassRegExp(i);
            if (n) return n.test(t.className || "");
            else return ! 1
        }
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "4.0") I$(10,
    function() {
        e.__getElementsByClassName = function(e, t) {
            var n = [],
            r = new RegExp("(\\s|^)(?:" + t.replace(/\s+/g, "|") + ")(?=\\s|$)");
            i._$forEach(e.getElementsByTagName("*"),
            function(e) {
                if (r.test(e.className)) n.push(e)
            });
            return n
        };
        e.__nextSibling = function(e) {
            for (; e = e.nextSibling;) if (1 == e.nodeType) return e
        };
        e.__previousSibling = function(e) {
            for (; e = e.previousSibling;) if (1 == e.nodeType) return e
        };
        e.__serializeDOM2XML = function(e) {
            return "xml" in e ? e.xml: e.outerHTML
        };
        e.__parseDOMFromXML = function() {
            var e = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
            var t = function() {
                try {
                    for (var t = 0,
                    i = e.length; t < i; t++) return new ActiveXObject(e[t])
                } catch(n) {
                    return null
                }
            };
            return function(e) {
                var i = t();
                if (i && i.loadXML(e) && !i.parseError.errorCode) return i.documentElement;
                else return null
            }
        } ();
        e.__getStyleValue = function() {
            var t = /opacity\s*=\s*([\d]+)/i;
            var i = {
                opacity: function(e) {
                    var i = 0;
                    if (t.test(e.filter || "")) i = parseFloat(RegExp.$1) / 100;
                    return i
                }
            };
            return function(t, n) {
                var r = t.currentStyle,
                s = i[n];
                if (s) return s(r);
                else return r[e.__getStyleName(n)] || ""
            }
        } ();
        e.__setStyleValue = function() {
            var t = {
                opacity: function(e, t) {
                    e.style.filter = "alpha(opacity=" + 100 * t + ")"
                }
            };
            return function(i, n, r) {
                var s = t[n];
                if (s) s(i, r);
                else i.style[e.__getStyleName(n)] = r
            }
        } ();
        e.__appendCSSText = function(e, t) {
            var i = e.styleSheet,
            n = i.rules.length,
            r = t.split(/[\{\}]/);
            i.addRule(r[0], r[1], n);
            return i.rules[n]
        }
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "3.0") I$(11,
    function() {
        e.__getAttribute = e.__getAttribute._$aop(null,
        function(e) {
            var t = e.args;
            if ("maxlength" == t[1] && 2147483647 == e.value) e.value = null
        })
    });
    if ("trident" === t._$KERNEL.engine && t._$KERNEL.release <= "2.0") I$(12,
    function() {
        e.__fullScreen = function(e, t) {
            var i = e.style;
            i.width = t.scrollWidth + "px";
            i.height = t.scrollHeight + "px"
        };
        e.__mask = function() {
            var t = {};
            e.__unmask = function(e) {
                var i = e.id,
                n = t[i];
                if (n) {
                    delete t[i];
                    n.parentNode.removeChild(n)
                }
            };
            return function(e) {
                var i = e.id,
                n = t[i];
                if (!n) {
                    n = document.createElement("iframe");
                    n.style.position = "absolute";
                    t[i] = n
                }
                var r = n.style,
                s = e.style;
                r.top = (parseInt(s.top) || 0) + "px";
                r.left = (parseInt(s.left) || 0) + "px";
                r.width = e.offsetWidth + "px";
                r.height = e.offsetHeight + "px";
                e.insertAdjacentElement("beforeBegin", n);
                return n
            }
        } ()
    });
    if ("gecko" === t._$KERNEL.engine) I$(13,
    function() {
        if (!t._$SUPPORT.css3d) t._$SUPPORT.css3d = "MozPerspective" in document.body.style;
        if (! ("insertAdjacentElement" in document.body)) HTMLElement.prototype.insertAdjacentElement = function(e, t) {
            if (e && t) switch (e) {
            case "beforeEnd":
                this.appendChild(t);
                return;
            case "beforeBegin":
                this.parentNode.insertBefore(t, this);
                return;
            case "afterBegin":
                !this.firstChild ? this.appendChild(t) : this.insertBefore(t, this.firstChild);
                return;
            case "afterEnd":
                !this.nextSibling ? this.parentNode.appendChild(t) : this.parentNode.insertBefore(t, this.nextSibling);
                return
            }
        };
        if (! ("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText",
            function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText",
            function(e) {
                this.textContent = e
            })
        }
    });
    return e
},
"13114b299f27ca45402ff0ccc9122807", "b4448d35d10d290252e905174939b60a", "f46be3347a20bfdd40810d04c5816b16");
I$("4c563cfb767e6eff2573caba9105d3e5",
function(e, t, i, n, r, s, a, o, _, c) {
    var u = {},
    f, d = {},
    h = {},
    l = document.createDocumentFragment();
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    a.dump = function() {
        return {
            pool: d,
            dirty: h,
            fragment: l
        }
    };
    a._$id = u._$id = function(e) {
        e = a._$get(e);
        if (e) {
            var t = e.id ? e.id: "auto-id-" + i._$uniqueID();
            if (! ("id" in e)) d[t] = e;
            e.id = t;
            if (!a._$get(t)) h[t] = e;
            return t
        }
    };
    a._$get = function(e) {
        var t = d["" + e];
        if (t) return t;
        if (!i._$isString(e) && !i._$isNumber(e)) return e;
        var t = document.getElementById(e);
        if (!t) t = s.__getElementById(l, e);
        if (t) delete h[e];
        return t || h[e]
    };
    a._$getChildren = u._$getChildren = function(e, t) {
        e = a._$get(e);
        if (!e) return null;
        var n = s.__getChildren(e);
        if (t) i._$reverseEach(n,
        function(e, i, n) {
            if (!a._$hasClassName(e, t)) n.splice(i, 1)
        });
        return n
    };
    a._$getByClassName = u._$getByClassName = function(e, t) {
        e = a._$get(e);
        return ! e ? null: s.__getElementsByClassName(e, t.trim())
    };
    a._$getSibling = u._$getSibling = function() {
        var e = function() {
            return ! 0
        };
        return function(t, n) {
            t = a._$get(t);
            if (!t) return null;
            var r = {
                backward: !1,
                filter: e
            };
            if (i._$isFunction(n)) r.filter = n;
            else r = i._$fetch(r, n);
            var o = r.backward ? s.__previousSibling: s.__nextSibling;
            for (; (t = o(t)) && !r.filter(t););
            return t
        }
    } ();
    a._$getScrollViewPort = function(e) {
        e = a._$get(e);
        if (e) {
            e = e.parentNode;
            for (; e && !(e.scrollHeight > e.clientHeight);) e = e.parentNode;
            if (e) return e
        }
        var t = document.body.scrollHeight,
        i = document.documentElement.scrollHeight;
        return i >= t ? document.documentElement: document.body
    };
    a._$getPageBox = function() {
        var e = function(e) {
            var t = 0;
            i._$forEach(e,
            function(e) {
                if (e) if (!t) t = e;
                else t = Math.min(t, e)
            });
            return t
        };
        var t = [{
            main: "scroll",
            sub: ["Top", "Left"],
            func: function(e, t, i) {
                return Math.max(t["scroll" + e], i["scroll" + e])
            }
        },
        {
            main: "client",
            sub: ["Width", "Height"],
            func: function(t, i, n) {
                return e([i["client" + t], i["offset" + t], n["client" + t], n["offset" + t]])
            }
        },
        {
            main: "scroll",
            sub: ["Width", "Height"],
            func: function(e, t, i, n) {
                return Math.max(n["client" + e], t["scroll" + e], i["scroll" + e])
            }
        }];
        return function(e) {
            var n = {},
            r = e || document,
            s = r.body,
            a = r.documentElement;
            i._$forEach(t,
            function(e) {
                var t = e.main;
                i._$forEach(e.sub,
                function(i) {
                    n[t + i] = e.func(i, s, a, n)
                })
            });
            return n
        }
    } ();
    a._$getMaxBox = function(e, t) {
        var n = i._$merge({},
        e),
        r = t.width / t.height,
        s = e.width / e.height;
        if (r > s && e.height > t.height) {
            n.height = t.height;
            n.width = n.height * s
        }
        if (r < s && e.width > t.width) {
            n.width = t.width;
            n.height = n.width / s
        }
        return n
    };
    a._$scrollTo = u._$scrollTo = function(e) {
        var t = a._$offset(e);
        window.scrollTo(t.x, t.y)
    };
    a._$align = function() {
        var e = /\s+/;
        var t = {
            left: function() {
                return 0
            },
            center: function(e, t) {
                return (e.width - t.width) / 2
            },
            right: function(e, t) {
                return e.width - t.width
            },
            top: function() {
                return 0
            },
            middle: function(e, t) {
                return (e.height - t.height) / 2
            },
            bottom: function(e, t) {
                return e.height - t.height
            }
        };
        return function(i, n, r) {
            var s = {},
            a = (r || "").split(e),
            o = t[a[1]] || t.middle,
            _ = t[a[0]] || t.center;
            s.top = o(i, n);
            s.left = _(i, n);
            return s
        }
    } ();
    a._$offset = u._$offset = function() {
        var e = function(e) {
            return e == document.body || e == document.documentElement
        };
        return function(t, i) {
            t = a._$get(t);
            if (!t) return null;
            i = a._$get(i) || null;
            var n = t,
            r = {
                x: 0,
                y: 0
            },
            s,
            o,
            _;
            for (; n && n != i;) {
                s = e(n) || n == t;
                o = s ? 0 : n.scrollLeft;
                _ = parseInt(a._$getStyle(n, "borderLeftWidth")) || 0;
                r.x += n.offsetLeft + _ - o;
                o = s ? 0 : n.scrollTop;
                _ = parseInt(a._$getStyle(n, "borderTopWidth")) || 0;
                r.y += n.offsetTop + _ - o;
                n = n.offsetParent
            }
            return r
        }
    } ();
    a._$fullScreen = u._$fullScreen = function(e) {
        e = a._$get(e);
        if (e) s.__fullScreen(e, a._$getPageBox())
    };
    a._$mask = u._$mask = function(e) {
        e = a._$get(e);
        if (e) {
            a._$id(e);
            return s.__mask(e)
        }
        return null
    };
    a._$unmask = u._$unmask = function(e) {
        e = a._$get(e);
        if (e) {
            a._$id(e);
            return s.__unmask(e)
        }
        return null
    };
    a._$create = function() {
        var e = {
            a: {
                href: "#",
                hideFocus: !0
            },
            style: {
                type: "text/css"
            },
            link: {
                type: "text/css",
                rel: "stylesheet"
            },
            iframe: {
                frameBorder: 0
            },
            script: {
                defer: !0,
                type: "text/javascript"
            }
        };
        return function(t, n, r) {
            var s = document.createElement(t),
            o = e[t.toLowerCase()];
            i._$merge(s, o);
            if (n) s.className = n;
            r = a._$get(r);
            if (r) r.appendChild(s);
            else if (!o) l.appendChild(s);
            return s
        }
    } ();
    a._$createXFrame = function() {
        var e = function() {
            if (location.hostname == document.domain) return "about:blank";
            else return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var t = function(e) {
            e = e.trim();
            if (!e) return a._$create("iframe");
            var t;
            try {
                t = document.createElement('<iframe name="' + e + '"></iframe>');
                t.frameBorder = 0
            } catch(i) {
                t = a._$create("iframe");
                t.name = e
            }
            return t
        };
        return function(r) {
            r = r || o;
            var s = t(r.name || "");
            if (!r.visible) s.style.display = "none";
            if (i._$isFunction(r.onload)) n._$addEvent(s, "load",
            function(e) {
                if (s.src) {
                    n._$clearEvent(s, "load");
                    r.onload(e)
                }
            });
            var _ = r.parent;
            if (i._$isFunction(_)) try {
                _(s)
            } catch(c) {} else(a._$get(_) || document.body).appendChild(s);
            var u = r.src || e();
            window.setTimeout(function() {
                s.src = u
            },
            0);
            return s
        }
    } ();
    a._$remove = u._$remove = function() {
        var e = {
            img: function(e) {
                e.src = t._$BLANK_IMAGE
            },
            iframe: function(e) {
                e.src = "about:blank"
            }
        };
        var r = function(t, n) {
            if (n) {
                if (t.getElementsByTagName) i._$forEach(t.getElementsByTagName(n), r)
            } else {
                var s = (t.tagName || "").toLowerCase(),
                a = e[s];
                if (a) a(t)
            }
        };
        return function(e) {
            e = a._$get(e);
            if (e) {
                if (!arguments[1]) n._$clearEvent(e);
                r(e);
                r(e, "img");
                r(e, "iframe");
                if (e.parentNode) e.parentNode.removeChild(e)
            }
        }
    } ();
    a._$removeByEC = u._$removeByEC = function(e) {
        e = a._$get(e);
        if (e) try {
            l.appendChild(e)
        } catch(t) {
            console.error(t)
        }
    };
    a._$clearChildren = u._$clearChildren = function(e) {
        e = a._$get(e);
        if (e) i._$reverseEach(e.childNodes,
        function(e) {
            a._$remove(e)
        })
    };
    a._$wrapInline = u._$wrapInline = function() {
        var e, t = /\s+/;
        var i = function() {
            if (!e) {
                e = a._$pushCSSText(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
                a._$dumpCSSText()
            }
        };
        return function(n, r) {
            n = a._$get(n);
            if (!n) return null;
            i();
            r = r || o;
            var s = n.parentNode;
            if (!a._$hasClassName(s, e)) {
                s = a._$create("span", e);
                n.insertAdjacentElement("beforeBegin", s);
                s.appendChild(n)
            }
            var _ = r.nid || "",
            c = a._$getByClassName(s, _ || e + "-show")[0];
            if (!c) {
                var u = ((r.clazz || "") + " " + _).trim();
                u = e + "-show" + (!u ? "": " ") + u;
                c = a._$create(r.tag || "span", u);
                s.appendChild(c)
            }
            var u = r.clazz;
            if (u) {
                u = (u || "").trim().split(t)[0] + "-parent";
                a._$addClassName(s, u)
            }
            return c
        }
    } ();
    a._$dataset = u._$dataset = function(e, t, n) {
        var r = a._$id(e);
        if (!r) return null;
        if (i._$isString(t)) return s.__dataset(a._$get(e), t, n);
        if (i._$isObject(t)) {
            var o = {};
            i._$forIn(t,
            function(e, t) {
                o[t] = a._$dataset(r, t, e)
            });
            return o
        }
        if (i._$isArray(t)) {
            var o = {};
            i._$forEach(t,
            function(e) {
                o[e] = a._$dataset(r, e)
            });
            return o
        }
        return null
    };
    a._$attr = u._$attr = function(e, t, i) {
        e = a._$get(e);
        if (!e) return "";
        if (void 0 !== i && e.setAttribute) e.setAttribute(t, i);
        return s.__getAttribute(e, t)
    };
    a._$html2node = function() {
        var e = /<(.*?)(?=\s|>)/i,
        t = {
            li: "ul",
            tr: "tbody",
            td: "tr",
            th: "tr",
            option: "select"
        };
        return function(i) {
            var n;
            if (e.test(i)) n = t[(RegExp.$1 || "").toLowerCase()] || "";
            var r = a._$create(n || "div");
            r.innerHTML = i;
            var s = a._$getChildren(r);
            return s.length > 1 ? r: s[0]
        }
    } ();
    a._$dom2xml = u._$dom2xml = function(e) {
        e = a._$get(e);
        return ! e ? "": s.__serializeDOM2XML(e)
    };
    a._$xml2dom = function(e) {
        e = (e || "").trim();
        return ! e ? null: s.__parseDOMFromXML(e)
    };
    a._$dom2object = u._$dom2object = function(e, t) {
        t = t || {};
        e = a._$get(e);
        if (!e) return t;
        var n = e.tagName.toLowerCase(),
        r = a._$getChildren(e);
        if (!r || !r.length) {
            t[n] = e.textContent || e.text || "";
            return t
        }
        var s = {};
        t[n] = s;
        i._$forEach(r,
        function(e) {
            a._$dom2object(e, s)
        });
        return t
    };
    a._$xml2object = function(e) {
        try {
            return a._$dom2object(a._$xml2dom(e))
        } catch(t) {
            return null
        }
    };
    a._$text2type = function() {
        var e = {
            xml: function(e) {
                return a._$xml2dom(e)
            },
            json: function(e) {
                try {
                    return JSON.parse(e)
                } catch(t) {
                    return null
                }
            },
            dft: function(e) {
                return e
            }
        };
        return function(t, i) {
            i = (i || "").toLowerCase();
            return (e[i] || e.dft)(t || "")
        }
    } ();
    a._$style = u._$style = function(e, t) {
        e = a._$get(e);
        if (e) i._$loop(t,
        function(t, i) {
            a._$setStyle(e, i, t)
        })
    };
    a._$setStyle = u._$setStyle = function(e, t, i) {
        e = a._$get(e);
        if (e) s.__setStyleValue(e, t, s.__processCSSText(i))
    };
    a._$getStyle = u._$getStyle = function(e, t) {
        e = a._$get(e);
        return ! e ? "": s.__getStyleValue(e, t)
    };
    a._$addScript = function(e) {
        try {
            e = e.trim();
            if (e) return new Function(e)()
        } catch(t) {
            console.error(t.message);
            console.error(t.stack)
        }
    };
    a._$addStyle = function() {
        var e = /[\s\r\n]+/gi;
        return function(t) {
            t = (t || "").replace(e, " ").trim();
            var i = null;
            if (t) {
                i = a._$create("style");
                document.head.appendChild(i);
                s.__injectCSSText(i, s.__processCSSText(t))
            }
            return i
        }
    } ();
    a._$pushCSSText = function() {
        var e = /#<(.*?)>/g,
        t = +new Date;
        return function(t, n) {
            if (!f) f = [];
            var r = "auto-" + i._$uniqueID(),
            s = i._$merge({
                uispace: r
            },
            n);
            f.push(t.replace(e,
            function(e, t) {
                return s[t] || e
            }));
            return r
        }
    } ();
    a._$dumpCSSText = function() {
        if (f) {
            a._$addStyle(f.join(" "));
            f = null
        }
    };
    a._$appendCSSText = u._$appendCSSText = function(e, t) {
        e = a._$get(e);
        return ! e ? null: s.__appendCSSText(e, s.__processCSSText(t))
    };
    a._$addClassName = u._$addClassName = function(e, t) {
        e = a._$get(e);
        if (e) s.__processClassName(e, "add", t)
    };
    a._$delClassName = u._$delClassName = function(e, t) {
        e = a._$get(e);
        if (e) s.__processClassName(e, "remove", t)
    };
    a._$replaceClassName = u._$replaceClassName = function(e, t, i) {
        e = a._$get(e);
        if (e) s.__processClassName(e, "replace", t, i)
    };
    a._$hasClassName = u._$hasClassName = function(e, t) {
        e = a._$get(e);
        if (e) return s.__hasClassName(e, t);
        else return ! 1
    };
    a._$matrix = function(e) {
        e = (e || "").trim();
        return s.__getCSSMatrix(e)
    };
    a._$css3d = u._$css3d = function(e, t, i) {
        e = a._$get(e);
        if (e) {
            var n = s.__processTransformValue(t, i);
            if (n) a._$setStyle(e, "transform", n)
        }
    };
    r._$merge(u);
    if (!0) e.copy(e.P("nej.e"), a);
    return a
},
"9693d84387adb23be03bb7122d0b801b", "0422c728598f21c429a55e0bdddeb380", "f46be3347a20bfdd40810d04c5816b16", "7214a135f5e14d9b78ea74e4de768e85", "5ee5c01e7d48ffc2b247c899939ea5a3", "7050a4c8c3bef73ff473d83f6c83b44f");
I$("8dba95a690ae256ada6319336b0cf4d6",
function(e, t, i, n, r, s, a, o) {
    var _;
    r._$$EventTarget = t._$klass();
    _ = r._$$EventTarget.prototype;
    r._$$EventTarget._$allocate = function(e) {
        e = e || {};
        var t = !!this.__pool && this.__pool.shift();
        if (!t) {
            t = new this(e);
            this.__inst__ = (this.__inst__ || 0) + 1
        }
        t.__reset(e);
        return t
    };
    r._$$EventTarget._$recycle = function() {
        var e = function(e, t, i) {
            e._$recycle();
            i.splice(t, 1)
        };
        return function(t) {
            if (!t) return null;
            if (!n._$isArray(t)) {
                if (! (t instanceof this)) {
                    var i = t.constructor;
                    if (i._$recycle) i._$recycle(t);
                    return null
                }
                if (t == this.__instance) delete this.__instance;
                if (t == this.__inctanse) delete this.__inctanse;
                t.__destroy();
                if (!this.__pool) this.__pool = [];
                if (n._$indexOf(this.__pool, t) < 0) this.__pool.push(t);
                return null
            }
            n._$reverseEach(t, e, this)
        }
    } ();
    r._$$EventTarget._$getInstance = function(e) {
        if (!this.__instance) this.__instance = this._$allocate(e);
        return this.__instance
    };
    r._$$EventTarget._$getInstanceWithReset = function(e, t) {
        if (t && this.__inctanse) {
            this.__inctanse._$recycle();
            delete this.__inctanse
        }
        if (!this.__inctanse) this.__inctanse = this._$allocate(e);
        else this.__inctanse.__reset(e);
        return this.__inctanse
    };
    _.__init = function() {
        this.__events = {};
        this.__events_dom = {};
        this.id = n._$uniqueID()
    };
    _.__reset = function(e) {
        this._$batEvent(e)
    };
    _.__destroy = function() {
        this._$clearEvent();
        this.__doClearDomEvent()
    };
    _.__doInitDomEvent = function() {
        var e = function(e) {
            if (e && !(e.length < 3)) {
                this.__events_dom["de-" + n._$uniqueID()] = e;
                i._$addEvent.apply(i, e)
            }
        };
        return function(t) {
            n._$forEach(t, e, this)
        }
    } ();
    _.__doClearDomEvent = function() {
        var e = function(e, t, n) {
            delete n[t];
            i._$delEvent.apply(i, e)
        };
        return function() {
            n._$loop(this.__events_dom, e)
        }
    } ();
    _.__doClearComponent = function(e) {
        e = e || a;
        n._$loop(this,
        function(t, i, n) {
            if (t && t._$recycle && !e(t)) {
                delete n[i];
                t._$recycle()
            }
        })
    };
    _._$recycle = function() {
        this.constructor._$recycle(this)
    };
    _._$hasEvent = function(e) {
        var e = (e || "").toLowerCase(),
        t = this.__events[e];
        return !! t && t !== a
    };
    _._$delEvent = function(e, t) {
        var e = (e || "").toLowerCase(),
        i = this.__events[e];
        if (n._$isArray(i)) {
            n._$reverseEach(i,
            function(e, i, n) {
                if (e == t) n.splice(i, 1)
            });
            if (!i.length) delete this.__events[e]
        } else if (i == t) delete this.__events[e]
    };
    _._$setEvent = function(e, t) {
        if (e && n._$isFunction(t)) this.__events[e.toLowerCase()] = t
    };
    _._$batEvent = function() {
        var e = function(e, t) {
            this._$setEvent(t, e)
        };
        return function(t) {
            n._$loop(t, e, this)
        }
    } ();
    _._$clearEvent = function() {
        var e = function(e, t) {
            this._$clearEvent(t)
        };
        return function(t) {
            var t = (t || "").toLowerCase();
            if (t) delete this.__events[t];
            else n._$loop(this.__events, e, this)
        }
    } ();
    _._$addEvent = function(e, t) {
        if (e && n._$isFunction(t)) {
            e = e.toLowerCase();
            var i = this.__events[e];
            if (i) {
                if (!n._$isArray(i)) this.__events[e] = [i];
                this.__events[e].push(t)
            } else this.__events[e] = t
        }
    };
    _._$dispatchEvent = function(e) {
        var e = (e || "").toLowerCase(),
        t = this.__events[e];
        if (t) {
            var i = o.slice.call(arguments, 1);
            if (n._$isArray(t)) n._$forEach(t,
            function(e) {
                if (!1) e.apply(this, i);
                else try {
                    e.apply(this, i)
                } catch(t) {
                    console.error(t.message);
                    console.error(t.stack)
                }
            },
            this);
            else t.apply(this, i)
        }
    };
    if (!0) {
        r._$$Event = r._$$EventTarget;
        e.copy(e.P("nej.ut"), r)
    }
    return r
},
"9693d84387adb23be03bb7122d0b801b", "835a8693a54280be3882f53f1be76e30", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16"); !
function() {
    if ("undefined" == typeof TrimPath) {
        TrimPath = {};
        if ("undefined" != typeof exports) TrimPath = exports
    }
    var e = {},
    t = [],
    i = /\s+/g,
    n = +new Date,
    r,
    s,
    a;
    var o = function() {
        var e = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
        t = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;]/,
        i = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
        n = /^new\s+/,
        r = /['"]/;
        var s = function(t) {
            if (!e.test(t)) {
                t = t.split(".")[0].trim();
                if (t && !r.test(t)) {
                    t = t.replace(n, "");
                    try {
                        if (i.test(t)) return;
                        a[t] = 1
                    } catch(s) {}
                }
            }
        };
        return function(i) {
            i = i || "";
            if (i && !e.test(i)) {
                var n = i.split(t);
                for (var r = 0,
                a = n.length; r < a; r++) s(n[r])
            }
        }
    } ();
    var _ = function(e) {
        if ("in" != e[2]) throw "bad for loop statement: " + e.join(" ");
        t.push(e[1]);
        o(e[3]);
        return "var __HASH__" + e[1] + " = " + e[3] + "," + e[1] + "," + e[1] + "_count=0;if (!!__HASH__" + e[1] + ")for(var " + e[1] + "_key in __HASH__" + e[1] + "){" + e[1] + " = __HASH__" + e[1] + "[" + e[1] + "_key];if (typeof(" + e[1] + ')=="function") continue;' + e[1] + "_count++;"
    };
    var c = function() {
        var e = t[t.length - 1];
        return "}; if(!__HASH__" + e + "||!" + e + "_count){"
    };
    var u = function() {
        t.pop();
        return "};"
    };
    var f = function(e) {
        if ("as" != e[2]) throw "bad for list loop statement: " + e.join(" ");
        var t = e[1].split("..");
        if (t.length > 1) {
            o(t[0]);
            o(t[1]);
            return "for(var " + e[3] + "," + e[3] + "_index=0," + e[3] + "_beg=" + t[0] + "," + e[3] + "_end=" + t[1] + "," + e[3] + "_length=parseInt(" + e[3] + "_end-" + e[3] + "_beg+1);" + e[3] + "_index<" + e[3] + "_length;" + e[3] + "_index++){" + e[3] + " = " + e[3] + "_beg+" + e[3] + "_index;"
        } else {
            o(e[1]);
            return "for(var __LIST__" + e[3] + " = " + e[1] + "," + e[3] + "," + e[3] + "_index=0," + e[3] + "_length=__LIST__" + e[3] + ".length;" + e[3] + "_index<" + e[3] + "_length;" + e[3] + "_index++){" + e[3] + " = __LIST__" + e[3] + "[" + e[3] + "_index];"
        }
    };
    var d = function(e) {
        if (e && e.length) {
            e.shift();
            var t = e[0].split("(")[0];
            return "var " + t + " = function" + e.join("").replace(t, "") + "{var __OUT=[];"
        }
    };
    var h = function(e) {
        if (!e[1]) throw "bad include statement: " + e.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var l = function(e, t) {
        o(t.slice(1).join(" "));
        return e
    };
    var N = function(e) {
        return l("if(", e)
    };
    var p = function(e) {
        return l("}else if(", e)
    };
    var v = function(e) {
        return l("var ", e)
    };
    s = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: {
            "if": {
                pfix: N,
                sfix: "){",
                pmin: 1
            },
            "else": {
                pfix: "}else{"
            },
            elseif: {
                pfix: p,
                sfix: "){",
                pdft: "true"
            },
            "/if": {
                pfix: "}"
            },
            "for": {
                pfix: _,
                pmin: 3
            },
            forelse: {
                pfix: c
            },
            "/for": {
                pfix: u
            },
            list: {
                pfix: f,
                pmin: 3
            },
            "/list": {
                pfix: "};"
            },
            "break": {
                pfix: "break;"
            },
            "var": {
                pfix: v,
                sfix: ";"
            },
            macro: {
                pfix: d
            },
            "/macro": {
                pfix: 'return __OUT.join("");};'
            },
            trim: {
                pfix: function() {
                    r = !0
                }
            },
            "/trim": {
                pfix: function() {
                    r = null
                }
            },
            inline: {
                pfix: h,
                pmin: 1,
                sfix: "));}"
            }
        },
        ext: {
            seed: function(e) {
                return (e || "") + "" + n
            },
            "default": function(e, t) {
                return e || t
            }
        }
    };
    var m = function() {
        var e = /\\([\{\}])/g;
        return function(t, n) {
            t = t.replace(e, "$1");
            var r = t.slice(1, -1).split(i),
            a = s.def[r[0]];
            if (a) {
                if (a.pmin && a.pmin >= r.length) throw "Statement needs more parameters:" + t;
                n.push(a.pfix && "string" != typeof a.pfix ? a.pfix(r) : a.pfix || "");
                if (a.sfix) {
                    if (r.length <= 1) {
                        if (a.pdft) n.push(a.pdft)
                    } else for (var o = 1,
                    _ = r.length; o < _; o++) {
                        if (o > 1) n.push(" ");
                        n.push(r[o])
                    }
                    n.push(a.sfix)
                }
            } else $(t, n)
        }
    } ();
    var g = function(e, t) {
        if (e && e.length) if (1 != e.length) {
            var i = e.pop().split(":");
            t.push("__MDF['" + i.shift() + "'](");
            g(e, t);
            if (i.length > 0) {
                var n = i.join(":");
                o(n);
                t.push("," + n)
            }
            t.push(")")
        } else {
            var r = e.pop();
            o(r);
            t.push("" == r ? '""': r)
        }
    };
    var $ = function(e, t) {
        if (e) {
            var i = e.split("\n");
            if (i && i.length) for (var n = 0,
            s = i.length,
            a; n < s; n++) {
                a = i[n];
                if (r) {
                    a = a.trim();
                    if (!a) continue
                }
                b(a, t);
                if (r && n < s - 1) t.push("__OUT.push('\\n');")
            }
        }
    };
    var b = function() {
        var e = /\|\|/g,
        t = /#@@#/g;
        return function(i, n) {
            var r = "}",
            s = -1,
            a = i.length,
            o, _, c, u, f;
            for (; s + r.length < a;) {
                o = "${";
                _ = "}";
                c = i.indexOf(o, s + r.length);
                if (c < 0) break;
                if ("%" == i.charAt(c + 2)) {
                    o = "${%";
                    _ = "%}"
                }
                u = i.indexOf(_, c + o.length);
                if (u < 0) break;
                C(i.substring(s + r.length, c), n);
                f = i.substring(c + o.length, u).replace(e, "#@@#").split("|");
                for (var d = 0,
                h = f.length; d < h; f[d] = f[d].replace(t, "||"), d++);
                n.push("__OUT.push(");
                g(f, n);
                n.push(");");
                r = _;
                s = u
            }
            C(i.substring(s + r.length), n)
        }
    } ();
    var C = function() {
        var e = {
            r: /\n|\\|\'/g,
            "\n": "\\n",
            "\\": "\\\\",
            "'": "\\'"
        };
        var t = function(t) {
            return (t || "").replace(e.r,
            function(t) {
                return e[t] || t
            })
        };
        return function(e, i) {
            if (e) i.push("__OUT.push('" + t(e) + "');")
        }
    } ();
    var z = function() {
        var e = /\t/g,
        t = /\n/g,
        n = /\r\n?/g;
        var r = function(e, t) {
            var i = e.indexOf("}", t + 1);
            for (;
            "\\" == e.charAt(i - 1);) i = e.indexOf("}", i + 1);
            return i
        };
        var o = function() {
            var e = [],
            t = arguments[0];
            for (var i in t) {
                i = (i || "").trim();
                if (i) e.push(i + "=$v('" + i + "')");
                else;
            }
            return e.length > 0 ? "var " + e.join(",") + ";": ""
        };
        return function(_) {
            a = {};
            _ = _.replace(n, "\n").replace(e, "    ");
            var c = ["if(!__CTX) return '';", ""];
            c.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            c.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            c.push("__OUT=[];");
            var u = -1,
            f = _.length;
            var d, h, l, N, p, v, g, b;
            for (; u + 1 < f;) {
                d = u;
                d = _.indexOf("{", d + 1);
                for (; d >= 0;) {
                    h = r(_, d);
                    l = _.substring(d, h);
                    N = l.match(s.blk);
                    if (N) {
                        p = N[1].length + 1;
                        v = _.indexOf("}", d + p);
                        if (v >= 0) {
                            g = v - d - p <= 0 ? "{/" + N[1] + "}": l.substr(p + 1);
                            p = _.indexOf(g, v + 1);
                            if (p >= 0) {
                                $(_.substring(u + 1, d), c);
                                b = _.substring(v + 1, p);
                                switch (N[1]) {
                                case "cdata":
                                    C(b, c);
                                    break;
                                case "minify":
                                    C(b.replace(t, " ").replace(i, " "), c);
                                    break;
                                case "eval":
                                    if (b) c.push("__OUT.push((function(){" + b + "})());")
                                }
                                d = u = p + g.length - 1
                            }
                        }
                    } else if ("$" != _.charAt(d - 1) && "\\" != _.charAt(d - 1) && 0 == l.substr("/" == l.charAt(1) ? 2 : 1).search(s.tag)) break;
                    d = _.indexOf("{", d + 1)
                }
                if (d < 0) break;
                h = r(_, d);
                if (h < 0) break;
                $(_.substring(u + 1, d), c);
                m(_.substring(d, h + 1), c);
                u = h
            }
            $(_.substring(u + 1), c);
            c.push(';return __OUT.join("");');
            c[1] = o(a);
            a = null;
            return new Function("__CTX", "__MDF", c.join(""))
        }
    } ();
    TrimPath.seed = function() {
        return n
    };
    TrimPath.merge = function() {
        var t = {};
        TrimPath.dump = function() {
            return {
                func: t,
                text: e
            }
        };
        return function(i, n, r) {
            try {
                n = n || {};
                if (!t[i] && !e[i]) return "";
                if (!t[i]) {
                    t[i] = z(e[i]);
                    delete e[i]
                }
                if (r) for (var a in s.ext) if (!r[a]) r[a] = s.ext[a];
                return t[i](n, r || s.ext)
            } catch(o) {
                return o.message || ""
            }
        }
    } ();
    TrimPath.parse = function() {
        var t = +new Date;
        return function(i, n) {
            if (!i) return "";
            n = n || "ck-" + t++;
            if (null != e[n]) {
                console.warn("jst template overwrited with key " + n);
                console.debug("old template content: " + e[n].replace(/\n/g, " "));
                console.debug("new template content: " + i.replace(/\n/g, " "));
            }
            e[n] = i;
            return n
        }
    } ()
} ();
I$("220fe029157a5e39da06b616143c612b",
function(e, t, i, n, r, s, a, o, _) {
    var c = {};
    s._$seed = TrimPath.seed;
    s._$get = function() {
        var e = function(e) {
            return ! s._$getTextTemplate ? "": s._$getTextTemplate(e)
        };
        return function(i, n, r) {
            n = n || {};
            n.inline = e;
            r = t._$merge({},
            c, r);
            r.rand = t._$uniqueID;
            r.format = t._$format;
            r.escape = t._$escape;
            r.inline = e;
            return TrimPath.merge(i, n, r)
        }
    } ();
    s._$add = function(e, t) {
        if (!e) return "";
        var n, r = i._$get(e);
        if (r) {
            n = r.id;
            e = r.value || r.innerText;
            if (!t) i._$remove(r)
        }
        return TrimPath.parse(e, n)
    };
    s._$addTemplate = function(e, t) {
        return TrimPath.parse(e, t)
    };
    s._$render = function(e, t, n, r) {
        e = i._$get(e);
        if (e) e.innerHTML = s._$get(t, n, r)
    };
    s._$extend = function(e) {
        t._$merge(c, e)
    };
    n._$merge({
        _$render: s._$render
    });
    if (!0) {
        var u = e.P("nej.e");
        u._$addHtmlTemplate = s._$add;
        u._$getHtmlTemplate = s._$get;
        u._$getHtmlTemplateSeed = s._$seed;
        u._$renderHtmlTemplate = s._$render;
        u._$registJSTExt = s._$extend
    }
    return s
},
"9693d84387adb23be03bb7122d0b801b", "f46be3347a20bfdd40810d04c5816b16", "4c563cfb767e6eff2573caba9105d3e5", "5ee5c01e7d48ffc2b247c899939ea5a3", "c8056cb10063f59bf34dda40ce6b2ad6");
I$("d6daea392dc29ec881afae6ea009dc4e",
function(e, t, i, n, r, s, a, o, _, c) {
    var u;
    a._$$CustomEvent = t._$klass();
    u = a._$$CustomEvent._$extend(s._$$EventTarget);
    u.__init = function() {
        this.__cache = {};
        this.__super()
    };
    u.__reset = function(e) {
        this.__super(e);
        this.__element = i._$get(e.element) || window;
        this.__doEventInit(e.event);
        this.__doEventAPIEnhance();
        this._$dispatchEvent("oninit")
    };
    u.__destroy = function() {
        var e = function(e, t, i) {
            if (!r._$isArray(e)) r._$safeDelete(this.__element, t);
            delete i[t]
        };
        return function() {
            this.__super();
            r._$loop(this.__cache, e, this);
            delete this.__element
        }
    } ();
    u.__isDelegate = function(e, t) {
        e = i._$get(e);
        return ! (e !== this.__element || t && !this.__cache["on" + t])
    };
    u.__doEventInit = function(e) {
        if (!r._$isString(e)) {
            if (r._$isArray(e)) r._$forEach(e, this.__doEventInit, this)
        } else {
            var t = "on" + e;
            if (!this.__cache[t]) this.__cache[t] = this.__doEventDispatch._$bind(this, e);
            this.__doEventBind(e)
        }
    };
    u.__doEventBind = function(e) {
        var t = "on" + e,
        i = this.__element[t],
        n = this.__cache[t];
        if (i != n) {
            this.__doEventDelete(e);
            if (i && i != _) this.__doEventAdd(e, i);
            this.__element[t] = n
        }
    };
    u.__doEventAdd = function(e, t, i) {
        var n = this.__cache[e];
        if (!n) {
            n = [];
            this.__cache[e] = n
        }
        if (r._$isFunction(t)) ! i ? n.push(t) : n.unshift(t)
    };
    u.__doEventDelete = function(e, t) {
        var i = this.__cache[e];
        if (i && i.length) if (t) r._$reverseEach(i,
        function(e, i, n) {
            if (t === e) {
                n.splice(i, 1);
                return ! 0
            }
        });
        else delete this.__cache[e]
    };
    u.__doEventDispatch = function(e, t) {
        t = t || {
            noargs: !0
        };
        if (t == o) t = {};
        t.type = e;
        this._$dispatchEvent("ondispatch", t);
        if (!t.stopped) r._$forEach(this.__cache[e],
        function(e) {
            if (!1) e(t);
            else try {
                e(t)
            } catch(i) {
                console.error(i.message);
                console.error(i.stack)
            }
        })
    };
    u.__doEventAPIEnhance = function() {
        var t = function(e) {
            var t = e.args,
            i = t[1].toLowerCase();
            if (this.__isDelegate(t[0], i)) {
                e.stopped = !0;
                this.__doEventBind(i);
                this.__doEventAdd(i, t[2], t[3]);
                this._$dispatchEvent("oneventadd", {
                    type: i,
                    listener: t[2]
                })
            }
        };
        var i = function(e) {
            var t = e.args,
            i = t[1].toLowerCase();
            if (this.__isDelegate(t[0], i)) {
                e.stopped = !0;
                this.__doEventDelete(i, t[2])
            }
        };
        var s = function(e) {
            var t = e.args,
            i = (t[1] || "").toLowerCase();
            if (this.__isDelegate(t[0])) {
                if (i) {
                    this.__doEventDelete(i);
                    return
                }
                r._$loop(this.__cache,
                function(e, t) {
                    if (r._$isArray(e)) this.__doEventDelete(t)
                },
                this)
            }
        };
        var a = function(e) {
            var t = e.args,
            i = t[1].toLowerCase();
            if (this.__isDelegate(t[0], i)) {
                e.stopped = !0;
                t[0]["on" + i].apply(t[0], t.slice(2))
            }
        };
        return function() {
            if (!this.__enhanced) {
                this.__enhanced = !0;
                n._$addEvent = n._$addEvent._$aop(t._$bind(this));
                n._$delEvent = n._$delEvent._$aop(i._$bind(this));
                n._$clearEvent = n._$clearEvent._$aop(s._$bind(this));
                n._$dispatchEvent = n._$dispatchEvent._$aop(a._$bind(this));
                if (!0) e.copy(e.P("nej.v"), n)
            }
        }
    } ();
    if (!0) e.copy(e.P("nej.ut"), a);
    return a
},
"9693d84387adb23be03bb7122d0b801b", "835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "8dba95a690ae256ada6319336b0cf4d6");
I$("b55808bf2558a2ae565aaebc67eef75d",
function(e, t, i, n, r, s, a, o, _, c) {
    var u, f = 6e4;
    a._$$LoaderAbstract = t._$klass();
    u = a._$$LoaderAbstract._$extend(s._$$EventTarget);
    u.__init = function() {
        this.__super();
        this.__qopt = {
            onerror: this.__onQueueError._$bind(this),
            onload: this.__onQueueLoaded._$bind(this)
        };
        if (!this.constructor.__cache) this.constructor.__cache = {
            loaded: {}
        }
    };
    u.__reset = function(e) {
        this.__super(e);
        this.__version = e.version;
        this.__timeout = e.timeout;
        this.__qopt.version = this.__version;
        this.__qopt.timeout = this.__timeout
    };
    u.__delLoadData = function(e) {
        delete this.constructor.__cache[e]
    };
    u.__getLoadData = function(e) {
        return this.constructor.__cache[e]
    };
    u.__setLoadData = function(e, t) {
        this.constructor.__cache[e] = t
    };
    u.__getRequest = _;
    u.__doClearRequest = function(e) {
        n._$clearEvent(e)
    };
    u.__doRequest = function(e) {
        e.src = this.__url;
        document.head.appendChild(e)
    };
    u.__doClear = function() {
        var e = this.__getLoadData(this.__url);
        if (e) {
            window.clearTimeout(e.timer);
            this.__doClearRequest(e.request);
            delete e.bind;
            delete e.timer;
            delete e.request;
            this.__delLoadData(this.__url);
            this.__getLoadData("loaded")[this.__url] = !0
        }
    };
    u.__doCallback = function(e) {
        var t = this.__getLoadData(this.__url);
        if (t) {
            var i = t.bind;
            this.__doClear();
            if (i && i.length > 0) {
                var n;
                for (; i.length;) {
                    n = i.shift();
                    try {
                        n._$dispatchEvent(e, arguments[1])
                    } catch(r) {
                        if (!1) throw r;
                        console.error(r.message);
                        console.error(r.stack)
                    }
                    n._$recycle()
                }
            }
        }
    };
    u.__onError = function(e) {
        this.__doCallback("onerror", e)
    };
    u.__onLoaded = function() {
        this.__doCallback("onload")
    };
    u.__doLoadQueue = function(e) {
        this.constructor._$allocate(this.__qopt)._$load(e)
    };
    u.__onQueueCheck = function(e) {
        var t = this.__getLoadData(this.__key);
        if (t) {
            if (e) t.error++;
            t.loaded++;
            if (! (t.loaded < t.total)) {
                this.__delLoadData(this.__key);
                this._$dispatchEvent(t.error > 0 ? "onerror": "onload")
            }
        }
    };
    u.__onQueueError = function(e) {
        this.__onQueueCheck(!0)
    };
    u.__onQueueLoaded = function() {
        this.__onQueueCheck()
    };
    u._$load = function(e) {
        e = r._$absolute(e);
        if (e) {
            this.__url = e;
            if (this.__version) this.__url += (this.__url.indexOf("?") < 0 ? "?": "&") + this.__version;
            if (!this.__getLoadData("loaded")[this.__url]) {
                var t = this.__getLoadData(this.__url),
                s;
                if (t) {
                    t.bind.unshift(this);
                    t.timer = window.clearTimeout(t.timer)
                } else {
                    s = this.__getRequest();
                    t = {
                        request: s,
                        bind: [this]
                    };
                    this.__setLoadData(this.__url, t);
                    n._$addEvent(s, "load", this.__onLoaded._$bind(this));
                    n._$addEvent(s, "error", this.__onError._$bind(this, {
                        code: i._$CODE_ERRSERV,
                        message: "无法加载指定资源文件[" + this.__url + "]！"
                    }))
                }
                if (0 != this.__timeout) t.timer = window.setTimeout(this.__onError._$bind(this, {
                    code: i._$CODE_TIMEOUT,
                    message: "指定资源文件[" + this.__url + "]载入超时！"
                }), this.__timeout || f);
                if (s) this.__doRequest(s);
                this._$dispatchEvent("onloading")
            } else {
                try {
                    this._$dispatchEvent("onload")
                } catch(a) {
                    if (!1) throw a;
                    console.error(a.message);
                    console.error(a.stack)
                }
                this._$recycle()
            }
        } else this._$dispatchEvent("onerror", {
            code: i._$CODE_NOTASGN,
            message: "请指定要载入的资源地址！"
        })
    };
    u._$queue = function(e) {
        if (e && e.length) {
            this.__key = r._$uniqueID();
            var t = {
                error: 0,
                loaded: 0,
                total: e.length
            };
            this.__setLoadData(this.__key, t);
            r._$forEach(e,
            function(e, i) {
                if (e) this.__doLoadQueue(e);
                else t.total--
            },
            this);
            this._$dispatchEvent("onloading")
        } else this._$dispatchEvent("onerror", {
            code: i._$CODE_NOTASGN,
            message: "请指定要载入的资源队列！"
        })
    };
    return a
},
"9693d84387adb23be03bb7122d0b801b", "835a8693a54280be3882f53f1be76e30", "0422c728598f21c429a55e0bdddeb380", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "8dba95a690ae256ada6319336b0cf4d6");
I$("5ddddcf362ea5fe3ae95f7810b77a7d2",
function(e, t, i, n, r, s) {
    i._$cookie = function() {
        var e = new Date,
        i = +e,
        r = 864e5;
        var s = function(e) {
            var t = document.cookie,
            i = "\\b" + e + "=",
            n = t.search(i);
            if (n < 0) return "";
            n += i.length - 2;
            var r = t.indexOf(";", n);
            if (r < 0) r = t.length;
            return t.substring(n, r) || ""
        };
        return function(a, o) {
            if (void 0 === o) return s(a);
            if (t._$isString(o)) {
                if (o) {
                    document.cookie = a + "=" + o + ";";
                    return o
                }
                o = {
                    expires: -100
                }
            }
            o = o || n;
            var _ = a + "=" + (o.value || "") + ";";
            delete o.value;
            if (void 0 !== o.expires) {
                e.setTime(i + o.expires * r);
                o.expires = e.toGMTString()
            }
            _ += t._$object2string(o, ";");
            document.cookie = _
        }
    } ();
    if (!0) e.copy(e.P("nej.j"), i);
    return i
},
"9693d84387adb23be03bb7122d0b801b", "f46be3347a20bfdd40810d04c5816b16"); !
function() {
    var e = !0,
    t = null; !
    function(i) {
        function n(i) {
            if ("bug-string-char-index" == i) return "a" != "a" [0];
            var n, s = "json" == i;
            if (s || "json-stringify" == i || "json-parse" == i) {
                if ("json-stringify" == i || s) {
                    var a = c.stringify,
                    _ = "function" == typeof a && u;
                    if (_) { (n = function() {
                            return 1
                        }).toJSON = n;
                        try {
                            _ = "0" === a(0) && "0" === a(new Number) && '""' == a(new String) && a(r) === o && a(o) === o && a() === o && "1" === a(n) && "[1]" == a([n]) && "[null]" == a([o]) && "null" == a(t) && "[null,null,null]" == a([o, r, t]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == a({
                                a: [n, e, !1, t, "\0\b\n\f\r\t"]
                            }) && "1" === a(t, n) && "[\n 1,\n 2\n]" == a([1, 2], t, 1) && '"-271821-04-20T00:00:00.000Z"' == a(new Date(( - 864e13))) && '"+275760-09-13T00:00:00.000Z"' == a(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == a(new Date(( - 621987552e5))) && '"1969-12-31T23:59:59.999Z"' == a(new Date(( - 1)))
                        } catch(f) {
                            _ = !1
                        }
                    }
                    if (!s) return _
                }
                if ("json-parse" == i || s) {
                    i = c.parse;
                    if ("function" == typeof i) try {
                        if (0 === i("0") && !i(!1)) {
                            n = i('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var d = 5 == n.a.length && 1 === n.a[0];
                            if (d) {
                                try {
                                    d = !i('"\t"')
                                } catch(h) {}
                                if (d) try {
                                    d = 1 !== i("01")
                                } catch(l) {}
                            }
                        }
                    } catch(N) {
                        d = !1
                    }
                    if (!s) return d
                }
                return _ && d
            }
        }
        var r = {}.toString,
        s, a, o, _ = "function" == typeof define && define.amd,
        c = "object" == typeof exports && exports;
        c || _ ? "object" == typeof JSON && JSON ? c ? (c.stringify = JSON.stringify, c.parse = JSON.parse) : c = JSON: _ && (c = i.JSON = {}) : c = i.JSON || (i.JSON = {});
        var u = new Date(( - 0xc782b5b800cec));
        try {
            u = -109252 == u.getUTCFullYear() && 0 === u.getUTCMonth() && 1 === u.getUTCDate() && 10 == u.getUTCHours() && 37 == u.getUTCMinutes() && 6 == u.getUTCSeconds() && 708 == u.getUTCMilliseconds()
        } catch(f) {}
        if (!n("json")) {
            var d = n("bug-string-char-index");
            if (!u) var h = Math.floor,
            l = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
            N = function(e, t) {
                return l[t] + 365 * (e - 1970) + h((e - 1969 + (t = +(t > 1))) / 4) - h((e - 1901 + t) / 100) + h((e - 1601 + t) / 400)
            };
            if (! (s = {}.hasOwnProperty)) s = function(e) {
                var i = {},
                n;
                if ((i.__proto__ = t, i.__proto__ = {
                    toString: 1
                },
                i).toString != r) s = function(e) {
                    var i = this.__proto__,
                    e = e in (this.__proto__ = t, this);
                    this.__proto__ = i;
                    return e
                };
                else {
                    n = i.constructor;
                    s = function(e) {
                        var t = (this.constructor || n).prototype;
                        return e in this && !(e in t && this[e] === t[e])
                    }
                }
                i = t;
                return s.call(this, e)
            };
            var p = {
                "boolean": 1,
                number: 1,
                string: 1,
                undefined: 1
            };
            a = function(e, i) {
                var n = 0,
                a, o, _; (a = function() {
                    this.valueOf = 0
                }).prototype.valueOf = 0;
                o = new a;
                for (_ in o) s.call(o, _) && n++;
                a = o = t;
                if (n) n = 2 == n ?
                function(e, t) {
                    var i = {},
                    n = "[object Function]" == r.call(e),
                    a;
                    for (a in e) ! (n && "prototype" == a) && !s.call(i, a) && (i[a] = 1) && s.call(e, a) && t(a)
                }: function(e, t) {
                    var i = "[object Function]" == r.call(e),
                    n,
                    a;
                    for (n in e) ! (i && "prototype" == n) && s.call(e, n) && !(a = "constructor" === n) && t(n); (a || s.call(e, n = "constructor")) && t(n)
                };
                else {
                    o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    n = function(e, t) {
                        var i = "[object Function]" == r.call(e),
                        n,
                        a;
                        if (a = !i) if (a = "function" != typeof e.constructor) {
                            a = typeof e.hasOwnProperty;
                            a = "object" == a ? !!e.hasOwnProperty: !p[a]
                        }
                        a = a ? e.hasOwnProperty: s;
                        for (n in e) ! (i && "prototype" == n) && a.call(e, n) && t(n);
                        for (i = o.length; n = o[--i]; a.call(e, n) && t(n));
                    }
                }
                n(e, i)
            };
            if (!n("json-stringify")) {
                var v = {
                    92 : "\\\\",
                    34 : '\\"',
                    8 : "\\b",
                    12 : "\\f",
                    10 : "\\n",
                    13 : "\\r",
                    9 : "\\t"
                },
                m = function(e, t) {
                    return ("000000" + (t || 0)).slice( - e)
                },
                g = function(e) {
                    var t = '"',
                    i = 0,
                    n = e.length,
                    r = n > 10 && d,
                    s;
                    for (r && (s = e.split("")); i < n; i++) {
                        var a = e.charCodeAt(i);
                        switch (a) {
                        case 8:
                        case 9:
                        case 10:
                        case 12:
                        case 13:
                        case 34:
                        case 92:
                            t += v[a];
                            break;
                        default:
                            if (a < 32) {
                                t += "\\u00" + m(2, a.toString(16));
                                break
                            }
                            t += r ? s[i] : d ? e.charAt(i) : e[i]
                        }
                    }
                    return t + '"'
                },
                $ = function(i, n, _, c, u, f, d) {
                    var l = n[i],
                    p,
                    v,
                    b,
                    C,
                    z,
                    D,
                    E,
                    y,
                    w;
                    try {
                        l = n[i]
                    } catch(T) {}
                    if ("object" == typeof l && l) {
                        p = r.call(l);
                        if ("[object Date]" == p && !s.call(l, "toJSON")) if (l > -1 / 0 && l < 1 / 0) {
                            if (N) {
                                b = h(l / 864e5);
                                for (p = h(b / 365.2425) + 1970 - 1; N(p + 1, 0) <= b; p++);
                                for (v = h((b - N(p, 0)) / 30.42); N(p, v + 1) <= b; v++);
                                b = 1 + b - N(p, v);
                                C = (l % 864e5 + 864e5) % 864e5;
                                z = h(C / 36e5) % 24;
                                D = h(C / 6e4) % 60;
                                E = h(C / 1e3) % 60;
                                C %= 1e3
                            } else {
                                p = l.getUTCFullYear();
                                v = l.getUTCMonth();
                                b = l.getUTCDate();
                                z = l.getUTCHours();
                                D = l.getUTCMinutes();
                                E = l.getUTCSeconds();
                                C = l.getUTCMilliseconds()
                            }
                            l = (p <= 0 || p >= 1e4 ? (p < 0 ? "-": "+") + m(6, p < 0 ? -p: p) : m(4, p)) + "-" + m(2, v + 1) + "-" + m(2, b) + "T" + m(2, z) + ":" + m(2, D) + ":" + m(2, E) + "." + m(3, C) + "Z"
                        } else l = t;
                        else if ("function" == typeof l.toJSON && ("[object Number]" != p && "[object String]" != p && "[object Array]" != p || s.call(l, "toJSON"))) l = l.toJSON(i)
                    }
                    _ && (l = _.call(n, i, l));
                    if (l === t) return "null";
                    p = r.call(l);
                    if ("[object Boolean]" == p) return "" + l;
                    if ("[object Number]" == p) return l > -1 / 0 && l < 1 / 0 ? "" + l: "null";
                    if ("[object String]" == p) return g("" + l);
                    if ("object" == typeof l) {
                        for (i = d.length; i--;) if (d[i] === l) throw TypeError();
                        d.push(l);
                        y = [];
                        n = f;
                        f += u;
                        if ("[object Array]" == p) {
                            v = 0;
                            for (i = l.length; v < i; w || (w = e), v++) {
                                p = $(v, l, _, c, u, f, d);
                                y.push(p === o ? "null": p)
                            }
                            i = w ? u ? "[\n" + f + y.join(",\n" + f) + "\n" + n + "]": "[" + y.join(",") + "]": "[]"
                        } else {
                            a(c || l,
                            function(t) {
                                var i = $(t, l, _, c, u, f, d);
                                i !== o && y.push(g(t) + ":" + (u ? " ": "") + i);
                                w || (w = e)
                            });
                            i = w ? u ? "{\n" + f + y.join(",\n" + f) + "\n" + n + "}": "{" + y.join(",") + "}": "{}"
                        }
                        d.pop();
                        return i
                    }
                };
                c.stringify = function(e, t, i) {
                    var n, s, a;
                    if ("function" == typeof t || "object" == typeof t && t) if ("[object Function]" == r.call(t)) s = t;
                    else if ("[object Array]" == r.call(t)) {
                        a = {};
                        for (var o = 0,
                        _ = t.length,
                        c; o < _; c = t[o++], ("[object String]" == r.call(c) || "[object Number]" == r.call(c)) && (a[c] = 1));
                    }
                    if (i) if ("[object Number]" == r.call(i)) {
                        if ((i -= i % 1) > 0) {
                            n = "";
                            for (i > 10 && (i = 10); n.length < i; n += " ");
                        }
                    } else "[object String]" == r.call(i) && (n = i.length <= 10 ? i: i.slice(0, 10));
                    return $("", (c = {},
                    c[""] = e, c), s, a, n, "", [])
                }
            }
            if (!n("json-parse")) {
                var b = String.fromCharCode,
                C = {
                    92 : "\\",
                    34 : '"',
                    47 : "/",
                    98 : "\b",
                    116 : "\t",
                    110 : "\n",
                    102 : "\f",
                    114 : "\r"
                },
                z,
                D,
                E = function() {
                    z = D = t;
                    throw SyntaxError()
                },
                y = function() {
                    for (var i = D,
                    n = i.length,
                    r, s, a, o, _; z < n;) {
                        _ = i.charCodeAt(z);
                        switch (_) {
                        case 9:
                        case 10:
                        case 13:
                        case 32:
                            z++;
                            break;
                        case 123:
                        case 125:
                        case 91:
                        case 93:
                        case 58:
                        case 44:
                            r = d ? i.charAt(z) : i[z];
                            z++;
                            return r;
                        case 34:
                            r = "@";
                            for (z++; z < n;) {
                                _ = i.charCodeAt(z);
                                if (_ < 32) E();
                                else if (92 == _) {
                                    _ = i.charCodeAt(++z);
                                    switch (_) {
                                    case 92:
                                    case 34:
                                    case 47:
                                    case 98:
                                    case 116:
                                    case 110:
                                    case 102:
                                    case 114:
                                        r += C[_];
                                        z++;
                                        break;
                                    case 117:
                                        s = ++z;
                                        for (a = z + 4; z < a; z++) {
                                            _ = i.charCodeAt(z);
                                            _ >= 48 && _ <= 57 || _ >= 97 && _ <= 102 || _ >= 65 && _ <= 70 || E()
                                        }
                                        r += b("0x" + i.slice(s, z));
                                        break;
                                    default:
                                        E()
                                    }
                                } else {
                                    if (34 == _) break;
                                    _ = i.charCodeAt(z);
                                    for (s = z; _ >= 32 && 92 != _ && 34 != _;) _ = i.charCodeAt(++z);
                                    r += i.slice(s, z)
                                }
                            }
                            if (34 == i.charCodeAt(z)) {
                                z++;
                                return r
                            }
                            E();
                        default:
                            s = z;
                            if (45 == _) {
                                o = e;
                                _ = i.charCodeAt(++z)
                            }
                            if (_ >= 48 && _ <= 57) {
                                for (48 == _ && (_ = i.charCodeAt(z + 1), _ >= 48 && _ <= 57) && E(); z < n && (_ = i.charCodeAt(z), _ >= 48 && _ <= 57); z++);
                                if (46 == i.charCodeAt(z)) {
                                    for (a = ++z; a < n && (_ = i.charCodeAt(a), _ >= 48 && _ <= 57); a++);
                                    a == z && E();
                                    z = a
                                }
                                _ = i.charCodeAt(z);
                                if (101 == _ || 69 == _) {
                                    _ = i.charCodeAt(++z); (43 == _ || 45 == _) && z++;
                                    for (a = z; a < n && (_ = i.charCodeAt(a), _ >= 48 && _ <= 57); a++);
                                    a == z && E();
                                    z = a
                                }
                                return + i.slice(s, z)
                            }
                            o && E();
                            if ("true" == i.slice(z, z + 4)) {
                                z += 4;
                                return e
                            }
                            if ("false" == i.slice(z, z + 5)) {
                                z += 5;
                                return ! 1
                            }
                            if ("null" == i.slice(z, z + 4)) {
                                z += 4;
                                return t
                            }
                            E()
                        }
                    }
                    return "$"
                },
                w = function(t) {
                    var i, n;
                    "$" == t && E();
                    if ("string" == typeof t) {
                        if ("@" == (d ? t.charAt(0) : t[0])) return t.slice(1);
                        if ("[" == t) {
                            for (i = [];; n || (n = e)) {
                                t = y();
                                if ("]" == t) break;
                                if (n) if ("," == t) {
                                    t = y();
                                    "]" == t && E()
                                } else E();
                                "," == t && E();
                                i.push(w(t))
                            }
                            return i
                        }
                        if ("{" == t) {
                            for (i = {};; n || (n = e)) {
                                t = y();
                                if ("}" == t) break;
                                if (n) if ("," == t) {
                                    t = y();
                                    "}" == t && E()
                                } else E(); ("," == t || "string" != typeof t || "@" != (d ? t.charAt(0) : t[0]) || ":" != y()) && E();
                                i[t.slice(1)] = w(y())
                            }
                            return i
                        }
                        E()
                    }
                    return t
                },
                T = function(e, t, i) {
                    i = S(e, t, i);
                    i === o ? delete e[t] : e[t] = i
                },
                S = function(e, t, i) {
                    var n = e[t],
                    s;
                    if ("object" == typeof n && n) if ("[object Array]" == r.call(n)) for (s = n.length; s--;) T(n, s, i);
                    else a(n,
                    function(e) {
                        T(n, e, i)
                    });
                    return i.call(e, t, n)
                };
                c.parse = function(e, i) {
                    var n, s;
                    z = 0;
                    D = "" + e;
                    n = w(y());
                    "$" != y() && E();
                    z = D = t;
                    return i && "[object Function]" == r.call(i) ? S((s = {},
                    s[""] = n, s), "", i) : n
                }
            }
        }
        _ && define(function() {
            return c
        })
    } (this);
    return JSON
} ();
I$("266d3ced13a59762f01eb35318f027ca",
function(_m, _p, _o, _f, _r) {
    if ("trident" === _m._$KERNEL.engine && "2.0" == _m._$KERNEL.release) I$(18,
    function() {
        JSON.parse = function() {
            var _isSafeJSON = function(e) {
                return ! /[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(e.replace(/"(\\.|[^"\\])*"/g, ""))
            };
            return JSON.parse._$aop(function(_event) {
                var _str = _event.args[0] || "";
                if (_str.length >= 5e5) {
                    _event.stopped = !0;
                    _event.value = eval("(" + _str + ")")
                }
            })
        } ()
    });
    return JSON
},
"b4448d35d10d290252e905174939b60a");
I$("3c8a64a88c06a6e66e2ce29081f2f522",
function() {
    return JSON
},
"266d3ced13a59762f01eb35318f027ca");
I$("26fe08dac946c4761a4cef59c54e8bb3",
function(e, t, i, n, r, s, a, o, _, c, u, f) {
    var d;
    _._$$ProxyAbstract = e._$klass();
    d = _._$$ProxyAbstract._$extend(s._$$EventTarget);
    d.__reset = function(e) {
        this.__super(e);
        this.__request = t._$fetch({
            url: "",
            sync: !1,
            cookie: !1,
            type: "text",
            method: "GET",
            timeout: 6e4
        },
        e);
        var i = n._$get("csrf");
        if (i.cookie && i.param) {
            var s = encodeURIComponent(i.param) + "=" + encodeURIComponent(a._$cookie(i.cookie) || ""),
            o = this.__request.url.indexOf("?") < 0 ? "?": "&";
            this.__request.url += o + s
        }
        this.__headers = e.headers || {};
        var _ = this.__headers[r._$HEAD_CT];
        if (null == _) this.__headers[r._$HEAD_CT] = r._$HEAD_CT_FORM
    };
    d.__destroy = function() {
        this.__super();
        delete this.__rkey;
        delete this.__request;
        delete this.__headers
    };
    d.__onLoadRequest = function(e) {
        var t = e.status;
        if (t != -1) if (0 == ("" + t).indexOf("2")) this._$dispatchEvent("onload", i._$text2type(e.result, this.__request.type));
        else this._$dispatchEvent("onerror", {
            data: t,
            result: e.result,
            code: r._$CODE_ERRSERV,
            message: "服务器返回异常状态[" + t + "]!"
        });
        else this._$dispatchEvent("onerror", {
            code: r._$CODE_TIMEOUT,
            message: "请求[" + this.__request.url + "]超时！"
        })
    };
    d.__doSendRequest = u;
    d.__getResponseHeader = u;
    d._$send = function(e) {
        var t = this.__request.url;
        if (t) try {
            this.__request.data = null == e ? null: e;
            var i = {
                request: this.__request,
                headers: this.__headers
            };
            try {
                this._$dispatchEvent("onbeforerequest", i)
            } catch(n) {
                console.error(n.message);
                console.error(n.stack)
            }
            this.__doSendRequest(i)
        } catch(s) {
            this._$dispatchEvent("onerror", {
                code: r._$CODE_ERRSERV,
                message: "请求[" + t + "]失败:" + s.message + "！"
            })
        } else this._$dispatchEvent("onerror", {
            code: r._$CODE_NOTASGN,
            message: "没有输入请求地址！"
        })
    };
    d._$abort = u;
    d._$header = function(e) {
        if (!t._$isArray(e)) return this.__getResponseHeader(e) || "";
        var i = {};
        t._$forEach(e,
        function(e) {
            i[e] = this._$header(e)
        },
        this);
        return i
    };
    return _
},
"835a8693a54280be3882f53f1be76e30", "f46be3347a20bfdd40810d04c5816b16", "4c563cfb767e6eff2573caba9105d3e5", "9633224ba4b427f29c01a7e19892e42e", "0422c728598f21c429a55e0bdddeb380", "8dba95a690ae256ada6319336b0cf4d6", "5ddddcf362ea5fe3ae95f7810b77a7d2", "3c8a64a88c06a6e66e2ce29081f2f522");
I$("fae27696119bf0f7e5625e503c98c1eb",
function(e, t, i, n) {
    e.__getXMLHttpRequest = function() {
        return new XMLHttpRequest
    };
    return e
});
I$("5fa066c12b3ff34212cdb4f2817a0bf6",
function(e, t, i, n, r, s, a) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "2.0") I$(19,
    function() {
        t.__getXMLHttpRequest = function() {
            var e = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
            return function() {
                var t = null;
                i._$forIn(e,
                function(e) {
                    try {
                        t = new ActiveXObject(e);
                        return ! 0
                    } catch(i) {}
                });
                return t
            }
        } ()
    });
    return t
},
"b4448d35d10d290252e905174939b60a", "fae27696119bf0f7e5625e503c98c1eb", "f46be3347a20bfdd40810d04c5816b16");
I$("59e99425d23453acd2a67dc0b54caf83",
function(e, t, i, n, r, s, a, o, _) {
    var c;
    s._$$ProxyXHR = i._$klass();
    c = s._$$ProxyXHR._$extend(e._$$ProxyAbstract);
    c.__destroy = function() {
        this.__super();
        window.clearTimeout(this.__timer);
        delete this.__timer;
        try {
            this.__xhr.onreadystatechange = o;
            this.__xhr.abort()
        } catch(e) {}
        delete this.__xhr
    };
    c.__doSendRequest = function() {
        var e = function(e, t) {
            this.__xhr.setRequestHeader(t, e)
        };
        var i = function(e) {
            var i = [];
            t._$reverseEach(e.getElementsByTagName("input"),
            function(e) {
                if ("file" == e.type) if (e.name) {
                    if (e.files.length > 1) {
                        t._$forEach(e.files,
                        function(t) {
                            i.push({
                                name: e.name,
                                file: t
                            })
                        });
                        e.parentNode.removeChild(e)
                    }
                } else e.parentNode.removeChild(e)
            });
            return i.length > 0 ? i: null
        };
        return function(s) {
            var a = s.request,
            o = s.headers;
            this.__xhr = r.__getXMLHttpRequest();
            if (o[n._$HEAD_CT] === n._$HEAD_CT_FILE) {
                delete o[n._$HEAD_CT];
                this.__xhr.upload.onprogress = this.__onStateChange._$bind(this, 1);
                if ("FORM" === a.data.tagName) {
                    var _ = i(a.data);
                    a.data = new FormData(a.data);
                    t._$forEach(_,
                    function(e) {
                        var i = e.file;
                        a.data.append(e.name || i.name || "file-" + t._$uniqueID(), i)
                    })
                }
            }
            this.__xhr.onreadystatechange = this.__onStateChange._$bind(this, 2);
            if (0 !== a.timeout) this.__timer = window.setTimeout(this.__onStateChange._$bind(this, 3), a.timeout);
            this.__xhr.open(a.method, a.url, !a.sync);
            t._$loop(o, e, this);
            if (this.__request.cookie && "withCredentials" in this.__xhr) this.__xhr.withCredentials = !0;
            this.__xhr.send(a.data)
        }
    } ();
    c.__onStateChange = function(e) {
        switch (e) {
        case 1:
            this._$dispatchEvent("onuploading", arguments[1]);
            break;
        case 2:
            if (4 == this.__xhr.readyState) this.__onLoadRequest({
                status: this.__xhr.status,
                result: this.__xhr.responseText || ""
            });
            break;
        case 3:
            this.__onLoadRequest({
                status:
                -1
            })
        }
    };
    c.__getResponseHeader = function(e) {
        return ! this.__xhr ? "": this.__xhr.getResponseHeader(e)
    };
    c._$abort = function() {
        this.__onLoadRequest({
            status: 0
        })
    };
    return s
},
"26fe08dac946c4761a4cef59c54e8bb3", "f46be3347a20bfdd40810d04c5816b16", "835a8693a54280be3882f53f1be76e30", "0422c728598f21c429a55e0bdddeb380", "5fa066c12b3ff34212cdb4f2817a0bf6");
I$("faca90ebd86f52545db7b4dd8aa216ef",
function(e, t, i, n, r) {
    var s = this,
    a = e._$KERNEL.prefix.pro,
    o = e._$is("desktop") ? 80 : e._$is("ios") ? 50 : 30;
    t.__requestAnimationFrame = function() {
        var t = e._$is("android") ? null: s.requestAnimationFrame || s[a + "RequestAnimationFrame"];
        return function() {
            if (!t) t = function(e) {
                return window.setTimeout(function() {
                    try {
                        e( + new Date)
                    } catch(t) {}
                },
                1e3 / o)
            };
            return t.apply(this, arguments)
        }
    } ();
    t.__cancelAnimationFrame = function() {
        var t = e._$is("android") ? null: s.cancelAnimationFrame || s[a + "CancelAnimationFrame"];
        return function() {
            if (!t) t = function(e) {
                window.clearTimeout(e)
            };
            return t.apply(this, arguments)
        }
    } ();
    return t
},
"b4448d35d10d290252e905174939b60a");
I$("aa23af65e5043bd0c7b7f251be27ef0a",
function(e, t) {
    return e
},
"faca90ebd86f52545db7b4dd8aa216ef", "b4448d35d10d290252e905174939b60a");
I$("63e59d6e0732e48ff3115d6d2d3d59e9",
function(e, t, i, n, r, s) {
    i.requestAnimationFrame = function() {
        t.__requestAnimationFrame.apply(null, arguments)
    };
    i.cancelAnimationFrame = function() {
        t.__cancelAnimationFrame.apply(null, arguments)
    };
    if (!0) {
        if (!this.requestAnimationFrame) this.requestAnimationFrame = i.requestAnimationFrame;
        if (!this.cancelAnimationFrame) this.cancelAnimationFrame = i.cancelAnimationFrame
    }
    return i
},
"b4448d35d10d290252e905174939b60a", "aa23af65e5043bd0c7b7f251be27ef0a");
I$("03a8a9fa03456348181734b6aeddd1ed",
function(e, t, i, n, r) {
    t.__canFlashEventBubble = function(e) {
        return "transparent" != (e || "").toLowerCase()
    };
    return t
},
"b4448d35d10d290252e905174939b60a");
I$("9decba524bc7ad46353e9ea855114c0a",
function(e, t, i, n, r, s) {
    if ("trident" === t._$KERNEL.engine) I$(24,
    function() {
        e.__canFlashEventBubble = function(e) {
            return ! 0
        }
    });
    if ("webkit" === t._$KERNEL.engine) I$(25,
    function() {
        e.__canFlashEventBubble = function(e) {
            return ! 0
        }
    });
    return e
},
"03a8a9fa03456348181734b6aeddd1ed", "b4448d35d10d290252e905174939b60a");
I$("ea414380124b9b1b4c13604b4a400ce2", '{var hide  = defined("hidden")&&!!hidden}\n{var param = defined("params")&&params||NEJ.O}\n{var width = !hide?width:"1px",height = !hide?height:"1px"}\n{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}\n<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"\n        codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"\n        width = "${width|default:"100px"}"\n        height = "${height|default:"100px"}" id="${id}">\n    <param value="${src}" name="movie">\n    {for x in param}\n    <param value="${x}" name="${x_key}"/>\n    {/for}\n    <embed src="${src}" name="${id}"\n           width="${width|default:"100px"}"\n           height="${height|default:"100px"}"\n           pluginspage="http://www.adobe.com/go/getflashplayer"\n           type="application/x-shockwave-flash"\n           {for x in param}${x_key}="${x}" {/for}></embed>\n</object>\n{if hide}</div>{/if}');
I$("5e93b84983ed9ea70c4e068d248b8d0e",
function(e, t, i, n, r, s, a, o, _, c, u, f) {
    var d = r._$add(o);
    _._$flash = function() {
        var o = {},
        _, c = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(e) {
            var t = decodeURIComponent(e.target),
            i = e.type.toLowerCase();
            var n = o[t + "-tgt"];
            if (n && c.test(i)) f(n, e);
            var r = o[t + "-on" + i];
            if (r) {
                var s = "";
                try {
                    s = r(e)
                } catch(a) {}
                return s
            }
        };
        var u = function(e) {
            _ = document.title;
            var i = t._$get(e.parent) || document.body,
            n = r._$get(d, e);
            i.insertAdjacentHTML(!e.hidden ? "beforeEnd": "afterBegin", n)
        };
        var f = function(e, t) {
            var n = t.type.toLowerCase();
            s.requestAnimationFrame(function() {
                i._$dispatchEvent(e, n)
            })
        };
        var h = function(e) {
            return !! e && !!e.inited && !!e.inited()
        };
        var l = function(e) {
            var i = [document.embeds[e], t._$get(e), document[e], window[e]],
            r = n._$forIn(i, h),
            s = i[r],
            a = e + "-count";
            o[a]++;
            if (! (s || o[a] > 100)) window.setTimeout(l._$bind(null, e), 300);
            else {
                if (_) {
                    document.title = _;
                    _ = null
                }
                o[e](s);
                delete o[e];
                delete o[a]
            }
        };
        var N = function(e) {
            var i = e.id,
            r = e.params;
            if (!r) {
                r = {};
                e.params = r
            }
            var s = r.flashvars || "";
            s += (!s ? "": "&") + ("id=" + i);
            if (!e.hidden && (e.target || a.__canFlashEventBubble(r.wmode))) {
                var _ = t._$id(e.target) || t._$id(e.parent);
                o[i + "-tgt"] = _
            }
            r.flashvars = s;
            n._$loop(e,
            function(e, t) {
                if (n._$isFunction(e) && "onready" != t) o[i + "-" + t] = e
            })
        };
        return function(t) {
            t = e.X({},
            t);
            if (t.src) {
                var i = "_" + n._$uniqueID();
                t.id = i;
                N(t);
                u(t);
                if (t.onready) {
                    o[i] = t.onready;
                    o[i + "-count"] = 0;
                    l(i)
                }
            }
        }
    } ();
    if (!0) e.copy(e.P("nej.e"), _);
    return _
},
"9693d84387adb23be03bb7122d0b801b", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "220fe029157a5e39da06b616143c612b", "63e59d6e0732e48ff3115d6d2d3d59e9", "9decba524bc7ad46353e9ea855114c0a", "ea414380124b9b1b4c13604b4a400ce2");
I$("2ea2ebc1c6bb0551e2be446a0d0c72d7",
function(e, t, i, n, r, s, a, o, _) {
    var c, u = {},
    f = n._$uniqueID();
    this["ld" + f] = function(e, t) {
        var i = u[e];
        if (i) {
            delete u[e];
            i.__onLoadRequest({
                status: 200,
                result: t
            })
        }
    };
    this["er" + f] = function(e, t) {
        var i = u[e];
        if (i) {
            delete u[e];
            i.__onLoadRequest({
                status: t || 0
            })
        }
    };
    s._$$ProxyFlash = t._$klass();
    c = s._$$ProxyFlash._$extend(e._$$ProxyAbstract);
    c.__doSendRequest = function(e) {
        var t = u.flash;
        if (!n._$isArray(t)) if (t) {
            this.__rkey = n._$uniqueID();
            u[this.__rkey] = this;
            var s = n._$fetch({
                url: "",
                data: null,
                method: "GET"
            },
            e.request);
            s.key = this.__rkey;
            s.headers = e.headers;
            s.onerror = "cb.er" + f;
            s.onloaded = "cb.ld" + f;
            var a = i._$getFlashProxy(s.url);
            if (a) s.policyURL = a;
            t.request(s)
        } else {
            u.flash = [this.__doSendRequest._$bind(this, e)];
            r._$flash({
                hidden: !0,
                src: i._$get("ajax.swf"),
                onready: function(e) {
                    if (e) {
                        var t = u.flash;
                        u.flash = e;
                        n._$reverseEach(t,
                        function(e, t, i) {
                            try {
                                e()
                            } catch(n) {}
                        })
                    }
                }
            })
        } else t.push(this.__doSendRequest._$bind(this, e))
    };
    c._$abort = function() {
        delete u[this.__rkey];
        this.__onLoadRequest({
            status: 0
        })
    };
    return s
},
"26fe08dac946c4761a4cef59c54e8bb3", "835a8693a54280be3882f53f1be76e30", "9633224ba4b427f29c01a7e19892e42e", "f46be3347a20bfdd40810d04c5816b16", "5e93b84983ed9ea70c4e068d248b8d0e");
I$("eb7a63b7989281d99b36ce8629260d9b",
function(e, t, i, n) {
    e.__formatOrigin = function() {
        var e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(t) {
            t = t || "";
            if (e.test(t)) return RegExp.$1;
            else return "*"
        }
    } ();
    e.__formatPassData = function(e) {
        return e
    };
    e.__postMessage = function(i, n) {
        if (i.postMessage) {
            n = n || t;
            i.postMessage(e.__formatPassData(n.data), e.__formatOrigin(n.origin))
        }
    };
    return e
});
I$("421270831fdd278d7419db084a420e75",
function(e, t, i, n, r, s, a, o) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release >= "4.0" && e._$KERNEL.release <= "5.0") I$(14,
    function() {
        t.__formatPassData = function(e) {
            return JSON.stringify(e)
        }
    });
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "3.0") I$(15,
    function(e) {
        var r = "MSG|",
        a = [];
        var o = function() {
            var e = unescape(window.name || "").trim();
            if (e && 0 == e.indexOf(r)) {
                window.name = "";
                var s = i._$string2object(e.replace(r, ""), "|"),
                a = (s.origin || "").toLowerCase();
                if (!a || "*" == a || 0 == location.href.toLowerCase().indexOf(a)) n._$dispatchEvent(window, "message", {
                    data: JSON.parse(s.data || "null"),
                    source: window.frames[s.self] || s.self,
                    origin: t.__formatOrigin(s.ref || document.referrer)
                })
            }
        };
        var _ = function() {
            var e;
            var t = function(t, n, r) {
                if (i._$indexOf(e, t.w) < 0) {
                    e.push(t.w);
                    r.splice(n, 1);
                    t.w.name = t.d
                }
            };
            return function() {
                e = [];
                i._$reverseEach(a, t);
                e = null
            }
        } ();
        t.__postMessage = function() {
            var e = function(e) {
                var t = {};
                e = e || s;
                t.origin = e.origin || "";
                t.ref = location.href;
                t.self = e.source;
                t.data = JSON.stringify(e.data);
                return r + i._$object2string(t, "|", !0)
            };
            return function(t, i) {
                a.unshift({
                    w: t,
                    d: escape(e(i))
                })
            }
        } ();
        e._$$CustomEvent._$allocate({
            element: window,
            event: "message"
        });
        setInterval(_, 100);
        setInterval(o, 20)
    },
    "d6daea392dc29ec881afae6ea009dc4e", "3c8a64a88c06a6e66e2ce29081f2f522");
    return t
},
"b4448d35d10d290252e905174939b60a", "eb7a63b7989281d99b36ce8629260d9b", "f46be3347a20bfdd40810d04c5816b16", "7214a135f5e14d9b78ea74e4de768e85");
I$("614e962fa045f9cc3caa40e6c27a3570",
function(e, t, i, n, r, s, a, o) {
    r._$postMessage = function() {
        var e = window.name || "_parent",
        r = [];
        r["_top"] = window.top;
        r["_self"] = window;
        r["_parent"] = window.parent;
        return function(a, o) {
            if (t._$isString(a)) {
                a = r[a] || window.frames[a] || (i._$get(a) || s).contentWindow;
                if (!a) return
            }
            var _ = t._$fetch({
                data: null,
                origin: "*",
                source: e
            },
            o);
            n.__postMessage(a, _)
        }
    } ();
    if (!0) e.copy(e.P("nej.j"), r);
    return r
},
"9693d84387adb23be03bb7122d0b801b", "f46be3347a20bfdd40810d04c5816b16", "4c563cfb767e6eff2573caba9105d3e5", "421270831fdd278d7419db084a420e75");
I$("78e8e24cc625cd75e6772bb88e928686",
function(e, t, i, n, r, s, a, o, _, c, u) {
    var f, d = {};
    o._$$ProxyFrame = i._$klass();
    f = o._$$ProxyFrame._$extend(e._$$ProxyAbstract);
    f.__init = function() {
        var e = "NEJ-AJAX-DATA:",
        t = !1;
        var i = function(t) {
            var i = t.data;
            if (0 == i.indexOf(e)) {
                i = JSON.parse(i.replace(e, ""));
                var n = d[i.key];
                if (n) {
                    delete d[i.key];
                    i.result = decodeURIComponent(i.result || "");
                    n.__onLoadRequest(i)
                }
            }
        };
        var r = function() {
            if (!t) {
                t = !0;
                n._$addEvent(window, "message", i)
            }
        };
        return function() {
            this.__super();
            r()
        }
    } ();
    f.__doSendRequest = function(e) {
        var i = e.request,
        o = r._$getFrameProxy(i.url),
        _ = d[o];
        if (!t._$isArray(_)) if (_) {
            this.__rkey = t._$uniqueID();
            d[this.__rkey] = this;
            var c = t._$fetch({
                url: "",
                data: null,
                timeout: 0,
                method: "GET"
            },
            i);
            c.key = this.__rkey;
            c.headers = e.headers;
            a._$postMessage(d[o], {
                data: c
            })
        } else {
            d[o] = [this.__doSendRequest._$bind(this, e)];
            s._$createXFrame({
                src: o,
                visible: !1,
                onload: function(e) {
                    var i = d[o];
                    d[o] = n._$getElement(e).contentWindow;
                    t._$reverseEach(i,
                    function(e) {
                        try {
                            e()
                        } catch(t) {}
                    })
                }
            })
        } else _.push(this.__doSendRequest._$bind(this, e))
    };
    f._$abort = function() {
        delete d[this.__rkey];
        this.__onLoadRequest({
            status: 0
        })
    };
    return o
},
"26fe08dac946c4761a4cef59c54e8bb3", "f46be3347a20bfdd40810d04c5816b16", "835a8693a54280be3882f53f1be76e30", "7214a135f5e14d9b78ea74e4de768e85", "9633224ba4b427f29c01a7e19892e42e", "4c563cfb767e6eff2573caba9105d3e5", "614e962fa045f9cc3caa40e6c27a3570");
I$("a2ce5e70edd09716a06043941e94d70b",
function(e, t, i, n, r, s, a, o, _, c, u, f) {
    var d, h = {},
    l = "NEJ-UPLOAD-RESULT:";
    _._$$ProxyUpload = t._$klass();
    d = _._$$ProxyUpload._$extend(e._$$ProxyAbstract);
    d.__init = function() {
        var e = !1;
        var t = function(e) {
            var t = e.data;
            if (0 == t.indexOf(l)) {
                t = JSON.parse(t.replace(l, ""));
                var i = h[t.key];
                if (i) {
                    delete h[t.key];
                    i.__onLoadRequest(decodeURIComponent(t.result))
                }
            }
        };
        var i = function() {
            if (!e) {
                e = !0;
                n._$addEvent(window, "message", t)
            }
        };
        return function() {
            this.__super();
            i()
        }
    } ();
    d.__destroy = function() {
        this.__super();
        r._$remove(this.__frame);
        delete this.__frame;
        window.clearTimeout(this.__timer);
        delete this.__timer
    };
    d.__onLoadRequest = function(e) {
        try {
            var t = r._$text2type(e, this.__request.type);
            this._$dispatchEvent("onload", t)
        } catch(i) {
            this._$dispatchEvent("onerror", {
                code: s._$CODE_ERREVAL,
                message: e
            })
        }
    };
    d.__doSendRequest = function() {
        var e = function() {
            var e, t;
            try {
                var e = this.__frame.contentWindow.document.body,
                t = (e.innerText || e.textContent || "").trim();
                if (t.indexOf(l) >= 0 || e.innerHTML.indexOf(l) >= 0) return
            } catch(i) {
                return
            }
            this.__onLoadRequest(t)
        };
        var t = function(e, i, n) {
            a._$request(e, {
                type: "json",
                method: "POST",
                cookie: n,
                mode: parseInt(i) || 0,
                onload: function(r) {
                    if (this.__timer) {
                        this._$dispatchEvent("onuploading", r);
                        this.__timer = window.setTimeout(t._$bind(this, e, i, n), 1e3)
                    }
                }._$bind(this),
                onerror: function(r) {
                    if (this.__timer) this.__timer = window.setTimeout(t._$bind(this, e, i, n), 1e3)
                }._$bind(this)
            })
        };
        return function(a) {
            var o = a.request,
            _ = a.headers,
            u = o.data,
            f = i._$uniqueID();
            h[f] = this;
            u.target = f;
            u.method = "POST";
            u.enctype = s._$HEAD_CT_FILE;
            u.encoding = s._$HEAD_CT_FILE;
            var d = u.action || "",
            l = d.indexOf("?") <= 0 ? "?": "&";
            u.action = d + l + "_proxy_=form";
            this.__frame = r._$createXFrame({
                name: f,
                onload: function(i) {
                    var r = n._$getElement(i);
                    n._$addEvent(r, "load", e._$bind(this));
                    u.submit();
                    var s = (u.nej_query || c).value;
                    if (s) {
                        var a = (u.nej_mode || c).value,
                        o = "true" === (u.nej_cookie || c).value;
                        this.__timer = window.setTimeout(t._$bind(this, s, a, o), 100)
                    }
                }._$bind(this)
            })
        }
    } ();
    d._$abort = function() {
        this._$dispatchEvent("onerror", {
            code: s._$CODE_ERRABRT,
            message: "客户端终止文件上传"
        })
    };
    return _
},
"26fe08dac946c4761a4cef59c54e8bb3", "835a8693a54280be3882f53f1be76e30", "f46be3347a20bfdd40810d04c5816b16", "7214a135f5e14d9b78ea74e4de768e85", "4c563cfb767e6eff2573caba9105d3e5", "0422c728598f21c429a55e0bdddeb380", "af1197558820a3e8fe6fdeedfed54ea3", "614e962fa045f9cc3caa40e6c27a3570");
I$("0f51e1902ca9aebd2ce3da0a48d23c2f",
function(e, t, i, n, r, s, a, o) {
    r.__getProxyByMode = function(r, s, a) {
        var o = s ? {
            2 : n._$$ProxyUpload
        }: {
            2 : i._$$ProxyFrame,
            3 : t._$$ProxyFlash
        };
        return (o[r] || e._$$ProxyXHR)._$allocate(a)
    };
    return r
},
"59e99425d23453acd2a67dc0b54caf83", "2ea2ebc1c6bb0551e2be446a0d0c72d7", "78e8e24cc625cd75e6772bb88e928686", "a2ce5e70edd09716a06043941e94d70b");
I$("2f06d3d449e88d6ef704f3194a6aa4de",
function(e, t, i, n, r, s) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "5.0") I$(16,
    function() {
        t.__getProxyByMode = function() {
            var e = {
                0 : 2,
                1 : 3
            };
            return t.__getProxyByMode._$aop(function(t) {
                var i = t.args,
                n = i[0] || 0;
                i[0] = i[1] ? 2 : e[n] || n
            })
        } ()
    });
    return t
},
"b4448d35d10d290252e905174939b60a", "0f51e1902ca9aebd2ce3da0a48d23c2f");
I$("af1197558820a3e8fe6fdeedfed54ea3",
function(e, t, i, n, r, s, a, o, _, c) {
    var u = {},
    f = _;
    a._$abort = function(e) {
        var t = u[e];
        if (t) t.req._$abort()
    };
    a._$filter = function(e) {
        f = e || _
    };
    a._$request = function() {
        var e = (location.protocol + "//" + location.host).toLowerCase();
        var n = function(t) {
            var n = i._$url2origin(t);
            return !! n && n != e
        };
        var a = function(e) {
            return (e || o)[t._$HEAD_CT] == t._$HEAD_CT_FILE
        };
        var c = function(e) {
            var t = a(e.headers);
            if (!n(e.url) && !t) return r._$$ProxyXHR._$allocate(e);
            else return s.__getProxyByMode(e.mode, t, e)
        };
        var d = function(e, t) {
            var i = {
                data: t
            };
            var n = e.result.headers;
            if (n) i.headers = e.req._$header(n);
            return i
        };
        var h = function(e) {
            var t = u[e];
            if (t) {
                if (t.req) t.req._$recycle();
                delete u[e]
            }
        };
        var l = function(e, t) {
            var i = u[e];
            if (i) {
                var n = arguments[2];
                if ("onload" == t && i.result) n = d(i, n);
                h(e);
                var r = {
                    type: t,
                    result: n
                };
                f(r);
                if (!r.stopped)(i[t] || _)(r.result)
            }
        };
        var N = function(e, t) {
            l(e, "onload", t)
        };
        var p = function(e, t) {
            l(e, "onerror", t)
        };
        var v = function(e, t) {
            var n = e.indexOf("?") < 0 ? "?": "&",
            t = t || "";
            if (i._$isObject(t)) t = i._$object2query(t);
            if (t) e += n + t;
            return e
        };
        return function(e, t) {
            t = t || {};
            var n = i._$uniqueID(),
            r = {
                result: t.result,
                onload: t.onload || _,
                onerror: t.onerror || _
            };
            u[n] = r;
            t.onload = N._$bind(null, n);
            t.onerror = p._$bind(null, n);
            if (t.query) e = v(e, t.query);
            var s = t.method || "";
            if ((!s || /get/i.test(s)) && t.data) {
                e = v(e, t.data);
                t.data = null
            }
            t.url = e;
            r.req = c(t);
            r.req._$send(t.data);
            return n
        }
    } ();
    a._$upload = function(e, r) {
        e = n._$get(e);
        if (!e) return "";
        var s = i._$fetch({
            mode: 0,
            type: "json",
            query: null,
            cookie: !1,
            headers: {},
            onload: null,
            onerror: null,
            onuploading: null,
            onbeforerequest: null
        },
        r);
        s.data = e;
        s.method = "POST";
        s.timeout = 0;
        s.headers[t._$HEAD_CT] = t._$HEAD_CT_FILE;
        return a._$request(e.action, s)
    };
    if (!0) e.copy(e.P("nej.j"), a);
    return a
},
"9693d84387adb23be03bb7122d0b801b", "0422c728598f21c429a55e0bdddeb380", "f46be3347a20bfdd40810d04c5816b16", "4c563cfb767e6eff2573caba9105d3e5", "59e99425d23453acd2a67dc0b54caf83", "2f06d3d449e88d6ef704f3194a6aa4de");
I$("17a6a6e297ab955f850e7a48646fdb8d",
function(e, t, i, n, r, s, a, o) {
    var _;
    r._$$LoaderText = t._$klass();
    _ = r._$$LoaderText._$extend(e._$$LoaderAbstract);
    _.__getRequest = function() {
        return null
    };
    _.__doRequest = function() {
        n._$request(this.__url, {
            method: "GET",
            type: "text",
            onload: this.__onLoaded._$bind(this),
            onerror: this.__onError._$bind(this)
        })
    };
    _.__onLoaded = function(e) {
        this.__doCallback("onload", {
            url: this.__url,
            content: e
        })
    };
    return r
},
"b55808bf2558a2ae565aaebc67eef75d", "835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "af1197558820a3e8fe6fdeedfed54ea3");
I$("a02f32214adf195ab8498c109f495666",
function(e, t, i, n, r) {
    t.__removeIFrameKeepHistory = function(t) {
        e._$remove(t)
    };
    return t
},
"4c563cfb767e6eff2573caba9105d3e5");
I$("27a152b4c7c17ed4e9f00992304a4c14",
function(e, t, i, n, r, s, a) {
    if ("trident" === i._$KERNEL.engine && i._$KERNEL.release <= "2.0") I$(17,
    function() {
        e.__removeIFrameKeepHistory = function(e) {
            t._$setStyle(e, "display", "none");
            try {
                e.contentWindow.document.body.innerHTML = "&nbsp;"
            } catch(i) {}
        }
    });
    return e
},
"a02f32214adf195ab8498c109f495666", "4c563cfb767e6eff2573caba9105d3e5", "b4448d35d10d290252e905174939b60a");
I$("875c2968ed6321688cdc6a7219eac418",
function(e, t, i, n, r, s, a, o) {
    var _;
    r._$$LoaderHtml = t._$klass();
    _ = r._$$LoaderHtml._$extend(e._$$LoaderAbstract);
    _.__getRequest = function() {
        var e = i._$create("iframe");
        e.width = 0;
        e.height = 0;
        e.style.display = "none";
        return e
    };
    _.__doRequest = function(e) {
        try {
            document.body.appendChild(e);
            e.src = this.__url
        } catch(t) {
            console.log(e);
            console.error(t)
        }
    };
    _.__onError = function(e) {
        var t = (this.__getLoadData(this.__url) || s).request;
        this.__doCallback("onerror", e);
        n.__removeIFrameKeepHistory(t)
    };
    _.__onLoaded = function() {
        var e = null,
        t = (this.__getLoadData(this.__url) || s).request;
        try {
            if (t.src != this.__url) return;
            e = t.contentWindow.document.body
        } catch(i) {}
        this.__doCallback("onload", e);
        n.__removeIFrameKeepHistory(t)
    };
    return r
},
"b55808bf2558a2ae565aaebc67eef75d", "835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "27a152b4c7c17ed4e9f00992304a4c14");
I$("cd3cb6432d53066b64a5131d46510f75",
function(e, t, i, n, r, s, a) {
    var o;
    n._$$LoaderStyle = t._$klass();
    o = n._$$LoaderStyle._$extend(e._$$LoaderAbstract);
    o.__getRequest = function() {
        return i._$create("link")
    };
    o.__doRequest = function(e) {
        e.href = this.__url;
        document.head.appendChild(e)
    };
    return n
},
"b55808bf2558a2ae565aaebc67eef75d", "835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5");
I$("45afbda986e83233613703970c5fdb7e",
function(e, t, i, n, r, s, a) {
    var o;
    n._$$LoaderScript = t._$klass();
    o = n._$$LoaderScript._$extend(e._$$LoaderAbstract);
    o.__reset = function(e) {
        this.__super(e);
        this.__async = e.async;
        this.__charset = e.charset;
        this.__qopt.async = !1;
        this.__qopt.charset = this.__charset
    };
    o.__getRequest = function() {
        var e = i._$create("script");
        if (null != this.__async) e.async = !!this.__async;
        if (null != this.__charset) e.charset = this.__charset;
        return e
    };
    o.__doClearRequest = function(e) {
        i._$remove(e)
    };
    return n
},
"b55808bf2558a2ae565aaebc67eef75d", "835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5");
I$("4bdcc4c896338541c4121a0973492fb1",
function(e, t, i, n, r, s, a, o, _) {
    s._$loadScript = function(e, t) {
        r._$$LoaderScript._$allocate(t)._$load(e)
    };
    s._$queueScript = function(e, t) {
        r._$$LoaderScript._$allocate(t)._$queue(e)
    };
    s._$loadStyle = function(e, t) {
        n._$$LoaderStyle._$allocate(t)._$load(e)
    };
    s._$queueStyle = function(e, t) {
        n._$$LoaderStyle._$allocate(t)._$queue(e)
    };
    s._$loadHtml = function(e, t) {
        i._$$LoaderHtml._$allocate(t)._$load(e)
    };
    s._$loadText = function(e, i) {
        t._$$LoaderText._$allocate(i)._$load(e)
    };
    if (!0) e.copy(e.P("nej.j"), s);
    return s
},
"9693d84387adb23be03bb7122d0b801b", "17a6a6e297ab955f850e7a48646fdb8d", "875c2968ed6321688cdc6a7219eac418", "cd3cb6432d53066b64a5131d46510f75", "45afbda986e83233613703970c5fdb7e");
I$("2234e33a24c7fe170f8309f2e1c2ce5b",
function(e, t, i, n, r, s, a, o, _, c, u, f, d, h) {
    var l = {},
    N = "ntp-" + +new Date + "-";
    u.tpl = function() {
        return l
    };
    u._$parseTemplate = function() {
        var e = 0;
        var c = function() {
            if (! (e > 0)) {
                e = 0;
                i._$dispatchEvent(document, "templateready");
                i._$clearEvent(document, "templateready")
            }
        };
        var d = function(e, i) {
            var r = n._$dataset(e, "src");
            if (r) {
                i = i || f;
                var s = i.root;
                if (!s) s = e.ownerDocument.location.href;
                else s = t._$absolute(s);
                r = r.split(",");
                t._$forEach(r,
                function(e, i, n) {
                    n[i] = t._$absolute(e, s)
                });
                return r
            }
        };
        var h = function(e) {
            if (r._$is("mac") && "safari" === r._$KERNEL.browser) return t._$unescape(e.innerHTML);
            else return e.value || e.innerText || ""
        };
        var l = function(e, t) {
            if (e) {
                var i = d(e, t);
                if (i) o._$queueStyle(i, {
                    version: n._$dataset(e, "version")
                });
                n._$addStyle(e.value)
            }
        };
        var N = function(t) {
            e--;
            n._$addScript(t);
            c()
        };
        var p = function(t, i) {
            if (t) {
                var r = d(t, i),
                s = t.value;
                if (!r) n._$addScript(s);
                else {
                    e++;
                    var i = {
                        version: n._$dataset(t, "version"),
                        onload: N._$bind(null, s)
                    };
                    window.setTimeout(o._$queueScript._$bind(o, r, i), 0)
                }
            }
        };
        var v = function(t) {
            e--;
            u._$parseTemplate(t);
            c()
        };
        var m = function(t, i) {
            if (t) {
                var r = d(t, i)[0];
                if (r) {
                    e++;
                    var i = {
                        version: n._$dataset(t, "version"),
                        onload: v
                    };
                    window.setTimeout(o._$loadHtml._$bind(o, r, i), 0)
                }
            }
        };
        var g = function(t, i) {
            e--;
            u._$addTextTemplate(t, i || "");
            c()
        };
        var $ = function(t, i) {
            if (t && t.id) {
                var r = t.id,
                s = d(t, i)[0];
                if (s) {
                    e++;
                    var a = s + (s.indexOf("?") < 0 ? "?": "&") + (n._$dataset(t, "version") || ""),
                    i = {
                        type: "text",
                        method: "GET",
                        onload: g._$bind(null, r)
                    };
                    window.setTimeout(_._$request._$bind(_, a, i), 0)
                }
            }
        };
        var b = function(e, t) {
            var i = e.name.toLowerCase();
            switch (i) {
            case "jst":
                s._$addTemplate(h(e), e.id);
                return;
            case "txt":
                u._$addTextTemplate(e.id, h(e));
                return;
            case "ntp":
                u._$addNodeTemplate(h(e), e.id);
                return;
            case "js":
                p(e, t);
                return;
            case "css":
                l(e, t);
                return;
            case "html":
                m(e, t);
                return;
            case "res":
                $(e, t);
                return
            }
        };
        a._$$CustomEvent._$allocate({
            element: document,
            event: "templateready",
            oneventadd: c
        });
        return function(e, i) {
            e = n._$get(e);
            if (e) {
                var r = "TEXTAREA" == e.tagName ? [e] : t._$object2array(e.getElementsByTagName("textarea"));
                t._$forEach(r,
                function(e) {
                    b(e, i)
                });
                n._$remove(e, !0)
            }
            c()
        }
    } ();
    u._$addTextTemplate = function(e, t) {
        if (null != l[e] && typeof l[e] == typeof t) {
            console.warn("text template overwrited with key " + e);
            console.debug("old template content: " + l[e].replace(/\n/g, " "));
            console.debug("new template content: " + t.replace(/\n/g, " "))
        }
        l[e] = t || ""
    };
    u._$getTextTemplate = function(e) {
        return l[e] || ""
    };
    u._$addNodeTemplate = function(e, i) {
        i = i || t._$uniqueID();
        e = n._$get(e) || e;
        u._$addTextTemplate(N + i, e);
        if (!t._$isString(e)) n._$removeByEC(e);
        return i
    };
    u._$getNodeTemplate = function(e) {
        if (!e) return null;
        e = N + e;
        var i = u._$getTextTemplate(e);
        if (!i) return null;
        var r;
        if (t._$isString(i)) {
            i = n._$html2node(i);
            var s = i.getElementsByTagName("textarea");
            if (! ("TEXTAREA" == i.tagName || s && s.length)) u._$addTextTemplate(e, i);
            else r = i
        }
        if (!r) r = i.cloneNode(!0);
        n._$removeByEC(r);
        return r
    };
    u._$getItemTemplate = function() {
        var e = function(e, t) {
            return "offset" == t || "limit" == t
        };
        return function(i, n, r) {
            var s = [];
            if (!i || !i.length || !n) return s;
            r = r || f;
            var a = i.length,
            o = parseInt(r.offset) || 0,
            _ = Math.min(a, o + (parseInt(r.limit) || a)),
            c = {
                total: i.length,
                range: [o, _]
            };
            t._$merge(c, r, e);
            for (var u = o,
            d; u < _; u++) {
                c.index = u;
                c.data = i[u];
                d = n._$allocate(c);
                var h = d._$getId();
                l[h] = d;
                d._$recycle = d._$recycle._$aop(function(e, t) {
                    delete l[e];
                    delete t._$recycle
                }._$bind(null, h, d));
                s.push(d)
            }
            return s
        }
    } ();
    u._$getItemById = function(e) {
        return l[e]
    };
    u._$parseUITemplate = function() {
        var e = /#<(.+?)>/g;
        return function(i, r) {
            r = r || {};
            i = (i || "").replace(e,
            function(e, i) {
                var n = r[i];
                if (!n) {
                    n = "tpl-" + t._$uniqueID();
                    r[i] = n
                }
                return n
            });
            u._$parseTemplate(n._$html2node(i));
            return r
        }
    } ();
    c._$merge({
        _$parseTemplate: u._$parseTemplate,
        _$addNodeTemplate: u._$addNodeTemplate
    });
    if (!0) e.copy(e.P("nej.e"), u);
    return u
},
"9693d84387adb23be03bb7122d0b801b", "f46be3347a20bfdd40810d04c5816b16", "7214a135f5e14d9b78ea74e4de768e85", "4c563cfb767e6eff2573caba9105d3e5", "b4448d35d10d290252e905174939b60a", "220fe029157a5e39da06b616143c612b", "d6daea392dc29ec881afae6ea009dc4e", "4bdcc4c896338541c4121a0973492fb1", "af1197558820a3e8fe6fdeedfed54ea3", "5ee5c01e7d48ffc2b247c899939ea5a3");
I$("5bcb84782cac4293d63ca47188d9720f",
function(e, t, i, n) {
    var r = {
        404 : "网络异常，请刷新页面重试",
        "-1": "网络不好，请刷新页面重试",
        "-2": "网络不好，请刷新页面重试",
        0 : "网络不好，请刷新页面重试",
        401 : "操作超时，请刷新页面重试",
        40102 : "帐号格式错误",
        407 : "该帐号已注册",
        410 : "超过IP限制，请稍后再试",
        433 : "系统繁忙，请刷新页面重试",
        108 : "请输入图片验证码",
        109 : "请滑动验证码",
        110 : "请点击验证码",
        409 : "注册尝试次数太频繁",
        500 : "系统繁忙，请您稍后再试",
        503 : "服务器繁忙，请稍后再试",
        504 : "次数超限，请稍后再试",
        505 : "次数超限，请稍后再试",
        434 : "您验证错误次数过多，请稍后再试",
        435 : "您验证错误次数过多，请改天再试",
        436 : "您验证错误次数过多，请稍后再试",
        437 : "您验证错误次数过多，请改天再试",
        CHECK_USER_EMPTY: "请输入帐号",
        CHECK_USER_TOO_LONG: "您输入的帐号太长了",
        CHECK_URS_EMPTY: "请输入帐号",
        CHECK_URS_BAD_BEGIN: "帐号须由字母开头",
        CHECK_URS_BAD_MB: "帐号须由字母开头或11位手机号",
        CHECK_URS_BAD_END: "帐号请以字母或数字结尾",
        CHECK_URS_BAD_LENGTH: "帐号须由6-18个字符组成",
        CHECK_URS_BAD_ILLEGAL: "请用字母、数字或下划线命名",
        CHECK_PASSWORD_EMPTY: "请设置您的登录密码",
        CHECK_PASSWORD_LENGTH: "密码须由6-16个字符组成，区分大小写",
        CHECK_PASSWORD_SIMPLE: "密码过于简单，请重新设置",
        CHECK_PASSWORD_EQUAL: "密码与注册帐号不能相同",
        CHECK_PASSWORD_CHARCODE255: "密码不符合规范",
        CHECK_PASSWORD_HASEMPTY: "密码中不允许出现空格",
        CHECK_PASSWORD2_EMPTY: "请重复输入密码",
        CHECK_PASSWORD2_DIFF: "密码不一致",
        CHECK_SMS_EMPTY: "请输入正确的验证码",
        CHECK_SMS_BAD: "请输入正确的验证码",
        CHECK_CAPTCHA_EMPTY: "请输入正确的验证码",
        CHECK_CAPTCHA_BAD: "请输入正确的验证码",
        CHECK_PERSON_ID_EMPTY: "请输入您的身份证号码",
        CHECK_PERSON_NAME_EMPTY: "请输入您的姓名",
        CHECK_MOBILE_EMPTY: "请输入正确的手机号",
        CHECK_MOBILE_BAD: "请输入正确的手机号",
        EXCEPTION_INIT_COMPONENT_401: "初始化失败，参数不齐全",
        EXCEPTION_INIT_COMPONENT_433: "初始化失败，参数不匹配",
        EXCEPTION_INIT_COMPONENT_500: "系统繁忙，请您稍后再试",
        EXCEPTION_CHECK_NAME_160: '您输入的是网易靓号，请<a target="_blank" href="https://haoma.163.com/?from=zj">前往选购</a>',
        EXCEPTION_CHECK_NAME_106: "该帐号不可注册",
        EXCEPTION_CHECK_NAME_401: "操作超时，请刷新页面重试",
        EXCEPTION_CHECK_NAME_433: "系统繁忙，请刷新页面重试",
        EXCEPTION_CHECK_NAME_407: "该帐号已注册",
        EXCEPTION_CHECK_NAME_409: "注册尝试次数太频繁",
        EXCEPTION_CHECK_NAME_410: "超过IP限制，请稍后再试",
        EXCEPTION_CHECK_NAME_422: "该帐号已被冻结",
        EXCEPTION_CHECK_NAME_500: "系统繁忙，请您稍后再试",
        EXCEPTION_CHECK_NAME_504: "次数超限，请稍后再试",
        EXCEPTION_CHECK_NAME_505: "次数超限，请稍后再试",
        EXCEPTION_GET_TICKET_160: '您输入的是网易靓号，请<a target="_blank" href="https://haoma.163.com/?from=zj">前往选购</a>',
        EXCEPTION_GET_TICKET_106: "该帐号不可注册",
        EXCEPTION_GET_TICKET_108: "请输入图片验证码",
        EXCEPTION_GET_TICKET_109: "请滑动验证码",
        EXCEPTION_GET_TICKET_110: "请点击验证码",
        EXCEPTION_GET_TICKET_401: "操作超时，请刷新页面重试",
        EXCEPTION_GET_TICKET_433: "系统繁忙，请刷新页面重试",
        EXCEPTION_GET_TICKET_424: "请求错误，请您稍后再试",
        EXCEPTION_GET_TICKET_407: "该帐号已注册",
        EXCEPTION_GET_TICKET_409: "注册尝试次数太频繁",
        EXCEPTION_GET_TICKET_410: "超过IP限制，请稍后再试",
        EXCEPTION_GET_TICKET_422: "该帐号已被冻结",
        EXCEPTION_GET_TICKET_500: "系统繁忙，请您稍后再试",
        EXCEPTION_GET_TICKET_503: "服务器繁忙，请稍后再试",
        EXCEPTION_GET_TICKET_504: "次数超限，请稍后再试",
        EXCEPTION_FAST_REG_160: '您输入的是网易靓号，请<a target="_blank" href="https://haoma.163.com/?from=zj">前往选购</a>',
        EXCEPTION_FAST_REG_107: "请输入正确的验证码",
        EXCEPTION_FAST_REG_106: "该帐号不可注册",
        EXCEPTION_FAST_REG_401: "操作超时，请刷新页面重试",
        EXCEPTION_FAST_REG_433: "系统繁忙，请刷新页面重试",
        EXCEPTION_FAST_REG_402: "当前网络异常，请检查您的网络环境",
        EXCEPTION_FAST_REG_407: "该帐号已注册",
        EXCEPTION_FAST_REG_409: "注册尝试次数太频繁",
        EXCEPTION_FAST_REG_410: "超过IP限制，请稍后再试",
        EXCEPTION_FAST_REG_422: "该帐号已被冻结",
        EXCEPTION_FAST_REG_412: "验证码错误次数过多，请改天再试",
        EXCEPTION_FAST_REG_413: "请输入正确的验证码",
        EXCEPTION_FAST_REG_500: "系统繁忙，请您稍后再试",
        EXCEPTION_FAST_REG_503: "服务器繁忙，请稍后再试",
        EXCEPTION_FAST_REG_504: "次数超限，请稍后再试",
        EXCEPTION_REG_MOB_160: '您输入的是网易靓号，请<a target="_blank" href="https://haoma.163.com/?from=zj">前往选购</a>',
        EXCEPTION_REG_MOB_401: "操作超时，请刷新页面重试",
        EXCEPTION_REG_MOB_106: "该帐号不可注册",
        EXCEPTION_REG_MOB_433: "系统繁忙，请刷新页面重试",
        EXCEPTION_REG_MOB_402: "当前网络异常，请检查您的网络环境",
        EXCEPTION_REG_MOB_407: "该帐号已注册",
        EXCEPTION_REG_MOB_409: "注册尝试次数太频繁",
        EXCEPTION_REG_MOB_410: "超过IP限制，请稍后再试",
        EXCEPTION_REG_MOB_422: "该帐号已被冻结",
        EXCEPTION_REG_MOB_412: "验证码错误次数过多，请改天再试",
        EXCEPTION_REG_MOB_413: "请输入正确的验证码",
        EXCEPTION_REG_MOB_421: "该手机号已被注册",
        EXCEPTION_REG_MOB_423: "该手机号是保留帐号",
        EXCEPTION_REG_MOB_500: "系统繁忙，请您稍后再试",
        EXCEPTION_REG_MOB_107: "请输入正确的验证码",
        EXCEPTION_REG_MOB_108: "请输入图片验证码",
        EXCEPTION_REG_MOB_109: "请滑动滑块验证码",
        EXCEPTION_REG_MOB_110: "请点击验证码",
        EXCEPTION_GET_SMS_107: "请输入正确的验证码",
        EXCEPTION_GET_SMS_108: "请输入图片验证码",
        EXCEPTION_GET_SMS_109: "请滑动验证码",
        EXCEPTION_GET_SMS_110: "请点击验证码",
        EXCEPTION_GET_SMS_401: "操作超时，请刷新页面重试",
        EXCEPTION_GET_SMS_284: "请更换手机号再试",
        EXCEPTION_GET_SMS_242: "该手机号码绑定帐号数达到上限，请更换手机号再试",
        EXCEPTION_GET_SMS_433: "系统繁忙，请刷新页面重试",
        EXCEPTION_GET_SMS_410: "超过IP限制，请稍后再试",
        EXCEPTION_GET_SMS_412: "下发验证码超过了次数限制，请改天再试",
        EXCEPTION_GET_SMS_413: "请输入正确的验证码",
        EXCEPTION_GET_SMS_421: "该手机号已被注册",
        EXCEPTION_GET_SMS_423: "该手机号是保留帐号",
        EXCEPTION_GET_SMS_500: "系统繁忙，请您稍后再试",
        EXCEPTION_GET_SMS_415: "获取短信过于频繁，请稍后再试",
        EXCEPTION_GET_SMS_416: "获取短信过于频繁，请重新验证",
        EXCEPTION_SEND_MAIL_104: "帐号不存在。",
        EXCEPTION_SEND_MAIL_106: "用户不是外部邮箱。",
        EXCEPTION_SEND_MAIL_401: "操作超时，请刷新页面重试。",
        EXCEPTION_SEND_MAIL_410: "超过IP限制，请稍后再试。",
        EXCEPTION_SEND_MAIL_421: "帐号已被注册。",
        EXCEPTION_SEND_MAIL_500: "系统繁忙，请您稍后再试。",
        EXCEPTION_SEND_MAIL_503: "服务器维护中，请稍后再试。",
        EXCEPTION_SEND_MAIL_504: "重发邮件次数超过限制。",
        MODAL_MAIL_SUCCESS_TITLE: "激活邮件已再次发送！",
        MODAL_MAIL_SUCCESS_TEXT: "请查看您的邮箱。",
        MODAL_MAIL_SUCCESS_BUTTON: "立即查看邮件",
        MODAL_MAIL_ERROR_TITLE: "出错了"
    };
    return r
});
I$("e991fb0a31665d533edec727c9503bc9",
function() {
    var e = {
        501 : "系统繁忙，请您稍后再试。",
        500 : "系统繁忙，请您稍后再试。",
        "-1": "网络不好，请刷新页面重试",
        "-2": "网络不好，请刷新页面重试",
        404 : "网络异常，请刷新页面重试",
        401 : "操作超时，请刷新页面重试",
        433 : "系统繁忙，请刷新页面重试",
        "-101": "已重新发送激活邮件",
        "-102": "发送邮件失败，请稍后再试。",
        "-103": "正在加载AA资源，请稍后重试"
    };
    return e
});
I$("aadc4ea4a582128d908f4a7c891dcae1",
function(e, t, i, n, r, s, a, o, _, c, u, f, d) {
    var h = {
        haomaEmail: /^[\w-\.]{1,18}@(126\.com|163\.com)$/i,
        eleven: /^1\d{10}$/,
        mobile: /^(13|14|15|17|18)\d{9}$/,
        netease: /^[a-zA-Z]([a-zA-Z]|\d|_){4,16}([a-zA-Z]|\d)$/
    };
    var l, N = {
        "qq.com": "1",
        "sina.com": "1",
        "foxmail.com": "1",
        "sohu.com": "1",
        "vip.qq.com": "1",
        "live.com": "1",
        "139.com": "1",
        "tom.com": "1",
        "icloud.com": "1",
        "aliyun.com": "1",
        "edu.tw": "1"
    },
    p = {
        qq: "1",
        renren: "2",
        weibo: "3",
        weixin: "13",
        yixin: "8"
    };
    var v = function() {
        var e = t._$get("cnt-box-parent").clientWidth || document.body.scrollWidth,
        i = document.body.clientHeight,
        n = {
            width: e,
            height: i,
            type: "resize"
        };
        if (e * i > 0) {
            n["URS-CM"] = 1;
            a._$postMessage("_parent", {
                data: n
            })
        }
    };
    c._$resize = v;
    var m = function(e, i) {
        this._hasFocus = 0;
        i = i && i.trim();
        var r = document.getElementsByTagName("input");
        if (r && r.length > 0) n._$forEach(r,
        function(e) {
            var t = document.activeElement;
            if (t === e) {
                t.title = i;
                t.blur();
                this._hasFocus = 1;
                setTimeout(function() {
                    t.focus()
                },
                100)
            }
        }._$bind(this));
        if (!this._hasFocus) {
            e.tabIndex = "0";
            e.title = i;
            t._$dataset(e, "role", "heading");
            e.focus()
        }
    };
    var g = function(e, n, s, a) {
        s = t._$get(s);
        if ('您输入的是网易靓号，请<a target="_blank" href="https://haoma.163.com/?from=zj">前往选购</a>' === n) a = 2;
        if (1 != window._$needCookieSet || n.indexOf("开启浏览器cookies") != -1) {
            a = a || "";
            var o = t._$get("cnt-box-parent");
            var _ = e && c._$getParent(e, "inputbox");
            if (_) t._$addClassName(_, "error-color");
            var u = r._$get("error-tmp", {
                str: n || "",
                type: a
            });
            if (3 == a) u = u.replace("ferrorhead3", "ferrorhead2").replace("ferrortail3", "ferrortail2 ferrortail3");
            s.innerHTML = u;
            var f = s.outerText;
            s.className = "m-nerror";
            if (0 === e) t._$dataset(s, "from", "0");
            else if (100 === e) t._$dataset(s, "from", "100");
            else if (e) {
                t._$dataset(s, "from", e.name);
                t._$addClassName(s, "err_" + e.name)
            } else t._$dataset(s, "from", "null");
            if (window._$errClickHide) {
                i._$clearEvent(s);
                var d = "touchend";
                if (nej.p._$IS.desktop) d = "mouseup";
                i._$addEvent(s, d,
                function() {
                    t._$addClassName(s, "f-dn");
                    t._$delClassName(o, "haserr");
                    v()
                })
            }
            t._$addClassName(o, "haserr");
            if (window._$readErrHelper) m.call(this, s, f);
            v()
        }
    };
    c._$isBadNetease = function(e) {
        return ! h.netease.test(e)
    };
    c._$isNeteaseEmail = function(e) {
        return "163.com" === e || "126.com" === e || "yeah.net" === e || "vip.163.com" == e || "vip.126.com" == e || "188.com" == e || "vip.188.com" == e
    };
    c._$checkMobile = function(e) {
        return h.mobile.test(e)
    };
    c._$getParent = function(e, i) {
        e = t._$get(e);
        if (!e) return null;
        e = e.parentElement || e.parentNode;
        for (; e != document.body;) {
            if (!e) return null;
            if (t._$hasClassName(e, i)) break;
            else e = e.parentElement || e.parentNode
        }
        return e
    };
    c._$showError = function(e, t, i, n) {
        g(e, t, i, n)
    };
    c._$showError2 = function(e, n, s, a) {
        var o = t._$get("cnt-box-parent");
        var _ = e && c._$getParent(e, "inputbox");
        if (_) t._$addClassName(_, "error-color");
        if (0 === a) {
            s = t._$get(s);
            s.innerHTML = r._$get("error-tmp", {
                str: n || ""
            });
            s.className = "m-nerror";
            if (e) {
                t._$dataset(s, "from", e.name);
                t._$addClassName(s, "err_" + e.name)
            } else t._$dataset(s, "from", "null")
        }
        i._$addEvent(s, "click",
        function() {
            if (e) try {
                e.focus()
            } catch(i) {} else {
                t._$addClassName(s, "f-dn");
                v()
            }
        });
        t._$addClassName(o, "haserr");
        v()
    };
    c._$removeError = function(e, i, n) {
        var r = t._$get("cnt-box-parent");
        var s = t._$dataset(i, "from");
        var a = e.name;
        var o = e && c._$getParent(e, "inputbox");
        if (!window._$readErrHelper || !n) {
            if (o) t._$delClassName(o, "error-color");
            if (s == a || "null" == s) {
                i = t._$get(i);
                t._$addClassName(i, "f-dn");
                if ("email" == a) t._$delClassName(i, "err_email");
                else if ("password" == a) t._$delClassName(i, "err_password");
                else if ("checkcode" == a) t._$delClassName(i, "err_checkcode");
                else if ("phone" == a) t._$delClassName(i, "err_phone");
                else if ("phonecode" == a) t._$delClassName(i, "err_phonecode")
            }
            if (0 != s) t._$delClassName(r, "haserr");
            v()
        }
    };
    c._$removeError2 = function() {
        var e = t._$get("nerror"),
        i = t._$dataset(e, "from");
        if (100 == i) t._$addClassName(e, "f-dn");
        v()
    };
    c._$removeError3 = function() {
        var e = t._$get("nerror");
        t._$addClassName(e, "f-dn")
    };
    c._$showFail = function(e, i) {
        var n = t._$get("cnt-box-parent");
        if ("601" != e) {
            l = clearTimeout(l);
            t._$remove("failbox", !0);
            var r = parseInt(s._$KERNEL.version, 10);
            var a = "trident" == s._$KERNEL.engine && r < 10 ? "boxtop": "";
            var o, u = 500 == e ? "fail0 ": "fail1 ",
            f = t._$create("div", u + a, t._$getByClassName(document, "g-bd")[0]);
            o = _[e] || c._$getErrorTxt(e);
            if ("-103" == e) o = o.replace("AA", i);
            f.id = "failbox";
            f.innerHTML = '<div class="box">' + o + "</div>";
            t._$addClassName(n, "haserr");
            if (window._$readErrHelper) m.call(this, f, o);
            c._$resize();
            l = setTimeout(function() {
                t._$delClassName(n, "haserr");
                c._$resize();
                t._$remove("failbox", !0)
            },
            5e3)
        }
    };
    c._$showFail2 = function(e) {
        var i = t._$get("cnt-box-parent");
        l = clearTimeout(l);
        t._$remove("failbox", !0);
        var n = parseInt(s._$KERNEL.version, 10);
        var r = "trident" == s._$KERNEL.engine && n < 10 ? "boxtop": "";
        var a = "fail1 ",
        o = t._$create("div", a + r, t._$getByClassName(document, "g-bd")[0]);
        o.id = "failbox";
        o.innerHTML = '<div class="box">' + e + "</div>";
        t._$addClassName(i, "haserr");
        c._$resize();
        l = setTimeout(function() {
            t._$delClassName(i, "haserr");
            c._$resize();
            t._$remove("failbox", !0)
        },
        5e3)
    };
    c._$hideFail = function() {
        t._$remove("failbox", !0)
    };
    c._$supportCss3 = function(e) {
        var t = ["webkit", "Moz", "ms", "o"],
        i,
        n = [],
        r = document.documentElement.style,
        s = function(e) {
            return e.replace(/-(\w)/g,
            function(e, t) {
                return t.toUpperCase()
            })
        };
        for (i in t) n.push(s(t[i] + "-" + e));
        n.push(s(e));
        for (i in n) if (n[i] in r) return ! 0;
        return ! 1
    };
    c._$getCommonEmail = function(e) {
        var t = e.split("@")[1];
        return N[t] ? "//mail." + e.substr(e.indexOf("@") + 1) : ""
    };
    c.__hackPush = function() {
        return 0
    };
    c._$loadGaq = function() {
        _gaq = window["_gaq"] || [];
        if (!window.wdaId) _gaq.push = c.__hackPush
    };
    c._$timeCount = function(e) {
        if (!window.timecount) window.timecount = [];
        window.timecount[e] = (new Date).getTime()
    };
    c._$timeCountEnd = function(e) {
        if (!window.timecount) return 0;
        if (!window.timecount[e]) return 0;
        var t = (new Date).getTime() - window.timecount[e];
        window.timecount[e] = 0;
        return t
    };
    c._$requestJsonp = function(e, t, i, n) {
        var r = (new Date).getTime();
        var s = "jsonp" + r;
        window["qrcb"] = [];
        window["qrcb"][s] = i;
        var a = "";
        for (var o in t) a += "&" + o + "=" + t[o];
        a = a.slice(1);
        var _ = e + "?" + a + "&callback=qrcb." + s;
        var c = document.getElementById("mp-script-" + s);
        if (!c) {
            c = document.createElement("script");
            c.type = "text/javascript";
            c.id = "mp-script-" + s;
            c.src = _;
            document.getElementsByTagName("head")[0].appendChild(c)
        }
        if (!n) document.getElementsByTagName("head")[0].appendChild(c)
    };
    c._$postMessage = function(e, t) {
        a._$postMessage(e, t)
    };
    c._$showSuccLoading = function() {
        var e = t._$get("loading");
        if (e) t._$delClassName(e, "f-dn")
    };
    c._$parseOauth = function() {
        var e = window.URSCONFIG.oauthLoginConfig || !1;
        if (!e) return e;
        var t = location.protocol + "//reg.163.com/outerLogin/oauth2/connect.do?product=" + window.URSCONFIG.product;
        n._$forEach(e,
        function(e) {
            if (!e.url) if ("alipay" == e.name) {
                t = t.replace("/outerLogin/oauth2/connect.do", "/outerLogin/oauth2/aliPayFastLogin.do");
                e.url = t
            } else e.url = t + "&target=" + p[e.name];
            var i = {
                url: location.protocol + "//webzj.reg.163.com/webapp/res/statichtml/third.html",
                url2: location.protocol + "//webzj.reg.163.com/webapp/res/statichtml/third.html"
            };
            if (e.backurl) {
                i = {
                    url: location.protocol + "//webzj.reg.163.com/webapp/res/statichtml/third.html?backurl=" + e.backurl,
                    url2: location.protocol + "//webzj.reg.163.com/webapp/res/statichtml/third.html?backurl=" + e.backurl
                };
                if ("alipay" == e.name) i = {
                    redirect_error: location.protocol + "//webzj.reg.163.com/webapp/res/statichtml/third.html?backurl=" + e.backurl,
                    redirect_url: location.protocol + "//webzj.reg.163.com/webapp/res/statichtml/third.html?backurl=" + e.backurl
                }
            } else if ("alipay" == e.name) i = {
                redirect_error: location.protocol + "//webzj.reg.163.com/webapp/res/statichtml/third.html",
                redirect_url: location.protocol + "//webzj.reg.163.com/webapp/res/statichtml/third.html"
            };
            if (0 == e.url.indexOf("//")) e.url = location.protocol + e.url;
            e.url += "&" + n._$object2query(i)
        });
        return e
    };
    c._$doThirdLogin = function(e) {
        var n = i._$getElement(e),
        r = t._$dataset(n, "link"),
        s = t._$dataset(n, "width"),
        a = t._$dataset(n, "height");
        if (r) {
            var o = s || 514;
            var _ = a || 764;
            var u = (window.screen.availHeight - 30 - o) / 2;
            var f = (window.screen.availWidth - 10 - _) / 2;
            if (c._$notURL(r)) r = "";
            window.open(r, "thirdLogin", "height=" + o + ",width=" + _ + ",top=" + u + ",left=" + f + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no")
        }
    };
    c._$checkPwd = function() {
        var e = function(e) {
            var t = e.charAt(0),
            i = !0;
            for (var n = 1,
            r = e.length; n < r; n++) if (t !== e.charAt(n)) {
                i = !1;
                break
            }
            return i
        };
        var t = function(e) {
            var t = ["123456", "123456789", "12345678", "123123", "5201314", "1234567", "7758521", "654321", "1314520", "123321", "1234567890", "147258369", "123654", "5211314", "woaini", "1230123", "987654321", "147258", "123123123", "7758258", "520520", "789456", "456789", "159357", "112233", "1314521", "456123", "110110", "521521", "zxcvbnm", "789456123", "0123456789", "0123456", "123465", "159753", "qwertyuiop", "987654", "115415", "1234560", "123000", "123789", "100200", "963852741", "121212", "111222", "123654789", "12301230", "456456", "741852963", "asdasd", "asdfghjkl", "369258", "863786", "258369", "8718693", "666888", "5845201314", "741852", "168168", "iloveyou", "852963", "4655321", "102030", "147852369", "321321"];
            var i = !1;
            for (var n = 0,
            r = t.length; n < r; n++) if (t[n] === e) {
                i = !0;
                break
            }
            return i
        };
        var i = function(e, t) {
            var i = t.substr(0, t.indexOf("@")) || t;
            return e === i || e === t
        };
        var n = function(e) {
            return /[^\x21-\x7E]/g.test(e)
        };
        return function(r, s) {
            var a = r.length,
            _;
            if (a < 6 || a > 16) _ = o.CHECK_PASSWORD_LENGTH;
            else if (e(r) || t(r) || /^\d{1,9}$/.test(r)) _ = o.CHECK_PASSWORD_SIMPLE;
            else if (i(r, s)) _ = o.CHECK_PASSWORD_EQUAL;
            else if (n(r)) _ = o.CHECK_PASSWORD_CHARCODE255;
            return _
        }
    } ();
    c.__sendClose = function() {
        var e = {
            type: "close"
        };
        e["URS-CM"] = 1;
        c._$postMessage("_parent", {
            data: e
        })
    };
    c._$getErrorTxt = function(e) {
        if (!e) return "检测出非法请求，为了您的帐号安全，请您稍后再试。";
        e = e.toString();
        if ("601" == e) return c._$setOutLogin();
        if ("433" == e) return "系统繁忙，请刷新页面重试";
        if (0 === e.indexOf("5")) return "服务器内部错误，请您稍后再试";
        else if (0 === e.indexOf("4")) return "请求错误，请您稍后再试";
        else return "请求错误，请您稍后再试"
    };
    c._$setOutLogin = function(e) {
        var t = window.$loginOpts.promark + +new Date;
        var i = window.$loginOpts.product || "";
        var n = window.$loginOpts.promark || "";
        var r = window.$loginOpts.mbNeedItl || "";
        var s = window.$loginOpts.domains || "";
        var a = window.$loginOpts.cookieDomain || "";
        var o = window.$loginOpts.prdomain || "";
        var _ = window.$loginOpts.needMobileLogin || "";
        var c = window.$loginOpts.mobileFirst || "";
        var u = window.$loginOpts.noqr || "";
        var f = window.$loginOpts.smsLoginFirst || "";
        var d = window.$loginOpts.toolName || "";
        var h = window.$loginOpts.toolUrl || "";
        var l = window.$loginOpts.needQrLogin || "";
        var N = location.protocol;
        var p = N + "//webzj.reg.163.com/safelogin.html?loginKey=" + t + "&domains=" + s + "&prdomain=" + o + "&cookieDomain=" + a + "&needMobileLogin=" + _ + "&mobileFirst=" + c + "&noqr=" + u + "&smsLoginFirst=" + f + "&toolName=" + d + "&toolUrl=" + h + "&needQrLogin=" + l + "&promark=" + n + "&product=" + i + "&mbNeedItl=" + r;
        var v = '<strong class="msg"><span style="color:#000;">您的帐号存在风险，</span><a style="color:red;font-size:14px;text-decoration:underline;font-weight:bolder;" target="_blank" href=' + p + ">点此进行安全登录</a></strong>";
        if (e) g(0, v, "nerror");
        return v
    };
    c._$addPathB = function(e) {
        if (window._$pathB) e = e.replace(/:\/\/(?:[^\/]+)/,
        function(e) {
            return e + "/b"
        });
        return e
    };
    c._$3pSuccess = function(e) {
        e["URS-CM"] = 1;
        e["type"] = "otherRegSuccess";
        c._$postMessage("_parent", {
            data: e
        })
    };
    c._$configLog = function(e) {
        var t = document.createElement("img"),
        i = e.topURL || "",
        r;
        r = n._$merge({},
        e,
        function(e, t) {
            return "style" == t
        });
        r = JSON.stringify(r);
        r = encodeURIComponent(r);
        t.src = "//webzj.reg.163.com/UA1435545636633/__utm.gif?configlog=1&from=" + i + "&config=" + r
    };
    c._$HtmlEncode = function(e) {
        function t(e) {
            var t = !0;
            var n = e.charCodeAt(0);
            switch (n) {
            case 10:
                return "<br/>";
            case 32:
                return "&nbsp;";
            case 34:
                return "&quot;";
            case 38:
                return "&amp;";
            case 39:
                return "&#x27;";
            case 47:
                return "&#x2F;";
            case 60:
                return "&lt;";
            case 62:
                return "&gt;";
            case 198:
                return "&AElig;";
            case 193:
                return "&Aacute;";
            case 194:
                return "&Acirc;";
            case 192:
                return "&Agrave;";
            case 197:
                return "&Aring;";
            case 195:
                return "&Atilde;";
            case 196:
                return "&Auml;";
            case 199:
                return "&Ccedil;";
            case 208:
                return "&ETH;";
            case 201:
                return "&Eacute;";
            case 202:
                return "&Ecirc;";
            case 200:
                return "&Egrave;";
            case 203:
                return "&Euml;";
            case 205:
                return "&Iacute;";
            case 206:
                return "&Icirc;";
            case 204:
                return "&Igrave;";
            case 207:
                return "&Iuml;";
            case 209:
                return "&Ntilde;";
            case 211:
                return "&Oacute;";
            case 212:
                return "&Ocirc;";
            case 210:
                return "&Ograve;";
            case 216:
                return "&Oslash;";
            case 213:
                return "&Otilde;";
            case 214:
                return "&Ouml;";
            case 222:
                return "&THORN;";
            case 218:
                return "&Uacute;";
            case 219:
                return "&Ucirc;";
            case 217:
                return "&Ugrave;";
            case 220:
                return "&Uuml;";
            case 221:
                return "&Yacute;";
            case 225:
                return "&aacute;";
            case 226:
                return "&acirc;";
            case 230:
                return "&aelig;";
            case 224:
                return "&agrave;";
            case 229:
                return "&aring;";
            case 227:
                return "&atilde;";
            case 228:
                return "&auml;";
            case 231:
                return "&ccedil;";
            case 233:
                return "&eacute;";
            case 234:
                return "&ecirc;";
            case 232:
                return "&egrave;";
            case 240:
                return "&eth;";
            case 235:
                return "&euml;";
            case 237:
                return "&iacute;";
            case 238:
                return "&icirc;";
            case 236:
                return "&igrave;";
            case 239:
                return "&iuml;";
            case 241:
                return "&ntilde;";
            case 243:
                return "&oacute;";
            case 244:
                return "&ocirc;";
            case 242:
                return "&ograve;";
            case 248:
                return "&oslash;";
            case 245:
                return "&otilde;";
            case 246:
                return "&ouml;";
            case 223:
                return "&szlig;";
            case 254:
                return "&thorn;";
            case 250:
                return "&uacute;";
            case 251:
                return "&ucirc;";
            case 249:
                return "&ugrave;";
            case 252:
                return "&uuml;";
            case 253:
                return "&yacute;";
            case 255:
                return "&yuml;";
            case 162:
                return "&cent;";
            case "\r":
                break;
            default:
                t = !1
            }
            if (!t) if (n > 127) {
                var r = n;
                var s = r % 16;
                r = Math.floor(r / 16);
                var a = r % 16;
                r = Math.floor(r / 16);
                var o = r % 16;
                r = Math.floor(r / 16);
                var _ = r % 16;
                return "&#x" + i[_] + i[o] + i[a] + i[s] + ";"
            } else return e
        }
        var i = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
        var n = e;
        var r = "";
        for (var s = 0; s < n.length; s++) {
            var a = n.charAt(s);
            r += t(a)
        }
        return r
    };
    c._$notURL = function(e) {
        return ! /^http[s]?:/i.test(e) && !/^\/\//.test(e)
    };
    c._$isEleven = function(e) {
        return h.eleven.test(e)
    };
    c._$isHaomaEmail = function(e) {
        return h.haomaEmail.test(e)
    };
    c._$formatUn = function(e) {
        return e && e.split("@")[0]
    };
    c._$doProxyLink = function(e) {
        var t, n = i._$getElement(e) || "";
        if (window.URSCONFIG.openSelf) if ("_blank" == n.target) if ("A" == n.tagName.toUpperCase()) {
            t = n.href;
            if (!c._$notURL(t)) {
                i._$stop(e);
                location.href = t
            }
        }
    };
    c._$getDlapp = function() {
        return '<span style="color:#000;">使用</span><a target="_blank" href="https://id.163.com/gj/?from=webzj_cw">网易帐号管家</a>，<span style="color:#000;">全面保护您的帐号！</span>'
    };
    return c
},
"835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "220fe029157a5e39da06b616143c612b", "b4448d35d10d290252e905174939b60a", "614e962fa045f9cc3caa40e6c27a3570", "5bcb84782cac4293d63ca47188d9720f", "e991fb0a31665d533edec727c9503bc9");
I$("6d07796f23cd7560f64207d93a6e8846",
function(e, t, i, n, r, s, a, o, _, c) {
    var u = "dl.reg.163.com",
    f = "zc.reg.163.com",
    d = "passport.yeah.net/dl",
    h = "passport.126.com/dl";
    var l = {
        "/l": {
            name: "/l",
            201 : {
                ret: "201",
                message: "登录成功"
            },
            401 : {
                ret: "401",
                message: "参数错误"
            },
            402 : {
                ret: "402",
                message: "指纹错误"
            },
            423 : {
                ret: "423",
                message: "风控帐号"
            }
        },
        "/lpwd": {
            name: "/lpwd",
            201 : {
                ret: "201",
                message: "登录成功"
            }
        },
        "/lvfsms": {
            name: "/lvfsms",
            201 : {
                ret: "201",
                message: "登录成功"
            }
        }
    };
    a._$request = function() {
        var e = function(e, t) {
            if (l[e]) {
                var i = {
                    data: {}
                };
                var n = t.ret || -1;
                i.data["URS-CM"] = 1;
                i.data["URS-CM-STATE"] = l[e][n] || {
                    ret: -1
                };
                if (t.unprotectedGuide) l[e][n].unprotectedGuide = 1;
                i.data["URS-CM-STATENAME"] = l[e].name;
                s._$postMessage("_parent", i)
            }
        };
        return function(t, i, n, r, a, o) {
            var _ = u;
            var c = f;
            var l;
            if ("mail126" === o) _ = h;
            else if ("mailyeah" === o) _ = d;
            if (window["$cookieDomain"]) if (window["$cookieDomain"].indexOf("icourse163.org") >= 0) _ = "reg." + window["$cookieDomain"] + "/dl";
            else _ = "passport." + window["$cookieDomain"] + "/dl";
            if (window["$regCookieDomain"]) if (window["$regCookieDomain"].indexOf("icourse163.org") >= 0) c = "reg." + window["$regCookieDomain"] + "/zc";
            else c = "passport." + window["$regCookieDomain"] + "/zc";
            if (t.indexOf("mb-") > -1) {
                _ += "/yd";
                c += "/yd"
            }
            if (a) l = _;
            else l = c;
            MP[t](i,
            function(t, i) {
                e(t, i);
                n(i)
            },
            function(t, i) {
                e(t, i);
                if ("601" == i.ret) s._$setOutLogin(1);
                r(i)
            },
            l)
        }
    } ();
    return a
},
"835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "f46be3347a20bfdd40810d04c5816b16", "af1197558820a3e8fe6fdeedfed54ea3", "614e962fa045f9cc3caa40e6c27a3570", "aadc4ea4a582128d908f4a7c891dcae1");
I$("bc94abb3037ef580f8190334c57f0a74",
function(e, t, i, n, r, s, a, o, _, c) {
    var u;
    a._$$Abstract = t._$klass();
    u = a._$$Abstract._$extend(r._$$EventTarget);
    u.__init = function() {
        this.__super();
        i._$dumpCSSText();
        this.__initXGui();
        this.__initNode()
    };
    u.__reset = function(e) {
        this.__super(e);
        this.__doInitClass(e.clazz);
        this._$appendTo(e.parent)
    };
    u.__destroy = function() {
        this.__super();
        this.__doDelParentClass();
        delete this.__parent;
        i._$removeByEC(this.__body);
        i._$delClassName(this.__body, this.__class);
        delete this.__class
    };
    u.__initXGui = _;
    u.__initNode = function() {
        if (!this.__seed_html) this.__initNodeTemplate();
        this.__body = s._$getNodeTemplate(this.__seed_html);
        if (!this.__body) this.__body = i._$create("div", this.__seed_css);
        i._$addClassName(this.__body, this.__seed_css)
    };
    u.__initNodeTemplate = _;
    u.__doInitClass = function(e) {
        this.__class = e || "";
        i._$addClassName(this.__body, this.__class)
    };
    u.__doAddParentClass = function() {
        if (this.__seed_css) {
            var e = this.__seed_css.split(/\s+/);
            i._$addClassName(this.__parent, e.pop() + "-parent")
        }
    };
    u.__doDelParentClass = function() {
        if (this.__seed_css) {
            var e = this.__seed_css.split(/\s+/);
            i._$delClassName(this.__parent, e.pop() + "-parent")
        }
    };
    u._$getBody = function() {
        return this.__body
    };
    u._$appendTo = function(e) {
        if (this.__body) {
            this.__doDelParentClass();
            if (n._$isFunction(e)) this.__parent = e(this.__body);
            else {
                this.__parent = i._$get(e);
                if (this.__parent) this.__parent.appendChild(this.__body)
            }
            this.__doAddParentClass()
        }
    };
    u._$show = function() {
        if (this.__parent && this.__body && this.__body.parentNode != this.__parent) this.__parent.appendChild(this.__body)
    };
    u._$hide = function() {
        i._$removeByEC(this.__body)
    };
    if (!0) e.copy(e.P("nej.ui"), a);
    return a
},
"9693d84387adb23be03bb7122d0b801b", "835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "f46be3347a20bfdd40810d04c5816b16", "8dba95a690ae256ada6319336b0cf4d6", "2234e33a24c7fe170f8309f2e1c2ce5b");
I$("11481f1a08cb01b3ace621353354f8da",
function(e, t, i, n) {
    var r = {
        "-401": '无法登录，请<a style="color:#4aafe9;" target="_blank" href="https://www.baidu.com/s?wd=%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%80%E5%90%AFcookies">开启浏览器cookies</a>或更换浏览器后刷新重试',
        404 : "网络异常，请刷新页面重试",
        405 : "本次登录存在异常，请刷新重试或更换浏览器",
        "-1": "网络不好，请刷新页面重试",
        "-2": "网络不好，请刷新页面重试",
        0 : "网络不好，请刷新页面重试",
        161 : "该帐号不是网易靓号，此处仅支持网易靓号登录",
        401 : "操作超时，请刷新页面重试",
        40110 : "帐号格式错误",
        402 : "当前网络异常，请检查您的网络环境",
        403 : "当前网络环境不安全，请稍后再试!",
        410 : "超过IP限制，请稍后再试",
        433 : "系统繁忙，请刷新页面重试",
        441 : "请输入图片验证码",
        444 : "请滑动验证码",
        445 : "请点击验证码",
        411 : "IP一分钟内登录不存在的用户达到限制，5分钟后再试",
        413 : "帐号或密码错误",
        "412-01": "您登录错误次数过多，请稍后再试",
        "412-02": "您登录错误次数过多，请明天再试",
        "413-01": "您登录错误密码次数过多，请稍后再试",
        "413-02": "您登录错误密码次数过多，请明天再试",
        "413-03": "您的IP登录错误密码次数过多，请稍后再试",
        "414-01": "您的IP登录错误次数过多，请稍后再试",
        "414-02": "您的IP登录错误次数过多，请明天再试",
        416 : "您的IP登录过于频繁,请稍后再试",
        "417-01": "您的IP登录成功次数过多，请稍后再试",
        "417-02": "您的IP登录成功次数过多，请明天再试",
        "418-01": "您登录成功次数过多,请稍后再试",
        "418-02": "您登录成功次数过多,请明天再试",
        "419-01": "您登录过于频繁,请稍后再试",
        "419-02": "您的IP登录过于频繁,请稍后再试",
        422 : '该帐号已被锁定，请使用<a target="_blank" href="https://id.163.com/gj/?from=webzj" style="color:#4aafe9;text-decoration:underline;">网易帐号管家</a>解锁，或24小时后再试。如为被盗，申请<a target="_blank" href="https://mima.163.com/nie/" style="color:#4aafe9;text-decoration:underline;">帐号申诉</a>。',
        420 : "帐号不存在",
        424 : '该靓号服务已到期，<a target="_blank" href="//haoma.163.com/pay/pay.do?ayRenew=1">点击续费</a>，更多精彩',
        425 : '该帐号尚未激活，请到已注册的邮箱<a target="_blank" href="#">激活帐号</a>',
        426 : "该帐号未及时激活，请重新注册",
        442 : "请输入正确的验证码",
        443 : "请输入正确的短信验证码",
        409 : "您登录过于频繁,请稍后再试",
        500 : "系统繁忙，请您稍后再试",
        503 : "服务器繁忙，请稍后再试",
        505 : "次数超限，请稍后再试",
        602 : '邮箱服务已到期，<a target="_blank" href="//vpay.vip.163.com/vippayunion/index.html" style="color:#4aafe9;text-decoration:underline;">点击续费</a>，更多精彩',
        431 : "请求错误，请您稍后再试",
        434 : "您验证错误次数过多，请稍后再试",
        435 : "您验证错误次数过多，请改天再试",
        436 : "您验证错误次数过多，请稍后再试",
        437 : "您验证错误次数过多，请改天再试",
        430 : "此次登录不需要进行密保验证",
        453 : "帐号未关联手机号",
        454 : "帐号关联手机未验证"
    };
    return r
});
I$("28223651d287a2583bcd82c79d51274d",
function(e, t, i, n, r, s, a, o, _, c, u) {
    var f;
    o._$$Module = e._$klass();
    f = o._$$Module._$extend(r._$$Abstract);
    f.__init = function(e) {
        this.__super(e)
    };
    f.__reset = function(e) {
        this.__super(e);
        this.__initForm();
        this.__initEvent();
        this.__states = {};
        if (!e.errMsg) this._$clearState()
    };
    f.__destroy = function() {
        this.__super();
        n._$forEach(this.__ipts,
        function(e) {
            e = e._$recycle()
        })
    };
    f.__initNode = function() {
        this.__super()
    };
    f.__initCallback = function() {};
    f.__initErrorHandler = function() {};
    f.__setPlaceHolder = function() {
        if (this.__placeholder && !this.__placeholder2) {
            if (this.__placeholder.account) {
                var e = t._$getByClassName(this.__body, "u-input")[0];
                t._$getByClassName(e, "u-label")[0].innerHTML = s._$HtmlEncode(this.__placeholder.account);
                var i = t._$getByClassName(e, "j-inputtext")[0];
                t._$dataset(i, "placeholder", this.__placeholder.account)
            }
            if (this.__placeholder.pwd) {
                var n = t._$getByClassName(this.__body, "u-input")[1];
                t._$getByClassName(n, "u-label")[0].innerHTML = s._$HtmlEncode(this.__placeholder.pwd);
                var r = t._$getByClassName(n, "j-inputtext")[0];
                t._$dataset(r, "placeholder", this.__placeholder.pwd)
            }
            this.__placeholder2 = 1
        }
    };
    f._$stateOK = function(e) {
        this.__form._$checkValidity(null, 1);
        setTimeout(function() {
            var t = 1,
            i = "",
            r = ["email", "password", "tcheckcode", "slidecap"];
            if (void 0 != typeof this.__states["checkcode"]) this.__states["tcheckcode"] = this.__states["checkcode"];
            n._$forEach(r,
            function(e) {
                if (1 == this.__states[e]) if (!i) {
                    t = 0;
                    i = e
                }
            }._$bind(this));
            e(t, i)
        }._$bind(this), 400)
    };
    f._$getValues = function() {
        var e = [];
        n._$forEach(this.__inputs,
        function(t) {
            var i = t.value;
            e.push(i)
        });
        return e
    };
    f._$clearState = function() {
        if (this._$hideCheckCode);
        n._$reverseEach(this.__ipts,
        function(e, t) {
            var i = t ? 0 : 1;
            e._$onClear(i)
        }._$bind(this));
        this.__initError()
    };
    f.__initError = function() {
        var e = t._$get("nerror");
        e.innerHTML = "";
        var i = t._$getByClassName(document, "error-color");
        for (var n = 0; n < i.length; n++) t._$delClassName(i[n], "error-color")
    };
    f.__setSlideSuc = function() {
        var e = t._$getByClassName(document, "ncpt_txt_status")[0];
        if (e) {
            e.style.display = "block";
            e.innerHTML = '<div class="u-success u-suc"></div>'
        }
        e.className = "ncpt_txt_status TxtStatus statusTxt";
        this.__states["slidecap"] = 0
    };
    f.__cbVftcp = function(e) {
        this.__clearSlideErr();
        this.__slideCapLock = 0;
        this.__setSlideSuc();
        this.__checkNextBtn();
        if (e) this._$dispatchEvent("onSlideOk")
    };
    f.__unLockLogin = function() {
        this._$dispatchEvent("onUnLockLogin")
    };
    f.__cbVftcpEx = function(e) {
        var t, i;
        this.__slideCapLock = 0;
        this.__unLockLogin();
        if (e) {
            t = e.ret;
            if ("441" == t) {
                this.__needSlideCap = 0;
                this.__needCheckCode = 1;
                this._$refreshCheckCode(t);
                i = a[t];
                s._$showError({
                    name: "checkcode"
                },
                i, "nerror")
            } else if ("444" == t || "445" == t) {
                this.__needSlideCap = 1;
                this.__needCheckCode = 0;
                this._$refreshCheckCode(t);
                s._$showError({
                    name: "slide"
                },
                this.__slideTxt, "nerror")
            } else {
                i = a[t];
                s._$showError({
                    name: "slide"
                },
                i, "nerror");
                this._$getSlideCap()
            }
        } else s._$showError({
            name: "slide"
        },
        this.__slideTxt, "nerror")
    };
    f.__slidebarover = function() {
        if (this.__sdot) this.__sdot = clearTimeout(this.__sdot);
        this.__sdov = setTimeout(function() {
            this.__slideCapBox.style.zIndex = "501"
        }._$bind(this), 100)
    };
    f.__slidebarout = function() {
        if (this.__sdov) this.__sdov = clearTimeout(this.__sdov);
        this.__sdot = setTimeout(function() {
            this.__slideCapBox.style.zIndex = "19"
        }._$bind(this), 100)
    };
    f.__clearSlideErr = function() {
        s._$removeError({
            name: "slide"
        },
        "nerror")
    };
    f.__vSlide = function() {
        if (!this.__myCaptcha) return 1;
        var e = this.__myCaptcha.getPwd() || "";
        if ("" == e || "LG42Dm53vsrZmrXdZ6buHUVNfQcsLzql1gV7HFhl5yZzlILOJmPEY+r+vJComfirFG2deb709GYQQIob6ke6c31j6W+FKrE6QEghCshv5Kc=" == e) return 1;
        else return 0
    };
    f._$getSlideCap = function() {
        this.__slideOpt.captchaType = this.__slideTarget;
        this.__slideOpt.element = t._$get("ScapTcha");
        if (window._$needUrsBgp && window._$BGP) {
            this.__slideOpt.apiServer = "captcha2.reg.163.com/v2";
            this.__slideOpt.staticServer = "captcha2.reg.163.com/v2"
        }
        this.__slideOpt.showDelay = 300;
        var e = t._$getChildren(this.__slideOpt.element);
        if (this.__myCaptcha && e.length && e.length > 0) this.__myCaptcha.refresh(this.__slideOpt);
        else this.__myCaptcha = new window.NECaptcha(this.__slideOpt);
        setTimeout(function() {
            i._$addEvent(this.__slideCapBox, "mouseout", this.__slidebarout._$bind(this));
            i._$addEvent(this.__slideCapBox, "mouseover", this.__slidebarover._$bind(this))
        }._$bind(this), 300)
    };
    f._$refreshCheckCode = function(e) {
        if (this.__needSlideCap) this._$showSlideCode(e);
        else if (this.__needCheckCode) this._$showCheckCode()
    };
    f._$hasCheckCode = function() {
        return this.__needCheckCode || this.__needSlideCap
    };
    f._$showSlideCode = function(e) {
        if ("444" == e || "109" == e) {
            this.__cf = 4;
            this.__slideTarget = 2;
            this.__slideTxt = "请滑动验证码"
        } else {
            this.__cf = 5;
            this.__slideTarget = 3;
            this.__slideTxt = "请点击验证码"
        }
        this._$hideCheckCode();
        this.__needSlideCap = 1;
        this.__states["slidecap"] = 1;
        t._$delClassName(this.__slideCapBox, "f-dn");
        this.__slideLock = 0;
        this._$getSlideCap();
        this._$dispatchEvent("ondisabled", 1);
        this.__checkNextBtn();
        var i = t._$get("cnt-box-parent");
        t._$addClassName(i, "hascheckcode");
        setTimeout(function() {
            s._$resize()
        },
        200)
    };
    f._$hideCheckCode = function() {
        var e = t._$get("cnt-box-parent");
        t._$delClassName(e, "hascheckcode");
        this.__states["checkcode"] = 0;
        this.__states["slidecap"] = 0;
        this.__needSlideCap = 0;
        this.__needCheckCode = 0;
        t._$addClassName(this.__checkCode, "f-dn");
        t._$addClassName(this.__slideCapBox, "f-dn");
        s._$resize()
    };
    return o
},
"835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "bc94abb3037ef580f8190334c57f0a74", "aadc4ea4a582128d908f4a7c891dcae1", "11481f1a08cb01b3ace621353354f8da");
I$("b5b4e8bb04993f2cf3dcc2d7c0e7fc7f",
function(e, t, i, n, r, s) {
    i.__focusElement = function() {
        var i = function(i, n) {
            var r = e._$getElement(n);
            if (!r.value) t._$delClassName(r, i)
        };
        var n = function(i, n) {
            t._$addClassName(e._$getElement(n), i)
        };
        return function(t, r, s) {
            if (1 == r) e._$addEvent(t, "blur", i._$bind(null, s));
            if (1 == r || r == -1) e._$addEvent(t, "focus", n._$bind(null, s))
        }
    } ();
    return i
},
"7214a135f5e14d9b78ea74e4de768e85", "4c563cfb767e6eff2573caba9105d3e5");
I$("226be6477838e16ce5cab5a509209162",
function(e, t, i, n, r, s, a, o) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "3.0") I$(23,
    function() {
        t.__focusElement = function() {
            var e = function(e, t) {
                n._$delClassName(i._$getElement(t), e)
            };
            return t.__focusElement._$aop(function(t) {
                var n = t.args;
                if (1 != n[1]) {
                    i._$addEvent(n[0], "blur", e._$bind(null, n[2]));
                    n[1] = -1
                }
            })
        } ()
    });
    return t
},
"b4448d35d10d290252e905174939b60a", "b5b4e8bb04993f2cf3dcc2d7c0e7fc7f", "7214a135f5e14d9b78ea74e4de768e85", "4c563cfb767e6eff2573caba9105d3e5");
I$("be79213f9533067af066189d5e8691e5",
function(e, t, i, n, r, s, a, o, _) {
    s._$focus = function(e, r) {
        e = i._$get(e);
        if (e) {
            var s = 0,
            a = "js-focus";
            if (t._$isNumber(r)) s = r;
            else if (t._$isString(r)) a = r;
            else if (t._$isObject(r)) {
                s = r.mode || s;
                a = r.clazz || a
            }
            var o = parseInt(i._$dataset(e, "mode"));
            if (!isNaN(o)) s = o;
            o = i._$dataset(e, "focus");
            if (o) a = o;
            n.__focusElement(e, s, a)
        }
    };
    r._$merge(s);
    if (!0) e.copy(e.P("nej.e"), s);
    return s
},
"9693d84387adb23be03bb7122d0b801b", "f46be3347a20bfdd40810d04c5816b16", "4c563cfb767e6eff2573caba9105d3e5", "226be6477838e16ce5cab5a509209162", "5ee5c01e7d48ffc2b247c899939ea5a3");
I$("129d7424d58f5c3cb576e52b90f56f04",
function(e) {
    e.__length = function() {
        var e = /(\r\n|\r|\n)/g;
        return function(t) {
            return (t || "").replace(e, "**").length
        }
    } ();
    return e
},
"b4448d35d10d290252e905174939b60a");
I$("408ba6a5d15be86092d17e1d1c67fe1b",
function(e, t) {
    if ("trident" === e._$KERNEL.engine) I$(22,
    function() {
        t.__length = function() {
            return (_event.args[0] || "").length
        }
    });
    return t
},
"b4448d35d10d290252e905174939b60a", "129d7424d58f5c3cb576e52b90f56f04");
I$("d6cd01ff953bf1a14fa6ad2aeead2bc5",
function(e, t, i, n, r, s, a, o, _, c) {
    a._$counter = function() {
        var e = /[\r\n]/gi,
        r = {};
        var a = function(e) {
            return s.__length(e)
        };
        var o = function(e) {
            var i = r[e],
            n = t._$get(e),
            s = t._$get(i.xid);
            if (n && i) {
                var a = {
                    input: n.value
                };
                a.length = i.onlength(a.input);
                a.delta = i.max - a.length;
                i.onchange(a);
                s.innerHTML = a.value || "剩余" + Math.max(0, a.delta) + "个字"
            }
        };
        return function(e, s) {
            var c = t._$id(e);
            if (c && !r[c]) {
                var u = n._$merge({},
                s);
                u.onchange = u.onchange || _;
                u.onlength = a;
                if (!u.max) {
                    var f = parseInt(t._$attr(c, "maxlength")),
                    d = parseInt(t._$dataset(c, "maxLength"));
                    u.max = f || d || 100;
                    if (!f && d) u.onlength = n._$length
                }
                r[c] = u;
                i._$addEvent(c, "input", o._$bind(null, c));
                var h = t._$wrapInline(c, {
                    nid: u.nid || "js-counter",
                    clazz: u.clazz
                });
                u.xid = t._$id(h);
                o(c)
            }
        }
    } ();
    r._$merge(a);
    if (!0) e.copy(e.P("nej.e"), a);
    return a
},
"9693d84387adb23be03bb7122d0b801b", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "5ee5c01e7d48ffc2b247c899939ea5a3", "408ba6a5d15be86092d17e1d1c67fe1b");
I$("49ef10fc92f237ef1b30d20c8b6b8ae9",
function(e, t, i, n) {
    e.__setPlaceholder = function(e, t) {};
    return e
});
I$("fc9b3df5b7414007586f0e01b421fcca",
function(e, t, i, n, r, s, a, o, _) {
    if ("trident" === e._$KERNEL.engine && e._$KERNEL.release <= "5.0") I$(26,
    function() {
        r.__setPlaceholder = function() {
            var e = {},
            r = {
                nid: "j-holder-" + n._$uniqueID()
            };
            var s = function(i) {
                var n = t._$get(i);
                e[i] = 2;
                if (!n.value) t._$setStyle(t._$wrapInline(n, r), "display", "none")
            };
            var a = function(i) {
                var n = t._$get(i);
                e[i] = 1;
                if (!n.value) t._$setStyle(t._$wrapInline(n, r), "display", "")
            };
            var o = function(i) {
                var n = t._$get(i);
                if (2 != e[i]) t._$setStyle(t._$wrapInline(n, r), "display", !n.value ? "": "none")
            };
            var _ = function(e, i) {
                var n = t._$id(e),
                s = t._$wrapInline(e, {
                    tag: "label",
                    clazz: i,
                    nid: r.nid
                });
                s.htmlFor = n;
                var a = t._$attr(e, "placeholder") || "";
                s.innerText = "null" == a ? "": a;
                var o = e.offsetHeight + "px";
                t._$style(s, {
                    left: 0,
                    display: !e.value ? "": "none"
                })
            };
            return function(t, n) {
                if (null == e[t.id]) {
                    _(t, n);
                    var r = t.id;
                    e[r] = 1;
                    i._$addEvent(t, "blur", a._$bind(null, r));
                    i._$addEvent(t, "focus", s._$bind(null, r));
                    i._$addEvent(t, "input", o._$bind(null, r))
                }
            }
        } ()
    });
    return r
},
"b4448d35d10d290252e905174939b60a", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "49ef10fc92f237ef1b30d20c8b6b8ae9");
I$("35e0f5a79e8b164ce455d0b393e6412b",
function(e, t, i, n, r, s, a, o) {
    r._$placeholder = function(e, i) {
        e = t._$get(e);
        n.__setPlaceholder(e, t._$dataset(e, "holder") || i || "js-placeholder")
    };
    i._$merge(r);
    if (!0) e.copy(e.P("nej.e"), r);
    return r
},
"9693d84387adb23be03bb7122d0b801b", "4c563cfb767e6eff2573caba9105d3e5", "5ee5c01e7d48ffc2b247c899939ea5a3", "fc9b3df5b7414007586f0e01b421fcca");
I$("a400a80edd93e3919b3288fd5dd668cc",
function(e, t, i, n, r, s, a, o, _, c, u, f, d, h) {
    c._$$WebForm = t._$klass();
    h = c._$$WebForm._$extend(s._$$EventTarget);
    h.__init = function() {
        this.__super();
        this.__wopt = {
            tp: {
                nid: "js-nej-tp"
            },
            ok: {
                nid: "js-nej-ok"
            },
            er: {
                nid: "js-nej-er"
            }
        }
    };
    h.__reset = function(e) {
        this.__super(e);
        this.__form = document.forms[e.form] || i._$get(e.form);
        this.__doInitDomEvent([[this.__form, "enter", this._$dispatchEvent._$bind(this, "onenter")]]);
        this.__message = e.message || {};
        this.__message.pass = this.__message.pass || "&nbsp;";
        var t = this.__dataset(this.__form, "focusMode", 1);
        if (!isNaN(t)) this.__fopt = {
            mode: t,
            clazz: e.focus
        };
        this.__holder = e.holder;
        this.__wopt.tp.clazz = "js-mhd " + (e.tip || "js-tip");
        this.__wopt.ok.clazz = "js-mhd " + (e.pass || "js-pass");
        this.__wopt.er.clazz = "js-mhd " + (e.error || "js-error");
        this.__invalid = e.invalid || "js-invalid";
        this.__doInitValidRule(e);
        this._$refresh();
        if (this.__fnode) this.__fnode.focus()
    };
    h.__destroy = function() {
        this.__super();
        this._$reset();
        delete this.__message;
        delete this.__fnode;
        delete this.__vinfo;
        delete this.__xattr;
        delete this.__form;
        delete this.__treg;
        delete this.__vfun
    };
    h.__dataset = function(e, t, n) {
        var r = i._$dataset(e, t);
        switch (n) {
        case 1:
            return parseInt(r, 10);
        case 2:
            return "true" == (r || "").toLowerCase();
        case 3:
            return this.__doParseDate(r)
        }
        return r
    };
    h.__number = function(e, t, i) {
        if ("date" == t) return this.__doParseDate(e, i);
        else return parseInt(e, 10)
    };
    h.__isValidElement = function() {
        var e = /^button|submit|reset|image|hidden|file$/i;
        return function(t) {
            t = this._$get(t) || t;
            var i = t.type;
            return !! t.name && !e.test(t.type || "")
        }
    } ();
    h.__isValueElement = function() {
        var e = /^hidden$/i;
        return function(t) {
            if (this.__isValidElement(t)) return ! 0;
            t = this._$get(t) || t;
            var i = t.type || "";
            return e.test(i)
        }
    } ();
    h.__doParseDate = function() {
        var e = /[:\.]/;
        return function(t, i) {
            if ("now" == (t || "").toLowerCase()) return + new Date;
            var n = r._$var2date(t);
            if (n && !e.test(t)) {
                var s = (i || "").split(e);
                n.setHours(parseInt(s[0], 10) || 0, parseInt(s[1], 10) || 0, parseInt(s[2], 10) || 0, parseInt(s[3], 10) || 0)
            }
            return + n
        }
    } ();
    h.__doCheckString = function(e, t) {
        var i = this.__vfun[t],
        n = this.__dataset(e, t);
        if (n && i) {
            this.__doPushValidRule(e, i);
            this.__doSaveValidInfo(e, t, n)
        }
    };
    h.__doCheckPattern = function(e, t) {
        try {
            var i = this.__dataset(e, t);
            if (!i) return;
            var n = new RegExp(i);
            this.__doSaveValidInfo(e, t, n);
            this.__doPushValidRule(e, this.__vfun[t])
        } catch(r) {}
    };
    h.__doCheckBoolean = function(e, t) {
        var i = this.__vfun[t];
        if (i && this.__dataset(e, t, 2)) this.__doPushValidRule(e, i);
    };
    h.__doCheckNumber = function(e, t, i) {
        i = parseInt(i, 10);
        if (!isNaN(i)) {
            this.__doSaveValidInfo(e, t, i);
            this.__doPushValidRule(e, this.__vfun[t])
        }
    };
    h.__doCheckDSNumber = function(e, t) {
        this.__doCheckNumber(e, t, this.__dataset(e, t))
    };
    h.__doCheckATNumber = function(e, t) {
        this.__doCheckNumber(e, t, i._$attr(e, t))
    };
    h.__doCheckTPNumber = function(e, t, i) {
        var n = this.__number(this.__dataset(e, t), this.__dataset(e, "type"));
        this.__doCheckNumber(e, t, n)
    };
    h.__doCheckCustomAttr = function(e) {
        r._$loop(this.__xattr,
        function(t, n) {
            var r = i._$dataset(e, n);
            if (null != r) {
                this.__doSaveValidInfo(e, n, r);
                this.__doPushValidRule(e, this.__vfun[n])
            }
        },
        this)
    };
    h.__doPrepareElement = function() {
        var e = /^input|textarea$/i,
        t = /[:\.]/;
        var r = function(e) {
            this._$showTip(n._$getElement(e))
        };
        var s = function(e) {
            var t = n._$getElement(e);
            if (!this.__dataset(t, "ignore", 2)) this.__doCheckValidity(t)
        };
        return function(t) {
            if (this.__dataset(t, "autoFocus", 2)) this.__fnode = t;
            var n = i._$attr(t, "placeholder");
            if (n && "null" != n) _._$placeholder(t, this.__holder);
            if (this.__fopt && e.test(t.tagName)) a._$focus(t, this.__fopt);
            var c = i._$id(t);
            this.__doCheckBoolean(c, "required");
            this.__doCheckString(c, "type");
            this.__doCheckPattern(c, "pattern");
            this.__doCheckATNumber(c, "maxlength");
            this.__doCheckATNumber(c, "minlength");
            this.__doCheckDSNumber(c, "maxLength");
            this.__doCheckDSNumber(c, "minLength");
            this.__doCheckTPNumber(c, "min");
            this.__doCheckTPNumber(c, "max");
            this.__doCheckCustomAttr(c);
            var f = i._$dataset(c, "time");
            if (f) this.__doSaveValidInfo(c, "time", f);
            var d = t.name;
            this.__message[d + "-tip"] = this.__dataset(t, "tip");
            this.__message[d + "-error"] = this.__dataset(t, "message");
            this._$showTip(t);
            var h = this.__vinfo[c],
            l = (h || u).data || u,
            N = this.__dataset(t, "counter", 2);
            if (N && (l.maxlength || l.maxLength)) o._$counter(c, {
                nid: this.__wopt.tp.nid,
                clazz: "js-counter"
            });
            if (h && e.test(t.tagName)) this.__doInitDomEvent([[t, "focus", r._$bind(this)], [t, "blur", s._$bind(this)]]);
            else if (this.__dataset(t, "focus", 2)) this.__doInitDomEvent([[t, "focus", r._$bind(this)]])
        }
    } ();
    h.__doInitValidRule = function() {
        var t = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            email1: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            email2: /^[\w-\.]+$/i,
            date: function(e, t) {
                var i = this.__dataset(t, "format") || "yyyy-MM-dd";
                return ! e || !isNaN(this.__doParseDate(e)) && r._$format(this.__doParseDate(e), i) == e
            }
        };
        var i = {
            required: function(e) {
                var t = e.type,
                i = !e.value,
                n = ("checkbox" == t || "radio" == t) && !e.checked;
                if (n || i) return - 1
            },
            type: function(e, t) {
                var i = this.__treg[t.type],
                n = e.value.trim(),
                s = !!i.test && !i.test(n),
                a = r._$isFunction(i) && !i.call(this, n, e);
                if (s || a) return - 2
            },
            pattern: function(e, t) {
                if (!t.pattern.test(e.value)) return - 3
            },
            maxlength: function(e, t) {
                if (e.value.length > t.maxlength) return - 4
            },
            minlength: function(e, t) {
                if (e.value.length < t.minlength) return - 5
            },
            maxLength: function(e, t) {
                if (r._$length(e.value) > t.maxLength) return - 4
            },
            minLength: function(e, t) {
                if (r._$length(e.value) < t.minLength) return - 5
            },
            min: function(e, t) {
                var i = this.__number(e.value, t.type, t.time);
                if (isNaN(i) || i < t.min) return - 6
            },
            max: function(e, t) {
                var i = this.__number(e.value, t.type, t.time);
                if (isNaN(i) || i > t.max) return - 7
            }
        };
        var n = function(e, t, i, n) {
            var s = e[i];
            if (!r._$isFunction(t) || !r._$isFunction(s)) e[i] = t;
            else e[i] = s._$aop(t)
        };
        return function(s) {
            if (s.domain) t.email = t.email2;
            else t.email = t.email1;
            this.__treg = e.X({},
            t);
            r._$loop(s.type, n._$bind(null, this.__treg));
            this.__vfun = e.X({},
            i);
            this.__xattr = s.attr;
            r._$loop(this.__xattr, n._$bind(null, this.__vfun))
        }
    } ();
    h.__doPushValidRule = function(e, t) {
        if (r._$isFunction(t)) {
            var i = this.__vinfo[e];
            if (!i || !i.func) {
                i = i || {};
                i.func = [];
                this.__vinfo[e] = i
            }
            i.func.push(t)
        }
    };
    h.__doSaveValidInfo = function(e, t, i) {
        if (t) {
            var n = this.__vinfo[e];
            if (!n || !n.data) {
                n = n || {};
                n.data = {};
                this.__vinfo[e] = n
            }
            n.data[t] = i
        }
    };
    h.__doCheckValidity = function(e) {
        e = this._$get(e) || e;
        if (!e) return ! 0;
        var t = this.__vinfo[i._$id(e)];
        if (!t && this.__isValidElement(e)) {
            this.__doPrepareElement(e);
            t = this.__vinfo[i._$id(e)]
        }
        if (!t) return ! 0;
        var n;
        r._$forIn(t.func,
        function(i) {
            n = i.call(this, e, t.data);
            return null != n
        },
        this);
        if (null == n) {
            var s = {
                target: e,
                form: this.__form
            };
            this._$dispatchEvent("oncheck", s);
            n = s.value
        }
        var s = {
            target: e,
            form: this.__form
        };
        if (null != n) {
            if (r._$isObject(n)) r._$merge(s, n);
            else s.code = n;
            this._$dispatchEvent("oninvalid", s);
            if (!s.stopped) this._$showMsgError(e, s.value || this.__message[e.name + n])
        } else {
            this._$dispatchEvent("onvalid", s);
            if (!s.stopped) this._$showMsgPass(e, s.value)
        }
        return null == n
    };
    h.__doShowMessage = function() {
        var e = {
            tp: "tip",
            ok: "pass",
            er: "error"
        };
        var t = function(e, t) {
            return e == t ? "block": "none"
        };
        var n = function(e, t, n) {
            var r = s.call(this, e, t);
            if (!r && n) r = i._$wrapInline(e, this.__wopt[t]);
            return r
        };
        var s = function(t, n) {
            var r = i._$get(t.name + "-" + e[n]);
            if (!r) r = i._$getByClassName(t.parentNode, this.__wopt[n].nid)[0];
            return r
        };
        return function(e, a, o) {
            e = this._$get(e) || e;
            if (e) {
                "er" == o ? i._$addClassName(e, this.__invalid) : i._$delClassName(e, this.__invalid);
                var _ = n.call(this, e, o, a);
                if (_ && a) _.innerHTML = a;
                r._$loop(this.__wopt,
                function(n, r) {
                    i._$setStyle(s.call(this, e, r), "display", t(o, r))
                },
                this)
            }
        }
    } ();
    h._$showTip = function(e, t) {
        this.__doShowMessage(e, t || this.__message[e.name + "-tip"], "tp")
    };
    h._$showMsgPass = function(e, t) {
        this.__doShowMessage(e, t || this.__message[e.name + "-pass"] || this.__message.pass, "ok")
    };
    h._$showMsgError = function(e, t) {
        this.__doShowMessage(e, t || this.__message[e.name + "-error"], "er")
    };
    h._$setValue = function() {
        var e = /^(?:radio|checkbox)$/i;
        var t = function(e) {
            return null == e ? "": e
        };
        var i = function(e, i) {
            if (i.multiple) {
                var n;
                if (!r._$isArray(e)) n[e] = e;
                else n = r._$array2object(e);
                r._$forEach(i.options,
                function(e) {
                    e.selected = null != n[e.value]
                })
            } else i.value = t(e)
        };
        var n = function(n, r) {
            if (e.test(r.type || "")) r.checked = n == r.value;
            else if ("SELECT" == r.tagName) i(n, r);
            else r.value = t(n)
        };
        return function(e, t) {
            var i = this._$get(e);
            if (i) if ("SELECT" == i.tagName || !i.length) n(t, i);
            else r._$forEach(i, n._$bind(null, t))
        }
    } ();
    h._$get = function(e) {
        return this.__form.elements[e]
    };
    h._$form = function() {
        return this.__form
    };
    h._$data = function() {
        var e = /^radio|checkbox$/i,
        t = /^number|date$/;
        var n = function(e) {
            if ("SELECT" == e.tagName && e.multiple) {
                var t = [];
                r._$forEach(e.options,
                function(e) {
                    if (e.selected) t.push(e.value)
                });
                return t.length > 0 ? t: ""
            }
            return e.value
        };
        var s = function(s, a) {
            var o = a.name,
            _ = n(a),
            c = s[o],
            u = this.__dataset(a, "type"),
            f = i._$dataset(a, "time");
            if (t.test(u)) if (r._$isArray(_)) r._$forEach(_,
            function(e, t, i) {
                i[t] = this.__number(e, u, f)
            },
            this);
            else _ = this.__number(_, u, f);
            if (e.test(a.type) && !a.checked) {
                _ = this.__dataset(a, "value");
                if (!_) return
            }
            if (c) {
                if (!r._$isArray(c)) {
                    c = [c];
                    s[o] = c
                }
                c.push(_)
            } else s[o] = _
        };
        return function() {
            var e = {};
            r._$forEach(this.__form.elements,
            function(t) {
                if (this.__isValueElement(t)) s.call(this, e, t)
            },
            this);
            return e
        }
    } ();
    h._$reset = function() {
        var e = function(e) {
            if (this.__isValidElement(e)) this._$showTip(e)
        };
        return function() {
            this.__form.reset();
            r._$forEach(this.__form.elements, e, this)
        }
    } ();
    h._$submit = function() {
        this.__form.submit()
    };
    h._$refresh = function() {
        var e = function(e) {
            if (this.__isValidElement(e)) this.__doPrepareElement(e)
        };
        return function() {
            this.__vinfo = {};
            r._$forEach(this.__form.elements, e, this)
        }
    } ();
    h._$checkValidity = function(e, t) {
        e = this._$get(e) || e;
        if (e) return this.__doCheckValidity(e);
        var i = !0;
        r._$forEach(this.__form.elements,
        function(e) {
            var n = this._$checkValidity(e);
            i = i && n;
            if (!i && t) return ! 0
        },
        this);
        return i
    };
    if (!0) e.copy(e.P("nej.ut"), c);
    return c
},
"9693d84387adb23be03bb7122d0b801b", "835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "8dba95a690ae256ada6319336b0cf4d6", "be79213f9533067af066189d5e8691e5", "d6cd01ff953bf1a14fa6ad2aeead2bc5", "35e0f5a79e8b164ce455d0b393e6412b");
I$("932a2be113fab1676ce3d6a5fddf34f0",
function(e, t, i, n, r) {
    var s;
    r._$$WebForm = e._$klass();
    s = r._$$WebForm._$extend(n._$$WebForm);
    s.__doCheckValidity = function(e) {
        var n;
        e = this._$get(e) || e;
        if (!e) return ! 0;
        var r = this.__vinfo[i._$id(e)];
        if (!r && this.__isValidElement(e)) {
            this.__doPrepareElement(e);
            r = this.__vinfo[i._$id(e)]
        }
        if (!r) return ! 0;
        var s;
        t._$forIn(r.func,
        function(t) {
            s = t.call(this, e, r.data);
            return null != s
        },
        this);
        if (null == s) {
            n = {
                target: e,
                form: this.__form
            };
            this._$dispatchEvent("oncheck", n);
            s = n.value
        }
        n = {
            target: e,
            form: this.__form
        };
        if (null != s) {
            if (t._$isObject(s)) t._$merge(n, s);
            else n.code = s;
            this._$dispatchEvent("oninvalid", n);
            if (!n.stopped) this._$showMsgError(e, n.value || this.__message[e.name + s])
        } else {
            this._$dispatchEvent("onvalid", n);
            if (!n.stopped) this._$showMsgPass(e, n.value)
        }
        if (n.ignore) return ! 0;
        else return null == s
    };
    return r
},
"835a8693a54280be3882f53f1be76e30", "f46be3347a20bfdd40810d04c5816b16", "4c563cfb767e6eff2573caba9105d3e5", "a400a80edd93e3919b3288fd5dd668cc");
I$("605b9db915005328230aaf237c21852b",
function(e, t, i, n, r, s, a, o, _, c) {
    s._$$SelectHelper = t._$klass();
    c = s._$$SelectHelper._$extend(r._$$EventTarget);
    c.__reset = function(e) {
        this.__super(e);
        this.__loop = !!e.loopable;
        this.__parent = i._$get(e.parent);
        this.__selected = e.selected || "js-selected";
        this.__hovered = e.hover || this.__selected;
        this.__nopt = {};
        if (e.clazz) {
            this.__nopt.filter = i._$hasClassName._$bind2(i, e.clazz);
            this.__clazz = e.clazz
        }
        this.__kbody = this.__getKeyBoardParent(this.__parent);
        this.__doInitDomEvent([[this.__kbody, "keydown", this.__doCheckKBAction._$bind(this), !0], [this.__kbody, "enter", this.__doCheckKBEnter._$bind(this)], [this.__parent, "click", this.__onCheckClick._$bind(this)], [this.__parent, "mouseover", this.__onCheckHover._$bind(this)], [this.__parent, "mouseleave", this.__onCheckLeave._$bind(this)]])
    };
    c.__destroy = function() {
        this.__super();
        delete this.__selected;
        delete this.__hovered;
        delete this.__parent;
        delete this.__kbody;
        delete this.__clazz;
        delete this.__nopt;
        delete this.__loop
    };
    c.__isItemElement = function(e) {
        if (this.__clazz) return i._$hasClassName(e, this.__clazz);
        else return e.parentNode == this.__parent
    };
    c.__getKeyBoardParent = function() {
        var e = 1e3;
        return function(t) {
            for (; t && (parseInt(t.tabIndex) || 0) <= e;) t = t.parentNode;
            return t || document
        }
    } ();
    c.__getItemElement = function(e) {
        var t = i._$getByClassName(this.__parent, e);
        return ! t ? null: t[0]
    };
    c.__doSyncSelection = function(e, t) {
        i._$delClassName(e.last, t);
        i._$addClassName(e.target, t);
        if (t == this.__selected && e.last != e.target) {
            this.__doScrollToView(e.target);
            this._$dispatchEvent("onchange", e)
        }
    };
    c.__doScrollToView = function(e) {
        var t = i._$getScrollViewPort(e),
        n = i._$offset(e, t);
        if (! (n.y - t.scrollTop < 0)) {
            var r = n.y + e.offsetHeight - t.clientHeight;
            if (r > t.scrollTop) t.scrollTop = r
        } else t.scrollTop = n.y
    };
    c.__doParseSelection = function(e, t) {
        var i = n._$getElement(e, this.__isItemElement._$bind(this));
        return ! i ? null: {
            last: this.__getItemElement(t),
            target: i
        }
    };
    c.__doCheckKBAction = function(e) {
        var t = e.keyCode;
        if (38 == t || 40 == t) {
            n._$stop(e);
            var r = {
                last: this._$getSelectedNode()
            };
            this.__nopt.backward = 38 == t;
            var s = !this.__clazz ? i._$getChildren(this.__parent) : i._$getByClassName(this.__parent, this.__clazz),
            a = this.__nopt.backward ? s[s.length - 1] : s[0];
            if (!r.last) r.target = this.__getItemElement(this.__hovered) || a;
            else r.target = i._$getSibling(r.last, this.__nopt);
            if (!r.target) {
                if (!this.__loop || s.length <= 1) return;
                r.target = a
            }
            this.__doSyncSelection(r, this.__selected)
        }
    };
    c.__doCheckKBEnter = function(e) {
        n._$stop(e);
        this._$dispatchEvent("onselect", {
            enter: !0,
            target: this._$getSelectedNode()
        })
    };
    c.__onCheckClick = function(e) {
        n._$stop(e);
        var t = this.__doParseSelection(e, this.__selected);
        if (t) {
            this.__doSyncSelection(t, this.__selected);
            this._$dispatchEvent("onselect", {
                target: t.target
            })
        }
    };
    c.__onCheckHover = function(e) {
        var t = this.__doParseSelection(e, this.__hovered);
        if (t) {
            this.__doSyncSelection(t, this.__hovered);
            if (this.__kbody.focus) this.__kbody.focus()
        }
    };
    c.__onCheckLeave = function(e) {
        if (this.__hovered != this.__selected) i._$delClassName(this.__getItemElement(this.__hovered), this.__hovered)
    };
    c._$getSelectedNode = function() {
        return this.__getItemElement(this.__selected)
    };
    if (!0) e.copy(e.P("nej.ut"), s);
    return s
},
"9693d84387adb23be03bb7122d0b801b", "835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "8dba95a690ae256ada6319336b0cf4d6");
I$("b1e4824e9c72a686bc9243f5550da9ee",
function(e, t, i, n, r, s, a, o, _) {
    var c;
    s._$$Suggest = t._$klass();
    c = s._$$Suggest._$extend(n._$$EventTarget);
    c.__init = function() {
        this.__sopt = {
            loopable: !0,
            onselect: this.__onSelect._$bind(this),
            onchange: this.__onSelectionChange._$bind(this)
        };
        this.__super()
    };
    c.__reset = function(e) {
        this.__super(e);
        this.__auto = !!e.autofill;
        this.__input = i._$get(e.input);
        this.__sopt.clazz = e.clazz;
        this.__sopt.parent = i._$get(e.body);
        this.__sopt.selected = e.selected || "js-selected";
        this.__doInitDomEvent([[this.__input, "input", this.__onInput._$bind(this)], [this.__input, "focus", this.__onInput._$bind(this)]]);
        if (!e.noblur) this.__doInitDomEvent([[this.__input, "blur", this.__onBlur._$bind(this)]]);
        this._$visibile(!1);
        this.__helper = r._$$SelectHelper._$allocate(this.__sopt)
    };
    c.__destroy = function() {
        this.__super();
        if (this.__helper) {
            this.__helper._$recycle();
            delete this.__helper
        }
        delete this.__xxx;
        delete this.__input;
        delete this.__sopt.parent
    };
    c.__onBlur = function() {
        this.__onSelect({
            target: this.__helper._$getSelectedNode()
        })
    };
    c.__onInput = function() {
        var e = this.__input.value.trim();
        if (!e) this._$visibile(!1);
        else if (!this.__xxx) this._$dispatchEvent("onchange", e)
    };
    c.__doUpdateValue = function(e) {
        if (!this.__xxx) {
            this.__xxx = !0;
            if (e && e != this.__input.value) this.__input.value = e;
            this.__xxx = !1
        }
    };
    c.__onSelect = function(e) {
        if ("hidden" != i._$getStyle(this.__sopt.parent, "visibility")) {
            var t = i._$dataset(e.target, "value") || "";
            this.__doUpdateValue(t);
            t = t || this.__input.value;
            this._$update("");
            this._$dispatchEvent("onselect", t, {
                target: e.target,
                enter: e.enter,
                value: t
            })
        }
    };
    c.__onSelectionChange = function(e) {
        if (this.__auto) this.__doUpdateValue(i._$dataset(e.target, "value") || "")
    };
    c._$setList = function(e) {
        this._$visibile( !! e && e.length > 0)
    };
    c._$visibile = function(e) {
        var e = !e ? "hidden": "visible";
        this.__sopt.parent.style.visibility = e;
        if ("hidden" === e) this.__sopt.parent.innerHTML = ""
    };
    c._$update = function(e) {
        this.__sopt.parent.innerHTML = e || "&nbsp;";
        this._$visibile( !! e)
    };
    if (!0) e.copy(e.P("nej.ut"), s);
    return s
},
"9693d84387adb23be03bb7122d0b801b", "835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "8dba95a690ae256ada6319336b0cf4d6", "605b9db915005328230aaf237c21852b");
I$("35a727632990d04d080f638dc4e495f3", ".#<uispace>-parent{position:relative;}\n.#<uispace>{position:absolute;border:1px solid #aaa;background:#fff;text-align:left;visibility:hidden;}\n.#<uispace> .zitm{height:20px;line-height:20px;cursor:default;}\n.#<uispace> .js-selected{background:#1257F9;}");
I$("d3c7b8a86b2c2efd140309ff58d25443", '{if defined("xlist")&&!!xlist.length}\n  {list xlist as x}<div class="zitm" data-value="${x}">${x}</div>{/list}\n{/if}');
I$("db205e6cac594cf3f283c8d22a8226de",
function(e, t, i, n, r, s, a, o, _, c, u, f, d) {
    var h = i._$pushCSSText(o),
    l = a._$add(_),
    N;
    c._$$Suggest = t._$klass();
    N = c._$$Suggest._$extend(r._$$Abstract);
    N.__init = function() {
        this.__sopt = {
            onchange: this.__onChange._$bind(this),
            onselect: this.__onSelect._$bind(this)
        };
        this.__super()
    };
    N.__reset = function(e) {
        this.__super(e);
        this.__sopt.autofill = 0 != e.autofill;
        this.__sopt.input = i._$get(e.input);
        this.__sopt.input.insertAdjacentElement("afterEnd", this.__body);
        this.__suggest = s._$$Suggest._$allocate(this.__sopt)
    };
    N.__destroy = function() {
        if (this.__suggest) {
            this.__suggest._$recycle();
            delete this.__suggest
        }
        this.__super();
        delete this.__sopt.input
    };
    N.__initXGui = function() {
        this.__seed_css = h
    };
    N.__initNode = function() {
        this.__super();
        this.__sopt.body = this.__body
    };
    N.__onChange = function(e) {
        this._$dispatchEvent("onchange", e)
    };
    N.__onSelect = function(e, t) {
        this._$dispatchEvent("onselect", e, t)
    };
    N._$setList = function(e, t) {
        if (n._$isArray(e)) e = a._$get(l, {
            xlist: e
        });
        this.__body.innerHTML = e || "";
        this.__suggest._$setList(!t ? i._$getChildren(this.__body) : i._$getByClassName(this.__body, t))
    };
    if (!0) e.copy(e.P("nej.ui"), c);
    return c
},
"9693d84387adb23be03bb7122d0b801b", "835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "f46be3347a20bfdd40810d04c5816b16", "bc94abb3037ef580f8190334c57f0a74", "b1e4824e9c72a686bc9243f5550da9ee", "220fe029157a5e39da06b616143c612b", "35a727632990d04d080f638dc4e495f3", "d3c7b8a86b2c2efd140309ff58d25443");
I$("1652eeac438ea94d6ffe1d2ff3702a21",
function(e, t, i, n, r, s, a, o, _, c, u, f, d) {
    var h, l = /^[\w-\.@]*$/i;
    c._$$Input = e._$klass();
    h = c._$$Input._$extend(s._$$EventTarget);
    h.__init = function(e) {
        this.__super(e)
    };
    h.__destroy = function() {
        this.__saveInputValue = null;
        this.__focusTimeout = clearTimeout(this.__focusTimeout);
        this.__blurTimeout = clearTimeout(this.__blurTimeout);
        n._$clearEvent(this.__input);
        n._$clearEvent(this.__label);
        this.__super()
    };
    h.__reset = function(e) {
        this.__super(e);
        this.__opts = e.opts || {};
        this.__input = e.node;
        this.__form = e.form;
        this.__isLogin = e.isLogin || 0;
        this.__inputBox = a._$getParent(this.__input, "inputbox");
        this.__clearBtn = i._$getByClassName(this.__inputBox, "u-tip")[0];
        this.__pwdtext = i._$get("pwdtext");
        this.__needClose = e.needClose;
        this.__isUsername = e.isUsername;
        this.__domain = e.domain;
        this.__needEye = this.__opts.needEye;
        if (this.__needEye) this.__hasEye = e.isPwd;
        else this.__hasEye = 0;
        if (this.__isLogin && this.__hasEye && !this.__clearBtn2) {
            i._$addClassName(this.__clearBtn, "m-eye-close");
            var t = i._$create("div", "u-tip-eye m-eye u-pwdshow");
            t.innerHTML = _._$get("eye-tmp", {});
            this.__clearBtn2 = t;
            this.__clearBtn.insertAdjacentElement("beforeBegin", this.__clearBtn2)
        }
        this.__enterNode = e.enterNode;
        this.__label = i._$getByClassName(this.__inputBox, "u-label")[0];
        var n = this.__supportPH();
        var r = i._$dataset(this.__input, "placeholder");
        if (this.__label) if (!n) i._$delClassName(this.__label, "f-dn");
        else {
            i._$addClassName(this.__label, "f-dn");
            i._$attr(this.__input, "placeholder", r)
        }
        this.__initEvent();
        if (this.__isUsername) this.__initSuggest()
    };
    h.__initEvent = function() {
        var e = [[this.__label, "click", this.__doFocus._$bind(this)], [this.__input, "focus", this.__onFocus._$bind(this)], [this.__input, "blur", this.__onBlur._$bind(this)], [this.__input, "input", this.__onInput._$bind(this, 0)], [this.__input, "keyup", this.__doEnter._$bind(this)]];
        if (this.__hasEye) {
            e.push([this.__pwdtext, "blur", this.__onBlur._$bind(this)]);
            e.push([this.__pwdtext, "focus", this.__onFocus._$bind(this)]);
            e.push([this.__pwdtext, "input", this.__onInput._$bind(this, 1)]);
            e.push([this.__pwdtext, "keyup", this.__doEnter._$bind(this)]);
            e.push([this.__clearBtn2, "click", this.__onEye._$bind(this)]);
            e.push([this.__clearBtn, "click", this._$onClear._$bind(this, 2)])
        } else if (this.__needClose) e.push([this.__clearBtn, "click", this._$onClear._$bind(this, 2)]);
        this.__doInitDomEvent(e)
    };
    h.__supportPH = function() {
        var e = t._$KERNEL;
        if ("trident" == e.engine && parseInt(e.release, 10) <= 5) return 0;
        else return 1
    };
    h.__doEnter = function(e) {
        var t = n._$getElement(e),
        i = t.name;
        if ("password" == i && 13 != e.keyCode) this._$dispatchEvent("onPwdKeyUp");
        if (13 == e.keyCode) n._$dispatchEvent(this.__enterNode, "click")
    };
    h.__onEye = function() {
        var e;
        if (!this.__pwdtext.disabled) if (i._$hasClassName(this.__clearBtn2, "eyeactive")) {
            e = this.__pwdtext.value;
            i._$delClassName(this.__clearBtn2, "eyeactive");
            i._$setStyle(this.__pwdtext, "zIndex", -1);
            this.__input.value = e;
            try {
                this.__input.focus()
            } catch(t) {}
            this.__moveToEnd(this.__input)
        } else {
            e = this.__input.value;
            this.__setPwdText(e);
            i._$addClassName(this.__clearBtn2, "eyeactive");
            i._$setStyle(this.__pwdtext, "zIndex", 1);
            try {
                this.__pwdtext.focus()
            } catch(t) {}
            this.__moveToEnd(this.__pwdtext)
        }
    };
    h.__moveToEnd = function(e) {
        var t;
        var i = e.value.length;
        if (e.createTextRange) {
            t = e.createTextRange();
            t.moveStart("character", i);
            t.collapse(!0);
            t.select()
        }
    };
    h.__setPwdText = function(e) {
        this.__pwdtext.value = e
    };
    h.__doFocus = function() {
        try {
            if (i._$hasClassName(this.__clearBtn2, "eyeactive")) this.__pwdtext.focus();
            else this.__input.focus()
        } catch(e) {}
    };
    h.__onFocus = function() {
        if (this.__blurTimeout) this.__blurTimeout = clearTimeout(this.__blurTimeout);
        this._$dispatchEvent("onClearInptTimeout", this.__input);
        var e;
        if (this.__pwdtext && i._$hasClassName(this.__input, "dlpwd")) {
            e = i._$getStyle(this.__pwdtext, "zIndex");
            if ("1" === e) try {
                this.__pwdtext.focus()
            } catch(t) {}
        }
        i._$replaceClassName(this.__inputBox, "error-color", "active");
        if ("password" == this.__input.id && !this.__firstFocus) {
            this.__input.value = "";
            this.__firstFocus = 1
        }
        if (this.__clearBtn && this.__needEye && "" != this.__input.value) i._$setStyle(this.__clearBtn, "display", "block");
        this.__focusTimeout = setTimeout(function() {
            this._$dispatchEvent("onfocus", this.__input);
        }._$bind(this), window._$inputTime)
    };
    h.__onBlur = function() {
        if (this.__focusTimeout) this.__focusTimeout = clearTimeout(this.__focusTimeout);
        this._$dispatchEvent("onClearInptTimeout", this.__input);
        this.__blurTimeout = setTimeout(function() {
            var e = this.__form._$checkValidity(this.__input);
            i._$delClassName(this.__inputBox, "active");
            if (this.__clearBtn && this.__needEye) i._$setStyle(this.__clearBtn, "display", "none");
            this._$dispatchEvent("onstate", e, this.__input)
        }._$bind(this), window._$inputTime)
    };
    h.__onInput = function(e) {
        var t = this.__input;
        if (this.__saveInputValue != t.value) {
            this.__saveInputValue = t.value;
            if (window._$readErrHelper && document.activeElement == this.__input) a._$removeError(this.__input, "nerror");
            if (e) this.__input.value = this.__pwdtext.value;
            var n = (t.value || "").length;
            if (this.__needClose) i._$setStyle(this.__clearBtn, "display", n > 0 ? "block": "none");
            if (n > 0) this.__label.style.display = "none";
            else if (0 == n) this.__label.style.display = "block";
            this._$dispatchEvent("onInput", t, 1)
        }
    };
    h.__initSuggest = function() {
        var e = function(e, t, i) {
            i = i ? " " + i: "";
            return '<div class="itm' + i + '" data-value=' + e + t + ">" + e + t + "</div>"
        };
        var t = function(t) {
            var n = [];
            if (l.test(t)) {
                if (t.indexOf("@") == -1) r._$forEach(this.__suffix,
                function(i) {
                    var r = e(t, i);
                    n.push(r)
                });
                else {
                    var s = t.split("@"),
                    a = s[0],
                    o = s[1];
                    if (t.match(/@/g).length > 1) n = [];
                    else if (!o) r._$forEach(this.__suffix,
                    function(i) {
                        i = i.split("@")[1];
                        var r = e(t, i);
                        n.push(r)
                    });
                    else if (o.indexOf(".com") > -1) n = [];
                    else r._$forEach(this.__suffix,
                    function(t) {
                        if (1 == t.indexOf(o)) {
                            var i = e(a, t);
                            n.push(i)
                        }
                    })
                }
                if (n[0]) n[0] = n[0].replace('class="itm"', 'class="itm js-selected"');
                this.__suggest._$setList(n.join(""));
                i._$get("account-box").style.zIndex = "500"
            } else this.__suggest._$setList(n.join(""))
        };
        var s = function(e) {
            if (!window.outlinkflag) {
                i._$get("account-box").style.zIndex = "0";
                this.__suggest._$setList([]);
                this._$dispatchEvent("onClearEmailTimeout");
                if (!this.__checkIpt(e, "email")) a._$showError(this.__input, "帐号格式错误", "nerror");
                else a._$removeError(this.__input, "nerror");
                if (window.$autoFocus) this._$dispatchEvent("onFocusNext")
            }
        };
        var _ = function() {
            i._$get("account-box").style.zIndex = "1"
        };
        return function() {
            this.__suffix = this.__suffix || ["@163.com", "@126.com", "@yeah.net", "@188.com", "@vip.163.com", "@vip.126.com"];
            if (this.__suggest) this.__suggest = o._$$Suggest._$recycle(this.__suggest);
            var e = a._$getParent(this.__input, "u-input");
            if (!this.__suggest) {
                n._$delEvent(this.__input, "blur", _);
                n._$addEvent(this.__input, "blur", _);
                this.__suggest = o._$$Suggest._$allocate({
                    parent: e,
                    clazz: "m-sug",
                    input: this.__input,
                    autofill: !1,
                    onchange: t._$bind(this),
                    onselect: s._$bind(this)
                })
            }
        }
    } ();
    h.__checkIpt = function() {
        var e = {
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i
        };
        return function(t, i) {
            t = t.trim();
            return e[i].test(t)
        }
    } ();
    h._$showCloseBtn = function() {
        if (!this.__needEye) i._$setStyle(this.__clearBtn, "display", "block")
    };
    h._$hideCloseBtn = function() {
        i._$setStyle(this.__clearBtn, "display", "none")
    };
    h._$setSuggest = function(e) {
        this.__suffix = e;
        this.__initSuggest()
    };
    h._$hideLabel = function() {
        this.__label.style.display = "none"
    };
    h._$onClear = function(e) {
        var t;
        if (!this.__input.disabled) {
            this.__input.value = "";
            this.__clearBtn.style.display = "none";
            if (this.__clearBtn2 && this.__hasEye) if (this.__pwdtext) this.__pwdtext.value = "";
            this.__label.style.display = "block";
            if ("2" == e) try {
                this.__input.focus();
                if (this.__pwdtext) {
                    t = i._$getStyle(this.__pwdtext, "zIndex");
                    if ("1" === t) this.__pwdtext.focus()
                }
            } catch(r) {}
            n._$stop(e);
            this._$dispatchEvent("onInput", this.__input)
        }
    }
},
"835a8693a54280be3882f53f1be76e30", "b4448d35d10d290252e905174939b60a", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "8dba95a690ae256ada6319336b0cf4d6", "aadc4ea4a582128d908f4a7c891dcae1", "db205e6cac594cf3f283c8d22a8226de", "220fe029157a5e39da06b616143c612b");
I$("260d8ae0a0d03211e4dfa2d62501d123",
function(e, t, i, n, r, s, a, o, _, c, u, f, d, h, l, N) {
    var p, v, m = {
        email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
        sms: /^[0-9a-zA-Z]{4}$/,
        pwd: /^[0-9a-zA-Z]{6,16}$/
    };
    d._$$Login = e._$klass();
    p = d._$$Login._$extend(a._$$Module);
    p.__init = function(e) {
        this.__setTimeoutList = {};
        this.__opts = e.opts || {};
        this.__needEye = this.__opts.needEye || 0;
        this.__domainSuffixs = this.__opts.domainSuffixs || "";
        this.__lazyCheck = this.__opts.lazyCheck || 0;
        this.__domainSuffixs = this.__domainSuffixs ? this.__domainSuffixs.split(",") : [];
        this.__placeholder = this.__opts.placeholder || {};
        this.__domain = this.__opts.prdomain || "";
        this.__swidth = this.__opts.swidth || 320;
        if (_._$notURL(this.__opts.forgetpwdlink)) this.__opts.forgetpwdlink = "";
        this.__forgetpwdlink = this.__opts.forgetpwdlink || "//reg.163.com/resetpwd/index.do";
        this.__unLoginText = this.__opts.unLoginText || "十天内免登录";
        this.__server = "captcha.reg.163.com/v2";
        if (this.__opts.productKey) this.__opts.productkey = this.__opts.productKey;
        this.__productkey = this.__opts.productkey;
        this.__hintTxt = this.__opts.hintTxt || "按住滑块，拖动完成上方拼图";
        this.__errMsg = this.__opts.errMsg || "";
        this.__gotoRegText = this.__opts.gotoRegText || "去注册";
        this.__super()
    };
    p.__slideVerify = function(e) {
        if (this.__lazyCheck) if (e && e.value) this.__cbVftcp();
        else this.__cbVftcpEx();
        else if (e && e.value) this._$verifyCap();
        else this.__cbVftcpEx()
    };
    p.__reset = function(e) {
        this.__slideOpt = {
            staticServer: this.__server,
            apiServer: this.__server,
            captchaId: this.__productkey,
            width: this.__swidth,
            forceHttps: !0,
            alignToSpace: !0,
            hintTxt: this.__hintTxt,
            verifyCallback: this.__slideVerify._$bind(this),
            initCallback: this.__initCallback._$bind(this),
            initErrorHandler: this.__initErrorHandler._$bind(this)
        };
        this.__ipts = [];
        this.__product = this.__opts.product || "";
        this.__pkid = this.__opts.promark || "";
        this.__super(e);
        this.__resetInput();
        this.__imgLock = 0;
        this._$hideCheckCode();
        this.codeTryTime = 0
    };
    p.__resetInput = function() {
        if (this.__nameinput) {
            this.__nameinput.disabled = !1;
            this.__nameinput.value = ""
        }
        if (this.__passwordinput) {
            this.__passwordinput.disabled = !1;
            this.__passwordinput.value = ""
        }
        if (this.__smscode) {
            this.__smscode.disabled = !1;
            this.__smscode.value = ""
        }
        if (this.__pwdtext) {
            this.__pwdtext.disabled = !1;
            this.__pwdtext.value = ""
        }
    };
    p.__destroy = function() {
        _._$removeError3();
        this.__super()
    };
    p.__initNode = function() {
        this.__super();
        this.__checkCode = t._$getByClassName(this.__body, "ckbox")[0];
        this.__slideCapBox = t._$getByClassName(this.__body, "slidebox")[0];
        this.__slideCapIpt = t._$getByClassName(this.__body, "j-slidecap")[0];
        this.__cdImg = t._$getByClassName(this.__body, "ckimg")[0];
        this.__olist = t._$getByClassName(this.__body, "olist")[0];
        this.__loginBtn = t._$getByClassName(this.__body, "u-loginbtn")[0]
    };
    p.__initXGui = function() {
        var e = this.__parseOauth();
        v = r._$addNodeTemplate(s._$get("login-tmp", {
            config: e || [],
            gotoRegText: this.__gotoRegText,
            unLoginText: this.__unLoginText,
            forgetpwdlink: this.__forgetpwdlink
        }));
        this.__seed_html = v
    };
    p.__parseOauth = function() {
        return _._$parseOauth()
    };
    p.__initEvent = function() {
        this.__inputs = t._$getByClassName(this.__body, "j-inputtext");
        if (this.__needEye) this.__pwdtext = t._$get("pwdtext");
        this.__nameinput = this.__inputs[0];
        this.__passwordinput = this.__inputs[1];
        this.__smscode = this.__inputs[2];
        var e;
        if (0 === this.__ipts.length) {
            this.__setPlaceHolder();
            n._$forEach(this.__inputs,
            function(t, i) {
                var n = {
                    opts: this.__opts,
                    node: t,
                    isLogin: 1,
                    form: this.__form,
                    needClose: 1,
                    onfocus: this.__onFocus._$bind(this),
                    onInput: this.__onInput._$bind(this),
                    onPwdKeyUp: this.__onPwdKeyUp._$bind(this),
                    onFocusNext: this.__onFocusNext._$bind(this),
                    onClearInptTimeout: this.__onClearInptTimeout._$bind(this)
                };
                if (!i) {
                    n.isUsername = this.__domain ? 0 : 1;
                    n.domain = this.__domain
                }
                if (1 == i) n.isPwd = 1;
                e = c._$$Input._$allocate(n);
                if (!i && this.__domainSuffixs && this.__domainSuffixs.length > 0) e._$setSuggest(this.__domainSuffixs);
                this.__ipts.push(e)
            }._$bind(this))
        }
        this.__doInitDomEvent([[this.__cdImg, "click", this._$getCheckCode._$bind(this)], [this.__olist, "click", this._$doThirdLogin._$bind(this)]])
    };
    p._$doThirdLogin = function(e) {
        _._$doThirdLogin(e)
    };
    p.__onPwdKeyUp = function() {
        this._$dispatchEvent("onPwdKeyUp")
    };
    p.__onFocusNext = function() {
        this._stopEnter = 1;
        try {
            this.__inputs[1].focus()
        } catch(e) {}
    };
    p.__onFocus = function(e) {
        _._$removeError(e, "nerror", "fromFocus")
    };
    p.__onClearInptTimeout = function(e) {
        var t = e.name;
        if (this.__setTimeoutList["invalid" + t]) this.__setTimeoutList["invalid" + t] = clearTimeout(this.__setTimeoutList["invalid" + t]);
        if (this.__setTimeoutList["valid" + t]) this.__setTimeoutList["valid" + t] = clearTimeout(this.__setTimeoutList["valid" + t])
    };
    p.__initForm = function() {
        this.__form = {
            _$checkValidity: function(e, i) {
                var n, r, s;
                if (e) {
                    n = e.name,
                    r = e.value || "";
                    if (window.outlinkflag) {
                        if (!this.__refocus && 1 == window.outlinkflag) this.__refocus = setTimeout(function() {
                            this.__refocus = clearTimeout(this.__refocus);
                            try {
                                e.focus()
                            } catch(t) {}
                        }._$bind(this), 200);
                        return
                    }
                    this.__states[n] = 1;
                    if (!i && "" == r) return;
                    if ("email" == n) if ("" == r) this.__checkList(e, "请输入帐号");
                    else {
                        var a = _._$formatUn(r);
                        if (/^[\w\-.]{1,50}$/i.test(a)) this.__states[n] = 0;
                        else this.__checkList(e, "帐号格式错误")
                    }
                    if ("password" == n) if ("" == r) this.__checkList(e, "请输入密码");
                    else this.__states[n] = 0;
                    if ("checkcode" == n) if (t._$hasClassName(this.__checkCode, "f-dn")) this.__states[n] = 0;
                    else if ("" == r) this.__checkList(e, "请输入图片验证码");
                    else if (m.sms.test(r)) this.__states[n] = 0;
                    else this.__checkList(e, "图片验证码格式错误");
                    if ("slidecap" == n) if (this.__needSlideCap && !t._$hasClassName(this.__slideCapBox, "f-dn")) {
                        if (!this.__vSlide()) this.__states[n] = 0
                    } else this.__states[n] = 0
                } else {
                    for (var o = 0,
                    c = this.__inputs.length; o < c; o++) {
                        var u = this.__inputs[o];
                        var f = u.name;
                        if ("email" == f || "password" == f) {
                            this.__form._$checkValidity(u, 1);
                            if (1 == this.__states[f]) {
                                s = 1;
                                break
                            }
                        }
                        if ("checkcode" == f && !t._$hasClassName(this.__checkCode, "f-dn")) {
                            this.__form._$checkValidity(u, 1);
                            if (1 == this.__states[f]) {
                                s = 1;
                                break
                            }
                        }
                    }
                    if (!s && this.__needSlideCap && this.__slideCapIpt) this.__form._$checkValidity(this.__slideCapIpt, 1)
                }
            }._$bind(this)
        }
    };
    p.__clearTimeout = function(e) {
        if (this.__setTimeoutList["invalid" + e]) this.__setTimeoutList["invalid" + e] = clearTimeout(this.__setTimeoutList["invalid" + e]);
        if (this.__setTimeoutList["valid" + e]) this.__setTimeoutList["valid" + e] = clearTimeout(this.__setTimeoutList["valid" + e])
    };
    p.__hideErrorList = function(e) {
        var i = e.name;
        if ("email" == i) {
            var n = e.value.indexOf("@") != -1 ? e.value.substring(e.value.indexOf("@")).toLocaleLowerCase() : this.__domain;
            if (!n) n = e.value;
            _gaq.push(["_trackEvent", "登录步骤", "【1】帐号输入", "输入成功：" + n])
        } else if ("password" == i) _gaq.push(["_trackEvent", "登录步骤", "【2】密码输入", "输入" + (e.value || "").length + "位密码"]);
        else if ("checkcode" == i && !t._$hasClassName(this.__checkCode, "f-dn")) {
            this.codeTryTime = this.codeTryTime ? this.codeTryTime + 1 : 1;
            _gaq.push(["_trackEvent", "登录步骤", "【3】验证码输入", "图片验证码校验成功,尝试次数：" + this.codeTryTime])
        }
    };
    p.__checkStatus = function(e) {
        var i = e.name;
        if ("password" == i) {
            if (this.__states["email"] && "" != this.__nameinput.value) return
        } else if ("checkcode" == i && !t._$hasClassName(this.__checkCode, "f-dn")) if (this.__states["password"] && "" != this.__passwordinput.value || this.__states["email"] && "" != this.__nameinput.value) return;
        return 1
    };
    p.__checkList = function(e, t) {
        if (this.__checkStatus(e)) _._$showError(e, t, "nerror");
        else _._$showError2(e, t, "nerror", 1)
    };
    p.__onInput = function(e) {
        setTimeout(this.__checkNextBtn._$bind(this, e), 50)
    };
    p.__checkNextBtn = function(e) {
        var t = this.__vName();
        var i = this.__vPwd();
        var n = this.__vSms();
        var r = this.__vSlide();
        if (e && "checkcode" == e.name) {
            var s = this.__smscode.value.trim();
            this.__smscodeValue = s;
            if (m["sms"].test(s) && !this.__lazyCheck) this.__doCheckSmsCode(s)
        }
        if (!this.__needSlideCap && !this.__needCheckCode) if (!t && !i) this._$dispatchEvent("ondisabled", 0);
        else this._$dispatchEvent("ondisabled", 1);
        else if (this.__needSlideCap) if (!t && !i && !r) this._$dispatchEvent("ondisabled", 0);
        else this._$dispatchEvent("ondisabled", 1);
        else if (this.__needCheckCode) if (!t && !i && !n) this._$dispatchEvent("ondisabled", 0);
        else this._$dispatchEvent("ondisabled", 1)
    };
    p.__vSms = function() {
        var e = this.__smscode.value.trim();
        if (m["sms"].test(e)) return 0;
        else return 1
    };
    p.__doCheckSmsCode = function(e) {
        if (!this.__checkSmsCodeLock) {
            this.__checkSmsCodeLock = 1;
            var t = this.__nameinput.value.trim();
            t = this.__domain ? _._$formatUn(t) + this.__domain: t;
            var i = {
                cap: e,
                pd: this.__product,
                pkid: this.__pkid
            };
            i.un = t;
            u._$request("checkSmsCode", i, this.__cbSmsCode._$bind(this), this.__ckSmsCodeEx._$bind(this, "验证码输入错误"), 1, this.__product)
        }
    };
    p.__cbSmsCode = function() {
        this.__checkSmsCodeLock = 0;
        this.__imgLock = 1;
        this.__smscode.disabled = !0;
        this.__ipts[2]._$hideCloseBtn();
        t._$getByClassName(document, "u-tip")[3].style.display = "block";
        _._$removeError(this.__smscode, "nerror")
    };
    p.__ckSmsCodeEx = function(e, t) {
        var i = t.ret;
        this.codeTryTime = this.codeTryTime ? this.codeTryTime + 1 : 1;
        if ("441" == i) {
            this.__needSlideCap = 0;
            this.__needCheckCode = 1;
            this._$refreshCheckCode(i);
            if (1 != e) _._$showError(this.__smscode, e, "nerror")
        } else if ("444" == i || "445" == i) {
            this.__needSlideCap = 1;
            this.__needCheckCode = 0;
            this._$refreshCheckCode(i);
            if (1 != e) {
                if ("444" == i) e = "请滑动验证码";
                if ("445" == i) e = "请点击验证码";
                _._$showError({
                    name: "slide"
                },
                e, "nerror")
            }
        } else {
            this.__checkSmsCodeLock = 0;
            this._$getCheckCode();
            this.__ipts[2]._$onClear();
            this._$dispatchEvent("ondisabled", 1);
            e = f[i] || "验证码输入错误";
            _._$showError(this.__smscode, e, "nerror")
        }
    };
    p.__vName = function() {
        var e = this.__nameinput.value.trim();
        if ("" !== e) return 0;
        else return 1
    };
    p.__vPwd = function() {
        var e = this.__passwordinput.value.trim();
        if ("" !== e) return 0;
        else return 1
    };
    p._$setUsername = function(e) {
        try {
            if (e) this._$hideLabel();
            this.__inputs[0].value = e;
            this.__ipts[0]._$showCloseBtn()
        } catch(t) {}
    };
    p._$setPwd = function(e) {
        try {
            if (e) this._$hideLabel(1);
            this.__inputs[1].value = e;
            this.__ipts[1]._$showCloseBtn();
            if (this.__pwdtext) this.__pwdtext.value = e
        } catch(t) {}
    };
    p._$showCheckCode = function() {
        var e = t._$get("cnt-box-parent");
        this.__checkSmsCodeLock = 0;
        this._$hideCheckCode();
        this.__states["checkcode"] = 1;
        this.__needCheckCode = 1;
        t._$delClassName(this.__checkCode, "f-dn");
        this.__imgLock = 0;
        this.__smscode.disabled = !1;
        this._$getCheckCode();
        this.__ipts[2]._$onClear();
        this._$dispatchEvent("ondisabled", 1);
        this.__checkNextBtn();
        t._$addClassName(e, "hascheckcode");
        setTimeout(function() {
            _._$resize()
        },
        200)
    };
    p._$doFocus = function(e) {
        try {
            if ("pwd" == e) this.__passwordinput.focus();
            if ("username" == e) this.__nameinput.focus()
        } catch(t) {}
    };
    p._$getCheckCode = function() {
        if (!this.__imgLock) {
            this.__cdImg.src = MP.getCaptchaLogin(this.__product, this.__pkid, window["$cookieDomain"]);
            t._$getByClassName(document, "u-tip")[3].style.display = "none"
        }
    };
    p._$hideLabel = function(e) {
        if (1 === e) this.__ipts[1]._$hideLabel();
        else this.__ipts[0]._$hideLabel()
    };
    p.$clearText = function(e) {
        e.value = ""
    };
    p._$verifyCap = function() {
        if (!this.__slideCapLock) {
            this.__slideCapLock = 1;
            var e = this.__myCaptcha.getPwd();
            var t = this.__myCaptcha.getCt();
            var i = this.__nameinput.value.trim();
            i = this.__domain ? _._$formatUn(i) + this.__domain: i;
            var n = {
                cap: e,
                pd: this.__product,
                pkid: this.__pkid,
                capkey: this.__productkey
            };
            n.un = i;
            var r = 2 == this.__slideTarget ? "vftcp": "vfccp";
            n.ct = t;
            u._$request(r, n, this.__cbVftcp._$bind(this), this.__cbVftcpEx._$bind(this), 1)
        }
    };
    p._$getSmsValue = function() {
        return this.__smscodeValue
    };
    p._$clearPwd = function(e) {
        this.__ipts[1]._$onClear(e)
    };
    p._$focusHelper = function() {
        try {
            this.__nameinput.focus()
        } catch(e) {}
    }
},
"835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "2234e33a24c7fe170f8309f2e1c2ce5b", "220fe029157a5e39da06b616143c612b", "28223651d287a2583bcd82c79d51274d", "932a2be113fab1676ce3d6a5fddf34f0", "aadc4ea4a582128d908f4a7c891dcae1", "1652eeac438ea94d6ffe1d2ff3702a21", "6d07796f23cd7560f64207d93a6e8846", "11481f1a08cb01b3ace621353354f8da");
I$("bc1ea37467588acc05a6fe1aeb80592a",
function(e, t, i, n, r, s, a, o, _, c, u, f, d) {
    var h;
    c._$$Manager = e._$klass();
    h = c._$$Manager._$extend(r._$$EventTarget);
    h.__init = function(e) {
        this.__setMap = {};
        this.__product = e.product;
        this.__promark = e.promark;
        window._$errClickHide = e.errClickHide || 0;
        if (this.__options) {
            this.__options.goEmailLoginTxt = this.__options.goEmailLoginTxt || "网易邮箱帐号登录";
            this.__options.goMbLoginTxt = this.__options.goMbLoginTxt || "网易手机帐号登录";
            this.__options.goEmailRegTxt = this.__options.goEmailRegTxt || "网易邮箱帐号注册";
            this.__options.goMbRegTxt = this.__options.goMbRegTxt || "网易手机帐号注册"
        }
        this.__super(e)
    };
    h.__reset = function(e) {
        this.__super(e);
        window.$outLoginKey = this.__options.outLoginKey || "";
        window.$autoFocus = "0" == this.__options.autoFocus ? 0 : 1;
        this.__box = t._$get("cnt-box");
        this.__box2 = t._$get("cnt-box2");
        s._$render(this.__box, "h-tmp");
        this.__initEvent()
    };
    h.__destroy = function() {
        this.__super()
    };
    h.__initEvent = function() {
        var e = "click";
        var i = t._$get("confirm");
        var n = t._$get("cnt-box-parent");
        this.__doInitDomEvent([[i, e, this.__doAction._$bind(this)], [n, e, this.__doAction._$bind(this)], [document, "mouseover", this.__onMouseover._$bind(this)]])
    };
    h.__checkCookie = function(e) {
        var t = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
        if (!t || "null" == t) {
            o._$showError(0, '无法登录，请<a style="color:#4aafe9;" target="_blank" href="https://www.baidu.com/s?wd=%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%80%E5%90%AFcookies">开启浏览器cookies</a>或更换浏览器后刷新重试', "nerror");
            window._$needCookieSet = 1
        }
    };
    h.__onMouseover = function(e) {
        var n = i._$getElement(e),
        r = t._$dataset(n, "outlink") || 0;
        window.outlinkflag = r
    };
    h.__changePage = function(e) {
        t._$setStyle(this.__box, "display", e ? "none": "block");
        t._$setStyle(this.__box2, "display", e ? "block": "none");
        this.__sendSize("moduleResize")
    };
    h.__showFail = function(e) {
        o._$showFail(e)
    };
    h.__showFail2 = function(e) {
        o._$showFail(e)
    };
    h.__showLeak = function(e, t) {
        var i, n;
        this.__isLeak = !0;
        if (1 == e) {
            this.__isLeak1 = !0;
            s._$render(this.__box2, "exception1-tmp", {
                product: this.__product,
                promark: this.__promark
            })
        } else if (2 == e) {
            this.__isLeak2 = !0;
            s._$render(this.__box2, "exception2-tmp", {
                product: this.__product,
                promark: this.__promark
            })
        } else if (3 == e) {
            this.__isLeak3 = !0;
            s._$render(this.__box2, "exception3-tmp", {
                product: this.__product,
                promark: this.__promark
            })
        } else if (4 == e) {
            i = t.mode || {};
            this.__showMode(i)
        } else if (5 == e) {
            this.__isLeak = !1;
            i = t.mode || {};
            n = i.txt0.split("<br>");
            i.txt1 = n[0] || "";
            i.txt2 = n[1] || "";
            s._$render(this.__box2, "exception4-tmp", i)
        }
        this.__changePage(1)
    };
    h.__showMode = function(e) {
        this.__isMode = 1;
        var t = {
            product: this.__product,
            promark: this.__promark
        };
        var i = e;
        i.srclist = i.srcList ? i.srcList.join(",") : "";
        n._$merge(t, i);
        var r = "exception-tmp-" + (e.mode || 0);
        s._$render(this.__box2, r, t);
        this.__changePage(1)
    };
    h.__sendSize = function(e) {
        var t = document.body.scrollWidth,
        i = document.body.clientHeight,
        n = {
            width: t,
            height: i,
            type: e || "resize"
        };
        if (t * i > 0) {
            n["URS-CM"] = 1;
            a._$postMessage("_parent", {
                data: n
            })
        }
    };
    h.__sendClose = function(e) {
        var i = t._$getByClassName(document, "j-inputtext");
        var r = !0;
        n._$forEach(i,
        function(e, t) {
            if (e.value) r = !1
        });
        if (e || this.__islogin || r) {
            var s = {
                type: "close"
            };
            s["URS-CM"] = 1;
            a._$postMessage("_parent", {
                data: s
            })
        } else this.__showConfirm()
    };
    h.__doAction = function(e) {
        var n = i._$getElement(e),
        r = t._$dataset(n, "action");
        if ("confirmgoon" == r) {
            t._$addClassName(t._$get("confirm"), "f-dn");
            t._$delClassName(t._$get("cnt-box-parent"), "f-dn");
            this.__sendSize("init")
        }
        var s = {
            pid: this.__promark,
            pdt: this.__product
        };
        if ("confirmclose" == r) {
            _gaq.push(["_trackEvent", "注册步骤", "【-】放弃注册", "放弃注册"]);
            var o = {
                type: "close"
            };
            o["URS-CM"] = 1;
            a._$postMessage("_parent", {
                data: o
            });
            this.__closeFlag = !1
        }
    };
    h.__showConfirm = function() {
        t._$addClassName(t._$get("cnt-box-parent"), "f-dn");
        t._$delClassName(t._$get("confirm"), "f-dn");
        this.__sendSize("init")
    };
    h.__sendMsgDomain = function(e, t) {
        this.__onUnLockLogin && this.__onUnLockLogin();
        this.__onUnLockReg && this.__onUnLockReg();
        this.__sendMsg(e);
        if (t && this.__setDomainsOk) this.__setDomainsOk(t)
    };
    h.__addIframe = function(e, i, n, r) {
        if ("https:" == location.protocol) r = r.replace("http:", "https:");
        var s = r.indexOf("zc.reg.163.com") == -1;
        if (s) s = r.indexOf("/zc/") == -1;
        if (s) r = o._$addPathB(r);
        var a = t._$createXFrame({
            src: r,
            parent: document.body,
            visible: !1,
            onload: function() {
                this.__setMap[n].iframeIndex++;
                if (this.__setMap[n].ifarmeSize == this.__setMap[n].iframeIndex) {
                    this.__setMap[n].iframeCt = clearTimeout(this.__setMap[n].iframeCt);
                    this.__sendMsgDomain(e, i)
                }
            }._$bind(this)
        })
    };
    h.__setDomains = function(e, t) {
        var i = e || {};
        t = t || "";
        i["URS-CM"] = 1;
        var r = (new Date).getTime();
        this.__setMap[r] = {};
        this.__setMap[r].iframeIndex = 0;
        var s = i.nextUrls || [];
        this.__setMap[r].ifarmeSize = s.length || 0;
        if (this.__setMap[r].ifarmeSize > 0) this.__setMap[r].iframeCt = setTimeout(function(e, t) {
            this.__sendMsgDomain(e, t)
        }._$bind(this, i, t), 5e3);
        else this.__sendMsgDomain(i, t);
        n._$forEach(s, this.__addIframe._$bind(this, i, t, r))
    };
    h.__sendMsg = function(e) {
        var t = e || {};
        t["URS-CM"] = 1;
        if (window.$outLoginKey && "success" == t.type) t.fromOutLogin = 1;
        a._$postMessage("_parent", {
            data: t
        })
    };
    window.thirdHandler = function(e) {
        var t = {
            type: "success",
            isOther: !0,
            username: e
        };
        t["URS-CM"] = 1;
        if (window.$outLoginKey) t.fromOutLogin = 1;
        a._$postMessage("_parent", {
            data: t
        })
    };
    window.$outLogin = function(e) {
        var t;
        if (e.isOther) window.thirdHandler(e.username);
        else {
            var i = JSON.stringify(e);
            t = JSON.parse(i);
            t.toOpener = 1;
            a._$postMessage("_parent", {
                data: t
            })
        }
    };
    return c
},
"835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "8dba95a690ae256ada6319336b0cf4d6", "220fe029157a5e39da06b616143c612b", "614e962fa045f9cc3caa40e6c27a3570", "aadc4ea4a582128d908f4a7c891dcae1", "5ddddcf362ea5fe3ae95f7810b77a7d2");
I$("4c39973731a2236ebc5cfa3c2d7a73bc",
function(e, t, i, n, r, s, a, o, _, c, u) {
    var f = "https://reg.163.com/services/getqrcodeid";
    var d = "https://reg.163.com/services/getUrlQrcode";
    var h = "https://reg.163.com/services/qrcodeauth";
    var l = "https://reg.163.com/services/ticketloginForZJ";
    o._$initQr = function(e) {
        if (!e) e = [];
        this.__totalState = 0;
        this.__ticket = "";
        this.__domain = "";
        this.__domains = e.domains || "";
        this.__prdomain = e.prdomain || "";
        this.__product = e.product || "urs";
        this.__promark = e.promark;
        this.__usage = e.usage || 0;
        this.__size = e.size || "200";
        this.__format = e.format || "png";
        this.__qrcodeDom = e.qrcodeDom || null;
        this.__imgDom = e.imgDom || null;
        this.__oWarmDom = e.oWarmDom || null;
        this.__qrSuccDom = e.qrSuccDom || null;
        this.__qrBackBrn = e.qrBackDom || null;
        this.__pollingSec = e.pollingSec || 2e3;
        this.__maxPollingTimes = e.maxPollingTimes || 150;
        this.__completePollingTimes = e.completePollingTimes || 60;
        this.__qrLoginSucc = e.qrLoginSucc || this.__qrLoginSucc;
        this.__qrLoginErr = e.qrLoginErr || this.__qrLoginErr;
        this.__confirmLogin = e.confirmLogin || this.__confirmLogin;
        this.__scanIsComplete = e.scanIsComplete || this.__scanIsComplete;
        this.__codeLose = e.codeLose || this.__codeLose;
        this.__oWarmDom.onclick = function() {
            o.__changeState(1)
        };
        this.__qrBackBrn.onclick = function() {
            o.__changeState(1)
        };
        this.__changeState(1)
    };
    o.__changeState = function(e) {
        switch (e) {
        case 0:
            this._$clearAllStatus();
            this.__hideScanSucc();
            this.__showQrcodeM();
            this.__showOWarm();
            this.__totalState = 0;
            break;
        case 1:
            this.__hideScanSucc();
            this.__showQrcodeM();
            this.__getQrcode();
            this.__hideOWarm();
            this.__totalState = 1;
            break;
        case 2:
            this.__hideQrcodeM();
            this.__showScanSucc();
            this.__totalState = 2
        }
    };
    o.__getQrcode = function() {
        var e = this;
        if (1 !== this.__totalState) {
            var t = function(t) {
                t = JSON.parse(t["content"]);
                e.__qrId = t["l"]["i"];
                if (e.__qrId) e.__showQrcode(e.__imgDom)
            };
            var i = {
                product: this.__product,
                usage: this.__usage
            };
            a._$requestJsonp(f, i, t)
        }
    };
    o.__showQrcode = function(e) {
        e.src = d + "?uuid=" + this.__qrId + "&size=" + this.__size + "&format=" + this.__format + "&" + (new Date).getTime();
        this.__restartTiming(0)
    };
    o.__restartTiming = function(e) {
        var t = this;
        this.__qrTiming = 0;
        var i = this.__pollingSec;
        var n = 0 == e ? this.__maxPollingTimes: this.__completePollingTimes;
        if (this.__checkQrStIntv) clearInterval(t.__checkQrStIntv);
        this.__checkQrStIntv = setInterval(function() {
            t.__qrTiming++;
            t.__checkQrStatus();
            if (t.__qrTiming >= n) {
                clearInterval(t.__checkQrStIntv);
                t.__changeState(0);
                t.__codeLose()
            }
        },
        i)
    };
    o.__checkQrStatus = function() {
        var e = this;
        var t = function(t) {
            var i = t.retCode;
            switch (i) {
            case "200":
                if (0 == e.__totalState) break;
                e.__changeState(2);
                e.__ticket = t.ticket;
                e.__domain = t.domain;
                e.__confirmLogin(t);
                e._$clearAllStatus();
                e.__doQrLogin();
                break;
            case "401":
                if (1 != e.__totalState) break;
                e.__changeState(0);
                e.__codeLose(t);
                break;
            case "404":
                if (1 != e.__totalState) break;
                e.__changeState(0);
                e.__codeLose(t);
                break;
            case "408":
                break;
            case "409":
                if (1 != e.__totalState) break;
                e.__scanIsComplete(t);
                e.__changeState(2);
                e.__restartTiming(1);
                break;
            case "500":
                if (1 != e.__totalState) break;
                e.__codeLose(t);
                e.__changeState(0)
            }
        };
        var i = {
            uuid: this.__qrId,
            product: this.__product
        };
        a._$requestJsonp(h, i, t)
    };
    o.__doQrLogin = function() {
        var e = this;
        var t = function(t) {
            var i = t.ret;
            if ("201" == i) {
                var n = t.username;
                n.indexOf("@") === -1 ? n += "@163.com": null;
                if (!e.__prdomain || n.substring(n.indexOf("@")) == e.__prdomain) e.__qrLoginSucc(n, t);
                else {
                    e.__changeState(1);
                    var r = e.__prdomain ? "扫码失败，请使用" + e.__prdomain + "帐号扫码登录": "请使用指定域名帐号扫码登录";
                    e.__qrLoginErr(t, r)
                }
            } else {
                e.__changeState(0);
                e.__qrLoginErr(t)
            }
        };
        var i = {
            tk: this.__ticket,
            pd: this.__product,
            domains: this.__domains,
            pkid: this.__promark
        };
        r._$request("qrlogin", i, t._$bind(this), t._$bind(this), 1)
    };
    o.__qrLoginSucc = function() {};
    o.__qrLoginErr = function() {};
    o.__confirmLogin = function() {};
    o.__scanIsComplete = function() {};
    o.__codeLose = function() {};
    o._$clearAllStatus = function() {
        clearInterval(this.__checkQrStIntv);
        this.__qrTiming = 0
    };
    o.__showQrcodeM = function() {
        if (this.__qrcodeDom) t._$delClassName(this.__qrcodeDom, "f-dn")
    };
    o.__hideQrcodeM = function() {
        if (this.__qrcodeDom) t._$addClassName(this.__qrcodeDom, "f-dn")
    };
    o.__showOWarm = function() {
        if (this.__oWarmDom) t._$delClassName(this.__oWarmDom, "f-dn")
    };
    o.__hideOWarm = function() {
        if (this.__oWarmDom) t._$addClassName(this.__oWarmDom, "f-dn")
    };
    o.__showScanSucc = function() {
        if (this.__qrSuccDom) t._$delClassName(this.__qrSuccDom, "f-dn")
    };
    o.__hideScanSucc = function() {
        if (this.__qrSuccDom) t._$addClassName(this.__qrSuccDom, "f-dn")
    };
    return o
},
"835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "6d07796f23cd7560f64207d93a6e8846", "af1197558820a3e8fe6fdeedfed54ea3", "aadc4ea4a582128d908f4a7c891dcae1");
I$("53f623af66399e5c6fec62da9c158347",
function(e, t, i, n, r, s, a, o, _, c, u, f, d, h, l) {
    var N, p;
    f._$$QrcodeManager = e._$klass();
    N = f._$$QrcodeManager._$extend(a._$$Abstract);
    N.__init = function(e) {
        this.__product = e.product || "urs";
        this.__prdomain = e.prdomain || "";
        this.__toolName = e.toolName || "网易帐号管家";
        this.__toolUrl = e.toolUrl || "//id.163.com/gj/?from=webzj";
        this.__opts = e.opts;
        this.__super()
    };
    N.__reset = function(e) {
        this.__super(e);
        this.__qrBox = t._$getByClassName(document, "m-qrcode")[0];
        if (o._$notURL(this.__toolUrl)) this.__toolUrl = "";
        this.__tooApp.href = this.__toolUrl;
        this.__tooApp.innerHTML = o._$HtmlEncode(this.__toolName);
        this.__qrcodeDom = t._$getByClassName(this.__qrBox, "j-qrblock")[0];
        this.__qrImgDom = t._$getByClassName(this.__qrBox, "j-qrcode")[0];
        this.__qrOWarmDom = t._$getByClassName(this.__qrBox, "j-owarm")[0];
        this.__qrSuccDom = t._$getByClassName(this.__qrBox, "j-qrsucc")[0];
        this.__qrBackDom = t._$getByClassName(this.__qrBox, "j-qrback")[0];
        var i = {
            promark: this.__opts.promark,
            domains: this.__opts.domains,
            product: this.__product,
            prdomain: this.__prdomain,
            qrcodeDom: this.__qrcodeDom,
            imgDom: this.__qrImgDom,
            oWarmDom: this.__qrOWarmDom,
            qrSuccDom: this.__qrSuccDom,
            qrBackDom: this.__qrBackDom,
            qrLoginSucc: this.__qrLoginSucc._$bind(this),
            qrLoginErr: this.__qrLoginErr._$bind(this),
            confirmLogin: this.__confirmLogin._$bind(this),
            scanIsComplete: this.__scanIsComplete._$bind(this),
            codeLose: this.__codeLose._$bind(this)
        };
        c._$initQr(i);
        o._$resize()
    };
    N.__destroy = function() {
        this.__super();
        c._$clearAllStatus()
    };
    N.__initNode = function() {
        this.__super();
        this.__tooApp = t._$getByClassName(this.__body, "j-toolapp")[0]
    };
    N.__initXGui = function() {
        p = r._$addNodeTemplate(s._$get("qrcode-tmp"));
        this.__seed_html = p
    };
    N.__qrLoginSucc = function(e, t) {
        this.__username = e;
        this.__doQrLoginSucc(t)
    };
    N.__doQrLoginSucc = function(e) {
        u._$cookie("THE_LAST_LOGIN", {
            value: this.__username,
            expires: 30,
            path: "/"
        });
        var t = e.nextUrls;
        var i = {
            type: "success",
            username: this.__username,
            isqr: 1,
            nextUrls: t
        };
        this._$dispatchEvent("sendmsg", i);
        _gaq.push(["_trackEvent", "二维码登录", "【3】二维码登录结果", "扫码登录成功"])
    };
    N.__qrLoginErr = function(e, t) {
        if (!e) e = [];
        var i = t || "扫码登录失败，请重试";
        o._$showFail2(i);
        t = t || e.ret;
        _gaq.push(["_trackEvent", "二维码登录", "【3】二维码登录结果", t ? t: "扫码登录失败"])
    };
    N.__confirmLogin = function() {
        _gaq.push(["_trackEvent", "二维码登录", "【2】二维码确认", "用户确认登录"])
    };
    N.__scanIsComplete = function() {
        _gaq.push(["_trackEvent", "二维码登录", "【1】扫码", "扫码成功"])
    };
    N.__codeLose = function() {
        _gaq.push(["_trackEvent", "二维码登录", "【-】二维码异常", "二维码失效"])
    }
},
"835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "2234e33a24c7fe170f8309f2e1c2ce5b", "220fe029157a5e39da06b616143c612b", "bc94abb3037ef580f8190334c57f0a74", "aadc4ea4a582128d908f4a7c891dcae1", "bc1ea37467588acc05a6fe1aeb80592a", "4c39973731a2236ebc5cfa3c2d7a73bc", "5ddddcf362ea5fe3ae95f7810b77a7d2");
I$("3e181a04ab2f5d21882fd34716eb3df2",
function(e, t, i, n, r, s, a, o, _, c, u, f, d, h, l, N, p) {
    var v, m = 2e3,
    g = 1e3;
    h._$$LoginManager = e._$klass();
    v = h._$$LoginManager._$extend(f._$$Manager);
    v.__init = function(e) {
        var t;
        r._$loadGaq();
        this.__options = e || {};
        window.$loginOpts = this.__options;
        d["601"] = r._$setOutLogin();
        this.__loginLockTxt = e.lockConfig && e.lockConfig.loginLockTxt || "正在登录...";
        this.__preFilledMail = e.preFilledMail || "";
        this.__domains = e.domains || "";
        this.__product = e.product || "";
        this.__promark = e.promark || "";
        this.__host = e.host || "";
        this.__focusHelper = e.focusHelper || 0;
        this.__lazyCheck = e.lazyCheck || 0;
        this.__autoSuffix = e.autoSuffix || 0;
        this.__needUnLogin = e.needUnLogin || 0;
        this.__defaultUnLogin = e.defaultUnLogin || 0;
        this.__needQrLogin = e.needQrLogin || 0;
        this.__toolName = e.toolName || 0;
        this.__toolUrl = e.toolUrl || 0;
        this.__unLoginChecked = this.__defaultUnLogin || 0;
        this.__unLoginTime = e.unLoginTime || 10;
        if (e.loadTime) {
            t = window._$BGP ? "BGP": "非BGP";
            _gaq.push(["_trackEvent", "外层用时" + window._$PKID, "加载成功", t + "-【" + e.loadTime + "】ms"])
        }
        this.__gaqo = {
            pid: this.__promark,
            pdt: this.__product
        };
        this.__domain = e.prdomain;
        window["$cookieDomain"] = e.cookieDomain;
        this.__errMsg = e.errMsg;
        this.__errMode = e.errMode || 1;
        this.__super(e);
        if (this.__errMsg) setTimeout(function() {
            r._$showError(null, this.__errMsg, "nerror");
            this.__errMsg = ""
        }._$bind(this), 20);
        r._$resize()
    };
    v.__reset = function(e) {
        this.__super(e);
        this.__islogin = 1;
        this.__disabled = 1;
        this.__onpage = "login";
        this.__single = parseInt(e.single);
        this.__includeBox = !!e.includeBox;
        this.__mobileFirst = e.mobileFirst || 0;
        this.__regUrl = e.regUrl;
        this.__renderBox();
        r._$resize()
    };
    v.__renderLogin = function() {
        if (this.__needQrLogin) this.__showQrcodeBtn();
        this.__module = "goEmailLogin";
        this.__initLogin();
        this.__initUnLogin();
        this.__setUsername();
        this.__sendSize("init");
        this.__checkDisable();
        this.__inputs = t._$getByClassName(this.__box, "j-inputtext");
        this.__pwdtext = t._$get("pwdtext");
        this.__nameinput = this.__inputs[0];
        this.__passwordinput = this.__inputs[1];
        this.__checkcodeinput = this.__inputs[2];
        if (this.__domain && !this.__domain2) {
            this.__initUserNameDomain(this.__domain);
            this.__domain2 = 1
        }
    };
    v.__renderBox = function() {
        o._$render(this.__box, "index-tmp", {
            needMobileLogin: this.__options.needMobileLogin,
            goEmailLoginTxt: this.__options.goEmailLoginTxt,
            goMbLoginTxt: this.__options.goMbLoginTxt,
            goEmailRegTxt: this.__options.goEmailRegTxt,
            goMbRegTxt: this.__options.goMbRegTxt
        });
        this.__cnt = t._$getByClassName(this.__box, "m-cnt")[0];
        this.__footer = t._$getByClassName(this.__box, "m-footer")[0];
        if (this.__includeBox) {
            var e = t._$get("cnt-box-parent");
            if (!t._$hasClassName(e, "cnt-box-include")) t._$addClassName(e, "cnt-box-include")
        }
        var i = t._$get("mobileModule");
        if (this.__mobileFirst && i) this.__doAction(i);
        else this.__renderLogin()
    };
    v.__initUserNameDomain = function(e) {
        try {
            var i = t._$getByClassName(this.__box, "j-prdomain")[0];
            var n = t._$getByClassName(this.__box, "j-inputtext")[0];
            var s = t._$getByClassName(this.__box, "inputbox")[0];
            var a = t._$getByClassName(this.__box, "u-logo")[0];
            i.innerHTML = r._$HtmlEncode(e);
            t._$delClassName(i, "f-dn");
            n.style.width = s.clientWidth - a.clientWidth - i.clientWidth - 22 + "px";
            i.style.right = -5 - i.clientWidth + "px"
        } catch(o) {}
    };
    v.__showQrcodeBtn = function() {
        this.__qrm = t._$getByClassName(this.__box, "j-btnqrcode")[0];
        if (this.__qrm) {
            t._$delClassName(this.__qrm, "f-dn");
            i._$clearEvent(this.__qrm);
            i._$addEvent(this.__qrm, "click", this.__showQrcodeModule._$bind(this))
        }
    };
    v.__hideQrcodeBtn = function() {
        if (this.__qrm) t._$addClassName(this.__qrm, "f-dn")
    };
    v.__doEnter = function(e) {
        if (this.__loginModule && "login" == this.__onpage && !this.__isAppSafe) if (13 == e.keyCode && !this.__loginModule._stopEnter) this.__doAction(null, "dologin");
        else if (this.__loginModule) this.__loginModule._stopEnter = 0
    };
    v.__checkDisable = function() {
        var e = t._$get("dologin");
        if (this.__disabled) t._$addClassName(e, "btndisabled");
        else t._$delClassName(e, "btndisabled")
    };
    v.__destroy = function() {
        this.__clearModule();
        this.__super();
        this.__hideQrcodeBtn();
        delete this.__module
    };
    v.__initComp = function(e) {
        var t = r._$timeCountEnd("initLogin");
        if (t > 0) {
            var i = window._$BGP ? "BGP": "非BGP";
            _gaq.push(["_trackEvent", "登录初始化" + window._$PKID, "初始化成功", "详细耗时【" + e.time + "ms】渠道" + i]);
            t = -1
        }
        if (this.__loginModule) {
            if (this.__focusHelper) this.__loginModule._$focusHelper();
            if (!this.__errMsg && e.dlapp) {
                var n = r._$getDlapp();
                r._$showError(0, n, "nerror", 3)
            }
            this.__hasInit = 1;
            this.__capFlag = e ? e.capFlag: this.__capFlag;
            if (this.__capFlag) this.__showCheckCode(e);
            this.__sendMsg({
                type: "loginInitSuccess"
            })
        }
    };
    v.__onPwdKeyUp = function() {
        this.__pwdKeyUp = 1
    };
    v.__initLogin = function() {
        if (!this.__loginModule) this.__createLoginModule(1);
        if (this.__single) {
            var e = t._$get("changepage");
            t._$dataset(e, "action", "none");
            if (r._$notURL(this.__regUrl)) this.__regUrl = "";
            e.href = this.__regUrl ? this.__regUrl: "//zc.reg.163.com/regInitialized";
            e.target = "_blank"
        }
    };
    v.__onDisabled = function(e) {
        this.__disabled = e;
        this.__checkDisable()
    };
    v.__onUnLockLogin = function() {
        this.__doLoginLock = 0;
        if (this.__loginBtn && this.__loginBtnTxt) this.__loginBtn.innerHTML = r._$HtmlEncode(this.__loginBtnTxt)
    };
    v.__onDoLockLogin = function(e) {
        e = e || {};
        this.__doLoginLock = 1;
        this.__loginBtn = t._$getByClassName(document, "u-loginbtn")[0];
        this.__loginBtnTxt = "string" == typeof this.__loginBtn.textContent ? this.__loginBtn.textContent: this.__loginBtn.innerText;
        if (!e.noTxt) this.__loginBtn.innerHTML = r._$HtmlEncode(e.txt || this.__loginLockTxt)
    };
    v.__createLoginModule = function(e) {
        var t = {
            pd: this.__product,
            pkid: this.__promark,
            pkht: this.__host
        };
        this.__iniData = t;
        if (e) {
            r._$timeCount("initLogin");
            s._$request("initComponentLogin", t, this.__initComp._$bind(this), this.__showFail3._$bind(this, 0), 1, this.__product)
        }
        this.__loginModule = c._$$Login._$allocate({
            parent: this.__cnt,
            opts: this.__options,
            onSlideOk: this.__onSlideOk._$bind(this),
            onPwdKeyUp: this.__onPwdKeyUp._$bind(this),
            ondisabled: this.__onDisabled._$bind(this),
            onUnLockLogin: this.__onUnLockLogin._$bind(this)
        });
        if (this.__password) this.__loginModule._$setPwd(this.__password);
        this.__onpage = "login";
        this.__checkCookie("webzjcookiecheck");
        i._$delEvent(document, "keyup", this.__doEnter._$bind(this));
        i._$addEvent(document, "keyup", this.__doEnter._$bind(this))
    };
    v._$doRefresh = function() {
        r._$timeCount("initLogin");
        s._$request("initComponentLogin", this.__iniData, this.__initComp._$bind(this), this.__showFail3._$bind(this, 1), 1, this.__product)
    };
    v.__createMbLoginModule = function() {
        var e = this.__options.smsLoginFirst ? 0 : 1;
        if (this.__options.uniteLogin) if ("0" == this.__options.uniteLogin.first) e = 1;
        else e = 2;
        if (this.__needQrLogin) this.__showQrcodeBtn();
        this.__mbLoginModule = new _mm({
            data: this.__options
        });
        if (this.__options.preFilledMobile) this.__options.preFilledMobile = "";
        this.__mbLoginModule.$inject(this.__cnt);
        this.__mbLoginModule._$changeModule(e, this.__cnt)
    };
    v.__goModule = function() {
        this.__clearModule();
        if ("goEmailLogin" == this.__module) this.__renderLogin();
        else this.__createMbLoginModule()
    };
    v.__doAction = function(e, s, a) {
        var o = i._$getElement(e) || e,
        c = s || t._$dataset(o, "action"),
        u = t._$dataset(o, "srclist") || "";
        if ("dounlocklogin" != c) {
            if ("myphonegoon" == c) {
                var f = {};
                var d = this.__loginModule._$getValues();
                d[0] = d[0].trim();
                f.un = this.__domain ? r._$formatUn(d[0]) + this.__domain: d[0];
                var h = t._$get("ismyphonebox");
                f.ck = "0";
                if (h) f.ck = h.checked ? "1": "0";
                u = u ? u.split(",") : [];
                if (u.length > 0) for (var l = 0,
                N; l < u.length; l++) {
                    N = u[l];
                    u[l] = N + "&ck=" + f.ck
                }
                this.__setDomains({
                    type: "success",
                    username: this.__username || "",
                    nextUrls: u
                });
                _._$cookie("THE_LAST_LOGIN", {
                    value: this.__username || "",
                    expires: 30,
                    path: "/"
                })
            } else if ("goEmailLogin" == c || "goMbLogin" == c) {
                if (c == this.__module) return;
                this.__heads = t._$getByClassName(this.__box, "j-head");
                n._$forEach(this.__heads,
                function(e) {
                    t._$delClassName(e, "active")
                });
                t._$addClassName(o, "active");
                this.__module = c;
                this.__goModule()
            } else if ("modeBack" == c) this.__doBack(1);
            else if ("leakLogin" == c) {
                if (this.__isLeak1) this.__doGoon(1);
                else if (this.__isLeak2) {
                    this.__isLeak = !1;
                    this.__doBack(1)
                } else if (this.__isLeak3) this.__doGoon()
            } else if ("dologin" == c) this.__doLogin();
            else if ("doback" == c) {
                this.__isLeak = !1;
                a = !a;
                this.__doBack(a)
            } else if ("doclose" == c) if (!this.__closeFlag) {
                this.__closeFlag = !0;
                this.__sendClose()
            }
            this.__super(e)
        } else {
            this.__unLockLoginState(1);
            setTimeout(function() {
                r._$showError(null, "已取消登录，请重新登录", "nerror", 2)
            },
            200)
        }
    };
    v.__goonLog = function(e) {
        if (e && "10" == e.dt && "401" == e.ret) {
            var t = d["40110"];
            r._$showError(null, t, "nerror")
        }
    };
    v.__doGoon = function(e) {
        var t = {
            pd: this.__product,
            pkid: this.__promark,
            type: 0
        };
        if (1 == e) {
            var i = this.__loginModule._$getValues();
            i[0] = i[0].trim();
            t.un = this.__domain ? r._$formatUn(i[0]) + this.__domain: i[0];
            s._$request("goonlog", t, this.__goonLog._$bind(this), this.__goonLog._$bind(this), 1, this.__product)
        }
        _._$cookie("THE_LAST_LOGIN", {
            value: this.__username || "",
            expires: 30,
            path: "/"
        });
        setTimeout(function() {
            this.__sendMsg({
                type: "success",
                username: this.__username || ""
            })
        }._$bind(this), 100)
    };
    v.__clearModule = function() {
        this.__isDoBack = 0;
        if (this.__isAppSafe) this.__unLockLoginState();
        if (this.__mbLoginModule) this.__mbLoginModule.destroy();
        if (this.__loginModule) this.__loginModule = this.__loginModule._$recycle();
        if (this.__qrcodeModule) this.__qrcodeModule = this.__qrcodeModule._$recycle()
    };
    v.__doBack = function(e) {
        this.__clearModule();
        this.__isDoBack = 1;
        if (this.__module && "goMbLogin" == this.__module) {
            this.__module = null;
            this.__doAction(t._$get("mobileModule"))
        } else {
            this.__createLoginModule(e);
            this.__setUsername();
            this.__changePage()
        }
        r._$resize()
    };
    v.__initUnLogin = function() {
        var e = function() {
            var e = t._$getByClassName(this.__box, "u-checkbox")[0];
            if (!t._$hasClassName(e, "u-checkbox-select")) {
                this.__unLoginChecked = 1;
                t._$addClassName(e, "u-checkbox-select")
            } else {
                this.__unLoginChecked = 0;
                t._$delClassName(e, "u-checkbox-select")
            }
        };
        return function() {
            var i = t._$getByClassName(this.__box, "j-unlogn")[0];
            if (this.__needUnLogin && i) {
                t._$delClassName(i, "f-dn");
                var n = t._$getByClassName(i, "un-login")[0];
                if (this.__unLoginChecked) t._$addClassName(t._$getByClassName(this.__box, "u-checkbox")[0], "u-checkbox-select");
                this.__doInitDomEvent([[n, "click", e._$bind(this)]])
            } else t._$addClassName(i, "f-dn")
        }
    } ();
    v.__setUsername = function() {
        var e;
        var t = this.__preFilledMail || this.__username || _._$cookie("THE_LAST_LOGIN");
        if (t) {
            if (this.__domain) if (t.substring(t.indexOf("@")) === this.__domain) e = t.substring(0, t.indexOf("@"));
            else e = "";
            else e = t;
            this.__loginModule._$setUsername(e);
            this.__preFilledMail = ""
        }
    };
    v.__doLogin = function() {
        var e = "-103";
        if (this.__hasInit) {
            if (!this.__doLoginLock) {
                this.__onDoLockLogin({
                    noTxt: 1
                });
                this.__loginModule._$stateOK(this.__doLoginCb._$bind(this))
            }
        } else r._$showFail(e, "登录")
    };
    v.__doLoginCb = function(e, t) {
        var i;
        this.__pass = e;
        this.__errKey = t;
        if (e && this.__hasInit) {
            this.__onDoLockLogin();
            this.__doLoginReal.call(this)
        } else if (1 === this.__errMode) {
            this.__onUnLockLogin();
            if ("email" === t && !this.__nameinput.value) r._$showError(this.__nameinput, "请输入帐号", "nerror");
            else if ("password" === t && !this.__passwordinput.value) r._$showError(this.__passwordinput, "请输入密码", "nerror");
            else if ("tcheckcode" === t && !this.__checkcodeinput.value) r._$showError(this.__checkcodeinput, "请输入图片验证码", "nerror");
            else if ("slidecap" === t) {
                if (this.__loginModule) i = 2 == this.__loginModule.__slideTarget ? "请滑动验证码": "请点击验证码";
                r._$showError({
                    name: "slide"
                },
                i, "nerror")
            }
        }
    };
    v.__doLoginReal = function() {
        if (this.__pass && this.__hasInit) {
            r._$timeCount("LOGIN_TIME");
            var e = this.__loginModule._$getValues(),
            t = {};
            e[0] = e[0].trim();
            t.un = this.__domain ? r._$formatUn(e[0]) + this.__domain: e[0];
            t.pw = MP.encrypt2(e[1]);
            t.pd = this.__product;
            t.l = this.__unLoginChecked ? 1 : 0;
            t.d = this.__unLoginTime;
            t.t = (new Date).getTime();
            t.pkid = this.__promark;
            this.__username = t.un;
            this.__password = e[1];
            this.__safeLogin(t)
        }
    };
    v.__safeLogin = function() {
        var e = function(e) {
            var t = [],
            i = {};
            n._$forEach(e,
            function(e) {
                if (!i[e]) {
                    i[e] = 1;
                    t.push(e)
                }
            });
            return t
        };
        var t = function(t, i, n) {
            if (n) {
                var r = t.split("@")[1];
                i = i + (i ? ",": "") + r
            }
            i = i.replace("vip.188.com", "188.com");
            var s = i.split(",");
            s = e(s);
            return s.join(",")
        };
        return function(e) {
            e.domains = this.__domains || "";
            e.domains = t(e.un, e.domains, this.__autoSuffix);
            if (this.__loginModule && this.__password) this.__loginModule._$setPwd(this.__password);
            if (this.__lazyCheck && this.__capFlag) {
                this.__dataTemp = e;
                if (1 == this.__capFlag) this.__doLazyCheck();
                else this.__doLazyCheckSlide()
            } else this.__getLoginTicket(e)
        }
    } ();
    v.__doLazyCheckSlide = function() {
        this.__loginModule._$verifyCap()
    };
    v.__onSlideOk = function() {
        if (this.__dataTemp) this.__getLoginTicket(this.__dataTemp)
    };
    v.__doLazyCheck = function() {
        var e = this.__loginModule._$getSmsValue();
        if (!this.__checkSmsCodeLock) {
            this.__checkSmsCodeLock = 1;
            var t = this.__nameinput.value.trim();
            t = this.__domain ? r._$formatUn(t) + this.__domain: t;
            var i = {
                cap: e,
                pd: this.__product,
                pkid: this.__promark
            };
            i.un = t;
            s._$request("checkSmsCode", i, this.__cbSmsCode._$bind(this), this.__ckSmsCodeEx._$bind(this, "验证码输入错误"), 1, this.__product)
        }
    };
    v.__cbSmsCode = function() {
        this.__checkSmsCodeLock = 0;
        if (this.__dataTemp) this.__getLoginTicket(this.__dataTemp)
    };
    v.__ckSmsCodeEx = function(e, t) {
        this.__checkSmsCodeLock = 0;
        this.__onUnLockLogin();
        this.__loginModule.__ckSmsCodeEx(e, t)
    };
    v.__getLoginTicket = function(e) {
        if (!this.__getTkLock) {
            var t = {};
            t.un = e.un;
            t.pkid = this.__promark;
            t.pd = this.__product;
            this.__getTkLock = 1;
            s._$request("getLoginTicket", t, this.__gltSuccess._$bind(this, e), this.__gltWarn._$bind(this), 1, this.__product)
        }
    };
    v.__gltSuccess = function(e, t) {
        this.__getTkLock = 0;
        var i = t.ret;
        this.__tk = t.tk;
        if (201 == i) {
            e.tk = this.__tk;
            e.pwdKeyUp = this.__pwdKeyUp || 0;
            s._$request("safelogin", e, this.__loginSuccess._$bind(this), this.__cbWarn._$bind(this), 1, this.__product)
        } else {
            var n = d[i] || r._$getErrorTxt(t.ret);
            _gaq.push(["_trackEvent", "登录结果", "登录失败", "【" + i + "-gt】" + n]);
            r._$showError(null, n, "nerror")
        }
    };
    v.__gltWarn = function(e) {
        this.__onUnLockLogin();
        this.__getTkLock = 0;
        var t = e.ret || 0;
        var i = e.dt || "";
        this.__showCheckCode(e);
        var n = d[t] || r._$getErrorTxt(e.ret);
        if ("10" == i && "401" == t) n = d["40110"];
        _gaq.push(["_trackEvent", "登录结果", "登录失败", "【" + t + "-" + i + "】" + n]);
        if ("441" != t && "444" != t && "445" != t) r._$showError(null, n, "nerror")
    };
    v.__setLlpTime = function() {
        r._$showError(0, '已开启登录保护，请打开<a class="u-llp-color1" style="color:#2c85ff;" href="https://id.163.com/gj/?from=webzj" target="_blank">网易帐号管家</a>完成验证   <span class="u-llp-color2" style="color:#2c85ff;">' + this.__llpNumber + '</span>秒后超时。<a class="u-llp-color3" style="color:#2c85ff;" href="https://id.163.com/gj/faq/s/p_o.html?ct=1&from=webzj" target="_blank">无法收到验证消息?</a>', "nerror", 3)
    };
    v.__lockLoginState = function() {
        if (!this.__isAppSafe) {
            this.__isAppSafe = 1;
            this.__nameinput.disabled = !0;
            this.__passwordinput.disabled = !0;
            if (this.__checkcodeinput) this.__checkcodeinput.disabled = !0;
            if (this.__pwdtext) this.__pwdtext.disabled = !0;
            this.__onDoLockLogin({
                txt: "取消登录"
            });
            setTimeout(function() {
                this.__llpNumber = 120;
                this.__setLlpTime();
                this.__safeItl2 = clearInterval(this.__safeItl2);
                this.__safeItl = clearInterval(this.__safeItl);
                this.__safeItl2 = setInterval(this.__setSafeItl._$bind(this), g);
                this.__startllp = 0;
                this.__safeItl = setInterval(this.__doCheckLlp._$bind(this), m);
                t._$dataset(this.__loginBtn, "action", "dounlocklogin")
            }._$bind(this), 200)
        }
    };
    v.__setSafeItl = function() {
        this.__llpNumber--;
        if (this.__llpNumber < 0) this.__safeItl2 = clearInterval(this.__safeItl2);
        else this.__setLlpTime()
    };
    v.__doCheckLlp = function() {
        this.__startllp++;
        var e = this.__checkLlpTimeout();
        if (!e) {
            var t = {
                uuid: this.__uuid,
                pd: this.__product,
                pkid: this.__promark
            };
            s._$request("llp", t, this.__llpOK._$bind(this), this.__llpFail._$bind(this), 1, this.__product)
        }
    };
    v.__checkLlpTimeout = function() {
        if (this.__startllp > 59) {
            this.__unLockLoginState(1);
            setTimeout(function() {
                r._$showError(null, "登录验证超时，请重新登录", "nerror", 2)
            },
            200);
            return 1
        }
        return 0
    };
    v.__llpFail = function(e) {
        var t = e.ret;
        if ("401" == t) {
            this.__unLockLoginState(1);
            setTimeout(function() {
                r._$showError(null, "登录验证超时，请重新登录", "nerror", 2)
            },
            200)
        }
        if ("446" == t) {
            this.__unLockLoginState(1);
            setTimeout(function() {
                r._$showError(null, "网易帐号管家已拒绝本次登录", "nerror", 2)
            },
            200)
        }
    };
    v.__llpOK = function(e) {
        var t = e.ret;
        if ("201" == t) {
            this.__safeItl2 = clearInterval(this.__safeItl2);
            this.__safeItl = clearInterval(this.__safeItl);
            this.__loginSuccess(e)
        }
    };
    v.__unLockLoginState = function(e) {
        this.__safeItl2 = clearInterval(this.__safeItl2);
        this.__safeItl = clearInterval(this.__safeItl);
        this.__isAppSafe = 0;
        e = e || 0;
        this.__doBack(e);
        this.__onUnLockLogin();
        t._$dataset(this.__loginBtn, "action", "dologin")
    };
    v.__loginSuccess = function(e) {
        this.__pwdKeyUp = 0;
        _gaq.push(["_trackEvent", "登录结果", "登录成功", "【登录成功】from:" + this.__product + ",domain:" + this.__username.substring(this.__username.indexOf("@"))]);
        var t = r._$timeCountEnd("LOGIN_TIME");
        if (t > 0) {
            _gaq.push(["_trackEvent", "登录效率", "耗时【" + 50 * Math.ceil(t / 50) + "ms】", "详细耗时【" + t + "ms】"]);
            t = -1
        }
        _._$cookie("THE_LAST_LOGIN", {
            value: this.__username,
            expires: 30,
            path: "/"
        });
        if (e.unprotectedGuide) {
            if (e.nextUrls) this.__setDomains({
                type: "fksuccess",
                username: this.__username || "",
                nextUrls: e.nextUrls
            });
            this.__showLeak(3);
            this.__onUnLockLogin()
        } else if (e.safeMobileGuide) {
            if (e.nextUrls) this.__setDomains({
                type: "fksuccess",
                username: this.__username || "",
                nextUrls: e.nextUrls
            });
            this.__showLeak(4, e);
            this.__onUnLockLogin()
        } else this.__setDomains({
            type: "success",
            username: this.__username || "",
            nextUrls: e.nextUrls
        })
    };
    v.__cbWarn = function(e) {
        this.__pwdKeyUp = 0;
        this.__onUnLockLogin();
        var t = e.ret,
        i;
        if ("438" != t) {
            if ("408" == t) r._$showError(0, '已开启登录保护，请打开<a class="u-app-color" style="color:#2c85ff;" href="https://id.163.com/gj/?from=webzj" target="_blank">网易帐号管家</a>绑定帐号并重新登录验证', "nerror", 3);
            else if (e) {
                if ("423" == t) {
                    _gaq.push(["_trackEvent", "登录结果", "登录异常", "【423】风控帐号"]);
                    this.__setDomains({
                        type: "fksuccess",
                        username: this.__username || "",
                        nextUrls: e.nextUrls
                    });
                    this.__showLeak(1)
                } else if ("428" == t) {
                    _gaq.push(["_trackEvent", "登录结果", "登录异常", "【428】标记帐号"]);
                    this.__showLeak(2)
                } else if ("401" == t) {
                    i = d[t] || r._$getErrorTxt(e.ret);
                    if ("10" == e.dt) i = d["40110"];
                    _gaq.push(["_trackEvent", "登录结果", "登录失败", "【401-" + (e.dt || "00") + "】参数错误"]);
                    r._$showError(null, i, "nerror")
                } else if ("501" == t) {
                    _gaq.push(["_trackEvent", "登录结果", "登录异常", "【501】"]);
                    this.__showFail(t)
                } else if ("500" == t) {
                    _gaq.push(["_trackEvent", "登录结果", "登录异常", "【500】"]);
                    this.__showFail(t)
                } else {
                    if (e.mode && this.__options.version && this.__options.version > 1) {
                        this.__showMode(e.mode);
                        return
                    } else if ("421" == t) {
                        this.__showLeak(5, e);
                        return
                    }
                    if (e.dt) t = t + "-" + e.dt;
                    if (t) {
                        i = d[t] || r._$getErrorTxt(e.ret);
                        var n = 424 == t || 425 == t || 426 == t || 422 == t || 602 == t ? 2 : 0;
                        if (425 == t) i = i.replace("#",
                        function() {
                            return r._$getCommonEmail(this.__username)
                        }._$bind(this));
                        _gaq.push(["_trackEvent", "登录结果", "登录失败", "【" + t + "】" + i]);
                        if ("441" != t && "444" != t && "445" != t) r._$showError(null, i, "nerror", n);
                        else if ("444" == t || "445" == t) r._$showError({
                            name: "slide"
                        },
                        i, "nerror", n);
                        else if ("441" == t) r._$showError(this.__checkcodeinput, i, "nerror", n)
                    }
                }
                var s = r._$timeCountEnd("LOGIN_TIME");
                if (s > 0) {
                    _gaq.push(["_trackEvent", "登录效率", "耗时【" + 50 * Math.ceil(s / 50) + "ms】", "详细耗时【" + s + "ms】"]);
                    s = -1
                }
            }
            this.__showCheckCode(e)
        } else {
            this.__uuid = e.uuid || 0;
            this.__lockLoginState()
        }
    };
    v.__showCheckCode = function(e) {
        var t;
        if (this.__loginModule) if (e) {
            if (e.capFlag) {
                e.ret = "44" + e.capFlag;
                t = 1
            }
            if ("441" == e.ret) {
                _gaq.push(["_trackEvent", "登录结果", "登录异常", "【411】需要图片验证码"]);
                this.__capFlag = 1;
                t = t || "请输入图片验证码";
                this.__loginModule.__ckSmsCodeEx(t, e)
            } else if ("444" == e.ret) {
                _gaq.push(["_trackEvent", "登录结果", "登录异常", "【444】需要滑块验证码"]);
                this.__capFlag = 4;
                t = t || "请滑动验证码";
                this.__loginModule.__ckSmsCodeEx(t, e)
            } else if ("445" == e.ret) {
                _gaq.push(["_trackEvent", "登录结果", "登录异常", "【445】需要点击验证码"]);
                this.__capFlag = 5;
                t = t || "请点击验证码";
                this.__loginModule.__ckSmsCodeEx(t, e)
            } else if (this.__loginModule.__needSlideCap || this.__loginModule.__needCheckCode) {
                var i = "44" + (this.__loginModule.__needSlideCap ? 2 == this.__loginModule.__slideTarget ? "4": "5": "1");
                t = 1;
                e = {
                    ret: i
                };
                this.__loginModule.__ckSmsCodeEx(t, e)
            }
        }
    };
    v.__hideCheckCode = function() {
        this.__loginModule._$hideCheckCode()
    };
    v.__getCheckCode = function() {
        this.__loginModule._$getCheckCode()
    };
    v.__showQrcodeModule = function() {
        this.__clearModule();
        var e = t._$getByClassName(this.__box, "j-headimg")[0];
        if (!this.__qrcodeModule && "qrcode" != this.__onpage) {
            e.style.display = "none";
            this.__qrcodeModule = u._$$QrcodeManager._$allocate({
                parent: this.__cnt,
                opts: this.__options,
                product: this.__product,
                prdomain: this.__domain,
                toolName: this.__toolName,
                toolUrl: this.__toolUrl,
                sendmsg: this.__setDomains._$bind(this)
            });
            this.__onpage = "qrcode";
            t._$addClassName(this.__qrm, "pc")
        } else {
            e.style.display = "block";
            this.__doBack(1);
            this.__onpage = "login";
            t._$delClassName(this.__qrm, "pc")
        }
    };
    v.__showFail = function(e) {
        _gaq.push(["_trackEvent", "异常", "登录异常", "异常【" + (d[e] || "未知异常" + e) + "】"]);
        this.__super(e)
    };
    v.__showFail3 = function(e, t) {
        var i = t && t.ret || "0";
        var n = this.__host || "未知产品";
        var s = window._$BGP ? "dl2失败": "dl失败";
        _gaq.push(["_trackEvent", "初始化失败" + window._$PKID, s + "code:" + i, "e1ee1"]);
        this.__hasInit = 0;
        _gaq.push(["_trackEvent", "登录步骤", "【" + i + "】初始化", "初始化失败,from:" + n]);
        if (window._$needUrsBgp) if (!window._$BGP && ("0" == i || "-1" == i || "-2" == i)) {
            window._$BGP = 1;
            setTimeout(this._$doRefresh._$bind(this), 200);
            return
        }
        if ("-401" != i) this.__showFail(i);
        else {
            r._$showError(0, '无法登录，请<a style="color:#4aafe9;" target="_blank" href="https://www.baidu.com/s?wd=%E6%B5%8F%E8%A7%88%E5%99%A8%E5%BC%80%E5%90%AFcookies">开启浏览器cookies</a>或更换浏览器后刷新重试', "nerror");
            window._$needCookieSet = 1
        }
    };
    v.__showLeak = function(e, t) {
        _gaq.push(["_trackEvent", "异常", "登录异常", "异常"]);
        this.__super(e, t);
        r._$resize()
    }
},
"835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "aadc4ea4a582128d908f4a7c891dcae1", "6d07796f23cd7560f64207d93a6e8846", "2234e33a24c7fe170f8309f2e1c2ce5b", "220fe029157a5e39da06b616143c612b", "5ddddcf362ea5fe3ae95f7810b77a7d2", "260d8ae0a0d03211e4dfa2d62501d123", "53f623af66399e5c6fec62da9c158347", "bc1ea37467588acc05a6fe1aeb80592a", "11481f1a08cb01b3ace621353354f8da");
I$("1e45c03ed793caaaa111e7c78ef86857",
function(e, t, i, n, r, s, a, o, _, c, u, f, d, h) {
    var l, N = {
        1 : "red",
        2 : "orange",
        3 : "green",
        4 : "blue"
    };
    s._$parseTemplate("jst-template");
    u._$$Index = e._$klass();
    l = u._$$Index._$extend(r._$$EventTarget);
    l.__init = function(e) {
        this.__super(e);
        this.__loadConfig(e);
        i._$addEvent(document, "click", this.__changePage._$bind(this))
    };
    l.__reset = function(e) {
        this.__super(e)
    };
    l.__destroy = function() {
        this.__super()
    };
    l.__doClose = function() {
        var e = {
            type: "close"
        };
        e["URS-CM"] = 1;
        _._$postMessage("_parent", {
            data: e
        })
    };
    l.__loadConfig = function(e) {
        if (e) {
            e.single = e.single || 0;
            this.__page = e.page || "login";
            if (e.notFastReg) {
                this.__page = "login";
                e.single = 1
            }
            window._$inputTime = 300;
            window._$URSOPT = e || {};
            window._$PRODUCT = e.product || "";
            window._$readErrHelper = e.readErrHelper || "";
            window._$PKID = e.promark || "";
            e.topURL = encodeURIComponent(e.topURL);
            window._$TOPURL = e.topURL || "";
            window._$pathB = e.pathB || 0;
            window._$needUrsBgp = e.needUrsBgp || 0;
            window._$bgpTime2 = e.bgpTime2 || 1e4;
            c._$configLog(e);
            var t = e.cookieDomain;
            if (t && t.indexOf("dl.reg.163.com") < 0) if (window._$needUrsBgp && e.passportNeedUrsBgp) window._$needUrsBgp = 1;
            else window._$needUrsBgp = 0;
            window.isHttps = e.isHttps || 0;
            window.PROTOCOL = "http" != e.PROTOCOL ? "http://": "https://";
            window.REGPROTOCOL = "http" == e.REGPROTOCOL ? "http://": "https://";
            if (window.isHttps) {
                window.PROTOCOL = "https://";
                window.REGPROTOCOL = "https://"
            }
            this.__loadStyle(e);
            this.__opt = e;
            this.__showPage()
        } else this.__doClose()
    };
    l.__loadStyle = function(e) {
        var i = e.skin || "0";
        var n = e.cssFiles || "";
        var r = e.style || "";
        if (r) t._$addStyle(r);
        else if (!n && 0 != i) {
            i = N[i] || "red";
            var s = document.createElement("link");
            s.rel = "stylesheet";
            s.type = "text/css";
            s.href = "../../webapp/res/css/" + i + ".css";
            document.getElementsByTagName("head")[0].appendChild(s)
        }
    };
    l.__changePage = function(e) {
        var n = i._$getElement(e),
        r = t._$dataset(n, "action"),
        s = t._$dataset(n, "mdtype"),
        a;
        c._$doProxyLink(e);
        if ("changepage" == r) {
            this.__mdType = s;
            this.__page = "login" == this.__page ? "register": "login";
            if ("login" == this.__page && t._$get("VIP")) t._$get("VIP").style.display = "none";
            a = {
                type: "changepage",
                page: this.__page,
                mdtype: this.__mdType || ""
            };
            a["URS-CM"] = 1;
            c._$postMessage("_parent", {
                data: a
            });
            this.__showPage(1)
        }
    };
    l._$LgRefresh = function() {
        this.__page = "login";
        this.__showPage(1)
    };
    l.__showPage = function(e) {
        c._$hideFail();
        this.__opt.page = this.__page;
        if (e) {
            this.__opt.mobileFirst = this.__mdType ? 1 : 0;
            var i = t._$get("cnt-box-parent");
            t._$addClassName(i, "switching");
            setTimeout(function() {
                t._$delClassName(i, "switching")
            },
            0)
        }
        setTimeout(function() {
            if (this.__lg) this.__lg = this.__lg._$recycle();
            this.__opt.onRefresh = this._$LgRefresh._$bind(this);
            this.__lg = a._$$LoginManager._$allocate(this.__opt)
        }._$bind(this), 0)
    };
    i._$addEvent(document, "templateready",
    function() {
        var e = function(e) {
            var t = e.data;
            if (t) {
                if ("string" == typeof t) try {
                    t = JSON.parse(t)
                } catch(i) {}
                if ("object" == typeof t && "URS|" == t.from) {
                    window.URSCONFIG = t;
                    u._$$Index._$allocate(t)
                }
            }
        };
        i._$addEvent(window, "message", e);
        _._$postMessage("_parent", {
            data: {
                "URS-READY": 1
            }
        })
    })
},
"835a8693a54280be3882f53f1be76e30", "4c563cfb767e6eff2573caba9105d3e5", "7214a135f5e14d9b78ea74e4de768e85", "f46be3347a20bfdd40810d04c5816b16", "8dba95a690ae256ada6319336b0cf4d6", "2234e33a24c7fe170f8309f2e1c2ce5b", "3e181a04ab2f5d21882fd34716eb3df2", "45afbda986e83233613703970c5fdb7e", "614e962fa045f9cc3caa40e6c27a3570", "aadc4ea4a582128d908f4a7c891dcae1");