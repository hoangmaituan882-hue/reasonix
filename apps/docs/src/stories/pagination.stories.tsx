import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Pagination",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "分页导航，浏览多页数据。\n\n## 设计使用建议\n\n### 何时使用\n长列表分页导航（页数多时）；数据少/无限滚动场景不用。\n\n### 设计要点\n- Previous/Next 语义链接 + 页码链接（aria-current 标记当前页）\n- 总页数大时用省略号（Ellipsis）压缩中间页码\n- 页码变化需有内容反馈（滚动到列表顶部）\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>容器类名</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>子组件组合（Content/Item/Link/Previous/Next/Ellipsis）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination'\r\n\r\n<Pagination>\r\n  <PaginationContent>\r\n    <PaginationItem><PaginationPrevious href=\"#\" /></PaginationItem>\r\n    <PaginationItem><PaginationLink href=\"#\" isActive>1</PaginationLink></PaginationItem>\r\n    <PaginationItem><PaginationLink href=\"#\">2</PaginationLink></PaginationItem>\r\n    <PaginationItem><PaginationNext href=\"#\" /></PaginationItem>\r\n  </PaginationContent>\r\n</Pagination>\n```",
      },
    },
  },
  argTypes: {
    className: { description: "容器类名", control: 'text' },
    children: { description: "子组件组合（Content/Item/Link/Previous/Next/Ellipsis）", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="pagination" />,
}
