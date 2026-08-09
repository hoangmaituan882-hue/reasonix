import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Separator",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "分隔内容区块的横向或纵向分割线。\n\n## 设计使用建议\n\n分隔内容区块的横向或纵向分割线。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>orientation</code></td><td><code>\"horizontal\" | \"vertical\"</code></td><td>分隔线方向</td></tr><tr><td><code>decorative</code></td><td><code>boolean</code></td><td>装饰性（隐藏于 a11y 树）</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Separator } from '@/components/ui/separator'\n\n<Separator />\n<Separator className=\"my-4\" />\n<Separator orientation=\"vertical\" className=\"mx-4 h-6\" />\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="separator" />,
}
