import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`导航/Pagination`,tags:[`autodocs`],parameters:{docs:{description:{component:`分页导航，浏览多页数据。

## 设计使用建议

分页导航，浏览多页数据。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>page</code></td><td><code>number</code></td><td>当前页</td></tr><tr><td><code>total</code></td><td><code>number</code></td><td>总页数</td></tr><tr><td><code>onPageChange</code></td><td><code>(page: number) => void</code></td><td>翻页回调</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination'

<Pagination>
  <PaginationContent>
    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
    <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
    <PaginationItem><PaginationNext href="#" /></PaginationItem>
  </PaginationContent>
</Pagination>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`pagination`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="pagination" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};