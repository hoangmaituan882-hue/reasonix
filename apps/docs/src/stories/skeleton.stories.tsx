import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Skeleton",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "内容加载时的占位骨架屏。\n\n## 设计使用建议\n\n### 何时使用\n内容加载中的占位骨架，减少布局跳动（CLS）。\n\n### 设计要点\n- 形状尽量贴近真实内容（文字条/图片块），宽度用百分比模拟\n- shimmer 流光 5s 循环（`--rx-shimmer`），reduced-motion 下自动静止\n- 加载完成后移除，不要与真实内容同时渲染\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>className</code></td><td><code>string</code></td><td>尺寸/形状（w-* h-* rounded-*）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Skeleton } from '@/components/ui/skeleton'\r\n\r\n<Skeleton className=\"h-4 w-32\" />\r\n<Skeleton className=\"mt-2 h-8 w-full\" />\n```",
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
