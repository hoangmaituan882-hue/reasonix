# 接入指南 — 在另一个项目中使用 @reasonix/ui

> 面向**外部项目**（如 AI 编程的软件前端）的完整接入文档。
> 假设：Vite + React + Tailwind v4 技术栈（其他栈见文末"其他场景"）。

---

## 0. 前置认知（务必先读）

`@reasonix/ui` 是**「纯 ESM + Tailwind v4 语义类」**组件库：

- ✅ JS 产物里保留完整 tailwind 类名（`bg-primary`、`dark:bg-input/30`、`data-open:animate-in`…）
- ❌ 但**不预编译样式、没有 tailwind 插件**——组件类由**你项目的 Tailwind 引擎**扫描生成
- ❌ 包内 `styles.css` 只含令牌 + 主题 + `rx-*` 规则 + keyframes，**不含工具类**

所以接入 = **装依赖 → 搭 Tailwind v4 → 配 `@source` 扫描 → 引主题 + 组件**。

---

## 1. 安装依赖

```bash
# 组件库本体
npm install @reasonix/ui

# peerDependencies（12 个，dist 运行时 import，缺一即崩）
npm install react react-dom tailwindcss radix-ui vaul sonner cmdk \
  react-day-picker react-resizable-panels embla-carousel-react \
  shadcn tw-animate-css

# Tailwind v4 构建插件
npm install -D @tailwindcss/vite
```

| 依赖 | 用途 | 缺失后果 |
|---|---|---|
| `react` / `react-dom` | 运行时（^18 \|\| ^19） | 直接崩 |
| `tailwindcss` ^4 | 组件类编译 | 组件裸奔 |
| `radix-ui` | 13 个组件底层（聚合包） | 交互组件崩 |
| `vaul` / `sonner` / `cmdk` / `react-day-picker` / `react-resizable-panels` / `embla-carousel-react` | 对应组件（Drawer/Toaster/Command/Calendar/Resizable/Carousel） | 对应组件崩 |
| `shadcn` ^4 | `data-open:/data-checked:` 等自定义 variant | 弹层状态变体失效 |
| `tw-animate-css` | `animate-in/fade-in/zoom-in/slide-in-*` 类 | 弹层无进出场动画 |

> ⚠️ `shadcn` 与 `tw-animate-css` 是**容易漏装的两个**——它们不在 README 旧版的安装命令里，但组件大量依赖。

---

## 2. Tailwind v4 接入

### 2.1 vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 2.2 项目 CSS 入口（src/index.css）——顺序重要

```css
@import "tailwindcss";
@import "tw-animate-css";           /* 弹层进出场动画 */
@import "shadcn/tailwind.css";      /* data-open / data-closed / data-checked 等 */
@import "@reasonix/ui/styles.css";  /* 令牌 + 6 方向主题 + rx-* 规则 + 32 keyframes */
@source "../node_modules/@reasonix/ui/dist";  /* ★ 必配：让 Tailwind 扫到组件的类 */
```

**为什么必须 `@source`？**
Tailwind v4 自动扫描**忽略 `node_modules`**（与 .gitignore 规则）。不写这行，组件里的 `bg-primary`、`h-8` 等类一个都不会生成 → 组件"裸奔"（无布局/无颜色）。

**关于 `@custom-variant dark`：**
`styles.css` 已含 `@custom-variant dark (&:is(.dark *))`。**不要在你项目里重复定义**——若模板自带（很多 shadcn 模板有），删掉再引 styles.css，否则 Tailwind v4 报重复定义。

---

## 3. 引入主题与组件

```tsx
// main.tsx（根部一次）
import '@reasonix/ui/styles.css'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(<App />)
```

```tsx
// 组件两种导入方式
import { Button, Dialog } from '@reasonix/ui'                        // 整入口（tree-shaking 仍生效）
import { Button } from '@reasonix/ui/components/button'              // subpath（最细粒度）
```

### 3.1 主题切换

```ts
// 6 方向：graphite（默认）/ aurora / slate / carbon / nocturne / amber
document.documentElement.setAttribute('data-direction', 'aurora')

// 明暗：.dark class（默认无 = 浅色）
document.documentElement.classList.toggle('dark')
```

方向切换只改 `--accent*` + 圆角（主题性格第一语言）；明暗只变亮度。二者叠加即 12 主题。

---

## 4. 验证清单（接入后自测）

| 检查项 | 期望 | 失败排查 |
|---|---|---|
| 页面有全局背景色 | 石墨浅色 `#f4f3ef` | ① `@import` 顺序 ② 是否重复 `@custom-variant dark` |
| Button 有橙色底 | `bg-primary` = `#ff5a2c`（亮） | 缺 `@source` |
| 打开 Dialog 有缩放/淡入 | 120–220ms 过渡 | 缺 `tw-animate-css` |
| Dialog 打开后遮罩变体生效 | `data-open:` 样式 | 缺 `shadcn/tailwind.css` |
| 切 `data-direction` 变紫色 | aurora accent `#6459b8` | styles.css 未引入或方向名写错 |
| 控制台无 peer 警告 | — | 补装缺失 peer |
| `Invalid hook call` / `useRef is null` | React 双实例（本地 file: 引用 / monorepo 常见） | vite 加 `resolve: { dedupe: ['react', 'react-dom', 'react/jsx-runtime'] }` |
| `ERESOLVE`（shadcn 缺 babel peer） | shadcn 依赖 babel 工具链 | 补 `npm install -D @babel/core` |

---

## 5. 其他场景

### 5.1 Next.js（App Router）

```bash
npm install -D @tailwindcss/postcss
```

```js
// postcss.config.mjs
export default { plugins: { '@tailwindcss/postcss': {} } }
```

```css
/* app/globals.css —— 同样 4 行 import + @source 指向 node_modules/@reasonix/ui/dist */
```

### 5.2 不用 tailwind？—— 内嵌令牌模式

把 `styles.css` 内容**整份复制**进你的 `index.css`（showcase 即此做法），然后：
- JS 组件照常 import（dist 引用）
- 工具类部分（`bg-primary` 等）仍需 tailwind 生成——**无法完全绕开 tailwind**，除非接受组件样式降级（仅令牌/rx-* 生效）

### 5.3 CJS 项目

纯 ESM 包：用动态 `import('@reasonix/ui')` 或配置 bundler ESM 支持。

---

## 6. 相关资源

| 资源 | 位置 |
|---|---|
| 设计令牌 JSON（Figma/Tokens Studio 可导入） | `@reasonix/ui/tokens.json` |
| 动效 CSS（keyframes 独立版，可选） | `@reasonix/ui/motion.css` |
| 设计规范（9 章视觉语言） | 仓库 `docs/DESIGN.md` |
| 完整组件 API 表 | 仓库 showcase → 组件总览 |
| 设计令牌明细（36 个，6 方向×明暗） | 仓库 `packages/ui/tokens.json` |
