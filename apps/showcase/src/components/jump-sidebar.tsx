import { Boxes } from 'lucide-react'

/* ------------------------------------------------------------------ */
/* 跳转侧边栏 —— 移植自 reasonix-components-showcase.html 的分类导航      */
/* 分组按钮（带计数）+ 该组组件列表，点击跳转对应 tab + 高亮跟随           */
/* ------------------------------------------------------------------ */

export interface JumpSidebarProps {
  /** 分组名 → 组件 tab id 列表 */
  groups: Record<string, string[]>
  /** tab id → 中文标签 */
  labels: Record<string, string>
  /** 当前激活分组 */
  activeGroup: string
  /** 当前激活 tab */
  activeTab: string
  /** 切换分组 + 跳转 tab */
  onNavigate: (group: string, tab: string) => void
}

export function JumpSidebar({ groups, labels, activeGroup, activeTab, onNavigate }: JumpSidebarProps) {
  const groupNames = Object.keys(groups)

  return (
    <aside
      className="hidden h-full w-52 shrink-0 flex-col overflow-y-auto border-r px-2 py-3 md:flex"
      style={{ background: 'var(--rx-bg-elev)', borderColor: 'var(--rx-border-soft)' }}
      aria-label="组件跳转导航"
    >
      {/* 标题 */}
      <div className="mb-3 flex items-center gap-2 px-2">
        <Boxes className="h-3.5 w-3.5" style={{ color: 'var(--rx-accent)' }} />
        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>组件导航</span>
      </div>

      {/* 分类列表 */}
      <nav className="space-y-1">
        {groupNames.map((g) => {
          const active = g === activeGroup
          const count = groups[g].length
          return (
            <div key={g}>
              {/* 分组按钮 */}
              <button
                onClick={() => onNavigate(g, groups[g][0])}
                className="flex w-full items-center gap-1.5 rounded-md px-2 py-1.5 text-left text-[11px] font-bold transition-colors"
                style={{
                  background: active ? 'var(--rx-accent-soft)' : 'transparent',
                  color: active ? 'var(--rx-accent)' : 'var(--rx-fg-dim)',
                }}
              >
                <span className="flex-1 truncate">{g}</span>
                <span
                  className="rounded-full px-1.5 py-0.5 text-[9px] font-semibold"
                  style={{
                    background: active ? 'var(--rx-accent)' : 'var(--rx-bg-soft)',
                    color: active ? 'var(--rx-accent-fg)' : 'var(--rx-fg-faint)',
                  }}
                >
                  {count}
                </span>
              </button>

              {/* 激活分组的组件列表（缩进，点击跳转 tab） */}
              {active && (
                <div className="ml-2 mt-0.5 space-y-0.5 border-l pl-2" style={{ borderColor: 'var(--rx-border-soft)' }}>
                  {groups[g].map((tabId) => {
                    const tabActive = tabId === activeTab
                    return (
                      <button
                        key={tabId}
                        onClick={() => onNavigate(g, tabId)}
                        className="flex w-full items-center gap-1 rounded px-2 py-1 text-left text-[10px] transition-colors"
                        style={{
                          background: tabActive ? 'var(--rx-accent)' : 'transparent',
                          color: tabActive ? 'var(--rx-accent-fg)' : 'var(--rx-fg-faint)',
                        }}
                      >
                        {tabActive && <span className="h-1 w-1 flex-none rounded-full" style={{ background: 'var(--rx-accent-fg)' }} />}
                        <span className="truncate">{labels[tabId] ?? tabId}</span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}

export default JumpSidebar
