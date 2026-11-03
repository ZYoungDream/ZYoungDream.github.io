/* =========================================================================
   core.js — 语言切换 / 页头 / 滚动动效 / 小工具
   ========================================================================= */

const LANG_KEY = "portfolio-lang";

/* 安全存储：沙箱 iframe / 隐私模式下 localStorage 会抛错，退回内存 */
const memStore = Object.create(null);
const store = {
  get(key) {
    try {
      const v = window.localStorage.getItem(key);
      return v !== null ? v : memStore[key] ?? null;
    } catch (e) {
      return memStore[key] ?? null;
    }
  },
  set(key, val) {
    memStore[key] = val;
    try {
      window.localStorage.setItem(key, val);
    } catch (e) {
      /* 存不了就算了，当前会话内仍然生效 */
    }
  },
};

function getLang() {
  const saved = store.get(LANG_KEY);
  if (saved === "zh" || saved === "en") return saved;
  // 首次访问可用 ?lang=en 指定语言（分享指定语言的链接用），之后仍以切换按钮为准
  const urlLang = new URLSearchParams(location.search).get("lang");
  if (urlLang === "zh" || urlLang === "en") return urlLang;
  // 首次访问跟随浏览器语言
  const nav = (navigator.language || "zh").toLowerCase();
  return nav.startsWith("zh") ? "zh" : "en";
}

/* 取双语字段：t({zh:'',en:''}) */
function t(field) {
  if (field == null) return "";
  if (typeof field === "string") return field;
  const lang = getLang();
  return field[lang] || field.zh || field.en || "";
}

function setLang(lang) {
  store.set(LANG_KEY, lang);
  applyLang();
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

/* 同步静态文案（带 data-zh / data-en 属性的节点）与切换按钮状态 */
function applyLang() {
  const lang = getLang();
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-zh]").forEach((el) => {
    const val = el.dataset[lang];
    if (val != null) el.textContent = val;
  });

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.langBtn === lang);
    btn.setAttribute("aria-pressed", String(btn.dataset.langBtn === lang));
  });
}

/* ---------- 页头滚动状态 ---------- */
function initHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- 进入视口渐显 ---------- */
function initReveal(root = document) {
  const items = Array.from(root.querySelectorAll(".reveal:not(.is-in)"));
  if (!items.length) return;

  const vh = window.innerHeight || document.documentElement.clientHeight;

  /* 先直接量一次位置：已经在视口里的立刻显示。
     空容器（内容后注入、初始高度 0）会让 IntersectionObserver 首次回调判为未进入视口，
     之后再补内容也不会重新触发，所以这里不依赖它来判断首屏。 */
  const pending = [];
  items.forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.top < vh && r.bottom > 0) el.classList.add("is-in");
    else pending.push(el);
  });

  if (!pending.length) return;

  if (!("IntersectionObserver" in window)) {
    pending.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
  );
  pending.forEach((el) => io.observe(el));
}

/* ---------- 语言按钮 ---------- */
function initLangButtons() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.langBtn));
  });
}

/* ---------- 首屏视频：等主体加载完再上，滚出视口就暂停 ---------- */
function initHeroVideo() {
  const v = document.querySelector(".hero__video");
  if (!v || !v.dataset.src) return;

  /* 开了省流量模式就只留海报，别下视频 */
  const conn = navigator.connection;
  if (conn && conn.saveData) return;

  const start = () => {
    v.src = v.dataset.src;
    v.removeAttribute("data-src");
    const p = v.play();
    if (p && p.catch) p.catch(() => {});

    /* 滚过首屏后暂停解码，否则滚动时一直在解 720p，很吃 GPU */
    if (!("IntersectionObserver" in window)) return;
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const q = v.play();
            if (q && q.catch) q.catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.01 }
    ).observe(v);
  };

  /* 关键：视频不参与首屏竞争。海报先顶上，文字和作品网格先出来，
     视频等 load 之后再开始下载——慢网下差别非常明显。 */
  const kick = () => setTimeout(start, 250);
  if (document.readyState === "complete") kick();
  else window.addEventListener("load", kick, { once: true });
}

/* ---------- 工具 ---------- */
const esc = (str) =>
  String(str == null ? "" : str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const pad2 = (n) => String(n).padStart(2, "0");

/* 海报加载失败时的兜底：重试两次再放弃。
   早期版本是 onerror="this.remove()"，网络一抖图就永久消失了，
   页面上只剩渐变色块——所以改成带退避的重试。 */
function posterError(img) {
  const n = Number(img.dataset.retry || 0);
  if (n >= 2) {
    if (img.dataset.wrap === "figure" && img.parentNode) img.parentNode.remove();
    else img.remove();
    return;
  }
  img.dataset.retry = String(n + 1);
  const base = img.dataset.src || img.src;
  setTimeout(() => {
    img.src = base + (base.includes("?") ? "&" : "?") + "r=" + (n + 1);
  }, 700 * (n + 1));
}

/* 没有海报文件时，用色块占位 */
function mediaPlaceholder(work, index) {
  const [c1, c2] = work.tint || ["#C9C4B8", "#6E6A60"];
  return `<div class="ph" style="--t1:${c1};--t2:${c2}">
      <span class="ph-num">${pad2(index + 1)}</span>
      <span class="ph-tag">${esc(t(work.subtitle))} · ${esc(work.year)}</span>
    </div>`;
}

/* ---------- 启动 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initLangButtons();
  initHeader();
  applyLang();
  initReveal();
  initHeroVideo();
  // 告诉内联脚本：渲染链路正常，可以保留渐显动画
  window.__pfReady = true;
});

/* 任何脚本报错都立刻取消"隐藏待渐显"状态，保证内容可见 */
window.addEventListener("error", () => {
  document.documentElement.classList.remove("js");
});
