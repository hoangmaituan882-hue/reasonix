import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Badge",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "用于标记状态、分类或计数的短文本徽章。\n\n## 设计使用建议\n\n### 何时使用\n用于标记状态、分类或计数的短文本徽章。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>variant</code></td><td><code>\"default\" | \"secondary\" | \"destructive\" | \"outline\" | \"ghost\" | \"link\"</code></td><td>视觉变体</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Badge } from '@/components/ui/badge'\n\n<Badge>默认</Badge>\n<Badge variant=\"secondary\">次要</Badge>\n<Badge variant=\"outline\">描边</Badge>\n<Badge variant=\"destructive\">危险</Badge>\n```",
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
  render: () => <ComponentPreview id="badge" />,
}
