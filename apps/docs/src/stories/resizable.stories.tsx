import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Resizable",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "可拖拽调节尺寸的分栏面板。\n\n## 设计使用建议\n\n### 何时使用\n可拖拽调整尺寸的面板（IDE、预览+编辑分栏）。\n\n### 设计要点\n- defaultSize 百分比 + minSize 防面板塌陷\n- 拖拽手柄视觉：`--rx-border` 细线 + hover 高亮，拖拽中加指示\n- 窄屏时降级为堆叠（面板组 responsive）\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>direction</code></td><td><code>\"horizontal\" | \"vertical\"</code></td><td>面板排列方向</td></tr><tr><td><code>defaultSize</code></td><td><code>number</code></td><td>面板初始百分比（Panel）</td></tr><tr><td><code>minSize</code></td><td><code>number</code></td><td>面板最小百分比（Panel）</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'\r\n\r\n<ResizablePanelGroup direction=\"horizontal\">\r\n  <ResizablePanel defaultSize={50}>左面板</ResizablePanel>\r\n  <ResizableHandle />\r\n  <ResizablePanel defaultSize={50}>右面板</ResizablePanel>\r\n</ResizablePanelGroup>\n```",
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
