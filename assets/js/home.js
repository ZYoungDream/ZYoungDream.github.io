/* =========================================================================
   home.js — 首页渲染（含分类筛选 / 悬停循环播放）
   ========================================================================= */

let activeCat = "all";
const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function renderSiteChrome() {
  const brand = document.querySelector("[data-brand]");
  if (brand) {
    brand.innerHTML =
      getLang() === "zh"
        ? `${esc(SITE.name.zh)}<span>${esc(SITE.nameEn)}</span>`
        : esc(SITE.nameEn);
  }

  document.title =
    getLang() === "zh"
      ? `${SITE.name.zh} · ${SITE.role.zh}`
      : `${SITE.name.en} · ${SITE.role.en}`;
}

function renderHero() {
  const eyebrow = document.querySelector("[data-hero-eyebrow]");
  if (eyebrow) eyebrow.textContent = t(SITE.eyebrow);

  const title = document.querySelector("[data-hero-title]");
  if (title) title.textContent = getLang() === "zh" ? SITE.name.zh : SITE.nameEn;

  const statement = document.querySelector("[data-hero-statement]");
  if (statement) statement.textContent = t(SITE.statement);

  const meta = document.querySelector("[data-hero-meta]");
  if (meta) {
    meta.innerHTML = SITE.meta
      .map(
        (row) => `<div class="hero__meta-row">
            <dt class="label">${esc(t(row.k))}</dt>
            <dd>${esc(t(row.v))}</dd>
          </div>`
      )
      .join("");
  }
}

function renderFilters() {
  const box = document.querySelector("[data-filters]");
  if (!box) return;

  box.innerHTML = CATS.map((c) => {
    const n = c.key === "all" ? WORKS.length : WORKS.filter((w) => w.cat === c.key).length;
    return `<button type="button" class="filter${c.key === activeCat ? " is-active" : ""}"
        data-cat="${c.key}" role="tab" aria-selected="${c.key === activeCat}">
        ${esc(t(c))}<span>${pad2(n)}</span>
      </button>`;
  }).join("");

  box.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCat = btn.dataset.cat;
      renderFilters();
      renderWorks();
    });
  });
}

function workCard(work, i) {
  const img = work.poster
    ? `<img src="${esc(work.poster)}" data-src="${esc(work.poster)}" alt="${esc(t(work.title))}" loading="lazy" decoding="async" onerror="posterError(this)">`
    : "";
  const loop = work.loop
    ? `<video class="card-loop" src="${esc(work.loop)}" muted loop playsinline preload="none"></video>`
    : "";
  const badge = work.excerpt
    ? `<span class="card-badge">${esc(t(UI.excerptNote))}</span>`
    : "";

  return `<article class="work-card reveal" style="transition-delay:${(i % 3) * 80}ms">
      <a class="work-card__link" href="work.html?w=${encodeURIComponent(work.slug)}">
        <div class="card-media">
          ${mediaPlaceholder(work, i)}
          ${img}
          ${loop}
          ${badge}
          <span class="card-view">${esc(t(UI.view))} →</span>
        </div>
        <div class="card-body">
          <span class="card-index">${pad2(i + 1)}</span>
          <h3 class="card-title">${esc(t(work.title))}<span>${esc(t(work.subtitle))}</span></h3>
          <div class="card-meta">
            <span>${esc(work.year)}</span><i></i>
            <span>${esc(work.duration)}</span><i></i>
            <span>${esc(t(work.role))}</span>
          </div>
        </div>
      </a>
    </article>`;
}

function bindHoverLoops(root) {
  if (!canHover) return;
  root.querySelectorAll(".work-card__link").forEach((link) => {
    const v = link.querySelector(".card-loop");
    if (!v) return;
    const media = link.querySelector(".card-media");

    const play = () => {
      if (v.readyState === 0) v.load();
      const p = v.play();
      if (p && p.catch) p.catch(() => {});
      media.classList.add("is-playing");
    };
    const stop = () => {
      v.pause();
      media.classList.remove("is-playing");
    };

    link.addEventListener("mouseenter", play);
    link.addEventListener("mouseleave", stop);
    link.addEventListener("focus", play);
    link.addEventListener("blur", stop);
  });
}

function renderWorks() {
  const box = document.querySelector("[data-works]");
  if (!box) return;

  const list = activeCat === "all" ? WORKS : WORKS.filter((w) => w.cat === activeCat);
  // 竖屏单独成组：16:9 的格子里塞 9:16 会把人裁掉
  const land = list.filter((w) => w.aspect !== "portrait");
  const port = list.filter((w) => w.aspect === "portrait");

  let html = "";
  if (land.length) {
    html += `<div class="works-grid">${land.map((w, i) => workCard(w, i)).join("")}</div>`;
  }
  if (port.length) {
    html +=
      `<div class="works-subhead reveal">
         <h3>${esc(t(UI.portraitTitle))}</h3>
         <span>${pad2(port.length)} ${esc(t(UI.portraitUnit))}</span>
       </div>
       <div class="works-grid works-grid--portrait">${port.map((w, i) => workCard(w, i)).join("")}</div>`;
  }
  box.innerHTML = html;

  const count = document.querySelector("[data-works-count]");
  if (count) {
    count.textContent =
      getLang() === "zh"
        ? `${pad2(list.length)} ${UI.worksCount.zh}`
        : `${pad2(list.length)} ${UI.worksCount.en}`;
  }

  bindHoverLoops(box);
  initReveal(box);
}

function renderAbout() {
  const bio = document.querySelector("[data-about-bio]");
  if (bio) {
    bio.innerHTML = SITE.about[getLang()].map((p) => `<p>${esc(p)}</p>`).join("");
  }

  const cols = document.querySelector("[data-about-stack]");
  if (cols) {
    cols.innerHTML = SITE.stack
      .map(
        (group) => `<div class="stack">
            <h4>${esc(t(group.title))}</h4>
            <ul>${group.items.map((it) => `<li>${esc(t(it))}</li>`).join("")}</ul>
          </div>`
      )
      .join("");
  }
}

function renderCV() {
  const list = document.querySelector("[data-cv]");
  if (!list) return;
  list.innerHTML = SITE.cv
    .map(
      (row) => `<li class="cv__row">
          <span class="cv__time">${esc(row.time)}</span>
          <span class="cv__org">${esc(t(row.org))}</span>
          <span class="cv__role">${esc(t(row.role))}</span>
        </li>`
    )
    .join("");
}

function renderContact() {
  const lead = document.querySelector("[data-contact-lead]");
  if (lead) lead.textContent = t(SITE.contactLead);

  const mail = document.querySelector("[data-contact-mail]");
  if (mail) {
    mail.textContent = SITE.email;
    mail.href = `mailto:${SITE.email}`;
  }

  const cols = document.querySelector("[data-contact-cols]");
  if (cols) {
    cols.innerHTML = `
      <div class="contact__col">
        <h4>${esc(t(UI.emailLabel))} / ${esc(t(UI.phoneLabel))}</h4>
        <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
        <a href="tel:${esc(SITE.phone.replace(/\s/g, ""))}">${esc(SITE.phone)}</a>
      </div>
      <div class="contact__col">
        <h4>${esc(t(UI.cityLabel))}</h4>
        <p>${esc(t(SITE.city))}</p>
      </div>
      <div class="contact__col">
        <h4>${esc(t(UI.statusLabel))}</h4>
        <p>${esc(t(UI.statusValue))}</p>
      </div>`;
  }

  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();
}

function renderHome() {
  renderSiteChrome();
  renderHero();
  renderFilters();
  renderWorks();
  renderAbout();
  renderCV();
  renderContact();
  applyLang();
  initReveal();
}

/* 首屏渲染完成后再修正锚点位置（内容由 JS 生成，浏览器自带的锚点定位会算错） */
let hashFixed = false;
function fixHash() {
  if (hashFixed || !location.hash) return;
  const el = document.querySelector(location.hash);
  if (!el) return;
  hashFixed = true;
  requestAnimationFrame(() => el.scrollIntoView({ behavior: "auto", block: "start" }));
}

document.addEventListener("DOMContentLoaded", () => {
  try {
    renderHome();
  } catch (err) {
    console.error("首页渲染失败：", err);
    document.documentElement.classList.remove("js"); // 至少让已有内容可见
  }
  fixHash();
  window.addEventListener("load", fixHash);
});
document.addEventListener("langchange", () => {
  try {
    renderHome();
  } catch (err) {
    console.error("切换语言失败：", err);
  }
});
