import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`数据/Table`,tags:[`autodocs`],parameters:{docs:{description:{component:`结构化数据表格。

## 设计使用建议

结构化数据表格。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>data</code></td><td><code>T[]</code></td><td>表格数据</td></tr><tr><td><code>columns</code></td><td><code>Column<T>[]</code></td><td>列定义</td></tr><tr><td><code>loading</code></td><td><code>boolean</code></td><td>加载态</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table'

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>姓名</TableHead>
      <TableHead>角色</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>张三</TableCell>
      <TableCell>管理员</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`table`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="table" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};