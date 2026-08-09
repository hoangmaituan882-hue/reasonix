import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentPreview } from '../../../showcase/src/components/component-preview'

const meta: Meta = {
  title: "数据/Carousel",
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "可拖拽轮播的横向内容列表。\n\n## 设计使用建议\n\n可拖拽轮播的横向内容列表。\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n<tr><td><code>opts</code></td><td><code>EmblaOptionsType</code></td><td>embla 轮播配置</td></tr><tr><td><code>setApi</code></td><td><code>(api: CarouselApi) => void</code></td><td>获取 API 实例</td></tr><tr><td><code>orientation</code></td><td><code>\"horizontal\" | \"vertical\"</code></td><td>方向</td></tr><tr><td><code>plugins</code></td><td><code>EmblaPluginType[]</code></td><td>embla 插件</td></tr>\n</tbody>\n</table>\n\n## 代码示例\n\n```tsx\nimport { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'\n\n<Carousel className=\"w-full max-w-xs\">\n  <CarouselContent>\n    <CarouselItem>幻灯片 1</CarouselItem>\n    <CarouselItem>幻灯片 2</CarouselItem>\n  </CarouselContent>\n  <CarouselPrevious />\n  <CarouselNext />\n</Carousel>\n```",
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
