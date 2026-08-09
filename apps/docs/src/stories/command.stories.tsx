import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Command",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "命令面板 / 快速搜索列表。\n\n## 设计使用建议\n\n命令面板 / 快速搜索列表。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>命令面板开关</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>placeholder</code></td><td><code>string</code></td><td>搜索占位</td></tr><tr><td><code>items</code></td><td><code>CommandItem[]</code></td><td>命令项数据</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command'\n\n<Command>\n  <CommandInput placeholder=\"搜索命令…\" />\n  <CommandList>\n    <CommandEmpty>无结果</CommandEmpty>\n    <CommandGroup heading=\"操作\">\n      <CommandItem>新建会话</CommandItem>\n      <CommandItem>打开设置</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>\n```",
      },
    },
  },
  argTypes: {
    open: { description: "命令面板开关", control: 'boolean' },
    onOpenChange: { description: "开关回调", control: 'text' },
    placeholder: { description: "搜索占位", control: 'text' },
    items: { description: "命令项数据", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="command" />,
}
