import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@/components/ui/button'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Button",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "触发操作的主要交互入口，支持多种视觉强调级别。\n\n## 设计使用建议\n\n### 何时使用\n触发操作的主要入口。优先用 Button 承载页面级动作，避免链接式跳转用按钮、按钮式提交用链接。\n\n### 设计要点\n- 层级靠色彩而非尺寸：primary=accent 实底、secondary 灰底、outline 描边、ghost 幽灵（DESIGN.md §4）\n- 危险操作用 destructive 变体（`--err` 语义色），禁用的按钮不触发也不可聚焦\n- hover 反馈 120ms（`--rx-dur-fast`），按下 `active:scale(0.97)` 微缩放\n- 图标按钮必须带 aria-label；纯图标时用 icon size 保证点击热区 32px+\n\n### 避免误用\n- 不要在 primary 上叠加渐变（CTA 渐变是独立场景，见 rx-grad）\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>variant</code></td><td><code>\"default\" | \"secondary\" | \"outline\" | \"ghost\" | \"destructive\" | \"link\"</code></td><td>视觉变体</td></tr><tr><td><code>size</code></td><td><code>\"default\" | \"xs\" | \"sm\" | \"lg\" | \"icon\" | \"icon-xs\" | \"icon-sm\" | \"icon-lg\"</code></td><td>尺寸档位</td></tr><tr><td><code>asChild</code></td><td><code>boolean</code></td><td>作为子元素渲染（Slot）</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名（twMerge 合并）</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>按钮内容</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Button } from '@/components/ui/button'\r\n\r\n<Button variant=\"default\">主要按钮</Button>\r\n<Button variant=\"secondary\">次要按钮</Button>\r\n<Button variant=\"outline\">描边按钮</Button>\r\n<Button variant=\"ghost\">幽灵按钮</Button>\r\n<Button variant=\"destructive\">危险按钮</Button>\r\n<Button variant=\"link\">链接按钮</Button>\n```",
      },
    },
  },
  argTypes: {
    variant: { description: "视觉变体", control: 'select', options: ["default", "secondary", "outline", "ghost", "destructive", "link"] },
    size: { description: "尺寸档位", control: 'select', options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"] },
    asChild: { description: "作为子元素渲染（Slot）", control: 'boolean' },
    className: { description: "追加类名（twMerge 合并）", control: 'text' },
    children: { description: "按钮内容", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  args: {
    children: "按钮",
    variant: "default",
    size: "default",
  },
  render: (args) => { const { children, variant, size } = args; return (() => { const { children, variant, size } = args; return <Button variant={variant} size={size}>{children}</Button> })() },
}
