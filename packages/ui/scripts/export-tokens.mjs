// 导出设计令牌为 Tokens Studio 兼容 JSON（Figma Tokens Studio / DTCG 风格）
// 用法：node scripts/export-tokens.mjs
// 输入：src/styles.css 的 --rx-* 令牌（base + 6 方向 × 明暗）
// 输出：tokens.json —— { direction: { light|dark: { category: { token: {value,type} } } } }
import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("..", import.meta.url))
const css = readFileSync(root + "src/styles.css", "utf-8")

// 选择器 → (方向, 明暗)
function mapSelector(sel) {
  // 块选择器可能带注释前缀，取最后一个选择器
  const s = sel
    .trim()
    .split("\n")
    .pop()
    .trim()
  if (s === ":root") return ["graphite", "light"]
  if (s === ".dark") return ["graphite", "dark"]
  const m = s.match(/data-direction="([a-z]+)"/)
  if (!m) return null
  return [m[1], s.startsWith(".dark") ? "dark" : "light"]
}

// 解析 CSS 块：selector { decls }
const blocks = []
const re = /([^{}]+)\{([^{}]*)\}/g
let m
while ((m = re.exec(css))) {
  const meta = mapSelector(m[1])
  if (!meta) continue
  const decls = {}
  for (const d of m[2].matchAll(/--rx-([a-z0-9-]+):\s*([^;]+);/g)) {
    decls[d[1]] = d[2].trim()
  }
  if (Object.keys(decls).length) blocks.push({ meta, decls })
}

// 令牌类型推断（name 不含 rx- 前缀：如 "r-s" / "dur-fast" / "ease" / "accent"）
function classify(name) {
  if (name.startsWith("r-")) return "borderRadius"
  if (name.startsWith("dur-")) return "duration"
  if (name.startsWith("ease")) return "easing"
  if (name.startsWith("motion-")) return "number"
  return "color"
}

// 组装 { direction: { light|dark: { category: { token: {value,type} } } } }
const out = {}
for (const { meta, decls } of blocks) {
  const [dir, mode] = meta
  out[dir] ??= {}
  out[dir][mode] ??= {}
  for (const [name, value] of Object.entries(decls)) {
    const type = classify(name)
    const short = name.replace(/^rx-/, "")
    out[dir][mode][type] ??= {}
    out[dir][mode][type][short] = { value, type }
  }
}

// 输出：pretty 2 空格，稳定键序
const json = JSON.stringify(out, null, 2)
writeFileSync(root + "tokens.json", json + "\n", "utf-8")

const dirs = Object.keys(out)
const counts = {}
for (const d of dirs) {
  counts[d] = `${Object.keys(out[d].light || {}).reduce((n, c) => n + Object.keys(out[d].light[c]).length, 0)} light / ${Object.keys(out[d].dark || {}).reduce((n, c) => n + Object.keys(out[d].dark[c]).length, 0)} dark`
}
console.log("tokens.json 生成:", json.length, "bytes")
console.log("方向:", dirs.join(", "))
for (const [d, c] of Object.entries(counts)) console.log(`  ${d}: ${c}`)
