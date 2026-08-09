import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`表单/Radio Group`,tags:[`autodocs`],parameters:{docs:{description:{component:`单选组，同一组内互斥选择。

## 设计使用建议

单选组，同一组内互斥选择。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>value</code></td><td><code>string</code></td><td>受控选中值</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: string) => void</code></td><td>选中变化回调</td></tr><tr><td><code>defaultValue</code></td><td><code>string</code></td><td>初始选中</td></tr><tr><td><code>orientation</code></td><td><code>"horizontal" | "vertical"</code></td><td>排列方向</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

<RadioGroup defaultValue="a">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="a" id="a" />
    <Label htmlFor="a">选项 A</Label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="b" id="b" />
    <Label htmlFor="b">选项 B</Label>
  </div>
</RadioGroup>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`radio-group`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="radio-group" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};