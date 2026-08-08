// 复制 src/styles.css → dist/index.css（tsup 只打包 JS，CSS 手动复制）
import { copyFileSync, mkdirSync } from "node:fs"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("..", import.meta.url))
mkdirSync(root + "dist", { recursive: true })
copyFileSync(root + "src/styles.css", root + "dist/index.css")
console.log("✅ dist/index.css 已生成")
