/* =========================================================================
   works.js — 作品数据（由 tools/gen-works.py 生成，不要手改）
   改作品请编辑 tools/works-content.py 后重新生成。
   ========================================================================= */

const WORKS = [
  {
    slug: "xue-ji",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "雪祭",
      "en": "雪祭"
    },
    subtitle: {
      "zh": "AI 剧情短片 · 17 分钟",
      "en": "AI Narrative Short · 17 min"
    },
    year: "2026",
    duration: "17'50\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/xue-ji.jpg",
    video: "assets/video/xue-ji.mp4",
    loop: "assets/video/loop/xue-ji.mp4",
    external: "https://www.bilibili.com/video/BV1Gg4w6bEwp/",
    excerpt: true,
    tint: [
      "#8B94A0",
      "#2B3038"
    ],
    synopsis: {
      "zh": [
        "北方雪原上的村庄，一个关于守与失的故事。全片十七分钟，从剧本、分镜到每一帧画面和每一条声音，全部由 AI 生成。",
        "这是我第一次把 AI 当作一套完整的制作系统、而不是零散的工具来用。真正的难点不在生成一张好看的画面，而在让同一个人物、同一种光、同一口气，在近两百个镜头里保持连贯。"
      ],
      "en": [
        "A village on the northern snow plain — a story about holding on and losing. Seventeen minutes, generated end to end with AI: script, storyboard, every frame, every sound.",
        "It was the first time I treated AI as a complete production system rather than a bag of tools. The hard part was never a single beautiful frame — it was keeping the same face, the same light, the same breath across nearly two hundred shots."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 编剧",
          "en": "Director / Writer"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑 / 声音",
          "en": "Editor / Sound"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "制作方式",
          "en": "Method"
        },
        "v": {
          "zh": "AI 全流程生成",
          "en": "Fully AI-generated"
        }
      },
      {
        "k": {
          "zh": "年份",
          "en": "Year"
        },
        "v": "2026"
      }
    ],
    stills: [
      "assets/img/xue-ji-still-1.jpg",
      "assets/img/xue-ji-still-2.jpg",
      "assets/img/xue-ji-still-3.jpg"
    ],
  },
  {
    slug: "jin-sheng-zhi-ri",
    cat: "fiction",
    aspect: "landscape",
    title: {
      "zh": "仅剩之日",
      "en": "仅剩之日"
    },
    subtitle: {
      "zh": "剧情短片 · 15 分钟",
      "en": "Narrative Short · 15 min"
    },
    year: "2024",
    duration: "15'29\"",
    format: "1080p · 16:9",
    role: {
      "zh": "摄影指导",
      "en": "Cinematographer"
    },
    poster: "assets/img/jin-sheng-zhi-ri.jpg",
    video: "assets/video/jin-sheng-zhi-ri.mp4",
    loop: "assets/video/loop/jin-sheng-zhi-ri.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#9FA6A4",
      "#333A38"
    ],
    synopsis: {
      "zh": [
        "毕业联合作业，我担任摄影指导。故事发生在城市与医院之间，讲一个人如何面对所剩不多的时间。",
        "整片以自然光为主，大量使用长焦和固定机位，让空间压住人物——越是临近告别，镜头越不肯动。"
      ],
      "en": [
        "My graduation film, shot as cinematographer. The story moves between the city and the hospital, about someone facing the little time they have left.",
        "Almost entirely natural light, with long lenses and locked-off frames that let the space press down on the characters. The closer it gets to goodbye, the less the camera is willing to move."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "摄影指导",
          "en": "Cinematographer"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Format"
        },
        "v": {
          "zh": "毕业联合作业",
          "en": "Graduation film"
        }
      },
      {
        "k": {
          "zh": "年份",
          "en": "Year"
        },
        "v": "2024"
      }
    ],
    stills: [
      "assets/img/jin-sheng-zhi-ri-still-1.jpg",
      "assets/img/jin-sheng-zhi-ri-still-2.jpg",
      "assets/img/jin-sheng-zhi-ri-still-3.jpg"
    ],
  },
  {
    slug: "zai-jian-lan-ling",
    cat: "doc",
    aspect: "landscape",
    title: {
      "zh": "再见岚灵",
      "en": "再见岚灵"
    },
    subtitle: {
      "zh": "纪录片 · 23 分钟",
      "en": "Documentary · 23 min"
    },
    year: "2024",
    duration: "23'13\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/zai-jian-lan-ling.jpg",
    video: "assets/video/zai-jian-lan-ling.mp4",
    loop: "assets/video/loop/zai-jian-lan-ling.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#A08C6E",
      "#3A2E22"
    ],
    synopsis: {
      "zh": [
        "岚灵花鸟市场关停前的最后一段时间。二十三分钟，拍摊主、拍笼子、拍那些不知道明天去哪的鸟。",
        "拍了很久，最后留下来的几乎都是安静的镜头——一个人坐在店里，等一个可能不会再来的客人。市场拆掉之后，这些镜头变成了它唯一的档案。"
      ],
      "en": [
        "The last stretch of days before the Lanling flower-and-bird market shut down. Twenty-three minutes of stallholders, cages, and birds that don't know where they'll go tomorrow.",
        "I shot for a long time; what survived the edit are almost all quiet shots — someone sitting in a shop, waiting for a customer who may never come. After the market came down, these images became its only archive."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 摄影",
          "en": "Director / DoP"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Format"
        },
        "v": {
          "zh": "纪录长片",
          "en": "Feature documentary"
        }
      }
    ],
    stills: [
      "assets/img/zai-jian-lan-ling-still-1.jpg",
      "assets/img/zai-jian-lan-ling-still-2.jpg",
      "assets/img/zai-jian-lan-ling-still-3.jpg"
    ],
  },
  {
    slug: "gu-er-ji",
    cat: "fiction",
    aspect: "landscape",
    title: {
      "zh": "孤儿记",
      "en": "孤儿记"
    },
    subtitle: {
      "zh": "剧情短片 · 14 分钟",
      "en": "Narrative Short · 14 min"
    },
    year: "2023",
    duration: "14'14\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/gu-er-ji.jpg",
    video: "assets/video/gu-er-ji.mp4",
    loop: "assets/video/loop/gu-er-ji.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#A9A49C",
      "#34322C"
    ],
    synopsis: {
      "zh": [
        "剧情短片，冷调、以室内为主。摄影上刻意压掉暖色，让墙面、顶灯和走廊成为人物处境的一部分。",
        "我和导演定下的基调是：不用音乐，只留环境声。让观众听见房间有多大，也就知道这个人有多孤单。"
      ],
      "en": [
        "A cool-toned, largely interior narrative short. We pulled the warm colours out of the image on purpose, so walls, ceiling lights and corridors become part of the character's situation.",
        "The rule the director and I set: no score, only ambience. Let the audience hear how big the room is, and they'll know how alone this person is."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "摄影",
          "en": "Cinematography"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Format"
        },
        "v": {
          "zh": "剧情短片",
          "en": "Narrative short"
        }
      }
    ],
    stills: [
      "assets/img/gu-er-ji-still-1.jpg",
      "assets/img/gu-er-ji-still-2.jpg",
      "assets/img/gu-er-ji-still-3.jpg"
    ],
  },
  {
    slug: "jie-yan",
    cat: "fiction",
    aspect: "landscape",
    title: {
      "zh": "戒烟",
      "en": "戒烟"
    },
    subtitle: {
      "zh": "剧情短片 · 13 分钟",
      "en": "Narrative Short · 13 min"
    },
    year: "2025",
    duration: "13'39\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/jie-yan.jpg",
    video: "assets/video/jie-yan.mp4",
    loop: "assets/video/loop/jie-yan.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8E8A82",
      "#2A2823"
    ],
    synopsis: {
      "zh": [
        "一个年轻人在一个晚上决定戒烟。这个决定很小，小到只有他自己知道；但也大到把他这一晚走过的所有地方——长椅、停车场、楼道、便利店——都变成了同一条路的重复。",
        "拍的时候我在想，成瘾这件事真正的对手不是烟，是那些你每天都会经过、每次都会停一下的地方。所以整部片子几乎没有室内戏，全在夜里、在户外、在他走不出去的那几条街。"
      ],
      "en": [
        "A young man decides to quit smoking, one night. The decision is small — small enough that nobody else knows about it — and large enough that every place he walks through that night, the bench, the car park, the stairwell, the convenience store, becomes the same road walked again.",
        "What interested me was that the real opponent of an addiction is never the substance. It's the places you pass every day and stop at every time. So the film has almost no interiors: it stays outdoors, at night, on the few streets he can't get out of."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 编剧",
          "en": "Director / Writer"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "摄影",
          "en": "Cinematography"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "规格",
          "en": "Format"
        },
        "v": {
          "zh": "4K 导出",
          "en": "4K master"
        }
      }
    ],
    stills: [
      "assets/img/jie-yan-still-1.jpg",
      "assets/img/jie-yan-still-2.jpg",
      "assets/img/jie-yan-still-3.jpg"
    ],
  },
  {
    slug: "dao-yan-zuo-ye",
    cat: "fiction",
    aspect: "landscape",
    title: {
      "zh": "人往＿处走",
      "en": "人往＿处走"
    },
    subtitle: {
      "zh": "剧情短片 · 导演作业 · 3 分钟",
      "en": "Narrative Short · 3 min"
    },
    year: "2025",
    duration: "3'04\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/dao-yan-zuo-ye.jpg",
    video: "assets/video/dao-yan-zuo-ye.mp4",
    loop: "assets/video/loop/dao-yan-zuo-ye.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#9A9488",
      "#2F2C26"
    ],
    synopsis: {
      "zh": [
        "研究生导演课的作业。三分钟，一个教室、一趟公交、一句被反复念起的话：水往低处流，人往＿处走。",
        "那个空着的字是有意的。想拍的正是那种被反复劝说、最后连自己也信了的时刻。"
      ],
      "en": [
        "An assignment for my directing seminar. Three minutes, one classroom, one bus ride, and a line repeated until it wears out: water flows downhill, people go __.",
        "The blank is deliberate. What I wanted to film is the moment when being told something often enough turns into believing it yourself."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 编剧",
          "en": "Director / Writer"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Format"
        },
        "v": {
          "zh": "课程作业",
          "en": "Course work"
        }
      }
    ],
    stills: [
      "assets/img/dao-yan-zuo-ye-still-1.jpg",
      "assets/img/dao-yan-zuo-ye-still-2.jpg",
      "assets/img/dao-yan-zuo-ye-still-3.jpg"
    ],
  },
  {
    slug: "dong-hua-72",
    cat: "doc",
    aspect: "landscape",
    title: {
      "zh": "东华之春 · 72 小时",
      "en": "东华之春 · 72 小时"
    },
    subtitle: {
      "zh": "纪录长片 · 31 分钟",
      "en": "Feature Documentary · 31 min"
    },
    year: "2021",
    duration: "31'57\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/dong-hua-72.jpg",
    video: "assets/video/dong-hua-72.mp4",
    loop: "assets/video/loop/dong-hua-72.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8A8F92",
      "#2A2D2F"
    ],
    synopsis: {
      "zh": [
        "在东华大学连续拍摄七十二小时，不设提纲，跟着校园自己的时间走：凌晨的食堂后厨、早八的教室、深夜还在亮着的自习室。",
        "三十二分钟的成片里没有解说，也没有采访。我想保留的是一所学校在没有人注意的时候是什么样子——那些维持它运转、但从来不出现在宣传片里的人。"
      ],
      "en": [
        "Seventy-two continuous hours at Donghua University, no outline, following the campus's own clock: the canteen kitchen before dawn, the 8 a.m. lecture, the study room still lit at midnight.",
        "Thirty-two minutes, no narration and no interviews. What I wanted to keep is what a school looks like when nobody is watching — and the people who keep it running and never appear in the promotional film."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 摄影",
          "en": "Director / DoP"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "片长",
          "en": "Runtime"
        },
        "v": {
          "zh": "32 分钟",
          "en": "32 min"
        }
      }
    ],
    stills: [
      "assets/img/dong-hua-72-still-1.jpg",
      "assets/img/dong-hua-72-still-2.jpg",
      "assets/img/dong-hua-72-still-3.jpg"
    ],
  },
  {
    slug: "si-su-lou-zhang",
    cat: "doc",
    aspect: "landscape",
    title: {
      "zh": "四宿楼长",
      "en": "四宿楼长"
    },
    subtitle: {
      "zh": "纪录短片 · 8 分钟",
      "en": "Documentary Short · 8 min"
    },
    year: "2022",
    duration: "8'25\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/si-su-lou-zhang.jpg",
    video: "assets/video/si-su-lou-zhang.mp4",
    loop: "assets/video/loop/si-su-lou-zhang.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8E9AA6",
      "#2C333A"
    ],
    synopsis: {
      "zh": [
        "校园封控期间，四号宿舍楼里那些穿防护服的学生志愿者。八分钟，记录他们送饭、登记、守夜。",
        "没有解说，没有采访提纲。只有走廊、脚步声，和防护服摩擦的声音。"
      ],
      "en": [
        "During the campus lockdown, the student volunteers in protective suits in Dormitory Four. Eight minutes of them delivering meals, taking names, keeping watch through the night.",
        "No voice-over, no interview outline. Just corridors, footsteps, and the rustle of protective suits."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 摄影",
          "en": "Director / DoP"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Format"
        },
        "v": {
          "zh": "纪录短片",
          "en": "Short documentary"
        }
      }
    ],
    stills: [
      "assets/img/si-su-lou-zhang-still-1.jpg",
      "assets/img/si-su-lou-zhang-still-2.jpg",
      "assets/img/si-su-lou-zhang-still-3.jpg"
    ],
  },
  {
    slug: "city-league",
    cat: "doc",
    aspect: "landscape",
    title: {
      "zh": "城市业余联赛 · 东华站",
      "en": "城市业余联赛 · 东华站"
    },
    subtitle: {
      "zh": "体育纪录片 · 11 分钟",
      "en": "Sports Documentary · 11 min"
    },
    year: "2021",
    duration: "11'34\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/city-league.jpg",
    video: "assets/video/city-league.mp4",
    loop: "assets/video/loop/city-league.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#96A08A",
      "#2C332A"
    ],
    synopsis: {
      "zh": [
        "上海市城市业余联赛东华站，从第一天到最后一天。篮球、羽毛球、乒乓球，赛程表上是一场接一场，镜头里是一群平时有正经工作的人，在这个星期里把自己当成运动员。",
        "体育纪录片最容易拍成赛果集锦。我尽量把机位放低、把剪辑放慢，让失误、喘气、场边的沉默都留在片子里。"
      ],
      "en": [
        "The Donghua leg of the Shanghai City Amateur League, from the first day to the last. Basketball, badminton, table tennis — on paper a schedule, on camera a week in which people with ordinary jobs treat themselves as athletes.",
        "Sports documentaries tend to become highlight reels. I kept the camera low and the cut slow, and left the misses, the breathing and the silence on the bench in the film."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 摄影",
          "en": "Director / DoP"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "片长",
          "en": "Runtime"
        },
        "v": {
          "zh": "11 分钟",
          "en": "11 min"
        }
      }
    ],
    stills: [
      "assets/img/city-league-still-1.jpg",
      "assets/img/city-league-still-2.jpg",
      "assets/img/city-league-still-3.jpg"
    ],
  },
  {
    slug: "shi-cai-20",
    cat: "promo",
    aspect: "landscape",
    title: {
      "zh": "二十年，一块石头",
      "en": "二十年，一块石头"
    },
    subtitle: {
      "zh": "宣传片 · 上海石材行业 20 周年 · 7 分钟",
      "en": "Corporate Film · 7 min"
    },
    year: "2023",
    duration: "8'00\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/shi-cai-20.jpg",
    video: "assets/video/shi-cai-20.mp4",
    loop: "assets/video/loop/shi-cai-20.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#A89078",
      "#3A2E24"
    ],
    synopsis: {
      "zh": [
        "上海石材行业协会二十周年宣传片，八分钟，含颁奖、访谈和企业发展史。",
        "二十年的素材跨度很大。剪辑上按「人—厂—城」三段重组，避免变成一条按时间排列的流水账。"
      ],
      "en": [
        "An eight-minute film for the twentieth anniversary of the Shanghai Stone Industry Association — awards, interviews, and twenty years of company history.",
        "Two decades of footage is a lot to carry. I restructured it into three movements — people, factory, city — rather than letting it run as a chronological list."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 摄影 / 剪辑",
          "en": "Director / DoP / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "客户",
          "en": "Client"
        },
        "v": {
          "zh": "上海石材行业协会",
          "en": "Shanghai Stone Industry Association"
        }
      }
    ],
    stills: [
      "assets/img/shi-cai-20-still-1.jpg",
      "assets/img/shi-cai-20-still-2.jpg",
      "assets/img/shi-cai-20-still-3.jpg"
    ],
  },
  {
    slug: "mo-mo-de-shou-hu-zhe",
    cat: "promo",
    aspect: "landscape",
    title: {
      "zh": "默默的守护者",
      "en": "默默的守护者"
    },
    subtitle: {
      "zh": "宣传片 · 国家儿童医学中心 · 2 分钟",
      "en": "Brand Film · 2 min"
    },
    year: "2023",
    duration: "2'41\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/mo-mo-de-shou-hu-zhe.jpg",
    video: "assets/video/mo-mo-de-shou-hu-zhe.mp4",
    loop: "assets/video/loop/mo-mo-de-shou-hu-zhe.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#9BB0B4",
      "#2E3A3D"
    ],
    synopsis: {
      "zh": [
        "为国家儿童医学中心拍的公益宣传片，导演兼剪辑。核心是「看不见的守护」——把医疗系统里那些不出现在镜头前的岗位放到前景。",
        "结构上走了三条线交叉：调度中心、病房走廊，以及一台运送物资的机器人。三条线最后汇在同一层楼。"
      ],
      "en": [
        "A public-interest brand film for the National Children's Medical Center — director and editor. The idea was invisible guardianship: bringing the jobs that never appear on camera to the foreground.",
        "Structurally it runs three intercut lines — the dispatch centre, a ward corridor, and a delivery robot — all converging on the same floor."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 剪辑",
          "en": "Director / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "客户",
          "en": "Client"
        },
        "v": {
          "zh": "国家儿童医学中心",
          "en": "National Children's Medical Center"
        }
      },
      {
        "k": {
          "zh": "年份",
          "en": "Year"
        },
        "v": "2025"
      }
    ],
    stills: [
      "assets/img/mo-mo-de-shou-hu-zhe-still-1.jpg",
      "assets/img/mo-mo-de-shou-hu-zhe-still-2.jpg",
      "assets/img/mo-mo-de-shou-hu-zhe-still-3.jpg"
    ],
  },
  {
    slug: "fu-dan-er-ke",
    cat: "promo",
    aspect: "landscape",
    title: {
      "zh": "后盾",
      "en": "后盾"
    },
    subtitle: {
      "zh": "宣传片 · 复旦附属儿科医院 · 1 分钟",
      "en": "Brand Film · 1 min"
    },
    year: "2023",
    duration: "1'18\"",
    format: "4K · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/fu-dan-er-ke.jpg",
    video: "assets/video/fu-dan-er-ke.mp4",
    loop: "assets/video/loop/fu-dan-er-ke.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#9EAEB2",
      "#2D3A3C"
    ],
    synopsis: {
      "zh": [
        "复旦大学附属儿科医院的形象片，一分十八秒。",
        "我负责摄影与剪辑。任务是把「后盾」这个很抽象的词，落在一台自助机、一辆卸货车、和一双伸出去的手上。"
      ],
      "en": [
        "A brand film for the Children's Hospital of Fudan University — one minute eighteen.",
        "I shot and cut it. The task was to make an abstract word — backing — land on a self-service kiosk, a van being unloaded, and a hand reaching out."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "摄影 / 剪辑",
          "en": "Camera / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "客户",
          "en": "Client"
        },
        "v": {
          "zh": "复旦大学附属儿科医院",
          "en": "Children's Hospital of Fudan University"
        }
      }
    ],
    stills: [
      "assets/img/fu-dan-er-ke-still-1.jpg",
      "assets/img/fu-dan-er-ke-still-2.jpg",
      "assets/img/fu-dan-er-ke-still-3.jpg"
    ],
  },
  {
    slug: "zheng-bing",
    cat: "promo",
    aspect: "landscape",
    title: {
      "zh": "东华寻「兵」迹",
      "en": "东华寻「兵」迹"
    },
    subtitle: {
      "zh": "宣传片 · 东华大学征兵 · 15 分钟",
      "en": "Recruitment Film · 15 min"
    },
    year: "2021",
    duration: "15'00\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/zheng-bing.jpg",
    video: "assets/video/zheng-bing.mp4",
    loop: "assets/video/loop/zheng-bing.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8C8F7E",
      "#2A2C25"
    ],
    synopsis: {
      "zh": [
        "东华大学征兵宣传片。主线是几个在校生沿着老兵留下的线索，一点点拼出「去当兵」这件事到底意味着什么。",
        "合集版十五分钟，包含了正片和几条人物短片。拍这类片子最难的是不喊口号——所以我把大部分篇幅给了训练场上的动作和休息时的沉默，而不是旁白。"
      ],
      "en": [
        "A recruitment film for Donghua University. A group of students follow the traces left by veterans and piece together, step by step, what “going to serve” actually means.",
        "This is the fifteen-minute collected cut, the main film plus several character shorts. The hard part with this kind of film is not shouting slogans — so most of the runtime is spent on movement in the training ground and silence during rest, not on voice-over."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 摄影",
          "en": "Director / DoP"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "出品",
          "en": "Commissioned by"
        },
        "v": {
          "zh": "东华大学",
          "en": "Donghua University"
        }
      }
    ],
    stills: [
      "assets/img/zheng-bing-still-1.jpg",
      "assets/img/zheng-bing-still-2.jpg",
      "assets/img/zheng-bing-still-3.jpg"
    ],
  },
  {
    slug: "xiang-cun-bi-ji",
    cat: "promo",
    aspect: "landscape",
    title: {
      "zh": "乡村笔记",
      "en": "乡村笔记"
    },
    subtitle: {
      "zh": "活动纪录 · 宣传片 · 4 分钟",
      "en": "Event Film · 4 min"
    },
    year: "2023",
    duration: "4'26\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/xiang-cun-bi-ji.jpg",
    video: "assets/video/xiang-cun-bi-ji.mp4",
    loop: "assets/video/loop/xiang-cun-bi-ji.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8E9A82",
      "#2B322A"
    ],
    synopsis: {
      "zh": [
        "一次下乡活动的全程记录。白天是走访、宣讲、和村里人坐在一张桌子上吃饭，晚上是操场上的篝火。",
        "这类片子通常只留「成果」，我留了更多过程：走错的路、等不到人的空镜、和最后那场火烧完之后大家各自散去的样子。"
      ],
      "en": [
        "A full record of a trip to the countryside. Days of visits, talks, meals at the same table as the villagers; nights around a fire on the school yard.",
        "Films like this usually keep only the results. I kept more of the process: the wrong turns, the empty shots of waiting for people who never came, and everyone drifting apart after the fire burned down."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "摄影 / 剪辑",
          "en": "DoP / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Type"
        },
        "v": {
          "zh": "活动纪录",
          "en": "Event documentary"
        }
      }
    ],
    stills: [
      "assets/img/xiang-cun-bi-ji-still-1.jpg",
      "assets/img/xiang-cun-bi-ji-still-2.jpg",
      "assets/img/xiang-cun-bi-ji-still-3.jpg"
    ],
  },
  {
    slug: "shi-cai-family",
    cat: "promo",
    aspect: "landscape",
    title: {
      "zh": "石材一家人",
      "en": "石材一家人"
    },
    subtitle: {
      "zh": "宣传片 · 石材行业年会 · 9 分钟",
      "en": "Corporate Film · 9 min"
    },
    year: "2023",
    duration: "9'25\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/shi-cai-family.jpg",
    video: "assets/video/shi-cai-family.mp4",
    loop: "assets/video/loop/shi-cai-family.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#A8865E",
      "#382A1C"
    ],
    synopsis: {
      "zh": [
        "上海石材行业 2020 到 2023 年的年度回顾片，在行业年会上播放。三年里这个行业经历了停工、复工、和一轮彻底的重排。",
        "片子按年份分成三段，每段用当年的现场素材和人物采访交替推进。剪的时候我刻意没有把疫情处理成一个「过去了」的章节，而是让它一直留在画面里。"
      ],
      "en": [
        "A 2020–2023 year-in-review for the Shanghai stone industry, screened at the annual dinner. Three years in which the trade went through shutdown, restart and a complete reshuffle.",
        "The film runs in three year-blocks, alternating archive footage with interviews. In the edit I deliberately refused to treat the pandemic as a chapter that is “over” — I let it stay in the frame throughout."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 剪辑",
          "en": "Director / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "片长",
          "en": "Runtime"
        },
        "v": {
          "zh": "9 分钟",
          "en": "9 min"
        }
      }
    ],
    stills: [
      "assets/img/shi-cai-family-still-1.jpg",
      "assets/img/shi-cai-family-still-2.jpg",
      "assets/img/shi-cai-family-still-3.jpg"
    ],
  },
  {
    slug: "jia-zhang-ke",
    cat: "edit",
    aspect: "landscape",
    title: {
      "zh": "贾樟柯电影混剪",
      "en": "贾樟柯电影混剪"
    },
    subtitle: {
      "zh": "混剪 · 影评 · 3 分钟",
      "en": "Video Essay · 3 min"
    },
    year: "2022",
    duration: "3'06\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/jia-zhang-ke.jpg",
    video: "assets/video/jia-zhang-ke.mp4",
    loop: "assets/video/loop/jia-zhang-ke.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8E6B6B",
      "#2E2222"
    ],
    synopsis: {
      "zh": [
        "把贾樟柯二十多年的作品剪成三分钟。",
        "难点从来不是选镜头，而是找到一条能贯穿的情绪线。最后落在「离开的人」和「留下的人」之间——所有片子里其实都在拍这件事。"
      ],
      "en": [
        "Twenty-odd years of Jia Zhangke, cut down to three minutes.",
        "Choosing shots was never the hard part. Finding a single emotional line that could hold them was — and it landed between those who leave and those who stay. Every one of his films is really about that."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Format"
        },
        "v": {
          "zh": "混剪",
          "en": "Mashup"
        }
      }
    ],
    stills: [
      "assets/img/jia-zhang-ke-still-1.jpg",
      "assets/img/jia-zhang-ke-still-2.jpg",
      "assets/img/jia-zhang-ke-still-3.jpg"
    ],
  },
  {
    slug: "lang-zi-hui-tou",
    cat: "edit",
    aspect: "landscape",
    title: {
      "zh": "浪子回头",
      "en": "浪子回头"
    },
    subtitle: {
      "zh": "混剪 · 影评 · 4 分钟",
      "en": "Video Essay · 4 min"
    },
    year: "2023",
    duration: "4'24\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/lang-zi-hui-tou.jpg",
    video: "assets/video/lang-zi-hui-tou.mp4",
    loop: "assets/video/loop/lang-zi-hui-tou.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8C7A68",
      "#2B241C"
    ],
    synopsis: {
      "zh": [
        "剧情混剪，四分钟。一顿饭、一间厨房、一个回不去的人。",
        "剪辑上刻意打乱了时间顺序——让「回头」这个动作在结构上先发生，再被解释。"
      ],
      "en": [
        "A four-minute narrative mashup. One meal, one kitchen, one person who can't go back.",
        "The chronology is deliberately broken, so the act of turning back happens structurally first and gets explained afterwards."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Format"
        },
        "v": {
          "zh": "混剪",
          "en": "Mashup"
        }
      }
    ],
    stills: [
      "assets/img/lang-zi-hui-tou-still-1.jpg",
      "assets/img/lang-zi-hui-tou-still-2.jpg",
      "assets/img/lang-zi-hui-tou-still-3.jpg"
    ],
  },
  {
    slug: "violent-aesthetics",
    cat: "edit",
    aspect: "landscape",
    title: {
      "zh": "暴力美学为什么美",
      "en": "暴力美学为什么美"
    },
    subtitle: {
      "zh": "影评 · 昆汀研究 · 7 分钟",
      "en": "Video Essay · 7 min"
    },
    year: "2022",
    duration: "7'17\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/violent-aesthetics.jpg",
    video: "assets/video/violent-aesthetics.mp4",
    loop: "assets/video/loop/violent-aesthetics.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#9A6A4E",
      "#301F17"
    ],
    synopsis: {
      "zh": [
        "以昆汀·塔伦蒂诺为例，拆解「暴力美学」到底美在哪里：不是血浆，是节奏、是视点、是观众被允许在什么时刻发笑。",
        "七分多钟的影评长片，把《低俗小说》《杀死比尔》《无耻混蛋》的段落按「延迟—释放—反转」重新排列，用剪辑本身来说明论点。"
      ],
      "en": [
        "Using Quentin Tarantino as the case, taking apart where the beauty in “violence aesthetics” actually sits: not in the blood, but in rhythm, in point of view, and in when the audience is permitted to laugh.",
        "A seven-minute video essay that re-orders passages from Pulp Fiction, Kill Bill and Inglourious Basterds along delay–release–reversal, letting the editing itself make the argument."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "策划 / 撰稿",
          "en": "Concept / Script"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Type"
        },
        "v": {
          "zh": "影评长片",
          "en": "Video essay"
        }
      }
    ],
    stills: [
      "assets/img/violent-aesthetics-still-1.jpg",
      "assets/img/violent-aesthetics-still-2.jpg",
      "assets/img/violent-aesthetics-still-3.jpg"
    ],
  },
  {
    slug: "fa-xian-jing-cai",
    cat: "edit",
    aspect: "landscape",
    title: {
      "zh": "发现精彩的可能",
      "en": "发现精彩的可能"
    },
    subtitle: {
      "zh": "短片 · 获奖作品 · 1 分钟",
      "en": "Award-winning Short · 1 min"
    },
    year: "2022",
    duration: "1'00\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/fa-xian-jing-cai.jpg",
    video: "assets/video/fa-xian-jing-cai.mp4",
    loop: "assets/video/loop/fa-xian-jing-cai.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#93A183",
      "#2C3526"
    ],
    synopsis: {
      "zh": [
        "一分钟品牌短片，全国大学生广告艺术大赛获奖作品。",
        "一个人在草地上走了很久，钟表、围巾、雪——四个季节压进六十秒。"
      ],
      "en": [
        "A one-minute brand short that won at the National Advertising Art Design Competition for students.",
        "Someone walks across a field for a long time. A clock, a scarf, snow — four seasons pressed into sixty seconds."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 摄影 / 剪辑",
          "en": "Director / DoP / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Format"
        },
        "v": {
          "zh": "获奖短片",
          "en": "Award-winning short"
        }
      }
    ],
    stills: [
      "assets/img/fa-xian-jing-cai-still-1.jpg",
      "assets/img/fa-xian-jing-cai-still-2.jpg",
      "assets/img/fa-xian-jing-cai-still-3.jpg"
    ],
  },
  {
    slug: "ji-guang-pian-yu",
    cat: "edit",
    aspect: "landscape",
    title: {
      "zh": "集光片羽",
      "en": "集光片羽"
    },
    subtitle: {
      "zh": "时尚活动短片 · 30 秒",
      "en": "Event Short · 30 sec"
    },
    year: "2023",
    duration: "0'30\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/ji-guang-pian-yu.jpg",
    video: "assets/video/ji-guang-pian-yu.mp4",
    loop: "assets/video/loop/ji-guang-pian-yu.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#9A8A86",
      "#2F2826"
    ],
    synopsis: {
      "zh": [
        "「集光片羽」时尚酒会的现场短片。三十秒，没有旁白，靠音乐和人群的移动把一场活动压缩成一个节奏。",
        "活动片最容易拍成签到墙合集，所以我把镜头全部对准了人转身、举杯、和光落在布料上的那一两秒。"
      ],
      "en": [
        "A thirty-second film from the “Gathered Light” fashion cocktail. No voice-over; music and the movement of the crowd compress an evening into one rhythm.",
        "Event films tend to become a montage of step-and-repeat boards, so I pointed the camera only at the one or two seconds when someone turns, raises a glass, or light lands on fabric."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "摄影 / 剪辑",
          "en": "DoP / Editor"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/ji-guang-pian-yu-still-1.jpg",
      "assets/img/ji-guang-pian-yu-still-2.jpg",
      "assets/img/ji-guang-pian-yu-still-3.jpg"
    ],
  },
  {
    slug: "apple-3d",
    cat: "know",
    aspect: "landscape",
    title: {
      "zh": "这就是 iPhone 24",
      "en": "This Is iPhone 24"
    },
    subtitle: {
      "zh": "3D 动画 · 科普 · 3 分钟",
      "en": "3D Animation · 3 min"
    },
    year: "2022",
    duration: "3'13\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/apple-3d.jpg",
    video: "assets/video/apple-3d.mp4",
    loop: "assets/video/loop/apple-3d.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8A8A8E",
      "#26262A"
    ],
    synopsis: {
      "zh": [
        "致敬苹果产品发布会的 3D 概念广告——「这就是 iPhone 24」。",
        "建模、材质、灯光、渲染全部自制。想验证的其实是一件事：发布会那种克制的高级感，究竟由什么构成。"
      ],
      "en": [
        "A 3D concept ad in the language of an Apple keynote — this is iPhone 24.",
        "Modelling, materials, lighting and rendering all done in-house. What I actually wanted to test: what exactly makes that restrained, expensive feeling work."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "建模 / 渲染",
          "en": "Modelling / Rendering"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/apple-3d-still-1.jpg",
      "assets/img/apple-3d-still-2.jpg",
      "assets/img/apple-3d-still-3.jpg"
    ],
  },
  {
    slug: "steve-jobs",
    cat: "know",
    aspect: "landscape",
    title: {
      "zh": "致乔布斯",
      "en": "致乔布斯"
    },
    subtitle: {
      "zh": "科普 · 人物 · 5 分钟",
      "en": "Video Essay · 5 min"
    },
    year: "2022",
    duration: "5'41\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/steve-jobs.jpg",
    video: "assets/video/steve-jobs.mp4",
    loop: "assets/video/loop/steve-jobs.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#7E7A76",
      "#262422"
    ],
    synopsis: {
      "zh": [
        "一条关于乔布斯的科普长片：从被赶出苹果，到 NeXT、皮克斯，再到 1997 年回来。用的是电影素材加图解，不站队，只把时间线摊开。",
        "做这条片子的初衷很简单——大部分人记得的是 2007 年发布会上的那件黑毛衣，但不记得他被自己创办的公司开除过。"
      ],
      "en": [
        "A long-form explainer on Steve Jobs: from being forced out of Apple, through NeXT and Pixar, to the return in 1997. Film footage plus diagrams — no side-taking, just the timeline laid out.",
        "The reason for making it was simple. Most people remember the black turtleneck at the 2007 keynote; far fewer remember that he was fired from the company he founded."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "策划 / 撰稿",
          "en": "Concept / Script"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Type"
        },
        "v": {
          "zh": "科普 · 人物",
          "en": "Explainer · Profile"
        }
      }
    ],
    stills: [
      "assets/img/steve-jobs-still-1.jpg",
      "assets/img/steve-jobs-still-2.jpg",
      "assets/img/steve-jobs-still-3.jpg"
    ],
  },
  {
    slug: "road-movie",
    cat: "know",
    aspect: "landscape",
    title: {
      "zh": "浅谈国产公路片",
      "en": "浅谈国产公路片"
    },
    subtitle: {
      "zh": "影评 · 类型研究 · 7 分钟",
      "en": "Video Essay · 7 min"
    },
    year: "2022",
    duration: "7'12\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/road-movie.jpg",
    video: "assets/video/road-movie.mp4",
    loop: "assets/video/loop/road-movie.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8E9080",
      "#2B2C26"
    ],
    synopsis: {
      "zh": [
        "国产公路片的一次梳理：从《人在囧途》到《无人区》，为什么中国人一上路，电影就变成了别的东西。",
        "公路片在西方是关于自由和逃离的类型，在中国它几乎总是关于「回不去」——所以我把重点放在那些车停下来、人下不去的时刻。"
      ],
      "en": [
        "A survey of the Chinese road movie, from Lost on Journey to No Man's Land: why, as soon as Chinese characters get on the road, the film turns into something else.",
        "In the West the road movie is a genre about freedom and escape. In China it is almost always about not being able to go back — so I put the emphasis on the moments when the car stops and nobody can get out."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "策划 / 撰稿",
          "en": "Concept / Script"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "剪辑",
          "en": "Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Type"
        },
        "v": {
          "zh": "影评 · 类型研究",
          "en": "Video essay"
        }
      }
    ],
    stills: [
      "assets/img/road-movie-still-1.jpg",
      "assets/img/road-movie-still-2.jpg",
      "assets/img/road-movie-still-3.jpg"
    ],
  },
  {
    slug: "what-is-log",
    cat: "know",
    aspect: "landscape",
    title: {
      "zh": "啥是 log",
      "en": "What Is Log?"
    },
    subtitle: {
      "zh": "科普 · 技术 · 6 分钟",
      "en": "Technical Explainer · 6 min"
    },
    year: "2022",
    duration: "6'54\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/what-is-log.jpg",
    video: "assets/video/what-is-log.mp4",
    loop: "assets/video/loop/what-is-log.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8A8E92",
      "#282B2E"
    ],
    synopsis: {
      "zh": [
        "一期讲 log 的科普：它到底是什么、为什么要拍灰、以及为什么套 LUT 之前必须先还原。",
        "全片用实拍对比加示意图，把一条从传感器到成片的色彩链路拆成四步。做这条的时候我刚开始接触调色，是把学到的东西讲一遍给自己听。"
      ],
      "en": [
        "An explainer on log footage: what it actually is, why you shoot flat, and why you must normalise before applying a LUT.",
        "Shot comparisons plus diagrams break the colour pipeline from sensor to final frame into four steps. I made this when I was first learning grading — it was me explaining what I'd learned back to myself."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "策划 / 剪辑",
          "en": "Concept / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Type"
        },
        "v": {
          "zh": "技术科普",
          "en": "Technical explainer"
        }
      }
    ],
    stills: [
      "assets/img/what-is-log-still-1.jpg",
      "assets/img/what-is-log-still-2.jpg",
      "assets/img/what-is-log-still-3.jpg"
    ],
  },
  {
    slug: "ysb-macbook",
    cat: "know",
    aspect: "landscape",
    title: {
      "zh": "MacBook 三维动画",
      "en": "MacBook in 3D"
    },
    subtitle: {
      "zh": "3D 动画 · 科普 · 1 分钟",
      "en": "3D Animation · 1 min"
    },
    year: "2022",
    duration: "1'58\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/ysb-macbook.jpg",
    video: "assets/video/ysb-macbook.mp4",
    loop: "assets/video/loop/ysb-macbook.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8E9092",
      "#2A2B2D"
    ],
    synopsis: {
      "zh": [
        "一条纯三维的 MacBook 动画练习：线框起形、逐层上材质、最后落到实拍质感的灯光。",
        "全片没有旁白，靠镜头运动和材质变化推进。是我系统练 AE 和三维那段时间的产物，也是后来做 3D 苹果广告的前一步。"
      ],
      "en": [
        "A purely 3D MacBook animation study: wireframe to blocking, materials layer by layer, then lighting that lands on something photographic.",
        "No narration — camera movement and material change carry it. It came out of the period when I was systematically learning After Effects and 3D, and it was the step before the 3D Apple ad."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "动画 / 剪辑",
          "en": "Animation / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Type"
        },
        "v": {
          "zh": "三维动画",
          "en": "3D animation"
        }
      }
    ],
    stills: [
      "assets/img/ysb-macbook-still-1.jpg",
      "assets/img/ysb-macbook-still-2.jpg",
      "assets/img/ysb-macbook-still-3.jpg"
    ],
  },
  {
    slug: "ai-jian-zhu",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "一座桥的受力",
      "en": "一座桥的受力"
    },
    subtitle: {
      "zh": "AI 科普短片 · 58 秒",
      "en": "AI Explainer · 58 sec"
    },
    year: "2026",
    duration: "0'58\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/ai-jian-zhu.jpg",
    video: "assets/video/ai-jian-zhu.mp4",
    loop: "assets/video/loop/ai-jian-zhu.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#7F8C99",
      "#232B33"
    ],
    synopsis: {
      "zh": [
        "一分钟的 AI 建筑科普，用三维结构线把一座斜拉桥拆开讲。",
        "全部画面由 AI 生成后逐帧修正。重点只有一个：把「受力」这件看不见的事，变成看得见的东西。"
      ],
      "en": [
        "A one-minute AI architecture explainer that takes a cable-stayed bridge apart with 3D structural lines.",
        "Every frame was AI-generated, then corrected by hand. One goal: make force — something you can never see — visible."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "制作 / 剪辑",
          "en": "Production / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Format"
        },
        "v": {
          "zh": "AI 科普短片",
          "en": "AI explainer"
        }
      }
    ],
    stills: [
      "assets/img/ai-jian-zhu-still-1.jpg",
      "assets/img/ai-jian-zhu-still-2.jpg",
      "assets/img/ai-jian-zhu-still-3.jpg"
    ],
  },
  {
    slug: "ai-pin-pai",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "文化飞轮",
      "en": "文化飞轮"
    },
    subtitle: {
      "zh": "AI 科普短片 · 2 分钟",
      "en": "AI Explainer · 2 min"
    },
    year: "2026",
    duration: "2'04\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/ai-pin-pai.jpg",
    video: "assets/video/ai-pin-pai.mp4",
    loop: "assets/video/loop/ai-pin-pai.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#B08A7A",
      "#3A2A26"
    ],
    synopsis: {
      "zh": [
        "品牌科普片，两分钟。用「文化飞轮」这个模型，解释一个组织如何持续产出内容。",
        "动效、实拍、AI 生成三种素材混用，节奏全部交给音乐卡点。"
      ],
      "en": [
        "A two-minute brand explainer built around the idea of a cultural flywheel — how an organisation keeps producing content without running dry.",
        "Motion graphics, live action and AI-generated footage are mixed together, with the pacing entirely dictated by the music."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "制作 / 剪辑",
          "en": "Production / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "类型",
          "en": "Format"
        },
        "v": {
          "zh": "AI 品牌科普",
          "en": "AI brand explainer"
        }
      }
    ],
    stills: [
      "assets/img/ai-pin-pai-still-1.jpg",
      "assets/img/ai-pin-pai-still-2.jpg",
      "assets/img/ai-pin-pai-still-3.jpg"
    ],
  },
  {
    slug: "ai-xin-li",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "情绪的形状",
      "en": "情绪的形状"
    },
    subtitle: {
      "zh": "AI 科普短片 · 1 分钟",
      "en": "AI Explainer · 1 min"
    },
    year: "2026",
    duration: "1'05\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/ai-xin-li.jpg",
    video: "assets/video/ai-xin-li.mp4",
    loop: "assets/video/loop/ai-xin-li.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#9A7E8C",
      "#2E2530"
    ],
    synopsis: {
      "zh": [
        "一期讲「战或逃」的 AI 科普：当大脑判断你处在危险里，身体会在几秒内做哪些事——心跳、呼吸、瞳孔、血液重新分配。",
        "用动画角色把生理过程演出来，避免变成一张会动的 PPT。脚本改了三版，最后决定全部用第二人称讲，让观众代入自己。"
      ],
      "en": [
        "An AI explainer on fight-or-flight: what the body does within seconds once the brain decides you are in danger — heart rate, breathing, pupils, blood redirected.",
        "Animated characters act out the physiology so it doesn't become a moving slide deck. The script went through three drafts; in the end I told all of it in the second person, so the viewer is the subject."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "策划 / AI 制作",
          "en": "Concept / AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/ai-xin-li-still-1.jpg",
      "assets/img/ai-xin-li-still-2.jpg",
      "assets/img/ai-xin-li-still-3.jpg"
    ],
  },
  {
    slug: "tesla-brand",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "特斯拉 · 品牌叙事",
      "en": "特斯拉 · 品牌叙事"
    },
    subtitle: {
      "zh": "AI 品牌短片 · 2 分钟",
      "en": "AI Brand Film · 2 min"
    },
    year: "2026",
    duration: "2'09\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/tesla-brand.jpg",
    video: "assets/video/tesla-brand.mp4",
    loop: "assets/video/loop/tesla-brand.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8A8A8E",
      "#252528"
    ],
    synopsis: {
      "zh": [
        "一条关于特斯拉品牌逻辑的 AI 短片：为什么它几乎不投传统广告，却让所有人都知道它在做什么。",
        "全片用 AI 生成画面配旁白，从产品、创始人叙事、和「不做广告」这件事本身三条线交叉推进。"
      ],
      "en": [
        "An AI short on Tesla's brand logic: why it barely buys traditional advertising, yet everybody knows what it is doing.",
        "AI-generated imagery over narration, moving along three lines — the product, the founder narrative, and the decision not to advertise at all."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作 / 剪辑",
          "en": "AI Production / Editor"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/tesla-brand-still-1.jpg",
      "assets/img/tesla-brand-still-2.jpg",
      "assets/img/tesla-brand-still-3.jpg"
    ],
  },
  {
    slug: "starbucks-doc",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "星巴克 · 一杯的旅程",
      "en": "星巴克 · 一杯的旅程"
    },
    subtitle: {
      "zh": "AI 纪录短片 · 1 分钟",
      "en": "AI Documentary · 1 min"
    },
    year: "2026",
    duration: "1'30\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/starbucks-doc.jpg",
    video: "assets/video/starbucks-doc.mp4",
    loop: "assets/video/loop/starbucks-doc.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#7E8A72",
      "#262C22"
    ],
    synopsis: {
      "zh": [
        "一条关于星巴克的 AI 品牌纪录短片，核心论点是：它卖的从来不是咖啡，是「暂停」。",
        "从第三空间的概念、门店选址、到移动下单，片子把几次关键决策串成一条线，说明一个品牌是怎么把自己变成一种日常习惯的。"
      ],
      "en": [
        "An AI-made brand documentary about Starbucks. Its argument: what the company sells was never coffee, it was the pause.",
        "From the third-place idea to site selection to mobile ordering, the film strings the key decisions into one line and shows how a brand turns itself into a daily habit."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作 / 剪辑",
          "en": "AI Production / Editor"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/starbucks-doc-still-1.jpg",
      "assets/img/starbucks-doc-still-2.jpg",
      "assets/img/starbucks-doc-still-3.jpg"
    ],
  },
  {
    slug: "low-poly-life",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "低模游戏生活",
      "en": "低模游戏生活"
    },
    subtitle: {
      "zh": "AI 短片 · 20 秒",
      "en": "AI Short · 20 sec"
    },
    year: "2026",
    duration: "0'20\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/low-poly-life.jpg",
    video: "assets/video/low-poly-life.mp4",
    loop: "assets/video/loop/low-poly-life.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#7E8A6E",
      "#262B22"
    ],
    synopsis: {
      "zh": [
        "一个低多边形游戏世界里的日常：便利店、货架、任务提示「NEW MISSION: COFFEE RUN」，然后是通关画面。",
        "全部用 AI 生成，刻意保留了老游戏的锯齿感和贴图错位。复古不是滤镜，是把分辨率、帧率、和 UI 逻辑一起做旧。"
      ],
      "en": [
        "An everyday scene inside a low-poly game world: the convenience store, the shelves, a quest prompt reading NEW MISSION: COFFEE RUN, then the level-clear screen.",
        "Fully AI-generated, deliberately keeping the aliasing and texture seams of old games. Retro isn't a filter — it means ageing the resolution, the frame rate and the UI logic together."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/low-poly-life-still-1.jpg",
      "assets/img/low-poly-life-still-2.jpg",
      "assets/img/low-poly-life-still-3.jpg"
    ],
  },
  {
    slug: "fourth-wall",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "打破第四面墙",
      "en": "打破第四面墙"
    },
    subtitle: {
      "zh": "AI 短片 · 13 秒",
      "en": "AI Short · 13 sec"
    },
    year: "2026",
    duration: "0'13\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/fourth-wall.jpg",
    video: "assets/video/fourth-wall.mp4",
    loop: "assets/video/loop/fourth-wall.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#8E7A86",
      "#2A2429"
    ],
    synopsis: {
      "zh": [
        "一个真人伸手，碰到了屏幕里的人物。十三秒，讲的是「看」和「被看」之间的那道边界。",
        "这条片子的难点全在手和屏幕的接触点：光影、透视、和延迟，差一帧就会穿帮。"
      ],
      "en": [
        "A real hand reaches out and touches the figure inside the screen. Thirteen seconds about the boundary between watching and being watched.",
        "Everything in this piece lives at the point of contact between hand and screen — light, perspective, and delay. One frame off and it falls apart."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/fourth-wall-still-1.jpg",
      "assets/img/fourth-wall-still-2.jpg",
      "assets/img/fourth-wall-still-3.jpg"
    ],
  },
  {
    slug: "creative-media",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "创意媒体项目",
      "en": "创意媒体项目"
    },
    subtitle: {
      "zh": "AI 短片 · 48 秒",
      "en": "AI Short · 48 sec"
    },
    year: "2026",
    duration: "0'48\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/creative-media.jpg",
    video: "assets/video/creative-media.mp4",
    loop: "assets/video/loop/creative-media.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#9A9488",
      "#2E2B26"
    ],
    synopsis: {
      "zh": [
        "一期关于人体胸廓的 AI 科普：胸椎、假肋、以及为什么肋骨既要硬到能保护、又要软到能呼吸。",
        "画面用三维解剖模型逐层拆开，配英文字幕。做这类内容最难的是准确——每一根骨头的名字都不能错。"
      ],
      "en": [
        "An AI explainer on the human rib cage: thoracic vertebrae, false ribs, and why ribs have to be rigid enough to protect and flexible enough to breathe.",
        "3D anatomical models are peeled apart layer by layer with English captions. The hard part with content like this is accuracy — not a single bone can be misnamed."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/creative-media-still-1.jpg",
      "assets/img/creative-media-still-2.jpg",
      "assets/img/creative-media-still-3.jpg"
    ],
  },
  {
    slug: "dynamic-media",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "动态影像展示",
      "en": "动态影像展示"
    },
    subtitle: {
      "zh": "AI 短片 · 59 秒",
      "en": "AI Short · 59 sec"
    },
    year: "2026",
    duration: "0'59\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/dynamic-media.jpg",
    video: "assets/video/dynamic-media.mp4",
    loop: "assets/video/loop/dynamic-media.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#A88A6E",
      "#322820"
    ],
    synopsis: {
      "zh": [
        "一期讲大脑如何做决定的 AI 科普：同样是接收信息，为什么有的直接变成行动，有的要先过一遍判断。",
        "用二维动画角色加图解，把「刺激—评估—选择」这条链路演出来。全片保持一种轻松的语气，因为讲的是每个人每天都在经历的事。"
      ],
      "en": [
        "An AI explainer on how the brain makes decisions: same incoming information, yet some of it turns straight into action and some has to pass through judgement first.",
        "2D characters and diagrams act out the stimulus–appraisal–choice chain. The tone stays light throughout, because it is about something everyone goes through every day."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/dynamic-media-still-1.jpg",
      "assets/img/dynamic-media-still-2.jpg",
      "assets/img/dynamic-media-still-3.jpg"
    ],
  },
  {
    slug: "media-dynamics",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "媒介的动力学",
      "en": "媒介的动力学"
    },
    subtitle: {
      "zh": "AI 短片 · 1 分钟",
      "en": "AI Short · 1 min"
    },
    year: "2026",
    duration: "1'05\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/media-dynamics.jpg",
    video: "assets/video/media-dynamics.mp4",
    loop: "assets/video/loop/media-dynamics.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#8E5E76",
      "#2A1C24"
    ],
    synopsis: {
      "zh": [
        "一条抽象影像：心跳、神经放电、和「肾上腺素」这个词，被拆成纯粹的运动和颜色。",
        "没有叙事，只有节奏。六十四秒里画面从一条线变成一张脸，再散成粒子——讲的是身体在紧张时内部发生的事。"
      ],
      "en": [
        "An abstract piece: a heartbeat, a nerve firing, and the word adrenaline broken down into pure motion and colour.",
        "No narrative, only rhythm. Over sixty-four seconds the image goes from a single line to a face and then scatters into particles — it is about what happens inside the body under stress."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/media-dynamics-still-1.jpg",
      "assets/img/media-dynamics-still-2.jpg",
      "assets/img/media-dynamics-still-3.jpg"
    ],
  },
  {
    slug: "buzzer-beater",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "绝杀",
      "en": "绝杀"
    },
    subtitle: {
      "zh": "AI 短片 · 15 秒",
      "en": "AI Short · 15 sec"
    },
    year: "2026",
    duration: "0'15\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/buzzer-beater.jpg",
    video: "assets/video/buzzer-beater.mp4",
    loop: "assets/video/loop/buzzer-beater.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#7E8E6A",
      "#262C22"
    ],
    synopsis: {
      "zh": [
        "从看台视角拍的一次绝杀：球在空中，全场站起来，然后球进了。",
        "十五秒，机位始终在看台上。我想保留的不是进球本身，是进球前那半秒所有人的呼吸。"
      ],
      "en": [
        "A buzzer beater shot from the stands: the ball in the air, the whole crowd standing, then it goes in.",
        "Fifteen seconds, the camera never leaves the stand. What I wanted to keep isn't the basket — it's the half second of held breath before it."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/buzzer-beater-still-1.jpg",
      "assets/img/buzzer-beater-still-2.jpg",
      "assets/img/buzzer-beater-still-3.jpg"
    ],
  },
  {
    slug: "silent-revenge",
    cat: "ai",
    aspect: "landscape",
    title: {
      "zh": "末日逆袭",
      "en": "末日逆袭"
    },
    subtitle: {
      "zh": "AI 短片 · 14 秒",
      "en": "AI Short · 14 sec"
    },
    year: "2026",
    duration: "0'14\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/silent-revenge.jpg",
    video: "assets/video/silent-revenge.mp4",
    loop: "assets/video/loop/silent-revenge.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#9A6A52",
      "#301F18"
    ],
    synopsis: {
      "zh": [
        "全程无声的复仇短片：一个男人穿过一座正在燃烧的城市，做完了该做的事，然后坐下。",
        "没有一句台词，也没有音乐。所有情绪都压在环境声和脚步声里。"
      ],
      "en": [
        "A revenge short with no sound at all: a man crosses a burning city, does what needs doing, and sits down.",
        "Not a line of dialogue and no score. Everything is carried by ambience and footsteps."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/silent-revenge-still-1.jpg",
      "assets/img/silent-revenge-still-2.jpg",
      "assets/img/silent-revenge-still-3.jpg"
    ],
  },
  {
    slug: "flex-tvc",
    cat: "product",
    aspect: "landscape",
    title: {
      "zh": "FLEX 系列 TVC",
      "en": "FLEX Series TVC"
    },
    subtitle: {
      "zh": "产品 TVC · 1 分钟",
      "en": "Product TVC · 1 min"
    },
    year: "2025",
    duration: "1'53\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/flex-tvc.jpg",
    video: "assets/video/flex-tvc.mp4",
    loop: "assets/video/loop/flex-tvc.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#A6A9AC",
      "#33363A"
    ],
    synopsis: {
      "zh": [
        "商米科技 FLEX 系列产品 TVC。我担任导演助理，同时负责摄影。",
        "产品是模块化的，所以整片用「拆—装—用」三个动作串起来，让「可定制」这件事自己说话，不用旁白解释。"
      ],
      "en": [
        "A product film for Sunmi's FLEX series. I worked as assistant director and shot it.",
        "The product is modular, so the whole film runs on three gestures — take apart, assemble, use — letting customisability speak without a voice-over."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演助理 / 摄影",
          "en": "AD / Camera"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "客户",
          "en": "Client"
        },
        "v": {
          "zh": "商米科技",
          "en": "Sunmi Technology"
        }
      }
    ],
    stills: [
      "assets/img/flex-tvc-still-1.jpg",
      "assets/img/flex-tvc-still-2.jpg",
      "assets/img/flex-tvc-still-3.jpg"
    ],
  },
  {
    slug: "p3air-tvc",
    cat: "product",
    aspect: "landscape",
    title: {
      "zh": "P3 AIR TVC",
      "en": "P3 AIR TVC"
    },
    subtitle: {
      "zh": "产品 TVC · 1 分钟",
      "en": "Product TVC · 1 min"
    },
    year: "2025",
    duration: "1'46\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/p3air-tvc.jpg",
    video: "assets/video/p3air-tvc.mp4",
    loop: "assets/video/loop/p3air-tvc.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#9AA0A4",
      "#2E3235"
    ],
    synopsis: {
      "zh": [
        "P3 AIR 的英文 TVC。核心卖点是轻，所以整条片子的镜头都在强调「拿起来毫不费力」这件事。",
        "现场用长焦压缩空间，让产品和手之间的关系变成画面的主角。"
      ],
      "en": [
        "The English TVC for P3 AIR. The selling point is weight, so every shot insists on how effortlessly it lifts.",
        "On set we used long lenses to compress the space, making the relationship between the product and the hand the subject of the frame."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "摄影",
          "en": "Camera"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "客户",
          "en": "Client"
        },
        "v": "SUNMI"
      }
    ],
    stills: [
      "assets/img/p3air-tvc-still-1.jpg",
      "assets/img/p3air-tvc-still-2.jpg",
      "assets/img/p3air-tvc-still-3.jpg"
    ],
  },
  {
    slug: "cpapay-unbox",
    cat: "product",
    aspect: "landscape",
    title: {
      "zh": "CPadPAY 开箱",
      "en": "CPadPAY Unboxing"
    },
    subtitle: {
      "zh": "产品开箱 · 2 分钟",
      "en": "Product Unboxing · 2 min"
    },
    year: "2025",
    duration: "2'40\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/cpapay-unbox.jpg",
    video: "assets/video/cpapay-unbox.mp4",
    loop: "assets/video/loop/cpapay-unbox.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#9CA2A6",
      "#2F3336"
    ],
    synopsis: {
      "zh": [
        "CPadPAY 的开箱片。从拆箱、配件、到第一次开机和支付，按真实使用顺序走一遍。",
        "开箱片最怕拍成说明书，所以每个功能点都配了一个具体的使用场景，而不是单纯拍特写。"
      ],
      "en": [
        "An unboxing film for CPadPAY: from the box and accessories through first boot and first payment, in the order a real user would meet them.",
        "Unboxing films tend to become manuals, so every feature is paired with a concrete use case rather than a plain close-up."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "摄影 / 剪辑",
          "en": "Camera / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "客户",
          "en": "Client"
        },
        "v": "SUNMI"
      }
    ],
    stills: [
      "assets/img/cpapay-unbox-still-1.jpg",
      "assets/img/cpapay-unbox-still-2.jpg",
      "assets/img/cpapay-unbox-still-3.jpg"
    ],
  },
  {
    slug: "p3air-unbox",
    cat: "product",
    aspect: "landscape",
    title: {
      "zh": "P3Air 开箱",
      "en": "P3Air Unboxing"
    },
    subtitle: {
      "zh": "产品开箱 · 2 分钟",
      "en": "Product Unboxing · 2 min"
    },
    year: "2025",
    duration: "2'52\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/p3air-unbox.jpg",
    video: "assets/video/p3air-unbox.mp4",
    loop: "assets/video/loop/p3air-unbox.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#9AA0A4",
      "#2E3235"
    ],
    synopsis: {
      "zh": [
        "P3Air 的英文开箱。片子按「拆—装—用」三段推进，重点放在安装那一段，因为这是用户最容易卡住的地方。",
        "为了讲清楚，几个关键步骤用了俯拍加手部特写，尽量减少剪辑点，让动作是连贯的。"
      ],
      "en": [
        "The English unboxing for P3Air, in three movements — unbox, install, use. The weight sits on installation, because that is where users get stuck.",
        "To make it clear, key steps are shot top-down with hand close-ups, and I kept the cuts to a minimum so the motion stays continuous."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "摄影 / 剪辑",
          "en": "Camera / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "客户",
          "en": "Client"
        },
        "v": "SUNMI"
      }
    ],
    stills: [
      "assets/img/p3air-unbox-still-1.jpg",
      "assets/img/p3air-unbox-still-2.jpg",
      "assets/img/p3air-unbox-still-3.jpg"
    ],
  },
  {
    slug: "sunmi-os",
    cat: "product",
    aspect: "landscape",
    title: {
      "zh": "SUNMI OS · AI",
      "en": "SUNMI OS AI"
    },
    subtitle: {
      "zh": "产品短片 · 4K · 2 分钟",
      "en": "Product Film · 2 min"
    },
    year: "2025",
    duration: "2'16\"",
    format: "4K · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/sunmi-os.jpg",
    video: "assets/video/sunmi-os.mp4",
    loop: "assets/video/loop/sunmi-os.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#8E9296",
      "#2A2D30"
    ],
    synopsis: {
      "zh": [
        "SUNMI OS 的 AI 功能片，4K 拍摄。讲的是收银设备在接入 AI 之后，门店里哪些动作可以省掉。",
        "全片在真实门店环境里拍，没有搭景。我想让画面看起来像一家店本来就是这样，而不是一场演示。"
      ],
      "en": [
        "A 4K film for SUNMI OS and its AI features: which actions inside a store disappear once the terminal is connected to AI.",
        "Shot entirely in working stores, no sets. I wanted the frame to look like a shop that simply is this way, not a demo."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演助理 / 摄影",
          "en": "Assistant Director / Camera"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "客户",
          "en": "Client"
        },
        "v": "SUNMI"
      }
    ],
    stills: [
      "assets/img/sunmi-os-still-1.jpg",
      "assets/img/sunmi-os-still-2.jpg",
      "assets/img/sunmi-os-still-3.jpg"
    ],
  },
  {
    slug: "can-yin-install",
    cat: "product",
    aspect: "landscape",
    title: {
      "zh": "餐饮立式安装",
      "en": "餐饮立式安装"
    },
    subtitle: {
      "zh": "产品安装片 · 3 分钟",
      "en": "Product Install · 3 min"
    },
    year: "2025",
    duration: "3'26\"",
    format: "1080p · 16:9",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/can-yin-install.jpg",
    video: "assets/video/can-yin-install.mp4",
    loop: "assets/video/loop/can-yin-install.mp4",
    external: "",
    excerpt: true,
    tint: [
      "#9AA0A2",
      "#2E3233"
    ],
    synopsis: {
      "zh": [
        "餐饮立式设备的英文安装片。从开箱、固定、接线到调试，全程按技术手册的顺序拍。",
        "这类片子的观众是海外安装人员，所以画面必须自解释——没有旁白，只靠手部动作和特写把每一步讲清楚。"
      ],
      "en": [
        "The English installation film for a floor-standing restaurant terminal: unboxing, mounting, cabling, commissioning, in the exact order of the service manual.",
        "The audience is overseas installers, so the picture has to explain itself — no narration, only hands and close-ups carrying each step."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "摄影",
          "en": "Camera"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "客户",
          "en": "Client"
        },
        "v": "SUNMI"
      }
    ],
    stills: [
      "assets/img/can-yin-install-still-1.jpg",
      "assets/img/can-yin-install-still-2.jpg",
      "assets/img/can-yin-install-still-3.jpg"
    ],
  },
  {
    slug: "he-jie-de-fang-shi",
    cat: "edit",
    aspect: "portrait",
    title: {
      "zh": "和解的方式",
      "en": "和解的方式"
    },
    subtitle: {
      "zh": "竖屏剧情短片 · 1 分钟",
      "en": "Vertical Short · 1 min"
    },
    year: "2023",
    duration: "1'00\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/he-jie-de-fang-shi.jpg",
    video: "assets/video/he-jie-de-fang-shi.mp4",
    loop: "assets/video/loop/he-jie-de-fang-shi.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#8E8E9A",
      "#2A2A30"
    ],
    synopsis: {
      "zh": [
        "竖屏剧情短片，一分钟。两个女生，一间教室，和一句「我是她最好的姐妹」。",
        "故事从一次没说出口的道歉开始。全片几乎都在课桌和走廊之间，靠两个人的距离变化推进，而不是靠台词。"
      ],
      "en": [
        "A one-minute vertical short. Two girls, a classroom, and the line “I'm her best friend”.",
        "It starts with an apology that never gets said. Almost all of it takes place between desks and corridors, and it moves on the changing distance between the two rather than on dialogue."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "导演 / 剪辑",
          "en": "Director / Editor"
        },
        "v": "赵洋俊"
      },
      {
        "k": {
          "zh": "规格",
          "en": "Format"
        },
        "v": {
          "zh": "竖屏 · 获奖作品",
          "en": "Vertical · Award-winning"
        }
      }
    ],
    stills: [
      "assets/img/he-jie-de-fang-shi-still-1.jpg",
      "assets/img/he-jie-de-fang-shi-still-2.jpg",
      "assets/img/he-jie-de-fang-shi-still-3.jpg"
    ],
  },
  {
    slug: "jewelry-14s",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "珠宝 · 十四秒",
      "en": "珠宝 · 十四秒"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 14 秒",
      "en": "Vertical AI Short · 14 sec"
    },
    year: "2026",
    duration: "0'14\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/jewelry-14s.jpg",
    video: "assets/video/jewelry-14s.mp4",
    loop: "assets/video/loop/jewelry-14s.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#A08A6E",
      "#322820"
    ],
    synopsis: {
      "zh": [
        "十四秒的珠宝短片。全片只有一个动作：手腕抬起来，光落在链子上。",
        "竖屏构图把产品放在画面正中偏下，让手和背景的虚化形成层次。"
      ],
      "en": [
        "Fourteen seconds of jewellery. One action only: the wrist lifts, light lands on the chain.",
        "The vertical frame puts the product low and centred, letting the hand and the falloff behind it create the depth."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/jewelry-14s-still-1.jpg",
      "assets/img/jewelry-14s-still-2.jpg",
      "assets/img/jewelry-14s-still-3.jpg"
    ],
  },
  {
    slug: "silent-strides",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "无声的脚步",
      "en": "无声的脚步"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 10 秒",
      "en": "Vertical AI Short · 10 sec"
    },
    year: "2026",
    duration: "0'10\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/silent-strides.jpg",
    video: "assets/video/silent-strides.mp4",
    loop: "assets/video/loop/silent-strides.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#8A8E92",
      "#2A2C2F"
    ],
    synopsis: {
      "zh": [
        "一个人在街上走，镜头跟着，不解释她要去哪。十秒，讲的是城市里的孤独感。",
        "刻意用了阴天和湿地面，让整条片子没有一处高光。"
      ],
      "en": [
        "Someone walks down a street, the camera following, never explaining where she is going. Ten seconds about loneliness in a city.",
        "Overcast light and wet ground were deliberate — there is not a single highlight in the whole piece."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/silent-strides-still-1.jpg",
      "assets/img/silent-strides-still-2.jpg",
      "assets/img/silent-strides-still-3.jpg"
    ],
  },
  {
    slug: "street-rap",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "街头说唱",
      "en": "街头说唱"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 14 秒",
      "en": "Vertical AI Short · 14 sec"
    },
    year: "2026",
    duration: "0'14\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/street-rap.jpg",
    video: "assets/video/street-rap.mp4",
    loop: "assets/video/loop/street-rap.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#A05A46",
      "#32201A"
    ],
    synopsis: {
      "zh": [
        "一场街头说唱对决，参赛的全是饮料瓶。可乐瓶戴墨镜挂金链，台下站着一排果汁和矿泉水。",
        "竖屏、强节奏、夸张拟人。做这条的时候主要在想：一个产品要有多像人，观众才会替它紧张。"
      ],
      "en": [
        "A street rap battle where every contestant is a beverage bottle. The cola wears shades and a gold chain; a row of juices and waters watches from the crowd.",
        "Vertical, hard rhythm, exaggerated personification. The question I was chasing: how human does a product have to be before the audience gets nervous for it?"
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/street-rap-still-1.jpg",
      "assets/img/street-rap-still-2.jpg",
      "assets/img/street-rap-still-3.jpg"
    ],
  },
  {
    slug: "cat-doctor",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "猫医生汤姆",
      "en": "猫医生汤姆"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 30 秒",
      "en": "Vertical AI Short · 30 sec"
    },
    year: "2026",
    duration: "0'30\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/cat-doctor.jpg",
    video: "assets/video/cat-doctor.mp4",
    loop: "assets/video/loop/cat-doctor.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#8E9AA0",
      "#2A2E32"
    ],
    synopsis: {
      "zh": [
        "猫医生汤姆的复仇故事，三十秒。穿白大褂的猫在诊室里策划一件事，镜头一路跟着它的手。",
        "这条是同一角色的两个版本之一，另一个更暗一些。这一版把幽默放在前面，复仇放在最后两秒。"
      ],
      "en": [
        "Dr. Tom the cat's revenge, thirty seconds. A cat in a white coat plans something in a consulting room, the camera following its paws.",
        "This is one of two cuts of the same character — the other is darker. Here the humour comes first and the revenge lands in the last two seconds."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/cat-doctor-still-1.jpg",
      "assets/img/cat-doctor-still-2.jpg",
      "assets/img/cat-doctor-still-3.jpg"
    ],
  },
  {
    slug: "wooden-dance",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "木头人共舞",
      "en": "木头人共舞"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 7 秒",
      "en": "Vertical AI Short · 7 sec"
    },
    year: "2026",
    duration: "0'07\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/wooden-dance.jpg",
    video: "assets/video/wooden-dance.mp4",
    loop: "assets/video/loop/wooden-dance.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#8A8E96",
      "#2A2C31"
    ],
    synopsis: {
      "zh": [
        "真人和一个三维木头人在城市夜景里同步跳舞。七秒，重点是动作的咬合。",
        "两个角色的节奏必须完全一致，但又不能看起来像复制粘贴——所以给木头人留了一点延迟和更硬的关节。"
      ],
      "en": [
        "A real person and a 3D wooden figure dancing in sync against a city at night. Seven seconds, all about the interlock of the movement.",
        "The two had to share a rhythm exactly while never looking copy-pasted — so the wooden figure keeps a slight delay and harder joints."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/wooden-dance-still-1.jpg",
      "assets/img/wooden-dance-still-2.jpg",
      "assets/img/wooden-dance-still-3.jpg"
    ],
  },
  {
    slug: "real-animation",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "真实与动画",
      "en": "真实与动画"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 7 秒",
      "en": "Vertical AI Short · 7 sec"
    },
    year: "2026",
    duration: "0'07\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/real-animation.jpg",
    video: "assets/video/real-animation.mp4",
    loop: "assets/video/loop/real-animation.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#9A8A72",
      "#302820"
    ],
    synopsis: {
      "zh": [
        "真人和动画角色在同一个客厅里相处：一个人坐在沙发上，旁边是一只二维的老虎。",
        "六秒半，全部精力都花在让两种质感共存——实拍的光影和动画的平涂必须落在同一个空间里。"
      ],
      "en": [
        "A real person and an animated character sharing a living room: someone on the sofa, a 2D tiger beside them.",
        "Six and a half seconds, all of it spent making two textures coexist — photographic light and flat animation have to land in the same space."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/real-animation-still-1.jpg",
      "assets/img/real-animation-still-2.jpg",
      "assets/img/real-animation-still-3.jpg"
    ],
  },
  {
    slug: "outfit-vlog",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "日常穿搭",
      "en": "日常穿搭"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 14 秒",
      "en": "Vertical AI Short · 14 sec"
    },
    year: "2026",
    duration: "0'14\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/outfit-vlog.jpg",
    video: "assets/video/outfit-vlog.mp4",
    loop: "assets/video/loop/outfit-vlog.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#8E92A0",
      "#2A2C33"
    ],
    synopsis: {
      "zh": [
        "一条日常穿搭的换装 Vlog，十四秒，三套衣服。镜头固定，只靠人物进出画面完成切换。",
        "刻意保留了卧室里真实的杂乱背景，不做置景——换装视频的可信度全在环境里。"
      ],
      "en": [
        "An everyday outfit Vlog: fourteen seconds, three looks. The camera stays locked and the cuts happen as the subject moves in and out of frame.",
        "The real clutter of a bedroom is kept, no set dressing — the credibility of an outfit video lives entirely in the room."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/outfit-vlog-still-1.jpg",
      "assets/img/outfit-vlog-still-2.jpg",
      "assets/img/outfit-vlog-still-3.jpg"
    ],
  },
  {
    slug: "wireframe-sculpture",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "线框与绿雕",
      "en": "线框与绿雕"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 15 秒",
      "en": "Vertical AI Short · 15 sec"
    },
    year: "2026",
    duration: "0'15\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/wireframe-sculpture.jpg",
    video: "assets/video/wireframe-sculpture.mp4",
    loop: "assets/video/loop/wireframe-sculpture.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#8A9A86",
      "#2A302A"
    ],
    synopsis: {
      "zh": [
        "自由女神像以线框的形式立在法式花园里，然后慢慢长出实体。",
        "十五秒，讲的是「结构」和「形象」之间那一步——先有线，才有面。"
      ],
      "en": [
        "The Statue of Liberty stands as a wireframe in a French garden, then slowly grows into solid form.",
        "Fifteen seconds about the step between structure and image: first the lines, then the surfaces."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/wireframe-sculpture-still-1.jpg",
      "assets/img/wireframe-sculpture-still-2.jpg",
      "assets/img/wireframe-sculpture-still-3.jpg"
    ],
  },
  {
    slug: "pet-shelf",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "货架上的萌宠",
      "en": "货架上的萌宠"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 13 秒",
      "en": "Vertical AI Short · 13 sec"
    },
    year: "2026",
    duration: "0'13\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/pet-shelf.jpg",
    video: "assets/video/pet-shelf.mp4",
    loop: "assets/video/loop/pet-shelf.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#A0927A",
      "#322B22"
    ],
    synopsis: {
      "zh": [
        "一只橘猫站在便利店的货架上跳舞，后面是一整排饮料。十三秒。",
        "笑点在于比例——猫和货架、猫和瓶子之间的关系全是错的，但画面里没人觉得奇怪。"
      ],
      "en": [
        "An orange cat dances on a convenience-store shelf with a wall of drinks behind it. Thirteen seconds.",
        "The joke is scale: the cat's relationship to the shelf and to the bottles is entirely wrong, and nobody in the frame finds it strange."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/pet-shelf-still-1.jpg",
      "assets/img/pet-shelf-still-2.jpg",
      "assets/img/pet-shelf-still-3.jpg"
    ],
  },
  {
    slug: "plush-daily",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "玩偶日常",
      "en": "玩偶日常"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 15 秒",
      "en": "Vertical AI Short · 15 sec"
    },
    year: "2026",
    duration: "0'15\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/plush-daily.jpg",
    video: "assets/video/plush-daily.mp4",
    loop: "assets/video/loop/plush-daily.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#8E8A96",
      "#2A282F"
    ],
    synopsis: {
      "zh": [
        "一只企鹅玩偶在客厅里做自己的事：整理帽子、低头、再抬头。十五秒。",
        "全片的质感靠毛绒的反光撑着——要让观众相信它是软的。"
      ],
      "en": [
        "A penguin plush goes about its business in a living room: adjusting its hat, looking down, looking up. Fifteen seconds.",
        "The whole piece rests on the sheen of the plush — the audience has to believe it is soft."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/plush-daily-still-1.jpg",
      "assets/img/plush-daily-still-2.jpg",
      "assets/img/plush-daily-still-3.jpg"
    ],
  },
  {
    slug: "mixed-reality",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "混合现实少女",
      "en": "混合现实少女"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 12 秒",
      "en": "Vertical AI Short · 12 sec"
    },
    year: "2026",
    duration: "0'12\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/mixed-reality.jpg",
    video: "assets/video/mixed-reality.mp4",
    loop: "assets/video/loop/mixed-reality.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#9A8A96",
      "#302830"
    ],
    synopsis: {
      "zh": [
        "一个二维动画里的女仆角色，和一只真人的手在同一个画面里互动。十二秒。",
        "难点在接触点：手指的透视、角色的阴影、还有两者的分辨率差——差一点就会变成贴纸。"
      ],
      "en": [
        "A 2D anime maid and a real human hand interacting in one frame. Twelve seconds.",
        "Everything is in the contact point: the perspective of the fingers, the character's shadow, and the mismatch in resolution — a little off and it becomes a sticker."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/mixed-reality-still-1.jpg",
      "assets/img/mixed-reality-still-2.jpg",
      "assets/img/mixed-reality-still-3.jpg"
    ],
  },
  {
    slug: "doctor-revenge",
    cat: "ai",
    aspect: "portrait",
    title: {
      "zh": "医生的复仇",
      "en": "医生的复仇"
    },
    subtitle: {
      "zh": "竖屏 AI 短片 · 30 秒",
      "en": "Vertical AI Short · 30 sec"
    },
    year: "2026",
    duration: "0'30\"",
    format: "1080p · 竖屏",
    role: {
      "zh": "导演",
      "en": "Director"
    },
    poster: "assets/img/doctor-revenge.jpg",
    video: "assets/video/doctor-revenge.mp4",
    loop: "assets/video/loop/doctor-revenge.mp4",
    external: "",
    excerpt: false,
    tint: [
      "#8E7A82",
      "#2A2429"
    ],
    synopsis: {
      "zh": [
        "黑色幽默版「医生的复仇」，三十秒。诊室里，一只卡通角色拿起了针筒。",
        "和《猫医生汤姆》是同一个角色的另一个剪法：这一版更狠，笑点更靠后。"
      ],
      "en": [
        "The black-comedy cut of “the doctor’s revenge”, thirty seconds. In the consulting room, a cartoon character picks up a syringe.",
        "The same character as Dr. Tom the Cat, cut differently: this version is harsher and the joke lands later."
      ]
    },
    credits: [
      {
        "k": {
          "zh": "AI 制作",
          "en": "AI Production"
        },
        "v": "赵洋俊"
      }
    ],
    stills: [
      "assets/img/doctor-revenge-still-1.jpg",
      "assets/img/doctor-revenge-still-2.jpg",
      "assets/img/doctor-revenge-still-3.jpg"
    ],
  },
];
