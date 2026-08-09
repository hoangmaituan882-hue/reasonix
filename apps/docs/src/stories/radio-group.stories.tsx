import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Radio Group",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "单选组，同一组内互斥选择。\n\n## 设计使用建议\n\n### 何时使用\n单选组，同一组内互斥选择。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>value</code></td><td><code>string</code></td><td>受控选中值</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) => void</code></td><td>选中变化回调</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td>初始选中</td></tr><tr><td><code>orientation</code></td><td><code>\"horizontal\" | \"vertical\"</code></td><td>排列方向</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'\r\nimport { Label } from '@/components/ui/label'\r\n\r\n<RadioGroup defaultValue=\"a\">\r\n  <div className=\"flex items-center gap-2\">\r\n    <RadioGroupItem value=\"a\" id=\"a\" />\r\n    <Label htmlFor=\"a\">选项 A</Label>\r\n  </div>\r\n  <div className=\"flex items-center gap-2\">\r\n    <RadioGroupItem value=\"b\" id=\"b\" />\r\n    <Label htmlFor=\"b\">选项 B</Label>\r\n  </div>\r\n</RadioGroup>\n```",
      },
    },
  },
  argTypes: {
    value: { description: "受控选中值", control: 'text' },
    onValueChange: { description: "选中变化回调", control: 'text' },
    defaultValue: { description: "初始选中", control: 'text' },
    orientation: { description: "排列方向", control: 'select', options: ["horizontal", "vertical"] },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="radio-group" />,
}
