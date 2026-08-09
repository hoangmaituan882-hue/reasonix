import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Skeleton",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "内容加载时的占位骨架屏。\n\n## 设计使用建议\n\n### 何时使用\n内容加载时的占位骨架屏。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>尺寸/形状（w-* h-* rounded-*）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Skeleton } from '@/components/ui/skeleton'\n\n<Skeleton className=\"h-4 w-32\" />\n<Skeleton className=\"mt-2 h-8 w-full\" />\n```",
      },
    },
  },
  argTypes: {
    className: { description: "尺寸/形状（w-* h-* rounded-*）", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="skeleton" />,
}
