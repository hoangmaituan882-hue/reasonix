# Roadmap — v0.2.0 里程碑：从"组件集合"到"可信赖的设计系统"

> 目标：把 @reasonix/ui 从"38+ 个组件的集合"推进为**每个组件都经过测试、文档化、可访问、动效符合设计纪律**的可信设计系统。
> 衡量标准：v0.2.0 发布时，下面 5 个支柱的检查项全部打勾。

## 当前基线（v0.1.0 之后）

| 维度 | 现状 |
| --- | --- |
| 组件 | 39 个（`packages/ui/src/components/ui/`） |
| 测试 | 76 用例，覆盖 20/39 组件 |
| 令牌 | 115 个 `--rx-*`，6 主题方向 × 明暗 |
| 动效 | `--rx-dur-fast/base/mid/slow/slower` 五档 + `--rx-ease` |
| 发布 | v0.1.0，changesets + CI + release workflow 就绪 |

---

## 支柱 1 · 质量：测试全覆盖 + 可访问性（P0）

**检查项：**
- [ ] 39/39 组件有测试文件（当前 20/39）
- [ ] 覆盖率门槛提到 **60%**（当前 ~57%）
- [ ] vitest-axe 断言扩展到 **10+** 关键交互组件（dialog/drawer/tooltip/select/combobox/tabs…）
- [ ] 测试文件纳入 `tsconfig.test.json` 类型检查（已启用，保持绿）
- [ ] `console.error` 即失败（mock 内已配，确认每个测试文件生效）

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
- [ ] 组件总览页（component-overview）API 表覆盖 **39/39** 组件（当前 26）
- [ ] 每个组件有：用途说明 + 代码示例 + props 表 + 交互演示
- [ ] `packages/ui/README.md` 补全：安装、快速开始、主题切换、按需导入
- [ ] CHANGELOG 按 changesets 自动维护（v0.1.0 已有）

## 支柱 4 · 一致性：令牌与主题审计（P1）

**检查项：**
- [ ] 115 令牌审计：删除重复/未用；语义化命名复核（`--rx-bg-*`/`--rx-fg-*`/`--rx-accent-*`）
- [ ] 6 方向 × 明暗 = 12 主题全部视觉回归（截屏对比）
- [ ] `color-mix()` 派生令牌（如 `--rx-accent-soft`）覆盖所有手工半透明值

## 支柱 5 · 发布：v0.2.0 交付（P1）

**检查项：**
- [ ] changesets 规范：每个 PR 一个 changeset（minor/patch），CI 强制检查（已配 status）
- [ ] `npm pack` 内容白名单复核（dist + README + LICENSE + CHANGELOG）
- [ ] v0.2.0 发布 + GitHub Releases + 双格式产物验证（ESM + d.ts）

---

## 持续推进机制

1. **每个迭代**从 5 支柱各挑 1 项（P0 优先），完成后勾选 ROADMAP
2. **新增组件**必须带：测试 + 演示 + 令牌化动效 + API 表（AGENTS.md §2 已有模板）
3. **代码审查**用 emil-design-eng 技能标准跑动效检查（时长/easing/反馈）
4. 每个里程碑（v0.2.0/v0.3.0…）发布时更新本文件基线表

## 下一里程碑候选（v0.3.0）

- 组件级 subpath exports 灰度（`@reasonix/ui/button`）
- 动效画廊补全 27 过渡的"可交互属性控制"（playground）
- 主题令牌导出 JSON（Tokens Studio 兼容）供 Figma 联动
