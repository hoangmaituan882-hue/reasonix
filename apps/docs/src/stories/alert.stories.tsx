import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "反馈/Alert",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "页面内嵌提示条，强调操作结果或注意事项。\n\n## 设计使用建议\n\n### 何时使用\n页面内嵌提示条，强调操作结果或注意事项。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>variant</code></td><td><code>\"default\" | \"destructive\"</code></td><td>视觉变体</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr><tr><td><code>children</code></td><td><code>React.ReactNode</code></td><td>内容（标题/描述/操作）</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'\r\n\r\n<Alert>\r\n  <AlertTitle>注意</AlertTitle>\r\n  <AlertDescription>这是一条警示信息。</AlertDescription>\r\n</Alert>\n```",
      },
    },
  },
  argTypes: {
    variant: { description: "视觉变体", control: 'select', options: ["default", "destructive"] },
    className: { description: "追加类名", control: 'text' },
    children: { description: "内容（标题/描述/操作）", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="alert" />,
}
