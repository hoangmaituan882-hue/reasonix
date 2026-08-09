---
"@reasonix/ui": minor
---

### 新增

- **设计令牌 JSON 导出**（Tokens Studio / DTCG 兼容）：`tokens.json` 随包发布，`@reasonix/ui/tokens.json` 可导入
  - 结构：`{ 方向: { light|dark: { 分类: { 令牌: {value, type} } } } }`
  - 6 方向 × 明暗：graphite 全量基线（36 令牌），其余方向增量覆盖
  - 5 分类：color / borderRadius / duration / easing / number
  - 同步链路：`styles.css` 唯一事实源 → `npm run tokens` 单向导出（`scripts/export-tokens.mjs`）
  - Figma 联动：Tokens Studio 插件导入即可生成 Design Tokens / Figma Variables

### 工程

- subpath exports 实测验证：`@reasonix/ui/components/button` 等按组件导入 + 根入口 + d.ts 全部可用
