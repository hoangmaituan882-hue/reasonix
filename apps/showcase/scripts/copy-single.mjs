// 复制单文件构建产物到 showcase/ 交付目录
import { copyFileSync, mkdirSync } from "node:fs"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("..", import.meta.url))
const dist = root + "dist/index.html"
const target = root + "../../showcase/reasonix-shadcn-design.html"

mkdirSync(root + "../../showcase", { recursive: true })
copyFileSync(dist, target)
console.log("✅ 已复制 → showcase/reasonix-shadcn-design.html")
