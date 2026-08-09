import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Command",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "命令面板 / 快速搜索列表。\n\n## 设计使用建议\n\n### 何时使用\n命令面板 / 快速搜索列表。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>shouldFilter</code></td><td><code>boolean</code></td><td>是否启用内置过滤（cmdk）</td></tr><tr><td><code>filter</code></td><td><code>(value, search) => number</code></td><td>自定义过滤函数（cmdk）</td></tr><tr><td><code>loop</code></td><td><code>boolean</code></td><td>键盘循环导航（cmdk）</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command'\n\n<Command>\n  <CommandInput placeholder=\"搜索命令…\" />\n  <CommandList>\n    <CommandEmpty>无结果</CommandEmpty>\n    <CommandGroup heading=\"操作\">\n      <CommandItem>新建会话</CommandItem>\n      <CommandItem>打开设置</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>\n```",
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
