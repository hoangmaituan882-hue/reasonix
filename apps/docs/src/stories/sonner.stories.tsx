import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Sonner",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "全局轻提示 Toast 通知。\n\n## 设计使用建议\n\n全局轻提示 Toast 通知。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>position</code></td><td><code>\"top-right\" | \"top-center\" | \"bottom-right\" | ...</code></td><td>通知位置</td></tr><tr><td><code>theme</code></td><td><code>\"light\" | \"dark\" | \"system\"</code></td><td>主题</td></tr><tr><td><code>richColors</code></td><td><code>boolean</code></td><td>丰富配色</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Toaster } from '@/components/ui/sonner'\nimport { toast } from 'sonner'\nimport { Button } from '@/components/ui/button'\n\n<Toaster />\n<Button onClick={() => toast.success('保存成功')}>触发通知</Button>\n```",
      },
    },
  },
  argTypes: {
    position: { description: "通知位置", control: 'select', options: ["top-right", "top-center", "bottom-right", "..."] },
    theme: { description: "主题", control: 'select', options: ["light", "dark", "system"] },
    richColors: { description: "丰富配色", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="sonner" />,
}
