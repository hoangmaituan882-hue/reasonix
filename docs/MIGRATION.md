# 迁移指南 — @reasonix/ui

> 从旧版本升级到新版时的变更说明与操作步骤。
> 当前最新版本：**0.2.0**（含未发布 changeset 将升至 0.3.0）。

---

## 从 0.1.0 → 0.2.0

### 1. 导入方式：subpath exports（推荐，非强制）

0.2.0 新增**组件级 subpath exports**，可按组件独立导入：

```tsx
// 旧（0.1.0）：只能从根入口导入
import { Button } from '@reasonix/ui'

// 新（0.2.0+）：支持按组件导入（更细粒度 tree-shaking）
import { Button } from '@reasonix/ui/components/button'
```

两种方式并存，根入口导入**仍然可用**，无需强制迁移。按组件导入适合：

- 只想用少数几个组件（减小首屏包体）
- 组件级懒加载（`React.lazy` + 路由拆分）

### 2. 令牌变化：`--rx-accent-soft` 改为 color-mix 派生

`--rx-accent-soft` 从硬编码 rgba 值改为 `color-mix(in srgb, var(--rx-accent) 16%, transparent)` 派生。

**影响**：如果你在项目里手动覆盖了 `--rx-accent-soft`，0.2.0 起该覆盖**不再生效**（`color-mix` 在 CSS 变量引用处内联派生）。应改为覆盖 `--rx-accent` 本身，soft 会随主色自动跟随。

```css
/* 旧：覆盖 soft（0.2.0 起无效） */
:root { --rx-accent-soft: rgba(0, 0, 0, 0.2); }

/* 新：覆盖 accent，soft 自动派生 */
:root { --rx-accent: #ff6a3d; }
```

### 3. 死令牌清理

> ⚠️ 代码已合入，**随 0.3.0 发布**（对应 `.changeset/integration-fixes.md`）。

- `--rx-accent-text`、`--rx-border-2` 已删除（无组件引用）。若你的项目引用了它们，请改用 `--rx-accent-fg` / `--rx-border`。

### 4. 动效时长令牌化

弹层组件（dialog/dropdown-menu/hover-card/popover/select/sheet）的 `duration-100` 等硬编码时长改为 `--rx-dur-*` 令牌：

| 场景 | 令牌 | 值 |
|---|---|---|
| 浮层（popover/menu/tooltip） | `--rx-dur-fast` | 120ms |
| 弹窗内容（dialog） | `--rx-dur-mid` | 220ms |
| 抽屉/Sheet | `--rx-dur-slow` | 340ms |
| 遮罩/backdrop | `--rx-dur-slower` | 420ms |

若你自定义了这些组件的过渡时长，改为覆盖对应令牌即可。

### 5. 依赖变化（peerDependencies）

> ⚠️ 代码已合入，**随 0.3.0 发布**（对应 `.changeset/integration-fixes.md`）。

| 变化 | 说明 |
|---|---|
| **新增** `shadcn`（^4） | 提供 `data-open:/data-checked:` 等自定义 variant，13 个组件依赖 |
| **新增** `tw-animate-css`（^1） | 弹层进出场动画类（`animate-in/fade-in/zoom-in`），8 个组件依赖 |
| **移除** `next-themes` | 全库无组件引用（纯冗余），无需再装 |

```bash
npm install shadcn tw-animate-css
# 可选：npm uninstall next-themes
```

### 6. Tailwind v4 必配 `@source`

接入文档站时必须显式 `@source` 指向组件产物，否则组件"裸奔"：

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "@reasonix/ui/styles.css";
@source "../node_modules/@reasonix/ui/dist";  /* ★ 必配 */
```

> 若你此前用 0.1.0 且未配 `@source`（组件无样式），0.2.0 同样需要补上——这不是版本回归，而是 Tailwind v4 的固有要求。

---

## 从 0.2.0 → 0.3.0（进行中）

以下 changeset 已提交但尚未发布（`npm run version` 后合并进 0.3.0）：

- **tokens.json 随包发布**：设计令牌 JSON（Tokens Studio/DTCG 兼容），`import tokens from '@reasonix/ui/tokens.json'` 可用，供 Figma 联动
- **动效画廊 playground**（showcase 变更，不影响组件 API）
- **motion.css 可导入**：`@reasonix/ui/motion.css` 已加入 exports（独立 keyframes，可选导入）

0.3.0 无破坏性变更，可安全升级。

---

## 常见问题

**Q: 升级后组件没样式了？**
A: 检查 `@source` 是否指向 `@reasonix/ui/dist`；检查是否重复定义了 `@custom-variant dark`（styles.css 已含，重复会报错）。

**Q: `Invalid hook call` / `useRef is null`？**
A: React 双实例（本地 file: 引用或 monorepo 常见）。vite 加 `resolve: { dedupe: ['react', 'react-dom', 'react/jsx-runtime'] }`。

**Q: npm 报 ERESOLVE？**
A: shadcn 需要 babel 工具链，补 `npm install -D @babel/core`。
