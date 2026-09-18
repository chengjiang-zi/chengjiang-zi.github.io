(function () {
  var INK = "34,31,27";
  var SEAL = "139,47,58";
  var DPR = Math.min(window.devicePixelRatio || 1, 2);

  var calm = false, touch = false;
  try {
    calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    touch = window.matchMedia("(hover: none)").matches;
  } catch (e) {}
  if (calm) return;

  try {
    var probe = document.createElement("canvas");
    if (!probe.getContext || !probe.getContext("2d")) return;
  } catch (e) { return; }

  var cover = document.querySelector(".cover");
  var W = window.innerWidth, H = window.innerHeight;
  var queued = false;

  function go() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(frame);
  }

  function makeStamp(size, core, mid, soft) {
    var c = document.createElement("canvas");
    c.width = c.height = size;
    var g = c.getContext("2d");
    for (var i = 0; i < 2; i++) {
      var a = Math.random() * 6.2832, rd = Math.random() * size * 0.11;
      var cx = size / 2 + Math.cos(a) * rd, cy = size / 2 + Math.sin(a) * rd;
      var r = size * 0.375 + Math.random() * size * 0.075;
      var rg = g.createRadialGradient(cx, cy, 0, cx, cy, r);
      rg.addColorStop(0, "rgba(" + INK + "," + core + ")");
      rg.addColorStop(soft || 0.86, "rgba(" + INK + "," + mid + ")");
      rg.addColorStop(1, "rgba(" + INK + ",0)");
      g.fillStyle = rg;
      g.beginPath(); g.arc(cx, cy, r, 0, 6.2832); g.fill();
    }
    return c;
  }

  var dot = null, dx = -300, dy = -300, mx = -300, my = -300, dotOn = false;

  if (!touch) {
    dot = document.createElement("div");
    dot.className = "inkdot";
    dot.setAttribute("aria-hidden", "true");
    document.body.appendChild(dot);

    window.addEventListener("pointermove", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      mx = e.clientX; my = e.clientY;
      if (!dotOn) { dotOn = true; dx = mx; dy = my; dot.classList.add("is-on"); }
      go();
    }, { passive: true });

    document.addEventListener("pointerover", function (e) {
      var t = e.target;
      var hot = t && t.closest && t.closest("a,button,[role='button'],input,select,textarea,label");
      dot.classList.toggle("is-hot", !!hot);
    }, { passive: true });

    var away = function () { dotOn = false; dot.classList.remove("is-on"); };
    document.addEventListener("mouseleave", away);
    window.addEventListener("blur", away);
  }

  

  var top = document.createElement("canvas");
  top.className = "fx-top";
  top.setAttribute("aria-hidden", "true");
  document.body.appendChild(top);
  var tc = top.getContext("2d");

  function sizeTop() {
    W = window.innerWidth; H = window.innerHeight;
    top.width = Math.round(W * DPR);
    top.height = Math.round(H * DPR);
    top.style.width = W + "px";
    top.style.height = H + "px";
    tc.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  sizeTop();

  var waves = [];
  var topDirty = false;

  window.addEventListener("pointerdown", function (e) {
    if (e.pointerType && e.pointerType !== "mouse" && e.pointerType !== "touch") return;
    if (waves.length > 5) waves.shift();
    waves.push({ x: e.clientX, y: e.clientY, t: 0, s: Math.random() * 6.2832 });
    go();
  }, { passive: true });

  function ring(x, y, rad, seed, alpha, width) {
    tc.strokeStyle = "rgba(" + SEAL + "," + alpha.toFixed(3) + ")";
    tc.lineWidth = width;
    tc.beginPath();
    for (var a = 0; a <= 6.3; a += 0.14) {
      var wob = 1 + 0.1 * Math.sin(a * 3 + seed) + 0.058 * Math.sin(a * 7.5 + seed * 1.7);
      var rr = rad * wob;
      var px = x + Math.cos(a) * rr, py = y + Math.sin(a) * rr;
      if (a === 0) tc.moveTo(px, py); else tc.lineTo(px, py);
    }
    tc.closePath();
    tc.stroke();
  }

  

  var hcv = null, hc = null, CW = 0, CH = 0, stamp = null;
  var blobs = [], lastX = null, lastY = null, heroDirty = false;

  function push(x, y, ang, sc, sx) {
    var s = Math.random() * 6.2832;
    blobs.push({
      x: x, y: y, a: ang || 0, sx: sx || 1.85,
      vx: Math.cos(s) * 0.1, vy: Math.sin(s) * 0.1,
      r: (11 + Math.random() * 5) * (sc || 1), l: 1
    });
    if (blobs.length > 240) blobs.splice(0, 40);
  }

  function drop(x, y) {
    if (y < 0 || y > CH || x < 0 || x > CW) { lastX = null; return; }
    if (lastX === null) { push(x, y, 0, 1); lastX = x; lastY = y; return; }
    var ax = x - lastX, ay = y - lastY;
    var d = Math.sqrt(ax * ax + ay * ay);
    if (d < 4) return;
    var ang = Math.atan2(ay, ax);
    var sc = 1 - Math.min(1, d / 90) * 0.3;
    var n = Math.min(24, Math.max(1, Math.round(d / 7)));
    for (var k = 1; k <= n; k++) push(lastX + ax * k / n, lastY + ay * k / n, ang, sc);
    push(x, y, ang, sc);
    lastX = x; lastY = y;
  }

  if (!touch && cover) {
    hcv = document.createElement("canvas");
    hcv.className = "fx-ink";
    hcv.setAttribute("aria-hidden", "true");
    cover.insertBefore(hcv, cover.firstChild);
    hc = hcv.getContext("2d");

    stamp = makeStamp(80, 0.1, 0.088);

    cover.addEventListener("pointerenter", function () { lastX = null; }, { passive: true });
    cover.addEventListener("pointerleave", function () { lastX = null; }, { passive: true });
    cover.addEventListener("pointermove", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      var r = cover.getBoundingClientRect();
      drop(e.clientX - r.left, e.clientY - r.top);
      go();
    }, { passive: true });

    document.addEventListener("pointerdown", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      var r = cover.getBoundingClientRect();
      var x = e.clientX - r.left, y = e.clientY - r.top;
      if (y < 0 || y > CH || x < 0 || x > CW) return;
      for (var k = 0; k < 5; k++) {
        push(x + (Math.random() - 0.5) * 26, y + (Math.random() - 0.5) * 26, 0, 1, 1);
      }
      go();
    }, { passive: true });
  }

  function sizeHero() {
    if (!hcv) return;
    var r = cover.getBoundingClientRect();
    CW = Math.round(r.width); CH = Math.round(r.height);
    hcv.width = Math.round(CW * DPR);
    hcv.height = Math.round(CH * DPR);
    hcv.style.width = CW + "px";
    hcv.style.height = CH + "px";
    hc.setTransform(DPR, 0, 0, DPR, 0, 0);
  }
  if (hcv) sizeHero();

  

  var fcv = null, fc = null, FW = 0, FH = 0, fblobs = [], fstamp = null, fphase = 0, fmx = -1, fmy = -1;
  if (!touch && cover) {
    fcv = document.createElement("canvas");
    fcv.className = "fx-field";
    fcv.setAttribute("aria-hidden", "true");
    cover.insertBefore(fcv, hcv || cover.firstChild);
    fc = fcv.getContext("2d");
    fstamp = makeStamp(140, 0.06, 0.05, 0.78);
    for (var fi = 0; fi < 7; fi++) {
      fblobs.push({
        x: Math.random(), y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0007,
        vy: (Math.random() - 0.5) * 0.0007,
        r: 0.26 + Math.random() * 0.3,
        a: 0.03 + Math.random() * 0.035,
        ph: Math.random() * 6.2832,
        sp: 0.6 + Math.random() * 0.5
      });
    }
    cover.addEventListener("pointermove", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      var r = cover.getBoundingClientRect();
      fmx = (e.clientX - r.left) / r.width;
      fmy = (e.clientY - r.top) / r.height;
    }, { passive: true });
    cover.addEventListener("pointerleave", function () { fmx = -1; fmy = -1; }, { passive: true });
  }
  function sizeField() {
    if (!fcv) return;
    var r = cover.getBoundingClientRect();
    FW = Math.round(r.width); FH = Math.round(r.height);
    fcv.width = FW; fcv.height = FH;
    fcv.style.width = FW + "px";
    fcv.style.height = FH + "px";
    fc.setTransform(1, 0, 0, 1, 0, 0);
  }
  if (fcv) { sizeField(); go(); }

  

  var pad = document.getElementById("inkpad");
  var pcv = null, pc = null, PW = 0, PH = 0, pStamp = null, plx = null, ply = null;

  if (pad && !touch) {
    pcv = document.createElement("canvas");
    pcv.className = "pad-cv";
    pcv.setAttribute("aria-hidden", "true");
    pad.appendChild(pcv);
    pc = pcv.getContext("2d");
    pStamp = makeStamp(80, 0.75, 0.24, 0.7);

    var hint = document.createElement("span");
    hint.className = "pad-hint";
    hint.textContent = "划一下留墨，双击洗掉。";
    pad.appendChild(hint);

    pad.addEventListener("pointerenter", function () { plx = null; }, { passive: true });
    pad.addEventListener("pointerleave", function () { plx = null; }, { passive: true });
    pad.addEventListener("pointermove", function (e) {
      if (e.pointerType && e.pointerType !== "mouse") return;
      var r = pad.getBoundingClientRect();
      paint(e.clientX - r.left, e.clientY - r.top);
    }, { passive: true });
    pad.addEventListener("dblclick", function () {
      pc.clearRect(0, 0, PW, PH);
      plx = null;
    });
  }

  function sizePad() {
    if (!pcv) return;
    var r = pad.getBoundingClientRect();
    PW = Math.round(r.width); PH = Math.round(r.height);
    pcv.width = Math.round(PW * DPR);
    pcv.height = Math.round(PH * DPR);
    pcv.style.width = PW + "px";
    pcv.style.height = PH + "px";
    pc.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function paint(x, y) {
    if (x < 0 || y < 0 || x > PW || y > PH) { plx = null; return; }
    if (plx === null) { plx = x; ply = y; }
    var ax = x - plx, ay = y - ply;
    var d = Math.sqrt(ax * ax + ay * ay);
    if (d < 3) return;
    var ang = Math.atan2(ay, ax);
    var sp = Math.min(1, d / 70);   
    var base = 0.21 + (1 - sp) * 0.19;
    
    var n = Math.min(60, Math.max(1, Math.round(d / 5)));
    for (var k = 1; k <= n; k++) {
      var px = plx + ax * k / n, py = ply + ay * k / n;
      var rr = (8 + Math.random() * 4.5) * (1 - sp * 0.25);
      pc.save();
      pc.translate(px, py);
      pc.rotate(ang + (Math.random() - 0.5) * 0.7);
      pc.scale(1.72, 1);
      pc.globalAlpha = Math.min(1, base * (0.78 + Math.random() * 0.42));
      pc.drawImage(pStamp, -rr, -rr, rr * 2, rr * 2);
      pc.restore();
    }
    plx = x; ply = y;
  }

  if (pcv) sizePad();

  

  function frame() {
    queued = false;
    var more = false;

    if (waves.length || topDirty) {
      tc.clearRect(0, 0, W, H);
      for (var i = waves.length - 1; i >= 0; i--) {
        var w = waves[i];
        w.t += 0.017;
        if (w.t >= 1) { waves.splice(i, 1); continue; }
        more = true;
        var p = w.t, rad = 4 + p * 152;
        var al = (1 - p) * (1 - p) * 0.6;
        ring(w.x, w.y, rad, w.s, al, 3.4 * (1 - p) + 0.6);
        ring(w.x, w.y, rad * 0.6, w.s * 1.9, al * 0.45, 2.4 * (1 - p) + 0.4);
      }
      topDirty = waves.length > 0;
    }

    if (dotOn) {
      dx += (mx - dx) * 0.19;
      dy += (my - dy) * 0.19;
      if (Math.abs(mx - dx) > 0.35 || Math.abs(my - dy) > 0.35) more = true;
      dot.style.transform = "translate3d(" + dx.toFixed(2) + "px," + dy.toFixed(2) + "px,0)";
    }

    if (hc && (blobs.length || heroDirty)) {
      hc.clearRect(0, 0, CW, CH);
      for (var j = blobs.length - 1; j >= 0; j--) {
        var b = blobs[j];
        b.l -= 0.0046;
        if (b.l <= 0) { blobs.splice(j, 1); continue; }
        more = true;
        b.x += b.vx; b.y += b.vy;
        b.r += 0.03;
        hc.save();
        hc.translate(b.x, b.y);
        hc.rotate(b.a);
        hc.scale(b.sx, 1);
        hc.globalAlpha = b.l * b.l * 0.92;
        hc.drawImage(stamp, -b.r, -b.r, b.r * 2, b.r * 2);
        hc.restore();
      }
      hc.globalAlpha = 1;
      heroDirty = blobs.length > 0;
    }

    if (fcv) {
      var cr = cover.getBoundingClientRect();
      if (cr.top < H && cr.bottom > 0) {
        fc.clearRect(0, 0, FW, FH);
        fphase += 0.006;
        var fpx = (fmx < 0 ? 0.5 : fmx) - 0.5;
        var fpy = (fmy < 0 ? 0.5 : fmy) - 0.5;
        for (var bi = 0; bi < fblobs.length; bi++) {
          var o = fblobs[bi];
          o.x += o.vx; o.y += o.vy;
          if (o.x < -0.2) o.x = 1.2; else if (o.x > 1.2) o.x = -0.2;
          if (o.y < -0.2) o.y = 1.2; else if (o.y > 1.2) o.y = -0.2;
          var br = o.r * Math.min(FW, FH) * 0.92;
          var bx = (o.x + fpx * o.sp * 0.06) * FW;
          var by = (o.y + fpy * o.sp * 0.06) * FH;
          fc.globalAlpha = Math.max(0, o.a * (0.62 + 0.38 * Math.sin(fphase * o.sp + o.ph)));
          fc.drawImage(fstamp, bx - br, by - br, br * 2, br * 2);
        }
        fc.globalAlpha = 1;
        more = true;
      }
    }

    if (more) go();
  }

  var rz = null;
  window.addEventListener("resize", function () {
    if (rz) clearTimeout(rz);
    rz = setTimeout(function () {
      sizeTop();
      sizeHero();
      sizePad();
      if (fcv) sizeField();
      blobs.length = 0;
      lastX = lastY = null;
    }, 180);
  }, { passive: true });
})();
