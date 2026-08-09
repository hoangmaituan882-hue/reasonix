import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "表单/Textarea",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "多行文本输入区域。\n\n## 设计使用建议\n\n### 何时使用\n多行文本输入（描述、评论、代码）；高度可随内容 field-sizing 自适应。\n\n### 设计要点\n- min-h 保证可见输入区，max-h + 滚动防过度拉伸\n- 错误态 aria-invalid + 说明文字，placeholder 不替代标签\n- 长表单中 Textarea 用等宽字体场景（代码）时切换 font-mono\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>placeholder</code></td><td><code>string</code></td><td>占位提示</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用态</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Textarea } from '@/components/ui/textarea'\r\n\r\n<Textarea placeholder=\"请输入多行内容\" />\n```",
      },
    },
  },
  argTypes: {
    placeholder: { description: "占位提示", control: 'text' },
    disabled: { description: "禁用态", control: 'boolean' },
    className: { description: "追加类名", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="textarea" />,
}
