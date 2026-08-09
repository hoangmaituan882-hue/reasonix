---
"@reasonix/ui": patch
---

### 修复：外部项目接入缺口

- **peerDependencies**：
  - 新增 `shadcn`（^4，提供 `data-open:/data-checked:` 等自定义 variant，13 个组件依赖）
  - 新增 `tw-animate-css`（^1，弹层进出场动画类，8 个组件依赖）
  - 移除 `next-themes`（全库无组件引用，纯冗余）
- **exports**：新增 `./motion.css`（产物已生成但被 exports 封锁，现可导入）
- **tsup external**：移除 next-themes
- **文档**：
  - `README.md` 重写接入章节——明示「纯 ESM + Tailwind v4 语义类」、完整安装命令（12 peer）、Tailwind 接入（`@tailwindcss/vite` + 4 行 import 顺序 + `@source` 必配 + 勿重复 `@custom-variant dark`）、排错速查表
  - 新增 `docs/INTEGRATION.md` 独立接入指南（依赖表含缺失后果 / Vite+Next.js 接入 / 验证清单 / 内嵌令牌与 CJS 场景）
