import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Hover Card",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "悬停时显示详细内容的浮层卡片。\n\n## 设计使用建议\n\n悬停时显示详细内容的浮层卡片。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>openDelay</code></td><td><code>number</code></td><td>打开延迟 ms</td></tr><tr><td><code>closeDelay</code></td><td><code>number</code></td><td>关闭延迟 ms</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'\n\n<HoverCard>\n  <HoverCardTrigger>@user</HoverCardTrigger>\n  <HoverCardContent>用户卡片信息</HoverCardContent>\n</HoverCard>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="hover-card" />,
}
