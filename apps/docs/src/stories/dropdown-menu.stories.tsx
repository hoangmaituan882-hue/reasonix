import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Dropdown Menu",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "菜单按钮展开的操作列表。\n\n## 设计使用建议\n\n### 何时使用\n菜单按钮展开的操作列表。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>受控打开</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>打开状态回调</td></tr><tr><td><code>modal</code></td><td><code>boolean</code></td><td>模态模式（点击外部不关）</td></tr><tr><td><code>dir</code></td><td><code>\"ltr\" | \"rtl\"</code></td><td>方向</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'\n\n<DropdownMenu>\n  <DropdownMenuTrigger>操作</DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuLabel>账户</DropdownMenuLabel>\n    <DropdownMenuItem>编辑</DropdownMenuItem>\n    <DropdownMenuSeparator />\n    <DropdownMenuItem>删除</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>\n```",
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
