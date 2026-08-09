import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`表单/Slider`,tags:[`autodocs`],parameters:{docs:{description:{component:`拖动选择数值或数值区间的滑块。

## 设计使用建议

拖动选择数值或数值区间的滑块。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>value</code></td><td><code>number[]</code></td><td>滑块值数组（多 thumb）</td></tr><tr><td><code>defaultValue</code></td><td><code>number[]</code></td><td>初始值</td></tr><tr><td><code>onValueChange</code></td><td><code>(value: number[]) => void</code></td><td>值变化回调</td></tr><tr><td><code>min</code></td><td><code>number</code></td><td>最小值</td></tr><tr><td><code>max</code></td><td><code>number</code></td><td>最大值</td></tr><tr><td><code>step</code></td><td><code>number</code></td><td>步长</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Slider } from '@/components/ui/slider'

<Slider defaultValue={[50]} max={100} step={1} />
<Slider defaultValue={[20, 60]} max={100} />
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`slider`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="slider" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};