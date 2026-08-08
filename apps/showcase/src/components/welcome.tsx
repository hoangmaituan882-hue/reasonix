import { Button } from '@/components/ui/button'
import { DIRECTIONS, type Direction } from '@/lib/theme'
import { MessageSquarePlus, Boxes, Clapperboard, Palette, Check, BookOpen, Droplets, Type, Shapes, Gauge, ListChecks, ArrowRight } from 'lucide-react'

/** Welcome 可跳转的视图（不含自身） */
export type WelcomeTarget = 'workbench' | 'showcase' | 'motion' | 'design'

interface WelcomeProps {
  onNavigate: (view: WelcomeTarget) => void
  /** 当前方向 id；点击方向卡时回调切换 */
  currentDirection?: Direction
  onChangeDirection?: (dir: Direction) => void
}

/** 各主题方向的圆角体系（s / m / l，px）—— 与 index.css 中 data-direction 段保持一致 */
const DIRECTION_RADII: Record<Direction, string> = {
  graphite: '5 / 8 / 11',
  aurora: '10 / 15 / 22',
  slate: '8 / 12 / 16',
  carbon: '7 / 10 / 14',
  nocturne: '11 / 16 / 22',
  amber: '5 / 8 / 11', // amber 继承 graphite 圆角
}

const QUICK_ACTIONS: { label: string; icon: typeof MessageSquarePlus; view: WelcomeTarget }[] = [
  { label: '新会话', icon: MessageSquarePlus, view: 'workbench' },
  { label: '打开组件库', icon: Boxes, view: 'showcase' },
  { label: '查看动效', icon: Clapperboard, view: 'motion' },
  { label: '阅读设计文档', icon: BookOpen, view: 'design' },
]

/** DESIGN.md 章节介绍卡（点击进设计文档视图） */
const DESIGN_SECTIONS: { icon: typeof Droplets; title: string; desc: string; id: string }[] = [
  { icon: Droplets, title: '色彩 Tokens', desc: 'Graphite 双色板 · 6 方向 · accent 单焦点', id: 'sec-' + encodeURIComponent('1. 色彩 Tokens（Graphite 默认方向）') },
  { icon: Type, title: '排版', desc: '字号阶 10–18px · 系统字体栈', id: 'sec-' + encodeURIComponent('2. 排版') },
  { icon: Shapes, title: '形状与间距', desc: '圆角刻度 s/m/l · 焦点环 · 间距', id: 'sec-' + encodeURIComponent('3. 形状与间距') },
  { icon: Gauge, title: '运动', desc: '33 动效 · 120–420ms · 缓动', id: 'sec-' + encodeURIComponent('5. 运动') },
  { icon: ListChecks, title: 'Do / Don\'t', desc: '设计纪律 · 常见误区', id: 'sec-' + encodeURIComponent("6. Do / Don't") },
  { icon: Check, title: '组件 Checklist', desc: '设计代理执行清单 · 交付标准', id: 'sec-' + encodeURIComponent('7. 新建组件的 Checklist（供设计代理执行）') },
]

const STATS = [
  { label: '组件', value: '38' },
  { label: '过渡动画', value: '27' },
  { label: '动效场景', value: '33' },
  { label: '主题方向', value: '6' },
]

const RECENT = [
  { title: '石墨主题设计', meta: '2 小时前 · 18 轮', active: true },
  { title: '组件库规划', meta: '昨天 · 12 轮', active: false },
  { title: '工作台复刻', meta: '3 天前 · 24 轮', active: false },
]

/**
 * Welcome 引导页 —— 自适应网格布局，大屏铺满、小屏降级单列
 * 设计语言：CSS 变量 --rx-* 着色、--rx-r-* 圆角、rx-anim-splash 启动屏
 */
export function Welcome({ onNavigate, currentDirection, onChangeDirection }: WelcomeProps) {
  return (
    <div className="rx-anim-splash h-full w-full overflow-y-auto">
      <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col px-6 py-8 lg:px-10">
        {/* ===== 顶部品牌区：标题 + 统计 ===== */}
        <header className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-4">
            <div
              className="rx-grad flex h-12 w-12 shrink-0 items-center justify-center text-2xl font-extrabold"
              style={{ color: 'var(--rx-accent-fg)', borderRadius: 'var(--rx-r-l)', boxShadow: '0 10px 30px -8px var(--rx-accent)' }}
            >
              R
            </div>
            <div className="min-w-0">
              <h1
                className="t-shimmer text-2xl font-bold tracking-tight"
                data-text="Reasonix 设计系统"
                style={{ color: 'var(--rx-fg)', ['--shimmer-base' as string]: 'var(--rx-fg)', ['--shimmer-highlight' as string]: 'var(--rx-accent)', ['--shimmer-band' as string]: '200%' }}
              >
                Reasonix 设计系统
              </h1>
              <p className="mt-0.5 max-w-md truncate text-sm" style={{ color: 'var(--rx-fg-faint)' }}>
                一套面向桌面端工作台的设计语言 —— 主题令牌、组件与动效的开箱即用集合
              </p>
            </div>
          </div>

          {/* 统计条 */}
          <div className="grid w-full shrink-0 grid-cols-4 gap-2 sm:w-auto sm:gap-2.5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rx-hairline rx-lift flex min-w-[64px] flex-col items-center rounded-lg px-3 py-2.5"
                style={{ background: 'var(--rx-bg-elev)' }}
              >
                <span className="text-lg font-extrabold" style={{ color: 'var(--rx-accent)' }}>{s.value}</span>
                <span className="mt-0.5 whitespace-nowrap text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ===== 快捷操作 ===== */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {QUICK_ACTIONS.map((a) => (
            <Button
              key={a.view}
              onClick={() => onNavigate(a.view)}
              className="rx-grad h-9 px-4 text-sm font-semibold"
              style={{ background: 'var(--rx-grad)', color: 'var(--rx-accent-fg)', borderRadius: 'var(--rx-r-m)' }}
            >
              <a.icon className="size-4" />
              {a.label}
            </Button>
          ))}
        </div>

        {/* ===== 主体双栏网格：左（设计文档）+ 右（token/会话/方向） ===== */}
        <main className="mt-7 grid flex-1 grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          {/* ---- 左栏：设计文档 ---- */}
          <section className="flex min-w-0 flex-col">
            <div className="mb-3 flex items-center gap-2">
              <BookOpen className="h-3.5 w-3.5" style={{ color: 'var(--rx-accent)' }} />
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>设计文档 · DESIGN.md</span>
              <button
                className="ml-auto flex items-center gap-0.5 text-[10px] transition-colors hover:text-[var(--rx-accent)]"
                style={{ color: 'var(--rx-accent)' }}
                onClick={() => onNavigate('design')}
              >
                阅读全文 <ArrowRight className="size-3" />
              </button>
            </div>
            <p className="mb-3 text-[11px]" style={{ color: 'var(--rx-fg-dim)' }}>
              Reasonix 视觉语言的完整规范 —— 点击章节跳转阅读
            </p>
            <div className="grid flex-1 grid-cols-1 gap-2 sm:grid-cols-2">
              {DESIGN_SECTIONS.map((s) => (
                <button
                  key={s.title}
                  onClick={() => { sessionStorage.setItem('rx-doc-anchor', s.id); onNavigate('design') }}
                  className="rx-hairline rx-lift flex items-start gap-2.5 rounded-lg p-3 text-left"
                  style={{ background: 'var(--rx-bg-elev)' }}
                >
                  <span className="rx-icon-pop flex h-7 w-7 shrink-0 items-center justify-center rounded-md" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>
                    <s.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-xs font-semibold" style={{ color: 'var(--rx-fg)' }}>{s.title}</span>
                    <span className="mt-0.5 block text-[10px] leading-3.5" style={{ color: 'var(--rx-fg-faint)' }}>{s.desc}</span>
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* ---- 右栏：token 预览 / 最近会话 / 主题方向 ---- */}
          <section className="flex min-w-0 flex-col gap-6">
            {/* 实活 Token 预览 */}
            <div className="w-full">
              <div className="mb-2 flex items-center gap-2">
                <Palette className="h-3.5 w-3.5" style={{ color: 'var(--rx-accent)' }} />
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>实活 Token 预览</span>
              </div>
              <div className="rx-hairline space-y-3 rounded-xl p-3.5" style={{ background: 'var(--rx-bg-elev)' }}>
                <div>
                  <div className="mb-1.5 text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>Accent · 6 方向</div>
                  <div className="flex gap-2">
                    {DIRECTIONS.map((d) => (
                      <span key={d.id} className="flex flex-col items-center gap-1">
                        <span className="h-6 w-6 rounded-full border" style={{ background: d.accent, borderColor: 'var(--rx-border-soft)' }} />
                        <span className="text-[8px]" style={{ color: 'var(--rx-fg-faint)' }}>{d.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>圆角 · --rx-r-s/m/l</div>
                  <div className="flex items-end gap-2">
                    {[['s', 'var(--rx-r-s)', 20], ['m', 'var(--rx-r-m)', 30], ['l', 'var(--rx-r-l)', 40]].map(([k, v, h]) => (
                      <div key={k as string} className="flex flex-col items-center gap-1">
                        <span className="rx-grad block" style={{ width: 44, height: Number(h), borderRadius: v as string }} />
                        <span className="text-[8px]" style={{ color: 'var(--rx-fg-faint)' }}>{k}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>动效 · 时长刻度</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { dur: '120ms', label: 'hover' },
                      { dur: '180ms', label: 'popover' },
                      { dur: '340ms', label: 'drawer' },
                      { dur: '420ms', label: 'backdrop' },
                    ].map((m) => (
                      <span key={m.dur} className="mono rounded-full px-2 py-0.5 text-[9px]" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>
                        {m.dur} <span style={{ color: 'var(--rx-fg-faint)' }}>· {m.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 最近会话 */}
            <div className="w-full text-left">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>最近会话</span>
                <button className="text-[10px] transition-colors hover:text-[var(--rx-accent)]" style={{ color: 'var(--rx-accent)' }} onClick={() => onNavigate('workbench')}>查看全部</button>
              </div>
              <div className="space-y-1.5">
                {RECENT.map((s) => (
                  <button
                    key={s.title}
                    onClick={() => onNavigate('workbench')}
                    className="rx-lift flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left"
                    style={{ background: 'var(--rx-bg-elev)', borderColor: s.active ? 'var(--rx-accent)' : 'var(--rx-border-soft)' }}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md" style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}>💬</span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-xs font-semibold" style={{ color: 'var(--rx-fg)' }}>{s.title}</span>
                      <span className="block text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{s.meta}</span>
                    </span>
                    {s.active && <span className="rx-pulse h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: 'var(--rx-ok)' }} />}
                  </button>
                ))}
              </div>
            </div>

            {/* 主题方向 */}
            <div className="w-full">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold" style={{ color: 'var(--rx-fg-dim)' }}>
                <Palette className="size-3.5" />
                主题方向
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-2">
                {DIRECTIONS.map((d) => {
                  const active = d.id === currentDirection
                  return (
                    <button
                      key={d.id}
                      onClick={() => onChangeDirection?.(d.id)}
                      className="rx-lift flex items-center gap-2.5 border p-2.5 text-left"
                      style={{
                        background: active ? 'var(--rx-accent-soft)' : 'var(--rx-bg-elev)',
                        borderColor: active ? 'var(--rx-accent)' : 'var(--rx-border-soft)',
                        borderRadius: 'var(--rx-r-m)',
                      }}
                    >
                      <span className="h-5 w-5 shrink-0" style={{ background: d.accent, borderRadius: 'var(--rx-r-s)' }} />
                      <span className="min-w-0">
                        <span className="block truncate text-xs font-semibold" style={{ color: active ? 'var(--rx-accent)' : 'var(--rx-fg)' }}>{d.label}</span>
                        <span className="mono block text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>圆角 {DIRECTION_RADII[d.id]}</span>
                      </span>
                      {active && <Check className="ml-auto size-3.5 shrink-0" style={{ color: 'var(--rx-accent)' }} />}
                    </button>
                  )
                })}
              </div>
            </div>
          </section>
        </main>

        {/* 底部元信息 */}
        <footer className="mt-6 flex items-center justify-between border-t pt-4" style={{ borderColor: 'var(--rx-border-soft)' }}>
          <span className="text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>Reasonix Design Kit · 设计系统门户</span>
          <span className="mono text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>DESIGN.md · 9 章</span>
        </footer>
      </div>
    </div>
  )
}

export default Welcome
