import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Popover",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "点击触发的悬浮内容层。\n\n## 设计使用建议\n\n点击触发的悬浮内容层。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'\n\n<Popover>\n  <PopoverTrigger>更多选项</PopoverTrigger>\n  <PopoverContent>浮层内容</PopoverContent>\n</Popover>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="popover" />,
}
