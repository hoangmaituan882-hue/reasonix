import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Toaster",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "全局轻提示 Toast 通知。\n\n## 设计使用建议\n\n### 何时使用\n全局轻提示 Toast 通知。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>position</code></td><td><code>\"top-right\" | \"top-center\" | \"bottom-right\" | ...</code></td><td>通知位置</td></tr><tr><td><code>theme</code></td><td><code>\"light\" | \"dark\" | \"system\"</code></td><td>主题</td></tr><tr><td><code>richColors</code></td><td><code>boolean</code></td><td>丰富配色</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Toaster } from '@/components/ui/sonner'\r\nimport { toast } from 'sonner'\r\nimport { Button } from '@/components/ui/button'\r\n\r\n<Toaster />\r\n<Button onClick={() => toast.success('保存成功')}>触发通知</Button>\n```",
      },
    },
  },
  argTypes: {
    position: { description: "通知位置", control: 'text' },
    theme: { description: "主题", control: 'select', options: ["light", "dark", "system"] },
    richColors: { description: "丰富配色", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="sonner" />,
}
