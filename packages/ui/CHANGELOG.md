# Changelog

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

[0.1.0]: https://github.com/yourorg/reasonix/releases/tag/v0.1.0
