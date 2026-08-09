import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Drawer",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "从屏幕底部滑出的抽屉式面板。\n\n## 设计使用建议\n\n### 何时使用\n侧滑面板展示详情/编辑，保留上下文（列表→详情）；移动端尤其合适。\n\n### 设计要点\n- 从屏幕边缘滑入 340ms（`--rx-dur-slow`），方向与内容语义一致\n- shouldScaleBackground 可选：背景缩放制造层级感\n- 内部滚动区 max-h 控制，避免溢出视口\n- DrawerTitle 必填（可访问性）；ESC 关闭\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态（受控）</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>direction</code></td><td><code>\"bottom\" | \"left\" | \"right\" | \"top\"</code></td><td>抽屉方向（默认 bottom）</td></tr><tr><td><code>shouldScaleBackground</code></td><td><code>boolean</code></td><td>背景缩放</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'\r\n\r\n<Drawer>\r\n  <DrawerTrigger>打开抽屉</DrawerTrigger>\r\n  <DrawerContent>\r\n    <DrawerHeader>\r\n      <DrawerTitle>底部抽屉</DrawerTitle>\r\n    </DrawerHeader>\r\n  </DrawerContent>\r\n</Drawer>\n```",
      },
    },
  },
  argTypes: {
    open: { description: "打开状态（受控）", control: 'boolean' },
    onOpenChange: { description: "开关回调", control: 'text' },
    direction: { description: "抽屉方向（默认 bottom）", control: 'select', options: ["bottom", "left", "right", "top"] },
    shouldScaleBackground: { description: "背景缩放", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="drawer" />,
}
