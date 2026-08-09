# DESIGN.md — Reasonix 桌面端视觉语言

> 本文件供 **AI 设计代理**（Claude Design、Stitch 等）消费：每个 token 带理由（why），
> 以便在未覆盖场景下仍能做出系统内一致的决策。数据来源为 `esengine/DeepSeek-Reasonix`
> `main-v2` 分支（Wails 桌面前端），以 **Graphite 主题方向（桌面默认）** 为准。
>
> 深层参考：`reasonix-desktop-design.md`（结构全解）、`reasonix-design-showcase.html`（可交互演示）。

---

## 0. 身份与氛围

**一句话**：终端风格、开发者密集、单一暖橙焦点色的桌面 AI 编码工作台。

三条**硬性平台约束**（违反即破坏产品，不是审美选择）：

| 约束 | 理由 |
|---|---|
| **只用系统字体栈，不拉 web 字体** | 桌面端离线优先；web 字体在 Wails webview 中闪烁、拖慢首帧 |
| **禁用 `backdrop-filter` / blur** | Linux WebKitGTK 上渲染慢且不一致；用不透明表面分层代替毛玻璃 |
| **颜色全走 CSS 变量 + `prefers-color-scheme`** | 主题方向 × 明暗可正交切换；硬编码色值会破坏主题系统 |

---

## 1. 色彩 Tokens（Graphite 默认方向）

### 1.1 暗色（默认，`:root[data-theme-style="graphite"]`）

| Token | 值 | 用途 / 理由 |
|---|---|---|
| `--bg` | `#0c0d10` | 画布底色。近黑带蓝灰，比纯黑有层次 |
| `--bg-soft` | `#101115` | 次级面（代码区、dock 底） |
| `--bg-elev` | `#15161a` | 抬升面（卡片、按钮、状态栏） |
| `--bg-elev-2` | `#191a1f` | 再抬升（hover 面、thumb） |
| `--surface` | `#15161a` | 面板基准面 |
| `--sidebar-bg` | `#15161a` | 侧栏底 |
| `--sidebar-hover` | `#1f2026` | 侧栏行 hover |
| `--sidebar-active` | `rgba(255,106,61,0.16)` | 侧栏选中态（accent 柔光） |
| `--accent` | `#ff6a3d` | **唯一焦点色**（暖橙）。全界面只此一色做强调 |
| `--accent-strong` | `#ff9a52` | accent 亮端（渐变终点、hover） |
| `--accent-soft` | `color-mix(in srgb, var(--accent) 16%, transparent)` | accent 柔光（选中底、focus ring，派生） |
| `--accent-fg` | `#0c0d10` | accent 上的前景文字 |
| `--grad` | `linear-gradient(120deg,#ff6a3d,#ff9a52)` | CTA 渐变（新会话、发送按钮） |
| `--fg` | `#f1f1ef` | 主文字 |
| `--fg-dim` | `#a7a8ad` | 次级文字 |
| `--fg-faint` | `#6c6e74` | 弱文字（meta、时间戳、占位） |
| `--border` | `rgba(255,255,255,0.1)` | 强描边（输入框、composer） |
| `--border-soft` | `rgba(255,255,255,0.07)` | 发丝描边（卡片、分隔线） |
| `--ok` | `#3ad17e` | 成功/在线/命中 |
| `--warn` | `#e3a23a` | 警告 |
| `--err` | `#f0573f` | 错误/删除/danger |
| `--danger` | `#e5484d` | 危险操作（删除按钮、yolo 徽章） |

### 1.2 亮色（`:root[data-theme="light"][data-theme-style="graphite"]`）

| Token | 值 | 与暗色关系 |
|---|---|---|
| `--bg` | `#f4f3ef` | 暖白灰（纸张感），非纯白 |
| `--bg-soft` | `#f0efe9` | 次级面 |
| `--bg-elev` / `--surface` | `#ffffff` | 抬升面 |
| `--bg-elev-2` | `#f6f5f1` | 再抬升 |
| `--sidebar-hover` | `#f0efe9` | 行 hover |
| `--accent` | `#ff5a2c` | **同一暖橙，加深保证浅底对比度**（不是换蓝色！） |
| `--accent-strong` | `#df471f` | 更深的橙 |
| `--accent-soft` | `rgba(255,90,44,0.12)` | 柔光 |
| `--accent-fg` | `#ffffff` | 前景 |
| `--grad` | `linear-gradient(120deg,#ff5a2c,#ff8a3d)` | CTA 渐变 |
| `--fg` | `#16181d` | 主文字 |
| `--fg-dim` | `#4a4d56` | 次级 |
| `--fg-faint` | `#85888f` | 弱 |
| `--border` | `rgba(20,22,28,0.12)` | 强描边 |
| `--border-soft` | `rgba(20,22,28,0.08)` | 发丝描边 |
| `--ok` / `--err` | `#1f9d57` / `#d83a2a` | 状态色（加深适配浅底） |

### 1.3 色彩规则

- **单焦点色纪律**：全界面只有 `--accent` 一种强调色；灰阶打底、单色点睛。
- **换主题只换 accent 系 token**：Graphite → Aurora/Slate/Carbon/Nocturne/Amber 仅改 `--accent*` + 少量 surface/border；布局与组件行为零变化。
- **模式徽章三态**：plan = accent 柔光、auto = 蓝 `#2f6de8`、yolo = 红 `--danger`（与协作模式 chat/plan/goal 独立）。
- **图表色例外**：`--chart-1..5` 取自 GitHub Primer data-viz，**主题方向不覆盖**（保证明暗下图表可读）。

### 1.4 六个主题方向（accent + 圆角性格）

| 方向 | 暗色 accent | 亮色 accent | 圆角 s/r/l | 性格 |
|---|---|---|---|---|
| **Graphite**（默认） | `#ff6a3d` | `#ff5a2c` | 5/8/11px | 纸张 + 发丝描边 + 暖橙 |
| **Aurora** | `#8b7cff` | `#6459b8` | 10/15/22px | 极光紫 × 青，大圆角 |
| **Slate** | `#4d8df6` | `#3765b1` | 8/12/16px | 石板冷静蓝 |
| **Carbon** | `#2dd4bf` | `#176e63` | 7/10/14px | 碳暖灰 × 青绿 |
| **Nocturne** | `#818cf8` | `#5d65b3` | 11/16/22px | 夜曲靛 × 紫 |
| **Amber** | `#d4632f` | `#994721` | 5/8/11px（继承） | 琥珀，只换焦点色 |

> 规则：**圆角是主题性格的第一语言**——方向切换时 accent + 圆角一起变，明/暗只变亮度不变圆角。Amber 是"部分覆盖方向"，只换 accent、surface 继承默认。

### 1.5 语法高亮（代码可读性）

**暗色**（One Dark 系）：`--hl-keyword: #c678dd`、`--hl-string: #98c379`、`--hl-number: #d19a66`、`--hl-comment: #6a6a72`、`--hl-func: #61afef`、`--hl-type: #e5c07b`、`--hl-builtin: #56b6c2`

**亮色**（GitHub 系）：`--hl-keyword: #cf222e`、`--hl-string: #0a3069`、`--hl-number: #0550ae`、`--hl-comment: #6e7781`、`--hl-func: #8250df`、`--hl-type: #116329`、`--hl-builtin: #0550ae`

> 规则：语法色随明暗切换（与主题方向无关）；代码块用 `--code-bg` 不透明岛从背景浮出，保证两种模式下对比度达标（WCAG AA）。

---

## 2. 排版

### 2.1 字号阶（`--global-font-scale` 可整体缩放）

| Token | 值 | 用途 |
|---|---|---|
| `--text-2xs` | 10px | meta、时间戳、角标、状态栏数字 |
| `--text-xs` | 11px | tab、dock tab、工具头、pill |
| `--text-sm` | 12px | 列表行、树行、按钮文字 |
| `--text-md` | 13px | 正文小字、composer 控件 |
| `--text-base` | 14px | 消息正文 |
| `--text-lg` | 15px | 次级标题、context 百分比 |
| `--text-xl` | 18px | 面板大数字 |

### 2.2 字体

- `--font-ui`：`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", "Noto Sans SC", …`（平台自适应，含中文字体）。
- `--font-mono`：`ui-monospace, "SF Mono", "Cascadia Code", Consolas, "Liberation Mono", monospace`——用于**代码、diff、工具名、文件路径、行号**。
- 规则：UI 文案用 ui 栈；一切代码/路径/数值指标用 mono 栈。状态栏数字用 `tabular-nums`（对齐）。

### 2.3 图标（lucide-react）

| 尺寸 | 用途 |
|---|---|
| 11–12px | 状态栏、mini 图标、徽章内 |
| **13–14px** | **标准控件图标**（tab、dock tab、工具头、trigger）——最常用 |
| 15–16px | 强调图标（面板标题、按钮、toolbar） |
| 18px | 主要操作（新会话 quick-action、composer 触发） |
| 22px+ | 大图标（欢迎屏、空态） |

规则：图标一律 `stroke-width` 默认 2（重要操作可 1.8）；图标色走 `currentColor` 继承文字色或 `--fg-faint`，**不用品牌色填满**（只 accent 描边）。

### 2.4 窗口 chrome

- `--app-chrome-height: 38px`（macOS 44px / themed 46px）；`--chrome-toggle-size: 42px`（sidebar/dock 切换按钮宽）。
- 标题区用 `--wails-draggable: drag` 标记 OS 拖拽手柄；可交互子元素退出 `no-drag`。

---

## 3. 形状与间距

| Token | 值 | 用途 |
|---|---|---|
| `--r-s` | 5px | 小元素（icon 按钮、chip、树行） |
| `--r` | 8px | 标准（按钮、卡片、输入框） |
| `--r-l` | 11px | 大圆角（composer 卡、palette、modal） |
| `--focus-ring` | `0 0 0 3px var(--accent-soft)` | 键盘焦点环（替代 outline） |
| 边框 | 1px `--border` / `--border-soft` | "发丝描边"分隔而非框选 |

**间距原则**：4px 网格；行高 `--list-row-height: 38px`、`--tree-row-height: 30px`；按钮高 34px（小 30px）；composer 控件高 32px。

---

## 4. 组件规则

| 组件 | 规则 | 理由 |
|---|---|---|
| **按钮** | 34px 高 / 8px 圆角 / 12px padding；primary=accent 实底、CTA=grad 渐变、danger=`--err`、sm=30px | 层级靠色彩而非尺寸堆叠 |
| **选中态** | `--accent-soft` 柔光底 + `inset 3px 0 0 var(--accent)` 左条 | 取代整圈描边，视觉更轻 |
| **list-row** | 38px / 7px；hover=`--sidebar-hover`；current=accent 柔光+左条 | 会话/历史行 |
| **tree-row** | 30px / 7px；同选中模式；`--tree-row-marker` 左条 | 文件树 |
| **pill/徽章** | 26px 高 / 999px 圆角；plan/auto/yolo 三态色 | 模式标识 |
| **diff** | 增行 `color-mix(var(--ok) 12-14%)` 底 + 实色文字；删行同理用 `--err`；行号列右对齐弱化色 | 一眼区分增删 |
| **代码块** | `--code-bg` 不透明岛 + One Dark（暗）/ GitHub 系（亮）语法色 | 从背景浮出，明暗都可读 |
| **滚动条** | 10px 宽；thumb=`color-mix(var(--fg-faint) 42%, transparent)`，hover 加深，active 混入 accent | 半透明不喧宾夺主 |
| **状态栏** | 分组指标槽位，组间 `|` 分隔，tabular-nums | 信息密集可扫描 |

---

## 5. 运动

### 5.0 动效 token（时长 + 缓动）

**时长**（`styles.css:193-197`，五档）：

| Token | 值 | 用途 |
|---|---|---|
| `--dur-fast` | 120ms | hover、tooltip |
| `--dur-base` | 180ms | popover、menu、小入场 |
| `--dur-mid` | 220ms | 内容交换、按钮内容切换 |
| `--dur-slow` | 340ms | drawer、modal、面板滑动 |
| `--dur-slower` | 420ms | 大遮罩淡入 |

**缓动**（`styles.css:197-201`）：

| Token | 值 | 语义 |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.2,0.72,0.2,1)` | 快出减速（默认） |
| `--ease-decelerate` | `cubic-bezier(0.2,0.7,0.1,1)` | 软着陆（启动屏） |
| `--ease-standard` | `cubic-bezier(0.25,0.1,0.25,1)` | 对称（默认） |
| 弹跳/overshoot | `cubic-bezier(0.34,1.56,0.64,1)` | 圆点宽度回弹 |
| palette overshoot | `cubic-bezier(0.34,1.4,0.5,1)` | 命令面板 160ms |

**运动常量**：`--motion-pop-scale: 0.98`、`--motion-rise: 4px`。

### 5.0.1 动效场景清单（32 个 @keyframes 全景）

| 场景 | 动画 | 时长/缓动 | 关键帧 |
|---|---|---|---|
| 模态弹窗 | `modal-in` | 280ms ease-out（3 段弹跳 10px→-1px→0） | 14215 |
| 命令面板 | `palette-in` | 160ms overshoot（-12px + scale .97） | 10538 |
| 抽屉 | `drawer-in` | 340ms ease-out（translateX 24px） | 10771 |
| 弹出层 | `popover-in` | 180ms ease-out（rise 4px + scale .985） | 7323 |
| 菜单 | `menu-pop-in` | 180ms ease-out（scale .98 + rise 2px） | 9720 |
| tooltip | `tooltip-in` | 120ms ease-out（translate 进入） | 9767 |
| 遮罩 | `backdrop-in/out` | 180ms ease-out（fade） | 10498 |
| 跳转条 | `jump-bar-in` | 180ms ease-out + 80ms 延迟 | 3706 |
| 提示条 | `shelf-in` | 340ms ease-out（+10px） | 8168 |
| 卡片内容 | `card-body-in` | 180ms ease-out（-4px） | 4803 |
| 消息进入 | `graphite-message-in` | 350ms ease-out（+10px） | 28503 |
| 任务条 | `todobar-in` | 180ms ease-out（rise 4px） | 20133 |
| 标签进入 | `tab-in` | 180ms ease-out（-4px） | 22651 |
| 启动屏 | `startup-splash-in` | 550ms decelerate（软着陆） | 3307 |
| 呼吸点 | `pulse` | 1.2s ease-in-out 循环 | 7779 |
| 进程扫光 | `process-sweep` | 1.2s ease-in-out 循环 | 4502 |
| 骨架屏 | `shimmer-sweep` | 5s linear 循环 | 4667 |
| 标签状态 | `tab-status-breathe` | 2.6s ease-in-out 循环 | 22721 |
| macOS 按压 | `mac-sidebar-*-press` | 260ms 弹跳 | 21655 |

### 5.0.2 性能与可访问性约束（理由）

- **只动 `transform` / `opacity`**：避免 layout/paint 重排，动画保持在合成器线程（GPU）——列表滚动、消息流式输出时帧率稳定。
- **全局 `prefers-reduced-motion` 折叠到 ~0ms**：因此 motion token 可放心复用，无需逐规则覆盖；JS `scrollTo({behavior:"smooth"})` 也应在 reduce 时改为 instant。
- **时长语义分层**：120ms 交互反馈 → 180ms 局部浮现 → 280-340ms 结构变化 → 420ms+ 环境级淡入；hover 永远 120ms，不拖长。

**规则**：弹层入场 = `scale(0.98) + translateY(-4px)` + fade（`--motion-pop-scale` / `--motion-rise`）。新动画先查 §5.0.1 是否已有同名语义，复用 keyframes 不新造。

### 5.1 z-index 层级刻度（新增浮层时按此选层）

| 层 | 值 | 用途 |
|---|---|---|
| `--z-menu` | 96 | 菜单 |
| `--z-dock` | 100 | dock 浮层 |
| `--z-modal` | 1200 | 模态框 |
| `--z-popover` | 1301 | 弹出层（tooltip、anchored popover） |
| `--z-toast` | 1302 | 通知 |
| `--z-onboarding` | 9999 | 引导遮罩 |
| `--z-crash-overlay` | 99999 | 崩溃遮罩（最顶） |

规则：新浮层按语义选层，**不临时造大数字**；弹层不用全屏遮罩挡应用。

### 5.2 工作台布局（grid 系统）

**主网格**（`.layout`）：3 行 × 2/3 列 grid。

```
grid-template-rows: var(--app-chrome-height) minmax(0, 1fr) var(--statusbar-height)
grid-template-columns: var(--sidebar-width) minmax(0, 1fr)  [dock 打开时 + minmax(0, var(--workspace-width))]
```

| 几何 token | 值 | 说明 |
|---|---|---|
| `--sidebar-width` | `clamp(264px, 18vw, 300px)` | 侧栏宽（运行时 React 注入精确 px） |
| `--workspace-width` | 420px | 右侧 dock 宽（可拖到 300-860px） |
| `--terminal-height` | 280px（默认，可拖 120-视口 50%） | 终端抽屉高 |
| `--app-chrome-height` | 38px（darwin 44 / theme 46） | 顶栏高 |
| `--statusbar-height` | `max(30px, 28px×scale)` | 状态栏高 |
| resizer | 8px | 侧栏/dock/终端拖拽把手宽 |

**布局状态变体**（class 组合驱动）：

- `layout--workspace-open`：dock 打开 → 3 列，`min-width: min(780px, 100vw)`
- `layout--workspace-maximized`：dock 最大化 → 回 2 列（dock 覆盖内容区）
- `layout--sidebar-collapsed`：侧栏折叠 → 第 1 列 `0px`
- `layout--terminal-drawer-expanded`：终端展开 → 4 行（终端占中列底部，sidebar/dock 跨 2/4 行）
- grid 过渡 `160ms ease`（macOS 280ms）

**响应式**：

- **布局级断点 `max-width: 820px`**：切单列，sidebar/dock 隐藏（sidebar 变浮动抽屉 `clamp(196px,42vw,264px)`），状态栏收缩
- **容器查询**（非 @media）：`.workbench-dock` / `.composer-card` / `.topicbar` 都是 `container-type: inline-size`
  - dock `@container ≤520px`：tab 等宽平分
  - dock `@container ≤340px`：tab 只显图标（30px）
- **组件级断点**：1180/1120/1040/980/940/900/820/760/720/620/560/520/430 多档（状态栏、tabbar、settings 各自收缩）

**规则**：新面板按 grid 语义归区（sidebar/main/footer/dock/statusbar）；不用绝对定位铺满；面板开合走 layout 状态 class，不加散点样式。

### 5.3 交互模式

**快捷键体系**（集中在 `lib/keyboardShortcuts.ts`）：

| 快捷键 | 动作 | 平台 |
|---|---|---|
| ⌘/Ctrl+K | 命令面板 | 全 |
| ⌘/Ctrl+N | 新会话 | 全 |
| ⌘/Ctrl+W | 关 Tab | 全 |
| ⌘, | 设置 | 全 |
| ⌘Y | YOLO 审批 | 全 |
| Shift+? | 快捷键速查表 | 全 |
| Shift+⌘/Ctrl+Z | 重做 | 特例 |
| Ctrl+Shift+B | 终端切换（darwin 为 ⌘+Shift+B） | 特例 |
| Ctrl+` | 终端开合 | 特例 |
| Topic 1-9 | 跳转会话 | 全 |

规则：darwin 用 ⌘、windows/linux 用 Ctrl；自定义绑定存 localStorage `reasonix.customShortcuts`；编辑区内不劫持平台 undo/redo。

**弹层关闭三件套**：所有 popover/context-menu/floating-menu 统一 **Esc + 外部 pointerdown/click + resize** 三通道关闭；portal 到 body 用 viewport 坐标 + clamp。

**决策交互**（ApprovalModal / AskCard）：

- 键盘：↑/↓ 循环、Enter 确认、数字 1-9 选行、**Esc = 停止任务**（不是关闭！）
- ApprovalModal 决策矩阵：Allow once / Allow session / Deny / 规则持久化；plan → Start/Revise；recovery → Revise/Continue
- AskCard：**选择不推进，Enter 提交**；多问逐条推进（n/m + crumbs）；←/Backspace 回上一问
- 危险操作（删除/清空）**两段式确认**（先置确认态再执行）

### 5.4 状态与数据流

**状态分层**：

| 层 | 位置 | 内容 |
|---|---|---|
| 持久化偏好 | `store/layout.ts` + `lib/*.ts` | 主题/字号/字体/布局尺寸/折叠，localStorage 键统一 `reasonix.*` |
| 瞬态覆盖层 | `store/overlays.ts` | 命令面板/设置/快捷键/onboarding 开关 |
| 会话运行态 | `lib/useController.ts` per-tab reducer | transcript/running/approval/ask/jobs 状态机 |
| 终端 | `store/terminal.ts` | 会话/workspace/错误 |
| App 级 | `App.tsx` useState | 拖拽 live 值/backgroundRuntimes/tabMetas |

**主题持久化模式**：模块级变量 + 模块加载读 localStorage → React mount 前 `init*()` 应用到 DOM 属性（**防首帧闪烁**）；localStorage 只是 early-paint cache，权威配置是后端 `DesktopStartupSettings`。

**引擎数据流**：

```
Go kernel ── agent:event (单通道, WireEvent, 20 种 kind, 含 tabId 路由) ──► onEvent ──► per-tab reducer
   ├─ ContextUsage()/Meta()/ListSessions()/ListTabs() ─► 快照类型
   └─ agent:ready / runtime:rebuilt ─► 触发前端重拉 Meta/Context/History
Browser dev ── makeMockApp() + mockScenario ──► 同一 onEvent 契约
```

规则：新 UI 数据从 bridge 快照取，不走散点轮询；事件按 `kind` 分发；`runtime:rebuilt`（model/effort/token-mode 切换）后重置 per-tab 状态。

---

## 6. Do / Don't

**Do**
- 一切颜色经 CSS 变量引用；新组件从既有 token 组合，不新造色值。
- 焦点用 `--focus-ring`（3px accent-soft 光环），可访问性达标。
- 键盘操作全覆盖：⌘K palette、↑↓ 导航、Esc 关闭。
- 选中态用"accent 左条 + 柔光"模式，保持全站一致。
- 数字/代码一律 mono + tabular-nums。
- 新面板按 grid 语义归区（§5.2），弹层按 z-index 语义选层（§5.1）。
- 浮层关闭用"Esc + 外部 pointerdown + resize"三件套（§5.3）。
- 危险操作（删除/清空）用两段式确认。
- 偏好持久化走 `reasonix.*` localStorage 键 + `init*()` mount 前应用（防闪烁，§5.4）。

**Don't**
- 不要用 `backdrop-filter` / blur（Linux WebKitGTK 性能）。
- 不要硬编码颜色（`#fff`、`#000` 直接写）——必须走 token。
- 不要拉 web 字体（离线优先）。
- 不要用全屏透明遮罩的弹出层（应让点击后不挡住应用其余部分）。
- 不要把 `#d97757` 当石墨 accent——那是旧裸 `:root` 值；Graphite 方向用 `#ff6a3d`（暗）/ `#ff5a2c`（亮）。
- 不要在决策弹层里把 Esc 当"关闭"——它= 停止任务（§5.3）。
- 不要散点轮询引擎数据——从 bridge 快照取（§5.4）。

---

## 7. 新建组件的 Checklist（供设计代理执行）

设计/实现一个新 UI 组件时，按序完成：

1. **定层级**：属于 sidebar / main / footer / dock / statusbar 哪个区？决定是否需 grid 区域（§5.2）、z-index 层（§5.1）。
2. **选 token**：颜色只从 §1 取（bg 层级 + accent 系 + fg 三阶 + border）；尺寸从 §3（radius、行高、按钮高）；字体从 §2（ui 或 mono）。
3. **选中态**：凡可选中 → `--accent-soft` 底 + `inset 3px 0 0 var(--accent)` 左条，不造新样式。
4. **焦点态**：键盘可达元素 → `--focus-ring`（`0 0 0 3px var(--accent-soft)`），替代 outline。
5. **hover 态**：`--bg-elev-2` / `--sidebar-hover` 提亮，120ms 过渡。
6. **明暗验证**：切 light/dark 确认对比度（文字 ≥ 4.5:1，状态色 ≥ 3:1）；代码块用语法色 §1.5。
7. **reduced-motion**：动画走 motion token（§5），不写死时长。
8. **可访问性**：键盘操作（Tab/Enter/Esc）、aria-label、focus 可见。
9. **多主题**：accent 走变量即自动适配 6 方向；圆角走 `--r-s/r/r-l`。
10. **浮层/弹层**：若会弹出 → portal 到 body + viewport 坐标 + clamp + 三通道关闭（Esc/外部 pointerdown/resize，§5.3）。
11. **响应式**：容器型组件声明 `container-type: inline-size`，用 @container 做内部自适应（§5.2）；宽 <820px 时随布局折叠。
12. **数据**：UI 数据从 bridge 快照取（§5.4），不散点轮询；持久化偏好走 `reasonix.*` 键。

---

## 8. 来源指引

| 文件 | 提供什么 |
|---|---|
| `reasonix-desktop-design.md` | 工作台布局全解、token 五层结构、组件清单、演进历史 |
| `reasonix-design-showcase.html` | 可交互演示：6 方向 × 明暗、组件库、token 表 |
| `reasonix-desktop-components.md` | 99 个组件完整源码 |
| `hibiki/`（工作区） | 本项目实际应用上下文（如 dock 三视图 diff 数据） |

> ⚠️ **来源冲突警示**：`reasonix-desktop-design.md` §2.3 把裸 `:root` 旧值（`--accent: #d97757` 等）标为"Graphite 默认"。这是**过时表述**——Graphite 方向实际用 `#ff6a3d`（暗）/ `#ff5a2c`（亮），见 §1.1/1.2。引用该文档时以本文件 §1 为准。
