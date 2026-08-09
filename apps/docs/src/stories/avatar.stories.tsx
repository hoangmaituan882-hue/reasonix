import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Avatar",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "用户头像展示，无图片时回退为文字占位。\n\n## 设计使用建议\n\n用户头像展示，无图片时回退为文字占位。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>size</code></td><td><code>\"sm\" | \"default\" | \"lg\"</code></td><td>尺寸</td></tr><tr><td><code>fallback</code></td><td><code>React.ReactNode</code></td><td>加载失败回退</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'\n\n<Avatar>\n  <AvatarImage src=\"https://github.com/shadcn.png\" alt=\"头像\" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="avatar" />,
}
