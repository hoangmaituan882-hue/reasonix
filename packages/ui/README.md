# @reasonix/ui

Reasonix 设计系统组件库 —— 38 个 shadcn 风格组件，带多方向主题、动效令牌与设计规范。

> 一套共享产品语言：主题令牌、组件与动效的开箱即用集合。

## ✨ 特性

- **38 个组件**：基础 / 表单 / 数据展示 / 反馈 / 导航，全覆盖
- **6 方向主题**：graphite / aurora / slate / carbon / nocturne / amber × 明暗双态
- **37 个设计令牌**：`--rx-*` 色彩 / 圆角 / 动效时长 / 缓动
- **动效体系**：32 个 keyframes + reduced-motion 降级
- **无障碍**：对比度 WCAG AA、键盘可达、focus ring
- **Tree-shaking**：ESM 构建，sideEffects 仅 css
- **完整类型**：d.ts 随包发布

## 📦 安装

```bash
npm install @reasonix/ui
# peerDependencies（需自行安装）
npm install react react-dom tailwindcss radix-ui vaul sonner cmdk react-day-picker react-resizable-panels embla-carousel-react next-themes
```

> 注意：本包为纯 ESM。CJS 消费方需使用动态 `import()` 或配置 bundler 的 ESM 支持。

## 🚀 快速开始

```tsx
// 1. 引入组件
import { Button, Tabs, TabsList, TabsTrigger, TabsContent } from '@reasonix/ui'

// 2. 引入主题（37 令牌 + 6 方向 + 动效）
import '@reasonix/ui/styles.css'

function App() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">标签一</TabsTrigger>
        <TabsTrigger value="tab2">标签二</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">内容一</TabsContent>
      <TabsContent value="tab2">内容二</TabsContent>
    </Tabs>
  )
}
```

## 🎨 主题切换

```tsx
// 6 个方向：graphite / aurora / slate / carbon / nocturne / amber
document.documentElement.setAttribute('data-direction', 'aurora')

// 明暗：.dark class（默认无 = 浅色）
document.documentElement.classList.toggle('dark')
```

## 🧩 组件清单

| 分类 | 组件 |
|---|---|
| 基础 | Button · Badge · Card · Skeleton · Separator · Label · Avatar |
| 表单 | Input · Textarea · Checkbox · RadioGroup · Switch · Select · Slider · Toggle · ToggleGroup · InputGroup · Progress |
| 数据 | Table · Calendar · Carousel · ScrollArea · Resizable · Toaster |
| 反馈 | Alert · Dialog · Drawer · Sheet · Command · Popover · HoverCard · Tooltip · DropdownMenu |
| 导航 | Tabs · Accordion · Collapsible · Breadcrumb · Pagination |

## 🧑‍💻 开发

```bash
npm run build       # tsup 构建（ESM + d.ts + css）
npm test            # vitest 测试
npm run test:watch  # 测试监听
npm run test:coverage
npm pack            # 打包发布
```

## 📐 设计规范

设计令牌的完整规范见 [DESIGN.md](../../docs/DESIGN.md)（9 章：身份 / 色彩 / 排版 / 形状 / 运动 / DoDon't / Checklist）。

## 📄 License

MIT
