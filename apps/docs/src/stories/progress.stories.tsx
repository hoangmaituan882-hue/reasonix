import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Progress",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "展示任务或加载进度的条形指示器。\n\n## 设计使用建议\n\n### 何时使用\n展示任务或加载进度的条形指示器。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>value</code></td><td><code>number</code></td><td>进度值 0-100</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td>最大值（默认 100）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Progress } from '@/components/ui/progress'\r\n\r\n<Progress value={65} />\n```",
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
