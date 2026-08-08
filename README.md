# Reasonix 设计系统

一套共享产品语言：**主题令牌、组件与动效**的开箱即用集合。

## 📦 仓库结构

```
reasonix-design-kit/
├── packages/ui/          → @reasonix/ui 组件库（可发布 npm 包）
│   ├── src/components/      38 个组件 + 19 个测试文件
│   ├── src/styles.css       37 令牌 + 6 方向主题
│   └── .changeset/          changesets 版本管理
├── apps/showcase/        → 展示站源码（React 19 + Tailwind v4 + shadcn）
├── showcase/             → HTML 交付物（双击即开）
│   └── index.html            ★ 可视化文件结构导航（从这里开始）
├── docs/                 → 设计规范文档
│   ├── DESIGN.md            9 章设计规范
│   └── reasonix-desktop-*.md  桌面端设计 + 99 组件源码
├── scripts/              → 生成脚本
└── .github/workflows/    → CI + Release 流水线
```

## 🚀 快速浏览

| 入口 | 说明 |
|---|---|
| [showcase/index.html](showcase/index.html) | ★ 文件结构可视化导航 |
| [showcase/reasonix-ui-intro.html](showcase/reasonix-ui-intro.html) | 组件库介绍页 |
| [showcase/reasonix-shadcn-design.html](showcase/reasonix-shadcn-design.html) | 8 页交互展示站（SPA） |
| [showcase/reasonix-components-showcase.html](showcase/reasonix-components-showcase.html) | 97 组件讲解 |
| [docs/DESIGN.md](docs/DESIGN.md) | 设计规范（9 章） |

## 📊 核心数据

- **38 组件**（基础 / 表单 / 数据 / 反馈 / 导航）
- **37 令牌** + **6 方向主题** × 明暗双态
- **72 测试用例** / 57% 覆盖率 / axe a11y
- **32 动效 keyframes** + reduced-motion

## 🧑‍💻 开发

```bash
# 组件库
cd packages/ui
npm install && npm test && npm run build

# 展示站
cd apps/showcase
npm install && npm run dev
```

## 📄 License

MIT
