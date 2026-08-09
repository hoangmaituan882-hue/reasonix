import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Select",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "下拉选择器，从列表中选取一个值。\n\n## 设计使用建议\n\n### 何时使用\n从预设列表选一个值；选项多/可搜索时用 Command，选项少（≤5）用 Radio。\n\n### 设计要点\n- 触发按钮显示当前值 + 占位符（data-placeholder 弱色）\n- 选项列表 origin 对齐触发元素（popper），z-index 按 §5.1 刻度\n- 受控场景传 value + onValueChange；禁用的选项用 disabled\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>value</code></td><td><code>string</code></td><td>选中值（受控）</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td>初始选中</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) => void</code></td><td>选中回调</td></tr><tr><td><code>open</code></td><td><code>boolean</code></td><td>展开状态（受控）</td></tr><tr><td><code>size</code></td><td><code>\"default\" | \"sm\"</code></td><td>尺寸</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'\r\n\r\n<Select>\r\n  <SelectTrigger className=\"w-40\">\r\n    <SelectValue placeholder=\"请选择\" />\r\n  </SelectTrigger>\r\n  <SelectContent>\r\n    <SelectItem value=\"a\">选项 A</SelectItem>\r\n    <SelectItem value=\"b\">选项 B</SelectItem>\r\n  </SelectContent>\r\n</Select>\n```",
      },
    },
  },
  argTypes: {
    value: { description: "选中值（受控）", control: 'text' },
    defaultValue: { description: "初始选中", control: 'text' },
    onValueChange: { description: "选中回调", control: 'text' },
    open: { description: "展开状态（受控）", control: 'boolean' },
    size: { description: "尺寸", control: 'select', options: ["default", "sm"] },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="select" />,
}
