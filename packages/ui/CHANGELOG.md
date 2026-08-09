# Changelog

## 0.3.0

### Minor Changes

- 546e593: ### 动效画廊（showcase）

  - 33 个动效场景每卡新增 playground 属性控制：
    - 倍速选择（0.5×/1×/1.5×/2×）已有
    - **时长滑块**（10%–300%，实时覆盖默认时长，标签显示实际 ms 与百分比）
    - **缓动覆盖下拉**（默认/标准/overshoot 弹跳/decelerate 减速/linear，显示实际 cubic-bezier）
  - 时长/缓动标注改为实时值（`effectiveDur` + 实际 easing），与舞台动画一致

- 2d2eb3a: ### 新增

  - **设计令牌 JSON 导出**（Tokens Studio / DTCG 兼容）：`tokens.json` 随包发布，`@reasonix/ui/tokens.json` 可导入
    - 结构：`{ 方向: { light|dark: { 分类: { 令牌: {value, type} } } } }`
    - 6 方向 × 明暗：graphite 全量基线（36 令牌），其余方向增量覆盖
    - 5 分类：color / borderRadius / duration / easing / number
    - 同步链路：`styles.css` 唯一事实源 → `npm run tokens` 单向导出（`scripts/export-tokens.mjs`）
    - Figma 联动：Tokens Studio 插件导入即可生成 Design Tokens / Figma Variables

  ### 工程

  - subpath exports 实测验证：`@reasonix/ui/components/button` 等按组件导入 + 根入口 + d.ts 全部可用

### Patch Changes

- 37f8af5: ### 文档

  - 新增 `component-guidance.ts`：38 个组件手写设计建议（何时使用 / 设计要点 / 避免误用），引用 DESIGN.md 令牌、动效档位与可访问性规则
  - 文档站生成器接入 guidance：每个组件页"设计使用建议"从通用模板升级为定制内容
  - 修正建议中的引用：`--rx-shimmer` → `rx-shimmer` 类、carousel 循环 `opts.loop: true`

- e40ca4e: ### 文档站（新增 apps/docs）

  - 新增 Storybook 10 + Vite 发布级组件文档站 `apps/docs`（workspace `reasonix-docs`）
  - **38/38 组件**每组件文档页：可交互 Demo（复用 showcase ComponentPreview）+ 完整 API 表格（props/type/desc）+ 设计使用建议 + 可复制代码示例
  - MDX 指南页：快速开始（安装 + Tailwind v4 接入）、迁移指南（MIGRATION.md 新建）、更新日志（CHANGELOG 引入）、设计规范（DESIGN.md 引入）
  - 主题方向切换器（graphite/aurora/slate/carbon/nocturne/amber）+ 明暗，作用于全部组件 Demo
  - 根脚本：`docs:dev` / `docs:build` / `docs:preview`；`npm run build` 纳入 docs 统一构建
  - 迁移指南 `docs/MIGRATION.md`：0.1.0→0.2.0 的 subpath 导入、`--rx-accent-soft` color-mix 派生、死令牌清理、动效时长令牌化、peer 依赖变化、Tailwind `@source` 必配

- 4411a7f: ### 修复：外部项目接入缺口

  - **peerDependencies**：
    - 新增 `shadcn`（^4，提供 `data-open:/data-checked:` 等自定义 variant，13 个组件依赖）
    - 新增 `tw-animate-css`（^1，弹层进出场动画类，8 个组件依赖）
    - 移除 `next-themes`（全库无组件引用，纯冗余）
  - **exports**：新增 `./motion.css`（产物已生成但被 exports 封锁，现可导入）
  - **tsup external**：移除 next-themes
  - **文档**：
    - `README.md` 重写接入章节——明示「纯 ESM + Tailwind v4 语义类」、完整安装命令（12 peer）、Tailwind 接入（`@tailwindcss/vite` + 4 行 import 顺序 + `@source` 必配 + 勿重复 `@custom-variant dark`）、排错速查表
    - 新增 `docs/INTEGRATION.md` 独立接入指南（依赖表含缺失后果 / Vite+Next.js 接入 / 验证清单 / 内嵌令牌与 CJS 场景）

- 2e0a082: ### 展示站

  - showcase 新增「移动预览」视图：手机壳容器（390×700，灵动岛/状态栏/Home 条）内渲染全部 38 组件交互 Demo
  - 分类导航（全部/基础/表单/数据/反馈/导航）+ 前后箭头切换 + 缩放控制（70–120%，宽高同步）
  - 明暗/方向主题全局跟随；重置回到全部分类；空态 guard + 无障碍（aria-pressed/aria-label/disabled）

## 0.2.0

### Minor Changes

- 263f7c1: ### 组件

  - 新增通配符 subpath exports：可按组件独立导入 `@reasonix/ui/components/button`
  - 令牌系统优化：`--rx-accent-soft` 改为 `color-mix` 派生，方向主题自动跟随

  ### 工程

  - 接入 vitest-axe 可访问性测试
  - 组件总览页新增预览/代码双 tabs
  - 测试覆盖提升至 57%（72 用例）

### Patch Changes

- 263f7c1: ### 质量

  - 测试覆盖 39/39 组件（114→123 用例），覆盖率 84%
  - vitest-axe 可访问性断言扩展到 11 个关键交互组件（dialog/drawer/tooltip/select/command/tabs/switch/checkbox/radio-group/accordion/popover）

  ### 动效纪律

  - 全部组件动效令牌化：无硬编码时长（弹层 120ms fast / dialog 220ms mid / backdrop 420ms slower / sheet 340ms slow）
  - 可按压元素统一 `:active scale(0.97)` 反馈（Button/Tabs/Toggle）
  - `prefers-reduced-motion` 降级覆盖 5 个抽查组件（button/toggle/tabs/dialog/sheet）
  - 清除 `transition-all` 残留（badge/progress/toggle/accordion/tabs 改为精确属性）

  ### 文档

  - 展示站组件总览 API 表覆盖 38/38 组件（修复 kebab 匹配 + Toaster 别名）
  - `README.md` 补全按需导入（tree-shaking）章节

本项目遵循 [Semantic Versioning](https://semver.org/lang/zh-CN/)。
格式参照 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)。

## [0.1.0] - 2026-08-08

### Added

- **首次发布**：`@reasonix/ui` 组件库，38 个 shadcn 风格组件。
- 组件清单（按分类）：
  - 基础：Button / Badge / Card / Skeleton / Separator / Label / Avatar
  - 表单：Input / Textarea / Checkbox / RadioGroup / Switch / Select / Slider / Toggle / ToggleGroup / InputGroup / Progress
  - 数据展示：Table / Calendar / Carousel / ScrollArea / Resizable / Toaster
  - 反馈：Alert / Dialog / Drawer / Sheet / Command / Popover / HoverCard / Tooltip / DropdownMenu
  - 导航：Tabs / Accordion / Collapsible / Breadcrumb / Pagination
- **主题系统**：`styles.css` 随包发布，37 个 `--rx-*` 令牌、6 个主题方向（graphite/aurora/slate/carbon/nocturne/amber）、明暗双态。
- **动效体系**：32 个 keyframes + 28 个 `rx-anim-*` 工具类 + `prefers-reduced-motion` 降级。
- **工程化**：ESM 构建（tsup）、完整 TypeScript 类型（d.ts）、tree-shaking 支持（sideEffects 仅 css）。
- **测试**：vitest + Testing Library + jsdom（0.1.0 首发 37 用例，后续迭代至 72 用例）。

### Fixed

- Sheet 左右抽屉动画方向（满宽 340ms 滑入/滑出，消除与 radix 动画冲突）。
- Terminal 抽屉入场/退出对称动画。
- 对比度审计：faint 文字与亮色 accent 全部 ≥4.5:1（WCAG AA）。

## [Unreleased]

### Planned

- 交互 playground（属性控制条）。
- publint / arethetypeswrong 产物校验。
- 组件库文档站 llms.txt（AI-ready）。

### 版本管理（已接入）

- changesets 自动版本管理（.changeset/ 配置 + sim-version 本地模拟验证）
- release.yml：changesets/action 自动 Version PR + npm publish --provenance（OIDC）
- 组件 subpath exports（`@reasonix/ui/components/*` 独立导入）
- vitest-axe 可访问性测试 + 令牌 color-mix 派生去重

[0.1.0]: https://github.com/hoangmaituan882-hue/reasonix/releases/tag/v0.1.0
