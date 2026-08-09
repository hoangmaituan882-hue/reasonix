import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "导航/Pagination",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "分页导航，浏览多页数据。\n\n## 设计使用建议\n\n### 何时使用\n分页导航，浏览多页数据。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>容器类名</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>子组件组合（Content/Item/Link/Previous/Next/Ellipsis）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination'\n\n<Pagination>\n  <PaginationContent>\n    <PaginationItem><PaginationPrevious href=\"#\" /></PaginationItem>\n    <PaginationItem><PaginationLink href=\"#\" isActive>1</PaginationLink></PaginationItem>\n    <PaginationItem><PaginationLink href=\"#\">2</PaginationLink></PaginationItem>\n    <PaginationItem><PaginationNext href=\"#\" /></PaginationItem>\n  </PaginationContent>\n</Pagination>\n```",
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
