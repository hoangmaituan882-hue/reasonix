import { useState } from 'react'
import { COMPONENT_CATALOG, COMPONENT_CATEGORIES, type ComponentCategory } from '@/lib/component-catalog'
import { ComponentPreview } from '@/components/component-preview'
import { ChevronLeft, ChevronRight, Smartphone, RotateCcw } from 'lucide-react'

/**
 * 移动预览视图 —— 手机壳内嵌全部组件 Demo
 * 左侧分类导航 + 组件列表；中央手机壳（390×700）渲染所选组件，模拟 App 滚动
 * 明暗/方向随全局 data-direction + .dark 自动跟随
 */
export default function MobilePreview() {
  const [category, setCategory] = useState<ComponentCategory | '全部'>('全部')
  const [selectedId, setSelectedId] = useState('button')
  const [scale, setScale] = useState(1)

  const filtered = category === '全部' ? COMPONENT_CATALOG : COMPONENT_CATALOG.filter((c) => c.category === category)
  const current = COMPONENT_CATALOG.find((c) => c.id === selectedId) ?? COMPONENT_CATALOG[0]
  const currentIdx = filtered.findIndex((c) => c.id === current.id)

  const select = (id: string) => setSelectedId(id)
  const prev = () => {
    if (filtered.length === 0) return
    const next = filtered[(currentIdx - 1 + filtered.length) % filtered.length]
    setSelectedId(next.id)
  }
  const next = () => {
    if (filtered.length === 0) return
    const next = filtered[(currentIdx + 1) % filtered.length]
    setSelectedId(next.id)
  }

  return (
    <div className="flex h-full w-full" style={{ background: 'var(--rx-bg)' }}>
      {/* 左侧面板：分类 + 组件列表 */}
      <div className="flex h-full w-64 shrink-0 flex-col border-r" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-soft)' }}>
        <div className="p-3">
          <div className="flex items-center gap-2">
            <Smartphone className="size-4" style={{ color: 'var(--rx-accent)' }} />
            <span className="text-sm font-semibold" style={{ color: 'var(--rx-fg)' }}>移动预览</span>
            <span className="ml-auto rounded-full px-2 py-0.5 text-[10px]" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>
              {filtered.length} 组件
            </span>
          </div>
        </div>

        {/* 分类 chips */}
        <div className="flex flex-wrap gap-1 px-3 pb-2">
          {(['全部', ...COMPONENT_CATEGORIES] as const).map((c) => (
            <button
              key={c}
              onClick={() => { setCategory(c); setSelectedId(c === '全部' ? COMPONENT_CATALOG[0].id : COMPONENT_CATALOG.find((x) => x.category === c)!.id) }}
              className="rounded-full px-2.5 py-1 text-[11px] transition-colors"
              style={{
                background: category === c ? 'var(--rx-accent)' : 'var(--rx-bg-elev)',
                color: category === c ? 'var(--rx-accent-fg)' : 'var(--rx-fg-dim)',
                border: '1px solid var(--rx-border-soft)',
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* 组件列表 */}
        <div className="flex-1 overflow-y-auto px-2 pb-4">
          {filtered.map((c) => (
            <button
              key={c.id}
              onClick={() => select(c.id)}
              className="flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-xs transition-colors"
              style={{
                background: selectedId === c.id ? 'var(--rx-accent-soft)' : 'transparent',
                color: selectedId === c.id ? 'var(--rx-accent)' : 'var(--rx-fg-dim)',
              }}
            >
              <span className="truncate">{c.name}</span>
              <span className="ml-auto truncate text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>{c.category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 中央：手机壳 */}
      <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-4 p-6">
        {/* 组件标题 + 描述 */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-base font-bold" style={{ color: 'var(--rx-fg)' }}>{current.name}</h2>
            <span className="rounded px-1.5 py-0.5 text-[9px]" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>{current.category}</span>
          </div>
          <p className="mt-1 text-xs" style={{ color: 'var(--rx-fg-faint)' }}>{current.desc}</p>
        </div>

        {/* 导航箭头 */}
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="上一个组件"
            className="flex size-8 items-center justify-center rounded-full transition-colors"
            style={{ border: '1px solid var(--rx-border)', color: 'var(--rx-fg-dim)' }}
          >
            <ChevronLeft className="size-4" />
          </button>
          <span className="text-[11px]" style={{ color: 'var(--rx-fg-faint)' }}>
            {currentIdx + 1} / {filtered.length}
          </span>
          <button
            onClick={next}
            aria-label="下一个组件"
            className="flex size-8 items-center justify-center rounded-full transition-colors"
            style={{ border: '1px solid var(--rx-border)', color: 'var(--rx-fg-dim)' }}
          >
            <ChevronRight className="size-4" />
          </button>
        </div>

        {/* 手机壳 */}
        <div
          className="relative rounded-[2.5rem] border-8 p-2 shadow-2xl"
          style={{ borderColor: 'var(--rx-bg-elev-2)', background: 'var(--rx-bg-elev-2)', width: 390 * scale, maxWidth: '100%' }}
        >
          {/* 灵动岛 */}
          <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full" style={{ background: 'var(--rx-fg)' }} />
          {/* 屏幕 */}
          <div
            className="relative h-[680px] overflow-y-auto rounded-[2rem]"
            style={{ background: 'var(--rx-bg)', border: '1px solid var(--rx-border-soft)' }}
          >
            {/* 状态栏 */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-5 pt-3 pb-1 text-[10px]" style={{ background: 'var(--rx-bg)', color: 'var(--rx-fg-dim)' }}>
              <span>9:41</span>
              <span className="flex gap-1">
                <span className="inline-block size-1.5 rounded-full" style={{ background: 'var(--rx-ok)' }} />
                <span className="inline-block size-1.5 rounded-full" style={{ background: 'var(--rx-accent)' }} />
                <span>5G</span>
              </span>
            </div>
            {/* 组件内容 */}
            <div className="flex min-h-[calc(100%-2rem)] items-center justify-center p-4 pb-10">
              <div className="w-full">
                <ComponentPreview id={current.id} />
              </div>
            </div>
            {/* Home 指示条 */}
            <div className="sticky bottom-2 flex justify-center pb-1">
              <div className="h-1 w-24 rounded-full" style={{ background: 'var(--rx-fg-dim)' }} />
            </div>
          </div>
        </div>

        {/* 缩放控制 */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setScale((s) => Math.max(0.7, +(s - 0.1).toFixed(1)))}
            className="rounded-md px-2 py-1 text-[10px]"
            style={{ border: '1px solid var(--rx-border)', color: 'var(--rx-fg-dim)' }}
          >
            -
          </button>
          <span className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{Math.round(scale * 100)}%</span>
          <button
            onClick={() => setScale((s) => Math.min(1.2, +(s + 0.1).toFixed(1)))}
            className="rounded-md px-2 py-1 text-[10px]"
            style={{ border: '1px solid var(--rx-border)', color: 'var(--rx-fg-dim)' }}
          >
            +
          </button>
          <button
            onClick={() => setSelectedId('button')}
            className="ml-2 flex items-center gap-1 rounded-md px-2 py-1 text-[10px]"
            style={{ border: '1px solid var(--rx-border)', color: 'var(--rx-fg-dim)' }}
          >
            <RotateCcw className="size-3" /> 重置
          </button>
        </div>
      </div>
    </div>
  )
}
