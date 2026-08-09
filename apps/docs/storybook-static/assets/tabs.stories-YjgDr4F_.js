import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`数据/Tabs`,tags:[`autodocs`],parameters:{docs:{description:{component:`在多个内容面板之间切换的选项卡。

## 设计使用建议

在多个内容面板之间切换的选项卡。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>defaultValue</code></td><td><code>string</code></td><td>默认激活 tab（非受控）</td></tr><tr><td><code>value</code></td><td><code>string</code></td><td>激活 tab（受控）</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) => void</code></td><td>切换回调</td></tr><tr><td><code>orientation</code></td><td><code>"horizontal" | "vertical"</code></td><td>方向</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">概览</TabsTrigger>
    <TabsTrigger value="tab2">详情</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">概览内容</TabsContent>
  <TabsContent value="tab2">详情内容</TabsContent>
</Tabs>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`tabs`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="tabs" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};