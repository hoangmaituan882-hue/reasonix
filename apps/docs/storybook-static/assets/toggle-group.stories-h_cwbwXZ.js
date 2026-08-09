import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`表单/Toggle Group`,tags:[`autodocs`],parameters:{docs:{description:{component:`一组互斥或多选的可切换按钮组。

## 设计使用建议

一组互斥或多选的可切换按钮组。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>type</code></td><td><code>"single" | "multiple"</code></td><td>单选或多选</td></tr><tr><td><code>value</code></td><td><code>string | string[]</code></td><td>受控选中值</td></tr><tr><td><code>onValueChange</code></td><td><code>(value) => void</code></td><td>选中变化回调</td></tr><tr><td><code>variant</code></td><td><code>"default" | "outline"</code></td><td>视觉变体</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Italic } from 'lucide-react'

<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="加粗"><Bold /></ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="斜体"><Italic /></ToggleGroupItem>
</ToggleGroup>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`toggle-group`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="toggle-group" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};