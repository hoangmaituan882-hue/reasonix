# Reasonix 桌面端设计参考文档

> 来源：https://github.com/esengine/DeepSeek-Reasonix （`main-v2` 分支，Go 重写版本）
> 范围：桌面端（Wails）前端 —— 工作台布局、主题系统（Graphite 等）、组件 UI 与设计 Token
> 整理日期：2026-06（基于 main-v2 当前代码核实）
>
> 📎 配套文档：[reasonix-desktop-components.md](reasonix-desktop-components.md) —— 组件**完整源码大全**（99 个文件、约 1.9MB）

---

## 0. 重要前提

该仓库**没有独立的主题设计文档**（无 DESIGN.md / Figma 链接）。设计与实现全部以生产代码形式存在于桌面端 Wails 前端：

```
desktop/frontend/
├── src/
│   ├── App.tsx                  # 应用根组件（布局组装、⌘K 接线）
│   ├── main.tsx
│   ├── styles.css               # 全部设计 Token + 组件样式（约 970KB）
│   ├── lib/
│   │   ├── theme.ts             # 主题系统（方向 × 明暗、迁移、原生窗口同步）
│   │   └── codeReadability.ts   # 代码可读性样式（按主题方向生成）
│   ├── components/              # 约 90 个组件
│   ├── store/  locales/  assets/  generated/  __tests__/
```

唯一的"设计文档"痕迹是 PR #3752 内 commit `dd077cc`（`docs(design): add desktop redesign prototype`——一个自包含的 HTML/React+Babel 原型），但随后被同 PR 的 `907f720`（`chore: remove design artifacts from PR`）移除，**只保留生产代码**。需要原型可切到该 commit 查看。

---

## 1. 设计哲学

`styles.css` 头部自述（第一手资料）：

> **"single-column, developer-dense, terminal-flavored chat UI"**
> （单列、开发者密集、终端风格聊天界面）

三条硬性平台约束：

1. **系统字体栈** + 内置图标字体（`Reasonix Seti` woff），**不做 web 字体拉取**；
2. **禁用 `backdrop-filter` / blur**（Linux WebKitGTK 上慢且不一致）；
3. 颜色全部走 CSS 变量 + `prefers-color-scheme`，让 webview 跟随 OS。

窗口集成：`--wails-draggable` 标记标题区为 OS 拖拽手柄（macOS 内嵌标题栏），可交互子元素用 `--wails-draggable: no-drag` 退出。

另有全局 `prefers-reduced-motion` 兜底：把一切动画/过渡折叠到 ~0ms，因此 motion token 可以放心复用、无需逐规则覆盖。

---

## 2. 主题系统（Graphite / Aurora / Slate / Carbon / Nocturne / Amber）

实现文件：`src/lib/theme.ts` + `styles.css`。

### 2.1 模型：方向 × 明暗（正交）

```ts
export type Theme = "auto" | "light" | "dark";          // 明暗（跟随 OS / 强制）
export type ThemeStyle = "graphite" | "aurora" | "slate"
                       | "carbon" | "nocturne" | "amber"; // 视觉方向
```

- 6 个**主题方向**（ThemeStyle）与 light/dark **正交**：每个方向都支持明暗两种模式，方向只换 accent 系 token；
- DOM 层用两个属性表达：`data-theme`（light/dark/auto）与 `data-theme-style`（方向）；
- 样式表默认（`:root`）即 **Graphite 暗色**；OS 亮色时经 `prefers-color-scheme` 自动切亮。

### 2.2 默认值与历史迁移

- 默认方向：`DEFAULT_THEME_STYLE = "graphite"`；默认明暗：`auto`；
- **新用户默认 Graphite**（明暗随 OS）；
- `LEGACY_STYLE_MAP` 把旧版 8 个主题名归并到 6 个新方向（graphite/aurora 本身就在新方向里，同名保留；其余 6 个映射到最近方向），老配置不失效：

| 旧方向 | 映射到 |
|---|---|
| ember | carbon |
| midnight | nocturne |
| sandstone | amber |
| porcelain | nocturne |
| linen | amber |
| glacier | slate |
| graphite / aurora | 同名保留 |

- 存储键：`reasonix-theme`（localStorage，JSON）与 `reasonix-theme-style`；
- 另有遗留 `normalizeThemePreference`：`focus`/`forest` → light，`midnight`/`contrast` → dark。

### 2.3 Graphite 色值（默认主题）

**暗色**（`styles.css` `:root` 默认，即 Graphite 暗）：

```css
--bg: #090a0c;            /* 应用底色 */
--bg-soft: #111319;
--bg-elev: #191b22;
--bg-elev-2: #222631;
--sidebar-bg: #0c0e12;
--sidebar-hover: #181c24;
--sidebar-active: rgba(217, 119, 87, 0.13);
--accent: #d97757;        /* Reasonix 标志性暖橙 */
--accent-strong: #e58a6b;
--accent-soft: rgba(217, 119, 87, 0.14);
--accent-fg: #1a0f0a;
--grad: linear-gradient(120deg, var(--accent), var(--accent-strong)); /* CTA 渐变 */
--border: #343945;
--fg: #f4f5f7;  --fg-dim: #c0c4cc;  --fg-faint: #858b96;
```

**亮色**（`data-theme="light"` 或 OS 亮色 + auto）：

```css
--bg: #f7f8fb;            /* 温暖中性表面 */
--bg-elev: #ffffff;
--sidebar-bg: #f3f6fa;
--sidebar-hover: #e8edf4;
--sidebar-active: #eaf1ff;
--accent: #2f5fa8;        /* 亮色选择态用蓝 */
--accent-strong: #244f91;
--accent-fg: #fff;
--border: #d8dee8;
--fg: #111827;  --fg-dim: #4b5563;  --fg-faint: #8a94a6;
```

### 2.4 原生窗口同步（Wails）

`applyTheme()` 在 Wails shell 内还会同步**原生窗口**：

- `WindowSetLightTheme()` / `WindowSetDarkTheme()` / `WindowSetSystemDefaultTheme()` —— 标题栏、traffic lights 跟随；
- `WindowSetBackgroundColour()` —— 窗口底色与主题对齐，防止 webview 首帧白闪：
  - light → `rgb(244, 243, 239)`（theme.ts 注释称其匹配亮色 `--bg`；注意该值与 styles.css 亮色 `--bg` 的 `#f7f8fb` 有细微出入——上游注释/取值不一致，以实际值 `#f4f3ef` 为准）
  - dark → `rgb(9, 10, 12)`（匹配 `:root --bg`）
- `auto` 模式监听 `prefers-color-scheme` 变化并同步。

### 2.5 终端主题（独立维度）

终端面板有独立于应用主题的第三维度 `data-terminal-theme="dark" | "light"`（`--terminal-*` token），默认跟随应用。

---

## 3. 工作台布局（Workbench）

### 3.1 两种布局模式

- `.app--classic`：经典布局；
- `.app--workbench`：工作台布局（创建模式 `creation` 另有等宽列 tab 处理）；
- 右侧 dock 缩到最窄（`@container max-width: 420px`）时，两种布局共用紧凑四视图条带。

### 3.2 区域分解

| 区域 | 组件 | 说明 |
|---|---|---|
| 应用外壳 | `AppChrome.tsx` | 桌面应用 chrome、标题区（可拖拽） |
| 标签条 | `TabBar.tsx` | 会话/面板标签 |
| 左侧边栏 | `ProjectTree.tsx` | 项目树、会话列表、拖拽重排、折叠动画、项目文件夹控制、底部导航 |
| 右侧 Dock | `WorkspacePanel.tsx` / `ContextPanel.tsx` | 可调宽抽屉；`overview` tab：上下文窗口环、运行时指标、成本、会话状态、依赖文件；另有 file/change 等 tab；`TerminalPanel` 终端 |
| 底部 Composer | `Composer.tsx` + `RichComposerInput.tsx` | 输入框、协作模式、工具审批（ask/auto/YOLO）、模型/努力选择器；分组稳定、间距清晰 |
| 状态栏 | `StatusBar.tsx` | **固定指标槽位**：model、当前会话轮数、context、压缩率、hit rate、tasks、当前成本、余额 |
| 命令面板 | `CommandPalette.tsx` | ⌘K / Ctrl+K 全局导航（new session / history / trash / settings / memory / models + 最近会话恢复） |

### 3.3 交互行为约定

- 左右面板开关行为统一，**无主题间布局漂移**；
- 弹出层**不用全屏透明遮罩**（点击后不再挡住应用其余部分）；
- 管理对话框共享 modal 动效，统一 close-button / modal chrome（`ModalCloseButton.tsx`）；
- 协作模式与工具审批模式**分离**：chat/plan/goal 独立于 ask/auto/YOLO；审批设成 auto/YOLO 时业务 ask 仍由用户决定；Esc 不会静默改变 plan/YOLO 模式；
- 状态栏在加载的 topic 元数据缺失时有 fallback 行为；模型切换器与状态栏、菜单勾选同步。

---

## 4. 设计 Token 系统

全部集中在 `styles.css`，五层结构：

### 4.1 Surfaces（表面）

```css
--bg / --bg-soft / --bg-elev / --bg-elev-2
--sidebar-bg / --sidebar-hover / --sidebar-active
--chat-bg / --workspace-preview-bg / --workspace-files-bg / --workspace-files-hover
--workspace-selection-bg / --workspace-selection-fg / --workspace-selection-bar
--border / --border-soft
```

### 4.2 Text 与字号刻度

```css
--fg / --fg-dim / --fg-faint
--global-font-scale: 1;  --font-scale: var(--global-font-scale);   /* 全局缩放 */
--text-2xs: calc(10px * var(--font-scale));  … --text-xl: calc(18px * var(--font-scale));
--font-caption / --font-code / --font-content / --font-control / --font-control-small / --font-status
--font-ui（平台自适应：darwin SF Pro / windows Segoe UI / linux Noto Sans CJK）
--font-mono（平台自适应 + 用户可换 cascadia / jetbrains / sfmono / custom）
```

### 4.3 Brand + Semantic（品牌与语义）

```css
--accent / --accent-strong / --accent-soft / --accent-fg / --grad        /* 品牌 */
--ok / --warn / --err / --danger / --danger-fg / --shell-accent         /* 状态 */
--chart-1..5 / --chart-other   /* 图表序列色，取自 GitHub Primer data-viz token，
                                  主题方向不覆盖，保证明暗下图表可读 */
--chat-user-bg / --chat-user-border / --chat-user-shadow               /* 用户消息 */
--mode-auto-bg / --mode-plan-bg / --mode-yolo-bg (+ border/fg)         /* 模式徽章三态 */
```

### 4.4 Component Recipes（组件配方——所有组件复用，避免重复样式）

```css
/* list-row（会话/历史行） */
--list-row-height: 38px;  --list-row-radius: 7px;  --list-row-gap: 10px;  --list-row-px: 10px;
--list-row-title / --list-row-meta / --list-row-hover-bg
--list-row-current-bg / --list-row-current-title / --list-row-current-meta

/* tree-row（文件树行） */
--tree-row-height: 30px;  --tree-row-radius: 7px;
--tree-row-hover-bg / --tree-row-current-bg / --tree-row-current-fg / --tree-row-current-icon
--tree-row-marker: var(--workspace-selection-bar)   /* 选中左侧 3px 标记条 */

/* button / pill */
--button-height: 34px;  --button-small-height: 30px;  --button-icon-size: 30px;
--button-radius: 8px;  --button-px: 12px;
--button-bg / --button-bg-hover / --button-border / --button-border-hover / --button-fg / --button-muted-fg
--button-danger-bg / --button-danger-border / --button-danger-fg
--pill-bg / --pill-border / --pill-fg / --pill-hover-bg
--pill-plan-bg / --pill-plan-border        /* PLAN 徽章 */
--pill-yolo-bg / --pill-yolo-fg / --pill-yolo-border  /* YOLO 徽章 */

/* 其他 */
--focus-ring: 0 0 0 3px var(--accent-soft);
--control-primary-bg / --control-primary-fg / --control-disabled-bg / --control-disabled-fg
--radius: 9px;  --maxw: 960px;
```

### 4.5 Diff / 代码 / 语法高亮

```css
--add-bg / --add-fg / --del-bg / --del-fg          /* diff 增删 */
--code-bg / --code-border / --code-fg              /* 代码可读性岛（主题包替换为扁平背景 + WCAG 语法色板） */
--hl-keyword / --hl-string / --hl-number / --hl-comment
--hl-func / --hl-type / --hl-builtin / --hl-meta   /* One Dark 系（暗）/ GitHub 系（亮） */
```

### 4.6 Motion 与 z-index

```css
/* 动效时长 + 缓动（全局 prefers-reduced-motion 兜底） */
--dur-fast: 120ms;  --dur-base: 180ms;  --dur-slow: 340ms;  --dur-slower: 420ms;
--ease-out / --ease-decelerate / --ease-standard
--motion-pop-scale: 0.98;  --motion-rise: 4px;

/* 层级刻度（局部到全局） */
--z-theme-bg: 0 … --z-app-content: 1 … --z-workspace-float: 40
--z-menu: 96 … --z-dock: 100 … --z-modal: 1200
--z-popover: 1301 … --z-toast: 1302 … --z-onboarding: 9999
--z-performance-report-prompt: 99998 … --z-crash-overlay: 99999
```

### 4.7 组件复用示例

- **History / Trash 面板**：选中行 = 3px accent 条 + 柔光底（取代整圈描边）；状态徽章 = 彩色圆点（current/open/deleted）；分组标题带计数 chip；原生 `<select>` 换成分段计数 pill；
- **Memory 面板**：事实卡按 type 着色 chip（user/feedback/project/reference）+ 左侧 accent 竖条；
- **进程卡**：running 扫光动画 + 滑动手势的 mode 切换滑块；
- **远程主机切换器**：`.remote-switcher` 用独立弹出层（`--z-local-popover`），状态圆点区分 connected / connecting / pending_hostkey / pending_secret / degraded / error。

---

## 5. 组件清单（`src/components/`，约 90 个，按功能分组）

| 分组 | 组件 |
|---|---|
| 外壳/导航 | AppChrome, TabBar, CommandPalette, Welcome, StartupSplash, OnboardingOverlay, ThemeBackground |
| 会话/消息 | Transcript, Message, Markdown, MarkdownRenderer, MermaidDiagram, CodeViewer, ImageViewer, DiffView, InlineDiff, InvocationBadge, ProcessCard, RuntimeDecisionCard, ReadOnlyBatch, ToolCard, ToolGroup, TranscriptSelectionMenu, UndoRewindBanner, UpdateBanner |
| 输入 | Composer, RichComposerInput, ComposerContextCard, PromptShelf, PromptAction, SlashMenu, ArgMenu, VirtualMenu, FloatingMenu, ContextMenu, AnchoredPopover, Tooltip |
| 侧栏/树 | ProjectTree, WorkspacePanel, ContextPanel, ContextWindowRing, ResizableDrawer, TodoPanel, TerminalPanel, TerminalSessionRail, TerminalView, WorkspaceFileIcon, WorktreeBadge, SubagentsPanel, CapabilitiesPanel, RemotePanel, RemoteHostsPage |
| 管理面板 | SettingsPanel, SettingsPanelEntry, AppearanceOverview, ThemeGallery, ThemeLibrary, ThemePreviewSurface, TypographySettings, CompactRatioSettings, UsageStatsPanel, DiagnosticsSettingsPage, HistoryPanel, MemoryPanel |
| 状态栏/审批 | StatusBar, ModelSwitcher, EffortSwitcher, ApprovalModal, AskCard, ClearContextCard, ProviderTrustDialog, RemoteConnectionErrorDialog, RemoteHostKeyDialog, RemoteSecretDialog |
| 通用 | CopyButton, ConfirmDialog, InlineConfirmButton, ModalCloseButton, ErrorBoundary, ExternalOpener, FileReferenceMenu, ShortcutComboDisplay, ShortcutsCheatsheet, SoundSelect, githubLink |
| 数学/工具 | latexNormalize, mathClassify, mathNormalize, remarkMathPolicy, rehypeReasonixKatex, youngDiagrams, markdownRemarkPlugins |

> 另有 `editors/` 子目录（编辑器相关组件），未在此逐项列出；组件总数 90+。
>
> 📎 上述全部组件的**完整源码**见 [reasonix-desktop-components.md](reasonix-desktop-components.md)。

---

## 6. 演进历史（关键 PR）

| PR | 内容 |
|---|---|
| **#2636** | 建立桌面 light/dark 语义 token 系统（surface/accent/list-row/tree-row/button/pill），统一按钮/芯片尺寸、圆角、hover 行为 |
| **#3752** | **刷新主题化工作区 UI**：6 主题方向（Graphite/Aurora/Slate/Carbon/Nocturne/Amber）、设置页 3x2 卡片 + 三色板主题预览、迁移 CTA 渐变/活动行/PLAN 徽章/面板切换等颜色 cue、⌘K palette 接线、状态栏固定槽位、移除全屏遮罩、`context` tab 更名 `overview` 并重组；含设计原型 commit（后移除）；顺带完成工具审批三态重构（ask/auto/yolo） |
| **#3795** | 合并后 UI 修复：保留精选 provider 模型、clarify composer 协作入口、draft goal 模式可见、运行中可改审批模式 |
| **#3964** | 恢复 palette 焦点轮廓、平台正确的搜索快捷键 |

---

## 7. 参考链接

- 仓库：https://github.com/esengine/DeepSeek-Reasonix （`main-v2` 分支）
- 主题实现：`desktop/frontend/src/lib/theme.ts`
- 样式与 Token：`desktop/frontend/src/styles.css`
- 组件目录：`desktop/frontend/src/components/`
- PR #2636：https://github.com/esengine/DeepSeek-Reasonix/pull/2636
- PR #3752：https://github.com/esengine/DeepSeek-Reasonix/pull/3752
- PR #3795：https://github.com/esengine/DeepSeek-Reasonix/pull/3795
- PR #3964：https://github.com/esengine/DeepSeek-Reasonix/pull/3964
