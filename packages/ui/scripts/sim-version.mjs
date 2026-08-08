// 轻量 changeset 模拟器：读 .changeset/*.md 的 frontmatter → 计算下一个版本
// 真实发布用 changesets/action（GitHub workflow）；此脚本仅本地验证版本逻辑
import { readFileSync, readdirSync } from "node:fs"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("..", import.meta.url))
const pkg = JSON.parse(readFileSync(root + "package.json", "utf-8"))
const csDir = root + ".changeset"

const files = readdirSync(csDir).filter((f) => f.endsWith(".md") && f !== "README.md")
let bump = 0 // 0=none 1=patch 2=minor 3=major

for (const f of files) {
  const content = readFileSync(csDir + "/" + f, "utf-8")
  const m = content.match(/---\n([\s\S]*?)\n---/)
  if (!m) continue
  const pkgLine = m[1].split("\n").find((l) => l.includes("@reasonix/ui"))
  if (!pkgLine) continue
  const level = pkgLine.split(":")[1]?.trim().replace(/"/g, "")
  if (level === "major") bump = Math.max(bump, 3)
  else if (level === "minor") bump = Math.max(bump, 2)
  else if (level === "patch") bump = Math.max(bump, 1)
}

const [major, minor, patch] = pkg.version.split(".").map(Number)
const next = bump === 3 ? `${major + 1}.0.0` : bump === 2 ? `${major}.${minor + 1}.0` : bump === 1 ? `${major}.${minor}.${patch + 1}` : pkg.version
console.log(`当前: ${pkg.version} | 变更集: ${files.length} 个 | bump: ${["none", "patch", "minor", "major"][bump]} | 下一个: ${next}`)
