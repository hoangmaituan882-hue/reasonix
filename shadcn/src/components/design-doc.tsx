import { useMemo, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import raw from '@/docs/design.md?raw'
import { ScrollArea } from '@/components/ui/scroll-area'
import { BookOpen, FileText } from 'lucide-react'

/**
 * 设计文档视图：渲染 DESIGN.md 全文（react-markdown + GFM 表格）
 * 左侧章节目录（锚点滚动），右侧正文（全部用 --rx-* token 着色）
 */
export default function DesignDoc() {
  // 提取 ## 章节做目录
  const sections = useMemo(() => {
    return raw
      .split('\n')
      .filter(l => l.startsWith('## '))
      .map(l => {
        const title = l.replace('## ', '').trim()
        return { title, id: 'sec-' + encodeURIComponent(title) }
      })
  }, [])

  // 挂载后若带锚点（从欢迎页章节卡进入），滚动到对应章节
  useEffect(() => {
    const anchor = sessionStorage.getItem('rx-doc-anchor')
    if (anchor) {
      sessionStorage.removeItem('rx-doc-anchor')
      setTimeout(() => {
        const el = document.getElementById(anchor)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="flex h-full min-w-0">
      {/* 左侧章节目录 */}
      <nav className="w-44 shrink-0 overflow-y-auto border-r px-2 py-4" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-soft)' }} aria-label="章节目录">
        <div className="mb-2 flex items-center gap-1.5 px-2 text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--rx-fg-faint)' }}>
          <BookOpen className="h-3 w-3" /> 章节
        </div>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="rx-press flex w-full items-center gap-2 rounded-md px-2.5 py-1.5 text-left text-[11px] transition-colors hover:bg-[var(--rx-accent-soft)] hover:text-[var(--rx-accent)]"
            style={{ color: 'var(--rx-fg-dim)' }}
          >
            <FileText className="h-3 w-3 shrink-0" style={{ color: 'var(--rx-fg-faint)' }} />
            <span className="truncate">{s.title}</span>
          </button>
        ))}
      </nav>

      {/* 右侧正文 */}
      <ScrollArea className="min-w-0 flex-1">
        <div className="mx-auto max-w-3xl px-6 py-6">
          <div className="mb-4 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>
            源：reasonix-design-kit/DESIGN.md · {raw.split('\n').length} 行
          </div>
          <div className="md-prose" style={{ color: 'var(--rx-fg)' }}>
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => <h1 id="doc-top" className="mb-4 mt-2 text-xl font-bold" style={{ color: 'var(--rx-fg)' }}>{children}</h1>,
                h2: ({ children }) => {
                  const text = String(children).replace(/`/g, '').trim()
                  return <h2 id={'sec-' + encodeURIComponent(text)} className="mb-3 mt-8 border-b pb-2 text-lg font-bold" style={{ color: 'var(--rx-fg)', borderColor: 'var(--rx-border-soft)' }}>{children}</h2>
                },
                h3: ({ children }) => <h3 className="mb-2 mt-6 text-base font-semibold" style={{ color: 'var(--rx-fg)' }}>{children}</h3>,
                p: ({ children }) => <p className="mb-3 text-sm leading-6" style={{ color: 'var(--rx-fg-dim)' }}>{children}</p>,
                ul: ({ children }) => <ul className="mb-3 ml-4 list-disc space-y-1 text-sm" style={{ color: 'var(--rx-fg-dim)' }}>{children}</ul>,
                ol: ({ children }) => <ol className="mb-3 ml-4 list-decimal space-y-1 text-sm" style={{ color: 'var(--rx-fg-dim)' }}>{children}</ol>,
                li: ({ children }) => <li className="leading-6">{children}</li>,
                strong: ({ children }) => <strong style={{ color: 'var(--rx-fg)' }}>{children}</strong>,

                pre: ({ children }) => (
                  <pre className="mono mb-3 overflow-x-auto rounded-md border p-3 text-[11px] leading-5" style={{ borderColor: 'var(--rx-border-soft)', background: 'var(--rx-bg-elev)', color: 'var(--rx-fg-dim)' }}>{children}</pre>
                ),
                // code：统一中性样式（行内浅底、块级继承 pre 色）
                code: ({ children, className }) => (
                  <code className={`mono rounded px-1 py-0.5 text-[11px] ${className || ''}`} style={{ background: 'var(--rx-bg-elev-2)', color: 'var(--rx-fg-dim)' }}>{children}</code>
                ),
                table: ({ children }) => (
                  <div className="mb-3 overflow-x-auto rounded-md border" style={{ borderColor: 'var(--rx-border-soft)' }}>
                    <table className="w-full border-collapse text-xs">{children}</table>
                  </div>
                ),
                thead: ({ children }) => <thead>{children}</thead>,
                tbody: ({ children }) => <tbody>{children}</tbody>,
                tr: ({ children }) => <tr className="border-b" style={{ borderColor: 'var(--rx-border-soft)' }}>{children}</tr>,
                th: ({ children }) => <th className="px-3 py-2 text-left font-semibold" style={{ color: 'var(--rx-fg)', background: 'var(--rx-bg-elev-2)' }}>{children}</th>,
                td: ({ children }) => <td className="px-3 py-1.5" style={{ color: 'var(--rx-fg-dim)' }}>{children}</td>,
                blockquote: ({ children }) => <blockquote className="mb-3 border-l-2 pl-3 text-sm italic" style={{ borderColor: 'var(--rx-accent)', color: 'var(--rx-fg-faint)' }}>{children}</blockquote>,
                a: ({ children, href }) => <a href={href} target="_blank" rel="noreferrer" style={{ color: 'var(--rx-accent)' }}>{children}</a>,
                hr: () => <hr className="my-6" style={{ borderColor: 'var(--rx-border-soft)' }} />,
              }}
            >
              {raw}
            </ReactMarkdown>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
