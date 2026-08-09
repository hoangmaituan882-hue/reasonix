import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Switch",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "二元开闭状态的开关控件。\n\n## 设计使用建议\n\n### 何时使用\n二元开闭状态的开关控件。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>checked</code></td><td><code>boolean</code></td><td>开合状态（受控）</td></tr><tr><td><code>onCheckedChange</code></td><td><code>(checked: boolean) => void</code></td><td>切换回调</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用态</td></tr><tr><td><code>size</code></td><td><code>\"default\" | \"sm\"</code></td><td>尺寸</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Switch } from '@/components/ui/switch'\nimport { Label } from '@/components/ui/label'\n\n<Label className=\"flex items-center gap-2\">\n  <Switch /> 启用通知\n</Label>\n```",
      },
    },
  },
  argTypes: {
    checked: { description: "开合状态（受控）", control: 'boolean' },
    onCheckedChange: { description: "切换回调", control: 'text' },
    disabled: { description: "禁用态", control: 'boolean' },
    size: { description: "尺寸", control: 'select', options: ["default", "sm"] },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="switch" />,
}
