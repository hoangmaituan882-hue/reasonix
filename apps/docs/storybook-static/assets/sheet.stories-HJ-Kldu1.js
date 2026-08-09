import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`反馈/Sheet`,tags:[`autodocs`],parameters:{docs:{description:{component:`侧边滑出面板，常用于详情或设置抽屉。

## 设计使用建议

侧边滑出面板，常用于详情或设置抽屉。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>side</code></td><td><code>"top" | "right" | "bottom" | "left"</code></td><td>面板方向（Context 回退）</td></tr><tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>showCloseButton</code></td><td><code>boolean</code></td><td>显示关闭按钮</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'

<Sheet>
  <SheetTrigger>打开侧栏</SheetTrigger>
  <SheetContent side="right">
    <SheetHeader><SheetTitle>侧边面板</SheetTitle></SheetHeader>
  </SheetContent>
</Sheet>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`sheet`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="sheet" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};