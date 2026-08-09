import type { Meta, StoryObj } from '@storybook/react-vite'
import { Badge } from '@/components/ui/badge'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Badge",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "用于标记状态、分类或计数的短文本徽章。\n\n## 设计使用建议\n\n### 何时使用\n标记状态、分类或计数的短文本徽章，是\"只读标签\"不是交互入口。\n\n### 设计要点\n- 26px 高 / 999px 圆角（DESIGN.md §4 pill 规则），text-xs 不换行\n- 状态色优先语义：success/警告/错误用 `--ok`/`--warn`/`--err` 体系而非自定义\n- 徽章文字需对比度达标：亮色底配深字，暗色底配浅字\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>variant</code></td><td><code>\"default\" | \"secondary\" | \"destructive\" | \"outline\" | \"ghost\" | \"link\"</code></td><td>视觉变体</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Badge } from '@/components/ui/badge'\r\n\r\n<Badge>默认</Badge>\r\n<Badge variant=\"secondary\">次要</Badge>\r\n<Badge variant=\"outline\">描边</Badge>\r\n<Badge variant=\"destructive\">危险</Badge>\n```",
      },
    },
  },
  argTypes: {
    variant: { description: "视觉变体", control: 'select', options: ["default", "secondary", "destructive", "outline", "ghost", "link"] },
    className: { description: "追加类名", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  args: {
    children: "徽章",
    variant: "default",
  },
  render: (args) => { const { children, variant } = args; return (() => { const { children, variant } = args; return <Badge variant={variant}>{children}</Badge> })() },
}
