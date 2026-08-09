import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { withThemeByClassName } from '@storybook/addon-themes'
import '../src/index.css'

// 主题方向：graphite / aurora / slate / carbon / nocturne / amber
const DIRECTIONS = ['graphite', 'aurora', 'slate', 'carbon', 'nocturne', 'amber'] as const
type Direction = (typeof DIRECTIONS)[number]

/** 应用主题方向到 <html> */
function applyDirection(dir: Direction) {
  document.documentElement.setAttribute('data-direction', dir)
}

// 默认：graphite 浅色
if (typeof document !== 'undefined') {
  applyDirection('graphite')
}

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
    docs: {
      toc: true,
    },
    layout: 'centered',
    options: {
      storySort: {
        order: ['指南', '基础', '表单', '数据', '反馈', '导航'],
      },
    },
    toolbar: {
      direction: {
        title: '主题方向',
        items: DIRECTIONS.map((d) => ({ value: d, title: d })),
        defaultValue: 'graphite',
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    // 明暗切换：addon-themes 的 class 装饰器（.dark class 切换）
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    // 方向切换：toolbar → 应用到 html
    (Story, context) => {
      const direction = context.globals.direction as Direction | undefined
      if (direction) applyDirection(direction)
      return React.createElement(Story)
    },
  ],
  initialGlobals: {
    direction: 'graphite',
  },
}

export default preview
