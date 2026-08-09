import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Sheet",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "侧边滑出面板，常用于详情或设置抽屉。\n\n## 设计使用建议\n\n### 何时使用\n与 Drawer 同族的侧滑面板，但面向桌面端设置/筛选场景。\n\n### 设计要点\n- 左右抽屉满宽 340ms 滑入（slide-in-from-*-full），对称滑出\n- content 宽度 3/4（sm:max-w-sm），内容区可滚动\n- 与 Dialog 二选一：需要保留上下文用 Sheet，需要聚焦用 Dialog\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>side</code></td><td><code>\"top\" | \"right\" | \"bottom\" | \"left\"</code></td><td>面板方向（Context 回退）</td></tr><tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>showCloseButton</code></td><td><code>boolean</code></td><td>显示关闭按钮</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'\r\n\r\n<Sheet>\r\n  <SheetTrigger>打开侧栏</SheetTrigger>\r\n  <SheetContent side=\"right\">\r\n    <SheetHeader><SheetTitle>侧边面板</SheetTitle></SheetHeader>\r\n  </SheetContent>\r\n</Sheet>\n```",
      },
    },
  },
  argTypes: {
    side: { description: "面板方向（Context 回退）", control: 'select', options: ["top", "right", "bottom", "left"] },
    open: { description: "打开状态", control: 'boolean' },
    onOpenChange: { description: "开关回调", control: 'text' },
    showCloseButton: { description: "显示关闭按钮", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="sheet" />,
}
