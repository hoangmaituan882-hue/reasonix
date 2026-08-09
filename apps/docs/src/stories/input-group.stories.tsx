import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Input Group",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "输入框与前缀、后缀或按钮组合的复合输入区。\n\n## 设计使用建议\n\n输入框与前缀、后缀或按钮组合的复合输入区。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>输入框 + Addon/Button/Text 组合</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { InputGroup, InputGroupText, InputGroupInput, InputGroupButton } from '@/components/ui/input-group'\nimport { Button } from '@/components/ui/button'\n\n<InputGroup>\n  <InputGroupText>https://</InputGroupText>\n  <InputGroupInput placeholder=\"example.com\" />\n  <InputGroupButton><Button>访问</Button></InputGroupButton>\n</InputGroup>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="input-group" />,
}
