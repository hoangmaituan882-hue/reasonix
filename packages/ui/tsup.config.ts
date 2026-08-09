import { defineConfig } from "tsup"
import { fileURLToPath } from "node:url"
import { readFileSync } from "node:fs"

const srcDir = fileURLToPath(new URL("./src", import.meta.url))
const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url), "utf-8"))

export default defineConfig({
  entry: {
index: "src/index.ts",
    "components/accordion": "src/components/ui/accordion.tsx",
    "components/alert": "src/components/ui/alert.tsx",
    "components/avatar": "src/components/ui/avatar.tsx",
    "components/badge": "src/components/ui/badge.tsx",
    "components/breadcrumb": "src/components/ui/breadcrumb.tsx",
    "components/button": "src/components/ui/button.tsx",
    "components/calendar": "src/components/ui/calendar.tsx",
    "components/card": "src/components/ui/card.tsx",
    "components/carousel": "src/components/ui/carousel.tsx",
    "components/checkbox": "src/components/ui/checkbox.tsx",
    "components/collapsible": "src/components/ui/collapsible.tsx",
    "components/command": "src/components/ui/command.tsx",
    "components/dialog": "src/components/ui/dialog.tsx",
    "components/drawer": "src/components/ui/drawer.tsx",
    "components/dropdown-menu": "src/components/ui/dropdown-menu.tsx",
    "components/hover-card": "src/components/ui/hover-card.tsx",
    "components/input-group": "src/components/ui/input-group.tsx",
    "components/input": "src/components/ui/input.tsx",
    "components/label": "src/components/ui/label.tsx",
    "components/pagination": "src/components/ui/pagination.tsx",
    "components/popover": "src/components/ui/popover.tsx",
    "components/progress": "src/components/ui/progress.tsx",
    "components/radio-group": "src/components/ui/radio-group.tsx",
    "components/resizable": "src/components/ui/resizable.tsx",
    "components/scroll-area": "src/components/ui/scroll-area.tsx",
    "components/select": "src/components/ui/select.tsx",
    "components/separator": "src/components/ui/separator.tsx",
    "components/sheet": "src/components/ui/sheet.tsx",
    "components/skeleton": "src/components/ui/skeleton.tsx",
    "components/slider": "src/components/ui/slider.tsx",
    "components/sonner": "src/components/ui/sonner.tsx",
    "components/switch": "src/components/ui/switch.tsx",
    "components/table": "src/components/ui/table.tsx",
    "components/tabs": "src/components/ui/tabs.tsx",
    "components/textarea": "src/components/ui/textarea.tsx",
    "components/toggle-group": "src/components/ui/toggle-group.tsx",
    "components/toggle": "src/components/ui/toggle.tsx",
    "components/tooltip": "src/components/ui/tooltip.tsx"
  },
  format: ["esm"],
  dts: true,
  sourcemap: false,
  clean: true,
  // 处理 @/ 路径别名 → 指向 src 目录
  esbuildOptions(options) {
    options.alias = {
      "@": srcDir,
    }
  },
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "react-day-picker",
    "react-resizable-panels",
    "radix-ui",
    "lucide-react",
    "cmdk",
    "sonner",
    "vaul",
    "embla-carousel-react",
    "class-variance-authority",
    "clsx",
    "tailwind-merge",
  ],
  banner: {
    js: `/** @reasonix/ui v${pkg.version} */`,
  },
  // 复制主题 CSS 到 dist（tsup 不打包 CSS）
  onSuccess: "node ./scripts/copy-css.mjs && node ./scripts/gen-exports.mjs",
})
