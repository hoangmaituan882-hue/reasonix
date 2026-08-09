import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`表单/Select`,tags:[`autodocs`],parameters:{docs:{description:{component:`下拉选择器，从列表中选取一个值。

## 设计使用建议

下拉选择器，从列表中选取一个值。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>value</code></td><td><code>string</code></td><td>选中值（受控）</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td>初始选中</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) => void</code></td><td>选中回调</td></tr><tr><td><code>open</code></td><td><code>boolean</code></td><td>展开状态（受控）</td></tr><tr><td><code>size</code></td><td><code>"default" | "sm"</code></td><td>尺寸</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

<Select>
  <SelectTrigger className="w-40">
    <SelectValue placeholder="请选择" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="a">选项 A</SelectItem>
    <SelectItem value="b">选项 B</SelectItem>
  </SelectContent>
</Select>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`select`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="select" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};