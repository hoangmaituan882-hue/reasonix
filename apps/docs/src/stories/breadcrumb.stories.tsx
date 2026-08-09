import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Breadcrumb",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "展示页面层级路径的导航痕迹。\n\n## 设计使用建议\n\n### 何时使用\n展示页面层级路径的导航痕迹。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>容器类名</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>子组件组合（List/Item/Link/Page/Separator）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'\n\n<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem><BreadcrumbLink href=\"#\">首页</BreadcrumbLink></BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem><BreadcrumbPage>当前页</BreadcrumbPage></BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>\n```",
      },
    },
  },
  argTypes: {
    className: { description: "容器类名", control: 'text' },
    children: { description: "子组件组合（List/Item/Link/Page/Separator）", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="breadcrumb" />,
}
