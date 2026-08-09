import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Progress",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "展示任务或加载进度的条形指示器。\n\n## 设计使用建议\n\n### 何时使用\n任务进度反馈（上传、处理、加载百分比）。\n\n### 设计要点\n- 进度变化过渡 `transition-[width]` 180ms，不跳变\n- 不确定时（未知总量）用循环动效而非卡在 50%\n- 给进度条加 aria-label + aria-valuenow（可访问性）\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>value</code></td><td><code>number</code></td><td>进度值 0-100</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td>最大值（默认 100）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Progress } from '@/components/ui/progress'\r\n\r\n<Progress value={65} />\n```",
      },
    },
  },
  argTypes: {
    value: { description: "进度值 0-100", control: 'number' },
    max: { description: "最大值（默认 100）", control: 'number' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="progress" />,
}
