import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./component-preview-CwAPzZAE.js";var i,a,o,s;function c(){return(c=e((()=>{n(),i=t(),a={title:`导航/Breadcrumb`,tags:[`autodocs`],parameters:{docs:{description:{component:`展示页面层级路径的导航痕迹。

## 设计使用建议

展示页面层级路径的导航痕迹。

### Props

<table>
<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>
<tbody>
<tr><td><code>items</code></td><td><code>BreadcrumbItem[]</code></td><td>面包屑项</td></tr><tr><td><code>separator</code></td><td><code>React.ReactNode</code></td><td>分隔符</td></tr>
</tbody>
</table>

## 代码示例

\`\`\`tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink href="#">首页</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>当前页</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
\`\`\``}}}},o={render:()=>(0,i.jsx)(r,{id:`breadcrumb`})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <ComponentPreview id="breadcrumb" />
}`,...o.parameters?.docs?.source}}},s=[`Demo`]})))()}c();export{o as Demo,s as __namedExportsOrder,a as default};