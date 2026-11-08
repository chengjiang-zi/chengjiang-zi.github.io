/* 渲染 + 交互：结构对齐参考站（大标题 hero / 四格数据 / 经历 / 可玩技能 / 分部作品集 / 编号项目页） */
(() => {
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const $ = sel => document.querySelector(sel);
  const asset = p => p;
  const page = document.body.dataset.page;

  /* ---------- 导航 ---------- */
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---------- 首页 ---------- */
  if (page === "home") {
    const nameEl = $("#hero-name");
    nameEl.innerHTML = esc(PROFILE.name.slice(0, -1)) + "<em>" + esc(PROFILE.name.slice(-1)) + "</em>";
    $("#hero-title").textContent = PROFILE.title;
    $("#tags").innerHTML = PROFILE.roles.map(r => '<span class="tag">' + esc(r) + "</span>").join("");
    $("#hero-welcome").textContent = PROFILE.welcome;
    $("#hero-love").textContent = PROFILE.love;
    $("#hero-lead").textContent = PROFILE.lead;
    $("#intro-list").innerHTML = PROFILE.intro.map(t => "<li>" + esc(t) + "</li>").join("");
    $("#stats").innerHTML = PROFILE.stats.map(s => '<div class="stat"><i>' + esc(s.icon) + '</i><div><b>' + esc(s.value) + "</b><span>" + esc(s.label) + "</span></div></div>").join("");

    $("#exp-list").innerHTML = EXPERIENCE.map(e =>
      '<article class="exp-row"><time>' + esc(e.time) + "</time><div><h3>" + esc(e.title) + "</h3><p>" + esc(e.desc) + '</p></div><p class="role">' + esc(e.role) + "</p></article>"
    ).join("");

    $("#skill-list").innerHTML = SKILLS.map(s => '<li><span class="skill-label">' + esc(s.label) + '</span><span class="skill-items">' + esc(s.items) + "</span></li>").join("");
  }

  /* ---------- 作品集 ---------- */
  if (page === "portfolio") {
    const title = "作品集";
    $("#p3-title").textContent = title;

    $("#p3-lead").innerHTML = [
      "作品分三块：游戏制作、软件开发、美术设计。同一个项目可能出现在多块，但每块看的是不同能力。"
    ].map(t => "<p>" + esc(t) + "</p>").join("");

    $("#role-menu").innerHTML = PARTS.map(p =>
      '<a class="role-row" href="#part-' + esc(p.id) + '"><span class="num">' + esc(p.num) + "</span><div><h3>" + esc(p.title) + "</h3><p>" + esc(p.desc) + '</p></div><span class="count">' + (p.items.length + (p.feature ? 1 : 0)) + " 件 ↗</span></a>"
    ).join("");

    const card = (id, note, size) => {
      const w = WORKS[id];
      return '<a class="card ' + (size === "feature" ? "card-feature" : "card-small") + '" href="project.html?id=' + esc(id) + '">' +
        '<span class="card-visual" style="background:' + esc(w.bg || "#ded7c8") + '"><img src="' + esc(asset(w.cover)) + '" alt="' + esc(w.title) + '" loading="lazy" decoding="async" style="object-fit:' + esc(w.fit || "cover") + '"></span>' +
        '<div class="card-body"><p class="card-meta"><span>' + esc(w.badge) + "</span><span>" + esc(w.year) + "</span></p>" +
        "<h3>" + esc(w.title) + "</h3><p>" + esc(note || w.summary) + '</p><p class="card-role">' + esc(w.role) + "</p>" +
        '<span class="card-open"><span class="mono">查看项目</span><span aria-hidden="true">↗</span></span></div></a>';
    };

    $("#parts").innerHTML = PARTS.map(p => {
      const cards = (p.feature ? [p.feature] : []).concat(p.items);
      const feature = '<div class="grid grid-2">' + cards.map(id => card(id, p.notes && p.notes[id], p.feature === id ? "feature" : "small")).join("") + "</div>";
      return '<section class="part" id="part-' + esc(p.id) + '"><div class="shell"><header class="part-head"><span class="num">' + esc(p.num) +
        "</span><div><h2>" + esc(p.title) + "</h2><p>" + esc(p.desc) + "</p></div></header>" + feature + "</div></section>";
    }).join("");

    $("#all-projects").innerHTML = '<section class="part part-alt" id="all"><div class="shell"><header class="part-head"><span class="num">04</span>' +
      "<div><h2>全部项目</h2><p>重点项目在前。</p></div></header>" +
      '<div class="grid grid-3">' + ORDER.map(id => card(id, WORKS[id].summary, "small")).join("") + "</div></div></section>";
  }

  /* ---------- 项目页 ---------- */
  if (page === "project") {
    const id = new URLSearchParams(location.search).get("id") || ORDER[0];
    const w = WORKS[id] || WORKS[ORDER[0]];
    document.title = w.title + " · 澄江子";

    $("#badges").innerHTML = '<span class="badge">#' + esc(w.order) + '</span><span class="badge">' + esc(w.badge) + "</span>";
    $("#project-title").textContent = w.title;
    $("#project-summary").textContent = w.summary;
    $("#role-tags").innerHTML = '<span class="tag">' + esc(w.year) + '</span><span class="tag">' + esc(w.engine) + '</span><span class="tag">' + esc(w.status) + "</span>";
    $("#project-cover").src = asset(w.cover);
    $("#project-cover").style.objectFit = w.fit || "cover";
    $("#project-cover").parentElement.style.background = w.bg || "#ded7c8";
    $("#project-cover").alt = w.title + " 封面";
    $("#project-links").innerHTML = (w.links || []).map(l => '<a href="' + esc(l.url) + '" target="_blank" rel="noopener noreferrer">' + esc(l.label) + ' <span aria-hidden="true">↗</span></a>').join("");
    $("#meta").innerHTML = [
      ["类型", w.badge], ["引擎 / 技术", w.engine], ["年份", w.year], ["状态", w.status]
    ].map(([k, v]) => "<div><dt>" + esc(k) + "</dt><dd>" + esc(v) + "</dd></div>").join("");

    $("#story-body").innerHTML = "<p>" + esc(w.story) + "</p>" +
      (w.points ? '<ul class="points">' + w.points.map(p => "<li>" + esc(p) + "</li>").join("") + "</ul>" : "");

    $("#cases-body").innerHTML = (w.cases || []).map(c =>
      '<article class="case-item"><p class="mono">' + esc(c.label) + "</p><h3>" + esc(c.title) + "</h3><p>" + esc(c.text) + "</p>" +
      (c.image ? '<figure><img src="' + esc(asset(c.image)) + '" alt="' + esc(c.caption || c.title) + '" loading="lazy" decoding="async"><figcaption>' + esc(c.caption || "") + "</figcaption></figure>" : "") +
      "</article>"
    ).join("") || "<p>暂无拆解。</p>";

    $("#gallery-body").innerHTML = (w.images || []).map(i =>
      '<figure><img src="' + esc(asset(i.src)) + '" alt="' + esc(i.caption || w.title) + '" loading="lazy" decoding="async"><figcaption>' + esc(i.caption || "") + "</figcaption></figure>"
    ).join("");

    const idx = ORDER.indexOf(w.id);
    const nextId = ORDER[(idx + 1) % ORDER.length];
    const next = WORKS[nextId];
    $("#next").href = "project.html?id=" + nextId;
    $("#next-title").textContent = next.title;
    $("#next-img").src = asset(next.cover);
    $("#next-img").alt = next.title;

    const rail = $("#rail");
    const sections = [...document.querySelectorAll(".project-article > section")];
    rail.innerHTML = sections.map(s => '<a href="#' + s.id + '">' + esc(s.querySelector("h2").textContent) + "</a>").join("") +
      '<a href="portfolio.html">返回作品集</a>';
    const links = [...rail.querySelectorAll('a[href^="#"]')];
    const update = () => {
      let active = sections[0].id;
      sections.forEach(s => { if (s.getBoundingClientRect().top < innerHeight * .4) active = s.id; });
      links.forEach(a => a.hash === "#" + active ? a.setAttribute("aria-current", "location") : a.removeAttribute("aria-current"));
    };
    addEventListener("scroll", update, { passive: true });
    update();
  }
})();
