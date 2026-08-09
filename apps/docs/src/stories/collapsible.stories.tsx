import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Collapsible",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "单区块的展开 / 折叠容器。\n\n## 设计使用建议\n\n### 何时使用\n单区块的展开 / 折叠容器。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>受控展开状态</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>展开状态变化回调</td></tr><tr><td><code>defaultOpen</code></td><td><code>boolean</code></td><td>初始展开</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'\r\n\r\n<Collapsible>\r\n  <CollapsibleTrigger>展开 / 收起</CollapsibleTrigger>\r\n  <CollapsibleContent>折叠区域内容</CollapsibleContent>\r\n</Collapsible>\n```",
      },
    },
  },
  argTypes: {
    open: { description: "受控展开状态", control: 'boolean' },
    onOpenChange: { description: "展开状态变化回调", control: 'text' },
    defaultOpen: { description: "初始展开", control: 'boolean' },
    disabled: { description: "禁用", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="collapsible" />,
}
