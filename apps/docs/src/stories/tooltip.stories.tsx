import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Tooltip",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "悬停或聚焦时浮出的说明气泡。\n\n## 设计使用建议\n\n悬停或聚焦时浮出的说明气泡。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>delayDuration</code></td><td><code>number</code></td><td>显示延迟 ms（默认 0）</td></tr><tr><td><code>open</code></td><td><code>boolean</code></td><td>显示状态（受控）</td></tr><tr><td><code>defaultOpen</code></td><td><code>boolean</code></td><td>初始显示</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'\n\n<TooltipProvider>\n  <Tooltip>\n    <TooltipTrigger>悬停我</TooltipTrigger>\n    <TooltipContent>这是提示内容</TooltipContent>\n  </Tooltip>\n</TooltipProvider>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="tooltip" />,
}
