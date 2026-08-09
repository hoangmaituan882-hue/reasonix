import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Resizable",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "可拖拽调节尺寸的分栏面板。\n\n## 设计使用建议\n\n### 何时使用\n可拖拽调节尺寸的分栏面板。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>direction</code></td><td><code>\"horizontal\" | \"vertical\"</code></td><td>面板排列方向</td></tr><tr><td><code>defaultSize</code></td><td><code>number</code></td><td>面板初始百分比（Panel）</td></tr><tr><td><code>minSize</code></td><td><code>number</code></td><td>面板最小百分比（Panel）</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'\n\n<ResizablePanelGroup direction=\"horizontal\">\n  <ResizablePanel defaultSize={50}>左面板</ResizablePanel>\n  <ResizableHandle />\n  <ResizablePanel defaultSize={50}>右面板</ResizablePanel>\n</ResizablePanelGroup>\n```",
      },
    },
  },
  argTypes: {
    direction: { description: "面板排列方向", control: 'select', options: ["horizontal", "vertical"] },
    defaultSize: { description: "面板初始百分比（Panel）", control: 'number' },
    minSize: { description: "面板最小百分比（Panel）", control: 'number' },
    className: { description: "追加类名", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="resizable" />,
}
