import { useState } from 'react'
import { Welcome } from '@/components/welcome'
import Workbench from '@/components/workbench'
import ComponentsShowcase from '@/components/showcase'
import MotionGallery from '@/components/motion-gallery'
import TransitionGallery from '@/components/transition-gallery'
import ComponentOverview from '@/components/component-overview'
import DesignDoc from '@/components/design-doc'
import IntroPage from '@/components/intro-page'
import { useTheme, DIRECTIONS } from '@/lib/theme'
import { TRANSITION_CSS, HOVER_OVERRIDES } from '@/lib/transition-global'
import { LayoutDashboard, Boxes, Clapperboard, Sparkles, Grid, ChevronsLeft, ChevronsRight, BookOpen, Home } from 'lucide-react'

export default function App() {
  const [view, setView] = useState<'welcome' | 'intro' | 'workbench' | 'showcase' | 'motion' | 'overview' | 'transition' | 'design'>('welcome')
  const [collapsed, setCollapsed] = useState(false)
  const { dark, setDark, direction, setDirection } = useTheme()

  const nav = [
    { id: 'welcome' as const, label: '欢迎', icon: Sparkles },
    { id: 'intro' as const, label: '组件库介绍', icon: Home },
    { id: 'design' as const, label: '设计文档', icon: BookOpen },
    { id: 'workbench' as const, label: '工作台', icon: LayoutDashboard },
    { id: 'showcase' as const, label: '组件库', icon: Boxes },
    { id: 'overview' as const, label: '组件总览', icon: Grid },
    { id: 'transition' as const, label: '过渡画廊', icon: Sparkles },
    { id: 'motion' as const, label: '动效画廊', icon: Clapperboard },
  ]

  // 收窄：用户手动折叠 OR 工作台视图自动收窄（给工作台自身侧栏/dock 腾空间）
  const narrow = collapsed || view === 'workbench'

  return (
    <div className="flex h-screen overflow-hidden">
      {/* 全局注入 transitions.dev 过渡 CSS（27 个 t-* 类全站可用） */}
      <style dangerouslySetInnerHTML={{ __html: TRANSITION_CSS + HOVER_OVERRIDES }} />
      {/* 左侧边栏：品牌 + 导航 + 主题方向（工作台时收窄；移动端隐藏） */}
      <aside
        className="hidden shrink-0 flex-col border-r transition-all duration-300 md:flex"
        style={{ width: narrow ? 52 : 208, background: 'var(--rx-sidebar)', borderColor: 'var(--rx-border-soft)' }}
      >
        {/* 品牌区（折叠时仅 R 徽标居中） */}
        <div className={`flex items-center gap-2 px-3 py-4 ${narrow ? 'justify-center' : ''}`}>
          <span className="rx-grad flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-sm font-extrabold" style={{ color: 'var(--rx-accent-fg)' }}>R</span>
          {!narrow && (
            <div className="min-w-0 overflow-hidden whitespace-nowrap">
              <div className="text-xs font-bold" style={{ color: 'var(--rx-fg)' }}>Reasonix</div>
              <div className="text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>设计系统</div>
            </div>
          )}
        </div>
        {/* 导航 */}
        <nav className="flex-1 space-y-0.5 px-2 py-2">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => setView(n.id)}
              title={narrow ? n.label : undefined}
              className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-xs font-semibold transition-colors ${view === n.id ? 'text-[var(--rx-accent-fg)]' : ''}`}
              style={view === n.id ? { background: 'var(--rx-accent)' } : { color: 'var(--rx-fg-dim)' }}
            >
              <n.icon className="h-3.5 w-3.5 shrink-0" />
              {!narrow && <span className="overflow-hidden whitespace-nowrap">{n.label}</span>}
            </button>
          ))}
        </nav>
        {/* 折叠开关（导航底部，常用模式） */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="mx-2 mb-2 flex items-center gap-2 rounded-md border px-2.5 py-1.5 text-[10px] font-semibold transition-colors hover:border-[var(--rx-accent)]"
          style={{ borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-faint)', justifyContent: narrow ? 'center' : 'flex-start' }}
          title={narrow ? '展开侧边栏' : '折叠侧边栏'}
        >
          {narrow ? <ChevronsRight className="h-3.5 w-3.5" /> : <ChevronsLeft className="h-3.5 w-3.5" />}
          {!narrow && '折叠侧边栏'}
        </button>
        {/* 主题方向切换 */}
        {!narrow && (
          <div className="border-t px-3 py-3" style={{ borderColor: 'var(--rx-border-soft)' }}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[9px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>主题方向</span>
              {/* 全局明暗切换（所有页面可见） */}
              <button
                onClick={() => setDark(!dark)}
                className="flex h-5 items-center gap-1 rounded-full px-2 text-[9px] font-semibold transition-colors"
                style={{ background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }}
                aria-label="切换明暗"
              >
                {dark ? '☀️ 浅色' : '🌙 深色'}
              </button>
            </div>
            <div className="flex flex-wrap gap-1">
              {DIRECTIONS.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDirection(d.id)}
                  className="flex h-5 items-center gap-1 rounded-full px-2 text-[9px] font-semibold transition-colors"
                  style={direction === d.id
                    ? { background: 'var(--rx-accent)', color: 'var(--rx-accent-fg)' }
                    : { border: '1px solid var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: d.accent }} />
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </aside>
      {/* 页面容器：key 切页时触发入场动画 */}
      <div key={view} className="rx-anim-page h-full min-w-0 flex-1">
        {view === 'welcome' ? (
          <Welcome onNavigate={(v) => setView(v)} currentDirection={direction} onChangeDirection={setDirection} />
        ) : view === 'intro' ? (
          <IntroPage onChangeDirection={(dir) => setDirection(dir as never)} />
        ) : view === 'workbench' ? (
          <Workbench />
        ) : view === 'showcase' ? (
          <ComponentsShowcase />
        ) : view === 'design' ? (
          <DesignDoc />
        ) : view === 'overview' ? (
          <ComponentOverview />
        ) : view === 'transition' ? (
          <TransitionGallery />
        ) : (
          <MotionGallery />
        )}
      </div>
      </div>
  )
}
