// 生成 38 个组件 stories：从 showcase 的 catalog + api + preview 资产
// 用法：node scripts/gen-stories.mjs（在 apps/docs 下）
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.dirname(fileURLToPath(import.meta.url)) // scripts/
const docs = path.resolve(root, '..')
const showcase = path.resolve(docs, '../showcase')

// ---- 读 catalog（按 id 锚点切块）----
const catSrc = readFileSync(path.join(showcase, 'src/lib/component-catalog.ts'), 'utf-8')
const catalog = []
const anchors = [...catSrc.matchAll(/id: '([a-z-]+)',/g)]
for (let i = 0; i < anchors.length; i++) {
  const id = anchors[i][1]
  const start = catSrc.lastIndexOf('{', anchors[i].index)
  const end = i + 1 < anchors.length ? catSrc.lastIndexOf('{', anchors[i + 1].index) : catSrc.length
  const block = catSrc.slice(start, end)
  const name = block.match(/name: '([^']+)'/)?.[1] ?? id
  const category = block.match(/category: '([^']+)'/)?.[1] ?? '其他'
  const desc = block.match(/desc: '([^']+)'/)?.[1] ?? ''
  const codeM = block.match(/code: `([\s\S]*?)`,\s*\}/)
  const code = codeM ? codeM[1] : ''
  catalog.push({ id, name, category, desc, code })
}

// ---- 读 api ----
const apiSrc = readFileSync(path.join(showcase, 'src/lib/component-api.ts'), 'utf-8')
const apiBlockRe = /component: '(\w+)',\s*props: \[([\s\S]*?)\]\s*,/g
const apiMap = {}
let m
while ((m = apiBlockRe.exec(apiSrc))) {
  const props = []
  const propRe = /\{\s*name: '([^']+)',\s*(?:optional: true,\s*)?type: '([^']*)',\s*desc: '([^']*)'\s*\}/g
  let p
  while ((p = propRe.exec(m[2]))) props.push({ name: p[1], type: p[2], desc: p[3] })
  apiMap[m[1]] = props
}

// 组件名 → kebab（Toaster → sonner）
function toKebab(n) {
  return n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}
const alias = { toaster: 'sonner' }

console.log('catalog:', catalog.length, '| api:', Object.keys(apiMap).length)

const storyDir = path.join(docs, 'src/stories')
mkdirSync(storyDir, { recursive: true })

// ---- API 表格 JSX ----
function apiTable(id) {
  const apiName = Object.keys(apiMap).find((n) => (alias[toKebab(n)] ?? toKebab(n)) === id)
  const props = apiName ? apiMap[apiName] : []
  if (!props.length) return ''
  const rows = props
    .map((p) => `<tr><td><code>${p.name}</code></td><td><code>${p.type}</code></td><td>${p.desc}</td></tr>`)
    .join('')
  return `\n\n### Props\n\n<table>\n<thead><tr><th>Prop</th><th>类型</th><th>说明</th></tr></thead>\n<tbody>\n${rows}\n</tbody>\n</table>`
}

// ---- 从 API 推导 argTypes（Controls 面板）----
function inferControl(type) {
  if (type === 'boolean') return `control: 'boolean'`
  if (type.includes('|')) {
    const opts = type
      .split('|')
      .map((s) => s.trim().replace(/"/g, '').replace(/'/g, ''))
      .filter((s) => s && s !== 'string')
    if (opts.length >= 2 && opts.length <= 8) return `control: 'select', options: [${opts.map((o) => JSON.stringify(o)).join(', ')}]`
  }
  if (type === 'string') return `control: 'text'`
  return `control: 'text'`
}

function argTypesBlock(id) {
  const apiName = Object.keys(apiMap).find((n) => (alias[toKebab(n)] ?? toKebab(n)) === id)
  const props = apiName ? apiMap[apiName] : []
  if (!props.length) return ''
  const lines = props
    .map((p) => `    ${/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(p.name) ? p.name : JSON.stringify(p.name)}: { description: ${JSON.stringify(p.desc)}, ${inferControl(p.type)} },`)
    .join('\n')
  return '\n  argTypes: {\n' + lines + '\n  },'
}

// ---- 生成每个组件的 stories（数组 join，避免反引号冲突）----
for (const c of catalog) {
  const title = `${c.category}/${c.name}`
  const api = apiTable(c.id)
  const codeBlock = '```tsx\n' + c.code + '\n```'
  const docDesc = JSON.stringify(
    c.desc + '\n\n## 设计使用建议\n\n' + c.desc + api + '\n\n## 代码示例\n\n' + codeBlock,
  )
  const argTypes = argTypesBlock(c.id)
  const story = [
    "import type { Meta, StoryObj } from '@storybook/react-vite'",
    "import { ComponentPreview } from '../../../showcase/src/components/component-preview'",
    '',
    'const meta: Meta = {',
    '  title: ' + JSON.stringify(title) + ',',
    "  tags: ['autodocs'],",
    '  parameters: {',
    '    docs: {',
    '      description: {',
    '        component: ' + docDesc + ',',
    '      },',
    '    },',
    '  },' + argTypes,
    '}',
    '',
    'export default meta',
    'type Story = StoryObj',
    '',
    'export const Demo: Story = {',
    '  render: () => <ComponentPreview id=' + JSON.stringify(c.id) + ' />,',
    '}',
    '',
  ].join('\n')
  writeFileSync(path.join(storyDir, `${c.id}.stories.tsx`), story, 'utf-8')
}

console.log('生成 stories:', catalog.length)
