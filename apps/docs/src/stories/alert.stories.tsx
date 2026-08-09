import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Alert",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "页面内嵌提示条，强调操作结果或注意事项。\n\n## 设计使用建议\n\n页面内嵌提示条，强调操作结果或注意事项。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>variant</code></td><td><code>\"default\" | \"destructive\"</code></td><td>视觉变体</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>内容（标题/描述/操作）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'\n\n<Alert>\n  <AlertTitle>注意</AlertTitle>\n  <AlertDescription>这是一条警示信息。</AlertDescription>\n</Alert>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="alert" />,
}
