import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Play, Pause, RotateCcw } from 'lucide-react'

/**
 * 动效画廊 — DESIGN.md §5.0.1 的 33 个动效场景
 * 每个卡片：动画舞台 + 播放/暂停/重置 + 时长/缓动标注
 */
interface MotionItem {
  name: string
  cls: string
  dur: string
  ease: string
  desc: string
  scene?: string
}

const MOTIONS: MotionItem[] = [
  { name: '模态弹窗', cls: 'rx-anim-modal', dur: '280ms', ease: 'ease-out(3段弹跳)', desc: 'translateY 10px + scale .98 → 弹跳归位', scene: 'modal-in' },
  { name: '命令面板', cls: 'rx-anim-palette', dur: '160ms', ease: 'overshoot', desc: '-12px + scale .97 软着陆', scene: 'palette-in' },
  { name: '抽屉', cls: 'rx-anim-drawer', dur: '340ms', ease: 'ease-out', desc: 'translateX 24px 滑入', scene: 'drawer-in' },
  { name: '弹出层', cls: 'rx-anim-popover', dur: '180ms', ease: 'ease-out', desc: 'rise 4px + scale .985', scene: 'popover-in' },
  { name: '菜单', cls: 'rx-anim-menu', dur: '180ms', ease: 'ease-out', desc: 'scale .98 + rise 2px', scene: 'menu-pop-in' },
  { name: 'Tooltip', cls: 'rx-anim-tooltip', dur: '120ms', ease: 'ease-out', desc: 'translate 进入', scene: 'tooltip-in' },
  { name: '遮罩淡入', cls: 'rx-anim-backdrop', dur: '180ms', ease: 'ease-out', desc: 'opacity fade', scene: 'backdrop-in' },
  { name: '跳转条', cls: 'rx-anim-jumpbar', dur: '260ms', ease: 'ease-out', desc: '带延迟进入', scene: 'jump-bar-in' },
  { name: '提示条', cls: 'rx-anim-shelf', dur: '340ms', ease: 'ease-out', desc: '+10px 升起', scene: 'shelf-in' },
  { name: '卡片内容', cls: 'rx-anim-cardbody', dur: '180ms', ease: 'ease-out', desc: '-4px 浮现', scene: 'card-body-in' },
  { name: '消息进入', cls: 'rx-anim-message', dur: '350ms', ease: 'ease-out', desc: '+10px 上升', scene: 'graphite-message-in' },
  { name: '任务条', cls: 'rx-anim-todobar', dur: '180ms', ease: 'ease-out', desc: 'rise 4px', scene: 'todobar-in' },
  { name: '标签进入', cls: 'rx-anim-tab', dur: '180ms', ease: 'ease-out', desc: '-4px 下落', scene: 'tab-in' },
  { name: '启动屏', cls: 'rx-anim-splash', dur: '550ms', ease: 'decelerate', desc: '软着陆', scene: 'startup-splash-in' },
  { name: '呼吸点', cls: 'rx-pulse', dur: '1.2s', ease: 'ease-in-out', desc: '循环脉冲', scene: 'pulse' },
  { name: '进程扫光', cls: 'rx-sweep', dur: '1.2s', ease: 'ease-in-out', desc: '循环扫光', scene: 'process-sweep' },
  { name: '骨架屏', cls: 'rx-shimmer', dur: '5s', ease: 'linear', desc: '循环流光', scene: 'shimmer-sweep' },
  { name: '标签状态', cls: 'rx-breathe', dur: '2.6s', ease: 'ease-in-out', desc: '循环呼吸', scene: 'tab-status-breathe' },
  { name: 'macOS 按压', cls: 'rx-anim-press', dur: '260ms', ease: 'overshoot', desc: '弹跳按压', scene: 'mac-sidebar-press' },
  { name: '旋转', cls: 'rx-anim-spin', dur: '1s', ease: 'linear', desc: '循环旋转', scene: 'spin' },
  { name: '淡入', cls: 'rx-anim-fade', dur: '180ms', ease: 'ease-out', desc: '纯 opacity', scene: 'fade-in' },
  { name: '上滑', cls: 'rx-anim-slideup', dur: '200ms', ease: 'ease-out', desc: '6px 上滑', scene: 'slide-up' },
  { name: '遮罩淡出', cls: 'rx-anim-backdrop-out', dur: '180ms', ease: 'ease-out', desc: 'opacity 反向淡出', scene: 'backdrop-out' },
  { name: '页面切换', cls: 'rx-anim-page', dur: '420ms', ease: 'ease-standard', desc: '横向滑出 + 滑入翻页', scene: 'page-transition' },
  { name: '列表行按压', cls: 'rx-anim-rowpress', dur: '120ms', ease: 'ease-out', desc: 'scale .985 微压 + 回弹', scene: 'row-hover-press' },
  { name: '通知进入', cls: 'rx-anim-toast', dur: '340ms', ease: 'ease-out', desc: '+10px 底部滑入', scene: 'toast-in' },
  { name: 'Dock 浮层', cls: 'rx-anim-dock', dur: '180ms', ease: 'ease-out', desc: 'translateY 8px + scale .96', scene: 'dock-in' },
  { name: '引导遮罩', cls: 'rx-anim-onboard', dur: '420ms', ease: 'ease-out', desc: '环境级淡入', scene: 'onboarding-in' },
  { name: '扫光慢速', cls: 'rx-sweep-slow', dur: '2.4s', ease: 'ease-in-out', desc: '慢速循环扫光', scene: 'process-sweep-slow' },
  { name: '骨架快速', cls: 'rx-shimmer-fast', dur: '1.5s', ease: 'linear', desc: '快速循环流光', scene: 'shimmer-fast' },
  { name: '标签抖动', cls: 'rx-anim-shake', dur: '320ms', ease: 'ease-in-out', desc: '±3px 左右抖动提示', scene: 'tab-shake' },
  { name: '放大脉冲', cls: 'rx-anim-pulsescale', dur: '1.6s', ease: 'ease-in-out', desc: 'scale 1.1 循环放大强调', scene: 'pulse-scale' },
  { name: '缩小收缩', cls: 'rx-anim-collapse', dur: '180ms', ease: 'ease-standard', desc: 'scale .85 + fade 收缩退出', scene: 'collapse' },
]

function MotionCard({ m, idx = 0 }: { m: MotionItem; idx?: number }) {
  const [state, setState] = useState<'idle' | 'playing' | 'paused'>('idle')
  const [speed, setSpeed] = useState(1)

  return (
    <Card className="rx-anim-fade overflow-hidden" style={{ animationDelay: `${Math.min(idx * 30, 300)}ms`, animationFillMode: 'backwards' }}>
      <CardContent className="p-0">
        {/* 舞台 */}
        <div className="relative flex h-24 items-center justify-center border-b" style={{ background: 'var(--rx-bg-soft)', borderColor: 'var(--rx-border-soft)' }}>
          <div
            className={`flex h-12 w-32 items-center justify-center rounded-md text-xs font-semibold ${m.cls}`}
            style={{
              background: 'var(--rx-accent-soft)',
              color: 'var(--rx-accent)',
              border: '1px solid var(--rx-border)',
              animationDuration: `${((m.dur.endsWith('ms') ? parseFloat(m.dur) : parseFloat(m.dur) * 1000) / speed)}ms`,
              animationIterationCount: ['rx-pulse', 'rx-sweep', 'rx-shimmer', 'rx-breathe', 'rx-anim-spin', 'rx-anim-pulsescale'].some(c => m.cls.includes(c)) ? 'infinite' : '1',
              animationPlayState: state === 'paused' ? 'paused' : 'running',
            }}
          >
            {m.name}
          </div>
        </div>
        {/* 信息 */}
        <div className="p-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold" style={{ color: 'var(--rx-fg)' }}>{m.name}</span>
            {m.scene && <span className="mono text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>{m.scene}</span>}
          </div>
          <div className="mt-1 text-[10px]" style={{ color: 'var(--rx-fg-faint)' }}>{m.desc}</div>
          <div className="mono mt-1.5 flex gap-2 text-[9px]" style={{ color: 'var(--rx-fg-faint)' }}>
            <span>{m.dur}</span><span>·</span><span>{m.ease}</span>
          </div>
          {/* 控制 */}
          <div className="mt-2 flex items-center gap-1.5">
            <Button
              size="sm" variant="outline" className="h-6 gap-1 px-2 text-[10px]"
              onClick={() => setState(s => s === 'playing' ? 'idle' : 'playing')}
            >
              <Play className="h-3 w-3" /> 播放
            </Button>
            <Button size="sm" variant="ghost" className="h-6 gap-1 px-2 text-[10px]" aria-label={state === 'paused' ? '恢复' : '暂停'} onClick={() => setState(s => s === 'paused' ? 'playing' : 'paused')}>
              {state === 'paused' ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
            </Button>
            <Button size="sm" variant="ghost" className="h-6 gap-1 px-2 text-[10px]" aria-label="重置" onClick={() => setState('idle')}>
              <RotateCcw className="h-3 w-3" />
            </Button>
            {/* 倍速选择：shadcn Select 组件（替代原生 select） */}
            <Select value={String(speed)} onValueChange={(v) => setSpeed(Number(v))}>
              <SelectTrigger className="ml-auto h-6 w-16 gap-1 rounded-md border px-1.5 text-[10px] shadow-none focus:ring-0" style={{ borderColor: 'var(--rx-border-soft)', color: 'var(--rx-fg-dim)' }}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="min-w-[72px]">
                {[0.5, 1, 1.5, 2].map(s => <SelectItem key={s} value={String(s)}>{s}×</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function MotionGallery() {
  return (
    <>
      {/* 补充 keyframes/工具类（新增场景；只动 transform/opacity，用 rx-dur 与 rx-ease 变量） */}
      <ScrollArea className="h-full w-full">
      <div className="mx-auto max-w-5xl p-8">
        <div className="mb-4">
          <h1 className="text-xl font-bold" style={{ color: 'var(--rx-fg)' }}>动效画廊</h1>
          <p className="mt-1 text-sm" style={{ color: 'var(--rx-fg-dim)' }}>
            DESIGN.md §5.0.1 的动效场景 · 全部只动 transform/opacity · prefers-reduced-motion 自动折叠
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MOTIONS.map((m, i) => <MotionCard key={m.name} m={m} idx={i} />)}
        </div>
      </div>
    </ScrollArea>
    </>
  )
}
