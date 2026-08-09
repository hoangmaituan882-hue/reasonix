import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-uuHvYYDH.js";import{a as i,o as a}from"./blocks-B4FM9bBC.js";var o;function s(){return(s=e((()=>{o=`# Changelog

## 0.2.0

### Minor Changes

- 263f7c1: ### 组件

  - 新增通配符 subpath exports：可按组件独立导入 \`@reasonix/ui/components/button\`
  - 令牌系统优化：\`--rx-accent-soft\` 改为 \`color-mix\` 派生，方向主题自动跟随

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
  - 可按压元素统一 \`:active scale(0.97)\` 反馈（Button/Tabs/Toggle）
  - \`prefers-reduced-motion\` 降级覆盖 5 个抽查组件（button/toggle/tabs/dialog/sheet）
  - 清除 \`transition-all\` 残留（badge/progress/toggle/accordion/tabs 改为精确属性）

  ### 文档

  - 展示站组件总览 API 表覆盖 38/38 组件（修复 kebab 匹配 + Toaster 别名）
  - \`README.md\` 补全按需导入（tree-shaking）章节

本项目遵循 [Semantic Versioning](https://semver.org/lang/zh-CN/)。
格式参照 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.1.0/)。

## [0.1.0] - 2026-08-08

### Added

- **首次发布**：\`@reasonix/ui\` 组件库，38 个 shadcn 风格组件。
- 组件清单（按分类）：
  - 基础：Button / Badge / Card / Skeleton / Separator / Label / Avatar
  - 表单：Input / Textarea / Checkbox / RadioGroup / Switch / Select / Slider / Toggle / ToggleGroup / InputGroup / Progress
  - 数据展示：Table / Calendar / Carousel / ScrollArea / Resizable / Toaster
  - 反馈：Alert / Dialog / Drawer / Sheet / Command / Popover / HoverCard / Tooltip / DropdownMenu
  - 导航：Tabs / Accordion / Collapsible / Breadcrumb / Pagination
- **主题系统**：\`styles.css\` 随包发布，37 个 \`--rx-*\` 令牌、6 个主题方向（graphite/aurora/slate/carbon/nocturne/amber）、明暗双态。
- **动效体系**：32 个 keyframes + 28 个 \`rx-anim-*\` 工具类 + \`prefers-reduced-motion\` 降级。
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
- 组件 subpath exports（\`@reasonix/ui/components/*\` 独立导入）
- vitest-axe 可访问性测试 + 令牌 color-mix 派生去重

[0.1.0]: https://github.com/hoangmaituan882-hue/reasonix/releases/tag/v0.1.0
`})))()}function c(e){let t={h1:`h1`,...n(),...e.components};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i,{title:`指南/更新日志`}),`
`,(0,u.jsx)(t.h1,{id:`更新日志changelog`,children:`更新日志（CHANGELOG）`}),`
`,(0,u.jsx)(`pre`,{style:{fontSize:13,lineHeight:1.7,whiteSpace:`pre-wrap`,fontFamily:`var(--font-mono)`},children:o})]})}function l(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,u.jsx)(t,{...e,children:(0,u.jsx)(c,{...e})}):c(e)}var u;function d(){return(d=e((()=>{u=t(),r(),a(),s()})))()}d();export{l as default};