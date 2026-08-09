import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Sheet",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "侧边滑出面板，常用于详情或设置抽屉。\n\n## 设计使用建议\n\n### 何时使用\n侧边滑出面板，常用于详情或设置抽屉。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>side</code></td><td><code>\"top\" | \"right\" | \"bottom\" | \"left\"</code></td><td>面板方向（Context 回退）</td></tr><tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>showCloseButton</code></td><td><code>boolean</code></td><td>显示关闭按钮</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'\r\n\r\n<Sheet>\r\n  <SheetTrigger>打开侧栏</SheetTrigger>\r\n  <SheetContent side=\"right\">\r\n    <SheetHeader><SheetTitle>侧边面板</SheetTitle></SheetHeader>\r\n  </SheetContent>\r\n</Sheet>\n```",
      },
    },
  },
  argTypes: {
    side: { description: "面板方向（Context 回退）", control: 'select', options: ["top", "right", "bottom", "left"] },
    open: { description: "打开状态", control: 'boolean' },
    onOpenChange: { description: "开关回调", control: 'text' },
    showCloseButton: { description: "显示关闭按钮", control: 'boolean' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="sheet" />,
}
