import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Breadcrumb",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "展示页面层级路径的导航痕迹。\n\n## 设计使用建议\n\n### 何时使用\n展示页面层级路径（首页 > 分类 > 当前），辅助导航与回退。\n\n### 设计要点\n- 当前页用 BreadcrumbPage（非链接），祖先用 Link\n- 分隔符 `>` 默认；层级浅（≤3）时面包屑可省略\n- 移动端折叠为\"返回上一级\"单链\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>容器类名</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>子组件组合（List/Item/Link/Page/Separator）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'\r\n\r\n<Breadcrumb>\r\n  <BreadcrumbList>\r\n    <BreadcrumbItem><BreadcrumbLink href=\"#\">首页</BreadcrumbLink></BreadcrumbItem>\r\n    <BreadcrumbSeparator />\r\n    <BreadcrumbItem><BreadcrumbPage>当前页</BreadcrumbPage></BreadcrumbItem>\r\n  </BreadcrumbList>\r\n</Breadcrumb>\n```",
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
