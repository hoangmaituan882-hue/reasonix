import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Input Group",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "输入框与前缀、后缀或按钮组合的复合输入区。\n\n## 设计使用建议\n\n### 何时使用\n输入框与前缀/后缀组合（单位、按钮、图标）；如搜索框+按钮、金额+货币符号。\n\n### 设计要点\n- Addon 用 `--rx-bg-soft` 底区分输入区；Button 位用 InputGroupButton\n- 组合整体一个圆角轮廓（rounded-lg），内部无重复描边\n- 内部控件尺寸统一（h-8），避免错位\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>输入框 + Addon/Button/Text 组合</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { InputGroup, InputGroupText, InputGroupInput, InputGroupButton } from '@/components/ui/input-group'\r\nimport { Button } from '@/components/ui/button'\r\n\r\n<InputGroup>\r\n  <InputGroupText>https://</InputGroupText>\r\n  <InputGroupInput placeholder=\"example.com\" />\r\n  <InputGroupButton><Button>访问</Button></InputGroupButton>\r\n</InputGroup>\n```",
      },
    },
  },
  argTypes: {
    className: { description: "追加类名", control: 'text' },
    children: { description: "输入框 + Addon/Button/Text 组合", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="input-group" />,
}
