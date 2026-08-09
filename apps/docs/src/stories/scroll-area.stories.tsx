import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Scroll Area",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "自定义样式的滚动区域，支持独立滚动条。\n\n## 设计使用建议\n\n自定义样式的滚动区域，支持独立滚动条。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>容器类名</td></tr><tr><td><code>viewportRef</code></td><td><code>React.Ref<HTMLDivElement></code></td><td>视口引用</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { ScrollArea } from '@/components/ui/scroll-area'\n\n<ScrollArea className=\"h-48 w-64 rounded-md border\">\n  这里放较长的内容……\n</ScrollArea>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="scroll-area" />,
}
