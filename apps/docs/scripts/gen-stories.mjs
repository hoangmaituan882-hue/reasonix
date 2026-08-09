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

// ---- 读设计建议（component-guidance.ts，解析源码）----
const guidanceSrc = readFileSync(path.join(docs, 'src/lib/component-guidance.ts'), 'utf-8')
const guidanceMap = {}
// 匹配 'key': { whenUse: '...', points: [...], avoid: [...] }（key 可带引号，连字符 key 必须带）
const gBlockRe = /(['"]?)([a-z-]+)\1:\s*\{\s*whenUse:\s*'([^']*)',\s*points:\s*\[([\s\S]*?)\],\s*(?:avoid:\s*\[([\s\S]*?)\],\s*)?\}/g
let g
while ((g = gBlockRe.exec(guidanceSrc))) {
  const points = [...g[4].matchAll(/'([^']*)'/g)].map((m) => m[1])
  const avoid = g[5] ? [...g[5].matchAll(/'([^']*)'/g)].map((m) => m[1]) : undefined
  guidanceMap[g[2]] = { whenUse: g[3], points, avoid }
}
console.log('guidance:', Object.keys(guidanceMap).length)

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
  if (type === 'number') return `control: 'number'`
  // 仅对纯引号字面量联合（"a" | "b" | 'c'）生成 select
  const literalRe = /^("([^"]*)"|'([^']*)')(\s*\|\s*("([^"]*)"|'([^']*)'))*$/
  if (type.includes('|') && literalRe.test(type)) {
    const opts = [...type.matchAll(/"([^"]*)"|'([^']*)'/g)].map((m) => m[1] ?? m[2])
    if (opts.length >= 2 && opts.length <= 8) return `control: 'select', options: [${opts.map((o) => JSON.stringify(o)).join(', ')}]`
  }
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

// ---- args 驱动组件：Controls 真实生效（简单组件用真实组件渲染）----
const argsDriven = {
  button: {
    args: { children: '按钮', variant: 'default', size: 'default' },
    render: `(() => { const { children, variant, size } = args; return <Button variant={variant} size={size}>{children}</Button> })()`,
  },
  badge: {
    args: { children: '徽章', variant: 'default' },
    render: `(() => { const { children, variant } = args; return <Badge variant={variant}>{children}</Badge> })()`,
  },
  input: {
    args: { placeholder: '请输入内容' },
    render: `(() => { const { placeholder, disabled } = args; return <Input placeholder={placeholder} disabled={disabled} /> })()`,
  },
  switch: {
    args: { checked: true },
    render: `(() => { const { checked, disabled } = args; return <Switch checked={checked} disabled={disabled} /> })()`,
  },
  checkbox: {
    args: { checked: true },
    render: `(() => { const { checked, disabled } = args; return <Checkbox checked={checked} disabled={disabled} /> })()`,
  },
}

// ---- 生成每个组件的 stories（数组 join，避免反引号冲突）----
for (const c of catalog) {
  const title = `${c.category}/${c.name}`
  const api = apiTable(c.id)
  const codeBlock = '```tsx\n' + c.code + '\n```'
  // 设计使用建议：优先用手写的 COMPONENT_GUIDANCE，缺失时回退通用模板
  const guidance = guidanceMap[c.id]
  let designBlock
  if (guidance) {
    const points = guidance.points.map((p) => `- ${p}`).join('\n')
    const avoid = guidance.avoid?.length ? '\n\n### 避免误用\n' + guidance.avoid.map((a) => `- ${a}`).join('\n') : ''
    designBlock =
      '\n\n## 设计使用建议\n\n' +
      '### 何时使用\n' +
      guidance.whenUse +
      '\n\n### 设计要点\n' +
      points +
      avoid
  } else {
    designBlock =
      '\n\n## 设计使用建议\n\n' +
      '### 何时使用\n' +
      c.desc +
      '\n\n### 设计要点\n' +
      '- 所有颜色/圆角/动效均使用设计令牌（`--rx-*`），方向主题（6 方向 × 明暗）自动跟随\n' +
      '- 交互动效只动 transform/opacity，使用 `--rx-dur-*` 时长档位（fast 120ms / base 180ms / mid 220ms / slow 340ms / slower 420ms）\n' +
      '- 支持 `prefers-reduced-motion` 自动降级；键盘可达 + focus ring'
  }
  const docDesc = JSON.stringify(c.desc + designBlock + api + '\n\n## 代码示例\n\n' + codeBlock)
  const argTypes = argTypesBlock(c.id)
  // args 驱动组件：import 真实组件；否则 import ComponentPreview
  const compImport = argsDriven[c.id]
    ? `import { ${c.name} } from '@/components/ui/${c.id}'\nimport { ComponentPreview } from '../../../showcase/src/components/component-preview'`
    : "import { ComponentPreview } from '../../../showcase/src/components/component-preview'"
  const story = [
    "import type { Meta, StoryObj } from '@storybook/react-vite'",
    compImport,
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
    // ---- Demo story：args 白名单组件用真实组件渲染（Controls 生效）；其余用 ComponentPreview ----
    'export const Demo: Story = {',
    ...(argsDriven[c.id]
      ? [
          '  args: {',
          ...Object.entries(argsDriven[c.id].args).map(([k, v]) => `    ${k}: ${JSON.stringify(v)},`),
          '  },',
          `  render: (args) => { const { ${Object.keys(argsDriven[c.id].args).join(', ')} } = args; return ${argsDriven[c.id].render} },`,
        ]
      : [`  render: () => <ComponentPreview id=${JSON.stringify(c.id)} />,`]),
    '}',
    '',
  ].join('\n')
  writeFileSync(path.join(storyDir, `${c.id}.stories.tsx`), story, 'utf-8')
}

console.log('生成 stories:', catalog.length)
