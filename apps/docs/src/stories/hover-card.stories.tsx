import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Hover Card",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "悬停时显示详细内容的浮层卡片。\n\n## 设计使用建议\n\n### 何时使用\n悬停时显示详细内容的浮层卡片。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>openDelay</code></td><td><code>number</code></td><td>打开延迟 ms</td></tr><tr><td><code>closeDelay</code></td><td><code>number</code></td><td>关闭延迟 ms</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'\r\n\r\n<HoverCard>\r\n  <HoverCardTrigger>@user</HoverCardTrigger>\r\n  <HoverCardContent>用户卡片信息</HoverCardContent>\r\n</HoverCard>\n```",
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
