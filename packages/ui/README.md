# @reasonix/ui

Reasonix 设计系统组件库 —— 38 个 shadcn 风格组件，带多方向主题、动效令牌与设计规范。

> 一套共享产品语言：主题令牌、组件与动效的开箱即用集合。

## ✨ 特性

- **39 个组件**（含 DownloadButton 下载按钮）：基础 / 表单 / 数据展示 / 反馈 / 导航，全覆盖
- **6 方向主题**：graphite / aurora / slate / carbon / nocturne / amber × 明暗双态
- **36 个设计令牌**：`--rx-*` 色彩 / 圆角 / 动效时长 / 缓动
- **动效体系**：32 个 keyframes + reduced-motion 降级
- **无障碍**：对比度 WCAG AA、键盘可达、focus ring
- **Tree-shaking**：ESM 构建，sideEffects 仅 css
- **完整类型**：d.ts 随包发布

## 📦 安装

> ⚠️ 本包为**纯 ESM + Tailwind CSS v4 语义类**组件库：JS 产物保留 tailwind 类名（`bg-primary`、`dark:bg-input/30`），但**样式不自动生效**——宿主项目必须自己搭 Tailwind v4 编译管线（见下）。

```bash
# 1. 组件库本体
npm install @reasonix/ui

# 2. peerDependencies（12 个，dist 运行时引用，缺一即崩）
npm install react react-dom tailwindcss radix-ui vaul sonner cmdk \
  react-day-picker react-resizable-panels embla-carousel-react \
  shadcn tw-animate-css

# 3. Tailwind v4 的构建插件（Vite 场景）
npm install -D @tailwindcss/vite
```

> 注意：本包为纯 ESM。CJS 消费方需使用动态 `import()` 或配置 bundler 的 ESM 支持。

## 🛠 Tailwind v4 接入（必做，跳过则组件裸奔）

组件类（`bg-primary` / `h-8` / `animate-in` / `data-open:*`…）由**你的 Tailwind 引擎**生成，本包不预编译。

**① vite.config.ts 加插件：**

```ts
import tailwindcss from '@tailwindcss/vite'
// plugins: [react(), tailwindcss()]
```

**② 项目 CSS 入口（如 `src/index.css`）顶部按顺序：**

```css
@import "tailwindcss";
@import "tw-animate-css";           /* 弹层进出场动画类（animate-in/fade-in/zoom-in…） */
@import "shadcn/tailwind.css";      /* data-open/data-closed/data-checked 等自定义 variant */
@import "@reasonix/ui/styles.css";  /* 令牌 + 6 方向主题 + rx-* 规则 + keyframes */
@source "../node_modules/@reasonix/ui/dist";  /* 必配！Tailwind 4 默认不扫 node_modules */
```

> **为什么必须 `@source`**：Tailwind v4 自动扫描会忽略 `node_modules` 与 `.gitignore` 文件。不指向包产物，组件里的类一个都不会生成。
> **不要重复定义** `@custom-variant dark`（styles.css 已含）；若你的项目模板自带，删掉再引 styles.css。

## 🚀 快速开始

```tsx
// 1. 入口引入主题（根部一次；已通过 @import 引入则无需再 import）
import '@reasonix/ui/styles.css'

// 2. 引入组件
import { Button, Tabs, TabsList, TabsTrigger, TabsContent } from '@reasonix/ui'
// 或按组件 subpath 导入（更细粒度 tree-shaking）：
// import { Button } from '@reasonix/ui/components/button'

function App() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">标签一</TabsTrigger>
        <TabsTrigger value="tab2">标签二</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">内容一</TabsContent>
      <TabsContent value="tab2">内容二</TabsContent>
    </Tabs>
  )
}
```

### 排错速查

| 症状 | 原因 | 解决 |
|---|---|---|
| 组件无样式（布局/颜色裸奔） | 缺 `@source` | 在 CSS 加 `@source "../node_modules/@reasonix/ui/dist"` |
| 弹层无进出场动画 | 缺 `tw-animate-css` | `@import "tw-animate-css"` |
| `data-open:`/`data-checked:` 变体失效 | 缺 shadcn variant | `@import "shadcn/tailwind.css"` |
| `dark:` 变体报重复定义 | 你重复写了 `@custom-variant dark` | 删掉你自己的定义，依赖 styles.css |
| 编译报 `@theme`/`@source` 语法错误 | Tailwind 版本不对 | 必须 Tailwind **v4**（`^4.0.0`） |
| `Invalid hook call` / `useRef is null` | React 双实例（本地 file: 引用 / monorepo 常见） | vite 加 `resolve: { dedupe: ['react', 'react-dom', 'react/jsx-runtime'] }` |
| `ERESOLVE`（shadcn 缺 babel peer） | shadcn 依赖 babel 工具链 | 补 `npm install -D @babel/core` |

## 🎨 主题切换

```tsx
// 6 个方向：graphite / aurora / slate / carbon / nocturne / amber
document.documentElement.setAttribute('data-direction', 'aurora')

// 明暗：.dark class（默认无 = 浅色）
document.documentElement.classList.toggle('dark')
```

## 🧩 组件清单

| 分类 | 组件 |
|---|---|
| 基础 | Button · DownloadButton · Badge · Card · Skeleton · Separator · Label · Avatar |
| 表单 | Input · Textarea · Checkbox · RadioGroup · Switch · Select · Slider · Toggle · ToggleGroup · InputGroup · Progress |
| 数据 | Table · Calendar · Carousel · ScrollArea · Resizable · Toaster |
| 反馈 | Alert · Dialog · Drawer · Sheet · Command · Popover · HoverCard · Tooltip · DropdownMenu |
| 导航 | Tabs · Accordion · Collapsible · Breadcrumb · Pagination |

## ⚡ 按需导入（Tree-shaking）

本包为 ESM 单入口 + `sideEffects: ["**/*.css"]`。用命名导入即可让 bundler（Vite / Rollup / webpack 4+）摇掉未使用的组件：

```tsx
// ✅ 只打包用到的组件（推荐）
import { Button, Dialog } from '@reasonix/ui'

// ⚠️ 避免整包导入（破坏 tree-shaking）
// import * as ui from '@reasonix/ui'
```

- **CSS**：`import '@reasonix/ui/styles.css'` 是必需的（令牌 + 组件样式），它很小（~22KB，含 36 令牌与 32 keyframes）。
- **图标**：组件内部用 `lucide-react`，按需 tree-shake。
- **按需路由懒加载**（配合 `React.lazy`）时，CSS 只需在应用根部导入一次。

> v0.3.0 计划：组件级 subpath exports（`@reasonix/ui/button`），届时 CSS 也按组件拆分。

## 🎨 Figma 联动（Tokens Studio）

设计令牌以 Tokens Studio（DTCG）兼容 JSON 随包发布：

```bash
# 1. 安装包后直接取用
import tokens from '@reasonix/ui/tokens.json'   // 或从 node_modules 读文件

# 2. 本地重新生成（改了 styles.css 后）
npm run tokens   # 或 node scripts/export-tokens.mjs
```

`tokens.json` 结构——`{ 方向: { light|dark: { 分类: { 令牌: {value, type} } } } }`：

```json
{
  "graphite": {
    "light": {
      "color": { "accent": { "value": "#c93918", "type": "color" } },
      "borderRadius": { "r-m": { "value": "8px", "type": "borderRadius" } },
      "duration": { "dur-fast": { "value": "120ms", "type": "duration" } },
      "easing": { "ease": { "value": "cubic-bezier(0.2, 0.72, 0.2, 1)", "type": "easing" } }
    }
  }
}
```

- **6 方向 × 明暗**：graphite 为全量基线（36 令牌），其余方向为增量覆盖（跟随 CSS `data-direction` 语义）
- **Figma 用法**：Figma 插件「Tokens Studio」→ 导入 JSON → 生成 Design Tokens 同步样式变量；配合 [Figma Variables](https://help.figma.com/hc/en-us/articles/15345957129239) 可实现明暗/方向一键切换
- **同步链路**：`styles.css` 是唯一事实源，`export-tokens.mjs` 单向导出，避免双份手写

## 📚 文档站

完整组件文档（38/38 可交互 Demo + API 表格 + 设计建议 + 代码示例）见仓库 `apps/docs`（Storybook）：

```bash
npm install
npm run docs:dev      # 本地开发（http://localhost:6006）
npm run docs:build    # 静态构建（apps/docs/storybook-static）
```

另有独立指南：
- [迁移指南](../../docs/MIGRATION.md) — 0.1.0→0.2.0 升级要点
- [接入指南](../../docs/INTEGRATION.md) — 外部项目接入完整步骤

## 🧑‍💻 开发

```bash
npm run build       # tsup 构建（ESM + d.ts + css）
npm test            # vitest 测试
npm run test:watch  # 测试监听
npm run test:coverage
npm pack            # 打包发布
```

## 📐 设计规范

设计令牌的完整规范见 [DESIGN.md](../../docs/DESIGN.md)（9 章：身份 / 色彩 / 排版 / 形状 / 运动 / DoDon't / Checklist）。

## 📄 License

MIT
