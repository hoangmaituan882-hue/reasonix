import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Calendar",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "日期选择日历，支持单选与区间选择。\n\n## 设计使用建议\n\n### 何时使用\n日期选择日历，支持单选与区间选择。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>mode</code></td><td><code>\"single\" | \"multiple\" | \"range\"</code></td><td>选择模式</td></tr><tr><td><code>selected</code></td><td><code>Date | Date[]</code></td><td>选中日期</td></tr><tr><td><code>onSelect</code></td><td><code>(date: Date | undefined) => void</code></td><td>选择回调</td></tr><tr><td><code>disabled</code></td><td><code>Matcher | Matcher[]</code></td><td>禁用日期</td></tr><tr><td><code>numberOfMonths</code></td><td><code>number</code></td><td>显示月数</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Calendar } from '@/components/ui/calendar'\n\n<Calendar mode=\"single\" selected={date} onSelect={setDate} />\n```",
      },
    },
  },
  argTypes: {
    mode: { description: "选择模式", control: 'select', options: ["single", "multiple", "range"] },
    selected: { description: "选中日期", control: 'text' },
    onSelect: { description: "选择回调", control: 'text' },
    disabled: { description: "禁用日期", control: 'text' },
    numberOfMonths: { description: "显示月数", control: 'number' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="calendar" />,
}
