# -*- coding: utf-8 -*-
"""生成 reasonix-mobile-components-showcase.html（风格参照 reasonix-components-showcase.html）"""
import json

data = json.load(open("_mobile_data.json", encoding="utf-8"))
cats = data["cats"]
items = data["items"]

# 每个分类的图标
CAT_ICONS = {
    "基础": "🧱", "弹层基础": "🪟", "操作弹层": "💬", "布局": "📐", "导航": "🧭",
    "表单与输入": "📝", "选择控件": "☑️", "选择器": "🎡", "列表与单元格": "📜",
    "数据展示": "📊", "媒体": "🎬", "反馈": "🔔", "函数式": "⚡",
}

# 生成分类过滤按钮
cat_btns = ['<button class="cf-btn cf-btn--on" data-cat="全部">全部 <span class="n">%d</span></button>' % len(items)]
for c in cats:
    cnt = sum(1 for i in items if i["cat"] == c)
    cat_btns.append(f'<button class="cf-btn" data-cat="{c}">{c} <span class="n">{cnt}</span></button>')
cat_filter_html = '\n'.join(cat_btns)

# 生成组件卡片（每分类一个 section，含分组标题 + 组件网格）
sections = []
for c in cats:
    cat_items = [i for i in items if i["cat"] == c]
    cards = []
    for i in cat_items:
        cards.append(f'''<div class="comp-card" data-name="{i['name'].lower()}" data-cat="{c}">
  <div class="cc-head">
    <span class="cc-ic">{i['icon']}</span>
    <span class="cc-name">{i['name']}</span>
    <span class="cc-zh">{i['zh']}</span>
  </div>
  <div class="cc-body">
    <p class="cc-desc">{i['desc']}</p>
    <div class="cc-demo" data-demo="{i['name']}">
      <span class="cc-demo-tag">{i['name']}</span>
    </div>
  </div>
</div>''')
    sections.append(f'''<section class="comp-section" data-cat="{c}">
  <h2 class="sec-title">{CAT_ICONS.get(c, '📦')} {c} <span class="sec-count">{len(cat_items)}</span></h2>
  <div class="comp-grid">{''.join(cards)}</div>
</section>''')
sections_html = '\n'.join(sections)

# 统计卡片
total = len(items)

html = '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>移动端组件库 · 文档展示</title>
<style>
/* ============================================================
   Reasonix graphite 设计语言（参照 reasonix-components-showcase.html）
   ============================================================ */
:root {
  --bg: #0c0d10; --bg-soft: #101115; --bg-elev: #15161a; --bg-elev-2: #191a1f;
  --surface: #15161a; --surface-2: #191a1f; --surface-3: #101115;
  --border: rgba(255,255,255,0.1); --border-2: rgba(255,255,255,0.2); --border-soft: rgba(255,255,255,0.07);
  --fg: #f1f1ef; --fg-dim: #a7a8ad; --fg-faint: #6c6e74;
  --accent: #ff6a3d; --accent-strong: #ff9a52; --accent-soft: rgba(255,106,61,0.16); --accent-fg: #0c0d10;
  --grad: linear-gradient(120deg,#ff6a3d,#ff9a52);
  --ok: #3ad17e; --warn: #e3a23a; --err: #f0573f; --danger: #e5484d;
  --radius: 8px; --r-s: 5px; --r-l: 11px;
  --dur-fast: 120ms; --dur-base: 180ms; --dur-slow: 340ms;
  --ease-out: cubic-bezier(0.2,0.72,0.2,1);
  --font-ui: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Microsoft YaHei","Noto Sans SC",Helvetica,Arial,sans-serif;
  --font-mono: ui-monospace,"SF Mono","Cascadia Code",Consolas,"Liberation Mono",monospace;
  color-scheme: dark;
}
:root[data-theme="light"] {
  --bg: #f4f3ef; --bg-soft: #f0efe9; --bg-elev: #ffffff; --bg-elev-2: #f6f5f1;
  --surface: #ffffff; --surface-2: #f6f5f1; --surface-3: #f0efe9;
  --border: rgba(20,22,28,0.12); --border-2: rgba(20,22,28,0.24); --border-soft: rgba(20,22,28,0.08);
  --fg: #16181d; --fg-dim: #4a4d56; --fg-faint: #85888f;
  --accent: #ff5a2c; --accent-strong: #df471f; --accent-soft: rgba(255,90,44,0.12); --accent-fg: #ffffff;
  --grad: linear-gradient(120deg,#ff5a2c,#ff8a3d);
  --ok: #1f9d57; --warn: #d98a1f; --err: #d83a2a;
  color-scheme: light;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--font-ui); background: var(--bg); color: var(--fg);
  font-size: 14px; line-height: 1.6; min-height: 100vh;
  transition: background var(--dur-slow), color var(--dur-slow);
  -webkit-font-smoothing: antialiased;
}
* { scrollbar-width: thin; scrollbar-color: var(--fg-faint) transparent; }
::-webkit-scrollbar { width: 10px; }
::-webkit-scrollbar-thumb { background: var(--fg-faint); border-radius: 999px; border: 2px solid transparent; background-clip: padding-box; }

/* ---- 顶栏 ---- */
.topbar {
  display: flex; align-items: center; gap: 12px; height: 52px; padding: 0 20px;
  background: color-mix(in srgb, var(--bg) 92%, transparent);
  border-bottom: 1px solid var(--border-soft);
  position: sticky; top: 0; z-index: 100; backdrop-filter: blur(8px);
}
.brand { display: flex; align-items: center; gap: 9px; font-weight: 800; font-size: 16px; }
.brand .mark {
  width: 26px; height: 26px; border-radius: var(--r-s);
  background: var(--grad); color: var(--accent-fg);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 900;
}
.brand .sub { font-size: 11px; color: var(--fg-faint); font-weight: 500; }
.top-actions { margin-left: auto; display: flex; align-items: center; gap: 8px; }
.top-btn {
  display: inline-flex; align-items: center; gap: 5px; height: 30px; padding: 0 14px;
  border: 1px solid var(--border-soft); border-radius: 999px;
  background: var(--bg-elev); color: var(--fg-dim); font-size: 11px;
  cursor: pointer; transition: border-color var(--dur-fast), color var(--dur-fast), transform var(--dur-fast);
}
.top-btn:hover { border-color: var(--border-2); color: var(--fg); }
.top-btn:active { transform: scale(0.96); }

/* ---- 头部 hero ---- */
.hero { padding: 36px 20px 20px; max-width: 1100px; margin: 0 auto; }
.hero h1 { font-size: 24px; font-weight: 800; letter-spacing: -0.01em; }
.hero h1 .badge {
  display: inline-block; font-size: 11px; font-weight: 700; color: var(--accent-fg);
  background: var(--grad); border-radius: var(--r-s); padding: 2px 8px;
  vertical-align: 4px; margin-left: 8px;
}
.hero p { color: var(--fg-dim); font-size: 13px; margin-top: 6px; }
.hero .meta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 14px; }
.hero .meta .tag {
  font-size: 11px; color: var(--fg-faint); border: 1px solid var(--border-soft);
  border-radius: 999px; padding: 3px 12px;
}

/* ---- 统计卡 ---- */
.stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; max-width: 1100px; margin: 8px auto 0; padding: 0 20px; }
.stat-card {
  border: 1px solid var(--border-soft); border-radius: 12px; background: var(--bg-elev);
  padding: 14px 16px; display: flex; flex-direction: column; gap: 2px;
  transition: border-color var(--dur-fast), transform var(--dur-fast), box-shadow var(--dur-fast);
}
.stat-card:hover { border-color: var(--border-2); box-shadow: 0 4px 16px rgba(0,0,0,0.18); }
.stat-card .sc-label { font-size: 10px; color: var(--fg-faint); text-transform: uppercase; letter-spacing: .05em; }
.stat-card .sc-value { font-size: 22px; font-weight: 800; color: var(--accent); font-variant-numeric: tabular-nums; }
.stat-card .sc-sub { font-size: 10px; color: var(--fg-faint); }

/* ---- 主区 ---- */
.main { max-width: 1100px; margin: 0 auto; padding: 20px; }

/* 工具条（搜索 + 分类过滤） */
.toolbar { display: flex; flex-direction: column; gap: 12px; margin-bottom: 18px; }
.ct-search {
  display: flex; align-items: center; gap: 8px; height: 36px; padding: 0 14px;
  border: 1px solid var(--border); border-radius: var(--radius);
  background: var(--bg-elev); transition: border-color var(--dur-fast), box-shadow var(--dur-fast);
}
.ct-search:focus-within { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-soft); }
.ct-search input { flex: 1; border: none; outline: none; background: none; color: var(--fg); font: inherit; font-size: 13px; }
.ct-search input::placeholder { color: var(--fg-faint); }
.ct-search .count { font-size: 10px; color: var(--fg-faint); font-family: var(--font-mono); }

.cat-filter { display: flex; gap: 6px; flex-wrap: wrap; }
.cf-btn {
  display: inline-flex; align-items: center; gap: 4px; height: 28px; padding: 0 12px;
  border: 1px solid var(--border-soft); border-radius: 999px;
  background: var(--bg-elev); color: var(--fg-dim); font-size: 11px; cursor: pointer;
  transition: border-color var(--dur-fast), color var(--dur-fast), background var(--dur-fast);
}
.cf-btn:hover { border-color: var(--border-2); color: var(--fg); }
.cf-btn--on { background: var(--accent-soft); border-color: var(--accent); color: var(--accent); font-weight: 650; }
.cf-btn .n { font-size: 9px; opacity: .7; }

/* ---- 分类 section ---- */
.comp-section { margin-bottom: 28px; }
.sec-title {
  display: flex; align-items: center; gap: 8px;
  font-size: 15px; font-weight: 750; margin-bottom: 12px;
  padding-bottom: 8px; border-bottom: 1px solid var(--border-soft);
}
.sec-count {
  font-size: 10px; font-weight: 700; color: var(--accent);
  background: var(--accent-soft); border-radius: 999px; padding: 1px 8px;
}

/* ---- 组件网格 ---- */
.comp-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; }
.comp-card {
  border: 1px solid var(--border-soft); border-radius: 12px; background: var(--bg-elev);
  overflow: hidden; display: flex; flex-direction: column;
  transition: border-color var(--dur-fast), transform var(--dur-fast), box-shadow var(--dur-fast);
}
.comp-card:hover { border-color: var(--border-2); box-shadow: 0 4px 16px rgba(0,0,0,0.18); transform: translateY(-2px); }
.comp-card:active { transform: translateY(-2px) scale(0.98); }
.cc-head {
  display: flex; align-items: center; gap: 8px; padding: 10px 14px;
  border-bottom: 1px solid var(--border-soft);
}
.cc-ic { width: 26px; height: 26px; border-radius: 7px; background: var(--accent-soft); display: inline-flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; }
.cc-name { font-size: 13px; font-weight: 650; }
.cc-zh { font-size: 10px; color: var(--fg-faint); }
.cc-body { padding: 10px 14px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
.cc-desc { font-size: 11px; color: var(--fg-dim); line-height: 1.55; flex: 1; }
/* 组件 mini demo（示意预览） */
.cc-demo {
  display: flex; align-items: center; justify-content: center;
  min-height: 56px; border: 1px dashed var(--border-soft); border-radius: var(--r-s);
  background: var(--bg-soft); position: relative; overflow: hidden;
}
.cc-demo-tag {
  font-size: 11px; font-weight: 600; color: var(--accent);
  background: var(--accent-soft); border-radius: var(--r-s); padding: 4px 12px;
}

/* ---- 隐藏（过滤） ---- */
.comp-section[hidden] { display: none; }
.comp-card[hidden] { display: none; }

/* ---- 动效 ---- */
@keyframes fade-up { from { opacity: 0; transform: translateY(8px); } }
.hero, .stats, .main { animation: fade-up var(--dur-slow) var(--ease-out); }

/* ---- 响应式 ---- */
@media (max-width: 640px) {
  .brand .sub { display: none; }
  .comp-grid { grid-template-columns: 1fr; }
  .hero h1 { font-size: 20px; }
}
</style>
</head>
<body>
  <header class="topbar">
    <div class="brand"><span class="mark">M</span> 移动端组件库 <span class="sub">文档展示 · 13 分类 / __TOTAL__ 组件</span></div>
    <div class="top-actions">
      <button class="top-btn" onclick="toggleTheme()" id="theme-btn">🌙 深色</button>
    </div>
  </header>

  <section class="hero">
    <h1>移动端组件库 <span class="badge">文档</span></h1>
    <p>一套按 __CATS__ 个分类组织的移动端 UI 组件目录 —— 从基础按钮到函数式反馈的完整覆盖。</p>
    <div class="meta">
      <span class="tag">📱 移动优先</span>
      <span class="tag">🎨 Reasonix 设计语言</span>
      <span class="tag">🌓 明暗双主题</span>
      <span class="tag">🔍 搜索 + 分类过滤</span>
    </div>
  </section>

  <section class="stats">
    <div class="stat-card"><span class="sc-label">组件总数</span><span class="sc-value">__TOTAL__</span><span class="sc-sub">13 分类</span></div>
    <div class="stat-card"><span class="sc-label">最多分类</span><span class="sc-value">数据展示</span><span class="sc-sub">10 个组件</span></div>
    <div class="stat-card"><span class="sc-label">基础组件</span><span class="sc-value">3</span><span class="sc-sub">按钮 / 按钮组 / 图标</span></div>
    <div class="stat-card"><span class="sc-label">反馈组件</span><span class="sc-value">5</span><span class="sc-sub">Alert / Dialog / Modal / Toast</span></div>
  </section>

  <main class="main">
    <div class="toolbar">
      <div class="ct-search">
        <span>🔍</span>
        <input id="search" placeholder="搜索组件（名称 / 中文 / 用途）…" autocomplete="off">
        <span class="count" id="count">__TOTAL__ / __TOTAL__</span>
      </div>
      <div class="cat-filter" id="cat-filter">
__CAT_FILTER__
      </div>
    </div>

__SECTIONS__
  </main>

<script>
  // 明暗切换
  function toggleTheme() {
    const isLight = document.documentElement.hasAttribute('data-theme');
    if (isLight) { document.documentElement.removeAttribute('data-theme'); document.getElementById('theme-btn').textContent = '🌙 深色'; }
    else { document.documentElement.setAttribute('data-theme', 'light'); document.getElementById('theme-btn').textContent = '☀️ 浅色'; }
  }

  // 分类过滤
  const cfBtns = document.querySelectorAll('.cf-btn');
  cfBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      cfBtns.forEach(b => b.classList.remove('cf-btn--on'));
      btn.classList.add('cf-btn--on');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.comp-section').forEach(sec => {
        sec.hidden = cat !== '全部' && sec.dataset.cat !== cat;
      });
      updateCount();
    });
  });

  // 搜索过滤（组件级）
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('.comp-card').forEach(card => {
      const hay = (card.dataset.name + ' ' + card.textContent).toLowerCase();
      card.hidden = q && !hay.includes(q);
    });
    updateCount();
  });

  function updateCount() {
    let visible = 0;
    document.querySelectorAll('.comp-card').forEach(c => { if (!c.hidden) visible++; });
    document.getElementById('count').textContent = visible + ' / __TOTAL__';
  }
</script>
</body>
</html>
'''

# 占位符替换（避免 f-string 花括号冲突）
html = html.replace("__TOTAL__", str(total)).replace("__CATS__", str(len(cats)))
html = html.replace("__CAT_FILTER__", cat_filter_html).replace("__SECTIONS__", sections_html)
open("reasonix-mobile-components-showcase.html", "w", encoding="utf-8").write(html)
print("已生成 reasonix-mobile-components-showcase.html,", len(html)//1024, "KB")
