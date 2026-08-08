import { useEffect, useRef, useState } from 'react'
import { COMPONENT_CATALOG, COMPONENT_CATEGORIES, type ComponentCatalogItem } from '@/lib/component-catalog'
import { COMPONENT_API } from '@/lib/component-api'
import { ComponentPreview } from '@/components/component-preview'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Search, Copy, Check, ChevronDown } from 'lucide-react'

/** 分类筛选（含「全部」） */
const FILTERS = ['全部', ...COMPONENT_CATEGORIES] as const
type Filter = (typeof FILTERS)[number]

/** 各分类的强调色（CSS 变量） */
const CATEGORY_COLORS: Record<ComponentCatalogItem['category'], string> = {
  基础: 'var(--rx-accent)',
  表单: 'var(--rx-ok)',
  数据: 'var(--rx-warn)',
  反馈: 'var(--rx-err)',
  导航: 'var(--rx-accent-strong)',
}

/** 复制文本：优先 Clipboard API，失败降级 execCommand */
async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    try {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      const ok = document.execCommand('copy')
      document.body.removeChild(ta)
      return ok
    } catch {
      return false
    }
  }
}

/**
 * 组件总览页 —— 搜索 + 分类筛选 + 卡片网格，卡片可一键复制用法代码
 */
export function ComponentOverview() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<Filter>('全部')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [codeViewId, setCodeViewId] = useState<string | null>(null)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current)
    }
  }, [])

  const q = query.trim().toLowerCase()
  const filtered = COMPONENT_CATALOG.filter((item) => {
    if (category !== '全部' && item.category !== category) return false
    if (!q) return true
    return `${item.id} ${item.name} ${item.desc} ${item.category}`.toLowerCase().includes(q)
  })

  const handleCopy = async (item: ComponentCatalogItem) => {
    const ok = await copyText(item.code)
    if (!ok) return
    setCopiedId(item.id)
    if (timerRef.current !== null) window.clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <ScrollArea className="h-full w-full" style={{ background: 'var(--rx-bg)' }}>
      <div className="mx-auto w-full max-w-5xl px-6 pb-28 pt-10">
        {/* 标题 */}
        <header className="mb-6">
          <h1 className="text-xl font-bold tracking-tight" style={{ color: 'var(--rx-fg)' }}>组件总览</h1>
          <p className="mt-1 text-xs" style={{ color: 'var(--rx-fg-faint)' }}>
            {COMPONENT_CATALOG.length} 个组件 · 点击「复制代码」即可复制用法示例
          </p>
        </header>

        {/* 搜索框 */}
        <div className="relative mb-4">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2"
            style={{ color: 'var(--rx-fg-faint)' }}
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索组件名称、用途或分类…"
            className="h-10 rounded-lg pl-9"
            style={{ background: 'var(--rx-bg-elev)', borderColor: 'var(--rx-border)' }}
          />
        </div>

        {/* 分类筛选 chips */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => {
            const active = f === category
            const count =
              f === '全部'
                ? COMPONENT_CATALOG.length
                : COMPONENT_CATALOG.filter((i) => i.category === f).length
            return (
              <button
                key={f}
                type="button"
                onClick={() => setCategory(f)}
                className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all"
                style={
                  active
                    ? {
                        background: 'var(--rx-accent)',
                        color: 'var(--rx-accent-fg)',
                        boxShadow: '0 4px 14px -6px var(--rx-accent)',
                      }
                    : {
                        background: 'var(--rx-bg-elev)',
                        border: '1px solid var(--rx-border-soft)',
                        color: 'var(--rx-fg-dim)',
                      }
                }
              >
                {f}
                <span className="text-[10px] font-normal" style={{ opacity: 0.7 }}>{count}</span>
              </button>
            )
          })}
        </div>

        {/* 结果统计 / 空态 */}
        {filtered.length === 0 ? (
          <div
            className="rounded-lg border p-10 text-center text-sm"
            style={{ background: 'var(--rx-bg-elev)', borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-faint)', borderRadius: 'var(--rx-r-m)' }}
          >
            没有匹配「{query}」的组件，换个关键词试试
          </div>
        ) : (
          <>
            <p className="mb-3 text-xs font-medium" style={{ color: 'var(--rx-fg-faint)' }}>
              共 {filtered.length} 个组件
            </p>
            {/* 卡片网格 */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item) => {
                const color = CATEGORY_COLORS[item.category]
                const copied = copiedId === item.id
                return (
                  <article
                    key={item.id}
                    className="flex flex-col border p-4 transition-colors"
                    style={{
                      background: 'var(--rx-bg-elev)',
                      borderColor: 'var(--rx-border-soft)',
                      borderRadius: 'var(--rx-r-m)',
                    }}
                  >
                    {/* 名称 + 分类 badge */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="truncate text-sm font-bold" style={{ color: 'var(--rx-fg)' }}>{item.name}</h3>
                      <span
                        className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{
                          color,
                          background: `color-mix(in srgb, ${color} 16%, transparent)`,
                        }}
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* 用途 */}
                    <p className="mt-1.5 text-xs leading-relaxed" style={{ color: 'var(--rx-fg-dim)' }}>{item.desc}</p>

                    {/* 可视化预览：真实 shadcn 组件 demo（预览/代码双 tabs） */}
                    <div className="mt-3 overflow-hidden rounded-md border" style={{ borderColor: 'var(--rx-border-soft)' }}>
                      {/* tabs 切换 */}
                      <div className="flex items-center gap-1 border-b px-1.5 py-1" style={{ background: 'var(--rx-bg-soft)', borderColor: 'var(--rx-border-soft)' }}>
                        {(['preview', 'code'] as const).map((v) => (
                          <button
                            key={v}
                            onClick={() => setCodeViewId(v === 'preview' ? null : item.id)}
                            className="rounded px-2 py-0.5 text-[9px] font-semibold transition-colors"
                            style={{
                              color: (v === 'preview' ? codeViewId !== item.id : codeViewId === item.id) ? 'var(--rx-accent)' : 'var(--rx-fg-faint)',
                              background: (v === 'preview' ? codeViewId !== item.id : codeViewId === item.id) ? 'var(--rx-accent-soft)' : 'transparent',
                            }}
                          >
                            {v === 'preview' ? '预览' : '代码'}
                          </button>
                        ))}
                      </div>
                      {codeViewId === item.id ? (
                        /* 代码视图 */
                        <pre
                          className="max-h-40 overflow-auto p-3 text-[9px] leading-relaxed"
                          style={{ background: 'var(--rx-bg-elev-2)', color: 'var(--rx-fg-dim)', fontFamily: 'var(--font-mono)' }}
                        >
                          {item.code}
                        </pre>
                      ) : (
                        /* 预览视图 */
                        <div
                          className="flex h-24 w-full items-center justify-center overflow-hidden p-2"
                          style={{ background: 'var(--rx-bg-soft)' }}
                        >
                          <ComponentPreview id={item.id} />
                        </div>
                      )}
                    </div>

                    {/* 复制按钮 */}
                    <button
                      type="button"
                      onClick={() => handleCopy(item)}
                      key={`${item.id}-${copied ? 'ok' : 'idle'}`}
                      className="mt-3 inline-flex h-7 items-center justify-center gap-1.5 rounded-md px-3 text-xs font-semibold transition-all"
                      style={
                        copied
                          ? { background: 'color-mix(in srgb, var(--rx-ok) 18%, transparent)', color: 'var(--rx-ok)' }
                          : { background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }
                      }
                    >
                      {copied ? <Check className="rx-anim-press size-3.5" /> : <Copy className="size-3.5" />}
                      {copied ? '✓ 已复制' : '复制代码'}
                    </button>

                    {/* API 表：组件 props（折叠） */}
                    {(() => {
                      const api = COMPONENT_API.find((a) => a.component.toLowerCase() === item.id)
                      if (!api || api.props.length === 0) return null
                      return (
                        <details className="mt-2 group">
                          <summary className="flex cursor-pointer items-center gap-1 text-[10px] font-semibold transition-colors hover:text-[var(--rx-accent)]" style={{ color: 'var(--rx-fg-faint)' }}>
                            <ChevronDown className="size-3 transition-transform group-open:rotate-180" />
                            API · {api.props.length} props
                          </summary>
                          <div className="mt-2 overflow-hidden rounded-md border" style={{ borderColor: 'var(--rx-border-soft)' }}>
                            <table className="w-full text-left text-[10px]">
                              <thead>
                                <tr style={{ background: 'var(--rx-bg-soft)' }}>
                                  <th className="px-2 py-1.5 font-semibold" style={{ color: 'var(--rx-fg-dim)' }}>Prop</th>
                                  <th className="px-2 py-1.5 font-semibold" style={{ color: 'var(--rx-fg-dim)' }}>类型</th>
                                  <th className="px-2 py-1.5 font-semibold" style={{ color: 'var(--rx-fg-dim)' }}>说明</th>
                                </tr>
                              </thead>
                              <tbody>
                                {api.props.map((p) => (
                                  <tr key={p.name} style={{ borderTop: '1px solid var(--rx-border-soft)' }}>
                                    <td className="px-2 py-1.5 align-top">
                                      <code className="mono" style={{ color: 'var(--rx-accent)' }}>
                                        {p.name}{p.optional ? '?' : ''}
                                      </code>
                                    </td>
                                    <td className="px-2 py-1.5 align-top">
                                      <code className="mono" style={{ color: 'var(--rx-fg-dim)' }}>{p.type}</code>
                                    </td>
                                    <td className="px-2 py-1.5 align-top" style={{ color: 'var(--rx-fg-faint)' }}>{p.desc}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </details>
                      )
                    })()}
                  </article>
                )
              })}
            </div>
          </>
        )}
      </div>
    </ScrollArea>
  )
}

export default ComponentOverview
