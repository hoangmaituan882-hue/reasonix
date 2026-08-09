import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Textarea",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "多行文本输入区域。\n\n## 设计使用建议\n\n多行文本输入区域。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>placeholder</code></td><td><code>string</code></td><td>占位提示</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用态</td></tr><tr><td><code>autoGrow</code></td><td><code>boolean</code></td><td>内容自动高度（field-sizing）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Textarea } from '@/components/ui/textarea'\n\n<Textarea placeholder=\"请输入多行内容\" />\n```",
      },
    },
  },
  argTypes: {
    placeholder: { description: "占位提示", control: 'text' },
    disabled: { description: "禁用态", control: 'boolean' },
    autoGrow: { description: "内容自动高度（field-sizing）", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="textarea" />,
}
