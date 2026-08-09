import { useState, useMemo, useRef, useEffect } from 'react'
import { TRANSITIONS } from '@/lib/transition-catalog'
import { TRANSITION_DEMOS } from '@/lib/transition-demos'
import { TRANSITION_DEMOS_2 } from '@/lib/transition-demos-2'
import { TRANSITION_DEMOS_3 } from '@/lib/transition-demos-3'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Play, RotateCcw, Copy, Check, Search, ChevronRight } from 'lucide-react'

/**
 * 过渡画廊 — transitions.dev 的 27 个过渡可视化
 * 每卡：真实可动画 demo + 播放（按各过渡 trigger 精确驱动）+ token 表 + 复制 CSS
 */

// 合并全部 demo 数据
const ALL_DEMOS = { ...TRANSITION_DEMOS, ...TRANSITION_DEMOS_2, ...TRANSITION_DEMOS_3 }

function TransitionDemo({ item, autoPlay }: { item: (typeof TRANSITIONS)[number]; autoPlay?: boolean }) {
  const loopRef = useRef<ReturnType<typeof setInterval> | null>(null)
  // 独立循环播放：autoPlay 时每卡周期播放→重置
  useEffect(() => {
    if (!autoPlay) return
    let on = false
    // 错开相位：每卡初始延迟不同（基于 id 哈希），避免所有卡同步播放
    const phase = (item.id.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % 900)
    const startTimer = setTimeout(() => {
      on = true
      const demoEl = document.getElementById(`td-${item.id}`) as HTMLElement | null
      if (demoEl) drive(demoEl, true)
      loopRef.current = setInterval(() => {
        on = !on
        const el = document.getElementById(`td-${item.id}`) as HTMLElement | null
        if (el) drive(el, on)
      }, 1500)
    }, phase)
    return () => {
      clearTimeout(startTimer)
      if (loopRef.current) clearInterval(loopRef.current)
    }
  }, [autoPlay, item.id]) // eslint-disable-line react-hooks/exhaustive-deps -- drive 每渲染变化，回调内引用旧值无害
  const [active, setActive] = useState(false)
  const [copied, setCopied] = useState(false)
  const [expand, setExpand] = useState(false)
  const activeRef = useRef(false)
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const demo = ALL_DEMOS[item.id]
  // 记录各 data-* 初始值（挂载时一次，供重置用）
  const initHtmlRef = useRef<string | null>(null)
  // 缓存 dangerouslySetInnerHTML 对象：React 对比引用相同则跳过重设（避免重渲染清类）
  const demoHtml = useMemo(() => ({ __html: demo?.html || `<div class="${item.cls}" style="padding:12px;background:var(--rx-bg-elev);border-radius:8px;color:var(--rx-fg-dim)">${item.zh}</div>` }), [item, demo])

  const demoRef = (el: HTMLDivElement | null) => {
    // CSS 已由 App 全局注入（TRANSITION_CSS + HOVER_OVERRIDES），无需重复
    // 19-card-tilt：绑定鼠标跟随倾斜（交互型动效，非播放）
    if (el && item.id === '19-card-tilt' && !el.dataset.tiltBound) {
      el.dataset.tiltBound = '1'
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        const card = el.querySelector('.t-tilt-card') as HTMLElement | null
        if (card) {
          card.style.setProperty('--tilt-rx', `${((0.5 - y) * 10).toFixed(2)}deg`)
          card.style.setProperty('--tilt-ry', `${((x - 0.5) * 12).toFixed(2)}deg`)
          card.style.setProperty('--tilt-gx', `${(x * 100).toFixed(1)}%`)
          card.style.setProperty('--tilt-gy', `${(y * 100).toFixed(1)}%`)
          card.classList.add('is-tilting')
        }
      })
      el.addEventListener('mouseleave', () => {
        const card = el.querySelector('.t-tilt-card') as HTMLElement | null
        if (card) {
          card.style.setProperty('--tilt-rx', '0deg')
          card.style.setProperty('--tilt-ry', '0deg')
          card.classList.remove('is-tilting')
        }
      })
    }
  }

  // 挂载后保存 innerHTML 快照（供重置）
  useEffect(() => {
    const el = document.getElementById(`td-${item.id}`)
    if (el && !initHtmlRef.current) initHtmlRef.current = el.innerHTML
  }, [item.id])

  /** 按 trigger 精确驱动动画 */
  const drive = (el: HTMLElement, on: boolean) => {
    const t = demo?.trigger || 'is-animating'
    const els: Element[] = [el, ...Array.from(el.querySelectorAll('*'))]
    // 先清所有状态
    els.forEach(e => {
      e.classList.remove('is-animating', 't-on', 'is-open', 'is-error', 'is-pulsing', 'is-revealed', 'is-bursting', 'is-init', 'is-shaking', 'is-closing', 'is-hover', 'is-clearing', 'playing')
      if (item.id !== '18-texts-reveal') e.classList.remove('is-shown')
      e.removeAttribute('data-on')
    })
    if (!on) {
      // 重置：恢复挂载时保存的 innerHTML 快照（彻底回到初始态，含 data-* / inline style）
      if (initHtmlRef.current) el.innerHTML = initHtmlRef.current
      return
    }
    // 播放
    void el.offsetWidth // reflow
    switch (t) {
      case 'resize': {
        const box = el.querySelector('.t-resize') as HTMLElement | null
        if (box) { box.style.width = '160px'; box.style.height = '80px' }
        break
      }
      case 'is-open':
        els.forEach(e => e.classList.add('is-open'))
        break
      case 'data-open':
        els.forEach(e => e.setAttribute('data-open', 'true'))
        break
      case 'data-state': {
        // 10 用 in/out（播放重放 in），09 用 a/b（播放切换）
        const first = els.find(e => e.hasAttribute('data-state'))
        const cur = first?.getAttribute('data-state') || 'a'
        if (['in', 'out'].includes(cur)) {
          // 重放 in：先 out + reflow 再 in（触发再次出现动画）
          els.forEach(e => e.setAttribute('data-state', 'out'))
          void el.offsetWidth
          els.forEach(e => e.setAttribute('data-state', 'in'))
        } else {
          const next = cur === 'a' ? 'b' : 'a'
          els.forEach(e => e.setAttribute('data-state', next))
        }
        break
      }
      case 'data-liked':
        els.forEach(e => e.setAttribute('data-liked', 'true'))
        els.forEach(e => e.classList.add('is-bursting'))
        break
      case 'data-page': {
        const first = els.find(e => e.hasAttribute('data-page'))
        const cur = first?.getAttribute('data-page') || '1'
        const next = cur === '2' ? '1' : '2'
        els.forEach(e => e.setAttribute('data-page', next))
        break
      }
      case 'data-on': {
        const first = els.find(e => e.hasAttribute('data-on'))
        const cur = first?.getAttribute('data-on') || 'false'
        const next = cur === 'true' ? 'false' : 'true'
        els.forEach(e => e.setAttribute('data-on', next))
        els.forEach(e => e.classList.add('is-init'))
        break
      }
      case 'hover':
        // hover 过渡：加 is-hover 类（css 需含 .is-hover 规则）
        els.forEach(e => e.classList.add('is-hover'))
        break
      case 'none':
        // 纯 CSS（如 shimmer 自动循环），无需触发
        break
      default: {
        // 按过渡 id 加精确触发类（避免一锅端误加无关类）
        const clsMap: Record<string, string[]> = {
          '02-number-pop-in': ['is-animating'],
          '04-text-states-swap': ['is-animating'],
          '12-error-state-shake': ['is-error', 'is-shaking'],
          '13-input-clear-dissolve': ['is-clearing'],
          '14-skeleton-reveal': ['is-revealed'],
          '18-texts-reveal': ['is-shown'],
          '25-checkbox-check': ['is-animating'],
          '26-spinning-counter': ['is-animating'],
        }
        const classes = clsMap[item.id] || ['is-animating']
        if (item.id === '18-texts-reveal') {
          // 18 文字逐现：用 playing animation 类重放（移除+reflow+加，keyframe 不受 transition 合并影响）
          els.forEach(e => e.classList.remove('playing'))
          void el.offsetWidth
          els.forEach(e => e.classList.add('playing'))
        } else {
          els.forEach(e => classes.forEach(c => e.classList.add(c)))
        }
        break
      }
    }
  }

  // 卸载清理定时器
  useEffect(() => () => { if (copyTimerRef.current) clearTimeout(copyTimerRef.current) }, [])

  // ESC 关闭展开面板（全局常驻监听，不依赖 expand 变化）
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') setExpand(false) }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  const toggle = () => {
    // 19-card-tilt：交互型动效，点播放按钮提示鼠标交互
    if (item.id === '19-card-tilt') {
      const demoEl = document.getElementById(`td-${item.id}`) as HTMLElement | null
      if (demoEl) {
        const flash = demoEl.closest('[class*=card]')?.querySelector('[class*=group]') as HTMLElement | null
        if (flash) {
          flash.style.outline = '2px solid var(--rx-accent)'
          flash.style.outlineOffset = '2px'
          setTimeout(() => { flash.style.outline = '' }, 800)
        }
      }
      return
    }
    // H1 修复：drive 移出 updater（StrictMode 双调用安全），用 ref 跟踪状态
    const next = !activeRef.current
    activeRef.current = next
    setActive(next)
    const demoEl = document.getElementById(`td-${item.id}`) as HTMLElement | null
    if (demoEl) drive(demoEl, next)
  }

  const copyCss = async () => {
    try {
      await navigator.clipboard.writeText(item.css || '')
    } catch {
      const ta = document.createElement('textarea')
      ta.value = item.css || ''
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    if (copyTimerRef.current) clearTimeout(copyTimerRef.current)
    copyTimerRef.current = setTimeout(() => setCopied(false), 1600)
  }

  return (
    <Card className="relative flex h-full flex-col overflow-visible">
      <CardContent className="flex flex-1 flex-col p-0">
        {/* 演示舞台：点击卡片直接播放/重置（无需点播放按钮） */}
        <div
          className="group relative flex h-36 shrink-0 cursor-pointer items-center justify-center border-b transition-colors hover:border-[var(--rx-accent)]"
          style={{ background: 'var(--rx-bg-soft)', borderColor: 'var(--rx-border-soft)' }}
          onClick={toggle}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle() } }}
          role="button"
          tabIndex={0}
          aria-label={`${item.zh}：点击播放或重置`}
          title="点击播放 / 重置"
        >
          <div
            ref={demoRef}
            id={`td-${item.id}`}
            className={`${item.id === '19-card-tilt' ? 'pointer-events-auto' : 'pointer-events-none'} flex max-w-full items-center justify-center`}
            dangerouslySetInnerHTML={demoHtml}
          />
          {/* hover 提示 */}
          <span className="pointer-events-none absolute mt-20 rounded-full bg-black/50 px-2.5 py-0.5 text-[9px] text-white opacity-0 transition-opacity group-hover:opacity-100">
            {item.id === '19-card-tilt' ? '移动鼠标 · 卡片跟随倾斜' : active ? '点击重置' : '点击播放'}
          </span>
        </div>

        {/* 信息 */}
        <div className="flex flex-1 flex-col p-3">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="mono h-4 px-1.5 text-[9px]">{item.num}</Badge>
            <span className="text-xs font-semibold" style={{ color: 'var(--rx-fg)' }}>{item.zh}</span>
            <span className="mono truncate text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>{item.cls}</span>
            <span className="ml-auto text-[9px]" style={{ color: 'var(--rx-accent)' }}>{demo?.trigger || '—'}</span>
          </div>
          <p className="mt-1.5 text-[10px] leading-4" style={{ color: 'var(--rx-fg-faint)' }}>{item.when}</p>

          {/* token 表 */}
          {item.tokens.length > 0 && (
            <div className="mono mt-2 grid grid-cols-2 gap-x-3 gap-y-0.5 rounded-md border p-2 text-[9px]" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg)' }}>
              {item.tokens.map(t => (
                <div key={t.name} className="flex justify-between gap-1">
                  <span className="truncate" style={{ color: 'var(--rx-accent)' }}>{t.name.replace(/`/g, '')}</span>
                  <span className="truncate" style={{ color: 'var(--rx-fg-faint)' }}>{t.default.replace(/`/g, '')}</span>
                </div>
              ))}
            </div>
          )}

          {/* 操作 */}
          <div className="mt-2.5 flex items-center gap-1.5">
            <Button size="sm" variant="outline" className="h-6 gap-1 px-2 text-[10px]" onClick={toggle}>
              {item.id === '19-card-tilt'
                ? <RotateCcw className="h-3 w-3" />
                : active ? <RotateCcw className="h-3 w-3" /> : <Play className="h-3 w-3" />}
              {item.id === '19-card-tilt' ? '悬停体验' : active ? '重置' : '播放'}
            </Button>
            <Button size="sm" variant="ghost" className="h-6 gap-1 px-2 text-[10px]" onClick={copyCss}>
              {copied ? <Check className="h-3 w-3" style={{ color: 'var(--rx-ok)' }} /> : <Copy className="h-3 w-3" />}
              {copied ? '已复制' : '复制 CSS'}
            </Button>
          </div>

          {/* 详情折叠 */}
                    {/* 用法浮层：点击按钮单独展开 HTML + CSS（覆盖卡片，带过渡动画） */}
          <button
            type="button"
            onClick={() => {
              setExpand(e => {
                const next = !e
                if (next) setTimeout(() => { document.getElementById(`td-expand-${item.id}`)?.focus() }, 50)
                return next
              })
            }}
            aria-expanded={expand}
            aria-controls={`td-expand-${item.id}`}
            className="mt-auto flex w-full cursor-pointer select-none items-center gap-1 rounded-md border px-2 py-1.5 text-[10px] font-semibold transition-colors hover:border-[var(--rx-accent)]"
            style={{ borderColor: expand ? 'var(--rx-accent)' : 'var(--rx-border-soft)', color: expand ? 'var(--rx-accent)' : 'var(--rx-fg-faint)', background: expand ? 'var(--rx-accent-soft)' : 'transparent' }}
          >
            <ChevronRight className={`h-3 w-3 transition-transform duration-200 ${expand ? 'rotate-90' : ''}`} />
            {expand ? '收起 HTML + CSS' : '查看 HTML + CSS 用法'}
            <span className="ml-auto text-[9px] opacity-60">{demo?.html?.length || 0} + {item.css?.length || 0} 字符</span>
          </button>

          {/* 展开面板：绝对定位覆盖（rx-anim-popover 过渡） */}
          {expand && (
            <div
              id={`td-expand-${item.id}`}
              role="dialog"
              aria-label={`${item.zh} 用法`}
              tabIndex={-1}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  e.stopPropagation()
                  setExpand(false)
                }
              }}
              className="rx-anim-popover absolute inset-x-0 top-full z-20 mt-1 rounded-xl border p-3 shadow-xl"
              style={{ background: 'var(--rx-bg-elev)', borderColor: 'var(--rx-border)', boxShadow: '0 16px 48px rgba(0,0,0,0.3)' }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold" style={{ color: 'var(--rx-accent)' }}>{item.zh} · 用法</span>
                <button type="button" onClick={() => setExpand(false)} className="rounded px-1.5 py-0.5 text-[10px] transition-colors hover:bg-[var(--rx-bg-soft)]" style={{ color: 'var(--rx-fg-faint)' }}>✕ 关闭</button>
              </div>
              {demo?.html && (
                <div className="mt-2">
                  <div className="mono mb-1 text-[9px] font-bold" style={{ color: 'var(--rx-accent)' }}>HTML</div>
                  <ScrollArea className="h-36 rounded-md border" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg)' }}>
                    <pre className="mono p-2 text-[9px] leading-4" style={{ color: 'var(--rx-fg-dim)' }}>{demo.html}</pre>
                  </ScrollArea>
                </div>
              )}
              {item.css && (
                <div className="mt-2">
                  <div className="mono mb-1 text-[9px] font-bold" style={{ color: 'var(--rx-accent)' }}>CSS</div>
                  <ScrollArea className="h-44 rounded-md border" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg)' }}>
                    <pre className="mono p-2 text-[9px] leading-4" style={{ color: 'var(--rx-fg-dim)' }}>{item.css}</pre>
                  </ScrollArea>
                </div>
              )}
              <div className="mt-2 flex items-center justify-between">
                <span className="mono text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>reduced-motion 守卫已含</span>
                <Button size="sm" variant="outline" className="h-6 gap-1 px-2 text-[10px]" onClick={copyCss}>
                  {copied ? <Check className="h-3 w-3" style={{ color: 'var(--rx-ok)' }} /> : <Copy className="h-3 w-3" />}
                  {copied ? '已复制' : '复制 CSS'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default function TransitionGallery() {
  const [filter, setFilter] = useState('全部')
  const [query, setQuery] = useState('')
  const [autoPlay, setAutoPlay] = useState(false)

  const cats = ['全部', '尺寸', '数字', '徽章', '文字', '菜单', '弹窗', '悬停', '反馈', '表单']



  const filtered = TRANSITIONS.filter(t => {
    const q = query.trim().toLowerCase()
    const matchQ = !q || t.name.toLowerCase().includes(q) || t.zh.includes(query) || t.cls.toLowerCase().includes(q)
    let matchC = true
    if (filter === '尺寸') matchC = /resize|panel|skeleton/.test(t.id)
    else if (filter === '数字') matchC = /number|counter/.test(t.id)
    else if (filter === '徽章') matchC = /badge|notification/.test(t.id)
    else if (filter === '文字') matchC = /text|shimmer|swap|reveal/.test(t.id)
    else if (filter === '菜单') matchC = /dropdown|menu|morph|accordion/.test(t.id)
    else if (filter === '弹窗') matchC = /modal|toast/.test(t.id)
    else if (filter === '悬停') matchC = /hover|tilt|tooltip|avatar|like|learn/.test(t.id)
    else if (filter === '反馈') matchC = /check|error|success|shake/.test(t.id)
    else if (filter === '表单') matchC = /input|checkbox|toggle|tab/.test(t.id)
    return matchQ && matchC
  })

  return (
    <ScrollArea className="h-full w-full">
      <div className="mx-auto max-w-6xl p-8">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--rx-fg)' }}>
              过渡画廊 <span className="mono text-sm font-normal" style={{ color: 'var(--rx-fg-faint)' }}>transitions.dev × reasonix</span>
            </h1>
            <p className="mt-1 text-sm" style={{ color: 'var(--rx-fg-dim)' }}>
              {filtered.length} / 27 个可复用 CSS 过渡 · 播放演示 + 复制 CSS（含 reduced-motion 守卫）
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {/* 自动轮播 + 播放计数 */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setAutoPlay(a => !a)}
                className={`flex h-7 items-center gap-1.5 rounded-full px-3 text-[10px] font-semibold transition-colors ${autoPlay ? 'text-[var(--rx-accent-fg)]' : ''}`}
                style={autoPlay
                  ? { background: 'var(--rx-accent)' }
                  : { border: '1px solid var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}
              >
                {autoPlay ? '⏸ 停止自动播放' : '▶ 自动播放'}
              </button>
              <span className="mono text-[10px]" style={{ color: autoPlay ? 'var(--rx-accent)' : 'var(--rx-fg-faint)' }}>
                {autoPlay ? '● 所有卡片循环演示中' : '● 自动循环已关闭，点击卡片可手动播放'}
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-md border px-2.5" style={{ borderColor: 'var(--rx-border)', background: 'var(--rx-bg-elev)' }}>
              <Search className="h-3 w-3" style={{ color: 'var(--rx-fg-faint)' }} />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜索过渡（名称/类名）…"
                className="h-7 w-48 border-none bg-transparent text-xs shadow-none focus-visible:ring-0 placeholder:text-[var(--rx-fg-faint)]"
              />
            </div>
            <div className="flex flex-wrap gap-1">
              {cats.map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className="h-6 rounded-full px-3 text-[10px] font-semibold transition-colors"
                  style={filter === c
                    ? { background: 'var(--rx-accent)', color: 'var(--rx-accent-fg)' }
                    : { border: '1px solid var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="py-16 text-center text-sm" style={{ color: 'var(--rx-fg-faint)' }}>无匹配过渡</div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((t) => <TransitionDemo key={t.id} item={t} autoPlay={autoPlay} />)}
          </div>
        )}
      </div>
    </ScrollArea>
  )
}
