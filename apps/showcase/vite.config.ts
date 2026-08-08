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
    resolve: {
      alias: [
        // 组件统一从 packages/ui 源码导入（单一来源，避免双份漂移）
        { find: '@/components/ui', replacement: path.resolve(__dirname, '../../packages/ui/src/components/ui') },
        // React + 第三方运行时单实例：packages/ui 源码共享 showcase 的依赖（避免双实例 context 失效）
        { find: 'react', replacement: path.resolve(__dirname, './node_modules/react') },
        { find: 'react-dom', replacement: path.resolve(__dirname, './node_modules/react-dom') },
        { find: 'react/jsx-runtime', replacement: path.resolve(__dirname, './node_modules/react/jsx-runtime') },
        { find: 'radix-ui', replacement: path.resolve(__dirname, './node_modules/radix-ui') },
        { find: 'sonner', replacement: path.resolve(__dirname, './node_modules/sonner') },
        { find: 'vaul', replacement: path.resolve(__dirname, './node_modules/vaul') },
        { find: 'cmdk', replacement: path.resolve(__dirname, './node_modules/cmdk') },
        { find: 'react-day-picker', replacement: path.resolve(__dirname, './node_modules/react-day-picker') },
        { find: 'embla-carousel-react', replacement: path.resolve(__dirname, './node_modules/embla-carousel-react') },
        { find: 'next-themes', replacement: path.resolve(__dirname, './node_modules/next-themes') },
        { find: 'react-resizable-panels', replacement: path.resolve(__dirname, './node_modules/react-resizable-panels') },
        { find: '@', replacement: path.resolve(__dirname, './src') },
      ],
    },
    build: single
      ? { cssCodeSplit: false, assetsInlineLimit: 100000000 }
      : undefined,
  } satisfies UserConfig
})
