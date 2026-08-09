import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Calendar",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "日期选择日历，支持单选与区间选择。\n\n## 设计使用建议\n\n日期选择日历，支持单选与区间选择。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>mode</code></td><td><code>\"single\" | \"multiple\" | \"range\"</code></td><td>选择模式</td></tr><tr><td><code>selected</code></td><td><code>Date | Date[]</code></td><td>选中日期</td></tr><tr><td><code>onSelect</code></td><td><code>(date: Date | undefined) => void</code></td><td>选择回调</td></tr><tr><td><code>disabled</code></td><td><code>Matcher | Matcher[]</code></td><td>禁用日期</td></tr><tr><td><code>numberOfMonths</code></td><td><code>number</code></td><td>显示月数</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Calendar } from '@/components/ui/calendar'\n\n<Calendar mode=\"single\" selected={date} onSelect={setDate} />\n```",
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="calendar" />,
}
