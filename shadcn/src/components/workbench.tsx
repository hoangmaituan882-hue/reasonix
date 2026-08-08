import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import {
  CommandDialog, CommandEmpty, CommandGroup, CommandInput,
  CommandItem, CommandList, CommandSeparator,
} from '@/components/ui/command'
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from '@/components/ui/select'
import ToolCard from '@/components/tool-card'
import TodoPanel from '@/components/todo-panel'
import TerminalPanel from '@/components/terminal-panel'
import { useTheme, DIRECTIONS, type Direction } from '@/lib/theme'
import {
  MessageSquare, Plus, Activity, FileText, GitCompare, Radio,
  Search, Settings, Trash2, CornerDownRight, Brain, Gauge,
  Moon, Sun, Sparkles, ChevronRight, TerminalSquare,
  Folder, FolderOpen, FileCode, Braces, CircleCheck,
} from 'lucide-react'

// ── dock 面板静态数据（对齐真实 ContextPanel / DiffCard / RemotePanel 结构） ──
const capacityColor = (pct: number) =>
  pct > 90 ? 'var(--rx-err)' : pct > 80 ? 'var(--rx-warn)' : 'var(--rx-ok)'
const capacityLabel = (pct: number) =>
  pct > 90 ? '上下文紧张' : pct > 80 ? '接近压缩阈值' : '上下文充足'

const FILES = [
  { path: 'src/index.css', size: '2.4 kB', mtime: '10:21' },
  { path: 'src/App.tsx', size: '1.8 kB', mtime: '10:19' },
  { path: 'src/components/workbench.tsx', size: '31.2 kB', mtime: '10:24' },
  { path: 'src/lib/theme.ts', size: '3.1 kB', mtime: '09:58' },
  { path: 'package.json', size: '2.0 kB', mtime: '昨天' },
]

const CHANGES = [
  {
    f: 'src/index.css', a: '+120', d: '-4',
    lines: [
      { n: 14, sign: '+', code: '  --rx-accent: #ff6a3d;' },
      { n: 15, sign: '+', code: '  --rx-r-s/m/l: 5/8/11px;' },
      { n: 19, sign: '-', code: '  --radius: 8px;' },
      { n: 19, sign: '+', code: '  --rx-radius: 8px;' },
    ],
  },
  {
    f: 'src/App.tsx', a: '+86', d: '-0',
    lines: [
      { n: 12, sign: '+', code: '  <div className="app-shell">' },
      { n: 13, sign: '+', code: '    <Sidebar />' },
      { n: 14, sign: '+', code: '    <Workbench />' },
    ],
  },
  {
    f: 'src/lib/theme.ts', a: '+38', d: '-0',
    lines: [
      { n: 20, sign: '+', code: 'export type Direction = "ltr" | "rtl"' },
      { n: 21, sign: '+', code: 'export const DIRECTIONS: Direction[] =' },
      { n: 22, sign: '+', code: '  ["ltr", "rtl"]' },
      { n: 24, sign: '+', code: 'export function useTheme() {' },
    ],
  },
]

const REMOTE_HOSTS = [
  { host: 'prod-gpu-1', target: 'deploy@10.0.0.8', connected: true, sessions: 3, cpu: 42, mem: 68 },
  { host: 'dev-01', target: 'dev@10.0.0.12', connected: false, sessions: 0, cpu: 0, mem: 0 },
  { host: 'build-02', target: 'ci@10.0.1.8', connected: false, sessions: 0, cpu: 0, mem: 0 },
]

export default function Workbench() {
  const { dark, setDark, direction, setDirection } = useTheme()
  const [dockTab, setDockTab] = useState<'overview' | 'files' | 'changes' | 'remote'>('overview')
  const [cmdOpen, setCmdOpen] = useState(false)
  const [showTodo, setShowTodo] = useState(true)
  const [termOpen, setTermOpen] = useState(false)
  const [viewMode, setViewMode] = useState<'messages' | 'welcome'>('messages')
  // 项目树展开状态
  const [projects, setProjects] = useState([
    {
      name: 'reasonix-design-kit', expanded: true,
      sessions: [
        { label: '石墨主题设计', active: true, status: 'running' },
        { label: '工作台复刻', active: false, status: 'done' },
        { label: '组件库规划', active: false, status: 'done' },
      ],
    },
    {
      name: 'shadcn', expanded: true,
      sessions: [
        { label: '侧栏项目树升级', active: false, status: 'running' },
        { label: 'dock 面板改版', active: false, status: 'done' },
      ],
    },
  ])
  const toggleProject = (name: string) =>
    setProjects(ps => ps.map(p => p.name === name ? { ...p, expanded: !p.expanded } : p))
  // files tab：按扩展名选文件图标
  const fileIcon = (path: string) =>
    path.endsWith('.json') ? Braces
      : /\.(tsx?|jsx?|css|md)$/.test(path) ? FileCode
        : FileText

  // Ctrl+K 全局命令面板
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCmdOpen(true)
      }
    }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [])

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* ===== Topbar ===== */}
      <header className="flex h-11 shrink-0 items-center gap-3 border-b px-5" style={{ borderColor: 'var(--rx-border-soft)' }}>
        <h1 className="sr-only">Reasonix 工作台</h1>
        <div className="flex items-center gap-2 font-bold text-[15px]">
          <span className="rx-grad flex h-5 w-5 items-center justify-center rounded text-[11px] font-extrabold" style={{ color: 'var(--rx-accent-fg)' }}>R</span>
          Reasonix
        </div>
        <span className="text-xs" style={{ color: 'var(--rx-fg-faint)' }}>石墨主题 · shadcn 版</span>
        <div className="ml-auto flex items-center gap-2">
          {/* 方向切换 */}
          <div className="flex items-center gap-1 rounded-full p-0.5" style={{ border: '1px solid var(--rx-border-soft)' }}>
            {DIRECTIONS.map((d) => (
              <button
                key={d.id}
                onClick={() => setDirection(d.id as Direction)}
                className={`h-6 rounded-full px-2.5 text-[10px] font-semibold transition-colors ${direction === d.id ? 'text-[var(--rx-accent-fg)]' : ''}`}
                style={direction === d.id ? { background: 'var(--rx-accent)', color: 'var(--rx-accent-fg)' } : { color: 'var(--rx-fg-faint)' }}
              >
                {d.label}
              </button>
            ))}
          </div>
          {/* 明暗切换 */}
          <Button variant="outline" size="sm" onClick={() => setDark(!dark)}>
            {dark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
            {dark ? '浅色' : '深色'}
          </Button>
        </div>
      </header>

      {/* ===== Shell: sidebar + main + dock ===== */}
      <div className="flex min-h-0 flex-1">
        {/* ---- Sidebar ---- */}
        <aside className="flex w-[264px] shrink-0 flex-col border-r" style={{ background: 'var(--rx-sidebar)', borderColor: 'var(--rx-border-soft)' }}>
          {/* 新会话按钮切 welcome */}
          <div className="px-3 pt-3">
            <Button className="rx-grad w-full justify-start gap-2" style={{ color: 'var(--rx-accent-fg)' }} onClick={() => setViewMode('welcome')}>
              <Plus className="h-4 w-4" /> 新会话
            </Button>
          </div>
          <div className="mt-3 px-3 text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>
            项目
          </div>
          <div className="mt-1 flex-1 space-y-px overflow-y-auto px-2">
            {/* project-tree：项目文件夹 → 会话子项 */}
            {projects.map((p) => (
              <div key={p.name}>
                <div
                  role="button"
                  tabIndex={0}
                  className="flex h-9 cursor-pointer items-center gap-1.5 rounded-md px-2.5 text-xs"
                  style={{ color: 'var(--rx-fg-dim)' }}
                  onClick={() => toggleProject(p.name)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      toggleProject(p.name)
                    }
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--rx-sidebar-hover)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '' }}
                >
                  <ChevronRight className={`h-3 w-3 shrink-0 transition-transform ${p.expanded ? 'rotate-90' : ''}`} style={{ color: 'var(--rx-fg-faint)' }} />
                  {p.expanded
                    ? <FolderOpen className="h-3.5 w-3.5 shrink-0" style={{ color: 'var(--rx-accent)' }} />
                    : <Folder className="h-3.5 w-3.5 shrink-0" style={{ color: 'var(--rx-fg-faint)' }} />}
                  <span className="truncate font-medium">{p.name}</span>
                </div>
                {p.expanded && (
                  <div className="space-y-px pb-1 pl-7 pr-1">
                    {p.sessions.map((s) => (
                      <div
                        key={s.label}
                        role="button"
                        tabIndex={0}
                        className="flex h-9 cursor-pointer items-center gap-2.5 rounded-md px-2.5 text-xs"
                        style={s.active
                          ? { background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }
                          : { color: 'var(--rx-fg-dim)' }}
                        onMouseEnter={(e) => { if (!s.active) e.currentTarget.style.background = 'var(--rx-sidebar-hover)' }}
                        onMouseLeave={(e) => { if (!s.active) e.currentTarget.style.background = '' }}
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: s.status === 'running' ? 'var(--rx-ok)' : 'var(--rx-fg-faint)', opacity: s.status === 'running' ? 1 : 0.45 }} />
                        <span className="truncate">{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {/* 最近会话 */}
            <div className="px-1 pb-1 pt-3 text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>
              最近
            </div>
            {[
              { icon: MessageSquare, label: '石墨主题设计', active: false },
              { icon: MessageSquare, label: '组件库规划', active: false },
              { icon: MessageSquare, label: '工作台复刻', active: false },
            ].map((s) => (
              <div
                key={s.label}
                role="button"
                tabIndex={0}
                className="flex h-9 items-center gap-2.5 rounded-md px-2.5 text-xs cursor-pointer"
                style={s.active
                  ? { background: 'var(--rx-accent-soft)', color: 'var(--rx-accent)' }
                  : { color: 'var(--rx-fg-dim)' }}
                onMouseEnter={(e) => { if (!s.active) (e.currentTarget as HTMLElement).style.background = 'var(--rx-sidebar-hover)' }}
                onMouseLeave={(e) => { if (!s.active) (e.currentTarget as HTMLElement).style.background = '' }}
              >
                <s.icon className="h-3.5 w-3.5" />
                <span className="truncate">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="border-t p-2.5" style={{ borderColor: 'var(--rx-border-soft)' }}>
            {[
              { icon: Trash2, label: '回收站' },
              { icon: Settings, label: '设置' },
            ].map((s) => (
              <div key={s.label} className="flex h-8 cursor-pointer items-center gap-2.5 rounded-md px-2.5 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
                <s.icon className="h-3.5 w-3.5" /> {s.label}
              </div>
            ))}
          </div>
        </aside>

        {/* ---- Main (transcript + composer) ---- */}
        <main className="flex min-w-0 flex-1 flex-col">
          {/* 会话 tab 条（点击切消息/welcome） */}
          <div role="tablist" className="flex shrink-0 items-end gap-0.5 border-b px-2 pt-1" style={{ borderColor: 'var(--rx-border-soft)' }}>
            {['石墨主题设计', '组件库规划', '工作台复刻'].map((t, i) => (
              <div
                key={t}
                role="tab"
                tabIndex={i === 0 ? 0 : -1}
                aria-selected={i === 0}
                onClick={() => setViewMode(i === 0 ? 'welcome' : 'messages')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setViewMode(i === 0 ? 'welcome' : 'messages')
                    return
                  }
                  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                    // roving tabindex：方向键在 tab 间移动焦点
                    e.preventDefault()
                    const tabs = Array.from(e.currentTarget.parentElement?.children ?? []) as HTMLElement[]
                    const dir = e.key === 'ArrowRight' ? 1 : -1
                    const next = tabs[(i + dir + tabs.length) % tabs.length]
                    next?.focus()
                  }
                }}
                className="relative h-7 cursor-pointer px-3 text-xs font-medium"
                style={i === 0
                  ? { background: 'var(--rx-bg)', color: 'var(--rx-fg)', boxShadow: 'inset 0 2px 0 var(--rx-accent)' }
                  : { color: 'var(--rx-fg-faint)' }}
              >
                {t}
              </div>
            ))}
          </div>

          {/* transcript — 对齐真实版消息流 */}
          <div className="flex min-h-0 flex-1">
            {/* welcome 空状态（无会话时） */}
            {viewMode === 'welcome' && (
              <div className="flex min-w-0 flex-1 flex-col items-center justify-center px-6 text-center">
                <div className="rx-grad flex h-12 w-12 items-center justify-center rounded-full text-xl font-extrabold" style={{ color: 'var(--rx-accent-fg)', boxShadow: '0 10px 30px -8px var(--rx-accent)' }}>R</div>
                <h2 className="mt-4 text-lg font-bold" style={{ color: 'var(--rx-fg)' }}>开始新的会话</h2>
                <p className="mt-1.5 max-w-sm text-xs leading-5" style={{ color: 'var(--rx-fg-faint)' }}>
                  描述你的目标，Reasonix 会规划步骤并执行。支持 plan / chat / goal 三种协作模式。
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {[
                    { label: '📋 规划任务', hint: '制定执行计划' },
                    { label: '💬 自由对话', hint: 'chat 模式' },
                    { label: '🎯 设定目标', hint: 'goal 模式' },
                  ].map((s) => (
                    <button
                      key={s.label}
                      onClick={() => setViewMode('messages')}
                      className="rx-hairline rounded-md px-4 py-2.5 text-left transition-all hover:border-[var(--rx-accent)] hover:shadow-md"
                      style={{ background: 'var(--rx-bg-elev)' }}
                    >
                      <div className="text-xs font-semibold" style={{ color: 'var(--rx-fg)' }}>{s.label}</div>
                      <div className="mt-0.5 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{s.hint}</div>
                    </button>
                  ))}
                </div>
                <div className="mono mt-6 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>
                  ⌘K 命令面板 · Shift+? 快捷键
                </div>
              </div>
            )}
            {/* 消息流 */}
            {viewMode === 'messages' && (
            <>
            {/* jump-bar 问题导航（对齐 Transcript.tsx） */}
            <nav className="jump-bar sticky left-0 top-0 z-10 flex shrink-0 flex-col justify-center px-1.5" aria-label="问题导航">
              <div className="flex flex-col gap-1.5 rounded-full border py-2" style={{ borderColor: 'var(--rx-border-soft)', background: 'color-mix(in srgb, var(--rx-bg) 90%, transparent)' }}>
                {[
                  { q: '用 reasonix 设计语言重设计工作台', active: true },
                  { q: '参考 components-showcase 与 workbench-clone', active: false },
                  { q: '用 shadcn + tailwind 实现', active: false },
                ].map((m, i) => (
                  <button
                    key={i}
                    className="jump-item group flex items-center px-1.5"
                    onClick={() => {
                      // 3 个点分别指向：用户消息、助手消息、最后的 ToolCard
                      const targets = ['.msg--user', '.msg--assistant', '.tool--running']
                      const el = document.querySelector(targets[i] || '.msg--assistant')
                      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                    title={m.q}
                  >
                    <span
                      className="h-2 rounded-full transition-all"
                      style={{
                        width: m.active ? 14 : 8,
                        background: m.active ? 'var(--rx-accent)' : 'var(--rx-fg-faint)',
                        opacity: m.active ? 1 : 0.45,
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.background = 'var(--rx-accent)' }}
                      onMouseLeave={(e) => { if (!m.active) { e.currentTarget.style.opacity = '0.45'; e.currentTarget.style.background = 'var(--rx-fg-faint)' } }}
                    />
                  </button>
                ))}
              </div>
            </nav>

            <div className="rx-anim-message min-w-0 flex-1 space-y-5 overflow-y-auto px-6 py-5">
            {/* 用户消息（带 meta） */}
            <div className="msg msg--user flex gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold" style={{ background: 'var(--rx-accent)', color: 'var(--rx-accent-fg)' }}>你</div>
              <div className="min-w-0 flex-1">
                <div className="msg__text max-w-[720px] text-sm leading-6" style={{ color: 'var(--rx-fg)' }}>
                  用 reasonix 的设计语言（石墨主题）重设计工作台，参考 components-showcase 与 workbench-clone，用 shadcn + tailwind 实现。
                </div>
                {/* msg-meta：时间 + 复制/编辑 */}
                <div className="msg-meta mt-1 flex items-center gap-2 text-[10px] opacity-0 transition-opacity hover:opacity-100" style={{ color: 'var(--rx-fg-faint)' }}>
                  <time>10:24:03</time>
                  <button className="rounded px-1.5 py-0.5 transition-colors hover:bg-[var(--rx-bg-elev-2)] hover:text-[var(--rx-fg)]">复制</button>
                  <button className="rounded px-1.5 py-0.5 transition-colors hover:bg-[var(--rx-bg-elev-2)] hover:text-[var(--rx-fg)]">编辑</button>
                </div>
              </div>
            </div>

            {/* 助手消息（思考折叠 + 正文 + tool 卡） */}
            <div className="msg msg--assistant flex gap-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold" style={{ background: 'var(--rx-bg-elev-2)', color: 'var(--rx-accent)' }}>AI</div>
              <div className="min-w-0 flex-1 space-y-2.5">
                {/* ReasoningPanel — 思考折叠 */}
                <details className="turn-collapse group" open>
                  <summary className="flex w-fit cursor-pointer select-none items-center gap-1.5 rounded px-1.5 py-0.5 text-[10px] transition-colors hover:bg-[var(--rx-bg-elev-2)]" style={{ color: 'var(--rx-fg-faint)' }}>
                    <span className="transition-transform group-open:rotate-90"><ChevronRight className="h-3 w-3" /></span>
                    <span className="font-semibold" style={{ color: 'var(--rx-fg-dim)' }}>已工作</span>
                  </summary>
                  <div className="mt-1 border-l-2 pl-3 text-[10px] leading-4" style={{ borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-faint)' }}>
                    分析工作台结构 → 识别 4 层差异 → 逐层对齐（消息/tool 卡/jump-bar/terminal）
                  </div>
                </details>

                {/* 正文 */}
                <div className="msg__body max-w-[720px] space-y-2">
                  <div className="text-sm leading-6" style={{ color: 'var(--rx-fg)' }}>
                    好的。参考源码 <span className="mono">Message.tsx / ToolCard.tsx / Transcript.tsx</span>，消息流已对齐：
                  </div>
                  <ul className="list-inside list-disc space-y-1 text-sm leading-6" style={{ color: 'var(--rx-fg)' }}>
                    <li>用户消息带 <b style={{ color: 'var(--rx-accent)' }}>msg-meta</b>（时间/复制/编辑，hover 显现）</li>
                    <li>助手消息带 <b style={{ color: 'var(--rx-accent)' }}>ReasoningPanel</b>（思考折叠）</li>
                    <li>工具调用渲染为 <b style={{ color: 'var(--rx-accent)' }}>ToolCard</b>（状态图标 + 摘要 + 耗时 + diff）</li>
                  </ul>
                </div>

                {/* ToolCard — 编辑文件 */}
                <ToolCard item={{
                  name: '编辑文件',
                  subject: 'src/index.css',
                  summary: '转译 reasonix token',
                  duration: '2.3s',
                  status: 'done',
                  diff: [
                    { add: '--rx-accent: #ff6a3d;', del: '' },
                    { add: '--rx-r-s/m/l: 5/8/11px;', del: '--radius: 8px;' },
                  ],
                }} />
                {/* ToolCard — 终端 */}
                <ToolCard item={{
                  name: '终端',
                  subject: 'pnpm run build',
                  summary: 'tsc + vite build',
                  duration: '1.1s',
                  status: 'done',
                  output: '✓ built in 362ms (CSS 104KB, JS 401KB)',
                }} />
                {/* ToolCard — 运行中 */}
                <ToolCard item={{
                  name: '运行工具',
                  subject: 'playwright 截图',
                  status: 'running',
                }} />
              </div>
            </div>
            </div>
            </>
            )}
          </div>

          {/* composer — 对齐真实版：context-ring + model/effort switcher */}
          <div className="shrink-0 px-6 pb-4 pt-1">
            {showTodo && <TodoPanel onDismiss={() => setShowTodo(false)} />}
            <div className="mx-auto max-w-[760px] rounded-xl border p-2" style={{ borderColor: 'var(--rx-border)', background: 'var(--rx-bg-elev)' }}>
              <Input
                placeholder="输入指令，Shift+Enter 换行…"
                className="border-none bg-transparent text-sm shadow-none focus-visible:ring-0 placeholder:text-[var(--rx-fg-faint)]"
              />
              {/* composer-meta 工具栏 */}
              <div className="mt-1.5 flex items-center gap-1.5">
                {/* content-trigger（对齐真实版 composer-content-trigger：+ 添加内容） */}
                <button
                  className="flex h-5 w-5 items-center justify-center rounded transition-colors hover:bg-[var(--rx-accent-soft)]"
                  style={{ color: 'var(--rx-fg-dim)' }}
                  title="添加内容"
                  onClick={() => setViewMode('messages')}
                >
                  <Plus className="h-3 w-3" />
                </button>
                {/* context-ring：上下文窗口进度环（对齐 ContextWindowRing RING=20） */}
                <span className="mr-1 flex h-5 w-5 shrink-0 items-center justify-center" title="上下文窗口 33%">
                  <svg viewBox="0 0 20 20" className="h-[20px] w-[20px] -rotate-90">
                    <circle cx="10" cy="10" r="7.5" fill="none" strokeWidth="3" style={{ stroke: 'var(--rx-bg-elev-2)' }} />
                    <circle cx="10" cy="10" r="7.5" fill="none" strokeWidth="3" strokeLinecap="round"
                      strokeDasharray="47.1" strokeDashoffset={47.1 * (1 - 0.33)}
                      style={{ stroke: 'var(--rx-accent)' }} />
                  </svg>
                </span>
                {/* task mode（plan） */}
                <Badge variant="secondary" className="h-5 gap-1 px-2 text-[10px]" style={{ color: 'var(--rx-accent)', background: 'var(--rx-accent-soft)' }}>
                  <Radio className="h-3 w-3" /> plan
                </Badge>
                {/* approval mode（auto） */}
                <Badge variant="outline" className="h-5 px-2 text-[10px]">auto</Badge>
                {/* model switcher（对齐 modelsw） */}
                <Select defaultValue="deepseek-chat">
                  <SelectTrigger className="h-5 w-auto gap-1 rounded border-none bg-transparent px-1.5 text-[10px] shadow-none focus:ring-0 data-[state=open]:ring-0">
                    <Brain className="h-3 w-3" style={{ color: 'var(--rx-accent)' }} />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="min-w-[160px]">
                    <SelectItem value="deepseek-chat">deepseek-chat</SelectItem>
                    <SelectItem value="deepseek-reasoner">deepseek-reasoner</SelectItem>
                    <SelectItem value="gpt-4o">gpt-4o</SelectItem>
                  </SelectContent>
                </Select>
                {/* effort switcher（对齐 effortsw） */}
                <Select defaultValue="auto">
                  <SelectTrigger className="h-5 w-auto gap-1 rounded border-none bg-transparent px-1.5 text-[10px] shadow-none focus:ring-0">
                    <Gauge className="h-3 w-3" style={{ color: 'var(--rx-fg-dim)' }} />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="min-w-[140px]">
                    <SelectItem value="low">low</SelectItem>
                    <SelectItem value="auto">auto</SelectItem>
                    <SelectItem value="high">high</SelectItem>
                  </SelectContent>
                </Select>
                {/* profile-trigger（对齐真实版 composer-profile-trigger） */}
                <button
                  className="flex h-5 items-center gap-1 rounded px-1.5 text-[10px] transition-colors hover:bg-[var(--rx-accent-soft)]"
                  style={{ color: 'var(--rx-fg-dim)' }}
                  title="Profile 切换"
                >
                  <CircleCheck className="h-3 w-3" style={{ color: 'var(--rx-ok)' }} />
                  Profile
                  <ChevronRight className="h-2.5 w-2.5" />
                </button>
                <span className="flex-1" />
                <Button size="sm" className="rx-grad gap-1.5" style={{ color: 'var(--rx-accent-fg)' }}>
                  <CornerDownRight className="h-3.5 w-3.5" /> 发送
                </Button>
              </div>
            </div>
          </div>
        </main>

        {/* ---- Dock (right) ---- */}
        <aside className="flex w-[300px] shrink-0 flex-col border-l" style={{ background: 'var(--rx-bg-soft)', borderColor: 'var(--rx-border-soft)' }}>
          <div className="flex items-center gap-0.5 border-b px-2 pt-1.5" style={{ borderColor: 'var(--rx-border-soft)' }}>
            {([
              { id: 'overview', label: '总览', icon: Activity },
              { id: 'files', label: '文件', icon: FileText },
              { id: 'changes', label: '变更', icon: GitCompare },
              { id: 'remote', label: '远端', icon: Radio },
            ] as const).map((t) => (
              <button
                key={t.id}
                onClick={() => setDockTab(t.id)}
                className="flex h-6 items-center gap-1.5 px-2.5 text-[11px] font-medium transition-colors"
                style={dockTab === t.id
                  ? { color: 'var(--rx-accent)', background: 'var(--rx-accent-soft)' }
                  : { color: 'var(--rx-fg-faint)' }}
              >
                <t.icon className="h-3 w-3" /> {t.label}
              </button>
            ))}
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto p-3">
            {dockTab === 'overview' && (
              <>
                {/* 会话就绪空状态 */}
                <div className="flex items-center gap-2.5 rounded-md border px-3 py-2.5" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-elev)' }}>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full" style={{ background: 'color-mix(in srgb, var(--rx-ok) 15%, transparent)' }}>
                    <CircleCheck className="h-3.5 w-3.5" style={{ color: 'var(--rx-ok)' }} />
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold" style={{ color: 'var(--rx-fg)' }}>会话就绪</div>
                    <div className="truncate text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>AI 助手已就绪，等待你的指令</div>
                  </div>
                </div>
                {/* 上下文容量卡：容量条 + 已用/压缩 百分比 + 状态色（>90% 红 / >80% 橙） */}
                <div className="rounded-md border p-3" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-elev)' }}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold" style={{ color: 'var(--rx-fg-dim)' }}>{capacityLabel(33)}</span>
                    <strong className="mono text-xs font-bold" style={{ color: 'var(--rx-fg)' }}>42.1k / 128k tokens</strong>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full" style={{ background: 'var(--rx-bg-elev-2)' }}>
                    <div className="rx-sweep h-full rounded-full" style={{ width: '33%', background: capacityColor(33) }} />
                  </div>
                  <div className="mt-1.5 flex justify-between text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>
                    <span>33% 已用</span><span>距压缩 80%</span>
                  </div>
                </div>
                {/* mini-stat 网格：读取命中率 / 成本 / 总 token */}
                <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>会话指标</div>
                <div className="grid grid-cols-3 gap-2 rounded-md border px-2.5 py-2" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-elev)' }}>
                  <div className="flex min-w-0 flex-col gap-1">
                    <span className="truncate text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>读取命中率</span>
                    <strong className="text-[13px] font-bold tabular-nums" style={{ color: 'var(--rx-ok)' }}>87.00%</strong>
                  </div>
                  <div className="flex min-w-0 flex-col gap-1">
                    <span className="truncate text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>会话费用</span>
                    <strong className="text-[13px] font-bold tabular-nums" style={{ color: 'var(--rx-fg)' }}>¥128.50</strong>
                  </div>
                  <div className="flex min-w-0 flex-col gap-1">
                    <span className="truncate text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>累计 tokens</span>
                    <strong className="text-[13px] font-bold tabular-nums" style={{ color: 'var(--rx-accent)' }}>34,479</strong>
                  </div>
                </div>
                {/* 会话状态（保留） */}
                <div className="text-[10px] font-bold uppercase tracking-wider pt-2" style={{ color: 'var(--rx-fg-faint)' }}>会话状态</div>
                <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--rx-fg-dim)' }}>
                  <span className="rx-pulse h-1.5 w-1.5 rounded-full" style={{ background: 'var(--rx-ok)' }} />
                  运行中 · model: deepseek-chat
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider pt-2" style={{ color: 'var(--rx-fg-faint)' }}>事件</div>
                {[
                  { label: 'agent:event', sub: 'agent:on_goal_completed', t: '2s' },
                  { label: 'agent:event', sub: 'agent:on_tool_executed', t: '8s' },
                  { label: 'agent:event', sub: 'agent:on_token_usage', t: '11s' },
                ].map((e, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px]" style={{ background: 'var(--rx-bg-elev)' }}>
                    <span className="mono" style={{ color: 'var(--rx-accent)' }}>{e.label}</span>
                    <span className="truncate mono" style={{ color: 'var(--rx-fg-faint)' }}>{e.sub}</span>
                    <span className="ml-auto mono text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{e.t}</span>
                  </div>
                ))}
              </>
            )}
            {dockTab === 'files' && (
              <div className="space-y-1">
                <div className="mb-2 flex items-center gap-2 rounded-md border px-2" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-elev)' }}>
                  <Search className="h-3 w-3" style={{ color: 'var(--rx-fg-faint)' }} />
                  <Input className="h-7 w-full border-none bg-transparent text-xs shadow-none focus-visible:ring-0 placeholder:text-[var(--rx-fg-faint)]" placeholder="搜索文件…" />
                </div>
                {FILES.map((f, i) => {
                  const Icon = fileIcon(f.path)
                  return (
                    <div
                      key={f.path}
                      className="flex h-7 cursor-pointer items-center gap-2 rounded px-2 text-xs"
                      style={{ color: i === 0 ? 'var(--rx-accent)' : 'var(--rx-fg-dim)', background: i === 0 ? 'var(--rx-accent-soft)' : 'transparent' }}
                      onMouseEnter={(e) => { if (i !== 0) e.currentTarget.style.background = 'var(--rx-bg-elev)' }}
                      onMouseLeave={(e) => { if (i !== 0) e.currentTarget.style.background = 'transparent' }}
                    >
                      <Icon className="h-3 w-3 shrink-0" />
                      <span className="mono truncate">{f.path}</span>
                      {/* f-meta：文件大小 + 修改时间 */}
                      <span className="ml-auto shrink-0 text-[9px] tabular-nums" style={{ color: 'var(--rx-fg-faint)' }}>{f.size} · {f.mtime}</span>
                    </div>
                  )
                })}
              </div>
            )}
            {dockTab === 'changes' && (
              <div className="space-y-2">
                {CHANGES.map((c) => (
                  <div key={c.f} className="rx-hairline overflow-hidden rounded-md">
                    {/* diff-card__head：文件头统计 */}
                    <div className="flex items-center gap-2 border-b px-2.5 py-1.5 text-[11px]" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-elev)' }}>
                      <span className="mono truncate" style={{ color: 'var(--rx-fg)' }}>{c.f}</span>
                      <span className="ml-auto flex gap-1">
                        <span className="mono rounded-full px-1.5 py-px text-[9px] font-bold" style={{ background: 'color-mix(in srgb, var(--rx-ok) 14%, transparent)', color: 'var(--rx-ok)' }}>{c.a}</span>
                        <span className="mono rounded-full px-1.5 py-px text-[9px] font-bold" style={{ background: 'color-mix(in srgb, var(--rx-err) 14%, transparent)', color: 'var(--rx-err)' }}>{c.d}</span>
                      </span>
                    </div>
                    {/* diff 行：行号列 + 符号 + 代码（+绿 / -红 背景） */}
                    {c.lines.map((l, i) => {
                      const add = l.sign === '+'
                      const del = l.sign === '-'
                      return (
                        <div
                          key={i}
                          className="flex font-mono text-[10px] leading-5"
                          style={{
                            background: add
                              ? 'color-mix(in srgb, var(--rx-ok) 13%, transparent)'
                              : del
                                ? 'color-mix(in srgb, var(--rx-err) 13%, transparent)'
                                : 'transparent',
                          }}
                        >
                          <span
                            className="w-7 shrink-0 select-none pr-1.5 text-right tabular-nums"
                            style={{
                              background: add
                                ? 'color-mix(in srgb, var(--rx-ok) 22%, transparent)'
                                : del
                                  ? 'color-mix(in srgb, var(--rx-err) 22%, transparent)'
                                  : 'color-mix(in srgb, var(--rx-bg) 55%, transparent)',
                              color: 'var(--rx-fg-faint)',
                              opacity: 0.75,
                            }}
                          >{l.n}</span>
                          <span
                            className="w-3.5 shrink-0 select-none text-center font-bold"
                            style={{ color: add ? 'var(--rx-ok)' : del ? 'var(--rx-err)' : 'transparent' }}
                          >{add ? '+' : del ? '−' : ''}</span>
                          <span
                            className="min-w-0 flex-1 overflow-x-auto whitespace-pre pl-1.5 pr-2"
                            style={{ color: add ? 'var(--rx-ok)' : del ? 'var(--rx-err)' : 'var(--rx-fg-dim)' }}
                          >{l.code}</span>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            )}
            {dockTab === 'remote' && (
              <div className="space-y-2">
                <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>远程主机</div>
                {REMOTE_HOSTS.map((h) => (
                  <div key={h.host} className="rx-hairline rounded-md p-2.5">
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: h.connected ? 'var(--rx-ok)' : 'var(--rx-fg-faint)', opacity: h.connected ? 1 : 0.4 }} />
                      <span className="truncate text-xs font-semibold" style={{ color: 'var(--rx-fg)' }}>{h.host}</span>
                      <Button size="sm" variant="outline" className="ml-auto h-6 px-2 text-[10px]">
                        {h.connected ? '断开' : '连接'}
                      </Button>
                    </div>
                    <div className="mono mt-1 truncate text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{h.target}</div>
                    {/* 会话数 + 资源占用（CPU/内存小条） */}
                    <div className="mt-2 space-y-1.5 border-t pt-2" style={{ borderColor: 'var(--rx-border-soft)' }}>
                      <div className="flex items-center gap-2 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>
                        <span className="flex items-center gap-1"><Activity className="h-3 w-3" style={{ color: 'var(--rx-fg-dim)' }} />{h.sessions} 会话</span>
                        <span className="flex-1" />
                        <span className="tabular-nums">CPU {h.connected ? `${h.cpu}%` : '—'}</span>
                        <span className="tabular-nums">内存 {h.connected ? `${h.mem}%` : '—'}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1 flex-1 overflow-hidden rounded-full" style={{ background: 'var(--rx-bg-elev-2)' }}>
                          <div className="h-full rounded-full" style={{ width: `${h.cpu}%`, background: 'var(--rx-accent)' }} />
                        </div>
                        <div className="h-1 flex-1 overflow-hidden rounded-full" style={{ background: 'var(--rx-bg-elev-2)' }}>
                          <div className="h-full rounded-full" style={{ width: `${h.mem}%`, background: 'var(--rx-ok)' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="shrink-0 border-t p-2" style={{ borderColor: 'var(--rx-border-soft)' }}>
            <div className="mono flex items-center gap-2 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>
              <Gauge className="h-3 w-3" /> 18 轮 · 42.1k tokens
            </div>
          </div>
        </aside>
      </div>

      {/* terminal 抽屉 */}
      {termOpen && <TerminalPanel onClose={() => setTermOpen(false)} />}
      {/* ===== StatusBar ===== */}
      <footer className="flex h-7 shrink-0 items-center border-t px-3 text-[11px]" style={{ background: 'var(--rx-bg-soft)', borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}>
        {['4 会话', 'deploy@10.0.0.8', '18 轮', 'token 42.1k', '2.3k/s'].map((s, i) => (
          <span key={s} className="flex items-center gap-2 px-2.5" style={i > 0 ? { borderLeft: '1px solid var(--rx-border-soft)' } : {}}>
            {i === 1 && <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'var(--rx-ok)' }} />}
            {s}
          </span>
        ))}
        <span className="ml-auto flex items-center gap-2 px-2.5">
          <button
            className="flex items-center gap-1.5 rounded px-2 py-0.5 text-[10px] transition-colors hover:bg-[var(--rx-bg-elev-2)]"
            style={{ color: termOpen ? 'var(--rx-accent)' : 'var(--rx-fg-dim)' }}
            onClick={() => setTermOpen(o => !o)}
          >
            <TerminalSquare className="h-3 w-3" /> 终端
          </button>
          Profile · 石墨设计
        </span>
      </footer>
      {/* 命令面板 */}
      <CommandDialog open={cmdOpen} onOpenChange={setCmdOpen}>
        <CommandInput placeholder="输入命令…" />
        <CommandList>
          <CommandEmpty>无结果</CommandEmpty>
          <CommandGroup heading="会话">
            <CommandItem onSelect={() => { setCmdOpen(false); setViewMode('welcome') }}><Plus className="mr-2 h-3.5 w-3.5" /> 新建会话</CommandItem>
            <CommandItem onSelect={() => { setCmdOpen(false); setViewMode('messages') }}><MessageSquare className="mr-2 h-3.5 w-3.5" /> 切换会话</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="工具">
            <CommandItem onSelect={() => { setCmdOpen(false); setTermOpen(o => !o) }}><Sparkles className="mr-2 h-3.5 w-3.5" /> 切换模型</CommandItem>
            <CommandItem onSelect={() => { setCmdOpen(false); setTermOpen(o => !o) }}><Settings className="mr-2 h-3.5 w-3.5" /> 打开终端</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
