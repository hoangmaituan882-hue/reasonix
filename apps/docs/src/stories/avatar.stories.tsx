import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Avatar",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "用户头像展示，无图片时回退为文字占位。\n\n## 设计使用建议\n\n### 何时使用\n用户头像展示，无图片时回退为文字占位。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>size</code></td><td><code>\"sm\" | \"default\" | \"lg\"</code></td><td>尺寸</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'\n\n<Avatar>\n  <AvatarImage src=\"https://github.com/shadcn.png\" alt=\"头像\" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>\n```",
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
