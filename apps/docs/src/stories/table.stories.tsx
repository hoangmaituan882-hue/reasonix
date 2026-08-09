import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Table",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "结构化数据表格。\n\n## 设计使用建议\n\n### 何时使用\n结构化数据展示，支持列对齐与扫描；数据量大时配合虚拟滚动。\n\n### 设计要点\n- 表头 `--rx-fg-dim` 次级色 + 底部 border；单元格 `--rx-fg`\n- 数字列右对齐 + tabular-nums，文本列左对齐\n- 行 hover 用 muted 底提示可交互；可排序列加箭头指示\n- 响应式：窄屏时允许横向滚动而非挤压列\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>容器类名</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>子组件组合（TableHeader/TableBody/TableRow/TableHead/TableCell）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'\r\n\r\n<Table>\r\n  <TableHeader>\r\n    <TableRow>\r\n      <TableHead>姓名</TableHead>\r\n      <TableHead>角色</TableHead>\r\n    </TableRow>\r\n  </TableHeader>\r\n  <TableBody>\r\n    <TableRow>\r\n      <TableCell>张三</TableCell>\r\n      <TableCell>管理员</TableCell>\r\n    </TableRow>\r\n  </TableBody>\r\n</Table>\n```",
      },
    },
  },
  argTypes: {
    className: { description: "容器类名", control: 'text' },
    children: { description: "子组件组合（TableHeader/TableBody/TableRow/TableHead/TableCell）", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="table" />,
}
