import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Toggle",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "可切换按下状态的图标按钮，常用于工具栏。\n\n## 设计使用建议\n\n可切换按下状态的图标按钮，常用于工具栏。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>variant</code></td><td><code>\"default\" | \"outline\"</code></td><td>视觉变体</td></tr><tr><td><code>size</code></td><td><code>\"default\" | \"sm\" | \"lg\"</code></td><td>尺寸</td></tr><tr><td><code>pressed</code></td><td><code>boolean</code></td><td>按下状态（受控）</td></tr><tr><td><code>defaultPressed</code></td><td><code>boolean</code></td><td>初始按下</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Toggle } from '@/components/ui/toggle'\nimport { Bold } from 'lucide-react'\n\n<Toggle aria-label=\"加粗\"><Bold /></Toggle>\n```",
      },
    },
  },
  argTypes: {
    variant: { description: "视觉变体", control: 'select', options: ["default", "outline"] },
    size: { description: "尺寸", control: 'select', options: ["default", "sm", "lg"] },
    pressed: { description: "按下状态（受控）", control: 'boolean' },
    defaultPressed: { description: "初始按下", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="toggle" />,
}
