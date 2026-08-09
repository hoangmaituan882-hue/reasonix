import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Collapsible",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "单区块的展开 / 折叠容器。\n\n## 设计使用建议\n\n单区块的展开 / 折叠容器。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>受控展开状态</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>展开状态变化回调</td></tr><tr><td><code>defaultOpen</code></td><td><code>boolean</code></td><td>初始展开</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'\n\n<Collapsible>\n  <CollapsibleTrigger>展开 / 收起</CollapsibleTrigger>\n  <CollapsibleContent>折叠区域内容</CollapsibleContent>\n</Collapsible>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="collapsible" />,
}
