import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`数据/Carousel`,tags:[`autodocs`],parameters:{docs:{description:{component:`可拖拽轮播的横向内容列表。

## 设计使用建议

可拖拽轮播的横向内容列表。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>opts</code></td><td><code>EmblaOptionsType</code></td><td>embla 轮播配置</td></tr><tr><td><code>setApi</code></td><td><code>(api: CarouselApi) => void</code></td><td>获取 API 实例</td></tr><tr><td><code>orientation</code></td><td><code>"horizontal" | "vertical"</code></td><td>方向</td></tr><tr><td><code>plugins</code></td><td><code>EmblaPluginType[]</code></td><td>embla 插件</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

<Carousel className="w-full max-w-xs">
  <CarouselContent>
    <CarouselItem>幻灯片 1</CarouselItem>
    <CarouselItem>幻灯片 2</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`carousel`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="carousel" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};