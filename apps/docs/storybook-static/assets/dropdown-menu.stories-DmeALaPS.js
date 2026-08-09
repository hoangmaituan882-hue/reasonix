import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`反馈/Dropdown Menu`,tags:[`autodocs`],parameters:{docs:{description:{component:`菜单按钮展开的操作列表。

## 设计使用建议

菜单按钮展开的操作列表。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>open</code></td><td><code>boolean</code></td><td>受控打开</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>打开状态回调</td></tr><tr><td><code>modal</code></td><td><code>boolean</code></td><td>模态模式（点击外部不关）</td></tr><tr><td><code>dir</code></td><td><code>"ltr" | "rtl"</code></td><td>方向</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'

<DropdownMenu>
  <DropdownMenuTrigger>操作</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>账户</DropdownMenuLabel>
    <DropdownMenuItem>编辑</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>删除</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`dropdown-menu`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="dropdown-menu" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};