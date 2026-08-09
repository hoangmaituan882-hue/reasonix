import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Sheet",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "侧边滑出面板，常用于详情或设置抽屉。\n\n## 设计使用建议\n\n侧边滑出面板，常用于详情或设置抽屉。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>side</code></td><td><code>\"top\" | \"right\" | \"bottom\" | \"left\"</code></td><td>面板方向（Context 回退）</td></tr><tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>showCloseButton</code></td><td><code>boolean</code></td><td>显示关闭按钮</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'\n\n<Sheet>\n  <SheetTrigger>打开侧栏</SheetTrigger>\n  <SheetContent side=\"right\">\n    <SheetHeader><SheetTitle>侧边面板</SheetTitle></SheetHeader>\n  </SheetContent>\n</Sheet>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="sheet" />,
}
