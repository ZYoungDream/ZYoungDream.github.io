/* =========================================================================
   work.js — 作品详情页
   URL: work.html?w=slug
   ========================================================================= */

let currentWork = null;

function getSlug() {
  return new URLSearchParams(window.location.search).get("w");
}

function renderWork() {
  const slug = getSlug();
  let index = WORKS.findIndex((w) => w.slug === slug);
  // 直接打开 work.html（没带参数）时，默认显示第一部，而不是跳转成空白
  if (index === -1) index = 0;
  currentWork = WORKS[index];
  const work = currentWork;
  const lang = getLang();

  /* --- 页头 --- */
  document.title =
    lang === "zh" ? `${t(work.title)} · ${SITE.name.zh}` : `${t(work.title)} · ${SITE.name.en}`;

  const brand = document.querySelector("[data-brand]");
  if (brand) {
    brand.innerHTML =
      lang === "zh"
        ? `${esc(SITE.name.zh)}<span>${esc(SITE.nameEn)}</span>`
        : esc(SITE.nameEn);
  }

  /* --- 标题区 --- */
  document.querySelector("[data-work-index]").textContent = `${pad2(index + 1)} / ${pad2(WORKS.length)}`;
  document.querySelector("[data-work-title]").textContent = t(work.title);
  document.querySelector("[data-work-sub]").textContent = t(work.subtitle);

  const catEl = document.querySelector("[data-work-cat]");
  if (catEl) {
    const cat = CATS.find((c) => c.key === work.cat);
    catEl.textContent = cat ? t(cat) : "";
  }

  document.querySelector("[data-work-meta]").innerHTML = `
    <div><dt>${esc(lang === "zh" ? "年份" : "Year")}</dt><dd>${esc(work.year)}</dd></div>
    <div><dt>${esc(lang === "zh" ? "时长" : "Runtime")}</dt><dd>${esc(work.duration)}</dd></div>
    <div><dt>${esc(lang === "zh" ? "规格" : "Format")}</dt><dd>${esc(work.format)}</dd></div>
    <div><dt>${esc(lang === "zh" ? "职位" : "Role")}</dt><dd>${esc(t(work.role))}</dd></div>`;

  /* --- 播放器 --- */
  const player = document.querySelector("[data-player]");
  const [c1, c2] = work.tint || ["#C9C4B8", "#6E6A60"];
  player.style.setProperty("--t1", c1);
  player.style.setProperty("--t2", c2);
  player.classList.toggle("work-hero--portrait", work.aspect === "portrait");

  player.innerHTML = `
    ${
      work.video
        ? `<video controls playsinline preload="metadata" ${work.poster ? `poster="${esc(work.poster)}"` : ""}>
             <source src="${esc(work.video)}" type="video/mp4">
           </video>`
        : ""
    }
    <div class="player__fallback" ${work.video ? "hidden" : ""}>
      <p>${esc(t(UI.pending))}</p>
    </div>`;

  const video = player.querySelector("video");
  const fallback = player.querySelector(".player__fallback");
  if (video) {
    const fail = () => {
      video.remove();
      fallback.hidden = false;
    };
    video.addEventListener("error", fail);
    const src = video.querySelector("source");
    if (src) src.addEventListener("error", fail);
  }

  /* --- 节选提示 --- */
  const note = document.querySelector("[data-excerpt-note]");
  if (note) {
    note.hidden = !work.excerpt;
    note.textContent = work.excerpt
      ? lang === "zh"
        ? `站内为节选片段 · 全片 ${work.duration}`
        : `Excerpt · full film ${work.duration}`
      : "";
  }

  /* --- 简介 + 主创 --- */
  document.querySelector("[data-synopsis-label]").textContent = t(UI.synopsis);
  document.querySelector("[data-synopsis]").innerHTML = work.synopsis[lang]
    .map((p) => `<p>${esc(p)}</p>`)
    .join("");

  document.querySelector("[data-credits-label]").textContent = t(UI.credits);
  document.querySelector("[data-credits]").innerHTML = work.credits
    .map((c) => `<div><dt>${esc(t(c.k))}</dt><dd>${esc(t(c.v))}</dd></div>`)
    .join("");

  /* --- 全片外链 --- */
  const watch = document.querySelector("[data-watch]");
  if (watch) {
    if (work.external) {
      watch.href = work.external;
      watch.target = "_blank";
      watch.rel = "noopener";
      watch.hidden = false;
    } else {
      watch.hidden = true;
    }
  }

  /* --- 剧照 --- */
  const stills = document.querySelector("[data-stills]");
  stills.innerHTML = (work.stills || [])
    .map(
      (src) =>
        `<figure><img src="${esc(src)}" data-src="${esc(src)}" alt="" loading="lazy" data-wrap="figure" onerror="posterError(this)"></figure>`
    )
    .join("");
  if (!stills.children.length) stills.style.display = "none";

  /* --- 上下篇 --- */
  const prev = WORKS[(index - 1 + WORKS.length) % WORKS.length];
  const next = WORKS[(index + 1) % WORKS.length];
  document.querySelector("[data-pager]").innerHTML = `
    <a href="work.html?w=${encodeURIComponent(prev.slug)}">
      <span class="label">← ${esc(t(UI.prev))}</span>
      <strong>${esc(t(prev.title))}</strong>
    </a>
    <a href="work.html?w=${encodeURIComponent(next.slug)}">
      <span class="label">${esc(t(UI.next))} →</span>
      <strong>${esc(t(next.title))}</strong>
    </a>`;

  const yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  applyLang();
  initReveal();
}

document.addEventListener("DOMContentLoaded", renderWork);
document.addEventListener("langchange", () => {
  if (currentWork) renderWork();
});
