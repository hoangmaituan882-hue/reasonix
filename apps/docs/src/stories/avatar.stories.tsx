import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Avatar",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "用户头像展示，无图片时回退为文字占位。\n\n## 设计使用建议\n\n### 何时使用\n用户/实体的头像展示，可含图片或文字回退。\n\n### 设计要点\n- 尺寸档 sm/default/lg 对应 24/32/40px，保持圆形\n- 图片加载失败用 AvatarFallback 回退（首字母/图标），离线也可用\n- 头像在列表中的对齐：与首行文字基线对齐\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>size</code></td><td><code>\"sm\" | \"default\" | \"lg\"</code></td><td>尺寸</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'\r\n\r\n<Avatar>\r\n  <AvatarImage src=\"https://github.com/shadcn.png\" alt=\"头像\" />\r\n  <AvatarFallback>CN</AvatarFallback>\r\n</Avatar>\n```",
      },
    },
  },
  argTypes: {
    size: { description: "尺寸", control: 'select', options: ["sm", "default", "lg"] },
    className: { description: "追加类名", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="avatar" />,
}
