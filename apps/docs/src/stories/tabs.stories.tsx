import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Tabs",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "在多个内容面板之间切换的选项卡。\n\n## 设计使用建议\n\n在多个内容面板之间切换的选项卡。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>defaultValue</code></td><td><code>string</code></td><td>默认激活 tab（非受控）</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td>激活 tab（受控）</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) => void</code></td><td>切换回调</td></tr><tr><td><code>orientation</code></td><td><code>\"horizontal\" | \"vertical\"</code></td><td>方向</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'\n\n<Tabs defaultValue=\"tab1\">\n  <TabsList>\n    <TabsTrigger value=\"tab1\">概览</TabsTrigger>\n    <TabsTrigger value=\"tab2\">详情</TabsTrigger>\n  </TabsList>\n  <TabsContent value=\"tab1\">概览内容</TabsContent>\n  <TabsContent value=\"tab2\">详情内容</TabsContent>\n</Tabs>\n```",
      },
    },
  },
  argTypes: {
    defaultValue: { description: "默认激活 tab（非受控）", control: 'text' },
    value: { description: "激活 tab（受控）", control: 'text' },
    onValueChange: { description: "切换回调", control: 'text' },
    orientation: { description: "方向", control: 'select', options: ["horizontal", "vertical"] },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="tabs" />,
}
