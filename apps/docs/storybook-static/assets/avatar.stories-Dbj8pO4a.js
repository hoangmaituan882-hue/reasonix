import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`基础/Avatar`,tags:[`autodocs`],parameters:{docs:{description:{component:`用户头像展示，无图片时回退为文字占位。

## 设计使用建议

用户头像展示，无图片时回退为文字占位。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>size</code></td><td><code>"sm" | "default" | "lg"</code></td><td>尺寸</td></tr><tr><td><code>fallback</code></td><td><code>React.ReactNode</code></td><td>加载失败回退</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="头像" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`avatar`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="avatar" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};