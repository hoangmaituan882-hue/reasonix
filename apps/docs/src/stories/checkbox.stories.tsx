import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '@/components/ui/checkbox'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Checkbox",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "多选复选框，用于独立选项或批量选择。\n\n## 设计使用建议\n\n### 何时使用\n多选或\"是/否\"开关场景；一组相关选项用 Checkbox 组。\n\n### 设计要点\n- 选中态用 accent 实底 + 勾；半选 `checked=\"indeterminate\"` 表示部分子项选中\n- 点击区域：`after:-inset-*` 扩大热区到 32px+（触屏友好）\n- 选项组用 Fieldset+Legend 或 aria-label 分组（可访问性）\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>checked</code></td><td><code>boolean | \"indeterminate\"</code></td><td>选中状态（受控，半选用 \"indeterminate\"）</td></tr><tr><td><code>defaultChecked</code></td><td><code>boolean</code></td><td>初始选中（非受控）</td></tr><tr><td><code>onCheckedChange</code></td><td><code>(checked: boolean | \"indeterminate\") => void</code></td><td>切换回调</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用态</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Checkbox } from '@/components/ui/checkbox'\r\nimport { Label } from '@/components/ui/label'\r\n\r\n<Label className=\"flex items-center gap-2\">\r\n  <Checkbox defaultChecked /> 同意条款\r\n</Label>\n```",
      },
    },
  },
  argTypes: {
    checked: { description: "选中状态（受控，半选用 \"indeterminate\"）", control: 'text' },
    defaultChecked: { description: "初始选中（非受控）", control: 'boolean' },
    onCheckedChange: { description: "切换回调", control: 'text' },
    disabled: { description: "禁用态", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  args: {
    checked: true,
  },
  render: (args) => { const { checked } = args; return (() => { const { checked, disabled } = args; return <Checkbox checked={checked} disabled={disabled} /> })() },
}
