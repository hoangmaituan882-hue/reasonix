import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

/**
 * ToolCard — 对齐 Reasonix ToolCard.tsx 真实结构
 * status: running | done | error | stopped
 * 头部：状态图标 + 名称 + 摘要 + 耗时 + chevron + 状态点
 * 主体：diff 渲染 / 输出
 */
export interface ToolItem {
  name: string
  subject?: string
  summary?: string
  duration?: string
  status: 'running' | 'done' | 'error' | 'stopped'
  diff?: { add: string; del: string }[]
  output?: string
}

const STATUS_META: Record<ToolItem['status'], { icon: string; color: string }> = {
  running: { icon: '○', color: 'var(--rx-warn)' },
  done: { icon: '✓', color: 'var(--rx-ok)' },
  error: { icon: '✗', color: 'var(--rx-err)' },
  stopped: { icon: '—', color: 'var(--rx-fg-faint)' },
}

export default function ToolCard({ item }: { item: ToolItem }) {
  const [open, setOpen] = useState(true)
  const hasBody = Boolean(item.diff?.length || item.output)
  const meta = STATUS_META[item.status]

  return (
    <div className={`rx-anim-cardbody rx-hairline overflow-hidden rounded-md ${item.status === 'running' ? 'tool--running' : ''}`}
      style={{ borderColor: 'var(--rx-border-soft)' }}>
      {/* 头部 */}
      <button
        type="button"
        className="flex w-full items-center gap-2 border-b px-3 py-2 text-left text-[11px] transition-colors"
        style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-elev)', color: 'var(--rx-fg-dim)' }}
        onClick={() => hasBody && setOpen(!open)}
      >
        {/* 状态图标 */}
        <span className="flex h-4 w-4 items-center justify-center text-[10px] font-bold" style={{ color: meta.color }}>
          {item.status === 'running' ? <span className="rx-pulse">{meta.icon}</span> : meta.icon}
        </span>
        {/* 名称 + subject */}
        <span className="flex items-center gap-1.5 min-w-0">
          <span className="truncate font-semibold" style={{ color: 'var(--rx-fg)' }}>{item.name}</span>
          {item.subject && <span className="mono truncate text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{item.subject}</span>}
        </span>
        {/* 摘要 */}
        {item.summary && (
          <span className="truncate text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{item.summary}</span>
        )}
        {/* 耗时 */}
        {item.duration && (
          <span className="mono ml-auto shrink-0 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{item.duration}</span>
        )}
        {/* chevron */}
        {hasBody && (
          <span className={`shrink-0 transition-transform ${open ? 'rotate-90' : ''}`} style={{ color: 'var(--rx-fg-faint)' }}>
            <ChevronRight className="h-3 w-3" />
          </span>
        )}
        {/* 状态点 */}
        {item.status !== 'running' && (
          <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: meta.color }} />
        )}
      </button>

      {/* 主体：diff / 输出 */}
      {hasBody && open && (
        <div className="space-y-1 bg-transparent p-2" style={{ background: 'var(--rx-bg-soft)' }}>
          {item.diff?.map((d, i) => (
            <div key={i} className="mono overflow-x-auto rounded px-2 text-[10px] leading-4">
              <div className="px-1" style={{ background: 'color-mix(in srgb, var(--rx-ok) 20%, transparent)', color: 'var(--rx-fg-dim)' }}>
                + {d.add}
              </div>
              {d.del && (
                <div className="px-1" style={{ background: 'color-mix(in srgb, var(--rx-err) 20%, transparent)', color: 'var(--rx-fg-faint)' }}>
                  - {d.del}
                </div>
              )}
            </div>
          ))}
          {item.output && (
            <pre className="overflow-x-auto px-2 py-1 text-[10px] leading-4" style={{ color: 'var(--rx-fg-dim)' }}>{item.output}</pre>
          )}
        </div>
      )}
    </div>
  )
}
