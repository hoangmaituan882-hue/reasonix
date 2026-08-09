import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Hover Card",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "悬停时显示详细内容的浮层卡片。\n\n## 设计使用建议\n\n### 何时使用\n悬停展示预览（用户卡片、链接摘要、数据详情），补充信息非关键。\n\n### 设计要点\n- 延迟触发（默认 700ms 可调 delayDuration），避免误触\n- 内容只读预览；需要交互（点击按钮）改用 Popover\n- 移动端无 hover，需提供替代入口（点击触发）\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>openDelay</code></td><td><code>number</code></td><td>打开延迟 ms</td></tr><tr><td><code>closeDelay</code></td><td><code>number</code></td><td>关闭延迟 ms</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'\r\n\r\n<HoverCard>\r\n  <HoverCardTrigger>@user</HoverCardTrigger>\r\n  <HoverCardContent>用户卡片信息</HoverCardContent>\r\n</HoverCard>\n```",
      },
    },
  },
  argTypes: {
    openDelay: { description: "打开延迟 ms", control: 'number' },
    closeDelay: { description: "关闭延迟 ms", control: 'number' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="hover-card" />,
}
