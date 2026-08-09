import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Toggle Group",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "一组互斥或多选的可切换按钮组。\n\n## 设计使用建议\n\n### 何时使用\n一组互斥或多选的可切换按钮组。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>type</code></td><td><code>\"single\" | \"multiple\"</code></td><td>单选或多选</td></tr><tr><td><code>value</code></td><td><code>string | string[]</code></td><td>受控选中值</td></tr><tr><td><code>onValueChange</code></td><td><code>(value) => void</code></td><td>选中变化回调</td></tr><tr><td><code>variant</code></td><td><code>\"default\" | \"outline\"</code></td><td>视觉变体</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'\r\nimport { Bold, Italic } from 'lucide-react'\r\n\r\n<ToggleGroup type=\"multiple\">\r\n  <ToggleGroupItem value=\"bold\" aria-label=\"加粗\"><Bold /></ToggleGroupItem>\r\n  <ToggleGroupItem value=\"italic\" aria-label=\"斜体\"><Italic /></ToggleGroupItem>\r\n</ToggleGroup>\n```",
      },
    },
  },
  argTypes: {
    type: { description: "单选或多选", control: 'select', options: ["single", "multiple"] },
    value: { description: "受控选中值", control: 'text' },
    onValueChange: { description: "选中变化回调", control: 'text' },
    variant: { description: "视觉变体", control: 'select', options: ["default", "outline"] },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="toggle-group" />,
}
