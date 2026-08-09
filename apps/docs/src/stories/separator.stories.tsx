import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "基础/Separator",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "分隔内容区块的横向或纵向分割线。\n\n## 设计使用建议\n\n### 何时使用\n分隔内容区块的横向或纵向分割线。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>orientation</code></td><td><code>\"horizontal\" | \"vertical\"</code></td><td>分隔线方向</td></tr><tr><td><code>decorative</code></td><td><code>boolean</code></td><td>装饰性（隐藏于 a11y 树）</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Separator } from '@/components/ui/separator'\n\n<Separator />\n<Separator className=\"my-4\" />\n<Separator orientation=\"vertical\" className=\"mx-4 h-6\" />\n```",
      },
    },
  },
  argTypes: {
    orientation: { description: "分隔线方向", control: 'select', options: ["horizontal", "vertical"] },
    decorative: { description: "装饰性（隐藏于 a11y 树）", control: 'boolean' },
    className: { description: "追加类名", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="separator" />,
}
