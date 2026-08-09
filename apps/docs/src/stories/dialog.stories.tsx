import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Dialog",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "居中模态弹窗，用于需要聚焦确认的场景。\n\n## 设计使用建议\n\n### 何时使用\n居中模态弹窗，用于需要聚焦确认的场景。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态（受控）</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>showCloseButton</code></td><td><code>boolean</code></td><td>显示关闭按钮（默认 true）</td></tr><tr><td><code>modal</code></td><td><code>boolean</code></td><td>模态模式（默认 true）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'\r\n\r\n<Dialog>\r\n  <DialogTrigger>打开弹窗</DialogTrigger>\r\n  <DialogContent>\r\n    <DialogHeader>\r\n      <DialogTitle>确认操作</DialogTitle>\r\n      <DialogDescription>此操作不可撤销。</DialogDescription>\r\n    </DialogHeader>\r\n  </DialogContent>\r\n</Dialog>\n```",
      },
    },
  },
  argTypes: {
    open: { description: "打开状态（受控）", control: 'boolean' },
    onOpenChange: { description: "开关回调", control: 'text' },
    showCloseButton: { description: "显示关闭按钮（默认 true）", control: 'boolean' },
    modal: { description: "模态模式（默认 true）", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="dialog" />,
}
