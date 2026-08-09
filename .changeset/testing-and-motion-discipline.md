---
"@reasonix/ui": patch
---

### 质量

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
