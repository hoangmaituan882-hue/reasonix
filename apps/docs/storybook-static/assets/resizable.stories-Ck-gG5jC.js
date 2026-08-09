import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`数据/Resizable`,tags:[`autodocs`],parameters:{docs:{description:{component:`可拖拽调节尺寸的分栏面板。

## 设计使用建议

可拖拽调节尺寸的分栏面板。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>direction</code></td><td><code>"horizontal" | "vertical"</code></td><td>面板排列方向</td></tr><tr><td><code>defaultSize</code></td><td><code>number</code></td><td>面板初始百分比（Panel）</td></tr><tr><td><code>minSize</code></td><td><code>number</code></td><td>面板最小百分比（Panel）</td></tr><tr><td><code>className</code></td><td><code>string</code></td><td>追加类名</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@/components/ui/resizable'

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel defaultSize={50}>左面板</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>右面板</ResizablePanel>
</ResizablePanelGroup>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`resizable`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="resizable" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};