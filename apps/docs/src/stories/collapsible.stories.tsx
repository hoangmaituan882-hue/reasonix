import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Collapsible",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "单区块的展开 / 折叠容器。\n\n## 设计使用建议\n\n### 何时使用\n局部内容展开/收起（筛选区、高级选项）；与 Accordion 的区别是单个独立折叠。\n\n### 设计要点\n- Trigger 用 aria-expanded 表达状态；内容区动画高度过渡\n- 默认收起隐藏次要信息，展开项保持用户选择（受控）\n- 内容复杂时收起状态只留摘要，避免\"隐藏关键操作\"\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>受控展开状态</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>展开状态变化回调</td></tr><tr><td><code>defaultOpen</code></td><td><code>boolean</code></td><td>初始展开</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'\r\n\r\n<Collapsible>\r\n  <CollapsibleTrigger>展开 / 收起</CollapsibleTrigger>\r\n  <CollapsibleContent>折叠区域内容</CollapsibleContent>\r\n</Collapsible>\n```",
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
