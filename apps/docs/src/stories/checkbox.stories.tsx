import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Checkbox",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "多选复选框，用于独立选项或批量选择。\n\n## 设计使用建议\n\n多选复选框，用于独立选项或批量选择。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>checked</code></td><td><code>boolean</code></td><td>选中状态（受控）</td></tr><tr><td><code>defaultChecked</code></td><td><code>boolean</code></td><td>初始选中（非受控）</td></tr><tr><td><code>onCheckedChange</code></td><td><code>(checked: boolean) => void</code></td><td>切换回调</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用态</td></tr><tr><td><code>indeterminate</code></td><td><code>boolean</code></td><td>半选态</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Checkbox } from '@/components/ui/checkbox'\nimport { Label } from '@/components/ui/label'\n\n<Label className=\"flex items-center gap-2\">\n  <Checkbox defaultChecked /> 同意条款\n</Label>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="checkbox" />,
}
