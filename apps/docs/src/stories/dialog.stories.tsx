import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Dialog",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "居中模态弹窗，用于需要聚焦确认的场景。\n\n## 设计使用建议\n\n居中模态弹窗，用于需要聚焦确认的场景。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态（受控）</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>showCloseButton</code></td><td><code>boolean</code></td><td>显示关闭按钮（默认 true）</td></tr><tr><td><code>modal</code></td><td><code>boolean</code></td><td>模态模式（默认 true）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'\n\n<Dialog>\n  <DialogTrigger>打开弹窗</DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>确认操作</DialogTitle>\n      <DialogDescription>此操作不可撤销。</DialogDescription>\n    </DialogHeader>\n  </DialogContent>\n</Dialog>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="dialog" />,
}
