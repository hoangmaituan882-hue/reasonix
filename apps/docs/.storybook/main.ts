import type { StorybookConfig } from '@storybook/react-vite'
import path from 'path'
import { fileURLToPath } from 'node:url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  async viteFinal(config) {
    // 复刻 showcase 的 alias 策略：组件从 packages/ui 源码导入 + 单实例
    const resolve = config.resolve ?? {}
    resolve.alias = [
      // 组件统一从 packages/ui 源码导入（单一来源）
      { find: '@/components/ui', replacement: path.resolve(dirname, '../../../packages/ui/src/components/ui') },
      // React + 第三方运行时单实例（避免双实例 context 失效）
      { find: 'react', replacement: path.resolve(dirname, '../../../node_modules/react') },
      { find: 'react-dom', replacement: path.resolve(dirname, '../../../node_modules/react-dom') },
      { find: 'react/jsx-runtime', replacement: path.resolve(dirname, '../../../node_modules/react/jsx-runtime') },
      { find: 'radix-ui', replacement: path.resolve(dirname, '../../../node_modules/radix-ui') },
      { find: 'sonner', replacement: path.resolve(dirname, '../../../node_modules/sonner') },
      { find: 'vaul', replacement: path.resolve(dirname, '../../../node_modules/vaul') },
      { find: 'cmdk', replacement: path.resolve(dirname, '../../../node_modules/cmdk') },
      { find: 'react-day-picker', replacement: path.resolve(dirname, '../../../node_modules/react-day-picker') },
      { find: 'embla-carousel-react', replacement: path.resolve(dirname, '../../../node_modules/embla-carousel-react') },
      { find: 'react-resizable-panels', replacement: path.resolve(dirname, '../../../node_modules/react-resizable-panels') },
      { find: '@', replacement: path.resolve(dirname, '../../../packages/ui/src') },
    ]
    config.resolve = resolve
    // Tailwind v4 插件
    const { default: tailwindcss } = await import('@tailwindcss/vite')
    const plugins = config.plugins ?? []
    plugins.push(tailwindcss())
    config.plugins = plugins
    return config
  },
}

export default config
