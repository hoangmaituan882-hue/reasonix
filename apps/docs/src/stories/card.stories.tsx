import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Card",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "内容分组的容器卡片，承载信息与操作。\n\n## 设计使用建议\n\n内容分组的容器卡片，承载信息与操作。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>size</code></td><td><code>\"default\" | \"sm\"</code></td><td>内边距档位</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'\n\n<Card>\n  <CardHeader>\n    <CardTitle>卡片标题</CardTitle>\n    <CardDescription>一段描述文字</CardDescription>\n  </CardHeader>\n  <CardContent>卡片主体内容</CardContent>\n  <CardFooter>底部操作区</CardFooter>\n</Card>\n```",
      },
    },
  },
  argTypes: {
    size: { description: "内边距档位", control: 'select', options: ["default", "sm"] },
    className: { description: "追加类名", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="card" />,
}
