import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Pagination",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "分页导航，浏览多页数据。\n\n## 设计使用建议\n\n分页导航，浏览多页数据。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>page</code></td><td><code>number</code></td><td>当前页</td></tr><tr><td><code>total</code></td><td><code>number</code></td><td>总页数</td></tr><tr><td><code>onPageChange</code></td><td><code>(page: number) => void</code></td><td>翻页回调</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination'\n\n<Pagination>\n  <PaginationContent>\n    <PaginationItem><PaginationPrevious href=\"#\" /></PaginationItem>\n    <PaginationItem><PaginationLink href=\"#\" isActive>1</PaginationLink></PaginationItem>\n    <PaginationItem><PaginationLink href=\"#\">2</PaginationLink></PaginationItem>\n    <PaginationItem><PaginationNext href=\"#\" /></PaginationItem>\n  </PaginationContent>\n</Pagination>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="pagination" />,
}
