import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Card",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "内容分组的容器卡片，承载信息与操作。\n\n## 设计使用建议\n\n### 何时使用\n内容分组的容器卡片，承载信息与操作。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>size</code></td><td><code>\"default\" | \"sm\"</code></td><td>内边距档位</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'\r\n\r\n<Card>\r\n  <CardHeader>\r\n    <CardTitle>卡片标题</CardTitle>\r\n    <CardDescription>一段描述文字</CardDescription>\r\n  </CardHeader>\r\n  <CardContent>卡片主体内容</CardContent>\r\n  <CardFooter>底部操作区</CardFooter>\r\n</Card>\n```",
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
