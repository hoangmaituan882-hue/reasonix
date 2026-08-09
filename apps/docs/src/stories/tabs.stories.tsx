import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Tabs",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "在多个内容面板之间切换的选项卡。\n\n## 设计使用建议\n\n### 何时使用\n同级内容分页查看，切换不丢失状态；导航层级不同用路由/侧边栏。\n\n### 设计要点\n- 激活 tab 用 accent 文字 + 下划线/底（variant=default 或 line）\n- 键盘左右切换（radix 自带），激活 tab 进入 tab 序\n- 内容切换动画 `rx-anim-slideup` 180ms，仅 transform/opacity\n- tab 内容若需保持状态（表单），用 forceMount 或受控 value\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>defaultValue</code></td><td><code>string</code></td><td>默认激活 tab（非受控）</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td>激活 tab（受控）</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) => void</code></td><td>切换回调</td></tr><tr><td><code>orientation</code></td><td><code>\"horizontal\" | \"vertical\"</code></td><td>方向</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'\r\n\r\n<Tabs defaultValue=\"tab1\">\r\n  <TabsList>\r\n    <TabsTrigger value=\"tab1\">概览</TabsTrigger>\r\n    <TabsTrigger value=\"tab2\">详情</TabsTrigger>\r\n  </TabsList>\r\n  <TabsContent value=\"tab1\">概览内容</TabsContent>\r\n  <TabsContent value=\"tab2\">详情内容</TabsContent>\r\n</Tabs>\n```",
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
