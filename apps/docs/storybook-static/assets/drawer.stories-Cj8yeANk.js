import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`反馈/Drawer`,tags:[`autodocs`],parameters:{docs:{description:{component:`从屏幕底部滑出的抽屉式面板。

## 设计使用建议

从屏幕底部滑出的抽屉式面板。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态（受控）</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>direction</code></td><td><code>"bottom" | "left" | "right" | "top"</code></td><td>抽屉方向（默认 bottom）</td></tr><tr><td><code>shouldScaleBackground</code></td><td><code>boolean</code></td><td>背景缩放</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'

<Drawer>
  <DrawerTrigger>打开抽屉</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>底部抽屉</DrawerTitle>
    </DrawerHeader>
  </DrawerContent>
</Drawer>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`drawer`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="drawer" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};