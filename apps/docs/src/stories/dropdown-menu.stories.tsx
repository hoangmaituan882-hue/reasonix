import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Dropdown Menu",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "菜单按钮展开的操作列表。\n\n## 设计使用建议\n\n### 何时使用\n触发按钮后的操作列表（更多操作、用户菜单）；动作数量 3-8 个。\n\n### 设计要点\n- 120ms 弹出（`--rx-dur-fast`），origin 对齐触发元素\n- 危险操作（删除）放列表底部，配 destructive 样式\n- 分组用 Label + Separator；长列表滚动（max-h）\n- 键盘上下导航 + 回车执行（radix 内置）\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>受控打开</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>打开状态回调</td></tr><tr><td><code>modal</code></td><td><code>boolean</code></td><td>模态模式（点击外部不关）</td></tr><tr><td><code>dir</code></td><td><code>\"ltr\" | \"rtl\"</code></td><td>方向</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'\r\n\r\n<DropdownMenu>\r\n  <DropdownMenuTrigger>操作</DropdownMenuTrigger>\r\n  <DropdownMenuContent>\r\n    <DropdownMenuLabel>账户</DropdownMenuLabel>\r\n    <DropdownMenuItem>编辑</DropdownMenuItem>\r\n    <DropdownMenuSeparator />\r\n    <DropdownMenuItem>删除</DropdownMenuItem>\r\n  </DropdownMenuContent>\r\n</DropdownMenu>\n```",
      },
    },
  },
  argTypes: {
    open: { description: "受控打开", control: 'boolean' },
    onOpenChange: { description: "打开状态回调", control: 'text' },
    modal: { description: "模态模式（点击外部不关）", control: 'boolean' },
    dir: { description: "方向", control: 'select', options: ["ltr", "rtl"] },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="dropdown-menu" />,
}
