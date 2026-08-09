import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Accordion",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "可展开收起的手风琴列表。\n\n## 设计使用建议\n\n### 何时使用\n垂直折叠的内容分组（FAQ、设置分区）；每次展开一项时用 type=\"single\"。\n\n### 设计要点\n- 触发器 hover 下划线提示可交互；展开箭头 180° 旋转（120ms）\n- type=\"single\" collapsible 允许全部收起；multiple 独立展开\n- 内容动画只动 height（radix 内置），reduced-motion 下瞬时展开\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>type</code></td><td><code>\"single\" | \"multiple\"</code></td><td>展开模式</td></tr><tr><td><code>collapsible</code></td><td><code>boolean</code></td><td>single 模式可折叠</td></tr><tr><td><code>defaultValue</code></td><td><code>string | string[]</code></td><td>默认展开项</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'\r\n\r\n<Accordion type=\"single\" collapsible>\r\n  <AccordionItem value=\"item-1\">\r\n    <AccordionTrigger>问题标题</AccordionTrigger>\r\n    <AccordionContent>回答内容</AccordionContent>\r\n  </AccordionItem>\r\n</Accordion>\n```",
      },
    },
  },
  argTypes: {
    type: { description: "展开模式", control: 'select', options: ["single", "multiple"] },
    collapsible: { description: "single 模式可折叠", control: 'boolean' },
    defaultValue: { description: "默认展开项", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="accordion" />,
}
