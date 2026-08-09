import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`反馈/Command`,tags:[`autodocs`],parameters:{docs:{description:{component:`命令面板 / 快速搜索列表。

## 设计使用建议

命令面板 / 快速搜索列表。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>open</code></td><td><code>boolean</code></td><td>命令面板开关</td></tr><tr><td><code>onOpenChange</code></td><td><code>(open: boolean) => void</code></td><td>开关回调</td></tr><tr><td><code>placeholder</code></td><td><code>string</code></td><td>搜索占位</td></tr><tr><td><code>items</code></td><td><code>CommandItem[]</code></td><td>命令项数据</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command'

<Command>
  <CommandInput placeholder="搜索命令…" />
  <CommandList>
    <CommandEmpty>无结果</CommandEmpty>
    <CommandGroup heading="操作">
      <CommandItem>新建会话</CommandItem>
      <CommandItem>打开设置</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`command`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="command" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};