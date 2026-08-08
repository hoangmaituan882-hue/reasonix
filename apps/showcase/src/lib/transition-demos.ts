// 过渡画廊演示数据 — 真实可动画的 HTML demo 结构（01-09）
// 每个 demo 对应 transition-catalog.ts 中同 id 的 CSS 触发机制，
// 并在内联 style 中定义所需的 tokens 变量默认值，保证纯 CSS 就能播放。
// 其他编号（10-18 / 19-27）由另外的模块段补齐。

export interface TransitionDemo {
  html: string
  trigger: string
}

export const TRANSITION_DEMOS: Record<string, TransitionDemo> = {
  // 01 卡片尺寸 — 切换 width/height（trigger: resize → 扩/缩容器）
  "01-card-resize": {
    html: '<div class="t-resize" style="width:80px;height:40px;background:var(--rx-accent-soft);border:1px solid var(--rx-accent);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--rx-accent);overflow:hidden;--resize-dur:300ms;--resize-ease:cubic-bezier(0.22, 1, 0.36, 1)">Rx</div>',
    trigger: 'resize',
  },

  // 02 数字弹入 — .is-animating + span.t-digit[data-stagger]（末两位错峰弹入）
  "02-number-pop-in": {
    html: '<span class="t-digit-group" style="font-size:26px;font-weight:800;color:var(--rx-accent);font-variant-numeric:tabular-nums;--digit-dur:500ms;--digit-distance:8px;--digit-stagger:70ms;--digit-blur:2px;--digit-ease:cubic-bezier(0.34, 1.45, 0.64, 1);--digit-dir-x:0;--digit-dir-y:1"><span class="t-digit">1</span><span class="t-digit">2</span><span class="t-digit">8</span><span class="t-digit" data-stagger="1">.</span><span class="t-digit" data-stagger="2">4</span></span>',
    trigger: 'is-animating',
  },

  // 03 通知徽章 — 容器 + 绝对定位 .t-badge[data-open] + 徽章点
  "03-notification-badge": {
    html: '<button style="position:relative;width:38px;height:38px;border-radius:11px;background:var(--rx-bg-elev);border:1px solid var(--rx-border-soft);display:flex;align-items:center;justify-content:center;cursor:pointer;--badge-slide-dur:260ms;--badge-pop-dur:500ms;--badge-pop-close-dur:180ms;--badge-fade-dur:400ms;--badge-fade-close-dur:180ms;--badge-blur:2px;--badge-offset-x:-8.2px;--badge-offset-y:12.4px;--badge-slide-ease:cubic-bezier(0.22, 1, 0.36, 1);--badge-pop-ease:cubic-bezier(0.22, 1, 0.36, 1);--badge-close-ease:cubic-bezier(0.22, 1, 0.36, 1)" aria-label="通知"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--rx-fg)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg><span class="t-badge" data-open="false"><span class="t-badge-dot" style="min-width:15px;height:15px;padding:0 4px;border-radius:8px;background:var(--rx-accent);color:var(--rx-accent-fg);font-size:10px;font-weight:700;line-height:15px;text-align:center">3</span></span></button>',
    trigger: 'data-open',
  },

  // 04 文字切换 — 旧文字 .t-swap-old 上移退场、新文字 .t-swap-new 从下入场
  "04-text-states-swap": {
    html: '<span class="t-text-swap" style="position:relative;display:inline-block;font-size:22px;font-weight:700;color:var(--rx-fg);--text-swap-dur:150ms;--text-swap-translate-y:4px;--text-swap-blur:2px;--text-swap-ease:ease-in-out;--text-swap-dur:250ms;--text-swap-ease:cubic-bezier(0.22,1,0.36,1);--text-swap-distance:8px;--text-swap-blur:2px"><style>.t-text-swap .t-swap-old,.t-text-swap .t-swap-new{display:inline-block;transition:transform var(--text-swap-dur) var(--text-swap-ease),opacity var(--text-swap-dur) var(--text-swap-ease),filter var(--text-swap-dur) var(--text-swap-ease);will-change:transform,opacity,filter}.t-text-swap .t-swap-new{position:absolute;inset:0;transform:translateY(var(--text-swap-translate-y));filter:blur(var(--text-swap-blur));opacity:0}.t-text-swap.is-animating .t-swap-old{transform:translateY(calc(var(--text-swap-translate-y) * -1));filter:blur(var(--text-swap-blur));opacity:0}.t-text-swap.is-animating .t-swap-new{transform:translateY(0);filter:blur(0);opacity:1}</style><span class="t-swap-old">Processing…</span><span class="t-swap-new">Done</span></span>',
    trigger: 'is-animating',
  },

  // 05 菜单下拉 — 触发按钮 + .t-dropdown[data-origin] 菜单（.is-open 展开）
  "05-menu-dropdown": {
    html: '<div style="position:relative;display:inline-block;--dropdown-open-dur:250ms;--dropdown-close-dur:150ms;--dropdown-pre-scale:0.97;--dropdown-closing-scale:0.99;--dropdown-ease:cubic-bezier(0.22, 1, 0.36, 1)"><button style="height:34px;padding:0 14px;border-radius:8px;border:1px solid var(--rx-border-soft);background:var(--rx-bg-elev);color:var(--rx-fg);font-size:12px;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:7px">操作<span style="font-size:9px;color:var(--rx-fg-faint)">▾</span></button><div class="t-dropdown" data-origin="top-center" style="position:absolute;top:calc(100% + 6px);left:50%;margin-left:-70px;width:140px;padding:4px;background:var(--rx-bg-elev);border:1px solid var(--rx-border-soft);border-radius:10px;box-shadow:0 12px 32px rgba(0,0,0,.35)"><div style="padding:7px 10px;border-radius:6px;font-size:11px;color:var(--rx-fg);cursor:pointer">重命名</div><div style="padding:7px 10px;border-radius:6px;font-size:11px;color:var(--rx-fg);cursor:pointer">复制链接</div><div style="padding:7px 10px;border-radius:6px;font-size:11px;color:var(--rx-fg);cursor:pointer">移至收藏</div><div style="padding:7px 10px;border-radius:6px;font-size:11px;color:var(--rx-err);cursor:pointer">删除</div></div></div>',
    trigger: 'is-open',
  },

  // 06 模态弹窗 — 遮罩 + 对话框（.is-open 从中心放大淡入）
  "06-modal": {
    html: '<div style="position:relative;width:220px;height:140px;border-radius:12px;background:var(--rx-bg-elev);border:1px solid var(--rx-border-soft);overflow:hidden;display:flex;align-items:center;justify-content:center"><div style="display:flex;flex-direction:column;gap:8px;align-items:center;opacity:.45"><div style="width:140px;height:9px;border-radius:4px;background:var(--rx-bg-soft)"></div><div style="width:100px;height:9px;border-radius:4px;background:var(--rx-bg-soft)"></div><div style="width:120px;height:26px;border-radius:7px;background:var(--rx-accent-soft)"></div></div><div class="t-modal" role="dialog" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.5);--modal-open-dur:250ms;--modal-close-dur:150ms;--modal-scale:0.96;--modal-scale-close:0.96;--modal-ease:cubic-bezier(0.22, 1, 0.36, 1)"><div style="width:150px;background:var(--rx-bg-elev);border:1px solid var(--rx-border-soft);border-radius:10px;padding:14px;text-align:center;box-shadow:0 18px 44px rgba(0,0,0,.45)"><div style="font-size:12px;font-weight:700;color:var(--rx-fg)">确认删除？</div><div style="margin-top:4px;font-size:10px;color:var(--rx-fg-faint)">此操作不可撤销</div><div style="margin-top:11px;display:flex;gap:7px;justify-content:center"><span style="flex:1;padding:5px 0;border-radius:6px;background:var(--rx-bg-soft);font-size:10px;font-weight:600;color:var(--rx-fg-dim)">取消</span><span style="flex:1;padding:5px 0;border-radius:6px;background:var(--rx-accent);font-size:10px;font-weight:600;color:var(--rx-accent-fg)">删除</span></div></div></div></div>',
    trigger: 'is-open',
  },

  // 07 面板展开 — 卡片内 .t-panel-slide[data-open] 滑入（translate + blur + fade）
  "07-panel-reveal": {
    html: '<div style="width:210px;border:1px solid var(--rx-border-soft);border-radius:12px;background:var(--rx-bg-elev);padding:12px;--panel-open-dur:400ms;--panel-close-dur:350ms;--panel-translate-y:100px;--panel-blur:2px;--panel-ease:cubic-bezier(0.22, 1, 0.36, 1)"><div style="display:flex;align-items:center;gap:9px"><span style="width:32px;height:32px;border-radius:50%;background:var(--rx-accent-soft);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:var(--rx-accent)">R</span><div><div style="font-size:11px;font-weight:700;color:var(--rx-fg)">reasonix</div><div style="font-size:9px;color:var(--rx-fg-faint)">正在编辑 project.md</div></div></div><div class="t-panel-slide" data-open="false" style="margin-top:10px;padding:9px 11px;background:var(--rx-bg-soft);border-radius:8px;font-size:10px;line-height:1.5;color:var(--rx-fg-dim)">面板详情：2 个文件被修改 · 3 个新片段已插入</div></div>',
    trigger: 'data-open',
  },

  // 08 页面切换 — .t-page-slide[data-page] 切换双页（页 1 左出、页 2 右进）
  "08-page-side-by-side": {
    html: '<div class="t-page-slide" data-page="1" style="position:relative;width:200px;height:122px;border-radius:12px;border:1px solid var(--rx-border-soft);overflow:hidden;--page-slide-dur:250ms;--page-fade-dur:250ms;--page-slide-distance:8px;--page-blur:3px;--page-stagger:0ms;--page-exit-enabled:1;--page-slide-ease:cubic-bezier(0.22, 1, 0.36, 1);--page-fade-ease:cubic-bezier(0.22, 1, 0.36, 1);--page-slide-dur:250ms;--page-fade-dur:250ms;--page-slide-distance:8px;--page-blur:3px;--page-ease:cubic-bezier(0.22,1,0.36,1)"><section class="t-page" data-page-id="1" style="background:var(--rx-bg-elev);padding:13px;display:flex;flex-direction:column;gap:7px"><div style="font-size:11px;font-weight:700;color:var(--rx-fg)">会话列表</div><div style="width:80%;height:9px;border-radius:4px;background:var(--rx-bg-soft)"></div><div style="width:62%;height:9px;border-radius:4px;background:var(--rx-bg-soft)"></div><div style="width:71%;height:9px;border-radius:4px;background:var(--rx-bg-soft)"></div><div style="width:54%;height:9px;border-radius:4px;background:var(--rx-bg-soft)"></div></section><section class="t-page" data-page-id="2" style="background:var(--rx-bg-elev);padding:13px;display:flex;flex-direction:column;gap:7px"><div style="font-size:11px;font-weight:700;color:var(--rx-fg)">会话详情</div><div style="width:92%;height:9px;border-radius:4px;background:var(--rx-accent-soft)"></div><div style="width:78%;height:9px;border-radius:4px;background:var(--rx-accent-soft)"></div><div style="width:86%;height:9px;border-radius:4px;background:var(--rx-accent-soft)"></div><div style="margin-top:6px;width:72px;height:24px;border-radius:7px;background:var(--rx-accent)"></div></section></div>',
    trigger: 'data-page',
  },

  // 09 图标交换 — .t-icon-swap[data-state] 同格堆叠两个 .t-icon（十字交叉淡入缩放）
  "09-icon-swap": {
    html: '<div class="t-icon-swap" data-state="a" style="width:48px;height:48px;border-radius:12px;background:var(--rx-bg-elev);border:1px solid var(--rx-border-soft);place-items:center;--icon-swap-dur:250ms;--icon-swap-blur:2px;--icon-swap-start-scale:0.25;--icon-swap-ease:ease-in-out"><span class="t-icon" data-icon="a" style="display:flex;align-items:center;justify-content:center"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="var(--rx-accent)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10L12 3l8 7"/><path d="M6 10v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8"/></svg></span><span class="t-icon" data-icon="b" style="display:flex;align-items:center;justify-content:center"><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="var(--rx-accent)" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12"/><path d="M18 6L6 18"/></svg></span></div>',
    trigger: 'data-state',
  },
}
