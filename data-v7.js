/* 内容层：只写事实，不写自我定位式口号 */
const PROFILE = {
  name: "澄江子",
  english: "CHENGJIANGZI",
  title: "设计玩法，也把它做出来。",
  roles: ["玩法设计", "关卡设计", "游戏开发"],
  welcome: "你好，我是澄江子。",
  love: "一个把玩法做出来验证的人。",
  lead: "计算机专业在读，2028 届。",
  intro: [
    "《一声之间》是 40 关的声音解谜：把怪物摆好、转向，让一声呼唤在棋盘上接力。",
    "《洛阳古桥记》拿了国赛一等奖，我负责美术、关卡设计和部分策划。"
  ],
  stats: [
    { icon: "◆", value: "6", label: "公开项目" },
    { icon: "▣", value: "3", label: "完整游戏" },
    { icon: "★", value: "1", label: "国赛一等奖" },
    { icon: "◇", value: "2028", label: "计算机 · 本科在读" }
  ],
  links: [
    { label: "B 站主页", url: "https://space.bilibili.com/3546837751433581" },
    { label: "GitHub", url: "https://github.com/chengjiang-zi" }
  ]
};

const EXPERIENCE = [
  {
    time: "2026.10",
    title: "《一声之间》· TapTap 聚光灯 Game Jam",
    desc: "40 关声音解谜、关卡曲谱、失败重试与关卡工坊。",
    role: "独立开发"
  },
  {
    time: "2026.09 —",
    title: "《逆因》卡牌银河恶魔城",
    desc: "探索、卡牌战斗、机关与回访路线，负责玩法、系统与实现。",
    role: "主项目"
  },
  {
    time: "2026",
    title: "卡牌王冠",
    desc: "类皇室战争的竖屏卡牌对战，局域网联机，已发布到 itch.io。",
    role: "独立开发"
  },
  {
    time: "2025 — 2026",
    title: "《洛阳古桥记》",
    desc: "北宋洛阳桥题材的水墨解谜，团队作品，国赛一等奖；负责美术、关卡与部分策划。",
    role: "团队作品"
  }
];

const SKILLS = [
  { label: "引擎", items: "Godot 4 · Unity" },
  { label: "语言", items: "GDScript · C# · Python" },
  { label: "设计", items: "关卡设计 · 系统设计 · 数值设计" },
  { label: "美术", items: "像素美术 · 手绘 · Shader" },
  { label: "其他", items: "AE · 视频剪辑" }
];

const WORKS = {
  betweencalls: {
    id: "betweencalls",
    title: "一声之间",
    en: "BETWEEN CALLS",
    order: "02",
    category: "game",
    badge: "游戏",
    year: "2026",
    engine: "Godot 4.6",
    status: "Game Jam 作品",
    summary: "摆放、转动小怪物，让声音传递，叫醒伙伴。",
    role: "独立构思并推进：玩法、关卡与体验设计；代码和素材由 AI 协助制作。",
    cover: "assets/betweencalls/level.png",
    images: [
      { src: "assets/betweencalls/home.png", caption: "主界面 · 不同怪物对应不同音高" },
      { src: "assets/betweencalls/level.png", caption: "关卡 · 玩家通过摆放和转向安排声路" }
    ],
    links: [{ label: "观看项目演示", url: "https://www.bilibili.com/video/BV1apxw6xEGd/" }],
    note: "40 关，四首旋律的七张曲谱。",
    story: "一款音乐解谜游戏。声音按节拍传播，一格一拍；每个怪物对应一个音高，解谜的路线走通时，也会组成一段旋律。",
    points: [
      "第一关不要求摆放或转向，先让玩家观察声音怎么走。",
      "后续关卡加入中转怪物，用撞墙的失败反馈让玩家理解转向。",
      "失败时音量渐降、随后自动重来，减少重新开始的操作。"
    ],
    cases: [
      {
        label: "01 / TUTORIAL",
        title: "先听，再动手",
        text: "第一关不要求玩家摆放或转向。按下播放后，声音从一个怪物传到另一个怪物，先让玩家观察声音如何移动、伙伴如何回应。",
        image: "assets/betweencalls/home.png",
        caption: "不同怪物对应不同音高"
      },
      {
        label: "02 / DIRECTION",
        title: "下一声去哪里",
        text: "后续关卡加入中转怪物。玩家观察箭头与音波的方向，尝试转向，再播放确认声音能否到达目标。初始方向撞墙，失败本身成为教学。",
        image: "assets/betweencalls/level.png",
        caption: "玩家通过摆放和转向安排声路"
      },
      {
        label: "03 / RHYTHM",
        title: "让解谜有节拍",
        text: "音波走过一格的时间与怪物回应时间保持一致。每个怪物对应一个音高，声音沿路线接力时，也能组成旋律。"
      },
      {
        label: "04 / FEEDBACK",
        title: "失败后再试一次",
        text: "声音撞到障碍后，音量变化提示这次尝试结束，关卡随后自动重来。场景中的花草、太阳和云朵也能回应点击。"
      }
    ]
  },
  cardcrown: {
    id: "cardcrown",
    title: "卡牌王冠",
    en: "CARD CROWN",
    order: "03",
    category: "game",
    badge: "游戏",
    year: "2026",
    engine: "Godot 4.6.1",
    status: "已发布",
    summary: "竖屏卡牌对战，16 张字牌风格卡牌。",
    role: "独立开发：规则、程序与联机实现。",
    cover: "assets/cardcrown/battle.png",
    fit: "contain",
    bg: "#19112d",
    images: [
      { src: "assets/cardcrown/deck.webp", caption: "卡组" },
      { src: "assets/cardcrown/shop.png", caption: "商店" }
    ],
    links: [
      { label: "观看视频", url: "https://www.bilibili.com/video/BV1G5YF6zEUZ/" },
      { label: "发布页", url: "https://chengjiangzi.itch.io/card-crown" }
    ],
    note: "玩法参考《皇室战争》。",
    story: "使用 Godot 4.6.1、C# 与 GDScript，支持局域网对战、单机人机和闯关。主机负责判定，客户端接收状态快照并对远端单位做插值。",
    points: [
      "圣水、卡组循环与攻防节奏共同决定出牌时机。",
      "主机判定 + 状态快照 + 插值，处理联机一致性。"
    ],
    cases: [
      {
        label: "01 / MATCH",
        title: "对局节奏",
        text: "圣水恢复速度、卡组循环与攻防交换构成对局节奏。复刻时对照原作记录了不同阶段的出牌时机，再调自己的参数。",
        image: "assets/cardcrown/battle.png",
        caption: "对局画面"
      },
      {
        label: "02 / NETWORK",
        title: "联机一致性",
        text: "主机负责判定，客户端接收状态快照，对远端单位做插值；异常输入与断线时回退到单机流程。",
        image: "assets/cardcrown/deck.webp",
        caption: "卡组与对局信息"
      }
    ]
  },
  luoyang: {
    id: "luoyang",
    title: "洛阳古桥记",
    en: "LUOYANG BRIDGE",
    order: "01",
    category: "game",
    badge: "游戏 · 美术",
    year: "2025",
    engine: "Unity",
    status: "国赛一等奖",
    summary: "以北宋洛阳桥建造为题材的水墨解谜游戏。",
    role: "负责美术、关卡设计和部分策划。",
    cover: "assets/luoyang/zhuli.webp",
    images: [
      { src: "assets/luoyang/fuyun.webp", caption: "浮运架梁" },
      { src: "assets/luoyang/guanka.webp", caption: "关卡选择" },
      { src: "assets/luoyang/shiji.webp", caption: "万安渡街市" }
    ],
    links: [],
    note: "团队作品。",
    story: "团队使用 Unity 制作。把种蛎固基、浮运架梁等造桥工序拆成玩家可操作的步骤，工匠对话承担关卡提示。",
    points: [
      "关卡：把古代造桥工序拆成可操作步骤。",
      "提示：用工匠对话承担教学，而不是弹窗说明。",
      "美术：水墨场景与整体视觉统一。"
    ],
    cases: [
      {
        label: "01 / LEVEL",
        title: "把工序做成关卡",
        text: "种蛎固基、浮运架梁这些真实工序，被拆成玩家能操作的几个步骤；每一步对应一个清晰的失败条件。",
        image: "assets/luoyang/zhuli.webp",
        caption: "种蛎固基"
      },
      {
        label: "02 / HINT",
        title: "用对话给提示",
        text: "提示放在工匠对话里，玩家在场景中自然获得线索，不打断操作。",
        image: "assets/luoyang/guanka.webp",
        caption: "关卡选择"
      }
    ]
  },
  jingban: {
    id: "jingban",
    title: "鲸伴",
    en: "JINGBAN DESKTOP",
    order: "04",
    category: "technical",
    badge: "软件 · AI",
    year: "2026",
    engine: "Electron / PixiJS",
    status: "开源 Beta",
    summary: "让大肥鱼住进桌面：能记住你、能通话，也陪你敲键盘。",
    role: "独立开发：产品设计、模块整合与桌面端实现；Live2D、语音、记忆等组件来自开源项目。",
    cover: "assets/jingban/cover.webp",
    fit: "contain",
    bg: "#dfe4ef",
    images: [
      { src: "assets/jingban/memory.webp", caption: "记忆 · 示意场景" },
      { src: "assets/jingban/call.webp", caption: "通话 · 示意场景" },
      { src: "assets/jingban/fish.webp", caption: "键鼠联动" }
    ],
    links: [
      { label: "观看演示", url: "https://www.bilibili.com/video/BV1XP436HEvW/" },
      { label: "GitHub", url: "https://github.com/chengjiang-zi/jingban-desktop" }
    ],
    note: "演示视频含示意场景；组件版权归各自作者。",
    story: "Windows 桌面陪伴应用，MIT 开源。Electron 与 PixiJS 渲染 Live2D 角色；本地语音识别与合成、Mem0 记忆分别配置。",
    points: [
      "透明置顶角色，眼睛与头部跟随鼠标。",
      "记忆可查看、修改、删除和导出。",
      "本地接口带令牌校验，可被外部助手接管。"
    ],
    cases: [
      {
        label: "01 / PRODUCT",
        title: "拆成可配置的模块",
        text: "语音、识别、记忆、角色素材分别配置，任一项不可用时应用仍能启动。",
        image: "assets/jingban/config.webp",
        caption: "各项服务分别配置"
      },
      {
        label: "02 / MEMORY",
        title: "记忆要能改",
        text: "记忆可查看、修改、删除与导出；熟悉度随时间增长，而不是一次性写死。",
        image: "assets/jingban/memory.webp",
        caption: "聊过的事，下次接着聊 · 示意场景"
      }
    ]
  },
  douyin: {
    id: "douyin",
    title: "抖音媒体库仪表盘",
    en: "MEDIA LIBRARY",
    order: "05",
    category: "technical",
    badge: "软件",
    year: "2026",
    engine: "Python / Web",
    status: "个人工具",
    summary: "保存关注作者的作品，在本地查看、筛选和补缺。",
    role: "独立开发：数据同步、下载、本地索引和看板界面。",
    cover: "assets/douyin/overview-demo.png",
    fit: "contain",
    bg: "#111217",
    images: [{ src: "assets/douyin/overview-demo.png", caption: "总览界面 · 演示数据" }],
    links: [],
    note: "画面使用演示数据。",
    story: "Python 本地服务与单页界面。媒体文件和索引分别保存，支持按作者查看、视频与图文筛选、单作者同步。",
    points: [
      "同步：按作者拉取作品，看板显示进度与日志。",
      "查找：按作者、视频、图文筛选。",
      "状态：把「平台已下架」和「本地缺文件」拆成两种状态。"
    ],
    cases: [
      {
        label: "01 / SYNC",
        title: "同步与进度",
        text: "关注名单、按作者同步、进度与日志分开展示，失败可单独重试。",
        image: "assets/douyin/overview-demo.png",
        caption: "总览界面 · 演示数据"
      },
      {
        label: "02 / STATE",
        title: "两种缺失",
        text: "平台下架和本地缺文件是两件事，混在一起就无法判断该重新下载还是放弃。",
        image: "assets/douyin/overview-demo.png",
        caption: "状态区分"
      }
    ]
  },
  stonehearts: {
    id: "stonehearts",
    title: "石心十人 · 开场预告片",
    en: "STONEHEARTS TEASER",
    order: "06",
    category: "art",
    badge: "美术 · 演出",
    year: "2026",
    engine: "Godot 4.6",
    status: "同人 · 制作中",
    summary: "用 Godot 实时渲染的像素档案墙，为「石心十人」做的一段开场演出。",
    role: "独立完成实时渲染管线、宝石材质与切片演出、音画卡点与混音；角色立绘与设定版权归 miHoYo 所有。",
    cover: "assets/stonehearts/cover.webp",
    images: [
      { src: "assets/stonehearts/light.webp", caption: "砂金 · No.05" },
      { src: "assets/stonehearts/grind.webp", caption: "雕琢" },
      { src: "assets/stonehearts/end.webp", caption: "落版" }
    ],
    links: [],
    note: "非商业同人作品，角色版权归 miHoYo。",
    story: "320×180 SubViewport 配最近邻放大出像素质感；十位角色各有一枚用 hull 网格实时生成的迷你宝石；色彩四级量化 + 扁平法线做出切面感。",
    points: [
      "管线：320×180 视口 + 最近邻放大，UI 独立层。",
      "宝石：hull JSON → ArrayMesh，扁平法线 + 四级色带。",
      "演出：视觉与音效共用一条时间轴。"
    ],
    cases: [
      {
        label: "01 / PIPELINE",
        title: "先定像素，再做画面",
        text: "整个 3D 画面画在 320×180 的 SubViewport 里，再以最近邻放大到 1080p；UI 走独立 CanvasLayer 保持清晰。",
        image: "assets/stonehearts/cover.webp",
        caption: "档案墙"
      },
      {
        label: "02 / FACET",
        title: "宝石不是建模，是算出来的",
        text: "每枚迷你宝石从 hull JSON 生成 ArrayMesh，用扁平法线和 cull_disabled 让每个面亮出自己的色阶。",
        image: "assets/stonehearts/grind.webp",
        caption: "研磨：面片逐层细化"
      },
      {
        label: "03 / TIMELINE",
        title: "音画共用一条时间轴",
        text: "视觉事件与声音事件共用时间点，改动一处两边都动。",
        image: "assets/stonehearts/end.webp",
        caption: "落版定格"
      }
    ]
  }
};

const ORDER = ["luoyang", "betweencalls", "cardcrown", "jingban", "douyin", "stonehearts"];

const PARTS = [
  {
    id: "game",
    num: "01",
    title: "游戏制作",
    desc: "玩法、关卡与完整体验。",
    feature: "luoyang",
    items: ["betweencalls", "cardcrown"],
    notes: {
      luoyang: "国赛一等奖 · 把造桥工序拆成可操作步骤。",
      betweencalls: "把教学写进关卡顺序里。",
      cardcrown: "对局节奏与联机规则。"
    }
  },
  {
    id: "software",
    num: "02",
    title: "软件开发",
    desc: "桌面应用与本地工具。",
    layout: "grid",
    items: ["jingban", "douyin"],
    notes: {
      jingban: "Electron + Live2D，模块可配置。",
      douyin: "本地服务 + 索引，两种缺失状态分开。"
    }
  },
  {
    id: "art",
    num: "03",
    title: "美术设计",
    desc: "画面、材质与演出。",
    layout: "grid",
    items: ["luoyang", "stonehearts"],
    notes: {
      luoyang: "水墨视觉与关卡氛围。",
      stonehearts: "320×180 视口、宝石 Shader、音画卡点。"
    }
  }
];
