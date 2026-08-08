// 过渡画廊 10-18 号：真实可动画 HTML demo（与 transition-catalog.ts 的 CSS 选择器一一对应）
// 每个 demo 都是自包含的真实结构（SVG/输入框/骨架/文字…），
// inline style 使用主题变量 var(--rx-*) 保证深浅色下都可见。
// trigger 说明该过渡的驱动方式：
//   'data-state'    播放器切换 data-state="in"/"out"
//   'is-animating'  播放器切 is-* 动画类（is-shaking/is-clearing/is-revealed/is-shown…）
//   'hover'         依赖用户 hover / focus 触发，无需自动播放
//   'none'          纯 CSS 自动循环动画（shimmer）

export interface TransitionDemo2 {
  html: string
  trigger: string
}

export const TRANSITION_DEMOS_2: Record<string, TransitionDemo2> = {
  '10-success-check': {
    html: `<span class="t-success-check" data-state="in" aria-hidden="true" style="display:grid;place-items:center;width:76px;height:76px;border-radius:50%;background:rgba(58,209,126,0.16);background:color-mix(in srgb, var(--rx-ok) 16%, transparent);color:var(--rx-ok);--check-opacity-dur:500ms;--check-rotate-dur:500ms;--check-rotate-from:80deg;--check-bob-dur:500ms;--check-y-amount:40px;--check-blur-dur:500ms;--check-blur-from:10px;--check-path-dur:500ms;--check-ease:cubic-bezier(0.22,1,0.36,1)">
  <svg viewBox="0 0 48 48" width="42" height="42" fill="none" style="overflow:visible">
    <circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" opacity="0.9"/>
    <path d="M18 24.5 L22.5 29 L31.5 20.5" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</span>`,
    trigger: 'data-state',
  },
  '11-avatar-group-hover': {
    html: `<div class="t-avatar-group" style="display:flex;align-items:center;padding:6px 2px;--avatar-dur:320ms;--avatar-ease-in:cubic-bezier(0.22,1,0.36,1)">
  <div class="t-avatar" title="Alice" style="width:44px;height:44px;border-radius:50%;display:grid;place-items:center;font-size:14px;font-weight:700;color:#fff;background:#8b5cf6;border:3px solid var(--rx-bg-elev);box-shadow:0 2px 8px rgba(0,0,0,0.25);cursor:pointer;">AL</div>
  <div class="t-avatar" title="Sam" style="width:44px;height:44px;margin-left:-14px;border-radius:50%;display:grid;place-items:center;font-size:14px;font-weight:700;color:#fff;background:#0ea5e9;border:3px solid var(--rx-bg-elev);box-shadow:0 2px 8px rgba(0,0,0,0.25);cursor:pointer;">SK</div>
  <div class="t-avatar" title="Jordan" style="width:44px;height:44px;margin-left:-14px;border-radius:50%;display:grid;place-items:center;font-size:14px;font-weight:700;color:#fff;background:#f59e0b;border:3px solid var(--rx-bg-elev);box-shadow:0 2px 8px rgba(0,0,0,0.25);cursor:pointer;">JD</div>
</div>`,
    trigger: 'hover',
  },
  '12-error-state-shake': {
    html: `<div class="t-input-wrap" style="width:min(280px,100%);text-align:left;--shake-distance:6px;--shake-overshoot:4px;--shake-dur-a:80ms;--shake-dur-b:60ms;--shake-ease:cubic-bezier(0.36,0,0.66,-0.56)">
  <div class="t-input" style="display:flex;align-items:center;gap:8px;height:40px;padding:0 12px;border-radius:10px;border:1.5px solid var(--rx-border);background:var(--rx-bg-elev);">
    <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="var(--rx-fg-faint)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    <input type="email" placeholder="you@example.com" style="flex:1;min-width:0;border:none;outline:none;background:transparent;font-size:13px;color:var(--rx-fg);"/>
  </div>
  <p class="t-error-msg" style="margin:6px 2px 0;font-size:11px;color:var(--rx-err);">邮箱格式不正确，请检查后重试</p>
  <style>.t-input-wrap.is-error .t-input,.t-input.is-error{border-color:var(--rx-err);}</style>
</div>`,
    trigger: 'is-animating',
  },
  '13-input-clear-dissolve': {
    html: `<div class="t-clear has-value" style="position:relative;width:min(280px,100%);height:40px;border:1.5px solid var(--rx-border);border-radius:10px;background:var(--rx-bg-elev);">
  <input type="text" value="design tokens 整理" aria-label="搜索" style="position:absolute;inset:0;width:100%;padding:0 38px 0 12px;border:0;outline:none;background:transparent;font-size:13px;color:var(--rx-fg);"/>
  <div class="t-clear-mirror" aria-hidden="true" style="padding:0 38px 0 12px;font-size:13px;color:var(--rx-fg);">design tokens 整理</div>
  <div class="t-clear-placeholder" aria-hidden="true" style="padding:0 38px 0 12px;font-size:13px;color:var(--rx-fg-faint);">搜索组件…</div>
  <div class="t-clear-glow" aria-hidden="true" style="border-radius:10px;"></div>
  <button class="t-clear-btn" aria-label="清除" style="position:absolute;top:50%;right:6px;transform:translateY(-50%);width:26px;height:26px;border-radius:50%;border:0;background:var(--rx-bg-elev-2);color:var(--rx-fg-dim);cursor:pointer;display:grid;place-items:center;font-size:14px;line-height:1;">×</button>
</div>`,
    trigger: 'is-animating',
  },
  '14-skeleton-reveal': {
    html: `<div class="t-skel" data-state="loading" style="position:relative;width:min(280px,100%);height:84px;overflow:hidden;--reveal-dur:400ms;--reveal-ease:ease-in-out;--reveal-blur:2px;--pulse-dur:1000ms;--pulse-count:1;--pulse-min:0.5">
  <div class="t-skel-skeleton is-pulsing" style="position:absolute;inset:0;">
    <div style="display:flex;align-items:center;gap:10px;padding:12px;border-radius:12px;background:var(--rx-bg-elev);">
      <div style="width:40px;height:40px;border-radius:50%;background:var(--rx-bg-elev-2);flex:none;"></div>
      <div style="flex:1;">
        <div style="height:10px;border-radius:6px;background:var(--rx-bg-elev-2);width:58%;"></div>
        <div style="height:8px;border-radius:6px;background:var(--rx-bg-elev-2);width:85%;margin-top:7px;"></div>
      </div>
    </div>
  </div>
  <div class="t-skel-content" style="position:absolute;inset:0;">
    <div style="display:flex;align-items:center;gap:10px;padding:12px;border-radius:12px;background:var(--rx-bg-elev);box-shadow:0 1px 4px rgba(0,0,0,0.15);">
      <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#8b5cf6,#6366f1);color:#fff;display:grid;place-items:center;font-size:13px;font-weight:700;flex:none;">RZ</div>
      <div style="flex:1;min-width:0;">
        <div style="font-size:12px;font-weight:700;color:var(--rx-fg);">Reasonix 设计系统</div>
        <div style="font-size:10px;color:var(--rx-fg-faint);margin-top:2px;">石墨主题 · 37 个组件已安装</div>
      </div>
    </div>
  </div>
</div>`,
    trigger: 'is-animating',
  },
  '15-shimmer-text': {
    html: `<span class="t-shimmer" data-text="正在生成回答…" style="display:inline-block;font-size:24px;font-weight:700;letter-spacing:0.02em;--shimmer-base:var(--rx-fg-faint);--shimmer-highlight:var(--rx-fg);--shimmer-band:300%;--shimmer-dur:2000ms;--shimmer-ease:linear">正在生成回答…</span>`,
    trigger: 'none',
  },
  '16-tabs-sliding': {
    html: `<div class="t-tabs" role="tablist" style="--tabs-bar-bg:var(--rx-bg-elev-2);--tabs-pill-bg:var(--rx-bg-elev);--tabs-text-muted:var(--rx-fg-dim);--tabs-text-active:var(--rx-fg);--tabs-dur:250ms;--tabs-ease:cubic-bezier(0.22,1,0.36,1)">
  <span class="t-tabs-pill" aria-hidden="true" style="width:64px;transform:translateX(3px);box-shadow:0 1px 3px rgba(0,0,0,0.2);"></span>
  <button class="t-tab" role="tab" aria-selected="true" style="width:64px;">概览</button>
  <button class="t-tab" role="tab" aria-selected="false" style="width:64px;">令牌</button>
  <button class="t-tab" role="tab" aria-selected="false" style="width:64px;">组件</button>
</div>`,
    trigger: 'hover',
  },
  '17-tooltip': {
    html: `<span class="t-tt-wrap" style="display:inline-block;">
  <button class="t-tt-trigger" aria-describedby="tt-rx-17" type="button" style="display:inline-flex;align-items:center;gap:7px;height:36px;padding:0 14px;border-radius:9px;border:1px solid var(--rx-border);background:var(--rx-bg-elev);color:var(--rx-fg);font-size:12px;font-weight:600;cursor:pointer;">
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
    什么是 Token？
  </button>
  <span class="t-tt" id="tt-rx-17" role="tooltip" style="--tt-bg:var(--rx-bg-elev);--tt-fg:var(--rx-fg);--tt-scale:0.98;--tt-in-dur:150ms;--tt-out-dur:50ms;--tt-in-ease:ease-out;--tt-out-ease:ease-in;--tt-delay:80ms;border:1px solid var(--rx-border-soft);">设计令牌，如 --rx-accent</span>
</span>`,
    trigger: 'hover',
  },
  '18-texts-reveal': {
    html: `<div class="t-stagger is-shown" style="text-align:center;--stagger-dur:500ms;--stagger-distance:12px;--stagger-stagger:40ms;--stagger-blur:3px;--stagger-ease:cubic-bezier(0.22,1,0.36,1)">
  <style>
    .t-stagger .t-stagger-line { opacity: 0; transform: translateY(var(--stagger-distance)); filter: blur(var(--stagger-blur)); }
    .t-stagger.is-shown .t-stagger-line { opacity: 1; transform: translateY(0); filter: blur(0); transition: opacity var(--stagger-dur) var(--stagger-ease), transform var(--stagger-dur) var(--stagger-ease), filter var(--stagger-dur) var(--stagger-ease); }
    .t-stagger.is-shown .t-stagger-line--2 { transition-delay: var(--stagger-stagger); }
    @keyframes t-stagger-pop { from { opacity: 0; transform: translateY(var(--stagger-distance)); filter: blur(var(--stagger-blur)); } to { opacity: 1; transform: translateY(0); filter: blur(0); } }
    .t-stagger.playing .t-stagger-line { animation: t-stagger-pop var(--stagger-dur) var(--stagger-ease) both; }
    .t-stagger.playing .t-stagger-line--2 { animation-delay: var(--stagger-stagger); }
  </style>
  <strong class="t-stagger-line t-stagger-line--1" style="display:block;font-size:20px;font-weight:800;color:var(--rx-fg);">构建更流畅的界面</strong>
  <span class="t-stagger-line t-stagger-line--2" style="display:block;margin-top:8px;font-size:12px;color:var(--rx-fg-dim);">27 个可复用 CSS 过渡，复制即用</span>
</div>`,
    trigger: 'is-animating',
  },
}
