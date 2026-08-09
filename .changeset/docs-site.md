---
"@reasonix/ui": patch
---

### 文档站（新增 apps/docs）

- 新增 Storybook 10 + Vite 发布级组件文档站 `apps/docs`（workspace `reasonix-docs`）
- **38/38 组件**每组件文档页：可交互 Demo（复用 showcase ComponentPreview）+ 完整 API 表格（props/type/desc）+ 设计使用建议 + 可复制代码示例
- MDX 指南页：快速开始（安装 + Tailwind v4 接入）、迁移指南（MIGRATION.md 新建）、更新日志（CHANGELOG 引入）、设计规范（DESIGN.md 引入）
- 主题方向切换器（graphite/aurora/slate/carbon/nocturne/amber）+ 明暗，作用于全部组件 Demo
- 根脚本：`docs:dev` / `docs:build` / `docs:preview`；`npm run build` 纳入 docs 统一构建
- 迁移指南 `docs/MIGRATION.md`：0.1.0→0.2.0 的 subpath 导入、`--rx-accent-soft` color-mix 派生、死令牌清理、动效时长令牌化、peer 依赖变化、Tailwind `@source` 必配
