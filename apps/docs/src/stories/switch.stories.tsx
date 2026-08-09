import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from '@/components/ui/switch'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Switch",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "二元开闭状态的开关控件。\n\n## 设计使用建议\n\n### 何时使用\n即时生效的设置开关（如明暗切换、通知开关），与表单提交无关。\n\n### 设计要点\n- 开关即时生效，不要\"保存后生效\"——那是 Checkbox 的语义\n- pill 变体：unchecked 太阳渐变 / checked 月牙（`--rx-accent` 底）\n- 用 aria-label 描述开关含义（如\"暗色模式\"），不只靠视觉\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>checked</code></td><td><code>boolean</code></td><td>开合状态（受控）</td></tr><tr><td><code>onCheckedChange</code></td><td><code>(checked: boolean) => void</code></td><td>切换回调</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用态</td></tr><tr><td><code>size</code></td><td><code>\"default\" | \"sm\"</code></td><td>尺寸</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Switch } from '@/components/ui/switch'\r\nimport { Label } from '@/components/ui/label'\r\n\r\n<Label className=\"flex items-center gap-2\">\r\n  <Switch /> 启用通知\r\n</Label>\n```",
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
  args: {
    checked: true,
  },
  render: (args) => { const { checked } = args; return (() => { const { checked, disabled } = args; return <Switch checked={checked} disabled={disabled} /> })() },
}
