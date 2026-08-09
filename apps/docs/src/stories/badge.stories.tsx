import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Badge",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "用于标记状态、分类或计数的短文本徽章。\n\n## 设计使用建议\n\n用于标记状态、分类或计数的短文本徽章。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>variant</code></td><td><code>\"default\" | \"secondary\" | \"outline\" | \"destructive\" | \"success\" | \"warning\"</code></td><td>视觉变体</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Badge } from '@/components/ui/badge'\n\n<Badge>默认</Badge>\n<Badge variant=\"secondary\">次要</Badge>\n<Badge variant=\"outline\">描边</Badge>\n<Badge variant=\"destructive\">危险</Badge>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="badge" />,
}
