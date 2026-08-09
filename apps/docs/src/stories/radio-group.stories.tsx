import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Radio Group",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "单选组，同一组内互斥选择。\n\n## 设计使用建议\n\n单选组，同一组内互斥选择。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>value</code></td><td><code>string</code></td><td>受控选中值</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) => void</code></td><td>选中变化回调</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td>初始选中</td></tr><tr><td><code>orientation</code></td><td><code>\"horizontal\" | \"vertical\"</code></td><td>排列方向</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'\nimport { Label } from '@/components/ui/label'\n\n<RadioGroup defaultValue=\"a\">\n  <div className=\"flex items-center gap-2\">\n    <RadioGroupItem value=\"a\" id=\"a\" />\n    <Label htmlFor=\"a\">选项 A</Label>\n  </div>\n  <div className=\"flex items-center gap-2\">\n    <RadioGroupItem value=\"b\" id=\"b\" />\n    <Label htmlFor=\"b\">选项 B</Label>\n  </div>\n</RadioGroup>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="radio-group" />,
}
