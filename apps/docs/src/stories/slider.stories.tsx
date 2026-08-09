import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Slider",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "拖动选择数值或数值区间的滑块。\n\n## 设计使用建议\n\n拖动选择数值或数值区间的滑块。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>value</code></td><td><code>number[]</code></td><td>滑块值数组（多 thumb）</td></tr><tr><td><code>defaultValue</code></td><td><code>number[]</code></td><td>初始值</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: number[]) => void</code></td><td>值变化回调</td></tr><tr><td><code>min</code></td><td><code>number</code></td><td>最小值</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td>最大值</td></tr><tr><td><code>step</code></td><td><code>number</code></td><td>步长</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Slider } from '@/components/ui/slider'\n\n<Slider defaultValue={[50]} max={100} step={1} />\n<Slider defaultValue={[20, 60]} max={100} />\n```",
      },
    },
  },
  argTypes: {
    value: { description: "滑块值数组（多 thumb）", control: 'text' },
    defaultValue: { description: "初始值", control: 'text' },
    onValueChange: { description: "值变化回调", control: 'text' },
    min: { description: "最小值", control: 'text' },
    max: { description: "最大值", control: 'text' },
    step: { description: "步长", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="slider" />,
}
