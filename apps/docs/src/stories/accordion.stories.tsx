import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Accordion",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "可展开收起的手风琴列表。\n\n## 设计使用建议\n\n可展开收起的手风琴列表。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>type</code></td><td><code>\"single\" | \"multiple\"</code></td><td>展开模式</td></tr><tr><td><code>collapsible</code></td><td><code>boolean</code></td><td>single 模式可折叠</td></tr><tr><td><code>defaultValue</code></td><td><code>string | string[]</code></td><td>默认展开项</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'\n\n<Accordion type=\"single\" collapsible>\n  <AccordionItem value=\"item-1\">\n    <AccordionTrigger>问题标题</AccordionTrigger>\n    <AccordionContent>回答内容</AccordionContent>\n  </AccordionItem>\n</Accordion>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="accordion" />,
}
