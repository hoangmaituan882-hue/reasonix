import { useState } from 'react'
import { ListTodo, Check } from 'lucide-react'

/**
 * TodoPanel — 对齐 TodoPanel.tsx 真实结构
 * todobar__head（title + count）+ todobar__list（item 带状态）
 */
interface Todo {
  id: string
  text: string
  status: 'pending' | 'in_progress' | 'completed'
}

const INITIAL: Todo[] = [
  { id: '1', text: '重写消息流为真实结构', status: 'completed' },
  { id: '2', text: '加 jump-bar 问题导航', status: 'completed' },
  { id: '3', text: '加 terminal 抽屉 + todo 条', status: 'in_progress' },
  { id: '4', text: '验证 + 单文件打包', status: 'pending' },
]

export default function TodoPanel({ onDismiss }: { onDismiss?: () => void }) {
  const [todos, setTodos] = useState(INITIAL)
  const done = todos.filter(t => t.status === 'completed').length

  const toggle = (id: string) => {
    // 三态环形：pending → in_progress → completed → pending
    const NEXT: Record<Todo['status'], Todo['status']> = { pending: 'in_progress', in_progress: 'completed', completed: 'pending' }
    setTodos(ts => ts.map(t => (t.id === id ? { ...t, status: NEXT[t.status] } : t)))
  }

  return (
    <div className="todobar rx-anim-todobar mx-auto mb-2 max-w-[760px] overflow-hidden rounded-md border"
      style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-elev)' }}>
      <div className="todobar__head flex items-center gap-2 border-b px-3 py-1.5"
        style={{ borderColor: 'var(--rx-border-soft)' }}>
        <ListTodo className="h-3 w-3" style={{ color: 'var(--rx-accent)' }} />
        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>任务</span>
        <span className="mono text-[10px]" style={{ color: 'var(--rx-accent)' }}>{done}/{todos.length}</span>
        <span className="flex-1" />
        {onDismiss && (
          <button className="rounded px-1.5 text-[10px] transition-colors hover:bg-[var(--rx-bg-elev-2)]" style={{ color: 'var(--rx-fg-faint)' }} onClick={onDismiss}>收起</button>
        )}
      </div>
      <div className="todobar__list flex flex-col gap-0.5 p-1.5">
        {todos.map(t => (
          <button
            key={t.id}
            onClick={() => toggle(t.id)}
            className="flex h-6 items-center gap-2 rounded px-2 text-left text-xs transition-colors"
            style={{
              color: t.status === 'completed' ? 'var(--rx-fg-faint)' : t.status === 'in_progress' ? 'var(--rx-accent)' : 'var(--rx-fg-dim)',
              background: t.status === 'in_progress' ? 'var(--rx-accent-soft)' : 'transparent',
              textDecoration: t.status === 'completed' ? 'line-through' : 'none',
            }}
          >
            <span
              className="flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-sm border"
              style={{ borderColor: t.status === 'completed' ? 'var(--rx-ok)' : 'var(--rx-border)' }}
            >
              {t.status === 'completed' && <Check className="h-2.5 w-2.5" style={{ color: 'var(--rx-ok)' }} />}
            </span>
            <span className="truncate">{t.text}</span>
            {t.status === 'in_progress' && <span className="rx-pulse ml-auto h-1.5 w-1.5 rounded-full" style={{ background: 'var(--rx-accent)' }} />}
          </button>
        ))}
      </div>
    </div>
  )
}
