import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Drawer",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "从屏幕底部滑出的抽屉式面板。\n\n## 设计使用建议\n\n### 何时使用\n从屏幕底部滑出的抽屉式面板。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态（受控）</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>direction</code></td><td><code>\"bottom\" | \"left\" | \"right\" | \"top\"</code></td><td>抽屉方向（默认 bottom）</td></tr><tr><td><code>shouldScaleBackground</code></td><td><code>boolean</code></td><td>背景缩放</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'\n\n<Drawer>\n  <DrawerTrigger>打开抽屉</DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader>\n      <DrawerTitle>底部抽屉</DrawerTitle>\n    </DrawerHeader>\n  </DrawerContent>\n</Drawer>\n```",
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
