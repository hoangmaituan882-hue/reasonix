import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Label",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "表单字段标签，点击可与对应控件聚焦联动。\n\n## 设计使用建议\n\n表单字段标签，点击可与对应控件聚焦联动。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>htmlFor</code></td><td><code>string</code></td><td>关联控件 id</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>标签文本</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Label } from '@/components/ui/label'\nimport { Input } from '@/components/ui/input'\n\n<Label htmlFor=\"email\">邮箱</Label>\n<Input id=\"email\" placeholder=\"name@example.com\" />\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="label" />,
}
