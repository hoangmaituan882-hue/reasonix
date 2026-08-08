# apps/showcase — Reasonix 展示站

8 页交互展示站（React 19 + Tailwind v4 + shadcn 模式），可视化展示 `@reasonix/ui` 组件库。

## 页面

| 视图 | 文件 | 说明 |
|---|---|---|
| 欢迎 | `welcome.tsx` | 门户首页（统计/快捷入口/设计文档章节） |
| 组件库介绍 | `intro-page.tsx` | 介绍页（特性/组件矩阵/6 方向/快速开始） |
| 设计文档 | `design-doc.tsx` | DESIGN.md 渲染（react-markdown） |
| 工作台 | `workbench.tsx` | 工作台 mock（消息流/tool 卡/jump-bar） |
| 组件库 | `showcase.tsx` | **38 组件分类演示 + 跳转侧边栏** |
| 组件总览 | `component-overview.tsx` | 组件卡（预览/代码双 tabs + API 表） |
| 过渡画廊 | `transition-gallery.tsx` | 27 个过渡动画演示 |
| 动效画廊 | `motion-gallery.tsx` | 33 个动效场景 |

## 架构要点

- **组件单一来源**：`@/components/ui` → `packages/ui/src/components/ui`（vite alias），**禁止**本地组件副本
- **React 单实例**：vite alias 统一 react/react-dom/radix-ui/sonner/vaul 等到 showcase node_modules
- **令牌共享**：`index.css` 与 packages/ui 的 `styles.css` 同步（37 令牌 + 6 方向）

## 命令

```bash
npm run dev          # 开发（http://localhost:5299）
npm run build        # vite build（多文件）
npm run build:single # 单文件 → 自动复制到 ../../showcase/reasonix-shadcn-design.html
npm run lint         # oxlint
```

## 交付

`build:single` 产物 `../../showcase/reasonix-shadcn-design.html` 是可双击打开的完整 SPA（1.2MB 自包含）。
