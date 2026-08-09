import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`导航/Accordion`,tags:[`autodocs`],parameters:{docs:{description:{component:`可展开收起的手风琴列表。

## 设计使用建议

可展开收起的手风琴列表。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>type</code></td><td><code>"single" | "multiple"</code></td><td>展开模式</td></tr><tr><td><code>collapsible</code></td><td><code>boolean</code></td><td>single 模式可折叠</td></tr><tr><td><code>defaultValue</code></td><td><code>string | string[]</code></td><td>默认展开项</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>问题标题</AccordionTrigger>
    <AccordionContent>回答内容</AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`accordion`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="accordion" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};