import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Tooltip",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "悬停或聚焦时浮出的说明气泡。\n\n## 设计使用建议\n\n### 何时使用\n悬停或聚焦时浮出的说明气泡。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>delayDuration</code></td><td><code>number</code></td><td>显示延迟 ms（默认 0）</td></tr><tr><td><code>open</code></td><td><code>boolean</code></td><td>显示状态（受控）</td></tr><tr><td><code>defaultOpen</code></td><td><code>boolean</code></td><td>初始显示</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'\r\n\r\n<TooltipProvider>\r\n  <Tooltip>\r\n    <TooltipTrigger>悬停我</TooltipTrigger>\r\n    <TooltipContent>这是提示内容</TooltipContent>\r\n  </Tooltip>\r\n</TooltipProvider>\n```",
      },
    },
  },
  argTypes: {
    delayDuration: { description: "显示延迟 ms（默认 0）", control: 'number' },
    open: { description: "显示状态（受控）", control: 'boolean' },
    defaultOpen: { description: "初始显示", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="tooltip" />,
}
