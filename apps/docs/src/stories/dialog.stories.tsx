import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Dialog",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "居中模态弹窗，用于需要聚焦确认的场景。\n\n## 设计使用建议\n\n### 何时使用\n需要用户聚焦的模态操作（确认、表单、详情）；非阻断信息用 Popover/Alert。\n\n### 设计要点\n- 入场 220ms（`--rx-dur-mid`）zoom-in-95 + fade，遮罩 420ms 淡入\n- 标题必填（DialogTitle），描述可选；ESC 关闭 + 点击遮罩关闭\n- 内容过长时 DialogContent 内滚动，不撑满视口\n- 表单型 Dialog 关闭前校验，避免误关丢数据\n\n### 避免误用\n- 嵌套 Dialog 体验差，改用独立页面或 Drawer\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态（受控）</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>showCloseButton</code></td><td><code>boolean</code></td><td>显示关闭按钮（默认 true）</td></tr><tr><td><code>modal</code></td><td><code>boolean</code></td><td>模态模式（默认 true）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'\r\n\r\n<Dialog>\r\n  <DialogTrigger>打开弹窗</DialogTrigger>\r\n  <DialogContent>\r\n    <DialogHeader>\r\n      <DialogTitle>确认操作</DialogTitle>\r\n      <DialogDescription>此操作不可撤销。</DialogDescription>\r\n    </DialogHeader>\r\n  </DialogContent>\r\n</Dialog>\n```",
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
