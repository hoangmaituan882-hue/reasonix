import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`反馈/Dialog`,tags:[`autodocs`],parameters:{docs:{description:{component:`居中模态弹窗，用于需要聚焦确认的场景。

## 设计使用建议

居中模态弹窗，用于需要聚焦确认的场景。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>open</code></td><td><code>boolean</code></td><td>打开状态（受控）</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>showCloseButton</code></td><td><code>boolean</code></td><td>显示关闭按钮（默认 true）</td></tr><tr><td><code>modal</code></td><td><code>boolean</code></td><td>模态模式（默认 true）</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger>打开弹窗</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>确认操作</DialogTitle>
      <DialogDescription>此操作不可撤销。</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`dialog`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="dialog" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};