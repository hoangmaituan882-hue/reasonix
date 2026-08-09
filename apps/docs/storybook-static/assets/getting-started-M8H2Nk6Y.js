import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,r}from"./react-uuHvYYDH.js";import{a as i,o as a}from"./blocks-B4FM9bBC.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`指南/快速开始`}),`
`,(0,c.jsx)(t.h1,{id:`快速开始`,children:`快速开始`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`@reasonix/ui`}),` — 38 个 shadcn 风格 React 组件，6 方向主题 × 明暗双态，动效令牌化设计系统。`]}),`
`,(0,c.jsx)(t.h2,{id:`安装`,children:`安装`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`⚠️ 本包为`,(0,c.jsx)(t.strong,{children:`纯 ESM + Tailwind CSS v4 语义类`}),`组件库：JS 产物保留 tailwind 类名，但`,(0,c.jsx)(t.strong,{children:`样式不自动生效`}),`——宿主项目必须自己搭 Tailwind v4 编译管线。`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @reasonix/ui
npm install react react-dom tailwindcss radix-ui vaul sonner cmdk \\
  react-day-picker react-resizable-panels embla-carousel-react \\
  shadcn tw-animate-css
npm install -D @tailwindcss/vite
`})}),`
`,(0,c.jsx)(t.h2,{id:`tailwind-v4-接入必做`,children:`Tailwind v4 接入（必做）`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`① vite.config.ts：`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`import tailwindcss from '@tailwindcss/vite'
// plugins: [react(), tailwindcss()]
`})}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`② 项目 CSS 入口（src/index.css）按顺序：`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-css`,children:`@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";
@import "@reasonix/ui/styles.css";
@source "../node_modules/@reasonix/ui/dist";  /* ★ 必配 */
`})}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`不配 `,(0,c.jsx)(t.code,{children:`@source`}),` 组件会"裸奔"；不要重复定义 `,(0,c.jsx)(t.code,{children:`@custom-variant dark`}),`。`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`使用组件`,children:`使用组件`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-tsx`,children:`import { Button, Tabs, TabsList, TabsTrigger, TabsContent } from '@reasonix/ui'
// 或按组件导入：import { Button } from '@reasonix/ui/components/button'

export function App() {
  return (
    <Tabs defaultValue="a">
      <TabsList>
        <TabsTrigger value="a">标签 A</TabsTrigger>
        <TabsTrigger value="b">标签 B</TabsTrigger>
      </TabsList>
      <TabsContent value="a">内容 A</TabsContent>
      <TabsContent value="b">内容 B</TabsContent>
    </Tabs>
  )
}
`})}),`
`,(0,c.jsx)(t.h2,{id:`主题切换`,children:`主题切换`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-ts`,children:`// 6 方向：graphite / aurora / slate / carbon / nocturne / amber
document.documentElement.setAttribute('data-direction', 'aurora')
// 明暗：.dark class
document.documentElement.classList.toggle('dark')
`})}),`
`,(0,c.jsxs)(t.p,{children:[`本页右上角 `,(0,c.jsx)(t.strong,{children:`Toolbar → 主题方向`}),` 可实时切换全部组件 Demo 的方向；明暗通过浏览器/主题插件控制。`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=t(),r(),a()})))()}l();export{s as default};