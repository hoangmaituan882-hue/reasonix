import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`数据/Calendar`,tags:[`autodocs`],parameters:{docs:{description:{component:`日期选择日历，支持单选与区间选择。

## 设计使用建议

日期选择日历，支持单选与区间选择。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>mode</code></td><td><code>"single" | "multiple" | "range"</code></td><td>选择模式</td></tr><tr><td><code>selected</code></td><td><code>Date | Date[]</code></td><td>选中日期</td></tr><tr><td><code>onSelect</code></td><td><code>(date: Date | undefined) => void</code></td><td>选择回调</td></tr><tr><td><code>disabled</code></td><td><code>Matcher | Matcher[]</code></td><td>禁用日期</td></tr><tr><td><code>numberOfMonths</code></td><td><code>number</code></td><td>显示月数</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Calendar } from '@/components/ui/calendar'

<Calendar mode="single" selected={date} onSelect={setDate} />
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`calendar`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="calendar" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};