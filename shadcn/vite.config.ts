import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// 普通 build 多文件；build:single 产出自包含单 HTML（双击即开）
export default defineConfig(async ({ mode }) => {
  const single = mode === 'single'
  const plugins: UserConfig['plugins'] = [react(), tailwindcss()]
  if (single) {
    const { viteSingleFile } = await import('vite-plugin-singlefile')
    plugins.push(viteSingleFile())
  }
  return {
    base: './',
    plugins,
    resolve: { alias: { '@': path.resolve(__dirname, './src') } },
    build: single
      ? { cssCodeSplit: false, assetsInlineLimit: 100000000 }
      : undefined,
  } satisfies UserConfig
})
