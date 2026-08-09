import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Table",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "结构化数据表格。\n\n## 设计使用建议\n\n结构化数据表格。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>data</code></td><td><code>T[]</code></td><td>表格数据</td></tr><tr><td><code>columns</code></td><td><code>Column<T>[]</code></td><td>列定义</td></tr><tr><td><code>loading</code></td><td><code>boolean</code></td><td>加载态</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'\n\n<Table>\n  <TableHeader>\n    <TableRow>\n      <TableHead>姓名</TableHead>\n      <TableHead>角色</TableHead>\n    </TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow>\n      <TableCell>张三</TableCell>\n      <TableCell>管理员</TableCell>\n    </TableRow>\n  </TableBody>\n</Table>\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="table" />,
}
