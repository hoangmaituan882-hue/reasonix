import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Command",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "命令面板 / 快速搜索列表。\n\n## 设计使用建议\n\n### 何时使用\n命令面板/搜索（Cmd+K 呼出），快速导航或执行动作。\n\n### 设计要点\n- CommandDialog 组合为模态搜索；输入即过滤（cmdk）\n- 分组 + 空态提示（CommandEmpty）必须有，无结果时引导\n- 键盘：方向键导航 + 回车执行 + ESC 关闭（cmdk 内置）\n- 命令项用图标+文字+快捷键提示右对齐\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>shouldFilter</code></td><td><code>boolean</code></td><td>是否启用内置过滤（cmdk）</td></tr><tr><td><code>filter</code></td><td><code>(value, search) => number</code></td><td>自定义过滤函数（cmdk）</td></tr><tr><td><code>loop</code></td><td><code>boolean</code></td><td>键盘循环导航（cmdk）</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command'\r\n\r\n<Command>\r\n  <CommandInput placeholder=\"搜索命令…\" />\r\n  <CommandList>\r\n    <CommandEmpty>无结果</CommandEmpty>\r\n    <CommandGroup heading=\"操作\">\r\n      <CommandItem>新建会话</CommandItem>\r\n      <CommandItem>打开设置</CommandItem>\r\n    </CommandGroup>\r\n  </CommandList>\r\n</Command>\n```",
      },
    },
  },
  argTypes: {
    shouldFilter: { description: "是否启用内置过滤（cmdk）", control: 'boolean' },
    filter: { description: "自定义过滤函数（cmdk）", control: 'text' },
    loop: { description: "键盘循环导航（cmdk）", control: 'boolean' },
    className: { description: "追加类名", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="command" />,
}
