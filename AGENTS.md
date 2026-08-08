# AGENTS.md — AI 编程代理规范

> 本文件是 AI 编程代理（Reasonix / Cursor / Copilot 等）在本仓库工作的**唯一权威规范**。
> 每次新增、修改、重构、测试、发布组件前，先读本文件并严格遵守。

---

## 0. 仓库地图

```
reasonix-design-kit/
├── packages/ui/            → @reasonix/ui 组件库（唯一组件来源，可发布）
│   ├── src/components/ui/      38 个组件 + 19 个测试文件（colocate）
│   ├── src/lib/utils.ts        cn() 工具
│   ├── src/styles.css          37 个 --rx-* 令牌 + 6 方向主题 + 32 keyframes
│   ├── src/index.ts            统一导出入口
│   ├── .changeset/             changesets 版本变更集
│   └── scripts/                copy-css / gen-exports / sim-version
├── apps/showcase/          → 展示站源码（从 packages/ui 源码导入组件，无副本！）
├── showcase/               → HTML 交付物（双击即开，含可视化导航 index.html）
├── docs/                   → 设计规范（DESIGN.md 9 章 + 桌面端文档）
├── assets/readme/          → README 视觉资产（SVG）
└── .github/workflows/      → CI（ui + showcase 双 job）+ Release（changesets）
```

**红线**：`apps/showcase` 不持有组件副本——通过 vite alias `@/components/ui` → `packages/ui/src/components/ui` 导入。**禁止**在 showcase 里创建组件文件。

---

## 1. 设计令牌体系（styles.css）

### 令牌分类（37 个唯一 `--rx-*`）

| 分类 | 令牌 | 说明 |
|---|---|---|
| 背景 | `--rx-bg` / `--rx-bg-soft` / `--rx-bg-elev` / `--rx-bg-elev-2` | 层级递进 |
| 侧栏 | `--rx-sidebar` / `--rx-sidebar-hover` | |
| 前景 | `--rx-fg` / `--rx-fg-dim` / `--rx-fg-faint` | 层级递进 |
| 边框 | `--rx-border` / `--rx-border-2` / `--rx-border-soft` | |
| 强调 | `--rx-accent` / `--rx-accent-strong` / `--rx-accent-soft` / `--rx-accent-fg` / `--rx-accent-text` | 软色用 `color-mix` 派生 |
| 语义 | `--rx-ok` / `--rx-warn` / `--rx-err` / `--rx-danger` | |
| 圆角 | `--rx-r-s(5)` / `--rx-r-m(8)` / `--rx-r-l(11)` / `--rx-r-pill(999)` | 方向块可覆盖 |
| 时长 | `--rx-dur-fast(120)` / `base(180)` / `slow(340)` / `slower(420)` | ms |
| 缓动 | `--rx-ease` / `-decelerate` / `-standard` / `-overshoot` / `-palette` | |

### 6 主题方向
`graphite 石墨 #ff6a3d` · `aurora 极光 #8b7cff` · `slate 石板 #4d8df6` · `carbon 碳 #2dd4bf` · `nocturne 夜曲 #818cf8` · `amber 琥珀 #d4632f`

- 主题切换 = `document.documentElement.setAttribute('data-direction', '<id>')`
- 明暗 = `.dark` class（无 = 浅色）
- 方向块只覆盖 accent 系 + 圆角，**不重复整块**

### 硬性规则
1. **禁止硬编码颜色/圆角/时长**——一律 `var(--rx-*)`
2. 新组件样式用 `var(--rx-*)` + tailwind 语义令牌（`bg-primary` 等）
3. 动效时长必须从 `--rx-dur-*` 取，缓动从 `--rx-ease-*` 取
4. 新增令牌：先确认不重复，再在 `:root` 定义 + 各方向块按需覆盖

---

## 2. 组件开发规范

### 新增组件步骤
1. **确认在 `packages/ui/src/components/ui/`**（唯一位置）
2. 看 shadcn 官方实现作基底（本项目 = shadcn v4 风格：`"use client"` + radix-ui 聚合包导入）
3. 命名：`kebab-case.tsx`，组件 PascalCase，导出 `{ Xxx }` + 变体 `xxxVariants`
4. 样式：`cn()` 合并 + `data-slot` 标记 + `data-*` 状态属性
5. 写测试 `xxx.test.tsx`（colocate）
6. 加导出到 `src/index.ts`（按分类分组）
7. 跑验证（见 §5）

### 组件结构模板
```tsx
"use client"
import * as React from "react"
import { XxxPrimitive } from "radix-ui"  // 或原生元素
import { cn } from "@/lib/utils"

function Xxx({ className, ...props }: React.ComponentProps<typeof XxxPrimitive.Root>) {
  return (
    <XxxPrimitive.Root
      data-slot="xxx"
      className={cn("...", className)}
      {...props}
    />
  )
}
export { Xxx }
```

### 依赖选择
| 场景 | 用 |
|---|---|
| 弹层/菜单/开关等交互 | `radix-ui` 聚合包（本项目统一） |
| 移动端抽屉 | `vaul` |
| 日历 | `react-day-picker` |
| 轮播 | `embla-carousel-react` |
| 命令面板 | `cmdk` |
| 通知 | `sonner` |
| 纯展示 | 原生元素 + cva |

**新增依赖**：必须同步更新 `package.json` 的 `dependencies`（运行时）+ `tsup.config.ts` 的 `external` 列表。

---

## 3. 测试规范（vitest + RTL + jsdom）

### 环境
- `vitest.config.ts`：jsdom + setup（mock matchMedia/scrollIntoView/ResizeObserver）
- 断言用 Testing Library 语义查询：`getByRole` > `getByLabelText` > `getByText`
- `vitest-axe` 已接入：交互组件可加 `expect(await axe(container)).toHaveNoViolations()`

### 测试要求
1. **每个组件至少 3 个断言**（渲染 + 交互 + 状态）
2. 用 `userEvent`（不是 fireEvent）模拟真实用户
3. 键盘可达测试（Tab/Arrow/Escape）——radix 组件必须测
4. **禁止**自反断言（`className.toContain(xxxVariants({}))`）——改用公开属性 `data-variant`/`data-size`
5. **禁止**硬编码 sleep——用 `waitFor` / `findBy`
6. radix 懒渲染内容：非激活元素用 `queryBy*` + `not.toBeInTheDocument()`

### 覆盖率门槛（vitest.config.ts 已配置）
- lines/functions/statements ≥ 45%，branches ≥ 40%
- 新增组件必须带测试，不得拉低覆盖率

---

## 4. 构建与发布规范

### 命令（在 `packages/ui/`）
```bash
npm run typecheck      # prod + test 双 tsconfig
npm run lint           # oxlint src（0 warning 要求）
npm test               # vitest run
npm run test:coverage  # 覆盖率（门槛检查）
npm run build          # tsup：ESM + d.ts + 38 组件 subpath exports + styles.css
npm pack               # 发布包（含 dist + README + CHANGELOG + LICENSE）
```

### 展示站（在 `apps/showcase/`）
```bash
npm run dev            # 开发（http://localhost:5299）
npm run build          # vite build（组件从 packages/ui 源码导入）
npm run build:single   # 单文件 → 自动复制到 showcase/reasonix-shadcn-design.html
```

### 发布流程（changesets）
1. 每次改动加变更集：`npm run changeset`（选 minor/patch）
2. 合并后 `changesets/action` 自动开 Version PR + 发布
3. 版本语义：`breaking → major` / `新组件/特性 → minor` / `修复 → patch`

### 质量门禁（CI 强制）
- packages/ui：typecheck → lint(0 warn) → test(72+) → coverage(≥45%) → build → pack
- apps/showcase：lint → build → build:single → 产物验证

---

## 5. AI 工作流（每次改动必做）

```
1. 改代码（遵守 §1-§3）
2. cd packages/ui && npm run typecheck && npm run lint
3. npm test（新增/改动组件跑对应测试文件）
4. npm run test:coverage（确认未拉低门槛）
5. npm run build（确认产物生成）
6. 展示站改动：cd apps/showcase && npm run build（+ build:single 若改单文件）
7. 浏览器实测（Playwright）：交互 + 明暗 + 方向切换 + 无 JS 错误
8. 加 changeset 变更集
9. git commit（规范信息）→ push
```

### 浏览器实测模式（Playwright）
```js
const browser = await chromium.launch()
const p = await browser.newPage({ viewport: { width: 1440, height: 900 } })
p.on('pageerror', e => errors.push(String(e)))  // 必须断言无错误
await p.goto('http://localhost:5299/')
```

---

## 6. 设计纪律（Review 强制）

- [ ] 无硬编码色值/圆角/时长（全 `var(--rx-*)`）
- [ ] 对比度 ≥ 4.5:1（WCAG AA）
- [ ] 键盘可达（focus ring + Tab 顺序）
- [ ] `prefers-reduced-motion` 降级
- [ ] 组件层用语义令牌，`--rx-*` 只在主题层
- [ ] 无 console.error / 无 JS 错误
- [ ] 测试用语义查询，非实现细节
- [ ] 不引入未同步的依赖（package.json + external 双更新）

---

## 7. 常见陷阱

| 陷阱 | 正确做法 |
|---|---|
| 在 showcase 建组件副本 | 从 packages/ui 导入（红线） |
| 硬编码 `#ff6a3d` | `var(--rx-accent)` |
| `className.toContain(variant)` 自反断言 | `data-variant` 属性 |
| `setTimeout(100)` 等待 | `waitFor` / `findBy` |
| 改动不跑全链路 | 走 §5 工作流 |
| 不加 changeset | 发布会丢失变更记录 |
