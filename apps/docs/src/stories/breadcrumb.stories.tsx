import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Breadcrumb",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "展示页面层级路径的导航痕迹。\n\n## 设计使用建议\n\n展示页面层级路径的导航痕迹。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>items</code></td><td><code>BreadcrumbItem[]</code></td><td>面包屑项</td></tr><tr><td><code>separator</code></td><td><code>React.ReactNode</code></td><td>分隔符</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'\n\n<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem><BreadcrumbLink href=\"#\">首页</BreadcrumbLink></BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem><BreadcrumbPage>当前页</BreadcrumbPage></BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="breadcrumb" />,
}
