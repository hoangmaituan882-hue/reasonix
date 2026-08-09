import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`表单/Checkbox`,tags:[`autodocs`],parameters:{docs:{description:{component:`多选复选框，用于独立选项或批量选择。

## 设计使用建议

多选复选框，用于独立选项或批量选择。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>checked</code></td><td><code>boolean</code></td><td>选中状态（受控）</td></tr><tr><td><code>defaultChecked</code></td><td><code>boolean</code></td><td>初始选中（非受控）</td></tr><tr><td><code>onCheckedChange</code></td><td><code>(checked: boolean) => void</code></td><td>切换回调</td></tr><tr><td><code>disabled</code></td><td><code>boolean</code></td><td>禁用态</td></tr><tr><td><code>indeterminate</code></td><td><code>boolean</code></td><td>半选态</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

<Label className="flex items-center gap-2">
  <Checkbox defaultChecked /> 同意条款
</Label>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`checkbox`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="checkbox" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};