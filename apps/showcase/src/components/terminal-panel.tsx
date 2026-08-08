import { useState } from 'react'
import { TerminalSquare, Plus, X } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'

/**
 * TerminalPanel — 对齐 TerminalPanel.tsx 真实结构
 * header（identity + actions：shell select + 新会话 + 关闭）+ body（会话 rail + xterm 模拟）
 */
export default function TerminalPanel({ onClose }: { onClose?: () => void }) {
  const [shell, setShell] = useState('bash')
  const [lines, setLines] = useState<string[]>([
    '$ pnpm run build',
    '> tsc -b && vite build',
    '✓ built in 362ms (CSS 104KB, JS 464KB)',
    '$ ',
  ])
  const [input, setInput] = useState('')
  const [exiting, setExiting] = useState(false)

  // 退出：先播 200ms 下滑渐隐，再真正关闭（spatial story 对称）
  const close = () => {
    if (!onClose || exiting) return
    setExiting(true)
    setTimeout(onClose, 200)
  }

  const run = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return
    const cmd = input.trim()
    if (!cmd) return
    const output = cmd === 'clear'
      ? []
      : [`$ ${cmd}`, `✓ ${cmd.split(' ')[0]} 完成 (0.42s)`, '$ ']
    setLines(prev => [...(cmd === 'clear' ? [] : prev.slice(0, -1)), ...output])
    setInput('')
  }

  return (
    <section className={`terminal-panel flex h-[240px] shrink-0 flex-col border-t ${exiting ? 'rx-anim-slideup-rev' : 'rx-anim-slideup'}`}
      style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-soft)' }}>
      {/* header */}
      <header className="flex h-9 shrink-0 items-center gap-2 border-b px-3"
        style={{ borderColor: 'var(--rx-border-soft)' }}>
        <TerminalSquare className="h-3.5 w-3.5" style={{ color: 'var(--rx-accent)' }} />
        <strong className="text-xs" style={{ color: 'var(--rx-fg)' }}>终端</strong>
        <span className="mono truncate text-[10px]" style={{ color: 'var(--rx-fg-faint)' }} title="/c/Users/Linze/Desktop/project">/c/Users/Linze/Desktop/project</span>
        <span className="flex-1" />
        {/* shell select：shadcn Select 组件 */}
        <Select value={shell} onValueChange={setShell}>
          <SelectTrigger className="h-6 w-24 gap-1 rounded-md border px-2 text-[10px] shadow-none focus:ring-0" style={{ borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="min-w-[96px]">
            {['bash', 'powershell', 'cmd'].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
          </SelectContent>
        </Select>
        {/* 新会话 */}
        <button
          className="flex h-6 w-6 items-center justify-center rounded transition-colors hover:bg-[var(--rx-bg-elev-2)]"
          style={{ color: 'var(--rx-fg-dim)' }}
          onClick={() => setLines(prev => [...prev.slice(0, -1), '$ ', '$ '])}
          title="新会话"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
        {/* 关闭 */}
        {onClose && (
          <button className="flex h-6 w-6 items-center justify-center rounded transition-colors hover:bg-[var(--rx-bg-elev-2)]" style={{ color: 'var(--rx-fg-faint)' }} onClick={close} title="关闭">
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </header>
      {/* body */}
      <div className="mono min-h-0 flex-1 overflow-y-auto p-3 text-[11px] leading-5"
        style={{ color: 'var(--rx-fg-dim)', background: 'var(--rx-bg)' }}>
        {lines.map((l, i) => (
          <div key={i} className={l.startsWith('✓') ? '' : ''} style={l.startsWith('✓') ? { color: 'var(--rx-ok)' } : l.startsWith('$') ? { color: 'var(--rx-fg)' } : {}}>
            {l.startsWith('$') && <span style={{ color: 'var(--rx-accent)' }}>$ </span>}
            {l.startsWith('$') ? l.slice(2) : l}
          </div>
        ))}
        <div className="flex items-center">
          <span style={{ color: 'var(--rx-accent)' }}>$ </span>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={run}
            className="h-5 flex-1 border-none bg-transparent p-0 text-[11px] shadow-none focus-visible:ring-0"
            style={{ color: 'var(--rx-fg)', caretColor: 'var(--rx-accent)' }}
            placeholder="输入命令…"
            spellCheck={false}
          />
        </div>
      </div>
    </section>
  )
}
