/* =========================================================================
   data.js — 站点信息 / 分类 / 界面文案
   作品数据在 works.js（由 tools/gen-works.py 生成）
   改文字、换链接，只改这两个文件。
   ========================================================================= */

const SITE = {
  name: { zh: "赵洋俊", en: "Zhao Yangjun" },
  nameEn: "Zhao Yangjun",
  role: { zh: "导演 / 剪辑 / AI 影像", en: "Director / Editor / AI Filmmaker" },
  eyebrow: {
    zh: "剧情 · 纪录片 · 宣传片 · AI 影像",
    en: "Fiction · Documentary · Commercial · AI Film",
  },

  statement: {
    zh: "纪录片出身，拍过剧情，也在用 AI 重新做影像的生产方式。关心的始终是具体的人，和具体处境里的选择。",
    en: "Documentary-trained, working across fiction, and rebuilding how images get made with AI. Always about specific people and the choices they make in specific situations.",
  },

  meta: [
    { k: { zh: "现居", en: "Based in" }, v: { zh: "上海 · 长宁", en: "Shanghai, China" } },
    { k: { zh: "在读", en: "Education" }, v: { zh: "上海大学 戏剧与影视 · 导演方向 硕士", en: "MFA in Directing, Shanghai University" } },
    { k: { zh: "可承接", en: "Available for" }, v: { zh: "剧情 · 纪录片 · 宣传片 · AI 影像", en: "Fiction · Documentary · Commercial · AI Film" } },
  ],

  email: "is_zyj@qq.com",
  phone: "137 6469 6232",
  city: { zh: "上海 · 长宁", en: "Changning, Shanghai" },

  about: {
    zh: [
      "我是赵洋俊，广西崇左人，现居上海。本科在东华大学读媒体制作与传播，中间去中国人民解放军驻香港部队服役两年，现在在上海大学读戏剧与影视导演方向的硕士。",
      "拍纪录片出身，也拍剧情片和宣传片。做过摄影指导、剪辑、导演，也做过李佳琦直播间的摄像和豪宅账号的短视频运营——这些经历让我对「片子到底给谁看」这件事比较敏感。",
      "最近两年在把 AI 接进制作流程：在喜马拉雅和一生智能做过 AI 视频制作与 Prompt 制作组长，也自己用 AI 从零做完了十七分钟的短片《雪祭》。工具会一直变，但对节奏和情绪的判断不会。",
    ],
    en: [
      "I'm Zhao Yangjun, from Chongzuo, Guangxi, now based in Shanghai. I studied Media Production and Communication at Donghua University, served two years in the Navy of the PLA Hong Kong Garrison, and am now pursuing an MFA in Directing at Shanghai University.",
      "Documentary is my home ground, but I also shoot fiction and commercials. I've worked as a cinematographer, editor and director — and also as a camera operator in Li Jiaqi's livestream studio and a short-video operator for a luxury real-estate account. Those jobs taught me to stay sensitive to who a film is actually for.",
      "For the past two years I've been folding AI into production: AI video and Prompt team lead at Ximalaya and Yisheng Intelligence, and a 17-minute short, Xue Ji, made entirely with AI. Tools keep changing. Judgement about rhythm and feeling doesn't.",
    ],
  },

  stack: [
    {
      title: { zh: "技能", en: "Skills" },
      items: [
        { zh: "导演 / 编剧", en: "Directing / Writing" },
        { zh: "摄影指导", en: "Cinematography" },
        { zh: "剪辑 / 调色", en: "Editing / Grading" },
        { zh: "AI 影像全流程", en: "AI Film Pipeline" },
      ],
    },
    {
      title: { zh: "工具", en: "Tools" },
      items: [
        { zh: "达芬奇 · Premiere · 剪映", en: "Resolve · Premiere · CapCut" },
        { zh: "After Effects · Audition", en: "After Effects · Audition" },
        { zh: "可灵 · Lovart · Gemini · Codex", en: "Kling · Lovart · Gemini · Codex" },
      ],
    },
    {
      title: { zh: "设备", en: "Gear" },
      items: [
        { zh: "索尼 / 佳能 机身", en: "Sony / Canon bodies" },
        { zh: "大疆稳定器 · 无人机", en: "DJI gimbals · drones" },
        { zh: "无人机操作员证（中级）", en: "Drone licence (intermediate)" },
      ],
    },
    {
      title: { zh: "荣誉", en: "Awards" },
      items: [
        { zh: "第 15 届全国大学生广告艺术大赛 全国优秀奖", en: "National Advertising Art Design Competition — National Merit" },
        { zh: "中国大学生广告艺术节学院奖 春季赛 铜奖", en: "China Student Advertising Festival — Bronze" },
        { zh: "第 14 届大广赛 上海赛区二等奖", en: "NAADC — Shanghai, 2nd Prize" },
        { zh: "东华大学一等奖学金（2021—2022）", en: "Donghua University First-class Scholarship" },
      ],
    },
  ],

  /* 经历：在读 → 实习 → 服役 → 本科 */
  cv: [
    { time: "2024.09 — 2027.06", org: { zh: "上海大学", en: "Shanghai University" }, role: { zh: "戏剧与影视（导演方向）· 硕士", en: "MFA, Directing" } },
    { time: "2026.03 — 2026.08", org: { zh: "北京一生智能科技", en: "Yisheng Intelligence" }, role: { zh: "AI 视频 Prompt 制作 / 制作组长", en: "AI Video Prompt Lead" } },
    { time: "2025.12 — 2026.03", org: { zh: "上海喜马拉雅", en: "Ximalaya" }, role: { zh: "AI 视频制作", en: "AI Video Production" } },
    { time: "2025.06 — 2025.10", org: { zh: "上海商米科技", en: "Sunmi Technology" }, role: { zh: "导演助理 / 摄影", en: "Assistant Director / Camera" } },
    { time: "2024.05 — 2024.08", org: { zh: "上海有业豪宅", en: "Youye Real Estate" }, role: { zh: "短视频运营专员", en: "Short-video Operations" } },
    { time: "2023.10 — 2024.01", org: { zh: "美腕（上海）", en: "Meione" }, role: { zh: "直播摄像 · 李佳琦直播间", en: "Studio Camera, Li Jiaqi Live" } },
    { time: "2019.09 — 2021.09", org: { zh: "中国人民解放军驻香港部队", en: "PLA Hong Kong Garrison" }, role: { zh: "海军 · 服役", en: "Navy Service" } },
    { time: "2018.09 — 2024.06", org: { zh: "东华大学", en: "Donghua University" }, role: { zh: "媒体制作与传播 · 学士", en: "BA, Media Production" } },
  ],

  contactLead: {
    zh: "有项目、有剧本，或者只是想聊聊，都可以直接找我。",
    en: "Got a project, a script, or just want to talk — reach out anytime.",
  },
};

/* 作品分类（顺序即筛选栏顺序） */
const CATS = [
  { key: "all", zh: "全部", en: "All" },
  { key: "fiction", zh: "剧情", en: "Fiction" },
  { key: "doc", zh: "纪录片", en: "Documentary" },
  { key: "promo", zh: "宣传片", en: "Commercial" },
  { key: "edit", zh: "剪辑", en: "Edit" },
  { key: "ai", zh: "AI 影像", en: "AI Film" },
  { key: "know", zh: "科普", en: "Explainer" },
  { key: "product", zh: "产品", en: "Product" },
];

/* 静态界面文案 */
const UI = {
  nav: {
    works: { zh: "作品", en: "Work" },
    about: { zh: "关于", en: "About" },
    contact: { zh: "联系", en: "Contact" },
  },
  worksTitle: { zh: "作品选", en: "Selected Works" },
  worksLabel: { zh: "01 — 作品", en: "01 — Work" },
  aboutLabel: { zh: "02 — 关于", en: "02 — About" },
  contactLabel: { zh: "03 — 联系", en: "03 — Contact" },
  view: { zh: "观看", en: "View" },
  aboutTitle: { zh: "拍片的人", en: "The person behind the camera" },
  contactTitle: { zh: "聊聊", en: "Get in touch" },
  watchFull: { zh: "观看全片", en: "Watch full film" },
  synopsis: { zh: "剧情简介", en: "Synopsis" },
  credits: { zh: "主创", en: "Credits" },
  prev: { zh: "上一部", en: "Previous" },
  next: { zh: "下一部", en: "Next" },
  back: { zh: "返回作品", en: "All work" },
  pending: { zh: "预览片待上传", en: "Preview coming soon" },
  emailLabel: { zh: "邮箱", en: "Email" },
  phoneLabel: { zh: "电话", en: "Phone" },
  cityLabel: { zh: "所在地", en: "Location" },
  statusLabel: { zh: "状态", en: "Status" },
  statusValue: { zh: "开放合作 · 2027 届", en: "Open to work · Class of 2027" },
  excerptNote: { zh: "节选", en: "Excerpt" },
  rights: { zh: "赵洋俊 保留所有权利", en: "Zhao Yangjun. All rights reserved." },
  worksCount: { zh: "部作品", en: "works" },
  portraitTitle: { zh: "竖屏短片", en: "Vertical Shorts" },
  portraitUnit: { zh: "条", en: "clips" },
  cvLabel: { zh: "经历", en: "CV" },
  cvTitle: { zh: "教育 · 实习 · 服役", en: "Education · Experience · Service" },
};
