import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Carousel",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "可拖拽轮播的横向内容列表。\n\n## 设计使用建议\n\n### 何时使用\n可拖拽轮播的横向内容列表。\n\n### 设计要点\n- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring\n\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>opts</code></td><td><code>EmblaOptionsType</code></td><td>embla 轮播配置</td></tr><tr><td><code>setApi</code></td><td><code>(api: CarouselApi) => void</code></td><td>获取 API 实例</td></tr><tr><td><code>orientation</code></td><td><code>\"horizontal\" | \"vertical\"</code></td><td>方向</td></tr><tr><td><code>plugins</code></td><td><code>EmblaPluginType[]</code></td><td>embla 插件</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'\r\n\r\n<Carousel className=\"w-full max-w-xs\">\r\n  <CarouselContent>\r\n    <CarouselItem>幻灯片 1</CarouselItem>\r\n    <CarouselItem>幻灯片 2</CarouselItem>\r\n  </CarouselContent>\r\n  <CarouselPrevious />\r\n  <CarouselNext />\r\n</Carousel>\n```",
      },
    },
  },
  argTypes: {
    opts: { description: "embla 轮播配置", control: 'text' },
    setApi: { description: "获取 API 实例", control: 'text' },
    orientation: { description: "方向", control: 'select', options: ["horizontal", "vertical"] },
    plugins: { description: "embla 插件", control: 'text' },
  },
}

export default meta
type Story = StoryObj

export const Demo: Story = {
  render: () => <ComponentPreview id="carousel" />,
}
