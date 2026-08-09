import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Scroll Area",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "自定义样式的滚动区域，支持独立滚动条。\n\n## 设计使用建议\n\n### 何时使用\n自定义样式的滚动区域，支持独立滚动条。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>type</code></td><td><code>\"auto\" | \"always\" | \"scroll\" | \"hover\"</code></td><td>滚动条显示模式（radix）</td></tr><tr><td><code>scrollHideDelay</code></td><td><code>number</code></td><td>滚动条隐藏延迟 ms（radix）</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>容器类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { ScrollArea } from '@/components/ui/scroll-area'\r\n\r\n<ScrollArea className=\"h-48 w-64 rounded-md border\">\r\n  这里放较长的内容……\r\n</ScrollArea>\n```",
      },
    },
  },
  argTypes: {
    type: { description: "滚动条显示模式（radix）", control: 'select', options: ["auto", "always", "scroll", "hover"] },
    scrollHideDelay: { description: "滚动条隐藏延迟 ms（radix）", control: 'number' },
    className: { description: "容器类名", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="scroll-area" />,
}
