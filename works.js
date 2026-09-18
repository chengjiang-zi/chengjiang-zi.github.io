const PROFILE = {
  name: "澄江子",
  kicker: "想做游戏系统与数值策划",
  display: "自己做游戏，数值都在一张表里改。",
  lede: "计算机专业在读。用 Godot 做游戏，从写规则到画卡面都是自己来。",
  links: [
    { label: "GitHub", url: "https://github.com/chengjiang-zi" }
  ]
};

const STATS = [
  { v: "4", l: "个项目" },
  { v: "1", l: "国赛一等奖" },
  { v: "2025", l: "开始做游戏" }
];

const SKILLS = [
  {
    t: "工具",
    items: ["Godot 4.6", "GDScript", "C#", "Unity", "Git"]
  },
  {
    t: "系统和数值",
    items: ["系统设计", "数值调参", "关卡设计", "CSV 表驱动"]
  },
  {
    t: "美术和音乐",
    items: ["板绘", "像素", "动效", "乐理", "钢琴"]
  }
];

const WORKS = [
  {
    id: "luoyang",
    title: "洛阳桥修记",
    year: "2026",
    badge: "国赛一等奖",
    type: "PC 端国风水墨解谜",
    role: "团队作品",
    roleNote: "我负责美术、关卡设计和部分策划",
    desc:
      "北宋泉州洛阳桥的建造故事。你扮演太守蔡襄，把筏型基础、种蛎固基、浮运架梁这三门手艺" +
      "做出来。看不懂的地方可以问桥上的工匠。",
    tags: ["Unity", "C#", "GLM-4-Flash"],
    shots: [
      { src: "assets/luoyang/zhuli.webp", caption: "种蛎固基", w: 1600, h: 900 },
      { src: "assets/luoyang/fuyun.webp", caption: "浮运架梁", w: 1600, h: 900 },
      { src: "assets/luoyang/guanka.webp", caption: "选择关卡", w: 1280, h: 720 },
      { src: "assets/luoyang/shiji.webp", caption: "万安渡街市", w: 1280, h: 720 }
    ],
    links: []
  },
  {
    id: "cardcrown",
    title: "卡牌王冠",
    year: "2026",
    badge: "开发中",
    type: "手机竖屏卡牌对战",
    role: "",
    roleNote: "",
    desc:
      "三座塔、圣水、河道和桥。8 张卡组循环出 4 张手牌，从桥上推过去，先拆完对方三座塔就赢。" +
      "可以和朋友在局域网里打一局，也有单机人机和闯关。",
    tags: ["Godot 4.6", "C#", "局域网联机"],
    shots: [
      { src: "assets/cardcrown/battle.png", caption: "对局", w: 720, h: 1280 },
      { src: "assets/cardcrown/deck.webp", caption: "卡组与费用", w: 720, h: 1280 },
      { src: "assets/cardcrown/shop.png", caption: "商店与金币", w: 720, h: 1214 }
    ],
    links: [],
    note: "玩法参考《皇室战争》。个人项目，不用于商业用途。"
  },
  {
    id: "yin",
    title: "卡牌银河恶魔城",
    year: "2025",
    badge: "原型",
    type: "横版探索和回合制卡牌",
    role: "",
    roleNote: "",
    desc: "原型能跑了，内容暂时不公开。",
    tags: ["Godot 4.6", "GDScript"],
    shots: [],
    links: []
  },
  {
    id: "cat",
    title: "老吴喵斗",
    year: "2026",
    badge: "开发中",
    type: "手机小游戏",
    role: "",
    roleNote: "",
    desc: "在做的项目，暂时不公开。",
    tags: ["Godot 4.5"],
    shots: [],
    links: []
  }
];
