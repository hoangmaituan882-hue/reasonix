import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '@/components/ui/input'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Input",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "单行文本输入框，支持占位、禁用与校验状态。\n\n## 设计使用建议\n\n### 何时使用\n单行文本输入，用于短数据（名称/邮箱/搜索词）。多行长文本用 Textarea。\n\n### 设计要点\n- 输入框高度 32px，边框 `--input`，聚焦 ring 用 accent 色（focus-visible:ring）\n- 错误态用 aria-invalid + destructive 边框，配文字说明（不只靠颜色）\n- placeholder 不是标签替代：必填项仍需 Label（DESIGN.md §2.4）\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>type</code></td><td><code>string</code></td><td>输入类型（text/password/file…）</td></tr><tr><td><code>placeholder</code></td><td><code>string</code></td><td>占位提示</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用态</td></tr><tr><td><code>aria-invalid</code></td><td><code>boolean</code></td><td>错误态样式</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Input } from '@/components/ui/input'\r\n\r\n<Input placeholder=\"请输入内容\" />\r\n<Input type=\"email\" placeholder=\"邮箱\" disabled />\n```",
      },
    },
  },
  argTypes: {
    type: { description: "输入类型（text/password/file…）", control: 'text' },
    placeholder: { description: "占位提示", control: 'text' },
    disabled: { description: "禁用态", control: 'boolean' },
    "aria-invalid": { description: "错误态样式", control: 'boolean' },
    className: { description: "追加类名", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  args: {
    placeholder: "请输入内容",
  },
  render: (args) => { const { placeholder } = args; return (() => { const { placeholder, disabled } = args; return <Input placeholder={placeholder} disabled={disabled} /> })() },
}
