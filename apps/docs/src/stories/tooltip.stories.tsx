import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Tooltip",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "悬停或聚焦时浮出的说明气泡。\n\n## 设计使用建议\n\n### 何时使用\n悬停/聚焦时补充简短说明；不适合承载关键操作或长文本。\n\n### 设计要点\n- 120ms 延迟展开（`--rx-dur-fast`），进出自如不粘滞\n- 内容 1-3 词最佳；超过 20 字改用 Popover 或帮助文本\n- 键盘聚焦也要能触发（TooltipTrigger 可聚焦）\n\n### 避免误用\n- 不要把按钮的完整说明塞进 tooltip，用户看不到时功能不可用\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>delayDuration</code></td><td><code>number</code></td><td>显示延迟 ms（默认 0）</td></tr><tr><td><code>open</code></td><td><code>boolean</code></td><td>显示状态（受控）</td></tr><tr><td><code>defaultOpen</code></td><td><code>boolean</code></td><td>初始显示</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'\r\n\r\n<TooltipProvider>\r\n  <Tooltip>\r\n    <TooltipTrigger>悬停我</TooltipTrigger>\r\n    <TooltipContent>这是提示内容</TooltipContent>\r\n  </Tooltip>\r\n</TooltipProvider>\n```",
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
