import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Palette, Shield, Zap, Type, Package, Wrench } from 'lucide-react'
import { DIRECTIONS } from '@/lib/theme'

/* ------------------------------------------------------------------ */
/* 数据                                                                */
/* ------------------------------------------------------------------ */

const CATS: { name: string; color: string; comps: string[] }[] = [
  { name: '基础', color: 'var(--rx-accent)', comps: ['Button', 'Badge', 'Card', 'Skeleton', 'Separator', 'Label', 'Avatar'] },
  { name: '表单', color: 'var(--rx-ok)', comps: ['Input', 'Textarea', 'Checkbox', 'RadioGroup', 'Switch', 'Select', 'Slider', 'Toggle', 'ToggleGroup', 'InputGroup', 'Progress'] },
  { name: '数据', color: 'var(--rx-warn)', comps: ['Table', 'Calendar', 'Carousel', 'ScrollArea', 'Resizable', 'Toaster'] },
  { name: '反馈', color: 'var(--rx-err)', comps: ['Alert', 'Dialog', 'Drawer', 'Sheet', 'Command', 'Popover', 'HoverCard', 'Tooltip', 'DropdownMenu'] },
  { name: '导航', color: 'var(--rx-accent-strong)', comps: ['Tabs', 'Accordion', 'Collapsible', 'Breadcrumb', 'Pagination'] },
]

const FEATURES = [
  { icon: <Palette className="h-5 w-5" />, title: '多方向主题', desc: '6 个主题方向 × 明暗双态，37 个语义令牌，换主题只改 data-direction' },
  { icon: <Zap className="h-5 w-5" />, title: '动效体系', desc: '32 个 keyframes + 28 个 rx-anim 工具类，120–420ms 时长刻度，reduced-motion 降级' },
  { icon: <Shield className="h-5 w-5" />, title: '无障碍 AA', desc: '对比度 WCAG AA、键盘可达、focus ring、vitest-axe 可访问性测试' },
  { icon: <Package className="h-5 w-5" />, title: 'Tree-shaking', desc: 'ESM 构建 + sideEffects 仅 css + 组件级 subpath exports（按需导入）' },
  { icon: <Type className="h-5 w-5" />, title: '完整类型', desc: 'd.ts 随包发布，组件 props 完整类型推断' },
  { icon: <Wrench className="h-5 w-5" />, title: '工程化质量', desc: '72 测试用例 / 57% 覆盖率 / CI+Release 流水线 / changesets 版本管理' },
]

const STATS = [
  { label: '组件', value: 38 },
  { label: '设计令牌', value: 37 },
  { label: '主题方向', value: 6 },
  { label: '测试用例', value: 72 },
]

const STACK = ['React 19', 'Tailwind CSS v4', 'shadcn 模式', 'radix-ui', 'vaul', 'cmdk', 'tsup', 'vitest', 'changesets']

/* ------------------------------------------------------------------ */
/* 小组件：reveal 滚动渐入                                             */
/* ------------------------------------------------------------------ */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity .5s ease ${delay}ms, transform .5s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/** count-up 数字 */
function CountUp({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        const t0 = performance.now()
        const dur = 900
        const tick = (now: number) => {
          const p = Math.min((now - t0) / dur, 1)
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        io.disconnect()
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <div ref={ref} className="flex min-w-[100px] flex-col items-center rounded-lg border px-4 py-3" style={{ background: 'var(--rx-bg-elev)', borderColor: 'var(--rx-border-soft)' }}>
      <span className="text-2xl font-black tabular-nums" style={{ color: 'var(--rx-accent)' }}>{display}</span>
      <span className="mt-0.5 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{label}</span>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* 主组件                                                              */
/* ------------------------------------------------------------------ */
export function IntroPage({ onChangeDirection }: { onChangeDirection?: (dir: string) => void }) {
  const [curDir, setCurDir] = useState('graphite')

  const setDirection = (id: string) => {
    setCurDir(id)
    onChangeDirection?.(id as never)
  }

  const curDirLabel = DIRECTIONS.find((d) => d.id === curDir)?.label ?? '石墨'

  return (
    <div className="h-full w-full overflow-y-auto">
      {/* ===== Hero ===== */}
      <section className="relative flex min-h-[62vh] items-center justify-center px-6 py-14 text-center">
        <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(420px 200px at 50% 30%, var(--rx-accent-soft), transparent 70%)' }} />
        <div className="relative">
          <Reveal>
            <div className="mono mb-4 text-[11px] font-bold tracking-[0.18em]" style={{ color: 'var(--rx-accent)' }}>REASONIX · DESIGN SYSTEM</div>
          </Reveal>
          <Reveal delay={50}>
            <h1 className="text-5xl font-black tracking-tight md:text-6xl" style={{ color: 'var(--rx-fg)' }}>
              <span style={{ color: 'var(--rx-accent)' }}>@</span>reasonix/ui
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed" style={{ color: 'var(--rx-fg-dim)' }}>
              一套面向现代 Web 的 React 组件库 —— 38 个组件、6 方向主题、动效体系与设计规范的开箱即用集合。
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {STATS.map((s) => <CountUp key={s.label} value={s.value} label={s.label} />)}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                className="rx-grad inline-flex h-9 items-center gap-1.5 rounded-lg px-5 text-sm font-semibold"
                style={{ color: 'var(--rx-accent-fg)' }}
                onClick={() => document.getElementById('intro-components')?.scrollIntoView({ behavior: 'smooth' })}
              >
                浏览组件 <ArrowRight className="h-4 w-4" />
              </button>
              <button
                className="inline-flex h-9 items-center rounded-lg border px-5 text-sm font-semibold"
                style={{ borderColor: 'var(--rx-border)', color: 'var(--rx-fg)' }}
                onClick={() => document.getElementById('intro-quickstart')?.scrollIntoView({ behavior: 'smooth' })}
              >
                快速开始
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== 特性 ===== */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-6">
              <div className="mono text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-accent)' }}>FEATURES</div>
              <h2 className="mt-1 text-2xl font-bold">为什么选 @reasonix/ui</h2>
              <p className="mt-1 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>不只是又一个 shadcn 复制品 —— 完整设计规范、多方向主题与动效体系三位一体。</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 30}>
                <div className="rx-lift h-full rounded-xl border p-4" style={{ background: 'var(--rx-bg-elev)', borderColor: 'var(--rx-border-soft)' }}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>{f.icon}</span>
                  <h3 className="mt-3 text-sm font-bold">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed" style={{ color: 'var(--rx-fg-dim)' }}>{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 组件矩阵 ===== */}
      <section id="intro-components" className="px-6 py-10" style={{ background: 'var(--rx-bg-soft)' }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-6">
              <div className="mono text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-accent)' }}>COMPONENTS</div>
              <h2 className="mt-1 text-2xl font-bold">38 个组件，五大分类</h2>
              <p className="mt-1 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>基础 / 表单 / 数据展示 / 反馈 / 导航，覆盖从按钮到日历的全场景。</p>
            </div>
          </Reveal>
          {CATS.map((c, i) => (
            <Reveal key={c.name} delay={i * 20}>
              <div className="mb-3 rounded-lg border p-4" style={{ background: 'var(--rx-bg-elev)', borderColor: 'var(--rx-border-soft)' }}>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                  <span className="text-sm font-bold">{c.name}</span>
                  <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>{c.comps.length}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.comps.map((comp) => (
                    <span key={comp} className="rounded-full border px-3 py-1 text-[11px] transition-colors hover:border-[var(--rx-accent)] hover:text-[var(--rx-accent)]" style={{ background: 'var(--rx-bg-soft)', borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}>
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== 主题 ===== */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-6">
              <div className="mono text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-accent)' }}>THEMING</div>
              <h2 className="mt-1 text-2xl font-bold">6 方向主题 × 明暗双态</h2>
              <p className="mt-1 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>点击方向卡实时预览（切换全局 accent）。37 个语义令牌随方向自动跟随。</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {DIRECTIONS.map((d, i) => (
              <Reveal key={d.id} delay={i * 20}>
                <button
                  onClick={() => setDirection(d.id)}
                  className="rx-lift w-full rounded-lg border p-3 text-left"
                  style={{
                    background: 'var(--rx-bg-elev)',
                    borderColor: curDir === d.id ? 'var(--rx-accent)' : 'var(--rx-border-soft)',
                  }}
                >
                  <span className="block h-9 w-full rounded-md" style={{ background: d.accent }} />
                  <span className="mt-2 block text-xs font-bold" style={{ color: curDir === d.id ? 'var(--rx-accent)' : 'var(--rx-fg)' }}>{d.label}</span>
                  <span className="mono block text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>{d.id}</span>
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-4 text-[11px]" style={{ color: 'var(--rx-fg-faint)' }}>
              当前方向：<span className="mono">{curDir}（{curDirLabel}）</span> · 右上角 🌙/☀️ 切换明暗
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== 技术栈 + 质量 ===== */}
      <section className="px-6 py-10" style={{ background: 'var(--rx-bg-soft)' }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-4">
              <div className="mono text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-accent)' }}>TECH STACK</div>
              <h2 className="mt-1 text-2xl font-bold">现代技术栈</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span key={s} className="mono rounded-full border px-3 py-1 text-[11px]" style={{ background: 'var(--rx-accent-soft)', borderColor: 'color-mix(in srgb, var(--rx-accent) 30%, transparent)', color: 'var(--rx-accent)' }}>{s}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="mb-4 mt-10">
              <div className="mono text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-accent)' }}>QUALITY</div>
              <h2 className="mt-1 text-2xl font-bold">可发布级的质量保证</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {[
                { num: '72', label: 'vitest 测试用例' },
                { num: '57%', label: '覆盖率' },
                { num: 'AA', label: 'WCAG 对比度 + axe' },
                { num: 'CI', label: 'lint→test→build→pack' },
              ].map((q) => (
                <div key={q.label} className="rounded-lg border p-4" style={{ background: 'var(--rx-bg-elev)', borderColor: 'var(--rx-border-soft)' }}>
                  <div className="text-2xl font-black" style={{ color: 'var(--rx-accent)' }}>{q.num}</div>
                  <div className="mt-1 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{q.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== 快速开始 ===== */}
      <section id="intro-quickstart" className="px-6 py-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-4">
              <div className="mono text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-accent)' }}>QUICKSTART</div>
              <h2 className="mt-1 text-2xl font-bold">快速开始</h2>
            </div>
            <pre
              className="overflow-x-auto rounded-lg border p-4 text-[11px] leading-relaxed"
              style={{ background: 'var(--rx-bg-elev)', borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-dim)', fontFamily: 'var(--font-mono)' }}
            >
{`// 1. 安装
npm install @reasonix/ui
npm install react react-dom tailwindcss radix-ui vaul sonner cmdk react-day-picker react-resizable-panels embla-carousel-react next-themes

// 2. 引入组件与主题
import { Button, Tabs } from '@reasonix/ui'
import '@reasonix/ui/styles.css'

// 3. 切换主题方向
document.documentElement.setAttribute('data-direction', 'aurora')
document.documentElement.classList.toggle('dark')`}
            </pre>
          </Reveal>
        </div>
      </section>

      {/* ===== 路线图 ===== */}
      <section className="px-6 py-10" style={{ background: 'var(--rx-bg-soft)' }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="mb-4">
              <div className="mono text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-accent)' }}>ROADMAP</div>
              <h2 className="mt-1 text-2xl font-bold">版本与路线图</h2>
            </div>
            <div className="space-y-3">
              {[
                { done: true, title: 'v0.1.0 — 已发布', desc: '38 组件 · 6 方向主题 · 37 令牌 · 32 动效 · 72 测试 · CI+Release 流水线 · changesets 版本管理' },
                { done: false, title: 'v0.2.0 — 规划中', desc: '交互 playground · publint/attw 产物校验 · llms.txt（AI-ready 文档）' },
                { done: false, title: 'v1.0.0 — 远期', desc: '覆盖率 80%+ · Storybook 视觉回归 · 多包拆分（core/hooks/theme）' },
              ].map((r) => (
                <div key={r.title} className="flex gap-3 rounded-lg border p-4" style={{ background: 'var(--rx-bg-elev)', borderColor: 'var(--rx-border-soft)' }}>
                  <span className="mt-1 h-2 w-2 flex-none rounded-full" style={{ background: r.done ? 'var(--rx-ok)' : 'var(--rx-warn)' }} />
                  <div>
                    <div className="text-sm font-bold">{r.title}</div>
                    <div className="mt-0.5 text-[11px]" style={{ color: 'var(--rx-fg-dim)' }}>{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

export default IntroPage
