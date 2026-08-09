// 批量验证 38 个组件文档页：无 JS 错误 + iframe 有内容
import { chromium } from '/C:/Users/Linze/AppData/Local/npm-cache/_npx/e41f203b7505f1fb/node_modules/playwright/index.mjs'

const browser = await chromium.launch()
const p = await browser.newPage({ viewport: { width: 1440, height: 900 } })

// id → 分类（与 catalog 一致）
const cats = {
  button: '基础', badge: '基础', card: '基础', input: '基础', label: '基础',
  separator: '基础', skeleton: '基础', avatar: '基础',
  tooltip: '基础', checkbox: '表单', 'radio-group': '表单', switch: '表单',
  select: '表单', slider: '表单', toggle: '表单', 'toggle-group': '表单',
  textarea: '表单', 'input-group': '表单',
  table: '数据', progress: '数据', calendar: '数据', carousel: '数据',
  tabs: '数据', 'scroll-area': '数据', resizable: '数据',
  alert: '反馈', dialog: '反馈', drawer: '反馈', sheet: '反馈', sonner: '反馈',
  command: '反馈', popover: '反馈', 'hover-card': '反馈', 'dropdown-menu': '反馈',
  breadcrumb: '导航', pagination: '导航', accordion: '导航', collapsible: '导航',
}
// 分类 → URL 前缀（storybook id：中文编码）
const prefix = { '基础': '%E5%9F%BA%E7%A1%80', '表单': '%E8%A1%A8%E5%8D%95', '数据': '%E6%95%B0%E6%8D%AE', '反馈': '%E5%8F%8D%E9%A6%88', '导航': '%E5%AF%BC%E8%88%AA' }

const results = []
for (const [id, cat] of Object.entries(cats)) {
  const route = `${prefix[cat]}-${id}`
  const errors = []
  p.once('pageerror', (e) => errors.push(String(e).slice(0, 100)))
  await p.goto(`http://localhost:6007/?path=/docs/${route}--docs`, { waitUntil: 'networkidle', timeout: 25000 }).catch(() => {})
  await p.waitForTimeout(800)
    await p.waitForFunction(() => {
      const f = [...document.querySelectorAll('iframe')][0]
      return f && f.contentDocument && f.contentDocument.body.innerText.trim().length > 10
    }, null, { timeout: 8000 }).catch(() => {})
  const r = await p.evaluate((id) => {
    const frame = [...document.querySelectorAll('iframe')][0]
    if (!frame) return { id, ok: false, reason: 'no-iframe' }
    const doc = frame.contentDocument
    if (!doc) return { id, ok: false, reason: 'no-doc' }
    const text = doc.body.innerText
    const notFound = text.includes("Couldn't find story")
    const empty = text.trim().length < 10
    return { id, ok: !notFound && !empty, empty, notFound, sample: text.slice(0, 40).replace(/\n/g, ' ') }
  }, id)
  results.push({ ...r, errors: errors.length })
}

const bad = results.filter((r) => !r.ok || r.errors > 0)
console.log('总计:', results.length, '| 失败:', bad.length)
for (const b of bad) console.log('  ✗', b.id, b.reason || '', 'errors:', b.errors, '|', b.sample)
console.log('通过:', results.length - bad.length, '/', results.length)
await browser.close()
