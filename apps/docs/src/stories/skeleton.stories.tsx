import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Skeleton",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "内容加载时的占位骨架屏。\n\n## 设计使用建议\n\n内容加载时的占位骨架屏。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>尺寸/形状（w-* h-* rounded-*）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Skeleton } from '@/components/ui/skeleton'\n\n<Skeleton className=\"h-4 w-32\" />\n<Skeleton className=\"mt-2 h-8 w-full\" />\n```",
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
