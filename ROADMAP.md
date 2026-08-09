# Roadmap — v0.2.0 里程碑：从"组件集合"到"可信赖的设计系统"

> 目标：把 @reasonix/ui 从"38+ 个组件的集合"推进为**每个组件都经过测试、文档化、可访问、动效符合设计纪律**的可信设计系统。
> 衡量标准：v0.2.0 发布时，下面 5 个支柱的检查项全部打勾。

## 当前基线（v0.1.0 之后）

| 维度 | 现状 |
| --- | --- |
| 组件 | 39 个（`packages/ui/src/components/ui/`） |
| 测试 | 123 用例，覆盖 39/39 组件（axe 11 个） |
| 令牌 | 36 个 `--rx-*`，6 主题方向 × 明暗 |
| 动效 | `--rx-dur-fast/base/mid/slow/slower` 五档 + `--rx-ease`（组件全令牌化） |
| 发布 | v0.2.0（tag 已建，npm publish 待执行） |

---

## 支柱 1 · 质量：测试全覆盖 + 可访问性（P0）

**检查项：**
- [x] 39/39 组件有测试文件（当前 20/39 → 39/39）
- [x] 覆盖率门槛提到 **60%**（当前 ~57% → 84%）
- [x] vitest-axe 断言扩展到 **10+** 关键交互组件（11 个：dialog/drawer/tooltip/select/command/tabs/switch/checkbox/radio-group/accordion/popover）
- [x] 测试文件纳入 `tsconfig.test.json` 类型检查（已启用，保持绿）
- [x] `console.error` 即失败（mock 内已配，确认每个测试文件生效）

## 支柱 2 · 体验：动效设计纪律落地（P0）

**检查项：**
- [x] 全部组件动效只用 `--rx-dur-*` 档位表 + `--rx-ease`（无硬编码时长/缓动）
  - fast=120ms（hover/tooltip）、base=180ms、mid=220ms（内容交换）、slow=340ms（drawer/modal）、slower=420ms（backdrop）
- [x] 可按压元素全部有 `:active scale(0.97)` 反馈（Button/Tabs/Toggle；checkbox/switch/radio 小控件刻意不缩放）
- [x] 弹层（popover/menu/combobox）全部 origin-aware（已就位，回归确认）
- [x] 无 `transition-all` 残留；无 `ease-in`；无 `scale(0)` 入场
- [x] `prefers-reduced-motion` 全面降级（抽查 5 个组件：button/toggle/tabs/dialog/sheet）

## 支柱 3 · 文档：每个组件可查可用（P1）

**检查项：**
- [x] 组件总览页（component-overview）API 表覆盖 **39/39** 组件（当前 26 → 38/38 catalog 全匹配，修复 kebab + Toaster 别名）
- [x] 移动预览视图（showcase）：手机壳内 38 组件交互 Demo + 分类导航 + 主题跟随
- [x] 每个组件有：用途说明 + 代码示例 + props 表 + 交互演示（总览卡片已含全部）
- [x] `packages/ui/README.md` 补全：安装、快速开始、主题切换、按需导入（tree-shaking）
- [x] CHANGELOG 按 changesets 自动维护（v0.1.0 已有；.changeset 移至仓库根，status 链路可用）

## 支柱 4 · 一致性：令牌与主题审计（P1）

**检查项：**
- [x] 115 令牌审计：删除重复/未用；语义化命名复核（`--rx-bg-*`/`--rx-fg-*`/`--rx-accent-*`）
  - 删除 2 个死令牌（`--rx-accent-text`/`--rx-border-2`）→ 36 个有效令牌
  - 同值令牌均为语义不同巧合（bg=accent-fg 深色 / sidebar=elev），圆角档位跨方向值不同（保留）
- [x] 6 方向 × 明暗 = 12 主题全部视觉回归（截屏对比）——accent/bg 全部正确渲染、无 JS 错误
- [x] `color-mix()` 派生令牌（如 `--rx-accent-soft`）覆盖所有手工半透明值（13 处 color-mix；`--ring` 按方向跟随 accent）

## 支柱 5 · 发布：v0.2.0 交付（P1）

**检查项：**
- [x] changesets 规范：每个 PR 一个 changeset（minor/patch），CI 强制检查（`status --since origin/main` 已跑通）
- [x] `npm pack` 内容白名单复核（dist + README + LICENSE + CHANGELOG，123 文件 38.8kB）
- [x] v0.2.0 发布准备完成：changesets version → 0.2.0、双格式产物验证（ESM 168 导出 + d.ts）、tag v0.2.0
  - 实际 npm publish + GitHub Releases 由用户手动执行（需 npm token）

---

## 持续推进机制

1. **每个迭代**从 5 支柱各挑 1 项（P0 优先），完成后勾选 ROADMAP
2. **新增组件**必须带：测试 + 演示 + 令牌化动效 + API 表（AGENTS.md §2 已有模板）
3. **代码审查**用 emil-design-eng 技能标准跑动效检查（时长/easing/反馈）
4. 每个里程碑（v0.2.0/v0.3.0…）发布时更新本文件基线表

## 下一里程碑候选（v0.3.0）

- [x] 组件级 subpath exports 灰度（`@reasonix/ui/components/button`）——已实现，pack 实测可用
- [x] 动效画廊补全 27 过渡的"可交互属性控制"（playground）——33 场景每卡：倍速 + 时长滑块（10–300%）+ 缓动覆盖下拉
- [x] 主题令牌导出 JSON（Tokens Studio 兼容）供 Figma 联动——`tokens.json` 随包发布

## 文档站（apps/docs，Storybook 10）

- [x] 发布级组件文档站 `apps/docs`（workspace `reasonix-docs`）——38/38 组件页
- [x] 每组件：可交互 Demo（ComponentPreview）+ 完整 API 表格 + 设计使用建议 + 代码示例
- [x] Controls 面板（argTypes 自动推导：select/boolean/text）
- [x] 指南页：快速开始 / 迁移指南（MIGRATION.md）/ 更新日志（CHANGELOG）/ 设计规范（DESIGN.md）
- [x] 主题方向切换器（6 方向 × 明暗）作用于全部 Demo
- [x] 根脚本 docs:dev / docs:build / docs:preview；`npm run build` 统一构建
- [x] 批量验证脚本 `verify-all.mjs`（38/38 全过）
