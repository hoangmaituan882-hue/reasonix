import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Card",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "内容分组的容器卡片，承载信息与操作。\n\n## 设计使用建议\n\n### 何时使用\n内容分组的容器，承载一组相关信息与操作；适合仪表盘、列表项、设置面板。\n\n### 设计要点\n- 卡片内边距用 `--rx-r-m`（8px）圆角，边框 `--rx-border-soft` 发丝描边（DESIGN.md §3）\n- 卡片可作为可点击容器，但内部交互按钮要避免嵌套点击冲突\n- 一组卡片对齐：同高、同圆角、同内边距，视觉节奏一致\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>size</code></td><td><code>\"default\" | \"sm\"</code></td><td>内边距档位</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'\r\n\r\n<Card>\r\n  <CardHeader>\r\n    <CardTitle>卡片标题</CardTitle>\r\n    <CardDescription>一段描述文字</CardDescription>\r\n  </CardHeader>\r\n  <CardContent>卡片主体内容</CardContent>\r\n  <CardFooter>底部操作区</CardFooter>\r\n</Card>\n```",
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
