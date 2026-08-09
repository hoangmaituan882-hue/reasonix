// 生成每组件 subpath exports（通配符模式，Ark UI 风格）
// 运行时机：tsup onSuccess 之后
import { readdirSync, writeFileSync, readFileSync } from "node:fs"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("..", import.meta.url))
const pkgPath = root + "package.json"
const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"))

// 读取 dist/components 下生成的组件目录
const compDir = root + "dist/components"
let comps = []
try {
  comps = readdirSync(compDir).filter((d) => d.endsWith(".js") || d.endsWith(".d.ts"))
} catch {
  // 组件目录不存在时回退到空
}

// 构造 exports：根 + styles.css + components/* 通配符 + package.json
const exportsMap = {
  ".": { types: "./dist/index.d.ts", import: "./dist/index.js" },
  "./styles.css": "./dist/index.css",
  "./motion.css": "./dist/motion.css",
  "./tokens.json": "./tokens.json",
  "./package.json": "./package.json",
  "./components/*": {
    types: "./dist/components/*.d.ts",
    import: "./dist/components/*.js",
  },
}

pkg.exports = exportsMap
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf-8")
console.log(`✅ exports 已更新（${comps.length} 个组件文件在 dist/components）`)
